import { StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { Colors } from '@/constants/Colors';
import { BMICategory } from '@/constants/bmiTips';

interface BMIResultProps {
  bmi: number;
  category: BMICategory;
}

export default function BMIResult({ bmi, category }: BMIResultProps) {
  return (
    <ThemedView style={styles.resultContainer}>
      <ThemedText style={styles.resultText}>Your BMI: {bmi.toFixed(1)}</ThemedText>
      <ThemedText style={styles.categoryText}>Category: {category}</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  resultContainer: {
    marginTop: 25,
    padding: 20,
    borderRadius: 15,
    backgroundColor: Colors.light.backgroundSecondary,
    width: '100%',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: Colors.light.tint,
  },
  categoryText: {
    fontSize: 18,
    color: Colors.light.tabIconSelected,
    fontWeight: '600',
  },
});