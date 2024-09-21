"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTransition } from "react";
import { refillHearts } from "@/actions/user-progress";
import { toast } from "sonner";

const POINTS_TO_REFILL = 10;

type Props = {
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export const Item = ({ hearts, points, hasActiveSubscription }: Props) => {
  const [pending, startTransition] = useTransition();

  const onRefillHearts = () => {
    if (pending || hearts === 5 || points < POINTS_TO_REFILL) {
      return;
    }
    startTransition(() => {
      refillHearts().catch(() => toast.error("Something went wrong"));
    });
  };
  const onUpgrade = () => {
    startTransition(() => {});
  };
  return (
    <ul className="w-full">
      <div className="flex items-center w-full p-4 gap-x-4 border-t-2">
        <Image
          src="/heart.svg"
          alt="Heart"
          height={60}
          width={60}
          style={{ width: "60px", height: "60px" }}
        />
        <div className="flex-1">
          <p className="text-neutral-700 text-base lg:text-xl font-bold">
            Refill hearts
          </p>
        </div>
        <Button
          disabled={hearts === 5 || points < POINTS_TO_REFILL || pending}
          onClick={onRefillHearts}
        >
          {hearts === 5 ? (
            "full"
          ) : (
            <div className="flex items-center">
              <Image
                src="/points.svg"
                alt="Points"
                height={20}
                width={20}
                style={{ width: "20px", height: "20px" }}
              />
              <p>{POINTS_TO_REFILL}</p>
            </div>
          )}
        </Button>
      </div>
      <div className="flex items-center w-full p-4 pt-8 gap-x-4 border-t-2">
        <Image
          src="/unlimited.svg"
          alt="unlimited"
          height={60}
          width={60}
          style={{ width: "60px", height: "60px" }}
        />
        <div className="flex-1">
          <p className="text-neutral-700 text-base lg:text-xl font-bold">
            Unlimited hearts
          </p>
        </div>
        <Button onClick={onUpgrade} disabled={pending || hasActiveSubscription}>
          {hasActiveSubscription ? "active" : "upgrade"}
        </Button>
      </div>
    </ul>
  );
};
