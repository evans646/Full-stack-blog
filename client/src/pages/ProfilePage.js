import Container from "@material-ui/core/Container";

import { useUser } from "../auth/useUser";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";

export function ProfilePage() {
  const user = useUser();

  let { username, email } = user;

  return (
    <Container maxWidth="md" style={{ margin: "5% 13%" }}>
      <Card sx={{ maxWidth: 400, height: 500 }}>
        <CardActionArea>
          <CardContent>
            <div
              className="bottom-container"
              style={{ padding: "10px", lineHeight: "10px" }}
            >
              <div style={{ padding: "20px" }}>
                <h3>Username:</h3>
                <p>{username}</p>
              </div>
              <div style={{ padding: "20px" }}>
                <h3>Email:</h3>
                <p>{email}</p>
              </div>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}
