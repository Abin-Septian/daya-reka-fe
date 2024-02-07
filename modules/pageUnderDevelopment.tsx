import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const PageUnderDevelopment = ({ title }: { title: string }) => {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <Card className="flex min-h-96 w-full flex-col items-center justify-center gap-12 p-4 shadow-xl lg:w-1/2">
        <div className="text-center">
          <div className="text-2xl font-semibold capitalize">Page {title}</div>
          <div>is under development</div>
        </div>

        <Link href={"/"}>
          <Button className="bg-indigo-700">Back to home</Button>
        </Link>
      </Card>
    </main>
  );
};

export default PageUnderDevelopment;
