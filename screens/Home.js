import { View, Text,SafeAreaView,StatusBar } from 'react-native';
import React from 'react';
import HeaderTabs from '../components/HeaderTabs';

export default function Home() {
  return (
    <SafeAreaView style={{flex:1,marginTop:StatusBar.currentHeight}} >
      <HeaderTabs />
    </SafeAreaView>
  );
}
