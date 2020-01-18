import React from 'react'
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field  placeholder={'Login'} name={'email'} type="text" component={'input'}/>
                </div>
                <div>
                    <Field  placeholder={'Password'} name={'password'} type="text" component={'input'}/>
                </div>
                <div>
                    <Field  type={'checkbox'} name={'rememberMe'}  component={'input'}/>
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxFrom  = reduxForm({
    form: 'login'
})(LoginForm)

export default LoginReduxFrom;