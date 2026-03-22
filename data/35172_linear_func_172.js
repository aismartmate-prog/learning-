// ========================================================================
// שאלון 35172 | נושא: פונקציה קווית וגיאומטריה אנליטית (linear_func_172)
// גרסה 1.0 - קובץ מאסטר מקיף (50 שאלות מלאות)
// חסין RTL/LTR, איורי פרימיום משובצים ישירות, אפס מילים בתיבות מתמטיקה!
// ========================================================================

const questionsDB = [

    // ==========================================================
    // תת נושא 1: מושג הפונקציה (טבלה וגרף)
    // ==========================================================
    {
        topic: "linear_func_172",
        subTopic: "מושג הפונקציה (טבלה וגרף)",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>פונקציה קווית עוברת דרך הנקודות שבטבלה. נתון כי עבור <bdi>x = 1</bdi> מקבלים <bdi>y = 5</bdi>, ועבור <bdi>x = 2</bdi> מקבלים <bdi>y = 8</bdi>. מה יהיה ערך הפונקציה <bdi>y</bdi> כאשר נציב <bdi>x = 4</bdi>?</div><div dir='ltr' style='display:flex; justify-content:center;'><svg viewBox='0 0 300 150' width='300' height='150' style='background:#f8fafc; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); border:1px solid #cbd5e1;'><path d='M0 25h300M0 50h300M0 75h300M0 100h300M0 125h300M50 0v150M100 0v150M150 0v150M200 0v150M250 0v150' stroke='#e2e8f0'/><path d='M150 0v150M0 100h300' stroke='#94a3b8' stroke-width='2'/><line x1='50' y1='140' x2='250' y2='20' stroke='#3b82f6' stroke-width='3'/><circle cx='100' cy='110' r='4' fill='#0f172a'/><circle cx='150' cy='80' r='4' fill='#0f172a'/></svg></div>",
        options: ["14", "11", "15", "12"],
        correctAnswer: 0,
        hint: "בדקו בכמה גדל ערך הפונקציה כאשר המשתנה האופקי גדל ביחידה אחת. זוהי מדרגת השינוי.",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את קצב השינוי. נבדוק את ההפרש בערכים האנכיים כאשר המשתנה גדל מאחד לשתיים.", math_expression: "8 - 5 = 3" },
            { verbal_explanation: "שלב ב': מצאנו שהשיפוע שווה לשלוש. על כל עלייה של יחידה באופק, הפונקציה עולה בשלוש יחידות.", math_expression: "m = 3" },
            { verbal_explanation: "שלב ג': נחשב את ערך הפונקציה במצב שבו המשתנה שווה לשלוש על ידי הוספת שלוש לערך הקודם.", math_expression: "8 + 3 = 11" },
            { verbal_explanation: "שלב ד': נחשב את הערך הסופי עבור המצב המבוקש על ידי הוספת שלוש פעם נוספת.", math_expression: "11 + 3 = 14" }
        ],
        final_answer: "14"
    },
    {
        topic: "linear_func_172",
        subTopic: "מושג הפונקציה (טבלה וגרף)",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>נתונה הפונקציה הקווית שמשוואתה היא: <bdi>y = 4x - 7</bdi>. באיזו נקודה בדיוק חותך גרף הפונקציה את ציר ה-<bdi>y</bdi> במערכת הצירים?</div>",
        options: ["(0, -7)", "(0, 7)", "(-7, 0)", "(4, 0)"],
        correctAnswer: 0,
        hint: "נקודת החיתוך עם הציר האנכי מתקבלת תמיד כאשר מציבים אפס במשתנה האופקי.",
        solution_steps: [
            { verbal_explanation: "שלב א': נקודת חיתוך עם הציר האנכי נמצאת עליו, ולכן ערך המשתנה האופקי שלה הוא אפס תמיד.", math_expression: "x = 0" },
            { verbal_explanation: "שלב ב': נציב את המספר אפס במשוואת הפונקציה הנתונה.", math_expression: "y = 4 \\times 0 - 7" },
            { verbal_explanation: "שלב ג': נבצע את פעולת הכפל שמאפסת את החלק הראשון של הביטוי.", math_expression: "y = 0 - 7" },
            { verbal_explanation: "שלב ד': נחשב את הערך הסופי שמתקבל בחיתוך.", math_expression: "y = -7" },
            { verbal_explanation: "שלב ה': נרשום את התוצאה כזוג סדור המייצג נקודה מדויקת במישור.", math_expression: "(0, -7)" }
        ],
        final_answer: "(0, -7)"
    },
    {
        topic: "linear_func_172",
        subTopic: "מושג הפונקציה (טבלה וגרף)",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>טבלת ערכים מציגה את הנקודות הבאות עבור פונקציה: בנקודה הראשונה <bdi>x = 0</bdi> ו-<bdi>y = 1</bdi>. בנקודה השנייה <bdi>x = 1</bdi> ו-<bdi>y = 3</bdi>. איזו משוואה מייצגת פונקציה זו?</div>",
        options: ["y = 2x + 1", "y = x + 2", "y = 3x + 1", "y = 2x - 1"],
        correctAnswer: 0,
        hint: "האיבר החופשי הוא ערך הפונקציה כאשר המשתנה שווה לאפס. השיפוע הוא הפרש הערכים חלקי המרחק.",
        solution_steps: [
            { verbal_explanation: "שלב א': מתוך הטבלה שקראנו, כאשר המשתנה שווה אפס, ערך הפונקציה הוא אחד. זהו האיבר החופשי.", math_expression: "b = 1" },
            { verbal_explanation: "שלב ב': נחשב את קצב השינוי. כאשר הערך האופקי עולה באחד, הערך האנכי עולה מאחד לשלוש.", math_expression: "3 - 1 = 2" },
            { verbal_explanation: "שלב ג': מכאן שהגדרנו במדויק את השיפוע של הפונקציה.", math_expression: "m = 2" },
            { verbal_explanation: "שלב ד': נרכיב את משוואת הישר המלאה מתוך השיפוע והאיבר החופשי שמצאנו.", math_expression: "y = 2 \\times x + 1" }
        ],
        final_answer: "y = 2x + 1"
    },
    {
        topic: "linear_func_172",
        subTopic: "מושג הפונקציה (טבלה וגרף)",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>נתונה המשוואה הבאה: <bdi>y = -3x + 15</bdi>. עבור איזה ערך של המשתנה <bdi>x</bdi>, הפונקציה מתאפסת (כלומר מקבלת את הערך אפס)?</div>",
        options: ["5", "-5", "15", "3"],
        correctAnswer: 0,
        hint: "נקודת האפס היא הנקודה שבה הפונקציה חותכת את הציר האופקי, ולכן מציבים אפס בערכה.",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב אפס במקום ערך הפונקציה במשוואה הנתונה בשאלה.", math_expression: "0 = -3 \\times x + 15" },
            { verbal_explanation: "שלב ב': נעביר את המשתנה השלילי לאגף השמאלי של המשוואה כדי שיהפוך לחיובי ויקל עלינו.", math_expression: "3 \\times x = 15" },
            { verbal_explanation: "שלב ג': נחלק את שני צידי המשוואה בשלוש כדי לבודד את הנעלם המבוקש.", math_expression: "x = 15 : 3" },
            { verbal_explanation: "שלב ד': נחשב את התוצאה הסופית של החילוק.", math_expression: "x = 5" }
        ],
        final_answer: "5"
    },
    {
        topic: "linear_func_172",
        subTopic: "מושג הפונקציה (טבלה וגרף)",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>גרף של פונקציה קווית עובר דרך ראשית הצירים <bdi>(0, 0)</bdi> ודרך הנקודה <bdi>(4, 12)</bdi>. מה יהיה ערך הפונקציה <bdi>y</bdi> כאשר נציב <bdi>x = 10</bdi>?</div><div dir='ltr' style='display:flex; justify-content:center;'><svg viewBox='0 0 300 150' width='300' height='150' style='background:#f8fafc; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); border:1px solid #cbd5e1;'><path d='M0 25h300M0 50h300M0 75h300M0 100h300M0 125h300M50 0v150M100 0v150M150 0v150M200 0v150M250 0v150' stroke='#e2e8f0'/><path d='M150 0v150M0 100h300' stroke='#94a3b8' stroke-width='2'/><line x1='150' y1='100' x2='250' y2='20' stroke='#3b82f6' stroke-width='3'/><circle cx='150' cy='100' r='4' fill='#0f172a'/><circle cx='200' cy='60' r='4' fill='#0f172a'/></svg></div>",
        options: ["30", "40", "24", "36"],
        correctAnswer: 0,
        hint: "ישר העובר בראשית הצירים חסר איבר חופשי. מצאו את השיפוע מתוך הנקודה והציבו.",
        solution_steps: [
            { verbal_explanation: "שלב א': ישר אשר עובר בראשית הצירים מאופיין תמיד בכך שהאיבר החופשי שלו הוא אפס.", math_expression: "b = 0" },
            { verbal_explanation: "שלב ב': נחשב את שיפוע הישר. נחלק את הערך האנכי בערך האופקי של הנקודה הנתונה לנו.", math_expression: "m = 12 : 4" },
            { verbal_explanation: "שלב ג': נחשב את התוצאה עבור השיפוע של הפונקציה היחסית.", math_expression: "m = 3" },
            { verbal_explanation: "שלב ד': נרכיב את משוואת הפונקציה המלאה (המייצגת יחס ישר).", math_expression: "y = 3 \\times x" },
            { verbal_explanation: "שלב ה': נציב את הערך הנתון בתוך המשוואה החדשה ונחשב את התוצאה.", math_expression: "y = 3 \\times 10 = 30" }
        ],
        final_answer: "30"
    },
    {
        topic: "linear_func_172",
        subTopic: "מושג הפונקציה (טבלה וגרף)",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>הנקודה שבה <bdi>x = a</bdi> ו- <bdi>y = 9</bdi> נמצאת על גרף הפונקציה: <bdi>y = 4x - 3</bdi>. מהו ערכו של הנעלם <bdi>a</bdi>?</div>",
        options: ["3", "2", "4", "5"],
        correctAnswer: 0,
        hint: "כדי למצוא קואורדינטה חסרה, מציבים את הנתונים הידועים בתוך משוואת הישר ופותרים.",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב את המספר תשע במקום ערך הפונקציה ואת הנעלם במקום המשתנה האופקי.", math_expression: "9 = 4 \\times a - 3" },
            { verbal_explanation: "שלב ב': נוסיף שלוש לשני אגפי המשוואה כדי לבודד את איבר הנעלם.", math_expression: "12 = 4 \\times a" },
            { verbal_explanation: "שלב ג': נחלק בארבע את המשוואה כולה.", math_expression: "a = 12 : 4" },
            { verbal_explanation: "שלב ד': נחשב את התוצאה ונקבל את הערך החסר.", math_expression: "a = 3" }
        ],
        final_answer: "3"
    },
    {
        topic: "linear_func_172",
        subTopic: "מושג הפונקציה (טבלה וגרף)",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>נתונות שתי פונקציות. פונקציה א': <bdi>y = 2x + 5</bdi>. פונקציה ב': <bdi>y = 4x - 1</bdi>. עבור איזה ערך של <bdi>x</bdi> שתי הפונקציות מקבלות בדיוק את אותו ערך?</div>",
        options: ["3", "2", "4", "1"],
        correctAnswer: 0,
        hint: "השוו את שני הביטויים של הפונקציות זה לזה ופתרו את המשוואה שנוצרה.",
        solution_steps: [
            { verbal_explanation: "שלב א': נשווה את הביטוי האלגברי של הפונקציה הראשונה לזה של השנייה.", math_expression: "2 \\times x + 5 = 4 \\times x - 1" },
            { verbal_explanation: "שלב ב': נחסר פעמיים את המשתנה משני האגפים כדי להעביר אגפים.", math_expression: "5 = 2 \\times x - 1" },
            { verbal_explanation: "שלב ג': נוסיף אחד לשני האגפים כדי לבודד לחלוטין את איברי המשתנה.", math_expression: "6 = 2 \\times x" },
            { verbal_explanation: "שלב ד': נחלק בשתיים למציאת נקודת המפגש המשותפת של שתי הפונקציות.", math_expression: "x = 3" }
        ],
        final_answer: "3"
    },
    {
        topic: "linear_func_172",
        subTopic: "מושג הפונקציה (טבלה וגרף)",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>איזה מהתיאורים הבאים מתאים לפונקציה קווית שהאיבר החופשי שלה חיובי (<bdi>b > 0</bdi>) והשיפוע שלה שלילי (<bdi>m < 0</bdi>)?</div><div dir='ltr' style='display:flex; justify-content:center;'><svg viewBox='0 0 300 150' width='300' height='150' style='background:#f8fafc; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); border:1px solid #cbd5e1;'><path d='M0 25h300M0 50h300M0 75h300M0 100h300M0 125h300M50 0v150M100 0v150M150 0v150M200 0v150M250 0v150' stroke='#e2e8f0'/><path d='M150 0v150M0 100h300' stroke='#94a3b8' stroke-width='2'/><line x1='50' y1='20' x2='250' y2='140' stroke='#ef4444' stroke-width='3'/></svg></div>",
        options: ["חותכת ציר אנכי מעל לאפס ויורדת משמאל לימין", "חותכת ציר אנכי מתחת לאפס ויורדת משמאל לימין", "עוברת בראשית הצירים ועולה משמאל לימין", "חותכת ציר אנכי מעל לאפס ועולה משמאל לימין"],
        correctAnswer: 0,
        hint: "שיפוע שלילי משמעותו פונקציה יורדת. איבר חופשי חיובי משמעותו חיתוך הציר האנכי מעל לאפס.",
        solution_steps: [
            { verbal_explanation: "שלב א': איבר חופשי חיובי אומר שהגרף חותך את הציר האנכי במספר הגדול מאפס (כלומר בחלקו העליון).", math_expression: "b > 0" },
            { verbal_explanation: "שלב ב': שיפוע שלילי אומר שככל שמתקדמים בציר האופקי, הערך האנכי קטן. זוהי פונקציה יורדת.", math_expression: "m < 0" }
        ],
        final_answer: "חותכת ציר אנכי מעל לאפס ויורדת משמאל לימין"
    },
    {
        topic: "linear_func_172",
        subTopic: "מושג הפונקציה (טבלה וגרף)",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>נתונה פונקציה: <bdi>y = 0.5x - 4</bdi>. האם הנקודה ששיעוריה <bdi>(6, -1)</bdi> נמצאת על גרף הפונקציה?</div>",
        options: ["כן", "לא, הערך צריך להיות 1", "לא, הערך צריך להיות -2", "לא, עליה לעבור בראשית"],
        correctAnswer: 0,
        hint: "הציבו את הנתונים במשוואת הפונקציה, ובידקו האם מתקבל פסוק אמת בחשבון.",
        solution_steps: [
            { verbal_explanation: "שלב א': ניקח את הערך האופקי של הנקודה ונציב אותו בתוך משוואת הפונקציה במקום המשתנה.", math_expression: "y = 0.5 \\times 6 - 4" },
            { verbal_explanation: "שלב ב': נחשב תחילה את פעולת הכפל.", math_expression: "y = 3 - 4" },
            { verbal_explanation: "שלב ג': נבצע את פעולת החיסור למציאת הערך האנכי.", math_expression: "y = -1" },
            { verbal_explanation: "שלב ד': התוצאה שקיבלנו שווה לערך הנתון בשאלה, ולכן מתקיים שוויון המעיד שהנקודה על הגרף.", math_expression: "-1 = -1" }
        ],
        final_answer: "כן"
    },
    {
        topic: "linear_func_172",
        subTopic: "מושג הפונקציה (טבלה וגרף)",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>פונקציה קווית מתוארת על ידי המשוואה הכללית: <bdi>3x + 2y = 12</bdi>. מהו שיפוע הפונקציה?</div>",
        options: ["-1.5", "1.5", "3", "-3"],
        correctAnswer: 0,
        hint: "סדרו את המשוואה לצורה המפורשת שבה משתנה הפונקציה מבודד לחלוטין באגף אחד.",
        solution_steps: [
            { verbal_explanation: "שלב א': נרשום את המשוואה המקורית כפי שהיא.", math_expression: "3 \\times x + 2 \\times y = 12" },
            { verbal_explanation: "שלב ב': נעביר את איבר המשתנה האופקי לאגף הימני תוך הפיכת הסימן שלו למינוס.", math_expression: "2 \\times y = -3 \\times x + 12" },
            { verbal_explanation: "שלב ג': נחלק את כל המשוואה בשתיים כדי לבודד לחלוטין את משתנה הפונקציה.", math_expression: "y = -1.5 \\times x + 6" },
            { verbal_explanation: "שלב ד': המקדם של המשתנה האופקי הוא השיפוע המבוקש.", math_expression: "m = -1.5" }
        ],
        final_answer: "-1.5"
    },

    // ==========================================================
    // תת נושא 2: מציאת משוואת ישר (נקודה ושיפוע, או 2 נקודות)
    // ==========================================================
    {
        topic: "linear_func_172",
        subTopic: "מציאת משוואת ישר (נקודה ושיפוע, או 2 נקודות)",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>מצאו את משוואת הישר העובר דרך שתי הנקודות הבאות: הנקודה הראשונה <bdi>(2, 5)</bdi> והשנייה <bdi>(4, 11)</bdi>.</div><div dir='ltr' style='display:flex; justify-content:center;'><svg viewBox='0 0 300 150' width='300' height='150' style='background:#f8fafc; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); border:1px solid #cbd5e1;'><path d='M0 25h300M0 50h300M0 75h300M0 100h300M0 125h300M50 0v150M100 0v150M150 0v150M200 0v150M250 0v150' stroke='#e2e8f0'/><path d='M150 0v150M0 100h300' stroke='#94a3b8' stroke-width='2'/><line x1='100' y1='120' x2='200' y2='20' stroke='#3b82f6' stroke-width='3'/><circle cx='120' cy='100' r='4' fill='#0f172a'/><circle cx='180' cy='40' r='4' fill='#0f172a'/></svg></div>",
        options: ["y = 3x - 1", "y = 3x + 1", "y = 2x + 1", "y = 4x - 3"],
        correctAnswer: 0,
        hint: "חשבו את השיפוע בעזרת נוסחת ההפרשים. לאחר מכן הציבו נקודה אחת במשוואה למציאת האיבר החופשי.",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את השיפוע באמצעות הצבת ערכי הנקודות בנוסחת ההפרשים.", math_expression: "m = \\displaystyle \\frac{11 - 5}{4 - 2}" },
            { verbal_explanation: "שלב ב': נחשב את פעולת החיסור במונה ובמכנה בנפרד.", math_expression: "m = \\displaystyle \\frac{6}{2}" },
            { verbal_explanation: "שלב ג': נחשב את החלוקה כדי למצוא את הערך הסופי של השיפוע.", math_expression: "m = 3" },
            { verbal_explanation: "שלב ד': נרשום את תבנית משוואת הישר עם השיפוע שמצאנו קודם.", math_expression: "y = 3 \\times x + b" },
            { verbal_explanation: "שלב ה': נציב את הנקודה הראשונה לתוך המשוואה למציאת המשתנה החופשי.", math_expression: "5 = 3 \\times 2 + b" },
            { verbal_explanation: "שלב ו': נחשב את פעולת הכפל הפשוטה.", math_expression: "5 = 6 + b" },
            { verbal_explanation: "שלב ז': נחסר שש משני הצדדים ונמצא את הערך.", math_expression: "b = -1" },
            { verbal_explanation: "שלב ח': נרכיב את משוואת הישר הסופית מהמרכיבים שמצאנו.", math_expression: "y = 3 \\times x - 1" }
        ],
        final_answer: "y = 3x - 1"
    },
    {
        topic: "linear_func_172",
        subTopic: "מציאת משוואת ישר (נקודה ושיפוע, או 2 נקודות)",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>ישר בעל שיפוע ששווה למינוס 2, עובר דרך הנקודה בה <bdi>x = 3</bdi> וכן <bdi>y = 4</bdi>. מהי משוואת הישר?</div>",
        options: ["y = -2x + 10", "y = -2x + 6", "y = -2x - 2", "y = 2x - 2"],
        correctAnswer: 0,
        hint: "הציבו את השיפוע הנתון ואת הקואורדינטות של הנקודה במשוואת הישר הכללית.",
        solution_steps: [
            { verbal_explanation: "שלב א': נרשום את תבנית המשוואה תוך שימוש בשיפוע הנתון בשאלה.", math_expression: "y = -2 \\times x + b" },
            { verbal_explanation: "שלב ב': נציב את שיעורי הנקודה בתבנית המשוואה.", math_expression: "4 = -2 \\times 3 + b" },
            { verbal_explanation: "שלב ג': נבצע את פעולת הכפל באגף הימני.", math_expression: "4 = -6 + b" },
            { verbal_explanation: "שלב ד': נוסיף שש לשני האגפים כדי לבודד את המשתנה החופשי.", math_expression: "b = 10" },
            { verbal_explanation: "שלב ה': נרשום את המשוואה בשלמותה על פי התוצאות שהשגנו.", math_expression: "y = -2 \\times x + 10" }
        ],
        final_answer: "y = -2x + 10"
    },
    {
        topic: "linear_func_172",
        subTopic: "מציאת משוואת ישר (נקודה ושיפוע, או 2 נקודות)",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>קו ישר חותך את הציר האנכי בנקודה <bdi>(0, -4)</bdi>, ובנוסף עובר דרך הנקודה <bdi>(5, 6)</bdi>. מהי משוואת הישר?</div>",
        options: ["y = 2x - 4", "y = 2x + 4", "y = x - 4", "y = -2x - 4"],
        correctAnswer: 0,
        hint: "נקודת החיתוך מספקת לנו ישירות את האיבר החופשי. נותר לכם לחשב את השיפוע.",
        solution_steps: [
            { verbal_explanation: "שלב א': נקודת החיתוך המסופקת מגלה לנו מיד את ערכו של האיבר החופשי במשוואה.", math_expression: "b = -4" },
            { verbal_explanation: "שלב ב': נחשב את השיפוע בין שתי הנקודות הנתונות בעזרת נוסחת המרחק.", math_expression: "m = \\displaystyle \\frac{6 - (-4)}{5 - 0}" },
            { verbal_explanation: "שלב ג': חיסור של מספר שלילי הופך לחיבור. נחשב את התוצאה במונה ובמכנה.", math_expression: "m = \\displaystyle \\frac{10}{5}" },
            { verbal_explanation: "שלב ד': נחשב את פעולת החילוק לקבלת השיפוע התקין.", math_expression: "m = 2" },
            { verbal_explanation: "שלב ה': נרכיב את משוואת הישר המשלבת את השיפוע והאיבר החופשי.", math_expression: "y = 2 \\times x - 4" }
        ],
        final_answer: "y = 2x - 4"
    },
    {
        topic: "linear_func_172",
        subTopic: "מציאת משוואת ישר (נקודה ושיפוע, או 2 נקודות)",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>שיפועו של ישר הוא 0.5 והוא עובר דרך הנקודה <bdi>(-4, 2)</bdi>. באיזו נקודה בדיוק חותך ישר זה את ציר ה-<bdi>y</bdi>?</div>",
        options: ["(0, 4)", "(0, 2)", "(0, 0)", "(0, -4)"],
        correctAnswer: 0,
        hint: "נקודת החיתוך שווה לערכו של האיבר החופשי במשוואת הישר.",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב את נתוני השיפוע והנקודה בתוך תבנית משוואת הישר למציאת האיבר החופשי.", math_expression: "2 = 0.5 \\times (-4) + b" },
            { verbal_explanation: "שלב ב': נבצע את פעולת הכפל בין השיפוע לערך האופקי.", math_expression: "2 = -2 + b" },
            { verbal_explanation: "שלב ג': נוסיף שתיים לשני הצדדים כדי לבודד את הנעלם.", math_expression: "b = 4" },
            { verbal_explanation: "שלב ד': האיבר החופשי הוא למעשה ערך הפונקציה כאשר המשתנה שווה לאפס. נרשום את הנקודה הסופית.", math_expression: "(0, 4)" }
        ],
        final_answer: "(0, 4)"
    },
    {
        topic: "linear_func_172",
        subTopic: "מציאת משוואת ישר (נקודה ושיפוע, או 2 נקודות)",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>ישר עובר דרך שתי הנקודות הבאות: <bdi>(3, 8)</bdi> וכן <bdi>(7, 8)</bdi>. מהי המשוואה של הישר הזה?</div>",
        options: ["y = 8", "x = 3", "y = x + 5", "y = 8x"],
        correctAnswer: 0,
        hint: "שימו לב שהערך האנכי זהה לחלוטין בשתי הנקודות. מה המשמעות הגיאומטרית של עובדה זו?",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את השיפוע בעזרת הפרשי הקואורדינטות של שתי הנקודות.", math_expression: "m = \\displaystyle \\frac{8 - 8}{7 - 3}" },
            { verbal_explanation: "שלב ב': נחשב את התוצאה של המונה ושל המכנה בחילוק.", math_expression: "m = \\displaystyle \\frac{0}{4}" },
            { verbal_explanation: "שלב ג': חלוקת אפס בכל מספר נותנת תמיד אפס עגול.", math_expression: "m = 0" },
            { verbal_explanation: "שלב ד': שיפוע ששווה לאפס מציין קו אופקי לחלוטין, בו הערך נשאר קבוע תמיד.", math_expression: "y = 8" }
        ],
        final_answer: "y = 8"
    },
    {
        topic: "linear_func_172",
        subTopic: "מציאת משוואת ישר (נקודה ושיפוע, או 2 נקודות)",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>מצאו את משוואת הישר החותך את ציר ה-<bdi>x</bdi> בנקודה בה <bdi>x = 6</bdi>, ובנוסף חותך את ציר ה-<bdi>y</bdi> בנקודה בה <bdi>y = 18</bdi>.</div>",
        options: ["y = -3x + 18", "y = 3x + 18", "y = -3x - 18", "y = -0.33x + 18"],
        correctAnswer: 0,
        hint: "המירו את הנתונים המילוליים לזוגות סדורים של נקודות במערכת הצירים ופעלו לפי הנוסחה.",
        solution_steps: [
            { verbal_explanation: "שלב א': נרשום את שיעורי הנקודות במדויק לפי נתוני החיתוך שקיבלנו.", math_expression: "(6, 0) \\quad , \\quad (0, 18)" },
            { verbal_explanation: "שלב ב': נקודת החיתוך הידועה עם הציר האנכי נותנת לנו ישירות את האיבר החופשי של המשוואה.", math_expression: "b = 18" },
            { verbal_explanation: "שלב ג': נחשב את השיפוע בין שתי הנקודות.", math_expression: "m = \\displaystyle \\frac{18 - 0}{0 - 6}" },
            { verbal_explanation: "שלב ד': נחשב את המונה והמכנה ונקבל את תוצאת השיפוע השלילי.", math_expression: "m = \\displaystyle \\frac{18}{-6} = -3" },
            { verbal_explanation: "שלב ה': נרכיב את משוואת הישר מתוך המרכיבים המתמטיים שמצאנו עתה.", math_expression: "y = -3 \\times x + 18" }
        ],
        final_answer: "y = -3x + 18"
    },
    {
        topic: "linear_func_172",
        subTopic: "מציאת משוואת ישר (נקודה ושיפוע, או 2 נקודות)",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>ישר עובר דרך ראשית הצירים ודרך הנקודה בה <bdi>x = -2</bdi> ו- <bdi>y = -10</bdi>. מהי משוואת הישר?</div>",
        options: ["y = 5x", "y = -5x", "y = 5x - 2", "y = 0.2x"],
        correctAnswer: 0,
        hint: "ראשית הצירים היא תמיד הנקודה שבה שני הערכים הם אפס. לישר שעובר בה אין איבר חופשי כלל.",
        solution_steps: [
            { verbal_explanation: "שלב א': מכיוון שהישר עובר בראשית הצירים, נקודת החיתוך שלו עם הציר היא אפס בדיוק.", math_expression: "b = 0" },
            { verbal_explanation: "שלב ב': נחשב את השיפוע באמצעות הנקודה הנתונה בבעיה והראשית.", math_expression: "m = \\displaystyle \\frac{-10 - 0}{-2 - 0}" },
            { verbal_explanation: "שלב ג': נבצע את פעולת החילוק של שני המספרים השליליים כדי לקבל תוצאה חיובית.", math_expression: "m = \\displaystyle \\frac{-10}{-2} = 5" },
            { verbal_explanation: "שלב ד': נרשום את משוואת הישר הסופית והמלאה.", math_expression: "y = 5 \\times x" }
        ],
        final_answer: "y = 5x"
    },
    {
        topic: "linear_func_172",
        subTopic: "מציאת משוואת ישר (נקודה ושיפוע, או 2 נקודות)",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>מצאו את משוואת הישר העובר דרך שתי הנקודות הבאות: <bdi>(10, 25)</bdi> ו- <bdi>(15, 35)</bdi>.</div>",
        options: ["y = 2x + 5", "y = 2x - 5", "y = x + 15", "y = 2.5x"],
        correctAnswer: 0,
        hint: "חשבו את השיפוע תחילה ולאחר מכן הציבו את אחת הנקודות במשוואת הישר.",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את השיפוע בעזרת מציאת ההפרשים של הנקודות הנתונות.", math_expression: "m = \\displaystyle \\frac{35 - 25}{15 - 10}" },
            { verbal_explanation: "שלב ב': נחשב את השבר כדי למצוא את השיפוע החיובי.", math_expression: "m = \\displaystyle \\frac{10}{5} = 2" },
            { verbal_explanation: "שלב ג': נציב את הנקודה הראשונה והשיפוע שמצאנו בתוך תבנית המשוואה הכללית.", math_expression: "25 = 2 \\times 10 + b" },
            { verbal_explanation: "שלב ד': נחשב את תוצאת הכפל שנוצרה במשוואה.", math_expression: "25 = 20 + b" },
            { verbal_explanation: "שלב ה': נחסר את המספר עשרים כדי לבודד את האיבר החופשי.", math_expression: "b = 5" },
            { verbal_explanation: "שלב ו': נרשום את המשוואה המלאה והסופית של הישר הנדון.", math_expression: "y = 2 \\times x + 5" }
        ],
        final_answer: "y = 2x + 5"
    },
    {
        topic: "linear_func_172",
        subTopic: "מציאת משוואת ישר (נקודה ושיפוע, או 2 נקודות)",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>ישר בעל שיפוע השווה ל-4 עובר דרך הנקודה <bdi>(-1, -1)</bdi>. היכן חותך ישר זה את ציר ה-<bdi>x</bdi>?</div>",
        options: ["(-0.75, 0)", "(0.75, 0)", "(0, 3)", "(3, 0)"],
        correctAnswer: 0,
        hint: "מצאו את משוואת הישר המלאה תחילה, ולאחר מכן הציבו אפס בערך הפונקציה.",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב את השיפוע והנקודה שקיבלנו למציאת האיבר החופשי במשוואת הישר.", math_expression: "-1 = 4 \\times (-1) + b" },
            { verbal_explanation: "שלב ב': נבצע את פעולת הכפל של המספרים בחלק הימני.", math_expression: "-1 = -4 + b" },
            { verbal_explanation: "שלב ג': נוסיף 4 לשני האגפים של המשוואה כדי לבודד את המשתנה החסר.", math_expression: "b = 3" },
            { verbal_explanation: "שלב ד': נרכיב את משוואת הישר המלאה בהתאם לנתונים שגילינו.", math_expression: "y = 4 \\times x + 3" },
            { verbal_explanation: "שלב ה': כדי למצוא את נקודת החיתוך הרצויה, נציב אפס במשוואה.", math_expression: "0 = 4 \\times x + 3" },
            { verbal_explanation: "שלב ו': נעביר אגפים ונחלק ב-4 את המשוואה כולה.", math_expression: "-4 \\times x = 3 \\quad \\Rightarrow \\quad x = -0.75" },
            { verbal_explanation: "שלב ז': נרשום את שיעורי הנקודה הסופית כזוג סדור תקין וברור.", math_expression: "(-0.75, 0)" }
        ],
        final_answer: "(-0.75, 0)"
    },
    {
        topic: "linear_func_172",
        subTopic: "מציאת משוואת ישר (נקודה ושיפוע, או 2 נקודות)",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>משוואת ישר מסוימת היא: <bdi>x + 2y = 8</bdi>. ידוע כי הישר עובר גם דרך נקודה שבה <bdi>x = 4</bdi> וכן <bdi>y = k</bdi>. מהו ערכו של הפרמטר החסר <bdi>k</bdi>?</div>",
        options: ["2", "4", "0", "-2"],
        correctAnswer: 0,
        hint: "הציבו את שיעור המשתנה האופקי במשוואה הנתונה כדי לחלץ את שיעור הפונקציה בנקודה.",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב 4 במקום המשתנה ואת האות במקום הפונקציה במשוואה המקורית.", math_expression: "4 + 2 \\times k = 8" },
            { verbal_explanation: "שלב ב': נחסר 4 משני צידי המשוואה כדי לבודד את הביטוי הכולל את הנעלם.", math_expression: "2 \\times k = 4" },
            { verbal_explanation: "שלב ג': נחלק בשתיים למציאת הערך הנסתר והסופי של הבעיה.", math_expression: "k = 2" }
        ],
        final_answer: "2"
    },

    // ==========================================================
    // תת נושא 3: ישרים מקבילים ומאונכים
    // ==========================================================
    {
        topic: "linear_func_172",
        subTopic: "ישרים מקבילים ומאונכים",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>מצאו את משוואת הישר המקביל לישר שמשוואתו היא: <bdi>y = 3x - 5</bdi>, ועובר דרך הנקודה <bdi>(2, 10)</bdi>.</div><div dir='ltr' style='display:flex; justify-content:center;'><svg viewBox='0 0 300 150' width='300' height='150' style='background:#f8fafc; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); border:1px solid #cbd5e1;'><path d='M0 25h300M0 50h300M0 75h300M0 100h300M0 125h300M50 0v150M100 0v150M150 0v150M200 0v150M250 0v150' stroke='#e2e8f0'/><path d='M150 0v150M0 100h300' stroke='#94a3b8' stroke-width='2'/><line x1='100' y1='140' x2='200' y2='20' stroke='#10b981' stroke-width='3'/><line x1='140' y1='140' x2='240' y2='20' stroke='#10b981' stroke-width='3'/></svg></div>",
        options: ["y = 3x + 4", "y = 3x - 4", "y = -0.33x + 10", "y = 3x + 10"],
        correctAnswer: 0,
        hint: "ישרים המקבילים זה לזה במערכת הצירים הם תמיד בעלי שיפוע זהה לחלוטין.",
        solution_steps: [
            { verbal_explanation: "שלב א': לישרים מקבילים יש את אותו השיפוע בדיוק. מתוך המשוואה הנתונה נזהה שהשיפוע המקורי הוא 3.", math_expression: "m = 3" },
            { verbal_explanation: "שלב ב': נציב את השיפוע שמצאנו ואת הנקודה החדשה הנתונה בתבנית המשוואה הכללית למציאת האיבר החופשי.", math_expression: "10 = 3 \\times 2 + b" },
            { verbal_explanation: "שלב ג': נחשב את התוצאה של פעולת הכפל הפשוטה.", math_expression: "10 = 6 + b" },
            { verbal_explanation: "שלב ד': נחסר 6 למציאת החיתוך עם הציר האנכי המאפשר את השלמת המשוואה.", math_expression: "b = 4" },
            { verbal_explanation: "שלב ה': נרכיב את משוואת הישר המקביל החדש שאנו מחפשים כעת.", math_expression: "y = 3 \\times x + 4" }
        ],
        final_answer: "y = 3x + 4"
    },
    {
        topic: "linear_func_172",
        subTopic: "ישרים מקבילים ומאונכים",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>מהו שיפועו של ישר המאונך לישר שמשוואתו היא: <bdi>y = 2x + 1</bdi>?</div><div dir='ltr' style='display:flex; justify-content:center;'><svg viewBox='0 0 300 150' width='300' height='150' style='background:#f8fafc; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); border:1px solid #cbd5e1;'><path d='M0 25h300M0 50h300M0 75h300M0 100h300M0 125h300M50 0v150M100 0v150M150 0v150M200 0v150M250 0v150' stroke='#e2e8f0'/><path d='M150 0v150M0 100h300' stroke='#94a3b8' stroke-width='2'/><line x1='100' y1='140' x2='200' y2='20' stroke='#3b82f6' stroke-width='3'/><line x1='100' y1='20' x2='200' y2='103.3' stroke='#ef4444' stroke-width='3'/><rect x='140' y='65' width='10' height='10' fill='none' stroke='#0f172a' stroke-width='1.5' transform='rotate(39.8 150 80)'/></svg></div>",
        options: ["-0.5", "0.5", "-2", "2"],
        correctAnswer: 0,
        hint: "מכפלת השיפועים של ישרים המאונכים זה לזה במישור שווה תמיד למינוס אחד.",
        solution_steps: [
            { verbal_explanation: "שלב א': נזהה את שיפוע הישר המקורי מתוך המשוואה הנתונה בשאלה שאותה קיבלנו.", math_expression: "m_1 = 2" },
            { verbal_explanation: "שלב ב': נרשום את הכלל המתמטי המלא עבור שיפועים המאונכים זה לזה בתור משוואה.", math_expression: "m_1 \\times m_2 = -1" },
            { verbal_explanation: "שלב ג': נציב את השיפוע המוכר לנו ונרשום משוואה פשוטה למציאת השיפוע השני.", math_expression: "2 \\times m_2 = -1" },
            { verbal_explanation: "שלב ד': נחלק ב-2 למציאת התוצאה הסופית של השיפוע המאונך.", math_expression: "m_2 = -0.5" }
        ],
        final_answer: "-0.5"
    },
    {
        topic: "linear_func_172",
        subTopic: "ישרים מקבילים ומאונכים",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>האם הישרים הבאים מאונכים זה לזה? הישר הראשון: <bdi>y = 4x - 7</bdi>. הישר השני: <bdi>y = -0.25x + 2</bdi>.</div>",
        options: ["כן", "לא", "רק בנקודת החיתוך", "אי אפשר לדעת"],
        correctAnswer: 0,
        hint: "כדי לדעת אם ישרים מאונכים במדויק, עליכם לבדוק האם מכפלת השיפועים שלהם שווה למינוס אחד.",
        solution_steps: [
            { verbal_explanation: "שלב א': נזהה את שני השיפועים מתוך המשוואות הנתונות לנו בבעיה להלן.", math_expression: "m_1 = 4 \\quad , \\quad m_2 = -0.25" },
            { verbal_explanation: "שלב ב': נכפיל את שני השיפועים שמצאנו זה בזה ונחשב את התוצאה החשבונית המדויקת.", math_expression: "4 \\times (-0.25) = -1" },
            { verbal_explanation: "שלב ג': מכיוון שמכפלת השיפועים היא בדיוק מינוס אחד, המסקנה הברורה היא שהישרים אכן מאונכים זה לזה. נרשום את אישור השוויון כהוכחה מתמטית.", math_expression: "-1 = -1" }
        ],
        final_answer: "כן"
    },
    {
        topic: "linear_func_172",
        subTopic: "ישרים מקבילים ומאונכים",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>מצאו את משוואת הישר המקביל לישר הבא: <bdi>2y = 6x + 4</bdi>, והעובר דרך ראשית הצירים.</div>",
        options: ["y = 3x", "y = 6x", "y = 3x + 2", "y = -0.33x"],
        correctAnswer: 0,
        hint: "סדרו קודם את המשוואה המקורית למבנה מפורש קריא, ואז השתמשו בתכונה של ישר העובר דרך ראשית הצירים בחלקו השני של הפתרון.",
        solution_steps: [
            { verbal_explanation: "שלב א': נחלק את המשוואה המקורית ב-2 כדי לבודד את משתנה הפונקציה, ולזהות בבירור את השיפוע האמיתי שמוסתר.", math_expression: "y = 3 \\times x + 2" },
            { verbal_explanation: "שלב ב': השיפוע האמיתי הוא 3. לישר המקביל יהיה בדיוק את אותו השיפוע בעקבות חוקי ההקבלה.", math_expression: "m = 3" },
            { verbal_explanation: "שלב ג': ישר שעובר בראשית הצירים תמיד חותך באפס ולכן אינו מכיל איבר חופשי במשוואתו.", math_expression: "b = 0" },
            { verbal_explanation: "שלב ד': נרכיב את משוואת הישר המקביל המבוקש מתוך כלל הנתונים שאספנו.", math_expression: "y = 3 \\times x" }
        ],
        final_answer: "y = 3x"
    },
    {
        topic: "linear_func_172",
        subTopic: "ישרים מקבילים ומאונכים",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>מצאו את משוואת הישר המאונך לישר שמשוואתו <bdi>y = (1/3)x + 2</bdi>, ועובר דרך הנקודה <bdi>(1, 4)</bdi>.</div>",
        options: ["y = -3x + 7", "y = 3x + 1", "y = -3x + 1", "y = -0.33x + 4"],
        correctAnswer: 0,
        hint: "השיפוע המקורי הוא שבר חיובי. הפכו את הסימן ואת השבר כדי למצוא את השיפוע המאונך המהופך.",
        solution_steps: [
            { verbal_explanation: "שלב א': נזהה את השיפוע של הישר המקורי כפי שנתון בבעיה.", math_expression: "m_1 = \\displaystyle \\frac{1}{3}" },
            { verbal_explanation: "שלב ב': נחשב את השיפוע של הישר המאונך לו (מספר הופכי ונגדי בסימנו המתמטי).", math_expression: "m_2 = -3" },
            { verbal_explanation: "שלב ג': נציב את השיפוע החדש ואת הנקודה הנתונה בתבנית משוואת הישר הרגילה.", math_expression: "4 = -3 \\times 1 + b" },
            { verbal_explanation: "שלב ד': נחשב את פעולת הכפל באגף הימני כדי לצמצם ביטויים.", math_expression: "4 = -3 + b" },
            { verbal_explanation: "שלב ה': נוסיף 3 לשני הצדדים כדי למצוא את הערך המדויק של האיבר החופשי.", math_expression: "b = 7" },
            { verbal_explanation: "שלב ו': נרשום את המשוואה השלמה של הישר המאונך שגילינו לאחר התהליך.", math_expression: "y = -3 \\times x + 7" }
        ],
        final_answer: "y = -3x + 7"
    },
    {
        topic: "linear_func_172",
        subTopic: "ישרים מקבילים ומאונכים",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>במשולש נתון, קודקוד הבסיס הראשון נמצא בנקודה <bdi>(0, 0)</bdi> והשני בנקודה <bdi>(4, 2)</bdi>. מצאו את משוואת הגובה היורד אל צלע זו, אם נתון שהגובה עובר גם בנקודה <bdi>(1, 5)</bdi>.</div>",
        options: ["y = -2x + 7", "y = 2x + 3", "y = 0.5x + 4.5", "y = -0.5x + 5.5"],
        correctAnswer: 0,
        hint: "הגובה למשולש תמיד מאונך לצלע שעליה הוא יורד. לכן, עליכם למצוא את שיפוע הבסיס קודם לכן.",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את שיפוע צלע הבסיס בעזרת שתי נקודות הקצה שלה שניתנו בגוף השאלה.", math_expression: "m_1 = \\displaystyle \\frac{2 - 0}{4 - 0}" },
            { verbal_explanation: "שלב ב': נחשב את המונה ואת המכנה כדי להגיע לשבר פשוט יותר המייצג את שיפוע הבסיס.", math_expression: "m_1 = \\displaystyle \\frac{2}{4} = 0.5" },
            { verbal_explanation: "שלב ג': הגובה מאונך לבסיס, לכן השיפוע שלו יהיה הופכי ונגדי לשיפוע שחישבנו כרגע למעלה.", math_expression: "m_2 = -2" },
            { verbal_explanation: "שלב ד': נציב את שיפוע הגובה והנקודה דרכה הוא עובר במשוואת הישר למציאת האיבר החסר.", math_expression: "5 = -2 \\times 1 + b" },
            { verbal_explanation: "שלב ה': נחשב את הכפל ונוסיף שתיים לבידוד המשתנה המבוקש כדי למצוא את ערכו.", math_expression: "5 = -2 + b \\quad \\Rightarrow \\quad b = 7" },
            { verbal_explanation: "שלב ו': נרכיב את משוואת הגובה למשולש בהתאם לכל הנתונים שמצאנו עד כה.", math_expression: "y = -2 \\times x + 7" }
        ],
        final_answer: "y = -2x + 7"
    },
    {
        topic: "linear_func_172",
        subTopic: "ישרים מקבילים ומאונכים",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>במקבילית, משוואת צלע אחת היא: <bdi>y = 2x - 3</bdi>. הצלע הנגדית לה עוברת דרך הנקודה <bdi>(-1, 4)</bdi>. מהי משוואת הצלע הנגדית האמורה?</div>",
        options: ["y = 2x + 6", "y = -2x + 2", "y = 2x - 6", "y = 0.5x + 4.5"],
        correctAnswer: 0,
        hint: "צלעות נגדיות במקבילית תמיד מקבילות זו לזו במרחב, ולכן שיפועיהן בהכרח שווים זה לזה.",
        solution_steps: [
            { verbal_explanation: "שלב א': נזהה את שיפוע הצלע הנתונה. הצלע הנגדית לה מקבילה ותקבל את אותו השיפוע בדיוק מוחלט.", math_expression: "m = 2" },
            { verbal_explanation: "שלב ב': נציב את השיפוע המשותף ואת הנקודה הנתונה של הצלע השנייה בתוך תבנית המשוואה להמשך פתרון.", math_expression: "4 = 2 \\times (-1) + b" },
            { verbal_explanation: "שלב ג': נחשב את הכפל של המספר החיובי והמספר השלילי יחד לפי חוקי החשבון.", math_expression: "4 = -2 + b" },
            { verbal_explanation: "שלב ד': נוסיף 2 לשני הצדדים כדי למצוא את החיתוך עם הציר ולסיים את בידוד המשתנה.", math_expression: "b = 6" },
            { verbal_explanation: "שלב ה': נרשום את משוואת הצלע המקבילה בשלמותה ותקינותה.", math_expression: "y = 2 \\times x + 6" }
        ],
        final_answer: "y = 2x + 6"
    },
    {
        topic: "linear_func_172",
        subTopic: "ישרים מקבילים ומאונכים",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>מצאו את משוואת הישר המקביל לציר ה-<bdi>x</bdi> והעובר דרך הנקודה <bdi>(4, -7)</bdi> במערכת.</div>",
        options: ["y = -7", "x = 4", "y = -7x", "y = 4"],
        correctAnswer: 0,
        hint: "ישר המקביל לציר האופקי הוא למעשה ישר אופקי לחלוטין מצידו. מה זה אומר על השיפוע שלו ביחס לצירים?",
        solution_steps: [
            { verbal_explanation: "שלב א': קו אופקי המקביל לציר האופקי מאופיין תמיד בשיפוע אפס עקב היעדר שינוי אנכי.", math_expression: "m = 0" },
            { verbal_explanation: "שלב ב': מכיוון שאין כל עלייה או ירידה בקו, ערך הפונקציה נשאר קבוע לכל אורך הקו, בדיוק כפי שהוא מוגדר בנקודה שהתקבלה.", math_expression: "y = -7" }
        ],
        final_answer: "y = -7"
    },
    {
        topic: "linear_func_172",
        subTopic: "ישרים מקבילים ומאונכים",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>מצאו את משוואת הישר המקביל לישר: <bdi>y = -x + 8</bdi>, והעובר דרך הנקודה המסומנת כ- <bdi>(5, 5)</bdi>.</div>",
        options: ["y = -x + 10", "y = -x + 8", "y = x", "y = x + 10"],
        correctAnswer: 0,
        hint: "השיפוע הוא המקדם של המשתנה. במקרה זה מדובר במספר מינוס אחד השמור ללא שינוי בהקבלה.",
        solution_steps: [
            { verbal_explanation: "שלב א': נזהה את השיפוע מתוך המשוואה הקיימת, ונעביר אותו לישר החדש כי הם ישרים מקבילים שאינם נחתכים.", math_expression: "m = -1" },
            { verbal_explanation: "שלב ב': נציב את השיפוע השלילי שמצאנו ואת הנקודה המוכרת בתוך משוואה לינארית חדשה וריקה.", math_expression: "5 = -1 \\times 5 + b" },
            { verbal_explanation: "שלב ג': נחשב את תוצאת הכפל שנוצרה.", math_expression: "5 = -5 + b" },
            { verbal_explanation: "שלב ד': נוסיף 5 לשני האגפים למציאת חיתוך הציר האנכי הנדרש להשלמת המשוואה.", math_expression: "b = 10" },
            { verbal_explanation: "שלב ה': נרשום את משוואת הפונקציה היורדת המקבילה בצורתה המלאה והמפורשת לכל קורא.", math_expression: "y = -x + 10" }
        ],
        final_answer: "y = -x + 10"
    },
    {
        topic: "linear_func_172",
        subTopic: "ישרים מקבילים ומאונכים",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>מהו שיפועו של הישר המאונך לישר שמשוואתו ידועה לנו כדלהלן: <bdi>3y - x = 9</bdi>?</div>",
        options: ["-3", "3", "0.33", "-0.33"],
        correctAnswer: 0,
        hint: "סדרו את המשוואה המקורית תחילה כדי שתהיה מפורשת, בודדו את המשתנה הרלוונטי, ואז מצאו את השיפוע ההופכי והנגדי לו במדויק.",
        solution_steps: [
            { verbal_explanation: "שלב א': נעביר את המשתנה האופקי אל האגף הימני של המשוואה הנתונה כדי להתחיל לבודד איברים מסודרים.", math_expression: "3 \\times y = x + 9" },
            { verbal_explanation: "שלב ב': נחלק ב-3 את כל איברי המשוואה השלמה כדי לגלות סוף סוף את השיפוע המקורי של הפונקציה האמורה.", math_expression: "y = \\displaystyle \\frac{1}{3} \\times x + 3" },
            { verbal_explanation: "שלב ג': כעת אנו יודעים מהו שיפוע הישר המקורי ללא עוררין או צל של ספק מתמטי.", math_expression: "m_1 = \\displaystyle \\frac{1}{3}" },
            { verbal_explanation: "שלב ד': נחשב את השיפוע של הישר המאונך לו בהסתמך על חוקי האנליטית, שהוא מספר הופכי ונגדי לשיפוע הקודם שחושב.", math_expression: "m_2 = -3" }
        ],
        final_answer: "-3"
    },

    // ==========================================================
    // תת נושא 4: נקודות חיתוך עם הצירים
    // ==========================================================
    {
        topic: "linear_func_172",
        subTopic: "נקודות חיתוך עם הצירים",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>מצאו את נקודת החיתוך עם הציר האופקי של הפונקציה הקווית הבאה בתור: <bdi>y = 3x - 12</bdi>.</div><div dir='ltr' style='display:flex; justify-content:center;'><svg viewBox='0 0 300 150' width='300' height='150' style='background:#f8fafc; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); border:1px solid #cbd5e1;'><path d='M0 25h300M0 50h300M0 75h300M0 100h300M0 125h300M50 0v150M100 0v150M150 0v150M200 0v150M250 0v150' stroke='#e2e8f0'/><path d='M150 0v150M0 100h300' stroke='#94a3b8' stroke-width='2'/><line x1='100' y1='140' x2='200' y2='60' stroke='#ef4444' stroke-width='3'/><circle cx='150' cy='100' r='5' fill='#0f172a'/></svg></div>",
        options: ["(4, 0)", "(0, -12)", "(-4, 0)", "(0, 4)"],
        correctAnswer: 0,
        hint: "כדי למצוא את החיתוך עם הציר האופקי, עלינו להציב אפס בערך הפונקציה במשוואת הישר ולפתור הלאה.",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב 0 במקום משתנה הפונקציה במשוואה הנתונה כדי למצוא נקודת אפס כנדרש.", math_expression: "0 = 3 \\times x - 12" },
            { verbal_explanation: "שלב ב': נעביר את המספר השלילי לאגף השני, וכך הוא יהפוך למספר חיובי לצורך החישוב הבא.", math_expression: "12 = 3 \\times x" },
            { verbal_explanation: "שלב ג': נחלק את המשוואה ב-3 כדי למצוא את ערכו של המשתנה החסר המבוקש בשאלה.", math_expression: "x = 4" },
            { verbal_explanation: "שלב ד': נרשום את התשובה הסופית כזוג סדור שמייצג נקודה על המישור הקרטזי בצורה מלאה.", math_expression: "(4, 0)" }
        ],
        final_answer: "(4, 0)"
    },
    {
        topic: "linear_func_172",
        subTopic: "נקודות חיתוך עם הצירים",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>מצאו את נקודת החיתוך עם ציר ה-<bdi>y</bdi> של הפונקציה המובאת לפניכם בזו הלשון: <bdi>y = -5x + 10</bdi>.</div>",
        options: ["(0, 10)", "(2, 0)", "(0, 2)", "(-2, 0)"],
        correctAnswer: 0,
        hint: "נקודת החיתוך עם הציר האנכי מתקבלת תמיד כאשר מציבים אפס במשתנה האופקי של המשוואה המדוברת.",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב אפס בתוך משוואת הפונקציה על מנת למצוא את חיתוך הציר האנכי התקין.", math_expression: "y = -5 \\times 0 + 10" },
            { verbal_explanation: "שלב ב': פעולת הכפל באפס מאפסת לחלוטין את האיבר הראשון של הביטוי כפי שמצופה מחוקי החשבון.", math_expression: "y = 0 + 10" },
            { verbal_explanation: "שלב ג': נחשב את סכום האיברים שנותרו לאחר האיפוס המוצלח.", math_expression: "y = 10" },
            { verbal_explanation: "שלב ד': נרכיב את הנקודה הסופית לפי הערכים שהצבנו וקיבלנו בתום התהליך המתמטי שהצגנו.", math_expression: "(0, 10)" }
        ],
        final_answer: "(0, 10)"
    },
    {
        topic: "linear_func_172",
        subTopic: "נקודות חיתוך עם הצירים",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>נתונה משוואת הישר: <bdi>2y - 4x = 16</bdi>. מהי נקודת החיתוך של ישר ספציפי זה עם ציר ה-<bdi>x</bdi>?</div>",
        options: ["(-4, 0)", "(0, 8)", "(4, 0)", "(0, -4)"],
        correctAnswer: 0,
        hint: "אין צורך לסדר את המשוואה. פשוט הציבו את הערך האנכי שווה 0 ופתרו למציאת הנעלם השני החסר כעת.",
        solution_steps: [
            { verbal_explanation: "שלב א': עבור חיתוך עם הציר האופקי, נציב אפס במקום הערך האנכי במשוואה הנתונה בשאלה.", math_expression: "2 \\times 0 - 4 \\times x = 16" },
            { verbal_explanation: "שלב ב': האיבר הראשון מתאפס לחלוטין ונעלם מהמשוואה בעקבות הכפל באפס כפי שראינו בשלב הקודם.", math_expression: "-4 \\times x = 16" },
            { verbal_explanation: "שלב ג': נחלק במינוס 4 כדי לבודד את המשתנה הנדרש ולהגיע לפתרון הסופי הרצוי בתרגיל.", math_expression: "x = 16 : (-4)" },
            { verbal_explanation: "שלב ד': נחשב את התוצאה של החלוקה ונקבל את הערך החיובי או השלילי בהתאם.", math_expression: "x = -4" },
            { verbal_explanation: "שלב ה': נרשום את שיעורי הנקודה המלאים כזוג סדור במישור לטובת סיום מוצלח של התרגיל.", math_expression: "(-4, 0)" }
        ],
        final_answer: "(-4, 0)"
    },
    {
        topic: "linear_func_172",
        subTopic: "נקודות חיתוך עם הצירים",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>ישר בעל שיפוע השווה ל-2, עובר בנקודה <bdi>(3, 7)</bdi>. היכן חותך ישר זה את ציר ה-<bdi>y</bdi> האנכי?</div>",
        options: ["(0, 1)", "(1, 0)", "(0, 2)", "(0, 7)"],
        correctAnswer: 0,
        hint: "מצאו קודם את משוואת הישר בשלמותה. החיתוך עם הציר האנכי הוא האיבר החופשי הנקרא בדרך כלל באות המוכרת.",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב את הנקודה והשיפוע בתבנית הישר הכללית כדי למצוא את המשתנה החסר המבוקש בבעיה.", math_expression: "7 = 2 \\times 3 + b" },
            { verbal_explanation: "שלב ב': נחשב את פעולת הכפל באגף הימני כדי לצמצם את הביטוי ולהתקדם לקראת הפתרון המיוחל.", math_expression: "7 = 6 + b" },
            { verbal_explanation: "שלב ג': נחסר 6 משני הצדדים ונמצא את הערך של האיבר החופשי המסתתר בתוך התבנית הכללית.", math_expression: "b = 1" },
            { verbal_explanation: "שלב ד': הערך של איבר זה מייצג בדיוק את נקודת החיתוך (כאשר המשתנה האופקי שווה לאפס תמיד).", math_expression: "(0, 1)" }
        ],
        final_answer: "(0, 1)"
    },
    {
        topic: "linear_func_172",
        subTopic: "נקודות חיתוך עם הצירים",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>מצאו את שיעור המשתנה האופקי של נקודת החיתוך של הישר: <bdi>y = -2x + 18</bdi>, עם ציר ה-<bdi>x</bdi> התחתון.</div>",
        options: ["9", "18", "-9", "-18"],
        correctAnswer: 0,
        hint: "הציבו את הערך אפס במשוואה במקום ערך הפונקציה ובודדו את המשתנה השני כדי לגלות את החיתוך.",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב 0 בערך של משתנה הפונקציה במשוואה הנתונה כדי למצוא את נקודת האפס המבוקשת.", math_expression: "0 = -2 \\times x + 18" },
            { verbal_explanation: "שלב ב': נעביר את איבר המשתנה לאגף השמאלי (הסימן משתנה לחיובי בגלל המעבר מעבר לשוויון החשבוני).", math_expression: "2 \\times x = 18" },
            { verbal_explanation: "שלב ג': נחלק בשתיים למציאת התוצאה החיובית של הנעלם המרכזי בשאלה שהופנתה אלינו עתה.", math_expression: "x = 9" }
        ],
        final_answer: "9"
    },
    {
        topic: "linear_func_172",
        subTopic: "נקודות חיתוך עם הצירים",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>מצאו את נקודת החיתוך (נקודת המפגש המשותפת) בין הישר: <bdi>y = 3x + 6</bdi>, לבין הישר החותך: <bdi>y = -x + 10</bdi>.</div>",
        options: ["(1, 9)", "(2, 8)", "(3, 7)", "(0, 6)"],
        correctAnswer: 0,
        hint: "כדי למצוא חיתוך בין שני ישרים על גבי מערכת צירים, פשוט השוו את שני הביטויים של הפונקציות זה לזה בביטחון.",
        solution_steps: [
            { verbal_explanation: "שלב א': נשווה את שני אגפי המשוואות כדי למצוא את המפגש המדויק שבין הפונקציות הנתונות במערכת.", math_expression: "3 \\times x + 6 = -x + 10" },
            { verbal_explanation: "שלב ב': נוסיף משתנה אחד לשני האגפים ונחסר את המספר שש משני האגפים להפרדה תקינה של האלמנטים.", math_expression: "3 \\times x + x = 10 - 6" },
            { verbal_explanation: "שלב ג': נכנס את האיברים הדומים יחדיו משני האגפים לקראת חלוקה סופית שתקדם אותנו הלאה.", math_expression: "4 \\times x = 4" },
            { verbal_explanation: "שלב ד': נחלק ב-4 ונמצא את ערך הנקודה בציר האופקי של המפגש הנדון בשאלה המורכבת הזו.", math_expression: "x = 1" },
            { verbal_explanation: "שלב ה': נציב את הערך שקיבלנו לאחת המשוואות כדי למצוא את הערך התואם בציר האנכי המקביל לחברו.", math_expression: "y = 3 \\times 1 + 6" },
            { verbal_explanation: "שלב ו': נחשב את התוצאה הסופית ונייצר את הנקודה המושלמת בסיום התהליך האנליטי הממושך שביצענו.", math_expression: "y = 9 \\quad \\Rightarrow \\quad (1, 9)" }
        ],
        final_answer: "(1, 9)"
    },
    {
        topic: "linear_func_172",
        subTopic: "נקודות חיתוך עם הצירים",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>הישר שמשוואתו <bdi>y = -0.75x + 3</bdi> חותך את שני הצירים. מהו המרחק בקווים ישרים (אורך היתר של המשולש שנוצר) בין שתי נקודות החיתוך שלו עם הצירים במרחב?</div>",
        options: ["5", "7", "25", "4"],
        correctAnswer: 0,
        hint: "מצאו את נקודות החיתוך השונות, הן משמשות כניצבים למשולש ישר זווית על הצירים. השתמשו במשפט פיתגורס לחישוב אורך מדויק.",
        solution_steps: [
            { verbal_explanation: "שלב א': נמצא את החיתוך עם הציר האנכי (זהו למעשה האיבר החופשי של המשוואה הנתונה בשאלה המקורית).", math_expression: "(0, 3)" },
            { verbal_explanation: "שלב ב': נמצא חיתוך עם ציר האופק על ידי איפוס המשוואה והצבת אפס בערך הפונקציה כמקובל בלימודים.", math_expression: "0 = -0.75 \\times x + 3" },
            { verbal_explanation: "שלב ג': נעביר אגף ונחלק כדי למצוא את ערך החיתוך החסר שישלים לנו את הניצב השני של המשולש.", math_expression: "0.75 \\times x = 3 \\quad \\Rightarrow \\quad x = 4" },
            { verbal_explanation: "שלב ד': נקודות החיתוך יוצרות משולש ישר זווית שבו הניצבים מונחים על הצירים והם באורכים 3 ו-4 בלבד.", math_expression: "3 \\quad , \\quad 4" },
            { verbal_explanation: "שלב ה': נשתמש במשפט פיתגורס הידוע לחישוב המרחק (היתר של המשולש שנוצר מהחיתוכים שמצאנו בזה הרגע).", math_expression: "3^2 + 4^2 = d^2" },
            { verbal_explanation: "שלב ו': נסכם את החזקות ונוציא שורש ריבועי לקבלת המרחק המדויק המחבר בין קצוות הקטע המבוקש.", math_expression: "9 + 16 = 25 \\quad \\Rightarrow \\quad d = 5" }
        ],
        final_answer: "5"
    },
    {
        topic: "linear_func_172",
        subTopic: "נקודות חיתוך עם הצירים",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>הישר שמשוואתו היא: <bdi>y = ax + 12</bdi> חותך את ציר ה-<bdi>x</bdi> בנקודה <bdi>(-6, 0)</bdi>. מהו ערכו של המקדם החסר המסתתר מאחורי האות במשוואה?</div>",
        options: ["2", "-2", "0.5", "-0.5"],
        correctAnswer: 0,
        hint: "הציבו את שיעורי הנקודה המלאים במשוואה ופתרו למציאת הפרמטר המבוקש.",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב את הנקודה הנתונה בשלמותה בתוך משוואת הישר הכללית על מנת למצוא את המקדם הלא ידוע.", math_expression: "0 = a \\times (-6) + 12" },
            { verbal_explanation: "שלב ב': נעביר את איבר המשתנה לאגף השמאלי, כך שסימנו יתהפך מחיובי לשלילי והפוך בהתאם לחוקי המעבר.", math_expression: "6 \\times a = 12" },
            { verbal_explanation: "שלב ג': נחלק ב-6 כדי לבודד את המקדם המבוקש ולגלות את ערכו האמיתי שמסתתר מאחורי האות שראינו קודם.", math_expression: "a = 2" }
        ],
        final_answer: "2"
    },
    {
        topic: "linear_func_172",
        subTopic: "נקודות חיתוך עם הצירים",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>מהו סכום שיעורי הקואורדינטות (הערכים הלא אפסיים) של שתי נקודות החיתוך של הישר <bdi>y = x - 5</bdi> עם שני הצירים במערכת הצירים הנתונה?</div>",
        options: ["0", "10", "-10", "5"],
        correctAnswer: 0,
        hint: "מצאו את נקודת החיתוך האחת, ואת נקודת החיתוך השנייה, וחברו את המספרים (הלא-אפסיים) שקיבלתם כתוצאה.",
        solution_steps: [
            { verbal_explanation: "שלב א': נמצא את החיתוך עם ציר ה-y על ידי הצבת הערך המתאים במקום המשתנה האופקי במשוואה המקורית.", math_expression: "y = 0 - 5 = -5" },
            { verbal_explanation: "שלב ב': נמצא חיתוך שני על ידי הצבת אפס בערך הפונקציה והעברת אגף לבידוד המשתנה המבוקש בתרגיל.", math_expression: "0 = x - 5 \\quad \\Rightarrow \\quad x = 5" },
            { verbal_explanation: "שלב ג': נחבר את שני הערכים הלא-אפסיים שמצאנו מתוך הנקודות לחשבון אחד פשוט האמור להניב לנו תוצאה סופית מצוינת.", math_expression: "-5 + 5 = 0" }
        ],
        final_answer: "0"
    },
    {
        topic: "linear_func_172",
        subTopic: "נקודות חיתוך עם הצירים",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>ישר מקביל לישר <bdi>y = 2x</bdi>, וחותך את ציר ה-<bdi>y</bdi> בנקודה <bdi>(0, -8)</bdi>. היכן הוא יחתוך את הציר השני (ציר ה-<bdi>x</bdi>)?</div>",
        options: ["(4, 0)", "(-4, 0)", "(8, 0)", "(2, 0)"],
        correctAnswer: 0,
        hint: "בנו קודם את משוואת הישר החדש (אותו שיפוע, איבר חופשי נתון). ואז אפסו את התוצאה למציאת חיתוך אופקי.",
        solution_steps: [
            { verbal_explanation: "שלב א': ישרים מקבילים חולקים את אותו שיפוע במישור, לכן השיפוע של הישר החדש מוגדר וידוע לנו מראש.", math_expression: "m = 2" },
            { verbal_explanation: "שלב ב': חיתוך הציר האנכי המסופק לנו בנתונים מעניק באופן מיידי את האיבר החופשי של הישר המבוקש.", math_expression: "b = -8" },
            { verbal_explanation: "שלב ג': נרכיב את משוואת הישר החדש מתוך הנתונים שאספנו כרגע כדי להמשיך לחלק השני של הפתרון המלא.", math_expression: "y = 2 \\times x - 8" },
            { verbal_explanation: "שלב ד': למציאת החיתוך עם הציר האופקי, נציב אפס בערך הפונקציה ונפתור את המשוואה כפי שלמדנו בכיתה לאחרונה.", math_expression: "0 = 2 \\times x - 8" },
            { verbal_explanation: "שלב ה': נעביר אגפים ונחלק ב-2 למציאת הערך הנדרש להשלמת שיעורי הנקודה שעליה נשאלנו בבעיה זו.", math_expression: "8 = 2 \\times x \\quad \\Rightarrow \\quad x = 4" },
            { verbal_explanation: "שלב ו': נרשום את שיעורי הנקודה הסופית שמצאנו בפתרון בפורמט של זוג סדור בתוך סוגריים עגולים כמקובל בעולם המתמטיקה.", math_expression: "(4, 0)" }
        ],
        final_answer: "(4, 0)"
    },

    // ==========================================================
    // תת נושא 5: תחומי חיוביות ושליליות
    // ==========================================================
    {
        topic: "linear_func_172",
        subTopic: "תחומי חיוביות ושליליות",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>מהו תחום החיוביות של הפונקציה הקווית הבאה המוגדרת כך: <bdi>y = 2x - 10</bdi>?</div><div dir='ltr' style='display:flex; justify-content:center;'><svg viewBox='0 0 300 150' width='300' height='150' style='background:#f8fafc; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); border:1px solid #cbd5e1;'><path d='M0 25h300M0 50h300M0 75h300M0 100h300M0 125h300M50 0v150M100 0v150M150 0v150M200 0v150M250 0v150' stroke='#e2e8f0'/><path d='M150 0v150M0 100h300' stroke='#94a3b8' stroke-width='2'/><path d='M50 140 L150 100' stroke='#ef4444' stroke-width='3'/><path d='M150 100 L250 60' stroke='#10b981' stroke-width='3'/><circle cx='150' cy='100' r='5' fill='#0f172a'/></svg></div>",
        options: ["x > 5", "x < 5", "x > 10", "x < -5"],
        correctAnswer: 0,
        hint: "תחום חיוביות משמעותו שערכי הפונקציה (החלק המיוצג כ-y) הם גדולים מאפס. בנו אי-שוויון תואם לתיאור.",
        solution_steps: [
            { verbal_explanation: "שלב א': נדרוש שהביטוי של הפונקציה כולו יהיה גדול מאפס לצורך עמידה בתנאי חיוביות מלא לכל אורך הדרך.", math_expression: "2 \\times x - 10 > 0" },
            { verbal_explanation: "שלב ב': נעביר את המינוס 10 לאגף הימני, שם הוא יהפוך למספר חיובי ויאפשר לנו להמשיך בפתרון האלגברי הפשוט.", math_expression: "2 \\times x > 10" },
            { verbal_explanation: "שלב ג': נחלק את שני צידי אי-השוויון ב-2 כדי לבודד את המשתנה ולקבל תשובה סופית נכונה וברורה לחלוטין.", math_expression: "x > 5" }
        ],
        final_answer: "x > 5"
    },
    {
        topic: "linear_func_172",
        subTopic: "תחומי חיוביות ושליליות",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>מהו תחום השליליות של הפונקציה היורדת המוגדרת כך: <bdi>y = -3x + 12</bdi>?</div>",
        options: ["x > 4", "x < 4", "x > -4", "x < -4"],
        correctAnswer: 0,
        hint: "הציבו את הפונקציה באי-שוויון הקטן מאפס. מומלץ להעביר את איבר המשתנה השלילי אגף למניעת טעויות סימן מיותרות.",
        solution_steps: [
            { verbal_explanation: "שלב א': נדרוש שהפונקציה תהיה שלילית, כלומר קטנה מאפס תמיד בהתאם להוראות ולשאלות העוסקות בתחומי שליליות בסיסיים.", math_expression: "-3 \\times x + 12 < 0" },
            { verbal_explanation: "שלב ב': נעביר את המשתנה השלילי לאגף ימין בסימן חיובי כדי להימנע מחלוקה במספר שעלול להפוך את כיוון האי שוויון.", math_expression: "12 < 3 \\times x" },
            { verbal_explanation: "שלב ג': נחלק את המשוואה ב-3. המשמעות של התוצאה היא שהמשתנה גדול מארבע כפי שנראה מיד בביטוי האלגברי שלפנינו.", math_expression: "4 < x \\quad \\Rightarrow \\quad x > 4" }
        ],
        final_answer: "x > 4"
    },
    {
        topic: "linear_func_172",
        subTopic: "תחומי חיוביות ושליליות",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>לאילו ערכים הפונקציה המוגדרת כ- <bdi>y = 4x + 16</bdi>, היא אי-שלילית (משמע חיובית או שווה לאפס)?</div>",
        options: ["x \\ge -4", "x > -4", "x \\le 4", "x < 4"],
        correctAnswer: 0,
        hint: "השתמשו בסימן אי-השוויון גדול או שווה כדי לבטא את המונח אי-שליליות בצורה נכונה אלגברית ולמנוע שגיאות ניסוח.",
        solution_steps: [
            { verbal_explanation: "שלב א': נרכיב אי-שוויון עם סימן גדול או שווה לאפס לפי הנדרש בהגדרות הבעיה המתמטית שאנו מנסים לפתור כעת.", math_expression: "4 \\times x + 16 \\ge 0" },
            { verbal_explanation: "שלב ב': נעביר את המספר 16 לאגף הימני של אי-השוויון כך שיהפוך לשלילי ויעזור לנו לבודד את הנעלם בצורה פשוטה.", math_expression: "4 \\times x \\ge -16" },
            { verbal_explanation: "שלב ג': נחלק את הביטוי ב-4 למציאת התשובה הסופית המבוקשת המייצגת את התחום בו הפונקציה שלנו איננה שלילית לעולם.", math_expression: "x \\ge -4" }
        ],
        final_answer: "x \\ge -4"
    },
    {
        topic: "linear_func_172",
        subTopic: "תחומי חיוביות ושליליות",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>נתונות שתי פונקציות: הראשונה היא <bdi>y = x - 2</bdi>, והשנייה היא <bdi>y = -x + 8</bdi>. עבור אילו ערכים שתי הפונקציות חיוביות גם יחד (תנאי של \"וגם\")?</div>",
        options: ["2 < x < 8", "x > 2", "x < 8", "x > 8"],
        correctAnswer: 0,
        hint: "מצאו את התחום החיובי של כל אחת מהפונקציות בנפרד, ואז מצאו את התחום המשותף החופף לשניהם יחד על גבי הציר.",
        solution_steps: [
            { verbal_explanation: "שלב א': נבדוק מתי הפונקציה הראשונה חיובית (גדולה מאפס) על ידי פתרון אי השוויון שלה כפי שלמדנו בשעורי אלגברה.", math_expression: "x - 2 > 0 \\quad \\Rightarrow \\quad x > 2" },
            { verbal_explanation: "שלב ב': נבדוק מתי הפונקציה השנייה חיובית על ידי פתרון אי השוויון שלה תוך זהירות עם הסימנים השליליים המופיעים בה.", math_expression: "-x + 8 > 0 \\quad \\Rightarrow \\quad 8 > x \\quad \\Rightarrow \\quad x < 8" },
            { verbal_explanation: "שלב ג': נאחד את התנאים שמצאנו לתחום משותף אחד בו התנאי הכפול מתקיים בו זמנית בשני המקרים שהוצגו בפנינו כעת.", math_expression: "2 < x < 8" }
        ],
        final_answer: "2 < x < 8"
    },
    {
        topic: "linear_func_172",
        subTopic: "תחומי חיוביות ושליליות",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>פונקציה קווית יורדת חותכת את הציר האנכי בנקודה 6 ואת ציר האופק בנקודה 3. מהו תחום השליליות של פונקציה זו?</div>",
        options: ["x > 3", "x < 3", "x > 6", "x < 6"],
        correctAnswer: 0,
        hint: "בפונקציה יורדת, כל מה שנמצא מימין לנקודת האפס (החיתוך האופקי) יהיה מתחת לציר ולכן הוא שלילי בתכונותיו.",
        solution_steps: [
            { verbal_explanation: "שלב א': נזהה מתוך הנתונים את נקודת החיתוך המאפסת את הפונקציה, שהיא נקודת המעבר שלה מחיוביות לשליליות במערכת הצירים.", math_expression: "x = 3" },
            { verbal_explanation: "שלב ב': מכיוון שהפונקציה מוגדרת כיורדת, לאחר שהיא חוצה את הציר כלפי ימינה, כל הערכים הופכים להיות שליליים תמיד ללא חריגים.", math_expression: "x > 3" }
        ],
        final_answer: "x > 3"
    },
    {
        topic: "linear_func_172",
        subTopic: "תחומי חיוביות ושליליות",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>הפונקציה הלינארית המוגדרת בנוסחה <bdi>y = ax + b</bdi>, חיובית רק עבור ערכים הקטנים ממינוס 2. מה ניתן להסיק בוודאות על המקדם העליון המייצג את השיפוע?</div>",
        options: ["a < 0", "a > 0", "a = 0", "אי אפשר לדעת"],
        correctAnswer: 0,
        hint: "פונקציה שחיובית משמאל לנקודת האפס היא פונקציה שיורדת ממרומים אל מתחת לציר ככל שמתקדמים עם הכיוון החיובי הרגיל.",
        solution_steps: [
            { verbal_explanation: "שלב א': העובדה שהפונקציה חיובית עבור ערכים קטנים ממספר מסוים מעידה על כך שהגרף מתחיל גבוה בצד שמאל, ויורד כלפי מטה כשהוא מתקדם.", math_expression: "x < -2 \\Rightarrow y > 0" },
            { verbal_explanation: "שלב ב': פונקציה בעלת התנהגות כזו היא פונקציה יורדת בהגדרתה, ולכן השיפוע שלה (המקדם הראשון במשוואה) חייב להיות שלילי בסופו של דבר.", math_expression: "a < 0" }
        ],
        final_answer: "a < 0"
    },
    {
        topic: "linear_func_172",
        subTopic: "תחומי חיוביות ושליליות",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>מהו תחום החיוביות המדויק של הפונקציה המוגדרת כך: <bdi>y = -0.5x + 4</bdi>?</div>",
        options: ["x < 8", "x > 8", "x < -8", "x > -8"],
        correctAnswer: 0,
        hint: "פתרו את אי-השוויון. העבירו את האיבר השלילי לאגף ימין כדי למנוע טעויות הקשורות בסימנים בעת ביצוע חלוקה סופית.",
        solution_steps: [
            { verbal_explanation: "שלב א': נדרוש שהפונקציה תהיה גדולה מאפס כדי לענות על דרישת החיוביות של השאלה המוצגת בפנינו במבחן הנוכחי.", math_expression: "-0.5 \\times x + 4 > 0" },
            { verbal_explanation: "שלב ב': נעביר את המשתנה השלילי לאגף השני כך שיקבל סימן פלוס חיובי ויאפשר לנו המשך פתרון חלק וללא שגיאות סימן מעצבנות.", math_expression: "4 > 0.5 \\times x" },
            { verbal_explanation: "שלב ג': נכפיל את שני אגפי המשוואה ב-2 כדי לבטל את השבר ולקבל את התשובה הסופית בצורתה המלאה והברורה ביותר שישנה.", math_expression: "8 > x \\quad \\Rightarrow \\quad x < 8" }
        ],
        final_answer: "x < 8"
    },
    {
        topic: "linear_func_172",
        subTopic: "תחומי חיוביות ושליליות",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>עבור אילו ערכים מתקיים שהפונקציה <bdi>y = 5x - 20</bdi> מקבלת רק ערכים שליליים?</div>",
        options: ["x < 4", "x > 4", "x < -4", "x > -4"],
        correctAnswer: 0,
        hint: "רשמו אי-שוויון פשוט שבו הפונקציה קטנה מאפס ופתרו את הביטוי האלגברי על ידי העברת אגפים ובידוד המשתנה הרלוונטי.",
        solution_steps: [
            { verbal_explanation: "שלב א': נרכיב אי-שוויון לשליליות, כלומר נדרוש שהביטוי יהיה קטן מאפס כפי שמתבקש מהגדרת התחום השלילי של פונקציות לינאריות.", math_expression: "5 \\times x - 20 < 0" },
            { verbal_explanation: "שלב ב': נעביר את המינוס 20 לאגף השני כדי שהוא יהפוך לחיובי ונוכל להתקדם לקראת השלב האחרון בפתרון התרגיל.", math_expression: "5 \\times x < 20" },
            { verbal_explanation: "שלב ג': נחלק ב-5 למציאת התחום הרלוונטי למשתנה שבשאלה ונסיים את המלאכה בהצלחה רבה.", math_expression: "x < 4" }
        ],
        final_answer: "x < 4"
    },
    {
        topic: "linear_func_172",
        subTopic: "תחומי חיוביות ושליליות",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>באיזה תחום מתמטי הפונקציה: <bdi>y = 2x + 4</bdi>, נמצאת ממש מעל לישר האופקי שמשוואתו היא <bdi>y = 10</bdi>?</div>",
        options: ["x > 3", "x < 3", "x > 6", "x < 6"],
        correctAnswer: 0,
        hint: "הדרישה להיות מעל ישר משמעה שערך הפונקציה המשופעת חייב להיות גדול מערכו של הישר באותה נקודה.",
        solution_steps: [
            { verbal_explanation: "שלב א': נדרוש שהפונקציה הקווית הראשונה תהיה גדולה באופן מוחלט מהערך של הישר הקבוע השני כפי שמפורט בנתונים.", math_expression: "2 \\times x + 4 > 10" },
            { verbal_explanation: "שלב ב': נחסר 4 משני האגפים כפי שמקובל בפתרון אי-שוויונות מהסוג הזה על מנת לקדם את בידוד המשתנה.", math_expression: "2 \\times x > 6" },
            { verbal_explanation: "שלב ג': נחלק את הביטוי ב-2 למציאת התחום המסכם את הפתרון הנדרש להשלמת השאלה הזו.", math_expression: "x > 3" }
        ],
        final_answer: "x > 3"
    },
    {
        topic: "linear_func_172",
        subTopic: "תחומי חיוביות ושליליות",
        question_text: "<div dir='rtl' style='margin-bottom:15px;'>ישר עובר דרך הנקודה שהקואורדינטות שלה הן אפס ומינוס 5. ידוע כי שיפועו הוא חיובי ושווה ל-1. מהו תחום השליליות של הישר הזה?</div>",
        options: ["x < 5", "x > 5", "x < -5", "x > -5"],
        correctAnswer: 0,
        hint: "הרכיבו תחילה את משוואת הישר מהנתונים הכתובים, ולאחר מכן בדקו בעזרת אי שוויון מתי היא קטנה מאפס.",
        solution_steps: [
            { verbal_explanation: "שלב א': הנקודה הנתונה היא נקודת החיתוך, לכן היא מהווה את האיבר החופשי של המשוואה הקווית. ביחד עם השיפוע, נרכיב משוואה תקנית.", math_expression: "y = 1 \\times x - 5" },
            { verbal_explanation: "שלב ב': כדי למצוא תחומי שליליות עבורה, נדרוש בהכרח שהמשוואה תהיה קטנה מאפס בכל זמן נתון ובכל מצב.", math_expression: "x - 5 < 0" },
            { verbal_explanation: "שלב ג': נעביר את המספר החופשי לאגף השני למציאת הפתרון ההגיוני הנדרש לסיום המשימה.", math_expression: "x < 5" }
        ],
        final_answer: "x < 5"
    }

];