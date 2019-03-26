import React from 'react';

const playerLooking = (props) => {
    return (
        <tr>
            <td>
                {props.Gender}
            </td>
            <td>
                {props.DoublesRating}
            </td>
            <td>
                {props.MixedRating}
            </td>
            <td>
                {props.Age}
            </td>
            <td>
                {props.FirstName}
            </td>
            <td>
                {props.LastName}
            </td>
            <td>
            <a href={"tel:"+props.Phone}><i></i> {props.Phone}</a>
            </td>
            <td>
            <a href={"mailto:"+props.Email}>{props.Email}</a>                
            </td>
            <td>
                {props.EventNeedingPartner}
            </td>
        </tr>
    );
}

export default playerLooking;