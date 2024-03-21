import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import StackNavigation from "./navigation/StackNavigation";

export default function App() {
  return (
    <NativeBaseProvider>
      <StackNavigation />
      <StatusBar backgroundColor={"#f7768d"} style="auto" />
    </NativeBaseProvider>
  );
}
