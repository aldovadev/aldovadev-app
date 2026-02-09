"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";

interface GooeyNavItem {
  label: string;
  href: string;
}

export interface GooeyNavProps {
  items: GooeyNavItem[];
  animationTime?: number;
  particleCount?: number;
  particleDistances?: [number, number];
  particleR?: number;
  timeVariance?: number;
  colors?: number[];
  initialActiveIndex?: number;
  onItemClick?: (href: string) => void;
}

const GooeyNav: React.FC<GooeyNavProps> = ({
  items,
  animationTime = 600,
  particleCount = 15,
  particleDistances = [90, 10],
  particleR = 100,
  timeVariance = 300,
  colors = [1, 2, 3, 1, 2, 3, 1, 4],
  initialActiveIndex = -1,
  onItemClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const filterRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(initialActiveIndex);

  const noise = (n = 1) => n / 2 - Math.random() * n;

  const getXY = (
    distance: number,
    pointIndex: number,
    totalPoints: number,
  ): [number, number] => {
    const angle =
      (((360 + noise(8)) / totalPoints) * pointIndex * Math.PI) / 180;
    return [distance * Math.cos(angle), distance * Math.sin(angle)];
  };

  const createParticle = (
    i: number,
    t: number,
    d: [number, number],
    r: number,
  ) => {
    const rotate = noise(r / 10);
    return {
      start: getXY(d[0], particleCount - i, particleCount),
      end: getXY(d[1] + noise(7), particleCount - i, particleCount),
      time: t,
      scale: 1 + noise(0.2),
      color: colors[Math.floor(Math.random() * colors.length)],
      rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10,
    };
  };

  const makeParticles = (element: HTMLElement) => {
    const d: [number, number] = particleDistances;
    const r = particleR;
    const bubbleTime = animationTime * 2 + timeVariance;
    element.style.setProperty("--time", `${bubbleTime}ms`);
    for (let i = 0; i < particleCount; i++) {
      const t = animationTime * 2 + noise(timeVariance * 2);
      const p = createParticle(i, t, d, r);
      element.classList.remove("active");
      setTimeout(() => {
        const particle = document.createElement("span");
        const point = document.createElement("span");
        particle.classList.add("gooey-particle");
        particle.style.setProperty("--start-x", `${p.start[0]}px`);
        particle.style.setProperty("--start-y", `${p.start[1]}px`);
        particle.style.setProperty("--end-x", `${p.end[0]}px`);
        particle.style.setProperty("--end-y", `${p.end[1]}px`);
        particle.style.setProperty("--time", `${p.time}ms`);
        particle.style.setProperty("--scale", `${p.scale}`);
        particle.style.setProperty(
          "--color",
          `var(--gooey-color-${p.color}, white)`,
        );
        particle.style.setProperty("--rotate", `${p.rotate}deg`);
        point.classList.add("gooey-point");
        particle.appendChild(point);
        element.appendChild(particle);
        requestAnimationFrame(() => {
          element.classList.add("active");
        });
        setTimeout(() => {
          try {
            element.removeChild(particle);
          } catch {
            /* already removed */
          }
        }, t);
      }, 30);
    }
  };

  const updateEffectPosition = useCallback((element: HTMLElement) => {
    if (!containerRef.current || !filterRef.current || !textRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const pos = element.getBoundingClientRect();
    const styles = {
      left: `${pos.x - containerRect.x}px`,
      top: `${pos.y - containerRect.y}px`,
      width: `${pos.width}px`,
      height: `${pos.height}px`,
    };
    Object.assign(filterRef.current.style, styles);
    Object.assign(textRef.current.style, styles);
    textRef.current.innerText = element.innerText;
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    index: number,
  ) => {
    e.preventDefault();
    const liEl = e.currentTarget;
    if (activeIndex === index) return;
    setActiveIndex(index);
    updateEffectPosition(liEl);
    if (filterRef.current) {
      const particles = filterRef.current.querySelectorAll(".gooey-particle");
      particles.forEach((p) => filterRef.current!.removeChild(p));
    }
    if (textRef.current) {
      textRef.current.classList.remove("active");
      void textRef.current.offsetWidth;
      textRef.current.classList.add("active");
    }
    if (filterRef.current) {
      makeParticles(filterRef.current);
    }
    onItemClick?.(items[index].href);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLAnchorElement>,
    index: number,
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const liEl = e.currentTarget.parentElement;
      if (liEl) {
        handleClick(
          { currentTarget: liEl } as React.MouseEvent<HTMLAnchorElement>,
          index,
        );
      }
    }
  };

  // Expose setActiveIndex for external scroll-spy
  useEffect(() => {
    if (!containerRef.current) return;
    (containerRef.current as HTMLDivElement & { __setActive?: (i: number) => void }).__setActive = (i: number) => {
      if (i === activeIndex) return;
      setActiveIndex(i);
      const li = navRef.current?.querySelectorAll("li")[i] as HTMLElement;
      if (li) updateEffectPosition(li);
    };
  }, [activeIndex, updateEffectPosition]);

  useEffect(() => {
    if (!navRef.current || !containerRef.current) return;
    if (activeIndex < 0) return; // No active item
    const activeLi = navRef.current.querySelectorAll("li")[
      activeIndex
    ] as HTMLElement;
    if (activeLi) {
      updateEffectPosition(activeLi);
      textRef.current?.classList.add("active");
      filterRef.current?.classList.add("active");
    }
    const resizeObserver = new ResizeObserver(() => {
      const currentActiveLi = navRef.current?.querySelectorAll("li")[
        activeIndex
      ] as HTMLElement;
      if (currentActiveLi) {
        updateEffectPosition(currentActiveLi);
      }
    });
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [activeIndex, updateEffectPosition]);

  return (
    <div className="relative overflow-hidden" ref={containerRef}>
      <nav
        className="flex relative"
        style={{ transform: "translate3d(0,0,0.01px)" }}
      >
          <ul
            ref={navRef}
            className="gooey-nav-list flex gap-2 list-none p-0 m-0 relative z-3"
            style={{
              color: "var(--gooey-text-color)",
              textShadow: "0 1px 1px hsl(205deg 30% 10% / 0.1)",
            }}
          >
            {items.map((item, index) => (
              <li
                key={index}
                className={`rounded-lg relative cursor-pointer transition-[background-color_color_box-shadow] duration-300 ease shadow-[0_0_0.5px_1.5px_transparent] ${
                  activeIndex === index ? "active" : ""
                }`}
                style={{ color: "var(--gooey-text-color)" }}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="outline-none inline-block text-sm font-medium"
                  style={{ padding: "13px 28px" }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      <span className="gooey-effect gooey-filter" ref={filterRef} />
      <span className="gooey-effect gooey-text" ref={textRef} />
    </div>
  );
};

export default GooeyNav;
