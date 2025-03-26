import { Skull } from "lucide-react";
import { Loader2 } from "lucide-react";

export const PirateLoader = () => {
  return (
    <div className="relative w-20 h-20">
      <Loader2 className="size-16 animate-spin" />
      <Skull className="size-8 absolute top-4 right-8" />
    </div>
  );
};
