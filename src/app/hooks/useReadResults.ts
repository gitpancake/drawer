"use client";

import { useEffect, useMemo, useState } from "react";
import { useContractRead } from "wagmi";
import { useConfettiContext } from "../context/ConfettiContext";

const results = [
  "delta_alpha_ohm",
  "kcdilla_eth",
  "goldytalks",
  "dotjiwa",
  "LucaGabinoeth",
  "gabewise",
  "clay_devlin",
  "ozarktrent",
  "_sross_",
  "beyondm3ta",
  "ronakdaya",
  "lapitanlagao",
  "asemen",
  "doka3bi",
  "Bibldibabldibu2",
  "niemeyerfelix",
];

const address = "0xb6a371e05cfbd73ee293699c4bb7d8e60472a6f3";
const abi = [
  {
    inputs: [{ internalType: "string", name: "key", type: "string" }],
    name: "viewResults",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function",
  },
] as const;

interface Props {
  key: number;
}

export const useReadResults = ({ key }: Props) => {
  const [winners, setWinners] = useState<string[]>([]);
  const { setConfetti } = useConfettiContext();

  //@ts-ignore - i made a mistake on the contract abi, should be a string
  const { data } = useContractRead({ address, abi, functionName: "viewResults", args: [BigInt(key)] });

  useEffect(() => {
    if (!data) {
      return;
    }

    const rawWinners = data.map((p) => Number(p));
    const sortedByIndex = rawWinners.sort((a, b) => a - b);

    const winners = sortedByIndex.map((p) => results[p - 1]);

    setWinners(winners);
    setConfetti(true);
  }, [data, setConfetti]);

  return useMemo(() => {
    return {
      winners,
    };
  }, [winners]);
};
