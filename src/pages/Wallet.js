import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Logout from "./Logout";

function Wallet() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [description, setDescription] = useState([]);
  const [address, setAddress] = useState("");
  const [symbol, setSymbol] = useState("");
  const [icon, setIcon] = useState("");
  const [cid, setCid] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4500/api/v1/wallet")
      .then((res) => {
        setDescription(res.data);
      })
      .catch((error) => console.log("Error", error));
  }, []);

  console.log("description", description);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  let url = "http://localhost:4500/api/v1/wallet/valid";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwIiwibmFtZSI6IiAgVGFoaXIiLCJlbWFpbCI6IlRhaGlyNjFAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkZTUxLmlEUU8yMU10eExTWlE0RTBMLml5MlV2eFZxalhnMDJ1NVAvNUROOHZkZmpzUlhtR3EiLCJpYXQiOjE2Njk4NDcyMTl9.60TGcKsn3G3dJQ9cH5emjXk2yaXsLxO1kBOQAG7erUA";

  function handleCreate(e) {
    e.preventDefault();
    axios
      .post(
        url,
        { address, symbol, icon, cid },
        {
          headers: {
            Authorization: `Basic ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log("Token", res?.data);
      })
      .catch((error) => console.log("Error-->", error));
  }
  return (
    <>
      {" "}
      <Logout />
      <div style={{ position: "absolute", marginLeft: "300px" }}>
        <Button variant="contained" onClick={handleOpen}>
          {" "}
          Create Wallet
        </Button>

        {description.map((item) => {
          return (
            <div style={{ margin: "50px", backgroundColor: "GrayText" }}>
              <div key={item._id}>
                <Table
                  sx={{ border: "2px solid", borderColor: "ButtonShadow" }}
                >
                  <TableHead>
                    <TableCell>Address</TableCell>
                    <TableCell>SYMBOL</TableCell>
                    <TableCell>ICON</TableCell>
                  </TableHead>
                  <TableBody>
                    <TableCell>{item.address}</TableCell>
                    <TableCell>{item.symbol}</TableCell>

                    <TableCell>
                      {" "}
                      <img
                        width="200px"
                        height="120px"
                        src={item.icon}
                        alt="kill"
                      />
                    </TableCell>
                  </TableBody>
                </Table>
              </div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography sx={{ mt: 2 }}>
                    Address
                    <TextField
                      type="text"
                      onChange={(e) => setAddress(e.target.value)}
                    ></TextField>
                  </Typography>
                  <Typography sx={{ mt: 2 }}>
                    Symbol
                    <TextField
                      type="text"
                      onChange={(e) => setSymbol(e.target.value)}
                    ></TextField>
                  </Typography>
                  <Typography sx={{ mt: 2 }}>
                    Icon
                    <TextField
                      type="text"
                      onChange={(e) => setIcon(e.target.value)}
                    ></TextField>
                  </Typography>
                  <Typography sx={{ mt: 2 }}>
                    Cid
                    <TextField
                      type="text"
                      onChange={(e) => setCid(e.target.value)}
                    ></TextField>
                  </Typography>
                  <Button onClick={handleCreate}>Create</Button>
                  <Button onClick={handleClose}>close</Button>
                </Box>
              </Modal>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Wallet;
