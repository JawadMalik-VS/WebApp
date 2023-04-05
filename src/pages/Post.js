import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Table, TableBody, TableCell, TableHead } from "@mui/material";
import Logout from "./Logout";

function Post() {
  const [description, setDescription] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4500/api/v1/post")
      .then((res) => {
        setDescription(res.data);
      })
      .catch((error) => console.log("Error", error));
  }, []);

  console.log("description", description);

  return (
    <>
      <Logout />
      <div style={{ position: "absolute", marginLeft: "300px" }}>
        {description.map((item) => {
          return (
            <div style={{ margin: "50px", backgroundColor: "GrayText" }}>
              <div key={item.id}>
                <Table
                  sx={{ border: "2px solid", borderColor: "ButtonShadow" }}
                >
                  <TableHead>
                    <TableCell>ID</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Description</TableCell>
                  </TableHead>
                  <TableBody>
                    <TableCell>{item.id}</TableCell>

                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.body}</TableCell>
                  </TableBody>
                </Table>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Post;
