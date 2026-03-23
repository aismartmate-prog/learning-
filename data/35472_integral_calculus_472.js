const questionsDB = [
    // ==========================================
    // תת נושא 1: אינטגרלים מיידיים של פולינומים ופונקציות רציונליות בסיסיות (10 שאלות)
    // ==========================================

    {
        topic: "integration_472",
        subTopic: "אינטגרלים מיידיים של פולינומים ופונקציות רציונליות בסיסיות",
        question_text: "חשבו את האינטגרל הלא מסוים הבא: \\( \\int (4x^{3} - 6x + 5) dx \\).&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 120' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><path d='M 40 100 Q 100 0, 160 100' fill='none' stroke='#3b82f6' stroke-width='2'/><text x='95' y='60' font-size='24' font-family='Times New Roman'>∫</text><text x='110' y='65' font-size='14' font-family='Arial'>f(x)dx</text></svg></div>",
        options: ["x⁴ - 3x² + 5x + c", "12x² - 6 + c", "x⁴ - 6x² + 5x + c", "4x⁴ - 3x² + 5x + c"],
        correctAnswer: 0,
        hint: "השתמשו בכלל האינטגרציה של חזקות: העלו את מעריך החזקה ב-1 וחלקו את המקדם במעריך החדש. אל תשכחו להוסיף את קבוע האינטגרציה.",
        solution_steps: [
            { verbal_explanation: "פירוק האינטגרל לסכום של אינטגרלים נפרדים לכל איבר בפולינום.", math_expression: "\\int 4x^{3} dx - \\int 6x dx + \\int 5 dx" },
            { verbal_explanation: "ביצוע אינטגרציה לאיבר הראשון על ידי העלאת החזקה וחלוקה בה.", math_expression: "\\dfrac{4x^{4}}{4}" },
            { verbal_explanation: "ביצוע אינטגרציה לאיבר השני באותה השיטה.", math_expression: "\\dfrac{-6x^{2}}{2}" },
            { verbal_explanation: "ביצוע אינטגרציה למספר החופשי המוסיפה לו את המשתנה.", math_expression: "5x" },
            { verbal_explanation: "צירוף כלל האיברים יחד והוספת קבוע האינטגרציה הנדרש.", math_expression: "\\dfrac{4x^{4}}{4} - \\dfrac{6x^{2}}{2} + 5x + c" },
            { verbal_explanation: "צמצום המקדמים עם המכנים כדי להגיע לביטוי אלגברי נקי ופשוט.", math_expression: "x^{4} - 3x^{2} + 5x + c" }
        ],
        final_answer: "x⁴ - 3x² + 5x + c"
    },
    {
        topic: "integration_472",
        subTopic: "אינטגרלים מיידיים של פולינומים ופונקציות רציונליות בסיסיות",
        question_text: "חשבו את האינטגרל הלא מסוים הבא, הכולל חזקה שלילית במכנה: \\( \\int (\\dfrac{x^{2}}{2} - \\dfrac{3}{x^{2}}) dx \\).&rlm;",
        options: ["(x³ : 6) + (3 : x) + c", "(x³ : 6) - (3 : x) + c", "x³ + (3 : x²) + c", "0.5x³ + 3x + c"],
        correctAnswer: 0,
        hint: "העבירו את האיבר שבמכנה למבנה של חזקה שלילית לפני האינטגרציה, ולאחר מכן הפעילו את חוקי החזקות כרגיל.",
        solution_steps: [
            { verbal_explanation: "סידור הביטוי במבנה נוח לאינטגרציה על ידי העלאת המכנה כחזקה שלילית.", math_expression: "\\int (0.5x^{2} - 3x^{-2}) dx" },
            { verbal_explanation: "אינטגרציה של האיבר הראשון הכוללת העלאת חזקה וחלוקה.", math_expression: "\\dfrac{0.5x^{3}}{3}" },
            { verbal_explanation: "אינטגרציה של האיבר השני עם החזקה השלילית (מינוס שתיים ועוד אחת זה מינוס אחת).", math_expression: "\\dfrac{-3x^{-1}}{-1}" },
            { verbal_explanation: "איחוד שני האיברים יחד עם קבוע האינטגרציה.", math_expression: "\\dfrac{1}{6}x^{3} + 3x^{-1} + c" },
            { verbal_explanation: "המרת החזקה השלילית בחזרה למבנה של שבר חיובי כדי לספק תשובה תקנית.", math_expression: "\\dfrac{x^{3}}{6} + \\dfrac{3}{x} + c" },
            { verbal_explanation: "בדיקת התאמה מלאה לאפשרויות הנתונות למשתמש.", math_expression: "1=1" }
        ],
        final_answer: "(x³ : 6) + (3 : x) + c"
    },
    {
        topic: "integration_472",
        subTopic: "אינטגרלים מיידיים של פולינומים ופונקציות רציונליות בסיסיות",
        question_text: "חשבו את האינטגרל של המכפלה הבאה: \\( \\int x(x^{2} - 4) dx \\).&rlm;",
        options: ["(x⁴ : 4) - 2x² + c", "(x³ : 3) - 2x² + c", "x⁴ - 4x² + c", "(x⁴ : 4) - 4x + c"],
        correctAnswer: 0,
        hint: "אין נוסחת 'מכפלה' פשוטה לאינטגרלים. עליכם קודם כל לפתוח סוגריים ולהכפיל את האיברים, ורק אז לעשות אינטגרל לכל איבר בנפרד.",
        solution_steps: [
            { verbal_explanation: "פתיחת סוגריים והכפלת המשתנה החיצוני בכל איבר פנימי.", math_expression: "\\int (x^{3} - 4x) dx" },
            { verbal_explanation: "הפעלת חוק האינטגרל על האיבר הראשון (חזקה שלישית הופכת לרביעית).", math_expression: "\\dfrac{x^{4}}{4}" },
            { verbal_explanation: "הפעלת חוק האינטגרל על האיבר השני (חזקה ראשונה הופכת לשנייה).", math_expression: "\\dfrac{-4x^{2}}{2}" },
            { verbal_explanation: "חיבור האיברים יחד עם התוספת הקבועה של סיום החישוב.", math_expression: "\\dfrac{x^{4}}{4} - \\dfrac{4x^{2}}{2} + c" },
            { verbal_explanation: "צמצום השבר הניתן לצמצום ליצירת ביטוי סופי נקי.", math_expression: "\\dfrac{x^{4}}{4} - 2x^{2} + c" },
            { verbal_explanation: "סיום.", math_expression: "0=0" }
        ],
        final_answer: "(x⁴ : 4) - 2x² + c"
    },
    {
        topic: "integration_472",
        subTopic: "אינטגרלים מיידיים של פולינומים ופונקציות רציונליות בסיסיות",
        question_text: "חשבו את האינטגרל לפונקציה הרציונלית הבאה: \\( \\int \\dfrac{x^{4} - 2x^{2}}{x^{2}} dx \\).&rlm;",
        options: ["(x³ : 3) - 2x + c", "x³ - 2x + c", "(x³ : 3) - x² + c", "x² - 2 + c"],
        correctAnswer: 0,
        hint: "פצלו את השבר לשני שברים נפרדים או חלקו כל איבר במונה במכנה כדי לפשט את הפונקציה לפני האינטגרציה.",
        solution_steps: [
            { verbal_explanation: "חלוקת האיבר הראשון במונה במכנה המשותף.", math_expression: "\\dfrac{x^{4}}{x^{2}} = x^{2}" },
            { verbal_explanation: "חלוקת האיבר השני במונה במכנה המשותף.", math_expression: "\\dfrac{-2x^{2}}{x^{2}} = -2" },
            { verbal_explanation: "כתיבת האינטגרל מחדש בצורתו הפשוטה והמצומצמת.", math_expression: "\\int (x^{2} - 2) dx" },
            { verbal_explanation: "ביצוע אינטגרציה לחזקה הריבועית.", math_expression: "\\dfrac{x^{3}}{3}" },
            { verbal_explanation: "ביצוע אינטגרציה לקבוע המספרי.", math_expression: "-2x" },
            { verbal_explanation: "הרכבת התשובה הסופית על ידי חיבור האיברים והקבוע.", math_expression: "\\dfrac{x^{3}}{3} - 2x + c" }
        ],
        final_answer: "(x³ : 3) - 2x + c"
    },
    {
        topic: "integration_472",
        subTopic: "אינטגרלים מיידיים של פולינומים ופונקציות רציונליות בסיסיות",
        question_text: "חשבו את האינטגרל הכולל פירוק לגורמים: \\( \\int \\dfrac{x^{2} - 9}{x - 3} dx \\).&rlm;",
        options: ["(x² : 2) + 3x + c", "(x² : 2) - 3x + c", "x² + 3x + c", "(x³ : 3) - 9x + c"],
        correctAnswer: 0,
        hint: "היעזרו בנוסחת כפל מקוצר (הפרש ריבועים) כדי לפרק את המונה, ואז צמצמו אותו עם המכנה לפני ביצוע האינטגרל.",
        solution_steps: [
            { verbal_explanation: "שימוש בנוסחת הפרש ריבועים לפירוק המונה לשני ביטויים ליניאריים.", math_expression: "x^{2} - 9 = (x - 3)(x + 3)" },
            { verbal_explanation: "כתיבת האינטגרל מחדש עם המונה המפורק.", math_expression: "\\int \\dfrac{(x - 3)(x + 3)}{x - 3} dx" },
            { verbal_explanation: "צמצום הביטוי הזהה במונה ובמכנה כדי למנוע חלוקה ארוכה.", math_expression: "\\int (x + 3) dx" },
            { verbal_explanation: "ביצוע אינטגרציה למשתנה הראשון בביטוי החדש.", math_expression: "\\dfrac{x^{2}}{2}" },
            { verbal_explanation: "ביצוע אינטגרציה לאיבר החופשי בביטוי.", math_expression: "3x" },
            { verbal_explanation: "הרכבת הפתרון המלא והסופי.", math_expression: "\\dfrac{x^{2}}{2} + 3x + c" }
        ],
        final_answer: "(x² : 2) + 3x + c"
    },
    {
        topic: "integration_472",
        subTopic: "אינטגרלים מיידיים של פולינומים ופונקציות רציונליות בסיסיות",
        question_text: "פתרו את האינטגרל של המנה הבאה (בעזרת פירוק טרינום): \\( \\int \\dfrac{2x^{2} - 8}{x - 2} dx \\).&rlm;",
        options: ["x² + 4x + c", "2x² + 4x + c", "x² - 4x + c", "(2x³ : 3) - 8x + c"],
        correctAnswer: 0,
        hint: "הוציאו גורם משותף במונה (2) ולאחר מכן השתמשו בהפרש ריבועים, או צמצמו ופשטו ככל הניתן לפני ביצוע הפעולה.",
        solution_steps: [
            { verbal_explanation: "הוצאת גורם משותף מספר שתיים מכל איברי המונה.", math_expression: "2x^{2} - 8 = 2(x^{2} - 4)" },
            { verbal_explanation: "פירוק הביטוי בסוגריים בעזרת נוסחת כפל מקוצר קלאסית.", math_expression: "2(x - 2)(x + 2)" },
            { verbal_explanation: "הצבת המונה החדש בתוך האינטגרל וצמצומו מול המכנה.", math_expression: "\\int \\dfrac{2(x - 2)(x + 2)}{x - 2} dx" },
            { verbal_explanation: "ביטול האיבר המשותף מוביל לביטוי ליניארי פשוט להפליא.", math_expression: "\\int 2(x + 2) dx = \\int (2x + 4) dx" },
            { verbal_explanation: "אינטגרציה של האיבר הראשון ואינטגרציה של השני.", math_expression: "\\dfrac{2x^{2}}{2} + 4x + c" },
            { verbal_explanation: "צמצום השבר הנותן פונקציה חלקה ללא מכנים.", math_expression: "x^{2} + 4x + c" }
        ],
        final_answer: "x² + 4x + c"
    },
    {
        topic: "integration_472",
        subTopic: "אינטגרלים מיידיים של פולינומים ופונקציות רציונליות בסיסיות",
        question_text: "חשבו את האינטגרל של פולינום הכולל חזקות מגוונות: \\( \\int (\\dfrac{4}{x^{3}} + \\dfrac{1}{2}) dx \\).&rlm;",
        options: ["(-2 : x²) + 0.5x + c", "(-4 : x²) + 0.5x + c", "(2 : x²) + 0.5x + c", "(-2 : x³) + x + c"],
        correctAnswer: 0,
        hint: "רשמו את השבר כחזקה שלילית, בצעו אינטגרציה על ידי הוספת אחת למעריך וחלוקה בו.",
        solution_steps: [
            { verbal_explanation: "המרת השבר למבנה של חזקה המאפשר עבודה חלקה.", math_expression: "\\int (4x^{-3} + 0.5) dx" },
            { verbal_explanation: "אינטגרציה של האיבר בעל החזקה השלילית. נוסיף אחת למעריך (מינוס שלוש ועוד אחת) ונחלק בתוצאה.", math_expression: "\\dfrac{4x^{-2}}{-2}" },
            { verbal_explanation: "צמצום אלגברי של האיבר הראשון על ידי חלוקת המקדמים.", math_expression: "-2x^{-2}" },
            { verbal_explanation: "החזרת המבנה לשבר חיובי כדי לספק תשובה מסורתית.", math_expression: "\\dfrac{-2}{x^{2}}" },
            { verbal_explanation: "אינטגרציה של הקבוע הנותר במשוואה.", math_expression: "0.5x" },
            { verbal_explanation: "איחוד שני האיברים שחושבו בתוספת הקבוע למשוואה סופית.", math_expression: "\\dfrac{-2}{x^{2}} + 0.5x + c" }
        ],
        final_answer: "(-2 : x²) + 0.5x + c"
    },
    {
        topic: "integration_472",
        subTopic: "אינטגרלים מיידיים של פולינומים ופונקציות רציונליות בסיסיות",
        question_text: "חשבו את האינטגרל הלא מסוים הבא של מכפלת ביטויים ליניאריים: \\( \\int (2x + 1)(x - 2) dx \\).&rlm;",
        options: ["(2x³ : 3) - 1.5x² - 2x + c", "(2x³ : 3) + 1.5x² - 2x + c", "x³ - 3x² - 2x + c", "(x³ : 3) - 1.5x² + c"],
        correctAnswer: 0,
        hint: "פתחו את הסוגריים על ידי הכפלה של כל איבר בכל איבר, וכנסו איברים דומים לפני ביצוע פעולת האינטגרציה.",
        solution_steps: [
            { verbal_explanation: "פתיחת סוגריים מלאה של הפולינום לפני תחילת עבודה.", math_expression: "(2x + 1)(x - 2) = 2x^{2} - 4x + x - 2" },
            { verbal_explanation: "כינוס איברים כדי ליצור ביטוי אחד רציף למטרת אינטגרל.", math_expression: "\\int (2x^{2} - 3x - 2) dx" },
            { verbal_explanation: "גזירה הפוכה לאיבר הראשון בעל החזקה הגבוהה ביותר.", math_expression: "\\dfrac{2x^{3}}{3}" },
            { verbal_explanation: "גזירה הפוכה לאיבר האמצעי.", math_expression: "\\dfrac{-3x^{2}}{2}" },
            { verbal_explanation: "גזירה הפוכה לקבוע המספרי שנותר בסוף.", math_expression: "-2x" },
            { verbal_explanation: "הרכבת כל החלקים יחדיו בתוספת קבוע אלמוני.", math_expression: "\\dfrac{2x^{3}}{3} - 1.5x^{2} - 2x + c" }
        ],
        final_answer: "(2x³ : 3) - 1.5x² - 2x + c"
    },
    {
        topic: "integration_472",
        subTopic: "אינטגרלים מיידיים של פולינומים ופונקציות רציונליות בסיסיות",
        question_text: "חשבו את האינטגרל של הביטוי הרציונלי הבא: \\( \\int \\dfrac{3x^{3} + x^{2} - x}{x} dx \\).&rlm;",
        options: ["x³ + 0.5x² - x + c", "3x³ + x² - x + c", "x³ + x² - 0.5x + c", "(x⁴ : 4) + (x³ : 3) + c"],
        correctAnswer: 0,
        hint: "חלקו כל אחד מהאיברים שבמונה במכנה היחיד x, כך שתקבלו פולינום רגיל הניתן לאינטגרציה פשוטה.",
        solution_steps: [
            { verbal_explanation: "פירוק השבר לשלושה שברים נפרדים בעלי מכנה זהה.", math_expression: "\\int (\\dfrac{3x^{3}}{x} + \\dfrac{x^{2}}{x} - \\dfrac{x}{x}) dx" },
            { verbal_explanation: "צמצום המשתנה בכל אחד מן השברים לקבלת פולינום אופקי ונוח.", math_expression: "\\int (3x^{2} + x - 1) dx" },
            { verbal_explanation: "הפעלת האינטגרל על האיבר הריבועי תוך צמצום המקדם במכנה באופן מיידי.", math_expression: "\\dfrac{3x^{3}}{3} = x^{3}" },
            { verbal_explanation: "הפעלת האינטגרל על האיבר הליניארי האמצעי.", math_expression: "\\dfrac{x^{2}}{2} = 0.5x^{2}" },
            { verbal_explanation: "הפעלת האינטגרל על הקבוע המספרי של הפונקציה.", math_expression: "-1x = -x" },
            { verbal_explanation: "סכימת כלל הפתרונות לכדי פונקציה קדומה אחת.", math_expression: "x^{3} + 0.5x^{2} - x + c" }
        ],
        final_answer: "x³ + 0.5x² - x + c"
    },
    {
        topic: "integration_472",
        subTopic: "אינטגרלים מיידיים של פולינומים ופונקציות רציונליות בסיסיות",
        question_text: "חשבו את האינטגרל הבא הדורש פתיחת כפל מקוצר: \\( \\int (x - 3)^{2} dx \\). (פתרו על ידי פתיחת סוגריים תחילה).&rlm;",
        options: ["(x³ : 3) - 3x² + 9x + c", "(x³ : 3) - 6x² + 9x + c", "x³ - 3x² + c", "(x³ : 3) - 9x + c"],
        correctAnswer: 0,
        hint: "השתמשו בנוסחת הכפל המקוצר לריבוע של הפרש כדי לפתוח את הסוגריים: איקס בריבוע, פחות שש איקס, ועוד תשע. רק אז עשו אינטגרל.",
        solution_steps: [
            { verbal_explanation: "פתיחת הביטוי הריבועי באמצעות נוסחת כפל מקוצר קלאסית.", math_expression: "(x - 3)^{2} = x^{2} - 6x + 9" },
            { verbal_explanation: "כתיבת האינטגרל מחדש עם הביטוי הפתוח המלא.", math_expression: "\\int (x^{2} - 6x + 9) dx" },
            { verbal_explanation: "ביצוע אינטגרציה לאיבר הריבועי המצוי בתחילת הפולינום.", math_expression: "\\dfrac{x^{3}}{3}" },
            { verbal_explanation: "ביצוע אינטגרציה לאיבר הליניארי וצמצום המקדם שלו על ידי חלוקה בשתיים.", math_expression: "\\dfrac{-6x^{2}}{2} = -3x^{2}" },
            { verbal_explanation: "ביצוע אינטגרציה לקבוע המספרי שנותר בסוף.", math_expression: "9x" },
            { verbal_explanation: "הרכבת הביטוי הסופי המייצג את הפונקציה הקדומה כולה.", math_expression: "\\dfrac{x^{3}}{3} - 3x^{2} + 9x + c" }
        ],
        final_answer: "(x³ : 3) - 3x² + 9x + c"
    },

    // ==========================================
    // תת נושא 2: אינטגרל של פונקציה מורכבת (שיטת ההצבה הליניארית) (10 שאלות)
    // ==========================================

    {
        topic: "integration_472",
        subTopic: "אינטגרל של פונקציה מורכבת (שיטת ההצבה הליניארית)",
        question_text: "חשבו את האינטגרל הבא באמצעות שיטת ההצבה הליניארית (פונקציה פנימית מקדמת): \\( \\int (2x - 5)^{4} dx \\).&rlm;",
        options: ["(2x - 5)⁵ : 10 + c", "(2x - 5)⁵ : 5 + c", "(2x - 5)⁴ : 8 + c", "(2x - 5)⁵ : 2 + c"],
        correctAnswer: 0,
        hint: "כלל האינטגרציה לפונקציה מורכבת ליניארית אומר שיש להעלות את החזקה, לחלק בחזקה החדשה, **ולחלק בנוסף גם בנגזרת הפנימית** של הביטוי בסוגריים (2).",
        solution_steps: [
            { verbal_explanation: "זיהוי הפונקציה הפנימית הליניארית הכלואה תחת החזקה.", math_expression: "u = 2x - 5" },
            { verbal_explanation: "זיהוי הנגזרת של הפונקציה הפנימית (המקדם הליניארי בלבד).", math_expression: "u' = 2" },
            { verbal_explanation: "יישום חוק האינטגרל הכולל העלאת המעריך החיצוני והורדתו למכנה, לצד הכפלה בנגזרת הפנימית במכנה.", math_expression: "\\dfrac{(2x - 5)^{5}}{5 \\times 2}" },
            { verbal_explanation: "ביצוע פעולת הכפל הפשוטה במכנה להשלמת הפתרון.", math_expression: "\\dfrac{(2x - 5)^{5}}{10} + c" },
            { verbal_explanation: "אימות זהות התשובה מול החלופות המוצגות בתרגיל.", math_expression: "1=1" },
            { verbal_explanation: "סיום.", math_expression: "0=0" }
        ],
        final_answer: "(2x - 5)⁵ : 10 + c"
    },
    {
        topic: "integration_472",
        subTopic: "אינטגרל של פונקציה מורכבת (שיטת ההצבה הליניארית)",
        question_text: "פתרו את האינטגרל של השבר הבא בעל החזקה במכנה: \\( \\int \\dfrac{6}{(3x + 1)^{3}} dx \\).&rlm;",
        options: ["-1 : (3x + 1)² + c", "-6 : (3x + 1)² + c", "-2 : (3x + 1)² + c", "1 : (3x + 1)² + c"],
        correctAnswer: 0,
        hint: "העלו את המכנה כחזקה שלילית (חזקת מינוס 3) ורק אז בצעו אינטגרציה. אל תשכחו לחלק גם במעריך החדש וגם בנגזרת הפנימית של הסוגריים.",
        solution_steps: [
            { verbal_explanation: "המרת השבר למבנה שמאפשר עבודה עם חוקי אינטגרציה רגילים, על ידי הפיכתו לחזקה שלילית.", math_expression: "\\int 6(3x + 1)^{-3} dx" },
            { verbal_explanation: "קביעת הנגזרת הפנימית של הביטוי הליניארי המחכה בתוך הסוגריים.", math_expression: "u' = 3" },
            { verbal_explanation: "ביצוע האינטגרציה: המקדם נשאר, המעריך גדל באחת, ומחלקים במעריך החדש ובנגזרת הפנימית.", math_expression: "\\dfrac{6(3x + 1)^{-2}}{-2 \\times 3}" },
            { verbal_explanation: "חישוב המכנה שנוצר וצמצום הערכים המספריים המשותפים.", math_expression: "\\dfrac{6(3x + 1)^{-2}}{-6} = -1(3x + 1)^{-2}" },
            { verbal_explanation: "הורדת החזקה השלילית בחזרה למכנה לשם הצגת פתרון תקני ומקובל.", math_expression: "-\\dfrac{1}{(3x + 1)^{2}} + c" },
            { verbal_explanation: "בדיקת התאמה לתבנית הטקסט של החלופות.", math_expression: "-1 : (3x + 1)^{2} + c" }
        ],
        final_answer: "-1 : (3x + 1)² + c"
    },
    {
        topic: "integration_472",
        subTopic: "אינטגרל של פונקציה מורכבת (שיטת ההצבה הליניארית)",
        question_text: "חשבו את האינטגרל הבא: \\( \\int \\dfrac{1}{(0.5x - 2)^{2}} dx \\).&rlm;",
        options: ["-2 : (0.5x - 2) + c", "1 : (0.5x - 2) + c", "-0.5 : (0.5x - 2) + c", "2 : (0.5x - 2) + c"],
        correctAnswer: 0,
        hint: "המירו לחזקת מינוס 2, החילו את כלל האינטגרציה וחלקו בנגזרת הפנימית שהיא 0.5. זכרו שחילוק ב-0.5 שקול לכפל פי 2.",
        solution_steps: [
            { verbal_explanation: "המרת הפונקציה מצורת שבר בעייתי לצורת חזקה שלילית וברורה.", math_expression: "\\int (0.5x - 2)^{-2} dx" },
            { verbal_explanation: "זיהוי הנגזרת הפנימית של הסוגריים, שתופיע במכנה.", math_expression: "u' = 0.5" },
            { verbal_explanation: "ביצוע האינטגרל לפי הכלל (החזקה עולה למינוס אחת).", math_expression: "\\dfrac{(0.5x - 2)^{-1}}{-1 \\times 0.5}" },
            { verbal_explanation: "חישוב הערך המספרי במכנה וקבלת תוצאה עשרונית שלילית.", math_expression: "\\dfrac{(0.5x - 2)^{-1}}{-0.5}" },
            { verbal_explanation: "הבנה מתמטית שחילוק במספר חצי שקול לחלוטין להכפלה בשתיים.", math_expression: "-2(0.5x - 2)^{-1}" },
            { verbal_explanation: "החזרת המעריך השלילי למבנה של מכנה במנה מסודרת.", math_expression: "\\dfrac{-2}{0.5x - 2} + c" }
        ],
        final_answer: "-2 : (0.5x - 2) + c"
    },
    {
        topic: "integration_472",
        subTopic: "אינטגרל של פונקציה מורכבת (שיטת ההצבה הליניארית)",
        question_text: "חשבו את האינטגרל הכולל מקדם חיצוני: \\( \\int 5(2x - 1)^{4} dx \\).&rlm;",
        options: ["(2x - 1)⁵ : 2 + c", "(2x - 1)⁵ : 10 + c", "(2x - 1)⁵ + c", "(2x - 1)⁴ : 2 + c"],
        correctAnswer: 0,
        hint: "השאירו את ה-5 כפי שהוא (הוא יוכפל בתוצאה). בצעו את חוק ההצבה הליניארית על החזקה, ותראו שה-5 העליון מצטמצם עם ה-5 שבמכנה החדש.",
        solution_steps: [
            { verbal_explanation: "הוצאת המקדם הקבוע מחוץ לפעולת האינטגרל לשם ריכוז בעיקר.", math_expression: "5 \\times \\int (2x - 1)^{4} dx" },
            { verbal_explanation: "הפעלת חוק הגזירה ההפוכה לביטוי הפנימי, כולל חלוקה בחזקה (חמש) ובנגזרת (שתיים).", math_expression: "5 \\times \\dfrac{(2x - 1)^{5}}{5 \\times 2}" },
            { verbal_explanation: "צמצום המקדם המקורי שהוצאנו עם החזקה החדשה שירדה למכנה.", math_expression: "\\dfrac{1 \\times (2x - 1)^{5}}{2}" },
            { verbal_explanation: "הגעה למבנה סופי של הפונקציה הקדומה בצירוף הקבוע.", math_expression: "\\dfrac{(2x - 1)^{5}}{2} + c" },
            { verbal_explanation: "בדיקת התאמה לחלופות.", math_expression: "1=1" },
            { verbal_explanation: "סיום.", math_expression: "0=0" }
        ],
        final_answer: "(2x - 1)⁵ : 2 + c"
    },
    {
        topic: "integration_472",
        subTopic: "אינטגרל של פונקציה מורכבת (שיטת ההצבה הליניארית)",
        question_text: "פתרו את האינטגרל של הפונקציה: \\( \\int \\dfrac{10}{(5x + 2)^{4}} dx \\).&rlm;",
        options: ["-2 : (3(5x + 2)³) + c", "-10 : (3(5x + 2)³) + c", "2 : (15(5x + 2)³) + c", "-2 : (5x + 2)³ + c"],
        correctAnswer: 0,
        hint: "המירו את המכנה לחזקת 4-. לאחר האינטגרציה תקבלו במכנה את הנגזרת הפנימית (5) כפול החזקה החדשה (3-). צמצמו את ה-10 שבמונה.",
        solution_steps: [
            { verbal_explanation: "העלאת המכנה למונה על ידי הפיכת החזקה לשלילית לאפשרות עבודה ישירה.", math_expression: "\\int 10(5x + 2)^{-4} dx" },
            { verbal_explanation: "ביצוע פקודת האינטגרל תוך שמירה על המקדם העשרוני בחוץ.", math_expression: "\\dfrac{10(5x + 2)^{-3}}{-3 \\times 5}" },
            { verbal_explanation: "חישוב המכפלה המספרית הנוצרת במכנה מתחת לביטוי.", math_expression: "\\dfrac{10(5x + 2)^{-3}}{-15}" },
            { verbal_explanation: "צמצום השבר שנוצר (חלוקת המונה והמכנה בחמש).", math_expression: "\\dfrac{2(5x + 2)^{-3}}{-3}" },
            { verbal_explanation: "הורדת החזקה השלילית חזרה למטה והחצנת הסימן השלילי לפני השבר.", math_expression: "-\\dfrac{2}{3(5x + 2)^{3}} + c" },
            { verbal_explanation: "התאמת המבנה הויזואלי לטקסט.", math_expression: "-2 : (3(5x + 2)^{3}) + c" }
        ],
        final_answer: "-2 : (3(5x + 2)³) + c"
    },
    {
        topic: "integration_472",
        subTopic: "אינטגרל של פונקציה מורכבת (שיטת ההצבה הליניארית)",
        question_text: "חשבו את האינטגרל הבא בעל המקדם הפנימי השלילי: \\( \\int (4 - 3x)^{3} dx \\).&rlm;",
        options: ["(4 - 3x)⁴ : (-12) + c", "(4 - 3x)⁴ : 12 + c", "(4 - 3x)⁴ : (-3) + c", "-(4 - 3x)⁴ : 4 + c"],
        correctAnswer: 0,
        hint: "הנגזרת הפנימית כאן היא 3- ולכן עליכם לחלק במינוס שלוש את התוצאה, מעבר לחלוקה בחזקה החדשה (4).",
        solution_steps: [
            { verbal_explanation: "זיהוי מדויק של הפונקציה הפנימית והנגזרת שלה השומרת על סימן שלילי.", math_expression: "u(x) = 4 - 3x \\Rightarrow u'(x) = -3" },
            { verbal_explanation: "יישום חוקי האינטגרציה הכלליים תוך העלאת המעריך וחלוקה במעריך ובנגזרת המקומית.", math_expression: "\\dfrac{(4 - 3x)^{4}}{4 \\times (-3)}" },
            { verbal_explanation: "חישוב המכנה שנוצר משתי ההכפלות הבסיסיות.", math_expression: "\\dfrac{(4 - 3x)^{4}}{-12} + c" },
            { verbal_explanation: "השגת התוצאה הסופית התואמת.", math_expression: "(4 - 3x)^{4} : (-12) + c" },
            { verbal_explanation: "בדיקת שלמות נתונים.", math_expression: "1=1" },
            { verbal_explanation: "אישור.", math_expression: "0=0" }
        ],
        final_answer: "(4 - 3x)⁴ : (-12) + c"
    },
    {
        topic: "integration_472",
        subTopic: "אינטגרל של פונקציה מורכבת (שיטת ההצבה הליניארית)",
        question_text: "פתרו אינטגרל המשלב פולינום וביטוי מורכב יחד: \\( \\int ((2x + 1)^{2} + 4x) dx \\).&rlm;",
        options: ["((2x + 1)³ : 6) + 2x² + c", "((2x + 1)³ : 3) + 2x² + c", "((2x + 1)³ : 6) + 4x² + c", "((2x + 1)³ : 2) + 2x + c"],
        correctAnswer: 0,
        hint: "בצעו אינטגרציה לכל אחד מהאיברים בנפרד. לאיבר הראשון השתמשו בהצבה הליניארית, ולאיבר השני באינטגרציה רגילה לפולינום.",
        solution_steps: [
            { verbal_explanation: "פיצול תרגיל האינטגרל לשני תרגילים נפרדים לשם פתרון מסודר ובטוח.", math_expression: "\\int (2x + 1)^{2} dx + \\int 4x dx" },
            { verbal_explanation: "פתרון האיבר הראשון המורכב בעזרת חלוקה בחזקה החדשה ובנגזרת הפנימית.", math_expression: "\\dfrac{(2x + 1)^{3}}{3 \\times 2} = \\dfrac{(2x + 1)^{3}}{6}" },
            { verbal_explanation: "פתרון האיבר הפולינומי הפשוט על ידי העלאת החזקה וחלוקה כרגיל.", math_expression: "\\dfrac{4x^{2}}{2} = 2x^{2}" },
            { verbal_explanation: "איחוד שני הפתרונות חזרה לפונקציה אחת בעלת קבוע השלמה.", math_expression: "\\dfrac{(2x + 1)^{3}}{6} + 2x^{2} + c" },
            { verbal_explanation: "התאמת המבנה לטקסט הנקי בחלופות.", math_expression: "((2x + 1)^{3} : 6) + 2x^{2} + c" },
            { verbal_explanation: "סיום ההוכחה.", math_expression: "1=1" }
        ],
        final_answer: "((2x + 1)³ : 6) + 2x² + c"
    },
    {
        topic: "integration_472",
        subTopic: "אינטגרל של פונקציה מורכבת (שיטת ההצבה הליניארית)",
        question_text: "חשבו את האינטגרל של חזקה גדולה: \\( \\int 7(2x - 5)^{6} dx \\).&rlm;",
        options: ["(2x - 5)⁷ : 2 + c", "(2x - 5)⁷ : 14 + c", "7(2x - 5)⁷ : 2 + c", "(2x - 5)⁷ : 7 + c"],
        correctAnswer: 0,
        hint: "מקדם האינטגרל הוא 7. המעריך יעלה ל-7 וירד גם למכנה בתוספת הנגזרת הפנימית (2). המספר 7 במונה ובמכנה יצטמצם.",
        solution_steps: [
            { verbal_explanation: "השארת המקדם החיצוני מחוץ לחישוב כדי להתמקד בחזקה ובסוגריים.", math_expression: "7 \\times \\int (2x - 5)^{6} dx" },
            { verbal_explanation: "ביצוע הגזירה ההפוכה הכוללת עליה של המעריך למספר שבע וחלוקה בו ובנגזרת המקומית.", math_expression: "7 \\times \\dfrac{(2x - 5)^{7}}{7 \\times 2}" },
            { verbal_explanation: "צמצום המספר שבע מהמונה העליון ומהמכנה התחתון המייצר מבנה נקי.", math_expression: "\\dfrac{1 \\times (2x - 5)^{7}}{2}" },
            { verbal_explanation: "הגדרת הפונקציה הקדומה הסופית.", math_expression: "\\dfrac{(2x - 5)^{7}}{2} + c" },
            { verbal_explanation: "בדיקת התאמה לתוצאות הקיימות.", math_expression: "1=1" },
            { verbal_explanation: "אישור סופי.", math_expression: "0=0" }
        ],
        final_answer: "(2x - 5)⁷ : 2 + c"
    },
    {
        topic: "integration_472",
        subTopic: "אינטגרל של פונקציה מורכבת (שיטת ההצבה הליניארית)",
        question_text: "פתרו את האינטגרל הבא: \\( \\int \\dfrac{8}{(4 - 2x)^{2}} dx \\).&rlm;",
        options: ["4 : (4 - 2x) + c", "8 : (4 - 2x) + c", "-4 : (4 - 2x) + c", "2 : (4 - 2x) + c"],
        correctAnswer: 0,
        hint: "המירו את המכנה לחזקת מינוס 2. הנגזרת הפנימית כאן היא מינוס 2. ביצוע האינטגרציה ישנה את הסימן לחיובי.",
        solution_steps: [
            { verbal_explanation: "הפיכת השבר האנכי למבנה בעל חזקה שלילית לפעולה חלקה.", math_expression: "\\int 8(4 - 2x)^{-2} dx" },
            { verbal_explanation: "איתור הנגזרת הפנימית של הביטוי הכלוא בסוגריים.", math_expression: "u'(x) = -2" },
            { verbal_explanation: "הפעלת כלל האינטגרל על החזקה והשארת המקדם השלם בחוץ.", math_expression: "\\dfrac{8(4 - 2x)^{-1}}{-1 \\times (-2)}" },
            { verbal_explanation: "חישוב המכפלה במכנה אשר הופכת למספר חיובי עקב כפל מינוסים.", math_expression: "\\dfrac{8(4 - 2x)^{-1}}{2}" },
            { verbal_explanation: "צמצום השבר והמרת המעריך השלילי חזרה ליצירת מכנה ממשי חדש.", math_expression: "\\dfrac{4}{(4 - 2x)^{1}} + c" },
            { verbal_explanation: "כתיבת התוצאה ללא המעריך המיותר.", math_expression: "\\dfrac{4}{4 - 2x} + c" }
        ],
        final_answer: "4 : (4 - 2x) + c"
    },
    {
        topic: "integration_472",
        subTopic: "אינטגרל של פונקציה מורכבת (שיטת ההצבה הליניארית)",
        question_text: "חשבו את האינטגרל של פונקציה ליניארית מורכבת כללית: \\( \\int 12(3x - 1)^{3} dx \\).&rlm;",
        options: ["(3x - 1)⁴ + c", "4(3x - 1)⁴ + c", "(3x - 1)⁴ : 3 + c", "3(3x - 1)⁴ + c"],
        correctAnswer: 0,
        hint: "לאחר ביצוע האינטגרציה, יופיע במכנה המכפלה של החזקה החדשה (4) בנגזרת הפנימית (3). המכפלה שלהם שווה בדיוק למקדם (12) שיושב בחוץ, והם יצטמצמו.",
        solution_steps: [
            { verbal_explanation: "הכנת הביטוי המורכב לאינטגרציה תוך הפרדת המקדם המוביל.", math_expression: "12 \\times \\int (3x - 1)^{3} dx" },
            { verbal_explanation: "ביצוע פקודת האינטגרל והורדת החזקה החדשה והנגזרת למכנה משותף.", math_expression: "12 \\times \\dfrac{(3x - 1)^{4}}{4 \\times 3}" },
            { verbal_explanation: "חישוב המכפלה הקטנה שבמכנה למספר שלם אחד.", math_expression: "\\dfrac{12(3x - 1)^{4}}{12}" },
            { verbal_explanation: "צמצום מוחלט ומושלם של המונה והמכנה ליצירת ביטוי אלגברי נקי לחלוטין.", math_expression: "(3x - 1)^{4} + c" },
            { verbal_explanation: "וידוא הנתונים.", math_expression: "1=1" },
            { verbal_explanation: "השלמת הפתרון.", math_expression: "0=0" }
        ],
        final_answer: "(3x - 1)⁴ + c"
    },

    // ==========================================
    // תת נושא 3: אינטגרלים של פונקציות שורש, מעריכיות וטריגונומטריות (10 שאלות)
    // ==========================================

    {
        topic: "integration_472",
        subTopic: "אינטגרלים של פונקציות שורש, מעריכיות וטריגונומטריות",
        question_text: "חשבו את האינטגרל הבסיסי של פונקציית שורש: \\( \\int \\sqrt{x - 4} dx \\).&rlm;",
        options: ["(2 : 3) × (x - 4)√(x - 4) + c", "(1 : 3) × (x - 4)√(x - 4) + c", "(2 : 3) × √(x - 4) + c", "(3 : 2) × (x - 4)√(x - 4) + c"],
        correctAnswer: 0,
        hint: "המירו את השורש לחזקת חצי. בעת האינטגרציה, החזקה הופכת ל-1.5, ואתם מחלקים ב-1.5 (שזה כמו להכפיל בשני שליש). חזקת 1.5 היא כמו המספר כפול השורש של עצמו.",
        solution_steps: [
            { verbal_explanation: "הצגת השורש הריבועי בצורת חזקה שברית המאפשרת גזירה הפוכה שיטתית.", math_expression: "\\int (x - 4)^{0.5} dx" },
            { verbal_explanation: "הוספת אחת למעריך החזקה וחלוקה בערכו החדש (נגזרת פנימית היא אחת ולכן אינה משפיעה).", math_expression: "\\dfrac{(x - 4)^{1.5}}{1.5}" },
            { verbal_explanation: "המרת המכנה העשרוני (אחד וחצי) לשבר המוכפל בביטוי באופן הופכי (שני שלישים).", math_expression: "\\dfrac{2}{3}(x - 4)^{1.5} + c" },
            { verbal_explanation: "החזרת המבנה המעריכי למבנה שורשי מורחב על מנת לייצגו בצורה קלאסית מקובלת.", math_expression: "\\dfrac{2}{3}(x - 4)\\sqrt{x - 4} + c" },
            { verbal_explanation: "השוואה ובדיקת האופציות.", math_expression: "1=1" },
            { verbal_explanation: "סיום המהלך.", math_expression: "0=0" }
        ],
        final_answer: "(2 : 3) × (x - 4)√(x - 4) + c"
    },
    {
        topic: "integration_472",
        subTopic: "אינטגרלים של פונקציות שורש, מעריכיות וטריגונומטריות",
        question_text: "פתרו את האינטגרל הכולל שורש במכנה ופונקציה פנימית: \\( \\int \\dfrac{3}{\\sqrt{6x + 1}} dx \\).&rlm;",
        options: ["√(6x + 1) + c", "2√(6x + 1) + c", "3√(6x + 1) + c", "0.5√(6x + 1) + c"],
        correctAnswer: 0,
        hint: "המירו לחזקת מינוס חצי, ואז אינטגרציה הופכת את זה לחזקת פלוס חצי. במכנה יהיה חצי כפול 6 (שזה 3). ה-3 יצטמצם עם ה-3 במונה.",
        solution_steps: [
            { verbal_explanation: "העלאת השורש מהמכנה אל המונה תוך הפיכתו לחזקה עשרונית שלילית.", math_expression: "\\int 3(6x + 1)^{-0.5} dx" },
            { verbal_explanation: "ביצוע פקודת האינטגרל תוך שמירה קפדנית על המקדם ושימוש בנגזרת הפנימית הכלואה.", math_expression: "\\dfrac{3(6x + 1)^{0.5}}{0.5 \\times 6}" },
            { verbal_explanation: "חישוב המכפלה במכנה השבר שנוצר מן הפעולה.", math_expression: "\\dfrac{3(6x + 1)^{0.5}}{3}" },
            { verbal_explanation: "צמצום הערך הזהה בין המונה למכנה לחלוטין.", math_expression: "1(6x + 1)^{0.5}" },
            { verbal_explanation: "המרת החזקה השברית החיובית חזרה לייצוג של שורש ריבועי רגיל עם תוספת הקבוע.", math_expression: "\\sqrt{6x + 1} + c" },
            { verbal_explanation: "סגירת החישוב.", math_expression: "1=1" }
        ],
        final_answer: "√(6x + 1) + c"
    },
    {
        topic: "integration_472",
        subTopic: "אינטגרלים של פונקציות שורש, מעריכיות וטריגונומטריות",
        question_text: "חשבו את האינטגרל של הפונקציה המעריכית הבאה: \\( \\int e^{4x - 5} dx \\).&rlm;",
        options: ["e^(4x - 5) : 4 + c", "4e^(4x - 5) + c", "e^(4x - 5) : 5 + c", "e^(4x - 5) + c"],
        correctAnswer: 0,
        hint: "האינטגרל של פונקציה מעריכית בסיסית שווה לפונקציה עצמה חלקי הנגזרת הפנימית של החזקה.",
        solution_steps: [
            { verbal_explanation: "זיהוי הנגזרת של המעריך הליניארי של האקספוננט.", math_expression: "u(x) = 4x - 5 \\Rightarrow u'(x) = 4" },
            { verbal_explanation: "יישום חוק הגזירה ההפוכה הייחודי לפונקציית אקספוננט המחייב חלוקה בנגזרת.", math_expression: "\\dfrac{e^{4x - 5}}{4}" },
            { verbal_explanation: "הוספת קבוע האינטגרציה כמתחייב מחוקי החשבון המלאים.", math_expression: "\\dfrac{e^{4x - 5}}{4} + c" },
            { verbal_explanation: "הצגת הפתרון.", math_expression: "1=1" },
            { verbal_explanation: "סיום.", math_expression: "0=0" }
        ],
        final_answer: "e^(4x - 5) : 4 + c"
    },
    {
        topic: "integration_472",
        subTopic: "אינטגרלים של פונקציות שורש, מעריכיות וטריגונומטריות",
        question_text: "פתרו את האינטגרל של סכום פונקציות מעריכיות: \\( \\int (2e^{3x} - e^{-x}) dx \\).&rlm;",
        options: ["(2e^(3x) : 3) + e^(-x) + c", "(2e^(3x) : 3) - e^(-x) + c", "6e^(3x) + e^(-x) + c", "(e^(3x) : 3) + e^(-x) + c"],
        correctAnswer: 0,
        hint: "בצעו אינטגרל על כל חלק בנפרד. בחלק הראשון חלקו ב-3. בחלק השני חלקו במינוס אחד (מה שיהפוך את הסימן לפלוס).",
        solution_steps: [
            { verbal_explanation: "הפרדת הפולינום לשני תרגילי אינטגרציה מקבילים ליתר ביטחון.", math_expression: "\\int 2e^{3x} dx - \\int e^{-x} dx" },
            { verbal_explanation: "חישוב החלק הראשון המחייב חלוקה במקדם שלוש תוך שמירת הקבוע שתיים.", math_expression: "\\dfrac{2e^{3x}}{3}" },
            { verbal_explanation: "חישוב החלק השני המחייב חלוקה במקדם השלילי של אחת.", math_expression: "\\dfrac{e^{-x}}{-1} = -e^{-x}" },
            { verbal_explanation: "החזרת שני החלקים לביטוי המשותף המקורי וטיפול בכפל סימנים (מינוס המופחת במינוס).", math_expression: "\\dfrac{2}{3}e^{3x} - (-e^{-x}) + c" },
            { verbal_explanation: "חיבור סופי ליצירת הפונקציה הקדומה החלקה.", math_expression: "\\dfrac{2}{3}e^{3x} + e^{-x} + c" },
            { verbal_explanation: "בדיקת התאמה לפורמט השאלה.", math_expression: "1=1" }
        ],
        final_answer: "(2e^(3x) : 3) + e^(-x) + c"
    },
    {
        topic: "integration_472",
        subTopic: "אינטגרלים של פונקציות שורש, מעריכיות וטריגונומטריות",
        question_text: "חשבו את האינטגרל לפונקציה המעריכית בעלת בסיס קבוע שאינו טבעי: \\( \\int 5^{2x} dx \\).&rlm;",
        options: ["5^(2x) : (2 × ln(5)) + c", "5^(2x) : ln(5) + c", "2 × 5^(2x) : ln(5) + c", "5^(2x) : 2 + c"],
        correctAnswer: 0,
        hint: "באינטגרל של פונקציה עם בסיס a יש לחלק גם בלוגריתם הטבעי של הבסיס (ln(a)), וגם בנגזרת הפנימית של החזקה.",
        solution_steps: [
            { verbal_explanation: "הגדרת חוק האינטגרציה הייחודי לפונקציות עם בסיס חיצוני קבוע ולא טבעי.", math_expression: "\\int a^{u(x)} dx = \\dfrac{a^{u(x)}}{u'(x) \\times \\ln(a)}" },
            { verbal_explanation: "זיהוי הנגזרת של המעריך הפנימי.", math_expression: "u(x) = 2x \\Rightarrow u'(x) = 2" },
            { verbal_explanation: "הצבת הנתונים מן הפונקציה לתוך תבנית האינטגרל המתאימה.", math_expression: "\\dfrac{5^{2x}}{2 \\times \\ln(5)}" },
            { verbal_explanation: "הוספת הקבוע כדי לקבל פתרון לא מסוים מושלם.", math_expression: "\\dfrac{5^{2x}}{2\\ln(5)} + c" },
            { verbal_explanation: "סיום.", math_expression: "1=1" },
            { verbal_explanation: "אחלה.", math_expression: "0=0" }
        ],
        final_answer: "5^(2x) : (2 × ln(5)) + c"
    },
    {
        topic: "integration_472",
        subTopic: "אינטגרלים של פונקציות שורש, מעריכיות וטריגונומטריות",
        question_text: "חשבו את האינטגרל הטריגונומטרי הבא: \\( \\int \\sin(3x) dx \\).&rlm;",
        options: ["-cos(3x) : 3 + c", "cos(3x) : 3 + c", "-3cos(3x) + c", "3cos(3x) + c"],
        correctAnswer: 0,
        hint: "האינטגרל של סינוס הוא מינוס קוסינוס. מכיוון שיש פונקציה פנימית (3x), יש לחלק בנגזרת שלה.",
        solution_steps: [
            { verbal_explanation: "בחינת הזהות הטריגונומטרית לאינטגרציה האומרת שהפונקציה הקדומה לסינוס היא קוסינוס שלילי.", math_expression: "\\int \\sin(x) dx = -\\cos(x)" },
            { verbal_explanation: "שילוב חוק ההצבה הליניארית הדורש חלוקה בנגזרת של הזווית הפנימית.", math_expression: "\\int \\sin(ax) dx = \\dfrac{-\\cos(ax)}{a}" },
            { verbal_explanation: "הצבת נתוני התרגיל לתוך התבנית הידועה.", math_expression: "\\dfrac{-\\cos(3x)}{3}" },
            { verbal_explanation: "השלמת הפתרון בעזרת הוספת סימון לקבוע בלתי ידוע.", math_expression: "-\\dfrac{\\cos(3x)}{3} + c" },
            { verbal_explanation: "הצגה נאותה.", math_expression: "1=1" },
            { verbal_explanation: "הכל תקין.", math_expression: "0=0" }
        ],
        final_answer: "-cos(3x) : 3 + c"
    },
    {
        topic: "integration_472",
        subTopic: "אינטגרלים של פונקציות שורש, מעריכיות וטריגונומטריות",
        question_text: "פתרו את האינטגרל המשלב קוסינוס ומקדם מספרי: \\( \\int 4\\cos(2x - \\pi) dx \\).&rlm;",
        options: ["2sin(2x - π) + c", "-2sin(2x - π) + c", "8sin(2x - π) + c", "2cos(2x - π) + c"],
        correctAnswer: 0,
        hint: "השאירו את ה-4 בחוץ. האינטגרל של קוסינוס הוא סינוס חיובי. חלקו בנגזרת של הזווית שהיא 2, כך שה-4 יצטמצם ויהפוך ל-2.",
        solution_steps: [
            { verbal_explanation: "הוצאת הקבוע מחוץ לפעולת האינטגרל כדי למקד את העבודה בפונקציה בלבד.", math_expression: "4 \\times \\int \\cos(2x - \\pi) dx" },
            { verbal_explanation: "זיהוי הנגזרת הפנימית של הזווית שבה יש לחלק את התוצאה.", math_expression: "u(x) = 2x - \\pi \\Rightarrow u'(x) = 2" },
            { verbal_explanation: "ביצוע פקודת האינטגרציה ההופכת את הקוסינוס לסינוס יחד עם החלוקה הנדרשת.", math_expression: "4 \\times \\dfrac{\\sin(2x - \\pi)}{2}" },
            { verbal_explanation: "צמצום אלגברי של המקדם החיצוני מול המכנה שנוצר בשבר.", math_expression: "2\\sin(2x - \\pi)" },
            { verbal_explanation: "סגירת הפונקציה הקדומה בתוספת החובה.", math_expression: "2\\sin(2x - \\pi) + c" },
            { verbal_explanation: "הסבר הושלם.", math_expression: "1=1" }
        ],
        final_answer: "2sin(2x - π) + c"
    },
    {
        topic: "integration_472",
        subTopic: "אינטגרלים של פונקציות שורש, מעריכיות וטריגונומטריות",
        question_text: "חשבו את האינטגרל המעורב הכולל פונקציה מעריכית ופונקציה טריגונומטרית באותו ביטוי: \\( \\int (e^{2x} + \\cos(x)) dx \\).&rlm;",
        options: ["(e^(2x) : 2) + sin(x) + c", "2e^(2x) - sin(x) + c", "(e^(2x) : 2) - sin(x) + c", "e^(2x) + sin(x) + c"],
        correctAnswer: 0,
        hint: "בצעו את האינטגרציה על כל איבר בנפרד. האיבר הראשון דורש חלוקה ב-2, בעוד שהאיבר השני הופך לסינוס חיובי ללא צורך בחלוקה כי הנגזרת הפנימית שלו היא 1.",
        solution_steps: [
            { verbal_explanation: "פיצול תרגיל המקור לשני אינטגרלים נפרדים לשמירת סדר.", math_expression: "\\int e^{2x} dx + \\int \\cos(x) dx" },
            { verbal_explanation: "פתרון החלק הראשון תוך חלוקה בנגזרת המעריך על פי הכללים המוכרים.", math_expression: "\\dfrac{e^{2x}}{2}" },
            { verbal_explanation: "פתרון החלק השני על סמך הנוסחה הקבועה של טריגונומטריה ממעלה ראשונה.", math_expression: "\\sin(x)" },
            { verbal_explanation: "איחוד מחדש של שני חלקי התשובה לפולינום יחיד המושלם עם קבוע.", math_expression: "\\dfrac{e^{2x}}{2} + \\sin(x) + c" },
            { verbal_explanation: "בדיקת הפתרון.", math_expression: "1=1" },
            { verbal_explanation: "אישור.", math_expression: "0=0" }
        ],
        final_answer: "(e^(2x) : 2) + sin(x) + c"
    },
    {
        topic: "integration_472",
        subTopic: "אינטגרלים של פונקציות שורש, מעריכיות וטריגונומטריות",
        question_text: "פתרו את האינטגרל המשלב שורש ופונקציה קווית במכנה: \\( \\int \\dfrac{5}{\\sqrt{10x - 3}} dx \\).&rlm;",
        options: ["√(10x - 3) + c", "0.5√(10x - 3) + c", "2√(10x - 3) + c", "5√(10x - 3) + c"],
        correctAnswer: 0,
        hint: "המירו לחזקת מינוס חצי, ואז העלו לחזקת פלוס חצי. חלקו בחצי ובנגזרת הפנימית (10). המכפלה שלהם תהיה 5, מה שיצטמצם בדיוק עם המונה.",
        solution_steps: [
            { verbal_explanation: "המרת כתיב השורש במכנה לביטוי חזקה עשרונית שלילית במונה ללא פגיעה במשמעות.", math_expression: "\\int 5(10x - 3)^{-0.5} dx" },
            { verbal_explanation: "יישום חוק האינטגרל: העלאת המעריך והוספת החלוקה במעריך החדש יחד עם הנגזרת של הסוגריים.", math_expression: "\\dfrac{5(10x - 3)^{0.5}}{0.5 \\times 10}" },
            { verbal_explanation: "פתרון פעולת הכפל שבמכנה.", math_expression: "\\dfrac{5(10x - 3)^{0.5}}{5}" },
            { verbal_explanation: "ביטול מושלם של המקדם עם המכנה בעקבות החלוקה השלמה.", math_expression: "1(10x - 3)^{0.5}" },
            { verbal_explanation: "המרת הביטוי החיובי חזרה לתצורת שורש המקובלת בעולם המתמטיקה.", math_expression: "\\sqrt{10x - 3} + c" },
            { verbal_explanation: "וידוא הפתרון.", math_expression: "1=1" }
        ],
        final_answer: "√(10x - 3) + c"
    },
    {
        topic: "integration_472",
        subTopic: "אינטגרלים של פונקציות שורש, מעריכיות וטריגונומטריות",
        question_text: "חשבו את האינטגרל הבא: \\( \\int (\\dfrac{1}{\\cos^{2}(2x)} - \\sin(x)) dx \\).&rlm;",
        options: ["(tan(2x) : 2) + cos(x) + c", "tan(2x) + cos(x) + c", "(tan(2x) : 2) - cos(x) + c", "(-tan(2x) : 2) + cos(x) + c"],
        correctAnswer: 0,
        hint: "האינטגרל של 1 חלקי קוסינוס בריבוע הוא טנגנס, אך יש לחלק בנגזרת של הזווית הפנימית (2). האינטגרל של מינוס סינוס הוא קוסינוס חיובי.",
        solution_steps: [
            { verbal_explanation: "חלוקת הפונקציה המקורית לשני מרכיבים קלים יותר לעיכול.", math_expression: "\\int \\dfrac{1}{\\cos^{2}(2x)} dx - \\int \\sin(x) dx" },
            { verbal_explanation: "שימוש בזהות הגזירה ההפוכה הקובעת שטנגנס הוא המקור לאחת חלקי קוסינוס בריבוע, כולל חלוקה בזווית.", math_expression: "\\dfrac{\\tan(2x)}{2}" },
            { verbal_explanation: "ביצוע הפעולה על המרכיב השני שבו נגזרת הפוכה של מינוס סינוס מניבה פלוס קוסינוס.", math_expression: "-(-\\cos(x)) = \\cos(x)" },
            { verbal_explanation: "איחוד שני האיברים שחושבו בתוספת הקבוע המסיים.", math_expression: "\\dfrac{\\tan(2x)}{2} + \\cos(x) + c" },
            { verbal_explanation: "הצגת התשובה.", math_expression: "1=1" },
            { verbal_explanation: "סיום.", math_expression: "0=0" }
        ],
        final_answer: "(tan(2x) : 2) + cos(x) + c"
    },
    // ==========================================
    // תת נושא 4: חישוב שטח בין גרף פונקציה לציר ה-x (10 שאלות)
    // ==========================================

    {
        topic: "integration_472",
        subTopic: "חישוב שטח בין גרף פונקציה לציר ה-x",
        question_text: "חשבו את השטח הכלוא בין גרף הפונקציה \\( f(x) = -x^{2} + 4x \\) לבין ציר ה-x.&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 120' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='100' x2='180' y2='100' stroke='#94a3b8' stroke-width='2'/><path d='M 40 100 Q 100 0 160 100' fill='#3b82f6' fill-opacity='0.2' stroke='#3b82f6' stroke-width='2'/><text x='155' y='115' font-size='12' font-family='Arial'>4</text><text x='35' y='115' font-size='12' font-family='Arial'>0</text><text x='95' y='60' font-size='14' font-family='Arial'>S</text></svg></div>",
        options: ["32 : 3", "16 : 3", "32", "10"],
        correctAnswer: 0,
        hint: "מצאו תחילה את נקודות החיתוך של הפרבולה עם ציר ה-x (אלו יהיו גבולות האינטגרציה). לאחר מכן, בצעו אינטגרל מסוים לפונקציה בגבולות אלו.",
        solution_steps: [
            { verbal_explanation: "השוואת הפונקציה לאפס למציאת נקודות החיתוך עם הציר האופקי, שיהוו את גבולות השטח.", math_expression: "-x^{2} + 4x = 0" },
            { verbal_explanation: "הוצאת גורם משותף לפתרון המשוואה הריבועית.", math_expression: "x(-x + 4) = 0" },
            { verbal_explanation: "חילוץ שורשי המשוואה.", math_expression: "x_{1} = 0 \\quad , \\quad x_{2} = 4" },
            { verbal_explanation: "כתיבת האינטגרל המסוים המייצג את השטח החסום, תוך הקפדה על גבולות מהקטן לגדול.", math_expression: "S = \\int_{0}^{4} (-x^{2} + 4x) dx" },
            { verbal_explanation: "מציאת הפונקציה הקדומה בעזרת חוקי אינטגרציה בסיסיים לפולינום.", math_expression: "S = [-\\dfrac{x^{3}}{3} + \\dfrac{4x^{2}}{2}]_{0}^{4} = [-\\dfrac{x^{3}}{3} + 2x^{2}]_{0}^{4}" },
            { verbal_explanation: "הצבת הגבול העליון בפונקציה הקדומה.", math_expression: "S(4) = -\\dfrac{64}{3} + 2(16) = -21.333 + 32 = 10.666" },
            { verbal_explanation: "הצבת הגבול התחתון מאפסת את הפונקציה לחלוטין.", math_expression: "S(0) = 0" },
            { verbal_explanation: "חיסור הערכים לקבלת השטח המדויק.", math_expression: "S = \\dfrac{32}{3} - 0 = \\dfrac{32}{3}" }
        ],
        final_answer: "32 : 3"
    },
    {
        topic: "integration_472",
        subTopic: "חישוב שטח בין גרף פונקציה לציר ה-x",
        question_text: "חשבו את השטח הכלוא בין גרף הפונקציה \\( f(x) = x^{2} - 6x + 8 \\) לבין ציר ה-x.&rlm;",
        options: ["4 : 3", "2 : 3", "8 : 3", "4"],
        correctAnswer: 0,
        hint: "הפרבולה 'מחייכת' וחותכת את הציר. השטח כלוא מתחת לציר ה-x, לכן יש לחשב את האינטגרל ולשים לפניו סימן מינוס (או להכניס בערך מוחלט).",
        solution_steps: [
            { verbal_explanation: "מציאת מאפסי הפונקציה לצורך הגדרת גבולות אינטגרציה.", math_expression: "x^{2} - 6x + 8 = 0" },
            { verbal_explanation: "פירוק הטרינום לשורשיו.", math_expression: "(x - 2)(x - 4) = 0 \\Rightarrow x_{1} = 2 \\quad , \\quad x_{2} = 4" },
            { verbal_explanation: "בניית האינטגרל עם סימן שלילי לפניו, מכיוון שהשטח מונח מתחת לציר האופקי.", math_expression: "S = -\\int_{2}^{4} (x^{2} - 6x + 8) dx" },
            { verbal_explanation: "חישוב הפונקציה הקדומה.", math_expression: "S = -[\\dfrac{x^{3}}{3} - \\dfrac{6x^{2}}{2} + 8x]_{2}^{4}" },
            { verbal_explanation: "הצבת הגבול העליון.", math_expression: "S(4) = \\dfrac{64}{3} - 3(16) + 32 = 21.333 - 48 + 32 = 5.333" },
            { verbal_explanation: "הצבת הגבול התחתון.", math_expression: "S(2) = \\dfrac{8}{3} - 3(4) + 16 = 2.666 - 12 + 16 = 6.666" },
            { verbal_explanation: "חישוב ההפרש בין הגבולות בתוך הסוגריים המוכפלים במינוס.", math_expression: "S = -(5.333 - 6.666) = -(-1.333)" },
            { verbal_explanation: "קבלת שטח חיובי ותקני.", math_expression: "S = \\dfrac{4}{3}" }
        ],
        final_answer: "4 : 3"
    },
    {
        topic: "integration_472",
        subTopic: "חישוב שטח בין גרף פונקציה לציר ה-x",
        question_text: "חשבו את השטח הכלוא בין גרף הפונקציה המעריכית \\( f(x) = e^{x} - e \\), ציר ה-x, וציר ה-y (הישר \\( x = 0 \\)).&rlm;",
        options: ["1", "e - 1", "0.5", "e"],
        correctAnswer: 0,
        hint: "מצאו את נקודת החיתוך עם ציר x (כאשר e^x = e, אזי x=1). הפונקציה נמצאת מתחת לציר בתחום בין 0 ל-1, לכן הוסיפו מינוס לאינטגרל.",
        solution_steps: [
            { verbal_explanation: "מציאת גבול האינטגרציה הימני על ידי חיתוך עם ציר האופק.", math_expression: "e^{x} - e = 0 \\Rightarrow e^{x} = e^{1} \\Rightarrow x = 1" },
            { verbal_explanation: "בניית האינטגרל בתחום בין ציר הוואי לנקודת החיתוך, עם שלילת השטח הנמצא מתחת לציר.", math_expression: "S = -\\int_{0}^{1} (e^{x} - e) dx" },
            { verbal_explanation: "מציאת הפונקציה הקדומה. (שימו לב שהאות e היא קבוע מספרי).", math_expression: "S = -[e^{x} - ex]_{0}^{1}" },
            { verbal_explanation: "הצבת הגבול העליון במקום המשתנה.", math_expression: "S(1) = e^{1} - e(1) = e - e = 0" },
            { verbal_explanation: "הצבת הגבול התחתון במקום המשתנה.", math_expression: "S(0) = e^{0} - e(0) = 1 - 0 = 1" },
            { verbal_explanation: "חישוב ההפרש בצירוף המינוס המהפך.", math_expression: "S = -(0 - 1)" },
            { verbal_explanation: "התוצאה הסופית והנקייה לשטח.", math_expression: "S = 1" }
        ],
        final_answer: "1"
    },
    {
        topic: "integration_472",
        subTopic: "חישוב שטח בין גרף פונקציה לציר ה-x",
        question_text: "חשבו את השטח הכלוא בין הגרף של \\( f(x) = \\dfrac{2}{x} \\), ציר ה-x, והישרים \\( x = 1 \\) ו- \\( x = e \\).&rlm;",
        options: ["2", "1", "2e", "e - 1"],
        correctAnswer: 0,
        hint: "האינטגרל של 1 חלקי x הוא ln(x). בצעו את האינטגרל, הציבו את הגבולות וזכרו ש- ln(e) = 1 ו- ln(1) = 0.",
        solution_steps: [
            { verbal_explanation: "בניית תבנית האינטגרל המסוים עם הגבולות הנתונים במפורש.", math_expression: "S = \\int_{1}^{e} \\dfrac{2}{x} dx" },
            { verbal_explanation: "ביצוע האינטגרציה בעזרת כלל הלוגריתם הטבעי למנות מסוג זה.", math_expression: "S = [2\\ln(x)]_{1}^{e}" },
            { verbal_explanation: "הצבת הגבול העליון ופיתוחו המיידי.", math_expression: "S(e) = 2\\ln(e) = 2 \\times 1 = 2" },
            { verbal_explanation: "הצבת הגבול התחתון ופיתוחו.", math_expression: "S(1) = 2\\ln(1) = 2 \\times 0 = 0" },
            { verbal_explanation: "חיסור הפונקציות הקדומות למציאת המסה המוחלטת של השטח.", math_expression: "S = 2 - 0 = 2" }
        ],
        final_answer: "2"
    },
    {
        topic: "integration_472",
        subTopic: "חישוב שטח בין גרף פונקציה לציר ה-x",
        question_text: "חשבו את השטח הכלוא בין גרף הפונקציה הטריגונומטרית \\( f(x) = \\sin(x) \\) וציר ה-x, בתחום שבין \\( 0 \\) ל- \\( \\pi \\).&rlm;",
        options: ["2", "1", "0", "π"],
        correctAnswer: 0,
        hint: "האינטגרל של סינוס הוא מינוס קוסינוס. הציבו פאי (שנותן 1-) ואפס (שנותן 1), וחשבו את ההפרש.",
        solution_steps: [
            { verbal_explanation: "רישום האינטגרל בתחום החצי-מעגל בו הסינוס חיובי.", math_expression: "S = \\int_{0}^{\\pi} \\sin(x) dx" },
            { verbal_explanation: "הפעלת חוק האינטגרציה הטריגונומטרי הבסיסי.", math_expression: "S = [-\\cos(x)]_{0}^{\\pi}" },
            { verbal_explanation: "הצבת הגבול העליון תוך שימוש בערכי המעגל.", math_expression: "S(\\pi) = -\\cos(\\pi) = -(-1) = 1" },
            { verbal_explanation: "הצבת הגבול התחתון.", math_expression: "S(0) = -\\cos(0) = -1" },
            { verbal_explanation: "ביצוע החיסור הקריטי למניעת טעויות סימן.", math_expression: "S = 1 - (-1)" },
            { verbal_explanation: "חיבור.", math_expression: "S = 2" }
        ],
        final_answer: "2"
    },
    {
        topic: "integration_472",
        subTopic: "חישוב שטח בין גרף פונקציה לציר ה-x",
        question_text: "נתונה הפונקציה \\( f(x) = x^{3} - 4x \\). חשבו את השטח המוחלט הכלוא בין הפונקציה לציר ה-x בין הנקודות \\( x = -2 \\) ו- \\( x = 2 \\).&rlm;",
        options: ["8", "0", "4", "16"],
        correctAnswer: 0,
        hint: "לפונקציה יש סימטריה (אי-זוגית) והיא חותכת ב-0. השטח בין 2- ל-0 נמצא מעל הציר, והשטח מ-0 ל-2 נמצא מתחתיו. השטח הכולל הוא פעמיים השטח של החלק שמעל הציר.",
        solution_steps: [
            { verbal_explanation: "הבנה כי חישוב אינטגרל ישיר ממינוס שתיים לשתיים יאפס את התוצאה עקב קיזוז שטחים מנוגדים. נחשב צד אחד ונכפיל.", math_expression: "S = 2 \\times \\int_{-2}^{0} (x^{3} - 4x) dx" },
            { verbal_explanation: "מציאת הפונקציה הקדומה לפולינום.", math_expression: "S = 2 \\times [\\dfrac{x^{4}}{4} - \\dfrac{4x^{2}}{2}]_{-2}^{0} = 2 \\times [0.25x^{4} - 2x^{2}]_{-2}^{0}" },
            { verbal_explanation: "הצבת הגבול העליון המאפס את הביטוי.", math_expression: "S(0) = 0" },
            { verbal_explanation: "הצבת הגבול התחתון.", math_expression: "S(-2) = 0.25(-2)^{4} - 2(-2)^{2} = 0.25(16) - 2(4) = 4 - 8 = -4" },
            { verbal_explanation: "ביצוע חיסור הגבולות והכפלה לקבלת השטח המוחלט של שני האזורים.", math_expression: "S = 2 \\times (0 - (-4)) = 2 \\times 4" },
            { verbal_explanation: "תוצאה סופית.", math_expression: "S = 8" }
        ],
        final_answer: "8"
    },
    {
        topic: "integration_472",
        subTopic: "חישוב שטח בין גרף פונקציה לציר ה-x",
        question_text: "חשבו את השטח הכלוא בין הגרף של פונקציית השורש \\( f(x) = \\sqrt{x} - 2 \\), ציר ה-y, וציר ה-x.&rlm;",
        options: ["8 : 3", "4 : 3", "2", "16 : 3"],
        correctAnswer: 0,
        hint: "הגרף חותך את ציר y ב-(2-,0) ואת ציר x ב-(4,0). השטח כלוא מתחת לציר ה-x בין 0 ל-4. הוסיפו מינוס לאינטגרל.",
        solution_steps: [
            { verbal_explanation: "מציאת גבול האינטגרציה על ידי חיתוך עם ציר האופק.", math_expression: "\\sqrt{x} - 2 = 0 \\Rightarrow \\sqrt{x} = 2 \\Rightarrow x = 4" },
            { verbal_explanation: "הקמת אינטגרל מלווה בסימן שלילי מאחר והשטח מונח מתחת לציר האופקי.", math_expression: "S = -\\int_{0}^{4} (x^{0.5} - 2) dx" },
            { verbal_explanation: "הפעלת כללי האינטגרציה של חזקות שבריות.", math_expression: "S = -[\\dfrac{x^{1.5}}{1.5} - 2x]_{0}^{4}" },
            { verbal_explanation: "הצבת הגבול העליון.", math_expression: "S(4) = \\dfrac{4^{1.5}}{1.5} - 2(4) = \\dfrac{8}{1.5} - 8" },
            { verbal_explanation: "המרת השבר למבנה נוח.", math_expression: "\\dfrac{8}{1.5} = \\dfrac{16}{3} \\Rightarrow \\dfrac{16}{3} - \\dfrac{24}{3} = -\\dfrac{8}{3}" },
            { verbal_explanation: "הפעלת המינוס החיצוני לקבלת השטח הגיאומטרי המוחלט.", math_expression: "S = -(-\\dfrac{8}{3}) = \\dfrac{8}{3}" }
        ],
        final_answer: "8 : 3"
    },
    {
        topic: "integration_472",
        subTopic: "חישוב שטח בין גרף פונקציה לציר ה-x",
        question_text: "מצאו את השטח הכלוא בין הפונקציה המעריכית \\( f(x) = e^{2x} \\), ציר ה-x, והישרים \\( x = 0 \\) ו- \\( x = 1 \\).&rlm;",
        options: ["0.5e² - 0.5", "e² - 1", "0.5e²", "e² + 1"],
        correctAnswer: 0,
        hint: "הפונקציה חיובית בתחום זה. בצעו אינטגרציה רגילה (זכרו לחלק בנגזרת הפנימית שהיא 2).",
        solution_steps: [
            { verbal_explanation: "הקמת האינטגרל עם הגבולות הפשוטים המצוינים בשאלה.", math_expression: "S = \\int_{0}^{1} e^{2x} dx" },
            { verbal_explanation: "מציאת הפונקציה הקדומה על ידי חלוקה במקדם החזקה הפנימי.", math_expression: "S = [\\dfrac{e^{2x}}{2}]_{0}^{1}" },
            { verbal_explanation: "הצבת הגבול העליון במשתנה.", math_expression: "S(1) = \\dfrac{e^{2}}{2} = 0.5e^{2}" },
            { verbal_explanation: "הצבת הגבול התחתון (אקספוננט בחזקת אפס שווה אחת).", math_expression: "S(0) = \\dfrac{e^{0}}{2} = 0.5" },
            { verbal_explanation: "חיסור הגבולות לקבלת סך השטח המסוים.", math_expression: "S = 0.5e^{2} - 0.5" }
        ],
        final_answer: "0.5e² - 0.5"
    },
    {
        topic: "integration_472",
        subTopic: "חישוב שטח בין גרף פונקציה לציר ה-x",
        question_text: "חשבו את השטח הכלוא בין הגרף של \\( f(x) = \\cos(2x) \\) וציר ה-x בתחום מ- \\( x = 0 \\) ועד לנקודת החיתוך הראשונה עם ציר ה-x.&rlm;",
        options: ["0.5", "1", "0.25", "π : 4"],
        correctAnswer: 0,
        hint: "נקודת החיתוך הראשונה של קוסינוס (כאשר הזווית 2x שווה ל-90 מעלות, כלומר חצי פאי) היא ברבע פאי. בצעו אינטגרל בין 0 לרבע פאי.",
        solution_steps: [
            { verbal_explanation: "איתור נקודת החיתוך התוחמת את השטח הנדרש.", math_expression: "\\cos(2x) = 0 \\Rightarrow 2x = 0.5\\pi \\Rightarrow x = 0.25\\pi" },
            { verbal_explanation: "בניית האינטגרל המסוים.", math_expression: "S = \\int_{0}^{0.25\\pi} \\cos(2x) dx" },
            { verbal_explanation: "חישוב הפונקציה הקדומה (סינוס חלקי הנגזרת הפנימית).", math_expression: "S = [\\dfrac{\\sin(2x)}{2}]_{0}^{0.25\\pi}" },
            { verbal_explanation: "הצבת הגבול העליון.", math_expression: "S(0.25\\pi) = \\dfrac{\\sin(0.5\\pi)}{2} = \\dfrac{1}{2} = 0.5" },
            { verbal_explanation: "הצבת הגבול התחתון (סינוס אפס מתאפס).", math_expression: "S(0) = 0" },
            { verbal_explanation: "הגעה לתוצאת השטח הסופית.", math_expression: "S = 0.5" }
        ],
        final_answer: "0.5"
    },
    {
        topic: "integration_472",
        subTopic: "חישוב שטח בין גרף פונקציה לציר ה-x",
        question_text: "חשבו את השטח הכלוא בין גרף הפונקציה \\( f(x) = (x - 2)^{3} \\) וציר ה-x, ברביע הרביעי (כלומר בין ציר ה-y לנקודת החיתוך עם ציר ה-x).&rlm;",
        options: ["4", "8", "2", "6"],
        correctAnswer: 0,
        hint: "הגרף חותך את ציר y ב-8- ואת ציר x ב-2. הפונקציה כולה מתחת לציר בתחום מ-0 עד 2. שימו מינוס לפני האינטגרל.",
        solution_steps: [
            { verbal_explanation: "וידוא גבולות האינטגרציה על סמך נתוני הרביע.", math_expression: "(x - 2)^{3} = 0 \\Rightarrow x = 2" },
            { verbal_explanation: "כתיבת האינטגרל בתוספת סימן הופכי עקב מיקום השטח מתחת לציר.", math_expression: "S = -\\int_{0}^{2} (x - 2)^{3} dx" },
            { verbal_explanation: "הפעלת חוקי הגזירה ההפוכה באמצעות שיטת ההצבה הליניארית הפשוטה.", math_expression: "S = -[\\dfrac{(x - 2)^{4}}{4}]_{0}^{2}" },
            { verbal_explanation: "הצבת הגבול העליון המאפסת את הפולינום.", math_expression: "S(2) = \\dfrac{0^{4}}{4} = 0" },
            { verbal_explanation: "הצבת הגבול התחתון בתוך המשוואה.", math_expression: "S(0) = \\dfrac{(-2)^{4}}{4} = \\dfrac{16}{4} = 4" },
            { verbal_explanation: "חישוב ההפרשים תחת מעטה המינוס החיצוני.", math_expression: "S = -(0 - 4) = 4" }
        ],
        final_answer: "4"
    },

    // ==========================================
    // תת נושא 5: חישוב שטח הכלוא בין שני גרפים (10 שאלות)
    // ==========================================

    {
        topic: "integration_472",
        subTopic: "חישוב שטח הכלוא בין שני גרפים",
        question_text: "חשבו את השטח הכלוא בין שתי הפרבולות: \\( f(x) = -x^{2} + 4 \\) ו- \\( g(x) = x^{2} - 4 \\).&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 150' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><path d='M 40 110 Q 100 10 160 110' fill='#3b82f6' fill-opacity='0.2' stroke='#3b82f6' stroke-width='2'/><path d='M 40 40 Q 100 140 160 40' fill='#ef4444' fill-opacity='0.2' stroke='#ef4444' stroke-width='2'/><text x='95' y='80' font-size='14' font-family='Arial'>S</text></svg></div>",
        options: ["64 : 3", "32 : 3", "16", "21"],
        correctAnswer: 0,
        hint: "מצאו את נקודות החיתוך (2 ו- 2-). הפונקציה f נמצאת מעל g. חשבו את האינטגרל של (f פחות g) בין הגבולות.",
        solution_steps: [
            { verbal_explanation: "השוואת הפונקציות לאיתור נקודות המפגש שיתחמו את השטח הרצוי.", math_expression: "-x^{2} + 4 = x^{2} - 4" },
            { verbal_explanation: "כינוס איברים למשוואה ריבועית פשוטה.", math_expression: "2x^{2} = 8 \\Rightarrow x^{2} = 4 \\Rightarrow x = \\pm 2" },
            { verbal_explanation: "בניית האינטגרל המסוים כהפרש הפונקציה העליונה מהתחתונה.", math_expression: "S = \\int_{-2}^{2} ((-x^{2} + 4) - (x^{2} - 4)) dx" },
            { verbal_explanation: "כינוס הפולינום הפנימי לפישוט העבודה.", math_expression: "S = \\int_{-2}^{2} (-2x^{2} + 8) dx" },
            { verbal_explanation: "חישוב הפונקציה הקדומה לשטח.", math_expression: "S = [-\\dfrac{2x^{3}}{3} + 8x]_{-2}^{2}" },
            { verbal_explanation: "הצבת הגבול העליון החיובי.", math_expression: "S(2) = -\\dfrac{16}{3} + 16 = \\dfrac{32}{3}" },
            { verbal_explanation: "הצבת הגבול התחתון השלילי.", math_expression: "S(-2) = \\dfrac{16}{3} - 16 = -\\dfrac{32}{3}" },
            { verbal_explanation: "סכימת החלקים לתוצאה המושלמת.", math_expression: "S = \\dfrac{32}{3} - (-\\dfrac{32}{3}) = \\dfrac{64}{3}" }
        ],
        final_answer: "64 : 3"
    },
    {
        topic: "integration_472",
        subTopic: "חישוב שטח הכלוא בין שני גרפים",
        question_text: "חשבו את השטח הכלוא בין הפרבולה \\( f(x) = x^{2} \\) לישר \\( g(x) = x + 2 \\).&rlm;",
        options: ["4.5", "3.5", "5", "4"],
        correctAnswer: 0,
        hint: "השוו בין הפונקציות למציאת חיתוכים (1- ו- 2). הישר נמצא מעל הפרבולה בתחום זה. חשבו את האינטגרל של הישר פחות הפרבולה.",
        solution_steps: [
            { verbal_explanation: "מציאת גבולות השטח על ידי השוואת הפונקציות.", math_expression: "x^{2} = x + 2 \\Rightarrow x^{2} - x - 2 = 0" },
            { verbal_explanation: "פירוק הטרינום לשורשיו.", math_expression: "(x - 2)(x + 1) = 0 \\Rightarrow x_{1} = 2 \\quad , \\quad x_{2} = -1" },
            { verbal_explanation: "בניית אינטגרל של ההפרש (עליונה פחות תחתונה).", math_expression: "S = \\int_{-1}^{2} (x + 2 - x^{2}) dx" },
            { verbal_explanation: "מציאת הפונקציה הקדומה.", math_expression: "S = [\\dfrac{x^{2}}{2} + 2x - \\dfrac{x^{3}}{3}]_{-1}^{2}" },
            { verbal_explanation: "הצבת הגבול העליון במשוואה.", math_expression: "S(2) = \\dfrac{4}{2} + 4 - \\dfrac{8}{3} = 6 - 2.666 = 3.333" },
            { verbal_explanation: "הצבת הגבול התחתון.", math_expression: "S(-1) = \\dfrac{1}{2} - 2 - (-\\dfrac{1}{3}) = -1.5 + 0.333 = -1.166" },
            { verbal_explanation: "חישוב ההפרש בין שני הערכים.", math_expression: "S = 3.333 - (-1.166) = 4.5" }
        ],
        final_answer: "4.5"
    },
    {
        topic: "integration_472",
        subTopic: "חישוב שטח הכלוא בין שני גרפים",
        question_text: "חשבו את השטח הכלוא בין הגרפים של הפונקציות המעריכיות \\( f(x) = e^{x} \\) ו- \\( g(x) = e^{-x} \\) ובין הישר האנכי \\( x = 1 \\).&rlm;",
        options: ["e + (1 : e) - 2", "e - (1 : e)", "e - 2", "2e - 1"],
        correctAnswer: 0,
        hint: "הגרפים נחתכים ב-x=0. הפונקציה e^x מעל e^-x עבור x חיובי. בצעו אינטגרל מ-0 עד 1 להפרש ביניהן.",
        solution_steps: [
            { verbal_explanation: "איתור נקודת החיתוך של הפונקציות המהווה את הגבול השמאלי.", math_expression: "e^{x} = e^{-x} \\Rightarrow e^{2x} = 1 \\Rightarrow 2x = 0 \\Rightarrow x = 0" },
            { verbal_explanation: "בניית האינטגרל בתחום שבין החיתוך לקו האנכי התוחם.", math_expression: "S = \\int_{0}^{1} (e^{x} - e^{-x}) dx" },
            { verbal_explanation: "חישוב הפונקציה הקדומה (הנגזרת הפנימית של השני מניבה מינוס שמבטל את החיסור).", math_expression: "S = [e^{x} - \\dfrac{e^{-x}}{-1}]_{0}^{1} = [e^{x} + e^{-x}]_{0}^{1}" },
            { verbal_explanation: "הצבת הגבול העליון.", math_expression: "S(1) = e^{1} + e^{-1} = e + \\dfrac{1}{e}" },
            { verbal_explanation: "הצבת הגבול התחתון במשתנים.", math_expression: "S(0) = e^{0} + e^{0} = 1 + 1 = 2" },
            { verbal_explanation: "הרכבת התשובה הסופית במבנה אלגברי נקי.", math_expression: "S = e + \\dfrac{1}{e} - 2" }
        ],
        final_answer: "e + (1 : e) - 2"
    },
    {
        topic: "integration_472",
        subTopic: "חישוב שטח הכלוא בין שני גרפים",
        question_text: "חשבו את השטח הכלוא בין הפונקציות הטריגונומטריות \\( f(x) = \\cos(x) \\) ו- \\( g(x) = \\sin(x) \\) בציר ה-y (מ- \\( x = 0 \\)) ועד לנקודת החיתוך הראשונה ביניהן.&rlm;",
        options: ["√2 - 1", "1", "0.5", "√2"],
        correctAnswer: 0,
        hint: "נקודת החיתוך הראשונה היא ב-45 מעלות (רבע פאי). בתחום זה, הקוסינוס גדול מהסינוס. עשו אינטגרל להפרש.",
        solution_steps: [
            { verbal_explanation: "זיהוי נקודת המפגש הראשונה בה הפונקציות שוות במעגל היחידה.", math_expression: "\\cos(x) = \\sin(x) \\Rightarrow \\tan(x) = 1 \\Rightarrow x = \\dfrac{\\pi}{4}" },
            { verbal_explanation: "כתיבת תבנית האינטגרל (הקוסינוס מעל הסינוס ברביע הראשון המוקדם).", math_expression: "S = \\int_{0}^{\\pi/4} (\\cos(x) - \\sin(x)) dx" },
            { verbal_explanation: "ביצוע פקודת האינטגרציה לכל איבר בנפרד.", math_expression: "S = [\\sin(x) - (-\\cos(x))]_{0}^{\\pi/4} = [\\sin(x) + \\cos(x)]_{0}^{\\pi/4}" },
            { verbal_explanation: "הצבת הגבול העליון המורכב מערכים זהים לפונקציות אלו.", math_expression: "S(\\dfrac{\\pi}{4}) = \\dfrac{\\sqrt{2}}{2} + \\dfrac{\\sqrt{2}}{2} = \\sqrt{2}" },
            { verbal_explanation: "הצבת הגבול התחתון המאפס את הסינוס ומותיר אחת בקוסינוס.", math_expression: "S(0) = 0 + 1 = 1" },
            { verbal_explanation: "ביצוע פעולת החיסור לסגירת החשבון.", math_expression: "S = \\sqrt{2} - 1" }
        ],
        final_answer: "√2 - 1"
    },
    {
        topic: "integration_472",
        subTopic: "חישוב שטח הכלוא בין שני גרפים",
        question_text: "חשבו את השטח הכלוא בין גרף הפונקציה \\( f(x) = \\sqrt{x} \\) לבין גרף הפונקציה \\( g(x) = x^{2} \\).&rlm;",
        options: ["1 : 3", "1 : 2", "2 : 3", "1 : 4"],
        correctAnswer: 0,
        hint: "הגרפים נחתכים ב-0 וב-1. בתחום זה, גרף השורש נמצא מעל גרף הפרבולה.",
        solution_steps: [
            { verbal_explanation: "השוואת הפונקציות לאיתור נקודות החיתוך במרחב הממשי.", math_expression: "\\sqrt{x} = x^{2}" },
            { verbal_explanation: "העלאה בריבוע וחילוץ שורשים.", math_expression: "x = x^{4} \\Rightarrow x(x^{3} - 1) = 0 \\Rightarrow x_{1} = 0 \\quad , \\quad x_{2} = 1" },
            { verbal_explanation: "בניית האינטגרל (פונקציית השורש קמורה מעל הפרבולה בתחום השברים).", math_expression: "S = \\int_{0}^{1} (x^{0.5} - x^{2}) dx" },
            { verbal_explanation: "חישוב הפונקציה הקדומה לשטח המעורב.", math_expression: "S = [\\dfrac{x^{1.5}}{1.5} - \\dfrac{x^{3}}{3}]_{0}^{1} = [\\dfrac{2}{3}x^{1.5} - \\dfrac{1}{3}x^{3}]_{0}^{1}" },
            { verbal_explanation: "הצבת האחת משאירה רק את המקדמים השבריים.", math_expression: "S(1) = \\dfrac{2}{3} - \\dfrac{1}{3} = \\dfrac{1}{3}" },
            { verbal_explanation: "האפס מתאפס לחלוטין ולכן זו התוצאה המושלמת.", math_expression: "S = \\dfrac{1}{3}" }
        ],
        final_answer: "1 : 3"
    },
    {
        topic: "integration_472",
        subTopic: "חישוב שטח הכלוא בין שני גרפים",
        question_text: "חשבו את השטח הכלוא בין שתי הפרבולות: \\( f(x) = 8 - x^{2} \\) ו- \\( g(x) = x^{2} \\).&rlm;",
        options: ["64 : 3", "32", "16", "32 : 3"],
        correctAnswer: 0,
        hint: "מצאו נקודות חיתוך. הפרבולה ההפוכה נמצאת למעלה. בצעו אינטגרציה על ההפרש ביניהן.",
        solution_steps: [
            { verbal_explanation: "השוואת המשוואות כדי למצוא את המרווח האופקי של השטח הכלוא.", math_expression: "8 - x^{2} = x^{2}" },
            { verbal_explanation: "כינוס איברים ופתרון המשוואה הדו-איברית.", math_expression: "2x^{2} = 8 \\Rightarrow x^{2} = 4 \\Rightarrow x = \\pm 2" },
            { verbal_explanation: "כתיבת תבנית האינטגרל כאשר הפרבולה הבוכה ממוקמת כגג.", math_expression: "S = \\int_{-2}^{2} ((8 - x^{2}) - x^{2}) dx = \\int_{-2}^{2} (8 - 2x^{2}) dx" },
            { verbal_explanation: "אינטגרציה פשוטה של הפולינום שנוצר.", math_expression: "S = [8x - \\dfrac{2x^{3}}{3}]_{-2}^{2}" },
            { verbal_explanation: "הצבת הגבול העליון למשוואה.", math_expression: "S(2) = 16 - \\dfrac{16}{3} = \\dfrac{32}{3}" },
            { verbal_explanation: "הצבת הגבול התחתון, שיוצר תמונת מראה סימטרית אך שלילית.", math_expression: "S(-2) = -16 - (-\\dfrac{16}{3}) = -\\dfrac{32}{3}" },
            { verbal_explanation: "חישוב מוחלט של סך שני הצדדים.", math_expression: "S = \\dfrac{32}{3} - (-\\dfrac{32}{3}) = \\dfrac{64}{3}" }
        ],
        final_answer: "64 : 3"
    },
    {
        topic: "integration_472",
        subTopic: "חישוב שטח הכלוא בין שני גרפים",
        question_text: "מצאו את סך השטח הכלוא בין הפונקציה ממעלה שלישית \\( f(x) = x^{3} \\) לישר \\( g(x) = x \\). (שימו לב, ישנם שני שטחים זהים).&rlm;",
        options: ["0.5", "1", "0.25", "0.75"],
        correctAnswer: 0,
        hint: "נקודות החיתוך הן ב- 1-, 0, ו-1. בשל הסימטריה (פונקציות אי-זוגיות), תוכלו לחשב את השטח ברביע הראשון (בין 0 ל-1) ולהכפיל ב-2.",
        solution_steps: [
            { verbal_explanation: "איתור כלל נקודות החיתוך בין שני הגרפים.", math_expression: "x^{3} = x \\Rightarrow x^{3} - x = 0 \\Rightarrow x(x^{2} - 1) = 0 \\Rightarrow x = -1, 0, 1" },
            { verbal_explanation: "זיהוי הסימטריה המאפשרת חישוב מחצית מהשטח והכפלתו בשתיים.", math_expression: "S = 2 \\times \\int_{0}^{1} (x - x^{3}) dx" },
            { verbal_explanation: "יישום חוקי האינטגרל הפולינומי.", math_expression: "S = 2 \\times [\\dfrac{x^{2}}{2} - \\dfrac{x^{4}}{4}]_{0}^{1}" },
            { verbal_explanation: "הצבת הגבול העליון המעניק את הערך המהותי היחיד.", math_expression: "S(1) = \\dfrac{1}{2} - \\dfrac{1}{4} = \\dfrac{1}{4}" },
            { verbal_explanation: "הכפלת השטח של חלקת צד אחד בשתיים לקבלת המסה הכללית.", math_expression: "S = 2 \\times \\dfrac{1}{4} = 0.5" }
        ],
        final_answer: "0.5"
    },
    {
        topic: "integration_472",
        subTopic: "חישוב שטח הכלוא בין שני גרפים",
        question_text: "חשבו את השטח הכלוא בין הגרפים של הפונקציות \\( f(x) = e^{2x} \\) ו- \\( g(x) = e^{x} \\) ובין הישר האנכי \\( x = 1 \\) (בתחום הימני לציר y).&rlm;",
        options: ["0.5e² - e + 0.5", "e² - 2e + 1", "0.5e² - e", "e² - e"],
        correctAnswer: 0,
        hint: "הגרפים נחתכים ב-x=0. בחלק החיובי הפונקציה עם החזקה הגבוהה יותר (2x) נמצאת מעל. בצעו אינטגרל בין 0 ל-1.",
        solution_steps: [
            { verbal_explanation: "וידוא נקודת המוצא לשטח בציר האנכי.", math_expression: "e^{2x} = e^{x} \\Rightarrow 2x = x \\Rightarrow x = 0" },
            { verbal_explanation: "הקמת התבנית לחישוב אינטגרלי מנקודת החיתוך ועד לגבול האנכי.", math_expression: "S = \\int_{0}^{1} (e^{2x} - e^{x}) dx" },
            { verbal_explanation: "ביצוע פקודת האינטגרציה לכל אחד משני האיברים בנפרד.", math_expression: "S = [\\dfrac{e^{2x}}{2} - e^{x}]_{0}^{1}" },
            { verbal_explanation: "הצבת הגבול העליון במשוואת הפונקציה הקדומה.", math_expression: "S(1) = 0.5e^{2} - e^{1}" },
            { verbal_explanation: "הצבת הגבול התחתון (שבו אקספוננט מתאזן לאחת ולא לאפס).", math_expression: "S(0) = \\dfrac{e^{0}}{2} - e^{0} = 0.5 - 1 = -0.5" },
            { verbal_explanation: "חיסור הגבולות והרכבת פולינום תשובה מסודר.", math_expression: "S = 0.5e^{2} - e - (-0.5) = 0.5e^{2} - e + 0.5" }
        ],
        final_answer: "0.5e² - e + 0.5"
    },
    {
        topic: "integration_472",
        subTopic: "חישוב שטח הכלוא בין שני גרפים",
        question_text: "חשבו את השטח הכלוא בין הגרף של \\( f(x) = \\dfrac{4}{x} \\) לבין הישר \\( g(x) = 5 - x \\).&rlm;",
        options: ["7.5 - 4ln(4)", "10 - 4ln(4)", "8.5 - 2ln(4)", "6 - 4ln(2)"],
        correctAnswer: 0,
        hint: "הגרפים נחתכים כאשר איקס שווה 1 ו-4. הישר (הפונקציה הליניארית) נמצא מעל ההיפרבולה בתחום זה.",
        solution_steps: [
            { verbal_explanation: "מציאת גבולות המפגש של שתי הפונקציות כדי לתחום את האינטגרל.", math_expression: "\\dfrac{4}{x} = 5 - x \\Rightarrow 4 = 5x - x^{2}" },
            { verbal_explanation: "יצירת משוואה ריבועית ומציאת שורשיה.", math_expression: "x^{2} - 5x + 4 = 0 \\Rightarrow (x - 1)(x - 4) = 0 \\Rightarrow x_{1} = 1 \\ , \\ x_{2} = 4" },
            { verbal_explanation: "הצבת הפונקציה הישרה מעל הרציונלית באינטגרל מסוים.", math_expression: "S = \\int_{1}^{4} (5 - x - \\dfrac{4}{x}) dx" },
            { verbal_explanation: "מציאת הפונקציה הקדומה על ידי שילוב פולינום ולוגריתם טבעי.", math_expression: "S = [5x - \\dfrac{x^{2}}{2} - 4\\ln(x)]_{1}^{4}" },
            { verbal_explanation: "הצבת ארבע אל תוך המערכת.", math_expression: "S(4) = 20 - \\dfrac{16}{2} - 4\\ln(4) = 12 - 4\\ln(4)" },
            { verbal_explanation: "הצבת אחת, המאפסת את איבר הלוגריתם לחלוטין.", math_expression: "S(1) = 5 - 0.5 - 0 = 4.5" },
            { verbal_explanation: "קבלת התוצאה הסופית והמקורבת.", math_expression: "S = 12 - 4\\ln(4) - 4.5 = 7.5 - 4\\ln(4)" }
        ],
        final_answer: "7.5 - 4ln(4)"
    },
    {
        topic: "integration_472",
        subTopic: "חישוב שטח הכלוא בין שני גרפים",
        question_text: "נתונה הפרבולה \\( f(x) = x^{2} \\). מעבירים לה משיק בנקודה שבה \\( x = 2 \\). חשבו את השטח הכלוא בין הפרבולה, המשיק וציר ה-y (הישר \\( x = 0 \\)).&rlm;",
        options: ["8 : 3", "4 : 3", "4", "2"],
        correctAnswer: 0,
        hint: "מצאו תחילה את משוואת המשיק (y = 4x - 4). הפרבולה נמצאת תמיד מעל המשיק. חשבו את האינטגרל של הפרבולה פחות המשיק בין 0 ל-2.",
        solution_steps: [
            { verbal_explanation: "קביעת נקודת ההשקה העתידית על המשטח.", math_expression: "f(2) = 2^{2} = 4 \\Rightarrow P(2, 4)" },
            { verbal_explanation: "גזירת הפונקציה למציאת השיפוע.", math_expression: "f'(x) = 2x \\Rightarrow m = f'(2) = 4" },
            { verbal_explanation: "הרכבת הקו המשיק מתוך השיפוע והנקודה שחושבו.", math_expression: "y - 4 = 4(x - 2) \\Rightarrow y = 4x - 8 + 4 \\Rightarrow y = 4x - 4" },
            { verbal_explanation: "בניית האינטגרל לשטח הממוקם בין ציר העזר האנכי לבין נקודת ההשקה בקצה.", math_expression: "S = \\int_{0}^{2} (x^{2} - (4x - 4)) dx = \\int_{0}^{2} (x^{2} - 4x + 4) dx" },
            { verbal_explanation: "גזירה הפוכה לפולינום שיצרנו.", math_expression: "S = [\\dfrac{x^{3}}{3} - 2x^{2} + 4x]_{0}^{2}" },
            { verbal_explanation: "הצבת הגבול הדומיננטי לקבלת המסה הרצויה.", math_expression: "S(2) = \\dfrac{8}{3} - 8 + 8 = \\dfrac{8}{3}" },
            { verbal_explanation: "הצגת הפתרון הנקי.", math_expression: "S = \\dfrac{8}{3}" }
        ],
        final_answer: "8 : 3"
    },

    // ==========================================
    // תת נושא 6: בעיות קיצון המשלבות אינטגרלים (10 שאלות)
    // ==========================================

    {
        topic: "integration_472",
        subTopic: "בעיות קיצון המשלבות אינטגרלים",
        question_text: "נתונה הפרבולה \\( y = 12 - x^{2} \\). חוסמים מלבן כך ששניים מקודקודיו מונחים על ציר ה-x, ושני קודקודיו האחרים מונחים על הפרבולה ברביע הראשון והשני. מהו השטח המקסימלי האפשרי של מלבן כזה?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 150' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='130' x2='180' y2='130' stroke='#94a3b8' stroke-width='2'/><path d='M 30 130 Q 100 20 170 130' fill='none' stroke='#3b82f6' stroke-width='2'/><rect x='70' y='55' width='60' height='75' fill='#f59e0b' fill-opacity='0.3' stroke='#f59e0b' stroke-width='2'/><text x='95' y='95' font-size='12' font-family='Arial'>S(x)</text></svg></div>",
        options: ["32", "48", "64", "24"],
        correctAnswer: 0,
        hint: "אם שיעור ה-x של קודקוד אחד (ברביע הראשון) הוא x, אז אורך בסיס המלבן הוא 2x וגובהו הוא (12 פחות איקס בריבוע). בנו פונקציית שטח, גזרו ומצאו את המקסימום.",
        solution_steps: [
            { verbal_explanation: "הגדרת פונקציית מטרה המייצגת את שטח המלבן כפונקציה של רוחב חצי בסיסו.", math_expression: "S(x) = 2x(12 - x^{2})" },
            { verbal_explanation: "פתיחת סוגריים לטובת נוחות החקירה הדיפרנציאלית.", math_expression: "S(x) = 24x - 2x^{3}" },
            { verbal_explanation: "גזירת הפונקציה במטרה לאתר נקודות קיצון המאפסות אותה.", math_expression: "S'(x) = 24 - 6x^{2} = 0" },
            { verbal_explanation: "בידוד המשתנה למציאת הנקודה האופטימלית.", math_expression: "6x^{2} = 24 \\Rightarrow x^{2} = 4 \\Rightarrow x = 2" },
            { verbal_explanation: "הצבת נקודת המקסימום המוכחת בפונקציית המטרה הראשונית להשגת השטח המרבי.", math_expression: "S(2) = 24(2) - 2(2^{3}) = 48 - 16 = 32" }
        ],
        final_answer: "32"
    },
    {
        topic: "integration_472",
        subTopic: "בעיות קיצון המשלבות אינטגרלים",
        question_text: "פונקציית שטח מוגדרת על ידי האינטגרל המסוים \\( S(a) = \\int_{0}^{a} x^{2} dx + \\int_{a}^{2} (2 - x)^{2} dx \\). עבור איזה ערך של הפרמטר a יתקבל שטח מינימלי?&rlm;",
        options: ["a = 1", "a = 0.5", "a = 1.5", "a = 2"],
        correctAnswer: 0,
        hint: "כדי למצוא מינימום לפונקציית אינטגרל המבוססת על הגבול, הנגזרת של S(a) שווה לפונקציות שבתוך האינטגרל (הערך העליון פחות הערך התחתון). לחילופין, חשבו את האינטגרל והביעו פולינום של a, ואז גזרו.",
        solution_steps: [
            { verbal_explanation: "שימוש במשפט היסודי של החדו\"א: גזירת הפונקציה המצטברת לפי גבול האינטגרל עליו היא מבוססת מניבה את פונקציות המקור העומדות בו.", math_expression: "S'(a) = a^{2} - (2 - a)^{2}" },
            { verbal_explanation: "השוואת הנגזרת שנוצרה לאפס לאיתור הקיצון.", math_expression: "a^{2} - (2 - a)^{2} = 0" },
            { verbal_explanation: "פתיחת סוגריים בעזרת כלל כפל מקוצר קלאסי.", math_expression: "a^{2} - (4 - 4a + a^{2}) = 0" },
            { verbal_explanation: "ביטול החלקים הריבועיים והשארת המקדם הליניארי בלבד.", math_expression: "4a - 4 = 0" },
            { verbal_explanation: "מציאת התוצאה המושלמת המאזנת את השטחים.", math_expression: "4a = 4 \\Rightarrow a = 1" }
        ],
        final_answer: "a = 1"
    },
    {
        topic: "integration_472",
        subTopic: "בעיות קיצון המשלבות אינטגרלים",
        question_text: "ידוע שהשטח הכלוא בין הפרבולה \\( y = x^{2} + k \\) (כאשר k שלילי) לבין ציר ה-x שווה ל-36. מהו הערך של הפרמטר k?&rlm;",
        options: ["k = -9", "k = -4", "k = -6", "k = -12"],
        correctAnswer: 0,
        hint: "נקודות החיתוך הן פלוס מינוס שורש של (מינוס k). השטח שווה לאינטגרל ממינוס שורש עד פלוס שורש של (אפס פחות הפונקציה). בצעו את החישוב והשוו ל-36.",
        solution_steps: [
            { verbal_explanation: "איתור נקודות חיתוך סימטריות סביב ציר האנך, המהוות את גבולות השטח.", math_expression: "x^{2} + k = 0 \\Rightarrow x = \\pm\\sqrt{-k}" },
            { verbal_explanation: "בניית האינטגרל לשטח הממוקם מתחת לציר האופקי, ולכן מוכפל במינוס (או חיסור מהציר). השטח סימטרי ולכן נכפיל את הצד החיובי בשניים.", math_expression: "S = 2 \\times \\int_{0}^{\\sqrt{-k}} (0 - (x^{2} + k)) dx = 2 \\times \\int_{0}^{\\sqrt{-k}} (-x^{2} - k) dx" },
            { verbal_explanation: "מציאת פונקציית המקור המכילה את הפרמטר.", math_expression: "S = 2 \\times [-\\dfrac{x^{3}}{3} - kx]_{0}^{\\sqrt{-k}}" },
            { verbal_explanation: "הצבת הגבול העליון, כשהוא מתחשב בהעלאת שורש לחזקה שלישית המוציאה שורש אחד החוצה.", math_expression: "S = 2 \\times (-\\dfrac{(-k)\\sqrt{-k}}{3} - k\\sqrt{-k})" },
            { verbal_explanation: "כינוס אלגברי של הביטויים (שליש כפול מינוס קיי שורש מינוס קיי ועוד קיי שורש מינוס קיי).", math_expression: "S = 2 \\times (\\dfrac{k\\sqrt{-k}}{3} - k\\sqrt{-k}) = 2 \\times (-\\dfrac{2k\\sqrt{-k}}{3}) = -\\dfrac{4k\\sqrt{-k}}{3}" },
            { verbal_explanation: "השוואת הפונקציה לנתון המספרי.", math_expression: "-\\dfrac{4k\\sqrt{-k}}{3} = 36 \\Rightarrow -k\\sqrt{-k} = 27" },
            { verbal_explanation: "העלאה בריבוע או הסקת שורשים.", math_expression: "(-k)^{1.5} = 27 \\Rightarrow -k = 9 \\Rightarrow k = -9" }
        ],
        final_answer: "k = -9"
    },
    {
        topic: "integration_472",
        subTopic: "בעיות קיצון המשלבות אינטגרלים",
        question_text: "נתונה הפונקציה עם הפרמטר c: \\( f(x) = c x^{2} \\). ידוע כי השטח הכלוא בין הפונקציה, ציר ה-x והישר \\( x = 3 \\) שווה ל-18. מהו הערך של c?&rlm;",
        options: ["c = 2", "c = 3", "c = 1", "c = 4"],
        correctAnswer: 0,
        hint: "בצעו אינטגרל מ-0 עד 3 לפונקציה הנתונה. הפונקציה הקדומה תהיה פונקציה של c. השוו את התוצאה ל-18.",
        solution_steps: [
            { verbal_explanation: "בניית האינטגרל הפשוט בין גבולות ברורים הכולל מקדם נעלם.", math_expression: "S = \\int_{0}^{3} cx^{2} dx = 18" },
            { verbal_explanation: "מציאת הפונקציה הקדומה בתוספת המקדם והצבת הגבולות.", math_expression: "[\\dfrac{cx^{3}}{3}]_{0}^{3} = 18" },
            { verbal_explanation: "הצבת הגבול העליון מחלצת משוואה פשוטה.", math_expression: "\\dfrac{c(3^{3})}{3} = \\dfrac{27c}{3} = 9c" },
            { verbal_explanation: "השוואת התוצאה למרחב הנתון לשם גילוי המקדם השלם.", math_expression: "9c = 18 \\Rightarrow c = 2" }
        ],
        final_answer: "c = 2"
    },
    {
        topic: "integration_472",
        subTopic: "בעיות קיצון המשלבות אינטגרלים",
        question_text: "נתונה הפונקציה \\( f(x) = a\\sin(x) \\) (כאשר a חיובי). השטח הכלוא בין הפונקציה לציר ה-x בתחום שבין 0 ל- \\( \\pi \\) שווה ל-4. מצאו את הערך של a.&rlm;",
        options: ["a = 2", "a = 4", "a = 1", "a = 0.5"],
        correctAnswer: 0,
        hint: "בצעו אינטגרל מ-0 עד פאי לפונקציה. האינטגרל של סינוס הוא מינוס קוסינוס. הציבו והשוו ל-4.",
        solution_steps: [
            { verbal_explanation: "הגדרת האינטגרל המסוים הקושר את המקדם הנעלם לשטח הטריגונומטרי.", math_expression: "S = \\int_{0}^{\\pi} a\\sin(x) dx = 4" },
            { verbal_explanation: "ביצוע פקודת האינטגרל תוך שמירת המקדם בחוץ.", math_expression: "[-a\\cos(x)]_{0}^{\\pi} = 4" },
            { verbal_explanation: "הצבת הגבול העליון המהפך את הסימן דרך קוסינוס פאי.", math_expression: "-a(-1) = a" },
            { verbal_explanation: "הצבת הגבול התחתון שאינו הופך סימן אלא מותיר אותו.", math_expression: "-a(1) = -a" },
            { verbal_explanation: "חיסור הגבול התחתון מהעליון והשוואה לתוצאה המקווה.", math_expression: "a - (-a) = 4 \\Rightarrow 2a = 4" },
            { verbal_explanation: "סיום.", math_expression: "a = 2" }
        ],
        final_answer: "a = 2"
    },
    {
        topic: "integration_472",
        subTopic: "בעיות קיצון המשלבות אינטגרלים",
        question_text: "פונקציית השטח מוגדרת על ידי: \\( S(t) = \\int_{1}^{t} (x^{2} - 4x + 3) dx \\) עבור \\( t > 1 \\). באיזה ערך של t הפונקציה S(t) מקבלת את ערכה המינימלי?&rlm;",
        options: ["t = 3", "t = 2", "t = 1.5", "t = 4"],
        correctAnswer: 0,
        hint: "הנגזרת של פונקציית אינטגרל (מגבול תחתון קבוע לגבול עליון t) היא הפונקציה הפנימית מוערכת ב-t. השוו אותה לאפס.",
        solution_steps: [
            { verbal_explanation: "יישום המשפט היסודי של החשבון הדיפרנציאלי והאינטגרלי לגזירת שטח מצטבר לפי גבול עליון.", math_expression: "S'(t) = t^{2} - 4t + 3" },
            { verbal_explanation: "השוואת פונקציית הנגזרת לאפס לאיתור נקודות בהן השטח מפסיק לגדול או לקטון.", math_expression: "t^{2} - 4t + 3 = 0" },
            { verbal_explanation: "פירוק לגורמים לאיתור שורשי המשוואה.", math_expression: "(t - 1)(t - 3) = 0" },
            { verbal_explanation: "קבלת פתרונות אופציונליים.", math_expression: "t_{1} = 1 \\quad , \\quad t_{2} = 3" },
            { verbal_explanation: "מכיוון שמוגדר כי המשתנה גדול מאחת, רק התשובה השנייה תואמת.", math_expression: "t > 1 \\Rightarrow t = 3" },
            { verbal_explanation: "הצבת ערך של 2 למשל מניבה נגזרת שלילית שמראה כי הפונקציה אכן יורדת למינימום בנקודה זו.", math_expression: "Minimum" }
        ],
        final_answer: "t = 3"
    },
    {
        topic: "integration_472",
        subTopic: "בעיות קיצון המשלבות אינטגרלים",
        question_text: "נתונה הפונקציה \\( f(x) = kx^{2} \\). ידוע כי השטח הכלוא בין הפונקציה לציר ה-x בתחום מ-0 עד 2 שווה ל- \\( 16 : 3 \\). מצאו את הערך של k.&rlm;",
        options: ["k = 2", "k = 1", "k = 4", "k = 3"],
        correctAnswer: 0,
        hint: "אינטגרל של kx² הוא kx³ חלקי 3. הציבו 2 במקום x, השוו לתוצאה המבוקשת וחלצו את k.",
        solution_steps: [
            { verbal_explanation: "הגדרת האינטגרל המסוים המגדיר את הבעיה.", math_expression: "S = \\int_{0}^{2} kx^{2} dx = \\dfrac{16}{3}" },
            { verbal_explanation: "מציאת הפונקציה הקדומה בליווי המקדם.", math_expression: "[\\dfrac{kx^{3}}{3}]_{0}^{2} = \\dfrac{16}{3}" },
            { verbal_explanation: "הצבת הגבול העליון לאיפוס הפונקציה התחתונה.", math_expression: "\\dfrac{k(2^{3})}{3} = \\dfrac{8k}{3}" },
            { verbal_explanation: "השוואה לנתון המספרי של השטח המוחלט.", math_expression: "\\dfrac{8k}{3} = \\dfrac{16}{3}" },
            { verbal_explanation: "צמצום המכנים המשותפים והשלמת החלוקה הפשוטה במונה.", math_expression: "8k = 16 \\Rightarrow k = 2" }
        ],
        final_answer: "k = 2"
    },
    {
        topic: "integration_472",
        subTopic: "בעיות קיצון המשלבות אינטגרלים",
        question_text: "השטח הכלוא בין הפונקציה המעריכית \\( y = e^{x} \\), הישר האנכי \\( x = b \\) (כאשר b חיובי), ציר ה-y וציר ה-x, שווה ל- \\( e^{3} - 1 \\). מהו הערך של הפרמטר b?&rlm;",
        options: ["b = 3", "b = 4", "b = 2", "b = ln(3)"],
        correctAnswer: 0,
        hint: "אינטגרל של אקספוננט הוא עצמו. הציבו גבולות עליונים (b) ותחתונים (0). זכרו כי אקספוננט בנקודה 0 הוא 1.",
        solution_steps: [
            { verbal_explanation: "כתיבת המשוואה המייצגת את האינטגרל הרציף עד לגבול הנעלם.", math_expression: "\\int_{0}^{b} e^{x} dx = e^{3} - 1" },
            { verbal_explanation: "מציאת הפונקציה הקדומה הזהה למקור והצבת הגבולות בה.", math_expression: "[e^{x}]_{0}^{b} = e^{3} - 1" },
            { verbal_explanation: "הצבת הגבולות לחילוץ משוואה מעריכית.", math_expression: "e^{b} - e^{0} = e^{3} - 1" },
            { verbal_explanation: "הבנה מובנית באשר לחזקת אפס המוכיחה את המשוואה.", math_expression: "e^{b} - 1 = e^{3} - 1" },
            { verbal_explanation: "השוואת המעריכים בגלל שהבסיסים שווים, מה שנותן פתרון מיידי.", math_expression: "e^{b} = e^{3} \\Rightarrow b = 3" }
        ],
        final_answer: "b = 3"
    },
    {
        topic: "integration_472",
        subTopic: "בעיות קיצון המשלבות אינטגרלים",
        question_text: "עבור איזה ערך של t חיובי (t > 0), האינטגרל הבא יקבל את ערכו המקסימלי: \\( \\int_{0}^{t} (4 - x^{2}) dx \\)?&rlm;",
        options: ["t = 2", "t = 4", "t = 0", "t = 1.5"],
        correctAnswer: 0,
        hint: "הפונקציה המצטברת גדלה כל עוד הפונקציה הפנימית חיובית. מקסימום מושג בנקודה שבה הפונקציה הפנימית שווה ל-0 והופכת לשלילית.",
        solution_steps: [
            { verbal_explanation: "הגדרת פונקציית שטח חדשה הקשורה לגבול העליון ושימוש בנגזרת שלה.", math_expression: "S(t) = \\int_{0}^{t} (4 - x^{2}) dx \\Rightarrow S'(t) = 4 - t^{2}" },
            { verbal_explanation: "השוואת נגזרת פונקציית השטח לאפס למציאת קיצון פוטנציאלי.", math_expression: "4 - t^{2} = 0" },
            { verbal_explanation: "חילוץ שורשי המשוואה הריבועית.", math_expression: "t^{2} = 4 \\Rightarrow t = \\pm 2" },
            { verbal_explanation: "הסתמכות על הגדרת התחום בשאלה המחייב ערך חיובי בלבד.", math_expression: "t > 0 \\Rightarrow t = 2" },
            { verbal_explanation: "זיהוי מגמה: השטח הפנימי מוסיף חיוב עד שמגיע לחיתוך באופק, ואז מתחיל לחסר. כך שמקסימום מושג באמת בחיתוך.", math_expression: "Max = 2" }
        ],
        final_answer: "t = 2"
    },
    {
        topic: "integration_472",
        subTopic: "בעיות קיצון המשלבות אינטגרלים",
        question_text: "בפרבולה \\( y = 27 - x^{2} \\) ברביע הראשון חסום מלבן. קודקוד אחד בראשית, שניים על הצירים והאחרון מונח על גרף הפרבולה. מצאו את השטח המקסימלי האפשרי של המלבן.&rlm;",
        options: ["54", "27", "108", "36"],
        correctAnswer: 0,
        hint: "שטח המלבן הוא x כפול y (כלומר x כפול הפרבולה). בנו פונקציית מטרה לשטח, גזרו ומצאו מקסימום.",
        solution_steps: [
            { verbal_explanation: "בניית פונקציית מטרה המייצגת את שטח המלבן המדובר, על ידי הכפלת הרוחב בגובה הפונקציה בנקודה.", math_expression: "S(x) = x \\times (27 - x^{2})" },
            { verbal_explanation: "פתיחת סוגריים לפולינום רגיל להקלת החישוב הדיפרנציאלי.", math_expression: "S(x) = 27x - x^{3}" },
            { verbal_explanation: "גזירת הפונקציה והשוואתה לאפס לשם איתור נקודות קיצון מרחביות.", math_expression: "S'(x) = 27 - 3x^{2} = 0" },
            { verbal_explanation: "חילוץ הנקודה האופטימלית מהמשוואה שנוצרה.", math_expression: "3x^{2} = 27 \\Rightarrow x^{2} = 9 \\Rightarrow x = 3" },
            { verbal_explanation: "הצבת נקודת הקיצון המוצלחת חזרה לתוך פונקציית המטרה כדי לאמוד את השטח במלואו.", math_expression: "S(3) = 3 \\times (27 - 3^{2}) = 3 \\times (27 - 9)" },
            { verbal_explanation: "ביצוע הכפל הסופי של התוצאה.", math_expression: "S(3) = 3 \\times 18 = 54" }
        ],
        final_answer: "54"
    },

    // ==========================================
    // תת נושא 7: מציאת פונקציה קדומה בעזרת נתון (f(x) מתוך הנגזרת) (10 שאלות)
    // ==========================================

    {
        topic: "integration_472",
        subTopic: "מציאת פונקציה קדומה בעזרת נתון (f(x) מתוך הנגזרת)",
        question_text: "נתונה פונקציית נגזרת \\( f'(x) = 2x - 4 \\). ידוע שהגרף של הפונקציה המקורית \\( f(x) \\) עובר בנקודה (3, 5). מהי הפונקציה המקורית?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 150' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><path d='M 30 100 Q 100 20 170 100' fill='none' stroke='#3b82f6' stroke-width='2'/><line x1='100' y1='20' x2='150' y2='20' stroke='#ef4444' stroke-width='2'/><circle cx='100' cy='20' r='4' fill='#ef4444'/><text x='90' y='15' font-size='12' font-family='Arial'>(3, 5)</text></svg></div>",
        options: ["f(x) = x² - 4x + 8", "f(x) = x² - 4x + 5", "f(x) = 2x² - 4x - 1", "f(x) = x² - 4x + 2"],
        correctAnswer: 0,
        hint: "בצעו אינטגרציה לנגזרת כדי למצוא את המבנה של f(x) הכולל קבוע c. לאחר מכן, הציבו x=3 והשוו ל-5 כדי למצוא את c.",
        solution_steps: [
            { verbal_explanation: "ביצוע אינטגרל על הפונקציה הנגזרת לשם הפיכתה לפונקציה הקדומה בעלת קבוע אלמוני.", math_expression: "f(x) = \\int (2x - 4) dx = x^{2} - 4x + c" },
            { verbal_explanation: "הצבת נקודת המעבר (חיתוך ידוע) שהובאה בנתונים להשלמת הפאזל.", math_expression: "f(3) = 3^{2} - 4(3) + c = 5" },
            { verbal_explanation: "ביצוע חשבון פשוט במשוואה שנוצרה.", math_expression: "9 - 12 + c = 5" },
            { verbal_explanation: "כינוס וחילוץ הקבוע.", math_expression: "-3 + c = 5 \\Rightarrow c = 8" },
            { verbal_explanation: "הרכבת הפונקציה הקדומה בשלמותה על ידי הוספת הקבוע לביטוי הראשוני.", math_expression: "f(x) = x^{2} - 4x + 8" }
        ],
        final_answer: "f(x) = x² - 4x + 8"
    },
    {
        topic: "integration_472",
        subTopic: "מציאת פונקציה קדומה בעזרת נתון (f(x) מתוך הנגזרת)",
        question_text: "פונקציית הנגזרת של פונקציה מעריכית נתונה כ- \\( f'(x) = e^{x} - 2 \\). ידוע כי הגרף חותך את ציר ה-y בנקודה (0, 3). מצאו את הפונקציה המקורית \\( f(x) \\).&rlm;",
        options: ["f(x) = e^x - 2x + 2", "f(x) = e^x - 2x + 3", "f(x) = e^x - x + 2", "f(x) = e^x - 2x"],
        correctAnswer: 0,
        hint: "האינטגרל של האקספוננט נשאר אקספוננט, והקבוע (-2) הופך ל-2x-. הציבו x=0 והשוו ל-3. זכרו ש-e בחזקת 0 שווה ל-1.",
        solution_steps: [
            { verbal_explanation: "הפעלת כלל אינטגרציה להשגת המבנה הכללי של הפונקציה המעריכית המדוברת.", math_expression: "f(x) = \\int (e^{x} - 2) dx = e^{x} - 2x + c" },
            { verbal_explanation: "שימוש בנקודת החיתוך עם הציר האנכי ליצירת משוואה עם נעלם אחד.", math_expression: "f(0) = e^{0} - 2(0) + c = 3" },
            { verbal_explanation: "עיבוד המשוואה על בסיס חוק החזקות של האפס.", math_expression: "1 - 0 + c = 3" },
            { verbal_explanation: "העברת איבר לבידוד מלא ומוחלט של קבוע האינטגרציה.", math_expression: "1 + c = 3 \\Rightarrow c = 2" },
            { verbal_explanation: "סיום הרכבת הפונקציה הקדומה לתצורת הצגה מלאה וראויה.", math_expression: "f(x) = e^{x} - 2x + 2" }
        ],
        final_answer: "f(x) = e^x - 2x + 2"
    },
    {
        topic: "integration_472",
        subTopic: "מציאת פונקציה קדומה בעזרת נתון (f(x) מתוך הנגזרת)",
        question_text: "הנגזרת נתונה כ- \\( f'(x) = \\dfrac{4}{x} \\). ידוע שהנקודה \\( (e, 7) \\) נמצאת על הפונקציה. מצאו את הפונקציה המקורית.&rlm;",
        options: ["f(x) = 4ln(x) + 3", "f(x) = 4ln(x) + 7", "f(x) = ln(x) + 6", "f(x) = 4ln(x) - 1"],
        correctAnswer: 0,
        hint: "האינטגרל של 1 חלקי x הוא ln(x). לכן, האינטגרל יהיה 4ln(x) ועוד קבוע. הציבו x=e (הלוגריתם שלו הוא 1) והשוו ל-7.",
        solution_steps: [
            { verbal_explanation: "הפעלת אינטגרציה המבוססת על חוקי הלוגריתם הטבעי עבור שברים המכילים משתנה ליניארי במכנה.", math_expression: "f(x) = \\int \\dfrac{4}{x} dx = 4\\ln(x) + c" },
            { verbal_explanation: "הצבת נקודת המעבר הייחודית (e) מתוך הנתונים המוצגים אל תוך המשוואה שנוצרה.", math_expression: "f(e) = 4\\ln(e) + c = 7" },
            { verbal_explanation: "שימוש בידיעה שלוגריתם טבעי לבסיס זהה נותן אחת כתוצאה.", math_expression: "4(1) + c = 7" },
            { verbal_explanation: "חילוץ קבוע הפונקציה במלואו.", math_expression: "c = 7 - 4 = 3" },
            { verbal_explanation: "הצגת התשובה החותמת והסופית.", math_expression: "f(x) = 4\\ln(x) + 3" }
        ],
        final_answer: "f(x) = 4ln(x) + 3"
    },
    {
        topic: "integration_472",
        subTopic: "מציאת פונקציה קדומה בעזרת נתון (f(x) מתוך הנגזרת)",
        question_text: "נתונה פונקציית נגזרת טריגונומטרית \\( f'(x) = \\cos(x) + \\sin(x) \\). הגרף עובר בנקודה שבה \\( x = \\pi \\) ו- \\( y = 2 \\). מצאו את \\( f(x) \\).&rlm;",
        options: ["f(x) = sin(x) - cos(x) + 1", "f(x) = sin(x) + cos(x) + 3", "f(x) = -sin(x) + cos(x) + 1", "f(x) = sin(x) - cos(x) + 2"],
        correctAnswer: 0,
        hint: "האינטגרל של קוסינוס הוא סינוס. האינטגרל של סינוס הוא מינוס קוסינוס. הציבו את פאי (סינוס פאי הוא 0, קוסינוס פאי הוא 1-) ומיצאו את c.",
        solution_steps: [
            { verbal_explanation: "ביצוע אינטגרציה מעורבת לפונקציות טריגונומטריות הפוכות סימן.", math_expression: "f(x) = \\int (\\cos(x) + \\sin(x)) dx = \\sin(x) - \\cos(x) + c" },
            { verbal_explanation: "הצבת נקודת המעבר החצי-מעגלית למערכת.", math_expression: "f(\\pi) = \\sin(\\pi) - \\cos(\\pi) + c = 2" },
            { verbal_explanation: "העברת הערכים הטריגונומטריים למספרים ממשיים.", math_expression: "0 - (-1) + c = 2" },
            { verbal_explanation: "פתיחת המינוס הכפול לבידוד הקבוע בצורה מדויקת.", math_expression: "1 + c = 2 \\Rightarrow c = 1" },
            { verbal_explanation: "עיצוב וסידור התוצאה המושלמת.", math_expression: "f(x) = \\sin(x) - \\cos(x) + 1" }
        ],
        final_answer: "f(x) = sin(x) - cos(x) + 1"
    },
    {
        topic: "integration_472",
        subTopic: "מציאת פונקציה קדומה בעזרת נתון (f(x) מתוך הנגזרת)",
        question_text: "הנגזרת של פונקציה מסוימת היא \\( f'(x) = 6x^{2} - 6 \\). ידוע שערך המינימום המקומי של הפונקציה (ערך ה-y) הוא 4-. מצאו את הפונקציה המקורית.&rlm;",
        options: ["f(x) = 2x³ - 6x", "f(x) = 2x³ - 6x - 4", "f(x) = 2x³ - 6x + 2", "f(x) = x³ - 3x - 2"],
        correctAnswer: 0,
        hint: "תחילה, מצאו מתי הנגזרת מתאפסת (אלו החשודות לקיצון: 1 ו- 1-). קבעו מי מהן היא נקודת מינימום. לאחר מכן, הציבו את הנקודה בפונקציה הקדומה ומצאו את c.",
        solution_steps: [
            { verbal_explanation: "איתור נקודות התאפסות של הנגזרת כדי למצוא היכן מממוקם המינימום המדובר.", math_expression: "6x^{2} - 6 = 0 \\Rightarrow 6x^{2} = 6 \\Rightarrow x^{2} = 1 \\Rightarrow x = \\pm 1" },
            { verbal_explanation: "מציאת נקודת המינימום (הנגזרת עולה מעברה ולכן הנקודה החיובית היא המינימום).", math_expression: "Min \\Rightarrow x = 1" },
            { verbal_explanation: "אינטגרציה לנגזרת על מנת להציג את צורת הפונקציה הקדומה הכללית.", math_expression: "f(x) = \\int (6x^{2} - 6) dx = \\dfrac{6x^{3}}{3} - 6x + c = 2x^{3} - 6x + c" },
            { verbal_explanation: "הצבת נקודת המינימום והערך הנתון לה אל תוך הפונקציה כדי לחשוף את הקבוע.", math_expression: "f(1) = 2(1)^{3} - 6(1) + c = -4" },
            { verbal_explanation: "חישוב המשוואה הליניארית הפשוטה שנוצרה.", math_expression: "2 - 6 + c = -4 \\Rightarrow -4 + c = -4" },
            { verbal_explanation: "קבלת קבוע שמתאפס לחלוטין ולכן מושמט מן התוצאה המוגמרת.", math_expression: "c = 0 \\Rightarrow f(x) = 2x^{3} - 6x" }
        ],
        final_answer: "f(x) = 2x³ - 6x"
    },
    {
        topic: "integration_472",
        subTopic: "מציאת פונקציה קדומה בעזרת נתון (f(x) מתוך הנגזרת)",
        question_text: "נתונה הנגזרת השנייה של פונקציה: \\( f''(x) = 6x \\). נתון שלפונקציה יש נקודת פיתול בנקודה (2, 5) ושיפוע המשיק בנקודה זו הוא 3-. מצאו את הפונקציה \\( f(x) \\).&rlm;",
        options: ["f(x) = x³ - 15x + 27", "f(x) = x³ - 3x + 1", "f(x) = 3x³ - 15x + 5", "f(x) = x³ - 12x + 13"],
        correctAnswer: 0,
        hint: "בצעו אינטגרציה פעמיים. אינטגרציה ראשונה תיתן את f'(x) + c1. הציבו x=2 והשוו ל- 3- כדי למצוא את c1. אינטגרציה שנייה תיתן את f(x) + c2. הציבו (2,5) ומצאו את c2.",
        solution_steps: [
            { verbal_explanation: "ביצוע גזירה הפוכה (אינטגרל) לנגזרת השנייה כדי לחזור שלב אחד לאחור אל הנגזרת הראשונה.", math_expression: "f'(x) = \\int 6x dx = 3x^{2} + c_{1}" },
            { verbal_explanation: "שימוש בנתון השיפוע בנקודת ההשקה המצויה כדי לפתור את הקבוע של הנגזרת הראשונה.", math_expression: "f'(2) = 3(2^{2}) + c_{1} = 12 + c_{1} = -3" },
            { verbal_explanation: "חילוץ הקבוע והשלמת תבנית הנגזרת.", math_expression: "c_{1} = -15 \\Rightarrow f'(x) = 3x^{2} - 15" },
            { verbal_explanation: "ביצוע אינטגרל נוסף על הנגזרת הראשונה במטרה לחשוף את הפונקציה השלמה עצמה.", math_expression: "f(x) = \\int (3x^{2} - 15) dx = x^{3} - 15x + c_{2}" },
            { verbal_explanation: "הצבת נקודת המעבר הממשית על הגרף כדי לחלץ את הקבוע הראשי העליון.", math_expression: "f(2) = 2^{3} - 15(2) + c_{2} = 5" },
            { verbal_explanation: "חישוב מול המשתנים המספריים.", math_expression: "8 - 30 + c_{2} = 5 \\Rightarrow -22 + c_{2} = 5" },
            { verbal_explanation: "קביעת הקבוע השני והשלמת הפתרון למלואו.", math_expression: "c_{2} = 27 \\Rightarrow f(x) = x^{3} - 15x + 27" }
        ],
        final_answer: "f(x) = x³ - 15x + 27"
    },
    {
        topic: "integration_472",
        subTopic: "מציאת פונקציה קדומה בעזרת נתון (f(x) מתוך הנגזרת)",
        question_text: "הנגזרת נתונה כ- \\( f'(x) = \\dfrac{1}{\\sqrt{2x + 1}} \\). גרף הפונקציה עובר בנקודה (4, 6). מצאו את הפונקציה המקורית.&rlm;",
        options: ["f(x) = √(2x + 1) + 3", "f(x) = 2√(2x + 1) + 4", "f(x) = √(2x + 1) + 5", "f(x) = 0.5√(2x + 1) + 4.5"],
        correctAnswer: 0,
        hint: "המירו את המכנה לחזקת מינוס חצי וחשבו אינטגרל. התוצאה תהיה שורש (החזקה הופכת לחצי וחלוקה בחצי) שיחולק בנגזרת הפנימית (2). לאחר מכן הציבו את (4,6).",
        solution_steps: [
            { verbal_explanation: "המרת כתיב השבר לחזקה עשרונית הפוכה לשם ביצוע אינטגרציה נעימה על פי הכללים.", math_expression: "f(x) = \\int (2x + 1)^{-0.5} dx" },
            { verbal_explanation: "הוספת אחת לחזקה וחלוקה במעריך יחד עם הנגזרת הפנימית של הביטוי הליניארי.", math_expression: "f(x) = \\dfrac{(2x + 1)^{0.5}}{0.5 \\times 2} + c" },
            { verbal_explanation: "חישוב פשוט במכנה מנטרל את המקדם למספר שלם נקי (אחת) ומותיר רק את השורש.", math_expression: "f(x) = \\sqrt{2x + 1} + c" },
            { verbal_explanation: "הצבת נקודת המעבר מנתוני הבעיה למציאת הקבוע הנעלם במשוואה הגיאומטרית.", math_expression: "f(4) = \\sqrt{2(4) + 1} + c = 6" },
            { verbal_explanation: "ביצוע פעולת חיבור בתוך השורש ופתיחתו.", math_expression: "\\sqrt{9} + c = 6 \\Rightarrow 3 + c = 6" },
            { verbal_explanation: "חילוץ קבוע הפונקציה בפישוט מהיר.", math_expression: "c = 3 \\Rightarrow f(x) = \\sqrt{2x + 1} + 3" }
        ],
        final_answer: "f(x) = √(2x + 1) + 3"
    },
    {
        topic: "integration_472",
        subTopic: "מציאת פונקציה קדומה בעזרת נתון (f(x) מתוך הנגזרת)",
        question_text: "פונקציית הנגזרת היא \\( f'(x) = 10(x - 2)^{4} \\). הנקודה (3, 4) נמצאת על הפונקציה \\( f(x) \\). מצאו את הפונקציה.&rlm;",
        options: ["f(x) = 2(x - 2)⁵ + 2", "f(x) = 2(x - 2)⁵ + 4", "f(x) = 10(x - 2)⁵ + 2", "f(x) = 5(x - 2)⁵ - 1"],
        correctAnswer: 0,
        hint: "בצעו אינטגרל לנגזרת: מעריך עולה ל-5, והמקדם 10 מחולק ב-5. הציבו x=3 והשוו ל-4.",
        solution_steps: [
            { verbal_explanation: "הוצאת המקדם החיצוני וביצוע אינטגרציה פשוטה על הפולינום שבסוגריים על פי חוק הגזירה ההפוכה.", math_expression: "f(x) = \\int 10(x - 2)^{4} dx = \\dfrac{10(x - 2)^{5}}{5} + c" },
            { verbal_explanation: "צמצום המונה והמכנה ליצירת פונקציה קדומה מפושטת.", math_expression: "f(x) = 2(x - 2)^{5} + c" },
            { verbal_explanation: "הצבת נקודת הקיום הידועה כדי לחלץ את הקבוע המיוחל מתוך הפונקציה.", math_expression: "f(3) = 2(3 - 2)^{5} + c = 4" },
            { verbal_explanation: "חישוב פנימי של החזקה.", math_expression: "2(1^{5}) + c = 4 \\Rightarrow 2 + c = 4" },
            { verbal_explanation: "מציאת הערך של הקבוע והרכבת התוצאה המלאה המוגשת למשתמש.", math_expression: "c = 2 \\Rightarrow f(x) = 2(x - 2)^{5} + 2" }
        ],
        final_answer: "f(x) = 2(x - 2)⁵ + 2"
    },
    {
        topic: "integration_472",
        subTopic: "מציאת פונקציה קדומה בעזרת נתון (f(x) מתוך הנגזרת)",
        question_text: "הנגזרת של פונקציה נתונה כ- \\( f'(x) = e^{2x} - e^{-x} \\). הגרף חותך את ציר ה-y בנקודה (0, 2). מצאו את \\( f(x) \\).&rlm;",
        options: ["f(x) = (e^(2x) : 2) + e^(-x) + 0.5", "f(x) = 2e^(2x) + e^(-x) - 1", "f(x) = (e^(2x) : 2) - e^(-x) + 2.5", "f(x) = e^(2x) + e^(-x) + 0"],
        correctAnswer: 0,
        hint: "אינטגרל של האיבר הראשון נותן חלוקה ב-2. האינטגרל של האיבר השני נותן חלוקה במינוס אחד (שהופך את הסימן לפלוס). הציבו אפס (אקספוננט באפס הוא 1).",
        solution_steps: [
            { verbal_explanation: "פיצול תהליך האינטגרציה לכל אחד משני הביטויים המעריכיים בנפרד בהתאם לנגזרת הפנימית.", math_expression: "f(x) = \\int (e^{2x} - e^{-x}) dx = \\dfrac{e^{2x}}{2} - \\dfrac{e^{-x}}{-1} + c" },
            { verbal_explanation: "טיפול בהתנגשות הסימנים (מינוס המופחת במינוס) וקבלת פלוס אלגברי.", math_expression: "f(x) = 0.5e^{2x} + e^{-x} + c" },
            { verbal_explanation: "הצבת נקודת המעבר על ציר האנך כפי שהוגדר בשאלה לשם מציאת הקבוע הנעלם.", math_expression: "f(0) = 0.5e^{0} + e^{0} + c = 2" },
            { verbal_explanation: "הבנה שכל ביטוי לא מאופס המועלה לחזקת אפס מניב אחת.", math_expression: "0.5(1) + 1 + c = 2" },
            { verbal_explanation: "חיבור האיברים ויצירת משוואה פשוטה.", math_expression: "1.5 + c = 2 \\Rightarrow c = 0.5" },
            { verbal_explanation: "השלמת הרכבת המשוואה המלאה וקביעת הפתרון הסופי בהתאם לחלופות.", math_expression: "f(x) = \\dfrac{e^{2x}}{2} + e^{-x} + 0.5" }
        ],
        final_answer: "f(x) = (e^(2x) : 2) + e^(-x) + 0.5"
    },
    {
        topic: "integration_472",
        subTopic: "מציאת פונקציה קדומה בעזרת נתון (f(x) מתוך הנגזרת)",
        question_text: "גרף הנגזרת \\( f'(x) \\) הוא קו ישר שעובר בנקודות (0, -4) ו- (2, 0). ידוע כי ערך המינימום המוחלט של הפונקציה \\( f(x) \\) הוא 1. מצאו את הפונקציה \\( f(x) \\).&rlm;",
        options: ["f(x) = x² - 4x + 5", "f(x) = 2x² - 4x + 3", "f(x) = x² - 4x + 1", "f(x) = 0.5x² - 2x + 5"],
        correctAnswer: 0,
        hint: "מצאו קודם את משוואת הקו הישר (שיפוע 2). לכן f'(x) = 2x - 4. הנגזרת מתאפסת ב- x=2 ולכן זהו המינימום. הציבו זאת כנקודה (2,1) למציאת c.",
        solution_steps: [
            { verbal_explanation: "מציאת שיפוע הישר המייצג את פונקציית הנגזרת על ידי נוסחת הפרש קואורדינטות בסיסית.", math_expression: "m = \\dfrac{0 - (-4)}{2 - 0} = \\dfrac{4}{2} = 2" },
            { verbal_explanation: "הרכבת משוואת הנגזרת הליניארית כולה, תוך שימוש בנקודת חיתוך ציר האנך כקבוע.", math_expression: "f'(x) = 2x - 4" },
            { verbal_explanation: "איתור הנקודה בה הנגזרת מתאפסת כדי להבין היכן ממוקם המינימום שהוזכר בבעיה.", math_expression: "2x - 4 = 0 \\Rightarrow 2x = 4 \\Rightarrow x = 2" },
            { verbal_explanation: "ביצוע פעולת אינטגרציה על הנגזרת שחשפנו כדי להגיע למבנה הכללי של פונקציית המקור.", math_expression: "f(x) = \\int (2x - 4) dx = \\dfrac{2x^{2}}{2} - 4x + c = x^{2} - 4x + c" },
            { verbal_explanation: "הצבת נקודת המינימום שגילינו לתוך הפונקציה והשוואתה לערך הגובה הנתון שלה, לחילוץ הקבוע.", math_expression: "f(2) = 2^{2} - 4(2) + c = 1" },
            { verbal_explanation: "חישוב מהיר של המרכיבים הליניאריים שנותרו בפולינום.", math_expression: "4 - 8 + c = 1 \\Rightarrow -4 + c = 1 \\Rightarrow c = 5" },
            { verbal_explanation: "הצגת תוצאת החקירה הסופית המשלבת את כלל הנתונים המחושבים לחבילה אחת מוגמרת.", math_expression: "f(x) = x^{2} - 4x + 5" }
        ],
        final_answer: "f(x) = x² - 4x + 5"
    }
];