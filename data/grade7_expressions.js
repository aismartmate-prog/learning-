// ========================================================================
// שכבת גיל: כיתה ז' | נושא: משתנים וביטויים אלגבריים
// 3 תתי נושאים | 36 שאלות סה"כ 
// פתרונות מפורטים מאוד בשלבים. 
// כתיבה נקייה: חילוק מוצג כ- (:), כפל כ- (×), שברים כ- (1/2), חזקות כ- (²).
// כולל איורי SVG צבעוניים ובטוחים מוטמעים בקוד.
// ========================================================================

const questionsDB = [

    // ==========================================================
    // תת נושא 1: מושג המשתנה (12 שאלות)
    // ==========================================================
    
    // שאלה 1
    {
        topic: "algebraic_expressions",
        subTopic: "מושג המשתנה",
        question_text: "מה מסמל 'משתנה' במתמטיקה (בדרך כלל מסומן באותיות כמו x או y)?&rlm;",
        options: ["כמות שאינה ידועה או כמות שיכולה לקבל ערכים שונים", "מספר שתמיד שווה לאפס", "טעות בתרגיל שיש לתקן", "פעולת כפל נסתרת"],
        correctAnswer: 0,
        hint: "תחשבו על משתנה כמו על 'קופסה ריקה' שאפשר להכניס לתוכה מספרים שונים.&rlm;",
        solution_steps: [
            { verbal_explanation: "באלגברה, אנו משתמשים באותיות כדי לייצג מספרים שאנחנו עדיין לא יודעים מה הם, או כאלה שיכולים להשתנות מבעיה לבעיה.&rlm;", math_expression: "" },
            { verbal_explanation: "לכן המילה 'משתנה' מרמזת על כך שהערך שלו יכול להשתנות.&rlm;", math_expression: "" }
        ],
        final_answer: "כמות שאינה ידועה או כמות שיכולה לקבל ערכים שונים"
    },
    // שאלה 2
    {
        topic: "algebraic_expressions",
        subTopic: "מושג המשתנה",
        question_text: "מחירו של ארטיק אחד הוא x שקלים. דני קנה 4 ארטיקים. איזה ביטוי אלגברי מתאר את הסכום ששילם דני?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 200 60' width='100%' height='60' style='max-width:200px;'><rect x='10' y='10' width='20' height='40' fill='#fca5a5' rx='5'/><text x='20' y='35' font-family='Arial' font-size='14' font-weight='bold' fill='#7f1d1d' text-anchor='middle'>x</text><rect x='40' y='10' width='20' height='40' fill='#fca5a5' rx='5'/><text x='50' y='35' font-family='Arial' font-size='14' font-weight='bold' fill='#7f1d1d' text-anchor='middle'>x</text><rect x='70' y='10' width='20' height='40' fill='#fca5a5' rx='5'/><text x='80' y='35' font-family='Arial' font-size='14' font-weight='bold' fill='#7f1d1d' text-anchor='middle'>x</text><rect x='100' y='10' width='20' height='40' fill='#fca5a5' rx='5'/><text x='110' y='35' font-family='Arial' font-size='14' font-weight='bold' fill='#7f1d1d' text-anchor='middle'>x</text></svg></div>",
        options: ["4x", "x + 4", "x : 4", "4 - x"],
        correctAnswer: 0,
        hint: "כאשר קונים כמה יחידות מאותו סוג, כופלים את הכמות במחיר ליחידה.&rlm;",
        solution_steps: [
            { verbal_explanation: "המחיר ליחידה הוא x. הכמות היא 4.&rlm;", math_expression: "" },
            { verbal_explanation: "נכפול את הכמות במחיר.&rlm;", math_expression: "4 × x" },
            { verbal_explanation: "באלגברה נהוג להשמיט את סימן הכפל בין מספר לאות, ולכתוב פשוט 4x.&rlm;", math_expression: "4x" }
        ],
        final_answer: "4x"
    },
    // שאלה 3
    {
        topic: "algebraic_expressions",
        subTopic: "מושג המשתנה",
        question_text: "גילו של יוני הוא y שנים. אחיו הקטן צעיר ממנו ב-3 שנים. איזה ביטוי מתאר את גילו של האח הקטן?&rlm;",
        options: ["y - 3", "3y", "y + 3", "3 - y"],
        correctAnswer: 0,
        hint: "המילה 'צעיר ב-' מרמזת על פעולת חיסור. מי הגדול ומי הקטן?&rlm;",
        solution_steps: [
            { verbal_explanation: "הגיל של יוני הוא הבסיס שלנו (y).&rlm;", math_expression: "" },
            { verbal_explanation: "האח צעיר ממנו ב-3 שנים, כלומר גילו קטן ב-3 מגילו של יוני. לכן נחסר 3 מ-y.&rlm;", math_expression: "y - 3" }
        ],
        final_answer: "y - 3"
    },
    // שאלה 4
    {
        topic: "algebraic_expressions",
        subTopic: "מושג המשתנה",
        question_text: "כתבו ביטוי אלגברי עבור: 'מספר שגדול פי 5 מהמספר a'.&rlm;",
        options: ["5a", "a + 5", "a : 5", "5 - a"],
        correctAnswer: 0,
        hint: "המילה 'פי' (למשל גדול פי...) מרמזת על פעולת כפל.&rlm;",
        solution_steps: [
            { verbal_explanation: "כאשר אומרים 'גדול פי 5', מתכוונים לכפל ב-5.&rlm;", math_expression: "5 × a" },
            { verbal_explanation: "כתיבה מקוצרת מקובלת באלגברה משמיטה את סימן הכפל.&rlm;", math_expression: "5a" }
        ],
        final_answer: "5a"
    },
    // שאלה 5
    {
        topic: "algebraic_expressions",
        subTopic: "מושג המשתנה",
        question_text: "בקופסה היו m סוכריות. טל הוציא מהקופסה 8 סוכריות. איזה ביטוי מתאר את מספר הסוכריות שנשארו בקופסה?&rlm;",
        options: ["m - 8", "8 - m", "8m", "m + 8"],
        correctAnswer: 0,
        hint: "התחלנו עם כמות m, והוצאנו ממנה. הוצאה היא פעולת חיסור.&rlm;",
        solution_steps: [
            { verbal_explanation: "הכמות ההתחלתית היא m.&rlm;", math_expression: "" },
            { verbal_explanation: "טל לקח (החסיר) 8 סוכריות. נחסר 8 מהכמות ההתחלתית.&rlm;", math_expression: "m - 8" }
        ],
        final_answer: "m - 8"
    },
    // שאלה 6
    {
        topic: "algebraic_expressions",
        subTopic: "מושג המשתנה",
        question_text: "איזה ביטוי אלגברי מתאר את המשפט: 'כפלו את המספר c ב-2 ולאחר מכן הוסיפו 1'?&rlm;",
        options: ["2c + 1", "c + 2 × 1", "2(c + 1)", "c + 1 × 2"],
        correctAnswer: 0,
        hint: "עקבו אחר הפעולות לפי סדר הופעתן במשפט.&rlm;",
        solution_steps: [
            { verbal_explanation: "פעולה ראשונה: כפל המספר c ב-2.&rlm;", math_expression: "2c" },
            { verbal_explanation: "פעולה שנייה: הוספת המספר 1 לתוצאה הקודמת.&rlm;", math_expression: "2c + 1" }
        ],
        final_answer: "2c + 1"
    },
    // שאלה 7
    {
        topic: "algebraic_expressions",
        subTopic: "מושג המשתנה",
        question_text: "אורך צלע של ריבוע הוא a ס\"מ. מהו הביטוי האלגברי שמתאר את היקף הריבוע?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 100 100' width='100%' height='100' style='max-width:100px;'><rect x='20' y='20' width='60' height='60' fill='none' stroke='#3b82f6' stroke-width='2'/><text x='50' y='15' font-family='Arial' font-size='14' font-weight='bold' fill='#0f172a' text-anchor='middle'>a</text></svg></div>",
        options: ["4a", "a²", "a + 4", "a : 4"],
        correctAnswer: 0,
        hint: "היקף הוא סכום כל הצלעות. לריבוע יש 4 צלעות שוות שכל אחת מהן באורך a.&rlm;",
        solution_steps: [
            { verbal_explanation: "היקף הריבוע הוא חיבור של 4 הצלעות יחד.&rlm;", math_expression: "a + a + a + a" },
            { verbal_explanation: "זהה לכפל של הצלע ב-4.&rlm;", math_expression: "4 × a = 4a" }
        ],
        final_answer: "4a"
    },
    // שאלה 8
    {
        topic: "algebraic_expressions",
        subTopic: "מושג המשתנה",
        question_text: "בחניון חונות 20 מכוניות לבנות ועוד x מכוניות שחורות. מהו הביטוי המתאר את סך כל המכוניות בחניון?&rlm;",
        options: ["20 + x", "20x", "x - 20", "20 - x"],
        correctAnswer: 0,
        hint: "כדי למצוא כמות כוללת, מחברים את הקבוצות השונות יחד.&rlm;",
        solution_steps: [
            { verbal_explanation: "הכמות הכוללת היא חיבור של מספר המכוניות הלבנות ומספר המכוניות השחורות.&rlm;", math_expression: "20 + x" }
        ],
        final_answer: "20 + x"
    },
    // שאלה 9
    {
        topic: "algebraic_expressions",
        subTopic: "מושג המשתנה",
        question_text: "מספר זוגי כלשהו מסומן כ- 2n (כאשר n הוא מספר שלם). איזה ביטוי מתאר את המספר הזוגי הבא אחריו בסדרה?&rlm;",
        options: ["2n + 2", "2n + 1", "3n", "2(n + 2)"],
        correctAnswer: 0,
        hint: "בסדרת המספרים (2, 4, 6, 8...), מהו ההפרש בין מספר זוגי אחד לבא אחריו?&rlm;",
        solution_steps: [
            { verbal_explanation: "מספרים זוגיים קופצים בקפיצות של 2 (לדוגמה מ-4 ל-6).&rlm;", math_expression: "" },
            { verbal_explanation: "לכן, כדי להגיע למספר הזוגי הבא, עלינו להוסיף 2 למספר הנוכחי.&rlm;", math_expression: "2n + 2" }
        ],
        final_answer: "2n + 2"
    },
    // שאלה 10
    {
        topic: "algebraic_expressions",
        subTopic: "מושג המשתנה",
        question_text: "איזה ביטוי מתאר את המשפט: 'המספר b חלקי 3'?&rlm;",
        options: ["b/3", "3/b", "3b", "b - 3"],
        correctAnswer: 0,
        hint: "פעולת החילוק מיוצגת גם על ידי קו שבר. המספר שמחלקים הוא המונה, והמספר שמחלק הוא המכנה.&rlm;",
        solution_steps: [
            { verbal_explanation: "המילה 'חלקי' אומרת שאנו מחלקים את b ב-3.&rlm;", math_expression: "b : 3" },
            { verbal_explanation: "ביטוי זה שקול לחלוטין לשבר b/3.&rlm;", math_expression: "b/3" }
        ],
        final_answer: "b/3"
    },
    // שאלה 11
    {
        topic: "algebraic_expressions",
        subTopic: "מושג המשתנה",
        question_text: "בקבוצה יש 15 ילדים, חלקם בנים וחלקם בנות. אם נסמן את מספר הבנים ב- x, איזה ביטוי יתאר את מספר הבנות?&rlm;",
        options: ["15 - x", "x - 15", "15x", "x + 15"],
        correctAnswer: 0,
        hint: "מספר הבנות הוא מה שנשאר מתוך 15 הילדים, אחרי שמורידים מהם את מספר הבנים (x).&rlm;",
        solution_steps: [
            { verbal_explanation: "הכמות הכוללת היא 15.&rlm;", math_expression: "" },
            { verbal_explanation: "כדי למצוא חלק אחד מתוך השלם, נחסר מהשלם את החלק הידוע (הבנים).&rlm;", math_expression: "15 - x" }
        ],
        final_answer: "15 - x"
    },
    // שאלה 12
    {
        topic: "algebraic_expressions",
        subTopic: "מושג המשתנה",
        question_text: "לנועה יש פי 2 יותר מדבקות מאשר לרוני, ולדן יש 5 מדבקות יותר מאשר לרוני. אם לרוני יש x מדבקות, איזה ביטוי מתאר את סך כל המדבקות של שלושתם יחד?&rlm;",
        options: ["x + 2x + (x + 5)", "x + 2x + 5x", "3x + 5", "x² + 5"],
        correctAnswer: 0,
        hint: "כתבו ביטוי לכל ילד בנפרד (רוני=x, נועה=2x, דן=x+5) וחברו אותם יחד.&rlm;",
        solution_steps: [
            { verbal_explanation: "המדבקות של רוני: x.&rlm;", math_expression: "x" },
            { verbal_explanation: "המדבקות של נועה (פי 2 מרוני): 2x.&rlm;", math_expression: "2x" },
            { verbal_explanation: "המדבקות של דן (5 יותר מרוני): x + 5.&rlm;", math_expression: "x + 5" },
            { verbal_explanation: "סכום כולם יחד:&rlm;", math_expression: "x + 2x + (x + 5)" }
        ],
        final_answer: "x + 2x + (x + 5)"
    },

    // ==========================================================
    // תת נושא 2: הצבה (12 שאלות)
    // ==========================================================
    
    // שאלה 13
    {
        topic: "algebraic_expressions",
        subTopic: "הצבה",
        question_text: "נתון הביטוי האלגברי: 3x + 2. חשבו את ערך הביטוי כאשר מציבים x = 4.&rlm;",
        options: ["14", "18", "9", "24"],
        correctAnswer: 0,
        hint: "החליפו את האות x במספר 4. זכרו ש- 3x פירושו 3 כפול x. (3 כפול 4, ואז להוסיף 2).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב את המספר 4 במקום ה-x בביטוי.&rlm;", math_expression: "3 × 4 + 2" },
            { verbal_explanation: "שלב ב': נבצע כפל קודם לחיבור לפי סדר פעולות חשבון.&rlm;", math_expression: "12 + 2" },
            { verbal_explanation: "שלב ג': נחבר.&rlm;", math_expression: "14" }
        ],
        final_answer: "14"
    },
    // שאלה 14
    {
        topic: "algebraic_expressions",
        subTopic: "הצבה",
        question_text: "חשבו את ערך הביטוי 10 - 2y עבור ההצבה y = 3.&rlm;",
        options: ["4", "24", "16", "6"],
        correctAnswer: 0,
        hint: "הציבו את 3. כפלו 2 ב-3, ואת התוצאה חסרו מ-10.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב 3 במקום y.&rlm;", math_expression: "10 - 2 × 3" },
            { verbal_explanation: "שלב ב': נבצע את פעולת הכפל קודם.&rlm;", math_expression: "10 - 6" },
            { verbal_explanation: "שלב ג': נחסר.&rlm;", math_expression: "4" }
        ],
        final_answer: "4"
    },
    // שאלה 15
    {
        topic: "algebraic_expressions",
        subTopic: "הצבה",
        question_text: "נתון הביטוי a + 3b. הציבו בו a = 5 ו- b = 2 וחשבו את התוצאה.&rlm;",
        options: ["11", "16", "10", "13"],
        correctAnswer: 0,
        hint: "החליפו את a ב-5 ואת b ב-2. התרגיל יהיה 5 ועוד 3 כפול 2.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב את שני המשתנים בביטוי.&rlm;", math_expression: "5 + 3 × 2" },
            { verbal_explanation: "שלב ב': נחשב כפל קודם.&rlm;", math_expression: "5 + 6" },
            { verbal_explanation: "שלב ג': נחבר.&rlm;", math_expression: "11" }
        ],
        final_answer: "11"
    },
    // שאלה 16
    {
        topic: "algebraic_expressions",
        subTopic: "הצבה",
        question_text: "הציבו x = 3 בביטוי x² + 5 וחשבו:&rlm;",
        options: ["14", "11", "25", "8"],
        correctAnswer: 0,
        hint: "x² פירושו x כפול x (במקרה שלנו 3 כפול 3). לאחר מכן הוסיפו 5.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב 3 במקום x ונחשב את החזקה (3 בריבוע).&rlm;", math_expression: "3² + 5" },
            { verbal_explanation: "שלב ב': 3 כפול 3 שווה 9.&rlm;", math_expression: "9 + 5" },
            { verbal_explanation: "שלב ג': נחבר את התוצאות.&rlm;", math_expression: "14" }
        ],
        final_answer: "14"
    },
    // שאלה 17
    {
        topic: "algebraic_expressions",
        subTopic: "הצבה",
        question_text: "הצבת מספר שלילי: נתון הביטוי 4m + 10. הציבו בו m = -2 וחשבו.&rlm;",
        options: ["2", "-18", "-2", "18"],
        correctAnswer: 0,
        hint: "הכפילו את 4 ב-(2-). התוצאה תהיה שלילית (8-). לזה הוסיפו 10.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב 2- במקום m.&rlm;", math_expression: "4 × (-2) + 10" },
            { verbal_explanation: "שלב ב': נבצע כפל. פלוס כפול מינוס זה מינוס.&rlm;", math_expression: "-8 + 10" },
            { verbal_explanation: "שלב ג': חוב של 8 שקלים ועוד 10 שקלים ייתן יתרה חיובית.&rlm;", math_expression: "2" }
        ],
        final_answer: "2"
    },
    // שאלה 18
    {
        topic: "algebraic_expressions",
        subTopic: "הצבה",
        question_text: "חשבו את ערך הביטוי 2(x - 3) עבור x = 8.&rlm;",
        options: ["10", "13", "16", "22"],
        correctAnswer: 0,
        hint: "הציבו את 8 בסוגריים (8 פחות 3). את מה שיצא בסוגריים הכפילו ב-2.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב 8 במקום x בתוך הסוגריים.&rlm;", math_expression: "2 × (8 - 3)" },
            { verbal_explanation: "שלב ב': נפתור את הפעולה שבתוך הסוגריים (חיסור).&rlm;", math_expression: "2 × 5" },
            { verbal_explanation: "שלב ג': נכפול את התוצאה ב-2.&rlm;", math_expression: "10" }
        ],
        final_answer: "10"
    },
    // שאלה 19
    {
        topic: "algebraic_expressions",
        subTopic: "הצבה",
        question_text: "הציבו x = 10 בביטוי x/2 + 5 וחשבו את הערך (שימו לב ש- x/2 אומר x חלקי 2).&rlm;",
        options: ["10", "25", "15", "7.5"],
        correctAnswer: 0,
        hint: "חלקו את 10 ב-2, ואז הוסיפו לתוצאה 5.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב את 10 במונה של השבר.&rlm;", math_expression: "10/2 + 5" },
            { verbal_explanation: "שלב ב': נבצע חילוק (קו שבר שווה ערך לפעולת חילוק).&rlm;", math_expression: "5 + 5" },
            { verbal_explanation: "שלב ג': נחבר.&rlm;", math_expression: "10" }
        ],
        final_answer: "10"
    },
    // שאלה 20
    {
        topic: "algebraic_expressions",
        subTopic: "הצבה",
        question_text: "הצבה רבת משתנים: חשבו את ערך הביטוי (a × b) + c, כאשר ידוע ש: a=2, b=4, c=5.&rlm;",
        options: ["13", "18", "22", "11"],
        correctAnswer: 0,
        hint: "הציבו את כל המספרים בהתאמה לאותיות: 2 במקום a, 4 במקום b, ו-5 במקום c. פתרו קודם את הסוגריים.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב את כל הערכים בביטוי במקומות המתאימים.&rlm;", math_expression: "(2 × 4) + 5" },
            { verbal_explanation: "שלב ב': נפתור את פעולת הכפל שבסוגריים.&rlm;", math_expression: "8 + 5" },
            { verbal_explanation: "שלב ג': נחבר את ה-5.&rlm;", math_expression: "13" }
        ],
        final_answer: "13"
    },
    // שאלה 21
    {
        topic: "algebraic_expressions",
        subTopic: "הצבה",
        question_text: "חשבו את הערך של y² כאשר מציבים y = -3 (מינוס שלוש).&rlm;",
        options: ["9", "-9", "6", "-6"],
        correctAnswer: 0,
        hint: "כשמעלים מספר בחזקה (במיוחד שלילי), הוא נכנס כולו לתוך סוגריים. (-3)² זה מינוס 3 כפול מינוס 3.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': הצבת מספר שלילי בחזקה מחייבת שימוש בסוגריים.&rlm;", math_expression: "(-3)²" },
            { verbal_explanation: "שלב ב': חזקה שנייה אומרת לכפול את המספר בעצמו.&rlm;", math_expression: "(-3) × (-3)" },
            { verbal_explanation: "שלב ג': מינוס כפול מינוס נותן פלוס. 3 כפול 3 נותן 9.&rlm;", math_expression: "9" }
        ],
        final_answer: "9"
    },
    // שאלה 22
    {
        topic: "algebraic_expressions",
        subTopic: "הצבה",
        question_text: "נתון הביטוי 20 - x². מה ערכו של הביטוי עבור ההצבה x = 4?&rlm;",
        options: ["4", "36", "12", "-16"],
        correctAnswer: 0,
        hint: "סדר פעולות: קודם חשבו את 4², ואז חסרו את התוצאה מ-20.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב 4 במקום x בביטוי.&rlm;", math_expression: "20 - 4²" },
            { verbal_explanation: "שלב ב': חזקה קודמת לחיסור. נחשב את 4² (4 כפול 4).&rlm;", math_expression: "20 - 16" },
            { verbal_explanation: "שלב ג': נבצע את פעולת החיסור.&rlm;", math_expression: "4" }
        ],
        final_answer: "4"
    },
    // שאלה 23
    {
        topic: "algebraic_expressions",
        subTopic: "הצבה",
        question_text: "מהו שטחו של מלבן שצלעותיו מיוצגות על ידי המשתנים x ו- y, אם נתון כי x = 6 ס\"מ ו- y = 5 ס\"מ?&rlm;",
        options: ["30 סמ\"ר", "11 סמ\"ר", "22 סמ\"ר", "65 סמ\"ר"],
        correctAnswer: 0,
        hint: "שטח מלבן הוא אורך כפול רוחב (x כפול y). הציבו את המספרים וחשבו.&rlm;",
        solution_steps: [
            { verbal_explanation: "הביטוי הכללי לשטח מלבן הוא מכפלת הצלעות.&rlm;", math_expression: "S = x × y" },
            { verbal_explanation: "נציב את הערכים הנתונים בשאלה.&rlm;", math_expression: "S = 6 × 5" },
            { verbal_explanation: "התוצאה היא 30.&rlm;", math_expression: "30" }
        ],
        final_answer: "30 סמ\"ר"
    },
    // שאלה 24
    {
        topic: "algebraic_expressions",
        subTopic: "הצבה",
        question_text: "הציבו a = 0 בביטוי 5a + 12 וחשבו:&rlm;",
        options: ["12", "5", "17", "0"],
        correctAnswer: 0,
        hint: "5a פירושו 5 כפול a. זכרו שכל מספר שכופלים באפס נותן אפס.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב 0 במקום a בביטוי.&rlm;", math_expression: "5 × 0 + 12" },
            { verbal_explanation: "שלב ב': נבצע כפל. 5 כפול 0 מתאפס.&rlm;", math_expression: "0 + 12" },
            { verbal_explanation: "שלב ג': נחבר.&rlm;", math_expression: "12" }
        ],
        final_answer: "12"
    },

    // ==========================================================
    // תת נושא 3: פישוט וכינוס איברים (12 שאלות)
    // ==========================================================
    
    // שאלה 25
    {
        topic: "algebraic_expressions",
        subTopic: "פישוט וכינוס איברים",
        question_text: "כנסו את האיברים הדומים בביטוי הבא: 3x + 4x = ?&rlm;",
        options: ["7x", "12x", "x", "7x²"],
        correctAnswer: 0,
        hint: "חשבו על x כעל תפוח. 3 תפוחים ועוד 4 תפוחים הם...&rlm;",
        solution_steps: [
            { verbal_explanation: "כאשר יש לנו איברים עם אותו משתנה (x), אנחנו יכולים לחבר את המקדמים שלהם.&rlm;", math_expression: "" },
            { verbal_explanation: "3 ועוד 4 הם 7.&rlm;", math_expression: "(3 + 4)x = 7x" }
        ],
        final_answer: "7x"
    },
    // שאלה 26
    {
        topic: "algebraic_expressions",
        subTopic: "פישוט וכינוס איברים",
        question_text: "פשטו את הביטוי על ידי כינוס איברים דומים: 5a + 2 + 3a + 4 = ?&rlm;",
        options: ["8a + 6", "14a", "8a + 8", "15a + 8"],
        correctAnswer: 0,
        hint: "חברו את האיברים עם ה-a (5a ו-3a) בנפרד, ואת המספרים 'החופשיים' (2 ו-4) בנפרד.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נקבץ את האיברים עם האות a.&rlm;", math_expression: "5a + 3a = 8a" },
            { verbal_explanation: "שלב ב': נקבץ את המספרים (איברים חופשיים).&rlm;", math_expression: "2 + 4 = 6" },
            { verbal_explanation: "שלב ג': נרשום את הביטוי המפושט יחד.&rlm;", math_expression: "8a + 6" }
        ],
        final_answer: "8a + 6"
    },
    // שאלה 27
    {
        topic: "algebraic_expressions",
        subTopic: "פישוט וכינוס איברים",
        question_text: "מה תהיה התוצאה של כינוס האיברים: 10y - 3y + 2y ?&rlm;",
        options: ["9y", "5y", "15y", "8y"],
        correctAnswer: 0,
        hint: "פתרו משמאל לימין. 10 פחות 3, ואז הוסיפו 2. ה-y נשאר לאורך כל הדרך.&rlm;",
        solution_steps: [
            { verbal_explanation: "כולם איברים דומים כי בכולם יש y. נפתור לפי סדר הפעולות מ-שמאל לימין.&rlm;", math_expression: "" },
            { verbal_explanation: "נחסר: 10y פחות 3y שווים ל-7y.&rlm;", math_expression: "10y - 3y = 7y" },
            { verbal_explanation: "נוסיף את 2y הנותרים.&rlm;", math_expression: "7y + 2y = 9y" }
        ],
        final_answer: "9y"
    },
    // שאלה 28
    {
        topic: "algebraic_expressions",
        subTopic: "פישוט וכינוס איברים",
        question_text: "שימו לב היטב! פשטו את הביטוי: 4x + 7 - 4x + 3 = ?&rlm;",
        options: ["10", "8x + 10", "8x", "4"],
        correctAnswer: 0,
        hint: "מה קורה כשיש לנו 4x ואנחנו מחסרים ממנו 4x? ה-x נעלם! חברו את המספרים שנותרו.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נכנס איברי x. יש לנו 4x ומיד אחר כך מינוס 4x. הם מקזזים זה את זה לאפס.&rlm;", math_expression: "4x - 4x = 0x = 0" },
            { verbal_explanation: "שלב ב': נכנס את המספרים.&rlm;", math_expression: "7 + 3 = 10" },
            { verbal_explanation: "נשארנו רק עם המספרים.&rlm;", math_expression: "10" }
        ],
        final_answer: "10"
    },
    // שאלה 29
    {
        topic: "algebraic_expressions",
        subTopic: "פישוט וכינוס איברים",
        question_text: "פשטו את הביטוי על ידי פתיחת סוגריים (חוק הפילוג): 2(x + 5) = ?&rlm;",
        options: ["2x + 10", "2x + 5", "x + 10", "7x"],
        correctAnswer: 0,
        hint: "הכפילו את ה-2 שנמצא בחוץ בכל אחד מהאיברים שבפנים (גם ב-x וגם ב-5).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נכפול את הגורם החיצוני באיבר הראשון (x).&rlm;", math_expression: "2 × x = 2x" },
            { verbal_explanation: "שלב ב': נכפול את הגורם החיצוני באיבר השני (5).&rlm;", math_expression: "2 × 5 = 10" },
            { verbal_explanation: "שלב ג': נרשום יחד את תוצאות הכפל כביטוי.&rlm;", math_expression: "2x + 10" }
        ],
        final_answer: "2x + 10"
    },
    // שאלה 30
    {
        topic: "algebraic_expressions",
        subTopic: "פישוט וכינוס איברים",
        question_text: "פשטו את הביטוי (שלב ראשון פתיחת סוגריים, שלב שני כינוס איברים):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>3(x + 2) + 4x = ?</div>",
        options: ["7x + 6", "7x + 2", "3x + 6", "13x"],
        correctAnswer: 0,
        hint: "פתחו את הסוגריים ל- 3x + 6. אחר כך, הוסיפו את ה-4x שנמצאים בחוץ לאיברי ה-x.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': פתיחת סוגריים (חוק הפילוג).&rlm;", math_expression: "3 × x + 3 × 2 = 3x + 6" },
            { verbal_explanation: "שלב ב': נכתוב את הביטוי המעודכן בשלמותו.&rlm;", math_expression: "3x + 6 + 4x" },
            { verbal_explanation: "שלב ג': נכנס את האיברים הדומים (3x ועוד 4x).&rlm;", math_expression: "7x + 6" }
        ],
        final_answer: "7x + 6"
    },
    // שאלה 31
    {
        topic: "algebraic_expressions",
        subTopic: "פישוט וכינוס איברים",
        question_text: "שימו לב לסימן המינוס! פשטו את הביטוי:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>8m - 2(m + 3) = ?</div>",
        options: ["6m - 6", "6m + 3", "6m + 6", "10m - 6"],
        correctAnswer: 0,
        hint: "כאשר אתם פותחים סוגריים, אתם מכפילים ב-מינוס 2. לכן, -2 כפול m זה -2m, ו-מינוס 2 כפול 3 זה -6.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נפתח סוגריים תוך תשומת לב שגורם הכפל הוא שלילי (-2).&rlm;", math_expression: "-2 × m = -2m" },
            { verbal_explanation: "מינוס כפול פלוס נותן מינוס.&rlm;", math_expression: "-2 × 3 = -6" },
            { verbal_explanation: "שלב ב': הביטוי כעת הוא 8m - 2m - 6. נכנס את ה-mים.&rlm;", math_expression: "8m - 2m = 6m" },
            { verbal_explanation: "התוצאה הסופית:&rlm;", math_expression: "6m - 6" }
        ],
        final_answer: "6m - 6"
    },
    // שאלה 32
    {
        topic: "algebraic_expressions",
        subTopic: "פישוט וכינוס איברים",
        question_text: "כיצד נרשום את הביטוי הבא בדרך הקצרה ביותר?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>x + x + x + x = ?</div>",
        options: ["4x", "x⁴", "x + 4", "4 + x"],
        correctAnswer: 0,
        hint: "חיבור חוזר של אותו איבר זהה לכפל. 4 פעמים x נכתב כ-4x. (שימו לב: x⁴ זה כפל של x בעצמו, לא חיבור!).&rlm;",
        solution_steps: [
            { verbal_explanation: "האות x מופיעה בחיבור 4 פעמים.&rlm;", math_expression: "" },
            { verbal_explanation: "חיבור חוזר הוא כפל. אנו למעשה אומרים '4 פעמים x'.&rlm;", math_expression: "4 × x = 4x" }
        ],
        final_answer: "4x"
    },
    // שאלה 33
    {
        topic: "algebraic_expressions",
        subTopic: "פישוט וכינוס איברים",
        question_text: "פשטו את הביטוי (זכרו ש- a לבדו הוא בעצם 1a):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>5a - a = ?</div>",
        options: ["4a", "5", "a", "5a²"],
        correctAnswer: 0,
        hint: "אם יש לכם 5 תפוחים ואתם אוכלים תפוח אחד, נשארו 4 תפוחים.&rlm;",
        solution_steps: [
            { verbal_explanation: "האיבר a ללא מקדם הוא למעשה 1a.&rlm;", math_expression: "5a - 1a" },
            { verbal_explanation: "נחסר את המקדמים: 5 פחות 1 שווה ל-4.&rlm;", math_expression: "4a" }
        ],
        final_answer: "4a"
    },
    // שאלה 34
    {
        topic: "algebraic_expressions",
        subTopic: "פישוט וכינוס איברים",
        question_text: "חזקות לא מתערבבות! כנסו את האיברים הבאים:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>2x² + 3x + 4x² - x = ?</div>",
        options: ["6x² + 2x", "5x² + 3x", "6x + 2x²", "8x²"],
        correctAnswer: 0,
        hint: "איברים עם x² ואיברים עם x רגיל הם 'משפחות' שונות. חברו את ה-x² יחד (2 ו-4), ואת ה-x הרגיל יחד (3x פחות 1x).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נקבץ את איברי ה-x² (שניים פלוס ארבעה).&rlm;", math_expression: "2x² + 4x² = 6x²" },
            { verbal_explanation: "שלב ב': נקבץ את איברי ה-x הרגיל (3x פחות 1x).&rlm;", math_expression: "3x - x = 2x" },
            { verbal_explanation: "שלב ג': נרשום את התוצאות זו לצד זו מבלי לערבב אותן.&rlm;", math_expression: "6x² + 2x" }
        ],
        final_answer: "6x² + 2x"
    },
    // שאלה 35
    {
        topic: "algebraic_expressions",
        subTopic: "פישוט וכינוס איברים",
        question_text: "זהו תהליך הפוך (הוצאת גורם משותף). איזה ביטוי שקול לביטוי 6x + 12?&rlm;",
        options: ["6(x + 2)", "6(x + 12)", "2(3x + 12)", "x(6 + 12)"],
        correctAnswer: 0,
        hint: "מהו המספר הגדול ביותר שמחלק גם את 6 וגם את 12? הוציאו את 6 אל מחוץ לסוגריים.&rlm;",
        solution_steps: [
            { verbal_explanation: "נזהה שהמספר 6 משותף ומחלק את שני האיברים.&rlm;", math_expression: "6 × x + 6 × 2" },
            { verbal_explanation: "נוציא את 6 מחוץ לסוגריים, ובפנים נרשום את השאריות (x ועוד 2).&rlm;", math_expression: "6(x + 2)" }
        ],
        final_answer: "6(x + 2)"
    },
    // שאלה 36
    {
        topic: "algebraic_expressions",
        subTopic: "פישוט וכינוס איברים",
        question_text: "פשטו את הביטוי, וזכרו שמינוס לפני סוגריים הופך את כל הסימנים שבפנים!&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>-(2x - 5) + 3x = ?</div>",
        options: ["x + 5", "x - 5", "5x - 5", "-x + 5"],
        correctAnswer: 0,
        hint: "המינוס יהפוך את 2x ל- (2x-), ואת (5-) ל- (5+). לאחר מכן הוסיפו 3x.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': פתיחת סוגריים עם מינוס לפני היא כמו הכפלה במינוס 1. כל סימן מתהפך.&rlm;", math_expression: "-2x + 5" },
            { verbal_explanation: "שלב ב': נעדכן את התרגיל המלא ונכנס את איברי ה-x (שלושה x פחות שני x זה x אחד).&rlm;", math_expression: "-2x + 5 + 3x = x + 5" }
        ],
        final_answer: "x + 5"
    }

];