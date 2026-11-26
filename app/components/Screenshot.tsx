"use client";
import { useState } from "react";

type Props = { url: string; domain: string; name: string; image?: string; accent: string };

export default function Screenshot({ url, domain, name, image, accent }: Props) {
  const sources = [
    image,
    `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=1440&h=900`,
  ].filter(Boolean) as string[];
  const [i, setI] = useState(0);
  const src = sources[i];

  return (
    <div className="shot" style={{ "--accent": accent } as React.CSSProperties}>
      <div className="shot-bar">
        <span className="dots"><i /><i /><i /></span>
        <span className="addr">
          <svg width="10" height="10" viewBox="0 0 24 24" aria-hidden>
            <path fill="currentColor" d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm-3 8V7a3 3 0 1 1 6 0v3H9Z" />
          </svg>
          {domain}
        </span>
      </div>
      <div className="shot-view">
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={`${name} website`} loading="lazy" onError={() => setI((n) => n + 1)} />
        ) : (
          <div className="shot-fallback">
            <span className="fb-mark">{name[0]}</span>
            <span className="fb-name">{name}</span>
            <span className="fb-lines"><i /><i /><i /></span>
          </div>
        )}
      </div>
    </div>
  );
}
