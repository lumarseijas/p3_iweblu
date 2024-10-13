import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View testID='cabecera' style={styles.cabecera}>
    <Image testID='logo' style={styles.image} source={require('../assets/icon.png')}></Image>
    <Text style={styles.mensaje} testID='mensaje'>Bienvenido a la página de Lucia Martinez</Text>
</View>
  );
};

const styles = StyleSheet.create({
  cabecera: {
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
    marginBottom: 10,
  },
  message: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Header;
