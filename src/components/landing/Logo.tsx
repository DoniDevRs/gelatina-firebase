
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Logo() {
  const logoImage = PlaceHolderImages.find(img => img.id === "logo-image");

  return (
    <div className="flex justify-center py-4">
      <Image
        src={logoImage?.imageUrl || "https://i.imgur.com/SXTGMAx.png"}
        alt="Gelatina Anti-Caneta Logo"
        width={130}
        height={37}
        priority
        className="h-auto w-[120px]"
      />
    </div>
  );
}
