// import React, { Component } from "react";
import ScreeningPage from "./ScreeningPage"

// export default class PopUp extends Component {
//   handleClick = (identifier) => {
//     this.props.toggle(identifier);
//   };

//   render() {
//     return (
//     //   <div className="modal">
//         <div className="modal_content">
//             <span className="close" onClick={() => this.handleClick("Screening")}>
//                 &times;
//             </span>
//             <ScreeningPage/>
//         </div>
//     //   </div>
//     );
//   }
// }



import React from "react";

const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};

export default Popup;
