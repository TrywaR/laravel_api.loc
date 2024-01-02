
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function App({ auth }) {
    const [arrServices, setData] = useState([]);
    useEffect(() => {
        axios.get('/api/services/') // замените на свой URL API
            .then(response => {
                const arrServices = response.data
                setData(arrServices.data)
            })
            .catch(error => console.error('Ошибка получения данных:', error));
    }, []);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Services</h2>}
        >
            <Head title="Services" />

            <div class="w-80 py-4 ml-auto mr-auto">
                {arrServices.map(item => (
                    <div class="py-3 px-3 shadow flex flex-col mb-4">
                        {item.title}
                        <br />
                        <small>{item.description}</small>
                    </div>
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
