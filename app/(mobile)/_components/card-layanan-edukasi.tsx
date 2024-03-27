import Image from "next/image";
import Link from "next/link";

const layananEdukasi = [
  {
    id: 1,
    title: "Lorem ipsum.",
    description: "Lorem, ipsum dolor sit amet consectetur",
    image: "/ilustrasi.jpg",
  },
  {
    id: 2,
    title: "Lorem ipsum.",
    description: "Lorem, ipsum dolor sit amet consectetur",
    image: "/ilustrasi.jpg",
  },
  {
    id: 3,
    title: "Lorem ipsum.",
    description: "Lorem, ipsum dolor sit amet consectetur",
    image: "/ilustrasi.jpg",
  },
  {
    id: 4,
    title: "Lorem ipsum.",
    description: "Lorem, ipsum dolor sit amet consectetur",
    image: "/ilustrasi.jpg",
  },
  {
    id: 5,
    title: "Lorem ipsum.",
    description: "Lorem, ipsum dolor sit amet consectetur",
    image: "/ilustrasi.jpg",
  },
  {
    id: 6,
    title: "Lorem ipsum.",
    description: "Lorem, ipsum dolor sit amet consectetur",
    image: "/ilustrasi.jpg",
  },
  {
    id: 7,
    title: "Lorem ipsum.",
    description: "Lorem, ipsum dolor sit amet consectetur",
    image: "/ilustrasi.jpg",
  },
  {
    id: 8,
    title: "Lorem ipsum.",
    description: "Lorem, ipsum dolor sit amet consectetur",
    image: "/ilustrasi.jpg",
  },
  {
    id: 9,
    title: "Lorem ipsum.",
    description: "Lorem, ipsum dolor sit amet consectetur",
    image: "/ilustrasi.jpg",
  },
  {
    id: 10,
    title: "Lorem ipsum.",
    description: "Lorem, ipsum dolor sit amet consectetur",
    image: "/ilustrasi.jpg",
  },
];

export const CardLayananEdukasi = () => {
  return (
    <div className="grid grid-cols-2 gap-4 m-4">
      {layananEdukasi.map((item) => (
        <div key={item.id} className="relative rounded-lg shadow-md h-[220px]">
          <Image
            src={item.image}
            width={200}
            height={200}
            alt="layanan edukasi"
            className="rounded-t-lg"
          />
          <div className=" p-4">
            <div className="space-y-2">
              <p className="text-sm font-bold">{item.title}</p>
              <p className="text-[12px] text-muted-foreground">
                {item.description}
              </p>
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <Link
                href={`/edukasi/${item.id}`}
                className="text-blue-500 text-[12px] font-bold text-center"
              >
                Selengkapnya
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
