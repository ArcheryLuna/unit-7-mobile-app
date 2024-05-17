import { Question } from '../../types';

const questions: Question[] = [
    {
        questionId: 1,
        questionName: 'If you have 6 apples and share them equally between 3 friends, how many apples does each friend get?',
        questionType: 1,
        questionAnswer: 2,
        questionOptions: ['1', '2', '3', '4']
    },
    {
        questionId: 2,
        questionName: 'Fill in the blank: 8 candies shared between 4 kids means each kid gets __ candies.',
        questionType: 3,
        questionAnswer: 2
    },
    {
        questionId: 3,
        questionName: 'True or False: If you divide 10 cookies among 2 friends, each friend gets 5 cookies.',
        questionType: 2,
        questionAnswer: 1,
        questionOptions: ['True', 'False']
    },
    {
        questionId: 4,
        questionName: 'What is 9 ÷ 3?',
        questionType: 1,
        questionAnswer: 3,
        questionOptions: ['2', '3', '4', '5']
    },
    {
        questionId: 5,
        questionName: 'Fill in the blank: 2 plus 2 equals __',
        questionType: 3,
        questionAnswer: 4
    },
    {
        questionId: 6,
        questionName: 'True or False: If you have 3 apples and you get 3 more, you will have 6 apples.',
        questionType: 2,
        questionAnswer: 1,
        questionOptions: ['True', 'False']
    },
    {
        questionId: 7,
        questionName: 'If you have 4 baskets with 2 oranges in each basket, how many oranges do you have in total?',
        questionType: 1,
        questionAnswer: 8,
        questionOptions: ['6', '7', '8', '9']
    },
    {
        questionId: 8,
        questionName: 'Fill in the blank: 5 bags with 3 apples in each bag means you have __ apples in total.',
        questionType: 3,
        questionAnswer: 15
    },
    {
        questionId: 9,
        questionName: 'True or False: If you have 8 candies and eat 2, you have 6 candies left.',
        questionType: 2,
        questionAnswer: 1,
        questionOptions: ['True', 'False']
    },
    {
        questionId: 10,
        questionName: 'You had 7 balloons and gave 3 to your friend. How many balloons do you have left?',
        questionType: 1,
        questionAnswer: 4,
        questionOptions: ['3', '4', '5', '6']
    }
];

export default questions;

// questionType 1 = Multiple Choice, 2 = True/False, 3 = Fill in the Blank

