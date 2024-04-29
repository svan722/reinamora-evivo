import { styled } from "@mui/material/styles";
import { Paper, Box } from '@mui/material';

const Burn = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: "50px",
    paddingRight: "50px",
    position: "relative",
    [theme.breakpoints.up("lg")]: {
        paddingLeft: "170px",
        paddingRight: "170px",
    },
}));

const BurnHead = styled(Box)(({ theme }) => ({
    display: "flex", 
    alignItems: "center",
    position: "relative"
}));

const BurnLeftImg = styled(Box)(({ theme }) => ({
    width: "80px",
    height: "80px",
    backgroundImage: `url(${process.env.PUBLIC_URL+'/imgs/burn_left.png'})`,
    backgroundSize: "cover",
    [theme.breakpoints.up("md")]: {
        width: "200px",
        height: "200px",
    },
}));

const BurnRightImg = styled(Box)(({ theme }) => ({
    width: "80px",
    height: "80px",
    backgroundImage: `url(${process.env.PUBLIC_URL+'/imgs/burn_right.png'})`,
    backgroundSize: "cover",
    zIndex: "10",
    [theme.breakpoints.up("md")]: {
        width: "200px",
        height: "200px",
    },
}));

const BurnTitle = styled(Box)(({ theme }) => ({
    fontSize:"22px",
    color: "white",
    marginLeft: "5px",
    marginRight: "5px",
    fontWeight: "500",
    [theme.breakpoints.up("sm")]: {
        fontSize:"30px",
    },
    [theme.breakpoints.up("md")]: {
        fontSize:"46px",
        marginLeft: "20px",
        marginRight: "20px",
    },
}));

const BurnItem = styled(Box)(({ theme }) => ({
    display:"flex",
    alignItems:"center",
    padding:"10px",
    borderStyle:"solid",
    borderRadius:"10px",
    borderWidth:"2px",
    borderColor:"green",
    margin: "20px",
    width: "95%",
    zIndex: "10",
    [theme.breakpoints.up("sm")]: {
        padding: "20px"
    },
}));

const ItemNumber = styled(Box)(({ theme }) => ({
    padding: "10px",
    borderRadius: "10px",
    backgroundColor: "#0FE361",
    display: "flex",
    cursor: "pointer",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        padding: "15px"
    },
}));

const NumberTxt =  styled(Box)(({ theme }) => ({
    fontSize: "15px",
    color: "white",
    [theme.breakpoints.up("sm")]: {
        fontSize:"30px",
    },
}));

const ItemTxt = styled(Box)(({ theme }) => ({
    fontSize: "15px",
    color: "white",
    marginLeft: "10px",
    textAlign: "left",
    [theme.breakpoints.up("sm")]: {
        fontSize:"30px",
        marginLeft: "40px",
        marginLeft: "20px",
    },
}));

const BurnPage = () => {
    return (
        <Burn> 
            <BurnHead>
                <BurnLeftImg />
                <BurnTitle>HOW TO BURN:</BurnTitle>
                <BurnRightImg />
                <div class="geeks1"></div> 
            </BurnHead>

            <BurnItem>
                <ItemNumber>
                    <NumberTxt>01</NumberTxt>
                </ItemNumber>
                <ItemTxt>Go to: https: //sol -incinerator .com</ItemTxt>
            </BurnItem>
            <BurnItem>
                <ItemNumber>
                    <NumberTxt>02</NumberTxt>
                </ItemNumber>
                <ItemTxt>Connect wallet</ItemTxt>
            </BurnItem>  
            <BurnItem>
                <ItemNumber>
                    <NumberTxt>03</NumberTxt>
                </ItemNumber>
                <ItemTxt>Go to Tokens</ItemTxt>
            </BurnItem>
            <BurnItem>
                <ItemNumber>
                    <NumberTxt>04</NumberTxt>
                </ItemNumber>
                <ItemTxt>Select SHAD Token or enter Contract Address: DtChfd66f6R Yp155VxjQ3q YKRNPWZhc upDpYQSFP UcU3</ItemTxt>
            </BurnItem>
            <BurnItem>
                <ItemNumber>
                    <NumberTxt>05</NumberTxt>
                </ItemNumber>
                <ItemTxt>Click "Confirm Burn"</ItemTxt>
            </BurnItem>
            <BurnItem>
                <ItemNumber>
                    <NumberTxt>06</NumberTxt>
                </ItemNumber>
                <ItemTxt>NOTE: This process will burn ALL SHAD tokens in the wallet. If you wish to hold SHAD please send to a new wallet.</ItemTxt>
            </BurnItem>
            <BurnItem>
                <ItemNumber>
                    <NumberTxt>07</NumberTxt>
                </ItemNumber>
                <ItemTxt>Copy the TX id for the burn transaction and paste it in our website form below.</ItemTxt>
            </BurnItem>
        </Burn>
    )
}

export default BurnPage