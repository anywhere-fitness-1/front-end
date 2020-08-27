import React from "react";
import styled from "styled-components";
// import userIcon from "../../images/user.png"

const UserCard = ({ pass, deletePass, handleOpen, setItem}) => {
    const UserCardContainer = styled.div`
        display: flex;
        flex-direction: column;
        margin: 5% 1rem 0 1rem;
    `;
    const StyledUserCard = styled.div`
    padding-left: 2rem;
    width: 350px;
    background-color: #3E92CC;
    border-radius: 5px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
    display: flex;
    transform: rotate(-1deg);
    `;
    const ClassName = styled.h2`
        margin: 0.5rem auto;
    `;
    const FlexColumn = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
    `;
    const FlexRow = styled.div`
        display: flex;
        justify-content: center;
    `;
    const ClassesRemainingText = styled.span`
        font-size: 1rem;
    `;
    const ClassesRemainingNumber = styled.span`
        font-size: 1rem;
        font-weight: bold;
        margin-right: 1rem;
    `;
    const ClientName = styled.p`
        font-size: 1rem;
        font-style: oblique;
    `;
    const CirclePunches = styled.div`
        width: 200px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: space-between;
    `;
    const UnpunchedCircle = styled.div`
        width: 30px;
        height: 30px;
        margin: 2px;
        border-radius: 100%;
        background-color: #D8315B;
    `;
    const PunchedCircle = styled.div`
        width: 25px;
        height: 25px;
        border-radius: 100%;
        background-color: white;
        box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.5);
        position: relative;
    `;
    const EditDeleteButtons = styled.div`
        margin: 1rem auto;
        width: 50%;
        display: flex;
        justify-content: space-around;
    `;

    // make an array of 10 elements.
    function makeRemainingClassIcons(classesRemaining)
    {
        // error handling
        if (classesRemaining < 0) { classesRemaining = 0 }
        if (classesRemaining > 10) { classesRemaining = 10 }

        return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ].map((item, index) => {

            // create punched-out circles to show used classes
            if (10 - index > classesRemaining)
                {

                    return <UnpunchedCircle key={index}>
                    <PunchedCircle style={{left: `1px`, top: `1px`}}></PunchedCircle>
                    </UnpunchedCircle>
                }
            
            // create unpunched circles for unused classes
            return <UnpunchedCircle key={index}></UnpunchedCircle>
        });

    }

    return (
        <UserCardContainer>
            <StyledUserCard>
                <FlexColumn>
                    {/* <img src={userIcon} alt={"generic user icon"} /> */}
                    <ClientName>{pass.client}</ClientName>
                </FlexColumn>
                <FlexColumn>
                    <FlexRow>
                        <FlexColumn>
                            <ClassName>{pass.workoutName}</ClassName>
                            <ClassesRemainingText><ClassesRemainingNumber>{pass.classesRemaining}</ClassesRemainingNumber> class{pass.classesRemaining === 1 ? "" : "es"} remaining</ClassesRemainingText>
                        </FlexColumn>
                    </FlexRow>
                    <FlexRow>
                        <CirclePunches>
                            {makeRemainingClassIcons(pass.classesRemaining)}
                        </CirclePunches>
                    </FlexRow>
                </FlexColumn>
            </StyledUserCard>
            <EditDeleteButtons>
                <button
                    onClick={e => {
                    e.preventDefault();
                    deletePass(pass);
                    console.log("DELETE", pass);
                    }}
                >
                    delete
                </button>
                <button
                    onClick={e => {
                    e.preventDefault();
                    handleOpen();
                    setItem(pass);

                    console.log("EDIT", pass);
                    }}
                >
                    edit
                </button>
            </EditDeleteButtons>
        </UserCardContainer>
    )

}

export default UserCard;