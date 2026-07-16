import { Link } from "expo-router";
import { Text, View } from "react-native";
import "../../global.css";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" className="bg-blue-500 p-2 rounded-md mt-4">
        <Text className="text-white">Go to Onboarding</Text>
      </Link>
      <Link href="/(auth)/sign-in" className="bg-blue-500 p-2 rounded-md mt-4">
        <Text className="text-white">Go to Sign In</Text>
      </Link>
      <Link href="/(auth)/sign-up" className="bg-blue-500 p-2 rounded-md mt-4">
        <Text className="text-white">Go to Sign Up</Text>
      </Link>

      <Link
        href="/suscriptions/spotify"
        className="bg-red-500 p-2 rounded-md mt-4"
      >
        <Text className="text-white">Spotify Suscription</Text>
      </Link>
      <Link
        href={{ pathname: "/suscriptions/[id]", params: { id: "netflix" } }}
        className="bg-red-500 p-2 rounded-md mt-4"
      >
        <Text className="text-white">Claude Max Suscription</Text>
      </Link>
    </View>
  );
}
