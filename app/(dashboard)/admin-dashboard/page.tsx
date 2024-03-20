import { GetLocation } from "@/components/get-location";
import { currentUser } from "@/lib/auth";

const DashboardPage = async () => {
  const user = await currentUser();

  return (
    <div>
      <div className="flex flex-col">
        <p>Dashboard page here!</p>
        <p>Username: {user?.username}</p>
        <p>Email: {user?.email}</p>
        <p>UserId: {user?.id}</p>
        <GetLocation />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
        aspernatur culpa incidunt assumenda rem dolorum animi fugiat dicta
        voluptatibus nemo. Suscipit, dolorem voluptate nobis blanditiis aperiam
        accusamus dolores iusto adipisci! Sapiente sunt reprehenderit ipsum
        natus fugiat nihil corrupti vitae, animi, quibusdam dolores dignissimos
        nostrum quod adipisci cumque? Repellat, reprehenderit ratione doloremque
        repudiandae quam illo unde odit quasi mollitia voluptatem ipsa. Magnam
        reprehenderit earum recusandae eos harum sequi, numquam accusantium nam
        quasi quaerat tempora, necessitatibus vero officia eaque natus enim? Ut
        minima voluptate, corporis nulla dolore iure nostrum assumenda non unde.
        Maiores exercitationem possimus ad mollitia vitae! Tempore, ab quos
        neque inventore molestias earum numquam debitis dolorum sequi dolores
        suscipit repellendus ad, adipisci quas accusamus doloribus beatae nam
        voluptates veritatis sapiente. Perspiciatis aperiam repudiandae eaque
        laborum, animi commodi praesentium earum porro iste nam ipsum
        voluptatibus nostrum dicta non vel, odio architecto dolore laudantium
        culpa quia! Suscipit sapiente veritatis repellendus accusantium
        deserunt!
      </div>
    </div>
  );
};

export default DashboardPage;
