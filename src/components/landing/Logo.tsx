
import Image from "next/image";

export function Logo() {
  return (
    <div className="flex justify-center">
      <Image
        src="/logo.png"
        alt="Gelatina Anti-Caneta"
        width={130}
        height={37}
        priority
        className="h-auto w-[120px]"
      />
    </div>
  );
}
