import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {stylesheet} from './style';

const Settings = () => {
  const styles = stylesheet();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.fullWidth}>
        <View style={styles.settingRow}>
          <Image
            style={styles.rowIcon}
            source={require('assets/icons/edit.png')}
          />
          <Text style={styles.rowText}>Edit profile</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.fullWidth}>
        <View style={styles.settingRow}>
          <Image
            style={styles.rowIcon}
            source={require('assets/icons/notification.png')}
          />
          <Text style={styles.rowText}>Notification</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.fullWidth}>
        <View style={styles.settingRow}>
          <Image
            style={styles.rowIcon}
            source={require('assets/icons/changePassword.png')}
          />
          <Text style={styles.rowText}>Change password</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.fullWidth}>
        <View style={styles.settingRow}>
          <Image
            style={styles.rowIcon}
            source={require('assets/icons/saved.png')}
          />
          <Text style={styles.rowText}>Saved meals</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.fullWidth}>
        <View style={styles.settingRow}>
          <Image
            style={styles.rowIcon}
            source={require('assets/icons/help.png')}
          />
          <Text style={styles.rowText}>Help & support</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.fullWidth}>
        <View style={styles.settingRow}>
          <Image
            style={styles.rowIcon}
            source={require('assets/icons/invite.png')}
          />
          <Text style={styles.rowText}>Invite Friends</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.fullWidth}>
        <View style={styles.settingRow}>
          <Image
            style={styles.rowIcon}
            source={require('assets/icons/feedback.png')}
          />
          <Text style={styles.rowText}>Feedback</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutBtn}>
        <Text style={styles.logoutBtnText}>Logout</Text>
      </TouchableOpacity>

      <Text>app version 0.0.1</Text>
    </View>
  );
};

export default Settings;
