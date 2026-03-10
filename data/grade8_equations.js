const questionsDB = [
    // ==============================================================
    // --- תת נושא 1: משוואות עם מכנה מספרי (20 שאלות) ---
    // ==============================================================
    {
        "id": 1,
        "subTopic": "משוואות עם מכנה מספרי",
        "difficulty": "Low",
        "question_text": "פתרו את המשוואה הבאה:<br><strong>x / 4 = 3</strong><br><div style='text-align:center; margin:15px 0;'><svg width='100' height='80'><line x1='10' y1='40' x2='90' y2='40' stroke='#1e293b' stroke-width='3'/><text x='40' y='30' font-size='18'>x</text><text x='40' y='70' font-size='18'>4</text><text x='110' y='55' font-size='20'>= 3</text></svg></div>",
        "hint": "במתמטיקה, כדי לבטל פעולת חילוק במספר, עלינו לבצע את הפעולה ההפוכה שהיא כפל.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה שהנעלם x מחולק ב-4. כדי לבודד אותו, נכפיל את שני אגפי המשוואה ב-4.", "math_expression": "x / 4 = 3 / * 4" },
            { "verbal_explanation": "שלב 2: באגף שמאל המכנה מצטמצם ונשאר x לבדו. באגף ימין נכפול את 3 ב-4.", "math_expression": "x = 3 * 4" },
            { "verbal_explanation": "שלב 3: נחשב את התוצאה הסופית של המכפלה.", "math_expression": "x = 12" }
        ],
        "final_answer": "x = 12",
        "options": ["x = 12", "x = 7", "x = 0.75", "x = 1"],
        "correctAnswer": 0
    },
    {
        "id": 2,
        "subTopic": "משוואות עם מכנה מספרי",
        "difficulty": "Low",
        "question_text": "פתרו את המשוואה: <br><strong>x / 2 + 5 = 11</strong>",
        "hint": "התחילו ב'ניקוי' האגף מהמספר החופשי (5) ורק אז טפלו במכנה של השבר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחסיר 5 משני אגפי המשוואה כדי להשאיר את הביטוי עם x לבדו באגף שמאל.", "math_expression": "x / 2 = 11 - 5" },
            { "verbal_explanation": "שלב 2: נפשט את אגף ימין על ידי חישוב ההפרש.", "math_expression": "x / 2 = 6" },
            { "verbal_explanation": "שלב 3: נכפיל את שני האגפים ב-2 כדי לבטל את המכנה ולמצוא את ערכו של x.", "math_expression": "x = 6 * 2" },
            { "verbal_explanation": "שלב 4: נרשום את התוצאה הסופית.", "math_expression": "x = 12" }
        ],
        "final_answer": "x = 12",
        "options": ["x = 12", "x = 6", "x = 32", "x = 8"],
        "correctAnswer": 0
    },
    {
        "id": 3,
        "subTopic": "משוואות עם מכנה מספרי",
        "difficulty": "Medium",
        "question_text": "פתרו את המשוואה: <br><strong>x / 3 + x / 6 = 3</strong>",
        "hint": "כשיש כמה מכנים, עדיף להכפיל את כל המשוואה במכנה משותף (המספר הקטן ביותר שמתחלק בכולם).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא מכנה משותף ל-3 ו-6. המספר 6 מתחלק בשניהם ללא שארית. נכפיל את כל איברי המשוואה ב-6.", "math_expression": "6 * (x / 3) + 6 * (x / 6) = 6 * 3" },
            { "verbal_explanation": "שלב 2: נבצע את הצמצום: 6 חלקי 3 זה 2, ו-6 חלקי 6 זה 1.", "math_expression": "2x + x = 18" },
            { "verbal_explanation": "שלב 3: נחבר איברים דומים באגף שמאל (2x ועוד x הם 3x).", "math_expression": "3x = 18" },
            { "verbal_explanation": "שלב 4: נחלק את שני האגפים ב-3 למציאת התוצאה הסופית.", "math_expression": "x = 6" }
        ],
        "final_answer": "x = 6",
        "options": ["x = 6", "x = 9", "x = 12", "x = 3"],
        "correctAnswer": 0
    },
    {
        "id": 4,
        "subTopic": "משוואות עם מכנה מספרי",
        "difficulty": "Medium",
        "question_text": "פתרו את המשוואה: <br><strong>(x + 6) / 2 = 10</strong>",
        "hint": "שימו לב שכל המונה נמצא מעל קו השבר. הכפילו ב-2 את שני האגפים כצעד ראשון כדי 'לשחרר' את המונה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את המשוואה כולה ב-2 כדי לבטל את השבר באגף שמאל.", "math_expression": "x + 6 = 10 * 2" },
            { "verbal_explanation": "שלב 2: נחשב את המכפלה באגף ימין.", "math_expression": "x + 6 = 20" },
            { "verbal_explanation": "שלב 3: נחסיר 6 משני האגפים כדי לבודד את הנעלם x.", "math_expression": "x = 20 - 6" },
            { "verbal_explanation": "שלב 4: נרשום את התוצאה.", "math_expression": "x = 14" }
        ],
        "final_answer": "x = 14",
        "options": ["x = 14", "x = 4", "x = 26", "x = 8"],
        "correctAnswer": 0
    },
    {
        "id": 5,
        "subTopic": "משוואות עם מכנה מספרי",
        "difficulty": "High",
        "question_text": "פתרו את המשוואה: <br><strong>x / 3 - (x - 1) / 4 = 1</strong>",
        "hint": "היזהרו מהמינוס שלפני השבר השני! הוא משפיע על כל האיברים במונה השני. השתמשו בסוגריים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל במכנה משותף 12. נכפול כל איבר במשוואה בנפרד.", "math_expression": "12 * (x / 3) - 12 * ((x - 1) / 4) = 12 * 1" },
            { "verbal_explanation": "שלב 2: נבצע צמצום: 4 כפול x, ומינוס 3 כפול המונה השני (נשמור אותו בסוגריים).", "math_expression": "4x - 3(x - 1) = 12" },
            { "verbal_explanation": "שלב 3: נפתח סוגריים. שימו לב: מינוס 3 כפול מינוס 1 הופך לפלוס 3.", "math_expression": "4x - 3x + 3 = 12" },
            { "verbal_explanation": "שלב 4: נכנס איברים (x) ונעביר את ה-3 אגף בחיסור.", "math_expression": "x = 12 - 3 -> x = 9" }
        ],
        "final_answer": "x = 9",
        "options": ["x = 9", "x = 15", "x = 12", "x = 7"],
        "correctAnswer": 0
    },
    {
        "id": 6,
        "subTopic": "משוואות עם מכנה מספרי",
        "difficulty": "Low",
        "question_text": "פתרו את המשוואה: <br><strong>3x / 4 = 9</strong>",
        "hint": "ניתן לפתור בשני שלבים פשוטים: קודם להכפיל במכנה (4) ואז לחלק במקדם (3).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את שני אגפי המשוואה ב-4 כדי לבטל את המכנה.", "math_expression": "3x = 9 * 4" },
            { "verbal_explanation": "שלב 2: נפשט את אגף ימין על ידי חישוב המכפלה.", "math_expression": "3x = 36" },
            { "verbal_explanation": "שלב 3: נחלק את שני האגפים ב-3 כדי למצוא את ערכו של x.", "math_expression": "x = 12" }
        ],
        "final_answer": "x = 12",
        "options": ["x = 12", "x = 6.75", "x = 27", "x = 4"],
        "correctAnswer": 0
    },
    {
        "id": 7,
        "subTopic": "משוואות עם מכנה מספרי",
        "difficulty": "Medium",
        "question_text": "פתרו את המשוואה: <br><strong>(2x - 4) / 2 = x - 2</strong>",
        "hint": "נסו לצמצם את השבר באגף שמאל על ידי חלוקת כל איבר במונה במכנה (2) לפני שתמשיכו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחלק את שני איברי המונה במכנה. 2x חלקי 2 זה x, ו-4 חלקי 2 זה 2.", "math_expression": "x - 2 = x - 2" },
            { "verbal_explanation": "שלב 2: נבחין שקיבלנו ביטוי שבו אגף שמאל זהה בדיוק לאגף ימין.", "math_expression": "x - 2 = x - 2" },
            { "verbal_explanation": "שלב 3: במקרה כזה, כל מספר שנציב במקום x יקיים את המשוואה. זוהי 'זהות'.", "math_expression": "אינסוף פתרונות" }
        ],
        "final_answer": "אינסוף פתרונות",
        "options": ["אינסוף פתרונות", "אין פתרון", "x = 0", "x = 2"],
        "correctAnswer": 0
    },
    {
        "id": 8,
        "subTopic": "משוואות עם מכנה מספרי",
        "difficulty": "High",
        "question_text": "פתרו את המשוואה: <br><strong>(x + 1) / 2 + (x - 1) / 3 = 5</strong>",
        "hint": "הכפילו את כל המשוואה במכנה משותף של 2 ו-3, שהוא המספר 6.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את כל המשוואה ב-6. השבר הראשון יוכפל ב-3 והשני ב-2.", "math_expression": "3(x + 1) + 2(x - 1) = 6 * 5" },
            { "verbal_explanation": "שלב 2: נפתח את הסוגריים באגף שמאל בעזרת חוק הפילוג.", "math_expression": "3x + 3 + 2x - 2 = 30" },
            { "verbal_explanation": "שלב 3: נכנס איברים דומים (3x ו-2x הם 5x, ו-3 פחות 2 הם 1).", "math_expression": "5x + 1 = 30" },
            { "verbal_explanation": "שלב 4: נעביר את ה-1 אגף בחיסור ונחלק ב-5 למציאת x.", "math_expression": "5x = 29 -> x = 5.8" }
        ],
        "final_answer": "x = 5.8",
        "options": ["x = 5.8", "x = 6", "x = 5", "x = 7"],
        "correctAnswer": 0
    },
    {
        "id": 9,
        "subTopic": "משוואות עם מכנה מספרי",
        "difficulty": "Medium",
        "question_text": "פתרו את המשוואה: <br><strong>x / 5 - 2 = 0</strong>",
        "hint": "העבירו את המספר החופשי (2) לאגף השני כצעד ראשון כדי לבודד את השבר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נעביר את המספר מינוס 2 לאגף ימין בסימן חיובי.", "math_expression": "x / 5 = 2" },
            { "verbal_explanation": "שלב 2: נכפיל את שני אגפי המשוואה במכנה (5) כדי לבודד את x.", "math_expression": "x = 2 * 5" },
            { "verbal_explanation": "שלב 3: נחשב את התוצאה הסופית.", "math_expression": "x = 10" }
        ],
        "final_answer": "x = 10",
        "options": ["x = 10", "x = 2", "x = 0.4", "x = 5"],
        "correctAnswer": 0
    },
    {
        "id": 10,
        "subTopic": "משוואות עם מכנה מספרי",
        "difficulty": "High",
        "question_text": "פתרו את המשוואה: <br><strong>x / 4 = (x + 3) / 7</strong>",
        "hint": "השתמשו בשיטת 'כפל בהצלבה' (מונה של צד אחד כפול מכנה של הצד השני) כדי להיפטר מהשברים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפול באלכסון. 7 כפול x שווה ל-4 כפול המונה (x + 3).", "math_expression": "7 * x = 4 * (x + 3)" },
            { "verbal_explanation": "שלב 2: נפתח את הסוגריים באגף ימין.", "math_expression": "7x = 4x + 12" },
            { "verbal_explanation": "שלב 3: נעביר את ה-4x לאגף שמאל בסימן חיסור כדי לרכז את המשתנים.", "math_expression": "3x = 12" },
            { "verbal_explanation": "שלב 4: נחלק ב-3 למציאת ערכו של x.", "math_expression": "x = 4" }
        ],
        "final_answer": "x = 4",
        "options": ["x = 4", "x = 12", "x = 7", "x = 3"],
        "correctAnswer": 0
    },
    {
        "id": 11,
        "subTopic": "משוואות עם מכנה מספרי",
        "difficulty": "Low",
        "question_text": "איזו פעולה מתמטית תבטל את המכנה במשוואה <strong>x / 8 = 2</strong>?",
        "hint": "חשבו מהי הפעולה ההפוכה לפעולת החילוק המיוצגת על ידי קו השבר.",
        "solution_steps": [
            { "verbal_explanation": "במשוואה זו המשתנה x מחולק ב-8. כדי לבודד אותו ולבטל את השבר, עלינו לבצע את הפעולה ההפוכה שהיא כפל ב-8 לשני האגפים.", "math_expression": "כפל ב-8" }
        ],
        "final_answer": "כפל ב-8",
        "options": ["חילוק ב-8", "כפל ב-8", "חיסור 8", "חיבור 8"],
        "correctAnswer": 1
    },
    {
        "id": 12,
        "subTopic": "משוואות עם מכנה מספרי",
        "difficulty": "Medium",
        "question_text": "פתרו את המשוואה: <br><strong>(x - 10) / 5 = 0</strong>",
        "hint": "זכרו ששבר יכול להיות שווה לאפס אך ורק אם המונה שלו שווה לאפס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשווה את הביטוי שבמונה לאפס (או נכפיל ב-5 את שני האגפים).", "math_expression": "x - 10 = 0" },
            { "verbal_explanation": "שלב 2: נעביר את המספר 10 לאגף ימין בסימן חיובי.", "math_expression": "x = 10" }
        ],
        "final_answer": "x = 10",
        "options": ["x = 10", "x = 0", "x = 5", "x = -10"],
        "correctAnswer": 0
    },
    {
        "id": 13,
        "subTopic": "משוואות עם מכנה מספרי",
        "difficulty": "High",
        "question_text": "פתרו את המשוואה: <br><strong>x / 2 + x / 3 + x / 6 = 10</strong>",
        "hint": "המכנה המשותף הקטן ביותר של 2, 3 ו-6 הוא המספר 6.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את כל המשוואה ב-6. כל שבר יוכפל במספר הפעמים שהמכנה שלו נכנס ב-6.", "math_expression": "3x + 2x + 1x = 6 * 10" },
            { "verbal_explanation": "שלב 2: נחבר את כל המשתנים באגף שמאל (3 ועוד 2 ועוד 1 הם 6).", "math_expression": "6x = 60" },
            { "verbal_explanation": "שלב 3: נחלק את שני האגפים ב-6 למציאת התוצאה.", "math_expression": "x = 10" }
        ],
        "final_answer": "x = 10",
        "options": ["x = 10", "x = 60", "x = 1", "x = 5"],
        "correctAnswer": 0
    },
    {
        "id": 14,
        "subTopic": "משוואות עם מכנה מספרי",
        "difficulty": "Medium",
        "question_text": "פתרו: <br><strong>2x / 3 = 8</strong>",
        "hint": "פתרו בשני שלבים: קודם הכפילו במכנה (3) ואז חלקו במקדם של x (שהוא 2).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל ב-3 כדי לבטל את השבר.", "math_expression": "2x = 24" },
            { "verbal_explanation": "שלב 2: נחלק ב-2 כדי למצוא את x.", "math_expression": "x = 12" }
        ],
        "final_answer": "x = 12",
        "options": ["x = 12", "x = 4", "x = 16", "x = 24"],
        "correctAnswer": 0
    },
    {
        "id": 15,
        "subTopic": "משוואות עם מכנה מספרי",
        "difficulty": "High",
        "question_text": "פתרו את המשוואה: <br><strong>(x + 2) / 4 - x / 2 = 1</strong>",
        "hint": "הכפילו את כל המשוואה במכנה משותף 4. שימו לב היטב למינוס שלפני האיבר השני.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל ב-4. השבר הראשון נשאר כמו שהוא, והשני מוכפל ב-2.", "math_expression": "(x + 2) - 2 * x = 4 * 1" },
            { "verbal_explanation": "שלב 2: נכנס איברים דומים: x פחות 2x זה מינוס x.", "math_expression": "-x + 2 = 4" },
            { "verbal_explanation": "שלב 3: נעביר את ה-2 אגף: מינוס x שווה ל-2.", "math_expression": "-x = 2" },
            { "verbal_explanation": "שלב 4: נכפול במינוס 1 כדי למצוא את x החיובי.", "math_expression": "x = -2" }
        ],
        "final_answer": "x = -2",
        "options": ["x = -2", "x = 2", "x = 6", "x = 0"],
        "correctAnswer": 0
    },
    {
        "id": 16,
        "subTopic": "משוואות עם מכנה מספרי",
        "difficulty": "Low",
        "question_text": "פתרו את המשוואה: <br><strong>x / 10 = -3</strong>",
        "hint": "כפלו את המספר שבאגף ימין במכנה של הנעלם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את שני אגפי המשוואה ב-10.", "math_expression": "x = -3 * 10" },
            { "verbal_explanation": "שלב 2: נחשב את המכפלה (מינוס כפול פלוס נותן מינוס).", "math_expression": "x = -30" }
        ],
        "final_answer": "x = -30",
        "options": ["x = -30", "x = 30", "x = -0.3", "x = 7"],
        "correctAnswer": 0
    },
    {
        "id": 17,
        "subTopic": "משוואות עם מכנה מספרי",
        "difficulty": "Medium",
        "question_text": "פתרו: <br><strong>(3x + 9) / 3 = 7</strong>",
        "hint": "ניתן לצמצם את המונה במכנה על ידי חלוקת כל איבר במונה בנפרד במספר 3.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחלק את 3x ב-3 וגם את 9 ב-3.", "math_expression": "x + 3 = 7" },
            { "verbal_explanation": "שלב 2: נחסיר 3 משני האגפים.", "math_expression": "x = 4" }
        ],
        "final_answer": "x = 4",
        "options": ["x = 4", "x = 12", "x = 3", "x = 10"],
        "correctAnswer": 0
    },
    {
        "id": 18,
        "subTopic": "משוואות עם מכנה מספרי",
        "difficulty": "High",
        "question_text": "פתרו את המשוואה: <br><strong>x / 2 = x / 3 + 1</strong>",
        "hint": "הכפילו את כל המשוואה במכנה משותף 6 כדי להיפטר מהשברים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את כל המשוואה ב-6. אגף שמאל יוכפל ב-3 ואגף ימין ב-2 וגם ה-1 יוכפל ב-6.", "math_expression": "3x = 2x + 6" },
            { "verbal_explanation": "שלב 2: נעביר את ה-2x לאגף שמאל בסימן חיסור.", "math_expression": "x = 6" }
        ],
        "final_answer": "x = 6",
        "options": ["x = 6", "x = 1", "x = 5", "x = 12"],
        "correctAnswer": 0
    },
    {
        "id": 19,
        "subTopic": "משוואות עם מכנה מספרי",
        "difficulty": "Medium",
        "question_text": "פתרו: <br><strong>(x - 5) / 2 = -3</strong>",
        "hint": "קודם כל בטלו את המכנה על ידי כפל ב-2.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את המשוואה ב-2.", "math_expression": "x - 5 = -6" },
            { "verbal_explanation": "שלב 2: נעביר את המספר מינוס 5 לאגף ימין בסימן חיובי.", "math_expression": "x = -6 + 5" },
            { "verbal_explanation": "שלב 3: נחשב את התוצאה.", "math_expression": "x = -1" }
        ],
        "final_answer": "x = -1",
        "options": ["x = -1", "x = 1", "x = -11", "x = 11"],
        "correctAnswer": 0
    },
    {
        "id": 20,
        "subTopic": "משוואות עם מכנה מספרי",
        "difficulty": "High",
        "question_text": "פתרו את המשוואה: <br><strong>2x / 5 - x / 4 = 3</strong>",
        "hint": "המכנה המשותף של 5 ו-4 הוא 20. הכפילו את כל איברי המשוואה בו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל ב-20. האיבר הראשון יוכפל ב-4, השני ב-5 והמספר 3 יוכפל ב-20.", "math_expression": "8x - 5x = 60" },
            { "verbal_explanation": "שלב 2: נחסיר את האיקסים באגף שמאל.", "math_expression": "3x = 60" },
            { "verbal_explanation": "שלב 3: נחלק ב-3 למציאת x.", "math_expression": "x = 20" }
        ],
        "final_answer": "x = 20",
        "options": ["x = 20", "x = 10", "x = 40", "x = 15"],
        "correctAnswer": 0
    },

    // ==============================================================
    // --- תת נושא 2: משוואות עם נעלם במכנה (20 שאלות) ---
    // ==============================================================
    {
        "id": 21,
        "subTopic": "משוואות עם נעלם במכנה",
        "difficulty": "Low",
        "question_text": "מהו <strong>תחום ההצבה</strong> של המשוואה הבאה:<br><strong>10 / x = 2</strong>?<br><div style='text-align:center; margin:15px 0;'><svg width='100' height='80'><line x1='10' y1='40' x2='90' y2='40' stroke='#1e293b' stroke-width='3'/><text x='40' y='30' font-size='18'>10</text><text x='40' y='70' font-size='18' fill='#ef4444'>x</text></svg></div>",
        "hint": "תחום הצבה הוא שלב קריטי שבו בודקים אילו מספרים אסור להציב במקום x כדי שלא נחלק ב-0 (פעולה שאינה מוגדרת במתמטיקה).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את המכנה של השבר שבו נמצא המשתנה x.", "math_expression": "המכנה = x" },
            { "verbal_explanation": "שלב 2: נזכור את הכלל המתמטי: אסור למכנה של שבר להיות שווה לאפס.", "math_expression": "x ≠ 0" },
            { "verbal_explanation": "שלב 3: נגדיר את תחום ההצבה ככל ערך של x, חוץ מהערך המאפס.", "math_expression": "תחום הצבה: x ≠ 0" }
        ],
        "final_answer": "x ≠ 0",
        "options": ["x ≠ 0", "x = 0", "x ≠ 10", "כל x"],
        "correctAnswer": 0
    },
    {
        "id": 22,
        "subTopic": "משוואות עם נעלם במכנה",
        "difficulty": "Low",
        "question_text": "פתרו את המשוואה: <br><strong>12 / x = 4</strong>",
        "hint": "לאחר קביעת תחום הצבה, הכפילו ב-x את שני האגפים כדי להעביר את הנעלם מהמכנה למונה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נקבע תחום הצבה. המכנה x חייב להיות שונה מאפס.", "math_expression": "x ≠ 0" },
            { "verbal_explanation": "שלב 2: נכפיל את שני אגפי המשוואה ב-x.", "math_expression": "12 = 4x" },
            { "verbal_explanation": "שלב 3: נחלק ב-4 כדי למצוא את ערכו של x.", "math_expression": "x = 3" },
            { "verbal_explanation": "שלב 4: נבדוק אם הפתרון (3) עומד בתחום ההצבה (שונה מאפס). כן.", "math_expression": "3 ≠ 0" }
        ],
        "final_answer": "x = 3",
        "options": ["x = 3", "x = 48", "x = 4", "x = 8"],
        "correctAnswer": 0
    },
    {
        "id": 23,
        "subTopic": "משוואות עם נעלם במכנה",
        "difficulty": "Medium",
        "question_text": "מהו תחום ההצבה של המשוואה: <br><strong>5 / (x - 3) = 1</strong>?",
        "hint": "שאלו את עצמכם: איזה מספר במקום x יהפוך את כל הביטוי (x - 3) לאפס?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את הביטוי במכנה.", "math_expression": "המכנה = x - 3" },
            { "verbal_explanation": "שלב 2: נשווה את המכנה לאפס כדי למצוא את הערך האסור.", "math_expression": "x - 3 = 0" },
            { "verbal_explanation": "שלב 3: נפתור ונקבל שהערך 3 הוא הערך שמאפס את המכנה.", "math_expression": "x = 3" },
            { "verbal_explanation": "שלב 4: לכן תחום ההצבה הוא כל x שאינו 3.", "math_expression": "x ≠ 3" }
        ],
        "final_answer": "x ≠ 3",
        "options": ["x ≠ 3", "x ≠ 0", "x ≠ -3", "x ≠ 5"],
        "correctAnswer": 0
    },
    {
        "id": 24,
        "subTopic": "משוואות עם נעלם במכנה",
        "difficulty": "Medium",
        "question_text": "פתרו את המשוואה: <br><strong>8 / x = 16 / 4</strong>",
        "hint": "פשטו קודם את אגף ימין של המשוואה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: תחום הצבה.", "math_expression": "x ≠ 0" },
            { "verbal_explanation": "שלב 2: נפשט את אגף ימין. 16 חלקי 4 זה 4.", "math_expression": "8 / x = 4" },
            { "verbal_explanation": "שלב 3: נכפיל ב-x.", "math_expression": "8 = 4x" },
            { "verbal_explanation": "שלב 4: נחלק ב-4 למציאת x.", "math_expression": "x = 2" }
        ],
        "final_answer": "x = 2",
        "options": ["x = 2", "x = 0.5", "x = 32", "x = 4"],
        "correctAnswer": 0
    },
    {
        "id": 25,
        "subTopic": "משוואות עם נעלם במכנה",
        "difficulty": "High",
        "question_text": "פתרו את המשוואה: <br><strong>(x - 2) / (x - 2) = 1</strong>",
        "hint": "שימו לב היטב למקרה המיוחד הזה שבו המונה והמכנה זהים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: שלב ראשון והכרחי הוא קביעת תחום הצבה. המכנה (x - 2) אסור שיהיה אפס.", "math_expression": "x ≠ 2" },
            { "verbal_explanation": "שלב 2: נשים לב שכל ביטוי המחולק בעצמו נותן תוצאה של 1, בתנאי שהוא לא אפס.", "math_expression": "1 = 1" },
            { "verbal_explanation": "שלב 3: מכיוון שקיבלנו פסוק אמת (1=1), הרי שכל מספר מותר לפתרון - בתנאי שהוא בתחום ההצבה.", "math_expression": "כל x ≠ 2" }
        ],
        "final_answer": "כל x פרט ל-2",
        "options": ["כל x פרט ל-2", "אינסוף פתרונות", "x = 2", "אין פתרון"],
        "correctAnswer": 0
    },
    {
        "id": 26,
        "subTopic": "משוואות עם נעלם במכנה",
        "difficulty": "Low",
        "question_text": "מצאו את x בפרופורציה הבאה: <br><strong>2 / x = 6 / 9</strong>",
        "hint": "השתמשו בשיטת הכפל בהצלבה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: תחום הצבה.", "math_expression": "x ≠ 0" },
            { "verbal_explanation": "שלב 2: כפל בהצלבה. 2 כפול 9 שווה ל-6 כפול x.", "math_expression": "18 = 6x" },
            { "verbal_explanation": "שלב 3: נחלק ב-6.", "math_expression": "x = 3" }
        ],
        "final_answer": "x = 3",
        "options": ["x = 3", "x = 2", "x = 1.5", "x = 18"],
        "correctAnswer": 0
    },
    {
        "id": 27,
        "subTopic": "משוואות עם נעלם במכנה",
        "difficulty": "Medium",
        "question_text": "פתרו: <br><strong>3 / (x + 2) = 1</strong>",
        "hint": "הכפילו את כל המשוואה במכנה (x + 2).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: תחום הצבה. x + 2 ≠ 0.", "math_expression": "x ≠ -2" },
            { "verbal_explanation": "שלב 2: נכפיל במכנה כדי 'להעלות' אותו למעלה.", "math_expression": "3 = 1 * (x + 2)" },
            { "verbal_explanation": "שלב 3: נחסיר 2 משני האגפים.", "math_expression": "x = 1" }
        ],
        "final_answer": "x = 1",
        "options": ["x = 1", "x = 3", "x = -1", "x = 5"],
        "correctAnswer": 0
    },
    {
        "id": 28,
        "subTopic": "משוואות עם נעלם במכנה",
        "difficulty": "High",
        "question_text": "מהו תחום ההצבה של המשוואה: <br><strong>4 / (x² - 16) = 1</strong>?",
        "hint": "המכנה כולו (x² - 16) אסור שיהיה אפס. אילו שני מספרים בריבוע נותנים 16?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשווה את המכנה לאפס כדי לגלות את הערכים הבעייתיים.", "math_expression": "x² - 16 = 0" },
            { "verbal_explanation": "שלב 2: נוסיף 16 לשני האגפים: x בריבוע שווה ל-16.", "math_expression": "x² = 16" },
            { "verbal_explanation": "שלב 3: נוציא שורש ריבועי. זכרו שגם 4 וגם מינוס 4 יתנו 16.", "math_expression": "x = 4 , x = -4" },
            { "verbal_explanation": "שלב 4: תחום ההצבה הוא ש-x שונה משניהם.", "math_expression": "x ≠ 4, x ≠ -4" }
        ],
        "final_answer": "x ≠ 4 וגם x ≠ -4",
        "options": ["x ≠ 4, -4", "x ≠ 4", "x ≠ 16", "כל x"],
        "correctAnswer": 0
    },
    {
        "id": 29,
        "subTopic": "משוואות עם נעלם במכנה",
        "difficulty": "Medium",
        "question_text": "פתרו את המשוואה: <br><strong>1 / x + 2 / x = 1</strong>",
        "hint": "חברו את השברים באגף שמאל (יש להם כבר מכנה משותף).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: תחום הצבה.", "math_expression": "x ≠ 0" },
            { "verbal_explanation": "שלב 2: נחבר את המונים של השברים באגף שמאל מעל המכנה x.", "math_expression": "3 / x = 1" },
            { "verbal_explanation": "שלב 3: נכפיל ב-x את שני האגפים.", "math_expression": "3 = x" }
        ],
        "final_answer": "x = 3",
        "options": ["x = 3", "x = 1", "x = 0", "x = 1.5"],
        "correctAnswer": 0
    },
    {
        "id": 30,
        "subTopic": "משוואות עם נעלם במכנה",
        "difficulty": "High",
        "question_text": "פתרו: <br><strong>1 / (x - 5) = 1 / (2x - 10)</strong>",
        "hint": "הוציאו גורם משותף במכנה הימני כדי לראות את הקשר בין השברים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: תחום הצבה. המכנה מתאפס ב-5.", "math_expression": "x ≠ 5" },
            { "verbal_explanation": "שלב 2: נפרק את המכנה הימני: 2x-10 זה פעמיים (x-5).", "math_expression": "1 / (x - 5) = 1 / 2(x - 5)" },
            { "verbal_explanation": "שלב 3: נכפיל את כל המשוואה במכנה 2(x-5).", "math_expression": "2 = 1" },
            { "verbal_explanation": "שלב 4: קיבלנו פסוק שקר (2 שווה ל-1).", "math_expression": "אין פתרון" }
        ],
        "final_answer": "אין פתרון",
        "options": ["אין פתרון", "x = 5", "כל x", "x = 1"],
        "correctAnswer": 0
    },
    {
        "id": 31,
        "subTopic": "משוואות עם נעלם במכנה",
        "difficulty": "Low",
        "question_text": "עבור איזה ערך של x הביטוי <strong>5 / (2x)</strong> לא מוגדר?",
        "hint": "ביטוי לא מוגדר כאשר המכנה שלו שווה לאפס.",
        "solution_steps": [
            { "verbal_explanation": "נשווה את המכנה לאפס: 2x = 0. נחלק ב-2 ונקבל x = 0.", "math_expression": "x = 0" }
        ],
        "final_answer": "x = 0",
        "options": ["x = 0", "x = 2", "x = 5", "אף ערך"],
        "correctAnswer": 0
    },
    {
        "id": 32,
        "subTopic": "משוואות עם נעלם במכנה",
        "difficulty": "Medium",
        "question_text": "פתרו את המשוואה: <br><strong>10 / (x + 4) = 2</strong>",
        "hint": "הכפילו את כל המשוואה במכנה (x + 4).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: תחום הצבה.", "math_expression": "x ≠ -4" },
            { "verbal_explanation": "שלב 2: נכפיל במכנה: 10 שווה לפעמיים (x + 4).", "math_expression": "10 = 2(x + 4)" },
            { "verbal_explanation": "שלב 3: נחלק ב-2.", "math_expression": "5 = x + 4" },
            { "verbal_explanation": "שלב 4: נמצא את x.", "math_expression": "x = 1" }
        ],
        "final_answer": "x = 1",
        "options": ["x = 1", "x = -1", "x = 9", "x = 4"],
        "correctAnswer": 0
    },
    {
        "id": 33,
        "subTopic": "משוואות עם נעלם במכנה",
        "difficulty": "High",
        "question_text": "פתרו: <br><strong>x / (x + 1) = 2</strong>",
        "hint": "הכפילו במכנה ופתרו את המשוואה בנעלם אחד שתתקבל.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: תחום הצבה.", "math_expression": "x ≠ -1" },
            { "verbal_explanation": "שלב 2: נכפיל ב-(x + 1).", "math_expression": "x = 2 * (x + 1)" },
            { "verbal_explanation": "שלב 3: נפתח סוגריים.", "math_expression": "x = 2x + 2" },
            { "verbal_explanation": "שלב 4: נעביר אגפים.", "math_expression": "-x = 2 -> x = -2" }
        ],
        "final_answer": "x = -2",
        "options": ["x = -2", "x = 2", "x = 1", "x = -1"],
        "correctAnswer": 0
    },
    {
        "id": 34,
        "subTopic": "משוואות עם נעלם במכנה",
        "difficulty": "Medium",
        "question_text": "פתרו את המשוואה: <br><strong>7 / x = -1</strong>",
        "hint": "כפל פשוט ב-x.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: תחום הצבה.", "math_expression": "x ≠ 0" },
            { "verbal_explanation": "שלב 2: נכפיל ב-x.", "math_expression": "7 = -x" },
            { "verbal_explanation": "שלב 3: נכפול במינוס 1.", "math_expression": "x = -7" }
        ],
        "final_answer": "x = -7",
        "options": ["x = -7", "x = 7", "x = 0", "אין פתרון"],
        "correctAnswer": 0
    },
    {
        "id": 35,
        "subTopic": "משוואות עם נעלם במכנה",
        "difficulty": "High",
        "question_text": "פתרו: <br><strong>1 / x = 1 / 5 + 1 / (5x)</strong>",
        "hint": "המכנה המשותף ל-x, 5 ו-5x הוא 5x. הכפילו את כל המשוואה בו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: תחום הצבה.", "math_expression": "x ≠ 0" },
            { "verbal_explanation": "שלב 2: נכפיל את כל המשוואה ב-5x.", "math_expression": "5 = x + 1" },
            { "verbal_explanation": "שלב 3: נחסיר 1 משני האגפים.", "math_expression": "x = 4" }
        ],
        "final_answer": "x = 4",
        "options": ["x = 4", "x = 5", "x = 1", "x = 2"],
        "correctAnswer": 0
    },
    {
        "id": 36,
        "subTopic": "משוואות עם נעלם במכנה",
        "difficulty": "Low",
        "question_text": "מה ניתן לומר על המשוואה <strong>0 / x = 0</strong>?",
        "hint": "חשבו על תחום ההצבה קודם.",
        "solution_steps": [
            { "verbal_explanation": "כל שבר שהמונה שלו הוא 0 יהיה שווה ל-0, בתנאי שהמכנה שלו אינו 0. לכן x יכול להיות כל מספר חוץ מאפס.", "math_expression": "כל x ≠ 0" }
        ],
        "final_answer": "נכון לכל x פרט ל-0",
        "options": ["נכון לכל x פרט ל-0", "אין פתרון", "x = 0", "רק x = 1"],
        "correctAnswer": 0
    },
    {
        "id": 37,
        "subTopic": "משוואות עם נעלם במכנה",
        "difficulty": "Medium",
        "question_text": "פתרו: <br><strong>15 / (2x) = 5</strong>",
        "hint": "הכפילו במכנה (2x).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: תחום הצבה.", "math_expression": "x ≠ 0" },
            { "verbal_explanation": "שלב 2: נכפיל במכנה: 15 שווה ל-5 כפול 2x.", "math_expression": "15 = 10x" },
            { "verbal_explanation": "שלב 3: נחלק ב-10.", "math_expression": "x = 1.5" }
        ],
        "final_answer": "x = 1.5",
        "options": ["x = 1.5", "x = 3", "x = 0.75", "x = 6"],
        "correctAnswer": 0
    },
    {
        "id": 38,
        "subTopic": "משוואות עם נעלם במכנה",
        "difficulty": "High",
        "question_text": "פתרו את המשוואה: <br><strong>(x + 5) / x = 2</strong>",
        "hint": "הכפילו ב-x ורכזו את המשתנים בצד אחד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: תחום הצבה.", "math_expression": "x ≠ 0" },
            { "verbal_explanation": "שלב 2: נכפיל ב-x כדי לבטל את השבר.", "math_expression": "x + 5 = 2x" },
            { "verbal_explanation": "שלב 3: נחסיר x משני האגפים.", "math_expression": "5 = x" }
        ],
        "final_answer": "x = 5",
        "options": ["x = 5", "x = -5", "x = 1", "x = 2"],
        "correctAnswer": 0
    },
    {
        "id": 39,
        "subTopic": "משוואות עם נעלם במכנה",
        "difficulty": "Medium",
        "question_text": "מהו תחום ההצבה של המשוואה: <br><strong>1 / (x + 1) + 1 / (x - 1) = 4</strong>?",
        "hint": "ישנם שני שברים. על שני המכנים להיות שונים מאפס בו-זמנית.",
        "solution_steps": [
            { "verbal_explanation": "נבדוק כל מכנה בנפרד: x + 1 אסור שיהיה 0, לכן x שונה ממינוס 1. x - 1 אסור שיהיה 0, לכן x שונה מפלוס 1.", "math_expression": "x ≠ 1, x ≠ -1" }
        ],
        "final_answer": "x ≠ 1 וגם x ≠ -1",
        "options": ["x ≠ 1, -1", "x ≠ 0", "x ≠ 1", "כל x"],
        "correctAnswer": 0
    },
    {
        "id": 40,
        "subTopic": "משוואות עם נעלם במכנה",
        "difficulty": "High",
        "question_text": "פתרו: <br><strong>4 / x = x</strong>",
        "hint": "הכפילו ב-x וקבלו משוואה עם x בריבוע.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: תחום הצבה.", "math_expression": "x ≠ 0" },
            { "verbal_explanation": "שלב 2: נכפיל ב-x את שני האגפים.", "math_expression": "4 = x²" },
            { "verbal_explanation": "שלב 3: נוציא שורש ריבועי. נקבל שתי תוצאות אפשריות.", "math_expression": "x = 2 , x = -2" }
        ],
        "final_answer": "x = 2 , x = -2",
        "options": ["x = 2, -2", "x = 2", "x = 4", "x = 0"],
        "correctAnswer": 0
    },,
    // ==============================================================
    // --- תת נושא 3: פתרון אי-שוויונות (20 שאלות) ---
    // ==============================================================
    {
        "id": 41,
        "subTopic": "פתרון אי שוויונות",
        "difficulty": "Low",
        "question_text": "פתרו את אי-השוויון הבא:<br><strong>x + 5 > 12</strong>",
        "hint": "פתרון אי-שוויון דומה מאוד לפתרון משוואה. עליכם לבודד את x בצד אחד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה שהמספר 5 מחובר ל-x. כדי לבודד את x, נחסיר 5 משני אגפי אי-השוויון.", "math_expression": "x > 12 - 5" },
            { "verbal_explanation": "שלב 2: נחשב את ההפרש באגף ימין.", "math_expression": "x > 7" },
            { "verbal_explanation": "שלב 3: נרשום את הפתרון הסופי: כל מספר שגדול מ-7 מקיים את התנאי.", "math_expression": "x > 7" }
        ],
        "final_answer": "x > 7",
        "options": ["x > 7", "x < 7", "x > 17", "x = 7"],
        "correctAnswer": 0
    },
    {
        "id": 42,
        "subTopic": "פתרון אי שוויונות",
        "difficulty": "Low",
        "question_text": "פתרו את אי-השוויון: <br><strong>3x ≤ 15</strong>",
        "hint": "חלקו את שני האגפים במקדם של x.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחלק את שני אגפי אי-השוויון במספר 3 כדי לבודד את x.", "math_expression": "x ≤ 15 / 3" },
            { "verbal_explanation": "שלב 2: נחשב את התוצאה.", "math_expression": "x ≤ 5" }
        ],
        "final_answer": "x ≤ 5",
        "options": ["x < 5", "x ≤ 5", "x ≥ 5", "x ≤ 45"],
        "correctAnswer": 1
    },
    {
        "id": 43,
        "subTopic": "פתרון אי שוויונות",
        "difficulty": "Medium",
        "question_text": "פתרו את אי-השוויון הבא ושימו לב לסימן:<br><strong>-2x < 10</strong>",
        "hint": "זהירות! כאשר מחלקים או כופלים אי-שוויון במספר שלילי, חובה להפוך את כיוון הסימן.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: עלינו לחלק את שני האגפים במינוס 2. מכיוון שזהו מספר שלילי, נהפוך את הסימן מ'קטן מ' ל'גדול מ'.", "math_expression": "-2x < 10 / : (-2)" },
            { "verbal_explanation": "שלב 2: נבצע את החילוק ונשנה את הסימן.", "math_expression": "x > -5" }
        ],
        "final_answer": "x > -5",
        "options": ["x < -5", "x > -5", "x < 5", "x > 5"],
        "correctAnswer": 1
    },
    {
        "id": 44,
        "subTopic": "פתרון אי שוויונות",
        "difficulty": "Medium",
        "question_text": "פתרו: <br><strong>4x - 7 ≥ 5</strong>",
        "hint": "העבירו קודם את המספר החופשי (7) אגף ורק אז חלקו במקדם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נעביר את מינוס 7 לאגף ימין בסימן פלוס.", "math_expression": "4x ≥ 5 + 7" },
            { "verbal_explanation": "שלב 2: נסכם את אגף ימין.", "math_expression": "4x ≥ 12" },
            { "verbal_explanation": "שלב 3: נחלק ב-4 למציאת x.", "math_expression": "x ≥ 3" }
        ],
        "final_answer": "x ≥ 3",
        "options": ["x ≥ 3", "x ≤ 3", "x > 12", "x ≥ -0.5"],
        "correctAnswer": 0
    },
    {
        "id": 45,
        "subTopic": "פתרון אי שוויונות",
        "difficulty": "High",
        "question_text": "פתרו את אי-השוויון המורכב:<br><strong>2(x + 3) < 4x - 2</strong>",
        "hint": "פתחו סוגריים, רכזו איקסים בצד אחד ומספרים בצד שני.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפתח סוגריים בעזרת חוק הפילוג.", "math_expression": "2x + 6 < 4x - 2" },
            { "verbal_explanation": "שלב 2: נעביר את 2x לאגף ימין בחיסור ואת מינוס 2 לאגף שמאל בחיבור.", "math_expression": "6 + 2 < 4x - 2x" },
            { "verbal_explanation": "שלב 3: נפשט את שני האגפים.", "math_expression": "8 < 2x" },
            { "verbal_explanation": "שלב 4: נחלק ב-2 ונקבל את התוצאה.", "math_expression": "4 < x (או x > 4)" }
        ],
        "final_answer": "x > 4",
        "options": ["x < 4", "x > 4", "x < 2", "x > 8"],
        "correctAnswer": 1
    },
    {
        "id": 46,
        "subTopic": "פתרון אי שוויונות",
        "difficulty": "Low",
        "question_text": "מה קורה לסימן אי-השוויון אם כופלים את שני האגפים ב-3?",
        "hint": "האם 3 הוא מספר חיובי או שלילי?",
        "solution_steps": [
            { "verbal_explanation": "כפל במספר חיובי אינו משנה את יחס הסדר בין האגפים.", "math_expression": "הסימן נשאר זהה" }
        ],
        "final_answer": "הסימן נשאר ללא שינוי.",
        "options": ["הסימן מתהפך", "הסימן נשאר ללא שינוי.", "הסימן הופך לסימן שווה", "אי אפשר לדעת"],
        "correctAnswer": 1
    },
    {
        "id": 47,
        "subTopic": "פתרון אי שוויונות",
        "difficulty": "Medium",
        "question_text": "פתרו: <br><strong>x/2 - 1 > 3</strong>",
        "hint": "העבירו את 1 אגף ואז כפלו במכנה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: העברת 1 ימינה.", "math_expression": "x/2 > 4" },
            { "verbal_explanation": "שלב 2: כפל ב-2.", "math_expression": "x > 8" }
        ],
        "final_answer": "x > 8",
        "options": ["x > 8", "x < 8", "x > 4", "x < 4"],
        "correctAnswer": 0
    },
    {
        "id": 48,
        "subTopic": "פתרון אי שוויונות",
        "difficulty": "High",
        "question_text": "פתרו: <br><strong>5 - x ≤ 2x - 7</strong>",
        "hint": "רכזו את המשתנים כך שהמקדם של x יהיה חיובי כדי להימנע מהיפוך הסימן.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נעביר את מינוס x ימינה (חיבור) ואת מינוס 7 שמאלה (חיבור).", "math_expression": "5 + 7 ≤ 2x + x" },
            { "verbal_explanation": "שלב 2: נפשט.", "math_expression": "12 ≤ 3x" },
            { "verbal_explanation": "שלב 3: נחלק ב-3.", "math_expression": "4 ≤ x" }
        ],
        "final_answer": "x ≥ 4",
        "options": ["x ≤ 4", "x ≥ 4", "x ≤ 12", "x > 4"],
        "correctAnswer": 1
    },
    {
        "id": 49,
        "subTopic": "פתרון אי שוויונות",
        "difficulty": "Medium",
        "question_text": "פתרו: <br><strong>10 - 2x ≥ 0</strong>",
        "hint": "היזהרו בעת חלוקה במינוס 2.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נעביר את 10 ימינה.", "math_expression": "-2x ≥ -10" },
            { "verbal_explanation": "שלב 2: נחלק במינוס 2 ונהפוך את הסימן.", "math_expression": "x ≤ 5" }
        ],
        "final_answer": "x ≤ 5",
        "options": ["x ≥ 5", "x ≤ 5", "x ≥ -5", "x ≤ -5"],
        "correctAnswer": 1
    },
    {
        "id": 50,
        "subTopic": "פתרון אי שוויונות",
        "difficulty": "High",
        "question_text": "פתרו: <br><strong>(x+4)/-3 > 2</strong>",
        "hint": "כפלו במינוס 3 והפכו את הסימן מיד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל במינוס 3 ונהפוך את הסימן מ'גדול מ' ל'קטן מ'.", "math_expression": "x + 4 < 2 * (-3)" },
            { "verbal_explanation": "שלב 2: נפשט.", "math_expression": "x + 4 < -6" },
            { "verbal_explanation": "שלב 3: נחסיר 4.", "math_expression": "x < -10" }
        ],
        "final_answer": "x < -10",
        "options": ["x < -10", "x > -10", "x < -2", "x > 6"],
        "correctAnswer": 0
    },
    {
        "id": 51,
        "subTopic": "פתרון אי שוויונות",
        "difficulty": "Low",
        "question_text": "פתרו: <br><strong>x - 10 < -2</strong>",
        "hint": "העבירו את 10 אגף.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נוסיף 10 לשני האגפים.", "math_expression": "x < -2 + 10" },
            { "verbal_explanation": "שלב 2: חישוב.", "math_expression": "x < 8" }
        ],
        "final_answer": "x < 8",
        "options": ["x < 8", "x > 8", "x < -12", "x < 12"],
        "correctAnswer": 0
    },
    {
        "id": 52,
        "subTopic": "פתרון אי שוויונות",
        "difficulty": "Medium",
        "question_text": "פתרו: <br><strong>3x + 1 > x + 9</strong>",
        "hint": "רכזו איקסים בצד אחד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: העברת איקסים.", "math_expression": "2x + 1 > 9" },
            { "verbal_explanation": "שלב 2: העברת מספרים.", "math_expression": "2x > 8" },
            { "verbal_explanation": "שלב 3: חלוקה.", "math_expression": "x > 4" }
        ],
        "final_answer": "x > 4",
        "options": ["x > 4", "x < 4", "x > 5", "x < 8"],
        "correctAnswer": 0
    },
    {
        "id": 53,
        "subTopic": "פתרון אי שוויונות",
        "difficulty": "High",
        "question_text": "פתרו: <br><strong>1 - 3x ≤ 10</strong>",
        "hint": "שימו לב למקדם השלילי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: העברת 1.", "math_expression": "-3x ≤ 9" },
            { "verbal_explanation": "שלב 2: חלוקה במינוס 3 והפיכת סימן.", "math_expression": "x ≥ -3" }
        ],
        "final_answer": "x ≥ -3",
        "options": ["x ≤ -3", "x ≥ -3", "x ≤ 3", "x ≥ 3"],
        "correctAnswer": 1
    },
    {
        "id": 54,
        "subTopic": "פתרון אי שוויונות",
        "difficulty": "Medium",
        "question_text": "פתרו: <br><strong>2x/5 < 4</strong>",
        "hint": "כפלו ב-5 וחלקו ב-2.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כפל ב-5.", "math_expression": "2x < 20" },
            { "verbal_explanation": "שלב 2: חלוקה ב-2.", "math_expression": "x < 10" }
        ],
        "final_answer": "x < 10",
        "options": ["x < 10", "x > 10", "x < 20", "x < 2"],
        "correctAnswer": 0
    },
    {
        "id": 55,
        "subTopic": "פתרון אי שוויונות",
        "difficulty": "High",
        "question_text": "פתרו: <br><strong>x + 2 > x + 5</strong>",
        "hint": "נסו להחסיר x משני האגפים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחסיר x משני האגפים ונקבל: 2 גדול מ-5.", "math_expression": "2 > 5" },
            { "verbal_explanation": "שלב 2: קיבלנו פסוק שקר (2 מעולם לא גדול מ-5).", "math_expression": "פסוק שקר" },
            { "verbal_explanation": "שלב 3: לכן, אין אף x שמקיים את אי-השוויון.", "math_expression": "אין פתרון" }
        ],
        "final_answer": "אין פתרון",
        "options": ["כל x", "אין פתרון", "x > 3", "x < 7"],
        "correctAnswer": 1
    },
    {
        "id": 56,
        "subTopic": "פתרון אי שוויונות",
        "difficulty": "High",
        "question_text": "פתרו: <br><strong>x + 10 > x + 2</strong>",
        "hint": "נסו להחסיר x משני האגפים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחסיר x משני האגפים ונקבל: 10 גדול מ-2.", "math_expression": "10 > 2" },
            { "verbal_explanation": "שלב 2: קיבלנו פסוק אמת שתמיד נכון, ללא קשר לערך של x.", "math_expression": "פסוק אמת" },
            { "verbal_explanation": "שלב 3: לכן, כל מספר שנציב יהיה פתרון.", "math_expression": "כל x" }
        ],
        "final_answer": "כל x",
        "options": ["כל x", "אין פתרון", "x > 8", "x < 12"],
        "correctAnswer": 0
    },
    {
        "id": 57,
        "subTopic": "פתרון אי שוויונות",
        "difficulty": "Medium",
        "question_text": "פתרו: <br><strong>-x > -4</strong>",
        "hint": "כפלו במינוס 1 והפכו את הסימן.",
        "solution_steps": [
            { "verbal_explanation": "כדי להפוך את מינוס x ל-x חיובי, נכפול במינוס 1 ונהפוך את כיוון הסימן.", "math_expression": "x < 4" }
        ],
        "final_answer": "x < 4",
        "options": ["x > 4", "x < 4", "x < -4", "x > -4"],
        "correctAnswer": 1
    },
    {
        "id": 58,
        "subTopic": "פתרון אי שוויונות",
        "difficulty": "High",
        "question_text": "פתרו: <br><strong>3x - 10 < 5x + 2</strong>",
        "hint": "העבירו את 3x ימינה כדי לשמור על מקדם חיובי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: העברת איקסים ומספרים.", "math_expression": "-10 - 2 < 5x - 3x" },
            { "verbal_explanation": "שלב 2: פישוט.", "math_expression": "-12 < 2x" },
            { "verbal_explanation": "שלב 3: חלוקה.", "math_expression": "-6 < x (כלומר x > -6)" }
        ],
        "final_answer": "x > -6",
        "options": ["x < -6", "x > -6", "x > 6", "x < 6"],
        "correctAnswer": 1
    },
    {
        "id": 59,
        "subTopic": "פתרון אי שוויונות",
        "difficulty": "Low",
        "question_text": "מהו סימן אי-השוויון שמשמעותו 'לכל היותר'?",
        "hint": "חשבו על מספר שהוא שווה או קטן מהערך הנתון.",
        "solution_steps": [
            { "verbal_explanation": "הביטוי 'לכל היותר' אומר שהערך יכול להיות שווה למספר או קטן ממנו, אך לא גדול ממנו.", "math_expression": "≤" }
        ],
        "final_answer": "≤",
        "options": [">", "<", "≥", "≤"],
        "correctAnswer": 3
    },
    {
        "id": 60,
        "subTopic": "פתרון אי שוויונות",
        "difficulty": "High",
        "question_text": "פתרו: <br><strong>(x-1)/2 ≥ (x+1)/3</strong>",
        "hint": "כפל בהצלבה או מכנה משותף 6.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כפל ב-6.", "math_expression": "3(x - 1) ≥ 2(x + 1)" },
            { "verbal_explanation": "שלב 2: פתיחת סוגריים.", "math_expression": "3x - 3 ≥ 2x + 2" },
            { "verbal_explanation": "שלב 3: העברת אגפים.", "math_expression": "x ≥ 5" }
        ],
        "final_answer": "x ≥ 5",
        "options": ["x ≥ 5", "x ≤ 5", "x > 1", "x ≥ 1"],
        "correctAnswer": 0
    },

    // ==============================================================
    // --- תת נושא 4: ייצוג על ציר המספרים (20 שאלות) ---
    // ==============================================================
    {
        "id": 61,
        "subTopic": "ייצוג על ציר המספרים",
        "difficulty": "Low",
        "question_text": "איך מייצגים את התנאי <strong>x > 3</strong> על ציר המספרים?<br>",
        "hint": "האם המספר 3 עצמו כלול בפתרון?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מכיוון שהסימן הוא 'גדול מ' (ללא שווה), נשתמש בעיגול ריק מעל המספר 3.", "math_expression": "עיגול ריק ב-3" },
            { "verbal_explanation": "שלב 2: מכיוון ש-x גדול מ-3, נצבע את החלק הימני של הציר.", "math_expression": "חץ לימין" }
        ],
        "final_answer": "עיגול ריק ב-3 וחץ ימינה.",
        "options": ["עיגול מלא וחץ ימינה", "עיגול ריק וחץ ימינה.", "עיגול ריק וחץ שמאלה", "נקודה בלבד ב-3"],
        "correctAnswer": 1
    },
    {
        "id": 62,
        "subTopic": "ייצוג על ציר המספרים",
        "difficulty": "Low",
        "question_text": "איך מייצגים את התנאי <strong>x ≤ -2</strong> על ציר המספרים?",
        "hint": "שימו לב לסימן 'או שווה'.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הסימן כולל 'שווה', לכן נשתמש בעיגול מלא (צבוע) מעל המספר מינוס 2.", "math_expression": "עיגול מלא ב-2-" },
            { "verbal_explanation": "שלב 2: הסימן הוא 'קטן מ', לכן נצבע את הצד השמאלי של הציר.", "math_expression": "חץ לשמאל" }
        ],
        "final_answer": "עיגול מלא ב-2- וחץ שמאלה.",
        "options": ["עיגול מלא שמאלה", "עיגול ריק שמאלה", "עיגול מלא ימינה", "עיגול ריק ימינה"],
        "correctAnswer": 0
    },
    {
        "id": 63,
        "subTopic": "ייצוג על ציר המספרים",
        "difficulty": "Medium",
        "question_text": "נתון ייצוג גרפי: עיגול ריק ב-5 וחץ שמאלה. איזה אי-שוויון הוא מייצג?",
        "hint": "ריק = ללא שווה. שמאלה = קטן מ.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: העיגול הריק מצביע על כך ש-5 אינו חלק מהפתרון (אין סימן שווה).", "math_expression": "> או <" },
            { "verbal_explanation": "שלב 2: החץ פונה שמאלה, מה שאומר שהפתרונות הם מספרים הקטנים מ-5.", "math_expression": "x < 5" }
        ],
        "final_answer": "x < 5",
        "options": ["x < 5", "x ≤ 5", "x > 5", "x ≥ 5"],
        "correctAnswer": 0
    },
    {
        "id": 64,
        "subTopic": "ייצוג על ציר המספרים",
        "difficulty": "Medium",
        "question_text": "מה המשמעות של <strong>עיגול מלא</strong> בייצוג על ציר המספרים?",
        "hint": "חשבו האם המספר שבקצה 'מוזמן למסיבה'.",
        "solution_steps": [
            { "verbal_explanation": "עיגול מלא מסמל שהמספר שעליו הוא נמצא הוא חלק מקבוצת הפתרונות של אי-השוויון.", "math_expression": "כולל את נקודת הקצה" }
        ],
        "final_answer": "המספר בקצה כלול בפתרון.",
        "options": ["המספר אינו כלול", "המספר כלול בפתרון.", "הפתרון הוא רק המספר הזה", "אין לזה משמעות"],
        "correctAnswer": 1
    },
    {
        "id": 65,
        "subTopic": "ייצוג על ציר המספרים",
        "difficulty": "High",
        "question_text": "איזה ייצוג מתאים לפתרון של <strong>-x ≥ 3</strong>?",
        "hint": "קודם כל פתרו את אי-השוויון בעצמכם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפתור את אי-השוויון. נכפול במינוס 1 ונהפוך סימן.", "math_expression": "x ≤ -3" },
            { "verbal_explanation": "שלב 2: כעת נבחר את הייצוג המתאים: עיגול מלא במינוס 3 וחץ שמאלה.", "math_expression": "מלא ושמאלה" }
        ],
        "final_answer": "עיגול מלא ב-3- וחץ שמאלה.",
        "options": ["עיגול מלא ב-3- שמאלה", "עיגול מלא ב-3 ימינה", "עיגול ריק ב-3- שמאלה", "עיגול ריק ב-3- ימינה"],
        "correctAnswer": 0
    },
    {
        "id": 66,
        "subTopic": "ייצוג על ציר המספרים",
        "difficulty": "Medium",
        "question_text": "על ציר המספרים משורטט קטע בין 2 ל-6 עם עיגולים ריקים בשניהם. איזה תנאי זה מייצג?",
        "hint": "זהו מצב של 'בין לבין'.",
        "solution_steps": [
            { "verbal_explanation": "הפתרון נמצא בחלק המשותף שבין 2 ל-6. מכיוון שהעיגולים ריקים, המספרים 2 ו-6 לא כלולים.", "math_expression": "2 < x < 6" }
        ],
        "final_answer": "2 < x < 6",
        "options": ["2 < x < 6", "2 ≤ x ≤ 6", "x > 2", "x < 6"],
        "correctAnswer": 0
    },
    {
        "id": 67,
        "subTopic": "ייצוג על ציר המספרים",
        "difficulty": "High",
        "question_text": "איך מייצגים 'x הוא מספר חיובי' על ציר המספרים?",
        "hint": "מספר חיובי הוא כל מספר שגדול מאפס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: התנאי למספר חיובי הוא x > 0.", "math_expression": "x > 0" },
            { "verbal_explanation": "שלב 2: נשתמש בעיגול ריק באפס וחץ הפונה ימינה.", "math_expression": "ריק וימינה" }
        ],
        "final_answer": "עיגול ריק ב-0 וחץ ימינה.",
        "options": ["ריק ב-0 ימינה", "מלא ב-0 ימינה", "ריק ב-0 שמאלה", "ריק ב-1 ימינה"],
        "correctAnswer": 0
    },
    {
        "id": 68,
        "subTopic": "ייצוג על ציר המספרים",
        "difficulty": "Medium",
        "question_text": "איזה סימן אי-שוויון מתאים לתיאור 'הטמפרטורה לא עלתה על 10 מעלות'?",
        "hint": "האם היא יכלה להיות 10? האם יכלה להיות 11?",
        "solution_steps": [
            { "verbal_explanation": "הביטוי 'לא עלתה על' אומר שהיא הייתה 10 או פחות מזה.", "math_expression": "x ≤ 10" }
        ],
        "final_answer": "x ≤ 10",
        "options": ["x < 10", "x ≤ 10", "x > 10", "x ≥ 10"],
        "correctAnswer": 1
    },
    {
        "id": 69,
        "subTopic": "ייצוג על ציר המספרים",
        "difficulty": "High",
        "question_text": "נתון: x > 2 וגם x < 5. איך נראה הייצוג המשולב?",
        "hint": "חפשו את החלק שבו שני החצים 'נפגשים'.",
        "solution_steps": [
            { "verbal_explanation": "זהו חיתוך של שתי קבוצות. אנו מחפשים את כל המספרים שהם גם גדולים מ-2 וגם קטנים מ-5.", "math_expression": "קטע סגור בין 2 ל-5" }
        ],
        "final_answer": "קטע צבוע בין 2 ל-5.",
        "options": ["כל הציר צבוע", "קטע בין 2 ל-5.", "חץ מ-2 ימינה וחץ מ-5 ימינה", "אין ייצוג כזה"],
        "correctAnswer": 1
    },
    {
        "id": 70,
        "subTopic": "ייצוג על ציר המספרים",
        "difficulty": "Low",
        "question_text": "מהו הכיוון של המספרים הגדלים על ציר המספרים?",
        "hint": "חשבו על הסדר המקובל.",
        "solution_steps": [
            { "verbal_explanation": "על פי המוסכמה המתמטית, ככל שנעים ימינה על ציר המספרים, הערכים הולכים וגדלים.", "math_expression": "ימינה = גדול יותר" }
        ],
        "final_answer": "ימינה.",
        "options": ["שמאלה", "ימינה.", "למעלה", "למטה"],
        "correctAnswer": 1
    },
    {
        "id": 71,
        "subTopic": "ייצוג על ציר המספרים",
        "difficulty": "High",
        "question_text": "ייצגו על הציר את הפתרון של: <strong>2x + 4 < 4</strong>",
        "hint": "פתרו קודם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: פתרון אי-השוויון. 2x < 0, לכן x < 0.", "math_expression": "x < 0" },
            { "verbal_explanation": "שלב 2: ייצוג: עיגול ריק באפס וחץ שמאלה.", "math_expression": "ריק ושמאלה" }
        ],
        "final_answer": "עיגול ריק ב-0 וחץ שמאלה.",
        "options": ["ריק ב-0 שמאלה", "מלא ב-0 שמאלה", "ריק ב-4 שמאלה", "ריק ב-0 ימינה"],
        "correctAnswer": 0
    },
    {
        "id": 72,
        "subTopic": "ייצוג על ציר המספרים",
        "difficulty": "Medium",
        "question_text": "האם המספר 4 הוא פתרון של הייצוג: 'עיגול מלא ב-4 וחץ ימינה'?",
        "hint": "האם העיגול המלא כולל את המספר?",
        "solution_steps": [
            { "verbal_explanation": "עיגול מלא פירושו שנקודת הקצה (4) היא חלק מהפתרונות.", "math_expression": "כן" }
        ],
        "final_answer": "כן.",
        "options": ["כן.", "לא", "רק אם הוא גדול מ-4", "רק במקרים מיוחדים"],
        "correctAnswer": 0
    },
    {
        "id": 73,
        "subTopic": "ייצוג על ציר המספרים",
        "difficulty": "High",
        "question_text": "איך מייצגים 'x הוא מספר שאינו חיובי'?",
        "hint": "חשבו האם אפס נכלל כאן.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: 'אינו חיובי' פירושו שלילי או אפס. לכן x ≤ 0.", "math_expression": "x ≤ 0" },
            { "verbal_explanation": "שלב 2: נשתמש בעיגול מלא באפס וחץ שמאלה.", "math_expression": "מלא ושמאלה" }
        ],
        "final_answer": "עיגול מלא ב-0 וחץ שמאלה.",
        "options": ["מלא ב-0 שמאלה", "ריק ב-0 שמאלה", "מלא ב-0 ימינה", "רק מספרים שליליים"],
        "correctAnswer": 0
    },
    {
        "id": 74,
        "subTopic": "ייצוג על ציר המספרים",
        "difficulty": "Medium",
        "question_text": "על ציר המספרים מופיע חץ מ-7 ימינה ללא עיגול בקצה. מה זה אומר?",
        "hint": "בדרך כלל אם אין עיגול, מסתכלים על השאלה המקורית.",
        "solution_steps": [
            { "verbal_explanation": "שרטוט תקני מחייב עיגול בקצה (ריק או מלא) כדי שנדע אם 7 כלול. ללא עיגול, השרטוט חסר.", "math_expression": "שרטוט לא שלם" }
        ],
        "final_answer": "השרטוט אינו ברור מספיק ללא עיגול בקצה.",
        "options": ["x > 7", "x ≥ 7", "השרטוט אינו ברור.", "x = 7"],
        "correctAnswer": 2
    },
    {
        "id": 75,
        "subTopic": "ייצוג על ציר המספרים",
        "difficulty": "High",
        "question_text": "ייצגו את פתרון המשוואה x + 5 = 5 על ציר המספרים.",
        "hint": "שימו לב: זו משוואה, לא אי-שוויון.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפתור את המשוואה ונקבל x = 0.", "math_expression": "x = 0" },
            { "verbal_explanation": "שלב 2: במקרה של פתרון בודד, הייצוג הוא פשוט נקודה אחת בודדת מעל המספר 0, ללא חצים.", "math_expression": "נקודה ב-0" }
        ],
        "final_answer": "נקודה בודדת ב-0.",
        "options": ["נקודה בודדת ב-0.", "חץ ימינה מ-0", "עיגול ריק ב-0", "אין פתרון"],
        "correctAnswer": 0
    },
    {
        "id": 76,
        "subTopic": "ייצוג על ציר המספרים",
        "difficulty": "Low",
        "question_text": "איזה כיוון מייצג 'פחות מ-'?",
        "hint": "חפשו את הצד של המספרים הקטנים.",
        "solution_steps": [
            { "verbal_explanation": "מספרים הקטנים מערך מסוים נמצאים תמיד משמאלו על הציר.", "math_expression": "שמאל" }
        ],
        "final_answer": "שמאל.",
        "options": ["שמאל.", "ימין", "למעלה", "למטה"],
        "correctAnswer": 0
    },
    {
        "id": 77,
        "subTopic": "ייצוג על ציר המספרים",
        "difficulty": "Medium",
        "question_text": "איזה מהבאים הוא פתרון של x > -10?",
        "hint": "חפשו מספר שנמצא מימין למינוס 10.",
        "solution_steps": [
            { "verbal_explanation": "כל מספר שגדול ממינוס 10 (כלומר קרוב יותר לאפס או חיובי) הוא פתרון.", "math_expression": "0 > -10" }
        ],
        "final_answer": "0",
        "options": ["15-", "10-", "0", "11-"],
        "correctAnswer": 2
    },
    {
        "id": 78,
        "subTopic": "ייצוג על ציר המספרים",
        "difficulty": "High",
        "question_text": "מה מייצג קו עבה על כל ציר המספרים?",
        "hint": "חשבו על מצב שבו כל פתרון הוא נכון.",
        "solution_steps": [
            { "verbal_explanation": "כאשר כל הציר צבוע, זה אומר שכל מספר שנבחר מקיים את התנאי.", "math_expression": "כל x" }
        ],
        "final_answer": "כל המספרים הם פתרון (כל x).",
        "options": ["אף פתרון", "כל x.", "רק מספרים חיוביים", "רק מספרים שלמים"],
        "correctAnswer": 1
    },
    {
        "id": 79,
        "subTopic": "ייצוג על ציר המספרים",
        "difficulty": "Medium",
        "question_text": "איך מייצגים 'x גדול מ-2 אך קטן או שווה ל-8'?",
        "hint": "שלבו עיגול ריק ועיגול מלא.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בעיגול ריק ב-2 (לא כולל) ובעיגול מלא ב-8 (כולל), ונצבע את הקטע שביניהם.", "math_expression": "2 < x ≤ 8" }
        ],
        "final_answer": "ריק ב-2, מלא ב-8 וקטע ביניהם.",
        "options": ["ריק ב-2 מלא ב-8", "שניהם מלאים", "שניהם ריקים", "חץ מ-2 ל-8"],
        "correctAnswer": 0
    },
    {
        "id": 80,
        "subTopic": "ייצוג על ציר המספרים",
        "difficulty": "Low",
        "question_text": "מהו השלב האחרון בפתרון תרגיל אי-שוויון?",
        "hint": "חשבו על הדרך להראות את התשובה בצורה ויזואלית.",
        "solution_steps": [
            { "verbal_explanation": "השלב הסופי והחשוב ביותר הוא להציג את קבוצת הפתרונות בצורה גרפית על גבי ציר המספרים.", "math_expression": "ייצוג גרפי" }
        ],
        "final_answer": "ייצוג הפתרון על ציר המספרים.",
        "options": ["חישוב מחדש", "ייצוג על הציר.", "מחיקת הדרך", "כתיבת המילה 'סוף'"],
        "correctAnswer": 1
    }
];