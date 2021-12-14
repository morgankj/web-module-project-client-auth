import React from 'react';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    login = () => {}

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