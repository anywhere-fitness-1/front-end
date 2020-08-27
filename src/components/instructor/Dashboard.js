import React, { useEffect } from 'react';
import ClassList from './ClassList';
import PassList from './PassList';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { getIClasses } from '../../actions/index';
import "../styles/dashboard.css";
import "../../App.css";

const Dashboard = props => {

    useEffect(() => {
        props.getIClasses();
        // props.fetchCategory();
    }, [props.getIClasses, props])
    // useEffect(() => {
    //     props.fetchCategory();
    // }, [ props.fetchCategory, props])

    console.log(props);

    return (
<body id="instructor-page">
        <div className="container instructor">
            
            <h1>Instructor Dashboard</h1>
        
            <section className="schedule container">
                <h2 className="I-Header">Your Classes</h2>
                <div className="I-box">
                    <div className="I-box-child">
                        <div className="I-creation">
                            <Link to='/instructor/createclass/'><button>Create class</button></Link>
                            <h3>Schedule</h3>
                            <Link className="create_class_spacer" to='/instructor/createclass/'><button>Create class</button></Link>
                        </div>
                        
                        <div className="I-lists">
                            <ClassList />
                        </div>
                    </div>
<br/><br/>
                    <div className="I-box-child">
                        <div className="I-creation">
                            <Link to='/instructor/createpass/'><button>Create Card</button></Link>
                            <br/><br/>
                            <h3>Punch Cards</h3>
                            <Link className="create_pass_spacer" to='/instructor/createpass/'><button>Create pass</button></Link>
                        </div>
                        
                        <div className="I-pass-box">
                            <PassList classNameName="I-pass" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </body>
    )
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps, { getIClasses })(Dashboard);