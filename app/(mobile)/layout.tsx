import { MobileFooter } from "./_components/mobile-footer";
import { MobileHeader } from "./_components/mobile-header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full">
      {children}
      <MobileFooter />
    </main>
  );
};

export default DashboardLayout;
