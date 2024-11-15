"use client";

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { Form } from "./_components/Form";

const ContactPage = () => {
  //   const placeholders = [
  //     "Enter Your First Name:",
  //     "Enter Your First Name:",
  //     "Enter Your First Name:",
  //     "Enter Your First Name:",
  //     "Enter Your First Name:",
  //   ];

  //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     console.log(e.target.value);
  //   };
  //   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     console.log("submitted");
  //   };
  return (
    <div className="h-[40rem] flex flex-col justify-center  items-center px-4">
      {/* <h1 className="lg:my-10 dark:text-white font-unbounded lg:text-4xl text-2xl font-semibold text-center capitalize">
        Contact
      </h1>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      /> */}
      <Form />
    </div>
  );
};

export default ContactPage;
