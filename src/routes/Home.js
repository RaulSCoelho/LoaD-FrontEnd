import React from "react";
import Video from "../components/Video";
import { Title } from "../components/Title";
import Navbar from "../components/Navbar";
import { Flex } from "../components/Flex";
import { ThemeProvider } from "styled-components";
import { Box } from "../components/Box";

function Home() {
    const videos1 = ["https://www.youtube.com/embed/bn3XrkDaqYE?wmode=opaque&showinfo=0&autohide=1", "https://www.youtube.com/embed/9W-M1qZW4Ww?wmode=opaque&showinfo=0&autohide=1"]
    const titles1 = [
        "Aula 1 - O começo da Liberdade Financeira",
        "Aula 2 - O estresse causado pela falta de dinheiro",
        "Aula 3 - Como eu comecei a investir",
        "Aula 4 - Da pra investir com pouco dinheiro?",
        "Aula 5 - Vou te provar que você está perdendo dinheiro hoje",
        "Aula 6 - Como eu ganho dinheiro enquanto durmo",
        "Aula 7 - Tipos de operações no mercado financeiro"
    ]

    const theme = {
        flexDirection: "row",
        flexJustify: "center",
        boxDirection: "column",
        boxTextAlign: "center",
        boxPadding: "15px 60px 0px 60px"
    }

    return (<>
        <Navbar />
        <ThemeProvider theme={theme}>
            <Box>
                <Flex>
                    <div>
                        <Video url={videos1[0]} title={titles1[0]} />
                        <Title>{titles1[0]}</Title>
                    </div>
                </Flex>
            </Box>
        </ThemeProvider>
    </>)
}

export default Home