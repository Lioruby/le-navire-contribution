import { useDependencies } from "@root/modules/app/react/DepenciesProvider";
import { useState, useEffect, useRef } from "react";
import { ExpensesDomainModel } from "../core/models/expenses.domain-model";
import { Socket } from "socket.io-client";
import { io } from "socket.io-client";
import { BASE_URL } from "@root/modules/store/dependencies";

export const useExpensesPage = () => {
  const { expensesGateway } = useDependencies();
  const audioRef = useRef(new Audio("assets/kabuki.mp3"));

  const [expenses, setExpenses] = useState<ExpensesDomainModel.Expense | null>(
    null
  );

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
      playSound();
      getExpenses();
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

  return { expenses, playSound };
};
