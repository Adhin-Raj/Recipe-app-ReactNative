import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Card from "./Card";
import FilterSection from "./FilterSection";
import Menu from "./Menu";
import RatedRecipeCard from "./RatedRecipeCard";
import SectionWrapper from "./SectionWrapper";
import { useRecipe } from "@/hooks/useRecipe";
import { RecipeType } from "@/context/RecipeDataContext";
import { useEffect, useState } from "react";

export default function Home() {
  const { isLoading, recipeData } = useRecipe();
  const [activeFilter, setActiveFilter] = useState(0);
  const [data, setData] = useState<RecipeType[]>();

  useEffect(() => {
    setData(recipeData);
  }, [recipeData, isLoading]);

  const handleActiveFilter = (i: number, filterType: string) => {
    if (filterType === "All") {
      setData(recipeData);
      setActiveFilter(i);
    } else {
      const filtered = recipeData.filter((item) =>
        item.mealType.includes(filterType)
      );
      setActiveFilter(i);
      setData(filtered);
    }
  };

  console.log(data)

  return (
    <View>
      <SectionWrapper>
        <Text style={styles.headingText}>Our Recipes</Text>
      </SectionWrapper>
      <FilterSection
        handleActiveFilter={handleActiveFilter}
        activeFilter={activeFilter}
      />
      {isLoading ? (
        <ActivityIndicator
          size={30}
          color={"green"}
          style={{ justifyContent: "center", alignItems: "center" }}
        />
      ) : (
        <FlatList<RecipeType>
          contentContainerStyle={styles.listContainer}
          horizontal
          data={data}
          renderItem={({ item }) => (
            <Card title={item.name} image={item.image} id={item.id} />
          )}
        />
      )}
      <SectionWrapper>
        <Menu />
      </SectionWrapper>

      {isLoading ? (
        <ActivityIndicator
          size={30}
          color={"green"}
          style={{ justifyContent: "center", alignItems: "center" }}
        />
      ) : (
        <FlatList<RecipeType>
          contentContainerStyle={styles.listContainer}
          horizontal
          data={recipeData.slice(5,10)}
          renderItem={({ item }) => (
            <RatedRecipeCard
              title={item.name}
              image={item.image}
              id={item.id}
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    color: "#FFFFFF",
    fontSize: 36,
    fontFamily: "Libre",
    marginTop:20
  },
  listContainer: {
    gap: 20,
    paddingHorizontal:20
  },
});
