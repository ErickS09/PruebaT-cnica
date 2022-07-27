import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, Text, ScrollView} from 'react-native';
import Coins from '../components/coins';

const Home = () => {
  const [bank, setBank] = useState([]);

  const initialurl = async () => {
    const res = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false',
    );
    const data = await res.json();
    setBank(data);
  };

  useEffect(() => {
    initialurl();
  }, []);

  return (
    <ScrollView>
      <View>
        <FlatList
          data={bank}
          renderItem={({item}) => {
            console.log(item);
            return (
              <View>
                <Coins data={item}></Coins>
              </View>
            )
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
