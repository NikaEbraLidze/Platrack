import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { PlatYoutube } from "./pages/PlatYoutube"
import { PlatTikTok } from "./pages/PlatTikTok"
import { PlatSpotify } from "./pages/PlatSpotify"
import { PlatWikipedia } from "./pages/PlatWikipedia" 
import { Layout } from "./pages/Layout"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout-იანი გვერდები */}
        <Route element={<Layout />}>
          <Route path="/youtube/search" element={<PlatYoutube />} />
          <Route path="/tiktok/search" element={<PlatTikTok />} />
          <Route path="/spotify/search" element={<PlatSpotify />} />
          <Route path="/wikipedia/search" element={<PlatWikipedia />} />
        </Route>

        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}


