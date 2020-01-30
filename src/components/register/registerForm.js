import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
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
        crawfishGuestCount: 0,
        crawfishGuestPrice: 0,
        totalPrice: 0,
        adjustedPrice: 0, 
        showPrice: false,
        mixedPartnerFirstName: '',
        mixedPartnerLastName: '',
        mixedPartnerPhone: '',
        showMixedSections: false,
        doublesPartnerFirstName: '',
        doublesPartnerLastName: '',
        doublesPartnerPhone: '',
        showDoublesSections: false,
        disablePaymentButton: false,
        hasValidPromoCode: false, 
        success: false
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

    onMixedFirstNameChange = (event) => {
        this.setState({ mixedPartnerFirstName: event.target.value });
    }

    onMixedLastNameChange = (event) => {
        this.setState({ mixedPartnerLastName: event.target.value });
    }

    onMixedPhoneChange = (event) => {
        let val = this.phoneNumberInputMasking(event);
        this.setState({ mixedPartnerPhone: val });
    }

    onDoublesFirstNameChange = (event) => {
        this.setState({ doublesPartnerFirstName: event.target.value });
    }

    onDoublesLastNameChange = (event) => {
        this.setState({ doublesPartnerLastName: event.target.value });
    }

    onDoublesPhoneChange = (event) => {
        let val = this.phoneNumberInputMasking(event);
        this.setState({ doublesPartnerPhone: val });
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
        let newVal, newPrice, doubles, mixed;
        let eventPrice = new Date() <= new Date('1/31/2020') ? 55 
        : new Date() > new Date('1/31/2020') && new Date() <= new Date('2/29/2020') ? 65
        : 75;
        // let twoEventPrice = new Date() >= new Date('4/1/2019') ? 70 : 65;
        switch (event.target.id) {
            case "eventDoubles":
                newVal = "Doubles";
                newPrice = eventPrice;
                doubles = true;
                mixed = false;
                break;
            case "eventMixed":
                newVal = "Mixed";
                newPrice = eventPrice;
                doubles = false;
                mixed = true;
                break;
            case "eventBoth":
                newVal = "Both";
                newPrice = eventPrice;
                doubles = true;
                mixed = true;
                break;
            default:
                break;
        }
        this.setState({ event: newVal, entryPrice: newPrice, totalPrice: newPrice + this.state.crawfishGuestPrice, showPrice: true, showDoublesSections: doubles, showMixedSections: mixed });
    }

    onCrawfishGuestChange = (event) => {
        let crawfishGuestCount = event.target.value;
        let crawfishPrice = event.target.value * 20;
        let newTotalPrice = this.state.entryPrice + crawfishPrice;
        let newAdjustedPrice = this.state.hasValidPromoCode 
            ? newTotalPrice - 10
            : newTotalPrice;
        this.setState({ totalPrice: newTotalPrice, adjustedPrice: newAdjustedPrice, crawfishGuestCount: crawfishGuestCount, crawfishGuestPrice: crawfishPrice });
    }

    onPromoCodeChange = (event) => {
        let adjusted = this.state.totalPrice; 
        let valid = false; 
        if (event.target.value.trim().toLowerCase() === 'legacy') {
            valid = true;
            adjusted -= 10;
        } else if (event.target.value.trim().toLowerCase() === 'slidell' && new Date() < new Date('2/1/2020')) {
            valid = true;
            adjusted -= 10;
        } else {
            adjusted = this.state.totalPrice;
        }

        this.setState({ adjustedPrice: adjusted, hasValidPromoCode: valid });
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

        this.props.stripe.createToken({ name: this.state.firstName }).then(({ token }) => {
            console.log('Received Stripe token id:', token.id);
            let playerInfo = { ...this.state };

            const payload = {
                playerInfo,
                stripePaymentRequest: {
                    amount: this.state.totalPrice > this.state.adjustedPrice && this.state.adjustedPrice > 0
                        ? this.state.adjustedPrice 
                        : this.state.totalPrice,
                    description: `${this.state.firstName} ${this.state.lastName} - (${this.state.gender} Doubles:${this.state.ratingDoubles} Mixed:${this.state.ratingMixed})`,
                    receiptEmail: this.state.email,
                    tokenId: token.id
                }
            };

            console.log(payload);
            axios.post('https://batonrougepickleball.com/webapi/api/register/RegisterPlayer', payload)
                //axios.post('/api/Register/RegisterPlayer', payload)
                .then(response =>
                    this.setState({ success: true, disablePaymentButton: false })
                )
                .catch(error => {
                    this.setState({ disablePaymentButton: false });
                    console.log(error)
                    alert(`${error}. Something went wrong with your payment. If this continues to occur please notify Kyle at kyle.savant@outlook.com or text at 225-223-8809.`)
                });
        });
    }

    render() {
        let redirect = null;
        if (this.state.success) {
            redirect = <Redirect to="/success" />
        }
        let spinner = null;
        if (this.state.disablePaymentButton) {
            spinner = <div className="col-md-12 text-center fa-4x"><i class="fa fa-spinner fa-spin"></i></div>
        } else {
            spinner = null;
        }
        return (
            <div>
                {redirect}
                <form onSubmit={this.onSubmitClick}>
                    <div>
                        <div className="form-row">
                            <div className="form-group col-md-6 text-center">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" className="form-control text-center" id="firstName" placeholder="First Name" onChange={this.onFirstNameChange} required />
                            </div>
                            <div className="form-group col-md-6 text-center">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" className="form-control text-center" id="lastName" placeholder="Last Name" onChange={this.onLastNameChange} onKeyPress={this.onKeyPress} required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-4 text-center">
                                <label htmlFor="birthYear">Birth Year</label>
                                <input type="text" className="form-control text-center" id="birthYear" placeholder="Year of Birth" onChange={this.onBirthYearChange} onKeyPress={this.onKeyPress} required />
                            </div>
                            <div className="form-group col-md-4 text-center">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.onEmailChange} onKeyPress={this.onKeyPress} required />
                            </div>
                            <div className="form-group col-md-4 text-center">
                                <label htmlFor="phone">Cell Phone Number</label>
                                <input type="text" className="form-control text-center" id="phone" placeholder="Phone Number" onChange={this.onPhoneChange} onKeyPress={this.onKeyPress} required />
                            </div>
                        </div>
                        <br />
                        <div className="form-check col-md-6 form-check-inline text-center">
                            <label>Gender</label> <br />
                            <input type="radio" className="form-check-input" id="genderMale" name="gender" onChange={this.onGenderChange} onKeyPress={this.onKeyPress} required /> &nbsp;
                                <label className="form-check-label " htmlFor="genderMale">Male</label> &nbsp;&nbsp;&nbsp;
                                <input type="radio" className="form-check-input" id="genderFemale" name="gender" onChange={this.onGenderChange} onKeyPress={this.onKeyPress} required /> &nbsp;
                                <label className="form-check-label" htmlFor="genderFemale">Female</label>
                        </div>
                        {/* <br /> */}
                        <div className="form-check col-md-6 form-check-inline text-center">
                            <label>Select Events</label> <br />
                            <input type="radio" className="form-check-input" id="eventDoubles" name="eventsPlaying" onChange={this.onEventChange} onKeyPress={this.onKeyPress} required /> &nbsp;
                            <label className="form-check-label " htmlFor="eventDoubles">Doubles</label> &nbsp;&nbsp;&nbsp;
                            <input type="radio" className="form-check-input" id="eventMixed" name="eventsPlaying" onChange={this.onEventChange} onKeyPress={this.onKeyPress} required /> &nbsp;
                            <label className="form-check-label" htmlFor="eventMixed">Mixed Doubles</label> &nbsp;&nbsp;&nbsp;
                            <input type="radio" className="form-check-input" id="eventBoth" name="eventsPlaying" onChange={this.onEventChange} onKeyPress={this.onKeyPress} required /> &nbsp;
                            <label className="form-check-label" htmlFor="eventBoth">Both</label>
                        </div>
                    </div>
                    <div className="row form-row">
                        {
                            !this.state.showMixedSections ? null :
                                <div className="form-group col form-check form-check-inline text-center center-block">
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
                                    <br />
                                    <small className="text-muted">A self-rating may be used | Please rate honestly</small>
                                    <br />
                                    <small className="text-muted">If unsure, ask someone</small>
                                </div>
                        }
                        {
                            !this.state.showDoublesSections ? null :
                                <div className="form-group col form-check form-check-inline text-center center-block">
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
                                        <label htmlFor="mixedFirstName">First Name</label>
                                        <input type="text" className="form-control text-center" id="mixedFirstName" onChange={this.onMixedFirstNameChange} onKeyPress={this.onKeyPress} placeholder="First Name" />
                                    </div>
                                    <div className="form-group col-md-4 text-center">
                                        <label htmlFor="mixedLastName">Last Name</label>
                                        <input type="text" className="form-control text-center" id="mixedLastName" onChange={this.onMixedLastNameChange} onKeyPress={this.onKeyPress} placeholder="Last Name" />
                                    </div>
                                    <div className="form-group col-md-4 text-center">
                                        <label htmlFor="phone">Phone Number</label>
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
                                        <label htmlFor="doublesFirstName">First Name</label>
                                        <input type="text" className="form-control text-center" id="doublesFirstName" onChange={this.onDoublesFirstNameChange} onKeyPress={this.onKeyPress} placeholder="First Name" />
                                    </div>
                                    <div className="form-group col-md-4 text-center">
                                        <label htmlFor="doublesLastName">Last Name</label>
                                        <input type="text" className="form-control text-center" id="doublesLastName" onChange={this.onDoublesLastNameChange} onKeyPress={this.onKeyPress} placeholder="Last Name" />
                                    </div>
                                    <div className="form-group col-md-4 text-center">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input type="text" className="form-control text-center" id="doublesPhone" onChange={this.onDoublesPhoneChange} onKeyPress={this.onKeyPress} placeholder="Phone Number" />
                                    </div>
                                </div>
                            </div>
                    }
                    {
                        !this.state.showPrice ? null :
                            <div>
                                <div className="text-center">
                                    <h3>Crawfish Guests ($20 Per)</h3>
                                    <h4 className="text-muted">NOTE: Players eat free but may invite friends/family to the crawfish boil as guests</h4>
                                    <input type="number" className="form-control text-center" id="crawfishGuests" placeholder="How many guests will you have?" onChange={this.onCrawfishGuestChange} onKeyPress={this.onKeyPress} />
                                    <small className="text-muted">Need to know so we have enough food and drinks for non-players</small>
                                </div>
                                <div className="text-center">
                                    <h3>Promo Code</h3>
                                    <input type="text" className="form-control text-center" id="promoCode" placeholder="Enter Promotional Code Here" onChange={this.onPromoCodeChange} onKeyPress={this.onKeyPress} />
                                </div>
                                <div className="text-center text-primary">
                                    <h3>
                                        <strong>
                                            Total: ${this.state.totalPrice > this.state.adjustedPrice && this.state.adjustedPrice > 0
                                                ? this.state.adjustedPrice 
                                                : this.state.totalPrice}
                                        </strong>
                                    </h3>
                                </div>
                                <div className="form-group text-center">
                                    <label htmlhtmlFor="cardElement" className="text-muted">Credit or Debit Card</label>
                                    <div className="form-row col-md-offset-4 col-md-8 text-center">
                                        <div className="form-row col-md-6" >
                                            <CardElement id="cardElement" className="form-control text-center" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                    }
                    {spinner}
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