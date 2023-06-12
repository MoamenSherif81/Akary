import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function NewRoom(props) {
  const [room, setRoom] = useState(props.init);

  return (
    <div className="w-100 d-flex new-room-cont position-relative" data-id={props.id}>
      <FontAwesomeIcon icon={faTrash} onClick={props.removeRoom} className="room-delete-icon main-color" />
      <div className="mb-3 ms-2">
        <label htmlFor="room-type-input" className="form-label">
          Type
        </label>
        <select
          id="room-type-input"
          className="form-select"
          name="type"
          value={room}
          onChange={(e) => {setRoom((e.target.value))}}
        >
          <option value="room">Room</option>
          <option value="bathroom">Bathroom</option>
          <option value="kitchen">Kitchen</option>
          <option value="corridor">Corridor</option>
          <option value="balcony">Balcony</option>
        </select>
      </div>
      <div className="mb-3 px-3">
        <label htmlFor="room-length-input" className="form-label">
          Length
        </label>
        <input
          type="text"
          name="length"
          className="form-control"
          id="room-length-input"
          placeholder="Length"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="room-width-input" className="form-label">
          Width
        </label>
        <input
          type="text"
          name="width"
          className="form-control"
          id="room-width-input"
          placeholder="Width"
        />
      </div>
    </div>
  );
}
