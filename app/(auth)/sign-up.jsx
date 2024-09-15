import { Alert } from 'react-native'
import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '../../constants/images'
import { Image } from 'react-native'
import { CustomButton, FormField } from '../../components'
import { Link, router } from 'expo-router'
import { icons } from '../../constants'
import { createUser } from '../../lib/appwrite'
import { useGlobalContext } from '../../context/GlobalProvider'
const SignUp = () => {


    const [form, setForm] = useState({ username: '', email: '', password: '' })
    const [isSubmitting, setSubmitting] = useState(false)

    //set User context


    const { setUser, setIsLogged } = useGlobalContext();


    const submit = async () => {
        if (form.username === "" || form.email === "" || form.password === "") {
            Alert.alert("Error", "Please fill in all fields");
        }

        setSubmitting(true);
        try {
            const result = await createUser(form.email, form.password, form.username);
            setUser(result)
            setIsLogged(true)
            router.replace("/home");
        } catch (error) {
            Alert.alert("Error", error.message);
        } finally {
            setSubmitting(false);
        }
    };
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
                <View className=" w-full justify-center  px-4 min-h-[85vh] my-6 ">
                    <Image resizeMode="contain" className="w-[150px] h-[35px]" source={images.logo} />
                    <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Signup To AORA
                    </Text>
                    <FormField
                        title="Username"
                        handleChangeText={(e) => setForm({ ...form, username: e })}
                        value={form.username}
                        otherStyles="mt-7"
                    />
                    <FormField
                        title="email"
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        value={form.email}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                    />
                    <FormField
                        title="Password"
                        value={form.password}
                        handleChangeText={(e) => setForm({ ...form, password: e })}
                        otherStyles="mt-7"
                    />

                    <CustomButton title="Sign up" handlePress={submit} containerStyles="mt-7" isLoading={isSubmitting} />
                    <View className="justify-center pt-5 flex-row gap-2 ">
                        <Text className="text-lg text-gray-100 font-pregular">Already have an account</Text>
                        <Link href="/sign-in" className='text-lg font-psemibold text-secondary'>sign in</Link>
                    </View>

                </View>



            </ScrollView>

        </SafeAreaView>
    )
}

export default SignUp;
