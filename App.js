import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View,SafeAreaView, TextInput,Button } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const DataResult = (props) => { 
  const {title, value} = props;
  return ( 
      <View style={styles.value}> 
          <Text>{title}</Text>
          <Text>{value}</Text> 
      </View>
  );
} 

export default function App() {
  
  const [aV,setAv] = useState(null);
  const [bV,setBv] = useState(null);
  const [cV, setCv] = useState(null);
  const [total, setTotal ] = useState(null);
  const [errorMessage, setErrorMessage ] = useState('');
  
  // useEffect( () => {
  //   if(aV && bV && cV) calculate();
  //   else reset();
  // }, [ aV, bV, cV ] );

  const calculate = () => {
    reset()
    if(!aV)
    {
      setErrorMessage('Añada la variable 🤬');
    }
    if(!bV)
    {
      setErrorMessage('Añada la variable 🤬');
    }
    if(!cV)
    {
      setErrorMessage('Añada la variable 🤬');
    }
    if(!aV && !bV && !cV){
      setErrorMessage('Añada las variables 😨');
    }
    else
    {
      const x = (-bV+Math.sqrt(Math.pow(bV,2) - 4 * aV * cV))/(2*aV);
      const y = (-bV-Math.sqrt(Math.pow(bV,2) - 4 * aV * cV))/(2*aV);
      console.log(x);
      setTotal({
        first: x.toFixed(2),
        second: y.toFixed(2),
      });
    }
  };

  const reset = () => {
    setErrorMessage('');
    setTotal(null);
  }

  const Resolution = (props) => {
    const {total,errorMessage} = props;
    return (<View>
        { total && (
          <View style={styles.boxResult}> 
            <DataResult title="Respuesta 1:" value={` ${total.first}`} />
            <DataResult title="Respuesta 2:" value={` ${total.second}`} />
          </View>
        )}
          <View> 
            <Text style={styles.error}>{errorMessage}</Text> 
          </View>
        </View>)
  }

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder="Variable A" 
        keyboardType="numeric"
        style={styles.input}
        onChange={(e) => setAv(e.nativeEvent.text)}
      />  
      <TextInput
        placeholder="Variable B" 
        keyboardType="numeric"
        style={styles.input} 
        onChange={(e) => setBv(e.nativeEvent.text)}
      />
      <TextInput
        placeholder="Variable C" 
        keyboardType="numeric"
        style={styles.input} 
        onChange={(e) => setCv(e.nativeEvent.text)} 
      />
      <Resolution 
        total = {total}
        errorMessage = {errorMessage}
      />
      <Button title="Calcular 😃" styles={styles.Button} onPress={calculate}/>
      <StatusBar style="auto" />
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    // margin: 10,
    height: 50, 
    backgroundColor:'#fff', 
    borderWidth: 1, 
    borderColor:'#8030db',
    borderRadius: 5,  
    marginRight: 5, 
    marginLeft: -5, 
    marginBottom: 10, 
    color: '#000', 
    paddingHorizontal: 20,
    width: '60%', 
    fontSize:10,
  },
  Button:{
    backgroundColor:'#750025',
  },
  value: { 
    flexDirection: 'row',
    justifyContent: 'space-between', 
    margin:5,
    fontSize: 20, 
  },
  error: { 
    textAlign: 'center', 
    color: '#f00',
    fontWeight: 'bold', 
    fontSize: 20, 
  },
  boxResult: { 
    padding: 30, 
  },     
});
