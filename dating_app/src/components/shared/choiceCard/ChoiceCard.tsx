import { colors } from '@/src/constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, ImageBackground, Text, StyleSheet, Dimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;

const ChoiceCard = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const rotateZ = useSharedValue(0);

  const gesture = Gesture.Pan()
    .onUpdate((event:any) => {
      translateX.value = event.translationX;
      translateY.value = event.translationY;
      rotateZ.value = event.translationX / 20; // Controls rotation as card moves
    })
    .onEnd((event:any) => {
      if (Math.abs(translateX.value) > SWIPE_THRESHOLD) {
        // Animate card out if it's swiped past the threshold
        translateX.value = withSpring(event.translationX > 0 ? SCREEN_WIDTH : -SCREEN_WIDTH);
        translateY.value = withSpring(event.translationX > 0 ? SCREEN_WIDTH / 4 : -SCREEN_WIDTH / 4);
        rotateZ.value = withSpring(event.translationX > 0 ? 15 : -15);
      } else {
        // Reset position if swipe is below threshold
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
        rotateZ.value = withSpring(0);
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { rotateZ: `${rotateZ.value}deg` },
    ],
  }));

  return (
    <View style={styles.container}>
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.cardContainer, animatedStyle]}>
          <ImageBackground
            source={{ uri: 'https://imgs.search.brave.com/vhy6wLz0PYm45DIfaoBsg-ZMlGVDPixQZkid--hUxy4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9iZWF1dGlmdWwt/bW9kZWwtaXMtd29y/a2luZy1jb21wdXRl/cl8xMDEwNTcyLTIx/Nzg5LmpwZz9zaXpl/PTYyNiZleHQ9anBn' }} // Replace with your image URL or require a local image
            resizeMode="cover"
            style={styles.imageBackground}
            imageStyle={{ borderRadius: 20 }} // Adding border radius to the image
          >
            <LinearGradient
              colors={['rgba(0, 0, 0, 0.7)', 'transparent', 'transparent', 'rgba(0, 0, 0, 0.7)']}
              style={styles.gradient}
            />
            <View>
              <Text style={styles.text}>
                Elma Chapman
                <Ionicons name="female" size={24} color="#ff4d4d" />
              </Text>
              <Text style={styles.text2}>20 years . B.Tech cse</Text>
              <Text style={styles.text3}>Sister Nivedita University</Text>
            </View>
          </ImageBackground>
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    width: '100%',
    marginTop: 50,
  },
  cardContainer: {
    width: '100%',
  },
  imageBackground: {
    height: 490,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 55,
    justifyContent: "flex-end",
    paddingBottom: 30,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 20,
  },
  text: {
    color: colors.white, // Adjust color as needed
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 5,
  },
  text2: {
    color: "#a6a6a6", // Adjust color as needed
    fontSize: 18,
    fontWeight: '400',
    marginLeft: 20,
    marginBottom: 2,
  },
  text3: {
    color: "#a6a6a6", // Adjust color as needed
    fontSize: 15,
    fontWeight: '400',
    marginLeft: 20,
  },
});

export default ChoiceCard;
