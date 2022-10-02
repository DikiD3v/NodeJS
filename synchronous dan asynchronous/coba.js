const getUserSync = (id) => {
    // let nama = '';
    // if(id === 1)
    // {
    //     nama = 'Diki';
    // }else {
    //     nama = 'Suhendi';
    // }

    const nama = id === 1 ? 'Diki' : 'Suhendi';
    return {id, nama};
}

const userSatu = getUserSync(1);
console.log(userSatu);

const userDua = getUserSync(2);
console.log(userDua);

const halo = 'Hello Word';
console.log(halo);