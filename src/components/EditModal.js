import React, { useState } from "react";
import {
  Button,
  Modal,
  View,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";
import { THEME } from "../theme/Theme";

export default function EditModal(props) {
  const [title, setTitle] = useState(props.value);

  const saveHandler = () => {
    if (title.trim().length < 3) {
      Alert.alert(
        "Ошибка",
        `Минимальная длина 3 символа, сейчас ${title.trim().length}`
      );
    } else {
      props.onSave(title);
    }
  };

  const cancelHandler = () => {
    setTitle(props.value);
    props.onCancel();
  };

  return (
    <Modal visible={props.visible} animationType="slide" transparent={false}>
      <View style={styles.wrap}>
        <TextInput
          style={styles.input}
          placeholder="Введите название"
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={64}
          value={title}
          onChangeText={setTitle}
        />
        <View style={styles.buttons}>
          <Button title="Сохранить" onPress={saveHandler} />
          <Button
            title="Отменить"
            onPress={cancelHandler}
            color={THEME.DANGER_COLOR}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
    width: "80%",
  },
  buttons: {
    flexDirection: "row",
    width: "100%",
    marginTop: 10,
    justifyContent: "space-around",
  },
});
