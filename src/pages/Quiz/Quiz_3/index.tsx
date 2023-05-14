import { StyleSheet, Text, Animated, View, SafeAreaView, TouchableOpacity, Modal,} from 'react-native'
import React, {useState} from 'react'
import {COLORS, SIZES} from '../../../constants';
import data from '../../../data/Quiz_3/index';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose';
import { useNavigation } from '@react-navigation/native';



const Quiz_3 = () => {
  const navigation = useNavigation();
  const allQuestions = data;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0)
  const [showNextButton, setShowNextButton] = useState(false)
  const [showScoreModal, setShowScoreModal] = useState(false)
  
  const validateAnswer = (selectedOption) => {
    let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
    setCurrentOptionSelected(selectedOption);
    setCorrectOption(correct_option);
    setOptionsDisabled(true);
    if(selectedOption==correct_option){
      // SetScore
      setScore(score+1)
    }
    // Show Next Button
    setShowNextButton(true)
  }

  const handleNext = () => {
    if(currentQuestionIndex== allQuestions.length-1){
      // LastQuestion
      // Show Score Modal
      setShowScoreModal(true)
    }else{
      setCurrentQuestionIndex(currentQuestionIndex+1);
      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setOptionsDisabled(false);
      setShowNextButton(false);
    }
  }

  const restartQuiz = () => {
    setShowScoreModal(false);

    setCurrentQuestionIndex(0);
    setScore(0);

    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setOptionsDisabled(false);
    setShowNextButton(false);
  }

  const renderQuestion = () => {
    return (
      <View>
      {/* Question Counter */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <Text style={{color: COLORS.white, fontSize: 20, opacity: 0.6, marginRight: 2}}>{currentQuestionIndex+1}</Text>
          <Text style={{color: COLORS.white, fontSize: 18, opacity: 0.6,}}>/ {allQuestions.length}</Text>
        </View>

        {/* Question */}
        <Text style={{
          color: COLORS.white,
          fontSize: 30,
        }}>{allQuestions[currentQuestionIndex]?.question}
        </Text>
      </View>
    )
  }

  const renderOptions = () => {
    return(
      <View>
        {
          allQuestions[currentQuestionIndex]?.option.map(option => (
            <TouchableOpacity
              onPress={()=>validateAnswer(option)}
              disabled={isOptionsDisabled}
              key={option}
              style={{
                borderWidth: 3,
                borderColor: option==correctOption
                ? COLORS.success
                : option==currentOptionSelected
                ? COLORS.error
                : COLORS.secondary+'40',
                backgroundColor: option==correctOption
                ? COLORS.success + '20'
                : option==currentOptionSelected
                ? COLORS.error + '20'
                : COLORS.secondary+'20',
                height: 60,
                borderRadius: 20,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                marginVertical: 10,
              }}>
              <Text 
                style={{
                  fontSize: 20,
                  color: COLORS.white,
                }}>
                {option}
              </Text>
              {/* Show check or Cross Icon based on correct answer */}
              {
                option==correctOption? (
                  <View style={{
                    width: 30, height: 30, borderRadius: 30/2,
                    backgroundColor: COLORS.success,
                    justifyContent: 'center', alignItems: 'center',
                  }}>
                    <FontAwesomeIcon icon={faCheck} size={20} color= '#fff'/>
                  </View>
                ): option == currentOptionSelected ? (
                  <View style={{
                    width: 30, height: 30, borderRadius: 30/2,
                    backgroundColor: COLORS.error,
                    justifyContent: 'center', alignItems: 'center',
                  }}>
                    <FontAwesomeIcon icon={faClose} size={20} color="#fff"/>
                  </View>
                ) : null
              }

            </TouchableOpacity>
          ))
        }
      </View>
    )
  }

  const renderNextButton = () => {
    if (showNextButton){
      return(
        <TouchableOpacity
        onPress={handleNext}
          style={{
            marginTop: 20, width: '100%', backgroundColor: COLORS.accent, padding: 20, borderRadius: 5
          }}>
          <Text style={{fontSize: 20, color: COLORS.white, textAlign: 'center'}}>Next</Text>
        </TouchableOpacity>
      )
    }else{
      return null
    }
  }

  return (
    <SafeAreaView
      style={{
        flex:1
      }}>
      <View
        style={{
          flex: 1,
          paddingVertical: 40,
          paddingHorizontal: 16,
          backgroundColor: COLORS.background,
          position:'relative',
        }}>

        {/* Question */}
        {renderQuestion()}

        {/* Options */}
        {renderOptions()}

        {/* NextButton */}
        {renderNextButton()}

        {/* Score Modal */}
        <Modal
          animationType='slide'
          transparent={true}
          visible={showScoreModal}>
            <View style={{
              flex: 1,
              backgroundColor: COLORS.primary,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <View
                style={{
                  backgroundColor: COLORS.white,
                  width: '90%',
                  borderRadius: 20,
                  padding: 20,
                  alignItems: 'center'
                }}>
                  <Text style={{fontSize: 30, fontWeight: 'bold',}}>{score> (allQuestions.length/2) ? 'Congratulations!':'Oops!'}</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginVertical: 20
                    }}>
                      <Text
                        style={{
                          fontSize: 30,
                          color: score> (allQuestions.length/2) ? COLORS.success : COLORS.error
                        }}>{score}</Text>
                      <Text
                        style={{
                          fontSize: 20,
                          color: COLORS.black,
                        }}>/ {allQuestions.length}
                      </Text>
                  </View>
                  
                  <TouchableOpacity
                    onPress={restartQuiz}
                   style={{
                    backgroundColor: COLORS.accent,
                    padding: 20, width: '100%', borderRadius: 20
                  }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: COLORS.white,
                        fontSize: 20,
                      }}>
                      Retry Now
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                   onPress={() => {navigation.navigate('Quiz');}}
                   style={{
                    backgroundColor: COLORS.accent,
                    padding: 20, width: '100%', borderRadius: 20,
                    marginVertical: 10,
                  }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: COLORS.white,
                        fontSize: 20,
                      }}>
                      Next
                    </Text>
                  </TouchableOpacity>
                  
              </View>
            </View>
        </Modal>

      </View>

    </SafeAreaView>
  )
}

export default Quiz_3

const styles = StyleSheet.create({})