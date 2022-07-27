import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const coinsDetail = ({route}) => {
  const {params} = route;
  console.log('::::::', params);

  return (
    <View style={styles.container}>
      <View style={styles.coinContainer}>
        <Image style={styles.image} source={{uri: params.image}} />
      </View>
      <View style={styles.datacontainer}>
        <Text style={styles.text}> {params.name}</Text>
        <Text style={styles.text}> ({params.symbol})</Text>
      </View>
      <View style={styles.containerPrice}>
        <Text style={styles.price}>Precio: $ {params.current_price}</Text>
        <Text
          style={[
            styles.priceChange,
            params.price_change_percentage_24h > 0 ? styles.up : styles.down,
          ]}>
          % de cambio de precio (24hrs): {params.price_change_percentage_24h}
        </Text>
        <Text style={styles.marked}>
          Capitalización de mercado: {params.market_cap}
        </Text>
        <Text style={styles.update}>
          Última actualización: {params.last_updated}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#00DEFD',
    borderWidth: 3,
    alignItems: 'center',
    marginVertical: 8,
    borderRadius: 20,
    marginHorizontal: 40,
    padding: 8,
    justifyContent: 'center',
  },
  coinContainer: {
    alignItems: 'center',
    paddingVertical: 10,
    justifyContent: 'center',
  },
  datacontainer: {
    flexDirection: 'row',
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 20,
    marginTop: 5,
    marginBottom: 5,
    color: '#000000',
  },
  price: {
    fontSize: 21,
    color: '#000000',
    textAlign: 'center',
  },
  priceChange: {
    textAlign: 'center',
    fontSize: 18,
    justifyContent: 'center',
    marginTop: 5,
  },
  containerPrice: {
    textAlign: 'center',
    paddingHorizontal: 5,
    justifyContent: 'space-between',
  },
  up: {
    color: '#01AB53',
  },
  down: {
    color: '#F21818',
  },
  marked: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 15,
    marginTop: 5,
  },
  update: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 15,
    marginTop: 5,
  },
});

export default coinsDetail;
