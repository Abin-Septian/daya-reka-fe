import React from "react";
import { cn } from "@/lib/utils";

const TopNav = ({ tab, setTab }: any) => {
  return (
    <div className="relative flex flex-col justify-center gap-2 py-4">
      <div className="text-xl font-semibold">Customer</div>
      <div className="text-gray-400">
        You can manage and organize your customer and other things here
      </div>
      <div className={"overflow-scroll lg:absolute lg:bottom-0 lg:right-0"}>
        <div className="flex">
          <div
            className={cn(
              "w-40 cursor-pointer select-none p-4 text-center",
              tab === "customer" &&
                "border-b-2 border-indigo-700 font-semibold text-indigo-700",
            )}
            onClick={() => setTab("customer")}
          >
            Customer
          </div>
          <div
            className={cn(
              "w-40 cursor-pointer select-none p-4 text-center",
              tab === "promo" &&
                "border-b-2 border-indigo-700 font-semibold text-indigo-700",
            )}
            onClick={() => setTab("promo")}
          >
            Promo
          </div>
          <div
            className={cn(
              "w-40 cursor-pointer select-none p-4 text-center",
              tab === "voucher" &&
                "border-b-2 border-indigo-700 font-semibold text-indigo-700",
            )}
            onClick={() => setTab("voucher")}
          >
            Voucher
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
