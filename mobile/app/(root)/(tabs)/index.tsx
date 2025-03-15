import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-3xl font-rubik text-secondary">Welcome to BlackBox Camp</Text>

      <Link href="/sign-in">Go to SignIn</Link>
      <Link href="/check-situasi">Go to check situasi</Link>
      <Link href="/profile">Go to profile</Link>
    </View>
  );
}
