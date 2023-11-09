import React from 'react';
import users from './users';

// TODO - 2
// Import variabel users dari file users.js


const UsersController = () => {
    async () => {
        console.log(await formatUser())
        console.log(await findByName())
        console.log(await filterByMajor)
    }
    return (
        <div>
            <h3>Cek hasilnya pada konsole</h3>
        </div>
    );
}

// TODO - 3
// Buatlah function formatUser yang menampilkan seluruh nama users
// Gunakan metode async await
// Gunakan metode map untuk format user
const formatUser = async (dataUsers) => {
    try {
        const formattedUsers = await Promise.all(dataUsers.map(async (user) => {
            const formattedName = await new Promise(resolve => setTimeout(() => resolve(`Formatted: ${user.name}`), 1000));
            return { ...user, formattedName };
        }));

        console.log('Hasil Format:', formattedUsers);
    } catch (error) {
        console.error('Terjadi Kesalahan:', error.message);
    }
}
formatUser()
    

// TODO - 4
// Buatlah function findByName yang mencari 1 user berdasarkan nama
// Gunakan metode async await
// Gunakan metode find untuk mencari user
const findByName = async (name) => {
    const user = await users.find(user => user.name === name);
    return user;
    }



// TODO - 5
// Buatlah function filterByMajor yang mencari semua user berdasarkan major
// Gunakan metode async await
// Gunakan metode filter untuk menyaring user
const filterByMajor = async (major) => {
    const Users = await users.filter(user => user.major === major);
    return Users;
}

export default UsersController;
