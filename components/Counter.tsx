"use client";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store";
import {
  increment,
  decrement,
  incrementByAmount,
} from "@/lib/slices/counterSlice";

const Counter = () => {
  const [incrementAmount, setIncrementAmount] = useState("2");
  const count = useSelector((state: RootState) => state.counter.value);
  const history = useSelector((state: RootState) => state.counter.history);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <div className="flex items-center justify-center space-x-4">
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          -
        </button>
        <span className="text-2xl font-bold">{count}</span>
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          +
        </button>
      </div>
      <div className="mt-4">
        <input
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
          className="w-20 px-2 py-1 border rounded"
        />
        <button
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Ajouter
        </button>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold">Historique :</h3>
        <ul className="list-disc list-inside">
          {history.slice(-5).map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Counter;
