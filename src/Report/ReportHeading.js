import React, {useState} from 'react';
import {DropdownButton, Dropdown} from 'react-bootstrap';


export default function ReportHeading({list}) {
    const [text, setText] = useState('');

    return (
        <div>
            <DropdownButton id="dropdown-item-button" title="Select Facility">
                {list.map(f => (
                    <Dropdown.Item key={f} as="button" onClick={() => setText(f)}>{f}</Dropdown.Item>
                ))}
            </DropdownButton>
           {text && <h1>{text} Equipment Specification Details</h1>}
        </div>
    )
}