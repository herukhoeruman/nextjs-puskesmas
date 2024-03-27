import Image from "next/image";
import { MobileHeader } from "../_components/mobile-header";
import Link from "next/link";

const menus = [
  {
    icon: "/patient.png",
    title: "Cek Pasien",
    href: "/cek",
  },
  {
    icon: "/folder.png",
    title: "Histori Pasien",
    href: "/histori",
  },
  {
    icon: "/advice.png",
    title: "Sebaran Hasil Cek",
    href: "/sebaran",
  },
  {
    icon: "/pie-chart.png",
    title: "Grafik Kunjungan",
    href: "/kunjungan",
  },
  {
    icon: "/medical-team.png",
    title: "Layanan Edukasi",
    href: "/edukasi",
  },
];

const Dashboard = () => {
  return (
    <div className="p-4">
      <MobileHeader />
      <div className="my-6 space-y-2">
        <p className="text-md font-medium">Menu</p>
        <div className="grid grid-cols-4 gap-4">
          {menus.map((menu, index) => (
            <Link key={index} href={menu.href}>
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center text-center bg-sky-50 rounded-full w-20 h-20 transition duration-300 ease-in-out transform hover:bg-blue-200">
                  <Image
                    src={menu.icon}
                    width={40}
                    height={40}
                    alt={menu.title}
                  />
                </div>
                <p className="text-xs text-gray-500">{menu.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
