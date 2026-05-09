import type { Metadata } from "next";
import { CapabilityMatrixPage } from "../components/LipeProtocolPages";

export const metadata: Metadata = {
  title: "Capability Matrix",
  description:
    "Explore LipeProtocol operating surfaces for visible reasoning, diagnostics, systems design, governance, and decision-quality artifacts.",
};

export default function Page() {
  return <CapabilityMatrixPage />;
}