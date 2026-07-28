const fallbackStillLife = "/images/premium/fallback-still-life.webp";

export const siteContent = {
  brand: {
    name: "Little Upgrades",
    tagline: "Curated daily goods",
  },
  email: "info@littleupgrades.co.uk",
  location: "Manchester, UK",
  hero: {
    title: "Curated upgrades for daily life.",
    summary:
      "We source practical products across kitchen, toys, pets, skincare, travel, workspace, and home life, then narrow the shortlist to what feels genuinely useful and worth keeping.",
    primaryCta: { label: "Explore the collection", href: "/shop" },
    secondaryCta: { label: "Get in touch", href: "/contact" },
    media: {
      alt: "Premium daily-life still life with kettle, amber bottle, ceramics, and greenery",
      sources: [
        "/images/premium/hero-premium.webp",
        "/images/hero-product.avif",
        fallbackStillLife,
      ],
    },
  },
  sourcingAreas: [
    {
      name: "Kitchen",
      description: "Tools, organisers, prep essentials, and storage that reduce daily friction.",
      media: {
        alt: "Kitchen still life with ceramic bowl and folded linen",
        sources: [fallbackStillLife, "/images/home-goods.avif"],
      },
    },
    {
      name: "Toys & Play",
      description: "Better-made items for play, tidying, travel, and family routines.",
      media: {
        alt: "Natural wooden toys in a calm neutral setting",
        sources: ["/images/premium/toys-play.webp", fallbackStillLife],
      },
    },
    {
      name: "Pets",
      description: "Practical upgrades for feeding, cleanup, transport, and everyday care.",
      media: {
        alt: "Premium pet essentials with ceramic bowl and leather collar",
        sources: ["/images/premium/pets-care.webp", fallbackStillLife],
      },
    },
    {
      name: "Skincare",
      description: "Thoughtful tools and accessories that keep bathroom routines simple.",
      media: {
        alt: "Skincare and care items arranged on stone",
        sources: ["/images/premium/travel-care.webp", fallbackStillLife],
      },
    },
    {
      name: "Travel",
      description: "Compact carry, packing, and on-the-go items worth keeping in rotation.",
      media: {
        alt: "Lifestyle travel scene representing on-the-go daily essentials",
        sources: ["/images/lifestyle.avif", "/images/premium/travel-care.webp", fallbackStillLife],
      },
    },
    {
      name: "Workspace",
      description: "Desk, charging, and organisation products that support focused work.",
      media: {
        alt: "Thoughtful workspace scene with desk accessories",
        sources: ["/images/workspace.avif", fallbackStillLife],
      },
    },
  ],
  principles: [
    {
      title: "Useful first",
      description:
        "Every product needs to earn its place through function before anything else.",
    },
    {
      title: "Chosen slowly",
      description:
        "We cast wide, compare properly, and shortlist only the options that hold up.",
    },
    {
      title: "Low visual noise",
      description:
        "We prefer products that feel calm, well-resolved, and easy to keep around.",
    },
  ],
  sourcingSteps: [
    {
      title: "Source widely",
      description:
        "We look across categories instead of boxing the business into one niche.",
    },
    {
      title: "Compare properly",
      description:
        "Materials, reviews, ease of use, and long-term practicality all matter.",
    },
    {
      title: "Shortlist carefully",
      description:
        "Only the products that stay strong under scrutiny move to the next stage.",
    },
    {
      title: "Publish selectively",
      description:
        "The live collection stays edited, not bloated with filler or trend clutter.",
    },
  ],
  standards: ["Durability", "Utility", "Ease of use", "Low visual noise"],
  inquiryTopics: [
    "Product suggestions",
    "Sourcing opportunities",
    "Early-access interest",
    "General brand enquiries",
  ],
  media: {
    process: {
      alt: "Artisan shaping a ceramic cup in a warm maker studio",
      sources: ["/images/premium/maker-process.webp", fallbackStillLife],
    },
    collection: {
      alt: "Travel and care products arranged in a premium still life",
      sources: ["/images/premium/travel-care.webp", fallbackStillLife],
    },
    workspace: {
      alt: "Quiet workspace scene representing product curation",
      sources: ["/images/workspace.avif", fallbackStillLife],
    },
  },
};
