import React from 'react';
import DataTable from 'react-data-table-component';


export default function ReportBody({columns, data}) {
    return (
        <div>
            <DataTable columns={columns} data={data}/>
        </div>
    );
}

// ALTERNATIVE SYNTAX
//  const ReportBody = ({columns, data}) => {
//     return (
//         <div>
//             <DataTable columns={columns} data={data}/>
//         </div>
//     );
// }

// export default ReportBody;