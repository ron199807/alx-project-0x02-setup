import Link from "next/link"

export const Header = () => {
    return (
        <div className="flex items-center space-x-6">
          <nav className="flex items-center space-x-6">
            <Link href="/home" className="hover:text-blue-500">
              Home
            </Link>
            <Link href="/about" className="hover:text-blue-500">
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-500">
              Contact
            </Link>
          </nav>
         </div>
    )
}