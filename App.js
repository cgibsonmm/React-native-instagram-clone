import React, {useState} from 'react';
import { t } from  'react-native-tailwindcss'
import {Text, View, SafeAreaView } from 'react-native';
import BottomNav from './components/BottomNav'

export default function App() {
  const [page, setPage] = useState('home')

  return (
    <SafeAreaView style={[t.bgGray200, t.flex, t.hFull , t.wFull, t.justifyBetween]}> 
    <Text style={[t.selfCenter , t.textXl]}>{page}</Text>
    <BottomNav setPage={setPage}/>
    </SafeAreaView>
  );
}

