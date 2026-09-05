import css from './SidebarNotes.module.css';
import { usePathname } from 'next/navigation';
import type { NoteTag } from '@/types/note';
import Link from 'next/link';
const TAGS: NoteTag[] = ['Work', 'Personal', 'Meeting', 'Shopping', 'Todo'];

export default function SidebarNotes() {
  const pathname = usePathname();
  const currentPath = pathname ? pathname.toLowerCase() : '';

  return (
    <ul className={css.menuList}>
      <li className={css.menuItem}>
        <Link
          href={`/notes/filter/all`}
          className={`${css.menuLink} ${
            currentPath === '/notes/filter/all' ? css.active : ''
          }`}
        >
          All notes
        </Link>
      </li>
      {TAGS.map((tag) => {
        const targetPath = `/notes/filter/${tag}`;
        const isActive = currentPath === targetPath.toLowerCase();
        return (
          <li key={tag} className={css.menuItem}>
            <Link
              href={targetPath}
              className={`${css.menuLink} ${isActive ? css.active : ""}`}
            >
              {tag}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
