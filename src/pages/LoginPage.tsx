import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { FirebaseError } from "firebase/app";
import { signInWithEmail } from "@/services/authService";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/shadcn/ui/form";
import { Input } from "@/components/shadcn/ui/input";
import { Button } from "@/components/shadcn/ui/button";

const formSchema = z.object({
    email: z.string({ required_error: "This field is required" })
        .email()
        .min(1, {
            message: "This field is required",
        }),
    password: z.string({ required_error: "This field is required" }).min(4),
})
export default function LoginPage() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: "onTouched"
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        signInWithEmail(values.email, values.password).then((userCredential) => {
            console.log(userCredential.user.displayName)
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
        <main className="flex min-h-full flex-col items-center justify-center">
            <section className=" bg-section-bg flex flex-col w-full md:w-[70%] p-2 gap-10 md:p-8">
                <h1 className="font-playfair-display text-2xl font-bold">Login</h1>
                {form.formState.errors.root &&
                    <div className="w-full flex justify-center">
                        <p className="text-destructive">{form.formState.errors.root.message}</p>
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
                        <div className="w-full flex flex-col items-center gap-2">
                            <Button className="w-full p-2 uppercase rounded-none transition ease-in-out delay-150" disabled={!form.formState.isValid} type="submit">Sign In</Button>
                            <p>Don't have an account? <Button className=" text-lg" variant={"link"}>Register</Button></p>
                        </div>
                    </form>
                </Form>
            </section>
        </main>
    )
}