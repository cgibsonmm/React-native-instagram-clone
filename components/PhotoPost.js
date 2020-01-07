import React from 'react';
import { View, Text, Image} from 'react-native';
import {t} from 'react-native-tailwindcss';
import ButtonRow from './ButtonRow';

const PhotoPost = ({post}) => {
  const {image_url, username} = post
  return (
    <View style={[t.pT3]}>
      <View style={[t.flex, t.flexRow, t.itemsCenter, t.p2]}>
        <Image style={[t.h8, t.w8, t.bgGray500, t.roundedFull]}/>
        <Text style={[t.textXl, t.pL2, t.fontMedium]}>{username}</Text>
      </View>
      <Image style={{aspectRatio: 1}} source={{uri: `http://localhost:3000${image_url}`}}/>
      <ButtonRow />
    </View>
  )
}
export default PhotoPost
