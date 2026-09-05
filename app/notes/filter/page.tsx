import { redirect } from 'next/navigation';

export default function FilterRootPage() {
  redirect('/notes/filter/all');
}
