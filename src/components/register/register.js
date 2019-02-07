import React, { Component } from 'react'

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

    onFirstNameChange = (event) => {
        this.setState({ firstName: event.target.value });
    }

    render() {
        return (
            <div>
                <h3 className="text-center">Player Info</h3>
                <div className="field">
                    <input type="text"
                        name={this.state.firstName}
                        className="form-control text-center input-sm"
                        placeholder="First Name"
                        ref={this.state.firstName}
                        value={this.state.firstName}
                        onChange={this.onFirstNameChange}
                    />
                </div>
            </div>
        )
    }
}

export default register
