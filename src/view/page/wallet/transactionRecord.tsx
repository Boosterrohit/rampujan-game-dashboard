"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const transactions = [
  { id: 1, player: "Player 001", type: "Deposit", amount: "$100", date: "2024-01-13", status: "Success" },
  { id: 2, player: "Player 002", type: "Withdrawal", amount: "$250", date: "2024-01-13", status: "Success" },
  { id: 3, player: "Player 003", type: "Bet", amount: "$50", date: "2024-01-13", status: "Success" },
  { id: 4, player: "Player 004", type: "Winnings", amount: "$500", date: "2024-01-13", status: "Success" },
  { id: 5, player: "Player 005", type: "Deposit", amount: "$200", date: "2024-01-12", status: "Failed" },
]

export function TransactionRecords() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold">Transaction Records</h2>
        <p className="text-muted-foreground mt-1">View all wallet transactions</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Transactions</CardTitle>
          <CardDescription>Complete transaction history</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 mb-6">
            <Input placeholder="Search transactions..." className="max-w-sm" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold">Player</th>
                  <th className="text-left py-3 px-4 font-semibold">Type</th>
                  <th className="text-left py-3 px-4 font-semibold">Amount</th>
                  <th className="text-left py-3 px-4 font-semibold">Date</th>
                  <th className="text-left py-3 px-4 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx) => (
                  <tr key={tx.id} className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4">{tx.player}</td>
                    <td className="py-3 px-4">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">{tx.type}</span>
                    </td>
                    <td className="py-3 px-4 font-semibold">{tx.amount}</td>
                    <td className="py-3 px-4">{tx.date}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded text-sm ${tx.status === "Success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                      >
                        {tx.status}
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
  )
}
