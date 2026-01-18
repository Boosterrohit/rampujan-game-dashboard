"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus } from "lucide-react"

export function LoadWallet() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Load Wallet</h2>
          <p className="text-muted-foreground mt-1">Add funds to player wallets</p>
        </div>
        <Button className="gap-2 bg-[#615ed6]! hover:bg-[#4e48c9]!">
          <Plus className="w-4 h-4" />
          Load Wallet
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Wallet Loading Form</CardTitle>
          <CardDescription>Enter player details to load funds</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6 max-w-md">
            <div className="space-y-2">
              <label className="text-sm font-semibold">Player ID / Email</label>
              <Input placeholder="Enter player ID or email" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Amount to Load</label>
              <div className="flex gap-2">
                <Input placeholder="Enter amount" type="number" />
                <Button type="button" className="bg-[#615ed6]! hover:bg-[#4e48c9]!">USD</Button>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Description</label>
              <Input placeholder="Optional description" />
            </div>
            <Button className="w-full bg-[#615ed6]! hover:bg-[#4e48c9]!">Load Wallet</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Loading History</CardTitle>
          <CardDescription>Last 5 wallet loads</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex justify-between items-center p-3 border rounded">
                <div>
                  <p className="font-semibold">Player {String(i).padStart(3, "0")}</p>
                  <p className="text-sm text-muted-foreground">2024-01-13</p>
                </div>
                <p className="font-bold text-lg">+${100 * i}.00</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
