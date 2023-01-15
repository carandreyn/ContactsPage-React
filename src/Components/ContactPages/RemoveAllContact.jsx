import React from 'react'

function RemoveAllContact(props) {
  return (
    <div>
      <button
        className="btn btn-danger form-control"
        onClick={() => props.handleRemoveAllContacts()}
      >Remove All</button>
    </div>
  )
}

export default RemoveAllContact
