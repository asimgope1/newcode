import {View, Text} from 'react-native';
import React from 'react';

const Profile = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text onPress={() => {
        navigation.openDrawer();
      }}>Profile</Text>
    </View>
  );
};

export default Profile;
