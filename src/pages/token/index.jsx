import React, { Component } from "react";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { fontSize } from "@mui/system";

import {
    AccumulationChartComponent,
    AccumulationSeriesCollectionDirective,
    AccumulationSeriesDirective,
    AccumulationAnnotationsDirective,
    AccumulationAnnotationDirective,
    AccumulationAnnotation,
    AccumulationLegend,
    PieSeries,
    AccumulationDataLabel,
    Inject
  } from "@syncfusion/ej2-react-charts";

const Token = styled(Box)(({ theme }) => ({
    margin: "0px",
    paddingLeft: "50px",
    paddingRight: "50px",
    position: "relative",
    [theme.breakpoints.up("lg")]: {
        marginLeft: "170px",
        marginRight: "170px",
        marginTop: "50px",
    },
}));

const TokenTitle = styled(Box)(({ theme }) => ({
    fontSize: "22px",
    fontWeight: "500",
    color: "white",
    marginTop: "50px",
    zIndex: "10",
    [theme.breakpoints.up("sm")]: {
        fontSize: "30px",
        paddingLeft: "50px",
        paddingRight: "50px",
        paddingTop: "20px",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "46px",
    },
}));

const TokenTxt = styled(Box)(({ theme }) => ({
    fontSize: "17px",
    textAlign: "center",
    fontWeight: "400",
    color: "#15E25F",
    marginTop: "30px",
    [theme.breakpoints.up("sm")]: {
        fontSize: "26px",
        margin: "26px",
        fontSize: "22px",
    },
}));

const TokenWhiteTxt = styled(Box)(({ theme }) => ({
    fontSize: "16px",
    textAlign: "center",
    fontWeight: "400",
    color: "white",
    [theme.breakpoints.up("sm")]: {
        fontSize: "26px",
    },
}));



const ContentTxt = styled(Box)(({ theme }) => ({
    fontSize: "15px",
    color: "white",
    textAlign: "left",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        fontSize: "22px",
    },
    [theme.breakpoints.up("xl")]: {
        width: "60%",
        height: "400px",
    },
}));

const ContentTime = styled(Box)(({ theme }) => ({
    fontSize: "15px",
    color: "white",
    textAlign: "left",
    [theme.breakpoints.up("sm")]: {
        fontSize: "22px",
    },
}));

const ContentLink = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "30px",
    [theme.breakpoints.up("sm")]: {
        flexDirection: "row",
    },
}));

const Link = styled(Box)(({ theme }) => ({
    fontSize: "20px",
    color: "#15E25F",
    textAlign: "left",
    [theme.breakpoints.up("sm")]: {
        fontSize: "26x",
    },
}));

const Chart = styled(Box)(({ theme }) => ({
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        width: "60%"
    },
}));

const TokenBack = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${process.env.PUBLIC_URL + '/imgs/token_back.png'})`,
    width: "200px",
    height: "200px",
    backgroundSize: "cover",
    position: "absolute",
    left: "-115px",
    top: "245px",
    displau: "block",
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));

const Content = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    borderWidth: "2px",
    borderStyle: "solid",
    padding: "30px 20px",
    borderRadius: "10px",
    borderColor: '#0DBB50',
    marginBottom: "20px",
    [theme.breakpoints.up("md")]: {
        width: "35%",
        padding: "20px"
    },
}));

const ChartBox = styled(Box)`
    >img { 
        width : 100%;
        height : auto;
    }
    @media (min-width: 900px) {
        width: 62%;
    }
`

const TokenContent = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    marginTop: "30px",
    alignItems: "center",
    position: "relative",
    [theme.breakpoints.up("md")]: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
}));

const TokenPage = () => {
    return (
        <Token>
            <div class="geeks2"></div>
            <TokenTitle>EVIVO TOKEN ALLOCATION</TokenTitle>
            <TokenTxt>Total Supply: </TokenTxt>
            <TokenWhiteTxt>1,000,000,000</TokenWhiteTxt>
            <TokenContent>
                <Content>
                    <ContentTxt>
                        Burn Eligibility:
                        60 Days after presale
                    </ContentTxt>
                    <ContentTime>(THU JUN 6 0:00 UTC)</ContentTime>
                    <ContentLink>
                        <Link>EVIVO token</Link>
                        <Link>CONTRACT</Link>
                    </ContentLink>
                </Content>
                <ChartBox>
                    <img src="./imgs/pie_chart.png" alt="pie_chat" />
                </ChartBox>
                <TokenBack></TokenBack>
            </TokenContent>
        </Token>
    )
}



export default TokenPage