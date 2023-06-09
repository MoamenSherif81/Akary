import React from 'react'

export default function NewRoom() {
  return (
    <div className='w-100 d-flex new-room-cont'>
      <div class="mb-3">
        <label for="room-type-input" class="form-label">Type</label>
        <select id="room-type-input" class="form-select">
          <option>Room</option>
          <option>Bathroom</option>
          <option>Kitchen</option>
          <option>Corridor</option>
          <option>Balcony</option>
        </select>
      </div>
      <div class="mb-3 px-3">
        <label for="room-length-input" class="form-label">Type</label>
        <input type="text" className="form-control" id="room-length-input" placeholder='Length' />
      </div>
      <div class="mb-3">
        <label for="room-length-input" class="form-label">Width</label>
        <input type="text" className="form-control" id="room-length-input" placeholder='Width' />
      </div>
    </div>
  )
}
