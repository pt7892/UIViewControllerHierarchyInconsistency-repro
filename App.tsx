import React, {FC, useEffect, useState} from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {
  createStackNavigator,
  NavigationStackProp,
} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const HomeScreen: FC<{navigation: NavigationStackProp}> = () => {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
    </View>
  );
};

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

const CrashScreen: FC = () => {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(false);
    }, 500);
  }, []);

  if (showModal) {
    return (
      <Modal>
        <View style={styles.container}>
          <Text>Loading</Text>
        </View>
      </Modal>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Crash screen</Text>
    </View>
  );
};

const CrashStack = createStackNavigator({
  Crash: CrashScreen,
});

const TabsContainer = createBottomTabNavigator({
  HomeStack,
  CrashStack,
});

const RootStack = createAppContainer(TabsContainer);

export default RootStack;
