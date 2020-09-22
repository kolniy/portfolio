import React from 'react'
import { Alert } from "reactstrap";

const Alertpop = ({ message, alertType }) => {
    return (
        <Alert color={alertType}>
        <strong>{alertType}</strong> {message}
      </Alert>
    )
}

export default Alertpop