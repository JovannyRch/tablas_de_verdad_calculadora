import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center space-x-2">
            <img src="/images/logo.png" alt="Logo" className="h-8 w-8" />
            <span className="hidden font-bold sm:inline-block">
              Tablas de Verdad
            </span>
          </a>
        </div>
        <nav className="flex items-center gap-6">
          <a
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Inicio
          </a>
          <a
            href="/calculadora"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Calculadora
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.jovannyrch.tablasdeverdad"
            target="_blank"
            rel="noreferrer"
            className="hidden text-sm font-medium transition-colors hover:text-primary md:block"
          >
            Google Play
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
