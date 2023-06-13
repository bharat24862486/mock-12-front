import logo from './logo.svg';
import './App.css';
import { Box } from '@chakra-ui/react';
import Nav from './Component/Nav';
import MainRoutes from './Routes/MainRoutes';

function App() {
  return (
    <Box className="App">
      <Nav />
      <MainRoutes />
    </Box>
  );
}

export default App;
