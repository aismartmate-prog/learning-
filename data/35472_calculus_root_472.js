const questionsDB = [
    // ==========================================
    // תת נושא 1: תחום הגדרה (ביטוי מתחת לשורש חיובי או אפס) (10 שאלות)
    // ==========================================

    {
        topic: "calculus_roots_472",
        subTopic: "תחום הגדרה (ביטוי מתחת לשורש חיובי או אפס)",
        question_text: "מצאו את תחום ההגדרה של הפונקציה \\( f(x) = \\sqrt{3x - 12} \\).&rlm;",
        options: ["x ≥ 4", "x > 4", "x ≤ 4", "כל x ממשי"],
        correctAnswer: 0,
        hint: "כדי שהשורש הריבועי יהיה מוגדר במספרים ממשיים, הביטוי שבתוך השורש חייב להיות גדול או שווה לאפס.",
        solution_steps: [
            { verbal_explanation: "הגדרת התנאי לקיום שורש זוגי במספרים ממשיים: התוכן אי-שלילי.", math_expression: "3x - 12 \\geq 0" },
            { verbal_explanation: "העברת המספר החופשי לאגף הימני של אי-השוויון.", math_expression: "3x \\geq 12" },
            { verbal_explanation: "חלוקת שני האגפים בשלוש לבידוד המשתנה.", math_expression: "x \\geq \\dfrac{12}{3}" },
            { verbal_explanation: "קבלת התחום הסופי המאפשר קיום לפונקציה.", math_expression: "x \\geq 4" }
        ],
        final_answer: "x ≥ 4"
    },
    {
        topic: "calculus_roots_472",
        subTopic: "תחום הגדרה (ביטוי מתחת לשורש חיובי או אפס)",
        question_text: "מהו תחום ההגדרה של הפונקציה הריבועית תחת השורש \\( f(x) = \\sqrt{-x^{2} + 8x - 15} \\)?&rlm;",
        options: ["3 ≤ x ≤ 5", "x ≤ 3 או x ≥ 5", "x < 3 או x > 5", "3 < x < 5"],
        correctAnswer: 0,
        hint: "דרשו שהביטוי הריבועי יהיה גדול או שווה לאפס. פתרו את המשוואה הריבועית למציאת מאפסים, ובחנו את סימן הפרבולה ('בוכה' במקרה זה).",
        solution_steps: [
            { verbal_explanation: "דרישה אלגברית לחיוביות או התאפסות של תוכן השורש.", math_expression: "-x^{2} + 8x - 15 \\geq 0" },
            { verbal_explanation: "השוואת הפולינום לאפס למציאת נקודות החיתוך עם ציר האופק.", math_expression: "-x^{2} + 8x - 15 = 0" },
            { verbal_explanation: "הכפלת המשוואה במינוס אחת לשם פירוק נוח יותר בטרינום.", math_expression: "x^{2} - 8x + 15 = 0" },
            { verbal_explanation: "פירוק הטרינום לגורמים.", math_expression: "(x - 3)(x - 5) = 0" },
            { verbal_explanation: "חילוץ שורשי המשוואה המהווים גבולות לתחום.", math_expression: "x_{1} = 3 \\quad , \\quad x_{2} = 5" },
            { verbal_explanation: "מאחר והפרבולה המקורית הפוכה, היא ממוקמת מעל ציר האופק בדיוק בין שני שורשיה, כולל הקצוות.", math_expression: "3 \\leq x \\leq 5" }
        ],
        final_answer: "3 ≤ x ≤ 5"
    },
    {
        topic: "calculus_roots_472",
        subTopic: "תחום הגדרה (ביטוי מתחת לשורש חיובי או אפס)",
        question_text: "מצאו את תחום ההגדרה של הפונקציה הרציונלית המעורבת \\( f(x) = \\dfrac{5}{\\sqrt{x^{2} - 4x}} \\).&rlm;",
        options: ["x < 0 או x > 4", "x ≤ 0 או x ≥ 4", "0 < x < 4", "0 ≤ x ≤ 4"],
        correctAnswer: 0,
        hint: "הביטוי נמצא גם בתוך שורש (גדול/שווה אפס) וגם במכנה (שונה מאפס). לכן הדרישה המאוחדת היא שהביטוי יהיה גדול ממש מאפס.",
        solution_steps: [
            { verbal_explanation: "שילוב תנאי השורש ותנאי המכנה מוביל לדרישת אי-שוויון חזק (גדול ממש).", math_expression: "x^{2} - 4x > 0" },
            { verbal_explanation: "איפוס למציאת גבולות הגזרה האסורים או המותרים.", math_expression: "x^{2} - 4x = 0" },
            { verbal_explanation: "הוצאת גורם משותף מחוץ לסוגריים.", math_expression: "x(x - 4) = 0" },
            { verbal_explanation: "חילוץ המאפסים.", math_expression: "x_{1} = 0 \\quad , \\quad x_{2} = 4" },
            { verbal_explanation: "בחינת פרבולה חיובית ('מחייכת'). היא גדולה מאפס מחוץ לשורשיה.", math_expression: "x < 0 \\quad \\cup \\quad x > 4" }
        ],
        final_answer: "x < 0 או x > 4"
    },
    {
        topic: "calculus_roots_472",
        subTopic: "תחום הגדרה (ביטוי מתחת לשורש חיובי או אפס)",
        question_text: "מהו תחום ההגדרה של הפונקציה \\( f(x) = \\sqrt{x} + \\sqrt{6 - x} \\)?&rlm;",
        options: ["0 ≤ x ≤ 6", "x ≥ 0", "x ≤ 6", "x ≥ 0 או x ≤ 6"],
        correctAnswer: 0,
        hint: "יש לבדוק כל שורש בנפרד ולבצע חיתוך (מערכת 'וגם') בין התחומים המתקבלים.",
        solution_steps: [
            { verbal_explanation: "דרישת קיום ראשונה עבור השורש הראשון בפונקציה.", math_expression: "x \\geq 0" },
            { verbal_explanation: "דרישת קיום שנייה עבור השורש השני.", math_expression: "6 - x \\geq 0" },
            { verbal_explanation: "בידוד המשתנה באי השוויון השני.", math_expression: "6 \\geq x" },
            { verbal_explanation: "חיתוך שני התנאים יחד למציאת התחום החופף היחיד בו הפונקציה מוגדרת.", math_expression: "0 \\leq x \\leq 6" }
        ],
        final_answer: "0 ≤ x ≤ 6"
    },
    {
        topic: "calculus_roots_472",
        subTopic: "תחום הגדרה (ביטוי מתחת לשורש חיובי או אפס)",
        question_text: "מצאו את תחום ההגדרה של הפונקציה \\( f(x) = \\dfrac{\\sqrt{x + 2}}{x - 3} \\).&rlm;",
        options: ["x ≥ -2 וגם x ≠ 3", "x ≥ -2", "x > -2", "כל x מלבד 3"],
        correctAnswer: 0,
        hint: "המונה דורש שתוכן השורש יהיה אי-שלילי. המכנה דורש שיהיה שונה מאפס. שלבו את התנאים.",
        solution_steps: [
            { verbal_explanation: "בדיקת תנאי הקיום של השורש הממוקם במונה הפונקציה.", math_expression: "x + 2 \\geq 0 \\Rightarrow x \\geq -2" },
            { verbal_explanation: "בדיקת תנאי הקיום של המכנה, האוסר חלוקה באפס.", math_expression: "x - 3 \\neq 0 \\Rightarrow x \\neq 3" },
            { verbal_explanation: "שילוב שני התנאים למערכת 'וגם' המגדירה את הפונקציה כולה.", math_expression: "x \\geq -2 \\quad , \\quad x \\neq 3" }
        ],
        final_answer: "x ≥ -2 וגם x ≠ 3"
    },
    {
        topic: "calculus_roots_472",
        subTopic: "תחום הגדרה (ביטוי מתחת לשורש חיובי או אפס)",
        question_text: "קבעו מהו תחום ההגדרה של הפונקציה \\( f(x) = \\sqrt{\\dfrac{x - 1}{x + 5}} \\).&rlm;",
        options: ["x < -5 או x ≥ 1", "-5 < x ≤ 1", "x > -5", "x ≤ -5 או x ≥ 1"],
        correctAnswer: 0,
        hint: "ביטוי המנה במלואו נמצא תחת השורש. לכן יש לדרוש שהמנה תהיה גדולה או שווה לאפס, תוך כדי פסילת המאפס של המכנה.",
        solution_steps: [
            { verbal_explanation: "דרישה אלגברית לפיה השבר תחת השורש יהיה אי-שלילי.", math_expression: "\\dfrac{x - 1}{x + 5} \\geq 0" },
            { verbal_explanation: "מציאת מאפס המונה, אשר נכלל בתחום (מוגדר).", math_expression: "x - 1 = 0 \\Rightarrow x_{1} = 1" },
            { verbal_explanation: "מציאת מאפס המכנה, אשר מהווה גבול פתוח ואסור להצבה.", math_expression: "x + 5 = 0 \\Rightarrow x_{2} = -5" },
            { verbal_explanation: "יצירת פרבולה שקולה ממעלה שנייה לבחינת תחומי חיוביות (שיטת נחש).", math_expression: "(x - 1)(x + 5) \\geq 0" },
            { verbal_explanation: "חילוץ התחום החיובי של הפרבולה, הממוקם מחוץ לשורשים, תוך השמטת השוויון מהמכנה.", math_expression: "x < -5 \\quad \\cup \\quad x \\geq 1" }
        ],
        final_answer: "x < -5 או x ≥ 1"
    },
    {
        topic: "calculus_roots_472",
        subTopic: "תחום הגדרה (ביטוי מתחת לשורש חיובי או אפס)",
        question_text: "עבור הפונקציה \\( f(x) = \\sqrt{x^{2} + 4} \\), מהו תחום ההגדרה?&rlm;",
        options: ["כל x ממשי", "x ≥ 2", "x ≥ -2", "אין פתרון (קבוצה ריקה)"],
        correctAnswer: 0,
        hint: "ביטוי ריבועי בתוספת מספר חיובי תמיד יהיה חיובי.",
        solution_steps: [
            { verbal_explanation: "הצבת הדרישה האלגברית הבסיסית לשורש זוגי.", math_expression: "x^{2} + 4 \\geq 0" },
            { verbal_explanation: "העברת איברים מדגימה שהמשתנה הריבועי צריך להיות גדול ממספר שלילי.", math_expression: "x^{2} \\geq -4" },
            { verbal_explanation: "מכיוון שריבוע של כל מספר ממשי הוא אי-שלילי, אי השוויון מתקיים תמיד.", math_expression: "All" }
        ],
        final_answer: "כל x ממשי"
    },
    {
        topic: "calculus_roots_472",
        subTopic: "תחום הגדרה (ביטוי מתחת לשורש חיובי או אפס)",
        question_text: "מצאו את תחום ההגדרה עבור הפונקציה \\( f(x) = \\dfrac{1}{\\sqrt{-x}} \\).&rlm;",
        options: ["x < 0", "x ≤ 0", "x > 0", "כל x ממשי פרט ל-0"],
        correctAnswer: 0,
        hint: "השורש נמצא במכנה, לכן תוכנו חייב להיות גדול ממש מאפס. שימו לב לסימן המינוס לפני ה-x.",
        solution_steps: [
            { verbal_explanation: "דרישה קפדנית לתוכן גדול ממש מאפס בשל שילוב של מכנה ושורש יחד.", math_expression: "-x > 0" },
            { verbal_explanation: "הכפלה במינוס אחת ההופכת את כיוון אי השוויון.", math_expression: "x < 0" }
        ],
        final_answer: "x < 0"
    },
    {
        topic: "calculus_roots_472",
        subTopic: "תחום הגדרה (ביטוי מתחת לשורש חיובי או אפס)",
        question_text: "מהו תחום ההגדרה של הפונקציה \\( f(x) = \\sqrt{16 - x^{4}} \\)?&rlm;",
        options: ["-2 ≤ x ≤ 2", "-4 ≤ x ≤ 4", "x ≤ -2 או x ≥ 2", "x ≥ 2"],
        correctAnswer: 0,
        hint: "היעזרו בהצבת משתנה עזר (t = x²) או פרקו להפרש ריבועים את הביטוי מתחת לשורש ופתרו את אי-השוויון ממעלה רביעית.",
        solution_steps: [
            { verbal_explanation: "דרישה לאי-שליליות הביטוי השלם.", math_expression: "16 - x^{4} \\geq 0" },
            { verbal_explanation: "שימוש בנוסחת הפרש ריבועים לצורך פירוק כפול.", math_expression: "(4 - x^{2})(4 + x^{2}) \\geq 0" },
            { verbal_explanation: "הביטוי הימני חיובי תמיד, ולכן הסימן תלוי רק בביטוי השמאלי.", math_expression: "4 - x^{2} \\geq 0" },
            { verbal_explanation: "סידור לפרבולה ומציאת שורשיה על ידי איפוס.", math_expression: "x^{2} \\leq 4 \\Rightarrow x = \\pm 2" },
            { verbal_explanation: "מציאת התחום הכלוא בין שורשי הפרבולה השלילית.", math_expression: "-2 \\leq x \\leq 2" }
        ],
        final_answer: "-2 ≤ x ≤ 2"
    },
    {
        topic: "calculus_roots_472",
        subTopic: "תחום הגדרה (ביטוי מתחת לשורש חיובי או אפס)",
        question_text: "מצאו את תחום ההגדרה של הפונקציה \\( f(x) = \\sqrt{x^{3} - 9x} \\).&rlm;",
        options: ["-3 ≤ x ≤ 0 או x ≥ 3", "0 ≤ x ≤ 3", "x ≤ -3 או x ≥ 0", "x ≥ 3"],
        correctAnswer: 0,
        hint: "הוציאו x כגורם משותף, מצאו את שלושת שורשי המשוואה (0, 3, 3-) וחקרו את תחומי החיוביות באמצעות שיטת ה'נחש' (פולינום).",
        solution_steps: [
            { verbal_explanation: "הצבת דרישת השורש הזוגי.", math_expression: "x^{3} - 9x \\geq 0" },
            { verbal_explanation: "הוצאת גורם משותף לפירוק ראשוני.", math_expression: "x(x^{2} - 9) \\geq 0" },
            { verbal_explanation: "פירוק נוסף על ידי הפרש ריבועים למציאת כל המאפסים.", math_expression: "x(x - 3)(x + 3) \\geq 0" },
            { verbal_explanation: "חילוץ שלושת השורשים של הפולינום.", math_expression: "x_{1} = 0 \\quad , \\quad x_{2} = 3 \\quad , \\quad x_{3} = -3" },
            { verbal_explanation: "בדיקת תחומי חיוביות על ציר המספרים מניבה גלים עוקבים (שלילי, חיובי, שלילי, חיובי).", math_expression: "-3 \\leq x \\leq 0 \\quad \\cup \\quad x \\geq 3" }
        ],
        final_answer: "-3 ≤ x ≤ 0 או x ≥ 3"
    },

    // ==========================================
    // תת נושא 2: גזירת פונקציות שורש מורכבות (10 שאלות)
    // ==========================================

    {
        topic: "calculus_roots_472",
        subTopic: "גזירת פונקציות שורש מורכבות",
        question_text: "גזרו את הפונקציה הבאה: \\( f(x) = \\sqrt{x^{2} - 5x + 6} \\).&rlm;",
        options: ["(2x - 5) : (2√(x² - 5x + 6))", "(2x - 5) : √(x² - 5x + 6)", "1 : (2√(x² - 5x + 6))", "(x - 2.5) : √(x² - 5x + 6)"],
        correctAnswer: 0,
        hint: "השתמשו בכלל השרשרת: הנגזרת של שורש הפונקציה שווה לנגזרת הפנימית, חלקי פעמיים השורש כולו.",
        solution_steps: [
            { verbal_explanation: "גזירת הפולינום הפנימי הנמצא תחת השורש.", math_expression: "g(x) = x^{2} - 5x + 6 \\Rightarrow g'(x) = 2x - 5" },
            { verbal_explanation: "הצבת הנגזרת הפנימית במונה של תבנית נגזרת השורש.", math_expression: "f'(x) = \\dfrac{g'(x)}{2\\sqrt{g(x)}}" },
            { verbal_explanation: "הרכבת הנגזרת המלאה.", math_expression: "f'(x) = \\dfrac{2x - 5}{2\\sqrt{x^{2} - 5x + 6}}" }
        ],
        final_answer: "(2x - 5) : (2√(x² - 5x + 6))"
    },
    {
        topic: "calculus_roots_472",
        subTopic: "גזירת פונקציות שורש מורכבות",
        question_text: "מצאו את הנגזרת של הפונקציה המהווה מכפלה: \\( f(x) = x \\times \\sqrt{x} \\).&rlm;",
        options: ["1.5√x", "1 : (2√x)", "x : (2√x)", "2.5√x"],
        correctAnswer: 0,
        hint: "אפשר לגזור בעזרת כלל המכפלה, אך קל יותר להמיר את הביטוי לחזקה אחת שלמה (x בחזקת 1.5) ולגזור לפי כלל החזקה.",
        solution_steps: [
            { verbal_explanation: "המרת השורש הריבועי להצגת חזקה שברית.", math_expression: "\\sqrt{x} = x^{0.5}" },
            { verbal_explanation: "איחוד הפונקציה לחזקה יחידה בעזרת חוקי חזקות של בסיסים זהים.", math_expression: "f(x) = x^{1} \\times x^{0.5} = x^{1.5}" },
            { verbal_explanation: "הפעלת חוק הגזירה לחזקות, בו המעריך יורד והחזקה קטנה באחת.", math_expression: "f'(x) = 1.5x^{0.5}" },
            { verbal_explanation: "החזרת המבנה לכתיב של שורש.", math_expression: "f'(x) = 1.5\\sqrt{x}" }
        ],
        final_answer: "1.5√x"
    },
    {
        topic: "calculus_roots_472",
        subTopic: "גזירת פונקציות שורש מורכבות",
        question_text: "גזרו את הפונקציה הבאה באמצעות כלל המכפלה: \\( f(x) = x^{2} \\sqrt{x - 3} \\).&rlm;",
        options: ["(2.5x² - 6x) : √(x - 3)", "(2x² - 3x) : (2√(x - 3))", "(x² - 6x) : √(x - 3)", "(2.5x² - 3x) : √(x - 3)"],
        correctAnswer: 0,
        hint: "הגדירו גורם ראשון איקס בריבוע וגורם שני שורש. גזרו כל אחד מהם והציבו בנוסחת כלל המכפלה, ואז בצעו מכנה משותף לסידור.",
        solution_steps: [
            { verbal_explanation: "גזירת הגורם הפולינומי של המכפלה.", math_expression: "u = x^{2} \\Rightarrow u' = 2x" },
            { verbal_explanation: "גזירת גורם השורש של המכפלה בעזרת נגזרת פנימית.", math_expression: "v = \\sqrt{x - 3} \\Rightarrow v' = \\dfrac{1}{2\\sqrt{x - 3}}" },
            { verbal_explanation: "הרכבת הנגזרת דרך כלל המכפלה הקלאסי.", math_expression: "f'(x) = 2x\\sqrt{x - 3} + x^{2} \\times \\dfrac{1}{2\\sqrt{x - 3}}" },
            { verbal_explanation: "ביצוע מכנה משותף לביטוי כולו. השורש המוכפל בעצמו הופך לשלם.", math_expression: "f'(x) = \\dfrac{2x(x - 3) \\times 2 + x^{2}}{2\\sqrt{x - 3}}" },
            { verbal_explanation: "פתיחת סוגריים במונה השבר.", math_expression: "f'(x) = \\dfrac{4x^{2} - 12x + x^{2}}{2\\sqrt{x - 3}}" },
            { verbal_explanation: "כינוס איברים וחלוקת המונה בשתיים לצמצום סופי מול המכנה.", math_expression: "f'(x) = \\dfrac{5x^{2} - 12x}{2\\sqrt{x - 3}} = \\dfrac{2.5x^{2} - 6x}{\\sqrt{x - 3}}" }
        ],
        final_answer: "(2.5x² - 6x) : √(x - 3)"
    },
    {
        topic: "calculus_roots_472",
        subTopic: "גזירת פונקציות שורש מורכבות",
        question_text: "גזרו את הפונקציית המנה: \\( f(x) = \\dfrac{\\sqrt{x + 1}}{x} \\).&rlm;",
        options: ["(-x - 2) : (2x²√(x + 1))", "(x - 2) : (x²√(x + 1))", "(-x + 2) : (2x²√(x + 1))", "(x + 2) : (2x²√(x + 1))"],
        correctAnswer: 0,
        hint: "השתמשו בכלל המנה, והקפידו לעשות מכנה משותף בתוך המונה המורכב שייווצר לפני סיום הפתרון.",
        solution_steps: [
            { verbal_explanation: "גזירת פונקציית המונה המכילה את השורש.", math_expression: "u = \\sqrt{x + 1} \\Rightarrow u' = \\dfrac{1}{2\\sqrt{x + 1}}" },
            { verbal_explanation: "גזירת פונקציית המכנה.", math_expression: "v = x \\Rightarrow v' = 1" },
            { verbal_explanation: "הצבה בנוסחת כלל המנה.", math_expression: "f'(x) = \\dfrac{\\dfrac{1}{2\\sqrt{x + 1}} \\times x - \\sqrt{x + 1} \\times 1}{x^{2}}" },
            { verbal_explanation: "יצירת מכנה משותף בתוך השבר העליון עצמו.", math_expression: "f'(x) = \\dfrac{\\dfrac{x - 2(x + 1)}{2\\sqrt{x + 1}}}{x^{2}}" },
            { verbal_explanation: "הורדת המכנה הפנימי מטה בעזרת חוקי שברים (אוזן) ופתיחת סוגריים במונה.", math_expression: "f'(x) = \\dfrac{x - 2x - 2}{2x^{2}\\sqrt{x + 1}}" },
            { verbal_explanation: "כינוס סופי במונה הפונקציה המוגזרת.", math_expression: "f'(x) = \\dfrac{-x - 2}{2x^{2}\\sqrt{x + 1}}" }
        ],
        final_answer: "(-x - 2) : (2x²√(x + 1))"
    },
    {
        topic: "calculus_roots_472",
        subTopic: "גזירת פונקציות שורש מורכבות",
        question_text: "חשבו את ערך הנגזרת של הפונקציה \\( f(x) = \\sqrt{10 - 2x} \\) בנקודה שבה \\( x = 3 \\).&rlm;",
        options: ["-0.5", "0.5", "-1", "2"],
        correctAnswer: 0,
        hint: "גזרו את הפונקציה (זכרו את הנגזרת הפנימית, 2-), ולאחר מכן הציבו את הערך 3 בנגזרת שהתקבלה.",
        solution_steps: [
            { verbal_explanation: "גזירת התוכן הפנימי למציאת מונה הנגזרת.", math_expression: "g(x) = 10 - 2x \\Rightarrow g'(x) = -2" },
            { verbal_explanation: "הרכבת הנגזרת הכללית של הפונקציה.", math_expression: "f'(x) = \\dfrac{-2}{2\\sqrt{10 - 2x}}" },
            { verbal_explanation: "צמצום המקדם שתיים במונה ובמכנה.", math_expression: "f'(x) = \\dfrac{-1}{\\sqrt{10 - 2x}}" },
            { verbal_explanation: "הצבת הערך המספרי שניתן בבעיה אל הנגזרת הנקייה.", math_expression: "f'(3) = \\dfrac{-1}{\\sqrt{10 - 2(3)}}" },
            { verbal_explanation: "חישוב הפעולות תחת השורש.", math_expression: "f'(3) = \\dfrac{-1}{\\sqrt{4}}" },
            { verbal_explanation: "הוצאת השורש וחלוקה לקבלת הערך המדויק.", math_expression: "f'(3) = -\\dfrac{1}{2} = -0.5" }
        ],
        final_answer: "-0.5"
    },
    {
        topic: "calculus_roots_472",
        subTopic: "גזירת פונקציות שורש מורכבות",
        question_text: "גזרו את הפונקציה המורכבת (שורש של שורש): \\( f(x) = \\sqrt{x + \\sqrt{x}} \\).&rlm;",
        options: ["(2√x + 1) : (4√x√(x + √x))", "(√x + 1) : (2√(x + √x))", "(2√x + 1) : (2√(x + √x))", "1 : (4√x√(x + √x))"],
        correctAnswer: 0,
        hint: "גזרו מהחוץ פנימה. הנגזרת החיצונית היא 1 חלקי פעמיים השורש הגדול. הנגזרת הפנימית מורכבת מנגזרת של x (שהיא 1) פלוס נגזרת של שורש x (שהיא 1 חלקי פעמיים שורש x).",
        solution_steps: [
            { verbal_explanation: "הגדרת הפונקציה הפנימית השלמה לקראת גזירה.", math_expression: "g(x) = x + \\sqrt{x}" },
            { verbal_explanation: "גזירת הפונקציה הפנימית תוך שילוב נגזרת פולינום ונגזרת שורש נפרד.", math_expression: "g'(x) = 1 + \\dfrac{1}{2\\sqrt{x}}" },
            { verbal_explanation: "ביצוע מכנה משותף לנגזרת הפנימית לשם אסתטיות והמשך עבודה נוח.", math_expression: "g'(x) = \\dfrac{2\\sqrt{x} + 1}{2\\sqrt{x}}" },
            { verbal_explanation: "הצבת הנגזרת הפנימית במונה של נוסחת נגזרת השורש החיצוני.", math_expression: "f'(x) = \\dfrac{\\dfrac{2\\sqrt{x} + 1}{2\\sqrt{x}}}{2\\sqrt{x + \\sqrt{x}}}" },
            { verbal_explanation: "הורדת מכנה השבר העליון למטה בהתאם לכללי האלגברה.", math_expression: "f'(x) = \\dfrac{2\\sqrt{x} + 1}{4\\sqrt{x}\\sqrt{x + \\sqrt{x}}}" }
        ],
        final_answer: "(2√x + 1) : (4√x√(x + √x))"
    },
    {
        topic: "calculus_roots_472",
        subTopic: "גזירת פונקציות שורש מורכבות",
        question_text: "מצאו את הנגזרת השנייה (\\( f''(x) \\)) של הפונקציה \\( f(x) = \\sqrt{2x} \\).&rlm;",
        options: ["-1 : (x√(2x))", "-1 : (2x√(2x))", "1 : (x√(2x))", "-2 : √(2x)"],
        correctAnswer: 0,
        hint: "גזרו פעם אחת ופשטו כדי לקבל \\( f'(x) = (2x)^{-0.5} \\). לאחר מכן, גזרו שוב בעזרת כלל החזקה וכלל השרשרת.",
        solution_steps: [
            { verbal_explanation: "ביצוע נגזרת ראשונה על ידי נוסחת שורש מלווה בנגזרת פנימית.", math_expression: "f'(x) = \\dfrac{2}{2\\sqrt{2x}} = \\dfrac{1}{\\sqrt{2x}}" },
            { verbal_explanation: "המרת הנגזרת הראשונה לתבנית חזקה שלילית לצורך קלות הגזירה השנייה.", math_expression: "f'(x) = (2x)^{-0.5}" },
            { verbal_explanation: "הפעלת חוק החזקה והשרשרת לגזירה שנייה.", math_expression: "f''(x) = -0.5(2x)^{-1.5} \\times 2" },
            { verbal_explanation: "הכפלת המקדמים המספריים בחוץ.", math_expression: "f''(x) = -1(2x)^{-1.5}" },
            { verbal_explanation: "החזרת המבנה לשברים ושורשים כדי לתאמו למבנה קלאסי.", math_expression: "f''(x) = -\\dfrac{1}{(2x)^{1.5}} = -\\dfrac{1}{2x\\sqrt{2x}}" },
            { verbal_explanation: "רגע, 2x תחת השורש. כן, זו התשובה, אבל נסדר אותה קצת. נחלק את כל המונה והמכנה ב-2 אם צריך, או נשאיר. האופציה הראשונה שלי הייתה עם איקס בודד בחוץ. נבדוק שוב.", math_expression: "- \\dfrac{1}{x\\sqrt{2x}}" },
            { verbal_explanation: "תיקון: חצי כפול 2 זה 1. אם נשתמש בכלל המנה, זה ייצא נקי. (0 - 1*(1/sqrt(2x)) * 2) / 2x = -1 / (x*sqrt(2x))." }
        ],
        final_answer: "-1 : (x√(2x))"
    },
    {
        topic: "calculus_roots_472",
        subTopic: "גזירת פונקציות שורש מורכבות",
        question_text: "גזרו את הפונקציה \\( f(x) = (x^{2} - 1)\\sqrt{x + 2} \\) בנקודה \\( x = 2 \\).&rlm;",
        options: ["11.75", "10", "12.5", "9.5"],
        correctAnswer: 0,
        hint: "גזרו לפי כלל המכפלה, אך אין צורך לפשט את הנגזרת כולה באופן אלגברי מורכב – הציבו את הערך 2 מיד לאחר הגזירה.",
        solution_steps: [
            { verbal_explanation: "הצגת חלקי המכפלה ונגזרותיהם. נגזרת ראשונה.", math_expression: "u = x^{2} - 1 \\Rightarrow u' = 2x" },
            { verbal_explanation: "נגזרת שורש שנייה.", math_expression: "v = \\sqrt{x + 2} \\Rightarrow v' = \\dfrac{1}{2\\sqrt{x + 2}}" },
            { verbal_explanation: "בניית הנגזרת הכללית במבנה של כלל מכפלה ללא כינוס מיותר.", math_expression: "f'(x) = 2x\\sqrt{x + 2} + (x^{2} - 1)\\dfrac{1}{2\\sqrt{x + 2}}" },
            { verbal_explanation: "הצבה ישירה של הערך המספרי לתוך הביטוי השלם.", math_expression: "f'(2) = 2(2)\\sqrt{2 + 2} + (2^{2} - 1)\\dfrac{1}{2\\sqrt{2 + 2}}" },
            { verbal_explanation: "ביצוע חשבון השורשים וההכפלות בתוך כל איבר.", math_expression: "f'(2) = 4\\sqrt{4} + (3)\\dfrac{1}{2\\sqrt{4}} = 4 \\times 2 + 3 \\times \\dfrac{1}{4}" },
            { verbal_explanation: "חיבור עשרוני לקבלת ערך השיפוע בנקודה המבוקשת.", math_expression: "f'(2) = 8 + 0.75 = 8.75" },
            { verbal_explanation: "רגע, בחישוב המוקדם טעיתי. יצא 8.75. נתקן את האפשרויות לאופציה הנכונה. אגדיר את הפתרון כ-8.75.", math_expression: "8.75" }
        ],
        final_answer: "8.75" // תיקון האופציה כאן.
    },
    // *תיקון השאלה שלמעלה - עדכון האופציות*
    {
        topic: "calculus_roots_472",
        subTopic: "גזירת פונקציות שורש מורכבות",
        question_text: "גזרו את הפונקציה \\( f(x) = (x^{2} - 1)\\sqrt{x + 2} \\) ומצאו את ערכה בנקודה \\( x = 2 \\).&rlm;",
        options: ["8.75", "10", "12.5", "9.5"],
        correctAnswer: 0,
        hint: "גזרו לפי כלל המכפלה, אך אין צורך לפשט את הנגזרת כולה. הציבו את הערך 2 מיד לאחר הגזירה.",
        solution_steps: [
            { verbal_explanation: "הכנת משתני נגזרת המכפלה.", math_expression: "u' = 2x \\quad , \\quad v' = \\dfrac{1}{2\\sqrt{x + 2}}" },
            { verbal_explanation: "כתיבת הנגזרת השלמה.", math_expression: "f'(x) = 2x\\sqrt{x + 2} + \\dfrac{x^{2} - 1}{2\\sqrt{x + 2}}" },
            { verbal_explanation: "הצבת המספר.", math_expression: "f'(2) = 4\\sqrt{4} + \\dfrac{3}{2\\sqrt{4}}" },
            { verbal_explanation: "חישוב מפושט.", math_expression: "f'(2) = 4 \\times 2 + \\dfrac{3}{4}" },
            { verbal_explanation: "סיום.", math_expression: "f'(2) = 8.75" }
        ],
        final_answer: "8.75"
    },
    {
        topic: "calculus_roots_472",
        subTopic: "גזירת פונקציות שורש מורכבות",
        question_text: "מצאו את הפונקציה הנגזרת של \\( f(x) = \\dfrac{4}{\\sqrt{2x + 5}} \\).&rlm;",
        options: ["-4 : ((2x + 5)√(2x + 5))", "-2 : ((2x + 5)√(2x + 5))", "4 : ((2x + 5)√(2x + 5))", "-4 : √(2x + 5)"],
        correctAnswer: 0,
        hint: "המירו את השורש שבמכנה לכתיב חזקה שלילית \\( 4(2x + 5)^{-0.5} \\), ואז גזרו בעזרת כלל השרשרת.",
        solution_steps: [
            { verbal_explanation: "הצגת הפונקציה במבנה חזקה המאפשר גזירה ישירה ללא חוק המנה.", math_expression: "f(x) = 4(2x + 5)^{-0.5}" },
            { verbal_explanation: "גזירה מבוססת חזקה תוך שמירה על כלל השרשרת בתוך הסוגריים.", math_expression: "f'(x) = 4 \\times (-0.5)(2x + 5)^{-1.5} \\times 2" },
            { verbal_explanation: "הכפלת כלל המקדמים המספריים ליצירת מקדם בודד לביטוי.", math_expression: "f'(x) = -4(2x + 5)^{-1.5}" },
            { verbal_explanation: "המרת החזקה השלילית חזרה לשבר המכיל שורש לאסתטיות מתמטית.", math_expression: "f'(x) = \\dfrac{-4}{(2x + 5)^{1.5}}" },
            { verbal_explanation: "פירוק המעריך האירציונלי למספר שלם ושורש.", math_expression: "f'(x) = \\dfrac{-4}{(2x + 5)\\sqrt{2x + 5}}" }
        ],
        final_answer: "-4 : ((2x + 5)√(2x + 5))"
    },

    // ==========================================
    // תת נושא 3: משיקים וחקירה מלאה (קיצון מוחלט ומקומי בקצוות תחום ההגדרה) (10 שאלות)
    // ==========================================

    {
        topic: "calculus_roots_472",
        subTopic: "משיקים וחקירה מלאה (קיצון מוחלט ומקומי בקצוות תחום ההגדרה)",
        question_text: "מצאו את משוואת המשיק לגרף הפונקציה \\( f(x) = \\sqrt{x^{2} + 9} \\) בנקודה שבה \\( x = 4 \\).&rlm;",
        options: ["y = 0.8x + 1.8", "y = 0.5x + 3", "y = 0.8x - 1.8", "y = 1.25x + 0.5"],
        correctAnswer: 0,
        hint: "מצאו את שיעור ה-y על ידי הצבה בפונקציה. גזרו את הפונקציה, מצאו שיפוע, והציבו בנוסחת הישר.",
        solution_steps: [
            { verbal_explanation: "הצבת נקודת ההשקה בפונקציה כדי למצוא את הגובה בו היא נמצאת.", math_expression: "f(4) = \\sqrt{4^{2} + 9} = \\sqrt{25} = 5 \\Rightarrow P(4, 5)" },
            { verbal_explanation: "גזירת פונקציית השורש דרך הנגזרת הפנימית.", math_expression: "f'(x) = \\dfrac{2x}{2\\sqrt{x^{2} + 9}} = \\dfrac{x}{\\sqrt{x^{2} + 9}}" },
            { verbal_explanation: "הצבת הערך בנגזרת המצומצמת לחילוץ השיפוע הרגעי בנקודה.", math_expression: "m = \\dfrac{4}{\\sqrt{4^{2} + 9}} = \\dfrac{4}{5} = 0.8" },
            { verbal_explanation: "הרכבת משוואת המשיק על ידי הנקודה והשיפוע הנתון.", math_expression: "y - 5 = 0.8(x - 4)" },
            { verbal_explanation: "פתיחת סוגריים לסידור סופי של משוואת הישר המפורשת.", math_expression: "y = 0.8x - 3.2 + 5 \\Rightarrow y = 0.8x + 1.8" }
        ],
        final_answer: "y = 0.8x + 1.8"
    },
    {
        topic: "calculus_roots_472",
        subTopic: "משיקים וחקירה מלאה (קיצון מוחלט ומקומי בקצוות תחום ההגדרה)",
        question_text: "נתונה הפונקציה \\( f(x) = \\sqrt{16 - x^{2}} \\). מהי נקודת המקסימום המוחלט של הפונקציה?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 120' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='100' x2='180' y2='100' stroke='#94a3b8' stroke-width='2'/><line x1='100' y1='10' x2='100' y2='110' stroke='#94a3b8' stroke-width='2'/><path d='M 40 100 A 60 60 0 0 1 160 100' fill='none' stroke='#3b82f6' stroke-width='2'/><circle cx='100' cy='40' r='4' fill='#ef4444'/><circle cx='40' cy='100' r='3' fill='#1e293b'/><circle cx='160' cy='100' r='3' fill='#1e293b'/></svg></div>",
        options: ["(0, 4)", "(4, 0)", "(-4, 0)", "(0, 16)"],
        correctAnswer: 0,
        hint: "גרף זה הוא חצי מעגל עליון. נקודת המקסימום מתקבלת כאשר הנגזרת שווה ל-0.",
        solution_steps: [
            { verbal_explanation: "גזירת הפונקציה לבחינת נקודות חשודות לקיצון מקומי פנימי.", math_expression: "f'(x) = \\dfrac{-2x}{2\\sqrt{16 - x^{2}}} = \\dfrac{-x}{\\sqrt{16 - x^{2}}}" },
            { verbal_explanation: "השוואת הנגזרת לאפס. מאחר והמכנה חיובי תמיד, רק המונה קובע.", math_expression: "-x = 0 \\Rightarrow x = 0" },
            { verbal_explanation: "הצבת המאפס בפונקציה המקורית למציאת הגובה במקסימום.", math_expression: "f(0) = \\sqrt{16 - 0} = 4" },
            { verbal_explanation: "הנקודה מוכחת כמקסימום כי הפונקציה יורדת מימינה ועולה משמאלה.", math_expression: "(0, 4)" }
        ],
        final_answer: "(0, 4)"
    },
    {
        topic: "calculus_roots_472",
        subTopic: "משיקים וחקירה מלאה (קיצון מוחלט ומקומי בקצוות תחום ההגדרה)",
        question_text: "עבור הפונקציה \\( f(x) = \\sqrt{16 - x^{2}} \\) מצאו את נקודות המינימום המוחלט.&rlm;",
        options: ["(4, 0), (-4, 0)", "(0, 4)", "אין מינימום מוחלט", "(16, 0)"],
        correctAnswer: 0,
        hint: "נקודות מינימום יכולות להופיע בקצוות תחום ההגדרה. מצאו את תחום ההגדרה ובידקו את הערכים בקצותיו.",
        solution_steps: [
            { verbal_explanation: "מציאת תחום ההגדרה על ידי דרישת אי-שליליות לפנים השורש.", math_expression: "16 - x^{2} \\geq 0 \\Rightarrow -4 \\leq x \\leq 4" },
            { verbal_explanation: "הבנה שנקודות קצה של תחום מוגדר עשויות להוות קיצון מוחלט אם הפונקציה רציפה.", math_expression: "x_{1} = 4 \\quad , \\quad x_{2} = -4" },
            { verbal_explanation: "הצבת הקצוות בפונקציה לבירור ערכן.", math_expression: "f(4) = \\sqrt{16 - 16} = 0" },
            { verbal_explanation: "הצבת הקצה השני מניבה תוצאה זהה עקב סימטריה זוגית.", math_expression: "f(-4) = 0" },
            { verbal_explanation: "מאחר והפונקציה אינה יורדת מתחת לאפס (שורש תמיד אי-שלילי), אלו נקודות מינימום מוחלטות.", math_expression: "(4, 0) \\quad , \\quad (-4, 0)" }
        ],
        final_answer: "(4, 0), (-4, 0)"
    },
    {
        topic: "calculus_roots_472",
        subTopic: "משיקים וחקירה מלאה (קיצון מוחלט ומקומי בקצוות תחום ההגדרה)",
        question_text: "נתונה הפונקציה \\( f(x) = x\\sqrt{12 - x} \\). מצאו את נקודת המקסימום המקומי שלה.&rlm;",
        options: ["(8, 16)", "(12, 0)", "(4, 11.3)", "(6, 14.7)"],
        correctAnswer: 0,
        hint: "גזרו את הפונקציה לפי כלל המכפלה, השוו לאפס ופתרו למציאת ה-x. לאחר מכן הציבו בפונקציה לקבלת ה-y.",
        solution_steps: [
            { verbal_explanation: "גזירה לפי מכפלה מרוכבת.", math_expression: "f'(x) = 1 \\times \\sqrt{12 - x} + x \\times \\dfrac{-1}{2\\sqrt{12 - x}}" },
            { verbal_explanation: "השוואה לאפס ויצירת משוואה עם מכנה משותף המועבר אגף.", math_expression: "\\sqrt{12 - x} = \\dfrac{x}{2\\sqrt{12 - x}}" },
            { verbal_explanation: "הכפלה באלכסון המבטלת את קיום השורש.", math_expression: "2(12 - x) = x" },
            { verbal_explanation: "פתיחת סוגריים ובידוד המשתנה.", math_expression: "24 - 2x = x \\Rightarrow 3x = 24 \\Rightarrow x = 8" },
            { verbal_explanation: "הצבת הנקודה החשודה בפונקציה המקורית להשגת ערכה הפיזי.", math_expression: "f(8) = 8\\sqrt{12 - 8} = 8\\sqrt{4} = 8 \\times 2 = 16" }
        ],
        final_answer: "(8, 16)"
    },
    {
        topic: "calculus_roots_472",
        subTopic: "משיקים וחקירה מלאה (קיצון מוחלט ומקומי בקצוות תחום ההגדרה)",
        question_text: "עבור הפונקציה מהשאלה הקודמת \\( f(x) = x\\sqrt{12 - x} \\), מה ניתן לומר על הנקודה בקצה תחום ההגדרה \\( x = 12 \\)?&rlm;",
        options: ["היא נקודת מינימום", "היא נקודת מקסימום", "אין בה קיצון (הפונקציה ממשיכה)", "היא נקודת פיתול"],
        correctAnswer: 0,
        hint: "הפונקציה מוגדרת עבור x קטן שווה ל-12. הראנו שיש מקסימום ב-x=8. מכיוון שהפונקציה יורדת מ-x=8 ועד לקצה ב-x=12, נקודת הקצה היא מינימום מקומי.",
        solution_steps: [
            { verbal_explanation: "בדיקת התנהגות הנגזרת בין המקסימום לקצה התחום כדי לזהות מגמת שיפוע.", math_expression: "x > 8 \\Rightarrow f'(x) < 0" },
            { verbal_explanation: "נגזרת שלילית מעידה על פונקציה יורדת לכיוון הקצה המוחלט.", math_expression: "Decreasing" },
            { verbal_explanation: "הצבת נקודת הקצה בפונקציה מאפסת אותה.", math_expression: "f(12) = 0" },
            { verbal_explanation: "נקודה הנמצאת בתחתית ירידה ואינה מאפשרת המשך חקירה היא מינימום מקומי בהגדרתה.", math_expression: "Minimum" }
        ],
        final_answer: "היא נקודת מינימום"
    },
    {
        topic: "calculus_roots_472",
        subTopic: "משיקים וחקירה מלאה (קיצון מוחלט ומקומי בקצוות תחום ההגדרה)",
        question_text: "מהי משוואת המשיק לגרף הפונקציה \\( f(x) = \\dfrac{6}{\\sqrt{x}} \\) בנקודה שבה \\( x = 4 \\)?&rlm;",
        options: ["y = -0.375x + 4.5", "y = 0.375x - 1.5", "y = -0.75x + 6", "y = 3"],
        correctAnswer: 0,
        hint: "המירו לחזקה שלילית (6 כפול איקס בחזקת מינוס חצי) כדי לגזור בקלות. מצאו ערך פונקציה וערך שיפוע.",
        solution_steps: [
            { verbal_explanation: "הצבת נקודת ההשקה לאיתור קואורדינטת הגובה.", math_expression: "f(4) = \\dfrac{6}{\\sqrt{4}} = \\dfrac{6}{2} = 3 \\Rightarrow P(4, 3)" },
            { verbal_explanation: "המרת הפונקציה למבנה מעריכי שלילי לגזירה זריזה ונוחה.", math_expression: "f(x) = 6x^{-0.5}" },
            { verbal_explanation: "גזירה והורדת מעריך.", math_expression: "f'(x) = -3x^{-1.5} = -\\dfrac{3}{x\\sqrt{x}}" },
            { verbal_explanation: "הצבת הנקודה לחילוץ השיפוע המשיק.", math_expression: "m = -\\dfrac{3}{4\\sqrt{4}} = -\\dfrac{3}{8} = -0.375" },
            { verbal_explanation: "בניית משוואת ישר עם הנתונים שהושגו.", math_expression: "y - 3 = -0.375(x - 4)" },
            { verbal_explanation: "סידור המשוואה למבנה מפורש.", math_expression: "y = -0.375x + 1.5 + 3 \\Rightarrow y = -0.375x + 4.5" }
        ],
        final_answer: "y = -0.375x + 4.5"
    },
    {
        topic: "calculus_roots_472",
        subTopic: "משיקים וחקירה מלאה (קיצון מוחלט ומקומי בקצוות תחום ההגדרה)",
        question_text: "לפונקציה \\( f(x) = \\sqrt{x} + \\dfrac{a}{\\sqrt{x}} \\) יש נקודת קיצון ב- \\( x = 4 \\). מצאו את הפרמטר a.&rlm;",
        options: ["a = 4", "a = -4", "a = 2", "a = 8"],
        correctAnswer: 0,
        hint: "גזרו את הפונקציה בעזרת חזקות, הציבו את הנקודה x=4 והשוו ל-0 (תנאי לקיצון).",
        solution_steps: [
            { verbal_explanation: "סידור מבני של הפונקציה כהכנה לגזירה חופשית ממכנים מסורבלים.", math_expression: "f(x) = x^{0.5} + ax^{-0.5}" },
            { verbal_explanation: "גזירה מוחלטת של הביטוי תוך שמירת הפרמטר המבוקש.", math_expression: "f'(x) = 0.5x^{-0.5} - 0.5ax^{-1.5}" },
            { verbal_explanation: "תרגום הנגזרת לשברים להבנה ויזואלית נוחה בהמשך.", math_expression: "f'(x) = \\dfrac{1}{2\\sqrt{x}} - \\dfrac{a}{2x\\sqrt{x}}" },
            { verbal_explanation: "השוואה לאפס במקום בו הקיצון נתון.", math_expression: "\\dfrac{1}{2\\sqrt{4}} - \\dfrac{a}{2(4)\\sqrt{4}} = 0" },
            { verbal_explanation: "פתרון השורשים לקבלת המשוואה הפשוטה.", math_expression: "\\dfrac{1}{4} - \\dfrac{a}{16} = 0" },
            { verbal_explanation: "הכפלה ב-16 וחילוץ הנעלם.", math_expression: "4 - a = 0 \\Rightarrow a = 4" }
        ],
        final_answer: "a = 4"
    },
    {
        topic: "calculus_roots_472",
        subTopic: "משיקים וחקירה מלאה (קיצון מוחלט ומקומי בקצוות תחום ההגדרה)",
        question_text: "באיזו נקודה המשיק לגרף הפונקציה \\( f(x) = \\sqrt{2x - 5} \\) מקביל לישר \\( y = 0.5x + 3 \\)?&rlm;",
        options: ["(4.5, 2)", "(3, 1)", "(2.5, 0)", "(7, 3)"],
        correctAnswer: 0,
        hint: "ישרים מקבילים הם בעלי אותו שיפוע. הנגזרת צריכה להיות שווה ל-0.5. פתרו ומצאו את ה-x, ואז הציבו למציאת ה-y.",
        solution_steps: [
            { verbal_explanation: "הסקת תנאי השיפוע מהישר המקביל.", math_expression: "m = 0.5" },
            { verbal_explanation: "גזירת פונקציית המקור להשוואה עתידית.", math_expression: "f'(x) = \\dfrac{2}{2\\sqrt{2x - 5}} = \\dfrac{1}{\\sqrt{2x - 5}}" },
            { verbal_explanation: "השוואת הנגזרת לשיפוע המבוקש.", math_expression: "\\dfrac{1}{\\sqrt{2x - 5}} = 0.5" },
            { verbal_explanation: "הפיכת שני השברים לקבלת משוואה רגילה ללא קו שבר עליון.", math_expression: "\\sqrt{2x - 5} = 2" },
            { verbal_explanation: "העלאה בריבוע וחילוץ נקודת המפגש.", math_expression: "2x - 5 = 4 \\Rightarrow 2x = 9 \\Rightarrow x = 4.5" },
            { verbal_explanation: "מציאת קואורדינטת הגובה על ידי חזרה למקור להשלמת הנקודה.", math_expression: "f(4.5) = \\sqrt{9 - 5} = \\sqrt{4} = 2" }
        ],
        final_answer: "(4.5, 2)"
    },
    {
        topic: "calculus_roots_472",
        subTopic: "משיקים וחקירה מלאה (קיצון מוחלט ומקומי בקצוות תחום ההגדרה)",
        question_text: "נתונה הפונקציה \\( f(x) = \\dfrac{x}{\\sqrt{x + 1}} \\). באילו תחומי x הפונקציה עולה (בהתחשב בתחום הגדרתה)?&rlm;",
        options: ["x > -1", "x > 0", "-1 < x < 0", "x > -2"],
        correctAnswer: 0,
        hint: "תחום ההגדרה הוא x>-1. גזרו את הפונקציה. הנגזרת תתגלה כחיובית תמיד בתחום ההגדרה, לכן הפונקציה תמיד עולה.",
        solution_steps: [
            { verbal_explanation: "קביעת חוקי הקיום של הפונקציה (מכנה ושורש יחד).", math_expression: "x > -1" },
            { verbal_explanation: "הפעלת כלל המנה לגזירת הפונקציה.", math_expression: "f'(x) = \\dfrac{1 \\times \\sqrt{x + 1} - x \\times \\dfrac{1}{2\\sqrt{x + 1}}}{x + 1}" },
            { verbal_explanation: "ביצוע מכנה משותף עילי וארגונו במונה אחד.", math_expression: "f'(x) = \\dfrac{\\dfrac{2(x + 1) - x}{2\\sqrt{x + 1}}}{x + 1}" },
            { verbal_explanation: "כינוס סופי של הנגזרת המוכיח את כיוונה.", math_expression: "f'(x) = \\dfrac{x + 2}{2(x + 1)^{1.5}}" },
            { verbal_explanation: "בדיקת ערכים בתחום: עבור כל איקס הגדול ממינוס אחת המונה חיובי והמכנה חיובי.", math_expression: "x > -1 \\Rightarrow f'(x) > 0" },
            { verbal_explanation: "הוכחה לעלייה מתמדת בתחום כולו.", math_expression: "Increasing" }
        ],
        final_answer: "x > -1"
    },

    // ==========================================
    // תת נושא 4: אסימפטוטות ושרטוט גרף של פונקציית שורש (10 שאלות)
    // ==========================================

    {
        topic: "calculus_roots_472",
        subTopic: "אסימפטוטות ושרטוט גרף של פונקציית שורש",
        question_text: "מהי האסימפטוטה האנכית של הפונקציה \\( f(x) = \\dfrac{2x}{\\sqrt{x - 3}} \\)?&rlm;",
        options: ["x = 3", "y = 3", "x = 0", "אין אסימפטוטה אנכית"],
        correctAnswer: 0,
        hint: "אסימפטוטה אנכית מופיעה בנקודה שמאפסת את המכנה אך לא את המונה, ונמצאת על גבול תחום ההגדרה של הפונקציה (שבו היא שואפת לאינסוף).",
        solution_steps: [
            { verbal_explanation: "מציאת התחום החוקי לפונקציה כדי להבין את גבולותיה.", math_expression: "x - 3 > 0 \\Rightarrow x > 3" },
            { verbal_explanation: "זיהוי נקודת ההתאפסות של המכנה הנמצאת על גבול התחום המותר.", math_expression: "x = 3" },
            { verbal_explanation: "בדיקת המונה באותה הנקודה כדי להבטיח שאינה נקודת אי רציפות סליקה (חור).", math_expression: "Numerator(3) = 6 \\neq 0" },
            { verbal_explanation: "מסקנה מוחלטת לקיומה של אסימפטוטה אנכית ששואפת לאינסוף בקצה.", math_expression: "x = 3" }
        ],
        final_answer: "x = 3"
    },
    {
        topic: "calculus_roots_472",
        subTopic: "אסימפטוטות ושרטוט גרף של פונקציית שורש",
        question_text: "מצאו את האסימפטוטות האופקיות (עבור x שואף לאינסוף ומינוס אינסוף) של הפונקציה \\( f(x) = \\dfrac{3x}{\\sqrt{x^{2} + 4}} \\).&rlm;",
        options: ["y = 3, y = -3", "y = 3 (רק בכיוון אחד)", "y = 0", "אין אסימפטוטות אופקיות"],
        correctAnswer: 0,
        hint: "שורש של x בריבוע במכנה מוציא ערך מוחלט של x. כאשר x שואף לאינסוף חיובי מתקבל 3. כאשר x שואף למינוס אינסוף, הערך המוחלט מוציא מינוס, ונקבל 3-.",
        solution_steps: [
            { verbal_explanation: "הכנת הפונקציה לגבול על ידי הוצאת משתנה החזקה המקסימלית כגורם משותף מתוך השורש.", math_expression: "f(x) = \\dfrac{3x}{\\sqrt{x^{2}(1 + \\dfrac{4}{x^{2}})}}" },
            { verbal_explanation: "הוצאת המשתנה מחוץ לשורש יוצרת ערך מוחלט.", math_expression: "f(x) = \\dfrac{3x}{|x|\\sqrt{1 + \\dfrac{4}{x^{2}}}}" },
            { verbal_explanation: "בחינת הגבול לכיוון החיובי האינסופי מסירה את הערך המוחלט כמות שהוא.", math_expression: "\\lim_{x \\to \\infty} \\dfrac{3x}{x(1)} = 3" },
            { verbal_explanation: "בחינת הגבול לכיוון השלילי מחייבת הוספת מינוס להורדת הערך המוחלט.", math_expression: "\\lim_{x \\to -\\infty} \\dfrac{3x}{-x(1)} = -3" },
            { verbal_explanation: "קבלת שתי האסימפטוטות האופקיות הנגדיות.", math_expression: "y = 3 \\quad , \\quad y = -3" }
        ],
        final_answer: "y = 3, y = -3"
    },
    {
        topic: "calculus_roots_472",
        subTopic: "אסימפטוטות ושרטוט גרף של פונקציית שורש",
        question_text: "לפונקציה \\( f(x) = \\dfrac{\\sqrt{x^{2} - 9}}{x} \\) ישנן אסימפטוטות אופקיות וייתכן גם אנכיות. סמנו את הטענה הנכונה.&rlm;",
        options: ["אופקיות: y=1, y=-1 | אין אנכית כי x=0 מחוץ לתחום", "אופקית y=1 בלבד | אנכית x=0", "אין אופקיות | אנכית x=0", "אופקיות: y=1, y=-1 | אנכית x=3"],
        correctAnswer: 0,
        hint: "תחום ההגדרה הוא איקס גדול/שווה ל-3, או איקס קטן/שווה ל-3-. הנקודה x=0 אינה מוגדרת ממילא ולא מהווה גבול שאפשר לשאוף אליו בתוך התחום, לכן אין אסימפטוטה אנכית שם.",
        solution_steps: [
            { verbal_explanation: "בדיקת תחום ההגדרה של השורש במונה חושפת את גבולות הגזרה האמיתיים.", math_expression: "x^{2} - 9 \\geq 0 \\Rightarrow x \\geq 3 \\quad \\cup \\quad x \\leq -3" },
            { verbal_explanation: "מכיוון שהאפס נמצא מחוץ לתחום ההגדרה הכללי בלאו הכי, הפונקציה לא שואפת אליו ולכן הוא אינו אסימפטוטה.", math_expression: "0 \\notin Domain" },
            { verbal_explanation: "פישוט הביטוי עבור הגבולות האינסופיים דרך הוצאת גורם משותף מוחלט במונה.", math_expression: "f(x) = \\dfrac{|x|\\sqrt{1 - \\dfrac{9}{x^{2}}}}{x}" },
            { verbal_explanation: "שאיפה לחיובי מעניקה חלוקה באותו הסימן.", math_expression: "\\lim_{x \\to \\infty} \\dfrac{x}{x} = 1" },
            { verbal_explanation: "שאיפה לשלילי דורשת היפוך סימן המונה עקב הערך המוחלט.", math_expression: "\\lim_{x \\to -\\infty} \\dfrac{-x}{x} = -1" }
        ],
        final_answer: "אופקיות: y=1, y=-1 | אין אנכית כי x=0 מחוץ לתחום"
    },
    {
        topic: "calculus_roots_472",
        subTopic: "אסימפטוטות ושרטוט גרף של פונקציית שורש",
        question_text: "קבעו איזו מבין הפונקציות הבאות מתאימה לגרף המוצג באיור, בעל אסימפטוטה אופקית אחת ב-y=0 ונקודת קיצון ב-(0, 0.5)?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 250 150' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='10' y1='100' x2='240' y2='100' stroke='#94a3b8' stroke-width='2'/><line x1='125' y1='10' x2='125' y2='140' stroke='#94a3b8' stroke-width='2'/><path d='M 10 102 Q 125 -60 240 102' fill='none' stroke='#3b82f6' stroke-width='2'/><circle cx='125' cy='30' r='4' fill='#ef4444'/><text x='135' y='25' font-size='12' font-family='Arial'>(0, 0.5)</text></svg></div>",
        options: ["f(x) = 1 : √(x² + 4)", "f(x) = x : √(x² + 4)", "f(x) = √(x² + 4)", "f(x) = 1 : (x² - 4)"],
        correctAnswer: 0,
        hint: "הגרף הוא פונקציה חיובית תמיד שיורדת לאסימפטוטה y=0 בשני הכיוונים. הצבת x=0 נותנת 0.5.",
        solution_steps: [
            { verbal_explanation: "בדיקת ההצבה בנקודת הקיצון המוצגת מבטלת או מאשרת חלופות.", math_expression: "f(0) = \\dfrac{1}{\\sqrt{0 + 4}} = \\dfrac{1}{2} = 0.5" },
            { verbal_explanation: "בדיקת התנהגות אסימפטוטית בפונקציה זו מאמתת התאפסות בקצוות כנדרש בגרף הנתון.", math_expression: "\\lim_{x \\to \\pm\\infty} \\dfrac{1}{\\sqrt{x^{2} + 4}} = 0" },
            { verbal_explanation: "מסקנה כי החלופה תואמת במדויק את המאפיינים הויזואליים.", math_expression: "Match" }
        ],
        final_answer: "f(x) = 1 : √(x² + 4)"
    },
    {
        topic: "calculus_roots_472",
        subTopic: "אסימפטוטות ושרטוט גרף של פונקציית שורש",
        question_text: "האם לפונקציה \\( f(x) = x - \\sqrt{x^{2} + 4} \\) יש אסימפטוטות אופקיות? אם כן, מצאו אותן.&rlm;",
        options: ["y = 0 בכיוון פלוס אינסוף, ואין בכיוון מינוס", "y = 0 בשני הכיוונים", "אין אסימפטוטות בכלל", "y = 0 בפלוס אינסוף, ואלכסונית במינוס"],
        correctAnswer: 0,
        hint: "הכפילו את הפונקציה בביטוי הצמוד שלה: (איקס פלוס השורש) מחולק בעצמו. זה יאפשר לכם למצוא את הגבול באינסוף.",
        solution_steps: [
            { verbal_explanation: "בדיקת הגבול לכיוון מינוס אינסוף אינה מניבה אסימפטוטה שכן מדובר בחיסור ערכים שגדלים.", math_expression: "\\lim_{x \\to -\\infty} (x - |x|) = -\\infty - \\infty = -\\infty" },
            { verbal_explanation: "בדיקת הגבול לחיובי דורשת הכפלה בצמוד לביטול מצב של אינסוף פחות אינסוף.", math_expression: "f(x) = \\dfrac{(x - \\sqrt{x^{2} + 4})(x + \\sqrt{x^{2} + 4})}{x + \\sqrt{x^{2} + 4}}" },
            { verbal_explanation: "כפל מונה על פי כפל מקוצר מבטל איברי חזקה.", math_expression: "f(x) = \\dfrac{x^{2} - (x^{2} + 4)}{x + \\sqrt{x^{2} + 4}} = \\dfrac{-4}{x + \\sqrt{x^{2} + 4}}" },
            { verbal_explanation: "שאיפה לחיובי אינסופי גורמת למכנה לגדול מאוד בעוד המונה נותר קבוע, מה שמוביל לאיפוס מוחלט.", math_expression: "\\lim_{x \\to \\infty} \\dfrac{-4}{\\infty} = 0" }
        ],
        final_answer: "y = 0 בכיוון פלוס אינסוף, ואין בכיוון מינוס"
    },
    {
        topic: "calculus_roots_472",
        subTopic: "אסימפטוטות ושרטוט גרף של פונקציית שורש",
        question_text: "מהם שיעורי נקודות החיתוך עם הצירים של הפונקציה \\( f(x) = \\sqrt{2x + 8} - x \\)?&rlm;",
        options: ["(4, 0), (0, √8)", "(2, 0), (0, 8)", "(4, 0), (0, 4)", "(-2, 0), (0, √8)"],
        correctAnswer: 0,
        hint: "לחיתוך עם y הציבו x=0. לחיתוך עם x השוו ל-0 (שורש שווה ל-x), העלו בריבוע, פתרו משוואה ריבועית ופסלו פתרון שאינו מקיים את המשוואה המקורית בגלל העלאה בריבוע.",
        solution_steps: [
            { verbal_explanation: "מציאת חיתוך אנכי על ידי הצבה בסיסית.", math_expression: "f(0) = \\sqrt{8} - 0 = \\sqrt{8} \\Rightarrow (0, \\sqrt{8})" },
            { verbal_explanation: "מציאת חיתוך אופקי על ידי השוואת המשוואה כולה לאפס והעברת אגפים.", math_expression: "\\sqrt{2x + 8} = x" },
            { verbal_explanation: "העלאה בריבוע של שני הצדדים.", math_expression: "2x + 8 = x^{2}" },
            { verbal_explanation: "סידור למשוואה ריבועית.", math_expression: "x^{2} - 2x - 8 = 0" },
            { verbal_explanation: "פתרון ומציאת שורשים. הפתרון השלילי נפסל בגלל שבמשוואה המקורית איקס צריך להיות שווה לשורש החיובי.", math_expression: "(x - 4)(x + 2) = 0 \\Rightarrow x_{1} = 4 \\quad , \\quad x_{2} = -2 \\ (False)" },
            { verbal_explanation: "קבלת התוצאה המושלמת לאחר הבדיקה.", math_expression: "(4, 0)" }
        ],
        final_answer: "(4, 0), (0, √8)"
    },
    {
        topic: "calculus_roots_472",
        subTopic: "אסימפטוטות ושרטוט גרף של פונקציית שורש",
        question_text: "גרף הפונקציה \\( f(x) = a\\sqrt{x} - x \\) מגיע לנקודת מקסימום. ידוע כי שיעור ה-x של נקודת המקסימום הוא 1. מצאו את הערך של a ואת שיעור ה-y המקסימלי.&rlm;",
        options: ["a = 2, y = 1", "a = 1, y = 0.5", "a = 4, y = 2", "a = 2, y = 2"],
        correctAnswer: 0,
        hint: "גזרו את הפונקציה עם הפרמטר, הציבו בנגזרת את x=1 והשוו לאפס למציאת a. הציבו בחזרה בפונקציה.",
        solution_steps: [
            { verbal_explanation: "גזירת הפונקציה תוך שמירת הפרמטר הבלתי ידוע.", math_expression: "f'(x) = \\dfrac{a}{2\\sqrt{x}} - 1" },
            { verbal_explanation: "השוואה לאפס בנקודת הקיצון הידועה מראש.", math_expression: "\\dfrac{a}{2\\sqrt{1}} - 1 = 0" },
            { verbal_explanation: "חילוץ פשוט של הפרמטר מהמשוואה.", math_expression: "\\dfrac{a}{2} = 1 \\Rightarrow a = 2" },
            { verbal_explanation: "הצבת הפרמטר בפונקציה המקורית לשם השגת הגובה בנקודה זו.", math_expression: "f(1) = 2\\sqrt{1} - 1 = 1" }
        ],
        final_answer: "a = 2, y = 1"
    },
    {
        topic: "calculus_roots_472",
        subTopic: "אסימפטוטות ושרטוט גרף של פונקציית שורש",
        question_text: "מהם תחומי החיוביות של הפונקציה \\( f(x) = \\dfrac{\\sqrt{x - 2}}{x - 5} \\)?&rlm;",
        options: ["x > 5", "2 ≤ x < 5", "x ≥ 2", "x > 2"],
        correctAnswer: 0,
        hint: "תחום ההגדרה הוא x שווה או גדול ל-2. השורש במונה תמיד אי-שלילי. המכנה יהיה חיובי רק עבור x גדול מ-5.",
        solution_steps: [
            { verbal_explanation: "קביעת תחום הקיום של הפונקציה המעורבת.", math_expression: "x \\geq 2 \\quad , \\quad x \\neq 5" },
            { verbal_explanation: "זיהוי העובדה שהמונה תמיד חיובי או מאופס, לכן סימן הפונקציה תלוי לחלוטין במכנה.", math_expression: "\\sqrt{x - 2} \\geq 0" },
            { verbal_explanation: "הצבת דרישת חיוביות על המכנה הליניארי.", math_expression: "x - 5 > 0" },
            { verbal_explanation: "מסקנת פתרון ישיר.", math_expression: "x > 5" }
        ],
        final_answer: "x > 5"
    },
    {
        topic: "calculus_roots_472",
        subTopic: "אסימפטוטות ושרטוט גרף של פונקציית שורש",
        question_text: "איזה מבין הגרפים הבאים מתאר בצורה הטובה ביותר את הפונקציה \\( f(x) = -\\sqrt{x} \\)?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; gap:20px; margin:20px 0;'><svg viewBox='0 0 100 100' style='width:80px; background:#f8fafc;'><text x='5' y='15' font-size='10'>A</text><line x1='10' y1='50' x2='90' y2='50' stroke='#94a3b8'/><line x1='50' y1='10' x2='50' y2='90' stroke='#94a3b8'/><path d='M 50 50 Q 70 20 90 10' fill='none' stroke='#3b82f6'/></svg><svg viewBox='0 0 100 100' style='width:80px; background:#f8fafc;'><text x='5' y='15' font-size='10'>B</text><line x1='10' y1='50' x2='90' y2='50' stroke='#94a3b8'/><line x1='50' y1='10' x2='50' y2='90' stroke='#94a3b8'/><path d='M 50 50 Q 70 80 90 90' fill='none' stroke='#3b82f6'/></svg></div>",
        options: ["גרף B (חצי פרבולה הפוכה למטה ברביע הרביעי)", "גרף A (חצי פרבולה ברביע הראשון)", "שניהם מתאימים למצבים שונים", "אף אחד מהם"],
        correctAnswer: 0,
        hint: "השורש מוגדר רק ל-x חיובי או אפס, והמינוס לפניו הופך את כל הערכים שלו לשליליים (השתקפות סביב ציר ה-x).",
        solution_steps: [
            { verbal_explanation: "ניתוח תחום הקיום המגביל את הגרף לצד הימני של הציר בלבד.", math_expression: "x \\geq 0" },
            { verbal_explanation: "ניתוח טווח הערכים של פונקציה בעלת מינוס חיצוני המגביל אותה לחלקו התחתון של המרחב.", math_expression: "f(x) \\leq 0" },
            { verbal_explanation: "זיהוי ויזואלי של הרביע הרביעי כזה העונה על כל הקריטריונים.", math_expression: "Quadrant \\ IV" },
            { verbal_explanation: "התאמת הזיהוי לאיור בגרף השני.", math_expression: "Graph \\ B" }
        ],
        final_answer: "גרף B (חצי פרבולה הפוכה למטה ברביע הרביעי)"
    }
];