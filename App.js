import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./src/screens/navigation/AppNavigation";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </>
  );
}
