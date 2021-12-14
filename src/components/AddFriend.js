import React from 'react';
import axios from 'axios';

class AddFriend extends React.Component {
    state = {
        friend: {
            name: '',
            email: ''
        }
    }

    submitFriend = (event) => {
        event.preventDefault();
        const token = localStorage.getItem("token");

        axios.post("http://localhost:9000/api/friends", this.state.friend, {
            headers: {
                authorization: token
            }
        })
            .then(res => {
                console.log(res);
            })
            .catch(err => console.error(err));
    }

    handleChange = (event) => {
        this.setState({
            friend: {
                ...this.state.friend,
                [event.target.name]: event.target.value
            }
        })
    }

    render() {
        return(
            <div>
                <h1>ADD FRIEND</h1>
                <form onSubmit={this.submitFriend} >
                    <label>FRIEND NAME
                        <input 
                            type="text"
                            name="name"
                            placeholder="Friend Username"
                            value={this.state.friend.name}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>FRIEND EMAIL
                        <input 
                            type="email"
                            name="email"
                            placeholder="Friend Email"
                            value={this.state.friend.email}
                            onChange={this.handleChange}
                        />
                    </label>
                    <button>SUBMIT</button>
                </form>
            </div>
        )
    }
}

export default AddFriend;