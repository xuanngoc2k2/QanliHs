import axios from 'axios';

const backendUrl = 'http://localhost:3333';

export const login = async (masv, password) => {
    const { data } = await axios.post(
        backendUrl + '/taikhoan/login',
        { masv, password },
        {
            withCredentials: true,
        },
    );
    console.log(data);
    if (data) return data;
    else return null;
};

export const logout = async () => {
    const { data } = await axios.get(backendUrl + '/taikhoan/logout', {
        withCredentials: true,
    });
    return data;
};

export const getAllKhoa = async () => {
    const { data } = await axios.get(backendUrl + '/khoa');
    return data
}

export const getAllLopbyKhoa = async (makhoa) => {
    const { data } = await axios.get(backendUrl + '/lop/' + makhoa);
    return data
}
export const getStudent = async () => {
    const { data } = await axios.get(backendUrl + `/sinhvien`);
    return data;
};


// export const getStudentByName = async (name) => {
//     const { data } = await axios.get(backendUrl + '/user/' + name);
//     return data;
// };

export const getSvbyMsv = async (msv) => {
    try {
        const { data } = await axios.get(backendUrl + '/user/masv/' + msv);
        return data;
    } catch {
        return null;
    }
};

export const createSv = async (sv) => {
    const { data } = await axios.post(backendUrl + '/sinhvien', sv);
    return data;
};

export const updateSv = async (id, sv) => {
    const { data } = await axios.put(backendUrl + '/user/masv/' + id, sv);
    return data
}
export const deleteStudent = async (id) => {
    await axios.delete(backendUrl + '/user/' + id);
};

export const gvImportDiem = async (data) => {
    await axios.post(backendUrl + '/diem', data);
};

export const gvUpdateDiem = async (data, id) => {
    await axios.put(backendUrl + '/diem/' + id, data);
};

export const gvCreateCourse = async (course) => {
    return await axios.post(backendUrl + '/course', course);
    // console.log(course);
};

export const gvDeleteCourse = async (id) => {
    return await axios.delete(backendUrl + '/course/' + id);
};

export const gvUpdateCourse = async (course, id) => {
    // console.log(course)
    return await axios.put(backendUrl + '/course/' + id, course);
};

export const gvThongKe = async (id) => {
    const { data } = await axios.get(backendUrl + '/score/gv/count/' + id);
    // console.log(data);
    return data;
};

export const gvGetListCourse = async (search) => {
    const { data } = await axios.get(backendUrl + `/hocphan`);
    return data;
};

export const gvGetCourse = async (course_id) => {
    const { data } = await axios.get(backendUrl + '/course/' + course_id);
    // console.log(data);
    return data;
};

export const gvGetDiem = async (classId) => {
    const { data } = await axios.get(backendUrl + '/score/admin/' + classId);
    return data;
};

export const gvSearchDiemSV = async (classId, studentName) => {
    const { data } = await axios.get(backendUrl + '/score/admin/' + classId + '/' + studentName);
    return data;
};

export const gvUpdateDiemSv = async (classId, dataDiem) => {
    console.log(dataDiem);
    try {
        dataDiem.map(async (value) => {
            await axios.post(backendUrl + '/score/course/' + classId, value);
        });
    } catch (error) {
        return alert(error);
    }
    // const { data } = await axios.post(backendUrl + '/score/course/' + classId, dataDiem)
    return true;
};
export const getInfo = async (masv) => {
    const { data } = await axios.get(backendUrl + '/sinhvien/' + masv);
    return data;
};

export const svGetDiem = async (id) => {
    const { data } = await axios.get(backendUrl + '/score/student/' + id);
    return data;
};

export const getKi = async (id) => {
    const { data } = await axios.get(backendUrl + '/score/ki/' + id);
    return data;
};

export const getDiemKi = async (id, ki) => {
    const { data } = await axios.get(backendUrl + `/score/ki/${id}/${ki}`);
    // console.log(data, id, ki)
    return data;
};

export const getAllhp = async (id) => {
    const { data } = await axios.get(backendUrl + `/score/sinhvien/${id}`);
    console.log(data);
    return data;
};

export const countScoreSv = async (id) => {
    const { data } = await axios.get(backendUrl + `/score/count/${id}`);
    return data;
}