import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
  

export const LoginCard = () => {
    return (
        <Card className="w-[400px] px-6">
          <CardHeader className="flex items-center">
            <CardTitle>Login to your account</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col">
                  <Label htmlFor="email" className="mb-2">Email</Label>
                  <Input id="email" placeholder="Enter your email" className="mb-6"/>
                  <Label htmlFor="password" className="mb-2">Password</Label>
                  <Input id="password" placeholder="Enter your password" className = "mb-4"/>
                </div>
              </div>
            </form>
            <div className="space-x-2 mb-4 flex items-center">
                <Checkbox id="terms" />
                <label
                    htmlFor="terms"
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Remember me
                </label>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col justify-center">
            <Button className="w-[100%] bg-blue-900 hover:bg-blue-900">Login</Button>
            <div className="mt-6 text-sm">New to MyApp? <a className="text-blue-700 underline" href="/">Sign Up</a></div>
          </CardFooter>
        </Card>
      )
}
