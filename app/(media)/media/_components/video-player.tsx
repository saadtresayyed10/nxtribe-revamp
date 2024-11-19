import HeroVideoDialog from "@/components/ui/hero-video-dialog";

interface VideoPlayerProps {
  lightLink: string;
  lightImage: string;
  darkLink: string;
  darkImage: string;
}

export function VideoPlayer({
  darkImage,
  darkLink,
  lightImage,
  lightLink,
}: VideoPlayerProps) {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc={lightLink}
        thumbnailSrc={lightImage}
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc={darkLink}
        thumbnailSrc={darkImage}
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
