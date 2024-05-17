import { Question } from '../../types';

const questions: Question[] = [
    {
        questionId: 1,
        questionName: 'What is 3 + 3?',
        questionType: 1,
        questionAnswer: 6,
        questionOptions: ['5', '6', '7', '8']
    }, {
        questionId: 2,
        questionName: 'Fill in the blank: 2^2 = __',
        questionType: 3,
        questionAnswer: 4
    }, {
        questionId: 3,
        questionName: 'True or False: 3 + 3 = 6',
        questionType: 2,
        questionAnswer: 1,
        questionOptions: ['True', 'False']
    }, {
        questionId: 4,
        questionName: 'What is 2 + 2?',
        questionType: 1,
        questionAnswer: 4,
        questionOptions: ['3', '4', '5', '6']
    }, {
        questionId: 5,
        questionName: 'Fill in the blank: 4 x __ = 16',
        questionType: 3,
        questionAnswer: 4
    }
];

export default questions;

// questionType 1 = Multiple Choice, 2 = True/False, 3 = Fill in the Blank
