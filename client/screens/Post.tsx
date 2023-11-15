import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext';
import FooterMenu from '../components/Menus/FooterMenu';
import { StyleSheet } from 'react-native';

const Post = () => {
    const [state, setState]: any = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <FooterMenu/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        justifyContent: "space-between",
        marginTop: 40,
    },
});

export default Post