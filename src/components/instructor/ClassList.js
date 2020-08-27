import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ClassList = props => {
    console.log("HERE", props.classes)
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Class Name</th>
                        <th>Type</th>
                        <th>Date and Start Time</th>
                        <th>Duration</th>
                        <th>Intensity</th>
                        <th>Location</th>
                        <th>Class Size</th>
                        <th>Open spots</th>


                    </tr>
                </thead>
                <tbody>
                    {props.classes.map(c => (
                        <tr key={c.id}>
                            <td><Link to={`/instructor/classes/${c.id}`}>{c.workoutName}</Link></td>
                            <td>{c.type}</td>
                            <td>{c.startTime}</td>
                            <td>{c.durationMins}</td>
                            <td>{c.intensityLevel}</td>
                            <td>{c.location}</td>
                            <td>{c.maxAttendees}</td>
                            <td>{c.maxAttendees - c.attendees}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
};

const mapStateToProps = state => {
    console.log(state);
    return {
        classes: state.classes
    };
};

export default connect(mapStateToProps, {})(ClassList);