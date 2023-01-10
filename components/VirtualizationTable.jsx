import React, { useEffect, useMemo, useRef, useState } from "react";
import MaterialReactTable from "material-react-table";
import { Heading, Text } from "@chakra-ui/react";
import { makeData } from "./makeData";
import { ThemeProvider, createTheme } from "@mui/material";

const VirtualizationTable = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "firstName",
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "middleName",
        header: "Middle Name",
        size: 150,
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
        size: 150,
      },
      {
        accessorKey: "email",
        header: "Email Address",
        size: 300,
      },
      {
        accessorKey: "phoneNumber",
        header: "Phone Number",
        size: 250,
      },
      {
        accessorKey: "address",
        header: "Address",
        size: 300,
      },
      {
        accessorKey: "zipCode",
        header: "Zip Code",
      },
      {
        accessorKey: "city",
        header: "City",
      },
      {
        accessorKey: "state",
        header: "State",
      },
      {
        accessorKey: "country",
        header: "Country",
        size: 350,
      },
      {
        accessorKey: "petName",
        header: "Pet Name",
      },
      {
        accessorKey: "age",
        header: "Age",
      },
      {
        accessorKey: "salary",
        header: "Salary",
      },
      {
        accessorKey: "dateOfBirth",
        header: "Date of Birth",
      },
      {
        accessorKey: "dateOfJoining",
        header: "Date of Joining",
      },
      {
        accessorKey: "isActive",
        header: "Is Active",
      },
    ],
    []
    //end
  );

  //optionally access the underlying virtualizer instance
  const rowVirtualizerInstanceRef = useRef(null);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sorting, setSorting] = useState([]);
  const defaultMaterialTheme = createTheme();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setData(makeData(500));
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    //scroll to the top of the table when the sorting changes
    rowVirtualizerInstanceRef.current?.scrollToIndex(0);
  }, [sorting]);

  return (
    <>
      <Heading mb="3" mt="4">
        Virtualization Table
      </Heading>
      <Text mb="3">Allows for table virtualization of long lists. 10K entries max. <br/>The table below lists out 500 entries</Text>
      <ThemeProvider theme={defaultMaterialTheme}>
        <MaterialReactTable
          columns={columns}
          data={data} //10,000 rows
          enableBottomToolbar={false}
          enableColumnVirtualization
          enableGlobalFilterModes
          enablePagination={false}
          enablePinning
          enableRowNumbers
          enableRowVirtualization
          muiTableContainerProps={{ sx: { maxHeight: "600px" } }}
          onSortingChange={setSorting}
          state={{ isLoading, sorting }}
          rowVirtualizerInstanceRef={rowVirtualizerInstanceRef} //optional
          rowVirtualizerProps={{ overscan: 5 }} //optionally customize the row virtualizer
          columnVirtualizerProps={{ overscan: 2 }} //optionally customize the column virtualizer
          enableColumnActions={false}
      enableColumnFilters={false}
      enableSorting={false}
      enableTopToolbar={false}
        />
      </ThemeProvider>
    </>
  );
};

//virtualizerInstanceRef was renamed to rowVirtualizerInstanceRef in v1.5.0
//virtualizerProps was renamed to rowVirtualizerProps in v1.5.0

export default VirtualizationTable;
