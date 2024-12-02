const fetchMenu = async () => {
  const data = [
    { id: 1, name: 'Sekarsa', price: 20000, image: 'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/7ad923b7-8f58-4346-b129-73b463797013_Go-Biz_20240324_130444.jpeg' },
    { id: 2, name: 'Coffee Latte', price: 20000, image: 'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/fcf95f8a-5faf-4cb4-b43b-b237aff2b3eb_Go-Biz_20240324_142403.jpeg' },
    { id: 3, name: 'Red Velvet', price: 23000, image: 'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/c751462d-1180-419e-be1b-749647a5b0dd_Go-Biz_20240324_141010.jpeg' },
    { id: 4, name: 'Cappuccino', price: 25000, image: 'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/5677f42b-7d0c-4fdb-a6ad-36a350d2e09b_Go-Biz_20240324_143110.jpeg' },
    { id: 5, name: 'Mochaccino', price: 24000, image: 'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/8888c29e-d181-4669-b8e9-0db5dffed6b2_Go-Biz_20240324_145101.jpeg' },
    { id: 6, name: 'Vanilla Shake', price: 22000, image: 'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/6781b6b4-bb1f-48de-b80f-d6e4f5ff09cf_Go-Biz_20240324_150501.jpeg' },
    { id: 7, name: 'Iced Tea', price: 15000, image: 'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/5a96f3a9-8f10-4b1c-91d0-8d826a2a15d0_Go-Biz_20240324_151234.jpeg' },
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

export default MenuScreen;