import React from 'react';
import validation from '../../helpers/validation'; 

class InputText extends React.Component {
    state = {
        wrapperClass: 'form-group text-center',
        validationMessage: '',
        isValid: true
    }

    updateValidationMessage = (message) => {
        this.setState({ wrapperClass: 'form-group has-error', validationMessage: message, isValid: false });
    }

    checkValidation = (event) => {
        const value = event.target.value;

        let valid = true;
        if (this.props.validate.required) {
            if (valid && !validation.requiredIsValid(value)) {
                this.updateValidationMessage('REQUIRED');
                valid = false;
            }
        }
        if (this.props.validate.minLength) {
            const minLength = this.props.validate.minLength;
            if (valid && !validation.minLengthIsValid(value, minLength)) {
                this.updateValidationMessage(`The value entered must have at least ${minLength} characters`);
                valid = false;
            }
        }
        if (this.props.validate.maxLength) {
            const maxLength = this.props.validate.maxLength;
            if (valid && !validation.maxLengthIsValid(value, maxLength)) {
                this.updateValidationMessage(`The value entered must cannot have more than ${maxLength} characters`);
                valid = false;
            }
        }
        if (valid) {
            this.setState({ wrapperClass: "form-group text-center", validationMessage: "" })
        }
    }

    handleChange = (event) => {
        this.checkValidation(event);
        this.props.onChange(event.target.value);
    }

    handleBlur = (event) => {
        this.checkValidation(event);
    }

    render() {
        const { name, placeholder, value } = this.props;

        return (
            <div className={this.state.wrapperClass}>
                <div className="field">
                    <input type="text"
                        name={name}
                        className="form-control text-center input-sm"
                        placeholder={placeholder}
                        ref={name}
                        value={value}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                    />
                    <div className="input text-danger text-center">{this.state.validationMessage}</div>
                </div>
            </div>
        );
    }
}

export default InputText;