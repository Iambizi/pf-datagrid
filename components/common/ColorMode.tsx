import React from "react";
import { Button, useColorMode } from "@chakra-ui/react"
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ColorModeButton = (): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <header>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon/>}
        </Button>
      </header>
    </>
  );
};

export default ColorModeButton;
