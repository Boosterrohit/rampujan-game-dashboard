"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {  Trash2, Edit, Plus, Eye } from "lucide-react"

const admins = [
  { id: 1, name: "John Admin", email: "john@casino.com", role: "Super Admin", status: "Active" },
  { id: 2, name: "Sarah Manager", email: "sarah@casino.com", role: "Manager", status: "Active" },
  { id: 3, name: "Mike Operator", email: "mike@casino.com", role: "Operator", status: "Inactive" },
  { id: 4, name: "Lisa Support", email: "lisa@casino.com", role: "Support", status: "Active" },
]

export function AdminManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Admin Management</h2>
          <p className="text-muted-foreground mt-1">Manage admin users and their permissions</p>
        </div>
         <Button className="flex items-center !bg-[#615ed6] hover:!bg-[#4e48c9] !outline-none " >
            <Plus className="w-5 h-5" />
            <span className="ml-2">Add Admin</span>
         </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Admin Users</CardTitle>
          <CardDescription>List of all admin accounts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 mb-6">
            <Input placeholder="Search admins..." className="max-w-sm" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold">Name</th>
                  <th className="text-left py-3 px-4 font-semibold">Email</th>
                  <th className="text-left py-3 px-4 font-semibold">Role</th>
                  <th className="text-center py-3 px-4  font-semibold">Status</th>
                  <th className="text-center py-3 px-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {admins.map((admin) => (
                  <tr key={admin.id} className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4">{admin.name}</td>
                    <td className="py-3 px-4">{admin.email}</td>
                    <td className="py-3 px-4">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">{admin.role}</span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span
                        className={`px-2 py-1 rounded text-sm ${admin.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                      >
                        {admin.status}
                      </span>
                    </td>
                       <td className="py-3 px-4 flex items-center justify-center gap-2">
                        <Button variant="ghost" size="sm" className="text-blue-600 !bg-blue-100 w-5 h-10 !rounded-full p-0 flex items-center justify-center">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-green-600 !bg-green-100 w-5 h-10 !rounded-full p-0 flex items-center justify-center">
                        <Edit className="w-4 h-4" />
                      </Button>
                      
                      <Button variant="ghost" size="sm" className="text-red-600 !bg-red-100 w-5 h-10 !rounded-full p-0 flex items-center justify-center">
                        <Trash2 className="w-4 h-4" />
                      </Button>
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
