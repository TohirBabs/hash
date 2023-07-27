"use client";
import { useMutation } from "@tanstack/react-query";
import { Button } from "./ui/Button";
import { SubscribeToSubredditPayload } from "@/lib/validators/subreddit";
import axios, { AxiosError } from "axios";
import { useCustomToast } from "@/hooks/use-custom-toast";
import { toast } from "@/hooks/use-toast";
import { startTransition } from "react";
import { useRouter } from "next/navigation";

interface Props {
  subredditId: string;
  subredditName: string;
  isSubscribed: boolean;
}
const SubscribeLeaveToggle = ({
  subredditId,
  subredditName,
  isSubscribed,
}: Props) => {
  const { loginToast } = useCustomToast();
  const router = useRouter();

  const { mutate: subscribe, isLoading: isSubLoading } = useMutation({
    mutationFn: async () => {
      const payload: SubscribeToSubredditPayload = {
        subredditId,
      };
      const { data } = await axios.post("/api/subreddit/subscribe", payload);
      return data as string;
    },

    onError: (err) => {
      if (err instanceof AxiosError) {
        if (err.response?.status === 401) {
          return loginToast();
        }
      }
      return toast({
        title: "There was a problem",
        description: "Something went wrong, please try again",
        variant: "destructive",
      });
    },
    onSuccess() {
      startTransition(() => {
        router.refresh();
      });
      return toast({
        title: "Subscribed",
        description: `You are now subscribed to h/${subredditName}`,
      });
    },
  });
  const { mutate: unSubscribe, isLoading: isUnSubLoading } = useMutation({
    mutationFn: async () => {
      const payload: SubscribeToSubredditPayload = {
        subredditId,
      };
      const { data } = await axios.post("/api/subreddit/unsubscribe", payload);
      return data as string;
    },

    onError: (err) => {
      if (err instanceof AxiosError) {
        if (err.response?.status === 401) {
          return loginToast();
        }
      }
      return toast({
        title: "There was a problem",
        description: "Something went wrong, please try again",
        variant: "destructive",
      });
    },
    onSuccess() {
      startTransition(() => {
        router.refresh();
      });
      return toast({
        title: "Unubscribed",
        description: `You are now Unsubscribed from h/${subredditName}`,
      });
    },
  });
  return isSubscribed ? (
    <Button
      isLoading={isUnSubLoading}
      onClick={() => unSubscribe()}
      className="w-full mt-1 mb-4 rounded-md"
    >
      Leave Community
    </Button>
  ) : (
    <Button
      isLoading={isSubLoading}
      onClick={() => subscribe()}
      className="w-full mt-1 mb-4 rounded-md"
    >
      Join to Post
    </Button>
  );
};

export default SubscribeLeaveToggle;
