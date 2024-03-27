"use client";

import { AppBar } from "@/app/(mobile)/_components/app-bar";
import { Share2 } from "lucide-react";

const DetailPage = () => {
  const handleShareButtonClick = () => {
    // Ganti 'your_video_url' dengan URL video yang ingin Anda bagikan
    const videoUrl = "https://puskesmas.vercel.app/video.mp4";

    // Ganti 'your_message' dengan pesan yang ingin Anda sertakan dalam bagian pesan WhatsApp
    const message = "your_message";
    // Membuat URL untuk dibuka di WhatsApp dengan URL video dan pesan yang disertakan
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      videoUrl
    )}`;
    // Buka URL di jendela baru
    window.open(whatsappUrl, "_blank");
  };
  return (
    <div className="py-16 h-full">
      <AppBar title="Detail" url="/edukasi" />
      <div className="">
        <div className="flex flex-col items-center justify-center">
          <div className="aspect-w-16 aspect-h-9">
            <video controls className="w-full h-full">
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <h1 className="text-sm font-bold">Lorem ipsum dolor sit amet.</h1>
              <button
                className="border rounded-lg p-1"
                onClick={handleShareButtonClick}
              >
                <Share2 className="w-6 h-6 text-blue-600" />
              </button>
            </div>
            <p className="text-muted-foreground text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, quae, voluptatibus, doloremque dolorum quia nesciunt
              voluptates quibusdam quos fugit atque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
