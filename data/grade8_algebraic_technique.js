const questionsDB = [
    // ==============================================================
    // --- תת נושא 1: צמצום שברים אלגבריים (15 שאלות) ---
    // ==============================================================
    {
        "id": 1,
        "subTopic": "צמצום שברים אלגבריים",
        "difficulty": "Low",
        "question_text": "צמצמו ככל הניתן את השבר האלגברי הבא: <strong>(4x) / 2</strong>",
        "hint": "חלקו את המקדם המספרי במונה (למעלה) במספר שבמכנה (למטה).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את הגורמים המספריים במונה ובמכנה.", "math_expression": "4 , 2" },
            { "verbal_explanation": "שלב 2: נחלק את המספר 4 שבמונה במספר 2 שבמכנה.", "math_expression": "4 / 2 = 2" },
            { "verbal_explanation": "שלב 3: נצמיד את המשתנה x לתוצאה שקיבלנו.", "math_expression": "2x" }
        ],
        "final_answer": "2x",
        "options": ["2x", "4x", "x", "2"],
        "correctAnswer": 0
    },
    {
        "id": 2,
        "subTopic": "צמצום שברים אלגבריים",
        "difficulty": "Low",
        "question_text": "צמצמו את השבר: <strong>x² / x</strong> (בהנחה ש-x ≠ 0).<br><div style='text-align:center; margin:15px 0;'><svg width='100' height='80'><line x1='10' y1='40' x2='90' y2='40' stroke='#1e293b' stroke-width='2'/><text x='35' y='30' font-size='18'>x²</text><text x='40' y='65' font-size='18'>x</text></svg></div>",
        "hint": "זכרו שאיקס בריבוע הוא למעשה איקס כפול איקס. מה קורה כשמחלקים ביטוי בעצמו?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את המונה בצורה מפורשת כמכפלה.", "math_expression": "x * x / x" },
            { "verbal_explanation": "שלב 2: נבצע צמצום של x אחד מהמונה עם ה-x שבמכנה.", "math_expression": "x" }
        ],
        "final_answer": "x",
        "options": ["x²", "x", "1", "0"],
        "correctAnswer": 1
    },
    {
        "id": 3,
        "subTopic": "צמצום שברים אלגבריים",
        "difficulty": "Medium",
        "question_text": "צמצמו את השבר: <strong>(3x + 6) / 3</strong>",
        "hint": "לפני הצמצום, חובה להוציא גורם משותף במונה. אסור לצמצם כשיש חיבור בין איברים!",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נוציא את המספר 3 כגורם משותף במונה.", "math_expression": "3(x + 2) / 3" },
            { "verbal_explanation": "שלב 2: נצמצם את המספר 3 המופיע כגורם כפל במונה עם ה-3 שבמכנה.", "math_expression": "x + 2" }
        ],
        "final_answer": "x + 2",
        "options": ["x + 6", "x + 2", "3x + 2", "x + 3"],
        "correctAnswer": 1
    },
    {
        "id": 4,
        "subTopic": "צמצום שברים אלגבריים",
        "difficulty": "Medium",
        "question_text": "צמצמו ככל הניתן: <strong>(x² - 5x) / x</strong>",
        "hint": "חפשו גורם משותף במונה שניתן לצמצם עם המכנה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נוציא x כגורם משותף במונה.", "math_expression": "x(x - 5) / x" },
            { "verbal_explanation": "שלב 2: נצמצם את ה-x מהמונה עם ה-x שבמכנה.", "math_expression": "x - 5" }
        ],
        "final_answer": "x - 5",
        "options": ["x - 5", "x² - 5", "x", "5"],
        "correctAnswer": 0
    },
    {
        "id": 5,
        "subTopic": "צמצום שברים אלגבריים",
        "difficulty": "Medium",
        "question_text": "צמצמו את השבר: <strong>(2x + 10) / (x + 5)</strong>",
        "hint": "נסו להוציא גורם משותף במונה שיגרום לו להיראות בדיוק כמו המכנה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נוציא את המספר 2 כגורם משותף במונה.", "math_expression": "2(x + 5) / (x + 5)" },
            { "verbal_explanation": "שלב 2: נצמצם את הביטוי השלם (x + 5) שמופיע גם למעלה וגם למטה.", "math_expression": "2" }
        ],
        "final_answer": "2",
        "options": ["x + 5", "2x", "2", "10"],
        "correctAnswer": 2
    },
    {
        "id": 6,
        "subTopic": "צמצום שברים אלגבריים",
        "difficulty": "High",
        "question_text": "צמצמו את השבר בעזרת נוסחת הפרש ריבועים: <strong>(x² - 16) / (x - 4)</strong>",
        "hint": "המונה הוא ביטוי מסוג הפרש ריבועים. פרקו אותו לזוג סוגריים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה במונה את נוסחת הכפל המקוצר: הפרש ריבועים.", "math_expression": "x² - 16 = (x - 4)(x + 4)" },
            { "verbal_explanation": "שלב 2: נרשום את השבר עם המונה המפורק.", "math_expression": "(x - 4)(x + 4) / (x - 4)" },
            { "verbal_explanation": "שלב 3: נצמצם את הגורם המשותף (x - 4) מהמונה ומהמכנה.", "math_expression": "x + 4" }
        ],
        "final_answer": "x + 4",
        "options": ["x - 4", "x + 4", "x + 16", "4"],
        "correctAnswer": 1
    },
    {
        "id": 7,
        "subTopic": "צמצום שברים אלגבריים",
        "difficulty": "High",
        "question_text": "צמצמו את השבר הבא: <strong>(x² + 6x + 9) / (x + 3)</strong>",
        "hint": "השתמשו בנוסחת הדו-איבר בריבוע כדי לפרק את המונה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה שהמונה הוא ריבוע של דו-איבר.", "math_expression": "x² + 6x + 9 = (x + 3)²" },
            { "verbal_explanation": "שלב 2: נרשום את הריבוע בצורה מפורשת כמכפלה של הביטוי בעצמו.", "math_expression": "(x + 3)(x + 3) / (x + 3)" },
            { "verbal_explanation": "שלב 3: נצמצם פעם אחת את הביטוי (x + 3).", "math_expression": "x + 3" }
        ],
        "final_answer": "x + 3",
        "options": ["x + 3", "x + 6", "x² + 3", "3"],
        "correctAnswer": 0
    },
    {
        "id": 8,
        "subTopic": "צמצום שברים אלגבריים",
        "difficulty": "Medium",
        "question_text": "צמצמו את השבר: <strong>(10ab) / (5a)</strong>",
        "hint": "צמצמו בנפרד את המספרים ובנפרד את המשתנים הזהים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחלק את המספרים. 10 חלקי 5 שווה ל-2.", "math_expression": "2" },
            { "verbal_explanation": "שלב 2: נצמצם את האות a המופיעה גם במונה וגם במכנה.", "math_expression": "b" },
            { "verbal_explanation": "שלב 3: נרשום את התוצאה הסופית שנותרה.", "math_expression": "2b" }
        ],
        "final_answer": "2b",
        "options": ["2b", "2ab", "5b", "2a"],
        "correctAnswer": 0
    },
    {
        "id": 9,
        "subTopic": "צמצום שברים אלגבריים",
        "difficulty": "High",
        "question_text": "צמצמו את השבר: <strong>(x - 2) / (2 - x)</strong>",
        "hint": "הביטו היטב בסימנים. מה הקשר בין (x - 2) לבין (2 - x)?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה שהביטויים במונה ובמכנה הם נגדיים (סימנים הפוכים).", "math_expression": "x - 2 = -(2 - x)" },
            { "verbal_explanation": "שלב 2: נרשום את המונה עם הוצאת מינוס 1 כגורם משותף.", "math_expression": "-1(2 - x) / (2 - x)" },
            { "verbal_explanation": "שלב 3: נצמצם את הביטוי הזהה (2 - x).", "math_expression": "-1" }
        ],
        "final_answer": "-1",
        "options": ["1", "-1", "0", "לא ניתן לצמצם"],
        "correctAnswer": 1
    },
    {
        "id": 10,
        "subTopic": "צמצום שברים אלגבריים",
        "difficulty": "Medium",
        "question_text": "צמצמו ככל הניתן: <strong>(4x²) / (8x)</strong>",
        "hint": "צמצמו קודם את המספרים ואחר כך את ה-x.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נצמצם את המספרים. 4 ו-8 מצטמצמים ב-4 ונותנים חצי.", "math_expression": "1 / 2" },
            { "verbal_explanation": "שלב 2: נצמצם את ה-x. איקס בריבוע חלקי איקס משאיר איקס במונה.", "math_expression": "x" },
            { "verbal_explanation": "שלב 3: נרכיב את השבר הסופי.", "math_expression": "x / 2" }
        ],
        "final_answer": "x / 2",
        "options": ["2x", "x / 2", "1 / 2", "4 / x"],
        "correctAnswer": 1
    },
    {
        "id": 11,
        "subTopic": "צמצום שברים אלגבריים",
        "difficulty": "High",
        "question_text": "צמצמו את השבר: <strong>(x² - x) / (x - 1)</strong>",
        "hint": "זכרו שאיקס לבדו הוא למעשה איקס כפול 1.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נוציא x כגורם משותף במונה.", "math_expression": "x(x - 1) / (x - 1)" },
            { "verbal_explanation": "שלב 2: נצמצם את הביטוי (x - 1) המופיע בשני חלקי השבר.", "math_expression": "x" }
        ],
        "final_answer": "x",
        "options": ["x - 1", "x", "x²", "1"],
        "correctAnswer": 1
    },
    {
        "id": 12,
        "subTopic": "צמצום שברים אלגבריים",
        "difficulty": "Low",
        "question_text": "האם ניתן לצמצם את ה-x בביטוי <strong>(x + 5) / x</strong>?",
        "hint": "האם יש כפל בין ה-x ל-5 במונה?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבדוק אם יש גורם כפל משותף במונה. המונה הוא סכום (חיבור).", "math_expression": "x + 5" },
            { "verbal_explanation": "שלב 2: נזכור את הכלל - מותר לצמצם רק גורמי כפל (מכפלות), לא איברים בחיבור או חיסור.", "math_expression": "כלל הצמצום" },
            { "verbal_explanation": "שלב 3: נסיק שלא ניתן לצמצם את ה-x בביטוי זה.", "math_expression": "לא ניתן לצמצם" }
        ],
        "final_answer": "לא ניתן לצמצם",
        "options": ["כן, התוצאה היא 5", "כן, התוצאה היא 6", "לא ניתן לצמצם", "רק אם x=1"],
        "correctAnswer": 2
    },
    {
        "id": 13,
        "subTopic": "צמצום שברים אלגבריים",
        "difficulty": "High",
        "question_text": "צמצמו את השבר: <strong>(2x² - 8) / (x - 2)</strong>",
        "hint": "שלבו שני סוגי פירוק: הוצאת גורם משותף 2 ואז הפרש ריבועים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נוציא את הגורם המשותף 2 במונה.", "math_expression": "2(x² - 4) / (x - 2)" },
            { "verbal_explanation": "שלב 2: נפרק את הביטוי בסוגריים לפי נוסחת הפרש ריבועים.", "math_expression": "2(x - 2)(x + 2) / (x - 2)" },
            { "verbal_explanation": "שלב 3: נצמצם את הגורם (x - 2) מהמונה ומהמכנה.", "math_expression": "2(x + 2)" }
        ],
        "final_answer": "2(x + 2)",
        "options": ["x + 2", "2(x + 2)", "2x + 4", "2"],
        "correctAnswer": 1
    },
    {
        "id": 14,
        "subTopic": "צמצום שברים אלגבריים",
        "difficulty": "High",
        "question_text": "צמצמו את השבר: <strong>(x² - 10x + 25) / (2x - 10)</strong>",
        "hint": "פרקו את המונה לפי נוסחת כפל מקוצר והוציאו גורם משותף במכנה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפרק את המונה לפי הנוסחה (a - b)².", "math_expression": "(x - 5)²" },
            { "verbal_explanation": "שלב 2: נוציא גורם משותף 2 במכנה.", "math_expression": "2(x - 5)" },
            { "verbal_explanation": "שלב 3: נבצע צמצום. אחד מהגורמים (x - 5) במונה מצטמצם עם המכנה.", "math_expression": "(x - 5) / 2" }
        ],
        "final_answer": "(x - 5) / 2",
        "options": ["x - 5", "2", "(x - 5) / 2", "x - 10"],
        "correctAnswer": 2
    },
    {
        "id": 15,
        "subTopic": "צמצום שברים אלגבריים",
        "difficulty": "Low",
        "question_text": "מהי התוצאה של צמצום השבר <strong>(x + y) / (x + y)</strong> (בהנחה ש-x+y ≠ 0)?",
        "hint": "מה קורה כשמחלקים כל מספר בעצמו?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה שהמונה והמכנה זהים לחלוטין.", "math_expression": "מונה = מכנה" },
            { "verbal_explanation": "שלב 2: חלוקה של ביטוי בעצמו נותנת תמיד את התוצאה 1.", "math_expression": "1" }
        ],
        "final_answer": "1",
        "options": ["x + y", "0", "1", "xy"],
        "correctAnswer": 2
    },

    // ==============================================================
    // --- תת נושא 2: כפל וחילוק שברים אלגבריים (15 שאלות) ---
    // ==============================================================
    {
        "id": 16,
        "subTopic": "כפל וחילוק שברים אלגבריים",
        "difficulty": "Low",
        "question_text": "פתרו את תרגיל הכפל: <strong>(x / 2) * (4 / x)</strong>",
        "hint": "בכפל שברים, נכפול מונה במונה ומכנה במכנה. נסו לצמצם לפני הכפל!",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את המכפלה תחת קו שבר אחד.", "math_expression": "(x * 4) / (2 * x)" },
            { "verbal_explanation": "שלב 2: נזהה גורמים זהים לצמצום. ה-x במונה וה-x במכנה מצטמצמים.", "math_expression": "4 / 2" },
            { "verbal_explanation": "שלב 3: נבצע את חילוק המספרים שנותרו.", "math_expression": "2" }
        ],
        "final_answer": "2",
        "options": ["2x", "2", "x / 2", "4x / 2x"],
        "correctAnswer": 1
    },
    {
        "id": 17,
        "subTopic": "כפל וחילוק שברים אלגבריים",
        "difficulty": "Low",
        "question_text": "כיצד הופכים תרגיל חילוק לתרגיל כפל בשברים אלגבריים?<br><div style='text-align:center; margin:15px 0;'><svg width='150' height='60'><text x='10' y='35' font-size='16'>(A/B) : (C/D)</text><path d='M100,25 Q125,10 145,25' stroke='blue' fill='none' stroke-width='2'/></svg></div>",
        "hint": "זכרו את הכלל מהשברים הפשוטים: 'שומרים על השבר הראשון, הופכים לכפל והופכים את השבר השני'.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשמור על השבר הראשון כפי שהוא.", "math_expression": "A / B" },
            { "verbal_explanation": "שלב 2: נהפוך את פעולת החילוק לפעולת כפל.", "math_expression": "*" },
            { "verbal_explanation": "שלב 3: נהפוך את השבר השני (המונה הופך למכנה והמכנה למונה).", "math_expression": "D / C" }
        ],
        "final_answer": "כופלים בשבר השני כשהוא הפוך.",
        "options": ["כופלים את המונים בלבד", "מחלקים את המכנים", "כופלים בשבר השני כשהוא הפוך.", "הופכים את השבר הראשון"],
        "correctAnswer": 2
    },
    {
        "id": 18,
        "subTopic": "כפל וחילוק שברים אלגבריים",
        "difficulty": "Medium",
        "question_text": "פתרו: <strong>(x / 5) : (x / 10)</strong>",
        "hint": "הפכו את החילוק לכפל ב'הופכי'.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נהפוך את התרגיל לכפל בשבר השני ההפוך.", "math_expression": "(x / 5) * (10 / x)" },
            { "verbal_explanation": "שלב 2: נרשום תחת קו שבר אחד.", "math_expression": "(x * 10) / (5 * x)" },
            { "verbal_explanation": "שלב 3: נצמצם את ה-x ונחלק 10 ב-5.", "math_expression": "2" }
        ],
        "final_answer": "2",
        "options": ["1 / 2", "2", "x² / 50", "2x"],
        "correctAnswer": 1
    },
    {
        "id": 19,
        "subTopic": "כפל וחילוק שברים אלגבריים",
        "difficulty": "Medium",
        "question_text": "בצעו את המכפלה: <strong>((x + 1) / 3) * (6 / (x + 1))</strong>",
        "hint": "צמצמו ביטויים שלמים בסוגריים אם הם מופיעים גם למעלה וגם למטה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את המכפלה.", "math_expression": "((x + 1) * 6) / (3 * (x + 1))" },
            { "verbal_explanation": "שלב 2: נצמצם את הביטוי (x + 1) המשותף לשני החלקים.", "math_expression": "6 / 3" },
            { "verbal_explanation": "שלב 3: נחשב את התוצאה הסופית.", "math_expression": "2" }
        ],
        "final_answer": "2",
        "options": ["2", "x + 1", "6 / 3", "2x + 2"],
        "correctAnswer": 0
    },
    {
        "id": 20,
        "subTopic": "כפל וחילוק שברים אלגבריים",
        "difficulty": "High",
        "question_text": "פתרו: <strong>((x - 3) / x) * (x² / (x² - 9))</strong>",
        "hint": "לפני הכפל, פרקו את המכנה (x² - 9) לגורמים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפרק את המכנה הימני לפי נוסחת הפרש ריבועים.", "math_expression": "x² - 9 = (x - 3)(x + 3)" },
            { "verbal_explanation": "שלב 2: נרשום את כל המכפלה יחד.", "math_expression": "((x - 3) * x²) / (x * (x - 3)(x + 3))" },
            { "verbal_explanation": "שלב 3: נבצע צמצומים. נצמצם את (x - 3) וגם x אחד מהמונה ומהמכנה.", "math_expression": "x / (x + 3)" }
        ],
        "final_answer": "x / (x + 3)",
        "options": ["1 / (x + 3)", "x / (x + 3)", "x - 3", "x / 3"],
        "correctAnswer": 1
    },
    {
        "id": 21,
        "subTopic": "כפל וחילוק שברים אלגבריים",
        "difficulty": "Medium",
        "question_text": "פתרו את תרגיל החילוק: <strong>(4a²) / 3 : (2a) / 9</strong>",
        "hint": "אל תשכחו להפוך את השבר השני ולצמצם מספרים ואותיות בנפרד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נהפוך לכפל בהופכי.", "math_expression": "(4a² / 3) * (9 / 2a)" },
            { "verbal_explanation": "שלב 2: נחלק מספרים. 4 חלקי 2 זה 2, ו-9 חלקי 3 זה 3.", "math_expression": "2 * 3" },
            { "verbal_explanation": "שלב 3: נצמצם את ה-a. איקס בריבוע חלקי איקס משאיר איקס אחד למעלה.", "math_expression": "6a" }
        ],
        "final_answer": "6a",
        "options": ["6a", "2a / 3", "12a", "6"],
        "correctAnswer": 0
    },
    {
        "id": 22,
        "subTopic": "כפל וחילוק שברים אלגבריים",
        "difficulty": "Low",
        "question_text": "מהי תוצאת המכפלה של שבר אלגברי ב-1?",
        "hint": "חשבו מה קורה לכל מספר שמכפילים אותו ב-1.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזכור את תכונת המספר 1 כאיבר יחידה במכפלה.", "math_expression": "A * 1 = A" },
            { "verbal_explanation": "שלב 2: נסיק שהשבר האלגברי יישאר בדיוק כפי שהוא.", "math_expression": "ללא שינוי" }
        ],
        "final_answer": "השבר נשאר ללא שינוי.",
        "options": ["השבר הופך ל-1", "השבר נשאר ללא שינוי.", "המונה מוכפל ב-1", "השבר מתבטל"],
        "correctAnswer": 1
    },
    {
        "id": 23,
        "subTopic": "כפל וחילוק שברים אלגבריים",
        "difficulty": "High",
        "question_text": "פתרו: <strong>((x² + 5x) / (x - 2)) * ((x² - 4) / (x + 5))</strong>",
        "hint": "פרקו הכל לגורמים לפני שאתם מתחילים לצמצם!",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפרק את המונה הראשון (הוצאת x) ואת המונה השני (הפרש ריבועים).", "math_expression": "(x(x + 5) / (x - 2)) * ((x - 2)(x + 2) / (x + 5))" },
            { "verbal_explanation": "שלב 2: נצמצם את (x + 5) מהמונה והמכנה.", "math_expression": "(x / (x - 2)) * ((x - 2)(x + 2))" },
            { "verbal_explanation": "שלב 3: נצמצם את (x - 2) מהמונה והמכנה.", "math_expression": "x(x + 2)" }
        ],
        "final_answer": "x(x + 2)",
        "options": ["x + 2", "x(x + 2)", "x² + 2", "x"],
        "correctAnswer": 1
    },
    {
        "id": 24,
        "subTopic": "כפל וחילוק שברים אלגבריים",
        "difficulty": "Medium",
        "question_text": "בצעו את החילוק: <strong>(x + 4) : ((x + 4) / x)</strong>",
        "hint": "זכרו שביטוי ללא מכנה הוא כמו ביטוי עם מכנה 1.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נהפוך את התרגיל לכפל בהופכי.", "math_expression": "(x + 4) * (x / (x + 4))" },
            { "verbal_explanation": "שלב 2: נצמצם את הביטוי (x + 4) שמופיע כמכפיל וכמכנה.", "math_expression": "x" }
        ],
        "final_answer": "x",
        "options": ["1", "x", "x + 4", "x²"],
        "correctAnswer": 1
    },
    {
        "id": 25,
        "subTopic": "כפל וחילוק שברים אלגבריים",
        "difficulty": "High",
        "question_text": "פתרו: <strong>(3x / (x - 1)) : (6x² / (x² - 1))</strong>",
        "hint": "הפכו לכפל, פרקו לגורמים ורק אז צמצמו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נהפוך לכפל בהופכי ונפרק את (x² - 1) להפרש ריבועים.", "math_expression": "(3x / (x - 1)) * ((x - 1)(x + 1) / 6x²)" },
            { "verbal_explanation": "שלב 2: נצמצם את (x - 1) מהמונה והמכנה.", "math_expression": "(3x * (x + 1)) / 6x²" },
            { "verbal_explanation": "שלב 3: נצמצם את המספרים (3 ו-6) ואת ה-x.", "math_expression": "(x + 1) / 2x" }
        ],
        "final_answer": "(x + 1) / 2x",
        "options": ["(x + 1) / 2", "(x + 1) / 2x", "x + 1", "2x"],
        "correctAnswer": 1
    },
    {
        "id": 26,
        "subTopic": "כפל וחילוק שברים אלגבריים",
        "difficulty": "Medium",
        "question_text": "מהי התוצאה של <strong>(a/b) * (b/c) * (c/a)</strong>?",
        "hint": "בצעו את הכפל וצמצמו את כל הגורמים הזהים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום הכל תחת קו שבר אחד ארוך.", "math_expression": "(a * b * c) / (b * c * a)" },
            { "verbal_explanation": "שלב 2: נבחין שכל המשתנים מופיעים גם למעלה וגם למטה.", "math_expression": "abc / abc" },
            { "verbal_explanation": "שלב 3: חלוקה של ביטוי בעצמו שווה ל-1.", "math_expression": "1" }
        ],
        "final_answer": "1",
        "options": ["abc", "0", "1", "a/c"],
        "correctAnswer": 2
    },
    {
        "id": 27,
        "subTopic": "כפל וחילוק שברים אלגבריים",
        "difficulty": "High",
        "question_text": "פתרו: <strong>((x² - 2x + 1) / 4) * (8 / (x - 1))</strong>",
        "hint": "פרקו את המונה השמאלי לפי נוסחת הדו-איבר בריבוע.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפרק את המונה הראשון.", "math_expression": "((x - 1)² / 4) * (8 / (x - 1))" },
            { "verbal_explanation": "שלב 2: נצמצם את 8 ב-4 (נקבל 2) ונצמצם את (x - 1) פעם אחת.", "math_expression": "2(x - 1)" }
        ],
        "final_answer": "2(x - 1)",
        "options": ["x - 1", "2(x - 1)", "2", "4(x - 1)"],
        "correctAnswer": 1
    },
    {
        "id": 28,
        "subTopic": "כפל וחילוק שברים אלגבריים",
        "difficulty": "Medium",
        "question_text": "בצעו את החילוק: <strong>(1 / x²) : (1 / x)</strong>",
        "hint": "הפכו לכפל ב'הופכי' וצמצמו חזקות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נהפוך לכפל.", "math_expression": "(1 / x²) * (x / 1)" },
            { "verbal_explanation": "שלב 2: נצמצם x אחד מהמונה עם ה-x בריבוע שבמכנה.", "math_expression": "1 / x" }
        ],
        "final_answer": "1 / x",
        "options": ["x", "1 / x", "1 / x³", "1"],
        "correctAnswer": 1
    },
    {
        "id": 29,
        "subTopic": "כפל וחילוק שברים אלגבריים",
        "difficulty": "High",
        "question_text": "פתרו: <strong>(5 / (2x - 4)) * (x - 2)</strong>",
        "hint": "הוציאו גורם משותף במכנה השמאלי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נוציא גורם משותף 2 במכנה.", "math_expression": "(5 / 2(x - 2)) * (x - 2)" },
            { "verbal_explanation": "שלב 2: נצמצם את הביטוי (x - 2) שמופיע במונה ובמכנה.", "math_expression": "5 / 2" }
        ],
        "final_answer": "2.5",
        "options": ["5", "2.5", "5 / x", "10"],
        "correctAnswer": 1
    },
    {
        "id": 30,
        "subTopic": "כפל וחילוק שברים אלגבריים",
        "difficulty": "Low",
        "question_text": "מהי תוצאת החלוקה של שבר אלגברי בעצמו?",
        "hint": "חישבו מה קורה לכל מספר שמחלקים אותו בעצמו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את תרגיל החילוק.", "math_expression": "(A/B) : (A/B)" },
            { "verbal_explanation": "שלב 2: נזכור שכל ביטוי (שאינו אפס) המחולק בעצמו נותן תוצאה קבועה.", "math_expression": "1" }
        ],
        "final_answer": "1",
        "options": ["0", "1", "השבר בריבוע", "אין פתרון"],
        "correctAnswer": 1
    },,
    // ==============================================================
    // --- תת נושא 3: חיבור וחיסור שברים אלגבריים (15 שאלות) ---
    // ==============================================================
    {
        "id": 31,
        "subTopic": "חיבור וחיסור שברים אלגבריים",
        "difficulty": "Low",
        "question_text": "פתרו את תרגיל החיבור הבא: <strong>(3 / x) + (5 / x)</strong>. מהי התוצאה הסופית?",
        "hint": "כאשר המכנים של שני השברים זהים, ניתן פשוט לחבר את המונים ולשמור על המכנה המשותף.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה שהמכנה בשני השברים הוא x. לכן המכנה המשותף שלנו כבר מוכן.", "math_expression": "המכנה המשותף = x" },
            { "verbal_explanation": "שלב 2: נחבר את המונים של שני השברים ונרשום אותם מעל המכנה המשותף.", "math_expression": "(3 + 5) / x" },
            { "verbal_explanation": "שלב 3: נבצע את פעולת החיבור הפשוטה במונה כדי לקבל את התוצאה הסופית.", "math_expression": "8 / x" }
        ],
        "final_answer": "8 / x",
        "options": ["8 / 2x", "8 / x", "15 / x²", "2 / x"],
        "correctAnswer": 1
    },
    {
        "id": 32,
        "subTopic": "חיבור וחיסור שברים אלגבריים",
        "difficulty": "Medium",
        "question_text": "בצעו את פעולת החיסור: <strong>(x / (x+2)) - (1 / (x+2))</strong>",
        "hint": "המכנים זהים לחלוטין. בצעו חיסור בין המונים ושימו לב לביטוי שמתקבל.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מאחר והמכנים זהים (x + 2), נאחד את השברים תחת קו שבר אחד.", "math_expression": "(x - 1) / (x + 2)" },
            { "verbal_explanation": "שלב 2: נבדוק אם ניתן לצמצם את הביטוי. המונה והמכנה שונים ואינם ניתנים לפירוק נוסף.", "math_expression": "אין צמצום נוסף" }
        ],
        "final_answer": "(x - 1) / (x + 2)",
        "options": ["(x - 1) / (x + 2)", "x - 1", "1 / (x + 2)", "0"],
        "correctAnswer": 0
    },
    {
        "id": 33,
        "subTopic": "חיבור וחיסור שברים אלגבריים",
        "difficulty": "Medium",
        "question_text": "פתרו את התרגיל: <strong>(1 / x) + (1 / 2x)</strong>",
        "hint": "כדי לחבר שברים עם מכנים שונים, עלינו למצוא מכנה משותף. המכנה 2x מכיל בתוכו את x.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא מכנה משותף. המכנה המשותף הקטן ביותר הוא 2x.", "math_expression": "מכנה משותף = 2x" },
            { "verbal_explanation": "שלב 2: נרחיב את השבר הראשון על ידי הכפלת המונה והמכנה ב-2.", "math_expression": "(1 * 2) / (x * 2) = 2 / 2x" },
            { "verbal_explanation": "שלב 3: כעת כשהמכנים זהים, נחבר את המונים.", "math_expression": "(2 / 2x) + (1 / 2x) = 3 / 2x" }
        ],
        "final_answer": "3 / 2x",
        "options": ["2 / 3x", "3 / 2x", "2 / x", "1 / 3x"],
        "correctAnswer": 1
    },
    {
        "id": 34,
        "subTopic": "חיבור וחיסור שברים אלגבריים",
        "difficulty": "High",
        "question_text": "פתרו וצמצמו: <strong>(x / (x+3)) + (3 / (x+3))</strong>",
        "hint": "חברו את המונים ולאחר מכן בדקו היטב האם המונה והמכנה שקיבלתם זהים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המכנים זהים, לכן נחבר את המונים.", "math_expression": "(x + 3) / (x + 3)" },
            { "verbal_explanation": "שלב 2: נזהה שהמונה והמכנה זהים לחלוטין. במתמטיקה, כל ביטוי (שאינו אפס) המחולק בעצמו שווה ל-1.", "math_expression": "1" }
        ],
        "final_answer": "1",
        "options": ["x + 3", "1", "x / 3", "0"],
        "correctAnswer": 1
    },
    {
        "id": 35,
        "subTopic": "חיבור וחיסור שברים אלגבריים",
        "difficulty": "Medium",
        "question_text": "בצעו את התרגיל: <strong>(5 / x) - (2 / 3x)</strong>",
        "hint": "עליכם להביא את המכנה הראשון (x) להיות זהה למכנה השני (3x).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נקבע שהמכנה המשותף הוא 3x. נרחיב את השבר הראשון פי 3.", "math_expression": "(5 * 3) / (x * 3) = 15 / 3x" },
            { "verbal_explanation": "שלב 2: נחסיר את השבר השני מהשבר המורחב.", "math_expression": "(15 / 3x) - (2 / 3x)" },
            { "verbal_explanation": "שלב 3: נבצע חיסור במונה ונשמור על המכנה.", "math_expression": "13 / 3x" }
        ],
        "final_answer": "13 / 3x",
        "options": ["3 / 2x", "13 / 3x", "3 / 3x", "13 / x"],
        "correctAnswer": 1
    },
    {
        "id": 36,
        "subTopic": "חיבור וחיסור שברים אלגבריים",
        "difficulty": "High",
        "question_text": "פתרו: <strong>(1 / (x-2)) + (1 / (x+2))</strong>",
        "hint": "המכנה המשותף הוא מכפלת שני המכנים: (x-2)(x+2). הרחיבו כל שבר בהתאם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא מכנה משותף.", "math_expression": "(x-2)(x+2)" },
            { "verbal_explanation": "שלב 2: נרחיב את השבר הראשון ב-(x+2) ואת השני ב-(x-2).", "math_expression": "(x + 2 + x - 2) / ((x-2)(x+2))" },
            { "verbal_explanation": "שלב 3: נכנס איברים במונה. x+x=2x, והמספרים 2 ומינוס 2 מתבטלים.", "math_expression": "2x / ((x-2)(x+2))" },
            { "verbal_explanation": "שלב 4: נשתמש בנוסחת כפל מקוצר במכנה לסגירת הביטוי.", "math_expression": "2x / (x² - 4)" }
        ],
        "final_answer": "2x / (x² - 4)",
        "options": ["2 / (x² - 4)", "2x / (x² - 4)", "x / (x² - 4)", "2x / x²"],
        "correctAnswer": 1
    },
    {
        "id": 37,
        "subTopic": "חיבור וחיסור שברים אלגבריים",
        "difficulty": "High",
        "question_text": "חשבו את ההפרש: <strong>(x / 4) - (x / 5)</strong>",
        "hint": "המכנה המשותף הקטן ביותר ל-4 ו-5 הוא 20. הרחיבו את המונים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרחיב את השבר הראשון ב-5 ואת השבר השני ב-4.", "math_expression": "(5x / 20) - (4x / 20)" },
            { "verbal_explanation": "שלב 2: נבצע חיסור במונים.", "math_expression": "(5x - 4x) / 20" },
            { "verbal_explanation": "שלב 3: נרשום את התוצאה המופשטת.", "math_expression": "x / 20" }
        ],
        "final_answer": "x / 20",
        "options": ["x / 1", "x / 9", "x / 20", "0"],
        "correctAnswer": 2
    },
    {
        "id": 38,
        "subTopic": "חיבור וחיסור שברים אלגבריים",
        "difficulty": "Medium",
        "question_text": "פתרו: <strong>(10 / x²) - (4 / x²)</strong>",
        "hint": "הסתכלו על המכנים. הם כבר זהים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה שהמכנה המשותף הוא x².", "math_expression": "המכנה = x²" },
            { "verbal_explanation": "שלב 2: נחסיר את המונים.", "math_expression": "(10 - 4) / x²" },
            { "verbal_explanation": "שלב 3: נחשב תוצאה.", "math_expression": "6 / x²" }
        ],
        "final_answer": "6 / x²",
        "options": ["6 / x", "6 / x²", "14 / x²", "6 / 0"],
        "correctAnswer": 1
    },
    {
        "id": 39,
        "subTopic": "חיבור וחיסור שברים אלגבריים",
        "difficulty": "High",
        "question_text": "בצעו את התרגיל הבא: <strong>(x / (x-1)) - 1</strong>",
        "hint": "התייחסו למספר 1 כאל שבר שהמונה והמכנה שלו הם (x-1). זה יקל על החיסור.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את המספר 1 כשבר עם מכנה משותף (x-1).", "math_expression": "1 = (x - 1) / (x - 1)" },
            { "verbal_explanation": "שלב 2: נבצע את החיסור. זהירות: המינוס משפיע על כל המונה השני!", "math_expression": "(x - (x - 1)) / (x - 1)" },
            { "verbal_explanation": "שלב 3: נפתח סוגריים במונה: x פחות x הופך ל-0, ומינוס מינוס 1 הופך לפלוס 1.", "math_expression": "1 / (x - 1)" }
        ],
        "final_answer": "1 / (x - 1)",
        "options": ["1 / (x - 1)", "x / (x - 1)", "0", "1"],
        "correctAnswer": 0
    },
    {
        "id": 40,
        "subTopic": "חיבור וחיסור שברים אלגבריים",
        "difficulty": "Medium",
        "question_text": "פתרו: <strong>(a / b) + (c / d)</strong>. מהו הביטוי המאוחד?",
        "hint": "כאשר המכנים הם אותיות שונות, המכנה המשותף הוא המכפלה שלהן.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המכנה המשותף יהיה b כפול d.", "math_expression": "bd" },
            { "verbal_explanation": "שלב 2: נרחיב את המונה הראשון ב-d ואת המונה השני ב-b.", "math_expression": "(ad + cb) / bd" }
        ],
        "final_answer": "(ad + bc) / bd",
        "options": ["(a+c) / (b+d)", "(ad+bc) / bd", "ac / bd", "ad / bc"],
        "correctAnswer": 1
    },
    {
        "id": 41,
        "subTopic": "חיבור וחיסור שברים אלגבריים",
        "difficulty": "High",
        "question_text": "פתרו את התרגיל המורכב: <strong>(1 / (2x)) + (1 / (3x))</strong>",
        "hint": "מצאו מכנה משותף המשלב את המספרים 2 ו-3 ואת המשתנה x.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא מכנה משותף. המכנה המשותף של 2x ו-3x הוא 6x.", "math_expression": "מכנה משותף = 6x" },
            { "verbal_explanation": "שלב 2: נרחיב את השבר הראשון פי 3 ואת השני פי 2.", "math_expression": "(3 / 6x) + (2 / 6x)" },
            { "verbal_explanation": "שלב 3: נחבר את המונים.", "math_expression": "5 / 6x" }
        ],
        "final_answer": "5 / 6x",
        "options": ["2 / 5x", "5 / 6x", "5 / 5x", "1 / 6x"],
        "correctAnswer": 1
    },
    {
        "id": 42,
        "subTopic": "חיבור וחיסור שברים אלגבריים",
        "difficulty": "High",
        "question_text": "בצעו חיסור וצמצמו: <strong>(4 / (x-2)) - (x / (x-2))</strong>",
        "hint": "חברו את המונה ובדקו אם ניתן להשתמש בכלל הנגדיים לצמצום.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נאחד את המונים מעל המכנה המשותף.", "math_expression": "(4 - x) / (x - 2)" },
            { "verbal_explanation": "שלב 2: נזהה שהמונה (4-x) אינו דומה למכנה. נבדוק שוב.", "math_expression": "הביטוי סופי" }
        ],
        "final_answer": "(4 - x) / (x - 2)",
        "options": ["(4 - x) / (x - 2)", "-1", "2", "0"],
        "correctAnswer": 0
    },
    {
        "id": 43,
        "subTopic": "חיבור וחיסור שברים אלגבריים",
        "difficulty": "High",
        "question_text": "פתרו: <strong>(x / 2) + (x / 4) + (x / 8)</strong>",
        "hint": "המכנה המשותף הגדול ביותר כאן הוא 8. הרחיבו את כל השברים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרחיב את השבר הראשון פי 4 ואת השני פי 2.", "math_expression": "(4x / 8) + (2x / 8) + (x / 8)" },
            { "verbal_explanation": "שלב 2: נחבר את כל המונים יחד.", "math_expression": "(4x + 2x + x) / 8" },
            { "verbal_explanation": "שלב 3: נסכם את האיקסים.", "math_expression": "7x / 8" }
        ],
        "final_answer": "7x / 8",
        "options": ["3x / 14", "7x / 8", "x / 8", "x"],
        "correctAnswer": 1
    },
    {
        "id": 44,
        "subTopic": "חיבור וחיסור שברים אלגבריים",
        "difficulty": "Medium",
        "question_text": "מה קורה כשמחברים שבר אלגברי ל-0?",
        "hint": "0 הוא 'איבר יחידה' בחיבור.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזכור את הכלל שכל מספר או ביטוי ועוד אפס נשאר ללא שינוי.", "math_expression": "A + 0 = A" }
        ],
        "final_answer": "השבר נשאר ללא שינוי.",
        "options": ["השבר מתבטל", "השבר הופך ל-0", "השבר נשאר ללא שינוי.", "המכנה גדל ב-1"],
        "correctAnswer": 2
    },
    {
        "id": 45,
        "subTopic": "חיבור וחיסור שברים אלגבריים",
        "difficulty": "High",
        "question_text": "פתרו: <strong>(1 / x) - (1 / x²)</strong>",
        "hint": "המכנה המשותף הוא x². הרחיבו רק את השבר הראשון.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרחיב את השבר הראשון פי x כדי להגיע למכנה x².", "math_expression": "(x / x²) - (1 / x²)" },
            { "verbal_explanation": "שלב 2: נאחד תחת מכנה משותף.", "math_expression": "(x - 1) / x²" }
        ],
        "final_answer": "(x - 1) / x²",
        "options": ["0", "1 / x", "(x - 1) / x²", "x / x²"],
        "correctAnswer": 2
    },

    // ==============================================================
    // --- תת נושא 4: תחום הצבה (15 שאלות) ---
    // ==============================================================
    {
        "id": 46,
        "subTopic": "תחום הצבה",
        "difficulty": "Low",
        "question_text": "מהו <strong>תחום הצבה</strong> של השבר האלגברי: <strong>8 / x</strong>?<br><div style='text-align:center; margin:15px 0;'><svg width='100' height='80'><line x1='10' y1='40' x2='90' y2='40' stroke='#1e293b' stroke-width='3'/><text x='40' y='30' font-size='18'>8</text><text x='45' y='70' font-size='18' fill='red'>x</text></svg></div>",
        "hint": "תחום הצבה הוא קבוצת כל המספרים שמותר להציב במקום x מבלי 'להרוס' את השבר. הפעולה היחידה שאסורה היא חילוק ב-0.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נביט במכנה של השבר (החלק התחתון). המכנה הוא x.", "math_expression": "המכנה = x" },
            { "verbal_explanation": "שלב 2: נרשום את התנאי שהמכנה חייב להיות שונה מאפס.", "math_expression": "x ≠ 0" }
        ],
        "final_answer": "x ≠ 0",
        "options": ["x = 0", "x ≠ 0", "x > 0", "כל מספר"],
        "correctAnswer": 1
    },
    {
        "id": 47,
        "subTopic": "תחום הצבה",
        "difficulty": "Low",
        "question_text": "מצאו את תחום ההצבה של השבר: <strong>12 / (x - 5)</strong>",
        "hint": "שאלו את עצמכם: איזה מספר אם נציב אותו במקום x, יגרום לביטוי (x-5) להיות שווה ל-0?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את המכנה ונבדוק מתי הוא מתאפס.", "math_expression": "x - 5 = 0" },
            { "verbal_explanation": "שלב 2: נפתור את המשוואה ונגלה ש-x שווה ל-5.", "math_expression": "x = 5" },
            { "verbal_explanation": "שלב 3: הערך 5 הוא הערך ה'אסור', ולכן תחום ההצבה הוא כל x חוץ מחמש.", "math_expression": "x ≠ 5" }
        ],
        "final_answer": "x ≠ 5",
        "options": ["x ≠ 0", "x ≠ 5", "x ≠ -5", "x = 5"],
        "correctAnswer": 1
    },
    {
        "id": 48,
        "subTopic": "תחום הצבה",
        "difficulty": "Medium",
        "question_text": "נתון השבר האלגברי: <strong>x / (3x + 12)</strong>. מהו תחום ההצבה שלו?",
        "hint": "המונה (x) לא משפיע על תחום הצבה. עלינו לוודא רק שהמכנה (3x + 12) אינו אפס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשווה את המכנה לאפס כדי למצוא את הערך האסור.", "math_expression": "3x + 12 = 0" },
            { "verbal_explanation": "שלב 2: נעביר את 12 אגף בסימן הפוך.", "math_expression": "3x = -12" },
            { "verbal_explanation": "שלב 3: נחלק ב-3 ונקבל את התוצאה.", "math_expression": "x = -4" },
            { "verbal_explanation": "שלב 4: לכן x חייב להיות שונה ממינוס 4.", "math_expression": "x ≠ -4" }
        ],
        "final_answer": "x ≠ -4",
        "options": ["x ≠ 4", "x ≠ -4", "x ≠ 0", "x ≠ 12"],
        "correctAnswer": 1
    },
    {
        "id": 49,
        "subTopic": "תחום הצבה",
        "difficulty": "Medium",
        "question_text": "מתי הביטוי <strong>(x + 1) / (x² - 1)</strong> אינו מוגדר?",
        "hint": "ביטוי אינו מוגדר כאשר המכנה שלו מתאפס. שימו לב שיש כאן x בריבוע.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבדוק מתי המכנה שווה לאפס.", "math_expression": "x² - 1 = 0" },
            { "verbal_explanation": "שלב 2: נחלץ את x² על ידי העברת אגף.", "math_expression": "x² = 1" },
            { "verbal_explanation": "שלב 3: נוציא שורש ריבועי. זכרו שלמשוואה כזו יש שני פתרונות: 1 ומינוס 1.", "math_expression": "x = 1 , x = -1" },
            { "verbal_explanation": "שלב 4: השבר אינו מוגדר עבור שני הערכים האלו.", "math_expression": "x ≠ 1 , x ≠ -1" }
        ],
        "final_answer": "x ≠ 1 וגם x ≠ -1",
        "options": ["x ≠ 1", "x ≠ -1", "x ≠ 1, -1", "כל x"],
        "correctAnswer": 2
    },
    {
        "id": 50,
        "subTopic": "תחום הצבה",
        "difficulty": "High",
        "question_text": "מהו תחום ההצבה של הביטוי: <strong>1 / (x² + 9)</strong>?",
        "hint": "חשבו: האם קיים מספר ממשי שאם נעלה אותו בריבוע ונוסיף לו 9 נקבל 0?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ננסה לבדוק מתי המכנה מתאפס.", "math_expression": "x² + 9 = 0" },
            { "verbal_explanation": "שלב 2: נעביר את 9 אגף ונקבל: x² = -9.", "math_expression": "x² = -9" },
            { "verbal_explanation": "שלב 3: מכיוון שריבוע של כל מספר ממשי הוא תמיד חיובי או אפס, הוא לעולם לא יכול להיות שווה למינוס 9.", "math_expression": "אין פתרון ממשי" },
            { "verbal_explanation": "שלב 4: מכיוון שהמכנה לעולם לא יהיה אפס, מותר להציב כל מספר.", "math_expression": "כל x" }
        ],
        "final_answer": "כל x",
        "options": ["x ≠ 3", "x ≠ -3", "כל x", "אף x"],
        "correctAnswer": 2
    },
    {
        "id": 51,
        "subTopic": "תחום הצבה",
        "difficulty": "Low",
        "question_text": "מהו תחום ההצבה של השבר: <strong>x / 10</strong>?",
        "hint": "הסתכלו על המכנה. האם מופיע בו x?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המכנה של השבר הוא המספר 10.", "math_expression": "מכנה = 10" },
            { "verbal_explanation": "שלב 2: המספר 10 לעולם לא יהיה שווה לאפס, ללא קשר לערך שנציב ב-x.", "math_expression": "10 ≠ 0" },
            { "verbal_explanation": "שלב 3: לכן, אין שום מגבלה על ההצבה.", "math_expression": "כל x" }
        ],
        "final_answer": "כל x",
        "options": ["x ≠ 10", "x ≠ 0", "כל x", "x = 0"],
        "correctAnswer": 2
    },
    {
        "id": 52,
        "subTopic": "תחום הצבה",
        "difficulty": "Medium",
        "question_text": "מצאו את תחום ההצבה של השבר: <strong>5 / (2x - 1)</strong>",
        "hint": "פתרו את המשוואה 2x - 1 = 0 כדי למצוא את הערך האסור.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשווה את המכנה לאפס.", "math_expression": "2x - 1 = 0" },
            { "verbal_explanation": "שלב 2: נעביר את 1 אגף: 2x = 1.", "math_expression": "2x = 1" },
            { "verbal_explanation": "שלב 3: נחלק ב-2 ונקבל חצי.", "math_expression": "x = 0.5" },
            { "verbal_explanation": "שלב 4: תחום ההצבה הוא ש-x שונה מחצי.", "math_expression": "x ≠ 0.5" }
        ],
        "final_answer": "x ≠ 0.5",
        "options": ["x ≠ 2", "x ≠ 1", "x ≠ 0.5", "כל x"],
        "correctAnswer": 2
    },
    {
        "id": 53,
        "subTopic": "תחום הצבה",
        "difficulty": "High",
        "question_text": "מהו תחום ההצבה של הביטוי המורכב: <strong>1/x + 1/(x-2)</strong>?",
        "hint": "עליכם לוודא ששני המכנים שונים מאפס בו-זמנית.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מהמכנה הראשון אנו לומדים ש-x חייב להיות שונה מאפס.", "math_expression": "x ≠ 0" },
            { "verbal_explanation": "שלב 2: מהמכנה השני אנו לומדים ש-(x-2) חייב להיות שונה מאפס.", "math_expression": "x - 2 ≠ 0 -> x ≠ 2" },
            { "verbal_explanation": "שלב 3: נשלב את שני התנאים יחד.", "math_expression": "x ≠ 0 וגם x ≠ 2" }
        ],
        "final_answer": "x ≠ 0 וגם x ≠ 2",
        "options": ["x ≠ 0", "x ≠ 2", "x ≠ 0, 2", "כל x"],
        "correctAnswer": 2
    },
    {
        "id": 54,
        "subTopic": "תחום הצבה",
        "difficulty": "Medium",
        "question_text": "עבור איזה ערך של x השבר <strong>x / (x+6)</strong> אינו מוגדר?",
        "hint": "חפשו את המספר ש'יפוצץ' את המכנה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המכנה מתאפס כאשר x + 6 = 0.", "math_expression": "x = -6" }
        ],
        "final_answer": "-6",
        "options": ["6", "-6", "0", "אף ערך"],
        "correctAnswer": 1
    },
    {
        "id": 55,
        "subTopic": "תחום הצבה",
        "difficulty": "High",
        "question_text": "מהו תחום ההצבה של השבר: <strong>4 / (x² - 5x)</strong>?",
        "hint": "השתמשו בפירוק לגורמים על ידי הוצאת x מהמכנה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפרק את המכנה לגורמים.", "math_expression": "x(x - 5)" },
            { "verbal_explanation": "שלב 2: המכנה מתאפס אם x=0 או אם x-5=0.", "math_expression": "x = 0, 5" },
            { "verbal_explanation": "שלב 3: לכן תחום ההצבה הוא כל מספר חוץ משני אלו.", "math_expression": "x ≠ 0, 5" }
        ],
        "final_answer": "x ≠ 0 וגם x ≠ 5",
        "options": ["x ≠ 0", "x ≠ 5", "x ≠ 0, 5", "כל x"],
        "correctAnswer": 2
    },
    {
        "id": 56,
        "subTopic": "תחום הצבה",
        "difficulty": "Low",
        "question_text": "האם מותר להציב <strong>x = 0</strong> בביטוי <strong>0 / x</strong>?",
        "hint": "בדקו מה קורה במכנה אם נציב בו 0.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב x=0 במכנה. נקבל חלוקה באפס.", "math_expression": "0 / 0" },
            { "verbal_explanation": "שלב 2: חלוקה באפס אינה מוגדרת במתמטיקה, גם אם המונה הוא אפס.", "math_expression": "לא מוגדר" }
        ],
        "final_answer": "לא, אסור.",
        "options": ["כן, התוצאה 0", "כן, התוצאה 1", "לא, אסור.", "רק אם המונה חיובי"],
        "correctAnswer": 2
    },
    {
        "id": 57,
        "subTopic": "תחום הצבה",
        "difficulty": "High",
        "question_text": "מהו תחום ההצבה של השבר: <strong>(x-4) / (x² - 16)</strong>?",
        "hint": "חשוב מאוד: תחום הצבה בודקים <u>לפני</u> שמצמצמים את השבר!",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נביט במכנה המקורי: x² - 16. נשווה אותו לאפס.", "math_expression": "x² - 16 = 0 -> x = 4, -4" },
            { "verbal_explanation": "שלב 2: למרות שניתן לצמצם את השבר ל- 1/(x+4), הערך x=4 עדיין אסור להצבה בשבר המקורי.", "math_expression": "x ≠ 4, -4" }
        ],
        "final_answer": "x ≠ 4 וגם x ≠ -4",
        "options": ["x ≠ 4", "x ≠ -4", "x ≠ 4, -4", "כל x"],
        "correctAnswer": 2
    },
    {
        "id": 58,
        "subTopic": "תחום הצבה",
        "difficulty": "Medium",
        "question_text": "מצאו את תחום ההצבה: <strong>7 / (x² + x)</strong>",
        "hint": "הוציאו גורם משותף x במכנה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: פירוק המכנה.", "math_expression": "x(x + 1)" },
            { "verbal_explanation": "שלב 2: מציאת ערכים מאפסים.", "math_expression": "x=0, x=-1" },
            { "verbal_explanation": "שלב 3: כתיבת תחום ההצבה.", "math_expression": "x ≠ 0, -1" }
        ],
        "final_answer": "x ≠ 0 וגם x ≠ -1",
        "options": ["x ≠ 0", "x ≠ -1", "x ≠ 0, -1", "x ≠ 0, 1"],
        "correctAnswer": 2
    },
    {
        "id": 59,
        "subTopic": "תחום הצבה",
        "difficulty": "High",
        "question_text": "תחום ההצבה של שבר מסוים הוא <strong>x ≠ 3</strong>. איזה מהמכנים הבאים יכול להיות המכנה של אותו שבר?",
        "hint": "בדקו איזה ביטוי מתאפס כאשר מציבים בו 3.",
        "solution_steps": [
            { "verbal_explanation": "נבדוק את האפשרות 2x - 6. נציב x=3.", "math_expression": "2 * 3 - 6 = 0" },
            { "verbal_explanation": "מכיוון שהביטוי התאפס, הוא מתאים להיות מכנה שתחום הצבתו הוא x שונה מ-3.", "math_expression": "מתאים" }
        ],
        "final_answer": "2x - 6",
        "options": ["x + 3", "2x - 6", "3x", "x² + 3"],
        "correctAnswer": 1
    },
    {
        "id": 60,
        "subTopic": "תחום הצבה",
        "difficulty": "Low",
        "question_text": "מהי החשיבות של מציאת תחום הצבה בתחילת כל תרגיל?",
        "hint": "חשבו על פתרון משוואות שמתקבלות בסוף התהליך.",
        "solution_steps": [
            { "verbal_explanation": "מציאת תחום הצבה מבטיחה שלא נקבל פתרונות 'שקריים' שמאפסים את המכנה והופכים את התרגיל לחסר משמעות.", "math_expression": "מניעת טעויות לוגיות" }
        ],
        "final_answer": "כדי למנוע קבלת פתרונות שמאפסים את המכנה.",
        "options": ["כדי למצוא את x", "כדי לקצר את התרגיל", "כדי למנוע פתרונות שמאפסים מכנה.", "אין לזה חשיבות"],
        "correctAnswer": 2
    }
];