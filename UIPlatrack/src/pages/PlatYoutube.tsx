import "./styles/PlatPages.scss";
import { useState } from "react";
import { PlatformsContent } from "../components/atoms/contents/PlatformsContent";
import { PlatformsInput } from "../components/atoms/inputs/PlatformsInput";
import { PlatSearchImg } from "../components/molecules/PlatSearchImg";
import { PlatContainer } from "../components/organisms/PlatContainer";
import { Youtube } from "../assets/assets";
import {
  LoadingIndicator,
  BackendError,
} from "../components/atoms/others/LoadingAndErrorMessage";
import { DailyLimit } from "../components/atoms/others/DailyLimit";

export function PlatYoutube() {
  const [input, setInput] = useState("");
  const [data, setData] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [limitReached, setLimitReached] = useState(false); // ← added state
  const [dailyLimit, setDailyLimit] = useState<number | undefined>();

  async function onClick() {
    if (!input.trim()) return;

    setLoading(true);
    setError(null);
    setData(null);
    setLimitReached(false); // reset limit flag on new search
    setDailyLimit(undefined);

    try {
      const res = await fetch("http://localhost:5000/search/youtube", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ q: input }),
      });

      if (!res.ok) {
        const errBody = await res.json().catch(() => null);

        // Detect daily limit error from backend
        if (errBody?.error === "You have reached your daily search limit.") {
          setLimitReached(true);
          setError(errBody.error);
        } else {
          throw new Error(errBody?.error || "Failed to fetch videos");
        }
      } else {
        const result = await res.json();
        setData(result.data);
        if (result.dailyLimit)
          setDailyLimit(Number(result.dailyLimit) - result.usedCount);
      }
    } catch (err: any) {
      console.error("YouTube search failed:", err);
      if (!limitReached) {
        setError(err.message || "Unexpected error");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="plat-pages">
      {dailyLimit && <DailyLimit limitNumber={dailyLimit} />}
      <PlatformsContent
        heading="Dive into unforgettable videos"
        paragraph="Search across YouTube’s ocean of content — AI surfaces the exact video you need, whether it's a tutorial, a deep dive, or that one interview you barely remember."
      />

      <PlatformsInput
        value={input}
        onChange={setInput}
        onClick={onClick}
        icon={Youtube}
        altText="search youtube videos, channels and shorts"
        color="#f51c1c"
      />

      {loading && <LoadingIndicator />}
      {error && <BackendError error={error} limitReached={limitReached} />}

      {!loading && !error && data?.length ? (
        <PlatContainer variant="youtube" rawData={data} />
      ) : !loading && !error && !data ? (
        <PlatSearchImg />
      ) : null}
    </div>
  );
}
