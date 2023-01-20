import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  Alert
} from 'react-native';
import Preference from 'react-native-preference';

const RegisterScreen = ({navigation}: any) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleSubmitButton = () => {
    if (!userName) {
      showAlert('Please fill Name');
      return;
    }else if (!userEmail) {
      showAlert('Please fill Email');
      return;
    }else if (!userAge) {
      showAlert('Please fill Age');
      return;
    }else if (!userAddress) {
      showAlert('Please fill Address');
      return;
    }else if (!userPassword) {
      showAlert('Please fill Password');
      return;
    }else{
      Preference.set('app-rn-email', userEmail);
      navigation.replace("HomeScreen");
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>
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
        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserName => setUserName(UserName)}
              placeholder="Enter Name here"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserEmail => setUserEmail(UserEmail)}
              placeholder="Enter Email here"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserPassword => setUserPassword(UserPassword)}
              placeholder="Enter Password here"
              placeholderTextColor="#8b9cb5"
              secureTextEntry={true}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserAge => setUserAge(UserAge)}
              placeholder="Enter Age here"
              placeholderTextColor="#8b9cb5"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserAddress => setUserAddress(UserAddress)}
              placeholder="Enter Address here"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
            />
          </View>

          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitButton}>
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              navigation.navigate('LoginScreen');
            }}>
            <Text style={{color: 'black', textAlign: 'center'}}>
              Already have an Account?
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default RegisterScreen;

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
    marginBottom: 20,
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
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});

function showAlert(alertMsg: string) {
  Alert.alert('Alert', alertMsg, [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
}
