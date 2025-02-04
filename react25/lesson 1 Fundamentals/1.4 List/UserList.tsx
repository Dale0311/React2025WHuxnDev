const UserList = () => {
  const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 22 },
  ];
  return (
    <div>
      <hr />
      <h1>User List:</h1>
      {users.map((user) => (
        <ul key={user.id}>
          <li>Name: {user.name}</li>
          <li>Age: {user.age}</li>
        </ul>
      ))}
    </div>
  );
};

export default UserList;
