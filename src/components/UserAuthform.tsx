"use client";
import { FC, useState } from "react";
import { Button } from "./ui/Button";
import { signIn } from "next-auth/react";
import { Icons } from "./icons";
import { useToast } from "@/hooks/use-toast";

interface userAuthProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const UserAuthform: FC<userAuthProps> = (className, ...props) => {
  const [isloading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const loginWiihGoogle = async () => {
    setIsLoading(true);
    try {
      throw new Error("Something went wrong");
      await signIn("google");
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex justify-center gap-4">
      <Button
        onClick={loginWiihGoogle}
        isLoading={isloading}
        size="sm"
        // className="p-4"
      >
        {isloading ? null : <Icons.google className="h-4 w-4" />}
      </Button>
    </div>
  );
};
export default UserAuthform;
