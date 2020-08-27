import React, { useState } from "react";
import { connect } from "react-redux";
import { scheduleClass, unscheduleClass } from "../../actions/index";
import ClassCard from './ClassCard';
import PayPalExpressCheckout from "./PayPalExpressCheckout";
import "../../App.css";

const ClientHome = props => {
    const [filteredClass, setFilteredClass] = useState(props.classes);

    const divStyle = {
      display: "flex",
      width: "100%",
      flexDirection: "row",
      margin: "0 auto",
      flexWrap: "wrap",
      justifyContent: "center"
    };
 
  return (
    <body id="client-page">
    <div className="background" >
      <h1>Scheduled Classes</h1>
      <PayPalExpressCheckout />
      {props.scheduledClasses.length !== 0 ? (
        <div className='card' style={divStyle}>
          {props.scheduledClasses.map((item, index) => (
          <ClassCard key={index} item={item} index={index} unscheduleClass={props.unscheduleClass}  setUnScheduledClass={unscheduleClass} setFilteredClass={setFilteredClass} />
        ))}
        </div>
      ) : (
        <h1> </h1>
      )}
      
    </div>
    </body>
  );
};

const mapStateToProps = state => {
  return {
    classes: state.classes,
    scheduledClasses: state.scheduledClasses
  };
};
export default connect(mapStateToProps, { scheduleClass, unscheduleClass })(
  ClientHome
);