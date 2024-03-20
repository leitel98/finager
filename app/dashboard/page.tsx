import DashboardComponent from '@/components/dashboard/DashboardComponent';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { redirect, RedirectType } from 'next/navigation';

async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/?type=login', RedirectType.replace);
  }
  return <DashboardComponent />;
}

export default Dashboard;
