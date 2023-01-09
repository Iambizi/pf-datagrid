import React, { useEffect, useMemo, useRef, useState } from "react";
import MaterialReactTable from "material-react-table";
import { Heading } from "@chakra-ui/react";
import { ThemeProvider, createTheme } from "@mui/material";

const CellHighLightTable = () => {

  const defaultMaterialTheme = createTheme({
    palette: {
      type: "light",
      background: {
        default: "hsl(0, 0%, 100%)"
      }
    }
  });
  const [selectedRow, setSelectedRow] = useState(null);
  const data = [
    {
      userId: "3f25309c-8fa1-470f-811e-cdb082ab9017",
      firstName: "Dylan",
      lastName: "Murray",
      age: 22,
    },
    {
      userId: "be731030-df83-419c-b3d6-9ef04e7f4a9f",
      firstName: "Raquel",
      lastName: "Kohler",
      age: 18,
    },
  ];
  const columns = useMemo(
    () => [
      {
        accessorKey: "firstName",
        header: "First Name",
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
      },
      {
        accessorKey: "age",
        header: "Age",
      },
    ],
    []
  );
  return (
    <>
      <ThemeProvider theme={defaultMaterialTheme}>
        <MaterialReactTable
          title="Cell Highlight Table"
          columns={columns}
          data={data}
          onRowClick={(_, rowData) => {
            setSelectedRow(rowData.userId);
          }}
          options={{
            rowStyle: (rowData) => ({
              backgroundColor: selectedRow === rowData.userId ? "#40508d" : "#FFF",
            }),
          }}
        />
      </ThemeProvider>
    </>
  );
};

export default CellHighLightTable;
