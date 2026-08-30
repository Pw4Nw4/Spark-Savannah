import type { ReactNode } from "react";

export function BracketWord({ children }: { children: ReactNode }) {
  return <span className="text-teal">[{children}]</span>;
}
