
import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image 
        src="https://i.imgur.com/SXTGMAx.png" 
        alt="Gelatina Glow Logo" 
        width={40} 
        height={40}
        className="rounded-full"
      />
      <span className="font-headline text-2xl font-bold text-foreground tracking-tight">
        Gelatina <span className="text-primary">Glow</span>
      </span>
    </div>
  );
}
