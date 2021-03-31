import React, {useState} from 'react';
import {DropdownButton, Dropdown, Button    } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { useForm } from "react-hook-form";
import InnerTable from './components/InnerTable';
import {v4 as uuidv4} from 'uuid';

const departmentList = {
    'male-ward': 'Male Ward',
    'female-ward': 'Female Ward',
    'children-ward': 'Children Ward',
    'patient-ward': 'Patient Ward',
    'nursing-ward': 'Nursing Ward',
}

const DeptDataColumn = ({setData, data, department, deleteDepartmentLine}) => {
    const [selectedId, setSelectedId] = useState('');
    const [equipmentList, setEquipmentList] = useState(department.equipments);
    const { register, handleSubmit, watch, errors, formState, reset } = useForm();
    const updateForm = (ev) => {
        const x = handleSubmit((data) => {
            console.log({data});
        });
        x();
    }

    const addNewEquipmentLine = () => {
        const newLine = {id: uuidv4(), name: '', unitCost: '', quantity: ''}
        setEquipmentList((prev) => [...prev, newLine]);
    }

    const removeEquipmentLine = (id) => {
        setEquipmentList((prev) => {
            return prev.filter((e) => e.id !== id);
        })
    }



    return (
        <>
            <div>
                <DropdownButton title={selectedId ? departmentList[selectedId] : 'Select Department'} size="sm">
                    {Object.entries(departmentList).map(([deptKey, deptText]) => (
                        <Dropdown.Item key={deptKey} as="button" onClick={() => setSelectedId(deptKey)}>{deptText}</Dropdown.Item>
                    ))}
                </DropdownButton>
                <Button size="sm" type="button" variant="danger" onClick={() => deleteDepartmentLine(department.id)}>Delete <i class="fa fa-trash-o" aria-hidden="true"></i></Button>
            </div>

            <h2 style={{textAlign: 'center'}}>{selectedId && departmentList[selectedId]}</h2>
            <Button size="sm" type="button" onClick={addNewEquipmentLine}>New Equipment</Button>
            <InnerTable data={equipmentList} removeEquipmentLine={removeEquipmentLine} />
        </>
    );
};

export default DeptDataColumn;
