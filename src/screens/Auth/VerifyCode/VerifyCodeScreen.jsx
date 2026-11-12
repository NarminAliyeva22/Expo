import { useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../../assets/constants/colors";
import { CustomButton } from "../../../components/CustomButton";

const CODE_LENGTH = 4;

export const VerifyCodeScreen = ({ navigation, route }) => {
  const email = route?.params?.email ?? "example@gmail.com";
  const [code, setCode] = useState(Array(CODE_LENGTH).fill(""));
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    const digit = text.replace(/[^0-9]/g, "").slice(-1);
    const next = [...code];
    next[index] = digit;
    setCode(next);
    if (digit && index < CODE_LENGTH - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace" && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const isComplete = code.every((c) => c !== "");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack?.()}>
          <Ionicons name="arrow-back" size={26} color={colors.blackColor} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Verify Code</Text>
      <Text style={styles.subtitle}>
        Please enter the code we just sent to email{"\n"}
        {email}
      </Text>

      <View style={styles.otpRow}>
        {code.map((value, i) => (
          <TextInput
            key={i}
            ref={(ref) => (inputs.current[i] = ref)}
            style={[styles.otpBox, value && styles.otpBoxFilled]}
            value={value}
            onChangeText={(t) => handleChange(t, i)}
            onKeyPress={(e) => handleKeyPress(e, i)}
            keyboardType="number-pad"
            maxLength={1}
            placeholder="-"
            placeholderTextColor={colors.placeholderColor}
            textAlign="center"
          />
        ))}
      </View>

      <Text style={styles.resendText}>Don't receive OTP?</Text>
      <TouchableOpacity onPress={() => console.log("Resend code")}>
        <Text style={styles.resendLink}>Resend code</Text>
      </TouchableOpacity>

      <View style={styles.bottom}>
        <CustomButton
          text="Verify"
          onPress={() => console.log("Code:", code.join(""))}
          disabled={!isComplete}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 24,
    backgroundColor: colors.whiteColor,
  },
  header: { paddingVertical: 12 },
  title: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    color: colors.blackColor,
    marginTop: 24,
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: colors.grayColor,
    marginTop: 12,
    lineHeight: 20,
  },
  otpRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    marginTop: 48,
    marginBottom: 32,
  },
  otpBox: {
    width: 56,
    height: 56,
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 22,
    fontWeight: "600",
    color: colors.blackColor,
    borderColor: colors.borderColor,
    backgroundColor: colors.secondaryBackgroundColor,
  },
  otpBoxFilled: { borderColor: colors.primaryColor },
  resendText: {
    textAlign: "center",
    fontSize: 14,
    color: colors.grayColor,
  },
  resendLink: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
    color: colors.blackColor,
    textDecorationLine: "underline",
    marginTop: 8,
  },
  bottom: { position: "absolute", left: 24, right: 24, bottom: 40 },
});