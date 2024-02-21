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
  

export const SignUpCard = () => {
    return (
        <Card className="w-[350px]">
          <CardHeader className="flex items-center">
            <CardTitle>Create Account</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col">
                  <Label htmlFor="name" className="mb-2">Name</Label>
                  <Input id="name" placeholder="Enter your name" className="mb-6"/>
                  <Label htmlFor="email" className="mb-2">Email</Label>
                  <Input id="name" placeholder="Enter your email" className="mb-6"/>
                  <Label htmlFor="name" className="mb-2">Name</Label>
                  <Input id="name" placeholder="Name of your project" className = "mb-4"/>
                </div>
              </div>
            </form>
            <div className="space-x-2 mb-6 flex items-center">
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
            <Button className="w-[100%] bg-blue-900">Sign Up</Button>
            <div className="mt-6 text-sm">Already have an account? <a className="text-blue-700 underline">Login</a></div>
          </CardFooter>
        </Card>
      )
}
