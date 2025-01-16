import { Stack } from 'expo-router'
import { View } from 'react-native'
import React from 'react'

import { Container } from '~/components/Container';


export default function Home() {
    return (
        <>
            <Stack.Screen options={{ title: 'Tab Two' }} />
            <Container>
                <View className='bg-red-500 h-screen w-screen' />
            </Container>
        </>
    );
}
