"use client";
import LoginForm from "@/components/LoginForm";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

export default function Home() {
  const { user } = useSelector((state: RootState) => state.auth);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {user ? <div className="text-3xl">Welcome</div> : <LoginForm />}
    </main>
  );
}
