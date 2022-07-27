import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';
import Coins from '../components/coins';

const Home = ({navigation}) => {
  const [bank, setBank] = useState([]);
  const [search, setSearch] = useState('');

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
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.search}
            placeholder="Search Coin"
            placeholderTextColor="#858585"
            onChangeText={text => setSearch(text)}
          />
        </View>
        <FlatList
          style={styles.list}
          data={bank.filter(
            coin =>
              coin.name.toLowerCase().includes(search) ||
              coin.symbol.toLowerCase().includes(search),
          )}
          renderItem={({item}) => {
            console.log(item);
            return (
              <View>
                <Coins
                  data={item}
                  onPres={() => {
                    navigation.navigate('coins', {...item});
                  }}
                />
              </View>
            );
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
  search: {
    borderBottomColor: '#00DEFD',
    borderBottomWidth: 1,
    marginBottom: 15,
    fontSize: 25,
    textAlign: 'center',
    padding: 5,
    width: 180,
  },
  list: {
    width: '100%',
  },
});

export default Home;
