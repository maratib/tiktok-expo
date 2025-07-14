import Button from "@/components/Button";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function LoginScreen() {
  const router = useRouter();
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-red-400 text-3xl font-bold">Login</Text>

      <Button
        name="Home"
        className="mt-4 bg-blue-500 px-6 py-2 rounded"
        onPress={() => router.push("/(tabs)")}
      />

      <Button
        name="Sign Up"
        className="mt-4 bg-red-500 px-6 py-2 rounded"
        onPress={() => router.push("/(auth)/signup")}
      />
    </View>
  );
}
