# Couple Website

A romantic single-page couple website built with Vite, React, TypeScript, Tailwind CSS, motion, Swiper, and Three.js.

The first screen is a full-viewport video intro inspired by ryoyatakashima.com. Below that, the page continues with the relationship landing page sections from the couple-landing-page reference: hero, timeline, gallery, stats, interactive heart, and footer.

## Add Your Video

Place your intro video at:

```text
public/hero-video.mp4
```

Optional poster image:

```text
public/video-poster.jpg
```

The video is rendered with `object-cover`, so it fills the full browser viewport and resizes with the window.

## Development

```bash
pnpm install
pnpm run dev
```

## Build

```bash
pnpm run build
```