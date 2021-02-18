import React from 'react'

const commonStyle = {
    borderRadius: '5px',
    padding: '10px',
    width: '50%',
    margin: '10px 5px'
}

const addSuccessStyle = {
    ...commonStyle,
    color: 'green',
    backgroundColor: '#cecece',
    border: '1px solid green'
}

const addFailStyle = {
    ...commonStyle,
    color: 'red',
    backgroundColor: '#cecece',
    border: '1px solid red'
}

const Notification = ({message}) => {
    
    const {type, data} = message
    
    if (!type) {
        return null
    }
    
    return (
        <div style={type === 'success' ? addSuccessStyle : addFailStyle} className="add-success">
            {type === 'success' ? `added ${data}` : `information of ${data} has been removed` }
        </div>
    )

}

export default Notification