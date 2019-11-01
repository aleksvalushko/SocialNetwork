import React from 'react';

export const required = value => {
    return value ? undefined : 'Required Field';
};

export const maxLength = max => value => {
  return value && value.length > max && `Max length is ${max} symbols`;
};

export const maxLength30 = maxLength(30);
export const maxLength50 = maxLength(50);
export const maxLength20 = maxLength(20);