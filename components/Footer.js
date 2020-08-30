import { Card } from "@zeit-ui/react";
import HeartIcon from "@zeit-ui/react-icons/heart";

export default function Footer(props) {
  return (
    <footer>
      <Card
        style={{
          flexDirection: "column",
          alignContent: "center",
          borderRadius: 0,
          borderWidth: "1px 0 0",
          textAlign: "center",
        }}
      >
        <span>
          Made with <span style={{ verticalAlign: "middle" }}><HeartIcon size={16} /></span>{" "}
          by <a href="https://github.com/baeyun">@baeyun</a>
        </span>
      </Card>
    </footer>
  );
}
