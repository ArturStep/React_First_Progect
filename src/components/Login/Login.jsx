import React from 'react';
import {Formik, Field, Form} from 'formik';
import * as yup from 'yup'
import s from './Login.module.css'

const validationsSchema = yup.object().shape({
    name: yup.string().required('Обязательно'),
    secondName: yup.string().required('Обязательно'),
    password: yup.string().required('Обязательно'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Обязательно'),
    email: yup.string().email('Введите верный email').required('Обязательно'),
    confirmEmail: yup.string().email('Введите верный email').oneOf([yup.ref('email')], 'Email не совпадают').required('Обязательно'),
})

const Login = (props) => {

    return (
        <div className={s.form}>
            <Formik initialValues={{
                name: '',
                secondName: '',
                password: '',
                confirmPassword: '',
                email: '',
                confirmEmail: ''
            }}
                    validateOnBlur
                    onSubmit={(values) => {console.log(values)}}
                    validationSchema={validationsSchema}
            >
                {({ values, errors, touched,
                      isValid, dirty}) => {
                    return (
                        <Form>
                            <p>
                                <label htmlFor={'name'}>Имя</label><br/>
                                <Field
                                    type={'text'}
                                    name={'name'}
                                    className={s.input}
                                />
                            </p>
                            {touched.name && errors.name
                                && <p className={s.error}>{errors.name}</p>}
                            <p>
                                <label htmlFor={'secondName'}>Фамилия</label><br/>
                                <Field
                                    type={'text'}
                                    name={'secondName'}
                                    className={s.input}
                                />
                            </p>
                            {touched.secondName && errors.secondName
                                && <p className={s.error}>{errors.secondName}</p>}
                            <p>
                                <label htmlFor={'password'}>Пароль</label><br/>
                                <Field
                                    type={'password'}
                                    name={'password'}
                                    className={s.input}
                                />
                            </p>
                            {touched.password && errors.password
                                && <p className={s.error}>{errors.password}</p>}
                            <p>
                                <label htmlFor={'confirmPassword'}>Подтверждение пароля</label><br/>
                                <Field
                                    type={'password'}
                                    name='confirmPassword'
                                    className={s.input}
                                />
                            </p>
                            {touched.confirmPassword && errors.confirmPassword
                                && <p className={s.error}>{errors.confirmPassword}</p>}
                            <p>
                                <label htmlFor={'email'}>Email</label><br/>
                                <Field
                                    type={'email'}
                                    name={'email'}
                                    className={s.input}
                                />
                            </p>
                            {touched.email && errors.email && <p className={s.error}>{errors.email}</p>}
                            <p>
                                <label htmlFor={'confirmEmail'}>Подтверждение email</label><br/>
                                <Field
                                    type={'email'}
                                    name={'confirmEmail'}
                                    className={s.input}
                                />
                            </p>
                            {touched.confirmEmail && errors.confirmEmail
                                && <p className={s.error}>{errors.confirmEmail}</p>}
                            <button
                                disabled={dirty && !isValid}
                                type={'submit'}
                            >Отправить</button>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

export default Login;