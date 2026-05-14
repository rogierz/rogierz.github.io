import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    /*{
      text: 'Chi sono',
      href: getPermalink('/about'),
    },*/
  ],
  actions: [
    {
        variant: "secondary",
        text: 'Prenota una chiamata',
        href: 'https://calendar.app.google/U3pPf3jgJgWYUHdx5',
        target: '_blank',
        icon: 'tabler:calendar-plus',
      }
    ]
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/rogierz' },
  ],
  footNote: `
    Made with ❤️ by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/rogierz"> Ruggero Nocera</a> · Tutti i diritti riservati.
  `,
};
