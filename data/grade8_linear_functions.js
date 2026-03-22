// ========================================================================
// שכבת גיל: כיתה ח' | נושא: פונקציה קווית
// 5 תתי נושאים | 60 שאלות סה"כ
// פתרונות מפורטים מאוד: שלב אחר שלב, "האכלה בכפית".
// כתיבה נוקשה: חילוק ושברים מוצגים אך ורק בעזרת (:) ! ללא לוכסנים.
// שימוש ב- × לכפל. ללא LaTeX. שילוב איורי SVG גרפיים להמחשה.
// ========================================================================

const questionsDB = [

    // ==========================================================
    // תת נושא 1: שיפוע לפי 2 נקודות (12 שאלות)
    // ==========================================================
    
    // שאלה 1
    {
        topic: "linear_functions",
        subTopic: "שיפוע לפי 2 נקודות",
        question_text: "מהי הנוסחה לחישוב שיפוע (m) של ישר העובר דרך שתי נקודות נתונות: (x1, y1) ו- (x2, y2)?&rlm;",
        options: ["m = (y2 - y1) : (x2 - x1)", "m = (x2 - x1) : (y2 - y1)", "m = (y2 + y1) : (x2 + x1)", "m = (y2 × y1) : (x2 × x1)"],
        correctAnswer: 0,
        hint: "השיפוע מוגדר כיחס שבין ה'עלייה' (ההפרש בגובה, כלומר בציר ה-y) לבין ה'התקדמות' (ההפרש באופק, כלומר בציר ה-x).&rlm;",
        solution_steps: [
            { verbal_explanation: "שיפוע של ישר מודד את קצב השינוי שלו: בכמה הוא עולה או יורד (y) על כל צעד ימינה (x).&rlm;", math_expression: "" },
            { verbal_explanation: "לכן, אנו מחשבים את ההפרש בין שיעורי ה-y של שתי הנקודות, ומחלקים אותו בהפרש בין שיעורי ה-x של אותן נקודות בהתאמה.&rlm;", math_expression: "m = (y2 - y1) : (x2 - x1)" }
        ],
        final_answer: "m = (y2 - y1) : (x2 - x1)"
    },
    // שאלה 2
    {
        topic: "linear_functions",
        subTopic: "שיפוע לפי 2 נקודות",
        question_text: "חשבו את השיפוע של הישר העובר דרך הנקודות (1, 3) ו- (4, 9).&rlm;",
        options: ["2", "3", "0.5", "6"],
        correctAnswer: 0,
        hint: "הציבו בנוסחה: y של הנקודה השנייה פחות y של הראשונה, לחלק ל-x של השנייה פחות x של הראשונה. (9 פחות 3) לחלק ל- (4 פחות 1).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נזהה את שיעורי הנקודות. x1=1, y1=3. x2=4, y2=9.&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ב': נחשב את ההפרש ב-y (המונה).&rlm;", math_expression: "9 - 3 = 6" },
            { verbal_explanation: "שלב ג': נחשב את ההפרש ב-x (המכנה).&rlm;", math_expression: "4 - 1 = 3" },
            { verbal_explanation: "שלב ד': נחלק את הפרש ה-y בהפרש ה-x למציאת השיפוע m.&rlm;", math_expression: "m = 6 : 3 = 2" }
        ],
        final_answer: "2"
    },
    // שאלה 3
    {
        topic: "linear_functions",
        subTopic: "שיפוע לפי 2 נקודות",
        question_text: "מצאו את השיפוע של הישר העובר דרך הנקודות (2, 5) ו- (5, 20).&rlm;",
        options: ["5", "3", "15", "10"],
        correctAnswer: 0,
        hint: "ההפרש ב-y הוא 20 פחות 5. ההפרש ב-x הוא 5 פחות 2. חלקו את התוצאות.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרשום את הנוסחה ונציב את הערכים.&rlm;", math_expression: "m = (20 - 5) : (5 - 2)" },
            { verbal_explanation: "שלב ב': נחשב את המונה ואת המכנה.&rlm;", math_expression: "m = 15 : 3" },
            { verbal_explanation: "שלב ג': נבצע את פעולת החילוק.&rlm;", math_expression: "m = 5" }
        ],
        final_answer: "5"
    },
    // שאלה 4
    {
        topic: "linear_functions",
        subTopic: "שיפוע לפי 2 נקודות",
        question_text: "שימו לב לסימנים שלילים! חשבו את השיפוע של הישר העובר דרך (0, 4) ו- (2, 0).&rlm;",
        options: ["-2", "2", "-4", "0.5"],
        correctAnswer: 0,
        hint: "הישר יורד. ה-y ירד מ-4 ל-0 (ההפרש הוא 0 פחות 4, כלומר 4-). ה-x עלה מ-0 ל-2.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב בנוסחה. נתחיל מהנקודה השנייה פחות הראשונה.&rlm;", math_expression: "m = (0 - 4) : (2 - 0)" },
            { verbal_explanation: "שלב ב': נחשב בזהירות את המונה (מינוס ארבע) והמכנה (שתיים).&rlm;", math_expression: "m = -4 : 2" },
            { verbal_explanation: "שלב ג': מספר שלילי חלקי חיובי נותן תוצאה שלילית.&rlm;", math_expression: "m = -2" }
        ],
        final_answer: "-2"
    },
    // שאלה 5
    {
        topic: "linear_functions",
        subTopic: "שיפוע לפי 2 נקודות",
        question_text: "מצאו את השיפוע של הישר העובר דרך הנקודות (-1, 3) ו- (3, -5).&rlm;",
        options: ["-2", "2", "-8", "-0.5"],
        correctAnswer: 0,
        hint: "היזהרו במכנה: 3 פחות (מינוס 1) שווה ל- 3 פלוס 1!&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב את הנתונים בנוסחה, תוך הקפדה על סוגריים למספרים שליליים.&rlm;", math_expression: "m = (-5 - 3) : (3 - (-1))" },
            { verbal_explanation: "שלב ב': נחשב את המונה (מינוס 5 פחות 3 זה מינוס 8).&rlm;", math_expression: "Numerator = -8" },
            { verbal_explanation: "שלב ג': נחשב את המכנה (מינוס מינוס הופך לפלוס, לכן 3 ועוד 1 זה 4).&rlm;", math_expression: "Denominator = 3 + 1 = 4" },
            { verbal_explanation: "שלב ד': נחלק את המונה במכנה.&rlm;", math_expression: "m = -8 : 4 = -2" }
        ],
        final_answer: "-2"
    },
    // שאלה 6
    {
        topic: "linear_functions",
        subTopic: "שיפוע לפי 2 נקודות",
        question_text: "מה קורה כשה-y לא משתנה? חשבו את שיפוע הישר העובר דרך (2, 7) ו- (10, 7).&rlm;",
        options: ["0", "8", "7", "אין שיפוע (לא מוגדר)"],
        correctAnswer: 0,
        hint: "ההפרש ב-y הוא 7 פחות 7, שזה 0. אפס לחלק לכל מספר שווה לאפס. זהו ישר אופקי!&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב בנוסחת השיפוע.&rlm;", math_expression: "m = (7 - 7) : (10 - 2)" },
            { verbal_explanation: "שלב ב': המונה שווה לאפס, המכנה שווה ל-8.&rlm;", math_expression: "m = 0 : 8" },
            { verbal_explanation: "שלב ג': אפס לחלק לכל מספר (שאינו אפס) שווה לאפס.&rlm;", math_expression: "m = 0" },
            { verbal_explanation: "מסקנה: ישר שבו כל נקודות ה-y זהות הוא ישר המקביל לציר ה-x, והשיפוע שלו הוא 0.&rlm;", math_expression: "" }
        ],
        final_answer: "0"
    },
    // שאלה 7
    {
        topic: "linear_functions",
        subTopic: "שיפוע לפי 2 נקודות",
        question_text: "ומה קורה כשה-x לא משתנה? נסו לחשב שיפוע לישר העובר דרך (4, 2) ו- (4, 10).&rlm;",
        options: ["אין שיפוע (לא מוגדר)", "0", "8", "2"],
        correctAnswer: 0,
        hint: "ההפרש במכנה הוא 4 פחות 4. האם מותר לחלק באפס? לא!&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב בנוסחת השיפוע.&rlm;", math_expression: "m = (10 - 2) : (4 - 4)" },
            { verbal_explanation: "שלב ב': נחשב ונקבל 8 לחלק לאפס.&rlm;", math_expression: "m = 8 : 0" },
            { verbal_explanation: "שלב ג': במתמטיקה, חלוקה באפס אינה מוגדרת. לכן לישר זה אין שיפוע (הוא ישר אנכי, מקביל לציר y).&rlm;", math_expression: "Undefined" }
        ],
        final_answer: "אין שיפוע (לא מוגדר)"
    },
    // שאלה 8
    {
        topic: "linear_functions",
        subTopic: "שיפוע לפי 2 נקודות",
        question_text: "האם משנה מאיזו נקודה מתחילים להחסיר בנוסחת השיפוע? (למשל, האם מותר לעשות y1-y2 חלקי x1-x2)?&rlm;",
        options: ["לא משנה, כל עוד שומרים על אותו כיוון גם במונה וגם במכנה (נקודה א' פחות נקודה ב' בשניהם).", "כן, חובה תמיד להתחיל מהנקודה שבה ה-x גדול יותר.", "כן, חובה להתחיל מהנקודה שבה ה-y גדול יותר.", "לא משנה, אפשר לערבב את הסדר במונה ובמכנה."],
        correctAnswer: 0,
        hint: "הסדר לא משנה, אבל העקביות קריטית! אם התחלתם מהנקודה הראשונה במונה, אתם חייבים להתחיל מהנקודה הראשונה במכנה.&rlm;",
        solution_steps: [
            { verbal_explanation: "הנוסחה מודדת את ההפרש. אם נהפוך את הסדר בשני המקומות, גם המונה וגם המכנה יקבלו סימן הפוך (כפל במינוס 1).&rlm;", math_expression: "" },
            { verbal_explanation: "מינוס חלקי מינוס שווה לפלוס, ולכן התוצאה הסופית תישאר זהה לחלוטין.&rlm;", math_expression: "(-A) : (-B) = A : B" },
            { verbal_explanation: "הטעות הנפוצה ביותר היא לערבב: לעשות y2-y1 במונה, אבל x1-x2 במכנה. זה ייתן שיפוע שגוי (הפוך בסימנו).&rlm;", math_expression: "" }
        ],
        final_answer: "לא משנה, כל עוד שומרים על אותו כיוון גם במונה וגם במכנה (נקודה א' פחות נקודה ב' בשניהם)."
    },
    // שאלה 9
    {
        topic: "linear_functions",
        subTopic: "שיפוע לפי 2 נקודות",
        question_text: "שאלה הפוכה: ידוע ששיפוע הישר הוא 3. הישר עובר בנקודות (1, 4) ו- (2, y). מהו הערך של y?&rlm;",
        options: ["7", "6", "10", "5"],
        correctAnswer: 0,
        hint: "שיפוע 3 אומר שעל כל צעד 1 ימינה ב-x, ה-y עולה ב-3. ה-x שלנו זז מ-1 ל-2 (צעד אחד). לכן ה-y צריך לעלות ב-3 (מ-4 ל-7).&rlm;",
        solution_steps: [
            { verbal_explanation: "דרך א' (הבנת השיפוע): שיפוע 3 פירושו קצב עלייה של 3 יחידות y לכל יחידת x אחת.&rlm;", math_expression: "" },
            { verbal_explanation: "מכיוון שה-x גדל ב-1 (מ-1 ל-2), ה-y חייב לגדול ב-3. לכן 4 פלוס 3 שווה 7.&rlm;", math_expression: "y = 4 + 3 = 7" },
            { verbal_explanation: "דרך ב' (משוואה): נציב בנוסחת השיפוע ונשווה ל-3.&rlm;", math_expression: "(y - 4) : (2 - 1) = 3" },
            { verbal_explanation: "נפתור: (y-4) חלקי 1 שווה 3. לכן y-4=3, ומכאן y=7.&rlm;", math_expression: "y - 4 = 3  =>  y = 7" }
        ],
        final_answer: "7"
    },
    // שאלה 10
    {
        topic: "linear_functions",
        subTopic: "שיפוע לפי 2 נקודות",
        question_text: "שיפוע הישר העובר דרך (0, 5) ו- (x, 15) הוא 2. מהו הערך של x?&rlm;",
        options: ["5", "10", "4", "2"],
        correctAnswer: 0,
        hint: "ה-y עלה מ-5 ל-15 (עלייה של 10). קצב העלייה (השיפוע) הוא 2. כמה צעדים של 2 צריך לעשות כדי לעלות 10?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב את הנתונים בנוסחת השיפוע ונשווה ל-2.&rlm;", math_expression: "(15 - 5) : (x - 0) = 2" },
            { verbal_explanation: "שלב ב': נפשט את המשוואה.&rlm;", math_expression: "10 : x = 2" },
            { verbal_explanation: "שלב ג': נפתור את המשוואה. איזה מספר כשמחלקים בו את 10 נקבל 2?&rlm;", math_expression: "10 : 2 = x  =>  x = 5" }
        ],
        final_answer: "5"
    },
    // שאלה 11
    {
        topic: "linear_functions",
        subTopic: "שיפוע לפי 2 נקודות",
        question_text: "הנקודות (0, 0), (2, 6) ו- (4, 12) נמצאות כולן על אותו ישר. מה זה אומר על השיפועים בין כל זוג נקודות?&rlm;",
        options: ["השיפוע מכל זוג נקודות שנבחר יהיה תמיד זהה (במקרה זה, 3).", "השיפוע משתנה בהתאם למרחק בין הנקודות.", "השיפוע עולה ככל שמתרחקים מהאפס.", "אי אפשר לחשב שיפוע עם (0,0)."],
        correctAnswer: 0,
        hint: "תכונת יסוד של קו ישר היא שקצב השינוי שלו (השיפוע) קבוע לכל אורכו, לא משנה אילו שתי נקודות נבחר.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב שיפוע בין הזוג הראשון (0,0) ל-(2,6).", math_expression: "(6 - 0) : (2 - 0) = 6 : 2 = 3" },
            { verbal_explanation: "שלב ב': נחשב שיפוע בין הזוג השני (2,6) ל-(4,12).", math_expression: "(12 - 6) : (4 - 2) = 6 : 2 = 3" },
            { verbal_explanation: "מסקנה: ישר מוגדר כקו שבו קצב השינוי (השיפוע) נשאר קבוע לכל אורכו.", math_expression: "m = 3" }
        ],
        final_answer: "השיפוע מכל זוג נקודות שנבחר יהיה תמיד זהה (במקרה זה, 3)."
    },
    // שאלה 12
    {
        topic: "linear_functions",
        subTopic: "שיפוע לפי 2 נקודות",
        question_text: "חשבו את השיפוע של הישר העובר בנקודות (10-, 5) ו- (10, 5-). שימו לב לסימנים המבלבלים!&rlm;",
        options: ["-2", "2", "0", "1"],
        correctAnswer: 0,
        hint: "עבדו לאט: y2-y1 הוא 10 פחות (מינוס 10), כלומר 20. במונה: -5 פחות 5, כלומר מינוס 10. (התשובה היא מינוס שתיים!).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב בנוסחה בזהירות. הנקודה השנייה היא (-5, 10) והראשונה היא (5, -10).", math_expression: "m = (10 - (-10)) : (-5 - 5)" },
            { verbal_explanation: "שלב ב': נחשב את המונה. 10 מינוס מינוס 10 שווה 10 פלוס 10.", math_expression: "10 + 10 = 20" },
            { verbal_explanation: "שלב ג': נחשב את המכנה. מינוס 5 פחות 5 שווה מינוס 10.", math_expression: "-5 - 5 = -10" },
            { verbal_explanation: "שלב ד': נחלק 20 במינוס 10.", math_expression: "m = 20 : (-10) = -2" }
        ],
        final_answer: "-2"
    },

    // ==========================================================
    // תת נושא 2: משוואת ישר (נקודה ושיפוע) (12 שאלות)
    // ==========================================================
    
    // שאלה 13
    {
        topic: "linear_functions",
        subTopic: "משוואת ישר (נקודה ושיפוע)",
        question_text: "מהי המשוואה המפורשת של ישר? מה מייצג כל אות בה (y = mx + b)?&rlm;",
        options: ["m הוא השיפוע, b הוא נקודת החיתוך עם ציר ה-y.", "m הוא נקודת החיתוך עם ציר x, b הוא השיפוע.", "m הוא הממוצע, b הוא הבסיס.", "אין משמעות לאותיות, הן רק משתנים."],
        correctAnswer: 0,
        hint: "האות m (מלשון mountain) קובעת את ה'עלייה' (השיפוע). האות b קובעת היכן הישר מתנגש בציר העומד (ציר ה-y).&rlm;",
        solution_steps: [
            { verbal_explanation: "במשוואת הישר y = mx + b:&rlm;", math_expression: "" },
            { verbal_explanation: "המקדם m מייצג את שיפוע הישר (קצב ההשתנות).&rlm;", math_expression: "" },
            { verbal_explanation: "האיבר החופשי b מייצג את נקודת החיתוך של הישר עם ציר ה-y (כאשר x=0).&rlm;", math_expression: "" }
        ],
        final_answer: "m הוא השיפוע, b הוא נקודת החיתוך עם ציר ה-y."
    },
    // שאלה 14
    {
        topic: "linear_functions",
        subTopic: "משוואת ישר (נקודה ושיפוע)",
        question_text: "מצאו את משוואת הישר ששיפועו 3 (m=3) והוא חותך את ציר ה-y בנקודה (0, 5).&rlm;",
        options: ["y = 3x + 5", "y = 5x + 3", "y = 3x - 5", "y = 15x"],
        correctAnswer: 0,
        hint: "זהו המקרה הקל ביותר! נתון לכם ישירות ה-m (3) וה-b (הוא ה-y בנקודת החיתוך עם ציר ה-y, לכן b=5). פשוט הציבו בתבנית y = mx + b.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נתון לנו השיפוע מפורשות.", math_expression: "m = 3" },
            { verbal_explanation: "שלב ב': נתון חיתוך עם ציר y בנקודה (0,5). בנקודה זו, ערך ה-y הוא בדיוק ה-b של המשוואה.", math_expression: "b = 5" },
            { verbal_explanation: "שלב ג': נציב את m ו-b בתבנית משוואת הישר y = mx + b.", math_expression: "y = 3x + 5" }
        ],
        final_answer: "y = 3x + 5"
    },
    // שאלה 15
    {
        topic: "linear_functions",
        subTopic: "משוואת ישר (נקודה ושיפוע)",
        question_text: "מצאו את משוואת הישר ששיפועו 2 (m=2) והוא עובר דרך הנקודה (4, 11).&rlm;",
        options: ["y = 2x + 3", "y = 2x + 11", "y = 4x + 2", "y = 2x + 7"],
        correctAnswer: 0,
        hint: "הציבו את מה שידוע לכם (m=2, x=4, y=11) במשוואה y = mx + b, כדי לגלות את המספר החסר b.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרשום את התבנית ונתחיל להציב את הידוע לנו. מצאנו m=2.", math_expression: "y = 2x + b" },
            { verbal_explanation: "שלב ב': נציב את הנקודה הנתונה (x=4, y=11) בתוך המשוואה החלקית כדי למצוא את b.", math_expression: "11 = 2 × 4 + b" },
            { verbal_explanation: "שלב ג': נחשב את הכפל. 2 כפול 4 הם 8.", math_expression: "11 = 8 + b" },
            { verbal_explanation: "שלב ד': נחסר 8 כדי לבודד את b.", math_expression: "b = 11 - 8 = 3" },
            { verbal_explanation: "שלב ה': נרשום את המשוואה הסופית המלאה.", math_expression: "y = 2x + 3" }
        ],
        final_answer: "y = 2x + 3"
    },
    // שאלה 16
    {
        topic: "linear_functions",
        subTopic: "משוואת ישר (נקודה ושיפוע)",
        question_text: "ישר בעל שיפוע שלילי של 4- (m=-4) עובר דרך הנקודה (1, 6). מהי משוואתו?&rlm;",
        options: ["y = -4x + 10", "y = -4x + 6", "y = -4x - 2", "y = 4x + 2"],
        correctAnswer: 0,
        hint: "הציבו y=6, m=-4, x=1. תקבלו: 6 = 4- כפול 1 ועוד b. העבירו את ה- 4- לאגף השני!&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב את הנתונים בתבנית y = mx + b.", math_expression: "6 = (-4) × 1 + b" },
            { verbal_explanation: "שלב ב': נחשב את הכפל.", math_expression: "6 = -4 + b" },
            { verbal_explanation: "שלב ג': נוסיף 4 לשני האגפים כדי לבודד את b.", math_expression: "b = 6 + 4 = 10" },
            { verbal_explanation: "שלב ד': נרכיב את משוואת הישר.", math_expression: "y = -4x + 10" }
        ],
        final_answer: "y = -4x + 10"
    },
    // שאלה 17
    {
        topic: "linear_functions",
        subTopic: "משוואת ישר (נקודה ושיפוע)",
        question_text: "מצאו את משוואת הישר העובר דרך ראשית הצירים (0,0) ושיפועו 5.&rlm;",
        options: ["y = 5x", "y = 5x + 5", "y = x + 5", "y = 0"],
        correctAnswer: 0,
        hint: "ישר שעובר בראשית הצירים חותך את ציר ה-y בדיוק באפס. כלומר, b=0.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב את השיפוע m=5.", math_expression: "y = 5x + b" },
            { verbal_explanation: "שלב ב': מכיוון שהישר עובר בראשית הצירים (0,0), נקודת החיתוך עם ציר ה-y היא ב-0.", math_expression: "b = 0" },
            { verbal_explanation: "שלב ג': נרשום את המשוואה ללא התוספת של האפס.", math_expression: "y = 5x" }
        ],
        final_answer: "y = 5x"
    },
    // שאלה 18
    {
        topic: "linear_functions",
        subTopic: "משוואת ישר (נקודה ושיפוע)",
        question_text: "ישר מקביל לישר y = 3x - 8 ועובר דרך הנקודה (2, 10). מהי משוואתו?&rlm;",
        options: ["y = 3x + 4", "y = 3x - 8", "y = -3x + 16", "y = 2x + 6"],
        correctAnswer: 0,
        hint: "ישרים מקבילים הם בעלי אותו שיפוע! לכן, ה-m שלכם הוא 3 (גנבנו אותו מהמשוואה הנתונה). עכשיו מצאו את b בעזרת הנקודה (2,10).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': לישרים מקבילים יש שיפוע זהה. הישר המקורי בעל שיפוע 3, לכן גם לישר שלנו יש m=3.", math_expression: "m = 3" },
            { verbal_explanation: "שלב ב': נציב את השיפוע והנקודה (2,10) במשוואה למציאת b.", math_expression: "10 = 3 × 2 + b" },
            { verbal_explanation: "שלב ג': נחשב: 10 שווה ל-6 ועוד b. נחסר 6 מ-10.", math_expression: "10 = 6 + b  =>  b = 4" },
            { verbal_explanation: "שלב ד': המשוואה החדשה.", math_expression: "y = 3x + 4" }
        ],
        final_answer: "y = 3x + 4"
    },
    // שאלה 19
    {
        topic: "linear_functions",
        subTopic: "משוואת ישר (נקודה ושיפוע)",
        question_text: "שיפוע הישר הוא 0 (m=0) והוא עובר בנקודה (5, 7). מהי משוואת הישר?&rlm;",
        options: ["y = 7", "x = 5", "y = 5x + 7", "y = 0"],
        correctAnswer: 0,
        hint: "שיפוע 0 מאפס את ה-x במשוואה (0 כפול x שווה 0). נשארתם רק עם y = b. מהו ה-y של הנקודה הנתונה?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב m=0 בתבנית המשוואה.", math_expression: "y = 0 × x + b" },
            { verbal_explanation: "שלב ב': האיבר של ה-x מתאפס, לכן המשוואה היא פונקציה קבועה y=b.", math_expression: "y = b" },
            { verbal_explanation: "שלב ג': נציב את ה-y של הנקודה הנתונה (7) כדי לגלות את b.", math_expression: "7 = b" },
            { verbal_explanation: "מסקנה: זהו ישר אופקי העובר בגובה 7.", math_expression: "y = 7" }
        ],
        final_answer: "y = 7"
    },
    // שאלה 20
    {
        topic: "linear_functions",
        subTopic: "משוואת ישר (נקודה ושיפוע)",
        question_text: "חשבו את משוואת הישר ששיפועו 0.5 והוא עובר בנקודה (6, 1).&rlm;",
        options: ["y = 0.5x - 2", "y = 0.5x + 1", "y = 0.5x - 3", "y = 2x - 11"],
        correctAnswer: 0,
        hint: "הציבו: 1 = 0.5 כפול 6 ועוד b. חצי מ-6 זה 3. מה צריך לחבר ל-3 כדי לקבל 1?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב m=0.5, x=6, y=1 במשוואה.", math_expression: "1 = 0.5 × 6 + b" },
            { verbal_explanation: "שלב ב': נחשב חצי מ-6.", math_expression: "1 = 3 + b" },
            { verbal_explanation: "שלב ג': נעביר את 3 אגף בחיסור (1 פחות 3).", math_expression: "b = -2" },
            { verbal_explanation: "שלב ד': נרכיב את המשוואה.", math_expression: "y = 0.5x - 2" }
        ],
        final_answer: "y = 0.5x - 2"
    },
    // שאלה 21
    {
        topic: "linear_functions",
        subTopic: "משוואת ישר (נקודה ושיפוע)",
        question_text: "ישנה דרך חלופית (נוסחה) למצוא משוואת ישר לפי נקודה ושיפוע: y - y1 = m(x - x1). השתמשו בה כדי למצוא את הישר ששיפועו 2 ועובר בנקודה (3, 4).&rlm;",
        options: ["y = 2x - 2", "y = 2x + 4", "y = 2x - 6", "y = 3x - 5"],
        correctAnswer: 0,
        hint: "הציבו: y - 4 = 2(x - 3). פתחו סוגריים והעבירו את ה- 4- לאגף ימין בפלוס.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב בנוסחה המיוחדת את m=2 ואת הנקודה (3,4).", math_expression: "y - 4 = 2 × (x - 3)" },
            { verbal_explanation: "שלב ב': נפתח סוגריים באגף ימין (2 כפול x ו-2 כפול מינוס 3).", math_expression: "y - 4 = 2x - 6" },
            { verbal_explanation: "שלב ג': נוסיף 4 לשני האגפים כדי לבודד את y.", math_expression: "y = 2x - 6 + 4" },
            { verbal_explanation: "התוצאה הסופית.", math_expression: "y = 2x - 2" }
        ],
        final_answer: "y = 2x - 2"
    },
    // שאלה 22
    {
        topic: "linear_functions",
        subTopic: "משוואת ישר (נקודה ושיפוע)",
        question_text: "הישר y = mx + b יוצר זווית זהה עם ציר ה-x כמו הישר y = -x + 5. הוא חותך את ציר ה-y בנקודה שבה y = 10. מהי משוואתו?&rlm;",
        options: ["y = -x + 10", "y = x + 10", "y = -10x + 5", "y = -x + 5"],
        correctAnswer: 0,
        hint: "זווית זהה עם ציר ה-x משמעותה שיפוע זהה (מקבילים). מהו השיפוע של y = -x + 5? (הוא 1-). ומהו ה-b מהנתון השני?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': ישרים היוצרים אותה זווית עם ציר x הם ישרים מקבילים, ולכן בעלי שיפוע זהה.", math_expression: "" },
            { verbal_explanation: "שלב ב': השיפוע של הישר הנתון (y = -x + 5) הוא 1-.", math_expression: "m = -1" },
            { verbal_explanation: "שלב ג': נתון שהישר החדש חותך את ציר y ב-10, כלומר b=10.", math_expression: "b = 10" },
            { verbal_explanation: "שלב ד': נציב את m ו-b לתבנית.", math_expression: "y = -x + 10" }
        ],
        final_answer: "y = -x + 10"
    },
    // שאלה 23
    {
        topic: "linear_functions",
        subTopic: "משוואת ישר (נקודה ושיפוע)",
        question_text: "בעיה מילולית: חשמלאי גובה סכום קבוע על ביקור בית (b), ועוד 150 שקלים על כל שעת עבודה (m). הלקוח שילם 500 שקלים על שעתיים של עבודה. מה הייתה עלות ביקור הבית (b)? ומהי הפונקציה המתארת את התשלום (y) עבור x שעות?&rlm;",
        options: ["b = 200, הפונקציה: y = 150x + 200", "b = 150, הפונקציה: y = 150x + 150", "b = 500, הפונקציה: y = 2x + 500", "b = 300, הפונקציה: y = 150x + 300"],
        correctAnswer: 0,
        hint: "השיפוע הוא 150. הנקודה הנתונה היא (2 שעות, 500 שקלים). הציבו למציאת b.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': קצב השינוי הקבוע (תשלום לשעה) הוא השיפוע.", math_expression: "m = 150" },
            { verbal_explanation: "שלב ב': נתונה נקודה בזמן ובמחיר (x=2, y=500). נציב במשוואה y = mx + b.", math_expression: "500 = 150 × 2 + b" },
            { verbal_explanation: "שלב ג': נחשב. 150 כפול 2 זה 300.", math_expression: "500 = 300 + b" },
            { verbal_explanation: "שלב ד': נחסר 300 כדי לגלות את b (התשלום הקבוע לביקור).", math_expression: "b = 200" },
            { verbal_explanation: "שלב ה': משוואת הפונקציה המלאה.", math_expression: "y = 150x + 200" }
        ],
        final_answer: "b = 200, הפונקציה: y = 150x + 200"
    },
    // שאלה 24
    {
        topic: "linear_functions",
        subTopic: "משוואת ישר (נקודה ושיפוע)",
        question_text: "מציאת נקודת החיתוך עם ציר x (נקודת האפס): מצאתם שמשוואת הישר היא y = 4x - 12. באיזו נקודה הישר חותך את ציר ה-x?&rlm;",
        options: ["(3, 0)", "(0, -12)", "(-3, 0)", "(0, 3)"],
        correctAnswer: 0,
        hint: "בחיתוך עם ציר ה-x, ה-y תמיד שווה לאפס. הציבו y=0 במשוואה ופתרו את 4x - 12 = 0.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נקודת חיתוך עם ציר x נמצאת ב'גובה אפס', לכן נציב y=0.", math_expression: "0 = 4x - 12" },
            { verbal_explanation: "שלב ב': נעביר את 12 לאגף השני בפלוס.", math_expression: "12 = 4x" },
            { verbal_explanation: "שלב ג': נחלק ב-4 כדי למצוא את x.", math_expression: "x = 3" },
            { verbal_explanation: "הנקודה המלאה היא קואורדינטת ה-x שמצאנו ו-y שהוא אפס.", math_expression: "(3, 0)" }
        ],
        final_answer: "(3, 0)"
    },

    // ==========================================================
    // תת נושא 3: משוואת ישר (2 נקודות) (12 שאלות)
    // ==========================================================
    
    // שאלה 25
    {
        topic: "linear_functions",
        subTopic: "משוואת ישר (2 נקודות)",
        question_text: "מהם שני השלבים העיקריים למציאת משוואת ישר כאשר נתונות רק שתי נקודות (ללא השיפוע)?&rlm;",
        options: ["1. חישוב השיפוע (m) בעזרת הנוסחה. 2. הצבת אחת הנקודות והשיפוע למציאת ה-b.", "1. חישוב הממוצע של הנקודות. 2. הפיכתן למשוואה.", "1. הצבת ה-x וה-y במשוואה ריבועית.", "אי אפשר למצוא משוואה בלי שיפוע שנתון מראש."],
        correctAnswer: 0,
        hint: "קודם כל מייצרים את השיפוע החסר מתוך שתי הנקודות. אחרי שיש שיפוע, זה הופך להיות תרגיל שלמדנו הרגע - מציאת משוואה בעזרת נקודה (תבחרו איזה שתרצו) ושיפוע!&rlm;",
        solution_steps: [
            { verbal_explanation: "כאשר חסר השיפוע, אנו חייבים לחשב אותו תחילה בעזרת הנוסחה (הפרש y חלקי הפרש x).&rlm;", math_expression: "" },
            { verbal_explanation: "לאחר מכן, משתמשים באחת מן הנקודות הידועות (לא משנה איזו) יחד עם השיפוע שמצאנו, כדי לפתור את המשוואה y=mx+b ולמצוא את b.&rlm;", math_expression: "" }
        ],
        final_answer: "1. חישוב השיפוע (m) בעזרת הנוסחה. 2. הצבת אחת הנקודות והשיפוע למציאת ה-b."
    },
    // שאלה 26
    {
        topic: "linear_functions",
        subTopic: "משוואת ישר (2 נקודות)",
        question_text: "מצאו את משוואת הישר העובר דרך הנקודות (1, 4) ו- (3, 10).&rlm;",
        options: ["y = 3x + 1", "y = 2x + 2", "y = 4x", "y = 3x - 1"],
        correctAnswer: 0,
        hint: "שלב 1: מצאו שיפוע (10 פחות 4, לחלק ל-3 פחות 1). m=3. שלב 2: הציבו נקודה קלה כמו (1,4) במשוואה y = 3x + b.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': חישוב השיפוע m.", math_expression: "m = (10 - 4) : (3 - 1) = 6 : 2 = 3" },
            { verbal_explanation: "שלב ב': נציב את m=3 ואת הנקודה (1,4) במשוואת הישר.", math_expression: "4 = 3 × 1 + b" },
            { verbal_explanation: "שלב ג': נחסר 3 מ-4 כדי למצוא את b.", math_expression: "b = 1" },
            { verbal_explanation: "שלב ד': נכתוב את המשוואה הסופית.", math_expression: "y = 3x + 1" }
        ],
        final_answer: "y = 3x + 1"
    },
    // שאלה 27
    {
        topic: "linear_functions",
        subTopic: "משוואת ישר (2 נקודות)",
        question_text: "חשבו את משוואת הישר העובר דרך הנקודות (2, 7) ו- (5, 13).&rlm;",
        options: ["y = 2x + 3", "y = 3x + 1", "y = 2x + 5", "y = 2x - 3"],
        correctAnswer: 0,
        hint: "שיפוע: (13-7)/(5-2) = 6/3 = 2. מציאת b: הציבו את (2,7). 7 = 2*2 + b.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': חישוב השיפוע.", math_expression: "m = (13 - 7) : (5 - 2) = 6 : 3 = 2" },
            { verbal_explanation: "שלב ב': נציב את m=2 ואת הנקודה הקטנה יותר (2,7) לתבנית הישר.", math_expression: "7 = 2 × 2 + b" },
            { verbal_explanation: "שלב ג': נחשב את הכפל ונבודד את b.", math_expression: "7 = 4 + b  =>  b = 3" },
            { verbal_explanation: "שלב ד': נרכיב את המשוואה.", math_expression: "y = 2x + 3" }
        ],
        final_answer: "y = 2x + 3"
    },
    // שאלה 28
    {
        topic: "linear_functions",
        subTopic: "משוואת ישר (2 נקודות)",
        question_text: "ישר עובר בראשית הצירים (0,0) ובנקודה (4, 20). מהי משוואת הישר?&rlm;",
        options: ["y = 5x", "y = 4x + 20", "y = 20x", "y = 5x + 4"],
        correctAnswer: 0,
        hint: "כשנקודה אחת היא (0,0), החישוב קל מאוד. השיפוע הוא פשוט ה-y חלקי ה-x של הנקודה השנייה (20/4). והאיבר החופשי b הוא אפס.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב שיפוע.", math_expression: "m = (20 - 0) : (4 - 0) = 20 : 4 = 5" },
            { verbal_explanation: "שלב ב': מכיוון שהישר עובר ב-(0,0), החיתוך עם ציר y הוא באפס (b=0). אין צורך לחשב.", math_expression: "b = 0" },
            { verbal_explanation: "שלב ג': משוואת הישר לא מכילה איבר חופשי.", math_expression: "y = 5x" }
        ],
        final_answer: "y = 5x"
    },
    // שאלה 29
    {
        topic: "linear_functions",
        subTopic: "משוואת ישר (2 נקודות)",
        question_text: "מצאו את משוואת הישר בעל השיפוע השלילי שעובר דרך (0, 8) ו- (2, 2).&rlm;",
        options: ["y = -3x + 8", "y = -3x + 2", "y = 3x + 8", "y = -4x + 8"],
        correctAnswer: 0,
        hint: "שיפוע: 2 פחות 8 שווה 6-. נחלק ב-2, השיפוע הוא 3-. שימו לב שהנקודה הראשונה מגלה לכם מיד את ה-b! (כי x=0).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': חישוב השיפוע m.", math_expression: "m = (2 - 8) : (2 - 0) = -6 : 2 = -3" },
            { verbal_explanation: "שלב ב': הנקודה הנתונה (0,8) היא בדיוק נקודת החיתוך עם ציר y. לכן ה-y שלה הוא ה-b שלנו.", math_expression: "b = 8" },
            { verbal_explanation: "שלב ג': נרכיב את המשוואה.", math_expression: "y = -3x + 8" }
        ],
        final_answer: "y = -3x + 8"
    },
    // שאלה 30
    {
        topic: "linear_functions",
        subTopic: "משוואת ישר (2 נקודות)",
        question_text: "קצת מינוסים! חשבו את משוואת הישר העובר בנקודות (2-, 3) ו- (10, 1-).&rlm;",
        options: ["y = -3x + 7", "y = 3x - 1", "y = -2x + 4", "y = -3x - 2"],
        correctAnswer: 0,
        hint: "שיפוע: 10 פחות (מינוס 2) שווה ל-12. המכנה: מינוס 1 פחות 3 שווה מינוס 4. שיפוע הוא 12 חלקי מינוס 4 (3-).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': חישוב השיפוע בזהירות עם הסימנים.", math_expression: "m = (10 - (-2)) : (-1 - 3) = 12 : (-4) = -3" },
            { verbal_explanation: "שלב ב': נציב את m=-3 ואת הנקודה השמאלית (3, -2) למציאת b.", math_expression: "-2 = -3 × 3 + b" },
            { verbal_explanation: "שלב ג': נחשב: מינוס 3 כפול 3 שווה מינוס 9.", math_expression: "-2 = -9 + b" },
            { verbal_explanation: "שלב ד': נעביר את מינוס 9 ימינה (יהפוך לפלוס 9).", math_expression: "b = -2 + 9 = 7" },
            { verbal_explanation: "שלב ה': המשוואה המלאה.", math_expression: "y = -3x + 7" }
        ],
        final_answer: "y = -3x + 7"
    },
    // שאלה 31
    {
        topic: "linear_functions",
        subTopic: "משוואת ישר (2 נקודות)",
        question_text: "ישר עובר דרך שתי נקודות החיתוך עם הצירים: (0, 6) ו- (3, 0). מהי משוואתו?&rlm;",
        options: ["y = -2x + 6", "y = 2x + 6", "y = -0.5x + 3", "y = -2x + 3"],
        correctAnswer: 0,
        hint: "הנקודה הראשונה כבר נותנת לכם את b (הוא 6). עכשיו מצאו את השיפוע: (0-6) לחלק ל (3-0).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': הנקודה (0,6) נמצאת על ציר y, ולכן ה-b של המשוואה הוא 6.", math_expression: "b = 6" },
            { verbal_explanation: "שלב ב': נחשב שיפוע.", math_expression: "m = (0 - 6) : (3 - 0) = -6 : 3 = -2" },
            { verbal_explanation: "שלב ג': נרכיב את המשוואה.", math_expression: "y = -2x + 6" }
        ],
        final_answer: "y = -2x + 6"
    },
    // שאלה 32
    {
        topic: "linear_functions",
        subTopic: "משוואת ישר (2 נקודות)",
        question_text: "מצאו משוואת ישר העובר בנקודות (5, 9) ו- (15, 9). מה מיוחד בישר הזה?&rlm;",
        options: ["y = 9 (ישר אופקי בעל שיפוע 0)", "x = 9 (ישר אנכי)", "y = x + 4", "y = 9x"],
        correctAnswer: 0,
        hint: "לשתי הנקודות יש בדיוק את אותו ה-y! (גובה 9). זה אומר שהישר לא עולה ולא יורד לעולם.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב שיפוע. ההפרש ב-y הוא 0 (9 פחות 9).", math_expression: "m = 0 : (15 - 5) = 0" },
            { verbal_explanation: "שלב ב': נציב m=0 ונקודה (5,9) במשוואה.", math_expression: "9 = 0 × 5 + b  =>  b = 9" },
            { verbal_explanation: "שלב ג': נרשום את המשוואה. ה-x מתאפס ונופל.", math_expression: "y = 9" }
        ],
        final_answer: "y = 9 (ישר אופקי בעל שיפוע 0)"
    },
    // שאלה 33
    {
        topic: "linear_functions",
        subTopic: "משוואת ישר (2 נקודות)",
        question_text: "האם יש צורך לחשב שוב את ה-b אם נציב את הנקודה השנייה במקום את הנקודה הראשונה?&rlm;",
        options: ["לא, זה לא משנה איזו נקודה מציבים - התוצאה של b תהיה תמיד זהה.", "כן, תצא משוואה אחרת לגמרי.", "רק אם הנקודה השנייה חיובית.", "חייבים להציב תמיד את הנקודה שבה ה-x גדול יותר."],
        correctAnswer: 0,
        hint: "שתיהן יושבות על אותו ישר בדיוק, ולכן המשוואה 'מתנהגת' נכון עבור שתיהן. נסו בעצמכם!&rlm;",
        solution_steps: [
            { verbal_explanation: "השיפוע שמצאנו מגדיר את קו הישר הייחודי שעובר דרך שתי הנקודות הללו.&rlm;", math_expression: "" },
            { verbal_explanation: "לכן, לא משנה באיזו מהנקודות נבחר להשתמש כדי 'לעגן' את הישר למקומו (למצוא את b), התוצאה המתמטית תהיה זהה לחלוטין.&rlm;", math_expression: "" },
            { verbal_explanation: "טיפ: תמיד בחרו בנקודה שהמספרים שלה קלים יותר לחישוב (למשל, מספרים חיוביים קטנים או אפסים).&rlm;", math_expression: "" }
        ],
        final_answer: "לא, זה לא משנה איזו נקודה מציבים - התוצאה של b תהיה תמיד זהה."
    },
    // שאלה 34
    {
        topic: "linear_functions",
        subTopic: "משוואת ישר (2 נקודות)",
        question_text: "קריאת גרף: לפניכם ישר העובר בנקודות המודגשות (0, 2) ו- (2, 8). מהי משוואת הישר?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 200 150' width='100%' height='150' style='max-width:200px;'><line x1='10' y1='130' x2='190' y2='130' stroke='#334155' stroke-width='2'/><line x1='50' y1='10' x2='50' y2='140' stroke='#334155' stroke-width='2'/><line x1='30' y1='130' x2='110' y2='10' stroke='#3b82f6' stroke-width='2'/><circle cx='50' cy='100' r='4' fill='#ef4444'/><circle cx='90' cy='40' r='4' fill='#ef4444'/><line x1='90' y1='40' x2='90' y2='130' stroke='#94a3b8' stroke-dasharray='4,4'/><text x='35' y='105' font-family='Arial' font-size='10' fill='#0f172a'>(0,2)</text><text x='105' y='35' font-family='Arial' font-size='10' fill='#0f172a'>(2,8)</text></svg></div>",
        options: ["y = 3x + 2", "y = 4x + 2", "y = 2x + 8", "y = 3x - 2"],
        correctAnswer: 0,
        hint: "הישר חותך את ציר ה-y ב-2 (אז b=2). ה-y עולה מ-2 ל-8 (עלייה של 6) בזמן שה-x מתקדם מ-0 ל-2 (התקדמות 2). שיפוע = 6/2 = 3.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': מציאת ה-b מהגרף. הנקודה (0,2) נמצאת בדיוק על ציר ה-y.", math_expression: "b = 2" },
            { verbal_explanation: "שלב ב': חישוב השיפוע (הפרש גבהים חלקי הפרש אופקי).", math_expression: "m = (8 - 2) : (2 - 0) = 6 : 2 = 3" },
            { verbal_explanation: "שלב ג': הרכבת המשוואה.", math_expression: "y = 3x + 2" }
        ],
        final_answer: "y = 3x + 2"
    },
    // שאלה 35
    {
        topic: "linear_functions",
        subTopic: "משוואת ישר (2 נקודות)",
        question_text: "שיפוע שבר: מצאו את משוואת הישר העובר דרך (2, 5) ו- (6, 7).&rlm;",
        options: ["y = 0.5x + 4", "y = 2x + 1", "y = 0.5x + 5", "y = 0.5x + 3"],
        correctAnswer: 0,
        hint: "שיפוע: (7-5) חלקי (6-2). זה יוצא 2/4, שזה חצי (0.5). הציבו 0.5 במשנה וגלו את b.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': חישוב השיפוע.", math_expression: "m = (7 - 5) : (6 - 2) = 2 : 4 = 0.5" },
            { verbal_explanation: "שלב ב': נציב את הנקודה (2,5) ואת m=0.5.", math_expression: "5 = 0.5 × 2 + b" },
            { verbal_explanation: "שלב ג': נחשב: 0.5 כפול 2 שווה ל-1 שלם.", math_expression: "5 = 1 + b  =>  b = 4" },
            { verbal_explanation: "שלב ד': המשוואה הסופית.", math_expression: "y = 0.5x + 4" }
        ],
        final_answer: "y = 0.5x + 4"
    },
    // שאלה 36
    {
        topic: "linear_functions",
        subTopic: "משוואת ישר (2 נקודות)",
        question_text: "אתגר אלגברי! שתי הנקודות הן (a, c) ו- (3a, c+2). ידוע ש-a הוא מספר חיובי. מהו שיפוע הישר?&rlm;",
        options: ["1 : a (או 1 חלקי a)", "2 : a", "a : 2", "1 : 2a"],
        correctAnswer: 0,
        hint: "אל תפחדו מהאותיות. הציבו אותן בדיוק באותה הנוסחה: y2 - y1 (שזה c+2 - c) חלקי x2 - x1 (שזה 3a - a).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרכיב את ביטוי המונה (הפרש שיעורי ה-y).", math_expression: "(c + 2) - c = 2" },
            { verbal_explanation: "שלב ב': נרכיב את ביטוי המכנה (הפרש שיעורי ה-x).", math_expression: "3a - a = 2a" },
            { verbal_explanation: "שלב ג': נרשום כשבר ונצמצם את המספר 2.", math_expression: "2 : 2a = 1 : a" }
        ],
        final_answer: "1 : a (או 1 חלקי a)"
    },

    // ==========================================================
    // תת נושא 4: מצב הדדי בין ישרים (12 שאלות)
    // ==========================================================
    
    // שאלה 37
    {
        topic: "linear_functions",
        subTopic: "מצב הדדי בין ישרים",
        question_text: "איזה מצב הדדי קיים בין שני הישרים הבאים?<br>1) y = 4x + 7<br>2) y = 4x - 2&rlm;",
        options: ["ישרים מקבילים (לא נחתכים לעולם)", "ישרים נחתכים בנקודה אחת", "ישרים מתלכדים (מונחים זה על זה)", "ישרים מאונכים"],
        correctAnswer: 0,
        hint: "הביטו על השיפוע (המקדם של x). בשניהם הוא 4. אבל נקודת ההתחלה שלהם (b) שונה. הם עולים בדיוק באותו הקצב ולכן לא ייפגשו.&rlm;",
        solution_steps: [
            { verbal_explanation: "נבדוק את השיפוע (m) של שני הישרים. בשניהם m = 4.&rlm;", math_expression: "m_1 = m_2 = 4" },
            { verbal_explanation: "נבדוק את האיבר החופשי (b). באחד הוא 7 ובשני הוא 2-. ה-b שונה.&rlm;", math_expression: "7 ≠ -2" },
            { verbal_explanation: "ישרים בעלי אותו שיפוע אך חיתוך ציר y שונה הם מקבילים בהגדרתם.&rlm;", math_expression: "" }
        ],
        final_answer: "ישרים מקבילים (לא נחתכים לעולם)"
    },
    // שאלה 38
    {
        topic: "linear_functions",
        subTopic: "מצב הדדי בין ישרים",
        question_text: "קבעו מהו המצב ההדדי בין שני הישרים הבאים (שימו לב, משוואה אחת לא מסודרת!):<br>1) y = 5x + 3<br>2) 2y = 10x + 6&rlm;",
        options: ["ישרים מתלכדים (אותו ישר בדיוק, אינסוף פתרונות)", "ישרים מקבילים", "ישרים נחתכים", "אי אפשר לדעת"],
        correctAnswer: 0,
        hint: "חלקו את המשוואה השנייה ב-2 כדי לבודד את y. מה קיבלתם?&rlm;",
        solution_steps: [
            { verbal_explanation: "כדי להשוות, נסדר את משוואה 2 לתבנית הרגילה על ידי חלוקה ב-2.&rlm;", math_expression: "2y : 2 = (10x + 6) : 2  =>  y = 5x + 3" },
            { verbal_explanation: "לאחר הפישוט, אנו רואים שמשוואה 2 זהה לחלוטין למשוואה 1 (m=5, b=3).&rlm;", math_expression: "" },
            { verbal_explanation: "כאשר שתי משוואות מתארות את אותו ישר, המצב נקרא 'ישרים מתלכדים'.&rlm;", math_expression: "" }
        ],
        final_answer: "ישרים מתלכדים (אותו ישר בדיוק, אינסוף פתרונות)"
    },
    // שאלה 39
    {
        topic: "linear_functions",
        subTopic: "מצב הדדי בין ישרים",
        question_text: "מהו המצב ההדדי בין הישרים הבאים?<br>1) y = 3x - 5<br>2) y = 2x - 5&rlm;",
        options: ["ישרים נחתכים בנקודה אחת", "ישרים מקבילים", "ישרים מתלכדים", "אי אפשר לשרטט אותם יחד"],
        correctAnswer: 0,
        hint: "האם יש להם את אותו השיפוע? (3 לעומת 2). אם השיפוע שונה, הם חייבים להיחתך מתישהו! (במקרה הזה, ממש על ציר ה-y כי ה-b שלהם זהה).&rlm;",
        solution_steps: [
            { verbal_explanation: "נבדוק את השיפוע. לישר אחד m=3 ולשני m=2.&rlm;", math_expression: "3 ≠ 2" },
            { verbal_explanation: "הכלל קובע: לכל שני ישרים בעלי שיפוע שונה, קיימת נקודת חיתוך אחת ויחידה במרחב.&rlm;", math_expression: "" },
            { verbal_explanation: "אגב, כיוון שה-b שלהם זהה (5-), אנו אפילו יודעים שזוהי נקודת החיתוך (0, -5).&rlm;", math_expression: "" }
        ],
        final_answer: "ישרים נחתכים בנקודה אחת"
    },
    // שאלה 40
    {
        topic: "linear_functions",
        subTopic: "מצב הדדי בין ישרים",
        question_text: "מציאת נקודת חיתוך. באיזו נקודה (x, y) נחתכים שני הישרים הבאים?<br>1) y = 4x<br>2) y = x + 6&rlm;",
        options: ["(2, 8)", "(1, 4)", "(3, 12)", "(2, 4)"],
        correctAnswer: 0,
        hint: "כיוון ששניהם שווים ל-y, השוו ביניהם: 4x = x + 6. פתרו את המשוואה למציאת x, ואז הציבו למציאת y.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': בנקודת החיתוך, ה-y של שני הישרים זהה. נשווה בין הביטויים.&rlm;", math_expression: "4x = x + 6" },
            { verbal_explanation: "שלב ב': נחסר x משני האגפים.&rlm;", math_expression: "3x = 6" },
            { verbal_explanation: "שלב ג': נחלק ב-3 למציאת קואורדינטת ה-x.&rlm;", math_expression: "x = 2" },
            { verbal_explanation: "שלב ד': נציב x=2 באחת המשוואות (למשל, y=4x) למציאת y.&rlm;", math_expression: "y = 4 × 2 = 8" }
        ],
        final_answer: "(2, 8)"
    },
    // שאלה 41
    {
        topic: "linear_functions",
        subTopic: "מצב הדדי בין ישרים",
        question_text: "איזה ביטוי מתאר נכון את הקשר בין שני ישרים המאונכים זה לזה (יוצרים זווית של 90 מעלות)? (m1 הוא שיפוע ישר א', m2 הוא שיפוע ישר ב')&rlm;",
        options: ["הם הופכיים ונגדיים זה לזה (מכפלתם היא מינוס 1). m1 × m2 = -1", "הם שווים בדיוק זה לזה. m1 = m2", "הם נגדיים בלבד. m1 = -m2", "הם הופכיים בלבד."],
        correctAnswer: 0,
        hint: "אם לישר אחד יש שיפוע 2 (עולה תלול), לישר המאונך לו יהיה שיפוע של 1/2- (יורד במתינות). זוהי פעולת 'הופכי ונגדי'.&rlm;",
        solution_steps: [
            { verbal_explanation: "ישרים מאונכים חייבים לחתוך זה את זה. לכן השיפועים שלהם לא יכולים להיות שווים.&rlm;", math_expression: "" },
            { verbal_explanation: "כדי ליצור זווית ישרה (90°), שיפוע אחד חייב להיות חיובי והשני שלילי (נגדיים).&rlm;", math_expression: "" },
            { verbal_explanation: "בנוסף, מידת התלילות חייבת להתהפך (הופכיים). הנוסחה המתמטית לכך היא שמכפלתם שווה 1-.&rlm;", math_expression: "m_1 × m_2 = -1" }
        ],
        final_answer: "הם הופכיים ונגדיים זה לזה (מכפלתם היא מינוס 1). m1 × m2 = -1"
    },
    // שאלה 42
    {
        topic: "linear_functions",
        subTopic: "מצב הדדי בין ישרים",
        question_text: "ידוע שהישר y = ax + 5 מקביל לישר y = 3x - 10. מה הערך של הפרמטר a?&rlm;",
        options: ["3", "5", "-3", "-10"],
        correctAnswer: 0,
        hint: "הגדרה של ישרים מקבילים: יש להם בדיוק את אותו השיפוע!&rlm;",
        solution_steps: [
            { verbal_explanation: "הפרמטר a מייצג את השיפוע (m) במשוואה הראשונה.&rlm;", math_expression: "" },
            { verbal_explanation: "כדי שישרים יהיו מקבילים, השיפועים שלהם חייבים להיות זהים.&rlm;", math_expression: "m_1 = m_2" },
            { verbal_explanation: "השיפוע של המשוואה השנייה נתון כ-3. לכן גם a חייב להיות 3.&rlm;", math_expression: "a = 3" }
        ],
        final_answer: "3"
    },
    // שאלה 43
    {
        topic: "linear_functions",
        subTopic: "מצב הדדי בין ישרים",
        question_text: "קריאת גרפים: לפניכם שרטוט המציג שני ישרים המקבילים לציר ה-x. מהו המצב ההדדי ביניהם?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 200 150' width='100%' height='150' style='max-width:200px;'><line x1='10' y1='130' x2='190' y2='130' stroke='#334155' stroke-width='2'/><line x1='100' y1='10' x2='100' y2='140' stroke='#334155' stroke-width='2'/><line x1='20' y1='40' x2='180' y2='40' stroke='#3b82f6' stroke-width='2'/><line x1='20' y1='90' x2='180' y2='90' stroke='#ef4444' stroke-width='2'/><text x='105' y='35' font-family='Arial' font-size='10' fill='#0f172a'>y=8</text><text x='105' y='85' font-family='Arial' font-size='10' fill='#0f172a'>y=3</text></svg></div>",
        options: ["הם מקבילים זה לזה (לשניהם שיפוע 0).", "הם נחתכים איפשהו רחוק בגרף.", "הם מתלכדים.", "אין להם שיפוע ולכן אי אפשר להגדיר."],
        correctAnswer: 0,
        hint: "שני ישרים אופקיים עולים ויורדים בשיעור של אפס. כיוון שהם תמיד באותו הגובה היחסי אחד לשני, הם לא ייפגשו.&rlm;",
        solution_steps: [
            { verbal_explanation: "ישר המקביל לציר x הוא בעל שיפוע 0 (הוא לא עולה ולא יורד).&rlm;", math_expression: "m_1 = 0 , m_2 = 0" },
            { verbal_explanation: "מכיוון שלשניהם יש את אותו השיפוע בדיוק, הם מקבילים זה לזה.&rlm;", math_expression: "" },
            { verbal_explanation: "(הם אינם מתלכדים כי הם חותכים את ציר ה-y בגבהים שונים: 8 ו-3).&rlm;", math_expression: "" }
        ],
        final_answer: "הם מקבילים זה לזה (לשניהם שיפוע 0)."
    },
    // שאלה 44
    {
        topic: "linear_functions",
        subTopic: "מצב הדדי בין ישרים",
        question_text: "מצאו את נקודת החיתוך בין הישר y = 5 לבין הישר y = 2x - 1.&rlm;",
        options: ["(3, 5)", "(5, 3)", "(0, 5)", "(2, 5)"],
        correctAnswer: 0,
        hint: "ידוע לכם שה-y של נקודת החיתוך חייב להיות 5 (כי היא יושבת על הישר y=5). הציבו 5 במקום y במשוואה השנייה ופתרו את x.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': הישר הראשון מגלה לנו את ה-y של נקודת החיתוך באופן ישיר.", math_expression: "y = 5" },
            { verbal_explanation: "שלב ב': נציב 5 במשוואה השנייה כדי למצוא את ה-x התואם.", math_expression: "5 = 2x - 1" },
            { verbal_explanation: "שלב ג': נעביר 1 בחיבור אגף שמאלה.", math_expression: "6 = 2x" },
            { verbal_explanation: "שלב ד': נחלק ב-2.", math_expression: "x = 3" },
            { verbal_explanation: "הנקודה היא (3,5).", math_expression: "" }
        ],
        final_answer: "(3, 5)"
    },
    // שאלה 45
    {
        topic: "linear_functions",
        subTopic: "מצב הדדי בין ישרים",
        question_text: "נתונים שני ישרים: x = 4 ו- y = -2. מהו המצב ההדדי ביניהם?&rlm;",
        options: ["הם מאונכים זה לזה ונחתכים בנקודה (4, -2).", "הם מקבילים.", "הם מתלכדים.", "אין ביניהם נקודת חיתוך."],
        correctAnswer: 0,
        hint: "ציירו לעצמכם: קו אחד יורד מלמעלה למטה (אנכי ב-x=4). קו שני שוכב משמאל לימין (אופקי ב-y=-2). הם יוצרים יחד צלב מושלם!&rlm;",
        solution_steps: [
            { verbal_explanation: "המשוואה x=4 מתארת ישר אנכי לחלוטין (מקביל לציר y).", math_expression: "" },
            { verbal_explanation: "המשוואה y=-2 מתארת ישר אופקי לחלוטין (מקביל לציר x).", math_expression: "" },
            { verbal_explanation: "ישר אנכי וישר אופקי חותכים זה את זה בזווית של 90° (מאונכים). נקודת החיתוך מקבלת את ה-x מהראשון ואת ה-y מהשני.", math_expression: "(4, -2)" }
        ],
        final_answer: "הם מאונכים זה לזה ונחתכים בנקודה (4, -2)."
    },
    // שאלה 46
    {
        topic: "linear_functions",
        subTopic: "מצב הדדי בין ישרים",
        question_text: "נקודת החיתוך בין שני ישרים מתקבלת על ידי פתרון של 'מערכת משוואות'. מה תהיה התוצאה האלגברית אם ננסה לפתור מערכת של ישרים **מקבילים** (שלא נחתכים)?&rlm;",
        options: ["נקבל פסוק שקר שתמיד שגוי (למשל 0 = 5).", "נקבל x=0 ו- y=0.", "נקבל פסוק אמת (למשל 5 = 5).", "המחשבון יוציא שגיאת חילוק באפס."],
        correctAnswer: 0,
        hint: "נניח שנשווה 3x+5 ל- 3x+2. נחסר 3x משני הצדדים وנישאר עם 5 = 2. האם זה הגיוני?&rlm;",
        solution_steps: [
            { verbal_explanation: "במערכת של ישרים מקבילים, השיפועים שווים (החלק של ה-x זהה) אך המספרים החופשיים שונים.", math_expression: "mx + b_1 = mx + b_2" },
            { verbal_explanation: "כאשר ננסה לפתור, איברי ה-x יבטלו זה את זה (mx פחות mx).", math_expression: "" },
            { verbal_explanation: "נישאר עם שוויון בין שני מספרים שונים (למשל 5 = 2), שזהו פסוק שקר. זה מראה מתמטית שאין פתרון - אין נקודת חיתוך.", math_expression: "" }
        ],
        final_answer: "נקבל פסוק שקר שתמיד שגוי (למשל 0 = 5)."
    },
    // שאלה 47
    {
        topic: "linear_functions",
        subTopic: "מצב הדדי בין ישרים",
        question_text: "מצאו את נקודת החיתוך בין הישר y = 2x - 4 לבין ציר ה-x (משוואת ציר ה-x היא y = 0).&rlm;",
        options: ["(2, 0)", "(0, -4)", "(-2, 0)", "(4, 0)"],
        correctAnswer: 0,
        hint: "זוהי למעשה שאלה של חיתוך שני ישרים: הישר הנתון והישר y=0. הציבו 0 = 2x - 4.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': ציר ה-x משמש כישר לכל דבר שמשוואתו היא y=0. נציב זאת במשוואת הישר הנתון.", math_expression: "0 = 2x - 4" },
            { verbal_explanation: "שלב ב': נעביר את 4 לצד השני בסימן חיובי.", math_expression: "4 = 2x" },
            { verbal_explanation: "שלב ג': נחלק ב-2.", math_expression: "x = 2" },
            { verbal_explanation: "שלב ד': נקודת החיתוך מורכבת מ-x ומ-y.", math_expression: "(2, 0)" }
        ],
        final_answer: "(2, 0)"
    },
    // שאלה 48
    {
        topic: "linear_functions",
        subTopic: "מצב הדדי בין ישרים",
        question_text: "נתונים 3 ישרים: 1) y = 4x , 2) y = 4x + 10 , 3) y = -0.25x. מי מהם מאונך למי?&rlm;",
        options: ["ישר 1 וישר 3 מאונכים זה לזה.", "ישר 1 וישר 2 מאונכים זה לזה.", "ישר 2 וישר 3 מקבילים זה לזה.", "שלושתם מאונכים."],
        correctAnswer: 0,
        hint: "בדקו את השיפועים. ב-1 הוא 4. ב-2 הוא 4. ב-3 הוא 1/4-. מי מהם 'הופכי ונגדי' (מכפלתם מינוס 1)?&rlm;",
        solution_steps: [
            { verbal_explanation: "ישרים 1 ו-2 בעלי שיפוע 4, לכן הם מקבילים זה לזה.", math_expression: "" },
            { verbal_explanation: "השיפוע של ישר 3 הוא מינוס רבע (-0.25).", math_expression: "m_3 = -1 : 4" },
            { verbal_explanation: "נבדוק את מכפלת השיפועים של 1 ו-3. 4 כפול מינוס רבע שווה למינוס 1.", math_expression: "4 × (-0.25) = -1" },
            { verbal_explanation: "מכיוון שהמכפלה היא מינוס 1, הישרים מאונכים.", math_expression: "" }
        ],
        final_answer: "ישר 1 וישר 3 מאונכים זה לזה."
    },

    // ==========================================================
    // תת נושא 5: פונקציה קווית למקוטעין (12 שאלות)
    // ==========================================================
    
    // שאלה 49
    {
        topic: "linear_functions",
        subTopic: "פונקציה קווית למקוטעין",
        question_text: "מהי פונקציה קווית 'למקוטעין'?&rlm;",
        options: ["פונקציה המורכבת ממספר קטעים של קווים ישרים שונים המחוברים זה לזה, שלכל אחד מהם שיפוע (חוקיות) משלו בתחום אחר.", "פונקציה שמצוירת בקווים מקווקווים ולא בקו רציף.", "פונקציה שיש בה שברים עשרוניים.", "פונקציה שלעולם לא חותכת את ציר ה-x."],
        correctAnswer: 0,
        hint: "תחשבו על מסלול הליכה: בהתחלה הולכים מהר (שיפוע תלול), אחר כך עוצרים לנוח (שיפוע אפס), ואז ממשיכים לאט (שיפוע מתון). כל חלק כזה הוא 'מקטע'.&rlm;",
        solution_steps: [
            { verbal_explanation: "במציאות, תהליכים לא תמיד שומרים על קצב קבוע לאורך כל הדרך.&rlm;", math_expression: "" },
            { verbal_explanation: "לכן, אנו משתמשים בפונקציה למקוטעין: פונקציה שמחלקת את ציר ה-x ל'אזורים', ובכל אזור מציירת ישר אחר עם משוואה משלו.&rlm;", math_expression: "" }
        ],
        final_answer: "פונקציה המורכבת ממספר קטעים של קווים ישרים שונים המחוברים זה לזה, שלכל אחד מהם שיפוע (חוקיות) משלו בתחום אחר."
    },
    // שאלה 50
    {
        topic: "linear_functions",
        subTopic: "פונקציה קווית למקוטעין",
        question_text: "גרף מציג מרחק של רוכב אופניים מהבית לפי זמן. מ-0 עד שעתיים (x=2) הקו עולה ל-40 ק\"מ. משעתיים עד 3 שעות (x=3) הקו הוא אופקי (נשאר על 40). מה קרה בשעה השלישית?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 200 120' width='100%' height='120' style='max-width:200px;'><line x1='20' y1='100' x2='180' y2='100' stroke='#334155' stroke-width='2'/><line x1='20' y1='10' x2='20' y2='100' stroke='#334155' stroke-width='2'/><polyline points='20,100 80,40 120,40 160,80' fill='none' stroke='#3b82f6' stroke-width='3'/><text x='75' y='115' font-family='Arial' font-size='10'>2</text><text x='115' y='115' font-family='Arial' font-size='10'>3</text><text x='5' y='45' font-family='Arial' font-size='10'>40</text></svg></div>",
        options: ["הרוכב עצר למנוחה (המרחק לא השתנה, שיפוע 0).", "הרוכב רכב במהירות גבוהה מאוד.", "הרוכב חזר הביתה.", "הרוכב נסע במישור ללא עליות."],
        correctAnswer: 0,
        hint: "ציר y מראה את המרחק מהבית. אם ה-y נשאר על 40 במשך שעה, המרחק לא גדל ולא קטן.&rlm;",
        solution_steps: [
            { verbal_explanation: "במקטע שבין השעה ה-2 לשעה ה-3, הגרף הוא קו אופקי. כלומר השיפוע הוא אפס.", math_expression: "m = 0" },
            { verbal_explanation: "מבחינה מילולית, קצב השינוי במרחק הוא אפס - משמע, הרוכב לא זז ממקומו ולכן עצר למנוחה.", math_expression: "" }
        ],
        final_answer: "הרוכב עצר למנוחה (המרחק לא השתנה, שיפוע 0)."
    },
    // שאלה 51
    {
        topic: "linear_functions",
        subTopic: "פונקציה קווית למקוטעין",
        question_text: "בהמשך לגרף הקודם: מ-x=3 עד x=4 הקו יורד מ-40 ל-20. מה המשמעות של ירידת הקו (שיפוע שלילי)?&rlm;",
        options: ["הרוכב הסתובב והתחיל לחזור לכיוון הבית.", "הרוכב רכב בירידה תלולה בהר.", "הרוכב האט את מהירותו אך המשיך קדימה.", "הזמן התחיל ללכת אחורה."],
        correctAnswer: 0,
        hint: "ציר ה-y הוא המרחק מהבית. כשה-y קטן, המרחק מהבית קטן.&rlm;",
        solution_steps: [
            { verbal_explanation: "שיפוע שלילי אומר שערך ה-y (המרחק מהבית) הולך וקטן ככל שהזמן (x) מתקדם.&rlm;", math_expression: "" },
            { verbal_explanation: "אם המרחק מהבית מצטמצם מ-40 ק\"מ ל-20 ק\"מ, המשמעות הפיזית היא שהרוכב שינה כיוון ורוכב כעת חזרה לביתו.&rlm;", math_expression: "" }
        ],
        final_answer: "הרוכב הסתובב והתחיל לחזור לכיוון הבית."
    },
    // שאלה 52
    {
        topic: "linear_functions",
        subTopic: "פונקציה קווית למקוטעין",
        question_text: "פונקציה מוגדרת כך: עבור x קטן מ-5, הפונקציה היא y = 2x. עבור x גדול מ-5, הפונקציה היא y = x + 5. חשבו את ערך הפונקציה עבור x = 3.&rlm;",
        options: ["6", "8", "11", "5"],
        correctAnswer: 0,
        hint: "המספר 3 קטן מ-5, לכן הוא נופל בתחום ה'שמאלי'. הציבו את 3 אך ורק במשוואה של התחום השמאלי (y = 2x).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נבדוק לאיזה תחום שייך הערך המבוקש. 3 הוא קטן מ-5.&rlm;", math_expression: "3 < 5" },
            { verbal_explanation: "שלב ב': נבחר את חוקיות הפונקציה המתאימה לתחום זה, שהיא y = 2x.&rlm;", math_expression: "y(x) = 2x" },
            { verbal_explanation: "שלב ג': נציב x=3 בתוך החוקיות שבחרנו.&rlm;", math_expression: "y = 2 × 3 = 6" }
        ],
        final_answer: "6"
    },
    // שאלה 53
    {
        topic: "linear_functions",
        subTopic: "פונקציה קווית למקוטעין",
        question_text: "בהמשך לשאלה הקודמת: חשבו את ערך הפונקציה עבור x = 10.&rlm;",
        options: ["15", "20", "25", "10"],
        correctAnswer: 0,
        hint: "המספר 10 גדול מ-5, לכן הוא נופל בתחום ה'ימני'. השתמשו במשוואה y = x + 5.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נבדוק לאיזה תחום שייך הערך המבוקש. 10 הוא גדול מ-5.&rlm;", math_expression: "10 > 5" },
            { verbal_explanation: "שלב ב': נבחר את חוקיות הפונקציה המתאימה לתחום זה, שהיא y = x + 5.&rlm;", math_expression: "y(x) = x + 5" },
            { verbal_explanation: "שלב ג': נציב x=10 בתוך החוקיות.&rlm;", math_expression: "y = 10 + 5 = 15" }
        ],
        final_answer: "15"
    },
    // שאלה 54
    {
        topic: "linear_functions",
        subTopic: "פונקציה קווית למקוטעין",
        question_text: "חברת מוניות גובה תשלום למקוטעין: 15 שקלים דמי נסיעה התחלתיים שמכסים את 2 הקילומטרים הראשונים (כלומר מחיר קבוע). לאחר מכן, כל קילומטר נוסף עולה 5 שקלים. איזו פונקציה תתאר את התשלום עבור נסיעה של x קילומטרים, כאשר x גדול מ-2?&rlm;",
        options: ["y = 15 + 5(x - 2)", "y = 15 + 5x", "y = 5x", "y = 20x - 2"],
        correctAnswer: 0,
        hint: "אתם משלמים 5 שקלים רק על הקילומטרים שחורגים מ-2. כמות הקילומטרים הנוספים היא (x-2). אליהם יש להוסיף את ה-15 ההתחלתיים.&rlm;",
        solution_steps: [
            { verbal_explanation: "המחיר הבסיסי שמשולם בכל מקרה הוא 15.&rlm;", math_expression: "Base = 15" },
            { verbal_explanation: "מספר הקילומטרים שעליהם משלמים תוספת הוא המרחק הכולל (x) פחות 2 הקילומטרים הראשונים שכבר שולמו.&rlm;", math_expression: "Extra_km = x - 2" },
            { verbal_explanation: "העלות של הקילומטרים הנוספים היא 5 שקלים לכל אחד מהם.&rlm;", math_expression: "5 × (x - 2)" },
            { verbal_explanation: "הפונקציה הכוללת תחבר את שניהם יחד.&rlm;", math_expression: "y = 15 + 5(x - 2)" }
        ],
        final_answer: "y = 15 + 5(x - 2)"
    },
    // שאלה 55
    {
        topic: "linear_functions",
        subTopic: "פונקציה קווית למקוטעין",
        question_text: "כדי לשרטט בצורה מדויקת פונקציה למקוטעין, מה חובה לעשות ב'תפר' שבו מתחלפות המשוואות (למשל ב-x=5)?&rlm;",
        options: ["לחשב את ה-y באותה נקודה גם לפי המשוואה הראשונה וגם לפי השנייה, כדי לבדוק מאיפה הקו החדש מתחיל.", "לצייר תמיד קו אנכי שמחבר ביניהן.", "להתחיל את הקו החדש תמיד מ-y=0.", "לעשות הפסקה גדולה בשרטוט."],
        correctAnswer: 0,
        hint: "צריך לדעת באיזה גובה (y) נגמר המקטע הראשון, ובאיזה גובה מתחיל המקטע השני (לפעמים הם לא מחוברים!).&rlm;",
        solution_steps: [
            { verbal_explanation: "נקודת התפר היא הנקודה הקריטית בגרף. היא מסמנת את סוף האזור הראשון ותחילת השני.&rlm;", math_expression: "" },
            { verbal_explanation: "אנו מציבים את ה-x של התפר (נניח 5) במשוואה הראשונה כדי לצייר לה נקודת סיום (מלאה או ריקה).&rlm;", math_expression: "" },
            { verbal_explanation: "ומציבים אותו שוב במשוואה השנייה כדי לצייר לה נקודת התחלה. רק כך נדע אם הגרף רציף או שיש בו 'קפיצה'.&rlm;", math_expression: "" }
        ],
        final_answer: "לחשב את ה-y באותה נקודה גם לפי המשוואה הראשונה וגם לפי השנייה, כדי לבדוק מאיפה הקו החדש מתחיל."
    },
    // שאלה 56
    {
        topic: "linear_functions",
        subTopic: "פונקציה קווית למקוטעין",
        question_text: "חניון גובה תשלום באופן הבא: 10 שקלים לשעה הראשונה (או חלקה), ו-20 שקלים לכל שעה (או חלקה) לאחר מכן. כמה ישלם אדם שחנה 2.5 שעות?&rlm;",
        options: ["50 שקלים", "40 שקלים", "60 שקלים", "45 שקלים"],
        correctAnswer: 0,
        hint: "פונקציית 'מדרגות' (סוג של למקוטעין). חניה של 2.5 שעות נחשבת כ-3 שעות לעניין התשלום. שעה 1 = 10, שעה 2 = 20, שעה 3 = 20.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': חישוב העלות לשעה הראשונה (שעת חניה אחת מלאה).&rlm;", math_expression: "10" },
            { verbal_explanation: "שלב ב': נשארו 1.5 שעות. מכיוון שהתשלום הוא 'על כל שעה או חלקה', 1.5 השעות הנותרות יחויבו כ-2 שעות מלאות.&rlm;", math_expression: "2 × 20 = 40" },
            { verbal_explanation: "שלב ג': נחבר את התשלום של השעה הראשונה עם שאר השעות.&rlm;", math_expression: "10 + 40 = 50" }
        ],
        final_answer: "50 שקלים"
    },
    // שאלה 57
    {
        topic: "linear_functions",
        subTopic: "פונקציה קווית למקוטעין",
        question_text: "פונקציית ערך מוחלט |y = |x היא דוגמה קלאסית לפונקציה למקוטעין. מהן שתי המשוואות המרכיבות אותה?&rlm;",
        options: ["עבור x חיובי (או 0): y = x. עבור x שלילי: y = -x.", "y = x ו- y = 0.", "y = 2x ו- y = x.", "עבור x זוגי: y = x, עבור אי זוגי: y = -x."],
        correctAnswer: 0,
        hint: "הערך המוחלט משאיר מספרים חיוביים כמו שהם (y=x). אבל למספרים שליליים, הוא הופך אותם לחיוביים על ידי הוספת מינוס (y=-x, שזה מינוס כפול מינוס). צורת הגרף היא V.&rlm;",
        solution_steps: [
            { verbal_explanation: "כאשר x הוא מספר חיובי (למשל 5), הערך המוחלט שלו הוא 5. לכן בחלק הימני של הגרף, המשוואה היא קו ישר רגיל y = x.&rlm;", math_expression: "" },
            { verbal_explanation: "כאשר x הוא שלילי (למשל 5-), הערך המוחלט 'מכריח' אותו להיות חיובי על ידי כפל במינוס אחד (-(-5) = 5). לכן בחלק השמאלי, המשוואה היא y = -x.&rlm;", math_expression: "" }
        ],
        final_answer: "עבור x חיובי (או 0): y = x. עבור x שלילי: y = -x."
    },
    // שאלה 58
    {
        topic: "linear_functions",
        subTopic: "פונקציה קווית למקוטעין",
        question_text: "בריכה מתרוקנת ממים. בין השעה 8:00 לשעה 10:00 קצב הריקון היה 10 ליטר לדקה. בין 10:00 ל-12:00 קצב הריקון היה 5 ליטר לדקה. באיזה מקטע הגרף יהיה 'תלול' יותר?&rlm;",
        options: ["במקטע הראשון (מ-8:00 עד 10:00), כי קצב השינוי גדול יותר.", "במקטע השני, כי השעה מאוחרת יותר.", "בשניהם הגרף ייראה אותו דבר.", "אי אפשר לדעת בלי לדעת את כמות המים הכוללת."],
        correctAnswer: 0,
        hint: "תלילות (שיפוע) משקפת את המהירות (קצב). ככל שמוציאים יותר מים בדקה, הקו צונח למטה מהר יותר ובצורה תלולה יותר.&rlm;",
        solution_steps: [
            { verbal_explanation: "שיפוע הפונקציה מציין את קצב שינוי הנתונים. קצב הריקון הראשון הוא 10- ליטר/דקה, והשני הוא 5- ליטר/דקה.&rlm;", math_expression: "m_1 = -10 , m_2 = -5" },
            { verbal_explanation: "הערך המוחלט של השיפוע הראשון (|10-| = 10) גדול מהערך המוחלט של השני (|5-| = 5).&rlm;", math_expression: "" },
            { verbal_explanation: "ככל שהערך המוחלט של השיפוע גדול יותר, הישר קרוב יותר לעמוד זקוף (תלול יותר).&rlm;", math_expression: "" }
        ],
        final_answer: "במקטע הראשון (מ-8:00 עד 10:00), כי קצב השינוי גדול יותר."
    },
    // שאלה 59
    {
        topic: "linear_functions",
        subTopic: "פונקציה קווית למקוטעין",
        question_text: "פונקציה למקוטעין מורכבת מ-2 מקטעים. מקטע ראשון: y = 2x מ- x=0 עד x=3. מקטע שני מתחיל ב-x=3 ומסתיים ב-x=5 עם שיפוע 0. מה ערך הפונקציה (y) כאשר x=4?&rlm;",
        options: ["6", "0", "8", "4"],
        correctAnswer: 0,
        hint: "אם השיפוע במקטע השני הוא 0, זה אומר שהגובה נשאר קבוע. באיזה גובה הסתיים המקטע הראשון? הציבו x=3 במשוואה 2x.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נמצא את גובה 'נקודת התפר' (כאשר x=3) על ידי הצבה במשוואה הראשונה.&rlm;", math_expression: "y(3) = 2 × 3 = 6" },
            { verbal_explanation: "שלב ב': נתון שבמקטע השני (מ-x=3 והלאה) השיפוע הוא 0. זה אומר שערך ה-y נשאר קבוע ולא משתנה.&rlm;", math_expression: "y = 6" },
            { verbal_explanation: "שלב ג': מכיוון ש-x=4 נופל בתוך המקטע השני, ערך ה-y שלו הוא פשוט הגובה הקבוע 6.&rlm;", math_expression: "y(4) = 6" }
        ],
        final_answer: "6"
    },
    // שאלה 60
    {
        topic: "linear_functions",
        subTopic: "פונקציה קווית למקוטעין",
        question_text: "גרף מציג הפקדות ומשיכות מחשבון בנק לאורך החודש. אילו קטעים בגרף ייצגו הפקדות כספים ואילו ייצגו משיכות (או תשלומים)?&rlm;",
        options: ["הפקדות ייוצגו על ידי קטעים עולים (שיפוע חיובי), ומשיכות על ידי קטעים יורדים (שיפוע שלילי).", "כולם יהיו קטעים עולים, רק בצבעים שונים.", "הפקדות יהיו קווים אנכיים.", "הגרף יהיה עיגול."],
        correctAnswer: 0,
        hint: "כאשר אנו מפקידים כסף, היתרה בבנק (ה-y) גדלה (הקו מטפס). כשמושכים כסף, היתרה קטנה (הקו יורד).&rlm;",
        solution_steps: [
            { verbal_explanation: "ציר y מייצג את יתרת הכסף בחשבון. הפקדה גורמת ליתרה לגדול, ולכן ערך ה-y יעלה (שיפוע חיובי).&rlm;", math_expression: "m > 0" },
            { verbal_explanation: "משיכת כסף מקטינה את היתרה בחשבון. לכן הגרף יירד כלפי מטה לאורך ציר ה-x של הזמן (שיפוע שלילי).&rlm;", math_expression: "m < 0" }
        ],
        final_answer: "הפקדות ייוצגו על ידי קטעים עולים (שיפוע חיובי), ומשיכות על ידי קטעים יורדים (שיפוע שלילי)."
    }

];