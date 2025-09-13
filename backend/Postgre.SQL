-- Users table (registered)
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    is_verified BOOLEAN DEFAULT FALSE,
    last_ip INET,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Guests table (unregistered users)
CREATE TABLE guests (
    id BIGSERIAL PRIMARY KEY,
    ip_address INET NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT NOW()
);

-- User daily search limits
CREATE TABLE user_search_limits (
    id BIGSERIAL PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    search_date DATE NOT NULL,
    searches_count INT DEFAULT 0,
    CONSTRAINT unique_user_date UNIQUE (user_id, search_date)
);

-- Guest daily search limits
CREATE TABLE guest_search_limits (
    id BIGSERIAL PRIMARY KEY,
    guest_id BIGINT REFERENCES guests(id) ON DELETE CASCADE,
    search_date DATE NOT NULL,
    searches_count INT DEFAULT 0,
    CONSTRAINT unique_guest_date UNIQUE (guest_id, search_date)
);

-- Search logs (for both registered and guest users)
CREATE TABLE search_logs (
    id BIGSERIAL PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    guest_id BIGINT REFERENCES guests(id) ON DELETE SET NULL,
    query TEXT NOT NULL,
    platform VARCHAR(50) NOT NULL, -- e.g. youtube, spotify, wikipedia
    ip_address INET NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE reviews (
    id BIGSERIAL PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    guest_id BIGINT REFERENCES guests(id) ON DELETE CASCADE,
    rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    review_date DATE GENERATED ALWAYS AS (created_at::DATE) STORED,
    -- Ensure at least one of user_id or guest_id is present
    CONSTRAINT user_or_guest CHECK (
        (user_id IS NOT NULL AND guest_id IS NULL) OR 
        (guest_id IS NOT NULL AND user_id IS NULL)
    ),
    -- Now we can use review_date safely
    CONSTRAINT unique_user_review_per_day UNIQUE (user_id, review_date),
    CONSTRAINT unique_guest_review_per_day UNIQUE (guest_id, review_date)
);