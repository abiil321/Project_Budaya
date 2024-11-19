import { Link } from "expo-router";
import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import BudayaCard from "../../components/[budayaCard]";

const CATEGORIES = [
  {
    id: 1,
    name: "Jawa Barat",
  },
  {
    id: 2,
    name: "Jawa Tengah",
  },
  {
    id: 3,
    name: "Jawa Timur",
  },
];

const DATA = [
  {
    id: "1",
    category_id: "3",
    name: "Reog Ponorogo",
    logo: "https://thumb.viva.id/vivabanyuwangi/1265x711/2024/09/10/66df9d1a37f81-5-keajaiban-reog-ponorogo-lebih-dari-sekadar-topeng-raksasa_banyuwangi.jpg",
  },
  {
    id: "2",
    category_id: "3",
    name: "Ludruk",
    logo: "https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/bobofoto/original/2766_ludruk.jpg",
  },
  {
    id: "3",
    category_id: "2",
    name: "Kirab Pusaka Malam 1 Suro Pura Mangkunegaran",
    logo: "https://www.askara.co/assets/images/news/2020/08/20200819081812_normal.jpg",
  },
  {
    id: "4",
    category_id: "2",
    name: "Tari Bondan",
    logo: "https://cdn1.katadata.co.id/media/images/thumb/2021/12/06/Tari_Bondan-2021_12_06-13_58_15_b6835983c359e97ba69f85b4b96f3e1b_960x640_thumb.jpg",
  },
  {
    id: "5",
    category_id: "1",
    name: "Tari Jaipong",
    logo: "https://asset.kompas.com/crops/VpXXfXOFR6F9T70pJ08HZZUjPOk=/0x0:0x0/750x500/data/photo/buku/63072e6009aaa.jpg",
  },
  {
    id: "6",
    category_id: "1",
    name: "Tari Merak",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/DSC_0624_yuri.jpg/1200px-DSC_0624_yuri.jpg",
  },
  {
    id: "7",
    category_id: "3",
    name: "Tumpeng Sewu",
    logo: "https://banyuwangikab.go.id/media/berita/original/rjbtfvrant_whatsapp-image-2024-06-10-at-095701.jpeg",
  },
  {
    id: "8",
    category_id: "1",
    name: "Penca Aliran Cimande",
    logo: "https://garispaksi.org/wp-content/uploads/2022/07/13029495_10206369093207276_5801932058078400785_o.jpg?w=1024",
  },
  {
    id: "9",
    category_id: "2",
    name: "Larung Sesaji",
    logo: "https://ik.imagekit.io/goodid/gnfi/uploads/articles/large-tradisi-larung-laut-bentuk-syukur-suku-jawa-atas-hasil-alamnya-f32be254b182535e505058.jpg",
  },
  {
    id: "10",
    category_id: "3",
    name: "Karapan Sapi",
    logo: "https://awsimages.detik.net.id/community/media/visual/2020/04/19/fb4bd37e-fae2-4ef3-ad7c-1274c1ec6f29_169.jpeg?w=600&q=90",
  },
];


export default function HomeScreen() {
  const [budaya, setBudaya] = useState(DATA);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filterBudaya = (category) => {
    setSelectedCategory(category);
    if (category) {
      const filteredBudaya = DATA.filter((budaya) => budaya.category_id === category.toString());
      setBudaya(filteredBudaya);
    } else {
      setBudaya(DATA); // Show all if no category is selected
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[#005F65]"> 
      
      <View className="justify-center items-center">
        <View className="items-center bg-emas mx-4 h-12 w-11/12"><Text className="text-2xl font-bold">Budaya Nusantara Indonesia</Text>
        </View>
        <FlatList
          data={CATEGORIES}
          horizontal
          renderItem={({ item }) => (
            <Pressable onPress={() => filterBudaya(item.id)}>
              <Text
                className={`m-2 border border-gray-300 p-2 rounded-full text-center ${
                  selectedCategory === item.id ? "bg-blue-500 text-white" : "bg-gray-100 text-black"
                }`}
              >
                {item.name}
              </Text>
            </Pressable>
          )}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
  
      {/* Daftar Budaya */}
      <FlatList
        data={budaya}
        numColumns={2}
        renderItem={({ item }) => <BudayaCard item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ alignItems: "center" }}
      />
    </SafeAreaView>
  );
}