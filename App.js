import React from 'react';
import {NativeRouter, Switch, Route} from 'react-router-native';
import { t } from  'react-native-tailwindcss';
import {SafeAreaView} from 'react-native';

// Components
import BottomNav from './components/BottomNav';

// Pages
import Home from './pages/Home';
import Search from './pages/Search';
import AddPhoto from './pages/AddPhoto';
import Likes from './pages/Likes';
import MyPhotos from './pages/MyPhotos';


// Main App
function App() {
  return (
    <SafeAreaView style={[t.bgGray200, t.flex, t.hFull , t.wFull]}> 
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/search' component={Search} />
        <Route exact path='/addPhoto' component={AddPhoto} />
        <Route exact path='/likes' component={Likes} />
        <Route exact path='/myPhotos' component={MyPhotos} />
      </Switch>
      <BottomNav/>
    </SafeAreaView>
  );
}

export default  () => (
  <NativeRouter>
    <App/>
  </NativeRouter>
)

