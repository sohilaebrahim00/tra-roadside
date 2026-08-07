import { Container } from "@/components/ui/container";
import { VideoMaskText } from "@/components/media/video-mask-text";

/** The site's one signature moment — used exactly once, not a repeatable section template. */
export function SignatureWordSection() {
  return (
    <section className="overflow-hidden bg-white py-6 sm:py-10">
      {/* Height follows a fixed aspect ratio (see VideoMaskText), so without
          a width cap this grows unbounded on wide desktop viewports. Default
          width (matches every other section) so the word reads as wide,
          bold, and dominant rather than boxed into a narrow column. */}
      <Container>
        <VideoMaskText word="TRA" placement="home-letter-mask" />
      </Container>
    </section>
  );
}
