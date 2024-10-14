import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Image, StyleSheet } from 'react-native';
import Header from './components/Header';
import SearchPage from './components/SearchPage';
import ProductDetails from './components/ProductDetails';
import { mockdata } from './components/constants/products';
import CONFIG from './components/config/config';

const Stack = createNativeStackNavigator();

const App = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(mockdata.products);

  const download = async () => {
    if (CONFIG.use_server) {
      let array = fetch(CONFIG.server_url);
      let data = await array.then((response) => response.json());
      setProducts(data.products);      
    }
    else {
      setProducts(mockdata.products);
    }
  }
  useEffect(() => {
    async function fetchData() {
      await download();
      setTimeout(()=>{
        setLoading(false);
      }, CONFIG.loading_timeout_ms);
    }
    fetchData();
  }, []);
 

  return (
    <View style={{ flex: 2 }}>
      <Header />
      {loading ?
        <Image
          testID="loading"
          source={require('./assets/gif.gif')}
          style={styles.loadingImage}

        />
        :
        <NavigationContainer>

          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" options={{ title: 'Catálogo' }}>
              {(props) => <SearchPage {...props} theproducts={products} />}
            </Stack.Screen>
            <Stack.Screen
              name="ProductDetails"
              component={ProductDetails}
              options={{ title: 'Detalles del Producto' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  loadingImage: {
    width: 150,
    height: 150,
  },
});

export default App;
