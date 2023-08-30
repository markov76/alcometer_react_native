import React, { useState } from 'react';
import { Alert, View, Text, TextInput, ScrollView, TouchableOpacity, Switch } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import { lightTheme, darkTheme } from './styles/Styles';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? darkTheme : lightTheme;
  const [weight, setWeight] = useState('');
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(null);

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
    <ScrollView style={[theme.container]}>
      <View style={theme.themeToggleContainer}>
        <Text style={{ ...theme.themeText, color: theme.buttonText }}>Light</Text>
        <Switch
          value={isDarkMode}
          onValueChange={handleThemeToggle}
          thumbColor={isDarkMode ? '#f4f3f4' : '#007AFF'}
          trackColor={{ false: '#007AFF', true: '#f4f3f4' }}
        />
        <Text style={{ ...theme.themeText, color: theme.buttonText }}>Dark</Text>
      </View>

      <Text style={theme.heading}>Alkomittari</Text>

      <Text style={theme.label}>Paino (kg)</Text>
      <TextInput
        style={{ ...theme.input }}
        keyboardType="numeric"
        value={weight}
        onChangeText={text => setWeight(text)}
      />

      <Text style={theme.label}>Pullojen määrä</Text>
      <View style={[theme.numericInputContainer, { marginBottom: 20 }]}>
        <NumericInput
          totalHeight={55}
          totalWidth={120}
          validateOnBlur={false}
          separatorWidth={0}
          rounded={true}
          textColor='#2e6153'
          borderColor='#0000'
          inputStyle={{
              backgroundColor: "#fff",
              borderWidth: 1,
              borderColor: '#2e6153',
              borderStyle: 'solid',
          }}
          containerStyle={{
              backgroundColor: '#2e6153',
              borderWidth: 1,
              borderColor: '#2e6153',
              borderStyle: 'solid',
          }}
          iconStyle={{
              color: '#fff',
          }}
          leftButtonBackgroundColor='#2e6153'
          rightButtonBackgroundColor='#2e6153'
          minValue={1}
          maxValue={999}
          style={{ ...theme.numericInput }}
          value={bottles}
          onChange={value => setBottles(value)}
        />
      </View>

      <Text style={theme.label}>Aika (tunteina)</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <NumericInput
              totalHeight={55}
              totalWidth={120}
              validateOnBlur={false}
              separatorWidth={0}
              rounded={true}
              textColor='#2e6153'
              borderColor='#0000'
              inputStyle={{
                  backgroundColor: "#fff",
                  borderWidth: 1,
                  borderColor: '#2e6153',
                  borderStyle: 'solid',
              }}
              containerStyle={{
                  backgroundColor: '#2e6153',
                  borderWidth: 1,
                  borderColor: '#2e6153',
                  borderStyle: 'solid',
              }}
              iconStyle={{
                  color: '#fff',
              }}
              leftButtonBackgroundColor='#2e6153'
              rightButtonBackgroundColor='#2e6153'
              minValue={1}
              maxValue={999}
             
          
          style={{ ...theme.numericInput }}
          value={time}
          onChange={value => setTime(value)}
          
        />
      </View>

      <Text style={theme.label}>Sukupuoli</Text>
      <View style={{ flexDirection: 'row', marginBottom: 20 }}>
        <TouchableOpacity
          style={{ ...theme.button, backgroundColor: gender === 'male' ? '#007AFF' : '#ccc' }}
          onPress={() => setGender('male')}
        >
          <Text style={theme.buttonText}>Mies</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...theme.button, backgroundColor: gender === 'female' ? '#ea10b4' : '#ccc', marginLeft: 10 }}
          onPress={() => setGender('female')}
        >
          <Text style={theme.buttonText}>Nainen</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={theme.button} onPress={handleCalculate}>
        <Text style={theme.buttonText}>Laske</Text>
      </TouchableOpacity>

      {result != null && (
        <View style={[
          theme.resultContainer,
          result < 0.5 ? { backgroundColor: 'rgba(11, 233, 11, 0.866)' } :
          result < 1.5 ? { backgroundColor: 'rgba(235, 243, 11, 0.974)' } :
          { backgroundColor: 'rgba(234, 9, 9, 0.984)' }
        ]}>
          <Text style={[
            theme.resultText,
            { color: 'black' }
          ]}>
            Tulos: {result}
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

export default App;