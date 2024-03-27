import { AppBar } from "../../_components/app-bar";
import { CardLayananEdukasi } from "../../_components/card-layanan-edukasi";

const LayananEdukasiPage = () => {
  return (
    <div className="py-16 h-full">
      <AppBar title="Layanan Edukasi" />
      <CardLayananEdukasi />
    </div>
  );
};

export default LayananEdukasiPage;
