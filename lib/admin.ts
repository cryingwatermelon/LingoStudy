import { auth } from "@clerk/nextjs/server";
export const isAdmin = async () => {
  const { userId } = auth();
};
