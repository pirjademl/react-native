import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'

export const SearchInput = ({ title, value, placeholder, handleChangeText, otherStyles, ...props

}) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <View className=' border-2 border-black-500 rounded-2xl h-16 px-4 bg-black-100 w-full focus:border-secondary items-center flex-row space-x-4'>
            <TextInput className="text-base mt-0.5 flex-1 text-white font-pregular" value={value} placeholder="search for a video topic" placeholderTextColor="#7b7b8b" onChangeText={handleChangeText} secureTextEntry={title === "Password" && !showPassword} />

            <TouchableOpacity>
                <Image source={icons.search} className="w-5 h-5" resizeMode='contain' />
            </TouchableOpacity>

        </View>
    )
}