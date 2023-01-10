import React, { FC, useEffect, useMemo, useState } from 'react';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import { RowSelectionState } from '@tanstack/react-table';
import { ThemeProvider, createTheme } from "@mui/material";


const data = [
  //data definitions...
  {
    userId: '3f25309c-8fa1-470f-811e-cdb082ab9017', //we'll use this as a unique row id
    firstName: 'Dylan',
    lastName: 'Murray',
    age: 22,
    address: '261 Erdman Ford',
    city: 'East Daphne',
    state: 'Kentucky',
  },
  {
    userId: 'be731030-df83-419c-b3d6-9ef04e7f4a9f',
    firstName: 'Raquel',
    lastName: 'Kohler',
    age: 18,
    address: '769 Dominic Grove',
    city: 'Columbus',
    state: 'Ohio',
  },
  //end
];

const CellHighlight2 = () => {
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

  const [rowSelection, setRowSelection] = useState({});
  const defaultMaterialTheme = createTheme();
  return (
    <ThemeProvider theme={defaultMaterialTheme}>
        <MaterialReactTable
      columns={columns}
      data={data}
      getRowId={(row) => row.userId}
      muiTableBodyRowProps={({ row }) => ({
        //implement row selection click events manually
        onClick: () =>
          setRowSelection((prev) => ({
            ...prev,
            [row.id]: !prev[row.id],
          })),
        selected: rowSelection[row.id],
        sx: {
          cursor: 'pointer',
        },
      })}
      state={{ rowSelection }}
    />
    </ThemeProvider>
  );
};

export default CellHighlight2;