// type UserAge = {
//     [key: string]: {
//         age: number;
//         name: string;
//     };
// }

// type  UserAge = Record<string, number>;
type UserAge = Record<string, { age: number; name: string }>;

const users: UserAge = {
    'John': { age: 30, name: 'John' },
    'Jane': { age: 25, name: 'Jane' },
    'Jack': { age: 35, name: 'Jack' },
}

// Map - key value pair
// const users2 = new Map()
const users2 = new Map<string, { age: number; name: string }>()
users2.set('John', { age: 30, name: 'John' })
users2.set('Jane', { age: 25, name: 'Jane' })
users2.set('Jack', { age: 35, name: 'Jack' })

const user = users2.get('John')
console.log(user);