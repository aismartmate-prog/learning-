// ========================================================================
// נושא: המשולש
// 3 תתי נושאים | 36 שאלות סה"כ 
// איורים צבעוניים מרהיבים מוטמעים, פתרונות בשלבים מלאים.
// כתיבה נקייה ובטוחה: שימוש ב- × לכפל, ב- : לחילוק, ובשברים פשוטים. אין LaTeX!
// ========================================================================

const questionsDB = [

    // ==========================================================
    // תת נושא 1: סכום זוויות במשולש (12 שאלות)
    // ==========================================================
    
    // שאלה 1
    {
        topic: "triangles",
        subTopic: "סכום זוויות במשולש",
        question_text: "במשולש נתונות שתי זוויות: 50 מעלות ו-70 מעלות. מהו גודלה של הזווית השלישית?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 200 100' width='100%' height='100' style='max-width:200px;'><polygon points='20,80 180,80 80,20' fill='#fef08a' stroke='#ca8a04' stroke-width='2'/><text x='50' y='75' font-family='Arial' font-size='12' fill='#0f172a'>50°</text><text x='140' y='75' font-family='Arial' font-size='12' fill='#0f172a'>70°</text><text x='85' y='40' font-family='Arial' font-size='12' fill='#ef4444' font-weight='bold'>x</text></svg></div>",
        options: ["60 מעלות", "90 מעלות", "80 מעלות", "70 מעלות"],
        correctAnswer: 0,
        hint: "סכום שלוש הזוויות בכל משולש הוא תמיד 180 מעלות. חברו את הזוויות הידועות וחסרו מ-180.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את סכום שתי הזוויות הידועות לנו.&rlm;", math_expression: "50 + 70 = 120" },
            { verbal_explanation: "שלב ב': נחסר את הסכום מסכום הזוויות הכולל במשולש (180 מעלות).&rlm;", math_expression: "180 - 120 = 60" },
            { verbal_explanation: "הזווית השלישית היא בת 60 מעלות.&rlm;", math_expression: "" }
        ],
        final_answer: "60 מעלות"
    },
    // שאלה 2
    {
        topic: "triangles",
        subTopic: "סכום זוויות במשולש",
        question_text: "במשולש ישר זווית, אחת הזוויות החדות היא בת 35 מעלות. מה גודלה של הזווית החדה השנייה?&rlm;",
        options: ["55 מעלות", "65 מעלות", "45 מעלות", "145 מעלות"],
        correctAnswer: 0,
        hint: "במשולש ישר זווית יש זווית אחת של 90 מעלות. לכן, סכום שתי הזוויות החדות הנותרות חייב להיות גם הוא 90 מעלות.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': זווית אחת היא 90 מעלות. זווית שנייה היא 35 מעלות. יחד הן 125 מעלות.&rlm;", math_expression: "90 + 35 = 125" },
            { verbal_explanation: "שלב ב': נחסר מ-180 כדי למצוא את הזווית השלישית (או פשוט נחסר 35 מ-90).&rlm;", math_expression: "180 - 125 = 55" }
        ],
        final_answer: "55 מעלות"
    },
    // שאלה 3
    {
        topic: "triangles",
        subTopic: "סכום זוויות במשולש",
        question_text: "במשולש שווה שוקיים, זווית הראש (הזווית שבין השוקיים השוות) היא בת 40 מעלות. מהו גודלה של כל אחת מזוויות הבסיס?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 200 150' width='100%' height='150' style='max-width:150px;'><polygon points='100,20 40,130 160,130' fill='#dcfce7' stroke='#16a34a' stroke-width='2'/><text x='100' y='50' font-family='Arial' font-size='12' fill='#0f172a' text-anchor='middle'>40°</text><text x='60' y='120' font-family='Arial' font-size='12' fill='#16a34a' font-weight='bold'>x</text><text x='140' y='120' font-family='Arial' font-size='12' fill='#16a34a' font-weight='bold'>x</text></svg></div>",
        options: ["70 מעלות", "140 מעלות", "40 מעלות", "60 מעלות"],
        correctAnswer: 0,
        hint: "במשולש שווה שוקיים, זוויות הבסיס שוות זו לזו. חסרו את זווית הראש מ-180, וחלקו את השארית שווה בשווה ל-2.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחסר את זווית הראש מסכום הזוויות הכולל.&rlm;", math_expression: "180 - 40 = 140" },
            { verbal_explanation: "שלב ב': שתי זוויות הבסיס שוות. לכן נחלק את הסכום הנותר ב-2.&rlm;", math_expression: "140 : 2 = 70" }
        ],
        final_answer: "70 מעלות"
    },
    // שאלה 4
    {
        topic: "triangles",
        subTopic: "סכום זוויות במשולש",
        question_text: "במשולש שווה שוקיים, אחת מזוויות הבסיס היא בת 50 מעלות. מהו גודלה של זווית הראש?&rlm;",
        options: ["80 מעלות", "50 מעלות", "130 מעלות", "100 מעלות"],
        correctAnswer: 0,
        hint: "זוויות הבסיס שוות, ולכן יש שתי זוויות של 50 מעלות. חברו אותן וחסרו מ-180.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': במשולש שווה שוקיים יש שתי זוויות בסיס שוות. לכן יש שתי זוויות של 50° בניסוח זה.&rlm;", math_expression: "50 + 50 = 100" },
            { verbal_explanation: "שלב ב': נחסר את סכום שתי זוויות הבסיס מ-180 כדי למצוא את זווית הראש.&rlm;", math_expression: "180 - 100 = 80" }
        ],
        final_answer: "80 מעלות"
    },
    // שאלה 5
    {
        topic: "triangles",
        subTopic: "סכום זוויות במשולש",
        question_text: "האם ייתכן משולש שבו כל שלוש הזוויות הן בנות 60 מעלות?&rlm;",
        options: ["כן, זהו משולש שווה צלעות", "לא, כי הסכום אינו 180", "כן, זהו משולש ישר זווית", "לא, חייבת להיות זווית קהה"],
        correctAnswer: 0,
        hint: "בדקו מה סכום הזוויות: 60 ועוד 60 ועוד 60.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחבר את שלוש הזוויות יחד.&rlm;", math_expression: "60 + 60 + 60 = 180" },
            { verbal_explanation: "שלב ב': מכיוון שהסכום הוא בדיוק 180°, המשולש אפשרי וזהו משולש שווה צלעות.&rlm;", math_expression: "" }
        ],
        final_answer: "כן, זהו משולש שווה צלעות"
    },
    // שאלה 6
    {
        topic: "triangles",
        subTopic: "סכום זוויות במשולש",
        question_text: "היחס בין שלוש הזוויות במשולש הוא 1:2:3. מה גודלה של הזווית הגדולה ביותר?&rlm;",
        options: ["90 מעלות", "60 מעלות", "100 מעלות", "120 מעלות"],
        correctAnswer: 0,
        hint: "חברו את חלקי היחס (1+2+3). חלקו את 180 בסכום החלקים, ואת התוצאה הכפילו בחלק הגדול ביותר (3).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את סך כל החלקים ביחס.&rlm;", math_expression: "1 + 2 + 3 = 6" },
            { verbal_explanation: "שלב ב': נחלק 180 מעלות ב-6 כדי למצוא ערך של חלק אחד.&rlm;", math_expression: "180 : 6 = 30" },
            { verbal_explanation: "שלב ג': הזווית הגדולה מיוצגת על ידי 3 חלקים. נכפיל ב-30.&rlm;", math_expression: "3 × 30 = 90" }
        ],
        final_answer: "90 מעלות"
    },
    // שאלה 7
    {
        topic: "triangles",
        subTopic: "סכום זוויות במשולש",
        question_text: "במשולש מסוים, זווית אחת גדולה ב-20 מעלות מזווית שנייה, והזווית השלישית היא בת 60 מעלות. מה גודלה של הזווית הקטנה ביותר במשולש?&rlm;",
        options: ["50 מעלות", "70 מעלות", "40 מעלות", "60 מעלות"],
        correctAnswer: 0,
        hint: "הורידו 60 מ-180. הסכום של שתי הזוויות הנותרות הוא 120. סמנו אחת ב-x והשנייה ב-x+20.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': סכום שתי הזוויות הבלתי ידועות הוא 180 פחות 60.&rlm;", math_expression: "180 - 60 = 120" },
            { verbal_explanation: "שלב ב': נסמן זווית אחת ב-x, והשנייה x+20.&rlm;", math_expression: "x + (x + 20) = 120" },
            { verbal_explanation: "שלב ג': נכנס איברים (2x) ונחסר 20 משני האגפים.&rlm;", math_expression: "2x = 100" },
            { verbal_explanation: "שלב ד': נחלק ב-2 למציאת הזווית הקטנה.&rlm;", math_expression: "x = 50" }
        ],
        final_answer: "50 מעלות"
    },
    // שאלה 8
    {
        topic: "triangles",
        subTopic: "סכום זוויות במשולש",
        question_text: "האם ייתכן משולש שבו יש שתי זוויות קהות (זוויות שגדולות מ-90 מעלות)?&rlm;",
        options: ["לא, כי סכומן יעבור את 180 מעלות", "כן, אם זוויות אלה שוות בדיוק", "כן, במשולש שווה שוקיים", "לא, כי משולש מכיל רק זוויות חדות"],
        correctAnswer: 0,
        hint: "זווית קהה גדולה מ-90 מעלות. אם יהיו שתיים כאלה, מה יהיה הסכום שלהן?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': זווית קהה היא זווית הגדולה מ-90°.&rlm;", math_expression: "a > 90 , b > 90" },
            { verbal_explanation: "שלב ב': אם נחבר שתי זוויות שכל אחת גדולה מ-90, נקבל סכום שגדול מ-180.&rlm;", math_expression: "a + b > 180" },
            { verbal_explanation: "מאחר שסכום כל 3 הזוויות חייב להיות בדיוק 180, לא ייתכנו שתי זוויות קהות.&rlm;", math_expression: "" }
        ],
        final_answer: "לא, כי סכומן יעבור את 180 מעלות"
    },
    // שאלה 9
    {
        topic: "triangles",
        subTopic: "סכום זוויות במשולש",
        question_text: "משולש ישר זווית הוא גם שווה שוקיים. מהן מידות הזוויות החדות שלו?&rlm;",
        options: ["45 מעלות כל אחת", "60 ו-30 מעלות", "40 ו-50 מעלות", "לא ייתכן משולש כזה"],
        correctAnswer: 0,
        hint: "זווית אחת היא 90 (ישר זווית). שתי החדות נשארו עם סכום של 90, ומכיוון שהמשולש שווה שוקיים, הן חייבות להיות שוות.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': הזווית הישרה היא 90°. לכן סכום שתי הזוויות הנותרות הוא 90°.&rlm;", math_expression: "180 - 90 = 90" },
            { verbal_explanation: "שלב ב': במשולש שווה שוקיים, מול שוקיים שוות נמצאות זוויות שוות. לכן נחלק 90 ל-2.&rlm;", math_expression: "90 : 2 = 45" }
        ],
        final_answer: "45 מעלות כל אחת"
    },
    // שאלה 10
    {
        topic: "triangles",
        subTopic: "סכום זוויות במשולש",
        question_text: "זווית אחת במשולש היא x, הזווית השנייה היא 2x, והזווית השלישית היא 3x. מצאו את ערכו של x.&rlm;",
        options: ["30", "60", "20", "45"],
        correctAnswer: 0,
        hint: "הסכום של x + 2x + 3x חייב להיות 180.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נבנה משוואה המייצגת את סכום הזוויות במשולש.&rlm;", math_expression: "x + 2x + 3x = 180" },
            { verbal_explanation: "שלב ב': נכנס איברים דומים (סך הכל 6 פעמים x).&rlm;", math_expression: "6x = 180" },
            { verbal_explanation: "שלב ג': נחלק ב-6 למציאת x.&rlm;", math_expression: "x = 30" }
        ],
        final_answer: "30"
    },
    // שאלה 11
    {
        topic: "triangles",
        subTopic: "סכום זוויות במשולש",
        question_text: "במשולש נתון שהזווית החיצונית לאחד הקודקודים היא 110 מעלות. גודל הזווית הפנימית הצמודה לה הוא...&rlm;",
        options: ["70 מעלות", "110 מעלות", "180 מעלות", "55 מעלות"],
        correctAnswer: 0,
        hint: "זווית פנימית וזווית חיצונית צמודה לה יושבות על קו ישר, ולכן סכומן יחד הוא תמיד 180 מעלות.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': זווית חיצונית וזווית פנימית צמודה משלימות לזווית שטוחה (180°).&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ב': נחסר את הזווית החיצונית מ-180.&rlm;", math_expression: "180 - 110 = 70" }
        ],
        final_answer: "70 מעלות"
    },
    // שאלה 12
    {
        topic: "triangles",
        subTopic: "סכום זוויות במשולש",
        question_text: "משולש מונח על קו ישר (זווית שטוחה). שתיים מזוויות המשולש הן 40 ו-80 מעלות. מה תהיה הזווית החיצונית הסמוכה לזווית השלישית של המשולש?&rlm;",
        options: ["120 מעלות", "60 מעלות", "140 מעלות", "100 מעלות"],
        correctAnswer: 0,
        hint: "חשבו את הזווית השלישית של המשולש, ואז חסרו מ-180 כדי למצוא את החיצונית (או השתמשו בכלל: זווית חיצונית שווה לסכום שתי הפנימיות שאינן צמודות לה).&rlm;",
        solution_steps: [
            { verbal_explanation: "דרך א': נמצא את הזווית השלישית. 180 פחות (80+40).&rlm;", math_expression: "180 - 120 = 60" },
            { verbal_explanation: "הזווית החיצונית צמודה לה ומשלימה ל-180.&rlm;", math_expression: "180 - 60 = 120" },
            { verbal_explanation: "דרך ב' מהירה: זווית חיצונית שווה לסכום שתי הפנימיות האחרות.&rlm;", math_expression: "40 + 80 = 120" }
        ],
        final_answer: "120 מעלות"
    },

    // ==========================================================
    // תת נושא 2: שטח משולש (12 שאלות)
    // ==========================================================
    
    // שאלה 13
    {
        topic: "triangles",
        subTopic: "שטח משולש",
        question_text: "מהו שטחו של המשולש שלפניכם? (אורך הבסיס 10 ס\"מ, הגובה 6 ס\"מ)&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 200 120' width='100%' height='120' style='max-width:200px;'><polygon points='20,100 180,100 100,20' fill='#fef08a' stroke='#ca8a04' stroke-width='2'/><line x1='100' y1='20' x2='100' y2='100' stroke='#ca8a04' stroke-width='2' stroke-dasharray='5,5'/><text x='100' y='115' font-family='Arial' font-size='14' font-weight='bold' fill='#0f172a' text-anchor='middle'>10</text><text x='115' y='65' font-family='Arial' font-size='14' font-weight='bold' fill='#ef4444' text-anchor='middle'>h=6</text></svg></div>",
        options: ["30 סמ\"ר", "60 סמ\"ר", "16 סמ\"ר", "15 סמ\"ר"],
        correctAnswer: 0,
        hint: "נוסחת שטח משולש: (בסיס כפול גובה) לחלק ל-2.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נזהה נתונים: בסיס = 10, גובה = 6.&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ב': נכפול את הבסיס בגובה.&rlm;", math_expression: "10 × 6 = 60" },
            { verbal_explanation: "שלב ג': נחלק ב-2 כי זה משולש.&rlm;", math_expression: "60 : 2 = 30" }
        ],
        final_answer: "30 סמ\"ר"
    },
    // שאלה 14
    {
        topic: "triangles",
        subTopic: "שטח משולש",
        question_text: "במשולש ישר זווית, אורכי הניצבים (הצלעות המרכיבות את הזווית הישרה) הם 8 ס\"מ ו-5 ס\"מ. אורך היתר (הצלע הארוכה) הוא 9.4 ס\"מ. מהו שטח המשולש?&rlm;",
        options: ["20 סמ\"ר", "40 סמ\"ר", "47 סמ\"ר", "23.5 סמ\"ר"],
        correctAnswer: 0,
        hint: "במשולש ישר זווית, הניצבים הם גם הבסיס והגובה. אין צורך להשתמש באורך היתר.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': במשולש ישר זווית הניצבים משמשים כבסיס וכגובה. לכן: בסיס = 8, גובה = 5.&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ב': נכפול אותם ונחלק ב-2.&rlm;", math_expression: "(8 × 5) : 2" },
            { verbal_explanation: "40 לחלק ל-2 שווה ל-20.&rlm;", math_expression: "20" }
        ],
        final_answer: "20 סמ\"ר"
    },
    // שאלה 15
    {
        topic: "triangles",
        subTopic: "שטח משולש",
        question_text: "שטחו של משולש הוא 48 סמ\"ר. גובה המשולש הוא 8 ס\"מ. מהו אורך הבסיס אליו יורד הגובה?&rlm;",
        options: ["12 ס\"מ", "6 ס\"מ", "24 ס\"מ", "16 ס\"מ"],
        correctAnswer: 0,
        hint: "בגלל שחילקנו ב-2 כדי למצוא את השטח, הכפילו את השטח פי 2 (48 כפול 2 = 96). איזה מספר כפול 8 שווה 96?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': לפי הנוסחה, בסיס כפול גובה שווה לפעמיים השטח.&rlm;", math_expression: "b × 8 = 48 × 2" },
            { verbal_explanation: "שלב ב': 48 כפול 2 שווה 96.&rlm;", math_expression: "b × 8 = 96" },
            { verbal_explanation: "שלב ג': נחלק 96 ב-8 כדי למצוא את הבסיס.&rlm;", math_expression: "b = 12" }
        ],
        final_answer: "12 ס\"מ"
    },
    // שאלה 16
    {
        topic: "triangles",
        subTopic: "שטח משולש",
        question_text: "משולש קהה זווית מונח על בסיס שאורכו 6 ס\"מ. הגובה שיורד אל *המשך* הבסיס הוא באורך 5 ס\"מ. מהו השטח?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 200 100' width='100%' height='100' style='max-width:200px;'><polygon points='80,80 180,80 20,20' fill='#bae6fd' stroke='#0284c7' stroke-width='2'/><line x1='20' y1='80' x2='80' y2='80' stroke='#0284c7' stroke-width='2' stroke-dasharray='5,5'/><line x1='20' y1='20' x2='20' y2='80' stroke='#ef4444' stroke-width='2' stroke-dasharray='5,5'/><text x='130' y='95' font-family='Arial' font-size='12' fill='#0f172a'>6 ס\"מ</text><text x='10' y='55' font-family='Arial' font-size='12' fill='#ef4444'>h=5</text></svg></div>",
        options: ["15 סמ\"ר", "30 סמ\"ר", "11 סמ\"ר", "7.5 סמ\"ר"],
        correctAnswer: 0,
        hint: "במשולש קהה זווית, הגובה נופל מחוץ למשולש. עם זאת, נוסחת השטח נשארת אותה נוסחה: בסיס (החלק הממשי של המשולש) כפול גובה, חלקי 2.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': הבסיס הוא הצלע הפיזית של המשולש בלבד, כלומר 6.&rlm;", math_expression: "b = 6" },
            { verbal_explanation: "שלב ב': הגובה החיצוני הוא 5.&rlm;", math_expression: "h = 5" },
            { verbal_explanation: "שלב ג': נכפול ונחלק ב-2.&rlm;", math_expression: "(6 × 5) : 2 = 15" }
        ],
        final_answer: "15 סמ\"ר"
    },
    // שאלה 17
    {
        topic: "triangles",
        subTopic: "שטח משולש",
        question_text: "קיר בצורת מלבן שמידותיו 10 מטרים על 4 מטרים צבוע כך שחציו התחתון באלכסון (יוצר משולש) צבוע בכחול, והחצי העליון לבן. מהו שטח החלק הכחול (במ\"ר)?&rlm;",
        options: ["20", "40", "14", "10"],
        correctAnswer: 0,
        hint: "האלכסון מחלק את המלבן לשני משולשים ישרי זווית חופפים ושווים בשטחם. חשבו את שטח המלבן וחלקו ב-2.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את שטחו הכולל של הקיר المלבני.&rlm;", math_expression: "10 × 4 = 40" },
            { verbal_explanation: "שלב ב': האלכסון מחלק את השטח בדיוק לחצי.&rlm;", math_expression: "40 : 2 = 20" }
        ],
        final_answer: "20"
    },
    // שאלה 18
    {
        topic: "triangles",
        subTopic: "שטח משולש",
        question_text: "נתונים שני משולשים. למשולש א' יש בסיס של 8 וגובה 5. למשולש ב' יש בסיס של 10. איזה גובה נדרש למשולש ב' כדי ששני המשולשים יהיו שווים בשטחם?&rlm;",
        options: ["4", "5", "8", "10"],
        correctAnswer: 0,
        hint: "מצאו את השטח של משולש א'. לאחר מכן, הציבו את השטח שמצאתם בנוסחה של משולש ב' עם הבסיס 10.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את שטח משולש א'.&rlm;", math_expression: "(8 × 5) : 2 = 20" },
            { verbal_explanation: "שלב ב': שטח משולש ב' חייב להיות 20. כלומר מכפלת בסיס וגובה חייבת להיות 40.&rlm;", math_expression: "10 × h = 40" },
            { verbal_explanation: "שלב ג': נחלק 40 ב-10.&rlm;", math_expression: "h = 4" }
        ],
        final_answer: "4"
    },
    // שאלה 19
    {
        topic: "triangles",
        subTopic: "שטח משולש",
        question_text: "למשולש שווה שוקיים יש בסיס באורך 10 ס\"מ, ואורך השוק הוא 13 ס\"מ. הגובה לבסיס הוא 12 ס\"מ. מהו שטח המשולש?&rlm;",
        options: ["60 סמ\"ר", "65 סמ\"ר", "130 סמ\"ר", "120 סמ\"ר"],
        correctAnswer: 0,
        hint: "יש לכם נתון מיותר (אורך השוק). בחרו רק את הבסיס ואת הגובה שיורד אליו.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': הנתונים הרלוונטיים לשטח הם רק הבסיס והגובה היורד אליו.&rlm;", math_expression: "b = 10 , h = 12" },
            { verbal_explanation: "שלב ב': נכפול את הבסיס בגובה ונחלק ב-2.&rlm;", math_expression: "(10 × 12) : 2" },
            { verbal_explanation: "120 חלקי 2 שווה 60.&rlm;", math_expression: "60" }
        ],
        final_answer: "60 סמ\"ר"
    },
    // שאלה 20
    {
        topic: "triangles",
        subTopic: "שטח משולש",
        question_text: "בתוך ריבוע שצלעו 6 ס\"מ ציירו משולש. בסיס המשולש מונח במלואו על הצלע התחתונה של הריבוע, והקודקוד העליון שלו נוגע בצלע העליונה של הריבוע. מהו שטח המשולש?&rlm;",
        options: ["18 סמ\"ר", "36 סמ\"ר", "9 סמ\"ר", "12 סמ\"ר"],
        correctAnswer: 0,
        hint: "בסיס המשולש זהה לצלע הריבוע (6). גובה המשולש שווה גם הוא לצלע הריבוע (6).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': בסיס המשולש חופף לצלע הריבוע, לכן אורכו 6.&rlm;", math_expression: "b = 6" },
            { verbal_explanation: "שלב ב': הגובה יורד מקצה לקצה בריבוע, לכן גם הוא 6.&rlm;", math_expression: "h = 6" },
            { verbal_explanation: "שלב ג': נחשב את השטח.&rlm;", math_expression: "(6 × 6) : 2 = 18" }
        ],
        final_answer: "18 סמ\"ר"
    },
    // שאלה 21
    {
        topic: "triangles",
        subTopic: "שטח משולש",
        question_text: "גובה של משולש קטן פי 2 מאורך הבסיס שלו. אם אורך הבסיס הוא 10 ס\"מ, מהו שטח המשולש?&rlm;",
        options: ["25 סמ\"ר", "50 סמ\"ר", "100 סמ\"ר", "12.5 סמ\"ר"],
        correctAnswer: 0,
        hint: "מצאו קודם את הגובה (חצי מ-10), ואז השתמשו בנוסחה.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': אורך הבסיס הוא 10. הגובה קטן פי 2, ולכן הוא 5.&rlm;", math_expression: "h = 10 : 2 = 5" },
            { verbal_explanation: "שלב ב': נחשב את השטח על ידי הכפלתם וחלוקה ב-2.&rlm;", math_expression: "(10 × 5) : 2" },
            { verbal_explanation: "50 לחלק ל-2 שווה 25.&rlm;", math_expression: "25" }
        ],
        final_answer: "25 סמ\"ר"
    },
    // שאלה 22
    {
        topic: "triangles",
        subTopic: "שטח משולש",
        question_text: "מה יקרה לשטח של משולש אם נגדיל רק את הגובה שלו פי 3 (נשאיר את הבסיס כפי שהוא)?&rlm;",
        options: ["השטח יגדל פי 3", "השטח יגדל פי 6", "השטח לא ישתנה", "השטח יגדל פי 1.5"],
        correctAnswer: 0,
        hint: "שטח משולש עומד ביחס ישר לגובה שלו. אם מכפילים גורם אחד, התוצאה מוכפלת באותו המספר.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נוסחת השטח המקורית היא בסיס כפול גובה חלקי 2.&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ב': אם נחליף את 'גובה' ב-'3 כפול גובה', התוצאה כולה תוכפל ב-3.&rlm;", math_expression: "" }
        ],
        final_answer: "השטח יגדל פי 3"
    },
    // שאלה 23
    {
        topic: "triangles",
        subTopic: "שטח משולש",
        question_text: "לפניכם צורה המורכבת ממלבן ומשולש הצמוד אליו. אורך המלבן 8 ורוחבו 4. המשולש יושב על צלע הרוחב של המלבן והגובה שלו (היוצא מהמלבן החוצה) הוא 3. מהו השטח הכולל של הצורה המורכבת?&rlm;",
        options: ["38", "44", "32", "56"],
        correctAnswer: 0,
        hint: "חשבו בנפרד: שטח המלבן הוא 8x4. שטח המשולש מבוסס על רוחב המלבן (4) והגובה הנתון (3).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב שטח המלבן.&rlm;", math_expression: "8 × 4 = 32" },
            { verbal_explanation: "שלב ב': בסיס המשולש הוא צלע המלבן (4) והגובה 3. נחשב שטח משולש.&rlm;", math_expression: "(4 × 3) : 2 = 6" },
            { verbal_explanation: "שלב ג': נחבר את שני השטחים.&rlm;", math_expression: "32 + 6 = 38" }
        ],
        final_answer: "38"
    },
    // שאלה 24
    {
        topic: "triangles",
        subTopic: "שטח משולש",
        question_text: "קבלן צריך לרצף גינה משולשת שהבסיס שלה 20 מטרים וגובהה 10 מטרים. מחיר הריצוף הוא 50 שקלים למ\"ר. כמה יעלה לרצף את הגינה כולה?&rlm;",
        options: ["5,000 שקלים", "10,000 שקלים", "2,500 שקלים", "1,000 שקלים"],
        correctAnswer: 0,
        hint: "תחילה מצאו את שטח המשולש במ\"ר. לאחר מכן כפלו את השטח במחיר למטר מרובע.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את שטח הגינה במ\"ר.&rlm;", math_expression: "(20 × 10) : 2 = 200 : 2 = 100" },
            { verbal_explanation: "שלב ב': נכפול את השטח (100) במחיר לכל מטר (50).&rlm;", math_expression: "100 × 50 = 5000" }
        ],
        final_answer: "5,000 שקלים"
    },

    // ==========================================================
    // תת נושא 3: סוגי משולשים (12 שאלות)
    // ==========================================================
    
    // שאלה 25
    {
        topic: "triangles",
        subTopic: "סוגי משולשים",
        question_text: "איזה מהמשפטים הבאים מתאר משולש שווה שוקיים?&rlm;",
        options: ["משולש שיש לו לפחות שתי צלעות השוות באורכן.", "משולש שכל צלעותיו שוות זו לזו.", "משולש שיש לו זווית ישרה אחת.", "משולש שבו כל צלע באורך שונה."],
        correctAnswer: 0,
        hint: "המילה 'שוקיים' ברבים (זוג) מעידה על שתי צלעות המהוות זוג שווה.&rlm;",
        solution_steps: [
            { verbal_explanation: "משולש שווה שוקיים מוגדר כמשולש בעל (לפחות) שתי צלעות שוות. (הערה: גם משולש שווה צלעות הוא סוג מיוחד של משולש שווה שוקיים).&rlm;", math_expression: "" }
        ],
        final_answer: "משולש שיש לו לפחות שתי צלעות השוות באורכן."
    },
    // שאלה 26
    {
        topic: "triangles",
        subTopic: "סוגי משולשים",
        question_text: "משולש בעל זוויות 40°, 60° ו-80° נקרא...&rlm;",
        options: ["משולש חד זווית", "משולש ישר זווית", "משולש קהה זווית", "משולש שווה שוקיים"],
        correctAnswer: 0,
        hint: "בדקו את הזווית הגדולה ביותר. האם היא קטנה מ-90, בדיוק 90, או גדולה מ-90?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נבחן את כל הזוויות: כולן קטנות מ-90 מעלות.&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ב': משולש שבו כל הזוויות קטנות מ-90 מעלות נקרא משולש חד זווית.&rlm;", math_expression: "" }
        ],
        final_answer: "משולש חד זווית"
    },
    // שאלה 27
    {
        topic: "triangles",
        subTopic: "סוגי משולשים",
        question_text: "במשולש שווה צלעות...&rlm;",
        options: ["כל הזוויות שוות ל-60 מעלות.", "יש זווית אחת ישרה ושתים של 45 מעלות.", "יש זווית אחת קהה.", "אחת הצלעות גדולה מסכום שתי האחרות."],
        correctAnswer: 0,
        hint: "אם כל 3 הצלעות שוות, הרי שגם כל 3 הזוויות חייבות להיות שוות. חלקו 180 ב-3.&rlm;",
        solution_steps: [
            { verbal_explanation: "במשולש שווה צלעות, יש שלוש זוויות שוות.&rlm;", math_expression: "" },
            { verbal_explanation: "סכום הזוויות הוא 180. לכן נחלק 180 ל-3 ונקבל 60 מעלות לכל זווית.&rlm;", math_expression: "180 : 3 = 60" }
        ],
        final_answer: "כל הזוויות שוות ל-60 מעלות."
    },
    // שאלה 28
    {
        topic: "triangles",
        subTopic: "סוגי משולשים",
        question_text: "האם משולש יכול להיות גם קהה זווית וגם שווה שוקיים באותו הזמן?&rlm;",
        options: ["כן, בהחלט", "לא, זה בלתי אפשרי", "רק אם הוא שווה צלעות", "רק אם סכום צלעותיו גדול מ-100"],
        correctAnswer: 0,
        hint: "נסו לדמיין משולש שבו זווית הראש היא 120 מעלות, ושתי זוויות הבסיס שוות ל-30 מעלות כל אחת.&rlm;",
        solution_steps: [
            { verbal_explanation: "משולש קהה זווית מכיל זווית אחת הגדולה מ-90. לדוגמה: 100°.&rlm;", math_expression: "" },
            { verbal_explanation: "אם הזווית הקהה היא 'זווית הראש', נשארו 80 מעלות לשתי הזוויות הנותרות. ניתן לחלק אותן שווה בשווה (40° ו-40°). במצב זה המשולש הוא גם שווה שוקיים וגם קהה זווית.&rlm;", math_expression: "" }
        ],
        final_answer: "כן, בהחלט"
    },
    // שאלה 29
    {
        topic: "triangles",
        subTopic: "סוגי משולשים",
        question_text: "משולש שבו אורכי הצלעות הם 5 ס\"מ, 7 ס\"מ ו-9 ס\"מ מוגדר כ...&rlm;",
        options: ["משולש שונה צלעות", "משולש שווה שוקיים", "משולש שווה צלעות", "משולש ישר זווית"],
        correctAnswer: 0,
        hint: "הביטו באורכי הצלעות: האם יש שתיים שוות? לא. לכן הוא אינו שווה שוקיים. האם כולם שוות? לא.&rlm;",
        solution_steps: [
            { verbal_explanation: "מכיוון שכל שלוש הצלעות הן באורכים שונים לחלוטין (5, 7, 9), המשולש מוגדר כמשולש שונה צלעות.&rlm;", math_expression: "" }
        ],
        final_answer: "משולש שונה צלעות"
    },
    // שאלה 30
    {
        topic: "triangles",
        subTopic: "סוגי משולשים",
        question_text: "במשולש ישר זווית יש זווית אחת של 90°. האם ייתכן שמשולש כזה יהיה משולש שווה צלעות?&rlm;",
        options: ["לא, כי במשולש שווה צלעות כל הזוויות הן 60°", "כן, אם הצלעות הן 3, 4, 5", "כן, זה תלוי באורך היתר", "לא, כי במשולש שווה צלעות הזווית חייבת להיות 180°"],
        correctAnswer: 0,
        hint: "משולש שווה צלעות מכתיב שכל הזוויות שוות (60). אם יש זווית של 90, לא כולן יכולות להיות שוות.&rlm;",
        solution_steps: [
            { verbal_explanation: "כדי שמשולש יהיה שווה צלעות, חובה שכל זוויותיו יהיו שוות ל-60°.&rlm;", math_expression: "" },
            { verbal_explanation: "מכיוון שבמשולש ישר זווית יש זווית של 90°, הוא לעולם לא יוכל להיות שווה צלעות.&rlm;", math_expression: "" }
        ],
        final_answer: "לא, כי במשולש שווה צלעות כל הזוויות הן 60°"
    },
    // שאלה 31
    {
        topic: "triangles",
        subTopic: "סוגי משולשים",
        question_text: "המשפט 'הצלע הארוכה ביותר במשולש נמצאת תמיד מול הזווית הגדולה ביותר' הוא...&rlm;",
        options: ["נכון תמיד", "נכון רק במשולש ישר זווית", "שגוי", "נכון רק במשולש שווה צלעות"],
        correctAnswer: 0,
        hint: "חישבו על משולש קהה זווית: מול הזווית הקהה (הכי גדולה) תמיד תמצאו את הצלע הארוכה ביותר.&rlm;",
        solution_steps: [
            { verbal_explanation: "זהו משפט בסיסי בגיאומטריה: במשולש, מול הצלע הגדולה מונחת הזווית הגדולה, ולהיפך.&rlm;", math_expression: "" },
            { verbal_explanation: "המשפט הזה נכון תמיד לכל סוגי המשולשים.&rlm;", math_expression: "" }
        ],
        final_answer: "נכון תמיד"
    },
    // שאלה 32
    {
        topic: "triangles",
        subTopic: "סוגי משולשים",
        question_text: "אי-שוויון המשולש קובע שסכום כל שתי צלעות במשולש חייב להיות גדול מהצלע השלישית. האם ייתכן משולש שצלעותיו הן 2 ס\"מ, 3 ס\"מ ו-8 ס\"מ?&rlm;",
        options: ["לא, כי 2+3 קטן מ-8", "כן, זה משולש שונה צלעות", "כן, זה משולש קהה זווית", "לא, כי אין בו זווית ישרה"],
        correctAnswer: 0,
        hint: "חברו את שתי הצלעות הקצרות. אם הסכום קטן מהצלע הארוכה, אי אפשר לסגור את המשולש!&rlm;",
        solution_steps: [
            { verbal_explanation: "נבדוק את התנאי: נחבר את שתי הצלעות הקצרות (2 ו-3).&rlm;", math_expression: "2 + 3 = 5" },
            { verbal_explanation: "הסכום 5 קטן מהצלע השלישית 8. הקווים לא ייפגשו ולכן לא יווצר משולש.&rlm;", math_expression: "5 < 8" }
        ],
        final_answer: "לא, כי 2+3 קטן מ-8"
    },
    // שאלה 33
    {
        topic: "triangles",
        subTopic: "סוגי משולשים",
        question_text: "איזה סוג משולש מתואר באיור שלפניכם?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 200 100' width='100%' height='100' style='max-width:200px;'><polygon points='20,80 140,80 180,20' fill='#f3e8ff' stroke='#a855f7' stroke-width='2'/><path d='M 120,80 A 20,20 0 0,0 157,40' fill='none' stroke='#a855f7' stroke-width='1.5'/><text x='110' y='65' font-family='Arial' font-size='12' fill='#a855f7'>110°</text></svg></div>",
        options: ["משולש קהה זווית", "משולש ישר זווית", "משולש חד זווית", "משולש שווה צלעות"],
        correctAnswer: 0,
        hint: "הביטו בזווית המסומנת (110 מעלות). האם היא חדה, ישרה או קהה?&rlm;",
        solution_steps: [
            { verbal_explanation: "האיור מציג זווית של 110 מעלות.&rlm;", math_expression: "" },
            { verbal_explanation: "מכיוון ש-110 מעלות גדול מ-90 מעלות, זוהי זווית קהה.&rlm;", math_expression: "" },
            { verbal_explanation: "משולש בעל זווית קהה אחת נקרא משולש קהה זווית.&rlm;", math_expression: "" }
        ],
        final_answer: "משולש קהה זווית"
    },
    // שאלה 34
    {
        topic: "triangles",
        subTopic: "סוגי משולשים",
        question_text: "במשולש שווה שוקיים ישר זווית (זווית אחת היא 90°), מה יהיה תמיד גודלן של שתי הזוויות האחרות?&rlm;",
        options: ["45° כל אחת", "60° ו-30°", "50° ו-40°", "אי אפשר לדעת, זה תלוי באורך הצלעות"],
        correctAnswer: 0,
        hint: "אם זווית אחת היא 90°, נשארו 90° להתחלק שווה בשווה בין שתי זוויות הבסיס.&rlm;",
        solution_steps: [
            { verbal_explanation: "סכום הזוויות הוא 180°. נחסר את הזווית הישרה (90°).&rlm;", math_expression: "180 - 90 = 90" },
            { verbal_explanation: "מכיוון שהוא שווה שוקיים, שתי הזוויות הנותרות שוות. נחלק ב-2.&rlm;", math_expression: "90 : 2 = 45" }
        ],
        final_answer: "45° כל אחת"
    },
    // שאלה 35
    {
        topic: "triangles",
        subTopic: "סוגי משולשים",
        question_text: "אם במשולש שתי זוויות שוות ל-60°, איזה סוג משולש זה בוודאות?&rlm;",
        options: ["משולש שווה צלעות", "משולש ישר זווית", "משולש קהה זווית", "משולש שונה צלעות"],
        correctAnswer: 0,
        hint: "חשבו מהי הזווית השלישית (180 פחות 60 פחות 60).&rlm;",
        solution_steps: [
            { verbal_explanation: "נחשב את הזווית השלישית במשולש.&rlm;", math_expression: "180 - 60 - 60 = 60" },
            { verbal_explanation: "קיבלנו שכל שלוש הזוויות שוות ל-60°. משולש שבו כל הזוויות שוות הוא בהכרח משולש שווה צלעות.&rlm;", math_expression: "" }
        ],
        final_answer: "משולש שווה צלעות"
    },
    // שאלה 36
    {
        topic: "triangles",
        subTopic: "סוגי משולשים",
        question_text: "מה מייחד 'יתר' במשולש ישר זווית?&rlm;",
        options: ["היא תמיד הצלע הארוכה ביותר ונמצאת מול הזווית הישרה.", "היא תמיד הצלע הקצרה ביותר.", "היא תמיד אחת מהשוקיים במשולש שווה שוקיים.", "היא הצלע שנוגעת בזווית הישרה."],
        correctAnswer: 0,
        hint: "היתר הוא הצלע הנשענת מול הזווית של ה-90 מעלות. זכרו את המשפט: מול הזווית הגדולה נמצאת הצלע הארוכה.&rlm;",
        solution_steps: [
            { verbal_explanation: "במשולש ישר זווית, הזווית הגדולה ביותר היא תמיד הזווית הישרה (90°).&rlm;", math_expression: "" },
            { verbal_explanation: "הצלע שמול הזווית הגדולה ביותר היא הצלע הארוכה ביותר. צלע זו נקראת 'יתר'.&rlm;", math_expression: "" }
        ],
        final_answer: "היא תמיד הצלע הארוכה ביותר ונמצאת מול הזווית הישרה."
    }

];