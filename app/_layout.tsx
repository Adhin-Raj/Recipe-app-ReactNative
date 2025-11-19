import { RecipeProvider } from "@/context/RecipeDataContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <RecipeProvider>
      <Stack screenOptions={{ headerShown: false }} />;
    </RecipeProvider>
  );
}
