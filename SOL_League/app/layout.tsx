import type { Metadata } from "next";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { site } from "../lib/content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.URL || process.env.DEPLOY_PRIME_URL || "https://solleague.netlify.app",
  ),
  title: { default: site.name, template: `%s · ${site.name}` },
  description: site.description,
  openGraph: { title: site.name, description: site.description, locale: "nl_NL", type: "website", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: site.name, description: site.description, images: ["/og.png"] },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body><SiteHeader /><main>{children}</main><SiteFooter /></body>
    </html>
  );
}
