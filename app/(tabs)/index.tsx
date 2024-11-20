import { Link } from "expo-router";
import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import BudayaCard from "../../components/[budayaCard]";

const CATEGORIES = [
  {
    id: 1,
    name: "Jakarta",
  },
  {
    id: 2,
    name: "Jawa Barat",
  },
  {
    id: 3,
    name: "Jawa Tengah",
  },
  {
    id: 4,
    name: "Jawa Timur",
  },
];

const DATA = [
  {
    id: "1",
    category_id: "4",
    name: "Reog Ponorogo",
    logo: "https://thumb.viva.id/vivabanyuwangi/1265x711/2024/09/10/66df9d1a37f81-5-keajaiban-reog-ponorogo-lebih-dari-sekadar-topeng-raksasa_banyuwangi.jpg",
  },
  {
    id: "2",
    category_id: "4",
    name: "Ludruk",
    logo: "https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/bobofoto/original/2766_ludruk.jpg",
  },
  {
    id: "3",
    category_id: "3",
    name: "Kirab Pusaka Malam 1 Suro Pura Mangkunegaran",
    logo: "https://www.askara.co/assets/images/news/2020/08/20200819081812_normal.jpg",
  },
  {
    id: "4",
    category_id: "3",
    name: "Tari Bondan",
    logo: "https://cdn1.katadata.co.id/media/images/thumb/2021/12/06/Tari_Bondan-2021_12_06-13_58_15_b6835983c359e97ba69f85b4b96f3e1b_960x640_thumb.jpg",
  },
  {
    id: "5",
    category_id: "2",
    name: "Tari Jaipong",
    logo: "https://asset.kompas.com/crops/VpXXfXOFR6F9T70pJ08HZZUjPOk=/0x0:0x0/750x500/data/photo/buku/63072e6009aaa.jpg",
  },
  {
    id: "6",
    category_id: "2",
    name: "Tari Merak",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/DSC_0624_yuri.jpg/1200px-DSC_0624_yuri.jpg",
  },
  {
    id: "7",
    category_id: "4",
    name: "Tumpeng Sewu",
    logo: "https://banyuwangikab.go.id/media/berita/original/rjbtfvrant_whatsapp-image-2024-06-10-at-095701.jpeg",
  },
  {
    id: "8",
    category_id: "2",
    name: "Penca Aliran Cimande",
    logo: "https://garispaksi.org/wp-content/uploads/2022/07/13029495_10206369093207276_5801932058078400785_o.jpg?w=1024",
  },
  {
    id: "9",
    category_id: "3",
    name: "Larung Sesaji",
    logo: "https://ik.imagekit.io/goodid/gnfi/uploads/articles/large-tradisi-larung-laut-bentuk-syukur-suku-jawa-atas-hasil-alamnya-f32be254b182535e505058.jpg",
  },
  {
    id: "10",
    category_id: "4",
    name: "Karapan Sapi",
    logo: "https://awsimages.detik.net.id/community/media/visual/2020/04/19/fb4bd37e-fae2-4ef3-ad7c-1274c1ec6f29_169.jpeg?w=600&q=90",
  },
  {
    id: "11",
    category_id: "1",
    name: "Silat Betawi",
    logo: "https://ik.imagekit.io/goodid/gnfi/uploads/articles/large-shutterstock-1861167325-d65010e0f62778009d1a35c6bebe6282.jpg?tr=w-390,h-260,fo-center",
  },
  {
    id: "12",
    category_id: "1",
    name: "Ondel-Ondel",
    logo: "https://asset.kompas.com/crops/ySNPX_4ePUqoiahg1zOTddL_DfI=/89x20:949x593/1200x800/data/photo/2018/06/23/3587516978.jpg",
  },
  {
    id: "13",
    category_id: "1",
    name: "Gambang Kromong",
    logo: "https://asset.kompas.com/crops/c67AhuP1Ucgd53R_5qhy1DbgXcE=/0x0:780x390/1200x800/data/photo/2013/05/16/1944493-set-gambang-kromong-betawi--780x390.jpg",
  },
  {
    id: "14",
    category_id: "1",
    name: "Nyorog",
    logo: "https://www.rmoljabar.id/uploads/images/2024/05/image_750x_6635d55d7338a.jpg",
  },
  {
    id: "15",
    category_id: "1",
    name: "Tanjidor",
    logo: "https://awsimages.detik.net.id/community/media/visual/2018/10/12/d8578749-c059-4a91-85bb-054714292311.jpeg?w=600&q=90",
  },
  {
    id: "16",
    category_id: "2",
    name: "Sintren",
    logo: "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2021/10/30/2665938166.jpg",
  },
  {
    id: "17",
    category_id: "2",
    name: "Blantek",
    logo: "https://www.senibudayabetawi.com/wp-content/uploads/2021/12/Blantek.jpg",
  },
  {
    id: "18",
    category_id: "3",
    name: "Tari Krida Jati",
    logo: "https://kuasakata.com/images/2020/11/16/alah_satu_kelompok_peserta.jpg",
  },
  {
    id: "19",
    category_id: "3",
    name: "Upacara Tedak Siten",
    logo: "https://doransouvenir.com/wp-content/uploads/2024/04/tedak-siten-Warisan-Budaya-Takbenda-Indonesia.jpg",
  },
  {
    id: "20",
    category_id: "4",
    name: "Tari Kuda Lumping",
    logo: "https://asset.kompas.com/crops/BbVhMJcpyRTkrWo1X4kdNgtpVBI=/18x7:987x654/1200x800/data/photo/2022/12/22/63a45b9f065c8.jpg",
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