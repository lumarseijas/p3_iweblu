import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, Image } from 'react-native';

const SearchPage = ({ navigation, theproducts }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [productosFiltrados, setProductosFiltrados] = useState(theproducts);

    const handleSearch = () => {
        const filtrados = theproducts.filter(product =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setProductosFiltrados(filtrados);
    };

    const renderProduct = ({ item }) => (
        <View style={styles.itemContainer} testID={`item_${item.id}`}>
            <Image source={{ uri: item.thumbnail }} style={styles.productImage} />
            <Text style={styles.productTitle} testID={`title_${item.id}`}>{item.title}</Text>
            <Button
                title="Ver Detalles"
                onPress={() => navigation.navigate('ProductDetails', { product: item })} // Navegar a la pantalla de detalles
                testID={`button_${item.id}`}
            />
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.catalogText} testID="catalogo">Catálogo de productos</Text>
            <TextInput
                style={styles.searchInput}
                placeholder="Buscar productos..."
                value={searchQuery}
                onChangeText={setSearchQuery}
                testID="filtro"
            />
            <Button title="Buscar" onPress={handleSearch} testID="buscador" />
            <FlatList
                data={productosFiltrados}
                keyExtractor={(item) => item.id.toString()}
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
