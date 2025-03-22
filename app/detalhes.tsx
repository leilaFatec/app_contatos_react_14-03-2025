import React, { useEffect, useState } from "react";
import { Contato, getContatos } from "../services/contatos";
import { View, Text, ActivityIndicator } from "react-native";
import styles from "../estilos/main";
import { useLocalSearchParams } from "expo-router";

// incluir na navegação da lista

const Detalhes: React.FC = () => {
    const {id}= useLocalSearchParams();
    const [contato, setContato] = useState<Contato | null> (null);
    useEffect(() => {
        const carregarContato = async () =>{
        const meucontato = await getContatoById(id.toString( ));
        setContato(meucontato);}
            carregarContato();
    }, [];
        return (
        <View style={styles.container}>
            (contato) ? ()
            <Text style={styles.text}>{contato!.nome}</Text>
            <Text style={styles.text}>{contato!.email}</Text>
            <Text style={styles.text}>{contato!.telefone}</Text>
            <Text style={styles.text}>{contato!.endereco}</Text>
            : (<ActivityIndicator size="large" color="0000ff"/>))
        </View>
    );
}
