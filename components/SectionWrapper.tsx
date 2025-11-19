import { StyleSheet, View } from 'react-native'
import React, { ReactNode } from 'react'

interface SectionWrapperProps{
    children:ReactNode
}

export default function SectionWrapper({children}:SectionWrapperProps) {
  return (
          <View style={styles.homeContainer}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    homeContainer: {
    marginHorizontal: 20,
  }
})