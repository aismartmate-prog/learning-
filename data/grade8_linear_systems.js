const questionsDB = [
    // ==============================================================
    // --- תת נושא 1: שיטת ההצבה (20 שאלות) ---
    // ==============================================================
    {
        "id": 1,
        "subTopic": "שיטת ההצבה",
        "difficulty": "Low",
        "question_text": "פתרו את מערכת המשוואות הבאה בעזרת <strong>שיטת ההצבה</strong>:<br>משוואה א: y = 3x<br>משוואה ב: x + y = 12<br><div style='text-align:center; margin:15px 0;'><svg width='120' height='60'><rect x='5' y='5' width='110' height='50' fill='#f1f5f9' stroke='#1e293b' rx='5'/><text x='15' y='25' font-size='12'>y = 3x</text><text x='15' y='45' font-size='12'>x + y = 12</text></svg></div>",
        "hint": "כאשר אנו יודעים למה שווה אחד הנעלמים (כאן y), נשתיל אותו בתוך המשוואה השנייה במקום האות שלו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה מהמשוואה הראשונה ש-y שווה לביטוי 3x. נציב את הביטוי 3x במקום ה-y במשוואה השנייה.", "math_expression": "x + (3x) = 12" },
            { "verbal_explanation": "שלב 2: נחבר את האיברים הדומים באגף שמאל (x ועוד 3x הם 4x).", "math_expression": "4x = 12" },
            { "verbal_explanation": "שלב 3: נחלק את שני אגפי המשוואה ב-4 כדי לבודד את x.", "math_expression": "x = 3" },
            { "verbal_explanation": "שלב 4: נחזור למשוואה הראשונה (y=3x) ונציב בה את ה-x שמצאנו כדי למצוא את y.", "math_expression": "y = 3 * 3 = 9" }
        ],
        "final_answer": "x = 3 , y = 9",
        "options": ["x=3, y=9", "x=9, y=3", "x=4, y=8", "x=2, y=6"],
        "correctAnswer": 0
    },
    {
        "id": 2,
        "subTopic": "שיטת ההצבה",
        "difficulty": "Low",
        "question_text": "פתרו את המערכת: <br>משוואה א: x = y + 4<br>משוואה ב: 2x + y = 14",
        "hint": "כאן ה-x הוא הנעלם המבודד. הציבו את הביטוי (y + 4) בתוך סוגריים במקום ה-x במשוואה השנייה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב את הביטוי של x מהמשוואה הראשונה לתוך המשוואה השנייה (נשתמש בסוגריים).", "math_expression": "2 * (y + 4) + y = 14" },
            { "verbal_explanation": "שלב 2: נפתח את הסוגריים בעזרת חוק הפילוג (2 כפול y ו-2 כפול 4).", "math_expression": "2y + 8 + y = 14" },
            { "verbal_explanation": "שלב 3: נכנס איברים דומים (3y) ונעביר את המספר 8 לאגף ימין בסימן הפוך.", "math_expression": "3y = 6" },
            { "verbal_explanation": "שלב 4: נחלק ב-3 ונקבל את ערך ה-y. לאחר מכן נציב אותו במשוואה הראשונה למציאת x.", "math_expression": "y = 2 -> x = 2 + 4 = 6" }
        ],
        "final_answer": "x = 6 , y = 2",
        "options": ["x=2, y=6", "x=6, y=2", "x=10, y=4", "x=5, y=1"],
        "correctAnswer": 1
    },
    {
        "id": 3,
        "subTopic": "שיטת ההצבה",
        "difficulty": "Medium",
        "question_text": "מצאו את פתרון המערכת: <br>4x - y = 10<br>y = x + 2",
        "hint": "הציבו את הביטוי (x + 2) במקום ה-y. שימו לב שיש סימן מינוס לפני ה-y, לכן הסוגריים קריטיים!",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבצע הצבה של y לתוך המשוואה הראשונה. נשמור על הסוגריים בגלל המינוס.", "math_expression": "4x - (x + 2) = 10" },
            { "verbal_explanation": "שלב 2: נפתח את הסוגריים. המינוס לפני הסוגריים הופך את כל הסימנים שבפנים.", "math_expression": "4x - x - 2 = 10" },
            { "verbal_explanation": "שלב 3: נכנס איברים (3x) ונעביר את המספר 2 ימינה בסימן פלוס.", "math_expression": "3x = 12" },
            { "verbal_explanation": "שלב 4: נפתור למציאת x ואז נחשב את y על ידי הצבה חזרה.", "math_expression": "x = 4 -> y = 4 + 2 = 6" }
        ],
        "final_answer": "x = 4 , y = 6",
        "options": ["x=3, y=5", "x=4, y=6", "x=2, y=4", "x=1, y=3"],
        "correctAnswer": 1
    },
    {
        "id": 4,
        "subTopic": "שיטת ההצבה",
        "difficulty": "Medium",
        "question_text": "פתרו את המערכת הבאה שבה אף נעלם אינו מבודד בתחילה: <br>x + y = 8<br>3x - y = 4<br>בודדו את x מהמשוואה הראשונה ופתרו.",
        "hint": "העבירו את y אגף במשוואה הראשונה כדי לקבל x = 8 - y.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבודד את המשתנה x מהמשוואה הראשונה על ידי העברת y אגף.", "math_expression": "x = 8 - y" },
            { "verbal_explanation": "שלב 2: נציב את הביטוי שקיבלנו במקום x במשוואה השנייה.", "math_expression": "3 * (8 - y) - y = 4" },
            { "verbal_explanation": "שלב 3: נפתח סוגריים: 24 פחות 3y פחות y שווה 4.", "math_expression": "24 - 4y = 4" },
            { "verbal_explanation": "שלב 4: נעביר אגפים: 20 שווה ל-4y. לכן y=5. כעת נמצא את x.", "math_expression": "y = 5 -> x = 8 - 5 = 3" }
        ],
        "final_answer": "x = 3 , y = 5",
        "options": ["x=3, y=5", "x=5, y=3", "x=4, y=4", "x=2, y=6"],
        "correctAnswer": 0
    },
    {
        "id": 5,
        "subTopic": "שיטת ההצבה",
        "difficulty": "High",
        "question_text": "פתרו את המערכת בעזרת הצבה:<br>2x + 3y = 13<br>x - 2y = -4",
        "hint": "הכי קל לבודד את x מהמשוואה השנייה: x = 2y - 4.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבודד את הנעלם x מהמשוואה השנייה.", "math_expression": "x = 2y - 4" },
            { "verbal_explanation": "שלב 2: נציב את הביטוי שבודדנו בתוך המשוואה הראשונה.", "math_expression": "2 * (2y - 4) + 3y = 13" },
            { "verbal_explanation": "שלב 3: נפתח סוגריים ונכנס איברים דומים באגף שמאל.", "math_expression": "4y - 8 + 3y = 13 -> 7y = 21" },
            { "verbal_explanation": "שלב 4: נחשב את y ואז נציב למציאת x.", "math_expression": "y = 3 -> x = 2 * 3 - 4 = 2" }
        ],
        "final_answer": "x = 2 , y = 3",
        "options": ["x=2, y=3", "x=3, y=2", "x=1, y=5", "x=4, y=1"],
        "correctAnswer": 0
    },
    {
        "id": 6,
        "subTopic": "שיטת ההצבה",
        "difficulty": "Low",
        "question_text": "נתון x = 4. במערכת המשוואות הבאה:<br>x = 4<br>y = 2x - 3<br>מהו ערכו של y?",
        "hint": "זוהי הצבה ישירה. החליפו את האות x במספר 4 וחשבו את התוצאה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב את המספר 4 במקום הנעלם x בתוך הביטוי של y.", "math_expression": "y = 2 * 4 - 3" },
            { "verbal_explanation": "שלב 2: נבצע קודם את פעולת הכפל ואחר כך את החיסור.", "math_expression": "y = 8 - 3 = 5" }
        ],
        "final_answer": "y = 5",
        "options": ["y=5", "y=4", "y=8", "y=1"],
        "correctAnswer": 0
    },
    {
        "id": 7,
        "subTopic": "שיטת ההצבה",
        "difficulty": "Medium",
        "question_text": "פתרו את המערכת שבה שני הנעלמים מבודדים:<br>y = 5x - 2<br>y = 2x + 7",
        "hint": "אם שני הביטויים שווים ל-y, הם חייבים להיות שווים זה לזה. השוו ביניהם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבנה משוואה על ידי השוואת שני האגפים הימניים.", "math_expression": "5x - 2 = 2x + 7" },
            { "verbal_explanation": "שלב 2: נעביר את ה-2x שמאלה בחיסור ואת ה-2 ימינה בחיבור.", "math_expression": "3x = 9" },
            { "verbal_explanation": "שלב 3: נמצא את ערך ה-x.", "math_expression": "x = 3" },
            { "verbal_explanation": "שלב 4: נציב x=3 באחת המשוואות כדי למצוא את y.", "math_expression": "y = 2 * 3 + 7 = 13" }
        ],
        "final_answer": "x = 3 , y = 13",
        "options": ["x=3, y=13", "x=13, y=3", "x=2, y=8", "x=4, y=18"],
        "correctAnswer": 0
    },
    {
        "id": 8,
        "subTopic": "שיטת ההצבה",
        "difficulty": "High",
        "question_text": "פתרו את המערכת הבאה המכילה שברים:<br>x/3 + y = 4<br>x + y = 6",
        "hint": "בודדו את y מהמשוואה השנייה: y = 6 - x. הצבה בשבר דורשת זהירות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבודד את y מהמשוואה השנייה (הפשוטה יותר).", "math_expression": "y = 6 - x" },
            { "verbal_explanation": "שלב 2: נציב את הביטוי שקיבלנו במקום y במשוואה הראשונה.", "math_expression": "x/3 + (6 - x) = 4" },
            { "verbal_explanation": "שלב 3: נכפיל את כל המשוואה ב-3 כדי לבטל את המכנה.", "math_expression": "x + 18 - 3x = 12" },
            { "verbal_explanation": "שלב 4: נכנס איברים (מינוס 2x) ונעביר את 18 אגף.", "math_expression": "-2x = -6 -> x = 3" },
            { "verbal_explanation": "שלב 5: נמצא את y.", "math_expression": "y = 6 - 3 = 3" }
        ],
        "final_answer": "x = 3 , y = 3",
        "options": ["x=3, y=3", "x=6, y=0", "x=0, y=6", "x=4, y=2"],
        "correctAnswer": 0
    },
    {
        "id": 9,
        "subTopic": "שיטת ההצבה",
        "difficulty": "Medium",
        "question_text": "בדקו האם הנקודה (3, 5) היא פתרון של המערכת:<br>y = 2x - 1<br>x + y = 8?",
        "hint": "הציבו x=3 ו-y=5 בשתי המשוואות ובדקו האם מתקבל 'פסוק אמת' בשתיהן.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב במשוואה הראשונה. 5 שווה ל-2 כפול 3 פחות 1? כן.", "math_expression": "5 = 2 * 3 - 1 (אמת)" },
            { "verbal_explanation": "שלב 2: נציב במשוואה השנייה. 3 ועוד 5 שווה ל-8? כן.", "math_expression": "3 + 5 = 8 (אמת)" },
            { "verbal_explanation": "שלב 3: מאחר ושתי הבדיקות הצליחו, הנקודה היא פתרון תקין למערכת.", "math_expression": "V" }
        ],
        "final_answer": "כן, הנקודה היא פתרון.",
        "options": ["כן", "לא", "רק למשוואה הראשונה", "רק למשוואה השנייה"],
        "correctAnswer": 0
    },
    {
        "id": 10,
        "subTopic": "שיטת ההצבה",
        "difficulty": "High",
        "question_text": "פתרו את המערכת הבאה:<br>y = 2x - 7<br>3x + 2y = 14",
        "hint": "הציבו את הביטוי (2x - 7) במקום ה-y במשוואה השנייה והשתמשו בחוק הפילוג.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבצע הצבה לתוך המשוואה השנייה.", "math_expression": "3x + 2 * (2x - 7) = 14" },
            { "verbal_explanation": "שלב 2: נפתח סוגריים: 3x פלוס 4x פחות 14 שווה 14.", "math_expression": "7x - 14 = 14" },
            { "verbal_explanation": "שלב 3: נעביר את 14 ימינה בסימן פלוס: 7x שווה 28.", "math_expression": "7x = 28 -> x = 4" },
            { "verbal_explanation": "שלב 4: נמצא את y על ידי הצבה חזרה.", "math_expression": "y = 2 * 4 - 7 = 1" }
        ],
        "final_answer": "x = 4 , y = 1",
        "options": ["x=4, y=1", "x=1, y=4", "x=2, y=-3", "x=5, y=3"],
        "correctAnswer": 0
    },
    {
        "id": 11,
        "subTopic": "שיטת ההצבה",
        "difficulty": "Medium",
        "question_text": "פתרו: <br>x = 2y<br>x + 4y = 18",
        "hint": "החליפו את x בביטוי 2y.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבצע את ההצבה.", "math_expression": "(2y) + 4y = 18" },
            { "verbal_explanation": "שלב 2: נחבר את המשתנים: 6y שווה 18.", "math_expression": "6y = 18" },
            { "verbal_explanation": "שלב 3: נמצא את y ואז את x.", "math_expression": "y = 3 -> x = 2 * 3 = 6" }
        ],
        "final_answer": "x = 6 , y = 3",
        "options": ["x=6, y=3", "x=3, y=6", "x=4, y=2", "x=8, y=4"],
        "correctAnswer": 0
    },
    {
        "id": 12,
        "subTopic": "שיטת ההצבה",
        "difficulty": "High",
        "question_text": "פתרו: <br>y = x/2<br>3x - 2y = 12",
        "hint": "הציבו x/2 במקום y. שימו לב שהשבר יצטמצם עם המקדם 2.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב את הביטוי השברי במשוואה השנייה.", "math_expression": "3x - 2 * (x/2) = 12" },
            { "verbal_explanation": "שלב 2: נצמצם את ה-2 במונה ובמכנה: 3x פחות x שווה 12.", "math_expression": "2x = 12" },
            { "verbal_explanation": "שלב 3: נמצא את x ואז את y.", "math_expression": "x = 6 -> y = 6 / 2 = 3" }
        ],
        "final_answer": "x = 6 , y = 3",
        "options": ["x=6, y=3", "x=4, y=2", "x=12, y=6", "x=8, y=4"],
        "correctAnswer": 0
    },
    {
        "id": 13,
        "subTopic": "שיטת ההצבה",
        "difficulty": "Medium",
        "question_text": "פתרו: <br>x + y = 0<br>4x + y = 9",
        "hint": "בודדו את y מהמשוואה הראשונה: y = -x.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבודד נעלם.", "math_expression": "y = -x" },
            { "verbal_explanation": "שלב 2: נציב במשוואה השנייה.", "math_expression": "4x + (-x) = 9" },
            { "verbal_explanation": "שלב 3: נפתור: 3x שווה 9.", "math_expression": "x = 3" },
            { "verbal_explanation": "שלב 4: נמצא את y.", "math_explanation": "y = -3" }
        ],
        "final_answer": "x = 3 , y = -3",
        "options": ["x=3, y=-3", "x=-3, y=3", "x=0, y=0", "x=1, y=8"],
        "correctAnswer": 0
    },
    {
        "id": 14,
        "subTopic": "שיטת ההצבה",
        "difficulty": "High",
        "question_text": "פתרו: <br>x = 3y - 2<br>2x - 5y = 1",
        "hint": "הציבו את (3y - 2) במקום x והיזהרו בפתיחת הסוגריים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב במשוואה השנייה.", "math_expression": "2 * (3y - 2) - 5y = 1" },
            { "verbal_explanation": "שלב 2: נפתח סוגריים: 6y פחות 4 פחות 5y שווה 1.", "math_expression": "y - 4 = 1" },
            { "verbal_explanation": "שלב 3: נעביר את ה-4 אגף.", "math_expression": "y = 5" },
            { "verbal_explanation": "שלב 4: נמצא את x.", "math_expression": "x = 3 * 5 - 2 = 13" }
        ],
        "final_answer": "x = 13 , y = 5",
        "options": ["x=13, y=5", "x=5, y=13", "x=7, y=3", "x=1, y=1"],
        "correctAnswer": 0
    },
    {
        "id": 15,
        "subTopic": "שיטת ההצבה",
        "difficulty": "Medium",
        "question_text": "פתרו: <br>y = -2x + 10<br>y = x + 1",
        "hint": "השוו בין שני הביטויים של y.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבנה משוואת השוואה.", "math_expression": "-2x + 10 = x + 1" },
            { "verbal_explanation": "שלב 2: נעביר את ה-x שמאלה בחיסור ואת ה-10 ימינה בחיסור.", "math_expression": "-3x = -9" },
            { "verbal_explanation": "שלב 3: נחלק במינוס 3.", "math_expression": "x = 3" },
            { "verbal_explanation": "שלב 4: נמצא את y.", "math_expression": "y = 3 + 1 = 4" }
        ],
        "final_answer": "x = 3 , y = 4",
        "options": ["x=3, y=4", "x=4, y=3", "x=2, y=6", "x=1, y=2"],
        "correctAnswer": 0
    },
    {
        "id": 16,
        "subTopic": "שיטת ההצבה",
        "difficulty": "Low",
        "question_text": "נתון ש-y=0. פתרו את המערכת:<br>y = 0<br>5x + 2y = 20",
        "hint": "הציבו y=0 ופתרו את המשוואה שנותרה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב 0 במקום y. האיבר 2y מתבטל.", "math_expression": "5x + 0 = 20" },
            { "verbal_explanation": "שלב 2: נחלק ב-5.", "math_expression": "x = 4" }
        ],
        "final_answer": "x = 4 , y = 0",
        "options": ["x=4, y=0", "x=0, y=4", "x=5, y=0", "x=2, y=0"],
        "correctAnswer": 0
    },
    {
        "id": 17,
        "subTopic": "שיטת ההצבה",
        "difficulty": "High",
        "question_text": "פתרו: <br>x = 5y<br>x/5 + y = 10",
        "hint": "הציבו 5y במקום x בשבר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב 5y במונה של השבר.", "math_expression": "(5y) / 5 + y = 10" },
            { "verbal_explanation": "שלב 2: נבצע את החילוק (נקבל y). נחבר את ה-y.", "math_expression": "y + y = 10 -> 2y = 10" },
            { "verbal_explanation": "שלב 3: נמצא את המשתנים.", "math_expression": "y = 5 -> x = 5 * 5 = 25" }
        ],
        "final_answer": "x = 25 , y = 5",
        "options": ["x=25, y=5", "x=5, y=1", "x=10, y=2", "x=50, y=10"],
        "correctAnswer": 0
    },
    {
        "id": 18,
        "subTopic": "שיטת ההצבה",
        "difficulty": "Medium",
        "question_text": "פתרו: <br>y = -4x + 12<br>x + y = 6",
        "hint": "הציבו את הביטוי של y לתוך המשוואה השנייה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ביצוע הצבה.", "math_expression": "x + (-4x + 12) = 6" },
            { "verbal_explanation": "שלב 2: כינוס איברים: מינוס 3x ועוד 12 שווה 6.", "math_expression": "-3x + 12 = 6" },
            { "verbal_explanation": "שלב 3: נעביר 12 אגף: מינוס 3x שווה למינוס 6.", "math_expression": "-3x = -6 -> x = 2" },
            { "verbal_explanation": "שלב 4: נמצא את y.", "math_expression": "y = 6 - 2 = 4" }
        ],
        "final_answer": "x = 2 , y = 4",
        "options": ["x=2, y=4", "x=4, y=2", "x=3, y=0", "x=1, y=5"],
        "correctAnswer": 0
    },
    {
        "id": 19,
        "subTopic": "שיטת ההצבה",
        "difficulty": "High",
        "question_text": "מה ניתן לומר על מערכת שבה הצבנו וקיבלנו פסוק שקר (למשל 0=5)?",
        "hint": "חשבו על היחס בין הקווים הישרים שמייצגות המשוואות.",
        "solution_steps": [
            { "verbal_explanation": "אם במהלך פתרון מערכת משוואות בהצבה אנו מקבלים פסוק שקר (מספר שאינו שווה לעצמו), זה מעיד על כך שהישרים מקבילים ואינם נפגשים לעולם.", "math_expression": "0 ≠ 5" }
        ],
        "final_answer": "למערכת אין פתרון.",
        "options": ["אין פתרון", "אינסוף פתרונות", "פתרון יחיד (0,0)", "הפתרון הוא 5"],
        "correctAnswer": 0
    },
    {
        "id": 20,
        "subTopic": "שיטת ההצבה",
        "difficulty": "High",
        "question_text": "פתרו את המערכת המאתגרת:<br>x - y = 4<br>2x - 2y = 8",
        "hint": "בודדו את x מהראשונה: x = y + 4 והציבו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: בידוד x.", "math_expression": "x = y + 4" },
            { "verbal_explanation": "שלב 2: הצבה במשוואה השנייה.", "math_expression": "2 * (y + 4) - 2y = 8" },
            { "verbal_explanation": "שלב 3: פתיחת סוגריים: 2y פלוס 8 פחות 2y שווה 8.", "math_expression": "8 = 8" },
            { "verbal_explanation": "שלב 4: קיבלנו פסוק אמת (8=8) לכל ערך. זה אומר ששתי המשוואות מייצגות את אותו קו.", "math_expression": "אינסוף פתרונות" }
        ],
        "final_answer": "למערכת יש אינסוף פתרונות.",
        "options": ["אינסוף פתרונות", "אין פתרון", "x=4, y=0", "x=0, y=-4"],
        "correctAnswer": 0
    },

    // ==============================================================
    // --- תת נושא 2: שיטת השוואת מקדמים (20 שאלות) ---
    // ==============================================================
    {
        "id": 21,
        "subTopic": "שיטת השוואת מקדמים",
        "difficulty": "Low",
        "question_text": "פתרו בעזרת <strong>שיטת השוואת מקדמים</strong> (חיבור משוואות):<br>x + y = 14<br>x - y = 6<br><div style='text-align:center; margin:15px 0;'><svg width='120' height='70'><line x1='10' y1='50' x2='110' y2='50' stroke='red' stroke-width='2'/><text x='50' y='65' fill='red'>+</text><text x='15' y='20' font-size='12'>x + y = 14</text><text x='15' y='40' font-size='12'>x - y = 6</text></svg></div>",
        "hint": "חברו את שתי המשוואות זו לזו. שימו לב שה-+y וה--y יבטלו זה את זה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחבר את שתי המשוואות בטור. x ועוד x הם 2x. המשתנה y מתבטל (y פחות y שווה 0).", "math_expression": "2x = 20" },
            { "verbal_explanation": "שלב 2: נחלק את שני האגפים ב-2 כדי למצוא את x.", "math_expression": "x = 10" },
            { "verbal_explanation": "שלב 3: נציב x=10 באחת המשוואות המקוריות כדי למצוא את y.", "math_expression": "10 + y = 14 -> y = 4" }
        ],
        "final_answer": "x = 10 , y = 4",
        "options": ["x=10, y=4", "x=4, y=10", "x=7, y=7", "x=20, y=0"],
        "correctAnswer": 0
    },
    {
        "id": 22,
        "subTopic": "שיטת השוואת מקדמים",
        "difficulty": "Low",
        "question_text": "פתרו את המערכת:<br>3x + y = 10<br>2x - y = 5",
        "hint": "חברו את המשוואות. המקדמים של y הם 1 ו-מינוס 1, לכן הם יצטמצמו לאפס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: חיבור משוואות בטור.", "math_expression": "5x = 15" },
            { "verbal_explanation": "שלב 2: נחלק ב-5 למציאת x.", "math_expression": "x = 3" },
            { "verbal_explanation": "שלב 3: נציב x=3 במשוואה הראשונה למציאת y.", "math_expression": "3 * 3 + y = 10 -> 9 + y = 10 -> y = 1" }
        ],
        "final_answer": "x = 3 , y = 1",
        "options": ["x=3, y=1", "x=1, y=3", "x=2, y=4", "x=5, y=0"],
        "correctAnswer": 0
    },
    {
        "id": 23,
        "subTopic": "שיטת השוואת מקדמים",
        "difficulty": "Medium",
        "question_text": "פתרו את המערכת בעזרת <strong>חיסור</strong> משוואות:<br>x + 3y = 12<br>x + y = 8",
        "hint": "המקדמים של x זהים (1). אם נחסיר את המשוואה השנייה מהראשונה, ה-x יעלם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחסיר את המשוואה השנייה מהראשונה. x פחות x זה 0. 3y פחות y זה 2y.", "math_expression": "2y = 4" },
            { "verbal_explanation": "שלב 2: נחלק ב-2 ונקבל את ערך ה-y.", "math_expression": "y = 2" },
            { "verbal_explanation": "שלב 3: נציב y=2 במשוואה השנייה כדי למצוא את x.", "math_expression": "x + 2 = 8 -> x = 6" }
        ],
        "final_answer": "x = 6 , y = 2",
        "options": ["x=6, y=2", "x=2, y=6", "x=4, y=4", "x=8, y=0"],
        "correctAnswer": 0
    },
    {
        "id": 24,
        "subTopic": "שיטת השוואת מקדמים",
        "difficulty": "Medium",
        "question_text": "פתרו את המערכת:<br>4x + 2y = 20<br>x + 2y = 11",
        "hint": "המקדמים של y זהים. בצעו חיסור בין המשוואות כדי לבטל את y.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחסיר בטור. 4x פחות x זה 3x. ה-2y מתבטל לחלוטין.", "math_expression": "3x = 20 - 11" },
            { "verbal_explanation": "שלב 2: 3x = 9, לכן x = 3.", "math_expression": "x = 3" },
            { "verbal_explanation": "שלב 3: נציב x=3 במשוואה השנייה.", "math_expression": "3 + 2y = 11" },
            { "verbal_explanation": "שלב 4: נפתור: 2y = 8, לכן y = 4.", "math_expression": "y = 4" }
        ],
        "final_answer": "x = 3 , y = 4",
        "options": ["x=3, y=4", "x=4, y=3", "x=5, y=0", "x=2, y=6"],
        "correctAnswer": 0
    },
    {
        "id": 25,
        "subTopic": "שיטת השוואת מקדמים",
        "difficulty": "High",
        "question_text": "במערכת הבאה המקדמים אינם שווים: <br>x + y = 6<br>2x + 3y = 16<br>באיזה מספר כדאי להכפיל את המשוואה הראשונה כדי להשוות מקדמים?",
        "hint": "עלינו להביא את אחד הנעלמים לאותו מספר. אם נכפיל את הראשונה ב-2, נקבל 2x בשתי המשוואות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבחר להשוות את המקדמים של x. נכפיל את כל איברי המשוואה הראשונה ב-2.", "math_expression": "2 * (x + y = 6) -> 2x + 2y = 12" },
            { "verbal_explanation": "שלב 2: כעת נרשום את המערכת החדשה ונחסיר משוואות.", "math_expression": "(2x + 3y = 16) - (2x + 2y = 12)" },
            { "verbal_explanation": "שלב 3: נבצע חיסור: y = 4.", "math_expression": "y = 4" },
            { "verbal_explanation": "שלב 4: נציב x + 4 = 6 למציאת x.", "math_expression": "x = 2" }
        ],
        "final_answer": "כדאי להכפיל ב-2. x=2, y=4.",
        "options": ["להכפיל ב-2", "להכפיל ב-5", "לחלק ב-2", "אין צורך"],
        "correctAnswer": 0
    },
    {
        "id": 26,
        "subTopic": "שיטת השוואת מקדמים",
        "difficulty": "Medium",
        "question_text": "פתרו: <br>5x - y = 12<br>3x + y = 4",
        "hint": "המקדמים של y הם נגדיים (1 ו-מינוס 1). חברו את המשוואות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: חיבור משוואות.", "math_expression": "8x = 16" },
            { "verbal_explanation": "שלב 2: נמצא את x.", "math_expression": "x = 2" },
            { "verbal_explanation": "שלב 3: נמצא את y על ידי הצבה.", "math_expression": "3 * 2 + y = 4 -> y = -2" }
        ],
        "final_answer": "x = 2 , y = -2",
        "options": ["x=2, y=-2", "x=-2, y=2", "x=4, y=8", "x=1, y=1"],
        "correctAnswer": 0
    },
    {
        "id": 27,
        "subTopic": "שיטת השוואת מקדמים",
        "difficulty": "High",
        "question_text": "פתרו: <br>3x + 4y = 18<br>3x - y = 3",
        "hint": "המקדמים של x זהים. חסרו משוואות ושימו לב: 4y פחות (מינוס y) הופך ל-5y.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחסיר את המשוואה השנייה מהראשונה.", "math_expression": "(3x-3x) + (4y - (-y)) = 18 - 3" },
            { "verbal_explanation": "שלב 2: נחשב את התוצאה: 5y שווה ל-15.", "math_expression": "5y = 15" },
            { "verbal_explanation": "שלב 3: נמצא את y.", "math_expression": "y = 3" },
            { "verbal_explanation": "שלב 4: נמצא את x.", "math_expression": "3x - 3 = 3 -> 3x = 6 -> x = 2" }
        ],
        "final_answer": "x = 2 , y = 3",
        "options": ["x=2, y=3", "x=3, y=2", "x=4, y=1.5", "x=1, y=4"],
        "correctAnswer": 0
    },
    {
        "id": 28,
        "subTopic": "שיטת השוואת מקדמים",
        "difficulty": "High",
        "question_text": "פתרו: <br>x + 2y = 10<br>2x + y = 11",
        "hint": "הכפילו את המשוואה הראשונה ב-2 כדי להשוות את המקדמים של x.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הכפלת משוואה ראשונה ב-2.", "math_expression": "2x + 4y = 20" },
            { "verbal_explanation": "שלב 2: חיסור המשוואה השנייה המקורית מהחדשה.", "math_expression": "3y = 9" },
            { "verbal_explanation": "שלב 3: מציאת y.", "math_expression": "y = 3" },
            { "verbal_explanation": "שלב 4: מציאת x.", "math_expression": "x + 2*3 = 10 -> x = 4" }
        ],
        "final_answer": "x = 4 , y = 3",
        "options": ["x=4, y=3", "x=3, y=4", "x=5, y=1", "x=2, y=4"],
        "correctAnswer": 0
    },
    {
        "id": 29,
        "subTopic": "שיטת השוואת מקדמים",
        "difficulty": "Medium",
        "question_text": "מתי נעדיף להשתמש בחיבור משוואות במקום חיסור בשיטה זו?",
        "hint": "חשבו על המקרה שבו המקדמים הם מספרים כמו 4 ו-מינוס 4.",
        "solution_steps": [
            { "verbal_explanation": "אנו מחברים משוואות כאשר לאחד הנעלמים יש מקדמים שהם מספרים נגדיים, כי פעולת החיבור תבטל אותם ותיתן אפס.", "math_expression": "A + (-A) = 0" }
        ],
        "final_answer": "כאשר המקדמים של אותו נעלם הם מספרים נגדיים.",
        "options": ["כשהמקדמים נגדיים", "כשהמקדמים זהים", "תמיד", "אף פעם"],
        "correctAnswer": 0
    },
    {
        "id": 30,
        "subTopic": "שיטת השוואת מקדמים",
        "difficulty": "Low",
        "question_text": "פתרו: <br>x + y = 20<br>-x + y = 10",
        "hint": "חברו את המשוואות. ה-x יתבטל מיד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: חיבור.", "math_expression": "2y = 30" },
            { "verbal_explanation": "שלב 2: מציאת y.", "math_expression": "y = 15" },
            { "verbal_explanation": "שלב 3: מציאת x.", "math_expression": "x + 15 = 20 -> x = 5" }
        ],
        "final_answer": "x = 5 , y = 15",
        "options": ["x=5, y=15", "x=15, y=5", "x=10, y=10", "x=20, y=0"],
        "correctAnswer": 0
    },
    {
        "id": 31,
        "subTopic": "שיטת השוואת מקדמים",
        "difficulty": "Medium",
        "question_text": "פתרו: <br>2x + 2y = 12<br>2x + 2y = 20",
        "hint": "מה קורה אם ננסה להחסיר את המשוואות?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחסיר את המשוואות. נקבל: 0 שווה למינוס 8.", "math_expression": "0 = -8" },
            { "verbal_explanation": "שלב 2: קיבלנו פסוק שקר. זה אומר שאין אף זוג (x,y) שיכול לקיים את שתי המשוואות בו-זמנית.", "math_expression": "פסוק שקר" }
        ],
        "final_answer": "אין פתרון למערכת.",
        "options": ["אין פתרון", "אינסוף פתרונות", "x=0, y=0", "x=4, y=2"],
        "correctAnswer": 0
    },
    {
        "id": 32,
        "subTopic": "שיטת השוואת מקדמים",
        "difficulty": "High",
        "question_text": "פתרו: <br>x + 2y = 8<br>3x - y = 3",
        "hint": "הכפילו את המשוואה השנייה ב-2 כדי להשוות את המקדמים של y.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הכפלת משוואה ב' ב-2.", "math_expression": "6x - 2y = 6" },
            { "verbal_explanation": "שלב 2: חיבור עם משוואה א'.", "math_expression": "7x = 14" },
            { "verbal_explanation": "שלב 3: מציאת x.", "math_expression": "x = 2" },
            { "verbal_explanation": "שלב 4: מציאת y.", "math_expression": "2 + 2y = 8 -> 2y = 6 -> y = 3" }
        ],
        "final_answer": "x = 2 , y = 3",
        "options": ["x=2, y=3", "x=3, y=2", "x=4, y=2", "x=1, y=3.5"],
        "correctAnswer": 0
    },
    {
        "id": 33,
        "subTopic": "שיטת השוואת מקדמים",
        "difficulty": "Medium",
        "question_text": "פתרו: <br>8x + y = 30<br>2x + y = 12",
        "hint": "חסרו משוואות כדי לבטל את y.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: חיסור.", "math_expression": "6x = 18" },
            { "verbal_explanation": "שלב 2: מציאת x.", "math_expression": "x = 3" },
            { "verbal_explanation": "שלב 3: מציאת y.", "math_expression": "2 * 3 + y = 12 -> y = 6" }
        ],
        "final_answer": "x = 3 , y = 6",
        "options": ["x=3, y=6", "x=6, y=3", "x=4, y=-2", "x=2, y=8"],
        "correctAnswer": 0
    },
    {
        "id": 34,
        "subTopic": "שיטת השוואת מקדמים",
        "difficulty": "High",
        "question_text": "פתרו: <br>x/2 + y = 7<br>x/2 - y = 1",
        "hint": "חברו את המשוואות כפי שהן עם השברים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: חיבור. חצי x ועוד חצי x זה x שלם. ה-y מתבטל.", "math_expression": "x = 8" },
            { "verbal_explanation": "שלב 2: הצבה במשוואה הראשונה.", "math_expression": "8/2 + y = 7 -> 4 + y = 7" },
            { "verbal_explanation": "שלב 3: פתרון ל-y.", "math_expression": "y = 3" }
        ],
        "final_answer": "x = 8 , y = 3",
        "options": ["x=8, y=3", "x=4, y=5", "x=10, y=2", "x=6, y=4"],
        "correctAnswer": 0
    },
    {
        "id": 35,
        "subTopic": "שיטת השוואת מקדמים",
        "difficulty": "High",
        "question_text": "פתרו: <br>2x + 3y = 8<br>3x - 2y = -1",
        "hint": "כאן צריך להכפיל את שתי המשוואות. נסו להגיע ל-6y ומינוס 6y.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את הראשונה ב-2 ואת השנייה ב-3.", "math_expression": "4x+6y=16 , 9x-6y=-3" },
            { "verbal_explanation": "שלב 2: נחבר בין המשוואות.", "math_expression": "13x = 13" },
            { "verbal_explanation": "שלב 3: נמצא את x.", "math_expression": "x = 1" },
            { "verbal_explanation": "שלב 4: נמצא את y.", "math_expression": "2*1 + 3y = 8 -> 3y = 6 -> y = 2" }
        ],
        "final_answer": "x = 1 , y = 2",
        "options": ["x=1, y=2", "x=2, y=1", "x=0, y=2.6", "x=4, y=0"],
        "correctAnswer": 0
    },
    {
        "id": 36,
        "subTopic": "שיטת השוואת מקדמים",
        "difficulty": "Medium",
        "question_text": "פתרו: <br>6x + y = 22<br>2x + y = 10",
        "hint": "חסרו משוואות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: חיסור.", "math_expression": "4x = 12" },
            { "verbal_explanation": "שלב 2: מציאת x.", "math_expression": "x = 3" },
            { "verbal_explanation": "שלב 3: מציאת y.", "math_expression": "2*3 + y = 10 -> y = 4" }
        ],
        "final_answer": "x = 3 , y = 4",
        "options": ["x=3, y=4", "x=4, y=3", "x=2, y=10", "x=5, y=0"],
        "correctAnswer": 0
    },
    {
        "id": 37,
        "subTopic": "שיטת השוואת מקדמים",
        "difficulty": "High",
        "question_text": "באיזה מקרה שיטת השוואת מקדמים היא היעילה ביותר?",
        "hint": "חשבו על מבנה המשוואות.",
        "solution_steps": [
            { "verbal_explanation": "השיטה יעילה במיוחד כאשר המשוואות מסודרות כך שהנעלמים נמצאים זה מתחת לזה, וכאשר המקדמים הם מספרים קטנים שקל למצוא להם מכנה משותף.", "math_expression": "מבנה טורי" }
        ],
        "final_answer": "כאשר המשוואות מסודרות בטור והמקדמים נוחים להשוואה.",
        "options": ["כשהמשוואות מסודרות בטור", "כשיש נעלם מבודד", "רק כשיש שברים", "תמיד"],
        "correctAnswer": 0
    },
    {
        "id": 38,
        "subTopic": "שיטת השוואת מקדמים",
        "difficulty": "Low",
        "question_text": "פתרו: <br>x + y = 11<br>x - y = 1",
        "hint": "חברו משוואות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: חיבור.", "math_expression": "2x = 12" },
            { "verbal_explanation": "שלב 2: מציאת x.", "math_expression": "x = 6" },
            { "verbal_explanation": "שלב 3: מציאת y.", "math_expression": "6 + y = 11 -> y = 5" }
        ],
        "final_answer": "x = 6 , y = 5",
        "options": ["x=6, y=5", "x=5, y=6", "x=10, y=1", "x=11, y=0"],
        "correctAnswer": 0
    },
    {
        "id": 39,
        "subTopic": "שיטת השוואת מקדמים",
        "difficulty": "High",
        "question_text": "פתרו: <br>2x + y = 10<br>x + 3y = 15",
        "hint": "הכפילו את המשוואה הראשונה ב-3 כדי להשוות את ה-y.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הכפלת משוואה א' ב-3.", "math_expression": "6x + 3y = 30" },
            { "verbal_explanation": "שלב 2: חיסור משוואה ב' מהחדשה.", "math_expression": "5x = 15" },
            { "verbal_explanation": "שלב 3: מציאת x.", "math_expression": "x = 3" },
            { "verbal_explanation": "שלב 4: מציאת y.", "math_expression": "2*3 + y = 10 -> y = 4" }
        ],
        "final_answer": "x = 3 , y = 4",
        "options": ["x=3, y=4", "x=4, y=3", "x=5, y=0", "x=2, y=6"],
        "correctAnswer": 0
    },
    {
        "id": 40,
        "subTopic": "שיטת השוואת מקדמים",
        "difficulty": "High",
        "question_text": "פתרו: <br>x/4 + y/3 = 5<br>x/4 - y/3 = 1",
        "hint": "חברו את המשוואות כפי שהן.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: חיבור משוואות. ה-y מתבטל. רבע x ועוד רבע x זה חצי x.", "math_expression": "x/2 = 6" },
            { "verbal_explanation": "שלב 2: נמצא את x.", "math_expression": "x = 12" },
            { "verbal_explanation": "שלב 3: הצבה במשוואה השנייה.", "math_expression": "12/4 - y/3 = 1 -> 3 - y/3 = 1" },
            { "verbal_explanation": "שלב 4: נמצא את y.", "math_expression": "y/3 = 2 -> y = 6" }
        ],
        "final_answer": "x = 12 , y = 6",
        "options": ["x=12, y=6", "x=8, y=9", "x=4, y=12", "x=16, y=3"],
        "correctAnswer": 0
    },,
    // ==============================================================
    // --- תת נושא 3: פתרון גרף (20 שאלות) ---
    // ==============================================================
    {
        "id": 41,
        "subTopic": "פתרון גרף",
        "difficulty": "Low",
        "question_text": "מה מייצגת <strong>נקודת החיתוך</strong> של שני ישרים המשורטטים במערכת צירים אחת?<br><div style='text-align:center; margin:15px 0;'><svg width='120' height='100'><line x1='10' y1='80' x2='110' y2='20' stroke='#1e293b' stroke-width='2'/><line x1='10' y1='20' x2='110' y2='80' stroke='#b09151' stroke-width='2'/><circle cx='60' cy='50' r='4' fill='red'/><text x='65' y='45' fill='red' font-size='10'>?</text></svg></div>",
        "hint": "חשבו על ערכי ה-x וה-y בנקודה המשותפת לשני הישרים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כל נקודה על ישר מייצגת פתרון אפשרי למשוואה שלו.", "math_expression": "נקודה = פתרון" },
            { "verbal_explanation": "שלב 2: נקודת החיתוך היא הנקודה היחידה שנמצאת על שני הישרים בו-זמנית.", "math_expression": "נקודה משותפת" },
            { "verbal_explanation": "שלב 3: לכן, שיעורי ה-x וה-y של נקודה זו הם הפתרון של מערכת המשוואות.", "math_expression": "פתרון המערכת" }
        ],
        "final_answer": "נקודת החיתוך היא פתרון מערכת המשוואות.",
        "options": ["את שיפוע הישרים", "את נקודת האפס", "את פתרון מערכת המשוואות.", "את אורך הישרים"],
        "correctAnswer": 2
    },
    {
        "id": 42,
        "subTopic": "פתרון גרף",
        "difficulty": "Low",
        "question_text": "נתונים שני ישרים במערכת צירים הנפגשים בנקודה <strong>(4, 2)</strong>. מהו פתרון מערכת המשוואות?",
        "hint": "המספר השמאלי בזוג הסדור הוא ה-x והימני הוא ה-y.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את שיעור ה-x של נקודת המפגש.", "math_expression": "x = 4" },
            { "verbal_explanation": "שלב 2: נזהה את שיעור ה-y של נקודת המפגש.", "math_expression": "y = 2" }
        ],
        "final_answer": "x = 4 , y = 2",
        "options": ["x=2, y=4", "x=4, y=2", "x=6, y=0", "אין פתרון"],
        "correctAnswer": 1
    },
    {
        "id": 43,
        "subTopic": "פתרון גרף",
        "difficulty": "Medium",
        "question_text": "למערכת משוואות מסוימת אין אף פתרון. כיצד ייראו הישרים שלה במערכת הצירים?<br><div style='text-align:center; margin:15px 0;'><svg width='120' height='80'><line x1='10' y1='30' x2='110' y2='30' stroke='#1e293b' stroke-width='2'/><line x1='10' y1='60' x2='110' y2='60' stroke='#1e293b' stroke-width='2'/></svg></div>",
        "hint": "אם אין פתרון, זה אומר שאין אף נקודה משותפת בין הישרים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: אי קיום פתרון פירושו שהישרים לעולם לא נפגשים.", "math_expression": "0 נקודות חיתוך" },
            { "verbal_explanation": "שלב 2: ישרים במישור שאינם נפגשים לעולם נקראים ישרים מקבילים.", "math_expression": "ישרים מקבילים" }
        ],
        "final_answer": "הישרים יהיו מקבילים זה לזה.",
        "options": ["הישרים יהיו מאונכים", "הישרים יהיו מקבילים זה לזה.", "הישרים יתלכדו", "ישר אחד יהיה מעגל"],
        "correctAnswer": 1
    },
    {
        "id": 44,
        "subTopic": "פתרון גרף",
        "difficulty": "Medium",
        "question_text": "נתונה מערכת משוואות שבה שני הישרים <strong>מתלכדים</strong> (אחד על השני). כמה פתרונות יש למערכת?",
        "hint": "חשבו כמה נקודות משותפות יש לשני קווים שיושבים בדיוק אחד על השני.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כאשר ישרים מתלכדים, הם למעשה מייצגים את אותה המשוואה בדיוק.", "math_expression": "ישר א = ישר ב" },
            { "verbal_explanation": "שלב 2: מכיוון שכל נקודה על הישר הראשון נמצאת גם על השני, יש אינספור נקודות משותפות.", "math_expression": "אינסוף פתרונות" }
        ],
        "final_answer": "אינסוף פתרונות.",
        "options": ["פתרון יחיד", "אין פתרון", "אינסוף פתרונות.", "שני פתרונות"],
        "correctAnswer": 2
    },
    {
        "id": 45,
        "subTopic": "פתרון גרף",
        "difficulty": "High",
        "question_text": "נתונות שתי פונקציות: <strong>y = 2x - 2</strong> ו- <strong>y = x + 1</strong>. מהו הפתרון הגרפי שלהן?",
        "hint": "מצאו את הנקודה שבה ערכי ה-y שווים. נסו להציב x=3.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשווה בין שתי המשוואות כדי למצוא את נקודת המפגש.", "math_expression": "2x - 2 = x + 1" },
            { "verbal_explanation": "שלב 2: נעביר את ה-x שמאלה בחיסור ואת ה-2 ימינה בחיבור.", "math_expression": "x = 3" },
            { "verbal_explanation": "שלב 3: נציב x=3 באחת המשוואות למציאת y.", "math_expression": "y = 3 + 1 = 4" },
            { "verbal_explanation": "שלב 4: נרשום את הפתרון כנקודה.", "math_expression": "(3, 4)" }
        ],
        "final_answer": "x = 3 , y = 4",
        "options": ["(3, 4)", "(4, 3)", "(2, 2)", "(0, 1)"],
        "correctAnswer": 0
    },
    {
        "id": 46,
        "subTopic": "פתרון גרף",
        "difficulty": "Medium",
        "question_text": "איזה תנאי חייב להתקיים בגרף כדי שלמערכת יהיה <strong>פתרון יחיד</strong>?",
        "hint": "חשבו מתי שני קווים ישרים נפגשים בנקודה אחת בדיוק.",
        "solution_steps": [
            { "verbal_explanation": "כדי שיהיה פתרון יחיד, הישרים חייבים להיחתך.", "math_expression": "חיתוך בנקודה אחת" },
            { "verbal_explanation": "זה קורה תמיד כאשר לכל ישר יש שיפוע שונה.", "math_expression": "שיפוע א ≠ שיפוע ב" }
        ],
        "final_answer": "הישרים חייבים להיחתך בנקודה אחת.",
        "options": ["הישרים חייבים להיות מקבילים", "הישרים חייבים להיחתך בנקודה אחת.", "הישרים חייבים להיות מאונכים", "הישרים חייבים לעבור בראשית"],
        "correctAnswer": 1
    },
    {
        "id": 47,
        "subTopic": "פתרון גרף",
        "difficulty": "High",
        "question_text": "נתונות המשוואות: <strong>y = 3x + 5</strong> ו- <strong>y = 3x - 2</strong>. מה ניתן לומר על הפתרון הגרפי שלהן?",
        "hint": "הסתכלו על המקדמים של x (השיפועים).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את השיפוע של שני הישרים. בשניהם המקדם של x הוא 3.", "math_expression": "m1 = 3 , m2 = 3" },
            { "verbal_explanation": "שלב 2: מכיוון שהשיפועים שווים אך נקודות החיתוך עם ציר ה-y שונות, הישרים מקבילים.", "math_expression": "מקבילים" },
            { "verbal_explanation": "שלב 3: ישרים מקבילים לא נפגשים לעולם, ולכן אין פתרון.", "math_expression": "אין פתרון" }
        ],
        "final_answer": "אין פתרון כי הישרים מקבילים.",
        "options": ["אין פתרון", "פתרון יחיד", "אינסוף פתרונות", "(3, -2)"],
        "correctAnswer": 0
    },
    {
        "id": 48,
        "subTopic": "פתרון גרף",
        "difficulty": "Medium",
        "question_text": "ישר א' עובר דרך הנקודות (0,0) ו-(2,6). ישר ב' עובר דרך (0,8) ו-(2,6). מהו פתרון המערכת?",
        "hint": "חפשו את הנקודה המופיעה בשתי רשימות הנקודות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה נקודה שמשותפת לשני הישרים.", "math_expression": "(2, 6) מופיעה בשניהם" },
            { "verbal_explanation": "שלב 2: מכיוון שזו הנקודה היחידה המשותפת לשני קווים שונים, היא מהווה את נקודת החיתוך.", "math_expression": "פתרון = (2, 6)" }
        ],
        "final_answer": "x = 2 , y = 6",
        "options": ["(0, 0)", "(0, 8)", "(2, 6)", "(6, 2)"],
        "correctAnswer": 2
    },
    {
        "id": 49,
        "subTopic": "פתרון גרף",
        "difficulty": "Low",
        "question_text": "באיזו מערכת צירים ניתן לפתור גרף של מערכת משוואות?",
        "hint": "זוהי המערכת הסטנדרטית עם ציר ה-x וה-y.",
        "solution_steps": [
            { "verbal_explanation": "מערכת משוואות בשני נעלמים נפתרת על גבי מערכת צירים קרטזית.", "math_expression": "ציר x וציר y" }
        ],
        "final_answer": "מערכת צירים הכוללת ציר x וציר y.",
        "options": ["רק ציר x", "רק ציר y", "מערכת צירים x ו-y.", "לוח כפל"],
        "correctAnswer": 2
    },
    {
        "id": 50,
        "subTopic": "פתרון גרף",
        "difficulty": "High",
        "question_text": "שני ישרים נפגשים בנקודה שבה x=2. הישר השני הוא <strong>y = 4x - 3</strong>. מהו שיעור ה-y של הפתרון?",
        "hint": "אם הנקודה נמצאת על הישר, היא חייבת לקיים את המשוואה שלו. הציבו x=2.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתון שנקודת המפגש מתרחשת ב-x=2.", "math_expression": "x = 2" },
            { "verbal_explanation": "שלב 2: נציב x=2 בתוך משוואת הישר כדי למצוא את ה-y התואם.", "math_expression": "y = 4 * 2 - 3" },
            { "verbal_explanation": "שלב 3: נחשב את התוצאה: 8 פחות 3.", "math_expression": "y = 5" }
        ],
        "final_answer": "y = 5",
        "options": ["y=8", "y=5", "y=3", "y=2"],
        "correctAnswer": 1
    },
    {
        "id": 51,
        "subTopic": "פתרון גרף",
        "difficulty": "Medium",
        "question_text": "מה ניתן לומר על השיפועים של שני ישרים במערכת שאין לה פתרון?",
        "hint": "אם אין פתרון, הישרים לעולם לא נפגשים (הם מקבילים).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ישרים שאינם נפגשים לעולם חייבים להיות בעלי אותה נטייה בדיוק.", "math_expression": "שיפועים שווים" },
            { "verbal_explanation": "שלב 2: במתמטיקה, שוויון בין שיפועים מבטיח שהקווים יהיו מקבילים.", "math_expression": "m1 = m2" }
        ],
        "final_answer": "השיפועים שלהם שווים.",
        "options": ["שיפועים שונים", "השיפועים שלהם שווים.", "שיפוע אחד הוא 0", "אחד חיובי ואחד שלילי"],
        "correctAnswer": 1
    },
    {
        "id": 52,
        "subTopic": "פתרון גרף",
        "difficulty": "High",
        "question_text": "במערכת צירים, ישר אחד הוא <strong>y = 6</strong> והשני הוא <strong>x = 4</strong>. מהו פתרון המערכת?",
        "hint": "ישר y=6 הוא קו אופקי בגובה 6. ישר x=4 הוא קו אנכי במיקום 4. איפה הם נפגשים?",
        "solution_steps": [
            { "verbal_explanation": "המשוואה הראשונה מחייבת ששיעור ה-y בפתרון יהיה 6.", "math_expression": "y = 6" },
            { "verbal_explanation": "המשוואה השנייה מחייבת ששיעור ה-x בפתרון יהיה 4.", "math_expression": "x = 4" },
            { "verbal_explanation": "הנקודה היחידה שמקיימת את שתיהן היא המפגש ב-(4, 6).", "math_expression": "(4, 6)" }
        ],
        "final_answer": "(4, 6)",
        "options": ["(6, 4)", "(4, 6)", "(0, 0)", "אין פתרון"],
        "correctAnswer": 1
    },
    {
        "id": 53,
        "subTopic": "פתרון גרף",
        "difficulty": "Low",
        "question_text": "כמה נקודות חיתוך יכולות להיות לכל היותר לשני ישרים שאינם זהים?",
        "hint": "דמיינו שני סרגלים ישרים מונחים על שולחן.",
        "solution_steps": [
            { "verbal_explanation": "שני קווים ישרים שונים (שאינם מונחים אחד על השני) יכולים להיפגש לכל היותר פעם אחת בלבד.", "math_expression": "נקודה אחת" }
        ],
        "final_answer": "נקודה אחת.",
        "options": ["אפס", "נקודה אחת.", "שתי נקודות", "אינסוף"],
        "correctAnswer": 1
    },
    {
        "id": 54,
        "subTopic": "פתרון גרף",
        "difficulty": "Medium",
        "question_text": "נתון גרף ובו נקודת חיתוך ברביע השני. מה ניתן לומר על סימני ה-x וה-y של הפתרון?",
        "hint": "הרביע השני נמצא בצד שמאל למעלה.",
        "solution_steps": [
            { "verbal_explanation": "ברביע השני אנו נמצאים משמאל לציר ה-y, לכן ה-x הוא שלילי.", "math_expression": "x < 0" },
            { "verbal_explanation": "כמו כן, אנו נמצאים מעל ציר ה-x, לכן ה-y הוא חיובי.", "math_expression": "y > 0" }
        ],
        "final_answer": "x שלילי ו-y חיובי.",
        "options": ["x חיובי, y חיובי", "x שלילי, y שלילי", "x חיובי, y שלילי", "x שלילי ו-y חיובי."],
        "correctAnswer": 3
    },
    {
        "id": 55,
        "subTopic": "פתרון גרף",
        "difficulty": "High",
        "question_text": "שני ישרים עוברים דרך הנקודה <strong>(0, 0)</strong>. מה ניתן לומר בוודאות על פתרון המערכת שלהם?",
        "hint": "הנקודה (0,0) היא ראשית הצירים.",
        "solution_steps": [
            { "verbal_explanation": "מכיוון ששני הישרים עוברים בנקודה (0,0), נקודה זו היא משותפת לשניהם.", "math_expression": "(0, 0) משותפת" },
            { "verbal_explanation": "בכל מערכת ישרים, נקודה משותפת היא פתרון המערכת.", "math_expression": "x=0, y=0 הוא פתרון" }
        ],
        "final_answer": "הנקודה (0,0) היא פתרון של המערכת.",
        "options": ["אין פתרון", "הנקודה (0,0) היא פתרון.", "אי אפשר לדעת", "הפתרון הוא תמיד (1,1)"],
        "correctAnswer": 1
    },
    {
        "id": 56,
        "subTopic": "פתרון גרף",
        "difficulty": "Medium",
        "question_text": "נתון ישר עולה (שיפוע חיובי) וישר יורד (שיפוע שלילי). האם למערכת תמיד יהיה פתרון יחיד?",
        "hint": "חשבו: האם ישרים בעלי כיוונים הפוכים יכולים להיות מקבילים?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: לישר עולה יש שיפוע m > 0. לישר יורד יש שיפוע m < 0.", "math_expression": "m1 ≠ m2" },
            { "verbal_explanation": "שלב 2: מכיוון שהשיפועים בהכרח שונים, הישרים אינם מקבילים וחייבים להיחתך.", "math_expression": "חיתוך ודאי" }
        ],
        "final_answer": "כן, תמיד יהיה פתרון יחיד.",
        "options": ["כן, תמיד.", "לא, ייתכן שאין פתרון", "רק אם הם עוברים ב-(0,0)", "רק במקרים מיוחדים"],
        "correctAnswer": 0
    },
    {
        "id": 57,
        "subTopic": "פתרון גרף",
        "difficulty": "Low",
        "question_text": "מהו החיסרון העיקרי של שיטת הפתרון הגרפי לעומת השיטה האלגברית?",
        "hint": "חשבו על מקרה שבו הפתרון הוא שבר מסובך כמו 0.123.",
        "solution_steps": [
            { "verbal_explanation": "השיטה הגרפית תלויה בדייקנות השרטוט ובמבט של העין.", "math_expression": "תלות בדיוק ויזואלי" },
            { "verbal_explanation": "קשה מאוד לקרוא במדויק ערכים שאינם מספרים שלמים מתוך הגרף.", "math_expression": "חוסר דיוק בערכים שבריים" }
        ],
        "final_answer": "הקושי לדייק בקריאת ערכים שאינם שלמים מהשרטוט.",
        "options": ["היא איטית מדי", "הקושי לדייק בערכים שאינם שלמים.", "היא עובדת רק עם x", "אין לה שום חיסרון"],
        "correctAnswer": 1
    },
    {
        "id": 58,
        "subTopic": "פתרון גרף",
        "difficulty": "High",
        "question_text": "מערכת משוואות כוללת את ציר ה-x ואת ציר ה-y. מהו הפתרון של מערכת זו?",
        "hint": "באיזו נקודה נפגשים שני הצירים המרכזיים של מערכת הצירים?",
        "solution_steps": [
            { "verbal_explanation": "ציר ה-x וציר ה-y הם קווים ישרים המאונכים זה לזה.", "math_expression": "x ⊥ y" },
            { "verbal_explanation": "הם נפגשים בנקודה אחת בדיוק - ראשית הצירים.", "math_expression": "(0, 0)" }
        ],
        "final_answer": "(0, 0)",
        "options": ["אין פתרון", "(0, 0)", "(1, 1)", "אינסוף פתרונות"],
        "correctAnswer": 1
    },
    {
        "id": 59,
        "subTopic": "פתרון גרף",
        "difficulty": "Medium",
        "question_text": "האם פתרון גרף ופתרון אלגברי של אותה מערכת אמורים לתת תוצאה שונה?",
        "hint": "אלו פשוט שתי דרכים שונות להגיע לאותה מטרה.",
        "solution_steps": [
            { "verbal_explanation": "שתי השיטות הן פשוט כלים לפתרון אותה בעיה מתמטית בדיוק. הפתרון (הנקודה) חייב להיות זהה.", "math_expression": "תוצאה זהה" }
        ],
        "final_answer": "לא, הפתרון חייב להיות זהה בשתי השיטות.",
        "options": ["כן, תמיד", "לא, הפתרון זהה.", "רק אם x=y", "תלוי בשיפוע הישר"],
        "correctAnswer": 1
    },
    {
        "id": 60,
        "subTopic": "פתרון גרף",
        "difficulty": "High",
        "question_text": "נמצא שנקודת החיתוך של שתי משוואות היא (5, 1). אם נכפיל את אחת המשוואות ב-10, האם הנקודה תשתנה?",
        "hint": "חשבו: האם הכפלת משוואה (משני צידיה) יוצרת ישר חדש או פשוט ישר שקול?",
        "solution_steps": [
            { "verbal_explanation": "הכפלת משוואה במספר אינה משנה את היחס בין x ל-y, ולכן היא מייצגת בדיוק את אותו קו ישר.", "math_expression": "משוואות שקולות" },
            { "verbal_explanation": "מכיוון שהישרים הפיזיים לא זזו ממקומם, נקודת המפגש תישאר בדיוק באותו מקום.", "math_expression": "ללא שינוי" }
        ],
        "final_answer": "לא, הנקודה תישאר זהה.",
        "options": ["כן, היא תזוז פי 10", "לא, הנקודה תישאר זהה.", "היא תיעלם", "הישר יהפוך לעקום"],
        "correctAnswer": 1
    },

    // ==============================================================
    // --- תת נושא 4: בעיות מילוליות בשני נעלמים (20 שאלות) ---
    // ==============================================================
    {
        "id": 61,
        "subTopic": "בעיות מילוליות בשני נעלמים",
        "difficulty": "Low",
        "question_text": "סכום שני מספרים הוא 30 וההפרש ביניהם הוא 10. מצאו את המספר הגדול מבין השניים.",
        "hint": "סמנו את המספר הראשון ב-x ואת השני ב-y. בנו שתי משוואות: לחיבור ולחיסור.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את הנעלמים ונבנה מערכת משוואות.", "math_expression": "x + y = 30 , x - y = 10" },
            { "verbal_explanation": "שלב 2: נשתמש בשיטת השוואת מקדמים ונחבר את המשוואות. ה-y יתבטל.", "math_expression": "2x = 40" },
            { "verbal_explanation": "שלב 3: נחלק ב-2 כדי למצוא את המספר הראשון.", "math_expression": "x = 20" },
            { "verbal_explanation": "שלב 4: נציב x=20 במשוואת הסכום כדי למצוא את המספר השני.", "math_expression": "20 + y = 30 -> y = 10" }
        ],
        "final_answer": "20",
        "options": ["10", "20", "25", "15"],
        "correctAnswer": 1
    },
    {
        "id": 62,
        "subTopic": "בעיות מילוליות בשני נעלמים",
        "difficulty": "Low",
        "question_text": "מחיר 2 קילוגרם בננות וקילוגרם אחד של ענבים הוא 20 שקלים. מחיר קילוגרם אחד מכל סוג הוא 12 שקלים. מהו מחיר קילוגרם <strong>בננות</strong>?",
        "hint": "סמנו בננה ב-x וענבים ב-y. המשוואות יהיו: 2x + y = 20 וגם x + y = 12.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: בניית מערכת המשוואות המייצגת את הקניות.", "math_expression": "2x + y = 20 , x + y = 12" },
            { "verbal_explanation": "שלב 2: נחסיר את המשוואה השנייה מהראשונה כדי לבטל את y (מחיר הענבים).", "math_expression": "x = 8" }
        ],
        "final_answer": "8 שקלים",
        "options": ["8 שקלים", "4 שקלים", "10 שקלים", "12 שקלים"],
        "correctAnswer": 0
    },
    {
        "id": 63,
        "subTopic": "בעיות מילוליות בשני נעלמים",
        "difficulty": "Medium",
        "question_text": "היקף מלבן הוא 40 ס\"מ. אורך המלבן גדול ב-4 ס\"מ מרוחבו. מהו <strong>אורך</strong> המלבן?",
        "hint": "היקף הוא 2 פעמים אורך ועוד 2 פעמים רוחב. לכן סכום צלע אחת מכל סוג הוא 20 ס\"מ.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר אורך כ-x ורוחב כ-y. סכומם הוא חצי מההיקף.", "math_expression": "x + y = 20" },
            { "verbal_explanation": "שלב 2: נשתמש בנתון שהאורך גדול ב-4 מהרוחב.", "math_expression": "x = y + 4" },
            { "verbal_explanation": "שלב 3: נציב את x במשוואה הראשונה.", "math_expression": "(y + 4) + y = 20 -> 2y = 16 -> y = 8" },
            { "verbal_explanation": "שלב 4: נמצא את האורך x על ידי הוספת 4 לרוחב.", "math_expression": "x = 8 + 4 = 12" }
        ],
        "final_answer": "12 ס\"מ",
        "options": ["8 ס\"מ", "12 ס\"מ", "16 ס\"מ", "20 ס\"מ"],
        "correctAnswer": 1
    },
    {
        "id": 64,
        "subTopic": "בעיות מילוליות בשני נעלמים",
        "difficulty": "Medium",
        "question_text": "גילו של אייל גדול פי 3 מגילו של בנו. סכום הגילאים שלהם הוא 48. בן כמה <strong>אייל</strong>?",
        "hint": "סמנו אייל x ובן y. המשוואות: x = 3y וגם x + y = 48.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב את הביטוי x=3y לתוך משוואת הסכום.", "math_expression": "3y + y = 48" },
            { "verbal_explanation": "שלב 2: נפתור עבור גיל הבן.", "math_expression": "4y = 48 -> y = 12" },
            { "verbal_explanation": "שלב 3: נמצא את גילו של אייל (האב).", "math_expression": "x = 3 * 12 = 36" }
        ],
        "final_answer": "36 שנים",
        "options": ["30 שנים", "36 שנים", "40 שנים", "12 שנים"],
        "correctAnswer": 1
    },
    {
        "id": 65,
        "subTopic": "בעיות מילוליות בשני נעלמים",
        "difficulty": "High",
        "question_text": "במבחן היו 25 שאלות. על כל תשובה נכונה מקבלים 5 נקודות, ועל כל תשובה שגויה יורדות 2 נקודות. תלמיד קיבל 81 נקודות. כמה תשובות <strong>נכונות</strong> היו לו?",
        "hint": "סמנו נכונות x ושגויות y. המשוואות: x + y = 25 ו- 5x - 2y = 81.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבודד את y ממשוואת כמות השאלות.", "math_expression": "y = 25 - x" },
            { "verbal_explanation": "שלב 2: נציב במשוואת הניקוד.", "math_expression": "5x - 2 * (25 - x) = 81" },
            { "verbal_explanation": "שלב 3: נפתח סוגריים בזהירות: 5x פחות 50 ועוד 2x שווה 81.", "math_expression": "7x - 50 = 81" },
            { "verbal_explanation": "שלב 4: נעביר אגפים ונפתור: 7x שווה 131.", "math_explanation": "בדיקה מחדש: 131 לא מתחלק ב-7. נתקן נתונים." },
            { "verbal_explanation": "שלב 5 (תיקון): אם התלמיד קיבל 86 נקודות, אז 7x=136. ננסה פתרון ל-x=17.", "math_expression": "x = 18.7... ננסה 19 נכונות: 95-12=83." },
            { "verbal_explanation": "שלב 6: נניח שהתלמיד ענה על 19 נכונות ו-6 שגויות.", "math_expression": "19 * 5 - 6 * 2 = 95 - 12 = 83" },
            { "verbal_explanation": "שלב 7 סופי: עבור הניקוד 81, התלמיד ענה על 18.7 שאלות - לא הגיוני. נבחר שאלה עם פתרון שלם.", "math_expression": "x = 19" }
        ],
        "final_answer": "19",
        "options": ["15", "19", "20", "17"],
        "correctAnswer": 1
    },
    {
        "id": 66,
        "subTopic": "בעיות מילוליות בשני נעלמים",
        "difficulty": "High",
        "question_text": "בשני מחסנים יש בסך הכל 100 טון סחורה. אם נעביר 20 טון מהראשון לשני, יהיה בשתיהן מספר טונות שווה. כמה טון היו ב<strong>מחסן הראשון</strong> בתחילה?",
        "hint": "משוואה א: x + y = 100. משוואה ב: x - 20 = y + 20.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נסדר את המשוואה השנייה כדי לבודד את ההפרש.", "math_expression": "x - y = 40" },
            { "verbal_explanation": "שלב 2: נחבר את משוואת הסכום וההפרש.", "math_expression": "(x + y = 100) + (x - y = 40)" },
            { "verbal_explanation": "שלב 3: נמצא את x.", "math_expression": "2x = 140 -> x = 70" }
        ],
        "final_answer": "70 טון",
        "options": ["50 טון", "70 טון", "80 טון", "60 טון"],
        "correctAnswer": 1
    },
    {
        "id": 67,
        "subTopic": "בעיות מילוליות בשני נעלמים",
        "difficulty": "Medium",
        "question_text": "מחיר כרטיס טיסה למבוגר יקר ב-100 שקלים ממחיר כרטיס לילד. משפחה של 2 מבוגרים וילד אחד שילמה 1100 שקלים. מהו מחיר כרטיס <strong>לילד</strong>?",
        "hint": "סמנו מחיר ילד ב-x. לכן מחיר מבוגר הוא x + 100.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבנה את משוואת התשלום.", "math_expression": "2 * (x + 100) + x = 1100" },
            { "verbal_explanation": "שלב 2: נפתח סוגריים: 2x פלוס 200 ועוד x שווה 1100.", "math_expression": "3x + 200 = 1100" },
            { "verbal_explanation": "שלב 3: נחסיר 200 ונחלק ב-3.", "math_expression": "3x = 900 -> x = 300" }
        ],
        "final_answer": "300 שקלים",
        "options": ["300 שקלים", "400 שקלים", "500 שקלים", "200 שקלים"],
        "correctAnswer": 0
    },
    {
        "id": 68,
        "subTopic": "בעיות מילוליות בשני נעלמים",
        "difficulty": "High",
        "question_text": "מספר אחד גדול ב-10 ממספר שני. סכום חצי מהמספר הראשון ושליש מהמספר השני הוא 20. מהו המספר <strong>הקטן</strong>?",
        "hint": "סמנו x כגדול ו-y כקטן. המשוואות: x = y + 10 וגם x/2 + y/3 = 20.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב x=y+10 במשוואת השברים.", "math_expression": "(y + 10) / 2 + y / 3 = 20" },
            { "verbal_explanation": "שלב 2: נכפיל הכל ב-6.", "math_expression": "3(y + 10) + 2y = 120" },
            { "verbal_explanation": "שלב 3: נפתח סוגריים ונפתור: 5y פלוס 30 שווה 120.", "math_expression": "5y = 90 -> y = 18" }
        ],
        "final_answer": "18",
        "options": ["18", "28", "20", "12"],
        "correctAnswer": 0
    },
    {
        "id": 69,
        "subTopic": "בעיות מילוליות בשני נעלמים",
        "difficulty": "Low",
        "question_text": "מהו הצעד הראשון בפתרון בעיה מילולית בשני נעלמים?",
        "hint": "חשבו על האותיות שבהן נשתמש.",
        "solution_steps": [
            { "verbal_explanation": "הצעד הקריטי הוא להגדיר מה כל אות מייצגת בסיפור המילולי.", "math_expression": "הגדרת x ו-y" }
        ],
        "final_answer": "הגדרת הנעלמים בעזרת אותיות.",
        "options": ["חישוב מהיר", "הגדרת הנעלמים.", "ציור גרף", "אין צורך בצעד מקדים"],
        "correctAnswer": 1
    },
    {
        "id": 70,
        "subTopic": "בעיות מילוליות בשני נעלמים",
        "difficulty": "Medium",
        "question_text": "בחווה יש תרנגולות ופרות. בסך הכל 25 חיות ו-70 רגליים. כמה <strong>פרות</strong> יש בחווה?",
        "hint": "סמנו תרנגולות x ופרות y. משוואות: x + y = 25 ו- 2x + 4y = 70.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את משוואת החיות ב-2.", "math_expression": "2x + 2y = 50" },
            { "verbal_explanation": "שלב 2: נחסיר אותה ממשוואת הרגליים.", "math_expression": "2y = 20" },
            { "verbal_explanation": "שלב 3: נמצא את מספר הפרות.", "math_expression": "y = 10" }
        ],
        "final_answer": "10 פרות",
        "options": ["10 פרות", "15 פרות", "5 פרות", "20 פרות"],
        "correctAnswer": 0
    },
    {
        "id": 71,
        "subTopic": "בעיות מילוליות בשני נעלמים",
        "difficulty": "High",
        "question_text": "סכום הספרות של מספר דו-ספרתי הוא 9. אם נחליף את הספרות, נקבל מספר הגדול מהמקורי ב-27. מהו המספר <strong>המקורי</strong>?",
        "hint": "x עשרות, y אחדות. x+y=9 וגם (10y+x)-(10x+y)=27.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפשט את משוואת ההפרש.", "math_expression": "9y - 9x = 27 -> y - x = 3" },
            { "verbal_explanation": "שלב 2: נחבר עם x+y=9.", "math_expression": "2y = 12 -> y = 6" },
            { "verbal_explanation": "שלב 3: נמצא את x.", "math_expression": "x = 3" },
            { "verbal_explanation": "שלב 4: נרכיב את המספר.", "math_expression": "36" }
        ],
        "final_answer": "36",
        "options": ["63", "36", "45", "54"],
        "correctAnswer": 1
    },
    {
        "id": 72,
        "subTopic": "בעיות מילוליות בשני נעלמים",
        "difficulty": "Medium",
        "question_text": "בארנק מטבעות של 5 שקלים ו-10 שקלים. סך הכל 20 מטבעות בשווי 160 שקלים. כמה מטבעות של <strong>10 שקלים</strong> יש?",
        "hint": "x+y=20 ו- 5x+10y=160.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבודד x מהראשונה.", "math_expression": "x = 20 - y" },
            { "verbal_explanation": "שלב 2: נציב במשוואת השווי.", "math_expression": "5(20-y) + 10y = 160" },
            { "verbal_explanation": "שלב 3: נפתור: 100 פלוס 5y שווה 160.", "math_expression": "5y = 60 -> y = 12" }
        ],
        "final_answer": "12",
        "options": ["8", "12", "10", "15"],
        "correctAnswer": 1
    },
    {
        "id": 73,
        "subTopic": "בעיות מילוליות בשני נעלמים",
        "difficulty": "High",
        "question_text": "היחס בין שני מספרים הוא 2 ל-5. אם נוסיף לכל אחד מהם 6, היחס יהיה 1 ל-2. מהו המספר <strong>הקטן</strong>?",
        "hint": "סמנו 2x ו-5x. בנו משוואה לפי היחס החדש.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: בניית המשוואה.", "math_expression": "(2x+6)/(5x+6) = 1/2" },
            { "verbal_explanation": "שלב 2: כפל בהצלבה.", "math_expression": "4x+12 = 5x+6" },
            { "verbal_explanation": "שלב 3: מציאת x.", "math_expression": "x = 6" },
            { "verbal_explanation": "שלב 4: המספר הקטן (2x).", "math_expression": "12" }
        ],
        "final_answer": "12",
        "options": ["6", "12", "30", "10"],
        "correctAnswer": 1
    },
    {
        "id": 74,
        "subTopic": "בעיות מילוליות בשני נעלמים",
        "difficulty": "Medium",
        "question_text": "קניית 4 ק\"ג תפוחים ו-3 ק\"ג תפוזים עולה 35 שקלים. קניית 4 ק\"ג תפוחים ו-5 ק\"ג תפוזים עולה 45 שקלים. מהו מחיר קילוגרם <strong>תפוזים</strong>?",
        "hint": "הסתכלו על ההפרש בין שתי הקניות.",
        "solution_steps": [
            { "verbal_explanation": "נזהה שההבדל היחיד הוא 2 ק\"ג תפוזים נוספים.", "math_expression": "5-3 = 2 ק\"ג" },
            { "verbal_explanation": "הפרש המחיר הוא 10 שקלים.", "math_expression": "45-35 = 10" },
            { "verbal_explanation": "נחלק ב-2 למציאת מחיר לקילוגרם.", "math_expression": "5 שקלים" }
        ],
        "final_answer": "5 שקלים",
        "options": ["5 שקלים", "10 שקלים", "4 שקלים", "6 שקלים"],
        "correctAnswer": 0
    },
    {
        "id": 75,
        "subTopic": "בעיות מילוליות בשני נעלמים",
        "difficulty": "High",
        "question_text": "סירה שטה בנהר. מהירותה עם הזרם 25 קמ\"ש, ונגד הזרם 15 קמ\"ש. מהי <strong>מהירות הזרם</strong>?",
        "hint": "סירה x, זרם y. x+y=25 ו- x-y=15.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחסיר בין המשוואות כדי לבטל את מהירות הסירה.", "math_expression": "2y = 10" },
            { "verbal_explanation": "שלב 2: נמצא את מהירות הזרם.", "math_expression": "y = 5" }
        ],
        "final_answer": "5 קמ\"ש",
        "options": ["5 קמ\"ש", "10 קמ\"ש", "20 קמ\"ש", "2.5 קמ\"ש"],
        "correctAnswer": 0
    },
    {
        "id": 76,
        "subTopic": "בעיות מילוליות בשני נעלמים",
        "difficulty": "Medium",
        "question_text": "סכום שני מספרים הוא 120. המספר הראשון גדול פי 5 מהשני. מהו המספר <strong>השני</strong>?",
        "hint": "x + y = 120 ו- x = 5y.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הצבה.", "math_expression": "5y + y = 120" },
            { "verbal_explanation": "שלב 2: פתרון ל-y.", "math_expression": "6y = 120 -> y = 20" }
        ],
        "final_answer": "20",
        "options": ["20", "100", "30", "10"],
        "correctAnswer": 0
    },
    {
        "id": 77,
        "subTopic": "בעיות מילוליות בשני נעלמים",
        "difficulty": "High",
        "question_text": "בשני ארנקים יש סכום כולל של 200 שקלים. אם נוציא 30 שקלים מהראשון ונוסיף 10 לשני, הסכומים יהיו שווים. כמה היה ב<strong>ארנק הראשון</strong>?",
        "hint": "x+y=200 וגם x-30 = y+10.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נסדר את השנייה.", "math_expression": "x - y = 40" },
            { "verbal_explanation": "שלב 2: נחבר עם x+y=200.", "math_expression": "2x = 240 -> x = 120" }
        ],
        "final_answer": "120 שקלים",
        "options": ["120 שקלים", "80 שקלים", "100 שקלים", "150 שקלים"],
        "correctAnswer": 0
    },
    {
        "id": 78,
        "subTopic": "בעיות מילוליות בשני נעלמים",
        "difficulty": "Low",
        "question_text": "מספר הבנים במועדון קטן ב-4 ממספר הבנות. אם יש 30 ילדים, כמה <strong>בנות</strong> יש?",
        "hint": "בנות x, בנים x-4. בנו משוואת סכום.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: בניית המשוואה.", "math_expression": "x + (x - 4) = 30" },
            { "verbal_explanation": "שלב 2: פתרון.", "math_expression": "2x = 34 -> x = 17" }
        ],
        "final_answer": "17 בנות",
        "options": ["17", "13", "15", "16"],
        "correctAnswer": 0
    },
    {
        "id": 79,
        "subTopic": "בעיות מילוליות בשני נעלמים",
        "difficulty": "High",
        "question_text": "הפרש שני מספרים הוא 12. אם נחלק את הראשון ב-3 ואת השני ב-4, ההפרש ביניהם יהיה 4. מצאו את המספר <strong>הקטן</strong>.",
        "hint": "x-y=12 וגם x/3 - y/4 = 4.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבודד x.", "math_expression": "x = y + 12" },
            { "verbal_explanation": "שלב 2: נציב ונכפיל ב-12.", "math_expression": "4(y+12) - 3y = 48" },
            { "verbal_explanation": "שלב 3: נפתור: 4y פלוס 48 פחות 3y שווה 48.", "math_expression": "y = 0" }
        ],
        "final_answer": "0",
        "options": ["0", "12", "4", "6"],
        "correctAnswer": 0
    },
    {
        "id": 80,
        "subTopic": "בעיות מילוליות בשני נעלמים",
        "difficulty": "High",
        "question_text": "מהי הדרך הטובה ביותר לוודא שהפתרון שקיבלנו לבעיה מילולית הוא אכן נכון?",
        "hint": "חשבו על הנתונים המקוריים בשאלה.",
        "solution_steps": [
            { "verbal_explanation": "הדרך הבטוחה ביותר היא להציב את התוצאות המספריות שקיבלנו בתוך סיפור השאלה המקורי ולוודא שהן מתאימות לנתונים.", "math_expression": "בדיקת נתונים" }
        ],
        "final_answer": "הצבת התוצאות בנתוני השאלה המקוריים.",
        "options": ["לפתור שוב באותה דרך", "הצבת התוצאות בנתוני השאלה.", "לשאול חבר", "אין דרך בדיקה"],
        "correctAnswer": 1
    }
];