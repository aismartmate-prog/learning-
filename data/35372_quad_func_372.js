const questionsDB = [
    // ==========================================
    // תת נושא 1: פרבולה (10 שאלות)
    // ==========================================

    // שאלה מספר 1
    {
        topic: "quadratic_function_35372",
        subTopic: "פרבולה",
        question_text: "נתונה הפונקציה הריבועית \\( y = -2x^{2} + 4x + 6 \\). לאיזה כיוון מופנים ענפי הפרבולה (האם היא 'מחייכת' או 'בוכה')?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='150' x2='180' y2='150' stroke='#64748b' stroke-width='2'/><line x1='100' y1='20' x2='100' y2='180' stroke='#64748b' stroke-width='2'/><path d='M 40 180 Q 100 -20 160 180' fill='none' stroke='#ef4444' stroke-width='3'/></svg></div>",
        options: ["כלפי מטה (מקסימום)", "כלפי מעלה (מינימום)", "ימינה", "שמאלה"],
        correctAnswer: 0,
        hint: "כיוון פתיחת הפרבולה נקבע אך ורק על ידי הסימן של המקדם a (המקדם של איקס בריבוע).",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי התבנית הכללית של פונקציה ריבועית.", math_expression: "y = ax^{2} + bx + c" },
            { verbal_explanation: "שלב 2: חילוץ המקדם של האיבר הריבועי (איי) מתוך המשוואה הנתונה.", math_expression: "a = -2" },
            { verbal_explanation: "שלב 3: בדיקת הסימן של המקדם.", math_expression: "-2 < 0" },
            { verbal_explanation: "שלב 4: מקדם שלילי משמעותו שהפרבולה פתוחה כלפי מטה ויש לה נקודת מקסימום.", math_expression: "a < 0" },
            { verbal_explanation: "שלב 5: בחירת התשובה המתאימה מתוך האפשרויות.", math_expression: "1" }
        ],
        final_answer: "כלפי מטה (מקסימום)"
    },

    // שאלה מספר 2
    {
        topic: "quadratic_function_35372",
        subTopic: "פרבולה",
        question_text: "נתונה הפונקציה \\( y = 3x^{2} - 5x + 7 \\). מהו הערך של הפרמטר c בפונקציה זו, ומה משמעותו הגרפית?&rlm;",
        options: ["7, נקודת החיתוך עם ציר y", "-5, נקודת המינימום", "3, רוחב הפרבולה", "7, נקודת החיתוך עם ציר x"],
        correctAnswer: 0,
        hint: "הפרמטר c הוא המספר החופשי (ללא x). כאשר מציבים איקס שווה לאפס, ה-y שמתקבל הוא בדיוק c.",
        solution_steps: [
            { verbal_explanation: "שלב 1: התאמת הפונקציה למבנה הסטנדרטי למציאת המקדמים.", math_expression: "y = ax^{2} + bx + c" },
            { verbal_explanation: "שלב 2: חילוץ הפרמטר החופשי.", math_expression: "c = 7" },
            { verbal_explanation: "שלב 3: בדיקת המשמעות על ידי הצבת איקס שווה אפס בפונקציה.", math_expression: "y = 3 \\times 0^{2} - 5 \\times 0 + 7" },
            { verbal_explanation: "שלב 4: התוצאה היא 7, שהיא נקודת החיתוך עם הציר האנכי.", math_expression: "y = 7" },
            { verbal_explanation: "שלב 5: התשובה הנכונה משלבת את הערך והמשמעות הגרפית.", math_expression: "7" }
        ],
        final_answer: "7, נקודת החיתוך עם ציר y"
    },

    // שאלה מספר 3
    {
        topic: "quadratic_function_35372",
        subTopic: "פרבולה",
        question_text: "מהו הערך של המקדם b בפונקציה הריבועית \\( y = x^{2} - 9 \\)?&rlm;",
        options: ["0", "1", "-9", "9"],
        correctAnswer: 0,
        hint: "הפרמטר b הוא המקדם של ה-x (ממעלה ראשונה). אם אין x בביטוי, המקדם שלו הוא 0.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת הפונקציה בצורתה המלאה, כולל האיבר החסר.", math_expression: "y = 1 \\times x^{2} + 0 \\times x - 9" },
            { verbal_explanation: "שלב 2: השוואה למבנה הכללי של המשוואה הריבועית.", math_expression: "y = ax^{2} + bx + c" },
            { verbal_explanation: "שלב 3: זיהוי מקדם האיבר ממעלה ראשונה.", math_expression: "b = 0" },
            { verbal_explanation: "שלב 4: זוהי פרבולה המוזזת רק אנכית, ללא הזזה אופקית (קודקודה על ציר הוואי).", math_expression: "b = 0" },
            { verbal_explanation: "שלב 5: בחירת התשובה.", math_expression: "0" }
        ],
        final_answer: "0"
    },

    // שאלה מספר 4
    {
        topic: "quadratic_function_35372",
        subTopic: "פרבולה",
        question_text: "שתי פרבולות נתונות: הפונקציה הראשונה \\( y = 2x^{2} \\) והפונקציה השנייה \\( y = 5x^{2} \\). איזו מהטענות הבאות נכונה לגבי הגרפים שלהן?&rlm;",
        options: ["הפרבולה השנייה 'צרה' (תלולה) יותר מהראשונה", "הפרבולה הראשונה צרה יותר מהשנייה", "שתיהן בעלות אותו רוחב", "הפרבולה השנייה נפתחת כלפי מטה"],
        correctAnswer: 0,
        hint: "ככל שהערך המוחלט של המקדם a גדול יותר, כך ערכי ה-y צומחים מהר יותר והפרבולה נראית צרה ותלולה יותר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי המקדם המוביל בפונקציה הראשונה.", math_expression: "a_{1} = 2" },
            { verbal_explanation: "שלב 2: זיהוי המקדם המוביל בפונקציה השנייה.", math_expression: "a_{2} = 5" },
            { verbal_explanation: "שלב 3: השוואת הערכים המוחלטים של המקדמים.", math_expression: "5 > 2" },
            { verbal_explanation: "שלב 4: מקדם גדול יותר גורם לפונקציה לעלות מהר יותר עבור כל התקדמות של איקס.", math_expression: "a_{2} > a_{1}" },
            { verbal_explanation: "שלב 5: המסקנה היא שהפונקציה השנייה מטפסת מהר יותר ולכן צרה יותר.", math_expression: "1" }
        ],
        final_answer: "הפרבולה השנייה 'צרה' (תלולה) יותר מהראשונה"
    },

    // שאלה מספר 5
    {
        topic: "quadratic_function_35372",
        subTopic: "פרבולה",
        question_text: "פרבולה שמשוואתה \\( y = x^{2} + c \\) עוברת בנקודה (2, 9). מהו הערך של c?&rlm;",
        options: ["5", "9", "4", "7"],
        correctAnswer: 0,
        hint: "הציבו את שיעורי הנקודה (x=2, y=9) לתוך משוואת הפרבולה ובודדו את הנעלם c.",
        solution_steps: [
            { verbal_explanation: "שלב 1: רישום המשוואה עם הנעלם הקיים.", math_expression: "y = x^{2} + c" },
            { verbal_explanation: "שלב 2: הצבת הנקודה הנתונה במקום האיקס והוואי.", math_expression: "9 = 2^{2} + c" },
            { verbal_explanation: "שלב 3: העלאת האיקס בריבוע.", math_expression: "9 = 4 + c" },
            { verbal_explanation: "שלב 4: העברת אגף בחיסור למציאת הנעלם.", math_expression: "c = 9 - 4" },
            { verbal_explanation: "שלב 5: התוצאה הסופית של הפרמטר החסר.", math_expression: "c = 5" },
            { verbal_explanation: "שלב 6: הרישום לבדיקה.", math_expression: "5" }
        ],
        final_answer: "5"
    },

    // שאלה מספר 6
    {
        topic: "quadratic_function_35372",
        subTopic: "פרבולה",
        question_text: "הנקודות (4, 10) ו-(מינוס 4, 10) נמצאות על אותה פרבולה שמשוואתה \\( y = ax^{2} + c \\). איזה מתכונות הפרבולה באה לידי ביטוי כאן?&rlm;",
        options: ["סימטריה סביב ציר ה-y", "אסימפטוטה אופקית", "חיתוך עם ציר x", "פונקציה קווית"],
        correctAnswer: 0,
        hint: "כאשר ערכי ה-x נגדיים וערכי ה-y שווים, הפונקציה סימטרית סביב הציר האנכי. פונקציה ריבועית שאין בה איבר x (b=0) היא זוגית.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בחינת שתי הנקודות הנתונות וזיהוי שערכי האיקס שלהן נגדיים.", math_expression: "x_{1} = 4 \\quad , \\quad x_{2} = -4" },
            { verbal_explanation: "שלב 2: זיהוי שערכי הוואי שלהן זהים לחלוטין.", math_expression: "y_{1} = 10 \\quad , \\quad y_{2} = 10" },
            { verbal_explanation: "שלב 3: הצבה סמלית של ערכים נגדיים בפונקציה מראה שהריבוע מבטל את המינוס.", math_expression: "(-x)^{2} = x^{2}" },
            { verbal_explanation: "שלב 4: המשמעות הגיאומטרית היא שיקוף (סימטריה) מלא סביב ציר הוואי.", math_expression: "1" }
        ],
        final_answer: "סימטריה סביב ציר ה-y"
    },

    // שאלה מספר 7
    {
        topic: "quadratic_function_35372",
        subTopic: "פרבולה",
        question_text: "כיצד ייראה הגרף של הפונקציה \\( y = -x^{2} - 5 \\) לעומת הגרף של \\( y = -x^{2} \\)?&rlm;",
        options: ["מוזז 5 יחידות למטה", "מוזז 5 יחידות למעלה", "מוזז 5 יחידות ימינה", "מוזז 5 יחידות שמאלה"],
        correctAnswer: 0,
        hint: "הפרמטר c בסוף המשוואה (המספר החופשי) אחראי על הזזה אנכית של כל הגרף לאורך ציר ה-y.",
        solution_steps: [
            { verbal_explanation: "שלב 1: השוואה בין שתי הפונקציות הנתונות.", math_expression: "y = -x^{2} - 5 \\quad , \\quad y = -x^{2}" },
            { verbal_explanation: "שלב 2: זיהוי ההבדל ביניהן - תוספת של מספר קבוע מחוץ לפעולת הריבוע.", math_expression: "c = -5" },
            { verbal_explanation: "שלב 3: תוספת של קבוע בסוף הפונקציה גורמת להזזה אנכית.", math_expression: "y \\rightarrow y - 5" },
            { verbal_explanation: "שלב 4: מכיוון שהקבוע הוא שלילי, ההזזה היא כלפי מטה.", math_expression: "1" }
        ],
        final_answer: "מוזז 5 יחידות למטה"
    },

    // שאלה מספר 8
    {
        topic: "quadratic_function_35372",
        subTopic: "פרבולה",
        question_text: "נתונה פרבולה מהצורה \\( y = (x - 3)^{2} \\). מהם שיעורי קודקוד הפרבולה?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='150' x2='180' y2='150' stroke='#64748b' stroke-width='2'/><line x1='50' y1='20' x2='50' y2='180' stroke='#64748b' stroke-width='2'/><path d='M 70 20 Q 130 150 190 20' fill='none' stroke='#3b82f6' stroke-width='3'/><circle cx='130' cy='150' r='4' fill='#ef4444'/></svg></div>",
        options: ["(3, 0)", "(-3, 0)", "(0, 3)", "(0, -3)"],
        correctAnswer: 0,
        hint: "בתבנית קודקודית מהסוג הזה, המספר שבתוך הסוגריים עם סימן הפוך הוא שיעור ה-x של הקודקוד, והמספר שבחוץ (שכאן הוא אפס) הוא ה-y.",
        solution_steps: [
            { verbal_explanation: "שלב 1: השוואת המשוואה הנתונה לתבנית הקודקודית המוכרת.", math_expression: "y = a(x - p)^{2} + k" },
            { verbal_explanation: "שלב 2: זיהוי ההזזה האופקית מתוך הסוגריים.", math_expression: "p = 3" },
            { verbal_explanation: "שלב 3: זיהוי ההזזה האנכית מחוץ לסוגריים (אין כזו ולכן היא אפס).", math_expression: "k = 0" },
            { verbal_explanation: "שלב 4: הרכבת נקודת הקודקוד על סמך הפרמטרים שזיהינו.", math_expression: "(3, 0)" },
            { verbal_explanation: "שלב 5: התשובה הישירה בחלופות.", math_expression: "(3, 0)" }
        ],
        final_answer: "(3, 0)"
    },

    // שאלה מספר 9
    {
        topic: "quadratic_function_35372",
        subTopic: "פרבולה",
        question_text: "לפרבולה יש נקודת מינימום ב-(0, -4). איזה מהמשוואות הבאות יכולה לייצג אותה?&rlm;",
        options: ["y = x^{2} - 4", "y = -x^{2} - 4", "y = x^{2} + 4", "y = -x^{2} + 4"],
        correctAnswer: 0,
        hint: "נקודת מינימום מצביעה על כך שהפרבולה נפתחת כלפי מעלה (a חיובי). החיתוך עם ציר y הוא מינוס 4 (c = -4).",
        solution_steps: [
            { verbal_explanation: "שלב 1: ניתוח המילה 'מינימום'. משמעותה שהפרבולה פתוחה כלפי מעלה והמקדם חייב להיות חיובי.", math_expression: "a > 0" },
            { verbal_explanation: "שלב 2: מתוך האפשרויות, פוסלים את המשוואות בהן המקדם שלילי.", math_expression: "y = x^{2} + c" },
            { verbal_explanation: "שלב 3: ניתוח מיקום הקודקוד. מאחר ואיקס הוא אפס, הפרבולה יושבת על ציר הוואי ואין הזזה אופקית.", math_expression: "b = 0" },
            { verbal_explanation: "שלב 4: זיהוי ההזזה האנכית מתוך ערך הוואי של הקודקוד הנתון.", math_expression: "c = -4" },
            { verbal_explanation: "שלב 5: הרכבת הפונקציה המתאימה לכל התנאים.", math_expression: "y = x^{2} - 4" }
        ],
        final_answer: "y = x^{2} - 4"
    },

    // שאלה מספר 10
    {
        topic: "quadratic_function_35372",
        subTopic: "פרבולה",
        question_text: "נתונה פונקציה ריבועית. אם מחליפים את הסימן של המקדם a (למשל מ-2 ל-מינוס 2) ושומרים על c ללא שינוי, מה קורה לגרף?&rlm;",
        options: ["הגרף מתהפך (כמו מראה) סביב הקודקוד שלו", "הגרף זז ימינה", "הגרף זז שמאלה", "נקודת החיתוך עם ציר y משתנה"],
        correctAnswer: 0,
        hint: "החלפת סימן של a משנה את כיוון הפתיחה ממעלה למטה, אך c נשאר זהה ולכן נקודת החיתוך עם הציר האנכי נשמרת.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הבנת המשמעות של שינוי סימן המקדם המוביל.", math_expression: "a \\rightarrow -a" },
            { verbal_explanation: "שלב 2: שינוי כזה הופך פרבולה מ'מחייכת' ל'בוכה' או להפך.", math_expression: "\\cup \\rightarrow \\cap" },
            { verbal_explanation: "שלב 3: מכיוון שהפרמטר החופשי לא משתנה, נקודת חיתוך הציר נשארת במקומה.", math_expression: "c = c" },
            { verbal_explanation: "שלב 4: מבחינה חזותית, זוהי פעולת שיקוף סביב קו אופקי העובר בקודקוד.", math_expression: "1" },
            { verbal_explanation: "שלב 5: בחירת התשובה הנכונה ביותר.", math_expression: "1" }
        ],
        final_answer: "הגרף מתהפך (כמו מראה) סביב הקודקוד שלו"
    },

    // ==========================================
    // תת נושא 2: קודקוד וציר סימטריה (10 שאלות)
    // ==========================================

    // שאלה מספר 11
    {
        topic: "quadratic_function_35372",
        subTopic: "קודקוד וציר סימטריה",
        question_text: "מצאו את משוואת ציר הסימטריה של הפרבולה \\( y = x^{2} - 6x + 5 \\).&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='150' x2='180' y2='150' stroke='#64748b' stroke-width='2'/><path d='M 40 20 Q 100 250 160 20' fill='none' stroke='#3b82f6' stroke-width='3'/><line x1='100' y1='20' x2='100' y2='180' stroke='#ef4444' stroke-dasharray='5,5' stroke-width='2'/></svg></div>",
        options: ["x = 3", "x = -3", "x = 6", "x = 1"],
        correctAnswer: 0,
        hint: "השתמשו בנוסחה למציאת שיעור ה-x של קודקוד הפרבולה (מינוס b חלקי שתי a). ישר זה הוא גם ציר הסימטריה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי המקדמים הרלוונטיים מתוך המשוואה.", math_expression: "a = 1 \\quad , \\quad b = -6" },
            { verbal_explanation: "שלב 2: כתיבת הנוסחה למציאת ציר הסימטריה (שיעור האיקס של הקודקוד).", math_expression: "x = \\dfrac{-b}{2 \\times a}" },
            { verbal_explanation: "שלב 3: הצבת המקדמים תוך הקפדה על חוקי סימנים (מינוס כפול מינוס).", math_expression: "x = \\dfrac{-(-6)}{2 \\times 1}" },
            { verbal_explanation: "שלב 4: ביצוע פעולות הכפל והחילוק.", math_expression: "x = \\dfrac{6}{2} = 3" },
            { verbal_explanation: "שלב 5: התשובה הדרושה המייצגת ישר אנכי.", math_expression: "x = 3" }
        ],
        final_answer: "x = 3"
    },

    // שאלה מספר 12
    {
        topic: "quadratic_function_35372",
        subTopic: "קודקוד וציר סימטריה",
        question_text: "מהו שיעור ה-y של קודקוד הפרבולה \\( y = -x^{2} + 4x \\)?&rlm;",
        options: ["4", "2", "-4", "0"],
        correctAnswer: 0,
        hint: "תחילה מצאו את ערך ה-x של הקודקוד בעזרת הנוסחה, ולאחר מכן הציבו את ה-x שמצאתם בתוך הפונקציה כדי לקבל את y.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת מקדמי המשוואה.", math_expression: "a = -1 \\quad , \\quad b = 4" },
            { verbal_explanation: "שלב 2: חישוב איקס הקודקוד בעזרת הנוסחה.", math_expression: "x = \\dfrac{-4}{2 \\times (-1)}" },
            { verbal_explanation: "שלב 3: תוצאת החלוקה (מינוס ארבע חלקי מינוס שתיים).", math_expression: "x = 2" },
            { verbal_explanation: "שלב 4: הצבת האיקס שנמצא לתוך הפונקציה המקורית למציאת ערך הוואי.", math_expression: "y = -(2)^{2} + 4 \\times 2" },
            { verbal_explanation: "שלב 5: ביצוע חזקה ולאחר מכן כפל (המינוס נשאר בחוץ כי הוא לא בסוגריים).", math_expression: "y = -4 + 8" },
            { verbal_explanation: "שלב 6: פעולת החיבור לקבלת ערך הקודקוד האנכי.", math_expression: "y = 4" },
            { verbal_explanation: "שלב 7: הרישום לבדיקה.", math_expression: "4" }
        ],
        final_answer: "4"
    },

    // שאלה מספר 13
    {
        topic: "quadratic_function_35372",
        subTopic: "קודקוד וציר סימטריה",
        question_text: "ציר הסימטריה של הפונקציה \\( y = x^{2} + bx + 10 \\) הוא הישר \\( x = 4 \\). מהו הערך של המקדם b?&rlm;",
        options: ["-8", "8", "-4", "4"],
        correctAnswer: 0,
        hint: "הציבו את הנתונים הידועים (x=4 ו- a=1) לתוך נוסחת הקודקוד ובודדו את b.",
        solution_steps: [
            { verbal_explanation: "שלב 1: שימוש בנוסחת ציר הסימטריה.", math_expression: "x = \\dfrac{-b}{2 \\times a}" },
            { verbal_explanation: "שלב 2: הצבת הערך הידוע של ציר הסימטריה ואת המקדם המוביל.", math_expression: "4 = \\dfrac{-b}{2 \\times 1}" },
            { verbal_explanation: "שלב 3: כפל בשתיים לביטול המכנה.", math_expression: "4 \\times 2 = -b" },
            { verbal_explanation: "שלב 4: ביצוע הכפל.", math_expression: "8 = -b" },
            { verbal_explanation: "שלב 5: הכפלת שני האגפים במינוס אחד לבידוד סופי.", math_expression: "b = -8" },
            { verbal_explanation: "שלב 6: אישור התוצאה.", math_expression: "-8" }
        ],
        final_answer: "-8"
    },

    // שאלה מספר 14
    {
        topic: "quadratic_function_35372",
        subTopic: "קודקוד וציר סימטריה",
        question_text: "מהם שיעורי קודקוד הפרבולה של הפונקציה \\( y = 2x^{2} - 8x + 3 \\)?&rlm;",
        options: ["(2, -5)", "(-2, 27)", "(2, 3)", "(-2, -5)"],
        correctAnswer: 0,
        hint: "מצאו את ה-x של הקודקוד. לאחר מכן, הציבו בפונקציה. זכרו את סדר פעולות החשבון (קודם להעלות בריבוע, ואז לכפול ב-2).",
        solution_steps: [
            { verbal_explanation: "שלב 1: חילוץ המקדמים.", math_expression: "a = 2 \\quad , \\quad b = -8" },
            { verbal_explanation: "שלב 2: הצבה בנוסחת הקודקוד למציאת שיעור האיקס.", math_expression: "x = \\dfrac{-(-8)}{2 \\times 2}" },
            { verbal_explanation: "שלב 3: ביצוע החלוקה.", math_expression: "x = \\dfrac{8}{4} = 2" },
            { verbal_explanation: "שלב 4: הצבת האיקס שקיבלנו בחזרה בפונקציה למציאת שיעור הוואי.", math_expression: "y = 2 \\times (2)^{2} - 8 \\times 2 + 3" },
            { verbal_explanation: "שלב 5: ביצוע פעולות חזקה וכפל.", math_expression: "y = 2 \\times 4 - 16 + 3 = 8 - 16 + 3" },
            { verbal_explanation: "שלב 6: חיבור וחיסור סופיים.", math_expression: "y = -5" },
            { verbal_explanation: "שלב 7: הרכבת הנקודה.", math_expression: "(2, -5)" }
        ],
        final_answer: "(2, -5)"
    },

    // שאלה מספר 15
    {
        topic: "quadratic_function_35372",
        subTopic: "קודקוד וציר סימטריה",
        question_text: "לפונקציה \\( y = -3x^{2} + 12x - 1 \\) יש נקודת קיצון. איזה סוג של נקודת קיצון זו, ומהו הערך שלה?&rlm;",
        options: ["מקסימום, הערך הוא 11", "מינימום, הערך הוא 11", "מקסימום, הערך הוא 2", "מינימום, הערך הוא -1"],
        correctAnswer: 0,
        hint: "הסימן השלילי של a מצביע על כך שהפרבולה 'בוכה', ולכן יש לה נקודת מקסימום. הערך של נקודת הקיצון הוא תמיד ה-y של הקודקוד.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בדיקת המקדם המוביל לקביעת סוג הקיצון. הוא שלילי, ולכן מדובר במקסימום.", math_expression: "a = -3 < 0 \\Rightarrow Max" },
            { verbal_explanation: "שלב 2: חישוב איקס של נקודת הקיצון (הקודקוד).", math_expression: "x = \\dfrac{-12}{2 \\times (-3)} = \\dfrac{-12}{-6} = 2" },
            { verbal_explanation: "שלב 3: הצבה בפונקציה למציאת הערך של הקיצון.", math_expression: "y = -3 \\times (2)^{2} + 12 \\times 2 - 1" },
            { verbal_explanation: "שלב 4: פתרון הפעולות.", math_expression: "y = -3 \\times 4 + 24 - 1 = -12 + 24 - 1" },
            { verbal_explanation: "שלב 5: קבלת ערך הוואי הסופי.", math_expression: "y = 11" },
            { verbal_explanation: "שלב 6: שילוב שתי המסקנות יחד לתשובה המלאה.", math_expression: "1" }
        ],
        final_answer: "מקסימום, הערך הוא 11"
    },

    // שאלה מספר 16
    {
        topic: "quadratic_function_35372",
        subTopic: "קודקוד וציר סימטריה",
        question_text: "קודקוד הפרבולה של \\( y = x^{2} - 10x + 30 \\) נמצא ברביע מסוים. מהו המרחק האנכי של הקודקוד מציר ה-x?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='150' x2='180' y2='150' stroke='#64748b' stroke-width='2'/><path d='M 60 20 Q 100 120 140 20' fill='none' stroke='#3b82f6' stroke-width='3'/><circle cx='100' cy='70' r='4' fill='#ef4444'/><line x1='100' y1='70' x2='100' y2='150' stroke='#ef4444' stroke-dasharray='4,4' stroke-width='2'/></svg></div>",
        options: ["5", "10", "25", "30"],
        correctAnswer: 0,
        hint: "המרחק האנכי מציר ה-x הוא למעשה שיעור ה-y של הנקודה (בערכו המוחלט). מצאו את ה-y של הקודקוד.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב שיעור האיקס של הקודקוד לפי המקדמים.", math_expression: "x = \\dfrac{-(-10)}{2 \\times 1} = \\dfrac{10}{2} = 5" },
            { verbal_explanation: "שלב 2: הצבת האיקס במשוואה למציאת שיעור הוואי.", math_expression: "y = 5^{2} - 10 \\times 5 + 30" },
            { verbal_explanation: "שלב 3: ביצוע חזקות וכפל.", math_expression: "y = 25 - 50 + 30" },
            { verbal_explanation: "שלב 4: פעולות חיבור וחיסור לקבלת ערך הוואי.", math_expression: "y = 5" },
            { verbal_explanation: "שלב 5: מכיוון שהוואי חיובי, המרחק מציר איקס הוא בדיוק ערך זה.", math_expression: "d = 5" },
            { verbal_explanation: "שלב 6: הרישום לפלט.", math_expression: "5" }
        ],
        final_answer: "5"
    },

    // שאלה מספר 17
    {
        topic: "quadratic_function_35372",
        subTopic: "קודקוד וציר סימטריה",
        question_text: "פונקציה נתונה בצורת הקודקוד שלה: \\( y = -2(x - 4)^{2} + 7 \\). מהי משוואת ציר הסימטריה שלה?&rlm;",
        options: ["x = 4", "x = -4", "x = 7", "y = 7"],
        correctAnswer: 0,
        hint: "בתבנית זו, ה-x של הקודקוד הוא המספר המאפס את הסוגריים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת התבנית הקודקודית הכללית להשוואה.", math_expression: "y = a(x - p)^{2} + k" },
            { verbal_explanation: "שלב 2: זיהוי הפרמטר פי שמייצג את ההזזה האופקית.", math_expression: "p = 4" },
            { verbal_explanation: "שלב 3: הבנה שההזזה האופקית היא בדיוק שיעור האיקס של הקודקוד.", math_expression: "x = 4" },
            { verbal_explanation: "שלב 4: שיעור האיקס של הקודקוד מגדיר את משוואת ציר הסימטריה.", math_expression: "x = 4" },
            { verbal_explanation: "שלב 5: התשובה הישירה במלואה.", math_expression: "x = 4" }
        ],
        final_answer: "x = 4"
    },

    // שאלה מספר 18
    {
        topic: "quadratic_function_35372",
        subTopic: "קודקוד וציר סימטריה",
        question_text: "נתונות שתי פונקציות: \\( y = x^{2} - 4x \\) ו- \\( y = -3x^{2} + 12x + 1 \\). מה המשותף לשתי הפונקציות?&rlm;",
        options: ["יש להן אותו ציר סימטריה", "יש להן אותו קודקוד בדיוק", "שתיהן פתוחות כלפי מעלה", "הן חותכות את ציר y באותה נקודה"],
        correctAnswer: 0,
        hint: "חשבו את ציר הסימטריה (מינוס b חלקי שתי a) עבור כל אחת מהפונקציות בנפרד, והשוו את התוצאות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת ציר הסימטריה של הפונקציה הראשונה.", math_expression: "x_{1} = \\dfrac{-(-4)}{2 \\times 1} = \\dfrac{4}{2} = 2" },
            { verbal_explanation: "שלב 2: מציאת ציר הסימטריה של הפונקציה השנייה.", math_expression: "x_{2} = \\dfrac{-12}{2 \\times (-3)} = \\dfrac{-12}{-6} = 2" },
            { verbal_explanation: "שלב 3: השוואת התוצאות מראה כי הם זהים לחלוטין.", math_expression: "x_{1} = x_{2} = 2" },
            { verbal_explanation: "שלב 4: בחינת שאר האפשרויות והפרכתן (ערך המקדם החופשי שונה, הכיוון שונה).", math_expression: "1" },
            { verbal_explanation: "שלב 5: המסקנה הנדרשת.", math_expression: "1" }
        ],
        final_answer: "יש להן אותו ציר סימטריה"
    },

    // שאלה מספר 19
    {
        topic: "quadratic_function_35372",
        subTopic: "קודקוד וציר סימטריה",
        question_text: "פרבולה חותכת את ציר ה-x בשתי נקודות: (1, 0) ו- (7, 0). מהי משוואת ציר הסימטריה שלה?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='100' x2='180' y2='100' stroke='#64748b' stroke-width='2'/><path d='M 40 20 Q 100 200 160 20' fill='none' stroke='#3b82f6' stroke-width='3'/><circle cx='60' cy='100' r='4' fill='#ef4444'/><circle cx='140' cy='100' r='4' fill='#ef4444'/><line x1='100' y1='20' x2='100' y2='180' stroke='#ef4444' stroke-dasharray='4,4' stroke-width='2'/></svg></div>",
        options: ["x = 4", "x = 3", "x = 8", "x = 1"],
        correctAnswer: 0,
        hint: "בשל תכונת הסימטריה של הפרבולה, ציר הסימטריה עובר בדיוק באמצע בין כל שתי נקודות בעלות אותו ערך y (כמו נקודות החיתוך עם ציר x).",
        solution_steps: [
            { verbal_explanation: "שלב 1: הבנה מתמטית שציר הסימטריה ממוקם בממוצע האופקי של חיתוכי הציר.", math_expression: "x = \\dfrac{x_{1} + x_{2}}{2}" },
            { verbal_explanation: "שלב 2: הצבת שורשי הפרבולה שניתנו בשאלה.", math_expression: "x = \\dfrac{1 + 7}{2}" },
            { verbal_explanation: "שלב 3: ביצוע פעולת החיבור במונה.", math_expression: "x = \\dfrac{8}{2}" },
            { verbal_explanation: "שלב 4: חלוקה לקבלת הערך.", math_expression: "x = 4" },
            { verbal_explanation: "שלב 5: התשובה הינה הקו האנכי.", math_expression: "x = 4" }
        ],
        final_answer: "x = 4"
    },

    // שאלה מספר 20
    {
        topic: "quadratic_function_35372",
        subTopic: "קודקוד וציר סימטריה",
        question_text: "זרקו כדור באוויר. גובה הכדור במטרים (y) מיוצג כפונקציה של הזמן בשניות (x) על ידי הנוסחה \\( y = -5x^{2} + 20x + 1 \\). מהו הגובה המקסימלי שאליו הגיע הכדור?&rlm;",
        options: ["21", "2", "20", "25"],
        correctAnswer: 0,
        hint: "הגובה המקסימלי הוא שיעור ה-y של קודקוד הפרבולה. מצאו את הזמן שבו הוא קורה (ה-x של הקודקוד), והציבו אותו בפונקציה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת הזמן שבו מתקבל הגובה המרבי באמצעות נוסחת איקס קודקוד.", math_expression: "x = \\dfrac{-20}{2 \\times (-5)}" },
            { verbal_explanation: "שלב 2: פתרון השבר.", math_expression: "x = \\dfrac{-20}{-10} = 2" },
            { verbal_explanation: "שלב 3: הצבת הזמן שנמצא בפונקציית הגובה.", math_expression: "y = -5 \\times (2)^{2} + 20 \\times 2 + 1" },
            { verbal_explanation: "שלב 4: העלאה בריבוע והכפלות.", math_expression: "y = -5 \\times 4 + 40 + 1 = -20 + 40 + 1" },
            { verbal_explanation: "שלב 5: חיבור וחיסור סופיים לקבלת הגובה.", math_expression: "y = 21" },
            { verbal_explanation: "שלב 6: הרישום לבדיקה במערכת.", math_expression: "21" }
        ],
        final_answer: "21"
    },

    // ==========================================
    // תת נושא 3: חיתוך עם הצירים (10 שאלות)
    // ==========================================

    // שאלה מספר 21
    {
        topic: "quadratic_function_35372",
        subTopic: "חיתוך עם הצירים",
        question_text: "מהי נקודת החיתוך עם ציר ה-y של הפרבולה \\( y = 4x^{2} - 8x - 12 \\)?&rlm;",
        options: ["(0, -12)", "(0, 12)", "(-12, 0)", "(0, 4)"],
        correctAnswer: 0,
        hint: "בנקודת החיתוך עם ציר y, תמיד מתקיים ש-x שווה לאפס. מציבים 0 במקום כל x בפונקציה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הבנת הכלל לחיתוך עם ציר אנכי.", math_expression: "x = 0" },
            { verbal_explanation: "שלב 2: הצבת אפס במשוואה הנתונה.", math_expression: "y = 4 \\times 0^{2} - 8 \\times 0 - 12" },
            { verbal_explanation: "שלב 3: איברי האיקס מתאפסים ונשאר רק הפרמטר החופשי.", math_expression: "y = -12" },
            { verbal_explanation: "שלב 4: הרכבת הנקודה הסופית.", math_expression: "(0, -12)" },
            { verbal_explanation: "שלב 5: זוהי התשובה שתסומן.", math_expression: "(0, -12)" }
        ],
        final_answer: "(0, -12)"
    },

    // שאלה מספר 22
    {
        topic: "quadratic_function_35372",
        subTopic: "חיתוך עם הצירים",
        question_text: "מצאו את נקודות החיתוך של הפרבולה \\( y = x^{2} - 16 \\) עם ציר ה-x.&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='100' x2='180' y2='100' stroke='#64748b' stroke-width='2'/><line x1='100' y1='20' x2='100' y2='180' stroke='#64748b' stroke-width='2'/><path d='M 40 20 Q 100 220 160 20' fill='none' stroke='#3b82f6' stroke-width='3'/><circle cx='60' cy='100' r='4' fill='#ef4444'/><circle cx='140' cy='100' r='4' fill='#ef4444'/></svg></div>",
        options: ["(4, 0) ו- (-4, 0)", "(16, 0) ו- (-16, 0)", "(0, 4) ו- (0, -4)", "(4, 0) בלבד"],
        correctAnswer: 0,
        hint: "בנקודות החיתוך עם ציר x, מתקיים ש-y שווה לאפס. השוו את הביטוי לאפס ופתרו את המשוואה (ניתן בעזרת שורש ריבועי על שני האגפים).",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת אפס במקום וואי למציאת חיתוך ציר אופקי.", math_expression: "x^{2} - 16 = 0" },
            { verbal_explanation: "שלב 2: העברת המספר לאגף ימין.", math_expression: "x^{2} = 16" },
            { verbal_explanation: "שלב 3: הוצאת שורש ריבועי על שני האגפים לקבלת שני פתרונות אפשריים (פלוס ומינוס).", math_expression: "x = \\pm \\sqrt{16}" },
            { verbal_explanation: "שלב 4: התוצאות לערכי האיקס.", math_expression: "x = 4 \\quad , \\quad x = -4" },
            { verbal_explanation: "שלב 5: סידור הפתרון כנקודות על מערכת צירים.", math_expression: "(4, 0) \\quad , \\quad (-4, 0)" }
        ],
        final_answer: "(4, 0) ו- (-4, 0)"
    },

    // שאלה מספר 23
    {
        topic: "quadratic_function_35372",
        subTopic: "חיתוך עם הצירים",
        question_text: "מהן נקודות החיתוך של הפונקציה \\( y = x^{2} - 5x + 6 \\) עם ציר ה-x?&rlm;",
        options: ["(2, 0) ו- (3, 0)", "(-2, 0) ו- (-3, 0)", "(6, 0) ו- (-1, 0)", "(0, 2) ו- (0, 3)"],
        correctAnswer: 0,
        hint: "השוו לאפס ופתרו משוואה ריבועית בעזרת נוסחת השורשים או בעזרת טרינום (חיפוש שני מספרים שסכומם מינוס 5 ומכפלתם 6).",
        solution_steps: [
            { verbal_explanation: "שלב 1: השוואת הפונקציה לאפס.", math_expression: "x^{2} - 5x + 6 = 0" },
            { verbal_explanation: "שלב 2: פירוק המשוואה לגורמים בעזרת טרינום.", math_expression: "(x - 2)(x - 3) = 0" },
            { verbal_explanation: "שלב 3: השוואת כל גורם בסוגריים לאפס בנפרד למציאת שורשי המשוואה.", math_expression: "x - 2 = 0 \\Rightarrow x = 2" },
            { verbal_explanation: "שלב 4: השוואת הגורם השני לאפס.", math_expression: "x - 3 = 0 \\Rightarrow x = 3" },
            { verbal_explanation: "שלב 5: כתיבת הנקודות המלאות.", math_expression: "(2, 0) \\quad , \\quad (3, 0)" }
        ],
        final_answer: "(2, 0) ו- (3, 0)"
    },

    // שאלה מספר 24
    {
        topic: "quadratic_function_35372",
        subTopic: "חיתוך עם הצירים",
        question_text: "פרבולה חותכת את ציר ה-x בשתי נקודות. משוואתה היא \\( y = -x^{2} + 25 \\). מהו המרחק בין שתי נקודות החיתוך?&rlm;",
        options: ["10", "5", "50", "25"],
        correctAnswer: 0,
        hint: "מצאו את שתי הנקודות על ידי השוואה לאפס. המרחק ביניהן הוא ההפרש בין שני ערכי ה-x שמצאתם.",
        solution_steps: [
            { verbal_explanation: "שלב 1: השוואת הפונקציה לאפס למציאת נקודות החיתוך.", math_expression: "-x^{2} + 25 = 0" },
            { verbal_explanation: "שלב 2: העברת איברי איקס לאגף ימין כדי להפוכו לחיובי.", math_expression: "25 = x^{2}" },
            { verbal_explanation: "שלב 3: חילוץ שני שורשי המשוואה.", math_expression: "x = 5 \\quad , \\quad x = -5" },
            { verbal_explanation: "שלב 4: הגדרת נוסחת המרחק האופקי כהפרש בין שני השורשים.", math_expression: "d = 5 - (-5)" },
            { verbal_explanation: "שלב 5: חיבור פשוט וסיום התרגיל.", math_expression: "d = 10" },
            { verbal_explanation: "שלב 6: הרישום לבדיקה.", math_expression: "10" }
        ],
        final_answer: "10"
    },

    // שאלה מספר 25
    {
        topic: "quadratic_function_35372",
        subTopic: "חיתוך עם הצירים",
        question_text: "לפרבולה שמשוואתה \\( y = x^{2} - 4x + 4 \\) יש...&rlm;",
        options: ["נקודת חיתוך אחת עם ציר ה-x (משיקה לציר)", "שתי נקודות חיתוך עם ציר ה-x", "אף נקודת חיתוך עם ציר ה-x", "נקודת חיתוך אחת עם ציר ה-y בלבד"],
        correctAnswer: 0,
        hint: "נסו לפתור את המשוואה כש-y=0. אפשר גם בעזרת נוסחת כפל מקוצר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: השוואת המשוואה לאפס.", math_expression: "x^{2} - 4x + 4 = 0" },
            { verbal_explanation: "שלב 2: זיהוי תבנית מוכרת של כפל מקוצר ופירוק המשוואה.", math_expression: "(x - 2)^{2} = 0" },
            { verbal_explanation: "שלב 3: הוצאת שורש על שני הצדדים.", math_expression: "x - 2 = 0" },
            { verbal_explanation: "שלב 4: התקבל פתרון יחיד בלבד.", math_expression: "x = 2" },
            { verbal_explanation: "שלב 5: פתרון יחיד מצביע על כך שהפרבולה רק נוגעת בנקודה אחת בציר, כלומר משיקה לו.", math_expression: "1" }
        ],
        final_answer: "נקודת חיתוך אחת עם ציר ה-x (משיקה לציר)"
    },

    // שאלה מספר 26
    {
        topic: "quadratic_function_35372",
        subTopic: "חיתוך עם הצירים",
        question_text: "מבלי לפתור את המשוואה לחלוטין, בדקו כמה נקודות חיתוך יש לפרבולה \\( y = x^{2} + 2x + 5 \\) עם ציר ה-x. (רמז: השתמשו בביטוי של הדיסקרימיננטה מתחת לשורש בנוסחת השורשים: \\( b^{2} - 4ac \\)).&rlm;",
        options: ["אפס (אין נקודות חיתוך)", "שתי נקודות חיתוך", "נקודה אחת", "אינסוף נקודות"],
        correctAnswer: 0,
        hint: "אם הביטוי מתחת לשורש קטן מאפס (שלילי), המשוואה חסרת פתרון ולכן אין נקודות חיתוך עם ציר ה-x.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חילוץ המקדמים מהמשוואה.", math_expression: "a = 1 \\quad , \\quad b = 2 \\quad , \\quad c = 5" },
            { verbal_explanation: "שלב 2: הצבה בביטוי הדיסקרימיננטה (השייר).", math_expression: "\\Delta = 2^{2} - 4 \\times 1 \\times 5" },
            { verbal_explanation: "שלב 3: ביצוע חזקות וכפל.", math_expression: "\\Delta = 4 - 20" },
            { verbal_explanation: "שלב 4: תוצאת החיסור.", math_expression: "\\Delta = -16" },
            { verbal_explanation: "שלב 5: התוצאה קטנה מאפס (שלילית) ולכן אין פתרונות ממשיים, כלומר הגרף מרחף מעל ציר האיקס.", math_expression: "\\Delta < 0" },
            { verbal_explanation: "שלב 6: בחירת התשובה המתאימה.", math_expression: "1" }
        ],
        final_answer: "אפס (אין נקודות חיתוך)"
    },

    // שאלה מספר 27
    {
        topic: "quadratic_function_35372",
        subTopic: "חיתוך עם הצירים",
        question_text: "מצאו את נקודות החיתוך של הפונקציה \\( y = 3x^{2} - 12x \\) עם ציר ה-x.&rlm;",
        options: ["(0, 0) ו- (4, 0)", "(0, 0) ו- (-4, 0)", "(1, 0) ו- (3, 0)", "(4, 0) בלבד"],
        correctAnswer: 0,
        hint: "השוו לאפס. הוציאו גורם משותף x (או 3x) מחוץ לסוגריים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: השוואה לאפס.", math_expression: "3x^{2} - 12x = 0" },
            { verbal_explanation: "שלב 2: הוצאת גורם משותף מחוץ לסוגריים.", math_expression: "3x(x - 4) = 0" },
            { verbal_explanation: "שלב 3: השוואת הגורם הראשון לאפס למציאת הפתרון הראשון.", math_expression: "3x = 0 \\Rightarrow x = 0" },
            { verbal_explanation: "שלב 4: השוואת הביטוי שבתוך הסוגריים לאפס למציאת הפתרון השני.", math_expression: "x - 4 = 0 \\Rightarrow x = 4" },
            { verbal_explanation: "שלב 5: סידור התשובה בפורמט של נקודות.", math_expression: "(0, 0) \\quad , \\quad (4, 0)" }
        ],
        final_answer: "(0, 0) ו- (4, 0)"
    },

    // שאלה מספר 28
    {
        topic: "quadratic_function_35372",
        subTopic: "חיתוך עם הצירים",
        question_text: "נתונה הפרבולה \\( y = -x^{2} + 4x \\). קודקודי משולש הם שתי נקודות החיתוך שלה עם ציר ה-x, וקודקוד הפרבולה. מהו שטח המשולש?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='150' x2='180' y2='150' stroke='#64748b' stroke-width='2'/><path d='M 40 150 Q 100 -50 160 150' fill='none' stroke='#3b82f6' stroke-width='3'/><polygon points='40,150 160,150 100,50' fill='#3b82f6' opacity='0.2' stroke='#3b82f6' stroke-width='1'/><circle cx='40' cy='150' r='4' fill='#ef4444'/><circle cx='160' cy='150' r='4' fill='#ef4444'/><circle cx='100' cy='50' r='4' fill='#ef4444'/></svg></div>",
        options: ["8", "16", "4", "32"],
        correctAnswer: 0,
        hint: "זהו תרגיל משולב. מצאו את החיתוכים עם ציר ה-x (הבסיס). מצאו את ה-y של הקודקוד (הגובה). חצי מהמכפלה שלהם זה השטח.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת חיתוך ציר אופקי על ידי השוואה לאפס והוצאת גורם משותף.", math_expression: "x(-x + 4) = 0 \\Rightarrow x_{1} = 0 , x_{2} = 4" },
            { verbal_explanation: "שלב 2: אורך בסיס המשולש המונח על הציר הוא ההפרש ביניהם.", math_expression: "b = 4 - 0 = 4" },
            { verbal_explanation: "שלב 3: מציאת שיעור איקס של הקודקוד המהווה אמצע קטע או דרך הנוסחה הרגילה.", math_expression: "x = \\dfrac{-4}{2 \\times (-1)} = 2" },
            { verbal_explanation: "שלב 4: מציאת הגובה על ידי הצבת איקס הקודקוד בפונקציה לקבלת שיעור הוואי שלו.", math_expression: "h = -(2)^{2} + 4 \\times 2 = -4 + 8 = 4" },
            { verbal_explanation: "שלב 5: חישוב השטח על ידי מכפלת בסיס וגובה חלקי שתיים.", math_expression: "S = \\dfrac{4 \\times 4}{2} = 8" },
            { verbal_explanation: "שלב 6: הרישום לבדיקה.", math_expression: "8" }
        ],
        final_answer: "8"
    },

    // שאלה מספר 29
    {
        topic: "quadratic_function_35372",
        subTopic: "חיתוך עם הצירים",
        question_text: "נתונה המשוואה \\( y = (x - 2)(x - 6) \\). מהן נקודות החיתוך עם ציר ה-x, והאם הקודקוד נמצא מעל או מתחת לציר ה-x?&rlm;",
        options: ["(2, 0) ו-(6, 0), קודקוד מתחת לציר ה-x", "(-2, 0) ו-(-6, 0), קודקוד מתחת לציר ה-x", "(2, 0) ו-(6, 0), קודקוד מעל לציר ה-x", "אין נקודות חיתוך, קודקוד מעל לציר ה-x"],
        correctAnswer: 0,
        hint: "המשוואה נתונה בצורה של מכפלה, כך שקל למצוא מתי y שווה אפס. כמו כן, אם המקדם a חיובי ויש שתי נקודות חיתוך, המינימום (הקודקוד) חייב להיות מתחת לציר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת החיתוך היא מיידית על ידי איפוס כל אחד מהגורמים.", math_expression: "x - 2 = 0 \\Rightarrow x = 2 \\quad , \\quad x - 6 = 0 \\Rightarrow x = 6" },
            { verbal_explanation: "שלב 2: הנקודות שהתקבלו.", math_expression: "(2, 0) \\quad , \\quad (6, 0)" },
            { verbal_explanation: "שלב 3: כתיבת הפונקציה המלאה על ידי פתיחת סוגריים לזיהוי המקדם המוביל.", math_expression: "y = x^{2} - 8x + 12" },
            { verbal_explanation: "שלב 4: המקדם חיובי, הפונקציה יורדת לחיתוך ציר איקס ואז עולה חזרה, לכן המינימום קבור מתחתיו.", math_expression: "a = 1 > 0 \\Rightarrow Min" },
            { verbal_explanation: "שלב 5: ניתן לאמת על ידי מציאת הקודקוד.", math_expression: "x = 4 \\Rightarrow y = (4-2) \\times (4-6) = 2 \\times (-2) = -4" },
            { verbal_explanation: "שלב 6: המסקנה המשולבת.", math_expression: "1" }
        ],
        final_answer: "(2, 0) ו-(6, 0), קודקוד מתחת לציר ה-x"
    },

    // שאלה מספר 30
    {
        topic: "quadratic_function_35372",
        subTopic: "חיתוך עם הצירים",
        question_text: "מצאו את נקודות החיתוך בין הפרבולה \\( y = x^{2} - 3x \\) לבין הישר האופקי \\( y = 4 \\).&rlm;",
        options: ["(4, 4) ו- (-1, 4)", "(3, 4) ו- (0, 4)", "(4, 0) ו- (-1, 0)", "אין נקודות חיתוך"],
        correctAnswer: 0,
        hint: "השוו את משוואת הפרבולה למספר 4. העבירו את ה-4 אגף ופתרו משוואה ריבועית.",
        solution_steps: [
            { verbal_explanation: "שלב 1: השוואת שתי הפונקציות זו לזו למציאת חיתוך ביניהן.", math_expression: "x^{2} - 3x = 4" },
            { verbal_explanation: "שלב 2: העברת המספר ארבע שמאלה לאיפוס אגף ימין.", math_expression: "x^{2} - 3x - 4 = 0" },
            { verbal_explanation: "שלב 3: פירוק לטרינום (חיפוש שני מספרים שסכומם מינוס שלוש ומכפלתם מינוס ארבע).", math_expression: "(x - 4)(x + 1) = 0" },
            { verbal_explanation: "שלב 4: השוואת כל גורם לאפס מניבה את הפתרונות עבור איקס.", math_expression: "x_{1} = 4 \\quad , \\quad x_{2} = -1" },
            { verbal_explanation: "שלב 5: מאחר והחיתוך מתבצע עם ישר אופקי שבו ערך הוואי קבוע, נרכיב את הנקודות.", math_expression: "(4, 4) \\quad , \\quad (-1, 4)" },
            { verbal_explanation: "שלב 6: אישור הבחירה.", math_expression: "1" }
        ],
        final_answer: "(4, 4) ו- (-1, 4)"
    }
];