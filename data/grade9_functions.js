// ========================================================================
// שכבת גיל: כיתה ט' | נושא: פונקציות (קווית, ריבועית וכללית) - 60 שאלות!
// קובץ: grade9_functions.js
// >>> גרסה 2.5 פרימיום - סופר יציב, גופני \dfrac ענקיים, סטרילי לחלוטין <<<
// ========================================================================

// ==========================================
// מאגר איורי פרימיום וקטוריים לכל תת-נושא
// ==========================================
const svgLin = "\n<div style='text-align:center; margin-top:20px;'><svg width='180' height='90' viewBox='0 0 180 90'><defs><linearGradient id='gradLin' x1='0%' y1='100%' x2='100%' y2='0%'><stop offset='0%' style='stop-color:#3b82f6;stop-opacity:1' /><stop offset='100%' style='stop-color:#8b5cf6;stop-opacity:1' /></linearGradient></defs><line x1='20' y1='80' x2='160' y2='80' stroke='#cbd5e1' stroke-width='2'/><line x1='90' y1='10' x2='90' y2='85' stroke='#cbd5e1' stroke-width='2'/><path d='M30 70 L150 20' fill='none' stroke='url(#gradLin)' stroke-width='4' stroke-linecap='round'/><circle cx='90' cy='45' r='5' fill='#8b5cf6'/></svg></div>";
const svgParabIntro = "\n<div style='text-align:center; margin-top:20px;'><svg width='180' height='90' viewBox='0 0 180 90'><defs><linearGradient id='gradParab' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:#10b981;stop-opacity:1' /><stop offset='100%' style='stop-color:#047857;stop-opacity:1' /></linearGradient></defs><path d='M40 20 Q 90 120, 140 20' fill='none' stroke='url(#gradParab)' stroke-width='4' stroke-linecap='round'/><rect x='60' y='40' width='60' height='30' rx='5' fill='#d1fae5' stroke='#059669' stroke-width='1'/><text x='90' y='58' font-family='Arial' font-size='12' font-weight='bold' fill='#064e3b' text-anchor='middle'>ax^2+bx+c</text></svg></div>";
const svgVertexRoots = "\n<div style='text-align:center; margin-top:20px;'><svg width='180' height='90' viewBox='0 0 180 90'><defs><linearGradient id='gradVert' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:#f59e0b;stop-opacity:1' /><stop offset='100%' style='stop-color:#b45309;stop-opacity:1' /></linearGradient></defs><line x1='20' y1='50' x2='160' y2='50' stroke='#94a3b8' stroke-width='2'/><path d='M40 20 Q 90 130, 140 20' fill='none' stroke='#cbd5e1' stroke-width='3' stroke-linecap='round'/><line x1='90' y1='10' x2='90' y2='85' stroke='url(#gradVert)' stroke-width='3' stroke-dasharray='5,5'/><circle cx='90' cy='75' r='6' fill='#b45309'/><circle cx='60' cy='50' r='5' fill='#f59e0b'/><circle cx='120' cy='50' r='5' fill='#f59e0b'/></svg></div>";
const svgDomains = "\n<div style='text-align:center; margin-top:20px;'><svg width='180' height='90' viewBox='0 0 180 90'><defs><linearGradient id='gradDom' x1='0%' y1='100%' x2='100%' y2='0%'><stop offset='0%' style='stop-color:#f43f5e;stop-opacity:1' /><stop offset='100%' style='stop-color:#be123c;stop-opacity:1' /></linearGradient></defs><line x1='20' y1='75' x2='160' y2='75' stroke='#cbd5e1' stroke-width='2'/><path d='M40 85 Q 90 -20, 140 85' fill='none' stroke='url(#gradDom)' stroke-width='4' stroke-linecap='round'/><path d='M40 85 Q 65 30, 90 12' fill='none' stroke='#10b981' stroke-width='4' stroke-linecap='round'/></svg></div>";
const svgAreas = "\n<div style='text-align:center; margin-top:20px;'><svg width='180' height='90' viewBox='0 0 180 90'><defs><linearGradient id='gradArea' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:#06b6d4;stop-opacity:0.3' /><stop offset='100%' style='stop-color:#0284c7;stop-opacity:0.6' /></linearGradient></defs><line x1='20' y1='50' x2='160' y2='50' stroke='#94a3b8' stroke-width='2'/><path d='M30 20 Q 90 120, 150 20' fill='none' stroke='#0ea5e9' stroke-width='3'/><polygon points='60,50 120,50 90,70' fill='url(#gradArea)' stroke='#0284c7' stroke-width='2'/></svg></div>";

const questionsDB = [

    // ==========================================================
    // תת נושא 1: חזרה על פונקציה קווית (12 שאלות)
    // ==========================================================
    {
        topic: "functions",
        subTopic: "חזרה על פונקציה קווית",
        question_text: "מצאו את שיפוע הישר העובר דרך שתי הנקודות:\n\\( (2, -1) \\) ו- \\( (5, 8) \\)." + svgLin,
        options: ["3", "-3", "\\dfrac{1}{3}", "9"],
        correctAnswer: 0,
        hint: "השתמשו בנוסחה למציאת שיפוע: הפרש ערכי ה-y חלקי הפרש ערכי ה-x.",
        solution_steps: [
            { verbal_explanation: "נרשום את הנוסחה לחישוב שיפוע (m).", math_expression: "m = \\dfrac{y_2 - y_1}{x_2 - x_1}" },
            { verbal_explanation: "נציב את שיעורי הנקודות במונה ובמכנה.", math_expression: "m = \\dfrac{8 - (-1)}{5 - 2}" },
            { verbal_explanation: "נחשב את המונה (מינוס ומינוס הופך לפלוס) ואת המכנה.", math_expression: "\\dfrac{8 + 1}{3} = \\dfrac{9}{3}" },
            { verbal_explanation: "נצמצם את השבר ונקבל את התוצאה.", math_expression: "3" }
        ],
        final_answer: "3"
    },
    {
        topic: "functions",
        subTopic: "חזרה על פונקציה קווית",
        question_text: "מצאו את משוואת הישר ששיפועו 4 והוא עובר דרך הנקודה \\( (1, 6) \\).",
        options: ["y = 4x + 2", "y = 4x - 2", "y = 4x + 6", "y = x + 4"],
        correctAnswer: 0,
        hint: "הציבו את השיפוע והנקודה בנוסחה למציאת משוואת ישר, או בנוסחה הכללית למציאת האיבר החופשי.",
        solution_steps: [
            { verbal_explanation: "נציב את השיפוע ואת הנקודה בנוסחת משוואת הישר.", math_expression: "y - 6 = 4(x - 1)" },
            { verbal_explanation: "נפתח את הסוגריים באגף ימין על ידי חוק הפילוג.", math_expression: "y - 6 = 4x - 4" },
            { verbal_explanation: "נעביר את המספר לאגף ימין בחיבור כדי לבודד את הפונקציה.", math_expression: "y = 4x - 4 + 6" },
            { verbal_explanation: "נאחד איברים לקבלת המשוואה המפורשת.", math_expression: "y = 4x + 2" }
        ],
        final_answer: "y = 4x + 2"
    },
    {
        topic: "functions",
        subTopic: "חזרה על פונקציה קווית",
        question_text: "מהי נקודת החיתוך של הפונקציה הקווית \\( y = -3x + 15 \\) עם ציר ה-x?",
        options: ["(5, 0)", "(-5, 0)", "(0, 15)", "(15, 0)"],
        correctAnswer: 0,
        hint: "כדי למצוא את נקודת החיתוך עם ציר ה-x, עלינו להציב אפס בערך הפונקציה ולפתור את המשוואה.",
        solution_steps: [
            { verbal_explanation: "נציב אפס במקום ערך הפונקציה.", math_expression: "0 = -3x + 15" },
            { verbal_explanation: "נעביר את האיבר עם המשתנה לאגף השמאלי.", math_expression: "3x = 15" },
            { verbal_explanation: "נחלק במקדם כדי למצוא את שיעור האיקס.", math_expression: "x = 5" },
            { verbal_explanation: "נרשום את התשובה כזוג סדור.", math_expression: "(5, 0)" }
        ],
        final_answer: "(5, 0)"
    },
    {
        topic: "functions",
        subTopic: "חזרה על פונקציה קווית",
        question_text: "מהי נקודת החיתוך של הפונקציה הקווית \\( y = 7x - 4 \\) עם ציר ה-y?",
        options: ["(0, -4)", "(-4, 0)", "(0, 7)", "(\\dfrac{4}{7}, 0)"],
        correctAnswer: 0,
        hint: "כדי למצוא את נקודת החיתוך עם ציר ה-y, יש להציב אפס במקום המשתנה במשוואה.",
        solution_steps: [
            { verbal_explanation: "נציב אפס במקום המשתנה בפונקציה.", math_expression: "y = 7(0) - 4" },
            { verbal_explanation: "נחשב את ערך הפונקציה (האיבר החופשי נשאר).", math_expression: "y = -4" },
            { verbal_explanation: "נרשום כזוג סדור.", math_expression: "(0, -4)" }
        ],
        final_answer: "(0, -4)"
    },
    {
        topic: "functions",
        subTopic: "חזרה על פונקציה קווית",
        question_text: "מהי נקודת החיתוך בין שני הישרים הבאים?\n\\( y = 2x - 5 \\)\n\\( y = -x + 7 \\)",
        options: ["(4, 3)", "(3, 4)", "(-4, -3)", "(4, 11)"],
        correctAnswer: 0,
        hint: "השוו את שתי המשוואות אחת לשנייה, מצאו את המשתנה, ולאחר מכן הציבו כדי למצוא את ערך הפונקציה.",
        solution_steps: [
            { verbal_explanation: "נשווה בין שני הביטויים של הפונקציות כדי למצוא את המפגש.", math_expression: "2x - 5 = -x + 7" },
            { verbal_explanation: "נעביר משתנים לאגף אחד ומספרים לאגף השני.", math_expression: "2x + x = 7 + 5" },
            { verbal_explanation: "נכנס איברים ונחלק במקדם.", math_expression: "3x = 12 \\Rightarrow x = 4" },
            { verbal_explanation: "נציב את הערך באחת המשוואות למציאת ערך הפונקציה.", math_expression: "y = 2(4) - 5 = 3" },
            { verbal_explanation: "נקודת המפגש הסופית.", math_expression: "(4, 3)" }
        ],
        final_answer: "(4, 3)"
    },
    {
        topic: "functions",
        subTopic: "חזרה על פונקציה קווית",
        question_text: "איזה מהישרים הבאים מקביל לישר \\( y = -4x + 9 \\)?",
        options: ["y = -4x - 2", "y = 4x + 9", "y = -\\dfrac{1}{4}x + 9", "y = \\dfrac{1}{4}x - 2"],
        correctAnswer: 0,
        hint: "ישרים מקבילים חייבים להיות בעלי שיפוע זהה בדיוק.",
        solution_steps: [
            { verbal_explanation: "נזהה את השיפוע של הישר הנתון (המקדם של המשתנה).", math_expression: "m = -4" },
            { verbal_explanation: "נחפש באפשרויות ישר בעל שיפוע זהה.", math_expression: "y = -4x - 2" }
        ],
        final_answer: "y = -4x - 2"
    },
    {
        topic: "functions",
        subTopic: "חזרה על פונקציה קווית",
        question_text: "מהו תחום החיוביות של הפונקציה הקווית \\( y = -2x + 10 \\)?",
        options: ["x < 5", "x > 5", "x > -5", "x < 10"],
        correctAnswer: 0,
        hint: "תחום חיוביות הוא התחום שבו הפונקציה גדולה מאפס. פתרו אי שוויון, וזכרו את חוק החלוקה במספר שלילי.",
        solution_steps: [
            { verbal_explanation: "נרשום אי שוויון הדורש שערך הפונקציה יהיה חיובי.", math_expression: "-2x + 10 > 0" },
            { verbal_explanation: "נעביר את המספר לאגף ימין בחיסור.", math_expression: "-2x > -10" },
            { verbal_explanation: "נחלק במספר שלילי, ולכן נהפוך את כיוון אי השוויון.", math_expression: "x < 5" }
        ],
        final_answer: "x < 5"
    },
    {
        topic: "functions",
        subTopic: "חזרה על פונקציה קווית",
        question_text: "מהו תחום השליליות של הפונקציה הקווית \\( y = 3x - 12 \\)?",
        options: ["x < 4", "x > 4", "x > -4", "x < 12"],
        correctAnswer: 0,
        hint: "תחום שליליות מתקבל כאשר הפונקציה קטנה מאפס.",
        solution_steps: [
            { verbal_explanation: "נרשום אי שוויון שבו הפונקציה קטנה מאפס.", math_expression: "3x - 12 < 0" },
            { verbal_explanation: "נעביר את המספר לאגף ימין.", math_expression: "3x < 12" },
            { verbal_explanation: "נחלק במקדם החיובי.", math_expression: "x < 4" }
        ],
        final_answer: "x < 4"
    },
    {
        topic: "functions",
        subTopic: "חזרה על פונקציה קווית",
        question_text: "ישר עובר דרך הנקודות \\( (0, -4) \\) ו- \\( (2, 0) \\). מהי משוואת הישר?" + svgLin,
        options: ["y = 2x - 4", "y = -2x - 4", "y = 0.5x - 4", "y = 2x + 4"],
        correctAnswer: 0,
        hint: "הנקודה הראשונה נותנת לכם את נקודת החיתוך עם הציר האנכי ישירות. חשבו רק את השיפוע.",
        solution_steps: [
            { verbal_explanation: "הנקודה הראשונה נמצאת על הציר האנכי, לכן אנו יודעים את האיבר החופשי.", math_expression: "b = -4" },
            { verbal_explanation: "נחשב את השיפוע בעזרת שתי הנקודות.", math_expression: "m = \\dfrac{0 - (-4)}{2 - 0} = \\dfrac{4}{2} = 2" },
            { verbal_explanation: "נרכיב את משוואת הישר.", math_expression: "y = 2x - 4" }
        ],
        final_answer: "y = 2x - 4"
    },
    {
        topic: "functions",
        subTopic: "חזרה על פונקציה קווית",
        question_text: "הישר \\( y = -x + 6 \\) יוצר משולש ישר זווית יחד עם הצירים. מהו שטח המשולש?",
        options: ["18", "36", "12", "6"],
        correctAnswer: 0,
        hint: "מצאו את נקודות החיתוך עם הצירים, אלו הם הניצבים של המשולש.",
        solution_steps: [
            { verbal_explanation: "נמצא חיתוך עם הציר האנכי.", math_expression: "y = -0 + 6 = 6" },
            { verbal_explanation: "נמצא חיתוך עם הציר האופקי.", math_expression: "0 = -x + 6 \\Rightarrow x = 6" },
            { verbal_explanation: "נחשב את שטח המשולש (מכפלת הניצבים חלקי שתיים).", math_expression: "\\dfrac{6 \\times 6}{2} = 18" }
        ],
        final_answer: "18"
    },
    {
        topic: "functions",
        subTopic: "חזרה על פונקציה קווית",
        question_text: "ישר א' שיפועו 2. ישר ב' מאונך לישר א'. מהו שיפועו של ישר ב'?",
        options: ["-\\dfrac{1}{2}", "\\dfrac{1}{2}", "-2", "2"],
        correctAnswer: 0,
        hint: "מכפלת שיפועים של ישרים מאונכים היא מינוס 1. לכן, השיפוע המאונך הוא נגדי והופכי.",
        solution_steps: [
            { verbal_explanation: "הקשר בין שיפועים מאונכים.", math_expression: "m_1 \\times m_2 = -1" },
            { verbal_explanation: "נציב את השיפוע הנתון.", math_expression: "2 \\times m_2 = -1" },
            { verbal_explanation: "נחלק ב-2 למציאת השיפוע המאונך.", math_expression: "m_2 = -\\dfrac{1}{2}" }
        ],
        final_answer: "-\\dfrac{1}{2}"
    },
    {
        topic: "functions",
        subTopic: "חזרה על פונקציה קווית",
        question_text: "מתי הפונקציה הקווית \\( y = 5x - 15 \\) מקבלת את הערך 10?",
        options: ["x = 5", "x = 3", "x = 2", "x = 10"],
        correctAnswer: 0,
        hint: "הציבו את הערך המבוקש במקום ערך הפונקציה ופתרו את המשוואה.",
        solution_steps: [
            { verbal_explanation: "נציב 10 במשוואה.", math_expression: "10 = 5x - 15" },
            { verbal_explanation: "נעביר את המספר לאגף השני.", math_expression: "10 + 15 = 5x" },
            { verbal_explanation: "נחלק במקדם.", math_expression: "25 = 5x \\Rightarrow x = 5" }
        ],
        final_answer: "x = 5"
    },

    // ==========================================================
    // תת נושא 2: היכרות עם הפרבולה (y=ax^2+bx+c) (12 שאלות)
    // ==========================================================
    {
        topic: "functions",
        subTopic: "היכרות עם הפרבולה (y=ax^2+bx+c)",
        question_text: "בפרבולה הנתונה \\( y = 3x^2 - 4x + 7 \\), מהם ערכי המקדמים a, b, c?" + svgParabIntro,
        options: ["a=3, b=-4, c=7", "a=3, b=4, c=7", "a=-4, b=3, c=7", "a=3x, b=-4, c=7"],
        correctAnswer: 0,
        hint: "המקדם a נמצא ליד החזקה השנייה, המקדם b נמצא ליד המשתנה הבודד, והמקדם c הוא המספר החופשי.",
        solution_steps: [
            { verbal_explanation: "נזהה את המקדם של החזקה השנייה.", math_expression: "a = 3" },
            { verbal_explanation: "נזהה את המקדם של המשתנה הבודד (כולל הסימן).", math_expression: "b = -4" },
            { verbal_explanation: "נזהה את המספר החופשי.", math_expression: "c = 7" },
            { verbal_explanation: "התשובה המלאה.", math_expression: "a=3, b=-4, c=7" }
        ],
        final_answer: "a=3, b=-4, c=7"
    },
    {
        topic: "functions",
        subTopic: "היכרות עם הפרבולה (y=ax^2+bx+c)",
        question_text: "מהם המקדמים בפרבולה הנתונה \\( y = -x^2 + 9 \\)?",
        options: ["a=-1, b=0, c=9", "a=-1, b=9, c=0", "a=1, b=0, c=9", "a=0, b=-1, c=9"],
        correctAnswer: 0,
        hint: "אם מחובר חסר במשוואה (כמו המשתנה ממעלה ראשונה), המקדם שלו הוא אפס.",
        solution_steps: [
            { verbal_explanation: "המקדם של החזקה השנייה הוא מינוס אחד.", math_expression: "a = -1" },
            { verbal_explanation: "מכיוון שאין משתנה בודד במשוואה, המקדם שלו אפס.", math_expression: "b = 0" },
            { verbal_explanation: "המספר החופשי הוא 9.", math_expression: "c = 9" },
            { verbal_explanation: "התשובה המלאה.", math_expression: "a=-1, b=0, c=9" }
        ],
        final_answer: "a=-1, b=0, c=9"
    },
    {
        topic: "functions",
        subTopic: "היכרות עם הפרבולה (y=ax^2+bx+c)",
        question_text: "לאיזה כיוון נפתחת הפרבולה \\( y = -4x^2 + 5x - 2 \\)?" + svgParabIntro,
        options: ["כלפי מטה (קודקוד מקסימום)", "כלפי מעלה (קודקוד מינימום)", "ימינה", "שמאלה"],
        correctAnswer: 0,
        hint: "כיוון הפתיחה תלוי אך ורק בסימן של המקדם a.",
        solution_steps: [
            { verbal_explanation: "נזהה את המקדם של החזקה השנייה.", math_expression: "a = -4" },
            { verbal_explanation: "מכיוון שהמקדם שלילי, הפרבולה 'עצובה' ונפתחת כלפי מטה.", math_expression: "a < 0" }
        ],
        final_answer: "כלפי מטה (קודקוד מקסימום)"
    },
    {
        topic: "functions",
        subTopic: "היכרות עם הפרבולה (y=ax^2+bx+c)",
        question_text: "לאיזה כיוון נפתחת הפרבולה \\( y = 0.5x^2 - 8 \\)?",
        options: ["כלפי מעלה (קודקוד מינימום)", "כלפי מטה (קודקוד מקסימום)", "לא ניתן לדעת", "תלוי בערך של c"],
        correctAnswer: 0,
        hint: "בדקו האם המקדם הראשון (a) הוא חיובי או שלילי.",
        solution_steps: [
            { verbal_explanation: "נזהה את המקדם של החזקה השנייה.", math_expression: "a = 0.5" },
            { verbal_explanation: "מכיוון שהמקדם חיובי, הפרבולה 'מחייכת' ונפתחת כלפי מעלה.", math_expression: "a > 0" }
        ],
        final_answer: "כלפי מעלה (קודקוד מינימום)"
    },
    {
        topic: "functions",
        subTopic: "היכרות עם הפרבולה (y=ax^2+bx+c)",
        question_text: "האם הנקודה \\( (3, 5) \\) נמצאת על גרף הפרבולה \\( y = x^2 - 4 \\)?",
        options: ["כן", "לא", "אולי", "חסרים נתונים"],
        correctAnswer: 0,
        hint: "הציבו את הערך של המשתנה x בפונקציה ובדקו אם התוצאה שווה לערך הנקודה.",
        solution_steps: [
            { verbal_explanation: "נציב את הערך 3 במשוואה.", math_expression: "y = 3^2 - 4" },
            { verbal_explanation: "נחשב את ערך החזקה ואת ההפרש.", math_expression: "y = 9 - 4 = 5" },
            { verbal_explanation: "התוצאה שקיבלנו שווה לערך הנתון בנקודה, לכן היא נמצאת על הגרף.", math_expression: "5 = 5" }
        ],
        final_answer: "כן"
    },
    {
        topic: "functions",
        subTopic: "היכרות עם הפרבולה (y=ax^2+bx+c)",
        question_text: "מהו ערכה של הפונקציה הריבועית \\( y = 2x^2 - 3x + 1 \\) כאשר \\( x = -2 \\)?",
        options: ["15", "3", "11", "-5"],
        correctAnswer: 0,
        hint: "הציבו מינוס 2 בזהירות. זכרו שמינוס המועלה בריבוע הופך לחיובי.",
        solution_steps: [
            { verbal_explanation: "נציב את הערך השלילי בתוך סוגריים במשוואה.", math_expression: "y = 2(-2)^2 - 3(-2) + 1" },
            { verbal_explanation: "נחשב את החזקה ואת המכפלות.", math_expression: "y = 2(4) + 6 + 1" },
            { verbal_explanation: "נחבר את כל הערכים.", math_expression: "y = 8 + 6 + 1 = 15" }
        ],
        final_answer: "15"
    },
    {
        topic: "functions",
        subTopic: "היכרות עם הפרבולה (y=ax^2+bx+c)",
        question_text: "נתון שגרף הפרבולה \\( y = x^2 + bx + 5 \\) עובר דרך הנקודה \\( (1, 10) \\). מהו הערך של b?",
        options: ["4", "5", "6", "10"],
        correctAnswer: 0,
        hint: "הציבו את שיעורי הנקודה הנתונה במשוואה ופתרו עבור הנעלם.",
        solution_steps: [
            { verbal_explanation: "נציב את הנקודה במשוואה הכללית.", math_expression: "10 = 1^2 + b(1) + 5" },
            { verbal_explanation: "נחשב את המספרים.", math_expression: "10 = 1 + b + 5" },
            { verbal_explanation: "נעביר אגפים ונפתור.", math_expression: "10 = 6 + b \\Rightarrow b = 4" }
        ],
        final_answer: "4"
    },
    {
        topic: "functions",
        subTopic: "היכרות עם הפרבולה (y=ax^2+bx+c)",
        question_text: "באיזו נקודה חותכת הפרבולה \\( y = -5x^2 + 2x - 8 \\) את ציר ה-y?",
        options: ["(0, -8)", "(-8, 0)", "(0, 8)", "(0, -5)"],
        correctAnswer: 0,
        hint: "נקודת החיתוך עם הציר האנכי מתקבלת תמיד כאשר מציבים אפס במשתנה התלוי. זהו למעשה המקדם החופשי.",
        solution_steps: [
            { verbal_explanation: "נציב אפס בפונקציה.", math_expression: "y = -5(0)^2 + 2(0) - 8" },
            { verbal_explanation: "שני האיברים הראשונים מתאפסים, ונשאר האיבר החופשי.", math_expression: "y = -8" },
            { verbal_explanation: "נרשום כזוג סדור.", math_expression: "(0, -8)" }
        ],
        final_answer: "(0, -8)"
    },
    {
        topic: "functions",
        subTopic: "היכרות עם הפרבולה (y=ax^2+bx+c)",
        question_text: "איזה משפט מתאר בצורה הנכונה ביותר את הפרבולה \\( y = x^2 + 12 \\)?",
        options: ["פתוחה כלפי מעלה וחותכת את הציר האנכי ב-12", "פתוחה כלפי מטה וחותכת ב-12", "פתוחה כלפי מעלה ועוברת בראשית", "לא חותכת את הציר האנכי"],
        correctAnswer: 0,
        hint: "בדקו את הסימן של המקדם a לכיוון הפתיחה, ואת המקדם c לחיתוך האנכי.",
        solution_steps: [
            { verbal_explanation: "המקדם הראשון חיובי ולכן היא פתוחה כלפי מעלה.", math_expression: "a = 1 > 0" },
            { verbal_explanation: "האיבר החופשי קובע את החיתוך האנכי.", math_expression: "c = 12" },
            { verbal_explanation: "השילוב נותן את התשובה הנכונה.", math_expression: "" }
        ],
        final_answer: "פתוחה כלפי מעלה וחותכת את הציר האנכי ב-12"
    },
    {
        topic: "functions",
        subTopic: "היכרות עם הפרבולה (y=ax^2+bx+c)",
        question_text: "איזו פרבולה רחבה יותר ('פתוחה' יותר) ביחס לצירים: \\( y = 5x^2 \\) או \\( y = \\dfrac{1}{4}x^2 \\)?",
        options: ["\\( y = \\dfrac{1}{4}x^2 \\)", "\\( y = 5x^2 \\)", "שתיהן ברוחב זהה", "לא ניתן לדעת"],
        correctAnswer: 0,
        hint: "ככל שהערך המוחלט של המקדם a קרוב יותר לאפס (שבר קטן), כך הפרבולה 'מטפסת' לאט יותר ורחבה יותר.",
        solution_steps: [
            { verbal_explanation: "נשווה את הערכים המוחלטים של המקדמים.", math_expression: "|\\dfrac{1}{4}| < |5|" },
            { verbal_explanation: "מקדם קטן יותר מעיד על קצב גדילה איטי יותר, כלומר פרבולה רחבה יותר.", math_expression: "" }
        ],
        final_answer: "\\( y = \\dfrac{1}{4}x^2 \\)"
    },
    {
        topic: "functions",
        subTopic: "היכרות עם הפרבולה (y=ax^2+bx+c)",
        question_text: "מהי נקודת הקודקוד של הפרבולה הבסיסית \\( y = -7x^2 \\)?",
        options: ["(0, 0)", "(0, -7)", "(-7, 0)", "(1, -7)"],
        correctAnswer: 0,
        hint: "בפרבולה שחסרים בה המקדמים b ו-c, הקודקוד נמצא תמיד בראשית הצירים.",
        solution_steps: [
            { verbal_explanation: "נציב אפס בפונקציה כדי למצוא את המיקום המרכזי.", math_expression: "y = -7(0)^2 = 0" },
            { verbal_explanation: "התוצאה היא ראשית הצירים.", math_expression: "(0, 0)" }
        ],
        final_answer: "(0, 0)"
    },
    {
        topic: "functions",
        subTopic: "היכרות עם הפרבולה (y=ax^2+bx+c)",
        question_text: "שתי נקודות על פרבולה הן \\( (4, 10) \\) ו- \\( (-4, 10) \\). מהו ציר הסימטריה של הפרבולה הזו?",
        options: ["x = 0", "x = 4", "y = 10", "x = -4"],
        correctAnswer: 0,
        hint: "ציר הסימטריה נמצא בדיוק באמצע בין כל שתי נקודות סימטריות (בעלות אותו גובה). חשבו את הממוצע.",
        solution_steps: [
            { verbal_explanation: "נחשב את הממוצע בין ערכי האופק של הנקודות.", math_expression: "\\dfrac{4 + (-4)}{2}" },
            { verbal_explanation: "הסכום במונה הוא אפס.", math_expression: "\\dfrac{0}{2} = 0" },
            { verbal_explanation: "ציר הסימטריה הוא הישר האנכי העובר באפס.", math_expression: "x = 0" }
        ],
        final_answer: "x = 0"
    },

    // ==========================================================
    // תת נושא 3: קודקוד, ציר סימטריה ונקודות אפס (12 שאלות)
    // ==========================================================
    {
        topic: "functions",
        subTopic: "קודקוד, ציר סימטריה ונקודות אפס",
        question_text: "מהו ציר הסימטריה של הפרבולה \\( y = x^2 - 8x + 12 \\)?" + svgVertexRoots,
        options: ["x = 4", "x = -4", "x = 8", "x = -8"],
        correctAnswer: 0,
        hint: "השתמשו בנוסחה למציאת ציר הסימטריה (וערך הקודקוד): x = -b / 2a.",
        solution_steps: [
            { verbal_explanation: "נזהה את המקדמים הרלוונטיים לנוסחה.", math_expression: "a = 1, b = -8" },
            { verbal_explanation: "נציב את הערכים בנוסחת הקודקוד.", math_expression: "x = \\dfrac{-(-8)}{2 \\times 1}" },
            { verbal_explanation: "נחשב את השבר.", math_expression: "x = \\dfrac{8}{2} = 4" }
        ],
        final_answer: "x = 4"
    },
    {
        topic: "functions",
        subTopic: "קודקוד, ציר סימטריה ונקודות אפס",
        question_text: "מצאו את מיקום האופקי (x) של הקודקוד בפרבולה \\( y = -2x^2 - 12x + 5 \\).",
        options: ["x = -3", "x = 3", "x = -6", "x = 6"],
        correctAnswer: 0,
        hint: "השתמשו בנוסחה x = -b / 2a. שימו לב היטב לסימנים השליליים.",
        solution_steps: [
            { verbal_explanation: "נזהה את המקדמים.", math_expression: "a = -2, b = -12" },
            { verbal_explanation: "נציב בנוסחה כולל הסימנים.", math_expression: "x = \\dfrac{-(-12)}{2 \\times (-2)}" },
            { verbal_explanation: "נחשב את המונה והמכנה בנפרד.", math_expression: "x = \\dfrac{12}{-4} = -3" }
        ],
        final_answer: "x = -3"
    },
    {
        topic: "functions",
        subTopic: "קודקוד, ציר סימטריה ונקודות אפס",
        question_text: "מצאו את נקודת הקודקוד המלאה של הפרבולה \\( y = x^2 - 4x + 1 \\).",
        options: ["(2, -3)", "(2, 1)", "(-2, 13)", "(4, 1)"],
        correctAnswer: 0,
        hint: "תחילה מצאו את המיקום האופקי בעזרת הנוסחה, ולאחר מכן הציבו את התוצאה במשוואה המקורית כדי למצוא את הגובה.",
        solution_steps: [
            { verbal_explanation: "שלב א: נחשב את מיקום האופק של הקודקוד.", math_expression: "x = \\dfrac{-(-4)}{2 \\times 1} = 2" },
            { verbal_explanation: "שלב ב: נציב את הערך במשוואה כדי למצוא את הגובה.", math_expression: "y = 2^2 - 4(2) + 1" },
            { verbal_explanation: "שלב ג: נחשב את הערך.", math_expression: "y = 4 - 8 + 1 = -3" },
            { verbal_explanation: "נרשום כנקודה.", math_expression: "(2, -3)" }
        ],
        final_answer: "(2, -3)"
    },
    {
        topic: "functions",
        subTopic: "קודקוד, ציר סימטריה ונקודות אפס",
        question_text: "מהן נקודות האפס (חיתוך עם ציר אופקי) של הפונקציה \\( y = x^2 - 7x + 10 \\)?" + svgVertexRoots,
        options: ["2, 5", "-2, -5", "10, -7", "7, 10"],
        correctAnswer: 0,
        hint: "השוו את הפונקציה לאפס ופתרו את המשוואה הריבועית (אפשר בעזרת פירוק לטרינום: אילו שני מספרים מכפלתם 10 וסכומם מינוס 7?).",
        solution_steps: [
            { verbal_explanation: "נשווה לאפס ונחפש פירוק לגורמים (טרינום).", math_expression: "x^2 - 7x + 10 = 0" },
            { verbal_explanation: "נפרק לשני ביטויים שמכפלתם 10 וסכומם מינוס 7.", math_expression: "(x - 2)(x - 5) = 0" },
            { verbal_explanation: "נחלץ את הפתרונות המאפסים כל סוגריים.", math_expression: "x = 2 \\quad , \\quad x = 5" }
        ],
        final_answer: "2, 5"
    },
    {
        topic: "functions",
        subTopic: "קודקוד, ציר סימטריה ונקודות אפס",
        question_text: "מהן נקודות האפס של הפרבולה \\( y = -x^2 + 25 \\)?",
        options: ["5, -5", "25", "5", "אין פתרון"],
        correctAnswer: 0,
        hint: "השוו לאפס, העבירו את המשתנה אגף כדי להפוך אותו לחיובי, והוציאו שורש ריבועי.",
        solution_steps: [
            { verbal_explanation: "נשווה לאפס את המשוואה.", math_expression: "-x^2 + 25 = 0" },
            { verbal_explanation: "נעביר את המשתנה אגף.", math_expression: "25 = x^2" },
            { verbal_explanation: "נוציא שורש ריבועי ונזכור את שני הפתרונות.", math_expression: "x = \\pm 5" }
        ],
        final_answer: "5, -5"
    },
    {
        topic: "functions",
        subTopic: "קודקוד, ציר סימטריה ונקודות אפס",
        question_text: "מהן נקודות האפס של הפרבולה החסרה \\( y = 2x^2 - 12x \\)?",
        options: ["0, 6", "0, -6", "6", "0"],
        correctAnswer: 0,
        hint: "השוו לאפס והוציאו גורם משותף (את המשתנה ו/או המקדם) כדי לפרק את המשוואה.",
        solution_steps: [
            { verbal_explanation: "נשווה לאפס.", math_expression: "2x^2 - 12x = 0" },
            { verbal_explanation: "נוציא גורם משותף מחוץ לסוגריים.", math_expression: "2x(x - 6) = 0" },
            { verbal_explanation: "הפתרונות מתקבלים מאיפוס כל אחד מהגורמים.", math_expression: "2x = 0 \\Rightarrow x = 0 \\quad , \\quad x - 6 = 0 \\Rightarrow x = 6" }
        ],
        final_answer: "0, 6"
    },
    {
        topic: "functions",
        subTopic: "קודקוד, ציר סימטריה ונקודות אפס",
        question_text: "כמה נקודות אפס יש לפונקציה \\( y = x^2 + x + 8 \\)?",
        options: ["אפס נקודות", "נקודה אחת", "שתי נקודות", "אינסוף"],
        correctAnswer: 0,
        hint: "בדקו את הדיסקרימיננטה (דלתא). אם היא שלילית, אין פתרון למשוואה ולכן אין נקודות חיתוך.",
        solution_steps: [
            { verbal_explanation: "נחשב את ערך הדיסקרימיננטה.", math_expression: "\\Delta = b^2 - 4ac" },
            { verbal_explanation: "נציב את המקדמים.", math_expression: "\\Delta = 1^2 - 4(1)(8)" },
            { verbal_explanation: "נחשב את הערך.", math_expression: "\\Delta = 1 - 32 = -31" },
            { verbal_explanation: "מכיוון שהערך שלילי, אין פתרון ממשי.", math_expression: "\\Delta < 0" }
        ],
        final_answer: "אפס נקודות"
    },
    {
        topic: "functions",
        subTopic: "קודקוד, ציר סימטריה ונקודות אפס",
        question_text: "כמה נקודות אפס יש לפרבולה \\( y = x^2 - 10x + 25 \\)?",
        options: ["נקודה אחת", "שתי נקודות", "אפס נקודות", "שלוש נקודות"],
        correctAnswer: 0,
        hint: "האם אתם מזהים כאן נוסחת כפל מקוצר? אם כן, המשמעות היא שיש רק שורש אחד זהה.",
        solution_steps: [
            { verbal_explanation: "נזהה שהביטוי הוא ריבוע של הפרש (נוסחת כפל מקוצר).", math_expression: "(x - 5)^2 = 0" },
            { verbal_explanation: "המשוואה מתאפסת רק בערך אחד.", math_expression: "x = 5" },
            { verbal_explanation: "לכן יש רק נקודת חיתוך אחת.", math_expression: "" }
        ],
        final_answer: "נקודה אחת"
    },
    {
        topic: "functions",
        subTopic: "קודקוד, ציר סימטריה ונקודות אפס",
        question_text: "מהו המרחק בין שתי נקודות האפס של הפרבולה \\( y = x^2 - 2x - 8 \\)?",
        options: ["6", "2", "8", "4"],
        correctAnswer: 0,
        hint: "מצאו את שתי הנקודות המאפסות את הפונקציה (טרינום או נוסחת שורשים), ואז חשבו את ההפרש ביניהן.",
        solution_steps: [
            { verbal_explanation: "נשווה לאפס ונפרק לטרינום.", math_expression: "(x - 4)(x + 2) = 0" },
            { verbal_explanation: "הפתרונות הם הנקודות שעל הציר.", math_expression: "x_1 = 4 \\quad , \\quad x_2 = -2" },
            { verbal_explanation: "נחשב את המרחק (הפרש בערך מוחלט).", math_expression: "4 - (-2) = 6" }
        ],
        final_answer: "6"
    },
    {
        topic: "functions",
        subTopic: "קודקוד, ציר סימטריה ונקודות אפס",
        question_text: "ידוע שקודקוד פרבולה נמצא בנקודה שבה \\( x = 4 \\). אחת מנקודות האפס שלה היא ב- \\( x = 7 \\). היכן נמצאת נקודת האפס השנייה?",
        options: ["x = 1", "x = -1", "x = 11", "x = 0"],
        correctAnswer: 0,
        hint: "הפרבולה סימטרית. המרחק מהקודקוד לנקודת האפס הראשונה שווה למרחק לנקודה השנייה בכיוון הנגדי.",
        solution_steps: [
            { verbal_explanation: "נחשב את המרחק מציר הסימטריה לנקודה הידועה.", math_expression: "7 - 4 = 3" },
            { verbal_explanation: "נלך את אותו מרחק בדיוק לכיוון השני מהקודקוד.", math_expression: "4 - 3 = 1" },
            { verbal_explanation: "הנקודה השנייה ממוקמת שם.", math_expression: "x = 1" }
        ],
        final_answer: "x = 1"
    },
    {
        topic: "functions",
        subTopic: "קודקוד, ציר סימטריה ונקודות אפס",
        question_text: "נקודות האפס של פרבולה הן ב- \\( x = -3 \\) וב- \\( x = 9 \\). מהי משוואת ציר הסימטריה שלה?",
        options: ["x = 3", "x = 6", "x = -3", "x = 4.5"],
        correctAnswer: 0,
        hint: "ציר הסימטריה הוא הממוצע של כל שתי נקודות סימטריות, ובפרט נקודות האפס.",
        solution_steps: [
            { verbal_explanation: "נחשב את הממוצע בין שתי הנקודות.", math_expression: "x = \\dfrac{-3 + 9}{2}" },
            { verbal_explanation: "נחשב את הערך במונה ונחלק.", math_expression: "x = \\dfrac{6}{2} = 3" }
        ],
        final_answer: "x = 3"
    },
    {
        topic: "functions",
        subTopic: "קודקוד, ציר סימטריה ונקודות אפס",
        question_text: "מהו הערך המקסימלי שמקבלת הפונקציה \\( y = -x^2 + 6x - 1 \\)?",
        options: ["8", "3", "1", "10"],
        correctAnswer: 0,
        hint: "מכיוון שהפרבולה 'עצובה', נקודת הקודקוד היא המקסימום. מצאו את מיקום הקודקוד והציבו לקבלת הערך.",
        solution_steps: [
            { verbal_explanation: "נמצא את מיקום הקודקוד האופקי.", math_expression: "x = \\dfrac{-6}{2(-1)} = 3" },
            { verbal_explanation: "נציב את הערך בפונקציה למציאת הגובה המקסימלי. שימו לב שהמינוס נשאר בחוץ לפני הריבוע.", math_expression: "y = -(3^2) + 6(3) - 1" },
            { verbal_explanation: "נחשב את התוצאה.", math_expression: "y = -9 + 18 - 1 = 8" }
        ],
        final_answer: "8"
    },

    // ==========================================================
    // 4. תחומי עלייה וירידה, חיוביות ושליליות (12 שאלות)
    // ==========================================================
    {
        topic: "functions",
        subTopic: "תחומי עלייה וירידה, חיוביות ושליליות",
        question_text: "מהו תחום העלייה של הפרבולה \\( y = x^2 - 4x + 3 \\)?" + svgDomains,
        options: ["x > 2", "x < 2", "x > 4", "x > 0"],
        correctAnswer: 0,
        hint: "מצאו את מיקום הקודקוד. פרבולה שפתוחה כלפי מעלה עולה מימין לקודקוד.",
        solution_steps: [
            { verbal_explanation: "נמצא את מיקום הקודקוד.", math_expression: "x = \\dfrac{-(-4)}{2} = 2" },
            { verbal_explanation: "הפרבולה 'מחייכת', לכן היא עולה לאחר נקודת המינימום שלה.", math_expression: "x > 2" }
        ],
        final_answer: "x > 2"
    },
    {
        topic: "functions",
        subTopic: "תחומי עלייה וירידה, חיוביות ושליליות",
        question_text: "מהו תחום הירידה של הפרבולה \\( y = x^2 - 6x + 8 \\)?",
        options: ["x < 3", "x > 3", "x < 6", "x < 8"],
        correctAnswer: 0,
        hint: "מכיוון שהפרבולה פתוחה כלפי מעלה, היא יורדת משמאל לקודקוד.",
        solution_steps: [
            { verbal_explanation: "נחשב את הקודקוד.", math_expression: "x = \\dfrac{-(-6)}{2} = 3" },
            { verbal_explanation: "פרבולה 'מחייכת' יורדת לפני נקודת המינימום.", math_expression: "x < 3" }
        ],
        final_answer: "x < 3"
    },
    {
        topic: "functions",
        subTopic: "תחומי עלייה וירידה, חיוביות ושליליות",
        question_text: "מהו תחום העלייה של הפרבולה \\( y = -x^2 + 8x \\)?",
        options: ["x < 4", "x > 4", "x < 8", "x > 0"],
        correctAnswer: 0,
        hint: "הפרבולה פתוחה כלפי מטה. פרבולה 'עצובה' עולה משמאל לקודקוד המקסימום שלה.",
        solution_steps: [
            { verbal_explanation: "נמצא את הקודקוד.", math_expression: "x = \\dfrac{-8}{2(-1)} = 4" },
            { verbal_explanation: "הפרבולה 'עצובה' לכן העלייה שלה מתרחשת לפני הקודקוד.", math_expression: "x < 4" }
        ],
        final_answer: "x < 4"
    },
    {
        topic: "functions",
        subTopic: "תחומי עלייה וירידה, חיוביות ושליליות",
        question_text: "מהו תחום הירידה של הפרבולה \\( y = -2x^2 - 12x \\)?" + svgDomains,
        options: ["x > -3", "x < -3", "x > -6", "x < -6"],
        correctAnswer: 0,
        hint: "פרבולה שפתוחה כלפי מטה מתחילה לרדת מימין לנקודת המקסימום.",
        solution_steps: [
            { verbal_explanation: "נחשב את הקודקוד. זהירות עם הסימנים.", math_expression: "x = \\dfrac{-(-12)}{2(-2)} = \\dfrac{12}{-4} = -3" },
            { verbal_explanation: "הירידה מתרחשת אחרי נקודת השיא.", math_expression: "x > -3" }
        ],
        final_answer: "x > -3"
    },
    {
        topic: "functions",
        subTopic: "תחומי עלייה וירידה, חיוביות ושליליות",
        question_text: "מהו תחום החיוביות של הפרבולה \\( y = x^2 - 9 \\)?",
        options: ["x > 3 או x < -3", "-3 < x < 3", "x > 3", "x > 9"],
        correctAnswer: 0,
        hint: "מצאו את נקודות האפס. פרבולה 'מחייכת' מקבלת ערכים חיוביים (מעל הציר) מחוץ לתחום שבין השורשים.",
        solution_steps: [
            { verbal_explanation: "נמצא את החיתוך עם ציר איקס.", math_expression: "x^2 - 9 = 0 \\Rightarrow x = \\pm 3" },
            { verbal_explanation: "הפרבולה מחייכת, ולכן הזרועות שלה עולות מעל הציר מחוץ לשורשים.", math_expression: "x > 3 \\quad , \\quad x < -3" }
        ],
        final_answer: "x > 3 או x < -3"
    },
    {
        topic: "functions",
        subTopic: "תחומי עלייה וירידה, חיוביות ושליליות",
        question_text: "מהו תחום השליליות של הפונקציה \\( y = x^2 - 25 \\)?",
        options: ["-5 < x < 5", "x > 5 או x < -5", "x < 5", "x > 0"],
        correctAnswer: 0,
        hint: "פרבולה 'מחייכת' נמצאת מתחת לציר (ערכים שליליים) בין נקודות האפס שלה.",
        solution_steps: [
            { verbal_explanation: "נמצא את השורשים.", math_expression: "x^2 - 25 = 0 \\Rightarrow x = \\pm 5" },
            { verbal_explanation: "החלק ש'קעור' כלפי מטה נמצא בין הערכים הללו.", math_expression: "-5 < x < 5" }
        ],
        final_answer: "-5 < x < 5"
    },
    {
        topic: "functions",
        subTopic: "תחומי עלייה וירידה, חיוביות ושליליות",
        question_text: "מהו תחום החיוביות של הפרבולה \\( y = -x^2 + 16 \\)?",
        options: ["-4 < x < 4", "x > 4 או x < -4", "x < 4", "x > 0"],
        correctAnswer: 0,
        hint: "זוהי פרבולה 'עצובה' (קודקוד מעל הציר). היא חיובית בין שתי נקודות האפס שתוחמות את 'הגבעה'.",
        solution_steps: [
            { verbal_explanation: "נמצא את החיתוכים.", math_expression: "-x^2 + 16 = 0 \\Rightarrow x = \\pm 4" },
            { verbal_explanation: "מכיוון שהפרבולה הפוכה, הגבעה שמעל הציר נמצאת בין השורשים.", math_expression: "-4 < x < 4" }
        ],
        final_answer: "-4 < x < 4"
    },
    {
        topic: "functions",
        subTopic: "תחומי עלייה וירידה, חיוביות ושליליות",
        question_text: "מהו תחום השליליות של הפונקציה \\( y = -x^2 + 4x - 3 \\)?",
        options: ["x > 3 או x < 1", "1 < x < 3", "x > 2", "x < 3"],
        correctAnswer: 0,
        hint: "פרבולה 'עצובה' שלילית בשתי הזרועות שיורדות כלפי מטה מחוץ לנקודות האפס.",
        solution_steps: [
            { verbal_explanation: "נשווה לאפס ונמצא שורשים על ידי פתרון משוואה (או טרינום לאחר שינוי סימן).", math_expression: "x^2 - 4x + 3 = 0 \\Rightarrow x_1=1, x_2=3" },
            { verbal_explanation: "הזרועות היורדות מתחת לציר נמצאות מחוץ לשורשים.", math_expression: "x > 3 \\quad , \\quad x < 1" }
        ],
        final_answer: "x > 3 או x < 1"
    },
    {
        topic: "functions",
        subTopic: "תחומי עלייה וירידה, חיוביות ושליליות",
        question_text: "מתי הפונקציה \\( y = x^2 + 5 \\) מקבלת ערכים חיוביים?",
        options: ["תמיד (לכל x)", "x > 5", "x > 0", "אף פעם"],
        correctAnswer: 0,
        hint: "נסו לחשוב: מהו הערך המינימלי האפשרי של איקס בריבוע? מה קורה כשמוסיפים לו 5?",
        solution_steps: [
            { verbal_explanation: "ביטוי בריבוע תמיד גדול או שווה לאפס.", math_expression: "x^2 \\ge 0" },
            { verbal_explanation: "הוספת 5 מבטיחה שהפונקציה כולה תמיד תהיה גדולה מ-0 ואין לה שורשים.", math_expression: "y \\ge 5" },
            { verbal_explanation: "הפרבולה 'מרחפת' מעל הציר ולכן חיובית עבור כל ערך אפשרי.", math_expression: "" }
        ],
        final_answer: "תמיד (לכל x)"
    },
    {
        topic: "functions",
        subTopic: "תחומי עלייה וירידה, חיוביות ושליליות",
        question_text: "מתי הפונקציה \\( y = -(x-2)^2 \\) חיובית?",
        options: ["אף פעם", "לכל x מלבד 2", "x > 2", "x < 2"],
        correctAnswer: 0,
        hint: "יש לנו ביטוי בריבוע (תמיד חיובי או אפס) שכופלים אותו במינוס. האם התוצאה יכולה אי פעם להיות גדולה מאפס?",
        solution_steps: [
            { verbal_explanation: "הביטוי שבתוך הריבוע מייצר ערכים חיוביים (או אפס במקרה של 2).", math_expression: "(x-2)^2 \\ge 0" },
            { verbal_explanation: "הכפלה בסימן שלילי גורמת לכל התוצאות להיות שליליות (או אפס).", math_expression: "y \\le 0" },
            { verbal_explanation: "לכן, אין אף ערך שבו הפונקציה ממש חיובית.", math_expression: "" }
        ],
        final_answer: "אף פעם"
    },
    {
        topic: "functions",
        subTopic: "תחומי עלייה וירידה, חיוביות ושליליות",
        question_text: "מהו התחום המשותף שבו הפונקציה \\( y = x^2 - 16 \\) גם עולה וגם בעלת ערכים חיוביים?",
        options: ["x > 4", "x > 0", "x < -4", "x > 16"],
        correctAnswer: 0,
        hint: "זהו שאלת חיתוך תחומים. מצאו היכן היא עולה, מצאו היכן היא חיובית, ומצאו את התחום שמשותף לשניהם.",
        solution_steps: [
            { verbal_explanation: "הפרבולה עולה מימין לקודקוד הנמצא בראשית.", math_expression: "x > 0" },
            { verbal_explanation: "הפרבולה חיובית מחוץ לשורשים.", math_expression: "x > 4 \\quad , \\quad x < -4" },
            { verbal_explanation: "חיתוך התחומים ('וגם') משאיר את התחום המשותף היחיד.", math_expression: "x > 4" }
        ],
        final_answer: "x > 4"
    },
    {
        topic: "functions",
        subTopic: "תחומי עלייה וירידה, חיוביות ושליליות",
        question_text: "מהו התחום המשותף שבו הפונקציה \\( y = -x^2 + 6x - 5 \\) יורדת וגם חיובית?",
        options: ["3 < x < 5", "1 < x < 3", "x > 3", "x < 1"],
        correctAnswer: 0,
        hint: "מצאו קודקוד (לעלייה/ירידה) ושורשים (לחיוביות/שליליות). שרטוט סקיצה קטנה יעזור מאוד.",
        solution_steps: [
            { verbal_explanation: "הקודקוד ב-3. זו פרבולה 'עצובה' לכן היא יורדת מימין לו.", math_expression: "x > 3" },
            { verbal_explanation: "השורשים ב-1 ו-5. היא חיובית ('גבעה') ביניהם.", math_expression: "1 < x < 5" },
            { verbal_explanation: "החיתוך בין שני התחומים נותן את החלק שנופל מהפסגה לעבר הציר.", math_expression: "3 < x < 5" }
        ],
        final_answer: "3 < x < 5"
    },

    // ==========================================================
    // 5. פרבולות ושטחים (12 שאלות)
    // ==========================================================
    {
        topic: "functions",
        subTopic: "פרבולות ושטחים",
        question_text: "במשולש שקודקודיו הם שני חיתוכי ה-x והקודקוד של הפרבולה \\( y = x^2 - 4 \\), מהו שטח המשולש?" + svgAreas,
        options: ["8", "16", "4", "12"],
        correctAnswer: 0,
        hint: "הבסיס מונח על ציר ה-x (המרחק בין השורשים), והגובה הוא המרחק מהציר אל קודקוד הפרבולה.",
        solution_steps: [
            { verbal_explanation: "שורשי הפרבולה הם במינוס 2 ובפלוס 2. אורך הבסיס הוא ההפרש.", math_expression: "2 - (-2) = 4" },
            { verbal_explanation: "קודקוד הפרבולה הוא בנקודה (0, -4). לכן גובה המשולש בערך מוחלט הוא 4.", math_expression: "h = 4" },
            { verbal_explanation: "נחשב את השטח לפי בסיס כפול גובה חלקי שתיים.", math_expression: "\\dfrac{4 \\times 4}{2} = 8" }
        ],
        final_answer: "8"
    },
    {
        topic: "functions",
        subTopic: "פרבולות ושטחים",
        question_text: "מהו שטח המשולש הנוצר בין נקודות האפס וקודקוד הפרבולה \\( y = -x^2 + 6x - 5 \\)?",
        options: ["8", "4", "16", "6"],
        correctAnswer: 0,
        hint: "מצאו את השורשים, מצאו את גובה הקודקוד, וחשבו שטח.",
        solution_steps: [
            { verbal_explanation: "נמצא שורשים בעזרת פירוק לטרינום.", math_expression: "x_1=1, x_2=5" },
            { verbal_explanation: "אורך הבסיס הוא ההפרש ביניהם.", math_expression: "5 - 1 = 4" },
            { verbal_explanation: "נמצא את שיעור האיקס של הקודקוד ונציב למציאת הגובה.", math_expression: "x_v = 3 \\Rightarrow y_v = -(3^2) + 6(3) - 5 = 4" },
            { verbal_explanation: "נחשב את השטח.", math_expression: "\\dfrac{4 \\times 4}{2} = 8" }
        ],
        final_answer: "8"
    },
    {
        topic: "functions",
        subTopic: "פרבולות ושטחים",
        question_text: "המשולש נוצר מראשית הצירים, נקודת החיתוך עם ציר ה-y, ונקודת החיתוך החיובית עם ציר ה-x של \\( y = -x^2 + 16 \\). מה שטחו?",
        options: ["32", "16", "8", "64"],
        correctAnswer: 0,
        hint: "אלו שתי נקודות על הצירים שמייצרות משולש ישר זווית עם הראשית. מצאו אותן.",
        solution_steps: [
            { verbal_explanation: "חיתוך עם ציר Y (גובה הניצב האנכי).", math_expression: "y = 16" },
            { verbal_explanation: "חיתוך חיובי עם ציר X (אורך הניצב האופקי).", math_expression: "0 = -x^2 + 16 \\Rightarrow x = 4" },
            { verbal_explanation: "חישוב שטח משולש ישר זווית (ניצב כפול ניצב חלקי 2).", math_expression: "\\dfrac{16 \\times 4}{2} = 32" }
        ],
        final_answer: "32"
    },
    {
        topic: "functions",
        subTopic: "פרבולות ושטחים",
        question_text: "מלבן חסום בפרבולה \\( y = -x^2 + 25 \\) כך שבסיסו התחתון על ציר ה-x בין הערכים מינוס 3 ל-3. מה שטחו?",
        options: ["96", "48", "50", "75"],
        correctAnswer: 0,
        hint: "רוחב המלבן הוא המרחק בין מינוס 3 ל-3. הגובה שלו נקבע על ידי ערך הפונקציה באחת הנקודות הללו.",
        solution_steps: [
            { verbal_explanation: "נחשב את רוחב בסיס המלבן.", math_expression: "3 - (-3) = 6" },
            { verbal_explanation: "נציב את הערך 3 בפונקציה כדי למצוא את גובה המלבן המדויק באותה נקודה.", math_expression: "y = -(3^2) + 25 = -9 + 25 = 16" },
            { verbal_explanation: "נחשב את שטח המלבן (אורך כפול רוחב).", math_expression: "6 \\times 16 = 96" }
        ],
        final_answer: "96"
    },
    {
        topic: "functions",
        subTopic: "פרבולות ושטחים",
        question_text: "משולש בנוי מהקודקוד, ראשית הצירים, ונקודת ההיטל של הקודקוד על ציר ה-x, עבור הפרבולה \\( y = x^2 - 8x + 12 \\). מה שטחו?",
        options: ["8", "12", "16", "4"],
        correctAnswer: 0,
        hint: "זהו משולש ישר זווית. הבסיס מונח על הציר עד לנקודת ה-x של הקודקוד. הניצב השני הוא המרחק ממנו למטה אל הקודקוד.",
        solution_steps: [
            { verbal_explanation: "נמצא את ה-x של הקודקוד.", math_expression: "x = \\dfrac{-(-8)}{2} = 4" },
            { verbal_explanation: "זהו אורך הניצב האופקי.", math_expression: "b = 4" },
            { verbal_explanation: "נציב את x למציאת עומק הקודקוד.", math_expression: "y = 4^2 - 8(4) + 12 = -4" },
            { verbal_explanation: "אורך הניצב האנכי (גובה) בערך מוחלט הוא 4. נחשב שטח.", math_expression: "\\dfrac{4 \\times 4}{2} = 8" }
        ],
        final_answer: "8"
    },
    {
        topic: "functions",
        subTopic: "פרבולות ושטחים",
        question_text: "מהו שטח המשולש הנוצר בין שני שורשי הפרבולה \\( y = -x^2 + 9 \\) לבין נקודת החיתוך שלה עם ציר ה-y?" + svgAreas,
        options: ["27", "18", "36", "9"],
        correctAnswer: 0,
        hint: "הבסיס מונח בין שתי נקודות האפס. הקודקוד השלישי הוא על ציר ה-y, וזהו בעצם הגובה.",
        solution_steps: [
            { verbal_explanation: "נמצא את השורשים.", math_expression: "-x^2 + 9 = 0 \\Rightarrow x = \\pm 3" },
            { verbal_explanation: "רוחב הבסיס הוא ההפרש ביניהם.", math_expression: "3 - (-3) = 6" },
            { verbal_explanation: "חיתוך Y הוא פשוט המקדם החופשי, והוא ישמש כגובה.", math_expression: "h = 9" },
            { verbal_explanation: "נחשב שטח.", math_expression: "\\dfrac{6 \\times 9}{2} = 27" }
        ],
        final_answer: "27"
    },
    {
        topic: "functions",
        subTopic: "פרבולות ושטחים",
        question_text: "מהו המרחק האנכי בין הקודקוד של הפרבולה \\( y = x^2 - 2 \\) לבין הקודקוד של \\( y = -x^2 + 6 \\)?",
        options: ["8", "4", "10", "6"],
        correctAnswer: 0,
        hint: "הפרבולות יושבות על אותו ציר סימטריה (ציר y). מצאו את ערכי הקודקוד של כל אחת וחשבו את ההפרש בגבהים.",
        solution_steps: [
            { verbal_explanation: "קודקוד הפרבולה הראשונה נמצא בנקודת החיתוך Y.", math_expression: "y_1 = -2" },
            { verbal_explanation: "קודקוד הפרבולה השנייה גם הוא על הציר.", math_expression: "y_2 = 6" },
            { verbal_explanation: "נחשב את המרחק על ידי חיסור הגובה התחתון מהעליון.", math_expression: "6 - (-2) = 8" }
        ],
        final_answer: "8"
    },
    {
        topic: "functions",
        subTopic: "פרבולות ושטחים",
        question_text: "שטח טרפז נוצר מתחת לפרבולה \\( y = -x^2 + 9 \\). בסיסו התחתון על ציר ה-x, ובסיסו העליון יושב על הישר \\( y = 5 \\). מה שטחו?",
        options: ["25", "20", "30", "15"],
        correctAnswer: 0,
        hint: "מצאו את רוחב הבסיס התחתון (השורשים) ואת רוחב הבסיס העליון (היכן הפונקציה שווה ל-5). הגובה נתון.",
        solution_steps: [
            { verbal_explanation: "בסיס תחתון (שורשים). מרחק בין 3 למינוס 3.", math_expression: "b_1 = 6" },
            { verbal_explanation: "בסיס עליון: נשווה את הפונקציה ל-5 כדי למצוא את הרוחב למעלה.", math_expression: "-x^2 + 9 = 5 \\Rightarrow x^2 = 4 \\Rightarrow x = \\pm 2" },
            { verbal_explanation: "המרחק בבסיס העליון הוא בין 2 למינוס 2.", math_expression: "b_2 = 4" },
            { verbal_explanation: "גובה הטרפז הוא 5. נחשב לפי נוסחת שטח טרפז.", math_expression: "\\dfrac{(6 + 4) \\times 5}{2} = 25" }
        ],
        final_answer: "25"
    },
    {
        topic: "functions",
        subTopic: "פרבולות ושטחים",
        question_text: "מהו שטח המשולש הכלוא בין שורשי הפרבולה \\( y = x^2 - 10x + 16 \\) לקודקוד שלה?",
        options: ["27", "18", "36", "54"],
        correctAnswer: 0,
        hint: "מצאו שורשים למציאת הבסיס. מצאו את ה-y של הקודקוד למציאת הגובה. חשבו שטח.",
        solution_steps: [
            { verbal_explanation: "נמצא שורשים על ידי טרינום.", math_expression: "x_1=2, x_2=8" },
            { verbal_explanation: "אורך הבסיס על הציר.", math_expression: "8 - 2 = 6" },
            { verbal_explanation: "נמצא x קודקוד ונציב.", math_expression: "x=5 \\Rightarrow y = 5^2 - 10(5) + 16 = -9" },
            { verbal_explanation: "הגובה בערך מוחלט הוא 9. נחשב שטח.", math_expression: "\\dfrac{6 \\times 9}{2} = 27" }
        ],
        final_answer: "27"
    },
    {
        topic: "functions",
        subTopic: "פרבולות ושטחים",
        question_text: "פרבולה שמשוואתה \\( y = -x^2 + c \\) יוצרת משולש עם ציר ה-x בעל שטח 32. השורשים החיובי והשלילי הם ב-4 ומינוס 4. מהו c?",
        options: ["8", "16", "4", "32"],
        correctAnswer: 0,
        hint: "הציבו את נתוני הבסיס (8) והשטח בנוסחת שטח משולש כדי למצוא את הגובה, שהוא הקודקוד c.",
        solution_steps: [
            { verbal_explanation: "רוחב הבסיס בין השורשים הנתונים הוא 8.", math_expression: "b = 8" },
            { verbal_explanation: "נציב בנוסחת השטח עם הגובה המיוצג כ-c (הקודקוד על ציר ה-y).", math_expression: "\\dfrac{8 \\times c}{2} = 32" },
            { verbal_explanation: "נפתור משוואה למציאת c.", math_expression: "4c = 32 \\Rightarrow c = 8" }
        ],
        final_answer: "8"
    },
    {
        topic: "functions",
        subTopic: "פרבולות ושטחים",
        question_text: "מהו שטח המרובע הדלתון שנוצר מחיבור הקודקודים ונקודות האפס המשותפות של שתי הפרבולות: \\( y = -x^2 + 4 \\) ו- \\( y = x^2 - 4 \\)?",
        options: ["16", "32", "8", "24"],
        correctAnswer: 0,
        hint: "שתי הפרבולות סימטריות ומהוות תמונת ראי אחת של השנייה. חשבו שטח משולש עליון והכפילו ב-2, או השתמשו בנוסחת שטח דלתון.",
        solution_steps: [
            { verbal_explanation: "השורשים המשותפים הם 2 ומינוס 2, לכן אורך האלכסון האופקי הוא 4.", math_expression: "d_1 = 4" },
            { verbal_explanation: "הקודקודים הם ב-4 ומינוס 4, לכן אורך האלכסון האנכי הוא 8.", math_expression: "d_2 = 8" },
            { verbal_explanation: "שטח דלתון הוא מכפלת אלכסונים חלקי 2.", math_expression: "\\dfrac{4 \\times 8}{2} = 16" }
        ],
        final_answer: "16"
    },
    {
        topic: "functions",
        subTopic: "פרבולות ושטחים",
        question_text: "פרבולה מחייכת חותכת את הצירים בנקודות \\( (0, -10) \\), \\( (2, 0) \\), ו- \\( (-5, 0) \\). מהו שטח המשולש הנוצר בין נקודות אלו?",
        options: ["35", "70", "17.5", "20"],
        correctAnswer: 0,
        hint: "שרטטו בדמיון: בסיס על ציר ה-x, קודקוד משולש למטה על ציר ה-y.",
        solution_steps: [
            { verbal_explanation: "אורך הבסיס שעל ציר איקס הוא המרחק בין שתי נקודות החיתוך.", math_expression: "2 - (-5) = 7" },
            { verbal_explanation: "הגובה הוא המרחק מהראשית אל נקודת החיתוך עם ציר וואי (בערך מוחלט).", math_expression: "h = 10" },
            { verbal_explanation: "נחשב את השטח.", math_expression: "\\dfrac{7 \\times 10}{2} = 35" }
        ],
        final_answer: "35"
    }

];