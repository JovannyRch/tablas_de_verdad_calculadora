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
    return "";
  }
  return "";
};

export default function Calculator() {
  const inputRef = useRef<HTMLInputElement>();

  const [expression, setExpression] = useState<string>(getInitialExpression);

  const [isLoading, setIsLoading] = useState(false);

  const [finalExpression, setFinalExpression] =
    useState<string>(getInitialExpression);

  const handleOnClick = (operator: string) => {
    const cursorPosition = inputRef.current.selectionStart;
    const newValue = `${expression.slice(
      0,
      cursorPosition
    )}${operator}${expression.slice(cursorPosition)}`;
    setExpression(newValue);
    //Set the cursor position after the operator

    inputRef.current.selectionStart = cursorPosition + 1;
    inputRef.current.selectionEnd = cursorPosition + 1;
    inputRef.current.focus();
  };

  const onSubmit = () => {
    setFinalExpression(expression);
    setIsLoading(true);
  };

  const handleOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpression(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Tablas de verdad</CardTitle>
          <CardDescription>
            Ingresa una expresión lógica para generar su tabla de verdad.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center justify-center max-w-full gap-2 px-4 mx-auto mt-6 text-sm top-full whitespace-nowrap">
            {listOperators.map((operator) => (
              <Badge key={operator} onClick={() => handleOnClick(operator)}>
                {operator}
              </Badge>
            ))}
          </div>
          <div className="space-y-4">
            <div>
              <div className="space-y-2">
                <Label htmlFor="expression"></Label>
                <Input
                  id="expression"
                  placeholder="A & B | C"
                  value={expression}
                  onChange={handleOnInputChange}
                  ref={inputRef}
                />
              </div>
              <ExampleInputs onClick={(value) => setExpression(value)} />
            </div>
            <div className="mt-[8px] pt-[12px]">
              <Button
                className="w-full"
                type="button"
                onClick={() => onSubmit()}
                disabled={isLoading || !expression}
              >
                Generar tabla de verdad&nbsp;
                {isLoading && (
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {finalExpression && (
        <Results
          isLoading={isLoading}
          setLoading={(value) => setIsLoading(value)}
          expression={finalExpression}
        />
      )}
    </div>
  );
}
