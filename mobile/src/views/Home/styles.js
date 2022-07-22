import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    filter: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        height: 50,
        alignItems: 'center',
    },
    filterTextActived: {
        fontWeight: 'bold',
        fontSize: 18,   
        color: '#EE6B26',
    },
    filterTextInative:{
        color: '#20295f',
        fontSize: 18,
        fontWeight: 'bold',
        opacity: 0.5,
    },
});

export default styles;