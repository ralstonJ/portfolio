"use client";
import { useState } from "react";

type Props = { id: string; start: number; title: string };

export default function VideoPoster({ id, start, title }: Props) {
  const [playing, setPlaying] = useState(false);
  const mm = `${Math.floor(start / 60)}:${String(start % 60).padStart(2, "0")}`;

  if (playing) {
    return (
      <div className="video">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?start=${start}&autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    );
  }
  return (
    <button className="video poster" onClick={() => setPlaying(true)} aria-label={`Play ${title}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`} alt="" />
      <span className="poster-shade" />
      <span className="play">
        <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden><path fill="currentColor" d="M8 5v14l11-7z" /></svg>
      </span>
      <span className="poster-meta">
        <strong>{title}</strong>
        <span>Starts at {mm}</span>
      </span>
    </button>
  );
}
