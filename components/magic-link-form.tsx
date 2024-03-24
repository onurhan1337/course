"use client"

import { useState } from "react"
import { toast } from "sonner"

export default function MagicLinkForm() {
    const [email, setEmail] = useState("")

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const response = await fetch(
            `/api/customers?email=${encodeURIComponent(email)}`
        )
        const data = await response.json()

        if (response.ok) {
            toast.success("Check your email for a login link")
        } else {
            toast.error(data.error)
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className='flex flex-col gap-4 rounded-md p-4'
        >
            <div>
                <label
                    htmlFor='email'
                    className='text-gray-1100 mb-1.5 block text-[13px]'
                >
                    Email
                </label>
                <input
                    id='email'
                    type='email'
                    value={email}
                    placeholder='name@domain.com'
                    onChange={(e) => setEmail(e.target.value)}
                    className='bg-gray-00 h-10 w-full rounded-md border border-gray-300 px-3 outline-none placeholder:text-gray-500 md:text-sm'
                    required
                    autoFocus
                />
            </div>
            <button
                className='relative mt-3 flex h-10 w-full items-center justify-center gap-2 overflow-hidden rounded-md border border-gray-300 bg-gray-200/50 text-sm font-medium transition-all hover:bg-[#F5F5F5]'
                type='submit'
            >
                Send me a login link
            </button>
        </form>
    )
}
