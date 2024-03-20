import Image from "next/image";
import { MobileHeader } from "../_components/mobile-header";

const Dashboard = () => {
  return (
    <div>
      <MobileHeader />
      <div className="my-6">
        <p className="text-md font-medium">Menu</p>
        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-col text-center">
            <div className="flex items-center justify-center text-center bg-sky-50 rounded-full w-20 h-20">
              <Image
                src="/patient.png"
                width={40}
                height={40}
                alt="cek-pasien"
              />
            </div>
            <p className="text-xs text-gray-500">Cek Pasien</p>
          </div>
          <div className="flex flex-col text-center">
            <div className="flex items-center justify-center text-center bg-sky-50 rounded-full w-20 h-20">
              <Image
                src="/folder.png"
                width={40}
                height={40}
                alt="cek-pasien"
              />
            </div>
            <p className="text-xs text-gray-500">Histori Pasien</p>
          </div>
          <div className="flex flex-col text-center">
            <div className="flex items-center justify-center text-center bg-sky-50 rounded-full w-20 h-20">
              <Image
                src="/advice.png"
                width={40}
                height={40}
                alt="cek-pasien"
              />
            </div>
            <p className="text-xs text-gray-500">Sebaraan Hasil Cek</p>
          </div>
          <div className="flex flex-col text-center">
            <div className="flex items-center justify-center text-center bg-sky-50 rounded-full w-20 h-20">
              <Image
                src="/pie-chart.png"
                width={40}
                height={40}
                alt="cek-pasien"
              />
            </div>
            <p className="text-xs text-gray-500">Grafik Kunjungan</p>
          </div>
          <div className="flex flex-col text-center">
            <div className="flex items-center justify-center text-center bg-sky-50 rounded-full w-20 h-20">
              <Image
                src="/medical-team.png"
                width={40}
                height={40}
                alt="cek-pasien"
              />
            </div>
            <p className="text-xs text-gray-500">Layanan Edukasi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
