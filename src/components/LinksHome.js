import React from "react";
// import { ImageDiv } from "./styles/ImageDiv";
import { SignupContainer } from "./styles/SignupContainer";
import { FormDiv } from "./styles/FormDiv";
import LoginButton from "./styles/LoginButton";

const LinksHome = () => { 
    return (
        <div id="links-page">
        <SignupContainer>
            {/* <ImageDiv></ImageDiv> */}
            <FormDiv>
                <br/><br/><br/><br/><br/><br/><br/><br/>
                <h1>Welcome to Anywhere Fitness!</h1>
                <LoginButton text="Sign up as a client" url="/signup/client"></LoginButton>
                <LoginButton text="Log in as a client" url="/login/client"></LoginButton>
                <LoginButton text="Sign up as an instructor" url="/signup/instructor"></LoginButton>
                <LoginButton text="Log in as an instructor" url="/login/instructor"></LoginButton>
            </FormDiv>
        </SignupContainer>
</div>
    )
}

export default LinksHome;