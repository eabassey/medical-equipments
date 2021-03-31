import React, {useState} from 'react';
import {Table, Dropdown, DropdownButton, Button } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { useForm } from "react-hook-form";

const TableItem= ({item, index, removeEquipmentLine}) => {
    const [state, setState] = useState(item);
    const { register, handleSubmit, watch, errors, formState, reset } = useForm();
    const onSubmit = (data) => {
        console.log({data})
    }

    return (
        <>
            <tr>
                <td>{index + 1}</td>
                <td>{state.name}</td>
                <td>
                    <input type="number" className="form-control" name={`${state.name}-unitCost`} onChange={(ev) => setState(prev => ({...prev, unitCost: ev.target.value}))} defaultValue={state.unitCost} ref={register({valueAsNumber: true})} />
                </td>
                <td>
                    <input type="number" className="form-control" name={`${state.name}-quantity`} onChange={(ev) => setState(prev => ({...prev, quantity: ev.target.value}))} defaultValue={state.quantity} ref={register({valueAsNumber: true})} />
                </td>
                <td>{state.unitCost * state.quantity}</td>
                <td>
                <DropdownButton id="dropdown-basic-button" title="Actions" size="sm">
                    <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                    <Dropdown.Item onClick={() => removeEquipmentLine(state.id)}>Delete</Dropdown.Item>
                </DropdownButton>
                </td>
            </tr>
        </>
    );
}

export default TableItem;