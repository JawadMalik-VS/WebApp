import React, { useEffect, useState } from "react";
import Participant from "./Participants";

const RemoteParticipants = ({ participants, muted }) => {
  return (
    <>
      {participants?.map((participant) => {
        return (
          <div
            key={participant?.identity}
            className="absolute bottom-[8rem] right-[4rem] lg:bottom-[18rem] lg:right-[15.432rem] text-center"
          >
            <div className="w-[18rem] h-[12rem] tablet:w-[22rem] tablet:h-[16rem] overflow-hidden bg-darkgrey border-white border-2 rounded-xl">
              <Participant
                muted={muted}
                key={participant.identity}
                participant={participant}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RemoteParticipants;
