// import React from 'react';
// import validation from '../../helpers/validation';

// class InputEmail extends React.Component {
//     state = {
//         wrapperClass: 'form-group',
//         validationMessage: '',
//         isValid: true
//     }

//     updateValidationMessage = (message) => {
//         this.setState({ wrapperClass: 'form-group has-error', validationMessage: message, isValid: false });
//     }

//     checkValidation = (event) => {
//         const value = event.target.value;

//         let valid = true;
//         if (!validation.requiredIsValid(value)) {
//             this.updateValidationMessage('REQUIRED');
//             valid = false;
//         }
//         if (valid && !validation.emailFormatIsValid(value)) {
//             this.updateValidationMessage('Not a valid email address');
//             valid = false;
//         }
//         if (valid) {
//             this.setState({ wrapperClass: "form-group text-center", validationMessage: "" })
//         }
//     }

//     handleChange = (event) => {
//         this.checkValidation(event);
//         this.props.onChange(event.target.value);
//     }

//     handleBlur = (event) => {
//         this.checkValidation(event);
//     }

//     render() {
//         const { name, placeholder, value } = this.props;

//         return (
//             <div className={this.state.wrapperClass}>
//                 <div className="field">
//                     <input type="text"
//                         name={name}
//                         className="form-control text-center input-sm"
//                         placeholder={placeholder}
//                         ref={name}
//                         value={value}
//                         onChange={this.handleChange}
//                         onBlur={this.handleBlur}
//                     />
//                     <div className="input text-danger">{this.state.validationMessage}</div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default InputEmail;