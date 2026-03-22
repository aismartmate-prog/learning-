const questionsDB = [
    // ==========================================
    // תת נושא 1: יחס אורכים בדומים (12 שאלות)
    // ==========================================

    // שאלה מספר 1
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס אורכים בדומים",
        question_text: "שני משולשים דומים זה לזה. יחס הדמיון בין המשולש הגדול למשולש הקטן הוא 3. היקף המשולש הקטן הוא 12. מהו היקף המשולש הגדול?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 300 150' style='max-width:350px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='10,120 70,120 40,40' fill='none' stroke='#3b82f6' stroke-width='2'/><polygon points='100,140 280,140 190,-100' fill='none' stroke='#ef4444' stroke-width='2'/><text x='35' y='100' font-size='12' fill='#334155'>12</text></svg></div>",
        options: ["36", "4", "15", "108"],
        correctAnswer: 0,
        hint: "יחס ההיקפים של מצולעים דומים שווה בדיוק ליחס הדמיון הקווי.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי יחס הדמיון והיקף המשולש הקטן.", math_expression: "k = 3 , P_1 = 12" },
            { verbal_explanation: "שלב 2: כתיבת משוואת יחס ההיקפים השווה ליחס הדמיון.", math_expression: "\\dfrac{P_2}{P_1} = k" },
            { verbal_explanation: "שלב 3: הצבת הנתונים במשוואה.", math_expression: "\\dfrac{P_2}{12} = 3" },
            { verbal_explanation: "שלב 4: הכפלת היקף הקטן ביחס הדמיון לבידוד ההיקף הגדול.", math_expression: "P_2 = 12 \\times 3" },
            { verbal_explanation: "שלב 5: ביצוע פעולת החישוב הסופית.", math_expression: "36" }
        ],
        final_answer: "36"
    },

    // שאלה מספר 2
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס אורכים בדומים",
        question_text: "במשולשים דומים, יחס הדמיון הוא 4. התיכון לצלע במשולש הקטן הוא 5. מהו אורך התיכון המתאים לו במשולש הגדול?&rlm;",
        options: ["20", "1.25", "9", "80"],
        correctAnswer: 0,
        hint: "יחס הדמיון חל על כל קטע פנימי מתאים במשולשים דומים (גבהים, תיכונים וחוצי זוויות).",
        solution_steps: [
            { verbal_explanation: "שלב 1: רישום יחס הדמיון והתיכון הידוע.", math_expression: "k = 4 , m_1 = 5" },
            { verbal_explanation: "שלב 2: קביעת היחס בין התיכונים השווה ליחס הדמיון.", math_expression: "\\dfrac{m_2}{m_1} = k" },
            { verbal_explanation: "שלב 3: הצבת הערכים במשוואה.", math_expression: "\\dfrac{m_2}{5} = 4" },
            { verbal_explanation: "שלב 4: חילוץ אורך התיכון על ידי כפל.", math_expression: "m_2 = 5 \\times 4" },
            { verbal_explanation: "שלב 5: תוצאת הכפל.", math_expression: "20" }
        ],
        final_answer: "20"
    },

    // שאלה מספר 3
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס אורכים בדומים",
        question_text: "שני משושים משוכללים דומים זה לזה. צלע המשוש הקטן היא 2 וצלע המשוש הגדול היא 8. היקף המשוש הגדול הוא 48. מהו היקף המשוש הקטן?&rlm;",
        options: ["12", "6", "24", "16"],
        correctAnswer: 0,
        hint: "מצאו תחילה את יחס הדמיון על ידי חלוקת הצלעות, ואז חלקו את ההיקף הגדול ביחס זה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב יחס הדמיון בין המשושים בעזרת הצלעות.", math_expression: "k = 8 : 2 = 4" },
            { verbal_explanation: "שלב 2: הגדרת יחס ההיקפים.", math_expression: "\\dfrac{P_2}{P_1} = 4" },
            { verbal_explanation: "שלב 3: הצבת ההיקף הגדול במשוואה.", math_expression: "48 : P_1 = 4" },
            { verbal_explanation: "שלב 4: חילוץ ההיקף הקטן על ידי חלוקה.", math_expression: "P_1 = 48 : 4" },
            { verbal_explanation: "שלב 5: ביצוע פעולת החישוב.", math_expression: "12" }
        ],
        final_answer: "12"
    },

    // שאלה מספר 4
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס אורכים בדומים",
        question_text: "היקפיהם של שני משולשים דומים הם 10 ו-30. צלע במשולש הקטן אורכה 4. מה אורך הצלע המתאימה לה במשולש הגדול?&rlm;",
        options: ["12", "1.33", "20", "9"],
        correctAnswer: 0,
        hint: "יחס ההיקפים שווה ליחס הצלעות הקווי.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב יחס הדמיון מתוך ההיקפים.", math_expression: "k = 30 : 10 = 3" },
            { verbal_explanation: "שלב 2: בניית המשוואה למציאת הצלע במשולש הגדול.", math_expression: "x : 4 = 3" },
            { verbal_explanation: "שלב 3: חילוץ הנעלם על ידי כפל.", math_expression: "x = 4 \\times 3" },
            { verbal_explanation: "שלב 4: קבלת התוצאה הסופית.", math_expression: "12" }
        ],
        final_answer: "12"
    },

    // שאלה מספר 5
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס אורכים בדומים",
        question_text: "יחס הדמיון בין שני משולשים הוא 2.5. הגובה לצלע במשולש הקטן הוא 4. מהו הגובה לצלע המתאימה במשולש הגדול?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 300 150' style='max-width:350px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='10,120 70,120 40,40' fill='none' stroke='#10b981' stroke-width='2'/><line x1='40' y1='40' x2='40' y2='120' stroke='#f59e0b' stroke-dasharray='4,4' stroke-width='2'/><polygon points='100,140 250,140 175,-60' fill='none' stroke='#10b981' stroke-width='2'/><line x1='175' y1='-60' x2='175' y2='140' stroke='#f59e0b' stroke-dasharray='4,4' stroke-width='2'/><text x='25' y='90' font-size='12' fill='#334155'>4</text><text x='155' y='60' font-size='12' fill='#334155'>x</text></svg></div>",
        options: ["10", "1.6", "12.5", "100"],
        correctAnswer: 0,
        hint: "יחס הגבהים בין משולשים דומים שווה ליחס הדמיון הקווי.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת יחס הדמיון והגובה הקטן.", math_expression: "k = 2.5 , h_1 = 4" },
            { verbal_explanation: "שלב 2: כתיבת משוואת יחס הגבהים.", math_expression: "h_2 : h_1 = k" },
            { verbal_explanation: "שלב 3: הצבת הנתונים במשוואה.", math_expression: "h_2 : 4 = 2.5" },
            { verbal_explanation: "שלב 4: ביבוד הגובה הגדול על ידי כפל.", math_expression: "h_2 = 4 \\times 2.5" },
            { verbal_explanation: "שלב 5: חישוב התוצאה.", math_expression: "10" }
        ],
        final_answer: "10"
    },

    // שאלה מספר 6
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס אורכים בדומים",
        question_text: "שני מלבנים דומים זה לזה. אורך המלבן הקטן הוא 5 ורוחבו 2. אורך המלבן הגדול הוא 15. מהו היקף המלבן הגדול?&rlm;",
        options: ["42", "14", "30", "150"],
        correctAnswer: 0,
        hint: "מצאו את יחס הדמיון דרך האורכים, חשבו את היקף המלבן הקטן והכפילו ביחס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב יחס הדמיון מהאורכים המתאימים.", math_expression: "k = 15 : 5 = 3" },
            { verbal_explanation: "שלב 2: חישוב היקף המלבן הקטן.", math_expression: "P_1 = 2 \\times (5 + 2)" },
            { verbal_explanation: "שלב 3: תוצאת ההיקף הראשון.", math_expression: "14" },
            { verbal_explanation: "שלב 4: חישוב היקף המלבן הגדול בעזרת היחס הקווי.", math_expression: "P_2 = 14 \\times 3" },
            { verbal_explanation: "שלב 5: קבלת התוצאה הסופית.", math_expression: "42" }
        ],
        final_answer: "42"
    },

    // שאלה מספר 7
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס אורכים בדומים",
        question_text: "יחס ההיקפים של שני מצולעים דומים הוא 1.5. אורך צלע במצולע הגדול הוא 12. מהו אורך הצלע המתאימה במצולע הקטן?&rlm;",
        options: ["8", "18", "10", "4"],
        correctAnswer: 0,
        hint: "מכיוון שנדרשת צלע המצולע הקטן, חלקו את הצלע הגדולה ביחס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי יחס ההיקפים כיחס דמיון קווי.", math_expression: "k = 1.5" },
            { verbal_explanation: "שלב 2: בניית המשוואה המקשרת בין הצלעות.", math_expression: "12 : x = 1.5" },
            { verbal_explanation: "שלב 3: בידוד הנעלם על ידי חלוקה.", math_expression: "x = 12 : 1.5" },
            { verbal_explanation: "שלב 4: ביצוע החישוב.", math_expression: "8" }
        ],
        final_answer: "8"
    },

    // שאלה מספר 8
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס אורכים בדומים",
        question_text: "היקף המשולש הראשון הוא 24 והיקף המשולש השני הוא 72. מהו יחס הדמיון ביניהם (השני חלקי הראשון)?&rlm;",
        options: ["3", "1/3", "9", "6"],
        correctAnswer: 0,
        hint: "יחס הדמיון שווה ליחס ההיקפים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת יחס הדמיון כיחס בין ההיקפים.", math_expression: "k = 72 : 24" },
            { verbal_explanation: "שלב 2: ביצוע החלוטה לקבלת היחס הקבוע.", math_expression: "3" }
        ],
        final_answer: "3"
    },

    // שאלה מספר 9
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס אורכים בדומים",
        question_text: "במשולשים דומים, יחס הדמיון הוא 4. רדיוס המעגל החסום במשולש הקטן הוא 2. מהו רדיוס המעגל החסום במשולש הגדול?&rlm;<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 300 150' style='max-width:350px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='10,120 70,120 40,40' fill='none' stroke='#64748b' stroke-width='2'/><circle cx='40' cy='95' r='25' fill='none' stroke='#3b82f6' stroke-width='2'/><polygon points='100,140 250,140 175,-60' fill='none' stroke='#64748b' stroke-width='2'/><circle cx='175' cy='75' r='65' fill='none' stroke='#ef4444' stroke-width='2'/><text x='35' y='95' font-size='10' fill='#334155'>2</text><text x='170' y='75' font-size='12' fill='#334155'>R</text></svg></div>",
        options: ["8", "16", "6", "0.5"],
        correctAnswer: 0,
        hint: "יחס הרדיוסים של מעגלים חסומים או חוסמים במשולשים דומים שווה ליחס הדמיון הקווי.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת יחס הדמיון והרדיוס הקטן.", math_expression: "k = 4 , r = 2" },
            { verbal_explanation: "שלב 2: כתיבת המשוואה ליחס הרדיוסים.", math_expression: "R : 2 = 4" },
            { verbal_explanation: "שלב 3: חילוץ הרדיוס הגדול על ידי כפל.", math_expression: "R = 2 \\times 4" },
            { verbal_explanation: "שלב 4: תוצאת החישוב.", math_expression: "8" }
        ],
        final_answer: "8"
    },

    // שאלה מספר 10
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס אורכים בדומים",
        question_text: "שני טרפזים דומים. בסיס בטרפז הקטן הוא 5, והבסיס המתאים בגדול הוא 15. אלכסון בטרפז הגדול הוא 21. מה אורך האלכסון המתאים בקטן?&rlm;",
        options: ["7", "63", "11", "3"],
        correctAnswer: 0,
        hint: "מצאו את יחס הדמיון מהבסיסים וחלקו בו את האלכסון הגדול.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב יחס הדמיון מהבסיסים המתאימים.", math_expression: "k = 15 : 5 = 3" },
            { verbal_explanation: "שלב 2: בניית המשוואה לאלכסונים.", math_expression: "21 : x = 3" },
            { verbal_explanation: "שלב 3: בידוד הנעלם על ידי חלוקה.", math_expression: "x = 21 : 3" },
            { verbal_explanation: "שלב 4: תוצאת החישוב.", math_expression: "7" }
        ],
        final_answer: "7"
    },

    // שאלה מספר 11
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס אורכים בדומים",
        question_text: "סכום ההיקפים של שני משולשים דומים הוא 60. יחס הדמיון ביניהם הוא 2. מהו ההיקף של המשולש הקטן?&rlm;",
        options: ["20", "40", "30", "15"],
        correctAnswer: 0,
        hint: "ההיקף הגדול הוא פעמיים ההיקף הקטן. סכומם הוא 3 פעמים ההיקף הקטן.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת הקשר בין ההיקפים.", math_expression: "P_2 = 2 \\times P_1" },
            { verbal_explanation: "שלב 2: כתיבת משוואת הסכום.", math_expression: "P_1 + 2 \\times P_1 = 60" },
            { verbal_explanation: "שלב 3: כינוס נעלמים.", math_expression: "3 \\times P_1 = 60" },
            { verbal_explanation: "שלב 4: חלוקה בשלוש.", math_expression: "20" }
        ],
        final_answer: "20"
    },

    // שאלה מספר 12
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס אורכים בדומים",
        question_text: "במשולש שהיקפו 12, יחס הדמיון למשולש אחר הוא 1.5. מהו היקף המשולש השני?&rlm;",
        options: ["18", "12", "15", "20"],
        correctAnswer: 0,
        hint: "הכפילו את ההיקף הידוע ביחס הדמיון.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים.", math_expression: "12 \\times 1.5 = 18" },
            { verbal_explanation: "שלב 2: התוצאה.", math_expression: "18" }
        ],
        final_answer: "18"
    },

    // ==========================================
    // תת נושא 2: יחס שטחים בדומים (12 שאלות)
    // ==========================================

    // שאלה מספר 13
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס שטחים בדומים",
        question_text: "יחס הדמיון הקווי בין שני משולשים הוא 3. שטח המשולש הקטן הוא 10. מהו שטח המשולש הגדול?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 300 150' style='max-width:350px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='10,120 70,120 40,40' fill='#3b82f6' opacity='0.2' stroke='#3b82f6' stroke-width='2'/><polygon points='100,140 280,140 190,-100' fill='#ef4444' opacity='0.2' stroke='#ef4444' stroke-width='2'/><text x='35' y='110' font-size='12' fill='#334155'>10</text></svg></div>",
        options: ["90", "30", "60", "100"],
        correctAnswer: 0,
        hint: "יחס השטחים שווה לריבוע יחס הדמיון הקווי.",
        solution_steps: [
            { verbal_explanation: "שלב 1: העלאת יחס הדמיון הקווי בריבוע.", math_expression: "3^2 = 9" },
            { verbal_explanation: "שלב 2: הכפלת השטח הקטן ביחס השטחים.", math_expression: "10 \\times 9 = 90" },
            { verbal_explanation: "שלב 3: התוצאה הסופית.", math_expression: "90" }
        ],
        final_answer: "90"
    },

    // שאלה מספר 14
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס שטחים בדומים",
        question_text: "צלע במצולע קטן היא 2, וצלע מתאימה בגדול היא 8. שטח הקטן הוא 5. מהו שטח המצולע הגדול?&rlm;",
        options: ["80", "20", "16", "40"],
        correctAnswer: 0,
        hint: "מצאו את יחס הדמיון הקווי, העלו בריבוע והכפילו בשטח הנתון.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב יחס הדמיון הקווי.", math_expression: "k = 8 : 2 = 4" },
            { verbal_explanation: "שלב 2: חישוב יחס השטחים.", math_expression: "4^2 = 16" },
            { verbal_explanation: "שלב 3: הכפלת השטח הקטן ביחס השטחים.", math_expression: "5 \\times 16 = 80" },
            { verbal_explanation: "שלב 4: תוצאה.", math_expression: "80" }
        ],
        final_answer: "80"
    },

    // שאלה מספר 15
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס שטחים בדומים",
        question_text: "שטח משולש קטן הוא 25 ושטח גדול דומה לו הוא 100. מהו יחס הדמיון הקווי (הצלעות)?&rlm;",
        options: ["2", "4", "25", "16"],
        correctAnswer: 0,
        hint: "חלקו את השטחים לקבלת יחס השטחים, ואז הוציאו שורש ריבועי.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב יחס השטחים.", math_expression: "100 : 25 = 4" },
            { verbal_explanation: "שלב 2: הוצאת שורש ריבועי.", math_expression: "\\sqrt{4} = 2" },
            { verbal_explanation: "שלב 3: קבלת התוצאה.", math_expression: "2" }
        ],
        final_answer: "2"
    },

    // שאלה מספר 16
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס שטחים בדומים",
        question_text: "שטחי שני מחומשים דומים הם 18 ו-50. מהו יחס הדמיון הקווי (הגדול חלקי הקטן)?&rlm;",
        options: ["5/3", "25/9", "50/18", "3/5"],
        correctAnswer: 0,
        hint: "רשמו את יחס השטחים, צמצמו בשתיים והוציאו שורש.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת יחס השטחים.", math_expression: "50 : 18" },
            { verbal_explanation: "שלב 2: צמצום השבר.", math_expression: "25 : 9" },
            { verbal_explanation: "שלב 3: הוצאת שורש ריבועי.", math_expression: "\\sqrt{25 : 9}" },
            { verbal_explanation: "שלב 4: תוצאה.", math_expression: "5 : 3" }
        ],
        final_answer: "5/3"
    },

    // שאלה מספר 17
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס שטחים בדומים",
        question_text: "יחס הדמיון בין מלבנים הוא 1.5. שטח המלבן הגדול הוא 90. מה שטח המלבן הקטן?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 300 150' style='max-width:350px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><rect x='20' y='50' width='80' height='50' fill='#f59e0b' opacity='0.2' stroke='#f59e0b' stroke-width='2'/><rect x='120' y='20' width='120' height='75' fill='#10b981' opacity='0.2' stroke='#10b981' stroke-width='2'/><text x='150' y='65' font-size='14' fill='#334155'>90</text></svg></div>",
        options: ["40", "60", "202.5", "45"],
        correctAnswer: 0,
        hint: "העלו את היחס הקווי בריבוע וחלקו את השטח הגדול בתוצאה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב יחס השטחים.", math_expression: "1.5^2 = 2.25" },
            { verbal_explanation: "שלב 2: חלוקת השטח הגדול ביחס השטחים.", math_expression: "90 : 2.25 = 40" },
            { verbal_explanation: "שלב 3: תוצאת החישוב.", math_expression: "40" }
        ],
        final_answer: "40"
    },

    // שאלה מספר 18
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס שטחים בדומים",
        question_text: "יחס ההיקפים של שתי צורות דומות הוא 3. שטח הגדולה הוא 90. מה שטח הקטנה?&rlm;",
        options: ["10", "30", "810", "270"],
        correctAnswer: 0,
        hint: "יחס ההיקפים שווה ליחס הקווי. יחס השטחים הוא ריבוע היחס הזה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב יחס השטחים.", math_expression: "3^2 = 9" },
            { verbal_explanation: "שלב 2: חלוקת השטח הגדול ביחס השטחים.", math_expression: "90 : 9 = 10" }
        ],
        final_answer: "10"
    },

    // שאלה מספר 19
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס שטחים בדומים",
        question_text: "שטח משולש קטן הוא 5, ושטח גדול דומה לו הוא 45. צלע בקטן היא 2. מה אורך הצלע המתאימה בגדול?&rlm;",
        options: ["6", "18", "9", "4"],
        correctAnswer: 0,
        hint: "מצאו את יחס השטחים, הוציאו שורש והכפילו בצלע הקטנה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב יחס השטחים.", math_expression: "45 : 5 = 9" },
            { verbal_explanation: "שלב 2: הוצאת שורש למציאת יחס הדמיון הקווי.", math_expression: "\\sqrt{9} = 3" },
            { verbal_explanation: "שלב 3: הכפלת הצלע הקטנה ביחס הקווי.", math_expression: "2 \\times 3 = 6" }
        ],
        final_answer: "6"
    },

    // שאלה מספר 20
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס שטחים בדומים",
        question_text: "רדיוס המעגל הגדול הוא פי 2 מרדיוס הקטן. פי כמה גדול שטח המעגל הגדול?&rlm;",
        options: ["4", "2", "8", "16"],
        correctAnswer: 0,
        hint: "יחס הרדיוסים הוא יחס קווי. יחס השטחים הוא ריבוע היחס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב יחס השטחים.", math_expression: "2^2 = 4" }
        ],
        final_answer: "4"
    },

    // שאלה מספר 21
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס שטחים בדומים",
        question_text: "יחס הדמיון בין משולשים הוא 0.5. שטח הגדול הוא 40. מה שטח הקטן?&rlm;",
        options: ["10", "20", "80", "5"],
        correctAnswer: 0,
        hint: "העלו את 0.5 בריבוע והכפילו בשטח הגדול.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב יחס השטחים.", math_expression: "0.5^2 = 0.25" },
            { verbal_explanation: "שלב 2: הכפלת השטח הגדול ביחס השטחים.", math_expression: "40 \\times 0.25 = 10" }
        ],
        final_answer: "10"
    },

    // שאלה מספר 22
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס שטחים בדומים",
        question_text: "יחס השטחים הוא 16. היקף הקטן הוא 10. מה היקף הגדול?&rlm;",
        options: ["40", "160", "2.5", "256"],
        correctAnswer: 0,
        hint: "הוציאו שורש מיחס השטחים לקבלת יחס ההיקפים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת יחס ההיקפים.", math_expression: "\\sqrt{16} = 4" },
            { verbal_explanation: "שלב 2: הכפלת ההיקף הקטן ביחס.", math_expression: "10 \\times 4 = 40" }
        ],
        final_answer: "40"
    },

    // שאלה מספר 23
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס שטחים בדומים",
        question_text: "סכום השטחים הוא 50. יחס הדמיון הקווי הוא 2. מה שטח הקטן?&rlm;",
        options: ["10", "40", "12.5", "25"],
        correctAnswer: 0,
        hint: "השטח הגדול הוא פי 4 מהקטן. חמש פעמים הקטן שווה לחמישים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב יחס השטחים.", math_expression: "2^2 = 4" },
            { verbal_explanation: "שלב 2: הצבה במשוואת סכום.", math_expression: "x + 4 \\times x = 50" },
            { verbal_explanation: "שלב 3: פתרון המשוואה.", math_expression: "5 \\times x = 50 \\Rightarrow x = 10" }
        ],
        final_answer: "10"
    },

    // שאלה מספר 24
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס שטחים בדומים",
        question_text: "תיכון בקטן הוא 3 ובגדול הוא 12. מהו יחס השטחים (הגדול חלקי הקטן)?&rlm;",
        options: ["16", "4", "9", "144"],
        correctAnswer: 0,
        hint: "מצאו יחס תיכונים והעלו בריבוע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב יחס קווי.", math_expression: "12 : 3 = 4" },
            { verbal_explanation: "שלב 2: חישוב יחס שטחים.", math_expression: "4^2 = 16" }
        ],
        final_answer: "16"
    },

    // ==========================================
    // תת נושא 3: יישומים ופתרון בעיות בדמיון (12 שאלות)
    // ==========================================

    // שאלה מספר 25
    {
        topic: "similarity_ratio_35371",
        subTopic: "יישומים ופתרון בעיות",
        question_text: "במפה בקנה מידה 1:50,000, אורך כביש הוא 4 סנטימטר. מה אורכו במציאות בקילומטרים?&rlm;",
        options: ["2", "20", "200", "0.2"],
        correctAnswer: 0,
        hint: "הכפילו ב-50,000 וחלקו ב-100,000 להמרה לקילומטרים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב אורך אמיתי בסנטימטרים.", math_expression: "4 \\times 50000 = 200000" },
            { verbal_explanation: "שלב 2: המרה לקילומטרים.", math_expression: "200000 : 100000 = 2" }
        ],
        final_answer: "2"
    },

    // שאלה מספר 26
    {
        topic: "similarity_ratio_35371",
        subTopic: "יישומים ופתרון בעיות",
        question_text: "אדם בגובה 1.8 מטר מטיל צל של 1.2 מטר. עץ מטיל צל של 6 מטרים. מה גובה העץ?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 300 200' style='max-width:350px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='180' x2='280' y2='180' stroke='#64748b' stroke-width='2'/><line x1='60' y1='180' x2='60' y2='80' stroke='#3b82f6' stroke-width='4'/><line x1='200' y1='180' x2='200' y2='120' stroke='#10b981' stroke-width='4'/></svg></div>",
        options: ["9", "4", "10.8", "7.2"],
        correctAnswer: 0,
        hint: "היחס בין הגובה לצל שווה בשני המקרים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית פרופורציה.", math_expression: "x : 1.8 = 6 : 1.2" },
            { verbal_explanation: "שלב 2: בידוד הנעלם.", math_expression: "x = 1.8 \\times (6 : 1.2)" },
            { verbal_explanation: "שלב 3: ביצוע החישוב.", math_expression: "1.8 \\times 5 = 9" }
        ],
        final_answer: "9"
    },

    // שאלה מספר 27
    {
        topic: "similarity_ratio_35371",
        subTopic: "יישומים ופתרון בעיות",
        question_text: "במשולש הועבר קטע אמצעים. שטח המשולש הקטן שנוצר הוא 10. מה שטח הגדול?&rlm;",
        options: ["40", "20", "30", "100"],
        correctAnswer: 0,
        hint: "יחס דמיון של קטע אמצעים הוא 2. יחס השטחים הוא 4.",
        solution_steps: [
            { verbal_explanation: "שלב 1: קביעת יחס קווי.", math_expression: "k = 2" },
            { verbal_explanation: "שלב 2: קביעת יחס שטחים.", math_expression: "2^2 = 4" },
            { verbal_explanation: "שלב 3: הכפלת השטח הקטן ביחס השטחים.", math_expression: "10 \\times 4 = 40" }
        ],
        final_answer: "40"
    },

    // שאלה מספר 28
    {
        topic: "similarity_ratio_35371",
        subTopic: "יישומים ופתרון בעיות",
        question_text: "שטח עליון קטן הוא 9 ושטח גדול כולו הוא 25. מה היחס בין הגבהים (גדול חלקי קטן)?&rlm;",
        options: ["5/3", "25/9", "3/5", "16/9"],
        correctAnswer: 0,
        hint: "הוציאו שורש מיחס השטחים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: רישום יחס שטחים.", math_expression: "25 : 9" },
            { verbal_explanation: "שלב 2: הוצאת שורש למציאת יחס גבהים.", math_expression: "\\sqrt{25 : 9} = 5 : 3" }
        ],
        final_answer: "5/3"
    },

    // שאלה מספר 29
    {
        topic: "similarity_ratio_35371",
        subTopic: "יישומים ופתרון בעיות",
        question_text: "בניין בגובה 20 מטר מטיל צל של 15 מטר. עמוד בגובה 4 מטרים מטיל צל של איקס. מצאו את איקס.&rlm;",
        options: ["3", "5.33", "75", "12"],
        correctAnswer: 0,
        hint: "היחס בין הגובה לצל קבוע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבה בפרופורציה.", math_expression: "20 : 15 = 4 : x" },
            { verbal_explanation: "שלב 2: בידוד הנעלם.", math_expression: "x = (4 \\times 15) : 20" },
            { verbal_explanation: "שלב 3: ביצוע החישוב.", math_expression: "60 : 20 = 3" }
        ],
        final_answer: "3"
    },

    // שאלה מספר 30
    {
        topic: "similarity_ratio_35371",
        subTopic: "יישומים ופתרון בעיות",
        question_text: "קנה מידה 1:20. אורך צעצוע הוא 25 סנטימטר. מה אורך האמיתי במטרים?&rlm;",
        options: ["5", "500", "12.5", "0.8"],
        correctAnswer: 0,
        hint: "הכפילו ב-20 וחלקו במאה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב בסנטימטרים.", math_expression: "25 \\times 20 = 500" },
            { verbal_explanation: "שלב 2: המרה למטרים.", math_expression: "500 : 100 = 5" }
        ],
        final_answer: "5"
    },

    // שאלה מספר 31
    {
        topic: "similarity_ratio_35371",
        subTopic: "יישומים ופתרון בעיות",
        question_text: "קנה מידה במפה 1:10. שטח במפה הוא 5. מה השטח במציאות?&rlm;",
        options: ["500", "50", "25", "100"],
        correctAnswer: 0,
        hint: "הכפילו בריבוע קנה המידה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב יחס שטחים.", math_expression: "10^2 = 100" },
            { verbal_explanation: "שלב 2: הכפלת השטח ביחס.", math_expression: "5 \\times 100 = 500" }
        ],
        final_answer: "500"
    },

    // שאלה מספר 32
    {
        topic: "similarity_ratio_35371",
        subTopic: "יישומים ופתרון בעיות",
        question_text: "בטרפז בסיסים 4 ו-12. מהו היחס בין שטח המשולש התחתון (על הבסיס הגדול) לעליון?&rlm;",
        options: ["9", "3", "16", "1/3"],
        correctAnswer: 0,
        hint: "חשבו יחס בסיסים והעלו בריבוע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב יחס קווי.", math_expression: "12 : 4 = 3" },
            { verbal_explanation: "שלב 2: חישוב יחס שטחים.", math_expression: "3^2 = 9" }
        ],
        final_answer: "9"
    },

    // שאלה מספר 33
    {
        topic: "similarity_ratio_35371",
        subTopic: "יישומים ופתרון בעיות",
        question_text: "תמונה מוגדלת ב-150% (יחס 1.5). שטח מקורי הוא 20. מה השטח החדש?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 300 200' style='max-width:350px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><rect x='20' y='50' width='60' height='40' fill='#f59e0b' opacity='0.3' stroke='#f59e0b' stroke-width='2'/><rect x='120' y='30' width='90' height='60' fill='#10b981' opacity='0.3' stroke='#10b981' stroke-width='2'/></svg></div>",
        options: ["45", "30", "60", "22.5"],
        correctAnswer: 0,
        hint: "הכפילו ב-1.5 בריבוע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב יחס שטחים.", math_expression: "1.5^2 = 2.25" },
            { verbal_explanation: "שלב 2: הכפלה בשטח המקורי.", math_expression: "20 \\times 2.25 = 45" }
        ],
        final_answer: "45"
    },

    // שאלה מספר 34
    {
        topic: "similarity_ratio_35371",
        subTopic: "יישומים ופתרון בעיות",
        question_text: "יחס שטחים הוא 4. צלע בגדול היא 10. מה הצלע המתאימה בקטן?&rlm;",
        options: ["5", "2.5", "2", "20"],
        correctAnswer: 0,
        hint: "הוציאו שורש מיחס השטחים וחלקו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת יחס קווי.", math_expression: "\\sqrt{4} = 2" },
            { verbal_explanation: "שלב 2: חלוקת הצלע ביחס.", math_expression: "10 : 2 = 5" }
        ],
        final_answer: "5"
    },

    // שאלה מספר 35
    {
        topic: "similarity_ratio_35371",
        subTopic: "יישומים ופתרון בעיות",
        question_text: "שטח קטן הוא 6 ושטח גדול הוא 54. יתר בקטן הוא 5. מה יתר בגדול?&rlm;",
        options: ["15", "45", "18", "12"],
        correctAnswer: 0,
        hint: "מצאו יחס שטחים, הוציאו שורש והכפילו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב יחס שטחים.", math_expression: "54 : 6 = 9" },
            { verbal_explanation: "שלב 2: מציאת יחס קווי.", math_expression: "\\sqrt{9} = 3" },
            { verbal_explanation: "שלב 3: הכפלה ביתר הקטן.", math_expression: "5 \\times 3 = 15" }
        ],
        final_answer: "15"
    },

    // שאלה מספר 36
    {
        topic: "similarity_ratio_35371",
        subTopic: "יישומים ופתרון בעיות",
        question_text: "מרחק אמיתי 10 ק''מ. במפה הוא 5 ס''מ. מה קנה המידה?&rlm;",
        options: ["1:200,000", "1:20,000", "1:50,000", "1:2,000,000"],
        correctAnswer: 0,
        hint: "המירו קילומטרים לסנטימטרים וחלקו ב-5.",
        solution_steps: [
            { verbal_explanation: "שלב 1: המרה לסנטימטרים.", math_expression: "10 \\times 100000 = 1000000" },
            { verbal_explanation: "שלב 2: חישוב היחס.", math_expression: "1000000 : 5 = 200000" }
        ],
        final_answer: "1:200,000"
    }
];