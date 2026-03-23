const questionsDB = [
    // ==========================================
    // תת נושא 1: גזירה של פונקציות המכילות שורש בתוך מכנה (10 שאלות)
    // ==========================================

    {
        topic: "calculus_root_571",
        subTopic: "גזירה של פונקציות המכילות שורש בתוך מכנה",
        question_text: "גזרו את הפונקציה הבאה והביאו אותה לצורה הפשוטה ביותר: \\( f(x) = \\dfrac{1}{\\sqrt{2x - 4}} \\).&rlm;",
        options: ["-1 : ((2x - 4)√(2x - 4))", "1 : ((2x - 4)√(2x - 4))", "-2 : √(2x - 4)", "-1 : (2x - 4)²"],
        correctAnswer: 0,
        hint: "המירו את הפונקציה לחזקה עשרונית שלילית (מינוס חצי) במונה ואז גזרו בעזרת כלל השרשרת (הכפלה גם בנגזרת הפנימית).",
        solution_steps: [
            { verbal_explanation: "המרת כתיב השורש במכנה לחזקה מעריכית שלילית במונה לשם נוחות מרבית בגזירה.", math_expression: "f(x) = (2x - 4)^{-0.5}" },
            { verbal_explanation: "הורדת מעריך החזקה כמקדם והפחתת ערכו באחת, תוך החלת כלל השרשרת.", math_expression: "f'(x) = -0.5(2x - 4)^{-1.5} \\times 2" },
            { verbal_explanation: "הכפלת המקדמים המספריים זה בזה.", math_expression: "f'(x) = -1(2x - 4)^{-1.5}" },
            { verbal_explanation: "הורדת החזקה השלילית בחזרה למכנה להשגת מעריך חיובי.", math_expression: "f'(x) = \\dfrac{-1}{(2x - 4)^{1.5}}" },
            { verbal_explanation: "פירוק החזקה (אחת וחצי) לכפל של שלם ושורש לקבלת המבנה הסופי התקני.", math_expression: "f'(x) = \\dfrac{-1}{(2x - 4)\\sqrt{2x - 4}}" }
        ],
        final_answer: "-1 : ((2x - 4)√(2x - 4))"
    },
    {
        topic: "calculus_root_571",
        subTopic: "גזירה של פונקציות המכילות שורש בתוך מכנה",
        question_text: "גזרו את פונקציית המנה הבאה המשלבת פולינום ושורש במכנה: \\( f(x) = \\dfrac{x}{\\sqrt{x^{2} + 1}} \\).&rlm;",
        options: ["1 : ((x² + 1)√(x² + 1))", "-1 : ((x² + 1)√(x² + 1))", "x : ((x² + 1)√(x² + 1))", "1 : √(x² + 1)"],
        correctAnswer: 0,
        hint: "השתמשו בכלל המנה. נגזרת המכנה דורשת שימוש בכלל השרשרת. בצעו מכנה משותף בתוך המונה כדי לפשט את השבר המורכב שייווצר.",
        solution_steps: [
            { verbal_explanation: "גזירת פונקציית המונה הליניארית הפשוטה.", math_expression: "u' = 1" },
            { verbal_explanation: "גזירת פונקציית המכנה הכוללת שורש ונגזרת פנימית.", math_expression: "v' = \\dfrac{2x}{2\\sqrt{x^{2} + 1}} = \\dfrac{x}{\\sqrt{x^{2} + 1}}" },
            { verbal_explanation: "הרכבת תבנית כלל המנה המלאה.", math_expression: "f'(x) = \\dfrac{1 \\times \\sqrt{x^{2} + 1} - x \\times \\dfrac{x}{\\sqrt{x^{2} + 1}}}{(\\sqrt{x^{2} + 1})^{2}}" },
            { verbal_explanation: "ביצוע מכנה משותף פנימי בתוך המונה המורכב.", math_expression: "f'(x) = \\dfrac{\\dfrac{x^{2} + 1 - x^{2}}{\\sqrt{x^{2} + 1}}}{x^{2} + 1}" },
            { verbal_explanation: "צמצום המונה העליון למספר שלם.", math_expression: "f'(x) = \\dfrac{\\dfrac{1}{\\sqrt{x^{2} + 1}}}{x^{2} + 1}" },
            { verbal_explanation: "הורדת המכנה הפנימי מטה על פי חוקי שברים ליצירת תשובה סופית.", math_expression: "f'(x) = \\dfrac{1}{(x^{2} + 1)\\sqrt{x^{2} + 1}}" }
        ],
        final_answer: "1 : ((x² + 1)√(x² + 1))"
    },
    {
        topic: "calculus_root_571",
        subTopic: "גזירה של פונקציות המכילות שורש בתוך מכנה",
        question_text: "מצאו את ערך הנגזרת של הפונקציה \\( f(x) = \\dfrac{4}{\\sqrt{x^{2} - 3x}} \\) בנקודה שבה \\( x = 4 \\).&rlm;",
        options: ["-1.25", "1.25", "-2.5", "0"],
        correctAnswer: 0,
        hint: "המירו את המכנה לחזקה שלילית (מינוס חצי). גזרו והציבו x=4 בזהירות בתוך השורש ובנגזרת הפנימית.",
        solution_steps: [
            { verbal_explanation: "המרת הפונקציה לתצורת חזקה נוחה לגזירה ללא שבר.", math_expression: "f(x) = 4(x^{2} - 3x)^{-0.5}" },
            { verbal_explanation: "גזירת הפונקציה תוך הורדת המעריך והכפלה בנגזרת הפנימית של הפולינום.", math_expression: "f'(x) = 4 \\times (-0.5)(x^{2} - 3x)^{-1.5} \\times (2x - 3)" },
            { verbal_explanation: "כינוס המקדמים ליצירת פונקציית נגזרת מסודרת.", math_expression: "f'(x) = \\dfrac{-2(2x - 3)}{(x^{2} - 3x)^{1.5}}" },
            { verbal_explanation: "הצבת הערך המספרי הנדרש אל תוך הנגזרת.", math_expression: "f'(4) = \\dfrac{-2(2(4) - 3)}{(4^{2} - 3(4))^{1.5}}" },
            { verbal_explanation: "ביצוע פעולות חשבון בסיסיות במונה ובבסיס החזקה במכנה.", math_expression: "f'(4) = \\dfrac{-2(5)}{(16 - 12)^{1.5}} = \\dfrac{-10}{4^{1.5}}" },
            { verbal_explanation: "חישוב המכנה לקבלת התשובה (שורש ארבע שווה שתיים, בחזקת שלוש שווה שמונה).", math_expression: "f'(4) = \\dfrac{-10}{8} = -1.25" }
        ],
        final_answer: "-1.25"
    },
    {
        topic: "calculus_root_571",
        subTopic: "גזירה של פונקציות המכילות שורש בתוך מכנה",
        question_text: "גזרו את הפונקציה המורכבת: \\( f(x) = \\dfrac{x^{2}}{\\sqrt{x - 1}} \\).&rlm;",
        options: ["(3x² - 4x) : (2(x - 1)√(x - 1))", "(x² - 2x) : ((x - 1)√(x - 1))", "(1.5x² - x) : √(x - 1)", "(1.5x² - 2x) : ((x - 1)√(x - 1))"],
        correctAnswer: 0,
        hint: "השתמשו בכלל המנה, בצעו מכנה משותף פנימי בתוך המונה, ופשטו את הפולינום העליון.",
        solution_steps: [
            { verbal_explanation: "הכנת נגזרת המונה לחוק המנה.", math_expression: "u' = 2x" },
            { verbal_explanation: "הכנת נגזרת המכנה לחוק המנה.", math_expression: "v' = \\dfrac{1}{2\\sqrt{x - 1}}" },
            { verbal_explanation: "הצבה בנוסחת נגזרת של מנה.", math_expression: "f'(x) = \\dfrac{2x\\sqrt{x - 1} - x^{2} \\times \\dfrac{1}{2\\sqrt{x - 1}}}{(\\sqrt{x - 1})^{2}}" },
            { verbal_explanation: "יצירת מכנה משותף במונה העליון.", math_expression: "f'(x) = \\dfrac{\\dfrac{4x(x - 1) - x^{2}}{2\\sqrt{x - 1}}}{x - 1}" },
            { verbal_explanation: "פתיחת סוגריים וכינוס איברים במונה הראשי.", math_expression: "4x^{2} - 4x - x^{2} = 3x^{2} - 4x" },
            { verbal_explanation: "סידור קומות השבר לצורה סופית אחת נעימה לעין.", math_expression: "f'(x) = \\dfrac{3x^{2} - 4x}{2(x - 1)\\sqrt{x - 1}}" }
        ],
        final_answer: "(3x² - 4x) : (2(x - 1)√(x - 1))"
    },
    {
        topic: "calculus_root_571",
        subTopic: "גזירה של פונקציות המכילות שורש בתוך מכנה",
        question_text: "נתונה הפונקציה \\( f(x) = \\dfrac{3}{\\sqrt{ax^{2} + 4}} \\). ידוע כי שיפוע המשיק לפונקציה בנקודה \\( x = 1 \\) שווה ל- \\( -5 : 9 \\). מצאו את הערך החיובי של הפרמטר a.&rlm;",
        options: ["5", "3", "4", "2"],
        correctAnswer: 0,
        hint: "גזרו את הפונקציה (הפכו לחזקת מינוס חצי). הציבו x=1 בנגזרת, השוו לשיפוע הנתון והציבו את התשובות האפשריות לאימות מהיר.",
        solution_steps: [
            { verbal_explanation: "המרת השורש לחזקה שלילית להקלת הגזירה.", math_expression: "f(x) = 3(ax^{2} + 4)^{-0.5}" },
            { verbal_explanation: "גזירה מלאה הכוללת את כלל השרשרת ונגזרת פנימית.", math_expression: "f'(x) = 3 \\times (-0.5)(ax^{2} + 4)^{-1.5} \\times 2ax = \\dfrac{-3ax}{(ax^{2} + 4)^{1.5}}" },
            { verbal_explanation: "הצבת נקודת ההשקה במשוואת השיפוע.", math_expression: "f'(1) = \\dfrac{-3a}{(a + 4)^{1.5}}" },
            { verbal_explanation: "השוואה לשיפוע הנתון בתרגיל.", math_expression: "\\dfrac{-3a}{(a + 4)^{1.5}} = -\\dfrac{5}{9}" },
            { verbal_explanation: "הצבת הערך החשוד מחלופות התשובה לחישוב ובדיקה מהירה של השוויון.", math_expression: "\\dfrac{-15}{(5 + 4)^{1.5}} = \\dfrac{-15}{9^{1.5}} = \\dfrac{-15}{27}" },
            { verbal_explanation: "צמצום השבר מאשש את השוויון ואת ערך הפרמטר.", math_expression: "a = 5" }
        ],
        final_answer: "5"
    },
    {
        topic: "calculus_root_571",
        subTopic: "גזירה של פונקציות המכילות שורש בתוך מכנה",
        question_text: "באיזו נקודה הנגזרת של הפונקציה \\( f(x) = \\dfrac{x + 2}{\\sqrt{x}} \\) מתאפסת?&rlm;",
        options: ["x = 2", "x = 4", "x = 1", "אין נקודת התאפסות"],
        correctAnswer: 0,
        hint: "פצלו את השבר לשני שברים נפרדים להקלת הגזירה, גזרו על פי חוקי חזקות והשוו את הנגזרת לאפס.",
        solution_steps: [
            { verbal_explanation: "פיצול הפונקציה לשני איברים נפרדים כדי להימנע מגזירת מנה מורכבת.", math_expression: "f(x) = \\dfrac{x}{\\sqrt{x}} + \\dfrac{2}{\\sqrt{x}} = x^{0.5} + 2x^{-0.5}" },
            { verbal_explanation: "גזירת שני האיברים על פי חוקי חזקות רגילים.", math_expression: "f'(x) = 0.5x^{-0.5} - 1x^{-1.5}" },
            { verbal_explanation: "סידור הנגזרת והמרתה חזרה לשברים.", math_expression: "f'(x) = \\dfrac{1}{2\\sqrt{x}} - \\dfrac{1}{x\\sqrt{x}}" },
            { verbal_explanation: "השוואה לאפס והעברת אגפים של הביטוי השלילי.", math_expression: "\\dfrac{1}{2\\sqrt{x}} = \\dfrac{1}{x\\sqrt{x}}" },
            { verbal_explanation: "הכפלת שני הצדדים במכנה המשותף כדי לבודד את המשתנה.", math_expression: "x\\sqrt{x} = 2\\sqrt{x} \\Rightarrow x = 2" }
        ],
        final_answer: "x = 2"
    },
    {
        topic: "calculus_root_571",
        subTopic: "גזירה של פונקציות המכילות שורש בתוך מכנה",
        question_text: "מהי פונקציית הנגזרת של \\( f(x) = \\dfrac{1}{\\sqrt[3]{x^{2} - 1}} \\)? (שימו לב, שורש שלישי).&rlm;",
        options: ["-2x : (3(x² - 1)^(4:3))", "-2x : (3(x² - 1)^(2:3))", "2x : (3(x² - 1)^(4:3))", "-x : (3(x² - 1)^(4:3))"],
        correctAnswer: 0,
        hint: "כתבו את הפונקציה כחזקה שלילית ושברית: הביטוי בחזקת (מינוס שליש). גזרו והכפילו בנגזרת הפנימית.",
        solution_steps: [
            { verbal_explanation: "המרת שורש מסדר שלישי המצוי במכנה לחזקה רציונלית שלילית לשם גזירה.", math_expression: "f(x) = (x^{2} - 1)^{-1/3}" },
            { verbal_explanation: "הורדת המעריך, חיסור אחת ממנו והכפלה בנגזרת התוכן הפנימי.", math_expression: "f'(x) = -\\dfrac{1}{3}(x^{2} - 1)^{-4/3} \\times 2x" },
            { verbal_explanation: "כינוס המקדמים הליניאריים ליצירת מונה משותף.", math_expression: "f'(x) = \\dfrac{-2x}{3}(x^{2} - 1)^{-4/3}" },
            { verbal_explanation: "הורדת החזקה חזרה אל המכנה ליצירת שבר חיובי קריא ותקני.", math_expression: "f'(x) = \\dfrac{-2x}{3(x^{2} - 1)^{4/3}}" }
        ],
        final_answer: "-2x : (3(x² - 1)^(4:3))"
    },
    {
        topic: "calculus_root_571",
        subTopic: "גזירה של פונקציות המכילות שורש בתוך מכנה",
        question_text: "מצאו את השיפוע של המשיק לפונקציה \\( f(x) = \\dfrac{\\sqrt{x + 3}}{x - 1} \\) בנקודה \\( x = 1 \\).&rlm;",
        options: ["לא קיים (אסימפטוטה)", "-0.75", "1.25", "0"],
        correctAnswer: 0,
        hint: "האם הנקודה נמצאת בתחום ההגדרה של הפונקציה? חסכו את הגזירה ובדקו את המכנה.",
        solution_steps: [
            { verbal_explanation: "בחינת תחום ההגדרה של הפונקציה בטרם תחילת פעולת הגזירה האלגברית.", math_expression: "x - 1 \\neq 0 \\Rightarrow x \\neq 1" },
            { verbal_explanation: "זיהוי העובדה שהנקודה המבוקשת אינה מוגדרת בפונקציה עצמה.", math_expression: "x = 1 \\notin Domain" },
            { verbal_explanation: "מאחר והפונקציה אינה קיימת שם, לא ניתן להעביר בה משיק או לחשב נגזרת.", math_expression: "\\emptyset" }
        ],
        final_answer: "לא קיים (אסימפטוטה)"
    },
    {
        topic: "calculus_root_571",
        subTopic: "גזירה של פונקציות המכילות שורש בתוך מכנה",
        question_text: "גזרו את הפונקציה המעורבת הבאה: \\( f(x) = x^{2} + \\dfrac{1}{\\sqrt{x}} \\).&rlm;",
        options: ["2x - 1 : (2x√x)", "2x + 1 : (2x√x)", "2x - 1 : (2√x)", "2x - x : (2√x)"],
        correctAnswer: 0,
        hint: "גזרו כל איבר בנפרד. האיבר הראשון הוא פולינום רגיל. האיבר השני הוא איקס בחזקת מינוס חצי.",
        solution_steps: [
            { verbal_explanation: "הכנת הפונקציה לגזירה על ידי המרת שבר לשבר מעריכי פשוט.", math_expression: "f(x) = x^{2} + x^{-0.5}" },
            { verbal_explanation: "ביצוע גזירה עצמאית לכל איבר בנפרד על פי חוקי חזקות.", math_expression: "f'(x) = 2x - 0.5x^{-1.5}" },
            { verbal_explanation: "ארגון מחדש של האיבר השני להצגה חזותית שברית ברורה על ידי הורדת המעריך למכנה.", math_expression: "f'(x) = 2x - \\dfrac{1}{2x^{1.5}}" },
            { verbal_explanation: "המרת החזקה השברית המורכבת לשורש תקני מפורק (כפל בין חזקה שלמה לחצי).", math_expression: "f'(x) = 2x - \\dfrac{1}{2x\\sqrt{x}}" }
        ],
        final_answer: "2x - 1 : (2x√x)"
    },
    {
        topic: "calculus_root_571",
        subTopic: "גזירה של פונקציות המכילות שורש בתוך מכנה",
        question_text: "נתונה הפונקציה \\( f(x) = \\dfrac{\\sqrt{x}}{x + 1} \\). גזרו והשוו לאפס למציאת נקודת הקיצון.&rlm;",
        options: ["x = 1", "x = 0.5", "x = 2", "x = 0"],
        correctAnswer: 0,
        hint: "השתמשו בכלל המנה, בצעו מכנה משותף בתוך המונה, והשוו את המונה העליון לאפס.",
        solution_steps: [
            { verbal_explanation: "גזירת הפונקציה דרך תבנית כלל המנה המיועדת לשברים.", math_expression: "f'(x) = \\dfrac{\\dfrac{1}{2\\sqrt{x}}(x + 1) - \\sqrt{x}(1)}{(x + 1)^{2}}" },
            { verbal_explanation: "בניית מכנה משותף בתוך החלק העליון של השבר.", math_expression: "Num = \\dfrac{x + 1 - 2x}{2\\sqrt{x}}" },
            { verbal_explanation: "כינוס המונה כדי להציג את הביטוי הפשוט ביותר להשוואה.", math_expression: "Num = \\dfrac{1 - x}{2\\sqrt{x}}" },
            { verbal_explanation: "השוואת המונה האולטימטיבי לאפס כדי לברר היכן הנגזרת מתאפסת לקיצון.", math_expression: "1 - x = 0 \\Rightarrow x = 1" }
        ],
        final_answer: "x = 1"
    },

    // ==========================================
    // תת נושא 2: מציאת נקודות קיצון מקומי ומוחלט בפונקציות רדיקליות (10 שאלות)
    // ==========================================

    {
        topic: "calculus_root_571",
        subTopic: "מציאת נקודות קיצון מקומי ומוחלט בפונקציות רדיקליות",
        question_text: "נתונה הפונקציה \\( f(x) = x\\sqrt{4 - x^{2}} \\) המוגדרת בתחום הסגור \\( -2 \\leq x \\leq 2 \\). מצאו את נקודת המקסימום המוחלט של הפונקציה.&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 150' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='10' y1='75' x2='190' y2='75' stroke='#94a3b8' stroke-width='2'/><line x1='100' y1='10' x2='100' y2='140' stroke='#94a3b8' stroke-width='2'/><path d='M 40 75 Q 70 140 100 75 T 160 75' fill='none' stroke='#3b82f6' stroke-width='2'/><circle cx='140' cy='30' r='4' fill='#ef4444'/><text x='145' y='25' font-size='12' font-family='Arial'>Max</text></svg></div>",
        options: ["(√2, 2)", "(2, 0)", "(1, √3)", "(-√2, -2)"],
        correctAnswer: 0,
        hint: "גזרו את הפונקציה לפי כלל המכפלה, השוו לאפס לאיתור קיצון פנימי, והציבו גם את קצות התחום בפונקציה לבחינה מלאה.",
        solution_steps: [
            { verbal_explanation: "גזירת הפונקציה דרך תבנית כלל המכפלה, תוך הכלה של נגזרת פנימית שלילית.", math_expression: "f'(x) = 1 \\times \\sqrt{4 - x^{2}} + x \\times \\dfrac{-2x}{2\\sqrt{4 - x^{2}}}" },
            { verbal_explanation: "ביצוע מכנה משותף לשם איחוד האיברים למנה אחת פתירה.", math_expression: "f'(x) = \\dfrac{4 - x^{2} - x^{2}}{\\sqrt{4 - x^{2}}} = \\dfrac{4 - 2x^{2}}{\\sqrt{4 - x^{2}}}" },
            { verbal_explanation: "השוואת מונה הנגזרת לאפס לאיתור הקיצון האופקי.", math_expression: "4 - 2x^{2} = 0 \\Rightarrow 2x^{2} = 4 \\Rightarrow x^{2} = 2" },
            { verbal_explanation: "חילוץ שיעורי הקיצון החשודים במרחב ההגדרה.", math_expression: "x = \\pm\\sqrt{2}" },
            { verbal_explanation: "הצבת הנקודה החיובית בפונקציה המקורית לבדיקת הגובה.", math_expression: "f(\\sqrt{2}) = \\sqrt{2} \\times \\sqrt{4 - (\\sqrt{2})^{2}} = \\sqrt{2} \\times \\sqrt{2} = 2" },
            { verbal_explanation: "קצוות התחום מתאפסים. הנקודה השלילית מניבה ערך שלילי. לכן זו המקסימלית המוחלטת.", math_expression: "P_{max}(\\sqrt{2}, 2)" }
        ],
        final_answer: "(√2, 2)"
    },
    {
        topic: "calculus_root_571",
        subTopic: "מציאת נקודות קיצון מקומי ומוחלט בפונקציות רדיקליות",
        question_text: "מצאו את נקודת המינימום המוחלט של הפונקציה \\( f(x) = x - \\sqrt{x} \\) בתחום הגדרתה \\( x \\geq 0 \\).&rlm;",
        options: ["(0.25, -0.25)", "(0, 0)", "(1, 0)", "(0.5, -0.207)"],
        correctAnswer: 0,
        hint: "גזרו את הפונקציה והשוו לאפס למציאת קיצון פנימי. בדקו את ערך הפונקציה גם בקצה התחום (x=0) והשוו ביניהם.",
        solution_steps: [
            { verbal_explanation: "גזירת הפונקציה הפשוטה הכוללת פולינום ושורש יסודי.", math_expression: "f'(x) = 1 - \\dfrac{1}{2\\sqrt{x}}" },
            { verbal_explanation: "השוואת הנגזרת לאפס לשם איתור נקודות השקה אופקיות וקיצון.", math_expression: "1 = \\dfrac{1}{2\\sqrt{x}}" },
            { verbal_explanation: "הכפלה באלכסון ובידוד השורש הריבועי מול המספר השלם.", math_expression: "2\\sqrt{x} = 1 \\Rightarrow \\sqrt{x} = 0.5" },
            { verbal_explanation: "העלאה בריבוע לקבלת הקואורדינטה האופקית.", math_expression: "x = 0.25" },
            { verbal_explanation: "הצבת הנקודה הפנימית בפונקציה לחישוב עומקה על ציר ה-y.", math_expression: "f(0.25) = 0.25 - \\sqrt{0.25} = 0.25 - 0.5 = -0.25" },
            { verbal_explanation: "הצבת נקודת קצה התחום לשם השוואה תקינה מול המינימום המקומי.", math_expression: "f(0) = 0" },
            { verbal_explanation: "הערך השלילי נמוך יותר ולכן הנקודה הפנימית היא המינימום המוחלט.", math_expression: "P_{min}(0.25, -0.25)" }
        ],
        final_answer: "(0.25, -0.25)"
    },
    {
        topic: "calculus_root_571",
        subTopic: "מציאת נקודות קיצון מקומי ומוחלט בפונקציות רדיקליות",
        question_text: "נתונה הפונקציה \\( f(x) = \\sqrt{-x^{2} + 6x - 5} \\). מצאו את נקודת המקסימום המוחלט שלה.&rlm;",
        options: ["(3, 2)", "(1, 0)", "(5, 0)", "(3, 4)"],
        correctAnswer: 0,
        hint: "נקודת המקסימום של פונקציית שורש ריבועי מתקבלת באותה נקודת x שבה הביטוי הפנימי (הפרבולה תחת השורש) מקבל את המקסימום שלו.",
        solution_steps: [
            { verbal_explanation: "במקום לגזור הכל, נגזור רק את הביטוי הפנימי שמתחת לשורש כדי לאתר את קודקוד הפרבולה שלו.", math_expression: "u(x) = -x^{2} + 6x - 5 \\Rightarrow u'(x) = -2x + 6" },
            { verbal_explanation: "השוואה לאפס למציאת איקס הקודקוד.", math_expression: "-2x + 6 = 0 \\Rightarrow 2x = 6 \\Rightarrow x = 3" },
            { verbal_explanation: "הצבת הקודקוד בפונקציה המלאה והמקורית כדי לחשב את ערכה המקסימלי תחת השורש.", math_expression: "f(3) = \\sqrt{-(3^{2}) + 6(3) - 5}" },
            { verbal_explanation: "ביצוע סדר פעולות חשבון תקני.", math_expression: "f(3) = \\sqrt{-9 + 18 - 5} = \\sqrt{4}" },
            { verbal_explanation: "קבלת הגובה המרבי של הפונקציה.", math_expression: "y = 2 \\Rightarrow P_{max}(3, 2)" }
        ],
        final_answer: "(3, 2)"
    },
    {
        topic: "calculus_root_571",
        subTopic: "מציאת נקודות קיצון מקומי ומוחלט בפונקציות רדיקליות",
        question_text: "מצאו את נקודת הקיצון של הפונקציה \\( f(x) = \\dfrac{x^{2}}{\\sqrt{x - 2}} \\) וקבעו את סוגה.&rlm;",
        options: ["(2.66, 8.5), מינימום", "(4, 11.3), מינימום", "(3, 9), מינימום", "(2, 0), קצה"],
        correctAnswer: 0,
        hint: "תחום ההגדרה הוא x > 2. גזרו לפי כלל המנה והשוו את המונה לאפס. x=0 נפסל מחוץ לתחום.",
        solution_steps: [
            { verbal_explanation: "קביעת תחום ההגדרה ההתחלתי לשם סינון נתונים בהמשך הדרך.", math_expression: "x - 2 > 0 \\Rightarrow x > 2" },
            { verbal_explanation: "גזירת הפונקציה בעזרת כלל המנה המורחב.", math_expression: "f'(x) = \\dfrac{2x\\sqrt{x - 2} - x^{2} \\times \\dfrac{1}{2\\sqrt{x - 2}}}{x - 2}" },
            { verbal_explanation: "ביצוע מכנה משותף בתוך השבר העליון במטרה לאחד גורמים למשוואה אחת.", math_expression: "Num = \\dfrac{4x(x - 2) - x^{2}}{2\\sqrt{x - 2}}" },
            { verbal_explanation: "פתיחת סוגריים וכינוס כדי לקבל את המונה הנקי המאפשר פתרון קל.", math_expression: "4x^{2} - 8x - x^{2} = 3x^{2} - 8x" },
            { verbal_explanation: "השוואת המונה הריבועי לאפס.", math_expression: "x(3x - 8) = 0" },
            { verbal_explanation: "חילוץ שורשים וסינון על בסיס תחום ההגדרה המקורי.", math_expression: "x_{1} = 0 \\notin Domain \\quad , \\quad x_{2} = \\dfrac{8}{3} \\approx 2.66" },
            { verbal_explanation: "הצבת השורש התקין בפונקציה המקורית להשלמת מציאת הנקודה (שיפוע יורד ואז עולה המגדיר מינימום).", math_expression: "f(2.66) \\approx 8.5 \\Rightarrow Min" }
        ],
        final_answer: "(2.66, 8.5), מינימום"
    },
    {
        topic: "calculus_root_571",
        subTopic: "מציאת נקודות קיצון מקומי ומוחלט בפונקציות רדיקליות",
        question_text: "נתונה הפונקציה \\( f(x) = \\sqrt{x} + \\dfrac{16}{\\sqrt{x}} \\). מצאו את נקודת המינימום של הפונקציה.&rlm;",
        options: ["(16, 8)", "(4, 10)", "(8, 8.5)", "(2, 12.7)"],
        correctAnswer: 0,
        hint: "המירו את המכנה לחזקת מינוס חצי וגזרו. השוו ל-0 ופתרו את המשוואה לחילוץ x.",
        solution_steps: [
            { verbal_explanation: "סידור מבנה הפונקציה לשימוש בחזקות מעריכיות להקלת תהליך הגזירה.", math_expression: "f(x) = x^{0.5} + 16x^{-0.5}" },
            { verbal_explanation: "ביצוע גזירה סטנדרטית לשני האיברים בנפרד בהתאם לכללים.", math_expression: "f'(x) = 0.5x^{-0.5} - 8x^{-1.5}" },
            { verbal_explanation: "ארגון מחדש של הנגזרת לשברים המאפשרים ראייה ברורה יותר של המשוואה וההשוואה לאפס.", math_expression: "\\dfrac{1}{2\\sqrt{x}} - \\dfrac{8}{x\\sqrt{x}} = 0" },
            { verbal_explanation: "העברת אגפים ליצירת פרופורציה.", math_expression: "\\dfrac{1}{2\\sqrt{x}} = \\dfrac{8}{x\\sqrt{x}}" },
            { verbal_explanation: "הכפלת האגפים במכנה המשותף הגדול כדי לבודד את המשתנה השלם.", math_expression: "x\\sqrt{x} = 16\\sqrt{x} \\Rightarrow x = 16" },
            { verbal_explanation: "הצבת ערך הנקודה בפונקציה הראשית כדי להגיע לגובה המדויק באנך.", math_expression: "f(16) = \\sqrt{16} + \\dfrac{16}{\\sqrt{16}} = 4 + \\dfrac{16}{4} = 4 + 4 = 8" }
        ],
        final_answer: "(16, 8)"
    },
    {
        topic: "calculus_root_571",
        subTopic: "מציאת נקודות קיצון מקומי ומוחלט בפונקציות רדיקליות",
        question_text: "לפונקציה \\( f(x) = x\\sqrt{x - a} \\) יש נקודת קיצון ב- \\( x = 6 \\). מצאו את הפרמטר a.&rlm;",
        options: ["a = 4", "a = 2", "a = 3", "a = 9"],
        correctAnswer: 3,
        hint: "גזרו את הפונקציה לפי כלל מכפלה. בצעו מכנה משותף, הציבו במונה הנגזרת את x=6 והשוו לאפס.",
        solution_steps: [
            { verbal_explanation: "גזירת הפונקציה באמצעות שיטת המכפלה הכללית.", math_expression: "f'(x) = 1 \\times \\sqrt{x - a} + x \\times \\dfrac{1}{2\\sqrt{x - a}}" },
            { verbal_explanation: "יצירת מכנה אחיד כדי לאפשר עבודה נוחה עם מונה בלבד במשוואה מאופסת.", math_expression: "f'(x) = \\dfrac{2(x - a) + x}{2\\sqrt{x - a}} = \\dfrac{3x - 2a}{2\\sqrt{x - a}}" },
            { verbal_explanation: "השוואת המונה לאפס תוך התבססות על נתון הקיצון המוצהר בבעיה.", math_expression: "3(6) - 2a = 0" },
            { verbal_explanation: "כינוס והעברת אגפים לבידוד מוחלט של הפרמטר.", math_expression: "18 = 2a \\Rightarrow a = 9" }
        ],
        final_answer: "a = 9"
    },
    {
        topic: "calculus_root_571",
        subTopic: "מציאת נקודות קיצון מקומי ומוחלט בפונקציות רדיקליות",
        question_text: "נתונה הפונקציה \\( f(x) = |x - 2| + \\sqrt{x} \\). מצאו את נקודת המינימום המוחלט בתחום הגדרתה \\( x \\geq 0 \\).&rlm;",
        options: ["(2, √2)", "(0, 2)", "(1, 2)", "(0.25, 2.25)"],
        correctAnswer: 0,
        hint: "פונקציית ערך מוחלט יוצרת 'שפיץ' ב-x=2 (נקודה שאינה גזירה אך קיימת). בדקו את ערך הפונקציה בנקודה זו, בנקודת הקצה (x=0) ובנקודות החשודות.",
        solution_steps: [
            { verbal_explanation: "בדיקת ערך נקודת הקצה הראשונה המותרת בתחום הנתון.", math_expression: "f(0) = |0 - 2| + \\sqrt{0} = 2" },
            { verbal_explanation: "בדיקת נקודת התפר של הערך המוחלט, אשר מהווה לעיתים קרובות נקודת מינימום בשל צורת ה'שפיץ'.", math_expression: "f(2) = |2 - 2| + \\sqrt{2} = \\sqrt{2} \\approx 1.414" },
            { verbal_explanation: "הבנה שערך זה נמוך מהערך בקצה התחום.", math_expression: "\\sqrt{2} < 2" },
            { verbal_explanation: "גזירת הפונקציה משמאל ל-2 (כאשר פנים הערך המוחלט שלילי) לאיתור קיצון מקומי נוסף.", math_expression: "f'(x) = -1 + \\dfrac{1}{2\\sqrt{x}} = 0 \\Rightarrow x = 0.25" },
            { verbal_explanation: "הצבת נקודת הקיצון החלופית כדי לאמת את עומקה.", math_expression: "f(0.25) = |0.25 - 2| + \\sqrt{0.25} = 1.75 + 0.5 = 2.25" },
            { verbal_explanation: "הערך של נקודת השפיץ הוא הנמוך ביותר מכל הנקודות שנבדקו, ולכן היא המינימום המוחלט.", math_expression: "P_{min}(2, \\sqrt{2})" }
        ],
        final_answer: "(2, √2)"
    },
    {
        topic: "calculus_root_571",
        subTopic: "מציאת נקודות קיצון מקומי ומוחלט בפונקציות רדיקליות",
        question_text: "קבעו מהו הערך המקסימלי שמקבלת הפונקציה \\( f(x) = \\dfrac{\\sqrt{x}}{x + 1} \\) בתחום \\( x \\geq 0 \\).&rlm;",
        options: ["0.5", "1", "0.25", "0"],
        correctAnswer: 0,
        hint: "גזרו לפי מנה והשוו את המונה לאפס למציאת נקודת הקיצון. הציבו אותה בפונקציה המקורית.",
        solution_steps: [
            { verbal_explanation: "גזירת הפונקציה דרך תבנית כלל המנה המיועדת לשברים.", math_expression: "f'(x) = \\dfrac{\\dfrac{1}{2\\sqrt{x}}(x + 1) - \\sqrt{x}(1)}{(x + 1)^{2}}" },
            { verbal_explanation: "בניית מכנה משותף בתוך החלק העליון והעמוס של השבר.", math_expression: "Num = \\dfrac{x + 1 - 2x}{2\\sqrt{x}} = \\dfrac{1 - x}{2\\sqrt{x}}" },
            { verbal_explanation: "השוואת המונה האולטימטיבי לאפס כדי לברר היכן יש נקודת קיצון.", math_expression: "1 - x = 0 \\Rightarrow x = 1" },
            { verbal_explanation: "בדיקת ערכי הפונקציה בנקודת הקיצון הפנימית כדי לאמת את גובהה.", math_expression: "f(1) = \\dfrac{\\sqrt{1}}{1 + 1} = \\dfrac{1}{2} = 0.5" },
            { verbal_explanation: "בדיקת נקודת הקצה למניעת הפתעות ואימות שאכן זהו המקסימום המוחלט.", math_expression: "f(0) = 0 \\Rightarrow Max = 0.5" }
        ],
        final_answer: "0.5"
    },
    {
        topic: "calculus_root_571",
        subTopic: "מציאת נקודות קיצון מקומי ומוחלט בפונקציות רדיקליות",
        question_text: "באיזו נקודה x, לפונקציה \\( f(x) = x^{2} - 8\\sqrt{x} \\) יש נקודת קיצון מקומית?&rlm;",
        options: ["x = 1.58", "x = 4", "x = 1", "x = 2"],
        correctAnswer: 0, // x^2 - 8x^0.5 => 2x - 4/sqrt(x) = 0 => 2x = 4/sqrt(x) => x*sqrt(x) = 2 => x^1.5 = 2 => x = 2^(2/3) ~ 1.587
        hint: "גזרו את הפונקציה והשוו לאפס. תקבלו משוואה עם שורש במכנה. הכפילו ובודדו את x.",
        solution_steps: [
            { verbal_explanation: "גזירת הפונקציה המשלבת פולינום רגיל עם פונקציית שורש מלווה במקדם.", math_expression: "f'(x) = 2x - 8 \\times \\dfrac{1}{2\\sqrt{x}} = 2x - \\dfrac{4}{\\sqrt{x}}" },
            { verbal_explanation: "השוואה לאפס והעברת השבר לאגף הנגדי כדי להימנע מסימנים שליליים.", math_expression: "2x = \\dfrac{4}{\\sqrt{x}}" },
            { verbal_explanation: "הכפלת המשוואה כולה במכנה השורשי כדי לבטל אותו.", math_expression: "2x\\sqrt{x} = 4" },
            { verbal_explanation: "חלוקה בשתיים ואיחוד המשתנים לחזקה שברית אחת.", math_expression: "x^{1.5} = 2" },
            { verbal_explanation: "העלאה בחזקת שני שליש לחילוץ נקי של המשתנה.", math_expression: "x = 2^{2/3} = \\sqrt[3]{4}" },
            { verbal_explanation: "חישוב מקורב כהכנה לבחירת החלופה הנכונה.", math_expression: "x \\approx 1.587" }
        ],
        final_answer: "x = 1.58"
    },
    {
        topic: "calculus_root_571",
        subTopic: "מציאת נקודות קיצון מקומי ומוחלט בפונקציות רדיקליות",
        question_text: "מצאו את נקודת המקסימום של הפונקציה \\( f(x) = 6x - x\\sqrt{x} \\).&rlm;",
        options: ["(16, 32)", "(4, 16)", "(9, 27)", "(1, 5)"],
        correctAnswer: 0,
        hint: "סדרו את x שורש x כ-x בחזקת 1.5. גזרו את הפונקציה בעזרת חוקי החזקות והשוו לאפס.",
        solution_steps: [
            { verbal_explanation: "המרת הפונקציה למבנה חזקות שבריות על מנת לפשט משמעותית את תהליך הגזירה.", math_expression: "f(x) = 6x - x^{1.5}" },
            { verbal_explanation: "גזירת הפונקציה לפי חוקי הגזירה האלמנטריים ביותר.", math_expression: "f'(x) = 6 - 1.5x^{0.5} = 6 - 1.5\\sqrt{x}" },
            { verbal_explanation: "השוואת הנגזרת לאפס לאיתור נקודות השקה אופקיות המהוות פוטנציאל לקיצון.", math_expression: "1.5\\sqrt{x} = 6" },
            { verbal_explanation: "חלוקה במקדם האחד וחצי.", math_expression: "\\sqrt{x} = 4" },
            { verbal_explanation: "העלאה בריבוע של המשוואה כדי לחשוף את ערכו המלא של המשתנה.", math_expression: "x = 16" },
            { verbal_explanation: "הצבת נקודת המקסימום בפונקציה הראשית כדי לדלות את שיעור הגובה של הנקודה.", math_expression: "f(16) = 6(16) - 16\\sqrt{16} = 96 - 16(4)" },
            { verbal_explanation: "סיום פעולות החשבון.", math_expression: "f(16) = 96 - 64 = 32 \\Rightarrow P(16, 32)" }
        ],
        final_answer: "(16, 32)"
    },

    // ==========================================
    // תת נושא 3: בעיות קיצון (הנדסיות וגרפיות) בשילוב פונקציות שורש (10 שאלות)
    // ==========================================

    {
        topic: "calculus_root_571",
        subTopic: "בעיות קיצון (הנדסיות וגרפיות) בשילוב פונקציות שורש",
        question_text: "נקודה A מונחת על גרף הפונקציה \\( y = \\sqrt{x} \\). מהו המרחק המינימלי האפשרי בין הנקודה A לבין הנקודה הקבועה \\( B(1.5, 0) \\)?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 120' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='100' x2='180' y2='100' stroke='#94a3b8' stroke-width='2'/><path d='M 20 100 Q 100 20 180 10' fill='none' stroke='#3b82f6' stroke-width='2'/><circle cx='80' cy='60' r='4' fill='#ef4444'/><circle cx='120' cy='100' r='4' fill='#ef4444'/><line x1='80' y1='60' x2='120' y2='100' stroke='#1e293b' stroke-dasharray='4,4' stroke-width='1.5'/><text x='70' y='50' font-size='12' font-family='Arial'>A</text><text x='125' y='115' font-size='12' font-family='Arial'>B(1.5,0)</text></svg></div>",
        options: ["√1.25", "1", "1.5", "1.25"],
        correctAnswer: 0,
        hint: "בנו פונקציית מטרה המייצגת את המרחק בריבוע כדי להימנע מגזירת שורש. גזרו את הפונקציה, השוו לאפס ומצאו את x. לבסוף, הציבו חזרה והוציאו שורש לקבלת המרחק האמיתי.",
        solution_steps: [
            { verbal_explanation: "הגדרת קואורדינטות הנקודה הרצה על סמך משוואת הפונקציה הגרפית.", math_expression: "A(x, \\sqrt{x})" },
            { verbal_explanation: "בניית פונקציית המטרה על בסיס ריבוע המרחק הגיאומטרי בין שתי נקודות במישור לשם מניעת שורשים.", math_expression: "D(x) = (x - 1.5)^{2} + (\\sqrt{x} - 0)^{2}" },
            { verbal_explanation: "פתיחת סוגריים וכינוס הפולינום למבנה נוח לעבודה בהמשך.", math_expression: "D(x) = x^{2} - 3x + 2.25 + x = x^{2} - 2x + 2.25" },
            { verbal_explanation: "גזירת הפולינום המייצג את ריבוע המרחק.", math_expression: "D'(x) = 2x - 2" },
            { verbal_explanation: "השוואה לאפס לאיתור נקודת הקיצון המייצגת את המרחק הקצר ביותר.", math_expression: "2x - 2 = 0 \\Rightarrow x = 1" },
            { verbal_explanation: "הצבת נקודת המינימום חזרה בפונקציית המטרה הריבועית.", math_expression: "D(1) = 1^{2} - 2(1) + 2.25 = 1.25" },
            { verbal_explanation: "הוצאת שורש ריבועי לקבלת המרחק הממשי והמוחלט ולא את ריבועו היחסי.", math_expression: "d = \\sqrt{1.25}" }
        ],
        final_answer: "√1.25"
    },
    {
        topic: "calculus_root_571",
        subTopic: "בעיות קיצון (הנדסיות וגרפיות) בשילוב פונקציות שורש",
        question_text: "חוסמים מלבן בין גרף הפונקציה \\( y = \\sqrt{12 - x} \\) לבין הצירים החיוביים, כך שקודקוד אחד בראשית ושתי צלעות מונחות על הצירים. מהו השטח המקסימלי האפשרי של המלבן?&rlm;",
        options: ["16", "24", "12", "8√2"],
        correctAnswer: 0,
        hint: "שטח המלבן הוא x כפול y. בנו פונקציית מטרה, גזרו בעזרת כלל המכפלה, השוו לאפס, ומצאו את השטח.",
        solution_steps: [
            { verbal_explanation: "בניית פונקציית המטרה המייצגת את שטח המלבן המוכפל באורך וברוחב הנתונים על ידי הפונקציה.", math_expression: "S(x) = x\\sqrt{12 - x}" },
            { verbal_explanation: "גזירת פונקציית המכפלה, כולל הנגזרת הפנימית השלילית של השורש כמתחייב מהכללים.", math_expression: "S'(x) = 1 \\times \\sqrt{12 - x} + x \\times \\dfrac{-1}{2\\sqrt{12 - x}}" },
            { verbal_explanation: "ביצוע מכנה משותף שורשי ואיחוד שברים.", math_expression: "S'(x) = \\dfrac{2(12 - x) - x}{2\\sqrt{12 - x}} = \\dfrac{24 - 3x}{2\\sqrt{12 - x}}" },
            { verbal_explanation: "השוואת המונה לאפס לצורך איתור הקיצון החשוב ביותר בחקירה זו.", math_expression: "24 - 3x = 0 \\Rightarrow 3x = 24 \\Rightarrow x = 8" },
            { verbal_explanation: "הצבת נקודת המקסימום בפונקציית המטרה לקבלת השטח המרבי הישיר והמוחלט.", math_expression: "S(8) = 8\\sqrt{12 - 8} = 8\\sqrt{4}" },
            { verbal_explanation: "הכפלה והשלמת החישוב.", math_expression: "S = 8 \\times 2 = 16" }
        ],
        final_answer: "16"
    },
    {
        topic: "calculus_root_571",
        subTopic: "בעיות קיצון (הנדסיות וגרפיות) בשילוב פונקציות שורש",
        question_text: "חוסמים משולש ישר זווית מתחת לגרף של רבע מעגל שמשוואתו \\( f(x) = \\sqrt{R^{2} - x^{2}} \\) ברביע הראשון. קודקוד אחד בראשית, השני על ציר x, והשלישי על הקשת. מהו השטח המקסימלי האפשרי כפונקציה של הרדיוס R?&rlm;",
        options: ["R² : 4", "R² : 2", "R²", "R² : √2"],
        correctAnswer: 0,
        hint: "שטח המשולש הוא (x כפול y) חלקי 2. כדי להקל, הכניסו את המשתנה x אל תוך השורש וגזרו את הפולינום הפנימי בלבד.",
        solution_steps: [
            { verbal_explanation: "בניית נוסחת השטח למשולש הישר הכלוא תחת העקומה הנתונה.", math_expression: "S(x) = \\dfrac{x\\sqrt{R^{2} - x^{2}}}{2}" },
            { verbal_explanation: "הכנסת המשתנה החיצוני אל תוך השורש כדי לאפשר חקירה פנימית קלה באמצעות פולינום.", math_expression: "g(x) = x^{2}(R^{2} - x^{2}) = R^{2}x^{2} - x^{4}" },
            { verbal_explanation: "גזירת הפולינום הפנימי והשוואתו לאפס כדי למצוא את מיקום נקודת הקיצון המושלמת על הקשת המעגלית.", math_expression: "g'(x) = 2R^{2}x - 4x^{3} = 0" },
            { verbal_explanation: "הוצאת גורם משותף ומציאת הערך החיובי של המשתנה המאפס את המשוואה.", math_expression: "2x(R^{2} - 2x^{2}) = 0 \\Rightarrow 2x^{2} = R^{2} \\Rightarrow x = \\dfrac{R}{\\sqrt{2}}" },
            { verbal_explanation: "הצבת נקודת המקסימום חזרה בפונקציית המקור למציאת הגובה.", math_expression: "y = \\sqrt{R^{2} - (\\dfrac{R}{\\sqrt{2}})^{2}} = \\sqrt{\\dfrac{R^{2}}{2}} = \\dfrac{R}{\\sqrt{2}}" },
            { verbal_explanation: "חישוב שטח המשולש כמכפלת הניצבים חלקי שתיים.", math_expression: "S = \\dfrac{\\dfrac{R}{\\sqrt{2}} \\times \\dfrac{R}{\\sqrt{2}}}{2} = \\dfrac{R^{2} : 2}{2} = \\dfrac{R^{2}}{4}" }
        ],
        final_answer: "R² : 4"
    },
    {
        topic: "calculus_root_571",
        subTopic: "בעיות קיצון (הנדסיות וגרפיות) בשילוב פונקציות שורש",
        question_text: "קבלן מעוניין לבנות בריכה בצורת מלבן החסום בין הפונקציה \\( f(x) = \\dfrac{16}{\\sqrt{x}} \\) לצירים (ברביע הראשון), כאשר קודקוד אחד מונח על הפונקציה. מצאו את ההיקף המינימלי האפשרי של הבריכה.&rlm;",
        options: ["24", "16", "32", "20"],
        correctAnswer: 0,
        hint: "היקף המלבן הוא פעמיים (הרוחב ועוד הגובה). בנו פונקציה P(x) המבוססת על כך, המירו את המכנה לחזקה שלילית, גזרו אותה והשוו לאפס.",
        solution_steps: [
            { verbal_explanation: "הגדרת פונקציית המטרה המייצגת את היקפו הכולל והמוחלט של המלבן הכלוא ברביע.", math_expression: "P(x) = 2(x + \\dfrac{16}{\\sqrt{x}}) = 2(x + 16x^{-0.5})" },
            { verbal_explanation: "גזירת הפונקציה בעזרת הכללים הידועים המורידים את החזקה השלילית כמקדם לפני האיבר.", math_expression: "P'(x) = 2(1 - 8x^{-1.5}) = 2(1 - \\dfrac{8}{x^{1.5}})" },
            { verbal_explanation: "השוואה לאפס לטובת מציאת הקיצון והעברת איברים נוחה ומסודרת לשני האגפים בנפרד.", math_expression: "1 = \\dfrac{8}{x^{1.5}} \\Rightarrow x^{1.5} = 8" },
            { verbal_explanation: "חילוץ המשתנה דרך הוצאת שורש מסדר שלישי והעלאה בריבוע או חזקת שני שליש.", math_expression: "x = 8^{2/3} = 4" },
            { verbal_explanation: "הצבת נקודת המינימום בפונקציית ההיקף לקביעת התוצאה והמידה הסופית הנדרשת מן הקבלן.", math_expression: "P(4) = 2(4 + \\dfrac{16}{\\sqrt{4}}) = 2(4 + 8) = 24" }
        ],
        final_answer: "24"
    },
    {
        topic: "calculus_root_571",
        subTopic: "בעיות קיצון (הנדסיות וגרפיות) בשילוב פונקציות שורש",
        question_text: "נתונה הפונקציה \\( f(x) = x\\sqrt{10 - x^{2}} \\) ברביע הראשון. מעבירים ישר מאונך לציר ה-x דרך נקודת המקסימום של הפונקציה. נוצר משולש ישר זווית על ידי הישר, ציר ה-x, והקטע המחבר את ראשית הצירים למקסימום. מהו שטח המשולש?&rlm;",
        options: ["2.5√5", "2.5", "5", "10"],
        correctAnswer: 0,
        hint: "מצאו את נקודת המקסימום של הפונקציה המקורית. הכניסו את איקס לתוך השורש כדי ליצור פולינום, גזרו ומצאו שהמקסימום ב-x=שורש 5. שטח המשולש הוא מחצית המכפלה של שיעורי הנקודה.",
        solution_steps: [
            { verbal_explanation: "הכנסת המשתנה אל פנים השורש ליצירת פולינום לבחינה מהירה ללא נגזרת מכפלה מסובכת.", math_expression: "g(x) = x^{2}(10 - x^{2}) = 10x^{2} - x^{4}" },
            { verbal_explanation: "גזירה והשוואה לאפס של הפולינום הפנימי בלבד המכתיב את התנהגות הפונקציה כולה.", math_expression: "g'(x) = 20x - 4x^{3} = 0 \\Rightarrow 4x(5 - x^{2}) = 0" },
            { verbal_explanation: "מציאת הפתרון החיובי הממוקם ברביע הראשון ועונה על דרישות התרגיל.", math_expression: "x = \\sqrt{5}" },
            { verbal_explanation: "הצבת הפתרון לחישוב גובה הנקודה המהווה את הניצב האנכי במשולש הכלוא.", math_expression: "y = \\sqrt{5}\\sqrt{10 - (\\sqrt{5})^{2}} = \\sqrt{5}\\sqrt{5} = 5" },
            { verbal_explanation: "הרכבת משוואת שטח המשולש ישר הזווית והצבת הניצבים בה.", math_expression: "S = \\dfrac{x \\times y}{2} = \\dfrac{\\sqrt{5} \\times 5}{2} = 2.5\\sqrt{5}" }
        ],
        final_answer: "2.5√5"
    },
    {
        topic: "calculus_root_571",
        subTopic: "בעיות קיצון (הנדסיות וגרפיות) בשילוב פונקציות שורש",
        question_text: "שני מספרים חיוביים מקיימים שהסכום שלהם הוא 12. מהו הערך המקסימלי האפשרי של המכפלה של המספר הראשון בשורש הריבועי של המספר השני?&rlm;",
        options: ["16", "32", "24", "18"],
        correctAnswer: 0,
        hint: "נסמן מספר אחד כ- (12 פחות x) והשני כ-x. פונקציית המטרה תהיה מכפלתם (עם השורש). הכניסו את כל המכפלה לתוך שורש כדי לגזור רק פולינום.",
        solution_steps: [
            { verbal_explanation: "הגדרת הפונקציה הממקסמת את הדרישה המילולית של הבעיה באמצעות משתנה יחיד בודד הנשען על הקשר בין המספרים.", math_expression: "f(x) = (12 - x)\\sqrt{x}" },
            { verbal_explanation: "כדי להקל על החישוב הדיפרנציאלי, נכניס הכל תחת שורש גדול ורציף שיעבור גזירה פנימית קלה בהרבה.", math_expression: "f(x) = \\sqrt{(12 - x)^{2}x} = \\sqrt{(144 - 24x + x^{2})x} = \\sqrt{x^{3} - 24x^{2} + 144x}" },
            { verbal_explanation: "גזירת הפולינום הפנימי שמתחת לשורש והשוואתו לאפס לשם מציאת מוקד הקיצון החיובי.", math_expression: "g'(x) = 3x^{2} - 48x + 144 = 0" },
            { verbal_explanation: "חלוקת המשוואה בשלוש לשם יצירת טרינום קריא וקל לניהול על ידי התלמיד.", math_expression: "x^{2} - 16x + 48 = 0" },
            { verbal_explanation: "פירוק וקביעת שורשים רלוונטיים (המספר הקטן מניב את המקסימום המבוקש במקרה זה על פי בדיקה סמויה).", math_expression: "(x - 4)(x - 12) = 0 \\Rightarrow x = 4" },
            { verbal_explanation: "הצבת המספר הנבחר חזרה בפונקציית המקור למציאת ערך השיא המוחלט והממשי לשאלה זו.", math_expression: "f(4) = (12 - 4)\\sqrt{4} = 8 \\times 2 = 16" }
        ],
        final_answer: "16"
    },
    {
        topic: "calculus_root_571",
        subTopic: "בעיות קיצון (הנדסיות וגרפיות) בשילוב פונקציות שורש",
        question_text: "קבלן רוצה לבנות חלון ראווה שחלקו התחתון מלבן וחלקו העליון הוא חצי מעגל (הממוקם על הצלע העליונה של המלבן במלואה). היקף החלון הנדרש כולו הוא 10 מטרים. איזה רדיוס עליו לבחור לחצי המעגל כדי ששטח החלון יהיה מקסימלי?&rlm;",
        options: ["R = 10 : (4 + π)", "R = 10 : π", "R = 5 : π", "R = 5 : (2 + π)"],
        correctAnswer: 0,
        hint: "היקף החלון שווה לצלע התחתונה (2R), פעמיים הגובה, וקשת החצי מעגל (פאי כפול R). בטאו את הגובה בעזרת R, בנו פונקציית שטח וגזרו.",
        solution_steps: [
            { verbal_explanation: "בניית משוואת ההיקף הכוללת את צלעות המלבן (ללא הצלע הפנימית המוסתרת תחת הקשת) ואת קשת המעגל החיצונית.", math_expression: "P = 2R + 2h + \\pi R = 10" },
            { verbal_explanation: "בידוד גובה המלבן מתוך משוואת ההיקף למען יצירת משתנה תלותי יחיד (הרדיוס) לעבודה חלקה.", math_expression: "2h = 10 - 2R - \\pi R \\Rightarrow h = 5 - R - 0.5\\pi R" },
            { verbal_explanation: "הרכבת פונקציית המטרה הכוללת את השטח המשולב של מלבן שלם בתוספת חצי עיגול עליון.", math_expression: "S(R) = 2R \\times h + 0.5\\pi R^{2}" },
            { verbal_explanation: "הצבת הגובה שמצאנו אל תוך הפונקציה הכללית ופתיחת כלל הסוגריים עד לפישוט מרבי וברור.", math_expression: "S(R) = 2R(5 - R - 0.5\\pi R) + 0.5\\pi R^{2} = 10R - 2R^{2} - \\pi R^{2} + 0.5\\pi R^{2}" },
            { verbal_explanation: "כינוס הפולינום ויצירת פונקציה מסודרת לחלוטין לחקירה חלקה של קיצון.", math_expression: "S(R) = 10R - 2R^{2} - 0.5\\pi R^{2}" },
            { verbal_explanation: "גזירת הפונקציה על פי המשתנה המנחה (רדיוס) והשוואתה לאפס לשם איתור מוקד המקסימום ההנדסי המחויב.", math_expression: "S'(R) = 10 - 4R - \\pi R = 0" },
            { verbal_explanation: "הוצאת גורם משותף וחילוץ סופי של הרדיוס בצורה מדויקת ופשוטה להפליא.", math_expression: "R(4 + \\pi) = 10 \\Rightarrow R = \\dfrac{10}{4 + \\pi}" }
        ],
        final_answer: "R = 10 : (4 + π)"
    },
    {
        topic: "calculus_root_571",
        subTopic: "בעיות קיצון (הנדסיות וגרפיות) בשילוב פונקציות שורש",
        question_text: "נתונה הפונקציה \\( f(x) = \\dfrac{4}{\\sqrt{x^{2} + 3}} \\). מצאו את הערך המקסימלי שהפונקציה יכולה לקבל.&rlm;",
        options: ["4 : √3", "2", "4", "2 : √3"],
        correctAnswer: 0,
        hint: "אין צורך לגזור את כל הפונקציה המסורבלת. שבר חיובי מקבל ערך מקסימלי כאשר המכנה שלו הוא מינימלי. חקרו רק את הביטוי שבתוך השורש.",
        solution_steps: [
            { verbal_explanation: "הבנת העיקרון המתמטי הבסיסי לפיו מקסימום של שבר מתקבל אך ורק כאשר המכנה שלו מגיע למינימום ההכרחי שלו.", math_expression: "Max(f(x)) \\Leftrightarrow Min(Denominator)" },
            { verbal_explanation: "חקירת הביטוי המצוי תחת השורש לשם מציאת הנקודה הנמוכה ביותר שלו (פרבולה מחייכת עם קודקוד באפס שאינו יכול להיות שלילי).", math_expression: "x^{2} + 3 \\geq 3 \\Rightarrow Min = 3 \\ (at \\ x=0)" },
            { verbal_explanation: "הצבת האיפוס של הביטוי הריבועי בחזרה אל הפונקציה השלמה והמורכבת לקבלת הערך העליון והמקסימלי.", math_expression: "f(0) = \\dfrac{4}{\\sqrt{0^{2} + 3}} = \\dfrac{4}{\\sqrt{3}}" },
            { verbal_explanation: "בדיקת העובדה שהפונקציה מוגדרת בכל התחום הממשי ואין נקודות אי רציפות העלולות לשנות את הנתון הזה.", math_expression: "1=1" }
        ],
        final_answer: "4 : √3"
    },
    {
        topic: "calculus_root_571",
        subTopic: "בעיות קיצון (הנדסיות וגרפיות) בשילוב פונקציות שורש",
        question_text: "בפרבולה \\( y = 27 - x^{2} \\) ברביע הראשון חסום מלבן. קודקוד אחד בראשית, שניים על הצירים והאחרון מונח על גרף הפרבולה. מצאו את השטח המקסימלי האפשרי של המלבן.&rlm;",
        options: ["54", "27", "108", "36"],
        correctAnswer: 0,
        hint: "שטח המלבן הוא פשוט מכפלת שיעורי הנקודה שעל הפרבולה. פונקציית המטרה תהיה (איקס כפול הפרבולה). גזרו, השוו לאפס והציבו.",
        solution_steps: [
            { verbal_explanation: "בניית פונקציית מטרה המייצגת את שטח המלבן המדובר, על ידי הכפלת הרוחב בגובה הפונקציה בנקודת ההשקה על העקומה.", math_expression: "S(x) = x(27 - x^{2})" },
            { verbal_explanation: "פתיחת סוגריים לפולינום רגיל וקריא להקלת החישוב הדיפרנציאלי והימנעות מנגזרת מכפלה מסורבלת.", math_expression: "S(x) = 27x - x^{3}" },
            { verbal_explanation: "גזירת הפונקציה והשוואתה לאפס לשם איתור נקודות קיצון מרחביות המהוות פתרונות אפשריים במרחב ההגדרתי.", math_expression: "S'(x) = 27 - 3x^{2} = 0" },
            { verbal_explanation: "חילוץ הנקודה האופטימלית והחיובית מהמשוואה שנוצרה.", math_expression: "3x^{2} = 27 \\Rightarrow x^{2} = 9 \\Rightarrow x = 3" },
            { verbal_explanation: "הצבת נקודת הקיצון המוצלחת חזרה לתוך פונקציית המטרה הראשונית כדי לאמוד את השטח במלואו כנדרש בבעיה.", math_expression: "S(3) = 3(27 - 3^{2}) = 3(27 - 9)" },
            { verbal_explanation: "ביצוע הכפל הסופי של התוצאה להשלמת משימת חקירת הקיצון.", math_expression: "S = 3 \\times 18 = 54" }
        ],
        final_answer: "54"
    },
    {
        topic: "calculus_root_571",
        subTopic: "בעיות קיצון (הנדסיות וגרפיות) בשילוב פונקציות שורש",
        question_text: "עבור איזה ערך של t חיובי (t > 0), פונקציית האינטגרל המצטבר הבאה תקבל את ערכה המקסימלי: \\( \\int_{0}^{t} (4 - x^{2}) dx \\)?&rlm;",
        options: ["t = 2", "t = 4", "t = 0", "t = 1.5"],
        correctAnswer: 0,
        hint: "הפונקציה המצטברת גדלה כל עוד הפונקציה הפנימית חיובית (מעל ציר x). מקסימום מושג בנקודה שבה הפונקציה הפנימית חוצה את הציר והופכת לשלילית.",
        solution_steps: [
            { verbal_explanation: "הגדרת פונקציית שטח חדשה הקשורה בלעדית לגבול העליון ושימוש בנגזרת שלה (המשפט היסודי של החדו\"א).", math_expression: "S(t) = \\int_{0}^{t} (4 - x^{2}) dx \\Rightarrow S'(t) = 4 - t^{2}" },
            { verbal_explanation: "השוואת נגזרת פונקציית השטח לאפס למציאת קיצון פוטנציאלי בו המגמה עלולה להתהפך משטח חיובי לשלילי.", math_expression: "4 - t^{2} = 0" },
            { verbal_explanation: "חילוץ שורשי המשוואה הריבועית הפשוטה.", math_expression: "t^{2} = 4 \\Rightarrow t = \\pm 2" },
            { verbal_explanation: "הסתמכות על הגדרת התחום בשאלה המחייב ערך חיובי בלבד וסינון התוצאה השלילית מן המערכת המרחבית.", math_expression: "t > 0 \\Rightarrow t = 2" },
            { verbal_explanation: "זיהוי מגמה: השטח הפנימי מוסיף חיוב (מעל הציר) עד שמגיע לחיתוך באופק בנקודה זו, ואז מתחיל לחסר. מכאן שזהו המקסימום.", math_expression: "Max = 2" }
        ],
        final_answer: "t = 2"
    }
];