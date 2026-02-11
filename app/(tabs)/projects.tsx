import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Instagram, Facebook, Github, Phone, Mail } from 'lucide-react-native';
import { Colors } from '../../constants/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const Projects = () => {
    const insets = useSafeAreaInsets();
    const projectList = [
        {
            title: 'Film2day',
            description: 'Film2Day is an ongoing movie streaming site focused on intuitive search and a clean user interface.',
            image: require('@/assets/images/film2day.png'),
        },
        {
            title: 'Threads',
            description: 'Threads is a mobile clothing e-commerce application developed as a pair school project, featuring both user and seller interfaces.',
            image: require('@/assets/images/threads.png'),
        },
        {
            title: 'HAPSAY360',
            description: 'An efficient online portal for document processing and scheduling, digitizing records to reduce in-person transactions.',
            image: require('@/assets/images/hapsay360.png'),
        },
    ];

    return (
        <ScrollView
            style={styles.scrollView}
            contentContainerStyle={[styles.container, { paddingTop: insets.top + 20, paddingBottom: 40 }]}
        >
            <Text style={styles.pageTitle}>Projects</Text>

            <View style={styles.projectsGrid}>
                {projectList.map((project, index) => (
                    <View key={index} style={styles.projectCard}>
                        <View style={styles.imageWrapper}>
                            <Image source={project.image} style={styles.projectImg} resizeMode="cover" />
                        </View>
                        <View style={styles.projectInfo}>
                            <Text style={styles.projectTitle}>{project.title}</Text>
                            <Text style={styles.projectDescription} numberOfLines={4}>
                                {project.description}
                            </Text>
                        </View>
                    </View>
                ))}
            </View>

            <View style={styles.footer}>
                <View style={styles.socials}>
                    <TouchableOpacity style={styles.socialIcon}>
                        <Instagram size={24} color={Colors.secondary} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialIcon}>
                        <Facebook size={24} color={Colors.secondary} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialIcon}>
                        <Github size={24} color={Colors.secondary} />
                    </TouchableOpacity>
                </View>

                <View style={styles.contactInfo}>
                    <View style={styles.contactItem}>
                        <Phone size={18} color={Colors.accent} />
                        <Text style={styles.contactText}>09654014148</Text>
                    </View>
                    <View style={styles.contactItem}>
                        <Mail size={18} color={Colors.accent} />
                        <Text style={styles.contactText}>gonzales.isabella1414@gmail.com</Text>
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
    pageTitle: {
        fontSize: 32,
        fontFamily: 'Outfit-ExtraBold',
        color: Colors.primary,
        textAlign: 'center',
        marginVertical: 30,
        textTransform: 'uppercase',
        letterSpacing: 2,
    },
    projectsGrid: {
        gap: 30,
    },
    projectCard: {
        backgroundColor: Colors.glassBg,
        borderWidth: 1,
        borderColor: Colors.glassBorder,
        borderRadius: 20,
        overflow: 'hidden',
        height: 480,
    },
    imageWrapper: {
        width: '100%',
        height: 240,
        borderBottomWidth: 1,
        borderBottomColor: Colors.glassBorder,
    },
    projectImg: {
        width: '100%',
        height: '100%',
    },
    projectInfo: {
        padding: 20,
        flex: 1,
    },
    projectTitle: {
        fontSize: 22,
        fontFamily: 'Outfit-SemiBold',
        color: Colors.accent,
        marginBottom: 10,
        textTransform: 'uppercase',
    },
    projectDescription: {
        fontSize: 16,
        color: Colors.secondary,
        fontFamily: 'Inter',
        lineHeight: 24,
    },
    footer: {
        marginTop: 60,
        paddingTop: 30,
        borderTopWidth: 1,
        borderTopColor: Colors.glassBorder,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 30,
    },
    socials: {
        flexDirection: 'row',
        gap: 30,
        justifyContent: 'center',
    },
    socialIcon: {
        padding: 5,
    },
    contactInfo: {
        alignItems: 'center',
        gap: 12,
    },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    contactText: {
        color: Colors.secondary,
        fontFamily: 'Inter',
        fontSize: 14,
    },
});

export default Projects;
