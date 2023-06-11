import React, { useState } from "react";
import NewRoom from "./NewRoom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import nanoId from "nano-id";

export default function NewRoomsList() {
  const [rooms, setRooms] = useState([
    { id: nanoId(), init: "room" },
    { id: nanoId(), init: "bathroom" },
    { id: nanoId(), init: "kitchen" },
    { id: nanoId(), init: "corridor" },
    { id: nanoId(), init: "balcony" }
  ]);

  function addRoom() {
    setRooms([
      ...rooms,
      { id: nanoId(), init: "room" }
    ]);
  }

  function removeRoom(e) {
    const parent = e.target.closest('.new-room-cont');
    const id = parent.getAttribute('data-id');
    setRooms(rooms.filter(room => room.id !== id));
  }

  let roomElements = rooms.map(room => (
    <NewRoom
      key={room.id}
      id={room.id}
      init={room.init}
      removeRoom={removeRoom}
    />
  ))

  return (
    <>
      <div className="new-rooms">
        {roomElements}
      </div>
      <div className="mb-3 w-100 px-1">
        <button
          type="button"
          className="w-100 d-flex gap-3 justify-content-center align-items-center py-1"
          onClick={addRoom}
        >
          <FontAwesomeIcon icon={faPlus} />
          Add a room
        </button>
      </div>
    </>
  );
}
