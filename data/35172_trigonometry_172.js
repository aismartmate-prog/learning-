const questionsDB = [
    // ==========================================
    // תת נושא 1: הכרת פונקציות הטריגו (סינוס, קוסינוס, טנגנס) (12 שאלות)
    // ==========================================

    // שאלה מספר 1
    {
        topic: "trigonometry_172",
        subTopic: "הכרת פונקציות הטריגו (סינוס, קוסינוס, טנגנס)",
        question_text: "במשולש ישר זווית, אורך הניצב שמול הזווית אלפא הוא 5, ואורך היתר הוא 13. מהו הערך של סינוס אלפא?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='40,160 160,160 160,40' fill='none' stroke='#3b82f6' stroke-width='3'/><polyline points='140,160 140,140 160,140' fill='none' stroke='#3b82f6' stroke-width='2'/><path d='M 70 160 A 30 30 0 0 0 60 140' fill='none' stroke='#ef4444' stroke-width='2'/><text x='75' y='145' font-size='14' fill='#ef4444'>α</text><text x='170' y='105' font-size='14' fill='#334155'>5</text><text x='90' y='90' font-size='14' fill='#334155'>13</text></svg></div>",
        options: ["5 : 13", "12 : 13", "5 : 12", "13 : 5"],
        correctAnswer: 0,
        hint: "פונקציית הסינוס מוגדרת כיחס שבין הניצב הנמצא מול הזווית לבין היתר של המשולש.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי אורך הניצב שמול הזווית.", math_expression: "a = 5" },
            { verbal_explanation: "שלב 2: זיהוי אורך היתר במשולש.", math_expression: "c = 13" },
            { verbal_explanation: "שלב 3: כתיבת ההגדרה המתמטית של פונקציית סינוס.", math_expression: "\\sin(\\alpha) = \\dfrac{a}{c}" },
            { verbal_explanation: "שלב 4: הצבת הנתונים שמצאנו אל תוך ההגדרה.", math_expression: "\\sin(\\alpha) = \\dfrac{5}{13}" },
            { verbal_explanation: "שלב 5: התשובה הנדרשת היא היחס כפי שהוא נכתב בחלופות (כפעולת חילוק).", math_expression: "5 : 13" }
        ],
        final_answer: "5 : 13"
    },

    // שאלה מספר 2
    {
        topic: "trigonometry_172",
        subTopic: "הכרת פונקציות הטריגו (סינוס, קוסינוס, טנגנס)",
        question_text: "במשולש ישר זווית, אורך הניצב שליד הזווית בטא הוא 8, ואורך היתר הוא 10. מהו הערך של קוסינוס בטא?&rlm;",
        options: ["8 : 10", "6 : 10", "8 : 6", "10 : 8"],
        correctAnswer: 0,
        hint: "פונקציית הקוסינוס מתארת את היחס שבין הניצב שליד הזווית (הסמוך לה) לבין היתר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי הניצב שלצד הזווית.", math_expression: "b = 8" },
            { verbal_explanation: "שלב 2: זיהוי היתר.", math_expression: "c = 10" },
            { verbal_explanation: "שלב 3: הבאת הנוסחה של קוסינוס.", math_expression: "\\cos(\\beta) = \\dfrac{b}{c}" },
            { verbal_explanation: "שלב 4: הצבת המספרים.", math_expression: "\\cos(\\beta) = \\dfrac{8}{10}" },
            { verbal_explanation: "שלב 5: סידור התשובה בהתאם לאפשרויות המוצגות.", math_expression: "8 : 10" }
        ],
        final_answer: "8 : 10"
    },

    // שאלה מספר 3
    {
        topic: "trigonometry_172",
        subTopic: "הכרת פונקציות הטריגו (סינוס, קוסינוס, טנגנס)",
        question_text: "במשולש ישר זווית, הניצב שמול הזווית גמא שווה ל-15, והניצב שלידה שווה ל-8. מהו טנגנס גמא?&rlm;",
        options: ["15 : 8", "8 : 15", "15 : 17", "8 : 17"],
        correctAnswer: 0,
        hint: "טנגנס היא הפונקציה היחידה שאינה משתמשת ביתר. היא מוגדרת כיחס בין הניצב מול לניצב ליד.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת הניצב מול.", math_expression: "a = 15" },
            { verbal_explanation: "שלב 2: מציאת הניצב ליד.", math_expression: "b = 8" },
            { verbal_explanation: "שלב 3: כתיבת נוסחת הטנגנס.", math_expression: "\\tan(\\gamma) = \\dfrac{a}{b}" },
            { verbal_explanation: "שלב 4: הצבה בפונקציה.", math_expression: "\\tan(\\gamma) = \\dfrac{15}{8}" },
            { verbal_explanation: "שלב 5: הרישום הרשמי.", math_expression: "15 : 8" }
        ],
        final_answer: "15 : 8"
    },

    // שאלה מספר 4
    {
        topic: "trigonometry_172",
        subTopic: "הכרת פונקציות הטריגו (סינוס, קוסינוס, טנגנס)",
        question_text: "אם במשולש ישר זווית נתון ש- \\( \\sin(\\alpha) = 0.5 \\), והיתר שווה ל-20. מהו אורך הניצב מול הזווית אלפא?&rlm;",
        options: ["10", "40", "5", "15"],
        correctAnswer: 0,
        hint: "הציבו בנוסחה את הערך של הסינוס ואת היתר, ופתרו משוואה פשוטה למציאת הניצב מול.",
        solution_steps: [
            { verbal_explanation: "שלב 1: רישום הנתון של הסינוס.", math_expression: "\\sin(\\alpha) = 0.5" },
            { verbal_explanation: "שלב 2: רישום אורך היתר.", math_expression: "c = 20" },
            { verbal_explanation: "שלב 3: הצבה בנוסחת הסינוס הבסיסית.", math_expression: "0.5 = \\dfrac{a}{20}" },
            { verbal_explanation: "שלב 4: הכפלת שני האגפים בעשרים כדי לבודד את המונה.", math_expression: "a = 0.5 \\times 20" },
            { verbal_explanation: "שלב 5: חישוב הפעולה.", math_expression: "a = 10" },
            { verbal_explanation: "שלב 6: אורך הניצב נמצא.", math_expression: "10" }
        ],
        final_answer: "10"
    },

    // שאלה מספר 5
    {
        topic: "trigonometry_172",
        subTopic: "הכרת פונקציות הטריגו (סינוס, קוסינוס, טנגנס)",
        question_text: "נתון ש- \\( \\cos(\\beta) = 0.8 \\). אם אורך הניצב שליד הזווית הוא 16, מהו אורך היתר?&rlm;<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='40,160 160,160 160,40' fill='none' stroke='#10b981' stroke-width='3'/><polyline points='140,160 140,140 160,140' fill='none' stroke='#10b981' stroke-width='2'/><path d='M 70 160 A 30 30 0 0 0 60 140' fill='none' stroke='#ef4444' stroke-width='2'/><text x='75' y='145' font-size='14' fill='#ef4444'>β</text><text x='100' y='180' font-size='14' fill='#334155'>16</text><text x='90' y='90' font-size='14' fill='#334155'>c</text></svg></div>",
        options: ["20", "12.8", "10", "32"],
        correctAnswer: 0,
        hint: "היתר נמצא במכנה. הציבו את הנתונים, החליפו מקומות בין היתר לבין הערך העשרוני, וחלקו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים בנוסחת קוסינוס.", math_expression: "0.8 = \\dfrac{16}{c}" },
            { verbal_explanation: "שלב 2: הכפלת המשוואה ביתר.", math_expression: "0.8 \\times c = 16" },
            { verbal_explanation: "שלב 3: חלוקת שני האגפים בערך של הקוסינוס.", math_expression: "c = 16 : 0.8" },
            { verbal_explanation: "שלב 4: ביצוע פעולת החילוק להשגת היתר.", math_expression: "c = 20" },
            { verbal_explanation: "שלב 5: התוצאה הסופית המבוקשת.", math_expression: "20" }
        ],
        final_answer: "20"
    },

    // שאלה מספר 6
    {
        topic: "trigonometry_172",
        subTopic: "הכרת פונקציות הטריגו (סינוס, קוסינוס, טנגנס)",
        question_text: "במשולש ישר זווית, אורך שני הניצבים שווה ל-7. למה שווה \\( \\tan(\\alpha) \\) של כל אחת מהזוויות החדות?&rlm;",
        options: ["1", "0.5", "2", "7"],
        correctAnswer: 0,
        hint: "זהו משולש שווה שוקיים וישר זווית. חלקו את הניצב מול בניצב ליד (שהם למעשה אותו מספר).",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת שני הניצבים כזהים.", math_expression: "a = 7 \\quad , \\quad b = 7" },
            { verbal_explanation: "שלב 2: כתיבת נוסחת טנגנס.", math_expression: "\\tan(\\alpha) = \\dfrac{a}{b}" },
            { verbal_explanation: "שלב 3: הצבת הערכים הזהים.", math_expression: "\\tan(\\alpha) = \\dfrac{7}{7}" },
            { verbal_explanation: "שלב 4: ביצוע החלוקה של מספר בעצמו.", math_expression: "\\tan(\\alpha) = 1" },
            { verbal_explanation: "שלב 5: התוצאה הרשמית.", math_expression: "1" }
        ],
        final_answer: "1"
    },

    // שאלה מספר 7
    {
        topic: "trigonometry_172",
        subTopic: "הכרת פונקציות הטריגו (סינוס, קוסינוס, טנגנס)",
        question_text: "אם היתר במשולש ישר זווית כפול באורכו מהניצב שליד הזווית אלפא. מהו \\( \\cos(\\alpha) \\)?&rlm;",
        options: ["0.5", "2", "1", "0.25"],
        correctAnswer: 0,
        hint: "סמנו את הניצב באיקס ואת היתר בשני איקס. הציבו בנוסחת קוסינוס וצמצמו את הנעלם.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת הניצב שליד.", math_expression: "b = x" },
            { verbal_explanation: "שלב 2: הגדרת היתר ככפול באורכו.", math_expression: "c = 2x" },
            { verbal_explanation: "שלב 3: הצבה בנוסחת הקוסינוס.", math_expression: "\\cos(\\alpha) = \\dfrac{x}{2x}" },
            { verbal_explanation: "שלב 4: צמצום הנעלם במונה ובמכנה.", math_expression: "\\cos(\\alpha) = \\dfrac{1}{2}" },
            { verbal_explanation: "שלב 5: המרת השבר למספר עשרוני.", math_expression: "\\cos(\\alpha) = 0.5" },
            { verbal_explanation: "שלב 6: הרישום הסופי.", math_expression: "0.5" }
        ],
        final_answer: "0.5"
    },

    // שאלה מספר 8
    {
        topic: "trigonometry_172",
        subTopic: "הכרת פונקציות הטריגו (סינוס, קוסינוס, טנגנס)",
        question_text: "נתון ש- \\( \\tan(\\beta) = 2.5 \\). הניצב שליד הזווית שווה ל-4. מהו הניצב מול הזווית?&rlm;",
        options: ["10", "1.6", "6.5", "15"],
        correctAnswer: 0,
        hint: "הציבו בנוסחת טנגנס. הניצב מול חלקי 4 שווה ל-2.5. כפלו את שני האגפים בארבע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: רישום הנתון של הטנגנס.", math_expression: "\\tan(\\beta) = 2.5" },
            { verbal_explanation: "שלב 2: זיהוי הניצב המכנה (ליד).", math_expression: "b = 4" },
            { verbal_explanation: "שלב 3: הצבה במשפט הטנגנס למציאת המונה (מול).", math_expression: "2.5 = \\dfrac{a}{4}" },
            { verbal_explanation: "שלב 4: הכפלה בארבע.", math_expression: "a = 2.5 \\times 4" },
            { verbal_explanation: "שלב 5: קבלת התוצאה לניצב מול.", math_expression: "a = 10" },
            { verbal_explanation: "שלב 6: סיכום התשובה.", math_expression: "10" }
        ],
        final_answer: "10"
    },

    // שאלה מספר 9
    {
        topic: "trigonometry_172",
        subTopic: "הכרת פונקציות הטריגו (סינוס, קוסינוס, טנגנס)",
        question_text: "באיזו מהפונקציות נשתמש אם נתונים לנו אך ורק שני הניצבים של משולש ישר זווית, ואנו מחפשים זווית?&rlm;",
        options: ["טנגנס", "סינוס", "קוסינוס", "משפט פיתגורס"],
        correctAnswer: 0,
        hint: "בדקו איזו פונקציה אינה מערבת את היתר, אלא רק את היחס בין הניצב ממול לניצב שליד.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בחינת פונקציית סינוס.", math_expression: "\\sin = \\dfrac{a}{c}" },
            { verbal_explanation: "שלב 2: בחינת פונקציית קוסינוס.", math_expression: "\\cos = \\dfrac{b}{c}" },
            { verbal_explanation: "שלב 3: בחינת פונקציית טנגנס.", math_expression: "\\tan = \\dfrac{a}{b}" },
            { verbal_explanation: "שלב 4: שלילת הפונקציות המכילות יתר, כיוון שהוא אינו נתון.", math_expression: "\\tan" },
            { verbal_explanation: "שלב 5: התשובה העיונית.", math_expression: "\\tan" }
        ],
        final_answer: "טנגנס"
    },

    // שאלה מספר 10
    {
        topic: "trigonometry_172",
        subTopic: "הכרת פונקציות הטריגו (סינוס, קוסינוס, טנגנס)",
        question_text: "מה יכול להיות הערך המקסימלי של \\( \\sin(\\alpha) \\) במשולש ישר זווית? (הניחו שאלפא זווית חדה)&rlm;",
        options: ["תמיד קטן מ-1", "יכול להיות 1 בדיוק", "יכול להיות גדול מ-1", "תלוי באורך הצלעות"],
        correctAnswer: 0,
        hint: "סינוס הוא היחס בין ניצב ליתר. במשולש ישר זווית, היתר הוא תמיד הצלע הארוכה ביותר. האם מונה יכול להיות גדול מהמכנה במקרה כזה?",
        solution_steps: [
            { verbal_explanation: "שלב 1: הבנת תכונת היתר מול הניצב.", math_expression: "a < c" },
            { verbal_explanation: "שלב 2: כתיבת יחס הסינוס.", math_expression: "\\sin(\\alpha) = \\dfrac{a}{c}" },
            { verbal_explanation: "שלב 3: חלוקת מספר קטן במספר גדול ממנו.", math_expression: "\\dfrac{a}{c} < 1" },
            { verbal_explanation: "שלב 4: המסקנה המתמטית לגבי טווח הסינוס במשולש.", math_expression: "\\sin(\\alpha) < 1" },
            { verbal_explanation: "שלב 5: התשובה המילולית המתאימה לאפשרויות.", math_expression: "1 >" }
        ],
        final_answer: "תמיד קטן מ-1"
    },

    // שאלה מספר 11
    {
        topic: "trigonometry_172",
        subTopic: "הכרת פונקציות הטריגו (סינוס, קוסינוס, טנגנס)",
        question_text: "ידוע כי במשולש ישר זווית \\( \\sin(\\alpha) = \\cos(\\alpha) \\). מהו הגודל של הזווית אלפא במעלות?&rlm;",
        options: ["45", "30", "60", "90"],
        correctAnswer: 0,
        hint: "אם הסינוס והקוסינוס שווים, משמעות הדבר היא שהניצב מול שווה לניצב ליד. באיזה משולש ישר זווית הניצבים שווים?",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת השוויון הנתון.", math_expression: "\\dfrac{a}{c} = \\dfrac{b}{c}" },
            { verbal_explanation: "שלב 2: צמצום המכנים הזהים (היתר).", math_expression: "a = b" },
            { verbal_explanation: "שלב 3: מסקנה: זהו משולש ישר זווית ושווה שוקיים.", math_expression: "x + x + 90 = 180" },
            { verbal_explanation: "שלב 4: חישוב סכום זוויות הבסיס.", math_expression: "2x = 90" },
            { verbal_explanation: "שלב 5: מציאת גודל כל אחת מהזוויות.", math_expression: "x = 45" },
            { verbal_explanation: "שלב 6: הרישום הרשמי.", math_expression: "45" }
        ],
        final_answer: "45"
    },

    // שאלה מספר 12
    {
        topic: "trigonometry_172",
        subTopic: "הכרת פונקציות הטריגו (סינוס, קוסינוס, טנגנס)",
        question_text: "במשולש ישר זווית, אורכי הצלעות הם 6, 8 ו-10. אלפא היא הזווית שמול הניצב שאורכו 6. למה שווה \\( \\cos(\\alpha) \\)?&rlm;",
        options: ["8 : 10", "6 : 10", "6 : 8", "10 : 8"],
        correctAnswer: 0,
        hint: "זיהוי נכון של הצלעות: 10 הוא היתר. אם אלפא מול 6, אזי הניצב שליד אלפא הוא 8. קוסינוס הוא ליד חלקי יתר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי היתר כצלע הארוכה ביותר.", math_expression: "c = 10" },
            { verbal_explanation: "שלב 2: זיהוי הניצב שמול הזווית מתוך הנתון.", math_expression: "a = 6" },
            { verbal_explanation: "שלב 3: הניצב הנותר חייב להיות הניצב שליד הזווית.", math_expression: "b = 8" },
            { verbal_explanation: "שלב 4: כתיבת נוסחת הקוסינוס.", math_expression: "\\cos(\\alpha) = \\dfrac{b}{c}" },
            { verbal_explanation: "שלב 5: הצבת המספרים אל התבנית.", math_expression: "\\cos(\\alpha) = \\dfrac{8}{10}" },
            { verbal_explanation: "שלב 6: רישום הפתרון כחלוקה.", math_expression: "8 : 10" }
        ],
        final_answer: "8 : 10"
    },

    // ==========================================
    // תת נושא 2: מציאת צלעות וזוויות במשולש ישר זווית (12 שאלות)
    // ==========================================

    // שאלה מספר 13
    {
        topic: "trigonometry_172",
        subTopic: "מציאת צלעות וזוויות במשולש ישר זווית",
        question_text: "במשולש ישר זווית, אורך היתר הוא 14 סנטימטר, וגודל אחת הזוויות החדות הוא 30 מעלות. מצאו את אורך הניצב שמול זווית זו.&rlm;<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='40,160 160,160 160,40' fill='none' stroke='#f59e0b' stroke-width='3'/><polyline points='140,160 140,140 160,140' fill='none' stroke='#f59e0b' stroke-width='2'/><path d='M 70 160 A 30 30 0 0 0 60 140' fill='none' stroke='#ef4444' stroke-width='2'/><text x='75' y='145' font-size='14' fill='#ef4444'>30°</text><text x='170' y='105' font-size='14' fill='#334155'>x</text><text x='90' y='90' font-size='14' fill='#334155'>14</text></svg></div>",
        options: ["7", "12.12", "14", "28"],
        correctAnswer: 0,
        hint: "השתמשו בפונקציית הסינוס, שמקשרת בין הניצב ממול, היתר, והזווית. זכרו שסינוס שלושים הוא חצי.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי הפונקציה המתאימה לנתונים.", math_expression: "\\sin(30^{\\circ}) = \\dfrac{x}{14}" },
            { verbal_explanation: "שלב 2: הכפלת שני האגפים ביתר כדי לבודד את הנעלם במונה.", math_expression: "x = 14 \\times \\sin(30^{\\circ})" },
            { verbal_explanation: "שלב 3: שליפת ערך הסינוס מהמחשבון.", math_expression: "\\sin(30^{\\circ}) = 0.5" },
            { verbal_explanation: "שלב 4: ביצוע פעולת הכפל.", math_expression: "x = 14 \\times 0.5" },
            { verbal_explanation: "שלב 5: השגת התוצאה הסופית.", math_expression: "x = 7" },
            { verbal_explanation: "שלב 6: הרישום הדרוש לבחירה.", math_expression: "7" }
        ],
        final_answer: "7"
    },

    // שאלה מספר 14
    {
        topic: "trigonometry_172",
        subTopic: "מציאת צלעות וזוויות במשולש ישר זווית",
        question_text: "במשולש ישר זווית, אורך הניצב שליד זווית של 60 מעלות הוא 5. מהו אורך היתר?&rlm;",
        options: ["10", "8.66", "2.5", "5"],
        correctAnswer: 0,
        hint: "היעזרו בקוסינוס, המקשר בין הניצב ליד והיתר. הפעם הנעלם נמצא במכנה, ולכן עליכם לחלק.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית המשוואה לפי הגדרת קוסינוס.", math_expression: "\\cos(60^{\\circ}) = \\dfrac{5}{c}" },
            { verbal_explanation: "שלב 2: החלפת מקומות אלגברית בין היתר לקוסינוס.", math_expression: "c = \\dfrac{5}{\\cos(60^{\\circ})}" },
            { verbal_explanation: "שלב 3: מציאת הערך של קוסינוס שישים במחשבון.", math_expression: "\\cos(60^{\\circ}) = 0.5" },
            { verbal_explanation: "שלב 4: חלוקת המספרים.", math_expression: "c = 5 : 0.5" },
            { verbal_explanation: "שלב 5: חישוב התוצאה (חלוקה בחצי שקולה לכפל בשתיים).", math_expression: "c = 10" },
            { verbal_explanation: "שלב 6: התשובה המסכמת.", math_expression: "10" }
        ],
        final_answer: "10"
    },

    // שאלה מספר 15
    {
        topic: "trigonometry_172",
        subTopic: "מציאת צלעות וזוויות במשולש ישר זווית",
        question_text: "אורך הניצב שמול זווית של 45 מעלות הוא 8. מהו אורך הניצב השני (זה שליד הזווית)?&rlm;",
        options: ["8", "11.31", "5.65", "4"],
        correctAnswer: 0,
        hint: "אתם מחפשים קשר בין שני ניצבים. השתמשו בטנגנס. זכרו שטנגנס של 45 מעלות שווה ל-1 בדיוק.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת משוואת טנגנס.", math_expression: "\\tan(45^{\\circ}) = \\dfrac{8}{b}" },
            { verbal_explanation: "שלב 2: הוצאת ערך הטנגנס מהמחשבון.", math_expression: "\\tan(45^{\\circ}) = 1" },
            { verbal_explanation: "שלב 3: הצבה במשוואה.", math_expression: "1 = \\dfrac{8}{b}" },
            { verbal_explanation: "שלב 4: בידוד המכנה על ידי כפל.", math_expression: "b = 8 : 1" },
            { verbal_explanation: "שלב 5: חישוב התוצאה (הגיוני מאחר וזהו משולש ישר זווית שווה שוקיים).", math_expression: "b = 8" },
            { verbal_explanation: "שלב 6: הרישום הסופי.", math_expression: "8" }
        ],
        final_answer: "8"
    },

    // שאלה מספר 16
    {
        topic: "trigonometry_172",
        subTopic: "מציאת צלעות וזוויות במשולש ישר זווית",
        question_text: "במשולש ישר זווית, אורך היתר הוא 20. הזווית מול הניצב המבוקש היא 20 מעלות. חשבו את הניצב, לעגל ל-2 ספרות עשרוניות.&rlm;",
        options: ["6.84", "18.79", "7.28", "54.94"],
        correctAnswer: 0,
        hint: "ניצב מול ויתר מכוונים אותנו לשימוש בסינוס. הכפילו את היתר בסינוס 20.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבה בנוסחת סינוס.", math_expression: "\\sin(20^{\\circ}) = \\dfrac{a}{20}" },
            { verbal_explanation: "שלב 2: בידוד הניצב על ידי כפל.", math_expression: "a = 20 \\times \\sin(20^{\\circ})" },
            { verbal_explanation: "שלב 3: חישוב במחשבון של סינוס עשרים.", math_expression: "\\sin(20^{\\circ}) \\approx 0.342" },
            { verbal_explanation: "שלב 4: הכפלת הערכים.", math_expression: "a \\approx 20 \\times 0.342" },
            { verbal_explanation: "שלב 5: קבלת התוצאה העשרונית המעוגלת.", math_expression: "a \\approx 6.84" },
            { verbal_explanation: "שלב 6: רישום למענה.", math_expression: "6.84" }
        ],
        final_answer: "6.84"
    },

    // שאלה מספר 17
    {
        topic: "trigonometry_172",
        subTopic: "מציאת צלעות וזוויות במשולש ישר זווית",
        question_text: "במשולש ישר זווית נתונים שני הניצבים: הניצב מול הזווית אלפא הוא 3, והניצב שלידה הוא 4. מצאו את הזווית אלפא (עגלו לשתי ספרות עשרוניות).&rlm;",
        options: ["36.87", "53.13", "45.00", "0.75"],
        correctAnswer: 0,
        hint: "היחס בין שני הניצבים מתואר על ידי טנגנס. לאחר החישוב, בצעו את הפעולה ההפוכה במחשבון (Shift Tan).",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת המשוואה לפי טנגנס.", math_expression: "\\tan(\\alpha) = \\dfrac{3}{4}" },
            { verbal_explanation: "שלב 2: הפיכת השבר לעשרוני.", math_expression: "\\tan(\\alpha) = 0.75" },
            { verbal_explanation: "שלב 3: הפעלת הפונקציה ההפוכה כדי לחלץ את הזווית במעלות.", math_expression: "\\alpha = \\tan^{-1}(0.75)" },
            { verbal_explanation: "שלב 4: חישוב במחשבון מתמטי.", math_expression: "\\alpha \\approx 36.8698" },
            { verbal_explanation: "שלב 5: עיגול לשתי ספרות עשרוניות בהתאם להוראות.", math_expression: "36.87" },
            { verbal_explanation: "שלב 6: רישום.", math_expression: "36.87" }
        ],
        final_answer: "36.87"
    },

    // שאלה מספר 18
    {
        topic: "trigonometry_172",
        subTopic: "מציאת צלעות וזוויות במשולש ישר זווית",
        question_text: "אורך היתר במשולש הוא 10, ואורך אחד הניצבים הוא 5. מצאו את הזווית שממול לניצב זה.&rlm;<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='40,160 160,160 160,40' fill='none' stroke='#3b82f6' stroke-width='3'/><polyline points='140,160 140,140 160,140' fill='none' stroke='#3b82f6' stroke-width='2'/><path d='M 70 160 A 30 30 0 0 0 60 140' fill='none' stroke='#ef4444' stroke-width='2'/><text x='75' y='145' font-size='14' fill='#ef4444'>?</text><text x='170' y='105' font-size='14' fill='#334155'>5</text><text x='90' y='90' font-size='14' fill='#334155'>10</text></svg></div>",
        options: ["30", "60", "45", "0.5"],
        correctAnswer: 0,
        hint: "ניצב מול ויתר מחייבים שימוש בסינוס. חפשו במחשבון את הזווית שבה הסינוס שווה לחצי.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבה בנוסחת הסינוס.", math_expression: "\\sin(\\alpha) = \\dfrac{5}{10}" },
            { verbal_explanation: "שלב 2: צמצום השבר.", math_expression: "\\sin(\\alpha) = 0.5" },
            { verbal_explanation: "שלב 3: שימוש בפעולה ההפוכה במחשבון.", math_expression: "\\alpha = \\sin^{-1}(0.5)" },
            { verbal_explanation: "שלב 4: קבלת הזווית החדה במעלות.", math_expression: "\\alpha = 30" },
            { verbal_explanation: "שלב 5: התשובה הרצויה.", math_expression: "30" }
        ],
        final_answer: "30"
    },

    // שאלה מספר 19
    {
        topic: "trigonometry_172",
        subTopic: "מציאת צלעות וזוויות במשולש ישר זווית",
        question_text: "במשולש ישר זווית, אורך הניצב שליד הזווית גמא הוא 7, ואורך היתר הוא 14. חשבו את הזווית גמא.&rlm;",
        options: ["60", "30", "45", "0.5"],
        correctAnswer: 0,
        hint: "ניצב ליד ויתר מכוונים לפונקציית הקוסינוס. הציבו את היחס והשתמשו בפונקציה ההפוכה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת משוואת קוסינוס.", math_expression: "\\cos(\\gamma) = \\dfrac{7}{14}" },
            { verbal_explanation: "שלב 2: חישוב השבר כערך עשרוני.", math_expression: "\\cos(\\gamma) = 0.5" },
            { verbal_explanation: "שלב 3: מציאת הזווית בעזרת שיפט קוסינוס.", math_expression: "\\gamma = \\cos^{-1}(0.5)" },
            { verbal_explanation: "שלב 4: תוצאת המחשבון למעלות שלמות.", math_expression: "\\gamma = 60" },
            { verbal_explanation: "שלב 5: הרישום המסכם.", math_expression: "60" }
        ],
        final_answer: "60"
    },

    // שאלה מספר 20
    {
        topic: "trigonometry_172",
        subTopic: "מציאת צלעות וזוויות במשולש ישר זווית",
        question_text: "אורך הניצב מול זווית של 50 מעלות הוא 10. חשבו את הניצב שליד הזווית (עגלו ל-2 ספרות עשרוניות).&rlm;",
        options: ["8.39", "11.92", "7.66", "13.05"],
        correctAnswer: 0,
        hint: "כששני ניצבים מעורבים בבעיה (האחד נתון והשני נעלם), הפונקציה המתאימה היא טנגנס. המכנה יהיה הנעלם.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית המשוואה.", math_expression: "\\tan(50^{\\circ}) = \\dfrac{10}{b}" },
            { verbal_explanation: "שלב 2: חילוץ הנעלם שנמצא במכנה על ידי חלוקה.", math_expression: "b = \\dfrac{10}{\\tan(50^{\\circ})}" },
            { verbal_explanation: "שלב 3: מציאת ערך הטנגנס.", math_expression: "\\tan(50^{\\circ}) \\approx 1.1917" },
            { verbal_explanation: "שלב 4: ביצוע פעולת החילוק המלאה.", math_expression: "b \\approx 10 : 1.1917" },
            { verbal_explanation: "שלב 5: קבלת התוצאה מהמחשבון.", math_expression: "b \\approx 8.39" },
            { verbal_explanation: "שלב 6: הרישום לבחירה.", math_expression: "8.39" }
        ],
        final_answer: "8.39"
    },

    // שאלה מספר 21
    {
        topic: "trigonometry_172",
        subTopic: "מציאת צלעות וזוויות במשולש ישר זווית",
        question_text: "סולם מונח בזווית של 75 מעלות לקרקע. המרחק מבסיס הסולם לקיר הוא 2 מטרים. מהו אורך הסולם (היתר)?&rlm;",
        options: ["7.73", "7.46", "0.52", "8.00"],
        correctAnswer: 0,
        hint: "קרקע היא הניצב שליד הזווית. אורך הסולם הוא היתר. בחרו בפונקציית קוסינוס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הבנת הבעיה והצבתה בקוסינוס.", math_expression: "\\cos(75^{\\circ}) = \\dfrac{2}{c}" },
            { verbal_explanation: "שלב 2: בידוד היתר (הסולם).", math_expression: "c = \\dfrac{2}{\\cos(75^{\\circ})}" },
            { verbal_explanation: "שלב 3: הוצאת הערך מהמחשבון.", math_expression: "\\cos(75^{\\circ}) \\approx 0.2588" },
            { verbal_explanation: "שלב 4: חלוקת שתיים בתוצאה.", math_expression: "c \\approx 2 : 0.2588" },
            { verbal_explanation: "שלב 5: עיגול המספר לשתי ספרות.", math_expression: "c \\approx 7.73" },
            { verbal_explanation: "שלב 6: קבלת הפתרון.", math_expression: "7.73" }
        ],
        final_answer: "7.73"
    },

    // שאלה מספר 22
    {
        topic: "trigonometry_172",
        subTopic: "מציאת צלעות וזוויות במשולש ישר זווית",
        question_text: "במשולש ישר זווית, אורך ניצב אחד הוא 10 ואורך הניצב השני הוא 10. מצאו את אחת הזוויות החדות ללא מחשבון.",
        options: ["45", "60", "30", "90"],
        correctAnswer: 0,
        hint: "כאשר הניצבים שווים, מהו היחס ביניהם בחישוב טנגנס? מהי הזווית שהטנגנס שלה שווה ל-1?",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת המשוואה.", math_expression: "\\tan(\\alpha) = \\dfrac{10}{10}" },
            { verbal_explanation: "שלב 2: חישוב השבר.", math_expression: "\\tan(\\alpha) = 1" },
            { verbal_explanation: "שלב 3: במשולש שווה שוקיים וישר זווית, הזוויות חייבות להשלים לתשעים במידה שווה.", math_expression: "(180 - 90) : 2" },
            { verbal_explanation: "שלב 4: כלומר כל זווית חדה שווה למחצית מתשעים.", math_expression: "\\alpha = 45" },
            { verbal_explanation: "שלב 5: התשובה.", math_expression: "45" }
        ],
        final_answer: "45"
    },

    // שאלה מספר 23
    {
        topic: "trigonometry_172",
        subTopic: "מציאת צלעות וזוויות במשולש ישר זווית",
        question_text: "במשולש ישר זווית, היתר שווה ל-12 והזווית החדה היא בת 30 מעלות. מהו השטח של המשולש? (רמז: מצאו קודם את שני הניצבים).&rlm;",
        options: ["31.18", "62.35", "18.00", "50.00"],
        correctAnswer: 0,
        hint: "הניצב מול זווית של 30 מעלות שווה תמיד למחצית מהיתר. מצאו אותו, השתמשו בקוסינוס לניצב השני, וכפלו ביניהם חלקי 2.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת הניצב מול הזווית.", math_expression: "a = 12 \\times \\sin(30^{\\circ}) = 12 \\times 0.5 = 6" },
            { verbal_explanation: "שלב 2: מציאת הניצב שליד הזווית.", math_expression: "b = 12 \\times \\cos(30^{\\circ}) \\approx 12 \\times 0.866" },
            { verbal_explanation: "שלב 3: חישוב הניצב השני במדויק.", math_expression: "b \\approx 10.392" },
            { verbal_explanation: "שלב 4: שימוש בנוסחת השטח למשולש (מכפלת ניצבים חלקי שתיים).", math_expression: "S = \\dfrac{6 \\times 10.392}{2}" },
            { verbal_explanation: "שלב 5: ביצוע פעולת החילוק של שש בשתיים תחילה להקלת החישוב.", math_expression: "S = 3 \\times 10.392" },
            { verbal_explanation: "שלב 6: תוצאת הכפל העשרוני.", math_expression: "S \\approx 31.176" },
            { verbal_explanation: "שלב 7: התאמה לאפשרויות הנתונות בעיגול קל.", math_expression: "31.18" }
        ],
        final_answer: "31.18"
    },

    // שאלה מספר 24
    {
        topic: "trigonometry_172",
        subTopic: "מציאת צלעות וזוויות במשולש ישר זווית",
        question_text: "עפיפון מוחזק בחוט שאורכו 50 מטרים המתוח לחלוטין. זווית העילוי של החוט מול הקרקע היא 40 מעלות. באיזה גובה העפיפון נמצא מעל הקרקע?&rlm;",
        options: ["32.14", "38.30", "41.95", "50.00"],
        correctAnswer: 0,
        hint: "זווית עילוי נוצרת מול הגובה, והחוט המתוח הוא היתר. השתמשו בסינוס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הקמת תבנית המשוואה לפי ההקשר.", math_expression: "\\sin(40^{\\circ}) = \\dfrac{h}{50}" },
            { verbal_explanation: "שלב 2: חילוץ נעלם הגובה על ידי כפל.", math_expression: "h = 50 \\times \\sin(40^{\\circ})" },
            { verbal_explanation: "שלב 3: חיפוש הערך של סינוס ארבעים במחשבון.", math_expression: "\\sin(40^{\\circ}) \\approx 0.6428" },
            { verbal_explanation: "שלב 4: הכפלה בחמישים.", math_expression: "h \\approx 50 \\times 0.6428" },
            { verbal_explanation: "שלב 5: קבלת התוצאה.", math_expression: "h \\approx 32.14" },
            { verbal_explanation: "שלב 6: אישור התשובה.", math_expression: "32.14" }
        ],
        final_answer: "32.14"
    },

    // ==========================================
    // תת נושא 3: טריגונומטריה במלבן ובמעוין (12 שאלות)
    // ==========================================

    // שאלה מספר 25
    {
        topic: "trigonometry_172",
        subTopic: "טריגונומטריה במלבן ובמעוין",
        question_text: "במלבן, אורך צלע אחת הוא 8 ואורך הצלע השנייה הוא 6. מהי הזווית שיוצר האלכסון עם הצלע הארוכה (בת ה-8)?&rlm;<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><rect x='40' y='60' width='120' height='80' fill='none' stroke='#3b82f6' stroke-width='2'/><line x1='40' y1='140' x2='160' y2='60' stroke='#f59e0b' stroke-width='2'/><path d='M 70 140 A 30 30 0 0 0 65 125' fill='none' stroke='#ef4444' stroke-width='2'/><text x='75' y='135' font-size='14' fill='#ef4444'>α</text><text x='100' y='160' font-size='14' fill='#334155'>8</text><text x='20' y='105' font-size='14' fill='#334155'>6</text></svg></div>",
        options: ["36.87", "53.13", "45", "0.75"],
        correctAnswer: 0,
        hint: "האלכסון יוצר משולש ישר זווית. הצלע הנגדית לזווית היא ה-6 והצלע הסמוכה אליה היא ה-8. השתמשו בטנגנס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי הניצב מול הזווית המבוקשת.", math_expression: "a = 6" },
            { verbal_explanation: "שלב 2: זיהוי הניצב ליד הזווית המבוקשת.", math_expression: "b = 8" },
            { verbal_explanation: "שלב 3: כתיבת משוואת טנגנס.", math_expression: "\\tan(\\alpha) = \\dfrac{6}{8}" },
            { verbal_explanation: "שלב 4: פישוט השבר לשבר עשרוני.", math_expression: "\\tan(\\alpha) = 0.75" },
            { verbal_explanation: "שלב 5: מציאת הזווית בעזרת הפונקציה ההפוכה.", math_expression: "\\alpha = \\tan^{-1}(0.75)" },
            { verbal_explanation: "שלב 6: חילוץ הערך מהמחשבון.", math_expression: "\\alpha \\approx 36.87" },
            { verbal_explanation: "שלב 7: התוצאה המסכמת.", math_expression: "36.87" }
        ],
        final_answer: "36.87"
    },

    // שאלה מספר 26
    {
        topic: "trigonometry_172",
        subTopic: "טריגונומטריה במלבן ובמעוין",
        question_text: "במלבן, אורך האלכסון הוא 20. הזווית בין האלכסון לצלע הארוכה היא 30 מעלות. מהו אורך הצלע הקצרה?&rlm;",
        options: ["10", "17.32", "20", "5"],
        correctAnswer: 0,
        hint: "הצלע הקצרה נמצאת ממול לזווית הנתונה (של ה-30 מעלות), והאלכסון הוא היתר. לכן, הפעילו סינוס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת הקשר בעזרת פונקציית סינוס.", math_expression: "\\sin(30^{\\circ}) = \\dfrac{h}{20}" },
            { verbal_explanation: "שלב 2: בידוד הגובה (הצלע הקצרה).", math_expression: "h = 20 \\times \\sin(30^{\\circ})" },
            { verbal_explanation: "שלב 3: שליפת ערך הסינוס.", math_expression: "\\sin(30^{\\circ}) = 0.5" },
            { verbal_explanation: "שלב 4: כפל פשוט.", math_expression: "h = 20 \\times 0.5" },
            { verbal_explanation: "שלב 5: הגעה לתוצאה.", math_expression: "h = 10" },
            { verbal_explanation: "שלב 6: הרישום לבחירה.", math_expression: "10" }
        ],
        final_answer: "10"
    },

    // שאלה מספר 27
    {
        topic: "trigonometry_172",
        subTopic: "טריגונומטריה במלבן ובמעוין",
        question_text: "במעוין, האלכסון הארוך שווה ל-24 והאלכסון הקצר שווה ל-10. מהי הזווית החדה של המעוין? (רמז: מצאו קודם חצי זווית ואז הכפילו).&rlm;",
        options: ["45.24", "22.62", "67.38", "134.76"],
        correctAnswer: 0,
        hint: "האלכסונים חוצים זה את זה ויוצרים 4 משולשים ישרי זווית עם ניצבים 12 ו-5. מצאו את הזווית החדה במשולש והכפילו ב-2.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חלוקת האלכסונים למציאת הניצבים במשולש הקטן.", math_expression: "a = 5 \\quad , \\quad b = 12" },
            { verbal_explanation: "שלב 2: שימוש בטנגנס למציאת חצי מהזווית החדה של המעוין.", math_expression: "\\tan(\\alpha) = \\dfrac{5}{12}" },
            { verbal_explanation: "שלב 3: המרה לעשרוני וחישוב שבר.", math_expression: "\\tan(\\alpha) \\approx 0.4166" },
            { verbal_explanation: "שלב 4: הפעלת הפונקציה ההפוכה לקבלת מחצית הזווית.", math_expression: "\\alpha = \\tan^{-1}(0.4166) \\approx 22.62" },
            { verbal_explanation: "שלב 5: הכפלת התוצאה בשתיים, כיוון שהאלכסון חוצה את זווית המעוין.", math_expression: "Angle = 2 \\times 22.62" },
            { verbal_explanation: "שלב 6: חישוב הזווית השלמה.", math_expression: "Angle = 45.24" },
            { verbal_explanation: "שלב 7: הרישום.", math_expression: "45.24" }
        ],
        final_answer: "45.24"
    },

    // שאלה מספר 28
    {
        topic: "trigonometry_172",
        subTopic: "טריגונומטריה במלבן ובמעוין",
        question_text: "אורך צלע מעוין הוא 15. הזווית החדה של המעוין היא 40 מעלות. מהו אורך האלכסון הקצר?&rlm;<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='100,20 160,100 100,180 40,100' fill='none' stroke='#f59e0b' stroke-width='2'/><line x1='40' y1='100' x2='160' y2='100' stroke='#94a3b8' stroke-dasharray='4,4' stroke-width='2'/><path d='M 60 100 A 20 20 0 0 0 50 115' fill='none' stroke='#ef4444' stroke-width='2'/><text x='55' y='110' font-size='10' fill='#ef4444'>20°</text><text x='60' y='60' font-size='14' fill='#334155'>15</text></svg></div>",
        options: ["10.26", "5.13", "28.19", "14.09"],
        correctAnswer: 0,
        hint: "חצו את הזווית החדה ל-20 מעלות. השתמשו בסינוס במשולש ישר הזווית שנוצר כדי למצוא חצי אלכסון, ולאחר מכן הכפילו ב-2.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חלוקת זווית המעוין לשניים כדי לקבל את זווית המשולש ישר הזווית.", math_expression: "\\alpha = 40 : 2 = 20" },
            { verbal_explanation: "שלב 2: הצבה בנוסחת סינוס, כאשר היתר הוא צלע המעוין (15).", math_expression: "\\sin(20^{\\circ}) = \\dfrac{x}{15}" },
            { verbal_explanation: "שלב 3: בידוד הניצב שמהווה מחצית מהאלכסון הקצר.", math_expression: "x = 15 \\times \\sin(20^{\\circ})" },
            { verbal_explanation: "שלב 4: הוצאת הסינוס במחשבון והכפלה.", math_expression: "x \\approx 15 \\times 0.342" },
            { verbal_explanation: "שלב 5: חישוב מחצית האלכסון.", math_expression: "x \\approx 5.13" },
            { verbal_explanation: "שלב 6: הכפלת התוצאה בשתיים למציאת אורך האלכסון השלם.", math_expression: "d = 2 \\times 5.13" },
            { verbal_explanation: "שלב 7: הרישום הסופי להקלדה.", math_expression: "10.26" }
        ],
        final_answer: "10.26"
    },

    // שאלה מספר 29
    {
        topic: "trigonometry_172",
        subTopic: "טריגונומטריה במלבן ובמעוין",
        question_text: "במלבן, אורך האלכסון הוא 12. הוא יוצר זווית של 60 מעלות עם אחת הצלעות. חשבו את שטח המלבן.&rlm;",
        options: ["62.35", "31.18", "72", "144"],
        correctAnswer: 0,
        hint: "חשבו גם את אורך המלבן (בעזרת קוסינוס) וגם את רוחבו (בעזרת סינוס), ואז כפלו ביניהם לקבלת השטח.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת הצלע מול הזווית באמצעות סינוס.", math_expression: "a = 12 \\times \\sin(60^{\\circ})" },
            { verbal_explanation: "שלב 2: חישוב ערך הניצב הראשון.", math_expression: "a \\approx 12 \\times 0.866 = 10.392" },
            { verbal_explanation: "שלב 3: מציאת הצלע ליד הזווית באמצעות קוסינוס.", math_expression: "b = 12 \\times \\cos(60^{\\circ})" },
            { verbal_explanation: "שלב 4: חישוב ערך הניצב השני.", math_expression: "b = 12 \\times 0.5 = 6" },
            { verbal_explanation: "שלב 5: שטח המלבן הוא מכפלת שתי צלעותיו הסמוכות.", math_expression: "S = a \\times b" },
            { verbal_explanation: "שלב 6: הצבה וחישוב.", math_expression: "S = 10.392 \\times 6" },
            { verbal_explanation: "שלב 7: התוצאה המעוגלת של השטח.", math_expression: "62.35" }
        ],
        final_answer: "62.35"
    },

    // שאלה מספר 30
    {
        topic: "trigonometry_172",
        subTopic: "טריגונומטריה במלבן ובמעוין",
        question_text: "אלכסוני המלבן יוצרים ביניהם זווית של 40 מעלות. אורך האלכסון הוא 10. (רמז: נוצר משולש שווה שוקיים משני חצאי אלכסונים וצלע המלבן הקצרה). מהו אורך צלע זו?&rlm;",
        options: ["3.42", "6.84", "1.71", "5.00"],
        correctAnswer: 0,
        hint: "חצאי האלכסונים הם באורך 5. במשולש שווה השוקיים שנוצר, הורידו גובה המחלק את זווית ה-40 ל-20 מעלות, והשתמשו בסינוס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב אורך מחצית האלכסון המהווה שוק במשולש שנוצר.", math_expression: "L = 10 : 2 = 5" },
            { verbal_explanation: "שלב 2: הורדת גובה במשולש שווה השוקיים שחוצה את הזווית בין האלכסונים.", math_expression: "\\alpha = 40 : 2 = 20" },
            { verbal_explanation: "שלב 3: שימוש בסינוס במשולש ישר הזווית החדש למציאת מחצית צלע המלבן.", math_expression: "\\sin(20^{\\circ}) = \\dfrac{x}{5}" },
            { verbal_explanation: "שלב 4: חישוב איקס.", math_expression: "x = 5 \\times 0.342 = 1.71" },
            { verbal_explanation: "שלב 5: הכפלת התוצאה בשתיים כדי לקבל את צלע המלבן השלמה.", math_expression: "a = 2 \\times 1.71" },
            { verbal_explanation: "שלב 6: הרישום לפתרון.", math_expression: "3.42" }
        ],
        final_answer: "3.42"
    },

    // שאלה מספר 31
    {
        topic: "trigonometry_172",
        subTopic: "טריגונומטריה במלבן ובמעוין",
        question_text: "במעוין, הזווית הקהה שווה ל-120 מעלות. אורך הצלע הוא 8. מהו אורך האלכסון הקצר?&rlm;",
        options: ["8", "4", "13.86", "6.93"],
        correctAnswer: 0,
        hint: "אם הזווית הקהה היא 120, החדה היא 60. האלכסון הקצר מחלק את המעוין לשני משולשים שווי צלעות. מה המשמעות לגבי האלכסון?",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת הזווית החדה של המעוין מתוך הזווית הקהה.", math_expression: "180 - 120 = 60" },
            { verbal_explanation: "שלב 2: האלכסון הקצר מחבר את קודקודי הזווית הקהה ויוצר משולש עם הזווית החדה.", math_expression: "Angle = 60" },
            { verbal_explanation: "שלב 3: מכיוון שמעוין מורכב מצלעות שוות, המשולש שנוצר הוא שווה שוקיים עם זווית ראש 60.", math_expression: "Base \\ Angles = (180-60):2 = 60" },
            { verbal_explanation: "שלב 4: הוכחנו שהמשולש הוא שווה צלעות. משמע כל צלעותיו שוות.", math_expression: "a = b = c" },
            { verbal_explanation: "שלב 5: אורך האלכסון חייב להיות שווה לאורך הצלע המקורית של המעוין.", math_expression: "d = 8" },
            { verbal_explanation: "שלב 6: התוצאה מושגת ללא טריגונומטריה מורכבת כלל.", math_expression: "8" }
        ],
        final_answer: "8"
    },

    // שאלה מספר 32
    {
        topic: "trigonometry_172",
        subTopic: "טריגונומטריה במלבן ובמעוין",
        question_text: "במלבן, הזווית בין האלכסון לצלע הקצרה היא 70 מעלות. היקף המלבן הוא 40. חשבו את צלעות המלבן (הביעו צלע אחת כ-X וצלע שנייה באמצעות טנגנס, או נסו פתרון גיאומטרי). כאן נבקש את הצלע הקצרה בלבד, כשהיחס מקורב. (התשובה תהיה אחד מהבאים).&rlm;",
        options: ["5.34", "14.66", "10", "7.5"],
        correctAnswer: 0,
        hint: "היחס בין הצלע הארוכה לקצרה שווה לטנגנס של 70. בנוסף, פעמיים קצרה ועוד פעמיים ארוכה שווה ל-40.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת הקשר בין הצלעות בעזרת טנגנס שבעים.", math_expression: "\\tan(70^{\\circ}) = \\dfrac{L}{W}" },
            { verbal_explanation: "שלב 2: בידוד הצלע הארוכה בעזרת הערך העשרוני.", math_expression: "L = 2.747 \\times W" },
            { verbal_explanation: "שלב 3: כתיבת משוואת ההיקף.", math_expression: "2W + 2L = 40" },
            { verbal_explanation: "שלב 4: חלוקת ההיקף בשתיים להקלה.", math_expression: "W + L = 20" },
            { verbal_explanation: "שלב 5: הצבת הביטוי של האורך בתוך המשוואה.", math_expression: "W + 2.747W = 20" },
            { verbal_explanation: "שלב 6: כינוס איברים.", math_expression: "3.747W = 20" },
            { verbal_explanation: "שלב 7: חלוקה לקבלת הצלע הקצרה.", math_expression: "W \\approx 5.34" }
        ],
        final_answer: "5.34"
    },

    // שאלה מספר 33
    {
        topic: "trigonometry_172",
        subTopic: "טריגונומטריה במלבן ובמעוין",
        question_text: "במעוין, אורך צלע הוא 12. זווית חדה היא 50 מעלות. מהו אורך הגובה היורד מצלע לצלע במעוין? (הגובה הכללי של המעוין).&rlm;",
        options: ["9.19", "7.71", "12", "6"],
        correctAnswer: 0,
        hint: "גובה במעוין יכול להיות מחושב על ידי הורדת אנך מקודקוד צדדי, מה שיוצר משולש ישר זווית שבו הצלע היא היתר, והזווית החדה היא 50.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הציור הדימיוני יוצר משולש ישר זווית עם היתר המהווה את צלע המעוין.", math_expression: "c = 12" },
            { verbal_explanation: "שלב 2: הזווית מול הגובה במקרה זה היא בדיוק הזווית החדה של המעוין.", math_expression: "\\alpha = 50^{\\circ}" },
            { verbal_explanation: "שלב 3: הצבה במשפט הסינוס למציאת הגובה.", math_expression: "\\sin(50^{\\circ}) = \\dfrac{h}{12}" },
            { verbal_explanation: "שלב 4: בידוד הגובה.", math_expression: "h = 12 \\times \\sin(50^{\\circ})" },
            { verbal_explanation: "שלב 5: חישוב הערך במחשבון.", math_expression: "h \\approx 12 \\times 0.766" },
            { verbal_explanation: "שלב 6: התוצאה שמתקבלת.", math_expression: "h \\approx 9.19" },
            { verbal_explanation: "שלב 7: בחירת התשובה.", math_expression: "9.19" }
        ],
        final_answer: "9.19"
    },

    // שאלה מספר 34
    {
        topic: "trigonometry_172",
        subTopic: "טריגונומטריה במלבן ובמעוין",
        question_text: "במלבן, האלכסון ארוך ב-2 סנטימטרים מהצלע הארוכה. הצלע הקצרה היא באורך 6 סנטימטרים. מהי הזווית בין האלכסון לצלע הארוכה?&rlm;",
        options: ["36.87", "41.41", "22.62", "30.00"],
        correctAnswer: 0,
        hint: "קודם יש למצוא את הצלעות. השתמשו בפיתגורס כשאתם מסמנים את הצלע הארוכה באיקס ואת האלכסון באיקס ועוד 2. לאחר מכן, השתמשו בטנגנס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים ממשפט פיתגורס לתוך משוואה.", math_expression: "6^{2} + x^{2} = (x + 2)^{2}" },
            { verbal_explanation: "שלב 2: פתיחת סוגריים עם כפל מקוצר.", math_expression: "36 + x^{2} = x^{2} + 4x + 4" },
            { verbal_explanation: "שלב 3: צמצום איקס בריבוע משני הצדדים.", math_expression: "36 = 4x + 4" },
            { verbal_explanation: "שלב 4: בידוד וחלוקה למציאת הצלע הארוכה.", math_expression: "4x = 32 \\Rightarrow x = 8" },
            { verbal_explanation: "שלב 5: עכשיו כשידוע שהצלעות הן שש ושמונה, נשתמש בטנגנס למציאת הזווית.", math_expression: "\\tan(\\alpha) = \\dfrac{6}{8} = 0.75" },
            { verbal_explanation: "שלב 6: הפעלת פונקציה הפוכה.", math_expression: "\\alpha = \\tan^{-1}(0.75)" },
            { verbal_explanation: "שלב 7: התוצאה למעלות.", math_expression: "36.87" }
        ],
        final_answer: "36.87"
    },

    // שאלה מספר 35
    {
        topic: "trigonometry_172",
        subTopic: "טריגונומטריה במלבן ובמעוין",
        question_text: "במעוין, יחס האלכסונים הוא 3:4. אורך צלע המעוין הוא 10. מצאו את הזווית הקהה של המעוין.&rlm;",
        options: ["106.26", "73.74", "120.00", "90.00"],
        correctAnswer: 0,
        hint: "אם היחס הוא שלוש לארבע, סמנו חצאי אלכסונים כשלושה איקס וארבעה איקס, השתמשו בפיתגורס עם היתר עשר. לבסוף, מצאו זווית בעזרת טנגנס והכפילו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: שימוש בפיתגורס במשולש עם הניצבים הנגזרים מהיחס.", math_expression: "(3x)^{2} + (4x)^{2} = 10^{2}" },
            { verbal_explanation: "שלב 2: העלאה בריבוע.", math_expression: "9x^{2} + 16x^{2} = 100" },
            { verbal_explanation: "שלב 3: כינוס ולמציאת איקס.", math_expression: "25x^{2} = 100 \\Rightarrow x^{2} = 4 \\Rightarrow x = 2" },
            { verbal_explanation: "שלב 4: מציאת חצאי האלכסונים הממשיים.", math_expression: "a = 6 \\quad , \\quad b = 8" },
            { verbal_explanation: "שלב 5: שימוש בטנגנס למציאת חצי הזווית הקהה (ניצב מול חלקי ליד).", math_expression: "\\tan(\\alpha) = \\dfrac{8}{6}" },
            { verbal_explanation: "שלב 6: שיפט טנגנס למציאת הזווית.", math_expression: "\\alpha \\approx 53.13" },
            { verbal_explanation: "שלב 7: הכפלה בשתיים לזווית השלמה.", math_expression: "53.13 \\times 2 = 106.26" }
        ],
        final_answer: "106.26"
    },

    // שאלה מספר 36
    {
        topic: "trigonometry_172",
        subTopic: "טריגונומטריה במלבן ובמעוין",
        question_text: "אלכסוני מלבן חותכים זה את זה ויוצרים שתי זוויות כהות ושתי חדות. הזווית החדה בין האלכסונים היא 50 מעלות. אורך האלכסון כולו הוא 14. מהו שטח המלבן?&rlm;",
        options: ["75.08", "98.00", "37.54", "49.00"],
        correctAnswer: 0,
        hint: "היעזרו בנוסחה לשטח מלבן לפי אלכסונים: מחצית מכפלת האלכסונים כפול סינוס הזווית שביניהם. האלכסונים במלבן שווים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצגת הנוסחה המיוחדת לשטח מרובע לפי אלכסונים.", math_expression: "S = \\dfrac{d_{1} \\times d_{2} \\times \\sin(\\alpha)}{2}" },
            { verbal_explanation: "שלב 2: במלבן שני האלכסונים שווים.", math_expression: "d_{1} = 14 \\quad , \\quad d_{2} = 14" },
            { verbal_explanation: "שלב 3: הצבת הנתונים אל תוך הנוסחה.", math_expression: "S = \\dfrac{14 \\times 14 \\times \\sin(50^{\\circ})}{2}" },
            { verbal_explanation: "שלב 4: מציאת ערך הסינוס.", math_expression: "\\sin(50^{\\circ}) \\approx 0.766" },
            { verbal_explanation: "שלב 5: הכפלת האלכסונים זה בזה.", math_expression: "14 \\times 14 = 196" },
            { verbal_explanation: "שלב 6: חלוקה בשתיים והכפלה בסינוס.", math_expression: "S = 98 \\times 0.766" },
            { verbal_explanation: "שלב 7: הרישום הסופי המעוגל לשטח.", math_expression: "75.08" }
        ],
        final_answer: "75.08"
    }
];