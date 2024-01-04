import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { getAllMon, gvCreateCourse, gvUpdateCourse } from '~/apis';

export default function AddCourseModal({ show, handleClose }) {
    const [tenhp, setTenhp] = useState('');
    const [gvphutrach, setGvphutrach] = useState('');
    const [sotc, setSotc] = useState(3);
    const [tutiet, setTutiet] = useState(1);
    const [dentiet, setDentiet] = useState(2);
    const [thu, setThu] = useState('T2');
    const [nam, setNam] = useState('2023-2024');
    const [hocki, setHocki] = useState('1');
    const [mota, setMota] = useState('');
    const [motamonhoc, setMotamonhoc] = useState('');
    const [soluong, setSoluong] = useState(40);
    const [diadiemhoc, setDiadiemhoc] = useState('');
    const [tenmon, setTenmon] = useState('');
    const [mamon, setMamon] = useState('');
    // const [datamon, setDataMon] = useState([{}]);
    const [thutu, setThutu] = useState(1);
    // console.log(name, gv, so_tc, from, to, date, year, hocKi, address)
    // console.log(data)
    // useEffect(() => {
    //     if (data) {
    //         setname(data.name);
    //         setGV(data?.gv);
    //         setso_tc(data?.so_tc);
    //         setFrom(data?.from);
    //         setTo(data?.to);
    //         setDate(data?.date);
    //         setyear(data?.year);
    //         setKiHoc(data?.hocKi);
    //         setDesc(data?.desc);
    //         settotalSV(data?.totalSV);
    //         setaddress(data?.address);
    //     }
    // }, [data]);

    const onSubmit = async () => {
        if (!tenhp ||
            !gvphutrach ||
            !sotc ||
            !tutiet ||
            !dentiet ||
            !thu ||
            !nam ||
            !hocki ||
            !soluong ||
            !diadiemhoc ||
            !mamon ||
            !thutu) {
            alert('Vui lòng nhập đủ thông tin');
            return;
        }

        try {
            const course = {
                tenhp,
                gvphutrach,
                sotc,
                tutiet,
                dentiet,
                thu,
                nam,
                hocki,
                mota,
                soluong,
                diadiemhoc: thu + ' ' + diadiemhoc,
                tenmonhoc: tenmon,
                mamonhoc: mamon,
                thutu
            }
            console.log(course)
            await gvCreateCourse(course);
            alert("Thêm thành công")
        } catch (error) {
            alert(error);
            return;
        }

        handleClose();
    };
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             let response = await getAllMon();
    //             setDataMon(response);
    //             console.log(response)
    //         } catch (error) {
    //             console.error('Lỗi lấy dữ liệu', error);
    //         }
    //     };
    //     fetchData();
    // }, show)
    return (
        <>
            {show && (
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Thêm học phần</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <div className='row'>
                                <Form.Group className="mb-3 col-6">
                                    <Form.Label>Môn học</Form.Label>
                                    <Form.Control value={tenmon} onChange={(e) => setTenmon(e.target.value)} type="text" />
                                    {/* <Form.Control as="select" value={mamon} onChange={(e) => setMamon(e.target.value)}>
                                        <option value="-1">Chọn môn</option>
                                        {datamon.map((v => {
                                            return <option value={v.mamonhoc}>{v.tenmonhoc}</option>
                                        }))}
                                        <option value={datamon.length + 1}>Khác</option>
                                    </Form.Control> */}
                                </Form.Group>
                                <Form.Group className="mb-3 col-3">
                                    <Form.Label>Mã môn: </Form.Label>
                                    <Form.Control value={mamon} onChange={(e) => setMamon(e.target.value)} type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3 col-3" controlId="email">
                                    <Form.Label>Số tín chỉ:</Form.Label>
                                    <Form.Control
                                        value={sotc}
                                        onChange={(e) => setSotc(+e.target.value)}
                                        type="number"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Mô tả môn học: </Form.Label>
                                    <Form.Control
                                        value={motamonhoc}
                                        onChange={(e) => setMotamonhoc(e.target.value)}
                                        as="textarea"
                                        rows={2}
                                    />
                                </Form.Group>


                                <Form.Group className="mb-3 col-7">
                                    <Form.Label>Tên học phần</Form.Label>
                                    <Form.Control value={tenhp} onChange={(e) => setTenhp(e.target.value)} type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3 col-2">
                                    <Form.Label>Thứ tự: </Form.Label>
                                    <Form.Control value={thutu} onChange={(e) => setThutu(e.target.value)} type="number" />
                                </Form.Group>
                                <Form.Group className="mb-3 col-3" controlId="email">
                                    <Form.Label>Tổng số:</Form.Label>
                                    <Form.Control
                                        value={soluong}
                                        onChange={(e) => setSoluong(+e.target.value)}
                                        type="number"
                                    />
                                </Form.Group>
                            </div>


                            <div className="row">
                                <Form.Group className="mb-3 col-9" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Giáo viên phụ trách</Form.Label>
                                    <Form.Control value={gvphutrach} onChange={(e) => setGvphutrach(e.target.value)} type="text" />
                                </Form.Group>
                            </div>

                            <div className="row">
                                <Form.Group className="mb-3 col-4" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Kì học</Form.Label>
                                    <Form.Select
                                        value={hocki}
                                        onChange={(e) => setHocki(e.target.value)}
                                        aria-label="Default select example"
                                    >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3 col-5" controlId="email">
                                    <Form.Label>Năm học: </Form.Label>
                                    <Form.Select value={nam} onChange={(e) => setNam(e.target.value)}>
                                        <option value="2021-2022">2021-2022</option>
                                        <option value="2022-2023">2022-2023</option>
                                        <option value="2023-2024">2023-2024</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3 col-3" controlId="email">
                                    <Form.Label>Phòng học</Form.Label>
                                    <Form.Control
                                        value={diadiemhoc}
                                        onChange={(e) => setDiadiemhoc(e.target.value)}
                                        type="text"
                                    />
                                </Form.Group>
                            </div>

                            <div className="row">
                                <Form.Group className="mb-3 col-6" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Thời gian trong tuần</Form.Label>
                                    <Form.Select value={thu} onChange={(e) => setThu(e.target.value)}>
                                        <option value="T2">T2</option>
                                        <option value="T3">T3</option>
                                        <option value="T4">T4</option>
                                        <option value="T5">T5</option>
                                        <option value="T6">T6</option>
                                        <option value="T7">T7</option>
                                        <option value="CN">CN</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3 col-3" controlId="email">
                                    <Form.Label>Từ tiết</Form.Label>
                                    <Form.Control
                                        value={tutiet}
                                        onChange={(e) => setTutiet(+e.target.value)}
                                        type="number"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3 col-3" controlId="email">
                                    <Form.Label>Đến tiết</Form.Label>
                                    <Form.Control value={dentiet} onChange={(e) => setDentiet(e.target.value)} type="number" />
                                </Form.Group>
                            </div>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Mô tả</Form.Label>
                                <Form.Control
                                    value={mota}
                                    onChange={(e) => setMota(e.target.value)}
                                    as="textarea"
                                    rows={2}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={onSubmit}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </>
    );
}
