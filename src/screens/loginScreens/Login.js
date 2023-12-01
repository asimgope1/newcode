import React, { useState } from 'react';
import { Image, ImageBackground, View, Text, ScrollView, TextInput } from 'react-native';
import { BACKGROUND, LOGO } from '../../constants/imagepath';
import { InputTxt } from '../../components/InputTxt';
import { CustomBtn } from '../../components/CustomBtn';
import { GETNETWORK, POSTNETWORK } from '../../utils/Network';
import { BASEURL } from '../../utils/Url';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verified, setVerified] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpDigits, setOtpDigits] = useState(['', '', '', '', '', '']);


  const verifymail = () => {
    const url = `${BASEURL}mob/verifyEmail/${email}`;
    GETNETWORK(url).then(res => {
      console.log('res', res);
      if (res.statusCode === 200) {
        setVerified(true);
      } else {
        alert('Please enter a valid email');
      }
    });
  };

  const handleOtpVerification = () => {
    // Logic to verify OTP
    console.log('Verifying OTP:', otpDigits.join(""));
    const url=`${BASEURL}mob/loginUsers`;
    const body={
      "email":email,
      "otp":otpDigits.join("")
    }
    console.log("object",body)
    POSTNETWORK(url,body).then(res=>{
      console.log('res',res);
      if(res.statusCode==200){
        navigation.navigate('HomeStack');
      }else{
        alert('Please enter a valid OTP');
      }
    })


  };

  const renderLoginView = () => (
    <View style={{ flex: 1, marginTop: '75%' }}>
      <View
        style={{
          height: '20%',
          width: '100%',
          borderRadius: 4,
          marginBottom: '5%',
        }}
      >
        <Text
          style={{
            fontSize: 21,
            fontWeight: 'bold',
            color: 'black',
            fontFamily: 'Roboto-Medium',
          }}
        >
          Login
        </Text>
        <View
          style={{
            width: '100%',
            marginTop: '3%',
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: '700',
              color: 'black',
              fontFamily: 'Roboto-Medium',
            }}
          >
            Login to continue using the app
          </Text>
        </View>
      </View>
      <View
        style={{
          height: '20%',
          width: '100%',
          marginTop: '3%',
        }}
      >
        <InputTxt
          placeholder="Enter your Email"
          Head="Email"
          type="email"
          setInputdata={setEmail}
          inputdata={email}
        />
      </View>
      {/* Other login view inputs */}
    </View>
  );



  const renderOtpView = () => {
  
    const handleOtpChange = (index, text) => {
      const newOtpDigits = [...otpDigits];
      newOtpDigits[index] = text;
      setOtpDigits(newOtpDigits);
    };
  
    return (
      <View style={{ flex: 1, marginTop: '70%' }}>
        <View
          style={{
            height: '20%',
            width: '90%',
            borderRadius: 4,
            marginBottom: '5%',
          }}
        >
          <Text
            style={{
              fontSize: 21,
              fontWeight: 'bold',
              color: 'black',
              fontFamily: 'Roboto-Medium',
            }}
          >
            OTP
          </Text>
          <View
            style={{
              width: '100%',
              marginTop: '3%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            {[...Array(6)].map((_, index) => (
              <View
                key={index}
                style={{
                  height: 50,
                  width: 50,
                  borderWidth: 1,
                  borderColor: 'black',
                  borderRadius: 8,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <TextInput
                  style={{
                    fontSize: 20,
                    textAlign: 'center',
                  }}
                  keyboardType="number-pad"
                  maxLength={1}
                  value={otpDigits[index]}
                  onChangeText={(text) => handleOtpChange(index, text)}
                />
              </View>
            ))}
          </View>
        </View>
        {/* Other OTP view inputs */}
      </View>
    );
  };
  


  return (
    <ImageBackground
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      source={BACKGROUND}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        contentContainerStyle={{ alignItems: 'center' }}
      >
        <Image
          style={{ marginTop: '30%', height: '9%', width: '60%', borderRadius: 4 }}
          source={LOGO}
        />
        {verified ? renderOtpView() : renderLoginView()}
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '10%',
          }}
        >
          {verified ? (
            <CustomBtn height={45} onTouch={handleOtpVerification} text="Verify" />
          ) : (
            <CustomBtn height={45} onTouch={verifymail} text="Login" />
          )}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Login;
