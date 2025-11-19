import React from "react";
import { Image, StyleSheet, View } from "react-native";
import CustomButton from "./CustomButton";

interface NavBarProps {
  handleFun?: () => void;
  hasMenu?: boolean;
}

export default function NavBar({ handleFun, hasMenu = true }: NavBarProps) {
  return (
    <View style={styles.topBarContainer}>
      <CustomButton handleFun={handleFun}>
        <Image
          width={24}
          height={24}
          source={require("../assets/image-icons/arrow-left.png")}
        />
      </CustomButton>
      {hasMenu && (
        <CustomButton handleFun={handleFun}>
          <Image
            width={24}
            height={24}
            source={require("../assets/image-icons/menu.png")}
          />
        </CustomButton>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  topBarContainer: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
