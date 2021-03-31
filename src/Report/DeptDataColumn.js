import React, {useState, useEffect} from 'react';
import {DropdownButton, Dropdown, Button    } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { useForm } from "react-hook-form";
import InnerTable from './components/InnerTable';
import {v4 as uuidv4} from 'uuid';

// const departmentList = {
//     'male-ward': 'Male Ward',
//     'female-ward': 'Female Ward',
//     'children-ward': 'Children Ward',
//     'patient-ward': 'Patient Ward',
//     'nursing-ward': 'Nursing Ward',
// }

const sampleDeptEquipmentRef = [
    {
        id: 'male-ward',
        text: 'Male ward',
            equipments: [
                {id: '1', name: 'Bed'},
                {id: '2', name: 'Trolly,book,'}
            ]
    },
    {
        id: 'female-ward',  
        text: 'Female Ward',
            equipments: [
                {id: '8', name: 'Heater'},
                {id: '423', name: 'Warmer'}
            ]
    }
];

const DeptDataColumn = ({setData, data, department, deleteDepartmentLine}) => {
    const [selectedId, setSelectedId] = useState('');
    const [deptLookup, setDeptLookup] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState(null);
    const [equipmentList, setEquipmentList] = useState(department.equipments);
    const { register, handleSubmit, watch, errors, formState, reset } = useForm();

    useEffect(() => {
        setDeptLookup(sampleDeptEquipmentRef);
    }, []);

    const addNewEquipmentLine = () => {
        const newLine = {id: uuidv4(), name: '', unitCost: '', quantity: ''}
        setEquipmentList((prev) => [...prev, newLine]);
    }

    const removeEquipmentLine = (id) => {
        setEquipmentList((prev) => {
            return prev.filter((e) => e.id !== id);
        })
    }

    const autoPopulateEquipmentList = (dept) => {
        setSelectedDepartment(dept);
        const eqList = dept.equipments.map(eq => {
         return {id: uuidv4(), name: eq.name, unitCost: '', quantity: ''};
        })
        setEquipmentList(eqList);
    }



    return (
        <>
            <div style={{display: 'inline-flex'}}>
                <DropdownButton title={selectedDepartment ? selectedDepartment.text : 'Select Department'} size="sm">
                    {deptLookup.map((dept) => (
                        <Dropdown.Item key={dept.id} as="button" onClick={() => autoPopulateEquipmentList(dept)}>{dept.text}</Dropdown.Item>
                    ))}
                </DropdownButton>
                <Button size="sm" type="button" variant="danger" onClick={() => deleteDepartmentLine(department.id)}>Delete <i className="fa fa-trash-o" aria-hidden="true"></i></Button>
            </div>

            <h2 style={{textAlign: 'center'}}>{selectedDepartment && selectedDepartment.text}</h2>
            <Button size="sm" type="button" onClick={addNewEquipmentLine}>New Equipment</Button>
            <InnerTable equipmentList={equipmentList} removeEquipmentLine={removeEquipmentLine} />
        </>
    );
};

export default DeptDataColumn;
