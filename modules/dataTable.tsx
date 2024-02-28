import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// import { customerData } from "@/data/customer";
import { cn } from "@/lib/utils";
import { PenLine, ShieldCheckIcon, Trash } from "lucide-react";

export function DataTable({ data }: any) {
  return (
    <Table className="min-w-[1200px]">
      <TableHeader>
        <TableRow>
          <TableHead>Customer Name</TableHead>
          <TableHead>Level</TableHead>
          <TableHead>Favorite Menu</TableHead>
          <TableHead>Total Transaction</TableHead>
          <TableHead className="w-[120px]">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((data: any, index: number) => (
          <TableRow key={index}>
            <TableCell className="font-semibold">
              {data.customer.name}
            </TableCell>
            <TableCell>
              <Button
                variant={"secondary"}
                className={cn(
                  "font-semibold capitalize",
                  data.customer.level === "warga" &&
                    "bg-orange-500/5 text-orange-500",
                  data.customer.level === "juragan" &&
                    "bg-sky-500/5 text-sky-500",
                  data.customer.level === "sultan" &&
                    "bg-green-500/5 text-green-500",
                  data.customer.level === "konglomerat" &&
                    "bg-purple-500/5 text-purple-500",
                )}
              >
                {data.customer.level}
              </Button>
            </TableCell>
            <TableCell className="font-semibold">
              {data.customer.fav_item}
            </TableCell>
            <TableCell className="font-semibold">
              IDR {data.total.toLocaleString()}
            </TableCell>
            <TableCell>
              <div className="flex w-full gap-2">
                <Button variant={"secondary"} className="gap-2">
                  <ShieldCheckIcon width={16} />
                  Detail
                </Button>
                <Button variant={"secondary"}>
                  <PenLine width={16} />
                </Button>
                <Button
                  variant={"secondary"}
                  className="bg-red-200/20 text-red-500"
                >
                  <Trash width={16} />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
