import { useState, useEffect } from "react";
import { Page, Text, Card, Grid, Container, Button } from "@zeit-ui/react";
import GithubIcon from "@zeit-ui/react-icons/github";
import Head from "../components/Head";

import styles from "../styles/Home.module.css";

const GITHUB_API_REPOS_URL = "https://api.github.com/repos/";
const PROJECT_FULL_NAMES = [
  "packem/packem",
  "baeyun/pregx",
  "baeyun/directive-x",
  "baeyun/documate",
  "baeyun/ressheet",
  "baeyun/react-ui-kitten",
  "baeyun/macron",
];

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    Promise.all(
      PROJECT_FULL_NAMES.map(async (fullname) => {
        const data = await fetch(GITHUB_API_REPOS_URL + fullname);
        const repo = await data.json();

        return repo;
      })
    ).then((projects) => {
      setProjects(projects);
    });
  }, []);

  return (
    <Page className={styles.container}>
      <Head title="Projects" />

      <main className={styles.main}>
        <h1 className={styles.title}>My OSS Projects</h1>

        <Text className={styles.description}>
          These are some of my projects
        </Text>

        <Container>
          <Grid.Container
            gap={2}
            justify="center"
            style={{ marginTop: "3rem" }}
          >
            {(!projects.length && "Loading...") ||
              projects.map((project) => {
                console.log(project);
                return (
                  <Grid key={project.name}>
                    <a
                      href={project.homepage || project.html_url}
                      target="_blank"
                    >
                      <Card shadow width="250px">
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            height: 205.34,
                          }}
                        >
                          <img
                            src={`https://raw.githubusercontent.com/${project.full_name}/master/resources/logo.png`}
                            onError={(e) =>
                              (e.target.src =
                                "/images/project-fallback-logo.png")
                            }
                            alt={`${project.name} logo`}
                          />
                        </div>
                        <Text
                          h4
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "0",
                          }}
                        >
                          {project.name}
                          <a href={project.html_url} target="_blank">
                            <Button
                              size="mini"
                              auto
                              icon={<GithubIcon />}
                              children={project.stargazers_count}
                            />
                          </a>
                        </Text>
                        <Text type="secondary" small>
                          {project.description}
                        </Text>
                      </Card>
                    </a>
                  </Grid>
                );
              })}
          </Grid.Container>
        </Container>
      </main>
    </Page>
  );
}
