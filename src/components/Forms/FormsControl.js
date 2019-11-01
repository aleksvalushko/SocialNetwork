import React from 'react';
import mod from './FormsControl.module.sass';

export const Textarea = ({input, meta, ...props}) =>{
    const hasError = meta.touched && meta.error;
    return(
        <div>
            <textarea {...input} {...props} className={hasError ? mod.formControl : ''} />
            { hasError&& <span className={mod.error}>{meta.error}</span>}
        </div>
    )
};

export const Input = ({input, meta, ...props}) =>{
    const hasError = meta.touched && meta.error;
    return(
        <div>
            <input {...input} {...props} className={hasError ? mod.formControl : ''} />
            { hasError&& <span className={mod.error}>{meta.error}</span>}
        </div>
    )
};