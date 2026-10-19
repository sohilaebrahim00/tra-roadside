const VIEW_W = 1000;
const VIEW_H = 340;

/**
 * The word occupies roughly the middle 45% of the 1000-unit viewBox. On a
 * phone, a narrower wrapper ratio plus `preserveAspectRatio="slice"` crops the
 * empty left and right thirds away, so the letterforms fill ~86% of the screen
 * width instead of shrinking with the desktop composition. Done in CSS on the
 * wrapper, so the right composition is in the first paint with no JS.
 */
const MOBILE_ASPECT = "aspect-[520/340]";
const DESKTOP_ASPECT = "sm:aspect-[1000/340]";

/** The band of the viewBox the photo covers: the word plus a margin. */
const PHOTO = { x: 250, y: 0, width: 500, height: VIEW_H };

/**
 * Signature treatment: a large brand word with a job photo visible only inside
 * the letters, drifting slowly so it feels alive.
 *
 * This used to be a video in an SVG <foreignObject>. WebKit (Safari, and every
 * browser on iPhone) does not clip foreignObject content, so on iPhones the
 * video showed as a plain rectangle, shifted and overflowing the screen, with
 * no letters at all. An SVG <image> under a <clipPath> of <text> is clipped
 * correctly by every engine, and it costs one ~40 KB photo instead of a 1.2 MB
 * video.
 *
 * The clip sits on a <g> and the drift animates the <image> inside it, so the
 * letters stay still while the photo moves. A solid ink fill under the photo
 * keeps the word readable if the image fails to load. The real <h2> is the
 * accessible text; the SVG is decorative.
 *
 * Use once as a signature moment, not as a repeatable section template.
 */
export function PhotoMaskText({
  word,
  photo,
  id,
  className,
}: {
  word: string;
  photo: string;
  /** Unique within the page; names the clipPath. */
  id: string;
  className?: string;
}) {
  const clipId = `${id}-clip`;
  return (
    <div className={`relative ${MOBILE_ASPECT} ${DESKTOP_ASPECT} ${className ?? ""}`}>
      <h2 className="sr-only">{word}</h2>
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <defs>
          <clipPath id={clipId}>
            <text
              x={VIEW_W / 2}
              y={VIEW_H / 2}
              textAnchor="middle"
              dominantBaseline="middle"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700, textTransform: "uppercase" }}
              fontSize={VIEW_H * 0.88}
              // Negative tracking only: a forced textLength spread the
              // letters apart until they read as three separate glyphs.
              letterSpacing={-VIEW_H * 0.04}
            >
              {word}
            </text>
          </clipPath>
        </defs>
        <g clipPath={`url(#${clipId})`}>
          <rect x={PHOTO.x} y={PHOTO.y} width={PHOTO.width} height={PHOTO.height} fill="#0a0a0b" />
          <image
            href={photo}
            x={PHOTO.x}
            y={PHOTO.y}
            width={PHOTO.width}
            height={PHOTO.height}
            preserveAspectRatio="xMidYMid slice"
            className="mask-drift"
          />
        </g>
      </svg>
    </div>
  );
}
