import MagicLinkForm from "@/components/magic-link-form"

export default function Home() {
    return (
        <div className='fixed left-1/2 top-1/2 mx-auto flex w-full max-w-[354px] -translate-x-1/2 -translate-y-1/2 flex-col'>
            <MagicLinkForm />
        </div>
    )
}
