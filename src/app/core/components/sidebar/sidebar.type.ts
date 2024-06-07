export const SidebarItems: SidebarItem[] = [
  {
    title: 'Dashboard',
    icon: 'dashboard',
    route: '/dashboard',
  },
  {
    title: 'Alunos',
    icon: 'school',
    route: '/alunos',
  },
  {
    title: 'Professores',
    icon: 'group',
    route: '/professores',
  },
];

export interface SidebarItem {
  title: string;
  icon: string;
  route: string;
  children?: SidebarItem[];
}
