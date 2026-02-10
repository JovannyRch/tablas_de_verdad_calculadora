import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useRef } from "react";
import { ExampleInputs } from "./ExampleInputs";
import { Results } from "./Results";
import { ReloadIcon } from "@radix-ui/react-icons";

const listOperators = [
  "¬",
  "∧",
  "∨",
  "→",
  "↔",
  "⊕",
  "(",
  ")",
  "[",
  "]",
  "⊻",
  "⊼",
  "⊽",
  "⊢",
  "⊣",
  "⊤",
  "⊥",
  "⊦",
];

const getInitialExpression = () => {
  if (typeof window !== "undefined" && window.location.search) {
    const query = new URLSearchParams(window.location.search);
    if (query.has("expression")) {
      return query.get("expression") ?? "";
    }
  }
  return "";
};

export default function Calculator() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [expression, setExpression] = useState<string>(getInitialExpression);
  const [isLoading, setIsLoading] = useState(false);
  const [finalExpression, setFinalExpression] =
    useState<string>(getInitialExpression);

  const handleOnClick = (operator: string) => {
    if (!inputRef.current) return;
    const cursorPosition = inputRef.current.selectionStart || 0;
    const newValue = `${expression.slice(0, cursorPosition)}${operator}${expression.slice(cursorPosition)}`;
    setExpression(newValue);

    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.selectionStart = cursorPosition + operator.length;
        inputRef.current.selectionEnd = cursorPosition + operator.length;
        inputRef.current.focus();
      }
    }, 0);
  };

  const onSubmit = () => {
    const expressionWithoutSpaces = expression.trim();
    setFinalExpression(expressionWithoutSpaces);
    setIsLoading(true);
  };

  const handleOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpression(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && expression && !isLoading) {
      onSubmit();
    }
  };

  return (
    <div className="flex flex-col items-center py-12 px-4 min-h-[calc(100-64px)] bg-background">
      <div className="w-full max-w-2xl space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Calculadora de Lógica
          </h1>
          <p className="text-muted-foreground">
            Genera tablas de verdad paso a paso para cualquier proposición.
          </p>
        </div>

        <Card className="border-none shadow-xl bg-card">
          <CardHeader className="pb-4">
            <CardTitle>Expresión Lógica</CardTitle>
            <CardDescription>
              Usa los botones o el teclado para ingresar tu fórmula.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-wrap gap-2 p-3 bg-secondary/30 rounded-lg border border-border/50">
              {listOperators.map((operator) => (
                <Badge
                  key={operator}
                  variant="secondary"
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors py-1.5 px-3 text-sm font-bold select-none"
                  onClick={() => handleOnClick(operator)}
                >
                  {operator}
                </Badge>
              ))}
            </div>

            <div className="space-y-4">
              <div className="relative">
                <Input
                  id="expression"
                  ref={inputRef}
                  placeholder="ej. (A y B) -> C"
                  className="text-lg py-6 shadow-inner"
                  value={expression}
                  onChange={handleOnInputChange}
                  onKeyDown={handleKeyDown}
                />
              </div>

              <div className="space-y-2">
                <Label className="text-xs text-muted-foreground ml-1">
                  Ejemplos rápidos:
                </Label>
                <ExampleInputs onClick={(value) => setExpression(value)} />
              </div>

              <Button
                className="w-full py-6 text-lg font-semibold shadow-lg hover:shadow-primary/20 transition-all mt-4"
                type="button"
                onClick={onSubmit}
                disabled={isLoading || !expression.trim()}
              >
                {isLoading ? (
                  <>
                    <ReloadIcon className="mr-2 h-5 w-5 animate-spin" />
                    Generando...
                  </>
                ) : (
                  "Generar Tabla de Verdad"
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {finalExpression && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Results
              isLoading={isLoading}
              setLoading={(value) => setIsLoading(value)}
              expression={finalExpression}
            />
          </div>
        )}
      </div>

      <footer className="mt-auto py-12 text-center text-sm text-muted-foreground">
        jovannyrch © {new Date().getFullYear()} —{" "}
        <a
          href="https://appsdemate.lat/"
          target="_blank"
          className="hover:underline"
        >
          Visitar web oficial
        </a>
      </footer>
    </div>
  );
}
