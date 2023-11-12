import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { CartesianGrid, Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';
import styled from 'styled-components';

export default function SvThongKe({ show, handleClose, data }) {
    const chartData = Object.entries(data).map(([grade, count]) => ({ grade, count }));
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF6666', '#00CC66', '#FF3300', '#808080'];

    return (
        <>
            {show && (
                <Modal show={show} onHide={handleClose} centered>
                    <div className='sd'>
                        <Modal.Header closeButton>
                            <Modal.Title>Thống kê</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <PieChart width={400} height={400}>
                                <Pie
                                    data={chartData}
                                    cx={200}
                                    cy={200}
                                    innerRadius={60}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="count"
                                >
                                    {chartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </div>
                </Modal>
            )}
        </>
    );
}
