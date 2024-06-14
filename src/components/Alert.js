import React from 'react'

function Alert(props) {
  return (
    <div style={{height: '50px'}}>

       { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show m-1`} role="alert">
            <strong>{props.alert.message}</strong>
        </div>}
    </div>
  )
}

export default Alert
