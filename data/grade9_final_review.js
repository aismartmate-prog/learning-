// ========================================================================
// שכבת גיל: כיתה ט' | נושא: תרגול ומבחנים מסכמים (48 שאלות)
// >>> גרסה 9 - גופנים מוגדלים למשוואות, שברים אנכיים ו-Display Mode <<<
// תתי-נושאים: בעיות מילוליות (תנועה, הספק ואחוזים), שאלות משולבות (אלגברה וגרפים), 
//             חזרה כללית בגיאומטריה, פתרון מבחני מפמר מסכמים.
// ========================================================================

// ==========================================
// מאגר איורי פרימיום (משולבים באופן מפוזר)
// ==========================================
const wSvg = (svg) => `\n<div dir='ltr' style='display:block; text-align:center; margin-top:20px; clear:both;'><svg viewBox='0 0 200 120' width='200' height='120'><defs><filter id='sh' x='-20%' y='-20%' width='140%' height='140%'><feDropShadow dx='2' dy='4' stdDeviation='3' flood-opacity='0.2'/></filter><linearGradient id='gGold' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='#fde047'/><stop offset='100%' stop-color='#ca8a04'/></linearGradient><linearGradient id='gBlue' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='#93c5fd'/><stop offset='100%' stop-color='#2563eb'/></linearGradient><radialGradient id='rRed' cx='30%' cy='30%' r='70%'><stop offset='0%' stop-color='#fca5a5'/><stop offset='100%' stop-color='#dc2626'/></radialGradient><radialGradient id='rGreen' cx='30%' cy='30%' r='70%'><stop offset='0%' stop-color='#86efac'/><stop offset='100%' stop-color='#16a34a'/></radialGradient></defs>${svg}</svg></div>`;

const svgMotion = wSvg(`<line x1='20' y1='80' x2='180' y2='80' stroke='#94a3b8' stroke-width='4' stroke-dasharray='10,5'/><rect x='30' y='50' width='45' height='20' fill='url(#gBlue)' rx='4' filter='url(#sh)'/><circle cx='40' cy='75' r='7' fill='#1e293b'/><circle cx='65' cy='75' r='7' fill='#1e293b'/><path d='M85 60 L115 60 M105 50 L115 60 L105 70' fill='none' stroke='#1e293b' stroke-width='3'/>`);
const svgWork = wSvg(`<rect x='70' y='40' width='60' height='60' fill='#f1f5f9' stroke='#94a3b8' stroke-width='3' filter='url(#sh)'/><line x1='85' y1='55' x2='115' y2='55' stroke='#3b82f6' stroke-width='4'/><line x1='85' y1='70' x2='105' y2='70' stroke='#3b82f6' stroke-width='4'/><path d='M60 40 L100 15 L140 40 Z' fill='url(#gGold)' stroke='#ca8a04' stroke-width='2' filter='url(#sh)'/>`);
const svgPercent = wSvg(`<circle cx='100' cy='60' r='45' fill='none' stroke='#3b82f6' stroke-width='8' filter='url(#sh)'/><path d='M100 15 A45 45 0 0 1 140 80' fill='none' stroke='url(#gGold)' stroke-width='8'/><text x='100' y='72' font-family='sans-serif' font-size='32' font-weight='bold' fill='#1e293b' text-anchor='middle'>%</text>`);
const svgGraphParabola = wSvg(`<line x1='30' y1='100' x2='170' y2='100' stroke='#1e293b' stroke-width='2'/><line x1='100' y1='20' x2='100' y2='110' stroke='#1e293b' stroke-width='2'/><path d='M40 30 Q100 150 160 30' fill='none' stroke='url(#gBlue)' stroke-width='4' filter='url(#sh)'/><circle cx='100' cy='82' r='4' fill='#ef4444'/>`);
const svgGraphLines = wSvg(`<line x1='30' y1='100' x2='170' y2='100' stroke='#1e293b' stroke-width='2'/><line x1='100' y1='20' x2='100' y2='110' stroke='#1e293b' stroke-width='2'/><line x1='40' y1='80' x2='160' y2='40' stroke='url(#gGold)' stroke-width='3' filter='url(#sh)'/><line x1='60' y1='30' x2='140' y2='110' stroke='#ef4444' stroke-width='3' filter='url(#sh)'/><circle cx='106' cy='58' r='5' fill='#1e293b'/>`);
const svgTriangle = wSvg(`<polygon points='40,90 160,90 100,30' fill='#f8fafc' stroke='url(#gBlue)' stroke-width='4' filter='url(#sh)'/><line x1='100' y1='30' x2='100' y2='90' stroke='#94a3b8' stroke-width='2' stroke-dasharray='4,4'/><rect x='100' y='80' width='10' height='10' fill='none' stroke='#94a3b8' stroke-width='2'/>`);
const svgCircle = wSvg(`<circle cx='100' cy='60' r='45' fill='none' stroke='#94a3b8' stroke-width='3' filter='url(#sh)'/><line x1='55' y1='60' x2='145' y2='60' stroke='#ef4444' stroke-width='2'/><circle cx='100' cy='60' r='3' fill='#1e293b'/><text x='100' y='52' font-family='sans-serif' font-size='14' font-weight='bold' fill='#1e293b' text-anchor='middle'>R</text>`);
const svgExam = wSvg(`<rect x='60' y='10' width='80' height='100' fill='#f8fafc' stroke='#cbd5e1' stroke-width='3' rx='5' filter='url(#sh)'/><line x1='75' y1='30' x2='125' y2='30' stroke='#94a3b8' stroke-width='2'/><line x1='75' y1='50' x2='125' y2='50' stroke='#94a3b8' stroke-width='2'/><path d='M80 75 L86 82 L98 68' fill='none' stroke='#22c55e' stroke-width='4' filter='url(#sh)'/>`);


const questionsDB = [

    // ==========================================================
    // תת נושא 1: בעיות מילוליות (תנועה, הספק ואחוזים)
    // ==========================================================
    
    {
        topic: "finalReviews",
        subTopic: "בעיות מילוליות (תנועה, הספק ואחוזים)",
        question_text: "מכונית ומשאית יצאו בו-זמנית משתי ערים שהמרחק ביניהן 300 ק\"מ ונסעו זו לקראת זו. מהירות המכונית גדולה ב-20 קמ\"ש ממהירות המשאית. הן נפגשו כעבור שעתיים. מה הייתה מהירות המכונית?" + svgMotion,
        options: [
            "85", 
            "65", 
            "75", 
            "90"
        ],
        correctAnswer: 0,
        hint: "סכום הדרכים שעברו שני כלי הרכב שווה למרחק הכולל (300 ק\"מ). בנו משוואה כאשר המהירויות הן x ו-x+20.",
        solution_steps: [
            { verbal_explanation: "נסמן את המהירויות של המשאית והמכונית בהתאמה.", math_expression: "\\displaystyle x \\quad , \\quad x + 20" },
            { verbal_explanation: "שניהם נסעו שעתיים. סכום הדרכים שווה לשלוש מאות.", math_expression: "\\displaystyle 2x + 2(x + 20) = 300" },
            { verbal_explanation: "נפתח סוגריים ונסדר את המשוואה.", math_expression: "\\displaystyle 4x + 40 = 300 \\quad \\Rightarrow \\quad 4x = 260 \\quad \\Rightarrow \\quad x = 65" },
            { verbal_explanation: "מהירות המכונית גדולה בעשרים ממהירות המשאית שמצאנו.", math_expression: "\\displaystyle 65 + 20 = 85" }
        ],
        final_answer: "85"
    },
    {
        topic: "finalReviews",
        subTopic: "בעיות מילוליות (תנועה, הספק ואחוזים)",
        question_text: "רוכב אופניים תכנן לרכוב 120 ק\"מ במהירות קבועה. בפועל, הוא רכב במהירות הנמוכה ב-5 קמ\"ש ממהירותו המתוכננת, ולכן דרכו התארכה בשעתיים. מה הייתה מהירותו המתוכננת?",
        options: [
            "20", 
            "15", 
            "25", 
            "30"
        ],
        correctAnswer: 0,
        hint: "הזמן בפועל (עם המהירות האיטית) פחות הזמן המתוכנן שווה ל-2.",
        solution_steps: [
            { verbal_explanation: "הזמן המתוכנן שווה לדרך חלקי המהירות המקורית.", math_expression: "\\displaystyle \\frac{120}{x}" },
            { verbal_explanation: "הזמן בפועל (במהירות נמוכה יותר) התארך בשעתיים.", math_expression: "\\displaystyle \\frac{120}{x - 5} - \\frac{120}{x} = 2" },
            { verbal_explanation: "הכפלה במכנה המשותף כדי לסלק שברים.", math_expression: "\\displaystyle 60x - 60(x - 5) = x(x - 5)" },
            { verbal_explanation: "פתיחת סוגריים וסידור למשוואה ריבועית שפתרונה החיובי הוא התשובה.", math_expression: "\\displaystyle x^2 - 5x - 300 = 0 \\quad \\Rightarrow \\quad x = 20" }
        ],
        final_answer: "20"
    },
    {
        topic: "finalReviews",
        subTopic: "בעיות מילוליות (תנועה, הספק ואחוזים)",
        question_text: "בריכה מתמלאת על ידי שני צינורות. הצינור הראשון יכול למלא את הבריכה לבדו ב-6 שעות. אם שני הצינורות פועלים יחד, הבריכה מתמלאת ב-4 שעות. בכמה שעות ימלא הצינור השני את הבריכה לבדו?" + svgWork,
        options: [
            "12", 
            "10", 
            "8", 
            "14"
        ],
        correctAnswer: 0,
        hint: "הספק מחושב כאחד חלקי הזמן הנדרש. ההספק המשותף (רבע) שווה לסכום ההספקים של שני הצינורות.",
        solution_steps: [
            { verbal_explanation: "הספק הצינור הראשון והשני בהתאמה (לחלק לשעה).", math_expression: "\\displaystyle \\frac{1}{6} \\quad , \\quad \\frac{1}{x}" },
            { verbal_explanation: "סכום ההספקים שווה להספק המשותף של שני הצינורות (רבע בריכה בשעה).", math_expression: "\\displaystyle \\frac{1}{6} + \\frac{1}{x} = \\frac{1}{4}" },
            { verbal_explanation: "נחסיר מונים כדי למצוא את ההספק הנעלם של הצינור השני.", math_expression: "\\displaystyle \\frac{1}{x} = \\frac{3}{12} - \\frac{2}{12} = \\frac{1}{12}" },
            { verbal_explanation: "הספק של אחת חלקי שתים-עשרה מעיד על זמן פעולה של תריסר שעות.", math_expression: "\\displaystyle x = 12" }
        ],
        final_answer: "12"
    },
    {
        topic: "finalReviews",
        subTopic: "בעיות מילוליות (תנועה, הספק ואחוזים)",
        question_text: "פועל א' מסיים עבודה מסוימת ב-15 ימים. פועל ב' יכול לסיים אותה ב-10 ימים. שני הפועלים עבדו יחד במשך 3 ימים, ולאחר מכן המשיך פועל ב' לבדו. כמה ימים בסך הכל עבד פועל ב' מתחילת העבודה ועד סופה?",
        options: [
            "8", 
            "5", 
            "6", 
            "7"
        ],
        correctAnswer: 0,
        hint: "חשבו איזה חלק מהעבודה בוצע בשלושת הימים המשותפים, ואז בדקו כמה ימים נדרשים לפועל ב' כדי לסיים את השארית.",
        solution_steps: [
            { verbal_explanation: "חיבור ההספקים המשותפים ליום אחד בודד של עבודה.", math_expression: "\\displaystyle \\frac{1}{15} + \\frac{1}{10} = \\frac{5}{30} = \\frac{1}{6}" },
            { verbal_explanation: "עבודה משותפת של שלושה ימים מכסה בדיוק מחצית מהפרויקט.", math_expression: "\\displaystyle 3 \\times \\frac{1}{6} = \\frac{1}{2}" },
            { verbal_explanation: "את החצי הנותר מבצע הפועל השני שהספקו הוא עשירית, לכן יידרשו לו חמישה ימים לסיים.", math_expression: "\\displaystyle \\frac{1}{2} : \\frac{1}{10} = 5" },
            { verbal_explanation: "סך הימים שעבד פועל ב' מורכב מהחלק המשותף והחלק העצמאי.", math_expression: "\\displaystyle 3 + 5 = 8" }
        ],
        final_answer: "8"
    },
    {
        topic: "finalReviews",
        subTopic: "בעיות מילוליות (תנועה, הספק ואחוזים)",
        question_text: "מוצר התייקר ב-25%. לאחר מכן, לרגל מבצע מיוחד, הוזל מחירו החדש ב-20%. המחיר הסופי לאחר שתי הפעולות עומד על 150 שקלים. מה היה מחירו המקורי של המוצר בטרם בוצעו שינויים אלו?" + svgPercent,
        options: [
            "150", 
            "200", 
            "180", 
            "160"
        ],
        correctAnswer: 0,
        hint: "הכפילו את המחיר המקורי בכופל ההתייקרות ובכופל ההוזלה יחדיו.",
        solution_steps: [
            { verbal_explanation: "מכפלת שני הכופלים המייצגים התייקרות של עשרים וחמישה אחוז והוזלה של עשרים אחוז.", math_expression: "\\displaystyle 1.25 \\times 0.8 = 1" },
            { verbal_explanation: "כיוון שתוצאת הכופל הכללי היא אחד שלם, המחיר חזר בדיוק למצב ההתחלתי.", math_expression: "\\displaystyle 1 \\times x = 150" }
        ],
        final_answer: "150"
    },
    {
        topic: "finalReviews",
        subTopic: "בעיות מילוליות (תנועה, הספק ואחוזים)",
        question_text: "משכורתו של עובד הועלתה ב-10%, ולאחר חצי שנה הועלתה שוב פעם באותו שיעור של 10%. כעת הוא מרוויח 12,100 שקלים בחודש. מה הייתה משכורתו ההתחלתית לפני שתי ההעלאות השכר?",
        options: [
            "10000", 
            "11000", 
            "9000", 
            "10500"
        ],
        correctAnswer: 0,
        hint: "שתי העלאות עוקבות של 10% אינן מהוות 20% תוספת, אלא מכפלת כופלים זהים של 1.1.",
        solution_steps: [
            { verbal_explanation: "הכופל עבור העלאת שכר של עשרה אחוזים הוא נקודה אחת. יש לחשב את ריבועו עבור שתי העלאות.", math_expression: "\\displaystyle 1.1 \\times 1.1 = 1.21" },
            { verbal_explanation: "נשווה את המשכורת ההתחלתית כפול הכופל למשכורת הסופית הנתונה.", math_expression: "\\displaystyle 1.21 \\times x = 12100" },
            { verbal_explanation: "נחלק במקדם כדי למצוא את משכורתו המקורית של העובד.", math_expression: "\\displaystyle x = \\frac{12100}{1.21} = 10000" }
        ],
        final_answer: "10000"
    },
    {
        topic: "finalReviews",
        subTopic: "בעיות מילוליות (תנועה, הספק ואחוזים)",
        question_text: "סוחר קנה 50 עטים זהים. 10 עטים התגלו כפגומים ולכן נזרקו לאשפה. את שאר העטים מכר הסוחר ברווח של 2 שקלים לעט. בסך הכל הניבה העסקה רווח נקי של 40 שקלים. כמה שקלים עלתה לו קניית עט בודד?",
        options: [
            "4", 
            "5", 
            "3", 
            "6"
        ],
        correctAnswer: 0,
        hint: "סך ההכנסות ממכירת 40 עטים שווה לסך ההוצאות על 50 עטים ועוד הרווח הנקי.",
        solution_steps: [
            { verbal_explanation: "ההוצאה הכוללת מתבססת על חמישים עטים.", math_expression: "\\displaystyle 50 \\times x" },
            { verbal_explanation: "פדיון המכירה של ארבעים עטים מכסה את ההוצאה ומוסיף רווח של ארבעים שקלים.", math_expression: "\\displaystyle 40(x + 2) = 50x + 40" },
            { verbal_explanation: "פתיחת סוגריים וכינוס איברים למציאת הערך הנדרש.", math_expression: "\\displaystyle 40x + 80 = 50x + 40 \\quad \\Rightarrow \\quad 10x = 40" },
            { verbal_explanation: "חלוקה בעשר תיתן את מחיר הקנייה המקורי לעט יחיד.", math_expression: "\\displaystyle x = 4" }
        ],
        final_answer: "4"
    },
    {
        topic: "finalReviews",
        subTopic: "בעיות מילוליות (תנועה, הספק ואחוזים)",
        question_text: "מכונית נסעה 200 ק\"מ במהירות קבועה. בדרכה חזרה, באותו מסלול בדיוק, נאלצה להקטין את מהירותה ב-10 קמ\"ש עקב פקקים. הדרך חזרה ארכה שעה אחת יותר מזמן ההלוך. מה הייתה מהירות המכונית בהלוך?",
        options: [
            "50", 
            "40", 
            "60", 
            "70"
        ],
        correctAnswer: 0,
        hint: "זמן החזור (הארוך יותר) פחות זמן ההלוך (הקצר יותר) שווה לשעה אחת.",
        solution_steps: [
            { verbal_explanation: "משוואת הפרש הזמנים קובעת שפער השעות בין הדרך האיטית למהירה הוא אחד.", math_expression: "\\displaystyle \\frac{200}{x - 10} - \\frac{200}{x} = 1" },
            { verbal_explanation: "הכפלת המשוואה במכנה המשותף לשם סילוק שברים.", math_expression: "\\displaystyle 200x - 200(x - 10) = x(x - 10)" },
            { verbal_explanation: "פתיחת כלל הסוגריים וסידור לכדי משוואה ריבועית מצומצמת.", math_expression: "\\displaystyle 2000 = x^2 - 10x \\quad \\Rightarrow \\quad x^2 - 10x - 2000 = 0" },
            { verbal_explanation: "פתרון המשוואה הריבועית מניב שורש חיובי יחיד.", math_expression: "\\displaystyle (x - 50)(x + 40) = 0 \\quad \\Rightarrow \\quad x = 50" }
        ],
        final_answer: "50"
    },
    {
        topic: "finalReviews",
        subTopic: "בעיות מילוליות (תנועה, הספק ואחוזים)",
        question_text: "שני פועלים נדרשים לבנות קיר לבנים. הפועל הותיק יכול לסיים את העבודה לבדו ב-4 ימים שלמים. כאשר הם עובדים יחד, הם מסיימים ב-2.4 ימים. כמה ימים נדרשים לפועל הצעיר כדי לסיים את העבודה לבדו?",
        options: [
            "6", 
            "5", 
            "8", 
            "7"
        ],
        correctAnswer: 0,
        hint: "ההספק המשותף מורכב מסכום ההספקים האישיים. ההספק הוא תמיד ההופכי של זמן העבודה.",
        solution_steps: [
            { verbal_explanation: "ההספק המשותף ליום הוא ההופכי של זמן העבודה הכולל.", math_expression: "\\displaystyle \\frac{1}{2.4} = \\frac{10}{24} = \\frac{5}{12}" },
            { verbal_explanation: "הספקו היומי של הפועל הצעיר הוא ההפרש בין המשותף להספק הותיק (שהוא רבע).", math_expression: "\\displaystyle \\frac{5}{12} - \\frac{1}{4} = \\frac{5}{12} - \\frac{3}{12}" },
            { verbal_explanation: "חישוב הפער המציג את ההספק המדויק של הצעיר.", math_expression: "\\displaystyle \\frac{2}{12} = \\frac{1}{6}" },
            { verbal_explanation: "מכיוון שהספק הצעיר הוא שישית, יידרשו לו שישה ימים לסיים את הפרויקט.", math_expression: "\\displaystyle x = 6" }
        ],
        final_answer: "6"
    },
    {
        topic: "finalReviews",
        subTopic: "בעיות מילוליות (תנועה, הספק ואחוזים)",
        question_text: "ברז א' ממלא מחצית מבריכה ב-4 שעות. ברז ב' ממלא שליש מהבריכה ב-3 שעות. אם שניהם יופעלו בו-זמנית למילוי בריכה שלמה וריקה, כמה שעות בקירוב יידרשו לכך?",
        options: [
            "4.23", 
            "4.5", 
            "5", 
            "4.8"
        ],
        correctAnswer: 0, 
        hint: "חשבו כמה זמן דרוש לכל ברז למלא בריכה שלמה לבדו. לאחר מכן, חברו את הספקיהם השעתיים.",
        solution_steps: [
            { verbal_explanation: "זמן מילוי בריכה שלמה על ידי א' הוא שמונה. זמן מילוי על ידי ב' הוא תשע.", math_expression: "\\displaystyle 8 \\quad , \\quad 9" },
            { verbal_explanation: "נחבר את ההספקים שלהם כדי לקבל את הקצב המשותף.", math_expression: "\\displaystyle \\frac{1}{8} + \\frac{1}{9} = \\frac{17}{72}" },
            { verbal_explanation: "הזמן המשותף הנדרש למילוי הוא ההופכי של ההספק המשותף.", math_expression: "\\displaystyle \\frac{72}{17} \\approx 4.23" }
        ],
        final_answer: "4.23"
    },
    {
        topic: "finalReviews",
        subTopic: "בעיות מילוליות (תנועה, הספק ואחוזים)",
        question_text: "קבלן קנה כסאות תמורת 1200 שקלים. למרבה הצער, 4 כסאות ניזוקו בהובלה. את הכסאות התקינים הוא מכר ב-30 שקלים יותר מהעלות המקורית ששילם, והרוויח בעסקה כולה 240 שקלים. כמה כסאות קנה הקבלן מלכתחילה?",
        options: [
            "20", 
            "24", 
            "15", 
            "30"
        ],
        correctAnswer: 0,
        hint: "ההוצאות היו 1200 שקלים, ומכיוון שהרוויח 240, הפדיון הכולל היה חייב להיות 1440 שקלים.",
        solution_steps: [
            { verbal_explanation: "הפדיון הכולל הנדרש להשגת הרווח המבוקש.", math_expression: "\\displaystyle 1200 + 240 = 1440" },
            { verbal_explanation: "פדיון זה מתקבל ממכירת הכסאות שנותרו במחיר המשודרג.", math_expression: "\\displaystyle (x - 4)(\\frac{1200}{x} + 30) = 1440" },
            { verbal_explanation: "פתיחת הסוגריים וכינוס כללי.", math_expression: "\\displaystyle 1200 + 30x - \\frac{4800}{x} - 120 = 1440" },
            { verbal_explanation: "הכפלה בנעלם וסידור הצורה הריבועית.", math_expression: "\\displaystyle 30x^2 - 360x - 4800 = 0 \\quad \\Rightarrow \\quad x^2 - 12x - 160 = 0" },
            { verbal_explanation: "פתרון המשוואה הריבועית מניב שני שורשים, שמתוכם הרלוונטי הוא החיובי.", math_expression: "\\displaystyle x = 20" }
        ],
        final_answer: "20"
    },
    {
        topic: "finalReviews",
        subTopic: "בעיות מילוליות (תנועה, הספק ואחוזים)",
        question_text: "סכום שטחים של שני ריבועים הוא 130 סמ\"ר. ידוע כי אורך צלעו של הריבוע הגדול ארוך ב-2 ס\"מ מאורך צלעו של הריבוע הקטן. מהו היקפו של הריבוע הגדול?",
        options: [
            "36", 
            "28", 
            "32", 
            "40"
        ],
        correctAnswer: 0,
        hint: "בנו משוואה: ריבוע הצלע הקטנה ועוד ריבוע הצלע הגדולה שווה ל-130.",
        solution_steps: [
            { verbal_explanation: "נרכיב את משוואת סכום השטחים הנתונה.", math_expression: "\\displaystyle x^2 + (x + 2)^2 = 130" },
            { verbal_explanation: "פתיחת סוגריים וכינוס איברים.", math_expression: "\\displaystyle 2x^2 + 4x + 4 = 130 \\quad \\Rightarrow \\quad 2x^2 + 4x - 126 = 0" },
            { verbal_explanation: "צמצום המשוואה בחלוקה לשתיים ופתרון הטרינום (שבע ומינוס תשע).", math_expression: "\\displaystyle x^2 + 2x - 63 = 0 \\quad \\Rightarrow \\quad x = 7" },
            { verbal_explanation: "צלע הריבוע הגדול שווה לתשע. נכפיל בארבע לקבלת היקפו המלא.", math_expression: "\\displaystyle 4 \\times 9 = 36" }
        ],
        final_answer: "36"
    },

    // ==========================================================
    // תת נושא 2: שאלות משולבות (אלגברה וגרפים)
    // ==========================================================

    {
        topic: "finalReviews",
        subTopic: "שאלות משולבות (אלגברה וגרפים)",
        question_text: "נתונות שתי פונקציות: קו ישר $y = 2x + 4$ ופרבולה $y = -x^2 + 8x - 4$. מצאו את שיעורי נקודות החיתוך המדויקות ביניהן." + svgGraphLines,
        options: [
            "(2, 8) , (4, 12)", 
            "(1, 6) , (4, 12)", 
            "(2, 8) , (5, 14)", 
            "(0, 4) , (4, 12)"
        ],
        correctAnswer: 0,
        hint: "השוו בין שתי המשוואות כדי למצוא את שיעורי ה-X, ולאחר מכן הציבו אותם במשוואת הקו הישר כדי למצוא את ערכי ה-Y.",
        solution_steps: [
            { verbal_explanation: "השוואה בין הפונקציה הקווית לריבועית למציאת נקודות חיתוך.", math_expression: "\\displaystyle -x^2 + 8x - 4 = 2x + 4" },
            { verbal_explanation: "העברת איברים ליצירת משוואה ריבועית.", math_expression: "\\displaystyle x^2 - 6x + 8 = 0" },
            { verbal_explanation: "פירוק לטרינום למציאת שורשי המשוואה.", math_expression: "\\displaystyle (x - 2)(x - 4) = 0 \\quad \\Rightarrow \\quad x = 2 , 4" },
            { verbal_explanation: "הצבת ערכי האיקס בתוך משוואת הישר לשם חילוץ שיעורי הוואי התואמים.", math_expression: "\\displaystyle y_1 = 2(2) + 4 = 8 \\quad ; \\quad y_2 = 2(4) + 4 = 12" }
        ],
        final_answer: "(2, 8) , (4, 12)"
    },
    {
        topic: "finalReviews",
        subTopic: "שאלות משולבות (אלגברה וגרפים)",
        question_text: "נתון שקודקוד הפרבולה שמשוואתה $y = x^2 - 10x + c$ נמצא בדיוק על ציר ה-X. בעזרת נתון זה, חלצו את ערכו של הפרמטר החופשי c." + svgGraphParabola,
        options: [
            "25", 
            "10", 
            "-25", 
            "5"
        ],
        correctAnswer: 0,
        hint: "הקודקוד על ציר ה-X אומר ששיעור ה-Y של הקודקוד הוא אפס.",
        solution_steps: [
            { verbal_explanation: "חישוב שיעור האיקס של נקודת הקודקוד בעזרת הנוסחה הייעודית.", math_expression: "\\displaystyle \\frac{10}{2} = 5" },
            { verbal_explanation: "כיוון שהקודקוד נח על הציר האופקי, ערך הוואי שלו מוגדר כאפס.", math_expression: "\\displaystyle y = 0" },
            { verbal_explanation: "נציב את שיעורי הנקודה בחזרה לתוך תבנית הפרבולה.", math_expression: "\\displaystyle 0 = 5^2 - 10(5) + c" },
            { verbal_explanation: "פתרון משוואה פשוטה כדי לחשב את הקבוע הנעלם.", math_expression: "\\displaystyle 0 = 25 - 50 + c \\quad \\Rightarrow \\quad c = 25" }
        ],
        final_answer: "25"
    },
    {
        topic: "finalReviews",
        subTopic: "שאלות משולבות (אלגברה וגרפים)",
        question_text: "נתונה מערכת משוואות המורכבת מפרבולה וקו ישר. מהו הפתרון עבור המשתנה x?\n$$ y = x^2 - 5x $$\n$$ x - y = 5 $$",
        options: [
            "1, 5", 
            "5, -1", 
            "2, 3", 
            "0, 5"
        ],
        correctAnswer: 0,
        hint: "בודדו את המשתנה y במשוואה הקווית והציבו את התוצאה במשוואה הריבועית.",
        solution_steps: [
            { verbal_explanation: "בידוד הנעלם מתוך משוואת הישר הקווית.", math_expression: "\\displaystyle y = x - 5" },
            { verbal_explanation: "הצבת הביטוי לתוך משוואת הפרבולה.", math_expression: "\\displaystyle x - 5 = x^2 - 5x" },
            { verbal_explanation: "העברת כלל האיברים לאגף אחד לקבלת צורה תקנית.", math_expression: "\\displaystyle x^2 - 6x + 5 = 0" },
            { verbal_explanation: "מציאת הפתרונות המדויקים על ידי שימוש בטכניקת פירוק לגורמים.", math_expression: "\\displaystyle (x - 1)(x - 5) = 0 \\quad \\Rightarrow \\quad x = 1 , 5" }
        ],
        final_answer: "1, 5"
    },
    {
        topic: "finalReviews",
        subTopic: "שאלות משולבות (אלגברה וגרפים)",
        question_text: "פשטו את השבר האלגברי הבא, בהנחה שערכו של x תקין לתחום ההגדרה:\n$$ \\frac{x^2 - 9}{x^2 - 6x + 9} $$",
        options: [
            "\\displaystyle \\frac{x + 3}{x - 3}", 
            "\\displaystyle \\frac{x - 3}{x + 3}", 
            "1", 
            "\\displaystyle \\frac{1}{x - 3}"
        ],
        correctAnswer: 0,
        hint: "המונה בנוי על תבנית הפרש ריבועים, ואילו המכנה על תבנית כפל מקוצר של הפרש בריבוע.",
        solution_steps: [
            { verbal_explanation: "ניתוח המונה ופירוקו לפי חוקי הפרש ריבועי.", math_expression: "\\displaystyle x^2 - 9 = (x - 3)(x + 3)" },
            { verbal_explanation: "זיהוי המכנה כנוסחת כפל מקוצר ופירוקו בהתאם.", math_expression: "\\displaystyle x^2 - 6x + 9 = (x - 3)^2" },
            { verbal_explanation: "הצגת הביטויים המפורקים וצמצום הסוגריים הזהים שחוזרים במונה ובמכנה.", math_expression: "\\displaystyle \\frac{(x - 3)(x + 3)}{(x - 3)(x - 3)} = \\frac{x + 3}{x - 3}" }
        ],
        final_answer: "\\displaystyle \\frac{x + 3}{x - 3}"
    },
    {
        topic: "finalReviews",
        subTopic: "שאלות משולבות (אלגברה וגרפים)",
        question_text: "נתונה הפונקציה הריבועית $y = -2(x - 3)^2 + 8$. מהם שיעורי קודקוד הפרבולה המדויקים, והאם מדובר בנקודת מינימום או מקסימום מקומית?",
        options: [
            "(3, 8)", 
            "(-3, 8)", 
            "(3, 8)", 
            "(8, 3)"
        ],
        correctAnswer: 0,
        hint: "הפונקציה נתונה בתבנית ההזזות (קודקוד). שיעורי הקודקוד נלקחים מהמשוואה תוך היפוך סימן הפנים. המקדם קובע את הכיוון.",
        solution_steps: [
            { verbal_explanation: "מהמבנה הנתון ניתן לקרוא מיד את שיעור האיקס בסימן ההפוך, ואת שיעור הוואי כפי שהוא.", math_expression: "\\displaystyle (3, 8)" },
            { verbal_explanation: "המקדם הראשון במשוואה הוא שלילי, ולכן זרועות הפרבולה פונות מטה וזהו מקסימום.", math_expression: "\\displaystyle -2 < 0" }
        ],
        final_answer: "(3, 8)"
    },
    {
        topic: "finalReviews",
        subTopic: "שאלות משולבות (אלגברה וגרפים)",
        question_text: "פתרו את המשוואה הרציונלית הבאה, וודאו שהפתרון תקין מבחינת תחום ההגדרה:\n$$ \\frac{3}{x - 2} + \\frac{2}{x + 2} = \\frac{15}{x^2 - 4} $$",
        options: [
            "2.6", 
            "4", 
            "1", 
            "3"
        ],
        correctAnswer: 0,
        hint: "המכנה באגף הימני הוא פירוק של שני המכנים משמאל (הפרש ריבועים). הכפילו הכל במכנה משותף זה.",
        solution_steps: [
            { verbal_explanation: "זיהוי הקשר ההדוק שבין כל המכנים במשוואה על ידי נוסחת כפל מקוצר.", math_expression: "\\displaystyle x^2 - 4 = (x - 2)(x + 2)" },
            { verbal_explanation: "הכפלת המשוואה כולה במכנה המורחב כדי למחוק לחלוטין את השברים.", math_expression: "\\displaystyle 3(x + 2) + 2(x - 2) = 15" },
            { verbal_explanation: "פתיחת הסוגריים באגפי המשוואה החדשה.", math_expression: "\\displaystyle 3x + 6 + 2x - 4 = 15" },
            { verbal_explanation: "כינוס איברים למציאת הערך הסופי של הנעלם.", math_expression: "\\displaystyle 5x + 2 = 15 \\quad \\Rightarrow \\quad 5x = 13 \\quad \\Rightarrow \\quad x = 2.6" }
        ],
        final_answer: "2.6"
    },
    {
        topic: "finalReviews",
        subTopic: "שאלות משולבות (אלגברה וגרפים)",
        question_text: "מלבן שרוחבו 4 יחידות חסום בתוך הפרבולה $y = -x^2 + 9$. צלעו התחתונה מונחת על ציר ה-X, וקודקודיו העליונים נוגעים סימטרית בפרבולה. מהו שטחו של מלבן זה?",
        options: [
            "20", 
            "16", 
            "24", 
            "36"
        ],
        correctAnswer: 0,
        hint: "רוחב המלבן מחולק סימטרית ל-2 חלקים של 2 יחידות סביב ציר ה-Y. הציבו X=2 בפרבולה כדי למצוא את הגובה.",
        solution_steps: [
            { verbal_explanation: "חצי מרוחב המלבן הסימטרי שווה לשיעור האיקס של נקודת המגע הימנית.", math_expression: "\\displaystyle x = 2" },
            { verbal_explanation: "הצבת הערך במשוואת הפרבולה כדי למצוא את גובהו של המלבן הכלוא.", math_expression: "\\displaystyle y = -(2)^2 + 9 = -4 + 9 = 5" },
            { verbal_explanation: "חישוב שטח המלבן באמצעות הכפלת גובהו ברוחבו המקורי.", math_expression: "\\displaystyle 4 \\times 5 = 20" }
        ],
        final_answer: "20"
    },
    {
        topic: "finalReviews",
        subTopic: "שאלות משולבות (אלגברה וגרפים)",
        question_text: "הישר המתואר על ידי $y = 3x - 6$ חותך את צירי המערכת ויוצר יחד איתם משולש ישר זווית. מצאו את שטחו של המשולש שנוצר.",
        options: [
            "6", 
            "12", 
            "3", 
            "9"
        ],
        correctAnswer: 0,
        hint: "נקודות החיתוך עם הצירים מציינות את אורכם של ניצבי המשולש. חשבו את חצי מכפלתם.",
        solution_steps: [
            { verbal_explanation: "מציאת נקודת החיתוך עם ציר הוואי על ידי איפוס איקס.", math_expression: "\\displaystyle y = 3(0) - 6 = -6" },
            { verbal_explanation: "מציאת נקודת החיתוך השנייה עם ציר האיקס על ידי איפוס וואי.", math_expression: "\\displaystyle 0 = 3x - 6 \\quad \\Rightarrow \\quad x = 2" },
            { verbal_explanation: "חישוב שטח המשולש כחצי מכפלת אורך הניצבים בערכם המוחלט והחיובי.", math_expression: "\\displaystyle \\frac{2 \\times 6}{2} = 6" }
        ],
        final_answer: "6"
    },
    {
        topic: "finalReviews",
        subTopic: "שאלות משולבות (אלגברה וגרפים)",
        question_text: "פתרו את מערכת המשוואות וחשבו את ערכה של המכפלה $xy$:\n$$ 2x + 3y = 12 $$\n$$ 4x - y = 10 $$",
        options: [
            "6", 
            "8", 
            "10", 
            "12"
        ],
        correctAnswer: 0,
        hint: "שיטת השוואת המקדמים עובדת מצוין. הכפילו את המשוואה השנייה ב-3 וצרפו לראשונה כדי להעלים את Y.",
        solution_steps: [
            { verbal_explanation: "הכפלת המשוואה השנייה פי שלוש ליצירת מקדם תואם להעלמת הוואי.", math_expression: "\\displaystyle 12x - 3y = 30" },
            { verbal_explanation: "חיבור שתי המשוואות יחד מוחק את הוואי מן הפולינום.", math_expression: "\\displaystyle 14x = 42 \\quad \\Rightarrow \\quad x = 3" },
            { verbal_explanation: "הצבת ערך האיקס שמצאנו במשוואה המקורית לגילוי הוואי.", math_expression: "\\displaystyle 12 - y = 10 \\quad \\Rightarrow \\quad y = 2" },
            { verbal_explanation: "הכפלת המשתנים כמבוקש בשאלה המסכמת.", math_expression: "\\displaystyle 3 \\times 2 = 6" }
        ],
        final_answer: "6"
    },
    {
        topic: "finalReviews",
        subTopic: "שאלות משולבות (אלגברה וגרפים)",
        question_text: "פונקציה קווית עוברת דרך שתי נקודות בעלות השיעורים (1, 5) ו-(3, 11). בנו את משוואת הישר העובר דרך נקודות אלו.",
        options: [
            "y = 3x + 2", 
            "y = 2x + 3", 
            "y = 4x + 1", 
            "y = 3x - 2"
        ],
        correctAnswer: 0,
        hint: "מציאת השיפוע נעשית על ידי חלוקת ההפרש ב-Y בהפרש ב-X. לאחר מכן, הציבו באחת הנקודות.",
        solution_steps: [
            { verbal_explanation: "חישוב השיפוע באמצעות נוסחת ההפרשים של קואורדינטות הנקודות הנתונות.", math_expression: "\\displaystyle m = \\frac{11 - 5}{3 - 1} = \\frac{6}{2} = 3" },
            { verbal_explanation: "הצבת השיפוע ונתוני הנקודה הראשונה לתוך מבנה משוואת הישר.", math_expression: "\\displaystyle y - 5 = 3(x - 1)" },
            { verbal_explanation: "פתיחת סוגריים וסידור פונקציה קווית סופית ומפורשת.", math_expression: "\\displaystyle y = 3x - 3 + 5 \\quad \\Rightarrow \\quad y = 3x + 2" }
        ],
        final_answer: "y = 3x + 2"
    },
    {
        topic: "finalReviews",
        subTopic: "שאלות משולבות (אלגברה וגרפים)",
        question_text: "נתון אי-השוויון הריבועי הבא:\n$$ x^2 - x - 12 < 0 $$\nפתרו את אי-השוויון וציינו את תחום הפתרונות המדויק.",
        options: [
            "-3 < x < 4", 
            "x < -3", 
            "-4 < x < 3", 
            "x > 4"
        ],
        correctAnswer: 0,
        hint: "מצאו את שורשי המשוואה בהשוואה לאפס. הפרבולה מחייכת, ולכן השטח השלילי שלה חבוי בין שתי נקודות החיתוך.",
        solution_steps: [
            { verbal_explanation: "שימוש בטכניקת טרינום מורחב למציאת נקודות האפס של הפרבולה.", math_expression: "\\displaystyle x^2 - x - 12 = 0 \\quad \\Rightarrow \\quad (x - 4)(x + 3) = 0" },
            { verbal_explanation: "חילוץ שני השורשים המספריים.", math_expression: "\\displaystyle 4 \\quad , \\quad -3" },
            { verbal_explanation: "הפרבולה חיובית בבסיסה ולכן החלק השלילי שלה נמצא בין השורשים.", math_expression: "\\displaystyle -3 < x < 4" }
        ],
        final_answer: "-3 < x < 4"
    },
    {
        topic: "finalReviews",
        subTopic: "שאלות משולבות (אלגברה וגרפים)",
        question_text: "איזה מהביטויים האלגבריים הבאים שווה באופן מוחלט לביטוי הבא:\n$$ (2x - 5)^2 - (x + 4)^2 $$",
        options: [
            "3x^2 - 28x + 9", 
            "3x^2 - 12x + 9", 
            "3x^2 - 28x + 41", 
            "5x^2 - 20x + 9"
        ],
        correctAnswer: 0,
        hint: "בצעו פתיחת סוגריים לכל חלק בנפרד, ואז חסרו ביניהם. אל תשכחו את כלל היפוך הסימנים בסוגריים המחסרים.",
        solution_steps: [
            { verbal_explanation: "פתיחה של הביטוי הראשון באמצעות נוסחת הפרש ריבועי.", math_expression: "\\displaystyle 4x^2 - 20x + 25" },
            { verbal_explanation: "פתיחה של הביטוי השני על ידי נוסחת סכום ריבועי.", math_expression: "\\displaystyle x^2 + 8x + 16" },
            { verbal_explanation: "פעולת החיסור הכללית תוך היפוך סימני הסוגריים השניים במלואם.", math_expression: "\\displaystyle (4x^2 - 20x + 25) - (x^2 + 8x + 16)" },
            { verbal_explanation: "כינוס איברים לקבלת משוואת פולינום יחידה.", math_expression: "\\displaystyle 3x^2 - 28x + 9" }
        ],
        final_answer: "3x^2 - 28x + 9"
    },

    // ==========================================================
    // תת נושא 3: חזרה כללית בגיאומטריה (שאלות 25-36)
    // ==========================================================

    {
        topic: "finalReviews",
        subTopic: "חזרה כללית בגיאומטריה",
        question_text: "במשולש ישר זווית נתון שאורך הניצב הקצר הוא 6 ס\"מ. שטח המשולש כולו הוא 24 סמ\"ר. חשבו את אורך היתר." + svgTriangle,
        options: [
            "10", 
            "12", 
            "14", 
            "8"
        ],
        correctAnswer: 0,
        hint: "שטח משולש ישר זווית הוא מחצית מכפלת הניצבים. מצאו את הניצב השני והפעילו פיתגורס.",
        solution_steps: [
            { verbal_explanation: "שימוש בנוסחת השטח לגילוי הניצב החסר.", math_expression: "\\displaystyle \\frac{6 \\times x}{2} = 24 \\quad \\Rightarrow \\quad 3x = 24 \\quad \\Rightarrow \\quad x = 8" },
            { verbal_explanation: "יישום משפט פיתגורס לטובת חישוב צלע היתר בעזרת הניצבים שמצאנו.", math_expression: "\\displaystyle c^2 = 6^2 + 8^2 = 36 + 64" },
            { verbal_explanation: "הוצאת שורש למציאת המרחק הסופי.", math_expression: "\\displaystyle c^2 = 100 \\quad \\Rightarrow \\quad c = 10" }
        ],
        final_answer: "10"
    },
    {
        topic: "finalReviews",
        subTopic: "חזרה כללית בגיאומטריה",
        question_text: "נתונים שני משולשים דומים. צלע אחת בקטן אורכה 4 ס\"מ, והצלע המתאימה בגדול אורכה 12 ס\"מ. אם שטח הקטן 10 סמ\"ר, מהו שטח המשולש הגדול?",
        options: [
            "90", 
            "30", 
            "120", 
            "40"
        ],
        correctAnswer: 0,
        hint: "יחס השטחים בין משולשים דומים שווה לריבוע יחס הצלעות הקווי.",
        solution_steps: [
            { verbal_explanation: "חישוב יחס הדמיון הקווי.", math_expression: "\\displaystyle k = \\frac{12}{4} = 3" },
            { verbal_explanation: "העלאת יחס הדמיון בריבוע לקבלת יחס השטחים המלא.", math_expression: "\\displaystyle k^2 = 3^2 = 9" },
            { verbal_explanation: "הכפלת השטח הקטן ביחס השטחים לשם מציאת שטח המשולש הגדול.", math_expression: "\\displaystyle 10 \\times 9 = 90" }
        ],
        final_answer: "90"
    },
    {
        topic: "finalReviews",
        subTopic: "חזרה כללית בגיאומטריה",
        question_text: "במעגל חסום מלבן. אלכסון המלבן שווה באורכו לקוטר המעגל. צלעות המלבן הן 5 ו-12. מהו שטח המעגל (הביעו בעזרת $\\pi$)?" + svgCircle,
        options: [
            "\\displaystyle 42.25\\pi", 
            "\\displaystyle 169\\pi", 
            "\\displaystyle 60\\pi", 
            "\\displaystyle 84.5\\pi"
        ],
        correctAnswer: 0,
        hint: "אלכסון המלבן, שהוא גם הקוטר, ניתן לחישוב בפיתגורס. חצי ממנו הוא הרדיוס.",
        solution_steps: [
            { verbal_explanation: "שימוש בפיתגורס לחישוב הקוטר שהוא יתר משולש המלבן.", math_expression: "\\displaystyle D^2 = 5^2 + 12^2 = 25 + 144 = 169" },
            { verbal_explanation: "הוצאת שורש ומציאת הקוטר.", math_expression: "\\displaystyle D = 13" },
            { verbal_explanation: "חילוק הקוטר בשתיים לקבלת הרדיוס להמשך החישוב.", math_expression: "\\displaystyle r = 6.5" },
            { verbal_explanation: "הצבת הרדיוס בנוסחה לחישוב שטח עיגול.", math_expression: "\\displaystyle 6.5^2 \\times \\pi = 42.25\\pi" }
        ],
        final_answer: "\\displaystyle 42.25\\pi"
    },
    {
        topic: "finalReviews",
        subTopic: "חזרה כללית בגיאומטריה",
        question_text: "במשולש שווה שוקיים נתון כי זווית הבסיס גדולה פי 2 מגודלה של זווית הראש. מהו גודלה במעלות של זווית הראש בלבד?",
        options: [
            "36", 
            "45", 
            "30", 
            "40"
        ],
        correctAnswer: 0,
        hint: "יש שתי זוויות בסיס שוות. סכום כלל הזוויות במשולש מתכנס למאה ושמונים מעלות.",
        solution_steps: [
            { verbal_explanation: "הגדרת זווית הראש וזוג זוויות הבסיס הכפולות ממנה.", math_expression: "\\displaystyle x \\quad , \\quad 2x \\quad , \\quad 2x" },
            { verbal_explanation: "כתיבת המשוואה לסכום זוויות מלא במשולש תקין.", math_expression: "\\displaystyle x + 2x + 2x = 180" },
            { verbal_explanation: "כינוס איברים לכדי ערך בודד.", math_expression: "\\displaystyle 5x = 180" },
            { verbal_explanation: "חלוקה בחמש לחילוץ זווית הראש הנעלמת.", math_expression: "\\displaystyle x = 36" }
        ],
        final_answer: "36"
    },
    {
        topic: "finalReviews",
        subTopic: "חזרה כללית בגיאומטריה",
        question_text: "היקף ריבוע גדול ב-4 ס\"מ מהיקפו של משולש שווה צלעות. ידוע כי צלע הריבוע שווה לאורך צלע המשולש. מהו אורך הצלע המשותפת?",
        options: [
            "4", 
            "5", 
            "3", 
            "6"
        ],
        correctAnswer: 0,
        hint: "היקף ריבוע מורכב מארבע צלעות והיקף משולש משלוש. השוו לפי ההפרש הנתון בבעיה.",
        solution_steps: [
            { verbal_explanation: "הגדרת ביטוי להיקף הריבוע ולהיקף המשולש בהתאמה.", math_expression: "\\displaystyle 4x \\quad , \\quad 3x" },
            { verbal_explanation: "בניית משוואה על סמך פער של ארבע יחידות בין ההיקפים.", math_expression: "\\displaystyle 4x - 3x = 4" },
            { verbal_explanation: "חיסור מהיר שפותר ישירות ומגלה את אורך הצלע.", math_expression: "\\displaystyle x = 4" }
        ],
        final_answer: "4"
    },
    {
        topic: "finalReviews",
        subTopic: "חזרה כללית בגיאומטריה",
        question_text: "במקבילית, אורך צלע אחת הוא 10 ס\"מ והגובה היורד אליה 6 ס\"מ. אורך הצלע השנייה של אותה מקבילית הוא 12 ס\"מ. חשבו את אורך הגובה היורד אל הצלע השנייה.",
        options: [
            "5", 
            "4", 
            "6", 
            "7"
        ],
        correctAnswer: 0,
        hint: "מכפלת צלע וגובה אחד תמיד תהיה שווה למכפלת הזוג השני במקבילית, שכן השטח הכולל נשאר קבוע.",
        solution_steps: [
            { verbal_explanation: "חישוב שטח המקבילית דרך נתוני הצמד הראשון השלם שבידנו.", math_expression: "\\displaystyle 10 \\times 6 = 60" },
            { verbal_explanation: "הגדרת משוואה זהה לשטח בעזרת הצלע השנייה והגובה החסר.", math_expression: "\\displaystyle 12 \\times h = 60" },
            { verbal_explanation: "חלוקה פשוטה למציאת הגובה.", math_expression: "\\displaystyle h = \\frac{60}{12} = 5" }
        ],
        final_answer: "5"
    },
    {
        topic: "finalReviews",
        subTopic: "חזרה כללית בגיאומטריה",
        question_text: "במעוין, אורכי האלכסונים המצטלבים הם 16 ס\"מ ו-12 ס\"מ. מהו היקפו של המעוין כולו?",
        options: [
            "40", 
            "48", 
            "20", 
            "36"
        ],
        correctAnswer: 0,
        hint: "אלכסוני המעוין חוצים זה את זה במאונך, ולכן נוצרים 4 משולשים ישרי זווית. השתמשו בחצאי האלכסונים בפיתגורס.",
        solution_steps: [
            { verbal_explanation: "מציאת ניצבי המשולשים הפנימיים על ידי חציית האלכסונים במעוין המאונכים זה לזה.", math_expression: "\\displaystyle \\frac{16}{2} = 8 \\quad ; \\quad \\frac{12}{2} = 6" },
            { verbal_explanation: "חישוב אורך צלע המעוין שמהווה את היתר בעזרת פיתגורס.", math_expression: "\\displaystyle c^2 = 8^2 + 6^2 = 64 + 36 = 100" },
            { verbal_explanation: "הוצאת שורש למציאת הצלע וחלוקתה בערך מוחלט חיובי בלבד.", math_expression: "\\displaystyle c = 10" },
            { verbal_explanation: "חישוב היקף המעוין בעזרת הכפלת הצלע בארבע פאות הצורה.", math_expression: "\\displaystyle 4 \\times 10 = 40" }
        ],
        final_answer: "40"
    },
    {
        topic: "finalReviews",
        subTopic: "חזרה כללית בגיאומטריה",
        question_text: "קטע אמצעים במשולש המחבר שתי צלעות שווה ל-7 ס\"מ. מהו שטח המשולש המלא, אם ידוע כי הגובה היורד אל צלע הבסיס המקבילה לקטע זה הוא 10 ס\"מ?",
        options: [
            "70", 
            "140", 
            "35", 
            "100"
        ],
        correctAnswer: 0,
        hint: "אורכו של קטע אמצעים שווה למחצית הבסיס שאליו הוא מקביל. הכפילו אותו ב-2 כדי למצוא את אורך הבסיס, ואז חשבו שטח לפי גובה ובסיס.",
        solution_steps: [
            { verbal_explanation: "התבססות על משפט קטע האמצעים לקביעת גודל בסיס המשולש (כפול באורכו מקטע האמצעים).", math_expression: "\\displaystyle 2 \\times 7 = 14" },
            { verbal_explanation: "הצבת הבסיס שמצאנו והגובה הנתון בתוך הנוסחה הסטנדרטית למציאת שטח משולשים.", math_expression: "\\displaystyle \\frac{14 \\times 10}{2}" },
            { verbal_explanation: "הכפלה וחלוקה בשתיים למתן תשובה סופית.", math_expression: "\\displaystyle \\frac{140}{2} = 70" }
        ],
        final_answer: "70"
    },
    {
        topic: "finalReviews",
        subTopic: "חזרה כללית בגיאומטריה",
        question_text: "בטרפז שווה שוקיים אורך הבסיס הגדול הוא 20 ס\"מ ואורכו של הבסיס הקטן הוא 10 ס\"מ בלבד. גובה הטרפז הנתון הוא 12 ס\"מ. מהו אורך שוק הטרפז?",
        options: [
            "13", 
            "15", 
            "14", 
            "12.5"
        ],
        correctAnswer: 0,
        hint: "הורידו שני גבהים מנקודות הבסיס העליון. השארית בבסיס התחתון מתחלקת שווה בשווה לניצבים של משולשים בצד.",
        solution_steps: [
            { verbal_explanation: "חישוב יתרת אורך הבסיס הנופלת מחוץ למלבן המרכזי שנוצר, וחלוקתה לשתיים.", math_expression: "\\displaystyle \\frac{20 - 10}{2} = \\frac{10}{2} = 5" },
            { verbal_explanation: "הצבת הנתונים במשוואת פיתגורס לחישוב יתר המשולש הצידי, המהווה את השוק.", math_expression: "\\displaystyle c^2 = 5^2 + 12^2 = 25 + 144 = 169" },
            { verbal_explanation: "הוצאת השורש הריבועי מניבה את פתרון השוק הנדרש.", math_expression: "\\displaystyle c = 13" }
        ],
        final_answer: "13"
    },
    {
        topic: "finalReviews",
        subTopic: "חזרה כללית בגיאומטריה",
        question_text: "חשבו את סכום הזוויות הפנימיות הכולל של משושה משוכלל (מצולע בעל שש צלעות סגורות).",
        options: [
            "720", 
            "540", 
            "900", 
            "1080"
        ],
        correctAnswer: 0,
        hint: "הנוסחה לחישוב סכום זוויות מצולע מבוססת על מכפלת 180 בהפרש בין מספר צלעותיו לבין המספר 2.",
        solution_steps: [
            { verbal_explanation: "כתיבת הנוסחה המקובלת למציאת סכום הזוויות הכולל.", math_expression: "\\displaystyle 180 \\times (n - 2)" },
            { verbal_explanation: "הצבת כמות הצלעות במשושה בתוך הנוסחה הנתונה.", math_expression: "\\displaystyle 180 \\times (6 - 2)" },
            { verbal_explanation: "השלמת החישוב של מאה ושמונים מוכפל בארבע.", math_expression: "\\displaystyle 180 \\times 4 = 720" }
        ],
        final_answer: "720"
    },
    {
        topic: "finalReviews",
        subTopic: "חזרה כללית בגיאומטריה",
        question_text: "במשולש ישר זווית אורך היתר ניתן כ-25 ס\"מ, ואורכו של אחד מהניצבים הוא 15 ס\"מ. חשבו את שטח המשולש הכולל.",
        options: [
            "150", 
            "300", 
            "120", 
            "200"
        ],
        correctAnswer: 0,
        hint: "היעזרו במשפט פיתגורס לחילוץ אורך הניצב השני. שטח יחושב על ידי הכפלת שני הניצבים וחלוקתם בשתיים.",
        solution_steps: [
            { verbal_explanation: "הצבת ערך היתר ואחד הניצבים בנוסחת פיתגורס וביצוע חיסור למציאת הניצב הנוסף.", math_expression: "\\displaystyle b^2 = 25^2 - 15^2 = 625 - 225 = 400" },
            { verbal_explanation: "הוצאת שורש ריבועי לקבלת אורכו הישיר של הניצב שהיה חסר.", math_expression: "\\displaystyle b = 20" },
            { verbal_explanation: "הצבה בנוסחת השטח להשגת הפתרון הגאומטרי.", math_expression: "\\displaystyle \\frac{15 \\times 20}{2} = 150" }
        ],
        final_answer: "150"
    },
    {
        topic: "finalReviews",
        subTopic: "חזרה כללית בגיאומטריה",
        question_text: "דלתון מורכב ממשולש עליון שגובהו 4 ס\"מ וממשולש תחתון שגובהו 8 ס\"מ. לשניהם בסיס משותף שאורכו 10 ס\"מ. מהו שטח הדלתון?",
        options: [
            "60", 
            "120", 
            "80", 
            "40"
        ],
        correctAnswer: 0,
        hint: "סכום שני הגבהים המאונכים לבסיס מהווה את האלכסון האנכי של הדלתון. שטח דלתון פועל לפי נוסחת מחצית מכפלת אלכסונים.",
        solution_steps: [
            { verbal_explanation: "חיבור שני הגבהים כדי למצוא את מלוא אורכו של האלכסון החוצה.", math_expression: "\\displaystyle 4 + 8 = 12" },
            { verbal_explanation: "הצבת שני האלכסונים בתוך נוסחת השטח לחשבון סופי.", math_expression: "\\displaystyle \\frac{10 \\times 12}{2} = 60" }
        ],
        final_answer: "60"
    },

    // ==========================================================
    // תת נושא 4: פתרון מבחני מפמ"ר מסכמים (שאלות 37-48)
    // ==========================================================

    {
        topic: "finalReviews",
        subTopic: "פתרון מבחני מפמר מסכמים",
        question_text: "מתוך מבחן מסכם: נתונה משוואת שברים הבאה. חשבו את ערכו המדויק של x.\n$$ \\frac{2x-3}{4} - \\frac{x+1}{3} = 2 $$" + svgExam,
        options: [
            "18.5", 
            "16.5", 
            "20", 
            "15"
        ],
        correctAnswer: 0,
        hint: "המכנה המשותף לביטול השברים הוא 12. הכפילו כל איבר בגורם המשלים הנדרש לו.",
        solution_steps: [
            { verbal_explanation: "הכפלת המשוואה כולה במכנה השלם המשותף (12) כדי לסלק את השברים.", math_expression: "\\displaystyle 3(2x - 3) - 4(x + 1) = 24" },
            { verbal_explanation: "פתיחת סוגריים. הקפידו על הכפלת מינוס על כל תוכן הסוגריים האחרונים.", math_expression: "\\displaystyle 6x - 9 - 4x - 4 = 24" },
            { verbal_explanation: "כינוס איברים המכילים את המשתנה מחד והמספרים מאידך.", math_expression: "\\displaystyle 2x - 13 = 24" },
            { verbal_explanation: "העברת קבועים לאגף הנגדי וחלוקה לקבלת שבר עשרוני תקני.", math_expression: "\\displaystyle 2x = 37 \\quad \\Rightarrow \\quad x = 18.5" }
        ],
        final_answer: "18.5"
    },
    {
        topic: "finalReviews",
        subTopic: "פתרון מבחני מפמר מסכמים",
        question_text: "שני מתכנתים יצרו קוד במשך 5 שעות והשלימו בסך הכל 150 שורות יחד. המתכנת המנוסה כתב שורות קוד בקצב כפול מהמתכנת הצעיר. מהו הספקו של הצעיר לשעה?",
        options: [
            "10", 
            "20", 
            "15", 
            "5"
        ],
        correctAnswer: 0,
        hint: "חלוקה של סך השורות בשעות תיתן את ההספק המשותף. פצלו אותו ליחס של אחד לשניים.",
        solution_steps: [
            { verbal_explanation: "חישוב קצב העבודה המשותף לשעה אחת מתוך חמש השעות הנתונות.", math_expression: "\\displaystyle \\frac{150}{5} = 30" },
            { verbal_explanation: "בניית משוואה המייצגת את סכום ההספקים של מתכנת רגיל ואחד מהיר ממנו פי שתיים.", math_expression: "\\displaystyle x + 2x = 30" },
            { verbal_explanation: "איחוד המשתנים למשוואה אחידה וקלה לפתרון.", math_expression: "\\displaystyle 3x = 30 \\quad \\Rightarrow \\quad x = 10" }
        ],
        final_answer: "10"
    },
    {
        topic: "finalReviews",
        subTopic: "פתרון מבחני מפמר מסכמים",
        question_text: "במבחן קבלה 25 שאלות. תשובה נכונה מעניקה 4 נקודות, ושגויה מפחיתה נקודה אחת מציון סך הכל. תלמיד פתר את המבחן המלא וקיבל 75 נקודות. על כמה שאלות שגה?",
        options: [
            "5", 
            "20", 
            "10", 
            "15"
        ],
        correctAnswer: 0,
        hint: "סמנו את שאלות ההצלחה בנעלם והגדירו את השגויות כמשלים (עשרים וחמש פחות הנעלם).",
        solution_steps: [
            { verbal_explanation: "הרכבת משוואת ניקוד כוללת שמתחשבת בהפחתת קנסות עבור שגיאות במבחן.", math_expression: "\\displaystyle 4x - 1(25 - x) = 75" },
            { verbal_explanation: "פתיחת סוגריים ושינוי סימן של איבר הקיזוז השני.", math_expression: "\\displaystyle 4x - 25 + x = 75" },
            { verbal_explanation: "כינוס איברים לצדדים מתאימים וחישוב כמות התשובות הנכונות.", math_expression: "\\displaystyle 5x = 100 \\quad \\Rightarrow \\quad x = 20" },
            { verbal_explanation: "השאלה מתמקדת בשגויות, ולכן נחסר את ההצלחות מן הסך הכולל של השאלות.", math_expression: "\\displaystyle 25 - 20 = 5" }
        ],
        final_answer: "5"
    },
    {
        topic: "finalReviews",
        subTopic: "פתרון מבחני מפמר מסכמים",
        question_text: "נתונה מערכת שתי משוואות קוויות. לפי הפתרון שלהן, מהו ערך הסכום המשותף של המשתנים $x + y$ ?\n$$ 3x + 2y = 17 $$\n$$ x - y = -1 $$",
        options: [
            "7", 
            "8", 
            "6", 
            "5"
        ],
        correctAnswer: 0,
        hint: "בודדו את אחד המשתנים מהמשוואה הפשוטה (השנייה) והציבו אותו במלואו כביטוי במשוואה העליונה.",
        solution_steps: [
            { verbal_explanation: "בידוד משתנה יחיד מתוך משוואת הבסיס הנמוכה.", math_expression: "\\displaystyle x = y - 1" },
            { verbal_explanation: "הצבת הביטוי כפי שהוא בתוך המשוואה הראשית המסובכת יותר.", math_expression: "\\displaystyle 3(y - 1) + 2y = 17" },
            { verbal_explanation: "פתיחת המכפלות באגף שמאל וחילול ערכו של הנעלם שנשאר.", math_expression: "\\displaystyle 3y - 3 + 2y = 17 \\quad \\Rightarrow \\quad 5y = 20 \\quad \\Rightarrow \\quad y = 4" },
            { verbal_explanation: "הצבת התוצאה למשוואת הבידוד כדי למצוא במקביל את ערך האיקס.", math_expression: "\\displaystyle x = 4 - 1 = 3" },
            { verbal_explanation: "חישוב סכום סופי לשני המשתנים בהתאם לדרישת הבעיה.", math_expression: "\\displaystyle 3 + 4 = 7" }
        ],
        final_answer: "7"
    },
    {
        topic: "finalReviews",
        subTopic: "פתרון מבחני מפמר מסכמים",
        question_text: "קבעו מהו הפתרון האלגברי הסופי והנכון של אי-השוויון הבא:\n$$ -3x + 12 > 0 $$",
        options: [
            "x < 4", 
            "x > 4", 
            "x < -4", 
            "x > -4"
        ],
        correctAnswer: 0,
        hint: "כאשר אנו מחלקים או כופלים ביטוי של אי-שוויון במספר בעל ערך שלילי, אנו מחויבים להפוך את כיוון סימן המשוואה.",
        solution_steps: [
            { verbal_explanation: "העברת איבר חופשי צד יורדת מתמטית ללא צורך לשנות דבר מעבר לסימנו האישי.", math_expression: "\\displaystyle -3x > -12" },
            { verbal_explanation: "חלוקת שני הצדדים במינוס שלוש הופכת ישירות את כיוון פעולת אי-השוויון.", math_expression: "\\displaystyle x < 4" }
        ],
        final_answer: "x < 4"
    },
    {
        topic: "finalReviews",
        subTopic: "פתרון מבחני מפמר מסכמים",
        question_text: "בצעו פישוט של השבר האלגברי והביאו אותו לצורתו המצומצמת והנקייה ביותר (הניחו שתחום ההגדרה נשמר):\n$$ \\frac{5x^2 - 20}{x^2 - 4x + 4} $$",
        options: [
            "\\displaystyle \\frac{5(x + 2)}{x - 2}", 
            "\\displaystyle \\frac{5(x - 2)}{x + 2}", 
            "5", 
            "\\displaystyle \\frac{x + 2}{x - 2}"
        ],
        correctAnswer: 0,
        hint: "במונה, הוציאו תחילה גורם משותף מספרי החוצה ואז פרקו הפרש ריבועים. המכנה עונה בדיוק לנוסחת כפל מקוצר מוכרת.",
        solution_steps: [
            { verbal_explanation: "הוצאה של הגורם המשותף המקסימלי ויישום ישיר של נוסחת ההפרש הריבועי עליו.", math_expression: "\\displaystyle 5(x^2 - 4) = 5(x - 2)(x + 2)" },
            { verbal_explanation: "פירוק אגף המכנה על פי הנוסחה לכפל מקוצר של ריבוע הפרש פנימי.", math_expression: "\\displaystyle (x - 2)^2" },
            { verbal_explanation: "צמצום סוגריים משותפים כפולות מן המונה ומן המכנה כאחד.", math_expression: "\\displaystyle \\frac{5(x - 2)(x + 2)}{(x - 2)(x - 2)} = \\frac{5(x + 2)}{x - 2}" }
        ],
        final_answer: "\\displaystyle \\frac{5(x + 2)}{x - 2}"
    },
    {
        topic: "finalReviews",
        subTopic: "פתרון מבחני מפמר מסכמים",
        question_text: "בארגז עץ סגור מונחים 4 כדורים כחולים ו-6 כדורים אדומים. שולפים באקראי שני כדורים עוקבים מתוך הארגז (ללא החזרה). חשבו את ההסתברות ששני הכדורים יהיו רק מהצבע הכחול?",
        options: [
            "\\displaystyle \\frac{2}{15}", 
            "\\displaystyle \\frac{16}{100}", 
            "\\displaystyle \\frac{1}{5}", 
            "\\displaystyle \\frac{4}{15}"
        ],
        correctAnswer: 0,
        hint: "מדובר בשליפה ללא החזרה. במשיכה של הכדור השני הכמות הכוללת פוחתת, וכך גם הכמות של הצבע הכחול הנותר.",
        solution_steps: [
            { verbal_explanation: "מציאת ההסתברות לבחירת כדור כחול בפעם הראשונה מתבצעת על ידי חלוקת הכמות בסך הכל הכללי.", math_expression: "\\displaystyle \\frac{4}{10}" },
            { verbal_explanation: "חישוב מחודש להסתברות כדור כחול שני מבוססת על שארית הכדורים במאגר.", math_expression: "\\displaystyle \\frac{3}{9} = \\frac{1}{3}" },
            { verbal_explanation: "הכפלת שתי ההסתברויות שמייצגות רצף של תרחישים התלויים אחד בשני באופן ישיר.", math_expression: "\\displaystyle \\frac{4}{10} \\times \\frac{1}{3} = \\frac{4}{30}" },
            { verbal_explanation: "צמצום תוצאת השבר שהתקבלה על ידי חלוקת מונה ומכנה לקבלת תשובה פשוטה.", math_expression: "\\displaystyle \\frac{2}{15}" }
        ],
        final_answer: "\\displaystyle \\frac{2}{15}"
    },
    {
        topic: "finalReviews",
        subTopic: "פתרון מבחני מפמר מסכמים",
        question_text: "קופסת אריזה מיוחדת אשר עוצבה בצורת תיבה ריבועית מכילה נפח אחסון מקסימלי של 100 סמ\"ק. גובהה האנכי עומד על 4 ס\"מ. על פי הנתונים, מהו שטח הפנים הכולל הנדרש ליצירת התיבה הזו (בסמ\"ר)?",
        options: [
            "130", 
            "100", 
            "150", 
            "120"
        ],
        correctAnswer: 0,
        hint: "שטח בסיס מתקבל מנפח חלקי גובה. לאחר מציאת שטח הבסיס, הוציאו שורש לקבלת צלעו. השטח כולל פעמיים בסיסים וארבע מעטפות צדדיות.",
        solution_steps: [
            { verbal_explanation: "ביצוע חלוקה של נפח הקופסה בגובהה לגלות את שטח בסיס התיבה הפנימי.", math_expression: "\\displaystyle \\frac{100}{4} = 25" },
            { verbal_explanation: "הוצאת שורש מרובע מתוך שטח הבסיס מאפשרת לנו לחלץ את אורך צלעו הבסיסית של התיבה.", math_expression: "\\displaystyle \\sqrt{25} = 5" },
            { verbal_explanation: "חישוב שטח הפנים הכולל המורכב מסכום שטחי שני הבסיסים בתוספת 4 פאות צידיות של 5 על 4 ס\"מ.", math_expression: "\\displaystyle 2(25) + 4(5 \\times 4)" },
            { verbal_explanation: "סיכום פשוט והכפלה לקבלת הפתרון האריתמטי השלם.", math_expression: "\\displaystyle 50 + 4(20) = 50 + 80 = 130" }
        ],
        final_answer: "130"
    },
    {
        topic: "finalReviews",
        subTopic: "פתרון מבחני מפמר מסכמים",
        question_text: "מצאו ובנו את משוואת הישר, המקביל לקו הפונקציה המקורית $y = 4x - 7$, ונתון כי קו זה חולף דרך הנקודה הקרטזית המסומנת (3, 15).",
        options: [
            "y = 4x + 3", 
            "y = 4x - 3", 
            "y = -4x + 27", 
            "y = 3x + 4"
        ],
        correctAnswer: 0,
        hint: "ישרים מקבילים חולקים שיפוע קבוע והדדי. קחו שיפוע זה ודחפו אותו למשוואת הישר בתוספת נתוני הנקודה.",
        solution_steps: [
            { verbal_explanation: "קביעת ההנחה כי קוים מקבילים מאופיינים בשיפוע קבוע וזהה למקורי.", math_expression: "\\displaystyle m = 4" },
            { verbal_explanation: "הצבה של קבוע השיפוע והנקודה המסופקת לתוך תבנית מציאת פונקציה לינארית.", math_expression: "\\displaystyle 15 = 4(3) + b" },
            { verbal_explanation: "פתיחת המכפלה, חיסור איברים וגילוי נקודת החיתוך החופשית עם ציר ה-Y.", math_expression: "\\displaystyle 15 = 12 + b \\quad \\Rightarrow \\quad b = 3 \\quad \\Rightarrow \\quad y = 4x + 3" }
        ],
        final_answer: "y = 4x + 3"
    },
    {
        topic: "finalReviews",
        subTopic: "פתרון מבחני מפמר מסכמים",
        question_text: "קבוצת חברים גבתה 240 שקלים למשפחה לרכישת ציוד מחנאות קולקטיבי. יומיים לפני, 2 משפחות ביטלו הגעה. כפועל יוצא, שאר המשפחות שנותרו הוסיפו כל אחת 4 שקלים יקרים לתשלומם. כמה משפחות בסך הכל נכללו בתכנון המקורי?",
        options: [
            "12", 
            "10", 
            "15", 
            "8"
        ],
        correctAnswer: 0,
        hint: "תשלום שמחולק לפחות אנשים עולה ולכן נכנס ראשון למשוואת החיסור המשווה להפרש (4).",
        solution_steps: [
            { verbal_explanation: "כתיבה מסודרת למשוואת תעריפים מנוגדים שבה הסכום הכולל מתחלק לכמויות אנשים משתנות.", math_expression: "\\displaystyle \\frac{240}{x - 2} - \\frac{240}{x} = 4" },
            { verbal_explanation: "חלוקת המרכיבים בארבע להקטנת גודל המספרים לקראת ההכפלות.", math_expression: "\\displaystyle \\frac{60}{x - 2} - \\frac{60}{x} = 1" },
            { verbal_explanation: "חיסול השברים בעזרת כפל במכנה משותף כולל.", math_expression: "\\displaystyle 60x - 60(x - 2) = x(x - 2)" },
            { verbal_explanation: "פתיחת סוגריים וארגון משוואה ריבועית סופית סביב אפס.", math_expression: "\\displaystyle 120 = x^2 - 2x \\quad \\Rightarrow \\quad x^2 - 2x - 120 = 0" },
            { verbal_explanation: "הטרינום נותן שני שורשים (12 ומינוס 10). פתרון של כמות אנשים מחייב מספר חיובי.", math_expression: "\\displaystyle x = 12" }
        ],
        final_answer: "12"
    },
    {
        topic: "finalReviews",
        subTopic: "פתרון מבחני מפמר מסכמים",
        question_text: "במשולש גיאומטרי נתון קטע אמצעים. שטחו המלא של המשולש הקטן שנוצר למעלה עומד על סך של 12 סמ\"ר. מהו שיטחו המדויק של הטרפז התחתון שנכלא בתוך המשולש המקורי?",
        options: [
            "36", 
            "48", 
            "24", 
            "12"
        ],
        correctAnswer: 0,
        hint: "יחס קטע האמצעים מביא לכך שיחס הדמיון הוא חצי ולכן יחס השטחים הוא רבע. המשולש הקטן הוא רבע משטח המשולש הענק, והטרפז מהווה את השארית.",
        solution_steps: [
            { verbal_explanation: "הסקת יחס הדמיון הקווי בין המשולש העליון למשולש הענק מתבססת על יחס קטע האמצעים.", math_expression: "\\displaystyle k = \\frac{1}{2}" },
            { verbal_explanation: "העלאה בריבוע של היחס כדי לקבוע את הפער בשטחים.", math_expression: "\\displaystyle k^2 = \\frac{1}{4}" },
            { verbal_explanation: "חישוב פרופורציונלי להוכחת שטחו של המשולש הענק שגדול פי ארבעה מזה הפנימי.", math_expression: "\\displaystyle \\text{Total} = 12 \\times 4 = 48" },
            { verbal_explanation: "מציאת שטח הטרפז השאריתי בעזרת הפחתת החלק המשולש מתוך גודלה של המעטפת הכוללת.", math_expression: "\\displaystyle 48 - 12 = 36" }
        ],
        final_answer: "36"
    },
    {
        topic: "finalReviews",
        subTopic: "פתרון מבחני מפמר מסכמים",
        question_text: "עליכם לפשט במבחן את מבנה החזקות המעורבות הבא, ולהגיע לידי תוצאה מספרית מוחלטת ללא חזקות שאריתיות:\n$$ \\frac{3^5 \\times 3^4}{(3^2)^3} $$",
        options: [
            "27", 
            "9", 
            "81", 
            "3"
        ],
        correctAnswer: 0,
        hint: "במונה קיים כפל בסיסים זהים שדורש חיבור של מעריכים. במכנה חזקה על חזקה שדורשת כפל. ולבסוף הפעלת משפט חלוקת חזקות לחילוץ ערך סופי.",
        solution_steps: [
            { verbal_explanation: "איחוד שני איברי המונה למשפחת חזקה אחידה תוך הסתמכות על הכלל שמחבר מעריכים למכפלות מאותו הבסיס במדויק.", math_expression: "\\displaystyle 3^{5+4} = 3^9" },
            { verbal_explanation: "פישוט חלק המכנה של השבר על ידי הכלל האומר שפעולת חזקה נוספת המופעלת על חזקה קיימת מצריכה כפל מעריכים.", math_expression: "\\displaystyle 3^{2 \\times 3} = 3^6" },
            { verbal_explanation: "צמצום של המונה מול המכנה על ידי חיסור המעריך התחתון מהעליון.", math_expression: "\\displaystyle \\frac{3^9}{3^6} = 3^{9-6} = 3^3" },
            { verbal_explanation: "חישוב של השארית המספרית למספר שלם ונקי מחזקות.", math_expression: "\\displaystyle 3 \\times 3 \\times 3 = 27" }
        ],
        final_answer: "27"
    }

];