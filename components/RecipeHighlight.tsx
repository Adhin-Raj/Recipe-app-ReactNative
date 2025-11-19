import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import SectionWrapper from "./SectionWrapper";
import { RecipeType } from "@/context/RecipeDataContext";
import { useRouter } from "expo-router";

export default function RecipeHighlight({
  name,
  reviewCount,
  ingredients,
  id,
}: RecipeType) {
  const router = useRouter();

  return (
    <BlurView intensity={99} tint="dark" style={styles.bottomSection}>
      <SectionWrapper>
        <Text style={styles.recipeTitle}>{name}</Text>
        <View style={styles.ratingContainer}>
          <Image
            style={styles.ratingImg}
            source={require("@/assets/image-icons/rating-stars.png")}
          />
          <Text style={styles.reviewText}>{reviewCount}K Reviews</Text>
        </View>
        <View style={styles.listContainer}>
          <Text style={styles.listTitle}>Ingredients : </Text>
          {ingredients.map((item, index) => {
            return (
              <Text key={index} style={styles.list}>
                {item} {ingredients.length - 1 === index ? "." : ","}
              </Text>
            );
          })}
        </View>
        <TouchableOpacity
          style={styles.recipeBtn}
          onPress={() => router.push(`/Recipe/${id}`)}
        >
          <Text style={styles.recipeBtnText}>VIEW RECIPE</Text>
        </TouchableOpacity>
      </SectionWrapper>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  bottomSection: {
    position: "relative",
    height: "100%",
    paddingBottom: 20,
    borderRadius: 30,
    overflow: "hidden",
  },
  recipeTitle: {
    color: "#FFFFFF",
    fontSize: 36,
    fontFamily: "Libre",
    textAlign: "left",
    marginTop: 25,
  },
  ratingContainer: {
    flexDirection: "row",
    gap: 10,
  },
  ratingImg: {
    height: 17,
    marginTop: 10,
  },
  reviewText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "inter",
    marginTop: 10,
  },
  listContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  listTitle: {
    fontFamily: "Inter-Bold",
    fontSize: 16,
    lineHeight: 16 * 1.5,
    color: "white",
  },
  list: {
    fontSize: 14,
    fontFamily: "inter",
    lineHeight: 16 * 1.5,
    color: "white",
  },
  recipeBtn: {
    width: "100%",
    backgroundColor: "#E27D19",
    marginTop: 30,
    paddingVertical: 15,
    borderRadius: 30,
  },
  recipeBtnText: {
    color: "#FFFFFF",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 16 * 1.5,
    fontFamily: "inter",
  },
});
