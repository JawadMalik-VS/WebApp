import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Table, TableBody, TableCell, TableHead } from "@mui/material";
import Logout from "./Logout";

function Product() {
  const [description, setDescription] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4500/api/v1/product")
      .then((res) => {
        setDescription(res.data);
      })
      .catch((error) => console.log("Error", error));
  }, []);

  console.log("description", description);

  return (
    <>
      {" "}
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
                    <TableCell>PRICE</TableCell>
                    <TableCell>IMAGE</TableCell>
                  </TableHead>
                  <TableBody>
                    <TableCell>{item.pid}</TableCell>

                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell width="500px">
                      {" "}
                      <img
                        src={item.image}
                        width="100px"
                        height="150px"
                        alt="kill"
                      />
                    </TableCell>
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

export default Product;
