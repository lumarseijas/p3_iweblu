import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Header from './components/Header'; 
import SearchPage from './components/SearchPage'; 
import { mockdata } from './components/constants/products'; 

const App = () => {
    const [loading, setLoading] = useState(true); 

    const products = mockdata.products; 

    const LoadingScreen = () => {
        return (
            <View style={styles.loadingContainer}>
                <Image
                    source={ require('./assets/gif.gif') } // Imagen o GIF mientras carga
                    style={styles.loadingImage}
                    testID="loading"
                />
            </View>
        );
    };

    useEffect(() => {
        setTimeout(() => {
            setLoading(false); 
        }, 3000); // Simula 3 segundos de carga
    }, []);

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <View style={styles.mainContainer}>
            <Header />
            <SearchPage theproducts={products} /> {/* Pasamos los productos al componente SearchPage */}
        </View>
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
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff', 
    },
});

export default App;
