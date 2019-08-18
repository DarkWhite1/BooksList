import React from 'react';
import { auth } from 'firebase';

const UserInfo = ({profile}) => {
    console.log(auth.uid)
    return (
        <div>
        {profile && profile.map(profile => {
            return(
                <div>
                <h1 >Name : {profile.firstName} {profile.lastName}</h1>
                <h1>Age : {profile.age}</h1>
                </div>
            )
        })}
        </div>

    )
}

export default UserInfo;