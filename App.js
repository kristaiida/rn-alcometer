import { useState } from 'react';
import { View, TextInput, Text, Switch, Button, ScrollView, Alert } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import Styles from './styles/Styles.js';
import { RadioButton, Provider, MD3LightTheme, MD3DarkTheme } from 'react-native-paper';

export default function App() {

  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [hours, setHours] = useState(0);
  const [gender, setGender] = useState('male');
  const [dark, setDark] = useState(false);
  const [total, setTotal] = useState(0);

  function handlePress() {
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsLeft = grams - (burning * hours);
    let answer = 0;

    if (gender === 'male') {
      answer = gramsLeft / (weight * 0.7);
    } else {
      answer = gramsLeft / (weight * 0.6);
    }
    setTotal(answer);

    
    if (answer < 0) {
      setTotal(0);
    }
  
    if (isNaN(weight)) {
      Alert.alert('Error message!', 'Please enter weight.')
    }};

  const toggleTheme = () => {
    setDark( !dark );
  }

  const CustomDefaultTheme = {
    ...MD3LightTheme,
    colors: {
      ...MD3LightTheme.colors,
    }
  }
  
  const CustomDarkTheme = {
    ...MD3DarkTheme,
    colors: {
      ...MD3DarkTheme.colors,
      background: '#faebf6',
      text: '#380038',
    }
  }

  const theme = dark ? CustomDarkTheme : CustomDefaultTheme;

  return (
    <Provider theme={theme}>
    <ScrollView theme={theme}>
    <View style={{flex:1, padding: 30, backgroundColor: theme.colors.background}}>
      <View style={Styles.switchRow}>
        <Switch
          style={Styles.switch}
          value={dark}
          onValueChange={ toggleTheme }
          trackColor={{false: '#767577', true: '#380038'}}
          thumbColor={dark ? '#6d5869' : '#ffffff'}
        />
      </View>
      <Text style={Styles.header}>Alcometer</Text>
      <Text style={Styles.head}>Weight</Text>
      <TextInput 
        value={weight}
        style={Styles.textInput}
        keyboardType='number-pad'
        onChangeText={v => {setWeight(Number.parseInt(v))}}
      />
      <Text style={Styles.head}>Bottles</Text>
      <View style={Styles.num}>
      <NumericInput
        onChange={b => setBottles(b)}
        value={bottles}
        rounded
        minValue={0}
      />
      </View>
      <Text style={Styles.head}>Hours</Text>
      <View style={Styles.num}>
      <NumericInput
        onChange={h => setHours(h)}
        value={hours}
        rounded
        minValue={0}
      />
      </View>
      <RadioButton.Group onValueChange={newValue => setGender(newValue)} value={gender}>
        <View>
          <RadioButton value='male'/>
          <Text>Male</Text>
        </View>
        <View>
        <RadioButton value='female'/>
          <Text>Female</Text>
        </View>
      </RadioButton.Group>
      <Text style={Styles.total}>{total.toFixed(2)}</Text>
      <View style={Styles.button}>
        <Button color={'#380038'} title='CALCULATE' onPress={handlePress}/>
      </View>
    </View>
    </ScrollView>
    </Provider>
  );
}


