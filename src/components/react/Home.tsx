import { Button } from "@/components/ui/button";
import { FeatureCard } from "./FeatureCard";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Tablas de Verdad
              </h1>
              <div className="w-full flex justify-center py-6">
                <img
                  alt="App Logo"
                  className="aspect-[1/1] overflow-hidden rounded-lg object-contain object-center"
                  height="140"
                  src="/tablas_de_verdad_calculadora/images/logo.png"
                  width="140"
                />
              </div>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Una aplicación móvil que facilita la generación de tablas de
                verdad, la evaluación de expresiones lógicas y el compartir
                resultados.
              </p>
            </div>

            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              {/*   <Button
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                asChild
              >
                <a href="/calculadora">Download on the App Store</a>
              </Button> */}

              <Button
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                asChild
              >
                <a href="https://play.google.com/store/apps/details?id=com.jovannyrch.tablasdeverdad">
                  Obtener en Google Play
                </a>
              </Button>

              <Button
                asChild
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              >
                <a href="/tablas_de_verdad_calculadora/calculadora">
                  Calculador Online
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                App Features
              </h2>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <FeatureCard
              title="Rápido y Preciso"
              description="Introduce una preposición lógica y obtén resultados instantáneos."
              icon="⚡️"
            />
            <FeatureCard
              title="Variedad de Operadores"
              description="Soporta más de 15 operadores lógicos básicos y avanzados para una flexibilidad máxima."
              icon="🔢"
            />
            <FeatureCard
              title="Altamente Valorado"
              description="Con una calificación de 4.5 en la Play Store y más de 200,000 descargas."
              icon="🌟"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Testimonios
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Lo que dicen los usuarios
              </h2>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                “Increíble, esta es una app muy útil en el caso de que tengamos
                ejercicios algo complicados o incluso comprobar nuestro
                resultado....“
              </blockquote>
              <div>
                <div className="font-semibold">Bruno Ramos Garavito</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Student
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                “Muy buena aplicación, me ayudo bastante, además de resultados ,
                viene en la parte superior una explicación de los conectores.“
              </blockquote>
              <div>
                <div className="font-semibold">Jorge Araya</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Software Engineer
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Descarga la App
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Descarga la aplicación móvil para Android y disfruta de todas
                las características de la calculadora de tablas de verdad.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row pt-6">
              {/*    <Button
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                asChild
              >
                <a href="/calculadora">Download on the App Store</a>
              </Button> */}

              <Button
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                asChild
              >
                <a href="https://play.google.com/store/apps/details?id=com.jovannyrch.tablasdeverdad">
                  Obtener en Google Play
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="flex flex-col items-center justify-center space-y-2 py-10">
        <div className="flex space-x-4">
          <a
            className="text-sm text-gray-600 hover:underline dark:text-gray-400"
            href="/privacidad"
          >
            Aviso de privacidad
          </a>
          <a
            className="text-sm text-gray-600 hover:underline dark:text-gray-400"
            href="/terminos"
          >
            Terminos del servicio
          </a>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://www.jovannyrch.com"
            className="text-gray-600 hover:text-blue-500 dark:text-gray-400"
          >
            jovannyrch © {currentYear}
          </a>
        </div>
      </footer>
    </>
  );
}
