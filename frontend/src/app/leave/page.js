import Leave from '@/components/Leave';
import UserTable from '@/components/users/UserTable';

export default function Dashboard() {
  return (
    <main className='dark text-foreground bg-background'>
      <UserTable />
    </main>
  );
}
