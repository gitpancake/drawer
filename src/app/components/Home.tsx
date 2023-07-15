"use client";

import Link from "next/link";
import { useState } from "react";
import { useReadResults } from "../hooks/useReadResults";

export const Home = () => {
  const [key] = useState<number>(1689353268);
  const [contract] = useState<string>("0xb6a371e05cfbd73ee293699c4bb7d8e60472a6f3");
  const { winners } = useReadResults({ key });

  return (
    <div className="flex flex-col justify-center text-center gap-4">
      <h2 className="text-4xl">Flow Mint Ticket Winners</h2>
      <p className="text-base">
        Chooser Contract:{" "}
        <Link href="https://etherscan.io/address/0xb6a371e05cfbd73ee293699c4bb7d8e60472a6f3" target="_black">
          {`${contract.substring(0, 6)}...${contract.substring(contract.length - 6)}`}
        </Link>
      </p>
      <p className="text-base">Results Key: {key}</p>
      {winners && <p className="text-xl">Congratulations!</p>}
      <div className="flex flex-col gap-2 mt-8">
        {winners?.map((winner) => {
          return (
            <Link key={winner} href={`https://twitter.com/${winner}`} target="_blank">
              <p className="text-base">{winner}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
