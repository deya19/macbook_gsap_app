import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2;
  }, []);
  return (
    <section id="hero">
      <div>
        <h1>MacBook Pro</h1>
        <img src="/title.png" alt="MacBook Pro" />
      </div>

      <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />

      <button>Buy</button>

      <p>From $1599 or $133/mo. with Apple One</p>
    </section>
  );
}
