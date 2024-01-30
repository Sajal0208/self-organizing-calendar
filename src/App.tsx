import { useState } from "react";
import "./index.css"
import Header from "./components/Header";
import Calendar from "./components/Calendar";
import { Toaster } from "./components/Sonner";

function App() {
  return (
    <main className="bg-gray-200 min-w-screen min-h-screen flex flex-col gap-y-4">
      <Header />
      <Calendar />
      <Toaster />
    </main>
  );
}

export default App;
