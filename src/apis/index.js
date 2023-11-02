import axios from 'axios';

const backendUrl = 'http://localhost:3000';

export const login = async (email, password) => {
    const { data } = await axios.get(backendUrl + '/users');
    const user = data.find((item) => {
        return item.email === email;
    });
    if (user && user.password === password) return user;
    return null;
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
    return await axios.post(backendUrl + '/course', course);
};

export const gvUpdateCourse = async (course, id) => {
    return await axios.put(backendUrl + '/course' + id, course);
};

export const gvGetCourse = async (course_id) => {
    const { data } = await axios.get(backendUrl + '/course');
    return data.filter((item) => item.MaMH === course_id);
};

export const gvGetDiem = async (classId) => {
    const { data } = await axios.get(backendUrl + '/diem');
    return data.filter((item) => item.id === classId);
};

export const svGetDiem = async (sv_id) => {
    const { data } = await axios.get(backendUrl + '/diem');
    return data.filter((item) => item.ma_sv === sv_id);
};
