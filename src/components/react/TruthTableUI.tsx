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
    <Card className="w-full mt-8 border-none shadow-md overflow-hidden bg-card/50 backdrop-blur-sm">
      <CardHeader className="bg-secondary/20 pb-4">
        <div className="flex items-center justify-between">
          <div className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
            Paso {index}
          </div>
          <div className="text-muted-foreground text-xs font-medium">
            {step.operator.esName}
          </div>
        </div>
        <CardTitle className="text-2xl font-mono pt-2 text-center text-primary">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader className="bg-secondary/10">
            <TableRow>
              <TableHead className="text-center font-bold text-foreground">
                {step.variable1}
              </TableHead>
              {step.variable2 && (
                <TableHead className="text-center font-bold text-foreground">
                  {step.variable2}
                </TableHead>
              )}
              <TableHead className="text-center font-bold text-primary">
                Resultado
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={`row-${row.index}`}
                className="hover:bg-secondary/5 transition-colors"
              >
                {Array.from(row.combination).map((value, index) => (
                  <TableCell
                    key={`row-${row.index}-combination-${index}`}
                    className="text-center font-medium"
                  >
                    <span
                      className={
                        value === "1"
                          ? "text-green-600 dark:text-green-400"
                          : "text-red-600 dark:text-red-400"
                      }
                    >
                      {value === "0" ? "F" : "V"}
                    </span>
                  </TableCell>
                ))}
                <TableCell className="text-center">
                  <span
                    className={`px-2 py-1 rounded-md font-bold ${
                      row.result === "1"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                        : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                    }`}
                  >
                    {row.result === "0" ? "F" : "V"}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
