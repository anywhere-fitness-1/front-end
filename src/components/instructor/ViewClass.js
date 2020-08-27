import React from 'react';
import { connect } from 'react-redux';
import { deleteIClass } from '../../actions/index'

const ViewClass = props => {
console.log(+props.match.params.classID)
    const classViewing = +props.match.params.classID

    const handleDelete = e => {
        e.preventDefault()
        props.deleteIClass(classViewing)
        props.history.push(`/instructor/`)
    }

    const handleEdit = e => {
        e.preventDefault()
        props.history.push(`/instructor/classes/edit/${classViewing}`)
    }

    return (
        <div>
            <p>Class Name: {props.classes.find(c => c.id === classViewing).workoutName}</p>

            <p>Type: {props.classes.find(c => c.id === classViewing).type}</p>
            <p>Start Time: {props.classes.find(c => c.id === classViewing).startTime}</p>
            <p>Duration Minutes: {props.classes.find(c => c.id === classViewing).durationMins}</p>
            <p>Intensity: {props.classes.find(c => c.id === classViewing).intensityLevel}</p>
            <p>Location: {props.classes.find(c => c.id === classViewing).location}</p>
            <p>Max Class Size:{props.classes.find(c => c.id === classViewing).maxAttendees} </p>
            <p>Attendees: {props.classes.find(c => c.id === classViewing).attendees}</p>
            <p>id: {classViewing}</p>
            <div>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleEdit}>Edit</button>
            </div>
        </div>




    )
}

const mapStateToProps = state => {
    return {
        classes: state.classes
    }
}
export default connect(mapStateToProps, { deleteIClass })(ViewClass);