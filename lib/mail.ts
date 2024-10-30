import axios from "axios";

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;
  try {
    await axios.post("http://localhost:3000/api/auth/confirm-email", {
      email,
      confirmLink,
    });
  } catch (error) {
    console.log(error);
  }
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `http://localhost:3000/auth/new-password?token=${token}`;
  try {
    await axios.post("http://localhost:3000/api/auth/reset-password", {
      email,
      resetLink,
    });
  } catch (error) {
    console.log(error);
  }
};
