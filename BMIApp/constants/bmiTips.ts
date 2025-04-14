type BMIAdvice = {
    general?: string[];
    male?: string[];
    female?: string[];
  };
  
  export const BMI_TIPS: Record<string, BMIAdvice> = {
    Underweight: {
      male: [
        'Increase calorie intake with nutrient-rich foods',
        'Strength training to build muscle mass',
        'Consume healthy fats like avocados and nuts'
      ],
      female: [
        'Focus on nutrient-dense foods',
        'Incorporate strength training 3x/week',
        'Add healthy snacks between meals'
      ],
    },
    Overweight: {
      general: [
        'Reduce processed food intake',
        'Aim for 150 mins exercise/week',
        'Increase vegetable consumption'
      ],
    },
    Obese: {
      general: [
        'Consult nutritionist for meal plan',
        'Start with low-impact exercises',
        'Track daily food intake'
      ],
    },
    Normal: {
      general: [
        'Maintain balanced diet',
        'Continue regular exercise',
        'Monitor weight monthly'
      ],
    },
  } as const;
  
  export type BMICategory = keyof typeof BMI_TIPS;