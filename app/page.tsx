"use client";

import { CreateUserModalWindow } from "@/features/CreateUserModalWindow";

export default function Home() {
  return (
    <div className='flex justify-center items-center h-full'>
      <CreateUserModalWindow />
    </div>
  );
}
