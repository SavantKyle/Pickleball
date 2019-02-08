import React, { Component } from 'react'
import { InputText } from '../Common/InputComponents';

export class register extends Component {
    state = {
        firstName: '',
        lastName: '',
        gender: '',
        dateOfBirth: '',
        rating: '',
        mixedPartner: {
            firstName: '',
            lastName: '',
            rating: ''
        },
        straightsPartner: {
            firstName: '',
            lastName: '',
            rating: ''
        }
    }

    onFirstNameChange = (val) => {
        this.setState({ firstName: val });
    }

    onLastNameChange = (val) => {
        this.setState({ lastName: val });
    }

    onGenderChange = (val) => {
        this.setState({ gender: val });
    }

    onRatingChange = (val) => {
        this.setState({ rating: val });
    }

    render() {
        return (
            <div>
                <h3 className="text-center">Player Info</h3>
                <InputText name="firstName" value={this.props.firstName} placeholder="First Name" onChange={this.onFirstNameChange} validate={{ required: true }} />
                <InputText name="lastName" value={this.props.lastName} placeholder="Last Name" onChange={this.onLastNameChange} validate={{ required: true }} />
                {/* <InputRadioList name={name} values={values} onChange={this.handleChange} /> */}
                {/* <InputRadio name="gender" label="Gender" values={["Male", "Female"]} onChange={this.onGenderChange} /> */}
                {/* <InputRadio name="rating" label="Rating (Current)" values={["4.5+", "4.0", "3.5", "3.0"]} onChange={this.onRatingChange} /> */}
            </div>
        )
    }
}

export default register
