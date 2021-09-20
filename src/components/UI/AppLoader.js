import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { THEME } from "../../theme/Theme";

export const AppLoader = () => {
  return (
    <View style={styles.center}>
      <ActivityIndicator size="large" color={THEME.MAIN_COLOR} />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
