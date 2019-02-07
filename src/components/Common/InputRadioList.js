import React from 'react';

const inputRadioList = (props) => {
    this.handleChange = (event) => { 
        props.onChange(event.target.value);
    }

    return (
        props.values.map(value => {
            return <label key={props.id} className="radio-inline">
                <input name={props.name} type="radio" value={value} onChange={this.handleChange} /> {value}
            </label>
        })
    );
}

export default inputRadioList;