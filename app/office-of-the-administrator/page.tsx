import type { Metadata } from "next";
import { AdministratorPage } from "../components/LipeProtocolPages";

export const metadata: Metadata = {
  title: "Office of the Administrator",
  description:
    "The LipeProtocol governance layer for standards stewardship, continuity management, administrative integrity, and protocol review.",
};

export default function Page() {
  return <AdministratorPage />;
}