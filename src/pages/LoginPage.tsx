import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { FirebaseError } from "firebase/app";
import { signIn } from "@/services/authService";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/shadcn/ui/form";
import { Input } from "@/components/shadcn/ui/input";
import { Button } from "@/components/shadcn/ui/button";
import { Link, useNavigate } from "react-router-dom";

const formSchema = z.object({
    email: z.string({ required_error: "This field is required" })
        .email()
        .min(1, {
            message: "This field is required",
        }),
    password: z.string({ required_error: "This field is required" }).min(4),
})
export default function LoginPage() {
    const navigate = useNavigate()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: "onTouched"
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        signIn(values.email, values.password).then(() => {
            navigate("/")
            form.clearErrors();
            return;
        }).catch((err: FirebaseError) => {
            if (err.code == 'auth/invalid-credential') {
                form.setError('root', { message: "Invalid email or password" })
            }
            else
                form.setError('root', {
                    message: `An error has occured during the authentification.
                ${err.code} - ${err.name} - ${err.message}`
                })
        }
        )
    }
    return (
        <main className="flex min-h-full flex-col items-center justify-center py-8">
            <section className=" bg-[#FBFBFB] flex flex-col w-full md:w-[70%] p-2 gap-10 md:p-8">
                <h1 className="font-playfair-display text-2xl font-bold">Login</h1>
                {form.formState.errors.root &&
                    <div className="w-full flex justify-center">
                        <p className="text-[##9a1818]">{form.formState.errors.root.message}</p>
                    </div>
                }
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>EMAIL:</FormLabel>
                                    <FormControl onBlur={field.onBlur}>
                                        <Input
                                            onChange={field.onChange}
                                            onBlur={field.onBlur}
                                            value={field.value}
                                            disabled={field.disabled}
                                            name={field.name}
                                            ref={field.ref}
                                            className="rounded-none" required />
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
                                        <Input onChange={field.onChange}
                                            onBlur={field.onBlur}
                                            value={field.value}
                                            disabled={field.disabled}
                                            name={field.name}
                                            ref={field.ref}
                                            className="rounded-none" type="password" required />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="w-full flex flex-col items-center gap-2">
                            <Button className="w-full p-2 uppercase rounded-none transition ease-in-out delay-150" disabled={!form.formState.isValid} type="submit">Sign In</Button>
                            <p>Don't have an account? <Button className=" text-lg" variant={"link"} asChild>
                                <Link to="/register">Register</Link>
                            </Button></p>
                        </div>
                    </form>
                </Form>
            </section>
        </main>
    )
}