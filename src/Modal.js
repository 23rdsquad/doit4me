import React from 'react'
import ReactDOM from 'react-dom'

const JSX_MODAL = (
    <div className = "ui dimmer modals visible active">
        <div className = "ui standard modal visible active">
        {/* Modal ui features go here */}
        </div>
    </div>
)

function Modal(props) {
    return ReactDOM.createPortal(JSX_MODAL, document.querySelector("#modal"))
}

export default Modal