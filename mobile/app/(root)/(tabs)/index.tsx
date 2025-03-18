import React from 'react';
import { icons, images } from '@/constants';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { EquipmentCard, GymPostCard } from '@/components/Cards';
import Filters from '@/components/Filters';
import { useGlobalContext } from '@/lib/global-provider';

export default function Home() {
  const { data } = useGlobalContext();

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={({ item }) => <GymPostCard />}
        keyExtractor={(item) => item.toString()}
        numColumns={2}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View className="px-5">
            <View className="flex flex-row items-center justify-between mt-5">
              <View className="flex flex-row items-center">
                <Image source={{ uri: data?.userAvatar }} className="size-12 rounded-full" />
                <View className="flex flex-col items-start ml-2 justify-center">
                  <Text className="text-white text-xs font-rubik">Selamat Pagi</Text>
                  <Text className="text-white text-base font-rubik-medium">{data?.fullName}</Text>
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
              <FlatList
                data={[1, 2, 3]}
                renderItem={({ item }) => <EquipmentCard />}
                keyExtractor={(item) => item.toString()}
                horizontal
                bounces={false}
                showsHorizontalScrollIndicator={false}
                contentContainerClassName="flex gap-5 mt-5"
              />
            </View>
            <View className="flex flex-row items-center justify-between">
              <Text className="text-white text-xl font-rubik-bold">Gym Hub</Text>
              <TouchableOpacity>
                <Text className="text-secondary text-base font-rubik-bold">Selengkapnya</Text>
              </TouchableOpacity>
            </View>

            <Filters />
          </View>
        }
      />
    </SafeAreaView>
  );
}
