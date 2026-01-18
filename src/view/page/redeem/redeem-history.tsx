"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const history = [
  {
    id: 1,
    player: "Player 001",
    amount: "$500",
    method: "Bank Transfer",
    date: "2024-01-10",
    processedDate: "2024-01-11",
    status: "Completed",
  },
  {
    id: 2,
    player: "Player 002",
    amount: "$250",
    method: "E-Wallet",
    date: "2024-01-09",
    processedDate: "2024-01-09",
    status: "Completed",
  },
  {
    id: 3,
    player: "Player 005",
    amount: "$1500",
    method: "Crypto",
    date: "2024-01-08",
    processedDate: "2024-01-08",
    status: "Completed",
  },
  {
    id: 4,
    player: "Player 003",
    amount: "$1000",
    method: "Crypto",
    date: "2024-01-07",
    processedDate: "2024-01-07",
    status: "Rejected",
  },
]

export function RedeemHistory() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold">Redeem Request History</h2>
        <p className="text-muted-foreground mt-1">View historical redemption records</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Redemption Records</CardTitle>
          <CardDescription>All past redemption requests</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 mb-6">
            <Input placeholder="Search history..." className="max-w-sm" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold">Player</th>
                  <th className="text-left py-3 px-4 font-semibold">Amount</th>
                  <th className="text-left py-3 px-4 font-semibold">Method</th>
                  <th className="text-left py-3 px-4 font-semibold">Requested</th>
                  <th className="text-left py-3 px-4 font-semibold">Processed</th>
                  <th className="text-left py-3 px-4 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {history.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4">{item.player}</td>
                    <td className="py-3 px-4 font-semibold">{item.amount}</td>
                    <td className="py-3 px-4">{item.method}</td>
                    <td className="py-3 px-4">{item.date}</td>
                    <td className="py-3 px-4">{item.processedDate}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded text-sm font-semibold ${item.status === "Completed" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                      >
                        {item.status}
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
