import React, { useRef, useEffect } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';

interface TimePickerWheelProps {
  data: string[];
  selectedValue: string;
  onValueChange: (value: string) => void;
  height: number; // 휠의 높이 (전체 보이는 영역)
  itemHeight: number; // 각 항목의 높이
}

const { width: SCREEN_WIDTH } = Dimensions.get('window');

// 휠의 중앙에 항목을 맞추기 위한 상단/하단 빈 공간 (2칸의 높이)
const PADDING_COUNT = 1;

const TimePickerWheel: React.FC<TimePickerWheelProps> = ({
  data,
  selectedValue,
  onValueChange,
  height,
  itemHeight,
}) => {
  const scrollViewRef = useRef<ScrollView>(null);
  const dataString = data.map(String);

  // 데이터 배열 앞뒤에 빈 공간을 추가하여 중앙 정렬
  const paddedData = [
    ...Array(PADDING_COUNT).fill(''),
    ...dataString,
    ...Array(PADDING_COUNT).fill(''),
  ];

  // 현재 선택된 값의 인덱스를 찾아 스크롤 위치 설정
  useEffect(() => {
    const index = dataString.indexOf(String(selectedValue));
    if (index !== -1 && scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        y: index * itemHeight,
        animated: false,
      });
    }
  }, [selectedValue, itemHeight, dataString]);

  // 스크롤이 끝났을 때 가장 가까운 항목으로 스냅 (Snap logic)
  const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    const selectedIndex = Math.round(yOffset / itemHeight);

    // 선택된 값은 패딩이 없는 원본 데이터 인덱스에 해당
    const newValue = data[selectedIndex];

    if (newValue !== undefined) {
      scrollViewRef.current?.scrollTo({
        y: selectedIndex * itemHeight,
        animated: true,
      });
      onValueChange(newValue);
    }
  };

  const isFocused = (item: string) => item === selectedValue;

  const renderItem = (item: string, index: number) => {
    if (item === '') {
      return <View key={index} style={{ height: itemHeight }} />;
    }

    const focused = isFocused(item);

    return (
      <View
        key={index}
        style={{
          height: itemHeight,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={[
            styles.itemText,
            focused ? styles.focusedText : styles.unfocusedText,
          ]}
        >
          {item}
        </Text>
      </View>
    );
  };

  return (
    <View style={[styles.wheelContainer, { height }]}>
      <View
        style={[styles.highlightLineTop, { top: itemHeight * PADDING_COUNT }]}
      />
      <View
        style={[
          styles.highlightLineBottom,
          { top: itemHeight * (PADDING_COUNT + 1) },
        ]}
      />

      <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        // 스크롤 속도와 감속 설정
        decelerationRate="fast"
        // 스크롤 후 항목 경계에 멈추도록 설정 (iOS 스타일)
        snapToInterval={itemHeight}
        snapToAlignment="center"
        onMomentumScrollEnd={handleScrollEnd}
        scrollEventThrottle={16}
        contentContainerStyle={styles.contentContainer}
      >
        {paddedData.map(renderItem)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wheelContainer: {
    overflow: 'hidden',
    width: SCREEN_WIDTH / 4,
  },
  contentContainer: {
    paddingVertical: 0,
  },
  itemText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  focusedText: {
    color: '#000000',
  },
  unfocusedText: {
    color: '#cccccc',
  },
  highlightLineTop: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: '#e0e0e0',
    zIndex: 1,
  },
  highlightLineBottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: '#e0e0e0',
    zIndex: 1,
  },
});

export default TimePickerWheel;
