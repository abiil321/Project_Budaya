import { View, Text, Image } from "react-native-web";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import FilmCard from "../../components/[budayaCard]";

const DATA = [
  {
    id: "1",
    category_id: "4",
    name: "Reog Ponorogo",
    logo: "https://thumb.viva.id/vivabanyuwangi/1265x711/2024/09/10/66df9d1a37f81-5-keajaiban-reog-ponorogo-lebih-dari-sekadar-topeng-raksasa_banyuwangi.jpg",
    description: "Reog merupakan salah satu seni budaya yang berasal dari Jawa Timur bagian barat-laut, dan Ponorogo dianggap sebagai kota asal Reog yang sebenarnya. Gerbang kota Ponorogo dihiasi oleh sosok warok dan gemblak, dua sosok yang ikut tampil pada saat Reog dipertunjukkan. Reog adalah salah satu budaya daerah di Indonesia yang masih sangat kental dengan hal-hal yang berbau mistik dan ilmu kebatinan yang kuat",
  },
  {
    id: "2",
    category_id: "4",
    name: "Ludruk",
    logo: "https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/bobofoto/original/2766_ludruk.jpg",
    description: "Ludruk adalah seni pertunjukan teater tradisional Jawa Timur yang menggabungkan tarian, nyanyian, dan drama. Ludruk biasanya bercerita tentang kehidupan sehari-hari, perjuangan, atau legenda, dan diselingi dengan lawakan dan iringan gamelan.",
  },
  {
    id: "3",
    category_id: "3",
    name: "Kirab Pusaka Malam 1 Suro Pura Mangkunegaran",
    logo: "https://www.askara.co/assets/images/news/2020/08/20200819081812_normal.jpg",
    description: "Kirab Pusaka Dalem 1 Suro di Pura Mangkunegaran, Surakarta, Jawa Tengah adalah tradisi tahunan untuk menyambut datangnya bulan Suro. Kirab ini merupakan wujud rasa syukur atas tahun sebelumnya dan doa untuk tahun yang akan datang.",
  },
  {
    id: "4",
    category_id: "3",
    name: "Tari Bondan",
    logo: "https://cdn1.katadata.co.id/media/images/thumb/2021/12/06/Tari_Bondan-2021_12_06-13_58_15_b6835983c359e97ba69f85b4b96f3e1b_960x640_thumb.jpg",
    description: "Tari bondan adalah salah satu contoh tari klasik yang berasal dari daerah Surakarta, Jawa Tengah. Dibandingkan dengan tari-tarian tradisional lainnya, tari bondan dianggap memiliki keunikan tersendiri. Tarian yang dimainkan dengan properti berupa payung, boneka bayi dan kendi ini dikatakan unik karena berbagai gerakannya menceritakan tentang kisah dan kasih sayang seorang ibu kepada anak bayinya.",
  },
  {
    id: "5",
    category_id: "2",
    name: "Tari Jaipong",
    logo: "https://asset.kompas.com/crops/VpXXfXOFR6F9T70pJ08HZZUjPOk=/0x0:0x0/750x500/data/photo/buku/63072e6009aaa.jpg",
    description: "Tari Jaipong adalah tarian tradisional yang berasal dari Jawa Barat dan merupakan salah satu identitas budaya penting di provinsi tersebut. Tarian ini memiliki gerakan yang energik, unik, dan sederhana. Gerakannya merupakan gabungan dari beberapa kesenian tradisional, seperti Wayang Golek, Pencak Silat, Ketuk Tilu, Bajidoran, dan Topeng Banjet. ",
  },
  {
    id: "6",
    category_id: "2",
    name: "Tari Merak",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/DSC_0624_yuri.jpg/1200px-DSC_0624_yuri.jpg",
    description: "Tari Merak merupakan salah satu ragam tarian kreasi baru yang mengekpresikan kehidupan binatang, yaitu burung merak. Tata cara dan geraknya diambil dari kehidupan merak yang diangkat ke pentas oleh seniman Sunda Raden Tjetjep Somantri, ide dari tari merak sendiri ketika Raden Tjejep Soemantri melihat tarian Dadak Merak pada Reog Ponorogo, maka dari itu aksesoris mahkota kepala merak pada tari Merak mematuk manik-manik seperti tasbih yang ada pada merak pada Reog Ponorogo",
  },
  {
    id: "7",
    category_id: "4",
    name: "Tumpeng Sewu",
    logo: "https://banyuwangikab.go.id/media/berita/original/rjbtfvrant_whatsapp-image-2024-06-10-at-095701.jpeg",
    description: "Tumpeng sewu adalah salah satu tradisi budaya Osing. Tradisi ini diselenggarakan di desa Kemiren, Glagah, Kabupaten Banyuwangi, Provinsi Jawa Timur, Indonesia. Desa Kemiren adalah sebuah desa wisata yang merupakan perkampungan asli suku Osing. Di setiap tahunnya dilaksanakan Festival Tumpeng Sewu di Desa Kemiren, Banyuwangi, Jawa Timur. Bukan hanya sebuah ritual adat, namun festival ini kini menjadi atraksi wisata Banyuwangi yang dihadiri oleh ribuan warga dari berbagai penjuru desa maupun wisatawan",
  },
  {
    id: "8",
    category_id: "2",
    name: "Penca Aliran Cimande",
    logo: "https://garispaksi.org/wp-content/uploads/2022/07/13029495_10206369093207276_5801932058078400785_o.jpg?w=1024",
    description: "Silat cimande adalah salah satu aliran pencak silat tertua yang telah melahirkan berbagai perguruan silat di Indonesia bahkan di luar negeri. Banyak versi yang menjelaskan tentang berdirinya pencak silat ini, semua komunitas Maenpo Cimande sepakat tentang siapa penemu Maenpo Cimande, semua mengarah kepada Abah Khaer (penulisan ada yang: Kaher, Kahir, Kair, Kaer dan sebagainya.",
  },
  {
    id: "9",
    category_id: "3",
    name: "Larung Sesaji",
    logo: "https://ik.imagekit.io/goodid/gnfi/uploads/articles/large-tradisi-larung-laut-bentuk-syukur-suku-jawa-atas-hasil-alamnya-f32be254b182535e505058.jpg",
    description: "Larung sesaji adalah upacara adat yang dilakukan untuk mengungkapkan rasa syukur kepada Tuhan atas rezeki yang diberikan. Tradisi ini biasanya dilakukan oleh masyarakat pesisir laut dan pegunungan.",
  },
  {
    id: "10",
    category_id: "4",
    name: "Karapan Sapi",
    logo: "https://awsimages.detik.net.id/community/media/visual/2020/04/19/fb4bd37e-fae2-4ef3-ad7c-1274c1ec6f29_169.jpeg?w=600&q=90",
    description: "Karapan sapi (Madura: Kerrabhân sapè) merupakan istilah untuk menyebut perlombaan pacuan sapi yang berasal dari Pulau Madura, Jawa Timur. Pada perlombaan ini, sepasang sapi yang menarik semacam kereta dari kayu (tempat joki berdiri dan mengendalikan pasangan sapi tersebut) dipacu dalam lomba adu cepat melawan pasangan-pasangan sapi lain.",
  },
  {
    id: "11",
    category_id: "1",
    name: "Silat Betawi",
    logo: "https://ik.imagekit.io/goodid/gnfi/uploads/articles/large-shutterstock-1861167325-d65010e0f62778009d1a35c6bebe6282.jpg?tr=w-390,h-260,fo-center",
    description: "Silat Betawi adalah seni bela diri tradisional yang merupakan identitas kesenian asli Jakarta. Silat Betawi juga dikenal dengan istilah maen pukulan.",
  },
  {
    id: "12",
    category_id: "1",
    name: "Ondel-Ondel",
    logo: "https://asset.kompas.com/crops/ySNPX_4ePUqoiahg1zOTddL_DfI=/89x20:949x593/1200x800/data/photo/2018/06/23/3587516978.jpg",
    description: "Ondel-ondel adalah bentuk pertunjukan seni khas Betawi yang sering ditampilkan dalam pesta rakyat. Tampaknya ondel-ondel memerankan leluhur atau nenek moyang yang senantiasa menjaga anak cucunya atau penduduk suatu desa.",
  },
  {
    id: "13",
    category_id: "1",
    name: "Gambang Kromong",
    logo: "https://asset.kompas.com/crops/c67AhuP1Ucgd53R_5qhy1DbgXcE=/0x0:780x390/1200x800/data/photo/2013/05/16/1944493-set-gambang-kromong-betawi--780x390.jpg",
    description: "Gambang keromong adalah sejenis orkes yang memadukan alat-alat musik gamelan dengan alat-alat musik Tionghoa, seperti sukong, tehyan, dan kong'ahyan. Sebutan gambang kromong diambil dari nama dua buah alat perkusi, yaitu gambang dan kromong.",
  },
  {
    id: "14",
    category_id: "1",
    name: "Nyorog",
    logo: "https://www.rmoljabar.id/uploads/images/2024/05/image_750x_6635d55d7338a.jpg",
    description: "Nyorog adalah tradisi Betawi yang dilakukan dengan membagikan bingkisan kepada sanak keluarga, saudara, tetangga, atau tokoh penting dalam lingkungan. Tradisi ini dilakukan untuk menjaga silaturahmi, menghormati orang yang lebih tua, dan mempererat tali persaudaraan.",
  },
  {
    id: "15",
    category_id: "1",
    name: "Tanjidor",
    logo: "https://awsimages.detik.net.id/community/media/visual/2018/10/12/d8578749-c059-4a91-85bb-054714292311.jpeg?w=600&q=90",
    description: "Tanjidor adalah kesenian musik tradisional Betawi yang dimainkan secara berkelompok dengan alat musik tiup dan pukul. Tanjidor merupakan perpaduan antara musik Islam dan Eropa.",
  },
  {
    id: "16",
    category_id: "2",
    name: "Sintren",
    logo: "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2021/10/30/2665938166.jpg",
    description: "Salah satu kesenian yang ada di Cirebon adalah seni tari yang disebut dengan tari sintren, kesenian tari ini merupakan seni tari yang khas dari daerah Cirebon.",
  },
  {
    id: "17",
    category_id: "2",
    name: "Blantek",
    logo: "https://www.senibudayabetawi.com/wp-content/uploads/2021/12/Blantek.jpg",
    description: "Blantek merupakan sebutan untuk dua kesenian Betawi, yaitu topeng blantek dan tari ronggeng blantek",
  },
  {
    id: "18",
    category_id: "3",
    name: "Tari Krida Jati",
    logo: "https://kuasakata.com/images/2020/11/16/alah_satu_kelompok_peserta.jpg",
    description: "Tari Kridhajati merupakan tarian khas asal kota ukir yaitu Jepara, Jawa Tengah. Tarian yang bisa dipraktikkan satu orang, berkelompok maupun secara massal ini menggambarkan masyarakat Jepara yang adiluhung dalam berkarya seni. Tarian ini dicipta dan dikemas atas petunjuk Bapak Bupati Jepara Drs. Hendro Martojo, MM. Tarian Kridhajati ini ditarikan dalam bentuk figurasi huruf: Hari Jadi Jepara dan dipentaskan setelah upacara hari jadi Jepara",
  },
  {
    id: "19",
    category_id: "3",
    name: "Upacara Tedak Siten",
    logo: "https://doransouvenir.com/wp-content/uploads/2024/04/tedak-siten-Warisan-Budaya-Takbenda-Indonesia.jpg",
    description: "Tedak Siten adalah upacara adat Jawa yang dilakukan ketika bayi berusia sekitar tujuh atau delapan bulan, yaitu saat mereka mulai belajar duduk dan berjalan di tanah. Kata (tedak) berarti turun atau menapakkan kaki, sedangkan (siten) atau (siti) berarti tanah.",
  },
  {
    id: "20",
    category_id: "4",
    name: "Tari Kuda Lumping",
    logo: "https://asset.kompas.com/crops/BbVhMJcpyRTkrWo1X4kdNgtpVBI=/18x7:987x654/1200x800/data/photo/2022/12/22/63a45b9f065c8.jpg",
    description: "Tari Kuda Lumping adalah seni tari tradisional Indonesia yang berasal dari Ponorogo, Jawa Timur. Tarian ini menampilkan sekelompok prajurit yang sedang menunggang kuda kepang. Gerakan-gerakan penari meniru keberanian, keindahan, dan kecepatan pasukan berkuda. ",
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
