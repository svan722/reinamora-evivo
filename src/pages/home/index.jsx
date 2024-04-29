import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";

const Home = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "450px",
  marginTop: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  backgroundImage: `url(${process.env.PUBLIC_URL + "/imgs/home_back.png"})`,
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

const HomeImg = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${process.env.PUBLIC_URL + "/imgs/home_man.png"})`,
  backgroundSize: "cover",
  width: "200px",
  height: "250px",
  [theme.breakpoints.up("md")]: {
    width: "375px",
    height: "455px",
  },
}));

const HomeTxt = styled(Box)(({ theme }) => ({
  color: "white",
  fontSize: "22px",
  [theme.breakpoints.up("sm")]: {
    fontSize: "30px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "46px",
  },
}));

const HomePage = () => {
  const { connector, hooks } = useWeb3React();
  const {
    useSelectedAccount,
    useSelectedChainId,
    useSelectedIsActive,
    useSelectedIsActivating,
  } = hooks;
  const isActivating = useSelectedIsActivating(connector);
  const isActive = useSelectedIsActive(connector);
  const account = useSelectedAccount(connector);
  const chain = useSelectedChainId(connector);

  const [error, setError] = useState(undefined > undefined);
  const [connectionStatus, setConnectionStatus] = useState("Disconnected");

  const handleToggleConnect = () => {
    setError(undefined); // clear error state

    if (isActive) {
      if (connector?.deactivate) {
        void connector.deactivate();
      } else {
        void connector.resetState();
      }
    } else if (!isActivating) {
      setConnectionStatus("Connecting..");
      Promise.resolve(connector.activate(1)).catch((e) => {
        connector.resetState();
        setError(e);
      });
    }
  };
  useEffect(() => {
    if (isActive) {
      setConnectionStatus("Connected");
    } else {
      setConnectionStatus("Disconnected");
    }
  }, [isActive]);

  return (
    <Home>
      <HomeImg />
      <Box display="flex" flexDirection="column">
        <HomeTxt>BURN 2 SHAO</HomeTxt>
        <HomeTxt>Get 1 EVIVO</HomeTxt>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#0FE361",
            borderRadius: "30px",
            fontSize: "16px",
            paddingX: "3px",
            paddingY: "16px",
            marginTop: "30px",
          }}
        >
          <Box sx={{ fontFamily: "joystix" }} onClick={handleToggleConnect}>
            CONNECT WALLET
          </Box>
        </Button>
      </Box>
    </Home>
  );
};

export default HomePage;
