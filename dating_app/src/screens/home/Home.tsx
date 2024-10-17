import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Use Ionicons or any other icon set from Expo
import Dashboard from '../dashboard/Dashboard';
import Settings from '../settings/Settings';
// import LogList from '../logList/LogList';
// import TimeClock from '../timeClock/TimeClock';
import { colors } from '@/src/constants/Colors';
import { ChatList } from '../chatList/ChatList';
import { Notification } from '../notification/Notification';

export const HomeScreen: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('Home');

  const renderContent = () => {
    switch (selectedTab) {
      case 'Home':
        return <Dashboard />;
      case 'Settings':
        return <Settings />;
      case 'ChatList':
        return <ChatList />;
      case 'Notification':
          return <Notification />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>{renderContent()}</View>

      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabButton} onPress={() => setSelectedTab('Home')}>
          <Ionicons
            name={selectedTab === 'Home' ? 'home' : 'home-outline'} // Use outline if not selected
            size={28}
            color={selectedTab === 'Home' ? colors.primary : '#888'}
          />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.tabButton} onPress={() => setSelectedTab('ChatList')}>
          <Ionicons
            name={selectedTab === 'ChatList' ? 'chatbubbles' : 'chatbubbles-outline'} // Use outline if not selected
            size={29}
            color={selectedTab === 'ChatList' ? colors.primary : '#888'}
          />

        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton} onPress={() => setSelectedTab('Notification')}>
          <Ionicons
            name={selectedTab === 'Notification' ? 'heart' : 'heart-outline'} // Use outline if not selected
            size={30}
            color={selectedTab === 'Notification' ? colors.primary : '#888'}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton} onPress={() => setSelectedTab('Settings')}>
          <Ionicons
            name={selectedTab === 'Settings' ? 'settings' : 'settings-outline'} // Use outline if not selected
            size={28}
            color={selectedTab === 'Settings' ? colors.primary : '#888'}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#f8f8f8',
  },
  contentContainer: {
    flex: 1,
 backgroundColor:"white"
  },
  componentContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: 'black',
    // borderTopWidth: 0.5,
    borderTopColor: '#ddd',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
  },
});
