interface NavigationLink {
  path: string;
  label: string;
}

export const navigationLinks: NavigationLink[] = [
  { path: '/', label: 'Dashboard' },
  { path: '/interviews', label: 'Interviews' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/blog', label: 'Blog' },
  { path: '/about', label: 'About' },
];