export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://srvdetailing.co.uk/sitemap.xml',
  };
}