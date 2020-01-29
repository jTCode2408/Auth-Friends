//display full list of friends
//private route page
import React, {useState, useEffect} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsList = props =>{
console.log('friends props', props);
const [friends, setFriends] = useState([]);

useEffect(()=>{
axiosWithAuth()
.get('http://localhost:5000/api/friends')
.then(res =>{
    console.log(res);
    setFriends(res.data)
})
.catch(err =>{
    console.log('error on friends list', err);
});

}, [])
return(

    <div>
<h2>Friends List</h2>
{friends.map(friend =>(
    <div>
{friend.id}
Name:{friend.name}
Age:{friend.age}
Email:{friend.email}
</div>
))}
    </div>
)


}

export default FriendsList;