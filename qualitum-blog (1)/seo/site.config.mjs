/* Blog bundle config — deploys to blog.qualitum.ai (served at root). */
export const BLOG = {
  origin: 'https://blog.qualitum.ai',     // this subdomain (no trailing slash)
  mainOrigin: 'https://qualitum.ai',       // main site (nav/footer links back here)
  name: 'Qualitum',
  ogImage: '/assets/og-default.png',
  twitter: '@cyberpartner_',
  // Contentful — Space ID is not secret; the token comes from the
  // CONTENTFUL_CDA_TOKEN environment variable (set in Netlify, never committed).
  spaceId: '85x44rfg9ere',
  contentType: 'pageBlogPost',
};
