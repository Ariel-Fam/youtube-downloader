// components/DownloadButton.tsx
import { MouseEvent, useState } from "react";
import { Button } from "./ui/button";

interface DownloadButtonProps {
  src: string;       // e.g. "https://cdn.example.com/videos/123.mp4"
  filename?: string; // optional download name
}

export function DownloadButton({ src, filename }: DownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async (e: MouseEvent) => {
    e.preventDefault();
    if (isDownloading) return;
    setIsDownloading(true);
    setError(null);

    try {
      // 1. Fetch as blob (no credentials, no referrer to reduce CORS issues)
      const res = await fetch(src, {
        mode: "cors",
        credentials: "omit",
        referrerPolicy: "no-referrer",
      });
      if (!res.ok) throw new Error(`Download failed (${res.status})`);
      const blob = await res.blob();

      // 2. Create object URL & trigger download
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename || src.split("/").pop() || "video.mp4";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Download failed", err);
      setError("Download failed. Try again or open the video in a new tab.");
      // Fallback: open the video URL so the user can save manually
      window.open(src, "_blank", "noopener,noreferrer");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <Button
        variant="secondary"
        onClick={handleDownload}
        disabled={isDownloading}
        className="min-w-[180px]"
      >
        {isDownloading ? "Downloading..." : "⬇️ Download Video"}
      </Button>
      {error && (
        <p className="text-xs text-red-200 text-center max-w-xs">
          {error}
        </p>
      )}
    </div>
  );
}