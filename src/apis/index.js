import axios from 'axios';

const backendUrl = 'http://localhost:3030';
// http://localhost:3030/user/login
export const login = async (email, password) => {
    const { data } = await axios.post(backendUrl + '/user/login', { email, password });
    if (data) return data;
    else return null;
    // const user = data.find((item) => {
    //     return item.email === email;
    // });
    // console.log(user);
    // if (user && user.password === password) return user;
    // return null;
};

export const getStudent = async (search) => {
    const { data } = await axios.get(backendUrl + `/user?search=${search}`);
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
    }
    catch {
        return null;
    }
};

export const createSv = async (sv) => {
    const { data } = await axios.post(backendUrl + '/user/sinh-vien', sv);
    return data;
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
    const { data } = await axios.get(backendUrl + '/score/count/' + id)
    // console.log(data);
    return data;
}

export const gvGetListCourse = async (search) => {
    const { data } = await axios.get(backendUrl + `/course?search=${search}`);
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
        })
    }
    catch (error) {
        return alert(error)
    }
    // const { data } = await axios.post(backendUrl + '/score/course/' + classId, dataDiem)
    return true
}
export const svGetDiem = async (id) => {
    const { data } = await axios.get(backendUrl + '/score/student/' + id);
    return data;
};