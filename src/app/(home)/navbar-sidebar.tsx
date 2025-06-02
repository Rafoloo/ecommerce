import  Link  from "next/link";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";

import { ScrollArea } from "@/components/ui/scroll-area";

interface NavbarItem {
    href: string;
    children: React.ReactNode;
}

interface Props {
    items: NavbarItem[];
    open: boolean;
    onOpenchange: (open: boolean) => void;
}

export const NavbarSidebar = ({
    items,
    open,
    onOpenchange,
}: Props) => {
    return (
        <Sheet open={open} onOpenChange={onOpenchange}>
            <SheetContent
                side="left"
                className="p-0 transition-none"
            >
                <SheetHeader className="p-4 border-b">
                    <div className="flex items-center">
                        <SheetTitle>
                            Menu
                        </SheetTitle>
                    </div>
                </SheetHeader>
                <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
                    {items.map((item) => (
                        <Link
                         key={item.href}
                         href={item.href}
                         className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
                        >
                          {item.children}
                        </Link>
                    ))}
                    <div className="border-t">
                        <Link href="/sign-in" className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium">
                            Login
                        </Link>
                        <Link href="/sign-up" className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium">
                            Comece a vender
                        </Link> 
                    </div>
                </ScrollArea>
            </SheetContent>
            </Sheet>
    )

};