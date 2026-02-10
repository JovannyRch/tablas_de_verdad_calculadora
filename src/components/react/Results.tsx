import { TruthTable } from "@/classes/TruthTable";
import { useEffect, useState } from "react";
import { TruthTableUI } from "./TruthTableUI";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircledIcon } from "@radix-ui/react-icons";

interface ResultsProps {
  expression: string;
  setLoading: (value: boolean) => void;
  isLoading: boolean;
}

export const Results = ({
  expression,
  setLoading,
  isLoading,
}: ResultsProps) => {
  const [table, setTable] = useState(new TruthTable("es", expression));

  useEffect(() => {
    if (!isLoading) return;
    const table = new TruthTable("es", expression);
    table.convertInfixToPostfix();
    table.calculate();
    setTable(table);

    const random = Math.floor(Math.random() * 800) + 200;
    const timer = setTimeout(() => {
      setLoading(false);
    }, random);

    return () => {
      clearTimeout(timer);
    };
  }, [expression, isLoading]);

  if (isLoading) return null;

  return (
    <div className="flex flex-col items-center w-full space-y-8 animate-in fade-in duration-700">
      <Alert className="w-full border-primary/20 bg-primary/5 shadow-sm">
        <CheckCircledIcon className="h-5 w-5 text-primary" />
        <AlertTitle className="text-primary font-bold">
          Evaluación Completada
        </AlertTitle>
        <AlertDescription className="text-foreground/80 mt-1 uppercase tracking-wide text-xs">
          La expresión es una:{" "}
          <span className="font-bold text-primary">{table.tipo}</span>
        </AlertDescription>
      </Alert>

      <div className="w-full grid grid-cols-1 gap-8 place-items-center">
        {table.steps.map((step, index) => (
          <TruthTableUI
            key={index}
            step={step}
            table={table}
            index={step.index}
          />
        ))}
      </div>
    </div>
  );
};
