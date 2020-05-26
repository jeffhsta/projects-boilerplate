import User from "@src/types/user";

const getById = async (_userId: String): Promise<User | undefined> => {
  throw new Error("Function not implemented yet!");
};

const insert = async (_user: User): Promise<User> => {
  throw new Error("Function not implemented yet!");
};

const update = async (_user: User): Promise<User> => {
  throw new Error("Function not implemented yet!");
};

const queryByFieldXandY = async (_user: User): Promise<User[]> => {
  throw new Error("Function not implemented yet!");
};


export default {
  getById,
  insert,
  update,
  queryByFieldXandY,
};
