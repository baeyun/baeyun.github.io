import { Page, Text } from "@zeit-ui/react";
import Head from "../components/Head";

import styles from "../styles/Home.module.css";

export default function Posts() {
  return (
    <Page className={styles.container}>
      <Head title="Posts" />

      <main className={styles.main}>
        <h1 className={styles.title}>Blog Posts</h1>

        <Text className={styles.description}>
          This section is under construction. Coming soon!
        </Text>
      </main>
    </Page>
  );
}
