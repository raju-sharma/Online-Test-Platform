import { Injectable } from '@angular/core';
import { Question } from '../models/question';
@Injectable()
export class McqService {
  Algebra1_question:Question[]= [
    {
      id:10007,
      question: "Product of the all eigen values of a matrix is always equal to?",
      choices: [
        {
            "option_Id": 1,
           "option": "determinant of a matrix",
           
        },
        {
          "option_Id": 2,
           "option": "diagonal element of a matrix",
        },
        {
          "option_Id": 3,
          "option": "Zero",
        },
        {
          "option_Id": 4,
          "option": "One",
        }
    ],
     
      correct_answer: 1616162
    },
    {
       id:10008,
      question: "The eigen values of a idempotent matrix is/are ?",
      choices: [
        {
          "option_Id": 5,
          "option": "zero",
           
        },
        {
          "option_Id": 6,
           "option": "unity",
        },
        {
          "option_Id": 7,
          "option": "zero or unity",
        },
        {
          "option_Id": 8,
           "option": "cannot be defined",
        }
    ],
      correct_answer: 1616168
    }
    ,
    {
       id:10009,
      question: "Sum of the eigen value of a matrix is equal to its ?",
      choices: [
        {
          "option_Id": 9,
          "option": "traces",
           
        },
        {
          "option_Id": 10,
           "option": "determinant",
        },
        {
          "option_Id": 11,
          "option": "Zero",
        },
        {
          "option_Id": 12,
           "option": "Unity",
        }
    ],
      correct_answer: 1616170
    }
    ,
    {
       id:10010,
      question: "Which of the statement is false?",
      choices: [
        {
          "option_Id": 13,
          "option": "sum of the eigen values of a matiz is equal to the sum of its principal diagonal elements ",
           
        },
        {
          "option_Id": 14,
           "option": "By Cayley-Hamilton theorem, every square matrix satisfies its own chara",
        },
        {
          "option_Id": 15,
          "option": "Square matrix and its transpose have reciprocal eigen values to each other",
        },
        {
          "option_Id": 16,
           "option": "All of the above",
        }
    ],
      correct_answer: 1616176
    }
    ,
    {
       id:10011,
      question: "If A is square matrix of 3 x 3 with eigen values 1,2,3 then eigen values of its tranpose matrix are ?",
      choices: [
        {
          "option_Id": 17,
          "option": "1, 2 and 3",
           
        },
        {
          "option_Id": 18,
           "option": "1, 0.5 and 0.33",
        },
        {
          "option_Id": 19,
          "option": "-1, -2 and -3",
        },
        {
          "option_Id": 20,
           "option": "-1, -0.5, and -0.33",
        }
    ],
      correct_answer: 1616178
    },
    {
       id:10012,
      question: "Let A be the 2 × 2 matrix with elements a11 = a12 = a21 = +1 and a22 = −1. Then the eigenvalues of the matrix A power 19 are ?",
      choices: [
        {
          "option_Id": 21,
          "option": "1024 and -1024",
           
        },
        {
          "option_Id": 22,
           "option": "512√ 2 and -512√ 2",
        },
        {
          "option_Id": 23,
          "option": "1 and -1",
        },
        {
          "option_Id": 24,
           "option": "4√ 2 and -4√ 2",
        }
    ],
      correct_answer: 1616183
    },
    {
       id:10013,
      question: "The trace and determinant of a 2 × 2 matrix are known to be -2 and -35 respectively. Its eigen values are",
      choices: [
        {
          "option_Id": 25,
          "option": "-30 and -5",
           
        },
        {
          "option_Id": 26,
           "option": "-37 and -1",
        },
        {
          "option_Id": 27,
          "option":"-7 and 5",
        },
        {
          "option_Id": 28,
           "option": "-17.5 and -2",
        }
    ],
      correct_answer: 1616188
    },
    {
       id:10014,
      question: "Which one of the following statements is TRUE about every matrix ?",
      choices: [
        {
          "option_Id": 29,
          "option": "If the trace of the matrix is positive and the determinant of the matrix is negative, at least one of its eigenvalues is negative.",
           
        },
        {
          "option_Id": 30,
           "option": "If the trace of the matrix is positive, all its eigenvalues are positive.",
        },
        {
          "option_Id":31,
          "option": "If the determinant of the matrix is positive, all its eigenvalues are positive.",
        },
        {
          "option_Id": 32,
           "option": "If the product of the trace and determinant of the matrix is positive, all its eigenvalues are positive.",
        }
    ],
      correct_answer: 1616190
    },
    {
       id:10015,
      question: "If determinant of 3 x 3 matrix is 100 then determinant of Adj(A) is :?",
      choices: [
        {
          "option_Id": 33,
          "option": "1",
           
        },
        {
          "option_Id": 34,
           "option": "10",
        },
        {
          "option_Id": 35,
          "option": "100",
        },
        {
          "option_Id": 36,
           "option": "10000",
        }
    ],
      correct_answer: 1616197
    }
    ,
    {
       id:10016,
      question: "If Eigen Values of 3 x 3 matrix are 10,-1, 5 then eigen value of Adj(A) are :?",
      choices: [
        {
          "option_Id": 37,
          "option": "-5, 50 and -10",
           
        },
        {
          "option_Id": 38,
           "option": "10,-1 and 5",
        },
        {
          "option_Id": 39,
          "option": "5, -50 and 10",
        },
        {
          "option_Id": 40,
           "option": "-10, 1 and -5",
        }
    ],
      correct_answer: 1616198
    }

  ];
  constructor() { }
getAllTask()
{
  return this.Algebra1_question;
}
}