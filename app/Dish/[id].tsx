import RecipeHighlight from "@/components/RecipeHighlight";
import SectionWrapper from "@/components/SectionWrapper";
import NavBar from "@/components/TopNavBar";
import { useRecipe } from "@/hooks/useRecipe";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Dish() {
  const { id } = useLocalSearchParams();
  const { recipeData } = useRecipe();
  const imageUrl = recipeData[Number(id) - 1].image;
  return (
    <SafeAreaView style={styles.dishContainer}>
      <Image style={styles.recipeImg} source={{ uri: imageUrl }} />
      <SafeAreaView style={styles.topSection}>
        <SectionWrapper>
          <NavBar />
        </SectionWrapper>
      </SafeAreaView>
            <ScrollView style={styles.scrollContainer}>
      <RecipeHighlight {...recipeData[Number(id)-1]}/>
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
    height: "50%",
    position: "relative",
    opacity: 0.7,
    top: 0,
  },
  topSection: {
    position: "absolute",
    width: "100%",
    height: "50%",
  },
  scrollContainer: {
    marginTop: -40,
    borderRadius: 30,
  },
});
