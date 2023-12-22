"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/Sheet";

export function MobileMenuSheet({ children }: { children: React.ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side="right" className="w-full bg-white pt-16 lg:hidden">
        <Accordion type="single" collapsible>
          <AccordionItem value="none">
            <AccordionTrigger noIcon>Product</AccordionTrigger>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger>Solutions</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Tools</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="none">
            <AccordionTrigger noIcon>Pricing</AccordionTrigger>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Company</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Resources</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <SheetFooter className="flex flex-col gap-4 pt-4">
          <SheetClose asChild>
            <Button
              type="submit"
              variant="primary"
              size="sm"
              className="font-semibold"
            >
              Start free 14-day trial
            </Button>
          </SheetClose>

          <SheetClose asChild>
            <Button
              variant="secondary"
              size="sm"
              className="border border-brand-secondary font-semibold"
            >
              Schedule demo
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
