import { quests } from "@/constants";
import { Button } from "./button";
import Link from "next/link";
import Image from "next/image";
import { Progress } from "./progress";

type Props = {
  points: number;
};
export const Quests = async ({ points }: Props) => {
  return (
    <div className="border-2 rounded-xl p-4 space-y-4">
      <div className="flex items-center justify-between w-full space-y-2">
        <h3 className="font-bold text-lg">Quests</h3>
        <Link href="/quests">
          <Button size="sm" variant="primaryOutline">
            View all
          </Button>
        </Link>
      </div>
      <ul className="w-full space-y-2">
        {quests.map((quest) => {
          const progress = (points / quest.value) * 100;
          return (
            <div
              className="flex items-center w-full px-4 py-1 gap-x-4"
              key={quest.title}
            >
              <Image
                src="/points.svg"
                alt="Points"
                width={40}
                height={40}
                style={{ width: "40px", height: "40px" }}
              />
              <div className="flex flex-col w-full">
                <p className="text-neutral-700 text-sm font-bold">
                  {quest.title}
                </p>
                <Progress value={progress} className="h-2" />
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
