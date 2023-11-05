import {View, Text} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        onPress={() => {
          navigation.openDrawer();
        }}>
        Home
      </Text>
    </View>
  );
};

export default Home;
