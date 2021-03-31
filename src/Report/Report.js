import React, {useState} from 'react';
import ReportHeading from './ReportHeading';
import ReportBody from './ReportBody';
import { useForm,  } from "react-hook-form";
import {v4 as uuidv4} from 'uuid';


export default function Report () {
    const { register, handleSubmit, watch, errors, formState } = useForm();
 
    const [departments, setDepartments] = useState([
        {
            id: '11',
            ward: 'male-ward',
            equipments: [
                {id: '1', name: 'Bed', unitCost: 120, quantity: 12},
                {id: '2', name: 'Trolly', unitCost: 200, quantity: 5}
            ]
        },
        {
            id: '22',
            ward: 'female-ward',
            equipments: [
                {id: '8', name: 'Heater', unitCost: 78, quantity: 8},
                {id: '423', name: 'Warmer', unitCost: 40, quantity: 6}
            ]
        }
    ])
    const list = [
        'Teaching Hospital',
        'Regional Hospital',
        'District Hospital',
    ]

    const addNewDepartmentLine = () => {
        setDepartments((prev) => {
            return [
                ...prev,
                {
                    id: uuidv4(),
                    ward: 'male-ward',
                    equipments: []
                }
            ]
        })
    }

    const deleteDepartmentLine = (id) => {
        setDepartments((prev) => prev.filter(d => d.id !== id))
    }

    return (
        <div>
                <ReportHeading list={list} addNewDepartmentLine={addNewDepartmentLine} />
                    <div>
                        {/* <Button variant="danger" size="sm" disabled={!formState.isDirty} onClick={handleReset}> Discard Changes<i className="fa fa-times" aria-hidden="true"></i></Button> */}
                        {/* <Button variant="success" size="sm" disabled={!formState.isDirty} onClick={updateForm}><i className="fa fa-check" aria-hidden="true"></i></Button> */}
                    </div>
                <ReportBody departments={departments} deleteDepartmentLine={deleteDepartmentLine} />
        </div>
    );
}