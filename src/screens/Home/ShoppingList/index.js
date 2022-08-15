import React, { useState } from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { styles } from './styles';
import { Appbar, Text } from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ListAvatar from '../../../components/ListAvatar';
import FabButton from '../../../components/FabButton';
import BottomSheet from '../../../components/BottomSheet';
import { api } from '../../../services/api';
import useSWR from 'swr';
import { COLORS } from '../../../theme/globalColors';

const ShoppingItem = ({ item, onLongPress }) => {
  return (
    <TouchableOpacity onLongPress={onLongPress}>
      <View style={styles.listItemContainer}>
        <ListAvatar>
          <MaterialIcon name="cart-variant" size={32} />
        </ListAvatar>
        <View style={{ marginLeft: 20, flex: 7 }}>
          <Text style={styles.titleStyle}>{item.productName}</Text>
          <Text style={styles.priceStyle}>R$ {item.price}</Text>
        </View>
        <View style={{ flex: 1 }}>
          {item.buy ? (
            <MaterialIcon name="check" size={38} color={'#0DC337'} />
          ) : null}
        </View>
      </View>
      <View
        style={{
          width: '95%',
          height: 1,
          backgroundColor: '#d9d9d9',
          alignSelf: 'center',
        }}
      />
    </TouchableOpacity>
  );
};

const fetcher = url =>
  api
    .get(url)
    .then(response => response.data)
    .catch(e => {
      throw e;
    });

export const ShoppingList = ({ navigation }) => {
  const { data, error, mutate } = useSWR('/data', fetcher);

  const isLoading = !data && !error;

  const [showBottomSheet, setShowBottomSheet] = useState(false);

  const handleShowBottomSheet = () => setShowBottomSheet(true);
  const handleCloseBottomSheet = () => setShowBottomSheet(false);

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.headerStyle}>
        <Appbar.Content title="Lista de compras" />
      </Appbar.Header>
      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          size={35}
          color={COLORS.PRIMARY}
        />
      )}
      <FlatList
        data={data ?? []}
        keyExtractor={item => `${item.id}-${item.productName}`}
        renderItem={({ item }) => (
          <ShoppingItem
            item={item}
            onLongPress={() => handleShowBottomSheet()}
          />
        )}
      />
      <FabButton
        icon="cart-plus"
        onPress={() =>
          navigation.navigate('AddFormScreen', { mutateFunc: mutate })
        }
      />
      {showBottomSheet && (
        <BottomSheet
          visible={showBottomSheet}
          onClose={() => handleCloseBottomSheet()}
          options={[
            {
              label: 'Editar',
              action: () => {
                handleCloseBottomSheet();
                navigation.navigate('AddFormScreen', {
                  isUpdate: true,
                  mutateFunc: mutate,
                });
              },
            },
            {
              label: 'Deletar',
              action: () => console.log('vai pra tela de deleção'),
            },
            ,
          ]}
        />
      )}
    </View>
  );
};
