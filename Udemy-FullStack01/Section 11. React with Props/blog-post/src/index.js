import React from 'react';
import ReactDOM from 'react-dom';
import profile1 from './images/dog01.webp';
import profile2 from './images/cat01.webp';
import profile3 from './images/men01.webp';
import SingleComment from './SingleComment';
import UserCard from './UserCard'

const currentTime = new Date().getTime()
const App = () => {
     return(
        <div className='ui comments'>
            <UserCard>
                <SingleComment 
                    name='Alex' 
                    date= { currentTime }
                    text="It's amazing 1!" 
                    picture={profile1}
                    />
            </UserCard>
            <UserCard>
                <SingleComment 
                    name='Sara' 
                    date= { currentTime }
                    text="It's amazing 2!"
                    picture={profile2}
                    />
            </UserCard>
            <UserCard>
                <SingleComment 
                    name='Jack' 
                    date= { currentTime }
                    text="It's amazing 3!"
                    picture={profile3}
                    />
            </UserCard>
            
            
            
        </div>
     )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)