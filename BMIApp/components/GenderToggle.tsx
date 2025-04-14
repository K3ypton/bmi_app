import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from './ThemedText';
import { Colors } from '@/constants/Colors';

interface GenderToggleProps {
  gender: 'male' | 'female';
  setGender: (gender: 'male' | 'female') => void;
}

export default function GenderToggle({ gender, setGender }: GenderToggleProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, gender === 'male' && styles.active]}
        onPress={() => setGender('male')}
      >
        <ThemedText style={styles.text}>Male</ThemedText>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[styles.button, gender === 'female' && styles.active]}
        onPress={() => setGender('female')}
      >
        <ThemedText style={styles.text}>Female</ThemedText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 25,
    gap: 15,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.light.tabIconDefault,
    backgroundColor: Colors.light.backgroundSecondary,
  },
  active: {
    backgroundColor: Colors.light.tint,
    borderColor: Colors.light.tint,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.light.text,
  },
});