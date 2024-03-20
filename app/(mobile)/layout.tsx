import { MobileFooter } from "./_components/mobile-footer";
import { MobileHeader } from "./_components/mobile-header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full p-4">
      {children}
      <MobileFooter />
    </main>
  );
};

export default DashboardLayout;
