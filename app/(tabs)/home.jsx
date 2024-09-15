import { View, Text, TextInput, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import { Image } from 'react-native'
import { SearchInput, Trending } from '../../components'


const Home = () => {
    const data = [
        {
            id: 1,
            firstName: "Magdum",
            lastName: "Pirjade",
            age: 18,
        },
        {
            id: 2,
            firstName: "Tausif",
            lastName: "Pirjade",
            age: 22,
        }, {
            id: 3,
            firstName: "John",
            lastName: "Doe",
            age: 22,
        },
    ]

    return (
        <SafeAreaView className="bg-primary">
            <FlatList className="grid grid-cols-3 gap-3" data={data} keyExtractor={(item) => item.id} renderItem={({ item }) => (<Text className="text-white" >{item.firstName}</Text>)}
                ListHeaderComponent={() => (
                    <View className="my-6 px-4 space-y-6">

                        <View className="justify-between items-start flex-row mb-6">
                            <View>
                                <Text className="font-pmedium text-sm text-gray-100">Welcome Back</Text>
                                <Text className="text-2xl font-psemibold  text-gray-100">Welcome Back</Text>

                            </View>
                            <View className="mt-1.5">
                                <Image
                                    className="w-9 h-10"
                                    resizeMode='contain'
                                    source={images.logoSmall}

                                />
                            </View>
                        </View>
                        <SearchInput />
                        <View className="w-full flex-1 pt-5 pb-8 ">
                            <Text className="text-gray-100 text-lg font-pregular mb-3">Latest Videos</Text>
                            <Trending />

                        </View>
                    </View>)}

            />
        </SafeAreaView>
    )
}

export default Home