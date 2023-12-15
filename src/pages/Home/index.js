import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import UploadDiemModal from '~/components/modals/UploadDiem';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { getInfo, svGetDiem } from '~/apis';
import BangDiemSV from '../BangDiemSV';

function SvHome() {
    const [csvData, setCSVData] = useState([]);
    const [userInfo, setUserInfo] = useState({});
    const [show, setShow] = useState(false);
    const [cookie, setCookie] = useCookies(['user']);
    const navigate = useNavigate();
    useEffect(() => {
        getInfo(cookie.user.masv).then((data) => {
            console.log(data)
            setUserInfo(data);
        })
        // svGetDiem(cookie.user.masv).then((data) => {
        //     setCSVData(data.data);
        // });
    }, []);
    return (<BangDiemSV data={csvData} userInfo={userInfo} />
    );
}

export default SvHome;
