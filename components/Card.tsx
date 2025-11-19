import { Link, useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export interface CardPropsType {
  title: string;
  image: string;
  id:number
}

const Card = ({ title, image,id }: CardPropsType) => {

  const router = useRouter()
  
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={()=>router.push(`/Dish/${id}`)} >
        <Image style={styles.foodImg} source={{ uri: image }} />
      </TouchableOpacity>
      <Text style={styles.foodTitle}>{title}</Text>
      <Image
        style={styles.ratingImg}
        source={require("@/assets/image-icons/rating-stars.png")}
      />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 20,
    width: 227,
    
  },
  foodImg: {
    width: 227,
    height: 182,
    borderRadius: 20,
  },
  foodTitle: {
    fontSize: 25,
    fontWeight: "regular",
    flexWrap: "wrap",
    color: "#FFFFFF",
    fontFamily: "inter",
    marginTop: 5,
    textAlign: "left",
  },
  ratingImg: {
    height: 20,
    marginTop: 5,
  },
});
