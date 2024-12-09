import React from "react";
export interface InputFieldsProps {
label?: string;
}
export default function InputFields({ label, id, ...rest}: InputFieldsProps) {
    return(
        <div>{label && <label htmlFor={id} className="mb-2 text-base color-grey-900">{label}</label>}</div>
    )
}