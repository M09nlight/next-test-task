"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "./dialog";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  ReactElement,
} from "react";

interface ModalContextProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context)
    throw new Error("ModalWindow component must be used inside ModalWindow");
  return context;
};

export function ModalWindow({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      <Dialog open={open} onOpenChange={setOpen}>
        {children}
      </Dialog>
    </ModalContext.Provider>
  );
}

function Trigger({ children }: { children: ReactElement }) {
  return <DialogTrigger asChild>{children}</DialogTrigger>;
}

interface ModalContentProps {
  children: ReactNode | ((props: { close: () => void }) => ReactNode);
  title?: string;
}

function Content({ title, children }: ModalContentProps) {
  const { setOpen } = useModalContext();

  const close = () => setOpen(false);

  return (
    <DialogContent>
      {title && (
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
      )}
      {typeof children === "function" ? children({ close }) : children}
    </DialogContent>
  );
}

function CloseButton({ children }: { children: ReactNode }) {
  const { setOpen } = useModalContext();
  return <DialogClose onClick={() => setOpen(false)}>{children}</DialogClose>;
}

ModalWindow.Trigger = Trigger;
ModalWindow.Content = Content;
ModalWindow.CloseButton = CloseButton;
