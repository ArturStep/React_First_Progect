import React from 'react';
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import s from './Login.module.css';

const validationsSchema = yup.object().shape({
    email: yup.string().email('Введите верный email').required('Обязательно'),
    password: yup.string().required('Обязательно')
})

const Login = (props) => {

    return (
        <div className={s.form}>
            <h1>Login</h1>
            <Formik initialValues={{
                email: '',
                password: '',
                rememberMe: false
            }}
                    validateOnBlur
                    onSubmit = {(values, {setFieldError}, setSubmit) => {
                props.login(values.email, values.password, values.rememberMe, setFieldError)
            }}
                    validationSchema={validationsSchema}
            >
                {({
                      values, errors,
                      handleBlur, handleSubmit,
                      handleChange, touched,
                      isValid, dirty
                  }) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor={'email'}>Email</label><br/>
                                <Field
                                    type={'email'}
                                    name={'email'}
                                    className={s.input}
                                    onBlur={handleBlur}
                                />
                            </div>
                            {touched.email && errors.email
                                && <p className={s.error}>{errors.email}</p>}
                            <div>
                                <label htmlFor={'password'}>Password</label><br/>
                                <Field
                                    type={'password'}
                                    name={'password'}
                                    className={s.input}
                                    onBlur={handleBlur}
                                />
                            </div>
                            {touched.password && errors.password
                                && <p className={s.error}>{errors.password}</p>}
                            <div><br/>
                                <Field
                                    type={'checkbox'}
                                    name={'rememberMe'}
                                />
                                <label  htmlFor={'rememberMe'}>remember me</label>
                            </div>
                            <button
                                disabled={dirty && !isValid}
                                type={'submit'}
                            >Sign Up
                            </button>
                        </form>
                    )
                }}
            </Formik>
        </div>
    )
}

export default Login;