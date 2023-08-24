"use client";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import UserLayout from "../../UserLayout";
import Link from "next/link";
import { useMutation } from "react-query";
import { axiosInstance } from "../../axiosInstance";
import SuccessMessage from "../../components/SuccessMessage";

const page = () => {
  const [userName, setuserName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const createUser = async ({ userName, email, password, confirmPassword }) => {
    try {
      const res = await axiosInstance.post("/api/auth/register", {
        userName,
        email,
        password,
        confirmPassword,
      });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const { mutateAsync: createUserAsync } = useMutation({
    mutationKey: ["post", "/api/auth/register"],
    mutationFn: createUser,
    onSuccess: () => {
      setRegistrationSuccess(true);
      setuserName("");
      setemail("");
      setpassword("");
      setconfirmPassword("");
    },
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = { userName, email, password, confirmPassword };
    await createUserAsync(formData);
  };

  return (
    <UserLayout>
      {registrationSuccess && (
        <SuccessMessage
          description="Congratulations, your account has been successfully created."
          btn_name="Continue"
          linkUrl="/"
        />
      )}
      <div className="flex p-6 justify-center items-center min-h-screen">
        <Card className="w-96">
          <CardHeader
            variant="gradient"
            color="gray"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign Up
            </Typography>
          </CardHeader>
          <form method="POST" onSubmit={handleRegister}>
            <CardBody className="flex flex-col gap-4">
              <Input
                label="Username"
                size="lg"
                value={userName}
                onChange={(e) => setuserName(e.target.value)}
              />
              <Input
                label="Email"
                size="lg"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
              <Input
                type="password"
                label="Password"
                size="lg"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
              <Input
                type="password"
                label="Confirm Password"
                size="lg"
                value={confirmPassword}
                onChange={(e) => setconfirmPassword(e.target.value)}
              />
              <Button variant="gradient" fullWidth type="submit">
                Sign Up
              </Button>
            </CardBody>
          </form>

          <CardFooter className="pt-0">
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Link href="/" className="ml-1 font-bold">
                Sign In
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </UserLayout>
  );
};

export default page;
