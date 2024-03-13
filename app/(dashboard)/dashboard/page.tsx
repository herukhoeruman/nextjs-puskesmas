import { GetLocation } from "@/components/get-location";
import { currentUser } from "@/lib/auth";

const DashboardPage = async () => {
  const user = await currentUser();

  return (
    <div className="flex flex-col">
      <p>Dashboard page here!</p>
      <p>Username: {user?.username}</p>
      <p>Email: {user?.email}</p>
      <p>UserId: {user?.id}</p>

      <GetLocation />
    </div>
  );
};

export default DashboardPage;
