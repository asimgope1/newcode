import {View, Text, Image} from 'react-native';
import React from 'react';
import {MyStatusBar} from '../../constants/config';
import {HEADERCOLOR} from '../../constants/color';
import Header from '../../components/Header';
import {PACKAGE} from '../../constants/imagepath';
import AddBtn from '../../components/AddBtn';
import { CustomBtn } from '../../components/CustomBtn';

const Packages = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <MyStatusBar backgroundColor={HEADERCOLOR} barStyle={'light-content'} />
      <Header
        onPress={() => {
          navigation.openDrawer();
        }}
      />
      <View
        style={{
          width: '90%',
          margin: '7%',
          alignSelf: 'center',
          height: '30%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Image
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'center',
          }}
          source={PACKAGE}
        />
      </View>
      <View
      style={{
        flex:1,
        alignItems:'center',
        // justifyContent:'center',
        alignSelf:'center'

      }}
      >
        <View
        style={{
          width:'65%',
          height:'50%',
       
        }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              alignSelf: 'center',
              marginTop: 20,
            }}>
            No Packages
          </Text>
          <Text
           style={{
            fontSize: 16,
            // fontWeight: 'bold',
            alignSelf: 'center',
            alignItems:'center',
            textAlign:'center',
            marginTop: 10,
          }}
          >
            Looks like You have not created any packages yet
            
          </Text>

        </View>
        <CustomBtn
        width={200}
        height='14%'
        text='Create Packages'
        />
       

      </View>
    </View>
  );
};

export default Packages;
