import { user } from './models/user';


//axios.post('http://localhost:3000/users', data);

const newUser = new user({ id: 'b0a7' });
newUser.fetch();

newUser.set({ name: 'newName', age: 99 });

newUser.save();


const newUser2 = new user({ name: 'ahmed', age: 21 });

newUser2.save();