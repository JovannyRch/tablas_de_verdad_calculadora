import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { TableRow as TRow } from "@/classes/TableRow";

import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";

interface TruthTableProps {
  expression: string;
  variables: string[];
  rows: TRow[];
}

export const TruthTableUI = ({
  expression,
  variables,
  rows,
}: TruthTableProps) => {
  return (
    <Card className="w-full max-w-lg mt-8">
      <CardHeader>
        <CardTitle className="text-center">{expression}</CardTitle>
        {/*  <CardDescription>
          The truth table for the current step of the logic expression
          evaluation.
        </CardDescription> */}
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              {variables.map((variable) => (
                <TableHead key={variable}>{variable}</TableHead>
              ))}
              <TableHead>Result</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={`row-${row.index}`}>
                {Array.from(row.combination).map((value, index) => (
                  <TableCell key={`row-${row.index}-combination-${index}`}>
                    {value}
                  </TableCell>
                ))}
                <TableCell>{row.result}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
