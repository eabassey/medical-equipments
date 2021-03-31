import React from 'react';
import DataTable from 'react-data-table-component';
import {Table} from 'react-bootstrap';
import DeptDataColumn from './DeptDataColumn'


export default function ReportBody({departments, deleteDepartmentLine}) {
    return (
        <div>
            <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>DEPARTMENTS</th>
                        </tr>
                    </thead>
                    <tbody>
                       {departments && departments.map((department, i) => (
                            <tr key={department.id}>
                                <td>{i + 1}</td>
                                <td>
                                     <DeptDataColumn department={department} deleteDepartmentLine={deleteDepartmentLine}/>
                                </td>
                            </tr>
                       ))}
                    </tbody>
                </Table>
        </div>
    );
}