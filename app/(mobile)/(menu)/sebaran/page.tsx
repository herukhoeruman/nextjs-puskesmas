import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";

import { AppBar } from "../../_components/app-bar";

const MapSebaranHasilCek = dynamic(
  () => import("@/app/(mobile)/_components/map-sebaran-hasil-cek"),
  {
    ssr: false,
  }
);

const SebaranHasilPage = () => {
  return (
    <div className="py-16 h-full">
      <AppBar title="Sebaran Hasil Cek" />
      <MapSebaranHasilCek />
    </div>
  );
};

export default SebaranHasilPage;
