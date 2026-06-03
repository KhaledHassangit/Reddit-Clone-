"use client";

import { useState } from "react";
import { Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function ShareButton({
  path,
  title,
  className,
}: {
  path: string;
  title?: string;
  className?: string;
}) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  async function handleShare() {
    const shareUrl =
      typeof window !== "undefined"
        ? new URL(path, window.location.href).toString()
        : path;

    try {
      if (typeof navigator !== "undefined" && "share" in navigator) {
        await navigator.share({
          title: title ?? document.title,
          url: shareUrl,
        });
        return;
      }

      await (navigator as any).clipboard.writeText(shareUrl);
      setStatus("copied");
      window.setTimeout(() => setStatus("idle"), 2000);
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        return;
      }
      setStatus("error");
      window.setTimeout(() => setStatus("idle"), 2000);
    }
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      className={cn("inline-flex items-center gap-1 hover:text-foreground", className)}
      aria-label="Share link"
    >
      <Share2 className="size-4" />
      {status === "copied" ? "Copied" : status === "error" ? "Failed" : "Share"}
    </button>
  );
}
