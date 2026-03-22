// ========================================================================
// שכבת גיל: כיתה ט' | נושא: משוואות ומשוואות פרמטריות (48 שאלות)
// >>> עובד לפי גרסה 2.1 המושלמת <<<
// תתי-נושאים: נוסחת השורשים, מערכת קווית וריבועית, פרמטריות ממעלה ראשונה, פרמטריות 2 נעלמים.
// 
// חוקי ברזל שיושמו:
// 1. תשובות בעברית כמו "אין פתרון" נכתבות כטקסט פשוט וטהור.
// 2. אפשרויות התשובה, הפתרון הסופי והשלמים המתמטיים חפים מ-\( \) (המערכת עוטפת לבד!).
// 3. חזקות עם ^, שברים אנכיים עם \frac, כפל עם \times, חילוק עם :
// 4. איורי SVG צבעוניים ומושקעים מוטמעים *מתחת* לטקסט השאלה היכן שרלוונטי.
// ========================================================================

// מאגר איורים (SVGs) לשימוש בשאלות
const svgParabolaRoots = "<div style='text-align:center; margin-top:20px;'><svg viewBox='0 0 200 120' width='150' height='90'><defs><linearGradient id='grad1' x1='0%' y1='0%' x2='100%' y2='0%'><stop offset='0%' style='stop-color:#3b82f6;stop-opacity:1' /><stop offset='100%' style='stop-color:#8b5cf6;stop-opacity:1' /></linearGradient></defs><line x1='20' y1='80' x2='180' y2='80' stroke='#94a3b8' stroke-width='2'/><line x1='100' y1='10' x2='100' y2='110' stroke='#94a3b8' stroke-width='2'/><path d='M40,20 Q100,160 160,20' fill='none' stroke='url(#grad1)' stroke-width='4' stroke-linecap='round'/><circle cx='61' cy='80' r='5' fill='#ef4444'/><circle cx='139' cy='80' r='5' fill='#ef4444'/><text x='45' y='95' font-family='sans-serif' font-size='12' font-weight='bold' fill='#ef4444'>x1</text><text x='145' y='95' font-family='sans-serif' font-size='12' font-weight='bold' fill='#ef4444'>x2</text></svg></div>";
const svgParabolaOneRoot = "<div style='text-align:center; margin-top:20px;'><svg viewBox='0 0 200 120' width='150' height='90'><line x1='20' y1='90' x2='180' y2='90' stroke='#94a3b8' stroke-width='2'/><line x1='100' y1='10' x2='100' y2='110' stroke='#94a3b8' stroke-width='2'/><path d='M50,20 Q100,160 150,20' fill='none' stroke='#06b6d4' stroke-width='4' stroke-linecap='round'/><circle cx='100' cy='90' r='6' fill='#f59e0b'/><text x='110' y='105' font-family='sans-serif' font-size='12' font-weight='bold' fill='#f59e0b'>x</text></svg></div>";
const svgParabolaNoRoots = "<div style='text-align:center; margin-top:20px;'><svg viewBox='0 0 200 120' width='150' height='90'><line x1='20' y1='100' x2='180' y2='100' stroke='#94a3b8' stroke-width='2'/><line x1='100' y1='10' x2='100' y2='110' stroke='#94a3b8' stroke-width='2'/><path d='M50,10 Q100,130 150,10' fill='none' stroke='#ef4444' stroke-width='4' stroke-linecap='round'/></svg></div>";
const svgSystemIntersect = "<div style='text-align:center; margin-top:20px;'><svg viewBox='0 0 200 120' width='150' height='90'><line x1='20' y1='60' x2='180' y2='60' stroke='#e2e8f0' stroke-width='2'/><line x1='100' y1='10' x2='100' y2='110' stroke='#e2e8f0' stroke-width='2'/><path d='M40,10 Q100,150 160,10' fill='none' stroke='#8b5cf6' stroke-width='3'/><line x1='30' y1='90' x2='170' y2='20' stroke='#10b981' stroke-width='3' stroke-linecap='round'/><circle cx='67' cy='71' r='5' fill='#f43f5e'/><circle cx='138' cy='36' r='5' fill='#f43f5e'/></svg></div>";
const svgParamScale = "<div style='text-align:center; margin-top:20px;'><svg viewBox='0 0 200 100' width='160' height='80'><polygon points='100,80 120,80 110,60' fill='#64748b'/><line x1='110' y1='60' x2='110' y2='30' stroke='#64748b' stroke-width='4'/><line x1='40' y1='30' x2='180' y2='30' stroke='#94a3b8' stroke-width='4' stroke-linecap='round'/><rect x='50' y='5' width='25' height='25' fill='#3b82f6' rx='4'/><text x='57' y='23' font-family='sans-serif' font-weight='bold' fill='white'>m</text><rect x='145' y='5' width='25' height='25' fill='#f43f5e' rx='4'/><text x='154' y='23' font-family='sans-serif' font-weight='bold' fill='white'>x</text></svg></div>";
const svgParamGrid = "<div style='text-align:center; margin-top:20px;'><svg viewBox='0 0 200 120' width='150' height='90'><line x1='100' y1='10' x2='100' y2='110' stroke='#cbd5e1' stroke-width='2'/><line x1='20' y1='60' x2='180' y2='60' stroke='#cbd5e1' stroke-width='2'/><line x1='40' y1='110' x2='160' y2='10' stroke='#ec4899' stroke-width='3' stroke-linecap='round'/><line x1='40' y1='10' x2='160' y2='110' stroke='#0ea5e9' stroke-width='3' stroke-linecap='round'/><circle cx='100' cy='60' r='6' fill='#eab308'/></svg></div>";

const questionsDB = [

    // ==========================================================
    // תת נושא 1: פתרון משוואות ריבועיות (נוסחת השורשים) (12 שאלות)
    // ==========================================================
    
    // שאלה 1
    {
        topic: "equations_and_parametric",
        subTopic: "פתרון משוואות ריבועיות (נוסחת השורשים)",
        question_text: "פתרו את המשוואה הריבועית הבאה בעזרת נוסחת השורשים:\n\\( x^2 - 5x + 6 = 0 \\)" + svgParabolaRoots,
        options: [
            "x_1 = 2 \\quad , \\quad x_2 = 3", 
            "x_1 = -2 \\quad , \\quad x_2 = -3", 
            "x_1 = 6 \\quad , \\quad x_2 = -1", 
            "x_1 = 1 \\quad , \\quad x_2 = 6"
        ],
        correctAnswer: 0,
        hint: "זהו את המקדמים: \\( a=1, b=-5, c=6 \\). הציבו בנוסחה: המונה הוא מינוס b פלוס/מינוס שורש של הדיסקרימיננטה.",
        solution_steps: [
            { verbal_explanation: "שלב א': נזהה את המקדמים של המשוואה הריבועית.", math_expression: "a = 1 \\quad , \\quad b = -5 \\quad , \\quad c = 6" },
            { verbal_explanation: "שלב ב': נציב את המקדמים בתוך נוסחת השורשים.", math_expression: "x_{1,2} = \\frac{-(-5) \\pm \\sqrt{(-5)^2 - 4 \\times 1 \\times 6}}{2 \\times 1}" },
            { verbal_explanation: "שלב ג': נחשב את הערך שבתוך השורש (הדיסקרימיננטה).", math_expression: "\\sqrt{25 - 24} = \\sqrt{1} = 1" },
            { verbal_explanation: "שלב ד': נפצל לשני פתרונות: פעם עם פלוס ופעם עם מינוס.", math_expression: "x_1 = \\frac{5 + 1}{2} = 3 \\quad , \\quad x_2 = \\frac{5 - 1}{2} = 2" }
        ],
        final_answer: "x_1 = 2 \\quad , \\quad x_2 = 3"
    },
    // שאלה 2
    {
        topic: "equations_and_parametric",
        subTopic: "פתרון משוואות ריבועיות (נוסחת השורשים)",
        question_text: "מצאו את שורשי המשוואה הריבועית הבאה:\n\\( x^2 + 4x + 4 = 0 \\)" + svgParabolaOneRoot,
        options: [
            "x = -2", 
            "x = 2", 
            "x_1 = 2 \\quad , \\quad x_2 = -2", 
            "אין פתרון"
        ],
        correctAnswer: 0,
        hint: "כאשר הביטוי בתוך השורש (הדיסקרימיננטה) מתאפס, למשוואה יש רק פתרון (שורש) אחד ויחיד.",
        solution_steps: [
            { verbal_explanation: "המקדמים הם \\( a=1, b=4, c=4 \\). נציב בנוסחת השורשים.", math_expression: "x_{1,2} = \\frac{-4 \\pm \\sqrt{4^2 - 4 \\times 1 \\times 4}}{2 \\times 1}" },
            { verbal_explanation: "נחשב את הדיסקרימיננטה (התוכן שבתוך השורש).", math_expression: "\\sqrt{16 - 16} = \\sqrt{0} = 0" },
            { verbal_explanation: "מכיוון שהשורש הוא 0, הפלוס והמינוס לא משנים, ויש פתרון יחיד.", math_expression: "x = \\frac{-4 \\pm 0}{2} = -2" }
        ],
        final_answer: "x = -2"
    },
    // שאלה 3
    {
        topic: "equations_and_parametric",
        subTopic: "פתרון משוואות ריבועיות (נוסחת השורשים)",
        question_text: "פתרו את המשוואה הבאה:\n\\( x^2 - 3x + 10 = 0 \\)" + svgParabolaNoRoots,
        options: [
            "אין פתרון", 
            "x_1 = 5 \\quad , \\quad x_2 = -2", 
            "x_1 = 2 \\quad , \\quad x_2 = -5", 
            "x = 0"
        ],
        correctAnswer: 0,
        hint: "חשבו את הדיסקרימיננטה (הביטוי בתוך השורש: \\( b^2 - 4ac \\)). האם ניתן להוציא שורש ממספר שלילי?",
        solution_steps: [
            { verbal_explanation: "נציב את המקדמים \\( a=1, b=-3, c=10 \\) בביטוי של הדיסקרימיננטה.", math_expression: "\\Delta = (-3)^2 - 4 \\times 1 \\times 10" },
            { verbal_explanation: "נחשב את התוצאה.", math_expression: "\\Delta = 9 - 40 = -31" },
            { verbal_explanation: "מכיוון שהתוצאה בתוך השורש היא מספר שלילי, למשוואה אין פתרון ממשי.", math_expression: "אין פתרון" }
        ],
        final_answer: "אין פתרון"
    },
    // שאלה 4
    {
        topic: "equations_and_parametric",
        subTopic: "פתרון משוואות ריבועיות (נוסחת השורשים)",
        question_text: "פתרו את המשוואה הריבועית (מומלץ לחלק את המשוואה לפני ההצבה):\n\\( 2x^2 - 8x + 6 = 0 \\)" + svgParabolaRoots,
        options: [
            "x_1 = 3 \\quad , \\quad x_2 = 1", 
            "x_1 = -3 \\quad , \\quad x_2 = -1", 
            "x_1 = 6 \\quad , \\quad x_2 = 2", 
            "x_1 = 4 \\quad , \\quad x_2 = 2"
        ],
        correctAnswer: 0,
        hint: "כל המקדמים זוגיים. חלקו את כל המשוואה ב-2 כדי להקל על החישובים, ואז הציבו בנוסחה.",
        solution_steps: [
            { verbal_explanation: "נחלק את שני אגפי המשוואה ב-2 כדי לפשט אותה.", math_expression: "x^2 - 4x + 3 = 0" },
            { verbal_explanation: "נציב את המקדמים החדשים \\( a=1, b=-4, c=3 \\) בנוסחת השורשים.", math_expression: "x_{1,2} = \\frac{-(-4) \\pm \\sqrt{(-4)^2 - 4 \\times 1 \\times 3}}{2}" },
            { verbal_explanation: "נחשב את השורש.", math_expression: "\\sqrt{16 - 12} = \\sqrt{4} = 2" },
            { verbal_explanation: "נמצא את שני הפתרונות.", math_expression: "x_1 = \\frac{4 + 2}{2} = 3 \\quad , \\quad x_2 = \\frac{4 - 2}{2} = 1" }
        ],
        final_answer: "x_1 = 3 \\quad , \\quad x_2 = 1"
    },
    // שאלה 5
    {
        topic: "equations_and_parametric",
        subTopic: "פתרון משוואות ריבועיות (נוסחת השורשים)",
        question_text: "פתרו את המשוואה הבאה (שימו לב שמקדם הריבוע הוא שלילי):\n\\( -x^2 + 7x - 10 = 0 \\)" + svgParabolaRoots,
        options: [
            "x_1 = 5 \\quad , \\quad x_2 = 2", 
            "x_1 = -5 \\quad , \\quad x_2 = -2", 
            "x_1 = 10 \\quad , \\quad x_2 = -1", 
            "אין פתרון"
        ],
        correctAnswer: 0,
        hint: "כדי למנוע טעויות סימן, כפלו את כל המשוואה במינוס 1 (הפכו סימנים לכל האיברים) ואז הציבו בנוסחה.",
        solution_steps: [
            { verbal_explanation: "נכפיל את כל המשוואה במינוס 1 כדי לעבוד עם \\( x^2 \\) חיובי.", math_expression: "x^2 - 7x + 10 = 0" },
            { verbal_explanation: "נציב בנוסחת השורשים.", math_expression: "x_{1,2} = \\frac{-(-7) \\pm \\sqrt{(-7)^2 - 4 \\times 1 \\times 10}}{2}" },
            { verbal_explanation: "נחשב את השורש.", math_expression: "\\sqrt{49 - 40} = \\sqrt{9} = 3" },
            { verbal_explanation: "נפצל לשני פתרונות.", math_expression: "x_1 = \\frac{7 + 3}{2} = 5 \\quad , \\quad x_2 = \\frac{7 - 3}{2} = 2" }
        ],
        final_answer: "x_1 = 5 \\quad , \\quad x_2 = 2"
    },
    // שאלה 6
    {
        topic: "equations_and_parametric",
        subTopic: "פתרון משוואות ריבועיות (נוסחת השורשים)",
        question_text: "משוואה ריבועית חסרה (ללא b). פתרו:\n\\( 3x^2 - 12 = 0 \\)",
        options: [
            "x_1 = 2 \\quad , \\quad x_2 = -2", 
            "x = 2", 
            "x = 4", 
            "x_1 = 4 \\quad , \\quad x_2 = -4"
        ],
        correctAnswer: 0,
        hint: "במשוואה שחסר בה איבר עם \\( x \\), אין חובה להשתמש בנוסחה. אפשר פשוט להעביר את המספר אגף, לחלק, ולהוציא שורש (זכרו פלוס ומינוס).",
        solution_steps: [
            { verbal_explanation: "נעביר את המספר החופשי (12) לאגף ימין.", math_expression: "3x^2 = 12" },
            { verbal_explanation: "נחלק ב-3.", math_expression: "x^2 = 4" },
            { verbal_explanation: "נוציא שורש ריבועי. נזכור שלשורש יש תשובה חיובית ושלילית.", math_expression: "x = \\pm \\sqrt{4} = \\pm 2" }
        ],
        final_answer: "x_1 = 2 \\quad , \\quad x_2 = -2"
    },
    // שאלה 7
    {
        topic: "equations_and_parametric",
        subTopic: "פתרון משוואות ריבועיות (נוסחת השורשים)",
        question_text: "משוואה ריבועית חסרה (ללא c). פתרו:\n\\( x^2 - 5x = 0 \\)",
        options: [
            "x_1 = 0 \\quad , \\quad x_2 = 5", 
            "x_1 = 0 \\quad , \\quad x_2 = -5", 
            "x = 5", 
            "x = 0"
        ],
        correctAnswer: 0,
        hint: "במשוואה שחסר בה איבר חופשי (מספר נקי), הכי קל להוציא \\( x \\) כגורם משותף מחוץ לסוגריים.",
        solution_steps: [
            { verbal_explanation: "נוציא \\( x \\) כגורם משותף משני האיברים.", math_expression: "x(x - 5) = 0" },
            { verbal_explanation: "מכפלה שווה לאפס כאשר לפחות אחד מהגורמים מתאפס. הגורם הראשון הוא ה-x שבחוץ.", math_expression: "x_1 = 0" },
            { verbal_explanation: "נשווה את הגורם השני (הסוגריים) לאפס.", math_expression: "x - 5 = 0 \\quad \\Rightarrow \\quad x_2 = 5" }
        ],
        final_answer: "x_1 = 0 \\quad , \\quad x_2 = 5"
    },
    // שאלה 8
    {
        topic: "equations_and_parametric",
        subTopic: "פתרון משוואות ריבועיות (נוסחת השורשים)",
        question_text: "פתרו את המשוואה הבאה (הקפידו על סימנים):\n\\( x^2 - x - 2 = 0 \\)" + svgParabolaRoots,
        options: [
            "x_1 = 2 \\quad , \\quad x_2 = -1", 
            "x_1 = -2 \\quad , \\quad x_2 = 1", 
            "x_1 = 2 \\quad , \\quad x_2 = 1", 
            "x_1 = -2 \\quad , \\quad x_2 = -1"
        ],
        correctAnswer: 0,
        hint: "המקדמים הם: \\( a=1, b=-1, c=-2 \\). שימו לב ש-\\( -b \\) הופך ל-1 חיובי.",
        solution_steps: [
            { verbal_explanation: "נציב את המקדמים בנוסחת השורשים.", math_expression: "x_{1,2} = \\frac{-(-1) \\pm \\sqrt{(-1)^2 - 4 \\times 1 \\times (-2)}}{2}" },
            { verbal_explanation: "נחשב את הדיסקרימיננטה (מינוס כפול מינוס זה פלוס).", math_expression: "\\sqrt{1 + 8} = \\sqrt{9} = 3" },
            { verbal_explanation: "נפצל לשני פתרונות.", math_expression: "x_1 = \\frac{1 + 3}{2} = 2 \\quad , \\quad x_2 = \\frac{1 - 3}{2} = -1" }
        ],
        final_answer: "x_1 = 2 \\quad , \\quad x_2 = -1"
    },
    // שאלה 9
    {
        topic: "equations_and_parametric",
        subTopic: "פתרון משוואות ריבועיות (נוסחת השורשים)",
        question_text: "משוואה הדורשת פתיחת סוגריים תחילה. פתרו:\n\\( (x - 2)(x + 3) = 14 \\)",
        options: [
            "x_1 = 4 \\quad , \\quad x_2 = -5", 
            "x_1 = 5 \\quad , \\quad x_2 = -4", 
            "x_1 = 2 \\quad , \\quad x_2 = -3", 
            "x_1 = 14 \\quad , \\quad x_2 = 0"
        ],
        correctAnswer: 0,
        hint: "אסור להשוות כל סוגריים ל-14! קודם פתחו סוגריים לחלוטין, העבירו את 14 שמאלה כדי להשוות לאפס, ואז פתרו.",
        solution_steps: [
            { verbal_explanation: "נפתח סוגריים באגף שמאל בעזרת חוק הפילוג.", math_expression: "x^2 + 3x - 2x - 6 = 14" },
            { verbal_explanation: "נכנס איברים ונעביר את ה-14 לאגף שמאל במינוס.", math_expression: "x^2 + x - 20 = 0" },
            { verbal_explanation: "נציב בנוסחת השורשים או נפרק לטרינום (מספרים שכפלם -20 וסכומם 1).", math_expression: "(x + 5)(x - 4) = 0" },
            { verbal_explanation: "הפתרונות מתקבלים מאיפוס הסוגריים.", math_expression: "x_1 = 4 \\quad , \\quad x_2 = -5" }
        ],
        final_answer: "x_1 = 4 \\quad , \\quad x_2 = -5"
    },
    // שאלה 10
    {
        topic: "equations_and_parametric",
        subTopic: "פתרון משוואות ריבועיות (נוסחת השורשים)",
        question_text: "פתיחת סוגריים. פתרו את המשוואה:\n\\( x(x - 4) = 5 \\)",
        options: [
            "x_1 = 5 \\quad , \\quad x_2 = -1", 
            "x_1 = -5 \\quad , \\quad x_2 = 1", 
            "x_1 = 5 \\quad , \\quad x_2 = 0", 
            "x_1 = 4 \\quad , \\quad x_2 = 5"
        ],
        correctAnswer: 0,
        hint: "הכפילו את \\( x \\) באיברים שבתוך הסוגריים, ואז העבירו את ה-5 לאגף השמאלי ליצירת משוואה ששווה לאפס.",
        solution_steps: [
            { verbal_explanation: "נפתח סוגריים ונעביר את ה-5 שמאלה.", math_expression: "x^2 - 4x - 5 = 0" },
            { verbal_explanation: "נציב בנוסחת השורשים.", math_expression: "x_{1,2} = \\frac{-(-4) \\pm \\sqrt{(-4)^2 - 4 \\times 1 \\times (-5)}}{2}" },
            { verbal_explanation: "נחשב את הדיסקרימיננטה.", math_expression: "\\sqrt{16 + 20} = \\sqrt{36} = 6" },
            { verbal_explanation: "נמצא את הפתרונות.", math_expression: "x_1 = \\frac{4 + 6}{2} = 5 \\quad , \\quad x_2 = \\frac{4 - 6}{2} = -1" }
        ],
        final_answer: "x_1 = 5 \\quad , \\quad x_2 = -1"
    },
    // שאלה 11
    {
        topic: "equations_and_parametric",
        subTopic: "פתרון משוואות ריבועיות (נוסחת השורשים)",
        question_text: "משוואה עם שברים עשרוניים. פתרו:\n\\( 0.5x^2 - 2x + 1.5 = 0 \\)",
        options: [
            "x_1 = 3 \\quad , \\quad x_2 = 1", 
            "x_1 = -3 \\quad , \\quad x_2 = -1", 
            "x_1 = 6 \\quad , \\quad x_2 = 0.5", 
            "אין פתרון"
        ],
        correctAnswer: 0,
        hint: "כדי להיפטר מהשברים העשרוניים ולהקל על העבודה, כפלו את כל המשוואה פי 2.",
        solution_steps: [
            { verbal_explanation: "נכפיל את כל המשוואה ב-2 כדי לעבוד עם מספרים שלמים.", math_expression: "x^2 - 4x + 3 = 0" },
            { verbal_explanation: "נציב בנוסחת השורשים.", math_expression: "x_{1,2} = \\frac{4 \\pm \\sqrt{16 - 12}}{2}" },
            { verbal_explanation: "נחשב.", math_expression: "x_{1,2} = \\frac{4 \\pm 2}{2}" },
            { verbal_explanation: "הפתרונות מתקבלים.", math_expression: "x_1 = 3 \\quad , \\quad x_2 = 1" }
        ],
        final_answer: "x_1 = 3 \\quad , \\quad x_2 = 1"
    },
    // שאלה 12
    {
        topic: "equations_and_parametric",
        subTopic: "פתרון משוואות ריבועיות (נוסחת השורשים)",
        question_text: "משוואה עם מקדם מוביל גדול ופתרון יחיד. פתרו:\n\\( 4x^2 - 12x + 9 = 0 \\)" + svgParabolaOneRoot,
        options: [
            "x = 1.5", 
            "x = -1.5", 
            "x = 3", 
            "x_1 = 1.5 \\quad , \\quad x_2 = -1.5"
        ],
        correctAnswer: 0,
        hint: "הציבו בעדינות בנוסחה. תגלו שהמספר מתחת לשורש הוא אפס, ולכן יש רק פתרון אחד.",
        solution_steps: [
            { verbal_explanation: "נציב בנוסחת השורשים את המקדמים \\( a=4, b=-12, c=9 \\).", math_expression: "x_{1,2} = \\frac{-(-12) \\pm \\sqrt{(-12)^2 - 4 \\times 4 \\times 9}}{2 \\times 4}" },
            { verbal_explanation: "נחשב את הדיסקרימיננטה.", math_expression: "\\sqrt{144 - 144} = 0" },
            { verbal_explanation: "השורש מתאפס. נשארנו עם פתרון יחיד.", math_expression: "x = \\frac{12 \\pm 0}{8} = \\frac{12}{8} = 1.5" }
        ],
        final_answer: "x = 1.5"
    },

    // ==========================================================
    // תת נושא 2: מערכת משוואות קווית וריבועית (12 שאלות)
    // ==========================================================
    
    // שאלה 13
    {
        topic: "equations_and_parametric",
        subTopic: "מערכת משוואות קווית וריבועית",
        question_text: "מצאו את נקודות החיתוך בין הפרבולה לישר:\n\\( y = x^2 \\)\n\\( y = x + 2 \\)" + svgSystemIntersect,
        options: [
            "(2, 4) \\quad , \\quad (-1, 1)", 
            "(-2, 4) \\quad , \\quad (1, 1)", 
            "(2, -4) \\quad , \\quad (1, -1)", 
            "(0, 0) \\quad , \\quad (2, 2)"
        ],
        correctAnswer: 0,
        hint: "מכיוון ששתי המשוואות שוות ל-\\( y \\), פשוט השוו ביניהן: \\( x^2 = x + 2 \\).",
        solution_steps: [
            { verbal_explanation: "נשווה את שני האגפים (שיטת ההצבה).", math_expression: "x^2 = x + 2" },
            { verbal_explanation: "נעביר הכל לאגף אחד כדי ליצור משוואה ריבועית קלאסית.", math_expression: "x^2 - x - 2 = 0" },
            { verbal_explanation: "נפתור בעזרת טרינום או נוסחת שורשים למציאת ערכי ה-\\( x \\).", math_expression: "(x - 2)(x + 1) = 0 \\quad \\Rightarrow \\quad x_1 = 2 \\quad , \\quad x_2 = -1" },
            { verbal_explanation: "נציב כל \\( x \\) באחת המשוואות (למשל \\( y = x+2 \\)) למציאת ערך ה-\\( y \\) התואם.", math_expression: "y_1 = 2+2 = 4 \\quad \\Rightarrow \\quad (2, 4)" },
            { verbal_explanation: "נמצא את הנקודה השנייה.", math_expression: "y_2 = -1+2 = 1 \\quad \\Rightarrow \\quad (-1, 1)" }
        ],
        final_answer: "(2, 4) \\quad , \\quad (-1, 1)"
    },
    // שאלה 14
    {
        topic: "equations_and_parametric",
        subTopic: "מערכת משוואות קווית וריבועית",
        question_text: "מצאו את נקודות החיתוך בין הפונקציות (נקודת חיתוך אחת):\n\\( y = x^2 - 4 \\)\n\\( y = 2x - 5 \\)" + svgSystemIntersect,
        options: [
            "(1, -3)", 
            "(1, 3)", 
            "(-1, 3)", 
            "אין פתרון"
        ],
        correctAnswer: 0,
        hint: "השוו בין המשוואות והעבירו לאגף אחד. תגלו שזו משוואה עם פתרון יחיד (הישר משיק לפרבולה בדיוק בנקודה אחת).",
        solution_steps: [
            { verbal_explanation: "נשווה בין המשוואות.", math_expression: "x^2 - 4 = 2x - 5" },
            { verbal_explanation: "נעביר אגפים ונכנס איברים.", math_expression: "x^2 - 2x + 1 = 0" },
            { verbal_explanation: "נזהה שזוהי נוסחת כפל מקוצר.", math_expression: "(x - 1)^2 = 0 \\quad \\Rightarrow \\quad x = 1" },
            { verbal_explanation: "נציב את ה-\\( x \\) במשוואת הישר למציאת ה-\\( y \\).", math_expression: "y = 2 \\times 1 - 5 = -3" }
        ],
        final_answer: "(1, -3)"
    },
    // שאלה 15
    {
        topic: "equations_and_parametric",
        subTopic: "מערכת משוואות קווית וריבועית",
        question_text: "מצאו את חיתוך הפרבולה ההפוכה והישר:\n\\( y = -x^2 + 4x \\)\n\\( y = x \\)",
        options: [
            "(0, 0) \\quad , \\quad (3, 3)", 
            "(0, 0) \\quad , \\quad (-3, -3)", 
            "(1, 1) \\quad , \\quad (3, 3)", 
            "(0, 0) \\quad , \\quad (4, 4)"
        ],
        correctAnswer: 0,
        hint: "השוו בין הביטויים, העבירו את ה-\\( x \\) שמאלה, והוציאו גורם משותף.",
        solution_steps: [
            { verbal_explanation: "נשווה בין שתי הפונקציות.", math_expression: "-x^2 + 4x = x" },
            { verbal_explanation: "נעביר את ה-\\( x \\) אגף ונחסר אותו.", math_expression: "-x^2 + 3x = 0" },
            { verbal_explanation: "נוציא גורם משותף.", math_expression: "x(-x + 3) = 0" },
            { verbal_explanation: "נמצא את ערכי ה-\\( x \\) (0 ו- 3). מכיוון ש-\\( y=x \\), ערכי ה-\\( y \\) יהיו זהים לערכי ה-\\( x \\).", math_expression: "(0, 0) \\quad , \\quad (3, 3)" }
        ],
        final_answer: "(0, 0) \\quad , \\quad (3, 3)"
    },
    // שאלה 16
    {
        topic: "equations_and_parametric",
        subTopic: "מערכת משוואות קווית וריבועית",
        question_text: "האם יש נקודות חיתוך בין הפונקציות הבאות?\n\\( y = x^2 + 1 \\)\n\\( y = -2 \\)" + svgParabolaNoRoots,
        options: [
            "אין נקודות חיתוך", 
            "(0, 1)", 
            "(0, -2)", 
            "(1, -2)"
        ],
        correctAnswer: 0,
        hint: "השוו את המשוואות. האם קיים מספר שאם מעלים אותו בריבוע ומוסיפים 1, מקבלים מספר שלילי?",
        solution_steps: [
            { verbal_explanation: "נשווה בין הפונקציה לקו הישר.", math_expression: "x^2 + 1 = -2" },
            { verbal_explanation: "נעביר את 1 אגף (במינוס).", math_expression: "x^2 = -3" },
            { verbal_explanation: "כיוון שאין מספר ממשי שריבועו הוא מספר שלילי, למשוואה אין פתרון.", math_expression: "אין נקודות חיתוך" }
        ],
        final_answer: "אין נקודות חיתוך"
    },
    // שאלה 17
    {
        topic: "equations_and_parametric",
        subTopic: "מערכת משוואות קווית וריבועית",
        question_text: "מערכת מורכבת עם מקדם מוביל שונה מ-1:\n\\( y = 2x^2 - x \\)\n\\( y = 3x - 2 \\)",
        options: [
            "(1, 1)", 
            "(1, 1) \\quad , \\quad (2, 4)", 
            "(-1, -5)", 
            "אין פתרון"
        ],
        correctAnswer: 0,
        hint: "השוו, העבירו הכל לאגף שמאל, ואז מומלץ לחלק את כל המשוואה ב-2.",
        solution_steps: [
            { verbal_explanation: "נשווה בין המשוואות.", math_expression: "2x^2 - x = 3x - 2" },
            { verbal_explanation: "נעביר אגפים כדי לאפס צד אחד.", math_expression: "2x^2 - 4x + 2 = 0" },
            { verbal_explanation: "נחלק הכל ב-2.", math_expression: "x^2 - 2x + 1 = 0" },
            { verbal_explanation: "זו נוסחת כפל מקוצר, ולכן יש פתרון כפול יחיד: \\( x=1 \\). נציב בישר למציאת \\( y \\).", math_expression: "y = 3 \\times 1 - 2 = 1 \\quad \\Rightarrow \\quad (1, 1)" }
        ],
        final_answer: "(1, 1)"
    },
    // שאלה 18
    {
        topic: "equations_and_parametric",
        subTopic: "מערכת משוואות קווית וריבועית",
        question_text: "מערכת משוואות הדורשת בידוד משתנה תחילה:\n\\( x^2 + y = 4 \\)\n\\( y - x = 2 \\)",
        options: [
            "(1, 3) \\quad , \\quad (-2, 0)", 
            "(-1, 1) \\quad , \\quad (2, 4)", 
            "(1, 3) \\quad , \\quad (2, 4)", 
            "(0, 2) \\quad , \\quad (-2, 0)"
        ],
        correctAnswer: 0,
        hint: "בודדו את ה-\\( y \\) במשוואה השנייה (קבלו \\( y = x + 2 \\)), ואז הציבו אותו בתוך המשוואה הראשונה.",
        solution_steps: [
            { verbal_explanation: "נבודד את \\( y \\) במשוואת הישר.", math_expression: "y = x + 2" },
            { verbal_explanation: "נציב את הביטוי החדש של \\( y \\) במשוואת הפרבולה.", math_expression: "x^2 + (x + 2) = 4" },
            { verbal_explanation: "נסדר את המשוואה ונעביר אגף.", math_expression: "x^2 + x - 2 = 0" },
            { verbal_explanation: "נפתור משוואה ריבועית. הפתרונות הם \\( x=1 \\) ו-\\( x=-2 \\). נציב במשוואת הישר למציאת ה-\\( y \\).", math_expression: "(1, 3) \\quad , \\quad (-2, 0)" }
        ],
        final_answer: "(1, 3) \\quad , \\quad (-2, 0)"
    },
    // שאלה 19
    {
        topic: "equations_and_parametric",
        subTopic: "מערכת משוואות קווית וריבועית",
        question_text: "חיתוך עם ישר אופקי (המקביל לציר ה-x):\n\\( y = -x^2 + 9 \\)\n\\( y = 5 \\)",
        options: [
            "(2, 5) \\quad , \\quad (-2, 5)", 
            "(4, 5) \\quad , \\quad (-4, 5)", 
            "(2, 5)", 
            "(-2, 5)"
        ],
        correctAnswer: 0,
        hint: "השוו ל-5, העבירו מספרים לאגף אחד ואיקסים לאגף שני, והוציאו שורש ריבועי.",
        solution_steps: [
            { verbal_explanation: "נשווה בין המשוואות.", math_expression: "-x^2 + 9 = 5" },
            { verbal_explanation: "נעביר את 9 ימינה במינוס.", math_expression: "-x^2 = -4" },
            { verbal_explanation: "נכפיל במינוס 1 ונוציא שורש. נקבל שני ערכי \\( x \\). ערך ה-\\( y \\) תמיד נשאר 5 כפי שנתון.", math_expression: "x = \\pm 2 \\quad \\Rightarrow \\quad (2, 5) \\quad , \\quad (-2, 5)" }
        ],
        final_answer: "(2, 5) \\quad , \\quad (-2, 5)"
    },
    // שאלה 20
    {
        topic: "equations_and_parametric",
        subTopic: "מערכת משוואות קווית וריבועית",
        question_text: "פתרו את המערכת הבאה:\n\\( y = x^2 + 2x \\)\n\\( y = -x - 2 \\)" + svgSystemIntersect,
        options: [
            "(-1, -1) \\quad , \\quad (-2, 0)", 
            "(1, -3) \\quad , \\quad (-2, 0)", 
            "(-1, 1) \\quad , \\quad (2, -4)", 
            "אין נקודות חיתוך"
        ],
        correctAnswer: 0,
        hint: "השוו בין המשוואות והעבירו הכל לאגף אחד כדי לקבל משוואה ריבועית (טרינום).",
        solution_steps: [
            { verbal_explanation: "נשווה בין שתי הפונקציות.", math_expression: "x^2 + 2x = -x - 2" },
            { verbal_explanation: "נעביר אגפים ונכנס איברים.", math_expression: "x^2 + 3x + 2 = 0" },
            { verbal_explanation: "נפרק לטרינום (מספרים שכפלם 2 וסכומם 3).", math_expression: "(x + 1)(x + 2) = 0" },
            { verbal_explanation: "נמצא את שיעורי ה-\\( y \\) על ידי הצבת \\( x=-1 \\) ו-\\( x=-2 \\) במשוואת הישר.", math_expression: "(-1, -1) \\quad , \\quad (-2, 0)" }
        ],
        final_answer: "(-1, -1) \\quad , \\quad (-2, 0)"
    },
    // שאלה 21
    {
        topic: "equations_and_parametric",
        subTopic: "מערכת משוואות קווית וריבועית",
        question_text: "חיתוך פרבולה המיוצגת בכתיב קודקודי עם פונקציית ישר:\n\\( y = (x - 2)^2 \\)\n\\( y = x \\)",
        options: [
            "(1, 1) \\quad , \\quad (4, 4)", 
            "(2, 2) \\quad , \\quad (0, 0)", 
            "(-1, -1) \\quad , \\quad (-4, -4)", 
            "(1, 4) \\quad , \\quad (4, 1)"
        ],
        correctAnswer: 0,
        hint: "פתחו את הסוגריים באמצעות נוסחת כפל מקוצר לפני שתשוו לישר ותעבירו אגפים.",
        solution_steps: [
            { verbal_explanation: "נשווה ונפתח סוגריים באגף שמאל.", math_expression: "x^2 - 4x + 4 = x" },
            { verbal_explanation: "נעביר את ה-\\( x \\) שמאלה.", math_expression: "x^2 - 5x + 4 = 0" },
            { verbal_explanation: "נפתור בעזרת טרינום.", math_expression: "(x - 1)(x - 4) = 0 \\quad \\Rightarrow \\quad x_1 = 1 \\quad , \\quad x_2 = 4" },
            { verbal_explanation: "נציב בישר (כאן קל, ה-\\( y \\) פשוט שווה ל-\\( x \\)).", math_expression: "(1, 1) \\quad , \\quad (4, 4)" }
        ],
        final_answer: "(1, 1) \\quad , \\quad (4, 4)"
    },
    // שאלה 22
    {
        topic: "equations_and_parametric",
        subTopic: "מערכת משוואות קווית וריבועית",
        question_text: "מערכת הדורשת פתרון עדין של סימנים:\n\\( y = x^2 - 5x + 6 \\)\n\\( y = x - 3 \\)",
        options: [
            "(3, 0)", 
            "(3, 0) \\quad , \\quad (-3, -6)", 
            "(0, -3)", 
            "אין פתרון"
        ],
        correctAnswer: 0,
        hint: "השוו בין המשוואות. תראו שמתקבלת משוואה ריבועית בעלת פתרון כפול יחיד.",
        solution_steps: [
            { verbal_explanation: "נשווה בין המשוואות.", math_expression: "x^2 - 5x + 6 = x - 3" },
            { verbal_explanation: "נעביר אגפים ונכנס.", math_expression: "x^2 - 6x + 9 = 0" },
            { verbal_explanation: "נזהה נוסחת כפל מקוצר, ולכן יש רק פתרון אחד.", math_expression: "(x - 3)^2 = 0 \\quad \\Rightarrow \\quad x = 3" },
            { verbal_explanation: "נציב את 3 במשוואת הישר כדי למצוא את ה-\\( y \\).", math_expression: "y = 3 - 3 = 0 \\quad \\Rightarrow \\quad (3, 0)" }
        ],
        final_answer: "(3, 0)"
    },
    // שאלה 23
    {
        topic: "equations_and_parametric",
        subTopic: "מערכת משוואות קווית וריבועית",
        question_text: "מצאו נקודות חיתוך למערכת הבאה:\n\\( y = x^2 - 3x - 4 \\)\n\\( y = -6 \\)",
        options: [
            "(1, -6) \\quad , \\quad (2, -6)", 
            "אין נקודות חיתוך", 
            "(0, -6)", 
            "(-2, -6)"
        ],
        correctAnswer: 0,
        hint: "הציבו \\( y=-6 \\) במשוואה הריבועית, העבירו את ה-6, ופתרו משוואה ריבועית.",
        solution_steps: [
            { verbal_explanation: "נשווה בין הפונקציות.", math_expression: "x^2 - 3x - 4 = -6" },
            { verbal_explanation: "נעביר את -6 שמאלה בפלוס.", math_expression: "x^2 - 3x + 2 = 0" },
            { verbal_explanation: "נפתור משוואה בעזרת טרינום.", math_expression: "(x - 1)(x - 2) = 0 \\quad \\Rightarrow \\quad x=1 \\quad , \\quad x=2" },
            { verbal_explanation: "נרשום את שתי הנקודות (ה-\\( y \\) תמיד -6).", math_expression: "(1, -6) \\quad , \\quad (2, -6)" }
        ],
        final_answer: "(1, -6) \\quad , \\quad (2, -6)"
    },
    // שאלה 24
    {
        topic: "equations_and_parametric",
        subTopic: "מערכת משוואות קווית וריבועית",
        question_text: "משוואות עם חלוקה בהתחלה:\n\\( y = 2x^2 + 8x \\)\n\\( y = -6 \\)",
        options: [
            "(-1, -6) \\quad , \\quad (-3, -6)", 
            "(1, -6) \\quad , \\quad (3, -6)", 
            "(-2, -6)", 
            "אין פתרון"
        ],
        correctAnswer: 0,
        hint: "השוו למינוס 6, העבירו אגפים, חלקו את כל המשוואה ב-2, ואז פתרו.",
        solution_steps: [
            { verbal_explanation: "נשווה ונעביר את ה-6 שמאלה.", math_expression: "2x^2 + 8x + 6 = 0" },
            { verbal_explanation: "נחלק ב-2 למשוואה קלה יותר.", math_expression: "x^2 + 4x + 3 = 0" },
            { verbal_explanation: "נפרק לטרינום ונקבל את התוצאות עבור \\( x \\).", math_expression: "(x + 1)(x + 3) = 0 \\quad \\Rightarrow \\quad x = -1 \\quad , \\quad x = -3" },
            { verbal_explanation: "נרשום יחד עם ערך ה-\\( y \\).", math_expression: "(-1, -6) \\quad , \\quad (-3, -6)" }
        ],
        final_answer: "(-1, -6) \\quad , \\quad (-3, -6)"
    },

    // ==========================================================
    // תת נושא 3: משוואות פרמטריות ממעלה ראשונה (12 שאלות)
    // ==========================================================
    
    // שאלה 25
    {
        topic: "equations_and_parametric",
        subTopic: "משוואות פרמטריות ממעלה ראשונה",
        question_text: "בטאו את הנעלם \\( x \\) מתוך המשוואה הפרמטרית הבאה (הניחו \\( m \\neq 0 \\)):\n\\( mx = 10 \\)" + svgParamScale,
        options: [
            "x = \\frac{10}{m}", 
            "x = 10 - m", 
            "x = 10m", 
            "x = \\frac{m}{10}"
        ],
        correctAnswer: 0,
        hint: "כדי לבודד את ה-\\( x \\), יש לבצע את הפעולה ההפוכה לכפל. חלקו את שני האגפים במקדם שלו, שהוא הפרמטר \\( m \\).",
        solution_steps: [
            { verbal_explanation: "נחלק את שני האגפים של המשוואה ב-\\( m \\) (מותר כי נתון \\( m \\neq 0 \\)).", math_expression: "x = \\frac{10}{m}" }
        ],
        final_answer: "x = \\frac{10}{m}"
    },
    // שאלה 26
    {
        topic: "equations_and_parametric",
        subTopic: "משוואות פרמטריות ממעלה ראשונה",
        question_text: "בטאו את \\( x \\) מתוך המשוואה הבאה:\n\\( ax - 3 = 5 \\)",
        options: [
            "x = \\frac{8}{a}", 
            "x = \\frac{2}{a}", 
            "x = 8 - a", 
            "x = 8a"
        ],
        correctAnswer: 0,
        hint: "תחילה העבירו את המספר 3 לאגף הימני (הוא יהפוך לחיובי), ולאחר מכן חלקו בפרמטר \\( a \\).",
        solution_steps: [
            { verbal_explanation: "נעביר את המינוס 3 ימינה (בפלוס).", math_expression: "ax = 5 + 3 = 8" },
            { verbal_explanation: "נחלק בפרמטר \\( a \\) כדי לבודד את ה-\\( x \\).", math_expression: "x = \\frac{8}{a}" }
        ],
        final_answer: "x = \\frac{8}{a}"
    },
    // שאלה 27
    {
        topic: "equations_and_parametric",
        subTopic: "משוואות פרמטריות ממעלה ראשונה",
        question_text: "משוואה עם הוצאת גורם משותף! בטאו את \\( x \\):\n\\( mx + 2x = 5 \\)" + svgParamScale,
        options: [
            "x = \\frac{5}{m + 2}", 
            "x = \\frac{5}{m} + 2", 
            "x = \\frac{5}{2m}", 
            "x = 5 - m - 2"
        ],
        correctAnswer: 0,
        hint: "מכיוון ש-\\( x \\) מופיע בשני האיברים, הוציאו אותו כגורם משותף מחוץ לסוגריים באגף שמאל, ואז חלקו בסוגריים כולם.",
        solution_steps: [
            { verbal_explanation: "נוציא את ה-\\( x \\) כגורם משותף כדי שיופיע פעם אחת בלבד.", math_expression: "x(m + 2) = 5" },
            { verbal_explanation: "נחלק את שני האגפים בבלוק \\( (m + 2) \\).", math_expression: "x = \\frac{5}{m + 2}" }
        ],
        final_answer: "x = \\frac{5}{m + 2}"
    },
    // שאלה 28
    {
        topic: "equations_and_parametric",
        subTopic: "משוואות פרמטריות ממעלה ראשונה",
        question_text: "בטאו את \\( x \\) מתוך המשוואה הבאה:\n\\( kx - 2 = k \\)",
        options: [
            "x = \\frac{k + 2}{k}", 
            "x = \\frac{k - 2}{k}", 
            "x = 2", 
            "x = k + 2"
        ],
        correctAnswer: 0,
        hint: "העבירו את המספר החופשי (2) ימינה, ואז חלקו במקדם ה-\\( x \\) (שהוא \\( k \\)).",
        solution_steps: [
            { verbal_explanation: "נעביר את המינוס 2 לאגף הימני.", math_expression: "kx = k + 2" },
            { verbal_explanation: "נחלק בפרמטר \\( k \\) כדי לבודד את ה-\\( x \\).", math_expression: "x = \\frac{k + 2}{k}" }
        ],
        final_answer: "x = \\frac{k + 2}{k}"
    },
    // שאלה 29
    {
        topic: "equations_and_parametric",
        subTopic: "משוואות פרמטריות ממעלה ראשונה",
        question_text: "בטאו את \\( x \\) (שימו לב לסדר):\n\\( 3x - mx = 6 \\)",
        options: [
            "x = \\frac{6}{3 - m}", 
            "x = \\frac{6}{m - 3}", 
            "x = 6(3 - m)", 
            "x = \\frac{2}{m}"
        ],
        correctAnswer: 0,
        hint: "הוציאו את \\( x \\) כגורם משותף מחוץ לסוגריים באגף שמאל, ולאחר מכן חלקו בסוגריים.",
        solution_steps: [
            { verbal_explanation: "הוצאת גורם משותף משמאל.", math_expression: "x(3 - m) = 6" },
            { verbal_explanation: "חלוקה בסוגריים.", math_expression: "x = \\frac{6}{3 - m}" }
        ],
        final_answer: "x = \\frac{6}{3 - m}"
    },
    // שאלה 30
    {
        topic: "equations_and_parametric",
        subTopic: "משוואות פרמטריות ממעלה ראשונה",
        question_text: "צמצום פרמטרים. פתרו את המשוואה עבור \\( x \\) (הניחו \\( a \\neq 0 \\)):\n\\( ax = a^2 \\)" + svgParamScale,
        options: [
            "x = a", 
            "x = a^2", 
            "x = 1", 
            "x = \\frac{1}{a}"
        ],
        correctAnswer: 0,
        hint: "חלקו את שני האגפים בפרמטר \\( a \\). מה קורה לחזקה באגף הימני?",
        solution_steps: [
            { verbal_explanation: "נחלק את המשוואה ב-\\( a \\).", math_expression: "x = \\frac{a^2}{a}" },
            { verbal_explanation: "נצמצם את ה-\\( a \\) המשותף למעלה ולמטה (לפי חוקי חזקות).", math_expression: "x = a" }
        ],
        final_answer: "x = a"
    },
    // שאלה 31
    {
        topic: "equations_and_parametric",
        subTopic: "משוואות פרמטריות ממעלה ראשונה",
        question_text: "פתיחת סוגריים פרמטרית! בטאו את \\( x \\):\n\\( m(x - 1) = 4 \\)",
        options: [
            "x = \\frac{4 + m}{m}", 
            "x = \\frac{4 - m}{m}", 
            "x = \\frac{4}{m} - 1", 
            "x = \\frac{4}{m - 1}"
        ],
        correctAnswer: 0,
        hint: "פתחו את הסוגריים על ידי הכפלת \\( m \\) פנימה, ואז בודדו את האיבר שמכיל את \\( x \\).",
        solution_steps: [
            { verbal_explanation: "שלב א': נפתח סוגריים.", math_expression: "mx - m = 4" },
            { verbal_explanation: "שלב ב': נעביר את המינוס \\( m \\) ימינה.", math_expression: "mx = 4 + m" },
            { verbal_explanation: "שלב ג': נחלק ב-\\( m \\).", math_expression: "x = \\frac{4 + m}{m}" }
        ],
        final_answer: "x = \\frac{4 + m}{m}"
    },
    // שאלה 32
    {
        topic: "equations_and_parametric",
        subTopic: "משוואות פרמטריות ממעלה ראשונה",
        question_text: "צמצום מורכב של כפל מקוצר. בטאו את \\( x \\) (הניחו ש- \\( a \\neq 2 \\)):\n\\( x(a - 2) = a^2 - 4 \\)",
        options: [
            "x = a + 2", 
            "x = a - 2", 
            "x = a + 4", 
            "x = \\frac{a^2 - 4}{a}"
        ],
        correctAnswer: 0,
        hint: "חלקו בסוגריים \\( (a-2) \\), ואז שימו לב שאפשר לפרק את המונה לפי נוסחת הפרש הריבועים ולצמצם את השבר.",
        solution_steps: [
            { verbal_explanation: "שלב א': נחלק בסוגריים להעברתם למכנה.", math_expression: "x = \\frac{a^2 - 4}{a - 2}" },
            { verbal_explanation: "שלב ב': נפרק את המונה בעזרת נוסחת הפרש ריבועים.", math_expression: "x = \\frac{(a - 2)(a + 2)}{a - 2}" },
            { verbal_explanation: "שלב ג': נצמצם את הבלוק \\( (a - 2) \\).", math_expression: "x = a + 2" }
        ],
        final_answer: "x = a + 2"
    },
    // שאלה 33
    {
        topic: "equations_and_parametric",
        subTopic: "משוואות פרמטריות ממעלה ראשונה",
        question_text: "משוואה עם \\( x \\) בשני האגפים. בטאו את \\( x \\):\n\\( 2ax + 4 = a(x + 2) \\)",
        options: [
            "x = \\frac{2a - 4}{a}", 
            "x = \\frac{4 - 2a}{a}", 
            "x = 2", 
            "x = \\frac{2a + 4}{3a}"
        ],
        correctAnswer: 0,
        hint: "פתחו סוגריים באגף ימין, העבירו את כל איברי ה-\\( x \\) שמאלה ואת המספרים ימינה.",
        solution_steps: [
            { verbal_explanation: "שלב א': פתיחת סוגריים באגף ימין.", math_expression: "2ax + 4 = ax + 2a" },
            { verbal_explanation: "שלב ב': העברת אגפים וחיסור (\\( 2ax - ax \\)).", math_expression: "ax = 2a - 4" },
            { verbal_explanation: "שלב ג': חלוקה ב-\\( a \\).", math_expression: "x = \\frac{2a - 4}{a}" }
        ],
        final_answer: "x = \\frac{2a - 4}{a}"
    },
    // שאלה 34
    {
        topic: "equations_and_parametric",
        subTopic: "משוואות פרמטריות ממעלה ראשונה",
        question_text: "משוואה עם פרמטר במכנה! בטאו את \\( x \\):\n\\( \\frac{x}{m} = 3 \\)",
        options: [
            "x = 3m", 
            "x = \\frac{3}{m}", 
            "x = \\frac{m}{3}", 
            "x = m + 3"
        ],
        correctAnswer: 0,
        hint: "הפעולה ההפוכה לחילוק היא כפל. כפלו את שני האגפים בפרמטר \\( m \\).",
        solution_steps: [
            { verbal_explanation: "נכפיל את שני אגפי המשוואה במכנה \\( m \\).", math_expression: "x = 3 \\times m" },
            { verbal_explanation: "התוצאה הסופית מתקבלת ישירות.", math_expression: "x = 3m" }
        ],
        final_answer: "x = 3m"
    },
    // שאלה 35
    {
        topic: "equations_and_parametric",
        subTopic: "משוואות פרמטריות ממעלה ראשונה",
        question_text: "משוואת שבר פרמטרית. בטאו את \\( x \\):\n\\( \\frac{mx - 1}{2} = x \\)",
        options: [
            "x = \\frac{1}{m - 2}", 
            "x = \\frac{1}{2 - m}", 
            "x = \\frac{1}{m}", 
            "x = m - 2"
        ],
        correctAnswer: 0,
        hint: "הכפילו את המשוואה ב-2, העבירו את איברי ה-\\( x \\) לאגף שמאל, הוציאו גורם משותף וחלקו.",
        solution_steps: [
            { verbal_explanation: "שלב א': נכפיל את המשוואה ב-2 כדי להיפטר מהשבר.", math_expression: "mx - 1 = 2x" },
            { verbal_explanation: "שלב ב': נעביר את \\( 2x \\) שמאלה ואת 1 ימינה.", math_expression: "mx - 2x = 1" },
            { verbal_explanation: "שלב ג': נוציא \\( x \\) כגורם משותף.", math_expression: "x(m - 2) = 1" },
            { verbal_explanation: "שלב ד': נחלק בסוגריים כדי לבודד את הנעלם.", math_expression: "x = \\frac{1}{m - 2}" }
        ],
        final_answer: "x = \\frac{1}{m - 2}"
    },
    // שאלה 36
    {
        topic: "equations_and_parametric",
        subTopic: "משוואות פרמטריות ממעלה ראשונה",
        question_text: "משוואה כללית לחלוטין (ללא מספרים). בטאו את \\( x \\):\n\\( ax + b = c \\)",
        options: [
            "x = \\frac{c - b}{a}", 
            "x = \\frac{c + b}{a}", 
            "x = c - b - a", 
            "x = \\frac{a}{c - b}"
        ],
        correctAnswer: 0,
        hint: "העבירו את \\( b \\) לאגף ימין (זה יהפוך למינוס), ולאחר מכן חלקו במקדם של \\( x \\).",
        solution_steps: [
            { verbal_explanation: "נעביר את הפרמטר \\( b \\) ימינה (הסימן מתהפך).", math_expression: "ax = c - b" },
            { verbal_explanation: "נחלק את המשוואה כולה בפרמטר \\( a \\).", math_expression: "x = \\frac{c - b}{a}" }
        ],
        final_answer: "x = \\frac{c - b}{a}"
    },

    // ==========================================================
    // תת נושא 4: משוואות פרמטריות בשני נעלמים (12 שאלות)
    // ==========================================================
    
    // שאלה 37
    {
        topic: "equations_and_parametric",
        subTopic: "משוואות פרמטריות בשני נעלמים",
        question_text: "פתרו את מערכת המשוואות הפרמטרית הבאה (בטאו בעזרת \\( m \\)):\n\\( x + y = m \\)\n\\( x - y = 2m \\)" + svgParamGrid,
        options: [
            "x = 1.5m \\quad , \\quad y = -0.5m", 
            "x = 1.5m \\quad , \\quad y = 0.5m", 
            "x = 3m \\quad , \\quad y = -m", 
            "x = m \\quad , \\quad y = 2m"
        ],
        correctAnswer: 0,
        hint: "מומלץ להשתמש בשיטת השוואת מקדמים (חיבור משוואות). אם תחברו את שתי המשוואות יחד, ה-\\( y \\) יתבטל ותקבלו רק \\( x \\).",
        solution_steps: [
            { verbal_explanation: "נחבר את שתי המשוואות יחדיו. ה-\\( y \\) חיובי בראשונה ושלילי בשנייה, ולכן הוא נופל.", math_expression: "(x + x) + (y - y) = m + 2m \\quad \\Rightarrow \\quad 2x = 3m" },
            { verbal_explanation: "נחלק ב-2 ונמצא את \\( x \\).", math_expression: "x = 1.5m" },
            { verbal_explanation: "נציב את ה-\\( x \\) חזרה במשוואה הראשונה למציאת ה-\\( y \\).", math_expression: "1.5m + y = m \\quad \\Rightarrow \\quad y = m - 1.5m = -0.5m" }
        ],
        final_answer: "x = 1.5m \\quad , \\quad y = -0.5m"
    },
    // שאלה 38
    {
        topic: "equations_and_parametric",
        subTopic: "משוואות פרמטריות בשני נעלמים",
        question_text: "פתרון בשיטת ההצבה. פתרו את המערכת:\n\\( y = mx \\)\n\\( x + y = m + 1 \\)",
        options: [
            "x = 1 \\quad , \\quad y = m", 
            "x = m \\quad , \\quad y = 1", 
            "x = 1 \\quad , \\quad y = 1", 
            "x = m \\quad , \\quad y = m"
        ],
        correctAnswer: 0,
        hint: "הציבו את הערך של \\( y \\) מהמשוואה הראשונה לתוך המשוואה השנייה.",
        solution_steps: [
            { verbal_explanation: "נציב את \\( y = mx \\) בתוך המשוואה השנייה.", math_expression: "x + mx = m + 1" },
            { verbal_explanation: "נוציא גורם משותף באגף שמאל.", math_expression: "x(1 + m) = m + 1" },
            { verbal_explanation: "נחלק את המשוואה ב-\\( (m+1) \\) ונקבל ש-\\( x=1 \\). נציב חזרה כדי למצוא את \\( y \\).", math_expression: "x = 1 \\quad \\Rightarrow \\quad y = m \\times 1 = m" }
        ],
        final_answer: "x = 1 \\quad , \\quad y = m"
    },
    // שאלה 39
    {
        topic: "equations_and_parametric",
        subTopic: "משוואות פרמטריות בשני נעלמים",
        question_text: "מערכת פשוטה לחיבור משוואות. פתרו:\n\\( 2x + y = a \\)\n\\( x - y = 2a \\)",
        options: [
            "x = a \\quad , \\quad y = -a", 
            "x = a \\quad , \\quad y = a", 
            "x = -a \\quad , \\quad y = a", 
            "x = 2a \\quad , \\quad y = -a"
        ],
        correctAnswer: 0,
        hint: "חברו את שתי המשוואות במאונך. איברי ה-\\( y \\) יתבטלו.",
        solution_steps: [
            { verbal_explanation: "חיבור משוואות מעלים את ה-\\( y \\).", math_expression: "3x = 3a" },
            { verbal_explanation: "נחלק את שני האגפים ב-3.", math_expression: "x = a" },
            { verbal_explanation: "נציב את הערך של \\( x \\) במשוואה השנייה למציאת \\( y \\).", math_expression: "a - y = 2a \\quad \\Rightarrow \\quad -y = a \\quad \\Rightarrow \\quad y = -a" }
        ],
        final_answer: "x = a \\quad , \\quad y = -a"
    },
    // שאלה 40
    {
        topic: "equations_and_parametric",
        subTopic: "משוואות פרמטריות בשני נעלמים",
        question_text: "הצבה של פרמטר מורכב. פתרו:\n\\( x = 2y \\)\n\\( x - my = 4 \\)" + svgParamGrid,
        options: [
            "x = \\frac{8}{2 - m} \\quad , \\quad y = \\frac{4}{2 - m}", 
            "x = \\frac{4}{2 - m} \\quad , \\quad y = \\frac{8}{2 - m}", 
            "x = 8 \\quad , \\quad y = 4", 
            "x = \\frac{2}{m} \\quad , \\quad y = \\frac{1}{m}"
        ],
        correctAnswer: 0,
        hint: "הציבו את הערך של \\( x \\) מהמשוואה הראשונה אל תוך המשוואה השנייה.",
        solution_steps: [
            { verbal_explanation: "נציב \\( x = 2y \\) לתוך המשוואה השנייה.", math_expression: "2y - my = 4" },
            { verbal_explanation: "נוציא את ה-\\( y \\) כגורם משותף.", math_expression: "y(2 - m) = 4" },
            { verbal_explanation: "נבודד את \\( y \\).", math_expression: "y = \\frac{4}{2 - m}" },
            { verbal_explanation: "נמצא את \\( x \\) שהוא כפול מ-\\( y \\).", math_expression: "x = 2 \\times \\frac{4}{2 - m} = \\frac{8}{2 - m}" }
        ],
        final_answer: "x = \\frac{8}{2 - m} \\quad , \\quad y = \\frac{4}{2 - m}"
    },
    // שאלה 41
    {
        topic: "equations_and_parametric",
        subTopic: "משוואות פרמטריות בשני נעלמים",
        question_text: "הצבה פשוטה למציאת נעלם. מצאו את \\( x \\) ו-\\( y \\) (כאשר \\( a \\neq 0 \\)):\n\\( ax + y = 5 \\)\n\\( y = 3 \\)",
        options: [
            "x = \\frac{2}{a} \\quad , \\quad y = 3", 
            "x = \\frac{8}{a} \\quad , \\quad y = 3", 
            "x = 2a \\quad , \\quad y = 3", 
            "x = \\frac{a}{2} \\quad , \\quad y = 3"
        ],
        correctAnswer: 0,
        hint: "הציבו את המספר 3 במקום \\( y \\) במשוואה הראשונה, ופתרו עבור \\( x \\).",
        solution_steps: [
            { verbal_explanation: "המשוואה השנייה כבר נותנת לנו את \\( y \\) במפורש.", math_expression: "y = 3" },
            { verbal_explanation: "נציב את הנתון מהמשוואה השנייה אל תוך הראשונה.", math_expression: "ax + 3 = 5" },
            { verbal_explanation: "נעביר את 3 אגף.", math_expression: "ax = 2" },
            { verbal_explanation: "נחלק בפרמטר \\( a \\).", math_expression: "x = \\frac{2}{a}" }
        ],
        final_answer: "x = \\frac{2}{a} \\quad , \\quad y = 3"
    },
    // שאלה 42
    {
        topic: "equations_and_parametric",
        subTopic: "משוואות פרמטריות בשני נעלמים",
        question_text: "מערכת משוואות להסקת מסקנות מהירה:\n\\( x + y = 4a \\)\n\\( x - y = 0 \\)",
        options: [
            "x = 2a \\quad , \\quad y = 2a", 
            "x = 4a \\quad , \\quad y = 0", 
            "x = a \\quad , \\quad y = 3a", 
            "x = 0 \\quad , \\quad y = 4a"
        ],
        correctAnswer: 0,
        hint: "מהמשוואה השנייה ניתן להסיק ש-\\( x = y \\). הציבו מסקנה זו במשוואה הראשונה.",
        solution_steps: [
            { verbal_explanation: "המשוואה השנייה קובעת ששני הנעלמים שווים זה לזה.", math_expression: "x = y" },
            { verbal_explanation: "נציב זאת במשוואה הראשונה.", math_expression: "x + x = 4a \\quad \\Rightarrow \\quad 2x = 4a" },
            { verbal_explanation: "נחלק ב-2.", math_expression: "x = 2a" },
            { verbal_explanation: "מכיוון ששניהם שווים, גם \\( y \\) שווה ל-\\( 2a \\).", math_expression: "y = 2a" }
        ],
        final_answer: "x = 2a \\quad , \\quad y = 2a"
    },
    // שאלה 43
    {
        topic: "equations_and_parametric",
        subTopic: "משוואות פרמטריות בשני נעלמים",
        question_text: "מערכת מורכבת הדורשת חיבור עדין:\n\\( mx - y = m \\)\n\\( x + y = 1 \\)" + svgParamGrid,
        options: [
            "x = 1 \\quad , \\quad y = 0", 
            "x = m \\quad , \\quad y = 1", 
            "x = 0 \\quad , \\quad y = 1", 
            "x = 1 \\quad , \\quad y = m"
        ],
        correctAnswer: 0,
        hint: "חברו את שתי המשוואות במאונך כדי להיפטר מהנעלם \\( y \\), וחלצו את \\( x \\) לאחר הוצאת גורם משותף.",
        solution_steps: [
            { verbal_explanation: "נחבר את שתי המשוואות. ה-\\( y \\) מתבטל.", math_expression: "mx + x = m + 1" },
            { verbal_explanation: "נוציא את ה-\\( x \\) כגורם משותף.", math_expression: "x(m + 1) = m + 1" },
            { verbal_explanation: "נחלק את המשוואה בגורם המשותף \\( (m+1) \\) ונקבל 1.", math_expression: "x = 1" },
            { verbal_explanation: "נציב את התוצאה במשוואה השנייה.", math_expression: "1 + y = 1 \\quad \\Rightarrow \\quad y = 0" }
        ],
        final_answer: "x = 1 \\quad , \\quad y = 0"
    },
    // שאלה 44
    {
        topic: "equations_and_parametric",
        subTopic: "משוואות פרמטריות בשני נעלמים",
        question_text: "שימוש בהצבה מורכבת. פתרו את המערכת:\n\\( y = x + m \\)\n\\( 2x + y = 4m \\)",
        options: [
            "x = m \\quad , \\quad y = 2m", 
            "x = 2m \\quad , \\quad y = m", 
            "x = m \\quad , \\quad y = m", 
            "x = -m \\quad , \\quad y = 0"
        ],
        correctAnswer: 0,
        hint: "הציבו את הביטוי עבור \\( y \\) מהמשוואה הראשונה לתוך המשוואה השנייה.",
        solution_steps: [
            { verbal_explanation: "נציב את ה-\\( y \\) במשוואה השנייה.", math_expression: "2x + (x + m) = 4m" },
            { verbal_explanation: "נכנס איברים ונעביר את \\( m \\) ימינה בחיסור.", math_expression: "3x = 3m" },
            { verbal_explanation: "נחלק ב-3.", math_expression: "x = m" },
            { verbal_explanation: "נציב את \\( x \\) חזרה במשוואה הראשונה למציאת \\( y \\).", math_expression: "y = m + m = 2m" }
        ],
        final_answer: "x = m \\quad , \\quad y = 2m"
    },
    // שאלה 45
    {
        topic: "equations_and_parametric",
        subTopic: "משוואות פרמטריות בשני נעלמים",
        question_text: "הבנת משמעות פרמטרים כקבועים. פתרו את המערכת והביעו את \\( y \\) (הניחו ש- \\( b \\neq 0 \\)):\n\\( ax + by = c \\)\n\\( x = 0 \\)",
        options: [
            "x = 0 \\quad , \\quad y = \\frac{c}{b}", 
            "x = 0 \\quad , \\quad y = c - a", 
            "x = 0 \\quad , \\quad y = \\frac{c - a}{b}", 
            "x = 0 \\quad , \\quad y = 0"
        ],
        correctAnswer: 0,
        hint: "הציבו את הנתון הישיר של משוואה השנייה (\\( x=0 \\)) בתוך המשוואה הראשונה.",
        solution_steps: [
            { verbal_explanation: "נציב את ערך ה-\\( x \\) שניתן לנו לתוך המשוואה הראשונה.", math_expression: "a \\times 0 + by = c" },
            { verbal_explanation: "האיבר השמאלי מתאפס לחלוטין.", math_expression: "by = c" },
            { verbal_explanation: "נחלק בפרמטר \\( b \\).", math_expression: "y = \\frac{c}{b}" }
        ],
        final_answer: "x = 0 \\quad , \\quad y = \\frac{c}{b}"
    },
    // שאלה 46
    {
        topic: "equations_and_parametric",
        subTopic: "משוואות פרמטריות בשני נעלמים",
        question_text: "מערכת עם שני פרמטרים שונים (המכילים \\( a \\)). פתרו:\n\\( x - ay = a \\)\n\\( x + ay = 3a \\)" + svgParamGrid,
        options: [
            "x = 2a \\quad , \\quad y = 1", 
            "x = a \\quad , \\quad y = 2", 
            "x = 2a \\quad , \\quad y = a", 
            "x = 3a \\quad , \\quad y = -1"
        ],
        correctAnswer: 0,
        hint: "האיבר המכיל \\( ay \\) מופיע פעם במינוס ופעם בפלוס. חיבור המשוואות יחסל אותו לגמרי וישאיר רק את \\( x \\).",
        solution_steps: [
            { verbal_explanation: "נחבר את המשוואות לאורך. איברי ה-\\( y \\) נופלים.", math_expression: "2x = 4a" },
            { verbal_explanation: "נחלק ב-2.", math_expression: "x = 2a" },
            { verbal_explanation: "נציב באחת המשוואות (למשל השנייה).", math_expression: "2a + ay = 3a \\quad \\Rightarrow \\quad ay = a" },
            { verbal_explanation: "נחלק ב-\\( a \\) (בהנחה שהוא לא אפס).", math_expression: "y = 1" }
        ],
        final_answer: "x = 2a \\quad , \\quad y = 1"
    },
    // שאלה 47
    {
        topic: "equations_and_parametric",
        subTopic: "משוואות פרמטריות בשני נעלמים",
        question_text: "מערכת עם שברים פרמטריים. מצאו את המערכת:\n\\( \\frac{x}{a} + y = 2 \\)\n\\( x = a \\)",
        options: [
            "x = a \\quad , \\quad y = 1", 
            "x = a \\quad , \\quad y = 2", 
            "x = a \\quad , \\quad y = 0", 
            "x = a \\quad , \\quad y = a"
        ],
        correctAnswer: 0,
        hint: "הציבו את הערך של \\( x \\) במשוואה העליונה, ואל תשכחו שחלוקה של פרמטר בעצמו נותנת תמיד 1.",
        solution_steps: [
            { verbal_explanation: "נציב את הנתון \\( x=a \\) במשוואה העליונה.", math_expression: "\\frac{a}{a} + y = 2" },
            { verbal_explanation: "השבר מצטמצם ל-1.", math_expression: "1 + y = 2" },
            { verbal_explanation: "נעביר אגף.", math_expression: "y = 1" }
        ],
        final_answer: "x = a \\quad , \\quad y = 1"
    },
    // שאלה 48
    {
        topic: "equations_and_parametric",
        subTopic: "משוואות פרמטריות בשני נעלמים",
        question_text: "אתגר פרמטרים כפול (עם \\( m \\) ו-\\( n \\)). פתרו את המערכת עבור \\( x \\) ו-\\( y \\):\n\\( mx - ny = 0 \\)\n\\( x + y = m + n \\)",
        options: [
            "x = n \\quad , \\quad y = m", 
            "x = m \\quad , \\quad y = n", 
            "x = 1 \\quad , \\quad y = 1", 
            "x = m+n \\quad , \\quad y = 0"
        ],
        correctAnswer: 0,
        hint: "מהמשוואה הראשונה אפשר לבודד את \\( x \\) ולהציבו במשוואה השנייה. היעזרו בהוצאת גורם משותף.",
        solution_steps: [
            { verbal_explanation: "נבודד את \\( x \\) מהמשוואה הראשונה.", math_expression: "x = \\frac{n}{m}y" },
            { verbal_explanation: "נציב את הביטוי במשוואה השנייה.", math_expression: "\\frac{n}{m}y + y = m + n" },
            { verbal_explanation: "נוציא \\( y \\) כגורם משותף ונחבר את השבר. \\( \\frac{n}{m} + 1 = \\frac{n+m}{m} \\).", math_expression: "y (\\frac{n+m}{m}) = m + n" },
            { verbal_explanation: "נחלק במונה ונכפיל במכנה, נגלה ש-\\( y=m \\). נציב ונמצא את \\( x \\).", math_expression: "y = m \\quad , \\quad x = n" }
        ],
        final_answer: "x = n \\quad , \\quad y = m"
    }

];