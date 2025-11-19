import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import CustomButton from "./CustomButton";

export default function Menu() {
  return (
    <View style={styles.topBarContainer}>
      <Text style={styles.text}>Recommended</Text>
      <CustomButton>
        <Image
          width={24}
          height={24}
          source={require("../assets/image-icons/more-vertical.png")}
        />
      </CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({
  topBarContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
  },
  text: {
    fontSize: 20,
    color: "#FFFFFF",
    fontFamily: "inter",
  },
});
