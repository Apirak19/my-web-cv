import React, { FC } from "react";

// Define the props using the FC type
interface pageProps {}

import Nav from "../components/navbar";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

const page: FC<pageProps> = ({}) => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Nav />
      <h1>Contacts</h1>
      <div className="flex justify-center items-center">
        <Image
          alt="Woman listing to music"
          className="object-cover bg-blue-200 image"
          src="https://cdn.pixabay.com/photo/2023/11/10/17/10/jack-russell-8379770_1280.jpg"
          isBlurred
        />
      </div>
    </main>
  );
};

export default page;
