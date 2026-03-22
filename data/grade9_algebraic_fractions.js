// ========================================================================
// שכבת גיל: כיתה ט' | נושא: שברים אלגבריים (48 שאלות)
// >>> עובד לפי גרסה 2.1 המושלמת <<<
// 4 תתי-נושאים: תחום הצבה וצמצום, כפל וחילוק, חיבור וחיסור, משוואות.
// כולל איורים גרפיים מובנים (SVG) לשדרוג חווית הלמידה.
// חוקי פורמט: 
// 1. אפשרויות התשובה, הפתרון הסופי והשלמים המתמטיים חפים מ-\( \) (המערכת עוטפת לבד!).
// 2. חזקות עם ^, שברים אנכיים עם \frac, כפל עם \times, חילוק עם :
// ========================================================================

const questionsDB = [

    // ==========================================================
    // תת נושא 1: תחום הצבה וצמצום שברים אלגבריים (12 שאלות)
    // ==========================================================
    
    // שאלה 1
    {
        topic: "algebraic_fractions",
        subTopic: "תחום הצבה וצמצום שברים אלגבריים",
        question_text: "<div style='text-align:center; margin-bottom:10px;'><svg width='60' height='60' viewBox='0 0 24 24' fill='none' stroke='#ef4444' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z'></path><line x1='12' y1='9' x2='12' y2='13'></line><line x1='12' y1='17' x2='12.01' y2='17'></line></svg></div>מהו תחום ההצבה של השבר האלגברי הבא?\n\\( \\frac{5}{x - 4} \\)",
        options: [
            "x \\neq 4", 
            "x \\neq -4", 
            "x \\neq 0", 
            "x \\neq 5"
        ],
        correctAnswer: 0,
        hint: "תחום ההצבה הוא כל המספרים שמותר להציב במקום \\( x \\) מבלי לאפס את המכנה. בדקו מתי המכנה שווה לאפס, ואסרו על התוצאה הזו.",
        solution_steps: [
            { verbal_explanation: "שלב א': המכנה של שבר לעולם לא יכול להיות שווה לאפס, כי אסור לחלק באפס.", math_expression: "x - 4 \\neq 0" },
            { verbal_explanation: "שלב ב': נעביר את המינוס 4 אגף כדי לבודד את ה-\\( x \\).", math_expression: "x \\neq 4" },
            { verbal_explanation: "מסקנה: מותר להציב כל מספר מלבד 4.", math_expression: "x \\neq 4" }
        ],
        final_answer: "x \\neq 4"
    },
    // שאלה 2
    {
        topic: "algebraic_fractions",
        subTopic: "תחום הצבה וצמצום שברים אלגבריים",
        question_text: "מצאו את תחום ההצבה של השבר הבא:\n\\( \\frac{x + 2}{2x + 6} \\)",
        options: [
            "x \\neq -3", 
            "x \\neq 3", 
            "x \\neq -2", 
            "x \\neq 0"
        ],
        correctAnswer: 0,
        hint: "השוו את המכנה לאפס ופתרו את המשוואה. התוצאה שתקבלו היא המספר שאסור להציב.",
        solution_steps: [
            { verbal_explanation: "שלב א': נדרוש שהמכנה יהיה שונה מאפס.", math_expression: "2x + 6 \\neq 0" },
            { verbal_explanation: "שלב ב': נעביר את ה-6 אגף (הסימן מתהפך).", math_expression: "2x \\neq -6" },
            { verbal_explanation: "שלב ג': נחלק ב-2.", math_expression: "x \\neq -3" }
        ],
        final_answer: "x \\neq -3"
    },
    // שאלה 3
    {
        topic: "algebraic_fractions",
        subTopic: "תחום הצבה וצמצום שברים אלגבריים",
        question_text: "מהו תחום ההצבה של שבר שבו המכנה הוא מכפלה של סוגריים?\n\\( \\frac{8}{(x - 1)(x + 5)} \\)",
        options: [
            "x \\neq 1 \\quad , \\quad x \\neq -5", 
            "x \\neq -1 \\quad , \\quad x \\neq 5", 
            "x \\neq 1 \\quad , \\quad x \\neq 5", 
            "x \\neq 0"
        ],
        correctAnswer: 0,
        hint: "מכפלה שווה לאפס אם לפחות אחד מהגורמים שווה לאפס. דאגו שאף אחד מהסוגריים במכנה לא יתאפס.",
        solution_steps: [
            { verbal_explanation: "שלב א': נדרוש שהמכנה כולו לא יתאפס.", math_expression: "(x - 1)(x + 5) \\neq 0" },
            { verbal_explanation: "שלב ב': נפריד לשני תנאים. הסוגריים הראשונים לא יכולים להיות אפס.", math_expression: "x - 1 \\neq 0 \\quad \\Rightarrow \\quad x \\neq 1" },
            { verbal_explanation: "שלב ג': גם הסוגריים השניים לא יכולים להיות אפס.", math_expression: "x + 5 \\neq 0 \\quad \\Rightarrow \\quad x \\neq -5" },
            { verbal_explanation: "לכן יש שני ערכים שאסור להציב.", math_expression: "x \\neq 1 \\quad , \\quad x \\neq -5" }
        ],
        final_answer: "x \\neq 1 \\quad , \\quad x \\neq -5"
    },
    // שאלה 4
    {
        topic: "algebraic_fractions",
        subTopic: "תחום הצבה וצמצום שברים אלגבריים",
        question_text: "תחום הצבה עם חזקה ריבועית במכנה:\n\\( \\frac{x - 9}{x^2 - 25} \\)",
        options: [
            "x \\neq 5 \\quad , \\quad x \\neq -5", 
            "x \\neq 5", 
            "x \\neq 25", 
            "x \\neq 9 \\quad , \\quad x \\neq -9"
        ],
        correctAnswer: 0,
        hint: "הביטוי שבמכנה הוא הפרש ריבועים. פרקו אותו לשני סוגריים (x פחות 5) כפול (x פלוס 5), ואז מצאו מתי כל אחד מתאפס.",
        solution_steps: [
            { verbal_explanation: "שלב א': נדרוש שהמכנה לא יהיה שווה לאפס.", math_expression: "x^2 - 25 \\neq 0" },
            { verbal_explanation: "שלב ב': נעביר אגף ונוציא שורש ריבועי. לשורש ריבועי יש שתי תשובות (חיובית ושלילית).", math_expression: "x^2 \\neq 25" },
            { verbal_explanation: "שלב ג': לכן, ה-\\( x \\) לא יכול להיות שווה ל-5 וגם לא למינוס 5.", math_expression: "x \\neq 5 \\quad , \\quad x \\neq -5" }
        ],
        final_answer: "x \\neq 5 \\quad , \\quad x \\neq -5"
    },
    // שאלה 5
    {
        topic: "algebraic_fractions",
        subTopic: "תחום הצבה וצמצום שברים אלגבריים",
        question_text: "<div style='text-align:center; margin-bottom:10px;'><svg width='60' height='60' viewBox='0 0 24 24' fill='none' stroke='#3b82f6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='6' cy='6' r='3'></circle><circle cx='6' cy='18' r='3'></circle><line x1='20' y1='4' x2='8.12' y2='15.88'></line><line x1='14.47' y1='14.48' x2='20' y2='20'></line><line x1='8.12' y1='8.12' x2='12' y2='12'></line></svg></div>צמצמו את השבר האלגברי הבא (הניחו שתחום ההצבה תקין):\n\\( \\frac{3x + 12}{3} \\)",
        options: [
            "x + 4", 
            "x + 12", 
            "3x + 4", 
            "x"
        ],
        correctAnswer: 0,
        hint: "הוציאו גורם משותף (3) במונה, ואז צמצמו אותו עם המכנה.",
        solution_steps: [
            { verbal_explanation: "שלב א': נוציא גורם משותף במונה. המספר 3 מחלק את שני האיברים.", math_expression: "3x + 12 = 3(x + 4)" },
            { verbal_explanation: "שלב ב': נרשום את השבר מחדש.", math_expression: "\\frac{3(x + 4)}{3}" },
            { verbal_explanation: "שלב ג': נצמצם את המספר 3 במונה ובמכנה.", math_expression: "x + 4" }
        ],
        final_answer: "x + 4"
    },
    // שאלה 6
    {
        topic: "algebraic_fractions",
        subTopic: "תחום הצבה וצמצום שברים אלגבריים",
        question_text: "צמצמו את השבר האלגברי הבא:\n\\( \\frac{x^2 - 5x}{x} \\)",
        options: [
            "x - 5", 
            "x^2 - 5", 
            "x", 
            "x - 5x"
        ],
        correctAnswer: 0,
        hint: "אסור לצמצם ישר! קודם הוציאו \\( x \\) כגורם משותף במונה, ורק אז צמצמו אותו עם המכנה.",
        solution_steps: [
            { verbal_explanation: "שלב א': נוציא \\( x \\) כגורם משותף במונה.", math_expression: "x^2 - 5x = x(x - 5)" },
            { verbal_explanation: "שלב ב': נציב חזרה בשבר.", math_expression: "\\frac{x(x - 5)}{x}" },
            { verbal_explanation: "שלב ג': נצמצם את ה-\\( x \\) במונה עם ה-\\( x \\) במכנה.", math_expression: "x - 5" }
        ],
        final_answer: "x - 5"
    },
    // שאלה 7
    {
        topic: "algebraic_fractions",
        subTopic: "תחום הצבה וצמצום שברים אלגבריים",
        question_text: "צמצום בעזרת הוצאת גורם משותף גם במונה וגם במכנה:\n\\( \\frac{4x - 8}{6x - 12} \\)",
        options: [
            "\\frac{2}{3}", 
            "\\frac{4}{6}", 
            "x - 2", 
            "\\frac{x - 2}{3}"
        ],
        correctAnswer: 0,
        hint: "הוציאו 4 במונה ו-6 במכנה. הסוגריים שייווצרו יהיו זהים ואפשר יהיה לצמצם אותם בשלמותם.",
        solution_steps: [
            { verbal_explanation: "שלב א': פירוק המונה.", math_expression: "4x - 8 = 4(x - 2)" },
            { verbal_explanation: "שלב ב': פירוק המכנה.", math_expression: "6x - 12 = 6(x - 2)" },
            { verbal_explanation: "שלב ג': כתיבת השבר החדש.", math_expression: "\\frac{4(x - 2)}{6(x - 2)}" },
            { verbal_explanation: "שלב ד': צמצום הבלוק הזהה, ואז צמצום השבר המספרי.", math_expression: "\\frac{4}{6} = \\frac{2}{3}" }
        ],
        final_answer: "\\frac{2}{3}"
    },
    // שאלה 8
    {
        topic: "algebraic_fractions",
        subTopic: "תחום הצבה וצמצום שברים אלגבריים",
        question_text: "צמצמו את השבר על ידי שימוש בנוסחת הפרש ריבועים:\n\\( \\frac{x^2 - 16}{x + 4} \\)",
        options: [
            "x - 4", 
            "x + 4", 
            "x - 16", 
            "x^2 - 4"
        ],
        correctAnswer: 0,
        hint: "פרקו את המונה למכפלת שני סוגריים. אחד מהם יצטמצם עם המכנה.",
        solution_steps: [
            { verbal_explanation: "שלב א': נפרק את המונה לפי נוסחת הפרש הריבועים.", math_expression: "x^2 - 16 = (x - 4)(x + 4)" },
            { verbal_explanation: "שלב ב': נציב בשבר.", math_expression: "\\frac{(x - 4)(x + 4)}{x + 4}" },
            { verbal_explanation: "שלב ג': נצמצם את הבלוק המשותף.", math_expression: "x - 4" }
        ],
        final_answer: "x - 4"
    },
    // שאלה 9
    {
        topic: "algebraic_fractions",
        subTopic: "תחום הצבה וצמצום שברים אלגבריים",
        question_text: "צמצום עם נוסחת כפל מקוצר מורחבת (טרינום או נוסחה). פשטו:\n\\( \\frac{x^2 + 6x + 9}{x + 3} \\)",
        options: [
            "x + 3", 
            "x + 9", 
            "x - 3", 
            "(x + 3)^2"
        ],
        correctAnswer: 0,
        hint: "המונה הוא נוסחת כפל מקוצר של דו-איבר בריבוע (או טרינום שמפרקים לזוג סוגריים זהים).",
        solution_steps: [
            { verbal_explanation: "שלב א': נזהה שהמונה הוא פיתוח של נוסחת סכום בריבוע (או נפרק לפי טרינום: כפל ל-9, סכום 6).", math_expression: "x^2 + 6x + 9 = (x + 3)(x + 3)" },
            { verbal_explanation: "שלב ב': נציב בשבר.", math_expression: "\\frac{(x + 3)(x + 3)}{x + 3}" },
            { verbal_explanation: "שלב ג': נצמצם את אחד הסוגריים שבמונה עם המכנה.", math_expression: "x + 3" }
        ],
        final_answer: "x + 3"
    },
    // שאלה 10
    {
        topic: "algebraic_fractions",
        subTopic: "תחום הצבה וצמצום שברים אלגבריים",
        question_text: "צמצום שבר שבו צריך להפוך סימנים! (טריק המינוס 1):\n\\( \\frac{x - 7}{7 - x} \\)",
        options: [
            "-1", 
            "1", 
            "x - 7", 
            "0"
        ],
        correctAnswer: 0,
        hint: "המונה והמכנה דומים, אבל הסימנים שלהם הפוכים. אם נוציא מינוס 1 כגורם משותף מחוץ לאחד מהם, הם יהיו זהים לחלוטין.",
        solution_steps: [
            { verbal_explanation: "שלב א': נשים לב ש- \\( (7 - x) \\) הוא בדיוק המינוס של \\( (x - 7) \\).", math_expression: "7 - x = -(x - 7)" },
            { verbal_explanation: "שלב ב': נציב זאת במכנה במקום הביטוי המקורי.", math_expression: "\\frac{x - 7}{-(x - 7)}" },
            { verbal_explanation: "שלב ג': הסוגריים מצטמצמים לחלוטין ונשאר לנו 1 חלקי מינוס 1.", math_expression: "-1" }
        ],
        final_answer: "-1"
    },
    // שאלה 11
    {
        topic: "algebraic_fractions",
        subTopic: "תחום הצבה וצמצום שברים אלגבריים",
        question_text: "צמצום שבר המכיל טרינום מורכב במונה:\n\\( \\frac{x^2 - 2x - 15}{x - 5} \\)",
        options: [
            "x + 3", 
            "x - 3", 
            "x + 5", 
            "x - 15"
        ],
        correctAnswer: 0,
        hint: "פרקו את הטרינום שבמונה לזוג סוגריים. חפשו מספרים שמכפלתם מינוס 15 וסכומם מינוס 2.",
        solution_steps: [
            { verbal_explanation: "שלב א': נפרק את הטרינום. המספרים הם 3 ומינוס 5.", math_expression: "x^2 - 2x - 15 = (x + 3)(x - 5)" },
            { verbal_explanation: "שלב ב': נרשום את השבר המפורק.", math_expression: "\\frac{(x + 3)(x - 5)}{x - 5}" },
            { verbal_explanation: "שלב ג': נצמצם את הגורם הזהה.", math_expression: "x + 3" }
        ],
        final_answer: "x + 3"
    },
    // שאלה 12
    {
        topic: "algebraic_fractions",
        subTopic: "תחום הצבה וצמצום שברים אלגבריים",
        question_text: "שאלת אתגר - צמצום כפול! צמצמו את השבר:\n\\( \\frac{2x^2 - 18}{2x + 6} \\)",
        options: [
            "x - 3", 
            "x + 3", 
            "2(x - 3)", 
            "x - 9"
        ],
        correctAnswer: 0,
        hint: "הוציאו 2 כגורם משותף גם במונה וגם במכנה. לאחר מכן, פרקו את המונה בעזרת הפרש ריבועים.",
        solution_steps: [
            { verbal_explanation: "שלב א': נוציא גורם משותף 2 במונה ובמכנה.", math_expression: "\\frac{2(x^2 - 9)}{2(x + 3)}" },
            { verbal_explanation: "שלב ב': נצמצם את ה-2, ונפרק את המונה לפי הפרש ריבועים.", math_expression: "\\frac{(x - 3)(x + 3)}{x + 3}" },
            { verbal_explanation: "שלב ג': נצמצם את הבלוק שחוזר על עצמו.", math_expression: "x - 3" }
        ],
        final_answer: "x - 3"
    },

    // ==========================================================
    // תת נושא 2: כפל וחילוק שברים אלגבריים (12 שאלות)
    // ==========================================================
    
    // שאלה 13
    {
        topic: "algebraic_fractions",
        subTopic: "כפל וחילוק שברים אלגבריים",
        question_text: "כפלו את השברים האלגבריים הבאים ופשטו:\n\\( \\frac{x}{4} \\times \\frac{8}{x^2} \\)",
        options: [
            "\\frac{2}{x}", 
            "\\frac{x}{2}", 
            "\\frac{2x}{x^2}", 
            "\\frac{8x}{4x^2}"
        ],
        correctAnswer: 0,
        hint: "בכפל שברים, כופלים מונה במונה ומכנה במכנה. לאחר מכן, צמצמו מספרים בנפרד ואיקסים בנפרד.",
        solution_steps: [
            { verbal_explanation: "שלב א': נכפול את המונים ואת המכנים יחד.", math_expression: "\\frac{x \\times 8}{4 \\times x^2} = \\frac{8x}{4x^2}" },
            { verbal_explanation: "שלב ב': נצמצם את המספרים (8 חלקי 4 שווה 2 למעלה).", math_expression: "\\frac{2x}{x^2}" },
            { verbal_explanation: "שלב ג': נצמצם את ה-\\( x \\) (איקס למעלה מצטמצם עם אחד האיקסים למטה).", math_expression: "\\frac{2}{x}" }
        ],
        final_answer: "\\frac{2}{x}"
    },
    // שאלה 14
    {
        topic: "algebraic_fractions",
        subTopic: "כפל וחילוק שברים אלגבריים",
        question_text: "כפל שברים עם גורם משותף. כפלו ופשטו:\n\\( \\frac{3x + 6}{x} \\times \\frac{x^2}{x + 2} \\)",
        options: [
            "3x", 
            "\\frac{3x}{x + 2}", 
            "3x^2", 
            "x + 2"
        ],
        correctAnswer: 0,
        hint: "לפני שאתם כופלים, פרקו את המונה הראשון על ידי הוצאת המספר 3 כגורם משותף. לאחר מכן תוכלו לצמצם בהצלבה.",
        solution_steps: [
            { verbal_explanation: "שלב א': נפרק את המונה השמאלי.", math_expression: "3x + 6 = 3(x + 2)" },
            { verbal_explanation: "שלב ב': נרשום את תרגיל הכפל המעודכן.", math_expression: "\\frac{3(x + 2)}{x} \\times \\frac{x^2}{x + 2}" },
            { verbal_explanation: "שלב ג': נצמצם בהצלבה את הבלוק \\( (x + 2) \\). כמו כן, ה-\\( x \\) שבמכנה מצטמצם עם ה-\\( x^2 \\) שבמונה (נשאר איקס אחד למעלה).", math_expression: "3 \\times x = 3x" }
        ],
        final_answer: "3x"
    },
    // שאלה 15
    {
        topic: "algebraic_fractions",
        subTopic: "כפל וחילוק שברים אלגבריים",
        question_text: "כפל שברים עם הפרש ריבועים:\n\\( \\frac{x^2 - 1}{x + 3} \\times \\frac{2x + 6}{x - 1} \\)",
        options: [
            "2(x + 1)", 
            "2(x - 1)", 
            "\\frac{x + 1}{2}", 
            "x + 1"
        ],
        correctAnswer: 0,
        hint: "פרקו את כל המונים והמכנים שאפשר (הפרש ריבועים והוצאת גורם משותף 2). ואז, התחילו 'לחסל' גורמים בהצלבה.",
        solution_steps: [
            { verbal_explanation: "שלב א': נפרק את המונה השמאלי (הפרש ריבועים).", math_expression: "x^2 - 1 = (x - 1)(x + 1)" },
            { verbal_explanation: "שלב ב': נפרק את המונה הימני (נוציא 2).", math_expression: "2x + 6 = 2(x + 3)" },
            { verbal_explanation: "שלב ג': נרשום את התרגיל המפורק.", math_expression: "\\frac{(x - 1)(x + 1)}{x + 3} \\times \\frac{2(x + 3)}{x - 1}" },
            { verbal_explanation: "שלב ד': נצמצם בהצלבה את \\( (x - 1) \\) ואת \\( (x + 3) \\). מה שנשאר במונה זה הפתרון.", math_expression: "2(x + 1)" }
        ],
        final_answer: "2(x + 1)"
    },
    // שאלה 16
    {
        topic: "algebraic_fractions",
        subTopic: "כפל וחילוק שברים אלגבריים",
        question_text: "<div style='text-align:center; margin-bottom:10px;'><svg width='60' height='60' viewBox='0 0 24 24' fill='none' stroke='#c5a059' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M3 12h18'></path><path d='M15 5l7 7-7 7'></path><path d='M9 19l-7-7 7-7'></path></svg></div>חילוק שברים אלגבריים בסיסי: פשטו את התרגיל הבא:\n\\( \\frac{x^2}{5} : \\frac{x}{10} \\)",
        options: [
            "2x", 
            "\\frac{x^3}{50}", 
            "\\frac{2}{x}", 
            "\\frac{1}{2x}"
        ],
        correctAnswer: 0,
        hint: "כדי לחלק שברים, הופכים את פעולת החילוק לכפל, והופכים את השבר השני (מונה ומכנה מתחלפים).",
        solution_steps: [
            { verbal_explanation: "שלב א': נהפוך את החילוק לכפל בהופכי.", math_expression: "\\frac{x^2}{5} \\times \\frac{10}{x}" },
            { verbal_explanation: "שלב ב': נצמצם את המספרים בהצלבה. 10 חלקי 5 משאיר 2 במונה.", math_expression: "" },
            { verbal_explanation: "שלב ג': נצמצם את המשתנים בהצלבה. \\( x^2 \\) חלקי \\( x \\) משאיר \\( x \\) במונה.", math_expression: "2 \\times x = 2x" }
        ],
        final_answer: "2x"
    },
    // שאלה 17
    {
        topic: "algebraic_fractions",
        subTopic: "כפל וחילוק שברים אלגבריים",
        question_text: "חילוק שברים עם ביטויים אלגבריים:\n\\( \\frac{x + 2}{x - 3} : \\frac{3x + 6}{x^2 - 3x} \\)",
        options: [
            "\\frac{x}{3}", 
            "\\frac{3}{x}", 
            "3x", 
            "\\frac{x(x + 2)}{3(x - 3)}"
        ],
        correctAnswer: 0,
        hint: "קודם כל, הפכו את התרגיל לתרגיל כפל עם השבר השני הפוך. לאחר מכן, פרקו את המונים והמכנים של השבר הימני וצמצמו.",
        solution_steps: [
            { verbal_explanation: "שלב א': נהפוך את התרגיל לכפל.", math_expression: "\\frac{x + 2}{x - 3} \\times \\frac{x^2 - 3x}{3x + 6}" },
            { verbal_explanation: "שלב ב': נפרק את המונה והמכנה של השבר השני.", math_expression: "x^2 - 3x = x(x - 3) \\quad , \\quad 3x + 6 = 3(x + 2)" },
            { verbal_explanation: "שלב ג': נציב ונצמצם בהצלבה.", math_expression: "\\frac{x + 2}{x - 3} \\times \\frac{x(x - 3)}{3(x + 2)}" },
            { verbal_explanation: "הבלוקים \\( (x + 2) \\) ו-\\( (x - 3) \\) מצטמצמים כולם. נשאר רק \\( x \\) במונה ו-3 במכנה.", math_expression: "\\frac{x}{3}" }
        ],
        final_answer: "\\frac{x}{3}"
    },
    // שאלה 18
    {
        topic: "algebraic_fractions",
        subTopic: "כפל וחילוק שברים אלגבריים",
        question_text: "חילוק מורכב המשלב טרינום!\n\\( \\frac{x^2 - 4x + 4}{2x} : \\frac{x - 2}{6x^2} \\)",
        options: [
            "3x(x - 2)", 
            "\\frac{3x}{x - 2}", 
            "3x(x + 2)", 
            "\\frac{x - 2}{3x}"
        ],
        correctAnswer: 0,
        hint: "הפכו לכפל. המונה השמאלי הוא נוסחת כפל מקוצר (או טרינום). פרקו אותו ל-\\( (x - 2)^2 \\) וצמצמו בהצלבה.",
        solution_steps: [
            { verbal_explanation: "שלב א': הופכים את פעולת החילוק לכפל ואת השבר השני.", math_expression: "\\frac{x^2 - 4x + 4}{2x} \\times \\frac{6x^2}{x - 2}" },
            { verbal_explanation: "שלב ב': פירוק הטרינום במונה השמאלי.", math_expression: "x^2 - 4x + 4 = (x - 2)(x - 2)" },
            { verbal_explanation: "שלב ג': הצבה וצמצום. אחד ה-\\( (x-2) \\) במונה מצטמצם עם המכנה. בנוסף, \\( 6x^2 \\) חלקי \\( 2x \\) שווה ל-\\( 3x \\).", math_expression: "(x - 2) \\times 3x" },
            { verbal_explanation: "סידור התשובה.", math_expression: "3x(x - 2)" }
        ],
        final_answer: "3x(x - 2)"
    },
    // שאלה 19
    {
        topic: "algebraic_fractions",
        subTopic: "כפל וחילוק שברים אלגבריים",
        question_text: "כפל עם היפוך סימנים (טריק המינוס). פשטו:\n\\( \\frac{x - 5}{3} \\times \\frac{6}{5 - x} \\)",
        options: [
            "-2", 
            "2", 
            "\\frac{2(x - 5)}{5 - x}", 
            "-1"
        ],
        correctAnswer: 0,
        hint: "הוציאו מינוס 1 מחוץ לאחד מהביטויים (או למעלה או למטה) כדי שהם יהיו זהים ותוכלו לצמצם אותם.",
        solution_steps: [
            { verbal_explanation: "שלב א': נשים לב שהמונה והמכנה בהצלבה דומים אך הפוכים בסימן. נוציא מינוס מהמכנה הימני.", math_expression: "5 - x = -(x - 5)" },
            { verbal_explanation: "שלב ב': נרשום את התרגיל מחדש.", math_expression: "\\frac{x - 5}{3} \\times \\frac{6}{-(x - 5)}" },
            { verbal_explanation: "שלב ג': נצמצם את \\( (x - 5) \\) בהצלבה.", math_expression: "\\frac{1}{3} \\times \\frac{6}{-1}" },
            { verbal_explanation: "שלב ד': נחשב (6 לחלק למינוס 3).", math_expression: "-2" }
        ],
        final_answer: "-2"
    },
    // שאלה 20
    {
        topic: "algebraic_fractions",
        subTopic: "כפל וחילוק שברים אלגבריים",
        question_text: "חילוק שלם בשבר אלגברי:\n\\( (x^2 - 16) : \\frac{x - 4}{2} \\)",
        options: [
            "2(x + 4)", 
            "2(x - 4)", 
            "\\frac{x + 4}{2}", 
            "\\frac{2}{x + 4}"
        ],
        correctAnswer: 0,
        hint: "אפשר להתייחס לביטוי השלם כשבר עם מכנה 1. הפכו את פעולת החילוק לכפל ופרקו את הביטוי השלם לפי הפרש ריבועים.",
        solution_steps: [
            { verbal_explanation: "שלב א': נרשום את התרגיל ככפל בהופכי. הביטוי השלם נמצא במונה.", math_expression: "\\frac{x^2 - 16}{1} \\times \\frac{2}{x - 4}" },
            { verbal_explanation: "שלב ב': נפרק את הפרש הריבועים.", math_expression: "\\frac{(x - 4)(x + 4)}{1} \\times \\frac{2}{x - 4}" },
            { verbal_explanation: "שלב ג': נצמצם את \\( (x - 4) \\) בהצלבה, ונכפיל ב-2.", math_expression: "2(x + 4)" }
        ],
        final_answer: "2(x + 4)"
    },
    // שאלה 21
    {
        topic: "algebraic_fractions",
        subTopic: "כפל וחילוק שברים אלגבריים",
        question_text: "כפל של שלושה שברים! לא להיבהל, פשוט צמצמו:\n\\( \\frac{x}{2} \\times \\frac{4}{y} \\times \\frac{y}{x} \\)",
        options: [
            "2", 
            "\\frac{4}{2}", 
            "x", 
            "y"
        ],
        correctAnswer: 0,
        hint: "ניתן לצמצם בהצלבה מכל מונה לכל מכנה לאורך כל שרשרת הכפל.",
        solution_steps: [
            { verbal_explanation: "שלב א': ה-\\( x \\) במונה השמאלי מצטמצם עם ה-\\( x \\) במכנה הימני ביותר.", math_expression: "" },
            { verbal_explanation: "שלב ב': ה-\\( y \\) במכנה האמצעי מצטמצם עם ה-\\( y \\) במונה הימני.", math_expression: "" },
            { verbal_explanation: "שלב ג': נשארנו רק עם מספרים. 4 במונה חלקי 2 במכנה.", math_expression: "\\frac{4}{2} = 2" }
        ],
        final_answer: "2"
    },
    // שאלה 22
    {
        topic: "algebraic_fractions",
        subTopic: "כפל וחילוק שברים אלגבריים",
        question_text: "כפל המשלב טרינומים מרובים. פשטו:\n\\( \\frac{x^2 + 5x + 6}{x^2 + 3x} \\times \\frac{x}{x + 2} \\)",
        options: [
            "1", 
            "x", 
            "\\frac{x + 3}{x + 2}", 
            "0"
        ],
        correctAnswer: 0,
        hint: "פרקו את הטרינום במונה לזוג סוגריים. פרקו את המכנה על ידי הוצאת \\( x \\) כגורם משותף. ואז התחילו ב'חגיגת הצמצומים'.",
        solution_steps: [
            { verbal_explanation: "שלב א': נפרק את המונה השמאלי (כפל 6, סכום 5).", math_expression: "x^2 + 5x + 6 = (x + 2)(x + 3)" },
            { verbal_explanation: "שלב ב': נפרק את המכנה השמאלי.", math_expression: "x^2 + 3x = x(x + 3)" },
            { verbal_explanation: "שלב ג': נציב הכל יחד.", math_expression: "\\frac{(x + 2)(x + 3)}{x(x + 3)} \\times \\frac{x}{x + 2}" },
            { verbal_explanation: "שלב ד': הכל מצטמצם! \\( (x+2) \\) מצטמצם, \\( (x+3) \\) מצטמצם, וה-\\( x \\) מצטמצם. כששבר מצטמצם לחלוטין התוצאה היא 1.", math_expression: "1" }
        ],
        final_answer: "1"
    },
    // שאלה 23
    {
        topic: "algebraic_fractions",
        subTopic: "כפל וחילוק שברים אלגבריים",
        question_text: "חילוק המשלב הפרש ריבועים והוצאת גורם. פשטו:\n\\( \\frac{2x^2 - 18}{5x} : \\frac{x + 3}{10x^2} \\)",
        options: [
            "4x(x - 3)", 
            "2x(x - 3)", 
            "4x(x + 3)", 
            "\\frac{x - 3}{4x}"
        ],
        correctAnswer: 0,
        hint: "הפכו לכפל. הוציאו 2 כגורם משותף מהמונה השמאלי, ואז פרקו את הסוגריים שייווצרו. צמצמו מספרים ואיקסים בהצלבה.",
        solution_steps: [
            { verbal_explanation: "שלב א': הפיכה לכפל.", math_expression: "\\frac{2x^2 - 18}{5x} \\times \\frac{10x^2}{x + 3}" },
            { verbal_explanation: "שלב ב': פירוק המונה השמאלי. מוציאים 2 ואז הפרש ריבועים.", math_expression: "2(x^2 - 9) = 2(x - 3)(x + 3)" },
            { verbal_explanation: "שלב ג': הצבה וצמצום. הבלוק \\( (x + 3) \\) יורד. נצמצם גם \\( 10x^2 \\) עם \\( 5x \\) (נשאר \\( 2x \\) למעלה).", math_expression: "2(x - 3) \\times 2x" },
            { verbal_explanation: "שלב ד': נכפיל את המקדמים החיצוניים.", math_expression: "4x(x - 3)" }
        ],
        final_answer: "4x(x - 3)"
    },
    // שאלה 24
    {
        topic: "algebraic_fractions",
        subTopic: "כפל וחילוק שברים אלגבריים",
        question_text: "שאלת אתגר - חילוק שהוא למעשה קו שבר גדול (קומתיים):\n\\( \\frac{\\frac{x^2}{4}}{\\frac{x}{8}} = ? \\)",
        options: [
            "2x", 
            "\\frac{x}{2}", 
            "\\frac{x^3}{32}", 
            "2x^2"
        ],
        correctAnswer: 0,
        hint: "קו השבר הראשי (באמצע) שקול לפעולת חילוק. רשמו זאת כתרגיל חילוק רגיל (עם נקודתיים), הפכו לכפל, ופתרו.",
        solution_steps: [
            { verbal_explanation: "שלב א': שבר קומתיים הוא פשוט חילוק בין המונה למכנה. נרשום אותו בצורה רגילה.", math_expression: "\\frac{x^2}{4} : \\frac{x}{8}" },
            { verbal_explanation: "שלב ב': נהפוך לכפל בהופכי.", math_expression: "\\frac{x^2}{4} \\times \\frac{8}{x}" },
            { verbal_explanation: "שלב ג': נצמצם בהצלבה. 8 חלקי 4 זה 2. \\( x^2 \\) חלקי \\( x \\) זה \\( x \\).", math_expression: "2x" }
        ],
        final_answer: "2x"
    },

    // ==========================================================
    // תת נושא 3: חיבור וחיסור שברים אלגבריים (12 שאלות)
    // ==========================================================
    
    // שאלה 25
    {
        topic: "algebraic_fractions",
        subTopic: "חיבור וחיסור שברים אלגבריים",
        question_text: "חיבור שברים עם מכנה זהה - הפעולה הפשוטה ביותר:\n\\( \\frac{x + 3}{5} + \\frac{2x - 1}{5} = ? \\)",
        options: [
            "\\frac{3x + 2}{5}", 
            "\\frac{3x + 2}{10}", 
            "\\frac{x + 2}{5}", 
            "\\frac{3x + 4}{5}"
        ],
        correctAnswer: 0,
        hint: "כשהמכנים זהים, פשוט רושמים את כל המונים מעל מכנה אחד משותף ומבצעים כינוס איברים.",
        solution_steps: [
            { verbal_explanation: "שלב א': מכיוון שהמכנה (5) משותף לשני השברים, נחבר את המונים יחד מעל קו שבר אחד.", math_expression: "\\frac{x + 3 + 2x - 1}{5}" },
            { verbal_explanation: "שלב ב': נבצע כינוס איברים במונה (\\( x + 2x = 3x \\), וכן 3 פחות 1 שווה 2).", math_expression: "\\frac{3x + 2}{5}" }
        ],
        final_answer: "\\frac{3x + 2}{5}"
    },
    // שאלה 26
    {
        topic: "algebraic_fractions",
        subTopic: "חיבור וחיסור שברים אלגבריים",
        question_text: "חיסור שברים עם מכנה זהה. שימו לב למלכודת הסימנים במונה השני!\n\\( \\frac{4x + 7}{x} - \\frac{x - 2}{x} = ? \\)",
        options: [
            "\\frac{3x + 9}{x}", 
            "\\frac{3x + 5}{x}", 
            "\\frac{5x + 5}{x}", 
            "\\frac{3x - 9}{x}"
        ],
        correctAnswer: 0,
        hint: "כשיש מינוס לפני שבר, המינוס פועל על כל המונה. הכניסו את המונה השני לסוגריים לפני שתחברו אותם.",
        solution_steps: [
            { verbal_explanation: "שלב א': נרשום הכל מעל מכנה אחד. נשים לב שסימן החיסור מתייחס לכל המונה הימני.", math_expression: "\\frac{4x + 7 - (x - 2)}{x}" },
            { verbal_explanation: "שלב ב': נפתח את הסוגריים במונה. המינוס משנה את הסימנים.", math_expression: "\\frac{4x + 7 - x + 2}{x}" },
            { verbal_explanation: "שלב ג': נכנס איברים דומים (\\( 4x - x = 3x \\), וכן 7 ועוד 2 זה 9).", math_expression: "\\frac{3x + 9}{x}" }
        ],
        final_answer: "\\frac{3x + 9}{x}"
    },
    // שאלה 27
    {
        topic: "algebraic_fractions",
        subTopic: "חיבור וחיסור שברים אלגבריים",
        question_text: "חיבור שברים עם מכנים מספרים שונים:\n\\( \\frac{x}{3} + \\frac{x}{4} = ? \\)",
        options: [
            "\\frac{7x}{12}", 
            "\\frac{2x}{7}", 
            "\\frac{x^2}{12}", 
            "\\frac{7x}{7}"
        ],
        correctAnswer: 0,
        hint: "מצאו מכנה משותף (במקרה זה, המכפלה של 3 ו-4). הרחיבו כל שבר בהתאם ואז חברו.",
        solution_steps: [
            { verbal_explanation: "שלב א': המכנה המשותף הקטן ביותר ל-3 ו-4 הוא 12.", math_expression: "" },
            { verbal_explanation: "שלב ב': נרחיב את השבר הראשון פי 4, ואת השני פי 3.", math_expression: "\\frac{x \\times 4}{12} + \\frac{x \\times 3}{12}" },
            { verbal_explanation: "שלב ג': נחבר את המונים המורחבים.", math_expression: "\\frac{4x + 3x}{12} = \\frac{7x}{12}" }
        ],
        final_answer: "\\frac{7x}{12}"
    },
    // שאלה 28
    {
        topic: "algebraic_fractions",
        subTopic: "חיבור וחיסור שברים אלגבריים",
        question_text: "<div style='text-align:center; margin-bottom:10px;'><svg width='60' height='60' viewBox='0 0 24 24' fill='none' stroke='#10b981' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z'></path><polyline points='3.27 6.96 12 12.01 20.73 6.96'></polyline><line x1='12' y1='22.08' x2='12' y2='12'></line></svg></div>מציאת מכנה משותף מינימלי עם משתנים. פשטו:\n\\( \\frac{5}{2x} + \\frac{3}{x} = ? \\)",
        options: [
            "\\frac{11}{2x}", 
            "\\frac{8}{2x}", 
            "\\frac{8}{3x}", 
            "\\frac{11}{3x}"
        ],
        correctAnswer: 0,
        hint: "המכנה המשותף צריך להכיל את כל הגורמים המופיעים. במקרה זה, המספר 2 מופיע והמשתנה \\( x \\) מופיע. לכן \\( 2x \\) הוא המכנה המשותף.",
        solution_steps: [
            { verbal_explanation: "שלב א': המכנה המשותף הוא \\( 2x \\).", math_expression: "" },
            { verbal_explanation: "שלב ב': השבר הראשון כבר בעל מכנה \\( 2x \\), לכן לא נשנה אותו. את השבר השני יש להרחיב פי 2 כדי שמכנהו יהפוך ל-\\( 2x \\).", math_expression: "\\frac{3 \\times 2}{x \\times 2} = \\frac{6}{2x}" },
            { verbal_explanation: "שלב ג': נחבר את המונים.", math_expression: "\\frac{5}{2x} + \\frac{6}{2x} = \\frac{11}{2x}" }
        ],
        final_answer: "\\frac{11}{2x}"
    },
    // שאלה 29
    {
        topic: "algebraic_fractions",
        subTopic: "חיבור וחיסור שברים אלגבריים",
        question_text: "מכנה משותף שדורש הכפלת מכנים. פשטו:\n\\( \\frac{2}{x} - \\frac{1}{x - 3} = ? \\)",
        options: [
            "\\frac{x - 6}{x(x - 3)}", 
            "\\frac{1}{x(x - 3)}", 
            "\\frac{1}{-3}", 
            "\\frac{x - 6}{-3}"
        ],
        correctAnswer: 0,
        hint: "אין גורם משותף בין \\( x \\) ל-\\( (x-3) \\). לכן, המכנה המשותף הוא המכפלה שלהם. הרחיבו באלכסון.",
        solution_steps: [
            { verbal_explanation: "שלב א': המכנה המשותף הוא המכפלה של שני המכנים: \\( x(x - 3) \\).", math_expression: "" },
            { verbal_explanation: "שלב ב': נרחיב את המונה הראשון ב-\\( (x - 3) \\) ואת המונה השני ב-\\( x \\).", math_expression: "\\frac{2(x - 3) - 1 \\times x}{x(x - 3)}" },
            { verbal_explanation: "שלב ג': נפתח סוגריים במונה.", math_expression: "\\frac{2x - 6 - x}{x(x - 3)}" },
            { verbal_explanation: "שלב ד': נכנס איברים (\\( 2x - x = x \\)).", math_expression: "\\frac{x - 6}{x(x - 3)}" }
        ],
        final_answer: "\\frac{x - 6}{x(x - 3)}"
    },
    // שאלה 30
    {
        topic: "algebraic_fractions",
        subTopic: "חיבור וחיסור שברים אלגבריים",
        question_text: "מציאת מכנה משותף חכם על ידי פירוק לגורמים תחילה:\n\\( \\frac{1}{x + 2} + \\frac{3}{2x + 4} = ? \\)",
        options: [
            "\\frac{5}{2(x + 2)}", 
            "\\frac{4}{2x + 4}", 
            "\\frac{4}{3x + 6}", 
            "\\frac{5}{x + 2}"
        ],
        correctAnswer: 0,
        hint: "לפני שאתם כופלים מכנים, בדקו האם אפשר לפרק את המכנה השני. תגלו שהם קרובי משפחה!",
        solution_steps: [
            { verbal_explanation: "שלב א': נפרק את המכנה של השבר השני בהוצאת גורם משותף 2.", math_expression: "2x + 4 = 2(x + 2)" },
            { verbal_explanation: "שלב ב': נרשום את התרגיל מחדש. קל לראות שהמכנה המשותף הוא \\( 2(x + 2) \\).", math_expression: "\\frac{1}{x + 2} + \\frac{3}{2(x + 2)}" },
            { verbal_explanation: "שלב ג': נרחיב רק את השבר הראשון פי 2.", math_expression: "\\frac{1 \\times 2}{2(x + 2)} + \\frac{3}{2(x + 2)}" },
            { verbal_explanation: "שלב ד': נחבר מונים.", math_expression: "\\frac{2 + 3}{2(x + 2)} = \\frac{5}{2(x + 2)}" }
        ],
        final_answer: "\\frac{5}{2(x + 2)}"
    },
    // שאלה 31
    {
        topic: "algebraic_fractions",
        subTopic: "חיבור וחיסור שברים אלגבריים",
        question_text: "חיבור וחיסור הכולל הפרש ריבועים:\n\\( \\frac{x}{x^2 - 9} - \\frac{1}{x - 3} = ? \\)",
        options: [
            "\\frac{-3}{x^2 - 9}", 
            "\\frac{x - 1}{x^2 - 9}", 
            "\\frac{-3}{x - 3}", 
            "\\frac{2x - 3}{x^2 - 9}"
        ],
        correctAnswer: 0,
        hint: "פרקו את המכנה השמאלי לפי הפרש ריבועים. כך תמצאו את המכנה המשותף המינימלי בקלות.",
        solution_steps: [
            { verbal_explanation: "שלב א': פירוק המכנה הראשון.", math_expression: "x^2 - 9 = (x - 3)(x + 3)" },
            { verbal_explanation: "שלב ב': המכנה המשותף הוא \\( (x - 3)(x + 3) \\). יש להרחיב רק את השבר השני ב-\\( (x + 3) \\).", math_expression: "\\frac{x}{x^2 - 9} - \\frac{1(x + 3)}{x^2 - 9}" },
            { verbal_explanation: "שלב ג': נרשום תחת קו שבר אחד (זהירות עם המינוס על כל המונה!).", math_expression: "\\frac{x - (x + 3)}{x^2 - 9}" },
            { verbal_explanation: "שלב ד': נפתח סוגריים במונה ונכנס. ה-\\( x \\) מתבטל.", math_expression: "\\frac{x - x - 3}{x^2 - 9} = \\frac{-3}{x^2 - 9}" }
        ],
        final_answer: "\\frac{-3}{x^2 - 9}"
    },
    // שאלה 32
    {
        topic: "algebraic_fractions",
        subTopic: "חיבור וחיסור שברים אלגבריים",
        question_text: "טריק המינוס חוזר! פשטו את הביטוי:\n\\( \\frac{5}{x - 2} + \\frac{5}{2 - x} = ? \\)",
        options: [
            "0", 
            "\\frac{10}{x - 2}", 
            "10", 
            "\\frac{10}{2 - x}"
        ],
        correctAnswer: 0,
        hint: "המכנים הפוכים בסימנם. הוציאו מינוס כגורם משותף מתוך המכנה הימני כדי להשוות אותם.",
        solution_steps: [
            { verbal_explanation: "שלב א': המכנה הימני הפוך בסימניו. נוציא ממנו מינוס אל מחוץ לשבר.", math_expression: "\\frac{5}{2 - x} = - \\frac{5}{x - 2}" },
            { verbal_explanation: "שלב ב': נרשום את התרגיל מחדש עם מכנים זהים, כאשר החיבור הפך לחיסור.", math_expression: "\\frac{5}{x - 2} - \\frac{5}{x - 2}" },
            { verbal_explanation: "שלב ג': אנו מחסרים שבר מעצמו, ולכן התוצאה היא 0.", math_expression: "0" }
        ],
        final_answer: "0"
    },
    // שאלה 33
    {
        topic: "algebraic_fractions",
        subTopic: "חיבור וחיסור שברים אלגבריים",
        question_text: "חיבור ביטוי שלם (ללא מכנה) ושבר:\n\\( 2 + \\frac{1}{x + 1} = ? \\)",
        options: [
            "\\frac{2x + 3}{x + 1}", 
            "\\frac{3}{x + 1}", 
            "\\frac{2x + 1}{x + 1}", 
            "\\frac{2x + 2}{x + 1}"
        ],
        correctAnswer: 0,
        hint: "התייחסו למספר 2 כאילו הוא השבר 2 חלקי 1. הרחיבו אותו במכנה של השבר השני.",
        solution_steps: [
            { verbal_explanation: "שלב א': המכנה המשותף הוא \\( x + 1 \\). נרחיב את המספר השלם (2) במכנה זה.", math_expression: "\\frac{2(x + 1)}{x + 1} + \\frac{1}{x + 1}" },
            { verbal_explanation: "שלב ב': נחבר תחת קו שבר אחד ונפתח את הסוגריים.", math_expression: "\\frac{2x + 2 + 1}{x + 1}" },
            { verbal_explanation: "שלב ג': נכנס איברים (2 ועוד 1).", math_expression: "\\frac{2x + 3}{x + 1}" }
        ],
        final_answer: "\\frac{2x + 3}{x + 1}"
    },
    // שאלה 34
    {
        topic: "algebraic_fractions",
        subTopic: "חיבור וחיסור שברים אלגבריים",
        question_text: "שלושה שברים בבת אחת! מצאו מכנה משותף למספרים ופתרו:\n\\( \\frac{x}{2} + \\frac{x}{3} + \\frac{x}{6} = ? \\)",
        options: [
            "x", 
            "\\frac{3x}{11}", 
            "\\frac{x}{11}", 
            "2x"
        ],
        correctAnswer: 0,
        hint: "מהו המספר הקטן ביותר שמתחלק גם ב-2, גם ב-3 וגם ב-6? (רמז: זה 6).",
        solution_steps: [
            { verbal_explanation: "שלב א': המכנה המשותף הוא 6. נרחיב את השבר הראשון פי 3 ואת השני פי 2. השלישי נשאר כמו שהוא.", math_expression: "\\frac{3x}{6} + \\frac{2x}{6} + \\frac{x}{6}" },
            { verbal_explanation: "שלב ב': נחבר את המונים.", math_expression: "\\frac{3x + 2x + x}{6} = \\frac{6x}{6}" },
            { verbal_explanation: "שלב ג': נצמצם את ה-6 למעלה ולמטה.", math_expression: "x" }
        ],
        final_answer: "x"
    },
    // שאלה 35
    {
        topic: "algebraic_fractions",
        subTopic: "חיבור וחיסור שברים אלגבריים",
        question_text: "תרגיל מסכם: חיבור עם טרינום במכנה המשותף.\n\\( \\frac{2}{x - 4} + \\frac{3}{x^2 - 6x + 8} = ? \\)",
        options: [
            "\\frac{2x - 1}{(x - 4)(x - 2)}", 
            "\\frac{5}{x^2 - 6x + 8}", 
            "\\frac{2x + 1}{(x - 4)(x - 2)}", 
            "\\frac{2x - 5}{(x - 4)(x - 2)}"
        ],
        correctAnswer: 0,
        hint: "פרקו את הטרינום שבמכנה הימני. תגלו שה-\\( (x - 4) \\) כבר נמצא בתוכו, ולכן המכנה המשותף הוא פשוט הטרינום עצמו מפורק.",
        solution_steps: [
            { verbal_explanation: "שלב א': פירוק המכנה הימני (מספרים שכפלם 8 וסכומם -6).", math_expression: "x^2 - 6x + 8 = (x - 4)(x - 2)" },
            { verbal_explanation: "שלב ב': המכנה המשותף הוא המכפלה הזו. לשבר השמאלי חסר רק ה-\\( (x - 2) \\), נרחיב אותו בו.", math_expression: "\\frac{2(x - 2)}{(x - 4)(x - 2)} + \\frac{3}{(x - 4)(x - 2)}" },
            { verbal_explanation: "שלב ג': נרשום במונה אחד, נפתח סוגריים ונכנס איברים (מינוס 4 ועוד 3).", math_expression: "\\frac{2x - 4 + 3}{(x - 4)(x - 2)} = \\frac{2x - 1}{(x - 4)(x - 2)}" }
        ],
        final_answer: "\\frac{2x - 1}{(x - 4)(x - 2)}"
    },
    // שאלה 36
    {
        topic: "algebraic_fractions",
        subTopic: "חיבור וחיסור שברים אלגבריים",
        question_text: "אתגר החיסור הגדול! הקפידו על סוגריים:\n\\( \\frac{x + 5}{x - 1} - \\frac{x + 1}{x - 1} = ? \\)",
        options: [
            "\\frac{4}{x - 1}", 
            "\\frac{2x + 6}{x - 1}", 
            "\\frac{6}{x - 1}", 
            "\\frac{4x}{x - 1}"
        ],
        correctAnswer: 0,
        hint: "מכנה משותף כבר קיים. כשאתם מחסרים, הכניסו את כל המונה הימני לתוך סוגריים עם מינוס לפני.",
        solution_steps: [
            { verbal_explanation: "שלב א': נרשום מעל קו שבר יחיד עם סוגריים למונה המוחסר.", math_expression: "\\frac{x + 5 - (x + 1)}{x - 1}" },
            { verbal_explanation: "שלב ב': נפתח את הסוגריים - המינוס משנה סימן לכל מה שבפנים.", math_expression: "\\frac{x + 5 - x - 1}{x - 1}" },
            { verbal_explanation: "שלב ג': נכנס איברים. ה-\\( x \\) נופל, ו-5 פחות 1 שווה 4.", math_expression: "\\frac{4}{x - 1}" }
        ],
        final_answer: "\\frac{4}{x - 1}"
    },

    // ==========================================================
    // תת נושא 4: משוואות עם שברים אלגבריים (12 שאלות)
    // ==========================================================
    
    // שאלה 37
    {
        topic: "algebraic_fractions",
        subTopic: "משוואות עם שברים אלגבריים",
        question_text: "<div style='text-align:center; margin-bottom:10px;'><svg width='60' height='60' viewBox='0 0 24 24' fill='none' stroke='#8b5cf6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><line x1='12' y1='22' x2='12' y2='2'></line><path d='M20 22v-4h-4'></path><path d='M4 22v-4h4'></path><circle cx='12' cy='2' r='2'></circle><path d='M3 9h18'></path></svg></div>משוואה בסיסית עם נעלם במכנה. מהו הפתרון?\n\\( \\frac{10}{x} = 2 \\)",
        options: [
            "x = 5", 
            "x = 20", 
            "x = 2", 
            "x = 8"
        ],
        correctAnswer: 0,
        hint: "הכפילו את שני אגפי המשוואה במכנה המשותף (שהוא x) כדי להיפטר מהשבר.",
        solution_steps: [
            { verbal_explanation: "שלב א': תחום הצבה: אסור שהמכנה יתאפס, לכן \\( x \\neq 0 \\).", math_expression: "" },
            { verbal_explanation: "שלב ב': נכפיל את כל המשוואה במכנה המשותף \\( x \\).", math_expression: "10 = 2x" },
            { verbal_explanation: "שלב ג': נחלק את שני האגפים ב-2.", math_expression: "x = 5" },
            { verbal_explanation: "שלב ד': נבדוק את התשובה מול תחום ההצבה. 5 שונה מאפס, לכן הפתרון תקין.", math_expression: "" }
        ],
        final_answer: "x = 5"
    },
    // שאלה 38
    {
        topic: "algebraic_fractions",
        subTopic: "משוואות עם שברים אלגבריים",
        question_text: "משוואה עם שברים ומשתנה במכנים שונים. פתרו:\n\\( \\frac{12}{x} = \\frac{6}{x - 1} \\)",
        options: [
            "x = 2", 
            "x = -2", 
            "x = 1", 
            "x = 0"
        ],
        correctAnswer: 0,
        hint: "אפשר לפתור באמצעות 'כפל בהצלבה': המונה השמאלי כפול המכנה הימני שווה למונה הימני כפול המכנה השמאלי.",
        solution_steps: [
            { verbal_explanation: "שלב א': תחום הצבה: \\( x \\neq 0 \\) וגם \\( x \\neq 1 \\).", math_expression: "" },
            { verbal_explanation: "שלב ב': נבצע כפל בהצלבה.", math_expression: "12(x - 1) = 6x" },
            { verbal_explanation: "שלב ג': נפתח סוגריים.", math_expression: "12x - 12 = 6x" },
            { verbal_explanation: "שלב ד': נעביר אגפים: ה-\\( 6x \\) שמאלה (במינוס) וה-12 ימינה (בפלוס).", math_expression: "6x = 12" },
            { verbal_explanation: "שלב ה': נחלק ב-6 ונקבל את התוצאה התקינה לפי תחום ההצבה.", math_expression: "x = 2" }
        ],
        final_answer: "x = 2"
    },
    // שאלה 39
    {
        topic: "algebraic_fractions",
        subTopic: "משוואות עם שברים אלגבריים",
        question_text: "משוואה הדורשת מציאת מכנה משותף מלא:\n\\( \\frac{2}{x} + \\frac{1}{3} = 1 \\)",
        options: [
            "x = 3", 
            "x = 2", 
            "x = \\frac{2}{3}", 
            "x = -3"
        ],
        correctAnswer: 0,
        hint: "המכנה המשותף הוא \\( 3x \\). הכפילו כל איבר במשוואה במכנה המשותף כדי 'לנקות' את כל השברים.",
        solution_steps: [
            { verbal_explanation: "שלב א': תחום ההצבה הוא \\( x \\neq 0 \\). המכנה המשותף הוא \\( 3x \\).", math_expression: "" },
            { verbal_explanation: "שלב ב': נכפיל את המשוואה כולה ב-\\( 3x \\). השבר הראשון יוכפל ב-3, השני ב-\\( x \\), והמספר 1 יוכפל ב-\\( 3x \\).", math_expression: "2 \\times 3 + 1 \\times x = 1 \\times 3x" },
            { verbal_explanation: "שלב ג': נפשט את המשוואה החדשה נטולת השברים.", math_expression: "6 + x = 3x" },
            { verbal_explanation: "שלב ד': נעביר את ה-\\( x \\) אגף ונחסר מ-\\( 3x \\).", math_expression: "6 = 2x" },
            { verbal_explanation: "שלב ה': נחלק ב-2.", math_expression: "x = 3" }
        ],
        final_answer: "x = 3"
    },
    // שאלה 40
    {
        topic: "algebraic_fractions",
        subTopic: "משוואות עם שברים אלגבריים",
        question_text: "משוואה עם הוצאת גורם משותף במכנים. פתרו:\n\\( \\frac{4}{x - 2} + \\frac{1}{2x - 4} = 3 \\)",
        options: [
            "x = 3.5", 
            "x = 2", 
            "x = 3", 
            "x = 4"
        ],
        correctAnswer: 0,
        hint: "פרקו תחילה את המכנה הימני ל-\\( 2(x-2) \\) כדי למצוא את המכנה המשותף בקלות.",
        solution_steps: [
            { verbal_explanation: "שלב א': נפרק את המכנה ונגדיר תחום הצבה (\\( x \\neq 2 \\)).", math_expression: "\\frac{4}{x - 2} + \\frac{1}{2(x - 2)} = 3" },
            { verbal_explanation: "שלב ב': המכנה המשותף הוא \\( 2(x - 2) \\). נכפיל את כל המשוואה בו.", math_expression: "4 \\times 2 + 1 = 3 \\times 2(x - 2)" },
            { verbal_explanation: "שלב ג': נפתור את המשוואה הלינארית שנוצרה.", math_expression: "8 + 1 = 6(x - 2)" },
            { verbal_explanation: "שלב ד': נפתח סוגריים.", math_expression: "9 = 6x - 12" },
            { verbal_explanation: "שלב ה': נעביר אגפים ונחלץ.", math_expression: "21 = 6x \\quad \\Rightarrow \\quad x = 3.5" }
        ],
        final_answer: "x = 3.5"
    },
    // שאלה 41
    {
        topic: "algebraic_fractions",
        subTopic: "משוואות עם שברים אלגבריים",
        question_text: "המשוואה הופכת למשוואה ריבועית! פתרו:\n\\( x = \\frac{16}{x} \\)",
        options: [
            "x = 4 \\quad \\text{או} \\quad x = -4", 
            "x = 4", 
            "x = 8", 
            "אין פתרון"
        ],
        correctAnswer: 0,
        hint: "הכפילו את שני האגפים ב-x. זכרו שלמשוואה ריבועית יש (לרוב) שני פתרונות: חיובי ושלילי.",
        solution_steps: [
            { verbal_explanation: "שלב א': תחום הצבה: \\( x \\neq 0 \\). נכפיל את המשוואה ב-\\( x \\).", math_expression: "x^2 = 16" },
            { verbal_explanation: "שלב ב': נוציא שורש משני האגפים. השורש הריבועי של 16 הוא גם 4 וגם מינוס 4.", math_expression: "x = \\pm 4" },
            { verbal_explanation: "שני הפתרונות חוקיים כי אינם אפס.", math_expression: "" }
        ],
        final_answer: "x = 4 \\quad \\text{או} \\quad x = -4"
    },
    // שאלה 42
    {
        topic: "algebraic_fractions",
        subTopic: "משוואות עם שברים אלגבריים",
        question_text: "עוד משוואה שמובילה למשוואה ריבועית, הפעם עם טרינום לפתרון:\n\\( x + 2 = \\frac{15}{x} \\)",
        options: [
            "x = 3 \\quad , \\quad x = -5", 
            "x = -3 \\quad , \\quad x = 5", 
            "x = 15 \\quad , \\quad x = -1", 
            "x = 3"
        ],
        correctAnswer: 0,
        hint: "לאחר הכפלה במכנה, העבירו את כל האיברים לאותו אגף כדי להשוות את המשוואה הריבועית לאפס ולפתור בעזרת טרינום.",
        solution_steps: [
            { verbal_explanation: "שלב א': נכפיל ב-\\( x \\) (תחום הצבה \\( x \\neq 0 \\)).", math_expression: "x(x + 2) = 15" },
            { verbal_explanation: "שלב ב': נפתח סוגריים ונעביר את 15 אגף להשוואה לאפס.", math_expression: "x^2 + 2x - 15 = 0" },
            { verbal_explanation: "שלב ג': נפתור בעזרת טרינום (כפל למינוס 15, סכום ל-2). המספרים הם 5 ומינוס 3.", math_expression: "(x + 5)(x - 3) = 0" },
            { verbal_explanation: "שלב ד': הפתרונות הם המספרים המאפסים את הסוגריים.", math_expression: "x = -5 \\quad , \\quad x = 3" }
        ],
        final_answer: "x = 3 \\quad , \\quad x = -5"
    },
    // שאלה 43
    {
        topic: "algebraic_fractions",
        subTopic: "משוואות עם שברים אלגבריים",
        question_text: "מלכודת פסילת פתרון! פתרו את המשוואה ובדקו את הפתרונות מול תחום ההצבה:\n\\( \\frac{x^2}{x - 3} = \\frac{9}{x - 3} \\)",
        options: [
            "x = -3", 
            "x = 3 \\quad , \\quad x = -3", 
            "x = 3", 
            "אין פתרון"
        ],
        correctAnswer: 0,
        hint: "מכיוון שהמכנים שווים, אפשר פשוט להשוות מונים. אבל! בדקו אם אחד הפתרונות שקיבלתם מאפס את המכנה המקורי. אם כן, הוא 'פתרון שקר' ויש לפסול אותו.",
        solution_steps: [
            { verbal_explanation: "שלב א': נבדוק תחום הצבה תחילה. אסור שהמכנה יתאפס.", math_expression: "x - 3 \\neq 0 \\quad \\Rightarrow \\quad x \\neq 3" },
            { verbal_explanation: "שלב ב': המכנים שווים, אז אפשר פשוט להשוות מונים.", math_expression: "x^2 = 9" },
            { verbal_explanation: "שלב ג': נוציא שורש ונקבל שתי תשובות לכאורה: 3 ומינוס 3.", math_expression: "x = 3 \\quad , \\quad x = -3" },
            { verbal_explanation: "שלב ד': התשובה \\( x=3 \\) נפסלת כי היא מנוגדת לתחום ההצבה (היא גורמת לחלוקה באפס). לכן נשאר רק פתרון אחד.", math_expression: "x = -3" }
        ],
        final_answer: "x = -3"
    },
    // שאלה 44
    {
        topic: "algebraic_fractions",
        subTopic: "משוואות עם שברים אלגבריים",
        question_text: "משוואה עם הפרש ריבועים במכנה:\n\\( \\frac{x^2 + 5}{x^2 - 1} = 1 \\)",
        options: [
            "אין פתרון", 
            "x = 1", 
            "x = -1", 
            "x = 5"
        ],
        correctAnswer: 0,
        hint: "הכפילו את האגף הימני (1) במכנה כולו. שימו לב מה קורה לאיברי ה-\\( x^2 \\) משני הצדדים.",
        solution_steps: [
            { verbal_explanation: "שלב א': תחום הצבה: המכנה לא אפס. לכן \\( x \\neq 1 \\) ו-\\( x \\neq -1 \\).", math_expression: "" },
            { verbal_explanation: "שלב ב': נכפיל את שני האגפים במכנה.", math_expression: "x^2 + 5 = 1(x^2 - 1)" },
            { verbal_explanation: "שלב ג': נחסר \\( x^2 \\) משני האגפים. ה-\\( x^2 \\) מתבטל!", math_expression: "5 = -1" },
            { verbal_explanation: "שלב ד': קיבלנו פסוק שקר מובהק. זה אומר שלמשוואה הזו אין פתרון עבור שום ערך של \\( x \\).", math_expression: "\\text{אין פתרון}" }
        ],
        final_answer: "אין פתרון"
    },
    // שאלה 45
    {
        topic: "algebraic_fractions",
        subTopic: "משוואות עם שברים אלגבריים",
        question_text: "משוואה מורכבת הדורשת כפל בהצלבה:\n\\( \\frac{x - 1}{2} = \\frac{4}{x + 1} \\)",
        options: [
            "x = 3 \\quad , \\quad x = -3", 
            "x = 3", 
            "x = -3", 
            "x = 9 \\quad , \\quad x = -9"
        ],
        correctAnswer: 0,
        hint: "כפלו בהצלבה. שימו לב שהמכפלה של שני המונים/מכנים הנגדיים יוצרת נוסחת הפרש ריבועים!",
        solution_steps: [
            { verbal_explanation: "שלב א': תחום הצבה הוא \\( x \\neq -1 \\).", math_expression: "" },
            { verbal_explanation: "שלב ב': נבצע כפל בהצלבה.", math_expression: "(x - 1)(x + 1) = 2 \\times 4" },
            { verbal_explanation: "שלב ג': נזהה את נוסחת הפרש הריבועים באגף שמאל, ונחשב את ימין.", math_expression: "x^2 - 1 = 8" },
            { verbal_explanation: "שלב ד': נעביר אגף.", math_expression: "x^2 = 9" },
            { verbal_explanation: "שלב ה': נוציא שורש משני האגפים.", math_expression: "x = 3 \\quad , \\quad x = -3" }
        ],
        final_answer: "x = 3 \\quad , \\quad x = -3"
    },
    // שאלה 46
    {
        topic: "algebraic_fractions",
        subTopic: "משוואות עם שברים אלגבריים",
        question_text: "עוד פסילת פתרון. פתרו:\n\\( \\frac{x^2 - x}{x} = 2 \\)",
        options: [
            "x = 3", 
            "x = 0", 
            "x = 2", 
            "x = 0 \\quad , \\quad x = 3"
        ],
        correctAnswer: 0,
        hint: "אפשר לפתור בשתי דרכים: להכפיל במכנה, או לצמצם קודם את השבר על ידי הוצאת גורם משותף. אל תשכחו את תחום ההצבה!",
        solution_steps: [
            { verbal_explanation: "שלב א': תחום הצבה: אסור לחלק באפס.", math_expression: "x \\neq 0" },
            { verbal_explanation: "שלב ב': נפתור על ידי הוצאת גורם משותף במונה וצמצום השבר.", math_expression: "\\frac{x(x - 1)}{x} = 2" },
            { verbal_explanation: "שלב ג': נצמצם את ה-\\( x \\).", math_expression: "x - 1 = 2" },
            { verbal_explanation: "שלב ד': נעביר את 1 אגף ונקבל תשובה תקנית.", math_expression: "x = 3" }
        ],
        final_answer: "x = 3"
    },
    // שאלה 47
    {
        topic: "algebraic_fractions",
        subTopic: "משוואות עם שברים אלגבריים",
        question_text: "משוואה עם חיבור שברים ופירוק מכנה. מצאו את הפתרון:\n\\( \\frac{5}{x - 3} + \\frac{1}{2x - 6} = 11 \\)",
        options: [
            "x = 3.5", 
            "x = 3", 
            "x = 4.5", 
            "x = 2"
        ],
        correctAnswer: 0,
        hint: "פרקו את המכנה הימני כדי לראות מהו המכנה המשותף.",
        solution_steps: [
            { verbal_explanation: "שלב א': תחום הצבה הוא \\( x \\neq 3 \\). נפרק את המכנה הימני.", math_expression: "\\frac{5}{x - 3} + \\frac{1}{2(x - 3)} = 11" },
            { verbal_explanation: "שלב ב': המכנה המשותף הוא \\( 2(x - 3) \\). נכפיל את כל המשוואה בו.", math_expression: "5 \\times 2 + 1 = 11 \\times 2(x - 3)" },
            { verbal_explanation: "שלב ג': נפשט.", math_expression: "10 + 1 = 22(x - 3)" },
            { verbal_explanation: "שלב ד': נמשיך לפשט (אפשר לחלק את שני האגפים ב-11).", math_expression: "11 = 22(x - 3) \\quad \\Rightarrow \\quad 1 = 2(x - 3)" },
            { verbal_explanation: "שלב ה': נפתח סוגריים ונעביר אגף.", math_expression: "1 = 2x - 6 \\quad \\Rightarrow \\quad 7 = 2x \\quad \\Rightarrow \\quad x = 3.5" }
        ],
        final_answer: "x = 3.5"
    },
    // שאלה 48
    {
        topic: "algebraic_fractions",
        subTopic: "משוואות עם שברים אלגבריים",
        question_text: "שאלת סיום וסיכום - פתרו את המשוואה הבאה:\n\\( \\frac{x^2 + 7x}{x + 7} = x^2 - 12 \\)",
        options: [
            "x = 4 \\quad , \\quad x = -3", 
            "x = -4 \\quad , \\quad x = 3", 
            "x = 4 \\quad , \\quad x = -4", 
            "x = -7"
        ],
        correctAnswer: 0,
        hint: "צמצמו את השבר באגף שמאל על ידי הוצאת גורם משותף. לאחר מכן, פתרו את המשוואה הריבועית שמתקבלת.",
        solution_steps: [
            { verbal_explanation: "שלב א': תחום ההצבה הוא \\( x \\neq -7 \\). נוציא גורם משותף במונה שמאלי.", math_expression: "\\frac{x(x + 7)}{x + 7} = x^2 - 12" },
            { verbal_explanation: "שלב ב': הבלוק \\( (x+7) \\) מצטמצם ונשאר לנו משוואה פשוטה.", math_expression: "x = x^2 - 12" },
            { verbal_explanation: "שלב ג': נסדר הכל באגף אחד כמשוואה ריבועית סטנדרטית שווה לאפס.", math_expression: "x^2 - x - 12 = 0" },
            { verbal_explanation: "שלב ד': נפתור בעזרת טרינום (כפל למינוס 12, סכום למינוס 1). המספרים הם -4 ו-3.", math_expression: "(x - 4)(x + 3) = 0" },
            { verbal_explanation: "הפתרונות מתקבלים והם חוקיים לפי תחום ההצבה.", math_expression: "x = 4 \\quad , \\quad x = -3" }
        ],
        final_answer: "x = 4 \\quad , \\quad x = -3"
    }

];