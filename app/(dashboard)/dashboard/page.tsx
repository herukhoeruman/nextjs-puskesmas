import { GetLocation } from "@/components/get-location";
import { currentUser } from "@/lib/auth";

const DashboardPage = async () => {
  const user = await currentUser();

  return (
    <div>
      <p>Dashboard page here!</p>
      <p>{JSON.stringify(user)}</p>
      <GetLocation />
    </div>
  );
};

export default DashboardPage;
