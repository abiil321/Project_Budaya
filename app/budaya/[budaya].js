import { View, Text, Image } from "react-native-web";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import FilmCard from "../../components/[budayaCard]";

const DATA = [
  {
    id: "1",
    category_id: "3",
    name: "Reog Ponorogo",
    logo: "https://thumb.viva.id/vivabanyuwangi/1265x711/2024/09/10/66df9d1a37f81-5-keajaiban-reog-ponorogo-lebih-dari-sekadar-topeng-raksasa_banyuwangi.jpg",
    description: "Reog Ponorogo adalah kesenian tradisional dari Ponorogo, Jawa Timur yang menceritakan tentang perang antara Kerajaan Kediri dan Kerajaan Bantarangin. Reog Ponorogo biasanya dipentaskan dalam acara-acara seperti pernikahan, khitanan, dan hari-hari besar nasional.",
  },
  {
    id: "2",
    category_id: "3",
    name: "Ludruk",
    logo: "https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/bobofoto/original/2766_ludruk.jpg",
    description:"Ludruk adalah seni pertunjukan teater tradisional Jawa Timur yang menggabungkan tarian, nyanyian, dan drama. Ludruk biasanya bercerita tentang kehidupan sehari-hari, perjuangan, atau legenda, dan diselingi dengan lawakan dan iringan gamelan.",
  },
  {
    id: "3",
    category_id: "2",
    name: "Kirab Pusaka Malam 1 Suro Pura Mangkunegaran",
    logo: "https://www.askara.co/assets/images/news/2020/08/20200819081812_normal.jpg",
    description:"Kirab Pusaka Malam 1 Suro adalah tradisi yang digelar di Pura Mangkunegaran, Surakarta, Jawa Tengah untuk menyambut tahun baru Jawa atau 1 Suro. Acara ini merupakan wujud rasa syukur dan doa untuk tahun yang akan datang.",
  },
  {
    id: "4",
    category_id: "2",
    name: "Tari Bondan",
    logo: "https://cdn1.katadata.co.id/media/images/thumb/2021/12/06/Tari_Bondan-2021_12_06-13_58_15_b6835983c359e97ba69f85b4b96f3e1b_960x640_thumb.jpg",
    description:"Tari Bondan adalah tarian tradisional yang berasal dari Surakarta, Jawa Tengah. Tarian ini menggambarkan kasih sayang seorang ibu kepada anaknya, serta keseharian seorang ibu dalam mengasuh dan membantu suami.",
  },
  {
    id: "5",
    category_id: "1",
    name: "Tari Jaipong",
    logo: "https://asset.kompas.com/crops/VpXXfXOFR6F9T70pJ08HZZUjPOk=/0x0:0x0/750x500/data/photo/buku/63072e6009aaa.jpg",
    description:"Tari Jaipong adalah tarian tradisional yang berasal dari Jawa Barat dan merupakan salah satu identitas budaya penting di provinsi tersebut. Tarian ini merupakan gabungan dari beberapa kesenian tradisional, seperti Wayang Golek, Pencak Silat, Ketuk Tilu, Bajidoran, dan Topeng Banjet.",
  },
  {
    id: "6",
    category_id: "1",
    name: "Tari Merak",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/DSC_0624_yuri.jpg/1200px-DSC_0624_yuri.jpg",
    description:"Tari Merak adalah tarian yang berasal dari Bandung, Jawa Barat, dan terinspirasi dari burung merak. Gerakan tari yang meniru tingkah laku burung merak jantan yang sedang memamerkan keindahan sayapnya. Tari Merak berkembang di berbagai daerah, seperti Jawa Tengah dengan nama Tari Merak Subal yang diciptakan S. Maridi pada tahun 1969.",
  },
  {
    id: "7",
    category_id: "3",
    name: "Tumpeng Sewu",
    logo: "https://banyuwangikab.go.id/media/berita/original/rjbtfvrant_whatsapp-image-2024-06-10-at-095701.jpeg",
    description:"Tumpeng Sewu adalah tradisi adat makan bersama yang digelar oleh Suku Osing di Desa Kemiren, Banyuwangi, Jawa Timur. Tradisi ini biasanya diadakan seminggu sebelum Idul Adha.",
  },
  {
    id: "8",
    category_id: "1",
    name: "Penca Aliran Cimande",
    logo: "https://garispaksi.org/wp-content/uploads/2022/07/13029495_10206369093207276_5801932058078400785_o.jpg?w=1024",
    description:"Penca Cimande adalah salah satu aliran pencak silat tertua di Indonesia. Aliran silat ini menyebar ke seluruh nusantara dan melahirkan berbagai perguruan silat di Indonesia.",
  },
  {
    id: "9",
    category_id: "2",
    name: "Larung Sesaji",
    logo: "https://ik.imagekit.io/goodid/gnfi/uploads/articles/large-tradisi-larung-laut-bentuk-syukur-suku-jawa-atas-hasil-alamnya-f32be254b182535e505058.jpg",
    description:"Larung sesaji adalah upacara adat yang dilakukan untuk mengungkapkan rasa syukur kepada Tuhan atas rezeki yang diberikan. Tradisi ini biasanya dilakukan oleh masyarakat pesisir laut dan pegunungan.",
  },
  {
    id: "10",
    category_id: "3",
    name: "Karapan Sapi",
    logo: "https://awsimages.detik.net.id/community/media/visual/2020/04/19/fb4bd37e-fae2-4ef3-ad7c-1274c1ec6f29_169.jpeg?w=600&q=90",
    description:"Karapan sapi adalah perlombaan pacuan sapi yang merupakan tradisi khas masyarakat Pulau Madura, Jawa Timur. Tradisi ini merupakan simbol identitas masyarakat Madura dan menjadi daya tarik wisata tersendiri.",
  },
];

const BudayaDetail = () => {
  const { budaya } = useLocalSearchParams();
  const selectedBudaya = DATA.filter(function (item) {
    return item.name === budaya;
  });

  console.log(selectedBudaya);

  return (
    <SafeAreaView
      style={{
        backgroundColor: "grey",
        flex: 1,
        // flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FilmCard item={selectedBudaya[0]} />
    </SafeAreaView>
  );
};

export default BudayaDetail;
