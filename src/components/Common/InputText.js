import React from 'react';
//import validation from '../../helpers/validation'; 

class InputText extends React.Component {
    state = {
        wrapperClass: 'form-group text-center',
        validationMessage: '',
        isValid: true
    }

    handleChange = (event) => {
        //this.checkValidation(event);
        this.props.onChange(event.target.value);
    }

    handleBlur = (event) => {
        //this.checkValidation(event);
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
                    {/* <div className="input text-danger text-center">{this.state.validationMessage}</div> */}
                </div>
            </div>
        );
    }
}

export default InputText;