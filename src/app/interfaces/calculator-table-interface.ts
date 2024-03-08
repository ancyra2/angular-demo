export interface CalculatorTableInterface {
        index: number;
        column1: { status: string, value: number | string };
        column2: { status: string, value: number | string };
        rowSum: number;
        rowMultiply: number;
        rowDivide: number;
        rowMean: number;
        rowVariance: number;
}
