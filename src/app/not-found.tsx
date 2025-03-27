import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="mx-auto px-4 max-w-xl py-16">
            <h2 className="text-gray-900 dark:text-white font-semibold text-lg">Not Found</h2>
            <p className="my-4 dark:text-zinc-400 text-gray-700">Could not find requested resource</p>
            <Link href="/" className="bg-gray-100 dark:bg-[#27272a] py-1.5 px-3 inline-flex items-center hover:bg-gray-200 dark:hover:bg-[#343435] transition-colors border border-gray-300 dark:border-zinc-700 select-none">Return Home</Link>
        </div>
    )
}