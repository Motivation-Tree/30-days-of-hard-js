import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type FsSectionProps = {
  children: React.ReactNode;
  className?: HTMLAttributes<HTMLElement>["className"];
};

const FsSection: React.FC<FsSectionProps> = ({ children, className }) => {
  const classes = cn("container", className);

  return <section className={classes}>{children}</section>;
};

export default FsSection;
