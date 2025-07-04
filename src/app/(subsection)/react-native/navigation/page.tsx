import PageIndex from '@/components/core/page-index/page-index'
import PathDisplay from '@/components/core/path-display'
import { Divider } from '@/components/ui/divider'
import { Topic } from '@/types/topic'
import React from 'react'

const topics: Topic[] = [
    { title: 'Navegação entre Telas', href: 'title' },
    { title: 'Instalação e Configuração', href: 'installation' },
    { title: 'Stack Navigator', href: 'stack-navigator' },
    { title: 'Tab Navigator', href: 'tab-navigator' },
    { title: 'Drawer Navigator', href: 'drawer-navigator' },
]

export default function Navigation() {
    const stackNavigatorCode = `
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela Inicial</Text>
      <Button
        title="Ir para Detalhes"
        onPress={() => navigation.navigate('Details')} // Navega para a tela 'Details'
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela de Detalhes</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Visão Geral' }} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
    `;

    const tabNavigatorCode = `
// ... (importações e telas de Home e Settings)
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons'; // Exemplo de uso de ícones

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
    `;

    return (
        <div className='w-full h-full flex items-start justify-start md:space-x-10'>
            <div className='w-full md:w-[75%] lg:w-[80%] mt-5 md:mt-0 flex flex-col justify-center gap-4 px-3 md:px-10'>
                <PathDisplay />
                <section id='title' className='flex flex-col gap-4'>
                    <h1 className='text-4xl'>Navegação entre Telas com React Navigation</h1>
                    <p className='text-secondary'>Até agora, construímos componentes e telas isoladas. Mas um aplicativo de verdade é um conjunto de telas conectadas. Diferente da web, onde temos a tag <code>&lt;a&gt;</code>, no mundo mobile precisamos de um sistema mais robusto para gerenciar essas transições, animações e o histórico de navegação. Para isso, usamos a biblioteca <strong>React Navigation</strong>.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='installation' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Instalação e Configuração</h2>
                    <p className='text-secondary'>A React Navigation não vem instalada por padrão. Precisamos adicioná-la e suas dependências ao nosso projeto. Em um projeto com Expo, o processo é bem simples:</p>
                    <p className='text-secondary'><strong>1. Instale a biblioteca principal:</strong></p>
                    <pre className='bg-gray-800 text-white p-4 rounded-md my-2 overflow-x-auto'><code>npm install @react-navigation/native</code></pre>
                    <p className='text-secondary'><strong>2. Instale as dependências nativas (usando <code>npx expo install</code> para garantir a versão correta):</strong></p>
                    <pre className='bg-gray-800 text-white p-4 rounded-md my-2 overflow-x-auto'><code>npx expo install react-native-screens react-native-safe-area-context</code></pre>
                    <p className='text-secondary'>Para que a navegação funcione, todo o nosso aplicativo precisa estar "envolvido" por um componente chamado <code>&lt;NavigationContainer&gt;</code>. Pense nele como o cérebro da navegação. Geralmente, você vai colocá-lo no seu arquivo <code>App.js</code>.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='stack-navigator' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Stack Navigator (Navegação em Pilha)</h2>
                    <p className='text-secondary'>Este é o tipo de navegação mais comum. Pense nele como uma pilha de cartas. Cada vez que você navega para uma nova tela, você "empurra" uma nova carta para cima da pilha. É ideal para fluxos como: <code>Lista</code> → <code>Detalhes</code>.</p>
                    <p className='text-secondary'><strong>Instale o navegador de Stack:</strong></p>
                    <pre className='bg-gray-800 text-white p-4 rounded-md my-2 overflow-x-auto'><code>npm install @react-navigation/native-stack</code></pre>
                    <p className='text-secondary'><strong>Exemplo de uso:</strong></p>
                    <pre className='bg-gray-800 text-white p-4 rounded-md my-2 overflow-x-auto'><code>{stackNavigatorCode}</code></pre>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='tab-navigator' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Tab Navigator (Navegação por Abas)</h2>
                    <p className='text-secondary'>É a famosa barra de abas que vemos na parte inferior de muitos aplicativos (como Instagram). É usada para a navegação principal do app, permitindo que o usuário alterne entre as seções mais importantes.</p>
                    <p className='text-secondary'><strong>Instale o navegador de Abas:</strong></p>
                    <pre className='bg-gray-800 text-white p-4 rounded-md my-2 overflow-x-auto'><code>npm install @react-navigation/bottom-tabs</code></pre>
                    <p className='text-secondary'><strong>Exemplo de uso:</strong></p>
                    <pre className='bg-gray-800 text-white p-4 rounded-md my-2 overflow-x-auto'><code>{tabNavigatorCode}</code></pre>
                </section>
                 <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='drawer-navigator' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Drawer Navigator (Navegação por Gaveta)</h2>
                    <p className='text-secondary'>É o menu lateral que desliza a partir da borda da tela. É uma boa alternativa às abas quando você tem muitas seções principais no seu aplicativo. A instalação e o uso são similares aos outros navegadores, e você pode encontrar mais detalhes na documentação oficial da React Navigation.</p>
                </section>
            </div>
            <PageIndex topics={topics} className='w-[20%] lg:w-[15%]' />
        </div>
    )
}
