import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import { Code2, Database } from 'lucide-react-native';
import { Colors } from '../../constants/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const AboutMe = () => {
    const insets = useSafeAreaInsets();
    const techStack = {
        frontend: ['JavaScript', 'TypeScript', 'React', 'React Native', 'Vite.js', 'Vue.js', 'TailwindCSS'],
        backend: ['Node.js', 'Python', 'Django', 'PHP', 'Laravel', 'PostgreSQL', 'MongoDB', 'Supabase']
    };

    return (
        <ScrollView
            style={styles.scrollView}
            contentContainerStyle={[styles.container, { paddingTop: insets.top + 20, paddingBottom: 40 }]}
        >
            <View style={styles.header}>
                <View style={styles.profileWrapper}>
                    <Image
                        source={require('@/assets/images/2x2.jpg')}
                        style={styles.profileImg}
                    />
                </View>
                <Text style={styles.title}>Hi! I am Isabella Gonzales.</Text>
            </View>

            <View style={styles.bioSection}>
                <Text style={styles.bioText}>
                    I am a 21-year-old Third Year Bachelor of Science in Information Technology Student at the University of Science and
                    Technology of Southern Philippines. Born on November 14, 2004.
                    Based in Zone 6 Cugman, Cagayan de Oro City,
                    I am an aspiring web and mobile developer with a strong
                    interest in building practical web and mobile applications.
                </Text>
                <Text style={styles.bioText}>
                    Through collaborative initiatives, and personal projects,
                    I am continuously refining my skills in web and mobile development to
                    build the future of technology.
                </Text>
            </View>

            <View style={styles.techStackSection}>
                <Text style={styles.sectionTitle}>Tech Stack</Text>

                <View style={styles.stackCategory}>
                    <View style={styles.categoryHeader}>
                        <Code2 size={24} color={Colors.accent} />
                        <Text style={styles.categoryTitle}>Frontend</Text>
                    </View>
                    <View style={styles.tags}>
                        {techStack.frontend.map(tech => (
                            <View key={tech} style={styles.tag}>
                                <Text style={styles.tagText}>{tech}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                <View style={[styles.stackCategory, { marginTop: 20 }]}>
                    <View style={styles.categoryHeader}>
                        <Database size={24} color={Colors.accent} />
                        <Text style={styles.categoryTitle}>Backend</Text>
                    </View>
                    <View style={styles.tags}>
                        {techStack.backend.map(tech => (
                            <View key={tech} style={styles.tag}>
                                <Text style={styles.tagText}>{tech}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.bg,
    },
    container: {
        paddingHorizontal: 20,
    },
    header: {
        alignItems: 'center',
        marginBottom: 40,
    },
    profileWrapper: {
        width: 180,
        height: 180,
        borderRadius: 90,
        overflow: 'hidden',
        borderWidth: 4,
        borderColor: Colors.accent,
        marginBottom: 20,
        elevation: 10,
        shadowColor: Colors.accentGlow,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 15,
    },
    profileImg: {
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 28,
        fontFamily: 'Outfit-ExtraBold',
        color: Colors.primary,
        textAlign: 'center',
        lineHeight: 36,
    },
    bioSection: {
        marginBottom: 40,
    },
    bioText: {
        fontSize: 16,
        color: Colors.secondary,
        fontFamily: 'Inter',
        lineHeight: 26,
        marginBottom: 15,
    },
    techStackSection: {
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontFamily: 'Outfit-SemiBold',
        color: Colors.primary,
        marginBottom: 20,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    stackCategory: {
        backgroundColor: Colors.glassBg,
        borderWidth: 1,
        borderColor: Colors.glassBorder,
        padding: 20,
        borderRadius: 20,
    },
    categoryHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 15,
    },
    categoryTitle: {
        fontSize: 18,
        fontFamily: 'Outfit-SemiBold',
        color: Colors.accent,
        textTransform: 'uppercase',
    },
    tags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    tag: {
        backgroundColor: 'rgba(168, 85, 247, 0.1)',
        borderWidth: 1,
        borderColor: 'rgba(168, 85, 247, 0.2)',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
    },
    tagText: {
        color: Colors.secondary,
        fontSize: 14,
        fontFamily: 'Inter',
    },
});

export default AboutMe;
