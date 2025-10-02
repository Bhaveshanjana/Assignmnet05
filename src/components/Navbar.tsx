import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 mx-auto mt-2 flex w-full max-w-xl justify-between rounded-3xl border border-[#667c7c] bg-black/10 px-7 py-1.5 shadow-md backdrop-blur-xs">
      <div>
        <Link href="/" className="text-xl font-bold text-blue-600">
          <Image
            alt="Logo.png"
            src="/logo.svg"
            height={500}
            width={500}
            className="size-11"
          />
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <Link
          href="/"
          className="text-sm font-medium text-gray-400 transition-colors hover:text-blue-600"
        >
          Home
        </Link>
        <Link
          href="/dashboard"
          className="text-sm font-medium text-gray-400 transition-colors hover:text-blue-600"
        >
          Practice
        </Link>
      </div>
    </nav>
  );
}
