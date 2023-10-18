import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from '../screens/Home/Home'
import List from '../screens/list/List'

const drawer = createDrawerNavigator()

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator initialRouteName=''>
        <Drawer.Screen name='Home' component={Home}/>
        <Drawer.Screen name='Lista' component={List}/>
    </Drawer.Navigator>
  )
}
