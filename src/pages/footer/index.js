import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const Contact = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    backgroundColor: "#0D1C10",
    paddingTop: "30px",
    paddingBottom: "30px",
    [theme.breakpoints.up("sm")]: {
        flexDirection: "row",
        justifyContent: "center"
    },
}));

const Data = styled(Box)(({ theme }) => ({
    color: "white",
    fontSize: "16px",
    [theme.breakpoints.up("sm")]: {
        fontSize: "22px"
    },
}));

const FooterPage = () => {
    return (
        <Contact>
            <Data>COPYRIGHT</Data>
            <Data>© 2024 SHAD / </Data>
            <Data>EVIVO Token Family</Data>
        </Contact>
    );
}

export default FooterPage; 