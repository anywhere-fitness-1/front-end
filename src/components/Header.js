import React from 'react';
import { NavLink, Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import './styles/Header.css';
import { removeUser } from '../actions/index';
// import gym from '../images/gym.png';


const Header = props => {

    let history = useHistory();

    const handleLogout = e => {
        e.preventDefault()
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('roleId');
        props.removeUser();
        // alert('Logged out successfully.');
        history.push('/');
    }

    return (
        <header>
            <nav>
                <div className="logo1">
                    {/* <Link to="/">Anywhere Fitness</Link> */}
                    {/* <img src={gym} alt="dumbbell"></img> <img src={gym} alt="dumbbell"></img> <img src={gym} alt="dumbbell"></img> <img src={gym} alt="dumbbell"></img> <img src={gym} alt="dumbbell"></img>
                    <img src={gym} alt="dumbbell"></img> <img src={gym} alt="dumbbell"></img> <img src={gym} alt="dumbbell"></img> <img src={gym} alt="dumbbell"></img> <img src={gym} alt="dumbbell"></img> */}
                </div>
                <ul>
                    {/* Only for those not signed in */}
                    {!sessionStorage.getItem('token') &&
                        <>
                            <li><NavLink to="/signup/client">Client Sign Up</NavLink></li>
                            <li><NavLink to="/login/client">Client Log In</NavLink></li>

                            <li><NavLink to="/signup/instructor">Instructor Sign Up</NavLink></li>
                            
                            <li><NavLink to="/login/instructor">Instructor Log In</NavLink></li>
                           
                        </>
                    }

                    {/* Only for instructors */}
                    {sessionStorage.getItem('token') && (sessionStorage.getItem('roleId') === '1') &&
                        <>
                            <li><NavLink to="/instructor">Dashboard</NavLink></li>
                            <li><NavLink to="/instructor/createpass">Create Card</NavLink></li>
                            <li><NavLink to="/instructor/createclass">Create Class</NavLink></li>
                            
                        </>
                    }
                    {/*Only for Clients */}
                    {sessionStorage.getItem('token') && (sessionStorage.getItem('roleId') === '2') &&
                        <>
                            <li><NavLink to="/client/">Dashboard</NavLink></li>
                            <li><NavLink to="/client/schedule">Scheduled Classes</NavLink></li>
                        </>
                    }

                    {/* Only for those signed in */}
                    {sessionStorage.getItem('token') &&
                        <div className="logout">
                            <li><Link onClick={handleLogout}>Logout</Link></li>
                        </div>
                    }

                </ul>
            </nav>
        </header >
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect((mapStateToProps), { removeUser })(Header);