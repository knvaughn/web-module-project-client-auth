import React, {useEffect, useState} from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import Friend from '../Friend/Friend';
import './FriendsList.css';

const initialFriend = {
    name: '',
    age: '',
    email: ''
}

const FriendsList = () => {
    const [friends, setFriends] = useState([]);
    const [friend, setFriend] = useState(initialFriend);

    useEffect(() => {
        getFriends();
    }, []);

    const getFriends = () => {
        const axios = axiosWithAuth();
        axios.get("http://localhost:5000/api/friends")
        .then(response => {
            console.log(response)
            setFriends(response.data);
        })
    }

    const addFriend = () => {
        const axios = axiosWithAuth();
        axios.post("http://localhost:5000/api/friends", friend)
    }

    const handleChange = (event) => {
        setFriend({
            ...friend,
            [event.target.name]: event.target.value
        });
    }

    return (
        <div className="FriendsList">
            <div>
                <h1>Add Friend</h1>
                <form onSubmit={addFriend}>
                    <label>
                        Name
                        <input 
                            type="text"
                            name="name"
                            value={friend.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Age
                        <input 
                            type="number"
                            name="age"
                            value={friend.age}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Email
                        <input 
                            type="email"
                            name="email"
                            value={friend.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <button>Submit</button>
                </form>
            </div>
            <div>
                {
                    friends &&
                    friends.map((friend, index) => {
                        return <Friend friend={friend} key={index} />
                    })
                }
            </div>
        </div>
    );
}
 
export default FriendsList;