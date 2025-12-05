// MainPage.tsx (예시)
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Star from '../components/Star';
import Button from '../components/button';
import { Image } from 'react-native';
import { IMAGES } from '../assets';

const MainPage = () => {
  // 실제 로직 (예: 과제 시작 버튼 핸들러)은 생략합니다.
  const onStartTask = () => {
    console.log('과제 시작');
    // 네비게이션 로직 또는 API 호출 로직 추가
  };

  return (
    <View style={styles.safeArea}>
      <View style={styles.container}>
        {/* 1. 상단 헤더 (배터리, 시간, 알림) */}
        <View style={styles.header}>
          {/* 상태바 영역 - 실제 앱에서는 시스템 상태바를 사용하거나 커스텀합니다. */}
          <View style={styles.statusBarPlaceholder}>
            <Image source={IMAGES.logo} />
            {/* 우측 알림 아이콘 */}
            <Text style={styles.notificationIcon}>🔔</Text>
          </View>

          {/* 명언/메시지 영역 */}
          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>
              아름다운 사람이 머문 자리는 자리도 아름답다. - 남자 화장실 -
            </Text>
          </View>
        </View>

        {/* 2. 메인 컨텐츠 영역 */}
        <View style={styles.mainContent}>
          <Text style={styles.todayTaskLabel}>오늘의 과제</Text>
          <Text style={styles.taskName}>바람 느끼기</Text>
          <Star />
          {/* Button 컴포넌트 (시작 버튼) */}
          {/* Button 컴포넌트는 기존에 사용하던 props를 가정하여 사용합니다. */}
          <View style={styles.buttonZone}>
            <Button onPress={onStartTask} label="시작" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingTop: 0,
  },

  // --- 1. Header (상단) 스타일 ---
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  statusBarPlaceholder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    // 실제 시간/배터리 정보는 RN에서 시스템적으로 처리됩니다.
  },
  logoPlaceholder: {
    width: 60,
    height: 20,
    backgroundColor: '#D8BFD8', // 이미지의 왼쪽 상단 로고 색상 근처
    borderRadius: 5,
  },
  notificationIcon: {
    fontSize: 24,
    color: '#000',
  },
  quoteBox: {
    backgroundColor: '#F5F5F5', // 밝은 배경색 (배경의 그림자 느낌)
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginTop: 5,
    marginBottom: 20,
    maxWidth: '90%',
  },
  quoteText: {
    fontSize: 12,
    color: '#555',
  },

  // --- 2. Main Content (중앙) 스타일 ---
  mainContent: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  todayTaskLabel: {
    fontSize: 16,
    color: '#777',
    marginBottom: 5,
  },
  taskName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  buttonZone: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 50, // Star 컴포넌트 아래 간격
  },

  // --- 3. Bottom Nav (하단 탭) 스타일 ---
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    backgroundColor: '#fff',
    height: 70, // 탭 바 높이 설정
    paddingBottom: 5, // 하단 safe area 대비 패딩
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 5,
  },
  navIcon: {
    fontSize: 24,
    color: '#333',
    marginBottom: 2,
  },
  navLabel: {
    fontSize: 12,
    color: '#888',
  },
  navLabelActive: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000', // 활성화된 '홈' 색상
  },
});

export default MainPage;
