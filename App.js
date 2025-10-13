import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botao: 'VAI',
      ultimo: null
    };

    this.timer = null;
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  vai() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({ botao: 'VAI' });
    } else {
      this.timer = setInterval(() => {
        this.setState((prevState) => ({
          numero: prevState.numero + 0.1
        }));
      }, 100);
      this.setState({ botao: 'PARAR' });
    }
  }

  limpar() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }

    this.setState({
      ultimo: this.state.numero,
      numero: 0,
      botao: 'VAI',
    });
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.titulo}> Meu Cronômetro</Text>
        <Image
          source={require('./src/cronometro.png')}
          style={styles.cronometro}
        />
        <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.vai}>
            <Text style={styles.btnTexto}> {this.state.botao} </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.limpar}>
            <Text style={styles.btnTexto}> LIMPAR </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.areaUltima}>
          <Text style={styles.textoCorrida}>
            {this.state.ultimo > 0 ? 'Último tempo: ' + this.state.ultimo.toFixed(2) + 's' : ''}
          </Text>
        </View>

        <Text style={styles.subtitulo}>By: Fernanda Melo</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#503458'
  },
  cronometro: {
    width: '70%',
    height: 280,
    marginTop: 60
  },
  timer: {
    marginTop: -160,
    color: '#fff',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 100,
    height: 40
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    width: 90,
    margin: 17,
    borderRadius: 9,
    marginTop: 10,
    marginBottom: 80
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#81638B',
  },

  areaUltima: {
    marginTop: 40
  },
  textoCorrida: {
    fontSize: 25,
    fontStyle: 'italic',
    color: '#fff'
  },
  titulo:{
    fontSize: 20,
    color: '#fff',
  },
  subtitulo:{
    fontSize: 13,
    color: '#fff',
  }
});

export default App;
