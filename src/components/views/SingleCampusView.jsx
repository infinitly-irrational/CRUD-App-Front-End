import React, { Component } from "react";
import { deleteCampusThunk } from "../../store/utilities/CampusThunk";

export const SingleCampus = (props, index) => {
  return (
    <div className="campus">
      <table>
        <tr>
          <td>
            <img
              className="campusImg"
              src={props.allCampuses[index].imageUrl}
              alt="campusPicture"
            />
          </td>
          <tr>
            <img
              className="campusImg"
              src={props.imageUrl}
              alt="campusPicture"
            />
            <button className={props.id} onclick={deleteCampusThunk(props.id)}>
              X
            </button>{" "}
          </tr>
          <br />
          <td>
            Campus: {props.allCampuses[index].name} <br />
            Address: {props.allCampuses[index].address}
            <br />
            <p>{props.allCampuses[index].description}</p>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default SingleCampus;
