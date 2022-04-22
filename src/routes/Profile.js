import React, { useContext } from "react";
import { useSelector } from "react-redux";
import AddClasses from "../components/AddClasses";
import { Box } from "../components/Box";
import { Button } from "../components/Button";
import CreateUser from "../components/CreateUser";
import { Flex } from "../components/Flex";
import { Redirect } from "../components/Redirect";
import { ResponsiveTitle } from "../components/ResponsiveTitle";
import UserData from "../components/UserData";
import { ClassesContext } from "../context/ClassesContext";
import { UserContext } from "../context/UserContext";

function Profile() {
    const { user } = useContext(UserContext)
    const { classes } = useContext(ClassesContext)
    const isAdmin = useSelector(state => state.admin)

    const User = user ? user : ""
    let currentClass = 0

    for (let i = 0; i <= User.currentModule; i++) {
        for (let j = 0; j < classes[i].videos.length; j++) {
            if (i === User.currentModule) {
                if (j === User.currentClass) {
                    currentClass++
                    break
                }
            }
            currentClass++
        }
    }

    let qntClasses = 0

    for (let i = 0; i < classes.length; i++) {
        qntClasses += classes[i].videos.length
    }

    const percent = (currentClass / qntClasses * 100).toFixed(0)

    return (
        <Box className="profile" minHeight="100vh" mediaMarginTop="0" alignItems="start" margin="-70px 0 0 0">
            <Flex direction="column" width="70%" margin="130px 0 70px 0" mediaWidth="100%">
                <ResponsiveTitle textAlign="left">
                    Meu Perfil
                </ResponsiveTitle>
                <Flex alignItems="start" mediaDirection="column">
                    <Flex direction="column" width="65%" mediaWidth="100%">
                        <UserData />
                        {isAdmin ? <CreateUser /> : <></>}
                        {isAdmin ? <AddClasses /> : <></>}
                    </Flex>
                    <Flex width="35%" direction="column" mediaWidth="100%" mediaMargin="40px 0 0 0">
                        <ResponsiveTitle>
                            Você já concluiu {percent}% do curso!
                            <br />
                            <ResponsiveTitle fontSize="18px" viewWidth="4vw">
                                {currentClass} de {qntClasses} aulas assistidas
                            </ResponsiveTitle>
                        </ResponsiveTitle>
                        <Flex>
                            <Button onClick={() => Redirect('/')} bgColor="transparent" hoverBg="rgba(146, 255, 124, 0.2)" color="white" padding="0px 5px 2px 5px" border="none">
                                {percent === "100" ? "Voltar ao Curso" : "Continuar Curso"}
                            </Button>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )

}

export default Profile