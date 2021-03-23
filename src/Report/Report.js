import React from 'react';
import ReportHeading from './ReportHeading';
import ReportBody from './ReportBody';
import DeptDataColumn from './DeptDataColumn';


const wards = [
    'Standard Ward',
     'Male Ward', 
     'Female Ward', 
     'Children Ward'
]

export default function Report () {
    const list = [
        'Teaching Hospital',
        'Regional Hospital',
        'District Hospital',
    ]
    const columns = [
        {
            name: 'ID',
            selector: 'id',
            width: '10%'
        },
        {
            name: 'Departments',
            cell: () => (
                <DeptDataColumn wards={wards}/>
            )
        }
    ];

    const data = [
        {id: 1, department: 'Dept 1'},
        {id: 2, department: 'Dept 2'},
        {id: 3, department: 'Dept 3'}
    ]

    return (
        <div>
                <ReportHeading list={list} />
                <ReportBody columns={columns} data={data} />
        </div>
    );
}