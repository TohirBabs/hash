import React from "react";
import { Icons } from "./icons";
import Link from "next/link";
import UserAuthform from "./UserAuthform";

const SignUp = () => {
  return (
    <div className="container mx-auto flex-col justify-center space-y-6 sm:w-[400px] ">
      <div className="flex flex-col space-y-2 text-center">
        <Icons.logo className="mx-auto w-8 h-8 sm:h-6 sm:w-6" />
        <h1 className="text-2xl font-bold tracking-tight">Sign up</h1>
        <p className="text-xs max-w-xs mx-auto">
          By signing in, you agree to hash&#39;s user agreement and privacy
          policy.
        </p>
        <UserAuthform />
        <p className="px-8 text-center text-sm text-zinc-700">
          Already a hasher?{" "}
          <Link
            href="/sign-in"
            className="text-zinc-500 hover:underline hover:text-zinc-900 text-sm underline-offset-4"
          >
            sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
