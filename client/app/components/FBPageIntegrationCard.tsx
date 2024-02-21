import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const FBPageIntegrationCard = () => {
  return (
    <Card className="w-[350px] h-[200px]">
        <CardHeader className = "my-6 flex items-center">
            <CardTitle className="text-lg">Facebook Page Integration</CardTitle>
        </CardHeader>
        <CardContent>
            <Button className="w-[100%] bg-blue-900 hover:bg-blue-900">Connect Page</Button>
        </CardContent>
    </Card>
  )
}
