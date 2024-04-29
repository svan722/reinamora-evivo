import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const Contact = styled(Box)(({ theme }) => ({
    marginLeft: "50px",
    marginRight: "50px", 
    paddingTop: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.up("lg")]: {
        marginLeft: "170px",
        marginRight: "170px", 
        marginTop: "50px",
    },
}));

const LogoImg = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${process.env.PUBLIC_URL+'/imgs/logo.png'})`,
    width: "155px",
    height: "25px",
    backgroundSize: "cover",
    margin: "auto",
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

const ContactTitle = styled(Box)(({ theme }) => ({
    fontSize:"22px",
    color: "white",
    [theme.breakpoints.up("sm")]: {
        fontSize:"30px",
    },
    [theme.breakpoints.up("md")]: {
        fontSize:"46px",
    },
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

const HomeBody = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "10px",
}));

const ContactTxt = styled(Box)(({ theme }) => ({
    fontSize: "15px",
    marginTop: "20px",
    fontWeight: "100",
    color: "white",
    [theme.breakpoints.up("sm")]: {
        fontSize: "22px"
    },
}));
const ContactPage = () => {
    return (
        <Contact>
            <ContactTitle>CONTACT</ContactTitle>
            <LogoImg></LogoImg>
            <HomeBody>
                <TeleBtn></TeleBtn>
                <TwitterBtn></TwitterBtn>
                <DexBtn></DexBtn>
            </HomeBody>
            <ContactTxt>
            Donec sapien et ullamcorper posuere molestie. Morbi a habitant arcu leo ac nisi et bibendum leo. Cras tempor id sit mauris nulla non ipsum id et neque.
            </ContactTxt>
        </Contact>
    )
}

export default ContactPage