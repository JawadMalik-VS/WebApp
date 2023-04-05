import React, { useEffect, useState } from "react";

import VideoCamera from "../assets/icons/videocamera.svg";
import PhoneEnable from "../assets/icons/phoneenabled.svg";
import MicroPhone from "../assets/icons/microphone.svg";
import MicroPhoneMuted from "../assets/icons/microphone-muted.svg";

import Participant from "./Participants";
//import RemoteParticipants from "./RemoteParticipant";

const CallRoom = ({ room, roomName, handleDisconnect }) => {
  const [muted, setMuted] = useState(false);

  const [participants, setParticipants] = useState([]);
  useEffect(() => {
    if (room) {
      const participantConnected = (participant) => {
        setParticipants((prevParticipants) => [
          ...prevParticipants,
          participant,
        ]);
      };

      const participantDisconnected = (participant) => {
        setParticipants((prevParticipants) =>
          prevParticipants.filter((p) => p !== participant)
        );
      };

      room?.on("participantConnected", participantConnected);
      room?.on("participantDisconnected", participantDisconnected);
      room.participants.forEach(participantConnected);
      return () => {
        room.off("participantConnected", participantConnected);

        room.off("participantDisconnected", participantDisconnected);
      };
    }
  }, [room]);
  return (
    <>
      <div className="w-full h-full">
        {room ? (
          <Participant
            muted={muted}
            key={room.localParticipant.sid}
            participant={room.localParticipant}
          />
        ) : (
          ""
        )}
      </div>
      <div className="absolute md:justify-around bottom-0 bg-[#000000B2] w-full h-[6rem] lg:h-[11.086rem] flex  justify-center lg:justify-center md:gap-[4rem] lg:gap-[6rem] items-center">
        <div className="flex items-center gap-[3rem] justify-center md:gap-[10rem] lg:gap-[11.6rem]">
          <div className="w-10 h-10 lg:w-[6.43rem] lg:h-[6.43rem] bg-[#2165A24D] rounded-full flex justify-center items-center">
            <img src={VideoCamera} alt="" />
          </div>
          <div
            onClick={handleDisconnect}
            className="w-10 h-10 lg:w-[6.43rem] lg:h-[6.43rem] bg-[#FF0000] rounded-full flex justify-center items-center cursor-pointer"
          >
            <img src={PhoneEnable} alt="" />
          </div>
          <div
            onClick={() => setMuted(!muted)}
            className="w-10 h-10 lg:w-[6.43rem] lg:h-[6.43rem] bg-[#2165A24D] rounded-full flex justify-center items-center cursor-pointer"
          >
            <img src={muted ? MicroPhoneMuted : MicroPhone} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CallRoom;
