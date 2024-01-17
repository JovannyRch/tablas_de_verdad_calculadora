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
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { useState } from "react";
import { ExampleInputs } from "./ExampleInputs";

export default function Calculator() {
  const [expression, setExpression] = useState<string>("");
  const [hasSolution, setHasSolution] = useState(false);

  const handleOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpression(e.target.value);
  };

  const goToResults = () => {
    //Go to /result and append the expression to the url
    const url = new URL("/result", window.location.origin);
    url.searchParams.append("expression", "A & B | C");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Tablas de verdad</CardTitle>
          <CardDescription>
            Ingresa una expresión lógica para generar su tabla de verdad.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="expression"></Label>
              <Input
                id="expression"
                placeholder="A & B | C"
                value={expression}
                onChange={handleOnInputChange}
              />
            </div>
            <ExampleInputs onClick={(value) => setExpression(value)} />
            <Button
              className="w-full"
              type="button"
              onClick={() => setHasSolution(true)}
            >
              Generar tabla de verdad
            </Button>
          </div>
        </CardContent>
      </Card>
      {hasSolution && (
        <Card className="w-full max-w-lg mt-8">
          <CardHeader>
            <CardTitle>Truth Table</CardTitle>
            <CardDescription>
              The truth table for the current step of the logic expression
              evaluation.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>A</TableHead>
                  <TableHead>B</TableHead>
                  <TableHead>Result</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>True</TableCell>
                  <TableCell>True</TableCell>
                  <TableCell>True</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>True</TableCell>
                  <TableCell>False</TableCell>
                  <TableCell>False</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>False</TableCell>
                  <TableCell>True</TableCell>
                  <TableCell>False</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>False</TableCell>
                  <TableCell>False</TableCell>
                  <TableCell>False</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
