import React from 'react'

import ModalWrapper from './ModalWrapper.jsx'

const SignIn = props => {
    const signIn = provider => {
        props.hideModal()
        props.signIn(provider)
    }

    return(
        <ModalWrapper
            {...props}
            title="Sign in"
            width={400}
            showOk={false}
        >
        <p>Sign In</p>
        <h3>Email</h3>
        <input />
        <h3>Password</h3>
        <input />
        </ModalWrapper>
    )
}

export default SignIn