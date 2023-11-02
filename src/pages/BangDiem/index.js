import React, { useState } from 'react';

function BangDiem() {
    const [csvData, setCSVData] = useState([]);

    return (
        <div>
            <div className="d-flex justify-content-between mt-5">
                <h2>Bảng điểm</h2>
            </div>
            <table>
                <thead>
                    <tr>
                        {csvData[0] && Object.keys(csvData[0]).map((header, index) => <th key={index}>{header}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {csvData.map((row, index) => (
                        <tr key={index}>
                            {Object.values(row).map((value, index) => (
                                <td key={index}>{value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default BangDiem;
