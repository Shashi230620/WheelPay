import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import storage from 'app-Common/Storage/Storage';
const WalletScreen = () => {
    const [WalletBalance,setWalletBalance]=useState<number>()
    const balance=storage.getNumber('Walletbalance')
   useEffect(()=>{
     setWalletBalance(balance)
   })
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.iconPlaceholder}><Text style={styles.whiteText}>←</Text></View>
        <Text style={styles.headerTitle}>Wallet</Text>
        <View style={styles.iconPlaceholder}><Text style={styles.whiteText}>⚙</Text></View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* BALANCE CARD */}
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Available Balance</Text>
          <View style={styles.balanceRow}>
            <Text style={styles.balanceValue}>₹{WalletBalance}</Text>
            <Text style={styles.balanceDecimal}>.75</Text>
          </View>
          <Text style={styles.balanceChange}>+ ₹320.25 (2.45%)</Text>
          <View style={styles.chartLine} />
        </View>

        {/* ACTION BUTTONS */}
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.btnIconText}>+</Text>
            <Text style={styles.actionButtonText}>Add Money</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.btnIconText}>↗</Text>
            <Text style={styles.actionButtonText}>Withdraw</Text>
          </TouchableOpacity>
        </View>

        {/* RECENT TRANSACTIONS */}
        <View style={styles.listSection}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
          
          {/* UBER RIDE */}
          <View style={styles.item}>
            <View style={[styles.iconBox, { backgroundColor: '#1E293B' }]}>
              <Text style={{color: '#F87171', fontWeight: 'bold'}}>U</Text>
            </View>
            <View style={styles.itemMeta}>
              <Text style={styles.itemName}>Uber Ride</Text>
              <Text style={styles.itemDate}>Today, 10:30 AM</Text>
            </View>
            <Text style={styles.whiteText}>- ₹120.00</Text>
          </View>

          {/* RECHARGE */}
          <View style={styles.item}>
            <View style={[styles.iconBox, { backgroundColor: '#1E293B' }]}>
              <Text style={{color: '#4ADE80', fontWeight: 'bold'}}>R</Text>
            </View>
            <View style={styles.itemMeta}>
              <Text style={styles.itemName}>Recharge</Text>
              <Text style={styles.itemDate}>Today, 09:15 AM</Text>
            </View>
            <Text style={styles.itemAmountPos}>+ ₹50.00</Text>
          </View>

          {/* AMAZON PAY */}
          <View style={styles.item}>
            <View style={[styles.iconBox, { backgroundColor: '#1E293B' }]}>
              <Text style={{color: '#FB923C', fontWeight: 'bold'}}>A</Text>
            </View>
            <View style={styles.itemMeta}>
              <Text style={styles.itemName}>Amazon Pay</Text>
              <Text style={styles.itemDate}>Yesterday, 08:20 PM</Text>
            </View>
            <Text style={styles.whiteText}>- ₹320.00</Text>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#070A11' },
  whiteText: { color: 'white', fontWeight: 'bold' },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: 20 
  },
  headerTitle: { color: 'white', fontSize: 18, fontWeight: '700' },
  iconPlaceholder: { width: 40, height: 40, justifyContent: 'center', alignItems: 'center' },
  balanceCard: { 
    backgroundColor: '#111827', 
    margin: 20, 
    borderRadius: 24, 
    padding: 24, 
    borderWidth: 1, 
    borderColor: '#1F2937' 
  },
  balanceLabel: { color: '#9CA3AF', fontSize: 14 },
  balanceRow: { flexDirection: 'row', alignItems: 'baseline', marginTop: 8 },
  balanceValue: { color: 'white', fontSize: 36, fontWeight: 'bold' },
  balanceDecimal: { color: '#6B7280', fontSize: 22 },
  balanceChange: { color: '#4ADE80', marginTop: 4, fontSize: 13, fontWeight: '600' },
  chartLine: { height: 2, backgroundColor: '#A855F7', marginTop: 20, opacity: 0.2 },
  actionRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingHorizontal: 20 
  },
  actionButton: { 
    flexDirection: 'row', 
    backgroundColor: '#1F2937', 
    paddingVertical: 14, 
    borderRadius: 16, 
    width: '48%', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  btnIconText: { color: 'white', fontSize: 20, marginRight: 8 },
  actionButtonText: { color: 'white', fontWeight: '600' },
  listSection: { padding: 20, marginTop: 10 },
  sectionTitle: { color: 'white', fontSize: 16, fontWeight: '700', marginBottom: 20 },
  item: { flexDirection: 'row', alignItems: 'center', marginBottom: 24 },
  iconBox: { 
    width: 48, 
    height: 48, 
    borderRadius: 14, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  itemMeta: { flex: 1, marginLeft: 16 },
  itemName: { color: 'white', fontSize: 16, fontWeight: '600' },
  itemDate: { color: '#6B7280', fontSize: 12, marginTop: 4 },
  itemAmountPos: { color: '#4ADE80', fontSize: 16, fontWeight: '700' },
});

export default WalletScreen;