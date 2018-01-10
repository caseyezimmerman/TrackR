
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Animation from 'lottie-react-native'

import anim from '../../assets/whiteCheck.json'


export default class LottieCheckSuccess extends Component {
  componentDidMount() {
    this.animation.play()
  }

  render() {
    return (
        <View style={styles.container}>
          <View style={styles.container}>
            <Animation
            ref={animation => {
                this.animation = animation
            }}
            style={{
                alignSelf: 'center',
                width: 250,
                height: 250,
                
            }}
            loop={true}
            source={anim}
            />
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:-20,
    // backgroundColor: '#001a33',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    shadowRadius: 0,
    shadowOffset: {width:0, height: 0}
  },
  textStyle: {
    color: '#5D8DAD',
    fontSize: 25
  }
})