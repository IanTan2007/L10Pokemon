import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList, TouchableOpacity, Image, Button, Alert} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const datasource = [
  {
    title: 'Japanese Cuisine',
    bgColor: '#FFE0B2',
    icon: 'restaurant',
    data: [
      {
        name: 'Tonkotsu Ramen',
        description: 'Rich pork broth with noodles',
        price: 14.90,
        image: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2024-03-tonkotsu-ramen%2Ftonkotsu-ramen-195',
      },
      {
        name: 'Takoyaki',
        description: 'Octopus balls with savoury sauce',
        price: 6.70,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqJ7dw90r6hBFpZxDc90ggaYs6ZY-ylPvInfk_w3VevXRiiEBQsFl1DZVbwnFRCYVIHStHcKFQH7X9cUHSDVSh_iElicob8AvYUoRZKg&s=10',
      },
    ],
  },
  {
    title: 'Italian Cuisine',
    bgColor: '#C8E6C9',
    icon: 'local-pizza',
    data: [
      {
        name: 'Spaghetti Bolognese',
        description: 'Spaghetti with rich beef and tomato sauce',
        price: 16.90,
        image: 'https://img.chefkoch-cdn.de/rezepte/393031127655461/bilder/1618353/crop-640x427/spaghetti-bolognese.jpg',
      },
      {
        name: 'Quattro Formaggi Pizza',
        description: 'Pizza topped with four delicious cheeses',
        price: 18.90,
        image: 'https://www.gustini.co.uk/blog/wp-content/uploads/2025/01/Pizza-Formaggio_RezeptVorschau.jpg',
      },
    ],
  },
];

const renderItem = ({item}) => {
  return (
      <TouchableOpacity
          style={styles.foodRow}
          onPress={() => Alert.alert('Added to cart!', item.name)}
      >
        <View style={styles.foodDetails}>
          <Text style={styles.foodName}>
            {item.name}
          </Text>

          <Text style={styles.foodDescription}>
            {item.description}
          </Text>

          <Text style={styles.foodPrice}>
            S${item.price.toFixed(2)}
          </Text>
        </View>

        <Image
            source={{uri: item.image}}
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
              name="restaurant-menu"
              size={32}
              color="#E53935"
          />
          <Text style={styles.appTitle}>Ian's Menu</Text>
        </View>

        <Button
            title="Add Food"
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

  foodRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
  },

  foodImage: {
    width: 115,
    height: 105,
    resizeMode: 'cover',
    borderRadius: 10,
    flexShrink: 0,
  },

  foodDetails: {
    width: '55%',
    flexShrink: 1,
    marginRight: 8,
  },

  foodName: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  foodDescription: {
    fontSize: 13,
    color: '#666',
    marginBottom: 10,
  },

  foodPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E53935',
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
