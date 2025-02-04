const Greetings = () => {
  const name = 'John Doe';
  const currDate = new Date().toLocaleDateString();

  return (
    <div>
      <h1>Hello {name}</h1>
      <h3>Current Date {currDate}</h3>
    </div>
  );
};

export default Greetings;
