import { Container } from "@/components/ui/container";
import { PhotoMaskText } from "@/components/media/photo-mask-text";

/** The site's one signature moment — used exactly once, not a repeatable section template. */
export function SignatureWordSection() {
  return (
    <section className="overflow-hidden bg-white py-6 sm:py-10">
      {/* Height follows an aspect ratio set on the wrapper (see PhotoMaskText),
          so without a width cap this grows unbounded on wide desktop
          viewports. Default width (matches every other section) so the word
          reads as wide, bold, and dominant rather than boxed into a narrow
          column. The ratio is narrower below `sm`, which is what scales the
          letterforms to a phone instead of shrinking the desktop composition.

          The fill is the business's own battery job photo: dark and high in
          contrast, so the letters stay crisp against the white section, and
          it puts the main service in the signature moment. */}
      <Container>
        <PhotoMaskText id="signature-tra" word="TRA" photo="/images/battery-install.webp" />
      </Container>
    </section>
  );
}
