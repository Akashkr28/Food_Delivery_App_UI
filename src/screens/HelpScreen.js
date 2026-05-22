import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Screen } from '../components/Screen';
import { styles } from '../styles/sharedStyles';
import { colors } from '../theme/colors';

const helpSuggestions = [
  'Track an order from My Orders after checkout.',
  'Use the plus and minus buttons to update cart quantity.',
  'Select only the items you want before placing a partial order.'
];

const faqs = [
  {
    question: 'Can I edit my cart from Orders?',
    answer: 'Yes. Current Cart in Orders supports quantity changes, delete, selected checkout, and order all.'
  },
  {
    question: 'Where can I see completed orders?',
    answer: 'Open Profile Drawer and tap My Orders to view all placed orders.'
  },
  {
    question: 'Is login connected to a backend?',
    answer: 'No. This assignment uses persisted mock authentication with AsyncStorage.'
  }
];

export function HelpScreen() {
  return (
    <Screen>
      <Text style={styles.title}>Help</Text>
      <Text style={styles.bodyText}>Quick suggestions and FAQs for using the food delivery app.</Text>

      <Text style={styles.sectionTitle}>Suggestions</Text>
      {helpSuggestions.map((suggestion) => (
        <View style={styles.helpCard} key={suggestion}>
          <Ionicons name="bulb-outline" size={22} color={colors.primary} />
          <Text style={styles.helpText}>{suggestion}</Text>
        </View>
      ))}

      <Text style={[styles.sectionTitle, styles.sectionSpacing]}>FAQs</Text>
      {faqs.map((faq) => (
        <View style={styles.faqCard} key={faq.question}>
          <Text style={styles.cardTitle}>{faq.question}</Text>
          <Text style={styles.metaText}>{faq.answer}</Text>
        </View>
      ))}
    </Screen>
  );
}
