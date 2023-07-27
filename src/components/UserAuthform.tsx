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
  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signIn("google");
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "There was an error logging in with google",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex justify-center gap-4">
      <Button
        className="w-full"
        type="button"
        size="sm"
        onClick={loginWithGoogle}
        disabled={isloading}
        isLoading={isloading}
      >
        {isloading ? null : <Icons.google className="h-4 w-4 mr-2" />}
        Google
      </Button>
    </div>
  );
};
export default UserAuthform;
