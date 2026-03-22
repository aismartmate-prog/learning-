// ========================================================================
// שכבת גיל: כיתה ז' | נושא: חזקות ושורשים
// 4 תתי נושאים | 48 שאלות סה"כ 
// פתרונות מפורטים מאוד בשלבים. 
// כתיבה נקייה ובטוחה: חזקות בתווים עיליים (ללא כובע ^), × לכפל, : לחילוק.
// ========================================================================

const questionsDB = [

    // ==========================================================
    // תת נושא 1: מושג החזקה (12 שאלות)
    // ==========================================================
    
    // שאלה 1
    {
        topic: "powers_and_roots",
        subTopic: "מושג החזקה",
        question_text: "כיצד נכתוב את תרגיל הכפל הבא בצורה מקוצרת בעזרת חזקה?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>7 × 7 × 7 × 7 = ?</div>",
        options: ["7⁴", "4⁷", "7 × 4", "4 × 4 × 4 × 4 × 4 × 4 × 4"],
        correctAnswer: 0,
        hint: "חזקה היא דרך קצרה לכתוב כפל חוזר של אותו מספר. המספר שמוכפל נכתב למטה (בסיס), ומספר הפעמים שהוא מופיע נכתב למעלה (מעריך).&rlm;",
        solution_steps: [
            { verbal_explanation: "נזהה איזה מספר מוכפל בעצמו. המספר הוא 7, ולכן הוא יהיה 'בסיס החזקה'.&rlm;", math_expression: "" },
            { verbal_explanation: "נספור כמה פעמים המספר 7 מופיע בתרגיל הכפל. הוא מופיע 4 פעמים, לכן 'מעריך החזקה' יהיה 4.&rlm;", math_expression: "" },
            { verbal_explanation: "נרשום את הבסיס (7) עם המעריך (4) בפינה הימנית העליונה.&rlm;", math_expression: "7⁴" }
        ],
        final_answer: "7⁴"
    },
    // שאלה 2
    {
        topic: "powers_and_roots",
        subTopic: "מושג החזקה",
        question_text: "איזה תרגיל כפל מתואר על ידי החזקה 2⁵?&rlm;",
        options: ["2 × 2 × 2 × 2 × 2", "5 × 5", "2 × 5", "2 + 2 + 2 + 2 + 2"],
        correctAnswer: 0,
        hint: "הבסיס הוא המספר שאותו כופלים. המעריך אומר לנו כמה פעמים לרשום אותו בכפל.&rlm;",
        solution_steps: [
            { verbal_explanation: "בסיס החזקה הוא 2. זהו המספר שמוכפל בעצמו.&rlm;", math_expression: "" },
            { verbal_explanation: "מעריך החזקה הוא 5. כלומר, עלינו לרשום את המספר 2 בכפל בדיוק 5 פעמים.&rlm;", math_expression: "2 × 2 × 2 × 2 × 2" }
        ],
        final_answer: "2 × 2 × 2 × 2 × 2"
    },
    // שאלה 3
    {
        topic: "powers_and_roots",
        subTopic: "מושג החזקה",
        question_text: "מהי המשמעות של הביטוי 10³?&rlm;",
        options: ["10 × 10 × 10", "10 + 10 + 10", "10 × 3", "3 × 3 × 3 × 3 × 3 × 3 × 3 × 3 × 3 × 3"],
        correctAnswer: 0,
        hint: "זהו לא תרגיל חיבור ולא כפל רגיל ב-3. זוהי הכפלה של המספר 10 בעצמו.&rlm;",
        solution_steps: [
            { verbal_explanation: "המספר הגדול (הבסיס) הוא 10. המספר הקטן למעלה (המעריך) הוא 3.&rlm;", math_expression: "" },
            { verbal_explanation: "המעריך 3 מורה לנו לכפול את הבסיס 10 בעצמו 3 פעמים ברצף.&rlm;", math_expression: "10 × 10 × 10" }
        ],
        final_answer: "10 × 10 × 10"
    },
    // שאלה 4
    {
        topic: "powers_and_roots",
        subTopic: "מושג החזקה",
        question_text: "חשבו את הערך של 3⁴:&rlm;",
        options: ["81", "12", "64", "27"],
        correctAnswer: 0,
        hint: "רשמו את התרגיל המלא: 3 × 3 × 3 × 3. פתרו בשלבים: 3 כפול 3 שווה 9, ואז הכפילו שוב...&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נתרגם את החזקה לתרגיל כפל חוזר.&rlm;", math_expression: "3 × 3 × 3 × 3" },
            { verbal_explanation: "שלב ב': נכפול את שני ה-3 הראשונים.&rlm;", math_expression: "3 × 3 = 9" },
            { verbal_explanation: "שלב ג': נכפול את שני ה-3 האחרונים.&rlm;", math_expression: "3 × 3 = 9" },
            { verbal_explanation: "שלב ד': נכפול את התוצאות זו בזו.&rlm;", math_expression: "9 × 9 = 81" }
        ],
        final_answer: "81"
    },
    // שאלה 5
    {
        topic: "powers_and_roots",
        subTopic: "מושג החזקה",
        question_text: "מה תהיה התוצאה של התרגיל 1⁵?&rlm;",
        options: ["1", "5", "0", "15"],
        correctAnswer: 0,
        hint: "1 כפול 1 זה 1. כמה פעמים שלא תכפילו את הספרה 1 בעצמה, התוצאה לא תשתנה.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרשום את התרגיל המלא לפי החזקה.&rlm;", math_expression: "1 × 1 × 1 × 1 × 1" },
            { verbal_explanation: "שלב ב': נחשב. אחד כפול אחד שווה לאחד. התוצאה תמיד נשארת 1.&rlm;", math_expression: "1" }
        ],
        final_answer: "1"
    },
    // שאלה 6
    {
        topic: "powers_and_roots",
        subTopic: "מושג החזקה",
        question_text: "איזה מספר גדול יותר?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>2³  או  3²</div>",
        options: ["3²", "2³", "הם שווים", "אי אפשר לדעת"],
        correctAnswer: 0,
        hint: "חשבו כל חזקה בנפרד. 2³ זה 2×2×2. ומה זה 3²?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את הערך של 2³ (שתיים בשלישית).&rlm;", math_expression: "2³ = 2 × 2 × 2 = 8" },
            { verbal_explanation: "שלב ב': נחשב את הערך של 3² (שלוש בריבוע).&rlm;", math_expression: "3² = 3 × 3 = 9" },
            { verbal_explanation: "שלב ג': נשווה בין התוצאות. 9 גדול מ-8.&rlm;", math_expression: "9 > 8" }
        ],
        final_answer: "3²"
    },
    // שאלה 7
    {
        topic: "powers_and_roots",
        subTopic: "מושג החזקה",
        question_text: "מהי המשמעות של חזקה שבה המעריך הוא 1 (למשל 8¹)?&rlm;",
        options: ["המספר נשאר כמו שהוא (8)", "התוצאה היא 1", "כופלים ב-1", "התוצאה היא 0"],
        correctAnswer: 0,
        hint: "המעריך אומר כמה פעמים רושמים את הבסיס. אם המעריך הוא 1, רושמים את הבסיס פעם אחת בלבד.&rlm;",
        solution_steps: [
            { verbal_explanation: "הביטוי 8¹ אומר 'לרשום את המספר 8 פעם אחת'.&rlm;", math_expression: "8¹ = 8" },
            { verbal_explanation: "לכן, כל מספר בחזקת 1 שווה לעצמו.&rlm;", math_expression: "" }
        ],
        final_answer: "המספר נשאר כמו שהוא (8)"
    },
    // שאלה 8
    {
        topic: "powers_and_roots",
        subTopic: "מושג החזקה",
        question_text: "כמה אפסים יש במספר 10⁶?&rlm;",
        options: ["6 אפסים", "5 אפסים", "7 אפסים", "10 אפסים"],
        correctAnswer: 0,
        hint: "כשמעלים את 10 בחזקה, המעריך מציין בדיוק את מספר האפסים שיהיו אחרי הספרה 1.&rlm;",
        solution_steps: [
            { verbal_explanation: "נרשום את תרגיל הכפל.&rlm;", math_expression: "10 × 10 × 10 × 10 × 10 × 10" },
            { verbal_explanation: "כאשר כופלים עשרות, מוסיפים אפס על כל הכפלה.&rlm;", math_expression: "1,000,000" },
            { verbal_explanation: "מיליון הוא מספר בעל 6 אפסים.&rlm;", math_expression: "" }
        ],
        final_answer: "6 אפסים"
    },
    // שאלה 9
    {
        topic: "powers_and_roots",
        subTopic: "מושג החזקה",
        question_text: "כתבו את התוצאה של התרגיל: 0³&rlm;",
        options: ["0", "3", "1", "אי אפשר לחשב"],
        correctAnswer: 0,
        hint: "אפס כפול אפס תמיד נשאר אפס.&rlm;",
        solution_steps: [
            { verbal_explanation: "החזקה מורה לנו לכפול את 0 בעצמו 3 פעמים.&rlm;", math_expression: "0 × 0 × 0" },
            { verbal_explanation: "מכפלה של אפסים היא תמיד 0.&rlm;", math_expression: "0" }
        ],
        final_answer: "0"
    },
    // שאלה 10
    {
        topic: "powers_and_roots",
        subTopic: "מושג החזקה",
        question_text: "איזה מספר יש להשלים כדי שהשוויון יהיה נכון?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>5 × 5 × 5 = ?³</div>",
        options: ["5", "3", "15", "125"],
        correctAnswer: 0,
        hint: "המספר שמוכפל בעצמו הוא בסיס החזקה (המספר הגדול למטה).&rlm;",
        solution_steps: [
            { verbal_explanation: "המעריך ³ כבר רשום, והוא מציין שהכפלנו מספר בעצמו 3 פעמים.&rlm;", math_expression: "" },
            { verbal_explanation: "המספר שאותו אנו כופלים 3 פעמים הוא 5. לכן 5 הוא הבסיס.&rlm;", math_expression: "5³" }
        ],
        final_answer: "5"
    },
    // שאלה 11
    {
        topic: "powers_and_roots",
        subTopic: "מושג החזקה",
        question_text: "המספר 64 יכול להיכתב כחזקה של 2. כיצד?&rlm;",
        options: ["2⁶", "2⁵", "2⁴", "2⁸"],
        correctAnswer: 0,
        hint: "הכפילו את 2 בעצמו שוב ושוב וספרו כמה פעמים הכפלתם עד שהגעתם ל-64.&rlm;",
        solution_steps: [
            { verbal_explanation: "נתחיל לכפול את 2 בעצמו ונעקוב אחר התוצאה:&rlm;", math_expression: "" },
            { verbal_explanation: "פעם 1: 2. פעם 2: 4. פעם 3: 8. פעם 4: 16. פעם 5: 32. פעם 6: 64.&rlm;", math_expression: "2 × 2 × 2 × 2 × 2 × 2 = 64" },
            { verbal_explanation: "הכפלנו את 2 בעצמו 6 פעמים, ולכן זו חזקה שישית.&rlm;", math_expression: "2⁶" }
        ],
        final_answer: "2⁶"
    },
    // שאלה 12
    {
        topic: "powers_and_roots",
        subTopic: "מושג החזקה",
        question_text: "כיצד נכתוב בחזקה את תרגיל הכפל הבא של שברים?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>1/4 × 1/4 × 1/4 = ?</div>",
        options: ["(1/4)³", "1/4³", "3 × 1/4", "(3/4)³"],
        correctAnswer: 0,
        hint: "כאשר הבסיס הוא שבר, חובה לעטוף אותו בסוגריים כדי להראות שהחזקה פועלת גם על המונה וגם על המכנה.&rlm;",
        solution_steps: [
            { verbal_explanation: "הבסיס הוא השבר רבע (1/4), מכיוון שהוא זה שמוכפל.&rlm;", math_expression: "" },
            { verbal_explanation: "הוא מופיע 3 פעמים בכפל, ולכן המעריך הוא 3.&rlm;", math_expression: "" },
            { verbal_explanation: "חובה להשתמש בסוגריים סביב השבר, כדי שהחזקה לא תחול רק על המונה.&rlm;", math_expression: "(1/4)³" }
        ],
        final_answer: "(1/4)³"
    },

    // ==========================================================
    // תת נושא 2: בסיס ומעריך (12 שאלות)
    // ==========================================================
    
    // שאלה 13
    {
        topic: "powers_and_roots",
        subTopic: "בסיס ומעריך",
        question_text: "בחזקה 8³, מהו בסיס החזקה?&rlm;",
        options: ["8", "3", "24", "83"],
        correctAnswer: 0,
        hint: "הבסיס הוא המספר הגדול שנכתב למטה, שהוא המספר המוכפל.&rlm;",
        solution_steps: [
            { verbal_explanation: "ביטוי חזקה מורכב משני חלקים: בסיס (למטה) ומעריך (בקטן למעלה).&rlm;", math_expression: "" },
            { verbal_explanation: "המספר שנכתב למטה הוא 8. לכן 8 הוא הבסיס.&rlm;", math_expression: "" }
        ],
        final_answer: "8"
    },
    // שאלה 14
    {
        topic: "powers_and_roots",
        subTopic: "בסיס ומעריך",
        question_text: "בחזקה 5⁴, מהו מעריך החזקה?&rlm;",
        options: ["4", "5", "20", "625"],
        correctAnswer: 0,
        hint: "המעריך הוא המספר הקטן שנכתב בפינה הימנית העליונה, ומראה כמה פעמים לכפול.&rlm;",
        solution_steps: [
            { verbal_explanation: "המספר שנמצא בפינה העליונה הוא המעריך.&rlm;", math_expression: "" },
            { verbal_explanation: "המספר הקטן בביטוי הוא 4. לכן 4 הוא מעריך החזקה.&rlm;", math_expression: "" }
        ],
        final_answer: "4"
    },
    // שאלה 15
    {
        topic: "powers_and_roots",
        subTopic: "בסיס ומעריך",
        question_text: "אם ידוע שבסיס החזקה הוא 10, ומעריך החזקה הוא 4, למה שווה התוצאה?&rlm;",
        options: ["10,000", "40", "1,000", "40,000"],
        correctAnswer: 0,
        hint: "בנו את החזקה: 10 למטה, 4 למעלה. בחזקות של 10, המעריך שווה למספר האפסים.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרכיב את ביטוי החזקה מהנתונים. הבסיס 10, המעריך 4.&rlm;", math_expression: "10⁴" },
            { verbal_explanation: "שלב ב': נתרגם לכפל. 10 כפול עצמו 4 פעמים.&rlm;", math_expression: "10 × 10 × 10 × 10" },
            { verbal_explanation: "שלב ג': התוצאה היא 1 ולאחריו ארבעה אפסים.&rlm;", math_expression: "10,000" }
        ],
        final_answer: "10,000"
    },
    // שאלה 16
    {
        topic: "powers_and_roots",
        subTopic: "בסיס ומעריך",
        question_text: "חשבו את התוצאה של: 2⁵&rlm;",
        options: ["32", "10", "25", "64"],
        correctAnswer: 0,
        hint: "הכפילו 2 בעצמו 5 פעמים. (2 כפול 2 זה 4, כפול 2 זה 8, כפול 2 זה 16...)&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרשום את התרגיל.&rlm;", math_expression: "2 × 2 × 2 × 2 × 2" },
            { verbal_explanation: "שלב ב': נפתור בשלבים. ארבע כפול שתיים זה 8, שמונה כפול שתיים 16, ושש-עשרה כפול שתיים זה 32.&rlm;", math_expression: "4 × 2 × 2 × 2  =>  8 × 2 × 2  =>  16 × 2 = 32" }
        ],
        final_answer: "32"
    },
    // שאלה 17
    {
        topic: "powers_and_roots",
        subTopic: "בסיס ומעריך",
        question_text: "כאשר המעריך של חזקה הוא 2 (למשל 7²), מה הכינוי המקובל לפעולה זו?&rlm;",
        options: ["העלאה בריבוע", "העלאה בשלישית", "כפל כפול", "שורש"],
        correctAnswer: 0,
        hint: "זה קשור לצורה הגיאומטרית ששטחה מחושב על ידי הכפלת צלע בעצמה.&rlm;",
        solution_steps: [
            { verbal_explanation: "כאשר מעלים מספר בחזקת 2, הפעולה משולה לחישוב שטח של ריבוע שאורך צלעו הוא הבסיס.&rlm;", math_expression: "" },
            { verbal_explanation: "לכן השתרש השם 'העלאה בריבוע' (Squared באנגלית).&rlm;", math_expression: "" }
        ],
        final_answer: "העלאה בריבוע"
    },
    // שאלה 18
    {
        topic: "powers_and_roots",
        subTopic: "בסיס ומעריך",
        question_text: "אם בסיס החזקה הוא 0 ומעריך החזקה הוא 5, מה תהיה התוצאה?&rlm;",
        options: ["0", "5", "1", "אי אפשר לדעת"],
        correctAnswer: 0,
        hint: "התרגיל הוא 0 בחזקת 5. כמה זה אפס כפול אפס (חמש פעמים)?&rlm;",
        solution_steps: [
            { verbal_explanation: "נרשום את הביטוי: הבסיס 0 עולה למעריך 5.&rlm;", math_expression: "0⁵" },
            { verbal_explanation: "נפרוס את הכפל.&rlm;", math_expression: "0 × 0 × 0 × 0 × 0 = 0" },
            { verbal_explanation: "אפס כפול כל מספר תמיד שווה לאפס.&rlm;", math_expression: "" }
        ],
        final_answer: "0"
    },
    // שאלה 19
    {
        topic: "powers_and_roots",
        subTopic: "בסיס ומעריך",
        question_text: "אם ידוע שבסיס החזקה הוא 1, והתוצאה הסופית של התרגיל היא 1. מה לא יכול להיות המעריך?&rlm;",
        options: ["הוא יכול להיות כל מספר, כי 1 בכל חזקה שווה 1", "הוא חייב להיות 0", "הוא חייב להיות 1", "הוא לא יכול להיות מספר אי-זוגי"],
        correctAnswer: 0,
        hint: "אם תכפילו 1 בעצמו 10 פעמים, 100 פעמים, או מיליון פעמים, מה תקבלו?&rlm;",
        solution_steps: [
            { verbal_explanation: "הבסיס הוא 1. 1 כפול 1 נותן תמיד 1.&rlm;", math_expression: "1 × 1 × ... × 1 = 1" },
            { verbal_explanation: "לכן, לא משנה איזה מספר יהיה המעריך (כמה פעמים נכפול), התוצאה תמיד תישאר 1.&rlm;", math_expression: "" }
        ],
        final_answer: "הוא יכול להיות כל מספר, כי 1 בכל חזקה שווה 1"
    },
    // שאלה 20
    {
        topic: "powers_and_roots",
        subTopic: "בסיס ומעריך",
        question_text: "חשבו את תוצאת החזקה עבור שבר עשרוני:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>0.5² = ?</div>",
        options: ["0.25", "2.5", "1.0", "0.10"],
        correctAnswer: 0,
        hint: "זהו תרגיל כפל: 0.5 כפול 0.5. כפלו 5 ב-5, והזיזו את הנקודה שני מקומות שמאלה.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': חזקת 2 מורה לנו לכפול את הבסיס בעצמו פעמיים.&rlm;", math_expression: "0.5 × 0.5" },
            { verbal_explanation: "שלב ב': נתעלם מהנקודות נכפול 5 ב-5.&rlm;", math_expression: "5 × 5 = 25" },
            { verbal_explanation: "שלב ג': בשני הגורמים יחד יש 2 ספרות אחרי הנקודה (אחת בכל גורם). נחזיר את הנקודה לתוצאה שני מקומות שמאלה.&rlm;", math_expression: "0.25" }
        ],
        final_answer: "0.25"
    },
    // שאלה 21
    {
        topic: "powers_and_roots",
        subTopic: "בסיס ומעריך",
        question_text: "כיצד נחשב את חזקת השבר הבאה?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(2/3)² = ?</div>",
        options: ["4/9", "2/9", "4/3", "1"],
        correctAnswer: 0,
        hint: "הסוגריים מראים שהחזקה פועלת גם על המונה (2 בריבוע) וגם על המכנה (3 בריבוע).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרשום את כפל השברים כפי שדורשת החזקה.&rlm;", math_expression: "(2/3) × (2/3)" },
            { verbal_explanation: "שלב ב': בכפל שברים כופלים מונה במונה ומכנה במכנה.&rlm;", math_expression: "(2 × 2) / (3 × 3)" },
            { verbal_explanation: "שלב ג': נחשב.&rlm;", math_expression: "4/9" }
        ],
        final_answer: "4/9"
    },
    // שאלה 22
    {
        topic: "powers_and_roots",
        subTopic: "בסיס ומעריך",
        question_text: "איזה מהמשפטים הבאים שגוי?&rlm;",
        options: ["3² = 2³", "4² = 2⁴", "5¹ = 5", "0⁴ = 0"],
        correctAnswer: 0,
        hint: "חשבו את שתי החזקות במשפט הראשון כדי לבדוק האם הם באמת שווים. מה זה 3² ומה זה 2³?&rlm;",
        solution_steps: [
            { verbal_explanation: "נבדוק את 4² לעומת 2⁴: שניהם שווים 16. השוויון נכון.&rlm;", math_expression: "16 = 16" },
            { verbal_explanation: "נבדוק את 3²: 3 כפול 3 שווה 9.&rlm;", math_expression: "3² = 9" },
            { verbal_explanation: "נבדוק את 2³: 2 כפול 2 כפול 2 שווה 8.&rlm;", math_expression: "2³ = 8" },
            { verbal_explanation: "9 אינו שווה ל-8, לכן משוואה זו שגויה.&rlm;", math_expression: "9 ≠ 8" }
        ],
        final_answer: "3² = 2³"
    },
    // שאלה 23
    {
        topic: "powers_and_roots",
        subTopic: "בסיס ומעריך",
        question_text: "אם הבסיס הוא 4 והתוצאה של החזקה היא 64. מהו המעריך?&rlm;",
        options: ["3", "16", "4", "2"],
        correctAnswer: 0,
        hint: "התחילו להכפיל 4 בעצמו: 4 כפול 4 זה 16... המשיכו עד שתגיעו ל-64 וספרו כמה פעמים הכפלתם.&rlm;",
        solution_steps: [
            { verbal_explanation: "נבדוק חזקות של 4 צעד אחר צעד.&rlm;", math_expression: "" },
            { verbal_explanation: "חזקת 1: 4.&rlm;", math_expression: "4¹ = 4" },
            { verbal_explanation: "חזקת 2: 4 כפול 4.&rlm;", math_expression: "4² = 16" },
            { verbal_explanation: "חזקת 3: 16 כפול 4 שווה 64.&rlm;", math_expression: "4³ = 16 × 4 = 64" },
            { verbal_explanation: "הכפלנו 3 פעמים, לכן המעריך הוא 3.&rlm;", math_expression: "" }
        ],
        final_answer: "3"
    },
    // שאלה 24
    {
        topic: "powers_and_roots",
        subTopic: "בסיס ומעריך",
        question_text: "מי מבין הבאים ייתן את התוצאה הקטנה ביותר?&rlm;",
        options: ["0⁵", "10⁰ (רמז: כל מספר בחזקת 0 הוא 1)", "2²", "1¹⁰"],
        correctAnswer: 0,
        hint: "חשבו את כולם: מה זה 0 בחזקת 5? ומה זה 1 בחזקת 10?&rlm;",
        solution_steps: [
            { verbal_explanation: "נבדוק את 1¹⁰: 1 כפול עצמו נשאר 1.&rlm;", math_expression: "1" },
            { verbal_explanation: "נבדוק את 2²: 2 כפול 2 שווה 4.&rlm;", math_expression: "4" },
            { verbal_explanation: "כל מספר (שאינו 0) בחזקת 0 שווה 1. לכן 10⁰ = 1.&rlm;", math_expression: "1" },
            { verbal_explanation: "נבדוק את 0⁵: אפס כפול עצמו תמיד שווה 0.&rlm;", math_expression: "0" },
            { verbal_explanation: "התוצאה הקטנה ביותר היא 0.&rlm;", math_expression: "" }
        ],
        final_answer: "0⁵"
    },

    // ==========================================================
    // תת נושא 3: סדר פעולות עם חזקות (12 שאלות)
    // ==========================================================
    
    // שאלה 25
    {
        topic: "powers_and_roots",
        subTopic: "סדר פעולות עם חזקות",
        question_text: "חשבו את תוצאת התרגיל:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>2 + 3² = ?</div>",
        options: ["11", "25", "8", "10"],
        correctAnswer: 0,
        hint: "לפי סדר פעולות חשבון, חזקה קודמת לחיבור! חשבו קודם את 3².&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': חזקות הן הפעולות החזקות ביותר אחרי סוגריים. לכן נחשב קודם את 3 בריבוע.&rlm;", math_expression: "3² = 9" },
            { verbal_explanation: "שלב ב': נציב את התוצאה ונבצע את החיבור.&rlm;", math_expression: "2 + 9 = 11" }
        ],
        final_answer: "11"
    },
    // שאלה 26
    {
        topic: "powers_and_roots",
        subTopic: "סדר פעולות עם חזקות",
        question_text: "חשבו את תוצאת התרגיל (שימו לב לסוגריים):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(2 + 3)² = ?</div>",
        options: ["25", "11", "13", "10"],
        correctAnswer: 0,
        hint: "סוגריים קודמים לחזקה. לכן, קודם חברו 2 ו-3, ואת התוצאה תעלו בריבוע.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': פעולת סוגריים היא תמיד הראשונה בסדר הפעולות.&rlm;", math_expression: "2 + 3 = 5" },
            { verbal_explanation: "שלב ב': כעת נעלה את התוצאה שקיבלנו בחזקה השנייה.&rlm;", math_expression: "5² = 25" }
        ],
        final_answer: "25"
    },
    // שאלה 27
    {
        topic: "powers_and_roots",
        subTopic: "סדר פעולות עם חזקות",
        question_text: "פתרו את התרגיל:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>5 × 2³ = ?</div>",
        options: ["40", "1000", "30", "15"],
        correctAnswer: 0,
        hint: "חזקה קודמת לכפל. חשבו קודם 2³, ולאחר מכן כפלו ב-5.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את החזקה.&rlm;", math_expression: "2³ = 2 × 2 × 2 = 8" },
            { verbal_explanation: "שלב ב': נכפול את ה-5 בתוצאת החזקה.&rlm;", math_expression: "5 × 8 = 40" }
        ],
        final_answer: "40"
    },
    // שאלה 28
    {
        topic: "powers_and_roots",
        subTopic: "סדר פעולות עם חזקות",
        question_text: "מה תהיה התוצאה כעת?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(5 × 2)³ = ?</div>",
        options: ["1000", "40", "100", "130"],
        correctAnswer: 0,
        hint: "סוגריים קודמים לכל. בצעו קודם את הכפל, ואז העלו את ה-10 בשלישית.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נפתור את מה שבתוך הסוגריים.&rlm;", math_expression: "5 × 2 = 10" },
            { verbal_explanation: "שלב ב': נעלה את התוצאה בחזקה שלישית.&rlm;", math_expression: "10³ = 10 × 10 × 10 = 1000" }
        ],
        final_answer: "1000"
    },
    // שאלה 29
    {
        topic: "powers_and_roots",
        subTopic: "סדר פעולות עם חזקות",
        question_text: "חשבו את ההפרש בין החזקות:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>10² - 4² = ?</div>",
        options: ["84", "36", "6", "116"],
        correctAnswer: 0,
        hint: "אין חוק מיוחד לחיסור חזקות. חשבו כל חזקה בנפרד, ואז בצעו את החיסור.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את ערך החזקה הראשונה.&rlm;", math_expression: "10² = 100" },
            { verbal_explanation: "שלב ב': נחשב את ערך החזקה השנייה.&rlm;", math_expression: "4² = 16" },
            { verbal_explanation: "שלב ג': נחסר את התוצאות.&rlm;", math_expression: "100 - 16 = 84" }
        ],
        final_answer: "84"
    },
    // שאלה 30
    {
        topic: "powers_and_roots",
        subTopic: "סדר פעולות עם חזקות",
        question_text: "סדר פעולות מעורב:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>20 - 2⁴ : 8 = ?</div>",
        options: ["18", "16", "0.5", "10"],
        correctAnswer: 0,
        hint: "הסדר הוא: 1) חזקה. 2) חילוק. 3) חיסור. פתרו שלב אחר שלב.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נפתור קודם את החזקה 2 ברביעית.&rlm;", math_expression: "2⁴ = 16" },
            { verbal_explanation: "שלב ב': נציב ונעבור לחילוק, שקודם לחיסור.&rlm;", math_expression: "20 - 16 : 8" },
            { verbal_explanation: "שלב ג': נבצע את החילוק.&rlm;", math_expression: "16 : 8 = 2" },
            { verbal_explanation: "שלב ד': לבסוף נבצע את החיסור.&rlm;", math_expression: "20 - 2 = 18" }
        ],
        final_answer: "18"
    },
    // שאלה 31
    {
        topic: "powers_and_roots",
        subTopic: "סדר פעולות עם חזקות",
        question_text: "חשבו את תוצאת הכפל הבאה:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>3² × 2² = ?</div>",
        options: ["36", "10", "24", "12"],
        correctAnswer: 0,
        hint: "חשבו כל חזקה לעצמה, ואז כפלו ביניהן. 9 כפול 4.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': חישוב החזקות בנפרד.&rlm;", math_expression: "3² = 9 , 2² = 4" },
            { verbal_explanation: "שלב ב': נכפול את שתי התוצאות.&rlm;", math_expression: "9 × 4 = 36" }
        ],
        final_answer: "36"
    },
    // שאלה 32
    {
        topic: "powers_and_roots",
        subTopic: "סדר פעולות עם חזקות",
        question_text: "פתרו את התרגיל:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(10 - 8)⁵ = ?</div>",
        options: ["32", "10", "25", "100000"],
        correctAnswer: 0,
        hint: "פעולת הסוגריים היא המלכה. חשבו 10 פחות 8, ואז העלו בחזקת 5.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': פתרון הסוגריים.&rlm;", math_expression: "10 - 8 = 2" },
            { verbal_explanation: "שלב ב': העלאת התוצאה למעריך הנדרש.&rlm;", math_expression: "2⁵ = 32" }
        ],
        final_answer: "32"
    },
    // שאלה 33
    {
        topic: "powers_and_roots",
        subTopic: "סדר פעולות עם חזקות",
        question_text: "חשבו את תוצאת התרגיל:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>5² + 2 × 3 = ?</div>",
        options: ["31", "81", "35", "135"],
        correctAnswer: 0,
        hint: "הסדר הוא: חזקה, אח\"כ כפל, ולבסוף חיבור. (25 ועוד 6).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': חישוב החזקה.&rlm;", math_expression: "5² = 25" },
            { verbal_explanation: "שלב ב': חישוב פעולת הכפל.&rlm;", math_expression: "2 × 3 = 6" },
            { verbal_explanation: "שלב ג': נחבר את התוצאות.&rlm;", math_expression: "25 + 6 = 31" }
        ],
        final_answer: "31"
    },
    // שאלה 34
    {
        topic: "powers_and_roots",
        subTopic: "סדר פעולות עם חזקות",
        question_text: "שימו לב לכפל ולחילוק. פתרו לפי הסדר:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>100 : 5² × 2 = ?</div>",
        options: ["8", "2", "20", "4"],
        correctAnswer: 0,
        hint: "קודם חזקה (25). אחר כך סדר הפעולות הוא משמאל לימין - חילוק ואז כפל.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את החזקה.&rlm;", math_expression: "5² = 25" },
            { verbal_explanation: "שלב ב': כעת התרגיל הוא 100 לחלק ל-25 כפול 2. נבצע את החילוק משמאל.&rlm;", math_expression: "100 : 25 = 4" },
            { verbal_explanation: "שלב ג': נכפול את התוצאה ב-2.&rlm;", math_expression: "4 × 2 = 8" }
        ],
        final_answer: "8"
    },
    // שאלה 35
    {
        topic: "powers_and_roots",
        subTopic: "סדר פעולות עם חזקות",
        question_text: "חשבו את תוצאת החילוק של שתי החזקות:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>4³ : 2³ = ?</div>",
        options: ["8", "2", "4", "16"],
        correctAnswer: 0,
        hint: "חשבו כל חזקה בנפרד ואז בצעו את החילוק. 4³ זה 64.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את 4 בשלישית.&rlm;", math_expression: "4³ = 4 × 4 × 4 = 64" },
            { verbal_explanation: "שלב ב': נחשב את 2 בשלישית.&rlm;", math_expression: "2³ = 2 × 2 × 2 = 8" },
            { verbal_explanation: "שלב ג': נחלק את התוצאות זו בזו.&rlm;", math_expression: "64 : 8 = 8" }
        ],
        final_answer: "8"
    },
    // שאלה 36
    {
        topic: "powers_and_roots",
        subTopic: "סדר פעולות עם חזקות",
        question_text: "סכום של שלוש חזקות עוקבות:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>1² + 2² + 3² = ?</div>",
        options: ["14", "12", "36", "15"],
        correctAnswer: 0,
        hint: "חשבו כל אחת מהחזקות: 1 בריבוע זה 1, 2 בריבוע זה 4, ו-3 בריבוע זה 9. חברו הכל.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': חישוב החזקות בנפרד.&rlm;", math_expression: "1² = 1 , 2² = 4 , 3² = 9" },
            { verbal_explanation: "שלב ב': חיבור התוצאות.&rlm;", math_expression: "1 + 4 + 9 = 14" }
        ],
        final_answer: "14"
    },

    // ==========================================================
    // תת נושא 4: שורש ריבועי (12 שאלות)
    // ==========================================================
    
    // שאלה 37
    {
        topic: "powers_and_roots",
        subTopic: "שורש ריבועי",
        question_text: "מהי תוצאת השורש הריבועי הבא?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>√25 = ?</div>",
        options: ["5", "12.5", "50", "2"],
        correctAnswer: 0,
        hint: "שורש ריבועי הוא הפעולה ההפוכה להעלאה בריבוע. שאלו את עצמכם: איזה חיובי מספר כפול עצמו שווה ל-25?&rlm;",
        solution_steps: [
            { verbal_explanation: "שורש ריבועי של מספר מחפש את המספר החיובי שאם נכפיל אותו בעצמו, נקבל את המספר שבתוך השורש.&rlm;", math_expression: "" },
            { verbal_explanation: "אנו יודעים ש- 5 כפול 5 שווה ל-25.&rlm;", math_expression: "5² = 25" },
            { verbal_explanation: "לכן השורש של 25 הוא 5.&rlm;", math_expression: "√25 = 5" }
        ],
        final_answer: "5"
    },
    // שאלה 38
    {
        topic: "powers_and_roots",
        subTopic: "שורש ריבועי",
        question_text: "חשבו את הערך של שורש 100:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>√100 = ?</div>",
        options: ["10", "50", "1000", "20"],
        correctAnswer: 0,
        hint: "איזה מספר שלם כפול עצמו ייתן לנו 100?&rlm;",
        solution_steps: [
            { verbal_explanation: "אנו מחפשים מספר שכאשר מועלה בריבוע שווה ל-100.&rlm;", math_expression: "x × x = 100" },
            { verbal_explanation: "המספר הוא 10, כי עשר כפול עשר שווה מאה.&rlm;", math_expression: "10² = 100  =>  √100 = 10" }
        ],
        final_answer: "10"
    },
    // שאלה 39
    {
        topic: "powers_and_roots",
        subTopic: "שורש ריבועי",
        question_text: "איזה מספר יש להוציא לו שורש ריבועי כדי לקבל 9?&rlm;",
        options: ["81", "3", "18", "4.5"],
        correctAnswer: 0,
        hint: "זו שאלה הפוכה. עליכם להעלות את המספר 9 בריבוע כדי לגלות איזה מספר מסתתר מתחת לשורש.&rlm;",
        solution_steps: [
            { verbal_explanation: "המשוואה היא שורש של משהו שווה ל-9.&rlm;", math_expression: "√x = 9" },
            { verbal_explanation: "כדי למצוא את המספר המקורי, נבצע את הפעולה ההפוכה: נעלה את 9 בריבוע.&rlm;", math_expression: "9² = 9 × 9 = 81" }
        ],
        final_answer: "81"
    },
    // שאלה 40
    {
        topic: "powers_and_roots",
        subTopic: "שורש ריבועי",
        question_text: "חשבו:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>√144 = ?</div>",
        options: ["12", "14", "72", "16"],
        correctAnswer: 0,
        hint: "זהו אחד הריבועים השלמים החשובים לזכור בלוח הכפל המורחב.&rlm;",
        solution_steps: [
            { verbal_explanation: "אנו מחפשים מספר שכפול עצמו ייתן 144. ננסה מספרים מעל 10.&rlm;", math_expression: "" },
            { verbal_explanation: "11 כפול 11 זה 121.&rlm;", math_expression: "" },
            { verbal_explanation: "12 כפול 12 זה בדיוק 144. לכן התשובה היא 12.&rlm;", math_expression: "12 × 12 = 144" }
        ],
        final_answer: "12"
    },
    // שאלה 41
    {
        topic: "powers_and_roots",
        subTopic: "שורש ריבועי",
        question_text: "חיבור של שני שורשים:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>√49 + √16 = ?</div>",
        options: ["11", "65", "√65", "13"],
        correctAnswer: 0,
        hint: "חשבו כל שורש בנפרד (הם משמשים כמו חזקה מבחינת סדר פעולות). לאחר מכן, חברו את המספרים השלמים שתקבלו.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את שורש 49.&rlm;", math_expression: "√49 = 7" },
            { verbal_explanation: "שלב ב': נחשב את שורש 16.&rlm;", math_expression: "√16 = 4" },
            { verbal_explanation: "שלב ג': נחבר את התוצאות.&rlm;", math_expression: "7 + 4 = 11" }
        ],
        final_answer: "11"
    },
    // שאלה 42
    {
        topic: "powers_and_roots",
        subTopic: "שורש ריבועי",
        question_text: "שימו לב שפעולת החיבור נמצאת *בתוך* השורש. מהי התוצאה?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>√(64 + 36) = ?</div>",
        options: ["10", "14", "100", "25"],
        correctAnswer: 0,
        hint: "שורש המקיף פעולת חיבור מתפקד כמו סוגריים! קודם כל יש לבצע את החיבור בפנים (64+36), ורק מהתוצאה להוציא שורש.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נבצע את פעולת החיבור בתוך השורש.&rlm;", math_expression: "64 + 36 = 100" },
            { verbal_explanation: "שלב ב': נוציא שורש ריבועי למספר שקיבלנו (100).&rlm;", math_expression: "√100 = 10" }
        ],
        final_answer: "10"
    },
    // שאלה 43
    {
        topic: "powers_and_roots",
        subTopic: "שורש ריבועי",
        question_text: "עכשיו נפריד את השורשים לאותם מספרים. מהי התוצאה?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>√64 + √36 = ?</div>",
        options: ["14", "10", "100", "48"],
        correctAnswer: 0,
        hint: "כאן מחשבים כל שורש בנפרד ואז מחברים! שימו לב להבדל העצום מהשאלה הקודמת.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב שורש של 64.&rlm;", math_expression: "√64 = 8" },
            { verbal_explanation: "שלב ב': נחשב שורש של 36.&rlm;", math_expression: "√36 = 6" },
            { verbal_explanation: "שלב ג': נחבר את התוצאות. (לכן שורש של סכום לא שווה לסכום השורשים!).&rlm;", math_expression: "8 + 6 = 14" }
        ],
        final_answer: "14"
    },
    // שאלה 44
    {
        topic: "powers_and_roots",
        subTopic: "שורש ריבועי",
        question_text: "סדר פעולות עם כפל ושורש:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>2 × √9 = ?</div>",
        options: ["6", "18", "3", "9"],
        correctAnswer: 0,
        hint: "הוצאת שורש קודמת לכפל, בדיוק כמו חזקה.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את השורש תחילה.&rlm;", math_expression: "√9 = 3" },
            { verbal_explanation: "שלב ב': נכפול את המספר בחוץ (2) בתוצאה.&rlm;", math_expression: "2 × 3 = 6" }
        ],
        final_answer: "6"
    },
    // שאלה 45
    {
        topic: "powers_and_roots",
        subTopic: "שורש ריבועי",
        question_text: "האם אפשר להוציא שורש לשבר? נסו למצוא את התוצאה של:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>√(1/4) = ?</div>",
        options: ["1/2", "1/8", "1/16", "2"],
        correctAnswer: 0,
        hint: "חשבו איזה שבר, אם תכפילו אותו בעצמו, ייתן לכם רבע (1/4). הוציאו שורש למונה בנפרד ולמכנה בנפרד.&rlm;",
        solution_steps: [
            { verbal_explanation: "נוכל להוציא שורש בנפרד למונה ובנפרד למכנה.&rlm;", math_expression: "" },
            { verbal_explanation: "שורש של 1 הוא 1. שורש של 4 הוא 2.&rlm;", math_expression: "√1 = 1 , √4 = 2" },
            { verbal_explanation: "נרשום את השבר החדש שקיבלנו.&rlm;", math_expression: "1/2" }
        ],
        final_answer: "1/2"
    },
    // שאלה 46
    {
        topic: "powers_and_roots",
        subTopic: "שורש ריבועי",
        question_text: "עוד שורש של שבר: למה שווה הביטוי הבא?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>√(4/9) = ?</div>",
        options: ["2/3", "4/3", "2/9", "8/18"],
        correctAnswer: 0,
        hint: "הוציאו שורש למונה (4) והוציאו שורש למכנה (9).&rlm;",
        solution_steps: [
            { verbal_explanation: "נחשב שורש למונה.&rlm;", math_expression: "√4 = 2" },
            { verbal_explanation: "נחשב שורש למכנה.&rlm;", math_expression: "√9 = 3" },
            { verbal_explanation: "נרכיב בחזרה את השבר משתי התוצאות.&rlm;", math_expression: "2/3" }
        ],
        final_answer: "2/3"
    },
    // שאלה 47
    {
        topic: "powers_and_roots",
        subTopic: "שורש ריבועי",
        question_text: "שימוש יומיומי: שטח של חדר מרובע (ריבוע) הוא 121 מטרים רבועים. מהו האורך של צלע החדר במטרים?&rlm;",
        options: ["11", "12.1", "60.5", "21"],
        correctAnswer: 0,
        hint: "השטח של ריבוע הוא 'צלע כפול צלע' (צלע בריבוע). כדי למצוא את אורך הצלע מתוך השטח, משתמשים בשורש הריבועי.&rlm;",
        solution_steps: [
            { verbal_explanation: "אנו צריכים למצוא מספר שכפול עצמו שווה ל-121.&rlm;", math_expression: "x² = 121" },
            { verbal_explanation: "הפעולה המתמטית המתאימה לכך היא שורש ריבועי.&rlm;", math_expression: "√121" },
            { verbal_explanation: "11 כפול 11 נותן לנו 121. לכן האורך הוא 11.&rlm;", math_expression: "11" }
        ],
        final_answer: "11"
    },
    // שאלה 48
    {
        topic: "powers_and_roots",
        subTopic: "שורש ריבועי",
        question_text: "חשבו את תוצאת התרגיל:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>√0 + √1 = ?</div>",
        options: ["1", "0", "2", "אי אפשר לחשב"],
        correctAnswer: 0,
        hint: "מה שורש אפס? (אפס כפול אפס). מה שורש אחד? (אחד כפול אחד).&rlm;",
        solution_steps: [
            { verbal_explanation: "שורש של 0 הוא תמיד 0.&rlm;", math_expression: "√0 = 0" },
            { verbal_explanation: "שורש של 1 הוא תמיד 1.&rlm;", math_expression: "√1 = 1" },
            { verbal_explanation: "חיבור פשוט של שניהם נותן 1.&rlm;", math_expression: "0 + 1 = 1" }
        ],
        final_answer: "1"
    }

];