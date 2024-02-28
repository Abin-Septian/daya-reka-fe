import React from 'react'
import { Button } from "@/components/ui/button";
import CustomPagination from "@/modules/customPagination";
import { DataTable } from "@/modules/dataTable";
import { Filter, Plus, Printer, RefreshCcw } from "lucide-react";
import Image from "next/image";
import SearchBar from "@/modules/searchBar";


const PageControl = ({...p}:any) => {
  return (
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
              <SearchBar handleSearchChange={p.handleSearchChange} />
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
            <DataTable data={p.filteredData} />
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
  )
}

export default PageControl