import {
  SITE_URL,
  AUTHOR_NAME,
  AUTHOR_ROLE,
  AUTHOR_BIO,
  SOCIAL_LINKS,
} from "@/lib/site-config";

export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: AUTHOR_NAME,
    url: SITE_URL,
    jobTitle: AUTHOR_ROLE,
    description: AUTHOR_BIO,
    sameAs: [SOCIAL_LINKS.github, SOCIAL_LINKS.linkedin],
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output here is fully controlled, static config data —
      // no user input reaches this, so this is not an XSS vector.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}