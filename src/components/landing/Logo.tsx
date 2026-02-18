
import { Sparkles } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-primary p-2 rounded-full text-white shadow-md">
        <Sparkles size={24} />
      </div>
      <span className="font-headline text-2xl font-bold text-foreground tracking-tight">
        Gelatina <span className="text-primary">Glow</span>
      </span>
    </div>
  );
}
