import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import MenuCard from '../components/MenuCard'; // Pastikan MenuCard sudah ada
import OrderButton from '../components/OrderButton'; // Pastikan OrderButton sudah ada

const MenuScreen = () => {
  const [menu, setMenu] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = [
      { id: 1, name: 'Sekarsa', price: 20000, image: 'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/7ad923b7-8f58-4346-b129-73b463797013_Go-Biz_20240324_130444.jpeg' },
      { id: 2, name: 'Coffee Latte', price: 20000, image: 'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/fcf95f8a-5faf-4cb4-b43b-b237aff2b3eb_Go-Biz_20240324_142403.jpeg' },
      { id: 3, name: 'Red Velvet', price: 23000, image: 'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/c751462d-1180-419e-be1b-749647a5b0dd_Go-Biz_20240324_141010.jpeg' },
      { id: 4, name: 'Vanila Regal', price: 25000, image: 'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/d2ff9aed-ae03-4776-a563-2c62b173963f_Go-Biz_20240324_140907.jpeg' },
      { id: 5, name: 'Taro', price: 24000, image: 'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/821add55-0ca7-4e2c-a129-c069d278442d_Go-Biz_20240324_141041.jpeg' },
      { id: 6, name: 'Matcha', price: 22000, image: 'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/13231d6e-223f-4736-a6c0-ceab80963fbe_Go-Biz_20240324_140712.jpeg' },
      { id: 7, name: 'Blue Neira', price: 15000, image: 'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/ab4276b8-bf0a-4809-b72a-3fe4644d9396_Go-Biz_20240324_145503.jpeg' },
    ];

    setMenu(data);
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={menu}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MenuCard item={item} />}
        ListHeaderComponent={<Text style={styles.title}>Cafe Menu</Text>}
        ListFooterComponent={<OrderButton />}
        contentContainerStyle={styles.flatListContainer}
        ListEmptyComponent={isLoading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
      />
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the screen fills the available space
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  flatListContainer: {
    padding: 16,
    paddingBottom: 16, // Space for the footer button
  },
  loadingText: {
    textAlign: 'center',
    fontSize: 18,
  },
});
