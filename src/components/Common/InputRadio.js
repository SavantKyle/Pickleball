import React from 'react';
import InputRadioList from './InputRadioList';

class InputRadio extends React.Component {
    handleChange = (value) => {
        this.props.onChange(value);
    }

    render() {
        const { label, values, name } = this.props;
        const labelDisplay = {label} ? <div><label className="control-label" htmlFor={name}>{label}</label></div> : null;

        return (
            <div className={"from-group text-center"}>
                {labelDisplay}
                <div className="text-center">
                    <InputRadioList name={name} values={values} onChange={this.handleChange} />
                </div>
            </div>
        );
    }
}

export default InputRadio;