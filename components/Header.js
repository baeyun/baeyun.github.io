import Link from "next/link";
import { Grid, Button, Card, Text } from "@zeit-ui/react";
import GithubIcon from "@zeit-ui/react-icons/github";
import LightThemeIcon from "@zeit-ui/react-icons/sun";
import DarkThemeIcon from "@zeit-ui/react-icons/moon";

export default function Header({ themeType, switchThemes }) {
  return (
    <Card
      shadow
      style={{
        borderRadius: 0,
        borderWidth: "0 0 1px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Grid.Container
          gap={2}
          style={{
            justifyContent: "space-between",
            maxWidth: 1000,
          }}
        >
          <Grid style={{ padding: 0, display: "flex", alignItems: "center" }}>
            <Link href="/">
              <a style={{ display: "flex" }}>
                <img
                  src="/images/baeyun_DP_4_2.png"
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "5pc",
                    marginRight: 10,
                  }}
                />
                <Text b size="1.25rem">
                  Bukhaar M.
                </Text>
              </a>
            </Link>
          </Grid>
          <Grid span={12}>
            <Link href="/">
              <a style={{ marginRight: 20 }}>Home</a>
            </Link>
            <Link href="/about">
              <a style={{ marginRight: 20 }}>About</a>
            </Link>
            <Link href="/posts">
              <a style={{ marginRight: 20 }}>Blog</a>
            </Link>
            <Link href="/projects">
              <a style={{ marginRight: 20 }}>Projects</a>
            </Link>
            <Link href="/contact">
              <a style={{ marginRight: 20 }}>Contact</a>
            </Link>
            <a href="https://github.com/baeyun" style={{ marginRight: 15 }}>
              <Button size="small" auto icon={<GithubIcon />}>
                GitHub
              </Button>
            </a>
            <Button
              size="small"
              auto
              icon={
                themeType == "light" ? <DarkThemeIcon /> : <LightThemeIcon />
              }
              onClick={switchThemes}
            >
              {themeType == "light" ? "Dark" : "Light"}
            </Button>
          </Grid>
        </Grid.Container>
      </div>
    </Card>
  );
}

/* <ButtonDropdown size="small" auto style={{ alignSelf: "flex-end" }}>
        <ButtonDropdown.Item
        {...(themeType == "light" ? { main: true } : {})}
        onClick={(e) => {
            setThemeType("light");
            console.log(e);
        }}
        >
        Light
        </ButtonDropdown.Item>
        <ButtonDropdown.Item
        {...(themeType == "dark" ? { main: true } : {})}
        onClick={() => setThemeType("dark")}
        >
        Dark
        </ButtonDropdown.Item>
    </ButtonDropdown> */
