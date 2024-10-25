import { useState } from 'react';

export default function Person() {
  const [person, setPerson] = useState({ firstName: "", lastName: "", age: 100 });

  const handleIncreaseAge = () => {
    const newPerson = { ...person, age: person.age + 1 };
    setPerson(newPerson);
  };

  function handleFirstNameChange(e) {
    const newPerson = { ...person, firstName: e.target.value};
    setPerson(newPerson);
  }

  function handleLastNameChange(e) {
    const newPerson = { ...person, lastName: e.target.value};
    setPerson(newPerson);
  }

  return (
    <>
      <h1>{person.firstName + ' ' + person.lastName}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
      <Input onChange={handleFirstNameChange} />
      <Input onChange={handleLastNameChange} />
    </>
  );
}

function Input({ label, onChange}) {
  return (
    <label>
      {label}
    <input onChange={onChange} />
    </label>
  )
}
