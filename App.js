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

    // Función para obtener los productos del servidor
    const fetchProducts = async () => {
        try {
            const response = await fetch(CONFIG.server_url); 
            const data = await response.json();
            setProducts(data.products); 
        } catch (error) {
            console.error('Error al hacer fetch de productos:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (CONFIG.use_server) {
            // Si use_server es true, hacemos la petición al servidor
            fetchProducts();
        } else {
            // Si use_server es false, usamos los datos mock
            setLoading(false);
            setProducts(mockdata.products);
        }
    }, []);
    const LoadingScreen = () => {
      return (
          <View style={styles.loadingContainer}>
              <Image
                  source={ require('./assets/gif.gif') } 
                  style={styles.loadingImage}
                  testID="loading"
              />
          </View>
      );
  };
  if (loading) {
    return <LoadingScreen />;
}
    return (
      <NavigationContainer>
      <Header/>
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
);
};

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
    },
    loadingImage: {
      width: 150,
      height: 150, 
  },
});

export default App;
