const questionsDB = [
    // ==============================================================
    // --- תת נושא 1: פתרון משוואות ריבועיות (נוסחת השורשים) (15 שאלות) ---
    // ==============================================================
    {
        "id": 1,
        "subTopic": "פתרון משוואות ריבועיות (נוסחת השורשים)",
        "difficulty": "Medium",
        "question_text": "פתרו את המשוואה הריבועית הבאה בעזרת נוסחת השורשים: <strong>x² - 5x + 6 = 0</strong>",
        "hint": "זהו את המקדמים a, b ו-c, והציבו אותם בזהירות בתוך הנוסחה. שימו לב לסימן של b.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: זיהוי המקדמים של המשוואה לפי התבנית הכללית (ax² + bx + c = 0).", "math_expression": "a = 1 , b = -5 , c = 6" },
            { "verbal_explanation": "שלב 2: כתיבת נוסחת השורשים המלאה.", "math_expression": "x1,2 = [-b ± √(b² - 4ac)] / (2a)" },
            { "verbal_explanation": "שלב 3: הצבת המקדמים בתוך השורש (חישוב הדלתא).", "math_expression": "Δ = (-5)² - 4 * 1 * 6" },
            { "verbal_explanation": "שלב 4: חישוב ערך הביטוי בתוך השורש.", "math_expression": "Δ = 25 - 24 = 1" },
            { "verbal_explanation": "שלב 5: הצבה בנוסחה הסופית עם השורש שמצאנו.", "math_expression": "x1,2 = [5 ± √1] / 2" },
            { "verbal_explanation": "שלב 6: פיצול לשני פתרונות (פלוס ומינוס).", "math_expression": "x1 = (5+1)/2 = 3  ,  x2 = (5-1)/2 = 2" }
        ],
        "final_answer": "x1 = 3, x2 = 2",
        "options": ["x1 = 3, x2 = 2", "x1 = -3, x2 = -2", "x1 = 6, x2 = 1", "x1 = 5, x2 = 1"],
        "correctAnswer": 0
    },
    {
        "id": 2,
        "subTopic": "פתרון משוואות ריבועיות (נוסחת השורשים)",
        "difficulty": "Low",
        "question_text": "כמה פתרונות יש למשוואה הריבועית אם הביטוי בתוך השורש (הדלתא) שווה ל-<strong>0</strong>?",
        "hint": "חשבו על הנוסחה: אם מוסיפים או מחסירים אפס, האם התוצאה משתנה?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבחן את מבנה נוסחת השורשים.", "math_expression": "x = [-b ± √Δ] / 2a" },
            { "verbal_explanation": "שלב 2: נציב Δ = 0 בתוך הנוסחה.", "math_expression": "x = [-b ± 0] / 2a" },
            { "verbal_explanation": "שלב 3: נבין שפעולת הפלוס והמינוס על אפס נותנת את אותה תוצאה בדיוק.", "math_expression": "x1 = x2 = -b/2a" },
            { "verbal_explanation": "שלב 4: מסקנה: במצב זה קיים פתרון אחד בלבד (הנקרא גם פתרון כפול)." }
        ],
        "final_answer": "פתרון אחד בלבד.",
        "options": ["שני פתרונות", "אין פתרון", "פתרון אחד בלבד.", "אינסוף פתרונות"],
        "correctAnswer": 2
    },
    {
        "id": 3,
        "subTopic": "פתרון משוואות ריבועיות (נוסחת השורשים)",
        "difficulty": "High",
        "question_text": "פתרו את המשוואה הבאה: <strong>2x² + 4x - 6 = 0</strong>. מומלץ לצמצם את המשוואה לפני תחילת הפתרון.",
        "hint": "ניתן לחלק את כל אגפי המשוואה ב-2 כדי לעבוד עם מספרים קטנים ונוחים יותר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: צמצום המשוואה על ידי חלוקת כל האיברים ב-2.", "math_expression": "2x² + 4x - 6 = 0  / :2" },
            { "verbal_explanation": "שלב 2: כתיבת המשוואה המצומצמת.", "math_expression": "x² + 2x - 3 = 0" },
            { "verbal_explanation": "שלב 3: זיהוי מקדמים.", "math_expression": "a = 1 , b = 2 , c = -3" },
            { "verbal_explanation": "שלב 4: חישוב הביטוי בתוך השורש.", "math_expression": "2² - 4 * 1 * (-3) = 4 + 12 = 16" },
            { "verbal_explanation": "שלב 5: הצבה בנוסחת השורשים.", "math_expression": "x1,2 = [-2 ± √16] / 2" },
            { "verbal_explanation": "שלב 6: חישוב הפתרונות.", "math_expression": "x1 = (-2+4)/2 = 1  ,  x2 = (-2-4)/2 = -3" }
        ],
        "final_answer": "x1 = 1, x2 = -3",
        "options": ["x1 = 1, x2 = 3", "x1 = 1, x2 = -3", "x1 = -1, x2 = 3", "x1 = 2, x2 = -6"],
        "correctAnswer": 1
    },
    {
        "id": 4,
        "subTopic": "פתרון משוואות ריבועיות (נוסחת השורשים)",
        "difficulty": "Medium",
        "question_text": "מה ניתן לומר על פתרון המשוואה <strong>x² + 4x + 10 = 0</strong>?",
        "hint": "חשבו את הערך שבתוך השורש (b² - 4ac). האם ניתן להוציא שורש למספר שקיבלתם?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: זיהוי מקדמי המשוואה.", "math_expression": "a = 1 , b = 4 , c = 10" },
            { "verbal_explanation": "שלב 2: חישוב הדיסקרימיננטה (הביטוי שמתחת לשורש).", "math_expression": "Δ = 4² - 4 * 1 * 10" },
            { "verbal_explanation": "שלב 3: חישוב התוצאה המספרית.", "math_expression": "Δ = 16 - 40 = -24" },
            { "verbal_explanation": "שלב 4: ניתוח התוצאה. מכיוון שהתקבל מספר שלילי, לא ניתן להוציא לו שורש ממשי.", "math_expression": "-24 < 0" },
            { "verbal_explanation": "שלב 5: מסקנה: למשוואה אין פתרון ממשי." }
        ],
        "final_answer": "אין פתרון למשוואה.",
        "options": ["יש פתרון אחד", "יש שני פתרונות", "אין פתרון למשוואה.", "הפתרון הוא 0"],
        "correctAnswer": 2
    },
    {
        "id": 5,
        "subTopic": "פתרון משוואות ריבועיות (נוסחת השורשים)",
        "difficulty": "Medium",
        "question_text": "פתרו את המשוואה החסרה: <strong>x² - 9x = 0</strong>. (ניתן לפתור ללא נוסחת השורשים)",
        "hint": "במשוואה שבה חסר האיבר החופשי (c=0), הדרך המהירה ביותר היא הוצאת גורם משותף איקס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: זיהוי שהמשוואה חסרה (אין מספר ללא איקס).", "math_expression": "x² - 9x = 0" },
            { "verbal_explanation": "שלב 2: הוצאת איקס מחוץ לסוגריים כגורם משותף.", "math_expression": "x * (x - 9) = 0" },
            { "verbal_explanation": "שלב 3: שימוש בכלל המכפלה: כדי שמכפלה תהיה אפס, לפחות אחד הגורמים חייב להיות אפס.", "math_expression": "x = 0  או  x - 9 = 0" },
            { "verbal_explanation": "שלב 4: חילוץ שני הפתרונות.", "math_expression": "x1 = 0  ,  x2 = 9" }
        ],
        "final_answer": "x1 = 0, x2 = 9",
        "options": ["x1 = 0, x2 = 9", "x = 9", "x1 = 3, x2 = -3", "אין פתרון"],
        "correctAnswer": 0
    },
    {
        "id": 6,
        "subTopic": "פתרון משוואות ריבועיות (נוסחת השורשים)",
        "difficulty": "Medium",
        "question_text": "פתרו את המשוואה החסרה: <strong>x² - 16 = 0</strong>.",
        "hint": "במשוואה שבה חסר האיבר האמצעי (b=0), ניתן לבודד את האיקס בריבוע ולהוציא שורש.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: העברת המספר החופשי לאגף ימין.", "math_expression": "x² = 16" },
            { "verbal_explanation": "שלב 2: ביצוע פעולת שורש ריבועי על שני אגפי המשוואה.", "math_expression": "√x² = √16" },
            { "verbal_explanation": "שלב 3: רישום שני הפתרונות (חיובי ושלילי).", "math_expression": "x = ±4" },
            { "verbal_explanation": "שלב 4: כתיבת הפתרונות בנפרד.", "math_expression": "x1 = 4 , x2 = -4" }
        ],
        "final_answer": "x1 = 4, x2 = -4",
        "options": ["x = 4", "x = 16", "x1 = 4, x2 = -4", "אין פתרון"],
        "correctAnswer": 2
    },
    {
        "id": 7,
        "subTopic": "פתרון משוואות ריבועיות (נוסחת השורשים)",
        "difficulty": "High",
        "question_text": "סדרו את המשוואה הבאה לצורה תקנית ופתרו: <strong>x(x + 4) = 5</strong>",
        "hint": "פתחו קודם את הסוגריים והעבירו את ה-5 לאגף שמאל כדי להשוות לאפס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: פתיחת סוגריים בעזרת חוק הפילוג.", "math_expression": "x² + 4x = 5" },
            { "verbal_explanation": "שלב 2: העברת ה-5 אגף כדי לקבל משוואה שווה לאפס.", "math_expression": "x² + 4x - 5 = 0" },
            { "verbal_explanation": "שלב 3: זיהוי מקדמים.", "math_expression": "a = 1 , b = 4 , c = -5" },
            { "verbal_explanation": "שלב 4: חישוב הדלתא (הביטוי שבתוך השורש).", "math_expression": "4² - 4 * 1 * (-5) = 16 + 20 = 36" },
            { "verbal_explanation": "שלב 5: הצבה בנוסחת השורשים.", "math_expression": "x1,2 = [-4 ± √36] / 2" },
            { "verbal_explanation": "שלב 6: חישוב התוצאות.", "math_expression": "x1 = (-4+6)/2 = 1  ,  x2 = (-4-6)/2 = -5" }
        ],
        "final_answer": "x1 = 1, x2 = -5",
        "options": ["x1 = 1, x2 = 5", "x1 = -1, x2 = 5", "x1 = 1, x2 = -5", "x1 = 0, x2 = 5"],
        "correctAnswer": 2
    },
    {
        "id": 8,
        "subTopic": "פתרון משוואות ריבועיות (נוסחת השורשים)",
        "difficulty": "High",
        "question_text": "פתרו את המשוואה: <strong>(x - 3)² = 1</strong> בעזרת פתיחת סוגריים.",
        "hint": "השתמשו בנוסחת הכפל המקוצר: (a-b)² = a² - 2ab + b².",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: פתיחת הסוגריים לפי נוסחת הכפל המקוצר.", "math_expression": "x² - 6x + 9 = 1" },
            { "verbal_explanation": "שלב 2: העברת ה-1 שמאלה וסידור המשוואה.", "math_expression": "x² - 6x + 8 = 0" },
            { "verbal_explanation": "שלב 3: זיהוי מקדמים.", "math_expression": "a = 1 , b = -6 , c = 8" },
            { "verbal_explanation": "שלב 4: חישוב בתוך השורש.", "math_expression": "(-6)² - 4 * 1 * 8 = 36 - 32 = 4" },
            { "verbal_explanation": "שלב 5: חילוץ שורשים.", "math_expression": "x1,2 = [6 ± 2] / 2" },
            { "verbal_explanation": "שלב 6: תוצאות סופיות.", "math_expression": "x1 = 4 , x2 = 2" }
        ],
        "final_answer": "x1 = 4, x2 = 2",
        "options": ["x1 = 4, x2 = 2", "x1 = 3, x2 = 1", "x1 = -4, x2 = -2", "x = 4"],
        "correctAnswer": 0
    },
    {
        "id": 9,
        "subTopic": "פתרון משוואות ריבועיות (נוסחת השורשים)",
        "difficulty": "Medium",
        "question_text": "במשוואה הריבועית <strong>ax² + bx + c = 0</strong>, מה מייצג הביטוי <strong>b² - 4ac</strong>?",
        "hint": "חשבו על השם המקצועי של הביטוי שקובע את מספר הפתרונות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: זהו הביטוי המופיע בתוך השורש בנוסחת השורשים.", "math_expression": "Discriminant" },
            { "verbal_explanation": "שלב 2: בעברית, ביטוי זה נקרא 'דיסקרימיננטה' (או בקיצור דלתא).", "math_expression": "Δ = b² - 4ac" },
            { "verbal_explanation": "שלב 3: תפקידו הוא לקבוע את סוג ומספר הפתרונות של המשוואה (שניים, אחד או אפס)." }
        ],
        "final_answer": "הדיסקרימיננטה (דלתא).",
        "options": ["המקדם הראשי", "הדיסקרימיננטה (דלתא).", "שיעור ה-x של הקודקוד", "האיבר החופשי"],
        "correctAnswer": 1
    },
    {
        "id": 10,
        "subTopic": "פתרון משוואות ריבועיות (נוסחת השורשים)",
        "difficulty": "Medium",
        "question_text": "פתרו את המשוואה: <strong>x² + 5x = 0</strong>.",
        "hint": "הוציאו איקס כגורם משותף.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הוצאת גורם משותף.", "math_expression": "x(x + 5) = 0" },
            { "verbal_explanation": "שלב 2: פיצול למקרים.", "math_expression": "x = 0  או  x + 5 = 0" },
            { "verbal_explanation": "שלב 3: חילוץ פתרון שני.", "math_expression": "x = -5" }
        ],
        "final_answer": "x1 = 0, x2 = -5",
        "options": ["x1 = 0, x2 = 5", "x1 = 0, x2 = -5", "x = 5", "אין פתרון"],
        "correctAnswer": 1
    },
    {
        "id": 11,
        "subTopic": "פתרון משוואות ריבועיות (נוסחת השורשים)",
        "difficulty": "Low",
        "question_text": "איזו מהמשוואות הבאות היא משוואה ריבועית?",
        "hint": "חפשו את המשתנה שמופיע בחזקת 2.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבדוק את האפשרות הראשונה: 2x + 5 = 0. זוהי משוואה ממעלה ראשונה (קוית).", "math_expression": "Linear" },
            { "verbal_explanation": "שלב 2: נבדוק את האפשרות השנייה: x² - 4 = 0. כאן הנעלם בחזקת 2, לכן זו משוואה ריבועית.", "math_expression": "Quadratic" }
        ],
        "final_answer": "x² - 4 = 0",
        "options": ["2x + 5 = 0", "x² - 4 = 0", "x³ - 1 = 0", "5 = 5"],
        "correctAnswer": 1
    },
    {
        "id": 12,
        "subTopic": "פתרון משוואות ריבועיות (נוסחת השורשים)",
        "difficulty": "High",
        "question_text": "מצאו את x עבורו הביטוי <strong>x² - 2x + 1</strong> שווה ל-0.",
        "hint": "נסו לזהות פה נוסחת כפל מקוצר של דו-איבר בריבוע.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: זיהוי תבנית הכפל המקוצר (a-b)².", "math_expression": "x² - 2x + 1 = (x - 1)²" },
            { "verbal_explanation": "שלב 2: השוואת הביטוי המקוצר לאפס.", "math_expression": "(x - 1)² = 0" },
            { "verbal_explanation": "שלב 3: אם הריבוע הוא אפס, גם הבסיס חייב להיות אפס.", "math_expression": "x - 1 = 0" },
            { "verbal_explanation": "שלב 4: בידוד איקס.", "math_expression": "x = 1" }
        ],
        "final_answer": "x = 1",
        "options": ["x = 1", "x = -1", "x = 0", "אין פתרון"],
        "correctAnswer": 0
    },
    {
        "id": 13,
        "subTopic": "פתרון משוואות ריבועיות (נוסחת השורשים)",
        "difficulty": "High",
        "question_text": "פתרו את המשוואה: <strong>3x² - 12 = 0</strong>.",
        "hint": "חלקו ב-3 ואז הוציאו שורש.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: חלוקת שני האגפים ב-3.", "math_expression": "x² - 4 = 0" },
            { "verbal_explanation": "שלב 2: העברת ה-4 ימינה.", "math_expression": "x² = 4" },
            { "verbal_explanation": "שלב 3: הוצאת שורש.", "math_expression": "x = ±2" }
        ],
        "final_answer": "x1 = 2, x2 = -2",
        "options": ["x = 2", "x1 = 2, x2 = -2", "x = 4", "x = 0"],
        "correctAnswer": 1
    },
    {
        "id": 14,
        "subTopic": "פתרון משוואות ריבועיות (נוסחת השורשים)",
        "difficulty": "Medium",
        "question_text": "במשוואה <strong>x² + 6x + 9 = 0</strong>, כמה פתרונות תקבלו?",
        "hint": "בדקו את הדלתא או נסו לקצר עם כפל מקוצר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: חישוב דלתא.", "math_expression": "6² - 4 * 1 * 9 = 36 - 36 = 0" },
            { "verbal_explanation": "שלב 2: מכיוון שהדלתא היא אפס, יש פתרון אחד בלבד." }
        ],
        "final_answer": "פתרון אחד",
        "options": ["שני פתרונות", "פתרון אחד", "אין פתרון", "אינסוף פתרונות"],
        "correctAnswer": 1
    },
    {
        "id": 15,
        "subTopic": "פתרון משוואות ריבועיות (נוסחת השורשים)",
        "difficulty": "High",
        "question_text": "פתרו את המשוואה: <strong>x² + x - 2 = 0</strong>.",
        "hint": "השתמשו בנוסחת השורשים או בטרינום (שני מספרים שכפלם 2- וחיבורם 1).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: זיהוי מקדמים.", "math_expression": "a=1, b=1, c=-2" },
            { "verbal_explanation": "שלב 2: חישוב בתוך השורש.", "math_expression": "1² - 4 * 1 * (-2) = 1 + 8 = 9" },
            { "verbal_explanation": "שלב 3: חילוץ איקסים.", "math_expression": "x1,2 = [-1 ± 3] / 2" },
            { "verbal_explanation": "שלב 4: תוצאות.", "math_expression": "x1 = 1 , x2 = -2" }
        ],
        "final_answer": "x1 = 1, x2 = -2",
        "options": ["x1 = 1, x2 = -2", "x1 = -1, x2 = 2", "x1 = 2, x2 = 1", "אין פתרון"],
        "correctAnswer": 0
    },

    // ==============================================================
    // --- תת נושא 2: מערכת משוואות קווית וריבועית (15 שאלות) ---
    // ==============================================================
    {
        "id": 16,
        "subTopic": "מערכת משוואות קווית וריבועית",
        "difficulty": "Medium",
        "question_text": "מצאו את נקודות החיתוך בין הפרבולה <strong>y = x²</strong> לבין הישר <strong>y = 4</strong>.<br><div style='text-align:center; margin:15px 0;'><svg width='160' height='140' viewBox='0 0 160 140'><path d='M 30 20 Q 80 180 130 20' fill='none' stroke='#3b82f6' stroke-width='2'/><line x1='10' y1='60' x2='150' y2='60' stroke='#ef4444' stroke-width='2' stroke-dasharray='4'/><circle cx='54' cy='60' r='4' fill='black'/><circle cx='106' cy='60' r='4' fill='black'/><text x='155' y='65' font-size='10' fill='#ef4444'>y=4</text></svg></div>",
        "hint": "בנקודות החיתוך, לשתי הפונקציות יש את אותו 'וואי'. השוו את אגפי ימין ופתרו את המשוואה הנוצרת.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: השוואה בין שתי הפונקציות כדי למצוא את האיקסים המשותפים.", "math_expression": "x² = 4" },
            { "verbal_explanation": "שלב 2: הוצאת שורש ריבועי לקבלת ערכי האיקס.", "math_expression": "x = ±2" },
            { "verbal_explanation": "שלב 3: כתיבת שיעורי האיקס בנפרד.", "math_expression": "x1 = 2 , x2 = -2" },
            { "verbal_explanation": "שלב 4: מציאת שיעור הוואי המתאים. מכיוון שהישר הוא y=4, הגובה של שתי הנקודות הוא 4.", "math_expression": "y1 = 4 , y2 = 4" },
            { "verbal_explanation": "שלב 5: כתיבת נקודות החיתוך כזוגות סדורים.", "math_expression": "(2, 4) , (-2, 4)" }
        ],
        "final_answer": "(2, 4) ו- (2-, 4)",
        "options": ["(2, 4)", "(2, 4) ו- (-2, 4)", "(4, 2) ו- (4, -2)", "(0, 4)"],
        "correctAnswer": 1
    },
    {
        "id": 17,
        "subTopic": "מערכת משוואות קווית וריבועית",
        "difficulty": "High",
        "question_text": "מצאו את נקודות המפגש של הפרבולה <strong>y = x² - 2x</strong> והישר <strong>y = x</strong>.",
        "hint": "השוו את הביטויים: x² - 2x = x. העבירו הכל לאגף אחד ופתרו בעזרת הוצאת גורם משותף.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: בניית משוואת השוואה.", "math_expression": "x² - 2x = x" },
            { "verbal_explanation": "שלב 2: העברת האיקס לצד שמאל בסימן שלילי.", "math_expression": "x² - 3x = 0" },
            { "verbal_explanation": "שלב 3: הוצאת גורם משותף איקס.", "math_expression": "x * (x - 3) = 0" },
            { "verbal_explanation": "שלב 4: מציאת שני ערכי האיקס המשותפים.", "math_expression": "x = 0 , x = 3" },
            { "verbal_explanation": "שלב 5: מציאת שיעורי הוואי על ידי הצבה במשוואת הישר y = x.", "math_expression": "x=0 -> y=0 | x=3 -> y=3" },
            { "verbal_explanation": "שלב 6: כתיבת הנקודות הסופיות.", "math_expression": "(0, 0) , (3, 3)" }
        ],
        "final_answer": "(0, 0) ו- (3, 3)",
        "options": ["(0, 0) ו- (2, 2)", "(0, 0) ו- (3, 3)", "(1, 1) ו- (3, 3)", "אין נקודות חיתוך"],
        "correctAnswer": 1
    },
    {
        "id": 18,
        "subTopic": "מערכת משוואות קווית וריבועית",
        "difficulty": "Medium",
        "question_text": "כמה נקודות חיתוך יש לפרבולה <strong>y = x² + 5</strong> ולישר <strong>y = 2</strong>?",
        "hint": "נסו להשוות בראש או לצייר סקיצה. האם פרבולה שמתחילה בגובה 5 ומטפסת למעלה יכולה לפגוש ישר שנמצא בגובה 2?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: בניית משוואת השוואה.", "math_expression": "x² + 5 = 2" },
            { "verbal_explanation": "שלב 2: העברת ה-5 אגף בחיסור.", "math_expression": "x² = -3" },
            { "verbal_explanation": "שלב 3: ניתוח התוצאה. מכיוון שלא קיים מספר ממשי שבריבוע נותן תוצאה שלילית, אין פתרון למשוואה.", "math_expression": "No real solution" },
            { "verbal_explanation": "שלב 4: מסקנה גיאומטרית: הגרפים לא נחתכים לעולם." }
        ],
        "final_answer": "0 (אין נקודות חיתוך).",
        "options": ["1", "2", "0 (אין נקודות חיתוך).", "אינסוף"],
        "correctAnswer": 2
    },
    {
        "id": 19,
        "subTopic": "מערכת משוואות קווית וריבועית",
        "difficulty": "High",
        "question_text": "האם הישר <strong>y = 2x - 1</strong> משיק לפרבולה <strong>y = x²</strong> בנקודה <strong>(1, 1)</strong>? (משיק פירושו חותך בנקודה אחת בלבד).",
        "hint": "השוו את המשוואות ובדקו את מספר הפתרונות. אם קיבלתם פתרון יחיד (דלתא 0), הרי שזו השקה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: השוואת שתי הפונקציות.", "math_expression": "x² = 2x - 1" },
            { "verbal_explanation": "שלב 2: סידור המשוואה הריבועית.", "math_expression": "x² - 2x + 1 = 0" },
            { "verbal_explanation": "שלב 3: זיהוי נוסחת כפל מקוצר.", "math_expression": "(x - 1)² = 0" },
            { "verbal_explanation": "שלב 4: חילוץ פתרון יחיד למשוואה.", "math_expression": "x = 1" },
            { "verbal_explanation": "שלב 5: מסקנה: מכיוון שיש נקודת מפגש אחת בלבד, מדובר בהשקה." }
        ],
        "final_answer": "כן, הישר משיק לפרבולה.",
        "options": ["כן, הישר משיק לפרבולה.", "לא, הוא חותך אותה פעמיים.", "לא, הם לא נפגשים כלל.", "הוא עובר בתוך הפרבולה."],
        "correctAnswer": 0
    },
    {
        "id": 20,
        "subTopic": "מערכת משוואות קווית וריבועית",
        "difficulty": "High",
        "question_text": "מצאו את נקודות החיתוך של הישר <strong>y = x + 2</strong> והפרבולה <strong>y = x²</strong>.<br><div style='text-align:center; margin:15px 0;'><svg width='150' height='150' viewBox='0 0 150 150'><path d='M 10 140 Q 75 -20 140 140' fill='none' stroke='#3b82f6' stroke-width='2'/><line x1='10' y1='100' x2='140' y2='30' stroke='#ef4444' stroke-width='2'/></svg></div>",
        "hint": "השוו אגפים: x² = x + 2. סדרו את המשוואה הריבועית ופתרו בעזרת טרינום.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: השוואה בין המשוואות.", "math_expression": "x² = x + 2" },
            { "verbal_explanation": "שלב 2: העברת איברים לצד שמאל.", "math_expression": "x² - x - 2 = 0" },
            { "verbal_explanation": "שלב 3: פירוק לטרינום (כפל 2-, חיבור 1-).", "math_expression": "(x - 2) * (x + 1) = 0" },
            { "verbal_explanation": "שלב 4: מציאת ערכי האיקס.", "math_expression": "x1 = 2 , x2 = -1" },
            { "verbal_explanation": "שלב 5: מציאת שיעורי הוואי בעזרת משוואת הישר y = x + 2.", "math_expression": "x=2 -> y=4 | x=-1 -> y=1" },
            { "verbal_explanation": "שלב 6: כתיבת הנקודות.", "math_expression": "(2, 4) , (-1, 1)" }
        ],
        "final_answer": "(2, 4) ו- (1-, 1)",
        "options": ["(2, 4) ו- (-1, 1)", "(2, 4) ו- (1, 1)", "(0, 2) ו- (2, 4)", "אין חיתוך"],
        "correctAnswer": 0
    },
    {
        "id": 21,
        "subTopic": "מערכת משוואות קווית וריבועית",
        "difficulty": "Medium",
        "question_text": "נתון ששיעור האיקס של נקודות המפגש בין הישר לפרבולה הם 3 ו- (3-). אם משוואת הישר היא <strong>y = 5</strong>, מהן הנקודות?",
        "hint": "מכיוון שהישר הוא אופקי בגובה 5, הגובה של כל נקודה עליו חייב להיות 5.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את שיעורי האיקס הנתונים.", "math_expression": "x1 = 3 , x2 = -3" },
            { "verbal_explanation": "שלב 2: נזהה את משוואת הישר y = 5. משמעותה שכל נקודה על הישר הזה היא בגובה 5.", "math_expression": "y = 5" },
            { "verbal_explanation": "שלב 3: נשלב את האיקס והוואי לנקודות שלמות.", "math_expression": "(3, 5) , (-3, 5)" }
        ],
        "final_answer": "(3, 5) ו- (3-, 5)",
        "options": ["(3, 0) ו- (-3, 0)", "(3, 5) ו- (-3, 5)", "(5, 3) ו- (5, -3)", "(0, 5)"],
        "correctAnswer": 1
    },
    {
        "id": 22,
        "subTopic": "מערכת משוואות קווית וריבועית",
        "difficulty": "High",
        "question_text": "באיזה מקרה למערכת של פרבולה וישר יהיה <strong>פתרון אחד בלבד</strong>?",
        "hint": "חשבו על המצב הגרפי שבו הישר 'רק מלטף' את הפרבולה בנקודה אחת.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כאשר אנו משווים ישר לפרבולה, נוצרת משוואה ריבועית.", "math_expression": "ax² + bx + c = 0" },
            { "verbal_explanation": "שלב 2: מספר הפתרונות של משוואה ריבועית נקבע לפי הדלתא.", "math_expression": "Δ = b² - 4ac" },
            { "verbal_explanation": "שלב 3: כדי לקבל פתרון יחיד, הדלתא חייבת להיות שווה לאפס.", "math_expression": "Δ = 0" },
            { "verbal_explanation": "שלב 4: גיאומטרית, מצב זה נקרא 'השקה'. הישר משיק לפרבולה." }
        ],
        "final_answer": "כאשר הישר משיק לפרבולה (דלתא שווה 0).",
        "options": ["כאשר הישר מקביל לציר האיקס", "כאשר הישר חותך את הפרבולה פעמיים", "כאשר הישר משיק לפרבולה (דלתא שווה 0).", "זה בלתי אפשרי"],
        "correctAnswer": 2
    },
    {
        "id": 23,
        "subTopic": "מערכת משוואות קווית וריבועית",
        "difficulty": "Medium",
        "question_text": "מצאו את נקודת החיתוך של הישר <strong>y = 2x + 1</strong> עם הפרבולה <strong>y = x² + 2x - 3</strong>.",
        "hint": "השוו ביניהן. תראו שהאיבר 2x מופיע בשני הצדדים ולכן הוא יתבטל.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: השוואת אגפים.", "math_expression": "x² + 2x - 3 = 2x + 1" },
            { "verbal_explanation": "שלב 2: חיסור 2x משני אגפי המשוואה.", "math_expression": "x² - 3 = 1" },
            { "verbal_explanation": "שלב 3: העברת ה-3 ימינה.", "math_expression": "x² = 4" },
            { "verbal_explanation": "שלב 4: חילוץ איקסים.", "math_expression": "x1 = 2 , x2 = -2" },
            { "verbal_explanation": "שלב 5: מציאת וואי עבור x=2: (2*2+1) שווה 5. עבור x=-2: (2*-2+1) שווה -3.", "math_expression": "(2, 5) , (-2, -3)" }
        ],
        "final_answer": "(2, 5) ו- (2-, 3-)",
        "options": ["(2, 5) ו- (-2, -3)", "(2, 5)", "(0, 1) ו- (0, -3)", "אין פתרון"],
        "correctAnswer": 0
    },
    {
        "id": 24,
        "subTopic": "מערכת משוואות קווית וריבועית",
        "difficulty": "High",
        "question_text": "במערכת הצירים, ישר עובר דרך קודקוד הפרבולה <strong>y = (x - 3)² + 4</strong>. אם הישר הוא אופקי (y=k), מהו ערכו של k?",
        "hint": "מצאו את נקודת הקודקוד. ישר אופקי שעובר דרכה חייב להיות באותו גובה בדיוק.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את קודקוד הפרבולה מתוך התבנית הנתונה.", "math_expression": "(3, 4)" },
            { "verbal_explanation": "שלב 2: נבין שישר אופקי מיוצג על ידי הגובה שלו (שיעור הוואי).", "math_expression": "y = k" },
            { "verbal_explanation": "שלב 3: מכיוון שהישר עובר דרך הקודקוד, ה-k שלו חייב להיות שווה לשיעור הוואי של הקודקוד.", "math_expression": "k = 4" }
        ],
        "final_answer": "4",
        "options": ["3", "4", "0", "7"],
        "correctAnswer": 1
    },
    {
        "id": 25,
        "subTopic": "מערכת משוואות קווית וריבועית",
        "difficulty": "High",
        "question_text": "מצאו את נקודות המפגש של <strong>y = -x² + 8</strong> ו- <strong>y = x²</strong>.",
        "hint": "השוו: איקס בריבוע שווה למינוס איקס בריבוע פלוס שמונה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: השוואת הפרבולות.", "math_expression": "x² = -x² + 8" },
            { "verbal_explanation": "שלב 2: העברת איברים שמאלה.", "math_expression": "2x² = 8" },
            { "verbal_explanation": "שלב 3: חלוקה ב-2.", "math_expression": "x² = 4  / :2" },
            { "verbal_explanation": "שלב 4: הוצאת שורש.", "math_expression": "x = ±2" },
            { "verbal_explanation": "שלב 5: מציאת וואי (2 בריבוע זה 4).", "math_expression": "(2, 4) , (-2, 4)" }
        ],
        "final_answer": "(2, 4) ו- (2-, 4)",
        "options": ["(2, 4) ו- (-2, 4)", "(2, 4)", "(0, 8)", "(4, 2)"],
        "correctAnswer": 0
    },
    {
        "id": 26,
        "subTopic": "מערכת משוואות קווית וריבועית",
        "difficulty": "Medium",
        "question_text": "כמה נקודות חיתוך יש לפרבולה <strong>y = x²</strong> ולישר <strong>y = -5</strong>?",
        "hint": "האם איקס בריבוע (שהוא תמיד חיובי או אפס) יכול להיות שווה למינוס חמש?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: השוואה.", "math_expression": "x² = -5" },
            { "verbal_explanation": "שלב 2: ניתוח - לא קיים מספר שבריבוע נותן תוצאה שלילית.", "math_expression": "No real roots" },
            { "verbal_explanation": "שלב 3: לכן אין נקודות מפגש." }
        ],
        "final_answer": "אין נקודות חיתוך.",
        "options": ["1", "2", "אין נקודות חיתוך.", "אינסוף"],
        "correctAnswer": 2
    },
    {
        "id": 27,
        "subTopic": "מערכת משוואות קווית וריבועית",
        "difficulty": "High",
        "question_text": "מצאו את נקודות החיתוך של <strong>y = x² - 4</strong> וציר האיקס.",
        "hint": "ציר האיקס הוא למעשה הישר y = 0.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: השוואה לאפס.", "math_expression": "x² - 4 = 0" },
            { "verbal_explanation": "שלב 2: בידוד איקס בריבוע.", "math_expression": "x² = 4" },
            { "verbal_explanation": "שלב 3: חילוץ פתרונות.", "math_expression": "x = 2 , x = -2" }
        ],
        "final_answer": "(2, 0) ו- (2-, 0)",
        "options": ["(2, 0) ו- (-2, 0)", "(0, 4) ו- (0, -4)", "(4, 0)", "(0, 0)"],
        "correctAnswer": 0
    },
    {
        "id": 28,
        "subTopic": "מערכת משוואות קווית וריבועית",
        "difficulty": "Medium",
        "question_text": "מהי נקודת המפגש של <strong>y = x² + 1</strong> עם ציר הוואי?",
        "hint": "ציר הוואי הוא הישר x = 0.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הצבת x = 0 במשוואה.", "math_expression": "y = 0² + 1" },
            { "verbal_explanation": "שלב 2: חישוב התוצאה.", "math_expression": "y = 1" }
        ],
        "final_answer": "(0, 1)",
        "options": ["(1, 0)", "(0, 1)", "(0, 0)", "אין חיתוך"],
        "correctAnswer": 1
    },
    {
        "id": 29,
        "subTopic": "מערכת משוואות קווית וריבועית",
        "difficulty": "High",
        "question_text": "מצאו את המפגש בין <strong>y = x² + 4x</strong> ו- <strong>y = -4</strong>.",
        "hint": "השוו וסדרו את המשוואה. בדקו אם זו נוסחת כפל מקוצר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: השוואה.", "math_expression": "x² + 4x = -4" },
            { "verbal_explanation": "שלב 2: סידור.", "math_expression": "x² + 4x + 4 = 0" },
            { "verbal_explanation": "שלב 3: כפל מקוצר.", "math_expression": "(x + 2)² = 0" },
            { "verbal_explanation": "שלב 4: פתרון יחיד x = -2. הגובה הוא -4.", "math_expression": "(-2, -4)" }
        ],
        "final_answer": "(2-, 4-)",
        "options": ["(-2, -4)", "(2, 4)", "(0, -4)", "אין פתרון"],
        "correctAnswer": 0
    },
    {
        "id": 30,
        "subTopic": "מערכת משוואות קווית וריבועית",
        "difficulty": "Low",
        "question_text": "כמה פתרונות מקסימליים יכולים להיות למערכת של ישר ופרבולה?",
        "hint": "חשבו על משוואה ריבועית - מהו מספר השורשים המקסימלי שלה?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: השוואה של ישר ופרבולה תמיד מובילה למשוואה ממעלה שנייה.", "math_expression": "Degree 2" },
            { "verbal_explanation": "שלב 2: למשוואה ממעלה שנייה יש לכל היותר 2 פתרונות." }
        ],
        "final_answer": "2",
        "options": ["1", "2", "3", "אינסוף"],
        "correctAnswer": 1
    },,
    // ==============================================================
    // --- תת נושא 3: משוואות פרמטריות ממעלה ראשונה (15 שאלות) ---
    // ==============================================================
    {
        "id": 31,
        "subTopic": "משוואות פרמטריות ממעלה ראשונה",
        "difficulty": "Medium",
        "question_text": "פתרו את המשוואה הבאה ובודדו את הנעלם איקס בעזרת הפרמטר איי: <strong>ax - 5 = 3x + 2</strong>",
        "hint": "רכזו את כל האיברים המכילים איקס באגף אחד, ואת כל שאר האיברים באגף השני. לאחר מכן הוציאו איקס כגורם משותף.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נעביר את כל האיברים המכילים את הנעלם איקס לאגף שמאל, ואת המספרים החופשיים לאגף ימין.", "math_expression": "ax - 3x = 2 + 5" },
            { "verbal_explanation": "שלב 2: נבצע חיבור של המספרים באגף ימין.", "math_expression": "ax - 3x = 7" },
            { "verbal_explanation": "שלב 3: נוציא את איקס כגורם משותף מחוץ לסוגריים באגף שמאל.", "math_expression": "x * (a - 3) = 7" },
            { "verbal_explanation": "שלב 4: כדי לבודד את איקס, נחלק את שני אגפי המשוואה בביטוי שבתוך הסוגריים. חובה לציין שפעולה זו מותרת רק אם המכנה אינו אפס.", "math_expression": "x = 7 / (a - 3)  [תנאי: a ≠ 3]" }
        ],
        "final_answer": "x = 7 / (a - 3)",
        "options": ["x = 7 / (a + 3)", "x = 7 / (a - 3)", "x = a - 3 / 7", "x = 3 / (a - 7)"],
        "correctAnswer": 1
    },
    {
        "id": 32,
        "subTopic": "משוואות פרמטריות ממעלה ראשונה",
        "difficulty": "Low",
        "question_text": "עבור איזה ערך של הפרמטר <strong>a</strong> למשוואה <strong>ax = 5</strong> לא יהיה <strong>אף פתרון</strong>?",
        "hint": "חשבו על מצב שבו אגף שמאל מתאפס לחלוטין, אך אגף ימין נשאר מספר שונה מאפס. האם אפס יכול להיות שווה לחמש?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבחן את מבנה המשוואה הפרמטרית הבסיסית.", "math_expression": "ax = b" },
            { "verbal_explanation": "שלב 2: נגדיר את התנאי למצב של 'אין פתרון'. מצב זה קורה כאשר המקדם של איקס מתאפס, אך התוצאה באגף השני אינה אפס.", "math_expression": "0 * x = מספר שונה מאפס" },
            { "verbal_explanation": "שלב 3: נציב את הערכים מהשאלה שלנו. אנו צריכים ש-a יהיה שווה לאפס.", "math_expression": "a = 0" },
            { "verbal_explanation": "שלב 4: נבדוק את המשוואה המתקבלת: אפס כפול איקס שווה לחמש. מכיוון שכל מספר כפול אפס הוא אפס, לעולם לא נקבל חמש.", "math_expression": "0 = 5  =>  פסוק שקר" }
        ],
        "final_answer": "a = 0",
        "options": ["a = 5", "a = 0", "a = 1", "כל ערך של a"],
        "correctAnswer": 1
    },
    {
        "id": 33,
        "subTopic": "משוואות פרמטריות ממעלה ראשונה",
        "difficulty": "High",
        "question_text": "פתרו את המשוואה הבאה עבור איקס: <strong>m²x - m = x - 1</strong>. פשטו את התוצאה ככל הניתן.",
        "hint": "העבירו את האיקסים שמאלה, הוציאו גורם משותף, והשתמשו בנוסחת כפל מקוצר (הפרש ריבועים) כדי לצמצם את השבר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ריכוז איברים עם איקס בצד שמאל ואיברים ללא איקס בצד ימין.", "math_expression": "m²x - x = m - 1" },
            { "verbal_explanation": "שלב 2: הוצאת איקס כגורם משותף.", "math_expression": "x * (m² - 1) = m - 1" },
            { "verbal_explanation": "שלב 3: בידוד איקס על ידי חלוקה בביטוי שבסוגריים.", "math_expression": "x = (m - 1) / (m² - 1)" },
            { "verbal_explanation": "שלב 4: פירוק המכנה לגורמים לפי נוסחת הפרש ריבועים.", "math_expression": "x = (m - 1) / [(m - 1)(m + 1)]" },
            { "verbal_explanation": "שלב 5: צמצום הגורם המשותף (m-1) מהמונה ומהמכנה.", "math_expression": "x = 1 / (m + 1)  [בתנאי ש-m ≠ 1 וגם m ≠ -1]" }
        ],
        "final_answer": "x = 1 / (m + 1)",
        "options": ["x = m + 1", "x = 1 / (m - 1)", "x = 1 / (m + 1)", "x = m - 1"],
        "correctAnswer": 2
    },
    {
        "id": 34,
        "subTopic": "משוואות פרמטריות ממעלה ראשונה",
        "difficulty": "Medium",
        "question_text": "נתונה המשוואה: <strong>k(x + 2) = 4x + 10</strong>. בודדו את איקס.<br><div style='text-align:center; margin:15px 0;'><svg width='200' height='100' viewBox='0 0 200 100'><rect x='10' y='10' width='180' height='80' fill='#f1f5f9' stroke='#1e293b' rx='10'/><text x='100' y='55' font-size='18' text-anchor='middle' font-weight='bold'>בידוד נעלם עם פרמטר</text></svg></div>",
        "hint": "פתחו קודם את הסוגריים באגף שמאל בעזרת חוק הפילוג, ואז העבירו איקסים לצד אחד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: פתיחת סוגריים בעזרת הכפלת הפרמטר קיי בכל איבר בפנים.", "math_expression": "kx + 2k = 4x + 10" },
            { "verbal_explanation": "שלב 2: העברת האיברים עם איקס לשמאל והאיברים עם קיי לימין.", "math_expression": "kx - 4x = 10 - 2k" },
            { "verbal_explanation": "שלב 3: הוצאת איקס כגורם משותף מחוץ לסוגריים.", "math_expression": "x * (k - 4) = 10 - 2k" },
            { "verbal_explanation": "שלב 4: חלוקה במקדם של איקס לקבלת פתרון סופי.", "math_expression": "x = (10 - 2k) / (k - 4)" }
        ],
        "final_answer": "x = (10 - 2k) / (k - 4)",
        "options": ["x = (10 - 2k) / (k - 4)", "x = 10 / (k - 4)", "x = (2k - 10) / (k + 4)", "x = 5k / 4"],
        "correctAnswer": 0
    },
    {
        "id": 35,
        "subTopic": "משוואות פרמטריות ממעלה ראשונה",
        "difficulty": "Low",
        "question_text": "מתי למשוואה פרמטרית מהצורה <strong>ax = b</strong> יהיו <strong>אינסוף פתרונות</strong>?",
        "hint": "חישבו על מצב שבו כל מספר שתציבו במקום איקס ייתן פסוק אמת (למשל אפס שווה לאפס).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ננתח את המצב שבו כל איקס הוא פתרון למשוואה.", "math_expression": "0 * x = 0" },
            { "verbal_explanation": "שלב 2: כדי שזה יקרה, המקדם של איקס (הפרמטר a) חייב להיות אפס.", "math_expression": "a = 0" },
            { "verbal_explanation": "שלב 3: בנוסף, כדי שלא נקבל סתירה (פסוק שקר), גם האגף הימני (הפרמטר b) חייב להתאפס.", "math_expression": "b = 0" },
            { "verbal_explanation": "שלב 4: מסקנה: כאשר a=0 וגם b=0, המשוואה הופכת ל '0=0' וזה נכון לכל איקס בעולם." }
        ],
        "final_answer": "כאשר a = 0 וגם b = 0.",
        "options": ["כאשר a = 1", "כאשר b = 0 בלבד", "כאשר a = 0 וגם b = 0.", "כאשר a = b"],
        "correctAnswer": 2
    },
    {
        "id": 36,
        "subTopic": "משוואות פרמטריות ממעלה ראשונה",
        "difficulty": "Medium",
        "question_text": "פתרו עבור איקס: <strong>a(x + 1) = 2x</strong>",
        "hint": "פתחו סוגריים, העבירו את האיקסים לצד אחד ובודדו את המשתנה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: פתיחת סוגריים באגף שמאל.", "math_expression": "ax + a = 2x" },
            { "verbal_explanation": "שלב 2: העברת האיקסים שמאלה והפרמטר איי ימינה.", "math_expression": "ax - 2x = -a" },
            { "verbal_explanation": "שלב 3: הוצאת איקס כגורם משותף.", "math_expression": "x * (a - 2) = -a" },
            { "verbal_explanation": "שלב 4: בידוד איקס על ידי חלוקה.", "math_expression": "x = -a / (a - 2)" },
            { "verbal_explanation": "שלב 5: ניתן לשנות את הסימנים במונה ובמכנה כדי לקבל ביטוי אסתטי יותר.", "math_expression": "x = a / (2 - a)" }
        ],
        "final_answer": "x = a / (2 - a)",
        "options": ["x = a / (a - 2)", "x = a / (2 - a)", "x = 2 / a", "x = a - 2"],
        "correctAnswer": 1
    },
    {
        "id": 37,
        "subTopic": "משוואות פרמטריות ממעלה ראשונה",
        "difficulty": "High",
        "question_text": "עבור אילו ערכי <strong>m</strong> למשוואה <strong>(m² - 9)x = m - 3</strong> יש <strong>פתרון יחיד</strong>?",
        "hint": "פתרון יחיד קיים כל עוד המקדם של איקס אינו מתאפס. בדקו מתי הביטוי בסוגריים שונה מאפס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את התנאי לקיום פתרון יחיד במשוואה ממעלה ראשונה.", "math_expression": "המקדם של איקס ≠ 0" },
            { "verbal_explanation": "שלב 2: נציב את הביטוי המכפיל את איקס מהשאלה שלנו.", "math_expression": "m² - 9 ≠ 0" },
            { "verbal_explanation": "שלב 3: נפתור את המשוואה הריבועית כדי למצוא את הערכים ה'אסורים'.", "math_expression": "m² ≠ 9" },
            { "verbal_explanation": "שלב 4: נוציא שורש ריבועי.", "math_expression": "m ≠ 3  וגם  m ≠ -3" },
            { "verbal_explanation": "שלב 5: מסקנה: עבור כל מספר אחר חוץ מ-3 ומינוס 3, למשוואה יהיה פתרון אחד ויחיד." }
        ],
        "final_answer": "m ≠ 3 וגם m ≠ -3",
        "options": ["m = 3", "m ≠ 3 וגם m ≠ -3", "m ≠ 3 בלבד", "m = 0"],
        "correctAnswer": 1
    },
    {
        "id": 38,
        "subTopic": "משוואות פרמטריות ממעלה ראשונה",
        "difficulty": "Medium",
        "question_text": "פתרו עבור איקס: <strong>x / a + 1 = 5</strong>",
        "hint": "התייחסו לפרמטר איי כמספר רגיל. העבירו את ה-1 אגף ואז הכפילו באיי כדי להיפטר מהמכנה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הגדרת תחום הצבה - אסור שהמכנה יהיה אפס.", "math_expression": "a ≠ 0" },
            { "verbal_explanation": "שלב 2: העברת המספר 1 לאגף ימין בסימן שלילי.", "math_expression": "x / a = 5 - 1" },
            { "verbal_explanation": "שלב 3: חישוב התוצאה באגף ימין.", "math_expression": "x / a = 4" },
            { "verbal_explanation": "שלב 4: הכפלת שני אגפי המשוואה בפרמטר איי כדי לבודד את איקס.", "math_expression": "x = 4 * a" }
        ],
        "final_answer": "x = 4a",
        "options": ["x = 4a", "x = 6a", "x = a / 4", "x = 4 / a"],
        "correctAnswer": 0
    },
    {
        "id": 39,
        "subTopic": "משוואות פרמטריות ממעלה ראשונה",
        "difficulty": "High",
        "question_text": "במשוואה <strong>ax + a² = 1 + x</strong>, בודדו את איקס ומצאו את התנאי לפתרון יחיד.",
        "hint": "העבירו איקסים שמאלה ופרמטרים ימינה. השתמשו בפירוק לגורמים באגף ימין.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: סידור המשוואה (איקסים לשמאל).", "math_expression": "ax - x = 1 - a²" },
            { "verbal_explanation": "שלב 2: הוצאת גורם משותף איקס בשמאל ופירוק הפרש ריבועים בימין.", "math_expression": "x * (a - 1) = (1 - a)(1 + a)" },
            { "verbal_explanation": "שלב 3: נשים לב ש- (1 פחות איי) הוא הנגדי של (איי פחות 1). נוציא מינוס.", "math_expression": "x * (a - 1) = -(a - 1)(a + 1)" },
            { "verbal_explanation": "שלב 4: בידוד איקס על ידי חלוקה.", "math_expression": "x = -(a + 1)  [תנאי: a ≠ 1]" }
        ],
        "final_answer": "x = -(a + 1)",
        "options": ["x = a + 1", "x = -(a + 1)", "x = a - 1", "x = 1 / (a-1)"],
        "correctAnswer": 1
    },
    {
        "id": 40,
        "subTopic": "משוואות פרמטריות ממעלה ראשונה",
        "difficulty": "Medium",
        "question_text": "פתרו עבור איקס: <strong>2ax = 10</strong>",
        "hint": "חלקו את אגף ימין בכל מה שמכפיל את איקס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: זיהוי המקדם של הנעלם איקס. במקרה זה המקדם הוא הביטוי 2a.", "math_expression": "Coefficient = 2a" },
            { "verbal_explanation": "שלב 2: בידוד איקס על ידי חלוקה במקדם.", "math_expression": "x = 10 / (2a)" },
            { "verbal_explanation": "שלב 3: צמצום השבר ב-2.", "math_expression": "x = 5 / a  [תנאי: a ≠ 0]" }
        ],
        "final_answer": "x = 5 / a",
        "options": ["x = 5a", "x = 10 / a", "x = 5 / a", "x = 20a"],
        "correctAnswer": 2
    },
    {
        "id": 41,
        "subTopic": "משוואות פרמטריות ממעלה ראשונה",
        "difficulty": "High",
        "question_text": "עבור אילו ערכי <strong>k</strong> למשוואה <strong>kx - 4 = 2x + k</strong> יש <strong>פתרון יחיד</strong>?",
        "hint": "סדרו את המשוואה לצורה ax = b. התנאי לפתרון יחיד הוא a ≠ 0.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: סידור המשוואה כך שכל האיקסים באגף אחד.", "math_expression": "kx - 2x = k + 4" },
            { "verbal_explanation": "שלב 2: הוצאת איקס כגורם משותף.", "math_expression": "x * (k - 2) = k + 4" },
            { "verbal_explanation": "שלב 3: קביעת התנאי לפתרון יחיד: המקדם של איקס חייב להיות שונה מאפס.", "math_expression": "k - 2 ≠ 0" },
            { "verbal_explanation": "שלב 4: העברת ה-2 אגף.", "math_expression": "k ≠ 2" }
        ],
        "final_answer": "k ≠ 2",
        "options": ["k = 2", "k ≠ 2", "k ≠ -4", "k = 0"],
        "correctAnswer": 1
    },
    {
        "id": 42,
        "subTopic": "משוואות פרמטריות ממעלה ראשונה",
        "difficulty": "Medium",
        "question_text": "מצאו את איקס: <strong>(a + 2)x = a² - 4</strong>. פשטו את התשובה.",
        "hint": "השתמשו בנוסחת הפרש ריבועים לצד ימין וצמצמו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כתיבת המשוואה המבודדת את איקס.", "math_expression": "x = (a² - 4) / (a + 2)" },
            { "verbal_explanation": "שלב 2: פירוק המונה לגורמים.", "math_expression": "x = [(a - 2)(a + 2)] / (a + 2)" },
            { "verbal_explanation": "שלב 3: צמצום הגורם המשותף.", "math_expression": "x = a - 2  [תנאי: a ≠ -2]" }
        ],
        "final_answer": "x = a - 2",
        "options": ["x = a + 2", "x = a - 2", "x = 1 / (a-2)", "x = a"],
        "correctAnswer": 1
    },
    {
        "id": 43,
        "subTopic": "משוואות פרמטריות ממעלה ראשונה",
        "difficulty": "Low",
        "question_text": "במשוואה <strong>0 * x = 7</strong>, כמה פתרונות יש?",
        "hint": "האם קיים מספר בעולם שכשנכפיל אותו באפס נקבל תוצאה שהיא שבע?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את אגף שמאל לכל איקס שנבחר.", "math_expression": "0 * (כל מספר) = 0" },
            { "verbal_explanation": "שלב 2: נשווה לתוצאה באגף ימין.", "math_expression": "0 = 7" },
            { "verbal_explanation": "שלב 3: נקבל פסוק שקר. המשמעות היא שאין אף מספר שיקיים את המשוואה." }
        ],
        "final_answer": "אין פתרון.",
        "options": ["פתרון אחד", "אינסוף פתרונות", "אין פתרון.", "הפתרון הוא 7"],
        "correctAnswer": 2
    },
    {
        "id": 44,
        "subTopic": "משוואות פרמטריות ממעלה ראשונה",
        "difficulty": "Medium",
        "question_text": "פתרו עבור איקס: <strong>x / m + x / 2 = 1</strong>",
        "hint": "מצאו מכנה משותף (2m) והכפילו בו את כל המשוואה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הגדרת תחום הצבה.", "math_expression": "m ≠ 0" },
            { "verbal_explanation": "שלב 2: הכפלה במכנה משותף 2m.", "math_expression": "2x + mx = 2m" },
            { "verbal_explanation": "שלב 3: הוצאת איקס כגורם משותף.", "math_expression": "x * (2 + m) = 2m" },
            { "verbal_explanation": "שלב 4: בידוד איקס.", "math_expression": "x = 2m / (2 + m)  [תנאי: m ≠ -2]" }
        ],
        "final_answer": "x = 2m / (m + 2)",
        "options": ["x = 2m / (m + 2)", "x = m / 2", "x = 2 + m", "x = 1 / 2m"],
        "correctAnswer": 0
    },
    {
        "id": 45,
        "subTopic": "משוואות פרמטריות ממעלה ראשונה",
        "difficulty": "High",
        "question_text": "הביעו את איקס בעזרת איי ובי: <strong>ax + b = 10</strong>",
        "hint": "העבירו את בי ימינה ואז חלקו באיי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: העברת האיבר בי לאגף ימין בסימן שלילי.", "math_expression": "ax = 10 - b" },
            { "verbal_explanation": "שלב 2: בידוד איקס על ידי חלוקה במקדם איי.", "math_expression": "x = (10 - b) / a  [תנאי: a ≠ 0]" }
        ],
        "final_answer": "x = (10 - b) / a",
        "options": ["x = (b - 10) / a", "x = 10a - b", "x = (10 - b) / a", "x = 10 / (a + b)"],
        "correctAnswer": 2
    },

    // ==============================================================
    // --- תת נושא 4: משוואות פרמטריות בשני נעלמים (15 שאלות) ---
    // ==============================================================
    {
        "id": 46,
        "subTopic": "משוואות פרמטריות בשני נעלמים",
        "difficulty": "Medium",
        "question_text": "פתרו את מערכת המשוואות הבאה והביעו את איקס ווואי בעזרת הפרמטר איי:<br><strong>x + y = 2a</strong><br><strong>x - y = 0</strong>",
        "hint": "שיטת החיבור היא המהירה ביותר כאן. חברו את שתי המשוואות והוואי יתבטל.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחבר את שתי המשוואות יחד כדי לבטל את הנעלם וואי.", "math_expression": "(x + x) + (y - y) = 2a + 0" },
            { "verbal_explanation": "שלב 2: נצמצם את וואי ונחבר את האיקסים.", "math_expression": "2x = 2a" },
            { "verbal_explanation": "שלב 3: נחלק ב-2 למציאת איקס.", "math_expression": "x = a" },
            { "verbal_explanation": "שלב 4: נציב את איקס שווה איי במשוואה השנייה כדי למצוא את וואי.", "math_expression": "a - y = 0  =>  y = a" },
            { "verbal_explanation": "שלב 5: נרשום את הפתרון המשותף.", "math_expression": "(a, a)" }
        ],
        "final_answer": "x = a, y = a",
        "options": ["x = a, y = a", "x = 2a, y = 0", "x = a, y = -a", "x = 0, y = 2a"],
        "correctAnswer": 0
    },
    {
        "id": 47,
        "subTopic": "משוואות פרמטריות בשני נעלמים",
        "difficulty": "Medium",
        "question_text": "פתרו את המערכת בעזרת הפרמטרים איי ובי:<br><strong>x + y = a</strong><br><strong>x = 2y + b</strong>",
        "hint": "השתמשו בשיטת ההצבה. הציבו את הביטוי של איקס מהמשוואה השנייה לתוך המשוואה הראשונה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הצבת הביטוי של איקס בתוך המשוואה הראשונה.", "math_expression": "(2y + b) + y = a" },
            { "verbal_explanation": "שלב 2: כינוס איברים דומים המכילים וואי.", "math_expression": "3y + b = a" },
            { "verbal_explanation": "שלב 3: העברת בי אגף ובידוד הוואי.", "math_expression": "3y = a - b  =>  y = (a - b) / 3" },
            { "verbal_explanation": "שלב 4: הצבת הוואי שמצאנו חזרה בביטוי של איקס.", "math_expression": "x = 2 * [(a - b) / 3] + b" },
            { "verbal_explanation": "שלב 5: פישוט ואיחוד למכנה משותף 3.", "math_expression": "x = [2a - 2b + 3b] / 3  =>  x = (2a + b) / 3" }
        ],
        "final_answer": "x = (2a+b)/3, y = (a-b)/3",
        "options": ["x = a, y = b", "x = (2a+b)/3, y = (a-b)/3", "x = a+b, y = a-b", "x = 2a, y = 2b"],
        "correctAnswer": 1
    },
    {
        "id": 48,
        "subTopic": "משוואות פרמטריות בשני נעלמים",
        "difficulty": "Low",
        "question_text": "נתונה מערכת משוואות עם הפרמטר <strong>m</strong>. מהי המשמעות של מצב שבו המערכת מובילה לפסוק שקר (כמו 0=5)?",
        "hint": "חשבו על המצב הגיאומטרי של שני הישרים המייצגים את המשוואות הללו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: פסוק שקר באלגברה מעיד על כך שאין אף זוג של מספרים (x,y) שיכול לקיים את שתי המשוואות בו זמנית.", "math_expression": "No intersection" },
            { "verbal_explanation": "שלב 2: גיאומטרית, משמעות הדבר היא ששני הישרים הם מקבילים אך לא מתלכדים.", "math_expression": "Parallel Lines" }
        ],
        "final_answer": "למערכת המשוואות אין פתרון.",
        "options": ["יש אינסוף פתרונות", "למערכת המשוואות אין פתרון.", "יש פתרון יחיד", "הפתרון הוא 0"],
        "correctAnswer": 1
    },
    {
        "id": 49,
        "subTopic": "משוואות פרמטריות בשני נעלמים",
        "difficulty": "High",
        "question_text": "פתרו את המערכת הבאה:<br><strong>ax + y = 1</strong><br><strong>x + ay = 1</strong>",
        "hint": "השתמשו בשיטת החיסור או ההצבה. שימו לב למקרה המיוחד שבו המכנה עלול להתאפס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבודד את וואי מהמשוואה הראשונה.", "math_expression": "y = 1 - ax" },
            { "verbal_explanation": "שלב 2: נציב את הביטוי במשוואה השנייה.", "math_expression": "x + a * (1 - ax) = 1" },
            { "verbal_explanation": "שלב 3: פתיחת סוגריים.", "math_expression": "x + a - a²x = 1" },
            { "verbal_explanation": "שלב 4: ריכוז איקסים והוצאת גורם משותף.", "math_expression": "x * (1 - a²) = 1 - a" },
            { "verbal_explanation": "שלב 5: פירוק הפרש ריבועים וצמצום.", "math_expression": "x * (1 - a)(1 + a) = (1 - a)  =>  x = 1 / (1 + a)" },
            { "verbal_explanation": "שלב 6: הצבה למציאת וואי. נקבל תוצאה זהה בשל הסימטריה.", "math_expression": "y = 1 / (1 + a)" }
        ],
        "final_answer": "x = 1/(a+1), y = 1/(a+1)",
        "options": ["x = a, y = 1", "x = 1/(a+1), y = 1/(a+1)", "x = 1, y = 1", "אין פתרון"],
        "correctAnswer": 1
    },
    {
        "id": 50,
        "subTopic": "משוואות פרמטריות בשני נעלמים",
        "difficulty": "Medium",
        "question_text": "פתרו עבור איקס ווואי:<br><strong>x = ay</strong><br><strong>x + y = a + 1</strong>",
        "hint": "הציבו את המשוואה הראשונה ישירות לתוך השנייה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הצבת ay במקום איקס.", "math_expression": "ay + y = a + 1" },
            { "verbal_explanation": "שלב 2: הוצאת וואי כגורם משותף.", "math_expression": "y * (a + 1) = a + 1" },
            { "verbal_explanation": "שלב 3: חלוקה בביטוי (a+1) למציאת וואי.", "math_expression": "y = 1  [תנאי: a ≠ -1]" },
            { "verbal_explanation": "שלב 4: הצבת וואי שווה 1 במשוואה הראשונה למציאת איקס.", "math_expression": "x = a * 1 = a" }
        ],
        "final_answer": "x = a, y = 1",
        "options": ["x = 1, y = a", "x = a, y = 1", "x = a+1, y = 1", "x = a, y = a"],
        "correctAnswer": 1
    },
    {
        "id": 51,
        "subTopic": "משוואות פרמטריות בשני נעלמים",
        "difficulty": "High",
        "question_text": "עבור אילו ערכי <strong>k</strong> למערכת הבאה יש <strong>אינסוף פתרונות</strong>?<br><strong>x + y = 2</strong><br><strong>kx + ky = 6</strong>",
        "hint": "אינסוף פתרונות קיימים כאשר המשוואות הן למעשה אותה משוואה בדיוק (מתלכדות).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ננסה להביא את המשוואה השנייה לצורה של הראשונה על ידי חלוקה בפרמטר קיי.", "math_expression": "x + y = 6 / k" },
            { "verbal_explanation": "שלב 2: כדי שהישרים יתלכדו, התוצאה באגף ימין חייבת להיות זהה לזו שבמשוואה הראשונה.", "math_expression": "6 / k = 2" },
            { "verbal_explanation": "שלב 3: נפתור את המשוואה עבור קיי.", "math_expression": "2k = 6  =>  k = 3" },
            { "verbal_explanation": "שלב 4: נבדוק: אם קיי הוא 3, המשוואה השנייה היא 3x+3y=6, שזה בדיוק פי 3 מהראשונה. לכן הן מתלכדות." }
        ],
        "final_answer": "k = 3",
        "options": ["k = 2", "k = 3", "k = 6", "אף ערך"],
        "correctAnswer": 1
    },
    {
        "id": 52,
        "subTopic": "משוואות פרמטריות בשני נעלמים",
        "difficulty": "Medium",
        "question_text": "פתרו את המערכת:<br><strong>y = mx</strong><br><strong>2x + y = m + 2</strong>",
        "hint": "הציבו את וואי מהמשוואה הראשונה לתוך השנייה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הצבה.", "math_expression": "2x + mx = m + 2" },
            { "verbal_explanation": "שלב 2: הוצאת גורם משותף איקס.", "math_expression": "x * (2 + m) = m + 2" },
            { "verbal_explanation": "שלב 3: חלוקה בביטוי המשותף.", "math_expression": "x = 1  [תנאי: m ≠ -2]" },
            { "verbal_explanation": "שלב 4: מציאת וואי.", "math_expression": "y = m * 1 = m" }
        ],
        "final_answer": "x = 1, y = m",
        "options": ["x = 1, y = m", "x = m, y = 1", "x = 2, y = m", "אין פתרון"],
        "correctAnswer": 0
    },
    {
        "id": 53,
        "subTopic": "משוואות פרמטריות בשני נעלמים",
        "difficulty": "High",
        "question_text": "מערכת משוואות: <br><strong>ax + by = 1</strong><br><strong>x = 0</strong>. <br>מהו ערכו של וואי?",
        "hint": "הציבו איקס שווה אפס במשוואה הראשונה ובודדו את וואי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הצבת הנתון איקס שווה אפס בתוך המשוואה הראשונה.", "math_expression": "a * (0) + by = 1" },
            { "verbal_explanation": "שלב 2: פישוט אגף שמאל.", "math_expression": "by = 1" },
            { "verbal_explanation": "שלב 3: בידוד וואי על ידי חלוקה בבי.", "math_expression": "y = 1 / b  [תנאי: b ≠ 0]" }
        ],
        "final_answer": "y = 1 / b",
        "options": ["y = b", "y = 1 / a", "y = 1 / b", "y = 0"],
        "correctAnswer": 2
    },
    {
        "id": 54,
        "subTopic": "משוואות פרמטריות בשני נעלמים",
        "difficulty": "Low",
        "question_text": "במערכת משוואות פרמטרית, אם קיבלנו לבסוף <strong>פסוק אמת</strong> (כמו 0=0), מה ניתן לומר על הגרפים של הישרים?",
        "hint": "פסוק אמת אומר שכל נקודה שתבחרו תתאים לשני הישרים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: פסוק אמת מעיד על קיום אינסוף פתרונות למערכת.", "math_expression": "Infinite solutions" },
            { "verbal_explanation": "שלב 2: מצב כזה קורה בגיאומטריה כאשר שני הישרים יושבים בדיוק אחד על השני.", "math_expression": "Coincident Lines" }
        ],
        "final_answer": "הישרים מתלכדים.",
        "options": ["הישרים מקבילים", "הישרים נחתכים", "הישרים מתלכדים.", "הישרים מאונכים"],
        "correctAnswer": 2
    },
    {
        "id": 55,
        "subTopic": "משוואות פרמטריות בשני נעלמים",
        "difficulty": "High",
        "question_text": "פתרו עבור איקס ווואי:<br><strong>x/a + y/b = 2</strong><br><strong>x/a - y/b = 0</strong>",
        "hint": "חברו את המשוואות. האיבר עם וואי יתבטל לחלוטין.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: חיבור המשוואות.", "math_expression": "2x / a = 2" },
            { "verbal_explanation": "שלב 2: חלוקה ב-2.", "math_expression": "x / a = 1" },
            { "verbal_explanation": "שלב 3: הכפלה באיי למציאת איקס.", "math_expression": "x = a" },
            { "verbal_explanation": "שלב 4: הצבת איקס במשוואה השנייה.", "math_expression": "a/a - y/b = 0  =>  1 - y/b = 0" },
            { "verbal_explanation": "שלב 5: העברת אגף והכפלה בבי.", "math_expression": "y / b = 1  =>  y = b" }
        ],
        "final_answer": "x = a, y = b",
        "options": ["x = a, y = b", "x = 2a, y = 2b", "x = 1, y = 1", "x = a, y = -b"],
        "correctAnswer": 0
    },
    {
        "id": 56,
        "subTopic": "משוואות פרמטריות בשני נעלמים",
        "difficulty": "Medium",
        "question_text": "עבור המערכת:<br><strong>y = x + k</strong><br><strong>y = 2x</strong><br>מצאו את נקודת המפגש.",
        "hint": "השוו את אגפי ימין.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: השוואה.", "math_expression": "2x = x + k" },
            { "verbal_explanation": "שלב 2: העברת איקס שמאלה.", "math_expression": "x = k" },
            { "verbal_explanation": "שלב 3: הצבה למציאת וואי.", "math_expression": "y = 2 * k = 2k" }
        ],
        "final_answer": "x = k, y = 2k",
        "options": ["x = k, y = k", "x = k, y = 2k", "x = 2k, y = k", "x = 0, y = k"],
        "correctAnswer": 1
    },
    {
        "id": 57,
        "subTopic": "משוואות פרמטריות בשני נעלמים",
        "difficulty": "High",
        "question_text": "פתרו את המערכת:<br><strong>x + y = m</strong><br><strong>mx + y = m²</strong>",
        "hint": "השתמשו בשיטת החיסור (משוואה שנייה פחות הראשונה).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: חיסור המשוואה הראשונה מהשנייה.", "math_expression": "(mx - x) + (y - y) = m² - m" },
            { "verbal_explanation": "שלב 2: הוצאת גורמים משותפים.", "math_expression": "x * (m - 1) = m * (m - 1)" },
            { "verbal_explanation": "שלב 3: בידוד איקס על ידי חלוקה.", "math_expression": "x = m  [תנאי: m ≠ 1]" },
            { "verbal_explanation": "שלב 4: הצבה למציאת וואי.", "math_expression": "m + y = m  =>  y = 0" }
        ],
        "final_answer": "x = m, y = 0",
        "options": ["x = m, y = m", "x = 0, y = m", "x = m, y = 0", "x = 1, y = 1"],
        "correctAnswer": 2
    },
    {
        "id": 58,
        "subTopic": "משוואות פרמטריות בשני נעלמים",
        "difficulty": "Medium",
        "question_text": "מצאו את הנקודה (x,y) בעזרת הפרמטר <strong>p</strong>:<br><strong>y = p</strong><br><strong>x = y²</strong>",
        "hint": "הציבו את ערך הוואי ישירות בתוך המשוואה השנייה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: זיהוי ערך הוואי הנתון.", "math_expression": "y = p" },
            { "verbal_explanation": "שלב 2: הצבת ערך זה במשוואה של איקס.", "math_expression": "x = (p)²" },
            { "verbal_explanation": "שלב 3: כתיבת הנקודה.", "math_expression": "(p², p)" }
        ],
        "final_answer": "x = p², y = p",
        "options": ["x = p, y = p", "x = p², y = p", "x = p, y = p²", "x = 2p, y = p"],
        "correctAnswer": 1
    },
    {
        "id": 59,
        "subTopic": "משוואות פרמטריות בשני נעלמים",
        "difficulty": "High",
        "question_text": "פתרו את המערכת:<br><strong>x + y = a + b</strong><br><strong>ax - by = a² - b²</strong>",
        "hint": "השתמשו בשיטת ההצבה או השוואת מקדמים (הכפלת המשוואה הראשונה ב-בי).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הכפלת המשוואה הראשונה בפרמטר בי.", "math_expression": "bx + by = ab + b²" },
            { "verbal_explanation": "שלב 2: חיבור המשוואה החדשה עם המשוואה השנייה המקורית.", "math_expression": "(ax + bx) + (by - by) = a² - b² + ab + b²" },
            { "verbal_explanation": "שלב 3: פישוט וכינוס איברים.", "math_explanation": "x(a + b) = a² + ab" },
            { "verbal_explanation": "שלב 4: הוצאת גורם משותף באגף ימין.", "math_expression": "x(a + b) = a(a + b)" },
            { "verbal_explanation": "שלב 5: חלוקה ובידוד איקס.", "math_expression": "x = a  [תנאי: a+b ≠ 0]" },
            { "verbal_explanation": "שלב 6: הצבה למציאת וואי.", "math_expression": "a + y = a + b  =>  y = b" }
        ],
        "final_answer": "x = a, y = b",
        "options": ["x = a, y = b", "x = b, y = a", "x = a+b, y = 0", "אין פתרון"],
        "correctAnswer": 0
    },
    {
        "id": 60,
        "subTopic": "משוואות פרמטריות בשני נעלמים",
        "difficulty": "Medium",
        "question_text": "מצאו את נקודת המפגש של הישרים:<br><strong>y = x</strong><br><strong>y = m</strong>",
        "hint": "מכיוון ששני הביטויים שווים לוואי, הם שווים זה לזה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: השוואה.", "math_expression": "x = m" },
            { "verbal_explanation": "שלב 2: מציאת וואי (הוא כבר נתון במפורש במשוואה השנייה).", "math_expression": "y = m" },
            { "verbal_explanation": "שלב 3: כתיבת הנקודה.", "math_expression": "(m, m)" }
        ],
        "final_answer": "x = m, y = m",
        "options": ["x = m, y = 0", "x = 0, y = m", "x = m, y = m", "אין מפגש"],
        "correctAnswer": 2
    }
];