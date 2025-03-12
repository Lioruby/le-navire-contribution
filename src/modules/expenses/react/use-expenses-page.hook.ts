import { useDependencies } from "@root/modules/app/react/DepenciesProvider";
import { useState, useEffect, useRef } from "react";
import { Socket } from "socket.io-client";
import { io } from "socket.io-client";
import { BASE_URL } from "@root/modules/store/dependencies";
import confetti from "canvas-confetti";
import { ExpensesResponse } from "../core/gateways/expenses.gateway";

export const useExpensesPage = () => {
  const { expensesGateway } = useDependencies();
  const audioRef = useRef(new Audio("assets/kabuki.mp3"));

  const [expenses, setExpenses] = useState<ExpensesResponse | null>(null);

  const getExpenses = async () => {
    const expenses = await expensesGateway.getExpenses();
    setExpenses(expenses);
  };

  useEffect(() => {
    getExpenses();
  }, []);

  const socketRef = useRef<Socket>();

  useEffect(() => {
    socketRef.current = io(BASE_URL, {
      transports: ["websocket"],
      reconnection: true,
      timeout: 10000,
    });

    socketRef.current.on("get-ledger-activity", () => {
      onPaymentReceived();
    });

    socketRef.current.on("connect_error", (error) => {
      console.error("Connection error:", error);
    });

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, []);

  const playSound = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(console.error);
  };

  const onPaymentReceived = () => {
    playSound();
    getExpenses();
    fireConfetti();
  };

  return { expenses, playSound, onPaymentReceived };
};

const fireConfetti = () => {
  // Left
  confetti({
    particleCount: 200,
    spread: 120,
    origin: { y: 0.3, x: 0.1 },
    colors: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"],
    startVelocity: 30,
    gravity: 0.8,
    ticks: 300,
  });

  // Center
  confetti({
    particleCount: 200,
    spread: 120,
    origin: { y: 0.3, x: 0.5 },
    colors: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"],
    startVelocity: 30,
    gravity: 0.8,
    ticks: 300,
  });

  // Right
  confetti({
    particleCount: 200,
    spread: 120,
    origin: { y: 0.3, x: 0.9 },
    colors: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"],
    startVelocity: 30,
    gravity: 0.8,
    ticks: 300,
  });
};
