import React from "react";
import styled from "styled-components";

const StyledClassCard = styled.div`
    min-width: 450px;
    background-color: #687864;
    color: #f7f9fb;
    box-sizing: border-box;
    margin: 2.5rem;
    padding: 1rem;
    border: 2px solid #5085A5;
    border-radius: 25px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    @media (max-width: 800px) {
        min-width: 50vw;
    }
`;

const FlexboxRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const FlexboxCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;


const ClassName = styled.h2`
    font-size: 2rem;
    margin: 0 auto;
    text-align: left;
`;

const InstructorAndLocation = styled.p`
    font-size: 1rem;
    font-style: oblique;
    text-align: left;
`;

const IntensityText = styled.span`
    font-weight: bold;
`;

const IntensityDescription = styled.p`
    font-size: 1.25rem;
    color: #f7f9fb;
    line-height: 1.5rem;
    margin-left: 10%;
`;

const StyledHr = styled.hr`
    width: 100%;
    border: 2px solid #BDBDBD;
`;

const ClassTime = styled.p`
    font-size: 1.25rem;
    font-weight: bold;
    color: #f7f9fb;
    margin-top: 0.5rem;
`;

const Attendees = styled.p`
    font-size: 1rem;
    color: #f7f9fb;
    
`;




const ClassCard = function ({ item, index, scheduleClass, unscheduleClass, setUnScheduledClass, setFilteredClass }) {
    console.log("Look HERE","item", item, "index", index, scheduleClass )

    // let [hour, minutes] = item.startTime.split(":");
    // hour = parseInt(hour);
    // minutes = parseInt(minutes);

    // let endTimeObj = new Date();
    // endTimeObj.setHours(hour);
    // endTimeObj.setMinutes(minutes + duration);

    // endTimeObj.getMinutes()

    // let endTimeString = endTimeObj.getHours() + ":" + (parseInt(endTimeObj.getMinutes()) < 10 ? "0" : "") + endTimeObj.getMinutes();

    return (
        <StyledClassCard key={index}>

            <FlexboxRow>
                <div>
                    <ClassName>{item.workoutName}</ClassName>
                    <InstructorAndLocation> at {item.location}</InstructorAndLocation>
                </div>
                
                    <IntensityDescription>
                        <IntensityText>
                            {item.intensityLevel}
                        </IntensityText>
                        <br />Intensity<br />{item.type}
                    </IntensityDescription>
                
            </FlexboxRow>

            <StyledHr />

            <FlexboxRow>
                <FlexboxCol>
                    <ClassTime>{item.startTime}<br />({item.durationMins} min)</ClassTime>
                </FlexboxCol>

                <FlexboxCol>
                    <Attendees>Attending: {item.attendees} / {item.maxAttendees}</Attendees>
                    {scheduleClass ? (<button
                        onClick={() => {
                        scheduleClass(item);
                        setUnScheduledClass(filteredClass =>
                            filteredClass.filter((item, i) => i !== index)
                        );
                        setFilteredClass(filteredClass =>
                            filteredClass.filter((item, i) => i !== index)
                        );
                        }}
                    >
                        Schedule Class
                    </button>): (<button
                        onClick={() => {
                        unscheduleClass(item);
                        setUnScheduledClass(filteredClass =>
                            filteredClass.filter((item, i) => i !== index)
                        );
                        setFilteredClass(filteredClass =>
                            filteredClass.filter((item, i) => i !== index)
                        );
                        }}
                    >
                        Unschedule Class
                    </button>)}
                </FlexboxCol>

                
            </FlexboxRow>

        </StyledClassCard>

    )
}

export default ClassCard;