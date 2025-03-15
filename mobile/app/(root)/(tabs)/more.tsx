import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  Alert,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { icons, images } from '@/constants';
import { settings } from '@/constants/data';
import { useGlobalContext } from '@/lib/global-provider';
import { logout } from '@/lib/supabase';

interface SettingsItemProps {
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void;
  textStyle?: string;
  tintColorImage?: string;
  showArrow?: boolean;
}

const SettingsItem = ({
  icon,
  title,
  onPress,
  textStyle,
  tintColorImage,
  showArrow = true,
}: SettingsItemProps) => (
  <TouchableOpacity onPress={onPress} className="flex flex-row items-center justify-between py-3">
    <View className="flex flex-row items-center gap-4">
      <Image source={icon} tintColor={`${tintColorImage}`} className="size-9" />
      <Text className={`text-md font-rubik-medium ${textStyle}`}>{title}</Text>
    </View>

    {showArrow && <Image source={icons.rightArrow} className="size-5" tintColor="#f8fafc" />}
  </TouchableOpacity>
);

const More = () => {
  const { refetch, data } = useGlobalContext();

  const handleLogout = async () => {
    const result = await logout();

    if (result) {
      Alert.alert('Success', 'Kamu berhasil logout');
      refetch();
    } else {
      Alert.alert('Error', 'Telah terjadi kesalahan saat proses logout');
    }
  };

  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="pb-32 px-7">
        <View className="flex flex-row items-center justify-between mt-6">
          <Text className="text-white text-xl font-rubik-bold">Selengkapnya</Text>
          <Image source={icons.bell} className="size-6" tintColor="white" />
        </View>

        <View className="flex flex-row justify-center mt-5">
          <View className="flex flex-col items-center relative mt-5">
            <Image source={{ uri: data?.userAvatar }} className="size-44 relative rounded-full" />
            <TouchableOpacity className="absolute bottom-11 right-16">
              <Image source={icons.edit} className="size-9" />
            </TouchableOpacity>

            <Text className="text-white text-2xl font-rubik-bold mt-4">{data?.fullName}</Text>
          </View>
        </View>
        <View className="flex flex-col mt-10">
          <SettingsItem
            textStyle="text-white"
            tintColorImage="white"
            icon={icons.wallet}
            title="Subscription"
          />
          <SettingsItem
            textStyle="text-white"
            tintColorImage="white"
            icon={icons.dumbell}
            title="Strength Log"
          />
        </View>

        <View className="flex flex-col mt-5 border-t-[.5px] pt-5 border-blue">
          {settings.map((item, index) => (
            <SettingsItem key={index} textStyle="text-white" {...item} />
          ))}
        </View>
        <View className="flex flex-col mt-5 border-t-[.5px] pt-5 border-blue">
          <SettingsItem
            icon={icons.logout}
            title="Logout"
            textStyle="text-danger"
            showArrow={false}
            onPress={handleLogout}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default More;
