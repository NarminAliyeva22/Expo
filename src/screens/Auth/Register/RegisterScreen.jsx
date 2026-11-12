import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../../assets/constants/colors";
import { CustomButton } from "../../../components/CustomButton";

export const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log("Back")}>
          <Ionicons name="arrow-back" size={26} color={colors.blackColor} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Skip")}>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../../../assets/image/image.png")}
          resizeMode="contain"
        />
        <Text style={styles.title}>Welcome to Yumio</Text>
      </View>

      
      <TouchableOpacity style={styles.googleButton} onPress={() => console.log("Google")} activeOpacity={0.7}>
        <Image
          style={styles.googleIcon}
          source={require("../../../../assets/image/google.png")}
          resizeMode="contain"
        />
        <Text style={styles.googleText}>Continue with Google</Text>
      </TouchableOpacity>

     
      <View style={styles.lines}>
        <View style={styles.line} />
        <Text style={styles.lineText}>Or</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.label}>
        <Text style={styles.labelText}>Email</Text>
        <Text style={styles.labelRequired}>*</Text>
      </View>
      <TextInput style={styles.input} placeholder="example@gmail.com" placeholderTextColor="#9E9E9E" value={email}  onChangeText={setEmail} keyboardType="email-address"  autoCapitalize="none"  />
     
      <TouchableOpacity
        style={styles.privacyRow}
        onPress={() => setAgreed(!agreed)}
        activeOpacity={0.7}
      >
        <View style={[styles.checkBox, !agreed && styles.checkBoxOff]}>
          {agreed && <Ionicons name="checkmark" size={14} color="#fff" />}
        </View>
        <Text style={styles.privacyText}>
          By continuing, you agree to our{" "}
          <Text style={styles.privacyLink}>Privacy Policy.</Text>
        </Text>
      </TouchableOpacity>
      <CustomButton
        text="Continue with email"
        onPress={() => console.log("Email:", email)}
        disabled={!email || !agreed}
      />

  
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => console.log("Log in")}
        activeOpacity={0.7}
      >
        <Text style={styles.loginGray}>Already have an account? </Text>
        <Text style={styles.loginBlack}>Log in</Text>
      </TouchableOpacity>
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },
  skip: {
    fontSize: 18,
    color: colors.secondaryColor,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 24,
  },
  logo: {
    width: 120,
    height: 50,
  },
  title: {
    marginTop: 16,
    fontSize: 28,
    fontWeight: "700",
    color: colors.blackColor,
    textAlign: "center",
  },
  googleButton: {
    marginTop: 64,
    marginBottom: 24,
    height: 52,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.borderColor,
    backgroundColor: colors.secondaryBackgroundColor,
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  googleIcon: { width: 24, height: 24 },
  googleText: {
    fontSize: 18,
    fontWeight: "500",
    color: colors.blackColor,
  },
  lines: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 24,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.borderColor,
  },
  lineText: {
    fontWeight: "700",
    fontSize: 16,
    color: colors.blackColor,
  },
  label: {
    flexDirection: "row",
    gap: 4,
    marginBottom: 8,
  },
  labelText: {
    fontSize: 16,
    color: colors.grayColor,
  },
  labelRequired: {
    fontSize: 16,
    color: colors.dangerColor,
  },
  input: {
    height: 52,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    borderColor: colors.borderColor,
    backgroundColor: colors.secondaryBackgroundColor,
  },
  privacyRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 12,
    marginBottom: 40,
  },
  checkBox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    backgroundColor: colors.secondaryColor,
    alignItems: "center",
    justifyContent: "center",
  },
  checkBoxOff: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: colors.borderColor,
  },
  privacyText: {
    flex: 1,
    fontSize: 14,
    color: colors.grayColor,
  },
  privacyLink: {
    color: colors.blackColor,
  },
  loginButton: {
    marginTop: 16,
    height: 52,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loginGray: {
    fontSize: 18,
    color: colors.grayColor,
  },
  loginBlack: {
    fontSize: 18,
    color: colors.blackColor,
    fontWeight: "500",
  },
});