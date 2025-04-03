import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface AvatarProps {
    imageUrl: string;
    size?: number;
    onPress?: () => void;
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl, size = 50, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <View style={[styles.avatarContainer, { width: size, height: size, borderRadius: size / 2 }]}>
            <Image source={{ uri: imageUrl }} style={[styles.avatarImage, { width: size, height: size, borderRadius: size / 2 }]} />
        </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    avatarContainer: {
        overflow: 'hidden',
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarImage: {
        resizeMode: 'cover',
    },
});

export default Avatar;