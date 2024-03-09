"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";

export function AuthForm() {
  const form = useForm();

  const handleSubmit = form.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center space-y-1">
        <CardTitle className="text-3xl font-bold">Login</CardTitle>
        <CardDescription>
          Entre com seu e-mail ou crie uma conta
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit} className="space-y-4 p-6 pt-0">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="m@example.com"
            type="email"
            {...form.register("email")}
          />
        </div>
        <Button className="w-full" type="submit">
          Enviar Link
        </Button>
      </form>
    </Card>
  );
}
