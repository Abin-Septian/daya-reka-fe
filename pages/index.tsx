import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import CustomPagination from "@/modules/customPagination";
import { DataTable } from "@/modules/dataTable";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Filter, Plus, Printer, RefreshCcw } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [tab, setTab] = useState<"customer" | "promo" | "voucher">("customer");
  return (
    <main className="flex h-full flex-col">
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
      <Separator />
      <div className="flex h-full gap-4 p-4">
        <div className="flex w-full flex-col gap-4">
          <div className="relative w-full space-y-4 rounded-lg p-4 text-white">
            <Image
              src={"/assets/card-bg.svg"}
              alt=""
              fill
              objectFit="cover"
              className="-z-10 rounded-lg"
            ></Image>
            <div className="text-xl font-semibold">Customer</div>
            <div className="max-w-md">
              On this menu you will be able to create, edit, and also delete the
              customer. Also you can manage it easily.
            </div>
            <div className="flex w-full flex-col gap-4 md:flex-row">
              <Button className="gap-2 bg-white/20 backdrop-blur-lg">
                <Plus width={12} /> Add New Customer
              </Button>
              <label
                htmlFor="input"
                className="flex w-full items-center space-x-4 rounded-lg bg-white p-1 focus-within:border-red-700"
              >
                <MagnifyingGlassIcon
                  width={28}
                  height={28}
                  className="text-gray-400"
                ></MagnifyingGlassIcon>
                <input
                  id="input"
                  name="input"
                  type="text"
                  className="w-full text-gray-400 focus:outline-none"
                  placeholder="Search Customer"
                />

                <Button className="h-8 rounded-xl bg-indigo-500">Search</Button>
              </label>
              <div className="flex justify-center gap-3">
                <Button className="gap-2 bg-white/20 backdrop-blur-lg">
                  <Filter width={12} /> Filter
                </Button>
                <Button className="gap-2 bg-white/20 backdrop-blur-lg">
                  <RefreshCcw width={12} /> Refresh
                </Button>
                <Button className="bg-white/20 backdrop-blur-lg">
                  <Printer width={12} />{" "}
                </Button>
              </div>
            </div>
          </div>
          <div className="h-full min-h-96 overflow-scroll ">
            <DataTable />
          </div>
          <div className="flex h-max w-full flex-col items-center justify-between gap-4 rounded-lg bg-gray-400/20 p-4 md:flex-row">
            <div className="text-sm font-semibold text-gray-600">
              Showing 10 Data Customers
            </div>
            <div>
              <CustomPagination totalPage={38} />
            </div>
          </div>
        </div>
        <div className="relative hidden h-full w-full max-w-[230px] flex-col gap-4 lg:flex">
          <div className="relative flex aspect-square h-full max-h-[265px] w-full flex-col justify-between rounded-lg p-6">
            <Image
              src={"/assets/card-bg-2.svg"}
              alt=""
              fill
              objectFit="cover"
              className="-z-10 rounded-lg"
            ></Image>
            <div className="max-w-[85%] text-xl text-white">
              See analytics of the Customer Clearly
            </div>
            <Button className="w-max bg-indigo-200/40 backdrop-blur-md">
              See Analytics
            </Button>
          </div>
          <div className="h-full w-full space-y-4 rounded-lg bg-gray-50 p-6">
            <div>
              <div className="text-2xl font-medium">Top Menu</div>
              <div className="text-2xl font-bold text-orange-600">
                This Week
              </div>
            </div>
            <div className="text-sm text-gray-600">10 - 12 Agustus 2023</div>
            <Card className="relative shadow-lg">
              <CardContent className="p-2 text-sm font-semibold">
                Nasi Goreng Jamur Special Resto Pak Min
              </CardContent>
              <div className="absolute -right-2 -top-2 h-6 w-6 rotate-[20deg] bg-orange-600 text-center font-semibold text-white shadow-lg">
                1
              </div>
            </Card>
            <div className="space-y-4 text-sm text-gray-600">
              <div>2. Tongseng Sapi Gurih</div>
              <div>3. Nasi Gudeg Telur Ceker</div>
              <div>4. Nasi Ayam serundeng</div>
              <div>5. Nasi Goreng Seafood</div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 h-1/6 w-full">
            <Image src={"/assets/Vector.png"} alt="" fill></Image>
          </div>
        </div>
      </div>
    </main>
  );
}
