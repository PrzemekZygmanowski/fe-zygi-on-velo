export type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

export const sampleLinks: NavItem[] = [
  { label: "Blog", href: "/blog" },
  {
    label: "Porady",
    href: "/porady",
    children: [
      { label: "Sprzęt", href: "/porady/sprzet" },
      { label: "Planowanie trasy", href: "/porady/trasy" },
      { label: "Bikepacking", href: "/porady/bikepacking" },
      { label: "Serwis roweru", href: "/porady/serwis" },
    ],
  },
  { label: "Trasy", href: "/trasy" },
  { label: "O mnie", href: "/o-mnie" },
];
