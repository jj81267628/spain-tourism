"use client";

interface Props {
  images: string[];
  activeIndex: number;
}

export default function DynamicBackground({ images, activeIndex }: Props) {
  return (
    <div className="fixed inset-0 -z-10">
      {images.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === activeIndex ? 1 : 0 }}
        >
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
}
