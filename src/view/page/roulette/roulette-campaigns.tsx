"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Edit, Trash2 } from "lucide-react"

const campaigns = [
  { id: 1, name: "Weekend Bonus", startDate: "2024-01-13", endDate: "2024-01-15", status: "Active", players: 234 },
  {
    id: 2,
    name: "New Year Special",
    startDate: "2024-01-01",
    endDate: "2024-01-31",
    status: "Completed",
    players: 567,
  },
  { id: 3, name: "VIP Exclusive", startDate: "2024-01-20", endDate: "2024-02-20", status: "Scheduled", players: 0 },
]

export function RouletteCampaigns() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Roulette Campaigns</h2>
          <p className="text-muted-foreground mt-1">Create and manage promotional campaigns</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          New Campaign
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Active Campaigns</CardTitle>
          <CardDescription>All promotional campaigns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {campaigns.map((campaign) => (
              <div
                key={campaign.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50"
              >
                <div className="flex-1">
                  <p className="font-semibold">{campaign.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {campaign.startDate} to {campaign.endDate}
                  </p>
                  <p className="text-sm mt-1">
                    <span className="text-muted-foreground">Players: </span>
                    <span className="font-semibold">{campaign.players}</span>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${campaign.status === "Active" ? "bg-green-100 text-green-700" : campaign.status === "Completed" ? "bg-gray-100 text-gray-700" : "bg-blue-100 text-blue-700"}`}
                  >
                    {campaign.status}
                  </span>
                  <Button variant="ghost" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-600">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
