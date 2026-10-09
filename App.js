
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';

import CustomButton from './src/components/CustomButton';
import ProfileCard from './src/components/ProfileCard';

const sampleProfiles = [
  {
    id: '1',
    name: 'Alyssa Mendoza',
    role: 'UI/UX Designer',
    description: 'Creative mind who loves good design.',
    initials: 'AM',
    color: '#D6E8FF',
  },
  {
    id: '2',
    name: 'Joshua Reyes',
    role: 'Mobile Developer',
    description: 'Building useful mobile experiences.',
    initials: 'JR',
    color: '#F9E2C9',
  },
  {
    id: '3',
    name: 'Bianca Santos',
    role: 'IT Student',
    description: 'Learning new technologies every day.',
    initials: 'BS',
    color: '#E8DDFB',
  },
  {
    id: '4',
    name: 'Nathan Cruz',
    role: 'Web Developer',
    description: 'Turning ideas into working websites.',
    initials: 'NC',
    color: '#D8F1DD',
  },
];

export default function App() {
  const [profiles, setProfiles] = useState(
    sampleProfiles.slice(0, 2)
  );

  const addProfile = () => {
    if (profiles.length >= sampleProfiles.length) {
      return;
    }

    const nextProfile = sampleProfiles[profiles.length];

    setProfiles((currentProfiles) => [
      ...currentProfiles,
      nextProfile,
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F2F7F7"
      />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.eyebrow}>
              PEOPLE DIRECTORY
            </Text>
            <Text style={styles.title}>My Profiles</Text>
          </View>

          <View style={styles.logo}>
            <Text style={styles.logoText}>PC</Text>
          </View>
        </View>

        <Text style={styles.subtitle}>
          Discover the people in your circle.
        </Text>

        <View style={styles.summary}>
          <Text style={styles.summaryLabel}>
            TOTAL PROFILES
          </Text>
          <Text style={styles.summaryCount}>
            {profiles.length} / {sampleProfiles.length}
          </Text>
          <Text style={styles.summaryCaption}>
            Profiles in your directory
          </Text>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Profile Directory
          </Text>
          <Text style={styles.count}>
            {profiles.length} members
          </Text>
        </View>

        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
          />
        ))}

        <CustomButton
          title={
            profiles.length >= sampleProfiles.length
              ? 'All Profiles Added'
              : 'Add New Profile'
          }
          onPress={addProfile}
        />

        <Text style={styles.footer}>
          REACT NATIVE • PROFILE CARD ACTIVITY
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F7F7',
  },
  content: {
    padding: 22,
    paddingTop: 30,
    paddingBottom: 35,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  eyebrow: {
    color: '#43847D',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 7,
  },
  title: {
    color: '#173B4B',
    fontSize: 29,
    fontWeight: '800',
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#D5ECE8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: '#176D69',
    fontSize: 16,
    fontWeight: '900',
  },
  subtitle: {
    color: '#7A9090',
    fontSize: 13,
    marginTop: 8,
    marginBottom: 23,
  },
  summary: {
    backgroundColor: '#176D69',
    padding: 20,
    borderRadius: 20,
    marginBottom: 27,
  },
  summaryLabel: {
    color: '#C6E7E2',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
  summaryCount: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: '900',
    marginTop: 8,
  },
  summaryCaption: {
    color: '#D5EDE9',
    fontSize: 12,
    marginTop: 3,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    color: '#173B4B',
    fontSize: 18,
    fontWeight: '800',
  },
  count: {
    color: '#43847D',
    fontSize: 11,
  },
  footer: {
    textAlign: 'center',
    color: '#91A6A3',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1,
    marginTop: 25,
  },
});
