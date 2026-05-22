import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import { AppButton } from '../components/AppButton';
import { Screen } from '../components/Screen';
import { useUser } from '../context/UserContext';
import { styles } from '../styles/sharedStyles';

export function SettingsScreen() {
  const { user, updateUser } = useUser();
  const [form, setForm] = useState(user);
  const [saved, setSaved] = useState(false);

  const updateField = (field, value) => {
    setSaved(false);
    setForm((current) => ({ ...current, [field]: value }));
  };

  const saveProfile = () => {
    updateUser(form);
    setSaved(true);
  };

  return (
    <Screen>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.bodyText}>Update your profile details used in the drawer and profile screen.</Text>

      <View style={styles.formCard}>
        <Text style={styles.inputLabel}>Full name</Text>
        <TextInput
          value={form.name}
          onChangeText={(value) => updateField('name', value)}
          style={styles.textInput}
          placeholder="Enter full name"
        />

        <Text style={styles.inputLabel}>Mobile number</Text>
        <TextInput
          value={form.mobile}
          onChangeText={(value) => updateField('mobile', value)}
          style={styles.textInput}
          keyboardType="phone-pad"
          placeholder="Enter mobile number"
        />

        <Text style={styles.inputLabel}>Email id</Text>
        <TextInput
          value={form.email}
          onChangeText={(value) => updateField('email', value)}
          style={styles.textInput}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Enter email id"
        />

        <Text style={styles.inputLabel}>Delivery address</Text>
        <TextInput
          value={form.address}
          onChangeText={(value) => updateField('address', value)}
          style={[styles.textInput, styles.multilineInput]}
          multiline
          placeholder="Enter delivery address"
        />
      </View>

      {saved ? <Text style={styles.successText}>Profile updated successfully.</Text> : null}
      <AppButton title="Save Changes" icon="save-outline" onPress={saveProfile} />
    </Screen>
  );
}
