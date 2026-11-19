import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList, TouchableOpacity, Image, Button, Alert} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const datasource = [
    {
        title: 'Water',
        bgColor: '#B3E5FC',
        icon: 'water-drop',
        data: [
            { name: 'Squirtle', number: 7 },
            { name: 'Psyduck', number: 54 },
        ],
    },
    {
        title: 'Psychic',
        bgColor: '#E1BEE7',
        icon: 'psychology',
        data: [
            { name: 'Abra', number: 63 },
            { name: 'Mewtwo', number: 150 },
        ],
    },
    {
        title: 'Fire',
        bgColor: '#FFCCBC',
        icon: 'local-fire-department',
        data: [
            { name: 'Charmander', number: 4 },
            { name: 'Growlithe', number: 58 },
        ],
    },
    {
        title: 'Electric',
        bgColor: '#FFF59D',
        icon: 'bolt',
        data: [
            { name: 'Pikachu', number: 25 },
            { name: 'Voltorb', number: 100 },
        ],
    },
];

const renderItem = ({item}) => {
    return (
        <TouchableOpacity
            style={styles.foodRow}
            onPress={() => Alert.alert('Pokémon Selected', item.name)}
        >
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.name}</Text>

            <Image
                source={{
                    uri: `https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_${item.number}-2x.png`
                }}
                style={styles.foodImage}
            />
        </TouchableOpacity>
    );
};

export default function App() {
    return (
        <View style={{flex: 1, padding: 20}}>


            <View style={styles.titleContainer}>
                <MaterialIcons
                    name="catching-pokemon"
                    size={32}
                    color="#E53935"
                />
                <Text style={styles.appTitle}>Ian's Pokédex</Text>
            </View>

            <Button
                title="Add Pokémon"
                onPress={() => Alert.alert('Coming Soon!')}
            />
            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={({section}) => (
                    <View
                        style={[
                            styles.sectionHeader,
                            {backgroundColor: section.bgColor},
                        ]}
                    >
                        <MaterialIcons
                            name={section.icon}
                            size={24}
                            color="#333"
                        />
                        <Text style={styles.sectionTitle}>
                            {section.title}
                        </Text>
                    </View>
                )}
                keyExtractor={(item) => item.name}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',



    },

    pokemonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        marginVertical: 5,
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
    },

    pokemonImage: {
        width: 120,
        height: 165,
        resizeMode: 'contain',
    },

    appTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#E53935',
        marginBottom: 5,
    },

    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 20,
        gap: 10,
    },

    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 8,
        marginTop: 15,
        marginBottom: 5,
        gap: 8,
    },

    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
});
