import React, { Component } from 'react';
//import { injectStripe } from 'react-stripe-elements';
import CardSection from './../StripeCheckout/CardSection';

export class register extends Component {
    state = {
        firstName: '',
        lastName: '',
        gender: '',
        dateOfBirth: '',
        rating: '',
        event: '',
        price: '',
        totalPrice: '',
        showPrice: false,
        mixedPartner: {
            firstName: '',
            lastName: '',
            rating: ''
        },
        showMixedPartnerSection: false,
        doublesPartner: {
            firstName: '',
            lastName: '',
            rating: ''
        },
        showDoublesPartnerSection: false,
        showBothPartnerSections: false
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

    onRatingChange = (event) => {
        let newVal;
        switch (event.target.id) {
            case "checkRating30":
                newVal = "3.0";
                alert("3.0");
                break;
            case "checkRating35":
                newVal = "3.5";
                alert("3.5")
                break;
            case "checkRating40":
                newVal = "4.0";
                alert("4.0");
                break;
            case "checkRating45+":
                newVal = "4.5+";
                alert("4.5+");
                break;

            default:
                break;
        }
        this.setState({ rating: newVal });
    }

    onEventChange = (event) => {
        let newVal, newPrice, doubles, mixed;
        switch (event.target.id) {
            case "eventDoubles":
                newVal = "Straight Doubles";
                newPrice = 55;
                doubles = true;
                mixed = false;
                break;
            case "eventMixed":
                newVal = "Mixed Doubles";
                newPrice = 55;
                doubles = false;
                mixed = true;
                break;
            case "eventBoth":
                newVal = "Both";
                newPrice = 65;
                doubles = true;
                mixed = true;
                break;
            default:
                break;
        }
        this.setState({ event: newVal, price: newPrice, totalPrice: newPrice, showPrice: true, showDoublesPartnerSection: doubles, showMixedPartnerSection: mixed });
    }

    onCrawfishGuestChange = (event) => {
        let newTotalPrice = this.state.price + (event.target.value * 20); 
        this.setState({ totalPrice: newTotalPrice });
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <div className="text-center">
                            <h3>Player Registration</h3>
                            <small className="text-muted">We'll never share your information with anyone else.</small>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6 text-center">
                                <label for="firstName">First Name</label>
                                <input type="text" className="form-control text-center" id="firstName" placeholder="First Name" required />
                            </div>
                            <div className="form-group col-md-6 text-center">
                                <label for="lastName">Last Name</label>
                                <input type="text" className="form-control text-center" id="lastName" placeholder="Last Name" required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-4 text-center">
                                <label for="birthYear">Birth Year</label>
                                <input type="text" className="form-control text-center" id="birthYear" placeholder="Year of Birth" required />
                            </div>
                            <div className="form-group col-md-4 text-center">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
                            </div>
                            <div className="form-group col-md-4 text-center">
                                <label for="phone">Phone Number</label>
                                <input type="text" className="form-control text-center" id="phone" placeholder="Phone Number" required />
                            </div>
                        </div>
                        <br />
                        <div className="form-check form-check-inline text-center">
                            <label>Skill Rating</label> <br />
                            <input type="radio" className="form-check-input" id="checkRating30" name="checkRating" onChange={this.onRatingChange} required /> &nbsp;
                            <label className="form-check-label" for="checkRating30">3.0</label> &nbsp;&nbsp;&nbsp;
                            <input type="radio" className="form-check-input" id="checkRating35" name="checkRating" onChange={this.onRatingChange} required /> &nbsp;
                            <label className="form-check-label" for="checkRating35">3.5</label> &nbsp;&nbsp;&nbsp;
                            <input type="radio" className="form-check-input" id="checkRating40" name="checkRating" onChange={this.onRatingChange} required /> &nbsp;
                            <label className="form-check-label" for="checkRating40">4.0</label> &nbsp;&nbsp;&nbsp;
                            <input type="radio" className="form-check-input" id="checkRating45+" name="checkRating" onChange={this.onRatingChange} required /> &nbsp;
                            <label className="form-check-label" for="checkRating45">4.5+</label>
                            <br />
                            <small className="text-muted">A self-rating may be used | Please rate honestly</small>
                            <br />
                            <small className="text-muted">If unsure, ask someone</small>
                        </div>
                        <br />
                        <div className="form-check form-check-inline text-center">
                            <label>Select Events</label> <br />
                            <input type="radio" className="form-check-input" id="eventDoubles" name="eventsPlaying" onChange={this.onEventChange} required /> &nbsp;
                            <label className="form-check-label " for="eventDoubles">Men / Women Doubles</label> &nbsp;&nbsp;&nbsp;
                            <input type="radio" className="form-check-input" id="eventMixed" name="eventsPlaying" onChange={this.onEventChange} required /> &nbsp;
                            <label className="form-check-label" for="eventMixed">Mixed Doubles</label> &nbsp;&nbsp;&nbsp;
                            <input type="radio" className="form-check-input" id="eventBoth" name="eventsPlaying" onChange={this.onEventChange} required /> &nbsp;
                            <label className="form-check-label" for="eventBoth">Both</label>
                        </div>
                    </div>
                    {
                        !this.state.showMixedPartnerSection ? null :
                            <div>
                                <div className="text-center">
                                    <h3>Mixed Partner Info</h3>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-4 text-center">
                                        <label for="mixedFirstName">First Name</label>
                                        <input type="text" className="form-control text-center" id="mixedFirstName" placeholder="First Name" />
                                    </div>
                                    <div className="form-group col-md-4 text-center">
                                        <label for="mixedLastName">Last Name</label>
                                        <input type="text" className="form-control text-center" id="mixedLastName" placeholder="Last Name" />
                                    </div>
                                    <div className="form-group col-md-4 text-center">
                                        <label for="phone">Phone Number</label>
                                        <input type="text" className="form-control text-center" id="mixedPhone" placeholder="Phone Number" />
                                    </div>
                                </div>
                            </div>
                    }
                    {
                        !this.state.showDoublesPartnerSection ? null :
                            <div>
                                <div className="text-center">
                                    <h3>Doubles Partner Info</h3>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-4 text-center">
                                        <label for="doublesFirstName">First Name</label>
                                        <input type="text" className="form-control text-center" id="doublesFirstName" placeholder="First Name" />
                                    </div>
                                    <div className="form-group col-md-4 text-center">
                                        <label for="doublesLastName">Last Name</label>
                                        <input type="text" className="form-control text-center" id="doublesLastName" placeholder="Last Name" />
                                    </div>
                                    <div className="form-group col-md-4 text-center">
                                        <label for="phone">Phone Number</label>
                                        <input type="text" className="form-control text-center" id="doublesPhone" placeholder="Phone Number" />
                                    </div>
                                </div>
                            </div>
                    }
                    <div>
                        <input type="text" className="form-control text-center" id="crawfishGuests" placeholder="How many guests will you have?" onChange={this.onCrawfishGuestChange} />
                    </div>
                    {
                        !this.state.showPrice ? null :
                            <div className="text-center text-primary">
                                <h3>
                                    <strong>
                                        Total: ${this.state.totalPrice}
                                    </strong>
                                </h3>
                                {/* <div className="col-md-12 text-center">
                                    <CardSection totalCost={this.state.totalTeamCost} />
                                </div> */}
                            </div>
                    }
                    <div className="form-group col-md-12 text-center">
                        <button className="btn btn-lg btn-primary" type="submit">Accept & Pay</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default register;  