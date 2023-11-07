import React from 'react';
import {
  Image,
  ImageBackground,
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Pressable,
} from 'react-native';
import {MyStatusBar} from '../../constants/config';
import {GREY, ORANGE, TEXT} from '../../constants/color';
import {BACKGROUND, LOGO} from '../../constants/imagepath';
import {ROBOTO_MEDIUM} from '../../constants/fontpath';
import {InputTxt} from '../../components/InputTxt';
import { CustomBtn } from '../../components/CustomBtn';

export default Login = ({navigation}) => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  return (
    <ImageBackground
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      source={BACKGROUND}>
      <ScrollView
      showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{
            marginTop: '30%',
            height: '9%',
            width: '60%',
            borderRadius: 4,
          }}
          source={LOGO}
        />

        <View
          style={{
            // height: '40%',
            flex: 1,
            // width: '100%',
            marginTop: '75%',
            //
          }}>
          <View
            style={{
              height: '20%',
              width: '100%',
              borderRadius: 4,
              marginBottom: '5%',
            }}>
            <Text
              style={{
                fontSize: 21,
                fontWeight: 'bold',
                color: TEXT,
                fontFamily: ROBOTO_MEDIUM,
              }}>
              Login
            </Text>

            <View
              style={{
                width: '100%',
                marginTop: '3%',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '700',
                  color: TEXT,
                  fontFamily: ROBOTO_MEDIUM,
                }}>
                Login to continue using the app
              </Text>
            </View>
          </View>
          <View
            style={{
              height: '20%',
              width: '100%',
              marginTop: '3%',
            }}>
            <InputTxt
              placeholder="Enter your Email"
              Head="Email"
              type="email"
              setInputdata={setEmail}
              inputdata={email}
            />
          </View>
          <View
            style={{
              height: '20%',
              width: '100%',
              marginTop: '5%',
              // marginBottom:'5%'
            }}>
            <InputTxt
              placeholder="Enter your password"
              Head="Password"
              type="password"
              setInputdata={setPassword}
              inputdata={password}
            />
          </View>

          <View
            style={{
              height: '10%',
              width: '30%',
              marginLeft: '68%',
              marginTop:'2%',
              marginBottom:'5%'
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '700',
                color: GREY,
                fontFamily: ROBOTO_MEDIUM,
              }}>
              Forgot Password ?
            </Text>
          </View>

        
        </View>
        <View
        style={{
            height:'5%',
            width:'100%',
            justifyContent:'center',
            alignItems:'center',
            marginBottom:'10%'
        }}
        >
        <CustomBtn
        height={45}
        onTouch={()=>{
          navigation.navigate('HomeStack')
        }}
        text='Login'
        />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
