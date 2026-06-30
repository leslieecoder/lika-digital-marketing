import Image from "next/image";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import type { PlaceholderImage as PlaceholderImageType } from "@/config/client";

type PortfolioDeviceMockupProps = {
  image: PlaceholderImageType;
  sizes: string;
  priority?: boolean;
  className?: string;
  aspectClassName?: string;
};

function isGif(src: string) {
  return /\.gif($|[?#])/i.test(src);
}

export function PortfolioDeviceMockup({
  image,
  sizes,
  priority = false,
  className = "",
  aspectClassName = "aspect-[16/10]",
}: PortfolioDeviceMockupProps) {
  if (!image.src && !image.videoSrc) {
    return <PlaceholderImage image={image} variant="gallery" className={className} />;
  }

  return (
    <div className={`rounded-4xl border border-[#e9dcff] bg-[linear-gradient(180deg,#ffffff_0%,#f7f2ff_100%)] p-3 shadow-[0_20px_60px_rgba(87,53,164,0.12)] sm:p-4 ${className}`}>
      <div className="overflow-hidden rounded-[1.6rem] border border-[#d9c8fb] bg-[#20143d] shadow-[0_16px_40px_rgba(43,20,91,0.22)]">
        <div className="flex items-center gap-2 border-b border-white/10 bg-[linear-gradient(180deg,#2f1a59_0%,#241246_100%)] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff8a8a]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffd36e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#77e4a1]" />
          <span className="ml-3 hidden min-w-0 flex-1 truncate rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[0.7rem] font-medium tracking-[0.14em] text-white/58 sm:block">
            {image.label}
          </span>
        </div>

        <div className={`relative overflow-hidden bg-slate-950 ${aspectClassName}`}>
          {image.videoSrc ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload={priority ? "auto" : "metadata"}
              poster={image.posterSrc ?? image.src}
              className="absolute inset-0 h-full w-full object-cover object-top"
            >
              <source src={image.videoSrc} type="video/mp4" />
            </video>
          ) : image.src ? (
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={priority}
              sizes={sizes}
              unoptimized={isGif(image.src)}
              className="object-cover object-top"
            />
          ) : null}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(180deg,rgba(7,9,18,0)_0%,rgba(7,9,18,0.24)_100%)]" />
        </div>
      </div>
    </div>
  );
}