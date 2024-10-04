
import Image from "next/image";
import HomePage from "./our-service/page";
import styles from "./page.module.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home || DLT TECHNICAL SERVICES",
  description: "Product / Service Categories Project Name Talk about this portfolio piece–who you did it for and why, plus what the results were (potential customers love to hear about real-world results).…Read More",
};
export default function Main() {
  return (
    <>
      <main >
        <div>HomePage</div>

      <Image src='/service/Civil_Construction_1.webp' alt="sdf" width={200} height={200} />
      </main>
    </>
  );
}
