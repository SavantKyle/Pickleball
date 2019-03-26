import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import PlayerLooking from './playerLooking';

export class looking extends Component {
    state = {
        players: []
    };

    componentDidMount() {
        // axios.get('api/playerlooking/getplayers')
            axios.get('webapi/api/playerlooking/getplayers')
            .then(response => {
                this.setState({ players: response.data })
            });
    }

    render() {
        let players = null;
        if (this.state.players) {
            players = (
                this.state.players.map(x => {
                    return <PlayerLooking key={x.Id} Gender={x.Gender} DoublesRating={x.DoublesRating} MixedRating={x.MixedRating} Age={x.Age} FirstName={x.FirstName} LastName={x.LastName} Phone={x.Phone} Email={x.Email} EventNeedingPartner={x.EventNeedingPartner} />
                })
            );
        }

        return (
            <div>
                <div className="form-group col-md-12 text-center">
                    <h2 className="text-center">To get added to the list click button below</h2>
                    <NavLink to="/addPlayerLooking"><button className="btn btn-md bg-primary">Add Player To List</button></NavLink>
                </div>
                <br />
                <div className="col-md-12 text-center">
                    <hr style={{ backgroundColor: "black", borderWidth: "4px", width: "100%" }} />
                    {
                        !this.state.players ? null :
                            <table className="table table-responsive text-center">
                                <tbody>
                                    <tr>
                                        <td><strong>Gender</strong></td>
                                        <td><strong>Doubles Rating</strong></td>
                                        <td><strong>Mixed Rating</strong></td>
                                        <td><strong>Age</strong></td>
                                        <td><strong>First Name</strong></td>
                                        <td><strong>Last Name</strong></td>
                                        <td><strong>Phone</strong></td>
                                        <td><strong>Email</strong></td>
                                        <td><strong>Event Needing Partner</strong></td>
                                    </tr>
                                    {players}
                                </tbody>
                            </table>
                    }
                </div>
            </div >
        )
    }
}

export default looking;  