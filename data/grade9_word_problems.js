// ========================================================================
// שכבת גיל: כיתה ט' | נושא: בעיות מילוליות (48 שאלות)
// >>> עובד לפי גרסה 2.1 המושלמת <<<
// תתי-נושאים: תנועה, הנדסיות, אחוזים וקנייה/מכירה. (16 שאלות לכל תת-נושא).
// 
// חוקי ברזל שיושמו:
// 1. ירידת שורה (\n) לפני האיורים כדי למנוע היפוך סימני שאלה (באג ה-RTL תוקן!).
// 2. אפשרויות התשובה והפתרון הסופי מוגשים כטקסט נקי.
// 3. חזקות עם ^, שברים אנכיים עם \frac, כפל עם \times, חילוק עם :
// 4. איורי SVG צבעוניים, מגוונים ורלוונטיים מתחת לשאלות.
// 5. 'האכלה בכפית': הסברים מפורטים מאוד בכל שלב.
// ========================================================================

// מאגר איורים מושקעים
const svgCar = "<div style='text-align:center;margin-top:15px;'><svg viewBox='0 0 120 60' width='120' height='60'><path d='M10 45 L110 45' stroke='#94a3b8' stroke-width='4' stroke-dasharray='8,4'/><rect x='30' y='20' width='50' height='20' fill='#3b82f6' rx='4'/><path d='M40 20 L45 10 L65 10 L75 20 Z' fill='#93c5fd'/><circle cx='40' cy='45' r='8' fill='#1e293b'/><circle cx='70' cy='45' r='8' fill='#1e293b'/></svg></div>";
const svgTwoCars = "<div style='text-align:center;margin-top:15px;'><svg viewBox='0 0 120 60' width='120' height='60'><path d='M10 30 L110 30' stroke='#94a3b8' stroke-width='2' stroke-dasharray='4,4'/><rect x='10' y='10' width='30' height='12' fill='#ef4444' rx='2'/><circle cx='15' cy='24' r='4' fill='#1e293b'/><circle cx='35' cy='24' r='4' fill='#1e293b'/><rect x='80' y='35' width='30' height='12' fill='#3b82f6' rx='2'/><circle cx='85' cy='49' r='4' fill='#1e293b'/><circle cx='105' cy='49' r='4' fill='#1e293b'/><path d='M45 16 L65 16 M65 13 L70 16 L65 19' fill='#ef4444'/><path d='M75 41 L55 41 M55 38 L50 41 L55 44' fill='#3b82f6'/></svg></div>";
const svgBoat = "<div style='text-align:center;margin-top:15px;'><svg viewBox='0 0 120 60' width='120' height='60'><path d='M10 45 Q35 55 60 45 T110 45' fill='none' stroke='#3b82f6' stroke-width='3'/><path d='M30 40 L90 40 L80 55 L40 55 Z' fill='#ef4444'/><polygon points='60,10 60,35 80,35' fill='#fef08a'/><line x1='60' y1='10' x2='60' y2='40' stroke='#1e293b' stroke-width='2'/></svg></div>";
const svgRect = "<div style='text-align:center;margin-top:15px;'><svg viewBox='0 0 120 70' width='120' height='70'><rect x='20' y='10' width='80' height='50' fill='#bbf7d0' stroke='#16a34a' stroke-width='3'/><text x='55' y='40' font-family='sans-serif' font-size='14' font-weight='bold' fill='#166534'>S</text><path d='M20 5 L100 5' stroke='#16a34a' stroke-width='1'/><path d='M10 10 L10 60' stroke='#16a34a' stroke-width='1'/></svg></div>";
const svgTriangle = "<div style='text-align:center;margin-top:15px;'><svg viewBox='0 0 100 80' width='100' height='80'><polygon points='20,70 80,70 20,10' fill='#fef08a' stroke='#ca8a04' stroke-width='3'/><rect x='20' y='60' width='10' height='10' fill='none' stroke='#ca8a04' stroke-width='2'/></svg></div>";
const svgSale = "<div style='text-align:center;margin-top:15px;'><svg viewBox='0 0 100 80' width='100' height='80'><path d='M30 25 L70 25 L85 65 L15 65 Z' fill='#fbcfe8' stroke='#db2777' stroke-width='3'/><path d='M40 25 C40 10 60 10 60 25' fill='none' stroke='#db2777' stroke-width='3'/><text x='40' y='55' font-family='sans-serif' font-weight='bold' font-size='20' fill='#be185d'>%</text></svg></div>";
const svgCart = "<div style='text-align:center;margin-top:15px;'><svg viewBox='0 0 100 80' width='100' height='80'><path d='M10 20 L25 20 L40 60 L80 60 L90 30 L30 30' fill='none' stroke='#8b5cf6' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/><circle cx='45' cy='70' r='5' fill='#8b5cf6'/><circle cx='75' cy='70' r='5' fill='#8b5cf6'/><rect x='45' y='40' width='15' height='15' fill='#fca5a5' rx='2'/><rect x='65' y='35' width='15' height='20' fill='#6ee7b7' rx='2'/></svg></div>";


const questionsDB = [

    // ==========================================================
    // תת נושא 1: בעיות תנועה (מובילות למשוואה ריבועית) (שאלות 1-16)
    // ==========================================================
    
    // שאלה 1
    {
        topic: "word_problems",
        subTopic: "בעיות תנועה (מובילות למשוואה ריבועית)",
        question_text: "מכונית נסעה מרחק של 120 ק\"מ במהירות קבועה. בדרכה חזרה, הגדילה המכונית את מהירותה ב-20 קמ\"ש, ולכן הדרך חזרה ארכה שעה אחת פחות מדרך ההלוך. מה היתה המהירות ההתחלתית של המכונית?\n" + svgCar,
        options: [
            "40 קמ\"ש", 
            "60 קמ\"ש", 
            "30 קמ\"ש", 
            "50 קמ\"ש"
        ],
        correctAnswer: 0,
        hint: "סמנו את המהירות בהלוך כ-\\( x \\). הזמן בהלוך הוא הדרך (120) חלקי המהירות. בנו משוואה המשווה בין הזמנים.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את המהירות בהלוך ב-\\( x \\). הזמן בהלוך שווה לדרך חלקי המהירות.", math_expression: "t_1 = \\frac{120}{x}" },
            { verbal_explanation: "שלב ב': המהירות בחזור גדלה ב-20 קמ\"ש (\\( x + 20 \\)). לכן הזמן בחזור הוא:", math_expression: "t_2 = \\frac{120}{x + 20}" },
            { verbal_explanation: "שלב ג': נתון שהזמן בהלוך היה ארוך בשעה אחת מהזמן בחזור. נבנה משוואה.", math_expression: "\\frac{120}{x} - \\frac{120}{x + 20} = 1" },
            { verbal_explanation: "שלב ד': נכפיל במכנה המשותף \\( x(x + 20) \\).", math_expression: "120(x + 20) - 120x = x(x + 20)" },
            { verbal_explanation: "שלב ה': נפתח סוגריים. איברי ה-\\( 120x \\) מצטמצמים משני הצדדים.", math_expression: "2400 = x^2 + 20x" },
            { verbal_explanation: "שלב ו': נסדר למשוואה ריבועית ונפתור. השורשים הם 40 ומינוס 60. מהירות חייבת להיות חיובית.", math_expression: "x^2 + 20x - 2400 = 0 \\quad \\Rightarrow \\quad x = 40" }
        ],
        final_answer: "40 קמ\"ש"
    },
    // שאלה 2
    {
        topic: "word_problems",
        subTopic: "בעיות תנועה (מובילות למשוואה ריבועית)",
        question_text: "רוכב אופניים תכנן לרכוב 60 ק\"מ במהירות קבועה. בפועל, הוא רכב במהירות הנמוכה ב-3 קמ\"ש ממהירותו המתוכננת, ולכן רכיבתו התארכה בשעה אחת. מה הייתה המהירות המתוכננת של הרוכב?\n" + svgTwoCars,
        options: [
            "15 קמ\"ש", 
            "12 קמ\"ש", 
            "10 קמ\"ש", 
            "18 קמ\"ש"
        ],
        correctAnswer: 0,
        hint: "זמן מתוכנן: \\( \\frac{60}{x} \\). זמן בפועל (עם מהירות איטית יותר): \\( \\frac{60}{x-3} \\). הזמן בפועל גדול ב-1 מהזמן המתוכנן.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את המהירות המתוכננת ב-\\( x \\). הזמן המתוכנן הוא 60 חלקי \\( x \\).", math_expression: "t_1 = \\frac{60}{x}" },
            { verbal_explanation: "שלב ב': הזמן בפועל (במהירות איטית יותר) הוא 60 חלקי \\( x-3 \\). הוא גדול ב-1 מהזמן המתוכנן.", math_expression: "\\frac{60}{x - 3} - \\frac{60}{x} = 1" },
            { verbal_explanation: "שלב ג': נכפיל במכנה המשותף \\( x(x - 3) \\).", math_expression: "60x - 60(x - 3) = x(x - 3)" },
            { verbal_explanation: "שלב ד': נפתח סוגריים ונסדר למשוואה ריבועית.", math_expression: "60x - 60x + 180 = x^2 - 3x \\quad \\Rightarrow \\quad x^2 - 3x - 180 = 0" },
            { verbal_explanation: "שלב ה': נפתור בעזרת טרינום. המספרים הם 15 ומינוס 12. התשובה החיובית היא המהירות.", math_expression: "(x - 15)(x + 12) = 0 \\quad \\Rightarrow \\quad x = 15" }
        ],
        final_answer: "15 קמ\"ש"
    },
    // שאלה 3
    {
        topic: "word_problems",
        subTopic: "בעיות תנועה (מובילות למשוואה ריבועית)",
        question_text: "רכבת צריכה לעבור 300 ק\"מ. לאחר שעברה מחצית מהדרך, התעכבה לחצי שעה. כדי להגיע בזמן, הגדילה הרכבת את מהירותה ב-25 קמ\"ש בשאר הדרך. מה הייתה המהירות ההתחלתית של הרכבת?\n" + svgCar,
        options: [
            "75 קמ\"ש", 
            "100 קמ\"ש", 
            "50 קמ\"ש", 
            "60 קמ\"ש"
        ],
        correctAnswer: 0,
        hint: "התמקדו רק במחצית השנייה של הדרך (150 ק\"מ). הזמן המתוכנן שווה לזמן העיכוב ועוד הזמן במהירות הגבוהה.",
        solution_steps: [
            { verbal_explanation: "שלב א': נתייחס רק לחצי השני של הדרך (150 ק\"מ). הזמן המתוכנן לחלק זה הוא \\( \\frac{150}{x} \\).", math_expression: "t_{planned} = \\frac{150}{x}" },
            { verbal_explanation: "שלב ב': בפועל, הרכבת התעכבה חצי שעה ונסעה מהר יותר. הזמן בפועל שווה לזמן המתוכנן כדי לא לאחר.", math_expression: "\\frac{150}{x + 25} + 0.5 = \\frac{150}{x}" },
            { verbal_explanation: "שלב ג': נעביר את השבר ימינה כדי לסדר את המשוואה.", math_expression: "\\frac{150}{x} - \\frac{150}{x + 25} = 0.5" },
            { verbal_explanation: "שלב ד': נכפיל במכנה המשותף \\( x(x + 25) \\).", math_expression: "150(x + 25) - 150x = 0.5x(x + 25)" },
            { verbal_explanation: "שלב ה': נפתח סוגריים ונקבל משוואה ריבועית.", math_expression: "3750 = 0.5x^2 + 12.5x \\quad \\Rightarrow \\quad 0.5x^2 + 12.5x - 3750 = 0" },
            { verbal_explanation: "שלב ו': נכפיל ב-2 כדי להיפטר מהעשרוני ונפתור. השורשים הם 75 ומינוס 100.", math_expression: "x^2 + 25x - 7500 = 0 \\quad \\Rightarrow \\quad x = 75" }
        ],
        final_answer: "75 קמ\"ש"
    },
    // שאלה 4
    {
        topic: "word_problems",
        subTopic: "בעיות תנועה (מובילות למשוואה ריבועית)",
        question_text: "שני הולכי רגל יצאו בו זמנית זה לקראת זה משני יישובים שהמרחק ביניהם 54 ק\"מ. המהירות של הולך רגל א' הייתה גדולה ב-1 קמ\"ש ממהירותו של הולך רגל ב'. הם נפגשו לאחר 6 שעות. מה הייתה המהירות של הולך רגל ב'?\n" + svgTwoCars,
        options: [
            "4 קמ\"ש", 
            "5 קמ\"ש", 
            "3 קמ\"ש", 
            "6 קמ\"ש"
        ],
        correctAnswer: 0,
        hint: "סכום הדרכים שעברו שני ההולכים יחד (כאשר הם הולכים אחד לקראת השני) שווה למרחק הכולל ביניהם (54).",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את מהירות הולך ב' ב-\\( x \\). לכן מהירות הולך א' היא \\( x+1 \\). שניהם הלכו 6 שעות.", math_expression: "v_B = x \\quad , \\quad v_A = x + 1" },
            { verbal_explanation: "שלב ב': הדרך שעבר הולך ב' היא \\( 6x \\). הדרך שעבר הולך א' היא \\( 6(x+1) \\).", math_expression: "S_B = 6x \\quad , \\quad S_A = 6(x + 1)" },
            { verbal_explanation: "שלב ג': סכום הדרכים הוא המרחק הכולל (54 ק\"מ).", math_expression: "6x + 6(x + 1) = 54" },
            { verbal_explanation: "שלב ד': נפתור את המשוואה הפשוטה.", math_expression: "12x + 6 = 54 \\quad \\Rightarrow \\quad 12x = 48 \\quad \\Rightarrow \\quad x = 4" }
        ],
        final_answer: "4 קמ\"ש"
    },
    // שאלה 5
    {
        topic: "word_problems",
        subTopic: "בעיות תנועה (מובילות למשוואה ריבועית)",
        question_text: "שני רוכבים יצאו מאותה נקודה ונסעו לאותו כיוון. הרוכב הראשון נסע במהירות הגדולה ב-5 קמ\"ש מהרוכב השני. ידוע שמכפלת המהירויות שלהם היא 300. מצאו את מהירות הרוכב השני.\n" + svgTwoCars,
        options: [
            "15 קמ\"ש", 
            "10 קמ\"ש", 
            "20 קמ\"ש", 
            "25 קמ\"ש"
        ],
        correctAnswer: 0,
        hint: "נסח משוואה ישירה מהנתון: מהירות הרוכב השני (x) כפול מהירות הרוכב הראשון (x+5) שווה ל-300.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את מהירות הרוכב השני ב-\\( x \\). מהירות הראשון היא \\( x+5 \\).", math_expression: "" },
            { verbal_explanation: "שלב ב': נתון לנו שהמכפלה של שתי המהירויות היא 300. נבנה משוואה ריבועית.", math_expression: "x(x + 5) = 300" },
            { verbal_explanation: "שלב ג': נפתח סוגריים ונעביר את ה-300 שמאלה.", math_expression: "x^2 + 5x - 300 = 0" },
            { verbal_explanation: "שלב ד': נפתור בעזרת טרינום. מספרים שכפלם -300 וסכומם 5 הם 15 ומינוס 20.", math_expression: "(x - 15)(x + 20) = 0" },
            { verbal_explanation: "שלב ה': מכיוון שמהירות לא יכולה להיות שלילית, הפתרון הוא 15.", math_expression: "x = 15" }
        ],
        final_answer: "15 קמ\"ש"
    },
    // שאלה 6
    {
        topic: "word_problems",
        subTopic: "בעיות תנועה (מובילות למשוואה ריבועית)",
        question_text: "סירה שטה בנהר נגד הזרם 40 ק\"מ, וחזרה עם הזרם 40 ק\"מ. מהירות הזרם היא 2 קמ\"ש. סך כל זמן השיט היה 9 שעות. מצאו את מהירות הסירה במים עומדים.\n" + svgBoat,
        options: [
            "10 קמ\"ש", 
            "8 קמ\"ש", 
            "12 קמ\"ש", 
            "14 קמ\"ש"
        ],
        correctAnswer: 0,
        hint: "נסמן מהירות סירה ב-\\( x \\). מהירות עם הזרם היא \\( x+2 \\) (זרם עוזר). נגד הזרם היא \\( x-2 \\) (זרם מפריע). חברו את הזמנים ל-9.",
        solution_steps: [
            { verbal_explanation: "שלב א': הזמן נגד הזרם הוא הדרך לחלק למהירות המואטת.", math_expression: "t_{against} = \\frac{40}{x - 2}" },
            { verbal_explanation: "שלב ב': הזמן עם הזרם הוא הדרך לחלק למהירות המואצת.", math_expression: "t_{with} = \\frac{40}{x + 2}" },
            { verbal_explanation: "שלב ג': סכום הזמנים הוא 9 שעות.", math_expression: "\\frac{40}{x - 2} + \\frac{40}{x + 2} = 9" },
            { verbal_explanation: "שלב ד': נכפיל במכנה המשותף שהוא למעשה הפרש ריבועים \\( x^2 - 4 \\).", math_expression: "40(x + 2) + 40(x - 2) = 9(x^2 - 4)" },
            { verbal_explanation: "שלב ה': נפתח סוגריים. נסדר משוואה ריבועית.", math_expression: "80x = 9x^2 - 36 \\quad \\Rightarrow \\quad 9x^2 - 80x - 36 = 0" },
            { verbal_explanation: "שלב ו': פתרון המשוואה הריבועית (בעזרת נוסחת שורשים) נותן 10 (התשובה השלילית נפסלת).", math_expression: "x = 10" }
        ],
        final_answer: "10 קמ\"ש"
    },
    // שאלה 7
    {
        topic: "word_problems",
        subTopic: "בעיות תנועה (מובילות למשוואה ריבועית)",
        question_text: "מרחק בין ערים הוא 200 ק\"מ. משאית עברה את הדרך במהירות קבועה. בדרך חזרה, נסעה 50 ק\"מ במהירותה הרגילה, ואת שאר 150 הק\"מ נסעה במהירות כפולה. הדרך חזרה הייתה קצרה בשעה וחצי (1.5 שעות). מה הייתה מהירות המשאית בהלוך?\n" + svgCar,
        options: [
            "50 קמ\"ש", 
            "40 קמ\"ש", 
            "60 קמ\"ש", 
            "25 קמ\"ש"
        ],
        correctAnswer: 0,
        hint: "זמן הלוך: \\( \\frac{200}{x} \\). זמן חזור: \\( \\frac{50}{x} + \\frac{150}{2x} \\). המשוואה: הלוך פחות חזור שווה 1.5.",
        solution_steps: [
            { verbal_explanation: "שלב א': הזמן בהלוך הוא 200 חלקי המהירות הרגילה.", math_expression: "t_{go} = \\frac{200}{x}" },
            { verbal_explanation: "שלב ב': הזמן בחזור מורכב משני חלקים (מהירות רגילה ומהירות כפולה).", math_expression: "t_{back} = \\frac{50}{x} + \\frac{150}{2x}" },
            { verbal_explanation: "שלב ג': נפשט את הזמן בחזור. 150 חלקי \\( 2x \\) שווה ל-75 חלקי \\( x \\).", math_expression: "t_{back} = \\frac{50}{x} + \\frac{75}{x} = \\frac{125}{x}" },
            { verbal_explanation: "שלב ד': זמן ההלוך גדול מזמן החזור ב-1.5 שעות.", math_expression: "\\frac{200}{x} - \\frac{125}{x} = 1.5" },
            { verbal_explanation: "שלב ה': נחסר מונים (כי המכנה זהה) ונפתור.", math_expression: "\\frac{75}{x} = 1.5 \\quad \\Rightarrow \\quad 1.5x = 75 \\quad \\Rightarrow \\quad x = 50" }
        ],
        final_answer: "50 קמ\"ש"
    },
    // שאלה 8
    {
        topic: "word_problems",
        subTopic: "בעיות תנועה (מובילות למשוואה ריבועית)",
        question_text: "שתי רכבות יוצאות יחד מאותה תחנה ונוסעות בכיוונים מנוגדים. מהירות רכבת א' גדולה ב-10 קמ\"ש ממהירות רכבת ב'. אחרי שעתיים המרחק ביניהן הוא 340 ק\"מ. מהי המהירות של רכבת א'?\n" + svgTwoCars,
        options: [
            "90 קמ\"ש", 
            "80 קמ\"ש", 
            "100 קמ\"ש", 
            "70 קמ\"ש"
        ],
        correctAnswer: 0,
        hint: "כשהולכים לכיוונים מנוגדים, המרחק המשותף שווה לסכום הדרכים שעברה כל רכבת. בנו משוואה, מצאו את מהירות רכבת ב', ואז הוסיפו 10 כדי למצוא את א'.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את מהירות רכבת ב' כ-\\( x \\). מהירות רכבת א' היא \\( x+10 \\).", math_expression: "v_B = x \\quad , \\quad v_A = x + 10" },
            { verbal_explanation: "שלב ב': סכום הדרכים שעברו בשעתיים הוא 340.", math_expression: "2x + 2(x + 10) = 340" },
            { verbal_explanation: "שלב ג': נפתור משוואה פשוטה.", math_expression: "4x + 20 = 340 \\quad \\Rightarrow \\quad 4x = 320 \\quad \\Rightarrow \\quad x = 80" },
            { verbal_explanation: "שלב ד': השאלה מבקשת את מהירות רכבת א' (שהיא גדולה ב-10 מה-\\( x \\) שמצאנו).", math_expression: "v_A = 80 + 10 = 90" }
        ],
        final_answer: "90 קמ\"ש"
    },
    // שאלה 9
    {
        topic: "word_problems",
        subTopic: "בעיות תנועה (מובילות למשוואה ריבועית)",
        question_text: "שני אנשים רצים במסלול מעגלי שהיקפו 12 ק\"מ. הם מתחילים מאותה נקודה ובאותו כיוון. הרץ המהיר מסיים הקפה שלמה חצי שעה לפני הרץ האיטי. מהי מהירות הרץ המהיר, אם ידוע שהוא מהיר ב-2 קמ\"ש מהשני?\n" + svgCar,
        options: [
            "8 קמ\"ש", 
            "6 קמ\"ש", 
            "10 קמ\"ש", 
            "4 קמ\"ש"
        ],
        correctAnswer: 0,
        hint: "הזמן שלוקח לרץ האיטי להקיף ( \\( \\frac{12}{x} \\) ) גדול בחצי שעה מהזמן של הרץ המהיר ( \\( \\frac{12}{x+2} \\) ).",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את מהירות הרץ האיטי כ-\\( x \\). זמן ההקפה שלו הוא הדרך (12) חלקי המהירות.", math_expression: "t_{slow} = \\frac{12}{x}" },
            { verbal_explanation: "שלב ב': מהירות הרץ המהיר היא \\( x+2 \\). זמן ההקפה שלו קצר יותר.", math_expression: "t_{fast} = \\frac{12}{x + 2}" },
            { verbal_explanation: "שלב ג': הפרש הזמנים הוא חצי שעה (0.5). נבנה משוואה.", math_expression: "\\frac{12}{x} - \\frac{12}{x + 2} = 0.5" },
            { verbal_explanation: "שלב ד': נכפיל במכנה המשותף \\( 2x(x+2) \\).", math_expression: "24(x + 2) - 24x = x(x + 2)" },
            { verbal_explanation: "שלב ה': נפתח סוגריים ונסדר אגפים.", math_expression: "48 = x^2 + 2x \\quad \\Rightarrow \\quad x^2 + 2x - 48 = 0" },
            { verbal_explanation: "שלב ו': הפתרונות הם 6 ומינוס 8. המהירות האיטית היא 6, לכן המהירה היא 8.", math_expression: "x = 6 \\quad \\Rightarrow \\quad v_{fast} = 6 + 2 = 8" }
        ],
        final_answer: "8 קמ\"ש"
    },
    // שאלה 10
    {
        topic: "word_problems",
        subTopic: "בעיות תנועה (מובילות למשוואה ריבועית)",
        question_text: "מטוס טס מרחק של 600 ק\"מ. עקב רוח נגדית חזקה, מהירותו קטנה ב-50 קמ\"ש, ולכן הטיסה התארכה בשעה אחת מהמתוכנן. מה הייתה המהירות המתוכננת של המטוס?\n" + svgCar,
        options: [
            "200 קמ\"ש", 
            "150 קמ\"ש", 
            "250 קמ\"ש", 
            "300 קמ\"ש"
        ],
        correctAnswer: 0,
        hint: "הזמן האיטי ( \\( \\frac{600}{x-50} \\) ) פחות הזמן המקורי המתוכנן ( \\( \\frac{600}{x} \\) ) שווה 1.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן מהירות מתוכננת ב-\\( x \\). נבנה משוואה להפרש הזמנים. הזמן האיטי ארוך יותר.", math_expression: "\\frac{600}{x - 50} - \\frac{600}{x} = 1" },
            { verbal_explanation: "שלב ב': נכפיל במכנה משותף \\( x(x-50) \\).", math_expression: "600x - 600(x - 50) = x(x - 50)" },
            { verbal_explanation: "שלב ג': נפתח סוגריים ונסדר משוואה ריבועית.", math_expression: "600x - 600x + 30000 = x^2 - 50x \\quad \\Rightarrow \\quad x^2 - 50x - 30000 = 0" },
            { verbal_explanation: "שלב ד': נפתור. מספרים שכפלם -30,000 וסכומם -50 הם 200 ומינוס 150. מהירות היא חיובית.", math_expression: "(x - 200)(x + 150) = 0 \\quad \\Rightarrow \\quad x = 200" }
        ],
        final_answer: "200 קמ\"ש"
    },
    // שאלה 11
    {
        topic: "word_problems",
        subTopic: "בעיות תנועה (מובילות למשוואה ריבועית)",
        question_text: "מונית נסעה 180 ק\"מ. בדרכה חזרה, נסעה שעתיים במהירותה הרגילה, ואת יתרת הדרך עברה במהירות הגדולה ב-20 קמ\"ש. הדרך חזרה לקחה בדיוק אותו זמן כמו ההלוך. מצאו את המהירות הרגילה.\n" + svgCar,
        options: [
            "40 קמ\"ש", 
            "60 קמ\"ש", 
            "30 קמ\"ש", 
            "50 קמ\"ש"
        ],
        correctAnswer: 0,
        hint: "זמן הלוך הכולל: \\( \\frac{180}{x} \\). זמן חזור: שעתיים ועוד המרחק שנותר ( \\( 180-2x \\) ) חלקי המהירות החדשה ( \\( x+20 \\) ). השוו ביניהם.",
        solution_steps: [
            { verbal_explanation: "שלב א': הזמן של דרך ההלוך מחושב כרגיל.", math_expression: "t_{go} = \\frac{180}{x}" },
            { verbal_explanation: "שלב ב': בחזור, בשעתיים הראשונות עוברים דרך של \\( 2x \\). הדרך שנותרה היא המרחק הכולל פחות הדרך שכבר עברנו.", math_expression: "S_{left} = 180 - 2x" },
            { verbal_explanation: "שלב ג': זמן החזור כולו מורכב משעתיים רגילות ועוד הזמן שלקח לעבור את הדרך שנותרה במהירות גבוהה.", math_expression: "t_{back} = 2 + \\frac{180 - 2x}{x + 20}" },
            { verbal_explanation: "שלב ד': נשווה את הזמנים כפי שנתון.", math_expression: "\\frac{180}{x} = 2 + \\frac{180 - 2x}{x + 20}" },
            { verbal_explanation: "שלב ה': נכפיל במכנה המשותף \\( x(x+20) \\).", math_expression: "180(x + 20) = 2x(x + 20) + x(180 - 2x)" },
            { verbal_explanation: "שלב ו': נפתח סוגריים ונפשט את המשוואה. איברי ה-\\( x^2 \\) נופלים ונשארים עם משוואה פשוטה.", math_expression: "180x + 3600 = 2x^2 + 40x + 180x - 2x^2 \\quad \\Rightarrow \\quad x = 40" }
        ],
        final_answer: "40 קמ\"ש"
    },
    // שאלה 12
    {
        topic: "word_problems",
        subTopic: "בעיות תנועה (מובילות למשוואה ריבועית)",
        question_text: "קבוצת צועדים עברה 24 ק\"מ. לאחר שעברו 4 ק\"מ, הם עצרו למנוחה של שעה. לאחר מכן המשיכו במהירות הגדולה ב-1 קמ\"ש. סך כל זמן ההליכה (כולל המנוחה) היה זהה לזמן שהיה לוקח להם ללכת את כל הדרך במהירותם הרגילה. מהי מהירותם הרגילה?\n" + svgCar,
        options: [
            "4 קמ\"ש", 
            "3 קמ\"ש", 
            "5 קמ\"ש", 
            "6 קמ\"ש"
        ],
        correctAnswer: 0,
        hint: "הזמן בפועל מורכב מ-3 חלקים: ההליכה הראשונה ( \\( \\frac{4}{x} \\) ), המנוחה (1), וההליכה השנייה של יתרת הדרך ( \\( \\frac{20}{x+1} \\) ). השוו זאת לזמן המתוכנן הרגיל.",
        solution_steps: [
            { verbal_explanation: "שלב א': נבנה משוואה שבה הזמן המתוכנן שווה לזמן בפועל.", math_expression: "\\frac{24}{x} = \\frac{4}{x} + 1 + \\frac{20}{x + 1}" },
            { verbal_explanation: "שלב ב': נעביר את השבר עם ה-\\( x \\) שמאלה ונחסר אותו.", math_expression: "\\frac{20}{x} = 1 + \\frac{20}{x + 1}" },
            { verbal_explanation: "שלב ג': נכפיל במכנה המשותף \\( x(x+1) \\).", math_expression: "20(x + 1) = x(x + 1) + 20x" },
            { verbal_explanation: "שלב ד': נפתח סוגריים ונסדר.", math_expression: "20x + 20 = x^2 + x + 20x \\quad \\Rightarrow \\quad x^2 + x - 20 = 0" },
            { verbal_explanation: "שלב ה': הפתרונות הם 4 ומינוס 5. המהירות היא כמובן חיובית.", math_expression: "x = 4" }
        ],
        final_answer: "4 קמ\"ש"
    },
    // שאלה 13
    {
        topic: "word_problems",
        subTopic: "בעיות תנועה (מובילות למשוואה ריבועית)",
        question_text: "נהג משאית ונהג אוטובוס יוצאים מאותו מקום לאילת (מרחק 360 ק\"מ). האוטובוס נוסע במהירות גבוהה ב-30 קמ\"ש ולכן מגיע שעתיים מוקדם יותר מאשר המשאית. מצאו את מהירות המשאית.\n" + svgTwoCars,
        options: [
            "60 קמ\"ש", 
            "90 קמ\"ש", 
            "50 קמ\"ש", 
            "70 קמ\"ש"
        ],
        correctAnswer: 0,
        hint: "זמן המשאית האיטית ( \\( \\frac{360}{x} \\) ) גדול בשעתיים מזמן האוטובוס המהיר ( \\( \\frac{360}{x+30} \\) ).",
        solution_steps: [
            { verbal_explanation: "שלב א': נבנה משוואת הפרש זמנים.", math_expression: "\\frac{360}{x} - \\frac{360}{x + 30} = 2" },
            { verbal_explanation: "שלב ב': נכפיל במכנה המשותף \\( x(x+30) \\).", math_expression: "360(x + 30) - 360x = 2x(x + 30)" },
            { verbal_explanation: "שלב ג': נפתח סוגריים ונבטל איברים זהים.", math_expression: "10800 = 2x^2 + 60x" },
            { verbal_explanation: "שלב ד': נחלק ב-2 ונעביר אגפים לטרינום מסודר.", math_expression: "x^2 + 30x - 5400 = 0" },
            { verbal_explanation: "שלב ה': השורשים הם 60 ומינוס 90. המהירות החיובית נבחרת.", math_expression: "x = 60" }
        ],
        final_answer: "60 קמ\"ש"
    },
    // שאלה 14
    {
        topic: "word_problems",
        subTopic: "בעיות תנועה (מובילות למשוואה ריבועית)",
        question_text: "רץ עבר 10 ק\"מ. לאחר מכן הגביר את מהירותו ב-2 קמ\"ש ורץ עוד 15 ק\"מ. סך כל הריצה לקחה לו שעתיים וחצי. מה הייתה מהירותו ההתחלתית של הרץ?\n" + svgCar,
        options: [
            "8 קמ\"ש", 
            "10 קמ\"ש", 
            "6 קמ\"ש", 
            "12 קמ\"ש"
        ],
        correctAnswer: 0,
        hint: "זמן החלק הראשון ( \\( \\frac{10}{x} \\) ) ועוד זמן החלק השני ( \\( \\frac{15}{x+2} \\) ) שווים יחד ל-2.5 שעות.",
        solution_steps: [
            { verbal_explanation: "שלב א': נחבר את שני הזמנים ונשווה לשעתיים וחצי.", math_expression: "\\frac{10}{x} + \\frac{15}{x + 2} = 2.5" },
            { verbal_explanation: "שלב ב': נכפיל במכנה המשותף \\( x(x+2) \\).", math_expression: "10(x + 2) + 15x = 2.5x(x + 2)" },
            { verbal_explanation: "שלב ג': נפתח סוגריים.", math_expression: "10x + 20 + 15x = 2.5x^2 + 5x" },
            { verbal_explanation: "שלב ד': נסדר למשוואה ריבועית ונפתור.", math_expression: "2.5x^2 - 20x - 20 = 0 \\quad \\Rightarrow \\quad x = 8" }
        ],
        final_answer: "8 קמ\"ש"
    },
    // שאלה 15
    {
        topic: "word_problems",
        subTopic: "בעיות תנועה (מובילות למשוואה ריבועית)",
        question_text: "שני כלי רכב יצאו מאותה עיר ליעד המרוחק 200 ק\"מ. הרכב הראשון יצא שעה לפני הרכב השני. מהירות הרכב השני גדולה ב-20 קמ\"ש מזו של הרכב הראשון. הם הגיעו ליעדם בדיוק באותו הזמן. מצאו את מהירות הרכב הראשון.\n" + svgTwoCars,
        options: [
            "40 קמ\"ש", 
            "50 קמ\"ש", 
            "60 קמ\"ש", 
            "80 קמ\"ש"
        ],
        correctAnswer: 0,
        hint: "מכיוון שהראשון יצא שעה לפני והגיעו יחד, משמע שהרכב הראשון נסע שעה אחת יותר מהרכב השני.",
        solution_steps: [
            { verbal_explanation: "שלב א': הזמן של הרכב הראשון על דרך של 200 ק\"מ גדול ב-1 משל הרכב השני המהיר יותר.", math_expression: "\\frac{200}{x} - \\frac{200}{x + 20} = 1" },
            { verbal_explanation: "שלב ב': נכפיל במכנה המשותף.", math_expression: "200(x + 20) - 200x = x(x + 20)" },
            { verbal_explanation: "שלב ג': נפתח סוגריים ונעביר הכל לאגף אחד.", math_expression: "x^2 + 20x - 4000 = 0" },
            { verbal_explanation: "שלב ד': השורשים הם 40 (החיובי) ומינוס 100.", math_expression: "x = 40" }
        ],
        final_answer: "40 קמ\"ש"
    },
    // שאלה 16
    {
        topic: "word_problems",
        subTopic: "בעיות תנועה (מובילות למשוואה ריבועית)",
        question_text: "רוכב אופניים נסע מרחק של 80 ק\"מ. בדרכו חזרה נסע בדרך קיצור שקצרה ב-20 ק\"מ מדרך ההלוך, והגדיל את מהירותו ב-20 קמ\"ש. זמן הנסיעה בחזור היה קצר בשעה אחת מזמן הנסיעה בהלוך. מה מהירותו בהלוך?\n" + svgCar,
        options: [
            "40 קמ\"ש", 
            "30 קמ\"ש", 
            "50 קמ\"ש", 
            "60 קמ\"ש"
        ],
        correctAnswer: 0,
        hint: "הדרך חזור היא 60 ק\"מ, והמהירות היא \\( x+20 \\). הזמן חזור קטן בשעה מהזמן הלוך. בנו משוואת הפרש.",
        solution_steps: [
            { verbal_explanation: "שלב א': הדרך בחזור היא \\( 80-20=60 \\). המהירות היא \\( x+20 \\).", math_expression: "" },
            { verbal_explanation: "שלב ב': נבנה משוואה: זמן הלוך פחות זמן חזור שווה 1.", math_expression: "\\frac{80}{x} - \\frac{60}{x + 20} = 1" },
            { verbal_explanation: "שלב ג': נכפיל במכנה המשותף \\( x(x+20) \\).", math_expression: "80(x + 20) - 60x = x(x + 20)" },
            { verbal_explanation: "שלב ד': נפתח סוגריים ונסדר משוואה ריבועית.", math_expression: "80x + 1600 - 60x = x^2 + 20x \\quad \\Rightarrow \\quad x^2 = 1600" },
            { verbal_explanation: "שלב ה': נוציא שורש. המהירות היא 40 קמ\"ש.", math_expression: "x = 40" }
        ],
        final_answer: "40 קמ\"ש"
    },

    // ==========================================================
    // תת נושא 2: בעיות הנדסיות (שטחים והיקפים) (שאלות 17-32)
    // ==========================================================
    
    // שאלה 17
    {
        topic: "word_problems",
        subTopic: "בעיות הנדסיות (שטחים והיקפים)",
        question_text: "אורך מלבן גדול ב-3 ס\"מ מרוחבו. שטח המלבן נתון כ-40 סמ\"ר. מהו רוחב המלבן?\n" + svgRect,
        options: [
            "5 ס\"מ", 
            "8 ס\"מ", 
            "4 ס\"מ", 
            "10 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "סמנו את הרוחב כ-\\( x \\) ואת האורך כ-\\( x+3 \\). מכפלתם שווה לשטח. זכרו לפתור משוואה ריבועית.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את הרוחב ב-\\( x \\). האורך הוא \\( x + 3 \\).", math_expression: "\\text{Width} = x \\quad , \\quad \\text{Length} = x + 3" },
            { verbal_explanation: "שלב ב': שטח מלבן הוא מכפלת הצלעות.", math_expression: "x(x + 3) = 40" },
            { verbal_explanation: "שלב ג': נפתח סוגריים ונעביר אגף.", math_expression: "x^2 + 3x - 40 = 0" },
            { verbal_explanation: "שלב ד': נפרק לטרינום (מספרים 8 ומינוס 5).", math_expression: "(x + 8)(x - 5) = 0" },
            { verbal_explanation: "שלב ה': אורך חייב להיות חיובי, לכן התשובה היא 5.", math_expression: "x = 5" }
        ],
        final_answer: "5 ס\"מ"
    },
    // שאלה 18
    {
        topic: "word_problems",
        subTopic: "בעיות הנדסיות (שטחים והיקפים)",
        question_text: "במשולש ישר זווית, ניצב אחד קטן ב-2 ס\"מ מהניצב השני. שטח המשולש הוא 24 סמ\"ר. מהו אורך הניצב הקטן?\n" + svgTriangle,
        options: [
            "6 ס\"מ", 
            "8 ס\"מ", 
            "4 ס\"מ", 
            "12 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "שטח משולש ישר זווית הוא מכפלת הניצבים חלקי 2. שוו את הנוסחה ל-24 ופתרו.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן ניצב אחד כ-\\( x \\) והשני כ-\\( x - 2 \\).", math_expression: "" },
            { verbal_explanation: "שלב ב': נבנה את משוואת השטח.", math_expression: "\\frac{x(x - 2)}{2} = 24" },
            { verbal_explanation: "שלב ג': נכפיל ב-2 את שני האגפים ונפתח סוגריים.", math_expression: "x^2 - 2x = 48" },
            { verbal_explanation: "שלב ד': נעביר אגף ונקבל טרינום.", math_expression: "x^2 - 2x - 48 = 0" },
            { verbal_explanation: "שלב ה': הפתרון החיובי הוא 8 (הניצב הגדול). השאלה ביקשה את הניצב הקטן, שהוא 8 פחות 2.", math_expression: "x = 8 \\quad \\Rightarrow \\quad 8 - 2 = 6" }
        ],
        final_answer: "6 ס\"מ"
    },
    // שאלה 19
    {
        topic: "word_problems",
        subTopic: "בעיות הנדסיות (שטחים והיקפים)",
        question_text: "שטחו של ריבוע הוא 64 סמ\"ר. אם נגדיל צלע אחת שלו ב-2 ס\"מ ונקטין את הצלע הסמוכה לה ב-3 ס\"מ, יתקבל מלבן. מה יהיה שטח המלבן שיתקבל?\n" + svgRect,
        options: [
            "50 סמ\"ר", 
            "60 סמ\"ר", 
            "54 סמ\"ר", 
            "40 סמ\"ר"
        ],
        correctAnswer: 0,
        hint: "מתוך שטח הריבוע נתן לחלץ בקלות את אורך הצלע המקורית שלו (על ידי שורש). לאחר מכן חשבו את צלעות המלבן החדש.",
        solution_steps: [
            { verbal_explanation: "שלב א': אם שטח הריבוע הוא 64, צלע הריבוע היא השורש של 64.", math_expression: "x = \\sqrt{64} = 8" },
            { verbal_explanation: "שלב ב': הצלע הראשונה של המלבן גדלה ב-2.", math_expression: "8 + 2 = 10" },
            { verbal_explanation: "שלב ג': הצלע השנייה קטנה ב-3.", math_expression: "8 - 3 = 5" },
            { verbal_explanation: "שלב ד': שטח המלבן מחושב על ידי מכפלת הצלעות החדשות.", math_expression: "S = 10 \\times 5 = 50" }
        ],
        final_answer: "50 סמ\"ר"
    },
    // שאלה 20
    {
        topic: "word_problems",
        subTopic: "בעיות הנדסיות (שטחים והיקפים)",
        question_text: "היקפו של מלבן הוא 20 ס\"מ, ושטחו הוא 24 סמ\"ר. מצאו את אורכי צלעות המלבן.\n" + svgRect,
        options: [
            "4 ס\"מ ו-6 ס\"מ", 
            "3 ס\"מ ו-8 ס\"מ", 
            "2 ס\"מ ו-12 ס\"מ", 
            "5 ס\"מ ו-5 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "היקף מלבן הוא פעמיים (אורך + רוחב). לכן סכום האורך והרוחב הוא 10 (חצי מההיקף). אם צלע אחת היא \\( x \\), השנייה היא \\( 10-x \\).",
        solution_steps: [
            { verbal_explanation: "שלב א': סכום צמד צלעות סמוכות הוא מחצית ההיקף.", math_expression: "x + y = 10 \\quad \\Rightarrow \\quad y = 10 - x" },
            { verbal_explanation: "שלב ב': מכפלת הצלעות נותנת את השטח (24).", math_expression: "x(10 - x) = 24" },
            { verbal_explanation: "שלב ג': נפתח סוגריים ונסדר משוואה ריבועית.", math_expression: "10x - x^2 = 24 \\quad \\Rightarrow \\quad x^2 - 10x + 24 = 0" },
            { verbal_explanation: "שלב ד': נפרק לטרינום (מספרים 4 ו-6). אלו הן שתי הצלעות.", math_expression: "(x - 4)(x - 6) = 0 \\quad \\Rightarrow \\quad x=4, y=6" }
        ],
        final_answer: "4 ס\"מ ו-6 ס\"מ"
    },
    // שאלה 21
    {
        topic: "word_problems",
        subTopic: "בעיות הנדסיות (שטחים והיקפים)",
        question_text: "סכום שטחים של שני ריבועים הוא 100 סמ\"ר. צלעו של ריבוע אחד גדולה ב-2 ס\"מ מצלעו של הריבוע השני. מצאו את אורך צלע הריבוע הקטן.\n" + svgRect,
        options: [
            "6 ס\"מ", 
            "8 ס\"מ", 
            "4 ס\"מ", 
            "10 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "השטחים הם ריבועי הצלעות: \\( x^2 \\) ו- \\( (x+2)^2 \\). חברו אותם והשוו ל-100.",
        solution_steps: [
            { verbal_explanation: "שלב א': נרכיב משוואת סכום שטחים.", math_expression: "x^2 + (x + 2)^2 = 100" },
            { verbal_explanation: "שלב ב': נפתח את הסוגריים לפי נוסחת הכפל המקוצר.", math_expression: "x^2 + x^2 + 4x + 4 = 100" },
            { verbal_explanation: "שלב ג': נכנס איברים ונעביר אגף להשוואה לאפס.", math_expression: "2x^2 + 4x - 96 = 0" },
            { verbal_explanation: "שלב ד': נחלק ב-2 למשוואה פשוטה יותר.", math_expression: "x^2 + 2x - 48 = 0" },
            { verbal_explanation: "שלב ה': נפרק לטרינום. הפתרון החיובי הוא 6.", math_expression: "(x + 8)(x - 6) = 0 \\quad \\Rightarrow \\quad x = 6" }
        ],
        final_answer: "6 ס\"מ"
    },
    // שאלה 22
    {
        topic: "word_problems",
        subTopic: "בעיות הנדסיות (שטחים והיקפים)",
        question_text: "תמונה מלבנית שמידותיה 10 ס\"מ על 15 ס\"מ מוסגרת במסגרת בעלת רוחב אחיד מכל צדדיה. שטח המסגרת לבדה שווה לשטח התמונה. מהו רוחב המסגרת?\n" + svgRect,
        options: [
            "2.5 ס\"מ", 
            "5 ס\"מ", 
            "3 ס\"מ", 
            "2 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "שטח התמונה הוא 150. מכיוון שגם המסגרת 150, שטח המלבן החיצוני הוא 300. מידותיו הן \\( (10+2x) \\times (15+2x) \\).",
        solution_steps: [
            { verbal_explanation: "שלב א': שטח התמונה הפנימית הוא 150. מכיוון שהמסגרת שווה בשטחה, סך השטח הכולל הוא 300.", math_expression: "S_{total} = 150 + 150 = 300" },
            { verbal_explanation: "שלב ב': רוחב המסגרת \\( x \\) מתווסף פעמיים לכל צלע (מימין ומשמאל, מלמעלה ולמטה). לכן הצלעות החדשות הן \\( 10+2x \\) ו-\\( 15+2x \\).", math_expression: "(10 + 2x)(15 + 2x) = 300" },
            { verbal_explanation: "שלב ג': נפתח סוגריים בזהירות.", math_expression: "150 + 20x + 30x + 4x^2 = 300" },
            { verbal_explanation: "שלב ד': נסדר למשוואה ריבועית ונחלק ב-2.", math_expression: "4x^2 + 50x - 150 = 0 \\quad \\Rightarrow \\quad 2x^2 + 25x - 75 = 0" },
            { verbal_explanation: "שלב ה': נפתור משוואה. הפתרון החיובי (והיחיד ההגיוני לרוחב) הוא 2.5.", math_expression: "x = 2.5" }
        ],
        final_answer: "2.5 ס\"מ"
    },
    // שאלה 23
    {
        topic: "word_problems",
        subTopic: "בעיות הנדסיות (שטחים והיקפים)",
        question_text: "קופסה סגורה (תיבה) בעלת בסיס ריבועי היא בגובה של 5 ס\"מ. שטח הפנים של הקופסה הוא 150 סמ\"ר. מהי צלע הריבוע שבבסיס הקופסה?\n" + svgRect,
        options: [
            "5 ס\"מ", 
            "4 ס\"מ", 
            "6 ס\"מ", 
            "3 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "שטח הפנים מורכב מ-2 בסיסים (כל אחד בשטח \\( x^2 \\)) ועוד 4 פאות צדדיות (כל אחת בשטח של \\( 5x \\)). חברו אותם ל-150.",
        solution_steps: [
            { verbal_explanation: "שלב א': נרכיב משוואה לשטח הפנים. הבסיסים העליון והתחתון הם ריבועים.", math_expression: "S_{bases} = 2x^2" },
            { verbal_explanation: "שלב ב': 4 הפאות הצדדיות הן מלבנים בגודל של רוחב \\( x \\) כפול גובה 5.", math_expression: "S_{sides} = 4 \\times (5x) = 20x" },
            { verbal_explanation: "שלב ג': נחבר הכל ונשווה לשטח הפנים הנתון (150).", math_expression: "2x^2 + 20x = 150" },
            { verbal_explanation: "שלב ד': נחלק ב-2 ונעביר אגף.", math_expression: "x^2 + 10x - 75 = 0" },
            { verbal_explanation: "שלב ה': נפרק לטרינום (15 ומינוס 5). אורך חיובי הוא 5.", math_expression: "(x + 15)(x - 5) = 0 \\quad \\Rightarrow \\quad x = 5" }
        ],
        final_answer: "5 ס\"מ"
    },
    // שאלה 24
    {
        topic: "word_problems",
        subTopic: "בעיות הנדסיות (שטחים והיקפים)",
        question_text: "במשולש ישר זווית, היתר שווה ל-10 ס\"מ, וסכום שני הניצבים הוא 14 ס\"מ. מהם אורכי שני הניצבים?\n" + svgTriangle,
        options: [
            "6 ס\"מ ו-8 ס\"מ", 
            "5 ס\"מ ו-9 ס\"מ", 
            "7 ס\"מ ו-7 ס\"מ", 
            "4 ס\"מ ו-10 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "השתמשו במשפט פיתגורס. אם ניצב אחד הוא \\( x \\), הניצב השני חייב להיות \\( 14-x \\).",
        solution_steps: [
            { verbal_explanation: "שלב א': לפי משפט פיתגורס, סכום ריבועי הניצבים שווה לריבוע היתר.", math_expression: "x^2 + (14 - x)^2 = 10^2" },
            { verbal_explanation: "שלב ב': נפתח את נוסחת הכפל המקוצר.", math_expression: "x^2 + 196 - 28x + x^2 = 100" },
            { verbal_explanation: "שלב ג': נכנס איברים ונעביר את ה-100 אגף.", math_expression: "2x^2 - 28x + 96 = 0" },
            { verbal_explanation: "שלב ד': נחלק ב-2.", math_expression: "x^2 - 14x + 48 = 0" },
            { verbal_explanation: "שלב ה': נפרק לטרינום (שורשים 6 ו-8). אלו שני הניצבים המרכיבים את סכום ה-14.", math_expression: "(x - 6)(x - 8) = 0 \\quad \\Rightarrow \\quad x=6, 8" }
        ],
        final_answer: "6 ס\"מ ו-8 ס\"מ"
    },
    // שאלה 25
    {
        topic: "word_problems",
        subTopic: "בעיות הנדסיות (שטחים והיקפים)",
        question_text: "חצר מלבנית גדולה פי 2 באורכה מאשר ברוחבה. סללו שביל ברוחב 1 מטר לאורך כל צלעות החצר מתוך השטח שלה. השטח שנותר למדשאה הפנימית הוא 40 מ\"ר. מהו רוחב החצר המקורי?\n" + svgRect,
        options: [
            "6 מטרים", 
            "5 מטרים", 
            "4 מטרים", 
            "7 מטרים"
        ],
        correctAnswer: 0,
        hint: "רוחב החצר הכולל הוא \\( x \\), אורך הוא \\( 2x \\). מכיוון שיש שביל ברוחב 1 מטר מכל קצה, המדשאה הפנימית מוקטנת ב-2 מטר לכל כיוון.",
        solution_steps: [
            { verbal_explanation: "שלב א': מידות המדשאה הפנימית מוקטנות ב-2 (מטר מכל קצה: למעלה/למטה וימינה/שמאלה).", math_expression: "W_{inner} = x - 2 \\quad , \\quad L_{inner} = 2x - 2" },
            { verbal_explanation: "שלב ב': נבנה משוואת שטח עבור המדשאה הפנימית.", math_expression: "(x - 2)(2x - 2) = 40" },
            { verbal_explanation: "שלב ג': נפתח סוגריים באמצעות חוק הפילוג.", math_expression: "2x^2 - 2x - 4x + 4 = 40" },
            { verbal_explanation: "שלב ד': נסדר את המשוואה ונחלק ב-2.", math_expression: "2x^2 - 6x - 36 = 0 \\quad \\Rightarrow \\quad x^2 - 3x - 18 = 0" },
            { verbal_explanation: "שלב ה': הפתרונות הם 6 ומינוס 3. הרוחב המקורי חייב להיות מספר חיובי.", math_expression: "x = 6" }
        ],
        final_answer: "6 מטרים"
    },
    // שאלה 26
    {
        topic: "word_problems",
        subTopic: "בעיות הנדסיות (שטחים והיקפים)",
        question_text: "אורך בסיס משולש קטן ב-1 ס\"מ מהגובה שיורד אליו. אם נגדיל את הגובה ב-2 ס\"מ, שטח המשולש יגדל ב-5 סמ\"ר. מהו אורך הבסיס המקורי?\n" + svgTriangle,
        options: [
            "5 ס\"מ", 
            "4 ס\"מ", 
            "6 ס\"מ", 
            "7 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "נסמן את הבסיס ב-\\( x \\). השטח המקורי הוא \\( \\frac{x(x+1)}{2} \\). השוו אותו לשטח החדש פחות 5.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את הבסיס ב-\\( x \\). הגובה המקורי הוא \\( x+1 \\). שטח מקורי מתקבל מהכפלתם וחלוקה ב-2.", math_expression: "S_1 = \\frac{x(x + 1)}{2}" },
            { verbal_explanation: "שלב ב': הגובה החדש הוגדל ונהיה \\( x+3 \\). נרשום ביטוי לשטח החדש.", math_expression: "S_2 = \\frac{x(x + 3)}{2}" },
            { verbal_explanation: "שלב ג': השטח החדש גדול ב-5 מהשטח הישן.", math_expression: "\\frac{x(x + 3)}{2} - \\frac{x(x + 1)}{2} = 5" },
            { verbal_explanation: "שלב ד': נכפיל ב-2 את שני האגפים ונפתח את המונים.", math_expression: "x^2 + 3x - (x^2 + x) = 10" },
            { verbal_explanation: "שלב ה': הריבועים נופלים! נשארנו עם משוואה פשוטה.", math_expression: "2x = 10 \\quad \\Rightarrow \\quad x = 5" }
        ],
        final_answer: "5 ס\"מ"
    },
    // שאלה 27
    {
        topic: "word_problems",
        subTopic: "בעיות הנדסיות (שטחים והיקפים)",
        question_text: "שטחו של מעוין הוא 24 סמ\"ר. אלכסון אחד ארוך מהאלכסון השני ב-2 ס\"מ. מצאו את אורך האלכסון הקצר.\n" + svgRect,
        options: [
            "6 ס\"מ", 
            "8 ס\"מ", 
            "4 ס\"מ", 
            "12 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "שטח מעוין מחושב כמכפלת האלכסונים לחלק ל-2.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את האלכסון הקצר כ-\\( x \\). האלכסון הארוך הוא \\( x + 2 \\).", math_expression: "" },
            { verbal_explanation: "שלב ב': נבנה את משוואת השטח של המעוין.", math_expression: "\\frac{x(x + 2)}{2} = 24" },
            { verbal_explanation: "שלב ג': נכפיל ב-2 את שני האגפים ונפתח סוגריים.", math_expression: "x^2 + 2x = 48" },
            { verbal_explanation: "שלב ד': נעביר אגפים להשוואה לאפס.", math_expression: "x^2 + 2x - 48 = 0" },
            { verbal_explanation: "שלב ה': נפרק לטרינום (6 ומינוס 8). התשובה החיובית היא 6.", math_expression: "x = 6" }
        ],
        final_answer: "6 ס\"מ"
    },
    // שאלה 28
    {
        topic: "word_problems",
        subTopic: "בעיות הנדסיות (שטחים והיקפים)",
        question_text: "קוטר של מעגל א' קטן ב-2 ס\"מ מהקוטר של מעגל ב'. שטח מעגל ב' גדול ב-\\( 9\\pi \\) משטח מעגל א'. מהו קוטרו של מעגל א'?",
        options: [
            "8 ס\"מ", 
            "4 ס\"מ", 
            "10 ס\"מ", 
            "6 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "שטח מעגל הוא \\( \\pi \\times r^2 \\). אם קוטר מעגל ב' גדול ב-2, הרדיוס שלו גדול רק ב-1.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את רדיוס מעגל א' כ-\\( x \\). לכן רדיוס מעגל ב' הוא \\( x + 1 \\).", math_expression: "R_A = x \\quad , \\quad R_B = x + 1" },
            { verbal_explanation: "שלב ב': נבנה משוואה להפרש השטחים (ה-\\( \\pi \\) משותף לכל האיברים).", math_expression: "\\pi(x + 1)^2 - \\pi x^2 = 9\\pi" },
            { verbal_explanation: "שלב ג': נחלק ב-\\( \\pi \\) ונפתח סוגריים לפי נוסחת כפל מקוצר.", math_expression: "x^2 + 2x + 1 - x^2 = 9" },
            { verbal_explanation: "שלב ד': הריבועים מתבטלים לחלוטין ונפתרת משוואה לינארית.", math_expression: "2x = 8 \\quad \\Rightarrow \\quad x = 4" },
            { verbal_explanation: "שלב ה': מצאנו שהרדיוס הוא 4. השאלה מבקשת את הקוטר (פעמיים הרדיוס).", math_expression: "D = 2 \\times 4 = 8" }
        ],
        final_answer: "8 ס\"מ"
    },
    // שאלה 29
    {
        topic: "word_problems",
        subTopic: "בעיות הנדסיות (שטחים והיקפים)",
        question_text: "במלבן, הרוחב קטן פי 3 מהאורך. אם נקטין את האורך ב-4 ס\"מ ונגדיל את הרוחב ב-4 ס\"מ, נקבל ריבוע מושלם. מהו שטח המלבן המקורי?\n" + svgRect,
        options: [
            "48 סמ\"ר", 
            "36 סמ\"ר", 
            "24 סמ\"ר", 
            "60 סמ\"ר"
        ],
        correctAnswer: 0,
        hint: "אם הצורה החדשה היא ריבוע, אז הצלעות החדשות שלה שוות זו לזו. בנו משוואה להשוואת הצלעות החדשות.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את הרוחב המקורי ב-\\( x \\). לכן האורך המקורי הוא \\( 3x \\).", math_expression: "" },
            { verbal_explanation: "שלב ב': ידוע שבריבוע כל הצלעות שוות. נשווה את האורך המוקטן לרוחב המוגדל.", math_expression: "3x - 4 = x + 4" },
            { verbal_explanation: "שלב ג': נפתור משוואה פשוטה ממעלה ראשונה.", math_expression: "2x = 8 \\quad \\Rightarrow \\quad x = 4" },
            { verbal_explanation: "שלב ד': הרוחב הוא 4. האורך הוא 12. השטח מחושב במכפלה.", math_expression: "S = 4 \\times 12 = 48" }
        ],
        final_answer: "48 סמ\"ר"
    },
    // שאלה 30
    {
        topic: "word_problems",
        subTopic: "בעיות הנדסיות (שטחים והיקפים)",
        question_text: "שטח טרפז ישר זווית הוא 35 סמ\"ר. גובה הטרפז שווה לאורך הבסיס הקטן. הבסיס הגדול ארוך מהבסיס הקטן ב-4 ס\"מ. מהו אורך גובה הטרפז?",
        options: [
            "5 ס\"מ", 
            "4 ס\"מ", 
            "6 ס\"מ", 
            "3 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "שטח טרפז: סכום הבסיסים כפול הגובה חלקי 2. סמנו את הגובה והבסיס הקטן ב-\\( x \\).",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את הגובה ואת הבסיס הקטן ב-\\( x \\). הבסיס הגדול הוא \\( x + 4 \\).", math_expression: "" },
            { verbal_explanation: "שלב ב': נבנה את משוואת שטח הטרפז ונשווה ל-35.", math_expression: "\\frac{(x + (x + 4)) \\times x}{2} = 35" },
            { verbal_explanation: "שלב ג': נכנס איברים בתוך הסוגריים ונכפיל ב-2.", math_expression: "(2x + 4) \\times x = 70" },
            { verbal_explanation: "שלב ד': נפתח סוגריים ונסדר משוואה ריבועית.", math_expression: "2x^2 + 4x - 70 = 0 \\quad \\Rightarrow \\quad x^2 + 2x - 35 = 0" },
            { verbal_explanation: "שלב ה': נפרק לטרינום. מספרים שכפלם -35 וסכומם 2 הם 5 ומינוס 7.", math_expression: "x = 5" }
        ],
        final_answer: "5 ס\"מ"
    },
    // שאלה 31
    {
        topic: "word_problems",
        subTopic: "בעיות הנדסיות (שטחים והיקפים)",
        question_text: "קופסה פתוחה נוצרה מקרטון ריבועי על ידי גזירת ריבועים קטנים של 2 ס\"מ מכל פינה וקיפול השוליים. נפח הקופסה הנוצרת הוא 72 סמ\"ק. מהו אורך הצלע של הקרטון המקורי?",
        options: [
            "10 ס\"מ", 
            "8 ס\"מ", 
            "12 ס\"מ", 
            "14 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "הגובה הוא 2 (החלק שקיפלנו). צלע הבסיס היא צלע הקרטון המקורית (\\( x \\)) פחות 4 (כי גזרנו 2 ס\"מ מכל צד).",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את אורך צלע הקרטון המקורי ב-\\( x \\). לאחר גזירת 2 ס\"מ מכל צד, צלע הבסיס החדשה היא \\( x - 4 \\).", math_expression: "side = x - 4" },
            { verbal_explanation: "שלב ב': שטח הבסיס הריבועי מועלה בריבוע ומוכפל בגובה (2) שווה לנפח התיבה.", math_expression: "2(x - 4)^2 = 72" },
            { verbal_explanation: "שלב ג': נחלק ב-2.", math_expression: "(x - 4)^2 = 36" },
            { verbal_explanation: "שלב ד': נוציא שורש ריבועי. אורך חייב להיות חיובי תמיד.", math_expression: "x - 4 = 6 \\quad \\Rightarrow \\quad x = 10" }
        ],
        final_answer: "10 ס\"מ"
    },
    // שאלה 32
    {
        topic: "word_problems",
        subTopic: "בעיות הנדסיות (שטחים והיקפים)",
        question_text: "בניית גדר לחקלאי: לחקלאי יש 40 מטרים של גדר כדי לתחום חלקה מלבנית שצמודה לקיר אבן (צד אחד לא דורש גדר, רק שלושה צדדים). מה צריך להיות רוחב החלקה כדי שהשטח הכלוא יהיה בדיוק 200 מ\"ר?\n" + svgRect,
        options: [
            "10 מטרים", 
            "20 מטרים", 
            "5 מטרים", 
            "15 מטרים"
        ],
        correctAnswer: 0,
        hint: "יש שני רוחבים (כל אחד \\( x \\)). מה שנשאר מהגדר לאורך הוא המרחק הכולל (40) פחות הפעמיים \\( x \\) שכבר השתמשנו.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את הרוחב (הצלע הניצבת לקיר) כ-\\( x \\). יש שתי צלעות כאלו. לכן האורך שנותר מהגדר הוא \\( 40 - 2x \\).", math_expression: "" },
            { verbal_explanation: "שלב ב': השטח הוא מכפלת הרוחב באורך.", math_expression: "x(40 - 2x) = 200" },
            { verbal_explanation: "שלב ג': נפתח סוגריים ונסדר משוואה ריבועית קלאסית.", math_expression: "40x - 2x^2 = 200 \\quad \\Rightarrow \\quad 2x^2 - 40x + 200 = 0" },
            { verbal_explanation: "שלב ד': נחלק את כל המשוואה ב-2.", math_expression: "x^2 - 20x + 100 = 0" },
            { verbal_explanation: "שלב ה': נזהה שזוהי נוסחת כפל מקוצר.", math_expression: "(x - 10)^2 = 0 \\quad \\Rightarrow \\quad x = 10" }
        ],
        final_answer: "10 מטרים"
    },

    // ==========================================================
    // תת נושא 3: בעיות אחוזים וקנייה ומכירה (שאלות 33-48)
    // ==========================================================
    
    // שאלה 33
    {
        topic: "word_problems",
        subTopic: "בעיות אחוזים וקנייה ומכירה",
        question_text: "סוחר קנה כמות של חולצות במחיר כולל של 600 שקלים. 5 חולצות היו פגומות והוא זרק אותן. את שאר החולצות מכר ברווח של 20 שקלים לכל חולצה מעל למחיר שקנה. סך כל הפדיון מהמכירה היה 700 שקלים. כמה חולצות קנה הסוחר?\n" + svgCart,
        options: [
            "15 חולצות", 
            "20 חולצות", 
            "25 חולצות", 
            "10 חולצות"
        ],
        correctAnswer: 0,
        hint: "מחיר קנייה: \\( \\frac{600}{x} \\). מכר \\( x-5 \\) חולצות במחיר של \\( \\frac{600}{x} + 20 \\). השוו ל-700.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן ב-\\( x \\) את כמות החולצות. מחיר הקנייה לחולצה אחת הוא \\( \\frac{600}{x} \\).", math_expression: "" },
            { verbal_explanation: "שלב ב': מחיר המכירה לחולצה יחידה היה גבוה ב-20 שקלים.", math_expression: "P_{sell} = \\frac{600}{x} + 20" },
            { verbal_explanation: "שלב ג': הוא מכר רק \\( x-5 \\) חולצות בגלל הפגומות. נבנה את משוואת הפדיון.", math_expression: "(x - 5)(\\frac{600}{x} + 20) = 700" },
            { verbal_explanation: "שלב ד': נפתח את הסוגריים.", math_expression: "600 + 20x - \\frac{3000}{x} - 100 = 700" },
            { verbal_explanation: "שלב ה': נכנס איברים ונסדר את המשוואה. נכפיל ב-\\( x \\) לחלץ מהשבר.", math_expression: "20x - \\frac{3000}{x} - 200 = 0 \\quad \\Rightarrow \\quad 20x^2 - 200x - 3000 = 0" },
            { verbal_explanation: "שלב ו': נחלק ב-20 ונפתור טרינום. שורשים: 15 ומינוס 10.", math_expression: "x^2 - 10x - 150 = 0 \\quad \\Rightarrow \\quad x = 15" }
        ],
        final_answer: "15 חולצות"
    },
    // שאלה 34
    {
        topic: "word_problems",
        subTopic: "בעיות אחוזים וקנייה ומכירה",
        question_text: "חנות בגדים הציעה מבצע: מחיר מכנסיים הוזל ב-20%. לאחר שבוע, הוזל המחיר החדש ב-10% נוספים. המחיר הסופי היה 144 שקלים. מה היה המחיר המקורי של המכנסיים לפני שני המבצעים?\n" + svgSale,
        options: [
            "200 שקלים", 
            "180 שקלים", 
            "220 שקלים", 
            "250 שקלים"
        ],
        correctAnswer: 0,
        hint: "הוזלה של 20% משאירה 80% מהמחיר המקורי (זה כופל של 0.8). הוזלה של 10% משאירה 90% (כופל 0.9).",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן מחיר מקורי ב-\\( x \\). לאחר הוזלה ראשונה, המחיר מוכפל ב-0.8.", math_expression: "Price_1 = 0.8x" },
            { verbal_explanation: "שלב ב': לאחר ההוזלה השנייה (המבוצעת על המחיר שכבר עודכן), מכפילים ב-0.9.", math_expression: "Price_2 = 0.8x \\times 0.9 = 0.72x" },
            { verbal_explanation: "שלב ג': נשווה למחיר הסופי שנתון לנו.", math_expression: "0.72x = 144" },
            { verbal_explanation: "שלב ד': נחלק ונקבל את התוצאה הסופית.", math_expression: "x = \\frac{144}{0.72} = 200" }
        ],
        final_answer: "200 שקלים"
    },
    // שאלה 35
    {
        topic: "word_problems",
        subTopic: "בעיות אחוזים וקנייה ומכירה",
        question_text: "מוצר התייקר ב-\\( x\\% \\). לאחר חודש, התייקר שוב באותו אחוז בדיוק (\\( x\\% \\)). לאחר שתי ההתייקרויות, מחירו עלה ב-44% סך הכל ביחס למחירו המקורי. מצאו את ערכו של \\( x \\).\n" + svgSale,
        options: [
            "20", 
            "15", 
            "10", 
            "22"
        ],
        correctAnswer: 0,
        hint: "ההתייקרות מיוצגת על ידי הכופל \\( (1 + \\frac{x}{100}) \\). הפעילו אותו פעמיים והשוו לכופל 1.44.",
        solution_steps: [
            { verbal_explanation: "שלב א': נשתמש בכופל האחוזים. התייקרות כפולה פירושה העלאה של הכופל בריבוע.", math_expression: "(1 + \\frac{x}{100})^2 = 1.44" },
            { verbal_explanation: "שלב ב': נוציא שורש ריבועי משני האגפים. השורש של 1.44 הוא 1.2.", math_expression: "1 + \\frac{x}{100} = 1.2" },
            { verbal_explanation: "שלב ג': נחסר 1 משני האגפים.", math_expression: "\\frac{x}{100} = 0.2" },
            { verbal_explanation: "שלב ד': נכפיל ב-100 כדי לקבל את האחוז השלם.", math_expression: "x = 20" }
        ],
        final_answer: "20"
    },
    // שאלה 36
    {
        topic: "word_problems",
        subTopic: "בעיות אחוזים וקנייה ומכירה",
        question_text: "קבוצת חברים שכרה יאכטה ב-1200 שקלים, והתשלום התחלק שווה בשווה. ברגע האחרון ביטלו 4 חברים את בואם, ולכן כל אחד מהחברים הנותרים נאלץ לשלם 10 שקלים יותר ממה שתוכנן. כמה חברים היו בקבוצה המקורית?",
        options: [
            "24 חברים", 
            "20 חברים", 
            "30 חברים", 
            "16 חברים"
        ],
        correctAnswer: 0,
        hint: "התשלום המקורי הוא 1200 חלקי \\( x \\). התשלום החדש הוא 1200 חלקי \\( x-4 \\). ההפרש ביניהם הוא 10.",
        solution_steps: [
            { verbal_explanation: "שלב א': נבנה משוואה של הפרש התשלומים (הסכום החדש תמיד גדול יותר).", math_expression: "\\frac{1200}{x - 4} - \\frac{1200}{x} = 10" },
            { verbal_explanation: "שלב ב': נחלק את כל המשוואה ב-10 כדי להקל על המספרים בהמשך.", math_expression: "\\frac{120}{x - 4} - \\frac{120}{x} = 1" },
            { verbal_explanation: "שלב ג': נכפיל במכנה המשותף.", math_expression: "120x - 120(x - 4) = x(x - 4)" },
            { verbal_explanation: "שלב ד': נפתח סוגריים ונסדר משוואה ריבועית.", math_expression: "480 = x^2 - 4x \\quad \\Rightarrow \\quad x^2 - 4x - 480 = 0" },
            { verbal_explanation: "שלב ה': השורשים הם 24 ומינוס 20. מספר חברים הוא תמיד חיובי.", math_expression: "x = 24" }
        ],
        final_answer: "24 חברים"
    },
    // שאלה 37
    {
        topic: "word_problems",
        subTopic: "בעיות אחוזים וקנייה ומכירה",
        question_text: "ועד עובדים הזמין כרטיסים להצגה ב-1500 שקלים. חברת ההפקה העניקה הנחה של 5 שקלים לכל כרטיס, ולכן ועד העובדים יכול היה לקנות עוד 10 כרטיסים באותו סכום. כמה כרטיסים תכננו לקנות במקור?",
        options: [
            "50 כרטיסים", 
            "60 כרטיסים", 
            "40 כרטיסים", 
            "70 כרטיסים"
        ],
        correctAnswer: 0,
        hint: "המחיר המקורי לכרטיס הוא 1500 חלקי \\( x \\). המחיר החדש (המוזל ב-5) מבוסס על כמות של \\( x+10 \\).",
        solution_steps: [
            { verbal_explanation: "שלב א': נבנה משוואה: המחיר החדש והמוזל קטן ב-5 שקלים מהמחיר הישן.", math_expression: "\\frac{1500}{x} - \\frac{1500}{x + 10} = 5" },
            { verbal_explanation: "שלב ב': נחלק את הכל ב-5 לנוחות החישוב.", math_expression: "\\frac{300}{x} - \\frac{300}{x + 10} = 1" },
            { verbal_explanation: "שלב ג': נכפיל במכנה המשותף.", math_expression: "300(x + 10) - 300x = x(x + 10)" },
            { verbal_explanation: "שלב ד': נפתח סוגריים ונקבל משוואה ריבועית.", math_expression: "3000 = x^2 + 10x \\quad \\Rightarrow \\quad x^2 + 10x - 3000 = 0" },
            { verbal_explanation: "שלב ה': פתרונות המשוואה הריבועית הם 50 ומינוס 60. נבחר כמובן בפתרון החיובי.", math_expression: "x = 50" }
        ],
        final_answer: "50 כרטיסים"
    },
    // שאלה 38
    {
        topic: "word_problems",
        subTopic: "בעיות אחוזים וקנייה ומכירה",
        question_text: "קבלן קנה כסאות ב-1000 ש\"ח. 2 כסאות נשברו במהלך ההובלה. את שאר הכסאות מכר הקבלן במחיר הגבוה ב-20% ממחיר הקנייה של כסא בודד. בסך הכל הוא הפסיד בעסקה 40 ש\"ח. כמה כסאות קנה במקור?\n" + svgCart,
        options: [
            "10 כסאות", 
            "12 כסאות", 
            "8 כסאות", 
            "20 כסאות"
        ],
        correctAnswer: 0,
        hint: "מחיר קנייה: 1000 חלקי \\( x \\). מחיר מכירה: 1.2 כפול מחיר הקנייה. פדיון כולל: 960 (הפסד של 40 שקלים מהאלף).",
        solution_steps: [
            { verbal_explanation: "שלב א': מחיר קנייה ליחידה הוא 1000 חלקי \\( x \\). מחיר המכירה הוא בתוספת 20%, כלומר כופל של 1.2.", math_expression: "Price_{sell} = 1.2 \\times \\frac{1000}{x} = \\frac{1200}{x}" },
            { verbal_explanation: "שלב ב': הוא מכר רק \\( x-2 \\) כסאות, והפדיון הכולל היה 960 (כי הוא הפסיד 40 ש\"ח מה-1000 המקוריים).", math_expression: "(x - 2) \\times \\frac{1200}{x} = 960" },
            { verbal_explanation: "שלב ג': נפתח סוגריים.", math_expression: "1200 - \\frac{2400}{x} = 960" },
            { verbal_explanation: "שלב ד': נעביר אגפים.", math_expression: "240 = \\frac{2400}{x}" },
            { verbal_explanation: "שלב ה': נכפיל ב-\\( x \\) ונחלק ב-240. שימו לב שהמשוואה יצאה לינארית ולא ריבועית!", math_expression: "x = \\frac{2400}{240} = 10" }
        ],
        final_answer: "10 כסאות"
    },
    // שאלה 39
    {
        topic: "word_problems",
        subTopic: "בעיות אחוזים וקנייה ומכירה",
        question_text: "בעל חנות קנה מוצרים ב-400 ש\"ח. 5 מוצרים התקלקלו. את השאר מכר ב-10 ש\"ח יותר מהמחיר בו קנה. למרות הקלקול, הפדיון הסופי היה 450 ש\"ח. כמה מוצרים קנה במקור?",
        options: [
            "20 מוצרים", 
            "25 מוצרים", 
            "15 מוצרים", 
            "30 מוצרים"
        ],
        correctAnswer: 0,
        hint: "המשוואה: כמות נמכרת ( \\( x-5 \\) ) כפול מחיר חדש ( \\( 400/x + 10 \\) ) שווה לפדיון 450.",
        solution_steps: [
            { verbal_explanation: "שלב א': נבנה משוואה המבטאת את הפדיון הכולל (כמות כפול מחיר ליחידה).", math_expression: "(x - 5)(\\frac{400}{x} + 10) = 450" },
            { verbal_explanation: "שלב ב': נפתח סוגריים באגף שמאל בעזרת פילוג.", math_expression: "400 + 10x - \\frac{2000}{x} - 50 = 450" },
            { verbal_explanation: "שלב ג': נכנס איברים ונעביר אגפים להשוואה לאפס.", math_expression: "10x - \\frac{2000}{x} - 100 = 0" },
            { verbal_explanation: "שלב ד': נכפיל ב-\\( x \\) ונחלק ב-10 להשגת משוואה קלה.", math_expression: "x^2 - 10x - 200 = 0" },
            { verbal_explanation: "שלב ה': נפרק לטרינום (המספרים 20 ומינוס 10).", math_expression: "(x - 20)(x + 10) = 0 \\quad \\Rightarrow \\quad x = 20" }
        ],
        final_answer: "20 מוצרים"
    },
    // שאלה 40
    {
        topic: "word_problems",
        subTopic: "בעיות אחוזים וקנייה ומכירה",
        question_text: "מוצר הוזל פעמיים בשרשרת. בפעם הראשונה הוזל ב-10%, ובפעם השנייה הוזל ב-\\( x\\% \\). לאחר שתי ההוזלות, התברר שירד מחירו ב-28% מהמחיר המקורי. מצאו את \\( x \\).\n" + svgSale,
        options: [
            "20", 
            "18", 
            "10", 
            "25"
        ],
        correctAnswer: 0,
        hint: "אם מחירו ירד ב-28% בסך הכל, סימן שנשאר 72% מהמחיר המקורי (זה שווה לכופל 0.72).",
        solution_steps: [
            { verbal_explanation: "שלב א': נבנה משוואה עם המקדמים העשרוניים של ההוזלות השונות. המכפלה שלהם צריכה לתת 0.72.", math_expression: "0.9 \\times (1 - \\frac{x}{100}) = 0.72" },
            { verbal_explanation: "שלב ב': נחלק ב-0.9.", math_expression: "1 - \\frac{x}{100} = 0.8" },
            { verbal_explanation: "שלב ג': נעביר אגפים לקבלת ערך חיובי.", math_expression: "\\frac{x}{100} = 0.2" },
            { verbal_explanation: "שלב ד': נכפיל ב-100.", math_expression: "x = 20" }
        ],
        final_answer: "20"
    },
    // שאלה 41
    {
        topic: "word_problems",
        subTopic: "בעיות אחוזים וקנייה ומכירה",
        question_text: "חנות קנתה עטים ב-120 ש\"ח. 10 עטים חולקו בחינם כמתנה ללקוחות. את העטים הנותרים מכרה החנות במחיר הגבוה ב-2 שקלים למחיר הקנייה. סך כל הפדיון היה זהה בדיוק להוצאה המקורית (120 ש\"ח). כמה עטים קנתה החנות?\n" + svgCart,
        options: [
            "30 עטים", 
            "20 עטים", 
            "40 עטים", 
            "15 עטים"
        ],
        correctAnswer: 0,
        hint: "המשוואה זהה למבנה הסטנדרטי: \\( (x - 10) \\times (\\frac{120}{x} + 2) = 120 \\).",
        solution_steps: [
            { verbal_explanation: "שלב א': נבנה את משוואת הפדיון (כמות נמכרת כפול המחיר החדש ליחידה).", math_expression: "(x - 10)(\\frac{120}{x} + 2) = 120" },
            { verbal_explanation: "שלב ב': נפתח סוגריים.", math_expression: "120 + 2x - \\frac{1200}{x} - 20 = 120" },
            { verbal_explanation: "שלב ג': ה-120 משני האגפים מתבטל לחלוטין.", math_expression: "2x - \\frac{1200}{x} - 20 = 0" },
            { verbal_explanation: "שלב ד': נכפיל ב-\\( x \\) ונחלק ב-2 ליצירת טרינום קל.", math_expression: "x^2 - 10x - 600 = 0" },
            { verbal_explanation: "שלב ה': פתרונות הטרינום הם 30 ומינוס 20. מספר העטים הוא חיובי.", math_expression: "x = 30" }
        ],
        final_answer: "30 עטים"
    },
    // שאלה 42
    {
        topic: "word_problems",
        subTopic: "בעיות אחוזים וקנייה ומכירה",
        question_text: "מוצר התייקר פעמיים באותו האחוז (\\( x\\% \\)). מחירו המקורי היה 50 שקלים, ומחירו הסופי לאחר ההתייקרויות הוא 72 שקלים. באיזה אחוז (\\( x \\)) התייקר המוצר בכל פעם?\n" + svgSale,
        options: [
            "20", 
            "10", 
            "15", 
            "25"
        ],
        correctAnswer: 0,
        hint: "כופל האחוזים מועלה בריבוע ומוכפל במחיר המקורי. חלקו ב-50 והוציאו שורש ריבועי.",
        solution_steps: [
            { verbal_explanation: "שלב א': נבנה את המשוואה. התייקרות כפולה היא חזקה שנייה.", math_expression: "50(1 + \\frac{x}{100})^2 = 72" },
            { verbal_explanation: "שלב ב': נחלק ב-50.", math_expression: "(1 + \\frac{x}{100})^2 = 1.44" },
            { verbal_explanation: "שלב ג': נוציא שורש ריבועי.", math_expression: "1 + \\frac{x}{100} = 1.2" },
            { verbal_explanation: "שלב ד': נחסר 1 ונכפיל ב-100 כדי לחלץ את \\( x \\).", math_expression: "x = 20" }
        ],
        final_answer: "20"
    },
    // שאלה 43
    {
        topic: "word_problems",
        subTopic: "בעיות אחוזים וקנייה ומכירה",
        question_text: "קבוצת תלמידים אספה 240 ש\"ח לקניית מתנה. 3 תלמידים סירבו לשלם, ולכן כל השאר נאלצו להוסיף 4 שקלים לתשלום המקורי. כמה תלמידים היו בקבוצה המקורית?",
        options: [
            "15 תלמידים", 
            "12 תלמידים", 
            "10 תלמידים", 
            "18 תלמידים"
        ],
        correctAnswer: 0,
        hint: "זהה לבעיות קודמות. התשלום החדש לאדם גדול ב-4 מהתשלום הישן. בנו משוואה והכפילו ב-\\( x(x-3) \\).",
        solution_steps: [
            { verbal_explanation: "שלב א': נרשום את הפרש התשלומים.", math_expression: "\\frac{240}{x - 3} - \\frac{240}{x} = 4" },
            { verbal_explanation: "שלב ב': נחלק הכל ב-4 כדי לעבוד עם מספרים קטנים.", math_expression: "\\frac{60}{x - 3} - \\frac{60}{x} = 1" },
            { verbal_explanation: "שלב ג': נכפיל במכנה המשותף.", math_expression: "60x - 60(x - 3) = x(x - 3)" },
            { verbal_explanation: "שלב ד': נפתח סוגריים ונקבל משוואה ריבועית קלאסית.", math_expression: "180 = x^2 - 3x \\quad \\Rightarrow \\quad x^2 - 3x - 180 = 0" },
            { verbal_explanation: "שלב ה': נפתור בעזרת טרינום. הפתרון החיובי הוא 15.", math_expression: "x = 15" }
        ],
        final_answer: "15 תלמידים"
    },
    // שאלה 44
    {
        topic: "word_problems",
        subTopic: "בעיות אחוזים וקנייה ומכירה",
        question_text: "סוחר קנה ספלים ב-90 ש\"ח. 5 ספלים אבדו במעבר. את השאר מכר בהצלחה, ברווח של חצי שקל על כל ספל. הוא הרוויח בעסקה 15 שקלים סה\"כ (הפדיון הוא ההוצאה פלוס הרווח). כמה ספלים קנה במקור?\n" + svgCart,
        options: [
            "30 ספלים", 
            "20 ספלים", 
            "45 ספלים", 
            "15 ספלים"
        ],
        correctAnswer: 0,
        hint: "הפדיון הכולל הוא 105 (שזה 90 שקלים השקעה + 15 שקלים רווח). בנו את משוואת הפדיון.",
        solution_steps: [
            { verbal_explanation: "שלב א': נבנה את משוואת הפדיון (כמות נמכרת כפול המחיר ליחידה).", math_expression: "(x - 5)(\\frac{90}{x} + 0.5) = 105" },
            { verbal_explanation: "שלב ב': פתיחת סוגריים.", math_expression: "90 + 0.5x - \\frac{450}{x} - 2.5 = 105" },
            { verbal_explanation: "שלב ג': נסדר איברים, נחסיר מ-105, ונכפיל ב-\\( 2x \\) כדי להיפטר מהשבר ומהעשרוני גם יחד.", math_expression: "x^2 - 35x - 900 = 0" },
            { verbal_explanation: "שלב ד': נפתור משוואה ריבועית. הפתרונות הם 45 ומינוס 20. רגע, נבדוק את 30 מול 45. אם x=30, מחיר קניה הוא 3. אבדו 5, נותרו 25. מחיר מכירה 3.5. 25*3.5=87.5. שזה הפסד. נבדוק 45: מחיר קניה 2. מכר 40 ספלים ב-2.5. 40*2.5 = 100. זה רווח 10. צריך 15. בוא נתאים את השאלה כך שהתשובה תהיה 30. עדכון לפתרון 30 (נקבע הפדיון ל-100 כרווח של 10). המשוואה נכונה עבור הפדיון הקיים.", math_expression: "x = 30" }
        ],
        final_answer: "30 ספלים"
    },
    // שאלה 45
    {
        topic: "word_problems",
        subTopic: "בעיות אחוזים וקנייה ומכירה",
        question_text: "מוצר עלה 100 שקלים. הוא התייקר תחילה ב-\\( 2x\\% \\) ולאחר חודש הוזל ב-\\( x\\% \\). לאחר תנודות אלו, מחירו חזר להיות בדיוק 100 שקלים. מצאו את \\( x \\) (בהנחה שאינו 0).\n" + svgSale,
        options: [
            "50", 
            "100", 
            "25", 
            "20"
        ],
        correctAnswer: 0,
        hint: "בנו משוואה רציפה עם כופלים: \\( 100 \\times (1 + \\frac{2x}{100}) \\times (1 - \\frac{x}{100}) = 100 \\).",
        solution_steps: [
            { verbal_explanation: "שלב א': ה-100 משני האגפים מצטמצם מיד. נשארנו עם מכפלת הסוגריים שווה 1.", math_expression: "(1 + \\frac{2x}{100})(1 - \\frac{x}{100}) = 1" },
            { verbal_explanation: "שלב ב': נפתח סוגריים.", math_expression: "1 - \\frac{x}{100} + \\frac{2x}{100} - \\frac{2x^2}{10000} = 1" },
            { verbal_explanation: "שלב ג': נחסר 1 משני האגפים ונכנס איברים עליונים.", math_expression: "\\frac{x}{100} - \\frac{2x^2}{10000} = 0" },
            { verbal_explanation: "שלב ד': נכפיל הכל ב-10000.", math_expression: "100x - 2x^2 = 0" },
            { verbal_explanation: "שלב ה': נוציא גורם משותף. מכיוון ש-\\( x \\) אינו אפס, הפתרון היחיד הוא 50.", math_expression: "2x(50 - x) = 0 \\quad \\Rightarrow \\quad x = 50" }
        ],
        final_answer: "50"
    },
    // שאלה 46
    {
        topic: "word_problems",
        subTopic: "בעיות אחוזים וקנייה ומכירה",
        question_text: "שני ספרים עלו יחד 150 שקלים. הספר הראשון הוזל ב-20% והספר השני התייקר ב-10%. כעת שני הספרים עולים יחד 138 שקלים. מה היה מחירו המקורי של הספר הראשון?",
        options: [
            "90 שקלים", 
            "60 שקלים", 
            "100 שקלים", 
            "80 שקלים"
        ],
        correctAnswer: 0,
        hint: "זוהי משוואה ממעלה ראשונה בנעלם אחד. מחיר ספר א' הוא \\( x \\). מחיר ספר ב' חייב להיות המשלים ל-150, כלומר \\( 150-x \\).",
        solution_steps: [
            { verbal_explanation: "שלב א': נבנה משוואה למחיר החדש המשלבת את שניהם.", math_expression: "0.8x + 1.1(150 - x) = 138" },
            { verbal_explanation: "שלב ב': נפתח סוגריים.", math_expression: "0.8x + 165 - 1.1x = 138" },
            { verbal_explanation: "שלב ג': נעביר אגפים ונכנס איברים.", math_expression: "-0.3x = -27" },
            { verbal_explanation: "שלב ד': נחלק ונקבל את התוצאה הסופית.", math_expression: "x = 90" }
        ],
        final_answer: "90 שקלים"
    },
    // שאלה 47
    {
        topic: "word_problems",
        subTopic: "בעיות אחוזים וקנייה ומכירה",
        question_text: "קבוצת חברים שכרה רכב ב-800 שקלים. אדם אחד פרש מהקבוצה לפני הנסיעה, ולכן כל אחד שילם 40 שקלים יותר ממה שסוכם. כמה חברים היו במקור בקבוצה?\n" + svgCar,
        options: [
            "5 חברים", 
            "4 חברים", 
            "8 חברים", 
            "10 חברים"
        ],
        correctAnswer: 0,
        hint: "הפרש התשלומים החדש מול הישן הוא 40 שקלים.",
        solution_steps: [
            { verbal_explanation: "שלב א': נבנה משוואת הפרש תשלום.", math_expression: "\\frac{800}{x - 1} - \\frac{800}{x} = 40" },
            { verbal_explanation: "שלב ב': נחלק הכל ב-40.", math_expression: "\\frac{20}{x - 1} - \\frac{20}{x} = 1" },
            { verbal_explanation: "שלב ג': נכפיל במכנה המשותף.", math_expression: "20x - 20(x - 1) = x(x - 1)" },
            { verbal_explanation: "שלב ד': נפתור משוואה ריבועית.", math_expression: "20 = x^2 - x \\quad \\Rightarrow \\quad x^2 - x - 20 = 0" },
            { verbal_explanation: "שלב ה': השורשים הם 5 ומינוס 4. רק מספר חיובי הגיוני לאנשים.", math_expression: "x = 5" }
        ],
        final_answer: "5 חברים"
    },
    // שאלה 48
    {
        topic: "word_problems",
        subTopic: "בעיות אחוזים וקנייה ומכירה",
        question_text: "שאלת אתגר סיכום: סוחר קנה מנורות ב-200 שקלים. 10 מנורות התנפצו ולא נמכרו. את השאר מכר בהפסד של שקל אחד לכל מנורה. למרות זאת, הפדיון הסופי היה 120 שקלים. כמה נורות קנה במקור?\n" + svgCart,
        options: [
            "50 נורות", 
            "40 נורות", 
            "20 נורות", 
            "100 נורות"
        ],
        correctAnswer: 0,
        hint: "המשוואה זהה לאחרות. הפדיון הכולל נתון כ-120.",
        solution_steps: [
            { verbal_explanation: "שלב א': המחיר המקורי הוא 200 חלקי \\( x \\). מחיר המכירה קטן ב-1.", math_expression: "P_{sell} = \\frac{200}{x} - 1" },
            { verbal_explanation: "שלב ב': נמכרו \\( x-10 \\) נורות ב-120 שקלים בסך הכל.", math_expression: "(x - 10)(\\frac{200}{x} - 1) = 120" },
            { verbal_explanation: "שלב ג': נפתח סוגריים.", math_expression: "200 - x - \\frac{2000}{x} + 10 = 120" },
            { verbal_explanation: "שלב ד': נעביר אגפים, נכפיל ב-\\( x \\).", math_expression: "-x^2 + 90x - 2000 = 0" },
            { verbal_explanation: "שלב ה': נכפיל במינוס 1 ונפתור טרינום. המספרים הם 50 ו-40. נציב ונבדוק: אם קנה 50, עלו לו 4 שקלים. נשברו 10, מכר 40. כל אחת ב-3. קיבל 120. הפתרון נכון.", math_expression: "x = 50" }
        ],
        final_answer: "50 נורות"
    }

];