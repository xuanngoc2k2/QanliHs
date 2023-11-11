import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { svGetDiem } from '~/apis';
import classNames from 'classnames/bind';
import styles from './custom.module.scss';

const cx = classNames.bind();
function BangDiemSV({ data, userInfo }) {
    // const [csvData, setCSVData] = useState([]);
    // const { id } = useParams();

    // useEffect(() => {
    //     if (id) {
    //         svGetDiem(id).then((data) => {
    //             console.log(data);
    //             setCSVData(data);
    //         });
    //     }
    // }, [id]);

    return (
        <div>
            <div className='d-flex justify-content-between mt-5 col col-8' style={{
                color: 'green',
                fontWeight: 'bold'
            }}>
                <div>MSV: <span style={{
                    marginLeft: 10,
                    color: 'black'
                }}>{userInfo.email}</span></div>
                <div>Họ tên: <span style={{
                    marginLeft: 10,
                    color: 'black'
                }}>{userInfo.firstName + ' ' + userInfo.lastName}</span></div>
                <div>Lớp: <span style={{
                    marginLeft: 10,
                    color: 'black'
                }}>{userInfo.class}</span></div>
            </div>
            <div className="d-flex justify-content-between mt-3">
                <h6>BẢNG ĐIỂM CHI TIẾT</h6>
            </div>
            <table className="table table-bordered mt-3">
                <thead>
                    <tr className='table-primary'>
                        <th style={{
                            backgroundColor: '#2467ae',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            color: 'white',
                        }}>STT</th>
                        <th style={{
                            backgroundColor: '#2467ae',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            color: 'white',
                        }}>Tên học phần</th>
                        <th style={{
                            backgroundColor: '#2467ae',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            color: 'white',
                        }}>Số tín chỉ</th>
                        <th style={{
                            backgroundColor: '#2467ae',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            color: 'white',
                        }}>Học kì</th>
                        <th style={{
                            backgroundColor: '#2467ae',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            color: 'white',
                        }}>Năm</th>
                        <th style={{
                            backgroundColor: '#2467ae',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            color: 'white',
                        }}>Điểm QT</th>
                        <th style={{
                            backgroundColor: '#2467ae',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            color: 'white',
                        }}>Điểm THI</th>
                        <th style={{
                            backgroundColor: '#2467ae',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            color: 'white',
                        }}>TKHP</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}
                            className={index % 2 === 0 ? 'table-light' : 'table-primary'}>
                            {
                                Object.values(row).map((value, index) => (
                                    <td key={index}>{value}</td>
                                ))
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
}

export default BangDiemSV;
