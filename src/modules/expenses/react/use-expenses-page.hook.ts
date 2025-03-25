import { useDependencies } from "@root/modules/app/react/DepenciesProvider";
import { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import { ExpensesResponse } from "../core/gateways/expenses.gateway";
import { WS_URL } from "@root/modules/store/dependencies";

export const useExpensesPage = () => {
  const { expensesGateway } = useDependencies();
  const audioRef = useRef(new Audio("assets/kabuki.mp3"));

  const [expenses, setExpenses] = useState<ExpensesResponse | null>(null);

  const getExpenses = async () => {
    const expenses = await expensesGateway.getExpenses();
    setExpenses(expenses);
  };
  const wsRef = useRef<WebSocket>();

  useEffect(() => {
    getExpenses();
  }, []);

  useEffect(() => {
    let reconnectAttempt = 0;
    const maxReconnectDelay = 30000;

    const connectWebSocket = () => {
      console.log("Try to connect to WebSocket...");
      wsRef.current = new WebSocket(WS_URL);

      wsRef.current.onopen = () => {
        console.log("WebSocket connected");
        reconnectAttempt = 0;
      };

      wsRef.current.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.type === "payment-received") {
          onPaymentReceived();
          return;
        }
        getExpenses();
      };

      wsRef.current.onclose = () => {
        console.log("WebSocket connection lost");
        const delay = Math.min(
          1000 * Math.pow(2, reconnectAttempt),
          maxReconnectDelay
        );
        reconnectAttempt++;

        console.log(`Try to reconnect in ${delay / 1000} seconds...`);
        setTimeout(connectWebSocket, delay);
      };

      wsRef.current.onerror = (error) => {
        console.error("WebSocket error:", error);
      };
    };

    connectWebSocket();

    return () => {
      if (wsRef.current) {
        wsRef.current.close();
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
