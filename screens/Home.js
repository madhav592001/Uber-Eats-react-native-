import { View, Text,SafeAreaView,StatusBar } from 'react-native';
import React from 'react';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';

export default function Home() {
  return (
    <SafeAreaView style={{flex:1,marginTop:StatusBar.currentHeight,backgroundColor:"#eee"}} >
      <View style={{backgroundColor:"white",padding:15}} >
        <HeaderTabs />
        <SearchBar />
      </View>
      <Categories />
    </SafeAreaView>
  );
}
