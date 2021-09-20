import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AppTextRegular } from "../components/UI/AppTextRegular";

export const Todo = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        props.onOpen(props.todo.id);
      }}
      onLongPress={() => props.removeTodo(props.todo.id)}
    >
      <View style={styles.todo}>
        <AppTextRegular>{props.todo.title}</AppTextRegular>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5,
    marginBottom: 10,
  },
});
