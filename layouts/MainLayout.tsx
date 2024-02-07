"use client";
import * as React from "react";
import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  LogOut,
  LucideLogOut,
  MenuIcon,
  MessagesSquare,
  PenBox,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  Truck,
  Users2,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Separator } from "@/registry/new-york/ui/separator";
import { TooltipProvider } from "@/registry/new-york/ui/tooltip";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/registry/new-york/ui/resizable";
import { Nav } from "@/modules/nav";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { ModulzLogoIcon } from "@radix-ui/react-icons";

import { Quicksand } from "next/font/google";
import { Drawer, DrawerContent, DrawerHeader } from "@/components/ui/drawer";
import { TMenu, integration, menu } from "@/data/menu";
import Link from "next/link";

const quick = Quicksand({ subsets: ["latin"] });

export function MainLayout({ children }: any) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <TooltipProvider delayDuration={0}>
      <div className="sticky left-0 top-0 z-50 flex h-14 w-full items-center justify-between bg-white px-4 shadow-lg lg:hidden">
        <div className="relative w-24">
          <Image
            src={"/assets/logo.png"}
            alt=""
            width={114}
            height={36}
          ></Image>
        </div>
        <MenuIcon
          className="cursor-pointer"
          onClick={() => setIsOpen((p) => !p)}
        ></MenuIcon>
      </div>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(
            sizes,
          )}`;
        }}
        className={`min-h-screen items-stretch ${quick.className}`}
      >
        <ResizablePanel
          defaultSize={150}
          collapsedSize={1}
          collapsible={true}
          minSize={15}
          maxSize={20}
          onCollapse={() => {
            setIsCollapsed(true);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              true,
            )}`;
          }}
          onExpand={() => {
            setIsCollapsed(false);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              false,
            )}`;
          }}
          className={cn(
            "hidden lg:block",
            isCollapsed &&
              "min-w-[50px] transition-all duration-300 ease-in-out",
          )}
        >
          <div className="flex h-screen flex-col justify-between">
            <div
              className={cn(
                "relative flex h-[52px] w-full items-center justify-start p-4",
                isCollapsed ? "h-[52px] w-14 px-4" : "px-4",
              )}
            >
              {isCollapsed ? (
                <div className={cn("relative ", isCollapsed && "h-8 w-4")}>
                  <Image
                    src={"/assets/logo.png"}
                    alt=""
                    fill
                    objectFit="cover"
                    objectPosition="left"
                  ></Image>
                </div>
              ) : (
                <Image
                  src={"/assets/logo.png"}
                  alt=""
                  width={114}
                  height={36}
                ></Image>
              )}
            </div>
            <ScrollArea className="h-full  space-y-4">
              <div className="px-5 text-[#98949E]">
                {isCollapsed ? "M" : "Menu"}
              </div>
              <Nav isCollapsed={isCollapsed} links={menu} />
              <div className="px-5 text-[#98949E]">
                {isCollapsed ? "I" : "Integration"}
              </div>
              <Nav isCollapsed={isCollapsed} links={integration} />
            </ScrollArea>
            <Separator></Separator>
            <div className="flex h-40 w-full flex-col items-center justify-center gap-4 p-4">
              {isCollapsed ? (
                <MenuIcon
                  className="cursor-pointer"
                  onClick={() => setIsOpen((p) => !p)}
                ></MenuIcon>
              ) : (
                <>
                  <div className="flex w-full items-center gap-3">
                    <div className="relative h-9 w-9 flex-none rounded-full bg-gray-400">
                      <Image
                        src={"/assets/profile.png"}
                        alt=""
                        fill
                        objectFit="cover"
                      ></Image>
                    </div>
                    <div>
                      <div className="text-base font-semibold">Savannah N</div>
                      <div className="text-sm text-gray-400">
                        Food Quality Manager
                      </div>
                    </div>
                  </div>
                  <Button
                    variant={"secondary"}
                    className="w-full gap-3 bg-red-400/10 font-semibold text-red-800"
                  >
                    <LucideLogOut />
                    Logout
                  </Button>
                </>
              )}
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={840} minSize={15}>
          <div className="h-screen overflow-scroll p-4 transition-all duration-1000">
            {children}
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>

      <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
        <DrawerContent className="items-center p-4">
          <DrawerHeader className="text-xl font-semibold">
            Menu Drawer
          </DrawerHeader>
          <div className="flex w-full flex-col items-center divide-y">
            {menu.map((link: TMenu, index: number) => (
              <Link
                key={index}
                href={link.path}
                className="flex w-full items-center justify-center gap-3 p-4"
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>

          <Button
            variant={"secondary"}
            className="w-full gap-3 bg-red-400/10 font-semibold text-red-800 lg:w-max"
          >
            <LucideLogOut />
            Logout
          </Button>
        </DrawerContent>
      </Drawer>
    </TooltipProvider>
  );
}

export default MainLayout;
