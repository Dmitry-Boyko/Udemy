import React from 'react';

const SingleComment = (props) => {
    <div className='comment'>
                <a href="/" className='avatar'>
                    <image src={props.picture} alt="profile picture" />
                </a>
                <div className='content'>
                    <a href="/" className='autor'>
                        { props.name }
                    </a>
                    <div className="metadata">
                        <span className="date">
                            props.date
                        </span>
                    </div>
                    <div className='text'>
                        props.text 
                    </div>
                </div>
            </div>
}

export default SingleComment;