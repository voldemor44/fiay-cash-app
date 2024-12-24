import { colors } from "../constants";
import { useColorScheme } from "react-native";

export function useThemeColors() {
  const theme = useColorScheme() ?? "light";

  return colors[theme];
}
