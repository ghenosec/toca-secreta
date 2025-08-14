import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-1 bg-gradient-to-r from-black via-gray-950 to-gray-900">
      <div className="container mx-auto px-4 flex justify-center">
        <Link href="/">
          <Image
            src="/toca-secreta-logo.png"
            alt="Toca Secreta Logo"
            width={220}
            height={110}
            priority
            className="w-48 md:w-56 lg:w-64"
          />
        </Link>
      </div>
    </header>
  );
}