import Link from "next/link";
import { Film } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { VideoGrid } from "@/components/videos/video-grid";
import { getVideos, type VideoItem } from "@/lib/data/videos";
import { getVideosForPlacement } from "@/data/media-registry";
import { BUSINESS } from "@/lib/content/business";
import { YoutubeIcon } from "@/components/brand/social-icons";

export async function VideoSection() {
  const dbVideos = await getVideos();
  // Locally-registered clips (see src/data/media-registry.ts) never live in
  // the videos DB table, so without this the homepage preview only ever
  // shows CMS-managed videos and silently drops anything registered via the
  // local media pipeline — same source /videos already merges in.
  const localVideos: VideoItem[] = getVideosForPlacement("gallery-item").map((v) => ({
    id: v.id,
    title: v.title,
    description: null,
    youtube_id: null,
    video_url: v.source,
    poster_url: v.poster ?? null,
    duration_seconds: v.durationSeconds ?? null,
    category: v.category,
  }));
  const videos = [...localVideos, ...dbVideos];

  return (
    <section className="py-12 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Watch" title="See TRA in action" align="center" />

        {videos.length > 0 ? (
          <>
            <div className="mt-10">
              <VideoGrid items={videos.slice(0, 6)} />
            </div>
            <div className="mt-8 text-center">
              <Link href="/videos" className="text-sm font-semibold text-red-600 hover:text-red-700">
                View all videos →
              </Link>
            </div>
          </>
        ) : (
          <div className="mx-auto mt-10 flex max-w-lg flex-col items-center rounded-2xl border border-dashed border-ink-950/15 px-8 py-12 text-center dark:border-white/15">
            <Film className="h-8 w-8 text-ink-400" aria-hidden="true" />
            <p className="mt-3 font-display text-lg font-semibold text-ink-950 dark:text-white">
              Video library coming soon
            </p>
            <p className="mt-1.5 text-sm text-ink-600 dark:text-ink-200">
              Real service videos will be added here through the admin dashboard. Subscribe on
              YouTube to see them as they&apos;re posted.
            </p>
            <Button
              href={BUSINESS.socials.youtube}
              variant="outline"
              size="sm"
              className="mt-5"
              icon={<YoutubeIcon className="h-4 w-4" aria-hidden="true" />}
            >
              @tra_roadside
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
