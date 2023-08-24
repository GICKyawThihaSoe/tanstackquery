"use client";
import React from "react";
import UserLayout from "../../UserLayout";
import ProtectedRoute from "../../ProtectedRoute";

const page = () => {
  return (
    <UserLayout>
      <ProtectedRoute>
        <div>home</div>
      </ProtectedRoute>
    </UserLayout>
  );
};

export default page;
