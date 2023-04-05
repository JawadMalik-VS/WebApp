import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import axios from "axios";
import Logout from "./Logout";

function VideCall() {
  let [roomId, setRoomId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4500/api/v1/admin/room", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setRoomId(res?.data?.data.Response.roomId);
      })
      .catch((err) => console.log("Error", err));
  }, [roomId]);

  const handleJoin = () => {
    navigate(`/video/${roomId}`);
  };

  console.log("RoomId", roomId);
  return (
    <>
      <Logout />{" "}
      <div style={{ position: "absolute", marginLeft: "300px" }}>
        <h1>Welcome to Twilio Video Call</h1>
        <Button variant="contained" onClick={handleJoin}>
          Join Room
        </Button>
      </div>{" "}
    </>
  );
}

export default VideCall;
