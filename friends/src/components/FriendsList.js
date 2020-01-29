//display full list of friends
//private route page
import React, {useState, useEffect} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import AddFriend from './AddFriend';
import { Link, Switch, Route} from 'react-router-dom';


const FriendsList = props =>{
// console.log('friends props', props);
const [friends, setFriends] = useState([]);

useEffect(()=>{
axiosWithAuth()
.get('http://localhost:5000/api/friends')
.then(res =>{
    // console.log(res);
    setFriends(res.data)
})
.catch(err =>{
    console.log('error on friends list', err);
});

}, [])
return(
    <section>

<h2>Friends List</h2>


<Link to={`/addfriend`}> 
<h5>Add A Bud</h5> </Link>
 <Route exact path={`/addfriend`}> </Route>
   
    <div className = "list-cont">

{friends.map(friend =>(
    <div className = "friends-map">
{/* key={friend.id} */}
<h4>Name: </h4><p>{friend.name} </p>
<h5> Age: </h5><p> {friend.age} </p>
<h5> Email:</h5><p> {friend.email}</p>
</div>
))}
    </div>
    </section>
)


}

export default FriendsList;