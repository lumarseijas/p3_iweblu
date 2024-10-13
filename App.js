import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Header from './components/Header';
import SearchPage from './components/SearchPage';

const App = () => {
  const [loading, setLoading] = useState(true); 
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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
    }, 3000);
  }, []);

  if (loading) {
    return ( 
      <LoadingScreen />
   ) ; 
  }


return (
  <View style={styles.mainContainer}>
    <Header />
    <Text style={styles.contentText}>Contenido de la aplicación</Text>
  </View>
);
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: '#f8f9fa', 
  },
  loadingImage: {
    width: 150,
    height: 150, 
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', 
  },
  contentText: {
    fontSize: 16,
    marginTop: 20,
  },
});
export default App;
