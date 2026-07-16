import { Link, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function SubscriptionDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  console.log(id);
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Subscription Detail: {id}
      </Text>
      <Link href="/" className="bg-blue-500 p-2 rounded-md mt-4">
        <Text className="text-white">Go back</Text>
      </Link>
    </View>
  );
}
