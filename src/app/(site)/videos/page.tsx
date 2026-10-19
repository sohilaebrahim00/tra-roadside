import type { Metadata } from "next";
import { pageUrls } from "@/lib/seo";
import { Film } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { VideoGrid } from "@/components/videos/video-grid";
import { getVideos, type VideoItem } from "@/lib/data/videos";
import { getVideosForPlacement } from "@/data/media-registry";
import { Button } from "@/components/ui/button";
import { YoutubeIcon } from "@/components/brand/social-icons";
import { BUSINESS } from "@/lib/content/business";
import { env } from "@/lib/env";
import { HeroBackdrop } from "@/components/brand/hero-backdrop";

export const metadata: Metadata = {
  title: "Videos",
  description: "Watch TRA roadside assistance in action across the Dallas–Fort Worth Metroplex.",
  ...pageUrls("/videos"),
};

export default async function VideosPage() {
  const dbVideos = await getVideos();
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
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: env.siteUrl }, { name: "Videos", url: `${env.siteUrl}/videos` }]} />
      <section className="relative isolate overflow-hidden border-b border-ink-950/8 bg-ink-950 py-16 text-white sm:py-20">
        <HeroBackdrop />
        <Container>
          <SectionHeading as="h1" eyebrow="Watch" title="See TRA in action" tone="light" />
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          {videos.length > 0 ? (
            <VideoGrid items={videos} />
          ) : (
            <div className="mx-auto flex max-w-lg flex-col items-center rounded-2xl border border-dashed border-ink-950/15 px-8 py-16 text-center dark:border-white/15">
              <Film className="h-8 w-8 text-ink-400" aria-hidden="true" />
              <p className="mt-3 font-display text-lg font-semibold text-ink-950 dark:text-white">Video library coming soon</p>
              <p className="mt-1.5 text-sm text-ink-600 dark:text-ink-200">Subscribe on YouTube to see new videos as they&apos;re posted.</p>
              <Button href={BUSINESS.socials.youtube} variant="outline" size="sm" className="mt-5" icon={<YoutubeIcon className="h-4 w-4" aria-hidden="true" />}>
                @tra_roadside
              </Button>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
