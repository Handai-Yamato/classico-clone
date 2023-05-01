import Link from "next/link";
import Image from "next/image";
// library
import { client } from "../../lib/client";
// styles
import styles from "@/styles/Home.module.scss";
// component
import { SecondaryButton } from "@/components/button";

// SSG
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "works" });
  console.log(data);
  return {
    props: {
      works: data.contents,
    },
  };
};

export default function WorksList({ works }) {
  return (
    <>
      {/* Works section */}
      <section>
        <div>
          <h2>
            Works<span>施工事例</span>
          </h2>

          <div>
            <SecondaryButton href="/works" text="もっとみる" />
          </div>
        </div>
      </section>
    </>
  );
}
