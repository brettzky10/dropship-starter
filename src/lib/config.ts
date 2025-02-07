export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Birthday Send",
  description: "Send birthday gifts auto-magically!",
  navItems: [
    {
      label: "Docs",
      href: "https://github.com/lbsudo/printful-nextjs-starter",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Docs",
      href: "https://github.com/lbsudo/printful-nextjs-starter",
    },
    {
      label: "About",
      href: "/about",
    },

  ],
  links: {
    github: "https://github.com/lbsudo",
    docs: "https://github.com/lbsudo/printful-nextjs-starter",
  },
};