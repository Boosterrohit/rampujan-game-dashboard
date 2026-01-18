"use client";
import { CreditCard, Users, Gamepad2, TrendingUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BarChart from "@/components/element/BarChart";
import DoughnutChart from "@/components/element/DoughnutChart";
import { Button } from "@/components/ui/button";

const topPlayers = [
  {
    id: 1,
    name: "John Doe",
    totalBets: "$12,450",
    winnings: "$5,320",
    status: "Active",
  },
  {
    id: 2,
    name: "Sarah Smith",
    totalBets: "$9,870",
    winnings: "$3,450",
    status: "Active",
  },
  {
    id: 3,
    name: "Mike Johnson",
    totalBets: "$8,320",
    winnings: "$2,890",
    status: "Active",
  },
  {
    id: 4,
    name: "Emma Wilson",
    totalBets: "$7,650",
    winnings: "$2,340",
    status: "Inactive",
  },
  {
    id: 5,
    name: "David Brown",
    totalBets: "$6,920",
    winnings: "$1,980",
    status: "Active",
  },
];

export function Dashboard() {
  const stats = [
    {
      title: "Total Revenue",
      value: "$24,830",
      icon: CreditCard,
      change: "+12.5%",
    },
    { title: "Active Players", value: "1,234", icon: Users, change: "+8.2%" },
    { title: "Active Games", value: "42", icon: Gamepad2, change: "+5.1%" },
    {
      title: "Net Profit",
      value: "$8,450",
      icon: TrendingUp,
      change: "+23.1%",
    },
  ];

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardContent className="pt-4 sm:pt-6">
                <div className="flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-muted-foreground truncate">
                      {stat.title}
                    </p>
                    <p className="text-lg sm:text-2xl font-bold mt-1 sm:mt-2">
                      {stat.value}
                    </p>
                    <p className="text-xs text-green-600 mt-1">{stat.change}</p>
                  </div>
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary opacity-20 flex-shrink-0" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

{/* <div className="flex flex-col md:flex-row gap-4">
  <div className="bg-white p-4 shadow-md border-2 rounded-md w-full">
    <p className="flex flex-col mb-4">
      <span className="text-xl font-semibold">
        Revenue vs Payouts
      </span>
      <span className="text-gray-400 text-sm">
        Daily comparison for the current week
      </span>
    </p>
    <BarChart />
  </div>
  <div className="bg-white p-4 shadow-md border-2 rounded-md w-full flex flex-col items-center">
    <p className="flex flex-col mb-4 items-left w-full">
      <span className="text-xl font-semibold">
        Game Distribution
      </span>
      <span className="text-gray-400 text-sm">
        Active games breakdown
      </span>
    </p>
    <DoughnutChart />
  </div>
</div> */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
  <div className="bg-white p-4 shadow-md border-2 w-full rounded-md lg:col-span-2">
    <p className="flex flex-col mb-4">
      <span className="text-xl font-semibold">
        Revenue vs Payouts
      </span>
      <span className="text-gray-400 text-sm">
        Daily comparison for the current week
      </span>
    </p>
    <div className="w-full h-[300px] sm:h-[350px]">
      <BarChart />
    </div>
  </div>
  <div className="bg-white p-4 shadow-md border-2 rounded-md lg:col-span-1">
    <p className="flex flex-col mb-4">
      <span className="text-xl font-semibold">
        Game Distribution
      </span>
      <span className="text-gray-400 text-sm">
        Active games breakdown
      </span>
    </p>
    <div className="w-full h-[300px] sm:h-[350px] flex items-center justify-center">
      <DoughnutChart />
    </div>
  </div>
</div>

      <Card>
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-lg sm:text-xl">Top Players</CardTitle>
          <CardDescription>
            Highest performing players by total bets
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full text-xs sm:text-sm px-4 sm:px-0">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 sm:py-3 px-3 sm:px-4 font-semibold">
                    Player Name
                  </th>
                  <th className="text-left py-2 sm:py-3 px-3 sm:px-4 font-semibold">
                    Total Bets
                  </th>
                  <th className="text-left py-2 sm:py-3 px-3 sm:px-4 font-semibold">
                    Winnings
                  </th>
                  <th className="text-left py-2 sm:py-3 px-3 sm:px-4 font-semibold">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {topPlayers.map((player) => (
                  <tr
                    key={player.id}
                    className="border-b border-border hover:bg-muted/50 transition-colors"
                  >
                    <td className="py-2 sm:py-3 px-3 sm:px-4 font-medium whitespace-nowrap">
                      {player.name}
                    </td>
                    <td className="py-2 sm:py-3 px-3 sm:px-4 font-semibold text-primary whitespace-nowrap">
                      {player.totalBets}
                    </td>
                    <td className="py-2 sm:py-3 px-3 sm:px-4 font-semibold text-green-600 whitespace-nowrap">
                      {player.winnings}
                    </td>
                    <td className="py-2 sm:py-3 px-3 sm:px-4">
                      <span
                        className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                          player.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {player.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
