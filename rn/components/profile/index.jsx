import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {stylesheet} from './style';

const Profile = () => {
  const styles = stylesheet();

  return (
    <ScrollView style={styles.scroller}>
      <View style={styles.container}>
        <Image
          style={styles.profilePic}
          source={require('assets/images/sj.jpg')}
        />

        <TouchableOpacity>
          <Text style={styles.editBtn}>Edit Details</Text>
        </TouchableOpacity>

        <View style={styles.detailRow}>
          <Image
            style={styles.icon}
            source={require('assets/icons/avatar.png')}
          />
          <Text>Samarth Jain</Text>
        </View>

        <View style={styles.detailRow}>
          <Image
            style={styles.icon}
            source={require('assets/icons/phone.png')}
          />
          <Text>1234567890</Text>
        </View>

        <View style={styles.detailRow}>
          <Image
            style={styles.icon}
            source={require('assets/icons/mail.png')}
          />
          <Text>samarth@gmail.com</Text>
        </View>

        <View style={styles.detailRow}>
          <Image
            style={styles.icon}
            source={require('assets/icons/location.png')}
          />
          <Text>Bhopal, Madhya pradesh</Text>
        </View>

        <View style={styles.separator} />

        <View style={styles.moreOptionContainer}>
          <View style={styles.grid}>
            <Image
              style={styles.gridImg}
              source={require('assets/icons/payment.png')}
            />
            <Text style={styles.gridText}>Payment</Text>
          </View>

          <View style={styles.grid}>
            <Image
              style={styles.gridImg}
              source={require('assets/icons/deliver.png')}
            />
            <Text style={styles.gridText}>Delivery Meals</Text>
          </View>

          <View style={styles.grid}>
            <Image
              style={styles.gridImg}
              source={require('assets/icons/faq.png')}
            />
            <Text style={styles.gridText}>Faq</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
