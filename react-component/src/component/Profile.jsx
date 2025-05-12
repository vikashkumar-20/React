import React from 'react'
import { ProfileCard } from './ProfileCard';

const Profile = () => {
    return (
        <>
            <ProfileCard
                name="Vikash"
                age={20}
                greeting={
                    <div>
                        <strong>Hi, Vikash have a wonderful day.</strong>
                    </div>
                }
            >
                <p>Hobbies: Reading, Hiking</p>
                <button>Contact</button>
            </ProfileCard>
        </>
    );
}

export default Profile;
