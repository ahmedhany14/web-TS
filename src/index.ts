import { user } from './models/user';

const newUser = new user({ id: "3ac2" });


newUser.on('change', () => {
    console.log('user was changed');
    console.log(newUser.get('name'));
    console.log(newUser.get('age'));
    console.log(newUser.get('id'));

})

newUser.on('save', () => {
    console.log('user was saved');
    console.log(newUser.get('name'));
    console.log(newUser.get('age'));
    console.log(newUser.get('id'));
})

newUser.on('error', () => {
    console.log('there is an error user was not saved');
})

newUser.fetch();

newUser.set({ name: '3amo Hany', age: 25 });

newUser.save();