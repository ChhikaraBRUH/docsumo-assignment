"use client";

import { MobileMenuSheet } from "@/components/MobileMenuSheet";
import NavigationListItem from "@/components/NavigationListItems";
import { Button } from "@/components/ui/Button";
import { Icons } from "@/components/ui/Icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/NavigationMenu";
import cn from "@/utils/cn";
import {
  BookIcon,
  CircleDollarSignIcon,
  HandMetalIcon,
  HeartHandshakeIcon,
  MapIcon,
  MenuIcon,
  PaperclipIcon,
  RulerIcon,
  TargetIcon,
} from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { useEffect, useState } from "react";

export default function Menu() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 500) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "sticky top-0 z-50 w-full px-4 py-4 transition-colors lg:px-0",
        scrolled ? "bg-white shadow-md" : "bg-brand-dark",
      )}
    >
      <div className="container relative mx-auto flex flex-row items-center justify-between gap-2">
        {/* Mobile Only Logo */}
        <div className="flex lg:hidden">
          <Icons.docsumoMini className="h-6 w-6" />
        </div>

        {/* Desktop Only Logo */}
        <Icons.docusmo
          className={cn(
            "hidden h-6 w-max transition-colors lg:flex",
            scrolled ? "text-brand-blue" : "text-white",
          )}
        />

        {/* Desktop Only Menu */}
        <MenuItems />

        {/* Desktop Only Buttons */}
        <MenuButtons />

        {/* Mobile Only Menu */}
        <MobileMenuSheet
          SOLUTIONS={SOLUTIONS}
          TOOLS={TOOLS}
          COMPANY={COMPANY}
          RESOURCES={RESOURCES}
        >
          <MenuIcon
            className={cn(
              "flex h-6 w-6 transition-colors lg:hidden",
              scrolled ? "text-brand-blue" : "text-white",
            )}
          />
        </MobileMenuSheet>
      </div>
    </div>
  );
}

function MenuButtons() {
  return (
    <div className="hidden flex-row items-center gap-4 lg:flex">
      <Button variant="primary" size="sm" className="text-sm font-semibold">
        Start free 14-day trial
      </Button>
      <Button
        variant="secondary"
        size="sm"
        className="border border-brand-secondary text-sm font-semibold"
      >
        Schedule demo
      </Button>
    </div>
  );
}

function MenuItems() {
  return (
    <NavigationMenu className="hidden lg:block">
      <NavigationMenuList>
        <NavigationMenuLinkItem text="Product" link="/" />

        <NavigationMenuDropdownItem text="Solutions" links={SOLUTIONS} />

        <NavigationMenuDropdownItem text="Tools" links={TOOLS} />

        <NavigationMenuLinkItem text="Pricing" link="/" />

        <NavigationMenuDropdownItem text="Company" links={COMPANY} />

        <NavigationMenuDropdownItem text="Resources" links={RESOURCES} />
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function NavigationMenuLinkItem({
  text,
  link,
}: {
  text: string;
  link: string;
}) {
  return (
    <NavigationMenuItem>
      <Link href={link} legacyBehavior passHref>
        <NavigationMenuLink
          className={cn(navigationMenuTriggerStyle(), "text-[#6b7280]")}
        >
          {text}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}

function NavigationMenuDropdownItem({
  text,
  links,
}: {
  text: string;
  links: any;
}) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="text-[#6b7280]">
        {text}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div
          className={cn(
            "grid min-w-[400px] gap-20 p-6 md:min-w-[600px]",
            links.length > 1 && "lg:min-w-[700px] xl:min-w-[800px]",
          )}
          style={{
            gridTemplateColumns: links.map(() => "1fr").join(" "),
          }}
        >
          {links?.length > 1 ? (
            links.map((list: any) => (
              <div key={list?.title} className="flex flex-col gap-4">
                <p className="text-xs font-medium uppercase text-[#a3a8b0]">
                  {list?.title}
                </p>

                <ul className="flex flex-col gap-4">
                  {list.items.map((item: any) => (
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
            ))
          ) : (
            <ul className="flex flex-col gap-4">
              {links?.[0]?.items.map((item: any) => (
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
          )}
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

const SOLUTIONS = [
  {
    title: "Solutions By Doctype",
    items: [
      {
        title: "Invoice",
        icon: <MapIcon className="h-6 w-6" />,
        bgColor: "#e0e4f4",
      },
      {
        title: "Bank Statement",
        icon: <PaperclipIcon className="h-6 w-6" />,
        bgColor: "#e0e4f4",
      },
      {
        title: "Bank Check",
        icon: <BookIcon className="h-6 w-6" />,
        bgColor: "#e0e4f4",
      },
      {
        title: "Rent Roll",
        icon: <CircleDollarSignIcon className="h-6 w-6" />,
        bgColor: "#e0e4f4",
      },
      {
        title: "Tax Calculation",
        icon: <RulerIcon className="h-6 w-6" />,
        bgColor: "#e0e4f4",
      },
    ],
  },

  {
    title: "Solutions By Process",
    items: [
      {
        title: "Invoice",
        icon: <MapIcon className="h-6 w-6" />,
        bgColor: "#e0e4f4",
      },
      {
        title: "Bank Statement",
        icon: <PaperclipIcon className="h-6 w-6" />,
        bgColor: "#e0e4f4",
      },
      {
        title: "Bank Check",
        icon: <BookIcon className="h-6 w-6" />,
        bgColor: "#e0e4f4",
      },
    ],
  },

  {
    title: "Solutions By Industry",
    items: [
      {
        title: "Invoice",
        icon: <MapIcon className="h-6 w-6" />,
        bgColor: "#e0e4f4",
      },
      {
        title: "Bank Statement",
        icon: <PaperclipIcon className="h-6 w-6" />,
        bgColor: "#e0e4f4",
      },
      {
        title: "Bank Check",
        icon: <BookIcon className="h-6 w-6" />,
        bgColor: "#e0e4f4",
      },
      {
        title: "Rent Roll",
        icon: <CircleDollarSignIcon className="h-6 w-6" />,
        bgColor: "#e0e4f4",
      },
    ],
  },
];

const TOOLS = [
  {
    title: "Extractors",
    items: [
      {
        title: "Invoice",
        icon: <MapIcon className="h-6 w-6" />,
        bgColor: "#fad6b0",
      },
      {
        title: "Bank Statement",
        icon: <PaperclipIcon className="h-6 w-6" />,
        bgColor: "#fad6b0",
      },
      {
        title: "Bank Check",
        icon: <BookIcon className="h-6 w-6" />,
        bgColor: "#fad6b0",
      },
      {
        title: "Rent Roll",
        icon: <CircleDollarSignIcon className="h-6 w-6" />,
        bgColor: "#fad6b0",
      },
      {
        title: "Tax Calculation",
        icon: <RulerIcon className="h-6 w-6" />,
        bgColor: "#fad6b0",
      },
    ],
  },

  {
    title: "Convertors",
    items: [
      {
        title: "Invoice",
        icon: <MapIcon className="h-6 w-6" />,
        bgColor: "#bac3e7",
      },
      {
        title: "Bank Statement",
        icon: <PaperclipIcon className="h-6 w-6" />,
        bgColor: "#bac3e7",
      },
    ],
  },

  {
    title: "Editors",
    items: [
      {
        title: "Invoice",
        icon: <MapIcon className="h-6 w-6" />,
        bgColor: "#e2e2ba",
      },
      {
        title: "Bank Statement",
        icon: <PaperclipIcon className="h-6 w-6" />,
        bgColor: "#e2e2ba",
      },
      {
        title: "Bank Check",
        icon: <BookIcon className="h-6 w-6" />,
        bgColor: "#e2e2ba",
      },
      {
        title: "Rent Roll",
        icon: <CircleDollarSignIcon className="h-6 w-6" />,
        bgColor: "#e2e2ba",
      },
      {
        title: "Tax Calculation",
        icon: <RulerIcon className="h-6 w-6" />,
        bgColor: "#e2e2ba",
      },
    ],
  },
];

const COMPANY = [
  {
    items: [
      {
        title: "About Us",
        description:
          "Enabling enterprises to become digital & efficient by automating document processing.",
        icon: <HandMetalIcon className="h-6 w-6" />,
        bgColor: "#c9e0a8",
      },
      {
        title: "Careers",
        description:
          "Join fast moving & highly motivated team to create scalable products for enterprises.",
        icon: <TargetIcon className="h-6 w-6" />,
        bgColor: "#a8b3e0",
      },
      {
        title: "Partners",
        description: "Expand your product with AI-powered data extraction.",
        icon: <HeartHandshakeIcon className="h-6 w-6" />,
        bgColor: "#cdd4ed",
      },
    ],
  },
];

const RESOURCES = [
  {
    items: [
      {
        title: "Blog",
        description: "Browse latest articles & industry updates from Docsumo",
        icon: <BookIcon className="h-6 w-6" />,
        bgColor: "#acd7d2",
      },
      {
        title: "Case Studies",
        description: "Real life use cases of Docsumo in action",
        icon: <TargetIcon className="h-6 w-6" />,
        bgColor: "#d1acbb",
      },
    ],
  },
];
