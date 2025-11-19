import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface FilterSectionProps{
  handleActiveFilter:(index:number,item:string)=>void,
  activeFilter:number
}

export default function FilterSection({handleActiveFilter,activeFilter}:FilterSectionProps) {
  const filterText = ["All", "Breakfast", "Lunch", "Dessert", "Dinner", "Snack","Side Dish","Appetizer","Beverage"];
  
  return (
    <FlatList
      horizontal
      data={filterText}
      contentContainerStyle={styles.filterContainer}
      renderItem={({ item, index }) => (
        <TouchableOpacity onPress={()=>handleActiveFilter(index,item)}>
          <Text style={[styles.listText, index === activeFilter && { color: "#E27D19" }]}>
            {item}
          </Text>
          {index === activeFilter && <View style={styles.underline}></View>}
        </TouchableOpacity>
      )}
    ></FlatList>
  );
}

const styles = StyleSheet.create({
  filterContainer: {
    gap: 20,
    marginTop: 22,
    paddingHorizontal: 20,
  },
  listText: {
    color: "#5F6062",
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 4,
    fontFamily: "inter",
  },
  underline: {
    height: 1,
    backgroundColor: "#E27D19",
  },
});
