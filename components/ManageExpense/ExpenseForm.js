import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Input from "./Input";

export default function ExpenseForm() {
  const [inputValues, setInputValues] = useState({
    amount: '',
    date: '',
    description: ''
  });

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputValues((curInputvalues) => {
      return {
        ...curInputvalues,
        [inputIdentifier]: enteredValue
      }
    });
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangedHandler.bind(this, "amount"),
            value: inputValues.amount,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, "date"),
            value: inputValues.date,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          //autoCapitalize: 'none'
          //autoCorrect: false,
          onChangeText: inputChangedHandler.bind(this, "description"),
          value: inputValues.description,
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  form: {
    marginTop: 40
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 24,
    textAlign:'center'
  },
  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rowInput: {
  flex: 1
}

})