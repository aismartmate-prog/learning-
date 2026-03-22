// ========================================================================
// שכבת גיל: כיתה ז' | נושא: פונקציות
// 3 תתי נושאים | 36 שאלות סה"כ
// פתרונות מפורטים מאוד בשלבים. 
// כולל: מכונות פונקציה (SVG), טבלאות ערכים (HTML) ומערכות צירים (SVG).
// כתיבה נקייה: חילוק מוצג כ- (:), כפל כ- (×), שברים כ- (1/2), חזקות כ- (²).
// ========================================================================

const questionsDB = [

    // ==========================================================
    // תת נושא 1: מושג הפונקציה (12 שאלות)
    // ==========================================================
    
    // שאלה 1
    {
        topic: "functions",
        subTopic: "מושג הפונקציה",
        question_text: "מהי ההגדרה המתמטית המדויקת ביותר למושג 'פונקציה'?&rlm;",
        options: ["התאמה שבה לכל קלט (x) יש בדיוק פלט אחד (y).", "התאמה שבה כל קלט (x) יכול לקבל שני פלטים שונים.", "כל קשר מתמטי בין שני מספרים.", "משוואה שיש בה רק נעלם אחד."],
        correctAnswer: 0,
        hint: "חשבו על פונקציה כמו על 'מכונה' - כשמכניסים אליה מספר מסוים, היא חייבת להוציא תמיד את אותה תוצאה יחידה, ולא יכולה להתבלבל ולהוציא שתי תוצאות שונות.&rlm;",
        solution_steps: [
            { verbal_explanation: "פונקציה היא סוג מיוחד של קשר בין שתי קבוצות (למשל x ו-y).&rlm;", math_expression: "" },
            { verbal_explanation: "הכלל המרכזי של הפונקציה הוא שלכל איבר בקבוצת המקור (הקלט, x) מותאם איבר אחד ויחיד בקבוצת המטרה (הפלט, y).&rlm;", math_expression: "" }
        ],
        final_answer: "התאמה שבה לכל קלט (x) יש בדיוק פלט אחד (y)."
    },
    // שאלה 2
    {
        topic: "functions",
        subTopic: "מושג הפונקציה",
        question_text: "לפניכם 'מכונת פונקציה'. הכלל של המכונה הוא: כפול ב-3 והוסף 2. אם נכניס למכונה את המספר (הקלט) 5, איזה מספר (פלט) נקבל?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 250 100' width='100%' height='100' style='max-width:250px;'><rect x='75' y='20' width='100' height='60' fill='#fef08a' stroke='#ca8a04' stroke-width='2' rx='10'/><text x='125' y='55' font-family='Arial' font-size='14' font-weight='bold' fill='#0f172a' text-anchor='middle'>× 3 + 2</text><line x1='20' y1='50' x2='65' y2='50' stroke='#3b82f6' stroke-width='3'/><polygon points='65,45 75,50 65,55' fill='#3b82f6'/><text x='40' y='40' font-family='Arial' font-size='14' fill='#3b82f6' text-anchor='middle'>קלט: 5</text><line x1='185' y1='50' x2='230' y2='50' stroke='#ef4444' stroke-width='3'/><polygon points='230,45 240,50 230,55' fill='#ef4444'/><text x='210' y='40' font-family='Arial' font-size='14' fill='#ef4444' text-anchor='middle'>פלט?</text></svg></div>",
        options: ["17", "15", "10", "13"],
        correctAnswer: 0,
        hint: "בצעו את הפעולות לפי סדרן: קודם הכפילו את 5 ב-3, ואז הוסיפו לתוצאה 2.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נכניס את ה-5 למכונה ונבצע את פעולת הכפל.&rlm;", math_expression: "5 × 3 = 15" },
            { verbal_explanation: "שלב ב': נוסיף 2 לתוצאה.&rlm;", math_expression: "15 + 2 = 17" }
        ],
        final_answer: "17"
    },
    // שאלה 3
    {
        topic: "functions",
        subTopic: "מושג הפונקציה",
        question_text: "בפונקציה המתארת את מחיר הנסיעה במונית, המחיר תלוי במרחק הנסיעה בקילומטרים. מי מבין הבאים הוא 'המשתנה הבלתי תלוי' (מסומן בדרך כלל כ-x)?&rlm;",
        options: ["מרחק הנסיעה (ק\"מ)", "מחיר הנסיעה (שקלים)", "נהג המונית", "הזמן בשעון"],
        correctAnswer: 0,
        hint: "המשתנה הבלתי תלוי הוא הגורם שאנחנו בוחרים (הקלט). המשתנה התלוי (הפלט) הוא התוצאה שמשתנה בעקבותיו.&rlm;",
        solution_steps: [
            { verbal_explanation: "מרחק הנסיעה הוא הקלט שלנו - אנחנו קובעים לאן לנסוע.&rlm;", math_expression: "" },
            { verbal_explanation: "המחיר (הפלט) *תלוי* במרחק שניסע. לכן, המרחק הוא המשתנה הבלתי תלוי (x) והמחיר הוא המשתנה התלוי (y).&rlm;", math_expression: "" }
        ],
        final_answer: "מרחק הנסיעה (ק\"מ)"
    },
    // שאלה 4
    {
        topic: "functions",
        subTopic: "מושג הפונקציה",
        question_text: "נתונה הפונקציה: y = 4x - 1. מה יהיה ערך הפונקציה (y) כאשר x = 3?&rlm;",
        options: ["11", "12", "13", "10"],
        correctAnswer: 0,
        hint: "הציבו את המספר 3 במקום x בתבנית הפונקציה: 4 כפול 3, ואז פחות 1.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב 3 במקום המשתנה הבלתי תלוי x.&rlm;", math_expression: "y = 4 × 3 - 1" },
            { verbal_explanation: "שלב ב': נחשב תחילה את הכפל.&rlm;", math_expression: "12 - 1" },
            { verbal_explanation: "שלב ג': נבצע את החיסור לקבלת הפלט (y).&rlm;", math_expression: "y = 11" }
        ],
        final_answer: "11"
    },
    // שאלה 5
    {
        topic: "functions",
        subTopic: "מושג הפונקציה",
        question_text: "קבוצת 'קלט' של פונקציה נקראת בשפה המתמטית...&rlm;",
        options: ["תחום ההצבה (או התחום)", "הטווח (או התמונה)", "השיפוע", "חיתוך עם הצירים"],
        correctAnswer: 0,
        hint: "הקבוצה שממנה לוקחים את ה-x-ים נקראת תחום. הקבוצה של התשובות (y) נקראת טווח.&rlm;",
        solution_steps: [
            { verbal_explanation: "אוסף כל הערכים החוקיים שניתן להציב במשתנה הבלתי תלוי (x) נקרא 'תחום הפונקציה'.&rlm;", math_expression: "" },
            { verbal_explanation: "אוסף כל התוצאות (y) שמתקבלות נקרא 'טווח הפונקציה'.&rlm;", math_expression: "" }
        ],
        final_answer: "תחום ההצבה (או התחום)"
    },
    // שאלה 6
    {
        topic: "functions",
        subTopic: "מושג הפונקציה",
        question_text: "לפניכם ייצוג של התאמה בעזרת זוגות סדורים: (1, 5) , (2, 6) , (1, 8). האם התאמה זו היא פונקציה?&rlm;",
        options: ["לא, כי לקלט 1 יש שני פלטים שונים (5 ו-8)", "כן, זו פונקציה תקינה", "כן, אבל רק עבור מספרים שלמים", "לא, כי הפלטים אינם שווים זה לזה"],
        correctAnswer: 0,
        hint: "בפונקציה, לכל ערך x חייב להיות רק ערך y אחד ויחיד. הסתכלו על ה-x ששווה ל-1.&rlm;",
        solution_steps: [
            { verbal_explanation: "נבדוק את ערכי הקלט (x) בזוגות הסדורים.&rlm;", math_expression: "" },
            { verbal_explanation: "הקלט x=1 מופיע פעמיים: פעם אחת הוא נותן את הפלט 5, ופעם אחרת את הפלט 8.&rlm;", math_expression: "" },
            { verbal_explanation: "זה סותר את הגדרת הפונקציה (מכונה לא יכולה להוציא שתי תשובות שונות לאותו קלט).&rlm;", math_expression: "" }
        ],
        final_answer: "לא, כי לקלט 1 יש שני פלטים שונים (5 ו-8)"
    },
    // שאלה 7
    {
        topic: "functions",
        subTopic: "מושג הפונקציה",
        question_text: "נתונה פונקציה המחזירה פלט שהוא 'המספר העוקב למספר הנתון'. איזו תבנית פסוק מתארת זאת נכונה?&rlm;",
        options: ["y = x + 1", "y = x + x", "y = 2x", "y = x - 1"],
        correctAnswer: 0,
        hint: "מספר עוקב הוא המספר שבא מיד אחריו בספירה (גדול ממנו ב-1).&rlm;",
        solution_steps: [
            { verbal_explanation: "הקלט שלנו הוא x.&rlm;", math_expression: "" },
            { verbal_explanation: "כדי למצוא את המספר העוקב ל-x, אנו מוסיפים לו 1.&rlm;", math_expression: "x + 1" },
            { verbal_explanation: "לכן הפלט (y) שווה לקלט פלוס 1.&rlm;", math_expression: "y = x + 1" }
        ],
        final_answer: "y = x + 1"
    },
    // שאלה 8
    {
        topic: "functions",
        subTopic: "מושג הפונקציה",
        question_text: "מכונת פונקציה מבצעת את הפעולה: y = x : 2 + 3. הכנסנו פלט כלשהו ויצא לנו 10. (כלומר y=10). מה היה הקלט (x) שהכנסנו?&rlm;",
        options: ["14", "10", "7", "20"],
        correctAnswer: 0,
        hint: "פעלו מהסוף להתחלה בפעולות הפוכות: חסרו 3 מ-10, ואז הכפילו את התוצאה ב-2. לחלופין, פתרו משוואה: x:2 + 3 = 10.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב את הפלט (10) במקום y במשוואה.&rlm;", math_expression: "10 = x : 2 + 3" },
            { verbal_explanation: "שלב ב': נחסר 3 משני האגפים כדי לבודד את ה-x:2.&rlm;", math_expression: "7 = x : 2" },
            { verbal_explanation: "שלב ג': נכפול את המשוואה ב-2 כדי למצוא את x.&rlm;", math_expression: "x = 7 × 2 = 14" }
        ],
        final_answer: "14"
    },
    // שאלה 9
    {
        topic: "functions",
        subTopic: "מושג הפונקציה",
        question_text: "איזה מהמשפטים הבאים מתאר פונקציה 'קבועה'?&rlm;",
        options: ["פונקציה שבה הפלט תמיד אותו דבר, לא משנה מה הקלט (למשל y=5)", "פונקציה שבה x תמיד שווה ל-y", "פונקציה שמשתנה כל הזמן", "פונקציה שבה הקלט תמיד שווה ל-0"],
        correctAnswer: 0,
        hint: "המילה 'קבועה' אומרת שהתוצאה (הפלט) נשארת יציבה ולא משתנה, אפילו אם הקלט משתנה.&rlm;",
        solution_steps: [
            { verbal_explanation: "פונקציה קבועה היא פונקציה מהצורה y = c (כאשר c הוא מספר כלשהו).&rlm;", math_expression: "" },
            { verbal_explanation: "בפונקציה זו, לכל ערך של x שנציב, נקבל תמיד את אותה התוצאה (למשל, תמיד 5).&rlm;", math_expression: "" }
        ],
        final_answer: "פונקציה שבה הפלט תמיד אותו דבר, לא משנה מה הקלט (למשל y=5)"
    },
    // שאלה 10
    {
        topic: "functions",
        subTopic: "מושג הפונקציה",
        question_text: "דניאלה מרוויחה 40 שקלים על כל שעת בייביסיטר, ועוד 20 שקלים כבונוס חד-פעמי על נסיעות. איזה ייצוג אלגברי יתאר את השכר שלה (y) כפונקציה של מספר שעות העבודה (x)?&rlm;",
        options: ["y = 40x + 20", "y = 20x + 40", "y = 60x", "y = 40x - 20"],
        correctAnswer: 0,
        hint: "השכר על השעות תלוי במספר השעות (40 כפול x). הבונוס הוא קבוע (מוסיפים 20 פעם אחת).&rlm;",
        solution_steps: [
            { verbal_explanation: "שכר שעתי הוא 40 ש\"ח לשעה. לכן עבור x שעות נרוויח 40x.&rlm;", math_expression: "40x" },
            { verbal_explanation: "לכך מוסיפים תשלום קבוע (שלא תלוי במספר השעות) של 20 ש\"ח.&rlm;", math_expression: "+ 20" },
            { verbal_explanation: "נחבר אותם לקבלת הפונקציה המלאה.&rlm;", math_expression: "y = 40x + 20" }
        ],
        final_answer: "y = 40x + 20"
    },
    // שאלה 11
    {
        topic: "functions",
        subTopic: "מושג הפונקציה",
        question_text: "אם נתונה הפונקציה: y = x² (איקס בריבוע). האם יכול להיות שהפלט (y) יהיה מספר שלילי?&rlm;",
        options: ["לא, כי מספר בריבוע הוא תמיד חיובי או אפס", "כן, אם ה-x שלילי", "כן, תמיד", "לא, פונקציות לא יכולות לתת מספרים שליליים"],
        correctAnswer: 0,
        hint: "מה קורה כשמכפילים מספר שלילי בעצמו? (מינוס כפול מינוס נותן פלוס).&rlm;",
        solution_steps: [
            { verbal_explanation: "הפונקציה מכפילה את הקלט x בעצמו.&rlm;", math_expression: "y = x × x" },
            { verbal_explanation: "אם x חיובי, חיובי כפול חיובי נותן חיובי.&rlm;", math_expression: "" },
            { verbal_explanation: "אם x שלילי, שלילי כפול שלילי נותן גם כן חיובי. לכן y לעולם לא יהיה שלילי.&rlm;", math_expression: "" }
        ],
        final_answer: "לא, כי מספר בריבוע הוא תמיד חיובי או אפס"
    },
    // שאלה 12
    {
        topic: "functions",
        subTopic: "מושג הפונקציה",
        question_text: "נתונה התאמה שבה כל מספר (x) מתאים לשני מספרים שונים: למספר הגדול ממנו ב-1 ולמספר הקטן ממנו ב-1. האם התאמה זו היא פונקציה?&rlm;",
        options: ["לא, כי לכל קלט יש שני פלטים שונים", "כן, כי זו פעולת חשבון הגיונית", "כן, אבל רק למספרים זוגיים", "אי אפשר לדעת"],
        correctAnswer: 0,
        hint: "חזרו להגדרה: פונקציה דורשת 'מסלול אחד בלבד' מכל קלט אל פלט בודד.&rlm;",
        solution_steps: [
            { verbal_explanation: "ניקח קלט לדוגמה: x=5. לפי החוקיות, הפלטים יהיו 6 ו-4.&rlm;", math_expression: "" },
            { verbal_explanation: "כיוון שקלט יחיד הוציא שתי תוצאות שונות, ההתאמה 'נשברת' ואינה מוגדרת כפונקציה.&rlm;", math_expression: "" }
        ],
        final_answer: "לא, כי לכל קלט יש שני פלטים שונים"
    },

    // ==========================================================
    // תת נושא 2: ייצוג פונקציה בטבלה וגרף (12 שאלות)
    // ==========================================================
    
    // שאלה 13
    {
        topic: "functions",
        subTopic: "ייצוג פונקציה בטבלה וגרף",
        question_text: "לפניכם טבלת ערכים של פונקציה. מהי החוקיות (התבנית) של הפונקציה הזו?&rlm;<br><div dir='ltr' style='margin:15px auto; max-width:200px;'><table style='width:100%; border-collapse:collapse; text-align:center; font-size:1.2rem; background:#fff; border:2px solid #cbd5e1;'><tr style='background:#f1f5f9; border-bottom:2px solid #cbd5e1;'><th style='padding:8px; border-right:2px solid #cbd5e1;'>x</th><th style='padding:8px;'>y</th></tr><tr><td style='padding:8px; border-right:2px solid #cbd5e1; border-bottom:1px solid #e2e8f0;'>1</td><td style='padding:8px; border-bottom:1px solid #e2e8f0;'>3</td></tr><tr><td style='padding:8px; border-right:2px solid #cbd5e1; border-bottom:1px solid #e2e8f0;'>2</td><td style='padding:8px; border-bottom:1px solid #e2e8f0;'>6</td></tr><tr><td style='padding:8px; border-right:2px solid #cbd5e1;'>3</td><td style='padding:8px;'>9</td></tr></table></div>",
        options: ["y = 3x", "y = x + 2", "y = 2x + 1", "y = x + 3"],
        correctAnswer: 0,
        hint: "בדקו מה הקשר בין כל x ל-y שלו. כיצד הגענו מ-1 ל-3? מ-2 ל-6?&rlm;",
        solution_steps: [
            { verbal_explanation: "נבדוק את השורה הראשונה: הקלט הוא 1 והפלט הוא 3. אולי הוספנו 2? אולי הכפלנו ב-3?&rlm;", math_expression: "" },
            { verbal_explanation: "נבדוק את השורה השנייה: הקלט הוא 2 והפלט 6. 2 ועוד 2 זה 4 (לא מתאים). אבל 2 כפול 3 שווה 6! (מתאים).&rlm;", math_expression: "2 × 3 = 6" },
            { verbal_explanation: "נבדוק שורה שלישית: 3 כפול 3 שווה 9. החוקיות קבועה: כפל ב-3.&rlm;", math_expression: "y = 3x" }
        ],
        final_answer: "y = 3x"
    },
    // שאלה 14
    {
        topic: "functions",
        subTopic: "ייצוג פונקציה בטבלה וגרף",
        question_text: "בטבלה הבאה יש ערך חסר. אם חוקיות הפונקציה היא y = x + 4, מהו המספר שצריך להיות במקום סימן השאלה?&rlm;<br><div dir='ltr' style='margin:15px auto; max-width:200px;'><table style='width:100%; border-collapse:collapse; text-align:center; font-size:1.2rem; background:#fff; border:2px solid #cbd5e1;'><tr style='background:#f1f5f9; border-bottom:2px solid #cbd5e1;'><th style='padding:8px; border-right:2px solid #cbd5e1;'>x</th><th style='padding:8px;'>y</th></tr><tr><td style='padding:8px; border-right:2px solid #cbd5e1; border-bottom:1px solid #e2e8f0;'>0</td><td style='padding:8px; border-bottom:1px solid #e2e8f0;'>4</td></tr><tr><td style='padding:8px; border-right:2px solid #cbd5e1; border-bottom:1px solid #e2e8f0;'>5</td><td style='padding:8px; border-bottom:1px solid #e2e8f0; font-weight:bold; color:#ef4444;'>?</td></tr></table></div>",
        options: ["9", "20", "5", "1"],
        correctAnswer: 0,
        hint: "הציבו את הערך של x מאותה שורה (5) לתוך המשוואה.&rlm;",
        solution_steps: [
            { verbal_explanation: "חוקיות הפונקציה אומרת ש- y שווה ל-x ועוד 4.&rlm;", math_expression: "y = x + 4" },
            { verbal_explanation: "בשורה החסרה נתון ש- x שווה 5. נציב 5 במקום x.&rlm;", math_expression: "y = 5 + 4" },
            { verbal_explanation: "התוצאה (y) תהיה 9.&rlm;", math_expression: "y = 9" }
        ],
        final_answer: "9"
    },
    // שאלה 15
    {
        topic: "functions",
        subTopic: "ייצוג פונקציה בטבלה וגרף",
        question_text: "קריאת גרף: לפניכם גרף של פונקציה. מהו ערך הפונקציה (y) כאשר x = 2 ?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 200 150' width='100%' height='150' style='max-width:200px;'><line x1='30' y1='120' x2='180' y2='120' stroke='#334155' stroke-width='2'/><line x1='100' y1='20' x2='100' y2='130' stroke='#334155' stroke-width='2'/><line x1='60' y1='100' x2='140' y2='60' stroke='#3b82f6' stroke-width='2'/><circle cx='140' cy='60' r='4' fill='#ef4444'/><line x1='140' y1='60' x2='140' y2='120' stroke='#94a3b8' stroke-dasharray='4,4'/><line x1='140' y1='60' x2='100' y2='60' stroke='#94a3b8' stroke-dasharray='4,4'/><text x='140' y='135' font-family='Arial' font-size='12' fill='#0f172a' text-anchor='middle'>x=2</text><text x='85' y='65' font-family='Arial' font-size='12' fill='#ef4444' font-weight='bold' text-anchor='middle'>4</text><text x='185' y='125' font-family='Arial' font-size='10' fill='#0f172a'>x</text><text x='90' y='15' font-family='Arial' font-size='10' fill='#0f172a'>y</text></svg></div>",
        options: ["4", "2", "6", "0"],
        correctAnswer: 0,
        hint: "עלו למעלה מהנקודה שבה x=2 עד שתפגעו בקו הכחול. איזה מספר נמצא מולכם על ציר ה-y (הציר האנכי)?&rlm;",
        solution_steps: [
            { verbal_explanation: "כדי למצוא את ערך הפונקציה, אנו מאתרים את הערך 2 על ציר ה-x (האופקי).&rlm;", math_expression: "" },
            { verbal_explanation: "אנו עולים אל הגרף (הנקודה האדומה), ומסתכלים שמאלה אל ציר ה-y. אנו רואים שהגובה הוא 4.&rlm;", math_expression: "" }
        ],
        final_answer: "4"
    },
    // שאלה 16
    {
        topic: "functions",
        subTopic: "ייצוג פונקציה בטבלה וגרף",
        question_text: "כיצד ניתן לדעת אם שרטוט כלשהו (גרף) הוא באמת פונקציה? (מבחן הקו האנכי)&rlm;",
        options: ["אם נעביר קו אנכי בכל מקום בגרף, הוא יחתוך את הגרף לכל היותר בנקודה אחת.", "הגרף חייב להיות קו ישר.", "הגרף חייב לעבור בראשית הצירים (0,0).", "הגרף תמיד חייב לעלות למעלה."],
        correctAnswer: 0,
        hint: "זכרו את ההגדרה: לכל x יש y *אחד בלבד*. קו אנכי מייצג ערך אחד של x. כמה פעמים מותר לו לפגוע בגרף?&rlm;",
        solution_steps: [
            { verbal_explanation: "מבחן הקו האנכי אומר: נעביר קו דמיוני ישר מלמעלה למטה.&rlm;", math_expression: "" },
            { verbal_explanation: "אם הקו חותך את הגרף בשתי נקודות (או יותר), זה אומר שלאותו x יש שני פלטים (y) שונים. במצב זה השרטוט הוא *לא* פונקציה.&rlm;", math_expression: "" },
            { verbal_explanation: "כדי שהשרטוט יהיה פונקציה, חובה שכל קו אנכי יחתוך אותו רק פעם אחת.&rlm;", math_expression: "" }
        ],
        final_answer: "אם נעביר קו אנכי בכל מקום בגרף, הוא יחתוך את הגרף לכל היותר בנקודה אחת."
    },
    // שאלה 17
    {
        topic: "functions",
        subTopic: "ייצוג פונקציה בטבלה וגרף",
        question_text: "מה מייצגות הנקודות בטבלת ערכים של פונקציה? (למשל השורה שבה x=2 ו- y=5)&rlm;",
        options: ["קואורדינטות של נקודה (2,5) שאפשר לסמן על מערכת צירים", "שני מספרים שצריך לחבר", "שיפוע של קו ישר", "שבר עשרוני 2.5"],
        correctAnswer: 0,
        hint: "כל שורה בטבלה נותנת לנו זוג מספרים (x,y). לזוג כזה קוראים זוג סדור.&rlm;",
        solution_steps: [
            { verbal_explanation: "כל שורה בטבלת הערכים כוללת ערך x וערך y שמתאים לו.&rlm;", math_expression: "" },
            { verbal_explanation: "הזוג (x,y) הוא בעצם נקודה שניתן לשרטט על גבי מערכת הצירים.&rlm;", math_expression: "" },
            { verbal_explanation: "אוסף כל הנקודות הללו יוצר את הגרף של הפונקציה.&rlm;", math_expression: "" }
        ],
        final_answer: "קואורדינטות של נקודה (2,5) שאפשר לסמן על מערכת צירים"
    },
    // שאלה 18
    {
        topic: "functions",
        subTopic: "ייצוג פונקציה בטבלה וגרף",
        question_text: "מתי נשתמש ב'גרף בדיד' (רק נקודות נפרדות שלא מחוברות בקו רציף)?&rlm;",
        options: ["כאשר הנתונים יכולים להיות רק מספרים שלמים (כמו מספר אנשים או כיסאות)", "כאשר הפונקציה מתארת זמן שחולף", "כאשר אנו מציירים קו ישר", "אף פעם, גרף תמיד חייב להיות קו רציף"],
        correctAnswer: 0,
        hint: "אם הפונקציה מחשבת מחיר של כרטיסי קולנוע. האם אפשר לקנות חצי כרטיס? לא. לכן אי אפשר לחבר את הנקודות ברצף.&rlm;",
        solution_steps: [
            { verbal_explanation: "קו רציף אומר שיש משמעות לכל שבר עשרוני קטן (למשל זמן או משקל).&rlm;", math_expression: "" },
            { verbal_explanation: "אם המשתנה (x) סופר פריטים שלמים שלא ניתן לחצות (כמו אנשים, חולצות), אין משמעות לנקודות הביניים.&rlm;", math_expression: "" },
            { verbal_explanation: "במקרה כזה משאירים את הגרף כאוסף של נקודות בודדות (גרף בדיד).&rlm;", math_expression: "" }
        ],
        final_answer: "כאשר הנתונים יכולים להיות רק מספרים שלמים (כמו מספר אנשים או כיסאות)"
    },
    // שאלה 19
    {
        topic: "functions",
        subTopic: "ייצוג פונקציה בטבלה וגרף",
        question_text: "האם הנקודה (4, 12) נמצאת על הגרף של הפונקציה y = 3x ?&rlm;",
        options: ["כן", "לא", "רק אם מציירים את הגרף עד הסוף", "תלוי בטבלה"],
        correctAnswer: 0,
        hint: "הנקודה היא (x,y). כלומר x=4 ו-y=12. הציבו x=4 במשוואה y=3x. האם התוצאה היא 12?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נזהה את שיעורי הנקודה. x הוא 4, ו-y הוא 12.&rlm;", math_expression: "(x, y) = (4, 12)" },
            { verbal_explanation: "שלב ב': נציב x=4 בתבנית הפונקציה y=3x.&rlm;", math_expression: "y = 3 × 4" },
            { verbal_explanation: "שלב ג': נחשב ונוודא שאכן קיבלנו את ה-y של הנקודה.&rlm;", math_expression: "y = 12" },
            { verbal_explanation: "מכיוון שקיבלנו 12, הנקודה אכן מקיימת את הפונקציה ונמצאת על הגרף.&rlm;", math_expression: "" }
        ],
        final_answer: "כן"
    },
    // שאלה 20
    {
        topic: "functions",
        subTopic: "ייצוג פונקציה בטבלה וגרף",
        question_text: "באיזו נקודה גרף הפונקציה חותך את ציר ה-y (הציר האנכי)?&rlm;",
        options: ["בנקודה שבה x = 0", "בנקודה שבה y = 0", "בראשית הצירים בלבד", "בנקודה הגבוהה ביותר בגרף"],
        correctAnswer: 0,
        hint: "ציר ה-y הוא ה'עמוד' שעומד באמצע. לאיזה ערך של x הוא מתאים? ה-x שם הוא אפס (לא זזנו ימינה ולא שמאלה).&rlm;",
        solution_steps: [
            { verbal_explanation: "כל נקודה על ציר ה-y מאופיינת בכך שהיא לא זזה ימינה או שמאלה במערכת הצירים.&rlm;", math_expression: "" },
            { verbal_explanation: "תזוזה ימינה/שמאלה מוגדרת על ידי קואורדינטת ה-x. לכן, על הציר האנכי תמיד x שווה לאפס.&rlm;", math_expression: "x = 0" }
        ],
        final_answer: "בנקודה שבה x = 0"
    },
    // שאלה 21
    {
        topic: "functions",
        subTopic: "ייצוג פונקציה בטבלה וגרף",
        question_text: "מצאו את חוקיות הפונקציה מהטבלה הבאה:&rlm;<br><div dir='ltr' style='margin:15px auto; max-width:200px;'><table style='width:100%; border-collapse:collapse; text-align:center; font-size:1.2rem; background:#fff; border:2px solid #cbd5e1;'><tr style='background:#f1f5f9; border-bottom:2px solid #cbd5e1;'><th style='padding:8px; border-right:2px solid #cbd5e1;'>x</th><th style='padding:8px;'>y</th></tr><tr><td style='padding:8px; border-right:2px solid #cbd5e1; border-bottom:1px solid #e2e8f0;'>0</td><td style='padding:8px; border-bottom:1px solid #e2e8f0;'>5</td></tr><tr><td style='padding:8px; border-right:2px solid #cbd5e1; border-bottom:1px solid #e2e8f0;'>1</td><td style='padding:8px; border-bottom:1px solid #e2e8f0;'>6</td></tr><tr><td style='padding:8px; border-right:2px solid #cbd5e1;'>2</td><td style='padding:8px;'>7</td></tr></table></div>",
        options: ["y = x + 5", "y = 5x", "y = x - 5", "y = 2x + 3"],
        correctAnswer: 0,
        hint: "הסתכלו במיוחד על השורה שבה x=0. מה היה ה-y? (5). זה מרמז ש-y מתחיל ב-5. בנוסף, כל פעם ש-x עולה ב-1, ה-y עולה ב-1.&rlm;",
        solution_steps: [
            { verbal_explanation: "נבדוק את השורה הראשונה: כשמציבים 0 במקום x, מתקבל 5. זה מתאים לביטוי y=x+5 (כי 0+5=5).&rlm;", math_expression: "" },
            { verbal_explanation: "נוודא עם השורה השנייה: אם נציב x=1, נקבל 1+5=6. אכן התוצאה בטבלה היא 6.&rlm;", math_expression: "" },
            { verbal_explanation: "החוקיות המדויקת היא להוסיף 5 לכל ערך של קלט.&rlm;", math_expression: "y = x + 5" }
        ],
        final_answer: "y = x + 5"
    },
    // שאלה 22
    {
        topic: "functions",
        subTopic: "ייצוג פונקציה בטבלה וגרף",
        question_text: "נתונה פונקציה בעלת החוקיות y = -2x. מה יופיע בטבלה אם הקלט (x) הוא מינוס 3 (-3)?&rlm;",
        options: ["6", "-6", "5", "-5"],
        correctAnswer: 0,
        hint: "הציבו את המינוס 3 בתוך הפונקציה: יצא לכם מינוס 2 כפול מינוס 3. מה קורה לסימנים?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב במקום x את הערך 3-.&rlm;", math_expression: "y = -2 × (-3)" },
            { verbal_explanation: "שלב ב': כפל של שני מספרים שליליים (מינוס כפול מינוס) נותן תוצאה חיובית.&rlm;", math_expression: "(-) × (-) = (+)" },
            { verbal_explanation: "שלב ג': 2 כפול 3 הם 6.&rlm;", math_expression: "y = 6" }
        ],
        final_answer: "6"
    },
    // שאלה 23
    {
        topic: "functions",
        subTopic: "ייצוג פונקציה בטבלה וגרף",
        question_text: "קריאת גרף: איזה קו מייצג פונקציה שהערך שלה תמיד נשאר אותו הדבר (פונקציה קבועה)?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 200 150' width='100%' height='150' style='max-width:200px;'><line x1='20' y1='130' x2='180' y2='130' stroke='#334155' stroke-width='2'/><line x1='40' y1='20' x2='40' y2='140' stroke='#334155' stroke-width='2'/><line x1='40' y1='100' x2='160' y2='30' stroke='#ef4444' stroke-width='2'/><text x='165' y='25' font-family='Arial' font-size='12' fill='#ef4444'>א'</text><line x1='40' y1='60' x2='160' y2='60' stroke='#3b82f6' stroke-width='2'/><text x='165' y='55' font-family='Arial' font-size='12' fill='#3b82f6'>ב'</text></svg></div>",
        options: ["הקו הכחול (קו ב')", "הקו האדום (קו א')", "שניהם", "אף אחד מהם"],
        correctAnswer: 0,
        hint: "פונקציה קבועה אומרת שערך ה-y (הגובה) אינו עולה ואינו יורד לעולם.&rlm;",
        solution_steps: [
            { verbal_explanation: "קו א' (האדום) עולה כלפי מעלה משמאל לימין. זה אומר שערך ה-y שלו משתנה וגדל.&rlm;", math_expression: "" },
            { verbal_explanation: "קו ב' (הכחול) הוא קו אופקי לחלוטין (מקביל לציר x). הגובה שלו (y) לא משתנה. לכן זו פונקציה קבועה.&rlm;", math_expression: "" }
        ],
        final_answer: "הקו הכחול (קו ב')"
    },
    // שאלה 24
    {
        topic: "functions",
        subTopic: "ייצוג פונקציה בטבלה וגרף",
        question_text: "חוקיות של תשלום: נגר לוקח 100 שקלים רק על עצם הביקור بבית (קבוע), ועוד 50 שקלים לכל שעת עבודה. איזו שורה בטבלה מתארת נכון את התשלום עבור שעתיים (x=2) עבודה?&rlm;",
        options: ["x=2 , y=200", "x=2 , y=100", "x=2 , y=150", "x=2 , y=250"],
        correctAnswer: 0,
        hint: "בנו את תבנית הפונקציה: y = 50x + 100. הציבו x=2.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': שכר לשעתיים עבודה נטו הוא 50 כפול 2.&rlm;", math_expression: "50 × 2 = 100" },
            { verbal_explanation: "שלב ב': נוסיף את דמי הביקור הקבועים (100 שקלים).&rlm;", math_expression: "100 + 100 = 200" },
            { verbal_explanation: "לכן, כאשר הקלט הוא 2, הפלט הוא 200.&rlm;", math_expression: "y = 200" }
        ],
        final_answer: "x=2 , y=200"
    },

    // ==========================================================
    // תת נושא 3: פונקציה קווית (12 שאלות)
    // ==========================================================
    
    // שאלה 25
    {
        topic: "functions",
        subTopic: "פונקציה קווית",
        question_text: "נתונה הפונקציה הקווית: y = 3x - 5. מהו ה'שיפוע' (קצב השינוי) של הפונקציה?&rlm;",
        options: ["3", "-5", "5", "x"],
        correctAnswer: 0,
        hint: "בתבנית הכללית y = mx + b, ה-m (המספר שכופל את x) מייצג את השיפוע.&rlm;",
        solution_steps: [
            { verbal_explanation: "בפונקציה קווית המיוצגת כ- y = mx + b, ה-m הוא השיפוע.&rlm;", math_expression: "" },
            { verbal_explanation: "בפונקציה שלנו המקדם של x הוא 3. המשמעות היא שעל כל קפיצה של 1 ב-x, הפונקציה תעלה ב-3 צעדים ב-y.&rlm;", math_expression: "m = 3" }
        ],
        final_answer: "3"
    },
    // שאלה 26
    {
        topic: "functions",
        subTopic: "פונקציה קווית",
        question_text: "באיזו נקודה (גובה) חותכת הפונקציה y = -2x + 8 את ציר ה-y?&rlm;",
        options: ["8", "-2", "0", "-8"],
        correctAnswer: 0,
        hint: "נקודת החיתוך עם ציר y נמצאת בדיוק במקום שבו x=0. אם תציבו x=0, איזה מספר יישאר? (זהו האיבר החופשי b).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': כדי למצוא את החיתוך עם ציר ה-y, נציב x=0 בפונקציה.&rlm;", math_expression: "y = -2 × 0 + 8" },
            { verbal_explanation: "שלב ב': הביטוי עם הכפל באפס מתאפס. נשארנו רק עם האיבר החופשי (b).&rlm;", math_expression: "y = 0 + 8 = 8" }
        ],
        final_answer: "8"
    },
    // שאלה 27
    {
        topic: "functions",
        subTopic: "פונקציה קווית",
        question_text: "האם הפונקציה y = -4x + 1 היא עולה או יורדת?&rlm;",
        options: ["יורדת", "עולה", "קבועה", "אי אפשר לדעת"],
        correctAnswer: 0,
        hint: "הסתכלו על השיפוע (המקדם של x). אם הוא חיובי הפונקציה עולה, ואם הוא שלילי היא יורדת.&rlm;",
        solution_steps: [
            { verbal_explanation: "השיפוע של הפונקציה הוא 4-.&rlm;", math_expression: "m = -4" },
            { verbal_explanation: "מכיוון שהשיפוע הוא מספר שלילי (קטן מאפס), הפונקציה במגמת ירידה (כלומר, ככל ש-x גדל, y קטן).&rlm;", math_expression: "-4 < 0" }
        ],
        final_answer: "יורדת"
    },
    // שאלה 28
    {
        topic: "functions",
        subTopic: "פונקציה קווית",
        question_text: "כיצד ייראה הגרף של פונקציה שבה השיפוע הוא 0? (לדוגמה y = 5)&rlm;",
        options: ["קו אופקי המקביל לציר ה-x", "קו אנכי המקביל לציר ה-y", "קו אלכסוני עולה", "קו אלכסוני יורד"],
        correctAnswer: 0,
        hint: "שיפוע 0 אומר שאין שום עלייה ושום ירידה.&rlm;",
        solution_steps: [
            { verbal_explanation: "אם השיפוע (m) הוא 0, האיבר עם ה-x נעלם מהמשוואה.&rlm;", math_expression: "y = 0 × x + b  =>  y = b" },
            { verbal_explanation: "במצב זה, ל-y יש ערך קבוע שלא משתנה לעולם. בגרף זה יתבטא כקו ישר אופקי לחלוטין.&rlm;", math_expression: "" }
        ],
        final_answer: "קו אופקי המקביל לציר ה-x"
    },
    // שאלה 29
    {
        topic: "functions",
        subTopic: "פונקציה קווית",
        question_text: "האם הנקודה (2, 7) מונחת על הישר של הפונקציה y = 3x + 1?&rlm;",
        options: ["כן", "לא", "רק בחלק מהזמן", "תלוי בשיפוע"],
        correctAnswer: 0,
        hint: "הציבו x=2 במשוואה ובדקו אם יצא לכם y=7.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב את ה-x של הנקודה (2) בתוך הפונקציה הנתונה.&rlm;", math_expression: "y = 3 × 2 + 1" },
            { verbal_explanation: "שלב ב': נפתור. 3 כפול 2 שווה 6. ועוד 1 שווה 7.&rlm;", math_expression: "y = 6 + 1 = 7" },
            { verbal_explanation: "קיבלנו בדיוק את ערך ה-y של הנקודה (7). מכאן שהנקודה שייכת לישר.&rlm;", math_expression: "" }
        ],
        final_answer: "כן"
    },
    // שאלה 30
    {
        topic: "functions",
        subTopic: "פונקציה קווית",
        question_text: "אילו משתי הפונקציות הבאות מתארות ישרים שמקבילים זה לזה במערכת צירים?&rlm;",
        options: ["y = 2x - 5  וגם  y = 2x + 1", "y = 3x + 4  וגם  y = -3x + 4", "y = x + 1  וגם  y = 2x + 1", "y = 4x  וגם  y = 4"],
        correctAnswer: 0,
        hint: "לישרים מקבילים יש בדיוק את אותו השיפוע (אותו m), כי הם עולים או יורדים באותו הקצב ולכן לא ייפגשו לעולם.&rlm;",
        solution_steps: [
            { verbal_explanation: "כדי שישרים יהיו מקבילים, השיפוע (המקדם של x) חייב להיות זהה בשניהם.&rlm;", math_expression: "" },
            { verbal_explanation: "באופציה הראשונה, השיפוע בשתי הפונקציות הוא 2. (האיבר החופשי 5- או 1+ קובע רק מאיפה הישר מתחיל, לא את השיפוע).&rlm;", math_expression: "m_1 = 2 , m_2 = 2" }
        ],
        final_answer: "y = 2x - 5  וגם  y = 2x + 1"
    },
    // שאלה 31
    {
        topic: "functions",
        subTopic: "פונקציה קווית",
        question_text: "מהי 'נקודת האפס' (הנקודה שבה הגרף חותך את ציר ה-x) של הפונקציה y = 2x - 6 ?&rlm;",
        options: ["3", "-6", "2", "-3"],
        correctAnswer: 0,
        hint: "כדי למצוא את החיתוך עם ציר x (ה'רצפה'), מציבים y=0. פתרו את המשוואה: 0 = 2x - 6.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נקודת החיתוך עם ציר x נמצאת בגובה אפס, לכן נציב y=0 במשוואה.&rlm;", math_expression: "0 = 2x - 6" },
            { verbal_explanation: "שלב ב': נעביר את ה- 6- לאגף השני (הוא יהפוך לפלוס 6).&rlm;", math_expression: "6 = 2x" },
            { verbal_explanation: "שלב ג': נחלק ב-2 למציאת x.&rlm;", math_expression: "x = 3" }
        ],
        final_answer: "3"
    },
    // שאלה 32
    {
        topic: "functions",
        subTopic: "פונקציה קווית",
        question_text: "כתבו משוואה של פונקציה קווית שהשיפוע שלה הוא 4 ונקודת החיתוך שלה עם ציר ה-y היא ב- (0, -3).&rlm;",
        options: ["y = 4x - 3", "y = -3x + 4", "y = 4x + 3", "y = 4x"],
        correctAnswer: 0,
        hint: "הציבו את הנתונים בתבנית הכללית y = mx + b. m הוא השיפוע (4). b הוא החיתוך עם ציר y (-3).&rlm;",
        solution_steps: [
            { verbal_explanation: "נשתמש בתבנית הישר: y = mx + b.&rlm;", math_expression: "" },
            { verbal_explanation: "השיפוע נתון כ-m=4.&rlm;", math_expression: "y = 4x + b" },
            { verbal_explanation: "נקודת החיתוך עם ציר y נותנת לנו את ה-b ישירות, b=-3.&rlm;", math_expression: "y = 4x - 3" }
        ],
        final_answer: "y = 4x - 3"
    },
    // שאלה 33
    {
        topic: "functions",
        subTopic: "פונקציה קווית",
        question_text: "מהו שיפוע הישר העובר דרך שתי הנקודות (1, 3) ו- (2, 5)?&rlm;",
        options: ["2", "1", "3", "0.5"],
        correctAnswer: 0,
        hint: "שיפוע (קצב השתנות) הוא ה'מדרגה': בכמה y משתנה כש-x גדל ב-1. ה-x גדל מ-1 ל-2. ה-y עלה מ-3 ל-5 (בכמה הוא עלה?)&rlm;",
        solution_steps: [
            { verbal_explanation: "נבדוק את השינוי ב-x: מ-1 ל-2 זו קפיצה של 1 יחידה ימינה.&rlm;", math_expression: "2 - 1 = 1" },
            { verbal_explanation: "נבדוק את השינוי ב-y באותו זמן: מ-3 ל-5 זו עלייה של 2 יחידות למעלה.&rlm;", math_expression: "5 - 3 = 2" },
            { verbal_explanation: "השיפוע הוא היחס בין העלייה ב-y לשינוי ב-x (שתים חלקי אחד).&rlm;", math_expression: "2 : 1 = 2" }
        ],
        final_answer: "2"
    },
    // שאלה 34
    {
        topic: "functions",
        subTopic: "פונקציה קווית",
        question_text: "לפניכם גרף של ישר העובר בראשית הצירים (0,0). איזה מבין הביטויים הבאים עשוי להתאים לגרף זה?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 200 150' width='100%' height='150' style='max-width:200px;'><line x1='20' y1='130' x2='180' y2='130' stroke='#334155' stroke-width='2'/><line x1='100' y1='20' x2='100' y2='140' stroke='#334155' stroke-width='2'/><line x1='40' y1='160' x2='160' y2='100' stroke='#10b981' stroke-width='2'/><text x='105' y='145' font-family='Arial' font-size='12' fill='#0f172a'>0</text></svg></div>",
        options: ["y = 1/2 × x", "y = x + 3", "y = -x", "y = 5"],
        correctAnswer: 0,
        hint: "ישר שעובר בראשית הצירים משמעותו שאין לו איבר חופשי b (הוא מתחיל באפס). בנוסף, הגרף עולה ימינה, אז השיפוע חייב להיות חיובי.&rlm;",
        solution_steps: [
            { verbal_explanation: "הישר עובר ב-(0,0). לכן כשה-x הוא 0, גם ה-y הוא 0. זה קורה רק כשאין תוספת b למשוואה (b=0).&rlm;", math_expression: "" },
            { verbal_explanation: "הגרף עולה (משמאל לימין הגובה עולה), כלומר השיפוע חיובי.&rlm;", math_expression: "" },
            { verbal_explanation: "האופציה היחידה שמתאימה לשני התנאים היא y שווה חצי x.&rlm;", math_expression: "y = 1/2 × x" }
        ],
        final_answer: "y = 1/2 × x"
    },
    // שאלה 35
    {
        topic: "functions",
        subTopic: "פונקציה קווית",
        question_text: "מה משותף לפונקציות: y = 2x + 7  וגם  y = -3x + 7 ?&rlm;",
        options: ["שתיהן חותכות את ציר ה-y באותה נקודה (0,7)", "הן ישרים מקבילים", "שתיהן פונקציות עולות", "שתיהן חותכות את ציר ה-x ב-0"],
        correctAnswer: 0,
        hint: "הביטו באיבר החופשי (+7) בשתי הפונקציות. מה הוא מייצג?&rlm;",
        solution_steps: [
            { verbal_explanation: "השיפועים שונים (2 לעומת 3-). לכן הם לא מקבילים, ואחת עולה והשנייה יורדת.&rlm;", math_expression: "" },
            { verbal_explanation: "לשתיהן יש אותו איבר חופשי b (פלוס 7). האיבר b קובע את נקודת החיתוך עם ציר y.&rlm;", math_expression: "b = 7" },
            { verbal_explanation: "לכן שתיהן נחתכות באותו גובה בדיוק על 'העמוד' המרכזי (ציר y).&rlm;", math_expression: "" }
        ],
        final_answer: "שתיהן חותכות את ציר ה-y באותה נקודה (0,7)"
    },
    // שאלה 36
    {
        topic: "functions",
        subTopic: "פונקציה קווית",
        question_text: "פונקציה מתארת כמות מים בבריכה. בכל שעה נכנסים 10 קוב מים. בתחילת המילוי היו בבריכה 20 קוב מים. איזו פונקציה תתאר נכון את כמות המים (y) לאחר x שעות?&rlm;",
        options: ["y = 10x + 20", "y = 20x + 10", "y = 30x", "y = 10x"],
        correctAnswer: 0,
        hint: "קצב הכניסה לשעה (השיפוע) הוא 10. הכמות ההתחלתית שממנה מתחילים (האיבר החופשי) היא 20.&rlm;",
        solution_steps: [
            { verbal_explanation: "קצב השינוי הקבוע הוא 10 קוב לכל שעה. על x שעות יתווספו 10x מים.&rlm;", math_expression: "10x" },
            { verbal_explanation: "נקודת ההתחלה (כאשר x=0) היא ה-20 קוב שכבר היו שם. זהו האיבר החופשי b.&rlm;", math_expression: "+ 20" },
            { verbal_explanation: "נחבר לקבלת הפונקציה המלאה.&rlm;", math_expression: "y = 10x + 20" }
        ],
        final_answer: "y = 10x + 20"
    }

];