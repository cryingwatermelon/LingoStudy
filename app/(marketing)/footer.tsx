import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div
        className="max-w-screen-lg mx-auto flex items-center 
      justify-evenly h-full"
      >
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            className="mr-4 rounded-md"
            src="/hr.svg"
            alt="Croatian"
            height={32}
            width={40}
          />
          Croatian
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            className="mr-4 rounded-md"
            src="/es.svg"
            alt="Spanish"
            height={32}
            width={40}
          />
          Spanish
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            className="mr-4 rounded-md"
            src="/fr.svg"
            alt="French"
            height={32}
            width={40}
          />
          French
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            className="mr-4 rounded-md"
            src="/it.svg"
            alt="Italian"
            height={32}
            width={40}
          />
          Italian
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            className="mr-4 rounded-md"
            src="/jp.svg"
            alt="Japanese"
            height={32}
            width={40}
          />
          Japanese
        </Button>
      </div>
    </footer>
  );
};
