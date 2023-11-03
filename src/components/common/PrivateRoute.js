import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
    const [cookie, setCookie] = useCookies(['user']);
    const navigate = useNavigate();

    useEffect(() => {
        if (!cookie.user) navigate('/login');
    }, [cookie.user]);

    return <div>{children}</div>;
}
