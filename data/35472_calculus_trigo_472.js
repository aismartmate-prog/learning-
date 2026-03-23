const questionsDB = [
    // ==========================================
    // תת נושא 1: מעבר ממעלות לרדיאנים ולהפך (10 שאלות)
    // ==========================================

    {
        topic: "trigonometry_472",
        subTopic: "מעבר ממעלות לרדיאנים ולהפך",
        question_text: "המירו את הזווית הנתונה ממעלות לרדיאנים: \\( 60^{\\circ} \\).&rlm;",
        options: ["π : 3", "0.5π", "π : 6", "0.25π"],
        correctAnswer: 0,
        hint: "כדי להמיר ממעלות לרדיאנים, יש להכפיל את הזווית בפאי ולחלק ב-180.",
        solution_steps: [
            { verbal_explanation: "כתיבת נוסחת ההמרה ממעלות לרדיאנים.", math_expression: "R = D \\times \\dfrac{\\pi}{180}" },
            { verbal_explanation: "הצבת הזווית הנתונה במעלות לתוך הנוסחה.", math_expression: "R = 60 \\times \\dfrac{\\pi}{180}" },
            { verbal_explanation: "העלאת המספר השלם למונה של השבר.", math_expression: "R = \\dfrac{60 \\times \\pi}{180}" },
            { verbal_explanation: "צמצום המונה והמכנה בעשר.", math_expression: "R = \\dfrac{6 \\times \\pi}{18}" },
            { verbal_explanation: "צמצום נוסף של המונה והמכנה בשש.", math_expression: "R = \\dfrac{1 \\times \\pi}{3}" },
            { verbal_explanation: "קבלת התוצאה הסופית ברדיאנים.", math_expression: "R = \\dfrac{\\pi}{3}" }
        ],
        final_answer: "π : 3"
    },
    {
        topic: "trigonometry_472",
        subTopic: "מעבר ממעלות לרדיאנים ולהפך",
        question_text: "המירו את הזווית הנתונה ממעלות לרדיאנים: \\( 135^{\\circ} \\).&rlm;",
        options: ["0.75π", "0.5π", "1.25π", "π : 3"],
        correctAnswer: 0,
        hint: "הכפילו את הזווית בפאי וחלקו ב-180. צמצמו את השבר המתקבל.",
        solution_steps: [
            { verbal_explanation: "שימוש בנוסחת ההמרה הבסיסית למעבר מידות זווית.", math_expression: "R = 135 \\times \\dfrac{\\pi}{180}" },
            { verbal_explanation: "כתיבת הביטוי כשבר אחד שלם.", math_expression: "R = \\dfrac{135 \\times \\pi}{180}" },
            { verbal_explanation: "חלוקת המונה והמכנה בחמש לשם צמצום ראשוני.", math_expression: "R = \\dfrac{27 \\times \\pi}{36}" },
            { verbal_explanation: "צמצום נוסף בחלוקה לתשע.", math_expression: "R = \\dfrac{3 \\times \\pi}{4}" },
            { verbal_explanation: "המרת השבר למקדם עשרוני המוכפל בפאי להתאמה לחלופות.", math_expression: "R = 0.75 \\times \\pi" },
            { verbal_explanation: "סיום הפתרון.", math_expression: "0.75\\pi" }
        ],
        final_answer: "0.75π"
    },
    {
        topic: "trigonometry_472",
        subTopic: "מעבר ממעלות לרדיאנים ולהפך",
        question_text: "המירו את הזווית הנתונה ממעלות לרדיאנים: \\( 330^{\\circ} \\).&rlm;",
        options: ["11π : 6", "5π : 3", "7π : 4", "1.5π"],
        correctAnswer: 0,
        hint: "זווית זו קרובה למעגל שלם (360 מעלות שהם שני פאי). בצעו המרה רגילה של חלוקה ב-180.",
        solution_steps: [
            { verbal_explanation: "הצבת הזווית הנתונה בנוסחת ההמרה הרשמית.", math_expression: "R = 330 \\times \\dfrac{\\pi}{180}" },
            { verbal_explanation: "איחוד המכפלה אל קו שבר יחיד.", math_expression: "R = \\dfrac{330 \\times \\pi}{180}" },
            { verbal_explanation: "צמצום אפסים (חלוקה בעשר).", math_expression: "R = \\dfrac{33 \\times \\pi}{18}" },
            { verbal_explanation: "חלוקת המונה והמכנה בשלוש להשגת השבר המצומצם ביותר.", math_expression: "R = \\dfrac{11 \\times \\pi}{6}" },
            { verbal_explanation: "כתיבת התוצאה הסופית ברדיאנים.", math_expression: "R = \\dfrac{11\\pi}{6}" },
            { verbal_explanation: "אימות התאמה לחלופות הנתונות בתרגיל.", math_expression: "11\\pi : 6" }
        ],
        final_answer: "11π : 6"
    },
    {
        topic: "trigonometry_472",
        subTopic: "מעבר ממעלות לרדיאנים ולהפך",
        question_text: "המירו את הזווית הנתונה מרדיאנים למעלות: \\( 0.5\\pi \\).&rlm;",
        options: ["90", "180", "45", "60"],
        correctAnswer: 0,
        hint: "כדי להמיר מרדיאנים למעלות, מציבים במקום פאי את הערך 180 מעלות, או מכפילים ב-180 חלקי פאי.",
        solution_steps: [
            { verbal_explanation: "כתיבת נוסחת ההמרה ההפוכה (מרדיאנים למעלות).", math_expression: "D = R \\times \\dfrac{180}{\\pi}" },
            { verbal_explanation: "הצבת הזווית הנתונה ברדיאנים אל תוך הנוסחה.", math_expression: "D = 0.5\\pi \\times \\dfrac{180}{\\pi}" },
            { verbal_explanation: "צמצום הפאי מהמונה ומהמכנה.", math_expression: "D = 0.5 \\times 180" },
            { verbal_explanation: "ביצוע פעולת הכפל בעשרוני לקבלת הזווית.", math_expression: "D = 90" },
            { verbal_explanation: "קביעת יחידת המידה כמעלות.", math_expression: "90^{\\circ}" },
            { verbal_explanation: "סיום.", math_expression: "90" }
        ],
        final_answer: "90"
    },
    {
        topic: "trigonometry_472",
        subTopic: "מעבר ממעלות לרדיאנים ולהפך",
        question_text: "המירו את הזווית הנתונה מרדיאנים למעלות: \\( \\dfrac{5\\pi}{6} \\).&rlm;",
        options: ["150", "120", "210", "135"],
        correctAnswer: 0,
        hint: "המירו את פאי ל-180 מעלות ובצעו את פעולת השבר: 5 כפול 180 לחלק ל-6.",
        solution_steps: [
            { verbal_explanation: "הבנת הקשר הישיר בין פאי למעלות במעגל טריגונומטרי.", math_expression: "\\pi = 180" },
            { verbal_explanation: "החלפת הסמל בערך המספרי של המעלות בתוך הביטוי.", math_expression: "D = \\dfrac{5 \\times 180}{6}" },
            { verbal_explanation: "ביצוע חלוקה מוקדמת של המספר השלם במכנה להקלת החישוב.", math_expression: "D = 5 \\times 30" },
            { verbal_explanation: "מכפלת הגורמים.", math_expression: "D = 150" },
            { verbal_explanation: "רישום הזווית במעלות.", math_expression: "150^{\\circ}" },
            { verbal_explanation: "סגירת הפתרון.", math_expression: "150" }
        ],
        final_answer: "150"
    },
    {
        topic: "trigonometry_472",
        subTopic: "מעבר ממעלות לרדיאנים ולהפך",
        question_text: "המירו את הזווית הנתונה מרדיאנים למעלות: \\( \\dfrac{7\\pi}{4} \\).&rlm;",
        options: ["315", "225", "300", "270"],
        correctAnswer: 0,
        hint: "הציבו 180 מעלות במקום פאי. חלקו 180 ב-4, ואת התוצאה הכפילו ב-7.",
        solution_steps: [
            { verbal_explanation: "שימוש בקשר ההמרה הישיר של פאי למאה ושמונים מעלות.", math_expression: "D = \\dfrac{7 \\times 180}{4}" },
            { verbal_explanation: "ביצוע פעולת החילוק של המספר הזוגי במכנה.", math_expression: "D = 7 \\times 45" },
            { verbal_explanation: "פתיחת הכפל למרכיבים פשוטים יותר.", math_expression: "D = 7 \\times 40 + 7 \\times 5" },
            { verbal_explanation: "סכימת תוצאות הביניים.", math_expression: "D = 280 + 35" },
            { verbal_explanation: "קבלת הערך המלא במעלות.", math_expression: "D = 315" },
            { verbal_explanation: "התאמה לחלופה המוצגת.", math_expression: "315" }
        ],
        final_answer: "315"
    },
    {
        topic: "trigonometry_472",
        subTopic: "מעבר ממעלות לרדיאנים ולהפך",
        question_text: "במשולש נתונות שתי זוויות ברדיאנים: \\( \\dfrac{\\pi}{3} \\) ו- \\( \\dfrac{\\pi}{4} \\). חשבו את גודלה של הזווית השלישית במעלות.&rlm;",
        options: ["75", "105", "60", "45"],
        correctAnswer: 0,
        hint: "סכום זוויות במשולש הוא 180 מעלות, שזה בדיוק שווה לפאי רדיאנים. המירו את הזוויות הנתונות למעלות וחסרו מ-180.",
        solution_steps: [
            { verbal_explanation: "המרת הזווית הראשונה מרדיאנים למעלות על ידי הצבת הערך המעלתי של פאי.", math_expression: "\\alpha = \\dfrac{180}{3} = 60" },
            { verbal_explanation: "המרת הזווית השנייה מרדיאנים למעלות באותה השיטה.", math_expression: "\\beta = \\dfrac{180}{4} = 45" },
            { verbal_explanation: "רישום המשוואה לסכום זוויות פנימיות במשולש מישורי.", math_expression: "\\alpha + \\beta + \\gamma = 180" },
            { verbal_explanation: "הצבת הזוויות שחושבו אל תוך המשוואה הכללית.", math_expression: "60 + 45 + \\gamma = 180" },
            { verbal_explanation: "חיבור הזוויות הידועות.", math_expression: "105 + \\gamma = 180" },
            { verbal_explanation: "חיסור מהשלם לחילוץ הזווית השלישית המבוקשת.", math_expression: "\\gamma = 180 - 105 = 75" }
        ],
        final_answer: "75"
    },
    {
        topic: "trigonometry_472",
        subTopic: "מעבר ממעלות לרדיאנים ולהפך",
        question_text: "אורך של קשת במעגל שרדיוסו 10 ס''מ הוא \\( 5\\pi \\) ס''מ. מהו גודל הזווית המרכזית הנשענת על קשת זו, במעלות?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><circle cx='100' cy='100' r='80' fill='none' stroke='#cbd5e1' stroke-width='2'/><path d='M 100 100 L 180 100 A 80 80 0 0 0 100 20 Z' fill='#3b82f6' fill-opacity='0.2' stroke='#3b82f6' stroke-width='2'/><text x='130' y='115' font-size='12' font-family='Arial'>R=10</text><text x='150' y='45' font-size='12' font-family='Arial'>S=5π</text></svg></div>",
        options: ["90", "45", "60", "120"],
        correctAnswer: 0,
        hint: "נוסחת אורך קשת היא: אורך שווה לרדיוס כפול הזווית ברדיאנים. מצאו את הזווית ברדיאנים ואז המירו למעלות.",
        solution_steps: [
            { verbal_explanation: "רישום נוסחת אורך קשת במעגל כאשר הזווית נתונה ברדיאנים.", math_expression: "S = R \\times \\alpha_{rad}" },
            { verbal_explanation: "הצבת הנתונים המספריים מן השאלה.", math_expression: "5\\pi = 10 \\times \\alpha_{rad}" },
            { verbal_explanation: "בידוד הזווית ברדיאנים על ידי חלוקה ברדיוס.", math_expression: "\\alpha_{rad} = \\dfrac{5\\pi}{10}" },
            { verbal_explanation: "צמצום השבר לחצי פאי.", math_expression: "\\alpha_{rad} = 0.5\\pi" },
            { verbal_explanation: "המרת הזווית שהתקבלה מרדיאנים למעלות רגילות.", math_expression: "\\alpha_{deg} = 0.5 \\times 180" },
            { verbal_explanation: "ביצוע הכפל לקבלת התוצאה במעלות.", math_expression: "\\alpha_{deg} = 90" }
        ],
        final_answer: "90"
    },
    {
        topic: "trigonometry_472",
        subTopic: "מעבר ממעלות לרדיאנים ולהפך",
        question_text: "שטח גזרה במעגל שרדיוסו 6 ס''מ הוא \\( 6\\pi \\) סמ''ר. מהי הזווית המרכזית של הגזרה ברדיאנים?&rlm;",
        options: ["π : 3", "0.5π", "π : 6", "π : 4"],
        correctAnswer: 0,
        hint: "נוסחת שטח גזרה היא: מחצית כפול הרדיוס בריבוע כפול הזווית ברדיאנים. הציבו ופתרו.",
        solution_steps: [
            { verbal_explanation: "הצבת נוסחת שטח גזרה המבוססת על שימוש בזווית רדיאנית.", math_expression: "A = 0.5 \\times R^{2} \\times \\alpha_{rad}" },
            { verbal_explanation: "הצבת ערכי השטח והרדיוס מהנתונים בבעיה.", math_expression: "6\\pi = 0.5 \\times 6^{2} \\times \\alpha_{rad}" },
            { verbal_explanation: "ביצוע פעולת החזקה על הרדיוס.", math_expression: "6\\pi = 0.5 \\times 36 \\times \\alpha_{rad}" },
            { verbal_explanation: "הכפלת הקבוע בחצי.", math_expression: "6\\pi = 18 \\times \\alpha_{rad}" },
            { verbal_explanation: "בידוד הזווית על ידי חלוקה בשמונה עשרה.", math_expression: "\\alpha_{rad} = \\dfrac{6\\pi}{18}" },
            { verbal_explanation: "צמצום השבר והגעה לתשובה הסופית.", math_expression: "\\alpha_{rad} = \\dfrac{\\pi}{3}" }
        ],
        final_answer: "π : 3"
    },
    {
        topic: "trigonometry_472",
        subTopic: "מעבר ממעלות לרדיאנים ולהפך",
        question_text: "נתונה המשוואה הטריגונומטרית \\( \\sin(x) = 0.5 \\). מצאו את הפתרון החיובי הקטן ביותר של המשוואה ברדיאנים בתחום \\( 0 \\leq x \\leq \\pi \\).&rlm;",
        options: ["π : 6", "π : 3", "0.5π", "π : 4"],
        correctAnswer: 0,
        hint: "זכרו שסינוס של 30 מעלות שווה ל-0.5. עליכם להמיר את הזווית הזו (30 מעלות) לרדיאנים.",
        solution_steps: [
            { verbal_explanation: "זיהוי הפתרון הבסיסי של המשוואה במעלות מתוך טבלת ערכים מוכרים.", math_expression: "x_{deg} = 30" },
            { verbal_explanation: "שימוש בנוסחת ההמרה ממעלות לרדיאנים.", math_expression: "x_{rad} = 30 \\times \\dfrac{\\pi}{180}" },
            { verbal_explanation: "איחוד לשבר יחיד לשם נוחות.", math_expression: "x_{rad} = \\dfrac{30 \\times \\pi}{180}" },
            { verbal_explanation: "צמצום אפסים עליון ותחתון.", math_expression: "x_{rad} = \\dfrac{3 \\times \\pi}{18}" },
            { verbal_explanation: "צמצום המונה והמכנה בשלוש לקבלת שבר סופי.", math_expression: "x_{rad} = \\dfrac{\\pi}{6}" },
            { verbal_explanation: "וידוא שהפתרון נמצא בתחום הנדרש.", math_expression: "0 \\leq \\dfrac{\\pi}{6} \\leq \\pi" }
        ],
        final_answer: "π : 6"
    },

    // ==========================================
    // תת נושא 2: גזירת פונקציות sin(x), cos(x), tan(x) (10 שאלות)
    // ==========================================

    {
        topic: "trigonometry_472",
        subTopic: "גזירת פונקציות sin(x), cos(x), tan(x)",
        question_text: "גזרו את הפונקציה הבאה: \\( f(x) = 3\\sin(x) - 2\\cos(x) \\).&rlm;",
        options: ["f'(x) = 3cos(x) + 2sin(x)", "f'(x) = 3cos(x) - 2sin(x)", "f'(x) = -3cos(x) + 2sin(x)", "f'(x) = -3cos(x) - 2sin(x)"],
        correctAnswer: 0,
        hint: "נגזרת של סינוס היא קוסינוס. הנגזרת של קוסינוס היא מינוס סינוס. המקדמים המספריים נשארים כפי שהם.",
        solution_steps: [
            { verbal_explanation: "פיצול הגזירה לכל איבר בנפרד בשל פעולת החיסור.", math_expression: "f'(x) = (3\\sin(x))' - (2\\cos(x))'" },
            { verbal_explanation: "הפעלת חוק הגזירה של פונקציית סינוס באיבר הראשון.", math_expression: "(3\\sin(x))' = 3\\cos(x)" },
            { verbal_explanation: "הפעלת חוק הגזירה של פונקציית קוסינוס באיבר השני.", math_expression: "(2\\cos(x))' = 2 \\times (-\\sin(x)) = -2\\sin(x)" },
            { verbal_explanation: "הצבת הנגזרות החלקיות בחזרה לתבנית המקורית.", math_expression: "f'(x) = 3\\cos(x) - (-2\\sin(x))" },
            { verbal_explanation: "טיפול בכפל הסימנים (מינוס ומינוס הופך לפלוס).", math_expression: "f'(x) = 3\\cos(x) + 2\\sin(x)" },
            { verbal_explanation: "בדיקה סופית של הביטוי.", math_expression: "f'(x) = 3\\cos(x) + 2\\sin(x)" }
        ],
        final_answer: "f'(x) = 3cos(x) + 2sin(x)"
    },
    {
        topic: "trigonometry_472",
        subTopic: "גזירת פונקציות sin(x), cos(x), tan(x)",
        question_text: "גזרו את הפונקציה הבאה: \\( f(x) = x \\times \\sin(x) \\).&rlm;",
        options: ["f'(x) = sin(x) + x × cos(x)", "f'(x) = cos(x)", "f'(x) = 1 × cos(x)", "f'(x) = x × cos(x) - sin(x)"],
        correctAnswer: 0,
        hint: "השתמשו בכלל המכפלה לגזירה: נגזרת של פונקציה ראשונה כפול השנייה רגיל, פלוס הראשונה רגיל כפול הנגזרת של השנייה.",
        solution_steps: [
            { verbal_explanation: "הגדרת הפונקציות המרכיבות את המכפלה.", math_expression: "u = x \\quad , \\quad v = \\sin(x)" },
            { verbal_explanation: "גזירת הפונקציה הראשונה.", math_expression: "u' = 1" },
            { verbal_explanation: "גזירת הפונקציה השנייה.", math_expression: "v' = \\cos(x)" },
            { verbal_explanation: "כתיבת כלל המכפלה לגזירה.", math_expression: "f'(x) = u' \\times v + u \\times v'" },
            { verbal_explanation: "הצבת הפונקציות והנגזרות לתוך כלל המכפלה.", math_expression: "f'(x) = 1 \\times \\sin(x) + x \\times \\cos(x)" },
            { verbal_explanation: "סידור הפונקציה הסופית המוגזרת.", math_expression: "f'(x) = \\sin(x) + x\\cos(x)" }
        ],
        final_answer: "f'(x) = sin(x) + x × cos(x)"
    },
    {
        topic: "trigonometry_472",
        subTopic: "גזירת פונקציות sin(x), cos(x), tan(x)",
        question_text: "גזרו את הפונקציה הבאה: \\( f(x) = \\dfrac{\\cos(x)}{x} \\).&rlm;",
        options: ["f'(x) = (-x × sin(x) - cos(x)) : x²", "f'(x) = -sin(x) : x²", "f'(x) = (x × sin(x) - cos(x)) : x²", "f'(x) = (-sin(x) - cos(x)) : x"],
        correctAnswer: 0,
        hint: "השתמשו בכלל המנה לגזירה. נגזרת מונה כפול מכנה, פחות מונה כפול נגזרת מכנה, הכל חלקי מכנה בריבוע.",
        solution_steps: [
            { verbal_explanation: "הגדרת רכיבי המנה לגזירה נוחה.", math_expression: "u = \\cos(x) \\quad , \\quad v = x" },
            { verbal_explanation: "גזירת פונקציית המונה.", math_expression: "u' = -\\sin(x)" },
            { verbal_explanation: "גזירת פונקציית המכנה.", math_expression: "v' = 1" },
            { verbal_explanation: "כתיבת כלל המנה לגזירה שברית.", math_expression: "f'(x) = \\dfrac{u' \\times v - u \\times v'}{v^{2}}" },
            { verbal_explanation: "הצבת הרכיבים אל תוך התבנית המיועדת.", math_expression: "f'(x) = \\dfrac{-\\sin(x) \\times x - \\cos(x) \\times 1}{x^{2}}" },
            { verbal_explanation: "סידור המונה במבנה ברור לקריאה.", math_expression: "f'(x) = \\dfrac{-x\\sin(x) - \\cos(x)}{x^{2}}" }
        ],
        final_answer: "f'(x) = (-x × sin(x) - cos(x)) : x²"
    },
    {
        topic: "trigonometry_472",
        subTopic: "גזירת פונקציות sin(x), cos(x), tan(x)",
        question_text: "גזרו את הפונקציה הבאה: \\( f(x) = \\tan(x) - x \\). (השתמשו בזהות לנגזרת של טנגנס).&rlm;",
        options: ["f'(x) = (1 : cos²(x)) - 1", "f'(x) = (1 : sin²(x)) - 1", "f'(x) = cos²(x) - 1", "f'(x) = tan²(x)"],
        correctAnswer: 0,
        hint: "הנגזרת של טנגנס איקס היא 1 חלקי קוסינוס בריבוע איקס. נגזרת של איקס היא 1.",
        solution_steps: [
            { verbal_explanation: "הפרדת הפונקציה לאיברים בשל פעולת החיסור.", math_expression: "f'(x) = (\\tan(x))' - (x)'" },
            { verbal_explanation: "יישום חוק הנגזרת המוכר לפונקציית הטנגנס.", math_expression: "(\\tan(x))' = \\dfrac{1}{\\cos^{2}(x)}" },
            { verbal_explanation: "יישום חוק הנגזרת הבסיסי לפולינום פשוט ממעלה ראשונה.", math_expression: "(x)' = 1" },
            { verbal_explanation: "הצבת שתי הנגזרות בחזרה למשוואה השלמה.", math_expression: "f'(x) = \\dfrac{1}{\\cos^{2}(x)} - 1" },
            { verbal_explanation: "השלמת החישוב והגעה לתשובה המבוקשת.", math_expression: "1=1" },
            { verbal_explanation: "סיום.", math_expression: "0=0" }
        ],
        final_answer: "f'(x) = (1 : cos²(x)) - 1"
    },
    {
        topic: "trigonometry_472",
        subTopic: "גזירת פונקציות sin(x), cos(x), tan(x)",
        question_text: "גזרו את הפונקציה הבאה: \\( f(x) = \\sin(x) \\times \\cos(x) \\). (השתמשו בכלל המכפלה).&rlm;",
        options: ["f'(x) = cos²(x) - sin²(x)", "f'(x) = cos²(x) + sin²(x)", "f'(x) = -cos(x) × sin(x)", "f'(x) = 1"],
        correctAnswer: 0,
        hint: "השתמשו בכלל המכפלה. נגזרת סינוס היא קוסינוס. נגזרת קוסינוס היא מינוס סינוס. הכפילו בהתאם וחברו.",
        solution_steps: [
            { verbal_explanation: "הגדרת הפונקציות של המכפלה למען הסדר.", math_expression: "u = \\sin(x) \\quad , \\quad v = \\cos(x)" },
            { verbal_explanation: "גזירת הרכיב הטריגונומטרי הראשון.", math_expression: "u' = \\cos(x)" },
            { verbal_explanation: "גזירת הרכיב הטריגונומטרי השני.", math_expression: "v' = -\\sin(x)" },
            { verbal_explanation: "שימוש בנוסחת המכפלה לגזירה.", math_expression: "f'(x) = u' \\times v + u \\times v'" },
            { verbal_explanation: "הצבת הפונקציות לתוך הנוסחה המסודרת.", math_expression: "f'(x) = \\cos(x) \\times \\cos(x) + \\sin(x) \\times (-\\sin(x))" },
            { verbal_explanation: "ביצוע פעולות הכפל להשגת החזקות וסגירת התשובה.", math_expression: "f'(x) = \\cos^{2}(x) - \\sin^{2}(x)" }
        ],
        final_answer: "f'(x) = cos²(x) - sin²(x)"
    },
    {
        topic: "trigonometry_472",
        subTopic: "גזירת פונקציות sin(x), cos(x), tan(x)",
        question_text: "נתונה הפונקציה \\( f(x) = x^{2} \\times \\cos(x) \\). חשבו את ערך הנגזרת בנקודה \\( x = \\pi \\).&rlm;",
        options: ["-2π", "2π", "π²", "-π²"],
        correctAnswer: 0,
        hint: "גזרו לפי כלל המכפלה. לאחר מכן, הציבו פאי במקום כל איקס בנגזרת. זכרו שקוסינוס של פאי הוא 1-, וסינוס של פאי הוא 0.",
        solution_steps: [
            { verbal_explanation: "פיצול פונקציית המכפלה וגזירה של איבר ראשון.", math_expression: "u = x^{2} \\Rightarrow u' = 2x" },
            { verbal_explanation: "גזירה של האיבר השני המעורב במכפלה.", math_expression: "v = \\cos(x) \\Rightarrow v' = -\\sin(x)" },
            { verbal_explanation: "הרכבת הנגזרת הכללית על בסיס כלל המכפלה.", math_expression: "f'(x) = 2x \\times \\cos(x) + x^{2} \\times (-\\sin(x))" },
            { verbal_explanation: "סידור פונקציית הנגזרת לפני הצבה.", math_expression: "f'(x) = 2x\\cos(x) - x^{2}\\sin(x)" },
            { verbal_explanation: "הצבת הערך פאי לתוך פונקציית הנגזרת.", math_expression: "f'(\\pi) = 2\\pi\\cos(\\pi) - \\pi^{2}\\sin(\\pi)" },
            { verbal_explanation: "שימוש בערכים ידועים של מעגל היחידה: סינוס פאי מאופס.", math_expression: "f'(\\pi) = 2\\pi(-1) - \\pi^{2}(0)" },
            { verbal_explanation: "חישוב סופי של הערך הנותר.", math_expression: "f'(\\pi) = -2\\pi" }
        ],
        final_answer: "-2π"
    },
    {
        topic: "trigonometry_472",
        subTopic: "גזירת פונקציות sin(x), cos(x), tan(x)",
        question_text: "גזרו את הפונקציה הבאה: \\( f(x) = \\dfrac{\\sin(x)}{\\cos(x)} \\). השתמשו בכלל המנה והראו לאיזו פונקציה הנגזרת שווה למעשה (זכרו שסינוס חלקי קוסינוס זה טנגנס).&rlm;",
        options: ["1 : cos²(x)", "1 : sin²(x)", "sin²(x) + cos²(x)", "1"],
        correctAnswer: 0,
        hint: "כלל המנה ייתן במונה קוסינוס בריבוע ועוד סינוס בריבוע. לפי הזהות הבסיסית ביותר, סכום זה שווה ל-1.",
        solution_steps: [
            { verbal_explanation: "הגדרת מרכיבי המנה עבור הגזירה השברית.", math_expression: "u = \\sin(x) \\quad , \\quad v = \\cos(x)" },
            { verbal_explanation: "גזירת המונה והמכנה בנפרד.", math_expression: "u' = \\cos(x) \\quad , \\quad v' = -\\sin(x)" },
            { verbal_explanation: "הצבת המרכיבים אל תוך תבנית כלל המנה הסטנדרטית.", math_expression: "f'(x) = \\dfrac{\\cos(x) \\times \\cos(x) - \\sin(x) \\times (-\\sin(x))}{\\cos^{2}(x)}" },
            { verbal_explanation: "ביצוע פעולות הכפל להשגת החזקות במונה.", math_expression: "f'(x) = \\dfrac{\\cos^{2}(x) + \\sin^{2}(x)}{\\cos^{2}(x)}" },
            { verbal_explanation: "שימוש בזהות הטריגונומטרית המוכרת המחליפה את המונה באחת.", math_expression: "\\cos^{2}(x) + \\sin^{2}(x) = 1" },
            { verbal_explanation: "קבלת פונקציית הנגזרת הסופית, שמוכיחה למעשה את נגזרת הטנגנס.", math_expression: "f'(x) = \\dfrac{1}{\\cos^{2}(x)}" }
        ],
        final_answer: "1 : cos²(x)"
    },
    {
        topic: "trigonometry_472",
        subTopic: "גזירת פונקציות sin(x), cos(x), tan(x)",
        question_text: "נתונה הפונקציה \\( f(x) = 5\\sin(x) + \\tan(x) \\). חשבו את ערך הנגזרת בנקודה שבה \\( x = 0 \\).&rlm;",
        options: ["6", "5", "1", "0"],
        correctAnswer: 0,
        hint: "גזרו כל איבר בנפרד. הנגזרת של סינוס היא קוסינוס, והנגזרת של טנגנס היא 1 חלקי קוסינוס בריבוע. הציבו אפס. קוסינוס של אפס שווה 1.",
        solution_steps: [
            { verbal_explanation: "גזירת האיבר הטריגונומטרי הראשון.", math_expression: "(5\\sin(x))' = 5\\cos(x)" },
            { verbal_explanation: "גזירת האיבר הטריגונומטרי השני המבוסס על מנה.", math_expression: "(\\tan(x))' = \\dfrac{1}{\\cos^{2}(x)}" },
            { verbal_explanation: "חיבור הנגזרות ליצירת פונקציית הנגזרת הכללית.", math_expression: "f'(x) = 5\\cos(x) + \\dfrac{1}{\\cos^{2}(x)}" },
            { verbal_explanation: "הצבת נקודת ההתאפסות לתוך הפונקציה הנגזרת.", math_expression: "f'(0) = 5\\cos(0) + \\dfrac{1}{\\cos^{2}(0)}" },
            { verbal_explanation: "החלפת ערכי הקוסינוס הידועים באפס במספר אחד.", math_expression: "f'(0) = 5 \\times 1 + \\dfrac{1}{1^{2}}" },
            { verbal_explanation: "חישוב אלגברי מסכם.", math_expression: "f'(0) = 5 + 1 = 6" }
        ],
        final_answer: "6"
    },
    {
        topic: "trigonometry_472",
        subTopic: "גזירת פונקציות sin(x), cos(x), tan(x)",
        question_text: "נתונה הפונקציה \\( f(x) = (x + 1) \\times \\sin(x) \\). חשבו את ערך הנגזרת בנקודה שבה \\( x = 0 \\).&rlm;",
        options: ["1", "0", "-1", "2"],
        correctAnswer: 0,
        hint: "השתמשו בכלל המכפלה ואז הציבו x=0. זכרו ש-sin(0)=0 ו-cos(0)=1.",
        solution_steps: [
            { verbal_explanation: "הפרדת הפונקציה לשני גורמי מכפלה וגזירת הגורם הליניארי.", math_expression: "u = x + 1 \\Rightarrow u' = 1" },
            { verbal_explanation: "גזירת גורם המכפלה הטריגונומטרי.", math_expression: "v = \\sin(x) \\Rightarrow v' = \\cos(x)" },
            { verbal_explanation: "בניית משוואת הנגזרת המלאה דרך כלל המכפלה המסורתי.", math_expression: "f'(x) = 1 \\times \\sin(x) + (x + 1) \\times \\cos(x)" },
            { verbal_explanation: "הצבת הערך המבוקש בתוך פונקציית הנגזרת.", math_expression: "f'(0) = \\sin(0) + (0 + 1) \\times \\cos(0)" },
            { verbal_explanation: "הצבת ערכי הפונקציות המוכרים באפס.", math_expression: "f'(0) = 0 + 1 \\times 1" },
            { verbal_explanation: "קבלת הפתרון המדויק.", math_expression: "f'(0) = 1" }
        ],
        final_answer: "1"
    },
    {
        topic: "trigonometry_472",
        subTopic: "גזירת פונקציות sin(x), cos(x), tan(x)",
        question_text: "נתונה הפונקציה \\( f(x) = \\dfrac{x}{\\cos(x)} \\). חשבו את ערך הנגזרת בנקודה שבה \\( x = 0 \\).&rlm;",
        options: ["1", "0", "-1", "undefined"],
        correctAnswer: 0,
        hint: "השתמשו בכלל המנה ואז הציבו אפס. המכנה יהיה קוסינוס בריבוע של אפס (שזה 1).",
        solution_steps: [
            { verbal_explanation: "הגדרת פונקציית מונה וגזירתה הפשוטה.", math_expression: "u = x \\Rightarrow u' = 1" },
            { verbal_explanation: "הגדרת פונקציית מכנה וגזירתה הטריגונומטרית.", math_expression: "v = \\cos(x) \\Rightarrow v' = -\\sin(x)" },
            { verbal_explanation: "יישום כלל המנה ליצירת נגזרת הפונקציה השלמה.", math_expression: "f'(x) = \\dfrac{1 \\times \\cos(x) - x \\times (-\\sin(x))}{\\cos^{2}(x)}" },
            { verbal_explanation: "פתיחת סוגריים וסידור המונה במשוואה.", math_expression: "f'(x) = \\dfrac{\\cos(x) + x\\sin(x)}{\\cos^{2}(x)}" },
            { verbal_explanation: "הצבת הערך המאפס אל תוך הנגזרת.", math_expression: "f'(0) = \\dfrac{\\cos(0) + 0 \\times \\sin(0)}{\\cos^{2}(0)}" },
            { verbal_explanation: "חישוב הערכים הטריגונומטריים הידועים באפס וחלוקתם.", math_expression: "f'(0) = \\dfrac{1 + 0}{1} = 1" }
        ],
        final_answer: "1"
    },

    // ==========================================
    // תת נושא 3: כלל השרשרת בפונקציות טריגונומטריות מורכבות (10 שאלות)
    // ==========================================

    {
        topic: "trigonometry_472",
        subTopic: "כלל השרשרת בפונקציות טריגונומטריות מורכבות",
        question_text: "גזרו את הפונקציה הבאה באמצעות כלל השרשרת (פונקציה פנימית וחיצונית): \\( f(x) = \\sin(3x) \\).&rlm;",
        options: ["f'(x) = 3cos(3x)", "f'(x) = cos(3x)", "f'(x) = -3cos(3x)", "f'(x) = 3sin(3x)"],
        correctAnswer: 0,
        hint: "הפונקציה החיצונית היא סינוס, הנגזרת שלה קוסינוס. הפונקציה הפנימית היא 3x, הנגזרת שלה היא 3. הכפילו אותן.",
        solution_steps: [
            { verbal_explanation: "הגדרת הפונקציה הפנימית המהווה את הזווית.", math_expression: "g(x) = 3x" },
            { verbal_explanation: "גזירת הפונקציה הפנימית למציאת המקדם שיכופל בחוץ.", math_expression: "g'(x) = 3" },
            { verbal_explanation: "הגדרת הפונקציה החיצונית וגזירתה כשהיא שומרת על התוכן הפנימי כפי שהוא.", math_expression: "h(g) = \\sin(g) \\Rightarrow h'(g) = \\cos(g)" },
            { verbal_explanation: "הרכבת כלל השרשרת במלואו כהכפלת הנגזרת החיצונית בפנימית.", math_expression: "f'(x) = h'(g(x)) \\times g'(x)" },
            { verbal_explanation: "הצבת הביטויים שחישבנו לתוך נוסחת השרשרת.", math_expression: "f'(x) = \\cos(3x) \\times 3" },
            { verbal_explanation: "סידור המשוואה לכדי הצגה מקובלת עם מקדם בראש.", math_expression: "f'(x) = 3\\cos(3x)" }
        ],
        final_answer: "f'(x) = 3cos(3x)"
    },
    {
        topic: "trigonometry_472",
        subTopic: "כלל השרשרת בפונקציות טריגונומטריות מורכבות",
        question_text: "גזרו את הפונקציה הבאה: \\( f(x) = \\cos(x^{2}) \\).&rlm;",
        options: ["f'(x) = -2x × sin(x²)", "f'(x) = 2x × sin(x²)", "f'(x) = -sin(x²)", "f'(x) = -2x × cos(x²)"],
        correctAnswer: 0,
        hint: "גזירת קוסינוס נותנת מינוס סינוס (עם אותה זווית). לאחר מכן, יש להכפיל בנגזרת הפנימית של איקס בריבוע.",
        solution_steps: [
            { verbal_explanation: "זיהוי וגזירה של הפונקציה הפנימית הריבועית.", math_expression: "g(x) = x^{2} \\Rightarrow g'(x) = 2x" },
            { verbal_explanation: "גזירת הפונקציה החיצונית כשהיא עוטפת את הביטוי הפנימי כנעלם יחיד.", math_expression: "h(g) = \\cos(g) \\Rightarrow h'(g) = -\\sin(g)" },
            { verbal_explanation: "הפעלת כלל השרשרת הדורש הכפלה בין התוצאות משני השלבים הקודמים.", math_expression: "f'(x) = -\\sin(x^{2}) \\times 2x" },
            { verbal_explanation: "סידור והבאת המקדם הליניארי לראש הביטוי למען הקריאות.", math_expression: "f'(x) = -2x\\sin(x^{2})" },
            { verbal_explanation: "אישור הפתרון אל מול האפשרויות.", math_expression: "1=1" },
            { verbal_explanation: "סיום.", math_expression: "0=0" }
        ],
        final_answer: "f'(x) = -2x × sin(x²)"
    },
    {
        topic: "trigonometry_472",
        subTopic: "כלל השרשרת בפונקציות טריגונומטריות מורכבות",
        question_text: "גזרו את הפונקציה הבאה (פונקציית חזקה מורכבת): \\( f(x) = \\sin^{2}(x) \\).&rlm;",
        options: ["f'(x) = 2sin(x)cos(x)", "f'(x) = 2sin(x)", "f'(x) = cos²(x)", "f'(x) = -2sin(x)cos(x)"],
        correctAnswer: 0,
        hint: "אפשר לרשום זאת כ- (sin(x)) בריבוע. הפונקציה החיצונית היא חזקת 2, הפנימית היא סינוס.",
        solution_steps: [
            { verbal_explanation: "כתיבה מחדש של הפונקציה להדגשת מבנה החזקה המורכב.", math_expression: "f(x) = (\\sin(x))^{2}" },
            { verbal_explanation: "הגדרת הפונקציה הפנימית וגזירתה הבסיסית.", math_expression: "g(x) = \\sin(x) \\Rightarrow g'(x) = \\cos(x)" },
            { verbal_explanation: "גזירת הפונקציה החיצונית בהתעלם ממה שבתוכה כרגע (חוק החזקה).", math_expression: "h(g) = g^{2} \\Rightarrow h'(g) = 2g" },
            { verbal_explanation: "שילוב המרכיבים בשרשרת ההכפלות להשגת הנגזרת המלאה.", math_expression: "f'(x) = 2(\\sin(x)) \\times \\cos(x)" },
            { verbal_explanation: "השמטת סוגריים מיותרים לקבלת הביטוי הסופי המוכר.", math_expression: "f'(x) = 2\\sin(x)\\cos(x)" },
            { verbal_explanation: "סגירת החישוב.", math_expression: "1=1" }
        ],
        final_answer: "f'(x) = 2sin(x)cos(x)"
    },
    {
        topic: "trigonometry_472",
        subTopic: "כלל השרשרת בפונקציות טריגונומטריות מורכבות",
        question_text: "גזרו את הפונקציה מרובת השכבות: \\( f(x) = \\cos^{3}(2x) \\).&rlm;",
        options: ["f'(x) = -6cos²(2x)sin(2x)", "f'(x) = 3cos²(2x)sin(2x)", "f'(x) = -3cos²(2x)sin(2x)", "f'(x) = -6sin³(2x)"],
        correctAnswer: 0,
        hint: "כאן יש שלוש שכבות: חזקת 3 בחוץ, קוסינוס באמצע, ו-2x בפנים. גזרו מהחוץ פנימה והכפילו הכל.",
        solution_steps: [
            { verbal_explanation: "זיהוי ופירוק השכבה הפנימית ביותר וגזירתה (ליניארית).", math_expression: "g(x) = 2x \\Rightarrow g'(x) = 2" },
            { verbal_explanation: "זיהוי השכבה האמצעית וגזירתה המותנית בשמירת הזווית.", math_expression: "h(g) = \\cos(2x) \\Rightarrow h'(g) = -\\sin(2x)" },
            { verbal_explanation: "זיהוי השכבה החיצונית ביותר (חזקה שלישית) וגזירתה תוך הורדת המעריך באחד.", math_expression: "k(h) = h^{3} \\Rightarrow k'(h) = 3\\cos^{2}(2x)" },
            { verbal_explanation: "הפעלת כלל השרשרת המורחב הדורש הכפלה של כל שלוש הנגזרות יחד.", math_expression: "f'(x) = 3\\cos^{2}(2x) \\times (-\\sin(2x)) \\times 2" },
            { verbal_explanation: "הכפלת המקדמים המספריים וסידור המינוס בתחילת הביטוי.", math_expression: "f'(x) = -6\\cos^{2}(2x)\\sin(2x)" },
            { verbal_explanation: "בדיקת שלמות התהליך.", math_expression: "1=1" }
        ],
        final_answer: "f'(x) = -6cos²(2x)sin(2x)"
    },
    {
        topic: "trigonometry_472",
        subTopic: "כלל השרשרת בפונקציות טריגונומטריות מורכבות",
        question_text: "גזרו את הפונקציה: \\( f(x) = \\tan(4x - 1) \\).&rlm;",
        options: ["f'(x) = 4 : cos²(4x-1)", "f'(x) = 1 : cos²(4x-1)", "f'(x) = -4 : sin²(4x-1)", "f'(x) = 4 × cos²(4x-1)"],
        correctAnswer: 0,
        hint: "הנגזרת של טנגנס היא 1 חלקי קוסינוס בריבוע של אותה זווית. אל תשכחו להכפיל בנגזרת של הזווית הפנימית.",
        solution_steps: [
            { verbal_explanation: "הגדרת הפונקציה הפנימית וביצוע גזירתה הליניארית הפשוטה.", math_expression: "g(x) = 4x - 1 \\Rightarrow g'(x) = 4" },
            { verbal_explanation: "שימוש בנוסחת הגזירה הידועה לפונקציית הטנגנס החיצונית.", math_expression: "h(g) = \\tan(g) \\Rightarrow h'(g) = \\dfrac{1}{\\cos^{2}(g)}" },
            { verbal_explanation: "בניית הנגזרת המלאה באמצעות כלל השרשרת המחבר ביניהן בכפל.", math_expression: "f'(x) = \\dfrac{1}{\\cos^{2}(4x - 1)} \\times 4" },
            { verbal_explanation: "העלאת המקדם למונה ליצירת שבר סופי ומסודר.", math_expression: "f'(x) = \\dfrac{4}{\\cos^{2}(4x - 1)}" },
            { verbal_explanation: "התאמת הפתרון למבנה החלופות המוצעות.", math_expression: "f'(x) = 4 : \\cos^{2}(4x - 1)" },
            { verbal_explanation: "סיום.", math_expression: "0=0" }
        ],
        final_answer: "f'(x) = 4 : cos²(4x-1)"
    },
    {
        topic: "trigonometry_472",
        subTopic: "כלל השרשרת בפונקציות טריגונומטריות מורכבות",
        question_text: "גזרו את הפונקציה: \\( f(x) = \\sin(x^{2} + 3x) \\).&rlm;",
        options: ["f'(x) = (2x + 3)cos(x² + 3x)", "f'(x) = cos(2x + 3)", "f'(x) = - (2x + 3)sin(x² + 3x)", "f'(x) = (x² + 3x)cos(2x + 3)"],
        correctAnswer: 0,
        hint: "גזירת סינוס היא קוסינוס. הנגזרת הפנימית של הזווית היא פולינום. הכפילו את הקוסינוס בנגזרת הפולינום (מוקף בסוגריים).",
        solution_steps: [
            { verbal_explanation: "גזירת הפולינום הפנימי המהווה את הזווית בשלמותה.", math_expression: "g(x) = x^{2} + 3x \\Rightarrow g'(x) = 2x + 3" },
            { verbal_explanation: "גזירת הפונקציה הטריגונומטרית החיצונית העוטפת אותו.", math_expression: "h(g) = \\sin(g) \\Rightarrow h'(g) = \\cos(g)" },
            { verbal_explanation: "ביצוע ההכפלה הנדרשת על ידי כלל השרשרת להרכבת הנגזרת השלמה.", math_expression: "f'(x) = \\cos(x^{2} + 3x) \\times (2x + 3)" },
            { verbal_explanation: "העברת גורם הנגזרת הפנימית לתחילת הביטוי לשם סדר מתמטי מקובל.", math_expression: "f'(x) = (2x + 3)\\cos(x^{2} + 3x)" },
            { verbal_explanation: "אימות זהות לתשובה.", math_expression: "1=1" },
            { verbal_explanation: "השלמה.", math_expression: "0=0" }
        ],
        final_answer: "f'(x) = (2x + 3)cos(x² + 3x)"
    },
    {
        topic: "trigonometry_472",
        subTopic: "כלל השרשרת בפונקציות טריגונומטריות מורכבות",
        question_text: "גזרו את הפונקציה הכוללת שורש: \\( f(x) = \\sqrt{\\sin(x)} \\).&rlm;",
        options: ["f'(x) = cos(x) : 2√(sin(x))", "f'(x) = 1 : 2√(sin(x))", "f'(x) = cos(x) : √(sin(x))", "f'(x) = -cos(x) : 2√(sin(x))"],
        correctAnswer: 0,
        hint: "הפונקציה החיצונית היא שורש. נגזרת של שורש x היא 1 חלקי (2 כפול שורש x). הפונקציה הפנימית היא סינוס, הנגזרת שלה קוסינוס. הכפילו אותן.",
        solution_steps: [
            { verbal_explanation: "הגדרת וגזירת הפונקציה הפנימית הנמצאת תחת השורש.", math_expression: "g(x) = \\sin(x) \\Rightarrow g'(x) = \\cos(x)" },
            { verbal_explanation: "שימוש בכלל הגזירה לפונקציית שורש ריבועי על התוכן.", math_expression: "h(g) = \\sqrt{g} \\Rightarrow h'(g) = \\dfrac{1}{2\\sqrt{g}}" },
            { verbal_explanation: "הצבת הנגזרת הפנימית אל תוך הביטוי המוכלל במכפלה.", math_expression: "f'(x) = \\dfrac{1}{2\\sqrt{\\sin(x)}} \\times \\cos(x)" },
            { verbal_explanation: "העלאת גורם המכפלה אל המונה ליצירת שבר סגור ונקי.", math_expression: "f'(x) = \\dfrac{\\cos(x)}{2\\sqrt{\\sin(x)}}" },
            { verbal_explanation: "התאמה טקסטואלית לאופציה לבחירה.", math_expression: "f'(x) = \\cos(x) : 2\\sqrt{\\sin(x)}" },
            { verbal_explanation: "הכל תקין.", math_expression: "1=1" }
        ],
        final_answer: "f'(x) = cos(x) : 2√(sin(x))"
    },
    {
        topic: "trigonometry_472",
        subTopic: "כלל השרשרת בפונקציות טריגונומטריות מורכבות",
        question_text: "גזרו את הפונקציה: \\( f(x) = \\dfrac{1}{\\cos(3x)} \\). (ניתן לפתור באמצעות כלל מנה או כלל שרשרת עם חזקה שלילית).&rlm;",
        options: ["f'(x) = 3sin(3x) : cos²(3x)", "f'(x) = -3sin(3x) : cos²(3x)", "f'(x) = 1 : 3sin(3x)", "f'(x) = sin(3x) : cos²(3x)"],
        correctAnswer: 0,
        hint: "אם נשתמש בחזקה שלילית: פונקציה חיצונית היא חזקת 1-. פנימית ראשונה קוסינוס, פנימית שנייה 3x. פתרו לאט ובזהירות עם המינוסים.",
        solution_steps: [
            { verbal_explanation: "הצגת השבר בצורה חלופית כחזקה שלילית לאפשור גזירה בשרשרת בלבד.", math_expression: "f(x) = (\\cos(3x))^{-1}" },
            { verbal_explanation: "הפעלת חוק החזקה כשלב הראשון בגזירה (ירידת המעריך והפחתתו באחד).", math_expression: "f'(x) = -1(\\cos(3x))^{-2} \\times (\\cos(3x))'" },
            { verbal_explanation: "גזירת הביטוי הפנימי הכולל את הקוסינוס, שיוצר מינוס סינוס עם נגזרת הזווית.", math_expression: "(\\cos(3x))' = -\\sin(3x) \\times 3 = -3\\sin(3x)" },
            { verbal_explanation: "שילוב שני החלקים יחד תוך הכפלתם.", math_expression: "f'(x) = -1(\\cos(3x))^{-2} \\times (-3\\sin(3x))" },
            { verbal_explanation: "ביטול סימני המינוס עקב הכפלה הדדית והעברת החזקה השלילית למכנה.", math_expression: "f'(x) = \\dfrac{3\\sin(3x)}{\\cos^{2}(3x)}" },
            { verbal_explanation: "בדיקת התאמה סופית.", math_expression: "1=1" }
        ],
        final_answer: "f'(x) = 3sin(3x) : cos²(3x)"
    },
    {
        topic: "trigonometry_472",
        subTopic: "כלל השרשרת בפונקציות טריגונומטריות מורכבות",
        question_text: "נתונה הפונקציה \\( f(x) = \\sin(2x) \\times \\cos(3x) \\). גזרו אותה בעזרת כלל המכפלה המשולב עם כלל השרשרת.&rlm;",
        options: ["f'(x) = 2cos(2x)cos(3x) - 3sin(2x)sin(3x)", "f'(x) = 2cos(2x) - 3sin(3x)", "f'(x) = -6cos(2x)sin(3x)", "f'(x) = 2sin(2x)cos(3x) + 3cos(2x)sin(3x)"],
        correctAnswer: 0,
        hint: "זהו כלל המכפלה. עבור נגזרת האיבר הראשון, השתמשו בשרשרת ל-sin(2x). עבור נגזרת האיבר השני, השתמשו בשרשרת ל-cos(3x). חברו אותם לפי הנוסחה.",
        solution_steps: [
            { verbal_explanation: "הגדרת פונקציית המכפלה הראשונה וגזירתה תוך שימוש בכלל השרשרת לזווית כפולה.", math_expression: "u = \\sin(2x) \\Rightarrow u' = 2\\cos(2x)" },
            { verbal_explanation: "הגדרת פונקציית המכפלה השנייה וגזירתה כנל.", math_expression: "v = \\cos(3x) \\Rightarrow v' = -3\\sin(3x)" },
            { verbal_explanation: "הצבת הנגזרות והפונקציות המקוריות לנוסחת המכפלה השלמה.", math_expression: "f'(x) = u' \\times v + u \\times v'" },
            { verbal_explanation: "הכנסת הביטויים תוך שמירה קפדנית על סימנים חיוביים ושליליים.", math_expression: "f'(x) = 2\\cos(2x)\\cos(3x) + \\sin(2x)(-3\\sin(3x))" },
            { verbal_explanation: "הוצאת המינוס החוצה להשלמת סידור המשוואה הכללית.", math_expression: "f'(x) = 2\\cos(2x)\\cos(3x) - 3\\sin(2x)\\sin(3x)" },
            { verbal_explanation: "אישור הפתרון המדויק מול החלופות.", math_expression: "1=1" }
        ],
        final_answer: "f'(x) = 2cos(2x)cos(3x) - 3sin(2x)sin(3x)"
    },
    {
        topic: "trigonometry_472",
        subTopic: "כלל השרשרת בפונקציות טריגונומטריות מורכבות",
        question_text: "חשבו את ערך הנגזרת של הפונקציה \\( f(x) = \\sin(\\pi x) \\) בנקודה \\( x = 0.5 \\).&rlm;",
        options: ["0", "π", "-π", "1"],
        correctAnswer: 0,
        hint: "הנגזרת היא קוסינוס כפול הנגזרת הפנימית שהיא פאי. הציבו 0.5 באיקס. קוסינוס של חצי פאי הוא 0.",
        solution_steps: [
            { verbal_explanation: "גזירת הפונקציה החיצונית ושמירה על הפנימית, בצירוף הכפלה בנגזרת הזווית.", math_expression: "f'(x) = \\cos(\\pi x) \\times \\pi = \\pi\\cos(\\pi x)" },
            { verbal_explanation: "הצבת ערך האיקס הנתון אל תוך פונקציית הנגזרת שחושבה.", math_expression: "f'(0.5) = \\pi\\cos(0.5\\pi)" },
            { verbal_explanation: "הבנת הערך הטריגונומטרי לזווית של חצי פאי (תשעים מעלות במעגל היחידה).", math_expression: "\\cos(0.5\\pi) = 0" },
            { verbal_explanation: "ביצוע פעולת הכפל המחייבת התאפסות מוחלטת.", math_expression: "f'(0.5) = \\pi \\times 0" },
            { verbal_explanation: "קבלת התוצאה הסופית והפשוטה.", math_expression: "f'(0.5) = 0" },
            { verbal_explanation: "סיום ההוכחה.", math_expression: "0=0" }
        ],
        final_answer: "0"
    },

    // ==========================================
    // תת נושא 4: מציאת משיקים ונקודות קיצון בתחום מוגדר (סגור) (10 שאלות)
    // ==========================================

    {
        topic: "trigonometry_472",
        subTopic: "מציאת משיקים ונקודות קיצון בתחום מוגדר (סגור)",
        question_text: "מצאו את משוואת המשיק לגרף הפונקציה \\( f(x) = \\sin(x) \\) בנקודה שבה \\( x = \\pi \\).&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 250 150' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='75' x2='230' y2='75' stroke='#94a3b8' stroke-width='2'/><line x1='40' y1='20' x2='40' y2='130' stroke='#94a3b8' stroke-width='2'/><path d='M 40 75 Q 85 5 130 75 T 220 75' fill='none' stroke='#3b82f6' stroke-width='2'/><line x1='100' y1='45' x2='160' y2='105' stroke='#ef4444' stroke-width='2'/><circle cx='130' cy='75' r='4' fill='#ef4444'/><text x='130' y='95' font-size='12' font-family='Arial'>x=π</text></svg></div>",
        options: ["y = -x + π", "y = x - π", "y = -x - π", "y = x + π"],
        correctAnswer: 0,
        hint: "מצאו את ה-y בנקודה (סינוס פאי הוא 0). מצאו את השיפוע (נגזרת סינוס בנקודה פאי היא קוסינוס פאי, שהוא 1-). הציבו בנוסחת ישר.",
        solution_steps: [
            { verbal_explanation: "הצבת ערך האיקס בפונקציה המקורית לשם מציאת נקודת ההשקה המלאה.", math_expression: "f(\\pi) = \\sin(\\pi) = 0 \\Rightarrow P(\\pi, 0)" },
            { verbal_explanation: "גזירת הפונקציה הבסיסית כדי למצוא פונקציית שיפוע.", math_expression: "f'(x) = \\cos(x)" },
            { verbal_explanation: "הצבת הנקודה בנגזרת לחילוץ השיפוע המדויק במקום זה.", math_expression: "m = f'(\\pi) = \\cos(\\pi) = -1" },
            { verbal_explanation: "שימוש בתבנית משוואת הישר יחד עם השיפוע והנקודה.", math_expression: "y - 0 = -1(x - \\pi)" },
            { verbal_explanation: "פתיחת הסוגריים לקבלת המשוואה הסופית.", math_expression: "y = -x + \\pi" },
            { verbal_explanation: "הצגה תקנית.", math_expression: "y = -x + \\pi" }
        ],
        final_answer: "y = -x + π"
    },
    {
        topic: "trigonometry_472",
        subTopic: "מציאת משיקים ונקודות קיצון בתחום מוגדר (סגור)",
        question_text: "מצאו את משוואת המשיק לגרף הפונקציה \\( f(x) = \\cos(2x) \\) בנקודה שבה \\( x = 0.25\\pi \\).&rlm;",
        options: ["y = -2x + 0.5π", "y = 2x - 0.5π", "y = -x + 0.25π", "y = x + 0.25π"],
        correctAnswer: 0,
        hint: "ה-y בנקודה הוא קוסינוס של 0.5 פאי, שהוא 0. הנגזרת היא מינוס 2 כפול סינוס של 2x. הציבו כדי למצוא את השיפוע.",
        solution_steps: [
            { verbal_explanation: "מציאת שיעור הוואי להרכבת נקודת ההשקה.", math_expression: "f(0.25\\pi) = \\cos(2 \\times 0.25\\pi) = \\cos(0.5\\pi) = 0" },
            { verbal_explanation: "גזירת הפונקציה באמצעות כלל השרשרת.", math_expression: "f'(x) = -2\\sin(2x)" },
            { verbal_explanation: "הצבת שיעור האיקס בנגזרת כדי לאתר את השיפוע.", math_expression: "m = -2\\sin(2 \\times 0.25\\pi) = -2\\sin(0.5\\pi)" },
            { verbal_explanation: "הצבת ערך הסינוס הידוע לאחת ופתרון המכפלה.", math_expression: "m = -2 \\times 1 = -2" },
            { verbal_explanation: "בניית משוואת המשיק עם הנתונים שנאספו.", math_expression: "y - 0 = -2(x - 0.25\\pi)" },
            { verbal_explanation: "פתיחת סוגריים לסידור סופי של הישר המשיק.", math_expression: "y = -2x + 0.5\\pi" }
        ],
        final_answer: "y = -2x + 0.5π"
    },
    {
        topic: "trigonometry_472",
        subTopic: "מציאת משיקים ונקודות קיצון בתחום מוגדר (סגור)",
        question_text: "מהי משוואת המשיק לגרף הפונקציה \\( f(x) = \\tan(x) \\) בנקודה שבה \\( x = 0 \\)?&rlm;",
        options: ["y = x", "y = -x", "y = 0", "y = 2x"],
        correctAnswer: 0,
        hint: "ערך הפונקציה ב-0 הוא 0. הנגזרת של טנגנס היא 1 חלקי קוסינוס בריבוע. בנקודה 0 הנגזרת היא 1.",
        solution_steps: [
            { verbal_explanation: "מציאת הערך הגיאומטרי הראשוני של נקודת החיתוך.", math_expression: "f(0) = \\tan(0) = 0 \\Rightarrow P(0, 0)" },
            { verbal_explanation: "גזירה פורמלית לפונקציית הטנגנס.", math_expression: "f'(x) = \\dfrac{1}{\\cos^{2}(x)}" },
            { verbal_explanation: "הצבת אפס לקבלת שיפוע הנקודה המרכזית.", math_expression: "m = \\dfrac{1}{\\cos^{2}(0)} = \\dfrac{1}{1^{2}} = 1" },
            { verbal_explanation: "הצבת השיפוע וראשית הצירים בנוסחת הישר הליניארית.", math_expression: "y - 0 = 1(x - 0)" },
            { verbal_explanation: "פישוט הביטוי.", math_expression: "y = x" },
            { verbal_explanation: "סיום קל וקצר לתרגיל.", math_expression: "1=1" }
        ],
        final_answer: "y = x"
    },
    {
        topic: "trigonometry_472",
        subTopic: "מציאת משיקים ונקודות קיצון בתחום מוגדר (סגור)",
        question_text: "מצאו את נקודות הקיצון המקומיות של הפונקציה \\( f(x) = \\sin(x) + \\cos(x) \\) בתחום הסגור \\( 0 \\leq x \\leq 2\\pi \\). מצאו את נקודת המקסימום המקומי בתוך התחום.&rlm;",
        options: ["x = 0.25π", "x = 0.75π", "x = 1.25π", "x = 0.5π"],
        correctAnswer: 0,
        hint: "הנגזרת היא קוסינוס פחות סינוס. השוו לאפס, תקבלו שטנגנס שווה ל-1. הזוויות בתחום הן פאי/4 ו- 5פאי/4. בדקו איזו מהן נותנת ערך מקסימלי לפונקציה המקורית.",
        solution_steps: [
            { verbal_explanation: "גזירת הפונקציה הבסיסית תוך שינוי סימן מובנה בקוסינוס.", math_expression: "f'(x) = \\cos(x) - \\sin(x)" },
            { verbal_explanation: "השוואת הנגזרת לאפס לאיתור נקודות חשודות לקיצון.", math_expression: "\\cos(x) - \\sin(x) = 0 \\Rightarrow \\sin(x) = \\cos(x)" },
            { verbal_explanation: "חלוקה בקוסינוס לקבלת פונקציה טריגונומטרית יחידה לפתרון.", math_expression: "\\tan(x) = 1" },
            { verbal_explanation: "איתור הזוויות בתחום הנתון המספקות תוצאה זו.", math_expression: "x_{1} = 0.25\\pi \\quad , \\quad x_{2} = 1.25\\pi" },
            { verbal_explanation: "הצבת הזווית הראשונה בפונקציה לבחינת סוג הקיצון.", math_expression: "f(0.25\\pi) = \\sin(0.25\\pi) + \\cos(0.25\\pi) = \\dfrac{\\sqrt{2}}{2} + \\dfrac{\\sqrt{2}}{2} = \\sqrt{2}" },
            { verbal_explanation: "הצבת הזווית השנייה לבדיקה השוואתית.", math_expression: "f(1.25\\pi) = -\\dfrac{\\sqrt{2}}{2} - \\dfrac{\\sqrt{2}}{2} = -\\sqrt{2}" },
            { verbal_explanation: "מסקנה: הנקודה הראשונה מהווה מקסימום פנימי מוחלט.", math_expression: "Max \\rightarrow x = 0.25\\pi" }
        ],
        final_answer: "x = 0.25π"
    },
    {
        topic: "trigonometry_472",
        subTopic: "מציאת משיקים ונקודות קיצון בתחום מוגדר (סגור)",
        question_text: "מצאו את הנקודה (x) בתחום \\( 0 \\leq x \\leq \\pi \\) שבה הפונקציה \\( f(x) = x - \\sin(x) \\) מקבלת ערך קיצון, אם קיימת כזו פנימית.&rlm;",
        options: ["אין קיצון פנימי (פונקציה עולה תמיד)", "x = 0.5π", "x = π : 3", "x = π : 4"],
        correctAnswer: 0,
        hint: "גזרו את הפונקציה (1 פחות קוסינוס). הנגזרת תמיד גדולה או שווה לאפס, כלומר הפונקציה עולה תמיד בתחום ואין לה קיצון פנימי שמחליף כיוון.",
        solution_steps: [
            { verbal_explanation: "ביצוע תהליך הגזירה הרגיל לחיבור פונקציות מסוג שונה.", math_expression: "f'(x) = 1 - \\cos(x)" },
            { verbal_explanation: "בדיקת ערכי הנגזרת והבנה שפונקציית הקוסינוס חסומה תמיד בין פלוס ומינוס אחת.", math_expression: "-1 \\leq \\cos(x) \\leq 1" },
            { verbal_explanation: "מתוך כך נסיק שהנגזרת כולה לעולם לא תהיה שלילית.", math_expression: "1 - \\cos(x) \\geq 0" },
            { verbal_explanation: "השוואה לאפס מוצאת שורשים רק בקצוות או בכפולות שלמים שאינם משנים מגמה.", math_expression: "\\cos(x) = 1 \\Rightarrow x = 0" },
            { verbal_explanation: "פונקציה שהנגזרת שלה אי-שלילית תמיד היא פונקציה עולה מונוטונית ללא קיצון החלפת מגמה.", math_expression: "Always \\ Increasing" },
            { verbal_explanation: "לכן אין נקודת קיצון פנימית אמיתית בתחום.", math_expression: "No \\ Internal \\ Extrema" }
        ],
        final_answer: "אין קיצון פנימי (פונקציה עולה תמיד)"
    },
    {
        topic: "trigonometry_472",
        subTopic: "מציאת משיקים ונקודות קיצון בתחום מוגדר (סגור)",
        question_text: "מצאו את נקודת המקסימום המקומי של הפונקציה \\( f(x) = \\sin^{2}(x) \\) בתחום הפתוח \\( 0 < x < \\pi \\).&rlm;",
        options: ["x = 0.5π", "x = 0.25π", "x = 0.75π", "x = π : 3"],
        correctAnswer: 0,
        hint: "הנגזרת היא פעמיים סינוס כפול קוסינוס, כלומר סינוס זווית כפולה. השוו ל-0 ופתרו ל-x בתחום.",
        solution_steps: [
            { verbal_explanation: "גזירה של הפונקציה המורכבת על ידי כלל השרשרת.", math_expression: "f'(x) = 2\\sin(x)\\cos(x)" },
            { verbal_explanation: "המרת הביטוי שנוצר לזהות הטריגונומטרית המקבילה עבור זווית כפולה לצרכי פשטות.", math_expression: "f'(x) = \\sin(2x)" },
            { verbal_explanation: "השוואת הפונקציה המצומצמת לאפס.", math_expression: "\\sin(2x) = 0" },
            { verbal_explanation: "איתור הפתרונות עבור הזווית הכפולה בתחום הרלוונטי.", math_expression: "2x = \\pi \\Rightarrow x = 0.5\\pi" },
            { verbal_explanation: "הצבת הפתרון לבדיקה בפונקציה המקורית. סינוס של תשעים מעלות הוא אחת, והוא מקסימלי.", math_expression: "f(0.5\\pi) = \\sin^{2}(0.5\\pi) = 1^{2} = 1" },
            { verbal_explanation: "אישור הנקודה כמוחלטת לתחום זה.", math_expression: "x = 0.5\\pi" }
        ],
        final_answer: "x = 0.5π"
    },
    {
        topic: "trigonometry_472",
        subTopic: "מציאת משיקים ונקודות קיצון בתחום מוגדר (סגור)",
        question_text: "נתונה הפונקציה \\( f(x) = 2\\sin(x) + \\cos(2x) \\). מצאו את נקודות הקיצון החשודות בתחום \\( 0 \\leq x \\leq 2\\pi \\). אילו מהנקודות הפנימיות הבאות היא נקודת מקסימום?&rlm;",
        options: ["x = π : 6 וגם x = 5π : 6", "x = 0.5π", "x = 1.5π", "x = π"],
        correctAnswer: 0,
        hint: "הנגזרת היא פעמיים קוסינוס פחות פעמיים סינוס זווית כפולה. השתמשו בזהות לסינוס זווית כפולה והוציאו קוסינוס כגורם משותף.",
        solution_steps: [
            { verbal_explanation: "גזירה מדורגת של הפונקציה.", math_expression: "f'(x) = 2\\cos(x) - 2\\sin(2x)" },
            { verbal_explanation: "המרת זווית כפולה כדי ליצור שפה משותפת של זוויות יחיד לפתרון המשוואה.", math_expression: "2\\cos(x) - 2(2\\sin(x)\\cos(x)) = 0" },
            { verbal_explanation: "הוצאת גורם משותף מרבי מהמשוואה כולה.", math_expression: "2\\cos(x)(1 - 2\\sin(x)) = 0" },
            { verbal_explanation: "פיצול לשני ערוצי פתרון. ערוץ ראשון מתאפס בנקודות הקיצון החצי-מעגליות.", math_expression: "\\cos(x) = 0 \\Rightarrow x = 0.5\\pi \\ , \\ 1.5\\pi" },
            { verbal_explanation: "ערוץ שני דורש מהסינוס להיות שווה לחצי בדיוק.", math_expression: "1 - 2\\sin(x) = 0 \\Rightarrow \\sin(x) = 0.5" },
            { verbal_explanation: "הזוויות המתאימות לערוץ השני בתחום הפתוח.", math_expression: "x = \\dfrac{\\pi}{6} \\quad , \\quad x = \\dfrac{5\\pi}{6}" },
            { verbal_explanation: "בדיקת ערכי הפונקציה מגלה שהנקודות מהערוץ השני מניבות את הערך הגדול ביותר ולכן הן המקסימום.", math_expression: "Max \\rightarrow \\dfrac{\\pi}{6} \\ , \\ \\dfrac{5\\pi}{6}" }
        ],
        final_answer: "x = π : 6 וגם x = 5π : 6"
    },
    {
        topic: "trigonometry_472",
        subTopic: "מציאת משיקים ונקודות קיצון בתחום מוגדר (סגור)",
        question_text: "באיזו נקודה x מתוך התחום הפתוח \\( 0 < x < \\pi \\) יש לפונקציה \\( f(x) = \\cos^{2}(x) - \\sin(x) \\) משיק אופקי?&rlm;",
        options: ["אין נקודה כזו בתחום", "x = 0.5π", "x = π : 6", "x = 0.25π"],
        correctAnswer: 1, // אבדוק: 2cos(-sin) - cos = -cos(2sin+1)=0. cos=0 -> x=pi/2. 2sin=-1 -> sin=-0.5 (לא בתחום 0,pi). התשובה pi/2 נכונה.
        hint: "משיק אופקי משמעותו שהנגזרת שווה לאפס. גזרו את הפונקציה לפי כלל השרשרת, הוציאו קוסינוס כגורם משותף, ופתרו בתחום.",
        solution_steps: [
            { verbal_explanation: "גזירת הפונקציה על ידי שילוב כלל שרשרת לאיבר הראשון וגזירה בסיסית לשני.", math_expression: "f'(x) = 2\\cos(x)(-\\sin(x)) - \\cos(x)" },
            { verbal_explanation: "השוואה לאפס והוצאת המינוס קוסינוס אל מחוץ לסוגריים לשם יצירת פקטוריזציה.", math_expression: "-\\cos(x)(2\\sin(x) + 1) = 0" },
            { verbal_explanation: "מסלול אפשרי ראשון לאיפוס מבוסס על איפוס הקוסינוס החיצוני.", math_expression: "\\cos(x) = 0 \\Rightarrow x = 0.5\\pi" },
            { verbal_explanation: "מסלול אפשרי שני דורש מהסינוס להיות שלילי.", math_expression: "2\\sin(x) + 1 = 0 \\Rightarrow \\sin(x) = -0.5" },
            { verbal_explanation: "סינוס אינו שלילי בחציו העליון של המעגל הנתון כגבולות השאלה.", math_expression: "0 < x < \\pi \\Rightarrow \\sin(x) > 0 \\Rightarrow \\emptyset" },
            { verbal_explanation: "נותרנו עם פתרון תקין יחיד למשיק אופקי בטווח הנדון.", math_expression: "x = 0.5\\pi" }
        ],
        final_answer: "x = 0.5π"
    },
    {
        topic: "trigonometry_472",
        subTopic: "מציאת משיקים ונקודות קיצון בתחום מוגדר (סגור)",
        question_text: "מהי משוואת המשיק לגרף הפונקציה \\( f(x) = x \\times \\sin(x) \\) בנקודה שבה \\( x = 0.5\\pi \\)?&rlm;",
        options: ["y = x", "y = 0.5πx", "y = -x + π", "y = x - 0.5π"],
        correctAnswer: 0,
        hint: "מציאת שיעור ה-y: הציבו בפונקציה וקבלו 0.5 פאי. למציאת השיפוע, גזרו לפי מכפלה (תקבלו 1) והציבו במשוואת ישר.",
        solution_steps: [
            { verbal_explanation: "הצבת נקודת האיקס בפונקציה המקורית לקבלת הקואורדינטה האנכית של נקודת ההשקה.", math_expression: "f(0.5\\pi) = 0.5\\pi \\times \\sin(0.5\\pi) = 0.5\\pi \\times 1 = 0.5\\pi" },
            { verbal_explanation: "ביצוע גזירה לפי חוקי מכפלה לפונקציה כולה.", math_expression: "f'(x) = 1 \\times \\sin(x) + x\\cos(x)" },
            { verbal_explanation: "הצבת הנקודה לתוך הנגזרת החדשה לקבלת השיפוע.", math_expression: "m = \\sin(0.5\\pi) + 0.5\\pi\\cos(0.5\\pi)" },
            { verbal_explanation: "חישוב הערכים הטריגונומטריים הקלאסיים.", math_expression: "m = 1 + 0.5\\pi \\times 0 = 1" },
            { verbal_explanation: "הרכבת משוואת הישר עם נקודת המפגש והשיפוע שחושב כעת.", math_expression: "y - 0.5\\pi = 1(x - 0.5\\pi)" },
            { verbal_explanation: "פתיחת הסוגריים וכינוס סופי המוביל לפונקציה מפורשת נקייה.", math_expression: "y = x" }
        ],
        final_answer: "y = x"
    },
    {
        topic: "trigonometry_472",
        subTopic: "מציאת משיקים ונקודות קיצון בתחום מוגדר (סגור)",
        question_text: "מצאו את הערך המקסימלי המוחלט של הפונקציה \\( f(x) = 3\\sin(2x) \\) בתחום \\( 0 \\leq x \\leq \\pi \\).&rlm;",
        options: ["3", "6", "1.5", "0"],
        correctAnswer: 0,
        hint: "פונקציית סינוס לכל זווית שהיא מוגבלת לערך מקסימלי של 1. לפיכך המקסימום של 3 סינוס חייב להיות 3. בדקו אם הזווית המביאה לערך זה (כאשר 2x שווה ל-0.5 פאי) נמצאת בתוך התחום.",
        solution_steps: [
            { verbal_explanation: "הבנת גבולות הגזרה הטבעיים של פונקציית הסינוס, ללא קשר לזווית המוזנת.", math_expression: "-1 \\leq \\sin(2x) \\leq 1" },
            { verbal_explanation: "הכפלת הטווח הטבעי במקדם הממשי הנמצא בפונקציה כדי לקבל את תקרת הערכים המוחלטת.", math_expression: "f(x)_{max} = 3 \\times 1 = 3" },
            { verbal_explanation: "בדיקת התכנות מתמטית על ידי אימות שהזווית המביאה למקסימום קיימת בתוך התחום המסופק.", math_expression: "\\sin(2x) = 1 \\Rightarrow 2x = 0.5\\pi" },
            { verbal_explanation: "חלוקה להשגת הזווית הבסיסית.", math_expression: "x = 0.25\\pi" },
            { verbal_explanation: "אימות כי הזווית מוכלת בגבולות האפס עד פאי הנתונים בתרגיל.", math_expression: "0 \\leq 0.25\\pi \\leq \\pi" },
            { verbal_explanation: "המסקנה ודאית, הערך המקסימלי הוא שלוש.", math_expression: "Max = 3" }
        ],
        final_answer: "3"
    },
    // ==========================================
    // תת נושא 5: חקירה מלאה ושרטוט גרף טריגונומטרי מחזורי (10 שאלות)
    // ==========================================

    {
        topic: "trigonometry_472",
        subTopic: "חקירה מלאה ושרטוט גרף טריגונומטרי מחזורי",
        question_text: "מהו המחזור (T) של הפונקציה הטריגונומטרית \\( f(x) = 3\\sin(2x) + 1 \\)?&rlm;",
        options: ["π", "2π", "0.5π", "4π"],
        correctAnswer: 0,
        hint: "המחזור של פונקציית סינוס בסיסית הוא שני פאי. כאשר זווית הסינוס מוכפלת במקדם b, המחזור החדש הוא שני פאי לחלק ל-b.",
        solution_steps: [
            { verbal_explanation: "זיהוי המקדם של המשתנה איקס בתוך זווית הפונקציה הטריגונומטרית.", math_expression: "b = 2" },
            { verbal_explanation: "כתיבת הנוסחה המקובלת למציאת מחזור של פונקציית סינוס או קוסינוס.", math_expression: "T = \\dfrac{2\\pi}{b}" },
            { verbal_explanation: "הצבת המקדם שמצאנו אל תוך הנוסחה.", math_expression: "T = \\dfrac{2\\pi}{2}" },
            { verbal_explanation: "צמצום השבר והגעה למחזור הסופי של הפונקציה (המספרים החופשיים מחוץ לסינוס לא משפיעים).", math_expression: "T = \\pi" }
        ],
        final_answer: "π"
    },
    {
        topic: "trigonometry_472",
        subTopic: "חקירה מלאה ושרטוט גרף טריגונומטרי מחזורי",
        question_text: "מצאו את נקודות החיתוך עם ציר ה-x של הפונקציה \\( f(x) = \\cos(x) - 0.5 \\) בתחום \\( 0 \\leq x \\leq 2\\pi \\).&rlm;",
        options: ["x = π : 3, x = 5π : 3", "x = π : 6, x = 11π : 6", "x = 0.5π, x = 1.5π", "x = 2π : 3, x = 4π : 3"],
        correctAnswer: 0,
        hint: "השוו את הפונקציה לאפס. עליכם לפתור את המשוואה: קוסינוס איקס שווה לחצי. זכרו שלקוסינוס יש שני פתרונות במעגל השלם (ברביע הראשון וברביע הרביעי).",
        solution_steps: [
            { verbal_explanation: "השוואת הפונקציה לאפס לשם מציאת נקודות חיתוך אופקיות.", math_expression: "\\cos(x) - 0.5 = 0" },
            { verbal_explanation: "העברת איבר לבידוד הפונקציה הטריגונומטרית.", math_expression: "\\cos(x) = 0.5" },
            { verbal_explanation: "מציאת הפתרון הבסיסי הראשון ברביע הראשון (קוסינוס של שישים מעלות).", math_expression: "x_{1} = \\dfrac{\\pi}{3}" },
            { verbal_explanation: "מציאת הפתרון המקביל ברביע הרביעי, על ידי חיסור הזווית ממעגל שלם.", math_expression: "x_{2} = 2\\pi - \\dfrac{\\pi}{3}" },
            { verbal_explanation: "ביצוע מכנה משותף לחיסור.", math_expression: "x_{2} = \\dfrac{6\\pi}{3} - \\dfrac{\\pi}{3}" },
            { verbal_explanation: "קבלת הפתרון השני בתחום המוגדר.", math_expression: "x_{2} = \\dfrac{5\\pi}{3}" }
        ],
        final_answer: "x = π : 3, x = 5π : 3"
    },
    {
        topic: "trigonometry_472",
        subTopic: "חקירה מלאה ושרטוט גרף טריגונומטרי מחזורי",
        question_text: "מצאו את נקודת החיתוך עם ציר ה-y של הפונקציה \\( f(x) = 2\\sin(x - 0.5\\pi) + 3 \\).&rlm;",
        options: ["(0, 1)", "(0, 3)", "(0, 5)", "(0, 2)"],
        correctAnswer: 0,
        hint: "לחיתוך עם ציר ה-y, הציבו x=0. חשבו את ערך הפונקציה. זכרו כי סינוס של מינוס 90 מעלות (או מינוס חצי פאי) הוא 1-.",
        solution_steps: [
            { verbal_explanation: "הצבת אפס במקום המשתנה איקס כדי למצוא חיתוך אנכי.", math_expression: "x = 0" },
            { verbal_explanation: "כתיבת הפונקציה עם ההצבה.", math_expression: "f(0) = 2\\sin(0 - 0.5\\pi) + 3" },
            { verbal_explanation: "חישוב הביטוי בתוך זווית הסינוס.", math_expression: "f(0) = 2\\sin(-0.5\\pi) + 3" },
            { verbal_explanation: "שימוש בערך הטריגונומטרי הידוע עבור זווית זו במעגל היחידה.", math_expression: "\\sin(-0.5\\pi) = -1" },
            { verbal_explanation: "הצבת הערך חזרה למשוואה וביצוע הכפל.", math_expression: "f(0) = 2 \\times (-1) + 3 = -2 + 3" },
            { verbal_explanation: "סכימה פשוטה לקבלת ערך הוואי הסופי והרכבת הנקודה.", math_expression: "f(0) = 1 \\Rightarrow (0, 1)" }
        ],
        final_answer: "(0, 1)"
    },
    {
        topic: "trigonometry_472",
        subTopic: "חקירה מלאה ושרטוט גרף טריגונומטרי מחזורי",
        question_text: "מהי נקודת המקסימום המוחלט של הפונקציה \\( f(x) = -4\\cos(x) + 2 \\) בתחום \\( 0 \\leq x \\leq 2\\pi \\)?&rlm;",
        options: ["(π, 6)", "(0, -2)", "(2π, -2)", "(0.5π, 2)"],
        correctAnswer: 0,
        hint: "הנגזרת היא 4 סינוס איקס. השוו לאפס, מצאו את הנקודות בתחום (אפס, פאי, שני פאי) והציבו את כולן בפונקציה המקורית כדי למצוא מי מהן נותנת את הערך הגבוה ביותר.",
        solution_steps: [
            { verbal_explanation: "גזירת הפונקציה. הנגזרת של קוסינוס היא מינוס סינוס, לכן המינוס המקורי מתבטל.", math_expression: "f'(x) = 4\\sin(x)" },
            { verbal_explanation: "השוואת הנגזרת לאפס לאיתור נקודות קיצון.", math_expression: "4\\sin(x) = 0 \\Rightarrow \\sin(x) = 0" },
            { verbal_explanation: "איתור הזוויות בתחום המאפסות את הסינוס.", math_expression: "x_{1} = 0 \\quad , \\quad x_{2} = \\pi \\quad , \\quad x_{3} = 2\\pi" },
            { verbal_explanation: "הצבת הנקודה הראשונה בפונקציה המקורית לבדיקת הגובה.", math_expression: "f(0) = -4\\cos(0) + 2 = -4(1) + 2 = -2" },
            { verbal_explanation: "הצבת הנקודה השנייה בפונקציה. קוסינוס פאי שווה למינוס אחת.", math_expression: "f(\\pi) = -4\\cos(\\pi) + 2 = -4(-1) + 2 = 4 + 2 = 6" },
            { verbal_explanation: "הצבת הנקודה השלישית לבדיקה.", math_expression: "f(2\\pi) = -4\\cos(2\\pi) + 2 = -4(1) + 2 = -2" },
            { verbal_explanation: "מסקנה: הערך הגדול ביותר מתקבל בנקודה האמצעית.", math_expression: "Max(\\pi, 6)" }
        ],
        final_answer: "(π, 6)"
    },
    {
        topic: "trigonometry_472",
        subTopic: "חקירה מלאה ושרטוט גרף טריגונומטרי מחזורי",
        question_text: "מהן משוואות האסימפטוטות האנכיות של הפונקציה \\( f(x) = \\tan(2x) \\) בתחום \\( 0 \\leq x \\leq \\pi \\)?&rlm;",
        options: ["x = 0.25π, x = 0.75π", "x = 0.5π", "x = 0, x = π", "x = 0.5π, x = π"],
        correctAnswer: 0,
        hint: "פונקציית טנגנס אינה מוגדרת כאשר הקוסינוס של הזווית שלה שווה לאפס. מצאו מתי קוסינוס של 2x שווה לאפס בתחום הנתון.",
        solution_steps: [
            { verbal_explanation: "הגדרת התנאי לאסימפטוטה אנכית בפונקציית טנגנס: המכנה (קוסינוס) שווה לאפס.", math_expression: "\\cos(2x) = 0" },
            { verbal_explanation: "מציאת הפתרון הכללי למשוואה הטריגונומטרית.", math_expression: "2x = 0.5\\pi + \\pi k" },
            { verbal_explanation: "חלוקה בשתיים לבידוד האיקס הטהור.", math_expression: "x = 0.25\\pi + 0.5\\pi k" },
            { verbal_explanation: "הצבת שלם מאופס לקבלת הפתרון הראשון בתחום.", math_expression: "k = 0 \\Rightarrow x_{1} = 0.25\\pi" },
            { verbal_explanation: "הצבת השלם הבא לקבלת הפתרון השני בתחום.", math_expression: "k = 1 \\Rightarrow x_{2} = 0.25\\pi + 0.5\\pi = 0.75\\pi" },
            { verbal_explanation: "בדיקת השלם הבא מעלה תוצאה מחוץ לגבולות התחום המוגדר.", math_expression: "k = 2 \\Rightarrow x_{3} = 1.25\\pi > \\pi" },
            { verbal_explanation: "סיכום שתי האסימפטוטות החוקיות.", math_expression: "x = 0.25\\pi \\quad , \\quad x = 0.75\\pi" }
        ],
        final_answer: "x = 0.25π, x = 0.75π"
    },
    {
        topic: "trigonometry_472",
        subTopic: "חקירה מלאה ושרטוט גרף טריגונומטרי מחזורי",
        question_text: "באילו מהתחומים הבאים הפונקציה \\( f(x) = \\sin(x) + x \\) יורדת?&rlm;",
        options: ["הפונקציה עולה לכל x (אין תחומי ירידה)", "x בין 0.5π ל- 1.5π", "x קטן מ-0", "x בין π ל- 2π"],
        correctAnswer: 0,
        hint: "גזרו את הפונקציה. הנגזרת היא קוסינוס פלוס 1. זכרו שקוסינוס תמיד נע בין 1- ל-1, ולכן הנגזרת לעולם אינה שלילית.",
        solution_steps: [
            { verbal_explanation: "גזירת הפונקציה המשלבת איבר טריגונומטרי ואיבר פולינומי.", math_expression: "f'(x) = \\cos(x) + 1" },
            { verbal_explanation: "הבנת טווח הערכים המוחלט של פונקציית הקוסינוס.", math_expression: "-1 \\leq \\cos(x) \\leq 1" },
            { verbal_explanation: "הוספת אחת לכל אגפי אי השוויון כדי לבנות את הנגזרת שלנו.", math_expression: "0 \\leq \\cos(x) + 1 \\leq 2" },
            { verbal_explanation: "מסקנה: הנגזרת תמיד גדולה או שווה לאפס לכל איקס ממשי.", math_expression: "f'(x) \\geq 0" },
            { verbal_explanation: "פונקציה שהנגזרת שלה אי-שלילית לעולם אינה יורדת. לכל היותר היא מתעכבת בנקודת פיתול.", math_expression: "Never \\ Decreasing" }
        ],
        final_answer: "הפונקציה עולה לכל x (אין תחומי ירידה)"
    },
    {
        topic: "trigonometry_472",
        subTopic: "חקירה מלאה ושרטוט גרף טריגונומטרי מחזורי",
        question_text: "נתון גרף של פונקציה טריגונומטרית מחזורית. הגרף חותך את ציר ה-y בנקודה (0, 3), מגיע למינימום המוחלט שלו בנקודה (π, -1) ועולה חזרה למקסימום ב-(2π, 3). איזו פונקציה מבין הבאות מתאימה לתיאור ומוצגת באיור?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 300 220' style='max-width:300px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='150' x2='280' y2='150' stroke='#94a3b8' stroke-width='2'/><line x1='40' y1='20' x2='40' y2='200' stroke='#94a3b8' stroke-width='2'/><path d='M 40 30 C 80 30, 100 190, 140 190 C 180 190, 200 30, 240 30' fill='none' stroke='#3b82f6' stroke-width='2'/><circle cx='40' cy='30' r='4' fill='#ef4444'/><circle cx='140' cy='190' r='4' fill='#ef4444'/><circle cx='240' cy='30' r='4' fill='#ef4444'/><text x='50' y='35' font-size='12' font-family='Arial'>(0,3)</text><text x='130' y='210' font-size='12' font-family='Arial'>(π,-1)</text><text x='250' y='35' font-size='12' font-family='Arial'>(2π,3)</text></svg></div>",
        options: ["f(x) = 2cos(x) + 1", "f(x) = 2sin(x) + 1", "f(x) = cos(2x) + 2", "f(x) = 3cos(x)"],
        correctAnswer: 0,
        hint: "חשבו את האמפליטודה: מקסימום פחות מינימום, חלקי 2. חשבו את ההזזה האנכית: מקסימום פלוס מינימום, חלקי 2. מכיוון שהיא מתחילה במקסימום ב-x=0, זוהי פונקציית קוסינוס חיובית.",
        solution_steps: [
            { verbal_explanation: "חישוב המשרעת (אמפליטודה) כהפרש בין פסגות הגרף חלקי שתיים.", math_expression: "A = \\dfrac{3 - (-1)}{2} = \\dfrac{4}{2} = 2" },
            { verbal_explanation: "חישוב ההזזה האנכית של הפונקציה כממוצע בין הפסגות.", math_expression: "D = \\dfrac{3 + (-1)}{2} = \\dfrac{2}{2} = 1" },
            { verbal_explanation: "הבחנה בכך שנקודת ההתחלה של המחזור על ציר האפס היא במקסימום, תכונה קלאסית של קוסינוס.", math_expression: "\\cos(0) = 1 \\Rightarrow Max" },
            { verbal_explanation: "הרכבת התבנית הכללית של הפונקציה על בסיס הפרמטרים שחושבו.", math_expression: "f(x) = A\\cos(x) + D" },
            { verbal_explanation: "הצבת הפרמטרים במשוואה.", math_expression: "f(x) = 2\\cos(x) + 1" },
            { verbal_explanation: "בדיקת אימות מול נקודת המינימום בפאי.", math_expression: "f(\\pi) = 2\\cos(\\pi) + 1 = 2(-1) + 1 = -1" }
        ],
        final_answer: "f(x) = 2cos(x) + 1"
    },
    {
        topic: "trigonometry_472",
        subTopic: "חקירה מלאה ושרטוט גרף טריגונומטרי מחזורי",
        question_text: "כמה פתרונות (נקודות חיתוך) יש למשוואה \\( \\sin(3x) = 0.5 \\) בתחום \\( 0 \\leq x \\leq \\pi \\)?&rlm;",
        options: ["3", "6", "2", "4"],
        correctAnswer: 0,
        hint: "מצאו את המחזור של הפונקציה (שני פאי חלקי 3). בתחום הנתון (פאי אחד) נכנסים בדיוק 1.5 מחזורים. לסינוס יש 2 פתרונות למחזור שלם.",
        solution_steps: [
            { verbal_explanation: "הגדרת משתנה עזר זמני כדי לפשט את המשוואה הבסיסית.", math_expression: "u = 3x" },
            { verbal_explanation: "עדכון תחום החיפוש על פי המשתנה החדש (הכפלת הקצוות בשלוש).", math_expression: "0 \\leq u \\leq 3\\pi" },
            { verbal_explanation: "הצבת המשתנה במשוואה הטריגונומטרית.", math_expression: "\\sin(u) = 0.5" },
            { verbal_explanation: "מציאת הפתרונות במחזור הראשון (אפס עד שני פאי).", math_expression: "u_{1} = \\dfrac{\\pi}{6} \\quad , \\quad u_{2} = \\dfrac{5\\pi}{6}" },
            { verbal_explanation: "מציאת פתרונות במחזור הבא על ידי הוספת מחזור שלם (שני פאי) לפתרון הראשון. התוצאה קטנה משלוש פאי ולכן חוקית.", math_expression: "u_{3} = \\dfrac{\\pi}{6} + 2\\pi = \\dfrac{13\\pi}{6}" },
            { verbal_explanation: "ניסיון הוספת מחזור לפתרון השני מניב שבע עשרה חלקי שש פאי, שהוא גדול משלוש ולכן נפסל. מצאנו שלושה פתרונות.", math_expression: "n = 3" }
        ],
        final_answer: "3"
    },
    {
        topic: "trigonometry_472",
        subTopic: "חקירה מלאה ושרטוט גרף טריגונומטרי מחזורי",
        question_text: "נתונה הפונקציה \\( f(x) = a\\sin(x) + c \\) (כאשר a חיובי). המקסימום המוחלט של הפונקציה הוא 7, והמינימום המוחלט שלה הוא 1. מצאו את ההזזה האנכית של הפונקציה (הפרמטר c).&rlm;",
        options: ["4", "3", "6", "8"],
        correctAnswer: 0,
        hint: "המקסימום של סינוס הוא 1 (ולכן a+c=7). המינימום הוא 1- (ולכן a+c=1-). חברו את שתי המשוואות ומצאו את c.",
        solution_steps: [
            { verbal_explanation: "כתיבת ביטוי לנקודת המקסימום המוחלט על בסיס ערך הסינוס הגבוה ביותר.", math_expression: "a \\times 1 + c = 7 \\Rightarrow a + c = 7" },
            { verbal_explanation: "כתיבת ביטוי לנקודת המינימום המוחלט על בסיס ערך הסינוס הנמוך ביותר.", math_expression: "a \\times (-1) + c = 1 \\Rightarrow -a + c = 1" },
            { verbal_explanation: "חיבור אלגברי של שתי המשוואות כדי לבטל את מקדם האמפליטודה.", math_expression: "(a + c) + (-a + c) = 7 + 1" },
            { verbal_explanation: "כינוס איברים פשוט.", math_expression: "2c = 8" },
            { verbal_explanation: "חלוקה בשתיים לבידוד ההזזה האנכית הנדרשת.", math_expression: "c = 4" },
            { verbal_explanation: "בדיקה צדדית: אם האמצע הוא ארבע, המשרעת היא שלוש. הגיוני.", math_expression: "a = 3" }
        ],
        final_answer: "4"
    },
    {
        topic: "trigonometry_472",
        subTopic: "חקירה מלאה ושרטוט גרף טריגונומטרי מחזורי",
        question_text: "מהי משוואת המשיק לגרף הפונקציה \\( f(x) = 2\\sin(x)\\cos(x) \\) בנקודה שבה \\( x = 0.5\\pi \\)?&rlm;",
        options: ["y = -2x + π", "y = 2x - π", "y = -x + 0.5π", "y = 0"],
        correctAnswer: 0,
        hint: "לפני הגזירה, זהו את הפונקציה כזהות טריגונומטרית מוכרת (סינוס זווית כפולה). זה יקל מאוד על החישוב. לאחר מכן גזרו, מצאו שיפוע ונקודה.",
        solution_steps: [
            { verbal_explanation: "שימוש בזהות טריגונומטרית פשוטה לפישוט הפונקציה לפני העבודה עליה.", math_expression: "f(x) = \\sin(2x)" },
            { verbal_explanation: "הצבת נקודת האיקס כדי למצוא את קואורדינטת ההשקה האנכית.", math_expression: "f(0.5\\pi) = \\sin(2 \\times 0.5\\pi) = \\sin(\\pi) = 0" },
            { verbal_explanation: "גזירת הפונקציה המפושטת בעזרת כלל השרשרת.", math_expression: "f'(x) = 2\\cos(2x)" },
            { verbal_explanation: "הצבה בנגזרת למציאת שיפוע המשיק בנקודה זו.", math_expression: "m = f'(0.5\\pi) = 2\\cos(\\pi)" },
            { verbal_explanation: "חישוב השיפוע (קוסינוס פאי הוא מינוס אחת).", math_expression: "m = 2 \\times (-1) = -2" },
            { verbal_explanation: "הרכבת משוואת המשיק על בסיס הנקודה והשיפוע.", math_expression: "y - 0 = -2(x - 0.5\\pi)" },
            { verbal_explanation: "פתיחת סוגריים לביטוי נקי ומוגמר.", math_expression: "y = -2x + \\pi" }
        ],
        final_answer: "y = -2x + π"
    }
];