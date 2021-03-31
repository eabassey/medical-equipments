import React, {useState} from 'react';
import {Table, Dropdown, DropdownButton, Button } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { useForm } from "react-hook-form";

const TableItem= ({equipment, index, removeEquipmentLine}) => {
    const [equipmentState, setEquipmentState] = useState(equipment);
    const [equipmentNameDisabled, setEqupmentNameDisabled] = useState(true);
    const { register, handleSubmit, watch, errors, formState, reset } = useForm();
   
    const editEquipment = (eq) => {
        setEqupmentNameDisabled(false);
    }

    return (
        <>
            <tr>
                <td>{index + 1}</td>
                <td>
                    <input type="text" disabled={equipmentState && equipmentState.name ? equipmentNameDisabled : false} className="form-control" name={`${equipmentState.name}`} onChange={(ev) => setEquipmentState(prev => ({...prev, name: ev.target.value}))} defaultValue={equipmentState.name} ref={register({required: true})} />
                </td>
                <td>
                    <input type="number" className="form-control" name={`${equipmentState.name}-unitCost`} onChange={(ev) => setEquipmentState(prev => ({...prev, unitCost: ev.target.value}))} defaultValue={equipmentState.unitCost} ref={register({valueAsNumber: true})} />
                </td>
                <td>
                    <input type="number" className="form-control" name={`${equipmentState.name}-quantity`} onChange={(ev) => setEquipmentState(prev => ({...prev, quantity: ev.target.value}))} defaultValue={equipmentState.quantity} ref={register({valueAsNumber: true})} />
                </td>
                <td>{equipmentState.unitCost * equipmentState.quantity}</td>
                <td>
                <DropdownButton id="dropdown-basic-button" title="Actions" size="sm">
                    <Dropdown.Item onClick={() => editEquipment(equipmentState)}>Edit</Dropdown.Item>
                    <Dropdown.Item onClick={() => removeEquipmentLine(equipmentState.id)}>Delete</Dropdown.Item>
                </DropdownButton>
                </td>
            </tr>
        </>
    );
}

export default TableItem;