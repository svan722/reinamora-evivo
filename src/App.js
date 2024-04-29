//import logo from './logo.svg';
import "./App.css";
import HeaderPage from "./pages/header";
import HomePage from "./pages/home";
import BurnPage from "./pages/burn";
import TokenPage from "./pages/token";
import FormPage from "./pages/form";
import ContactPage from "./pages/contact";
import FooterPage from "./pages/footer";
import { Box } from "@mui/material";
import {
  Web3ReactProvider,
} from "@web3-react/core";
import allConnections from "./connectors";
const connections = allConnections.map(([connector, hooks]) => [
  connector,
  hooks,
]);

function App() {
  return (
    <div className="App">
      <Web3ReactProvider connectors={connections}>
        <Box sx={{ backgroundColor: "#102615" }}>
          <HeaderPage />
          <HomePage />
          <BurnPage />
          <TokenPage />
          <FormPage />
          <ContactPage />
          <FooterPage />
        </Box>
      </Web3ReactProvider>
    </div>
  );
}

export default App;
