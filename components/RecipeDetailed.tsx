import { RecipeType } from "@/context/RecipeDataContext";
import { BlurView } from "expo-blur";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function RecipeDetailed({
  name,
  ingredients,
  prepTimeMinutes,
  cookTimeMinutes,
  instructions,
}: RecipeType) {
  return (
     <BlurView intensity={99} tint="dark" style={styles.bottomSection}>
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.recipeTitle}>{name}</Text>
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
        <View style={styles.timeContainer}>
          <View>
            <Text style={styles.timeText}>PREP TIME</Text>
            <Text style={styles.timeText}>{prepTimeMinutes} minutes</Text>
          </View>
          <View>
            <Text style={styles.timeText}>COOK TIME</Text>
            <Text style={styles.timeText}>{cookTimeMinutes} minutes</Text>
          </View>
          <View>
            <Text style={styles.timeText}>TOTAL TIME</Text>
            <Text style={styles.timeText}>
              {cookTimeMinutes + prepTimeMinutes} minutes
            </Text>
          </View>
        </View>

        <Text style={styles.SubTitle}>Instruction</Text>
        <Text style={styles.timeText}>{instructions}</Text>
      </ScrollView>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  bottomSection: {
    position: "relative",
    height: "100%",
    borderRadius: 30,
    overflow: "hidden",
  },
  scrollContainer: {
    marginHorizontal: 20,
  },
  recipeTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontFamily: "Libre",
    textAlign: "left",
    marginTop: 21,
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
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#404249",
    borderTopColor: "#404249",
  },
  timeText: {
    fontSize: 12,
    fontFamily: "inter",
    lineHeight: 16 * 1.5,
    color: "white",
  },
  SubTitle: {
    fontFamily: "Inter-Bold",
    fontSize: 20,
    lineHeight: 16 * 1.5,
    color: "white",
    marginBlock: 18,
  },
});
