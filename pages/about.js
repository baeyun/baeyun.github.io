import Link from "next/link";
import { Page, Text } from "@zeit-ui/react";
import Head from "../components/Head";

import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <Page className={styles.container}>
      <Head title="About" />

      <main className={styles.main}>
        <h1 className={styles.title}>
          About <a href="/">Me</a>
        </h1>

        <Text className={styles.description}>
          I'm a Software Engineer and Freelancer
        </Text>
        <Text size="1.25rem">
          You'll hear more about me as I build this site of mine. For now, check
          my{" "}
          <Link href="/projects">
            <a>projects</a>
          </Link>{" "}
          or simply{" "}
          <Link href="/contact">
            <a>get in touch</a>
          </Link>
          .
        </Text>
      </main>
    </Page>
  );
}
