import cn from "@/utils/cn";
import { LibreBaskerville } from "@/utils/fonts";
import Image from "next/image";

export default function ClientLogos() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex w-full flex-col items-center justify-center gap-12">
        <h3
          className={cn(
            LibreBaskerville.className,
            "text-center text-3xl font-bold text-brand-dark",
          )}
        >
          Trusted by the world’s biggest{" "}
          <span className="text-brand-blue">data-driven businesses</span>
        </h3>

        <LogosGrid />
      </div>
    </div>
  );
}

function LogosGrid() {
  const getBorderClassName = (index: number) => {
    switch (index) {
      case 0:
        return "border-t border-r border-brand-secondary";
      case 1:
        return "border-t border-brand-secondary md:border-r";
      case 2:
        return "border-t border-r border-brand-secondary";
      case 3:
        return "border-t border-brand-secondary";
      case 4:
        return "border-t border-r border-brand-secondary md:border-b";
      case 5:
        return "border-t border-brand-secondary md:border-b md:border-r";
      case 6:
        return "border-y border-r border-brand-secondary";
      case 7:
        return "border-y border-brand-secondary";
      default:
        return "";
    }
  };

  return (
    <div className="grid w-full grid-cols-2 md:w-[80%] md:grid-cols-4">
      {CLIENT_LOGOS.map((logo, index) => (
        <div
          className={cn(
            "flex items-center justify-center p-8",
            getBorderClassName(index),
          )}
          key={logo}
        >
          <Image
            src={logo}
            width={200}
            height={100}
            alt="Client Logo"
            className="max-h-[64px] max-w-[132px] align-middle"
          />
        </div>
      ))}
    </div>
  );
}

const CLIENT_LOGOS = [
  "/clients/client1.svg",
  "/clients/client2.svg",
  "/clients/client3.svg",
  "/clients/client4.svg",
  "/clients/client5.svg",
  "/clients/client6.svg",
  "/clients/client7.svg",
  "/clients/client8.svg",
];
