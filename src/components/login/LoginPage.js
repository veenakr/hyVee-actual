import React from 'react';
import './LoginPage.css';
import MainNav from '../nav/MainNav';

class LoginPage extends React.Component {

    heading = "EMPLOYEE LOGIN";
    state = {
        err: ""
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.props);
        this.props.history.push('/dashboard');
    }

    render() {
        return(
            <div>
                <MainNav />
            <div className="main-login-card">
                <div className="card">
                    <div className="inner-card">
                        <h1>{this.heading}</h1>
                        <form id="form-item" onSubmit={this.handleFormSubmit}>
                            <div className="input-field">
                                <input type="text" placeholder="UserName" name="username" onChange={this.handleChange} />
                                <input type="password" placeholder="Password" name="password" onChange={this.handleChange} />
                            </div>
                            <button className="width-percent-50" type="login" name="submit">LOGIN</button>
                        </form>
                            <div className="forgot-info">
                                <span><a href="#">Forgot Username?</a></span>
                                <span><a href="#">Forgot Password</a></span>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        )
    }
}

export default LoginPage;