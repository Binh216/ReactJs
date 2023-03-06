import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

import './Login.scss';
// import { FormattedMessage } from 'react-intl';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false
        }
    }

    handleOnChangeUname = (event) => {
        this.setState({
            username : event.target.value
        })
    }

    handleOnChangePassword = (event) => {
        this.setState({
            password : event.target.value
        })
    }

    handleLogin = () => {
        console.log(this.state.username);
    }

    handleViewPassword =() => {
        this.setState({
            isShowPassword : !this.state.isShowPassword
        })
    }
   
    render() {

        return (
            <div className='login__background'>
                <div className='login__container'>
                    <div className='login__content row'>
                        <div className='col-12 text-center login__content-login'>Login</div>
                        <div className='col-12 form-group'>
                            <label>Username:</label>
                            <input type='text' 
                            className='form-control' 
                            placeholder='Enter your Username' 
                            value={this.state.username}
                            onChange={(event) => this.handleOnChangeUname(event)}
                            />
                        </div>
                        <div className='col-12 form-group'>
                            <label>Password:</label>
                            <div className='login__password-eye'>
                                <input type={this.state.isShowPassword ? 'password' : 'text'} className='form-control' placeholder='Enter your Password' 
                                value={this.state.password}
                                onChange={(event) => this.handleOnChangePassword(event)}
                                />
                                <span onClick={() => this.handleViewPassword()}>
                                    <i class={ this.state.isShowPassword ? "fas fa-eye" : 'far fa-eye-slash'}></i>
                                </span>
                            </div>
                            
                        </div>
                        <div className='col-12'>
                            <button className='btn-login' onClick={() => this.handleLogin()}>Login</button>
                        </div>
                        
                        <div className='col-12'>
                            <span>Forgot your password?</span>
                        </div>
                        <div className='col-12 text-center'>
                            <span className='login__text-other' >Or login with</span>
                        </div>
                        <div className='col-12 login__icon'>
                            <i class="fab fa-google-plus-g google"></i><i class="fab fa-facebook-f facebook"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        lang: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
