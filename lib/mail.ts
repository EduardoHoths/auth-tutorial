import axios from "axios";

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;
  try {
    await axios.post("http://localhost:3000/api/confirmEmail", {
      email,
      confirmLink,
    });
  } catch (error) {
    console.log(error);
  }
};
