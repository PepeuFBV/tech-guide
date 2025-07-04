import PageIndex from '@/components/core/page-index/page-index'
import PathDisplay from '@/components/core/path-display'
import { Divider } from '@/components/ui/divider'
import { Topic } from '@/types/topic'
import React from 'react'

const topics: Topic[] = [
    { title: 'APIs do Expo', href: 'title' },
    { title: 'O que são as APIs do Expo?', href: 'what-are-expo-apis' },
    { title: 'Exemplo 1: Câmera', href: 'example-camera' },
    { title: 'Exemplo 2: Localização', href: 'example-location' },
    { title: 'Exemplo 3: Armazenamento Local', href: 'example-storage' },
]

export default function ExpoApis() {
    const cameraCode = `
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

export default function CameraComponent() {
  const [hasPermission, setHasPermission] = useState(null);

  // Pede permissão para usar a câmera quando o componente é montado
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />; // Retorna uma view vazia enquanto aguarda a permissão
  }
  if (hasPermission === false) {
    return <Text>Sem acesso à câmera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={Camera.Constants.Type.back} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
});
    `;

    const locationCode = `
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export default function LocationComponent() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const getLocation = async () => {
    // Pede permissão para acessar a localização
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permissão para acessar a localização foi negada');
      return;
    }

    // Obtém as coordenadas
    let currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation);
  };

  return (
    <View style={styles.container}>
      <Button title="Obter Minha Localização" onPress={getLocation} />
      {location && (
        <Text style={styles.text}>
          Latitude: {location.coords.latitude}, Longitude: {location.coords.longitude}
        </Text>
      )}
      {errorMsg && <Text style={styles.text}>{errorMsg}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { marginTop: 10, textAlign: 'center' }
});
    `;

    const secureStoreCode = `
import React from 'react';
import { View, Button, Alert } from 'react-native';
import * as SecureStore from 'expo-secure-store';

async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
  Alert.alert('Sucesso', 'Dado salvo com segurança!');
}

async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    Alert.alert('Dado recuperado!', \`O valor é: \${result}\`);
  } else {
    Alert.alert('Nada encontrado', 'Nenhum valor armazenado para essa chave.');
  }
}

export default function SecureStorageComponent() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title="Salvar Token Secreto"
        onPress={() => save('authToken', 'meu-token-super-secreto-123')}
      />
      <View style={{margin: 10}} />
      <Button
        title="Ler Token Secreto"
        onPress={() => getValueFor('authToken')}
      />
    </View>
  );
}
    `;

    return (
        <div className='w-full h-full flex items-start justify-start md:space-x-10'>
            <div className='w-full md:w-[75%] lg:w-[80%] mt-5 md:mt-0 flex flex-col justify-center gap-4 px-3 md:px-10'>
                <PathDisplay />
                <section id='title' className='flex flex-col gap-4'>
                    <h1 className='text-4xl'>APIs do Expo: Interagindo com o Dispositivo</h1>
                    <p className='text-secondary'>Um aplicativo é muito mais do que apenas uma interface bonita; ele vive em um dispositivo com dezenas de sensores e recursos. Acessar esses recursos nativos é o que torna um aplicativo verdadeiramente poderoso. Aqui entra o grande superpoder do Expo.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='what-are-expo-apis' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>O que são as APIs do Expo?</h2>
                    <p className='text-secondary'>O ecossistema Expo nos fornece um vasto conjunto de bibliotecas (APIs) que servem como uma "ponte" em JavaScript para os recursos nativos do celular. Com elas, podemos pedir permissão para usar a câmera ou obter a localização do usuário, tudo isso sem sair do nosso código JavaScript.</p>
                    <p className='text-secondary'>Para usar uma API do Expo, o processo é sempre o mesmo:</p>
                    <ol className='list-decimal list-inside space-y-2 my-2 text-secondary'>
                        <li>Instale a biblioteca desejada usando <code>npx expo install</code>.</li>
                        <li>Importe as funções necessárias no seu componente.</li>
                        <li>Peça a permissão do usuário para usar o recurso (um passo crucial no mobile).</li>
                        <li>Use as funções da biblioteca.</li>
                    </ol>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='example-camera' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Exemplo 1: Usando a Câmera (`expo-camera`)</h2>
                    <p className='text-secondary'>Vamos criar um componente que pede permissão e exibe a visualização da câmera do celular.</p>
                    <p className='text-secondary'><strong>1. Instalação:</strong></p>
                    <pre className='bg-gray-800 text-white p-4 rounded-md my-2 overflow-x-auto'><code>npx expo install expo-camera</code></pre>
                    <p className='text-secondary'><strong>2. Código:</strong></p>
                    <pre className='bg-gray-800 text-white p-4 rounded-md my-2 overflow-x-auto'><code>{cameraCode}</code></pre>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='example-location' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Exemplo 2: Acessando a Localização (`expo-location`)</h2>
                    <p className='text-secondary'>Agora, um exemplo que pede permissão e obtém as coordenadas geográficas atuais do usuário.</p>
                    <p className='text-secondary'><strong>1. Instalação:</strong></p>
                    <pre className='bg-gray-800 text-white p-4 rounded-md my-2 overflow-x-auto'><code>npx expo install expo-location</code></pre>
                    <p className='text-secondary'><strong>2. Código:</strong></p>
                    <pre className='bg-gray-800 text-white p-4 rounded-md my-2 overflow-x-auto'><code>{locationCode}</code></pre>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='example-storage' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Exemplo 3: Armazenamento Local (`expo-secure-store`)</h2>
                    <p className='text-secondary'>Quando precisamos salvar informações sensíveis no dispositivo (como tokens de autenticação), não podemos simplesmente usar algo como o <code>localStorage</code> da web. O <code>expo-secure-store</code> salva dados de forma criptografada no dispositivo.</p>
                    <p className='text-secondary'><strong>1. Instalação:</strong></p>
                    <pre className='bg-gray-800 text-white p-4 rounded-md my-2 overflow-x-auto'><code>npx expo install expo-secure-store</code></pre>
                    <p className='text-secondary'><strong>2. Código:</strong></p>
                    <pre className='bg-gray-800 text-white p-4 rounded-md my-2 overflow-x-auto'><code>{secureStoreCode}</code></pre>
                </section>
            </div>
            <PageIndex topics={topics} className='w-[20%] lg:w-[15%]' />
        </div>
    )
}
