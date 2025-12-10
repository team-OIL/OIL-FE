import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const PlusIcon = () => <Text style={modalStyles.plusIcon}>+</Text>;

const ImgModel = ({ onClose }: { onClose: () => void }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [status, setStatus] = ImagePicker.useMediaLibraryPermissions();
  const handleComplete = () => {
    console.log('기록 저장 및 완료');
    onClose(); // 저장 후 모달 닫기
  };

  const handleAddImage = () => {
    console.log('이미지 추가 영역 클릭됨');
    // 여기에 이미지 선택 로직 구현
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={modalStyles.wrapper}
    >
      {/* ScrollView를 사용하여 내용이 길어지거나 키보드가 올라올 때 대응 */}
      <ScrollView
        contentContainerStyle={modalStyles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* 상단 텍스트 영역 */}
        <View style={modalStyles.header}>
          <Text style={modalStyles.instructionText}>
            과제를 완료했습니다.{'\n'}오늘의 추억을 사진과 글로 남겨주세요.
          </Text>
          <Text style={modalStyles.taskTitle}>바람 느끼기 완료</Text>
        </View>

        {/* 메인 콘텐츠 카드 */}
        <View style={modalStyles.card}>
          <View style={modalStyles.inputContainer}>
            <Text style={modalStyles.label}>내용</Text>
            <TextInput
              style={modalStyles.textInput}
              placeholder="내용"
              placeholderTextColor="#B0B0B0"
              multiline={true}
              numberOfLines={4}
            />
          </View>

          {/* 이미지 추가 영역 */}
          <TouchableOpacity
            style={modalStyles.imageAddArea}
            onPress={handleAddImage}
          >
            <PlusIcon />
            <Text style={modalStyles.imagePromptText}>
              눌러서 이미지 추가하기
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* 완료 버튼 (스크롤뷰 밖에 배치하여 항상 보이도록 함) */}
      <TouchableOpacity
        style={modalStyles.completeButton}
        onPress={handleComplete}
      >
        <Text style={modalStyles.buttonText}>완료</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const modalStyles = StyleSheet.create({
  wrapper: {
    width: '100%',
    maxHeight: '90%', // 모달이 화면의 90%를 넘지 않도록 설정
    backgroundColor: '#F7F7F7',
    borderRadius: 20,
    overflow: 'hidden',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20, // 버튼과의 간격 확보
  },

  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  instructionText: {
    fontSize: 15,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 24,
  },
  taskTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 10,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 5,
  },

  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: '#F0F0F0',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 15,
    fontSize: 16,
    minHeight: 50,
  },

  imageAddArea: {
    minHeight: 200,
    borderWidth: 1.5,
    borderColor: '#D0D0D0',
    borderStyle: 'dotted',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  plusIcon: {
    fontSize: 40,
    lineHeight: 50,
    color: '#A0A0A0',
  },
  imagePromptText: {
    fontSize: 14,
    color: '#A0A0A0',
    marginTop: 5,
  },

  completeButton: {
    backgroundColor: '#333333',
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20, 
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ImgModel;