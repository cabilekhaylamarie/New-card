
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function ProfileCard({ profile }) {
  return (
    <View style={styles.card}>
      <View
        style={[
          styles.avatar,
          { backgroundColor: profile.color || '#D5ECE8' },
        ]}
      >
        <Text style={styles.initials}>
          {profile.initials}
        </Text>
      </View>

      <View style={styles.details}>
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.role}>{profile.role}</Text>
        <Text style={styles.description}>
          {profile.description}
        </Text>
      </View>

      <View style={styles.badge}>
        <Text style={styles.badgeText}>PROFILE</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 17,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0ECEA',
    elevation: 2,
    shadowColor: '#173B4B',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  initials: {
    color: '#173B4B',
    fontSize: 17,
    fontWeight: '800',
  },
  details: {
    flex: 1,
    marginLeft: 13,
    marginRight: 5,
  },
  name: {
    color: '#173B4B',
    fontSize: 15,
    fontWeight: '800',
  },
  role: {
    color: '#27837C',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 4,
  },
  description: {
    color: '#718786',
    fontSize: 11,
    marginTop: 6,
    lineHeight: 16,
  },
  badge: {
    position: 'absolute',
    right: 12,
    top: 10,
    backgroundColor: '#E8F5F2',
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  badgeText: {
    color: '#27837C',
    fontSize: 8,
    fontWeight: '800',
  },
});
