import {View, Text, Pressable, Modal} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import {MyStatusBar} from '../../constants/config';
import {GREY, HEADERCOLOR} from '../../constants/color';
import AddBtn from '../../components/AddBtn';
import Chapters from '../../components/Chapters';
import {InputTxt} from '../../components/InputTxt';
import {CustomBtn} from '../../components/CustomBtn';

const Activities = ({navigation}) => {
  const [subjectModal, setSubjectModal] = useState({
    visible: false,
    id: '',
  });

  const [chapterModal, setChapterModal] = useState({
    visible: false,
    id: '',
  });

  const [subject, AddSubject] = useState('');
  const [chapter, AddChapter] = useState('');

  return (
    <>
      <View style={{flex: 1}}>
        <MyStatusBar backgroundColor={HEADERCOLOR} barStyle={'light-content'} />
        <Header
          onPress={() => {
            navigation.openDrawer();
          }}
        />
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            height: '8%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: 20,
              color: 'black',
            }}>
            Subject
          </Text>
          <AddBtn
            onPress={() => {
              setSubjectModal({visible: true, id: ''});
            }}
          />
        </View>

        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            height: '8%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: 20,
              color: 'black',
            }}>
            CHOOSE CHAPTER
          </Text>
          <AddBtn
            onPress={() => {
              setChapterModal({visible: true, id: ''});
            }}
          />
        </View>
        <Chapters
          onPress={() => {
            navigation.navigate('chapters');
          }}
          question="Reflection"
          chapter="Chapter 1 "
        />
        <Chapters
          onPress={() => {
            navigation.navigate('chapters');
          }}
          question="Reflection"
          chapter="Chapter 1 "
        />
        <Chapters
          onPress={() => {
            navigation.navigate('chapters');
          }}
          question="Reflection"
          chapter="Chapter 1 "
        />
        <Chapters
          onPress={() => {
            navigation.navigate('chapters');
          }}
          question="Reflection"
          chapter="Chapter 1 "
        />
      </View>

      {/* Subject Modal */}
      <Modal
        visible={subjectModal.visible}
        onRequestClose={() => {
          setSubjectModal({visible: false, id: ''});
        }}
        transparent
        statusBarTranslucent
        hardwareAccelerated>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(40, 40, 40, 0.3)',
            justifyContent: 'center',
          }}>
          <View
            style={{
              height: 220, // Adjust the height to a value that makes the content visible
              width: '95%',
              borderRadius: 10,
              backgroundColor: 'white',
              // justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 20,
                color: 'black',
              }}>
              Add Subject
            </Text>

            <View
              style={{
                marginTop: 25,
              }}>
              <InputTxt
                onTouch={false}
                placeholder="Enter Subject Name"
                borderColor="grey"
                width={80}
                inputdata={subject}
                setInputdata={AddSubject}
              />
            </View>
            <CustomBtn height="20%" width={'40%'} text="Add" />
          </View>
        </View>
      </Modal>

      {/* Chapter Modal */}
      <Modal
        visible={chapterModal.visible}
        onRequestClose={() => {
          setChapterModal({visible: false, id: ''});
        }}
        transparent
        statusBarTranslucent
        hardwareAccelerated>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(40, 40, 40, 0.3)',
            justifyContent: 'center',
          }}>
          {/* Your Chapter Modal Content Goes Here */}
          <View
            style={{
              height: 220, // Adjust the height to a value that makes the content visible
              width: '95%',
              borderRadius: 10,
              backgroundColor: 'white',
              // justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 20,
                color: 'black',
              }}>
              Add Chapter
            </Text>

            <View
              style={{
                marginTop: 25,
              }}>
              <InputTxt
                onTouch={false}
                placeholder="Enter Chapter Name"
                borderColor="grey"
                width={80}
                inputdata={chapter}
                setInputdata={AddChapter}
              />
            </View>
            <CustomBtn height="20%" width={'40%'} text="Add" />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Activities;
