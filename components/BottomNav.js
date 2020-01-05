import React from 'react';
import { Link } from 'react-router-native';
import { View, TouchableOpacity} from 'react-native';
import { t } from 'react-native-tailwindcss';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faSearch,
  faUser,
  faHeart,
  faPlusSquare
} from '@fortawesome/free-solid-svg-icons';



export default BottomNav = () => {
  return (
    <View style={[t.absolute, t.bottom0, t.flex, t.flexRow, t.bgGray500 ]}>
      <Link to="/" style={[t.flex1]}component={TouchableOpacity}>
        <View style={[t.p8,t.flex1]}>
          <FontAwesomeIcon size={20} icon={faHome}/>
        </View>
      </Link>
      <Link to="/search" style={[t.flex1]}component={TouchableOpacity}>
        <View style={[t.p8,t.flex1]}>
          <FontAwesomeIcon size={20} icon={faSearch}/>
        </View>
      </Link>
      <Link to="/addPhoto" style={[t.flex1]}component={TouchableOpacity}>
        <View style={[t.p8,t.flex1]}>
          <FontAwesomeIcon size={20} icon={faPlusSquare}/>
        </View>
      </Link>
      <Link to="/likes" style={[t.flex1]}component={TouchableOpacity}>
        <View style={[t.p8,t.flex1]}>
          <FontAwesomeIcon size={20} icon={faHeart}/>
        </View>
      </Link>
      <Link to="/myPhotos" style={[t.flex1]}component={TouchableOpacity}>
        <View style={[t.p8, t.flex1]}>
          <FontAwesomeIcon size={20} icon={faUser}/>
        </View>
      </Link>
    </View>
  )
}


