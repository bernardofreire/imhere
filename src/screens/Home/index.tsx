import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'

// Trabalhar com lista pode usar ScrollView ou Flatlist
// ScrollView renderiza todos os componentes enquanto a Flatlist renderiza so o que cabe na tela, os demais itens nao renderiza

import { Participant } from '../../components/Participant'

import { styles } from './styles'

export function Home() {
    const participants = ["Bernardo", "Mari", "Diego", "Biro", "Ano", "Marinelson", "Galho", "Simba", "Wick", "Jack", "Café"]


    // Função para adicionar um participante a lista

    function handleParticipantAdd() {
        if (participants.includes("Bernardo")) {
            return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome")
        }
    }


    // Função para remover um participante da lsita

    function handleParticipantRemove(name: string) {
        Alert.alert("Remover", `Deseja remover o participante ${name} ?`, [
            {
                text: 'Sim',
                onPress: () => Alert.alert("Deletado")
            },
            {
                text: 'Não',
                style: 'cancel'
            },
        ])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do Evento
            </Text>

            <Text style={styles.eventDate}>
                Sexta, 19 de Novembro de 2024
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder='Nome do participante'
                    placeholderTextColor='#6B6B6B'
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Renderizar a lista de participantes com FlatList para poder usar scroll */}

            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguem chegou no evento ainda? Adicione participantes a sua lista de presença.
                    </Text>
                )}
            />



            {/* Usando ScrollView */}

            {/* Colocar aqui o codigo */}





            {/* Outra forma de renderizar componente */}

            {/* {
                participants.map(participant => (
                    <Participant
                        key={participant}
                        name={participant}
                        onRemove={() => handleParticipantRemove(participant)}
                    />
                ))
            } */}



        </View>

    )
}