import { Question } from '../../types';

const questions: Question[] = [
    {
        questionId: 1,
        questionName: 'What is 12 + 8?',
        questionType: 1,
        questionAnswer: 20,
        questionOptions: ['18', '19', '20', '21']
    },
    {
        questionId: 2,
        questionName: 'If you have 15 apples and you give 7 to your friend, how many apples do you have left?',
        questionType: 1,
        questionAnswer: 8,
        questionOptions: ['7', '8', '9', '10']
    },
    {
        questionId: 3,
        questionName: 'True or False: 9 x 3 = 27',
        questionType: 2,
        questionAnswer: 1,
        questionOptions: ['True', 'False']
    },
    {
        questionId: 4,
        questionName: 'Fill in the blank: 36 ÷ 6 = __',
        questionType: 3,
        questionAnswer: 6
    },
    {
        questionId: 5,
        questionName: 'If you have 3 packs of 12 pencils each, how many pencils do you have in total?',
        questionType: 1,
        questionAnswer: 36,
        questionOptions: ['30', '32', '34', '36']
    },
    {
        questionId: 6,
        questionName: 'True or False: 7 x 8 = 54',
        questionType: 2,
        questionAnswer: 2,
        questionOptions: ['True', 'False']
    },
    {
        questionId: 7,
        questionName: 'What is 45 - 19?',
        questionType: 1,
        questionAnswer: 26,
        questionOptions: ['24', '25', '26', '27']
    },
    {
        questionId: 8,
        questionName: 'Fill in the blank: 144 ÷ 12 = __',
        questionType: 3,
        questionAnswer: 12
    },
    {
        questionId: 9,
        questionName: 'You bought 4 packs of markers, each pack contains 6 markers. How many markers do you have in total?',
        questionType: 1,
        questionAnswer: 24,
        questionOptions: ['22', '23', '24', '25']
    },
    {
        questionId: 10,
        questionName: 'True or False: 18 ÷ 2 = 9',
        questionType: 2,
        questionAnswer: 1,
        questionOptions: ['True', 'False']
    },{
        questionId: 11,
        questionName: 'What is 56 ÷ 7?',
        questionType: 1,
        questionAnswer: 8,
        questionOptions: ['6', '7', '8', '9']
    },
    {
        questionId: 12,
        questionName: 'If you have 10 boxes of 5 chocolates each, how many chocolates do you have in total?',
        questionType: 1,
        questionAnswer: 50,
        questionOptions: ['45', '50', '55', '60']
    },
    {
        questionId: 13,
        questionName: 'True or False: 12 + 15 = 27',
        questionType: 2,
        questionAnswer: 1,
        questionOptions: ['True', 'False']
    },
    {
        questionId: 14,
        questionName: 'Fill in the blank: 72 ÷ 9 = __',
        questionType: 3,
        questionAnswer: 8
    },
    {
        questionId: 15,
        questionName: 'If you subtract 25 from 100, what do you get?',
        questionType: 1,
        questionAnswer: 75,
        questionOptions: ['70', '75', '80', '85']
    },
    {
        questionId: 16,
        questionName: 'True or False: 6 x 7 = 42',
        questionType: 2,
        questionAnswer: 1,
        questionOptions: ['True', 'False']
    },
    {
        questionId: 17,
        questionName: 'What is 84 ÷ 12?',
        questionType: 1,
        questionAnswer: 7,
        questionOptions: ['6', '7', '8', '9']
    },
    {
        questionId: 18,
        questionName: 'Fill in the blank: 5 x 7 = __',
        questionType: 3,
        questionAnswer: 35
    },
    {
        questionId: 19,
        questionName: 'You have 64 cookies and you want to divide them equally among 8 friends. How many cookies does each friend get?',
        questionType: 1,
        questionAnswer: 8,
        questionOptions: ['7', '8', '9', '10']
    },
    {
        questionId: 20,
        questionName: 'True or False: 14 + 6 = 20',
        questionType: 2,
        questionAnswer: 1,
        questionOptions: ['True', 'False']
    }
];

export default questions;

// questionType 1 = Multiple Choice, 2 = True/False, 3 = Fill in the Blank

