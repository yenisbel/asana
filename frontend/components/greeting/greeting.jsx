import React from "react";
import { Link } from "react-router-dom";

const Greeting = (props) => {
    const currentUser = props.currentUser;
    if (currentUser){
        return (
            <div>
                <h2>Welcome, { currentUser.full_name }!</h2>
                <button type="submit" onClick={props.logout}>Logout</button>
            </div>
        )
    } else{
        return (
            <div>
              <Link to="/signup">Sign Up</Link> 
              <br/>
              <Link to="/login">Log In</Link>
            </div>
        )
    };
        
}

export default Greeting