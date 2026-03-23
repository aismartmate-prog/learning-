const questionsDB = [
    // ==========================================
    // תת נושא 1: חקירה מלאה של הפונקציה המעריכית e^x ו-a^x (כולל קיצון ופיתול) (10 שאלות)
    // ==========================================

    {
        topic: "calculus_exp_log_572",
        subTopic: "חקירה מלאה של הפונקציה המעריכית e^x ו-a^x (כולל קיצון ופיתול)",
        question_text: "נתונה הפונקציה \\( f(x) = xe^{-x} \\). מצאו את נקודת הקיצון של הפונקציה וקבעו את סוגה.&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 120' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='100' x2='180' y2='100' stroke='#94a3b8' stroke-width='2'/><line x1='60' y1='20' x2='60' y2='110' stroke='#94a3b8' stroke-width='2'/><path d='M 20 120 Q 50 100 80 40 T 180 90' fill='none' stroke='#3b82f6' stroke-width='2'/><circle cx='85' cy='38' r='4' fill='#ef4444'/></svg></div>",
        options: ["(1, 1 : e) מקסימום", "(1, e) מקסימום", "(0, 0) מינימום", "(-1, -e) מינימום"],
        correctAnswer: 0,
        hint: "גזרו את הפונקציה לפי כלל המכפלה. הנגזרת של אקספוננט בחזקה שלילית כוללת הכפלה במינוס אחת. השוו לאפס וחלצו את איקס.",
        solution_steps: [
            { verbal_explanation: "גזירת הפונקציה בעזרת כלל המכפלה ושמירה על הנגזרת הפנימית.", math_expression: "f'(x) = 1 \\times e^{-x} + x(-e^{-x})" },
            { verbal_explanation: "הוצאת הפונקציה המעריכית המשותפת כגורם מחוץ לסוגריים.", math_expression: "f'(x) = e^{-x}(1 - x)" },
            { verbal_explanation: "השוואת הנגזרת לאפס. הפונקציה המעריכית חיובית תמיד ואינה מתאפסת.", math_expression: "1 - x = 0 \\Rightarrow x = 1" },
            { verbal_explanation: "הצבת נקודת ההתאפסות בפונקציה המקורית למציאת שיעור האנך.", math_expression: "f(1) = 1 \\times e^{-1} = \\dfrac{1}{e}" },
            { verbal_explanation: "בדיקת סוג הקיצון בעזרת הנגזרת השנייה.", math_expression: "f''(x) = -e^{-x}(1 - x) + e^{-x}(-1)" },
            { verbal_explanation: "הצבת הנקודה בנגזרת השנייה מניבה ערך שלילי, דבר המעיד על מקסימום.", math_expression: "f''(1) = -e^{-1} < 0" }
        ],
        final_answer: "(1, 1 : e) מקסימום"
    },
    {
        topic: "calculus_exp_log_572",
        subTopic: "חקירה מלאה של הפונקציה המעריכית e^x ו-a^x (כולל קיצון ופיתול)",
        question_text: "מצאו את נקודות החיתוך עם ציר ה-x של הפונקציה \\( f(x) = e^{2x} - 4e^{x} \\).&rlm;",
        options: ["(ln(4), 0)", "(ln(2), 0)", "(0, 0)", "(4, 0)"],
        correctAnswer: 0,
        hint: "השוו את הפונקציה לאפס. הוציאו את הפונקציה המעריכית כגורם משותף וזכרו שהיא אינה יכולה להתאפס.",
        solution_steps: [
            { verbal_explanation: "השוואת הפונקציה לאפס למציאת נקודות חיתוך אופקיות במערכת הצירים.", math_expression: "e^{2x} - 4e^{x} = 0" },
            { verbal_explanation: "הוצאת גורם משותף מתוך המשוואה המעריכית.", math_expression: "e^{x}(e^{x} - 4) = 0" },
            { verbal_explanation: "בחינת הגורם הראשון ופסילתו כיוון שאינו מתאפס לעולם.", math_expression: "e^{x} = 0 \\Rightarrow \\emptyset" },
            { verbal_explanation: "בחינת הגורם השני והשוואתו לאפס למציאת הפתרון היחיד.", math_expression: "e^{x} - 4 = 0 \\Rightarrow e^{x} = 4" },
            { verbal_explanation: "הפעלת פונקציית הלוגריתם הטבעי על שני האגפים לחילוץ המעריך.", math_expression: "x = \\ln(4)" },
            { verbal_explanation: "קביעת נקודת החיתוך הסופית.", math_expression: "( \\ln(4), 0 )" }
        ],
        final_answer: "(ln(4), 0)"
    },
    {
        topic: "calculus_exp_log_572",
        subTopic: "חקירה מלאה של הפונקציה המעריכית e^x ו-a^x (כולל קיצון ופיתול)",
        question_text: "נתונה הפונקציה \\( f(x) = x^{2}e^{x} \\). מצאו את נקודות הקיצון שלה וסווגו אותן.&rlm;",
        options: ["(-2, 4 : e²) מקסימום, (0, 0) מינימום", "(2, 4e²) מקסימום, (0, 0) מינימום", "(-2, 4 : e²) מינימום, (0, 0) מקסימום", "(0, 0) מינימום בלבד"],
        correctAnswer: 0,
        hint: "גזרו בעזרת כלל המכפלה, הוציאו גורמים משותפים והשוו את הפולינום לאפס.",
        solution_steps: [
            { verbal_explanation: "גזירת הפונקציה תוך יישום חוק המכפלה.", math_expression: "f'(x) = 2xe^{x} + x^{2}e^{x}" },
            { verbal_explanation: "הוצאת גורמים משותפים מחוץ לסוגריים לפישוט הנגזרת.", math_expression: "f'(x) = xe^{x}(2 + x)" },
            { verbal_explanation: "השוואת הנגזרת לאפס למציאת שורשיה, תוך התעלמות מן האקספוננט החיובי.", math_expression: "x(2 + x) = 0" },
            { verbal_explanation: "חילוץ שיעורי האיקס של נקודות הקיצון.", math_expression: "x_{1} = 0 \\quad , \\quad x_{2} = -2" },
            { verbal_explanation: "הצבת הנקודות בפונקציה המקורית לקבלת שיעור גובה הנקודות.", math_expression: "f(0) = 0 \\quad , \\quad f(-2) = 4e^{-2} = \\dfrac{4}{e^{2}}" },
            { verbal_explanation: "סיווג על פי תחומי עלייה וירידה (הפולינום בנגזרת מתנהג כפרבולה מחייכת).", math_expression: "(-2, \\dfrac{4}{e^{2}}) \\Rightarrow \\cap \\quad , \\quad (0, 0) \\Rightarrow \\cup" }
        ],
        final_answer: "(-2, 4 : e²) מקסימום, (0, 0) מינימום"
    },
    {
        topic: "calculus_exp_log_572",
        subTopic: "חקירה מלאה של הפונקציה המעריכית e^x ו-a^x (כולל קיצון ופיתול)",
        question_text: "מהן האסימפטוטות האופקית והאנכית של הפונקציה \\( f(x) = \\dfrac{e^{x}}{e^{x} - 1} \\)?&rlm;",
        options: ["אנכית x=0, אופקית y=1 ו- y=0", "אנכית x=1, אופקית y=1", "אנכית x=0, אופקית y=1 בלבד", "אנכית x=0, אופקית y=0 בלבד"],
        correctAnswer: 0,
        hint: "השוו את המכנה לאפס למציאת האסימפטוטה האנכית. באשר לאופקית, בדקו את שאיפת הפונקציה באינסוף (מקדמי האקספוננט) ובמינוס אינסוף (האקספוננט מתאפס).",
        solution_steps: [
            { verbal_explanation: "מציאת אסימפטוטה אנכית באמצעות השוואת המכנה לאפס.", math_expression: "e^{x} - 1 = 0 \\Rightarrow e^{x} = 1 \\Rightarrow x = 0" },
            { verbal_explanation: "חישוב גבול הפונקציה עבור שאיפה לאינסוף חיובי.", math_expression: "\\lim_{x \\to \\infty} \\dfrac{e^{x}}{e^{x}} = 1 \\Rightarrow y = 1" },
            { verbal_explanation: "חישוב גבול הפונקציה עבור שאיפה לאינסוף שלילי.", math_expression: "\\lim_{x \\to -\\infty} \\dfrac{0}{0 - 1} = 0 \\Rightarrow y = 0" },
            { verbal_explanation: "כתיבת האסימפטוטות שהתקבלו במדויק.", math_expression: "x = 0 \\quad , \\quad y = 1 \\quad , \\quad y = 0" }
        ],
        final_answer: "אנכית x=0, אופקית y=1 ו- y=0"
    },
    {
        topic: "calculus_exp_log_572",
        subTopic: "חקירה מלאה של הפונקציה המעריכית e^x ו-a^x (כולל קיצון ופיתול)",
        question_text: "מצאו את שיעורי ה-x של נקודות הפיתול של הפונקציה \\( f(x) = e^{-x^{2}} \\).&rlm;",
        options: ["x = √0.5, x = -√0.5", "x = 1, x = -1", "x = 0", "אין נקודות פיתול"],
        correctAnswer: 0,
        hint: "גזרו פעמיים. הנגזרת הראשונה היא פונקציית מכפלה. הנגזרת השנייה תכיל פולינום ריבועי, השוו אותו לאפס.",
        solution_steps: [
            { verbal_explanation: "גזירה ראשונה של הפונקציה המורכבת לפי כלל השרשרת.", math_expression: "f'(x) = -2xe^{-x^{2}}" },
            { verbal_explanation: "גזירה שנייה באמצעות כלל המכפלה.", math_expression: "f''(x) = -2e^{-x^{2}} + (-2x)(-2x)e^{-x^{2}}" },
            { verbal_explanation: "הוצאת גורם משותף מתוך הנגזרת השנייה לצורך פישוט.", math_expression: "f''(x) = 2e^{-x^{2}}(2x^{2} - 1)" },
            { verbal_explanation: "השוואת הנגזרת השנייה לאפס לאיתור נקודות פיתול.", math_expression: "2x^{2} - 1 = 0 \\Rightarrow x^{2} = 0.5" },
            { verbal_explanation: "הוצאת שורש ריבועי לקבלת התשובה.", math_expression: "x = \\pm\\sqrt{0.5}" },
            { verbal_explanation: "סימן הנגזרת מתחלף סביב נקודות אלו ולכן אלו נקודות פיתול.", math_expression: "\\Delta f''(x) \\neq 0" }
        ],
        final_answer: "x = √0.5, x = -√0.5"
    },
    {
        topic: "calculus_exp_log_572",
        subTopic: "חקירה מלאה של הפונקציה המעריכית e^x ו-a^x (כולל קיצון ופיתול)",
        question_text: "נתונה הפונקציה \\( f(x) = e^{x}(x - 2)^{2} \\). מצאו את נקודות הקיצון של הפונקציה.&rlm;",
        options: ["(2, 0) מינימום, (0, 4) מקסימום", "(2, 0) מקסימום, (0, 4) מינימום", "(2, 0) מינימום, (-2, 16e⁻²) מקסימום", "(1, e) מינימום"],
        correctAnswer: 0,
        hint: "גזרו לפי כלל המכפלה, הוציאו את האקספוננט ואת הסוגריים כגורמים משותפים והשוו לאפס.",
        solution_steps: [
            { verbal_explanation: "גזירה ראשונה של פונקציית המכפלה המורכבת.", math_expression: "f'(x) = e^{x}(x - 2)^{2} + e^{x} \\times 2(x - 2)" },
            { verbal_explanation: "הוצאת גורמים משותפים לפישוט המשוואה.", math_expression: "f'(x) = e^{x}(x - 2)[(x - 2) + 2] = e^{x}(x - 2)(x)" },
            { verbal_explanation: "השוואת הנגזרת לאפס.", math_expression: "x(x - 2) = 0" },
            { verbal_explanation: "חילוץ שיעורי האיקס.", math_expression: "x_{1} = 0 \\quad , \\quad x_{2} = 2" },
            { verbal_explanation: "הצבת הערכים בפונקציה המקורית לשם קביעת הגובה באנך.", math_expression: "f(0) = e^{0}(-2)^{2} = 4 \\quad , \\quad f(2) = e^{2}(0)^{2} = 0" },
            { verbal_explanation: "קביעת סוג הקיצון על סמך סימני הנגזרת.", math_expression: "(0, 4) \\Rightarrow \\cap \\quad , \\quad (2, 0) \\Rightarrow \\cup" }
        ],
        final_answer: "(2, 0) מינימום, (0, 4) מקסימום"
    },
    {
        topic: "calculus_exp_log_572",
        subTopic: "חקירה מלאה של הפונקציה המעריכית e^x ו-a^x (כולל קיצון ופיתול)",
        question_text: "מצאו את שיעור ה-x של נקודת המינימום של הפונקציה \\( f(x) = \\dfrac{e^{x} + e^{-x}}{2} \\).&rlm;",
        options: ["x = 0", "x = 1", "x = -1", "x = ln(2)"],
        correctAnswer: 0,
        hint: "גזרו את הפונקציה, השוו לאפס, העבירו אגפים והשוו את המעריכים.",
        solution_steps: [
            { verbal_explanation: "גזירה ראשונה של הפונקציה הנתונה.", math_expression: "f'(x) = \\dfrac{e^{x} - e^{-x}}{2}" },
            { verbal_explanation: "השוואת הנגזרת לאפס.", math_expression: "e^{x} - e^{-x} = 0" },
            { verbal_explanation: "העברת איברים לאגפים נגדיים כדי להשוות בסיסים.", math_expression: "e^{x} = e^{-x}" },
            { verbal_explanation: "השוואת המעריכים.", math_expression: "x = -x" },
            { verbal_explanation: "פתרון המשוואה הליניארית הפשוטה.", math_expression: "2x = 0 \\Rightarrow x = 0" }
        ],
        final_answer: "x = 0"
    },
    {
        topic: "calculus_exp_log_572",
        subTopic: "חקירה מלאה של הפונקציה המעריכית e^x ו-a^x (כולל קיצון ופיתול)",
        question_text: "קבעו מהן האסימפטוטות האנכיות והאופקיות של הפונקציה \\( f(x) = e^{\\dfrac{1}{x}} \\).&rlm;",
        options: ["אנכית x=0 מימין, אופקית y=1", "אנכית x=0, אופקית y=0 ו- y=1", "אין אסימפטוטות", "אנכית x=0, אופקית y=e"],
        correctAnswer: 0,
        hint: "עבור איקס שואף לאינסוף המעריך שואף לאפס. עבור איקס שואף לאפס מהצד החיובי המעריך שואף לאינסוף. מהצד השלילי המעריך שואף למינוס אינסוף.",
        solution_steps: [
            { verbal_explanation: "בדיקת שאיפה לאינסוף למציאת אסימפטוטות אופקיות.", math_expression: "\\lim_{x \\to \\pm\\infty} \\dfrac{1}{x} = 0 \\Rightarrow e^{0} = 1 \\Rightarrow y = 1" },
            { verbal_explanation: "בדיקת תחום אי ההגדרה בשאיפה לאפס מהצד החיובי.", math_expression: "\\lim_{x \\to 0^{+}} \\dfrac{1}{x} = \\infty \\Rightarrow e^{\\infty} = \\infty \\Rightarrow x = 0" },
            { verbal_explanation: "בדיקת שאיפה לאפס מהצד השלילי אינה מניבה אסימפטוטה.", math_expression: "\\lim_{x \\to 0^{-}} \\dfrac{1}{x} = -\\infty \\Rightarrow e^{-\\infty} = 0" },
            { verbal_explanation: "הצגת האסימפטוטות התקינות שנמצאו.", math_expression: "y = 1 \\quad , \\quad x = 0" }
        ],
        final_answer: "אנכית x=0 מימין, אופקית y=1"
    },
    {
        topic: "calculus_exp_log_572",
        subTopic: "חקירה מלאה של הפונקציה המעריכית e^x ו-a^x (כולל קיצון ופיתול)",
        question_text: "מצאו את נקודת החיתוך עם ציר ה-x של הפונקציה \\( f(x) = 2^{x} - 4 \\).&rlm;",
        options: ["(2, 0)", "(4, 0)", "(0, -3)", "(0.5, 0)"],
        correctAnswer: 0,
        hint: "השוו את הפונקציה לאפס, העבירו את המספר לאגף השני והשוו מעריכים בעלי אותו בסיס.",
        solution_steps: [
            { verbal_explanation: "השוואת הפונקציה לאפס.", math_expression: "2^{x} - 4 = 0" },
            { verbal_explanation: "העברת איברים לאגף הימני.", math_expression: "2^{x} = 4" },
            { verbal_explanation: "המרת המספר לבסיס מעריכי זהה לזה שבאגף שמאל.", math_expression: "2^{x} = 2^{2}" },
            { verbal_explanation: "השוואת מעריכי החזקה.", math_expression: "x = 2" },
            { verbal_explanation: "הרכבת הקואורדינטה.", math_expression: "(2, 0)" }
        ],
        final_answer: "(2, 0)"
    },
    {
        topic: "calculus_exp_log_572",
        subTopic: "חקירה מלאה של הפונקציה המעריכית e^x ו-a^x (כולל קיצון ופיתול)",
        question_text: "מצאו את שיעור ה-x של נקודת המינימום של הפונקציה \\( f(x) = x e^{\\dfrac{x}{2}} \\).&rlm;",
        options: ["x = -2", "x = -1", "x = -0.5", "x = 2"],
        correctAnswer: 0,
        hint: "גזרו לפי כלל המכפלה והשוו לאפס.",
        solution_steps: [
            { verbal_explanation: "גזירת הפונקציה לפי כלל המכפלה.", math_expression: "f'(x) = 1 \\times e^{0.5x} + x \\times 0.5e^{0.5x}" },
            { verbal_explanation: "הוצאת הפונקציה המעריכית כגורם משותף.", math_expression: "f'(x) = e^{0.5x}(1 + 0.5x)" },
            { verbal_explanation: "השוואת הנגזרת לאפס.", math_expression: "1 + 0.5x = 0" },
            { verbal_explanation: "העברת איברים לבידוד המשתנה.", math_expression: "0.5x = -1" },
            { verbal_explanation: "חילוץ התשובה הסופית.", math_expression: "x = -2" }
        ],
        final_answer: "x = -2"
    },

    // ==========================================
    // תת נושא 2: חקירה מלאה של הפונקציה הלוגריתמית ln(x) (10 שאלות)
    // ==========================================

    {
        topic: "calculus_exp_log_572",
        subTopic: "חקירה מלאה של הפונקציה הלוגריתמית ln(x)",
        question_text: "מצאו את נקודת המינימום של הפונקציה \\( f(x) = x\\ln(x) \\).&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 120' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='60' x2='180' y2='60' stroke='#94a3b8' stroke-width='2'/><line x1='40' y1='10' x2='40' y2='110' stroke='#94a3b8' stroke-width='2'/><path d='M 45 60 Q 80 120 180 10' fill='none' stroke='#3b82f6' stroke-width='2'/><circle cx='85' cy='75' r='4' fill='#ef4444'/></svg></div>",
        options: ["(1 : e, -1 : e)", "(1, 0)", "(e, e)", "(e², 2e²)" ],
        correctAnswer: 0,
        hint: "גזרו את הפונקציה לפי כלל המכפלה, השוו לאפס וזכרו כי איקס שווה e בחזקת מינוס אחת.",
        solution_steps: [
            { verbal_explanation: "גזירה ראשונה המשלבת את כלל המכפלה.", math_expression: "f'(x) = 1 \\times \\ln(x) + x \\times \\dfrac{1}{x}" },
            { verbal_explanation: "צמצום האיבר הימני.", math_expression: "f'(x) = \\ln(x) + 1" },
            { verbal_explanation: "השוואה לאפס.", math_expression: "\\ln(x) = -1" },
            { verbal_explanation: "חילוץ המשתנה על פי הגדרת הלוגריתם הטבעי.", math_expression: "x = e^{-1} = \\dfrac{1}{e}" },
            { verbal_explanation: "הצבה בפונקציה המקורית לקבלת שיעור האנך.", math_expression: "f(e^{-1}) = e^{-1}\\ln(e^{-1}) = \\dfrac{1}{e}(-1) = -\\dfrac{1}{e}" },
            { verbal_explanation: "הרכבת הנקודה הסופית.", math_expression: "( \\dfrac{1}{e}, -\\dfrac{1}{e} )" }
        ],
        final_answer: "(1 : e, -1 : e)"
    },
    {
        topic: "calculus_exp_log_572",
        subTopic: "חקירה מלאה של הפונקציה הלוגריתמית ln(x)",
        question_text: "מצאו את נקודת המקסימום של הפונקציה \\( f(x) = \\dfrac{\\ln(x)}{x} \\).&rlm;",
        options: ["(e, 1 : e)", "(1, 0)", "(e², 2 : e²)", "(e, 1)"],
        correctAnswer: 0,
        hint: "השתמשו בכלל המנה לגזירה. השוו את המונה לאפס.",
        solution_steps: [
            { verbal_explanation: "גזירת הפונקציה בעזרת כלל המנה.", math_expression: "f'(x) = \\dfrac{\\dfrac{1}{x}(x) - \\ln(x)(1)}{x^{2}}" },
            { verbal_explanation: "פישוט המונה המרכזי.", math_expression: "f'(x) = \\dfrac{1 - \\ln(x)}{x^{2}}" },
            { verbal_explanation: "השוואת המונה לאפס למציאת הקיצון.", math_expression: "1 - \\ln(x) = 0 \\Rightarrow \\ln(x) = 1" },
            { verbal_explanation: "חילוץ המשתנה מתוך הלוגריתם.", math_expression: "x = e^{1} = e" },
            { verbal_explanation: "הצבת הנקודה בפונקציה המקורית.", math_expression: "f(e) = \\dfrac{\\ln(e)}{e} = \\dfrac{1}{e}" },
            { verbal_explanation: "קביעת הקואורדינטות המלאות.", math_expression: "( e, \\dfrac{1}{e} )" }
        ],
        final_answer: "(e, 1 : e)"
    },
    {
        topic: "calculus_exp_log_572",
        subTopic: "חקירה מלאה של הפונקציה הלוגריתמית ln(x)",
        question_text: "מצאו את נקודות החיתוך עם ציר ה-x של הפונקציה \\( f(x) = (\\ln(x))^{2} - \\ln(x) \\).&rlm;",
        options: ["(1, 0) ו- (e, 0)", "(e, 0) בלבד", "(0, 0) ו- (1, 0)", "(e², 0) ו- (1, 0)"],
        correctAnswer: 0,
        hint: "השוו לאפס והוציאו את הלוגריתם כגורם משותף מחוץ לסוגריים.",
        solution_steps: [
            { verbal_explanation: "השוואת הפונקציה לאפס.", math_expression: "(\\ln(x))^{2} - \\ln(x) = 0" },
            { verbal_explanation: "הוצאת הלוגריתם כגורם משותף.", math_expression: "\\ln(x)(\\ln(x) - 1) = 0" },
            { verbal_explanation: "פתרון הגורם הראשון למציאת השורש הבסיסי.", math_expression: "\\ln(x) = 0 \\Rightarrow x_{1} = e^{0} = 1" },
            { verbal_explanation: "פתרון הגורם השני מתוך הסוגריים.", math_expression: "\\ln(x) - 1 = 0 \\Rightarrow \\ln(x) = 1" },
            { verbal_explanation: "חילוץ הנקודה השנייה.", math_expression: "x_{2} = e^{1} = e" },
            { verbal_explanation: "קביעת הנקודות.", math_expression: "(1, 0) \\quad , \\quad (e, 0)" }
        ],
        final_answer: "(1, 0) ו- (e, 0)"
    },
    {
        topic: "calculus_exp_log_572",
        subTopic: "חקירה מלאה של הפונקציה הלוגריתמית ln(x)",
        question_text: "מהו תחום ההגדרה של הפונקציה \\( f(x) = \\ln(x^{2} - 4) \\)?&rlm;",
        options: ["x > 2 או x < -2", "x > 2", "-2 < x < 2", "x > 0"],
        correctAnswer: 0,
        hint: "הביטוי בתוך הלוגריתם חייב להיות גדול ממש מאפס. פתרו את אי השוויון הריבועי.",
        solution_steps: [
            { verbal_explanation: "דרישת החיוביות על פנים הלוגריתם.", math_expression: "x^{2} - 4 > 0" },
            { verbal_explanation: "מציאת שורשי הפונקציה הריבועית.", math_expression: "x^{2} = 4 \\Rightarrow x = \\pm 2" },
            { verbal_explanation: "חקירת תחומי החיוביות של הפונקציה (מעל הציר האופקי).", math_expression: "x > 2 \\quad , \\quad x < -2" },
            { verbal_explanation: "איחוד התחומים לתשובה מסכמת.", math_expression: "x \\in (-\\infty, -2) \\cup (2, \\infty)" }
        ],
        final_answer: "x > 2 או x < -2"
    },
    {
        topic: "calculus_exp_log_572",
        subTopic: "חקירה מלאה של הפונקציה הלוגריתמית ln(x)",
        question_text: "מצאו את שיעור ה-x של נקודת המינימום של הפונקציה \\( f(x) = x^{2}\\ln(x) \\).&rlm;",
        options: ["x = e^(-0.5)", "x = e", "x = 1", "x = e^(-1)"],
        correctAnswer: 0,
        hint: "גזרו לפי מכפלה, הוציאו איקס כגורם משותף והשוו את הביטוי הפנימי לאפס.",
        solution_steps: [
            { verbal_explanation: "גזירה ראשונה לפי כלל המכפלה.", math_expression: "f'(x) = 2x\\ln(x) + x^{2} \\times \\dfrac{1}{x}" },
            { verbal_explanation: "פישוט הנגזרת.", math_expression: "f'(x) = 2x\\ln(x) + x" },
            { verbal_explanation: "השוואה לאפס תוך הוצאת המשתנה כגורם משותף.", math_expression: "x(2\\ln(x) + 1) = 0" },
            { verbal_explanation: "פסילת האפס מתחום ההגדרה.", math_expression: "x > 0 \\Rightarrow x \\neq 0" },
            { verbal_explanation: "פתרון הסוגריים לאיתור הקיצון.", math_expression: "2\\ln(x) = -1 \\Rightarrow \\ln(x) = -0.5" },
            { verbal_explanation: "חילוץ המשתנה על פי הגדרת הלוגריתם.", math_expression: "x = e^{-0.5}" }
        ],
        final_answer: "x = e^(-0.5)"
    },
    {
        topic: "calculus_exp_log_572",
        subTopic: "חקירה מלאה של הפונקציה הלוגריתמית ln(x)",
        question_text: "קבעו מהן האסימפטוטות האנכיות והאופקיות של הפונקציה \\( f(x) = \\dfrac{1}{\\ln(x)} \\).&rlm;",
        options: ["אנכית ב- x=1, אופקית ב- y=0", "אנכית ב- x=0, אופקית ב- y=1", "אנכית ב- x=1, אין אופקית", "אין אסימפטוטות כלל"],
        correctAnswer: 0,
        hint: "אסימפטוטה אנכית מתקבלת כשמכנה מתאפס. אסימפטוטה אופקית מתקבלת כשהמכנה שואף לאינסוף.",
        solution_steps: [
            { verbal_explanation: "התאפסות המכנה גורמת לאסימפטוטה אנכית.", math_expression: "\\ln(x) = 0 \\Rightarrow x = 1" },
            { verbal_explanation: "בחינת שאיפת הפונקציה לאינסוף מניבה איפוס בשבר, דבר המהווה אסימפטוטה אופקית.", math_expression: "\\lim_{x \\to \\infty} \\dfrac{1}{\\ln(x)} = \\dfrac{1}{\\infty} = 0 \\Rightarrow y = 0" },
            { verbal_explanation: "בדיקת התנהגות בקצה השמאלי של תחום ההגדרה (אינו אסימפטוטה כי השבר שואף לאפס).", math_expression: "\\lim_{x \\to 0^{+}} \\dfrac{1}{-\\infty} = 0" },
            { verbal_explanation: "רישום תוצאות האסימפטוטות.", math_expression: "x = 1 \\quad , \\quad y = 0" }
        ],
        final_answer: "אנכית ב- x=1, אופקית ב- y=0"
    },
    {
        topic: "calculus_exp_log_572",
        subTopic: "חקירה מלאה של הפונקציה הלוגריתמית ln(x)",
        question_text: "מצאו את נקודת החיתוך עם ציר ה-x של הפונקציה \\( f(x) = x - \\ln(x) \\).&rlm;",
        options: ["אין נקודת חיתוך עם ציר x", "(1, 1)", "(e, 0)", "(0, 0)"],
        correctAnswer: 0,
        hint: "גזרו את הפונקציה ומצאו את נקודת המינימום שלה (ב-x=1 נקבל y=1). מאחר והמינימום המוחלט חיובי, הפונקציה תמיד מעל ציר ה-x.",
        solution_steps: [
            { verbal_explanation: "גזירת הפונקציה לאיתור נקודת קיצון.", math_expression: "f'(x) = 1 - \\dfrac{1}{x}" },
            { verbal_explanation: "השוואה לאפס.", math_expression: "1 - \\dfrac{1}{x} = 0 \\Rightarrow x = 1" },
            { verbal_explanation: "הצבה בפונקציה המקורית לבדיקת הגובה באנך.", math_expression: "f(1) = 1 - \\ln(1) = 1 - 0 = 1" },
            { verbal_explanation: "זיהוי כי מדובר במינימום מוחלט.", math_expression: "x > 0 \\Rightarrow f''(x) = \\dfrac{1}{x^{2}} > 0 \\Rightarrow Min" },
            { verbal_explanation: "הסקת מסקנה: הפונקציה אינה יכולה לחתוך את ציר האפס לעולם מכיוון שערכה המינימלי הוא אחת.", math_expression: "f(x) \\geq 1 \\Rightarrow \\emptyset" }
        ],
        final_answer: "אין נקודת חיתוך עם ציר x"
    },
    {
        topic: "calculus_exp_log_572",
        subTopic: "חקירה מלאה של הפונקציה הלוגריתמית ln(x)",
        question_text: "מהו תחום ההגדרה של הפונקציה \\( f(x) = \\ln(\\dfrac{x + 1}{x - 1}) \\)?&rlm;",
        options: ["x < -1 או x > 1", "-1 < x < 1", "x > 1", "x ≠ 1"],
        correctAnswer: 0,
        hint: "השבר כולו חייב להיות חיובי ממש. השתמשו באי-שוויון רציונלי לפתרון.",
        solution_steps: [
            { verbal_explanation: "הצבת הדרישה לחיוביות מוחלטת של תוכן הלוגריתם.", math_expression: "\\dfrac{x + 1}{x - 1} > 0" },
            { verbal_explanation: "איתור המאפס במונה.", math_expression: "x = -1" },
            { verbal_explanation: "איתור המאפס במכנה.", math_expression: "x = 1" },
            { verbal_explanation: "מעבר לכתיב ריבועי מקביל לשם חקירת תחומי חיוביות.", math_expression: "(x + 1)(x - 1) > 0" },
            { verbal_explanation: "הסקת תחומי הקצוות בפרבולה.", math_expression: "x < -1 \\quad \\cup \\quad x > 1" }
        ],
        final_answer: "x < -1 או x > 1"
    },
    {
        topic: "calculus_exp_log_572",
        subTopic: "חקירה מלאה של הפונקציה הלוגריתמית ln(x)",
        question_text: "לפונקציה \\( f(x) = \\ln(1 + e^{x}) \\) יש אסימפטוטה משופעת ואסימפטוטה אופקית. מהי האסימפטוטה האופקית של הפונקציה?&rlm;",
        options: ["y = 0 בשאיפה למינוס אינסוף", "y = 1 בשאיפה לפלוס אינסוף", "y = x בשאיפה למינוס אינסוף", "אין אסימפטוטה אופקית"],
        correctAnswer: 0,
        hint: "כאשר המשתנה שואף למינוס אינסוף, האקספוננט שואף לאפס. בדקו מה נשאר בתוך הלוגריתם.",
        solution_steps: [
            { verbal_explanation: "בדיקת התנהגות הפונקציה כאשר המשתנה שואף לאינסוף שלילי.", math_expression: "\\lim_{x \\to -\\infty} e^{x} = 0" },
            { verbal_explanation: "הצבת ערך הגבול בתוך הפונקציה הלוגריתמית.", math_expression: "\\lim_{x \\to -\\infty} \\ln(1 + 0) = \\ln(1)" },
            { verbal_explanation: "חישוב הערך.", math_expression: "\\ln(1) = 0" },
            { verbal_explanation: "כתיבת משוואת האסימפטוטה האופקית.", math_expression: "y = 0" }
        ],
        final_answer: "y = 0 בשאיפה למינוס אינסוף"
    },
    {
        topic: "calculus_exp_log_572",
        subTopic: "חקירה מלאה של הפונקציה הלוגריתמית ln(x)",
        question_text: "מצאו את נקודת המקסימום המוחלט של הפונקציה \\( f(x) = \\dfrac{\\ln(x)}{x^{2}} \\).&rlm;",
        options: ["(√e, 0.5 : e)", "(e, 1 : e²)", "(1, 0)", "(e², 2 : e⁴)"],
        correctAnswer: 0,
        hint: "השתמשו בכלל המנה לגזירה, השוו מונה לאפס ומצאו את המשתנה.",
        solution_steps: [
            { verbal_explanation: "גזירת הפונקציה בעזרת כלל המנה המורחב.", math_expression: "f'(x) = \\dfrac{\\dfrac{1}{x} \\times x^{2} - \\ln(x) \\times 2x}{(x^{2})^{2}}" },
            { verbal_explanation: "צמצום איברים במונה הנגזרת.", math_expression: "f'(x) = \\dfrac{x - 2x\\ln(x)}{x^{4}}" },
            { verbal_explanation: "השוואת המונה לאפס והוצאת גורם משותף.", math_expression: "x(1 - 2\\ln(x)) = 0" },
            { verbal_explanation: "פסילת האפס מתחום ההגדרה ובחינת הסוגריים.", math_expression: "1 - 2\\ln(x) = 0 \\Rightarrow \\ln(x) = 0.5" },
            { verbal_explanation: "חילוץ המשתנה.", math_expression: "x = e^{0.5} = \\sqrt{e}" },
            { verbal_explanation: "הצבת הנקודה חזרה בפונקציה להשלמת הגובה.", math_expression: "f(e^{0.5}) = \\dfrac{\\ln(e^{0.5})}{(e^{0.5})^{2}} = \\dfrac{0.5}{e}" }
        ],
        final_answer: "(√e, 0.5 : e)"
    },

    // ==========================================
    // תת נושא 3: בעיות גדילה ודעיכה מורכבות כפונקציה מעריכית רציפה (10 שאלות)
    // ==========================================

    {
        topic: "calculus_exp_log_572",
        subTopic: "בעיות גדילה ודעיכה מורכבות כפונקציה מעריכית רציפה",
        question_text: "מספר חיידקים בתרבית גדל לפי הפונקציה \\( M(t) = M_{0}e^{kt} \\). ידוע כי לאחר 5 שעות, כמות החיידקים הכפילה את עצמה. מהו קבוע הגדילה k?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 120' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='100' x2='180' y2='100' stroke='#94a3b8' stroke-width='2'/><line x1='40' y1='10' x2='40' y2='110' stroke='#94a3b8' stroke-width='2'/><path d='M 40 90 Q 120 80 180 20' fill='none' stroke='#ef4444' stroke-width='2'/><circle cx='110' cy='63' r='4' fill='#3b82f6'/><text x='120' y='68' font-size='12' font-family='Arial'>t=5</text></svg></div>",
        options: ["k = ln(2) : 5", "k = 2ln(5)", "k = ln(5) : 2", "k = 5ln(2)"],
        correctAnswer: 0,
        hint: "הציבו את נתוני ההכפלה למשוואה. חלקו בכמות ההתחלתית והפעילו פונקציית ln לחילוץ המשתנה.",
        solution_steps: [
            { verbal_explanation: "הצבת נתוני ההכפלה בתוך משוואת הגדילה המעריכית.", math_expression: "2M_{0} = M_{0}e^{5k}" },
            { verbal_explanation: "צמצום הכמות ההתחלתית משני צידי המשוואה.", math_expression: "2 = e^{5k}" },
            { verbal_explanation: "הפעלת לוגריתם טבעי לבידוד מעריך החזקה.", math_expression: "\\ln(2) = 5k" },
            { verbal_explanation: "חלוקה בחמש לחילוץ קבוע הגידול השעתי.", math_expression: "k = \\dfrac{\\ln(2)}{5}" }
        ],
        final_answer: "k = ln(2) : 5"
    },
    {
        topic: "calculus_exp_log_572",
        subTopic: "בעיות גדילה ודעיכה מורכבות כפונקציה מעריכית רציפה",
        question_text: "חומר רדיואקטיבי דועך כך שכמותו פוחתת ב-20% מדי 3 שנים. מהו זמן מחצית החיים של החומר? (הביעו בעזרת לוגריתמים).&rlm;",
        options: ["t = -3ln(2) : ln(0.8)", "t = -ln(2) : 3ln(0.8)", "t = 3ln(0.5) : ln(0.2)", "t = -ln(0.5) : 3ln(0.8)"],
        correctAnswer: 0,
        hint: "מצאו את קבוע הדעיכה מהנתון הראשון, והציבו אותו במשוואה למציאת זמן מחצית החיים.",
        solution_steps: [
            { verbal_explanation: "בניית משוואה למציאת קבוע הדעיכה על סמך הירידה ל-80%.", math_expression: "0.8M_{0} = M_{0}e^{3k} \\Rightarrow e^{3k} = 0.8" },
            { verbal_explanation: "חילוץ קבוע הדעיכה.", math_expression: "3k = \\ln(0.8) \\Rightarrow k = \\dfrac{\\ln(0.8)}{3}" },
            { verbal_explanation: "הצבת הקבוע במשוואה חדשה המחפשת את זמן מחצית החיים.", math_expression: "0.5M_{0} = M_{0}e^{kt}" },
            { verbal_explanation: "צמצום והפעלת לוגריתם טבעי.", math_expression: "\\ln(0.5) = k \\times t" },
            { verbal_explanation: "המרת לוגריתם של חצי למינוס לוגריתם של שתיים והצבת הקבוע.", math_expression: "-\\ln(2) = \\dfrac{\\ln(0.8)}{3} \\times t" },
            { verbal_explanation: "בידוד המשתנה המבוקש.", math_expression: "t = \\dfrac{-3\\ln(2)}{\\ln(0.8)}" }
        ],
        final_answer: "t = -3ln(2) : ln(0.8)"
    },
    {
        topic: "calculus_exp_log_572",
        subTopic: "בעיות גדילה ודעיכה מורכבות כפונקציה מעריכית רציפה",
        question_text: "קיימות שתי תרביות חיידקים. תרבית א' גדלה לפי \\( A(t) = 100e^{0.2t} \\). תרבית ב' גדלה לפי \\( B(t) = 200e^{0.1t} \\). מצאו את הזמן t שבו שתי התרביות יהיו שוות בגודלן.&rlm;",
        options: ["t = 10ln(2)", "t = 5ln(2)", "t = 2ln(10)", "t = ln(2) : 10"],
        correctAnswer: 0,
        hint: "השוו את הפונקציות. חלקו את המספרים לחוד ואת האקספוננטים לחוד. חיסרו את המעריכים בחלוקה.",
        solution_steps: [
            { verbal_explanation: "השוואת שתי הפונקציות המעריכיות מתוך הנתונים.", math_expression: "100e^{0.2t} = 200e^{0.1t}" },
            { verbal_explanation: "חלוקת שני האגפים במאה לצמצום מקדמים.", math_expression: "e^{0.2t} = 2e^{0.1t}" },
            { verbal_explanation: "חלוקת המשוואה בביטוי המעריכי הימני וחיסור מעריכים.", math_expression: "\\dfrac{e^{0.2t}}{e^{0.1t}} = 2 \\Rightarrow e^{0.1t} = 2" },
            { verbal_explanation: "הפעלת לוגריתם טבעי.", math_expression: "0.1t = \\ln(2)" },
            { verbal_explanation: "הכפלה בעשר לחילוץ הזמן הנקי.", math_expression: "t = 10\\ln(2)" }
        ],
        final_answer: "t = 10ln(2)"
    },
    {
        topic: "calculus_exp_log_572",
        subTopic: "בעיות גדילה ודעיכה מורכבות כפונקציה מעריכית רציפה",
        question_text: "מהירות הגידול של אוכלוסיית דגים מבוטאת על ידי הנגזרת של פונקציית הגודל. אם \\( M(t) = 50e^{0.1t} \\), מהו קצב הגידול הרגעי בזמן \\( t = 10 \\)?&rlm;",
        options: ["5e", "10e", "5", "50e"],
        correctAnswer: 0,
        hint: "גזרו את הפונקציה והציבו את ערך הזמן בנגזרת.",
        solution_steps: [
            { verbal_explanation: "גזירת פונקציית הגודל לשם מציאת קצב השינוי הרגעי המיוצג בה.", math_expression: "M'(t) = 50 \\times 0.1 \\times e^{0.1t} = 5e^{0.1t}" },
            { verbal_explanation: "הצבת נקודת הזמן הספציפית בנגזרת שחשבנו.", math_expression: "M'(10) = 5e^{0.1 \\times 10}" },
            { verbal_explanation: "חישוב המעריך המספרי בחזקה.", math_expression: "M'(10) = 5e^{1}" },
            { verbal_explanation: "הצגת קצב הגידול הסופי.", math_expression: "M'(10) = 5e" }
        ],
        final_answer: "5e"
    },
    {
        topic: "calculus_exp_log_572",
        subTopic: "בעיות גדילה ודעיכה מורכבות כפונקציה מעריכית רציפה",
        question_text: "ריכוז תרופה בדם מתנהג לפי הפונקציה \\( C(t) = t e^{-0.5t} \\). באיזה שעה הריכוז מגיע לשיאו המקסימלי?&rlm;",
        options: ["t = 2", "t = 1", "t = 0.5", "t = 4"],
        correctAnswer: 0,
        hint: "גזרו את הפונקציה לפי כלל המכפלה, השוו לאפס, ומצאו את זמן הקיצון.",
        solution_steps: [
            { verbal_explanation: "גזירת הפונקציה בעזרת כלל המכפלה המשלב פולינום ואקספוננט.", math_expression: "C'(t) = 1 \\times e^{-0.5t} + t(-0.5e^{-0.5t})" },
            { verbal_explanation: "הוצאת הפונקציה המעריכית כגורם משותף מן המערכת.", math_expression: "C'(t) = e^{-0.5t}(1 - 0.5t)" },
            { verbal_explanation: "השוואת הנגזרת לאפס ופסילת החלק המעריכי.", math_expression: "1 - 0.5t = 0" },
            { verbal_explanation: "העברת אגפים ובידוד המשתנה.", math_expression: "0.5t = 1" },
            { verbal_explanation: "חילוץ הזמן.", math_expression: "t = 2" }
        ],
        final_answer: "t = 2"
    },
    {
        topic: "calculus_exp_log_572",
        subTopic: "בעיות גדילה ודעיכה מורכבות כפונקציה מעריכית רציפה",
        question_text: "טמפרטורה של גוף מתקרר מבוטאת על ידי המודל: \\( T(t) = 25 + 75e^{-kt} \\). למה תשאף טמפרטורת הגוף לאחר זמן רב מאוד (כאשר t שואף לאינסוף)?&rlm;",
        options: ["25", "100", "75", "0"],
        correctAnswer: 0,
        hint: "כאשר הזמן שואף לאינסוף, המעריך השלילי שואף לאפס. הציבו זאת במשוואה.",
        solution_steps: [
            { verbal_explanation: "בדיקת התנהגות הפונקציה בגבול האינסוף למציאת טמפרטורת הסביבה.", math_expression: "\\lim_{t \\to \\infty} e^{-kt} = 0" },
            { verbal_explanation: "הצבת גבול האפס במשוואת המודל.", math_expression: "T(\\infty) = 25 + 75(0)" },
            { verbal_explanation: "סיום החישוב.", math_expression: "T = 25" }
        ],
        final_answer: "25"
    },
    {
        topic: "calculus_exp_log_572",
        subTopic: "בעיות גדילה ודעיכה מורכבות כפונקציה מעריכית רציפה",
        question_text: "כמות חומר משולשת את עצמה בתוך 10 שנים בתהליך של גדילה רציפה. פי כמה היא תגדל לאחר 5 שנים בלבד?&rlm;",
        options: ["√3", "1.5", "1.25", "2"],
        correctAnswer: 0,
        hint: "מקדם הגידול ל-10 שנים הוא 3. המקדם ל-5 שנים הוא חזקת החצי של המקדם השלם (כלומר שורש ריבועי).",
        solution_steps: [
            { verbal_explanation: "הגדרת מקדם הגדילה המצטבר לעשור שלם.", math_expression: "q^{10} = 3" },
            { verbal_explanation: "הגדרת היחס הנדרש המבוסס על פרק זמן של חצי עשור.", math_expression: "q^{5} = (q^{10})^{0.5}" },
            { verbal_explanation: "הצבת הערך הידוע לתוך החזקה.", math_expression: "q^{5} = 3^{0.5} = \\sqrt{3}" }
        ],
        final_answer: "√3"
    },
    {
        topic: "calculus_exp_log_572",
        subTopic: "בעיות גדילה ודעיכה מורכבות כפונקציה מעריכית רציפה",
        question_text: "נתונה פונקציית דעיכה \\( M(t) = A e^{kt} \\). ידוע כי \\( M(2) = 40 \\) ו- \\( M(4) = 10 \\). מהו הערך של הכמות ההתחלתית A?&rlm;",
        options: ["160", "80", "200", "120"],
        correctAnswer: 0,
        hint: "חילקו את שתי המשוואות זו בזו לחילוץ המעריך, ואז הציבו חזרה למציאת המקדם ההתחלתי.",
        solution_steps: [
            { verbal_explanation: "העמדת שתי המשוואות הנתונות כיחס לחלוקה.", math_expression: "\\dfrac{M(4)}{M(2)} = \\dfrac{Ae^{4k}}{Ae^{2k}} = \\dfrac{10}{40}" },
            { verbal_explanation: "ביצוע החלוקה וחיסור מעריכים.", math_expression: "e^{2k} = 0.25" },
            { verbal_explanation: "הצבת הביטוי שנמצא אל המשוואה הראשונה למציאת המקדם הנעלם.", math_expression: "M(2) = A \\times e^{2k} = 40" },
            { verbal_explanation: "הצבה של הערך העשרוני.", math_expression: "A \\times 0.25 = 40" },
            { verbal_explanation: "חלוקה להשגת הכמות ההתחלתית.", math_expression: "A = \\dfrac{40}{0.25} = 160" }
        ],
        final_answer: "160"
    },
    {
        topic: "calculus_exp_log_572",
        subTopic: "בעיות גדילה ודעיכה מורכבות כפונקציה מעריכית רציפה",
        question_text: "קצב הגדילה הלוגיסטית של אוכלוסייה מתואר על ידי הפונקציה \\( M(t) = \\dfrac{100}{1 + 9e^{-t}} \\). באיזה זמן (t) קצב הגידול של האוכלוסייה יהיה המקסימלי (נקודת הפיתול)?&rlm;",
        options: ["t = ln(9)", "t = ln(100)", "t = 1", "t = ln(3)"],
        correctAnswer: 0,
        hint: "הנגזרת השנייה מתאפסת בפונקציה זו כאשר המעריך מתאזן במכנה לכדי ערך מוחלט.",
        solution_steps: [
            { verbal_explanation: "הגדרת הפונקציה הלוגיסטית.", math_expression: "M(t) = 100(1 + 9e^{-t})^{-1}" },
            { verbal_explanation: "נקודת הפיתול מתרחשת כאשר הגורם המעריכי במכנה משתווה לאחת.", math_expression: "9e^{-t} = 1" },
            { verbal_explanation: "בידוד הביטוי המעריכי.", math_expression: "e^{-t} = \\dfrac{1}{9}" },
            { verbal_explanation: "הפעלת לוגריתם טבעי לחילוץ הזמן.", math_expression: "-t = \\ln(\\dfrac{1}{9})" },
            { verbal_explanation: "המרת הלוגריתם השברי ללוגריתם שלילי וביטול המינוסים.", math_expression: "-t = -\\ln(9) \\Rightarrow t = \\ln(9)" }
        ],
        final_answer: "t = ln(9)"
    },
    {
        topic: "calculus_exp_log_572",
        subTopic: "בעיות גדילה ודעיכה מורכבות כפונקציה מעריכית רציפה",
        question_text: "פונקציית ריכוז חומר היא \\( C(t) = 10e^{-t} - 10e^{-2t} \\). באיזה זמן הריכוז מגיע לערכו המקסימלי?&rlm;",
        options: ["t = ln(2)", "t = 1", "t = ln(10)", "t = 2"],
        correctAnswer: 0,
        hint: "גזרו את הפונקציה והשוו לאפס. העבירו אגפים, חלקו מעריכים ופתרו.",
        solution_steps: [
            { verbal_explanation: "גזירת הפונקציה בעזרת הנגזרות הפנימיות של המעריכים.", math_expression: "C'(t) = -10e^{-t} - 10(-2)e^{-2t} = -10e^{-t} + 20e^{-2t}" },
            { verbal_explanation: "השוואת הנגזרת לאפס והעברת אגפים.", math_expression: "10e^{-t} = 20e^{-2t}" },
            { verbal_explanation: "חלוקת שני האגפים בעשר.", math_expression: "e^{-t} = 2e^{-2t}" },
            { verbal_explanation: "חלוקת המשוואה בביטוי המעריכי הימני.", math_expression: "\\dfrac{e^{-t}}{e^{-2t}} = 2 \\Rightarrow e^{t} = 2" },
            { verbal_explanation: "הפעלת לוגריתם טבעי.", math_expression: "t = \\ln(2)" }
        ],
        final_answer: "t = ln(2)"
    },

    // ==========================================
    // תת נושא 4: שימוש בנגזרת שנייה לקביעת קעירות וקמירות (10 שאלות)
    // ==========================================

    {
        topic: "calculus_exp_log_572",
        subTopic: "שימוש בנגזרת שנייה לקביעת קעירות וקמירות",
        question_text: "מהו תחום הקעירות כלפי מעלה (קעירות חיובית) של הפונקציה \\( f(x) = x e^{x} \\)?&rlm;",
        options: ["x > -2", "x < -2", "x > -1", "x > 0"],
        correctAnswer: 0,
        hint: "גזרו פעמיים. קעירות כלפי מעלה מתקבלת כאשר הנגזרת השנייה גדולה מ-0.",
        solution_steps: [
            { verbal_explanation: "גזירה ראשונה לפי מכפלה.", math_expression: "f'(x) = 1e^{x} + xe^{x} = e^{x}(x + 1)" },
            { verbal_explanation: "גזירה שנייה לפי מכפלה.", math_expression: "f''(x) = e^{x}(x + 1) + e^{x}(1) = e^{x}(x + 2)" },
            { verbal_explanation: "העמדת אי השוויון לקביעת קעירות חיובית.", math_expression: "e^{x}(x + 2) > 0" },
            { verbal_explanation: "הפונקציה המעריכית חיובית תמיד ולכן אינה משפיעה על הסימן.", math_expression: "x + 2 > 0" },
            { verbal_explanation: "חילוץ התחום.", math_expression: "x > -2" }
        ],
        final_answer: "x > -2"
    },
    {
        topic: "calculus_exp_log_572",
        subTopic: "שימוש בנגזרת שנייה לקביעת קעירות וקמירות",
        question_text: "מצאו את שיעורי ה-x של נקודות הפיתול בפונקציה \\( f(x) = \\ln(x^{2} + 1) \\).&rlm;",
        options: ["x = 1, x = -1", "x = 0", "אין נקודות פיתול", "x = 0.5"],
        correctAnswer: 0,
        hint: "גזרו פעמיים. השוו את מונה הנגזרת השנייה לאפס וחלצו את השורשים.",
        solution_steps: [
            { verbal_explanation: "גזירת הפונקציה הלוגריתמית.", math_expression: "f'(x) = \\dfrac{2x}{x^{2} + 1}" },
            { verbal_explanation: "הפעלת כלל המנה לגזירה שנייה.", math_expression: "f''(x) = \\dfrac{2(x^{2} + 1) - 2x(2x)}{(x^{2} + 1)^{2}}" },
            { verbal_explanation: "פיתוח מונה הנגזרת השנייה.", math_expression: "f''(x) = \\dfrac{2 - 2x^{2}}{(x^{2} + 1)^{2}}" },
            { verbal_explanation: "השוואת המונה לאפס לאיתור נקודות פיתול.", math_expression: "2 - 2x^{2} = 0 \\Rightarrow 2x^{2} = 2 \\Rightarrow x^{2} = 1" },
            { verbal_explanation: "חילוץ השורשים.", math_expression: "x = \\pm 1" },
            { verbal_explanation: "וידוא כי מדובר בנקודות פיתול (החלפת סימן בנגזרת השנייה סביבן).", math_expression: "\\checkmark" }
        ],
        final_answer: "x = 1, x = -1"
    },
    {
        topic: "calculus_exp_log_572",
        subTopic: "שימוש בנגזרת שנייה לקביעת קעירות וקמירות",
        question_text: "מהו התחום בו הפונקציה \\( f(x) = e^{-x^{2}} \\) קעורה כלפי מטה (קעירות שלילית)?&rlm;",
        options: ["-0.707 < x < 0.707", "x > 0.707", "x < -0.707 או x > 0.707", "כל x"],
        correctAnswer: 0,
        hint: "כדי שתהיה קעורה כלפי מטה, הנגזרת השנייה צריכה להיות שלילית.",
        solution_steps: [
            { verbal_explanation: "גזירה ראשונה.", math_expression: "f'(x) = -2xe^{-x^{2}}" },
            { verbal_explanation: "גזירה שנייה המבוססת על מכפלה.", math_expression: "f''(x) = -2e^{-x^{2}} + (-2x)(-2x)e^{-x^{2}} = e^{-x^{2}}(4x^{2} - 2)" },
            { verbal_explanation: "הצבת אי השוויון הדורש קעירות שלילית.", math_expression: "e^{-x^{2}}(4x^{2} - 2) < 0" },
            { verbal_explanation: "האקספוננט חיובי, נחקור את הפרבולה שבסוגריים.", math_expression: "4x^{2} - 2 < 0 \\Rightarrow x^{2} < 0.5" },
            { verbal_explanation: "קביעת התחום שבין שורשי הפרבולה המחייכת.", math_expression: "-\\sqrt{0.5} < x < \\sqrt{0.5}" },
            { verbal_explanation: "חישוב מקורב של השורשים לשם התאמה לתשובות.", math_expression: "-0.707 < x < 0.707" }
        ],
        final_answer: "-0.707 < x < 0.707"
    },
    {
        topic: "calculus_exp_log_572",
        subTopic: "שימוש בנגזרת שנייה לקביעת קעירות וקמירות",
        question_text: "קבעו האם לפונקציה \\( f(x) = x\\ln(x) - x \\) יש נקודות פיתול בתחום ההגדרה שלה \\( x > 0 \\).&rlm;",
        options: ["אין נקודות פיתול (תמיד קעורה כלפי מעלה)", "יש פיתול ב-x=1", "יש פיתול ב-x=e", "תמיד קעורה כלפי מטה"],
        correctAnswer: 0,
        hint: "גזרו פעמיים ובידקו את התנהגות הנגזרת השנייה בתחום ההגדרה החיובי.",
        solution_steps: [
            { verbal_explanation: "גזירה ראשונה של הביטוי.", math_expression: "f'(x) = 1 \\times \\ln(x) + x \\times \\dfrac{1}{x} - 1 = \\ln(x) + 1 - 1 = \\ln(x)" },
            { verbal_explanation: "גזירה שנייה.", math_expression: "f''(x) = \\dfrac{1}{x}" },
            { verbal_explanation: "השוואה לאפס כדי לאתר פיתול אפשרי.", math_expression: "\\dfrac{1}{x} = 0 \\Rightarrow \\emptyset" },
            { verbal_explanation: "בדיקת סימן הנגזרת השנייה בתחום ההגדרה.", math_expression: "x > 0 \\Rightarrow \\dfrac{1}{x} > 0" },
            { verbal_explanation: "הנגזרת השנייה חיובית תמיד ולכן הפונקציה קעורה רק כלפי מעלה.", math_expression: "Concave \\ Up" }
        ],
        final_answer: "אין נקודות פיתול (תמיד קעורה כלפי מעלה)"
    },
    {
        topic: "calculus_exp_log_572",
        subTopic: "שימוש בנגזרת שנייה לקביעת קעירות וקמירות",
        question_text: "מצאו את שיעורי ה-x של נקודות הפיתול של הפונקציה \\( f(x) = x^{2}e^{-x} \\).&rlm;",
        options: ["x = 2 ± √2", "x = 0, x = 2", "x = 2", "אין נקודות פיתול"],
        correctAnswer: 0,
        hint: "גזרו פעמיים. השוו את הפולינום שמתקבל לאפס ופתרו בעזרת נוסחת השורשים.",
        solution_steps: [
            { verbal_explanation: "גזירה ראשונה.", math_expression: "f'(x) = 2xe^{-x} - x^{2}e^{-x} = e^{-x}(2x - x^{2})" },
            { verbal_explanation: "גזירה שנייה לפי מכפלה.", math_expression: "f''(x) = -e^{-x}(2x - x^{2}) + e^{-x}(2 - 2x)" },
            { verbal_explanation: "הוצאת גורם משותף.", math_expression: "f''(x) = e^{-x}(-2x + x^{2} + 2 - 2x) = e^{-x}(x^{2} - 4x + 2)" },
            { verbal_explanation: "השוואת הפולינום הפנימי לאפס.", math_expression: "x^{2} - 4x + 2 = 0" },
            { verbal_explanation: "שימוש בנוסחת השורשים המרובעים.", math_expression: "x_{1,2} = \\dfrac{4 \\pm \\sqrt{16 - 8}}{2} = \\dfrac{4 \\pm \\sqrt{8}}{2}" },
            { verbal_explanation: "פישוט השורש המספרי לתוצאה הסופית.", math_expression: "x_{1,2} = \\dfrac{4 \\pm 2\\sqrt{2}}{2} = 2 \\pm \\sqrt{2}" }
        ],
        final_answer: "x = 2 ± √2"
    },
    {
        topic: "calculus_exp_log_572",
        subTopic: "שימוש בנגזרת שנייה לקביעת קעירות וקמירות",
        question_text: "קבעו מתי הפונקציה \\( f(x) = \\dfrac{\\ln(x)}{x} \\) מחליפה את סוג הקעירות שלה (נקודת פיתול).&rlm;",
        options: ["x = e^(1.5)", "x = e", "x = e²", "x = √e"],
        correctAnswer: 0,
        hint: "גזרו פעמיים. השוו מונה ל-0 וחלצו את הנעלם מתוך הלוגריתם.",
        solution_steps: [
            { verbal_explanation: "ביצוע גזירת מנה ראשונה.", math_expression: "f'(x) = \\dfrac{\\dfrac{1}{x}(x) - \\ln(x)(1)}{x^{2}} = \\dfrac{1 - \\ln(x)}{x^{2}}" },
            { verbal_explanation: "ביצוע גזירת מנה שנייה.", math_expression: "f''(x) = \\dfrac{-\\dfrac{1}{x}(x^{2}) - (1 - \\ln(x))(2x)}{x^{4}}" },
            { verbal_explanation: "פישוט מונה הנגזרת השנייה.", math_expression: "Num = -x - 2x + 2x\\ln(x) = x(2\\ln(x) - 3)" },
            { verbal_explanation: "השוואת המונה לאפס (האיקס החיצוני נפסל).", math_expression: "2\\ln(x) - 3 = 0 \\Rightarrow 2\\ln(x) = 3 \\Rightarrow \\ln(x) = 1.5" },
            { verbal_explanation: "חילוץ שיעור הפיתול מתוך הפונקציה.", math_expression: "x = e^{1.5}" }
        ],
        final_answer: "x = e^(1.5)"
    },
    {
        topic: "calculus_exp_log_572",
        subTopic: "שימוש בנגזרת שנייה לקביעת קעירות וקמירות",
        question_text: "קבעו את סוג הקעירות של פונקציית הקוסינוס ההיפרבולי \\( f(x) = e^{x} + e^{-x} \\) לכל x.&rlm;",
        options: ["תמיד קעורה כלפי מעלה (מחייכת)", "תמיד קעורה כלפי מטה (בוכה)", "מחליפה קעירות ב- x=0", "אין לה קעירות מוגדרת"],
        correctAnswer: 0,
        hint: "גזרו פעמיים. הנגזרת השנייה שווה לפונקציה המקורית. בחנו את החיוביות של הפונקציה.",
        solution_steps: [
            { verbal_explanation: "ביצוע גזירה ראשונה.", math_expression: "f'(x) = e^{x} - e^{-x}" },
            { verbal_explanation: "ביצוע גזירה שנייה.", math_expression: "f''(x) = e^{x} - (-e^{-x}) = e^{x} + e^{-x}" },
            { verbal_explanation: "חקירת סימן הנגזרת השנייה.", math_expression: "e^{x} > 0 \\quad , \\quad e^{-x} > 0 \\Rightarrow f''(x) > 0" },
            { verbal_explanation: "נגזרת שנייה חיובית לכל איקס מעידה על קעירות מוחלטת כלפי מעלה.", math_expression: "Concave \\ Up" }
        ],
        final_answer: "תמיד קעורה כלפי מעלה (מחייכת)"
    },
    {
        topic: "calculus_exp_log_572",
        subTopic: "שימוש בנגזרת שנייה לקביעת קעירות וקמירות",
        question_text: "קבעו את סוג הקעירות של הפונקציה \\( f(x) = x - \\ln(x) \\) בתחום הגדרתה \\( x > 0 \\).&rlm;",
        options: ["תמיד קעורה כלפי מעלה (מחייכת)", "תמיד קעורה כלפי מטה (בוכה)", "יש פיתול ב-x=1", "יש פיתול ב-x=e"],
        correctAnswer: 0,
        hint: "הנגזרת השנייה היא 1 חלקי איקס בריבוע. חקרו את סימנה בתחום החיובי.",
        solution_steps: [
            { verbal_explanation: "גזירה ראשונה של הביטוי.", math_expression: "f'(x) = 1 - x^{-1}" },
            { verbal_explanation: "גזירה שנייה באמצעות כלל החזקה המהירה.", math_expression: "f''(x) = 0 - (-1)x^{-2} = \\dfrac{1}{x^{2}}" },
            { verbal_explanation: "בדיקת סימן הנגזרת השנייה בתחום המבוקש.", math_expression: "x^{2} > 0 \\Rightarrow f''(x) > 0" },
            { verbal_explanation: "נגזרת חיובית מצביעה על קעירות המופנית מעלה בלבד.", math_expression: "Concave \\ Up" }
        ],
        final_answer: "תמיד קעורה כלפי מעלה (מחייכת)"
    },
    {
        topic: "calculus_exp_log_572",
        subTopic: "שימוש בנגזרת שנייה לקביעת קעירות וקמירות",
        question_text: "מצאו את שיעור ה-x של נקודת הפיתול של הפונקציה \\( f(x) = x^{3}\\ln(x) \\).&rlm;",
        options: ["x = e^(-5 : 6)", "x = e^(-1)", "x = 1", "x = e^(-1.5)"],
        correctAnswer: 0,
        hint: "גזרו פעמיים לפי כלל מכפלה והשוו לאפס.",
        solution_steps: [
            { verbal_explanation: "גזירה ראשונה.", math_expression: "f'(x) = 3x^{2}\\ln(x) + x^{3} \\times \\dfrac{1}{x} = 3x^{2}\\ln(x) + x^{2}" },
            { verbal_explanation: "גזירה שנייה הכוללת שוב מכפלה.", math_expression: "f''(x) = (6x\\ln(x) + 3x^{2} \\times \\dfrac{1}{x}) + 2x = 6x\\ln(x) + 3x + 2x" },
            { verbal_explanation: "כינוס הנגזרת השנייה לביטוי אחד.", math_expression: "f''(x) = 6x\\ln(x) + 5x = x(6\\ln(x) + 5)" },
            { verbal_explanation: "השוואה לאפס. האיקס החיצוני נפסל מחמת תחום הגדרה.", math_expression: "6\\ln(x) + 5 = 0 \\Rightarrow 6\\ln(x) = -5" },
            { verbal_explanation: "בידוד הלוגריתם וחילוץ המשתנה המבוקש.", math_expression: "\\ln(x) = -\\dfrac{5}{6} \\Rightarrow x = e^{-5/6}" }
        ],
        final_answer: "x = e^(-5 : 6)"
    },
    {
        topic: "calculus_exp_log_572",
        subTopic: "שימוש בנגזרת שנייה לקביעת קעירות וקמירות",
        question_text: "עבור אילו ערכי x הפונקציה \\( f(x) = \\dfrac{e^{x}}{x} \\) קעורה כלפי מעלה?&rlm;",
        options: ["x > 0 בלבד", "כל x (למעט 0)", "x > 1", "x < 0"],
        correctAnswer: 0,
        hint: "הנגזרת השנייה כוללת פולינום חיובי תמיד במונה ומכנה ממעלה אי זוגית (שלישית). חקרו את סימן השבר.",
        solution_steps: [
            { verbal_explanation: "גזירת מנה ראשונה.", math_expression: "f'(x) = \\dfrac{e^{x}(x) - e^{x}(1)}{x^{2}} = \\dfrac{e^{x}(x - 1)}{x^{2}}" },
            { verbal_explanation: "גזירת מנה שנייה.", math_expression: "f''(x) = \\dfrac{(e^{x}(x - 1) + e^{x})(x^{2}) - e^{x}(x - 1)(2x)}{x^{4}}" },
            { verbal_explanation: "פישוט מונה הנגזרת השנייה באמצעות הוצאת גורם משותף.", math_expression: "Num = xe^{x}[ (x - 1 + 1)x - 2(x - 1) ] = xe^{x}[ x^{2} - 2x + 2 ]" },
            { verbal_explanation: "צמצום איקס מול המכנה.", math_expression: "f''(x) = \\dfrac{e^{x}(x^{2} - 2x + 2)}{x^{3}}" },
            { verbal_explanation: "בדיקת חיוביות של המונה. הוא חיובי תמיד.", math_expression: "x^{2} - 2x + 2 > 0 \\quad , \\quad e^{x} > 0" },
            { verbal_explanation: "סימן הקעירות נקבע בלעדית על ידי המכנה.", math_expression: "f''(x) > 0 \\Leftrightarrow x^{3} > 0 \\Rightarrow x > 0" }
        ],
        final_answer: "x > 0 בלבד"
    }
];