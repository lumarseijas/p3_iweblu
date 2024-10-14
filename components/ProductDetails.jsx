import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProductDetails = ({ route, navigation }) => {
    const { product } = route.params; // Recibimos el producto desde las rutas

    return (
        <View style={styles.container}>
            <Text style={styles.title} testID="detalle">{product.title}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>Precio: ${product.price}</Text>
            <Button
                title="Volver"
                onPress={() => navigation.goBack()} // Navegar de regreso a la página anterior
                testID="volver"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#f8f9fa',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default ProductDetails;
