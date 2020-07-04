import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import HomeScreen from '../HomePage/HomeScreen';
import Store from '../Store/Store'
import MenuList from '../Menubars/MenuList'
import Singular from '../Nouns/Singular'
import Countable from '../Nouns/Countable'
import Countable2 from '../Nouns/Countable2';
import Articles from '../Nouns/Articles';
import Articles2 from '../Nouns/Articles2';
import SomeAny from '../Nouns/SomeAny';
import UsesOfArticles from '../Nouns/UsesOfArticles';
import MuchMany from '../Nouns/MuchMany';
import LittleAndFew from '../Nouns/LittleAndFew';
import AllMost from '../Nouns/AllMost';
import SubjectAndObject from '../Pronouns/SubjectAndObject';
import PossessiveForms from '../Pronouns/PossessiveForms';
import PossessiveAdjectives from '../Pronouns/PossessiveAdjectives';
import ThisThat from '../Pronouns/ThisThat';
import AnotherOne from '../Pronouns/AnotherOne';
import ReflexivePronouns from '../Pronouns/ReflexivePronouns';
import IndefinitePronouns from '../Pronouns/IndefinitePronouns';
import PrepositionsOfPlace from '../Prepositions/PrepositionsOfPlace';
import PrepositionsOfPlace2 from '../Prepositions/PrepositionsOfPlace2';
import PrepositionsOfMovement from '../Prepositions/PrepositionsOfMovement';
import PrepositionsOfTime from '../Prepositions/PrepositionsOfTime';
import PrepositionsOfTime2 from '../Prepositions/PrepositionsOfTime2';
import PrepositionsWithOtherMeanings from '../Prepositions/PrepositionsWithOtherMeanings';
import CommonPhrasesWithPrepositions from '../Prepositions/CommonPhrasesWithPrepositions';
import TypesOfAdjective from '../AdjectivesAndAdverbs/TypesOfAdjective';
import AdjectivesWithEdAndIng from '../AdjectivesAndAdverbs/AdjectivesWithEdAndIng';
import TypesOfAdverb from '../AdjectivesAndAdverbs/TypesOfAdverb';
import AdverbsAndWordOrder from '../AdjectivesAndAdverbs/AdverbsAndWordOrder';
import ComparativeAdjectives from '../AdjectivesAndAdverbs/ComparativeAdjectives';
import ComparativeAdjectives2 from '../AdjectivesAndAdverbs/ComparativeAdjectives2';
import SuperlativeAdjectives from '../AdjectivesAndAdverbs/SuperlativeAdjectives';
import NotAsTheSame from '../AdjectivesAndAdverbs/NotAsTheSame';
import TooEnough from '../AdjectivesAndAdverbs/TooEnough';
import AdverbsOfDegree from '../AdjectivesAndAdverbs/AdverbsOfDegree';
import PresentSimpleOfBe from '../PresentTenses/PresentSimpleOfBe';
import QuestionsWithBe from '../PresentTenses/QuestionsWithBe';
import PresentSimple from '../PresentTenses/PresentSimple';
import PresentSimple2 from '../PresentTenses/PresentSimple2';
import PresentContinuous from '../PresentTenses/PresentContinuous';
import PresentContinuous2 from '../PresentTenses/PresentContinuous2';
import PSorPC from '../PresentTenses/PSorPC';
import HaveGot from '../PresentTenses/HaveGot';
import Have from '../PresentTenses/Have';
import PastSimpleOfBe from '../PastTenses/PastSimpleOfBe';
import PastSimple from '../PastTenses/PastSimple';
import PastSimple2 from '../PastTenses/PastSimple2';
import PastContinuous from '../PastTenses/PastContinuous';
import PastSorPastC from '../PastTenses/PastSorPastC';
import UsedTo from '../PastTenses/UsedTo';
import PPForPastExp from '../PresentPerfect/PPForPastExp';
import PPForPreRes from '../PresentPerfect/PPForPreRes';
import JustAlreadyYet from '../PresentPerfect/JustAlreadyYet';
import ForSince from '../PresentPerfect/ForSince';
import PPorPastS from '../PresentPerfect/PPorPastS';
import PPContinuous from '../PresentPerfect/PPContinuous';
import PPorPPContinuous from '../PresentPerfect/PPorPPContinuous';
import Test1Nouns from '../Nouns/Test1'
import ResultTest from '../Common/ResultTest'

const Stack = createStackNavigator();

export default function Catagories (){
    return (
            <NavigationContainer>
                <Stack.Navigator headerMode="none">
                    <Stack.Screen name="MenuList" component={MenuList} />
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Store" component={Store} />
                    <Stack.Screen name="Singular" component={Singular} />
                    <Stack.Screen name="Countable" component={Countable} />
                    <Stack.Screen name ="Countable2" component={Countable2}/>
                    <Stack.Screen name="Articles" component ={Articles}/>
                    <Stack.Screen name="Articles2" component ={Articles2}/>
                    <Stack.Screen name="SomeAny" component ={SomeAny}/>
                    <Stack.Screen name="UsesOfArticles" component ={UsesOfArticles}/>
                    <Stack.Screen name="MuchMany" component ={MuchMany}/>
                    <Stack.Screen name="LittleAndFew" component ={LittleAndFew}/>
                    <Stack.Screen name="AllMost" component ={AllMost}/>
                    <Stack.Screen name="SubjectAndObject" component ={SubjectAndObject}/>
                    <Stack.Screen name="PossessiveForms" component ={PossessiveForms}/>
                    <Stack.Screen name="PossessiveAdjectives" component ={PossessiveAdjectives}/>
                    <Stack.Screen name="ThisThat" component ={ThisThat}/>
                    <Stack.Screen name="AnotherOne" component ={AnotherOne}/>
                    <Stack.Screen name="ReflexivePronouns" component ={ReflexivePronouns}/>
                    <Stack.Screen name="IndefinitePronouns" component ={IndefinitePronouns}/>
                    <Stack.Screen name="PrepositionsOfPlace" component ={PrepositionsOfPlace}/>
                    <Stack.Screen name="PrepositionsOfPlace2" component ={PrepositionsOfPlace2}/>
                    <Stack.Screen name="PrepositionsOfMovement" component ={PrepositionsOfMovement}/>
                    <Stack.Screen name="PrepositionsOfTime" component ={PrepositionsOfTime}/>
                    <Stack.Screen name="PrepositionsOfTime2" component ={PrepositionsOfTime2}/>
                    <Stack.Screen name="PrepositionsWithOtherMeanings" component ={PrepositionsWithOtherMeanings}/>
                    <Stack.Screen name="CommonPhrasesWithPrepositions" component ={CommonPhrasesWithPrepositions}/>
                    <Stack.Screen name="TypesOfAdjective" component ={TypesOfAdjective}/>
                    <Stack.Screen name="AdjectivesWithEdAndIng" component ={AdjectivesWithEdAndIng}/>
                    <Stack.Screen name="TypesOfAdverb" component ={TypesOfAdverb}/>
                    <Stack.Screen name="AdverbsAndWordOrder" component ={AdverbsAndWordOrder}/>
                    <Stack.Screen name="ComparativeAdjectives" component ={ComparativeAdjectives}/>
                    <Stack.Screen name="ComparativeAdjectives2" component ={ComparativeAdjectives2}/>
                    <Stack.Screen name="SuperlativeAdjectives" component ={SuperlativeAdjectives}/>
                    <Stack.Screen name="NotAsTheSame" component ={NotAsTheSame}/>
                    <Stack.Screen name="TooEnough" component ={TooEnough}/> 
                    <Stack.Screen name="AdverbsOfDegree" component ={AdverbsOfDegree}/>
                    <Stack.Screen name="PresentSimpleOfBe" component ={PresentSimpleOfBe}/>
                    <Stack.Screen name="QuestionsWithBe" component ={QuestionsWithBe}/>
                    <Stack.Screen name="PresentSimple" component ={PresentSimple}/>
                    <Stack.Screen name="PresentSimple2" component ={PresentSimple2}/>
                    <Stack.Screen name="PresentContinuous" component ={PresentContinuous}/>
                    <Stack.Screen name="PresentContinuous2" component ={PresentContinuous2}/>
                    <Stack.Screen name="PSorPC" component ={PSorPC}/>
                    <Stack.Screen name="HaveGot" component ={HaveGot}/>
                    <Stack.Screen name="Have" component ={Have}/>
                    <Stack.Screen name="PastSimpleOfBe" component ={PastSimpleOfBe}/>
                    <Stack.Screen name="PastSimple" component ={PastSimple}/>
                    <Stack.Screen name="PastSimple2" component ={PastSimple2}/>
                    <Stack.Screen name="PastContinuous" component ={PastContinuous}/>
                    <Stack.Screen name="PastSorPastC" component ={PastSorPastC}/>
                    <Stack.Screen name="UsedTo" component ={UsedTo}/>
                    <Stack.Screen name="PPForPastExp" component ={PPForPastExp}/>
                    <Stack.Screen name="PPForPreRes" component ={PPForPreRes}/>
                    <Stack.Screen name="JustAlreadyYet" component ={JustAlreadyYet}/>
                    <Stack.Screen name="ForSince" component ={ForSince}/>
                    <Stack.Screen name="PPorPastS" component ={PPorPastS}/>
                    <Stack.Screen name="PPContinuous" component ={PPContinuous}/>
                    <Stack.Screen name="PPorPPContinuous" component ={PPorPPContinuous}/>
                    <Stack.Screen name="Test1Nouns" component={Test1Nouns} />
                    <Stack.Screen name="ResultTest" component={ResultTest} />

                </Stack.Navigator>
            </NavigationContainer>
    );
}