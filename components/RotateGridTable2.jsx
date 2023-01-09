import React, { useState } from "react";
import { DataGrid } from "material-react-table";
import { Heading } from "@chakra-ui/react";

const RotateGridTable = () => {
  const data = [
    { id: 1, name: 'John', age: 20, location: 'New York' },
    { id: 2, name: 'Samantha', age: 21, location: 'California' },
    { id: 3, name: 'Robert', age: 24, location: 'Texas' },
    { id: 4, name: 'Ashley', age: 30, location: 'Florida' }
  ];

  const columns = [
    { field: 'id', title: 'ID' },
    { field: 'name', title: 'Name' },
    { field: 'age', title: 'Age' },
    { field: 'location', title: 'Location' }
  ];

  const [transpose, setTranspose] = useState(false);

  const handleTranspose = () => {
    setTranspose(!transpose);
  };

  return (
    <>
      <Heading mb="3" mt="4">
        Rotate Grid Table
      </Heading>
       <button onClick={handleTranspose}>Toggle Transpose</button>
      <DataGrid
        data={data}
        columns={columns}
        options={{
          transpose: transpose
        }}
      /> 
    </>
  );
};

export default RotateGridTable;