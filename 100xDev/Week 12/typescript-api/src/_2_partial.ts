// Partial makes all properties of a type optional. This is useful when you want to update only a few properties of a type.

interface User {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
};

type UpdateProps2 = Pick<User, 'name' | 'age' | 'email'>

type UpdatePropsOptional = Partial<UpdateProps2>

function update2(props: UpdatePropsOptional) {
    // 
}

update2({ name: 'John', age: 30});