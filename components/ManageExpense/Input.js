import { View, Text, TextInput } from 'react-native'
import React from 'react'

export default function Input({label, textInputConfig }) {
  return (
    <View>
          <Text>{label}</Text>
          <TextInput {...textInputConfig} />
    </View>
  )
}