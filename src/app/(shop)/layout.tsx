import { Footer, Sidebar, TopMenu } from '@/components';

export default function ShopLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex flex-col overflow-hidden">

      <TopMenu />
      <Sidebar />

      <div className='grow flex flex-col'>
        {children}
      </div>

      <Footer />
    </main>
  );
}