import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path, Circle, Rect, Line } from 'react-native-svg';

// Logo: blue shield + "Logoipsum"
export const Logo = () => (
  <View style={logoStyles.row}>
    <Svg width={22} height={22} viewBox="0 0 24 24">
      <Path
        d="M12 1.5L3.5 4.8v6.4c0 5.3 3.6 9.9 8.5 11.3 4.9-1.4 8.5-6 8.5-11.3V4.8L12 1.5z"
        fill="#2865E8"
      />
      <Path
        d="M8 11l4 3.2 4-3.2"
        stroke="#FFFFFF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
    <Text style={logoStyles.text}>Logoipsum</Text>
  </View>
);

const logoStyles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center' },
  text: {
    marginLeft: 6,
    fontSize: 16,
    fontWeight: '800',
    color: '#111827',
  },
});

export const GoogleIcon = ({ size = 20 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <Path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <Path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
    />
    <Path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </Svg>
);

export const FacebookIcon = ({ size = 20 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Circle cx={12} cy={12} r={12} fill="#1877F2" />
    <Path
      fill="#FFFFFF"
      d="M16.67 15.47l.53-3.47h-3.33V9.75c0-.95.46-1.88 1.95-1.88h1.51V4.92s-1.37-.23-2.68-.23c-2.73 0-4.52 1.66-4.52 4.65V12H7.08v3.47h3.05V24h3.74v-8.53h2.8z"
    />
  </Svg>
);

export const EyeIcon = ({ off = false }: { off?: boolean }) => (
  <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
    <Path
      d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"
      stroke="#9CA3AF"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle cx={12} cy={12} r={3} stroke="#9CA3AF" strokeWidth={1.8} />
    {off && (
      <Line
        x1={3}
        y1={21}
        x2={21}
        y2={3}
        stroke="#9CA3AF"
        strokeWidth={1.8}
        strokeLinecap="round"
      />
    )}
  </Svg>
);

export const CalendarIcon = () => (
  <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
    <Rect
      x={3}
      y={4.5}
      width={18}
      height={16}
      rx={3}
      stroke="#9CA3AF"
      strokeWidth={1.8}
    />
    <Line x1={3} y1={10} x2={21} y2={10} stroke="#9CA3AF" strokeWidth={1.8} />
    <Line x1={8} y1={2.5} x2={8} y2={6.5} stroke="#9CA3AF" strokeWidth={1.8} strokeLinecap="round" />
    <Line x1={16} y1={2.5} x2={16} y2={6.5} stroke="#9CA3AF" strokeWidth={1.8} strokeLinecap="round" />
  </Svg>
);

export const BackArrowIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path
      d="M19 12H5M11 6l-6 6 6 6"
      stroke="#111827"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const ChevronDownIcon = () => (
  <Svg width={14} height={14} viewBox="0 0 24 24" fill="none">
    <Path
      d="M6 9l6 6 6-6"
      stroke="#6B7280"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// Small flag (red cross on white) for the phone prefix
export const FlagIcon = () => (
  <Svg width={22} height={22} viewBox="0 0 24 24">
    <Circle cx={12} cy={12} r={11} fill="#FFFFFF" stroke="#E5E7EB" strokeWidth={1} />
    <Rect x={10.5} y={2} width={3} height={20} fill="#E11D48" />
    <Rect x={2} y={10.5} width={20} height={3} fill="#E11D48" />
  </Svg>
);