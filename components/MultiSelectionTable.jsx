import React, { useMemo, useState } from "react";
import { Heading } from "@chakra-ui/react";
import MaterialReactTable from "material-react-table";
import { ThemeProvider, createTheme } from "@mui/material";


//mock data - strongly typed if you are using TypeScript (optional, but recommended)
const data = [
  {
    userId: '3f25309c-8fa1-470f-811e-cdb082ab9017', //we'll use this as a unique row id
    firstName: 'Dylan',
    lastName: 'Murray',
    age: 22
  }, //data definitions...
  {
    userId: 'be731030-df83-419c-b3d6-9ef04e7f4a9f',
    firstName: 'Raquel',
    lastName: 'Kohler',
    age: 18
  },
  //end
];

const MultiSelectionTable = ({ posts }) => {
  // const [rowSelection, setRowSelection] = useState{};

  const defaultMaterialTheme = createTheme();
  //column definitions - strongly typed if you are using TypeScript (optional, but recommended)
  const columns = useMemo(
    //column definitions...
    () => [
      {
        accessorKey: 'firstName',
        header: 'First Name',
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
      },
      {
        accessorKey: 'age',
        header: 'Age',
      }
    ],
    [], //end
  );

  return (
    <>
      <Heading mb="3">Multi Selection Table</Heading>
      <ThemeProvider theme={defaultMaterialTheme}>
      <MaterialReactTable
      columns={columns}
      data={data}
      enableRowSelection
      enableColumnActions={false}
      enableColumnFilters={false}
      enablePagination={false}
      enableSorting={false}
      enableBottomToolbar={false}
      enableTopToolbar={false}
      getRowId={(row) => row.userId} //give each row a more useful id
      //pass our managed row selection state to the table to use
    />
      </ThemeProvider>
    </>
  );
};

export default MultiSelectionTable;
