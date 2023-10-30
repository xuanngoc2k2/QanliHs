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
