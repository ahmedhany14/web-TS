import { user } from './models/user';

const newUser = new user({ name: 'newUser', age: 30 });

console.log(newUser.get('name'))

newUser.on('change', () => {
    console.log('change');
})