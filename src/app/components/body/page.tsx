import React from "react";
import Image from "next/image";
import pic from "./Mithu.jpg";
import { Button } from "@/components/ui/button";

const Body = () => {
  return (
    <>
    
    {/* Make Body */}
      <div className="flex justify-between items-center mt-10 px-10 mb-10">
        <div className="text-left">
          {/* Heading */}
          <h1 className="text-3xl font-bold mb-4 text-blue-950">
            I am a Professional <br /> <b className="text-purple-700 hover:text-blue-950">Web Developer</b>
          </h1>

          {/* Small Heading */}
          <p className="text-lg text-gray-600">
            I create modern and responsive web applications.
          </p>

          {/* Button Using Shadcn */}
          <Button
            className="bg-blue-950 text-white px-6 py-2"
            variant={"default"}
          >
            You can see my Portfolio
          </Button>
        </div>

        {/* Image */}
        <Image
          src={pic}
          width={400}
          height={400}
          placeholder="blur"
          alt="Profile Photo"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Social Media Profile Links */}
      <h1 className="text-center text-white font-semibold mb-6 bg-blue-950 items-center mt-6 ">
        Visit Social Media Profile
      </h1>

      {/* Linked In */}
      <div className="flex justify-between mr-6 ml-6 mb-16">
        <div>
          <Button className="bg-blue-950 text-white px-6 py-2" variant={"default"}>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/mithu-mal-8a14781a7/"
            >
              Linked In
            </a>
          </Button>
          <p className="pr-9 text-justify text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
            excepturi earum sequi voluptates vel beatae veritatis. Sunt, aut
            dolor possimus harum ab iste doloribus nulla unde. Est sunt placeat
            fugit.
          </p>
        </div>

        {/* GitHub Link */}
        <div>
          <Button className="bg-blue-950 text-white px-6 py-2" variant={"link"}>
            <a target="_blank" href="https://github.com/Mithu3311">
              GitHub
            </a>
          </Button>
          <p className="pr-9 text-justify text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            cumque ipsa? Nulla rem, quos quam, quidem debitis error voluptatum
            enim pariatur aliquid facilis deleniti in consequuntur consequatur
            incidunt placeat? Voluptatem.
          </p>
        </div>

        {/* Vercel Link */}
        <div>
          <Button className="bg-blue-950 text-white px-6 py-2" variant={"link"}>
            <a target="_blank" href="https://vercel.com/mithu3311s-projects">
              Vercel
            </a>
          </Button>
            <p className="pr-9 text-justify text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
              tempora repellat aperiam inventore aliquam recusandae autem
              dolores rerum tenetur, harum hic animi perferendis officia
              voluptatibus nobis, qui perspiciatis fugiat adipisci.
            </p>
        </div>

        {/* Facebook Link */}
        <div>
          <Button className="bg-blue-950 text-white px-6 py-2" variant={"link"}>
            <a target="_blank" href="https://www.facebook.com/mithu.mal.94617?mibextid=JRoKGi">
              Facebook
            </a>
          </Button>
            <p className="pr-9 text-justify text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
              tempora repellat aperiam inventore aliquam recusandae autem
              dolores rerum tenetur, harum hic animi perferendis officia
              voluptatibus nobis, qui perspiciatis fugiat adipisci.
            </p>
        </div>
      </div>
    </>
  );
};

export default Body;
