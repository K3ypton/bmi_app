import { View, StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';
import { BMI_TIPS } from '@/constants/bmiTips';
import { Colors } from '@/constants/Colors';
import { BMICategory } from '@/constants/bmiTips';

interface BMITipsProps {
  category: BMICategory;
  gender: 'male' | 'female';
}

export default function BMITips({ category, gender }: BMITipsProps) {
  const categoryTips = BMI_TIPS[category];
  const genderTips = category === 'Underweight' ? BMI_TIPS[category][gender] : [];

  const tips = [
    ...(categoryTips.general || []),
    ...(genderTips || [])
  ];

  return (
    <View style={styles.container}>
      <ThemedText type="subtitle" style={styles.title}>Health Tips:</ThemedText>
      {tips.map((tip, index) => (
        <ThemedText key={index} style={styles.tip}>• {tip}</ThemedText>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 20,
    borderRadius: 15,
    backgroundColor: Colors.light.backgroundSecondary,
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: Colors.light.tint,
  },
  tip: {
    fontSize: 16,
    marginBottom: 10,
    color: Colors.light.text,
    lineHeight: 24,
  },
});