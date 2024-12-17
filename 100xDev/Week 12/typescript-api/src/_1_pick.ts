interface User {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
  };
  
  // Pick the properties that we want to update from the User interface and create a new type UpdateProps that will be used in the update function.
  type UpdateProps = Pick<User, 'name' | 'age' | 'email'>;
  
  // Create a function that will update the user information
  function update(props: UpdateProps) {
    console.log(`Name: ${props.name}, Age: ${props.age}, Email: ${props.email}`);
  }
  

  