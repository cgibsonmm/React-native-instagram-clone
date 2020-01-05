import React from 'react'
import { View, TouchableHighlight } from 'react-native'
import { t } from 'react-native-tailwindcss'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faSearch,
  faUser,
  faHeart,
  faPlusSquare
} from '@fortawesome/free-solid-svg-icons'


// this file is a mess clean this up
const BottomNav = ({setPage}) => {

  return (
    <View style={[t.absolute, t.bottom0, t.flex, t.flexRow, t.bgGray500 ]}>
      <TouchableHighlight
        underlayColor='#718096'
        onPress={() => setPage('Home')}
        style={[t.flex1, t.bgGray500, t.justifyCenter, t.hAuto]}
      >
      <View style={[t.pY8 ]}>
        <FontAwesomeIcon size={20} style={{alignSelf: 'center'}} icon={faHome}/>
      </View>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor='#718096'
        onPress={() => setPage('Search')}
        style={[t.flex1, t.bgGray500]}
      >
      <View style={[t.pY8 ]}>
        <FontAwesomeIcon size={20} style={{alignSelf: 'center'}} icon={faSearch}/>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor='#718096'
        onPress={() => setPage('Add Photo')}
        style={[t.flex1, t.bgGray500]}
      >
      <View style={[t.pY8 ]}>
        <FontAwesomeIcon size={20} style={{alignSelf: 'center'}} icon={faPlusSquare}/>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor='#718096'
        onPress={() => setPage('Heart')}
        style={[t.flex1, t.bgGray500]}
      >
        <View style={[t.pY8 ]}>
        <FontAwesomeIcon size={20} style={{alignSelf: 'center'}} icon={faHeart}/>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor='#718096'
        onPress={() => setPage('User')}
        style={[t.flex1, t.bgGray500]}
      >
      <View style={[t.pY8 ]}>
        <FontAwesomeIcon size={20} style={{alignSelf: 'center'}} icon={faUser}/>
        </View>
      </TouchableHighlight>
    </View>
  )
}

export default BottomNav

