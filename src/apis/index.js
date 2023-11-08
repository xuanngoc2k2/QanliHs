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

export const getStudent = async (selectClass) => {
    const { data } = await axios.get(backendUrl + '/users');

    const user = data.filter((item) => {
        delete item.password;
        return item.role === 2 && item.class === selectClass;
    });

    return user;
};

export const deleteStudent = async (id) => {
    await axios.delete(backendUrl + '/users/' + id);
};

export const gvImportDiem = async (data) => {
    await axios.post(backendUrl + '/diem', data);
};

export const gvUpdateDiem = async (data, id) => {
    await axios.put(backendUrl + '/diem/' + id, data);
};

export const gvCreateCourse = async (course) => {
    console.log(course);
    return await axios.post(backendUrl + '/course', course);
};

export const gvDeleteCourse = async (id) => {
    return await axios.delete(backendUrl + '/course/' + id);
};

export const gvUpdateCourse = async (course, id) => {
    console.log(course)
    return await axios.put(backendUrl + '/course/' + id, course);
};

export const gvGetListCourse = async (search, HocKy, NamHoc) => {
    // const currentDate = new Date();
    // const currentYear = currentDate.getFullYear();
    // const currentMonth = currentDate.getMonth() + 1 < 8 ? 2 : 1;

    // const year = !!NamHoc ? NamHoc : currentYear;
    // const month = !!HocKy ? HocKy : currentMonth;
    const { data } = await axios.get(backendUrl + '/course');
    // const searchText = search.toLowerCase().trim();
    // return data.filter((item) => {
    //     const name = item.TenMH.toLowerCase();
    //     return !!name.includes(searchText);
    // });
    return data;
    // return data.filter((item) => {
    //     return item.HocKy === month && item.NamHoc === year;
    // });
};

export const gvGetCourse = async (course_id) => {
    const { data } = await axios.get(backendUrl + '/course/' + course_id);
    // console.log(data);
    return data;
};

export const gvGetDiem = async (classId) => {
    const { data } = await axios.get(backendUrl + '/diem');
    return data.filter((item) => item.id === classId);
};

export const svGetDiem = async (sv_id) => {
    const { data } = await axios.get(backendUrl + '/diem');
    return data.filter((item) => item.ma_sv === sv_id);
};
