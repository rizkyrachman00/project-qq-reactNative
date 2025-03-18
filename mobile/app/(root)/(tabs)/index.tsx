import React from 'react';
import { icons, images } from '@/constants';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { EquipmentCard, GymPostCard } from '@/components/Cards';

export default function Home() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="px-5">
        <View className="flex flex-row items-center justify-between mt-5">
          <View className="flex flex-row items-center">
            <Image source={images.avatar} className="size-12 rounded-full" />
            <View className="flex flex-col items-start ml-2 justify-center">
              <Text className="text-white text-xs font-rubik">Selamat Pagi</Text>
              <Text className="text-white text-base font-rubik-medium">Rizkyrachman</Text>
            </View>
          </View>
          <Image source={icons.bell} className="size-6" tintColor="white" />
        </View>

        <View className="my-5">
          <View className="flex flex-row items-center justify-between">
            <Text className="text-white text-xl font-rubik-bold">Alat Gym</Text>
            <TouchableOpacity>
              <Text className="text-secondary text-base font-rubik-bold">Selengkapnya</Text>
            </TouchableOpacity>
          </View>

          <View className="flex flex-row gap-5 mt-5">
            <EquipmentCard />
            <EquipmentCard />
            <EquipmentCard />
          </View>
        </View>
        <View className="flex flex-row items-center justify-between">
          <Text className="text-white text-xl font-rubik-bold">Gym Hub</Text>
          <TouchableOpacity>
            <Text className="text-secondary text-base font-rubik-bold">Selengkapnya</Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row gap-5 mt-5">
          <GymPostCard />
          <GymPostCard />
        </View>

        {/* <EquipmentCard /> */}
      </View>
    </SafeAreaView>
  );
}
