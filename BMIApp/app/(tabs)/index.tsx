import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import BMIForm from '../../components/BMIForm';
import BMIResult from '../../components/BMIResult';


export default function BMIScreen() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState('');

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
    else if (bmiValue < 25) setCategory('Normal weight');
    else if (bmiValue < 30) setCategory('Overweight');
    else setCategory('Obese');
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">BMI Calculator</ThemedText>
      <BMIForm
        weight={weight}
        height={height}
        setWeight={setWeight}
        setHeight={setHeight}
        calculate={calculateBMI}
      />
      {bmi && <BMIResult bmi={bmi} category={category} />}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
});