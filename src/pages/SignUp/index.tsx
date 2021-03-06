import { Flex, Image } from "@chakra-ui/react";
import { RegisterForm } from "../../components/SignUp/registerForm";
import { Header } from "../../components/Header";
import { FaUser } from "react-icons/fa";

const img = require("../../assets/signuppage.png");

export function SignUp() {
  return (
    <Flex flexDirection="column" minH="100vh">
      <Header
        firstLink="aboutus"
        secondLink="curiosity"
        firstText="Conheça nosso time"
        secondText="Como cuidar da sua planta"
        firstIcon={FaUser}
        firstLabel="Login"
        iconLink="/signin"
      />
      <Flex
        alignItems={["flex-start", "flex-start", "center", "center", "center"]}
        as="main"
        justify="space-evenly"
        h="auto"
        minH="calc(100vh - 150px)"
      >
        <Image
          src={img}
          sx={{
            borderRadius: "50%",
            bottom: "-15vw",
            filter: "drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.4))",
            height: "95vw",
            left: "-15vw",
            maxHeight: "500px",
            maxWidth: "500px",
            opacity: "0.6",
            width: "95vw",
            zIndex: "-1",
            position: "fixed",
            "@media screen and (min-width: 1024px)": {
              bottom: "20vh",
              height: "30vw",
              left: "10vw",
              maxHeight: "400px",
              maxWidth: "400px",
              minHeight: "100px",
              minWidth: "100px",
              opacity: "1",
              top: "26vh",
              position: "inherit",
              width: "30vw",
            },
            "@media screen and (min-width: 1280px)": {
              height: "35vw",
              width: "35vw",
            },
          }}
        />
        <RegisterForm />
      </Flex>
    </Flex>
  );
}
