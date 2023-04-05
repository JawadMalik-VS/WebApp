import { Card, Typography } from "@mui/material";
import React from "react";
import Logout from "./Logout";

function Dashboard() {
  return (
    <>
      {" "}
      <Logout />
      <div style={{ position: "absolute", marginLeft: "700px" }}>
        <Card sx={{ width: "500px", margin: "30px" }}>
          <h1>
            YOU ARE LOOKING DASHBOARD
            <img
              height="400px"
              src="https://as2.ftcdn.net/v2/jpg/01/62/97/71/1000_F_162977149_9E4pohNXbSxjPuTZ138rNsHAqkZDdGac.jpg"
            />
          </h1>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
        </Card>
      </div>
    </>
  );
}

export default Dashboard;
