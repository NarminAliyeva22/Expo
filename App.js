import { StatusBar } from "expo-status-bar";
import { ScrollView, View, useWindowDimensions } from "react-native";
import { RegisterScreen } from "./src/screens";
import { CreateAccountScreen } from "./src/screens/Auth/CreateAccount/CreateAccountScreen";
import { VerifyCodeScreen } from "./src/screens/Auth/VerifyCode/VerifyCodeScreen";

export default function App() {
  const { width } = useWindowDimensions();

  return (
    <>
      <StatusBar style="auto" />
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1 }}
        contentContainerStyle={{ flexDirection: "row" }}
      >
        <View style={{ width }}>
          <RegisterScreen />
        </View>
        <View style={{ width }}>
          <CreateAccountScreen />
        </View>
        <View style={{ width }}>
          <VerifyCodeScreen />
        </View>
      </ScrollView>
    </>
  );
}