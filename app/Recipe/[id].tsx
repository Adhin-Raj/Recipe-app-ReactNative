import RecipeDetailed from "@/components/RecipeDetailed";
import SectionWrapper from "@/components/SectionWrapper";
import NavBar from "@/components/TopNavBar";
import { useRecipe } from "@/hooks/useRecipe";
import { useLocalSearchParams } from "expo-router/build/hooks";
import React from "react";
import { Image, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Recipe() {
  const { recipeData } = useRecipe();
  const { id } = useLocalSearchParams();
  const recipe = recipeData[Number(id) - 1];

  return (
    <SafeAreaView style={styles.dishContainer}>
      <Image style={styles.recipeImg} source={{ uri: recipe.image }} />

      <SafeAreaView style={styles.topSection}>
        <SectionWrapper>
          <NavBar hasMenu={false} />
        </SectionWrapper>
      </SafeAreaView>

      <ScrollView style={styles.scrollContainer}>
        <RecipeDetailed {...recipe} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  dishContainer: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
  recipeImg: {
    height: "60%",
    position: "relative",
    opacity: 0.7,
    width: "100%",
  },
  topSection: {
    position: "absolute",
    width: "100%",
    height: "50%",
  },
  scrollContainer: {
    marginTop: -190,
    borderRadius: 30,
  },
});
