import React, { useState } from "react";
import { cn } from "../utils/cn";
import AlertModal from "./AlertModal";

const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertOpen, setAlertOpen] = useState<boolean>(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleCreateAccount = async () => {
    try {
      const isValid = validateEmail(email);
      if (!isValid) {
        setAlertMessage("Account invalid");
        setAlertOpen(true);
        return;
      }

      const response = await fetch("/api/create-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setAlertMessage(data.message);
      setAlertOpen(true);
    } catch (error) {
      console.error("Error:", error);
      setAlertMessage("Internal Server Error");
      setAlertOpen(true);
    }
  };

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className="text-darkGray relative w-full py-32 flex items-center flex-col gap-16 bg-extraExtraLightGray">
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-2xl font-medium ml-6 md:ml-0">
          DO YOU WANT TO ADD YOUR BUSINESS LISTING WITH US?
        </h2>
        <p className="text-grayText text-[16px] ml-6 md:ml-0">
          ListRace offer you to list your business with us and we very much able
          to promote your Business.
        </p>
      </div>
      <div
        className={cn(
          "w-full md:w-1/2 h-fit flex justify-center items-center"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <input
          type="email"
          placeholder="Enter your email here"
          className={cn(
            "p-3 py-4 rounded-l md:w-2/3 outline-none shadow-sm transition duration-300 text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm",
            isHovered && "shadow-2xl"
          )}
          value={email}
          onChange={handleEmailChange}
        />
        <button
          className={cn(
            "bg-redPrimary text-white p-3 py-4 rounded-r font-medium hover:bg-primary-dark transition duration-300 text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm",
            isHovered && "shadow-2xl bg-red-500"
          )}
          onClick={handleCreateAccount}
        >
          Create Account
        </button>
      </div>

      <AlertModal
        open={alertOpen}
        message={alertMessage}
        onClose={() => {
          setAlertOpen(false);
          setAlertMessage("");
          setEmail("");
        }}
      />
    </div>
  );
};

export default CreateAccount;
