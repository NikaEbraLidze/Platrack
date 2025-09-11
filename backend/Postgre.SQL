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
