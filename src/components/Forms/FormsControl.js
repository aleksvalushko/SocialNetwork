import React from 'react';
import mod from './FormsControl.module.sass';
import {Field} from "redux-form";

export const Textarea = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;
    return (
        <div>
            <textarea {...input} {...props} className={hasError ? mod.formControl : ''}/>
            {hasError && <span className={mod.error}>{error}</span>}
        </div>
    )
};

export const Input = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;
    return (
        <div>
            <input {...input} {...props} className={hasError ? mod.formControl : ''}/>
            {hasError && <span className={mod.error}>{error}</span>}
        </div>
    )
};

export const createFieldForm = (placeholder, name, component, validate, props = {}, text = '') => {
    return <div>
        <Field placeholder={placeholder} name={name} component={component}
               validate={validate} {...props}/>{text}
    </div>
};