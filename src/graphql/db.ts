export const people = [
  {
    id: "0",
    name: "Yona",
    age: 18,
    gender: "female",
  },
  {
    id: "1",
    name: "Jisu",
    age: 18,
    gender: "female",
  },
  {
    id: "2",
    name: "Deal",
    age: 18,
    gender: "female",
  },
  {
    id: "3",
    name: "Hena",
    age: 18,
    gender: "female",
  },
  {
    id: "4",
    name: "Snow",
    age: 18,
    gender: "female",
  },
  {
    id: "5",
    name: "Mirae",
    age: 18,
    gender: "female",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => id === person.id);
  return filteredPeople[0];
};
