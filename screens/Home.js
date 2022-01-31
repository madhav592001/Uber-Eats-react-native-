import { View, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import HeaderTabs from '../components/HeaderTabs.js';
import SearchBar from '../components/SearchBar.js';
import Categories from '../components/Categories.js';
import RestaurantItems from '../components/RestaurantItems.js';

const YELP_API_KEY =
  'IaX_qRqr4p8liJwoisct1GNeGa7cri96QcEaXC94gPIWpBsitRp4Y1dHLxtMCkjFek2xvzYWyjQ88a6K0ww-3jLVOQJIkOE7kXbIbJbByJYVTpiNuKo1oZQoOAX4YXYx';

export default function Home() {
  const [restaurantsData, setRestaurantData] = React.useState([]);

  const getRestaurantsFromYelp = () => {
    const yelpUrl =
      'https://api.yelp.com/v3/businesses/search?term=restaurants&location=LosAngeles';

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => {
        return res.json();
      })
      .then((json) => setRestaurantData(json.businesses));
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: '#eee',
      }}
    >
      <View style={{ backgroundColor: 'white', padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantsData={restaurantsData} />
      </ScrollView>
    </SafeAreaView>
  );
}
