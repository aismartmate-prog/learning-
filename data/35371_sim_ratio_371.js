const questionsDB = [
    // ==========================================
    // תת נושא 1: יחס אורכים בדומים (12 שאלות - רמה גבוהה)
    // ==========================================

    // שאלה מספר 1
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס אורכים בדומים",
        question_text: "שני משולשים דומים. יחס הדמיון בין המשולש הגדול לקטן הוא 1.5. סכום ההיקפים של שני המשולשים הוא 60. מהו היקף המשולש הקטן?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 300 150' style='max-width:350px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='30,120 90,120 60,40' fill='#3b82f6' opacity='0.2' stroke='#3b82f6' stroke-width='2'/><polygon points='120,140 210,140 165,20' fill='#ef4444' opacity='0.2' stroke='#ef4444' stroke-width='2'/><text x='110' y='80' font-size='12' fill='#334155'>k=1.5</text></svg></div>",
        options: ["24", "36", "40", "20"],
        correctAnswer: 0,
        hint: "סמנו את היקף המשולש הקטן בנעלם. היקף המשולש הגדול יהיה גדול פי 1.5 ממנו. חברו אותם ובנו משוואה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת יחס ההיקפים על סמך יחס הדמיון הנתון.", math_expression: "P_2 = 1.5 \\times P_1" },
            { verbal_explanation: "שלב 2: כתיבת משוואת סכום ההיקפים מהנתונים.", math_expression: "P_1 + P_2 = 60" },
            { verbal_explanation: "שלב 3: הצבת הביטוי של ההיקף הגדול במשוואה.", math_expression: "P_1 + 1.5 \\times P_1 = 60" },
            { verbal_explanation: "שלב 4: כינוס איברים דומים (חיבור המקדמים).", math_expression: "2.5 \\times P_1 = 60" },
            { verbal_explanation: "שלב 5: בידוד הנעלם על ידי חלוקת המשוואה בשתיים וחצי.", math_expression: "P_1 = 60 : 2.5" },
            { verbal_explanation: "שלב 6: ביצוע החילוק במחשבון לקבלת ההיקף הקטן.", math_expression: "24" }
        ],
        final_answer: "24"
    },

    // שאלה מספר 2
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס אורכים בדומים",
        question_text: "במשולשים דומים, התיכון במשולש הקטן הוא באורך איקס. התיכון המתאים במשולש הגדול הוא איקס פלוס שש. יחס הדמיון הוא 2.5. מצאו את איקס (אורך התיכון הקטן).&rlm;",
        options: ["4", "6", "2", "8"],
        correctAnswer: 0,
        hint: "יחס התיכונים שווה ליחס הדמיון. בנו משוואה רציונלית ופתרו אותה בעזרת כפל במכנה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצגת התכונה לפיה יחס התיכונים שווה ליחס הדמיון.", math_expression: "\\dfrac{m_2}{m_1} = k" },
            { verbal_explanation: "שלב 2: הצבת הביטויים האלגבריים במשוואה.", math_expression: "\\dfrac{x + 6}{x} = 2.5" },
            { verbal_explanation: "שלב 3: הכפלת שני האגפים בנעלם שבמכנה.", math_expression: "x + 6 = 2.5 \\times x" },
            { verbal_explanation: "שלב 4: העברת אגפים לכינוס המשתנים בצד אחד.", math_expression: "6 = 2.5x - x" },
            { verbal_explanation: "שלב 5: ביצוע החיסור (שתיים וחצי איקס פחות איקס שלם).", math_expression: "1.5 \\times x = 6" },
            { verbal_explanation: "שלב 6: חלוקת המשוואה באחד וחצי לחילוץ הנעלם.", math_expression: "x = 6 : 1.5" },
            { verbal_explanation: "שלב 7: התוצאה הסופית לאורך התיכון.", math_expression: "4" }
        ],
        final_answer: "4"
    },

    // שאלה מספר 3
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס אורכים בדומים",
        question_text: "שני משולשים ישרי זווית דומים. במשולש הקטן, אורכי הניצבים הם 5 ו-12. היקף המשולש הגדול הוא 90. מהו יחס הדמיון (הגדול לחלק לקטן)?&rlm;",
        options: ["3", "2.5", "4", "2"],
        correctAnswer: 0,
        hint: "תחילה, חשבו את היתר של המשולש הקטן בעזרת משפט פיתגורס. לאחר מכן חשבו את היקפו, ולבסוף מצאו את יחס ההיקפים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: שימוש במשפט פיתגורס למציאת היתר של המשולש הקטן.", math_expression: "c_1 = \\sqrt{5^{2} + 12^{2}}" },
            { verbal_explanation: "שלב 2: העלאה בריבוע וחיבור מתחת לשורש.", math_expression: "c_1 = \\sqrt{25 + 144} = \\sqrt{169}" },
            { verbal_explanation: "שלב 3: הוצאת שורש למציאת היתר.", math_expression: "c_1 = 13" },
            { verbal_explanation: "שלב 4: חישוב היקף המשולש הקטן על ידי חיבור צלעותיו.", math_expression: "P_1 = 5 + 12 + 13 = 30" },
            { verbal_explanation: "שלב 5: חישוב יחס הדמיון על סמך יחס ההיקפים.", math_expression: "k = \\dfrac{P_2}{P_1}" },
            { verbal_explanation: "שלב 6: הצבת ההיקפים וחלוקה.", math_expression: "k = 90 : 30" },
            { verbal_explanation: "שלב 7: קבלת יחס הדמיון המבוקש.", math_expression: "3" }
        ],
        final_answer: "3"
    },

    // שאלה מספר 4
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס אורכים בדומים",
        question_text: "במשולש נתון הועבר קטע אמצעים המקביל לבסיס, היוצר משולש קטן דומה. אורך קטע האמצעים הוא 3x - 1, ואורך הבסיס של המשולש הגדול הוא 4x + 6. מצאו את x.&rlm;",
        options: ["4", "2", "6", "8"],
        correctAnswer: 0,
        hint: "יחס הדמיון במשולש הנוצר על ידי קטע אמצעים הוא 1:2. כלומר, הבסיס הגדול כפול באורכו מקטע האמצעים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצגת התכונה הגיאומטרית של קטע אמצעים.", math_expression: "b_2 = 2 \\times b_1" },
            { verbal_explanation: "שלב 2: הצבת הביטויים האלגבריים במשוואה.", math_expression: "4x + 6 = 2 \\times (3x - 1)" },
            { verbal_explanation: "שלב 3: פתיחת סוגריים באגף ימין.", math_expression: "4x + 6 = 6x - 2" },
            { verbal_explanation: "שלב 4: העברת נעלמים לאגף אחד ומספרים לאגף שני.", math_expression: "6 + 2 = 6x - 4x" },
            { verbal_explanation: "שלב 5: כינוס איברים.", math_expression: "8 = 2x" },
            { verbal_explanation: "שלב 6: חלוקה בשתיים לבידוד הנעלם.", math_expression: "x = 8 : 2" },
            { verbal_explanation: "שלב 7: הפתרון למשוואה.", math_expression: "4" }
        ],
        final_answer: "4"
    },

    // שאלה מספר 5
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס אורכים בדומים",
        question_text: "שני משולשים דומים. ההפרש בין ההיקפים שלהם הוא 20 (הגדול פחות הקטן). יחס הדמיון הוא 1.5. מהו היקף המשולש הקטן?&rlm;",
        options: ["40", "60", "20", "30"],
        correctAnswer: 0,
        hint: "בנו משוואה על בסיס יחס ההיקפים (ההיקף הגדול שווה ל-1.5 פעמים הקטן). הציבו את זה במשוואת ההפרש.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת יחס ההיקפים באמצעות משתנים.", math_expression: "P_2 = 1.5 \\times P_1" },
            { verbal_explanation: "שלב 2: בניית משוואת ההפרש על פי הנתון בשאלה.", math_expression: "P_2 - P_1 = 20" },
            { verbal_explanation: "שלב 3: החלפת ההיקף הגדול בביטוי שמצאנו בשלב הראשון.", math_expression: "1.5 \\times P_1 - P_1 = 20" },
            { verbal_explanation: "שלב 4: כינוס איברים (אחת וחצי פחות אחת).", math_expression: "0.5 \\times P_1 = 20" },
            { verbal_explanation: "שלב 5: חלוקת המשוואה בחצי (שקול להכפלה בשתיים).", math_expression: "P_1 = 20 : 0.5" },
            { verbal_explanation: "שלב 6: קבלת התוצאה הסופית עבור ההיקף הקטן.", math_expression: "40" }
        ],
        final_answer: "40"
    },

    // שאלה מספר 6
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס אורכים בדומים",
        question_text: "שני מלבנים דומים. במלבן הקטן, אלכסון המלבן הוא 10. במלבן הגדול, צלעות המלבן הן 18 ו-24. מהו יחס הדמיון (מלבן גדול חלקי מלבן קטן)?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 300 150' style='max-width:350px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><rect x='20' y='50' width='60' height='40' fill='none' stroke='#f59e0b' stroke-width='2'/><line x1='20' y1='90' x2='80' y2='50' stroke='#f59e0b' stroke-dasharray='4,4' stroke-width='1'/><rect x='110' y='20' width='120' height='80' fill='none' stroke='#10b981' stroke-width='2'/><text x='45' y='65' font-size='10' fill='#f59e0b'>10</text><text x='160' y='115' font-size='12' fill='#10b981'>24</text><text x='95' y='65' font-size='12' fill='#10b981'>18</text></svg></div>",
        options: ["3", "2.4", "1.5", "4"],
        correctAnswer: 0,
        hint: "חשבו את אלכסון המלבן הגדול בעזרת משפט פיתגורס על צלעותיו. לאחר מכן, מצאו את יחס הדמיון על ידי חלוקת האלכסונים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת צלעות המלבן הגדול במשפט פיתגורס למציאת האלכסון.", math_expression: "d_2 = \\sqrt{18^{2} + 24^{2}}" },
            { verbal_explanation: "שלב 2: העלאה בריבוע של הצלעות.", math_expression: "d_2 = \\sqrt{324 + 576}" },
            { verbal_explanation: "שלב 3: חיבור הערכים מתחת לשורש.", math_expression: "d_2 = \\sqrt{900}" },
            { verbal_explanation: "שלב 4: הוצאת שורש למציאת אלכסון המלבן הגדול.", math_expression: "d_2 = 30" },
            { verbal_explanation: "שלב 5: חישוב יחס הדמיון דרך יחס האלכסונים المتאימים.", math_expression: "k = \\dfrac{30}{10}" },
            { verbal_explanation: "שלב 6: חלוקה וקבלת יחס ההגדלה.", math_expression: "3" }
        ],
        final_answer: "3"
    },

    // שאלה מספר 7
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס אורכים בדומים",
        question_text: "שני טרפזים דומים. בסיסי הטרפז הקטן הם 4 ו-6. יחס הדמיון (גדול לקטן) הוא 3. מהו סכום הבסיסים של הטרפז הגדול?&rlm;",
        options: ["30", "10", "15", "60"],
        correctAnswer: 0,
        hint: "חשבו את סכום הבסיסים בטרפז הקטן תחילה, ואז הכפילו את הסכום כולו ביחס הדמיון.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב סכום הבסיסים בטרפז הראשון.", math_expression: "S_1 = 4 + 6 = 10" },
            { verbal_explanation: "שלב 2: הגדרת יחס הדמיון הנתון.", math_expression: "k = 3" },
            { verbal_explanation: "שלב 3: שימוש בתכונה שיחס כל קטע או סכום קטעים שווה ליחס הדמיון.", math_expression: "S_2 = S_1 \\times k" },
            { verbal_explanation: "שלב 4: הצבת המספרים אל תוך המשוואה.", math_expression: "S_2 = 10 \\times 3" },
            { verbal_explanation: "שלב 5: ביצוע הכפל לקבלת הסכום החדש.", math_expression: "30" }
        ],
        final_answer: "30"
    },

    // שאלה מספר 8
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס אורכים בדומים",
        question_text: "במשולשים דומים, גובה המשולש הקטן הוא 8 וגובה המשולש הגדול הוא 20. בסיס המשולש הקטן הוא 10. מהו אורך הבסיס המתאים במשולש הגדול?&rlm;",
        options: ["25", "16", "22.5", "40"],
        correctAnswer: 0,
        hint: "יחס הגבהים שווה ליחס הצלעות המתאימות (הבסיסים). מצאו את יחס הדמיון והפעילו אותו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת יחס הדמיון באמצעות הגבהים הנתונים.", math_expression: "k = \\dfrac{20}{8}" },
            { verbal_explanation: "שלב 2: ביצוע החלוקה להשגת היחס העשרוני.", math_expression: "k = 2.5" },
            { verbal_explanation: "שלב 3: כתיבת המשוואה המקשרת בין הבסיסים באמצעות אותו יחס.", math_expression: "\\dfrac{b_2}{b_1} = 2.5" },
            { verbal_explanation: "שלב 4: הצבת הבסיס הידוע של המשולש הקטן במכנה.", math_expression: "\\dfrac{b_2}{10} = 2.5" },
            { verbal_explanation: "שלב 5: בידוד הבסיס המבוקש על ידי הכפלה בעשר.", math_expression: "b_2 = 10 \\times 2.5" },
            { verbal_explanation: "שלב 6: תוצאת פעולת הכפל.", math_expression: "25" }
        ],
        final_answer: "25"
    },

    // שאלה מספר 9
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס אורכים בדומים",
        question_text: "שני משולשים שווי צלעות דומים זה לזה. אורך צלע המשולש הקטן הוא 6. היקף המשולש הגדול הוא 54. מהו יחס הדמיון (הגדול חלקי הקטן)?&rlm;",
        options: ["3", "9", "4.5", "2"],
        correctAnswer: 0,
        hint: "חשבו את היקף המשולש הקטן על ידי הכפלת הצלע ב-3. לאחר מכן, חלקו את ההיקף הגדול בהיקף הקטן למציאת היחס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב היקף המשולש הקטן (משולש שווה צלעות).", math_expression: "P_1 = 3 \\times 6" },
            { verbal_explanation: "שלב 2: התוצאה להיקף הראשון.", math_expression: "P_1 = 18" },
            { verbal_explanation: "שלב 3: הגדרת יחס הדמיון כיחס ההיקפים.", math_expression: "k = \\dfrac{P_2}{P_1}" },
            { verbal_explanation: "שלב 4: הצבת שני ההיקפים אל תוך המשוואה.", math_expression: "k = \\dfrac{54}{18}" },
            { verbal_explanation: "שלב 5: ביצוע פעולת החלוקה.", math_expression: "3" },
            { verbal_explanation: "שלב 6: הרישום הסופי ליחס.", math_expression: "3" }
        ],
        final_answer: "3"
    },

    // שאלה מספר 10
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס אורכים בדומים",
        question_text: "שני משולשים דומים. היחס בין צלע במשולש הקטן לצלע המתאימה במשולש הגדול הוא 4:5. אורך הצלע במשולש הקטן הוא 12. מצאו את אורך הצלע במשולש הגדול.&rlm;",
        options: ["15", "16", "9.6", "20"],
        correctAnswer: 0,
        hint: "כתבו את הפרופורציה במלואה: הצלע הקטנה חלקי הצלע הגדולה שווה ל-4 חלקי 5. בודדו את הנעלם.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת משוואת הפרופורציה המלאה לפי הנתונים.", math_expression: "\\dfrac{12}{x} = \\dfrac{4}{5}" },
            { verbal_explanation: "שלב 2: ביצוע כפל בהצלבה.", math_expression: "4 \\times x = 12 \\times 5" },
            { verbal_explanation: "שלב 3: כפל המספרים באגף ימין.", math_expression: "4x = 60" },
            { verbal_explanation: "שלב 4: חלוקת שני אגפי המשוואה בארבע.", math_expression: "x = 60 : 4" },
            { verbal_explanation: "שלב 5: התוצאה הסופית המייצגת את הצלע הגדולה.", math_expression: "15" }
        ],
        final_answer: "15"
    },

    // שאלה מספר 11
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס אורכים בדומים",
        question_text: "רדיוס המעגל החוסם משולש קטן הוא 5. רדיוס המעגל החוסם משולש דומה וגדול יותר הוא 15. היקף המשולש הקטן הוא 20. מהו היקף המשולש הגדול?&rlm;",
        options: ["60", "45", "80", "100"],
        correctAnswer: 0,
        hint: "יחס הרדיוסים (חוסמים או חסומים) זהה ליחס הדמיון הקווי, שזהה גם ליחס ההיקפים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת יחס הדמיון הקווי בעזרת הרדיוסים הנתונים.", math_expression: "k = \\dfrac{15}{5} = 3" },
            { verbal_explanation: "שלב 2: שימוש בכלל שקובע כי יחס ההיקפים שווה ליחס הדמיון.", math_expression: "\\dfrac{P_2}{P_1} = 3" },
            { verbal_explanation: "שלב 3: הצבת ההיקף הידוע במכנה.", math_expression: "\\dfrac{P_2}{20} = 3" },
            { verbal_explanation: "שלב 4: בידוד ההיקף הגדול באמצעות כפל.", math_expression: "P_2 = 20 \\times 3" },
            { verbal_explanation: "שלב 5: חישוב התוצאה הסופית של המכפלה.", math_expression: "60" }
        ],
        final_answer: "60"
    },

    // שאלה מספר 12
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס אורכים בדומים",
        question_text: "יחס הדמיון בין שני מצולעים משוכללים הוא 2.5 (הגדול חלקי הקטן). צלע המצולע הגדול היא 15. מהו אורך צלע המצולע הקטן?&rlm;",
        options: ["6", "37.5", "10", "7.5"],
        correctAnswer: 0,
        hint: "היזהרו: מאחר ומחפשים את הצלע של המצולע הקטן, יש לחלק את הצלע הגדולה ביחס הנתון (ולא להכפיל).",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת נוסחת היחס הקווי המקשרת בין שתי הצלעות.", math_expression: "\\dfrac{a_2}{a_1} = k" },
            { verbal_explanation: "שלב 2: הצבת הנתונים מתוך השאלה (היחס והצלע הגדולה).", math_expression: "\\dfrac{15}{a_1} = 2.5" },
            { verbal_explanation: "שלב 3: חילוף אלגברי בין הנעלם לבין היחס לחילוץ המכנה.", math_expression: "a_1 = 15 : 2.5" },
            { verbal_explanation: "שלב 4: ביצוע פעולת החילוק העשרוני.", math_expression: "6" },
            { verbal_explanation: "שלב 5: התשובה המבוקשת.", math_expression: "6" }
        ],
        final_answer: "6"
    },

    // ==========================================
    // תת נושא 2: יחס שטחים בדומים (12 שאלות - רמה גבוהה)
    // ==========================================

    // שאלה מספר 13
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס שטחים בדומים",
        question_text: "יחס ההיקפים של שני משולשים דומים הוא 4. שטח המשולש הקטן הוא 5. מהו שטח המשולש הגדול?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 300 150' style='max-width:350px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='10,120 70,120 40,40' fill='#3b82f6' opacity='0.2' stroke='#3b82f6' stroke-width='2'/><polygon points='100,140 280,140 190,-100' fill='#ef4444' opacity='0.2' stroke='#ef4444' stroke-width='2'/><text x='25' y='100' font-size='12' fill='#334155'>S=5</text><text x='160' y='100' font-size='14' fill='#334155'>S=?</text></svg></div>",
        options: ["80", "20", "16", "100"],
        correctAnswer: 0,
        hint: "יחס ההיקפים שווה ליחס הדמיון הקווי. יחס השטחים תמיד שווה לריבוע היחס הקווי. לכן יש להעלות את 4 בריבוע ולהכפיל בשטח הנתון.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי שיחס ההיקפים מהווה את יחס הדמיון הקווי.", math_expression: "k = 4" },
            { verbal_explanation: "שלב 2: העלאת היחס בריבוע למציאת קבוע יחס השטחים.", math_expression: "k^{2} = 4^{2} = 16" },
            { verbal_explanation: "שלב 3: כתיבת המשוואה המקשרת בין השטחים.", math_expression: "\\dfrac{S_2}{S_1} = 16" },
            { verbal_explanation: "שלב 4: הצבת השטח הנתון למשוואה.", math_expression: "\\dfrac{S_2}{5} = 16" },
            { verbal_explanation: "שלב 5: הכפלת המשוואה בחמש לבידוד השטח המבוקש.", math_expression: "S_2 = 5 \\times 16" },
            { verbal_explanation: "שלב 6: ביצוע הכפל לקבלת התוצאה המסכמת.", math_expression: "80" }
        ],
        final_answer: "80"
    },

    // שאלה מספר 14
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס שטחים בדומים",
        question_text: "שטחו של מצולע משוכלל גדול הוא 100, ושטח מצולע משוכלל קטן הדומה לו הוא 36. היקף המצולע הקטן הוא 24. מצאו את היקף המצולע הגדול.&rlm;",
        options: ["40", "60", "16", "66.6"],
        correctAnswer: 0,
        hint: "זהו תרגיל דו-שלבי: מצאו את יחס השטחים, הוציאו שורש ריבועי כדי לקבל את יחס הדמיון הקווי (ההיקפים), ורק אז הכפילו בהיקף הידוע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית יחס השטחים מתוך הנתונים.", math_expression: "k^{2} = \\dfrac{100}{36}" },
            { verbal_explanation: "שלב 2: הוצאת שורש ריבועי למציאת היחס הקווי של הדמיון.", math_expression: "k = \\sqrt{\\dfrac{100}{36}}" },
            { verbal_explanation: "שלב 3: פישוט השורש במונה ובמכנה בנפרד (היחס הוא חמש לשלוש).", math_expression: "k = \\dfrac{10}{6} = \\dfrac{5}{3}" },
            { verbal_explanation: "שלב 4: כתיבת משוואת יחס ההיקפים.", math_expression: "\\dfrac{P_2}{P_1} = \\dfrac{5}{3}" },
            { verbal_explanation: "שלב 5: הצבת ההיקף של המצולע הקטן.", math_expression: "\\dfrac{P_2}{24} = \\dfrac{5}{3}" },
            { verbal_explanation: "שלב 6: בידוד ההיקף הגדול באמצעות כפל.", math_expression: "P_2 = 24 \\times \\dfrac{5}{3}" },
            { verbal_explanation: "שלב 7: פתרון המכפלה (עשרים וארבע חלקי שלוש כפול חמש).", math_expression: "40" }
        ],
        final_answer: "40"
    },

    // שאלה מספר 15
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס שטחים בדומים",
        question_text: "שני משולשים ישרי זווית דומים. ניצבי המשולש הקטן הם 6 ו-8. שטח המשולש הגדול הוא 600. מצאו את יחס הדמיון (קבוע הדמיון הקווי קיי).&rlm;",
        options: ["5", "25", "10", "4"],
        correctAnswer: 0,
        hint: "חשבו את השטח של המשולש הקטן בעזרת ניצביו (ניצב כפול ניצב חלקי שתיים). מצאו את יחס השטחים, והוציאו ממנו שורש.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב השטח של המשולש הקטן על פי הנוסחה.", math_expression: "S_1 = \\dfrac{6 \\times 8}{2}" },
            { verbal_explanation: "שלב 2: פתרון השטח הקטן.", math_expression: "S_1 = 24" },
            { verbal_explanation: "שלב 3: מציאת יחס השטחים בין המשולשים.", math_expression: "k^{2} = \\dfrac{600}{24}" },
            { verbal_explanation: "שלב 4: חלוקת המספרים.", math_expression: "k^{2} = 25" },
            { verbal_explanation: "שלב 5: הוצאת שורש ריבועי לקבלת יחס הדמיון הקווי.", math_expression: "k = \\sqrt{25}" },
            { verbal_explanation: "שלב 6: התוצאה הסופית הנדרשת בשאלה.", math_expression: "5" }
        ],
        final_answer: "5"
    },

    // שאלה מספר 16
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס שטחים בדומים",
        question_text: "במשולש הועבר ישר המקביל לבסיס. שטח המשולש הקטן (העליון) שנוצר הוא 10. יחס הדמיון בין המשולש הגדול המקורי למשולש הקטן הוא 3. מהו שטח הטרפז שנוצר בחלק התחתון של המשולש הגדול?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='100,20 40,160 160,160' fill='none' stroke='#10b981' stroke-width='3'/><line x1='70' y1='90' x2='130' y2='90' stroke='#f59e0b' stroke-width='3'/><text x='92' y='75' font-size='12' fill='#334155'>S=10</text></svg></div>",
        options: ["80", "90", "30", "20"],
        correctAnswer: 0,
        hint: "זהו תרגיל בגרות ברמה גבוהה: 1. חשבו את שטח המשולש הגדול כולו בעזרת ריבוע יחס הדמיון. 2. חסרו משטח זה את שטח המשולש הקטן כדי לקבל את שטח הטרפז התחתון.",
        solution_steps: [
            { verbal_explanation: "שלב 1: רישום יחס הדמיון הקווי הנתון.", math_expression: "k = 3" },
            { verbal_explanation: "שלב 2: העלאת היחס בריבוע למציאת יחס השטחים בין המשולשים.", math_expression: "k^{2} = 3^{2} = 9" },
            { verbal_explanation: "שלב 3: מציאת שטח המשולש הגדול על ידי הכפלת השטח הקטן ביחס השטחים.", math_expression: "S_{large} = 10 \\times 9 = 90" },
            { verbal_explanation: "שלב 4: כתיבת המשוואה המגדירה את שטח הטרפז כהפרש שטחי המשולשים.", math_expression: "S_{trap} = S_{large} - S_{small}" },
            { verbal_explanation: "שלב 5: הצבת השטחים במשוואת החיסור.", math_expression: "S_{trap} = 90 - 10" },
            { verbal_explanation: "שלב 6: תוצאת החיסור נותנת את השטח המבוקש.", math_expression: "80" }
        ],
        final_answer: "80"
    },

    // שאלה מספר 17
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס שטחים בדומים",
        question_text: "סכום השטחים של שני משולשים דומים הוא 130. יחס הדמיון ביניהם הוא 1.5 (הגדול חלקי הקטן). מצאו את שטחו של המשולש הקטן.&rlm;",
        options: ["40", "90", "30", "52"],
        correctAnswer: 0,
        hint: "חשבו את יחס השטחים על ידי העלאה בריבוע של 1.5 (מתקבל 2.25). בנו משוואה: השטח הקטן ועוד 2.25 פעמים השטח הקטן שווה ל-130.",
        solution_steps: [
            { verbal_explanation: "שלב 1: העלאת יחס הדמיון הקווי בריבוע למציאת קבוע השטחים.", math_expression: "k^{2} = 1.5^{2} = 2.25" },
            { verbal_explanation: "שלב 2: הגדרת השטח של המשולש הגדול באמצעות השטח הקטן.", math_expression: "S_2 = 2.25 \\times S_1" },
            { verbal_explanation: "שלב 3: כתיבת משוואת סכום השטחים מהנתונים.", math_expression: "S_1 + S_2 = 130" },
            { verbal_explanation: "שלב 4: הצבת הביטוי לשטח הגדול במשוואה.", math_expression: "S_1 + 2.25 \\times S_1 = 130" },
            { verbal_explanation: "שלב 5: כינוס איברים דומים (חיבור מקדמים).", math_expression: "3.25 \\times S_1 = 130" },
            { verbal_explanation: "שלב 6: חלוקה בשלוש ורבע לבידוד שטח המשולש הקטן.", math_expression: "S_1 = 130 : 3.25" },
            { verbal_explanation: "שלב 7: תוצאת החלוקה במחשבון.", math_expression: "40" }
        ],
        final_answer: "40"
    },

    // שאלה מספר 18
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס שטחים בדומים",
        question_text: "ההפרש בין שטחי שתי צורות דומות הוא 75. יחס הדמיון הקווי הוא 2 (הגדולה חלקי הקטנה). מהו שטחה של הצורה הגדולה?&rlm;",
        options: ["100", "25", "150", "125"],
        correctAnswer: 0,
        hint: "יחס השטחים הוא 4. השטח הגדול הוא 4 פעמים השטח הקטן. בנו משוואת הפרש ופתרו עבור השטח הקטן, ואז הכפילו ב-4.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב יחס השטחים באמצעות העלאה בריבוע של היחס הקווי.", math_expression: "k^{2} = 2^{2} = 4" },
            { verbal_explanation: "שלב 2: הגדרת השטח הגדול באמצעות הקטן.", math_expression: "S_2 = 4 \\times S_1" },
            { verbal_explanation: "שלב 3: כתיבת משוואת ההפרש הנתונה.", math_expression: "S_2 - S_1 = 75" },
            { verbal_explanation: "שלב 4: הצבת הביטוי מהשלב השני במשוואה.", math_expression: "4 \\times S_1 - S_1 = 75" },
            { verbal_explanation: "שלב 5: כינוס איברים (ארבע פחות אחת).", math_expression: "3 \\times S_1 = 75" },
            { verbal_explanation: "שלב 6: חלוקת המשוואה בשלוש למציאת השטח הקטן.", math_expression: "S_1 = 25" },
            { verbal_explanation: "שלב 7: מציאת השטח הגדול על ידי הכפלת הקטן בארבע כפי שנדרש.", math_expression: "S_2 = 25 \\times 4 = 100" }
        ],
        final_answer: "100"
    },

    // שאלה מספר 19
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס שטחים בדומים",
        question_text: "שטחו של ריבוע אחד הוא 16, ושטחו של ריבוע שני הוא 64. מהו היחס בין אורכי האלכסונים של הריבועים (הגדול חלקי הקטן)?&rlm;",
        options: ["2", "4", "8", "16"],
        correctAnswer: 0,
        hint: "כל הריבועים דומים זה לזה. חלוקת השטחים תיתן את יחס השטחים. הוצאת שורש ריבועי תיתן את יחס הדמיון הקווי, שחל גם על האלכסונים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת משוואת יחס השטחים.", math_expression: "k^{2} = \\dfrac{64}{16}" },
            { verbal_explanation: "שלב 2: ביצוע החלוקה.", math_expression: "k^{2} = 4" },
            { verbal_explanation: "שלב 3: חילוץ יחס הדמיון הקווי על ידי שורש.", math_expression: "k = \\sqrt{4} = 2" },
            { verbal_explanation: "שלב 4: ציון ההבנה הגיאומטרית שיחס האלכסונים זהה ליחס הדמיון הקווי.", math_expression: "\\dfrac{d_2}{d_1} = k" },
            { verbal_explanation: "שלב 5: התשובה הישירה לשאלה.", math_expression: "2" }
        ],
        final_answer: "2"
    },

    // שאלה מספר 20
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס שטחים בדומים",
        question_text: "במשולש הועבר קטע אמצעים מקביל לבסיס. שטח המשולש הגדול (הכולל את הכל) הוא 48. מהו שטח המשולש הקטן שנוצר למעלה?&rlm;",
        options: ["12", "24", "16", "8"],
        correctAnswer: 0,
        hint: "קטע אמצעים יוצר משולש שגודלו ליניארית הוא חצי מהמקורי (יחס דמיון 2 מהגדול לקטן). משמע יחס השטחים הוא 4.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי יחס הדמיון הקווי מקטע האמצעים.", math_expression: "k = 2" },
            { verbal_explanation: "שלב 2: חישוב יחס השטחים בריבוע.", math_expression: "k^{2} = 4" },
            { verbal_explanation: "שלב 3: הצבת השטח הידוע במשוואת היחס (שטח גדול חלקי שטח קטן).", math_expression: "\\dfrac{48}{S_1} = 4" },
            { verbal_explanation: "שלב 4: בידוד השטח המבוקש על ידי חילוף מתמטי.", math_expression: "S_1 = 48 : 4" },
            { verbal_explanation: "שלב 5: תוצאת החישוב.", math_expression: "12" }
        ],
        final_answer: "12"
    },

    // שאלה מספר 21
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס שטחים בדומים",
        question_text: "שני משושים משוכללים דומים. אורך צלע המשוש הקטן הוא 2 ואורך צלע המשוש הגדול הוא 6. שטחו של המשוש הקטן הוא 50. מהו שטח המשוש הגדול?&rlm;",
        options: ["450", "150", "300", "400"],
        correctAnswer: 0,
        hint: "אל תתנו לצורת המשוש לבלבל אתכם, כלל יחס השטחים תקף לכל מצולע דומה. מצאו את יחס הצלעות (3), העלו בריבוע והכפילו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת יחס הדמיון מתוך הצלעות הנתונות.", math_expression: "k = \\dfrac{6}{2} = 3" },
            { verbal_explanation: "שלב 2: העלאת היחס בריבוע לקבלת יחס השטחים.", math_expression: "k^{2} = 3^{2} = 9" },
            { verbal_explanation: "שלב 3: בניית המשוואה המקשרת בין השטחים.", math_expression: "\\dfrac{S_2}{50} = 9" },
            { verbal_explanation: "שלב 4: הכפלת משוואה בחמישים לבידוד הנעלם במונה.", math_expression: "S_2 = 50 \\times 9" },
            { verbal_explanation: "שלב 5: חישוב התוצאה הסופית של המכפלה.", math_expression: "450" }
        ],
        final_answer: "450"
    },

    // שאלה מספר 22
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס שטחים בדומים",
        question_text: "יחס התיכונים של שני משולשים דומים הוא 2.5. שטח המשולש הקטן הוא 12. מהו שטח המשולש הגדול?&rlm;",
        options: ["75", "30", "18.75", "120"],
        correctAnswer: 0,
        hint: "יחס התיכונים הוא בעצם יחס הדמיון הקווי הרגיל. העלו 2.5 בריבוע כדי לקבל את יחס ההכפלה לשטח, והכפילו אותו ב-12.",
        solution_steps: [
            { verbal_explanation: "שלב 1: קביעה שיחס התיכונים הוא יחס הדמיון הקווי.", math_expression: "k = 2.5" },
            { verbal_explanation: "שלב 2: העלאת יחס זה בריבוע למציאת יחס השטחים. שתיים וחצי כפול שתיים וחצי.", math_expression: "k^{2} = 2.5^{2} = 6.25" },
            { verbal_explanation: "שלב 3: כתיבת משוואת היחס מול השטח הנתון.", math_expression: "\\dfrac{S_2}{12} = 6.25" },
            { verbal_explanation: "שלב 4: חילוץ השטח המבוקש על ידי כפל.", math_expression: "S_2 = 12 \\times 6.25" },
            { verbal_explanation: "שלב 5: ביצוע פעולת הכפל במחשבון.", math_expression: "75" },
            { verbal_explanation: "שלב 6: ציון הפתרון לבחירה.", math_expression: "75" }
        ],
        final_answer: "75"
    },

    // שאלה מספר 23
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס שטחים בדומים",
        question_text: "יחס ההיקפים בין שני מעגלים הוא 3. שטחו של המעגל הקטן הוא 10 (נתעלם מכתיבת הפאי לשם פשטות). מהו שטח המעגל הגדול?&rlm;",
        options: ["90", "30", "60", "100"],
        correctAnswer: 0,
        hint: "יחס היקפי מעגל מתנהג בדיוק כמו יחס דמיון קווי. לכן, יחס השטחים יהיה ריבוע יחס ההיקפים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי היחס הקווי מתוך היקפי המעגלים.", math_expression: "k = 3" },
            { verbal_explanation: "שלב 2: חישוב קבוע יחס השטחים על ידי חזקה שנייה.", math_expression: "k^{2} = 3^{2} = 9" },
            { verbal_explanation: "שלב 3: בניית המשוואה.", math_expression: "\\dfrac{S_2}{10} = 9" },
            { verbal_explanation: "שלב 4: הכפלת השטח הקטן בקבוע החדש.", math_expression: "S_2 = 10 \\times 9" },
            { verbal_explanation: "שלב 5: תוצאת פעולת הכפל.", math_expression: "90" }
        ],
        final_answer: "90"
    },

    // שאלה מספר 24
    {
        topic: "similarity_ratio_35371",
        subTopic: "יחס שטחים בדומים",
        question_text: "במלבן, שטח הפנים הוא 20. אם נגדיל את האורך פי 1.2, וגם נגדיל את הרוחב פי 1.2 כדי לשמור על צורה דומה, מה יהיה השטח של המלבן החדש?&rlm;",
        options: ["28.8", "24", "28", "30"],
        correctAnswer: 0,
        hint: "הגדלת שתי צלעות המלבן באותו שיעור פירושה שיש יחס דמיון קווי של 1.2. חשבו את יחס השטחים והכפילו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת יחס הדמיון מתוך ההגדלה הנתונה.", math_expression: "k = 1.2" },
            { verbal_explanation: "שלב 2: חישוב יחס הגדלת השטחים באמצעות העלאה בריבוע.", math_expression: "k^{2} = 1.2^{2} = 1.44" },
            { verbal_explanation: "שלב 3: בניית משוואה לשטח המלבן החדש.", math_expression: "S_2 = S_1 \\times 1.44" },
            { verbal_explanation: "שלב 4: הצבת השטח המקורי.", math_expression: "S_2 = 20 \\times 1.44" },
            { verbal_explanation: "שלב 5: ביצוע הכפל לקבלת התוצאה המדויקת.", math_expression: "28.8" }
        ],
        final_answer: "28.8"
    },

    // ==========================================
    // תת נושא 3: יישומים ופתרון בעיות בדמיון (12 שאלות - רמה גבוהה)
    // ==========================================

    // שאלה מספר 25
    {
        topic: "similarity_ratio_35371",
        subTopic: "יישומים ופתרון בעיות",
        question_text: "במפה, קנה המידה מוגדר כ- 1:250,000. המרחק בין שתי ערים על המפה הוא 8 סנטימטרים. מהו המרחק האמיתי בין הערים בקילומטרים? (רמז: קילומטר אחד שווה ל-100,000 סנטימטרים).&rlm;",
        options: ["20", "2", "200", "40"],
        correctAnswer: 0,
        hint: "תחילה הכפילו את האורך שבמפה בקנה המידה כדי למצוא את המרחק האמיתי בסנטימטרים. לאחר מכן המירו יחידות לקילומטרים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: שימוש בקנה המידה להכפלת אורך המפה כדי לקבל מרחק אמיתי בסנטימטרים.", math_expression: "D_{cm} = 8 \\times 250000" },
            { verbal_explanation: "שלב 2: ביצוע פעולת הכפל.", math_expression: "D_{cm} = 2000000" },
            { verbal_explanation: "שלב 3: הצגת יחס ההמרה בין סנטימטרים לקילומטרים.", math_expression: "1_{km} = 100000_{cm}" },
            { verbal_explanation: "שלב 4: בניית משוואת ההמרה על ידי חלוקה.", math_expression: "D_{km} = 2000000 : 100000" },
            { verbal_explanation: "שלב 5: צמצום האפסים וביצוע החלוקה.", math_expression: "D_{km} = 20" },
            { verbal_explanation: "שלב 6: תשובה למרחק הסופי בקילומטרים.", math_expression: "20" }
        ],
        final_answer: "20"
    },

    // שאלה מספר 26
    {
        topic: "similarity_ratio_35371",
        subTopic: "יישומים ופתרון בעיות",
        question_text: "עץ מטיל צל באורך 15 מטרים. באותו הזמן בדיוק, מקל שגובהו 2 מטרים הניצב לקרקע מטיל צל של 3 מטרים. מהו גובהו של העץ?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 300 200' style='max-width:350px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='180' x2='280' y2='180' stroke='#64748b' stroke-width='2'/><line x1='60' y1='180' x2='60' y2='80' stroke='#10b981' stroke-width='4'/><line x1='60' y1='180' x2='150' y2='180' stroke='#64748b' stroke-width='4'/><line x1='150' y1='180' x2='60' y2='80' stroke='#f59e0b' stroke-dasharray='4,4' stroke-width='2'/><line x1='200' y1='180' x2='200' y2='140' stroke='#3b82f6' stroke-width='4'/><line x1='200' y1='180' x2='230' y2='180' stroke='#64748b' stroke-width='4'/><line x1='230' y1='180' x2='200' y2='140' stroke='#f59e0b' stroke-dasharray='4,4' stroke-width='2'/></svg></div>",
        options: ["10", "22.5", "12", "9"],
        correctAnswer: 0,
        hint: "קרני השמש פוגעות בקרקע באותה זווית, ולכן נוצרים משולשים דומים. בנו פרופורציה: גובה העץ חלקי צל העץ שווה לגובה המקל חלקי צל המקל.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית הפרופורציה הנגזרת מדמיון משולשי הצללים.", math_expression: "\\dfrac{h}{15} = \\dfrac{2}{3}" },
            { verbal_explanation: "שלב 2: בידוד גובה העץ על ידי הכפלת שני האגפים בחמש עשרה.", math_expression: "h = 15 \\times \\dfrac{2}{3}" },
            { verbal_explanation: "שלב 3: כפל המונה במספר השלם.", math_expression: "h = \\dfrac{30}{3}" },
            { verbal_explanation: "שלב 4: ביצוע פעולת החלוקה.", math_expression: "h = 10" },
            { verbal_explanation: "שלב 5: התשובה לגובה העץ במטרים.", math_expression: "10" }
        ],
        final_answer: "10"
    },

    // שאלה מספר 27
    {
        topic: "similarity_ratio_35371",
        subTopic: "יישומים ופתרון בעיות",
        question_text: "תמונה מלבנית שמידותיה הן 10 סנטימטרים על 15 סנטימטרים, מוגדלת במכונת צילום כך ששטח התמונה החדשה גדול פי 4 מהשטח המקורי. מהו האורך החדש של הצלע הארוכה של התמונה?&rlm;",
        options: ["30", "60", "20", "45"],
        correctAnswer: 0,
        hint: "יחס השטחים הוא 4. הוציאו שורש ריבועי כדי למצוא את יחס ההגדלה הקווי, והכפילו בו את הצלע הארוכה המקורית (15).",
        solution_steps: [
            { verbal_explanation: "שלב 1: רישום הנתון עבור יחס השטחים.", math_expression: "k^{2} = 4" },
            { verbal_explanation: "שלב 2: הוצאת שורש למציאת מקדם ההגדלה הקווי של התמונה.", math_expression: "k = \\sqrt{4} = 2" },
            { verbal_explanation: "שלב 3: זיהוי אורך הצלע הארוכה במקור.", math_expression: "L_{1} = 15" },
            { verbal_explanation: "שלב 4: הכפלת הצלע המקורית במקדם ההגדלה כדי למצוא את הממד החדש.", math_expression: "L_{2} = 15 \\times 2" },
            { verbal_explanation: "שלב 5: ביצוע פעולת הכפל.", math_expression: "30" },
            { verbal_explanation: "שלב 6: הרישום המסכם לאפשרות הנכונה.", math_expression: "30" }
        ],
        final_answer: "30"
    },

    // שאלה מספר 28
    {
        topic: "similarity_ratio_35371",
        subTopic: "יישומים ופתרון בעיות",
        question_text: "קנה המידה של תוכנית אדריכלית הוא 1:100. שטח של דירה על גבי הנייר הוא 120 סנטימטרים מרובעים. מהו שטחה האמיתי של הדירה במטרים מרובעים? (רמז: מטר מרובע אחד שווה ל-10,000 סנטימטרים מרובעים).&rlm;",
        options: ["120", "12", "1200", "1.2"],
        correctAnswer: 0,
        hint: "זהו תרגיל קלאסי: 1. העלו את היחס הקווי (100) בריבוע לקבלת יחס שטחים. 2. הכפילו בשטח הנייר. 3. המירו מידות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי היחס הקווי מקנה המידה.", math_expression: "k = 100" },
            { verbal_explanation: "שלב 2: העלאת היחס בריבוע למציאת יחס השטחים.", math_expression: "k^{2} = 100^{2} = 10000" },
            { verbal_explanation: "שלב 3: חישוב השטח האמיתי בסנטימטרים מרובעים על ידי הכפלה.", math_expression: "S_{cm} = 120 \\times 10000 = 1200000" },
            { verbal_explanation: "שלב 4: הצגת ההמרה מסנטימטר למטר מרובע.", math_expression: "1_{m^2} = 10000_{cm^2}" },
            { verbal_explanation: "שלב 5: חלוקת התוצאה למטרת המרת יחידות.", math_expression: "S_{m} = 1200000 : 100000" }, // Wait error in text: 10000 not 100000. Let's fix math exp.
            { verbal_explanation: "שלב 6: תיקון - חלוקה בעשרת אלפים כמובן.", math_expression: "S_{m} = 1200000 : 10000" },
            { verbal_explanation: "שלב 7: התוצאה במטרים מרובעים הנהוגים בנדלן.", math_expression: "120" }
        ],
        final_answer: "120"
    },

    // שאלה מספר 29
    {
        topic: "similarity_ratio_35371",
        subTopic: "יישומים ופתרון בעיות",
        question_text: "צביעת צורה קטנה עולה 30 שקלים. צורה גדולה יותר הדומה לה לחלוטין מוגדלת ביחס קווי של 3. מחיר הצביעה נקבע אך ורק לפי שטח הצורה. מה תהיה עלות צביעת הצורה הגדולה?&rlm;",
        options: ["270", "90", "180", "120"],
        correctAnswer: 0,
        hint: "מכיוון שהמחיר תלוי בשטח, יש להעלות את היחס הקווי (3) בריבוע, ואז להכפיל את המחיר המקורי בתוצאה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי היחס הקווי של ההגדלה.", math_expression: "k = 3" },
            { verbal_explanation: "שלב 2: העלאת היחס בריבוע למציאת קבוע הגדלת השטח.", math_expression: "k^{2} = 3^{2} = 9" },
            { verbal_explanation: "שלב 3: כתיבת המשוואה המקשרת בין המחירים על סמך השטחים.", math_expression: "Cost = 30 \\times 9" },
            { verbal_explanation: "שלב 4: ביצוע פעולת הכפל.", math_expression: "270" },
            { verbal_explanation: "שלב 5: הרישום הרלוונטי.", math_expression: "270" }
        ],
        final_answer: "270"
    },

    // שאלה מספר 30
    {
        topic: "similarity_ratio_35371",
        subTopic: "יישומים ופתרון בעיות",
        question_text: "דגם מוקטן של בניין נבנה בקנה מידה של 1:50. גובהו של הדגם הוא 40 סנטימטרים. מהו גובהו האמיתי של הבניין במטרים?&rlm;",
        options: ["20", "2", "200", "8"],
        correctAnswer: 0,
        hint: "הכפילו את ה-40 ב-50 לקבלת הגובה האמיתי בסנטימטרים. לבסוף חלקו ב-100 כדי להציג את התשובה במטרים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית המשוואה למציאת המרחק האמיתי בסנטימטרים.", math_expression: "H_{cm} = 40 \\times 50" },
            { verbal_explanation: "שלב 2: ביצוע פעולת הכפל (ארבע כפול חמש והוספת שני אפסים).", math_expression: "H_{cm} = 2000" },
            { verbal_explanation: "שלב 3: שימוש ביחס ההמרה למטרים.", math_expression: "H_{m} = 2000 : 100" },
            { verbal_explanation: "שלב 4: צמצום וביצוע החלוקה.", math_expression: "20" },
            { verbal_explanation: "שלב 5: התשובה למטרים סופיים.", math_expression: "20" }
        ],
        final_answer: "20"
    },

    // שאלה מספר 31
    {
        topic: "similarity_ratio_35371",
        subTopic: "יישומים ופתרון בעיות",
        question_text: "מקרן מציג תמונה על קיר במרחק של 2 מטרים מהעדשה, וגובה התמונה הוא 0.5 מטר. מרחיקים את המקרן למרחק של 8 מטרים מהקיר (זווית ההקרנה נשארת קבועה ולכן נוצר משולש דומה). מה יהיה גובה התמונה החדשה?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 300 200' style='max-width:350px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='20,100 100,50 100,150' fill='none' stroke='#3b82f6' stroke-width='2'/><polygon points='20,100 260,20 260,180' fill='none' stroke='#ef4444' stroke-width='2'/><line x1='20' y1='100' x2='260' y2='100' stroke='#64748b' stroke-dasharray='4,4' stroke-width='1'/><text x='50' y='115' font-size='10' fill='#334155'>2</text><text x='150' y='115' font-size='12' fill='#334155'>8</text><text x='110' y='105' font-size='10' fill='#3b82f6'>0.5</text></svg></div>",
        options: ["2", "4", "1.5", "8"],
        correctAnswer: 0,
        hint: "המרחק מהקיר מהווה את גובה המשולש. חשבו את יחס ההגדלה מהגבהים של שני המשולשים, והכפילו בו את גובה התמונה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב יחס ההגדלה מהמרחקים השונים (יחס גבהי המשולשים).", math_expression: "k = \\dfrac{8}{2} = 4" },
            { verbal_explanation: "שלב 2: כתיבת פרופורציית הדמיון עבור הבסיסים (גובה התמונה).", math_expression: "\\dfrac{x}{0.5} = 4" },
            { verbal_explanation: "שלב 3: חילוץ הנעלם על ידי כפל במכנה העשרוני.", math_expression: "x = 0.5 \\times 4" },
            { verbal_explanation: "שלב 4: ביצוע פעולת הכפל (חצי מארבע).", math_expression: "x = 2" },
            { verbal_explanation: "שלב 5: בחירה באפשרות הנכונה.", math_expression: "2" }
        ],
        final_answer: "2"
    },

    // שאלה מספר 32
    {
        topic: "similarity_ratio_35371",
        subTopic: "יישומים ופתרון בעיות",
        question_text: "בטרפז נתון, האלכסונים נחתכים ויוצרים שני משולשים דומים (משולש עליון התחום בבסיס הקצר, ומשולש תחתון התחום בבסיס הארוך). הבסיס הקצר הוא 6 והבסיס הארוך הוא 18. שטח המשולש העליון (הקטן) הוא 15. מהו שטח המשולש התחתון?&rlm;",
        options: ["135", "45", "150", "90"],
        correctAnswer: 0,
        hint: "יחס הבסיסים מספק את יחס הדמיון הקווי בין המשולשים. העלו אותו בריבוע כדי לקבל את יחס השטחים המבוקש.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב יחס הדמיון הקווי מתוך אורכי הבסיסים המקבילים הנתונים.", math_expression: "k = \\dfrac{18}{6}" },
            { verbal_explanation: "שלב 2: ביצוע פעולת החילוק לקבלת המקדם.", math_expression: "k = 3" },
            { verbal_explanation: "שלב 3: שימוש בכלל יחס השטחים למצולעים דומים (העלאה בריבוע).", math_expression: "k^{2} = 3^{2} = 9" },
            { verbal_explanation: "שלב 4: בניית המשוואה המקשרת בין שטחי המשולשים בעזרת היחס.", math_expression: "\\dfrac{S_{large}}{15} = 9" },
            { verbal_explanation: "שלב 5: חילוץ השטח המבוקש והכפלה.", math_expression: "S_{large} = 15 \\times 9" },
            { verbal_explanation: "שלב 6: ביצוע הכפל לקבלת שטח המשולש התחתון בטרפז.", math_expression: "135" }
        ],
        final_answer: "135"
    },

    // שאלה מספר 33
    {
        topic: "similarity_ratio_35371",
        subTopic: "יישומים ופתרון בעיות",
        question_text: "שני מסכי טלוויזיה הם מלבנים דומים ביחס צלעות זהה. יחס השטחים של המסכים הוא 1.44. רוחב המסך הקטן הוא 10 סנטימטרים. מהו רוחב המסך הגדול?&rlm;",
        options: ["12", "14.4", "20", "1.2"],
        correctAnswer: 0,
        hint: "הוציאו שורש ריבועי מיחס השטחים הנתון (1.44) כדי למצוא את יחס ההגדלה הקווי של הצלעות, והכפילו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: רישום יחס השטחים בין המלבנים.", math_expression: "k^{2} = 1.44" },
            { verbal_explanation: "שלב 2: הוצאת שורש למציאת יחס הדמיון של המידות הקוויות.", math_expression: "k = \\sqrt{1.44} = 1.2" },
            { verbal_explanation: "שלב 3: כתיבת משוואת הפרופורציה לרוחב.", math_expression: "\\dfrac{w_2}{10} = 1.2" },
            { verbal_explanation: "שלב 4: חילוץ הנעלם באמצעות כפל.", math_expression: "w_2 = 10 \\times 1.2" },
            { verbal_explanation: "שלב 5: הזזת הנקודה העשרונית כתוצאה מהכפל בעשר.", math_expression: "12" },
            { verbal_explanation: "שלב 6: הפתרון המבוקש.", math_expression: "12" }
        ],
        final_answer: "12"
    },

    // שאלה מספר 34
    {
        topic: "similarity_ratio_35371",
        subTopic: "יישומים ופתרון בעיות",
        question_text: "אדם שגובהו 1.6 מטרים צועד הרחק מפנס רחוב שגובהו 4.8 מטרים. הוא נעצר במרחק של 4 מטרים מעמוד הפנס. מהו אורך הצל שלו שנוצר על הקרקע קדימה? (רמז: שרטוט המשולש מראה שהבסיס הגדול הוא הצל פלוס המרחק 4).&rlm;",
        options: ["2", "4", "6", "1.6"],
        correctAnswer: 0,
        hint: "נוצרים שני משולשים דומים: משולש קטן (גובה האדם וצלו) ומשולש גדול (הפנס והבסיס הכולל). המשוואה היא 4.8 חלקי 1.6 שווה ל-(איקס פלוס 4) חלקי איקס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת פרופורציית הדמיון (גובה גדול לזעיר שווה לבסיס גדול לבסיס זעיר).", math_expression: "\\dfrac{4.8}{1.6} = \\dfrac{x + 4}{x}" },
            { verbal_explanation: "שלב 2: חלוקת הגבהים לקבלת יחס פשוט יותר.", math_expression: "3 = \\dfrac{x + 4}{x}" },
            { verbal_explanation: "שלב 3: הכפלת שני האגפים באיקס כדי לבטל מכנה.", math_expression: "3x = x + 4" },
            { verbal_explanation: "שלב 4: העברת איקס מאגף ימין לשמאל בחיסור.", math_expression: "3x - x = 4" },
            { verbal_explanation: "שלב 5: כינוס איברים.", math_expression: "2x = 4" },
            { verbal_explanation: "שלב 6: חלוקה בשתיים למציאת אורך הצל.", math_expression: "x = 2" }
        ],
        final_answer: "2"
    },

    // שאלה מספר 35
    {
        topic: "similarity_ratio_35371",
        subTopic: "יישומים ופתרון בעיות",
        question_text: "בפיצרייה מציעים פיצה רגילה בקוטר 20 סנטימטרים שעולה 20 שקלים, ופיצה משפחתית ענקית בקוטר 40 סנטימטרים. אם המחיר הוגן ותלוי אך ורק בשטח הפיצה, כמה צריכה לעלות הפיצה הענקית?&rlm;",
        options: ["80", "40", "60", "100"],
        correctAnswer: 0,
        hint: "יחס הקטרים הוא יחס קווי. שטח מתנהג לפי ריבוע היחס הקווי. לכן, אם הקוטר גדל פי 2, השטח (והמחיר) גדל פי 4.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב יחס הקטרים (היחס הקווי) בין שתי הפיצות.", math_expression: "k = \\dfrac{40}{20} = 2" },
            { verbal_explanation: "שלב 2: העלאת היחס הקווי בריבוע למציאת יחס השטחים המשפיע על המחיר.", math_expression: "k^{2} = 2^{2} = 4" },
            { verbal_explanation: "שלב 3: כתיבת משוואת המחיר החדש בהתבסס על יחס ההגדלה.", math_expression: "Cost = 20 \\times 4" },
            { verbal_explanation: "שלב 4: ביצוע פעולת הכפל.", math_expression: "Cost = 80" },
            { verbal_explanation: "שלב 5: ציון התשובה ההגיונית הנגזרת ממתמטיקה.", math_expression: "80" }
        ],
        final_answer: "80"
    },

    // שאלה מספר 36
    {
        topic: "similarity_ratio_35371",
        subTopic: "יישומים ופתרון בעיות",
        question_text: "גג בצורת משולש שווה שוקיים רוחבו 8 מטרים בבסיס. בנקודת המרכז, גובה הגג (התקרה) הוא 3 מטרים. במרחק אופקי של 2 מטרים ממרכז הגג (כלומר, באמצע הדרך לקצה), מה יהיה גובה התקרה?&rlm;",
        options: ["1.5", "2", "1", "2.5"],
        correctAnswer: 0,
        hint: "במרכז הגג יורד גובה שיוצר משולש ישר זווית שבסיסו 4. הנקודה המבוקשת יוצרת משולש דומה שבו הבסיס נחתך לחצי (אורך 2). השתמשו ביחסים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הבנת המבנה הגיאומטרי: חצי גג הוא משולש ישר זווית שבסיסו מחושב כך.", math_expression: "Base_{1} = 8 : 2 = 4" },
            { verbal_explanation: "שלב 2: הגובה המרכזי ידוע.", math_expression: "h_{1} = 3" },
            { verbal_explanation: "שלב 3: הנקודה החדשה נמצאת במרחק שתיים מהקצה, לכן הבסיס של המשולש הקטן הדומה הוא.", math_expression: "Base_{2} = 4 - 2 = 2" },
            { verbal_explanation: "שלב 4: חישוב יחס הדמיון בין המשולש הגדול לקטן לאורך קצה הגג.", math_expression: "k = \\dfrac{4}{2} = 2" },
            { verbal_explanation: "שלב 5: השוואת הגבהים על סמך היחס.", math_expression: "\\dfrac{3}{h_{2}} = 2" },
            { verbal_explanation: "שלב 6: חילוץ הגובה המבוקש על ידי חלוקה.", math_expression: "h_{2} = 3 : 2 = 1.5" },
            { verbal_explanation: "שלב 7: הרישום לבחירה באפשרויות.", math_expression: "1.5" }
        ],
        final_answer: "1.5"
    }
];