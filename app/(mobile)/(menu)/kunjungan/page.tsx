import { AppBar } from "../../_components/app-bar";
import Example from "../../_components/chart-kunjungan";

const KunjunganPage = () => {
  return (
    <div className="py-16 h-full">
      <AppBar title="Grafik Kunjungan" />
      {/* <ChartKunjungan /> */}
      <Example />
    </div>
  );
};

export default KunjunganPage;
