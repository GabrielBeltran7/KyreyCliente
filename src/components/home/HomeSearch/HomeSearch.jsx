import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './HomeSearchStyle';

const HomeSearch = () => {

  return (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder="Buscar..."
        style={styles.searchInput}
      />
    </View>
  );
}



export default HomeSearch;

