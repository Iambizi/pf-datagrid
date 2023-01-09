import React, { useMemo } from "react";
import MaterialReactTable from "material-react-table";
import { Heading } from "@chakra-ui/react";
import { ThemeProvider, createTheme } from "@mui/material";

const RotateGridTable = () => {
  const defaultMaterialTheme = createTheme();

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
      <Heading mb="3" mt="4">
        Rotate Grid Table
      </Heading>
      <ThemeProvider theme={defaultMaterialTheme}>
        <MaterialReactTable
          columns={columns}
          data={data}
          options={{
            rotate: true,
          }}
        />
      </ThemeProvider>
    </>
  );
};

export default RotateGridTable;
