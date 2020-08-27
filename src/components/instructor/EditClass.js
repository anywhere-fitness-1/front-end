import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { editIClass } from '../../actions/index';
import styled from 'styled-components';


const Page = styled.form`
display: flex;
justify-content: center;
`
const Form = styled.form`
display: flex;
flex-direction: column;
width: 50%;
`

const EditClass = props => {

    const [editIClass, setEditIClass] = useState({
        workoutName: '',
        type: '',
        startTime: '',
        durationMins: 0,
        intensityLevel: '',
        location: '',
        maxAttendees: 0,
        attendees: 0
    });

    useEffect(() => {
        setEditIClass(props.classes.find(c => c.id === +props.match.params.classID))
    }, [props.match.params.classID, props.classes])

    const classEditing = +props.match.params.classID

    console.log(editIClass)

    const handleChanges = e => {
        console.log(e.target.value)
        setEditIClass({
            ...editIClass,
            [e.target.name]: e.target.type === 'number' ? +e.target.value : e.target.value
        });
    };

    const handleSave = e => {
        e.preventDefault()
        props.editIClass(editIClass)
        props.history.push(`/instructor/`)
    }

    const handleCancel = e => {
        e.preventDefault()
        props.history.push(`/instructor/`)
    }

    return (
        <Page>
            <Form>
                <label htmlFor="workoutName">Class Name</label>
                <input
                    type="text"
                    name="workoutName"
                    value={editIClass.workoutName}
                    id="workoutName"
                    onChange={handleChanges}
                    placeholder={props.classes.find(c => c.id === classEditing).workoutName}
                />

                <label htmlFor="type">Type</label>
                <input
                    type="text"
                    value={editIClass.type}
                    id="type"
                    name="type"
                    onChange={handleChanges}
                />

                <label htmlFor="startTime">Start time</label>
                <input
                    type="text"
                    value={editIClass.startTime}
                    id="startTime"
                    name="startTime"
                    onChange={handleChanges}
                />

                <label htmlFor="durationMins">Duration (minutes)</label>
                <input
                    type="number"
                    value={editIClass.durationMins}
                    id="durationMins"
                    name="durationMins"
                    onChange={handleChanges}
                />

                <label htmlFor="intensityLevel">Intensity</label>
                <input
                    type="text"
                    value={editIClass.intensityLevel}
                    id="intensityLevel"
                    name="intensityLevel"
                    onChange={handleChanges}
                />

                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    value={editIClass.location}
                    id="location"
                    name="location"
                    onChange={handleChanges}
                />

                <label htmlFor="maxAttendees">Max Class Size</label>
                <input
                    type="number"
                    value={editIClass.maxAttendees}
                    id="maxAttendees"
                    name="maxAttendees"
                    onChange={handleChanges}
                />

                <label htmlFor="attendees">Attendees</label>
                <input
                    type="number"
                    value={editIClass.attendees}
                    id="attendees"
                    name="attendees"
                    onChange={handleChanges}
                />

                <div>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            </Form>
        </Page>
    )
}

const mapStateToProps = state => {
    return {
        classes: state.classes
    }
}
export default connect(mapStateToProps, { editIClass })(EditClass);