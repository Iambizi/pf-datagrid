import React, { useEffect, useMemo, useRef, useState } from "react";
import MaterialReactTable from "material-react-table";
import { Heading, Text } from "@chakra-ui/react";
import { ThemeProvider, createTheme } from "@mui/material";

const GridCheckBoxTable = () => {
    const defaultMaterialTheme = createTheme();

    const columns = useMemo(
        () =>
          [
            //column definitions...
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
            //end
          ],
        [],
      );
    
    const data = useMemo(
        () => [
          //data definitions...
          {
            firstName: 'Dylan',
            lastName: 'Murray',
            age: 22,
            address: '261 Erdman Ford',
            city: 'East Daphne',
            state: 'Kentucky',
          },
          {
            firstName: 'Raquel',
            lastName: 'Kohler',
            age: 18,
            address: '769 Dominic Grove',
            city: 'Columbus',
            state: 'Ohio',
          },
          {
            firstName: 'Ervin',
            lastName: 'Reinger',
            age: 20,
            address: '566 Brakus Inlet',
            city: 'South Linda',
            state: 'West Virginia',
          },
          {
            firstName: 'Brittany',
            lastName: 'McCullough',
            age: 21,
            address: '722 Emie Stream',
            city: 'Lincoln',
            state: 'Nebraska',
          },
          {
            firstName: 'Branson',
            lastName: 'Frami',
            age: 32,
            address: '32188 Larkin Turnpike',
            city: 'Charleston',
            state: 'South Carolina',
          },
          //end
        ],
        [],
      );
    return ( 
    <>
        <Heading>Customizable checkboxes</Heading>
        <Text mb="3">Allows for the ability to customize checkboxes</Text>
        <ThemeProvider theme={defaultMaterialTheme}>
        <MaterialReactTable
      columns={columns}
      data={data}
      enableSelectAll={false}
      enableRowSelection
      enableColumnFilters={false}
      enableColumnActions={false}
      enableSorting={false}
      enableBottomToolbar={false}
      muiSelectCheckboxProps={({ row }) => ({
        color: 'secondary',
        disabled: row.getValue('age') < 21,
      })}
    />
        </ThemeProvider>
    </> 
    );
}
 
export default GridCheckBoxTable;