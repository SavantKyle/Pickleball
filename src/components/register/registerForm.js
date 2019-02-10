import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import axios from 'axios';

export class registerForm extends Component {
    state = {
        firstName: '',
        lastName: '',
        gender: '',
        birthYear: '',
        email: '',
        phone: '',
        ratingMixed: '',
        ratingDoubles: '',
        event: '',
        entryPrice: 0,
        crawfishGuestPrice: 0,
        totalPrice: 0,
        showPrice: false,
        mixedFirstName: '',
        mixedLastName: '',
        mixedPhone: '',
        showMixedSections: false,
        doublesFirstName: '',
        doublesLastName: '',
        doublesPhone: '',
        showDoublesSections: false,
        disablePaymentButton: false, 
        success: 'false'
    }

    onFirstNameChange = (event) => {
        this.setState({ firstName: event.target.value });
    }

    onLastNameChange = (event) => {
        this.setState({ lastName: event.target.value });
    }

    onBirthYearChange = (event) => {
        this.setState({ birthYear: event.target.value });
    }

    onGenderChange = (event) => {
        this.setState({ gender: event.target.value });
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value });
    }

    onPhoneChange = (event) => {
        this.setState({ phone: event.target.value });
    }

    onMixedFirstNameChange = (val) => {
        this.setState({ mixedFirstName: val });
    }

    onMixedLastNameChange = (event) => {
        this.setState({ mixedLastName: event.target.value });
    }

    onMixedPhoneChange = (event) => {
        this.setState({ mixedPhone: event.target.value });
    }

    onDoublesFirstNameChange = (event) => {
        this.setState({ doublesFirstName: event.target.value });
    }

    onDoublesLastNameChange = (event) => {
        this.setState({ doublesLastName: event.target.value });
    }

    onDoublesPhoneChange = (event) => {
        this.setState({ doublesPhone: event.target.value });
    }

    onMixedRatingChange = (event) => {
        let newVal;
        switch (event.target.id) {
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
        let newVal, newPrice, doubles, mixed;
        let oneEventPrice = new Date() >= new Date('4/1/2019') ? 65 : 55;
        let twoEventPrice = new Date() >= new Date('4/1/2019') ? 75 : 65;
        switch (event.target.id) {
            case "eventDoubles":
                newVal = "Straight Doubles";
                newPrice = oneEventPrice;
                doubles = true;
                mixed = false;
                break;
            case "eventMixed":
                newVal = "Mixed Doubles";
                newPrice = oneEventPrice;
                doubles = false;
                mixed = true;
                break;
            case "eventBoth":
                newVal = "Both";
                newPrice = twoEventPrice;
                doubles = true;
                mixed = true;
                break;
            default:
                break;
        }
        this.setState({ event: newVal, entryPrice: newPrice, totalPrice: newPrice + this.state.crawfishGuestPrice, showPrice: true, showDoublesSections: doubles, showMixedSections: mixed });
    }

    onCrawfishGuestChange = (event) => {
        let crawfishPrice = event.target.value * 20;
        let newTotalPrice = this.state.entryPrice + crawfishPrice;
        this.setState({ totalPrice: newTotalPrice, crawfishGuestPrice: crawfishPrice });
    }

    onKeyPress(event) {
        if (event.which === 13 /* Enter */) {
            event.preventDefault();
        }
    }

    onSubmitClick = (event) => {
        // We don't want to let default form submission happen here, which would refresh the page.
        event.preventDefault();
        this.setState({ disablePaymentButton: true });

        this.props.stripe.createToken().then(({ token }) => {
            console.log('Received Stripe token:', token);
            let playerInfo = {...this.state};

            const payload = {
                playerInfo,
                stripePaymentRequest: {
                    amount: this.state.totalPrice * 100,
                    description: `${this.state.firstName} ${this.state.lastName} - (${this.state.gender} Doubles:${this.state.ratingDoubles} Mixed:${this.state.ratingMixed})`,
                    receiptEmail: this.state.email,
                    tokenId: token.id
                }
            };

            console.log(payload);
            axios.post('https://batonrougepickleball.com/api/register/register', payload)
                .then(response =>
                    this.setState({ success: true, disabled: false })
                )
                .catch(error => {
                    this.setState({ disabled: false });
                    console.log(error)
                    alert(`${error}. Something went wrong with your payment. If this continues to occur please notify Kyle at kyle.savant@outlook.com or text at 225-223-8809.`)
                });
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitClick}>
                    <div>
                        <div className="form-row">
                            <div className="form-group col-md-6 text-center">
                                <label for="firstName">First Name</label>
                                <input type="text" className="form-control text-center" id="firstName" placeholder="First Name" onChange={this.onFirstNameChange} required />
                            </div>
                            <div className="form-group col-md-6 text-center">
                                <label for="lastName">Last Name</label>
                                <input type="text" className="form-control text-center" id="lastName" placeholder="Last Name" onChange={this.onLastNameChange} onKeyPress={this.onKeyPress} required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-4 text-center">
                                <label for="birthYear">Birth Year</label>
                                <input type="text" className="form-control text-center" id="birthYear" placeholder="Year of Birth" onChange={this.onBirthYearChange} onKeyPress={this.onKeyPress} required />
                            </div>
                            <div className="form-group col-md-4 text-center">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.onEmailChange} onKeyPress={this.onKeyPress} required />
                            </div>
                            <div className="form-group col-md-4 text-center">
                                <label for="phone">Cell Phone Number</label>
                                <input type="text" className="form-control text-center" id="phone" placeholder="Phone Number" onChange={this.onPhoneChange} onKeyPress={this.onKeyPress} required />
                            </div>
                        </div>
                        <br />
                        <div className="form-check form-check-inline text-center">
                            <label>Select Events</label> <br />
                            <input type="radio" className="form-check-input" id="eventDoubles" name="eventsPlaying" onChange={this.onEventChange} onKeyPress={this.onKeyPress} required /> &nbsp;
                            <label className="form-check-label " for="eventDoubles">Men / Women Doubles</label> &nbsp;&nbsp;&nbsp;
                            <input type="radio" className="form-check-input" id="eventMixed" name="eventsPlaying" onChange={this.onEventChange} onKeyPress={this.onKeyPress} required /> &nbsp;
                            <label className="form-check-label" for="eventMixed">Mixed Doubles</label> &nbsp;&nbsp;&nbsp;
                            <input type="radio" className="form-check-input" id="eventBoth" name="eventsPlaying" onChange={this.onEventChange} onKeyPress={this.onKeyPress} required /> &nbsp;
                            <label className="form-check-label" for="eventBoth">Both</label>
                        </div>
                    </div>
                    <div className="row form-row">
                        {
                            !this.state.showMixedSections ? null :
                                <div className="form-group col form-check form-check-inline text-center center-block">
                                    <label>Mixed Skill Rating</label> <br />
                                    <input type="radio" className="form-check-input" id="checkMixedRating30" name="checkMixedRating" onChange={this.onMixedRatingChange} onKeyPress={this.onKeyPress} required /> &nbsp;
                                        <label className="form-check-label" for="checkMixedRating30">3.0</label> &nbsp;&nbsp;&nbsp;
                                        <input type="radio" className="form-check-input" id="checkMixedRating35" name="checkMixedRating" onChange={this.onMixedRatingChange} onKeyPress={this.onKeyPress} required /> &nbsp;
                                        <label className="form-check-label" for="checkMixedRating35">3.5</label> &nbsp;&nbsp;&nbsp;
                                        <input type="radio" className="form-check-input" id="checkMixedRating40" name="checkMixedRating" onChange={this.onMixedRatingChange} onKeyPress={this.onKeyPress} required /> &nbsp;
                                        <label className="form-check-label" for="checkMixedRating40">4.0</label> &nbsp;&nbsp;&nbsp;
                                        <input type="radio" className="form-check-input" id="checkMixedRating45+" name="checkMixedRating" onChange={this.onMixedRatingChange} onKeyPress={this.onKeyPress} required /> &nbsp;
                                        <label className="form-check-label" for="checkMixedRating45">4.5+</label>
                                    <br />
                                    <small className="text-muted">A self-rating may be used | Please rate honestly</small>
                                    <br />
                                    <small className="text-muted">If unsure, ask someone</small>
                                </div>
                        }
                        {
                            !this.state.showDoublesSections ? null :
                                <div className="form-group col form-check form-check-inline text-center center-block">
                                    <label>Men / Women Doubles Skill Rating</label> <br />
                                    <input type="radio" className="form-check-input" id="checkDoublesRating30" name="checkDoublesRating" onChange={this.onDoublesRatingChange} onKeyPress={this.onKeyPress} required /> &nbsp;
                                        <label className="form-check-label" for="checkDoublesRating30">3.0</label> &nbsp;&nbsp;&nbsp;
                                        <input type="radio" className="form-check-input" id="checkDoublesRating35" name="checkDoublesRating" onChange={this.onDoublesRatingChange} onKeyPress={this.onKeyPress} required /> &nbsp;
                                        <label className="form-check-label" for="checkDoublesRating35">3.5</label> &nbsp;&nbsp;&nbsp;
                                        <input type="radio" className="form-check-input" id="checkDoublesRating40" name="checkDoublesRating" onChange={this.onDoublesRatingChange} onKeyPress={this.onKeyPress} required /> &nbsp;
                                        <label className="form-check-label" for="checkDoublesRating40">4.0</label> &nbsp;&nbsp;&nbsp;
                                        <input type="radio" className="form-check-input" id="checkDoublesRating45+" name="checkDoublesRating" onChange={this.onDoublesRatingChange} onKeyPress={this.onKeyPress} required /> &nbsp;
                                        <label className="form-check-label" for="checkDoublesRating45">4.5+</label>
                                    <br />
                                    <small className="text-muted">A self-rating may be used | Please rate honestly</small>
                                    <br />
                                    <small className="text-muted">If unsure, ask someone</small>
                                </div>
                        }
                    </div>
                    {
                        !this.state.showMixedSections ? null :
                            <div>
                                <div className="text-center">
                                    <h3>Mixed Partner Info</h3>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-4 text-center">
                                        <label for="mixedFirstName">First Name</label>
                                        <input type="text" className="form-control text-center" id="mixedFirstName" onChange={this.onMixedFirstNameChange} onKeyPress={this.onKeyPress} placeholder="First Name" />
                                    </div>
                                    <div className="form-group col-md-4 text-center">
                                        <label for="mixedLastName">Last Name</label>
                                        <input type="text" className="form-control text-center" id="mixedLastName" onChange={this.onMixedLastNameChange} onKeyPress={this.onKeyPress} placeholder="Last Name" />
                                    </div>
                                    <div className="form-group col-md-4 text-center">
                                        <label for="phone">Phone Number</label>
                                        <input type="text" className="form-control text-center" id="mixedPhone" onChange={this.onMixedPhoneChange} onKeyPress={this.onKeyPress} placeholder="Phone Number" />
                                    </div>
                                </div>
                            </div>
                    }
                    {
                        !this.state.showDoublesSections ? null :
                            <div>
                                <div className="text-center">
                                    <h3>Doubles Partner Info</h3>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-4 text-center">
                                        <label for="doublesFirstName">First Name</label>
                                        <input type="text" className="form-control text-center" id="doublesFirstName" onChange={this.onDoublesFirstNameChange} onKeyPress={this.onKeyPress} placeholder="First Name" />
                                    </div>
                                    <div className="form-group col-md-4 text-center">
                                        <label for="doublesLastName">Last Name</label>
                                        <input type="text" className="form-control text-center" id="doublesLastName" onChange={this.onDoublesLastNameChange} onKeyPress={this.onKeyPress} placeholder="Last Name" />
                                    </div>
                                    <div className="form-group col-md-4 text-center">
                                        <label for="phone">Phone Number</label>
                                        <input type="text" className="form-control text-center" id="doublesPhone" onChange={this.onDoublesPhoneChange} onKeyPress={this.onKeyPress} placeholder="Phone Number" />
                                    </div>
                                </div>
                            </div>
                    }
                    {
                        !this.state.showPrice ? null :
                            <div className="text-center">
                                <h3>Crawfish Guests ($20 Per)</h3>

                                <input type="number" className="form-control text-center" id="crawfishGuests" placeholder="How many guests will you have?" onChange={this.onCrawfishGuestChange} onKeyPress={this.onKeyPress} />
                                <small className="text-muted">Need to know so we have enough food and drinks for non-players</small>
                            </div>
                    }
                    {
                        !this.state.showPrice ? null :
                            <div className="text-center text-primary">
                                <h3>
                                    <strong>
                                        Total: ${this.state.totalPrice}
                                    </strong>
                                </h3>
                            </div>
                    }
                    {
                        !this.state.showPrice ? null :
                            <div className="form-group text-center">
                                <label for="cardElement" className="text-muted">Credit or Debit Card</label>
                                <div className="form-row col-md-offset-4 col-md-8 text-center">
                                    <div className="form-row col-md-6" >
                                        <CardElement id="cardElement" className="form-control text-center" />
                                    </div>
                                </div>
                            </div>
                    }
                    <div className="form-group col-md-12 text-center">
                        <button disabled={this.state.disablePaymentButton} className="btn btn-lg btn-primary" type="submit">Accept & Pay</button>
                    </div>
                    <br />
                    <div className="form-group text-center">
                        <small className="text-muted">
                            By signing up for this tournament confirms my understanding that participation in this leisure activity is on a voluntary,
                            recreational basis and that there may be an element of risk involved. Savant Sporting Events, LLC and the host sites are not responsible
                            for any injury or accident sustained and encourages all participants to obtain insurance for player protection. By acceptance
                            of my entry, on behalf of myself, heirs and legal representative, I do hereby release and forever discharge Savant Sporting Events, LLC
                            and all of its representatives from any and all claims and demand of every kind, nature and character, for any and all damages,
                            losses, or injuries which I may sustain in connection with any aspect of participation in this voluntary recreational activity.
                        </small>
                    </div>
                </form>
            </div>
        )
    }
}

export default injectStripe(registerForm);  