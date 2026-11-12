import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../../assets/constants/colors";
import { CustomButton } from "../../../components/CustomButton";

export const CreateAccountScreen = ({ navigation, route }) => {
  const [email, setEmail] = useState(route?.params?.email ?? "");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const rules = [
    { text: "min. 6 characters", ok: password.length >= 6 },
    { text: "1 uppercase letter", ok: /[A-Z]/.test(password) },
    { text: "1 number or special character", ok: /[0-9\W_]/.test(password) },
  ];

  const isValid =
    email && firstName && lastName && phone && rules.every((r) => r.ok);

  const handleCreate = () => {
    console.log({ email, firstName, lastName, phone: "+994" + phone });
    navigation?.navigate?.("VerifyCode", { email });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={{ width: 40 }} />
          <TouchableOpacity onPress={() => console.log("Skip")}>
            <Text style={styles.skip}>Skip</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Create your account</Text>

        <Label text="Email" />
        <TextInput style={styles.input}value={email}onChangeText={setEmail} placeholder="example@gmail.com" placeholderTextColor={colors.placeholderColor} keyboardType="email-address" autoCapitalize="none"/> 
        <Label text="First name" />
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
          placeholder="Enter First name" 
         placeholderTextColor={colors.placeholderColor} />
        <Label text="Last name" />
        <TextInput style={styles.input} value={lastName}  onChangeText={setLastName} placeholder="Enter Last name"placeholderTextColor={colors.placeholderColor}/>

        <Label text="Phone Number" />
        <View style={styles.phoneRow}>
          <TouchableOpacity style={styles.codeBox} activeOpacity={0.7}>
            <Text style={styles.codeText}>+994</Text>
            <Ionicons name="chevron-down" size={16} color={colors.blackColor} />
          </TouchableOpacity>
          <TextInput style={[styles.input, { flex: 1 }]} value={phone} onChangeText={setPhone} placeholder="Enter Phone Number" placeholderTextColor={colors.placeholderColor} keyboardType="phone-pad" />
        </View>

        <Label text="Password" />
        <View style={styles.passwordBox}>
          <TextInput
            style={styles.passwordInput}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter password"
            placeholderTextColor={colors.placeholderColor}
            secureTextEntry={!showPassword}
            autoCapitalize="none"
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-outline" : "eye-off-outline"}
              size={22}
              color={colors.blackColor}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.rules}>
          {rules.map((r) => (
            <View key={r.text} style={styles.ruleRow}>
              <Ionicons
                name={r.ok ? "checkmark-circle" : "ellipse-outline"}
                size={18}
                color={r.ok ? colors.secondaryColor : colors.blackColor}
              />
              <Text style={styles.ruleText}>{r.text}</Text>
            </View>
          ))}
        </View>

        <CustomButton
          text="Create account"
          onPress={handleCreate}
          disabled={!isValid}
        />
      </ScrollView>
    </View>
  );
};

const Label = ({ text }) => (
  <View style={styles.label}>
    <Text style={styles.labelText}>{text}</Text>
    <Text style={styles.labelRequired}>*</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: colors.whiteColor 
},
  content: { 
    paddingTop: 50, 
    paddingHorizontal: 24, 
    paddingBottom: 40 
},
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },
  skip: { 
    fontSize: 18, 
    color: colors.secondaryColor 
},
  title: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    color: colors.blackColor,
    marginTop: 8,
    marginBottom: 32,
  },
  label: { 
    flexDirection: "row", 
    gap: 4, 
    marginTop: 16, 
    marginBottom: 8 
  },
  labelText: { fontSize: 14, color: colors.grayColor },
  labelRequired: { fontSize: 14, color: colors.dangerColor },
  input: {
    height: 52,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: colors.blackColor,
    borderColor: colors.borderColor,
    backgroundColor: colors.secondaryBackgroundColor,
  },
  phoneRow: { flexDirection: "row", gap: 8 },
  codeBox: {
    height: 52,
    width: 96,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.borderColor,
    backgroundColor: colors.secondaryBackgroundColor,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  codeText: { 
    fontSize: 16, 
    color: colors.blackColor 
},
  passwordBox: {
    height: 52,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    borderColor: colors.borderColor,
    backgroundColor: colors.secondaryBackgroundColor,
  },
  passwordInput: { 
    flex: 1, 
    fontSize: 16, 
    color: colors.blackColor 
},
  rules: { 
     marginTop: 12,
     marginBottom: 32,
     gap: 8 
    },
  ruleRow: { 
    flexDirection: "row", 
    alignItems: "center", 
    gap: 8
 },
  ruleText: { 
    fontSize: 14, 
    color: colors.grayColor 
},
});