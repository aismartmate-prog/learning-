const questionsDB = [
    // ==========================================
    // תת נושא 1: אינטגרציה בשיטת ההצבה ואינטגרציה בחלקים (10 שאלות)
    // ==========================================
    {
        "topic": "calculus_integral_572",
        "subTopic": "אינטגרציה בשיטת ההצבה ואינטגרציה בחלקים",
        "question_text": "חשבו את האינטגרל הלא מסוים הבא בעזרת שיטת ההצבה:<br>\\( \\int 2x \\cos(x^{2}) dx \\)&rlm;",
        "options": ["sin(x²) + C", "cos(x²) + C", "-sin(x²) + C", "0.5sin(x²) + C"],
        "correctAnswer": 0,
        "hint": "הציבו משתנה עזר במקום הפונקציה הפנימית שבתוך הקוסינוס.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר משתנה עזר להצבה.", "math_expression": "u = x^{2}" },
            { "verbal_explanation": "נגזור את המשתנה לפי המשתנה המקורי.", "math_expression": "du = 2x dx" },
            { "verbal_explanation": "נציב את המשתנה החדש בתוך האינטגרל.", "math_expression": "\\int \\cos(u) du" },
            { "verbal_explanation": "נבצע את האינטגרציה המיידית.", "math_expression": "\\sin(u) + C" },
            { "verbal_explanation": "נציב חזרה את המשתנה המקורי.", "math_expression": "\\sin(x^{2}) + C" }
        ],
        "final_answer": "sin(x²) + C"
    },
    {
        "topic": "calculus_integral_572",
        "subTopic": "אינטגרציה בשיטת ההצבה ואינטגרציה בחלקים",
        "question_text": "חשבו את האינטגרל הלא מסוים הבא בעזרת אינטגרציה בחלקים:<br>\\( \\int x e^{x} dx \\)&rlm;",
        "options": ["e^x(x - 1) + C", "e^x(x + 1) + C", "0.5x²e^x + C", "xe^x - x + C"],
        "correctAnswer": 0,
        "hint": "בחרו את הפונקציה הלינארית להיות הפונקציה הנגזרת ואת המעריכית להיות הפונקציה שעוברת אינטגרציה.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את הפונקציות לאינטגרציה בחלקים.", "math_expression": "u = x \\quad , \\quad v' = e^{x}" },
            { "verbal_explanation": "נחשב את הנגזרת והפונקציה הקדומה.", "math_expression": "u' = 1 \\quad , \\quad v = e^{x}" },
            { "verbal_explanation": "נשתמש בנוסחת אינטגרציה בחלקים.", "math_expression": "\\int u v' dx = u v - \\int u' v dx" },
            { "verbal_explanation": "נציב את הביטויים בנוסחה.", "math_expression": "x e^{x} - \\int 1 \\times e^{x} dx" },
            { "verbal_explanation": "נחשב את האינטגרל הנותר.", "math_expression": "x e^{x} - e^{x} + C" },
            { "verbal_explanation": "נוציא גורם משותף לקבלת התשובה הסופית.", "math_expression": "e^{x}(x - 1) + C" }
        ],
        "final_answer": "e^x(x - 1) + C"
    },
    {
        "topic": "calculus_integral_572",
        "subTopic": "אינטגרציה בשיטת ההצבה ואינטגרציה בחלקים",
        "question_text": "א. חשבו את האינטגרל \\( \\int \\dfrac{e^{\\sqrt{x}}}{\\sqrt{x}} dx \\).<br>ב. חשבו את ערך האינטגרל המסוים בתחום מ-1 עד 4.&rlm;",
        "options": ["א. 2e^√x + C ב. 2e² - 2e", "א. e^√x + C ב. e² - e", "א. 0.5e^√x + C ב. 0.5e² - 0.5e", "א. 2√x e^x + C ב. 4e² - 2e"],
        "correctAnswer": 0,
        "hint": "הציבו משתנה עזר במקום השורש במעריך.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר משתנה עזר.", "math_expression": "u = \\sqrt{x}" },
            { "verbal_explanation": "נגזור.", "math_expression": "du = \\dfrac{1}{2\\sqrt{x}} dx" },
            { "verbal_explanation": "נבודד את ביטוי הדיפרנציאל הקיים באינטגרל.", "math_expression": "2 du = \\dfrac{1}{\\sqrt{x}} dx" },
            { "verbal_explanation": "נבצע הצבה באינטגרל.", "math_expression": "\\int 2 e^{u} du" },
            { "verbal_explanation": "נבצע אינטגרציה.", "math_expression": "2 e^{u} + C" },
            { "verbal_explanation": "נחזיר למשתנה המקורי.", "math_expression": "2 e^{\\sqrt{x}} + C" },
            { "verbal_explanation": "נציב גבולות לאינטגרל המסוים.", "math_expression": "2 e^{\\sqrt{4}} - 2 e^{\\sqrt{1}}" },
            { "verbal_explanation": "נחשב את התוצאה הסופית.", "math_expression": "2 e^{2} - 2 e^{1}" }
        ],
        "final_answer": "א. 2e^√x + C ב. 2e² - 2e"
    },
    {
        "topic": "calculus_integral_572",
        "subTopic": "אינטגרציה בשיטת ההצבה ואינטגרציה בחלקים",
        "question_text": "חשבו את האינטגרל הלא מסוים הבא בעזרת אינטגרציה בחלקים:<br>\\( \\int \\ln(x) dx \\)&rlm;",
        "options": ["x ln(x) - x + C", "ln(x) - x + C", "0.5 ln²(x) + C", "x ln(x) + C"],
        "correctAnswer": 0,
        "hint": "הוסיפו את המספר 1 כפונקציה המוכפלת בלוגריתם.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את הפונקציות לאינטגרציה בחלקים.", "math_expression": "u = \\ln(x) \\quad , \\quad v' = 1" },
            { "verbal_explanation": "נחשב נגזרת ופונקציה קדומה.", "math_expression": "u' = \\dfrac{1}{x} \\quad , \\quad v = x" },
            { "verbal_explanation": "נציב בנוסחת אינטגרציה בחלקים.", "math_expression": "x \\ln(x) - \\int x \\times \\dfrac{1}{x} dx" },
            { "verbal_explanation": "נצמצם את האינטגרנד.", "math_expression": "x \\ln(x) - \\int 1 dx" },
            { "verbal_explanation": "נבצע את האינטגרציה הנותרת.", "math_expression": "x \\ln(x) - x + C" }
        ],
        "final_answer": "x ln(x) - x + C"
    },
    {
        "topic": "calculus_integral_572",
        "subTopic": "אינטגרציה בשיטת ההצבה ואינטגרציה בחלקים",
        "question_text": "חשבו את האינטגרל הבא בשיטת ההצבה:<br>\\( \\int \\dfrac{\\ln(x)}{x} dx \\)&rlm;",
        "options": ["0.5 ln²(x) + C", "ln|ln(x)| + C", "x ln(x) - x + C", "ln(x) / x² + C"],
        "correctAnswer": 0,
        "hint": "הציבו משתנה עזר במקום הלוגריתם.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר משתנה עזר.", "math_expression": "u = \\ln(x)" },
            { "verbal_explanation": "נגזור.", "math_expression": "du = \\dfrac{1}{x} dx" },
            { "verbal_explanation": "נבצע הצבה באינטגרל.", "math_expression": "\\int u du" },
            { "verbal_explanation": "נבצע אינטגרציה לפי כלל החזקה.", "math_expression": "\\dfrac{u^{2}}{2} + C" },
            { "verbal_explanation": "נחזיר למשתנה המקורי.", "math_expression": "\\dfrac{(\\ln(x))^{2}}{2} + C" }
        ],
        "final_answer": "0.5 ln²(x) + C"
    },
    {
        "topic": "calculus_integral_572",
        "subTopic": "אינטגרציה בשיטת ההצבה ואינטגרציה בחלקים",
        "question_text": "חשבו בעזרת אינטגרציה בחלקים (יידרש יותר משלב אחד):<br>\\( \\int x^{2} e^{x} dx \\)&rlm;",
        "options": ["e^x(x² - 2x + 2) + C", "e^x(x² + 2x) + C", "e^x(x² - 2x) + C", "0.5x² e^x + C"],
        "correctAnswer": 0,
        "hint": "בצעו אינטגרציה בחלקים פעמיים, בכל פעם הפחיתו את חזקת הפולינום.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר פונקציות לשלב הראשון.", "math_expression": "u_1 = x^{2} \\quad , \\quad v_1' = e^{x}" },
            { "verbal_explanation": "נחשב נגזרת וקדומה.", "math_expression": "u_1' = 2x \\quad , \\quad v_1 = e^{x}" },
            { "verbal_explanation": "נציב בנוסחה.", "math_expression": "x^{2} e^{x} - \\int 2x e^{x} dx" },
            { "verbal_explanation": "נגדיר פונקציות לשלב השני.", "math_expression": "u_2 = 2x \\quad , \\quad v_2' = e^{x}" },
            { "verbal_explanation": "נחשב נגזרת וקדומה.", "math_expression": "u_2' = 2 \\quad , \\quad v_2 = e^{x}" },
            { "verbal_explanation": "נציב בנוסחה עבור החלק השני.", "math_expression": "\\int 2x e^{x} dx = 2x e^{x} - \\int 2 e^{x} dx = 2x e^{x} - 2e^{x}" },
            { "verbal_explanation": "נאחד את התוצאות.", "math_expression": "x^{2} e^{x} - (2x e^{x} - 2e^{x}) + C" },
            { "verbal_explanation": "נוציא גורם משותף.", "math_expression": "e^{x}(x^{2} - 2x + 2) + C" }
        ],
        "final_answer": "e^x(x² - 2x + 2) + C"
    },
    {
        "topic": "calculus_integral_572",
        "subTopic": "אינטגרציה בשיטת ההצבה ואינטגרציה בחלקים",
        "question_text": "חשבו את האינטגרל הלא מסוים הבא בשיטת ההצבה:<br>\\( \\int \\sin^{3}(x)\\cos(x) dx \\)&rlm;",
        "options": ["0.25 sin⁴(x) + C", "0.25 cos⁴(x) + C", "sin⁴(x) + C", "-0.25 sin⁴(x) + C"],
        "correctAnswer": 0,
        "hint": "הציבו את הפונקציה שהנגזרת שלה נמצאת מחוץ לחזקה.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר משתנה עזר.", "math_expression": "u = \\sin(x)" },
            { "verbal_explanation": "נגזור.", "math_expression": "du = \\cos(x) dx" },
            { "verbal_explanation": "נבצע הצבה באינטגרל.", "math_expression": "\\int u^{3} du" },
            { "verbal_explanation": "נבצע אינטגרציה לפי כלל החזקה.", "math_expression": "\\dfrac{u^{4}}{4} + C" },
            { "verbal_explanation": "נחזיר למשתנה המקורי.", "math_expression": "\\dfrac{\\sin^{4}(x)}{4} + C" }
        ],
        "final_answer": "0.25 sin⁴(x) + C"
    },
    {
        "topic": "calculus_integral_572",
        "subTopic": "אינטגרציה בשיטת ההצבה ואינטגרציה בחלקים",
        "question_text": "א. חשבו את האינטגרל \\( \\int x \\sin(x) dx \\).<br>ב. חשבו את ערך האינטגרל המסוים בין 0 ל- \\( \\pi \\).&rlm;",
        "options": ["א. sin(x) - x*cos(x) + C ב. π", "א. -x*cos(x) + C ב. π", "א. cos(x) + x*sin(x) + C ב. 2π", "א. sin(x) + x*cos(x) + C ב. π/2"],
        "correctAnswer": 0,
        "hint": "השתמשו באינטגרציה בחלקים כאשר הפונקציה הלינארית היא הנגזרת.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר פונקציות לאינטגרציה בחלקים.", "math_expression": "u = x \\quad , \\quad v' = \\sin(x)" },
            { "verbal_explanation": "נחשב נגזרת וקדומה.", "math_expression": "u' = 1 \\quad , \\quad v = -\\cos(x)" },
            { "verbal_explanation": "נציב בנוסחה.", "math_expression": "-x \\cos(x) - \\int -\\cos(x) dx" },
            { "verbal_explanation": "נחשב את האינטגרל הנותר.", "math_expression": "-x \\cos(x) + \\sin(x) + C" },
            { "verbal_explanation": "נציב גבולות לאינטגרל המסוים.", "math_expression": "(\\sin(\\pi) - \\pi \\cos(\\pi)) - (\\sin(0) - 0)" },
            { "verbal_explanation": "נחשב את ערכי הפונקציות הטריגונומטריות.", "math_expression": "(0 - \\pi(-1)) - (0 - 0)" },
            { "verbal_explanation": "נחשב את התוצאה הסופית.", "math_expression": "\\pi" }
        ],
        "final_answer": "א. sin(x) - x*cos(x) + C ב. π"
    },
    {
        "topic": "calculus_integral_572",
        "subTopic": "אינטגרציה בשיטת ההצבה ואינטגרציה בחלקים",
        "question_text": "חשבו את האינטגרל הבא בשיטת ההצבה:<br>\\( \\int \\dfrac{2x}{x^{2} + 1} dx \\)&rlm;",
        "options": ["ln(x² + 1) + C", "2ln(x² + 1) + C", "1 / (x² + 1)² + C", "ln(x) + C"],
        "correctAnswer": 0,
        "hint": "המונה הוא הנגזרת המדויקת של המכנה.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר משתנה עזר עבור המכנה.", "math_expression": "u = x^{2} + 1" },
            { "verbal_explanation": "נגזור.", "math_expression": "du = 2x dx" },
            { "verbal_explanation": "נבצע הצבה באינטגרל.", "math_expression": "\\int \\dfrac{1}{u} du" },
            { "verbal_explanation": "נבצע אינטגרציה.", "math_expression": "\\ln|u| + C" },
            { "verbal_explanation": "נחזיר למשתנה המקורי.", "math_expression": "\\ln(x^{2} + 1) + C" }
        ],
        "final_answer": "ln(x² + 1) + C"
    },
    {
        "topic": "calculus_integral_572",
        "subTopic": "אינטגרציה בשיטת ההצבה ואינטגרציה בחלקים",
        "question_text": "א. חשבו את האינטגרל \\( \\int x e^{x^{2}} dx \\).<br>ב. חשבו את הערך המסוים של האינטגרל בתחום שבין 0 ל-1.&rlm;",
        "options": ["א. 0.5e^(x²) + C ב. (e - 1)/2", "א. e^(x²) + C ב. e - 1", "א. 2e^(x²) + C ב. 2e - 2", "א. 0.5e^(x²) + C ב. e/2"],
        "correctAnswer": 0,
        "hint": "הציבו את החזקה כמשתנה עזר.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר משתנה עזר לחזקה.", "math_expression": "u = x^{2}" },
            { "verbal_explanation": "נגזור.", "math_expression": "du = 2x dx \\Rightarrow \\dfrac{du}{2} = x dx" },
            { "verbal_explanation": "נבצע הצבה באינטגרל.", "math_expression": "\\int \\dfrac{1}{2} e^{u} du" },
            { "verbal_explanation": "נבצע אינטגרציה.", "math_expression": "\\dfrac{1}{2} e^{u} + C" },
            { "verbal_explanation": "נחזיר למשתנה המקורי.", "math_expression": "\\dfrac{1}{2} e^{x^{2}} + C" },
            { "verbal_explanation": "נציב גבולות.", "math_expression": "\\dfrac{1}{2} e^{1^{2}} - \\dfrac{1}{2} e^{0^{2}}" },
            { "verbal_explanation": "נחשב את התוצאה הסופית.", "math_expression": "\\dfrac{e - 1}{2}" }
        ],
        "final_answer": "א. 0.5e^(x²) + C ב. (e - 1)/2"
    },

    // ==========================================
    // תת נושא 2: אינטגרלים של פונקציות שורש, מעריכיות, לוגריתמיות וטריגונומטריות (10 שאלות)
    // ==========================================
    {
        "topic": "calculus_integral_572",
        "subTopic": "אינטגרלים של פונקציות שורש, מעריכיות, לוגריתמיות וטריגונומטריות",
        "question_text": "חשבו את האינטגרל הלא מסוים הבא:<br>\\( \\int (e^{2x} + e^{-x}) dx \\)&rlm;",
        "options": ["0.5e^(2x) - e^(-x) + C", "2e^(2x) - e^(-x) + C", "0.5e^(2x) + e^(-x) + C", "e^(2x) - e^(-x) + C"],
        "correctAnswer": 0,
        "hint": "חלקו בנגזרת הפנימית של החזקה.",
        "solution_steps": [
            { "verbal_explanation": "נבצע אינטגרציה לאיבר הראשון.", "math_expression": "\\int e^{2x} dx = \\dfrac{e^{2x}}{2}" },
            { "verbal_explanation": "נבצע אינטגרציה לאיבר השני.", "math_expression": "\\int e^{-x} dx = \\dfrac{e^{-x}}{-1} = -e^{-x}" },
            { "verbal_explanation": "נאחד את התוצאות.", "math_expression": "\\dfrac{1}{2}e^{2x} - e^{-x} + C" }
        ],
        "final_answer": "0.5e^(2x) - e^(-x) + C"
    },
    {
        "topic": "calculus_integral_572",
        "subTopic": "אינטגרלים של פונקציות שורש, מעריכיות, לוגריתמיות וטריגונומטריות",
        "question_text": "חשבו את האינטגרל הלא מסוים הבא:<br>\\( \\int \\dfrac{1}{3x - 2} dx \\)&rlm;",
        "options": ["(1/3)ln|3x - 2| + C", "ln|3x - 2| + C", "3ln|3x - 2| + C", "-1/(3x - 2)² + C"],
        "correctAnswer": 0,
        "hint": "האינטגרל של אחד חלקי פונקציה לינארית הוא לוגריתם טבעי חלקי מקדם המשתנה.",
        "solution_steps": [
            { "verbal_explanation": "נזהה את הפונקציה במכנה והנגזרת הפנימית שלה.", "math_expression": "u = 3x - 2 \\quad , \\quad u' = 3" },
            { "verbal_explanation": "נשתמש בכלל האינטגרציה ללוגריתם טבעי.", "math_expression": "\\int \\dfrac{1}{ax + b} dx = \\dfrac{\\ln|ax + b|}{a}" },
            { "verbal_explanation": "נציב את הנתונים בנוסחה.", "math_expression": "\\dfrac{\\ln|3x - 2|}{3} + C" }
        ],
        "final_answer": "(1/3)ln|3x - 2| + C"
    },
    {
        "topic": "calculus_integral_572",
        "subTopic": "אינטגרלים של פונקציות שורש, מעריכיות, לוגריתמיות וטריגונומטריות",
        "question_text": "חשבו את האינטגרל הלא מסוים הבא:<br>\\( \\int \\sqrt{2x + 1} dx \\)&rlm;",
        "options": ["(1/3)(2x + 1)^1.5 + C", "(2/3)(2x + 1)^1.5 + C", "(2x + 1)^1.5 + C", "0.5(2x + 1)^1.5 + C"],
        "correctAnswer": 0,
        "hint": "המירו את השורש לחזקת חצי והשתמשו בכלל החזקה בשילוב חלוקה בנגזרת הפנימית.",
        "solution_steps": [
            { "verbal_explanation": "נמיר את הפונקציה לכתיב חזקות.", "math_expression": "\\int (2x + 1)^{0.5} dx" },
            { "verbal_explanation": "נשתמש בכלל האינטגרציה לפונקציה מורכבת ממעלה ראשונה.", "math_expression": "\\dfrac{(2x + 1)^{1.5}}{1.5 \\times 2} + C" },
            { "verbal_explanation": "נחשב את המכנה.", "math_expression": "1.5 \\times 2 = 3" },
            { "verbal_explanation": "נרשום את התוצאה הסופית.", "math_expression": "\\dfrac{1}{3}(2x + 1)^{1.5} + C" }
        ],
        "final_answer": "(1/3)(2x + 1)^1.5 + C"
    },
    {
        "topic": "calculus_integral_572",
        "subTopic": "אינטגרלים של פונקציות שורש, מעריכיות, לוגריתמיות וטריגונומטריות",
        "question_text": "חשבו את האינטגרל הלא מסוים הבא:<br>\\( \\int \\cos(3x) dx \\)&rlm;",
        "options": ["(1/3)sin(3x) + C", "- (1/3)sin(3x) + C", "3sin(3x) + C", "-3sin(3x) + C"],
        "correctAnswer": 0,
        "hint": "האינטגרל של קוסינוס הוא סינוס, חלקו בנגזרת הפנימית.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את כלל האינטגרציה לפונקציית הקוסינוס.", "math_expression": "\\int \\cos(ax) dx = \\dfrac{\\sin(ax)}{a}" },
            { "verbal_explanation": "נזהה את המקדם הפנימי.", "math_expression": "a = 3" },
            { "verbal_explanation": "נציב את המקדם לקבלת התוצאה.", "math_expression": "\\dfrac{1}{3}\\sin(3x) + C" }
        ],
        "final_answer": "(1/3)sin(3x) + C"
    },
    {
        "topic": "calculus_integral_572",
        "subTopic": "אינטגרלים של פונקציות שורש, מעריכיות, לוגריתמיות וטריגונומטריות",
        "question_text": "א. הפשטו את הביטוי \\( \\sin^{2}(x) + \\cos^{2}(x) \\).<br>ב. חשבו את האינטגרל המסוים \\( \\int_{0}^{\\pi} (\\sin^{2}(x) + \\cos^{2}(x)) dx \\).&rlm;",
        "options": ["א. 1 ב. π", "א. 1 ב. 2π", "א. 2 ב. 2π", "א. 0.5 ב. π/2"],
        "correctAnswer": 0,
        "hint": "השתמשו בזהות הטריגונומטרית היסודית ביותר.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בזהות הפיתגוראית.", "math_expression": "\\sin^{2}(x) + \\cos^{2}(x) = 1" },
            { "verbal_explanation": "נציב את הזהות בתוך האינטגרל.", "math_expression": "\\int_{0}^{\\pi} 1 dx" },
            { "verbal_explanation": "נבצע אינטגרציה קלה.", "math_expression": "[x]_{0}^{\\pi}" },
            { "verbal_explanation": "נציב את הגבולות.", "math_expression": "\\pi - 0" },
            { "verbal_explanation": "התוצאה הסופית חושבה.", "math_expression": "\\pi" }
        ],
        "final_answer": "א. 1 ב. π"
    },
    {
        "topic": "calculus_integral_572",
        "subTopic": "אינטגרלים של פונקציות שורש, מעריכיות, לוגריתמיות וטריגונומטריות",
        "question_text": "חשבו את האינטגרל הלא מסוים הבא:<br>\\( \\int \\dfrac{e^{x}}{e^{x} + 1} dx \\)&rlm;",
        "options": ["ln(e^x + 1) + C", "e^x + C", "e^x / (e^x + 1)² + C", "ln(e^x) + C"],
        "correctAnswer": 0,
        "hint": "זהו שבר שבו המונה הוא הנגזרת של המכנה.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את הפונקציה במכנה.", "math_expression": "u = e^{x} + 1" },
            { "verbal_explanation": "נגזור אותה.", "math_expression": "u' = e^{x}" },
            { "verbal_explanation": "נזהה את תבנית האינטגרל הלוגריתמי.", "math_expression": "\\int \\dfrac{u'}{u} dx = \\ln|u| + C" },
            { "verbal_explanation": "נציב את הפונקציה לקבלת התוצאה. הפונקציה תמיד חיובית ולכן הערך המוחלט מיותר.", "math_expression": "\\ln(e^{x} + 1) + C" }
        ],
        "final_answer": "ln(e^x + 1) + C"
    },
    {
        "topic": "calculus_integral_572",
        "subTopic": "אינטגרלים של פונקציות שורש, מעריכיות, לוגריתמיות וטריגונומטריות",
        "question_text": "חשבו את האינטגרל הלא מסוים הבא:<br>\\( \\int \\tan(x) dx \\)&rlm;",
        "options": ["-ln|cos(x)| + C", "ln|cos(x)| + C", "ln|sin(x)| + C", "-ln|sin(x)| + C"],
        "correctAnswer": 0,
        "hint": "כתבו את פונקציית הטנגנס כסינוס חלקי קוסינוס.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בזהות.", "math_expression": "\\int \\dfrac{\\sin(x)}{\\cos(x)} dx" },
            { "verbal_explanation": "נזהה נגזרת של המכנה.", "math_expression": "u = \\cos(x) \\Rightarrow u' = -\\sin(x)" },
            { "verbal_explanation": "נכפול במינוס אחת בחוץ ובפנים לשמירת שוויון.", "math_expression": "- \\int \\dfrac{-\\sin(x)}{\\cos(x)} dx" },
            { "verbal_explanation": "נבצע אינטגרציה לפי כלל הלוגריתם.", "math_expression": "-\\ln|\\cos(x)| + C" }
        ],
        "final_answer": "-ln|cos(x)| + C"
    },
    {
        "topic": "calculus_integral_572",
        "subTopic": "אינטגרלים של פונקציות שורש, מעריכיות, לוגריתמיות וטריגונומטריות",
        "question_text": "חשבו את האינטגרל הלא מסוים הבא:<br>\\( \\int \\dfrac{1}{\\sqrt{x}} dx \\)&rlm;",
        "options": ["2√x + C", "0.5√x + C", "ln|√x| + C", "x^(-0.5) + C"],
        "correctAnswer": 0,
        "hint": "העבירו את השורש למונה בעזרת חזקה שלילית.",
        "solution_steps": [
            { "verbal_explanation": "נמיר את הפונקציה לחזקה שלילית.", "math_expression": "\\int x^{-0.5} dx" },
            { "verbal_explanation": "נשתמש בכלל החזקה לאינטגרציה.", "math_expression": "\\dfrac{x^{0.5}}{0.5} + C" },
            { "verbal_explanation": "נפשט את השבר.", "math_expression": "2x^{0.5} + C" },
            { "verbal_explanation": "נחזיר לכתיב שורש.", "math_expression": "2\\sqrt{x} + C" }
        ],
        "final_answer": "2√x + C"
    },
    {
        "topic": "calculus_integral_572",
        "subTopic": "אינטגרלים של פונקציות שורש, מעריכיות, לוגריתמיות וטריגונומטריות",
        "question_text": "חשבו את האינטגרל המסוים הבא:<br>\\( \\int_{0}^{\\pi/2} \\sin(x) dx \\)&rlm;",
        "options": ["1", "0", "-1", "π/2"],
        "correctAnswer": 0,
        "hint": "הפונקציה הקדומה של סינוס היא מינוס קוסינוס.",
        "solution_steps": [
            { "verbal_explanation": "נמצא פונקציה קדומה.", "math_expression": "[-\\cos(x)]_{0}^{\\pi/2}" },
            { "verbal_explanation": "נציב גבול עליון.", "math_expression": "-\\cos(\\dfrac{\\pi}{2}) = 0" },
            { "verbal_explanation": "נציב גבול תחתון.", "math_expression": "-\\cos(0) = -1" },
            { "verbal_explanation": "נחסר את הגבולות.", "math_expression": "0 - (-1) = 1" }
        ],
        "final_answer": "1"
    },
    {
        "topic": "calculus_integral_572",
        "subTopic": "אינטגרלים של פונקציות שורש, מעריכיות, לוגריתמיות וטריגונומטריות",
        "question_text": "חשבו את האינטגרל המסוים הבא:<br>\\( \\int_{0}^{\\ln(2)} e^{x} dx \\)&rlm;",
        "options": ["1", "e", "2", "ln(2)"],
        "correctAnswer": 0,
        "hint": "הפונקציה הקדומה של פונקציה מעריכית טבעית היא הפונקציה עצמה.",
        "solution_steps": [
            { "verbal_explanation": "נמצא פונקציה קדומה.", "math_expression": "[e^{x}]_{0}^{\\ln(2)}" },
            { "verbal_explanation": "נציב גבולות.", "math_expression": "e^{\\ln(2)} - e^{0}" },
            { "verbal_explanation": "נפשט בעזרת חוקי לוגריתמים ומעריכים.", "math_expression": "2 - 1 = 1" }
        ],
        "final_answer": "1"
    },

    // ==========================================
    // תת נושא 3: חישוב שטחים מורכבים הכלואים בין כמה פונקציות וצירים (10 שאלות)
    // ==========================================
    {
        "topic": "calculus_integral_572",
        "subTopic": "חישוב שטחים מורכבים הכלואים בין כמה פונקציות וצירים",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 150\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M 40 140 Q 100 80 160 20\" fill=\"none\" stroke=\"#f87171\" stroke-width=\"2\"/><path d=\"M 40 140 Q 140 140 160 20\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"20\" y1=\"140\" x2=\"180\" y2=\"140\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><line x1=\"40\" y1=\"10\" x2=\"40\" y2=\"150\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/></svg></div><br>חשבו את השטח הכלוא בין הגרפים של הפונקציות \\( y = x \\) ו-\\( y = x^{2} \\).&rlm;",
        "options": ["1/6", "1/3", "1/2", "1/4"],
        "correctAnswer": 0,
        "hint": "מצאו את נקודות החיתוך וחשבו את האינטגרל של ההפרש בין הפונקציות.",
        "solution_steps": [
            { "verbal_explanation": "נמצא נקודות חיתוך.", "math_expression": "x^{2} = x \\Rightarrow x^{2} - x = 0" },
            { "verbal_explanation": "נפרק ונמצא פתרונות.", "math_expression": "x(x - 1) = 0 \\Rightarrow x = 0 \\quad , \\quad x = 1" },
            { "verbal_explanation": "נרכיב פונקציית שטח. הישר נמצא מעל הפרבולה בתחום זה.", "math_expression": "S = \\int_{0}^{1} (x - x^{2}) dx" },
            { "verbal_explanation": "נבצע אינטגרציה.", "math_expression": "S = [\\dfrac{x^{2}}{2} - \\dfrac{x^{3}}{3}]_{0}^{1}" },
            { "verbal_explanation": "נציב גבולות.", "math_expression": "S = (\\dfrac{1}{2} - \\dfrac{1}{3}) - 0" },
            { "verbal_explanation": "נחשב את ההפרש.", "math_expression": "S = \\dfrac{3}{6} - \\dfrac{2}{6} = \\dfrac{1}{6}" }
        ],
        "final_answer": "1/6"
    },
    {
        "topic": "calculus_integral_572",
        "subTopic": "חישוב שטחים מורכבים הכלואים בין כמה פונקציות וצירים",
        "question_text": "א. מצאו את נקודת החיתוך בין הפונקציה \\( y = \\sqrt{x} \\) לבין הישר \\( y = x - 2 \\).<br>ב. חשבו את השטח הכלוא בין גרף הפונקציה, הישר וציר ה-\\( x \\).&rlm;",
        "options": ["א. (4, 2) ב. 10/3", "א. (4, 2) ב. 16/3", "א. (1, 1) ב. 2", "א. (4, 2) ב. 5/3"],
        "correctAnswer": 0,
        "hint": "חלקו את השטח לשני חלקים או השתמשו באינטגרל על ציר ה-y.",
        "solution_steps": [
            { "verbal_explanation": "נשווה למציאת חיתוך.", "math_expression": "\\sqrt{x} = x - 2" },
            { "verbal_explanation": "נעלה בריבוע.", "math_expression": "x = x^{2} - 4x + 4 \\Rightarrow x^{2} - 5x + 4 = 0" },
            { "verbal_explanation": "נפתור משוואה ריבועית.", "math_expression": "x = 4 \\quad , \\quad x = 1" },
            { "verbal_explanation": "נפסול את הפתרון השגוי ממשוואת שורש.", "math_expression": "x = 1 \\Rightarrow \\sqrt{1} \\neq 1 - 2 \\Rightarrow x = 4" },
            { "verbal_explanation": "נחשב שטח בעזרת ציר איקס בשני חלקים. חלק ראשון: שורש עד ציר אופקי.", "math_expression": "S_1 = \\int_{0}^{2} \\sqrt{x} dx = [\\dfrac{2x^{1.5}}{3}]_{0}^{2} = \\dfrac{2\\sqrt{8}}{3}" },
            { "verbal_explanation": "חלק שני: הפרש בין השורש לישר.", "math_expression": "S_2 = \\int_{2}^{4} (\\sqrt{x} - (x - 2)) dx" },
            { "verbal_explanation": "נבצע אינטגרציה לחלק השני.", "math_expression": "S_2 = [\\dfrac{2x^{1.5}}{3} - \\dfrac{x^{2}}{2} + 2x]_{2}^{4}" },
            { "verbal_explanation": "נציב גבול עליון ותחתון ונחשב. (דרך קלה יותר: שטח השורש פחות משולש).", "math_expression": "S = \\int_{0}^{4} \\sqrt{x} dx - \\text{Area}_{\\text{triangle}}" },
            { "verbal_explanation": "נחשב שטח תחת השורש.", "math_expression": "\\int_{0}^{4} \\sqrt{x} dx = \\dfrac{2(4)^{1.5}}{3} = \\dfrac{16}{3}" },
            { "verbal_explanation": "נחשב שטח משולש ונגסר.", "math_expression": "S_{\\text{tri}} = \\dfrac{2 \\times 2}{2} = 2 \\Rightarrow S = \\dfrac{16}{3} - 2 = \\dfrac{10}{3}" }
        ],
        "final_answer": "א. (4, 2) ב. 10/3"
    },
    {
        "topic": "calculus_integral_572",
        "subTopic": "חישוב שטחים מורכבים הכלואים בין כמה פונקציות וצירים",
        "question_text": "חשבו את השטח הכלוא בין הפונקציות \\( y = e^{x} \\), \\( y = e^{-x} \\) והישר \\( x = 1 \\).&rlm;",
        "options": ["e + 1/e - 2", "e - 1/e", "e + 1/e", "2e - 2"],
        "correctAnswer": 0,
        "hint": "שתי הפונקציות נחתכות על ציר ה-y. חשבו את האינטגרל של ההפרש ביניהן מאפס ועד אחת.",
        "solution_steps": [
            { "verbal_explanation": "נמצא נקודת חיתוך בין הפונקציות.", "math_expression": "e^{x} = e^{-x} \\Rightarrow e^{2x} = 1 \\Rightarrow 2x = 0 \\Rightarrow x = 0" },
            { "verbal_explanation": "נרכיב פונקציית שטח.", "math_expression": "S = \\int_{0}^{1} (e^{x} - e^{-x}) dx" },
            { "verbal_explanation": "נבצע אינטגרציה.", "math_expression": "S = [e^{x} + e^{-x}]_{0}^{1}" },
            { "verbal_explanation": "נציב גבולות.", "math_expression": "(e^{1} + e^{-1}) - (e^{0} + e^{-0})" },
            { "verbal_explanation": "נחשב ערך סופי.", "math_expression": "e + \\dfrac{1}{e} - 2" }
        ],
        "final_answer": "e + 1/e - 2"
    },
    {
        "topic": "calculus_integral_572",
        "subTopic": "חישוב שטחים מורכבים הכלואים בין כמה פונקציות וצירים",
        "question_text": "חשבו את השטח הכלוא בין הפונקציות \\( y = \\sin(x) \\), \\( y = \\cos(x) \\), וציר ה-\\( y \\) ברביע הראשון.&rlm;",
        "options": ["√2 - 1", "1", "√2", "0.5"],
        "correctAnswer": 0,
        "hint": "נקודת החיתוך ברביע הראשון היא פאי חלקי 4. פונקציית קוסינוס גדולה יותר בתחום זה.",
        "solution_steps": [
            { "verbal_explanation": "נמצא נקודת חיתוך.", "math_expression": "\\sin(x) = \\cos(x) \\Rightarrow \\tan(x) = 1 \\Rightarrow x = \\dfrac{\\pi}{4}" },
            { "verbal_explanation": "נרכיב פונקציית שטח עם פונקציה עליונה ותחתונה.", "math_expression": "S = \\int_{0}^{\\pi/4} (\\cos(x) - \\sin(x)) dx" },
            { "verbal_explanation": "נבצע אינטגרציה.", "math_expression": "S = [\\sin(x) + \\cos(x)]_{0}^{\\pi/4}" },
            { "verbal_explanation": "נציב גבול עליון.", "math_expression": "\\sin(\\dfrac{\\pi}{4}) + \\cos(\\dfrac{\\pi}{4}) = \\dfrac{\\sqrt{2}}{2} + \\dfrac{\\sqrt{2}}{2} = \\sqrt{2}" },
            { "verbal_explanation": "נציב גבול תחתון.", "math_expression": "\\sin(0) + \\cos(0) = 0 + 1 = 1" },
            { "verbal_explanation": "נחסר לקבלת השטח.", "math_expression": "S = \\sqrt{2} - 1" }
        ],
        "final_answer": "√2 - 1"
    },
    {
        "topic": "calculus_integral_572",
        "subTopic": "חישוב שטחים מורכבים הכלואים בין כמה פונקציות וצירים",
        "question_text": "חשבו את השטח הכלוא בין הפונקציה \\( y = \\ln(x) \\), ציר ה-\\( x \\), והישר \\( x = e \\).&rlm;",
        "options": ["1", "e", "e - 1", "2"],
        "correctAnswer": 0,
        "hint": "היעזרו באינטגרציה בחלקים שכבר חישבנו (הפונקציה הקדומה של לוגריתם היא xlnx - x).",
        "solution_steps": [
            { "verbal_explanation": "נמצא חיתוך עם ציר אופקי.", "math_expression": "\\ln(x) = 0 \\Rightarrow x = 1" },
            { "verbal_explanation": "נרכיב פונקציית שטח.", "math_expression": "S = \\int_{1}^{e} \\ln(x) dx" },
            { "verbal_explanation": "נציב פונקציה קדומה מוכרת.", "math_expression": "S = [x \\ln(x) - x]_{1}^{e}" },
            { "verbal_explanation": "נציב גבול עליון.", "math_expression": "e \\ln(e) - e = e(1) - e = 0" },
            { "verbal_explanation": "נציב גבול תחתון.", "math_expression": "1 \\ln(1) - 1 = 0 - 1 = -1" },
            { "verbal_explanation": "נחשב את ההפרש.", "math_expression": "S = 0 - (-1) = 1" }
        ],
        "final_answer": "1"
    },
    {
        "topic": "calculus_integral_572",
        "subTopic": "חישוב שטחים מורכבים הכלואים בין כמה פונקציות וצירים",
        "question_text": "חשבו את השטח הכלוא בין הגרף של \\( y = \\sqrt{x} \\), הישר \\( y = 2 \\), וציר ה-\\( y \\).&rlm;",
        "options": ["8/3", "4/3", "16/3", "2"],
        "correctAnswer": 0,
        "hint": "אפשר לבצע אינטגרל על ציר ה-y, או לחשב שטח מלבן פחות השטח מתחת לפונקציה.",
        "solution_steps": [
            { "verbal_explanation": "נמצא חיתוך בין הפונקציה לישר.", "math_expression": "\\sqrt{x} = 2 \\Rightarrow x = 4" },
            { "verbal_explanation": "נחשב שטח מלבן גדול החוסם את השטח.", "math_expression": "S_{rect} = 4 \\times 2 = 8" },
            { "verbal_explanation": "נחשב שטח מתחת לגרף.", "math_expression": "S_{under} = \\int_{0}^{4} \\sqrt{x} dx = [\\dfrac{2x^{1.5}}{3}]_{0}^{4}" },
            { "verbal_explanation": "נציב ערך.", "math_expression": "S_{under} = \\dfrac{2(8)}{3} = \\dfrac{16}{3}" },
            { "verbal_explanation": "נחסר לקבלת השטח המבוקש.", "math_expression": "S = 8 - \\dfrac{16}{3} = \\dfrac{24}{3} - \\dfrac{16}{3} = \\dfrac{8}{3}" }
        ],
        "final_answer": "8/3"
    },
    {
        "topic": "calculus_integral_572",
        "subTopic": "חישוב שטחים מורכבים הכלואים בין כמה פונקציות וצירים",
        "question_text": "חשבו את השטח הכלוא ברביע הראשון בין שלוש הפונקציות: \\( y = x \\), \\( y = \\dfrac{1}{x} \\), ו-\\( y = \\dfrac{1}{4}x \\).&rlm;",
        "options": ["ln(2)", "0.5 + ln(2)", "1.5", "ln(4)"],
        "correctAnswer": 0,
        "hint": "מצאו נקודות חיתוך. השטח יחולק לשניים באחת מנקודות החיתוך.",
        "solution_steps": [
            { "verbal_explanation": "נמצא חיתוך עליון.", "math_expression": "x = \\dfrac{1}{x} \\Rightarrow x^{2} = 1 \\Rightarrow x = 1" },
            { "verbal_explanation": "נמצא חיתוך תחתון.", "math_expression": "\\dfrac{1}{x} = \\dfrac{x}{4} \\Rightarrow x^{2} = 4 \\Rightarrow x = 2" },
            { "verbal_explanation": "נרכיב פונקציית שטח ראשונה.", "math_expression": "S_1 = \\int_{0}^{1} (x - \\dfrac{x}{4}) dx = \\int_{0}^{1} \\dfrac{3x}{4} dx" },
            { "verbal_explanation": "נחשב חלק ראשון.", "math_expression": "S_1 = [\\dfrac{3x^{2}}{8}]_{0}^{1} = \\dfrac{3}{8}" },
            { "verbal_explanation": "נרכיב פונקציית שטח שנייה.", "math_expression": "S_2 = \\int_{1}^{2} (\\dfrac{1}{x} - \\dfrac{x}{4}) dx" },
            { "verbal_explanation": "נבצע אינטגרציה.", "math_expression": "S_2 = [\\ln(x) - \\dfrac{x^{2}}{8}]_{1}^{2}" },
            { "verbal_explanation": "נציב גבולות לחלק שני.", "math_expression": "(\\ln(2) - \\dfrac{4}{8}) - (\\ln(1) - \\dfrac{1}{8}) = \\ln(2) - 0.5 + 0.125 = \\ln(2) - \\dfrac{3}{8}" },
            { "verbal_explanation": "נחבר את שני השטחים.", "math_expression": "S = \\dfrac{3}{8} + \\ln(2) - \\dfrac{3}{8} = \\ln(2)" }
        ],
        "final_answer": "ln(2)"
    },
    {
        "topic": "calculus_integral_572",
        "subTopic": "חישוב שטחים מורכבים הכלואים בין כמה פונקציות וצירים",
        "question_text": "נתונה הפונקציה \\( y = x^{2} \\). השטח הכלוא בין הפונקציה, ציר ה-\\( x \\), והישר \\( x = a \\) (עבור \\( a > 0 \\)) שווה ל-9. מצאו את \\( a \\).&rlm;",
        "options": ["3", "27", "2", "4"],
        "correctAnswer": 0,
        "hint": "בצעו אינטגרל מסוים, השוו ל-9 וחלצו את הפרמטר.",
        "solution_steps": [
            { "verbal_explanation": "נרכיב אינטגרל שטח עם גבול עליון פרמטרי.", "math_expression": "\\int_{0}^{a} x^{2} dx = 9" },
            { "verbal_explanation": "נבצע אינטגרציה.", "math_expression": "[\\dfrac{x^{3}}{3}]_{0}^{a} = 9" },
            { "verbal_explanation": "נציב גבולות.", "math_expression": "\\dfrac{a^{3}}{3} - 0 = 9" },
            { "verbal_explanation": "נכפול בשלוש.", "math_expression": "a^{3} = 27" },
            { "verbal_explanation": "נוציא שורש שלישי.", "math_expression": "a = 3" }
        ],
        "final_answer": "3"
    },
    {
        "topic": "calculus_integral_572",
        "subTopic": "חישוב שטחים מורכבים הכלואים בין כמה פונקציות וצירים",
        "question_text": "חשבו את השטח הכלוא בין גרף הפונקציה \\( y = x^{2} - 4 \\) וציר ה-\\( x \\).&rlm;",
        "options": ["32/3", "16/3", "16", "8/3"],
        "correctAnswer": 0,
        "hint": "הפונקציה נמצאת מתחת לציר האופקי, לכן השתמשו בערך מוחלט או כפלו במינוס.",
        "solution_steps": [
            { "verbal_explanation": "נמצא נקודות חיתוך.", "math_expression": "x^{2} - 4 = 0 \\Rightarrow x = \\pm 2" },
            { "verbal_explanation": "נרכיב פונקציית שטח עם סימן מינוס בגלל מיקום הפונקציה.", "math_expression": "S = \\int_{-2}^{2} (0 - (x^{2} - 4)) dx = \\int_{-2}^{2} (4 - x^{2}) dx" },
            { "verbal_explanation": "נבצע אינטגרציה.", "math_expression": "S = [4x - \\dfrac{x^{3}}{3}]_{-2}^{2}" },
            { "verbal_explanation": "נציב גבול עליון.", "math_expression": "4(2) - \\dfrac{8}{3} = 8 - \\dfrac{8}{3} = \\dfrac{16}{3}" },
            { "verbal_explanation": "נציב גבול תחתון.", "math_expression": "4(-2) - \\dfrac{-8}{3} = -8 + \\dfrac{8}{3} = -\\dfrac{16}{3}" },
            { "verbal_explanation": "נחשב סכום סופי.", "math_expression": "S = \\dfrac{16}{3} - (-\\dfrac{16}{3}) = \\dfrac{32}{3}" }
        ],
        "final_answer": "32/3"
    },
    {
        "topic": "calculus_integral_572",
        "subTopic": "חישוב שטחים מורכבים הכלואים בין כמה פונקציות וצירים",
        "question_text": "חשבו את השטח הכלוא בין הפונקציות \\( y = x^{3} \\) ו-\\( y = x \\).&rlm;",
        "options": ["1/2", "1/4", "1", "0"],
        "correctAnswer": 0,
        "hint": "השטח סימטרי בשני רביעים. חשבו לאחד מהם והכפילו בשתיים.",
        "solution_steps": [
            { "verbal_explanation": "נמצא נקודות חיתוך.", "math_expression": "x^{3} = x \\Rightarrow x^{3} - x = 0 \\Rightarrow x(x - 1)(x + 1) = 0" },
            { "verbal_explanation": "נמצא שלושה שורשים.", "math_expression": "x = 0 \\quad , \\quad x = 1 \\quad , \\quad x = -1" },
            { "verbal_explanation": "נחשב שטח ברביע הראשון בו הישר מעל עקומת הפולינום.", "math_expression": "S_1 = \\int_{0}^{1} (x - x^{3}) dx" },
            { "verbal_explanation": "נבצע אינטגרציה.", "math_expression": "S_1 = [\\dfrac{x^{2}}{2} - \\dfrac{x^{4}}{4}]_{0}^{1}" },
            { "verbal_explanation": "נציב גבולות.", "math_expression": "S_1 = \\dfrac{1}{2} - \\dfrac{1}{4} = \\dfrac{1}{4}" },
            { "verbal_explanation": "בשל סימטריה אי-זוגית, השטח השני שווה בגודלו.", "math_expression": "S = 2 \\times S_1 = 2 \\times \\dfrac{1}{4} = \\dfrac{1}{2}" }
        ],
        "final_answer": "1/2"
    },
    {
        "topic": "calculus_integral_572",
        "subTopic": "מציאת נפח גוף סיבוב (סיבוב סביב ציר x או y)",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 120\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M 40 100 Q 100 20 160 100\" fill=\"#f87171\" fill-opacity=\"0.3\" stroke=\"#0f172a\" stroke-width=\"2\"/><ellipse cx=\"100\" cy=\"100\" rx=\"60\" ry=\"15\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"1.5\" stroke-dasharray=\"4\"/><line x1=\"20\" y1=\"100\" x2=\"180\" y2=\"100\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/></svg></div><br>השטח הכלוא בין גרף הפונקציה \\( y = \\sqrt{x} \\), ציר ה-\\( x \\) והישר \\( x = 4 \\) מסתובב סביב ציר ה-\\( x \\). מצאו את נפח גוף הסיבוב שנוצר.&rlm;",
        "options": ["8π", "4π", "16π", "2π"],
        "correctAnswer": 0,
        "hint": "השתמשו בנוסחה לנפח גוף סיבוב סביב ציר איקס: פאי כפול האינטגרל של הפונקציה בריבוע.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את נוסחת הנפח לסיבוב סביב ציר האופק.", "math_expression": "V = \\pi \\int_{a}^{b} (f(x))^{2} dx" },
            { "verbal_explanation": "נציב את הפונקציה ואת גבולות האינטגרציה.", "math_expression": "V = \\pi \\int_{0}^{4} (\\sqrt{x})^{2} dx" },
            { "verbal_explanation": "נפשט את הביטוי בתוך האינטגרל.", "math_expression": "V = \\pi \\int_{0}^{4} x dx" },
            { "verbal_explanation": "נמצא פונקציה קדומה.", "math_expression": "V = \\pi [\\dfrac{x^{2}}{2}]_{0}^{4}" },
            { "verbal_explanation": "נציב את הגבול העליון.", "math_expression": "\\dfrac{4^{2}}{2} = 8" },
            { "verbal_explanation": "נציב את הגבול התחתון.", "math_expression": "\\dfrac{0^{2}}{2} = 0" },
            { "verbal_explanation": "נחשב את הנפח הסופי.", "math_expression": "V = 8\\pi" }
        ],
        "final_answer": "8π"
    },
    {
        "topic": "calculus_integral_572",
        "subTopic": "מציאת נפח גוף סיבוב (סיבוב סביב ציר x או y)",
        "question_text": "השטח הכלוא בין הפונקציה \\( y = x^{2} \\), ציר ה-\\( y \\) והישרים \\( y = 1 \\) ו-\\( y = 4 \\) מסתובב סביב ציר ה-\\( y \\). מצאו את נפח גוף הסיבוב.&rlm;",
        "options": ["7.5π", "15π", "5π", "8π"],
        "correctAnswer": 0,
        "hint": "בסיבוב סביב ציר וואי, יש לבודד את איקס בריבוע כפונקציה של וואי ולבצע אינטגרל לפי די-וואי.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את נוסחת הנפח לסיבוב סביב ציר האנך.", "math_expression": "V = \\pi \\int_{c}^{d} x^{2} dy" },
            { "verbal_explanation": "נבודד את ריבוע המשתנה האופקי מתוך משוואת הפונקציה.", "math_expression": "x^{2} = y" },
            { "verbal_explanation": "נציב את הביטוי ואת הגבולות הנתונים.", "math_expression": "V = \\pi \\int_{1}^{4} y dy" },
            { "verbal_explanation": "נמצא פונקציה קדומה.", "math_expression": "V = \\pi [\\dfrac{y^{2}}{2}]_{1}^{4}" },
            { "verbal_explanation": "נציב גבול עליון.", "math_expression": "\\dfrac{4^{2}}{2} = 8" },
            { "verbal_explanation": "נציב גבול תחתון.", "math_explanation": "\\dfrac{1^{2}}{2} = 0.5" },
            { "verbal_explanation": "נחשב את ההפרש ונכפול בקבוע.", "math_expression": "V = (8 - 0.5)\\pi = 7.5\\pi" }
        ],
        "final_answer": "7.5π"
    },
    {
        "topic": "calculus_integral_572",
        "subTopic": "מציאת נפח גוף סיבוב (סיבוב סביב ציר x או y)",
        "question_text": "השטח הכלוא בין הפונקציות \\( y = x \\) ו-\\( y = x^{2} \\) מסתובב סביב ציר ה-\\( x \\). מצאו את נפח גוף הסיבוב שנוצר.&rlm;",
        "options": ["2π/15", "π/6", "π/30", "4π/15"],
        "correctAnswer": 0,
        "hint": "נפח הנוצר בין שתי פונקציות הוא הפרש הנפחים (הפונקציה העליונה בריבוע פחות התחתונה בריבוע).",
        "solution_steps": [
            { "verbal_explanation": "נמצא את נקודות החיתוך לקביעת גבולות האינטגרציה.", "math_expression": "x^{2} = x \\Rightarrow x(x - 1) = 0 \\Rightarrow x_1 = 0 , x_2 = 1" },
            { "verbal_explanation": "נרכיב את אינטגרל הנפח כהפרש בין ריבועי הפונקציות.", "math_expression": "V = \\pi \\int_{0}^{1} (x^{2} - (x^{2})^{2}) dx" },
            { "verbal_explanation": "נפשט את הביטוי.", "math_expression": "V = \\pi \\int_{0}^{1} (x^{2} - x^{4}) dx" },
            { "verbal_explanation": "נמצא פונקציה קדומה.", "math_expression": "V = \\pi [\\dfrac{x^{3}}{3} - \\dfrac{x^{5}}{5}]_{0}^{1}" },
            { "verbal_explanation": "נציב את הגבולות.", "math_expression": "\\pi (\\dfrac{1}{3} - \\dfrac{1}{5})" },
            { "verbal_explanation": "נבצע מכנה משותף.", "math_expression": "\\dfrac{5}{15} - \\dfrac{3}{15} = \\dfrac{2}{15}" },
            { "verbal_explanation": "נרשום את התוצאה הסופית.", "math_expression": "V = \\dfrac{2\\pi}{15}" }
        ],
        "final_answer": "2π/15"
    },
    {
        "topic": "calculus_integral_572",
        "subTopic": "מציאת נפח גוף סיבוב (סיבוב סביב ציר x או y)",
        "question_text": "השטח הכלוא בין הפונקציה \\( y = e^{x} \\), ציר ה-\\( x \\), ציר ה-\\( y \\) והישר \\( x = 1 \\) מסתובב סביב ציר ה-\\( x \\). מצאו את הנפח.&rlm;",
        "options": ["0.5π(e² - 1)", "π(e² - 1)", "0.5πe²", "πe"],
        "correctAnswer": 0,
        "hint": "זכרו שריבוע של אי בחזקת איקס הוא אי בחזקת שני איקס.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את נוסחת הנפח.", "math_expression": "V = \\pi \\int_{0}^{1} (e^{x})^{2} dx" },
            { "verbal_explanation": "נפשט את החזקה.", "math_expression": "V = \\pi \\int_{0}^{1} e^{2x} dx" },
            { "verbal_explanation": "נמצא פונקציה קדומה.", "math_expression": "V = \\pi [\\dfrac{e^{2x}}{2}]_{0}^{1}" },
            { "verbal_explanation": "נציב גבול עליון.", "math_expression": "\\dfrac{e^{2}}{2}" },
            { "verbal_explanation": "נציב גבול תחתון.", "math_expression": "\\dfrac{e^{0}}{2} = 0.5" },
            { "verbal_explanation": "נחסר ונוציא גורם משותף.", "math_expression": "V = \\dfrac{\\pi}{2}(e^{2} - 1)" }
        ],
        "final_answer": "0.5π(e² - 1)"
    },
    {
        "topic": "calculus_integral_572",
        "subTopic": "מציאת נפח גוף סיבוב (סיבוב סביב ציר x או y)",
        "question_text": "חשבו את נפח גוף הסיבוב הנוצר מסיבוב השטח הכלוא בין \\( y = \\dfrac{1}{x} \\), ציר ה-\\( x \\) והישרים \\( x = 1, x = 2 \\) סביב ציר ה-\\( x \\).&rlm;",
        "options": ["0.5π", "π ln(2)", "0.25π", "π"],
        "correctAnswer": 0,
        "hint": "הפונקציה בריבוע היא אחד חלקי איקס בריבוע.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את נוסחת הנפח.", "math_expression": "V = \\pi \\int_{1}^{2} (\\dfrac{1}{x})^{2} dx" },
            { "verbal_explanation": "נכתוב כחזקה שלילית לצורך אינטגרציה.", "math_expression": "V = \\pi \\int_{1}^{2} x^{-2} dx" },
            { "verbal_explanation": "נמצא פונקציה קדומה.", "math_expression": "V = \\pi [-\\dfrac{1}{x}]_{1}^{2}" },
            { "verbal_explanation": "נציב גבולות.", "math_expression": "\\pi (-\\dfrac{1}{2} - (-1))" },
            { "verbal_explanation": "נחשב את הערך.", "math_expression": "V = 0.5\\pi" }
        ],
        "final_answer": "0.5π"
    },
    {
        "topic": "calculus_integral_572",
        "subTopic": "מציאת נפח גוף סיבוב (סיבוב סביב ציר x או y)",
        "question_text": "א. מצאו את נקודות החיתוך של הפונקציה \\( y = \\sin(x) \\) עם ציר ה-\\( x \\) בתחום מ-0 עד פאי.<br>ב. חשבו את נפח גוף הסיבוב הנוצר מסיבוב השטח הכלוא תחת גרף זה בתחום הנ''ל סביב ציר ה-\\( x \\).&rlm;",
        "options": ["א. 0, π ב. 0.5π²", "א. 0, π ב. π²", "א. 0, π/2 ב. π", "א. 0, π ב. 2π"],
        "correctAnswer": 0,
        "hint": "השתמשו בזהות לקוסינוס זווית כפולה כדי לבצע אינטגרל לסינוס בריבוע.",
        "solution_steps": [
            { "verbal_explanation": "נמצא חיתוך צירים בתחום.", "math_expression": "\\sin(x) = 0 \\Rightarrow x = 0 , \\pi" },
            { "verbal_explanation": "נרשום את אינטגרל הנפח.", "math_expression": "V = \\pi \\int_{0}^{\\pi} \\sin^{2}(x) dx" },
            { "verbal_explanation": "נשתמש בזהות להורדת מעלה.", "math_expression": "\\sin^{2}(x) = 0.5(1 - \\cos(2x))" },
            { "verbal_explanation": "נציב באינטגרל.", "math_expression": "V = 0.5\\pi \\int_{0}^{\\pi} (1 - \\cos(2x)) dx" },
            { "verbal_explanation": "נמצא פונקציה קדומה.", "math_expression": "V = 0.5\\pi [x - 0.5\\sin(2x)]_{0}^{\\pi}" },
            { "verbal_explanation": "נציב גבול עליון.", "math_expression": "\\pi - 0.5\\sin(2\\pi) = \\pi" },
            { "verbal_explanation": "נציב גבול תחתון.", "math_expression": "0 - 0 = 0" },
            { "verbal_explanation": "נחשב את התוצאה.", "math_expression": "V = 0.5\\pi \\times \\pi = 0.5\\pi^{2}" }
        ],
        "final_answer": "א. 0, π ב. 0.5π²"
    },
    {
        "topic": "calculus_integral_572",
        "subTopic": "מציאת נפח גוף סיבוב (סיבוב סביב ציר x או y)",
        "question_text": "השטח הכלוא בין הפונקציה \\( y = \\sqrt{x-1} \\), ציר ה-\\( x \\) והישר \\( x = a \\) מסתובב סביב ציר ה-\\( x \\). נפח גוף הסיבוב הוא \\( 8\\pi \\). מצאו את \\( a \\).&rlm;",
        "options": ["5", "4", "3", "6"],
        "correctAnswer": 0,
        "hint": "השוו את תוצאת האינטגרל ל-8 פאי.",
        "solution_steps": [
            { "verbal_explanation": "נמצא את נקודת ההתחלה של השטח על הציר.", "math_expression": "\\sqrt{x - 1} = 0 \\Rightarrow x = 1" },
            { "verbal_explanation": "נרכיב משוואת נפח עם פרמטר.", "math_expression": "\\pi \\int_{1}^{a} (x - 1) dx = 8\\pi" },
            { "verbal_explanation": "נחלק בפאי ונבצע אינטגרציה.", "math_expression": "[\\dfrac{x^{2}}{2} - x]_{1}^{a} = 8" },
            { "verbal_explanation": "נציב גבולות.", "math_expression": "(\\dfrac{a^{2}}{2} - a) - (0.5 - 1) = 8" },
            { "verbal_explanation": "נפשט את המשוואה.", "math_expression": "0.5 a^{2} - a + 0.5 = 8 \\Rightarrow 0.5 a^{2} - a - 7.5 = 0" },
            { "verbal_explanation": "נכפול בשתיים ונסדר.", "math_expression": "a^{2} - 2a - 15 = 0" },
            { "verbal_explanation": "נפתור משוואה ריבועית.", "math_expression": "(a - 5)(a + 3) = 0" },
            { "verbal_explanation": "נבחר בערך התואם לתחום.", "math_expression": "a = 5" }
        ],
        "final_answer": "5"
    },
    {
        "topic": "calculus_integral_572",
        "subTopic": "מציאת נפח גוף סיבוב (סיבוב סביב ציר x או y)",
        "question_text": "השטח הכלוא בין \\( y = \\ln(x) \\), ציר ה-\\( y \\) והישרים \\( y = 0, y = 1 \\) מסתובב סביב ציר ה-\\( y \\). מצאו את הנפח.&rlm;",
        "options": ["0.5π(e² - 1)", "π(e² - 1)", "2πe", "π"],
        "correctAnswer": 0,
        "hint": "בצעו אינטגרל על איקס בריבוע לפי די-וואי. איקס שווה לאי בחזקת וואי.",
        "solution_steps": [
            { "verbal_explanation": "נבטא את המשתנה האופקי כפונקציה של המשתנה האנכי.", "math_expression": "y = \\ln(x) \\Rightarrow x = e^{y}" },
            { "verbal_explanation": "נרכיב את אינטגרל הנפח סביב ציר וואי.", "math_expression": "V = \\pi \\int_{0}^{1} (e^{y})^{2} dy" },
            { "verbal_explanation": "נפשט את הביטוי.", "math_expression": "V = \\pi \\int_{0}^{1} e^{2y} dy" },
            { "verbal_explanation": "נמצא פונקציה קדומה.", "math_expression": "V = \\pi [\\dfrac{e^{2y}}{2}]_{0}^{1}" },
            { "verbal_explanation": "נציב גבולות.", "math_expression": "\\dfrac{\\pi}{2}(e^{2} - e^{0})" },
            { "verbal_explanation": "נרשום תוצאה סופית.", "math_expression": "V = 0.5\\pi(e^{2} - 1)" }
        ],
        "final_answer": "0.5π(e² - 1)"
    },
    {
        "topic": "calculus_integral_572",
        "subTopic": "מציאת נפח גוף סיבוב (סיבוב סביב ציר x או y)",
        "question_text": "נפח גוף הסיבוב הנוצר מסיבוב השטח תחת \\( y = ax^{2} \\) בין \\( x = 0 \\) ל-\\( x = 1 \\) סביב ציר ה-\\( x \\) הוא \\( 0.2\\pi \\). מצאו את \\( a \\) (עבור \\( a > 0 \\)).&rlm;",
        "options": ["1", "2", "3", "0.5"],
        "correctAnswer": 0,
        "hint": "העלו את הפונקציה בריבוע ובצעו אינטגרל.",
        "solution_steps": [
            { "verbal_explanation": "נרכיב משוואת נפח.", "math_expression": "\\pi \\int_{0}^{1} (ax^{2})^{2} dx = 0.2\\pi" },
            { "verbal_explanation": "נחלק בפאי ונפשט את החזקה.", "math_expression": "\\int_{0}^{1} a^{2}x^{4} dx = 0.2" },
            { "verbal_explanation": "נבצע אינטגרציה.", "math_expression": "[\\dfrac{a^{2}x^{5}}{5}]_{0}^{1} = 0.2" },
            { "verbal_explanation": "נציב גבולות.", "math_expression": "\\dfrac{a^{2}}{5} = 0.2" },
            { "verbal_explanation": "נבודד את הפרמטר.", "math_expression": "a^{2} = 1" },
            { "verbal_explanation": "נחלץ את הערך החיובי.", "math_expression": "a = 1" }
        ],
        "final_answer": "1"
    },
    {
        "topic": "calculus_integral_572",
        "subTopic": "מציאת נפח גוף סיבוב (סיבוב סביב ציר x או y)",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 120\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"70\" y=\"20\" width=\"60\" height=\"80\" fill=\"#f87171\" fill-opacity=\"0.3\" stroke=\"#0f172a\" stroke-width=\"2\"/><ellipse cx=\"100\" cy=\"100\" rx=\"30\" ry=\"8\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"1\"/><ellipse cx=\"100\" cy=\"20\" rx=\"30\" ry=\"8\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"1\"/></svg></div><br>שטח מלבני שצלעותיו מקבילות לצירים וקודקודיו הם \\( (1,0), (3,0), (3,2), (1,2) \\) מסתובב סביב ציר ה-\\( x \\). מהו נפח הגליל שנוצר?&rlm;",
        "options": ["8π", "4π", "12π", "16π"],
        "correctAnswer": 0,
        "hint": "הפונקציה המסתובבת היא הישר הקבוע y=2. השתמשו בנוסחת נפח גליל או אינטגרל.",
        "solution_steps": [
            { "verbal_explanation": "נזהה את הפונקציה המגדירה את רדיוס גוף הסיבוב.", "math_expression": "f(x) = 2" },
            { "verbal_explanation": "נרשום את אינטגרל הנפח.", "math_expression": "V = \\pi \\int_{1}^{3} 2^{2} dx" },
            { "verbal_explanation": "נבצע אינטגרציה לקבוע.", "math_expression": "V = \\pi [4x]_{1}^{3}" },
            { "verbal_explanation": "נציב גבולות.", "math_expression": "\\pi (12 - 4)" },
            { "verbal_explanation": "נחשב את התוצאה.", "math_expression": "V = 8\\pi" }
        ],
        "final_answer": "8π"
    }
];