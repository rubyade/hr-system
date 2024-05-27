import Project from '@/components/Project';
import Link from 'next/link';

export default function Projects() {
  return (
    <main>
      <Link
        href={'/admin/dashboard'}
        className='mb-8 justify-start text-white pr-[560px] text-xs'
      >
        Back to Dashboard
      </Link>
      <Project />
    </main>
  );
}
