import { formatAmount } from "@/lib/utils";
import React from "react";
import CountUp from "react-countup";
import AnimatedCurrencyCounter from "./AnimatedCurrencyCounter";
import { Doughnut } from "react-chartjs-2";
import DoughnutChart from "./DoughnutChart";

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotlaBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        {/* My Graph fot the balance chart will be here */}
        <DoughnutChart accounts={accounts} />
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="header-2">Bank Accounts : {totalBanks}</h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Total Current Balance</p>
          <div className="total-balance-amount flex-centre gap-2">
            <AnimatedCurrencyCounter amount={totalCurrentBalance} />
            {/* {formatAmount(totalCurrentBalance)} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
