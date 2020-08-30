import Link from "next/link";
import { Page, Text } from "@zeit-ui/react";
import Head from "../components/Head";

import styles from "../styles/Home.module.css";

export default function Contact() {
  return (
    <Page className={styles.container}>
      <Head title="Contact" />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Contact <a href="/">Me</a>
        </h1>

        <Text className={styles.description}>
          I’m available for hire! So just{" "}
          <a href="mailto:bukharim96@gmail.com">email me</a> if you’re
          interested in hiring me.
          <br />
          I’m usually available on{" "}
          <a href="https://twitter.com/celicodes" target="_blank">
            Twitter
          </a>{" "}
          but you could also find me on various other platforms:{" "}
          <a href="https://github.com/baeyun" target="_blank">
            GitHub
          </a>
          {", "}
          <a
            href="https://stackoverflow.com/users/7354270/baeyun"
            target="_blank"
          >
            StackOverflow
          </a>
          {"."} Feel free to reach out and say hi.
        </Text>
        <Text className={styles.description}>Finally, Thanks for reading!</Text>
      </main>
    </Page>
  );
}
