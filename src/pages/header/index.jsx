import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const Header =styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent:"space-between",
    alignItems: "center",
    paddingLeft: "20px",
    paddingRight: "20px", 
    paddingTop: "10px",
    [theme.breakpoints.up("sm")]: {
        paddingLeft: "50px",
        paddingRight: "50px", 
        paddingTop: "20px",
    },
    [theme.breakpoints.up("lg")]: {
        paddingLeft: "170px",
        paddingRight: "170px", 
        paddingTop: "50px",
    },
}));
  
const LogoImg = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${process.env.PUBLIC_URL+'/imgs/logo.png'})`,
    width: "220px",
    height: "30px",
    backgroundSize: "cover",
    [theme.breakpoints.up("sm")]: {
        width: "370px",
        height: "50px",
        backgroundSize: "cover"
    },
    [theme.breakpoints.up("lg")]: {
        width: "450px",
        height: "60px",
        backgroundSize: "cover"
    },
}));

const HomeBody = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: "20px"
}));

const TeleBtn = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${process.env.PUBLIC_URL+'/imgs/telegram.png'})`,
    width: "40px",
    height: "36px",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
        display: "none"
    },
    [theme.breakpoints.up("sm")]: {
        display: "block"
    },
}));

const TwitterBtn = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${process.env.PUBLIC_URL+'/imgs/twitter.png'})`,
    width: "35px",
    height: "35px",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
        display: "none"
    },
    [theme.breakpoints.up("sm")]: {
        display: "block"
    },
}));

const DexBtn = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${process.env.PUBLIC_URL+'/imgs/dextool.png'})`,
    width: "35px",
    height: "35px",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
        display: "none"
    },
    [theme.breakpoints.up("sm")]: {
        display: "block"
    },
}));

const HeaderPage = () => {
    return (
        <Header>
            <LogoImg></LogoImg>
            <HomeBody>
                <TeleBtn></TeleBtn>
                <TwitterBtn></TwitterBtn>
                <DexBtn></DexBtn>
            </HomeBody>
        </Header>
    );
}

export default HeaderPage;