import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";

type Props = {
  title: string;
  id: number;
  imageSrc: string;
  onClick: (id: number) => void;
  disabled?: boolean;
  active?: boolean;
};

const Card = ({ title, id, imageSrc, onClick, disabled, active }: Props) => {
  return (
    <div
      onClick={() => onClick(id)}
      className={cn(
        "h-full border-2 rounded-xl border-b-4 hover:bg-black/5 cursor-pointer active:border-b-2 flex flex-col items-center justify-between p-3 pb-6 min-h-[217px] min-w-[200px]",
        disabled && "pointer-events-none opacity-50"
      )}
    >
      {/* 卡片勾选 */}
      <div className="min-[24px] w-full flex items-center justify-end">
        {active && (
          <div className="rounded-sm bg-green-600 flex items-center justify-center p-15">
            <Check className="text-white stroke-[4] h-5 w-5"></Check>
          </div>
        )}
      </div>
      {/* 卡片信息 */}
      <Image
        src={imageSrc}
        alt={title}
        height={70}
        width={93.33}
        style={{ width: "93.33px", height: "70px" }}
        className="rounded-md drop-shadow-md border object-cover"
      />
      <p className="text-neutral-700 text-center font-bold mt-4">{title}</p>
    </div>
  );
};

export default Card;
