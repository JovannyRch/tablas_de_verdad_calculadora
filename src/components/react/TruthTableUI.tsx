import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { TableRow as TRow } from "@/classes/TableRow";

import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import type { TruthTable } from "@/classes/TruthTable";
import type { StepProcess } from "@/classes/StepProcess";

interface TruthTableProps {
  table: TruthTable;
  step: StepProcess;
  index: number;
}

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

export const TruthTableUI = ({ table, step, index }: TruthTableProps) => {
  const title = step.isSingleVariable
    ? `${step.operator.value} ${step.variable1}`
    : `${step.variable1} ${step.operator.value} ${step.variable2}`;

  const rows = createRows(step, table);

  return (
    <Card className="w-full max-w-lg mt-8">
      <CardHeader>
        <CardTitle className="text-center">
          <div className="text-gray-400 text-sm">
            Paso {index}: {step.operator.esName}
          </div>
          <br />
          {title}
        </CardTitle>
        {/*  <CardDescription>
          The truth table for the current step of the logic expression
          evaluation.
        </CardDescription> */}
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{step.variable1}</TableHead>
              {step.variable2 && <TableHead>{step.variable2}</TableHead>}
              <TableHead>Resultado</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={`row-${row.index}`}>
                {Array.from(row.combination).map((value, index) => (
                  <TableCell key={`row-${row.index}-combination-${index}`}>
                    {value === "0" ? "F" : "V"}
                  </TableCell>
                ))}
                <TableCell>{row.result === "0" ? "F" : "V"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
