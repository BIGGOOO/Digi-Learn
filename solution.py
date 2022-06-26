from question import Question
questions_prompt = [
    "Python is a ___object-oriented programming language. \n (a) Special purpose \n (b) General purpose \n (c) Medium level programming language \n (d) All of the mentioned above \n\n",
    "Amongst the following, who is the developer of Python programming? \n (a) Guido van Rossum \n (b) Denis Ritchie \n (c) Y.C. Khenderakar \n (d) None of the mentioned above\n\n",
    "Amongst which of the following is / are the application areas of Python programming? \n (a) Web Development \n (b) Game Development \n (c) Artificial Intelligence and Machine Learning \n (d) All of the mentioned above\n\n",
    "Amongst which of the following is / are the Numeric Types of Data Types? \n (a) int \n (b) float \n (c) complex \n (d) All of the mentioned above\n\n",
    "list, tuple, and range are the ___ of Data Types. \n (a) Sequence Types \n (b) Binary Types \n (c) Boolean Types\n (d)None of the mentioned above\n\n",
    
]
questions = [
    Question(questions_prompt[0], "b"),
    Question(questions_prompt[1], "a"),
    Question(questions_prompt[2], "d"),
    Question(questions_prompt[2], "d"),
    Question(questions_prompt[2], "a"),

]

def run_test(questions):
    score = 0
    marks = 0
    a = []
    for question in questions:
        answer = input(question.prompt)
        if answer == question.answer:
            score +=1
            marks +=1
            a.append(marks)
            marks -= 1
        else:
            marks = 0
            a.append(marks)
        # marks -= 1
        # a.append(marks)
    print("\n\nResult:")
    print("You got",score,"/",len(questions))
    print("Total Percentage:", score/len(questions)*100)
    # print(a)
    print("\nRecomedations")
    b = []
    
    if a[0] == 0:
        b.append("Suggestion: Study the Theory about Python")
        print("Suggestion: Study the Theory about Python")
    if a[1] == 0:
        b.append("Suggestion: Study the History of Python")
        print("Suggestion: Study the History of Python")
    if a[2] == 0:
        b.append("Suggestion: Study the applications of Python")
        print("Suggestion: Study the applications of Python")
    if a[3] == 0:
        b.append("Suggestion: Study the Data Typees in Python")
        print("Suggestion: Study the Data Typees in Python")
    if a[4] == 0:
        b.append("Suggestion: Study the lists, tuples and range of Python")
        print("Suggestion: Study the lists, tuples and range of Python")
    # print(b)
    print("\nPrediction")
    f = score/len(questions)*100
    for i in b:
        f += 20
        print("If you'll take", str(i), "You may get",str(f),"%")

    # print("If you take all these suggested courses, you will get result:",f)

run_test(questions)