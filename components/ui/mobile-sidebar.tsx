import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";
import { Sidebar } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-white" />
      </SheetTrigger>
      <SheetContent className="p-0 z-[100] w-[256px]" side="left">
        <SheetTitle hidden />
        <SheetDescription hidden />
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
