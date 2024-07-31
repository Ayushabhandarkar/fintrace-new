import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PieChart from 'react-native-pie-chart';

function PieChartComponent(stats: any) {
  const {data} = stats;
  const colors = ['#0D2535', '#5388D8', '#F4BE37', '#FF9F40'];
  return (
    <View style={styles.pieChartBox}>
      <View
        style={{
          alignItems: 'center',
          height: 30,
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white'}}>Transaction History</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
        }}>
        <View
          style={{
            height: '100%',
            padding: 10,
            width: '50%',
          }}>
          <PieChart widthAndHeight={150} series={data} sliceColor={colors} />
        </View>
        <View style={styles.pieChartMetric}>
          <View style={styles.pieChartDisplay}>
            <View
              style={[
                styles.pieChartSingleMetric,
                {backgroundColor: '#0D2535'},
              ]}
            />
            <Text
              style={{
                color: 'white',
                paddingHorizontal: 6,
              }}>
              Necessity
            </Text>
          </View>
          <View style={styles.pieChartDisplay}>
            <View
              style={[
                styles.pieChartSingleMetric,
                {backgroundColor: '#5388D8'},
              ]}
            />
            <Text
              style={{
                color: 'white',
                paddingHorizontal: 6,
              }}>
              Food
            </Text>
          </View>
          <View style={styles.pieChartDisplay}>
            <View
              style={[
                styles.pieChartSingleMetric,
                {backgroundColor: '#F4BE37'},
              ]}
            />
            <Text
              style={{
                color: 'white',
                paddingHorizontal: 6,
              }}>
              Travel
            </Text>
          </View>
          <View style={styles.pieChartDisplay}>
            <View
              style={[
                styles.pieChartSingleMetric,
                {backgroundColor: '#FF9F40'},
              ]}
            />
            <Text
              style={{
                color: 'white',
                paddingHorizontal: 6,
              }}>
              Entertainment
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pieChartBox: {
    height: 206,
    width: '90%',
    backgroundColor: '#429690',
    marginHorizontal: 'auto',
    marginTop: 40,
    borderRadius: 8,
  },
  pieChartMetric: {
    width: '50%',
    height: '100%',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  pieChartSingleMetric: {
    width: 20,
    height: 20,
    borderWidth: 1.3,
    borderColor: 'white',
    borderRadius: 3,
  },
  pieChartDisplay: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 5,
  },
});

export default PieChartComponent;
