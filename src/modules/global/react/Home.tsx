import { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    window.location.href = "https://buy.stripe.com/8wMfZTayya8vbbWaEG";
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50"></div>
  );
};
