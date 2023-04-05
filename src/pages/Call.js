import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CallRoom from "./CallRoom";
import Video from "twilio-video";
import { ExitCall, StartCall } from "../apis/Calls";
import { Button } from "@mui/material";

function Call() {
  const [connecting, setConnecting] = useState(false);
  const [room, setRoom] = useState(null);

  var { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    joinChatRoom();
  }, [id]);

  console.log("id", id);

  const joinCall = (token) => {
    setConnecting(true);
    Video.connect(token, {
      name: id,
    })
      .then((room) => {
        setConnecting(false);
        setRoom(room);
      })
      .catch((err) => {
        console.error("ERROR", err);
        joinChatRoom();
        setConnecting(false);
      });
  };

  console.log("Room-->", room);

  const joinChatRoom = async () => {
    StartCall({ roomId: id })
      .then((res) => {
        const token = res?.data?.data.token;
        joinCall(token);
        localStorage.setItem("VIDEO_TOKEN", token);
      })
      .catch((err) => {
        console.log(err.response, "err");
      });
  };

  const handleLogout = useCallback(() => {
    setRoom((prevRoom) => {
      if (prevRoom) {
        prevRoom.localParticipant.tracks.forEach((trackPub) => {
          trackPub.track.stop();
        });
        prevRoom.disconnect();
      }
      return null;
    });
    localStorage.removeItem("VIDEO_TOKEN");
  }, []);

  const handleDisconnect = () => {
    handleLogout();
    ExitCall({ roomId: id }).then((res) => {
      console.log("Exit Call Res", res);
    });
    navigate("/video");
  };

  return (
    <div>
      <div className="relative w-full h-[calc(100vh-10.4rem)]">
        {connecting && (
          <div className="flex items-center justify-center h-full">
            <h1 className="text-white text-6xl">Connecting...</h1>
          </div>
        )}
        {!connecting && (
          <CallRoom
            roomName={id}
            room={room}
            handleDisconnect={handleDisconnect}
          />
        )}
        {connecting ? (
          "null"
        ) : (
          <Button
            sx={{ position: "relative", marginLeft: "500px" }}
            onClick={handleDisconnect}
            variant="contained"
          >
            End Call
          </Button>
        )}
      </div>
    </div>
  );
}

export default Call;
