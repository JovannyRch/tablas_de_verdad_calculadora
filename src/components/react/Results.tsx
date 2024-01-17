import { TruthTable } from "@/classes/TruthTable";
import { useEffect, useState } from "react";
import { TruthTableUI } from "./TruthTableUI";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { RocketIcon } from "@radix-ui/react-icons";

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

    const random = Math.floor(Math.random() * 1000);
    const timer = setTimeout(() => {
      setLoading(false);
    }, random);

    return () => {
      clearTimeout(timer);
    };
  }, [expression, isLoading]);

  if (isLoading) return;

  return (
    <>
      <Alert className="w-full max-w-lg mt-8">
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Evaluación</AlertTitle>
        <AlertDescription>{table.tipo}</AlertDescription>
      </Alert>
      {table.steps.map((step, index) => (
        <TruthTableUI
          key={index}
          step={step}
          table={table}
          index={step.index}
        />
      ))}
    </>
  );
};
