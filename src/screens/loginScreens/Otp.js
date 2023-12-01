import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

const Otp = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');
  const [num4, setNum4] = useState('');
  const [err, setErr] = useState('');

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const verifyOTP = () => {
    const otp = num1 + num2 + num3 + num4;
    if (otp.length !== 4) {
      setErr('Enter 4 digit OTP');
    } else {
      // Perform OTP verification logic here
      console.log('Verifying OTP:', otp);
      // Example: API call or verification logic
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <View style={styles.otpContainer}>
        <TextInput
          value={num1}
          onChangeText={(txt) => {
            setErr('');
            if (!isNaN(txt)) {
              setNum1(txt);
              if (txt !== '') {
                ref2.current.focus();
              }
            }
          }}
          keyboardType="numeric"
          maxLength={1}
          style={styles.otpInput}
          ref={(input) => (ref1.current = input)} // Assigning ref using callback
        />
        {/* Other TextInput components for num2, num3, num4 */}
      </View>
      {/* ... Other components ... */}
      <TouchableOpacity onPress={verifyOTP} style={styles.verifyButton}>
        <Text style={styles.verifyButtonText}>VERIFY OTP</Text>
      </TouchableOpacity>
      {/* ... Other components ... */}
      <Text style={styles.resendText}>Didn’t receive the OTP? </Text>
      {/* ... Other components ... */}
    </View>
  );
};

// Styles remain unchanged
const styles = {
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
      // Add other styling as needed
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      // Add other styling as needed
    },
    otpContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      marginBottom: 20,
      // Add other styling as needed
    },
    otpInput: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      padding: 10,
      textAlign: 'center',
      width: 50,
      height: 50,
      // Add other styling as needed
    },
    // Add styles for other elements as required
    verifyButton: {
      backgroundColor: '#3498db',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
      // Add other styling as needed
    },
    verifyButtonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
      textAlign: 'center',
      // Add other styling as needed
    },
    resendText: {
      // Add styling for resend text
    },
  };

export default Otp;
