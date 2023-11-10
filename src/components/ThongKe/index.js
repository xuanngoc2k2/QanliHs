import { useEffect, useState } from "react";
import { gvThongKe } from "~/apis";
import GradeDistributionChart from "../GradeDistributionChart";

function ThongKe() {
    const [data, setData] = useState([{}]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await gvThongKe();
                setData([response]);
            } catch (error) {
                console.error('Lỗi lấy dữ liệu', error);
            }
        };
        fetchData()
    }, [])
    // console.log(data);
    return (
        <div className="d-flex">
            {data.map((value, index) => {
                return <GradeDistributionChart key={index} data={value} />
            })}
        </div>
    );
}

export default ThongKe;