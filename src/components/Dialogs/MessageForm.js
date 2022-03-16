import React from 'react';
import {Formik, Field} from 'formik';
import * as yup from 'yup';

const validationsSchema = yup.object().shape({
    textarea: yup.string().max(50 ,'Длина не более 50 символов'),
})

const MessageForm = (props) => {

    return (
        <div>
            <Formik initialValues={{
                textarea: ''
            }}
                    validateOnBlur
                    onSubmit = {(values, {resetForm}) => {
                        props.onSubmit(values.textarea)
                        resetForm({})
                    }}
                    validationSchema={validationsSchema}
            >
                {({
                      errors, handleBlur,
                      handleSubmit, touched,
                  }) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <Field
                                    type={'textarea'}
                                    name={'textarea'}
                                    onBlur={handleBlur}
                                    autoComplete={'off'}
                                    autoFocus={true}
                                />
                            </div>
                            {touched.textarea && errors.textarea
                                && <p>{errors.textarea}</p>}
                            <button
                                type={'submit'}
                            >Send
                            </button>
                        </form>
                    )
                }}
            </Formik>
        </div>
    )
}

export default MessageForm;
