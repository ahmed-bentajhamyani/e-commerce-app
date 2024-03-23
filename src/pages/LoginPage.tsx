import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, useForm } from "react-hook-form";

import { FirebaseError } from "firebase/app";
import { signInWithEmail } from "@/services/authService";

import { Button } from "@/components/shadcn/ui/button";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/shadcn/ui/form";
import { Input } from "@/components/shadcn/ui/input";
import { useState } from "react";

const formSchema = z.object({
    email: z.string()
        .email({ message: "Invalid email address." })
        .min(1, {
            message: "This field is required",
        }),
    password: z.string().min(1, { message: "This field is required" }),
})
export default function LoginPage() {
    const [error, setError] = useState<{ code: string, name: string, message: string } | { message: string } | null>()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: "onTouched"
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        signInWithEmail(values.email, values.password).then((userCredential) => {
            console.log(userCredential.user.displayName)
            return;
        }).catch((err: FirebaseError) => {
            if (err.code == 'auth/invalid-credential') {
                setError({ message: "Invalid email or password" })
                return;

            }
            else
                setError({ code: err.code, name: err.name, message: err.message })
            return;
        }
        )
    }
    return (
        <main className="flex min-h-full flex-col items-center justify-center p-4 md:p-24">
            <section className=" bg-section-bg flex flex-col w-full md:w-[70%] p-2 md:p-24">
                <h1>Login</h1>
                {error && <p className="text-destructive">{error.message}</p>}
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>EMAIL:</FormLabel>
                                    <FormControl onBlur={field.onBlur}>
                                        <Input {...field} required />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>PASSWORD:</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="password" required />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="w-full flex flex-col items-center">
                            <Button className="w-full p-2 uppercase rounded-none transition ease-in-out delay-150" disabled={!form.formState.isValid} type="submit">Sign In</Button>
                            <p>Don't have an account? <Button className=" text-lg" variant={"link"}>Register</Button></p>
                        </div>
                    </form>
                </Form>
            </section>
        </main>
    )
}