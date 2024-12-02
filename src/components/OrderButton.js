import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const OrderButton = () => {
  const handleOrder = () => {
    alert('Order placed successfully!');
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleOrder}>
      <Text style={styles.buttonText}>Place Order</Text>
    </TouchableOpacity>
  );
};

export default OrderButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
