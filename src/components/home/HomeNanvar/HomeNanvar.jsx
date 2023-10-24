import React from 'react';
import { View, StyleSheet } from 'react-native';
import HomeModal from '../HomeModal/HomeModal';
import HomeSearch from '../HomeSearch/HomeSearch';
import HomeBottonNew from '../HomeBottonNew/HomeBottonNew';
import styles from './HomeNanvarStyle';

const HomeNavbar = () => {
  return (
    <View style={styles.navbar}>
      <View style={styles.container}>
        <View style={styles.item}>
          <HomeModal />
        </View>
        <View style={styles.item}>
          <HomeSearch />
        </View>
        <View style={styles.item}>
          <HomeBottonNew />
        </View>
      </View>
    </View>
  );
};

export default HomeNavbar;

