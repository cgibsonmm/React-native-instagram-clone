
import React from 'react'
import { View, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart, faComment, faPaperPlane, faBookmark} from '@fortawesome/free-solid-svg-icons';
import {t} from 'react-native-tailwindcss';

const ButtonRow = () => {
  return (
    <View style={[t.flex, t.flex1, t.flexRow]}>
      <TouchableOpacity style={[t.p3]}>
        <FontAwesomeIcon size={20} icon={faHeart}/>
      </TouchableOpacity>
      <TouchableOpacity style={[t.p3]}>
        <FontAwesomeIcon size={20} icon={faComment}/>
      </TouchableOpacity>
      <TouchableOpacity style={[t.p3]}>
        <FontAwesomeIcon size={20} icon={faPaperPlane}/>
      </TouchableOpacity>
      <TouchableOpacity style={[t.p3, t.mLAuto]}>
        <FontAwesomeIcon size={20} icon={faBookmark}/>
      </TouchableOpacity>
    </View>
  )
}

export default ButtonRow
