"use client";

import { formatAmount } from "@/lib/utils";
import React from "react";
import CountUp from "react-countup";

const AnimatedCurrencyCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp decimals={2} prefix="INR" separator="," end={amount} />
    </div>
  );
};

export default AnimatedCurrencyCounter;
