import React, { FC } from "react";
import "../globals.css";
interface pageProps {}

import Nav from "../components/navbar";
import {
  Image,
  Button,
  User,
  Link,
  Card,
  CardHeader,
  CardBody,
} from "@nextui-org/react";

const page: FC<pageProps> = ({}) => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Nav />
      <div className="flex flex-col justify-center items-center m-2">
        <section className="card-section text-center">
          <h1 className="text-4xl my-5 font-semibold">About me</h1>

          <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50 max-w-[800px]"
            shadow="sm"
          >
            <CardBody>
              <div className="grid grid-cols-12 md:grid-cols-12 gap-4 md:gap-4 justify-center">
                <div className="relative col-span-6 m-auto">
                  <Image
                    alt="Album cover"
                    className="object-cover h-[300px]"
                    shadow="md"
                    src="https://cdn.pixabay.com/photo/2023/11/10/20/32/duck-8380065_1280.jpg"
                    width="100%"
                  />
                </div>

                <div className="flex flex-col col-span-6 md:col-span-6">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-0">
                      <h1 className="text-3xl font-semibold mt-2 pl-2">
                        Apirak Fak-in
                      </h1>
                      <h3 className="font-medium text-foreground/90 pl-2 text-3xl mt-2">
                        Web Developer
                      </h3>
                      <p className="text-small text-foreground/80 mt-3 px-2">
                        A dedicated web developer proficient in a versatile tech
                        stack, including JavaScript, TypeScript, Node.js,
                        Express, React, Next.js, and MongoDB. Adept at designing
                        and implementing robust, scalable applications with a
                        focus on creating seamless user experiences. Passionate
                        about delivering modern solutions through strong
                        problem-solving skills and contributing effectively to
                        web development projects by learning from the best
                        practice and efficient methods.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>
        <h1 className="text-4xl my-5 font-semibold">Education</h1>

        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 max-w-[800px]"
          shadow="sm"
        >
          <CardBody>
            <div className="grid grid-cols-12 md:grid-cols-12 gap-4 md:gap-4 justify-center">
              <div className="relative col-span-6 m-auto">
                <Image
                  alt="Album cover"
                  className="object-cover h-[300px]"
                  shadow="md"
                  src="https://cdn.pixabay.com/photo/2023/11/10/20/32/duck-8380065_1280.jpg"
                  width="100%"
                />
              </div>

              <div className="flex flex-col col-span-6 md:col-span-6">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-0">
                    <h1 className="text-2xl font-semibold mt-2 pl-2">
                      Bachelor of Arts
                    </h1>
                    <h3 className="font-medium text-foreground/90 pl-2 text-xl">
                      Silpakorn University
                    </h3>
                    <h3 className="font-medium text-foreground/90 pl-2 text-xl">
                      (2017 - 2020)
                    </h3>
                    <h4 className="font-medium text-foreground/90 pl-2 text-xl">
                      Major: English
                    </h4>
                    <h4 className="font-medium text-foreground/90 pl-2 text-xl">
                      Minor: Information and Technology
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
        <h1 className="text-4xl my-5 font-semibold">Experience</h1>
        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 max-w-[800px]"
          shadow="sm"
        >
          <CardBody>
            <div className="grid grid-cols-12 md:grid-cols-12 gap-4 md:gap-4 justify-center">
              <div className="relative col-span-6 m-auto">
                <Image
                  alt="Album cover"
                  className="object-cover h-[300px]"
                  shadow="md"
                  src="https://cdn.pixabay.com/photo/2023/11/10/20/32/duck-8380065_1280.jpg"
                  width="100%"
                />
              </div>

              <div className="flex flex-col col-span-6 md:col-span-6">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-0">
                    <h1 className="text-3xl font-semibold mt-2 pl-2">
                      Apirak Fak-in
                    </h1>
                    <h3 className="font-medium text-foreground/90 pl-2 text-3xl mt-2">
                      Web Developer
                    </h3>
                    <p className="text-small text-foreground/80 mt-3 px-2">
                      A dedicated web developer proficient in a versatile tech
                      stack, including JavaScript, TypeScript, Node.js, Express,
                      React, Next.js, and MongoDB. Adept at designing and
                      implementing robust, scalable applications with a focus on
                      creating seamless user experiences. Passionate about
                      delivering modern solutions through strong problem-solving
                      skills and contributing effectively to web development
                      projects by learning from the best practice and efficient
                      methods.
                    </p>
                    <p>trying to add Todo here</p>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </main>
  );
};

export default page;
