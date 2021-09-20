import React, { useState } from "react";
import { StyleSheet, View, TextInput, Alert, Keyboard } from "react-native";
import { THEME } from "../theme/Theme";
import { AntDesign } from "expo-vector-icons";
import { AppButton } from "./UI/AppButton";

export const AddToDo = (props) => {
  const [value, setValue] = useState("");

  const pressHandler = () => {
    if (value.trim()) {
      props.onSubmit(value);
      setValue("");
      Keyboard.dismiss();
    } else {
      Alert.alert("Нельзя добавить дело без названия");
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="Введите занятие"
        autoCorrect={false}
        autoCapitalize="none"
      />

      <AppButton onPress={pressHandler} color={THEME.MAIN_COLOR}>
        <AntDesign name="plus" size={20} />
      </AppButton>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: 75 + "%",
    padding: 10,
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: THEME.MAIN_COLOR,
  },
});
