import React from 'react';
import { Pressable, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../theme/colors';
import { styles } from '../styles/sharedStyles';

export function AppButton({ title, icon, variant = 'primary', disabled = false, onPress }) {
  const iconColor = variant === 'secondary' ? colors.dark : colors.white;

  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        variant === 'secondary' && styles.secondaryButton,
        disabled && styles.disabledButton,
        pressed && !disabled && styles.pressed
      ]}
    >
      {icon ? <Ionicons name={icon} size={18} color={disabled ? colors.muted : iconColor} /> : null}
      <Text
        style={[
          styles.buttonText,
          variant === 'secondary' && styles.secondaryButtonText,
          disabled && styles.disabledButtonText
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}
