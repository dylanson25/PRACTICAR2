import { StyleSheet } from 'react-native'
import color from './colors'

const mainStyles = StyleSheet.create({
    btnMain: {
        width: 280,
        marginTop:20,
        marginBottom: 20,
        backgroundColor: color.BLUE,
        borderRadius: 60
    },

    btnTransparent: {
        backgroundColor: 'rgba(52, 52, 52, 0)',
        borderColor: color.BLUE,
        width: 280,
        borderWidth: 2,
        marginBottom: 20,
        borderRadius: 60
    },

    btntxt: {
        textAlign: 'center',
        fontSize: 17,
        color: color.WHITE,
        paddingVertical: 15,
    }
    
})

export { mainStyles }