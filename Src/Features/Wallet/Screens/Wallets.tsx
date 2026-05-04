import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const WalletScreen = () => {
  const categories = ['All', 'Credit', 'Debit', 'Refund'];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Wallet</Text>
        <TouchableOpacity>
          <Icon name="settings" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* BALANCE CARD WITH GRADIENT LOOK */}
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Available Balance</Text>
          <View style={styles.balanceRow}>
            <Text style={styles.currencySymbol}>₹</Text>
            <Text style={styles.balanceValue}>12,450</Text>
            <Text style={styles.balanceDecimal}>.75</Text>
          </View>
          <Text style={styles.balanceChange}>+ ₹320.25 (2.45%)</Text>
          
          {/* SQUIGGLY LINE PLACEHOLDER */}
          <View style={styles.chartContainer}>
             <MaterialCommunityIcons name="chart-bell-curve-cumulative" size={80} color="#A855F7" style={styles.chartIcon} />
          </View>

          {/* ACTION BUTTONS INSIDE CARD AREA */}
          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.actionButton}>
              <View style={styles.btnCircle}>
                 <Icon name="add" size={20} color="white" />
              </View>
              <Text style={styles.actionButtonText}>Add Money</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
              <View style={[styles.btnCircle, { backgroundColor: '#2D3748' }]}>
                 <MaterialCommunityIcons name="arrow-up-right" size={20} color="white" />
              </View>
              <Text style={styles.actionButtonText}>Withdraw</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* CATEGORY TABS */}
        <View style={styles.tabContainer}>
          {categories.map((tab, index) => (
            <TouchableOpacity 
              key={tab} 
              style={[styles.tab, index === 0 && styles.activeTab]}
            >
              <Text style={[styles.tabText, index === 0 && styles.activeTabText]}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* TRANSACTIONS LIST */}
        <View style={styles.listSection}>
          <TransactionItem 
            icon="uber" 
            color="#E11D48" 
            title="Uber Ride" 
            date="Today, 10:30 AM" 
            amount="- ₹120.00" 
            isNegative 
          />
          <TransactionItem 
            icon="bolt" 
            color="#22C55E" 
            title="Recharge" 
            date="Today, 09:15 AM" 
            amount="+ ₹50.00" 
          />
          <TransactionItem 
            icon="amazon" 
            color="#F97316" 
            title="Amazon Pay" 
            date="Yesterday, 08:20 PM" 
            amount="- ₹320.00" 
            isNegative 
          />
           <TransactionItem 
            icon="wallet" 
            color="#3B82F6" 
            title="Cashback" 
            date="Yesterday, 06:45 PM" 
            amount="+ ₹60.00" 
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const TransactionItem = ({ icon, color, title, date, amount, isNegative }: any) => (
  <View style={styles.item}>
    <View style={[styles.iconBox, { backgroundColor: color + '20' }]}>
      <FontAwesome name={icon} size={18} color={color} />
    </View>
    <View style={styles.itemMeta}>
      <Text style={styles.itemName}>{title}</Text>
      <Text style={styles.itemDate}>{date}</Text>
    </View>
    <Text style={[styles.amountText, isNegative ? styles.negative : styles.positive]}>
      {amount}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#05070A' },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  headerTitle: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  balanceCard: { 
    backgroundColor: '#11103A', // Dark purple/blue gradient base
    margin: 16, 
    borderRadius: 28, 
    padding: 24,
    overflow: 'hidden'
  },
  balanceLabel: { color: '#A0AEC0', fontSize: 14, marginBottom: 8 },
  balanceRow: { flexDirection: 'row', alignItems: 'baseline' },
  currencySymbol: { color: 'white', fontSize: 24, marginRight: 4 },
  balanceValue: { color: 'white', fontSize: 38, fontWeight: 'bold' },
  balanceDecimal: { color: '#CBD5E0', fontSize: 22 },
  balanceChange: { color: '#4ADE80', marginTop: 8, fontSize: 14, fontWeight: '500' },
  chartContainer: { position: 'absolute', right: -10, top: 40, opacity: 0.5 },
  chartIcon: { transform: [{ rotate: '-10deg' }] },
  actionRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 30 
  },
  actionButton: { 
    flexDirection: 'row', 
    backgroundColor: 'rgba(255,255,255,0.08)', 
    paddingVertical: 12, 
    paddingHorizontal: 16,
    borderRadius: 18, 
    width: '48%', 
    alignItems: 'center' 
  },
  btnCircle: { 
    width: 32, 
    height: 32, 
    borderRadius: 16, 
    backgroundColor: '#6366F1', 
    justifyContent: 'center', 
    alignItems: 'center',
    marginRight: 10 
  },
  actionButtonText: { color: 'white', fontWeight: 'bold', fontSize: 13 },
  tabContainer: { 
    flexDirection: 'row', 
    paddingHorizontal: 16, 
    marginVertical: 20,
    justifyContent: 'space-between'
  },
  tab: { 
    paddingVertical: 8, 
    paddingHorizontal: 20, 
    borderRadius: 12 
  },
  activeTab: { backgroundColor: '#4F46E5' },
  tabText: { color: '#718096', fontWeight: '600' },
  activeTabText: { color: 'white' },
  listSection: { paddingHorizontal: 20 },
  item: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 20,
    backgroundColor: '#0D1117',
    padding: 12,
    borderRadius: 20
  },
  iconBox: { 
    width: 45, 
    height: 45, 
    borderRadius: 15, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  itemMeta: { flex: 1, marginLeft: 15 },
  itemName: { color: 'white', fontSize: 15, fontWeight: 'bold' },
  itemDate: { color: '#718096', fontSize: 12, marginTop: 4 },
  amountText: { fontSize: 15, fontWeight: 'bold' },
  positive: { color: '#22C55E' },
  negative: { color: '#FFFFFF' },
});

export default WalletScreen;