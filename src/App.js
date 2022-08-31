
import { createTheme, Stack, ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import AddBtn from "./components/Add";
import Feed from "./components/Feed";
import NavigationBar from "./components/NavigationBar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";


function App() {
  const [mode, setMode] = useState("light")
  const darkMode = createTheme({
    palette: {
      mode: mode,
    }
  })
  return (
    <ThemeProvider theme={darkMode}>
      <Box bgcolor={"background.default"} color={"text.primary"} >
        <NavigationBar />
        <Stack marginTop={7} direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <AddBtn />
      </Box>
    </ThemeProvider>
    
  );
}

export default App;
