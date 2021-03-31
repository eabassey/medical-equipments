import React, {useState} from 'react';
import {DropdownButton, Dropdown, Button} from 'react-bootstrap';


export default function ReportHeading({list, addNewDepartmentLine, selectedDepartment, setSelectedDepartment}) {
    const [text, setText] = useState('');

    return (
        <div>
            <DropdownButton id="dropdown-item-button" title="Select Facility">
                {list.map(f => (
                    <Dropdown.Item key={f} as="button" onClick={() => setText(f)}>{f}</Dropdown.Item>
                ))}
            </DropdownButton>
           {text && <h1 style={{textAlign: 'center'}}>{text} Equipment Specification Details</h1>}
           <Button size="sm" type="button" onClick={addNewDepartmentLine}>New Department</Button>
        </div>
    )
}