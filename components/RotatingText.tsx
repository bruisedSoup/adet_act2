import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withRepeat,
    withTiming,
    Easing
} from 'react-native-reanimated';
import { Colors } from '../constants/theme';

const RotatingText = ({ text, size = 330 }: { text: string; size?: number }) => {
    const characters = text.split('');
    const degreeStep = 360 / characters.length;
    const rotation = useSharedValue(0);

    useEffect(() => {
        rotation.value = withRepeat(
            withTiming(360, {
                duration: 20000,
                easing: Easing.linear,
            }),
            -1,
            false
        );
    }, []);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: `${rotation.value}deg` }],
        };
    });

    const radius = size / 2;

    return (
        <View style={[styles.container, { width: size, height: size }]}>
            <Animated.View style={[styles.circle, animatedStyle]}>
                {characters.map((char: string, i: number) => (
                    <Text
                        key={i}
                        style={[
                            styles.char,
                            {
                                transform: [
                                    { rotate: `${i * degreeStep}deg` },
                                    { translateY: -radius + 20 },
                                ],
                            },
                        ]}
                    >
                        {char}
                    </Text>
                ))}
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 5,
    },
    circle: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    char: {
        position: 'absolute',
        color: Colors.primary,
        fontSize: 14,
        fontFamily: 'Outfit-SemiBold',
        textTransform: 'uppercase',
        letterSpacing: 2,
        textShadowColor: Colors.accentGlow,
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 10,
    },
});

export default RotatingText;
