import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { Colors } from '@/constants/Colors';

export default function BMIForm({
  weight,
  height,
  setWeight,
  setHeight,
  calculate,
}: {
  weight: string;
  height: string;
  setWeight: (text: string) => void;
  setHeight: (text: string) => void;
  calculate: () => void;
}) {
  return (
    <ThemedView style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
        placeholderTextColor={Colors.light.tabIconDefault}
      />
      <TextInput
        style={styles.input}
        placeholder="Height (cm)"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
        placeholderTextColor={Colors.light.tabIconDefault}
      />
      <TouchableOpacity style={styles.button} onPress={calculate}>
        <ThemedText style={styles.buttonText}>Calculate BMI</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
    marginVertical: 20,
  },
  input: {
    height: 50,
    borderColor: Colors.light.tint,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    color: Colors.light.text,
  },
  button: {
    backgroundColor: Colors.light.tint,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});