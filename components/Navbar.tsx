import Link from "next/link"; 

export default function Navbar(){
    return (
        <nav className="max-w-3xl mx-auto flex py-4 gap-x-4">
            <Link href="/">Home</Link>
            <Link href="/counter">Counter</Link>
            <Link href="/tours">Tours</Link>
            <Link href="/actions">Actions</Link>
        </nav>
    )
}