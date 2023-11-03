import React, { useState } from 'react';
import Papa from 'papaparse';
import UploadDiemModal from '~/components/modals/UploadDiem';

function Home() {
    const [csvData, setCSVData] = useState([]);
    const [show, setShow] = useState(false);

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            setShow(true);
            Papa.parse(file, {
                complete: (result) => {
                    setCSVData(result.data);
                },
                header: true, // If the CSV has a header row
                skipEmptyLines: true, // Skip empty lines
            });
        }
    };

    return (
        <div>
            <div className="d-flex justify-content-between mt-5">
                <h2>Import from CSV</h2>
                <input type="file" accept=".csv" onChange={handleFileChange} />
            </div>

            {show && (
                <UploadDiemModal show={show} handleClose={() => setShow(false)} csvData={csvData}></UploadDiemModal>
            )}
        </div>
    );
}

export default Home;
