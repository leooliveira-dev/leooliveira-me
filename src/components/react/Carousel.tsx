import { useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode, UIEvent } from "react";
import { get } from "lodash";

type Props = {
  children: ReactNode;
  length: number;
};

const Carousel = (props: Props) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);

  const cardWidth = useMemo(
    () => carouselRef.current?.clientWidth ?? 0,
    [carouselRef.current?.clientWidth]
  );
  const fullScrollWidth = useMemo(
    () => carouselRef.current?.scrollWidth ?? 0,
    [carouselRef.current?.scrollWidth]
  );

  const currentCard = useMemo(
    () => Math.ceil(currentScrollPosition / cardWidth),
    [currentScrollPosition]
  );

  const handleBulletScroll = (to: number) => {
    carouselRef.current?.scrollTo(to * cardWidth, 0);
  };

  const handleUserScroll = (event: UIEvent<HTMLDivElement>) => {
    setCurrentScrollPosition(get(event.target, "scrollLeft") ?? 0);
  };

  const renderBullets = () => {
    const bullets = [];
    for (let i = 0; i < props.length; i++) {
      bullets.push(
        <li
          className={`transition-default w-full cursor-pointer p-1 ${
            i === currentCard ? "bg-zinc-700" : "bg-zinc-300"
          }`}
          key={i}
          onClick={() => handleBulletScroll(i)}
        ></li>
      );
    }
    return bullets;
  };
  return (
    <>
      <div
        ref={carouselRef}
        onScroll={handleUserScroll}
        className="overflow-y-scroll snap-proximity scroll-smooth snap-x grid gap-6"
        style={{ gridTemplateColumns: `repeat(${props.length}, 75vw)` }}
      >
        {props.children}
      </div>
      <ul className="flex flex-row gap-1 w-full">{renderBullets()}</ul>
    </>
  );
};

export default Carousel;
