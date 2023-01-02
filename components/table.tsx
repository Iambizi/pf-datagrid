import React, { useMemo } from "react";
import { Heading } from "@chakra-ui/react";
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import { ThemeProvider, createTheme } from '@mui/material';

interface Person {
    name: string;
    age: number;
  }
  
  //mock data - strongly typed if you are using TypeScript (optional, but recommended)
  const data: Person[] = [
    {
      name: 'John',
      age: 30,
    },
    {
      name: 'Sara',
      age: 25,
    },
  ];
  
const Table = ():JSX.Element=>{

    const defaultMaterialTheme = createTheme();
      //column definitions - strongly typed if you are using TypeScript (optional, but recommended)
  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: 'name', //simple recommended way to define a column
        header: 'Name',
        muiTableHeadCellProps: { sx: { color: 'green' } }, //custom props
      },
      {
        accessorFn: (originalRow: { age: any; }) => originalRow.age, //alternate way
        id: 'age', //id required if you use accessorFn instead of accessorKey
        header: 'Age',
        Header: <i style={{ color: 'red' }}>Age</i>, //optional custom markup
      },
    ],
    [],
  );

  return (
    <>
        <Heading mb="3">Multi Selection Table</Heading >
        <ThemeProvider theme={defaultMaterialTheme}>
        <MaterialReactTable
        columns={columns}
        data={data}
        enableRowSelection //enable some features
        enableColumnOrdering
        enableGlobalFilter={false} //turn off a feature
        />
    </ThemeProvider>
    </>
  );

}

export default Table