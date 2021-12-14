import React from 'react';

class Friend extends React.Component {
    render() {
        const { friend } = this.props;

        return(
            <div>
                <p>- {friend.name} - {friend.email} </p>
            </div>
        )
    }
}

export default Friend;