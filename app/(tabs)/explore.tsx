import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

export default function AboutAppScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-100 p-6">
      {/* App Logo */}
      <View className="items-center mb-6">
        <Image
          className="w-32 h-32 rounded-lg"
          source={require('../../assets/images/icon (2).png')}
        />
      </View>

      {/* App Name */}
      <Text className="text-2xl font-bold text-gray-800 text-center mb-4">
        Arunika Nusantara
      </Text>

      <Text className="text-lg text-gray-600 leading-7 mb-6">
        Visi: Menjadi sumber informasi terpercaya tentang budaya Nusantara.
        {"\n"}Misi: Mengedukasi dan melestarikan budaya Indonesia melalui teknologi.
      </Text>

      <Text className="text-xl font-bold text-gray-800 mb-4">Statistik:</Text>
      <Text className="text-lg text-gray-600">- 10,000+ Pengguna Aktif (Belum ada data yang fiks)</Text>
      <Text className="text-lg text-gray-600">- 100+ Budaya Terdaftar</Text>

      <Text className="text-xl font-bold text-gray-800 mb-4">Fitur Utama:</Text>
      <View className="space-y-2">
        <Text className="text-lg text-gray-600">- Informasi lengkap tentang budaya Indonesia</Text>
        <Text className="text-lg text-gray-600">- Kalender acara budaya</Text>
        <Text className="text-lg text-gray-600">- Galeri foto dan video</Text>
      </View>

      <Text className="text-xl font-bold text-gray-800 mt-8 mb-4">Testimoni:</Text>
      <Text className="text-lg text-gray-600 italic">"Aplikasi ini sangat membantu saya memahami budaya Indonesia!" - Arsya</Text>

      <Text className="text-xl font-bold text-gray-800 mt-8 mb-4">Kontak:</Text>
      <Text className ="text-lg text-gray-600">Email: support@arunika.com</Text>
      <Text className="text-lg text-gray-600">FAQ: www.arunika.com/faq</Text>

      <Text className="text-xl font-bold text-gray-800 mt-8 mb-4">Ikuti Kami:</Text>
      <Text className="text-lg text-gray-600">Instagram: @arunika_nusantara</Text>
      <Text className="text-lg text-gray-600">Facebook: Arunika Nusantara</Text>

      <Text className="text-xl font-bold text-gray-800 mt-8 mb-4">Rencana Pengembangan:</Text>
      <Text className="text-lg text-gray-600">- Fitur baru: Forum diskusi budaya (Coming Soon!)</Text>
      <Text className="text-lg text-gray-600">- Pembaruan konten bulanan</Text>
    </ScrollView>
  );
}