import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert
} from 'react-native';

const LoginScreen = ({navigation}: any) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleSubmitPress = () => {
    if (!userEmail) {
      showAlert('Please fill Email');
      return;
    }else if (!userPassword) {
      showAlert('Please fill Password');
      return;
    }else{
      navigation.replace("HomeScreen");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <KeyboardAvoidingView enabled>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../Assests/SplashIcon.png')}
              style={{
                width: '50%',
                height: 100,
                resizeMode: 'contain',
                margin: 30,
              }}
            />
          </View>
          
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserEmail => setUserEmail(UserEmail)}
              placeholder="Enter Email here"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserPassword => setUserPassword(UserPassword)}
              placeholder="Enter Password here"
              placeholderTextColor="#8b9cb5"
              keyboardType="default"
              secureTextEntry={true}
            />
          </View>

          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitPress}>
            <Text style={styles.buttonTextStyle}>LOGIN</Text>
          </TouchableOpacity>

          <Text
            style={styles.registerTextStyle}
            onPress={() => navigation.navigate('SignUpScreen')}>
            New Here ? Register
          </Text>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#87C1FF',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#87C1FF',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  registerTextStyle: {
    color: 'black',
    textAlign: 'center',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});

function showAlert(alertMsg: string) {
  Alert.alert('Alert', alertMsg, [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
}

