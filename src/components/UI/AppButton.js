import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import { THEME } from "../../theme/Theme";
import { AppTextBold } from "./AppTextBold";

export const AppButton = (props) => {
  const Wrapper =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <Wrapper onPress={props.onPress} activeOpacity={0.7}>
      <View style={{ ...styles.button, backgroundColor: props.color }}>
        <AppTextBold style={styles.text}>{props.children}</AppTextBold>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  text: {
    color: "#fff",
  },
});
