// ========================================================================
// שכבת גיל: כיתה ז' | נושא: מרובעים
// 3 תתי נושאים | 36 שאלות סה"כ
// שאלות משולבות אלגברה וגיאומטריה, כולל שרטוטי SVG מתקדמים וצבעוניים.
// כתיבה נקייה: חילוק מוצג כ- (:), כפל כ- (×), שברים כ- (1/2), חזקות כ- (²).
// ללא שימוש ב-LaTeX!
// ========================================================================

const questionsDB = [

    // ==========================================================
    // תת נושא 1: תכונות המלבן (12 שאלות)
    // ==========================================================
    
    // שאלה 1
    {
        topic: "quadrilaterals",
        subTopic: "תכונות המלבן",
        question_text: "במלבן ABCD העבירו את האלכסונים AC ו-BD הנפגשים בנקודה O. ידוע כי אורך האלכסון AC הוא 14 ס\"מ. מהו אורך הקטע BO?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 200 120' width='100%' height='120' style='max-width:240px;'><rect x='20' y='20' width='160' height='80' fill='#f1f5f9' stroke='#334155' stroke-width='2'/><line x1='20' y1='20' x2='180' y2='100' stroke='#ef4444' stroke-width='2'/><line x1='20' y1='100' x2='180' y2='20' stroke='#3b82f6' stroke-width='2'/><text x='10' y='15' font-family='Arial' font-size='12' fill='#0f172a'>A</text><text x='185' y='15' font-family='Arial' font-size='12' fill='#0f172a'>B</text><text x='185' y='110' font-family='Arial' font-size='12' fill='#0f172a'>C</text><text x='10' y='110' font-family='Arial' font-size='12' fill='#0f172a'>D</text><text x='100' y='50' font-family='Arial' font-size='12' fill='#0f172a' font-weight='bold'>O</text></svg></div>",
        options: ["7 ס\"מ", "14 ס\"מ", "3.5 ס\"מ", "28 ס\"מ"],
        correctAnswer: 0,
        hint: "במלבן, האלכסונים שווים זה לזה באורכם, והם גם חוצים זה את זה (מחלקים אחד את השני בדיוק לחצי).&rlm;",
        solution_steps: [
            { verbal_explanation: "תכונה 1 של המלבן: האלכסונים שווים. לכן, אם AC = 14, אז גם האלכסון BD = 14.&rlm;", math_expression: "BD = 14" },
            { verbal_explanation: "תכונה 2 של המלבן: האלכסונים חוצים זה את זה. נקודה O מחלקת את BD לשני חצאים שווים.&rlm;", math_expression: "" },
            { verbal_explanation: "נחלק את אורך האלכסון BD ב-2 כדי למצוא את אורך הקטע BO.&rlm;", math_expression: "14 : 2 = 7" }
        ],
        final_answer: "7 ס\"מ"
    },
    // שאלה 2
    {
        topic: "quadrilaterals",
        subTopic: "תכונות המלבן",
        question_text: "איזה מהמשפטים הבאים מגדיר במדויק מלבן?&rlm;",
        options: ["מקבילית שבה יש זווית ישרה אחת לפחות.", "מרובע שבו כל הצלעות שוות.", "מקבילית שבה האלכסונים מאונכים זה לזה.", "מרובע שבו האלכסונים חוצים זה את זה."],
        correctAnswer: 0,
        hint: "מלבן הוא מקרה פרטי של מקבילית. ברגע שבמקבילית זווית אחת 'מתיישרת' ל-90 מעלות, כל שאר הזוויות חייבות להתיישר גם הן.&rlm;",
        solution_steps: [
            { verbal_explanation: "ההגדרה הפורמלית של מלבן היא מקבילית בעלת זווית ישרה.&rlm;", math_expression: "" },
            { verbal_explanation: "מכיוון שבמקבילית זוויות נגדיות שוות וזוויות סמוכות משלימות ל-180, ברגע שזווית אחת היא 90 מעלות, כל ארבע הזוויות יהיו 90 מעלות.&rlm;", math_expression: "" }
        ],
        final_answer: "מקבילית שבה יש זווית ישרה אחת לפחות."
    },
    // שאלה 3
    {
        topic: "quadrilaterals",
        subTopic: "תכונות המלבן",
        question_text: "במלבן, אלכסון יוצר זווית של 35 מעלות עם הצלע הארוכה של המלבן. מהו גודל הזווית שהאלכסון יוצר עם הצלע הקצרה (הסמוכה לה)?&rlm;",
        options: ["55 מעלות", "35 מעלות", "90 מעלות", "145 מעלות"],
        correctAnswer: 0,
        hint: "זווית של מלבן היא תמיד 90 מעלות (זווית ישרה). האלכסון מחלק את זווית המלבן לשתי זוויות המשלימות יחד ל-90.&rlm;",
        solution_steps: [
            { verbal_explanation: "קודקוד המלבן יוצר זווית של 90 מעלות.&rlm;", math_expression: "" },
            { verbal_explanation: "האלכסון חותך את הזווית הזו לשני חלקים. חלק אחד נתון כ-35 מעלות.&rlm;", math_expression: "" },
            { verbal_explanation: "כדי למצוא את החלק השני, נחסר מ-90 מעלות.&rlm;", math_expression: "90 - 35 = 55" }
        ],
        final_answer: "55 מעלות"
    },
    // שאלה 4
    {
        topic: "quadrilaterals",
        subTopic: "תכונות המלבן",
        question_text: "אורכו של מלבן הוא x + 5, ורוחבו הוא x. היקף המלבן הוא 30 ס\"מ. מהו רוחב המלבן?&rlm;",
        options: ["5 ס\"מ", "10 ס\"מ", "15 ס\"מ", "4 ס\"מ"],
        correctAnswer: 0,
        hint: "היקף מלבן הוא פעמיים האורך ועוד פעמיים הרוחב. בנו את המשוואה: 2x + 2(x+5) = 30.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרכיב משוואה להיקף. למלבן שתי צלעות ברוחב x, ושתי צלעות באורך x+5.&rlm;", math_expression: "x + x + (x + 5) + (x + 5) = 30" },
            { verbal_explanation: "שלב ב': נכנס איברים דומים (ארבע פעמים x, ועוד 10).&rlm;", math_expression: "4x + 10 = 30" },
            { verbal_explanation: "שלב ג': נחסר 10 משני האגפים.&rlm;", math_expression: "4x = 20" },
            { verbal_explanation: "שלב ד': נחלק ב-4 למציאת x (הרוחב).&rlm;", math_expression: "x = 20 : 4 = 5" }
        ],
        final_answer: "5 ס\"מ"
    },
    // שאלה 5
    {
        topic: "quadrilaterals",
        subTopic: "תכונות המלבן",
        question_text: "מלבן שבו גם כל הצלעות שוות באורכן נקרא...&rlm;",
        options: ["ריבוע", "מעוין", "טרפז", "דלתון"],
        correctAnswer: 0,
        hint: "למלבן יש זוויות ישרות. ברגע שנוסיף לו תכונה שכל הצלעות שלו שוות, נקבל צורה מושלמת.&rlm;",
        solution_steps: [
            { verbal_explanation: "מלבן הוא מרובע שכל זוויותיו ישרות (90 מעלות).&rlm;", math_expression: "" },
            { verbal_explanation: "כאשר אנו מוסיפים את התנאי שגם כל 4 הצלעות שוות, אנו מקבלים מרובע שגם זוויותיו ישרות וגם צלעותיו שוות - וזהו ריבוע.&rlm;", math_expression: "" }
        ],
        final_answer: "ריבוע"
    },
    // שאלה 6
    {
        topic: "quadrilaterals",
        subTopic: "תכונות המלבן",
        question_text: "אלכסוני המלבן מיוצגים על ידי הביטויים (3x - 2) ס\"מ ו- (x + 8) ס\"מ. מהו אורכו של כל אלכסון בסנטימטרים?&rlm;",
        options: ["13", "5", "10", "15"],
        correctAnswer: 0,
        hint: "במלבן, האלכסונים תמיד שווים זה לזה. השוו את שני הביטויים, מצאו את x, והציבו חזרה באחד הביטויים.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרכיב משוואה. האלכסונים במלבן שווים.&rlm;", math_expression: "3x - 2 = x + 8" },
            { verbal_explanation: "שלב ב': נעביר את ה-x שמאלה ואת המספרים ימינה. 3x פחות x שווה 2x. פלוס 8 ועוד 2 שווה 10.&rlm;", math_expression: "2x = 10" },
            { verbal_explanation: "שלב ג': נחלק ב-2 למציאת x.&rlm;", math_expression: "x = 5" },
            { verbal_explanation: "שלב ד': נציב את x=5 באחד הביטויים כדי למצוא את אורך האלכסון.&rlm;", math_expression: "5 + 8 = 13" }
        ],
        final_answer: "13"
    },
    // שאלה 7
    {
        topic: "quadrilaterals",
        subTopic: "תכונות המלבן",
        question_text: "מה מספר צירי הסימטריה (קווי קיפול) שיש למלבן שאינו ריבוע?&rlm;",
        options: ["2 צירי סימטריה", "4 צירי סימטריה", "0 צירי סימטריה", "ציר סימטריה 1"],
        correctAnswer: 0,
        hint: "דמיינו דף נייר A4 (שהוא מלבן). בכמה דרכים תוכלו לקפל אותו כך ששני החצאים יחפפו בדיוק מושלם? (האלכסונים הם לא צירי סימטריה במלבן!).&rlm;",
        solution_steps: [
            { verbal_explanation: "למלבן רגיל יש שני קווי קיפול אפשריים: קו אנכי שחוצה אותו לשמאל-ימין, וקו אופקי שחוצה אותו ללמעלה-למטה.&rlm;", math_expression: "" },
            { verbal_explanation: "קיפול על האלכסון לא ייצור חפיפה מושלמת (הקצוות יבלטו החוצה). לכן יש רק 2 צירים.&rlm;", math_expression: "" }
        ],
        final_answer: "2 צירי סימטריה"
    },
    // שאלה 8
    {
        topic: "quadrilaterals",
        subTopic: "תכונות המלבן",
        question_text: "היקף מלבן הוא 50 ס\"מ. אורך צלע אחת הוא 15 ס\"מ. מהו אורכה של הצלע הסמוכה לה?&rlm;",
        options: ["10 ס\"מ", "20 ס\"מ", "35 ס\"מ", "5 ס\"מ"],
        correctAnswer: 0,
        hint: "למלבן יש שתי צלעות באורך 15 ס\"מ. חסרו את שתיהן מההיקף הכולל, וחלקו את השארית ל-2 הצלעות הנותרות.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': למלבן יש שתי צלעות באורך 15, לכן סכומן הוא 30.&rlm;", math_expression: "15 × 2 = 30" },
            { verbal_explanation: "שלב ב': נחסר את ה-30 מההיקף הכולל.&rlm;", math_expression: "50 - 30 = 20" },
            { verbal_explanation: "שלב ג': ה-20 שנותרו מתחלקים שווה בשווה לשתי הצלעות הנגדיות האחרות. נחלק ב-2.&rlm;", math_expression: "20 : 2 = 10" }
        ],
        final_answer: "10 ס\"מ"
    },
    // שאלה 9
    {
        topic: "quadrilaterals",
        subTopic: "תכונות המלבן",
        question_text: "אלכסוני המלבן חולקו את המלבן ל-4 משולשים. מה נכון לומר על 4 המשולשים הללו?&rlm;",
        options: ["הם כולם שווי שטח", "הם כולם חופפים זה לזה", "הם משולשים ישרי זווית", "אין ביניהם קשר"],
        correctAnswer: 0,
        hint: "האלכסונים במלבן שווים וחוצים זה את זה, מה שיוצר 4 משולשים שווי שוקיים. למרות שהם לא כולם חופפים, השטח שלהם זהה לחלוטין!&rlm;",
        solution_steps: [
            { verbal_explanation: "במלבן, האלכסונים שווים וחוצים זה את זה. לכן נוצרים שני זוגות של משולשים חופפים (העליון חופף לתחתון, הימני חופף לשמאלי).&rlm;", math_expression: "" },
            { verbal_explanation: "אולם, לכל 4 המשולשים יש את אותו בסיס ואותו גובה (מבחינת שטחים), ולכן שטחם שווה, גם אם צורתם אינה זהה לחלוטין (הם לא חופפים כולם יחד).&rlm;", math_expression: "" }
        ],
        final_answer: "הם כולם שווי שטח"
    },
    // שאלה 10
    {
        topic: "quadrilaterals",
        subTopic: "תכונות המלבן",
        question_text: "במלבן, אלכסון מחלק את זווית המלבן לשתי זוויות המתייחסות זו לזו ביחס של 1:2. מה גודל הזוויות?&rlm;",
        options: ["30° ו-60°", "45° ו-45°", "20° ו-70°", "40° ו-50°"],
        correctAnswer: 0,
        hint: "זווית המלבן כולה היא 90 מעלות. חברו את חלקי היחס (1+2=3) וחלקו את ה-90 ל-3 חלקים.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': זווית המלבן היא 90 מעלות. סך החלקים ביחס הוא 3.&rlm;", math_expression: "1 + 2 = 3" },
            { verbal_explanation: "שלב ב': נחלק 90 ב-3 כדי למצוא את הערך של יחידת יחס אחת.&rlm;", math_expression: "90 : 3 = 30" },
            { verbal_explanation: "שלב ג': הזווית הקטנה היא 1 כפול 30 (30°), והזווית הגדולה היא 2 כפול 30 (60°).&rlm;", math_expression: "1 × 30 = 30 , 2 × 30 = 60" }
        ],
        final_answer: "30° ו-60°"
    },
    // שאלה 11
    {
        topic: "quadrilaterals",
        subTopic: "תכונות המלבן",
        question_text: "יחס אורכי הצלעות במלבן הוא 1:2. היקף המלבן הוא 30 ס\"מ. מהם אורכי הצלעות של המלבן?&rlm;",
        options: ["5 ס\"מ ו-10 ס\"מ", "10 ס\"מ ו-20 ס\"מ", "6 ס\"מ ו-12 ס\"מ", "3 ס\"מ ו-6 ס\"מ"],
        correctAnswer: 0,
        hint: "נסמן את הצלע הקצרה ב-x, ואת הארוכה ב-2x. ההיקף הוא פעמיים x ועוד פעמיים 2x (סך הכל 6x). משוואה: 6x = 30.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן רוחב = x, אורך = 2x. נבנה משוואת היקף.&rlm;", math_expression: "x + x + 2x + 2x = 30" },
            { verbal_explanation: "שלב ב': נחבר את כל ה-x-ים.&rlm;", math_expression: "6x = 30" },
            { verbal_explanation: "שלב ג': נחלק ב-6. ה-x (הצלע הקצרה) שווה 5.&rlm;", math_expression: "x = 5" },
            { verbal_explanation: "שלב ד': הצלע הארוכה היא כפולה (2x). 5 כפול 2 שווה 10.&rlm;", math_expression: "2 × 5 = 10" }
        ],
        final_answer: "5 ס\"מ ו-10 ס\"מ"
    },
    // שאלה 12
    {
        topic: "quadrilaterals",
        subTopic: "תכונות המלבן",
        question_text: "איזה מרובע תמיד יתקבל אם נחבר ברצף את אמצעי הצלעות של מלבן?&rlm;",
        options: ["מעוין", "ריבוע", "מלבן", "טרפז"],
        correctAnswer: 0,
        hint: "נסו לצייר מלבן ולסמן את אמצעי הצלעות. חיבור שלהם יוצר צורה שבה כל הצלעות שוות, אך הזוויות אינן ישרות.&rlm;",
        solution_steps: [
            { verbal_explanation: "כאשר מחברים את אמצעי הצלעות של מלבן, נוצרים 4 משולשים ישרי זווית חופפים בפינות.&rlm;", math_expression: "" },
            { verbal_explanation: "היתרים של המשולשים האלו יוצרים מרובע פנימי חדש, ומכיוון שהם חופפים, כל 4 צלעותיו שוות.&rlm;", math_expression: "" },
            { verbal_explanation: "מרובע בעל 4 צלעות שוות הוא מעוין.&rlm;", math_expression: "" }
        ],
        final_answer: "מעוין"
    },

    // ==========================================================
    // תת נושא 2: תכונות המקבילית (12 שאלות)
    // ==========================================================
    
    // שאלה 13
    {
        topic: "quadrilaterals",
        subTopic: "תכונות המקבילית",
        question_text: "במקבילית, זווית אחת היא בת 70 מעלות. מה גודלה של הזווית הסמוכה לה (לידה)?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 200 80' width='100%' height='80' style='max-width:200px;'><polygon points='40,70 180,70 150,20 10,20' fill='#dcfce7' stroke='#16a34a' stroke-width='2'/><path d='M 140 20 A 15 15 0 0 1 155 35' fill='none' stroke='#0f172a' stroke-width='2'/><text x='130' y='45' font-family='Arial' font-size='12' fill='#0f172a'>70°</text><path d='M 170 70 A 15 15 0 0 0 162 55' fill='none' stroke='#ef4444' stroke-width='2'/><text x='150' y='65' font-family='Arial' font-size='14' font-weight='bold' fill='#ef4444'>x</text></svg></div>",
        options: ["110 מעלות", "70 מעלות", "20 מעלות", "180 מעלות"],
        correctAnswer: 0,
        hint: "במקבילית, כל שתי צלעות נגדיות הן מקבילות. לכן, כל שתי זוויות סמוכות הן 'זוויות חד-צדדיות' שמשלימות יחד ל-180 מעלות.&rlm;",
        solution_steps: [
            { verbal_explanation: "תכונה מרכזית של מקבילית: סכום כל שתי זוויות סמוכות הוא 180 מעלות.&rlm;", math_expression: "x + 70 = 180" },
            { verbal_explanation: "נחסר 70 מ-180 כדי למצוא את הזווית החסרה.&rlm;", math_expression: "180 - 70 = 110" }
        ],
        final_answer: "110 מעלות"
    },
    // שאלה 14
    {
        topic: "quadrilaterals",
        subTopic: "תכונות המקבילית",
        question_text: "במקבילית, שתי זוויות נגדיות מיוצגות על ידי 4x ו- (x + 60). מהו ערכו של x?&rlm;",
        options: ["20", "60", "30", "15"],
        correctAnswer: 0,
        hint: "במקבילית, זוויות נגדיות שוות זו לזו. בנו משוואה: 4x = x + 60.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': זוויות נגדיות (שנמצאות אחת מול השנייה באלכסון) במקבילית תמיד שוות.&rlm;", math_expression: "4x = x + 60" },
            { verbal_explanation: "שלב ב': נחסר x משני האגפים כדי לרכז את המשתנים בצד אחד.&rlm;", math_expression: "3x = 60" },
            { verbal_explanation: "שלב ג': נחלק ב-3.&rlm;", math_expression: "x = 20" }
        ],
        final_answer: "20"
    },
    // שאלה 15
    {
        topic: "quadrilaterals",
        subTopic: "תכונות המקבילית",
        question_text: "במקבילית ABCD הועברו האלכסונים ונפגשו בנקודה M. אורך חצי מהאלכסון AM הוא 5 ס\"מ. מהו אורכו של האלכסון המלא AC?&rlm;",
        options: ["10 ס\"מ", "5 ס\"מ", "2.5 ס\"מ", "15 ס\"מ"],
        correctAnswer: 0,
        hint: "במקבילית, האלכסונים חוצים זה את זה (מחלקים אחד את השני לשני חצאים שווים). אם חצי אחד הוא 5, כמה שווה השלם?&rlm;",
        solution_steps: [
            { verbal_explanation: "תכונה: אלכסוני המקבילית חוצים זה את זה. לכן, נקודת המפגש מחלקת כל אלכסון לשניים.&rlm;", math_expression: "AM = MC = 5" },
            { verbal_explanation: "האלכסון המלא מורכב משני החצאים הללו יחד.&rlm;", math_expression: "5 + 5 = 10" }
        ],
        final_answer: "10 ס\"מ"
    },
    // שאלה 16
    {
        topic: "quadrilaterals",
        subTopic: "תכונות המקבילית",
        question_text: "שתי זוויות סמוכות במקבילית מתייחסות זו לזו ביחס של 2:3 (2x ו-3x). מהן המידות של זוויות אלו?&rlm;",
        options: ["72° ו-108°", "40° ו-60°", "20° ו-30°", "80° ו-100°"],
        correctAnswer: 0,
        hint: "סכום זוויות סמוכות במקבילית הוא 180. חברו את x2 ו-3x (יחד 5x) והשוו ל-180.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': סכום שתי זוויות סמוכות במקבילית הוא 180 מעלות.&rlm;", math_expression: "2x + 3x = 180" },
            { verbal_explanation: "שלב ב': נכנס איברים (5x) ונפתור.&rlm;", math_expression: "5x = 180" },
            { verbal_explanation: "שלב ג': נחלק 180 ב-5 למציאת x.&rlm;", math_expression: "x = 180 : 5 = 36" },
            { verbal_explanation: "שלב ד': נציב למציאת הזוויות. הקטנה היא 2x, והגדולה היא 3x.&rlm;", math_expression: "2 × 36 = 72 , 3 × 36 = 108" }
        ],
        final_answer: "72° ו-108°"
    },
    // שאלה 17
    {
        topic: "quadrilaterals",
        subTopic: "תכונות המקבילית",
        question_text: "היקף של מקבילית הוא 30 ס\"מ. אורך צלע אחת הוא x ואורך הצלע הסמוכה לה הוא x + 5. מהו אורך הצלע הקצרה (x)?&rlm;",
        options: ["5 ס\"מ", "10 ס\"מ", "4 ס\"מ", "7.5 ס\"מ"],
        correctAnswer: 0,
        hint: "היקף המקבילית מחושב ממש כמו מלבן: 2x + 2(x+5) = 30.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': במקבילית צלעות נגדיות שוות, לכן ההיקף הוא פעמיים כל צלע סמוכה.&rlm;", math_expression: "2x + 2(x + 5) = 30" },
            { verbal_explanation: "שלב ב': נפתח סוגריים.&rlm;", math_expression: "2x + 2x + 10 = 30" },
            { verbal_explanation: "שלב ג': נכנס איברים ונחסר 10.&rlm;", math_expression: "4x = 20" },
            { verbal_explanation: "שלב ד': נחלק ב-4 למציאת x.&rlm;", math_expression: "x = 5" }
        ],
        final_answer: "5 ס\"מ"
    },
    // שאלה 18
    {
        topic: "quadrilaterals",
        subTopic: "תכונות המקבילית",
        question_text: "במקבילית הועבר אלכסון היוצר צורת Z (זוויות מתחלפות) עם הצלעות המקבילות. אם הזווית הכלואה בין האלכסון לצלע העליונה היא 40 מעלות, מה תהיה הזווית בין האלכסון לצלע התחתונה?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 200 100' width='100%' height='100' style='max-width:200px;'><line x1='10' y1='20' x2='150' y2='20' stroke='#334155' stroke-width='2'/><line x1='50' y1='80' x2='190' y2='80' stroke='#334155' stroke-width='2'/><line x1='50' y1='80' x2='150' y2='20' stroke='#ef4444' stroke-width='2'/><path d='M 120 20 A 25 25 0 0 0 135 30' fill='none' stroke='#3b82f6' stroke-width='2'/><text x='110' y='15' font-family='Arial' font-size='12' fill='#3b82f6'>40°</text><path d='M 80 80 A 25 25 0 0 0 65 70' fill='none' stroke='#10b981' stroke-width='2'/><text x='90' y='95' font-family='Arial' font-size='14' font-weight='bold' fill='#10b981'>?</text></svg></div>",
        options: ["40 מעלות", "140 מעלות", "50 מעלות", "90 מעלות"],
        correctAnswer: 0,
        hint: "בין ישרים מקבילים, זוויות מתחלפות פנימיות (אלו שכלואות בתוך הברכיים של האות Z) תמיד שוות זו לזו.&rlm;",
        solution_steps: [
            { verbal_explanation: "האלכסון יוצר קו חותך בין שני ישרים מקבילים (הצלעות הנגדיות של המקבילית).&rlm;", math_expression: "" },
            { verbal_explanation: "הזוויות המתחלפות (שנמצאות משני צידי האלכסון, אחת למעלה ואחת למטה) שוות זו לזו.&rlm;", math_expression: "x = 40" }
        ],
        final_answer: "40 מעלות"
    },
    // שאלה 19
    {
        topic: "quadrilaterals",
        subTopic: "תכונות המקבילית",
        question_text: "איזו מהתכונות הבאות **חייבת** להתקיים כדי שמרובע ייחשב למקבילית?&rlm;",
        options: ["האלכסונים חוצים זה את זה.", "האלכסונים שווים זה לזה.", "יש זווית אחת ישרה.", "כל הצלעות שוות."],
        correctAnswer: 0,
        hint: "התכונות האחרות שייכות למרובעים 'משוכללים' יותר כמו מלבן או מעוין. למקבילית רגילה מספיקה תכונה בסיסית אחת לגבי האלכסונים.&rlm;",
        solution_steps: [
            { verbal_explanation: "משפט גיאומטרי קובע: מרובע שבו האלכסונים חוצים זה את זה הוא בהכרח מקבילית.&rlm;", math_expression: "" },
            { verbal_explanation: "אלכסונים שווים (מלבן), זווית ישרה (מלבן) וצלעות שוות (מעוין) הן תכונות מיוחדות ולא נדרשות עבור מקבילית רגילה.&rlm;", math_expression: "" }
        ],
        final_answer: "האלכסונים חוצים זה את זה."
    },
    // שאלה 20
    {
        topic: "quadrilaterals",
        subTopic: "תכונות המקבילית",
        question_text: "במקבילית ABCD, הזווית A גדולה מהזווית הסמוכה לה B ב-40 מעלות. מהו גודלה של זווית A?&rlm;",
        options: ["110 מעלות", "70 מעלות", "140 מעלות", "100 מעלות"],
        correctAnswer: 0,
        hint: "נסמן את זווית B ב-x, ואת זווית A ב-x+40. סכומן של זוויות סמוכות במקבילית הוא 180.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את הזוויות. סכומן שווה ל-180.&rlm;", math_expression: "x + (x + 40) = 180" },
            { verbal_explanation: "שלב ב': נכנס איברים (2x) ונחסר 40 משני האגפים.&rlm;", math_expression: "2x = 140" },
            { verbal_explanation: "שלב ג': נחלק ב-2 כדי למצוא את הזווית הקטנה B.&rlm;", math_expression: "x = 70" },
            { verbal_explanation: "שלב ד': נחשב את הזווית הגדולה A (הגדולה ב-40).&rlm;", math_expression: "70 + 40 = 110" }
        ],
        final_answer: "110 מעלות"
    },
    // שאלה 21
    {
        topic: "quadrilaterals",
        subTopic: "תכונות המקבילית",
        question_text: "נקודת המפגש של האלכסונים במקבילית מחלקת את האלכסון הראשון לקטעים באורך 6 ס\"מ, ואת האלכסון השני לקטעים באורך 8 ס\"מ. מהם אורכי האלכסונים השלמים של המקבילית?&rlm;",
        options: ["12 ס\"מ ו-16 ס\"מ", "6 ס\"מ ו-8 ס\"מ", "3 ס\"מ ו-4 ס\"מ", "10 ס\"מ ו-14 ס\"מ"],
        correctAnswer: 0,
        hint: "נקודת המפגש היא בדיוק האמצע של כל אלכסון (חוצים זה את זה). הכפילו את החצאים ב-2.&rlm;",
        solution_steps: [
            { verbal_explanation: "אלכסוני מקבילית חוצים זה את זה, ולכן חצי מהאלכסון הראשון הוא 6 וחצי מהשני הוא 8.&rlm;", math_expression: "" },
            { verbal_explanation: "כדי למצוא את האורכים השלמים, נכפול כל אחד מהחצאים פי 2.&rlm;", math_expression: "6 × 2 = 12 , 8 × 2 = 16" }
        ],
        final_answer: "12 ס\"מ ו-16 ס\"מ"
    },
    // שאלה 22
    {
        topic: "quadrilaterals",
        subTopic: "תכונות המקבילית",
        question_text: "האם המשפט הבא נכון? 'כל מקבילית שבה האלכסונים שווים זה לזה היא בהכרח מלבן'.&rlm;",
        options: ["נכון", "לא נכון, זה יכול להיות מעוין", "לא נכון, זה תמיד ריבוע", "נכון רק אם היא משולש"],
        correctAnswer: 0,
        hint: "במקבילית רגילה האלכסונים אינם שווים. התכונה המיוחדת שמיישרת את הזוויות והופכת אותה למלבן היא בדיוק שוויון האלכסונים.&rlm;",
        solution_steps: [
            { verbal_explanation: "משפט הגיאומטריה קובע: מקבילית בעלת אלכסונים שווים היא מלבן.&rlm;", math_expression: "" },
            { verbal_explanation: "(הערה: ריבוע הוא סוג של מלבן ולכן המשפט נכון, במעוין רגיל האלכסונים אינם שווים).&rlm;", math_expression: "" }
        ],
        final_answer: "נכון"
    },
    // שאלה 23
    {
        topic: "quadrilaterals",
        subTopic: "תכונות המקבילית",
        question_text: "סמנו את התכונה ש**אינה** מתקיימת בהכרח בכל מקבילית:&rlm;",
        options: ["האלכסונים מאונכים זה לזה (זווית 90 מעלות ביניהם)", "צלעות נגדיות שוות באורכן", "זוויות נגדיות שוות בגודלן", "האלכסונים חוצים זה את זה"],
        correctAnswer: 0,
        hint: "אלכסונים מאונכים (שיוצרים צלב ישר של 90 מעלות) הם תכונה מיוחדת של מעוין (וריבוע), ולא קיימת במקבילית או מלבן רגילים.&rlm;",
        solution_steps: [
            { verbal_explanation: "במקבילית רגילה, האלכסונים אמנם חוצים זה את זה, אך אין ביניהם זווית ישרה (90°).&rlm;", math_expression: "" },
            { verbal_explanation: "רק כשהמקבילית הופכת למעוין או ריבוע, האלכסונים הופכים למאונכים זה לזה.&rlm;", math_expression: "" }
        ],
        final_answer: "האלכסונים מאונכים זה לזה (זווית 90 מעלות ביניהם)"
    },
    // שאלה 24
    {
        topic: "quadrilaterals",
        subTopic: "תכונות המקבילית",
        question_text: "במערכת צירים, נתונים שלושה קודקודים של מקבילית: (0,0), (5,0), (2,4). היכן ממוקם הקודקוד הרביעי (כדי להשלים למקבילית)?&rlm;",
        options: ["(7,4)", "(5,4)", "(3,4)", "(-3,4)"],
        correctAnswer: 0,
        hint: "הבסיס התחתון מונח על ציר x ואורכו מ-0 עד 5 הוא 5 יחידות. לכן, גם הבסיס העליון חייב להיות באורך 5 יחידות. הוא מתחיל ב-x=2, הוסיפו לו 5.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את אורך הבסיס התחתון. המרחק בין (0,0) ל-(5,0) הוא 5 יחידות.&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ב': במקבילית, צלעות נגדיות שוות. לכן אורך הבסיס העליון גם הוא 5 יחידות.&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ג': הבסיס העליון מתחיל בנקודה שבה ה-x הוא 2. נוסיף 5 יחידות ימינה ל-x.&rlm;", math_expression: "2 + 5 = 7" },
            { verbal_explanation: "שלב ד': ה-y נשאר 4, ולכן הקודקוד הוא (7,4).&rlm;", math_expression: "" }
        ],
        final_answer: "(7,4)"
    },

    // ==========================================================
    // תת נושא 3: חישובי שטחים (12 שאלות)
    // ==========================================================
    
    // שאלה 25
    {
        topic: "quadrilaterals",
        subTopic: "חישובי שטחים",
        question_text: "במקבילית, אורך הבסיס הוא 12 ס\"מ והגובה היורד לאותו בסיס הוא 5 ס\"מ. מהו שטח המקבילית?&rlm;",
        options: ["60 סמ\"ר", "30 סמ\"ר", "34 סמ\"ר", "17 סמ\"ר"],
        correctAnswer: 0,
        hint: "נוסחת שטח מקבילית היא הכפלת הבסיס בגובה. אל תחלקו ב-2! (זה מיועד למשולש).&rlm;",
        solution_steps: [
            { verbal_explanation: "נוסחת השטח למקבילית היא אורך הבסיס כפול הגובה לאותו בסיס.&rlm;", math_expression: "S = b × h" },
            { verbal_explanation: "נכפול 12 ב-5.&rlm;", math_expression: "12 × 5 = 60" }
        ],
        final_answer: "60 סמ\"ר"
    },
    // שאלה 26
    {
        topic: "quadrilaterals",
        subTopic: "חישובי שטחים",
        question_text: "שטחה של מקבילית הוא 72 סמ\"ר. אורך הבסיס שלה הוא 9 ס\"מ. מהו הגובה היורד לבסיס זה?&rlm;",
        options: ["8 ס\"מ", "36 ס\"מ", "16 ס\"מ", "18 ס\"מ"],
        correctAnswer: 0,
        hint: "פעולה הפוכה: חלקו את השטח (72) באורך הבסיס (9) כדי למצוא את הגובה החסר.&rlm;",
        solution_steps: [
            { verbal_explanation: "שטח המקבילית הוא מכפלת הבסיס בגובה.&rlm;", math_expression: "9 × h = 72" },
            { verbal_explanation: "נחלק את השטח בבסיס למציאת הגובה.&rlm;", math_expression: "h = 72 : 9 = 8" }
        ],
        final_answer: "8 ס\"מ"
    },
    // שאלה 27
    {
        topic: "quadrilaterals",
        subTopic: "חישובי שטחים",
        question_text: "שטח מלבן שמידותיו 8 ס\"מ על 6 ס\"מ הוא...&rlm;",
        options: ["48 סמ\"ר", "28 סמ\"ר", "24 סמ\"ר", "14 סמ\"ר"],
        correctAnswer: 0,
        hint: "שטח מלבן שווה להכפלת שתי הצלעות הסמוכות (אורך כפול רוחב).&rlm;",
        solution_steps: [
            { verbal_explanation: "שטח מלבן מחושב על ידי הכפלת האורך ברוחב.&rlm;", math_expression: "8 × 6 = 48" }
        ],
        final_answer: "48 סמ\"ר"
    },
    // שאלה 28
    {
        topic: "quadrilaterals",
        subTopic: "חישובי שטחים",
        question_text: "לפניכם צורה מורכבת המכילה מלבן ומשולש הדבוק אליו. אורך המלבן הוא 10 ורוחבו 4. המשולש יושב על צלע הרוחב, והגובה של המשולש (כלפי חוץ) הוא 3. מהו השטח הכולל?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 200 120' width='100%' height='120' style='max-width:200px;'><rect x='20' y='40' width='100' height='40' fill='#fef08a' stroke='#ca8a04' stroke-width='2'/><polygon points='120,40 120,80 150,60' fill='#bae6fd' stroke='#0284c7' stroke-width='2'/><text x='70' y='35' font-family='Arial' font-size='12' fill='#0f172a'>10</text><text x='10' y='65' font-family='Arial' font-size='12' fill='#0f172a'>4</text><line x1='120' y1='60' x2='150' y2='60' stroke='#0284c7' stroke-dasharray='3,3'/><text x='130' y='55' font-family='Arial' font-size='12' fill='#0284c7'>h=3</text></svg></div>",
        options: ["46", "40", "52", "60"],
        correctAnswer: 0,
        hint: "חשבו את שטח המלבן (10*4). חשבו את שטח המשולש: בסיסו הוא רוחב המלבן (4) והגובה הוא 3, אז (4*3)/2. חברו את השטחים.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את שטח המלבן.&rlm;", math_expression: "10 × 4 = 40" },
            { verbal_explanation: "שלב ב': נחשב את שטח המשולש. הבסיס שלו הוא הצלע 4, והגובה הוא 3.&rlm;", math_expression: "(4 × 3) : 2 = 12 : 2 = 6" },
            { verbal_explanation: "שלב ג': נחבר את שטחי שתי הצורות.&rlm;", math_expression: "40 + 6 = 46" }
        ],
        final_answer: "46"
    },
    // שאלה 29
    {
        topic: "quadrilaterals",
        subTopic: "חישובי שטחים",
        question_text: "במקבילית, צלע אחת היא 10 ס\"מ והגובה אליה הוא 6 ס\"מ. הצלע השנייה של המקבילית היא 12 ס\"מ. מהו הגובה היורד אל הצלע השנייה (של ה-12)?&rlm;",
        options: ["5 ס\"מ", "7.2 ס\"מ", "6 ס\"מ", "4 ס\"מ"],
        correctAnswer: 0,
        hint: "השטח נשאר קבוע בלי קשר לאיזו צלע תבחרו כבסיס! חשבו את השטח עם הצלע הראשונה והגובה שלה (60), ואז חלקו בצלע השנייה כדי למצוא את הגובה אליה.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את השטח לפי הנתונים המלאים (צלע 10 וגובה 6).&rlm;", math_expression: "10 × 6 = 60" },
            { verbal_explanation: "שלב ב': השטח (60) חייב להיות שווה גם לצלע השנייה (12) כפול הגובה שלה (h).&rlm;", math_expression: "12 × h = 60" },
            { verbal_explanation: "שלב ג': נחלק 60 ב-12.&rlm;", math_expression: "h = 5" }
        ],
        final_answer: "5 ס\"מ"
    },
    // שאלה 30
    {
        topic: "quadrilaterals",
        subTopic: "חישובי שטחים",
        question_text: "נתונים מלבן ומקבילית. למלבן אורך בסיס של 8 וגובה 5. למקבילית אורך בסיס של 8 וגובה (המאונך לבסיס) 5. לאיזו צורה שטח גדול יותר?&rlm;",
        options: ["השטחים שווים", "למלבן שטח גדול יותר", "למקבילית שטח גדול יותר", "אי אפשר לדעת ללא אורך הצלע הנטויה"],
        correctAnswer: 0,
        hint: "נוסחת השטח זהה בשתי הצורות (בסיס כפול גובה למלבן זה בעצם אורך כפול רוחב). הצלע הנטויה של המקבילית אינה רלוונטית לשטח.&rlm;",
        solution_steps: [
            { verbal_explanation: "שטח המלבן מחושב על ידי הכפלת צלעותיו המאונכות.&rlm;", math_expression: "8 × 5 = 40" },
            { verbal_explanation: "שטח המקבילית מחושב על ידי הכפלת הבסיס בגובה המאונך אליו.&rlm;", math_expression: "8 × 5 = 40" },
            { verbal_explanation: "שתי הצורות בעלות אותו שטח בדיוק.&rlm;", math_expression: "40 = 40" }
        ],
        final_answer: "השטחים שווים"
    },
    // שאלה 31
    {
        topic: "quadrilaterals",
        subTopic: "חישובי שטחים",
        question_text: "מסגרת לתמונה ברוחב אחיד של 2 ס\"מ עוטפת תמונה מלבנית. מידות התמונה הפנימית הן 10 ס\"מ ו-15 ס\"מ. מהו שטח המסגרת בלבד (מבלי התמונה)?&rlm;",
        options: ["116 סמ\"ר", "150 סמ\"ר", "266 סמ\"ר", "50 סמ\"ר"],
        correctAnswer: 0,
        hint: "חשבו את השטח הכולל (מסגרת+תמונה): הוסיפו 4 ס\"מ לאורך ו-4 ס\"מ לרוחב (2 ס\"מ מכל צד). חסרו מהשטח הגדול את שטח התמונה (150).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': שטח התמונה הפנימית הוא אורך כפול רוחב.&rlm;", math_expression: "10 × 15 = 150" },
            { verbal_explanation: "שלב ב': נחשב את מידות המלבן החיצוני. נוסיף 2 ס\"מ מכל צד, כלומר תוספת של 4 ס\"מ לאורך ולרוחב.&rlm;", math_expression: "10 + 4 = 14 , 15 + 4 = 19" },
            { verbal_explanation: "שלב ג': נחשב את השטח הכולל החיצוני.&rlm;", math_expression: "14 × 19 = 266" },
            { verbal_explanation: "שלב ד': נחסר את התמונה מהשטח הכולל לקבלת המסגרת בלבד.&rlm;", math_expression: "266 - 150 = 116" }
        ],
        final_answer: "116 סמ\"ר"
    },
    // שאלה 32
    {
        topic: "quadrilaterals",
        subTopic: "חישובי שטחים",
        question_text: "לפניכם מקבילית המשורטטת על גבי רשת משבצות (כל משבצת היא 1 ס\"מ על 1 ס\"מ). בסיס המקבילית מכסה 6 משבצות. גובהה מכסה 4 משבצות. מהו שטחה?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 150 100' width='100%' height='100' style='max-width:150px;'><defs><pattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'><path d='M 20 0 L 0 0 0 20' fill='none' stroke='#cbd5e1' stroke-width='1'/></pattern></defs><rect width='100%' height='100%' fill='url(#grid)'/><polygon points='40,80 160,80 120,0 0,0' fill='rgba(34,197,94,0.3)' stroke='#16a34a' stroke-width='2'/></svg></div>",
        options: ["24 סמ\"ר", "10 סמ\"ר", "12 סמ\"ר", "20 סמ\"ר"],
        correctAnswer: 0,
        hint: "גם על רשת משבצות, הנוסחה נשארת בסיס כפול גובה. ספירת משבצות תיתן לכם את האורכים.&rlm;",
        solution_steps: [
            { verbal_explanation: "הבסיס הוא 6 (משבצות). הגובה (מספר המשבצות האנכיות מהבסיס התחתון לעליון) הוא 4.&rlm;", math_expression: "" },
            { verbal_explanation: "שטח מקבילית הוא בסיס כפול גובה.&rlm;", math_expression: "6 × 4 = 24" }
        ],
        final_answer: "24 סמ\"ר"
    },
    // שאלה 33
    {
        topic: "quadrilaterals",
        subTopic: "חישובי שטחים",
        question_text: "אלגברה ושטחים: היקף של מלבן הוא 24 ס\"מ. ידוע שאורכו של המלבן גדול ב-2 ס\"מ מרוחבו. מהו שטח המלבן?&rlm;",
        options: ["35 סמ\"ר", "24 סמ\"ר", "32 סמ\"ר", "48 סמ\"ר"],
        correctAnswer: 0,
        hint: "נסמן רוחב ב-x, אורך ב-x+2. משוואת ההיקף: 2x + 2(x+2) = 24. מצאו את x, ואז כפלו אורך ברוחב לשטח.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרכיב משוואת היקף. חצי היקף (אורך + רוחב) שווה 12.&rlm;", math_expression: "x + (x + 2) = 12" },
            { verbal_explanation: "שלב ב': נפתור את המשוואה לחצי היקף.&rlm;", math_expression: "2x + 2 = 12  =>  2x = 10  =>  x = 5" },
            { verbal_explanation: "שלב ג': הרוחב הוא 5, האורך הוא 7. נחשב שטח.&rlm;", math_expression: "5 × 7 = 35" }
        ],
        final_answer: "35 סמ\"ר"
    },
    // שאלה 34
    {
        topic: "quadrilaterals",
        subTopic: "חישובי שטחים",
        question_text: "שטח עם שברים: מהו שטחו של מלבן שאורכו 4 ס\"מ ורוחבו 2 1/2 ס\"מ (שניים וחצי)?&rlm;",
        options: ["10 סמ\"ר", "8 1/2 סמ\"ר", "6 סמ\"ר", "12 סמ\"ר"],
        correctAnswer: 0,
        hint: "הפכו את 2 וחצי לשבר מדומה (5/2), או כפלו 4 ב-2 (8) ו-4 בחצי (2) וחברו.&rlm;",
        solution_steps: [
            { verbal_explanation: "דרך א': שימוש בחוק הפילוג.&rlm;", math_expression: "4 × (2 + 1/2) = 4 × 2 + 4 × 1/2 = 8 + 2 = 10" },
            { verbal_explanation: "דרך ב': שימוש בשבר מדומה.&rlm;", math_expression: "4 × 5/2 = 20/2 = 10" }
        ],
        final_answer: "10 סמ\"ר"
    },
    // שאלה 35
    {
        topic: "quadrilaterals",
        subTopic: "חישובי שטחים",
        question_text: "לפניכם מקבילית משורטטת במערכת צירים. הקודקודים התחתונים הם בנקודות (1,1) ו-(6,1). הקודקודים העליונים הם בנקודות (3,5) ו-(8,5). מהו השטח?&rlm;",
        options: ["20", "25", "10", "30"],
        correctAnswer: 0,
        hint: "חשבו את הבסיס (המרחק על ציר ה-x בין 1 ל-6). חשבו את הגובה (המרחק על ציר ה-y בין 1 ל-5). כפלו אותם.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': אורך הבסיס הוא המרחק האופקי בין (1,1) ל-(6,1).&rlm;", math_expression: "6 - 1 = 5" },
            { verbal_explanation: "שלב ב': גובה המקבילית הוא המרחק האנכי בין רצפת ה-y=1 לתקרת ה-y=5.&rlm;", math_expression: "5 - 1 = 4" },
            { verbal_explanation: "שלב ג': שטח המקבילית הוא בסיס כפול גובה.&rlm;", math_expression: "5 × 4 = 20" }
        ],
        final_answer: "20"
    },
    // שאלה 36
    {
        topic: "quadrilaterals",
        subTopic: "חישובי שטחים",
        question_text: "מה יקרה לשטחה של מקבילית אם נכפיל גם את הבסיס שלה וגם את הגובה שלה פי 2?&rlm;",
        options: ["השטח יגדל פי 4", "השטח יגדל פי 2", "השטח יישאר זהה", "השטח יגדל פי 8"],
        correctAnswer: 0,
        hint: "הציבו מספרים קטנים. בסיס 2 וגובה 3 (שטח 6). עכשיו בסיס 4 וגובה 6. מה השטח החדש?&rlm;",
        solution_steps: [
            { verbal_explanation: "שטח מקורי מורכב ממכפלת שני גורמים: בסיס וגובה.&rlm;", math_expression: "S = a × h" },
            { verbal_explanation: "אם שניהם מוכפלים פי 2, גם ה-a מוכפל ב-2 וגם ה-h מוכפל ב-2.&rlm;", math_expression: "S_{new} = 2a × 2h" },
            { verbal_explanation: "לפי חוק החילוף בכפל: 2 כפול 2 שווה 4. כלומר השטח גדל פי 4.&rlm;", math_expression: "4 × (a × h)" }
        ],
        final_answer: "השטח יגדל פי 4"
    }

];