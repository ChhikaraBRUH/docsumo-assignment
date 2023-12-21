import cn from "@/utils/cn";
import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <>
        <input
          type={type}
          className={cn(
            "ring-offset-background focus-visible:ring-ring text-body-copy placeholder:text-body-copyLight flex h-10 w-full rounded-sm border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-none focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark2 disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          ref={ref}
          {...props}
        />
      </>
    );
  },
);

Input.displayName = "Input";

export { Input };
