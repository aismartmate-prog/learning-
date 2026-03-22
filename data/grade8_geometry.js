// ========================================================================
// שכבת גיל: חטיבת ביניים (ח'-ט') | נושא: גיאומטריה מתקדמת ומדידות
// 6 תתי נושאים | 60 שאלות סה"כ
// איורים מתקדמים (תלת מימד, מעגלים, מצולעים). פתרונות מפורטים מאוד.
// כתיבה נקייה: ללא LaTeX. שימוש ב: × , : , ² , ³ , √ , π
// ========================================================================

const questionsDB = [

    // ==========================================================
    // תת נושא 1: משפט פיתגורס (10 שאלות)
    // ==========================================================
    
    // שאלה 1
    {
        topic: "geometry_advanced",
        subTopic: "משפט פיתגורס",
        question_text: "במשולש ישר זווית, אורכי הניצבים הם 3 ס\"מ ו-4 ס\"מ. מהו אורך היתר (הצלע הארוכה)?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 150 120' width='100%' height='120' style='max-width:150px;'><polygon points='20,100 100,100 20,20' fill='#fef08a' stroke='#ca8a04' stroke-width='2'/><polyline points='20,85 35,85 35,100' fill='none' stroke='#ca8a04' stroke-width='1.5'/><text x='60' y='115' font-family='Arial' font-size='12' fill='#0f172a'>3 ס\"מ</text><text x='5' y='60' font-family='Arial' font-size='12' fill='#0f172a'>4</text><text x='70' y='50' font-family='Arial' font-size='14' font-weight='bold' fill='#ef4444'>c</text></svg></div>",
        options: ["5 ס\"מ", "7 ס\"מ", "25 ס\"מ", "1 ס\"מ"],
        correctAnswer: 0,
        hint: "משפט פיתגורס קובע שסכום ריבועי הניצבים שווה לריבוע היתר: a² + b² = c².&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרשום את משפט פיתגורס. a ו-b הם הניצבים (3 ו-4), ו-c הוא היתר שאנו מחפשים.&rlm;", math_expression: "3² + 4² = c²" },
            { verbal_explanation: "שלב ב': נחשב את החזקות. 3 בריבוע זה 9, ו-4 בריבוע זה 16.&rlm;", math_expression: "9 + 16 = c²" },
            { verbal_explanation: "שלב ג': נחבר את התוצאות.&rlm;", math_expression: "25 = c²" },
            { verbal_explanation: "שלב ד': נוציא שורש ריבועי כדי למצוא את אורך היתר c.&rlm;", math_expression: "c = √25 = 5" }
        ],
        final_answer: "5 ס\"מ"
    },
    // שאלה 2
    {
        topic: "geometry_advanced",
        subTopic: "משפט פיתגורס",
        question_text: "במשולש ישר זווית, אורך היתר הוא 13 ס\"מ ואורך אחד הניצבים הוא 5 ס\"מ. מהו אורכו של הניצב השני?&rlm;",
        options: ["12 ס\"מ", "18 ס\"מ", "8 ס\"מ", "144 ס\"מ"],
        correctAnswer: 0,
        hint: "כאשר מחפשים ניצב, מחסרים את ריבוע הניצב הידוע מריבוע היתר: b² = c² - a².&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרשום את המשפט עם הנתונים הידועים לנו.&rlm;", math_expression: "5² + b² = 13²" },
            { verbal_explanation: "שלב ב': נחשב את החזקות (5 בריבוע זה 25, 13 בריבוע זה 169).&rlm;", math_expression: "25 + b² = 169" },
            { verbal_explanation: "שלב ג': נחסר 25 משני האגפים כדי לבודד את b².&rlm;", math_expression: "b² = 169 - 25 = 144" },
            { verbal_explanation: "שלב ד': נוציא שורש ריבועי. המספר שכפול עצמו שווה 144 הוא 12.&rlm;", math_expression: "b = √144 = 12" }
        ],
        final_answer: "12 ס\"מ"
    },
    // שאלה 3
    {
        topic: "geometry_advanced",
        subTopic: "משפט פיתגורס",
        question_text: "סולם באורך 10 מטרים נשען על קיר אנכי. רגלי הסולם רחוקות 6 מטרים מתחתית הקיר. לאיזה גובה על הקיר מגיע הסולם?&rlm;",
        options: ["8 מטרים", "4 מטרים", "16 מטרים", "64 מטרים"],
        correctAnswer: 0,
        hint: "הסולם הוא היתר (10). המרחק מהקיר הוא ניצב (6). אנו מחפשים את הניצב השני (הגובה).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': הסולם (10), הקיר והרצפה (6) יוצרים משולש ישר זווית.&rlm;", math_expression: "6² + h² = 10²" },
            { verbal_explanation: "שלב ב': חישוב החזקות.&rlm;", math_expression: "36 + h² = 100" },
            { verbal_explanation: "שלב ג': נחסר 36 כדי למצוא את h².&rlm;", math_expression: "h² = 100 - 36 = 64" },
            { verbal_explanation: "שלב ד': נוציא שורש ריבועי.&rlm;", math_expression: "h = √64 = 8" }
        ],
        final_answer: "8 מטרים"
    },
    // שאלה 4
    {
        topic: "geometry_advanced",
        subTopic: "משפט פיתגורס",
        question_text: "במלבן, אורך צלע אחת הוא 15 ס\"מ ואורך הצלע השנייה הוא 8 ס\"מ. מהו אורך האלכסון של המלבן?&rlm;",
        options: ["17 ס\"מ", "23 ס\"מ", "289 ס\"מ", "120 ס\"מ"],
        correctAnswer: 0,
        hint: "האלכסון מחלק את המלבן לשני משולשים ישרי זווית. הצלעות 8 ו-15 הן הניצבים.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': צלעות המלבן יוצרות זווית ישרה, והאלכסון הוא היתר של המשולש שנוצר.&rlm;", math_expression: "8² + 15² = c²" },
            { verbal_explanation: "שלב ב': נחשב חזקות.&rlm;", math_expression: "64 + 225 = c²" },
            { verbal_explanation: "שלב ג': נחבר את התוצאות.&rlm;", math_expression: "289 = c²" },
            { verbal_explanation: "שלב ד': נוציא שורש ריבועי ל-289.&rlm;", math_expression: "c = √289 = 17" }
        ],
        final_answer: "17 ס\"מ"
    },
    // שאלה 5
    {
        topic: "geometry_advanced",
        subTopic: "משפט פיתגורס",
        question_text: "האם משולש שצלעותיו הן 6 ס\"מ, 8 ס\"מ ו-10 ס\"מ הוא משולש ישר זווית?&rlm;",
        options: ["כן", "לא", "אי אפשר לדעת", "רק אם הוא שווה שוקיים"],
        correctAnswer: 0,
        hint: "בדקו האם המשפט מתקיים: האם סכום הריבועים של שתי הצלעות הקצרות שווה לריבוע של הצלע הארוכה?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נבדוק את המשוואה a² + b² = c² עם המספרים הנתונים (הארוך ביותר הוא c).&rlm;", math_expression: "6² + 8² = ? 10²" },
            { verbal_explanation: "שלב ב': נחשב את הריבועים.&rlm;", math_expression: "36 + 64 = ? 100" },
            { verbal_explanation: "שלב ג': 36 ועוד 64 אכן שווים ל-100. מכיוון שהמשפט מתקיים, המשולש חייב להיות ישר זווית.&rlm;", math_expression: "100 = 100" }
        ],
        final_answer: "כן"
    },
    // שאלה 6
    {
        topic: "geometry_advanced",
        subTopic: "משפט פיתגורס",
        question_text: "במעוין, אורך אלכסון אחד הוא 12 ס\"מ ואורך האלכסון השני הוא 16 ס\"מ. מהו אורך צלע המעוין?&rlm;",
        options: ["10 ס\"מ", "20 ס\"מ", "14 ס\"מ", "100 ס\"מ"],
        correctAnswer: 0,
        hint: "במעוין, האלכסונים מאונכים זה לזה וחוצים זה את זה. לכן נוצרים 4 משולשים ישרי זווית. הניצבים שלהם הם חצאי האלכסונים (6 ו-8). צלע המעוין היא היתר.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': האלכסונים חוצים זה את זה, לכן הניצבים של משולש אחד הם חצי מ-12 (שזה 6) וחצי מ-16 (שזה 8).&rlm;", math_expression: "a = 6 , b = 8" },
            { verbal_explanation: "שלב ב': הזווית ביניהם היא 90°. נפעיל את משפט פיתגורס למציאת צלע המעוין (היתר).&rlm;", math_expression: "6² + 8² = c²" },
            { verbal_explanation: "שלב ג': חישוב: 36 ועוד 64 שווה 100.&rlm;", math_expression: "36 + 64 = 100 = c²" },
            { verbal_explanation: "שלב ד': נוציא שורש ריבועי מ-100.&rlm;", math_expression: "c = √100 = 10" }
        ],
        final_answer: "10 ס\"מ"
    },
    // שאלה 7
    {
        topic: "geometry_advanced",
        subTopic: "משפט פיתגורס",
        question_text: "משולש ישר זווית הוא גם שווה שוקיים. אורך כל ניצב הוא 5 ס\"מ. מהו אורך היתר (שורש לא מדויק)?&rlm;",
        options: ["√50 ס\"מ", "√25 ס\"מ", "10 ס\"מ", "√10 ס\"מ"],
        correctAnswer: 0,
        hint: "הציבו את שני הניצבים (5 ו-5) במשפט פיתגורס. התוצאה תישאר מתחת לסימן השורש.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרשום את המשוואה. שני הניצבים שווים ל-5.&rlm;", math_expression: "5² + 5² = c²" },
            { verbal_explanation: "שלב ב': נחשב.&rlm;", math_expression: "25 + 25 = c²" },
            { verbal_explanation: "שלב ג': נסכם.&rlm;", math_expression: "50 = c²" },
            { verbal_explanation: "שלב ד': נוציא שורש. מכיוון של-50 אין שורש שלם, התשובה נשארת כשורש 50.&rlm;", math_expression: "c = √50" }
        ],
        final_answer: "√50 ס\"מ"
    },
    // שאלה 8
    {
        topic: "geometry_advanced",
        subTopic: "משפט פיתגורס",
        question_text: "במשולש שווה שוקיים, אורך הבסיס הוא 10 ס\"מ ואורך כל שוק הוא 13 ס\"מ. מהו גובה המשולש היורד לבסיס?&rlm;",
        options: ["12 ס\"מ", "144 ס\"מ", "11 ס\"מ", "10 ס\"מ"],
        correctAnswer: 0,
        hint: "הגובה במשולש שווה שוקיים חוצה את הבסיס (לשני חצאים של 5). נוצר משולש ישר זווית שבו הניצב הוא 5, היתר הוא 13, ומחפשים את הגובה (הניצב השני).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': הגובה מחלק את המשולש לשני משולשים ישרי זווית. הבסיס של אחד מהם הוא חצי מ-10 (שזה 5). היתר הוא השוק (13).&rlm;", math_expression: "5² + h² = 13²" },
            { verbal_explanation: "שלב ב': נחשב חזקות.&rlm;", math_expression: "25 + h² = 169" },
            { verbal_explanation: "שלב ג': נחסר 25.&rlm;", math_expression: "h² = 144" },
            { verbal_explanation: "שלב ד': שורש 144 הוא 12.&rlm;", math_expression: "h = 12" }
        ],
        final_answer: "12 ס\"מ"
    },
    // שאלה 9
    {
        topic: "geometry_advanced",
        subTopic: "משפט פיתגורס",
        question_text: "דן הלך מביתו 9 ק\"מ צפונה, ולאחר מכן פנה מזרחה והלך 12 ק\"מ. מהו המרחק בקו אווירי ישר בין מיקומו הנוכחי לביתו?&rlm;",
        options: ["15 ק\"מ", "21 ק\"מ", "14 ק\"מ", "225 ק\"מ"],
        correctAnswer: 0,
        hint: "הליכה צפונה ואז מזרחה יוצרת זווית ישרה (90 מעלות). המסלול יוצר משולש ישר זווית, והמרחק בקו אווירי הוא היתר.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': המסלול יצר משולש ישר זווית שהניצבים שלו הם 9 ו-12.&rlm;", math_expression: "9² + 12² = c²" },
            { verbal_explanation: "שלב ב': נחשב חזקות.&rlm;", math_expression: "81 + 144 = c²" },
            { verbal_explanation: "שלב ג': חיבור הניצבים בריבוע.&rlm;", math_expression: "225 = c²" },
            { verbal_explanation: "שלב ד': נוציא שורש ריבועי.&rlm;", math_expression: "c = √225 = 15" }
        ],
        final_answer: "15 ק\"מ"
    },
    // שאלה 10
    {
        topic: "geometry_advanced",
        subTopic: "משפט פיתגורס",
        question_text: "היקפו של משולש ישר זווית הוא 40 ס\"מ. ידוע שאורך יתר המשולש הוא 17 ס\"מ ואחד הניצבים הוא 8 ס\"מ. מהו אורך הניצב השני (ללא פיתגורס, רק לפי היקף!)?&rlm;",
        options: ["15 ס\"מ", "12 ס\"מ", "10 ס\"מ", "25 ס\"מ"],
        correctAnswer: 0,
        hint: "היקף הוא סכום 3 הצלעות. חסרו מההיקף את שתי הצלעות הידועות לכם.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': היקף המשולש מורכב מחיבור היתר ושני הניצבים.&rlm;", math_expression: "8 + 17 + x = 40" },
            { verbal_explanation: "שלב ב': נחבר את הצלעות הידועות.&rlm;", math_expression: "25 + x = 40" },
            { verbal_explanation: "שלב ג': נחסר 25 מההיקף.&rlm;", math_expression: "x = 40 - 25 = 15" },
            { verbal_explanation: "(הערה: ניתן היה לוודא גם בעזרת פיתגורס ש- 8² + 15² אכן שווה ל- 17²).&rlm;", math_expression: "" }
        ],
        final_answer: "15 ס\"מ"
    },

    // ==========================================================
    // תת נושא 2: מנסרה ישרה (שטח ונפח) (10 שאלות)
    // ==========================================================
    
    // שאלה 11
    {
        topic: "geometry_advanced",
        subTopic: "מנסרה ישרה (שטח ונפח)",
        question_text: "במנסרה משולשת ישרה, שטח הבסיס (המשולש) הוא 20 סמ\"ר. גובה המנסרה הוא 10 ס\"מ. מהו נפח המנסרה?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 150 150' width='100%' height='150' style='max-width:150px;'><polygon points='40,40 100,20 100,100 40,120' fill='#e2e8f0' stroke='#334155' stroke-width='2'/><polygon points='100,20 140,50 140,130 100,100' fill='#cbd5e1' stroke='#334155' stroke-width='2'/><polygon points='40,40 100,20 140,50' fill='#bae6fd' stroke='#0284c7' stroke-width='2'/><text x='90' y='45' font-family='Arial' font-size='10' fill='#0f172a'>S=20</text><text x='20' y='80' font-family='Arial' font-size='12' fill='#0f172a'>h=10</text></svg></div>",
        options: ["200 סמ\"ק", "100 סמ\"ק", "30 סמ\"ק", "400 סמ\"ק"],
        correctAnswer: 0,
        hint: "נפח של כל מנסרה ישרה מחושב על ידי הכפלת שטח הבסיס שלה בגובה שלה.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': הנוסחה לנפח מנסרה היא שטח הבסיס כפול גובה המנסרה.&rlm;", math_expression: "V = S_{base} × h" },
            { verbal_explanation: "שלב ב': שטח הבסיס נתון לנו כ-20, והגובה הוא 10. נכפיל אותם.&rlm;", math_expression: "20 × 10 = 200" }
        ],
        final_answer: "200 סמ\"ק"
    },
    // שאלה 12
    {
        topic: "geometry_advanced",
        subTopic: "מנסרה ישרה (שטח ונפח)",
        question_text: "קובייה היא סוג של מנסרה ישרה (מרובעת). אורך מקצוע הקובייה (צלע) הוא 4 ס\"מ. מהו שטח הפנים הכולל של הקובייה (כל שש הפאות שלה)?&rlm;",
        options: ["96 סמ\"ר", "64 סמ\"ר", "16 סמ\"ר", "24 סמ\"ר"],
        correctAnswer: 0,
        hint: "לקובייה יש 6 פאות בצורת ריבוע שוות בשטחן. חשבו שטח של פאה אחת (צלע כפול צלע) והכפילו ב-6.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את השטח של פאה אחת (שהיא ריבוע).&rlm;", math_expression: "S_{face} = 4 × 4 = 16" },
            { verbal_explanation: "שלב ב': בקובייה יש 6 פאות זהות. נכפיל את שטח הפאה ב-6.&rlm;", math_expression: "16 × 6 = 96" }
        ],
        final_answer: "96 סמ\"ר"
    },
    // שאלה 13
    {
        topic: "geometry_advanced",
        subTopic: "מנסרה ישרה (שטח ונפח)",
        question_text: "תיבה היא מנסרה ישרה. אורך התיבה 5 ס\"מ, רוחבה 3 ס\"מ וגובהה 6 ס\"מ. מהו הנפח שלה?&rlm;",
        options: ["90 סמ\"ק", "30 סמ\"ק", "14 סמ\"ק", "180 סמ\"ק"],
        correctAnswer: 0,
        hint: "נפח תיבה מחושב על ידי הכפלת שלושת הממדים יחד: אורך × רוחב × גובה.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרשום את הנוסחה לנפח התיבה.&rlm;", math_expression: "V = a × b × h" },
            { verbal_explanation: "שלב ב': נציב את המספרים.&rlm;", math_expression: "V = 5 × 3 × 6" },
            { verbal_explanation: "שלב ג': נחשב. 5 כפול 3 זה 15. 15 כפול 6 זה 90.&rlm;", math_expression: "15 × 6 = 90" }
        ],
        final_answer: "90 סמ\"ק"
    },
    // שאלה 14
    {
        topic: "geometry_advanced",
        subTopic: "מנסרה ישרה (שטח ונפח)",
        question_text: "במנסרה משולשת ישרה, הבסיס הוא משולש ישר זווית שניצביו הם 6 ס\"מ ו-8 ס\"מ. גובה המנסרה הוא 10 ס\"מ. מהו נפח המנסרה?&rlm;",
        options: ["240 סמ\"ק", "480 סמ\"ק", "24 סמ\"ק", "100 סמ\"ק"],
        correctAnswer: 0,
        hint: "קודם כל חשבו את שטח הבסיס (שהוא משולש: בסיס כפול גובה חלקי 2). לאחר מכן, הכפילו את השטח שקיבלתם בגובה המנסרה.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את שטח משולש הבסיס. הניצבים משמשים כבסיס וגובה למשולש.&rlm;", math_expression: "S_{base} = (6 × 8) : 2 = 48 : 2 = 24" },
            { verbal_explanation: "שלב ב': נחשב את נפח המנסרה על ידי הכפלת שטח הבסיס בגובה המנסרה.&rlm;", math_expression: "V = 24 × 10 = 240" }
        ],
        final_answer: "240 סמ\"ק"
    },
    // שאלה 15
    {
        topic: "geometry_advanced",
        subTopic: "מנסרה ישרה (שטח ונפח)",
        question_text: "נפח של מנסרה כלשהי הוא 120 סמ\"ק. גובה המנסרה הוא 8 ס\"מ. מהו שטח הבסיס שלה?&rlm;",
        options: ["15 סמ\"ר", "120 סמ\"ר", "960 סמ\"ר", "20 סמ\"ר"],
        correctAnswer: 0,
        hint: "מכיוון שנפח שווה לשטח בסיס כפול גובה, הפעולה ההפוכה היא לחלק את הנפח בגובה.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נכתוב את המשוואה לפי נוסחת הנפח.&rlm;", math_expression: "S_{base} × 8 = 120" },
            { verbal_explanation: "שלב ב': נחלק את הנפח בגובה כדי לבודד את שטח הבסיס.&rlm;", math_expression: "S_{base} = 120 : 8 = 15" }
        ],
        final_answer: "15 סמ\"ר"
    },
    // שאלה 16
    {
        topic: "geometry_advanced",
        subTopic: "מנסרה ישרה (שטח ונפח)",
        question_text: "מהו 'שטח מעטפת' של מנסרה?&rlm;",
        options: ["סכום השטחים של הפאות הצדדיות בלבד (ללא שני הבסיסים).", "הנפח הפנימי של המנסרה.", "שטח כל הפאות כולל הבסיסים.", "היקף הבסיס של המנסרה."],
        correctAnswer: 0,
        hint: "המעטפת היא מה ש'עוטף' את הצדדים. בסיסים נחשבים לתקרה ורצפה.&rlm;",
        solution_steps: [
            { verbal_explanation: "מעטפת של גוף הנדסי היא השטח של הדפנות הצדדיות שלו.&rlm;", math_expression: "" },
            { verbal_explanation: "שטח פנים כולל = שטח מעטפת + פעמיים שטח הבסיס.&rlm;", math_expression: "" }
        ],
        final_answer: "סכום השטחים של הפאות הצדדיות בלבד (ללא שני הבסיסים)."
    },
    // שאלה 17
    {
        topic: "geometry_advanced",
        subTopic: "מנסרה ישרה (שטח ונפח)",
        question_text: "נתונה מנסרה שבסיסה הוא ריבוע שאורך צלעו 3 ס\"מ. גובה המנסרה הוא 10 ס\"מ. מהו שטח המעטפת (הצדדים) של המנסרה?&rlm;",
        options: ["120 סמ\"ר", "90 סמ\"ר", "138 סמ\"ר", "30 סמ\"ר"],
        correctAnswer: 0,
        hint: "המעטפת מורכבת מ-4 פאות צדדיות (כי הבסיס הוא ריבוע). כל פאה צדדית היא מלבן שרוחבו 3 וגובהו 10. דרך נוספת: היקף הבסיס כפול הגובה.&rlm;",
        solution_steps: [
            { verbal_explanation: "דרך א': כל פאה צדדית היא מלבן בשטח של 3 כפול 10 = 30. יש 4 פאות כאלו (כי הבסיס מרובע).&rlm;", math_expression: "4 × 30 = 120" },
            { verbal_explanation: "דרך ב' (נוסחה כללית): שטח מעטפת שווה להיקף הבסיס כפול גובה המנסרה. היקף הריבוע הוא 12.&rlm;", math_expression: "12 × 10 = 120" }
        ],
        final_answer: "120 סמ\"ר"
    },
    // שאלה 18
    {
        topic: "geometry_advanced",
        subTopic: "מנסרה ישרה (שטח ונפח)",
        question_text: "אם מגדילים את הגובה של מנסרה ישרה פי 2, ומאשאירים את הבסיס שלה ללא שינוי, פי כמה יגדל הנפח שלה?&rlm;",
        options: ["פי 2", "פי 4", "פי 8", "הנפח לא ישתנה"],
        correctAnswer: 0,
        hint: "הנפח תלוי בגובה ביחס ישר (בלי חזקות). אם הגובה מוכפל, הנפח מוכפל.&rlm;",
        solution_steps: [
            { verbal_explanation: "נוסחת הנפח היא S × h. &rlm;", math_expression: "V_1 = S × h" },
            { verbal_explanation: "אם מחליפים את h ב- 2h, התוצאה כולה מוכפלת ב-2.&rlm;", math_expression: "V_2 = S × (2h) = 2 × (S × h)" }
        ],
        final_answer: "פי 2"
    },
    // שאלה 19
    {
        topic: "geometry_advanced",
        subTopic: "מנסרה ישרה (שטח ונפח)",
        question_text: "מנסרה מתומנת (הבסיס הוא מצולע בעל 8 צלעות) נפתחת לפריסה שלמה (רשת). מכמה מלבנים צדדיים ומכמה בסיסים תורכב הפריסה?&rlm;",
        options: ["8 מלבנים ו-2 בסיסים מתומנים", "10 מלבנים בלבד", "8 מלבנים ובסיס מתומן אחד", "2 מלבנים ו-8 בסיסים"],
        correctAnswer: 0,
        hint: "מספר הפאות הצדדיות של מנסרה תמיד שווה למספר הצלעות של הבסיס שלה. וכמובן, לכל מנסרה יש מכסה ורצפה (2 בסיסים).&rlm;",
        solution_steps: [
            { verbal_explanation: "למנסרה יש תמיד שני בסיסים זהים המקבילים זה לזה (למעלה ולמטה). במקרה זה, שני מתומנים.&rlm;", math_expression: "" },
            { verbal_explanation: "כל צלע של המתומן בבסיס מחוברת לפאה צדדית שהיא מלבן. מכיוון שיש 8 צלעות, ישנם 8 מלבנים צדדיים.&rlm;", math_expression: "" }
        ],
        final_answer: "8 מלבנים ו-2 בסיסים מתומנים"
    },
    // שאלה 20
    {
        topic: "geometry_advanced",
        subTopic: "מנסרה ישרה (שטח ונפח)",
        question_text: "תיבה א' ותיבה ב' הן בעלות אותו הנפח. שטח הבסיס של תיבה א' הוא 40 סמ\"ר, וגובהה הוא 5 ס\"מ. שטח הבסיס של תיבה ב' הוא 20 סמ\"ר. מהו גובהה של תיבה ב'?&rlm;",
        options: ["10 ס\"מ", "5 ס\"מ", "2.5 ס\"מ", "20 ס\"מ"],
        correctAnswer: 0,
        hint: "שטח הבסיס של ב' קטן פי 2, לכן כדי לשמור על אותו נפח, הגובה שלה חייב להיות גדול פי 2. או שפשוט חשבו את הנפח של א', וחלקו בשטח של ב'.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את נפח תיבה א'.&rlm;", math_expression: "40 × 5 = 200" },
            { verbal_explanation: "שלב ב': נפח תיבה ב' הוא גם 200. שטח בסיסה הוא 20. נחלק את הנפח בשטח למציאת הגובה.&rlm;", math_expression: "200 : 20 = 10" }
        ],
        final_answer: "10 ס\"מ"
    },

    // ==========================================================
    // תת נושא 3: גליל ישר (שטח ונפח) (10 שאלות)
    // ==========================================================
    
    // שאלה 21
    {
        topic: "geometry_advanced",
        subTopic: "גליל ישר (שטח ונפח)",
        question_text: "מהי הנוסחה הנכונה לחישוב נפח של גליל ישר (כאשר r הוא רדיוס הבסיס, ו-h הוא גובה הגליל)?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 100 150' width='80' height='120'><ellipse cx='50' cy='20' rx='40' ry='15' fill='#e2e8f0' stroke='#334155' stroke-width='2'/><path d='M 10 20 L 10 120 A 40 15 0 0 0 90 120 L 90 20' fill='#f1f5f9' stroke='#334155' stroke-width='2'/><line x1='50' y1='20' x2='90' y2='20' stroke='#ef4444' stroke-width='2'/><text x='65' y='15' font-family='Arial' font-size='12' fill='#ef4444'>r</text><line x1='10' y1='20' x2='10' y2='120' stroke='#3b82f6' stroke-width='2'/><text x='20' y='70' font-family='Arial' font-size='12' fill='#3b82f6'>h</text></svg></div>",
        options: ["V = π × r² × h", "V = 2 × π × r × h", "V = π × r × h", "V = π × d × h"],
        correctAnswer: 0,
        hint: "כמו במנסרה, נפח שווה לשטח הבסיס כפול הגובה. שטח הבסיס (שהוא עיגול) הוא פאי כפול הרדיוס בריבוע.&rlm;",
        solution_steps: [
            { verbal_explanation: "שטח הבסיס של הגליל (עיגול) הוא π × r².&rlm;", math_expression: "S_{base} = π × r²" },
            { verbal_explanation: "נפח הוא שטח הבסיס כפול גובה הגליל.&rlm;", math_expression: "V = π × r² × h" }
        ],
        final_answer: "V = π × r² × h"
    },
    // שאלה 22
    {
        topic: "geometry_advanced",
        subTopic: "גליל ישר (שטח ונפח)",
        question_text: "רדיוס הבסיס של גליל הוא 3 ס\"מ וגובהו הוא 10 ס\"מ. מהו נפח הגליל (השאירו את π בתשובה)?&rlm;",
        options: ["90π סמ\"ק", "30π סמ\"ק", "60π סמ\"ק", "180π סמ\"ק"],
        correctAnswer: 0,
        hint: "העלו את הרדיוס (3) בריבוע. הכפילו בגובה (10). והוסיפו π.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את שטח הבסיס. רדיוס בריבוע כפול פאי.&rlm;", math_expression: "3² × π = 9π" },
            { verbal_explanation: "שלב ב': נכפול את שטח הבסיס בגובה הגליל.&rlm;", math_expression: "9π × 10 = 90π" }
        ],
        final_answer: "90π סמ\"ק"
    },
    // שאלה 23
    {
        topic: "geometry_advanced",
        subTopic: "גליל ישר (שטח ונפח)",
        question_text: "נפח של גליל הוא 100π סמ\"ק. גובה הגליל הוא 4 ס\"מ. מהו רדיוס הבסיס של הגליל?&rlm;",
        options: ["5 ס\"מ", "25 ס\"מ", "10 ס\"מ", "12.5 ס\"מ"],
        correctAnswer: 0,
        hint: "חלקו את הנפח בגובה לקבלת שטח הבסיס (25π). איזה רדיוס בריבוע ייתן 25?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרכיב את משוואת הנפח.&rlm;", math_expression: "π × r² × 4 = 100π" },
            { verbal_explanation: "שלב ב': נחלק את שני האגפים ב- 4π כדי לבודד את הרדיוס בריבוע.&rlm;", math_expression: "r² = 100π : 4π = 25" },
            { verbal_explanation: "שלב ג': המספר החיובי שריבועו 25 הוא 5.&rlm;", math_expression: "r = √25 = 5" }
        ],
        final_answer: "5 ס\"מ"
    },
    // שאלה 24
    {
        topic: "geometry_advanced",
        subTopic: "גליל ישר (שטח ונפח)",
        question_text: "מהי הנוסחה לשטח המעטפת (הצד העגול בלבד, ללא בסיסים) של גליל?&rlm;",
        options: ["S = 2 × π × r × h", "S = π × r² × h", "S = 2 × π × r²", "S = π × r × h"],
        correctAnswer: 0,
        hint: "אם נגזור את הגליל לאורכו ונפרוס אותו, נקבל מלבן. אורך המלבן הוא היקף העיגול (2πr), והגובה שלו הוא גובה הגליל (h).&rlm;",
        solution_steps: [
            { verbal_explanation: "פריסה של מעטפת גליל יוצרת מלבן.&rlm;", math_expression: "" },
            { verbal_explanation: "אורך המלבן הזה הוא בדיוק היקף בסיס הגליל (2 × π × r).&rlm;", math_expression: "" },
            { verbal_explanation: "רוחב המלבן הוא גובה הגליל (h). לכן השטח הוא מכפלתם.&rlm;", math_expression: "2 × π × r × h" }
        ],
        final_answer: "S = 2 × π × r × h"
    },
    // שאלה 25
    {
        topic: "geometry_advanced",
        subTopic: "גליל ישר (שטח ונפח)",
        question_text: "רדיוס גליל הוא 4 ס\"מ וגובהו הוא 10 ס\"מ. מהו שטח המעטפת של הגליל?&rlm;",
        options: ["80π סמ\"ר", "40π סמ\"ר", "160π סמ\"ר", "16π סמ\"ר"],
        correctAnswer: 0,
        hint: "היקף הבסיס הוא 2 כפול 4 כפול π (כלומר 8π). הכפילו זאת בגובה.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את היקף הבסיס (מעגל).&rlm;", math_expression: "P = 2 × π × 4 = 8π" },
            { verbal_explanation: "שלב ב': נכפול את היקף הבסיס בגובה לקבלת שטח המעטפת.&rlm;", math_expression: "S_{lateral} = 8π × 10 = 80π" }
        ],
        final_answer: "80π סמ\"ר"
    },
    // שאלה 26
    {
        topic: "geometry_advanced",
        subTopic: "גליל ישר (שטח ונפח)",
        question_text: "רוצים לחשב את שטח הפנים הכולל (מעטפת + שני בסיסים) של קופסת שימורים גלילית סגורה. הרדיוס הוא 2 ס\"מ, והגובה הוא 5 ס\"מ. מהו שטח הפנים הכולל?&rlm;",
        options: ["28π סמ\"ר", "20π סמ\"ר", "8π סמ\"ר", "40π סמ\"ר"],
        correctAnswer: 0,
        hint: "חשבו מעטפת: 2π * 2 * 5. (20π). חשבו שטח בסיס אחד: π * 2² (4π). יש שני בסיסים (8π). חברו הכל יחד.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': חישוב שטח המעטפת.&rlm;", math_expression: "2 × π × 2 × 5 = 20π" },
            { verbal_explanation: "שלב ב': חישוב שטח בסיס יחיד (עיגול).&rlm;", math_expression: "π × 2² = 4π" },
            { verbal_explanation: "שלב ג': חיבור המעטפת ופעמיים שטח הבסיס (עליון ותחתון).&rlm;", math_expression: "20π + (2 × 4π) = 20π + 8π = 28π" }
        ],
        final_answer: "28π סמ\"ר"
    },
    // שאלה 27
    {
        topic: "geometry_advanced",
        subTopic: "גליל ישר (שטח ונפח)",
        question_text: "קוטר הבסיס של גליל (d) הוא 10 ס\"מ, וגובהו הוא 8 ס\"מ. מהו נפח הגליל? (שימו לב שמדובר בקוטר, לא ברדיוס!)&rlm;",
        options: ["200π סמ\"ק", "800π סמ\"ק", "400π סמ\"ק", "100π סמ\"ק"],
        correctAnswer: 0,
        hint: "קוטר הוא פעמיים רדיוס. לכן הרדיוס הוא חצי מ-10. חשבו את הרדיוס קודם והציבו בנוסחת הנפח.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נמצא את הרדיוס. הרדיוס שווה למחצית הקוטר.&rlm;", math_expression: "r = 10 : 2 = 5" },
            { verbal_explanation: "שלב ב': נחשב את שטח הבסיס בעזרת הרדיוס.&rlm;", math_expression: "S_{base} = π × 5² = 25π" },
            { verbal_explanation: "שלב ג': נכפול שטח בסיס בגובה למציאת נפח.&rlm;", math_expression: "V = 25π × 8 = 200π" }
        ],
        final_answer: "200π סמ\"ק"
    },
    // שאלה 28
    {
        topic: "geometry_advanced",
        subTopic: "גליל ישר (שטח ונפח)",
        question_text: "אם נכפיל פי 2 את הרדיוס של גליל (ונשאיר את הגובה ללא שינוי), פי כמה יגדל הנפח שלו?&rlm;",
        options: ["פי 4", "פי 2", "פי 8", "הנפח לא ישתנה"],
        correctAnswer: 0,
        hint: "הרדיוס נמצא בנוסחה בחזקת 2 (r²). אם תשימו 2r בתוך החזקה, ה-2 יעלה בריבוע ויהפוך ל-4.&rlm;",
        solution_steps: [
            { verbal_explanation: "נוסחת הנפח המקורית.&rlm;", math_expression: "V_1 = π × r² × h" },
            { verbal_explanation: "נציב רדיוס כפול (2r) לתוך הנוסחה.&rlm;", math_expression: "V_2 = π × (2r)² × h" },
            { verbal_explanation: "הביטוי (2r)² שווה ל- 4r². לכן המקדם 4 יוצא החוצה, והנפח גדל פי 4.&rlm;", math_expression: "V_2 = 4 × (π × r² × h) = 4 × V_1" }
        ],
        final_answer: "פי 4"
    },
    // שאלה 29
    {
        topic: "geometry_advanced",
        subTopic: "גליל ישר (שטח ונפח)",
        question_text: "חצי גליל מלא מים. נפח הגליל השלם הוא 80π. מהי כמות המים בחצי הגליל?&rlm;",
        options: ["40π", "160π", "20π", "80π"],
        correctAnswer: 0,
        hint: "חצי מצורה תלת מימדית מכיל בדיוק חצי מהנפח.&rlm;",
        solution_steps: [
            { verbal_explanation: "אם הגליל השלם יכול להכיל 80π, אז חצי ממנו מכיל בדיוק מחצית מהנפח.&rlm;", math_expression: "" },
            { verbal_explanation: "נחלק ב-2.&rlm;", math_expression: "80π : 2 = 40π" }
        ],
        final_answer: "40π"
    },
    // שאלה 30
    {
        topic: "geometry_advanced",
        subTopic: "גליל ישר (שטח ונפח)",
        question_text: "מכל גלילי גדול מלא במים מרוקן לקנקנים קטנים צרי גזרה. לשני הגלילים (הגדול והקנקן) יש אותו גובה בדיוק, אבל הרדיוס של המכל הגדול גדול פי 3 מהרדיוס של הקנקן. כמה קנקנים אפשר למלא ממכל אחד?&rlm;",
        options: ["9 קנקנים", "3 קנקנים", "6 קנקנים", "27 קנקנים"],
        correctAnswer: 0,
        hint: "כבר למדנו שהרדיוס מועלה בריבוע בנוסחת הנפח. יחס של פי 3 ברדיוס שווה ליחס של פי כמה בנפח?&rlm;",
        solution_steps: [
            { verbal_explanation: "הגובה זהה, ולכן יחס הנפחים תלוי רק ביחס הרדיוסים בריבוע.&rlm;", math_expression: "" },
            { verbal_explanation: "מכיוון שהרדיוס גדול פי 3, הנפח יהיה גדול פי 3 בריבוע.&rlm;", math_expression: "3² = 9" },
            { verbal_explanation: "לכן המכל הגדול מכיל פי 9 מים מאשר קנקן אחד, וניתן למלא ממנו 9 קנקנים.&rlm;", math_expression: "" }
        ],
        final_answer: "9 קנקנים"
    },

    // ==========================================================
    // תת נושא 4: זוויות במצולע וסכום זוויות (10 שאלות)
    // ==========================================================
    
    // שאלה 31
    {
        topic: "geometry_advanced",
        subTopic: "זוויות במצולע וסכום זוויות",
        question_text: "מהו סכום הזוויות הפנימיות במחומש (מצולע בעל 5 צלעות)?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 100 100' width='80' height='80'><polygon points='50,10 90,40 75,90 25,90 10,40' fill='#f3e8ff' stroke='#9333ea' stroke-width='2'/></svg></div>",
        options: ["540 מעלות", "360 מעלות", "720 מעלות", "180 מעלות"],
        correctAnswer: 0,
        hint: "הנוסחה לסכום זוויות במצולע היא: 180 כפול (מספר הצלעות פחות 2). במחומש אפשר לצייר 3 משולשים פנימיים.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': הנוסחה לסכום זוויות פנימיות היא S = 180 × (n - 2) כאשר n הוא מספר הצלעות.&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ב': נציב n = 5.&rlm;", math_expression: "180 × (5 - 2)" },
            { verbal_explanation: "שלב ג': נחשב 180 כפול 3.&rlm;", math_expression: "180 × 3 = 540" }
        ],
        final_answer: "540 מעלות"
    },
    // שאלה 32
    {
        topic: "geometry_advanced",
        subTopic: "זוויות במצולע וסכום זוויות",
        question_text: "מהו סכום הזוויות הפנימיות במשושה (6 צלעות)?&rlm;",
        options: ["720 מעלות", "540 מעלות", "900 מעלות", "360 מעלות"],
        correctAnswer: 0,
        hint: "השתמשו בנוסחה: (6-2)*180.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב את מספר הצלעות (6) בנוסחה 180 × (n-2).&rlm;", math_expression: "180 × (6 - 2)" },
            { verbal_explanation: "שלב ב': נחשב 180 כפול 4.&rlm;", math_expression: "180 × 4 = 720" }
        ],
        final_answer: "720 מעלות"
    },
    // שאלה 33
    {
        topic: "geometry_advanced",
        subTopic: "זוויות במצולע וסכום זוויות",
        question_text: "במצולע משוכלל, כל הזוויות שוות זו לזו. מהו גודלה של זווית פנימית אחת במתומן משוכלל (8 צלעות)?&rlm;",
        options: ["135 מעלות", "120 מעלות", "1080 מעלות", "144 מעלות"],
        correctAnswer: 0,
        hint: "חשבו קודם את הסכום הכולל של הזוויות (180 כפול 6). לאחר מכן, חלקו את הסכום ל-8 זוויות שוות.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את סכום כל הזוויות במתומן.&rlm;", math_expression: "180 × (8 - 2) = 180 × 6 = 1080" },
            { verbal_explanation: "שלב ב': מכיוון שהמתומן משוכלל, 8 הזוויות שלו שוות. נחלק את הסכום ב-8.&rlm;", math_expression: "1080 : 8 = 135" }
        ],
        final_answer: "135 מעלות"
    },
    // שאלה 34
    {
        topic: "geometry_advanced",
        subTopic: "זוויות במצולע וסכום זוויות",
        question_text: "מהו גודלה של זווית *חיצונית* אחת במשושה משוכלל (6 צלעות)?&rlm;",
        options: ["60 מעלות", "120 מעלות", "72 מעלות", "30 מעלות"],
        correctAnswer: 0,
        hint: "סכום כל הזוויות החיצוניות של *כל* מצולע קמור הוא תמיד 360 מעלות. חלקו 360 למספר הצלעות (6).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': תכונה גיאומטרית חשובה - סכום הזוויות החיצוניות בכל מצולע הוא 360°.&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ב': במשושה משוכלל יש 6 זוויות חיצוניות שוות. נחלק את הסכום ב-6.&rlm;", math_expression: "360 : 6 = 60" }
        ],
        final_answer: "60 מעלות"
    },
    // שאלה 35
    {
        topic: "geometry_advanced",
        subTopic: "זוויות במצולע וסכום זוויות",
        question_text: "סכום הזוויות הפנימיות של מצולע הוא 1,080 מעלות. כמה צלעות יש למצולע זה?&rlm;",
        options: ["8", "6", "10", "12"],
        correctAnswer: 0,
        hint: "המשוואה היא: 180(n-2) = 1080. חלקו את 1080 ב-180, והוסיפו 2.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב את הנתון בנוסחת סכום הזוויות.&rlm;", math_expression: "180 × (n - 2) = 1080" },
            { verbal_explanation: "שלב ב': נחלק את שני האגפים ב-180.&rlm;", math_expression: "n - 2 = 1080 : 180 = 6" },
            { verbal_explanation: "שלב ג': נוסיף 2 כדי למצוא את n.&rlm;", math_expression: "n = 6 + 2 = 8" }
        ],
        final_answer: "8"
    },
    // שאלה 36
    {
        topic: "geometry_advanced",
        subTopic: "זוויות במצולע וסכום זוויות",
        question_text: "במרובע כלשהו (4 צלעות), שלוש מתוך הזוויות הן: 50°, 100°, 120°. מה גודלה של הזווית הרביעית?&rlm;",
        options: ["90°", "110°", "80°", "100°"],
        correctAnswer: 0,
        hint: "סכום הזוויות במרובע (מצולע עם 4 צלעות) הוא 360 מעלות.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': סכום זוויות במרובע הוא 360 מעלות (כי ניתן לחלקו ל-2 משולשים).&rlm;", math_expression: "180 × (4 - 2) = 360" },
            { verbal_explanation: "שלב ב': נחבר את 3 הזוויות הנתונות.&rlm;", math_expression: "50 + 100 + 120 = 270" },
            { verbal_explanation: "שלב ג': נחסר מ-360 למציאת הזווית הרביעית.&rlm;", math_expression: "360 - 270 = 90" }
        ],
        final_answer: "90°"
    },
    // שאלה 37
    {
        topic: "geometry_advanced",
        subTopic: "זוויות במצולע וסכום זוויות",
        question_text: "ארבע הזוויות של מרובע מתייחסות זו לזו ביחס של 1:2:3:4. נסמן את הזוויות ב-x, 2x, 3x, 4x. מה גודלה של הזווית הקטנה ביותר (x)?&rlm;",
        options: ["36 מעלות", "45 מעלות", "30 מעלות", "72 מעלות"],
        correctAnswer: 0,
        hint: "חברו את כל איברי היחס ל-10x, והשוו לסכום הזוויות במרובע (360).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': סכום הזוויות במרובע הוא 360. נבנה משוואה.&rlm;", math_expression: "x + 2x + 3x + 4x = 360" },
            { verbal_explanation: "שלב ב': נכנס איברים (10x).&rlm;", math_expression: "10x = 360" },
            { verbal_explanation: "שלב ג': נחלק ב-10.&rlm;", math_expression: "x = 36" }
        ],
        final_answer: "36 מעלות"
    },
    // שאלה 38
    {
        topic: "geometry_advanced",
        subTopic: "זוויות במצולע וסכום זוויות",
        question_text: "במחומש קמור (לא משוכלל), נתונות ארבע זוויות: 100°, 120°, 90°, 110°. מה גודלה של הזווית החמישית?&rlm;",
        options: ["120°", "140°", "100°", "130°"],
        correctAnswer: 0,
        hint: "סכום זוויות במחומש הוא 540 מעלות. חסרו את כל הידועות.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': סכום הזוויות במחומש הוא 540 מעלות.&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ב': נחבר את 4 הזוויות הנתונות.&rlm;", math_expression: "100 + 120 + 90 + 110 = 420" },
            { verbal_explanation: "שלב ג': נחסר את הסכום מ-540 למציאת הזווית הנותרת.&rlm;", math_expression: "540 - 420 = 120" }
        ],
        final_answer: "120°"
    },
    // שאלה 39
    {
        topic: "geometry_advanced",
        subTopic: "זוויות במצולע וסכום זוויות",
        question_text: "סכום הזוויות *החיצוניות* של מחומש משוכלל ושל מתומן משוכלל:&rlm;",
        options: ["תמיד שווה (בשניהם הוא 360 מעלות)", "במתומן גדול יותר כי יש לו יותר צלעות", "במחומש קטן יותר כי יש לו פחות זוויות", "סכום הזוויות החיצוניות תלוי באורכי הצלעות"],
        correctAnswer: 0,
        hint: "זכרו את הכלל החשוב: סכום זוויות חיצוניות אינו תלוי במספר הצלעות!&rlm;",
        solution_steps: [
            { verbal_explanation: "אחד מחוקי הגיאומטריה המרכזיים קובע שסכום הזוויות החיצוניות של כל מצולע קמור (יהיו בו 3 צלעות או 100 צלעות) הוא תמיד קבוע.&rlm;", math_expression: "" },
            { verbal_explanation: "הסכום הוא תמיד 360 מעלות. (כמו להשלים סיבוב מלא סביב המצולע).&rlm;", math_expression: "360°" }
        ],
        final_answer: "תמיד שווה (בשניהם הוא 360 מעלות)"
    },
    // שאלה 40
    {
        topic: "geometry_advanced",
        subTopic: "זוויות במצולע וסכום זוויות",
        question_text: "זווית חיצונית במצולע משוכלל מסוים היא 36 מעלות. כמה צלעות יש למצולע זה?&rlm;",
        options: ["10 צלעות", "36 צלעות", "12 צלעות", "5 צלעות"],
        correctAnswer: 0,
        hint: "סך הזוויות החיצוניות הוא 360. חלקו את הסכום הכולל בגודלה של זווית אחת כדי לגלות כמה זוויות כאלו יש (שזה שווה למספר הצלעות).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': סכום כל הזוויות החיצוניות הוא 360.&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ב': במצולע משוכלל, כל הזוויות החיצוניות שוות. לכן נחלק את הסכום (360) בזווית אחת (36).&rlm;", math_expression: "360 : 36 = 10" },
            { verbal_explanation: "יש 10 זוויות, ולכן למצולע יש 10 צלעות (עשורון).&rlm;", math_expression: "" }
        ],
        final_answer: "10 צלעות"
    },

    // ==========================================================
    // תת נושא 5: אלכסונים במצולע (10 שאלות)
    // ==========================================================
    
    // שאלה 41
    {
        topic: "geometry_advanced",
        subTopic: "אלכסונים במצולע",
        question_text: "כמה אלכסונים ניתן להעביר מקודקוד אחד (בלבד!) בתוך מחומש?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 100 100' width='80' height='80'><polygon points='50,10 90,40 75,90 25,90 10,40' fill='#f1f5f9' stroke='#334155' stroke-width='2'/><circle cx='50' cy='10' r='4' fill='#ef4444'/><line x1='50' y1='10' x2='75' y2='90' stroke='#ef4444' stroke-width='2' stroke-dasharray='4,4'/><line x1='50' y1='10' x2='25' y2='90' stroke='#ef4444' stroke-width='2' stroke-dasharray='4,4'/></svg></div>",
        options: ["2", "5", "3", "4"],
        correctAnswer: 0,
        hint: "אלכסון מחבר שני קודקודים שאינם סמוכים (שכנים). מתוך 5 קודקודים, אי אפשר למתוח אלכסון לעצמו ולשני השכנים מימין ומשמאל (n-3).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': הנוסחה למספר האלכסונים היוצאים מקודקוד אחד היא n - 3 (כי לא מחברים לקודקוד עצמו ולשני שכניו).&rlm;", math_expression: "n - 3" },
            { verbal_explanation: "שלב ב': נציב n=5 (מחומש).&rlm;", math_expression: "5 - 3 = 2" }
        ],
        final_answer: "2"
    },
    // שאלה 42
    {
        topic: "geometry_advanced",
        subTopic: "אלכסונים במצולע",
        question_text: "מהו סך כל האלכסונים (בכל הצורה) שניתן למתוח בתוך מרובע?&rlm;",
        options: ["2", "4", "1", "6"],
        correctAnswer: 0,
        hint: "חשבו על מלבן או ריבוע (שהם מרובעים). כמה קווים אלכסוניים יש בתוכם?&rlm;",
        solution_steps: [
            { verbal_explanation: "מרובע בנוי מ-4 קודקודים. אלכסון מחבר שני קודקודים נגדיים. במרובע יש רק שני זוגות של קודקודים נגדיים.&rlm;", math_expression: "" },
            { verbal_explanation: "לכן, בכל מרובע יש בדיוק 2 אלכסונים.&rlm;", math_expression: "" }
        ],
        final_answer: "2"
    },
    // שאלה 43
    {
        topic: "geometry_advanced",
        subTopic: "אלכסונים במצולע",
        question_text: "מהו מספר האלכסונים הכולל בתוך מחומש (5 צלעות)?&rlm;",
        options: ["5", "10", "2", "15"],
        correctAnswer: 0,
        hint: "הנוסחה למספר האלכסונים הכולל היא: n כפול (n-3) לחלק ל-2.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נשתמש בנוסחה לסך כל האלכסונים.&rlm;", math_expression: "(n × (n - 3)) : 2" },
            { verbal_explanation: "שלב ב': נציב n=5.&rlm;", math_expression: "(5 × (5 - 3)) : 2" },
            { verbal_explanation: "שלב ג': נחשב: 5 כפול 2 שווה 10. נחלק ב-2 ונקבל 5.&rlm;", math_expression: "10 : 2 = 5" }
        ],
        final_answer: "5"
    },
    // שאלה 44
    {
        topic: "geometry_advanced",
        subTopic: "אלכסונים במצולע",
        question_text: "כמה אלכסונים בסך הכל יש במשושה (6 צלעות)?&rlm;",
        options: ["9", "12", "6", "18"],
        correctAnswer: 0,
        hint: "הציבו n=6 בנוסחה n*(n-3)/2.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב את הנתון בנוסחה.&rlm;", math_expression: "(6 × (6 - 3)) : 2" },
            { verbal_explanation: "שלב ב': נפתור את הסוגריים: 6 פחות 3 זה 3.&rlm;", math_expression: "(6 × 3) : 2" },
            { verbal_explanation: "שלב ג': 18 לחלק ל-2.&rlm;", math_expression: "18 : 2 = 9" }
        ],
        final_answer: "9"
    },
    // שאלה 45
    {
        topic: "geometry_advanced",
        subTopic: "אלכסונים במצולע",
        question_text: "במצולע כלשהו, הועברו אלכסונים מקודקוד אחד (רק מקודקוד אחד), והם חילקו את המצולע ל-4 משולשים. כמה צלעות יש למצולע זה?&rlm;",
        options: ["6 (משושה)", "4 (מרובע)", "5 (מחומש)", "7 (משובע)"],
        correctAnswer: 0,
        hint: "מספר המשולשים שנוצרים מהעברת אלכסונים מקודקוד אחד שווה תמיד למספר הצלעות פחות 2 (n-2).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': הנוסחה למספר המשולשים שנוצרים היא n - 2.&rlm;", math_expression: "n - 2 = 4" },
            { verbal_explanation: "שלב ב': נוסיף 2 לשני האגפים כדי למצוא את מספר הצלעות (n).&rlm;", math_expression: "n = 6" }
        ],
        final_answer: "6 (משושה)"
    },
    // שאלה 46
    {
        topic: "geometry_advanced",
        subTopic: "אלכסונים במצולע",
        question_text: "איזה מצולע הוא המצולע היחיד ש**אין בו אף אלכסון**?&rlm;",
        options: ["משולש", "מרובע", "מעגל", "זווית"],
        correctAnswer: 0,
        hint: "אלכסון צריך לחבר בין שני קודקודים שאינם סמוכים. בצורה הזו, כל הקודקודים הם שכנים (סמוכים) אחד של השני.&rlm;",
        solution_steps: [
            { verbal_explanation: "במשולש יש 3 קודקודים. כל קודקוד סמוך (מחובר בצלע) לשני הקודקודים האחרים.&rlm;", math_expression: "" },
            { verbal_explanation: "לכן, לא נשארו קודקודים 'רחוקים' לחבר אליהם אלכסון. בנוסחה: (3-3)=0.&rlm;", math_expression: "" }
        ],
        final_answer: "משולש"
    },
    // שאלה 47
    {
        topic: "geometry_advanced",
        subTopic: "אלכסונים במצולע",
        question_text: "במצולע מסוים, מספר האלכסונים הכולל שיש בו שווה למספר הצלעות שלו. איזה מצולע זה?&rlm;",
        options: ["מחומש (5 צלעות)", "מרובע (4 צלעות)", "משושה (6 צלעות)", "משולש (3 צלעות)"],
        correctAnswer: 0,
        hint: "במרובע יש 4 צלעות ו-2 אלכסונים. במשושה יש 6 צלעות ו-9 אלכסונים. נסו במחומש.&rlm;",
        solution_steps: [
            { verbal_explanation: "ראינו בחישובים קודמים שבמחומש יש 5 צלעות, וכמות האלכסונים הכוללת בו היא גם כן 5.&rlm;", math_expression: "n = 5 , Diagonals = 5" },
            { verbal_explanation: "(הערה למתקדמים: המשוואה היא n*(n-3)/2 = n, לאחר חלוקה ב-n נקבל (n-3)/2 = 1, כלומר n-3=2 ומכאן n=5).&rlm;", math_expression: "" }
        ],
        final_answer: "מחומש (5 צלעות)"
    },
    // שאלה 48
    {
        topic: "geometry_advanced",
        subTopic: "אלכסונים במצולע",
        question_text: "סך כל האלכסונים במצולע הוא 35. כמה צלעות יש למצולע? (אתגר - נסו להציב מספרים בנוסחה)&rlm;",
        options: ["10 (עשורון)", "12", "8 (מתומן)", "9"],
        correctAnswer: 0,
        hint: "הנוסחה: n*(n-3)/2 = 35. הכפילו ב-2 וקבלו n*(n-3) = 70. איזה מספר כפול (המספר פחות 3) שווה 70? (10 כפול 7).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרשום את משוואת האלכסונים ונכפול ב-2.&rlm;", math_expression: "n × (n - 3) = 35 × 2 = 70" },
            { verbal_explanation: "שלב ב': אנו מחפשים שני מספרים שההפרש ביניהם הוא 3, ומכפלתם היא 70.&rlm;", math_expression: "10 × 7 = 70" },
            { verbal_explanation: "שלב ג': המספר הגדול יותר הוא ה-n (מספר הצלעות), לכן התשובה היא 10.&rlm;", math_expression: "n = 10" }
        ],
        final_answer: "10 (עשורון)"
    },
    // שאלה 49
    {
        topic: "geometry_advanced",
        subTopic: "אלכסונים במצולע",
        question_text: "מקודקוד אחד של מצולע יוצאים בדיוק 5 אלכסונים (לשאר הקודקודים). כמה צלעות יש למצולע?&rlm;",
        options: ["8", "5", "7", "6"],
        correctAnswer: 0,
        hint: "מספר האלכסונים מקודקוד אחד הוא n - 3. המשוואה: n - 3 = 5.&rlm;",
        solution_steps: [
            { verbal_explanation: "נוסחת אלכסונים מקודקוד בודד היא הצלעות פחות 3.&rlm;", math_expression: "n - 3 = 5" },
            { verbal_explanation: "נוסיף 3 כדי למצוא את מספר הצלעות.&rlm;", math_expression: "n = 5 + 3 = 8" }
        ],
        final_answer: "8"
    },
    // שאלה 50
    {
        topic: "geometry_advanced",
        subTopic: "אלכסונים במצולע",
        question_text: "מדוע בנוסחת סך האלכסונים (n*(n-3)/2) אנו מחלקים ב-2 בסוף?&rlm;",
        options: ["כדי לא לספור כל אלכסון פעמיים (פעם מכל קצה שלו).", "כדי לקבל את מספר המשולשים שנוצרים.", "זהו תיקון טעות גיאומטרית בסיסית.", "כי לכל מצולע יש שתי זוויות."],
        correctAnswer: 0,
        hint: "כשאתם מותחים אלכסון מקודקוד A לקודקוד B, זהו אותו אלכסון שנמתח מקודקוד B לקודקוד A.&rlm;",
        solution_steps: [
            { verbal_explanation: "כאשר אנו כופלים את מספר הקודקודים (n) במספר האלכסונים שיוצאים מכל אחד (n-3), אנו סופרים כל קו פעמיים - פעם אחת מההתחלה ופעם נוספת מהסוף.&rlm;", math_expression: "" },
            { verbal_explanation: "לכן חייבים לחלק ב-2 כדי לקבל את המספר האמיתי של הקווים היחודיים.&rlm;", math_expression: "" }
        ],
        final_answer: "כדי לא לספור כל אלכסון פעמיים (פעם מכל קצה שלו)."
    },

    // ==========================================================
    // תת נושא 6: מעגל ועיגול (היקף ושטח) (10 שאלות)
    // ==========================================================
    
    // שאלה 51
    {
        topic: "geometry_advanced",
        subTopic: "מעגל ועיגול (היקף ושטח)",
        question_text: "מהו שטח העיגול (S) אם רדיוסו הוא 5 ס\"מ? (השאירו את π בתשובה)&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 100 100' width='80' height='80'><circle cx='50' cy='50' r='40' fill='#fef08a' stroke='#ca8a04' stroke-width='2'/><line x1='50' y1='50' x2='90' y2='50' stroke='#ef4444' stroke-width='2'/><circle cx='50' cy='50' r='3' fill='#0f172a'/><text x='70' y='45' font-family='Arial' font-size='12' fill='#ef4444'>r=5</text></svg></div>",
        options: ["25π סמ\"ר", "10π סמ\"ר", "5π סמ\"ר", "100π סמ\"ר"],
        correctAnswer: 0,
        hint: "נוסחת השטח היא פאי כפול הרדיוס בריבוע. 5 בריבוע הוא...&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נוסחת שטח עיגול.&rlm;", math_expression: "S = π × r²" },
            { verbal_explanation: "שלב ב': נציב את הרדיוס 5 במקום r, ונעלה בריבוע.&rlm;", math_expression: "S = π × 5²" },
            { verbal_explanation: "שלב ג': 5 בריבוע שווה 25.&rlm;", math_expression: "S = 25π" }
        ],
        final_answer: "25π סמ\"ר"
    },
    // שאלה 52
    {
        topic: "geometry_advanced",
        subTopic: "מעגל ועיגול (היקף ושטח)",
        question_text: "מהו היקף המעגל (P) אם הרדיוס שלו הוא 4 ס\"מ?&rlm;",
        options: ["8π ס\"מ", "16π ס\"מ", "4π ס\"מ", "2π ס\"מ"],
        correctAnswer: 0,
        hint: "היקף מעגל הוא פאי כפול פעמיים הרדיוס (כלומר הקוטר).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נוסחת היקף מעגל.&rlm;", math_expression: "P = 2 × π × r" },
            { verbal_explanation: "שלב ב': נציב רדיוס 4 ונכפול ב-2.&rlm;", math_expression: "P = 2 × π × 4" },
            { verbal_explanation: "שלב ג': נסדר את המספרים.&rlm;", math_expression: "P = 8π" }
        ],
        final_answer: "8π ס\"מ"
    },
    // שאלה 53
    {
        topic: "geometry_advanced",
        subTopic: "מעגל ועיגול (היקף ושטח)",
        question_text: "קוטר של עיגול (הקו מקצה לקצה דרך המרכז) הוא 12 ס\"מ. מהו שטח העיגול?&rlm;",
        options: ["36π סמ\"ר", "144π סמ\"ר", "12π סמ\"ר", "24π סמ\"ר"],
        correctAnswer: 0,
        hint: "בנוסחת השטח משתמשים תמיד ברדיוס. הרדיוס הוא חצי מהקוטר (לכן הוא 6). העלו את 6 בריבוע.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נמצא את הרדיוס. קוטר חלקי 2.&rlm;", math_expression: "r = 12 : 2 = 6" },
            { verbal_explanation: "שלב ב': נציב את הרדיוס 6 בנוסחת השטח (פאי כפול רדיוס בריבוע).&rlm;", math_expression: "S = π × 6²" },
            { verbal_explanation: "שלב ג': 6 בריבוע הם 36.&rlm;", math_expression: "S = 36π" }
        ],
        final_answer: "36π סמ\"ר"
    },
    // שאלה 54
    {
        topic: "geometry_advanced",
        subTopic: "מעגל ועיגול (היקף ושטח)",
        question_text: "היקף של מעגל הוא 20π ס\"מ. מהו רדיוס המעגל?&rlm;",
        options: ["10 ס\"מ", "5 ס\"מ", "20 ס\"מ", "100 ס\"מ"],
        correctAnswer: 0,
        hint: "היקף המעגל הוא מכפלת הקוטר ב-π. לכן הקוטר הוא 20. הרדיוס הוא חצי מזה.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרשום את משוואת ההיקף ונוכל לצמצם את ה-π משני הצדדים.&rlm;", math_expression: "2 × π × r = 20π" },
            { verbal_explanation: "שלב ב': אחרי צמצום ה-π, נשארנו עם פעמיים הרדיוס שווה 20.&rlm;", math_expression: "2r = 20" },
            { verbal_explanation: "שלב ג': נחלק ב-2.&rlm;", math_expression: "r = 10" }
        ],
        final_answer: "10 ס\"מ"
    },
    // שאלה 55
    {
        topic: "geometry_advanced",
        subTopic: "מעגל ועיגול (היקף ושטח)",
        question_text: "שטחו של עיגול הוא 49π סמ\"ר. מהו קוטר העיגול (d)?&rlm;",
        options: ["14 ס\"מ", "7 ס\"מ", "49 ס\"מ", "98 ס\"מ"],
        correctAnswer: 0,
        hint: "השטח הוא π*r². לכן r²=49. הרדיוס הוא שורש של 49 (7). הקוטר הוא פעמיים הרדיוס!&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': ממשוואת השטח נבודד את הרדיוס בריבוע.&rlm;", math_expression: "π × r² = 49π  =>  r² = 49" },
            { verbal_explanation: "שלב ב': נוציא שורש כדי למצוא את הרדיוס.&rlm;", math_expression: "r = √49 = 7" },
            { verbal_explanation: "שלב ג': הקוטר (d) כפול מהרדיוס.&rlm;", math_expression: "d = 7 × 2 = 14" }
        ],
        final_answer: "14 ס\"מ"
    },
    // שאלה 56
    {
        topic: "geometry_advanced",
        subTopic: "מעגל ועיגול (היקף ושטח)",
        question_text: "צורה מורכבת מ- 'חצי עיגול'. הרדיוס של חצי העיגול הוא 6 ס\"מ. מהו שטח הצורה (בלי לחשב את π)?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 100 60' width='80' height='48'><path d='M 10 50 A 40 40 0 0 1 90 50 Z' fill='#bae6fd' stroke='#0284c7' stroke-width='2'/><circle cx='50' cy='50' r='3' fill='#0f172a'/><line x1='50' y1='50' x2='90' y2='50' stroke='#ef4444' stroke-width='2'/><text x='70' y='45' font-family='Arial' font-size='12' fill='#ef4444'>6</text></svg></div>",
        options: ["18π סמ\"ר", "36π סמ\"ר", "12π סמ\"ר", "9π סמ\"ר"],
        correctAnswer: 0,
        hint: "חשבו את השטח של עיגול שלם בעל אותו רדיוס, ואז חלקו את התוצאה ב-2.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': שטח עיגול שלם עם רדיוס 6.&rlm;", math_expression: "S_{full} = π × 6² = 36π" },
            { verbal_explanation: "שלב ב': מכיוון שזהו חצי עיגול, נחלק את השטח ב-2.&rlm;", math_expression: "S_{half} = 36π : 2 = 18π" }
        ],
        final_answer: "18π סמ\"ר"
    },
    // שאלה 57
    {
        topic: "geometry_advanced",
        subTopic: "מעגל ועיגול (היקף ושטח)",
        question_text: "חזרה לשאלה הקודמת: מהו **ההיקף הכולל** של צורת 'חצי העיגול' שהרדיוס שלה 6 ס\"מ? (שימו לב: ההיקף כולל גם את הקשת וגם את הקו הישר של הבסיס התחתון!)&rlm;",
        options: ["6π + 12", "6π", "12π", "18π + 12"],
        correctAnswer: 0,
        hint: "הקשת העגולה היא חצי מהיקף מעגל שלם (חצי מ-12π). הבסיס התחתון הוא הקוטר (פעמיים 6). חברו את הקשת והקוטר.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': אורך הקשת המעוגלת הוא חצי מהיקף מעגל שלם.&rlm;", math_expression: "P_{arc} = (2 × π × 6) : 2 = 12π : 2 = 6π" },
            { verbal_explanation: "שלב ב': אל תשכחו את קו הבסיס שסוגר את הצורה (הקוטר). הקוטר הוא פעמיים 6.&rlm;", math_expression: "d = 6 × 2 = 12" },
            { verbal_explanation: "שלב ג': ההיקף הכולל הוא החיבור של הקשת והקוטר (הם אינם מתחברים למספר יחיד כי אחד מכיל פאי והשני לא).&rlm;", math_expression: "6π + 12" }
        ],
        final_answer: "6π + 12"
    },
    // שאלה 58
    {
        topic: "geometry_advanced",
        subTopic: "מעגל ועיגול (היקף ושטח)",
        question_text: "טבעת נוצרת על ידי שני מעגלים שיש להם את אותו מרכז. רדיוס המעגל הגדול הוא 5 ס\"מ, ורדיוס המעגל הפנימי הקטן (החור) הוא 3 ס\"מ. מהו שטח הטבעת?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 100 100' width='80' height='80'><circle cx='50' cy='50' r='40' fill='#dcfce7' stroke='#16a34a' stroke-width='2'/><circle cx='50' cy='50' r='24' fill='#ffffff' stroke='#16a34a' stroke-width='2'/><circle cx='50' cy='50' r='2' fill='#0f172a'/><line x1='50' y1='50' x2='90' y2='50' stroke='#16a34a'/><text x='70' y='45' font-family='Arial' font-size='10' fill='#0f172a'>5</text><line x1='50' y1='50' x2='50' y2='26' stroke='#ef4444'/><text x='40' y='35' font-family='Arial' font-size='10' fill='#ef4444'>3</text></svg></div>",
        options: ["16π סמ\"ר", "25π סמ\"ר", "9π סמ\"ר", "4π סמ\"ר"],
        correctAnswer: 0,
        hint: "חשבו את השטח של המעגל הגדול כולו (25π). חסרו ממנו את השטח של המעגל הקטן הלבן שהוא ה'חור' (9π).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': שטח המעגל הגדול (עם רדיוס 5).&rlm;", math_expression: "S_{large} = π × 5² = 25π" },
            { verbal_explanation: "שלב ב': שטח המעגל הקטן (החור, עם רדיוס 3).&rlm;", math_expression: "S_{small} = π × 3² = 9π" },
            { verbal_explanation: "שלב ג': שטח הטבעת הוא השטח הגדול פחות השטח הקטן.&rlm;", math_expression: "25π - 9π = 16π" }
        ],
        final_answer: "16π סמ\"ר"
    },
    // שאלה 59
    {
        topic: "geometry_advanced",
        subTopic: "מעגל ועיגול (היקף ושטח)",
        question_text: "עיגול חסום בתוך ריבוע בצורה מושלמת כך שהוא נוגע בצלעות. אורך צלע הריבוע הוא 10 ס\"מ. מהו שטח העיגול החסום?&rlm;",
        options: ["25π סמ\"ר", "100π סמ\"ר", "10π סמ\"ר", "50π סמ\"ר"],
        correctAnswer: 0,
        hint: "כאשר עיגול חסום בריבוע, הקוטר שלו (d) שווה לאורך צלע הריבוע (10). מהו הרדיוס? (חצי, 5).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': קוטר העיגול החסום זהה לרוחב הריבוע (10 ס\"מ).&rlm;", math_expression: "d = 10" },
            { verbal_explanation: "שלב ב': הרדיוס הוא חצי מהקוטר.&rlm;", math_expression: "r = 10 : 2 = 5" },
            { verbal_explanation: "שלב ג': שטח העיגול הוא הרדיוס בריבוע כפול פאי.&rlm;", math_expression: "S = π × 5² = 25π" }
        ],
        final_answer: "25π סמ\"ר"
    },
    // שאלה 60
    {
        topic: "geometry_advanced",
        subTopic: "מעגל ועיגול (היקף ושטח)",
        question_text: "גלגל אופניים מתגלגל על הכביש. הקוטר של הגלגל הוא 1 מטר. כמה מטרים יעבור הגלגל אם הוא יעשה בדיוק 10 סיבובים שלמים?&rlm;",
        options: ["10π מטרים", "5π מטרים", "10 מטרים", "100π מטרים"],
        correctAnswer: 0,
        hint: "בכל סיבוב שלם, הגלגל עובר מרחק ששווה בדיוק ל'היקף' שלו. היקף של קוטר 1 הוא 1π. הכפילו במספר הסיבובים.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': סיבוב אחד של הגלגל על הכביש מכסה מרחק השווה להיקף המעגל.&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ב': ההיקף הוא הקוטר כפול π. במקרה זה, 1 כפול π שווה ל-π אחד.&rlm;", math_expression: "P = 1 × π = 1π" },
            { verbal_explanation: "שלב ג': הגלגל עשה 10 סיבובים. נכפיל את ההיקף (1π) ב-10.&rlm;", math_expression: "10 × 1π = 10π" }
        ],
        final_answer: "10π מטרים"
    }

];