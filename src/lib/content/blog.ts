export interface BlogPostSummary {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  cover_image_url: string | null;
  category: string | null;
  author_name: string;
  published_at: string | null;
}

export interface BlogPostFull extends BlogPostSummary {
  content: string;
  seo_title: string | null;
  seo_description: string | null;
  og_image_url: string | null;
  updated_at: string;
}

/** Clearly-labeled demo content shown when Supabase isn't connected. */
export const BLOG_FALLBACK: BlogPostFull[] = [
  {
    id: "demo-1",
    slug: "demo-what-to-do-when-stranded",
    title: "[DEMO] What To Do the Moment You're Stranded",
    excerpt: "Demo article — replace via the admin Blog editor. A short checklist for the first two minutes after a breakdown.",
    content:
      "This is placeholder content generated for a fresh TRA install.\n\n1. Move somewhere safe if you can do so without crossing traffic.\n2. Turn on your hazard lights.\n3. Share your exact location when you request help.\n\nReplace this article from the admin dashboard before publishing the site.",
    cover_image_url: null,
    category: "Roadside Safety",
    author_name: "TRA Team",
    published_at: null,
    seo_title: "[DEMO] What To Do When Stranded — TRA",
    seo_description: "Demo blog post — replace before launch.",
    og_image_url: null,
    updated_at: new Date().toISOString(),
  },
];
