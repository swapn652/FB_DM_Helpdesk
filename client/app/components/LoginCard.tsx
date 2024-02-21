'use client'
import React, { useState } from 'react';
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

export const LoginCard = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:8000/user-auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                const { token } = data;
                // Store the token in localStorage or sessionStorage
                localStorage.setItem('token', token);
                toast.success('Login successful');
            } else {
                const error = await response.json();
                toast.error(error.error);
            }
        } catch (error) {
            console.error('Error during login:', error);
            toast.error('Internal Server Error');
        }
    };

    return (
        <>
            <Card className="w-[400px] px-6">
                <CardHeader className="flex items-center">
                    <CardTitle>Login to your account</CardTitle>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col">
                                <Label htmlFor="email" className="mb-2">Email</Label>
                                <Input id="email" placeholder="Enter your email" className="mb-6" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <Label htmlFor="password" className="mb-2">Password</Label>
                                <Input id="password" placeholder="Enter your password" className="mb-4" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
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
                    <Button className="w-[100%] bg-blue-900 hover:bg-blue-900" onClick={handleLogin}>Login</Button>
                    <div className="mt-6 text-sm">New to MyApp? <a className="text-blue-700 underline" href="/">Sign Up</a></div>
                </CardFooter>
            </Card>
            <ToastContainer/>
        </>
    )
}