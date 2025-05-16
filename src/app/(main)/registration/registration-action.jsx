// Brian's code
"use server"
import { z } from "zod";

export default async function RegistrationAction(prevState, formData) {
    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
    const username = formData.get("username");
    const password = formData.get("password");
    const confirmedpassword = formData.get("confirmedpassword");


    const schema = z.object({
        firstname: z.string().min(1, "You should write your firstname!"),
        lastname: z.string().min(1, "You should write your lastname!"),
        username: z.string().min(1, "You should write your username!"),
        password: z.string().min(1, "You should write your password!"),
        confirmedpassword: z.string().min(1, "Please confirm your password!"),
    }).refine((data) => data.password === data.confirmedpassword, {
        message: "Passwords do not match!",
        path: ["confirmedpassword"],
    });


    const validate = schema.safeParse({
        firstname,
        lastname,
        username,
        password,
        confirmedpassword,
    });

    if (!validate.success) {
        return {
            formData: {
                firstname,
                lastname,
                username,
                password,
                confirmedpassword,
            },
            errors: validate.error.format(),
        };
    }

    try {
        const response = await fetch("http://localhost:4000/api/v1/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstname,
                lastname,
                username,
                password,
            }),
        });

        const data = await response.json();

        if (response.status === 400) {
            return {
                formData: {
                    firstname,
                    lastname,
                    username,
                    password,
                    confirmedpassword,
                },
                error: data.message || "Registration failed",
            };
        }

        if (!response.ok) {
            throw new Error(data.message || "Something went wrong!");
        }
        return { success: "Registration successful! You can now log in." };

    } catch (error) {
        console.error("Registration error:", error);
        return {
            formData: {
                firstname,
                lastname,
                username,
                password,
                confirmedpassword,
            },
            error: error.message || "An error occurred during registration",
        };
    }
}


