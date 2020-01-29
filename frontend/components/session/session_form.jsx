import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(inputV){
        return e => this.setState({
            [inputV]: e.currentTarget.value
        });
    }
    
    render () { 
        const link = this.props.formType === "signup" ? <Link to="/login">login</Link> : <Link to="/signup">signup</Link>
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <h2>Welcome to Asana Clone</h2>
                    <h2>Please {this.props.formType} or {link}</h2> 
                    <div>
                        <label>Email
                            <input type="text" value={this.state.email} onChange={this.update("email")} className="login-input"/>
                        </label>
                        
                        <label>Password
                            <input type="password" value={this.state.password}  onChange={this.update("password")} className="login-input"/>
                        </label>
                    </div>
                    <input className="session-submit" type="submit" value={this.props.formType} />
                </form>
            </div>
        );
    }
}


export default SessionForm;