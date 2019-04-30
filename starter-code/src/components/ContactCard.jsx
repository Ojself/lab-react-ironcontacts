import React from "react";

const contactCard = props => {
  // let name = props.firstname + " " + props.lastname;
  return (
    <tr>
      <td id='image-with-button'>
        <img src={props.pictureUrl} alt={props.name} />
        <button id='delete-button' onClick={props.clickToDelete}>
          Delete
        </button>
      </td>
      <td>{props.name}</td>
      <td>{props.popularity}</td>
    </tr>
  );
};

export default contactCard;
