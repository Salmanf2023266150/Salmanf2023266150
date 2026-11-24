import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {
  BackArrowIcon,
  CalendarIcon,
  ChevronDownIcon,
  FlagIcon,
} from '../components/Icons';
import { User } from '../types/User';

type SignupScreenProps = {
  onRegister: (user: User) => void;
  onSwitchLogin: () => void;
};

const SignupScreen = ({ onRegister, onSwitchLogin }: SignupScreenProps) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (
      !fullName.trim() ||
      !email.trim() ||
      !dob.trim() ||
      !phone.trim() ||
      !password.trim()
    ) {
      Alert.alert('Missing Information', 'Please fill in all fields.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.trim())) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Weak Password', 'Password must contain at least 6 characters.');
      return;
    }

    onRegister({
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      dob: dob.trim(),
      phone: phone.trim(),
      password,
    });
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <View>
        <CustomButton
          variant="back"
          icon={<BackArrowIcon />}
          onPress={onSwitchLogin}
        />

        <Text style={styles.title}>Sign up</Text>
        <Text style={styles.subtitle}>Create an account to continue!</Text>

        <CustomInput
          label="Full Name"
          placeholder="Enter your full name"
          value={fullName}
          onChangeText={setFullName}
        />

        <CustomInput
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <CustomInput
          label="Birth of date"
          placeholder="DD/MM/YYYY"
          value={dob}
          onChangeText={setDob}
          rightIcon={<CalendarIcon />}
        />

        <CustomInput
          label="Phone Number"
          placeholder="(454) 726-0592"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          leftElement={
            <View style={styles.flagRow}>
              <FlagIcon />
              <View style={styles.chevron}>
                <ChevronDownIcon />
              </View>
            </View>
          }
        />

        <CustomInput
          label="Set Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <View style={styles.buttonSpace}>
          <CustomButton title="Register" onPress={handleRegister} />
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account? </Text>
        <CustomButton
          title="Login"
          variant="link"
          textStyle={styles.smallLink}
          onPress={onSwitchLogin}
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
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 26,
  },
  flagRow: { flexDirection: 'row', alignItems: 'center' },
  chevron: { marginLeft: 4 },
  buttonSpace: { marginTop: 8 },
  smallLink: { fontSize: 12, fontWeight: '600' },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  footerText: { fontSize: 12, color: '#4B5563' },
});

export default SignupScreen;