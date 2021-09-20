import React from "react";
import { StyleSheet, View, Platform } from "react-native";
import { THEME } from "../theme/Theme";
import { AppTextBold } from "../components/UI/AppTextBold";

export const Navbar = (props) => {
  return (
    <View
      style={{
        ...styles.navbar,
        ...Platform.select({
          ios: styles.navbarIOS,
          android: styles.navbarAndroid,
        }),
      }}
    >
      <AppTextBold style={styles.text}>{props.title}</AppTextBold>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: THEME.MAIN_COLOR,
    paddingBottom: 10,
  },
  navbarAndroid: {
    backgroundColor: THEME.MAIN_COLOR,
  },
  navbarIOS: {
    marginTop: 10,
    backgroundColor: "#fff",
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 1,
  },
  text: {
    color: Platform.OS === "ios" ? THEME.MAIN_COLOR : "#fff",
    fontSize: 20,
  },
});
