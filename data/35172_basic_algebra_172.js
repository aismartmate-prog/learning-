// ========================================================================
// שאלון: 35172 | נושא: אלגברה בסיסית (5 תתי-נושאים, 60 שאלות)
// קובץ: 35172_basic_algebra.js
// >>> גרסה 4.1: התאמה מדויקת לתפריט התמונה, הגנת RTL, וללא לוכסנים בתשובות <<<
// ========================================================================

// ==========================================
// מאגר 5 איורי פרימיום 3D (מופרדים מהטקסט לחלוטין)
// ==========================================

// 1. סדר פעולות חשבון (פירמידת פעולות תלת-ממדית)
const svgOrder = "&#8207;<div dir='ltr' style='display:flex; justify-content:center; width:100%; clear:both; margin-top:15px;'><svg width='220' height='100' viewBox='0 0 220 100'><defs><linearGradient id='go1' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='#eff6ff'/><stop offset='100%' stop-color='#bfdbfe'/></linearGradient><filter id='dropO1'><feDropShadow dx='2' dy='4' stdDeviation='3' flood-opacity='0.3'/></filter></defs><path d='M80 70 L140 70 L130 90 L90 90 Z' fill='url(#go1)' stroke='#3b82f6' stroke-width='2' filter='url(#dropO1)'/><path d='M70 40 L150 40 L140 60 L80 60 Z' fill='url(#go1)' stroke='#3b82f6' stroke-width='2' filter='url(#dropO1)'/><path d='M60 10 L160 10 L150 30 L70 30 Z' fill='url(#go1)' stroke='#3b82f6' stroke-width='2' filter='url(#dropO1)'/><text x='110' y='25' font-family='Arial' font-size='14' font-weight='bold' fill='#1e3a8a' text-anchor='middle'>()</text><text x='110' y='55' font-family='Arial' font-size='14' font-weight='bold' fill='#1e3a8a' text-anchor='middle'>^</text><text x='110' y='85' font-family='Arial' font-size='14' font-weight='bold' fill='#1e3a8a' text-anchor='middle'>X /</text></svg></div>";

// 2. חזקות של מספרים (בלוק בסיס ומעריך מרחף)
const svgPower = "&#8207;<div dir='ltr' style='display:flex; justify-content:center; width:100%; clear:both; margin-top:15px;'><svg width='220' height='100' viewBox='0 0 220 100'><defs><linearGradient id='gp1' x1='0%' y1='100%' x2='100%' y2='0%'><stop offset='0%' stop-color='#fff7ed'/><stop offset='100%' stop-color='#fed7aa'/></linearGradient><filter id='dropP1'><feDropShadow dx='3' dy='5' stdDeviation='3' flood-opacity='0.4'/></filter></defs><rect x='60' y='30' width='60' height='60' rx='8' fill='url(#gp1)' stroke='#ea580c' stroke-width='3' filter='url(#dropP1)'/><rect x='130' y='10' width='30' height='30' rx='4' fill='#ffedd5' stroke='#c2410c' stroke-width='2' filter='url(#dropP1)'/><text x='90' y='70' font-family='Arial' font-size='32' font-weight='bold' fill='#9a3412' text-anchor='middle'>X</text><text x='145' y='32' font-family='Arial' font-size='18' font-weight='bold' fill='#9a3412' text-anchor='middle'>n</text></svg></div>";

// 3. שורש ריבועי (שורש תלת-ממדי מואר)
const svgRoot = "&#8207;<div dir='ltr' style='display:flex; justify-content:center; width:100%; clear:both; margin-top:15px;'><svg width='220' height='100' viewBox='0 0 220 100'><defs><linearGradient id='gr1' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='#fef2f2'/><stop offset='100%' stop-color='#fecaca'/></linearGradient><filter id='dropR1'><feDropShadow dx='2' dy='4' stdDeviation='3' flood-opacity='0.3'/></filter></defs><path d='M40 60 L60 60 L80 90 L120 20 L180 20' fill='none' stroke='url(#gr1)' stroke-width='8' stroke-linecap='round' stroke-linejoin='round' filter='url(#dropR1)'/><path d='M40 60 L60 60 L80 90 L120 20 L180 20' fill='none' stroke='#e11d48' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/><text x='140' y='65' font-family='Arial' font-size='28' font-weight='bold' fill='#9f1239' text-anchor='middle'>a</text></svg></div>";

// 4. הצבה בביטוי אלגברי (מכונת קלט-פלט)
const svgSubst = "&#8207;<div dir='ltr' style='display:flex; justify-content:center; width:100%; clear:both; margin-top:15px;'><svg width='220' height='100' viewBox='0 0 220 100'><defs><linearGradient id='gs1' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='#f0fdf4'/><stop offset='100%' stop-color='#bbf7d0'/></linearGradient><filter id='dropS1'><feDropShadow dx='2' dy='4' stdDeviation='3' flood-opacity='0.3'/></filter></defs><rect x='80' y='20' width='60' height='60' rx='12' fill='url(#gs1)' stroke='#16a34a' stroke-width='3' filter='url(#dropS1)'/><path d='M30 50 L70 50' stroke='#15803d' stroke-width='4' stroke-linecap='round'/><polygon points='70,50 60,45 60,55' fill='#15803d'/><path d='M150 50 L190 50' stroke='#15803d' stroke-width='4' stroke-linecap='round'/><polygon points='190,50 180,45 180,55' fill='#15803d'/><text x='110' y='58' font-family='Arial' font-size='22' font-weight='bold' fill='#14532d' text-anchor='middle'>f(x)</text></svg></div>";

// 5. פתיחת סוגריים וכינוס איברים (חצי פיזור דינמי)
const svgExpand = "&#8207;<div dir='ltr' style='display:flex; justify-content:center; width:100%; clear:both; margin-top:15px;'><svg width='220' height='100' viewBox='0 0 220 100'><defs><linearGradient id='ge1' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='#faf5ff'/><stop offset='100%' stop-color='#e9d5ff'/></linearGradient><filter id='dropE1'><feDropShadow dx='2' dy='4' stdDeviation='3' flood-opacity='0.3'/></filter></defs><rect x='80' y='25' width='90' height='50' rx='8' fill='url(#ge1)' stroke='#9333ea' stroke-width='3' filter='url(#dropE1)'/><circle cx='40' cy='50' r='15' fill='#a855f7' filter='url(#dropE1)'/><path d='M40 35 Q 70 10 100 30' fill='none' stroke='#7e22ce' stroke-width='3' stroke-linecap='round'/><polygon points='100,30 92,25 95,34' fill='#7e22ce'/><path d='M40 65 Q 80 90 140 70' fill='none' stroke='#7e22ce' stroke-width='3' stroke-linecap='round'/><polygon points='140,70 132,75 135,66' fill='#7e22ce'/></svg></div>";


const questionsDB = [

    // ==========================================================
    // 1. סדר פעולות חשבון (12 שאלות)
    // ==========================================================
    {
        topic: "basic_algebra_172",
        subTopic: "סדר פעולות חשבון",
        question_text: "<div dir='rtl' style='text-align: center;'>חשבו את ערך הביטוי הבא. הקפידו על סדר פעולות חשבון:<br>\\( 15 - 3 \\times (4 + 1) = ? \\)</div>" + svgOrder,
        options: ["0", "60", "12", "-5"],
        correctAnswer: 0,
        hint: "בסדר פעולות חשבון, קודם כל מחשבים את מה שבתוך הסוגריים, לאחר מכן כפל וחילוק, ורק בסוף חיבור וחיסור.",
        solution_steps: [
            { verbal_explanation: "תחילה נחשב את הפעולה שבתוך הסוגריים.", math_expression: "4 + 1 = 5" },
            { verbal_explanation: "נכתוב מחדש את התרגיל עם התוצאה שקיבלנו.", math_expression: "15 - 3 \\times 5" },
            { verbal_explanation: "כעת יש לנו חיסור וכפל. כפל קודם לחיסור.", math_expression: "3 \\times 5 = 15" },
            { verbal_explanation: "לבסוף נבצע את פעולת החיסור.", math_expression: "15 - 15 = 0" }
        ],
        final_answer: "0"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "סדר פעולות חשבון",
        question_text: "<div dir='rtl' style='text-align: center;'>חשבו את התוצאה של השבר הבא (קו שבר מתפקד כמו סוגריים):<br>\\( \\dfrac{20 - 4 \\times 2}{6 - 2} = ? \\)</div>",
        options: ["3", "4", "8", "2"],
        correctAnswer: 0,
        hint: "קו שבר מחלק את התרגיל לשניים: פתרו את המונה בנפרד (זכרו שכפל קודם), פתרו את המכנה בנפרד, ובסוף חלקו את התוצאות.",
        solution_steps: [
            { verbal_explanation: "נפתור את המונה. כפל קודם לחיסור.", math_expression: "4 \\times 2 = 8 \\Rightarrow 20 - 8 = 12" },
            { verbal_explanation: "נפתור את המכנה.", math_expression: "6 - 2 = 4" },
            { verbal_explanation: "כעת נחלק את תוצאת המונה בתוצאת המכנה.", math_expression: "\\dfrac{12}{4} = 3" }
        ],
        final_answer: "3"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "סדר פעולות חשבון",
        question_text: "<div dir='rtl' style='text-align: center;'>מהי התוצאה של הביטוי הבא הכולל מספרים שליליים וחזקות?<br>\\( (-2)^3 - 4 \\times (-5) = ? \\)</div>",
        options: ["12", "-28", "28", "-12"],
        correctAnswer: 0,
        hint: "קודם חשבו את החזקה (שימו לב למעריך האי-זוגי שמשאיר את המינוס). אחר כך כפלו (מינוס כפול מינוס נותן פלוס).",
        solution_steps: [
            { verbal_explanation: "נחשב תחילה את החזקה. חזקה אי-זוגית למספר שלילי נותנת תוצאה שלילית.", math_expression: "(-2)^3 = -8" },
            { verbal_explanation: "נבצע את פעולת הכפל. זכרו שמינוס כפול מינוס הופך לפלוס.", math_expression: "-4 \\times (-5) = +20" },
            { verbal_explanation: "נחבר את התוצאות.", math_expression: "-8 + 20 = 12" }
        ],
        final_answer: "12"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "סדר פעולות חשבון",
        question_text: "<div dir='rtl' style='text-align: center;'>פתרו את התרגיל הבא, הכולל סוגריים בתוך סוגריים (סוגריים מרובעים):<br>\\( 10 - [8 - (3 - 1) \\times 2] = ? \\)</div>",
        options: ["6", "10", "4", "2"],
        correctAnswer: 0,
        hint: "תמיד מתחילים מהסוגריים הפנימיים ביותר. לאחר מכן פותרים את מה שבסוגריים המרובעים, ולבסוף מחסרים מ-10.",
        solution_steps: [
            { verbal_explanation: "נתחיל מהסוגריים העגולים הפנימיים.", math_expression: "3 - 1 = 2" },
            { verbal_explanation: "נציב חזרה לסוגריים המרובעים ונבצע כפל קודם לחיסור.", math_expression: "[8 - 2 \\times 2] = [8 - 4] = 4" },
            { verbal_explanation: "לבסוף נבצע את החיסור החיצוני.", math_expression: "10 - 4 = 6" }
        ],
        final_answer: "6"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "סדר פעולות חשבון",
        question_text: "<div dir='rtl' style='text-align: center;'>חשבו את הערך של התרגיל המשלב ערך מוחלט:<br>\\( |-12| - |-5| \\times 2 = ? \\)</div>" + svgOrder,
        options: ["2", "-22", "14", "-2"],
        correctAnswer: 0,
        hint: "ערך מוחלט הופך כל מספר שבתוכו למספר חיובי. התייחסו לסימני הערך המוחלט כאל סוגריים שיש לפתור ראשונים.",
        solution_steps: [
            { verbal_explanation: "נחשב את הערכים המוחלטים. ערך מוחלט תמיד חיובי.", math_expression: "|-12| = 12 \\quad , \\quad |-5| = 5" },
            { verbal_explanation: "נכתוב מחדש את התרגיל עם הערכים החדשים.", math_expression: "12 - 5 \\times 2" },
            { verbal_explanation: "נבצע את הכפל קודם.", math_expression: "5 \\times 2 = 10" },
            { verbal_explanation: "נחסר.", math_expression: "12 - 10 = 2" }
        ],
        final_answer: "2"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "סדר פעולות חשבון",
        question_text: "<div dir='rtl' style='text-align: center;'>חשבו את ערך השבר הבא:<br>\\( \\dfrac{5^2 - 3^2}{2^3} = ? \\)</div>",
        options: ["2", "1", "4", "0.5"],
        correctAnswer: 0,
        hint: "חשבו את כל החזקות במונה ובמכנה קודם. אל תחסרו בסיסים לפני העלאה בחזקה!",
        solution_steps: [
            { verbal_explanation: "נחשב את החזקות במונה בנפרד.", math_expression: "5^2 = 25 \\quad , \\quad 3^2 = 9" },
            { verbal_explanation: "נבצע את החיסור במונה.", math_expression: "25 - 9 = 16" },
            { verbal_explanation: "נחשב את החזקה במכנה.", math_expression: "2^3 = 2 \\times 2 \\times 2 = 8" },
            { verbal_explanation: "נחלק מונה במכנה.", math_expression: "\\dfrac{16}{8} = 2" }
        ],
        final_answer: "2"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "סדר פעולות חשבון",
        question_text: "<div dir='rtl' style='text-align: center;'>מה התוצאה של התרגיל הבא?<br>\\( (15 - 7 \\times 2) \\times 0 + 8 = ? \\)</div>",
        options: ["8", "0", "15", "1"],
        correctAnswer: 0,
        hint: "שימו לב לכפל באפס. האם צריך בכלל לחשב את מה שבתוך הסוגריים?",
        solution_steps: [
            { verbal_explanation: "אנו רואים שכל הסוגריים מוכפלים באפס.", math_expression: "(...) \\times 0 = 0" },
            { verbal_explanation: "לכן, התוצאה של כל החלק הראשון היא אפס.", math_expression: "0 + 8" },
            { verbal_explanation: "התוצאה הסופית תלויה רק באיבר הנותר.", math_expression: "8" }
        ],
        final_answer: "8"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "סדר פעולות חשבון",
        question_text: "<div dir='rtl' style='text-align: center;'>חשבו את רצף הפעולות הבא (קריאה משמאל לימין בכפל וחילוק):<br>\\( 48 : 6 \\times 2 - 5 = ? \\)</div>",
        options: ["11", "-1", "3", "16"],
        correctAnswer: 0,
        hint: "לכפל וחילוק יש אותה קדימות! לכן פותרים אותם לפי הסדר בו הם מופיעים, משמאל לימין.",
        solution_steps: [
            { verbal_explanation: "חילוק וכפל נמצאים באותה רמת קדימות, לכן נתחיל מהחילוק השמאלי.", math_expression: "48 : 6 = 8" },
            { verbal_explanation: "כעת נבצע את הכפל בתוצאה שקיבלנו.", math_expression: "8 \\times 2 = 16" },
            { verbal_explanation: "לבסוף נחסר 5.", math_expression: "16 - 5 = 11" }
        ],
        final_answer: "11"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "סדר פעולות חשבון",
        question_text: "<div dir='rtl' style='text-align: center;'>חשבו את ערך הביטוי עם ערכים מוחלטים מרובים:<br>\\( |3 - 8| \\times |-2| = ? \\)</div>",
        options: ["10", "-10", "-5", "6"],
        correctAnswer: 0,
        hint: "בצעו את הפעולה שבתוך הערך המוחלט הראשון. ואז הפכו את התוצאה לחיובית לפני שתכפלו.",
        solution_steps: [
            { verbal_explanation: "נחשב את הביטוי בתוך הערך המוחלט הראשון.", math_expression: "3 - 8 = -5" },
            { verbal_explanation: "נפעיל את פונקציית הערך המוחלט, אשר הופכת כל מספר לחיובי.", math_expression: "|-5| = 5 \\quad , \\quad |-2| = 2" },
            { verbal_explanation: "נכפול את התוצאות.", math_expression: "5 \\times 2 = 10" }
        ],
        final_answer: "10"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "סדר פעולות חשבון",
        question_text: "<div dir='rtl' style='text-align: center;'>פתרו את השבר המורכב:<br>\\( \\dfrac{14 - (-2)^3}{2} = ? \\)</div>",
        options: ["11", "3", "10", "4"],
        correctAnswer: 0,
        hint: "זהירות במקרים של מינוס לפני מספר שלילי המועלה בחזקה. חזקה קודמת למינוס שלפניה.",
        solution_steps: [
            { verbal_explanation: "נחשב את החזקה במונה. מספר שלילי בחזקה אי-זוגית נשאר שלילי.", math_expression: "(-2)^3 = -8" },
            { verbal_explanation: "נכתוב מחדש את המונה. חיסור של מספר שלילי הופך לפלוס.", math_expression: "14 - (-8) = 14 + 8 = 22" },
            { verbal_explanation: "נחלק את המונה במכנה.", math_expression: "\\dfrac{22}{2} = 11" }
        ],
        final_answer: "11"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "סדר פעולות חשבון",
        question_text: "<div dir='rtl' style='text-align: center;'>מה ההבדל בין שני הביטויים? חשבו את הערך הכולל:<br>\\( -3^2 + (-3)^2 = ? \\)</div>",
        options: ["0", "18", "-18", "9"],
        correctAnswer: 0,
        hint: "הביטוי הראשון: רק ה-3 עולה בריבוע והמינוס נשאר. הביטוי השני: גם המינוס עולה בריבוע והופך לפלוס.",
        solution_steps: [
            { verbal_explanation: "באיבר הראשון, החזקה לא פועלת על המינוס כי אין סוגריים.", math_expression: "-3^2 = -(3 \\times 3) = -9" },
            { verbal_explanation: "באיבר השני, החזקה פועלת על המספר השלילי כולו (כי הוא בסוגריים), לכן המינוס הופך לפלוס.", math_expression: "(-3)^2 = (-3) \\times (-3) = 9" },
            { verbal_explanation: "נחבר את התוצאות.", math_expression: "-9 + 9 = 0" }
        ],
        final_answer: "0"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "סדר פעולות חשבון",
        question_text: "<div dir='rtl' style='text-align: center;'>חשבו את הערך של הביטוי הבא, המשלב כפל וחזקות:<br>\\( 20 - 2 \\times 3^2 = ? \\)</div>",
        options: ["2", "162", "14", "-16"],
        correctAnswer: 0,
        hint: "החזקה קודמת לכפל! חשבו קודם את 3 בריבוע, ואז כפלו ב-2.",
        solution_steps: [
            { verbal_explanation: "על פי סדר פעולות חשבון, נחשב קודם את החזקה.", math_expression: "3^2 = 9" },
            { verbal_explanation: "כעת נבצע את הכפל.", math_expression: "2 \\times 9 = 18" },
            { verbal_explanation: "נסיים בפעולת החיסור.", math_expression: "20 - 18 = 2" }
        ],
        final_answer: "2"
    },

    // ==========================================================
    // 2. חזקות של מספרים (12 שאלות)
    // ==========================================================
    {
        topic: "basic_algebra_172",
        subTopic: "חזקות של מספרים",
        question_text: "<div dir='rtl' style='text-align: center;'>חשבו את ערך הביטוי המשלב מעריכים זוגיים ואי-זוגיים:<br>\\( (-4)^2 - (-2)^3 = ? \\)</div>" + svgPower,
        options: ["24", "8", "0", "-24"],
        correctAnswer: 0,
        hint: "חזקה זוגית 'בולעת' את המינוס. חזקה אי-זוגית משאירה אותו. היזהרו מהמינוס שבין האיברים.",
        solution_steps: [
            { verbal_explanation: "האיבר הראשון מועלה בחזקה זוגית, ולכן התוצאה חיובית.", math_expression: "(-4)^2 = 16" },
            { verbal_explanation: "האיבר השני מועלה בחזקה אי-זוגית, ולכן התוצאה נשארת שלילית.", math_expression: "(-2)^3 = -8" },
            { verbal_explanation: "נציב חזרה לתרגיל (חיסור של מספר שלילי הופך לחיבור).", math_expression: "16 - (-8) = 16 + 8 = 24" }
        ],
        final_answer: "24"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "חזקות של מספרים",
        question_text: "<div dir='rtl' style='text-align: center;'>מלכודת החזקות! חשבו את התוצאה של:<br>\\( 5^0 + (-5)^0 - 0^5 = ? \\)</div>",
        options: ["2", "1", "0", "10"],
        correctAnswer: 0,
        hint: "כל מספר (שאינו 0) בחזקת 0 שווה 1. אפס בחזקת כל מספר חיובי שווה 0.",
        solution_steps: [
            { verbal_explanation: "מספר חיובי בחזקת אפס שווה לאחד.", math_expression: "5^0 = 1" },
            { verbal_explanation: "מספר שלילי (בסוגריים) בחזקת אפס שווה גם הוא לאחד.", math_expression: "(-5)^0 = 1" },
            { verbal_explanation: "אפס בחזקת כל מספר הוא פשוט אפס.", math_expression: "0^5 = 0" },
            { verbal_explanation: "נציב ונחבר הכל.", math_expression: "1 + 1 - 0 = 2" }
        ],
        final_answer: "2"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "חזקות של מספרים",
        question_text: "<div dir='rtl' style='text-align: center;'>מהו הערך המספרי של חזקה שלילית זו?<br>\\( 3^{-2} = ? \\)</div>",
        options: ["\\dfrac{1}{9}", "-9", "-\\dfrac{1}{9}", "9"],
        correctAnswer: 0,
        hint: "המעריך השלילי לא הופך את המספר לשלילי! הוא מורה לנו להפוך את המספר לשבר (אחד חלקי).",
        solution_steps: [
            { verbal_explanation: "מעריך שלילי פירושו 'ההופכי של המספר בחזקה החיובית'.", math_expression: "a^{-n} = \\dfrac{1}{a^n}" },
            { verbal_explanation: "ניישם את הכלל על התרגיל שלנו.", math_expression: "3^{-2} = \\dfrac{1}{3^2}" },
            { verbal_explanation: "נחשב את החזקה במכנה.", math_expression: "\\dfrac{1}{9}" }
        ],
        final_answer: "\\dfrac{1}{9}"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "חזקות של מספרים",
        question_text: "<div dir='rtl' style='text-align: center;'>חשבו את הערך של שבר המועלה בחזקה שלילית:<br>\\( \\left(\\dfrac{2}{3}\\right)^{-2} = ? \\)</div>",
        options: ["\\dfrac{9}{4}", "\\dfrac{4}{9}", "-\\dfrac{4}{9}", "\\dfrac{6}{4}"],
        correctAnswer: 0,
        hint: "כדי להיפטר ממעריך שלילי של שבר, פשוט הופכים את המונה והמכנה.",
        solution_steps: [
            { verbal_explanation: "כדי שהמעריך יהיה חיובי, נהפוך את השבר שבתוך הסוגריים.", math_expression: "\\left(\\dfrac{2}{3}\\right)^{-2} = \\left(\\dfrac{3}{2}\\right)^2" },
            { verbal_explanation: "כעת, נעלה גם את המונה וגם את המכנה בריבוע.", math_expression: "\\dfrac{3^2}{2^2}" },
            { verbal_explanation: "נחשב את התוצאות.", math_expression: "\\dfrac{9}{4}" }
        ],
        final_answer: "\\dfrac{9}{4}"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "חזקות של מספרים",
        question_text: "<div dir='rtl' style='text-align: center;'>פשטו את הביטוי המציג חזקה של חזקה:<br>\\( (2^3)^2 = ? \\)</div>" + svgPower,
        options: ["64", "32", "12", "256"],
        correctAnswer: 0,
        hint: "כאשר מעלים חזקה בחזקה נוספת, יש לכפול את המעריכים זה בזה (חוק כפל מעריכים).",
        solution_steps: [
            { verbal_explanation: "לפי חוקי החזקות, 'חזקה של חזקה' משמעותה הכפלת המעריכים.", math_expression: "(a^n)^m = a^{n \\times m}" },
            { verbal_explanation: "נפעיל את הכלל על התרגיל.", math_expression: "(2^3)^2 = 2^{3 \\times 2} = 2^6" },
            { verbal_explanation: "נחשב את הערך של 2 בשישית (כפל של שתיים בעצמו 6 פעמים).", math_expression: "64" }
        ],
        final_answer: "64"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "חזקות של מספרים",
        question_text: "<div dir='rtl' style='text-align: center;'>חשבו את ערך המכפלה של חזקות בעלות אותו בסיס:<br>\\( 3^4 \\times 3^{-2} = ? \\)</div>",
        options: ["9", "27", "\\dfrac{1}{9}", "81"],
        correctAnswer: 0,
        hint: "בכפל של חזקות עם בסיסים זהים, פשוט מחברים את המעריכים. שימו לב שיש לכם מעריך שלילי.",
        solution_steps: [
            { verbal_explanation: "בכפל של בסיסים זהים, מחברים את המעריכים.", math_expression: "a^n \\times a^m = a^{n+m}" },
            { verbal_explanation: "נחבר את המעריכים שלנו (4 ועוד מינוס 2).", math_expression: "3^{4 + (-2)} = 3^{4-2} = 3^2" },
            { verbal_explanation: "נחשב את התוצאה.", math_expression: "9" }
        ],
        final_answer: "9"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "חזקות של מספרים",
        question_text: "<div dir='rtl' style='text-align: center;'>מהי התוצאה של תרגיל החילוק הבא?<br>\\( \\dfrac{5^7}{5^5} = ? \\)</div>",
        options: ["25", "5", "125", "10"],
        correctAnswer: 0,
        hint: "בחילוק של חזקות עם בסיסים זהים, מחסרים את מעריך המכנה ממעריך המונה.",
        solution_steps: [
            { verbal_explanation: "בחילוק בסיסים זהים, נחסר את המעריכים.", math_expression: "\\dfrac{a^n}{a^m} = a^{n-m}" },
            { verbal_explanation: "נבצע את החיסור עבור התרגיל.", math_expression: "5^{7-5} = 5^2" },
            { verbal_explanation: "נחשב את הריבוע.", math_expression: "25" }
        ],
        final_answer: "25"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "חזקות של מספרים",
        question_text: "<div dir='rtl' style='text-align: center;'>כיצד ניתן לחשב במהירות את המכפלה הבאה? (בסיסים שונים, מעריך זהה)<br>\\( 2^3 \\times 5^3 = ? \\)</div>",
        options: ["1000", "100", "30", "10^6"],
        correctAnswer: 0,
        hint: "כאשר המעריכים זהים, ניתן 'למשוך' את המעריך החוצה, לכפול את הבסיסים בתוך סוגריים, ואז להעלות את התוצאה בחזקה.",
        solution_steps: [
            { verbal_explanation: "חוק המעריכים הזהים מאפשר לאחד את הבסיסים תחת מעריך משותף אחד.", math_expression: "a^n \\times b^n = (a \\times b)^n" },
            { verbal_explanation: "נאחד את הבסיסים ונכפול אותם.", math_expression: "(2 \\times 5)^3 = 10^3" },
            { verbal_explanation: "נחשב 10 בשלישית (1 עם 3 אפסים).", math_expression: "1000" }
        ],
        final_answer: "1000"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "חזקות של מספרים",
        question_text: "<div dir='rtl' style='text-align: center;'>שימו לב, זהו תרגיל חיבור, ולא כפל! חשבו:<br>\\( 2^3 + 2^4 = ? \\)</div>",
        options: ["24", "128", "32", "12"],
        correctAnswer: 0,
        hint: "אין 'חוק חזקות' לחיבור! עליכם לחשב את הערך של כל חזקה בנפרד ואז פשוט לחבר את המספרים.",
        solution_steps: [
            { verbal_explanation: "נחשב את הערך של 2 בשלישית.", math_expression: "2^3 = 8" },
            { verbal_explanation: "נחשב את הערך של 2 ברביעית.", math_expression: "2^4 = 16" },
            { verbal_explanation: "נבצע פעולת חיבור פשוטה.", math_expression: "8 + 16 = 24" }
        ],
        final_answer: "24"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "חזקות של מספרים",
        question_text: "<div dir='rtl' style='text-align: center;'>חשבו את הערך של הביטוי הבא (היזהרו - אין סוגריים!):<br>\\( -2^4 = ? \\)</div>",
        options: ["-16", "16", "8", "-8"],
        correctAnswer: 0,
        hint: "מכיוון שאין סוגריים סביב ה-2 והמינוס, החזקה פועלת רק על המספר 2. המינוס מחכה בצד ומוצמד לתשובה בסוף.",
        solution_steps: [
            { verbal_explanation: "החזקה 4 חלה רק על בסיס 2, ולא על סימן המינוס.", math_expression: "-(2^4)" },
            { verbal_explanation: "נחשב את 2 ברביעית.", math_expression: "2 \\times 2 \\times 2 \\times 2 = 16" },
            { verbal_explanation: "נוסיף את סימן המינוס לתוצאה.", math_expression: "-16" }
        ],
        final_answer: "-16"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "חזקות של מספרים",
        question_text: "<div dir='rtl' style='text-align: center;'>חשבו את הביטוי המשלב מעריכים חיובים, שליליים ואפס:<br>\\( \\dfrac{10^{-3} \\times 10^5}{10^0} = ? \\)</div>",
        options: ["100", "10", "1", "0.01"],
        correctAnswer: 0,
        hint: "חברו מעריכים במונה. זכרו שמכנה שערכו 1 (בגלל חזקת אפס) לא משנה את התוצאה.",
        solution_steps: [
            { verbal_explanation: "נחשב את המונה על ידי חיבור מעריכים.", math_expression: "10^{-3+5} = 10^2" },
            { verbal_explanation: "נחשב את המכנה (10 בחזקת אפס).", math_expression: "10^0 = 1" },
            { verbal_explanation: "נחלק מונה במכנה ונחשב את הריבוע.", math_expression: "\\dfrac{10^2}{1} = 100" }
        ],
        final_answer: "100"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "חזקות של מספרים",
        question_text: "<div dir='rtl' style='text-align: center;'>פשטו את ביטוי האלגברה הבא לחזקה אחת של x:<br>\\( x^3 \\times x^5 = ? \\)</div>",
        options: ["x^8", "x^{15}", "x^2", "x^5"],
        correctAnswer: 0,
        hint: "בכפל של משתנים עם בסיסים זהים, מחברים את המעריכים.",
        solution_steps: [
            { verbal_explanation: "לפי חוק כפל חזקות בעלות בסיס זהה, נחבר את המעריכים.", math_expression: "x^{3+5}" },
            { verbal_explanation: "נחשב את הסכום לקבלת התשובה.", math_expression: "x^8" }
        ],
        final_answer: "x^8"
    },

    // ==========================================================
    // 3. שורש ריבועי (12 שאלות)
    // ==========================================================
    {
        topic: "basic_algebra_172",
        subTopic: "שורש ריבועי",
        question_text: "<div dir='rtl' style='text-align: center;'>חשבו את הערך של השורש הריבועי הבא:<br>\\( \\sqrt{169} = ? \\)</div>" + svgRoot,
        options: ["13", "14", "17", "16.9"],
        correctAnswer: 0,
        hint: "זהו שורש מוכר. איזה מספר שלם, כשנכפול אותו בעצמו, ייתן לנו 169?",
        solution_steps: [
            { verbal_explanation: "נחפש מספר x המקיים ש-x כפול x שווה ל-169.", math_expression: "x^2 = 169" },
            { verbal_explanation: "מתוך היכרות עם לוח הכפל המורחב, נבדוק את המספר 13.", math_expression: "13 \\times 13 = 169" },
            { verbal_explanation: "לכן התשובה היא 13.", math_expression: "13" }
        ],
        final_answer: "13"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "שורש ריבועי",
        question_text: "<div dir='rtl' style='text-align: center;'>חשבו את השורש הריבועי של השבר הבא:<br>\\( \\sqrt{\\dfrac{49}{81}} = ? \\)</div>",
        options: ["\\dfrac{7}{9}", "\\dfrac{49}{9}", "\\dfrac{7}{81}", "\\dfrac{9}{7}"],
        correctAnswer: 0,
        hint: "שורש של שבר שווה לשורש של המונה חלקי השורש של המכנה.",
        solution_steps: [
            { verbal_explanation: "נפריד את השורש למונה ולמכנה בנפרד לפי חוקי השורשים.", math_expression: "\\dfrac{\\sqrt{49}}{\\sqrt{81}}" },
            { verbal_explanation: "נחשב את שורש המונה (איזה מספר כפול עצמו נותן 49).", math_expression: "\\sqrt{49} = 7" },
            { verbal_explanation: "נחשב את שורש המכנה.", math_expression: "\\sqrt{81} = 9" },
            { verbal_explanation: "נרשום את התוצאה הסופית כשבר.", math_expression: "\\dfrac{7}{9}" }
        ],
        final_answer: "\\dfrac{7}{9}"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "שורש ריבועי",
        question_text: "<div dir='rtl' style='text-align: center;'>מהו השורש הריבועי של המספר העשרוני הבא?<br>\\( \\sqrt{0.04} = ? \\)</div>",
        options: ["0.2", "0.02", "2", "0.4"],
        correctAnswer: 0,
        hint: "התעלמו מהנקודה וחישבו על השורש של 4. לאחר מכן, קחו חצי מכמות הספרות שאחרי הנקודה העשרונית למקם את הנקודה בתוצאה.",
        solution_steps: [
            { verbal_explanation: "אפשר להמיר את המספר העשרוני לשבר פשוט כדי להקל על החישוב.", math_expression: "\\sqrt{\\dfrac{4}{100}}" },
            { verbal_explanation: "נוציא שורש למונה ולמכנה בנפרד.", math_expression: "\\dfrac{\\sqrt{4}}{\\sqrt{100}} = \\dfrac{2}{10}" },
            { verbal_explanation: "נמיר את התוצאה בחזרה למספר עשרוני.", math_expression: "0.2" }
        ],
        final_answer: "0.2"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "שורש ריבועי",
        question_text: "<div dir='rtl' style='text-align: center;'>פתרו את התרגיל המשלב שורש וסדר פעולות:<br>\\( \\sqrt{10^2 - 8^2} = ? \\)</div>",
        options: ["6", "2", "36", "4"],
        correctAnswer: 0,
        hint: "אסור בשום אופן לפצל שורש על פעולת חיסור או חיבור! חייבים קודם לחשב את כל הביטוי שבתוך השורש לערך מספרי אחד.",
        solution_steps: [
            { verbal_explanation: "נחשב את החזקות הנמצאות בתוך השורש.", math_expression: "10^2 = 100 \\quad , \\quad 8^2 = 64" },
            { verbal_explanation: "נבצע את פעולת החיסור בתוך השורש.", math_expression: "\\sqrt{100 - 64} = \\sqrt{36}" },
            { verbal_explanation: "נוציא שורש מהתוצאה שקיבלנו.", math_expression: "6" }
        ],
        final_answer: "6"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "שורש ריבועי",
        question_text: "<div dir='rtl' style='text-align: center;'>חשבו את התוצאה ובחרו את המשפט הנכון מבין השניים:<br> א) \\( \\sqrt{16} + \\sqrt{9} \\) <br> ב) \\( \\sqrt{16 + 9} \\)</div>",
        options: ["א=7, ב=5", "א=5, ב=5 (שווים)", "א=25, ב=5", "א=7, ב=25"],
        correctAnswer: 0,
        hint: "בתרגיל א', מוציאים שורש לכל מספר ואז מחברים. בתרגיל ב', קודם מחברים ורק אז מוציאים שורש לתוצאה.",
        solution_steps: [
            { verbal_explanation: "נחשב את תרגיל א'. קודם כל נוציא שורשים נפרדים.", math_expression: "4 + 3 = 7" },
            { verbal_explanation: "נחשב את תרגיל ב'. קודם נחבר בתוך השורש.", math_expression: "\\sqrt{25} = 5" },
            { verbal_explanation: "מסקנה: שורש של סכום אינו שווה לסכום השורשים.", math_expression: "7 \\neq 5" }
        ],
        final_answer: "א=7, ב=5"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "שורש ריבועי",
        question_text: "<div dir='rtl' style='text-align: center;'>כיצד נחשב את המכפלה הבאה? (היעזרו בחוקי השורשים)<br>\\( \\sqrt{2} \\times \\sqrt{18} = ? \\)</div>",
        options: ["6", "36", "\\sqrt{20}", "12"],
        correctAnswer: 0,
        hint: "אף אחד מהמספרים לא נותן שורש שלם לבדו. חוק מכפלת שורשים מאפשר לאחד אותם לשורש אחד.",
        solution_steps: [
            { verbal_explanation: "נאחד את שני השורשים תחת שורש אחד על פי הכלל.", math_expression: "\\sqrt{a} \\times \\sqrt{b} = \\sqrt{a \\times b}" },
            { verbal_explanation: "נכפול את המספרים בתוך השורש המאוחד.", math_expression: "\\sqrt{2 \\times 18} = \\sqrt{36}" },
            { verbal_explanation: "נוציא שורש לתוצאה היפה שקיבלנו.", math_expression: "6" }
        ],
        final_answer: "6"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "שורש ריבועי",
        question_text: "<div dir='rtl' style='text-align: center;'>חשבו את החילוק של השורשים הבאים:<br>\\( \\dfrac{\\sqrt{75}}{\\sqrt{3}} = ? \\)</div>",
        options: ["5", "25", "\\sqrt{72}", "15"],
        correctAnswer: 0,
        hint: "בדיוק כמו בכפל, אפשר לאחד חלוקה של שני שורשים לשורש אחד גדול שמכיל בתוכו שבר. צמצמו ואז הוציאו שורש.",
        solution_steps: [
            { verbal_explanation: "נאחד את המונה והמכנה תחת שורש גדול אחד.", math_expression: "\\sqrt{\\dfrac{75}{3}}" },
            { verbal_explanation: "נבצע את החילוק הפנימי.", math_expression: "\\sqrt{25}" },
            { verbal_explanation: "נוציא את השורש מהתוצאה.", math_expression: "5" }
        ],
        final_answer: "5"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "שורש ריבועי",
        question_text: "<div dir='rtl' style='text-align: center;'>מהו השורש של השבר המעורב הבא? (הפכו לשבר מדומה תחילה):<br>\\( \\sqrt{1 \\dfrac{9}{16}} = ? \\)</div>",
        options: ["\\dfrac{5}{4}", "1 \\dfrac{3}{4}", "\\dfrac{25}{16}", "\\dfrac{13}{16}"],
        correctAnswer: 0,
        hint: "אי אפשר להוציא שורש משבר מעורב כמו שהוא. הפכו אותו לשבר מדומה ואז הוציאו שורש למונה ולמכנה.",
        solution_steps: [
            { verbal_explanation: "נהפוך את השבר המעורב לשבר מדומה (16 כפול 1, ועוד 9 במונה).", math_expression: "\\sqrt{\\dfrac{16 \\times 1 + 9}{16}} = \\sqrt{\\dfrac{25}{16}}" },
            { verbal_explanation: "נפצל לשני שורשים ונפתור כל אחד בנפרד.", math_expression: "\\dfrac{\\sqrt{25}}{\\sqrt{16}}" },
            { verbal_explanation: "נקבל שבר רגיל שהוא התשובה.", math_expression: "\\dfrac{5}{4}" }
        ],
        final_answer: "\\dfrac{5}{4}"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "שורש ריבועי",
        question_text: "<div dir='rtl' style='text-align: center;'>פתרו את התרגיל המכיל 'שורש בתוך שורש':<br>\\( \\sqrt{25 - \\sqrt{81}} = ? \\)</div>" + svgRoot,
        options: ["4", "16", "2", "8"],
        correctAnswer: 0,
        hint: "התחילו מהשורש הפנימי ביותר. מצאו את ערכו, ואז המשיכו את התרגיל החיצוני.",
        solution_steps: [
            { verbal_explanation: "נפתור קודם כל את השורש הפנימי (שורש 81).", math_expression: "\\sqrt{81} = 9" },
            { verbal_explanation: "נציב את התוצאה בחזרה לתרגיל ונבצע את החיסור.", math_expression: "\\sqrt{25 - 9} = \\sqrt{16}" },
            { verbal_explanation: "לבסוף נפתור את השורש החיצוני.", math_expression: "4" }
        ],
        final_answer: "4"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "שורש ריבועי",
        question_text: "<div dir='rtl' style='text-align: center;'>מצאו את הערך של x במשוואה הבאה:<br>\\( 2\\sqrt{x} = 10 \\)</div>",
        options: ["25", "5", "100", "50"],
        correctAnswer: 0,
        hint: "כדי למצוא את x שכלוא בתוך השורש, בודדו קודם את השורש באגף שלו (חלקו ב-2). לאחר מכן, העלו את כל המשוואה בריבוע.",
        solution_steps: [
            { verbal_explanation: "נחלק את שני אגפי המשוואה ב-2 כדי לבודד את השורש.", math_expression: "\\sqrt{x} = 5" },
            { verbal_explanation: "כדי להיפטר מהשורש, נעלה את שני אגפי המשוואה בריבוע.", math_expression: "(\\sqrt{x})^2 = 5^2" },
            { verbal_explanation: "שורש וריבוע מבטלים זה את זה.", math_expression: "x = 25" }
        ],
        final_answer: "25"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "שורש ריבועי",
        question_text: "<div dir='rtl' style='text-align: center;'>חשבו את הערך של הביטוי הבא (שימו לב למיקום המינוס):<br>\\( -\\sqrt{144} = ? \\)</div>",
        options: ["-12", "12", "אין פתרון", "144"],
        correctAnswer: 0,
        hint: "המינוס לא נמצא בתוך השורש. המינוס נמצא בחוץ ופשוט ממתין לתוצאה של השורש.",
        solution_steps: [
            { verbal_explanation: "נחשב את ערך השורש תוך התעלמות זמנית מהמינוס החיצוני.", math_expression: "\\sqrt{144} = 12" },
            { verbal_explanation: "כעת, נוסיף את סימן המינוס הממתין בחוץ.", math_expression: "-12" }
        ],
        final_answer: "-12"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "שורש ריבועי",
        question_text: "<div dir='rtl' style='text-align: center;'>פתרו את השבר המורכב הבא:<br>\\( \\dfrac{\\sqrt{100} - \\sqrt{36}}{\\sqrt{4}} = ? \\)</div>",
        options: ["2", "4", "8", "32"],
        correctAnswer: 0,
        hint: "חשבו כל שורש בנפרד, ואז המשיכו את התרגיל עם המספרים הרגילים (חיסור במונה ואז חילוק במכנה).",
        solution_steps: [
            { verbal_explanation: "נוציא את כל השורשים בתרגיל לערכים מספריים.", math_expression: "\\sqrt{100} = 10 \\quad , \\quad \\sqrt{36} = 6 \\quad , \\quad \\sqrt{4} = 2" },
            { verbal_explanation: "נכתוב את התרגיל מחדש עם המספרים שקיבלנו.", math_expression: "\\dfrac{10 - 6}{2}" },
            { verbal_explanation: "נבצע את החיסור במונה ואז נחלק במכנה.", math_expression: "\\dfrac{4}{2} = 2" }
        ],
        final_answer: "2"
    },

    // ==========================================================
    // 4. הצבה בביטוי אלגברי (12 שאלות)
    // ==========================================================
    {
        topic: "basic_algebra_172",
        subTopic: "הצבה בביטוי אלגברי",
        question_text: "<div dir='rtl' style='text-align: center;'>נתון הביטוי האלגברי: \\( 5x - 7 \\). מה יהיה ערך הביטוי אם נציב \\( x = 4 \\)?</div>" + svgSubst,
        options: ["13", "12", "27", "3"],
        correctAnswer: 0,
        hint: "החליפו את האות x במספר 4. זכרו שבין המספר 5 לאות x מסתתרת פעולת כפל.",
        solution_steps: [
            { verbal_explanation: "נציב את הערך במקום המשתנה בביטוי.", math_expression: "5 \\times 4 - 7" },
            { verbal_explanation: "על פי סדר פעולות חשבון, נבצע תחילה את הכפל.", math_expression: "20 - 7" },
            { verbal_explanation: "נבצע את פעולת החיסור לקבלת התוצאה הסופית.", math_expression: "13" }
        ],
        final_answer: "13"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "הצבה בביטוי אלגברי",
        question_text: "<div dir='rtl' style='text-align: center;'>נתון הביטוי: \\( -3a + 10 \\). חשבו את ערך הביטוי עבור \\( a = -2 \\).</div>",
        options: ["16", "4", "-16", "-4"],
        correctAnswer: 0,
        hint: "כאשר מציבים מספר שלילי, חובה לשים אותו בתוך סוגריים. זכרו שמכפלה של שני מספרים שליליים נותנת תוצאה חיובית.",
        solution_steps: [
            { verbal_explanation: "נציב את הערך השלילי בתוך סוגריים כדי לא להתבלבל בסימנים.", math_expression: "-3 \\times (-2) + 10" },
            { verbal_explanation: "נכפול מינוס במינוס, מה שנותן פלוס.", math_expression: "6 + 10" },
            { verbal_explanation: "נחבר את המספרים.", math_expression: "16" }
        ],
        final_answer: "16"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "הצבה בביטוי אלגברי",
        question_text: "<div dir='rtl' style='text-align: center;'>חשבו את ערך הביטוי הריבועי \\( x^2 - 4x \\) עבור \\( x = 5 \\).</div>",
        options: ["5", "45", "-5", "9"],
        correctAnswer: 0,
        hint: "הציבו את המספר במקום x בשני המקומות שבהם הוא מופיע. חשבו קודם את החזקה.",
        solution_steps: [
            { verbal_explanation: "נציב את המספר 5 במקום כל מופע של x.", math_expression: "5^2 - 4 \\times 5" },
            { verbal_explanation: "נחשב את החזקה ואת המכפלה.", math_expression: "25 - 20" },
            { verbal_explanation: "נבצע את החיסור.", math_expression: "5" }
        ],
        final_answer: "5"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "הצבה בביטוי אלגברי",
        question_text: "<div dir='rtl' style='text-align: center;'>הצבה של מספר שלילי בחזקה: מה ערך הביטוי \\( 2m^2 + m \\) עבור \\( m = -3 \\)?</div>",
        options: ["15", "-21", "-15", "21"],
        correctAnswer: 0,
        hint: "הקפידו על סוגריים: \\( (-3)^2 \\). מספר שלילי המועלה בחזקה זוגית הופך לחיובי.",
        solution_steps: [
            { verbal_explanation: "נציב את המספר השלילי בתוך סוגריים בכל מקום בו מופיע המשתנה.", math_expression: "2(-3)^2 + (-3)" },
            { verbal_explanation: "נחשב את החזקה תחילה. מינוס 3 בריבוע הוא פלוס 9.", math_expression: "2(9) - 3" },
            { verbal_explanation: "נבצע את הכפל ונחסר.", math_expression: "18 - 3 = 15" }
        ],
        final_answer: "15"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "הצבה בביטוי אלגברי",
        question_text: "<div dir='rtl' style='text-align: center;'>נתון הביטוי עם שני משתנים: \\( 3x - 2y + 4 \\). חשבו את ערכו אם נתון כי \\( x = 2 \\) ו- \\( y = -1 \\).</div>",
        options: ["12", "8", "4", "10"],
        correctAnswer: 0,
        hint: "הציבו כל מספר במשתנה המתאים לו. שימו לב לכפל של המינוס 2 במינוס 1.",
        solution_steps: [
            { verbal_explanation: "נציב את הערכים במקומות המתאימים, תוך שימוש בסוגריים להצבת המינוס.", math_expression: "3(2) - 2(-1) + 4" },
            { verbal_explanation: "נבצע את שתי פעולות הכפל. שימו לב שמינוס כפול מינוס נותן פלוס.", math_expression: "6 + 2 + 4" },
            { verbal_explanation: "נחבר את כל האיברים יחד.", math_expression: "12" }
        ],
        final_answer: "12"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "הצבה בביטוי אלגברי",
        question_text: "<div dir='rtl' style='text-align: center;'>חשבו את ערכו של שבר אלגברי זה כאשר מציבים \\( k = 4 \\):<br>\\( \\dfrac{k^2 - 6}{k + 1} \\)</div>" + svgSubst,
        options: ["2", "10", "1.5", "5"],
        correctAnswer: 0,
        hint: "חשבו את המונה בנפרד ואת המכנה בנפרד, ורק בסוף בצעו את פעולת החילוק.",
        solution_steps: [
            { verbal_explanation: "נציב 4 במקום המשתנה במונה ובמכנה.", math_expression: "\\dfrac{4^2 - 6}{4 + 1}" },
            { verbal_explanation: "נחשב את ערך החזקה במונה ואת פעולת החיבור במכנה.", math_expression: "\\dfrac{16 - 6}{5}" },
            { verbal_explanation: "נבצע את פעולת החיסור במונה ונחלק.", math_expression: "\\dfrac{10}{5} = 2" }
        ],
        final_answer: "2"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "הצבה בביטוי אלגברי",
        question_text: "<div dir='rtl' style='text-align: center;'>זהירות, מלכודת מינוס! מה ערך הביטוי \\( -x^2 \\) כאשר מציבים \\( x = -5 \\)?</div>",
        options: ["-25", "25", "10", "-10"],
        correctAnswer: 0,
        hint: "המינוס שמופיע לפני ה-x אינו שייך לחזקה. קודם מעלים את ה-(5-) בריבוע, ורק אז מוסיפים לו את המינוס החיצוני.",
        solution_steps: [
            { verbal_explanation: "נציב את הערך השלילי בתוך סוגריים. המינוס החיצוני נשאר מחוץ לסוגריים.", math_expression: "-(-5)^2" },
            { verbal_explanation: "נחשב קודם את החזקה, על פי סדר פעולות חשבון.", math_expression: "-(25)" },
            { verbal_explanation: "כעת נפעיל את המינוס החיצוני על התוצאה החיובית שקיבלנו.", math_expression: "-25" }
        ],
        final_answer: "-25"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "הצבה בביטוי אלגברי",
        question_text: "<div dir='rtl' style='text-align: center;'>נתון הביטוי \\( a(a - 3) \\). מהו ערכו עבור הצבה של \\( a = -1 \\)?</div>",
        options: ["4", "-4", "-2", "2"],
        correctAnswer: 0,
        hint: "הציבו את 1- גם מחוץ לסוגריים וגם בתוכם. פתרו קודם את מה שבתוך הסוגריים.",
        solution_steps: [
            { verbal_explanation: "נציב את הערך במקומות המתאימים. נשתמש בסוגריים.", math_expression: "-1(-1 - 3)" },
            { verbal_explanation: "נחשב את מה שבתוך הסוגריים הפנימיים.", math_expression: "-1(-4)" },
            { verbal_explanation: "נבצע את המכפלה. כפל של שני שליליים נותן חיובי.", math_expression: "4" }
        ],
        final_answer: "4"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "הצבה בביטוי אלגברי",
        question_text: "<div dir='rtl' style='text-align: center;'>חשבו את ערך הביטוי \\( \\dfrac{2x + y}{x - y} \\) עבור ההצבה: \\( x = 3 \\) ו- \\( y = -2 \\).</div>",
        options: ["0.8", "1", "4", "0.4"],
        correctAnswer: 0,
        hint: "שימו לב במיוחד למכנה: יש שם חיסור של מספר שלילי, אשר הופך לחיבור.",
        solution_steps: [
            { verbal_explanation: "נציב את הנתונים תוך שמירה קפדנית על סימני המינוס בעזרת סוגריים.", math_expression: "\\dfrac{2(3) + (-2)}{3 - (-2)}" },
            { verbal_explanation: "נפשט את המונה. כפל, ואז חיבור עם מספר שלילי.", math_expression: "\\dfrac{6 - 2}{3 - (-2)}" },
            { verbal_explanation: "במכנה, חיסור של מינוס הופך לחיבור.", math_expression: "\\dfrac{4}{3 + 2} = \\dfrac{4}{5}" },
            { verbal_explanation: "נמיר את השבר הפשוט לשבר עשרוני.", math_expression: "0.8" }
        ],
        final_answer: "0.8"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "הצבה בביטוי אלגברי",
        question_text: "<div dir='rtl' style='text-align: center;'>מהו ערכו של הביטוי \\( x^3 - 2x^2 + x \\) אם נציב \\( x = 2 \\)?</div>",
        options: ["2", "4", "0", "8"],
        correctAnswer: 0,
        hint: "חשבו כל איבר בנפרד (קודם חזקות, ואז כפל) ולבסוף חברו וחלקו לפי הסדר.",
        solution_steps: [
            { verbal_explanation: "נציב 2 בכל מקום בו מופיע המשתנה.", math_expression: "2^3 - 2(2)^2 + 2" },
            { verbal_explanation: "נחשב את החזקות.", math_expression: "8 - 2(4) + 2" },
            { verbal_explanation: "נבצע את הכפל באיבר האמצעי.", math_expression: "8 - 8 + 2" },
            { verbal_explanation: "נשלים את פעולות החיבור והחיסור.", math_expression: "2" }
        ],
        final_answer: "2"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "הצבה בביטוי אלגברי",
        question_text: "<div dir='rtl' style='text-align: center;'>נתון הביטוי \\( \\sqrt{b^2 + 9} \\). איזה ערך נקבל אם נציב \\( b = 4 \\)?</div>",
        options: ["5", "7", "25", "13"],
        correctAnswer: 0,
        hint: "העלו את 4 בריבוע, חברו ל-9 בתוך השורש, ורק בסוף הוציאו שורש לתוצאה כולה.",
        solution_steps: [
            { verbal_explanation: "נציב את הערך בתוך השורש.", math_expression: "\\sqrt{4^2 + 9}" },
            { verbal_explanation: "נחשב את החזקה.", math_expression: "\\sqrt{16 + 9}" },
            { verbal_explanation: "נחבר את המספרים תחת השורש ואז נוציא שורש ריבועי.", math_expression: "\\sqrt{25} = 5" }
        ],
        final_answer: "5"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "הצבה בביטוי אלגברי",
        question_text: "<div dir='rtl' style='text-align: center;'>מצאו את ערך הביטוי \\( \\dfrac{1}{x} + \\dfrac{1}{y} \\) עבור הצבה של שברים: \\( x = \\dfrac{1}{2} \\) ו- \\( y = \\dfrac{1}{3} \\).</div>",
        options: ["5", "1.2", "6", "0.833"],
        correctAnswer: 0,
        hint: "הביטוי 1 חלקי שבר הוא למעשה ההופכי של אותו שבר. לכן, ההופכי של חצי הוא 2, וההופכי של שליש הוא 3.",
        solution_steps: [
            { verbal_explanation: "נציב את השברים בביטוי במקום המשתנים.", math_expression: "\\dfrac{1}{\\dfrac{1}{2}} + \\dfrac{1}{\\dfrac{1}{3}}" },
            { verbal_explanation: "אחד חלקי שבר שווה למספר ההופכי שלו.", math_expression: "2 + 3" },
            { verbal_explanation: "נחבר את השלמים שקיבלנו.", math_expression: "5" }
        ],
        final_answer: "5"
    },

    // ==========================================================
    // 5. פתיחת סוגריים וכינוס איברים (12 שאלות)
    // ==========================================================
    {
        topic: "basic_algebra_172",
        subTopic: "פתיחת סוגריים וכינוס איברים",
        question_text: "<div dir='rtl' style='text-align: center;'>פשטו את הביטוי על ידי פתיחת סוגריים (חוק הפילוג):<br>\\( 4(x + 5) \\)</div>" + svgExpand,
        options: ["4x + 20", "4x + 5", "x + 20", "24x"],
        correctAnswer: 0,
        hint: "יש לכפול את המספר שמחוץ לסוגריים (4) בכל אחד מהאיברים שבתוך הסוגריים.",
        solution_steps: [
            { verbal_explanation: "נכפול את המספר החיצוני באיבר הראשון שבסוגריים.", math_expression: "4 \\times x = 4x" },
            { verbal_explanation: "נכפול את המספר החיצוני באיבר השני שבסוגריים.", math_expression: "4 \\times 5 = 20" },
            { verbal_explanation: "נחבר את התוצאות לביטוי אחד פשוט.", math_expression: "4x + 20" }
        ],
        final_answer: "4x + 20"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "פתיחת סוגריים וכינוס איברים",
        question_text: "<div dir='rtl' style='text-align: center;'>פשטו את הביטוי הבא. שימו לב לסימן המינוס:<br>\\( -3(2a - 4) \\)</div>",
        options: ["-6a + 12", "-6a - 12", "6a - 12", "-6a - 4"],
        correctAnswer: 0,
        hint: "כופלים מינוס 3 בכל איבר. זכרו שמינוס כפול פלוס הוא מינוס, ומינוס כפול מינוס נותן פלוס.",
        solution_steps: [
            { verbal_explanation: "נכפול את המקדם השלילי באיבר הראשון.", math_expression: "-3 \\times 2a = -6a" },
            { verbal_explanation: "נכפול את המקדם השלילי באיבר השני שהוא גם שלילי (לכן התוצאה חיובית).", math_expression: "-3 \\times (-4) = 12" },
            { verbal_explanation: "נאחד את שני החלקים.", math_expression: "-6a + 12" }
        ],
        final_answer: "-6a + 12"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "פתיחת סוגריים וכינוס איברים",
        question_text: "<div dir='rtl' style='text-align: center;'>מהי התוצאה של פתיחת סוגריים בביטוי הבא?<br>\\( x(x + 7) \\)</div>",
        options: ["x^2 + 7x", "2x + 7", "x^2 + 7", "8x"],
        correctAnswer: 0,
        hint: "כאשר כופלים משתנה בעצמו (איקס כפול איקס) מקבלים את המשתנה בריבוע.",
        solution_steps: [
            { verbal_explanation: "נכפול את המשתנה שמחוץ לסוגריים במשתנה הפנימי.", math_expression: "x \\times x = x^2" },
            { verbal_explanation: "נכפול את המשתנה החיצוני במספר שבפנים.", math_expression: "x \\times 7 = 7x" },
            { verbal_explanation: "נאחד את הביטויים שנוצרו.", math_expression: "x^2 + 7x" }
        ],
        final_answer: "x^2 + 7x"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "פתיחת סוגריים וכינוס איברים",
        question_text: "<div dir='rtl' style='text-align: center;'>פשטו את הביטוי הבא על ידי פתיחת הסוגריים הכפולים וכינוס איברים:<br>\\( (x + 2)(x + 3) \\)</div>" + svgExpand,
        options: ["x^2 + 5x + 6", "x^2 + 6", "x^2 + 5", "2x + 6"],
        correctAnswer: 0,
        hint: "השתמשו בחוק הפילוג המורחב: כפלו כל איבר מהסוגריים הראשונים בכל איבר מהסוגריים השניים, ולאחר מכן כנסו איברים דומים.",
        solution_steps: [
            { verbal_explanation: "נכפול את האיבר הראשון (x) בשני איברי הסוגריים השניים.", math_expression: "x \\times x + x \\times 3 = x^2 + 3x" },
            { verbal_explanation: "נכפול את האיבר השני (2) בשני איברי הסוגריים השניים.", math_expression: "2 \\times x + 2 \\times 3 = 2x + 6" },
            { verbal_explanation: "נחבר הכל ונכנס איברים דומים (איברים עם x).", math_expression: "x^2 + 3x + 2x + 6 = x^2 + 5x + 6" }
        ],
        final_answer: "x^2 + 5x + 6"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "פתיחת סוגריים וכינוס איברים",
        question_text: "<div dir='rtl' style='text-align: center;'>פשטו את ביטוי המכפלה הכולל מינוסים:<br>\\( (a - 4)(a + 5) \\)</div>",
        options: ["a^2 + a - 20", "a^2 - a - 20", "a^2 - 20", "a^2 + 9a - 20"],
        correctAnswer: 0,
        hint: "הקפידו על חוקי הסימנים. מינוס 4 כפול a שווה מינוס 4a. בסוף, כנסו איברים דומים בזהירות.",
        solution_steps: [
            { verbal_explanation: "כפל של האיבר הראשון (a) בשני האיברים.", math_expression: "a \\times a + a \\times 5 = a^2 + 5a" },
            { verbal_explanation: "כפל של האיבר השני הכולל את הסימן שלו (-4) בשני האיברים.", math_expression: "-4 \\times a - 4 \\times 5 = -4a - 20" },
            { verbal_explanation: "נחבר ונכנס איברים דומים בחלק המרכזי.", math_expression: "a^2 + (5a - 4a) - 20" },
            { verbal_explanation: "הביטוי הסופי המפשוט.", math_expression: "a^2 + a - 20" }
        ],
        final_answer: "a^2 + a - 20"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "פתיחת סוגריים וכינוס איברים",
        question_text: "<div dir='rtl' style='text-align: center;'>מהי הצורה המפושטת של הביטוי הבא?<br>\\( (2x - 1)(3x - 2) \\)</div>",
        options: ["6x^2 - 7x + 2", "6x^2 - 5x + 2", "5x^2 - 7x - 2", "6x^2 - 2"],
        correctAnswer: 0,
        hint: "כפלו מקדמים בזהירות (2x כפול 3x שווה 6x²). זכרו שמכפלה של שני מספרים שליליים נותנת חיובי.",
        solution_steps: [
            { verbal_explanation: "נבצע את כל ארבעת פעולות הכפל הנדרשות (פילוג מורחב).", math_expression: "(2x)(3x) + (2x)(-2) + (-1)(3x) + (-1)(-2)" },
            { verbal_explanation: "נחשב את המכפלות השונות.", math_expression: "6x^2 - 4x - 3x + 2" },
            { verbal_explanation: "נכנס איברים דומים בעלי משתנה מאותה דרגה.", math_expression: "6x^2 - 7x + 2" }
        ],
        final_answer: "6x^2 - 7x + 2"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "פתיחת סוגריים וכינוס איברים",
        question_text: "<div dir='rtl' style='text-align: center;'>כיצד נראה הביטוי לאחר פתיחת הסוגריים?<br>\\( - (x - 8) \\)</div>",
        options: ["-x + 8", "-x - 8", "x + 8", "x - 8"],
        correctAnswer: 0,
        hint: "סימן המינוס לפני הסוגריים פועל כמו הכפלה ב- (-1). הוא פשוט הופך את הסימן של כל איבר בפנים.",
        solution_steps: [
            { verbal_explanation: "סימן המינוס מחוץ לסוגריים משנה את הסימן של האיבר הראשון (x חיובי הופך לשלילי).", math_expression: "-x" },
            { verbal_explanation: "המינוס משנה גם את הסימן של האיבר השני (מינוס 8 הופך לפלוס 8).", math_expression: "8" },
            { verbal_explanation: "נאחד לביטוי הסופי.", math_expression: "-x + 8" }
        ],
        final_answer: "-x + 8"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "פתיחת סוגריים וכינוס איברים",
        question_text: "<div dir='rtl' style='text-align: center;'>פשטו את הביטוי על ידי פתיחת סוגריים וכינוס איברים מיידי:<br>\\( 5 + 2(x - 3) \\)</div>",
        options: ["2x - 1", "7x - 21", "2x + 2", "7x - 3"],
        correctAnswer: 0,
        hint: "שימו לב היטב לסדר הפעולות! אסור לחבר 5+2 לפני שפותחים את הסוגריים (כפל קודם לחיבור).",
        solution_steps: [
            { verbal_explanation: "נתחיל מפתיחת הסוגריים על ידי הכפלת ה-2 באיברים הפנימיים בלבד.", math_expression: "2x - 6" },
            { verbal_explanation: "נצרף את ה-5 שהמתין בחוץ.", math_expression: "5 + 2x - 6" },
            { verbal_explanation: "נכנס איברים דומים (מספרים חופשיים בלבד).", math_expression: "2x - 1" }
        ],
        final_answer: "2x - 1"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "פתיחת סוגריים וכינוס איברים",
        question_text: "<div dir='rtl' style='text-align: center;'>פשטו את הביטוי הבא המכיל שני זוגות סוגריים נפרדים:<br>\\( 3(a + 2) - 4(a - 1) \\)</div>",
        options: ["-a + 10", "-a + 2", "7a + 2", "-a + 6"],
        correctAnswer: 0,
        hint: "פתחו כל זוג סוגריים בנפרד. היזהרו כשאתם פותחים את הסוגריים השניים, שכן המקדם הוא 4-.",
        solution_steps: [
            { verbal_explanation: "נפתח את הסוגריים הראשונים.", math_expression: "3a + 6" },
            { verbal_explanation: "נפתח את הסוגריים השניים (נכפול במינוס 4).", math_expression: "-4a + 4" },
            { verbal_explanation: "נחבר את כל האיברים למשוואה אחת ארוכה.", math_expression: "3a + 6 - 4a + 4" },
            { verbal_explanation: "נכנס איברים דומים (משתנים לחוד ומספרים לחוד).", math_expression: "-a + 10" }
        ],
        final_answer: "-a + 10"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "פתיחת סוגריים וכינוס איברים",
        question_text: "<div dir='rtl' style='text-align: center;'>כיצד נפתח סוגריים הכוללים חזקות מורכבות יותר?<br>\\( 2x^2(3x - 5) \\)</div>",
        options: ["6x^3 - 10x^2", "5x^3 - 10x^2", "6x^2 - 10x^2", "6x^3 - 5"],
        correctAnswer: 0,
        hint: "היעזרו בחוקי חזקות בעת הכפל: x בריבוע כפול x נותן x בשלישית.",
        solution_steps: [
            { verbal_explanation: "נכפול את המקדם החיצוני באיבר הראשון. מקדם במקדם, ומשתנה במשתנה.", math_expression: "(2x^2) \\times (3x) = 6x^3" },
            { verbal_explanation: "נכפול את המקדם החיצוני באיבר השני.", math_expression: "(2x^2) \\times (-5) = -10x^2" },
            { verbal_explanation: "נאחד את הביטוי.", math_expression: "6x^3 - 10x^2" }
        ],
        final_answer: "6x^3 - 10x^2"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "פתיחת סוגריים וכינוס איברים",
        question_text: "<div dir='rtl' style='text-align: center;'>פשטו את המכפלה המשולשת הבאה:<br>\\( 2(x + 1)(x + 4) \\)</div>",
        options: ["2x^2 + 10x + 8", "2x^2 + 5x + 4", "2x^2 + 10x + 4", "2x^2 + 8"],
        correctAnswer: 0,
        hint: "מומלץ קודם לפתוח את הסוגריים הכפולים, לשים את התוצאה בתוך סוגריים גדולים, ורק בסוף להכפיל הכל ב-2.",
        solution_steps: [
            { verbal_explanation: "נפתח את הסוגריים הכפולים (מכפלת הדו-איברים).", math_expression: "(x+1)(x+4) = x^2 + 4x + 1x + 4 = x^2 + 5x + 4" },
            { verbal_explanation: "כעת, נכפול את כל הביטוי שקיבלנו במקדם החיצוני 2.", math_expression: "2(x^2 + 5x + 4)" },
            { verbal_explanation: "נבצע את פתיחת הסוגריים האחרונה.", math_expression: "2x^2 + 10x + 8" }
        ],
        final_answer: "2x^2 + 10x + 8"
    },
    {
        topic: "basic_algebra_172",
        subTopic: "פתיחת סוגריים וכינוס איברים",
        question_text: "<div dir='rtl' style='text-align: center;'>פתרו את הביטוי הבא הדורש פתיחה מדויקת וכינוס איברים מורכב:<br>\\( x(x - 2) - (x + 1)(x - 3) \\)</div>",
        options: ["3", "-3", "2x^2 - x + 3", "2x - 3"],
        correctAnswer: 0,
        hint: "פתחו את החלק הראשון, ואז פתחו את השני אך השאירו אותו בתוך סוגריים בגלל המינוס שלפניו. לבסוף הפכו סימנים וכנסו.",
        solution_steps: [
            { verbal_explanation: "נפתח את החלק הראשון.", math_expression: "x^2 - 2x" },
            { verbal_explanation: "נפתח את החלק השני בתוך סוגריים להגנה מהמינוס.", math_expression: "(x^2 - 3x + x - 3) = (x^2 - 2x - 3)" },
            { verbal_explanation: "נשלב את שני החלקים עם סימן המינוס ביניהם.", math_expression: "x^2 - 2x - (x^2 - 2x - 3)" },
            { verbal_explanation: "נפתח את סוגריים ההגנה (שינוי סימנים) ונכנס איברים דומים.", math_expression: "x^2 - 2x - x^2 + 2x + 3 = 3" }
        ],
        final_answer: "3"
    }

];