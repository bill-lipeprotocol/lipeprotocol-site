import type { Metadata } from "next";
import { EngagementPage } from "../components/LipeProtocolPages";

export const metadata: Metadata = {
  title: "Engagement",
  description:
    "Structured LipeProtocol engagements for briefings, diagnostic sprints, architecture design, and advisory partnership.",
};

export default function Page() {
  return <EngagementPage />;
}