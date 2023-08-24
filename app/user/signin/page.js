"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";
import { useMutation } from "react-query";
import { axiosInstance } from "../../axiosInstance";
import UserLayout from "../../UserLayout";


const page = () => {
  const router = useRouter();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const loginUser = async ({ email, password }) => {
    try {
      const res = await axiosInstance.post("/auth/login", {
        email,
        password,
      });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const { mutateAsync: loginUserAsync } = useMutation({
    mutationKey: ["post", "/auth/login"],
    mutationFn: loginUser,
    onSuccess: (data) => {
      setLoginSuccess(true);
      setemail("");
      setpassword("");
      localStorage.setItem("token", data.token);
      router.push("/user/home");
    },
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = { email, password};
    await loginUserAsync(formData);
  };


  return (
    <UserLayout>
      <div className="flex p-6 justify-center items-center min-h-screen">
        <Card className="w-96">
          <CardHeader
            variant="gradient"
            color="gray"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
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
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button onClick={handleLogin} variant="gradient" fullWidth>
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Link href="/user/signup" className="ml-1 font-bold">
                Sign Up
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </UserLayout>
  );
};

export default page;
