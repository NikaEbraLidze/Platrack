import dotenv from "dotenv";
import { config } from "../config.js";

dotenv.config();

const API_KEY: string =
  config.youtubeApiKey ??
  (() => {
    throw new Error("YouTube API key is missing in config.");
  })();

// Type definitions for YouTube API response
interface YouTubeVideo {
  videoId: string;
  title: string;
  channel: string;
  thumbnail: string;
  url: string;
}

interface SearchResult {
  success: boolean;
  message?: string;
  data: YouTubeVideo[];
}

// Main function to search YouTube videos
export async function searchYouTubeVideos(
  keyword: string
): Promise<SearchResult> {
  const part = "snippet";
  const maxResults = 15;
  const type = "video";

  // Construct the API URL
  const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${encodeURIComponent(
    keyword
  )}&part=${part}&maxResults=${maxResults}&type=${type}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      const errorData = (await response.json()) as {
        error?: { message?: string };
      };
      throw new Error(errorData.error?.message ?? "Unknown API error");
    }

    const data = (await response.json()) as any;
    return formatResults(data.items);
  } catch (err: unknown) {
    console.error("YouTube search request failed:", err);
    return {
      success: false,
      message: err instanceof Error ? err.message : "An unknown error occurred",
      data: [],
    };
  }
}

// Helper function to format API response
function formatResults(videos: any[]): SearchResult {
  if (!videos || videos.length === 0) {
    return {
      success: false,
      message: "No videos found for the search term.",
      data: [],
    };
  }

  const results: YouTubeVideo[] = videos.map((video) => ({
    videoId: video.id.videoId,
    title: video.snippet.title,
    channel: video.snippet.channelTitle,
    thumbnail: video.snippet.thumbnails.default.url,
    url: `https://www.youtube.com/watch?v=${video.id.videoId}`,
  }));

  return { success: true, data: results };
}
