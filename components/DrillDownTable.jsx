import React, { useEffect, useMemo, useRef, useState } from "react";
import MaterialReactTable from "material-react-table";
import { Heading } from "@chakra-ui/react";
import { ThemeProvider, createTheme } from "@mui/material";

const DrillDownTable = () => {
    const defaultMaterialTheme = createTheme();
    const data = [
        {
          firstName: 'Dylan',
          lastName: 'Murray',
          address: '261 Erdman Ford',
          city: 'East Daphne',
          state: 'Kentucky',
          subRows: [
            {
              firstName: 'Ervin',
              lastName: 'Reinger',
              address: '566 Brakus Inlet',
              city: 'South Linda',
              state: 'West Virginia',
              subRows: [
                {
                  firstName: 'Jordane',
                  lastName: 'Homenick',
                  address: '1234 Brakus Inlet',
                  city: 'South Linda',
                  state: 'West Virginia',
                },
              ],
            },
            {
              firstName: 'Brittany',
              lastName: 'McCullough',
              address: '722 Emie Stream',
              city: 'Lincoln',
              state: 'Nebraska',
            },
          ],
        },
        {
          firstName: 'Raquel',
          lastName: 'Kohler',
          address: '769 Dominic Grove',
          city: 'Columbus',
          state: 'Ohio',
          subRows: [
            {
              firstName: 'Branson',
              lastName: 'Frami',
              address: '32188 Larkin Turnpike',
              city: 'Charleston',
              state: 'South Carolina',
            },
          ],
        },
      ];
      
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
            accessorKey: 'address',
            header: 'Address',
          }
        ],
        [],
        //end
      );

    return ( 
    <>
    <Heading mt="3" mb="4">Drill Down option</Heading>
    <ThemeProvider theme={defaultMaterialTheme}>
        <MaterialReactTable
          columns={columns}
          data={data}
          enableExpanding
          enableExpandAll
          enableColumnActions={false}
          enableColumnFilters={false}
          enablePagination={false}
          enableSorting={false}
          enableBottomToolbar={false}
          enableTopToolbar={false}
          enableRowSelection={false}
        />
    </ThemeProvider>
    </> 
    );
}
 
export default DrillDownTable;