import { View, Text } from "react-native";
import React from "react";
import Input from "./Input";

export default function ExpenseForm() {
  function amountChangedHandler() {}

  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: amountChangedHandler,
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          //autoCapitalize: 'none'
          //autoCorrect: false,
        }}
      />
    </View>
  );
}
