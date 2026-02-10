import { Button } from "@/components/ui/button";
import { FeatureCard } from "./FeatureCard";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-secondary/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                  Tablas de Verdad
                </h1>
                <div className="flex justify-center py-4">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <img
                      alt="App Logo"
                      className="relative aspect-square overflow-hidden rounded-full object-contain object-center shadow-2xl"
                      height="160"
                      src="/images/logo.png"
                      width="160"
                    />
                  </div>
                </div>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  La herramienta definitiva para la generación de tablas de
                  verdad, evaluación de expresiones lógicas y aprendizaje de
                  lógica proposicional.
                </p>
              </div>

              <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center">
                <Button
                  size="lg"
                  className="rounded-full shadow-lg hover:shadow-primary/25 transition-all"
                  asChild
                >
                  <a href="/calculadora">Ir a la Calculadora</a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full shadow-sm"
                  asChild
                >
                  <a
                    href="https://play.google.com/store/apps/details?id=com.jovannyrch.tablasdeverdad"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Descargar para Android
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-16 md:py-24 bg-card">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Características Principales
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Diseñada para estudiantes y profesionales que buscan precisión
                  y rapidez en sus evaluaciones lógicas.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                title="Rápido y Preciso"
                description="Obtén resultados instantáneos al introducir cualquier proposición lógica, sin importar su complejidad."
                icon="⚡️"
              />
              <FeatureCard
                title="+15 Operadores"
                description="Amplio soporte para operadores básicos (∧, ∨, ¬) y avanzados (⊕, ↔, →, ⊻) para máxima flexibilidad."
                icon="🔢"
              />
              <FeatureCard
                title="Comunidad Global"
                description="Únete a más de 200,000 usuarios que confían en nuestra precisión, con una calificación de 4.5 estrellas."
                icon="🌟"
              />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">
                  Testimonios
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Lo que dicen nuestros usuarios
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  quote:
                    "Increíble, esta es una app muy útil en el caso de que tengamos ejercicios algo complicados o incluso comprobar nuestro resultado.",
                  author: "Bruno Ramos Garavito",
                  role: "Estudiante",
                },
                {
                  quote:
                    "Muy buena aplicación, me ayudo bastante, además de resultados, viene una explicación muy clara de los conectores lógicos.",
                  author: "Jorge Araya",
                  role: "Ingeniero de Software",
                },
              ].map((t, i) => (
                <Card key={i} className="border-none shadow-md bg-secondary/10">
                  <CardContent className="pt-6">
                    <p className="italic text-lg mb-4 text-muted-foreground">
                      “{t.quote}”
                    </p>
                    <div className="font-bold">{t.author}</div>
                    <div className="text-sm text-muted-foreground/80">
                      {t.role}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 md:py-24 bg-primary text-primary-foreground overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Lleva la lógica contigo
                </h2>
                <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed">
                  Descarga la aplicación oficial y accede a más herramientas
                  avanzadas desde tu dispositivo móvil.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row pt-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.jovannyrch.tablasdeverdad"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="Obtener en Google Play"
                    className="h-[60px] hover:scale-105 transition-transform"
                    src="/public/images/get-it-on-google-play-badge.svg"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t py-12">
        <div className="container flex flex-col items-center justify-between gap-6 px-4 md:flex-row md:px-6">
          <div className="flex items-center gap-2">
            <img src="/images/logo.png" alt="Logo" className="h-6 w-6" />
            <span className="font-bold">Tablas de Verdad</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {currentYear}{" "}
            <a
              href="https://www.jovannyrch.com"
              className="hover:underline font-medium"
            >
              jovannyrch
            </a>
            . Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <a
              className="text-sm font-medium hover:underline underline-offset-4"
              href="/privacidad"
            >
              Privacidad
            </a>
            <a
              className="text-sm font-medium hover:underline underline-offset-4"
              href="/terminos"
            >
              Términos
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
