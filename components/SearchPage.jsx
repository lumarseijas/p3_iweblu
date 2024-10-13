import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, Image } from 'react-native';

const SearchPage = (props) => {
    const productos = props.theproducts; 
    const [searchQuery, setSearchQuery] = useState(''); // para manejar el valor del input
    const [productosFiltrados, setProductosFiltrados] = useState(productos); 

    // Función para filtrar los productos
    const handleSearch = () => {
        const filtrados = productos.filter(product => 
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setProductosFiltrados(filtrados); // Actualizamos la lista con los productos filtrados
    };

    const renderProduct = ({ item }) => {
        return (
            <View style={styles.itemContainer} testID={`item_${item.id}`}>
                <Image
                    source={{ uri: item.thumbnail }} // Usamos el campo thumbnail para la imagen del producto
                    style={styles.productImage}
                />
                <Text style={styles.productTitle} testID={`title_${item.id}`}>
                    {item.title}
                </Text>
                <Button
                    title="Ver Detalles"
                    onPress={() => handleViewDetails(item)}
                    testID={`button_${item.id}`}
                />
            </View>
        );
    };

    const handleViewDetails = (item) => {
        console.log(`Ver detalles del producto: ${item.title}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.catalogText} testID="catalogo">
                Catálogo de productos
            </Text>

            <TextInput
                style={styles.searchInput}
                placeholder="Buscar productos..."
                value={searchQuery}
                onChangeText={setSearchQuery} 
                testID="filtro"
            />

            <Button
                title="Buscar"
                onPress={handleSearch} 
                testID="buscador"
            />

            <FlatList
                data={productosFiltrados} // Usamos los productos filtrados para renderizar la lista
                keyExtractor={(item) => item.id.toString()} // Convertimos el id en string
                renderItem={renderProduct} 
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
    catalogText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    searchInput: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 20,
        borderRadius: 5,
    },
    itemContainer: {
        backgroundColor: '#ffffff',
        padding: 15,
        marginVertical: 8,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    productImage: {
        width: '100%',
        height: 150,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    productTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default SearchPage;
