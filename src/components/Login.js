import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    login = (event) => {
        event.preventDefault();
        axios.post("http://localhost:9000/api/login", this.state.credentials)
            .then(res => {
                localStorage.setItem("token", res.data.token);
                this.props.history.push("/friends");
            })
            .catch(err => console.error(err));
    }

    handleChange = (event) => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        })
    }

    render() {
        return(
            <StyledLogin>
                <h1>LOGIN</h1>
                <form onSubmit={this.login} className="loginPanels" >
                    <label><p>USERNAME</p>
                        <input 
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={this.state.credentials.username}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label><p>PASSWORD</p>
                        <input 
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.credentials.password}
                            onChange={this.handleChange}
                        />
                    </label>
                    <button>SUBMIT</button>
                </form>
            </StyledLogin>
        )
    }
}

export default Login;

const StyledLogin = styled.div`
    form {
        display: flex;
        flex-direction: column;
        width: 55%;
        margin: auto;
        text-align: left;
    }
    input {
        background-color: black;
        color: white;
    }
`