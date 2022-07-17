import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 110,
        backgroundColor: '#20295F',
        borderBottomWidth: 5,
        borderBottomColor: '#EE6B26',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingVertical: 10,
        },
    logo: {
        width: 100,
        height: 40
    },
    notification: {
        position: 'absolute',
        right: 23
    },
    notificationImage: {
        width: 21,
        height: 25
    },
    circle: {
        width: 20,
        backgroundColor: '#FFF',
        borderRadius: 50,
        alignItems: 'center',
        position: 'relative',
        left: 12,
        bottom: 35
    },
    leftIcon: {
        position: 'absolute',
        left: 20,
        bottom: 2
    },
    leftIconImage: {
        width: 70,
        height: 70
    }
});

export default styles;