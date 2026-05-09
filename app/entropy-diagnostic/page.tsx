import type { Metadata } from "next";
import { EntropyDiagnosticPage } from "../components/LipeProtocolPages";

export const metadata: Metadata = {
  title: "Entropy Diagnostic",
  description:
    "Measure ambiguity, assumption load, claim stability, signal clarity, and decision friction before confusion becomes drift.",
};

export default function Page() {
  return <EntropyDiagnosticPage />;
}