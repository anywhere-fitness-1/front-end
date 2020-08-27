import React, { useEffect, useState } from "react";
import Search from "./Search";
import { connect } from "react-redux";
import ClassCard from './ClassCard'
import { scheduleClass, unscheduleClass, fetchClasses } from "../../actions/index";
import '../styles/ClientStyle.css';
import '../../App.css';

  const divStyle = {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    margin: "0 auto",
    flexWrap: "wrap",
    justifyContent: "center"
  };

const ClientHome = props => {
  const [query, setQuery] = useState("");
  const [unScheduledClass, setUnScheduledClass] = useState(props.classes);
  const [filteredClass, setFilteredClass] = useState(unScheduledClass);

  const handleInputChange = event => {
    setQuery(event.target.value);
    console.log(event);
  };

  useEffect(() => {
    if (query.length < 1) {
      setFilteredClass(unScheduledClass)
    } else {
      let filterClasses = unScheduledClass.filter(c => {
        return (
          c.workoutName.toLowerCase().includes(query.toLowerCase()) ||
          c.type.toLowerCase().includes(query.toLowerCase()) ||
          c.startTime.toLowerCase().includes(query.toLowerCase()) ||
          c.intensityLevel.toLowerCase().includes(query.toLowerCase()) ||
          
          // c.durationMins.toLowerCase().includes(query.toLowerCase()) ||
          c.durationMins.toString().includes(query) ||
          c.location.toLowerCase().includes(query.toLowerCase())
        );
      });
   
    setFilteredClass(filterClasses);
  } }, [query, unScheduledClass]);

  console.log(query);
  console.log(filteredClass);


  return (
    <body id="client-page">
    <div className="background">
      <br/>
      <h1>Client Dashboard</h1>
      <Search handleInputChange={handleInputChange} query={query} />
      <div style={divStyle}>
        {filteredClass.map((item, index) => (
          <ClassCard key={index}item={item} index={index} scheduleClass={props.scheduleClass} setUnScheduledClass={setUnScheduledClass} setFilteredClass={setFilteredClass} />
        ))}
      </div>
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
export default connect(mapStateToProps, { scheduleClass, unscheduleClass, fetchClasses })(ClientHome);