import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import {MyStatusBar} from '../../constants/config';
import {BLACK, GREEN, GREY, HEADERCOLOR, ORANGE} from '../../constants/color';
import {BELLICON, MENUE} from '../../constants/imagepath';
import Header from '../../components/Header';

const Home = ({navigation}) => {
  const data = [
    {
      title: 'Sales',
      profit: 2.5,
      price: 100,
      compare: 10000,
    },
    {
      title: 'Purchase',
      profit: 2.5,
      price: 100,
      compare: 10000,
    },
    {
      title: 'Issues',
      profit: 2.5,
      price: 100,
      compare: 10000,
    },
    {
      title: 'Marketing',
      profit: 2.5,
      price: 100,
      compare: 10000,
    },
  ];

  return (
    <View style={{flex: 1}}>
      <MyStatusBar backgroundColor={HEADERCOLOR} barStyle={'light-content'} />
      <Header
        onPress={() => {
          navigation.openDrawer();
          console.log('object');
        }}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: '#fafafb',
          justifyContent: 'center',
        }}>
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={item => item.title}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  height: 100,
                  margin: 10,
                  width: '45%',
                  alignSelf: 'center',
                  backgroundColor: 'white',
                  borderRadius: 15,
                  marginVertical: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: '100%',
                    width: '100%',
                    borderRadius: 15,
                    // backgroundColor: ORANGE,
                  }}>
                  <View
                    style={{
                      height: '30%',
                      width: '100%',
                      // backgroundColor: 'red',
                      flexDirection:'row',
                      justifyContent:'space-around',

                    }}>
                      <View
                      style={{
                        height: '100%',
                        width: '50%',
                        justifyContent:'center',
                        alignItems:'center'
                      
                      }}
                      >
                      <Text style={{color:BLACK, fontSize:14, fontWeight:'bold'}}>{item.title}</Text>
                      </View>
                      <View
                      style={{
                        height: '100%',
                        width: '50%',
                        // marginRight:'10%',
                        // backgroundColor: 'red',
                        justifyContent:'center',
                        alignItems:'center'
                      
                      }}
                      >
                      <Text style={{color:GREEN, fontSize:10, fontWeight:'bold'}}>{item.profit}%</Text>
                      </View>


                  </View>

                  <View
                  style={{
                    height: '40%',
                    width: '90%',
                    // backgroundColor: 'red',
                    justifyContent:'center',
                    alignItems:'center'
                  
                  

                  }}
                  >
                    <Text style={{color:BLACK, fontSize:20, fontWeight:'bold', alignSelf:'center'}}>₹ {item.price}</Text>
                  </View>
                  <View
                  style={{
                    marginTop:10,
                    height: '30%',
                    width: '70%',
                    // backgroundColor: 'red',
                    // justifyContent:'center',
                    alignSelf:'center',
                    // alignItems:'center'
                  
                  
                  }}
                  >
                    <Text style={{color:GREY, fontSize:11, fontWeight:'bold', alignSelf:'center'}}>compared to (₹ {item.compare} last year)</Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Home;
