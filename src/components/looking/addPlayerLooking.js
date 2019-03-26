import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

export class addPlayerLooking extends Component {
    state = {
        firstName: '',
        lastName: '',
        gender: '',
        age: 0,
        email: '',
        phone: '',
        ratingMixed: '',
        ratingDoubles: '',
        event: '',
        eventDoubles: false,
        eventMixed: false,
        disableButton: false, 
        success: false
    };

    onFirstNameChange = (event) => {
        this.setState({ firstName: event.target.value });
    }

    onLastNameChange = (event) => {
        this.setState({ lastName: event.target.value });
    }

    onAgeChange = (event) => {
        this.setState({ age: event.target.value });
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value });
    }

    tenDigitPhoneNumberMask = (value) => {
        const length = value.length;
        //handle masking for 10-digit phone number (999)999-9999
        if (length === 1 && value !== "(") {
            value = "(" + value;
        }
        if (length === 5 && value.charAt(4) !== ")") {
            value = value.substring(0, 4) + ")" + value.charAt(4);
        }
        if (length === 9 && value.charAt(9) !== "-") {
            value = value.substring(0, 8) + "-" + value.charAt(8);
        }
        if (length > 13) {
            value = value.substring(0, 13);
        }

        return value;
    }

    phoneNumberInputMasking = (event) => {
        let value = event.target.value;
        const length = value.length;
        //check if last keyed value is a number; if not remove last keyed value and return.
        if (isNaN(value.charAt(length - 1))) {
            event.target.value = value.substring(0, length - 1);
            return;
        }

        event.target.value = this.tenDigitPhoneNumberMask(value);
        return value;
    }

    onPhoneChange = (event) => {
        let val = this.phoneNumberInputMasking(event);
        this.setState({ phone: val });
    }

    onGenderChange = (event) => {
        let gender;
        switch (event.target.id) {
            case "genderMale":
                gender = "Male";
                break;
            case "genderFemale":
                gender = "Female";
                break;
            default:
                break;
        }
        this.setState({ gender: gender });
    }

    onMixedRatingChange = (event) => {
        let newVal;
        switch (event.target.id) {
            case "checkMixedRating25":
                newVal = "2.5";
                break;
            case "checkMixedRating30":
                newVal = "3.0";
                break;
            case "checkMixedRating35":
                newVal = "3.5";
                break;
            case "checkMixedRating40":
                newVal = "4.0";
                break;
            case "checkMixedRating45+":
                newVal = "4.5+";
                break;

            default:
                break;
        }
        this.setState({ ratingMixed: newVal });
    }

    onDoublesRatingChange = (event) => {
        let newVal;
        switch (event.target.id) {
            case "checkDoublesRating25":
                newVal = "2.5";
                break;
            case "checkDoublesRating30":
                newVal = "3.0";
                break;
            case "checkDoublesRating35":
                newVal = "3.5";
                break;
            case "checkDoublesRating40":
                newVal = "4.0";
                break;
            case "checkDoublesRating45+":
                newVal = "4.5+";
                break;

            default:
                break;
        }
        this.setState({ ratingDoubles: newVal });
    }

    onEventChange = (event) => {
        switch (event.target.id) {
            case "eventDoubles":
                this.setState((prevState, props) => {
                    if (prevState.event === "Mixed") {
                        return {
                            eventDoubles: !this.state.eventDoubles,
                            event: "Both"
                        }
                    } else if (prevState.event === "Both") {
                        return {
                            eventDoubles: !this.state.eventDoubles,
                            event: "Mixed"
                        }
                    } else if (prevState.event === "") {
                        return {
                            eventDoubles: !this.state.eventDoubles,
                            event: "Doubles"
                        }
                    } else if (prevState.event === "Doubles") {
                        return {
                            eventDoubles: !this.state.eventDoubles,
                            event: ""
                        }
                    }
                });
                break;
            case "eventMixed":
                this.setState((prevState, props) => {
                    if (prevState.event === "Mixed") {
                        return {
                            eventMixed: !this.state.eventMixed,
                            event: ""
                        }
                    } else if (prevState.event === "Both") {
                        return {
                            eventMixed: !this.state.eventMixed,
                            event: "Doubles"
                        }
                    } else if (prevState.event === "") {
                        return {
                            eventMixed: !this.state.eventMixed,
                            event: "Mixed"
                        }
                    } else if (prevState.event === "Doubles") {
                        return {
                            eventDoubles: !this.state.eventDoubles,
                            event: "Both"
                        }
                    }
                });
                break;
            default:
                break;
        }
    }

    onSubmitClick = (event) => {
        // We don't want to let default form submission happen here, which would refresh the page.
        event.preventDefault();


        let payload = {
            FirstName: this.state.firstName,
            LastName: this.state.lastName,
            Gender: this.state.gender,
            Age: this.state.age,
            DoublesRating: this.state.ratingDoubles,
            MixedRating: this.state.ratingMixed,
            EventNeedingPartner: this.state.event,
            Email: this.state.email,
            Phone: this.state.phone
        }

        console.log(payload);
        // axios.post('api/playerlooking/addplayer', payload)
        axios.post('webapi/api/playerlooking/AddPlayer', payload)
            .then(response =>
                axios.get('webapi/api/playerlooking/getplayers')
                // axios.get('api/playerlooking/getplayers')
                    .then(response => {
                        this.setState({
                            players: response.data,
                            firstName: '',
                            lastName: '',
                            gender: '',
                            age: '',
                            ratingDoubles: '',
                            ratingMixed: '',
                            event: '',
                            email: '',
                            phone: '', 
                            disableButton: true, 
                            success: true
                        });
                    })
            )
            .catch(error => {
                console.log(error)
                alert(`${error}. Something went wrong and the system was unable to save you to the list. If this continues to occur please notify Kyle at kyle.savant@batonrougepickleball.com or text at 225-223-8809.`)
            });
    };

    render() {
        let redirect = null;
        if (this.state.success) {
            redirect = <Redirect to="/looking" />
        }

        return (
            <div>
                {redirect}
                <form onSubmit={this.onSubmitClick}>
                    <div>
                        <div className="form-row">
                            <div className="form-group col-md-4 text-center">
                                <label htmlFor="birthYear">Age</label>
                                <input type="text" className="form-control text-center" id="age" placeholder="Age" onChange={this.onAgeChange} required />
                            </div>
                            <div className="form-group col-md-4 text-center">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" className="form-control text-center" id="firstName" placeholder="First Name" onChange={this.onFirstNameChange} required />
                            </div>
                            <div className="form-group col-md-4 text-center">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" className="form-control text-center" id="lastName" placeholder="Last Name" onChange={this.onLastNameChange} required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6 text-center">
                                <label htmlFor="inputEmail">Email address</label>
                                <input type="email" className="form-control text-center" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.onEmailChange} required />
                            </div>
                            <div className="form-group col-md-6 text-center">
                                <label htmlFor="phone">Cell Phone Number</label>
                                <input type="text" className="form-control text-center" id="phone" placeholder="Phone Number" onChange={this.onPhoneChange} required />
                            </div>
                        </div>
                        <div>
                            <div className="form-check col-md-3 form-check-inline text-center">
                                <label>Select Events Needing a Partner For</label> <br />
                                <input type="checkbox" className="form-check-input" id="eventDoubles" name="eventsPlaying" onChange={this.onEventChange} /> &nbsp;
                                <label className="form-check-label " htmlFor="eventDoubles">Doubles</label> &nbsp;&nbsp;&nbsp;
                                <input type="checkbox" className="form-check-input" id="eventMixed" name="eventsPlaying" onChange={this.onEventChange} /> &nbsp;
                                <label className="form-check-label" htmlFor="eventMixed">Mixed Doubles</label>
                            </div>
                            <div className="form-check col-md-3 form-check-inline text-center">
                                <label>Gender</label> <br />
                                <input type="radio" className="form-check-input" id="genderMale" name="gender" onChange={this.onGenderChange} required /> &nbsp;
                                <label className="form-check-label " htmlFor="genderMale">Male</label> &nbsp;&nbsp;&nbsp;
                                <input type="radio" className="form-check-input" id="genderFemale" name="gender" onChange={this.onGenderChange} required /> &nbsp;
                                <label className="form-check-label" htmlFor="genderFemale">Female</label>
                            </div>
                            <div className="form-group col-md-3 form-check form-check-inline text-center center-block">
                                <label>Mixed Doubles Skill Rating</label> <br />
                                <input type="radio" className="form-check-input" id="checkMixedRating25" name="checkMixedRating" onChange={this.onMixedRatingChange} onKeyPress={this.onKeyPress} required /> &nbsp;
                                <label className="form-check-label" htmlFor="checkMixedRating25">2.5</label> &nbsp;&nbsp;&nbsp;
                                <input type="radio" className="form-check-input" id="checkMixedRating30" name="checkMixedRating" onChange={this.onMixedRatingChange} onKeyPress={this.onKeyPress} required /> &nbsp;
                                <label className="form-check-label" htmlFor="checkMixedRating30">3.0</label> &nbsp;&nbsp;&nbsp;
                                <input type="radio" className="form-check-input" id="checkMixedRating35" name="checkMixedRating" onChange={this.onMixedRatingChange} onKeyPress={this.onKeyPress} required /> &nbsp;
                                <label className="form-check-label" htmlFor="checkMixedRating35">3.5</label> &nbsp;&nbsp;&nbsp;
                                <input type="radio" className="form-check-input" id="checkMixedRating40" name="checkMixedRating" onChange={this.onMixedRatingChange} onKeyPress={this.onKeyPress} required /> &nbsp;
                                <label className="form-check-label" htmlFor="checkMixedRating40">4.0</label> &nbsp;&nbsp;&nbsp;
                                <input type="radio" className="form-check-input" id="checkMixedRating45+" name="checkMixedRating" onChange={this.onMixedRatingChange} onKeyPress={this.onKeyPress} required /> &nbsp;
                                <label className="form-check-label" htmlFor="checkMixedRating45">4.5+</label>
                            </div>
                            <div className="form-group col-md-3 form-check form-check-inline text-center center-block">
                                <label>Doubles Skill Rating</label> <br />
                                <input type="radio" className="form-check-input" id="checkDoublesRating25" name="checkDoublesRating" onChange={this.onDoublesRatingChange} onKeyPress={this.onKeyPress} required /> &nbsp;
                                <label className="form-check-label" htmlFor="checkDoublesRating25">2.5</label> &nbsp;&nbsp;&nbsp;
                                <input type="radio" className="form-check-input" id="checkDoublesRating30" name="checkDoublesRating" onChange={this.onDoublesRatingChange} onKeyPress={this.onKeyPress} required /> &nbsp;
                                <label className="form-check-label" htmlFor="checkDoublesRating30">3.0</label> &nbsp;&nbsp;&nbsp;
                                <input type="radio" className="form-check-input" id="checkDoublesRating35" name="checkDoublesRating" onChange={this.onDoublesRatingChange} onKeyPress={this.onKeyPress} required /> &nbsp;
                                <label className="form-check-label" htmlFor="checkDoublesRating35">3.5</label> &nbsp;&nbsp;&nbsp;
                                <input type="radio" className="form-check-input" id="checkDoublesRating40" name="checkDoublesRating" onChange={this.onDoublesRatingChange} onKeyPress={this.onKeyPress} required /> &nbsp;
                                <label className="form-check-label" htmlFor="checkDoublesRating40">4.0</label> &nbsp;&nbsp;&nbsp;
                                <input type="radio" className="form-check-input" id="checkDoublesRating45+" name="checkDoublesRating" onChange={this.onDoublesRatingChange} onKeyPress={this.onKeyPress} required /> &nbsp;
                                <label className="form-check-label" htmlFor="checkDoublesRating45">4.5+</label>
                            </div>
                        </div>
                        <div className="form-group col-md-12 text-center">
                            <button disabled={this.state.disableButton} className="btn btn-lg btn-primary" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div >
        )
    }
}

export default addPlayerLooking;  