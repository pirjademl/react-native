import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

export const CustomButton = ({ title, containerStyles, text, textStyles, handlePress, isLoading }) => {
    return (
        <TouchableOpacity disabled={isLoading} onPress={handlePress} className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}>
            <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>{title}</Text>
        </TouchableOpacity >
    )
}
