import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Coins = ({data, onPres}) => {
  return (
    <TouchableOpacity onPress={onPres}>
      <View style={styles.container}>
        <View style={styles.coinContainer}>
          <Image style={styles.image} source={{uri: data.image}} />
          <Text style={styles.text}> {data.name}</Text>
        </View>
        <View style={styles.containerPrice}>
          <Text style={styles.price}>$ {data.current_price}</Text>
          <Text
            style={[
              styles.priceChange,
              data.price_change_percentage_24h > 0 ? styles.up : styles.down,
            ]}>
            {data.price_change_percentage_24h}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00DEFD',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
    flexDirection: 'row',
    borderRadius: 20,
    marginHorizontal: 20,
    padding: 8,
  },
  coinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 3,
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 22,
    color: '#fff',
  },
  price: {
    fontSize: 21,
    color: '#fff',
    textAlign: 'right',
  },
  priceChange: {
    textAlign: 'right',
    fontSize: 18,
  },
  containerPrice: {
    textAlign: 'right',
    paddingHorizontal: 5,
  },
  up: {
    color: '#01AB53',
  },
  down: {
    color: '#F21818',
  },
});

export default Coins;
