import { Box, Input } from "@mui/material";
import { styled } from "@mui/material/styles";
import { fontSize, height } from "@mui/system";

const Form = styled(Box)(({ theme }) => ({
    paddingLeft: "50px",
    paddingRight: "50px",
    paddingTop: "10px",
    [theme.breakpoints.up("lg")]: {
        marginLeft: "170px",
        marginRight: "170px", 
        marginTop: "50px",
    },
}));

const FormTitle = styled(Box)(({ theme }) => ({
    fontSize: "22px",
    color: "white",
    fontWeight: "200",
    [theme.breakpoints.up("sm")]: {
        fontSize: "30px",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "46px",
    },
}));
 
const FormInput = styled(Box)(({ theme }) => ({
    padding: "10px",
    borderWidth: "2px", 
    Color: "#0FE060",
    borderStyle: "solid",
    borderColor:"#0FE361",
    borderRadius: "20px",
    display: "flex",
    gap: "20px",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "30px",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
        flexDirection: "row",
        padding: "30px",
    },
}));

const WalletBtn = styled(Box)(({ theme }) => ({
    borderRadius: "50px",
    height: "40px",
    backgroundColor: "#0FE361",
    color: "white",
    width: "100%",
    fontSize: "16px",
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        width: "33%",
        height: "84px",
        fontSize: "22px"
    },
}));


const InputContainer = styled(Input)`
    border-width: 2px;
    border-style: solid;
    padding: 10px;
    width: 100%;
    border-radius: 60px;
    font-size: 16px;
    background-color: white;

    input::placeholder {
        font-size: 16px;
    }
    @media (min-width: 600px) {
        width: 62%;
        font-size: 22px;
        input::placeholder {
            font-size: 22px;
        }
        padding: 20px;
    }
    
`;

const WalletTxt = styled(Box)(({ theme }) => ({
    margin: "auto",
    [theme.breakpoints.up("sm")]: {
        display: "block"
    },
}));

const Photos = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    marginTop: "80px",
    justifyContent: "space-between",
    [theme.breakpoints.up("sm")]: {
        flexDirection: "row"
    },
    gap: "10px",
    position: "relative"
}));

const Photo = styled(Box)(({ theme }) => ({
    borderRadius: "20px",
    width: "100%",
    cursor: "pointer",
    [theme.breakpoints.up("sm")]: {
        width: "32%"
    },
    zIndex: "10"
}));




const FormPage = () => {
    return (
        <Form>
            <FormTitle>EVIVO Burn Form</FormTitle>
            <FormInput>
                <InputContainer type="text"  placeholder="Enter Solana SHAD Burn Transaction Hash"/>
                <WalletBtn><WalletTxt>CONNECT Wallet</WalletTxt></WalletBtn>
            </FormInput>
            <Photos>
                <Photo>
                    <img src="../../imgs/burn_1.png" alt="burn" width="100%" />
                </Photo>
                <Photo>
                    <img src="../../imgs/burn_2.png" alt="burn" width="100%" />
                </Photo>
                <Photo>
                    <img src="../../imgs/burn_3.png" alt="burn" width="100%" />
                </Photo>
                <div class="geeks3"></div>
            </Photos>
        </Form>
    )
}

export default FormPage