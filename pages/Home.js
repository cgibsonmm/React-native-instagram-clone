import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import { View, Text, Image} from 'react-native'
import {t} from 'react-native-tailwindcss'

const Home = () => {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    Axios.get('http://localhost:3000/image_post/index')
      .then(res => {
        setPosts(res.data)
      })
      .catch(e => setPosts(e.message))
  }, [])


  return (
    <View>
      {posts.map((post, index) => {
        return(<View key={index}>
          <View style={[t.flex, t.flexRow, t.itemsCenter, t.p2]}>
            <Image style={[t.h8, t.w8, t.bgGray500, t.roundedFull]}/>
            <Text style={[t.textXl, t.pL2]}>{post.username}</Text>
          </View>
          <Image style={{aspectRatio: 1}} source={{uri: `http://localhost:3000${post.image_url}`}}/>
        </View>)
      })}
    </View>
  )
}

export default Home
