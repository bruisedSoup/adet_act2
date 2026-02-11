import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../../constants/theme';
import RotatingText from '../../components/RotatingText';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const Home = () => {
  const insets = useSafeAreaInsets();
  const orbSize = width > 400 ? 330 : 250;
  const profileSize = orbSize - 30;

  return (
    <ScrollView
      contentContainerStyle={[styles.container, { paddingTop: insets.top + 20 }]}
      style={styles.scrollView}
    >
      <View style={styles.backgroundContainer}>
        <View style={[styles.glow, { top: '20%', left: '10%', backgroundColor: 'rgba(139, 92, 246, 0.15)' }]} />
        <View style={[styles.glow, { top: '60%', left: '70%', backgroundColor: 'rgba(59, 130, 246, 0.1)' }]} />
      </View>

      <View style={styles.heroSection}>
        <View style={[styles.centerOrb, { width: orbSize, height: orbSize }]}>
          <RotatingText text="Keep moving forward * " size={orbSize} />
          <View style={[styles.profileWrapper, { width: profileSize, height: profileSize }]}>
            <Image
              source={require('@/assets/images/logo.png')}
              style={styles.profileImg}
              resizeMode="cover"
            />
          </View>
        </View>

        <View style={styles.heroContent}>
          <Text style={styles.quoteText}>
            the stars lies the path {'\n'}
            <Text style={styles.dash}>----</Text> to your true potential
          </Text>

          <Text style={styles.heroDescription}>
            Guided by the stars, the path to your true potential is illuminated.
            Every step forward uncovers growth, learning, and endless possibilities.
            Let this reflect the journey and aspirations toward reaching new heights.
          </Text>
        </View>
      </View>

      <View style={styles.bigNameContainer}>
        <Text style={styles.bigName}>WAYV</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.bg,
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    minHeight: Dimensions.get('window').height - 100,
  },
  backgroundContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
  glow: {
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: 150,
    opacity: 0.5,
  },
  heroSection: {
    alignItems: 'center',
    gap: 40,
  },
  centerOrb: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileWrapper: {
    borderRadius: 1000,
    overflow: 'hidden',
    backgroundColor: Colors.bg,
  },
  profileImg: {
    width: '100%',
    height: '100%',
  },
  heroContent: {
    alignItems: 'center',
  },
  quoteText: {
    fontSize: width > 400 ? 32 : 24,
    fontFamily: 'Outfit-ExtraBold',
    color: Colors.primary,
    textAlign: 'center',
    lineHeight: width > 400 ? 40 : 32,
    textTransform: 'uppercase',
  },
  dash: {
    color: Colors.accent,
    opacity: 0.5,
  },
  heroDescription: {
    color: Colors.secondary,
    fontSize: 16,
    fontFamily: 'Inter',
    textAlign: 'center',
    marginTop: 20,
    maxWidth: 600,
    lineHeight: 24,
  },
  bigNameContainer: {
    position: 'absolute',
    bottom: 20,
    right: -20,
    opacity: 0.1,
    zIndex: -1,
  },
  bigName: {
    fontSize: 120,
    fontFamily: 'Outfit-ExtraBold',
    color: Colors.primary,
  },
});

export default Home;
