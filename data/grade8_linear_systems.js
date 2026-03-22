// ========================================================================
// שכבת גיל: כיתה ח'-ט' | נושא: מערכת משוואות ממעלה ראשונה
// 4 תתי נושאים | 48 שאלות סה"כ
// פתרונות מפורטים צעד-אחר-צעד, כולל בניית משוואות מילוליות וקריאת גרפים.
// כתיבה נוקשה: חילוק מוצג כ- (:) בלבד! כפל כ- (×). ללא LaTeX.
// ========================================================================

const questionsDB = [

    // ==========================================================
    // תת נושא 1: שיטת ההצבה (12 שאלות)
    // ==========================================================
    
    // שאלה 1
    {
        topic: "system_of_equations",
        subTopic: "שיטת ההצבה",
        question_text: "נתונה מערכת המשוואות הבאה:<br>1) y = 2x<br>2) x + y = 12<br>פתרו את המערכת בשיטת ההצבה ומצאו את x ו-y.&rlm;",
        options: ["x = 4, y = 8", "x = 8, y = 4", "x = 6, y = 6", "x = 3, y = 6"],
        correctAnswer: 0,
        hint: "מכיוון שמשוואה 1 כבר מבודדת את y (y שווה ל-2x), הציבו '2x' במקום האות y במשוואה השנייה.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב את הערך של y מהמשוואה הראשונה לתוך המשוואה השנייה.&rlm;", math_expression: "x + (2x) = 12" },
            { verbal_explanation: "שלב ב': נכנס איברים (x ועוד 2x הם 3x).&rlm;", math_expression: "3x = 12" },
            { verbal_explanation: "שלב ג': נחלק ב-3 כדי למצוא את x.&rlm;", math_expression: "x = 4" },
            { verbal_explanation: "שלב ד': נחזור למשוואה הראשונה ונציב x=4 כדי למצוא את y.&rlm;", math_expression: "y = 2 × 4 = 8" }
        ],
        final_answer: "x = 4, y = 8"
    },
    // שאלה 2
    {
        topic: "system_of_equations",
        subTopic: "שיטת ההצבה",
        question_text: "מהו הפתרון של המערכת הבאה?<br>1) x = y + 3<br>2) 2x + y = 15&rlm;",
        options: ["x = 6, y = 3", "x = 5, y = 2", "x = 7, y = 4", "x = 9, y = -3"],
        correctAnswer: 0,
        hint: "המשוואה הראשונה מבודדת את x. הציבו את הביטוי (y+3) במקום x במשוואה השנייה (אל תשכחו סוגריים!).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב (y+3) במקום x במשוואה השנייה.&rlm;", math_expression: "2 × (y + 3) + y = 15" },
            { verbal_explanation: "שלב ב': נפתח סוגריים לפי חוק הפילוג.&rlm;", math_expression: "2y + 6 + y = 15" },
            { verbal_explanation: "שלב ג': נכנס איברים (3y) ונעביר את ה-6 לאגף השני בחיסור.&rlm;", math_expression: "3y = 9" },
            { verbal_explanation: "שלב ד': נחלק ב-3 למציאת y.&rlm;", math_expression: "y = 3" },
            { verbal_explanation: "שלב ה': נציב y=3 במשוואה הראשונה למציאת x.&rlm;", math_expression: "x = 3 + 3 = 6" }
        ],
        final_answer: "x = 6, y = 3"
    },
    // שאלה 3
    {
        topic: "system_of_equations",
        subTopic: "שיטת ההצבה",
        question_text: "נתונה מערכת המשוואות:<br>1) y = 4x - 1<br>2) y = 2x + 7<br>מהי משוואת ההצבה שנקבל?&rlm;",
        options: ["4x - 1 = 2x + 7", "4x = y + 7", "y - 1 = y + 7", "2x + 1 = 4x - 7"],
        correctAnswer: 0,
        hint: "כאשר שתי המשוואות מבודדות את אותו משתנה (y), אפשר פשוט להשוות בין שני הביטויים (השוואת ביטויים היא מקרה פרטי של שיטת ההצבה).&rlm;",
        solution_steps: [
            { verbal_explanation: "כאשר משתנה אחד (y) שווה לשני ביטויים שונים, הרי ששני הביטויים חייבים להיות שווים זה לזה.&rlm;", math_expression: "" },
            { verbal_explanation: "נציב את ערך ה-y של המשוואה הראשונה לתוך ה-y של המשוואה השנייה.&rlm;", math_expression: "4x - 1 = 2x + 7" }
        ],
        final_answer: "4x - 1 = 2x + 7"
    },
    // שאלה 4
    {
        topic: "system_of_equations",
        subTopic: "שיטת ההצבה",
        question_text: "בהמשך לשאלה הקודמת (y = 4x - 1 וגם y = 2x + 7), מהו הפתרון הסופי (x,y)?&rlm;",
        options: ["(4, 15)", "(3, 11)", "(2, 7)", "(4, 11)"],
        correctAnswer: 0,
        hint: "פתרו את המשוואה: 4x - 1 = 2x + 7. לאחר שתמצאו את x, הציבו אותו באחת המשוואות למצוא את y.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נפתור את המשוואה. נעביר 2x שמאלה במינוס, ואת מינוס 1 ימינה בפלוס.&rlm;", math_expression: "4x - 2x = 7 + 1" },
            { verbal_explanation: "שלב ב': נכנס איברים ונחלק ב-2.&rlm;", math_expression: "2x = 8  =>  x = 4" },
            { verbal_explanation: "שלב ג': נציב x=4 במשוואה הראשונה.&rlm;", math_expression: "y = 4 × 4 - 1 = 16 - 1 = 15" },
            { verbal_explanation: "הפתרון כזוג סדור (x,y).&rlm;", math_expression: "(4, 15)" }
        ],
        final_answer: "(4, 15)"
    },
    // שאלה 5
    {
        topic: "system_of_equations",
        subTopic: "שיטת ההצבה",
        question_text: "כדי לפתור את המערכת הבאה בשיטת ההצבה, איזה נעלם כדאי לבודד קודם מאיזו משוואה (כדי להימנע משברים)?<br>1) 3x - y = 5<br>2) 4x + 2y = 10&rlm;",
        options: ["לבודד את y ממשוואה 1 (y = 3x - 5).", "לבודד את x ממשוואה 1 (x = (y+5)/3).", "לבודד את y ממשוואה 2.", "לבודד את x ממשוואה 2."],
        correctAnswer: 0,
        hint: "חפשו את הנעלם שהמקדם שלו הוא 1 או 1- (או שאפשר לחלק את כל המשוואה בקלות). בידוד ה-y מהמשוואה הראשונה לא ייצור שברים.&rlm;",
        solution_steps: [
            { verbal_explanation: "כדי להימנע משברים, נחפש נעלם עם מקדם של 1 או מינוס 1.&rlm;", math_expression: "" },
            { verbal_explanation: "במשוואה 1, ל-y יש מקדם של מינוס 1. נעביר אותו ימינה (לפלוס y) ואת 5 שמאלה (למינוס 5).&rlm;", math_expression: "3x - 5 = y" },
            { verbal_explanation: "קיבלנו ביטוי נקי ל-y ללא שברים, אותו קל להציב במשוואה 2.&rlm;", math_expression: "y = 3x - 5" }
        ],
        final_answer: "לבודד את y ממשוואה 1 (y = 3x - 5)."
    },
    // שאלה 6
    {
        topic: "system_of_equations",
        subTopic: "שיטת ההצבה",
        question_text: "פתרו את המערכת הבאה:<br>1) x - 2y = 4<br>2) 3x + y = 26&rlm;",
        options: ["x = 8, y = 2", "x = 4, y = 0", "x = 6, y = 8", "x = 10, y = 3"],
        correctAnswer: 0,
        hint: "בודדו את x ממשוואה 1 (x = 2y + 4). הציבו את הביטוי (2y+4) במקום x במשוואה 2.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נבודד את x ממשוואה 1.&rlm;", math_expression: "x = 2y + 4" },
            { verbal_explanation: "שלב ב': נציב (2y+4) במשוואה 2 במקום x (עם סוגריים!).&rlm;", math_expression: "3 × (2y + 4) + y = 26" },
            { verbal_explanation: "שלב ג': נפתח סוגריים ונקבץ איברים.&rlm;", math_expression: "6y + 12 + y = 26" },
            { verbal_explanation: "שלב ד': נחסר 12 מ-26 ונחלק את 7y.&rlm;", math_expression: "7y = 14  =>  y = 2" },
            { verbal_explanation: "שלב ה': נציב y=2 בביטוי של x.&rlm;", math_expression: "x = 2 × 2 + 4 = 8" }
        ],
        final_answer: "x = 8, y = 2"
    },
    // שאלה 7
    {
        topic: "system_of_equations",
        subTopic: "שיטת ההצבה",
        question_text: "האם יכול להיות פתרון שבו שני הנעלמים הם מספרים שליליים? פתרו:<br>1) y = 3x<br>2) x - y = 4&rlm;",
        options: ["x = -2, y = -6", "x = -6, y = -2", "x = 2, y = -6", "x = -2, y = 6"],
        correctAnswer: 0,
        hint: "הציבו את '3x' במקום y במשוואה השנייה: x - 3x = 4.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב y=3x בתוך המשוואה השנייה.&rlm;", math_expression: "x - (3x) = 4" },
            { verbal_explanation: "שלב ב': x פחות 3x נותן מינוס 2x.&rlm;", math_expression: "-2x = 4" },
            { verbal_explanation: "שלב ג': נחלק במינוס 2.&rlm;", math_expression: "x = 4 : (-2) = -2" },
            { verbal_explanation: "שלב ד': נציב למציאת y.&rlm;", math_expression: "y = 3 × (-2) = -6" }
        ],
        final_answer: "x = -2, y = -6"
    },
    // שאלה 8
    {
        topic: "system_of_equations",
        subTopic: "שיטת ההצבה",
        question_text: "מלכודת מינוס! מה הפתרון של המערכת?<br>1) y = x + 5<br>2) 2x - y = -2&rlm;",
        options: ["x = 3, y = 8", "x = 1, y = 6", "x = -1, y = 4", "x = 2, y = 7"],
        correctAnswer: 0,
        hint: "הציבו (x+5) במקום y. שימו לב שיש מינוס לפני ה-y! לכן זה: 2x - (x+5) = -2. המינוס הופך את הסימנים שבתוך הסוגריים.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב את הביטוי במקום y. חובה להשתמש בסוגריים בגלל המינוס!&rlm;", math_expression: "2x - (x + 5) = -2" },
            { verbal_explanation: "שלב ב': נפתח סוגריים. המינוס משפיע גם על ה-x וגם על ה-5.&rlm;", math_expression: "2x - x - 5 = -2" },
            { verbal_explanation: "שלב ג': נכנס איברים ונעביר את מינוס 5 לימין (הופך לפלוס 5).&rlm;", math_expression: "x = -2 + 5 = 3" },
            { verbal_explanation: "שלב ד': נמצא את y.&rlm;", math_expression: "y = 3 + 5 = 8" }
        ],
        final_answer: "x = 3, y = 8"
    },
    // שאלה 9
    {
        topic: "system_of_equations",
        subTopic: "שיטת ההצבה",
        question_text: "קבעו מה הפתרון של המערכת הבאה מבלי לחשב הרבה:<br>1) x = 5<br>2) 3x + y = 20&rlm;",
        options: ["x = 5, y = 5", "x = 5, y = 15", "x = 15, y = 5", "אין פתרון"],
        correctAnswer: 0,
        hint: "זו המערכת הקלה ביותר: x כבר נתון! פשוט הציבו 5 במקום x במשוואה השנייה.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב x=5 במשוואה השנייה.&rlm;", math_expression: "3 × 5 + y = 20" },
            { verbal_explanation: "שלב ב': נחשב את הכפל.&rlm;", math_expression: "15 + y = 20" },
            { verbal_explanation: "שלב ג': נמצא מה חסר ל-15 כדי להגיע ל-20.&rlm;", math_expression: "y = 20 - 15 = 5" }
        ],
        final_answer: "x = 5, y = 5"
    },
    // שאלה 10
    {
        topic: "system_of_equations",
        subTopic: "שיטת ההצבה",
        question_text: "המערכת עם פתרון 'אין פתרון'. מה יקרה כשנפתור בשיטת ההצבה?<br>1) y = 2x + 4<br>2) y = 2x - 1&rlm;",
        options: ["נקבל פסוק שקר כמו 4 = 1-, ולכן אין פתרון.", "נקבל x = 0 ו- y = 0.", "נקבל פסוק אמת כמו 4 = 4.", "נקבל y = 3."],
        correctAnswer: 0,
        hint: "השוו בין שתי המשוואות. האם 2x יכול להיות שווה לעצמו, אבל פעם עם תוספת 4 ופעם עם חיסור 1?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נשווה את שני הביטויים.&rlm;", math_expression: "2x + 4 = 2x - 1" },
            { verbal_explanation: "שלב ב': ננסה להעביר את איברי ה-x לאגף אחד. 2x פחות 2x שווה אפס.&rlm;", math_expression: "0 = -1 - 4" },
            { verbal_explanation: "שלב ג': קיבלנו 0 שווה למינוס 5. זהו פסוק שקר (סתירה).&rlm;", math_expression: "0 = -5" },
            { verbal_explanation: "מסקנה: אין זוג מספרים שמקיים את שתי המשוואות במקביל.&rlm;", math_expression: "" }
        ],
        final_answer: "נקבל פסוק שקר כמו 4 = 1-, ולכן אין פתרון."
    },
    // שאלה 11
    {
        topic: "system_of_equations",
        subTopic: "שיטת ההצבה",
        question_text: "המערכת עם 'אינסוף פתרונות'. מה יקרה במערכת הזו?<br>1) y = x + 2<br>2) 2y = 2x + 4&rlm;",
        options: ["נקבל פסוק אמת 0 = 0 (או 4 = 4). כל נקודה על הישר היא פתרון.", "נקבל פסוק שקר.", "נקבל x = 2.", "נקבל y = 4."],
        correctAnswer: 0,
        hint: "הציבו את (x+2) במקום y במשוואה השנייה. תראו ששני האגפים יוצאים זהים לחלוטין.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב את הביטוי מתוך משוואה 1 לתוך משוואה 2.&rlm;", math_expression: "2 × (x + 2) = 2x + 4" },
            { verbal_explanation: "שלב ב': נפתח סוגריים.&rlm;", math_expression: "2x + 4 = 2x + 4" },
            { verbal_explanation: "שלב ג': שני האגפים זהים לחלוטין! זהו פסוק אמת שתמיד נכון.&rlm;", math_expression: "0 = 0" },
            { verbal_explanation: "מסקנה: אלו שתי צורות כתיבה של אותה משוואה (אותו ישר), ולכן כל נקודה עליהן מהווה פתרון.&rlm;", math_expression: "" }
        ],
        final_answer: "נקבל פסוק אמת 0 = 0 (או 4 = 4). כל נקודה על הישר היא פתרון."
    },
    // שאלה 12
    {
        topic: "system_of_equations",
        subTopic: "שיטת ההצבה",
        question_text: "אתגר שברים בשיטת ההצבה. נתון:<br>1) x = y : 2<br>2) 4x + 3y = 20<br>מהו y?&rlm;",
        options: ["4", "2", "5", "8"],
        correctAnswer: 0,
        hint: "הציבו y/2 (כלומר 0.5y) במקום x במשוואה השנייה. 4 כפול חצי y שווה 2y.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב y חלקי 2 במקום x במשוואה 2.&rlm;", math_expression: "4 × (y : 2) + 3y = 20" },
            { verbal_explanation: "שלב ב': 4 כפול חצי שווה 2 שלמים.&rlm;", math_expression: "2y + 3y = 20" },
            { verbal_explanation: "שלב ג': נכנס איברים (5y) ונחלק ב-5.&rlm;", math_expression: "5y = 20  =>  y = 4" }
        ],
        final_answer: "4"
    },

    // ==========================================================
    // תת נושא 2: שיטת השוואת מקדמים (12 שאלות)
    // ==========================================================
    
    // שאלה 13
    {
        topic: "system_of_equations",
        subTopic: "שיטת השוואת מקדמים",
        question_text: "העיקרון של שיטת השוואת מקדמים הוא לחבר או לחסר את שתי המשוואות (כמו בטור) כדי להעלים את אחד המשתנים. פתרו את המערכת הבאה בעזרת חיבור המשוואות:<br>1) x + y = 10<br>2) x - y = 4&rlm;",
        options: ["x = 7, y = 3", "x = 6, y = 4", "x = 5, y = 5", "x = 8, y = 2"],
        correctAnswer: 0,
        hint: "אם תחברו את המשוואות (צד שמאל עם צד שמאל, וימין עם ימין), הפלוס y והמינוס y יבטלו זה את זה (0). תקבלו 2x = 14.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחבר את שתי המשוואות זו לזו. פעולה זו 'מחסלת' את המשתנה y (כי פלוס y ומינוס y מתאפסים).&rlm;", math_expression: "(x + y) + (x - y) = 10 + 4" },
            { verbal_explanation: "שלב ב': קיבלנו משוואה בנעלם אחד.&rlm;", math_expression: "2x = 14" },
            { verbal_explanation: "שלב ג': נחלק ב-2 למציאת x.&rlm;", math_expression: "x = 7" },
            { verbal_explanation: "שלב ד': נציב x=7 באחת המשוואות המקוריות.&rlm;", math_expression: "7 + y = 10  =>  y = 3" }
        ],
        final_answer: "x = 7, y = 3"
    },
    // שאלה 14
    {
        topic: "system_of_equations",
        subTopic: "שיטת השוואת מקדמים",
        question_text: "לפעמים המקדמים זהים באותו הסימן, ואז נשתמש בפעולת חיסור. פתרו את המערכת על ידי חיסור משוואה 2 ממשוואה 1:<br>1) 3x + 2y = 20<br>2) x + 2y = 12&rlm;",
        options: ["x = 4, y = 4", "x = 2, y = 5", "x = 6, y = 1", "x = 8, y = -2"],
        correctAnswer: 0,
        hint: "חסרו: 3x פחות x משאיר 2x. שני y פחות שני y נעלמים. 20 פחות 12 משאיר 8.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': המקדם של y הוא 2 בשתי המשוואות. כדי לבטל אותו נחסר את המשוואות.&rlm;", math_expression: "(3x - x) + (2y - 2y) = 20 - 12" },
            { verbal_explanation: "שלב ב': נחשב את התוצאה.&rlm;", math_expression: "2x = 8" },
            { verbal_explanation: "שלב ג': נחלק ב-2 למציאת x.&rlm;", math_expression: "x = 4" },
            { verbal_explanation: "שלב ד': נציב x=4 למשוואה 2 למציאת y.&rlm;", math_expression: "4 + 2y = 12  =>  2y = 8  =>  y = 4" }
        ],
        final_answer: "x = 4, y = 4"
    },
    // שאלה 15
    {
        topic: "system_of_equations",
        subTopic: "שיטת השוואת מקדמים",
        question_text: "אם המקדמים אינם שווים ואף אינם נגדיים, עלינו להרחיב (לכפול) את אחת המשוואות. פתרו:<br>1) x + 3y = 9<br>2) 2x - y = 4&rlm;",
        options: ["x = 3, y = 2", "x = 6, y = 1", "x = 0, y = 3", "x = 4, y = 4"],
        correctAnswer: 0,
        hint: "כדי להעלים את x, כפלו את המשוואה הראשונה פי 2 (ואז חסרו). כדי להעלים את y, כפלו את המשוואה השנייה פי 3 (ואז חברו).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרחיב את משוואה 2 פי 3, כדי שהמקדם של y יהיה 3- (נגדי למשוואה הראשונה).&rlm;", math_expression: "3 × (2x - y) = 3 × 4  =>  6x - 3y = 12" },
            { verbal_explanation: "שלב ב': נחבר את משוואה 1 עם המשוואה החדשה שקיבלנו. ה-y יתבטל.&rlm;", math_expression: "(x + 6x) + (3y - 3y) = 9 + 12" },
            { verbal_explanation: "שלב ג': התקבלה משוואה בנעלם x.&rlm;", math_expression: "7x = 21  =>  x = 3" },
            { verbal_explanation: "שלב ד': נציב x=3 במשוואה 1.&rlm;", math_expression: "3 + 3y = 9  =>  3y = 6  =>  y = 2" }
        ],
        final_answer: "x = 3, y = 2"
    },
    // שאלה 16
    {
        topic: "system_of_equations",
        subTopic: "שיטת השוואת מקדמים",
        question_text: "איזה מהפעולות הבאות מותר לבצע על משוואה במערכת מבלי לשנות את הפתרון שלה?&rlm;",
        options: ["להכפיל או לחלק את שני אגפי המשוואה באותו מספר (שאינו 0).", "להוסיף x רק לאגף שמאל.", "להכפיל רק את ה-y במספר כלשהו.", "להעלות בריבוע את שני האגפים."],
        correctAnswer: 0,
        hint: "משוואה היא כמו מאזניים. כל פעולה שעושים (כפל, חילוק, חיבור, חיסור) חייבת להתבצע בדיוק באותו אופן על שני הצדדים.&rlm;",
        solution_steps: [
            { verbal_explanation: "כלל יסוד באלגברה: משוואה נשמרת כל עוד מבצעים פעולות מתמטיות זהות על שני אגפיה.&rlm;", math_expression: "" },
            { verbal_explanation: "בשיטת השוואת מקדמים, אנו מרבים לכפול את כל אגף ימין וכל אגף שמאל במספר קבוע כדי 'ליישר קו' עם המשוואה השנייה.&rlm;", math_expression: "" }
        ],
        final_answer: "להכפיל או לחלק את שני אגפי המשוואה באותו מספר (שאינו 0)."
    },
    // שאלה 17
    {
        topic: "system_of_equations",
        subTopic: "שיטת השוואת מקדמים",
        question_text: "לפעמים צריך להרחיב את **שתי** המשוואות כדי להגיע למקדם משותף. מהו הגורם המשותף המינימלי למקדמים של y כדי לפתור את המערכת הבאה?<br>1) 2x + 3y = 12<br>2) 5x + 2y = 19&rlm;",
        options: ["6 (נכפיל משוואה 1 ב-2, ומשוואה 2 ב-3)", "5 (נכפיל את הראשונה ב-5 ואת השנייה ב-2)", "12 (נכפיל ב-4 וב-6)", "אי אפשר לפתור ככה"],
        correctAnswer: 0,
        hint: "המקדמים של y הם 3 ו-2. המספר המשותף הקטן ביותר ששניהם מגיעים אליו בכפל הוא 6.&rlm;",
        solution_steps: [
            { verbal_explanation: "המקדמים של y הם 3 ו-2. הכפולה המשותפת המינימלית שלהם היא 6.&rlm;", math_expression: "" },
            { verbal_explanation: "כדי להגיע ל-6y במשוואה העליונה, נכפול אותה ב-2.&rlm;", math_expression: "2 × (2x + 3y = 12) => 4x + 6y = 24" },
            { verbal_explanation: "כדי להגיע ל-6y (או מינוס 6) במשוואה התחתונה, נכפול אותה ב-3.&rlm;", math_expression: "3 × (5x + 2y = 19) => 15x + 6y = 57" },
            { verbal_explanation: "כעת יש לשתי המשוואות מקדם זהה ל-y (6y), וניתן לחסר ביניהן.&rlm;", math_expression: "" }
        ],
        final_answer: "6 (נכפיל משוואה 1 ב-2, ומשוואה 2 ב-3)"
    },
    // שאלה 18
    {
        topic: "system_of_equations",
        subTopic: "שיטת השוואת מקדמים",
        question_text: "המשך לשאלה הקודמת: פתרו את המערכת לאחר ההרחבות שיצרנו (משוואה 1: 4x+6y=24. משוואה 2: 15x+6y=57). מהו הפתרון?&rlm;",
        options: ["x = 3, y = 2", "x = 2, y = 3", "x = 4, y = 1", "x = 5, y = 2"],
        correctAnswer: 0,
        hint: "חסרו את משוואה 1 ממשוואה 2: 15x פחות 4x שווה ל-11x. ה-6y מתבטל. 57 פחות 24 שווה 33. כמה זה 33 לחלק ל-11?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחסר את המשוואה הקטנה מהגדולה.&rlm;", math_expression: "(15x + 6y) - (4x + 6y) = 57 - 24" },
            { verbal_explanation: "שלב ב': נכנס איברים.&rlm;", math_expression: "11x = 33" },
            { verbal_explanation: "שלב ג': נחלק ב-11.&rlm;", math_expression: "x = 3" },
            { verbal_explanation: "שלב ד': נציב x=3 באחת המשוואות (למשל 2x + 3y = 12).&rlm;", math_expression: "2 × 3 + 3y = 12  =>  6 + 3y = 12  =>  3y = 6  =>  y = 2" }
        ],
        final_answer: "x = 3, y = 2"
    },
    // שאלה 19
    {
        topic: "system_of_equations",
        subTopic: "שיטת השוואת מקדמים",
        question_text: "קבעו מה יקרה כשנחבר את שתי המשוואות הבאות (מבלי לפתור עד הסוף):<br>1) 5x - 7y = 10<br>2) -5x + 7y = 12&rlm;",
        options: ["אגף שמאל יתאפס כולו (נקבל 0 = 22), ולכן אין למערכת פתרון.", "נקבל 10x = 22.", "נקבל 14y = 2.", "שני הנעלמים יתבטלו ונקבל אינסוף פתרונות."],
        correctAnswer: 0,
        hint: "5x ומינוס 5x הם נגדיים. מינוס 7y ופלוס 7y הם גם נגדיים. בחיבור הכל נעלם משמאל, אבל בימין נשארנו עם 10+12.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחבר את אגף שמאל עם אגף שמאל.&rlm;", math_expression: "(5x - 5x) + (-7y + 7y) = 0" },
            { verbal_explanation: "שלב ב': נחבר את אגף ימין עם אגף ימין.&rlm;", math_expression: "10 + 12 = 22" },
            { verbal_explanation: "שלב ג': המשוואה שקיבלנו היא 0 = 22. זהו פסוק שקר, ולכן למערכת אין פתרון.&rlm;", math_expression: "" }
        ],
        final_answer: "אגף שמאל יתאפס כולו (נקבל 0 = 22), ולכן אין למערכת פתרון."
    },
    // שאלה 20
    {
        topic: "system_of_equations",
        subTopic: "שיטת השוואת מקדמים",
        question_text: "במערכת הבאה, במקום לכפול, אפשר גם לחלק את אחת המשוואות כדי להקל על הפתרון. איזו פעולה כדאי לעשות?<br>1) x - 2y = 8<br>2) 10x + 10y = 50&rlm;",
        options: ["לחלק את משוואה 2 במספר 10 כדי לקבל x + y = 5.", "לחלק את משוואה 1 במספר 2.", "לחלק את משוואה 1 ב-8.", "אי אפשר לחלק משוואות."],
        correctAnswer: 0,
        hint: "במשוואה 2 (10x + 10y = 50), כל המקדמים והתוצאה הם כפולות של 10! חלוקה ב-10 'תכווץ' את המשוואה ותהפוך אותה לקלה מאוד.&rlm;",
        solution_steps: [
            { verbal_explanation: "פעולת חלוקה שומרת על השוויון של המשוואה אם מבצעים אותה על כל האיברים.&rlm;", math_expression: "" },
            { verbal_explanation: "במשוואה השנייה, 10, 10 ו-50 מתחלקים כולם ב-10.&rlm;", math_expression: "(10x + 10y) : 10 = 50 : 10" },
            { verbal_explanation: "כך נקבל משוואה קטנה ופשוטה (x + y = 5), שנוכל לחסר או לחבר בקלות למשוואה הראשונה.&rlm;", math_expression: "" }
        ],
        final_answer: "לחלק את משוואה 2 במספר 10 כדי לקבל x + y = 5."
    },
    // שאלה 21
    {
        topic: "system_of_equations",
        subTopic: "שיטת השוואת מקדמים",
        question_text: "מהו הפתרון של המערכת:<br>1) 2x + y = 11<br>2) x + 3y = 13&rlm;",
        options: ["x = 4, y = 3", "x = 5, y = 1", "x = 3, y = 5", "x = 2, y = 7"],
        correctAnswer: 0,
        hint: "כפלו את משוואה 2 במספר 2 (תקבלו 2x + 6y = 26). חסרו את משוואה 1 מהמשוואה החדשה.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרחיב את המשוואה התחתונה פי 2.&rlm;", math_expression: "2 × (x + 3y) = 2 × 13  =>  2x + 6y = 26" },
            { verbal_explanation: "שלב ב': נחסר את המשוואה העליונה (2x+y=11) מהמשוואה התחתונה המורחבת. ה-2x מתבטל.&rlm;", math_expression: "6y - y = 26 - 11" },
            { verbal_explanation: "שלב ג': נפתור עבור y.&rlm;", math_expression: "5y = 15  =>  y = 3" },
            { verbal_explanation: "שלב ד': נציב y=3 במשוואה המקורית (x+3y=13) למציאת x.&rlm;", math_expression: "x + 9 = 13  =>  x = 4" }
        ],
        final_answer: "x = 4, y = 3"
    },
    // שאלה 22
    {
        topic: "system_of_equations",
        subTopic: "שיטת השוואת מקדמים",
        question_text: "לעיתים צריך לסדר את המשוואות לפני שפותרים. סדרו ופתרו:<br>1) 3x = 12 - 2y<br>2) y - 2x = 6&rlm;",
        options: ["x = 0, y = 6", "x = 2, y = 3", "x = 4, y = 0", "x = -2, y = 2"],
        correctAnswer: 0,
        hint: "במשוואה 1, העבירו את ה-2y- שמאלה (+2y). במשוואה 2, סדרו את ה-x לפני ה-y. ואז תכפילו ותפתרו! (קל להציב תשובות כדי לבדוק).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': סידור המשוואות. משוואה 1: נעביר 2y שמאלה. משוואה 2: נשנה סדר בין x ל-y.&rlm;", math_expression: "1) 3x + 2y = 12 ,  2) -2x + y = 6" },
            { verbal_explanation: "שלב ב': נרחיב את משוואה 2 פי 2 כדי לקבל מקדם נגדי ל-y.&rlm;", math_expression: "2 × (-2x + y) = 2 × 6  =>  -4x + 2y = 12" },
            { verbal_explanation: "שלב ג': נחסר את המשוואה החדשה ממשוואה 1 המקורית. ה-2y יתבטל.&rlm;", math_expression: "(3x) - (-4x) = 12 - 12" },
            { verbal_explanation: "שלב ד': נפתור. 7x שווה אפס. לכן x=0. נציב ונמצא ש-y=6.&rlm;", math_expression: "7x = 0  =>  x = 0  =>  y = 6" }
        ],
        final_answer: "x = 0, y = 6"
    },
    // שאלה 23
    {
        topic: "system_of_equations",
        subTopic: "שיטת השוואת מקדמים",
        question_text: "מהו הפתרון של המערכת שבה יש שברים אלגבריים פשוטים?<br>1) x:2 + y = 6<br>2) x - y = 3&rlm;",
        options: ["x = 6, y = 3", "x = 8, y = 2", "x = 4, y = 1", "x = 10, y = 7"],
        correctAnswer: 0,
        hint: "חברו את שתי המשוואות כפי שהן! ה-y יתבטל ותקבלו 'איקס חלקי שתיים, ועוד איקס' שווה ל-9.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': מאחר והמקדמים של y הם 1 ומינוס 1, פשוט נחבר את המשוואות.&rlm;", math_expression: "(x:2 + x) + (y - y) = 6 + 3" },
            { verbal_explanation: "שלב ב': x ועוד חצי x זה אחד וחצי x (או 1.5x).&rlm;", math_expression: "1.5x = 9" },
            { verbal_explanation: "שלב ג': נחלק 9 ב-1.5.&rlm;", math_expression: "x = 9 : 1.5 = 6" },
            { verbal_explanation: "שלב ד': נציב x=6 במשוואה 2 למציאת y.&rlm;", math_expression: "6 - y = 3  =>  y = 3" }
        ],
        final_answer: "x = 6, y = 3"
    },
    // שאלה 24
    {
        topic: "system_of_equations",
        subTopic: "שיטת השוואת מקדמים",
        question_text: "פתרו את המערכת (ניתן להשתמש בכל אחת מהשיטות):<br>1) 5x - 3y = 9<br>2) -2x + 3y = 0&rlm;",
        options: ["x = 3, y = 2", "x = 1, y = -1", "x = -3, y = 2", "x = 2, y = 3"],
        correctAnswer: 0,
        hint: "המקדמים של y מנוגדים (3- ו-3+). חיבור המשוואות יעשה קסמים מיידיים!&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': חיבור המשוואות מעלים את המשתנה y מיד.&rlm;", math_expression: "(5x - 2x) = 9 + 0" },
            { verbal_explanation: "שלב ב': נפתור עבור x.&rlm;", math_expression: "3x = 9  =>  x = 3" },
            { verbal_explanation: "שלב ג': נציב x=3 במשוואה השנייה.&rlm;", math_expression: "-2 × 3 + 3y = 0" },
            { verbal_explanation: "שלב ד': נחשב.&rlm;", math_expression: "-6 + 3y = 0  =>  3y = 6  =>  y = 2" }
        ],
        final_answer: "x = 3, y = 2"
    },

    // ==========================================================
    // תת נושא 3: פתרון גרף (12 שאלות)
    // ==========================================================
    
    // שאלה 25
    {
        topic: "system_of_equations",
        subTopic: "פתרון גרף",
        question_text: "במערכת צירים משורטטים שני ישרים המייצגים מערכת משוואות. הישרים נחתכים בנקודה אחת בלבד. מה משמעות נקודת החיתוך הזו?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 200 150' width='100%' height='150' style='max-width:200px;'><line x1='10' y1='130' x2='190' y2='130' stroke='#334155' stroke-width='2'/><line x1='100' y1='10' x2='100' y2='140' stroke='#334155' stroke-width='2'/><line x1='40' y1='110' x2='160' y2='30' stroke='#ef4444' stroke-width='2'/><line x1='60' y1='30' x2='150' y2='110' stroke='#3b82f6' stroke-width='2'/><circle cx='115' cy='60' r='5' fill='#10b981'/><text x='130' y='55' font-family='Arial' font-size='12' font-weight='bold' fill='#10b981'>(x, y)</text></svg></div>",
        options: ["זוהי הנקודה היחידה המהווה פתרון של שתי המשוואות גם יחד.", "זוהי נקודת האפס של שתי המשוואות.", "זהו פתרון של המשוואה הראשונה בלבד.", "זוהי נקודה שאינה שייכת לאף אחת מהמשוואות."],
        correctAnswer: 0,
        hint: "כל נקודה על ישר מייצגת פתרון למשוואה שלו. נקודה שנמצאת על שני הישרים בו זמנית...&rlm;",
        solution_steps: [
            { verbal_explanation: "גרף של ישר מורכב מאינסוף נקודות שכל אחת מהן מהווה פתרון למשוואה שלו.&rlm;", math_expression: "" },
            { verbal_explanation: "נקודת החיתוך נמצאת על שני הישרים בו זמנית.&rlm;", math_expression: "" },
            { verbal_explanation: "לכן, הקואורדינטות (x,y) של הנקודה הזו הן הפתרון היחיד המקיים את שתי המשוואות במערכת.&rlm;", math_expression: "" }
        ],
        final_answer: "זוהי הנקודה היחידה המהווה פתרון של שתי המשוואות גם יחד."
    },
    // שאלה 26
    {
        topic: "system_of_equations",
        subTopic: "פתרון גרף",
        question_text: "שרטטו לכם במערכת צירים את שני הישרים הבאים:<br>1) y = 2x + 1<br>2) y = 2x - 3<br>כמה פתרונות יש למערכת המשוואות הזו?&rlm;",
        options: ["אפס פתרונות (הישרים מקבילים).", "פתרון אחד.", "אינסוף פתרונות.", "שני פתרונות."],
        correctAnswer: 0,
        hint: "הביטו על השיפוע של שני הישרים (המקדם של x). בשניהם הוא 2. מה זה אומר על הישרים בגרף?&rlm;",
        solution_steps: [
            { verbal_explanation: "לשני הישרים יש את אותו השיפוע בדיוק (m=2).&rlm;", math_expression: "" },
            { verbal_explanation: "ישרים בעלי שיפוע זהה ונקודות חיתוך שונות (b=1 מול b=-3) הם ישרים מקבילים.&rlm;", math_expression: "" },
            { verbal_explanation: "ישרים מקבילים אינם נחתכים לעולם, ולכן למערכת אין אף פתרון.&rlm;", math_expression: "" }
        ],
        final_answer: "אפס פתרונות (הישרים מקבילים)."
    },
    // שאלה 27
    {
        topic: "system_of_equations",
        subTopic: "פתרון גרף",
        question_text: "קריאת גרף: לפי השרטוט, מהו הפתרון של מערכת המשוואות המוצגת? (חפשו את נקודת החיתוך).&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 200 150' width='100%' height='150' style='max-width:200px;'><line x1='10' y1='120' x2='190' y2='120' stroke='#334155' stroke-width='2'/><line x1='100' y1='10' x2='100' y2='140' stroke='#334155' stroke-width='2'/><line x1='40' y1='100' x2='160' y2='40' stroke='#ef4444' stroke-width='2'/><line x1='140' y1='140' x2='140' y2='20' stroke='#3b82f6' stroke-width='2'/><circle cx='140' cy='50' r='5' fill='#10b981'/><line x1='140' y1='50' x2='100' y2='50' stroke='#94a3b8' stroke-dasharray='4,4'/><text x='140' y='135' font-family='Arial' font-size='10' fill='#0f172a'>4</text><text x='85' y='55' font-family='Arial' font-size='10' fill='#0f172a'>3</text></svg></div>",
        options: ["(4, 3)", "(3, 4)", "אין פתרון", "אי אפשר לדעת מהגרף"],
        correctAnswer: 0,
        hint: "הסתכלו היכן הצלב הירוק יושב. קודם קוראים את ציר ה-x (האופקי) ואחר כך את ציר ה-y (האנכי).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נמצא את נקודת המפגש של שני הישרים בגרף.&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ב': נרד מהנקודה אל ציר ה-x (הציר השוכב). אנו רואים שהערך הוא 4.&rlm;", math_expression: "x = 4" },
            { verbal_explanation: "שלב ג': נלך מהנקודה שמאלה אל ציר ה-y (הציר העומד). אנו רואים שהערך הוא 3.&rlm;", math_expression: "y = 3" },
            { verbal_explanation: "הפתרון הוא הזוג הסדור (x,y).&rlm;", math_expression: "(4, 3)" }
        ],
        final_answer: "(4, 3)"
    },
    // שאלה 28
    {
        topic: "system_of_equations",
        subTopic: "פתרון גרף",
        question_text: "כיצד ייראה הגרף של המערכת הבאה, בעלת אינסוף פתרונות?<br>1) y = 3x - 2<br>2) 2y = 6x - 4&rlm;",
        options: ["ישר אחד המכסה בדיוק את הישר השני (ישרים מתלכדים).", "שני ישרים מקבילים (שלא נוגעים זה בזה).", "שני ישרים החותכים זה את זה בצורת X.", "נקודה אחת בלבד בחלל."],
        correctAnswer: 0,
        hint: "אם נחלק את המשוואה השנייה ב-2, נגלה שהיא בעצם בדיוק, אבל בדיוק, המשוואה הראשונה.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נבדוק את המשוואה השנייה ונחלק אותה ב-2.&rlm;", math_expression: "(2y) : 2 = (6x - 4) : 2  =>  y = 3x - 2" },
            { verbal_explanation: "שלב ב': אנו רואים ששתי המשוואות זהות לחלוטין. מדובר באותו ישר!&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ג': כאשר משרטטים אותן, ישר אחד יונח בדיוק על גבי הישר השני. המצב נקרא ישרים מתלכדים.&rlm;", math_expression: "" }
        ],
        final_answer: "ישר אחד המכסה בדיוק את הישר השני (ישרים מתלכדים)."
    },
    // שאלה 29
    {
        topic: "system_of_equations",
        subTopic: "פתרון גרף",
        question_text: "נתונות המשוואות y = 2x ו- y = -x. היכן הן ייחתכו בגרף?&rlm;",
        options: ["בראשית הצירים (0,0).", "לא ייחתכו לעולם.", "בנקודה (1, 2).", "בנקודה (-1, 1)."],
        correctAnswer: 0,
        hint: "שתי הפונקציות חסרות 'איבר חופשי' (אין להן + בוסף). מה זה אומר על נקודת החיתוך שלהן עם ציר ה-y?&rlm;",
        solution_steps: [
            { verbal_explanation: "דרך א' (הבנה גרפית): פונקציה קווית ללא איבר חופשי (b=0) עוברת תמיד דרך ראשית הצירים (0,0). מכיוון ששתיהן עוברות שם, שם הן ייחתכו.&rlm;", math_expression: "" },
            { verbal_explanation: "דרך ב' (השוואה): נשווה את הפונקציות.&rlm;", math_expression: "2x = -x  =>  3x = 0  =>  x = 0" },
            { verbal_explanation: "נציב x=0 ונקבל y=0.&rlm;", math_expression: "(0,0)" }
        ],
        final_answer: "בראשית הצירים (0,0)."
    },
    // שאלה 30
    {
        topic: "system_of_equations",
        subTopic: "פתרון גרף",
        question_text: "קריאת גרף עם נתונים מציאותיים: ישר א' מתאר את כמות המים בבריכה א' (מתחילה מ-0 ומתמלאת). ישר ב' מתאר את המים בבריכה ב' (מתחילה מ-100 ליטר ומתרוקנת). מה מסמלת נקודת החיתוך ביניהם?&rlm;",
        options: ["את הזמן שבו בשתי הבריכות יש כמות מים שווה.", "את הזמן שבו שתי הבריכות ריקות.", "את הרגע שבו סוגרים את הברזים.", "את קצב זרימת המים."],
        correctAnswer: 0,
        hint: "בנקודת החיתוך, לשני הישרים יש את אותו ה-x (זמן) ואת אותו ה-y (כמות מים).&rlm;",
        solution_steps: [
            { verbal_explanation: "נקודת חיתוך אומרת שבדיוק באותו ערך של x, שתי הפונקציות מקבלות את אותו הערך ב-y.&rlm;", math_expression: "" },
            { verbal_explanation: "בהקשר של הסיפור: בזמן המסוים (x), כמות המים (y) בשתי הבריכות זהה לחלוטין.&rlm;", math_expression: "" }
        ],
        final_answer: "את הזמן שבו בשתי הבריכות יש כמות מים שווה."
    },
    // שאלה 31
    {
        topic: "system_of_equations",
        subTopic: "פתרון גרף",
        question_text: "איזה מבין הצמדים הבאים **ייחתך** בוודאות בגרף (יהיה פתרון אחד למערכת)?&rlm;",
        options: ["y = 3x ו- y = -3x", "y = 5x + 1 ו- y = 5x + 8", "y = 2x ו- y = 2x - 4", "y = 0.5x + 3 ו- y = 1/2x + 3"],
        correctAnswer: 0,
        hint: "כדי שישרים ייחתכו, חייב להיות להם שיפוע שונה (m שונה). אם השיפוע זהה, הם או מקבילים (אין פתרון) או מתלכדים (אינסוף).&rlm;",
        solution_steps: [
            { verbal_explanation: "נבדוק את השיפועים (המקדם של x) בכל אופציה.&rlm;", math_expression: "" },
            { verbal_explanation: "באופציה ב' השיפוע הוא 5 בשניהם. הם מקבילים.&rlm;", math_expression: "" },
            { verbal_explanation: "באופציה ג' השיפוע הוא 2 בשניהם. הם מקבילים.&rlm;", math_expression: "" },
            { verbal_explanation: "באופציה ד' השיפוע הוא 0.5 (חצי) בשניהם. הם למעשה מתלכדים.&rlm;", math_expression: "" },
            { verbal_explanation: "באופציה א', השיפועים שונים לחלוטין (3 לעומת 3-). לכן הם חייבים להיחתך.&rlm;", math_expression: "" }
        ],
        final_answer: "y = 3x ו- y = -3x"
    },
    // שאלה 32
    {
        topic: "system_of_equations",
        subTopic: "פתרון גרף",
        question_text: "אם פתרנו מערכת משוואות וקיבלנו את הפתרון (5, 0), איפה תהיה ממוקמת נקודת החיתוך בשרטוט?&rlm;",
        options: ["על ציר ה-x.", "על ציר ה-y.", "בראשית הצירים.", "ברביע הראשון (אמצע הדף ימינה למעלה)."],
        correctAnswer: 0,
        hint: "נקודה שבה ה-y הוא 0 לא עלתה למעלה ולא ירדה למטה, אלא נשארה 'על הקרקע'.&rlm;",
        solution_steps: [
            { verbal_explanation: "בקואורדינטה (5,0), ה-x הוא 5 וה-y הוא 0.&rlm;", math_expression: "" },
            { verbal_explanation: "כאשר ערך ה-y של נקודה הוא אפס, הנקודה לא מתרוממת ולא יורדת מעל רצפת האפס, ולכן היא מונחת בדיוק על ציר ה-x האופקי.&rlm;", math_expression: "" }
        ],
        final_answer: "על ציר ה-x."
    },
    // שאלה 33
    {
        topic: "system_of_equations",
        subTopic: "פתרון גרף",
        question_text: "מהו הפתרון של המערכת המיוצגת על ידי שני הישרים האופקיים והאנכיים: x = 4 ו- y = 7 ?&rlm;",
        options: ["(4, 7)", "(7, 4)", "אין פתרון, אלו קווים ישרים ולא פונקציות רגילות", "אינסוף פתרונות"],
        correctAnswer: 0,
        hint: "x=4 הוא קו אנכי שחוצה את ציר ה-x ב-4. y=7 הוא קו אופקי שחוצה את ציר ה-y ב-7. נקודת המפגש היא פשוט החיבור של שניהם!&rlm;",
        solution_steps: [
            { verbal_explanation: "קו x=4 אומר שכל נקודה על הקו הזה מקבלת x=4, ללא קשר ל-y.&rlm;", math_expression: "" },
            { verbal_explanation: "קו y=7 אומר שכל נקודה על הקו הזה מקבלת y=7, ללא קשר ל-x.&rlm;", math_expression: "" },
            { verbal_explanation: "בנקודת המפגש של הקווים, הנקודה חייבת לקיים את שני התנאים. לכן היא (4,7).&rlm;", math_expression: "" }
        ],
        final_answer: "(4, 7)"
    },
    // שאלה 34
    {
        topic: "system_of_equations",
        subTopic: "פתרון גרף",
        question_text: "תלמיד רצה לפתור את המערכת y=2x ו- y=3x בדרך גרפית, והכין טבלת ערכים מוקדמת כדי לשרטט. אילו זוגות יופיעו בטבלה של המשוואה הראשונה (y=2x)?&rlm;",
        options: ["(1, 2) , (2, 4) , (3, 6)", "(1, 3) , (2, 6) , (3, 9)", "(2, 1) , (4, 2) , (6, 3)", "(1, 1) , (2, 2) , (3, 3)"],
        correctAnswer: 0,
        hint: "הפונקציה היא y=2x. כפלו כל קלט x (1,2,3) פי 2 כדי לקבל את ה-y.&rlm;",
        solution_steps: [
            { verbal_explanation: "נציב x=1. התוצאה היא 2 כפול 1.&rlm;", math_expression: "y = 2 × 1 = 2  =>  (1, 2)" },
            { verbal_explanation: "נציב x=2. התוצאה היא 2 כפול 2.&rlm;", math_expression: "y = 2 × 2 = 4  =>  (2, 4)" },
            { verbal_explanation: "נציב x=3. התוצאה היא 2 כפול 3.&rlm;", math_expression: "y = 2 × 3 = 6  =>  (3, 6)" }
        ],
        final_answer: "(1, 2) , (2, 4) , (3, 6)"
    },
    // שאלה 35
    {
        topic: "system_of_equations",
        subTopic: "פתרון גרף",
        question_text: "למערכת משוואות יש פתרון שהוא (3-, 2). איזה מהשרטוטים (תיאור מילולי) מתאים לפתרון זה?&rlm;",
        options: ["נקודת חיתוך הנמצאת בחלק הימני-תחתון של מערכת הצירים (הרביע הרביעי).", "נקודת חיתוך בחלק השמאלי-תחתון (הרביע השלישי).", "נקודת חיתוך על ציר ה-x.", "נקודת חיתוך בחלק הימני-עליון."],
        correctAnswer: 0,
        hint: "ה-x הוא 2 (זזים ימינה לחלק החיובי). ה-y הוא 3- (זזים למטה לחלק השלילי). באיזה אזור אנחנו?&rlm;",
        solution_steps: [
            { verbal_explanation: "קואורדינטת ה-x חיובית, ולכן אנו בצד ימין של הציר האנכי.&rlm;", math_expression: "x = 2 > 0" },
            { verbal_explanation: "קואורדינטת ה-y שלילית, ולכן אנו למטה (מתחת לציר האופקי).&rlm;", math_expression: "y = -3 < 0" },
            { verbal_explanation: "האזור הימני-התחתון במערכת הצירים נקרא הרביע הרביעי.&rlm;", math_expression: "" }
        ],
        final_answer: "נקודת חיתוך הנמצאת בחלק הימני-תחתון של מערכת הצירים (הרביע הרביעי)."
    },
    // שאלה 36
    {
        topic: "system_of_equations",
        subTopic: "פתרון גרף",
        question_text: "קבעו האם למערכת הבאה יש פתרון, ללא חישוב, רק על ידי הסתכלות על המשוואות כגרפים:<br>1) 2y = 4x + 10<br>2) y = 2x + 5&rlm;",
        options: ["יש אינסוף פתרונות, כי אם נחלק את המשוואה הראשונה ב-2, נקבל בדיוק את השנייה (אלו ישרים מתלכדים).", "יש פתרון אחד בלבד.", "אין פתרון (ישרים מקבילים).", "אין מספיק נתונים."],
        correctAnswer: 0,
        hint: "תמיד נסו 'לפשט' משוואה למצב של y=... כדי לראות את השיפוע והחיתוך. חלקו את המשוואה הראשונה ב-2!&rlm;",
        solution_steps: [
            { verbal_explanation: "נפשט את משוואה 1 על ידי חלוקה ב-2 כדי להביא אותה לצורה הסטנדרטית.&rlm;", math_expression: "(2y) : 2 = (4x + 10) : 2  =>  y = 2x + 5" },
            { verbal_explanation: "אנו רואים שמשוואה 1 הזהה לחלוטין למשוואה 2. אלו בעצם שני ייצוגים לאותו הישר.&rlm;", math_expression: "" },
            { verbal_explanation: "מכיוון שהם מונחים אחד על השני (מתלכדים), כל נקודה על הישר היא פתרון.&rlm;", math_expression: "" }
        ],
        final_answer: "יש אינסוף פתרונות, כי אם נחלק את המשוואה הראשונה ב-2, נקבל בדיוק את השנייה (אלו ישרים מתלכדים)."
    },

    // ==========================================================
    // תת נושא 4: בעיות מילוליות בשני נעלמים (12 שאלות)
    // ==========================================================
    
    // שאלה 37
    {
        topic: "system_of_equations",
        subTopic: "בעיות מילוליות בשני נעלמים",
        question_text: "בחווה יש תרנגולות ופרות. יחד יש בחווה 30 חיות. כשספרו את כל הרגליים של החיות בחווה, מצאו שיש 100 רגליים. כמה תרנגולות וכמה פרות יש בחווה? (נסמן תרנגולות כ-x ופרות כ-y).&rlm;",
        options: ["10 תרנגולות, 20 פרות", "15 תרנגולות, 15 פרות", "20 תרנגולות, 10 פרות", "5 תרנגולות, 25 פרות"],
        correctAnswer: 0,
        hint: "משוואה 1 (חיות): x + y = 30. משוואה 2 (רגליים): 2x (כי לתרנגולת 2 רגליים) + 4y (כי לפרה 4 רגליים) = 100. עכשיו פתרו!&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרכיב משוואת כמויות. סך החיות הוא 30.&rlm;", math_expression: "x + y = 30  =>  x = 30 - y" },
            { verbal_explanation: "שלב ב': נרכיב משוואת רגליים. לתרנגולת יש 2, לפרה 4.&rlm;", math_expression: "2x + 4y = 100" },
            { verbal_explanation: "שלב ג': נציב את x ממשוואה ראשונה לשנייה.&rlm;", math_expression: "2 × (30 - y) + 4y = 100" },
            { verbal_explanation: "שלב ד': נפתור.&rlm;", math_expression: "60 - 2y + 4y = 100  =>  2y = 40  =>  y = 20" },
            { verbal_explanation: "שלב ה': יש 20 פרות (y). לכן יש 10 תרנגולות (כדי להשלים ל-30).&rlm;", math_expression: "x = 30 - 20 = 10" }
        ],
        final_answer: "10 תרנגולות, 20 פרות"
    },
    // שאלה 38
    {
        topic: "system_of_equations",
        subTopic: "בעיות מילוליות בשני נעלמים",
        question_text: "קבוצה קנתה כרטיסים להצגה: 3 כרטיסי מבוגר ו-2 כרטיסי ילד עלו יחד 160 שקלים. משפחה אחרת קנתה כרטיס מבוגר אחד ו-4 כרטיסי ילד ושילמה 120 שקלים. כמה עולה כרטיס למבוגר?&rlm;",
        options: ["40 שקלים", "20 שקלים", "30 שקלים", "50 שקלים"],
        correctAnswer: 0,
        hint: "נסמן: מבוגר = x, ילד = y. משוואה א': 3x+2y=160. משוואה ב': x+4y=120. בודדו את x ממשוואה ב' (x = 120 - 4y) והציבו בראשונה.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרכיב שתי משוואות.&rlm;", math_expression: "1) 3x + 2y = 160 , 2) x + 4y = 120" },
            { verbal_explanation: "שלב ב': נבודד את x מהמשוואה השנייה.&rlm;", math_expression: "x = 120 - 4y" },
            { verbal_explanation: "שלב ג': נציב את הביטוי במשוואה הראשונה.&rlm;", math_expression: "3 × (120 - 4y) + 2y = 160" },
            { verbal_explanation: "שלב ד': נפתור.&rlm;", math_expression: "360 - 12y + 2y = 160  =>  -10y = -200  =>  y = 20" },
            { verbal_explanation: "שלב ה': מצאנו שילד עולה 20. נציב למציאת מבוגר (x).&rlm;", math_expression: "x = 120 - 4 × 20 = 120 - 80 = 40" }
        ],
        final_answer: "40 שקלים"
    },
    // שאלה 39
    {
        topic: "system_of_equations",
        subTopic: "בעיות מילוליות בשני נעלמים",
        question_text: "סכומם של שני מספרים הוא 50. ההפרש ביניהם הוא 14. מהם שני המספרים?&rlm;",
        options: ["32 ו-18", "30 ו-20", "25 ו-25", "35 ו-15"],
        correctAnswer: 0,
        hint: "נסמן x ו-y. משוואה 1: x + y = 50. משוואה 2: x - y = 14. השתמשו בשיטת חיבור משוואות (ה-y יתבטל!).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרשום את שתי המשוואות.&rlm;", math_expression: "1) x + y = 50 , 2) x - y = 14" },
            { verbal_explanation: "שלב ב': נחבר את המשוואות. ה-y והמינוס y יתבטלו.&rlm;", math_expression: "x + x = 50 + 14  =>  2x = 64" },
            { verbal_explanation: "שלב ג': נחלק ב-2 למציאת x.&rlm;", math_expression: "x = 32" },
            { verbal_explanation: "שלב ד': נציב במשוואה הראשונה למציאת y.&rlm;", math_expression: "32 + y = 50  =>  y = 18" }
        ],
        final_answer: "32 ו-18"
    },
    // שאלה 40
    {
        topic: "system_of_equations",
        subTopic: "בעיות מילוליות בשני נעלמים",
        question_text: "בחנות פירות, קילו תפוחים (x) עולה פי 2 מקילו בננות (y). קנייה של 4 ק\"ג תפוחים ו-5 ק\"ג בננות עולה יחד 65 שקלים. כמה עולה קילו בננות?&rlm;",
        options: ["5 שקלים", "10 שקלים", "15 שקלים", "2.5 שקלים"],
        correctAnswer: 0,
        hint: "המשוואה הראשונה היא פשוטה מאוד: x = 2y. הציבו '2y' במקום x במשוואת הקנייה (4x + 5y = 65).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': תפוח עולה פי 2 מבננה.&rlm;", math_expression: "x = 2y" },
            { verbal_explanation: "שלב ב': משוואת הקנייה.&rlm;", math_expression: "4x + 5y = 65" },
            { verbal_explanation: "שלב ג': נציב 2y במקום x.&rlm;", math_expression: "4 × (2y) + 5y = 65" },
            { verbal_explanation: "שלב ד': נפתור.&rlm;", math_expression: "8y + 5y = 65  =>  13y = 65" },
            { verbal_explanation: "שלב ה': נחלק ב-13 למציאת y (בננה).&rlm;", math_expression: "y = 65 : 13 = 5" }
        ],
        final_answer: "5 שקלים"
    },
    // שאלה 41
    {
        topic: "system_of_equations",
        subTopic: "בעיות מילוליות בשני נעלמים",
        question_text: "קופת חיסכון מכילה מטבעות של 5 שקלים ו-10 שקלים בלבד. בסך הכל יש בקופה 20 מטבעות, והסכום הכולל שלהם הוא 130 שקלים. כמה מטבעות של 10 שקלים יש בקופה?&rlm;",
        options: ["6", "14", "10", "8"],
        correctAnswer: 0,
        hint: "נסמן: x מטבעות של 5. y מטבעות של 10. משוואת כמות: x + y = 20. משוואת ערך כספי: 5x + 10y = 130.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': משוואת כמות (יש 20 מטבעות). נבודד את x.&rlm;", math_expression: "x + y = 20  =>  x = 20 - y" },
            { verbal_explanation: "שלב ב': משוואת ערך כספי (כל מטבע כפול ערכו).&rlm;", math_expression: "5x + 10y = 130" },
            { verbal_explanation: "שלב ג': נציב את x בתוך המשוואה השנייה.&rlm;", math_expression: "5 × (20 - y) + 10y = 130" },
            { verbal_explanation: "שלב ד': נפתח סוגריים.&rlm;", math_expression: "100 - 5y + 10y = 130  =>  5y = 30" },
            { verbal_explanation: "שלב ה': נחלק ב-5. (לכן יש 6 מטבעות של עשר, ו-14 מטבעות של חמש).&rlm;", math_expression: "y = 6" }
        ],
        final_answer: "6"
    },
    // שאלה 42
    {
        topic: "system_of_equations",
        subTopic: "בעיות מילוליות בשני נעלמים",
        question_text: "מלבן: היקף המלבן הוא 36 ס\"מ. האורך (x) גדול ב-4 ס\"מ מהרוחב (y). מהו אורך המלבן?&rlm;",
        options: ["11 ס\"מ", "7 ס\"מ", "15 ס\"מ", "20 ס\"מ"],
        correctAnswer: 0,
        hint: "משוואת יחס צלעות: x = y + 4. משוואת היקף: 2x + 2y = 36. נסו להציב.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': משוואה על הצלעות (אורך x גדול ב-4 מרוחב y).&rlm;", math_expression: "x = y + 4" },
            { verbal_explanation: "שלב ב': משוואת היקף מלבן.&rlm;", math_expression: "2x + 2y = 36" },
            { verbal_explanation: "שלב ג': נציב y+4 במקום x במשוואת ההיקף.&rlm;", math_expression: "2 × (y + 4) + 2y = 36" },
            { verbal_explanation: "שלב ד': נפתור עבור y (הרוחב).&rlm;", math_expression: "2y + 8 + 2y = 36  =>  4y = 28  =>  y = 7" },
            { verbal_explanation: "שלב ה': האורך x גדול מ-y ב-4.&rlm;", math_expression: "x = 7 + 4 = 11" }
        ],
        final_answer: "11 ס\"מ"
    },
    // שאלה 43
    {
        topic: "system_of_equations",
        subTopic: "בעיות מילוליות בשני נעלמים",
        question_text: "במבחן אמריקאי יש 20 שאלות. על כל תשובה נכונה מקבלים 5 נקודות. על כל תשובה שגויה (או חסרה) מורידים 2 נקודות (כלומר 2-). תלמיד ענה על כל השאלות וקיבל ציון של 72. על כמה שאלות הוא ענה נכון (x)?&rlm;",
        options: ["16", "14", "18", "12"],
        correctAnswer: 0,
        hint: "x שאלות נכונות, y שאלות שגויות. x+y=20. הניקוד: 5x - 2y = 72.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': סך השאלות הוא 20. לכן השאלות השגויות הן 20 פחות השאלות הנכונות.&rlm;", math_expression: "y = 20 - x" },
            { verbal_explanation: "שלב ב': נרכיב משוואת ציון (5 על כל x, ומינוס 2 על כל y).&rlm;", math_expression: "5x - 2y = 72" },
            { verbal_explanation: "שלב ג': נציב את ה-y.&rlm;", math_expression: "5x - 2 × (20 - x) = 72" },
            { verbal_explanation: "שלב ד': נפתח סוגריים בזהירות עם המינוס.&rlm;", math_expression: "5x - 40 + 2x = 72" },
            { verbal_explanation: "שלב ה': נכנס איברים (7x) ונעביר את ה-40 (יהפוך לפלוס).&rlm;", math_expression: "7x = 112  =>  x = 16" }
        ],
        final_answer: "16"
    },
    // שאלה 44
    {
        topic: "system_of_equations",
        subTopic: "בעיות מילוליות בשני נעלמים",
        question_text: "קבוצה של 4 מבוגרים ו-5 ילדים אכלו במסעדה. מנת מבוגר יקרה ב-15 שקלים ממנת ילד. החשבון הכולל היה 330 שקלים. כמה עולה מנת ילד (y)?&rlm;",
        options: ["30 שקלים", "45 שקלים", "25 שקלים", "40 שקלים"],
        correctAnswer: 0,
        hint: "מבוגר (x) עולה y+15. החשבון הוא 4x + 5y = 330.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': קשר בין המנות.&rlm;", math_expression: "x = y + 15" },
            { verbal_explanation: "שלב ב': משוואת החשבון.&rlm;", math_expression: "4x + 5y = 330" },
            { verbal_explanation: "שלב ג': הצבה.&rlm;", math_expression: "4 × (y + 15) + 5y = 330" },
            { verbal_explanation: "שלב ד': פתרון המשוואה.&rlm;", math_expression: "4y + 60 + 5y = 330  =>  9y = 270" },
            { verbal_explanation: "שלב ה': חילוק ב-9 למציאת מחיר מנת ילד.&rlm;", math_expression: "y = 30" }
        ],
        final_answer: "30 שקלים"
    },
    // שאלה 45
    {
        topic: "system_of_equations",
        subTopic: "בעיות מילוליות בשני נעלמים",
        question_text: "גיל האב (x) הוא פי 3 מגיל הבן (y). בעוד 10 שנים, סכום הגילאים שלהם יחד יהיה 72. בן כמה הבן היום?&rlm;",
        options: ["13", "12", "15", "10"],
        correctAnswer: 0,
        hint: "היום: x = 3y. בעוד עשר שנים כל אחד גדל ב-10 שנים! לכן סכומם יהיה: (x+10) + (y+10) = 72.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': משוואת היום.&rlm;", math_expression: "x = 3y" },
            { verbal_explanation: "שלב ב': משוואת העתיד. שניהם מתבגרים ב-10 שנים.&rlm;", math_expression: "(x + 10) + (y + 10) = 72" },
            { verbal_explanation: "שלב ג': נסדר את משוואת העתיד.&rlm;", math_expression: "x + y + 20 = 72  =>  x + y = 52" },
            { verbal_explanation: "שלב ד': נציב x=3y במשוואה המסודרת.&rlm;", math_expression: "3y + y = 52  =>  4y = 52" },
            { verbal_explanation: "שלב ה': נמצא את גיל הבן היום.&rlm;", math_expression: "y = 13" }
        ],
        final_answer: "13"
    },
    // שאלה 46
    {
        topic: "system_of_equations",
        subTopic: "בעיות מילוליות בשני נעלמים",
        question_text: "חצי ממספר אחד שווה לשליש מהמספר השני. סכומם הוא 50. מהם המספרים?&rlm;",
        options: ["20 ו-30", "15 ו-35", "25 ו-25", "10 ו-40"],
        correctAnswer: 0,
        hint: "המשוואות: x/2 = y/3, וגם x + y = 50. כפלו את המשוואה הראשונה ב-6 כדי להיפטר מהשברים! תקבלו 3x = 2y.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': משוואה ראשונה עם שברים.&rlm;", math_expression: "x : 2 = y : 3" },
            { verbal_explanation: "שלב ב': נכפול את המשוואה ב-6 (מכנה משותף) כדי לקבל שלמים.&rlm;", math_expression: "3x = 2y  =>  x = (2y) : 3" },
            { verbal_explanation: "שלב ג': המשוואה השנייה.&rlm;", math_expression: "x + y = 50" },
            { verbal_explanation: "שלב ד': נציב את ה-x ונכפול הכל ב-3 כדי לפתור בקלות.&rlm;", math_expression: "(2y):3 + y = 50  =>  2y + 3y = 150  =>  5y = 150  =>  y = 30" },
            { verbal_explanation: "אם y=30, והסכום 50, אז x=20.&rlm;", math_expression: "" }
        ],
        final_answer: "20 ו-30"
    },
    // שאלה 47
    {
        topic: "system_of_equations",
        subTopic: "בעיות מילוליות בשני נעלמים",
        question_text: "במספר דו-ספרתי, ספרת העשרות (x) גדולה ב-4 מספרת האחדות (y). סכום הספרות הוא 10. מהו המספר הדו-ספרתי?&rlm;",
        options: ["73", "84", "62", "95"],
        correctAnswer: 0,
        hint: "משוואה 1: x = y + 4. משוואה 2: x + y = 10. פתרו כדי למצוא את הספרות והרכיבו את המספר!&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': משוואת קשר בין הספרות.&rlm;", math_expression: "x = y + 4" },
            { verbal_explanation: "שלב ב': משוואת סכום הספרות.&rlm;", math_expression: "x + y = 10" },
            { verbal_explanation: "שלב ג': הצבה של x.&rlm;", math_expression: "(y + 4) + y = 10" },
            { verbal_explanation: "שלב ד': פתרון עבור y (אחדות).&rlm;", math_expression: "2y = 6  =>  y = 3" },
            { verbal_explanation: "שלב ה': מציאת x (עשרות). המספר מורכב מעשרות 7 ואחדות 3.&rlm;", math_expression: "x = 3 + 4 = 7" }
        ],
        final_answer: "73"
    },
    // שאלה 48
    {
        topic: "system_of_equations",
        subTopic: "בעיות מילוליות בשני נעלמים",
        question_text: "בשתי חביות יש בסך הכל 100 ליטר מים (x+y=100). אם נעביר 10 ליטר מהחבית הראשונה לשנייה, כמות המים בהן תהיה שווה. כמה מים יש בהתחלה בחבית הראשונה?&rlm;",
        options: ["60 ליטר", "70 ליטר", "50 ליטר", "55 ליטר"],
        correctAnswer: 0,
        hint: "אם נעביר 10 מ-x ל-y, לראשונה יהיה (x-10) ולשנייה יהיה (y+10). המשוואה השנייה: x-10 = y+10.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': משוואת הסך הכל.&rlm;", math_expression: "x + y = 100  =>  y = 100 - x" },
            { verbal_explanation: "שלב ב': משוואת ההעברה (שוויון חדש).&rlm;", math_expression: "x - 10 = y + 10" },
            { verbal_explanation: "שלב ג': נציב את ה-y מהמשוואה הראשונה.&rlm;", math_expression: "x - 10 = (100 - x) + 10" },
            { verbal_explanation: "שלב ד': נסדר איברים. נעביר מינוס x שמאלה (לפלוס) ואת מינוס 10 ימינה.&rlm;", math_expression: "2x = 110 + 10 = 120" },
            { verbal_explanation: "שלב ה': נמצא את כמות המים ההתחלתית בראשונה.&rlm;", math_expression: "x = 60" }
        ],
        final_answer: "60 ליטר"
    }

];