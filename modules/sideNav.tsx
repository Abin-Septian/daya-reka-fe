import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import moment from "moment";

const SideNav = ({ topFiveData }: any) => {
  const currentDate = moment();
  const startOfWeek = currentDate.clone().startOf("week").format("DD");
  const endOfWeek = currentDate.clone().endOf("week").format("DD");

  return (
    <div className="relative hidden h-full w-full max-w-[230px] flex-col gap-4 lg:flex">
      <div className="relative flex aspect-square h-full max-h-[265px] w-full flex-col justify-between rounded-lg p-6">
        <Image
          src={"/assets/card-bg-2.svg"}
          alt=""
          fill
          objectFit="cover"
          className="-z-10 rounded-lg"
        />
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
          <div className="text-2xl font-bold text-orange-600">This Week</div>
        </div>
        <div className="text-sm text-gray-600">
          {startOfWeek} - {endOfWeek} {currentDate.format("MMMM YYYY")}
        </div>
        <Card className="relative shadow-lg">
          <CardContent className="p-2 text-sm font-semibold">
            {topFiveData && topFiveData[0].name}
          </CardContent>
          <div className="absolute -right-2 -top-2 h-6 w-6 rotate-[20deg] bg-orange-600 text-center font-semibold text-white shadow-lg">
            1
          </div>
        </Card>
        <div className="space-y-4 text-sm text-gray-600">
          {topFiveData?.slice(1).map((el: any, index: number) => (
            <div key={index}>
              {index + 2}. {el.name}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-1/6 w-full">
        <Image src={"/assets/Vector.png"} alt="" fill />
      </div>
    </div>
  );
};

export default SideNav;
