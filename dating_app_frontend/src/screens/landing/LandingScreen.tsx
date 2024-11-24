import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  Animated,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    title: 'Find your new favorite restaurant',
    message:
      'Veniam proident do adipisicing sint reprehenderit qui aliqua pariatur exercitation elit ad qui anim',
    action: 'Get started',
  },
  {
    title: 'Discover new places to eat',
    message:
      'Veniam proident do adipisicing sint reprehenderit qui aliqua pariatur exercitation elit ad qui anim',
    action: 'Continue',
  },
  {
    title: "We've got you covered",
    message:
      'Veniam proident do adipisicing sint reprehenderit qui aliqua pariatur exercitation elit ad qui anim',
    action: 'Start exploring',
  },
];

const elements = [
  {
    uri: 'https://images.pexels.com/photos/3566120/pexels-photo-3566120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    position: [-50, 15],
    rotate: '15deg',
  },
  {
    uri: 'https://images.pexels.com/photos/1267350/pexels-photo-1267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    position: [180, 120],
    rotate: '-10deg',
  },
  {
    uri: 'https://images.pexels.com/photos/4336734/pexels-photo-4336734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    position: [540, 50],
    rotate: '20deg',
  },
  {
    uri: 'https://images.pexels.com/photos/3413186/pexels-photo-3413186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    position: [860, 25],
    rotate: '-4deg',
  },
];

function Background() {
  return (
    <View style={styles.elements}>
      {elements.map(({ uri, position: [x, y], rotate }, index) => (
        <View
          style={[
            styles.element,
            {
              zIndex: elements.length - index,
            },
          ]}
          key={index}>
          <Image
            style={[
              styles.elementImage,
              {
                width: width * 0.8,
                height: width * 0.6,
                top: y,
                left: x,
                transform: [{ rotate }],
              },
            ]}
            source={{ uri }}
          />
        </View>
      ))}
    </View>
  );
}

export const LandingScreen =()=>{
  const [slide, setSlide] = useState(0);

  const swiper:any = useRef();
  const scrollX = useRef(new Animated.Value(0)).current;

  const contentOpacityRanges:any = Array.from({ length: slides.length }).reduce(
    (acc:any, _, index) => {
      const screenWidth = index * width;
      const screenWidthMiddle = screenWidth + width / 2;

      acc.inputRange.push(screenWidth, screenWidthMiddle);
      // opacity 1 when screen is presented, 0.2 when screens are switching (mid point).
      acc.outputRange.push(1, 0.2);

      return acc;
    },
    {
      inputRange: [],
      outputRange: [],
    },
  );
  const contentOpacity = scrollX.interpolate(contentOpacityRanges);

  const animatedBackgroundLeft = scrollX.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [1, 0, -1],
  });

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={{
          left: animatedBackgroundLeft,
        }}>
        <Background />
      </Animated.View>
      <Swiper
        ref={swiper}
        showsPagination={false}
        loop={false}
        onIndexChanged={setSlide}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={1}>
        {slides.map(({ title, message, action }, index) => {
          return (
            <Animated.View
              style={[styles.slide, { opacity: contentOpacity }]}
              key={index}>
              <Text style={styles.slideTitle}>{title}</Text>
              <Text style={styles.slideText}>{message}</Text>

              <TouchableOpacity
                onPress={() => {
                  swiper.current.scrollTo(slide + 1, true);
                }}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>{action}</Text>
                </View>
              </TouchableOpacity>
            </Animated.View>
          );
        })}
      </Swiper>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  elements: {
    width: width * slides.length,
    height: 0.6 * height,
    position: 'absolute',
    top: 47,
    left: 0,
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  /** Element */
  element: {
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  elementImage: {
    borderRadius: 24,
  },
  /** Slide */
  slide: {
    flex: 1,
    backgroundColor: 'transparent',
    position: 'relative',
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
  },
  slideTitle: {
    fontSize: 36,
    lineHeight: 40,
    fontWeight: '600',
    color: 'white',
    marginBottom: 12,
  },
  slideText: {
    fontSize: 14,
    fontWeight: '500',
    color: 'gray',
  },
  /** Button */
  button: {
    backgroundColor: '#261c37',
    padding: 18,
    borderRadius: 12,
    marginTop: 48,
    marginBottom: 36,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});