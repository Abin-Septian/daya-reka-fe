import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { customerData } from "@/data/customer";
import { cn } from "@/lib/utils";
import {
  PenLine,
  ShieldAlert,
  ShieldBan,
  ShieldCheckIcon,
  ShieldEllipsis,
  Trash,
} from "lucide-react";

export function DataTable() {
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
        {customerData.map((data, index: number) => (
          <TableRow key={index}>
            <TableCell className="font-semibold">{data.customerName}</TableCell>
            <TableCell>
              <Button
                variant={"secondary"}
                className={cn(
                  "font-semibold",
                  data.level === "Warga" && "text-orange-500 bg-orange-500/5",
                  data.level === "Juragan" && "text-sky-500 bg-sky-500/5",
                  data.level === "Sultan" && "text-green-500 bg-green-500/5",
                  data.level === "Konglomerat" && "text-purple-500 bg-purple-500/5",
                )}
              >
                {data.level}
              </Button>
            </TableCell>
            <TableCell className="font-semibold">{data.favMenu}</TableCell>
            <TableCell className="font-semibold">{data.total}</TableCell>
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
