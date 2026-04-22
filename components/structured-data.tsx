export function PersonStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Eric Musembi",
    alternateName: "Eric  Musembi",
    description: "Cloud Engineer, Web Developer, and App Developer based in Kenya",
    image: "/Profile.jpg", // Replace with actual image path
    jobTitle: "Web developer",
    worksFor: {
      "@type": "Organization",
      name: "Champion Tech LTD",
    },
    url: "https://your-domain.vercel.app",
    sameAs: [
      "https://www.linkedin.com//",
      "https://github.com/Eric254-gif",
      "https://www.instagram.com/peter_son8193/",
      "https://x.com/EricMus98755173",
      "https://www.facebook.com/",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sultan Hamud",
      addressRegion: "Kenya",
    },
    email: "musembieric43@gmail.com",
    telephone: "+254799046751",
    knowsAbout: ["Cloud Computing", "Web Development", "App Development", "UI/UX Design", "Photography"],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}

