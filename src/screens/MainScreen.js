import React, { useState, useEffect, useContext, useCallback } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { AddToDo } from "../components/AddToDo";
import { Todo } from "../components/Todo";
import { THEME } from "../theme/Theme";
import { TodoContext } from "../context/todo/todoContext";
import { ScreenContext } from "../context/screen/screenContext";
import { AppLoader } from "../components/UI/AppLoader";
import { AppTextRegular } from "../components/UI/AppTextRegular";
import { AppButton } from "../components/UI/AppButton";

export const MainScreen = (props) => {
  const { todos, addTodo, fetchTodos, removeTodo, loading, error } =
    useContext(TodoContext);
  const { changeScreen } = useContext(ScreenContext);
  const [deviceWidth, setDeviceWidth] = useState(
    Dimensions.get("window").width - THEME.PADDING_HORIZONTAL * 2
  );

  const loadTodos = useCallback(async () => await fetchTodos(), [fetchTodos]);

  useEffect(() => {
    loadTodos();
  }, []);

  useEffect(() => {
    const update = () => {
      setDeviceWidth(
        Dimensions.get("window").width - THEME.PADDING_HORIZONTAL * 2
      );
    };

    Dimensions.addEventListener("change", update);

    return () => Dimensions.removeEventListener("change");
  });

  if (loading) {
    return <AppLoader />;
  }

  if (error) {
    return (
      <View style={styles.center}>
        <AppTextRegular style={styles.error}>{error}</AppTextRegular>
        <AppButton onPress={loadTodos} color={THEME.MAIN_COLOR}>
          Повторить
        </AppButton>
      </View>
    );
  }

  let content = (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: deviceWidth,
        }}
      >
        <FlatList
          keyExtractor={(item) => {
            item.id;
          }}
          data={todos}
          renderItem={({ item }) => (
            <Todo todo={item} removeTodo={removeTodo} onOpen={changeScreen} />
          )}
        />
      </View>
    </View>
  );

  if (todos.length === 0) {
    content = (
      <View style={styles.imgWrap}>
        <Image
          style={styles.image}
          source={require("../../assets/noItems.png")}
        />
      </View>
    );
  }
  return (
    <View>
      <View style={styles.container}>
        <AddToDo onSubmit={addTodo} />
      </View>
      {content}
      <ScrollView style={styles.todosContainer}></ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: THEME.PADDING_VERTICAL,
  },
  todosContainer: {
    marginHorizontal: 10,
  },
  imgWrap: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    height: 300,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    fontSize: 20,
    color: THEME.MAIN_COLOR,
    marginBottom: 10,
  },
});
