import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-native-fontawesome'
import { faHome, faCog, faCat, faComment, faDiceD20, faCloudSun } from '@fortawesome/free-solid-svg-icons'

export default function App() {

  const [catImage, setCatImage] = useState('https://purr.objects-us-east-1.dream.io/i/tumblr_lnhcqaw1ha1ql93lco1_500.jpg');
  const [loadingImage, setLoadingImage] = useState(false);

  const randomCat = () => {
    if (loadingImage)
      return;

    fetch('http://aws.random.cat/meow')
      .then(res => res.json())
      .then(data => {
        setCatImage(data.file);
        setLoadingImage(false)
      });
  }
  // <script src="https://kit.fontawesome.com/67e0dc7e09.js" crossorigin="anonymous"></script>
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Pressable>
          <Icon
            icon={faHome}
            color={'white'}
            size={32}
          />
        </Pressable>
        <Pressable>
          <Icon
            icon={faCog}
            color={'white'}
            size={32}
          />
        </Pressable>
        <Pressable onPress={() => {
          setLoadingImage(true);
          randomCat();
        }}>
          <Icon
            icon={faCat}
            color={'white'}
            size={32}
          />
        </Pressable>
      </View>
      <View style={styles.root}>
        <View style={styles.sidebar}>
          <Icon
            icon={faComment}
            color={'white'}
            size={32}
          />
          <Icon
            icon={faDiceD20}
            color={'white'}
            size={32}
          />
          <Icon
            icon={faCloudSun}
            color={'white'}
            size={32}
          />
        </View>
        <View style={styles.body}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Mise en page avec Flexbox</Text>
          <Image
            style={styles.stretch}
            source={{ uri: catImage }}
            style={styles.catImage}
          />
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#fcba03',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  root: {
    flex: 12,
    flexDirection: 'row'
  },
  sidebar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "space-around",
    backgroundColor: '#fcba03',
    borderColor: '#fcba03',
    borderTopWidth: 1,
    borderRightWidth: 2,
    borderBottomEndRadius: 5
  },
  body: {
    flex: 8,
    backgroundColor: "#f0f6ff",
    padding: 10,
    alignItems: 'center'
  },
  catImage: {
    width: 300, 
    height: 250, 
    resizeMode: 'contain'
  }
});
