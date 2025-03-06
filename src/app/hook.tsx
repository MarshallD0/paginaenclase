import { useState, useEffect } from 'react';

interface User {
    picture: string;
    name: string;
    email: string;
    dob: string;
    location: string;
    phone: string;
    password: string;
}

const useRandomUser = () => {
    const [user, setUser] = useState<User | null>(null);
    const [history, setHistory] = useState<User[]>([]);

    const fetchRandomUser = async () => {
        try {
            const response = await fetch('https://randomuser.me/api/');
            const data = await response.json();
            const newUser = {
                picture: data.results[0].picture.large,
                name: `${data.results[0].name.first} ${data.results[0].name.last}`,
                email: data.results[0].email,
                dob: new Date(data.results[0].dob.date).toLocaleDateString(),
                location: `${data.results[0].location.city}, ${data.results[0].location.country}`,
                phone: data.results[0].phone,
                password: data.results[0].login.password,
            };
            setUser(newUser);
            setHistory((prevHistory) => [newUser, ...prevHistory]);
        } catch (error) {
            console.error('Error fetching random user:', error);
        }
    };

    useEffect(() => {
        fetchRandomUser();
    }, []);

    return { user, history, fetchRandomUser };
};

export default useRandomUser;