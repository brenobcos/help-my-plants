import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import { theme } from "../styles/theme";
import { PlantsProvider } from "./PlantsProvider";
import { UserPlantsProvider } from "./UserPlantsProvider";
import { AuthProvider } from "./Auth";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <PlantsProvider>
          <UserPlantsProvider>{children}</UserPlantsProvider>
        </PlantsProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}
