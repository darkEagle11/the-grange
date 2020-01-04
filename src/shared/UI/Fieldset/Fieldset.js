import React from 'react';
import Input from '../Input/Input';
import classes from './styles/Fieldset.css';

const fieldset = props => {
    return (
        <fieldset className={[classes.Fieldset, props.fieldsetStyle].join(' ')}>
            <legend>{props.legend}</legend>
            <div className={props.inputGroupClass}>
                {props.inputs.map((input, index) => {
                    return <Input
                        key={input.id}
                        elementType={input.config.elementType}
                        elementConfig={input.config.elementConfig}
                        value={input.config.value}
                        label={input.config.label}
                        changed={props.inputChange}
                        inputId={input.id}
                        fieldsetId={props.fieldsetId} />
                })}
            </div>

            {/* {formElementsArray.map(formElement => {
                    return <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        touched={formElement.config.touched}
                        shouldValidate={formElement.config.validation}
                        changed={(event) => this.inputChangedHandler(event.target.value, formElement.id)}
                        errorMsg={formElement.config.errorMsg} />
                })}
                <button className={classes.SignupButton} disabled={!this.state.formIsValid}>Submit</button> */}
        </fieldset>
    )
}

export default fieldset;