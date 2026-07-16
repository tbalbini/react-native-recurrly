import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function SignIn() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">Sign In</Text>
      <Link href="/sign-up" className="text-blue-500">
        Sign Up
      </Link>
    </View>
  );
}
