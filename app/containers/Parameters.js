import React, { Component } from 'react';

import { Tab, Tabs } from 'react-toolbox/lib/tabs';

import Settings from '../components/Settings';

export default class ParameterList extends Component {
  state = { index: 0 };

  _onChange = (index) => {
    this.setState({ index });
  };

  render() {
    return (
      <Tabs index={this.state.index} onChange={this._onChange}>
        <Tab label="General">
          <Settings.Time/>
          <Settings.TotalTrip/>
          <Settings.WPDistance/>
        </Tab>
        <Tab label="Power system">
          <Settings.BatteryVoltage/>
          <Settings.BatteryCurrent/>
          <Settings.BatteryConsumed/>
          <Settings.BatteryRemaining/>
        </Tab>
        <Tab label="Orientation">
          <Settings.AbsoluteAltitude/>
          <Settings.RelativeAltitude/>
          <Settings.HomeDistance/>
          <Settings.SpeedAir/>
          <Settings.SpeedGround/>
        </Tab>
        <Tab label="Flight controller">
          <Settings.ArmState/>
          <Settings.FlightMode/>
        </Tab>
      </Tabs>
    );
  }
}

// 'Alarm_Font_Size'
// 'Alarm_GPS_Status_Enable'
// 'Alarm_H_Alignment'
// 'Alarm_H_Position'
// 'Alarm_Low_Batt_Enable'
// 'Alarm_Low_Batt'
// 'Alarm_Over_Alt_Enable'
// 'Alarm_Over_Alt'
// 'Alarm_Over_Speed_Enable'
// 'Alarm_Over_Speed'
// 'Alarm_Under_Alt_Enable'
// 'Alarm_Under_Alt'
// 'Alarm_Under_Speed_Enable'
// 'Alarm_Under_Speed'
// 'Alarm_V_Position'
// 'Altitude_Scale_Align'
// 'Altitude_Scale_Enable'
// 'Altitude_Scale_H_Position'
// 'Altitude_Scale_Panel'
// 'Altitude_Scale_Source'
// 'Altitude_Scale_Type'
// 'Altitude_Scale_V_Position'
// 'Attitude_3D_Enable'
// 'Attitude_3D_H_Position'
// 'Attitude_3D_Map_radius'
// 'Attitude_3D_Panel'
// 'Attitude_3D_Scale_Frac'
// 'Attitude_3D_Scale_Real'
// 'Attitude_3D_V_Position'
// 'Attitude_MP_Enable'
// 'Attitude_MP_H_Position'
// 'Attitude_MP_Mode'
// 'Attitude_MP_Panel'
// 'Attitude_MP_Scale_Frac'
// 'Attitude_MP_Scale_Real'
// 'Attitude_MP_V_Position'
// 'CHWDIR_Nmode_Enable'
// 'CHWDIR_Nmode_H_Position'
// 'CHWDIR_Nmode_Home_Radius'
// 'CHWDIR_Nmode_Panel'
// 'CHWDIR_Nmode_Radius'
// 'CHWDIR_Nmode_V_Position'
// 'CHWDIR_Nmode_WP_Radius'
// 'CHWDIR_Tmode_Enable'
// 'CHWDIR_Tmode_Panel'
// 'CHWDIR_Tmode_V_Position'
// 'ClimbRate_Enable'
// 'ClimbRate_Font_Size'
// 'ClimbRate_H_Position'
// 'ClimbRate_Panel'
// 'ClimbRate_V_Position'
// 'FC_Type'
// 'GPS2HDOP_Enable'
// 'GPS2HDOP_Font_Size'
// 'GPS2HDOP_H_Alignment'
// 'GPS2HDOP_H_Position'
// 'GPS2HDOP_Panel'
// 'GPS2HDOP_V_Position'
// 'GPS2Latitude_Enable'
// 'GPS2Latitude_Font_Size'
// 'GPS2Latitude_H_Alignment'
// 'GPS2Latitude_H_Position'
// 'GPS2Latitude_Panel'
// 'GPS2Latitude_V_Position'
// 'GPS2Longitude_Enable'
// 'GPS2Longitude_Font_Size'
// 'GPS2Longitude_H_Alignment'
// 'GPS2Longitude_H_Position'
// 'GPS2Longitude_Panel'
// 'GPS2Longitude_V_Position'
// 'GPS2Status_Enable'
// 'GPS2Status_Font_Size'
// 'GPS2Status_H_Alignment'
// 'GPS2Status_H_Position'
// 'GPS2Status_Panel'
// 'GPS2Status_V_Position'
// 'GPSHDOP_Enable'
// 'GPSHDOP_Font_Size'
// 'GPSHDOP_H_Alignment'
// 'GPSHDOP_H_Position'
// 'GPSHDOP_Panel'
// 'GPSHDOP_V_Position'
// 'GPSLatitude_Enable'
// 'GPSLatitude_Font_Size'
// 'GPSLatitude_H_Alignment'
// 'GPSLatitude_H_Position'
// 'GPSLatitude_Panel'
// 'GPSLatitude_V_Position'
// 'GPSLongitude_Enable'
// 'GPSLongitude_Font_Size'
// 'GPSLongitude_H_Alignment'
// 'GPSLongitude_H_Position'
// 'GPSLongitude_Panel'
// 'GPSLongitude_V_Position'
// 'GPSStatus_Enable'
// 'GPSStatus_Font_Size'
// 'GPSStatus_H_Alignment'
// 'GPSStatus_H_Position'
// 'GPSStatus_Panel'
// 'GPSStatus_V_Position'
// 'Map_Enable'
// 'Map_Font_Size'
// 'Map_H_Alignment'
// 'Map_Panel'
// 'Map_Radius'
// 'Map_V_Alignment'
// 'Misc_Firmware_ver'
// 'Misc_Max_Panels'
// 'Misc_Start_Col_Sign'
// 'Misc_Start_Col'
// 'Misc_Start_Row'
// 'Misc_Units_Mode'
// 'Misc_USART_BandRate'
// 'Misc_Video_Mode'
// 'PWM_Panel_Chanel'
// 'PWM_Panel_Enable'
// 'PWM_Panel_Value'
// 'PWM_Video_Chanel'
// 'PWM_Video_Enable'
// 'PWM_Video_Value'
// 'RSSI_Enable'
// 'RSSI_Font_Size'
// 'RSSI_H_Alignment'
// 'RSSI_H_Position'
// 'RSSI_Max'
// 'RSSI_Min'
// 'RSSI_Panel'
// 'RSSI_Raw_Enable'
// 'RSSI_Type'
// 'RSSI_V_Position'
// 'Speed_Scale_Align'
// 'Speed_Scale_Enable'
// 'Speed_Scale_H_Position'
// 'Speed_Scale_Panel'
// 'Speed_Scale_Source'
// 'Speed_Scale_Type'
// 'Speed_Scale_V_Position'
// 'Throttle_Scale_Enable'
// 'Throttle_Scale_Type'
// 'Throttle_Enable'
// 'Throttle_H_Position'
// 'Throttle_Panel'
// 'Throttle_V_Position'
// 'Time_Type'
// 'Wind_Enable'
// 'Wind_H_Position'
// 'Wind_Panel'
// 'Wind_V_Position'
