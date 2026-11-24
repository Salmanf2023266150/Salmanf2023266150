import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { Logo, GoogleIcon, FacebookIcon } from '../components/Icons';
import { User } from '../types/User';

type LoginScreenProps = {
  users: User[];
  onLogin: (email: string, password: string) => void;
  onSwitchSignup: () => void;
};

const LoginScreen = ({ users, onLogin, onSwitchSignup }: LoginScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Missing Information', 'Please enter your email and password.');
      return;
    }
    onLogin(email.trim().toLowerCase(), password);
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <View>
        <View style={styles.logoWrapper}>
          <Logo />
        </View>

        <Text style={styles.title}>Sign in to your{'\n'}Account</Text>
        <Text style={styles.subtitle}>
          Enter your email and password to log in
        </Text>

        <CustomInput
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <CustomInput
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <View style={styles.forgotContainer}>
          <CustomButton
            title="Forgot Password ?"
            variant="link"
            textStyle={styles.smallLink}
            onPress={() =>
              Alert.alert(
                'Forgot Password',
                'Please contact the administrator to reset your password.',
              )
            }
          />
        </View>

        <CustomButton title="Log In" onPress={handleLogin} />

        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>Or</Text>
          <View style={styles.line} />
        </View>

        <CustomButton
          title="Continue with Google"
          variant="outline"
          icon={<GoogleIcon />}
          onPress={() => Alert.alert('Google', 'Google login is not connected.')}
        />

        <CustomButton
          title="Continue with Facebook"
          variant="outline"
          icon={<FacebookIcon />}
          onPress={() => Alert.alert('Facebook', 'Facebook login is not connected.')}
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account? </Text>
        <CustomButton
          title="Sign Up"
          variant="link"
          textStyle={styles.smallLink}
          onPress={onSwitchSignup}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#FFFFFF' },
  content: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 28,
  },
  logoWrapper: { marginBottom: 28 },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#111827',
    lineHeight: 36,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 28,
  },
  forgotContainer: {
    alignSelf: 'flex-end',
    marginTop: -4,
    marginBottom: 22,
  },
  smallLink: { fontSize: 12, fontWeight: '600' },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 22,
  },
  line: { flex: 1, height: 1, backgroundColor: '#E5E7EB' },
  orText: {
    color: '#9CA3AF',
    fontSize: 12,
    marginHorizontal: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  footerText: { fontSize: 12, color: '#4B5563' },
});

export default LoginScreen;