const yona = {
  name: "Yona",
  age: 18,
  gender: "female",
};

const resolvers = {
  Query: {
    person: () => yona,
  },
};

export default resolvers;
