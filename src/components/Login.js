import React from 'react';
import axios from 'axios';

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
                this.props.history.push("/friendsList");
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
            <div>
                <h1>LOGIN</h1>
                <form onSubmit={this.login} >
                    <label>USERNAME
                        <input 
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={this.state.credentials.username}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>PASSWORD
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
            </div>
        )
    }
}

export default Login;