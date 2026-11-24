import React, { ReactNode } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  View,
} from 'react-native';

type CustomButtonProps = {
  title?: string;
  onPress: () => void;
  variant?: 'primary' | 'outline' | 'link' | 'back';
  icon?: ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

const CustomButton = ({
  title,
  onPress,
  variant = 'primary',
  icon,
  style,
  textStyle,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === 'primary' && styles.primaryButton,
        variant === 'outline' && styles.outlineButton,
        variant === 'link' && styles.linkButton,
        variant === 'back' && styles.backButton,
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.75}
      accessibilityRole="button"
    >
      {icon ? <View style={title ? styles.iconSpace : undefined}>{icon}</View> : null}

      {title ? (
        <Text
          style={[
            styles.text,
            variant === 'primary' && styles.primaryText,
            variant === 'outline' && styles.outlineText,
            variant === 'link' && styles.linkText,
            textStyle,
          ]}
        >
          {title}
        </Text>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButton: {
    height: 52,
    width: '100%',
    backgroundColor: '#2F6BEA',
    borderRadius: 10,
    shadowColor: '#2F6BEA',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
  outlineButton: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    marginBottom: 14,
  },
  linkButton: {
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
  backButton: {
    alignSelf: 'flex-start',
    paddingVertical: 5,
    paddingRight: 15,
    marginBottom: 24,
  },
  iconSpace: {
    marginRight: 10,
  },
  text: {
    fontSize: 13,
    fontWeight: '600',
  },
  primaryText: {
    color: '#FFFFFF',
    fontSize: 15,
  },
  outlineText: {
    color: '#111827',
    fontSize: 14,
    fontWeight: '500',
  },
  linkText: {
    color: '#2F6BEA',
  },
});

export default CustomButton;