import type React from "react";
import { cn } from "../../../lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "../../ui";

interface ModalProps {
  open: boolean;
  setIsOpen: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

export default function Modal({
  open,
  setIsOpen,
  children,
  className,
}: ModalProps) {
  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
      <form>
        <DialogTrigger asChild></DialogTrigger>
        <DialogContent className={cn("sm:max-w-[425px]", className)}>
          {children}
        </DialogContent>
      </form>
    </Dialog>
  );
}
