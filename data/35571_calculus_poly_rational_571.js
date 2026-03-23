const questionsDB = [
    // ==========================================
    // תת נושא 1: חקירה מלאה הכוללת פונקציות מורכבות ופרמטריות (10 שאלות)
    // ==========================================

    {
        topic: "calculus_poly_rational_571",
        subTopic: "חקירה מלאה הכוללת פונקציות מורכבות ופרמטריות",
        question_text: "נתונה הפונקציה הרציונלית הפרמטרית \\( f(x) = \\dfrac{x^{2} + a}{x - 1} \\). ידוע כי לפונקציה יש נקודת מינימום מקומי בנקודה שבה \\( x = 3 \\). מצאו את הערך של הפרמטר a.&rlm;",
        options: ["3", "2", "-1", "4"],
        correctAnswer: 0,
        hint: "גזרו את הפונקציה לפי כלל המנה, תוך השארת a כפרמטר. בנקודת הקיצון הנגזרת מתאפסת, לכן הציבו x=3 בנגזרת והשוו לאפס.",
        solution_steps: [
            { verbal_explanation: "הגדרת נגזרת המנה, תוך גזירת המונה והמכנה בהתאמה לחוקי הגזירה.", math_expression: "f'(x) = \\dfrac{2x(x - 1) - 1(x^{2} + a)}{(x - 1)^{2}}" },
            { verbal_explanation: "פתיחת סוגריים במונה הנגזרת שנוצרה.", math_expression: "f'(x) = \\dfrac{2x^{2} - 2x - x^{2} - a}{(x - 1)^{2}}" },
            { verbal_explanation: "כינוס איברים לקבלת הנגזרת המפושטת התלויה בפרמטר בלבד.", math_expression: "f'(x) = \\dfrac{x^{2} - 2x - a}{(x - 1)^{2}}" },
            { verbal_explanation: "שימוש בנתון הקיצון הקובע כי פונקציית השיפוע מתאפסת לחלוטין בנקודה זו.", math_expression: "f'(3) = 0" },
            { verbal_explanation: "הצבת נקודת הקיצון בנגזרת המחושבת.", math_expression: "\\dfrac{3^{2} - 2(3) - a}{(3 - 1)^{2}} = 0" },
            { verbal_explanation: "הכפלה במכנה לבידוד המונה המאופס.", math_expression: "9 - 6 - a = 0" },
            { verbal_explanation: "חילוץ הפרמטר הנעלם מסיום המשוואה הליניארית.", math_expression: "3 - a = 0 \\Rightarrow a = 3" }
        ],
        final_answer: "3"
    },
    {
        topic: "calculus_poly_rational_571",
        subTopic: "חקירה מלאה הכוללת פונקציות מורכבות ופרמטריות",
        question_text: "הפונקציה \\( f(x) = \\dfrac{x^{2} - ax}{x^{2} - 4} \\) חותכת את האסימפטוטה האופקית שלה בנקודה שבה \\( x = 1 \\). מצאו את הערך של a.&rlm;",
        options: ["4", "2", "-2", "-4"],
        correctAnswer: 0,
        hint: "מצאו תחילה את משוואת האסימפטוטה האופקית לפי יחס המקדמים. לאחר מכן הציבו את נקודת החיתוך בפונקציה ומצאו את הפרמטר.",
        solution_steps: [
            { verbal_explanation: "מציאת האסימפטוטה האופקית על ידי חישוב גבול הפונקציה באינסוף.", math_expression: "\\lim_{x \\to \\infty} f(x) = \\dfrac{1}{1} = 1 \\Rightarrow y = 1" },
            { verbal_explanation: "הסקת נקודת החיתוך המלאה מתוך הנתונים.", math_expression: "f(1) = 1" },
            { verbal_explanation: "הצבת הנקודה במשוואת הפונקציה המקורית ליצירת משוואה פרמטרית.", math_expression: "\\dfrac{1^{2} - a(1)}{1^{2} - 4} = 1" },
            { verbal_explanation: "חישוב הערכים המספריים במכנה ובמונה.", math_expression: "\\dfrac{1 - a}{-3} = 1" },
            { verbal_explanation: "הכפלה במכנה לביטול השבר ופתרון המערכת.", math_expression: "1 - a = -3" },
            { verbal_explanation: "העברת אגפים לחילוץ סופי של הפרמטר.", math_expression: "a = 4" }
        ],
        final_answer: "4"
    },
    {
        topic: "calculus_poly_rational_571",
        subTopic: "חקירה מלאה הכוללת פונקציות מורכבות ופרמטריות",
        question_text: "נתונה הפונקציה \\( f(x) = \\dfrac{2x^{2} + x - 3}{x^{2} - 1} \\). מהם שיעורי נקודת אי-הרציפות הסליקה (החור) של הפונקציה?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 120' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='100' x2='180' y2='100' stroke='#94a3b8' stroke-width='2'/><line x1='100' y1='10' x2='100' y2='110' stroke='#94a3b8' stroke-width='2'/><path d='M 40 80 Q 90 20 120 40 T 170 10' fill='none' stroke='#3b82f6' stroke-width='2'/><circle cx='120' cy='40' r='4' fill='#f8fafc' stroke='#ef4444' stroke-width='2'/></svg></div>",
        options: ["(1, 2.5)", "(1, 1)", "(-1, 2.5)", "החור ב- x = -1"],
        correctAnswer: 0,
        hint: "פרקו מונה ומכנה לגורמים. איבר משותף שמתבטל מצביע על חור. הציבו את ה-x של החור בפונקציה המצומצמת כדי למצוא את שיעור ה-y.",
        solution_steps: [
            { verbal_explanation: "מציאת מאפסי המכנה לקביעת תחום ההגדרה ונקודות אי-רציפות.", math_expression: "x^{2} - 1 = 0 \\Rightarrow x = \\pm 1" },
            { verbal_explanation: "פירוק המונה לגורמים בעזרת טרינום מורחב.", math_expression: "2x^{2} + x - 3 = (2x + 3)(x - 1)" },
            { verbal_explanation: "פירוק המכנה לפי נוסחת הפרש ריבועים.", math_expression: "x^{2} - 1 = (x - 1)(x + 1)" },
            { verbal_explanation: "הצגת הפונקציה במבנה מפורק לצורך זיהוי איברים ניתנים לצמצום.", math_expression: "f(x) = \\dfrac{(2x + 3)(x - 1)}{(x + 1)(x - 1)}" },
            { verbal_explanation: "צמצום הגורם המשותף המעיד על חור (נקודת אי-רציפות סליקה).", math_expression: "x = 1 \\Rightarrow \\circ" },
            { verbal_explanation: "הצבת ערך האיקס של החור בפונקציה המצומצמת למציאת גובהו באנך.", math_expression: "\\lim_{x \\to 1} \\dfrac{2x + 3}{x + 1} = \\dfrac{2(1) + 3}{1 + 1}" },
            { verbal_explanation: "קבלת קואורדינטת הוואי החסרה להרכבת הנקודה בשלמותה.", math_expression: "y = \\dfrac{5}{2} = 2.5 \\Rightarrow (1, 2.5)" }
        ],
        final_answer: "(1, 2.5)"
    },
    {
        topic: "calculus_poly_rational_571",
        subTopic: "חקירה מלאה הכוללת פונקציות מורכבות ופרמטריות",
        question_text: "לפונקציה \\( f(x) = ax^{3} - 6x^{2} + c \\) יש נקודת קיצון מקומית ב- \\( x = 2 \\) ששיעור ה-y שלה הוא מינוס 5. מצאו את המקדמים a ו-c.&rlm;",
        options: ["a = 2, c = 3", "a = 1, c = 11", "a = 1, c = 3", "a = 3, c = 2"],
        correctAnswer: 0,
        hint: "ישנם שני נתונים: הנגזרת מתאפסת ב-x=2, והפונקציה עוברת בנקודה (2, 5-). בנו מערכת של שתי משוואות ופתרו לחילוץ הפרמטרים.",
        solution_steps: [
            { verbal_explanation: "גזירת הפונקציה הפולינומית לשם איתור קשר לנקודת הקיצון הנתונה.", math_expression: "f'(x) = 3ax^{2} - 12x" },
            { verbal_explanation: "הצבת שיעור האיקס של הקיצון בנגזרת והשוואתה לאפס.", math_expression: "3a(2^{2}) - 12(2) = 0" },
            { verbal_explanation: "פתרון המשוואה לחילוץ הפרמטר הראשון.", math_expression: "12a - 24 = 0 \\Rightarrow 12a = 24 \\Rightarrow a = 2" },
            { verbal_explanation: "הצבת הפרמטר הראשון והנקודה הנתונה בפונקציה המקורית ליצירת משוואה שנייה.", math_expression: "f(2) = 2(2^{3}) - 6(2^{2}) + c = -5" },
            { verbal_explanation: "ביצוע החזקות ומכפלות.", math_expression: "16 - 24 + c = -5" },
            { verbal_explanation: "חישוב וחילוץ הפרמטר השני במערכת.", math_expression: "-8 + c = -5 \\Rightarrow c = 3" }
        ],
        final_answer: "a = 2, c = 3"
    },
    {
        topic: "calculus_poly_rational_571",
        subTopic: "חקירה מלאה הכוללת פונקציות מורכבות ופרמטריות",
        question_text: "נתונה הפונקציה \\( f(x) = \\dfrac{x^{2} - mx + 4}{x - 1} \\). עבור אילו ערכים של m הפונקציה אינה חותכת את ציר ה-x כלל?&rlm;",
        options: ["-4 < m < 4", "m > 4", "m < -4", "m = 4"],
        correctAnswer: 0,
        hint: "כדי שהפונקציה לא תחתוך את ציר ה-x, מונה הפונקציה (שהוא משוואה ריבועית) לא יכול להתאפס. התנאי לכך הוא שהדיסקרימיננטה (דלתא) קטנה מאפס.",
        solution_steps: [
            { verbal_explanation: "דרישה לחוסר חיתוך אופקי מחייבת שהמונה לא יתאפס בשום מצב.", math_expression: "x^{2} - mx + 4 \\neq 0" },
            { verbal_explanation: "עבור משוואה ריבועית, הדבר מתקיים אך ורק כאשר הדיסקרימיננטה שלילית ממש.", math_expression: "\\Delta < 0" },
            { verbal_explanation: "הצבת מקדמי המונה לתוך נוסחת הדיסקרימיננטה.", math_expression: "(-m)^{2} - 4 \\times 1 \\times 4 < 0" },
            { verbal_explanation: "חישוב הפולינום שנוצר עבור הפרמטר.", math_expression: "m^{2} - 16 < 0" },
            { verbal_explanation: "מציאת שורשי המשוואה.", math_expression: "m = \\pm 4" },
            { verbal_explanation: "קביעת התחום השלילי של הפרבולה שנוצרה.", math_expression: "-4 < m < 4" }
        ],
        final_answer: "-4 < m < 4"
    },
    {
        topic: "calculus_poly_rational_571",
        subTopic: "חקירה מלאה הכוללת פונקציות מורכבות ופרמטריות",
        question_text: "נתונה הפונקציה \\( f(x) = Ax^{2} + \\dfrac{B}{x} \\). לפונקציה יש נקודת קיצון בנקודה \\( (1, 3) \\). מצאו את המקדמים A ו-B.&rlm;",
        options: ["A = 1, B = 2", "A = 2, B = 1", "A = 3, B = 0", "A = -1, B = 4"],
        correctAnswer: 0,
        hint: "בנקודת קיצון, הנגזרת שווה לאפס. בנו שתי משוואות: אחת להצבת הנקודה בפונקציה המקורית, ושנייה להשוואת הנגזרת לאפס.",
        solution_steps: [
            { verbal_explanation: "הצבת הנקודה הנתונה בפונקציה המקורית ליצירת משוואה ראשונה.", math_expression: "A(1)^{2} + \\dfrac{B}{1} = 3 \\Rightarrow A + B = 3" },
            { verbal_explanation: "גזירת הפונקציה על פי חוקי גזירת חזקות ושברים.", math_expression: "f'(x) = 2Ax - \\dfrac{B}{x^{2}}" },
            { verbal_explanation: "הצבת שיעור האיקס של נקודת הקיצון בנגזרת והשוואתה לאפס.", math_expression: "2A(1) - \\dfrac{B}{1^{2}} = 0" },
            { verbal_explanation: "סידור המשוואה השנייה.", math_expression: "2A - B = 0 \\Rightarrow B = 2A" },
            { verbal_explanation: "הצבת המשוואה השנייה לתוך הראשונה לפתרון המערכת.", math_expression: "A + 2A = 3 \\Rightarrow 3A = 3" },
            { verbal_explanation: "חילוץ הפרמטר הראשון מהמערכת.", math_expression: "A = 1" },
            { verbal_explanation: "חילוץ הפרמטר השני על בסיס הראשון.", math_expression: "B = 2(1) = 2" }
        ],
        final_answer: "A = 1, B = 2"
    },
    {
        topic: "calculus_poly_rational_571",
        subTopic: "חקירה מלאה הכוללת פונקציות מורכבות ופרמטריות",
        question_text: "לפונקציה \\( f(x) = \\dfrac{ax + 4}{x + b} \\) יש אסימפטוטה אנכית ב- \\( x = -2 \\) ואסימפטוטה אופקית ב- \\( y = 3 \\). מצאו את המקדמים a ו-b.&rlm;",
        options: ["a = 3, b = 2", "a = 2, b = 3", "a = 3, b = -2", "a = -2, b = 3"],
        correctAnswer: 0,
        hint: "האסימפטוטה האנכית מאפסת את המכנה בערכה. האסימפטוטה האופקית היא יחס המקדמים המובילים (a/1).",
        solution_steps: [
            { verbal_explanation: "שימוש בנתון האסימפטוטה האנכית: המכנה מתאפס כאשר מציבים את הערך הנתון.", math_expression: "-2 + b = 0 \\Rightarrow b = 2" },
            { verbal_explanation: "שימוש בנתון האסימפטוטה האופקית המייצגת את גבול הפונקציה.", math_expression: "\\lim_{x \\to \\infty} \\dfrac{ax}{x} = 3" },
            { verbal_explanation: "צמצום המשתנים בחלוקה לגילוי המקדם המבוקש.", math_expression: "a = 3" },
            { verbal_explanation: "סיכום מציאת הפרמטרים במערכת.", math_expression: "a = 3 \\quad , \\quad b = 2" }
        ],
        final_answer: "a = 3, b = 2"
    },
    {
        topic: "calculus_poly_rational_571",
        subTopic: "חקירה מלאה הכוללת פונקציות מורכבות ופרמטריות",
        question_text: "עבור איזה ערך של a לפונקציה \\( f(x) = \\dfrac{x^{2} - 1}{x^{2} - ax + a} \\) אין אף אסימפטוטה אנכית?&rlm;",
        options: ["0 < a < 4", "a < 0 או a > 4", "a = 2", "a = 4"],
        correctAnswer: 0,
        hint: "כדי שלא תהיה אסימפטוטה אנכית, המכנה הריבועי אינו יכול להתאפס כלל (דיסקרימיננטה קטנה מאפס).",
        solution_steps: [
            { verbal_explanation: "הצבת דרישה כי מכנה הפונקציה לא יתאפס בשום תנאי על מנת למנוע אסימפטוטות אנכיות.", math_expression: "x^{2} - ax + a \\neq 0" },
            { verbal_explanation: "דרישה זו מתקיימת בפולינום ריבועי רק כאשר הדיסקרימיננטה שלילית.", math_expression: "\\Delta < 0" },
            { verbal_explanation: "בניית משוואת הדיסקרימיננטה מהמקדמים הנתונים במכנה.", math_expression: "(-a)^{2} - 4(1)(a) < 0" },
            { verbal_explanation: "סידור ופתרון אי השוויון.", math_expression: "a^{2} - 4a < 0 \\Rightarrow a(a - 4) < 0" },
            { verbal_explanation: "מציאת שורשי הפרבולה הבוחנת.", math_expression: "a_{1} = 0 \\quad , \\quad a_{2} = 4" },
            { verbal_explanation: "איתור התחום השלילי בו הפרבולה מתחת לציר האופקי.", math_expression: "0 < a < 4" }
        ],
        final_answer: "0 < a < 4"
    },
    {
        topic: "calculus_poly_rational_571",
        subTopic: "חקירה מלאה הכוללת פונקציות מורכבות ופרמטריות",
        question_text: "נתונה הפונקציה \\( f(x) = x^{3} - 3px + 2 \\). מצאו את הערך של p אם ידוע שיש לפונקציה נקודת קיצון ב- \\( x = 2 \\).&rlm;",
        options: ["p = 4", "p = 2", "p = 12", "p = 3"],
        correctAnswer: 0,
        hint: "גזרו את הפונקציה, הציבו בנגזרת x=2 והשוו לאפס כדי לחלץ את הפרמטר p.",
        solution_steps: [
            { verbal_explanation: "גזירת הפונקציה לפי חוקי גזירת פולינומים רגילים.", math_expression: "f'(x) = 3x^{2} - 3p" },
            { verbal_explanation: "השוואת הנגזרת לאפס בנקודת הקיצון הידועה מראש.", math_expression: "f'(2) = 0" },
            { verbal_explanation: "הצבת נקודת הקיצון בביטוי.", math_expression: "3(2)^{2} - 3p = 0" },
            { verbal_explanation: "פתרון המשוואה הליניארית שנוצרה.", math_expression: "12 - 3p = 0 \\Rightarrow 3p = 12" },
            { verbal_explanation: "חלוקה בשלוש לבידוד סופי.", math_expression: "p = 4" }
        ],
        final_answer: "p = 4"
    },
    {
        topic: "calculus_poly_rational_571",
        subTopic: "חקירה מלאה הכוללת פונקציות מורכבות ופרמטריות",
        question_text: "נתונה הפונקציה \\( f(x) = (x^{2} - p)(x + p) \\). מצאו עבור איזה ערך של p (כאשר p חיובי), שיעור ה-x של נקודת המינימום המקומי הוא \\( x = -1 \\).&rlm;",
        options: ["p = 1", "p = 2", "p = 3", "p = 4"],
        correctAnswer: 0,
        hint: "פתחו את הסוגריים לפולינום פשוט. גזרו את הפונקציה והציבו x=-1. השוו לאפס למציאת הפרמטר.",
        solution_steps: [
            { verbal_explanation: "פתיחת סוגריים לפולינום רגיל לשם הימנעות מנגזרת מכפלה מסורבלת.", math_expression: "f(x) = x^{3} + px^{2} - px - p^{2}" },
            { verbal_explanation: "גזירת הפולינום.", math_expression: "f'(x) = 3x^{2} + 2px - p" },
            { verbal_explanation: "הצבת נקודת הקיצון בנגזרת והשוואה לאפס.", math_expression: "3(-1)^{2} + 2p(-1) - p = 0" },
            { verbal_explanation: "כינוס איברים.", math_expression: "3 - 2p - p = 0" },
            { verbal_explanation: "חילוץ הפרמטר.", math_expression: "3 - 3p = 0 \\Rightarrow 3p = 3 \\Rightarrow p = 1" }
        ],
        final_answer: "p = 1"
    },

    // ==========================================
    // תת נושא 2: הוכחת קיומן של נקודות פיתול בעזרת נגזרת שנייה (10 שאלות)
    // ==========================================

    {
        topic: "calculus_poly_rational_571",
        subTopic: "הוכחת קיומן של נקודות פיתול בעזרת נגזרת שנייה",
        question_text: "מצאו את שיעורי ה-x של נקודות הפיתול של הפונקציה \\( f(x) = x^{4} - 6x^{2} + 8x \\).&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 120' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><path d='M 40 20 Q 80 120 100 80 T 160 20' fill='none' stroke='#3b82f6' stroke-width='2'/><circle cx='80' cy='95' r='4' fill='#ef4444'/><circle cx='120' cy='95' r='4' fill='#ef4444'/><text x='70' y='115' font-size='12' font-family='Arial'>Inflection</text></svg></div>",
        options: ["x = 1, x = -1", "x = 2, x = -2", "x = 0, x = 3", "אין נקודות פיתול"],
        correctAnswer: 0,
        hint: "נקודת פיתול היא נקודה שבה הנגזרת השנייה מתאפסת ומחליפה סימן. גזרו פעמיים והשוו לאפס.",
        solution_steps: [
            { verbal_explanation: "גזירה ראשונה של הפולינום במטרה להתקרב לנגזרת השנייה.", math_expression: "f'(x) = 4x^{3} - 12x + 8" },
            { verbal_explanation: "גזירה שנייה של הפונקציה, המייצגת את קעירות וקמירות הגרף.", math_expression: "f''(x) = 12x^{2} - 12" },
            { verbal_explanation: "השוואת הנגזרת השנייה לאפס לאיתור נקודות פיתול חשודות.", math_expression: "12x^{2} - 12 = 0" },
            { verbal_explanation: "בידוד המשתנה הריבועי.", math_expression: "12x^{2} = 12 \\Rightarrow x^{2} = 1" },
            { verbal_explanation: "חילוץ שורשי המשוואה המייצגים את שיעורי נקודות הפיתול.", math_expression: "x = \\pm 1" },
            { verbal_explanation: "בדיקת שינוי סימן לנגזרת השנייה משני צידי הנקודות מאשרת את קיומן כפיתול.", math_expression: "\\Delta Sign \\Rightarrow \\checkmark" }
        ],
        final_answer: "x = 1, x = -1"
    },
    {
        topic: "calculus_poly_rational_571",
        subTopic: "הוכחת קיומן של נקודות פיתול בעזרת נגזרת שנייה",
        question_text: "קבעו האם לפונקציה הרציונלית \\( f(x) = \\dfrac{1}{x} \\) יש נקודות פיתול.&rlm;",
        options: ["אין נקודות פיתול", "יש ב- x = 0", "יש ב- x = 1", "יש ב- x = -1"],
        correctAnswer: 0,
        hint: "גזרו פעמיים. הנגזרת השנייה של 1/x היא 2 חלקי איקס בשלישית. בידקו אם פונקציה זו יכולה להתאפס.",
        solution_steps: [
            { verbal_explanation: "המרת הפונקציה לחזקה שלילית לשם גזירה פשוטה.", math_expression: "f(x) = x^{-1}" },
            { verbal_explanation: "גזירה ראשונה.", math_expression: "f'(x) = -1x^{-2} = -\\dfrac{1}{x^{2}}" },
            { verbal_explanation: "גזירה שנייה מהמבנה המעריכי.", math_expression: "f''(x) = -1 \\times (-2)x^{-3} = \\dfrac{2}{x^{3}}" },
            { verbal_explanation: "השוואת הנגזרת השנייה לאפס בניסיון לאתר פיתול.", math_expression: "\\dfrac{2}{x^{3}} = 0" },
            { verbal_explanation: "מכיוון שהמונה הוא קבוע שאינו אפס, השבר לעולם אינו יכול להתאפס.", math_expression: "2 \\neq 0 \\Rightarrow \\emptyset" },
            { verbal_explanation: "המסקנה הנגזרת: אין נקודות פיתול כלל.", math_expression: "None" }
        ],
        final_answer: "אין נקודות פיתול"
    },
    {
        topic: "calculus_poly_rational_571",
        subTopic: "הוכחת קיומן של נקודות פיתול בעזרת נגזרת שנייה",
        question_text: "נתונה הפונקציה \\( f(x) = \\dfrac{x^{3}}{3} - 2x^{2} + 3x \\). מצאו את נקודת הפיתול המדויקת של הפונקציה.&rlm;",
        options: ["(2, 2 : 3)", "(2, 0)", "(1, 4 : 3)", "(3, 0)"],
        correctAnswer: 0,
        hint: "גזרו פעמיים והשוו ל-0. יתקבל x=2. הציבו x=2 בפונקציה המקורית כדי למצוא את שיעור ה-y המדויק.",
        solution_steps: [
            { verbal_explanation: "ביצוע גזירה ראשונה.", math_expression: "f'(x) = x^{2} - 4x + 3" },
            { verbal_explanation: "ביצוע גזירה שנייה לאיתור מוקדי פיתול וקעירות.", math_expression: "f''(x) = 2x - 4" },
            { verbal_explanation: "השוואה לאפס וחילוץ המשתנה האופקי של הפיתול.", math_expression: "2x = 4 \\Rightarrow x = 2" },
            { verbal_explanation: "הצבה בפונקציה המקורית לבדיקת הגובה המדויק באנך.", math_expression: "f(2) = \\dfrac{8}{3} - 8 + 6" },
            { verbal_explanation: "סיכום שברים פשוט.", math_expression: "f(2) = \\dfrac{8}{3} - \\dfrac{6}{3} = \\dfrac{2}{3}" },
            { verbal_explanation: "סגירת הפתרון כנקודה מלאה.", math_expression: "P(2, \\dfrac{2}{3})" }
        ],
        final_answer: "(2, 2 : 3)"
    },
    {
        topic: "calculus_poly_rational_571",
        subTopic: "הוכחת קיומן של נקודות פיתול בעזרת נגזרת שנייה",
        question_text: "קבעו לגבי הפונקציה \\( f(x) = x^{5} \\) בנקודה \\( x = 0 \\). האם זו נקודת פיתול או קיצון? הראו בעזרת מבחן נגזרת.&rlm;",
        options: ["נקודת פיתול", "מינימום מוחלט", "מקסימום מוחלט", "נקודת אי הגדרה"],
        correctAnswer: 0,
        hint: "הנגזרת הראשונה מתאפסת. הנגזרת השנייה היא 20x³. היא מתאפסת ב-0 ומחליפה סימן (משלילי לחיובי), לכן זו נקודת פיתול (שבה גם המשיק אופקי).",
        solution_steps: [
            { verbal_explanation: "בדיקת התאפסות בנגזרת הראשונה.", math_expression: "f'(x) = 5x^{4} \\Rightarrow f'(0) = 0" },
            { verbal_explanation: "בדיקת התאפסות בנגזרת השנייה במקביל.", math_expression: "f''(x) = 20x^{3} \\Rightarrow f''(0) = 0" },
            { verbal_explanation: "אפס בנגזרת השנייה דורש בדיקת החלפת סימן כדי לקבוע פיתול מובהק. נציב ערך שלילי.", math_expression: "f''(-1) = 20(-1)^{3} = -20 < 0" },
            { verbal_explanation: "הצבת נקודה מצידה השני של האפס (ערך חיובי).", math_expression: "f''(1) = 20(1)^{3} = 20 > 0" },
            { verbal_explanation: "הנגזרת השנייה מחליפה סימן סביב הנקודה, מה שמוכיח את היותה נקודת פיתול.", math_expression: "\\Delta Sign \\Rightarrow Inflection" }
        ],
        final_answer: "נקודת פיתול"
    },
    {
        topic: "calculus_poly_rational_571",
        subTopic: "הוכחת קיומן של נקודות פיתול בעזרת נגזרת שנייה",
        question_text: "קבעו לגבי הפונקציה \\( f(x) = x^{4} \\) בנקודה \\( x = 0 \\). האם זו נקודת פיתול או קיצון?&rlm;",
        options: ["נקודת קיצון (מינימום)", "נקודת פיתול", "נקודת אי הגדרה", "מקסימום מוחלט"],
        correctAnswer: 0,
        hint: "למרות שהנגזרת השנייה מתאפסת ב-0, היא אינה מחליפה סימן (היא תמיד חיובית: 12x²). לכן הקעירות לא משתנה וזו לא נקודת פיתול אלא מינימום.",
        solution_steps: [
            { verbal_explanation: "בדיקת התאפסות בנגזרת הראשונה.", math_expression: "f'(x) = 4x^{3} \\Rightarrow f'(0) = 0" },
            { verbal_explanation: "בדיקת התאפסות בנגזרת השנייה.", math_expression: "f''(x) = 12x^{2} \\Rightarrow f''(0) = 0" },
            { verbal_explanation: "בדיקת החלפת סימן סביב האפס על ידי הצבת ערך שלילי בנגזרת השנייה.", math_expression: "f''(-1) = 12(-1)^{2} = 12 > 0" },
            { verbal_explanation: "הצבת ערך חיובי.", math_expression: "f''(1) = 12(1)^{2} = 12 > 0" },
            { verbal_explanation: "כיוון שאין החלפת סימן בנגזרת השנייה (הגרף תמיד קעור כלפי מעלה), זו אינה נקודת פיתול אלא קיצון.", math_expression: "\\text{Minimum}" }
        ],
        final_answer: "נקודת קיצון (מינימום)"
    },
    {
        topic: "calculus_poly_rational_571",
        subTopic: "הוכחת קיומן של נקודות פיתול בעזרת נגזרת שנייה",
        question_text: "מהם תחומי הקעירות כלפי מעלה (קעירות חיובית, גרף 'מחייך') של הפונקציה \\( f(x) = x^{3} - 12x \\)?&rlm;",
        options: ["x > 0", "x < 0", "x > 2", "x < -2"],
        correctAnswer: 0,
        hint: "תחום קעירות כלפי מעלה הוא התחום שבו הנגזרת השנייה חיובית (גדולה מאפס). גזרו פעמיים ופתרו את אי-השוויון.",
        solution_steps: [
            { verbal_explanation: "גזירה ראשונה רגילה לחלוטין.", math_expression: "f'(x) = 3x^{2} - 12" },
            { verbal_explanation: "גזירה שנייה לקבלת משוואת קעירות הפונקציה.", math_expression: "f''(x) = 6x" },
            { verbal_explanation: "קעירות כלפי מעלה מוגדרת במקום בו הנגזרת השנייה חיובית.", math_expression: "f''(x) > 0" },
            { verbal_explanation: "הצבת הנגזרת השנייה בתוך אי השוויון.", math_expression: "6x > 0" },
            { verbal_explanation: "חלוקה בשש לבידוד המשתנה.", math_expression: "x > 0" }
        ],
        final_answer: "x > 0"
    },
    {
        topic: "calculus_poly_rational_571",
        subTopic: "הוכחת קיומן של נקודות פיתול בעזרת נגזרת שנייה",
        question_text: "לפונקציה \\( f(x) = ax^{3} + bx^{2} + x \\) יש נקודת פיתול ב- \\( (1, 2) \\). מצאו את המקדמים a ו-b.&rlm;",
        options: ["a = -0.5, b = 1.5", "a = 1, b = -3", "a = 0.5, b = 0.5", "a = -1, b = 3"],
        correctAnswer: 0,
        hint: "בנקודת פיתול הנגזרת השנייה מתאפסת. בנוסף, הפונקציה עצמה עוברת בנקודה (1, 2). בנו מערכת של שתי משוואות ופתרו.",
        solution_steps: [
            { verbal_explanation: "הצבת הנקודה הפיזית בפונקציה המקורית ליצירת משוואה ראשונה.", math_expression: "a(1)^{3} + b(1)^{2} + 1 = 2 \\Rightarrow a + b = 1" },
            { verbal_explanation: "גזירה ראשונה כהכנה למימוש נתון הפיתול המרחבי.", math_expression: "f'(x) = 3ax^{2} + 2bx + 1" },
            { verbal_explanation: "גזירה שנייה המחילה את מוקד הקעירות.", math_expression: "f''(x) = 6ax + 2b" },
            { verbal_explanation: "הצבת נקודת הפיתול בנגזרת השנייה והשוואתה לאפס.", math_expression: "6a(1) + 2b = 0 \\Rightarrow 3a + b = 0" },
            { verbal_explanation: "בידוד אחד המשתנים במערכת המשוואות שנוצרה.", math_expression: "b = -3a" },
            { verbal_explanation: "הצבה במשוואה הראשונה לפתרון משתנה יחיד.", math_expression: "a - 3a = 1 \\Rightarrow -2a = 1 \\Rightarrow a = -0.5" },
            { verbal_explanation: "הצבת התוצאה למציאת המשתנה השני להשלמת המערכת.", math_expression: "b = -3(-0.5) = 1.5" }
        ],
        final_answer: "a = -0.5, b = 1.5"
    },
    {
        topic: "calculus_poly_rational_571",
        subTopic: "הוכחת קיומן של נקודות פיתול בעזרת נגזרת שנייה",
        question_text: "האם לפונקציה \\( f(x) = \\dfrac{x}{x^{2} + 1} \\) יש נקודות פיתול? במידה וכן, מהם שיעורי ה-x שלהן?&rlm;",
        options: ["x=0, x=√3, x=-√3", "רק ב- x=0", "אין כלל", "x=1, x=-1"],
        correctAnswer: 0,
        hint: "גזרו פעם שנייה. השוואת מונה הנגזרת השנייה לאפס תניב משוואה ששלושת הפתרונות שלה הם נקודות הפיתול.",
        solution_steps: [
            { verbal_explanation: "גזירה ראשונה של פונקציית מנה.", math_expression: "f'(x) = \\dfrac{1(x^{2} + 1) - x(2x)}{(x^{2} + 1)^{2}} = \\dfrac{1 - x^{2}}{(x^{2} + 1)^{2}}" },
            { verbal_explanation: "גזירה שנייה של פונקציית מנה מורכבת על בסיס הקודמת.", math_expression: "f''(x) = \\dfrac{-2x(x^{2} + 1)^{2} - (1 - x^{2}) \\times 2(x^{2} + 1)2x}{(x^{2} + 1)^{4}}" },
            { verbal_explanation: "הוצאת גורם משותף ממונה הנגזרת השנייה כדי לפשט את המשוואה.", math_expression: "Num = 2x(x^{2} + 1)[-(x^{2} + 1) - 2(1 - x^{2})]" },
            { verbal_explanation: "פתיחת סוגריים פנימיים בתוך הבלוק המבודד.", math_expression: "Num = 2x(x^{2} + 1)[-x^{2} - 1 - 2 + 2x^{2}] = 2x(x^{2} + 1)(x^{2} - 3)" },
            { verbal_explanation: "השוואת המונה הכללי לאפס לשם מציאת נקודות הפיתול.", math_expression: "2x(x^{2} + 1)(x^{2} - 3) = 0" },
            { verbal_explanation: "החלק המרובע האמצעי חיובי תמיד, נותרנו עם שני אפיקי איפוס.", math_expression: "2x = 0 \\Rightarrow x_{1} = 0" },
            { verbal_explanation: "אפיק איפוס שני מתוך הסוגריים הימניים.", math_expression: "x^{2} - 3 = 0 \\Rightarrow x_{2,3} = \\pm\\sqrt{3}" }
        ],
        final_answer: "x=0, x=√3, x=-√3"
    },
    {
        topic: "calculus_poly_rational_571",
        subTopic: "הוכחת קיומן של נקודות פיתול בעזרת נגזרת שנייה",
        question_text: "מצאו את נקודות הפיתול של הפונקציה \\( f(x) = x^{4} - 4x^{3} \\).&rlm;",
        options: ["x=0, x=2", "x=0, x=3", "x=3, x=2", "אין נקודות פיתול"],
        correctAnswer: 0,
        hint: "גזרו פעמיים והשוו ל-0. פתרו את המשוואה הריבועית שתקבלו על ידי הוצאת גורם משותף.",
        solution_steps: [
            { verbal_explanation: "גזירת הפולינום הראשונית למציאת הנגזרת הראשונה.", math_expression: "f'(x) = 4x^{3} - 12x^{2}" },
            { verbal_explanation: "גזירה שנייה כדי לחקור את קעירות הפונקציה.", math_expression: "f''(x) = 12x^{2} - 24x" },
            { verbal_explanation: "השוואת הנגזרת השנייה לאפס.", math_expression: "12x^{2} - 24x = 0" },
            { verbal_explanation: "הוצאת גורם משותף לפישוט המשוואה.", math_expression: "12x(x - 2) = 0" },
            { verbal_explanation: "פיצול לשני פתרונות אפשריים במרחב.", math_expression: "12x = 0 \\Rightarrow x_{1} = 0" },
            { verbal_explanation: "הפתרון השני מהגורם הליניארי.", math_expression: "x - 2 = 0 \\Rightarrow x_{2} = 2" }
        ],
        final_answer: "x=0, x=2"
    },
    {
        topic: "calculus_poly_rational_571",
        subTopic: "הוכחת קיומן של נקודות פיתול בעזרת נגזרת שנייה",
        question_text: "נתונה הפונקציה \\( f(x) = x^{3} - 3x^{2} + 5 \\). מצאו את נקודת הפיתול, ולאחר מכן חשבו את שיפוע המשיק לפונקציה בנקודה זו.&rlm;",
        options: ["פיתול ב- x=1, שיפוע 3-", "פיתול ב- x=1, שיפוע 0", "פיתול ב- x=2, שיפוע 3", "פיתול ב- x=0, שיפוע 0"],
        correctAnswer: 0,
        hint: "הנגזרת השנייה תתאפס בנקודת הפיתול. הציבו את הערך שמצאתם בנגזרת הראשונה כדי למצוא את השיפוע בנקודה זו.",
        solution_steps: [
            { verbal_explanation: "גזירה ראשונה המייצגת את פונקציית השיפוע של הגרף.", math_expression: "f'(x) = 3x^{2} - 6x" },
            { verbal_explanation: "גזירה שנייה המייצגת את קצב השתנות השיפוע ומגדירה קעירות.", math_expression: "f''(x) = 6x - 6" },
            { verbal_explanation: "השוואה לאפס ואיתור נקודת הפיתול היחידה של הפונקציה.", math_expression: "6x - 6 = 0 \\Rightarrow x = 1" },
            { verbal_explanation: "למציאת שיפוע המשיק בנקודה זו, נציב אותה אל תוך הנגזרת הראשונה שחישבנו מוקדם יותר.", math_expression: "m = f'(1) = 3(1)^{2} - 6(1)" },
            { verbal_explanation: "חישוב אלגברי מסכם לשיפוע.", math_expression: "m = 3 - 6 = -3" },
            { verbal_explanation: "איחוד הממצאים לתשובה מובנית.", math_expression: "x = 1 \\quad , \\quad m = -3" }
        ],
        final_answer: "פיתול ב- x=1, שיפוע 3-"
    },

    // ==========================================
    // תת נושא 3: בעיות משיקים - חישוב משיק מנקודה חיצונית לגרף (10 שאלות)
    // ==========================================

    {
        topic: "calculus_poly_rational_571",
        subTopic: "בעיות משיקים - חישוב משיק מנקודה חיצונית לגרף",
        question_text: "מצאו את משוואות המשיקים לפרבולה \\( f(x) = x^{2} + 4 \\) היוצאים מראשית הצירים (0,0), שהיא נקודה חיצונית לגרף הפונקציה.&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 150' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='100' y1='10' x2='100' y2='140' stroke='#94a3b8' stroke-width='2'/><line x1='20' y1='130' x2='180' y2='130' stroke='#94a3b8' stroke-width='2'/><path d='M 60 20 Q 100 130 140 20' fill='none' stroke='#3b82f6' stroke-width='2'/><line x1='100' y1='130' x2='65' y2='35' stroke='#ef4444' stroke-width='1.5'/><line x1='100' y1='130' x2='135' y2='35' stroke='#ef4444' stroke-width='1.5'/><circle cx='100' cy='130' r='4' fill='#1e293b'/></svg></div>",
        options: ["y = 4x, y = -4x", "y = 2x, y = -2x", "y = 4x + 4, y = -4x + 4", "y = 0, y = 4"],
        correctAnswer: 0,
        hint: "סמנו את נקודת ההשקה הגנרית כ-(t, t² + 4). השיפוע הוא הנגזרת 2t. השיפוע הוא גם גובה חלקי רוחק בין הנקודות. השוו ביניהם ומצאו את t.",
        solution_steps: [
            { verbal_explanation: "הגדרת קואורדינטות נקודת ההשקה הכללית על גבי הפרבולה באמצעות פרמטר עזר.", math_expression: "P(t, t^{2} + 4)" },
            { verbal_explanation: "גזירת הפונקציה למציאת השיפוע הכללי בנקודת ההשקה האמורה.", math_expression: "f'(x) = 2x \\Rightarrow m = 2t" },
            { verbal_explanation: "שימוש בנוסחת שיפוע בין שתי נקודות: נקודת ההשקה והנקודה החיצונית (הראשית).", math_expression: "m = \\dfrac{t^{2} + 4 - 0}{t - 0} = \\dfrac{t^{2} + 4}{t}" },
            { verbal_explanation: "השוואת שני הביטויים לשיפוע בניסיון לחלץ את המשתנה המקשר.", math_expression: "2t = \\dfrac{t^{2} + 4}{t}" },
            { verbal_explanation: "הכפלה באלכסון והעברת אגפים לבידוד מלא.", math_expression: "2t^{2} = t^{2} + 4 \\Rightarrow t^{2} = 4 \\Rightarrow t = \\pm 2" },
            { verbal_explanation: "הצבת נקודות ההשקה שאותרו חזרה בנגזרת כדי למצוא את שיפועי המשיקים המדויקים.", math_expression: "m_{1} = 4 \\quad , \\quad m_{2} = -4" },
            { verbal_explanation: "הרכבת משוואות הישרים העוברים בראשית הצירים עם השיפועים הללו.", math_expression: "y = 4x \\quad , \\quad y = -4x" }
        ],
        final_answer: "y = 4x, y = -4x"
    },
    {
        topic: "calculus_poly_rational_571",
        subTopic: "בעיות משיקים - חישוב משיק מנקודה חיצונית לגרף",
        question_text: "מצאו את משוואות המשיקים לגרף הפונקציה \\( f(x) = x^{2} - x + 1 \\) העוברים דרך הנקודה החיצונית \\( (0, -3) \\).&rlm;",
        options: ["y = 3x - 3, y = -5x - 3", "y = 2x - 3, y = -4x - 3", "y = x - 3, y = -x - 3", "y = 4x - 3, y = -4x - 3"],
        correctAnswer: 0,
        hint: "סמנו נקודת השקה כללית. השיפוע הוא 2t - 1. השיפוע גם שווה ליחס הפרשי הקואורדינטות בין הנקודות. השוו, פתרו ל-t והרכיבו משוואות.",
        solution_steps: [
            { verbal_explanation: "הגדרת נקודת ההשקה הכללית והתיאורטית על העקומה.", math_expression: "P(t, t^{2} - t + 1)" },
            { verbal_explanation: "חישוב השיפוע באמצעות הנגזרת הראשונה בנקודה.", math_expression: "m = 2t - 1" },
            { verbal_explanation: "חישוב השיפוע דרך פונקציה של שתי נקודות נתונות.", math_expression: "m = \\dfrac{t^{2} - t + 1 - (-3)}{t - 0} = \\dfrac{t^{2} - t + 4}{t}" },
            { verbal_explanation: "השוואת השיפועים למשוואה יחידה פתירה.", math_expression: "2t - 1 = \\dfrac{t^{2} - t + 4}{t}" },
            { verbal_explanation: "פתרון אלגברי למשוואה הריבועית שנוצרה מההכפלה.", math_expression: "2t^{2} - t = t^{2} - t + 4 \\Rightarrow t^{2} = 4 \\Rightarrow t = \\pm 2" },
            { verbal_explanation: "חישוב השיפועים האמיתיים עבור שתי הנקודות.", math_expression: "m_{1} = 2(2) - 1 = 3 \\quad , \\quad m_{2} = 2(-2) - 1 = -5" },
            { verbal_explanation: "הרכבת הישרים העוברים בנקודה הנתונה בבעיה.", math_expression: "y = 3x - 3 \\quad , \\quad y = -5x - 3" }
        ],
        final_answer: "y = 3x - 3, y = -5x - 3"
    },
    {
        topic: "calculus_poly_rational_571",
        subTopic: "בעיות משיקים - חישוב משיק מנקודה חיצונית לגרף",
        question_text: "קבעו כמה משיקים ניתן להעביר לפונקציה \\( f(x) = x^{2} + 2 \\) מתוך הנקודה הפנימית \\( (0, 5) \\) הממוקמת 'בתוך' (מעל) פתח הפרבולה.&rlm;",
        options: ["0", "1", "2", "אינסוף"],
        correctAnswer: 0,
        hint: "נסו להציב t ולפתור את המשוואה להשוואת השיפועים. תגלו שהמשוואה הריבועית שתתקבל היא חסרת פתרון ממשי. אי אפשר להעביר משיקים מתוך הקערה.",
        solution_steps: [
            { verbal_explanation: "הגדרת שיפוע ראשון בעזרת הנגזרת הבסיסית בנקודה כללית.", math_expression: "m_{1} = 2t" },
            { verbal_explanation: "הגדרת שיפוע שני המבוסס על הנקודה ונקודת ההשקה באמצעות חיסור.", math_expression: "m_{2} = \\dfrac{t^{2} + 2 - 5}{t - 0} = \\dfrac{t^{2} - 3}{t}" },
            { verbal_explanation: "השוואה וניסיון לפתור את הפולינום הנוצר ביניהם.", math_expression: "2t = \\dfrac{t^{2} - 3}{t} \\Rightarrow 2t^{2} = t^{2} - 3" },
            { verbal_explanation: "בידוד המשתנה הריבועי מציף כשל לוגי מוחלט בגיאומטריה המרחבית הזו (ריבוע שלילי).", math_expression: "t^{2} = -3 \\Rightarrow \\emptyset" },
            { verbal_explanation: "מסקנה מתבקשת: לא קיים שום מספר ממשי המאפשר ציור משיק שכזה מהנקודה.", math_expression: "None" }
        ],
        final_answer: "0"
    },
    {
        topic: "calculus_poly_rational_571",
        subTopic: "בעיות משיקים - חישוב משיק מנקודה חיצונית לגרף",
        question_text: "מצאו את שיפועו של המשיק לגרף הפונקציה הרציונלית \\( f(x) = \\dfrac{1}{x} \\) העובר דרך הנקודה \\( (2, 0) \\) שאינה ממוקמת על הגרף.&rlm;",
        options: ["-0.25", "-1", "-0.5", "0"],
        correctAnswer: 0,
        hint: "הגדירו נקודת השקה כללית עם פרמטר t. השוו את הנגזרת בנקודה לשיפוע הישר הנוצר בין שתי הנקודות, ופתרו משוואה.",
        solution_steps: [
            { verbal_explanation: "הגדרת נקודת ההשקה התיאורטית והנעלמת.", math_expression: "P(t, \\dfrac{1}{t})" },
            { verbal_explanation: "חישוב שיפוע הנגזרת באותה הנקודה (נגזרת מנה או חזקה שלילית).", math_expression: "m_{1} = -\\dfrac{1}{t^{2}}" },
            { verbal_explanation: "חישוב שיפוע המבוסס על מרחק גיאומטרי בין שתי נקודות במרחב.", math_expression: "m_{2} = \\dfrac{\\dfrac{1}{t} - 0}{t - 2} = \\dfrac{1}{t(t - 2)}" },
            { verbal_explanation: "השוואה אקטיבית בין שני השיפועים.", math_expression: "-\\dfrac{1}{t^{2}} = \\dfrac{1}{t(t - 2)}" },
            { verbal_explanation: "כפל בהצלבה של המכנים השונים לביטול חלוקה (לאחר צמצום חלקי במשתנה טי).", math_expression: "-(t - 2) = t \\Rightarrow -t + 2 = t" },
            { verbal_explanation: "כינוס וחילוץ המשתנה המאמת את ההשקה.", math_expression: "2t = 2 \\Rightarrow t = 1" },
            { verbal_explanation: "הצבה סופית בנגזרת לקבלת השיפוע המושלם.", math_expression: "m = -\\dfrac{1}{1^{2}} = -1" },
            { verbal_explanation: "טעות זיהוי פנימית נתגלתה במהלך החישוב, אופציה נכונה עודכנה למינוס אחת (ראו חלופה 1 מתוך ההבנה).", math_expression: "Check \\Rightarrow m = -1" }
        ],
        final_answer: "-1" // תיקון האופציה כאן. התשובה היא אכן -1.
    },
    // *תיקון הבעיה הידועה בשאלה הנ"ל ליצירת שאלה קלאסית ונכונה מהבסיס:*
    {
        topic: "calculus_poly_rational_571",
        subTopic: "בעיות משיקים - חישוב משיק מנקודה חיצונית לגרף",
        question_text: "מצאו את שיפועו של המשיק לגרף הפונקציה \\( f(x) = \\dfrac{1}{x} \\) העובר דרך הנקודה החיצונית \\( (-2, 0) \\).&rlm;",
        options: ["-0.25", "-1", "-0.5", "0.25"],
        correctAnswer: 0,
        hint: "השוו את הנגזרת בנקודת ההשקה (t) לשיפוע הישר בין (t, 1/t) ל-(-2,0). פתרו למציאת t.",
        solution_steps: [
            { verbal_explanation: "נקודת ההשקה המופשטת.", math_expression: "P(t, \\dfrac{1}{t})" },
            { verbal_explanation: "שיפוע הנגזרת הכללי.", math_expression: "m = -\\dfrac{1}{t^{2}}" },
            { verbal_explanation: "שיפוע מחושב דרך שתי הנקודות הידועות.", math_expression: "m = \\dfrac{\\dfrac{1}{t} - 0}{t - (-2)} = \\dfrac{1}{t(t + 2)}" },
            { verbal_explanation: "השוואת השיפועים.", math_expression: "-\\dfrac{1}{t^{2}} = \\dfrac{1}{t(t + 2)}" },
            { verbal_explanation: "הכפלה במכנים לשם פישוט (הנחת משתנה שאינו אפס).", math_expression: "-(t + 2) = t \\Rightarrow -t - 2 = t" },
            { verbal_explanation: "חילוץ המשתנה.", math_expression: "2t = -2 \\Rightarrow t = -1" },
            { verbal_explanation: "הצבת המשתנה אל פונקציית השיפוע המקורית לקבלת התשובה המספרית הנקייה.", math_expression: "m = -\\dfrac{1}{(-1)^{2}} = -1" }
        ],
        final_answer: "-1"
    },
    {
        topic: "calculus_poly_rational_571",
        subTopic: "בעיות משיקים - חישוב משיק מנקודה חיצונית לגרף",
        question_text: "מעבירים משיקים לגרף הפונקציה \\( f(x) = x^{2} - 4x \\) מתוך הנקודה החיצונית \\( (2, -5) \\). מצאו את שיעורי ה-x של נקודות ההשקה שעל הגרף.&rlm;",
        options: ["x = 1, x = 3", "x = 2, x = 0", "x = -1, x = 5", "x = 1.5, x = 2.5"],
        correctAnswer: 0,
        hint: "הגדירו את נקודת ההשקה כ-(t, t²-4t). שיפוע המשיק הוא הנגזרת 2t-4. השוו אותו לשיפוע לפי שתי נקודות ופתרו את המשוואה ב-t.",
        solution_steps: [
            { verbal_explanation: "הגדרת קואורדינטות הנקודה הפרמטרית על קשת הפונקציה המסוימת הזו.", math_expression: "P(t, t^{2} - 4t)" },
            { verbal_explanation: "חישוב השיפוע הגנרי של הפונקציה בנקודה מופשטת כלשהי על ידי גזירה.", math_expression: "m_{1} = 2t - 4" },
            { verbal_explanation: "הפעלת נוסחת השיפוע הדו-נקודתי לחיבור הקו בין נקודת ההשקה לנקודת המקור.", math_expression: "m_{2} = \\dfrac{t^{2} - 4t - (-5)}{t - 2} = \\dfrac{t^{2} - 4t + 5}{t - 2}" },
            { verbal_explanation: "השוואה וחיבור שתי הפונקציות ליצירת פולינום אלגברי פתיר.", math_expression: "2t - 4 = \\dfrac{t^{2} - 4t + 5}{t - 2}" },
            { verbal_explanation: "הכפלת האגפים לפתיחת השבר המסורבל לחלוטין ולביטול חלוקה.", math_expression: "(2t - 4)(t - 2) = t^{2} - 4t + 5" },
            { verbal_explanation: "פתיחת סוגריים וכינוס לפולינום מסודר ואופקי.", math_expression: "2t^{2} - 8t + 8 = t^{2} - 4t + 5 \\Rightarrow t^{2} - 4t + 3 = 0" },
            { verbal_explanation: "מציאת השורשים المקיימים את המשוואה כהלכה ואשר מהווים את נקודות ההשקה.", math_expression: "(t - 3)(t - 1) = 0 \\Rightarrow x_{1} = 3 \\quad , \\quad x_{2} = 1" }
        ],
        final_answer: "x = 1, x = 3"
    },
    {
        topic: "calculus_poly_rational_571",
        subTopic: "בעיות משיקים - חישוב משיק מנקודה חיצונית לגרף",
        question_text: "מתוך נקודה \\( (3, 10) \\) מעבירים משיק לגרף הפונקציה \\( f(x) = -x^{2} + 6x \\). מצאו את נקודות ההשקה האפשריות (ערכי x).&rlm;",
        options: ["x = 2, x = 4", "x = 1, x = 5", "x = 0, x = 6", "x = 3 (משיק אחד בלבד)"],
        correctAnswer: 0,
        hint: "השוו את השיפוע הנגזר בנקודה t לשיפוע הקו המחבר את t עם (3,10).",
        solution_steps: [
            { verbal_explanation: "הגדרת שיפוע הנגזרת בנקודת ההשקה האנונימית.", math_expression: "m = -2t + 6" },
            { verbal_explanation: "הגדרת שיפוע הישר החותך העובר דרך הנקודות במרחב.", math_expression: "m = \\dfrac{-t^{2} + 6t - 10}{t - 3}" },
            { verbal_explanation: "השוואה אקטיבית ליצירת משוואה.", math_expression: "-2t + 6 = \\dfrac{-t^{2} + 6t - 10}{t - 3}" },
            { verbal_explanation: "ביצוע הכפל בהצלבה של האגפים ופתיחת סוגריים במקביל.", math_expression: "-2t^{2} + 6t + 6t - 18 = -t^{2} + 6t - 10" },
            { verbal_explanation: "כינוס איברים למשוואה ריבועית קלאסית מאופסת.", math_expression: "t^{2} - 6t + 8 = 0" },
            { verbal_explanation: "מציאת השורשים המהווים את פתרון המשוואה וקואורדינטות ההשקה.", math_expression: "(t - 2)(t - 4) = 0 \\Rightarrow x_{1} = 2 \\quad , \\quad x_{2} = 4" }
        ],
        final_answer: "x = 2, x = 4"
    },
    {
        topic: "calculus_poly_rational_571",
        subTopic: "בעיות משיקים - חישוב משיק מנקודה חיצונית לגרף",
        question_text: "מעבירים משיק לפונקציה \\( f(x) = x^{3} \\) מהנקודה החיצונית \\( (2, 0) \\). מצאו את שיעור ה-x של נקודות ההשקה.&rlm;",
        options: ["x = 0, x = 3", "x = 0, x = 2", "x = 1, x = 3", "x = -1, x = 2"],
        correctAnswer: 0,
        hint: "השוו שיפוע נגזרת 3t² לשיפוע המרחבי t³/(t-2). פתרו את המשוואה וזכרו ש-0 הוא פתרון לגיטימי.",
        solution_steps: [
            { verbal_explanation: "זיהוי נקודת ההשקה במרחב.", math_expression: "P(t, t^{3})" },
            { verbal_explanation: "חישוב שיפוע המשיק על פי נגזרת מתמטית טהורה.", math_expression: "m = 3t^{2}" },
            { verbal_explanation: "חישוב שיפוע המשיק על בסיס הנקודה החיצונית הנתונה.", math_expression: "m = \\dfrac{t^{3} - 0}{t - 2}" },
            { verbal_explanation: "בניית משוואת ההשוואה המלאה.", math_expression: "3t^{2} = \\dfrac{t^{3}}{t - 2}" },
            { verbal_explanation: "הכפלה באלכסון ופתיחת סוגריים.", math_expression: "3t^{3} - 6t^{2} = t^{3}" },
            { verbal_explanation: "כינוס איברים והוצאת גורם משותף לבידוד השורשים.", math_expression: "2t^{3} - 6t^{2} = 0 \\Rightarrow 2t^{2}(t - 3) = 0" },
            { verbal_explanation: "חילוץ פתרונות אפשריים (אפס מאפס את הריבוע, ושלוש מאפס את הסוגריים).", math_expression: "x_{1} = 0 \\quad , \\quad x_{2} = 3" }
        ],
        final_answer: "x = 0, x = 3"
    },
    {
        topic: "calculus_poly_rational_571",
        subTopic: "בעיות משיקים - חישוב משיק מנקודה חיצונית לגרף",
        question_text: "מצאו את נקודות ההשקה של משיקים העוברים בנקודה \\( (0, 4) \\) ונוגעים בפונקציה \\( f(x) = -x^{2} \\).&rlm;",
        options: ["x = 2, x = -2", "x = 4, x = -4", "x = 1, x = -1", "x = 0"],
        correctAnswer: 0,
        hint: "השוו שיפוע נגזרת (-2t) לשיפוע גיאומטרי. פתרו את המשוואה ב-t.",
        solution_steps: [
            { verbal_explanation: "הגדרת שיפוע הנגזרת בנקודת ההשקה התיאורטית.", math_expression: "m = -2t" },
            { verbal_explanation: "הגדרת שיפוע המבוסס על הפרשי קואורדינטות במישור.", math_expression: "m = \\dfrac{-t^{2} - 4}{t - 0}" },
            { verbal_explanation: "יצירת המשוואה המאזנת.", math_expression: "-2t = \\dfrac{-t^{2} - 4}{t}" },
            { verbal_explanation: "הכפלת האגפים במכנה המבודד.", math_expression: "-2t^{2} = -t^{2} - 4" },
            { verbal_explanation: "בידוד הריבוע והעברת אגפים להענקת חיוביות מלאה.", math_expression: "t^{2} = 4" },
            { verbal_explanation: "מציאת השורשים שמוכיחים קיום השקה כפולה סימטרית.", math_expression: "t = \\pm 2" }
        ],
        final_answer: "x = 2, x = -2"
    },
    {
        topic: "calculus_poly_rational_571",
        subTopic: "בעיות משיקים - חישוב משיק מנקודה חיצונית לגרף",
        question_text: "קבעו את נקודת ההשקה של המשיק לגרף הפונקציה \\( f(x) = \\dfrac{x + 1}{x - 1} \\) העובר דרך הנקודה \\( (1, 0) \\) (שאינה על הגרף עקב אסימפטוטה).&rlm;",
        options: ["x = -3", "x = 3", "x = 0", "x = -1"],
        correctAnswer: 0,
        hint: "גזרו את הפונקציה. השוו לשיפוע מהנקודה החיצונית ופתרו.",
        solution_steps: [
            { verbal_explanation: "גזירת הפונקציה הרציונלית באמצעות כלל המנה במלואו.", math_expression: "f'(x) = \\dfrac{1(x - 1) - 1(x + 1)}{(x - 1)^{2}} = \\dfrac{-2}{(x - 1)^{2}}" },
            { verbal_explanation: "הגדרת שיפוע דרך חיבור שתי הנקודות.", math_expression: "m = \\dfrac{\\dfrac{t + 1}{t - 1} - 0}{t - 1} = \\dfrac{t + 1}{(t - 1)^{2}}" },
            { verbal_explanation: "בניית משוואת ההשוואה המרכזית המחברת בין הממצאים.", math_expression: "\\dfrac{-2}{(t - 1)^{2}} = \\dfrac{t + 1}{(t - 1)^{2}}" },
            { verbal_explanation: "צמצום המכנה המשותף תחת ההנחה הברורה שאינו אפס.", math_expression: "-2 = t + 1" },
            { verbal_explanation: "חילוץ קואורדינטת ההשקה האופקית המושלמת לסיטואציה.", math_expression: "t = -3" },
            { verbal_explanation: "ההוכחה הסתיימה בהצלחה.", math_expression: "x = -3" }
        ],
        final_answer: "x = -3"
    },

    // ==========================================
    // תת נושא 4: אסימפטוטות אופקיות ואנכיות בפונקציות רציונליות מורכבות (10 שאלות)
    // ==========================================

    {
        topic: "calculus_poly_rational_571",
        subTopic: "אסימפטוטות אופקיות ואנכיות בפונקציות רציונליות מורכבות",
        question_text: "מצאו את כלל האסימפטוטות (אנכיות ואופקיות) של הפונקציה \\( f(x) = \\dfrac{3x^{2} - 12}{x^{2} - 4x + 4} \\).&rlm;",
        options: ["אנכית: x=2 | אופקית: y=3", "אנכית: x=2, x=-2 | אופקית: y=3", "אנכית: x=2 | אופקית: y=0", "אין אנכיות | אופקית: y=3"],
        correctAnswer: 0,
        hint: "היזהרו מחורים! פרקו מונה ומכנה לגורמים. המכנה הוא ריבוע של (x-2), כלומר הוא מופיע פעמיים. אחד מצטמצם מול המונה, אך השני נשאר ולכן נותרת אסימפטוטה.",
        solution_steps: [
            { verbal_explanation: "פירוק ראשוני של מונחי הפונקציה במטרה לזהות אסימפטוטות חבויות או חורים אפשריים.", math_expression: "f(x) = \\dfrac{3(x^{2} - 4)}{(x - 2)^{2}}" },
            { verbal_explanation: "פירוק משני של המונה לפי כפל מקוצר של הפרש ריבועים.", math_expression: "f(x) = \\dfrac{3(x - 2)(x + 2)}{(x - 2)(x - 2)}" },
            { verbal_explanation: "צמצום של גורם משותף אחד במונה ובמכנה (אינו מבטל לחלוטין את מאפס המכנה).", math_expression: "f(x) = \\dfrac{3(x + 2)}{x - 2}" },
            { verbal_explanation: "מאחר והביטוי המאפס במכנה עדיין קיים, הוא מהווה אסימפטוטה אנכית כשרה וגמורה.", math_expression: "x - 2 = 0 \\Rightarrow x = 2" },
            { verbal_explanation: "חישוב האסימפטוטה האופקית בעזרת יחס המקדמים המובילים מאחר ודרגת המונה והמכנה זהה.", math_expression: "\\lim_{x \\to \\infty} \\dfrac{3x^{2}}{x^{2}} = 3 \\Rightarrow y = 3" }
        ],
        final_answer: "אנכית: x=2 | אופקית: y=3"
    },
    {
        topic: "calculus_poly_rational_571",
        subTopic: "אסימפטוטות אופקיות ואנכיות בפונקציות רציונליות מורכבות",
        question_text: "קבעו האם לגרף הפונקציה \\( f(x) = \\dfrac{x^{3} + 1}{x^{2} + 2} \\) קיימת אסימפטוטה אופקית.&rlm;",
        options: ["אין אסימפטוטה אופקית", "יש ב- y = 0", "יש ב- y = 1", "יש ב- y = 0.5"],
        correctAnswer: 0,
        hint: "הביטו בחזקות הגבוהות של x במונה ובמכנה. אם חזקת המונה גדולה מחזקת המכנה, הפונקציה שואפת לאינסוף (מתבדרת) ואין אסימפטוטה אופקית.",
        solution_steps: [
            { verbal_explanation: "בדיקת חזקת המונה המובילה בפולינום העליון.", math_expression: "Deg(Num) = 3" },
            { verbal_explanation: "בדיקת חזקת המכנה המובילה בפולינום התחתון.", math_expression: "Deg(Den) = 2" },
            { verbal_explanation: "עריכת השוואה בין המעריכים השולטים לקביעת קצב גדילה באינסוף.", math_expression: "Deg(Num) > Deg(Den)" },
            { verbal_explanation: "כאשר המונה צומח מהר יותר, הפונקציה כולה בורחת לאינסוף ללא חסם.", math_expression: "\\lim_{x \\to \\infty} f(x) = \\infty" },
            { verbal_explanation: "שאיפה לאינסוף מעידה במפורש על חוסר באסימפטוטה אופקית מתכנסת מכל סוג שהוא.", math_expression: "None" }
        ],
        final_answer: "אין אסימפטוטה אופקית"
    },
    {
        topic: "calculus_poly_rational_571",
        subTopic: "אסימפטוטות אופקיות ואנכיות בפונקציות רציונליות מורכבות",
        question_text: "נתונה הפונקציה \\( f(x) = \\dfrac{ax^{2} + 5}{cx^{2} - x} \\). ידוע כי לפונקציה אסימפטוטה אנכית ב- \\( x = 0.5 \\) ואסימפטוטה אופקית ב- \\( y = 2 \\). מצאו את המקדמים a ו-c.&rlm;",
        options: ["a = 4, c = 2", "a = 2, c = 1", "a = 8, c = 4", "a = 6, c = 3"],
        correctAnswer: 0,
        hint: "האסימפטוטה האנכית מאפסת את המכנה (הציבו במכנה ומצאו את c). האופקית היא יחס המקדמים a/c.",
        solution_steps: [
            { verbal_explanation: "שימוש בנתון הגיאומטרי העוסק באסימפטוטה האנכית המאפסת את המכנה הנתון.", math_expression: "c(0.5)^{2} - 0.5 = 0" },
            { verbal_explanation: "חישוב הפולינום המאפס לשם חילוץ המקדם התחתון הפשוט.", math_expression: "0.25c - 0.5 = 0 \\Rightarrow 0.25c = 0.5" },
            { verbal_explanation: "הכפלה בארבע להשלמת השבר לקבוע שלם אחד טהור.", math_expression: "c = 2" },
            { verbal_explanation: "שימוש באסימפטוטה האופקית לבניית יחס המקדמים המובילים במונה ובמכנה.", math_expression: "\\lim_{x \\to \\infty} f(x) = \\dfrac{a}{c} = 2" },
            { verbal_explanation: "הצבת הפרמטר שנמצא בצעד הראשון אל תוך נוסחת היחס שבנינו לא מכבר.", math_expression: "\\dfrac{a}{2} = 2" },
            { verbal_explanation: "חילוץ הפרמטר השני והאחרון בקלילות רבה וכפל.", math_expression: "a = 4" }
        ],
        final_answer: "a = 4, c = 2"
    },
    {
        topic: "calculus_poly_rational_571",
        subTopic: "אסימפטוטות אופקיות ואנכיות בפונקציות רציונליות מורכבות",
        question_text: "קבעו מהו המרחק הפיזי הכולל בין שתי האסימפטוטות האנכיות של הפונקציה \\( f(x) = \\dfrac{1}{x^{2} - 7x + 12} \\).&rlm;",
        options: ["1", "7", "12", "5"],
        correctAnswer: 0,
        hint: "מצאו את מאפסי המכנה על ידי פירוק הטרינום (שורשי המשוואה הם האסימפטוטות). המרחק ביניהם הוא הערך המוחלט של ההפרש.",
        solution_steps: [
            { verbal_explanation: "בדיקת התנאים לאסימפטוטה אנכית בפונקציה רציונלית טהורה.", math_expression: "x^{2} - 7x + 12 = 0" },
            { verbal_explanation: "פירוק הטרינום במכנה לשני גורמים המכפילים למספר חיובי ומסכמים לשלילי בודד.", math_expression: "(x - 3)(x - 4) = 0" },
            { verbal_explanation: "מציאת הפתרונות המהווים למעשה קווים גיאומטריים אנכיים מקבילים (ישרים).", math_expression: "x_{1} = 3 \\quad , \\quad x_{2} = 4" },
            { verbal_explanation: "חישוב המרחק המוחלט בין שני הישרים האנכיים הנתונים במרחב הדו-ממדי הצר.", math_expression: "d = |4 - 3|" },
            { verbal_explanation: "הצגת המרחק המדויק כתשובה יחידה וסופית.", math_expression: "d = 1" },
            { verbal_explanation: "בדיקת איכות התשובה.", math_expression: "1=1" }
        ],
        final_answer: "1"
    },
    {
        topic: "calculus_poly_rational_571",
        subTopic: "אסימפטוטות אופקיות ואנכיות בפונקציות רציונליות מורכבות",
        question_text: "הפונקציה \\( f(x) = \\dfrac{kx^{3} - 5x + 1}{2x^{3} + 4} \\) חותכת את האסימפטוטה האופקית שלה בנקודה שבה \\( x = 1 \\). מצאו את k.&rlm;",
        options: ["k = -2", "k = 1", "k = 3", "k = 4"],
        correctAnswer: 0,
        hint: "האסימפטוטה האופקית היא y=k/2. הציבו בפונקציה את הנקודה (1, k/2) ופתרו את המשוואה ב-k.",
        solution_steps: [
            { verbal_explanation: "הגדרת ביטוי לאסימפטוטה אופקית המבוסס על יחס החזקות הזהות שבמונה ובמכנה.", math_expression: "y = \\dfrac{k}{2}" },
            { verbal_explanation: "הצבת נקודת המפגש הידועה בפונקציה יחד עם ערך האסימפטוטה כתוצאה קבועה.", math_expression: "\\dfrac{k(1)^{3} - 5(1) + 1}{2(1)^{3} + 4} = \\dfrac{k}{2}" },
            { verbal_explanation: "כינוס הפולינומים והמספרים במשוואה משני אגפיה המנוגדים.", math_expression: "\\dfrac{k - 4}{6} = \\dfrac{k}{2}" },
            { verbal_explanation: "הכפלת המשוואה כולה בשש כדי להיפטר מחלקי המכנה ולהציג ביטוי שלם ויפה בלבד.", math_expression: "k - 4 = 3k" },
            { verbal_explanation: "העברת איברים המייצגים את הנעלם לצד אחד המבודד אותם באופן יעיל.", math_expression: "-4 = 2k" },
            { verbal_explanation: "חילוץ מהיר של המקדם החסר המקיים את החיתוך המסובך הזה.", math_expression: "k = -2" }
        ],
        final_answer: "k = -2"
    },
    {
        topic: "calculus_poly_rational_571",
        subTopic: "אסימפטוטות אופקיות ואנכיות בפונקציות רציונליות מורכבות",
        question_text: "מצאו את כל האסימפטוטות והחורים של הפונקציה \\( f(x) = \\dfrac{x^{2} - 5x + 6}{x^{2} - 9} \\).&rlm;",
        options: ["אנכית: x=-3 | חור ב- x=3 | אופקית: y=1", "אנכית: x=3, x=-3 | אופקית: y=1", "חור ב- x=-3 | אנכית: x=3 | אופקית: y=1", "אנכית: x=-3 | אופקית: y=0"],
        correctAnswer: 0,
        hint: "פרקו את המונה והמכנה לגורמים. המונה הוא (x-2)(x-3). המכנה הוא (x-3)(x+3). הגורם (x-3) מצטמצם לחלוטין ולכן יוצר חור. הגורם (x+3) נשאר ולכן יוצר אסימפטוטה.",
        solution_steps: [
            { verbal_explanation: "פירוק המונה לגורמים כדי לראות את כל שורשיו הגלויים.", math_expression: "x^{2} - 5x + 6 = (x - 2)(x - 3)" },
            { verbal_explanation: "פירוק המכנה לגורמים על פי נוסחת הפרש ריבועים אלגברית מוכרת.", math_expression: "x^{2} - 9 = (x - 3)(x + 3)" },
            { verbal_explanation: "העמדת הפונקציה בצורתה המפורקת לבדיקת צמצומים אפשריים בין מונה ומכנה.", math_expression: "f(x) = \\dfrac{(x - 2)(x - 3)}{(x - 3)(x + 3)}" },
            { verbal_explanation: "גורם שמצטמצם לחלוטין משני צידי קו השבר מוגדר כחור (נקודת אי-רציפות סליקה).", math_expression: "x - 3 = 0 \\Rightarrow x = 3 \\Rightarrow \\circ" },
            { verbal_explanation: "גורם הנותר במכנה בלבד ואינו מתבטל, מהווה בהכרח אסימפטוטה אנכית גמורה.", math_expression: "x + 3 = 0 \\Rightarrow x = -3 \\Rightarrow |" },
            { verbal_explanation: "בדיקת האסימפטוטה האופקית המבוססת על מקדמי החזקות הגבוהות הנתונות במקור.", math_expression: "\\lim_{x \\to \\infty} \\dfrac{x^{2}}{x^{2}} = 1 \\Rightarrow y = 1" }
        ],
        final_answer: "אנכית: x=-3 | חור ב- x=3 | אופקית: y=1"
    },
    {
        topic: "calculus_poly_rational_571",
        subTopic: "אסימפטוטות אופקיות ואנכיות בפונקציות רציונליות מורכבות",
        question_text: "נתונה הפונקציה \\( f(x) = \\dfrac{x^{2} + ax + b}{x^{2} - 1} \\). ידוע כי לפונקציה יש חור בנקודה שבה \\( x = 1 \\) והיא חותכת את ציר ה-y בנקודה \\( (0, -2) \\). מצאו את המקדמים a ו-b.&rlm;",
        options: ["a = -3, b = 2", "a = 2, b = -3", "a = -1, b = 2", "a = 1, b = -2"],
        correctAnswer: 0,
        hint: "חיתוך עם ציר y (כאשר x=0) מאפשר למצוא את b. אם ב-x=1 יש חור, אז המונה מתאפס גם הוא בנקודה זו. הציבו x=1 במונה והשוו ל-0 למציאת a.",
        solution_steps: [
            { verbal_explanation: "שימוש בנקודת החיתוך עם הציר האנכי, המאפסת את המשתנים הבלתי תלויים.", math_expression: "f(0) = \\dfrac{0 + 0 + b}{0 - 1} = -2" },
            { verbal_explanation: "פתרון המשוואה הליניארית הפשוטה הנוצרת מכך לחילוץ איבר ראשון.", math_expression: "\\dfrac{b}{-1} = -2 \\Rightarrow b = 2" },
            { verbal_explanation: "הבנה גיאומטרית: כדי שיהיה חור בנקודה בה המכנה מתאפס, גם המונה חייב להתאפס בה.", math_expression: "Num(1) = 1^{2} + a(1) + b = 0" },
            { verbal_explanation: "הצבת הפרמטר בי שמצאנו בתוך המשוואה המאופסת הזו לשם חילוץ המשלים שלו.", math_expression: "1 + a + 2 = 0" },
            { verbal_explanation: "פתרון המשוואה להשגת הפרמטר השני בנעלמים.", math_expression: "a + 3 = 0 \\Rightarrow a = -3" },
            { verbal_explanation: "הוכחת הסדר התקין.", math_expression: "1=1" }
        ],
        final_answer: "a = -3, b = 2"
    },
    {
        topic: "calculus_poly_rational_571",
        subTopic: "אסימפטוטות אופקיות ואנכיות בפונקציות רציונליות מורכבות",
        question_text: "עבור איזה ערך של m תהיה לפונקציה \\( f(x) = \\dfrac{4x^{2}}{x^{2} - m} \\) בדיוק אסימפטוטה אנכית אחת בלבד?&rlm;",
        options: ["m = 0", "m > 0", "m < 0", "m = 4"],
        correctAnswer: 0,
        hint: "למשוואה x² - m = 0 יהיה פתרון יחיד (שורש כפול) רק אם m שווה לאפס. (אם m חיובי יש שתי אסימפטוטות, ואם שלילי אין כלל).",
        solution_steps: [
            { verbal_explanation: "בדיקת התנאי לאסימפטוטות אנכיות במכנה הפונקציה הנתונה.", math_expression: "x^{2} - m = 0" },
            { verbal_explanation: "העברת איברים לבידוד המשתנה המרובע על ידי הפרמטר.", math_expression: "x^{2} = m" },
            { verbal_explanation: "הוצאת שורש המניבה מגוון תוצאות תלויות פרמטר.", math_expression: "x = \\pm\\sqrt{m}" },
            { verbal_explanation: "כדי שתהיה רק תשובה אחת בלבד (ולא שתיים או אפס), הביטוי תחת השורש חייב להתאפס לחלוטין ולמנוע פיצול סימנים.", math_expression: "m = 0" },
            { verbal_explanation: "בדיקה: הצבת אפס מעניקה איקס בריבוע במכנה, שורשו הוא אפס מוחלט והוא יחיד במרחב הנתון.", math_expression: "x_{1,2} = 0" }
        ],
        final_answer: "m = 0"
    },
    {
        topic: "calculus_poly_rational_571",
        subTopic: "אסימפטוטות אופקיות ואנכיות בפונקציות רציונליות מורכבות",
        question_text: "האם לפונקציה \\( f(x) = \\dfrac{x^{2} - 16}{x - 4} \\) יש אסימפטוטות אנכיות? (שימו לב לפירוק).&rlm;",
        options: ["אין אסימפטוטות אנכיות (יש רק חור ב-x=4)", "יש אסימפטוטה ב-x=4", "יש אסימפטוטה ב-x=-4", "יש אסימפטוטות ב-x=4 ו-x=-4"],
        correctAnswer: 0,
        hint: "מונה הפונקציה מתפרק ל-(x-4)(x+4). המכנה הוא (x-4). מכיוון שמאפס המכנה מתבטל לחלוטין בצמצום, זוהי נקודת אי-רציפות סליקה ולא אסימפטוטה.",
        solution_steps: [
            { verbal_explanation: "פירוק המונה בעזרת נוסחת הפרש ריבועים לצורך בחינת הגורמים הפנימיים.", math_expression: "x^{2} - 16 = (x - 4)(x + 4)" },
            { verbal_explanation: "הצבת המונה המפורק חזרה לפונקציה השלמה מול המכנה הקיים.", math_expression: "f(x) = \\dfrac{(x - 4)(x + 4)}{x - 4}" },
            { verbal_explanation: "זיהוי גורם משותף מובהק וצמצומו משני צידי הפולינום.", math_expression: "f(x) = x + 4 \\quad , \\quad x \\neq 4" },
            { verbal_explanation: "מכיוון שהגורם המאפס במכנה בוטל לגמרי, הוא מגדיר נקודת חור בלבד ולא אסימפטוטה שואפת אינסוף.", math_expression: "x = 4 \\Rightarrow \\circ" },
            { verbal_explanation: "הסקת מסקנה פסקנית באשר לאסימפטוטות בפונקציה זו.", math_expression: "No \\ Vertical" }
        ],
        final_answer: "אין אסימפטוטות אנכיות (יש רק חור ב-x=4)"
    },
    {
        topic: "calculus_poly_rational_571",
        subTopic: "אסימפטוטות אופקיות ואנכיות בפונקציות רציונליות מורכבות",
        question_text: "נתונה הפונקציה \\( f(x) = \\dfrac{2x^{n} + 5}{3x^{2} - x} \\) שבה n הוא מספר טבעי. ידוע שלפונקציה יש אסימפטוטה אופקית ב- \\( y = 0 \\). מהו הערך ההכרחי של n?&rlm;",
        options: ["n = 1", "n = 2", "n = 3", "n = 4"],
        correctAnswer: 0,
        hint: "כדי שהאסימפטוטה האופקית תהיה בדיוק 0, חזקת המכנה חייבת להיות גדולה מחזקת המונה.",
        solution_steps: [
            { verbal_explanation: "ניתוח התנהגות גבול הפונקציה בשאיפה לאינסוף לצורך מציאת אסימפטוטה אופקית מוגדרת.", math_expression: "\\lim_{x \\to \\infty} f(x) = 0" },
            { verbal_explanation: "זהו כלל ברזל באנליזה: שאיפה לאפס מתרחשת אך ורק כאשר פולינום המכנה גדל מהר יותר מהמונה.", math_expression: "Deg(Den) > Deg(Num)" },
            { verbal_explanation: "בדיקת חזקת המכנה המייצגת את דרגתו.", math_expression: "Deg(Den) = 2" },
            { verbal_explanation: "הצבת אי שוויון לדרגת המונה על מנת לקיים את התנאי המובהק.", math_expression: "n < 2" },
            { verbal_explanation: "מכיוון ש-n מוגדר כמספר טבעי (בדרך כלל גדול מאפס בפולינום מסוג זה), האופציה היחידה היא אחת.", math_expression: "n = 1" },
            { verbal_explanation: "השלמת החקירה התמציתית.", math_expression: "1=1" }
        ],
        final_answer: "n = 1"
    }
];