import type { StepProcess } from "@/classes/StepProcess";
import { TableRow as TRow } from "@/classes/TableRow";
import { TruthTable } from "@/classes/TruthTable";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { TruthTableUI } from "./TruthTableUI";

const createRows = (step: StepProcess, table: TruthTable): TRow[] => {
  const rows: TRow[] = [];
  const variables = step.isSingleVariable
    ? [step.variable1]
    : [step.variable1, step.variable2];
  for (let i = 0; i < table.totalRows; i++) {
    let combination = "";
    for (let j = 0; j < variables.length; j++) {
      combination += table.columns[variables[j]][i];
    }
    let result = table.columns[step.toString()]![i];
    rows.push(new TRow(i, combination, result));
  }
  return rows;
};

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
  const [steps, setSteps] = useState<StepProcess[]>([]);
  const [rows, setRows] = useState<TRow[]>([]);
  const [variables, setVariables] = useState<string[]>([]);

  const totalSteps = steps.length;

  useEffect(() => {
    const table = new TruthTable("es", expression);
    table.convertInfixToPostfix();
    table.calculate();
    const variables = table.variables;

    const lastStep = table.steps[table.steps.length - 1];
    const rows: TRow[] = createRows(lastStep, table);

    setRows(rows);
    setSteps(table.steps);
    setVariables(variables);

    const random = Math.floor(Math.random() * 1000);
    const timer = setTimeout(() => {
      setLoading(false);
    }, random);

    return () => {
      clearTimeout(timer);
    };
  }, [expression]);

  if (isLoading) return;

  return (
    <>
      {steps.map((step, index) => (
        <TruthTableUI
          key={index}
          expression={step.toString()}
          variables={variables}
          rows={rows}
        />
      ))}
    </>
  );
};
