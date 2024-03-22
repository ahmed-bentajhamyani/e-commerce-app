import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "../components/shadcn/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../components/shadcn/ui/form";
import { Input } from "../components/shadcn/ui/input";

const formSchema = z.object({
    email: z.string()
        .email({ message: "Invalid email address." })
        .min(1, {
            message: "This field is required",
        }),
    password: z.string().min(1, { message: "This field is required" }),
})
export default function RegisterPage() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
        mode: "onTouched"
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <main className="flex min-h-full flex-col items-center justify-center p-4 md:p-24">
            <section className=" bg-section-bg flex flex-col w-full md:w-[70%] p-2 md:p-24">
                <h1>Login</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>EMAIL:</FormLabel>
                                    <FormControl onBlur={field.onBlur}>
                                        <Input {...field} />
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
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="w-full flex flex-col items-center">
                            <Button className="w-full p-2 uppercase rounded-none transition ease-in-out delay-150" disabled={!form.formState.isValid} type="submit">Sign In</Button>
                        </div>
                    </form>
                </Form>
            </section>
        </main>
    )
}