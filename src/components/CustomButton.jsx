import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../../assets/constants/colors";

export const CustomButton = ({ text, onPress, disabled = false, style }) => {
  return (
    <TouchableOpacity
      style={[s.button, disabled && s.disabled, style]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <Text style={s.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  button: {
    height: 48,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primaryColor,
  },
  disabled: { opacity: 0.6 },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.whiteColor,
  },
});