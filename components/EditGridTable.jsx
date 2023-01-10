import React, { useEffect, useMemo, useRef, useState } from "react";
import MaterialReactTable from "material-react-table";
import { Heading, Text } from "@chakra-ui/react";
import { ThemeProvider, createTheme } from "@mui/material";
import EditCrudTable from "./EditCrudTable"

const EditGridTable = () => {
  const defaultMaterialTheme = createTheme();

  const data = [
    {
      firstName: "Dylan",
      lastName: "Murray",
      address: "261 Erdman Ford",
      city: "East Daphne",
      state: "Kentucky",
    },
    {
      firstName: "Ervin",
      lastName: "Reinger",
      address: "566 Brakus Inlet",
      city: "South Linda",
      state: "West Virginia",
    },
    {
      firstName: "Jordane",
      lastName: "Homenick",
      address: "1234 Brakus Inlet",
      city: "South Linda",
      state: "West Virginia",
    },
    {
      firstName: "Raquel",
      lastName: "Kohler",
      address: "769 Dominic Grove",
      city: "Columbus",
      state: "Ohio",
    },
    {
      firstName: "Branson",
      lastName: "Frami",
      address: "32188 Larkin Turnpike",
      city: "Charleston",
      state: "South Carolina",
    },
  ];

  const columns = useMemo(
    () => [
      //column definitions...
      {
        accessorKey: "firstName",
        header: "First Name",
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
      },

      {
        accessorKey: "address",
        header: "Address",
      },
    ],
    []
  );

  const [tableData, setTableData] = useState(() => data);

  const handleSaveRow = async ({ exitEditingMode, row, values }) => {
    //if using flat data and simple accessorKeys/ids, you can just do a simple assignment here.
    tableData[row.index] = values;
    //send/receive api updates here
    setTableData([...tableData]);
    exitEditingMode(); //required to exit editing mode
  };

  return (
    <>
        <Heading mb="3" mt="4">Editable Grid</Heading>
        <p>Allows for: <b>column ordering</b>, <b>adding or removing rows</b>, <b>edit feature via modal</b> </p>
        <br/>
      <ThemeProvider theme={defaultMaterialTheme}>
        <MaterialReactTable
          columns={columns}
          data={tableData}
          editingMode="modal" //default
          enableEditing
          onEditingRowSave={handleSaveRow}
          enableColumnActions={false}
          enableColumnFilters={false}
          enablePagination={false}
          enableSorting={false}
          enableBottomToolbar={false}
          enableTopToolbar={false}
          enableRowSelection={false}
        />
      </ThemeProvider>
      <Heading mb="3" mt="4"></Heading>
      <EditCrudTable />
    </>
  );
};

export default EditGridTable;
