import { auth } from "@clerk/nextjs/server";

const adminIds = ["user_2lQeRPJUs4tJripTCEc8c2KYYLA"];

export const isAdmin = () => {
  const { userId } = auth();
  if (!userId) {
    return false;
  }
  return adminIds.indexOf(userId) !== -1;
};
