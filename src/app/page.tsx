"use client";

import { useState } from "react";

import { authClient } from "@/lib/auth-client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


export default function Home() {

  const {data: session} = authClient.useSession();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    authClient.signUp.email(
      {
        email,
        name,
        password,
      },
      {
        onError: () => {
          window.alert("Something went wrong");
        },
        onSuccess: () => {
          window.alert("User created successfully");
        }
      }
    );
  };

  if(session) {
    return (
      <div className="p-4 flex flex-col gap-y-4">
        <p>Logged in as {session.user.name}</p>
        <button onClick={() => authClient.signOut()}>
          Sign out
        </button>
      </div>
    )
  }

  return(
    <div className="p-4 flex flex-col gap-y-4">
      <input
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={onSubmit}>
        create user
      </Button>
    </div>
  );
};