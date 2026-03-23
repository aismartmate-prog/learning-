const questionsDB = [
    // ==========================================
    // תת נושא 1: חוקי לוגריתמים ופתרון משוואות מעריכיות ולוגריתמיות (10 שאלות)
    // ==========================================

    {
        topic: "exp_log_472",
        subTopic: "חוקי לוגריתמים ופתרון משוואות מעריכיות ולוגריתמיות",
        question_text: "פתרו את המשוואה המעריכית הבאה: \\( 2^{3x - 1} = 16 \\).&rlm;",
        options: ["x = 5 : 3", "x = 2", "x = 1", "x = 4 : 3"],
        correctAnswer: 0,
        hint: "הביאו את שני אגפי המשוואה לאותו בסיס. המספר 16 הוא חזקה של 2 (2 בחזקת 4). לאחר מכן, השוו את המעריכים.",
        solution_steps: [
            { verbal_explanation: "כתיבת המשוואה המקורית כפי שנתונה.", math_expression: "2^{3x - 1} = 16" },
            { verbal_explanation: "המרת המספר באגף ימין לבסיס שתיים להשגת בסיסים זהים.", math_expression: "2^{3x - 1} = 2^{4}" },
            { verbal_explanation: "השוואת המעריכים משום שהבסיסים זהים ושונים מאחת.", math_expression: "3x - 1 = 4" },
            { verbal_explanation: "העברת איברים לבידוד המשתנה באגף שמאל.", math_expression: "3x = 4 + 1" },
            { verbal_explanation: "סכימה של אגף ימין.", math_expression: "3x = 5" },
            { verbal_explanation: "חלוקת המשוואה בשלוש לקבלת הערך הסופי של המשתנה.", math_expression: "x = \\dfrac{5}{3}" }
        ],
        final_answer: "x = 5 : 3"
    },
    {
        topic: "exp_log_472",
        subTopic: "חוקי לוגריתמים ופתרון משוואות מעריכיות ולוגריתמיות",
        question_text: "פתרו את המשוואה המעריכית באמצעות חוקי חזקות: \\( 3^{x + 1} = 9 \\times 27^{x - 1} \\).&rlm;",
        options: ["x = 1", "x = 2", "x = 0.5", "x = 3"],
        correctAnswer: 0,
        hint: "המירו את כל הבסיסים (9 ו-27) לבסיס משותף של 3. השתמשו בחוקי חזקות לכפל והעלאת חזקה בחזקה, ואז השוו מעריכים.",
        solution_steps: [
            { verbal_explanation: "המרת כל הבסיסים במשוואה לבסיס המשותף הקטן ביותר (שלוש).", math_expression: "3^{x + 1} = 3^{2} \\times (3^{3})^{x - 1}" },
            { verbal_explanation: "שימוש בחוק העלאת חזקה בחזקה באגף ימין (הכפלת המעריכים).", math_expression: "3^{x + 1} = 3^{2} \\times 3^{3x - 3}" },
            { verbal_explanation: "שימוש בחוק כפל חזקות בעלות בסיס זהה לחשבון המעריכים באגף ימין (חיבור מעריכים).", math_expression: "3^{x + 1} = 3^{2 + 3x - 3}" },
            { verbal_explanation: "כינוס המעריך באגף ימין.", math_expression: "3^{x + 1} = 3^{3x - 1}" },
            { verbal_explanation: "השוואת המעריכים עקב זהות הבסיסים.", math_expression: "x + 1 = 3x - 1" },
            { verbal_explanation: "העברת איברים לריכוז המשתנה באגף אחד והמספרים באגף השני.", math_expression: "2 = 2x" },
            { verbal_explanation: "חלוקה בשתיים לפתרון המשוואה הליניארית.", math_expression: "x = 1" }
        ],
        final_answer: "x = 1"
    },
    {
        topic: "exp_log_472",
        subTopic: "חוקי לוגריתמים ופתרון משוואות מעריכיות ולוגריתמיות",
        question_text: "פתרו את המשוואה המעריכית בעזרת הצבת משתנה עזר: \\( e^{2x} - 5e^{x} + 6 = 0 \\).&rlm;",
        options: ["x = ln(2) , x = ln(3)", "x = 2 , x = 3", "x = ln(6) , x = ln(1)", "x = e² , x = e³"],
        correctAnswer: 0,
        hint: "הגדירו משתנה עזר, למשל t = e^x. המשוואה תהפוך למשוואה ריבועית ב-t. פתרו אותה, ואז חזרו ל-x בעזרת פעולת ln.",
        solution_steps: [
            { verbal_explanation: "הצגת האיבר הראשון כריבוע של בסיס האקספוננט, כהכנה להצבה.", math_expression: "(e^{x})^{2} - 5e^{x} + 6 = 0" },
            { verbal_explanation: "הגדרת משתנה עזר אלגברי להחלפת הביטוי המעריכי.", math_expression: "t = e^{x}" },
            { verbal_explanation: "הצבת משתנה העזר לקבלת משוואה ריבועית פשוטה.", math_expression: "t^{2} - 5t + 6 = 0" },
            { verbal_explanation: "פירוק הטרינום לגורמים למציאת הפתרונות של משתנה העזר.", math_expression: "(t - 2)(t - 3) = 0" },
            { verbal_explanation: "חילוץ פתרונות משתנה העזר.", math_expression: "t_{1} = 2 \\quad , \\quad t_{2} = 3" },
            { verbal_explanation: "החזרת ההצבה המקורית לפתרון הראשון וביצוע פעולת הלוגריתם הטבעי.", math_expression: "e^{x} = 2 \\Rightarrow x = \\ln(2)" },
            { verbal_explanation: "החזרת ההצבה לפתרון השני וביצוע פעולה זהה.", math_expression: "e^{x} = 3 \\Rightarrow x = \\ln(3)" }
        ],
        final_answer: "x = ln(2) , x = ln(3)"
    },
    {
        topic: "exp_log_472",
        subTopic: "חוקי לוגריתמים ופתרון משוואות מעריכיות ולוגריתמיות",
        question_text: "פתרו את המשוואה اللוגריתמית הבאה: \\( \\log_{2}(x) + \\log_{2}(x - 3) = 2 \\). (זכרו לבדוק את תחום ההגדרה של הפתרונות!)&rlm;",
        options: ["x = 4", "x = 4 , x = -1", "x = 1", "אין פתרון"],
        correctAnswer: 0,
        hint: "השתמשו בחוק חיבור לוגריתמים (לוג של מכפלה) באגף שמאל. לאחר מכן, המירו את המשוואה اللוגריתמית למעריכית (2 בחזקת 2). לבסוף, ודאו שהפתרונות בתחום.",
        solution_steps: [
            { verbal_explanation: "קביעת תחום ההגדרה: תוכן הלוגריתמים חייב להיות חיובי ממש.", math_expression: "x > 0 \\quad , \\quad x - 3 > 0 \\Rightarrow x > 3" },
            { verbal_explanation: "הפעלת חוק חיבור הלוגריתמים לאיחוד שני האיברים באגף שמאל.", math_expression: "\\log_{2}(x(x - 3)) = 2" },
            { verbal_explanation: "המרת המשוואה הלוגריתמית למשוואה אלגברית על פי הגדרת הלוגריתם.", math_expression: "x(x - 3) = 2^{2}" },
            { verbal_explanation: "פתיחת סוגריים וחישוב החזקה באגף ימין.", math_expression: "x^{2} - 3x = 4" },
            { verbal_explanation: "סידור למשוואה ריבועית מאופסת ופירוקה לגורמים.", math_expression: "x^{2} - 3x - 4 = 0 \\Rightarrow (x - 4)(x + 1) = 0" },
            { verbal_explanation: "קבלת הפתרונות האלגבריים האפשריים.", math_expression: "x_{1} = 4 \\quad , \\quad x_{2} = -1" },
            { verbal_explanation: "פסילת הפתרון השלילי כיוון שאינו עומד בתנאי תחום ההגדרה (חייב להיות גדול משלוש).", math_expression: "x = 4" }
        ],
        final_answer: "x = 4"
    },
    {
        topic: "exp_log_472",
        subTopic: "חוקי לוגריתמים ופתרון משוואות מעריכיות ולוגריתמיות",
        question_text: "פתרו את המשוואה הבאה המשלבת לוגריתם טבעי: \\( \\ln(x) + \\ln(x^{2}) = 6 \\).&rlm;",
        options: ["x = e²", "x = e³", "x = 2e", "x = e"],
        correctAnswer: 0,
        hint: "השתמשו בחוקי לוגריתמים: הוציאו את החזקה מתוך הלוגריתם השני (כמקדם), או השתמשו בחוק המכפלה לחבר את שני הלוגריתמים לאיבר אחד.",
        solution_steps: [
            { verbal_explanation: "הוצאת החזקה מהלוגריתם השני כקבוע מכפיל לפניו, על פי חוקי הלוגריתמים.", math_expression: "\\ln(x) + 2\\ln(x) = 6" },
            { verbal_explanation: "כינוס איברים בעלי בסיס לוגריתמי זהה באגף השמאלי.", math_expression: "3\\ln(x) = 6" },
            { verbal_explanation: "חלוקת המשוואה בשלוש לבידוד הלוגריתם המכיל את המשתנה.", math_expression: "\\ln(x) = 2" },
            { verbal_explanation: "שימוש בהגדרת הלוגריתם הטבעי (בסיס אקספוננט) לחילוץ המשתנה מתוכו.", math_expression: "x = e^{2}" }
        ],
        final_answer: "x = e²"
    },
    {
        topic: "exp_log_472",
        subTopic: "חוקי לוגריתמים ופתרון משוואות מעריכיות ולוגריתמיות",
        question_text: "פתרו את המשוואה הלוגריתמית עם חיסור: \\( \\log_{3}(x + 5) - \\log_{3}(x - 3) = 2 \\).&rlm;",
        options: ["x = 4", "x = 5", "x = 6", "x = 3.5"],
        correctAnswer: 0,
        hint: "חיסור לוגריתמים עם בסיס זהה שווה ללוגריתם של מנת התכנים. לאחר מכן עברו למשוואה מעריכית.",
        solution_steps: [
            { verbal_explanation: "מציאת תחום ההגדרה המשותף המחייב ששני התכנים יהיו חיוביים.", math_expression: "x + 5 > 0 \\quad , \\quad x - 3 > 0 \\Rightarrow x > 3" },
            { verbal_explanation: "שימוש בחוק חיסור לוגריתמים ליצירת מנה פנימית.", math_expression: "\\log_{3}(\\dfrac{x + 5}{x - 3}) = 2" },
            { verbal_explanation: "המרת המשוואה למבנה מעריכי לפי הגדרת הלוגריתם.", math_expression: "\\dfrac{x + 5}{x - 3} = 3^{2}" },
            { verbal_explanation: "ביצוע העלאה בריבוע באגף ימין.", math_expression: "\\dfrac{x + 5}{x - 3} = 9" },
            { verbal_explanation: "הכפלה באלכסון להיפטר מהמכנה.", math_expression: "x + 5 = 9(x - 3)" },
            { verbal_explanation: "פתיחת סוגריים וכינוס איברים.", math_expression: "x + 5 = 9x - 27 \\Rightarrow 32 = 8x" },
            { verbal_explanation: "חלוקה בשמונה למציאת הפתרון, שמאושר על ידי תחום ההגדרה.", math_expression: "x = 4" }
        ],
        final_answer: "x = 4"
    },
    {
        topic: "exp_log_472",
        subTopic: "חוקי לוגריתמים ופתרון משוואות מעריכיות ולוגריתמיות",
        question_text: "פתרו את המשוואה המעריכית הדורשת שימוש בלוגריתם: \\( e^{2x - 1} = 5 \\).&rlm;",
        options: ["x = (ln(5) + 1) : 2", "x = ln(5) + 0.5", "x = ln(2.5)", "x = ln(6) : 2"],
        correctAnswer: 0,
        hint: "הפעילו ln על שני אגפי המשוואה כדי \"להוריד\" את המעריך. ה-ln וה-e יבטלו זה את זה באגף שמאל.",
        solution_steps: [
            { verbal_explanation: "הפעלת פונקציית הלוגריתם הטבעי על שני אגפי המשוואה.", math_expression: "\\ln(e^{2x - 1}) = \\ln(5)" },
            { verbal_explanation: "ביטול הדדי של הפונקציות ההופכיות באגף שמאל.", math_expression: "2x - 1 = \\ln(5)" },
            { verbal_explanation: "העברת המספר לאגף ימין לבידוד איבר האיקס.", math_expression: "2x = \\ln(5) + 1" },
            { verbal_explanation: "חלוקה בשתיים לבידוד המשתנה במלואו.", math_expression: "x = \\dfrac{\\ln(5) + 1}{2}" }
        ],
        final_answer: "x = (ln(5) + 1) : 2"
    },
    {
        topic: "exp_log_472",
        subTopic: "חוקי לוגריתמים ופתרון משוואות מעריכיות ולוגריתמיות",
        question_text: "פתרו את המשוואה המשלבת בסיסים שונים על ידי משתנה עזר: \\( 4^{x} - 3 \\times 2^{x} - 4 = 0 \\).&rlm;",
        options: ["x = 2", "x = 2 , x = -1", "x = 4", "x = 1"],
        correctAnswer: 0,
        hint: "המירו את 4 בחזקת x ל-(2 בחזקת x) בריבוע. הציבו t = 2^x, פתרו משוואה ריבועית ופסלו את התשובה השלילית של t.",
        solution_steps: [
            { verbal_explanation: "פירוק הבסיס הגדול לבסיס הקטן בריבוע.", math_expression: "(2^{2})^{x} - 3 \\times 2^{x} - 4 = 0" },
            { verbal_explanation: "החלפת סדר המעריכים על פי חוקי חזקות להכנת ההצבה.", math_expression: "(2^{x})^{2} - 3 \\times 2^{x} - 4 = 0" },
            { verbal_explanation: "הגדרת משתנה עזר מתאים.", math_expression: "t = 2^{x}" },
            { verbal_explanation: "הצבה במשוואה ויצירת משוואה ריבועית.", math_expression: "t^{2} - 3t - 4 = 0" },
            { verbal_explanation: "פירוק לגורמים למציאת פתרונות זמניים.", math_expression: "(t - 4)(t + 1) = 0" },
            { verbal_explanation: "פסילת הפתרון השלילי, שכן פונקציה מעריכית חיובית תמיד.", math_expression: "t = 4 \\quad , \\quad t = -1 \\Rightarrow \\emptyset" },
            { verbal_explanation: "החזרת ההצבה בפתרון החיובי.", math_expression: "2^{x} = 4 \\Rightarrow x = 2" }
        ],
        final_answer: "x = 2"
    },
    {
        topic: "exp_log_472",
        subTopic: "חוקי לוגריתמים ופתרון משוואות מעריכיות ולוגריתמיות",
        question_text: "מצאו את x על סמך הגדרת הלוגריתם (בסיס משתנה): \\( \\log_{x}(16) = 2 \\).&rlm;",
        options: ["x = 4", "x = 4 , x = -4", "x = 8", "x = 2"],
        correctAnswer: 0,
        hint: "לפי הגדרת הלוגריתם, הבסיס בחזקת התוצאה שווה לתוכן. כלומר x בריבוע שווה 16. זכרו שבסיס לוגריתם חייב להיות חיובי.",
        solution_steps: [
            { verbal_explanation: "הגדרת תחום ההגדרה עבור בסיס של לוגריתם במתמטיקה.", math_expression: "x > 0 \\quad , \\quad x \\neq 1" },
            { verbal_explanation: "המרת הלוגריתם למשוואה מעריכית על פי ההגדרה.", math_expression: "x^{2} = 16" },
            { verbal_explanation: "הוצאת שורש ריבועי לקבלת שתי אפשרויות אלגבריות.", math_expression: "x = \\pm 4" },
            { verbal_explanation: "התאמת הפתרון לתנאי תחום ההגדרה (פסילת השלילי).", math_expression: "x = 4" }
        ],
        final_answer: "x = 4"
    },
    {
        topic: "exp_log_472",
        subTopic: "חוקי לוגריתמים ופתרון משוואות מעריכיות ולוגריתמיות",
        question_text: "פתרו את המשוואה המערבת שורש ולוגריתם טבעי: \\( \\ln(\\sqrt{x}) = 2 \\).&rlm;",
        options: ["x = e⁴", "x = e²", "x = e", "x = 4"],
        correctAnswer: 0,
        hint: "המירו את המשוואה למעריכית (e בריבוע שווה לשורש x), או השתמשו בחוקי חזקות להוצאת חצי מחוץ ללוגריתם.",
        solution_steps: [
            { verbal_explanation: "המרת השורש הריבועי לכתיב חזקה שברית להקלת העבודה עם חוקי הלוגריתמים.", math_expression: "\\ln(x^{0.5}) = 2" },
            { verbal_explanation: "הוצאת המעריך כמקדם לפני הלוגריתם.", math_expression: "0.5\\ln(x) = 2" },
            { verbal_explanation: "הכפלת המשוואה בשתיים כדי לבודד את הלוגריתם הטהור.", math_expression: "\\ln(x) = 4" },
            { verbal_explanation: "שימוש בהגדרת הלוגריתם הטבעי לחילוץ המשתנה מתוכו.", math_expression: "x = e^{4}" }
        ],
        final_answer: "x = e⁴"
    },

    // ==========================================
    // תת נושא 2: תחום הגדרה של פונקציות ln ו-log (10 שאלות)
    // ==========================================

    {
        topic: "exp_log_472",
        subTopic: "תחום הגדרה של פונקציות ln ו-log",
        question_text: "מצאו את תחום ההגדרה של הפונקציה הלוגריתמית \\( f(x) = \\ln(2x - 8) \\).&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 60' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='30' x2='180' y2='30' stroke='#94a3b8' stroke-width='2'/><circle cx='100' cy='30' r='5' fill='#f8fafc' stroke='#ef4444' stroke-width='2'/><line x1='105' y1='30' x2='180' y2='30' stroke='#3b82f6' stroke-width='4'/><text x='96' y='50' font-size='12' font-family='Arial'>4</text></svg></div>",
        options: ["x > 4", "x ≥ 4", "x < 4", "כל x ממשי"],
        correctAnswer: 0,
        hint: "הביטוי שבתוך הלוגריתם (הארגומנט) חייב להיות גדול ממש מאפס. אין שוויון לאפס.",
        solution_steps: [
            { verbal_explanation: "הצבת הדרישה המתמטית: תוכן פונקציית הלוגריתם חייב להיות חיובי ממש.", math_expression: "2x - 8 > 0" },
            { verbal_explanation: "העברת האיבר המספרי לאגף הימני של אי השוויון.", math_expression: "2x > 8" },
            { verbal_explanation: "חלוקת שני אגפי אי השוויון בשתיים לבידוד המשתנה הבלתי תלוי.", math_expression: "x > \\dfrac{8}{2}" },
            { verbal_explanation: "קבלת תחום ההגדרה הסופי בו הפונקציה מתקיימת.", math_expression: "x > 4" }
        ],
        final_answer: "x > 4"
    },
    {
        topic: "exp_log_472",
        subTopic: "תחום הגדרה של פונקציות ln ו-log",
        question_text: "מהו תחום ההגדרה של הפונקציה הכוללת פולינום ריבועי: \\( f(x) = \\log_{3}(x^{2} - 7x + 10) \\)?&rlm;",
        options: ["x < 2 או x > 5", "2 < x < 5", "x ≤ 2 או x ≥ 5", "2 ≤ x ≤ 5"],
        correctAnswer: 0,
        hint: "דרשו שהפולינום הריבועי יהיה חיובי (גדול ממש מאפס). פתרו את המשוואה למציאת שורשים וחקרו את תחומי החיוביות של הפרבולה.",
        solution_steps: [
            { verbal_explanation: "הצבת דרישת הקיום הבלתי מתפשרת לפונקציה הלוגריתמית.", math_expression: "x^{2} - 7x + 10 > 0" },
            { verbal_explanation: "השוואת הפולינום לאפס למציאת נקודות החיתוך העתידיות עם הציר האופקי.", math_expression: "x^{2} - 7x + 10 = 0" },
            { verbal_explanation: "פירוק הטרינום לגורמים בסיסיים לשם חילוץ מהיר.", math_expression: "(x - 2)(x - 5) = 0" },
            { verbal_explanation: "מציאת שורשי המשוואה המגדירים את גבולות התחום האסור והמותר.", math_expression: "x_{1} = 2 \\quad , \\quad x_{2} = 5" },
            { verbal_explanation: "הסקת תחומי החיוביות מתוך פרבולה 'מחייכת' המצויה מעל הציר מחוץ לשורשיה.", math_expression: "x < 2 \\quad \\cup \\quad x > 5" }
        ],
        final_answer: "x < 2 או x > 5"
    },
    {
        topic: "exp_log_472",
        subTopic: "תחום הגדרה של פונקציות ln ו-log",
        question_text: "מצאו את תחום ההגדרה של הפונקציה המורכבת ממנה בתוך הלוגריתם: \\( f(x) = \\ln(\\dfrac{x + 2}{x - 4}) \\).&rlm;",
        options: ["x < -2 או x > 4", "-2 < x < 4", "x > 4", "x ≠ 4"],
        correctAnswer: 0,
        hint: "השבר כולו חייב להיות גדול מאפס. השתמשו בשיטת הנחש למציאת תחומי החיוביות של המנה.",
        solution_steps: [
            { verbal_explanation: "דרישת החיוביות המלאה עבור תוכן הפונקציה הטבעית (מנה שלמה).", math_expression: "\\dfrac{x + 2}{x - 4} > 0" },
            { verbal_explanation: "איתור המאפס של המונה (נקודת שינוי סימן ראשונה על הציר).", math_expression: "x + 2 = 0 \\Rightarrow x_{1} = -2" },
            { verbal_explanation: "איתור המאפס של המכנה (נקודת אי הגדרה ושינוי סימן שנייה על הציר).", math_expression: "x - 4 = 0 \\Rightarrow x_{2} = 4" },
            { verbal_explanation: "תרגום שבר הפונקציה לפונקציה ריבועית שקולת סימן לצורך חקירת חיוביות נוחה (שיטת הנחש).", math_expression: "(x + 2)(x - 4) > 0" },
            { verbal_explanation: "מציאת התחומים בהם הפונקציה הרציפה גדולה ממש מאפס.", math_expression: "x < -2 \\quad \\cup \\quad x > 4" }
        ],
        final_answer: "x < -2 או x > 4"
    },
    {
        topic: "exp_log_472",
        subTopic: "תחום הגדרה של פונקציות ln ו-log",
        question_text: "מהו תחום ההגדרה של הפונקציה הרציונלית הבאה המכילה לוגריתם במכנה: \\( f(x) = \\dfrac{5}{\\ln(x) - 1} \\)?&rlm;",
        options: ["x > 0 וגם x ≠ e", "x > 0 וגם x ≠ 1", "x > e", "כל x ממשי חוץ מ-e"],
        correctAnswer: 0,
        hint: "ישנם שני תנאים כאן: הלוגריתם דורש ש-x יהיה חיובי, והמכנה דורש שיהיה שונה מאפס. ודאו שאינכם מפספסים תנאי.",
        solution_steps: [
            { verbal_explanation: "תנאי קיום ראשון נובע מהמצאות המשתנה בתוך פונקציית הלוגריתם.", math_expression: "x > 0" },
            { verbal_explanation: "תנאי קיום שני מחייב שהמכנה של השבר לא יתאפס בשום מצב.", math_expression: "\\ln(x) - 1 \\neq 0" },
            { verbal_explanation: "העברת איבר לבידוד הלוגריתם בתנאי המכנה.", math_expression: "\\ln(x) \\neq 1" },
            { verbal_explanation: "חילוץ המשתנה מתוך הלוגריתם על פי הגדרתו.", math_expression: "x \\neq e^{1} \\Rightarrow x \\neq e" },
            { verbal_explanation: "איחוד שני התנאים המכרחיים לתחום הגדרה מלא באמצעות חיתוך.", math_expression: "x > 0 \\quad \\cap \\quad x \\neq e" }
        ],
        final_answer: "x > 0 וגם x ≠ e"
    },
    {
        topic: "exp_log_472",
        subTopic: "תחום הגדרה של פונקציות ln ו-log",
        question_text: "מצאו את תחום ההגדרה של הפונקציה המשלבת ביטוי מעריכי בתוך לוגריתם: \\( f(x) = \\ln(e^{x} - 5) \\).&rlm;",
        options: ["x > ln(5)", "x > 5", "x > 0", "כל x ממשי"],
        correctAnswer: 0,
        hint: "הביטוי בתוך הלוגריתם חייב להיות גדול מאפס. העבירו אגפים והפעילו ln על שני הצדדים.",
        solution_steps: [
            { verbal_explanation: "הצבת הדרישה הרגילה לחיוביות התוכן בלוגריתם.", math_expression: "e^{x} - 5 > 0" },
            { verbal_explanation: "בידוד הביטוי המעריכי באגף השמאלי של אי השוויון.", math_expression: "e^{x} > 5" },
            { verbal_explanation: "הפעלת פונקציית הלוגריתם הטבעי על שני האגפים כדי לחלץ את מעריך החזקה.", math_expression: "\\ln(e^{x}) > \\ln(5)" },
            { verbal_explanation: "הפונקציות ההופכיות מבטלות זו את זו ומותירות את המשתנה חופשי.", math_expression: "x > \\ln(5)" }
        ],
        final_answer: "x > ln(5)"
    },
    {
        topic: "exp_log_472",
        subTopic: "תחום הגדרה של פונקציות ln ו-log",
        question_text: "מהו תחום ההגדרה של פונקציית הלוגריתם המכילה שורש בתוכה: \\( f(x) = \\log_{2}(\\sqrt{x - 3}) \\)?&rlm;",
        options: ["x > 3", "x ≥ 3", "x > 0", "x ≥ 0"],
        correctAnswer: 0,
        hint: "ישנם שני תנאים: התוכן של השורש חייב להיות גדול או שווה לאפס, והתוכן של הלוגריתם (השורש כולו) חייב להיות גדול ממש מאפס.",
        solution_steps: [
            { verbal_explanation: "דרישה ראשונה לקיום השורש הריבועי.", math_expression: "x - 3 \\geq 0 \\Rightarrow x \\geq 3" },
            { verbal_explanation: "דרישה שנייה לקיום הלוגריתם העוטף את השורש.", math_expression: "\\sqrt{x - 3} > 0" },
            { verbal_explanation: "שורש ריבועי יכול להיות רק חיובי או אפס. כדי שיהיה גדול ממש מאפס, תוכנו חייב להיות חיובי ממש.", math_expression: "x - 3 > 0 \\Rightarrow x > 3" },
            { verbal_explanation: "חיתוך שני התנאים (הגדול ממש בולע את הגדול-שווה).", math_expression: "x > 3" }
        ],
        final_answer: "x > 3"
    },
    {
        topic: "exp_log_472",
        subTopic: "תחום הגדרה של פונקציות ln ו-log",
        question_text: "מצאו את תחום ההגדרה של הפונקציה הלוגריתמית עם בסיס משתנה: \\( f(x) = \\log_{x-2}(10) \\).&rlm;",
        options: ["x > 2 וגם x ≠ 3", "x > 2", "x > 3", "x ≠ 2"],
        correctAnswer: 0,
        hint: "בסיס של לוגריתם חייב לקיים שני תנאים מחמירים: עליו להיות גדול ממש מאפס, ושונה מאחת.",
        solution_steps: [
            { verbal_explanation: "הצבת התנאי הראשון לבסיס לוגריתמי (חיוביות).", math_expression: "x - 2 > 0 \\Rightarrow x > 2" },
            { verbal_explanation: "הצבת התנאי השני המונע מהבסיס להיות אחת (כיוון שאחת בחזקת כל מספר הוא אחת).", math_expression: "x - 2 \\neq 1 \\Rightarrow x \\neq 3" },
            { verbal_explanation: "איחוד שני התנאים למערכת 'וגם' היוצרת את תחום ההגדרה המלא.", math_expression: "x > 2 \\quad \\cap \\quad x \\neq 3" }
        ],
        final_answer: "x > 2 וגם x ≠ 3"
    },
    {
        topic: "exp_log_472",
        subTopic: "תחום הגדרה של פונקציות ln ו-log",
        question_text: "מהו תחום ההגדרה של הפונקציה הכוללת מכפלה בתוך הלוגריתם: \\( f(x) = \\ln(-x(x - 4)) \\)?&rlm;",
        options: ["0 < x < 4", "x < 0 או x > 4", "0 ≤ x ≤ 4", "כל x ממשי"],
        correctAnswer: 0,
        hint: "הביטוי הפנימי צריך להיות חיובי. פתחו סוגריים וחקרו את הפרבולה. זוהי פרבולה הפוכה ('בוכה') שחותכת ב-0 וב-4.",
        solution_steps: [
            { verbal_explanation: "דרישת החיוביות על התוכן השלם של הלוגריתם.", math_expression: "-x(x - 4) > 0" },
            { verbal_explanation: "פתיחת סוגריים לזיהוי ברור של סוג הפולינום.", math_expression: "-x^{2} + 4x > 0" },
            { verbal_explanation: "מציאת המאפסים (שורשי הפרבולה).", math_expression: "x_{1} = 0 \\quad , \\quad x_{2} = 4" },
            { verbal_explanation: "מאחר והפרבולה בוכה (מקדם ריבועי שלילי), היא מעל ציר האיקס בין השורשים שלה.", math_expression: "0 < x < 4" }
        ],
        final_answer: "0 < x < 4"
    },
    {
        topic: "exp_log_472",
        subTopic: "תחום הגדרה של פונקציות ln ו-log",
        question_text: "מצאו את תחום ההגדרה של הפונקציה המשלבת ערך מוחלט: \\( f(x) = \\ln(|x| - 3) \\).&rlm;",
        options: ["x > 3 או x < -3", "x > 3", "x < -3", "-3 < x < 3"],
        correctAnswer: 0,
        hint: "הביטוי שבתוך הלוגריתם צריך להיות חיובי. העבירו את ה-3 אגף ופתרו את אי-השוויון של הערך המוחלט.",
        solution_steps: [
            { verbal_explanation: "הצבת דרישת החיוביות לביטוי הכולל ערך מוחלט.", math_expression: "|x| - 3 > 0" },
            { verbal_explanation: "בידוד הערך המוחלט באגף שמאל.", math_expression: "|x| > 3" },
            { verbal_explanation: "פיצול אי השוויון על פי חוקי הערך המוחלט לשני מסלולים מנוגדים.", math_expression: "x > 3 \\quad \\cup \\quad x < -3" },
            { verbal_explanation: "סיום הוכחת התחום המפוצל.", math_expression: "x > 3 \\quad \\cup \\quad x < -3" }
        ],
        final_answer: "x > 3 או x < -3"
    },
    {
        topic: "exp_log_472",
        subTopic: "תחום הגדרה של פונקציות ln ו-log",
        question_text: "מהו תחום ההגדרה של הפונקציה הרציונלית הבאה: \\( f(x) = \\dfrac{1}{x\\ln(x)} \\)?&rlm;",
        options: ["x > 0 וגם x ≠ 1", "x > 0", "x ≠ 0", "x > 1"],
        correctAnswer: 0,
        hint: "הלוגריתם דורש x>0. המכנה דורש ש-x לא יהיה 0 ושהלוגריתם לא יהיה 0. מתי ln(x)=0?",
        solution_steps: [
            { verbal_explanation: "תנאי קיום ראשון: דרישת חיוביות לתוכן הלוגריתם.", math_expression: "x > 0" },
            { verbal_explanation: "תנאי קיום שני: איסור התאפסות של המכנה כולו.", math_expression: "x\\ln(x) \\neq 0" },
            { verbal_explanation: "פיצול תנאי המכנה לשני תנאים נפרדים.", math_expression: "x \\neq 0 \\quad \\cap \\quad \\ln(x) \\neq 0" },
            { verbal_explanation: "התנאי הראשון נבלע בתוך דרישת החיוביות הקודמת. פתרון התנאי השני:", math_expression: "x \\neq e^{0} \\Rightarrow x \\neq 1" },
            { verbal_explanation: "איחוד שני התנאים התקפים לתשובה כוללת.", math_expression: "x > 0 \\quad \\cap \\quad x \\neq 1" }
        ],
        final_answer: "x > 0 וגם x ≠ 1"
    },

    // ==========================================
    // תת נושא 3: גזירת הפונקציה המעריכית (e^x ו- a^x) (10 שאלות)
    // ==========================================

    {
        topic: "exp_log_472",
        subTopic: "גזירת הפונקציה המעריכית (e^x ו- a^x)",
        question_text: "גזרו את הפונקציה המעריכית המורכבת הבאה (בעזרת כלל השרשרת): \\( f(x) = e^{x^{2} - 4x} \\).&rlm;",
        options: ["f'(x) = (2x - 4)e^(x² - 4x)", "f'(x) = e^(x² - 4x)", "f'(x) = (x² - 4x)e^(2x - 4)", "f'(x) = (2x - 4)e^(2x - 4)"],
        correctAnswer: 0,
        hint: "הנגזרת של e בחזקת פונקציה שווה ל-e בחזקת אותה הפונקציה בדיוק, מוכפל בנגזרת של הפונקציה שבחזקה (הנגזרת הפנימית).",
        solution_steps: [
            { verbal_explanation: "גזירת הפונקציה הפנימית הממוקמת במעריך החזקה של האקספוננט.", math_expression: "g(x) = x^{2} - 4x \\Rightarrow g'(x) = 2x - 4" },
            { verbal_explanation: "הכנת תבנית הגזירה הייעודית לפונקציה מעריכית טבעית (בסיס e).", math_expression: "f'(x) = g'(x) \\times e^{g(x)}" },
            { verbal_explanation: "הצבת המרכיבים שחישבנו אל תוך התבנית המוכנה.", math_expression: "f'(x) = (2x - 4) \\times e^{x^{2} - 4x}" },
            { verbal_explanation: "הסרת סימני כפל מיותרים לקבלת הביטוי הסופי.", math_expression: "f'(x) = (2x - 4)e^{x^{2} - 4x}" }
        ],
        final_answer: "f'(x) = (2x - 4)e^(x² - 4x)"
    },
    {
        topic: "exp_log_472",
        subTopic: "גזירת הפונקציה המעריכית (e^x ו- a^x)",
        question_text: "גזרו את הפונקציה הבאה באמצעות כלל המכפלה: \\( f(x) = x^{3}e^{x} \\). פשטו והוציאו גורם משותף בסיום.&rlm;",
        options: ["f'(x) = x²e^x(x + 3)", "f'(x) = 3x²e^x", "f'(x) = x³e^x + 3x²", "f'(x) = e^x(x³ + 3)"],
        correctAnswer: 0,
        hint: "כלל המכפלה: נגזרת של הראשון כפול השני, ועוד הראשון כפול הנגזרת של השני. הנגזרת של e^x היא הוא עצמו. הוציאו e^x ואת x בריבוע כגורם משותף.",
        solution_steps: [
            { verbal_explanation: "הגדרת גורם המכפלה הראשון וגזירתו.", math_expression: "u = x^{3} \\Rightarrow u' = 3x^{2}" },
            { verbal_explanation: "הגדרת גורם המכפלה השני וגזירתו הבסיסית.", math_expression: "v = e^{x} \\Rightarrow v' = e^{x}" },
            { verbal_explanation: "הרכבת הנגזרת הכוללת באמצעות כלל המכפלה הקלאסי.", math_expression: "f'(x) = 3x^{2}e^{x} + x^{3}e^{x}" },
            { verbal_explanation: "הוצאת הגורמים המשותפים המקסימליים (איקס בריבוע ואקספוננט) מחוץ לסוגריים.", math_expression: "f'(x) = x^{2}e^{x}(3 + x)" },
            { verbal_explanation: "החלפת סדר האיברים בסוגריים להצגה אסתטית ותקנית.", math_expression: "f'(x) = x^{2}e^{x}(x + 3)" }
        ],
        final_answer: "f'(x) = x²e^x(x + 3)"
    },
    {
        topic: "exp_log_472",
        subTopic: "גזירת הפונקציה המעריכית (e^x ו- a^x)",
        question_text: "גזרו את פונקציית המנה הבאה ופשטו ככל הניתן: \\( f(x) = \\dfrac{e^{x}}{x + 2} \\).&rlm;",
        options: ["f'(x) = (e^x(x + 1)) : (x + 2)²", "f'(x) = e^x : (x + 2)²", "f'(x) = (e^x(x + 3)) : (x + 2)²", "f'(x) = (xe^x) : (x + 2)²"],
        correctAnswer: 0,
        hint: "השתמשו בכלל המנה. לאחר פריסת מונה הנגזרת, הוציאו את e^x כגורם משותף מהביטוי שבמונה.",
        solution_steps: [
            { verbal_explanation: "הגדרת פונקציית המונה וגזירתה (נשארת זהה).", math_expression: "u = e^{x} \\Rightarrow u' = e^{x}" },
            { verbal_explanation: "הגדרת פונקציית המכנה הליניארית וגזירתה (נשאר רק המקדם).", math_expression: "v = x + 2 \\Rightarrow v' = 1" },
            { verbal_explanation: "הצבת הנתונים בנוסחת כלל המנה לשברים.", math_expression: "f'(x) = \\dfrac{e^{x}(x + 2) - e^{x} \\times 1}{(x + 2)^{2}}" },
            { verbal_explanation: "הוצאת האקספוננט כגורם משותף במונה השבר לשם פישוט אלגברי.", math_expression: "f'(x) = \\dfrac{e^{x}(x + 2 - 1)}{(x + 2)^{2}}" },
            { verbal_explanation: "כינוס איברים בתוך הסוגריים העליונים לחתימת הפתרון.", math_expression: "f'(x) = \\dfrac{e^{x}(x + 1)}{(x + 2)^{2}}" }
        ],
        final_answer: "f'(x) = (e^x(x + 1)) : (x + 2)²"
    },
    {
        topic: "exp_log_472",
        subTopic: "גזירת הפונקציה המעריכית (e^x ו- a^x)",
        question_text: "נתונה הפונקציה \\( f(x) = e^{2x} - 4e^{x} \\). מצאו את נקודת המינימום המקומית שלה (את שיעור ה-x).&rlm;",
        options: ["x = ln(2)", "x = 0", "x = ln(4)", "x = 2"],
        correctAnswer: 0,
        hint: "גזרו את הפונקציה (זכרו את הנגזרת הפנימית לאיבר הראשון), השוו לאפס, והוציאו גורם משותף. זכרו שפונקציה מעריכית לעולם אינה שווה לאפס.",
        solution_steps: [
            { verbal_explanation: "גזירת האיבר הראשון תוך התחשבות במעריך החזקה כנגזרת פנימית.", math_expression: "(e^{2x})' = 2e^{2x}" },
            { verbal_explanation: "גזירת האיבר השני במשוואה (המקדם נשמר).", math_expression: "(-4e^{x})' = -4e^{x}" },
            { verbal_explanation: "חיבור האיברים ליצירת פונקציית הנגזרת השלמה והשוואתה לאפס למציאת קיצון.", math_expression: "2e^{2x} - 4e^{x} = 0" },
            { verbal_explanation: "הוצאת גורם משותף מרבי מתוך איברי המשוואה המאופסת.", math_expression: "2e^{x}(e^{x} - 2) = 0" },
            { verbal_explanation: "מסלול פתרון ראשון נפסל מיידית מכיוון שאקספוננט תמיד חיובי ממש ואינו מתאפס לעולם.", math_expression: "2e^{x} = 0 \\Rightarrow \\emptyset" },
            { verbal_explanation: "מסלול פתרון שני מניב תוצאה לאחר שימוש בלוגריתם טבעי לבידוד המעריך.", math_expression: "e^{x} - 2 = 0 \\Rightarrow e^{x} = 2 \\Rightarrow x = \\ln(2)" }
        ],
        final_answer: "x = ln(2)"
    },
    {
        topic: "exp_log_472",
        subTopic: "גזירת הפונקציה המעריכית (e^x ו- a^x)",
        question_text: "גזרו את הפונקציה המעריכית בעלת בסיס שאינו טבעי: \\( f(x) = 5^{2x} \\).&rlm;",
        options: ["f'(x) = 2 × 5^(2x) × ln(5)", "f'(x) = 2x × 5^(2x-1)", "f'(x) = 5^(2x) × ln(5)", "f'(x) = 2 × 5^(2x)"],
        correctAnswer: 0,
        hint: "כלל הגזירה לפונקציה מעריכית בבסיס a: הנגזרת שווה לפונקציה עצמה, כפול הנגזרת הפנימית של החזקה, כפול הלוגריתם הטבעי של הבסיס (ln).",
        solution_steps: [
            { verbal_explanation: "זיהוי הפונקציה הפנימית במעריך החזקה וגזירתה הפשוטה.", math_expression: "g(x) = 2x \\Rightarrow g'(x) = 2" },
            { verbal_explanation: "שימוש בנוסחת הגזירה הכללית לבסיס מעריכי שאינו עולה בקנה אחד עם הקבוע הטבעי e.", math_expression: "f'(x) = g'(x) \\times a^{g(x)} \\times \\ln(a)" },
            { verbal_explanation: "הצבת הנתונים הספציפיים של הפונקציה שלנו אל תוך הנוסחה הכללית.", math_expression: "f'(x) = 2 \\times 5^{2x} \\times \\ln(5)" },
            { verbal_explanation: "סגירת החישוב.", math_expression: "1=1" }
        ],
        final_answer: "f'(x) = 2 × 5^(2x) × ln(5)"
    },
    {
        topic: "exp_log_472",
        subTopic: "גזירת הפונקציה המעריכית (e^x ו- a^x)",
        question_text: "גזרו את הפונקציה המורכבת הכוללת שורש במעריך: \\( f(x) = e^{\\sqrt{x}} \\).&rlm;",
        options: ["f'(x) = e^(√x) : (2√x)", "f'(x) = e^(√x) : √x", "f'(x) = e^(√x) × (2√x)", "f'(x) = 0.5 × e^(√x)"],
        correctAnswer: 0,
        hint: "הנגזרת היא e בחזקת שורש x, כפול הנגזרת הפנימית של שורש x. נגזרת של שורש x היא 1 חלקי (2 כפול שורש x).",
        solution_steps: [
            { verbal_explanation: "גזירת הפונקציה הפנימית המהווה את מעריך החזקה, על פי חוק נגזרת שורש.", math_expression: "g(x) = \\sqrt{x} \\Rightarrow g'(x) = \\dfrac{1}{2\\sqrt{x}}" },
            { verbal_explanation: "יישום כלל השרשרת על הפונקציה המעריכית.", math_expression: "f'(x) = g'(x) \\times e^{g(x)}" },
            { verbal_explanation: "הצבת הביטויים לתוך התבנית המוכנה.", math_expression: "f'(x) = \\dfrac{1}{2\\sqrt{x}} \\times e^{\\sqrt{x}}" },
            { verbal_explanation: "העלאת האקספוננט למונה השבר לשם הצגה נקייה וקריאה יותר.", math_expression: "f'(x) = \\dfrac{e^{\\sqrt{x}}}{2\\sqrt{x}}" }
        ],
        final_answer: "f'(x) = e^(√x) : (2√x)"
    },
    {
        topic: "exp_log_472",
        subTopic: "גזירת הפונקציה המעריכית (e^x ו- a^x)",
        question_text: "מצאו את משוואת המשיק לפונקציה \\( f(x) = x \\times e^{x} \\) בנקודה שבה \\( x = 1 \\).&rlm;",
        options: ["y = 2ex - e", "y = ex + e", "y = 2ex + e", "y = ex"],
        correctAnswer: 0,
        hint: "מציאת y: הציבו x=1 בפונקציה. מציאת שיפוע: גזרו לפי מכפלה והציבו x=1. לבסוף בנו את משוואת הישר המשיק.",
        solution_steps: [
            { verbal_explanation: "הצבת קואורדינטת האיקס בפונקציה המקורית למציאת הגובה בו תתרחש ההשקה.", math_expression: "f(1) = 1 \\times e^{1} = e \\Rightarrow P(1, e)" },
            { verbal_explanation: "גזירת הפונקציה בעזרת כלל המכפלה (נגזרת ראשון בשני ועוד ראשון בנגזרת שני).", math_expression: "f'(x) = 1 \\times e^{x} + x \\times e^{x} = e^{x}(1 + x)" },
            { verbal_explanation: "הצבת האיקס בנגזרת שחושבה כדי למצוא את השיפוע בנקודה הספציפית.", math_expression: "m = f'(1) = e^{1}(1 + 1) = 2e" },
            { verbal_explanation: "הרכבת משוואת הישר על סמך השיפוע ונקודת המפגש הידועה.", math_expression: "y - e = 2e(x - 1)" },
            { verbal_explanation: "פתיחת הסוגריים באגף ימין על ידי הכפלת השיפוע פנימה.", math_expression: "y - e = 2ex - 2e" },
            { verbal_explanation: "העברת איברים לאגף ימין וכינוסם ליצירת פונקציה מפורשת ליניארית.", math_expression: "y = 2ex - 2e + e \\Rightarrow y = 2ex - e" }
        ],
        final_answer: "y = 2ex - e"
    },
    {
        topic: "exp_log_472",
        subTopic: "גזירת הפונקציה המעריכית (e^x ו- a^x)",
        question_text: "מצאו את נקודת המקסימום המקומי של הפונקציה בעלת המעריך השלילי הריבועי: \\( f(x) = e^{-x^{2}} \\) (צורת פעמון גאוס).&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 120' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='100' x2='180' y2='100' stroke='#94a3b8' stroke-width='2'/><line x1='100' y1='10' x2='100' y2='110' stroke='#94a3b8' stroke-width='2'/><path d='M 20 100 Q 60 100, 80 50 T 100 20 T 120 50 T 180 100' fill='none' stroke='#3b82f6' stroke-width='2'/><circle cx='100' cy='20' r='4' fill='#ef4444'/><text x='110' y='25' font-size='12' font-family='Arial'>(0,1)</text></svg></div>",
        options: ["(0, 1)", "(1, e)", "(0, 0)", "(-1, e)"],
        correctAnswer: 0,
        hint: "גזרו את הפונקציה בעזרת כלל השרשרת: הנגזרת היא מינוס שני איקס כפול הפונקציה עצמה. השוו לאפס וזכרו שהחלק המעריכי לא מתאפס לעולם.",
        solution_steps: [
            { verbal_explanation: "גזירת פונקציית המעריך הפנימית (חזקה שניה עם סימן שלילי).", math_expression: "g(x) = -x^{2} \\Rightarrow g'(x) = -2x" },
            { verbal_explanation: "שילוב הנגזרת הפנימית בנוסחת הגזירה של האקספוננט.", math_expression: "f'(x) = -2x \\times e^{-x^{2}}" },
            { verbal_explanation: "השוואת נגזרת הפונקציה לאפס לשם איתור נקודות קיצון במרחב האופקי.", math_expression: "-2xe^{-x^{2}} = 0" },
            { verbal_explanation: "מאחר והחלק המעריכי חיובי תמיד, הפתרון היחיד מגיע מהתאפסות המקדם הליניארי.", math_expression: "-2x = 0 \\Rightarrow x = 0" },
            { verbal_explanation: "הצבת נקודת ההתאפסות בפונקציה המקורית כדי לאמוד את ערכה המוחלט בציר הוואי.", math_expression: "f(0) = e^{-0^{2}} = e^{0} = 1" },
            { verbal_explanation: "קביעת הנקודה הסופית שהוכחה כנקודת הקיצון היחידה והגבוהה ביותר.", math_expression: "P(0, 1)" }
        ],
        final_answer: "(0, 1)"
    },
    {
        topic: "exp_log_472",
        subTopic: "גזירת הפונקציה המעריכית (e^x ו- a^x)",
        question_text: "מצאו את הנגזרת השנייה (\\( f''(x) \\)) של הפונקציה \\( f(x) = e^{2x} - x \\).&rlm;",
        options: ["f''(x) = 4e^(2x)", "f''(x) = 2e^(2x)", "f''(x) = 4e^(2x) - 1", "f''(x) = e^(2x)"],
        correctAnswer: 0,
        hint: "גזרו פעם אחת: תקבלו פעמיים e בחזקת 2x פחות 1. גזרו את התוצאה פעם נוספת: המספר החופשי (1-) ייעלם, והחלק המעריכי ייגזר שוב באותה צורה.",
        solution_steps: [
            { verbal_explanation: "ביצוע נגזרת ראשונה. האיבר הראשון דורש נגזרת פנימית, האיבר השני ליניארי פשוט.", math_expression: "f'(x) = 2e^{2x} - 1" },
            { verbal_explanation: "ביצוע נגזרת שנייה על הנגזרת הראשונה שחושבה.", math_expression: "f''(x) = (2e^{2x})' - (1)'" },
            { verbal_explanation: "האיבר הקבוע בסוף נגזר לאפס. האיבר המעריכי נגזר שוב על ידי הכפלה בנגזרת הפנימית המהווה את מעריכו (שתיים).", math_expression: "f''(x) = 2 \\times 2e^{2x} - 0" },
            { verbal_explanation: "הכפלת המקדמים המספריים לתוצאה נקייה וסופית.", math_expression: "f''(x) = 4e^{2x}" }
        ],
        final_answer: "f''(x) = 4e^(2x)"
    },
    {
        topic: "exp_log_472",
        subTopic: "גזירת הפונקציה המעריכית (e^x ו- a^x)",
        question_text: "גזרו את הפונקציה \\( f(x) = x^{2}e^{-x} \\).&rlm;",
        options: ["f'(x) = xe^(-x)(2 - x)", "f'(x) = 2xe^(-x)", "f'(x) = -x²e^(-x)", "f'(x) = xe^(-x)(x - 2)"],
        correctAnswer: 0,
        hint: "השתמשו בכלל המכפלה. שימו לב שהנגזרת של e בחזקת מינוס x היא מינוס e בחזקת מינוס x. הוציאו גורם משותף בסוף.",
        solution_steps: [
            { verbal_explanation: "פיצול למרכיבי מכפלה: הגדרת הגורם הפולינומי וגזירתו.", math_expression: "u = x^{2} \\Rightarrow u' = 2x" },
            { verbal_explanation: "הגדרת גורם המכפלה השני וגזירתו תוך הדגשת הנגזרת הפנימית השלילית.", math_expression: "v = e^{-x} \\Rightarrow v' = -e^{-x}" },
            { verbal_explanation: "שילוב הגורמים בתבנית כלל המכפלה לגזירת פונקציות.", math_expression: "f'(x) = 2x \\times e^{-x} + x^{2} \\times (-e^{-x})" },
            { verbal_explanation: "סידור והחצנת הסימן השלילי אל קדמת האיבר השני.", math_expression: "f'(x) = 2xe^{-x} - x^{2}e^{-x}" },
            { verbal_explanation: "הוצאת גורמים משותפים נרחבים (איקס בודד והאקספוננט כולו) אל מחוץ לסוגריים.", math_expression: "f'(x) = xe^{-x}(2 - x)" }
        ],
        final_answer: "f'(x) = xe^(-x)(2 - x)"
    },
    // ==========================================
    // תת נושא 4: גזירת פונקציות לוגריתמיות (ln(x) ו- log(x)) (10 שאלות)
    // ==========================================

    {
        topic: "exp_log_472",
        subTopic: "גזירת פונקציות לוגריתמיות (ln(x) ו- log(x))",
        question_text: "גזרו את הפונקציה הלוגריתמית הבאה: \\( f(x) = \\ln(3x^{2} - 5x) \\).&rlm;",
        options: ["f'(x) = (6x - 5) : (3x² - 5x)", "f'(x) = 1 : (3x² - 5x)", "f'(x) = (3x² - 5x) : (6x - 5)", "f'(x) = 6x - 5"],
        correctAnswer: 0,
        hint: "השתמשו בכלל השרשרת: הנגזרת של לוגריתם טבעי שווה לנגזרת של התוכן הפנימי, מחולקת בתוכן הפנימי עצמו כפי שהוא.",
        solution_steps: [
            { verbal_explanation: "הגדרת הפונקציה הפנימית המצויה בתוך הלוגריתם הטבעי.", math_expression: "u(x) = 3x^{2} - 5x" },
            { verbal_explanation: "גזירת הפונקציה הפנימית על פי כללי נגזרת פולינום רגילים.", math_expression: "u'(x) = 6x - 5" },
            { verbal_explanation: "כתיבת נוסחת הגזירה הידועה עבור פונקציית הלוגריתם הטבעי באמצעות כלל השרשרת.", math_expression: "f'(x) = \\dfrac{u'(x)}{u(x)}" },
            { verbal_explanation: "הצבת הביטויים שחישבנו אל תוך התבנית השברית של הנגזרת.", math_expression: "f'(x) = \\dfrac{6x - 5}{3x^{2} - 5x}" },
            { verbal_explanation: "בדיקת אפשרות לצמצום אלגברי נוסף.", math_expression: "1=1" },
            { verbal_explanation: "הגשת הביטוי הסופי כפי שהוא.", math_expression: "0=0" }
        ],
        final_answer: "f'(x) = (6x - 5) : (3x² - 5x)"
    },
    {
        topic: "exp_log_472",
        subTopic: "גזירת פונקציות לוגריתמיות (ln(x) ו- log(x))",
        question_text: "גזרו את פונקציית המכפלה הבאה: \\( f(x) = x^{2}\\ln(x) \\). פשטו ככל הניתן והוציאו גורם משותף.&rlm;",
        options: ["f'(x) = x(2ln(x) + 1)", "f'(x) = 2x × ln(x)", "f'(x) = x(2ln(x) - 1)", "f'(x) = 2x + 1"],
        correctAnswer: 0,
        hint: "כלל המכפלה: נגזרת של איקס בריבוע כפול הלוגריתם, ועוד איקס בריבוע כפול הנגזרת של הלוגריתם (שהיא 1 חלקי x).",
        solution_steps: [
            { verbal_explanation: "הגדרת גורם המכפלה הראשון וגזירתו המידית.", math_expression: "u = x^{2} \\Rightarrow u' = 2x" },
            { verbal_explanation: "הגדרת גורם המכפלה השני וגזירתו לפי חוק הלוגריתמים היסודי.", math_expression: "v = \\ln(x) \\Rightarrow v' = \\dfrac{1}{x}" },
            { verbal_explanation: "בניית הנגזרת השלמה על פי תבנית כלל המכפלה הקלאסית.", math_expression: "f'(x) = 2x\\ln(x) + x^{2} \\times \\dfrac{1}{x}" },
            { verbal_explanation: "צמצום חזקת המשתנה באיבר השני מול המכנה שלו.", math_expression: "x^{2} \\times \\dfrac{1}{x} = x" },
            { verbal_explanation: "כתיבת התוצאה המפושטת לאחר שלב הצמצום.", math_expression: "f'(x) = 2x\\ln(x) + x" },
            { verbal_explanation: "הוצאת המשתנה כגורם משותף מחוץ לסוגריים להצגה אלגנטית.", math_expression: "f'(x) = x(2\\ln(x) + 1)" }
        ],
        final_answer: "f'(x) = x(2ln(x) + 1)"
    },
    {
        topic: "exp_log_472",
        subTopic: "גזירת פונקציות לוגריתמיות (ln(x) ו- log(x))",
        question_text: "גזרו את פונקציית המנה: \\( f(x) = \\dfrac{\\ln(x)}{x} \\).&rlm;",
        options: ["f'(x) = (1 - ln(x)) : x²", "f'(x) = (1 + ln(x)) : x²", "f'(x) = 1 : x²", "f'(x) = (ln(x) - 1) : x²"],
        correctAnswer: 0,
        hint: "השתמשו בכלל המנה. נגזרת המונה היא 1 חלקי x. הכפילו במכנה (x), החסירו את המונה כפול נגזרת המכנה, וחלקו הכל במכנה בריבוע.",
        solution_steps: [
            { verbal_explanation: "גזירת המונה הלוגריתמי של הפונקציה הרציונלית.", math_expression: "u = \\ln(x) \\Rightarrow u' = \\dfrac{1}{x}" },
            { verbal_explanation: "גזירת המכנה הליניארי הפשוט.", math_expression: "v = x \\Rightarrow v' = 1" },
            { verbal_explanation: "הצבת הנתונים לתוך תבנית כלל המנה לשברים.", math_expression: "f'(x) = \\dfrac{\\dfrac{1}{x} \\times x - \\ln(x) \\times 1}{x^{2}}" },
            { verbal_explanation: "צמצום האיבר הראשון במונה הפונקציה המוגזרת לכדי מספר שלם.", math_expression: "\\dfrac{1}{x} \\times x = 1" },
            { verbal_explanation: "הצבת הערך המצומצם בחזרה אל המונה הראשי.", math_expression: "f'(x) = \\dfrac{1 - \\ln(x)}{x^{2}}" },
            { verbal_explanation: "סיום הפישוט והצגת הנגזרת.", math_expression: "1=1" }
        ],
        final_answer: "f'(x) = (1 - ln(x)) : x²"
    },
    {
        topic: "exp_log_472",
        subTopic: "גזירת פונקציות לוגריתמיות (ln(x) ו- log(x))",
        question_text: "גזרו את הפונקציה המורכבת בעלת החזקה: \\( f(x) = (\\ln(x))^{3} \\).&rlm;",
        options: ["f'(x) = 3(ln(x))² : x", "f'(x) = 3ln(x) : x", "f'(x) = 3(ln(x))²", "f'(x) = (ln(x))³ : 3x"],
        correctAnswer: 0,
        hint: "השתמשו בכלל השרשרת. הורידו את החזקה (3) כמקדם, הפחיתו את החזקה באחת, והכפילו בנגזרת הפנימית של הלוגריתם (1 חלקי x).",
        solution_steps: [
            { verbal_explanation: "זיהוי הפונקציה החיצונית כפונקציית חזקה והורדת המעריך כמקדם מכפיל.", math_expression: "u(x) = 3(\\ln(x))^{2}" },
            { verbal_explanation: "זיהוי הפונקציה הפנימית וגזירתה באופן שגרתי.", math_expression: "v(x) = \\ln(x) \\Rightarrow v'(x) = \\dfrac{1}{x}" },
            { verbal_explanation: "הפעלת כלל השרשרת באמצעות הכפלת הגורמים השונים שנגזרו.", math_expression: "f'(x) = 3(\\ln(x))^{2} \\times \\dfrac{1}{x}" },
            { verbal_explanation: "איחוד לשבר יחיד המקל על קריאת הפונקציה השלמה.", math_expression: "f'(x) = \\dfrac{3(\\ln(x))^{2}}{x}" },
            { verbal_explanation: "בדיקת מבנה התשובה הסופית אל מול החלופות.", math_expression: "1=1" },
            { verbal_explanation: "השלמת החישוב.", math_expression: "0=0" }
        ],
        final_answer: "f'(x) = 3(ln(x))² : x"
    },
    {
        topic: "exp_log_472",
        subTopic: "גזירת פונקציות לוגריתמיות (ln(x) ו- log(x))",
        question_text: "גזרו את הפונקציה הלוגריתמית בבסיס שאינו טבעי: \\( f(x) = \\log_{2}(x^{2} + 1) \\).&rlm;",
        options: ["f'(x) = 2x : ((x² + 1) × ln(2))", "f'(x) = 2x : (x² + 1)", "f'(x) = 1 : ((x² + 1) × ln(2))", "f'(x) = 2x × ln(2) : (x² + 1)"],
        correctAnswer: 0,
        hint: "הנגזרת של לוגריתם בבסיס a שווה לנגזרת התוכן, חלקי (התוכן כפול ln(a)). במקרה זה הבסיס הוא 2.",
        solution_steps: [
            { verbal_explanation: "גזירת התוכן הפנימי של הפונקציה הלוגריתמית לקראת המונה.", math_expression: "u(x) = x^{2} + 1 \\Rightarrow u'(x) = 2x" },
            { verbal_explanation: "הצבת כלל הגזירה המיוחד לבסיס לוגריתמי שאינו טבעי e.", math_expression: "f'(x) = \\dfrac{u'(x)}{u(x) \\times \\ln(a)}" },
            { verbal_explanation: "הצבת התוכן המקורי והבסיס הידוע (שתיים) במכנה הנוסחה.", math_expression: "M = (x^{2} + 1) \\times \\ln(2)" },
            { verbal_explanation: "הרכבת הנגזרת המלאה עם המונה והמכנה שחושבו.", math_expression: "f'(x) = \\dfrac{2x}{(x^{2} + 1)\\ln(2)}" },
            { verbal_explanation: "הצגת התוצאה הסופית.", math_expression: "1=1" },
            { verbal_explanation: "סיום הוכחת הנגזרת.", math_expression: "0=0" }
        ],
        final_answer: "f'(x) = 2x : ((x² + 1) × ln(2))"
    },
    {
        topic: "exp_log_472",
        subTopic: "גזירת פונקציות לוגריתמיות (ln(x) ו- log(x))",
        question_text: "גזרו את הפונקציה המשלבת חילוק בתוך הלוגריתם: \\( f(x) = \\ln(\\dfrac{x + 1}{x - 1}) \\). (מומלץ לפשט קודם בעזרת חוקי לוגריתמים).&rlm;",
        options: ["f'(x) = -2 : (x² - 1)", "f'(x) = 2 : (x² - 1)", "f'(x) = -2 : (x - 1)²", "f'(x) = 1 : (x² - 1)"],
        correctAnswer: 0,
        hint: "היעזרו בחוק הלוגריתמים הקובע שלוג של מנה שווה להפרש הלוגריתמים. פצלו לשני לוגריתמים, גזרו כל אחד בנפרד, ואז בצעו מכנה משותף.",
        solution_steps: [
            { verbal_explanation: "פישוט אלגברי מוקדם על ידי חוק המנה של הלוגריתמים.", math_expression: "f(x) = \\ln(x + 1) - \\ln(x - 1)" },
            { verbal_explanation: "גזירת האיבר הראשון במשוואה המפושטת (הנגזרת הפנימית היא אחת).", math_expression: "u'(x) = \\dfrac{1}{x + 1}" },
            { verbal_explanation: "גזירת האיבר השני המורכב מביטוי ליניארי שנגזרתו אחת.", math_expression: "v'(x) = \\dfrac{1}{x - 1}" },
            { verbal_explanation: "הצבת הנגזרות להרכבת הביטוי הכללי המוגזר.", math_expression: "f'(x) = \\dfrac{1}{x + 1} - \\dfrac{1}{x - 1}" },
            { verbal_explanation: "ביצוע מכנה משותף לשם השגת שבר יחיד המבוסס על נוסחת הפרש ריבועים.", math_expression: "f'(x) = \\dfrac{1(x - 1) - 1(x + 1)}{(x + 1)(x - 1)}" },
            { verbal_explanation: "פתיחת סוגריים וכינוס המונה להעלמת המשתנה.", math_expression: "f'(x) = \\dfrac{x - 1 - x - 1}{x^{2} - 1}" },
            { verbal_explanation: "הצגת התשובה החותמת את הגזירה.", math_expression: "f'(x) = \\dfrac{-2}{x^{2} - 1}" }
        ],
        final_answer: "f'(x) = -2 : (x² - 1)"
    },
    {
        topic: "exp_log_472",
        subTopic: "גזירת פונקציות לוגריתמיות (ln(x) ו- log(x))",
        question_text: "נתונה הפונקציה \\( f(x) = x - \\ln(x) \\). מצאו את נקודת הקיצון המקומית שלה (שיעורי x ו- y).&rlm;",
        options: ["(1, 1)", "(e, e - 1)", "(1, 0)", "(e, 0)"],
        correctAnswer: 0,
        hint: "גזרו את הפונקציה והשוו לאפס. נגזרת של x היא 1, ונגזרת של לוגריתם היא 1 חלקי x. פתרו למציאת x והציבו בפונקציה המקורית.",
        solution_steps: [
            { verbal_explanation: "ביצוע גזירה בסיסית לשני איברי הפונקציה באופן בלתי תלוי.", math_expression: "f'(x) = 1 - \\dfrac{1}{x}" },
            { verbal_explanation: "השוואת הנגזרת לאפס לאיתור נקודות התאפסות המעידות על קיצון.", math_expression: "1 - \\dfrac{1}{x} = 0" },
            { verbal_explanation: "העברת השבר לאגף השני לשם שינוי סימנו לחיובי.", math_expression: "1 = \\dfrac{1}{x}" },
            { verbal_explanation: "הכפלה באלכסון המעניקה את ערך המשתנה.", math_expression: "x = 1" },
            { verbal_explanation: "הצבת איקס שווה אחת בפונקציה המקורית כדי לחשב את קואורדינטת הוואי.", math_expression: "f(1) = 1 - \\ln(1)" },
            { verbal_explanation: "שימוש בעובדה המתמטית הידועה כי לוגריתם של אחת תמיד מאופס.", math_expression: "f(1) = 1 - 0 = 1" },
            { verbal_explanation: "הרכבת הקואורדינטה הסופית של הנקודה.", math_expression: "P(1, 1)" }
        ],
        final_answer: "(1, 1)"
    },
    {
        topic: "exp_log_472",
        subTopic: "גזירת פונקציות לוגריתמיות (ln(x) ו- log(x))",
        question_text: "מהי משוואת המשיק לגרף הפונקציה \\( f(x) = x\\ln(x) \\) בנקודה שבה \\( x = e \\)?&rlm;",
        options: ["y = 2x - e", "y = 2x + e", "y = x - e", "y = x"],
        correctAnswer: 0,
        hint: "הציבו x=e בפונקציה למציאת ערך ה-y בהשקה. גזרו לפי מכפלה, הציבו e בנגזרת למציאת השיפוע, ובנו משוואת ישר.",
        solution_steps: [
            { verbal_explanation: "הצבת ערך האיקס הנתון בפונקציה המקורית לחישוב גובה ההשקה.", math_expression: "f(e) = e \\times \\ln(e)" },
            { verbal_explanation: "החלפת הלוגריתם בערכו הממשי להשלמת קואורדינטות הנקודה.", math_expression: "f(e) = e \\times 1 = e \\Rightarrow P(e, e)" },
            { verbal_explanation: "גזירת הפונקציה המקורית תוך שימוש בכלל המכפלה הסטנדרטי.", math_expression: "f'(x) = 1 \\times \\ln(x) + x \\times \\dfrac{1}{x}" },
            { verbal_explanation: "צמצום ופישוט של פונקציית הנגזרת לשם נוחות.", math_expression: "f'(x) = \\ln(x) + 1" },
            { verbal_explanation: "הצבת קואורדינטת האיקס של ההשקה אל תוך הנגזרת לחילוץ השיפוע הרגעי.", math_expression: "m = \\ln(e) + 1 = 1 + 1 = 2" },
            { verbal_explanation: "הרכבת משוואת הישר המשיק על בסיס הנקודה והשיפוע הנתונים.", math_expression: "y - e = 2(x - e)" },
            { verbal_explanation: "פתיחת סוגריים וסידור הישר המשיק לצורה מפורשת סופית.", math_expression: "y = 2x - 2e + e \\Rightarrow y = 2x - e" }
        ],
        final_answer: "y = 2x - e"
    },
    {
        topic: "exp_log_472",
        subTopic: "גזירת פונקציות לוגריתמיות (ln(x) ו- log(x))",
        question_text: "מצאו את הנגזרת השנייה של הפונקציה \\( f(x) = x\\ln(x) \\).&rlm;",
        options: ["f''(x) = 1 : x", "f''(x) = 1 : x²", "f''(x) = 2 : x", "f''(x) = -1 : x²"],
        correctAnswer: 0,
        hint: "גזרו פעם אחת לפי כלל המכפלה (תקבלו ln(x) + 1). גזרו את התוצאה פעם נוספת.",
        solution_steps: [
            { verbal_explanation: "ביצוע נגזרת ראשונה לפונקציית המכפלה כמקובל.", math_expression: "f'(x) = 1 \\times \\ln(x) + x \\times \\dfrac{1}{x}" },
            { verbal_explanation: "פישוט הנגזרת הראשונה כדי להקל על הגזירה הבאה בתור.", math_expression: "f'(x) = \\ln(x) + 1" },
            { verbal_explanation: "הפעלת פעולת גזירה שנייה על הביטוי המפושט החדש.", math_expression: "f''(x) = (\\ln(x))' + (1)'" },
            { verbal_explanation: "גזירת הלוגריתם מניבה שבר של אחת חלקי המשתנה, וגזירת הקבוע מתאפסת כליל.", math_expression: "f''(x) = \\dfrac{1}{x} + 0" },
            { verbal_explanation: "הצגת התשובה המוגמרת.", math_expression: "f''(x) = \\dfrac{1}{x}" },
            { verbal_explanation: "בדיקת ההתאמה לחלופות הנתונות.", math_expression: "1=1" }
        ],
        final_answer: "f''(x) = 1 : x"
    },
    {
        topic: "exp_log_472",
        subTopic: "גזירת פונקציות לוגריתמיות (ln(x) ו- log(x))",
        question_text: "גזרו את הפונקציה המשלבת פונקציה מעריכית ולוגריתמית: \\( f(x) = e^{x}\\ln(x) \\).&rlm;",
        options: ["f'(x) = e^x(ln(x) + 1 : x)", "f'(x) = e^x(ln(x) - 1 : x)", "f'(x) = e^x : x", "f'(x) = e^x(ln(x) + x)"],
        correctAnswer: 0,
        hint: "השתמשו בכלל המכפלה. נגזרת של אקספוננט היא עצמה. נגזרת של ln(x) היא 1/x. הוציאו את האקספוננט כגורם משותף מחוץ לסוגריים בסיום.",
        solution_steps: [
            { verbal_explanation: "הגדרת גורם המכפלה הראשון וגזירתו (אקספוננט נשאר זהה).", math_expression: "u = e^{x} \\Rightarrow u' = e^{x}" },
            { verbal_explanation: "הגדרת גורם המכפלה השני וגזירתו.", math_expression: "v = \\ln(x) \\Rightarrow v' = \\dfrac{1}{x}" },
            { verbal_explanation: "שילוב הגורמים בתבנית כלל המכפלה לגזירה שלמה וארוכה.", math_expression: "f'(x) = e^{x}\\ln(x) + e^{x} \\times \\dfrac{1}{x}" },
            { verbal_explanation: "הוצאת הפונקציה המעריכית המשותפת לשני האיברים אל מחוץ לסוגריים.", math_expression: "f'(x) = e^{x}(\\ln(x) + \\dfrac{1}{x})" },
            { verbal_explanation: "הצגת הביטוי הסופי בבירור.", math_expression: "1 = 1" },
            { verbal_explanation: "סיום.", math_expression: "0 = 0" }
        ],
        final_answer: "f'(x) = e^x(ln(x) + 1 : x)"
    },

    // ==========================================
    // תת נושא 5: חקירה מלאה (אסימפטוטות אנכיות ואופקיות, קיצון, פיתול) (10 שאלות)
    // ==========================================

    {
        topic: "exp_log_472",
        subTopic: "חקירה מלאה (אסימפטוטות אנכיות ואופקיות, קיצון, פיתול)",
        question_text: "מהן האסימפטוטות (האנכיות והאופקיות) של הפונקציה \\( f(x) = \\dfrac{e^{x} + 2}{e^{x} - 1} \\)?&rlm;",
        options: ["x = 0, y = 1, y = -2", "x = 1, y = 1", "x = 0, y = 1", "אין אסימפטוטות"],
        correctAnswer: 0,
        hint: "אנכית: כשהמכנה מתאפס (איקס שווה אפס). אופקיות: לכיוון הפלוס אינסוף החזקות שולטות (יחס המקדמים 1). לכיוון המינוס אינסוף החזקות דועכות לאפס ונשאר יחס המספרים (מינוס 2).",
        solution_steps: [
            { verbal_explanation: "מציאת אסימפטוטה אנכית דרך השוואת המכנה לאפס.", math_expression: "e^{x} - 1 = 0 \\Rightarrow e^{x} = 1" },
            { verbal_explanation: "חילוץ המשתנה (מעריך החזקה) המאפס את המכנה.", math_expression: "x = \\ln(1) = 0 \\Rightarrow x = 0" },
            { verbal_explanation: "בדיקת הגבול לכיוון חיובי אינסופי, כאשר החזקות המעריכיות שולטות לחלוטין בפונקציה.", math_expression: "\\lim_{x \\to \\infty} \\dfrac{e^{x}}{e^{x}} = 1 \\Rightarrow y = 1" },
            { verbal_explanation: "בדיקת הגבול לכיוון שלילי אינסופי, שבו החזקות המעריכיות דועכות ומתאפסות כליל.", math_expression: "\\lim_{x \\to -\\infty} e^{x} = 0" },
            { verbal_explanation: "הצבת ההתאפסות בפונקציה לחילוץ גבול האסימפטוטה השמאלית מאברי הפונקציה החופשיים.", math_expression: "y = \\dfrac{0 + 2}{0 - 1} = -2 \\Rightarrow y = -2" },
            { verbal_explanation: "סיכום שלושת הישרים האסימפטוטיים שנמצאו בחקירה.", math_expression: "x = 0 \\quad , \\quad y = 1 \\quad , \\quad y = -2" }
        ],
        final_answer: "x = 0, y = 1, y = -2"
    },
    {
        topic: "exp_log_472",
        subTopic: "חקירה מלאה (אסימפטוטות אנכיות ואופקיות, קיצון, פיתול)",
        question_text: "מצאו את שיעור ה-x וה-y של נקודת המקסימום המקומי של הפונקציה \\( f(x) = xe^{-x} \\).&rlm;",
        options: ["(1, 1 : e)", "(0, 0)", "(e, e)", "(1, e)"],
        correctAnswer: 0,
        hint: "גזרו לפי כלל המכפלה (הנגזרת של אקספוננט שלילי מכילה מינוס). השוו לאפס, הוציאו גורם משותף, וזכרו שאקספוננט לא מתאפס. הציבו את ה-x חזרה לפונקציה.",
        solution_steps: [
            { verbal_explanation: "ביצוע גזירה המשלבת מכפלה ונגזרת פנימית שלילית לאקספוננט.", math_expression: "f'(x) = 1 \\times e^{-x} + x(-e^{-x})" },
            { verbal_explanation: "הוצאת האקספוננט כגורם משותף מחוץ לסוגריים לבידוד הפולינום.", math_expression: "f'(x) = e^{-x}(1 - x)" },
            { verbal_explanation: "השוואה לאפס וידיעה מוחלטת שהחלק המעריכי אינו יכול להתאפס לעולם.", math_expression: "1 - x = 0 \\Rightarrow x = 1" },
            { verbal_explanation: "הצבת הנקודה החשודה בפונקציה המקורית להשגת ערכה הפיזי והאנכי במרחב.", math_expression: "f(1) = 1 \\times e^{-1}" },
            { verbal_explanation: "המרת החזקה השלילית לכתיב חיובי בתוך שבר לצורך הצגה נקייה.", math_expression: "f(1) = \\dfrac{1}{e}" },
            { verbal_explanation: "הרכבת קואורדינטות הנקודה שהתגלתה כמקסימום מקומי (הנגזרת מחליפה סימן מחיובי לשלילי).", math_expression: "(1, \\dfrac{1}{e})" }
        ],
        final_answer: "(1, 1 : e)"
    },
    {
        topic: "exp_log_472",
        subTopic: "חקירה מלאה (אסימפטוטות אנכיות ואופקיות, קיצון, פיתול)",
        question_text: "נתונה הפונקציה \\( f(x) = \\dfrac{\\ln(x)}{x} \\). מצאו את נקודת המקסימום המוחלט שלה בתחומה.&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 150' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='100' x2='180' y2='100' stroke='#94a3b8' stroke-width='2'/><line x1='40' y1='20' x2='40' y2='130' stroke='#94a3b8' stroke-width='2'/><path d='M 45 130 Q 70 20, 110 30 T 180 80' fill='none' stroke='#3b82f6' stroke-width='2'/><circle cx='105' cy='32' r='4' fill='#ef4444'/><text x='115' y='25' font-size='12' font-family='Arial'>Max Point</text></svg></div>",
        options: ["(e, 1 : e)", "(1, 0)", "(e², 2 : e²)", "(e, 1)"],
        correctAnswer: 0,
        hint: "גזרו לפי כלל המנה, השוו את המונה לאפס ומצאו את x. הציבו את x בחזרה לפונקציה. זכרו ש-ln(e) הוא 1.",
        solution_steps: [
            { verbal_explanation: "גזירה מוקפדת על פי חוקי כלל המנה.", math_expression: "f'(x) = \\dfrac{\\dfrac{1}{x} \\times x - \\ln(x) \\times 1}{x^{2}}" },
            { verbal_explanation: "פישוט מונה הנגזרת והשוואתו לאפס למציאת נקודת הקיצון במרחב.", math_expression: "\\dfrac{1 - \\ln(x)}{x^{2}} = 0" },
            { verbal_explanation: "הכפלת המשוואה במכנה החיובי שומרת את המונה הליניארי בלבד.", math_expression: "1 - \\ln(x) = 0 \\Rightarrow \\ln(x) = 1" },
            { verbal_explanation: "חילוץ המשתנה מתוך הלוגריתם על בסיס קבוע אוילר.", math_expression: "x = e^{1} = e" },
            { verbal_explanation: "הצבת נקודת המקסימום החשודה בפונקציה המקורית לקבלת הגובה.", math_expression: "f(e) = \\dfrac{\\ln(e)}{e}" },
            { verbal_explanation: "ביצוע הלוגריתם הידוע כ-1 וסיום הרכבת קואורדינטות הנקודה.", math_expression: "f(e) = \\dfrac{1}{e} \\Rightarrow (e, \\dfrac{1}{e})" }
        ],
        final_answer: "(e, 1 : e)"
    },
    {
        topic: "exp_log_472",
        subTopic: "חקירה מלאה (אסימפטוטות אנכיות ואופקיות, קיצון, פיתול)",
        question_text: "לפונקציה \\( f(x) = x e^{x} \\) יש נקודת פיתול (הנקודה שבה הנגזרת השנייה מתאפסת ומחליפה סימן). מצאו את שיעור ה-x של נקודת הפיתול.&rlm;",
        options: ["x = -2", "x = -1", "x = 0", "x = 1"],
        correctAnswer: 0,
        hint: "גזרו את הפונקציה פעמיים תוך שימוש בכלל המכפלה. השוו את הנגזרת השנייה לאפס ומצאו את x.",
        solution_steps: [
            { verbal_explanation: "גזירה ראשונה לפי כלל המכפלה תוך שמירת האקספוננט וגזירת המקדם.", math_expression: "f'(x) = 1 \\times e^{x} + x e^{x}" },
            { verbal_explanation: "הוצאת גורם משותף בנגזרת הראשונה כדי להקל על תהליך הגזירה הבא בתור.", math_expression: "f'(x) = e^{x}(1 + x)" },
            { verbal_explanation: "גזירה שנייה לפונקציה המאוגדת החדשה, שוב לפי כלל מכפלה.", math_expression: "f''(x) = e^{x}(1 + x) + e^{x} \\times 1" },
            { verbal_explanation: "הוצאת גורם משותף גם בנגזרת השנייה כדי לפשט את המשוואה.", math_expression: "f''(x) = e^{x}(1 + x + 1) = e^{x}(x + 2)" },
            { verbal_explanation: "השוואת הנגזרת השנייה לאפס לאיתור נקודות פיתול (מעבר מקעירות לקמירות).", math_expression: "e^{x}(x + 2) = 0" },
            { verbal_explanation: "ביטול האקספוננט כיוון שאינו מתאפס לעולם, מה שמותיר משתנה ליניארי בודד.", math_expression: "x + 2 = 0 \\Rightarrow x = -2" },
            { verbal_explanation: "וידוא הפתרון אל מול האפשרויות המוצעות לשחקן.", math_expression: "1=1" }
        ],
        final_answer: "x = -2"
    },
    {
        topic: "exp_log_472",
        subTopic: "חקירה מלאה (אסימפטוטות אנכיות ואופקיות, קיצון, פיתול)",
        question_text: "קבעו מהן האסימפטוטות האנכיות של הפונקציה \\( f(x) = x - \\ln(x) \\).&rlm;",
        options: ["x = 0 אנכית בלבד", "אין לה אסימפטוטות כלל", "x = 0 ו- y = 0", "y = x משופעת"],
        correctAnswer: 0,
        hint: "תחום ההגדרה הוא x גדול מאפס. כאשר מתקרבים לאפס מהצד החיובי, הלוגריתם שואף למינוס אינסוף, ולכן הפונקציה שואפת לפלוס אינסוף.",
        solution_steps: [
            { verbal_explanation: "קביעת תחום ההגדרה המוחלט של הפונקציה המחייב משתנה חיובי לחלוטין (בגלל הלוגריתם).", math_expression: "x > 0" },
            { verbal_explanation: "בדיקת התנהגות הפונקציה בקצה התחום הפתוח (אפס) המהווה אסימפטוטה אנכית פוטנציאלית.", math_expression: "\\lim_{x \\to 0^{+}} f(x)" },
            { verbal_explanation: "הצבת השאיפה לתוך הפונקציה. הלוגריתם באפס חיובי קורס למינוס אינסוף בצורה חדה.", math_expression: "\\lim_{x \\to 0^{+}} (x - \\ln(x)) = 0 - (-\\infty)" },
            { verbal_explanation: "הפיכת הסימנים עקב החיסור מוכיחה שאיפה אסימפטוטית חיובית אינסופית.", math_expression: "+\\infty" },
            { verbal_explanation: "הכרה בכך שאין שום משתנה במכנה ואין שאיפה אופקית (עקב הגידול האינסופי). זוהי האסימפטוטה היחידה.", math_expression: "x = 0" }
        ],
        final_answer: "x = 0 אנכית בלבד"
    },
    {
        topic: "exp_log_472",
        subTopic: "חקירה מלאה (אסימפטוטות אנכיות ואופקיות, קיצון, פיתול)",
        question_text: "נתונה הפונקציה עם הפרמטר: \\( f(x) = a\\ln(x) - x^{2} \\). ידוע כי לפונקציה יש נקודת קיצון שבה שיעור ה-x הוא 2. מצאו את הערך של a.&rlm;",
        options: ["a = 8", "a = 4", "a = 2", "a = 1"],
        correctAnswer: 0,
        hint: "בנקודת קיצון, הנגזרת של הפונקציה מתאפסת. גזרו את הפונקציה תוך שמירת הפרמטר, הציבו בנגזרת את x=2, והשוו לאפס.",
        solution_steps: [
            { verbal_explanation: "ביצוע גזירה תקנית לפונקציה הכוללת פרמטר המהווה מקדם קבוע ואינו נעלם.", math_expression: "f'(x) = a \\times \\dfrac{1}{x} - 2x = \\dfrac{a}{x} - 2x" },
            { verbal_explanation: "הצבת נקודת הקיצון הנתונה בשאלה אל תוך הנגזרת והשוואתה לאפס כמקובל באנליזה.", math_expression: "f'(2) = \\dfrac{a}{2} - 2(2) = 0" },
            { verbal_explanation: "חישוב הפעולות הבסיסיות של המשוואה הליניארית שנוצרה.", math_expression: "\\dfrac{a}{2} - 4 = 0" },
            { verbal_explanation: "העברת מספר אגף לבידוד השבר הכולל את הפרמטר הרצוי.", math_expression: "\\dfrac{a}{2} = 4" },
            { verbal_explanation: "הכפלת המשוואה בשתיים לחילוץ סופי ומוחלט של הפרמטר הנדון.", math_expression: "a = 8" }
        ],
        final_answer: "a = 8"
    },
    {
        topic: "exp_log_472",
        subTopic: "חקירה מלאה (אסימפטוטות אנכיות ואופקיות, קיצון, פיתול)",
        question_text: "מהי משוואת המשיק לגרף הפונקציה \\( f(x) = \\dfrac{e^{x}}{x} \\) בנקודה שבה \\( x = 1 \\)?&rlm;",
        options: ["y = e", "y = ex", "y = ex - e", "y = 0"],
        correctAnswer: 0,
        hint: "הציבו את הערך 1 בפונקציה למציאת ה-y של הנקודה. גזרו בעזרת כלל המנה והציבו 1. השיפוע יתאפס ולכן מדובר במשיק אופקי לחלוטין.",
        solution_steps: [
            { verbal_explanation: "מציאת קואורדינטת הגובה להשקה על ידי הצבה בפונקציית המקור.", math_expression: "f(1) = \\dfrac{e^{1}}{1} = e \\Rightarrow P(1, e)" },
            { verbal_explanation: "גזירת הפונקציה המקורית על ידי יישום כלל המנה המוכר לנו.", math_expression: "f'(x) = \\dfrac{e^{x} \\times x - e^{x} \\times 1}{x^{2}}" },
            { verbal_explanation: "הוצאת גורם משותף מתוך מונה הנגזרת לסידור אלגנטי שיקל על ההצבה.", math_expression: "f'(x) = \\dfrac{e^{x}(x - 1)}{x^{2}}" },
            { verbal_explanation: "הצבת נקודת ההשקה אל תוך הנגזרת כדי לקבל את השיפוע הפיזי של הגרף בנקודה.", math_expression: "m = f'(1) = \\dfrac{e^{1}(1 - 1)}{1^{2}}" },
            { verbal_explanation: "הבנה שהמונה מתאפס עקב כפל באפס (אחת פחות אחת), ולכן השיפוע כולו אופקי לחלוטין.", math_expression: "m = \\dfrac{e \\times 0}{1} = 0" },
            { verbal_explanation: "בניית משוואת הישר על בסיס השיפוע האפסי, שמותיר רק את קבוע הגובה כמקדם יחיד.", math_expression: "y - e = 0(x - 1) \\Rightarrow y = e" }
        ],
        final_answer: "y = e"
    },
    {
        topic: "exp_log_472",
        subTopic: "חקירה מלאה (אסימפטוטות אנכיות ואופקיות, קיצון, פיתול)",
        question_text: "איזה מבין התיאורים הבאים מתאים באופן המדויק ביותר לגרף של הפונקציה המעריכית \\( f(x) = e^{-x^{2}} \\)?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 120' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='100' x2='180' y2='100' stroke='#94a3b8' stroke-width='2'/><line x1='100' y1='10' x2='100' y2='110' stroke='#94a3b8' stroke-width='2'/><path d='M 20 98 Q 70 95, 100 20 T 180 98' fill='none' stroke='#3b82f6' stroke-width='2'/><circle cx='100' cy='20' r='4' fill='#ef4444'/><text x='110' y='25' font-size='12' font-family='Arial'>(0,1)</text></svg></div>",
        options: ["פעמון סימטרי עם מקסימום ב-(0,1)", "פונקציה עולה תמיד החותכת ב-(0,1)", "פונקציה יורדת תמיד החותכת ב-(0,1)", "פרבולה הפוכה עם שורשים ב-1 ומינוס 1"],
        correctAnswer: 0,
        hint: "זוהי פונקציה זוגית (סימטרית) שתמיד חיובית. ככל ש-x גדל לכיוון האינסוף החיובי או השלילי, החזקה נהיית שלילית מאוד, והפונקציה דועכת ל-0.",
        solution_steps: [
            { verbal_explanation: "ניתוח הפונקציה בנקודת האפס מציב את ערך המקסימום הפוטנציאלי שלה על ציר האנך.", math_expression: "f(0) = e^{0} = 1" },
            { verbal_explanation: "בדיקת התנהגות הפונקציה בגבולות האינסופיים מוכיחה דעיכה מהירה לאפס (אסימפטוטה אופקית).", math_expression: "\\lim_{x \\to \\pm\\infty} e^{-x^{2}} = 0" },
            { verbal_explanation: "בדיקת זוגיות מוכיחה סימטריה מלאה סביב ציר הוואי (המינוס נבלע בריבוע).", math_expression: "f(-x) = e^{-(-x)^{2}} = e^{-x^{2}} = f(x)" },
            { verbal_explanation: "גזירה והשוואה לאפס מוכיחה שקיימת רק נקודת קיצון אחת והיא מקסימום מוחלט במרכז.", math_expression: "f'(x) = -2xe^{-x^{2}} = 0 \\Rightarrow x = 0" },
            { verbal_explanation: "המסקנה מכלל הבדיקות מתאימה במדויק לצורת עקומת פעמון גאוס.", math_expression: "Symmetric \\ Bell" }
        ],
        final_answer: "פעמון סימטרי עם מקסימום ב-(0,1)"
    },
    {
        topic: "exp_log_472",
        subTopic: "חקירה מלאה (אסימפטוטות אנכיות ואופקיות, קיצון, פיתול)",
        question_text: "ידוע כי לפונקציה \\( f(x) = x\\ln(x) \\) יש נקודת מינימום מוחלטת והיא עולה מכאן והלאה. מה ניתן לומר על טווח הערכים של הפונקציה (התמונה שלה)?&rlm;",
        options: ["y ≥ -1 : e", "y ≥ 0", "כל y ממשי", "y ≤ -1 : e"],
        correctAnswer: 0,
        hint: "מכיוון שהפונקציה יורדת אל נקודת המינימום היחידה ב- (1/e, -1/e), ולאחר מכן עולה תמיד לכיוון הפלוס אינסוף, הרי שהערך הנמוך ביותר שלה במרחב הוא ערך ה-y של המינימום.",
        solution_steps: [
            { verbal_explanation: "קביעת העובדה התיאורטית שלפונקציה יש מינימום מוחלט בנקודה הנתונה מראש.", math_expression: "Min(e^{-1}, -e^{-1})" },
            { verbal_explanation: "מציאת התנהגות הפונקציה בגבול הימני המרוחק על ידי הצבת מספר אינסופי חיובי.", math_expression: "\\lim_{x \\to \\infty} x\\ln(x) = \\infty \\times \\infty = \\infty" },
            { verbal_explanation: "מסקנה: הפונקציה מקבלת את כלל הערכים מנקודת המינימום ומעלה ללא חסם עליון שמגביל אותה.", math_expression: "f(x) \\geq -e^{-1}" },
            { verbal_explanation: "התאמת המסקנה למבנה הטקסטואלי המוצג בחלופות התשובה.", math_expression: "y \\geq -1 : e" }
        ],
        final_answer: "y ≥ -1 : e"
    },
    {
        topic: "exp_log_472",
        subTopic: "חקירה מלאה (אסימפטוטות אנכיות ואופקיות, קיצון, פיתול)",
        question_text: "האם לפונקציה \\( f(x) = \\ln(x^{2} + 1) \\) יש אסימפטוטות כלשהן (אנכיות או אופקיות)?&rlm;",
        options: ["אין אסימפטוטות כלל", "יש אנכיות ב-x=1 ו-x=-1", "יש אופקית ב-y=0", "יש אופקית ב-y=1"],
        correctAnswer: 0,
        hint: "תחום ההגדרה הוא כל x, כי הביטוי הפנימי תמיד חיובי – ולכן לעולם לא מאפס את הלוגריתם ואין אסימפטוטות אנכיות. באינסוף הפונקציה ממשיכה לגדול ולא מתכנסת.",
        solution_steps: [
            { verbal_explanation: "בדיקת תחום ההגדרה לאיתור אסימפטוטות אנכיות. הביטוי הפנימי הוא סכום של ריבוע ומספר חיובי, ולכן חיובי תמיד.", math_expression: "x^{2} + 1 > 0 \\Rightarrow All \\ x" },
            { verbal_explanation: "מכיוון שאין נקודות אי הגדרה בהן הלוגריתם נשבר לאינסוף, אין אסימפטוטות אנכיות במרחב הנתון.", math_expression: "No \\ Vertical" },
            { verbal_explanation: "בדיקת שאיפת הפונקציה לגבול אינסופי לשם איתור אסימפטוטות אופקיות.", math_expression: "\\lim_{x \\to \\pm\\infty} \\ln(x^{2} + 1) = \\ln(\\infty) = \\infty" },
            { verbal_explanation: "הפונקציה אינה שואפת למספר ממשי אלא מתבדרת וגדלה, לכן גם אסימפטוטות אלו אינן קיימות בנמצא.", math_expression: "No \\ Horizontal" },
            { verbal_explanation: "המסקנה הברורה והסופית של חקירת הגבולות.", math_expression: "\\emptyset" }
        ],
        final_answer: "אין אסימפטוטות כלל"
    },

    // ==========================================
    // תת נושא 6: בעיות גדילה ודעיכה (פונקציה מעריכית רציפה) (10 שאלות)
    // ==========================================

    {
        topic: "exp_log_472",
        subTopic: "בעיות גדילה ודעיכה (פונקציה מעריכית רציפה)",
        question_text: "סכום כסף של 1,000 שקלים מופקד בתוכנית חיסכון הצוברת ריבית דריבית של 5% בשנה (קצב גידול שנתי רציף). מה יהיה הסכום בקירוב לאחר 10 שנים?&rlm;",
        options: ["1629", "1500", "1600", "2000"],
        correctAnswer: 0,
        hint: "השתמשו בנוסחת הגידול המעריכי: הסכום ההתחלתי כפול קבוע הגידול (1.05) בחזקת מספר השנים (10).",
        solution_steps: [
            { verbal_explanation: "הגדרת הנתונים הבסיסיים לבעיית הגדילה: כמות התחלתית, אחוז הגידול וזמן המדידה.", math_expression: "M_{0} = 1000 \\quad , \\quad q = 1.05 \\quad , \\quad t = 10" },
            { verbal_explanation: "הצבת הנתונים בתוך הנוסחה הקלאסית לגידול מעריכי.", math_expression: "M_{t} = M_{0} \\times q^{t}" },
            { verbal_explanation: "הצבת המספרים לתוך התבנית לחישוב פיזי.", math_expression: "M_{10} = 1000 \\times 1.05^{10}" },
            { verbal_explanation: "חישוב מקדם הגידול השלם לאורך כל התקופה.", math_expression: "M_{10} = 1000 \\times 1.62889" },
            { verbal_explanation: "הכפלה בכמות ההתחלתית ועיגול לשקלים שלמים לקבלת התשובה הנקייה.", math_expression: "M_{10} \\approx 1629" }
        ],
        final_answer: "1629"
    },
    {
        topic: "exp_log_472",
        subTopic: "בעיות גדילה ודעיכה (פונקציה מעריכית רציפה)",
        question_text: "אוכלוסיית חיידקים בתרבית גדלה בקצב מעריכי קבוע. בתחילת הניסוי היו בתרבית 10,000 חיידקים. לאחר 4 שעות היו בה 160,000 חיידקים. מהו מקדם הגידול השעתי (q)?&rlm;",
        options: ["q = 2", "q = 4", "q = 1.5", "q = 16"],
        correctAnswer: 0,
        hint: "הציבו את הנתונים בנוסחת הגידול: 160 אלף שווה ל-10 אלפים כפול q בחזקת 4. חלקו והוציאו שורש רביעי.",
        solution_steps: [
            { verbal_explanation: "ארגון הנתונים מהטקסט למונחים מתמטיים של גדילה.", math_expression: "M_{0} = 10000 \\quad , \\quad M_{4} = 160000 \\quad , \\quad t = 4" },
            { verbal_explanation: "בניית המשוואה המעריכית על בסיס הנתונים שנאספו.", math_expression: "160000 = 10000 \\times q^{4}" },
            { verbal_explanation: "חלוקת המשוואה בכמות ההתחלתית לבידוד המקדם יחד עם החזקה.", math_expression: "q^{4} = \\dfrac{160000}{10000} = 16" },
            { verbal_explanation: "הוצאת שורש מסדר רביעי משני האגפים לנטרול המעריך (מקדם גידול חייב להיות חיובי).", math_expression: "q = \\sqrt[4]{16} = 2" },
            { verbal_explanation: "מסקנה: האוכלוסייה מכפילה את עצמה בכל שעה עגולה (מאה אחוז גידול).", math_expression: "q = 2" }
        ],
        final_answer: "q = 2"
    },
    {
        topic: "exp_log_472",
        subTopic: "בעיות גדילה ודעיכה (פונקציה מעריכית רציפה)",
        question_text: "זמן מחצית החיים של חומר רדיואקטיבי הוא 12 שנים. מה תהיה המסה הנותרת מדגימה של 80 גרם לאחר 36 שנים?&rlm;",
        options: ["10", "20", "40", "5"],
        correctAnswer: 0,
        hint: "36 שנים מהוות בדיוק 3 מחזורים של זמן מחצית חיים. בכל מחזור הכמות נחצית.",
        solution_steps: [
            { verbal_explanation: "חישוב מספר מחזורי הדעיכה המלאים שהחומר עבר במהלך התקופה כולה.", math_expression: "Cycles = \\dfrac{36}{12} = 3" },
            { verbal_explanation: "קביעת מקדם הדעיכה לפי המונח 'מחצית חיים'.", math_expression: "q = 0.5" },
            { verbal_explanation: "הצבת כלל הנתונים המעובדים לתוך נוסחת הדעיכה.", math_expression: "M_{t} = 80 \\times 0.5^{3}" },
            { verbal_explanation: "חישוב החזקה השלישית של חצי, המהווה למעשה שמינית.", math_expression: "M_{t} = 80 \\times 0.125 = \\dfrac{80}{8}" },
            { verbal_explanation: "השלמת החלוקה לקבלת המסה הנותרת בגרמים.", math_expression: "M_{t} = 10" }
        ],
        final_answer: "10"
    },
    {
        topic: "exp_log_472",
        subTopic: "בעיות גדילה ודעיכה (פונקציה מעריכית רציפה)",
        question_text: "ערכה של מכונית יורד ב-10% בכל שנה באופן קבוע. המכונית נקנתה חדשה במחיר של 100,000 שקלים. מה יהיה ערכה בדיוק לאחר שנתיים?&rlm;",
        options: ["81,000", "80,000", "90,000", "85,000"],
        correctAnswer: 0,
        hint: "ירידה של 10% פירושה שמקדם הדעיכה הוא 0.9. הכפילו את המחיר ההתחלתי ב-0.9 בחזקת 2.",
        solution_steps: [
            { verbal_explanation: "המרת אחוז הירידה השנתי למקדם דעיכה מתמטי עשרוני המייצג את היתרה.", math_expression: "q = 1 - 0.10 = 0.9" },
            { verbal_explanation: "הצבת מקדם הדעיכה, המחיר המקורי ומספר השנים בנוסחה השגרתית.", math_expression: "M_{2} = 100000 \\times 0.9^{2}" },
            { verbal_explanation: "ביצוע העלאה בריבוע למקדם הדעיכה העשרוני.", math_expression: "M_{2} = 100000 \\times 0.81" },
            { verbal_explanation: "הכפלת הקבוע המספרי ההתחלתי בתוצאת החזקה להשגת הערך המדויק.", math_expression: "M_{2} = 81000" },
            { verbal_explanation: "אישור הפתרון המהווה את ערך המכונית שנותר.", math_expression: "1=1" }
        ],
        final_answer: "81,000"
    },
    {
        topic: "exp_log_472",
        subTopic: "בעיות גדילה ודעיכה (פונקציה מעריכית רציפה)",
        question_text: "אוכלוסייה של עיר גדלה לפי פונקציה מעריכית רציפה מהצורה \\( M(t) = M_{0}e^{kt} \\). מספר התושבים כיום הוא 10,000, וקבוע הגידול הוא k = 0.2. כמה תושבים יהיו בעיר לאחר 5 שנים?&rlm;",
        options: ["10,000e", "20,000e", "10,000", "20,000"],
        correctAnswer: 0,
        hint: "הציבו את כל הנתונים בפונקציה המעריכית הטבעית. המעריך הוא 0.2 כפול 5, שזה בדיוק 1.",
        solution_steps: [
            { verbal_explanation: "בניית משוואת הגדילה המבוססת על בסיס טבעי ומקדם רציף, כפי שהוגדרה בבעיה.", math_expression: "M(5) = 10000 \\times e^{0.2 \\times 5}" },
            { verbal_explanation: "ביצוע ההכפלה בתוך חזקת המעריך.", math_expression: "0.2 \\times 5 = 1" },
            { verbal_explanation: "הצבת מעריך החזקה המפושט חזרה לתוך משוואת האוכלוסייה.", math_expression: "M(5) = 10000 \\times e^{1}" },
            { verbal_explanation: "כתיבת התוצאה הסופית המשלבת קבוע מתמטי והשמטת חזקת האחת כמקובל.", math_expression: "M(5) = 10000e" },
            { verbal_explanation: "סיום.", math_expression: "0=0" }
        ],
        final_answer: "10,000e"
    },
    {
        topic: "exp_log_472",
        subTopic: "בעיות גדילה ודעיכה (פונקציה מעריכית רציפה)",
        question_text: "קרן פנסיה צוברת רווחים בקצב של 5% לשנה (מקדם 1.05). תוך כמה שנים בערך יכפיל סכום הקרן ההתחלתי את עצמו?&rlm;",
        options: ["14.2 שנים", "20 שנים", "10.5 שנים", "12 שנים"],
        correctAnswer: 0,
        hint: "הציבו את הנוסחה: 2 כפול הכמות ההתחלתית שווה לכמות ההתחלתית כפול 1.05 בחזקת t. צמצמו ופתרו את המשוואה המעריכית 2=1.05^t בעזרת לוגריתם.",
        solution_steps: [
            { verbal_explanation: "הגדרת המשוואה המייצגת הכפלה של הסכום הראשוני, תוך קביעת מטרה של פי שתיים.", math_expression: "2M_{0} = M_{0} \\times 1.05^{t}" },
            { verbal_explanation: "חלוקת שני אגפי המשוואה בסכום ההתחלתי, שמצטמצם ומוכיח שזמן ההכפלה אינו תלוי בו.", math_expression: "2 = 1.05^{t}" },
            { verbal_explanation: "הפעלת פונקציית הלוגריתם הטבעי על שני האגפים כדי להוריד את המשתנה ממעמד של חזקה למעמד של מקדם.", math_expression: "\\ln(2) = \\ln(1.05^{t})" },
            { verbal_explanation: "שימוש בחוקי הלוגריתמים להעברת המעריך קדימה.", math_expression: "\\ln(2) = t \\times \\ln(1.05)" },
            { verbal_explanation: "בידוד המשתנה המייצג את הזמן על ידי חלוקה בין הלוגריתמים.", math_expression: "t = \\dfrac{\\ln(2)}{\\ln(1.05)}" },
            { verbal_explanation: "חישוב במחשבון של ערכי הלוגריתמים לקבלת תוצאה עשרונית בקירוב.", math_expression: "t \\approx \\dfrac{0.693}{0.0487} \\approx 14.2" }
        ],
        final_answer: "14.2 שנים"
    },
    {
        topic: "exp_log_472",
        subTopic: "בעיות גדילה ודעיכה (פונקציה מעריכית רציפה)",
        question_text: "חוקר מבצע ניסוי במושבת חיידקים. ידוע כי המושבה גדלה ב-20% מדי יום. לאחר 3 ימים, החוקר ספר במושבה 1080 חיידקים. כמה חיידקים היו במושבה בתחילת הניסוי?&rlm;",
        options: ["625", "500", "750", "800"],
        correctAnswer: 0,
        hint: "מקדם הגידול הוא 1.2. הציבו את הנתונים (הכמות הסופית היא 1080, הזמן הוא 3) בנוסחת הגידול ובודדו את הכמות ההתחלתית.",
        solution_steps: [
            { verbal_explanation: "קביעת מקדם הגידול היומי מתוך אחוז הגידול שהוצג באחוזים.", math_expression: "q = 1 + 0.20 = 1.2" },
            { verbal_explanation: "הצבת נתוני הבעיה הכוללים כמות סופית וזמן בתוך נוסחת הגידול הבסיסית.", math_expression: "1080 = M_{0} \\times 1.2^{3}" },
            { verbal_explanation: "חישוב הערך המדויק של החזקה השלישית של המקדם העשרוני.", math_expression: "1.2^{3} = 1.728" },
            { verbal_explanation: "עדכון המשוואה עם הערך המחושב להכנת חילוץ סופי.", math_expression: "1080 = M_{0} \\times 1.728" },
            { verbal_explanation: "חלוקת הכמות הסופית במקדם השלם כדי למצוא את נקודת ההתחלה של הניסוי.", math_expression: "M_{0} = \\dfrac{1080}{1.728}" },
            { verbal_explanation: "חישוב התוצאה הסופית והמדוייקת של החלוקה.", math_expression: "M_{0} = 625" }
        ],
        final_answer: "625"
    },
    {
        topic: "exp_log_472",
        subTopic: "בעיות גדילה ודעיכה (פונקציה מעריכית רציפה)",
        question_text: "עיר א' מונה 1,000 תושבים וגדלה בקצב של 10% בשנה. עיר ב' מונה 2,000 תושבים וקטנה בקצב של 10% בשנה. כעבור כמה שנים בערך יהיה מספר התושבים בשתי הערים שווה?&rlm;",
        options: ["3.45 שנים", "5.1 שנים", "2 שנים", "7.6 שנים"],
        correctAnswer: 0,
        hint: "בנו שתי משוואות: העיר הראשונה עם מקדם 1.1 והשנייה עם מקדם 0.9. השוו ביניהן ופתרו משוואה מעריכית. חלקו את המעריכים וקבלו בסיס מאוחד.",
        solution_steps: [
            { verbal_explanation: "בניית משוואת הגדילה עבור העיר הראשונה, עם מקדם חיובי.", math_expression: "M_{A} = 1000 \\times 1.1^{t}" },
            { verbal_explanation: "בניית משוואת הדעיכה עבור העיר השנייה, עם מקדם שלילי באותו אחוז.", math_expression: "M_{B} = 2000 \\times 0.9^{t}" },
            { verbal_explanation: "השוואת שתי המשוואות כפי שנדרש למציאת נקודת המפגש במרחב הזמן.", math_expression: "1000 \\times 1.1^{t} = 2000 \\times 0.9^{t}" },
            { verbal_explanation: "סידור המשוואה על ידי חלוקת מספרים לחוד וחלוקת המעריכים לחוד (כינוס בסיסים).", math_expression: "\\dfrac{1.1^{t}}{0.9^{t}} = \\dfrac{2000}{1000}" },
            { verbal_explanation: "איחוד החזקות על בסיס חוקי חזקות של שברים בעלי אותו מעריך.", math_expression: "(\\dfrac{1.1}{0.9})^{t} = 2 \\Rightarrow (\\dfrac{11}{9})^{t} = 2" },
            { verbal_explanation: "הפעלת לוגריתם לחילוץ הזמן מתוך המעריך.", math_expression: "t = \\dfrac{\\ln(2)}{\\ln(\\dfrac{11}{9})}" },
            { verbal_explanation: "חישוב במחשבון של התוצאה הלוגריתמית לקבלת אומדן השנים.", math_expression: "t \\approx 3.45" }
        ],
        final_answer: "3.45 שנים"
    },
    {
        topic: "exp_log_472",
        subTopic: "בעיות גדילה ודעיכה (פונקציה מעריכית רציפה)",
        question_text: "קופת גמל מניבה תשואה שנתית של 12% (מקדם גידול 1.12). מהו בקירוב מקדם הגידול החודשי של הקופה?&rlm;",
        options: ["1.0094", "1.01", "1.012", "1.02"],
        correctAnswer: 0,
        hint: "מקדם הגידול השנתי שווה למקדם הגידול החודשי בחזקת 12 (מספר החודשים בשנה). הוציאו שורש מסדר 12 או העלו את 1.12 בחזקת (1 חלקי 12).",
        solution_steps: [
            { verbal_explanation: "הגדרת הקשר המתמטי בין המקדם השנתי למקדם החודשי הנצבר במשך תריסר מחזורים.", math_expression: "q_{monthly}^{12} = q_{yearly}" },
            { verbal_explanation: "הצבת הנתון השנתי במשוואה הכללית.", math_expression: "q_{monthly}^{12} = 1.12" },
            { verbal_explanation: "נטרול החזקה על ידי הוצאת שורש מהסדר המתאים, המקביל להעלאה בחזקת ההופכי.", math_expression: "q_{monthly} = \\sqrt[12]{1.12} = 1.12^{\\dfrac{1}{12}}" },
            { verbal_explanation: "הפעלת המחשבון לחישוב הפעולה האירציונלית המורכבת.", math_expression: "q_{monthly} \\approx 1.009488" },
            { verbal_explanation: "עיגול המספר בהתאם לחלופות המוצעות.", math_expression: "q_{monthly} \\approx 1.0094" }
        ],
        final_answer: "1.0094"
    },
    {
        topic: "exp_log_472",
        subTopic: "בעיות גדילה ודעיכה (פונקציה מעריכית רציפה)",
        question_text: "חומר רדיואקטיבי שוקל בתחילת תהליך המדידה 200 גרם. לאחר 30 ימים, נותרים ממנו 25 גרם בלבד. מהו זמן 'מחצית החיים' של חומר זה?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 120' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='100' x2='180' y2='100' stroke='#94a3b8' stroke-width='2'/><line x1='40' y1='10' x2='40' y2='110' stroke='#94a3b8' stroke-width='2'/><path d='M 40 20 Q 80 80, 160 90' fill='none' stroke='#3b82f6' stroke-width='2'/><circle cx='40' cy='20' r='4' fill='#ef4444'/><circle cx='160' cy='90' r='4' fill='#ef4444'/><text x='50' y='25' font-size='12' font-family='Arial'>200g (t=0)</text><text x='110' y='80' font-size='12' font-family='Arial'>25g (t=30)</text></svg></div>",
        options: ["10 ימים", "5 ימים", "15 ימים", "7.5 ימים"],
        correctAnswer: 0,
        hint: "חשבו כמה פעמים נחצתה הכמות ההתחלתית (200) עד שהגיעה ל-25 (למשל: 200 -> 100 -> 50 -> 25). מספר החציות הוא מספר מחזורי 'מחצית החיים' שנכנסים ב-30 ימים.",
        solution_steps: [
            { verbal_explanation: "הצבת הנתונים בנוסחת הדעיכה מבוססת החציות כדי למצוא כמה מחזורים שלמים עברו.", math_expression: "200 \\times (\\dfrac{1}{2})^{n} = 25" },
            { verbal_explanation: "חלוקת שני אגפי המשוואה במסה ההתחלתית.", math_expression: "(\\dfrac{1}{2})^{n} = \\dfrac{25}{200}" },
            { verbal_explanation: "צמצום השבר הגיאומטרי שנוצר באגף ימין למבנה הבסיסי ביותר שלו.", math_expression: "(\\dfrac{1}{2})^{n} = \\dfrac{1}{8}" },
            { verbal_explanation: "המרת השבר לחזקה של חצי כדי להשוות בסיסים, וחילוץ מספר המחזורים הכולל.", math_expression: "(\\dfrac{1}{2})^{n} = (\\dfrac{1}{2})^{3} \\Rightarrow n = 3" },
            { verbal_explanation: "הבנה ששלושים יום מייצגים בדיוק שלושה מחזורי חיים שלמים.", math_expression: "3 \\times T_{half} = 30" },
            { verbal_explanation: "חלוקה בשלוש לבידוד הזמן הלוקח למחזור דעיכה יחיד.", math_expression: "T_{half} = \\dfrac{30}{3} = 10" }
        ],
        final_answer: "10 ימים"
    }
];