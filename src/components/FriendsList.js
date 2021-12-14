import axios from 'axios';
import React from 'react';

import Friend from './Friend';

class FriendsList extends React.Component {
    state = {
        friends: []
    }

    componentDidMount() {
        const token = localStorage.getItem("token");

        axios.get("http://localhost:9000/api/friends", {
            headers: {
                authorization: token
            }
        })
            .then(res => {
                this.setState({
                    friends: res.data
                });
            })
            .catch(err => console.error(err));
    }

    render() {
        return(
            <div>
                <h1>FRIENDS LIST</h1>
                <div id="listOfFriends" >
                    {this.state.friends.map(friend => (
                        <Friend friend={friend} key={friend.id} />
                    ))}
                </div>
            </div>
        )
    }
}

export default FriendsList;