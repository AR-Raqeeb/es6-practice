const person = {name: 'Jack William', age: 17,phone: '017286373', job: 'facebooker', gfName: "Emma Watson", address: "kochukhet", friends: "abul, babul, kabul"};

const {phone, gfName, address} = person;

const complexObject = {
    name: 'abc',
    info:{
        address: 'kola bagan',
        leader: 'Tiger Vai'
    }
}

const {leader} = complexObject.info;
// const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName, phone, address);
// console.log(gfName, phone, address);
// console.log(gfName, phone, address);
// console.log(gfName, phone, address);


const friends = ['Sakib khan', 'Arman Khan', 'Salman khan', 'Amir khan', 'Shahrukh khan'];
const [chotoFriend, nextFriend, ...restFriends] = friends;
console.log(restFriends);
