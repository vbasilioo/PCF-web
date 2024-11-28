import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface NavbarProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Navbar({ scrollToSection }: NavbarProps) {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <nav className="bg-orange-500 text-white p-4">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between">
        <Link href="/" className="font-semibold text-xl flex items-center space-x-2">
          <Image
            src="/icon-pcf.webp"
            alt="Logo do Projeto Criança Feliz"
            width={50}
            height={50}
            className="object-contain"
          />
          <span className="text-center justify-center items-center">Projeto Criança Feliz</span>
        </Link>
        <div className="flex flex-wrap items-center space-x-4 mt-2 md:mt-0">
          <Button
            onClick={() => scrollToSection("home")}
            className="hover:bg-white hover:text-black hover:font-bold bg-transparent border-none shadow-none px-3 py-1">
            Home
          </Button>
          <Button
            onClick={() => scrollToSection("about")}
            className="hover:bg-white hover:text-black hover:font-bold bg-transparent border-none shadow-none px-3 py-1">
            Sobre
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            className="hover:bg-white hover:text-black hover:font-bold bg-transparent border-none shadow-none px-3 py-1">
            Contato
          </Button>
          <Button
            onClick={() => handleNavigation("/login")}
            className="hover:bg-white hover:text-black hover:font-bold bg-transparent border-none shadow-none px-3 py-1">
            Painel
          </Button>
        </div>
      </div>
    </nav>
  );
}
