import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import limao from './assets/images/limao.jpg';

export default function App() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [raiz1, setRaiz1] = useState('');
  const [raiz2, setRaiz2] = useState('');

  const calcularBhaskara = () => {
    const coefA = parseFloat(a);
    const coefB = parseFloat(b);
    const coefC = parseFloat(c);

    if (isNaN(coefA) || isNaN(coefB) || isNaN(coefC)) {
      alert('Por favor, insira valores válidos em todods os campos.');
      return;
    }

    const delta = coefB * coefB - 4 * coefA * coefC;

    if (delta < 0) {
      alert('Delta negativo. Não existem raízes reais.');
      setRaiz1('');
      setRaiz2('');
      return;
    }

    const raiz1Calc = (-coefB + Math.sqrt(delta)) / (2 * coefA);
    const raiz2Calc = (-coefB - Math.sqrt(delta)) / (2 * coefA);

    setRaiz1(raiz1Calc.toFixed(2));
    setRaiz2(raiz2Calc.toFixed(2));
  };

  const limparCampos = () => {
    setA('');
    setB('');
    setC('');
    setRaiz1('');
    setRaiz2('');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.caixa1}>
        <Image source={limao} style={styles.perfil} />
        <Text style={styles.titulo}>App Equação do 2° Grau</Text>
      </View>
      <View style={styles.caixa2}>
        <Text style={styles.texto1}> Entre com os valores nos campos abaixo: </Text>
        <Text style={styles.texto2}>
          <TextInput
            style={styles.caixaBhaskara}
            value={a}
            onChangeText={setA}
            keyboardType="numeric"
            placeholder="0"
          />
          X² +
          <TextInput
            style={styles.caixaBhaskara}
            value={b}
            onChangeText={setB}
            keyboardType="numeric"
            placeholder="0"
          />
          X +
          <TextInput
            style={styles.caixaBhaskara}
            value={c}
            onChangeText={setC}
            keyboardType="numeric"
            placeholder=""
          />
          =
        </Text>
      </View>
      <View style={styles.caixa3}>
        <View style={styles.caixinha13}>
        <View style={styles.caixinhaa1}>
          <Text style={styles.texto9}>Raiz 1: {raiz1}</Text>
          </View>
          <View style={styles.caixinhaa2}>
          <Text style={styles.texto9}>Raiz 2: {raiz2}</Text>
          </View>
        </View>
        <View style={styles.caixinha23}>
          <Text style={styles.texto3}>Fórmula de Bhaskara</Text>
          <Text style={styles.texto4}>x = (-b ± √(b² – 4ac)) / (2a)</Text>
        </View>
        <View style={styles.caixinha33}>
          <TouchableOpacity style={styles.botao1} onPress={calcularBhaskara}>
            <Text style={styles.texto7}>Calcular</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={limparCampos}>
            <Text style={styles.texto7}>Limpar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.caixinha43}>
          <Text style={styles.texto5}>copyright 2024 - Desenvolvido por HQ</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'row',
    justifyContent: 'center',
  },
  caixa1: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#E18921',
    borderBottomStartRadius: 20,
    borderBottomRightRadius: 20,
  },
  perfil: {
    width: 100,
    height: 100,
    marginTop: 80,
    marginLeft: 10,
    
  },
  titulo: {
    fontSize: 25,
    color: '#FFF',
    marginTop: 110,
    marginLeft: 20,
    fontWeight: 'bold',
  },
  caixa2: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  texto1: {
    fontSize: 20,
    color: '#000',
    marginTop: 40,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  texto2: {
    fontSize: 30,
    color: '#000',
    marginTop: 40,
    marginLeft: 60,
    fontWeight: 'bold',
  },
  caixaBhaskara: {
    width: 60,
    height: 40,
    backgroundColor: '#d9d9d9',
    fontSize: 19,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  caixa3: {
    flex: 2,
    backgroundColor: '#F6D9B6',
  },
  caixinha13: {
    flexDirection: 'row',
    marginTop: 10,
    marginRight: 40,
    marginBottom: 40,

  },
  caixinhaa1: {
    width: 205,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  caixinhaa2: {
    width: 205,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',

  },
  texto9: {
    fontSize: 30,
    color: '#000',
    marginTop: 40,
    marginLeft: 20,
  },
    texto3:{
      fontSize: 18,
      color: '#E18921',
      marginTop: 40,
      marginLeft: 40,
      fontWeight: 'bold',
    },
    texto4:{
      fontSize: 27,
      marginTop: 30,
      marginLeft: 40,
      color: '#E18921',
      fontWeight: 'bold',
    },
    caixinha33 :{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        marginRight: 40,
        marginBottom: 20,
      },
      botao1: {
        width: 170,
        height: 40,
        backgroundColor: '#1F5AF0',
        borderRadius: 10,
        marginTop: 30,
        marginLeft: 20,
        justifyContent: 'center',
      },
      botao: {
        width: 170,
        height: 40,
        backgroundColor: '#E18921',
        borderRadius: 10,
        marginTop: 30,
        marginLeft: 20,
        justifyContent: 'center',
      },
      texto7:{
        fontSize: 20,
        color: '#FFF',
        textAlign: 'center',
        fontWeight: 'bold',
      },

  caixinha43: {
  alignItems: 'center',
  },
  texto5:{
    fontSize: 15,
    color: '#E18921',
    marginTop: 20,
    marginLeft: 10,
    fontWeight: 'bold',
  },







});
