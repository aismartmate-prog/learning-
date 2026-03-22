// ========================================================================
// שכבת גיל: שאלון 35172 (3 יחידות לימוד) | נושא: תרגול מילולי וגיאומטרי
// >>> גרסה מושקעת, פתרונות צעד-אחר-צעד, ללא דולרים, כפל כ-X וחילוק כ-: <<<
// תתי-נושאים: 
// 1. בעיות קנייה ומכירה ואחוזים
// 2. בעיות תנועה
// 3. בעיות גיאומטריות
// סה"כ: 36 שאלות רב-שלביות
// ========================================================================

const wSvg = (svg) => `\n<div dir='ltr' style='display:block; text-align:center; margin-top:20px;'><svg viewBox='0 0 240 140' width='240' height='140'><defs><filter id='shdw'><feDropShadow dx='3' dy='4' stdDeviation='3' flood-opacity='0.25'/></filter><linearGradient id='gBlue' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='#eff6ff'/><stop offset='100%' stop-color='#bfdbfe'/></linearGradient><linearGradient id='gGreen' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='#f0fdf4'/><stop offset='100%' stop-color='#bbf7d0'/></linearGradient><linearGradient id='gRed' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='#fef2f2'/><stop offset='100%' stop-color='#fecaca'/></linearGradient></defs>${svg}</svg></div>`;

const svgPercent = wSvg(`<rect x='70' y='30' width='100' height='80' rx='10' fill='url(#gGreen)' stroke='#16a34a' stroke-width='3' filter='url(#shdw)'/><circle cx='100' cy='55' r='8' fill='#15803d'/><circle cx='140' cy='85' r='8' fill='#15803d'/><line x1='145' y1='45' x2='95' y2='95' stroke='#15803d' stroke-width='4'/>`);
const svgMotion = wSvg(`<rect x='30' y='60' width='180' height='20' fill='#94a3b8' filter='url(#shdw)'/><line x1='30' y1='70' x2='210' y2='70' stroke='#f8fafc' stroke-width='2' stroke-dasharray='10,5'/><rect x='50' y='45' width='40' height='15' rx='3' fill='url(#gBlue)' stroke='#2563eb' stroke-width='2'/><circle cx='60' cy='60' r='5' fill='#1e293b'/><circle cx='80' cy='60' r='5' fill='#1e293b'/><line x1='100' y1='52' x2='130' y2='52' stroke='#ef4444' stroke-width='3'/><polygon points='130,48 140,52 130,56' fill='#ef4444'/>`);
const svgGeoWord = wSvg(`<rect x='50' y='40' width='80' height='60' fill='url(#gBlue)' stroke='#2563eb' stroke-width='3' filter='url(#shdw)'/><polygon points='150,100 200,100 150,40' fill='url(#gGreen)' stroke='#16a34a' stroke-width='3' filter='url(#shdw)'/>`);

const questionsDB = [

    // ==========================================================
    // תת נושא 1: בעיות קנייה ומכירה ואחוזים
    // ==========================================================
    {
        topic: "math35172",
        subTopic: "בעיות קנייה ומכירה ואחוזים",
        question_text: "מחיר מוצר התייקר ב-20 אחוזים ולאחר מכן הוזל ב-10 אחוזים. המחיר הסופי נקבע ל-540 שקלים. מה היה מחירו ההתחלתי של המוצר?\n" + svgPercent,
        options: ["500", "450", "600", "550"],
        correctAnswer: 0,
        hint: "בנו משוואה עם כופלי אחוזים. כופל התייקרות של 20 אחוז הוא 1.2 וכופל הוזלה של 10 אחוז הוא 0.9.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את המחיר ההתחלתי באות איקס.", math_expression: "x" },
            { verbal_explanation: "שלב ב': נחשב את הכופל עבור התייקרות של 20 אחוזים.", math_expression: "1 + \\displaystyle \\frac{20}{100} = 1.2" },
            { verbal_explanation: "שלב ג': נחשב את הכופל עבור הוזלה של 10 אחוזים.", math_expression: "1 - \\displaystyle \\frac{10}{100} = 0.9" },
            { verbal_explanation: "שלב ד': נכפיל את המחיר ההתחלתי בשני הכופלים ונשווה למחיר הסופי.", math_expression: "x \\times 1.2 \\times 0.9 = 540" },
            { verbal_explanation: "שלב ה': נחשב את מכפלת הכופלים.", math_expression: "1.2 \\times 0.9 = 1.08" },
            { verbal_explanation: "שלב ו': נרשום את המשוואה המפושטת.", math_expression: "1.08 \\times x = 540" },
            { verbal_explanation: "שלב ז': נחלק ב-1.08 כדי למצוא את המחיר ההתחלתי.", math_expression: "x = 540 : 1.08 = 500" }
        ],
        final_answer: "500"
    },
    {
        topic: "math35172",
        subTopic: "בעיות קנייה ומכירה ואחוזים",
        question_text: "סוחר קנה 40 חולצות. 5 מהן היו פגומות ולכן נזרקו. את שאר החולצות מכר הסוחר ברווח של 30 שקלים לכל חולצה. בסך הכל הרוויח הסוחר בעסקה כולה 450 שקלים. כמה עלתה חולצה אחת לסוחר?",
        options: ["120", "100", "150", "90"],
        correctAnswer: 0,
        hint: "הרווח הכולל הוא סך ההכנסות פחות סך ההוצאות. מספר החולצות שנמכרו הוא 35.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את מחיר הקנייה של חולצה בודדת באיקס. ההוצאה הכוללת היא 40 פעמים איקס.", math_expression: "40 \\times x" },
            { verbal_explanation: "שלב ב': נחשב את מספר החולצות התקינות שנמכרו בפועל.", math_expression: "40 - 5 = 35" },
            { verbal_explanation: "שלב ג': מחיר המכירה של כל חולצה תקינה גבוה ב-30 שקלים ממחיר הקנייה.", math_expression: "x + 30" },
            { verbal_explanation: "שלב ד': נחשב את ההכנסה הכוללת ממכירת החולצות התקינות.", math_expression: "35 \\times (x + 30)" },
            { verbal_explanation: "שלב ה': הרווח הכולל מוגדר כהכנסה פחות ההוצאה. נשווה את זה ל-450.", math_expression: "35 \\times (x + 30) - 40 \\times x = 450" },
            { verbal_explanation: "שלב ו': נפתח את הסוגריים במשוואה.", math_expression: "35 \\times x + 1050 - 40 \\times x = 450" },
            { verbal_explanation: "שלב ז': נכנס איברים (איקסים במספרים) ונעביר אגפים.", math_expression: "-5 \\times x = 450 - 1050" },
            { verbal_explanation: "שלב ח': נחשב את ההפרש באגף הימני.", math_expression: "-5 \\times x = -600" },
            { verbal_explanation: "שלב ט': נחלק במינוס חמש למציאת מחיר החולצה המקורי.", math_expression: "x = 120" }
        ],
        final_answer: "120"
    },
    {
        topic: "math35172",
        subTopic: "בעיות קנייה ומכירה ואחוזים",
        question_text: "מחירו של טלוויזיה התייקר פעמיים ברציפות בדיוק באותו אחוז. לאחר שתי ההתייקרויות, מחירה עלה מ-2000 שקלים ל-2420 שקלים. באיזה אחוז התייקרה הטלוויזיה בכל פעם?",
        options: ["10", "20", "15", "12"],
        correctAnswer: 0,
        hint: "סמנו את כופל האחוזים באיקס. המשוואה תהיה 2000 כפול איקס בריבוע שווה ל-2420.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את הכופל המייצג את התייקרות הטלוויזיה באות איקס.", math_expression: "x" },
            { verbal_explanation: "שלב ב': נרכיב משוואה שבה המחיר המקורי מוכפל פעמיים באיקס (איקס בריבוע) ושווה למחיר הסופי.", math_expression: "2000 \\times x^2 = 2420" },
            { verbal_explanation: "שלב ג': נחלק את שני האגפים ב-2000 כדי לבודד את האיקס בריבוע.", math_expression: "x^2 = 2420 : 2000" },
            { verbal_explanation: "שלב ד': נחשב את תוצאת החלוקה.", math_expression: "x^2 = 1.21" },
            { verbal_explanation: "שלב ה': נוציא שורש ריבועי כדי למצוא את הכופל איקס.", math_expression: "x = \\sqrt{1.21} = 1.1" },
            { verbal_explanation: "שלב ו': כופל של 1.1 מייצג התייקרות של 10 אחוזים.", math_expression: "10" }
        ],
        final_answer: "10"
    },
    {
        topic: "math35172",
        subTopic: "בעיות קנייה ומכירה ואחוזים",
        question_text: "מחירם של חולצה ומכנס יחד הוא 300 שקלים. מחיר החולצה התייקר ב-20 אחוזים, ומחיר המכנס הוזל ב-20 אחוזים. לאחר השינויים, המחיר הכולל של שניהם יחד ירד ל-260 שקלים. מה היה מחירה המקורי של החולצה?",
        options: ["50", "100", "150", "80"],
        correctAnswer: 0,
        hint: "סמנו את החולצה באיקס ואת המכנס בהשלמה ל-300. הכופלים הם 1.2 ו-0.8.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את מחיר החולצה המקורי באיקס. לכן מחיר המכנס הוא 300 פחות איקס.", math_expression: "x \\quad , \\quad 300 - x" },
            { verbal_explanation: "שלב ב': נבנה משוואה המורכבת ממחיר החולצה המעודכן (הכפלה ב-1.2) ועוד מחיר המכנס המעודכן (הכפלה ב-0.8).", math_expression: "1.2 \\times x + 0.8 \\times (300 - x) = 260" },
            { verbal_explanation: "שלב ג': נפתח את הסוגריים על ידי הכפלת 0.8 בכל אחד מהאיברים בפנים.", math_expression: "1.2 \\times x + 240 - 0.8 \\times x = 260" },
            { verbal_explanation: "שלב ד': נכנס את האיברים של האיקס.", math_expression: "0.4 \\times x + 240 = 260" },
            { verbal_explanation: "שלב ה': נחסר 240 משני אגפי המשוואה.", math_expression: "0.4 \\times x = 20" },
            { verbal_explanation: "שלב ו': נחלק ב-0.4 כדי למצוא את מחיר החולצה המקורי.", math_expression: "x = 20 : 0.4 = 50" }
        ],
        final_answer: "50"
    },
    {
        topic: "math35172",
        subTopic: "בעיות קנייה ומכירה ואחוזים",
        question_text: "חנות בגדים הכריזה על מבצע של 30 אחוזי הנחה על כל החנות. לקוח קנה מעיל ושילם עליו 210 שקלים לאחר ההנחה. מה היה מחירו של המעיל לפני ההנחה?",
        options: ["300", "280", "350", "240"],
        correctAnswer: 0,
        hint: "המחיר לאחר הנחה מהווה 70 אחוזים מהמחיר המקורי.",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב מהו אחוז התשלום בפועל מתוך המחיר המלא.", math_expression: "100 - 30 = 70" },
            { verbal_explanation: "שלב ב': נכתוב את כופל האחוז המייצג 70 אחוזים.", math_expression: "0.7" },
            { verbal_explanation: "שלב ג': נבנה משוואה שבה המחיר המקורי (איקס) כפול הכופל שווה לתשלום בפועל.", math_expression: "x \\times 0.7 = 210" },
            { verbal_explanation: "שלב ד': נחלק את התשלום בכופל למציאת המחיר המקורי.", math_expression: "x = 210 : 0.7 = 300" }
        ],
        final_answer: "300"
    },
    {
        topic: "math35172",
        subTopic: "בעיות קנייה ומכירה ואחוזים",
        question_text: "משכורתו של עובד הועלתה ב-10 אחוזים. לאחר שנה, עקב קיצוצים, ירדה משכורתו ב-10 אחוזים. כעת משכורתו עומדת על 9900 שקלים. מה הייתה משכורתו המקורית לפני השינויים?",
        options: ["10000", "9900", "11000", "10100"],
        correctAnswer: 0,
        hint: "עלייה של 10 אחוזים ולאחריה ירידה של 10 אחוזים לא מחזירות אותנו למחיר המקורי. הכפילו את הכופלים.",
        solution_steps: [
            { verbal_explanation: "שלב א': נמצא את הכופל לעליית השכר.", math_expression: "1.1" },
            { verbal_explanation: "שלב ב': נמצא את הכופל לירידת השכר.", math_expression: "0.9" },
            { verbal_explanation: "שלב ג': נכפיל את שני הכופלים כדי לקבל את כופל השינוי הכולל.", math_expression: "1.1 \\times 0.9 = 0.99" },
            { verbal_explanation: "שלב ד': נבנה משוואה שבה המשכורת המקורית כפול הכופל הכולל שווה למשכורת הנוכחית.", math_expression: "x \\times 0.99 = 9900" },
            { verbal_explanation: "שלב ה': נחלק ב-0.99 כדי למצוא את המשכורת ההתחלתית.", math_expression: "x = 9900 : 0.99 = 10000" }
        ],
        final_answer: "10000"
    },
    {
        topic: "math35172",
        subTopic: "בעיות קנייה ומכירה ואחוזים",
        question_text: "מחירו של שולחן גדול ב-150 שקלים ממחירו של כיסא. משפחה קנתה 2 שולחנות ו-6 כיסאות ושילמה בסך הכל 1100 שקלים. מהו מחירו של כיסא בודד?",
        options: ["100", "150", "200", "50"],
        correctAnswer: 0,
        hint: "סמנו את מחיר הכיסא באיקס, ולכן השולחן יהיה איקס פלוס 150.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את מחיר הכיסא במשתנה איקס. לכן מחיר השולחן הוא איקס ועוד 150.", math_expression: "x \\quad , \\quad x + 150" },
            { verbal_explanation: "שלב ב': נבנה משוואה שמשלבת את הכמויות שנקנו עם המחירים, ומשווה לסכום הכולל.", math_expression: "2 \\times (x + 150) + 6 \\times x = 1100" },
            { verbal_explanation: "שלב ג': נפתח את הסוגריים.", math_expression: "2 \\times x + 300 + 6 \\times x = 1100" },
            { verbal_explanation: "שלב ד': נכנס איברים המכילים את המשתנה איקס.", math_expression: "8 \\times x + 300 = 1100" },
            { verbal_explanation: "שלב ה': נחסר 300 משני הצדדים.", math_expression: "8 \\times x = 800" },
            { verbal_explanation: "שלב ו': נחלק ב-8 למציאת מחיר הכיסא.", math_expression: "x = 100" }
        ],
        final_answer: "100"
    },
    {
        topic: "math35172",
        subTopic: "בעיות קנייה ומכירה ואחוזים",
        question_text: "סוחר קנה כמות מסוימת של מוצרים ושילם עליהם 600 שקלים. 2 מוצרים נשברו ולא נמכרו. את שאר המוצרים הוא מכר ברווח של 5 שקלים לכל מוצר. הרווח הכולל שלו בעסקה היה 30 שקלים. כמה מוצרים קנה הסוחר מלכתחילה?",
        options: ["20", "24", "15", "12"],
        correctAnswer: 0,
        hint: "מחיר הקנייה ליחידה הוא 600 חלקי איקס. מחיר המכירה ליחידה גבוה ממנו ב-5 שקלים.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את מספר המוצרים שקנה באיקס. מחיר הקנייה למוצר בודד הוא ההוצאה הכוללת חלקי איקס.", math_expression: "\\displaystyle \\frac{600}{x}" },
            { verbal_explanation: "שלב ב': מחיר המכירה של כל מוצר תקין גבוה ב-5 שקלים ממחיר הקנייה.", math_expression: "\\displaystyle \\frac{600}{x} + 5" },
            { verbal_explanation: "שלב ג': כמות המוצרים שנמכרו בפועל היא איקס פחות 2. ההכנסה הכוללת (ההוצאה פלוס הרווח) היא 630.", math_expression: "(x - 2) \\times (\\displaystyle \\frac{600}{x} + 5) = 630" },
            { verbal_explanation: "שלב ד': נפתח סוגריים ונקבל משוואה ארוכה.", math_expression: "600 + 5 \\times x - \\displaystyle \\frac{1200}{x} - 10 = 630" },
            { verbal_explanation: "שלב ה': נסדר את המשוואה ונעביר הכל לאגף אחד.", math_expression: "5 \\times x - \\displaystyle \\frac{1200}{x} - 40 = 0" },
            { verbal_explanation: "שלב ו': נכפיל את כל המשוואה במשתנה איקס כדי לבטל את קו השבר.", math_expression: "5 \\times x^2 - 40 \\times x - 1200 = 0" },
            { verbal_explanation: "שלב ז': נחלק את כל המשוואה ב-5 לקבלת משוואה ריבועית פשוטה.", math_expression: "x^2 - 8 \\times x - 240 = 0" },
            { verbal_explanation: "שלב ח': נפתור בעזרת טרינום. המספרים הם 20 ומינוס 12. נבחר בתוצאה החיובית.", math_expression: "(x - 20) \\times (x + 12) = 0 \\quad \\Rightarrow \\quad x = 20" }
        ],
        final_answer: "20"
    },
    {
        topic: "math35172",
        subTopic: "בעיות קנייה ומכירה ואחוזים",
        question_text: "מחירו של מוצר א' יקר ב-25 אחוזים ממחירו של מוצר ב'. ההפרש בין המחירים שלהם הוא 40 שקלים. מהו מחירו של מוצר א'?",
        options: ["200", "160", "240", "180"],
        correctAnswer: 0,
        hint: "סמנו את מחיר מוצר ב' באיקס. מוצר א' יהיה 1.25 איקס.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את מחיר המוצר הזול יותר (מוצר ב') באיקס.", math_expression: "x" },
            { verbal_explanation: "שלב ב': מוצר א' יקר ממנו ב-25 אחוזים, לכן מחירו יוכפל ב-1.25.", math_expression: "1.25 \\times x" },
            { verbal_explanation: "שלב ג': נתון שההפרש בין המחירים הוא 40. נבנה משוואת חיסור.", math_expression: "1.25 \\times x - x = 40" },
            { verbal_explanation: "שלב ד': נחסר את האיקסים (1.25 פחות 1).", math_expression: "0.25 \\times x = 40" },
            { verbal_explanation: "שלב ה': נחלק ב-0.25 (או נכפיל ב-4) כדי למצוא את מחיר מוצר ב'.", math_expression: "x = 160" },
            { verbal_explanation: "שלב ו': נחשב את מחירו של מוצר א' על ידי הוספת ההפרש.", math_expression: "160 + 40 = 200" }
        ],
        final_answer: "200"
    },
    {
        topic: "math35172",
        subTopic: "בעיות קנייה ומכירה ואחוזים",
        question_text: "אדם קנה בחנות הירקות 5 ק\"ג תפוחים ו-3 ק\"ג אגסים, ושילם עבורם סך הכל 60 שקלים. מחיר קילוגרם תפוחים זול ב-4 שקלים ממחיר קילוגרם אגסים. מהו מחירו של קילוגרם תפוחים אחד?",
        options: ["6", "10", "8", "4"],
        correctAnswer: 0,
        hint: "סמנו את מחיר התפוחים באיקס, ואת מחיר האגסים באיקס פלוס 4.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את מחיר התפוחים במשתנה איקס. לכן מחיר האגסים הוא איקס ועוד 4.", math_expression: "x \\quad , \\quad x + 4" },
            { verbal_explanation: "שלב ב': נבנה משוואה שמסכמת את כמות הקילוגרמים כפול המחירים המתאימים להם.", math_expression: "5 \\times x + 3 \\times (x + 4) = 60" },
            { verbal_explanation: "שלב ג': נפתח את הסוגריים.", math_expression: "5 \\times x + 3 \\times x + 12 = 60" },
            { verbal_explanation: "שלב ד': נכנס את האיברים ונעביר את המספר 12 לאגף הימני.", math_expression: "8 \\times x = 60 - 12" },
            { verbal_explanation: "שלב ה': נחשב את ההפרש.", math_expression: "8 \\times x = 48" },
            { verbal_explanation: "שלב ו': נחלק בשמונה למציאת מחיר התפוחים.", math_expression: "x = 6" }
        ],
        final_answer: "6"
    },
    {
        topic: "math35172",
        subTopic: "בעיות קנייה ומכירה ואחוזים",
        question_text: "עובד מכירות מקבל בסוף החודש בונוס המהווה 15 אחוזים מסך המכירות שביצע. בחודש מסוים, קיבל העובד בונוס על סך 450 שקלים. מה היה סך כל המכירות של העובד באותו חודש?",
        options: ["3000", "2500", "3500", "4000"],
        correctAnswer: 0,
        hint: "הבונוס מחושב על ידי הכפלת סך המכירות ב-0.15.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את סך המכירות הכולל באות איקס.", math_expression: "x" },
            { verbal_explanation: "שלב ב': נמיר את 15 האחוזים לשבר עשרוני.", math_expression: "0.15" },
            { verbal_explanation: "שלב ג': נבנה משוואה שבה סך המכירות כפול האחוז העשרוני שווה לסכום הבונוס.", math_expression: "x \\times 0.15 = 450" },
            { verbal_explanation: "שלב ד': נחלק את סכום הבונוס בשבר העשרוני כדי למצוא את הסך הכולל.", math_expression: "x = 450 : 0.15" },
            { verbal_explanation: "שלב ה': נחשב את תוצאת החלוקה.", math_expression: "x = 3000" }
        ],
        final_answer: "3000"
    },
    {
        topic: "math35172",
        subTopic: "בעיות קנייה ומכירה ואחוזים",
        question_text: "מחירו של מוצר התייקר ב-20 אחוזים. כעבור חודש, לרגל החג, ירד מחירו החדש ב-25 אחוזים. איזה אחוז מהווה המחיר הסופי מתוך המחיר המקורי של המוצר?",
        options: ["90", "95", "100", "85"],
        correctAnswer: 0,
        hint: "הכפילו את שני כופלי האחוזים (ההתייקרות וההוזלה) זה בזה.",
        solution_steps: [
            { verbal_explanation: "שלב א': נרשום את הכופל המייצג עלייה של 20 אחוזים.", math_expression: "1.2" },
            { verbal_explanation: "שלב ב': נרשום את הכופל המייצג ירידה של 25 אחוזים.", math_expression: "1 - 0.25 = 0.75" },
            { verbal_explanation: "שלב ג': נכפיל את שני הכופלים כדי לקבל את כופל השינוי הסופי.", math_expression: "1.2 \\times 0.75 = 0.9" },
            { verbal_explanation: "שלב ד': כופל של 0.9 מעיד על כך שהמחיר מהווה 90 אחוזים מהמחיר המקורי.", math_expression: "90" }
        ],
        final_answer: "90"
    },

    // ==========================================================
    // תת נושא 2: בעיות תנועה
    // ==========================================================
    {
        topic: "math35172",
        subTopic: "בעיות תנועה",
        question_text: "שני רכבים יצאו בו-זמנית זה לקראת זה משתי ערים שהמרחק ביניהן הוא 300 קילומטרים. מהירות הרכב הראשון היא 70 קמ\"ש ומהירות הרכב השני היא 80 קמ\"ש. לאחר כמה שעות ייפגשו שני הרכבים?\n" + svgMotion,
        options: ["2", "3", "1.5", "2.5"],
        correctAnswer: 0,
        hint: "זמן הנסיעה עד הפגישה זהה לשני הרכבים. סכום הדרכים שעברו שווה למרחק הכולל.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את זמן הנסיעה של שני הרכבים (שווה בגלל שיצאו יחד) במשתנה איקס.", math_expression: "x" },
            { verbal_explanation: "שלב ב': נרשום את הדרך שעבר הרכב הראשון (מהירות כפול זמן).", math_expression: "70 \\times x" },
            { verbal_explanation: "שלב ג': נרשום את הדרך שעבר הרכב השני (מהירות כפול זמן).", math_expression: "80 \\times x" },
            { verbal_explanation: "שלב ד': נבנה משוואה: סכום הדרכים שווה למרחק הכולל בין הערים.", math_expression: "70 \\times x + 80 \\times x = 300" },
            { verbal_explanation: "שלב ה': נכנס את המקדמים של האיקס.", math_expression: "150 \\times x = 300" },
            { verbal_explanation: "שלב ו': נחלק ב-150 למציאת הזמן בשעות.", math_expression: "x = 2" }
        ],
        final_answer: "2"
    },
    {
        topic: "math35172",
        subTopic: "בעיות תנועה",
        question_text: "סירה שטה בנהר מרחק של 15 קילומטרים נגד כיוון הזרם, ומיד חוזרת 15 קילומטרים עם כיוון הזרם. מהירות זרם הנהר היא 2 קמ\"ש. זמן השיט הכולל הלוך וחזור היה 4 שעות. מהי מהירות הסירה במים עומדים?",
        options: ["8", "10", "6", "12"],
        correctAnswer: 0,
        hint: "המהירות נגד הזרם היא מהירות הסירה פחות 2, והמהירות עם הזרם היא מהירות הסירה ועוד 2. זמן הוא דרך חלקי מהירות.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את מהירות הסירה במים עומדים במשתנה איקס.", math_expression: "x" },
            { verbal_explanation: "שלב ב': המהירות נגד הזרם תהיה איקס פחות 2, והמהירות עם הזרם תהיה איקס ועוד 2.", math_expression: "x - 2 \\quad , \\quad x + 2" },
            { verbal_explanation: "שלב ג': נבנה משוואת זמנים. זמן מחושב כדרך חלקי מהירות. נחבר את זמן ההלוך והחזור לזמן הכולל.", math_expression: "\\displaystyle \\frac{15}{x - 2} + \\displaystyle \\frac{15}{x + 2} = 4" },
            { verbal_explanation: "שלב ד': נכפיל את כל המשוואה במכנה המשותף כדי לבטל את השברים.", math_expression: "15 \\times (x + 2) + 15 \\times (x - 2) = 4 \\times (x - 2) \\times (x + 2)" },
            { verbal_explanation: "שלב ה': נפתח סוגריים. באגף ימין נשתמש בנוסחת הפרש ריבועים.", math_expression: "15 \\times x + 30 + 15 \\times x - 30 = 4 \\times (x^2 - 4)" },
            { verbal_explanation: "שלב ו': נכנס איברים ונפתח סוגריים באגף ימין.", math_expression: "30 \\times x = 4 \\times x^2 - 16" },
            { verbal_explanation: "שלב ז': נסדר את המשוואה כמשוואה ריבועית השווה לאפס.", math_expression: "4 \\times x^2 - 30 \\times x - 16 = 0" },
            { verbal_explanation: "שלב ח': נחלק בשתיים להקלה על הפתרון.", math_expression: "2 \\times x^2 - 15 \\times x - 8 = 0" },
            { verbal_explanation: "שלב ט': נפתור בעזרת נוסחת השורשים. נמצא את הפתרון החיובי.", math_expression: "x = 8" }
        ],
        final_answer: "8"
    },
    {
        topic: "math35172",
        subTopic: "בעיות תנועה",
        question_text: "מכונית נסעה 4 שעות במהירות מסוימת, ולאחר מכן נסעה עוד 3 שעות במהירות הגדולה ב-10 קמ\"ש ממהירותה הקודמת. בסך הכל עברה המכונית דרך של 520 ק\"מ. מה הייתה מהירותה ההתחלתית?",
        options: ["70", "60", "80", "75"],
        correctAnswer: 0,
        hint: "הדרך הכוללת היא סכום הדרך של החלק הראשון והדרך של החלק השני.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את המהירות בחלק הראשון של הנסיעה באיקס.", math_expression: "x" },
            { verbal_explanation: "שלב ב': נחשב את הדרך שעברה המכונית בחלק הראשון (זמן כפול מהירות).", math_expression: "4 \\times x" },
            { verbal_explanation: "שלב ג': נחשב את המהירות בחלק השני.", math_expression: "x + 10" },
            { verbal_explanation: "שלב ד': נחשב את הדרך שעברה בחלק השני.", math_expression: "3 \\times (x + 10)" },
            { verbal_explanation: "שלב ה': נחבר את שתי הדרכים ונשווה למרחק הכולל הנתון.", math_expression: "4 \\times x + 3 \\times (x + 10) = 520" },
            { verbal_explanation: "שלב ו': נפתח סוגריים.", math_expression: "4 \\times x + 3 \\times x + 30 = 520" },
            { verbal_explanation: "שלב ז': נכנס איברים ונעביר מספרים.", math_expression: "7 \\times x = 490" },
            { verbal_explanation: "שלב ח': נחלק בשבע למציאת המהירות ההתחלתית.", math_expression: "x = 70" }
        ],
        final_answer: "70"
    },
    {
        topic: "math35172",
        subTopic: "בעיות תנועה",
        question_text: "משאית נסעה מעיר א' לעיר ב', מרחק של 240 ק\"מ, במהירות קבועה. בדרכה חזרה, נסעה המשאית במהירות הנמוכה ב-20 קמ\"ש ממהירותה בהלוך, ולכן זמן נסיעתה חזרה התארך בשעה אחת. מה הייתה מהירות המשאית בדרכה הלוך?",
        options: ["80", "60", "100", "70"],
        correctAnswer: 0,
        hint: "זמן החזור שווה לזמן ההלוך פלוס 1. בנו משוואת זמנים.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את מהירות המשאית בהלוך באיקס. לכן המהירות בחזור היא איקס פחות 20.", math_expression: "x \\quad , \\quad x - 20" },
            { verbal_explanation: "שלב ב': נרשום את הזמן שלקח למשאית להגיע לעיר ב'.", math_expression: "\\displaystyle \\frac{240}{x}" },
            { verbal_explanation: "שלב ג': נרשום את הזמן שלקח לה לחזור.", math_expression: "\\displaystyle \\frac{240}{x - 20}" },
            { verbal_explanation: "שלב ד': נבנה משוואה: זמן החזור גדול בשעה מזמן ההלוך.", math_expression: "\\displaystyle \\frac{240}{x - 20} - \\displaystyle \\frac{240}{x} = 1" },
            { verbal_explanation: "שלב ה': נכפיל במכנה המשותף כדי להיפטר מהשברים.", math_expression: "240 \\times x - 240 \\times (x - 20) = x \\times (x - 20)" },
            { verbal_explanation: "שלב ו': נפתח סוגריים ונסדר את המשוואה.", math_expression: "240 \\times x - 240 \\times x + 4800 = x^2 - 20 \\times x" },
            { verbal_explanation: "שלב ז': נסדר כמשוואה ריבועית ונפתור בעזרת טרינום או נוסחת שורשים.", math_expression: "x^2 - 20 \\times x - 4800 = 0" },
            { verbal_explanation: "שלב ח': נמצא את הפתרון החיובי.", math_expression: "(x - 80) \\times (x + 60) = 0 \\quad \\Rightarrow \\quad x = 80" }
        ],
        final_answer: "80"
    },
    {
        topic: "math35172",
        subTopic: "בעיות תנועה",
        question_text: "רוכב אופניים תכנן לעבור מרחק של 60 ק\"מ במהירות קבועה. בפועל, הגדיל הרוכב את מהירותו ב-5 קמ\"ש, וכתוצאה מכך זמן נסיעתו התקצר בשעתיים בהשוואה לזמן המתוכנן. מה הייתה מהירותו המתוכננת?",
        options: ["10", "15", "12", "8"],
        correctAnswer: 0,
        hint: "הזמן המתוכנן פחות הזמן בפועל שווה ל-2 שעות.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את המהירות המתוכננת של הרוכב באיקס.", math_expression: "x" },
            { verbal_explanation: "שלב ב': נבנה משוואה המבטאת את ההפרש בין הזמנים (זמן מתוכנן איטי פחות זמן מהיר שווה שעתיים).", math_expression: "\\displaystyle \\frac{60}{x} - \\displaystyle \\frac{60}{x + 5} = 2" },
            { verbal_explanation: "שלב ג': נחלק את כל המשוואה בשתיים כדי לפשט את המספרים.", math_expression: "\\displaystyle \\frac{30}{x} - \\displaystyle \\frac{30}{x + 5} = 1" },
            { verbal_explanation: "שלב ד': נכפיל במכנה המשותף כדי לסלק שברים.", math_expression: "30 \\times (x + 5) - 30 \\times x = x \\times (x + 5)" },
            { verbal_explanation: "שלב ה': נפתח סוגריים.", math_expression: "30 \\times x + 150 - 30 \\times x = x^2 + 5 \\times x" },
            { verbal_explanation: "שלב ו': נסדר את המשוואה כמשוואה ריבועית.", math_expression: "x^2 + 5 \\times x - 150 = 0" },
            { verbal_explanation: "שלב ז': נפתור בעזרת טרינום ونמצא את הערך החיובי.", math_expression: "(x + 15) \\times (x - 10) = 0 \\quad \\Rightarrow \\quad x = 10" }
        ],
        final_answer: "10"
    },
    {
        topic: "math35172",
        subTopic: "בעיות תנועה",
        question_text: "שני רוכבי אופניים יצאו מאותה נקודה ונסעו לכיוונים מנוגדים. מהירות הרוכב הראשון הייתה 15 קמ\"ש ומהירות השני הייתה 25 קמ\"ש. לאחר כמה שעות המרחק ביניהם יהיה 120 קילומטרים?",
        options: ["3", "2.5", "4", "2"],
        correctAnswer: 0,
        hint: "כאשר נוסעים לכיוונים מנוגדים מאותה נקודה, המרחק ביניהם הוא סכום הדרכים שעברו.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את מספר השעות שנסעו במשתנה איקס.", math_expression: "x" },
            { verbal_explanation: "שלב ב': נחשב את המרחק שעבר הרוכב הראשון.", math_expression: "15 \\times x" },
            { verbal_explanation: "שלב ג': נחשב את המרחק שעבר הרוכב השני.", math_expression: "25 \\times x" },
            { verbal_explanation: "שלב ד': נבנה משוואה שבה סכום הדרכים שווה למרחק המבוקש.", math_expression: "15 \\times x + 25 \\times x = 120" },
            { verbal_explanation: "שלב ה': נכנס איברים.", math_expression: "40 \\times x = 120" },
            { verbal_explanation: "שלב ו': נחלק בארבעים כדי למצוא את הזמן.", math_expression: "x = 3" }
        ],
        final_answer: "3"
    },
    {
        topic: "math35172",
        subTopic: "בעיות תנועה",
        question_text: "רכבת צריכה לעבור מרחק של 360 ק\"מ במהירות קבועה כדי להגיע ליעדה בזמן. יום אחד התעכבה הרכבת בתחנת המוצא במשך שעה אחת, ולכן נסעה במהירות הגדולה ב-18 קמ\"ש ממהירותה הרגילה, והגיעה ליעדה בדיוק בזמן. מהי מהירותה הרגילה של הרכבת?",
        options: ["72", "90", "60", "80"],
        correctAnswer: 0,
        hint: "הזמן המתוכנן שווה לזמן בפועל בתוספת זמן העיכוב.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את מהירות הרכבת הרגילה באיקס. הזמן המתוכנן הוא דרך חלקי מהירות.", math_expression: "\\displaystyle \\frac{360}{x}" },
            { verbal_explanation: "שלב ב': המהירות בפועל הייתה איקס פלוס 18. נחשב את זמן הנסיעה בפועל.", math_expression: "\\displaystyle \\frac{360}{x + 18}" },
            { verbal_explanation: "שלב ג': נבנה משוואה: זמן הנסיעה הרגיל (הארוך יותר) פחות זמן הנסיעה המהיר (הקצר) שווה לשעת העיכוב.", math_expression: "\\displaystyle \\frac{360}{x} - \\displaystyle \\frac{360}{x + 18} = 1" },
            { verbal_explanation: "שלב ד': נכפיל במכנה המשותף.", math_expression: "360 \\times (x + 18) - 360 \\times x = x \\times (x + 18)" },
            { verbal_explanation: "שלב ה': נפתח סוגריים ונסדר את המשוואה.", math_expression: "360 \\times x + 6480 - 360 \\times x = x^2 + 18 \\times x" },
            { verbal_explanation: "שלב ו': נרשום משוואה ריבועית שווה לאפס.", math_expression: "x^2 + 18 \\times x - 6480 = 0" },
            { verbal_explanation: "שלב ז': נפתור ונמצא את התשובה החיובית.", math_expression: "x = 72" }
        ],
        final_answer: "72"
    },
    {
        topic: "math35172",
        subTopic: "בעיות תנועה",
        question_text: "רוכב אופניים יצא מעיר א' לעיר ב'. את שליש הדרך הראשון הוא עבר במהירות של 15 קמ\"ש, ואת שאר הדרך הוא עבר במהירות של 30 קמ\"ש. סך הכל ארכה נסיעתו 4 שעות. מהו המרחק הכולל בין עיר א' לעיר ב'?",
        options: ["90", "120", "60", "100"],
        correctAnswer: 0,
        hint: "סמנו את המרחק הכולל באיקס (או ב-S). חלקו את המרחקים בהתאמה ורשמו משוואת זמנים.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את המרחק הכולל באות איקס.", math_expression: "x" },
            { verbal_explanation: "שלב ב': נחשב את זמן הנסיעה של השליש הראשון.", math_expression: "\\displaystyle \\frac{x : 3}{15} = \\displaystyle \\frac{x}{45}" },
            { verbal_explanation: "שלב ג': נחשב את שאר הדרך (שני שלישים) ואת זמן הנסיעה עבורה.", math_expression: "\\displaystyle \\frac{2 \\times x : 3}{30} = \\displaystyle \\frac{2 \\times x}{90} = \\displaystyle \\frac{x}{45}" },
            { verbal_explanation: "שלב ד': נחבר את הזמנים ונשווה לזמן הכולל (4 שעות).", math_expression: "\\displaystyle \\frac{x}{45} + \\displaystyle \\frac{x}{45} = 4" },
            { verbal_explanation: "שלב ה': נחבר את השברים בעלי המכנה המשותף.", math_expression: "\\displaystyle \\frac{2 \\times x}{45} = 4" },
            { verbal_explanation: "שלב ו': נכפיל באלכסון (45 כפול 4).", math_expression: "2 \\times x = 180" },
            { verbal_explanation: "שלב ז': נחלק בשתיים למציאת המרחק הכולל.", math_expression: "x = 90" }
        ],
        final_answer: "90"
    },
    {
        topic: "math35172",
        subTopic: "בעיות תנועה",
        question_text: "מכונית א' יצאה לדרכה במהירות של 60 קמ\"ש. שעתיים לאחר מכן, יצאה מאותה נקודה ולאותו כיוון מכונית ב' במהירות של 80 קמ\"ש. כמה שעות תיסע מכונית ב' עד שתשיג את מכונית א'?",
        options: ["6", "4", "8", "5"],
        correctAnswer: 0,
        hint: "בנקודת המפגש, הדרך שעברה מכונית א' שווה לדרך שעברה מכונית ב'.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את זמן הנסיעה של מכונית ב' באיקס.", math_expression: "x" },
            { verbal_explanation: "שלב ב': מכונית א' נסעה שעתיים יותר, לכן הזמן שלה הוא איקס פלוס שתיים.", math_expression: "x + 2" },
            { verbal_explanation: "שלב ג': הדרך שעברה מכונית א' היא מהירותה כפול הזמן.", math_expression: "60 \\times (x + 2)" },
            { verbal_explanation: "שלב ד': הדרך שעברה מכונית ב' היא מהירותה כפול הזמן.", math_expression: "80 \\times x" },
            { verbal_explanation: "שלב ה': נשווה את הדרכים מכיוון שהן נפגשו.", math_expression: "80 \\times x = 60 \\times (x + 2)" },
            { verbal_explanation: "שלב ו': נפתח סוגריים.", math_expression: "80 \\times x = 60 \\times x + 120" },
            { verbal_explanation: "שלב ז': נעביר אגפים ונחלץ את הזמן.", math_expression: "20 \\times x = 120 \\quad \\Rightarrow \\quad x = 6" }
        ],
        final_answer: "6"
    },
    {
        topic: "math35172",
        subTopic: "בעיות תנועה",
        question_text: "מכונית עוברת דרך מסוימת ב-5 שעות נסיעה. אם היא תגדיל את מהירותה ב-20 קמ\"ש, היא תעבור את אותה הדרך ב-4 שעות בלבד. מהו המרחק הכולל של הדרך בקילומטרים?",
        options: ["400", "300", "500", "200"],
        correctAnswer: 0,
        hint: "בנו משוואה המשווה את הדרך לפני ואחרי שינוי המהירות.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את המהירות ההתחלתית של המכונית באיקס.", math_expression: "x" },
            { verbal_explanation: "שלב ב': הדרך היא הזמן (5 שעות) כפול המהירות (איקס).", math_expression: "5 \\times x" },
            { verbal_explanation: "שלב ג': נרשום ביטוי לדרך לפי הנתונים החדשים (מהירות מוגדלת כפול זמן חדש).", math_expression: "4 \\times (x + 20)" },
            { verbal_explanation: "שלב ד': מכיוון שהדרך נותרה זהה, נשווה את שני הביטויים.", math_expression: "5 \\times x = 4 \\times (x + 20)" },
            { verbal_explanation: "שלב ה': נפתח סוגריים.", math_expression: "5 \\times x = 4 \\times x + 80" },
            { verbal_explanation: "שלב ו': נחסר ארבעה איקס משני הצדדים למציאת המהירות.", math_expression: "x = 80" },
            { verbal_explanation: "שלב ז': נחשב את המרחק על ידי הצבת המהירות בנוסחת הדרך הראשונה.", math_expression: "5 \\times 80 = 400" }
        ],
        final_answer: "400"
    },
    {
        topic: "math35172",
        subTopic: "בעיות תנועה",
        question_text: "רכב נסע מעיר אחת לאחרת במהירות של 90 קמ\"ש. בהגיעו ליעד הוא התעכב למשך חצי שעה, ולאחר מכן חזר באותה הדרך בדיוק במהירות של 100 קמ\"ש. הזמן הכולל שחלף מאז צאתו ועד חזרתו לנקודת ההתחלה היה 10 שעות. מהו המרחק בין שתי הערים?",
        options: ["450", "400", "500", "350"],
        correctAnswer: 0,
        hint: "זמן הנסיעה נטו (ללא העיכוב) הוא תשע וחצי שעות.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את המרחק בין הערים באות איקס.", math_expression: "x" },
            { verbal_explanation: "שלב ב': נחשב את הזמן שלקח לרכב בהלוך.", math_expression: "\\displaystyle \\frac{x}{90}" },
            { verbal_explanation: "שלב ג': נחשב את הזמן שלקח לרכב בחזור.", math_expression: "\\displaystyle \\frac{x}{100}" },
            { verbal_explanation: "שלב ד': נחסר את זמן העיכוב מהזמן הכולל כדי לקבל את זמן הנסיעה נטו.", math_expression: "10 - 0.5 = 9.5" },
            { verbal_explanation: "שלב ה': נבנה משוואת זמנים.", math_expression: "\\displaystyle \\frac{x}{90} + \\displaystyle \\frac{x}{100} = 9.5" },
            { verbal_explanation: "שלב ו': נכפיל במכנה המשותף 900.", math_expression: "10 \\times x + 9 \\times x = 8550" },
            { verbal_explanation: "שלב ז': נחבר את האיקסים.", math_expression: "19 \\times x = 8550" },
            { verbal_explanation: "שלב ח': נחלק ב-19 למציאת המרחק.", math_expression: "x = 450" }
        ],
        final_answer: "450"
    },
    {
        topic: "math35172",
        subTopic: "בעיות תנועה",
        question_text: "שתי סירות מנוע יצאו מאותה נקודה. סירה אחת נסעה צפונה במהירות של 30 קמ\"ש, והסירה השנייה נסעה מזרחה במהירות של 40 קמ\"ש. מה יהיה המרחק האווירי (בקו ישר) בין שתי הסירות לאחר שעתיים של נסיעה?",
        options: ["100", "140", "120", "50"],
        correctAnswer: 0,
        hint: "הסירות נעות בקווי אורך ורוחב היוצרים זווית ישרה. השתמשו במשפט פיתגורס.",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את המרחק שעברה הסירה שנסעה צפונה (מהירות כפול זמן).", math_expression: "30 \\times 2 = 60" },
            { verbal_explanation: "שלב ב': נחשב את המרחק שעברה הסירה שנסעה מזרחה.", math_expression: "40 \\times 2 = 80" },
            { verbal_explanation: "שלב ג': מכיוון שהסירות נעו בזווית ישרה זו לזו, נשתמש במשפט פיתגורס למציאת המרחק ביניהן.", math_expression: "60^2 + 80^2 = d^2" },
            { verbal_explanation: "שלב ד': נחשב את הריבועים ונחבר אותם.", math_expression: "3600 + 6400 = 10000" },
            { verbal_explanation: "שלב ה': נוציא שורש ריבועי כדי למצוא את המרחק המדויק.", math_expression: "\\sqrt{10000} = 100" }
        ],
        final_answer: "100"
    },

    // ==========================================================
    // תת נושא 3: בעיות גיאומטריות
    // ==========================================================
    {
        topic: "math35172",
        subTopic: "בעיות גיאומטריות",
        question_text: "במגרש מלבני, האורך גדול ב-4 מטרים מהרוחב. היקף המגרש הוא 40 מטרים. מהו שטח המגרש במ\"ר?\n" + svgGeoWord,
        options: ["96", "100", "120", "84"],
        correctAnswer: 0,
        hint: "היקף מלבן שווה לפעמיים האורך ועוד פעמיים הרוחב.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את רוחב המלבן במשתנה איקס.", math_expression: "x" },
            { verbal_explanation: "שלב ב': נבטא את האורך שגדול בארבע מהרוחב.", math_expression: "x + 4" },
            { verbal_explanation: "שלב ג': נבנה משוואה על פי נוסחת ההיקף של המלבן.", math_expression: "2 \\times x + 2 \\times (x + 4) = 40" },
            { verbal_explanation: "שלב ד': נפתח סוגריים.", math_expression: "2 \\times x + 2 \\times x + 8 = 40" },
            { verbal_explanation: "שלב ה': נכנס איברים ונעביר מספרים לאגף ימין.", math_expression: "4 \\times x = 32" },
            { verbal_explanation: "שלב ו': נחלק כדי למצוא את הרוחב.", math_expression: "x = 8" },
            { verbal_explanation: "שלב ז': נמצא את האורך על ידי הוספת ארבע לרוחב.", math_expression: "8 + 4 = 12" },
            { verbal_explanation: "שלב ח': נחשב את שטח המלבן (אורך כפול רוחב).", math_expression: "8 \\times 12 = 96" }
        ],
        final_answer: "96"
    },
    {
        topic: "math35172",
        subTopic: "בעיות גיאומטריות",
        question_text: "גינה מלבנית שמידותיה הן 20 מטרים אורך ו-15 מטרים רוחב. מסביב לגינה (רק בצד ימין למעלה, כלומר מוסיפים לאורך ולרוחב) סללו שביל ברוחב קבוע של איקס מטרים. ידוע כי השטח הכולל של הגינה והשביל יחד הוא 414 מ\"ר. מצאו את רוחב השביל.",
        options: ["3", "1.5", "2", "4"],
        correctAnswer: 0,
        hint: "האורך החדש הוא עשרים פלוס איקס. הרוחב החדש הוא חמש-עשרה פלוס איקס.",
        solution_steps: [
            { verbal_explanation: "שלב א': נגדיר את האורך והרוחב החדשים שכוללים את תוספת השביל.", math_expression: "20 + x \\quad , \\quad 15 + x" },
            { verbal_explanation: "שלב ב': נבנה משוואה על פי השטח הכולל החדש הנתון בבעיה.", math_expression: "(20 + x) \\times (15 + x) = 414" },
            { verbal_explanation: "שלב ג': נפתח סוגריים על ידי הכפלת כל האיברים.", math_expression: "300 + 20 \\times x + 15 \\times x + x^2 = 414" },
            { verbal_explanation: "שלב ד': נסדר כמשוואה ריבועית השווה לאפס.", math_expression: "x^2 + 35 \\times x - 114 = 0" },
            { verbal_explanation: "שלב ה': נפתור בעזרת נוסחת השורשים ונמצא את הפתרון החיובי לרוחב השביל.", math_expression: "x = 3" }
        ],
        final_answer: "3"
    },
    {
        topic: "math35172",
        subTopic: "בעיות גיאומטריות",
        question_text: "במשולש שווה שוקיים, הבסיס גדול ב-3 ס\"מ מכל אחת מהשוקיים. היקף המשולש הוא 36 ס\"מ. מהו אורך השוק של המשולש?",
        options: ["11", "14", "9", "12"],
        correctAnswer: 0,
        hint: "במשולש שווה שוקיים, שתי השוקיים שוות. סמנו שוק אחת באיקס.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את אורך השוק במשתנה איקס.", math_expression: "x" },
            { verbal_explanation: "שלב ב': נבטא את הבסיס שגדול משוק בשלושה סנטימטרים.", math_expression: "x + 3" },
            { verbal_explanation: "שלב ג': נבנה משוואה להיקף המשולש הכוללת שתי שוקיים ובסיס אחד.", math_expression: "x + x + (x + 3) = 36" },
            { verbal_explanation: "שלב ד': נכנס איברים (שלושה איקסים).", math_expression: "3 \\times x + 3 = 36" },
            { verbal_explanation: "שלב ה': נחסר שלוש מכל אגף.", math_expression: "3 \\times x = 33" },
            { verbal_explanation: "שלב ו': נחלק בשלוש למציאת אורך השוק.", math_expression: "x = 11" }
        ],
        final_answer: "11"
    },
    {
        topic: "math35172",
        subTopic: "בעיות גיאומטריות",
        question_text: "אם נגדיל את אורך צלעותיו של ריבוע ב-5 ס\"מ, שטח הריבוע יגדל ב-65 סמ\"ר בדיוק לעומת שטחו המקורי. מהו אורך הצלע של הריבוע המקורי?",
        options: ["4", "5", "6", "8"],
        correctAnswer: 0,
        hint: "בנו משוואה שבה השטח החדש (איקס פלוס חמש, הכל בריבוע) פחות השטח המקורי (איקס בריבוע) שווה ל-65.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את צלע הריבוע המקורי באיקס. השטח שלו הוא איקס בריבוע.", math_expression: "x^2" },
            { verbal_explanation: "שלב ב': שטח הריבוע החדש והמוגדל יהיה הצלע המוגדלת בחזקת שתיים.", math_expression: "(x + 5)^2" },
            { verbal_explanation: "שלב ג': נבנה משוואה על פי נתון ההפרש בין השטחים.", math_expression: "(x + 5)^2 - x^2 = 65" },
            { verbal_explanation: "שלב ד': נפתח סוגריים בעזרת נוסחת כפל מקוצר של חיבור.", math_expression: "x^2 + 10 \\times x + 25 - x^2 = 65" },
            { verbal_explanation: "שלב ה': נצמצם את ריבוע המשתנה ונשאר עם משוואה פשוטה.", math_expression: "10 \\times x + 25 = 65" },
            { verbal_explanation: "שלב ו': נעביר את עשרים וחמש לאגף הימני.", math_expression: "10 \\times x = 40" },
            { verbal_explanation: "שלב ז': נחלק למציאת אורך הצלע המקורית.", math_expression: "x = 4" }
        ],
        final_answer: "4"
    },
    {
        topic: "math35172",
        subTopic: "בעיות גיאומטריות",
        question_text: "במלבן נתון כי אורך האלכסון הוא 13 ס\"מ והיקף המלבן הוא 34 ס\"מ. מהו שטח המלבן?",
        options: ["60", "65", "120", "30"],
        correctAnswer: 0,
        hint: "סכום צלעות סמוכות הוא חצי מההיקף (17). השתמשו במשפט פיתגורס.",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את סכום שתי הצלעות השונות במלבן (חצי היקף).", math_expression: "34 : 2 = 17" },
            { verbal_explanation: "שלב ב': נסמן צלע אחת באיקס והשנייה ב-17 פחות איקס.", math_expression: "x \\quad , \\quad 17 - x" },
            { verbal_explanation: "שלב ג': נשתמש במשפט פיתגורס עם האלכסון שניתן בשאלה.", math_expression: "x^2 + (17 - x)^2 = 13^2" },
            { verbal_explanation: "שלב ד': נפתח את הסוגריים ואת הריבועים.", math_expression: "x^2 + 289 - 34 \\times x + x^2 = 169" },
            { verbal_explanation: "שלב ה': נכנס איברים ונסדר את המשוואה לאפס.", math_expression: "2 \\times x^2 - 34 \\times x + 120 = 0" },
            { verbal_explanation: "שלב ו': נחלק בשתיים כדי לפשט.", math_expression: "x^2 - 17 \\times x + 60 = 0" },
            { verbal_explanation: "שלב ז': נפתור ונמצא את שתי הצלעות (אלו הם שני השורשים).", math_expression: "x = 5 \\quad , \\quad x = 12" },
            { verbal_explanation: "שלב ח': נחשב את השטח על ידי הכפלת הצלעות.", math_expression: "5 \\times 12 = 60" }
        ],
        final_answer: "60"
    },
    {
        topic: "math35172",
        subTopic: "בעיות גיאומטריות",
        question_text: "במשולש ישר זווית, אורך ניצב אחד קטן ב-2 ס\"מ מאורך הניצב השני. אורך היתר הוא 10 ס\"מ. מהו שטח המשולש?",
        options: ["24", "48", "30", "20"],
        correctAnswer: 0,
        hint: "סמנו ניצב אחד באיקס והשני באיקס מינוס שתיים. הפעילו את משפט פיתגורס.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את הניצב הגדול באיקס ואת הקצר באיקס פחות שתיים.", math_expression: "x \\quad , \\quad x - 2" },
            { verbal_explanation: "שלב ב': נבנה משוואת פיתגורס יחד עם היתר.", math_expression: "x^2 + (x - 2)^2 = 10^2" },
            { verbal_explanation: "שלב ג': נפתח סוגריים ונעלה בריבוע.", math_expression: "x^2 + x^2 - 4 \\times x + 4 = 100" },
            { verbal_explanation: "שלב ד': נסדר כמשוואה ריבועית.", math_expression: "2 \\times x^2 - 4 \\times x - 96 = 0" },
            { verbal_explanation: "שלב ה': נחלק בשתיים.", math_expression: "x^2 - 2 \\times x - 48 = 0" },
            { verbal_explanation: "שלב ו': נפתור למציאת הערך החיובי של הניצב.", math_expression: "x = 8" },
            { verbal_explanation: "שלב ז': נמצא את הניצב השני.", math_expression: "8 - 2 = 6" },
            { verbal_explanation: "שלב ח': נחשב את שטח המשולש ישר הזווית (מכפלת הניצבים חלקי שתיים).", math_expression: "\\displaystyle \\frac{8 \\times 6}{2} = 24" }
        ],
        final_answer: "24"
    },
    {
        topic: "math35172",
        subTopic: "בעיות גיאומטריות",
        question_text: "היקף של מגרש מלבני הוא 60 מטרים. אם נגדיל את האורך ב-2 מטרים ונקטין את הרוחב ב-2 מטרים, שטחו יקטן ב-12 מ\"ר. מהו אורך המגרש המקורי (הצלע הארוכה)?",
        options: ["17", "13", "15", "20"],
        correctAnswer: 0,
        hint: "סכום אורך ורוחב הוא 30. סמנו אורך באיקס ורוחב ב-30 פחות איקס.",
        solution_steps: [
            { verbal_explanation: "שלב א': חצי מההיקף שווה לסכום האורך והרוחב של המלבן.", math_expression: "60 : 2 = 30" },
            { verbal_explanation: "שלב ב': נסמן את האורך באיקס ואת הרוחב ב-30 פחות איקס. שטחם המקורי הוא המכפלה שלהם.", math_expression: "x \\times (30 - x)" },
            { verbal_explanation: "שלב ג': נבטא את הממדים החדשים. אורך הוגדל בשתיים ורוחב הוקטן בשתיים.", math_expression: "x + 2 \\quad , \\quad 28 - x" },
            { verbal_explanation: "שלב ד': נבנה משוואה: השטח החדש קטן ב-12 מהשטח המקורי.", math_expression: "(x + 2) \\times (28 - x) = x \\times (30 - x) - 12" },
            { verbal_explanation: "שלב ה': נפתח סוגריים באגף שמאל.", math_expression: "28 \\times x - x^2 + 56 - 2 \\times x" },
            { verbal_explanation: "שלב ו': נפתח סוגריים באגף ימין ונשווה.", math_expression: "26 \\times x - x^2 + 56 = 30 \\times x - x^2 - 12" },
            { verbal_explanation: "שלב ז': נצמצם את האיקס בריבוע משני הצדדים ונעביר אגפים למציאת איקס.", math_expression: "4 \\times x = 68 \\quad \\Rightarrow \\quad x = 17" }
        ],
        final_answer: "17"
    },
    {
        topic: "math35172",
        subTopic: "בעיות גיאומטריות",
        question_text: "שטח ריבוע הוגדל כך שהפך למלבן. לשם כך, אורך צלע אחת של הריבוע הוגדל ב-3 ס\"מ ואורך הצלע הסמוכה הוגדל ב-1 ס\"מ. כתוצאה מכך, שטח המלבן שנוצר היה גדול ב-27 סמ\"ר משטח הריבוע המקורי. מהו אורך צלע הריבוע?",
        options: ["6", "5", "8", "4"],
        correctAnswer: 0,
        hint: "שטח המלבן החדש (איקס פלוס 3 כפול איקס פלוס 1) שווה לשטח הריבוע (איקס בריבוע) פלוס 27.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את צלע הריבוע המקורי באיקס. שטחו הוא איקס בריבוע.", math_expression: "x^2" },
            { verbal_explanation: "שלב ב': נגדיר את צלעות המלבן החדשות.", math_expression: "x + 3 \\quad , \\quad x + 1" },
            { verbal_explanation: "שלב ג': נרכיב משוואה המראה כי שטח המלבן גדול ב-27 משטח הריבוע.", math_expression: "(x + 3) \\times (x + 1) = x^2 + 27" },
            { verbal_explanation: "שלב ד': נפתח סוגריים באגף שמאל.", math_expression: "x^2 + x + 3 \\times x + 3 = x^2 + 27" },
            { verbal_explanation: "שלב ה': נצמצם את החזקה ונקבל משוואה פשוטה.", math_expression: "4 \\times x + 3 = 27" },
            { verbal_explanation: "שלב ו': נחסר שלוש מכל צד ונחלק.", math_expression: "4 \\times x = 24 \\quad \\Rightarrow \\quad x = 6" }
        ],
        final_answer: "6"
    },
    {
        topic: "math35172",
        subTopic: "בעיות גיאומטריות",
        question_text: "בטרפז שווה שוקיים, הבסיס העליון (הקצר) שווה באורכו לאורך השוק. הבסיס התחתון (הארוך) גדול מכל שוק ב-6 ס\"מ. היקף הטרפז כולו הוא 42 ס\"מ. מהו אורך השוק?",
        options: ["9", "12", "8", "10"],
        correctAnswer: 0,
        hint: "הטרפז מורכב מבסיס עליון ושתי שוקיים שכולם שווים לאיקס, ועוד בסיס תחתון ששווה לאיקס ועוד שש.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את השוק באיקס. בטרפז שווה שוקיים יש שתי שוקיים באורך זה.", math_expression: "x \\quad , \\quad x" },
            { verbal_explanation: "שלב ב': נתון שהבסיס העליון גם הוא שווה לשוק.", math_expression: "x" },
            { verbal_explanation: "שלב ג': נתון שהבסיס התחתון גדול בשש.", math_expression: "x + 6" },
            { verbal_explanation: "שלב ד': נבנה משוואה לחיבור כל הצלעות להיקף אחד.", math_expression: "x + x + x + x + 6 = 42" },
            { verbal_explanation: "שלב ה': נכנס איברים באגף שמאל.", math_expression: "4 \\times x + 6 = 42" },
            { verbal_explanation: "שלב ו': נחסר את שש ונחלק.", math_expression: "4 \\times x = 36 \\quad \\Rightarrow \\quad x = 9" }
        ],
        final_answer: "9"
    },
    {
        topic: "math35172",
        subTopic: "בעיות גיאומטריות",
        question_text: "במשולש ישר זווית, סכום שני הניצבים יחד הוא 14 ס\"מ. שטח המשולש הוא 24 סמ\"ר. מהו אורך היתר של המשולש?",
        options: ["10", "12", "14", "8"],
        correctAnswer: 0,
        hint: "מצאו את הניצבים מתוך הסכום והשטח, ולאחר מכן השתמשו במשפט פיתגורס ליתר.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן ניצב אחד באיקס. כיוון שסכומם 14, הניצב השני הוא 14 פחות איקס.", math_expression: "x \\quad , \\quad 14 - x" },
            { verbal_explanation: "שלב ב': שטח המשולש מחושב כמכפלת הניצבים חלקי שתיים.", math_expression: "\\displaystyle \\frac{x \\times (14 - x)}{2} = 24" },
            { verbal_explanation: "שלב ג': נכפיל את המשוואה בשתיים.", math_expression: "x \\times (14 - x) = 48" },
            { verbal_explanation: "שלב ד': נפתח סוגריים ונסדר משוואה ריבועית.", math_expression: "x^2 - 14 \\times x + 48 = 0" },
            { verbal_explanation: "שלב ה': נפתור בעזרת טרינום. נמצא שהניצבים הם 6 ו-8.", math_expression: "x = 6 \\quad , \\quad x = 8" },
            { verbal_explanation: "שלב ו': נמצא את היתר בעזרת משפט פיתגורס.", math_expression: "6^2 + 8^2 = 36 + 64 = 100" },
            { verbal_explanation: "שלב ז': נוציא שורש כדי למצוא את אורך היתר עצמו.", math_expression: "\\sqrt{100} = 10" }
        ],
        final_answer: "10"
    },
    {
        topic: "math35172",
        subTopic: "בעיות גיאומטריות",
        question_text: "אלכסון של מלבן ארוך ב-4 ס\"מ מאורך המלבן. רוחב המלבן נתון כ-8 ס\"מ. מהו אורך האלכסון של המלבן?",
        options: ["10", "6", "12", "14"],
        correctAnswer: 0,
        hint: "סמנו את האורך באיקס ואת האלכסון באיקס פלוס ארבע. השתמשו במשפט פיתגורס.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את אורך המלבן באיקס. לכן האלכסון יהיה איקס ועוד 4.", math_expression: "x \\quad , \\quad x + 4" },
            { verbal_explanation: "שלב ב': הצלע השנייה ידועה כ-8. נרכיב משוואת פיתגורס במלבן.", math_expression: "x^2 + 8^2 = (x + 4)^2" },
            { verbal_explanation: "שלב ג': נפתח את הסוגריים באגף הימני.", math_expression: "x^2 + 64 = x^2 + 8 \\times x + 16" },
            { verbal_explanation: "שלב ד': נצמצם את האיקס בריבוע ונעביר מספרים.", math_expression: "8 \\times x = 64 - 16 = 48" },
            { verbal_explanation: "שלב ה': נחלק בשמונה למציאת האורך.", math_expression: "x = 6" },
            { verbal_explanation: "שלב ו': נוסיף לאורך ארבע כדי למצוא את אורך האלכסון שהתבקש בשאלה.", math_expression: "6 + 4 = 10" }
        ],
        final_answer: "10"
    },
    {
        topic: "math35172",
        subTopic: "בעיות גיאומטריות",
        question_text: "שטחו של מעוין הוא 96 סמ\"ר. ידוע כי אורך אלכסון אחד גדול ב-4 ס\"מ מאורך האלכסון השני. מהו אורך האלכסון הארוך מבין השניים?",
        options: ["16", "12", "20", "8"],
        correctAnswer: 0,
        hint: "נוסחת שטח מעוין היא מכפלת האלכסונים חלקי שתיים.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן אלכסון אחד באיקס ואת האלכסון הארוך ממנו באיקס ועוד 4.", math_expression: "x \\quad , \\quad x + 4" },
            { verbal_explanation: "שלב ב': נבנה משוואה בעזרת נוסחת השטח למעוין ושטח הנתון.", math_expression: "\\displaystyle \\frac{x \\times (x + 4)}{2} = 96" },
            { verbal_explanation: "שלב ג': נכפיל את המשוואה בשתיים כדי לבטל את השבר.", math_expression: "x \\times (x + 4) = 192" },
            { verbal_explanation: "שלב ד': נפתח סוגריים ונסדר משוואה ריבועית המאופסת בצד ימין.", math_expression: "x^2 + 4 \\times x - 192 = 0" },
            { verbal_explanation: "שלב ה': נפתור בעזרת טרינום או נוסחה, למציאת הערך החיובי.", math_expression: "(x + 16) \\times (x - 12) = 0 \\quad \\Rightarrow \\quad x = 12" },
            { verbal_explanation: "שלב ו': האלכסון שמצאנו הוא הקצר. נוסיף לו 4 כדי למצוא את הארוך.", math_expression: "12 + 4 = 16" }
        ],
        final_answer: "16"
    }

];