import { useState } from "react"
import type { FormEvent } from "react"
import {
    Field,
    FieldGroup,
    FieldLabel,
    FieldSet,
} from "./ui/field"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

type InputProps = {
    label: string
    id: string
    placeholder: string
    type: "text" | "email"
}

const InputField = ({
    label,
    id,
    placeholder,
    type
}: InputProps) => (
    <Field>
        <FieldLabel htmlFor={id}>
            {label} *
        </FieldLabel>
        <Input
            id={id}
            name={id}
            placeholder={placeholder}
            required
            type={type}
        />
    </Field>
)

const inputs = [
    {
        label: "Full Name",
        id: "full_name",
        placeholder: "John Doe",
        type: "text"
    },
    {
        label: "Email Address",
        id: "email",
        placeholder: "johndoe@email.com",
        type: "email"
    },
    {
        label: "Subject",
        id: "subject",
        placeholder: "What's your message about?",
        type: "text"
    },
]

const buttonClass = "font-mono p-2 rounded-sm px-[12px] py-[8px] border duration-300 transition-all backdrop-blur-xs"

const ContactForm = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        formData.append("access_key", import.meta.env.VITE_EMAIL_KEY);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        setResult(data.success ? "Success!" : "Error");

        setTimeout(() => {
            setResult("")
        }, 5000)
    };

    return (
        <div className="w-[90%] md:w-1/2 xl:w-1/3 bg-[#0E161050] backdrop-blur-xs p-6 border border-white/15 rounded-xl">
            <form onSubmit={onSubmit}>
                <FieldGroup>
                    <FieldSet>
                        <FieldGroup>
                            {
                                inputs.map((input) => (
                                    <InputField
                                        key={input.id}
                                        label={input.label}
                                        id={input.id}
                                        placeholder={input.placeholder}
                                        type={input.type}
                                    />
                                ))
                            }
                            <Field>
                                <FieldLabel htmlFor="message">
                                    Message *
                                </FieldLabel>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="Write your message here..."
                                    required
                                />
                            </Field>
                        </FieldGroup>
                    </FieldSet>
                    <Field>
                        <button 
                            type="submit" 
                            className={`${buttonClass} bg-white/90 text-black hover:bg-white cursor-pointer`}
                        >
                            Submit
                        </button>
                    </Field>
                </FieldGroup>
            </form>
            {
                result && 
                <span className="mt-2">{result}</span>
            }
        </div>
    )
}

export default ContactForm