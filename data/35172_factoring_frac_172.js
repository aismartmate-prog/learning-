// ========================================================================
// שאלון: 35172 | נושא: פירוק לגורמים ושברים אלגבריים (6 תתי-נושאים, 60 שאלות)
// קובץ: 35172_factoring_fractions.js
// >>> גרסה 4.0: ללא לוכסנים בתשובות, פתרונות מואכלים בכפית, הגנת RTL מלאה <<<
// ========================================================================

// ==========================================
// מאגר 6 איורי פרימיום 3D (מופרדים מהטקסט לחלוטין)
// ==========================================

// 1. הוצאת גורם משותף (חילוץ איבר משותף)
const svgFactor = "&#8207;<div dir='ltr' style='display:flex; justify-content:center; width:100%; clear:both; margin-top:15px;'><svg width='220' height='100' viewBox='0 0 220 100'><defs><linearGradient id='gf1' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='#8b5cf6' stop-opacity='0.2'/><stop offset='100%' stop-color='#5b21b6' stop-opacity='0.8'/></linearGradient><filter id='dropF1'><feDropShadow dx='2' dy='4' stdDeviation='3' flood-opacity='0.3'/></filter></defs><rect x='80' y='30' width='100' height='40' rx='6' fill='url(#gf1)' stroke='#7c3aed' stroke-width='3' filter='url(#dropF1)'/><rect x='40' y='30' width='35' height='40' rx='6' fill='#f3e8ff' stroke='#7c3aed' stroke-width='3' filter='url(#dropF1)'/><path d='M115 30 L115 70' stroke='#c084fc' stroke-width='2' stroke-dasharray='4,4'/><path d='M75 50 L60 50 L65 45 M60 50 L65 55' stroke='#6d28d9' stroke-width='3' fill='none'/><text x='130' y='55' font-family='Arial' font-size='16' font-weight='bold' fill='#4c1d95'>a+b</text><text x='57' y='55' font-family='Arial' font-size='16' font-weight='bold' fill='#4c1d95'>x</text></svg></div>";

// 2. נוסחאות כפל מקוצר (מודל שטחים ריבועי)
const svgShortMul = "&#8207;<div dir='ltr' style='display:flex; justify-content:center; width:100%; clear:both; margin-top:15px;'><svg width='220' height='100' viewBox='0 0 220 100'><defs><linearGradient id='gm1' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='#ec4899' stop-opacity='0.2'/><stop offset='100%' stop-color='#be123c' stop-opacity='0.8'/></linearGradient><filter id='dropM1'><feDropShadow dx='2' dy='4' stdDeviation='3' flood-opacity='0.3'/></filter></defs><rect x='70' y='10' width='80' height='80' rx='4' fill='url(#gm1)' stroke='#e11d48' stroke-width='3' filter='url(#dropM1)'/><line x1='70' y1='60' x2='150' y2='60' stroke='#fda4af' stroke-width='3'/><line x1='120' y1='10' x2='120' y2='90' stroke='#fda4af' stroke-width='3'/><text x='95' y='40' font-family='Arial' font-size='18' font-weight='bold' fill='#881337'>a²</text><text x='135' y='78' font-family='Arial' font-size='14' font-weight='bold' fill='#881337'>b²</text></svg></div>";

// 3. תחום הצבה (ציר מספרים עם "חור" אדום)
const svgDomain = "&#8207;<div dir='ltr' style='display:flex; justify-content:center; width:100%; clear:both; margin-top:15px;'><svg width='220' height='100' viewBox='0 0 220 100'><defs><filter id='dropD1'><feDropShadow dx='1' dy='3' stdDeviation='2' flood-opacity='0.3'/></filter></defs><line x1='20' y1='50' x2='200' y2='50' stroke='#334155' stroke-width='4' stroke-linecap='round' filter='url(#dropD1)'/><polygon points='200,50 190,45 190,55' fill='#334155'/><circle cx='110' cy='50' r='8' fill='#ffffff' stroke='#ef4444' stroke-width='3'/><line x1='105' y1='45' x2='115' y2='55' stroke='#ef4444' stroke-width='2'/><line x1='115' y1='45' x2='105' y2='55' stroke='#ef4444' stroke-width='2'/><text x='110' y='35' font-family='Arial' font-size='14' font-weight='bold' fill='#b91c1c' text-anchor='middle'>x \u2260 a</text></svg></div>";

// 4. צמצום שברים (ביטול איברים זהים מונה ומכנה)
const svgSimplify = "&#8207;<div dir='ltr' style='display:flex; justify-content:center; width:100%; clear:both; margin-top:15px;'><svg width='220' height='100' viewBox='0 0 220 100'><defs><linearGradient id='gs1' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='#0ea5e9' stop-opacity='0.2'/><stop offset='100%' stop-color='#0369a1' stop-opacity='0.8'/></linearGradient><filter id='dropS1'><feDropShadow dx='2' dy='3' stdDeviation='2' flood-opacity='0.3'/></filter></defs><line x1='60' y1='50' x2='160' y2='50' stroke='#0284c7' stroke-width='4' filter='url(#dropS1)'/><rect x='80' y='15' width='60' height='25' rx='4' fill='url(#gs1)' stroke='#0284c7' stroke-width='2'/><rect x='80' y='60' width='60' height='25' rx='4' fill='url(#gs1)' stroke='#0284c7' stroke-width='2'/><line x1='75' y1='10' x2='145' y2='45' stroke='#ef4444' stroke-width='3' stroke-linecap='round'/><line x1='75' y1='55' x2='145' y2='90' stroke='#ef4444' stroke-width='3' stroke-linecap='round'/></svg></div>";

// 5. כפל וחילוק שברים
const svgMulFrac = "&#8207;<div dir='ltr' style='display:flex; justify-content:center; width:100%; clear:both; margin-top:15px;'><svg width='220' height='100' viewBox='0 0 220 100'><defs><linearGradient id='gmf1' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='#10b981' stop-opacity='0.2'/><stop offset='100%' stop-color='#047857' stop-opacity='0.8'/></linearGradient><filter id='dropMF1'><feDropShadow dx='2' dy='3' stdDeviation='2' flood-opacity='0.3'/></filter></defs><rect x='30' y='25' width='50' height='50' rx='5' fill='url(#gmf1)' stroke='#059669' stroke-width='2' filter='url(#dropMF1)'/><line x1='35' y1='50' x2='75' y2='50' stroke='#047857' stroke-width='3'/><circle cx='110' cy='50' r='4' fill='#064e3b'/><rect x='140' y='25' width='50' height='50' rx='5' fill='url(#gmf1)' stroke='#059669' stroke-width='2' filter='url(#dropMF1)'/><line x1='145' y1='50' x2='185' y2='50' stroke='#047857' stroke-width='3'/></svg></div>";

// 6. חיבור וחיסור שברים (מכנה משותף)
const svgAddFrac = "&#8207;<div dir='ltr' style='display:flex; justify-content:center; width:100%; clear:both; margin-top:15px;'><svg width='220' height='100' viewBox='0 0 220 100'><defs><linearGradient id='gaf1' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='#f59e0b' stop-opacity='0.2'/><stop offset='100%' stop-color='#b45309' stop-opacity='0.8'/></linearGradient><filter id='dropAF1'><feDropShadow dx='2' dy='3' stdDeviation='2' flood-opacity='0.3'/></filter></defs><line x1='20' y1='60' x2='200' y2='60' stroke='#d97706' stroke-width='4' filter='url(#dropAF1)'/><rect x='40' y='20' width='40' height='30' rx='4' fill='url(#gaf1)' stroke='#b45309' stroke-width='2'/><path d='M100 35 L120 35 M110 25 L110 45' stroke='#b45309' stroke-width='3' stroke-linecap='round'/><rect x='140' y='20' width='40' height='30' rx='4' fill='url(#gaf1)' stroke='#b45309' stroke-width='2'/><rect x='80' y='70' width='60' height='20' rx='4' fill='#fef3c7' stroke='#b45309' stroke-width='2'/></svg></div>";


const questionsDB = [

    // ==========================================================
    // 1. הוצאת גורם משותף (10 שאלות)
    // ==========================================================
    {
        topic: "factoring_frac_172",
        subTopic: "הוצאת גורם משותף",
        question_text: "<div dir='rtl' style='text-align: center;'>פשטו את הביטוי הבא על ידי הוצאת הגורם המשותף הגדול ביותר מחוץ לסוגריים:<br>\\( 15x - 5 \\)</div>" + svgFactor,
        options: ["5(3x - 1)", "5(3x - 5)", "x(15 - 5)", "3(5x - 1)"],
        correctAnswer: 0,
        hint: "מצאו את המספר הגדול ביותר שגם 15 וגם 5 מתחלקים בו ללא שארית.",
        solution_steps: [
            { verbal_explanation: "נמצא את המחלק המשותף הגדול ביותר של המספרים 15 ו-5, שהוא 5.", math_expression: "GCD(15, 5) = 5" },
            { verbal_explanation: "נוציא את 5 מחוץ לסוגריים, ונחלק כל איבר מקורי ב-5 כדי למצוא מה נשאר בפנים.", math_expression: "\\dfrac{15x}{5} = 3x \\quad , \\quad \\dfrac{-5}{5} = -1" },
            { verbal_explanation: "נרכיב את התשובה הסופית. שימו לב לחשיבותו של ה- (1-) ולא להשאירו ריק!", math_expression: "5(3x - 1)" }
        ],
        final_answer: "5(3x - 1)"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "הוצאת גורם משותף",
        question_text: "<div dir='rtl' style='text-align: center;'>הוציאו גורם משותף מהביטוי הבא הכולל חזקות:<br>\\( x^2 + 4x \\)</div>",
        options: ["x(x + 4)", "x(x^2 + 4)", "4(x^2 + x)", "x(x + 4x)"],
        correctAnswer: 0,
        hint: "הגורם המשותף אינו חייב להיות מספר. כאן, המשתנה x נמצא בשני האיברים.",
        solution_steps: [
            { verbal_explanation: "המשתנה x מופיע בשני האיברים (בחזקה 2 ובחזקה 1). נוציא את החזקה הנמוכה ביותר, שהיא x.", math_expression: "x(...)" },
            { verbal_explanation: "נחלק את האיבר הראשון ב-x.", math_expression: "\\dfrac{x^2}{x} = x" },
            { verbal_explanation: "נחלק את האיבר השני ב-x.", math_expression: "\\dfrac{4x}{x} = 4" },
            { verbal_explanation: "נרשום את הביטוי המפורק.", math_expression: "x(x + 4)" }
        ],
        final_answer: "x(x + 4)"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "הוצאת גורם משותף",
        question_text: "<div dir='rtl' style='text-align: center;'>מהו הפירוק לגורמים של הביטוי הבא?<br>\\( a^3 - a^2 \\)</div>",
        options: ["a^2(a - 1)", "a^2(a - 0)", "a(a^2 - 1)", "a^3(1 - a)"],
        correctAnswer: 0,
        hint: "הוציאו את המשתנה עם החזקה הנמוכה יותר מבין השתיים כגורם משותף. זכרו שמספר חלקי עצמו שווה ל-1.",
        solution_steps: [
            { verbal_explanation: "הגורם המשותף המקסימלי במקרה של משתנים הוא תמיד המשתנה עם החזקה הנמוכה ביותר המופיעה בביטוי.", math_expression: "a^2" },
            { verbal_explanation: "נחלק את האיבר הראשון.", math_expression: "\\dfrac{a^3}{a^2} = a" },
            { verbal_explanation: "נחלק את האיבר השני, ונקפיד לרשום 1 (ולא להשאירו ריק).", math_expression: "\\dfrac{-a^2}{a^2} = -1" },
            { verbal_explanation: "נרכיב את הפירוק.", math_expression: "a^2(a - 1)" }
        ],
        final_answer: "a^2(a - 1)"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "הוצאת גורם משותף",
        question_text: "<div dir='rtl' style='text-align: center;'>כיצד נפרק את הביטוי הבא הכולל מקדם שלילי מוביל?<br>\\( -6x^2 + 12x \\)</div>",
        options: ["-6x(x - 2)", "-6x(x + 2)", "6x(-x - 2)", "6x(x - 2)"],
        correctAnswer: 0,
        hint: "מומלץ להוציא את המינוס מחוץ לסוגריים יחד עם הגורם המשותף (6x). שימו לב כיצד זה הופך את הסימן של האיבר השני.",
        solution_steps: [
            { verbal_explanation: "המחלק המשותף של 6 ו-12 הוא 6. המשתנה המשותף הוא x. נוציא את (-6x) כדי שהאיבר הראשון בתוך הסוגריים יהיה חיובי.", math_expression: "-6x(...)" },
            { verbal_explanation: "נחלק את האיבר הראשון: שלילי חלקי שלילי נותן חיובי.", math_expression: "\\dfrac{-6x^2}{-6x} = x" },
            { verbal_explanation: "נחלק את האיבר השני: חיובי חלקי שלילי נותן שלילי.", math_expression: "\\dfrac{12x}{-6x} = -2" },
            { verbal_explanation: "הביטוי הסופי.", math_expression: "-6x(x - 2)" }
        ],
        final_answer: "-6x(x - 2)"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "הוצאת גורם משותף",
        question_text: "<div dir='rtl' style='text-align: center;'>הוציאו גורם משותף לביטוי המכיל מספר משתנים:<br>\\( 3xy + 6x \\)</div>" + svgFactor,
        options: ["3x(y + 2)", "3(xy + 2x)", "x(3y + 6)", "3xy(1 + 2)"],
        correctAnswer: 0,
        hint: "המספר 3 משותף למקדמים, והמשתנה x מופיע בשני האיברים. y מופיע רק באיבר אחד ולכן נשאר בפנים.",
        solution_steps: [
            { verbal_explanation: "הגורם המשותף מורכב מהמספר (3) והאות המשותפת לשני האיברים (x).", math_expression: "3x(...)" },
            { verbal_explanation: "נחלק את האיבר הראשון בגורם המשותף.", math_expression: "\\dfrac{3xy}{3x} = y" },
            { verbal_explanation: "נחלק את האיבר השני בגורם המשותף.", math_expression: "\\dfrac{6x}{3x} = 2" },
            { verbal_explanation: "הביטוי לאחר הוצאת הגורם.", math_expression: "3x(y + 2)" }
        ],
        final_answer: "3x(y + 2)"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "הוצאת גורם משותף",
        question_text: "<div dir='rtl' style='text-align: center;'>פרקו לגורמים את התלת-איבר הבא באמצעות הוצאת גורם משותף בלבד:<br>\\( 4x^3 - 8x^2 + 12x \\)</div>",
        options: ["4x(x^2 - 2x + 3)", "4(x^3 - 2x^2 + 3x)", "x(4x^2 - 8x + 12)", "4x^2(x - 2 + 3)"],
        correctAnswer: 0,
        hint: "עליכם למצוא גורם (מספר ומשתנה) שמופיע בכל שלושת האיברים. 4 מחלק את כולם, ו-x קיים בכולם.",
        solution_steps: [
            { verbal_explanation: "נבדוק את המקדמים: 4, 8, 12 כולם מתחלקים ב-4. המשתנה המשותף בחזקה הנמוכה ביותר הוא x.", math_expression: "4x(...)" },
            { verbal_explanation: "נחלק את האיבר הראשון.", math_expression: "\\dfrac{4x^3}{4x} = x^2" },
            { verbal_explanation: "נחלק את האיבר השני והשלישי באותו אופן.", math_expression: "\\dfrac{-8x^2}{4x} = -2x \\quad , \\quad \\dfrac{12x}{4x} = 3" },
            { verbal_explanation: "נרכיב את התשובה בתוך סוגריים.", math_expression: "4x(x^2 - 2x + 3)" }
        ],
        final_answer: "4x(x^2 - 2x + 3)"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "הוצאת גורם משותף",
        question_text: "<div dir='rtl' style='text-align: center;'>ניתן להוציא גם ביטוי שלם מתוך סוגריים כגורם משותף. פרקו את הביטוי הבא:<br>\\( 2(x + 3) + a(x + 3) \\)</div>",
        options: ["(x + 3)(2 + a)", "(x + 3)(2a)", "2a(x + 3)", "(x + 3) + (2 + a)"],
        correctAnswer: 0,
        hint: "הסוגריים (x+3) מופיעים במלואם בשני חלקי המשוואה. התייחסו אליהם כאל 'גוש' יחיד שניתן למשוך החוצה כגורם משותף.",
        solution_steps: [
            { verbal_explanation: "נזהה שהביטוי (x+3) משותף לשני המחוברים.", math_expression: "(x + 3)[...]" },
            { verbal_explanation: "כאשר מוציאים את הסוגריים מהמחובר הראשון, נשאר 2.", math_expression: "2" },
            { verbal_explanation: "כאשר מוציאים אותם מהמחובר השני, נשאר a.", math_expression: "a" },
            { verbal_explanation: "נאחד את השאריות לתוך סוגריים חדשים המוכפלים בביטוי שהוצאנו.", math_expression: "(x + 3)(2 + a)" }
        ],
        final_answer: "(x + 3)(2 + a)"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "הוצאת גורם משותף",
        question_text: "<div dir='rtl' style='text-align: center;'>מהו הגורם המשותף <b>הגדול ביותר</b> שניתן להוציא מהביטוי הבא?<br>\\( 18x^2y - 24xy^2 \\)</div>",
        options: ["6xy", "3x^2y", "2xy", "6x^2y^2"],
        correctAnswer: 0,
        hint: "מצאו את המחלק המשותף הגבוה ביותר של 18 ו-24 (שהוא 6). קחו כל אות בחזקה הנמוכה ביותר שבה היא מופיעה.",
        solution_steps: [
            { verbal_explanation: "נמצא את המחלק המשותף הגדול ביותר עבור המספרים 18 ו-24.", math_expression: "GCD(18, 24) = 6" },
            { verbal_explanation: "המשתנה x מופיע בחזקות 2 ו-1. ניקח את החזקה הנמוכה: x.", math_expression: "x" },
            { verbal_explanation: "המשתנה y מופיע בחזקות 1 ו-2. ניקח את החזקה הנמוכה: y.", math_expression: "y" },
            { verbal_explanation: "נכפול הכל יחד לקבלת הגורם המשותף הגדול ביותר.", math_expression: "6xy" }
        ],
        final_answer: "6xy"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "הוצאת גורם משותף",
        question_text: "<div dir='rtl' style='text-align: center;'>השתמשו בהוצאת גורם משותף כדי לפתור את המשוואה הריבועית החסרה הבאה:<br>\\( x^2 - 5x = 0 \\)</div>",
        options: ["x=0 , x=5", "x=5", "x=0 , x=-5", "אין פתרון"],
        correctAnswer: 0,
        hint: "הוציאו x כגורם משותף. כאשר מכפלה של שני גורמים שווה לאפס, לפחות אחד מהם חייב להיות שווה לאפס.",
        solution_steps: [
            { verbal_explanation: "נוציא x כגורם משותף באגף השמאלי.", math_expression: "x(x - 5) = 0" },
            { verbal_explanation: "כדי שהמכפלה תתאפס, יש שתי אפשרויות. אפשרות ראשונה היא שהגורם הראשון אפס.", math_expression: "x = 0" },
            { verbal_explanation: "אפשרות שנייה היא שהגורם השני (הסוגריים) שווה לאפס. נפתור משוואה זו.", math_expression: "x - 5 = 0 \\Rightarrow x = 5" },
            { verbal_explanation: "קיבלנו שני פתרונות למשוואה.", math_expression: "x=0 , x=5" }
        ],
        final_answer: "x=0 , x=5"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "הוצאת גורם משותף",
        question_text: "<div dir='rtl' style='text-align: center;'>הבנה תיאורטית: מה קורה לאיבר השני בביטוי \\( x^2 + x \\) כאשר מוציאים ממנו \\( x \\) כגורם משותף?</div>",
        options: ["הוא נשאר 1 בתוך הסוגריים", "הוא נעלם לגמרי מהסוגריים", "הוא הופך ל-0", "הוא נשאר x"],
        correctAnswer: 0,
        hint: "הוצאת גורם משותף היא פעולה של חילוק. כמה זה x חלקי x?",
        solution_steps: [
            { verbal_explanation: "הוצאת גורם משותף מבוססת על חלוקת כל איבר בגורם המשותף.", math_expression: "" },
            { verbal_explanation: "האיבר הראשון חלקי x נותן x. אולם, האיבר השני הוא x. לכן נחלק x ב-x.", math_expression: "\\dfrac{x}{x} = 1" },
            { verbal_explanation: "לכן חייבים לרשום את הספרה 1 כדי לשמור על ערך הביטוי בעת פתיחה חוזרת.", math_expression: "x(x + 1)" }
        ],
        final_answer: "הוא נשאר 1 בתוך הסוגריים"
    },

    // ==========================================================
    // 2. נוסחאות כפל מקוצר (10 שאלות)
    // ==========================================================
    {
        topic: "factoring_frac_172",
        subTopic: "נוסחאות כפל מקוצר",
        question_text: "<div dir='rtl' style='text-align: center;'>פשטו את הביטוי באמצעות נוסחת הכפל המקוצר לדו-איבר בריבוע (ריבוע של סכום):<br>\\( (x + 5)^2 \\)</div>" + svgShortMul,
        options: ["x^2 + 10x + 25", "x^2 + 25", "x^2 + 5x + 25", "2x + 25"],
        correctAnswer: 0,
        hint: "הנוסחה היא: \\( (a+b)^2 = a^2 + 2ab + b^2 \\). זכרו שהאיבר האמצעי הוא פעמיים המכפלה של הראשון בשני.",
        solution_steps: [
            { verbal_explanation: "נשתמש בנוסחת הריבוע של סכום.", math_expression: "(a+b)^2 = a^2 + 2ab + b^2" },
            { verbal_explanation: "נציב את האיברים שלנו במקום a ו-b.", math_expression: "x^2 + 2(x)(5) + 5^2" },
            { verbal_explanation: "נחשב את המכפלה האמצעית ואת החזקה האחרונה להשלמת הפישוט.", math_expression: "x^2 + 10x + 25" }
        ],
        final_answer: "x^2 + 10x + 25"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "נוסחאות כפל מקוצר",
        question_text: "<div dir='rtl' style='text-align: center;'>מהי התוצאה של פתיחת הסוגריים הבאים (ריבוע של הפרש)?<br>\\( (x - 3)^2 \\)</div>",
        options: ["x^2 - 6x + 9", "x^2 - 9", "x^2 + 6x - 9", "x^2 - 3x + 9"],
        correctAnswer: 0,
        hint: "הנוסחה לחיסור זהה, רק שהאיבר האמצעי מקבל סימן מינוס. האיבר האחרון תמיד חיובי כי שלילי בריבוע הופך לחיובי.",
        solution_steps: [
            { verbal_explanation: "נשתמש בנוסחת הכפל המקוצר להפרש.", math_expression: "(a-b)^2 = a^2 - 2ab + b^2" },
            { verbal_explanation: "נציב את הנתונים, כאשר האיבר האמצעי יהיה שלילי.", math_expression: "x^2 - 2(x)(3) + 3^2" },
            { verbal_explanation: "נחשב את המכפלה ואת הריבוע.", math_expression: "x^2 - 6x + 9" }
        ],
        final_answer: "x^2 - 6x + 9"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "נוסחאות כפל מקוצר",
        question_text: "<div dir='rtl' style='text-align: center;'>השתמשו בנוסחת 'הפרש ריבועים' כדי לפשט את המכפלה הבאה באופן מיידי:<br>\\( (x - 6)(x + 6) \\)</div>",
        options: ["x^2 - 36", "x^2 + 36", "x^2 - 12x + 36", "x^2 - 12"],
        correctAnswer: 0,
        hint: "כאשר כופלים חיסור בחיבור של אותם איברים בדיוק, האיבר האמצעי מתבטל לחלוטין. התוצאה היא הראשון בריבוע פחות השני בריבוע.",
        solution_steps: [
            { verbal_explanation: "נזהה את התבנית של נוסחת הפרש ריבועים.", math_expression: "(a-b)(a+b) = a^2 - b^2" },
            { verbal_explanation: "האיבר הראשון הוא x והשני הוא 6. נעלה כל אחד מהם בריבוע עם מינוס ביניהם.", math_expression: "x^2 - 6^2" },
            { verbal_explanation: "נחשב את החזקה.", math_expression: "x^2 - 36" }
        ],
        final_answer: "x^2 - 36"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "נוסחאות כפל מקוצר",
        question_text: "<div dir='rtl' style='text-align: center;'>זהירות עם מקדמים: פתחו את הביטוי הבא בעזרת הנוסחה:<br>\\( (2x + 1)^2 \\)</div>" + svgShortMul,
        options: ["4x^2 + 4x + 1", "2x^2 + 4x + 1", "4x^2 + 1", "4x^2 + 2x + 1"],
        correctAnswer: 0,
        hint: "יש להעלות בריבוע את *כל* האיבר הראשון, כלומר \\( (2x)^2 \\), מה שנותן 4x². גם האיבר האמצעי צריך להיות מוכפל ב-2x.",
        solution_steps: [
            { verbal_explanation: "נציב בנוסחה. נקפיד להשתמש בסוגריים סביב ה-2x כדי שהחזקה תפעל על שני החלקים.", math_expression: "(2x)^2 + 2(2x)(1) + 1^2" },
            { verbal_explanation: "נחשב את הריבוע של האיבר הראשון.", math_expression: "4x^2" },
            { verbal_explanation: "נחשב את האיבר האמצעי והאחרון.", math_expression: "4x + 1" },
            { verbal_explanation: "נחבר את כל החלקים יחד.", math_expression: "4x^2 + 4x + 1" }
        ],
        final_answer: "4x^2 + 4x + 1"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "נוסחאות כפל מקוצר",
        question_text: "<div dir='rtl' style='text-align: center;'>פשטו את המכפלה הבאה, הכוללת מקדמים בשני האיברים:<br>\\( (3x - 4)(3x + 4) \\)</div>",
        options: ["9x^2 - 16", "3x^2 - 16", "9x^2 - 24x - 16", "9x^2 + 16"],
        correctAnswer: 0,
        hint: "הפרש ריבועים. העלו את (3x) כולו בריבוע, ואת 4 בריבוע.",
        solution_steps: [
            { verbal_explanation: "נשתמש בנוסחת הפרש ריבועים. האיבר הראשון כולל מקדם.", math_expression: "(3x)^2 - 4^2" },
            { verbal_explanation: "נעלה את כל האיבר הראשון בריבוע (3 בריבוע ו-x בריבוע).", math_expression: "9x^2" },
            { verbal_explanation: "נחשב את ריבוע האיבר השני.", math_expression: "16" },
            { verbal_explanation: "נרשום את התוצאה המלאה.", math_expression: "9x^2 - 16" }
        ],
        final_answer: "9x^2 - 16"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "נוסחאות כפל מקוצר",
        question_text: "<div dir='rtl' style='text-align: center;'>פעולה הפוכה: פרקו את הביטוי הבא לשני סוגריים בעזרת נוסחת הפרש ריבועים:<br>\\( x^2 - 64 \\)</div>",
        options: ["(x - 8)(x + 8)", "(x - 32)(x + 32)", "(x - 8)^2", "(x - 64)(x + 1)"],
        correctAnswer: 0,
        hint: "הוציאו שורש ריבועי מכל אחד משני האיברים. שורש של 64 הוא 8.",
        solution_steps: [
            { verbal_explanation: "נזהה שהביטוי מתאים לתבנית של הפרש ריבועים, מאחר ויש חיסור בין שני מספרים ריבועיים.", math_expression: "a^2 - b^2" },
            { verbal_explanation: "נוציא שורש מהאיבר הראשון והשני.", math_expression: "\\sqrt{x^2} = x \\quad , \\quad \\sqrt{64} = 8" },
            { verbal_explanation: "נציב את השורשים בתוך נוסחת הפתיחה בשני סוגריים, פעם בחיבור ופעם בחיסור.", math_expression: "(x - 8)(x + 8)" }
        ],
        final_answer: "(x - 8)(x + 8)"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "נוסחאות כפל מקוצר",
        question_text: "<div dir='rtl' style='text-align: center;'>פרקו את התלת-איבר (הטרינום) הבא לצורת סוגריים בריבוע. בדקו את האיבר האמצעי!<br>\\( x^2 + 10x + 25 \\)</div>",
        options: ["(x + 5)^2", "(x + 10)^2", "(x + 5)(x - 5)", "(x + 25)^2"],
        correctAnswer: 0,
        hint: "הוציאו שורש מהאיבר הראשון (x) והאחרון (5). בדקו אם פעמיים המכפלה שלהם אכן שווה לאיבר האמצעי (10x).",
        solution_steps: [
            { verbal_explanation: "נבדוק האם מדובר בריבוע של סכום. נוציא שורש מקצוות המשוואה.", math_expression: "\\sqrt{x^2} = x \\quad , \\quad \\sqrt{25} = 5" },
            { verbal_explanation: "נוודא שהאיבר האמצעי תואם לנוסחה (פעמיים הראשון כפול השני).", math_expression: "2 \\times x \\times 5 = 10x" },
            { verbal_explanation: "מכיוון שהתנאי מתקיים, ניתן לכתוב את הביטוי כדו-איבר בריבוע.", math_expression: "(x + 5)^2" }
        ],
        final_answer: "(x + 5)^2"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "נוסחאות כפל מקוצר",
        question_text: "<div dir='rtl' style='text-align: center;'>מהו הפירוק הנכון לביטוי הריבועי הבא, הכולל סימן מינוס?<br>\\( x^2 - 14x + 49 \\)</div>",
        options: ["(x - 7)^2", "(x + 7)^2", "(x - 7)(x + 7)", "(x - 14)^2"],
        correctAnswer: 0,
        hint: "הסימן של האיבר האמצעי קובע את הסימן בתוך הסוגריים. מאחר והוא שלילי, יהיה זה הפרש בריבוע.",
        solution_steps: [
            { verbal_explanation: "נוציא שורש לקצוות המשוואה הריבועית.", math_expression: "\\sqrt{x^2} = x \\quad , \\quad \\sqrt{49} = 7" },
            { verbal_explanation: "האיבר האמצעי שלילי ותואם לפעמיים המכפלה.", math_expression: "2 \\times x \\times (-7) = -14x" },
            { verbal_explanation: "נרכיב את הסוגריים עם סימן חיסור.", math_expression: "(x - 7)^2" }
        ],
        final_answer: "(x - 7)^2"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "נוסחאות כפל מקוצר",
        question_text: "<div dir='rtl' style='text-align: center;'>פרקו את הביטוי הבא, המכיל מקדם ריבועי שאינו 1:<br>\\( 4x^2 - 9 \\)</div>",
        options: ["(2x - 3)(2x + 3)", "(4x - 3)(4x + 3)", "(2x - 9)(2x + 9)", "(2x - 3)^2"],
        correctAnswer: 0,
        hint: "זהו הפרש ריבועים. הוציאו שורש ריבועי מלא מהאיבר הראשון (גם מהמספר 4 וגם מ-x בריבוע).",
        solution_steps: [
            { verbal_explanation: "נוציא שורש מהאיבר הראשון השלם. שורש של 4 הוא 2.", math_expression: "\\sqrt{4x^2} = 2x" },
            { verbal_explanation: "נוציא שורש מהאיבר השני.", math_expression: "\\sqrt{9} = 3" },
            { verbal_explanation: "נציב את התוצאות בנוסחת הפתיחה של הפרש ריבועים.", math_expression: "(2x - 3)(2x + 3)" }
        ],
        final_answer: "(2x - 3)(2x + 3)"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "נוסחאות כפל מקוצר",
        question_text: "<div dir='rtl' style='text-align: center;'>פשטו את הביטוי המורכב הבא. קודם פתחו את הסוגריים, ורק אז הכפילו ב-2:<br>\\( 2(x - 3)^2 \\)</div>" + svgShortMul,
        options: ["2x^2 - 12x + 18", "2x^2 - 6x + 9", "2x^2 - 18", "4x^2 - 24x + 36"],
        correctAnswer: 0,
        hint: "לפי סדר פעולות חשבון, קודם מעלים בריבוע (בעזרת הנוסחה), שומרים את התוצאה בסוגריים, ורק בסוף מכפילים את כל שלושת האיברים ב-2.",
        solution_steps: [
            { verbal_explanation: "נפתח את הסוגריים המועלים בריבוע לפי נוסחת הכפל המקוצר, ונשמור בתוך סוגריים מגן.", math_expression: "2(x^2 - 6x + 9)" },
            { verbal_explanation: "נכפול כל אחד מהאיברים הפנימיים במקדם 2.", math_expression: "2x^2 - 12x + 18" }
        ],
        final_answer: "2x^2 - 12x + 18"
    },

    // ==========================================================
    // 3. תחום הצבה (10 שאלות)
    // ==========================================================
    {
        topic: "factoring_frac_172",
        subTopic: "תחום הצבה",
        question_text: "<div dir='rtl' style='text-align: center;'>מהו תחום ההצבה של השבר האלגברי הבא?<br>\\( \\dfrac{5}{x - 2} \\)</div>" + svgDomain,
        options: ["x \\neq 2", "x \\neq -2", "x \\neq 0", "x > 2"],
        correctAnswer: 0,
        hint: "במתמטיקה אסור לחלק באפס! מצאו איזה ערך של x יגרום למכנה להיות שווה ל-0, ואמרו ש-x חייב להיות *שונה* ממנו.",
        solution_steps: [
            { verbal_explanation: "תחום ההצבה נקבע על פי הדרישה שהמכנה יהיה שונה מאפס.", math_expression: "x - 2 \\neq 0" },
            { verbal_explanation: "נעביר את המספר אגף כדי לבודד את המשתנה.", math_expression: "x \\neq 2" },
            { verbal_explanation: "זהו התחום בו הפונקציה או השבר מוגדרים.", math_expression: "" }
        ],
        final_answer: "x \\neq 2"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "תחום הצבה",
        question_text: "<div dir='rtl' style='text-align: center;'>עבור אילו ערכי x לא מוגדר השבר הבא?<br>\\( \\dfrac{2x + 1}{x + 7} \\)</div>",
        options: ["x \\neq -7", "x \\neq 7", "x \\neq -0.5", "x > 0"],
        correctAnswer: 0,
        hint: "תחום הצבה תלוי *אך ורק* במכנה. אל תסתכלו כלל על המונה. השוו את המכנה לאפס ופתרו.",
        solution_steps: [
            { verbal_explanation: "נכתוב משוואה בה המכנה אינו שווה לאפס. המונה אינו רלוונטי לתחום ההצבה.", math_expression: "x + 7 \\neq 0" },
            { verbal_explanation: "נעביר את המספר אגף ונקבל את ההגבלה על המשתנה.", math_expression: "x \\neq -7" }
        ],
        final_answer: "x \\neq -7"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "תחום הצבה",
        question_text: "<div dir='rtl' style='text-align: center;'>מהו תחום ההצבה של השבר?<br>\\( \\dfrac{10}{2x - 8} \\)</div>",
        options: ["x \\neq 4", "x \\neq 8", "x \\neq -4", "x \\neq 2"],
        correctAnswer: 0,
        hint: "רשמו \\( 2x - 8 \\neq 0 \\) ופתרו את האי-שוויון כמשוואה רגילה לכל דבר.",
        solution_steps: [
            { verbal_explanation: "נדרוש שהמכנה יהיה שונה מאפס.", math_expression: "2x - 8 \\neq 0" },
            { verbal_explanation: "נעביר אגף.", math_expression: "2x \\neq 8" },
            { verbal_explanation: "נחלק במקדם של איקס.", math_expression: "x \\neq 4" }
        ],
        final_answer: "x \\neq 4"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "תחום הצבה",
        question_text: "<div dir='rtl' style='text-align: center;'>מצאו את תחום ההצבה כאשר המשתנה עומד לבדו במכנה:<br>\\( \\dfrac{x + 3}{x} \\)</div>" + svgDomain,
        options: ["x \\neq 0", "x \\neq -3", "x > 0", "x \\neq 3"],
        correctAnswer: 0,
        hint: "אם במכנה יש רק x, איזה מספר יאפס אותו?",
        solution_steps: [
            { verbal_explanation: "המכנה הוא פשוט x, ולכן נדרוש שהוא לא יהיה אפס באופן ישיר.", math_expression: "x \\neq 0" }
        ],
        final_answer: "x \\neq 0"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "תחום הצבה",
        question_text: "<div dir='rtl' style='text-align: center;'>מהו תחום ההצבה כאשר המכנה הוא משוואה ריבועית (הפרש ריבועים)?<br>\\( \\dfrac{5x}{x^2 - 16} \\)</div>",
        options: ["x \\neq 4 , x \\neq -4", "x \\neq 16", "x \\neq 4", "x \\neq 0"],
        correctAnswer: 0,
        hint: "השוו את המכנה לאפס: \\( x^2 - 16 = 0 \\). הוציאו שורש ריבועי וזכרו שתמיד יש שתי אפשרויות (פלוס ומינוס).",
        solution_steps: [
            { verbal_explanation: "נדרוש מכנה שונה מאפס.", math_expression: "x^2 - 16 \\neq 0" },
            { verbal_explanation: "נעביר את המספר אגף.", math_expression: "x^2 \\neq 16" },
            { verbal_explanation: "נוציא שורש ריבועי. נקבל שני ערכים שיש להימנע מהם.", math_expression: "x \\neq \\pm 4" }
        ],
        final_answer: "x \\neq 4 , x \\neq -4"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "תחום הצבה",
        question_text: "<div dir='rtl' style='text-align: center;'>מצאו את תחום ההצבה על ידי הוצאת גורם משותף במכנה:<br>\\( \\dfrac{x - 2}{x^2 - 5x} \\)</div>",
        options: ["x \\neq 0 , x \\neq 5", "x \\neq 5", "x \\neq 0 , x \\neq -5", "x \\neq 2 , x \\neq 5"],
        correctAnswer: 0,
        hint: "השוו את המכנה לאפס והוציאו x כגורם משותף. תקבלו שתי משוואות קטנות שנותנות שני ערכים אסורים.",
        solution_steps: [
            { verbal_explanation: "נרשום את דרישת המכנה.", math_expression: "x^2 - 5x \\neq 0" },
            { verbal_explanation: "נוציא x כגורם משותף.", math_expression: "x(x - 5) \\neq 0" },
            { verbal_explanation: "נמצא אילו ערכים יאפסו כל אחד מהגורמים, ונדרוש שזה לא יקרה.", math_expression: "x \\neq 0 \\quad , \\quad x - 5 \\neq 0 \\Rightarrow x \\neq 5" }
        ],
        final_answer: "x \\neq 0 , x \\neq 5"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "תחום הצבה",
        question_text: "<div dir='rtl' style='text-align: center;'>מהו תחום ההצבה כאשר המכנה הוא טרינום מורכב?<br>\\( \\dfrac{1}{x^2 - 5x + 6} \\)</div>",
        options: ["x \\neq 2 , x \\neq 3", "x \\neq -2 , x \\neq -3", "x \\neq 6 , x \\neq 1", "x \\neq 5"],
        correctAnswer: 0,
        hint: "פרקו את המכנה לפי טרינום (או נוסחת שורשים). איזה זוג מספרים מכפלתם 6 וסכומם מינוס 5?",
        solution_steps: [
            { verbal_explanation: "נדרוש שהטרינום במכנה יהיה שונה מאפס.", math_expression: "x^2 - 5x + 6 \\neq 0" },
            { verbal_explanation: "נפרק לטרינום (חיפוש מספרים שמכפלתם 6 וסכומם מינוס 5).", math_expression: "(x - 2)(x - 3) \\neq 0" },
            { verbal_explanation: "נחלץ את הערכים המאפסים כל סוגריים ונגדיר אותם כערכים אסורים.", math_expression: "x \\neq 2 \\quad , \\quad x \\neq 3" }
        ],
        final_answer: "x \\neq 2 , x \\neq 3"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "תחום הצבה",
        question_text: "<div dir='rtl' style='text-align: center;'>התקלה נפוצה: מהו תחום ההצבה של השבר הבא שבו המכנה תמיד חיובי?<br>\\( \\dfrac{4x}{x^2 + 4} \\)</div>",
        options: ["כל x (מוגדר לכל מספר ממשי)", "x \\neq 2 , x \\neq -2", "x \\neq -4", "x \\neq 0"],
        correctAnswer: 0,
        hint: "חישבו האם יש מספר כלשהו שנעלה אותו בריבוע, נוסיף לו 4, ונקבל אפס? מכיוון שאיקס בריבוע לעולם אינו שלילי, זה בלתי אפשרי.",
        solution_steps: [
            { verbal_explanation: "ננסה למצוא ערכים מאפסים במכנה.", math_expression: "x^2 + 4 = 0 \\Rightarrow x^2 = -4" },
            { verbal_explanation: "מכיוון שאין מספר ממשי שריבועו הוא מספר שלילי, המכנה לא יתאפס לעולם.", math_expression: "" },
            { verbal_explanation: "על כן, השבר מוגדר תמיד עבור כל ערך של המשתנה.", math_expression: "\\text{All } x" }
        ],
        final_answer: "כל x (מוגדר לכל מספר ממשי)"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "תחום הצבה",
        question_text: "<div dir='rtl' style='text-align: center;'>מהו תחום ההצבה כאשר ישנם שני שברים בתרגיל?<br>\\( \\dfrac{1}{x - 1} + \\dfrac{1}{x - 3} \\)</div>" + svgDomain,
        options: ["x \\neq 1 , x \\neq 3", "x \\neq 4", "x \\neq 2", "x \\neq -1 , x \\neq -3"],
        correctAnswer: 0,
        hint: "עליכם לדרוש ש*אף אחד* מהמכנים לא יתאפס. קבעו דרישה נפרדת לכל מכנה וצרפו אותן יחד באמצעות המילה 'וגם'.",
        solution_steps: [
            { verbal_explanation: "כאשר יש כמה שברים, יש להבטיח שכל מכנה בנפרד אינו מתאפס.", math_expression: "" },
            { verbal_explanation: "דרישה ראשונה מהשבר השמאלי.", math_expression: "x - 1 \\neq 0 \\Rightarrow x \\neq 1" },
            { verbal_explanation: "דרישה שנייה מהשבר הימני.", math_expression: "x - 3 \\neq 0 \\Rightarrow x \\neq 3" },
            { verbal_explanation: "התחום הסופי מורכב מכלל האיסורים הללו יחד.", math_expression: "x \\neq 1 \\quad , \\quad x \\neq 3" }
        ],
        final_answer: "x \\neq 1 , x \\neq 3"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "תחום הצבה",
        question_text: "<div dir='rtl' style='text-align: center;'>שאלה תיאורטית: מדוע אנו בכלל בודקים את 'תחום ההצבה' בשברים אלגבריים?</div>",
        options: ["כדי למנוע חלוקה באפס, שהיא פעולה חסרת משמעות", "כדי לפשט את השבר", "כדי למצוא את המכנה המשותף", "כדי להימנע ממספרים שליליים"],
        correctAnswer: 0,
        hint: "נסו לחלק במחשבון מספר כלשהו ב-0. תקבלו שגיאה מתמטית (Math Error).",
        solution_steps: [
            { verbal_explanation: "במתמטיקה, חלוקה באפס אינה מוגדרת, שכן אין לה תוצאה בעלת משמעות מספרית.", math_expression: "" },
            { verbal_explanation: "תחום הצבה הוא בעצם 'רשימת חוקים' שנועדה להגן עלינו מפני פעולה זו, על ידי מניעת הצבת ערכים שיגרמו למכנה להתאפס.", math_expression: "" }
        ],
        final_answer: "כדי למנוע חלוקה באפס, שהיא פעולה חסרת משמעות"
    },

    // ==========================================================
    // 4. צמצום שברים אלגבריים (10 שאלות)
    // ==========================================================
    {
        topic: "factoring_frac_172",
        subTopic: "צמצום שברים אלגבריים",
        question_text: "<div dir='rtl' style='text-align: center;'>פשטו את השבר האלגברי על ידי הוצאת גורם משותף במונה וצמצום:<br>\\( \\dfrac{3x + 6}{3} \\)</div>" + svgSimplify,
        options: ["x + 2", "x + 6", "3x + 2", "x"],
        correctAnswer: 0,
        hint: "הוציאו את המספר 3 מחוץ לסוגריים במונה, ואז צמצמו אותו עם ה-3 שבמכנה. אסור לצמצם רק חלק מהמונה!",
        solution_steps: [
            { verbal_explanation: "נוציא גורם משותף 3 מהמונה.", math_expression: "3x + 6 = 3(x + 2)" },
            { verbal_explanation: "נכתוב את השבר מחדש עם המונה המפורק.", math_expression: "\\dfrac{3(x + 2)}{3}" },
            { verbal_explanation: "מכיוון שה-3 נמצא כעת בכפל (מחוץ לסוגריים), מותר לנו לצמצם אותו עם המכנה לחלוטין.", math_expression: "x + 2" }
        ],
        final_answer: "x + 2"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "צמצום שברים אלגבריים",
        question_text: "<div dir='rtl' style='text-align: center;'>צמצמו את השבר האלגברי הבא, שבו הגורם המשותף הוא משתנה:<br>\\( \\dfrac{x^2 + 5x}{x} \\)</div>",
        options: ["x + 5", "x^2 + 5", "5x", "x"],
        correctAnswer: 0,
        hint: "הוציאו x כגורם משותף במונה, וצמצמו אותו עם ה-x שבמכנה. זהירות: אי אפשר לצמצם ישר מהחיבור!",
        solution_steps: [
            { verbal_explanation: "נוציא גורם משותף x מתוך המונה.", math_expression: "x^2 + 5x = x(x + 5)" },
            { verbal_explanation: "נרשום מחדש את השבר.", math_expression: "\\dfrac{x(x + 5)}{x}" },
            { verbal_explanation: "נצמצם את המשתנה הבודד x במונה ובמכנה.", math_expression: "x + 5" }
        ],
        final_answer: "x + 5"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "צמצום שברים אלגבריים",
        question_text: "<div dir='rtl' style='text-align: center;'>צמצמו את השבר על ידי הוצאת גורם משותף גם מהמונה וגם מהמכנה:<br>\\( \\dfrac{4x - 8}{2x - 4} \\)</div>",
        options: ["2", "4", "2x - 2", "x - 2"],
        correctAnswer: 0,
        hint: "הוציאו 4 מהמונה, ו-2 מהמכנה. תגלו שהסוגריים זהים לחלוטין, ואפשר לצמצם אותם כגוש אחד.",
        solution_steps: [
            { verbal_explanation: "נפרק את המונה.", math_expression: "4(x - 2)" },
            { verbal_explanation: "נפרק את המכנה.", math_expression: "2(x - 2)" },
            { verbal_explanation: "נרכיב את השבר החדש.", math_expression: "\\dfrac{4(x - 2)}{2(x - 2)}" },
            { verbal_explanation: "הסוגריים (x-2) מצטמצמים בשלמותם. נשארנו עם 4 חלקי 2.", math_expression: "\\dfrac{4}{2} = 2" }
        ],
        final_answer: "2"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "צמצום שברים אלגבריים",
        question_text: "<div dir='rtl' style='text-align: center;'>השתמשו בנוסחת 'הפרש ריבועים' כדי לפרק את המונה ולצמצם את השבר:<br>\\( \\dfrac{x^2 - 25}{x - 5} \\)</div>" + svgSimplify,
        options: ["x + 5", "x - 5", "x - 20", "x^2 - 5"],
        correctAnswer: 0,
        hint: "המונה הוא הפרש של ריבועים: (x פחות 5) כפול (x ועוד 5).",
        solution_steps: [
            { verbal_explanation: "נזהה שהמונה מתאים לנוסחת הפרש ריבועים ונפרק אותו.", math_expression: "x^2 - 25 = (x - 5)(x + 5)" },
            { verbal_explanation: "נציב בשבר הכללי.", math_expression: "\\dfrac{(x - 5)(x + 5)}{x - 5}" },
            { verbal_explanation: "נצמצם את הגורם המשותף לשניהם, שהוא הסוגריים (x-5).", math_expression: "x + 5" }
        ],
        final_answer: "x + 5"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "צמצום שברים אלגבריים",
        question_text: "<div dir='rtl' style='text-align: center;'>צמצמו בעזרת נוסחת הריבוע של הפרש:<br>\\( \\dfrac{x^2 - 10x + 25}{x - 5} \\)</div>",
        options: ["x - 5", "x + 5", "x - 10", "x + 25"],
        correctAnswer: 0,
        hint: "המונה הוא למעשה (x פחות 5) בריבוע. חזקה שנייה אומרת שהסוגריים מופיעים פעמיים כמכפלה. צמצמו פעם אחת עם המכנה.",
        solution_steps: [
            { verbal_explanation: "נזהה שהמונה הוא טרינום מושלם, ונפרק אותו לנוסחת כפל מקוצר.", math_expression: "(x - 5)^2" },
            { verbal_explanation: "הביטוי הריבועי משמעו כפל של הסוגריים בעצמם.", math_expression: "\\dfrac{(x - 5)(x - 5)}{x - 5}" },
            { verbal_explanation: "נצמצם אחד מהסוגריים שבמונה מול המכנה. יישאר רק סוגר אחד במונה.", math_expression: "x - 5" }
        ],
        final_answer: "x - 5"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "צמצום שברים אלגבריים",
        question_text: "<div dir='rtl' style='text-align: center;'>שילוב שיטות: הוציאו גורם משותף תחילה, ואז השתמשו בהפרש ריבועים כדי לצמצם:<br>\\( \\dfrac{2x^2 - 18}{x + 3} \\)</div>",
        options: ["2(x - 3)", "2(x + 3)", "2x - 18", "x - 3"],
        correctAnswer: 0,
        hint: "במונה: קודם הוציאו 2 החוצה. יישאר לכם (x² - 9). פרקו אותו לפי הנוסחה, ורק אז צמצמו.",
        solution_steps: [
            { verbal_explanation: "נוציא את המספר 2 כגורם משותף במונה.", math_expression: "2(x^2 - 9)" },
            { verbal_explanation: "נפרק את הביטוי הריבועי שנותר בסוגריים לפי הפרש ריבועים.", math_expression: "2(x - 3)(x + 3)" },
            { verbal_explanation: "נציב בחזרה בשבר המקורי.", math_expression: "\\dfrac{2(x - 3)(x + 3)}{x + 3}" },
            { verbal_explanation: "נצמצם את הגורם המשותף.", math_expression: "2(x - 3)" }
        ],
        final_answer: "2(x - 3)"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "צמצום שברים אלגבריים",
        question_text: "<div dir='rtl' style='text-align: center;'>טריק הסימן השלילי (מינוס 1): כיצד נצמצם את השבר הבא?<br>\\( \\dfrac{x - 4}{4 - x} \\)</div>",
        options: ["-1", "1", "0", "x - 4"],
        correctAnswer: 0,
        hint: "המונה והמכנה הפוכים בדיוק בסימנים שלהם. הוצאת מינוס מחוץ לסוגריים במכנה, תהפוך אותו לזהה למונה.",
        solution_steps: [
            { verbal_explanation: "נבחין כי האיברים זהים אך בעלי סימנים הפוכים לחלוטין. נוציא סימן מינוס (כלומר 1-) מהמכנה.", math_expression: "4 - x = -(x - 4)" },
            { verbal_explanation: "נרשום מחדש את השבר.", math_expression: "\\dfrac{x - 4}{-(x - 4)}" },
            { verbal_explanation: "הסוגריים זהים ולכן מצטמצמים ל-1. נישאר עם המינוס בחוץ.", math_expression: "\\dfrac{1}{-1} = -1" }
        ],
        final_answer: "-1"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "צמצום שברים אלגבריים",
        question_text: "<div dir='rtl' style='text-align: center;'>פרקו את המונה לפי טרינום מורחב וצמצמו את השבר:<br>\\( \\dfrac{x^2 + 5x + 6}{x + 2} \\)</div>",
        options: ["x + 3", "x + 2", "x - 3", "x^2 + 3"],
        correctAnswer: 0,
        hint: "חפשו שני מספרים שמכפלתם היא 6, וסכומם הוא 5. המספרים הם 2 ו-3. אלו יהיו הסוגריים במונה.",
        solution_steps: [
            { verbal_explanation: "נפרק את המונה לטרינום.", math_expression: "(x + 2)(x + 3)" },
            { verbal_explanation: "נציב את הפירוק בחזרה לשבר המקורי.", math_expression: "\\dfrac{(x + 2)(x + 3)}{x + 2}" },
            { verbal_explanation: "הסוגריים הזהים מצטמצמים זה מול זה.", math_expression: "x + 3" }
        ],
        final_answer: "x + 3"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "צמצום שברים אלגבריים",
        question_text: "<div dir='rtl' style='text-align: center;'>צמצמו את השבר על ידי הוצאת x כגורם משותף גם למעלה וגם למטה:<br>\\( \\dfrac{5x^2 - 10x}{x^2 - 2x} \\)</div>",
        options: ["5", "5x", "x - 2", "10"],
        correctAnswer: 0,
        hint: "הוציאו 5x במונה, והוציאו x במכנה. אז תוכלו לראות שחלק מהסוגריים נעלם, ואז גם ה-x נעלם.",
        solution_steps: [
            { verbal_explanation: "נפרק את המונה על ידי הוצאת הגורם המשותף המקסימלי.", math_expression: "5x(x - 2)" },
            { verbal_explanation: "נפרק את המכנה על ידי הוצאת הגורם המשותף.", math_expression: "x(x - 2)" },
            { verbal_explanation: "נציב חזרה ונצמצם את הסוגריים הזהים (x-2).", math_expression: "\\dfrac{5x}{x}" },
            { verbal_explanation: "כעת נצמצם גם את המשתנה x עצמו.", math_expression: "5" }
        ],
        final_answer: "5"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "צמצום שברים אלגבריים",
        question_text: "<div dir='rtl' style='text-align: center;'>זהירות עם מקדמים בהפרש ריבועים. פשטו את השבר:<br>\\( \\dfrac{9x^2 - 16}{3x + 4} \\)</div>",
        options: ["3x - 4", "3x + 4", "9x - 4", "3x - 16"],
        correctAnswer: 0,
        hint: "המונה הוא הפרש של ריבועים שלמים. שורש של 9x² הוא 3x. שורש של 16 הוא 4.",
        solution_steps: [
            { verbal_explanation: "נפרק את המונה לפי נוסחת הפרש ריבועים, תוך הקפדה על המקדמים.", math_expression: "(3x - 4)(3x + 4)" },
            { verbal_explanation: "נציב בשבר את הביטוי המפורק.", math_expression: "\\dfrac{(3x - 4)(3x + 4)}{3x + 4}" },
            { verbal_explanation: "נצמצם את הביטוי הזהה במונה ובמכנה לחלוטין.", math_expression: "3x - 4" }
        ],
        final_answer: "3x - 4"
    },

    // ==========================================================
    // 5. כפל וחילוק שברים (10 שאלות)
    // ==========================================================
    {
        topic: "factoring_frac_172",
        subTopic: "כפל וחילוק שברים",
        question_text: "<div dir='rtl' style='text-align: center;'>בצעו את פעולת כפל השברים וצמצמו את התוצאה:<br>\\( \\dfrac{x}{2} \\times \\dfrac{4}{x^2} \\)</div>" + svgMulFrac,
        options: ["\\dfrac{2}{x}", "\\dfrac{x}{2}", "\\dfrac{4}{2x}", "\\dfrac{2x}{x^2}"],
        correctAnswer: 0,
        hint: "בכפל שברים כופלים מונה במונה ומכנה במכנה. לאחר מכן צמצמו מספרים עם מספרים (4 חלקי 2) ואותיות עם אותיות (x חלקי איקס בריבוע).",
        solution_steps: [
            { verbal_explanation: "נבצע את פעולת הכפל הישירה בין המונים ובין המכנים.", math_expression: "\\dfrac{x \\times 4}{2 \\times x^2} = \\dfrac{4x}{2x^2}" },
            { verbal_explanation: "נצמצם את המקדמים המספריים. 4 חלקי 2 נותן 2 במונה.", math_expression: "\\dfrac{2x}{x^2}" },
            { verbal_explanation: "נצמצם את המשתנים. x מתבטל מול הריבוע שבמכנה, ולכן נשאר x אחד למטה.", math_expression: "\\dfrac{2}{x}" }
        ],
        final_answer: "\\dfrac{2}{x}"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "כפל וחילוק שברים",
        question_text: "<div dir='rtl' style='text-align: center;'>פרקו לגורמים וצמצמו את מכפלת השברים הבאה:<br>\\( \\dfrac{x - 3}{5} \\times \\dfrac{10}{2x - 6} \\)</div>",
        options: ["1", "2", "\\dfrac{1}{2}", "\\dfrac{x-3}{x-3}"],
        correctAnswer: 0,
        hint: "הוציאו 2 כגורם משותף במכנה הימני. לאחר מכן, תוכלו לצמצם את הסוגריים 'באלכסון', ולצמצם את ה-10 וה-5.",
        solution_steps: [
            { verbal_explanation: "נפרק את המכנה הימני בעזרת הוצאת גורם משותף.", math_expression: "2x - 6 = 2(x - 3)" },
            { verbal_explanation: "נרשום את התרגיל מחדש עם הפירוק.", math_expression: "\\dfrac{x - 3}{5} \\times \\dfrac{10}{2(x - 3)}" },
            { verbal_explanation: "נצמצם את הסוגריים הזהים, המופיעים פעם במונה ופעם במכנה באלכסון.", math_expression: "\\dfrac{1}{5} \\times \\dfrac{10}{2}" },
            { verbal_explanation: "נחשב את המכפלה המספרית הפשוטה שנותרה. עשר חלקי עשר.", math_expression: "\\dfrac{10}{10} = 1" }
        ],
        final_answer: "1"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "כפל וחילוק שברים",
        question_text: "<div dir='rtl' style='text-align: center;'>שלבו נוסחאות כפל מקוצר בכפל שברים. פשטו את התרגיל:<br>\\( \\dfrac{x^2 - 9}{4} \\times \\dfrac{2}{x - 3} \\)</div>",
        options: ["\\dfrac{x + 3}{2}", "\\dfrac{x - 3}{2}", "x + 3", "2(x + 3)"],
        correctAnswer: 0,
        hint: "פרקו את המונה השמאלי לפי הפרש ריבועים. צמצמו באלכסון את ה- (x-3) ואת המספרים.",
        solution_steps: [
            { verbal_explanation: "נפרק את המונה השמאלי לפי נוסחת הפרש ריבועים.", math_expression: "x^2 - 9 = (x - 3)(x + 3)" },
            { verbal_explanation: "נציב מחדש ונצמצם את הגורם המשותף.", math_expression: "\\dfrac{(x - 3)(x + 3)}{4} \\times \\dfrac{2}{x - 3} = \\dfrac{x + 3}{4} \\times \\dfrac{2}{1}" },
            { verbal_explanation: "נצמצם את המספרים באלכסון (2 ו-4 מצטמצמים ל-1 חלקי 2).", math_expression: "\\dfrac{x + 3}{2}" }
        ],
        final_answer: "\\dfrac{x + 3}{2}"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "כפל וחילוק שברים",
        question_text: "<div dir='rtl' style='text-align: center;'>כיצד נפתור חילוק שברים? חשבו:<br>\\( \\dfrac{x}{3} : \\dfrac{x^2}{6} \\)</div>" + svgMulFrac,
        options: ["\\dfrac{2}{x}", "\\dfrac{x}{2}", "\\dfrac{2x}{18}", "2x"],
        correctAnswer: 0,
        hint: "חילוק שבר שקול לכפל בשבר ההופכי שלו. השאירו את השבר הראשון, הפכו את סימן החילוק לכפל, והפכו את השבר השני (מונה ומכנה מתחלפים).",
        solution_steps: [
            { verbal_explanation: "נמיר את פעולת החילוק למכפלה בשבר ההופכי.", math_expression: "\\dfrac{x}{3} \\times \\dfrac{6}{x^2}" },
            { verbal_explanation: "נבצע כפל מונים ומכנים.", math_expression: "\\dfrac{6x}{3x^2}" },
            { verbal_explanation: "נצמצם את המקדם המספרי (6 חלקי 3 שווה 2 למעלה).", math_expression: "\\dfrac{2x}{x^2}" },
            { verbal_explanation: "נצמצם משתנים כדי להגיע לתוצאה הסופית.", math_expression: "\\dfrac{2}{x}" }
        ],
        final_answer: "\\dfrac{2}{x}"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "כפל וחילוק שברים",
        question_text: "<div dir='rtl' style='text-align: center;'>פשטו את תרגיל החילוק הבא לאחר הפיכתו לכפל:<br>\\( \\dfrac{x - 2}{x} : \\dfrac{x - 2}{2x} \\)</div>",
        options: ["2", "\\dfrac{1}{2}", "x - 2", "2x"],
        correctAnswer: 0,
        hint: "הפכו את השבר השני וכפלו. כמעט כל התרגיל יצטמצם באלכסון.",
        solution_steps: [
            { verbal_explanation: "נכתוב את התרגיל מחדש כתרגיל כפל בשבר הופכי.", math_expression: "\\dfrac{x - 2}{x} \\times \\dfrac{2x}{x - 2}" },
            { verbal_explanation: "נצמצם באלכסון את הסוגריים הזהים.", math_expression: "\\dfrac{1}{x} \\times \\dfrac{2x}{1} = \\dfrac{2x}{x}" },
            { verbal_explanation: "נצמצם את המשתנה x ממונה ומכנה.", math_expression: "2" }
        ],
        final_answer: "2"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "כפל וחילוק שברים",
        question_text: "<div dir='rtl' style='text-align: center;'>חילוק שברים בשילוב פירוק לגורמים מתקדם. מה התוצאה?<br>\\( \\dfrac{x^2 - 16}{x + 1} : \\dfrac{x + 4}{2x + 2} \\)</div>",
        options: ["2(x - 4)", "\\dfrac{x - 4}{2}", "2(x + 4)", "\\dfrac{x + 4}{x + 1}"],
        correctAnswer: 0,
        hint: "עשו שני דברים בו זמנית: הפכו את השבר השני לצורת כפל, ופרקו את כל המונים והמכנים שאפשר (הפרש ריבועים וגורם משותף).",
        solution_steps: [
            { verbal_explanation: "נהפוך את השבר השני לפעולת כפל ונרשום את התרגיל.", math_expression: "\\dfrac{x^2 - 16}{x + 1} \\times \\dfrac{2x + 2}{x + 4}" },
            { verbal_explanation: "נפרק את המונים (הפרש ריבועים בשמאלי, גורם משותף בימני).", math_expression: "\\dfrac{(x - 4)(x + 4)}{x + 1} \\times \\dfrac{2(x + 1)}{x + 4}" },
            { verbal_explanation: "נבצע צמצומים באלכסון של כל הסוגריים המשותפים.", math_expression: "\\dfrac{(x - 4)}{1} \\times \\dfrac{2}{1}" },
            { verbal_explanation: "נאחד את הביטויים שנותרו במונה לתוצאה אחת.", math_expression: "2(x - 4)" }
        ],
        final_answer: "2(x - 4)"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "כפל וחילוק שברים",
        question_text: "<div dir='rtl' style='text-align: center;'>זהו תרגיל כפל משולש. פשטו אותו:<br>\\( \\dfrac{x}{y} \\times \\dfrac{y}{z} \\times \\dfrac{z}{x} \\)</div>",
        options: ["1", "xyz", "\\dfrac{1}{xyz}", "0"],
        correctAnswer: 0,
        hint: "אין צורך לחשב הרבה. הביטו בתרגיל - כל מונה מופיע גם כמכנה בשבר אחר. מה קורה כשמצמצמים הכל?",
        solution_steps: [
            { verbal_explanation: "נכתוב את מכפלת כל המונים חלקי מכפלת כל המכנים.", math_expression: "\\dfrac{x \\times y \\times z}{y \\times z \\times x}" },
            { verbal_explanation: "נסדר את המכנה בסדר אלפביתי כדי לראות את הדמיון בבירור.", math_expression: "\\dfrac{xyz}{xyz}" },
            { verbal_explanation: "מספר חלקי עצמו (שאינו אפס) שווה תמיד לאחד.", math_expression: "1" }
        ],
        final_answer: "1"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "כפל וחילוק שברים",
        question_text: "<div dir='rtl' style='text-align: center;'>פשטו את תרגיל הכפל בעזרת פירוק הטרינום:<br>\\( \\dfrac{x^2 - 4x + 3}{x - 1} \\times \\dfrac{2}{x - 3} \\)</div>",
        options: ["2", "x - 3", "x - 1", "\\dfrac{2}{x - 1}"],
        correctAnswer: 0,
        hint: "פרקו את הטרינום (מצאו שני מספרים שמכפלתם 3 וסכומם 4-). הכל אמור להצטמצם חוץ מהמספר 2.",
        solution_steps: [
            { verbal_explanation: "נפרק את המונה השמאלי לפי טרינום (מספרים: 1- ו- 3-).", math_expression: "(x - 1)(x - 3)" },
            { verbal_explanation: "נכתוב את התרגיל עם הביטוי המפורק.", math_expression: "\\dfrac{(x - 1)(x - 3)}{x - 1} \\times \\dfrac{2}{x - 3}" },
            { verbal_explanation: "נצמצם את (x-1) בתוך השבר הראשון.", math_expression: "(x - 3) \\times \\dfrac{2}{x - 3}" },
            { verbal_explanation: "נצמצם את הסוגריים האחרונים באלכסון, ונישאר עם הפתרון המלא.", math_expression: "2" }
        ],
        final_answer: "2"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "כפל וחילוק שברים",
        question_text: "<div dir='rtl' style='text-align: center;'>טריק הסימן השלילי בחילוק שברים. חשבו ופשטו:<br>\\( \\dfrac{a - b}{x} : \\dfrac{b - a}{x^2} \\)</div>",
        options: ["-x", "x", "-1", "a - b"],
        correctAnswer: 0,
        hint: "קודם כל, הפכו את השבר השני לצורת כפל. לאחר מכן, הוציאו גורם משותף של 1- מתוך (b-a) כדי שיהפוך ל-(a-b) ויצטמצם.",
        solution_steps: [
            { verbal_explanation: "נהפוך את החילוק לכפל בשבר ההופכי.", math_expression: "\\dfrac{a - b}{x} \\times \\dfrac{x^2}{b - a}" },
            { verbal_explanation: "נוציא מינוס מחוץ לסוגריים במכנה הימני כדי להשוות למונה השמאלי.", math_expression: "b - a = -(a - b)" },
            { verbal_explanation: "נרשום מחדש עם השינויים ונצמצם את הסוגריים.", math_expression: "\\dfrac{a - b}{x} \\times \\dfrac{x^2}{-(a - b)} = \\dfrac{1}{x} \\times \\dfrac{x^2}{-1}" },
            { verbal_explanation: "נצמצם את החזקות של x ואת התוצאה נחלק במינוס אחד.", math_expression: "\\dfrac{x}{-1} = -x" }
        ],
        final_answer: "-x"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "כפל וחילוק שברים",
        question_text: "<div dir='rtl' style='text-align: center;'>הבנה תיאורטית: מהו הכלל הבסיסי המאפשר לנו לפתור תרגילי חילוק שברים?</div>",
        options: ["כפל במספר ההופכי", "כפל במספר הנגדי", "מציאת מכנה משותף", "הוצאת שורש ריבועי"],
        correctAnswer: 0,
        hint: "חילוק הוא פעולה הפוכה לכפל. לכן, לחלק במשהו, זה בדיוק כמו לכפול ב...?",
        solution_steps: [
            { verbal_explanation: "חילוק מוגדר כהכפלה של המספר או השבר הראשון, בשבר ההופכי (הפיכת המונה והמכנה) של השבר השני.", math_expression: "\\dfrac{A}{B} : \\dfrac{C}{D} = \\dfrac{A}{B} \\times \\dfrac{D}{C}" }
        ],
        final_answer: "כפל במספר ההופכי"
    },

    // ==========================================================
    // 6. חיבור וחיסור שברים (10 שאלות)
    // ==========================================================
    {
        topic: "factoring_frac_172",
        subTopic: "חיבור וחיסור שברים",
        question_text: "<div dir='rtl' style='text-align: center;'>חברו את שני השברים הבאים בעלי המכנה הזהה:<br>\\( \\dfrac{x + 2}{5} + \\dfrac{x - 2}{5} \\)</div>" + svgAddFrac,
        options: ["\\dfrac{2x}{5}", "\\dfrac{2x}{10}", "\\dfrac{x}{5}", "\\dfrac{4}{5}"],
        correctAnswer: 0,
        hint: "כאשר המכנה משותף, פשוט מחברים את המונים ומעתיקים את המכנה כפי שהוא. אין צורך לחבר מכנים!",
        solution_steps: [
            { verbal_explanation: "מאחר והמכנים זהים, נאחד את השברים לשבר אחד ונחבר את המונים.", math_expression: "\\dfrac{(x + 2) + (x - 2)}{5}" },
            { verbal_explanation: "נכנס איברים דומים במונה. המספרים 2 ומינוס 2 מאפסים זה את זה.", math_expression: "x + x = 2x" },
            { verbal_explanation: "נרשום את השבר הסופי.", math_expression: "\\dfrac{2x}{5}" }
        ],
        final_answer: "\\dfrac{2x}{5}"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "חיבור וחיסור שברים",
        question_text: "<div dir='rtl' style='text-align: center;'>חיסור שברים עם מכנה זהה - היזהרו מהמינוס!<br>\\( \\dfrac{3x + 4}{x} - \\dfrac{x + 4}{x} \\)</div>",
        options: ["2", "2x", "\\dfrac{2x + 8}{x}", "\\dfrac{4x}{x}"],
        correctAnswer: 0,
        hint: "סימן המינוס שלפני השבר השני שייך לכל המונה שלו! הניחו את המונה השני בתוך סוגריים לפני שתבצעו חיסור.",
        solution_steps: [
            { verbal_explanation: "נאחד לשבר אחד, ונעטוף את המונה השני בסוגריים בגלל המינוס לפניו.", math_expression: "\\dfrac{3x + 4 - (x + 4)}{x}" },
            { verbal_explanation: "נפתח את הסוגריים על ידי הפיכת הסימנים.", math_expression: "\\dfrac{3x + 4 - x - 4}{x}" },
            { verbal_explanation: "נכנס איברים במונה (המספר 4 מתבטל).", math_expression: "\\dfrac{2x}{x}" },
            { verbal_explanation: "נצמצם את ה-x מהמונה ומהמכנה ונשאר עם התשובה.", math_expression: "2" }
        ],
        final_answer: "2"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "חיבור וחיסור שברים",
        question_text: "<div dir='rtl' style='text-align: center;'>חיבור שברים עם מכנים מספריים שונים:<br>\\( \\dfrac{x}{2} + \\dfrac{x}{3} \\)</div>" + svgAddFrac,
        options: ["\\dfrac{5x}{6}", "\\dfrac{2x}{5}", "\\dfrac{x^2}{6}", "x"],
        correctAnswer: 0,
        hint: "מצאו מכנה משותף (6). הרחיבו את השבר הראשון פי 3 ואת השבר השני פי 2, ואז חברו.",
        solution_steps: [
            { verbal_explanation: "המכנה המשותף ל-2 ול-3 הוא 6. נרחיב כל שבר בהתאם.", math_expression: "\\dfrac{3x}{6} + \\dfrac{2x}{6}" },
            { verbal_explanation: "כעת שהמכנים שווים, נאחד ונחבר מונים.", math_expression: "\\dfrac{3x + 2x}{6}" },
            { verbal_explanation: "התוצאה הסופית המכונסת.", math_expression: "\\dfrac{5x}{6}" }
        ],
        final_answer: "\\dfrac{5x}{6}"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "חיבור וחיסור שברים",
        question_text: "<div dir='rtl' style='text-align: center;'>חיבור שברים עם משתנים במכנה:<br>\\( \\dfrac{2}{x} + \\dfrac{3}{2x} \\)</div>",
        options: ["\\dfrac{7}{2x}", "\\dfrac{5}{3x}", "\\dfrac{5}{2x^2}", "\\dfrac{7}{x}"],
        correctAnswer: 0,
        hint: "המכנה המשותף הוא 2x. השבר הראשון זקוק להרחבה פי 2 בלבד. השבר השני נשאר כפי שהוא.",
        solution_steps: [
            { verbal_explanation: "נרחיב את השבר השמאלי פי 2 כדי שהמכנה שלו יהיה שווה למכנה הימני.", math_expression: "\\dfrac{2 \\times 2}{2x} = \\dfrac{4}{2x}" },
            { verbal_explanation: "נכתוב את התרגיל מחדש עם מכנים זהים.", math_expression: "\\dfrac{4}{2x} + \\dfrac{3}{2x}" },
            { verbal_explanation: "נחבר את המונים.", math_expression: "\\dfrac{7}{2x}" }
        ],
        final_answer: "\\dfrac{7}{2x}"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "חיבור וחיסור שברים",
        question_text: "<div dir='rtl' style='text-align: center;'>שובירות המינוס - חיסור שברים בעלי מכנה זהה של x:<br>\\( \\dfrac{5}{x} - \\dfrac{x - 1}{x} \\)</div>",
        options: ["\\dfrac{6 - x}{x}", "\\dfrac{4 - x}{x}", "\\dfrac{6 - 2x}{x}", "\\dfrac{5 - x}{x}"],
        correctAnswer: 0,
        hint: "שימו לב: המינוס מופעל גם על x וגם על ה-(1-). לכן, 1- יהפוך לפלוס 1.",
        solution_steps: [
            { verbal_explanation: "נאחד את השברים ונעטוף את מונה השבר המחוסר בסוגריים.", math_expression: "\\dfrac{5 - (x - 1)}{x}" },
            { verbal_explanation: "נפתח את הסוגריים על ידי הפיכת סימנים למשתנים שבפנים.", math_expression: "\\dfrac{5 - x + 1}{x}" },
            { verbal_explanation: "נכנס איברים מספריים דומים.", math_expression: "\\dfrac{6 - x}{x}" }
        ],
        final_answer: "\\dfrac{6 - x}{x}"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "חיבור וחיסור שברים",
        question_text: "<div dir='rtl' style='text-align: center;'>מציאת מכנה משותף מינימלי בחיסור שברים עם ביטויים מספריים:<br>\\( \\dfrac{x - 1}{4} - \\dfrac{x + 2}{6} \\)</div>",
        options: ["\\dfrac{x - 7}{12}", "\\dfrac{x - 11}{12}", "\\dfrac{-x - 5}{12}", "\\dfrac{2x - 5}{24}"],
        correctAnswer: 0,
        hint: "המכנה המשותף המינימלי ל-4 ו-6 הוא 12. הרחיבו את השבר הראשון ב-3, ואת השני ב-2. אל תשכחו את סוגרי המינוס לשבר השני.",
        solution_steps: [
            { verbal_explanation: "נרחיב את השברים למכנה משותף של 12, ונאחד את המונה תחתיו.", math_expression: "\\dfrac{3(x - 1) - 2(x + 2)}{12}" },
            { verbal_explanation: "נפתח סוגריים במונה.", math_expression: "\\dfrac{3x - 3 - 2x - 4}{12}" },
            { verbal_explanation: "נכנס איברים דומים.", math_expression: "\\dfrac{x - 7}{12}" }
        ],
        final_answer: "\\dfrac{x - 7}{12}"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "חיבור וחיסור שברים",
        question_text: "<div dir='rtl' style='text-align: center;'>חיבור שברים עם מכנים אלגבריים שונים לחלוטין:<br>\\( \\dfrac{3}{x} + \\dfrac{2}{x - 1} \\)</div>",
        options: ["\\dfrac{5x - 3}{x(x - 1)}", "\\dfrac{5}{2x - 1}", "\\dfrac{5x - 1}{x(x - 1)}", "\\dfrac{5x + 3}{x(x - 1)}"],
        correctAnswer: 0,
        hint: "המכנה המשותף הוא מכפלתם: x(x-1). הרחיבו את הראשון ב-(x-1) ואת השני ב-x.",
        solution_steps: [
            { verbal_explanation: "נרחיב כל מונה במכנה של השבר הנגדי כדי ליצור מכנה משותף אחיד.", math_expression: "\\dfrac{3(x - 1)}{x(x - 1)} + \\dfrac{2x}{x(x - 1)}" },
            { verbal_explanation: "נפתח סוגריים ונקבץ את המונים.", math_expression: "\\dfrac{3x - 3 + 2x}{x(x - 1)}" },
            { verbal_explanation: "נכנס איברים דומים במונה לקבלת השבר הסופי.", math_expression: "\\dfrac{5x - 3}{x(x - 1)}" }
        ],
        final_answer: "\\dfrac{5x - 3}{x(x - 1)}"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "חיבור וחיסור שברים",
        question_text: "<div dir='rtl' style='text-align: center;'>כיצד נחסר מספר שלם מתוך שבר אלגברי?<br>\\( \\dfrac{x + 5}{x} - 1 \\)</div>",
        options: ["\\dfrac{5}{x}", "\\dfrac{x + 4}{x}", "\\dfrac{4}{x}", "5"],
        correctAnswer: 0,
        hint: "הפכו את המספר השלם 1 לשבר (1 חלקי 1), ואז הרחיבו אותו למכנה המשותף שהוא x (כלומר x חלקי x).",
        solution_steps: [
            { verbal_explanation: "נמיר את המספר 1 לשבר בעל מכנה x, הזהה לערכו המקורי.", math_expression: "1 = \\dfrac{x}{x}" },
            { verbal_explanation: "נציב בתרגיל במקום המספר 1.", math_expression: "\\dfrac{x + 5}{x} - \\dfrac{x}{x}" },
            { verbal_explanation: "נאחד את השברים ונחסר את המונים.", math_expression: "\\dfrac{x + 5 - x}{x}" },
            { verbal_explanation: "איקס פחות איקס מתאפס, ונותרנו עם התשובה.", math_expression: "\\dfrac{5}{x}" }
        ],
        final_answer: "\\dfrac{5}{x}"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "חיבור וחיסור שברים",
        question_text: "<div dir='rtl' style='text-align: center;'>מציאת מכנה משותף חכם על ידי פירוק לגורמים מראש:<br>\\( \\dfrac{1}{x^2 - x} + \\dfrac{2}{x} \\)</div>",
        options: ["\\dfrac{2x - 1}{x(x - 1)}", "\\dfrac{3}{x^2}", "\\dfrac{2x + 1}{x(x - 1)}", "\\dfrac{3x - 1}{x^2 - x}"],
        correctAnswer: 0,
        hint: "פרקו את המכנה השמאלי ל- x(x-1). המכנה המשותף יהיה זה! הרחיבו רק את השבר הימני ב- (x-1).",
        solution_steps: [
            { verbal_explanation: "נוציא גורם משותף במכנה של השבר השמאלי.", math_expression: "\\dfrac{1}{x(x - 1)}" },
            { verbal_explanation: "מכאן ניתן לראות שהשבר הימני, בעל המכנה x, זקוק רק להרחבה בביטוי (x-1).", math_expression: "\\dfrac{2(x - 1)}{x(x - 1)}" },
            { verbal_explanation: "נאחד שברים, נפתח סוגריים ונקבץ.", math_expression: "\\dfrac{1 + 2x - 2}{x(x - 1)}" },
            { verbal_explanation: "נכנס את המספרים החופשיים ונקבל את התוצאה הסופית.", math_expression: "\\dfrac{2x - 1}{x(x - 1)}" }
        ],
        final_answer: "\\dfrac{2x - 1}{x(x - 1)}"
    },
    {
        topic: "factoring_frac_172",
        subTopic: "חיבור וחיסור שברים",
        question_text: "<div dir='rtl' style='text-align: center;'>שאלת אתגר: חסרו שני שברים פשוטים בעלי מכנה זהה והביאו את התוצאה לצורתה המפושטת ביותר:<br>\\( \\dfrac{x}{x - 2} - \\dfrac{2}{x - 2} \\)</div>",
        options: ["1", "\\dfrac{x - 2}{x + 2}", "0", "-1"],
        correctAnswer: 0,
        hint: "חברו מונים כי המכנה כבר משותף. תסתכלו טוב על התוצאה, משהו מעניין קורה כשמחלקים ביטוי בעצמו.",
        solution_steps: [
            { verbal_explanation: "המכנים זהים, אז פשוט נחסר את המונה הימני מהשמאלי ונאחד.", math_expression: "\\dfrac{x - 2}{x - 2}" },
            { verbal_explanation: "המונה והמכנה כעת שווים לחלוטין זה לזה.", math_expression: "" },
            { verbal_explanation: "חלוקה של כל ביטוי בעצמו (בתנאי שאינו אפס) תמיד תניב תוצאה של אחד.", math_expression: "1" }
        ],
        final_answer: "1"
    }

];