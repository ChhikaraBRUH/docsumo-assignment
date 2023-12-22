import { ChevronRightIcon } from "lucide-react";

export default function NavigationListItem({
  title,
  description,
  bgColor = "#fad6b0",
  children,
}: {
  title: string;
  description?: string;
  bgColor?: string;
  children: React.ReactNode;
}) {
  return (
    <li className="group flex w-full cursor-pointer flex-row items-center gap-4">
      <div
        className="flex items-center justify-center rounded-md p-2 opacity-75 transition-all group-hover:opacity-100"
        style={{ backgroundColor: bgColor }}
      >
        {children}
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex flex-row items-center gap-1 transition-all duration-300 group-hover:gap-2">
          <p className="text-sm font-semibold text-brand-dark">{title}</p>
          {!description && (
            <ChevronRightIcon className="hidden h-4 w-4 transition-all group-hover:block" />
          )}
        </div>

        {!!description && (
          <p className="text-sm text-[#8b8596]">{description}</p>
        )}
      </div>
    </li>
  );
}
