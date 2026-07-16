import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function SignUp() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">Sign Up</Text>
      <Link href="/sign-in" className="text-blue-500">
        Sign In
      </Link>
    </View>
  );
}
