import React, {useState} from 'react';
import {Table, Dropdown, DropdownButton, Button } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { useForm } from "react-hook-form";
import TableItem from './TableItem';

const InnerTable = ({data, removeEquipmentLine}) => {
    const [selectedId, setSelectedId] = useState('');
    const { register, handleSubmit, watch, errors, formState, reset } = useForm();
    const updateForm = (ev) => {
        const x = handleSubmit((data) => {
            console.log({data});
        });
        x();
    }

    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Equipment List</th>
                    <th>Unit Cost</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map((eq, i) => (
                 <TableItem key={eq.id} item={eq} index={i} removeEquipmentLine={removeEquipmentLine}/>
                ))}
            </tbody>
            </Table>
    )
};

export default InnerTable;
