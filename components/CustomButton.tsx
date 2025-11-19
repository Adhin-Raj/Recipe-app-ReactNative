import { useRouter } from "expo-router";
import React, { ReactNode } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

interface CustomButtonType {
  children: ReactNode;
  handleFun?:()=>void
}

export default function CustomButton({ children ,handleFun}: CustomButtonType) {


  const router = useRouter()

  return <TouchableOpacity onPress={()=>router.back()} style={styles.button}>{children}</TouchableOpacity>;
}

const styles = StyleSheet.create({
  button: {
    width: 24,
    height: 24,
  },
});
