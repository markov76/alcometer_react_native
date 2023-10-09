import React, { useState } from 'react';
import { Alert, View, Text, TextInput, ScrollView, Switch } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import { RadioButton, RadioButtonGroup, Button } from 'react-native-paper';
import { useFonts } from 'expo-font';
import { lightTheme, darkTheme, colors } from './styles/Styles';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const currentTheme = isDarkMode ? darkTheme : lightTheme;
  const currentColors = isDarkMode ? colors.dark : colors.light;

  const [weight, setWeight] = useState('');
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(null);

  const [loaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });
  if (!loaded) {
    return null;
  }

  const handleCalculate = () => {
    if (weight === '') {
      Alert.alert('Huomio', 'Syötä paino ennen laskemista.');
      return; 
    }

    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - burning * time; 

    let bacResult;
    if (gender === 'male') {
      bacResult = gramsLeft / (weight * 0.7);
    } else {
      bacResult = gramsLeft / (weight * 0.6);
    }

    bacResult = Math.max(bacResult, 0);
    setResult(bacResult.toFixed(2));
  };

  const handleThemeToggle = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <ScrollView style={currentTheme.container}>
      <View style={currentTheme.themeToggleContainer}>
        <Text style={{ ...currentTheme.themeText, color: currentColors.text }}>Light</Text>
        <Switch
          value={isDarkMode}
          onValueChange={handleThemeToggle}
          thumbColor={isDarkMode ? currentColors.switchThumb : currentColors.switchTrack}
          trackColor={{ false: currentColors.switchTrack, true: currentColors.switchThumb }}
        />
        <Text style={{ ...currentTheme.themeText, color: currentColors.text }}>Dark</Text>
      </View>

      <Text style={currentTheme.heading}>Alkoholimittari</Text>

      <Text style={currentTheme.label}>Paino (kg)</Text>
      <TextInput
        style={currentTheme.input}
        keyboardType="numeric"
        value={weight}
        onChangeText={text => setWeight(text)}
      />

      <Text style={currentTheme.label}>Pullojen määrä</Text>
      <View style={[currentTheme.numericInputContainer, { marginBottom: 20 }]}>
        <NumericInput
          totalHeight={55}
          totalWidth={120}
          validateOnBlur={false}
          separatorWidth={0}
          rounded={true}
          textColor={currentColors.inputText}
          borderColor={currentColors.inputBorder}
          inputStyle={{
              backgroundColor: currentColors.inputBackground,
              borderWidth: 1,
              borderColor: currentColors.numericInputContainer,
              borderStyle: 'solid',
          }}
          containerStyle={{
              backgroundColor: currentColors.numericInputContainer,
              borderWidth: 1,
              borderColor: currentColors.numericInputContainer,
              borderStyle: 'solid',
          }}
          iconStyle={{
              color: currentColors.iconColor,
          }}
          leftButtonBackgroundColor={currentColors.numericInputContainer}
          rightButtonBackgroundColor={currentColors.numericInputContainer}
          minValue={0}
          maxValue={99}
          value={bottles}
          onChange={value => setBottles(value)}
        />
      </View>

      <Text style={currentTheme.label}>Aika (tunteina)</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <NumericInput
          totalHeight={55}
          totalWidth={120}
          validateOnBlur={false}
          separatorWidth={0}
          rounded={true}
          textColor={currentColors.inputText}
          borderColor={currentColors.inputBorder}
          inputStyle={{
              backgroundColor: currentColors.inputBackground,
              borderWidth: 1,
              borderColor: currentColors.numericInputContainer,
              borderStyle: 'solid',
          }}
          containerStyle={{
              backgroundColor: currentColors.numericInputContainer,
              borderWidth: 1,
              borderColor: currentColors.numericInputContainer,
              borderStyle: 'solid',
          }}
          iconStyle={{
              color: currentColors.iconColor,
          }}
          leftButtonBackgroundColor={currentColors.numericInputContainer}
          rightButtonBackgroundColor={currentColors.numericInputContainer}
          minValue={1}
          maxValue={99}
          value={time}
          onChange={value => setTime(value)}
        />
      </View>

      <View>
    <Text style={{ ...currentTheme.label, color: currentColors.text }}>Sukupuoli</Text>
    <RadioButton.Group onValueChange={(value) => setGender(value)} value={gender}>
        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
            <RadioButton.Item 
                label="Mies" 
                value="male" 
                color={currentColors.text} 
                labelStyle={{ color: currentColors.text }} 
            />
            <RadioButton.Item 
                label="Nainen" 
                value="female" 
                color={currentColors.text} 
                labelStyle={{ color: currentColors.text }} 
            />
        </View>
    </RadioButton.Group>
    <Button mode="contained" onPress={handleCalculate}>
        Laske
    </Button>
</View>

      {result != null && (
        <View style={[
          currentTheme.resultContainer,
          result < 0.5 ? { backgroundColor: currentColors.safeResult } :
          result < 1.2 ? { backgroundColor: currentColors.warningResult } :
          { backgroundColor: currentColors.dangerResult }
        ]}>
          <Text style={[
            currentTheme.resultText,
            { color: currentColors.resultText }
          ]}>
            Tulos: {result}
          </Text>
        </View>
      )}
    </ScrollView>
);

};

export default App;