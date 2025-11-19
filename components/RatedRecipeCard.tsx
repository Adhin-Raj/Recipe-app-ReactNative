import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CardPropsType } from "./Card";

export default function RatedRecipeCard({ title, image, id }: CardPropsType) {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => router.push(`/Dish/${id}`)}
    >
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.contentContainer}>
        <Text style={[styles.foodTitle, { fontFamily: "inter" }]}>{title}</Text>
        <Image
          style={styles.ratingImg}
          source={require("../assets/image-icons/rating-stars.png")}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 300,
    height: 188,
    position: "relative",
    marginTop: 20,
  },
  image: {
    width: "100%",
    height: 188,
    position: "absolute",
    borderRadius: 20,
    overflow: "visible",
    opacity: 0.75,
  },
  contentContainer: {
    marginLeft: 8,
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 34,
  },
  foodTitle: {
    fontSize: 27,
    color: "#FFFFFF",
    fontFamily: "inter",
  },
  ratingImg: {
    height: 20,
    marginTop: 10,
  },
});
