import React, { useState, useEffect, useMemo } from "react";

function SVGBackgrounds({ starColor = "#ffffff" }) {
  const [shootingStar, setShootingStar] = useState(null);

  const stars = useMemo(
    () =>
      Array.from({ length: 150 }, () => ({
        x: Math.random() * 900,
        y: Math.random() * 300,
        size: Math.random() * 0.2 + 0.5,
        delay: Math.random() * 5,
      })),
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setShootingStar({
        x: Math.random() * 900,
        y: Math.random() * 300,
      });
      setTimeout(() => setShootingStar(null), 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <svg
        className="starry-background"
        viewBox="0 0 900 600"
        width="900"
        height="600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0" y="0" width="900" height="600" fill="transparent" />

        {/* ستاره‌ها */}
        <g fill={starColor}>
          {stars.map((star, index) => (
            <circle
              key={index}
              cx={star.x}
              cy={star.y}
              r={star.size}
              fill={starColor}
              style={{
                animation: `blink 2s ease-in-out infinite, moveStar 6s ease-in-out infinite`,
                animationDelay: `${star.delay}s`,
              }}
            />
          ))}
        </g>

        {/* شهاب‌سنگ */}
        {shootingStar && (
          <line
            x1={shootingStar.x}
            y1={shootingStar.y}
            x2={shootingStar.x + 80}
            y2={shootingStar.y + 20}
            stroke={starColor}
            strokeWidth="2"
            style={{
              animation: "shoot 0.8s linear forwards",
            }}
          />
        )}
      </svg>

      <style jsx>{`
        @keyframes blink {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes moveStar {
          0% {
            transform: translate(0px, 0px);
          }
          50% {
            transform: translate(0.5px, -0.5px);
          }
          100% {
            transform: translate(0px, 0px);
          }
        }

        @keyframes shoot {
          0% {
            opacity: 1;
            stroke-width: 2px;
          }
          100% {
            opacity: 0;
            stroke-width: 0px;
            transform: translateX(200px) translateY(40px);
          }
        }
      `}</style>
    </>
  );
}

export default SVGBackgrounds;
