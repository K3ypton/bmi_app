import { useState } from 'react';
import { StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import GenderToggle from '@/components/GenderToggle';
import BMIResult from '@/components/BMIResult';
import BMITips from '@/components/BMITips';
import { Colors } from '@/constants/Colors';
import { BMI_TIPS, BMICategory } from '@/constants/bmiTips';

export default function 
CalculatorScreen() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<BMICategory>('Normal');

  const calculateBMI = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);
    
    if (isNaN(weightNum) || isNaN(heightNum) || heightNum === 0) {
      alert('Please enter valid values');
      return;
    }

    const heightInMeters = heightNum / 100;
    const bmiValue = weightNum / (heightInMeters * heightInMeters);
    setBmi(bmiValue);
    
    if (bmiValue < 18.5) setCategory('Underweight');
    else if (bmiValue < 25) setCategory('Normal');
    else if (bmiValue < 30) setCategory('Overweight');
    else setCategory('Obese');
  };
 

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText type="title" style={styles.title}>BMI Calculator</ThemedText>
      
      <GenderToggle gender={gender} setGender={setGender} />
      
      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        placeholderTextColor={Colors.light.tabIconDefault}
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Height (cm)"
        placeholderTextColor={Colors.light.tabIconDefault}
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />
      
      <TouchableOpacity style={styles.button} onPress={calculateBMI}>
        <ThemedText style={styles.buttonText}>Calculate BMI</ThemedText>
      </TouchableOpacity>

      {bmi && <BMIResult bmi={bmi} category={category} />}
      {bmi && <BMITips category={category} gender={gender} />}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: Colors.light.background,
  },
  title: {
    fontSize: 28,
    marginBottom: 30,
    color: Colors.light.tint,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: Colors.light.tabIconDefault,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    color: Colors.light.text,
    backgroundColor: Colors.light.backgroundSecondary,
  },
  button: {
    backgroundColor: Colors.light.tint,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: Colors.light.background,
    fontSize: 18,
    fontWeight: 'bold',
  },
});