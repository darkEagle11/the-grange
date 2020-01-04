import React from 'react';
import classes from './styles/Input.css';

const input = props => {
    let inputElement = null;
    // let validationError = null;
    let inputClasses = [classes.Input, props.inputStyle]

    // if (props.touched && props.invalid && props.shouldValidate) {
    //     inputClasses.push(classes.Invalid)
    //     validationError = <p className={classes.ValidationError}>{props.errorMsg}</p>
    // }
    const inputChanged = (e) => props.changed(e.target.value, props.fieldsetId, props.inputId)
    const baseInput = <input className={inputClasses.join(' ')} value={props.value} {...props.elementConfig} onChange={inputChanged} />;

    switch (props.elementType) {
        case ("input"):
            inputElement = baseInput;
            break;
        case ('textarea'):
            inputClasses.push(classes.Textarea)
            inputElement = <textarea className={inputClasses.join(' ')} value={props.value} {...props.elementConfig} onChange={inputChanged} />;
            break;
        case ('select'):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={inputChanged}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = baseInput;

    }

    return (
        <div className={classes.InputField}>
            {inputElement}
            <label>{props.label}</label>
            {/* {validationError} */}
        </div>

    )
}

export default input;