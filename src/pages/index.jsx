import Link from "next/link";
import { Inter } from "next/font/google";
import NestedLayout from "@/components/layout/nested-layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <NestedLayout>
      <h1>Works</h1>
      <p>ワークス</p>
    </NestedLayout>
  );
}
