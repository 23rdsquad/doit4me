import React from 'react'

import SignInModal from './SignInModal.jsx'

const ModalConductor = props => {
    switch (props.currentModal) {
        case 'SIGN_IN':
            return <SignInModal { ...props} />
        default:
            return null;
    }
}

export default ModalConductor