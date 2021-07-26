import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Swiper from 'react-native-swiper';

const SwiperImages = () => {
  return (
    <View style={styles.sliderContainer}>
      <Swiper autoplay height={200} activeDotColor="black">
        <View style={styles.slide}>
          <Image
            style={styles.sliderImage}
            source={require('../assets/Swiper1.jpg')}
            resizeMode="cover"
          />
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.sliderImage}
            source={require('../assets/Swiper2.jpg')}
            resizeMode="cover"
          />
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.sliderImage}
            source={require('../assets/Swiper3.jpg')}
            resizeMode="cover"
          />
        </View>

        <View style={styles.slide}>
          <Image
            style={styles.sliderImage}
            source={require('../assets/Swiper4.jpg')}
            resizeMode="cover"
          />
        </View>
      </Swiper>
    </View>
  );
};

export default SwiperImages;

const styles = StyleSheet.create({
  sliderContainer: {
    height: 200,
    width: '100%',
    marginTop:2,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    paddingHorizontal: 2,
    paddingVertical: 10,
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '90%',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 8,
  },
});
