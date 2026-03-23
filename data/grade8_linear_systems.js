const questionsDB = [
    // ==========================================
    // תת נושא 1: שיטת ההצבה (10 שאלות)
    // ==========================================
    {
        "topic": "system_of_equations_grade_8",
        "subTopic": "שיטת ההצבה",
        "question_text": "פתרו את מערכת המשוואות הבאה בעזרת שיטת ההצבה: המשוואה הראשונה היא \\( y = 3x \\), והמשוואה השנייה היא \\( x + y = 16 \\). מהו הפתרון (x,y)?&rlm;",
        "options": ["(4, 12)", "(5, 11)", "(3, 9)", "(2, 14)"],
        "correctAnswer": 0,
        "hint": "במקום האות y במשוואה השנייה, הציבו את הביטוי 3x מתוך המשוואה הראשונה.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בביטוי של המשתנה השני כפי שהוא מופיע במשוואה הראשונה.", "math_expression": "y = 3x" },
            { "verbal_explanation": "נציב את הביטוי במקום המשתנה בתוך המשוואה השנייה.", "math_expression": "x + 3x = 16" },
            { "verbal_explanation": "נחבר את המקדמים של המשתנה באגף השמאלי.", "math_expression": "4x = 16" },
            { "verbal_explanation": "נחלק בארבע ונקבל את ערכו של המשתנה הראשון.", "math_expression": "16 \\div 4 = 4 \\Rightarrow x = 4" },
            { "verbal_explanation": "נציב את הערך שמצאנו אל תוך המשוואה הראשונה.", "math_expression": "y = 3 \\times 4" },
            { "verbal_explanation": "נחשב את המכפלה למציאת המשתנה השני.", "math_expression": "y = 12" },
            { "verbal_explanation": "נרשום את הפתרון כזוג סדור.", "math_expression": "(4, 12)" }
        ],
        "final_answer": "(4, 12)"
    },
    {
        "topic": "system_of_equations_grade_8",
        "subTopic": "שיטת ההצבה",
        "question_text": "פתרו את המערכת: \\( x = y - 2 \\) וכן \\( 3x + y = 10 \\). מהו הפתרון?&rlm;",
        "options": ["(2, 4)", "(1, 3)", "(3, 1)", "(0, 2)"],
        "correctAnswer": 0,
        "hint": "הציבו את כל הביטוי בסוגריים במקום הנעלם במשוואה השנייה.",
        "solution_steps": [
            { "verbal_explanation": "ניקח את הביטוי השלם מהמשוואה הראשונה ונציב אותו בתוך סוגריים במשוואה השנייה.", "math_expression": "3(y - 2) + y = 10" },
            { "verbal_explanation": "נפתח את הסוגריים בעזרת חוק הפילוג.", "math_expression": "3y - 6 + y = 10" },
            { "verbal_explanation": "נכנס איברים דומים בצד שמאל.", "math_expression": "4y - 6 = 10" },
            { "verbal_explanation": "נוסיף שש לשני האגפים.", "math_expression": "4y = 16" },
            { "verbal_explanation": "נחלק בארבע ונקבל את המשתנה השני.", "math_expression": "y = 4" },
            { "verbal_explanation": "נציב את הערך במשוואה הראשונה כדי למצוא את המשתנה הראשון.", "math_expression": "x = 4 - 2 = 2" }
        ],
        "final_answer": "(2, 4)"
    },
    {
        "topic": "system_of_equations_grade_8",
        "subTopic": "שיטת ההצבה",
        "question_text": "פתרו את המערכת הבאה בשיטת ההצבה: \\( y = 2x + 1 \\) ו- \\( 2x + 3y = 19 \\).&rlm;",
        "options": ["(2, 5)", "(3, 7)", "(1, 3)", "(4, 9)"],
        "correctAnswer": 0,
        "hint": "הציבו את הביטוי השלם של y בתוך סוגריים במשוואה השנייה.",
        "solution_steps": [
            { "verbal_explanation": "נציב את הביטוי במקום המשתנה בתוך המשוואה השנייה.", "math_expression": "2x + 3(2x + 1) = 19" },
            { "verbal_explanation": "נכפול את המספר שלוש בכל אחד מהאיברים שבתוך הסוגריים.", "math_expression": "2x + 6x + 3 = 19" },
            { "verbal_explanation": "נחבר את המקדמים של המשתנה.", "math_expression": "8x + 3 = 19" },
            { "verbal_explanation": "נחסר שלוש מהאגף הימני.", "math_expression": "8x = 16" },
            { "verbal_explanation": "נחלק בשמונה כדי למצוא את המשתנה הראשון.", "math_expression": "x = 2" },
            { "verbal_explanation": "נציב את התוצאה במשוואה הראשונה למציאת המשתנה השני.", "math_expression": "y = 2 \\times 2 + 1 = 5" }
        ],
        "final_answer": "(2, 5)"
    },
    {
        "topic": "system_of_equations_grade_8",
        "subTopic": "שיטת ההצבה",
        "question_text": "נתונה מערכת המשוואות: \\( x = 4y \\) ו- \\( x - y = 9 \\). מהו הפתרון?&rlm;",
        "options": ["(12, 3)", "(8, 2)", "(16, 4)", "(20, 5)"],
        "correctAnswer": 0,
        "hint": "החליפו את המשתנה הראשון במשוואה השנייה בביטוי שלו מהמשוואה הראשונה.",
        "solution_steps": [
            { "verbal_explanation": "נציב את הביטוי של המשתנה הראשון במשוואה השנייה.", "math_expression": "4y - y = 9" },
            { "verbal_explanation": "נחשב את ההפרש באגף שמאל.", "math_expression": "3y = 9" },
            { "verbal_explanation": "נחלק בשלוש למציאת המשתנה.", "math_expression": "y = 3" },
            { "verbal_explanation": "נציב את הערך במשוואה הראשונה כדי למצוא את המשתנה השני.", "math_expression": "x = 4 \\times 3" },
            { "verbal_explanation": "נחשב את המכפלה ונקבל את התוצאה.", "math_expression": "x = 12" }
        ],
        "final_answer": "(12, 3)"
    },
    {
        "topic": "system_of_equations_grade_8",
        "subTopic": "שיטת ההצבה",
        "question_text": "פתרו: \\( y = x - 5 \\) יחד עם \\( 4x - 2y = 16 \\).&rlm;",
        "options": ["(3, -2)", "(5, 0)", "(4, -1)", "(2, -3)"],
        "correctAnswer": 0,
        "hint": "הציבו בסוגריים, ושימו לב שמינוס כפול מינוס נותן פלוס.",
        "solution_steps": [
            { "verbal_explanation": "נציב את הביטוי בתוך המשוואה השנייה.", "math_expression": "4x - 2(x - 5) = 16" },
            { "verbal_explanation": "נפתח סוגריים. נקפיד על כך שסימן שלילי משנה את הסימנים בפנים.", "math_expression": "4x - 2x + 10 = 16" },
            { "verbal_explanation": "נכנס איברים המכילים את המשתנה.", "math_expression": "2x + 10 = 16" },
            { "verbal_explanation": "נחסר עשר משני האגפים.", "math_expression": "2x = 6" },
            { "verbal_explanation": "נחלק בשתיים לקבלת המשתנה הראשון.", "math_expression": "x = 3" },
            { "verbal_explanation": "נציב במשוואה המקורית למציאת המשתנה השני.", "math_expression": "y = 3 - 5 = -2" }
        ],
        "final_answer": "(3, -2)"
    },
    {
        "topic": "system_of_equations_grade_8",
        "subTopic": "שיטת ההצבה",
        "question_text": "מערכת משוואות מורכבת מ- \\( x = 5 - y \\) ו- \\( 2x + 3y = 13 \\). מצאו את נקודת החיתוך.&rlm;",
        "options": ["(2, 3)", "(3, 2)", "(1, 4)", "(4, 1)"],
        "correctAnswer": 0,
        "hint": "הציבו את הביטוי בסוגריים והכפילו.",
        "solution_steps": [
            { "verbal_explanation": "נציב את הביטוי של המשתנה הראשון בתוך המשוואה השנייה.", "math_expression": "2(5 - y) + 3y = 13" },
            { "verbal_explanation": "נפתח את הסוגריים על ידי הכפלה.", "math_expression": "10 - 2y + 3y = 13" },
            { "verbal_explanation": "נכנס איברים דומים בצד שמאל.", "math_expression": "10 + y = 13" },
            { "verbal_explanation": "נחסר עשר משני הצדדים.", "math_expression": "y = 3" },
            { "verbal_explanation": "נציב את התוצאה במשוואה הראשונה.", "math_expression": "x = 5 - 3 = 2" }
        ],
        "final_answer": "(2, 3)"
    },
    {
        "topic": "system_of_equations_grade_8",
        "subTopic": "שיטת ההצבה",
        "question_text": "פתרו את המערכת: \\( y = -2x \\) ו- \\( 5x - y = 14 \\).&rlm;",
        "options": ["(2, -4)", "(4, -8)", "(1, -2)", "(-2, 4)"],
        "correctAnswer": 0,
        "hint": "שני סימני חיסור רצופים יהפכו לחיבור.",
        "solution_steps": [
            { "verbal_explanation": "נציב את הביטוי במשוואה השנייה.", "math_expression": "5x - (-2x) = 14" },
            { "verbal_explanation": "שני סימני חיסור רצופים הופכים לסימן חיבור.", "math_expression": "5x + 2x = 14" },
            { "verbal_explanation": "נחבר את המקדמים.", "math_expression": "7x = 14" },
            { "verbal_explanation": "נחלק בשבע.", "math_expression": "x = 2" },
            { "verbal_explanation": "נציב במשוואה הראשונה ונחשב את המשתנה השני.", "math_expression": "y = -2 \\times 2 = -4" }
        ],
        "final_answer": "(2, -4)"
    },
    {
        "topic": "system_of_equations_grade_8",
        "subTopic": "שיטת ההצבה",
        "question_text": "מצאו את הפתרון למערכת הבאה: \\( x = 2y + 1 \\) ו- \\( 3x - y = 18 \\).&rlm;",
        "options": ["(7, 3)", "(5, 2)", "(9, 4)", "(3, 1)"],
        "correctAnswer": 0,
        "hint": "הציבו בסוגריים ופתרו את המשוואה.",
        "solution_steps": [
            { "verbal_explanation": "נציב את הביטוי המייצג את המשתנה הראשון בתוך המשוואה השנייה.", "math_expression": "3(2y + 1) - y = 18" },
            { "verbal_explanation": "נפתח סוגריים.", "math_expression": "6y + 3 - y = 18" },
            { "verbal_explanation": "נכנס את האיברים.", "math_expression": "5y + 3 = 18" },
            { "verbal_explanation": "נחסר שלוש מהאגף הימני.", "math_expression": "5y = 15" },
            { "verbal_explanation": "נחלק בחמש ונקבל את הערך.", "math_expression": "y = 3" },
            { "verbal_explanation": "נחזור למשוואה הראשונה ונציב את המספר שקיבלנו.", "math_expression": "x = 2 \\times 3 + 1 = 7" }
        ],
        "final_answer": "(7, 3)"
    },
    {
        "topic": "system_of_equations_grade_8",
        "subTopic": "שיטת ההצבה",
        "question_text": "מערכת משוואות: \\( y = x \\) ו- \\( x + 2y = 15 \\). מהו הפתרון?&rlm;",
        "options": ["(5, 5)", "(3, 3)", "(6, 6)", "(15, 15)"],
        "correctAnswer": 0,
        "hint": "החליפו את המשתנה באות השנייה.",
        "solution_steps": [
            { "verbal_explanation": "משוואה אחת מראה שהמשתנים זהים. נציב משתנה אחד במקום השני.", "math_expression": "x + 2x = 15" },
            { "verbal_explanation": "נחבר את המקדמים.", "math_expression": "3x = 15" },
            { "verbal_explanation": "נחלק בשלוש.", "math_expression": "x = 5" },
            { "verbal_explanation": "מכיוון שהם שווים זה לזה, גם המשתנה השני יהיה זהה.", "math_expression": "y = 5" },
            { "verbal_explanation": "נרשום את הזוג הסדור.", "math_expression": "(5, 5)" }
        ],
        "final_answer": "(5, 5)"
    },
    {
        "topic": "system_of_equations_grade_8",
        "subTopic": "שיטת ההצבה",
        "question_text": "פתרו את המערכת הבאה: \\( x = -y \\) ו- \\( 4x + 5y = 7 \\).&rlm;",
        "options": ["(-7, 7)", "(7, -7)", "(-1, 1)", "(1, -1)"],
        "correctAnswer": 0,
        "hint": "הציבו את המשתנה השלילי בתוך המשוואה.",
        "solution_steps": [
            { "verbal_explanation": "נבצע הצבה של הביטוי השלילי לתוך המשוואה השנייה.", "math_expression": "4(-y) + 5y = 7" },
            { "verbal_explanation": "נפשט את הביטוי באגף השמאלי.", "math_expression": "-4y + 5y = 7" },
            { "verbal_explanation": "חיבור המקדמים מותיר אותנו עם הערך הישיר.", "math_expression": "y = 7" },
            { "verbal_explanation": "נציב את הערך במשוואה הראשונה ונהפוך את הסימן.", "math_expression": "x = -7" },
            { "verbal_explanation": "נרשום את הפתרון כזוג.", "math_expression": "(-7, 7)" }
        ],
        "final_answer": "(-7, 7)"
    },

    // ==========================================
    // תת נושא 2: שיטת השוואת מקדמים (10 שאלות)
    // ==========================================
    {
        "topic": "system_of_equations_grade_8",
        "subTopic": "שיטת השוואת מקדמים",
        "question_text": "פתרו את המערכת בשיטת השוואת מקדמים:<br>\\( x + y = 10 \\)<br>\\( x - y = 2 \\)&rlm;",
        "options": ["(6, 4)", "(5, 5)", "(8, 2)", "(7, 3)"],
        "correctAnswer": 0,
        "hint": "חברו את שתי המשוואות כדי להעלים משתנה אחד.",
        "solution_steps": [
            { "verbal_explanation": "מקדמי המשתנה השני הם נגדיים. פעולת חיבור תעלים אותם.", "math_expression": "(x + x) + (y - y) = 10 + 2" },
            { "verbal_explanation": "נרשום את המשוואה המאוחדת.", "math_expression": "2x = 12" },
            { "verbal_explanation": "נחלק בשתיים.", "math_expression": "x = 6" },
            { "verbal_explanation": "נציב את הערך באחת המשוואות המקוריות.", "math_expression": "6 + y = 10" },
            { "verbal_explanation": "נחסר שש ונקבל את התוצאה.", "math_expression": "y = 4" }
        ],
        "final_answer": "(6, 4)"
    },
    {
        "topic": "system_of_equations_grade_8",
        "subTopic": "שיטת השוואת מקדמים",
        "question_text": "מערכת משוואות:<br>\\( 3x + 2y = 12 \\)<br>\\( -3x + y = -3 \\)<br>מהו הפתרון?&rlm;",
        "options": ["(2, 3)", "(3, 2)", "(1, 4.5)", "(4, 0)"],
        "correctAnswer": 0,
        "hint": "חברו את המשוואות כדי לבטל את המשתנה הראשון.",
        "solution_steps": [
            { "verbal_explanation": "נחבר את המשוואות. המשתנה הראשון יתבטל.", "math_expression": "(3x - 3x) + (2y + y) = 12 - 3" },
            { "verbal_explanation": "המשוואה המצומצמת מכילה כעת משתנה אחד בלבד.", "math_expression": "3y = 9" },
            { "verbal_explanation": "נחלק בשלוש למציאת ערכו.", "math_expression": "y = 3" },
            { "verbal_explanation": "נציב את הערך במשוואה הראשונה ונתחיל לחשב.", "math_expression": "3x + 2 \\times 3 = 12" },
            { "verbal_explanation": "נחסר שש משני האגפים.", "math_expression": "3x = 6" },
            { "verbal_explanation": "התוצאה תיתן את המשתנה הנותר.", "math_expression": "x = 2" }
        ],
        "final_answer": "(2, 3)"
    },
    {
        "topic": "system_of_equations_grade_8",
        "subTopic": "שיטת השוואת מקדמים",
        "question_text": "נתונות המשוואות:<br>\\( x + 2y = 8 \\)<br>\\( x + y = 5 \\)<br>פתרו את המערכת.&rlm;",
        "options": ["(2, 3)", "(3, 2)", "(4, 2)", "(1, 3.5)"],
        "correctAnswer": 0,
        "hint": "חסרו את המשוואה השנייה מהראשונה.",
        "solution_steps": [
            { "verbal_explanation": "כאשר המקדמים זהים באותו סימן, נבצע פעולת חיסור בין המשוואות.", "math_expression": "(x - x) + (2y - y) = 8 - 5" },
            { "verbal_explanation": "חיסור המשוואות נותן את ערכו של המשתנה באופן ישיר.", "math_expression": "y = 3" },
            { "verbal_explanation": "כעת נציב את התוצאה באחת המשוואות הפשוטות.", "math_expression": "x + 3 = 5" },
            { "verbal_explanation": "נחסר שלוש כדי למצוא את המשתנה השני.", "math_expression": "x = 2" },
            { "verbal_explanation": "נרשום את הפתרון כזוג סדור.", "math_expression": "(2, 3)" }
        ],
        "final_answer": "(2, 3)"
    },
    {
        "topic": "system_of_equations_grade_8",
        "subTopic": "שיטת השוואת מקדמים",
        "question_text": "מערכת משוואות:<br>\\( 2x + 5y = 20 \\)<br>\\( 2x - y = 8 \\)<br>מהו הפתרון?&rlm;",
        "options": ["(5, 2)", "(2, 5)", "(4, 2.4)", "(6, 4)"],
        "correctAnswer": 0,
        "hint": "חיסור משוואות יבטל את המשתנה הראשון. חיסור מספר שלילי הופך לחיבור.",
        "solution_steps": [
            { "verbal_explanation": "למשתנה הראשון יש מקדם זהה בשתי המשוואות. נחסר את המשוואה השנייה מהראשונה.", "math_expression": "(2x - 2x) + (5y - (-y)) = 20 - 8" },
            { "verbal_explanation": "שני מינוסים רצופים הופכים לסימן חיובי.", "math_expression": "6y = 12" },
            { "verbal_explanation": "נחלק בשש למציאת התשובה למשתנה.", "math_expression": "y = 2" },
            { "verbal_explanation": "נציב את הערך במשוואה השנייה.", "math_expression": "2x - 2 = 8" },
            { "verbal_explanation": "נוסיף שתיים לשני הצדדים.", "math_expression": "2x = 10" },
            { "verbal_explanation": "נחלק בשתיים לקבלת הפתרון המלא.", "math_expression": "x = 5" }
        ],
        "final_answer": "(5, 2)"
    },
    {
        "topic": "system_of_equations_grade_8",
        "subTopic": "שיטת השוואת מקדמים",
        "question_text": "פתרו את המערכת הבאה:<br>\\( 4x + 3y = 17 \\)<br>\\( 2x + 3y = 13 \\)&rlm;",
        "options": ["(2, 3)", "(3, 2)", "(1, 4.33)", "(4, 1)"],
        "correctAnswer": 0,
        "hint": "בצעו חיסור משוואות.",
        "solution_steps": [
            { "verbal_explanation": "נבצע חיסור של המשוואה התחתונה מהמשוואה העליונה.", "math_expression": "(4x - 2x) + (3y - 3y) = 17 - 13" },
            { "verbal_explanation": "נכתוב את משוואת ההפרש.", "math_expression": "2x = 4" },
            { "verbal_explanation": "נחלק בשתיים.", "math_expression": "x = 2" },
            { "verbal_explanation": "נציב את הערך במשוואה השנייה.", "math_expression": "2 \\times 2 + 3y = 13" },
            { "verbal_explanation": "נחסר ארבע ונחלק בשלוש.", "math_expression": "3y = 9 \\Rightarrow y = 3" }
        ],
        "final_answer": "(2, 3)"
    },
    {
        "topic": "system_of_equations_grade_8",
        "subTopic": "שיטת השוואת מקדמים",
        "question_text": "מערכת משוואות:<br>\\( 5x - 2y = 16 \\)<br>\\( 3x + 2y = 16 \\)<br>מהו הפתרון למערכת זו?&rlm;",
        "options": ["(4, 2)", "(2, 4)", "(5, 0.5)", "(3, -0.5)"],
        "correctAnswer": 0,
        "hint": "המקדמים נגדיים, חברו את המשוואות.",
        "solution_steps": [
            { "verbal_explanation": "המקדמים של המשתנה השני הם נגדיים. לכן, נחבר את שתי המשוואות.", "math_expression": "(5x + 3x) + (-2y + 2y) = 16 + 16" },
            { "verbal_explanation": "נחשב את הסכומים.", "math_expression": "8x = 32" },
            { "verbal_explanation": "נחלק בשמונה למציאת התוצאה.", "math_expression": "x = 4" },
            { "verbal_explanation": "נציב את המספר שקיבלנו במשוואה השנייה.", "math_expression": "3 \\times 4 + 2y = 16" },
            { "verbal_explanation": "נחסר שנים עשר ונחלק בשתיים.", "math_expression": "2y = 4 \\Rightarrow y = 2" }
        ],
        "final_answer": "(4, 2)"
    },
    {
        "topic": "system_of_equations_grade_8",
        "subTopic": "שיטת השוואת מקדמים",
        "question_text": "פתרו את המערכת:<br>\\( x + 3y = 11 \\)<br>\\( -x + 2y = 4 \\)&rlm;",
        "options": ["(2, 3)", "(3, 2)", "(5, 2)", "(-1, 4)"],
        "correctAnswer": 0,
        "hint": "חברו את המשוואות יחד.",
        "solution_steps": [
            { "verbal_explanation": "המקדמים של המשתנה הראשון מנוגדים זה לזה.", "math_expression": "x + (-x) = 0" },
            { "verbal_explanation": "נחבר את שתי המשוואות כדי לבטל את המשתנה הראשון.", "math_expression": "3y + 2y = 11 + 4" },
            { "verbal_explanation": "נרשום את המשוואה הפשוטה.", "math_expression": "5y = 15" },
            { "verbal_explanation": "נחלק בחמש ונקבל את התוצאה.", "math_expression": "y = 3" },
            { "verbal_explanation": "נציב במשוואה הראשונה ונחשב את המשתנה השני.", "math_expression": "x + 3 \\times 3 = 11" },
            { "verbal_explanation": "נחסר תשע.", "math_expression": "x = 2" }
        ],
        "final_answer": "(2, 3)"
    },
    {
        "topic": "system_of_equations_grade_8",
        "subTopic": "שיטת השוואת מקדמים",
        "question_text": "מצאו את הפתרון למערכת הבאה:<br>\\( x - y = 5 \\)<br>\\( 2x + y = 16 \\)&rlm;",
        "options": ["(7, 2)", "(8, 3)", "(6, 1)", "(9, 4)"],
        "correctAnswer": 0,
        "hint": "חברו את המשוואות.",
        "solution_steps": [
            { "verbal_explanation": "המקדמים של המשתנה השני נגדיים אחד לשני.", "math_expression": "-y + y = 0" },
            { "verbal_explanation": "נחבר את שתי המשוואות באופן ישיר.", "math_expression": "x + 2x = 5 + 16" },
            { "verbal_explanation": "החיבור יוצר משוואה פשוטה.", "math_expression": "3x = 21" },
            { "verbal_explanation": "נחלק בשלוש.", "math_expression": "x = 7" },
            { "verbal_explanation": "נציב במשוואה הראשונה ונפתור עבור המשתנה השני.", "math_expression": "7 - y = 5 \\Rightarrow y = 2" }
        ],
        "final_answer": "(7, 2)"
    },
    {
        "topic": "system_of_equations_grade_8",
        "subTopic": "שיטת השוואת מקדמים",
        "question_text": "פתרו את המערכת הבאה:<br>\\( 3x - 4y = 10 \\)<br>\\( 5x + 4y = 22 \\)&rlm;",
        "options": ["(4, 0.5)", "(4, 1)", "(2, -1)", "(5, 1.25)"],
        "correctAnswer": 0,
        "hint": "חברו את המשוואות כדי לבטל את המשתנה השני.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בשיטת החיבור מכיוון שהמקדמים הם נגדיים אחד לשני.", "math_expression": "(3x + 5x) + (-4y + 4y) = 10 + 22" },
            { "verbal_explanation": "המשוואה החדשה תכלול רק משתנה יחיד.", "math_expression": "8x = 32" },
            { "verbal_explanation": "נחלק בשמונה למציאת הפתרון.", "math_expression": "x = 4" },
            { "verbal_explanation": "נציב את הערך במשוואה השנייה כדי לחשב את החלק הנותר.", "math_expression": "5 \\times 4 + 4y = 22" },
            { "verbal_explanation": "נחסר עשרים ונחלק בארבע.", "math_expression": "4y = 2 \\Rightarrow y = 0.5" }
        ],
        "final_answer": "(4, 0.5)"
    },
    {
        "topic": "system_of_equations_grade_8",
        "subTopic": "שיטת השוואת מקדמים",
        "question_text": "מערכת משוואות לתרגול:<br>\\( 6x + y = 15 \\)<br>\\( 6x - y = 9 \\)<br>מהו הפתרון?&rlm;",
        "options": ["(2, 3)", "(3, -3)", "(1.5, 6)", "(2.5, 0)"],
        "correctAnswer": 0,
        "hint": "חברו את המשוואות יחד.",
        "solution_steps": [
            { "verbal_explanation": "נחבר את שתי המשוואות כדי לבטל את המשתנה שהמקדמים שלו נגדיים.", "math_expression": "(6x + 6x) + (y - y) = 15 + 9" },
            { "verbal_explanation": "נרשום את המשוואה המחוברת.", "math_expression": "12x = 24" },
            { "verbal_explanation": "נחלק בשנים עשר.", "math_expression": "x = 2" },
            { "verbal_explanation": "נציב במשוואה הראשונה ונגלה את המשתנה השני.", "math_expression": "6 \\times 2 + y = 15" },
            { "verbal_explanation": "נחסר שנים עשר.", "math_expression": "y = 3" }
        ],
        "final_answer": "(2, 3)"
    },

    // ==========================================
    // תת נושא 3: פתרון גרף (10 שאלות)
    // ==========================================
    {
        "topic": "system_of_equations_grade_8",
        "subTopic": "פתרון גרף",
        "question_text": "במערכת צירים משורטטים הגרפים של שתי הפונקציות: \\( y = x + 2 \\) ו- \\( y = -x + 6 \\). מהי נקודת החיתוך שלהם (הפתרון)?&rlm;",
        "options": ["(2, 4)", "(4, 2)", "(0, 2)", "(3, 3)"],
        "correctAnswer": 0,
        "hint": "השוו את שני הביטויים זה לזה ופתרו את המשוואה שמתקבלת.",
        "solution_steps": [
            { "verbal_explanation": "נקודת החיתוך היא המקום שבו שני הגרפים מגיעים לאותו הערך.", "math_expression": "x + 2 = -x + 6" },
            { "verbal_explanation": "נוסיף את המשתנה לשני הצדדים ונחסר שתיים משני הצדדים.", "math_expression": "2x = 4" },
            { "verbal_explanation": "נחלק בשתיים למציאת הערך האופקי של נקודת המפגש.", "math_expression": "x = 2" },
            { "verbal_explanation": "נציב את הערך שמצאנו באחת הפונקציות כדי למצוא את הגובה.", "math_expression": "y = 2 + 2 = 4" },
            { "verbal_explanation": "נרשום את הנקודה במישור הצירים.", "math_expression": "(2, 4)" }
        ],
        "final_answer": "(2, 4)"
    },
    {
        "topic": "system_of_equations_grade_8",
        "subTopic": "פתרון גרף",
        "question_text": "כמה פתרונות יש למערכת המשוואות הבאה המיוצגת על ידי שני ישרים: \\( y = 3x + 1 \\) ו- \\( y = 3x - 5 \\)?&rlm;",
        "options": ["0 פתרונות", "פתרון אחד יחיד", "אינסוף פתרונות", "2 פתרונות"],
        "correctAnswer": 0,
        "hint": "בדקו את השיפוע של שתי הפונקציות.",
        "solution_steps": [
            { "verbal_explanation": "נבחן את המקדמים של המשתנה בשתי המשוואות.", "math_expression": "m = 3 \\quad , \\quad m = 3" },
            { "verbal_explanation": "המקדמים זהים לחלוטין. המשמעות היא שהישרים מקבילים.", "math_expression": "\\parallel" },
            { "verbal_explanation": "קווים מקבילים שומרים על מרחק קבוע זה מזה ולעולם אינם נפגשים.", "math_expression": "\\neq" },
            { "verbal_explanation": "כיוון שאין להם נקודת חיתוך, למערכת המשוואות הזו אין פתרון.", "math_expression": "0" }
        ],
        "final_answer": "0 פתרונות"
    },
    {
        "topic": "system_of_equations_grade_8",
        "subTopic": "פתרון גרף",
        "question_text": "נתונות המשוואות \\( y = 2x \\) ו- \\( 2y = 4x \\). אם תציירו אותן על גרף, כמה פתרונות יהיו למערכת?&rlm;",
        "options": ["אינסוף פתרונות (קווים מתלכדים)", "0 פתרונות (קווים מקבילים)", "פתרון אחד בראשית הצירים", "פתרון אחד בנקודה אחרת"],
        "correctAnswer": 0,
        "hint": "חלקו את המשוואה השנייה בשתיים והשוו לראשונה.",
        "solution_steps": [
            { "verbal_explanation": "נתבונן במשוואה השנייה ונחלק את שני צידיה בשתיים.", "math_expression": "2y = 4x \\Rightarrow y = 2x" },
            { "verbal_explanation": "אנו רואים ששתי המשוואות זהות לחלוטין. מדובר באותו קו ישר שמצויר על עצמו.", "math_expression": "y = 2x \\iff y = 2x" },
            { "verbal_explanation": "כאשר הישרים מונחים זה על זה, כל נקודה על הישר היא נקודת מפגש ופתרון משותף.", "math_expression": "\\infty" },
            { "verbal_explanation": "לכן ישנם אינסוף פתרונות למערכת זו.", "math_expression": "\\infty" }
        ],
        "final_answer": "אינסוף פתרונות (קווים מתלכדים)"
    },
    {
        "topic": "system_of_equations_grade_8",
        "subTopic": "פתרון גרף",
        "question_text": "מערכת משוואות מורכבת מהישר \\( y = x - 3 \\) ומהציר שמשוואתו היא \\( x = 0 \\). מהי נקודת החיתוך בגרף?&rlm;",
        "options": ["(0, -3)", "(-3, 0)", "(3, 0)", "(0, 3)"],
        "correctAnswer": 0,
        "hint": "הציבו את הערך האפס בתוך המשוואה.",
        "solution_steps": [
            { "verbal_explanation": "משוואת הציר קובעת בצורה מפורשת את ערכו של המשתנה האופקי.", "math_expression": "x = 0" },
            { "verbal_explanation": "נציב את הערך במשוואה הראשונה כדי לחשב את הגובה של נקודת המפגש.", "math_expression": "y = 0 - 3" },
            { "verbal_explanation": "החישוב מראה שערך הפלט הוא שלילי.", "math_expression": "y = -3" },
            { "verbal_explanation": "הנקודה מיוצגת על ידי צירוף הערכים לזוג סדור אחד.", "math_expression": "(0, -3)" }
        ],
        "final_answer": "(0, -3)"
    },
    {
        "topic": "system_of_equations_grade_8",
        "subTopic": "פתרון גרף",
        "question_text": "נתונים הגרפים של \\( y = 2x \\) ושל הישר האופקי \\( y = 4 \\). מהי נקודת החיתוך?&rlm;",
        "options": ["(2, 4)", "(4, 8)", "(4, 2)", "(0, 0)"],
        "correctAnswer": 0,
        "hint": "הציבו את הערך של המשתנה האנכי בתוך המשוואה השנייה.",
        "solution_steps": [
            { "verbal_explanation": "אחת המשוואות קובעת שערכו של המשתנה האנכי קבוע וידוע.", "math_expression": "y = 4" },
            { "verbal_explanation": "כדי למצוא היכן הישר השני מגיע לגובה זה, נציב את הערך במשוואה שלו.", "math_expression": "4 = 2x" },
            { "verbal_explanation": "נחלק את המשוואה בשתיים כדי למצוא את המשתנה האופקי.", "math_expression": "4 \\div 2 = 2" },
            { "verbal_explanation": "המיקום נכתב כזוג סדור.", "math_expression": "(2, 4)" }
        ],
        "final_answer": "(2, 4)"
    },
    {
        "topic": "system_of_equations_grade_8",
        "subTopic": "פתרון גרף",
        "question_text": "מציאת חיתוך של ישר עולה וישר יורד. פתרו את המערכת: \\( y = -2x + 8 \\) ו- \\( y = x - 1 \\).&rlm;",
        "options": ["(3, 2)", "(2, 4)", "(4, 3)", "(3, 5)"],
        "correctAnswer": 0,
        "hint": "השוו בין שתי המשוואות ופתרו.",
        "solution_steps": [
            { "verbal_explanation": "בנקודת המפגש של הגרפים, הגובה שלהם שווה. נשווה את שני הביטויים.", "math_expression": "-2x + 8 = x - 1" },
            { "verbal_explanation": "נוסיף את המשתנים לאגף אחד ונסדר את המשוואה.", "math_expression": "9 = 3x" },
            { "verbal_explanation": "נחלק בשלוש למציאת המיקום האופקי של הפגישה.", "math_expression": "x = 3" },
            { "verbal_explanation": "נציב במשוואה השנייה כדי לחשב את הגובה של הפגישה.", "math_expression": "y = 3 - 1 = 2" },
            { "verbal_explanation": "נקודת החיתוך המשותפת.", "math_expression": "(3, 2)" }
        ],
        "final_answer": "(3, 2)"
    },
    {
        "topic": "system_of_equations_grade_8",
        "subTopic": "פתרון גרף",
        "question_text": "נתונים שני קווים ישרים שמשוואותיהם הן: \\( y = 3x \\) ו- \\( y = -x \\). היכן הקווים הללו נחתכים?&rlm;",
        "options": ["(0, 0)", "(1, 3)", "(-1, 1)", "הם מקבילים ולא נחתכים"],
        "correctAnswer": 0,
        "hint": "השוו את המשוואות זו לזו ומצאו את הפתרון המשותף.",
        "solution_steps": [
            { "verbal_explanation": "נשווה בין שני הביטויים כדי למצוא את מיקום המפגש.", "math_expression": "3x = -x" },
            { "verbal_explanation": "נוסיף את המשתנה לאגף השני.", "math_expression": "4x = 0" },
            { "verbal_explanation": "נחלק בארבע.", "math_expression": "x = 0" },
            { "verbal_explanation": "נציב בכל אחת מהמשוואות ונקבל את הערך השני.", "math_expression": "y = 0" },
            { "verbal_explanation": "הקווים חותכים זה את זה בראשית הצירים.", "math_expression": "(0, 0)" }
        ],
        "final_answer": "(0, 0)"
    },
    {
        "topic": "system_of_equations_grade_8",
        "subTopic": "פתרון גרף",
        "question_text": "מערכת משוואות מורכבת מישר אופקי \\( y = 5 \\) ומישר אנכי \\( x = 2 \\). מהי נקודת החיתוך בגרף?&rlm;",
        "options": ["(2, 5)", "(5, 2)", "(0, 0)", "אין פתרון"],
        "correctAnswer": 0,
        "hint": "קראו את הנתונים הישירים שמספקות המשוואות הללו.",
        "solution_steps": [
            { "verbal_explanation": "משוואה של קו אנכי מספקת לנו באופן מיידי את המיקום האופקי.", "math_expression": "x = 2" },
            { "verbal_explanation": "משוואה של קו אופקי מספקת לנו במקביל את הגובה של נקודת המפגש.", "math_expression": "y = 5" },
            { "verbal_explanation": "הצירוף של שניהם מרכיב את נקודת המפגש היחידה.", "math_expression": "(2, 5)" }
        ],
        "final_answer": "(2, 5)"
    },
    {
        "topic": "system_of_equations_grade_8",
        "subTopic": "פתרון גרף",
        "question_text": "מציאת חיתוך: \\( y = 0.5x + 1 \\) ו- \\( y = x \\). מהי הנקודה המשותפת לשני הגרפים?&rlm;",
        "options": ["(2, 2)", "(1, 1.5)", "(4, 4)", "(0, 0)"],
        "correctAnswer": 0,
        "hint": "השוו בין המשוואות ופתרו עבור המשתנה.",
        "solution_steps": [
            { "verbal_explanation": "נשווה בין פונקציה אחת לשנייה.", "math_expression": "0.5x + 1 = x" },
            { "verbal_explanation": "כדי לרכז את המשתנים יחד, נחסר חצי מהאגף הימני.", "math_expression": "1 = 0.5x" },
            { "verbal_explanation": "נחלק את שני האגפים בחצי.", "math_expression": "x = 2" },
            { "verbal_explanation": "נציב במשוואה השנייה.", "math_expression": "y = 2" },
            { "verbal_explanation": "הנקודה בגרף שבה הישרים ייפגשו.", "math_expression": "(2, 2)" }
        ],
        "final_answer": "(2, 2)"
    },
    {
        "topic": "system_of_equations_grade_8",
        "subTopic": "פתרון גרף",
        "question_text": "מבחינה גרפית, מהי המשמעות של מערכת משוואות שאין לה פתרון כלל?&rlm;",
        "options": ["הגרפים הם קווים ישרים מקבילים", "הגרפים הם קווים מתלכדים", "הגרפים נחתכים בראשית הצירים", "הגרפים הם קווים עקומים"],
        "correctAnswer": 0,
        "hint": "משמעות חוסר הפתרון היא שאין להם אף נקודת מפגש.",
        "solution_steps": [
            { "verbal_explanation": "כאשר אומרים שלמערכת אין פתרון, המשמעות היא שקבוצת נקודות החיתוך היא קבוצה ריקה.", "math_expression": "(x, y) = \\emptyset" },
            { "verbal_explanation": "השיפוע של הפונקציות הללו חייב להיות זהה.", "math_expression": "m_1 = m_2" },
            { "verbal_explanation": "נקודת החיתוך של הפונקציות עם הציר האנכי חייבת להיות שונה.", "math_expression": "b_1 \\neq b_2" },
            { "verbal_explanation": "תכונות אלו מגדירות קווים ישרים שלעולם אינם נחתכים, כלומר קווים מקבילים.", "math_expression": "\\parallel" }
        ],
        "final_answer": "הגרפים הם קווים ישרים מקבילים"
    },

    // ==========================================
    // תת נושא 4: בעיות מילוליות בשני נעלמים (10 שאלות)
    // ==========================================
    {
        "topic": "system_of_equations_grade_8",
        "subTopic": "בעיות מילוליות בשני נעלמים",
        "question_text": "סכום של שני מספרים הוא 30, וההפרש ביניהם הוא 10. מהם שני המספרים?&rlm;",
        "options": ["20, 10", "15, 15", "25, 5", "22, 8"],
        "correctAnswer": 0,
        "hint": "סמנו את המספרים במשתנים, בנו שתי משוואות ופתרו בעזרת חיבור המשוואות.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר שני נעלמים. המשוואה הראשונה מתארת את הסכום שלהם.", "math_expression": "x + y = 30" },
            { "verbal_explanation": "המשוואה השנייה מתארת את ההפרש ביניהם.", "math_expression": "x - y = 10" },
            { "verbal_explanation": "נחבר את המשוואות כדי לבטל את המשתנה השני.", "math_expression": "(x + x) + (y - y) = 30 + 10" },
            { "verbal_explanation": "המשוואה החדשה מבודדת לנו את המשתנה הראשון. נחלק בשתיים למציאתו.", "math_expression": "2x = 40 \\Rightarrow x = 20" },
            { "verbal_explanation": "נציב חזרה כדי למצוא את המשתנה השני.", "math_expression": "20 + y = 30 \\Rightarrow y = 10" }
        ],
        "final_answer": "20, 10"
    },
    {
        "topic": "system_of_equations_grade_8",
        "subTopic": "בעיות מילוליות בשני נעלמים",
        "question_text": "דני קנה בחנות 2 עטים ו-3 עפרונות ושילם 13 שקלים בסך הכל. רותי קנתה באותה חנות עט אחד ו-3 עפרונות ושילמה 8 שקלים. כמה עולה עט אחד?&rlm;",
        "options": ["5", "3", "2", "4"],
        "correctAnswer": 0,
        "hint": "חסרו את הרכישה של רותי מן הרכישה של דני למציאת ההפרש.",
        "solution_steps": [
            { "verbal_explanation": "נסמן את מחיר העט כמשתנה ראשון ואת מחיר העיפרון כמשתנה שני. זו משוואת דני.", "math_expression": "2x + 3y = 13" },
            { "verbal_explanation": "זו המשוואה שמתארת את הקנייה של רותי.", "math_expression": "x + 3y = 8" },
            { "verbal_explanation": "מכיוון שכמות העפרונות זהה, נחסר את משוואת רותי ממשוואת דני.", "math_expression": "(2x - x) + (3y - 3y) = 13 - 8" },
            { "verbal_explanation": "החיסור מגלה לנו מיד את ההפרש שהוא המחיר של עט בודד.", "math_expression": "x = 5" }
        ],
        "final_answer": "5"
    },
    {
        "topic": "system_of_equations_grade_8",
        "subTopic": "בעיות מילוליות בשני נעלמים",
        "question_text": "בפארק שעשועים כרטיס מבוגר וכרטיס ילד נמכרים במחירים שונים. שני מבוגרים וילד שילמו 50 שקלים יחד. מבוגר וילד שילמו 30 שקלים יחד. מהו מחירו של כרטיס למבוגר? ומה מחירו של כרטיס לילד?&rlm;",
        "options": ["מבוגר 20, ילד 10", "מבוגר 25, ילד 5", "מבוגר 15, ילד 15", "מבוגר 30, ילד 0"],
        "correctAnswer": 0,
        "hint": "חסרו את משוואת הרכישה השנייה מהראשונה למציאת ההפרש.",
        "solution_steps": [
            { "verbal_explanation": "המשוואה הראשונה מתארת את העלות של שני מבוגרים וילד אחד.", "math_expression": "2x + y = 50" },
            { "verbal_explanation": "המשוואה השנייה מתארת את העלות של מבוגר יחיד וילד יחיד.", "math_expression": "x + y = 30" },
            { "verbal_explanation": "נחסר את המשוואה השנייה מן הראשונה כדי למצוא את ההפרש בעלויות.", "math_expression": "(2x - x) + (y - y) = 50 - 30" },
            { "verbal_explanation": "מצאנו את עלות כרטיס המבוגר.", "math_expression": "x = 20" },
            { "verbal_explanation": "נציב את המחיר במשוואה השנייה למציאת מחיר הילד.", "math_expression": "20 + y = 30 \\Rightarrow y = 10" }
        ],
        "final_answer": "מבוגר 20, ילד 10"
    },
    {
        "topic": "system_of_equations_grade_8",
        "subTopic": "בעיות מילוליות בשני נעלמים",
        "question_text": "בחווה יש תרנגולות ופרות. יש בסך הכל 10 חיות (ראשים). בספירת הרגליים מתקבלות 26 רגליים. כמה תרנגולות וכמה פרות יש בחווה?&rlm;",
        "options": ["7 תרנגולות, 3 פרות", "5 תרנגולות, 5 פרות", "6 תרנגולות, 4 פרות", "8 תרנגולות, 2 פרות"],
        "correctAnswer": 0,
        "hint": "בנו שתי משוואות ופתרו בשיטת ההצבה.",
        "solution_steps": [
            { "verbal_explanation": "המשוואה הראשונה סופרת את הראשים בחווה.", "math_expression": "x + y = 10" },
            { "verbal_explanation": "המשוואה השנייה סופרת את הרגליים. לתרנגולת יש שתיים ולפרה ארבע.", "math_expression": "2x + 4y = 26" },
            { "verbal_explanation": "נבודד את המשתנה הראשון ונציב אותו בשנייה.", "math_expression": "x = 10 - y" },
            { "verbal_explanation": "נבצע את ההצבה במשוואת הרגליים ונפתח סוגריים.", "math_expression": "2(10 - y) + 4y = 26 \\Rightarrow 20 - 2y + 4y = 26" },
            { "verbal_explanation": "נכנס איברים ונחסר עשרים מן האגף השני.", "math_expression": "2y = 6 \\Rightarrow y = 3" },
            { "verbal_explanation": "נשלים את מספר התרנגולות על פי המשוואה המקורית.", "math_expression": "x = 10 - 3 = 7" }
        ],
        "final_answer": "7 תרנגולות, 3 פרות"
    },
    {
        "topic": "system_of_equations_grade_8",
        "subTopic": "בעיות מילוליות בשני נעלמים",
        "question_text": "היקף של מלבן הוא 20 סנטימטרים. אורך המלבן גדול מהרוחב ב-2 סנטימטרים. מהן מידות המלבן, ומהו שטחו?&rlm;",
        "options": ["אורך 6, רוחב 4, שטח 24", "אורך 7, רוחב 5, שטח 35", "אורך 8, רוחב 2, שטח 16", "אורך 5, רוחב 3, שטח 15"],
        "correctAnswer": 0,
        "hint": "היקף מלבן שווה לסכום של הפעמיים אורך ופעמיים רוחב. ההפרש בין האורך לרוחב הוא שתיים.",
        "solution_steps": [
            { "verbal_explanation": "סכום צלע ארוכה וקצרה הוא מחצית ההיקף.", "math_expression": "x + y = 10" },
            { "verbal_explanation": "ההפרש בין הצלעות הוא שני סנטימטרים.", "math_expression": "x - y = 2" },
            { "verbal_explanation": "נחבר את שתי המשוואות יחד למציאת המשתנה הגדול יותר.", "math_expression": "2x = 12 \\Rightarrow x = 6" },
            { "verbal_explanation": "נציב למציאת הרוחב של המלבן.", "math_expression": "6 + y = 10 \\Rightarrow y = 4" },
            { "verbal_explanation": "כדי למצוא שטח, נכפול את המידות זו בזו.", "math_expression": "6 \\times 4 = 24" }
        ],
        "final_answer": "אורך 6, רוחב 4, שטח 24"
    },
    {
        "topic": "system_of_equations_grade_8",
        "subTopic": "בעיות מילוליות בשני נעלמים",
        "question_text": "גיל האב וגיל בנו מסתכמים יחד ל-40 שנים. גיל האב גדול פי 3 מגיל הבן. בני כמה הם?&rlm;",
        "options": ["האב בן 30 והבן בן 10", "האב בן 32 והבן בן 8", "האב בן 36 והבן בן 12", "האב בן 35 והבן בן 5"],
        "correctAnswer": 0,
        "hint": "הציבו את גיל האב כמופע של גיל הבן בתוך משוואת הסכום.",
        "solution_steps": [
            { "verbal_explanation": "המשוואה הראשונה מתארת את הסכום של שני הגילים יחד.", "math_expression": "x + y = 40" },
            { "verbal_explanation": "המשוואה השנייה מתארת את היחס בין הגילים.", "math_expression": "x = 3y" },
            { "verbal_explanation": "נשתמש בשיטת ההצבה ונחליף את המשתנה הראשון בביטוי מהמשוואה השנייה.", "math_expression": "3y + y = 40" },
            { "verbal_explanation": "נחבר את האיברים ונחלק למציאת גילו של הבן.", "math_expression": "4y = 40 \\Rightarrow y = 10" },
            { "verbal_explanation": "נחשב את גיל האב לפי היחס למציאת הפתרון.", "math_expression": "x = 3 \\times 10 = 30" }
        ],
        "final_answer": "האב בן 30 והבן בן 10"
    },
    {
        "topic": "system_of_equations_grade_8",
        "subTopic": "בעיות מילוליות בשני נעלמים",
        "question_text": "מספר אחד גדול מהשני פי 5. ההפרש בין המספר הגדול למספר הקטן הוא 20. מהם שני המספרים?&rlm;",
        "options": ["25, 5", "30, 10", "40, 8", "20, 4"],
        "correctAnswer": 0,
        "hint": "בנו משוואות לחישוב ההפרש ולחישוב היחס.",
        "solution_steps": [
            { "verbal_explanation": "נרכיב משוואה שמציגה את היחס שבין שני המספרים.", "math_expression": "x = 5y" },
            { "verbal_explanation": "נרכיב משוואה שנייה מנתון ההפרש שניתן.", "math_expression": "x - y = 20" },
            { "verbal_explanation": "נציב את התבנית של המשתנה הגדול לתוך המשוואה השנייה.", "math_expression": "5y - y = 20" },
            { "verbal_explanation": "נחשב את החיסור ונחלק לקבלת המספר הקטן.", "math_expression": "4y = 20 \\Rightarrow y = 5" },
            { "verbal_explanation": "נחשב את המספר הגדול בעזרת המכפלה.", "math_expression": "x = 5 \\times 5 = 25" }
        ],
        "final_answer": "25, 5"
    },
    {
        "topic": "system_of_equations_grade_8",
        "subTopic": "בעיות מילוליות בשני נעלמים",
        "question_text": "לקוח קנה 5 תפוחים ו-2 בננות בסכום של 24 שקלים. לקוח אחר קנה באותה חנות 5 תפוחים ובננה אחת בסכום של 21 שקלים. מה מחירו של פריט מסוג בננה?&rlm;",
        "options": ["3", "2", "4", "5"],
        "correctAnswer": 0,
        "hint": "בצעו חיסור של משוואת הקנייה השנייה מן הראשונה.",
        "solution_steps": [
            { "verbal_explanation": "נרשום משוואה לקנייה הראשונה.", "math_expression": "5x + 2y = 24" },
            { "verbal_explanation": "נרשום משוואה לקנייה השנייה.", "math_expression": "5x + y = 21" },
            { "verbal_explanation": "נחסר בין המשוואות כדי למצוא את ההפרש בעלות, שנוצר מהבננה הנוספת.", "math_expression": "(5x - 5x) + (2y - y) = 24 - 21" },
            { "verbal_explanation": "החיסור חושף את המחיר של המשתנה המבוקש.", "math_expression": "y = 3" }
        ],
        "final_answer": "3"
    },
    {
        "topic": "system_of_equations_grade_8",
        "subTopic": "בעיות מילוליות בשני נעלמים",
        "question_text": "בחניון יש בסך הכל 50 כלי רכב (מכוניות ואופנועים). נספרו 160 גלגלים בסך הכל בחניון. כמה מכוניות וכמה אופנועים יש בחניון?&rlm;",
        "options": ["30 מכוניות, 20 אופנועים", "25 מכוניות, 25 אופנועים", "35 מכוניות, 15 אופנועים", "20 מכוניות, 30 אופנועים"],
        "correctAnswer": 0,
        "hint": "הציבו את מספר כלי הרכב הכולל במשוואת הגלגלים (4 למכונית, 2 לאופנוע).",
        "solution_steps": [
            { "verbal_explanation": "המשוואה הראשונה סופרת את כלי הרכב הכוללים.", "math_expression": "x + y = 50" },
            { "verbal_explanation": "המשוואה השנייה סופרת את כמות הגלגלים הכוללת בחניון.", "math_expression": "4x + 2y = 160" },
            { "verbal_explanation": "נבודד מהמשוואה הראשונה את המשתנה ונציב במשוואה השנייה.", "math_expression": "y = 50 - x" },
            { "verbal_explanation": "נבצע את ההצבה ונפתח סוגריים.", "math_expression": "4x + 2(50 - x) = 160 \\Rightarrow 4x + 100 - 2x = 160" },
            { "verbal_explanation": "נכנס איברים ונחסר לקבלת הפתרון.", "math_expression": "2x = 60 \\Rightarrow x = 30" },
            { "verbal_explanation": "נחשב את כמות כלי הרכב מהסוג השני.", "math_expression": "y = 50 - 30 = 20" }
        ],
        "final_answer": "30 מכוניות, 20 אופנועים"
    },
    {
        "topic": "system_of_equations_grade_8",
        "subTopic": "בעיות מילוליות בשני נעלמים",
        "question_text": "מפעל ארז 65 מוצרים לתוך 8 קופסאות. חלקן קופסאות גדולות עם 10 מוצרים וחלקן קטנות עם 5 מוצרים. כמה קופסאות גדולות מולאו?&rlm;",
        "options": ["5", "3", "4", "6"],
        "correctAnswer": 0,
        "hint": "בנו מערכת משוואות כפי שעשיתם בבעיית כלי הרכב, ופתרו.",
        "solution_steps": [
            { "verbal_explanation": "סכום הקופסאות משני הסוגים יחד הוא שמונה.", "math_expression": "x + y = 8" },
            { "verbal_explanation": "תכולת כלל הקופסאות יחד מגיעה לשישים וחמישה מוצרים.", "math_expression": "10x + 5y = 65" },
            { "verbal_explanation": "נבודד את המשתנה השני כדי להציב אותו ולהישאר עם המשתנה שאנו מחפשים.", "math_expression": "y = 8 - x" },
            { "verbal_explanation": "נציב את הביטוי בתוך משוואת התכולה ונפתח סוגריים.", "math_expression": "10x + 5(8 - x) = 65 \\Rightarrow 10x + 40 - 5x = 65" },
            { "verbal_explanation": "נכנס איברים ונחסר את המספר החופשי מן האגף הימני.", "math_expression": "5x = 25" },
            { "verbal_explanation": "נחלק לקבלת מספר הקופסאות מן הסוג הראשון.", "math_expression": "x = 5" }
        ],
        "final_answer": "5"
    }
];