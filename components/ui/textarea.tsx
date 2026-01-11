import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-3 text-sm ring-offset-background placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-proyecta-blue focus-visible:border-proyecta-blue disabled:cursor-not-allowed disabled:opacity-50 resize-none transition-colors",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };

