import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { icons, images } from '@/constants';

interface Props {
  onPress?: () => void;
}

export const EquipmentCard = ({ onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} className="flex flex-col items-start w-60 h-80 relative">
      <Image source={images.dumbellRack} className="size-full rounded-2xl" />
      <Image source={images.cardGradient} className="size-full rounded-2xl absolute bottom-0" />
      <View className="flex flex-row items-center bg-white/90 px-3 py-1 rounded-full absolute top-3 right-3">
        <Text className="text-green text-xs font-rubik-bold pr-6">Alat Baru</Text>
      </View>
      <Image source={icons.newIcon} className="size-9 absolute right-2 top-3" />

      <View className="flex flex-col items-start absolute bottom-5 inset-x-5">
        <Text className="text-green text-2xl font-rubik-extrabold" numberOfLines={1}>
          Dumbell Rack
        </Text>
        <Text className="text-sm font-rubik text-white" numberOfLines={2}>
          Berbagai variant berat dumbell untuk kebutuhan angkat bebanmu.
        </Text>

        <View className="flex flex-row items-center justify-end w-full mt-2">
          <Image source={icons.heart} tintColor="white" className="size-6" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const GymPostCard = ({ onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-1 w-full px-3 py-4 rounded-lg bg-white shadow-lg shadow-green-100/90 relative"
    >
      <View className="flex flex-row items-center absolute px-2 top-6 right-4 bg-white/90 p-1 rounded-full z-50">
        <Text className="text-green text-[9px] font-rubik-bold">3 menit</Text>
      </View>
      <Image source={images.dimasCable} className="w-full h-40 rounded-lg" />

      <View className="flex flex-col mt-2">
        <Text className="text-black text-base font-rubik-bold ">Angkat dulu Boss !</Text>
        <Text className="text-xs font-rubik text-black" numberOfLines={2}>
          Gym Piyungan
        </Text>

        <View className="flex flex-row items-center justify-end mt-2">
          <Image source={icons.heart} tintColor="#191d31" className="w-5 h-5 mr-2" />
        </View>
      </View>
    </TouchableOpacity>
  );
};
