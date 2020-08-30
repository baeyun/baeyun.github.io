import Link from "next/link";
import { Page, Text, Card, Grid } from "@zeit-ui/react";
import Head from "../components/Head";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Page className={styles.container}>
      <Head />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi, I am <a href="/">Bukhaar M.</a>
        </h1>

        <Text className={styles.description}>
          Software Engineer, Freelancer
        </Text>

        <Grid.Container gap={2} justify="center" style={{ marginTop: "3rem" }}>
          <Grid sm={9}>
            <Link href="/about">
              <a>
                <Card hoverable>
                  <h3>About Me</h3>
                  <Text>Get to know me better.</Text>
                </Card>
              </a>
            </Link>
          </Grid>
          <Grid sm={9}>
            <Link href="/posts">
              <a>
                <Card hoverable>
                  <h3>Blog</h3>
                  <Text>Hear my thoughts and ideas.</Text>
                </Card>
              </a>
            </Link>
          </Grid>

          <Grid sm={9}>
            <Link href="/projects">
              <a>
                <Card hoverable>
                  <h3>Projects</h3>
                  <Text>Discover some of my OSS projects.</Text>
                </Card>
              </a>
            </Link>
          </Grid>

          <Grid sm={9}>
            <Link href="/contact">
              <a>
                <Card hoverable>
                  <h3>Hire me!</h3>
                  <Text>... or simply say hello :)</Text>
                </Card>
              </a>
            </Link>
          </Grid>
        </Grid.Container>
      </main>
    </Page>
  );
}
