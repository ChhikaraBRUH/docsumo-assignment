import { Button } from "@/components/ui/Button";
import cn from "@/utils/cn";
import { LibreBaskerville } from "@/utils/fonts";
import { MoveRightIcon } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div
      className="w-full"
      style={{
        backgroundImage: "url('/hero-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto flex flex-col items-center py-16">
        <p className="mb-4 text-xs uppercase text-[#ffffff99]">
          Document AI Platform
        </p>
        <h1
          className={cn(
            LibreBaskerville.className,
            "mb-7 text-center text-3xl font-bold text-white md:text-5xl",
          )}
        >
          Extract data from{" "}
          <span className="block md:mt-4">unstructured documents</span>
        </h1>
        <p
          className={cn(
            LibreBaskerville.className,
            "mb-5 text-center text-lg font-bold text-white md:mb-12 md:text-3xl",
          )}
        >
          Easily. Efficiently. Accurately.
        </p>

        <div className="mb-4 flex w-[90%] flex-col gap-4 md:w-max md:flex-row md:gap-12">
          <Button variant="primary" className="w-full font-semibold md:w-max">
            Start free 14-day trial
          </Button>
          <Button
            variant="secondary"
            className="group relative flex w-full flex-row items-center gap-2 font-semibold transition-all md:w-max"
          >
            <p className="mr-8">Start Product Tour</p>
            <MoveRightIcon className="absolute right-5 transition-all group-hover:right-4" />
          </Button>
        </div>

        <p className="mb-8 text-xs text-[#ffffff99]">No credit card required</p>

        <div className="flex w-2/3 flex-row items-center gap-2.5 md:w-max">
          <Image
            src="/g2Award.svg"
            width={60}
            height={80}
            alt="G2 Award"
            className="h-auto max-w-[60px]"
          />

          <div className="flex flex-col items-center gap-1.5">
            <p className="text-center text-sm font-medium text-white">
              Ranked as High Performer on G2 (4.75 of 5)
            </p>

            <Image
              src="/g2Stars.svg"
              width={120}
              height={25}
              alt="G2 Stars"
              className="h-auto max-w-[120px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
