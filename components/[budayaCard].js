import { View, Text, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";

const BudayaCard = ({ item }) => {
  return (
    <Link
      href={{
        pathname: "/budaya/[budaya]",
        params: { budaya: item.name },
      }}
    >
       <View
  className="p-4 m-2 bg-gradient-to-r from-emas to-emas rounded-lg shadow-lg"
  style={{
    borderWidth: 1,
    borderColor: '#000',
    overflow: 'hidden',
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    alignItems: 'center',
  }}
>
  <Image
    className="rounded-lg mb-2"
    source={{
      uri: item.logo,
      height: 300,
      width: 200,
    }}
    style={{
      borderRadius: 12,
      borderWidth: 2,
      borderColor: '#fff',
      opacity: 0.95, 
      shadowColor: '#000', 
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.3,
      shadowRadius: 5,
    }}
  />
  <Text
  className="font-['Open_Sans'] text-center font-bold text-white text-lg mb-1"
  style={{
    textDecorationLine: 'underline',
    letterSpacing: 1.2,
    fontSize: 20,
    marginBottom: 5,
  }}
>
  {item.id}. {item.name.split(' ').slice(0, 5).join(' ')}{' '}
  {'\n'}
  {item.name.split(' ').slice(5).join(' ')}
</Text>
  <Text
    className="text-white text-center text-sm max-w-xs"
    style={{
      fontStyle: 'italic',
      lineHeight: 22, 
      fontSize: 15, 
      marginBottom: 5, 
    }}
  >
    {item.description}
  </Text>
  <Text
    className="text-yellow-300 text-center text-xs mt-2"
    style={{
      fontWeight: '600',
      opacity: 0.95, 
      fontSize: 14, 
    }}
  >
    {item.releaseDate}
  </Text>
</View>
      </Link>
  );
};
export default BudayaCard;