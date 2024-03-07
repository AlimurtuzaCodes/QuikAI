import {View, FlatList} from 'react-native';
import React, {memo, useRef} from 'react';
import ModelItem from './ModelItem';
import UserItem from './UserItem';

const ChatListView = ({data}) => {
  const flatListRef = useRef(null);
  return (
    <View className=" relative basis-[93%] w-full flex flex-col justify-between items-center">
      <FlatList
        ref={flatListRef}
        onContentSizeChange={() =>
          flatListRef.current.scrollToEnd({animated: true})
        }
        className="w-full px-4"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        data={data}
        renderItem={({item}) =>
          item.role === 'model' ? (
            <ModelItem item={item} />
          ) : (
            <UserItem item={item} />
          )
        }
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default memo(ChatListView);
