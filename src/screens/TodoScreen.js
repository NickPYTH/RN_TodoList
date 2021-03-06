import React, { useContext, useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { FontAwesome, AntDesign } from "expo-vector-icons";
import { AppCard } from "../components/UI/AppCard";
import { THEME } from "../theme/Theme";
import EditModal from "../components/EditModal";
import { AppTextBold } from "../components/UI/AppTextBold";
import { AppButton } from "../components/UI/AppButton";
import { TodoContext } from "../context/todo/todoContext";
import { ScreenContext } from "../context/screen/screenContext";

export const TodoScreen = (props) => {
  const { todos, addTodo, updateTodo, removeTodo } = useContext(TodoContext);
  const { todoId, changeScreen } = useContext(ScreenContext);

  const todo = todos.find((todo) => todo.id === todoId);

  const [modal, setModal] = React.useState(false);

  const saveHandler = async (title) => {
    await updateTodo(todo.id, title);
    setModal(false);
  };

  return (
    <View>
      <EditModal
        onSave={saveHandler}
        value={todo.title}
        visible={modal}
        onCancel={() => setModal(false)}
      />
      <AppCard style={styles.card}>
        <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
        <AppButton onPress={() => setModal(true)} color={THEME.MAIN_COLOR}>
          <FontAwesome name="edit" size={20} />
        </AppButton>
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <AppButton
            onPress={() => changeScreen(null)}
            color={THEME.GRAY_COLOR}
          >
            <AntDesign name="left" size={20} />
          </AppButton>
        </View>
        <View style={styles.button}>
          <AppButton
            onPress={() => {
              removeTodo(todo.id);
            }}
            color={THEME.DANGER_COLOR}
          >
            <FontAwesome name="remove" size={20} />
          </AppButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    width: Dimensions.get("window").width > 400 ? 150 : 100,
  },
  title: {
    fontSize: 26,
  },
  card: {
    marginBottom: 20,
    padding: 15,
  },
});
