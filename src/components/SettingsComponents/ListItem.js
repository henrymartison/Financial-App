import React from 'react'
import {View, Text} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { Separator } from '../commons/Separator'
import { TouchableOpacity } from '../commons/TouchableOpacity'
import { fsr } from '../commons/metrics'
import Colors from '../../constants/Colors'

const ListItem = ({
    iconLeft, 
    iconRight = 'ios-arrow-forward', 
    attribute, 
    onPress,
    color=Colors.darkBlue
}) => {
    return(
        <View>
            <TouchableOpacity
                onPress={onPress}
                style={{
                    padding: 20,
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <View style={{flexDirection: 'row'}}>
                    <Feather name={iconLeft} size={18} color={color} />
                    <Text style={{paddingLeft: 10, fontSize: fsr(2.4), color: color}}>{attribute}</Text>
                </View>
                <Ionicons name={iconRight} size={18} color={Colors.darkBlue} />
            </TouchableOpacity>
            <Separator />
        </View>
    )
}

export default ListItem