
import React, { useState } from 'react';
import {
  Alert,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import SignupScreen from './src/screens/SignupScreen';
import LoginScreen from './src/screens/LoginScreen';
import { User } from './src/types/User';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState<
    'signup' | 'login'
  >('signup');

  const [users, setUsers] = useState<User[]>([]);

  // Register a new user
  const handleRegister = (newUser: User) => {
    const existingUser = users.find(
      user => user.email.toLowerCase() === newUser.email.toLowerCase(),
    );

    if (existingUser) {
      Alert.alert(
        'Registration Failed',
        'This email is already registered.',
      );
      return;
    }

    setUsers(previousUsers => [...previousUsers, newUser]);

    Alert.alert(
      'Registration Successful',
      'Your account has been created successfully.',
    );

    setCurrentScreen('login');
  };

  // Login an existing user
  const handleLogin = (email: string, password: string) => {
    const foundUser = users.find(
      user =>
        user.email.toLowerCase() === email.toLowerCase() &&
        user.password === password,
    );

    if (foundUser) {
      Alert.alert(
        'Success',
        'User login successfully',
      );
    } else {
      Alert.alert(
        'Login Failed',
        'User not found',
      );
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {currentScreen === 'signup' ? (
        <SignupScreen
          onRegister={handleRegister}
          onSwitchLogin={() => setCurrentScreen('login')}
        />
      ) : (
        <LoginScreen
          users={users}
          onLogin={handleLogin}
          onSwitchSignup={() => setCurrentScreen('signup')}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default App;
