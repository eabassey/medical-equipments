import React from 'react';
import ReportHeading from './ReportHeading';

const list = [
    'Teaching Hospital',
    'Regional Hospital',
    'District Hospital',
]

export default function Report () {

    return (
        <div>
                <ReportHeading list={list} />
        </div>
    );
}