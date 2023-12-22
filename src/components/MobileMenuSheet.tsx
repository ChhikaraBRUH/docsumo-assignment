"use client";

import NavigationListItem from "@/components/NavigationListItems";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/Sheet";

export function MobileMenuSheet({
  SOLUTIONS,
  TOOLS,
  COMPANY,
  RESOURCES,
  children,
}: {
  SOLUTIONS: any[];
  TOOLS: any[];
  COMPANY: any[];
  RESOURCES: any[];
  children: React.ReactNode;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        side="right"
        className="w-full overflow-y-auto bg-white pt-16 lg:hidden"
      >
        <Accordion type="single" collapsible>
          <AccordionItem value="none">
            <AccordionTrigger noIcon>Product</AccordionTrigger>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger>Solutions</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4">
              {SOLUTIONS.map((solution) => (
                <div key={solution?.title} className="flex flex-col gap-4">
                  <p className="text-xs font-medium uppercase text-[#a3a8b0]">
                    {solution?.title}
                  </p>

                  <ul className="flex flex-col gap-4">
                    {solution.items.map((item: any) => (
                      <NavigationListItem
                        key={item.title}
                        title={item.title}
                        description={item.description}
                        bgColor={item.bgColor}
                      >
                        {item.icon}
                      </NavigationListItem>
                    ))}
                  </ul>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Tools</AccordionTrigger>
            <AccordionContent>
              {TOOLS.map((tool) => (
                <div key={tool?.title} className="flex flex-col gap-4">
                  <p className="text-xs font-medium uppercase text-[#a3a8b0]">
                    {tool?.title}
                  </p>

                  <ul className="flex flex-col gap-4">
                    {tool.items.map((item: any) => (
                      <NavigationListItem
                        key={item.title}
                        title={item.title}
                        description={item.description}
                        bgColor={item.bgColor}
                      >
                        {item.icon}
                      </NavigationListItem>
                    ))}
                  </ul>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="none">
            <AccordionTrigger noIcon>Pricing</AccordionTrigger>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Company</AccordionTrigger>
            <AccordionContent>
              <ul className="flex flex-col gap-4">
                {COMPANY?.[0]?.items.map((item: any) => (
                  <NavigationListItem
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    bgColor={item.bgColor}
                  >
                    {item.icon}
                  </NavigationListItem>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Resources</AccordionTrigger>
            <AccordionContent>
              <ul className="flex flex-col gap-4">
                {RESOURCES?.[0]?.items.map((item: any) => (
                  <NavigationListItem
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    bgColor={item.bgColor}
                  >
                    {item.icon}
                  </NavigationListItem>
                ))}
              </ul>
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
