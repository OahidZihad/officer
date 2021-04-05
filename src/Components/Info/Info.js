import React from 'react';
import './Info.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointer } from '@fortawesome/free-solid-svg-icons';

const Info = (props) => {
    const fullName = props.officerInfo.name.title + ' ' + props.officerInfo.name.first + ' ' + props.officerInfo.name.last;
    return (
        <div className="info-main">
            <div>
                <img src={props.officerInfo.picture.large} alt=""/>
            </div>
            <div>
                <h1 className="name">{fullName}</h1>
                <p>Email: {props.officerInfo.email}</p>
                <p>Phone: {props.officerInfo.phone}</p>
                <p>Age: {props.officerInfo.dob.age}</p>
                <button className="btn" onClick={() => props.handleAddOfficer(props.officerInfo.dob.age)}>
                    <FontAwesomeIcon icon={faHandPointer} /> Select</button>
            </div>
        </div>
    );
};

export default Info;