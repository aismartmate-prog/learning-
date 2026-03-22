const questionsDB = [
    // ==========================================
    // תת נושא 1: תחומי עליה וירידה (10 שאלות)
    // ==========================================

    // שאלה מספר 1
    {
        topic: "function_investigation_372",
        subTopic: "תחומי עליה וירידה",
        question_text: "נתונה הפונקציה הריבועית \\( y = x^{2} - 8x + 15 \\). מצאו את תחום הירידה של הפונקציה.&rlm;",
        options: ["x < 4", "x > 4", "x < -4", "x > -4"],
        correctAnswer: 0,
        hint: "מצאו את קודקוד הפרבולה (על ידי גזירה והשוואה לאפס או על ידי נוסחת קודקוד). הפרבולה פתוחה כלפי מעלה (מחייכת), ולכן היא יורדת לפני הקודקוד.",
        solution_steps: [
            { verbal_explanation: "שלב 1: גזירת הפונקציה הנתונה.", math_expression: "y' = 2x - 8" },
            { verbal_explanation: "שלב 2: השוואת הנגזרת לאפס למציאת נקודת הקיצון (קודקוד).", math_expression: "2x - 8 = 0" },
            { verbal_explanation: "שלב 3: חילוץ האיקס של נקודת הקיצון.", math_expression: "2x = 8 \\Rightarrow x = 4" },
            { verbal_explanation: "שלב 4: זיהוי סוג הפרבולה על פי המקדם של איקס בריבוע (חיובי ולכן 'מחייכת' ויש לה מינימום).", math_expression: "a = 1 > 0" },
            { verbal_explanation: "שלב 5: פונקציה בעלת מינימום יורדת עבור ערכי איקס הקטנים מנקודת הקיצון.", math_expression: "x < 4" },
            { verbal_explanation: "שלב 6: בחירת התשובה הנכונה לתחום הירידה.", math_expression: "x < 4" }
        ],
        final_answer: "x < 4"
    },

    // שאלה מספר 2
    {
        topic: "function_investigation_372",
        subTopic: "תחומי עליה וירידה",
        question_text: "נתונה הפונקציה \\( y = -x^{2} + 6x \\). מהו תחום העלייה של הפונקציה?&rlm;",
        options: ["x < 3", "x > 3", "x < -3", "x > -3"],
        correctAnswer: 0,
        hint: "הפרבולה פתוחה כלפי מטה (מקדם שלילי), כלומר יש לה נקודת מקסימום. היא עולה עבור איקסים שקטנים מאיקס של הקודקוד.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת הנגזרת של הפונקציה.", math_expression: "y' = -2x + 6" },
            { verbal_explanation: "שלב 2: מציאת נקודת איפוס הנגזרת.", math_expression: "-2x + 6 = 0" },
            { verbal_explanation: "שלב 3: בידוד הנעלם.", math_expression: "6 = 2x \\Rightarrow x = 3" },
            { verbal_explanation: "שלב 4: בדיקת המקדם של איקס בריבוע, שלילי אומר שיש נקודת מקסימום.", math_expression: "a = -1 < 0" },
            { verbal_explanation: "שלב 5: הפונקציה מטפסת (עולה) עד שהיא מגיעה למקסימום.", math_expression: "x < 3" },
            { verbal_explanation: "שלב 6: הרישום לבדיקה.", math_expression: "x < 3" }
        ],
        final_answer: "x < 3"
    },

    // שאלה מספר 3
    {
        topic: "function_investigation_372",
        subTopic: "תחומי עליה וירידה",
        question_text: "לפניכם גרף הפונקציה \\( y = (x - 2)^{2} - 1 \\). על פי הגרף, מצאו את תחום העלייה של הפונקציה.&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='100' x2='180' y2='100' stroke='#64748b' stroke-width='2'/><line x1='50' y1='20' x2='50' y2='180' stroke='#64748b' stroke-width='2'/><path d='M 70 20 Q 110 180 150 20' fill='none' stroke='#3b82f6' stroke-width='3'/><circle cx='110' cy='130' r='4' fill='#ef4444'/><line x1='110' y1='100' x2='110' y2='130' stroke='#ef4444' stroke-dasharray='4,4' stroke-width='2'/><text x='115' y='95' font-size='12' fill='#334155'>2</text></svg></div>",
        options: ["x > 2", "x < 2", "x > -1", "x < -1"],
        correctAnswer: 0,
        hint: "הביטו בקודקוד הפרבולה המסומן באדום. מאיזה ערך של איקס הגרף מתחיל לעלות כלפי מעלה?",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי שיעור האיקס של קודקוד הפרבולה מתוך הגרף והמשוואה.", math_expression: "x = 2" },
            { verbal_explanation: "שלב 2: התבוננות בגרף לזיהוי החלק שבו הפונקציה עולה (ערכי הוואי גדלים).", math_expression: "x > 2" },
            { verbal_explanation: "שלב 3: המסקנה הישירה מהתבוננות ומהקודקוד.", math_expression: "x > 2" }
        ],
        final_answer: "x > 2"
    },

    // שאלה מספר 4
    {
        topic: "function_investigation_372",
        subTopic: "תחומי עליה וירידה",
        question_text: "נתונה פונקציית פולינום ממעלה שלישית: \\( y = x^{3} - 3x^{2} \\). מהו תחום הירידה של הפונקציה?&rlm;",
        options: ["0 < x < 2", "x < 0 או x > 2", "x < 0", "x > 2"],
        correctAnswer: 0,
        hint: "גזרו את הפונקציה, השוו לאפס למציאת נקודות הקיצון, ובדקו מתי הנגזרת שלילית.",
        solution_steps: [
            { verbal_explanation: "שלב 1: גזירת הפונקציה הנתונה.", math_expression: "y' = 3x^{2} - 6x" },
            { verbal_explanation: "שלב 2: השוואת הנגזרת לאפס למציאת נקודות קיצון.", math_expression: "3x^{2} - 6x = 0" },
            { verbal_explanation: "שלב 3: הוצאת גורם משותף לפתרון המשוואה.", math_expression: "3x(x - 2) = 0" },
            { verbal_explanation: "שלב 4: מציאת פתרונות המשוואה (האיקסים של נקודות הקיצון).", math_expression: "x_{1} = 0 \\quad , \\quad x_{2} = 2" },
            { verbal_explanation: "שלב 5: הנגזרת היא פרבולה 'מחייכת' החותכת באפס ושתיים. היא שלילית (תחום ירידה) בין השורשים.", math_expression: "0 < x < 2" },
            { verbal_explanation: "שלב 6: הרישום לבחירה.", math_expression: "0 < x < 2" }
        ],
        final_answer: "0 < x < 2"
    },

    // שאלה מספר 5
    {
        topic: "function_investigation_372",
        subTopic: "תחומי עליה וירידה",
        question_text: "נתונה הפונקציה \\( y = -2x^{3} + 6x \\). מצאו את תחום העלייה של הפונקציה.&rlm;",
        options: ["-1 < x < 1", "x < -1 או x > 1", "x > 1", "x < -1"],
        correctAnswer: 0,
        hint: "גזרו את הפונקציה, מצאו נקודות קיצון. הנגזרת הפעם היא פרבולה הפוכה (בוכה). מתי היא חיובית?",
        solution_steps: [
            { verbal_explanation: "שלב 1: גזירת הפונקציה למציאת הנגזרת הראשונה.", math_expression: "y' = -6x^{2} + 6" },
            { verbal_explanation: "שלב 2: השוואה לאפס.", math_expression: "-6x^{2} + 6 = 0" },
            { verbal_explanation: "שלב 3: העברת אגפים וחלוקה.", math_expression: "6x^{2} = 6 \\Rightarrow x^{2} = 1" },
            { verbal_explanation: "שלב 4: מציאת השורשים.", math_expression: "x_{1} = 1 \\quad , \\quad x_{2} = -1" },
            { verbal_explanation: "שלב 5: הנגזרת היא פרבולה 'בוכה'. היא חיובית (תחום עלייה של הפונקציה) בין השורשים שלה.", math_expression: "-1 < x < 1" },
            { verbal_explanation: "שלב 6: בחירת התשובה הנכונה.", math_expression: "-1 < x < 1" }
        ],
        final_answer: "-1 < x < 1"
    },

    // שאלה מספר 6
    {
        topic: "function_investigation_372",
        subTopic: "תחומי עליה וירידה",
        question_text: "מצאו את תחום העלייה של הפונקציה \\( y = 2x^{2} + 12x \\).&rlm;",
        options: ["x > -3", "x < -3", "x > 3", "x < 3"],
        correctAnswer: 0,
        hint: "זוהי פרבולה 'מחייכת'. מצאו את נקודת המינימום, התחום שעולה הוא התחום שמימין אליה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: גזירת הפונקציה.", math_expression: "y' = 4x + 12" },
            { verbal_explanation: "שלב 2: השוואת הנגזרת לאפס למציאת קודקוד.", math_expression: "4x + 12 = 0" },
            { verbal_explanation: "שלב 3: בידוד הנעלם.", math_expression: "4x = -12 \\Rightarrow x = -3" },
            { verbal_explanation: "שלב 4: המקדם חיובי ולכן זהו מינימום. הפונקציה עולה עבור ערכים הגדולים ממנו.", math_expression: "x > -3" },
            { verbal_explanation: "שלב 5: התשובה הישירה בחלופות.", math_expression: "x > -3" }
        ],
        final_answer: "x > -3"
    },

    // שאלה מספר 7
    {
        topic: "function_investigation_372",
        subTopic: "תחומי עליה וירידה",
        question_text: "מהו תחום הירידה של הפונקציה \\( y = -3x^{2} - 18x + 5 \\)?&rlm;",
        options: ["x > -3", "x < -3", "x > 3", "x < 3"],
        correctAnswer: 0,
        hint: "זוהי פרבולה הפוכה. מצאו את נקודת המקסימום, התחום היורד הוא מימין לנקודה זו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת הנגזרת הראשונה.", math_expression: "y' = -6x - 18" },
            { verbal_explanation: "שלב 2: איפוס הנגזרת.", math_expression: "-6x - 18 = 0" },
            { verbal_explanation: "שלב 3: חילוץ הנעלם (מינוס שמונה עשרה חלקי שש).", math_expression: "6x = -18 \\Rightarrow x = -3" },
            { verbal_explanation: "שלב 4: המקדם שלילי (פרבולה בוכה), לכן הפונקציה יורדת מימין לקודקוד.", math_expression: "x > -3" },
            { verbal_explanation: "שלב 5: בחירת הפתרון.", math_expression: "x > -3" }
        ],
        final_answer: "x > -3"
    },

    // שאלה מספר 8
    {
        topic: "function_investigation_372",
        subTopic: "תחומי עליה וירידה",
        question_text: "נתון גרף של פונקציה ממעלה שלישית. לפונקציה יש נקודת מקסימום ב- \\( x = -2 \\) ונקודת מינימום ב- \\( x = 4 \\). מהו תחום העלייה של הפונקציה?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='100' x2='180' y2='100' stroke='#64748b' stroke-width='2'/><path d='M 20 180 Q 60 -40 100 100 T 180 20' fill='none' stroke='#3b82f6' stroke-width='3'/><circle cx='65' cy='32' r='4' fill='#ef4444'/><circle cx='135' cy='168' r='4' fill='#ef4444'/></svg></div>",
        options: ["x < -2 או x > 4", "-2 < x < 4", "x > -2 או x < 4", "x > -2"],
        correctAnswer: 0,
        hint: "הפונקציה עולה לפני נקודת המקסימום, יורדת ביניהן, ושוב עולה לאחר נקודת המינימום.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי ההתנהגות לפני נקודת המקסימום במינוס שתיים. הפונקציה מטפסת מעלה.", math_expression: "x < -2" },
            { verbal_explanation: "שלב 2: זיהוי ההתנהגות בין המקסימום למינימום. הפונקציה צונחת מטה (תחום ירידה).", math_expression: "-2 < x < 4" },
            { verbal_explanation: "שלב 3: זיהוי ההתנהגות לאחר המינימום בארבע. הפונקציה מטפסת שוב.", math_expression: "x > 4" },
            { verbal_explanation: "שלב 4: איחוד שני תחומי העלייה שנמצאו לתשובה אחת.", math_expression: "x < -2 \\quad , \\quad x > 4" },
            { verbal_explanation: "שלב 5: התאמה לאפשרות הטקסטואלית.", math_expression: "x < -2 \\quad , \\quad x > 4" }
        ],
        final_answer: "x < -2 או x > 4"
    },

    // שאלה מספר 9
    {
        topic: "function_investigation_372",
        subTopic: "תחומי עליה וירידה",
        question_text: "מצאו את תחום הירידה של הפונקציה \\( y = x^{3} - 12x \\).&rlm;",
        options: ["-2 < x < 2", "x < -2 או x > 2", "x > 2", "x < -2"],
        correctAnswer: 0,
        hint: "גזרו והשוו לאפס למציאת הקיצון. הפונקציה יורדת בין שתי נקודות הקיצון שלה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: גזירת הפונקציה הנתונה.", math_expression: "y' = 3x^{2} - 12" },
            { verbal_explanation: "שלב 2: השוואה לאפס.", math_expression: "3x^{2} - 12 = 0" },
            { verbal_explanation: "שלב 3: העברת המספר וחלוקה בשלוש.", math_expression: "3x^{2} = 12 \\Rightarrow x^{2} = 4" },
            { verbal_explanation: "שלב 4: הוצאת שורש למציאת נקודות הקיצון.", math_expression: "x_{1} = 2 \\quad , \\quad x_{2} = -2" },
            { verbal_explanation: "שלב 5: הנגזרת היא פרבולה מחייכת, ולכן היא שלילית בין שורשיה. זהו תחום הירידה.", math_expression: "-2 < x < 2" },
            { verbal_explanation: "שלב 6: בחירת התשובה הדרושה.", math_expression: "-2 < x < 2" }
        ],
        final_answer: "-2 < x < 2"
    },

    // שאלה מספר 10
    {
        topic: "function_investigation_372",
        subTopic: "תחומי עליה וירידה",
        question_text: "מהו תחום העלייה של הפונקציה \\( y = -x^{3} + 27x \\)?&rlm;",
        options: ["-3 < x < 3", "x < -3 או x > 3", "x > 3", "x < -3"],
        correctAnswer: 0,
        hint: "גזרו והשוו לאפס. הנגזרת היא פרבולה בוכה ולכן הפונקציה עולה (נגזרת חיובית) בין שורשיה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת נגזרת הפונקציה.", math_expression: "y' = -3x^{2} + 27" },
            { verbal_explanation: "שלב 2: איפוס הנגזרת.", math_expression: "-3x^{2} + 27 = 0" },
            { verbal_explanation: "שלב 3: העברת אגפים וחלוקה בשלוש.", math_expression: "3x^{2} = 27 \\Rightarrow x^{2} = 9" },
            { verbal_explanation: "שלב 4: חילוץ שני הפתרונות של השורש הריבועי.", math_expression: "x_{1} = 3 \\quad , \\quad x_{2} = -3" },
            { verbal_explanation: "שלב 5: מכיוון שזו פרבולה בוכה, הנגזרת חיובית בין השורשים, וזהו התחום בו הפונקציה עולה.", math_expression: "-3 < x < 3" },
            { verbal_explanation: "שלב 6: הרישום לבדיקה במערכת.", math_expression: "-3 < x < 3" }
        ],
        final_answer: "-3 < x < 3"
    },

    // ==========================================
    // תת נושא 2: מקסימום ומינימום (10 שאלות)
    // ==========================================

    // שאלה מספר 11
    {
        topic: "function_investigation_372",
        subTopic: "מקסימום ומינימום",
        question_text: "מצאו את נקודת המינימום של הפונקציה הריבועית \\( y = x^{2} - 10x + 24 \\).&rlm;",
        options: ["(5, -1)", "(-5, 99)", "(5, 1)", "(10, 24)"],
        correctAnswer: 0,
        hint: "גזרו והשוו לאפס למציאת ה-x. לאחר מכן, הציבו בפונקציה המקורית למציאת ה-y.",
        solution_steps: [
            { verbal_explanation: "שלב 1: גזירת הפונקציה כדי למצוא את הקיצון.", math_expression: "y' = 2x - 10" },
            { verbal_explanation: "שלב 2: השוואת הנגזרת לאפס ופיתרון.", math_expression: "2x - 10 = 0 \\Rightarrow x = 5" },
            { verbal_explanation: "שלב 3: הצבת ערך האיקס שמצאנו בפונקציה המקורית כדי לחשב את הוואי.", math_expression: "y = 5^{2} - 10 \\times 5 + 24" },
            { verbal_explanation: "שלב 4: ביצוע החזקה והכפל.", math_expression: "y = 25 - 50 + 24" },
            { verbal_explanation: "שלב 5: פעולת חיבור וחיסור סופית.", math_expression: "y = -1" },
            { verbal_explanation: "שלב 6: חיבור האיקס והוואי לנקודה (סוג הפרבולה מבטיח מינימום).", math_expression: "(5, -1)" }
        ],
        final_answer: "(5, -1)"
    },

    // שאלה מספר 12
    {
        topic: "function_investigation_372",
        subTopic: "מקסימום ומינימום",
        question_text: "מצאו את נקודת המקסימום של הפונקציה \\( y = -x^{2} + 4x + 5 \\).&rlm;",
        options: ["(2, 9)", "(-2, -7)", "(2, 5)", "(4, 5)"],
        correctAnswer: 0,
        hint: "גם כאן, גזרו, מצאו x של קודקוד, והציבו חזרה. הסימן השלילי של המקדם מבטיח שזה מקסימום.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת הנגזרת.", math_expression: "y' = -2x + 4" },
            { verbal_explanation: "שלב 2: השוואה לאפס ובידוד הנעלם.", math_expression: "-2x + 4 = 0 \\Rightarrow 2x = 4 \\Rightarrow x = 2" },
            { verbal_explanation: "שלב 3: הצבת הערך בפונקציה. שימו לב: המינוס נשאר מחוץ לפעולת הריבוע.", math_expression: "y = -(2)^{2} + 4 \\times 2 + 5" },
            { verbal_explanation: "שלב 4: חישוב הערכים.", math_expression: "y = -4 + 8 + 5" },
            { verbal_explanation: "שלב 5: התוצאה לשיעור הוואי.", math_expression: "y = 9" },
            { verbal_explanation: "שלב 6: בניית הנקודה המלאה לבחירה.", math_expression: "(2, 9)" }
        ],
        final_answer: "(2, 9)"
    },

    // שאלה מספר 13
    {
        topic: "function_investigation_372",
        subTopic: "מקסימום ומינימום",
        question_text: "נתונה הפונקציה \\( y = x^{3} - 3x^{2} \\). מצאו את נקודת המקסימום המקומית שלה.&rlm;",
        options: ["(0, 0)", "(2, -4)", "(1, -2)", "(3, 0)"],
        correctAnswer: 0,
        hint: "לפונקציה יש שתי נקודות קיצון (ב-0 וב-2). הציבו כדי לראות למי יש ערך y גדול יותר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: גזירת הפונקציה.", math_expression: "y' = 3x^{2} - 6x" },
            { verbal_explanation: "שלב 2: איפוס הנגזרת למציאת הקיצון על ידי הוצאת גורם משותף.", math_expression: "3x(x - 2) = 0" },
            { verbal_explanation: "שלב 3: שורשי המשוואה של הנגזרת.", math_expression: "x_{1} = 0 \\quad , \\quad x_{2} = 2" },
            { verbal_explanation: "שלב 4: הצבת האיקס הראשון בפונקציה המקורית.", math_expression: "y_{1} = 0^{3} - 3 \\times 0^{2} = 0" },
            { verbal_explanation: "שלב 5: הצבת האיקס השני בפונקציה.", math_expression: "y_{2} = 2^{3} - 3 \\times 2^{2} = 8 - 12 = -4" },
            { verbal_explanation: "שלב 6: המקסימום (הגבוה מבין השניים) הוא בנקודה אפס פסיק אפס.", math_expression: "(0, 0)" }
        ],
        final_answer: "(0, 0)"
    },

    // שאלה מספר 14
    {
        topic: "function_investigation_372",
        subTopic: "מקסימום ומינימום",
        question_text: "בהמשך לשאלה הקודמת, מצאו את נקודת המינימום המקומית של הפונקציה \\( y = x^{3} - 3x^{2} \\).&rlm;",
        options: ["(2, -4)", "(0, 0)", "(-1, -4)", "(3, 0)"],
        correctAnswer: 0,
        hint: "כבר מצאנו את הקיצון השני בשאלה הקודמת (ב-x=2).",
        solution_steps: [
            { verbal_explanation: "שלב 1: חזרה על שורשי הנגזרת מהשאלה הקודמת.", math_expression: "x_{1} = 0 \\quad , \\quad x_{2} = 2" },
            { verbal_explanation: "שלב 2: זיהינו שהנקודה השנייה בעלת ערך נמוך יותר.", math_expression: "y_{2} = 2^{3} - 3 \\times 2^{2}" },
            { verbal_explanation: "שלב 3: הפתרון המהווה את המינימום המקומי.", math_expression: "y = -4" },
            { verbal_explanation: "שלב 4: בחירת הנקודה במלואה.", math_expression: "(2, -4)" }
        ],
        final_answer: "(2, -4)"
    },

    // שאלה מספר 15
    {
        topic: "function_investigation_372",
        subTopic: "מקסימום ומינימום",
        question_text: "מצאו את נקודת המקסימום של הפונקציה \\( y = -x^{3} + 12x \\) עבור התחום \\( x > 0 \\).&rlm;",
        options: ["(2, 16)", "(-2, -16)", "(0, 0)", "(4, -16)"],
        correctAnswer: 0,
        hint: "גזרו והשוו לאפס. תקבלו שני פתרונות, בחרו את זה החיובי כנדרש, והציבו בפונקציה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: גזירת הפונקציה.", math_expression: "y' = -3x^{2} + 12" },
            { verbal_explanation: "שלב 2: איפוס הנגזרת ובידוד.", math_expression: "3x^{2} = 12 \\Rightarrow x^{2} = 4" },
            { verbal_explanation: "שלב 3: מציאת שורשי הנגזרת.", math_expression: "x = 2 \\quad , \\quad x = -2" },
            { verbal_explanation: "שלב 4: בחירת השורש החיובי בהתאם לאילוץ בשאלה.", math_expression: "x = 2" },
            { verbal_explanation: "שלב 5: הצבת הערך חזרה בפונקציה המקורית לקבלת ערך השיא.", math_expression: "y = -(2)^{3} + 12 \\times 2 = -8 + 24 = 16" },
            { verbal_explanation: "שלב 6: הרישום לבדיקה.", math_expression: "(2, 16)" }
        ],
        final_answer: "(2, 16)"
    },

    // שאלה מספר 16
    {
        topic: "function_investigation_372",
        subTopic: "מקסימום ומינימום",
        question_text: "מצאו את נקודת המינימום של הפונקציה \\( y = \\dfrac{x^{2}}{2} - 4x \\).&rlm;",
        options: ["(4, -8)", "(-4, 24)", "(2, -6)", "(8, 0)"],
        correctAnswer: 0,
        hint: "הנגזרת של איקס בריבוע חלקי שתיים היא פשוט איקס. השוו לאפס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: גזירת הפונקציה המכילה שבר פשוט.", math_expression: "y' = x - 4" },
            { verbal_explanation: "שלב 2: השוואת הנגזרת הליניארית לאפס.", math_expression: "x - 4 = 0 \\Rightarrow x = 4" },
            { verbal_explanation: "שלב 3: הצבת הערך שמצאנו בפונקציה המקורית.", math_expression: "y = \\dfrac{4^{2}}{2} - 4 \\times 4" },
            { verbal_explanation: "שלב 4: חישוב הערכים.", math_expression: "y = \\dfrac{16}{2} - 16" },
            { verbal_explanation: "שלב 5: ביצוע החיסור הסופי למציאת עומק המינימום.", math_expression: "y = 8 - 16 = -8" },
            { verbal_explanation: "שלב 6: בחירת הנקודה המתאימה.", math_expression: "(4, -8)" }
        ],
        final_answer: "(4, -8)"
    },

    // שאלה מספר 17
    {
        topic: "function_investigation_372",
        subTopic: "מקסימום ומינימום",
        question_text: "נתון גרף של פרבולה הפתוחה כלפי מטה (בוכה). קודקוד הפרבולה נמצא בנקודה (3, 6). איזו נקודת קיצון יש לפונקציה זו ומה שיעוריה?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='150' x2='180' y2='150' stroke='#64748b' stroke-width='2'/><path d='M 40 180 Q 100 -20 160 180' fill='none' stroke='#3b82f6' stroke-width='3'/><circle cx='100' cy='30' r='4' fill='#ef4444'/><text x='110' y='35' font-size='12' fill='#334155'>(3, 6)</text></svg></div>",
        options: ["מקסימום ב-(3, 6)", "מינימום ב-(3, 6)", "מקסימום ב-(6, 3)", "אין נקודת קיצון"],
        correctAnswer: 0,
        hint: "פרבולה שפתוחה כלפי מטה מגיעה לשיא שלה בקודקוד, ולכן זוהי נקודת מקסימום.",
        solution_steps: [
            { verbal_explanation: "שלב 1: התבוננות בגרף הנתון המציג פונקציה יורדת משני צדי הקודקוד.", math_expression: "a < 0" },
            { verbal_explanation: "שלב 2: קביעת סוג הקיצון הנובע מגרף כזה.", math_expression: "Max" },
            { verbal_explanation: "שלב 3: ציון הקואורדינטות הנתונות בטקסט ובשרטוט.", math_expression: "(3, 6)" },
            { verbal_explanation: "שלב 4: המסקנה העולה מצירוף הנתונים.", math_expression: "1" }
        ],
        final_answer: "מקסימום ב-(3, 6)"
    },

    // שאלה מספר 18
    {
        topic: "function_investigation_372",
        subTopic: "מקסימום ומינימום",
        question_text: "מצאו את נקודת המינימום של הפונקציה \\( y = x^{3} - 12x + 8 \\) בתחום הרלוונטי (x > 0).&rlm;",
        options: ["(2, -8)", "(-2, 24)", "(0, 8)", "(2, 0)"],
        correctAnswer: 0,
        hint: "גזרו והשוו לאפס. בחרו את השורש החיובי (2), והציבו בפונקציה המקורית.",
        solution_steps: [
            { verbal_explanation: "שלב 1: גזירה והשוואה לאפס.", math_expression: "y' = 3x^{2} - 12 = 0" },
            { verbal_explanation: "שלב 2: חילוץ הנעלם הריבועי.", math_expression: "3x^{2} = 12 \\Rightarrow x^{2} = 4" },
            { verbal_explanation: "שלב 3: השורשים האפשריים.", math_expression: "x_{1} = 2 \\quad , \\quad x_{2} = -2" },
            { verbal_explanation: "שלב 4: בחירת השורש החיובי בהתאם לשאלה.", math_expression: "x = 2" },
            { verbal_explanation: "שלב 5: הצבה בפונקציה למציאת המינימום.", math_expression: "y = 2^{3} - 12 \\times 2 + 8" },
            { verbal_explanation: "שלב 6: חישוב התוצאה.", math_expression: "y = 8 - 24 + 8 = -8" },
            { verbal_explanation: "שלב 7: בחירת התשובה המשולבת.", math_expression: "(2, -8)" }
        ],
        final_answer: "(2, -8)"
    },

    // שאלה מספר 19
    {
        topic: "function_investigation_372",
        subTopic: "מקסימום ומינימום",
        question_text: "מצאו את נקודת המקסימום של הפונקציה \\( y = -2x^{2} - 12x - 10 \\).&rlm;",
        options: ["(-3, 8)", "(3, -64)", "(-3, -10)", "(0, -10)"],
        correctAnswer: 0,
        hint: "זהו פרבולה בוכה (מקדם a שלילי). ה-x של המקסימום הוא ה-x של הקודקוד.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבה בנוסחת הקודקוד.", math_expression: "x = \\dfrac{-(-12)}{2 \\times (-2)}" },
            { verbal_explanation: "שלב 2: חלוקה למציאת האיקס המרכזי.", math_expression: "x = \\dfrac{12}{-4} = -3" },
            { verbal_explanation: "שלב 3: הצבת המינוס שלוש בחזרה בפונקציה. שימו לב להעלאת שלילי בריבוע.", math_expression: "y = -2 \\times (-3)^{2} - 12 \\times (-3) - 10" },
            { verbal_explanation: "שלב 4: חישוב.", math_expression: "y = -2 \\times 9 + 36 - 10" },
            { verbal_explanation: "שלב 5: סכימת האיברים לקבלת פסגת הפרבולה.", math_expression: "y = -18 + 36 - 10 = 8" },
            { verbal_explanation: "שלב 6: אישור הנקודה למערכת.", math_expression: "(-3, 8)" }
        ],
        final_answer: "(-3, 8)"
    },

    // שאלה מספר 20
    {
        topic: "function_investigation_372",
        subTopic: "מקסימום ומינימום",
        question_text: "נתונה הפונקציה \\( y = \\dfrac{x^{3}}{3} - x^{2} - 3x \\). מצאו את נקודת המינימום המקומית שלה בתחום הרלוונטי (רמז: הנגזרת היא משוואה ריבועית רגילה).&rlm;",
        options: ["(3, -9)", "(-1, 1.66)", "(0, 0)", "(3, 0)"],
        correctAnswer: 0,
        hint: "הנגזרת של איקס בשלישית חלקי שלוש היא פשוט איקס בריבוע. גזרו, פתרו טרינום, ובחרו את ה-x שנותן את הערך הנמוך ביותר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: ביצוע הגזירה תוך צמצום המכנה המובנה.", math_expression: "y' = x^{2} - 2x - 3" },
            { verbal_explanation: "שלב 2: השוואה לאפס ופירוק לטרינום.", math_expression: "(x - 3)(x + 1) = 0" },
            { verbal_explanation: "שלב 3: מציאת שורשי הנגזרת.", math_expression: "x_{1} = 3 \\quad , \\quad x_{2} = -1" },
            { verbal_explanation: "שלב 4: הצבת השורש החיובי בפונקציה.", math_expression: "y_{1} = \\dfrac{3^{3}}{3} - 3^{2} - 3 \\times 3" },
            { verbal_explanation: "שלב 5: פתרון הערך המספרי של הנקודה הראשונה.", math_expression: "y_{1} = \\dfrac{27}{3} - 9 - 9 = 9 - 18 = -9" },
            { verbal_explanation: "שלב 6: הצבת השורש השני מניבה תוצאה חיובית גבוהה יותר ולכן אינה מינימום. לכן זו התשובה.", math_expression: "(3, -9)" }
        ],
        final_answer: "(3, -9)"
    }
];