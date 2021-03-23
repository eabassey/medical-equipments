import React, {useState} from 'react';
import {DropdownButton, Dropdown, Button} from 'react-bootstrap';
import DataTable from 'react-data-table-component';

const DeptDataColumn = ({wards}) => {
    const [text, setText] = useState('');
    const deptColumns = [
        {
            name: "Equipment",
            selector: 'name'
        },
        {
            name: 'Unit Cost',
            selector: 'unitCost'
        },
        {
            name: 'Quantity',
            selector: 'quantity'
        },
        {
            name: 'Total'
        },
        {
            name: 'Actions',
            cell: (row) => (
                <DropdownButton id="dropdown-basic-button" title="Actions" size="sm">
                    <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
                </DropdownButton>
            )
        }
    ];
    const equipmentData = [
        { name: 'Bed', unitCost: 120, quantity: 12 },
        { name: 'Trolly', unitCost: 60, quantity: 3 },
    ];

    return (
        <>
            <DropdownButton title={text || 'Select Department'} size="sm">
                {wards && wards.map(w => (
                    <Dropdown.Item key={w} as="button" onClick={() => setText(w)}>{w}</Dropdown.Item>
                ))}
            </DropdownButton>
            <DataTable columns={deptColumns} data={equipmentData} overflowY={true} />
        </>
    );
};

export default DeptDataColumn;