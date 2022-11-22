import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/styles";

export default function Input({ label,style, textInputConfig }) {

  const inputSytles = [styles.input];
  
  if (textInputConfig && textInputConfig.multiline) {
    inputSytles.push(styles.inputMultiline)
  }

  return (
    <View style={[styles.inputContainer , style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputSytles} {...textInputConfig} />
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
    
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: GlobalStyles.colors.primary700,
    },
    inputMultiline: {
      minHeight: 100,
      textAlignVertical: 'top'
  }
});
