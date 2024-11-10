import { user } from './models/user';

const ahmed = new user({ name: 'Ahmed', age: 25 });
console.log(ahmed.get('name')); // Output: Ahmed
console.log(ahmed.get('age')); // Output: Ahmed

ahmed.set({ name: 'Ali', age: 30 });
console.log(ahmed.get('name')); // Output: Ahmed
console.log(ahmed.get('age')); // Output: Ahmed

