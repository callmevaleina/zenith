import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body;

  const isValidEmail = validateEmail(email);
  if (isValidEmail) {
    res.status(200).json({ message: "Account valid" });
  } else {
    res.status(400).json({ message: "Account invalid" });
  }
}

const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
