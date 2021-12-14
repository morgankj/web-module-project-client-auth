import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

class Logout extends React.Component {
    render() {
        const { push } = useHistory();

        useEffect(() => {
            axios.post("http://localhost:9000/api/logout", {}, {
                headers: {
                    authorization: localStorage.getItem("token")
                }
            })
            .then(() => {
                localStorage.removeItem("token");
                push("/login");
            })
        }, []);

        return(
            <div></div>
        )
    }
}

export default Logout;