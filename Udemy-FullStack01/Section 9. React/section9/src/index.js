import React from 'react';
import ReactDOM from 'react-dom'; 


function getButtonText() {
    return 'Hi There!'
}

const getButtons2 = () => {  // doesn't work
    return 'Hi There2!'
}

const App = () => {

    return( 
        <div>
        <label htmlFor="name" className="label">enter email</label>
        <input id="name" type="text"/>
        <button style={{backgroundColor: 'red', color: 'white'}}>
            { getButtonText() }
            </button>
      </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)