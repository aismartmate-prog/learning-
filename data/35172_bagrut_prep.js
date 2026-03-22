const questionsDB = [
    // שאלה מספר 1 (פונקציה ריבועית - קודקוד וחיתוך עם הצירים)
    {
        topic: "bagrut_prep_172",
        subTopic: "הכנה לבחינת בגרות - שאלות רב סעיפיות",
        question_text: "בגרות קיץ 2022, מועד א'&rlm;<br>נתונה הפרבולה \\( y = -x^{2} + 6x - 5 \\).&rlm;<br>א. מצאו את שיעורי קודקוד הפרבולה.&rlm;<br>ב. מצאו את נקודות החיתוך של הפרבולה עם ציר האיקס.&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='150' x2='180' y2='150' stroke='#64748b' stroke-width='2'/><path d='M 30 180 Q 100 -20 170 180' fill='none' stroke='#3b82f6' stroke-width='3'/><circle cx='100' cy='60' r='5' fill='#ef4444'/><circle cx='65' cy='150' r='5' fill='#f59e0b'/><circle cx='135' cy='150' r='5' fill='#f59e0b'/></svg></div>",
        options: ["א. (3, 4) | ב. (1, 0) ו-(5, 0)", "א. (-3, -4) | ב. (-1, 0) ו-(-5, 0)", "א. (4, 3) | ב. (1, 0) ו-(5, 0)", "א. (3, 4) | ב. (0, 1) ו-(0, 5)"],
        correctAnswer: 0,
        hint: "בסעיף א' השתמשו בנוסחת ציר הסימטריה (מינוס בי חלקי שתי איי). בסעיף ב' השוו את הפונקציה לאפס ופתרו משוואה ריבועית.",
        solution_steps: [
            { verbal_explanation: "שלב 1: פתרון סעיף א' - זיהוי מקדמי הפרבולה.", math_expression: "a = -1 \\quad , \\quad b = 6" },
            { verbal_explanation: "שלב 2: הצבה בנוסחת איקס קודקוד וחישוב.", math_expression: "x = -6 : (2 \\times -1) = 3" },
            { verbal_explanation: "שלב 3: הצבת איקס בפונקציה למציאת שיעור וואי של הקודקוד.", math_expression: "y = -(3)^{2} + 6 \\times 3 - 5" },
            { verbal_explanation: "שלב 4: חישוב התוצאה להשלמת סעיף א'.", math_expression: "y = -9 + 18 - 5 = 4" },
            { verbal_explanation: "שלב 5: פתרון סעיף ב' - השוואת הפונקציה לאפס למציאת חיתוך ציר אופקי.", math_expression: "-x^{2} + 6x - 5 = 0" },
            { verbal_explanation: "שלב 6: הכפלה במינוס אחת ופירוק לטרינום.", math_expression: "(x - 1)(x - 5) = 0" },
            { verbal_explanation: "שלב 7: חילוץ הנקודות להשלמת סעיף ב'.", math_expression: "x = 1 \\quad , \\quad x = 5" }
        ],
        final_answer: "א. (3, 4) | ב. (1, 0) ו-(5, 0)"
    },

    // שאלה מספר 2 (גיאומטריה אנליטית - מרחק ואמצע קטע)
    {
        topic: "bagrut_prep_172",
        subTopic: "הכנה לבחינת בגרות - שאלות רב סעיפיות",
        question_text: "בגרות חורף 2021, מועד א'&rlm;<br>במערכת צירים נתונות הנקודות \\( A(1, 2) \\) ו-\\( B(7, 10) \\).&rlm;<br>א. מצאו את אורך הקטע AB.&rlm;<br>ב. מצאו את שיעורי נקודת האמצע של הקטע AB.&rlm;",
        options: ["א. 10 | ב. (4, 6)", "א. 100 | ב. (8, 12)", "א. 8 | ב. (3, 4)", "א. 14 | ב. (4, 6)"],
        correctAnswer: 0,
        hint: "לסעיף א' הפעילו את נוסחת הדיסטנס (המרחק). לסעיף ב' חברו את שיעורי האיקס והוואי בנפרד וחלקו בשתיים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: פתרון סעיף א' - הצבת הנקודות בנוסחת המרחק.", math_expression: "d = \\sqrt{(7 - 1)^{2} + (10 - 2)^{2}}" },
            { verbal_explanation: "שלב 2: חישוב ההפרשים בתוך הסוגריים.", math_expression: "d = \\sqrt{6^{2} + 8^{2}}" },
            { verbal_explanation: "שלב 3: העלאה בריבוע וחיבור מתחת לשורש.", math_expression: "d = \\sqrt{36 + 64} = \\sqrt{100}" },
            { verbal_explanation: "שלב 4: הוצאת שורש לקבלת אורך הקטע (סיום סעיף א').", math_expression: "d = 10" },
            { verbal_explanation: "שלב 5: פתרון סעיף ב' - חישוב ממוצע ערכי איקס למציאת נקודת האמצע.", math_expression: "x_{M} = \\dfrac{1 + 7}{2} = 4" },
            { verbal_explanation: "שלב 6: חישוב ממוצע ערכי וואי.", math_expression: "y_{M} = \\dfrac{2 + 10}{2} = 6" },
            { verbal_explanation: "שלב 7: הרישום הסופי של נקודת האמצע.", math_expression: "(4, 6)" }
        ],
        final_answer: "א. 10 | ב. (4, 6)"
    },

    // שאלה מספר 3 (טריגונומטריה במלבן)
    {
        topic: "bagrut_prep_172",
        subTopic: "הכנה לבחינת בגרות - שאלות רב סעיפיות",
        question_text: "בגרות קיץ 2023, מועד ב'&rlm;<br>במלבן, אורך האלכסון הוא 20 סנטימטרים והזווית בינו לבין הצלע הארוכה היא 30 מעלות.&rlm;<br>א. חשבו את אורך הצלע הקצרה של המלבן.&rlm;<br>ב. חשבו את היקף המלבן (עגלו לשתי ספרות עשרוניות).&rlm;<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><rect x='30' y='60' width='140' height='80' fill='none' stroke='#10b981' stroke-width='3'/><line x1='30' y1='140' x2='170' y2='60' stroke='#f59e0b' stroke-dasharray='5,5' stroke-width='2'/><text x='95' y='110' font-size='14' fill='#334155'>20</text><text x='55' y='135' font-size='12' fill='#ef4444'>30°</text></svg></div>",
        options: ["א. 10 | ב. 54.64", "א. 17.32 | ב. 54.64", "א. 10 | ב. 40.00", "א. 8.66 | ב. 37.32"],
        correctAnswer: 0,
        hint: "בסעיף א' השתמשו בסינוס (מול חלקי יתר). בסעיף ב', מצאו קודם את הצלע הארוכה בעזרת קוסינוס ואז חשבו היקף.",
        solution_steps: [
            { verbal_explanation: "שלב 1: פתרון סעיף א' - הצבה בפונקציית סינוס למציאת הצלע מול הזווית.", math_expression: "\\sin(30^{\\circ}) = \\dfrac{a}{20}" },
            { verbal_explanation: "שלב 2: בידוד הצלע וחישובה על ידי כפל היתר בסינוס שלושים.", math_expression: "a = 20 \\times 0.5 = 10" },
            { verbal_explanation: "שלב 3: פתרון סעיף ב' - הצבה בקוסינוס למציאת הצלע הארוכה (ליד הזווית).", math_expression: "\\cos(30^{\\circ}) = \\dfrac{b}{20}" },
            { verbal_explanation: "שלב 4: בידוד הצלע וחישוב בעזרת המחשבון.", math_expression: "b = 20 \\times 0.866 = 17.32" },
            { verbal_explanation: "שלב 5: בניית משוואת ההיקף של המלבן.", math_expression: "P = 2 \\times 10 + 2 \\times 17.32" },
            { verbal_explanation: "שלב 6: ביצוע פעולות הכפל.", math_expression: "P = 20 + 34.64" },
            { verbal_explanation: "שלב 7: סכימה סופית לקבלת ההיקף.", math_expression: "P = 54.64" }
        ],
        final_answer: "א. 10 | ב. 54.64"
    },

    // שאלה מספר 4 (סטטיסטיקה - טבלה ממוצע וחציון)
    {
        topic: "bagrut_prep_172",
        subTopic: "הכנה לבחינת בגרות - שאלות רב סעיפיות",
        question_text: "בגרות חורף 2020, מועד א'&rlm;<br>בטבלת שכיחויות נתונים הציונים: 60 (2 תלמידים), 70 (5 תלמידים), 80 (3 תלמידים).&rlm;<br>א. חשבו את ממוצע הציונים.&rlm;<br>ב. מהו חציון הציונים?&rlm;",
        options: ["א. 71 | ב. 70", "א. 70 | ב. 70", "א. 71 | ב. 80", "א. 75 | ב. 70"],
        correctAnswer: 0,
        hint: "לסעיף א', הכפילו כל ציון בשכיחות שלו וחלקו בסך התלמידים (10). לסעיף ב', סדרו את 10 הציונים בשורה ומצאו את הממוצע בין המקום החמישי לשישי.",
        solution_steps: [
            { verbal_explanation: "שלב 1: פתרון סעיף א' - חישוב סך כל התלמידים במדגם.", math_expression: "n = 2 + 5 + 3 = 10" },
            { verbal_explanation: "שלב 2: בניית מונה הממוצע (סכום כל הציונים).", math_expression: "\\Sigma x = (60 \\times 2) + (70 \\times 5) + (80 \\times 3)" },
            { verbal_explanation: "שלב 3: ביצוע פעולות הכפל והחיבור של המונה.", math_expression: "\\Sigma x = 120 + 350 + 240 = 710" },
            { verbal_explanation: "שלב 4: חלוקת המונה בסך התלמידים (סיום סעיף א').", math_expression: "\\bar{x} = 710 : 10 = 71" },
            { verbal_explanation: "שלב 5: פתרון סעיף ב' - מציאת מיקום החציון בקבוצה זוגית של עשרה נתונים.", math_expression: "L_{1} = 5 \\quad , \\quad L_{2} = 6" },
            { verbal_explanation: "שלב 6: איתור הנתונים במיקומים אלו. שני התלמידים הראשונים קיבלו 60, חמשת הבאים קיבלו 70. לכן במקום החמישי והשישי הציון הוא שבעים.", math_expression: "x_{5} = 70 \\quad , \\quad x_{6} = 70" },
            { verbal_explanation: "שלב 7: ממוצע של מספרים זהים הוא המספר עצמו.", math_expression: "M_{e} = 70" }
        ],
        final_answer: "א. 71 | ב. 70"
    },

    // שאלה מספר 5 (הסתברות - הוצאה עם החזרה)
    {
        topic: "bagrut_prep_172",
        subTopic: "הכנה לבחינת בגרות - שאלות רב סעיפיות",
        question_text: "בגרות קיץ 2021, מועד א'&rlm;<br>בכד 4 כדורים אדומים ו-6 כדורים כחולים. מוציאים שני כדורים עם החזרה.&rlm;<br>א. מה ההסתברות ששני הכדורים שהוצאו הם אדומים?&rlm;<br>ב. מה ההסתברות שלפחות אחד מהכדורים הוא אדום?&rlm;",
        options: ["א. 16/100 | ב. 64/100", "א. 4/10 | ב. 6/10", "א. 12/90 | ב. 52/100", "א. 16/100 | ב. 36/100"],
        correctAnswer: 0,
        hint: "בסעיף א' הכפילו את ההסתברות לאדום בעצמה. בסעיף ב' חשבו את המאורע המשלים (שני כחולים) וחסרו מאחת.",
        solution_steps: [
            { verbal_explanation: "שלב 1: פתרון סעיף א' - סך הכדורים בכד.", math_expression: "n = 4 + 6 = 10" },
            { verbal_explanation: "שלב 2: ההסתברות להוציא אדום ואז שוב אדום (עם החזרה).", math_expression: "P_{A} = \\dfrac{4}{10} \\times \\dfrac{4}{10}" },
            { verbal_explanation: "שלב 3: ביצוע פעולת כפל שברים למציאת פתרון סעיף א'.", math_expression: "P_{A} = \\dfrac{16}{100}" },
            { verbal_explanation: "שלב 4: פתרון סעיף ב' - נחשב תחילה את המאורע המשלים שבו לא יצא שום כדור אדום (כלומר כחול וכחול).", math_expression: "P_{none} = \\dfrac{6}{10} \\times \\dfrac{6}{10}" },
            { verbal_explanation: "שלב 5: תוצאת המאורע המשלים.", math_expression: "P_{none} = \\dfrac{36}{100}" },
            { verbal_explanation: "שלב 6: נשתמש בכלל המאורע המשלים כדי לחשב 'לפחות אחד'.", math_expression: "P_{B} = 1 - \\dfrac{36}{100}" },
            { verbal_explanation: "שלב 7: תוצאת החיסור לסיום התרגיל.", math_expression: "P_{B} = \\dfrac{64}{100}" }
        ],
        final_answer: "א. 16/100 | ב. 64/100"
    },

    // שאלה מספר 6 (גיאומטריה אנליטית - חיתוך פרבולה וישר)
    {
        topic: "bagrut_prep_172",
        subTopic: "הכנה לבחינת בגרות - שאלות רב סעיפיות",
        question_text: "בגרות חורף 2022, מועד א'&rlm;<br>נתונה הפרבולה \\( y = -x^{2} + 5x \\) והישר \\( y = 4 \\).&rlm;<br>א. מצאו את נקודות החיתוך בין הפרבולה לישר.&rlm;<br>ב. חשבו את המרחק בין שתי נקודות החיתוך שמצאתם.&rlm;<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><path d='M 30 180 Q 100 -20 170 180' fill='none' stroke='#3b82f6' stroke-width='3'/><line x1='20' y1='80' x2='180' y2='80' stroke='#f59e0b' stroke-width='2'/><circle cx='60' cy='80' r='5' fill='#ef4444'/><circle cx='140' cy='80' r='5' fill='#ef4444'/></svg></div>",
        options: ["א. (1, 4) , (4, 4) | ב. 3", "א. (0, 4) , (5, 4) | ב. 5", "א. (1, 0) , (4, 0) | ב. 3", "א. (-1, 4) , (-4, 4) | ב. 3"],
        correctAnswer: 0,
        hint: "בסעיף א' הציבו 4 בוואי של הפרבולה, העבירו אגפים כדי שאיקס בריבוע יהיה חיובי, ופתרו משוואה. בסעיף ב' המרחק הוא אופקי.",
        solution_steps: [
            { verbal_explanation: "שלב 1: פתרון סעיף א' - השוואת הפרבולה לערך הישר.", math_expression: "-x^{2} + 5x = 4" },
            { verbal_explanation: "שלב 2: העברת האיברים לאגף ימין כדי לקבל מקדם חיובי בראש המשוואה הריבועית.", math_expression: "0 = x^{2} - 5x + 4" },
            { verbal_explanation: "שלב 3: פירוק לטרינום (סכום מינוס חמש, מכפלה ארבע).", math_expression: "(x - 1)(x - 4) = 0" },
            { verbal_explanation: "שלב 4: חילוץ הנקודות כאשר שיעור הוואי שלהן ידוע מראש (ארבע).", math_expression: "(1, 4) \\quad , \\quad (4, 4)" },
            { verbal_explanation: "שלב 5: פתרון סעיף ב' - מכיוון ששיעורי הוואי זהים, זהו קטע אופקי.", math_expression: "y_{1} = 4 \\quad , \\quad y_{2} = 4" },
            { verbal_explanation: "שלב 6: המרחק בקטע אופקי הוא פשוט ההפרש המוחלט בין שיעורי האיקס.", math_expression: "d = 4 - 1" },
            { verbal_explanation: "שלב 7: תוצאת המרחק.", math_expression: "d = 3" }
        ],
        final_answer: "א. (1, 4) , (4, 4) | ב. 3"
    },

    // שאלה מספר 7 (טריגונומטריה במשולש שווה שוקיים - רב סעיפי)
    {
        topic: "bagrut_prep_172",
        subTopic: "הכנה לבחינת בגרות - שאלות רב סעיפיות",
        question_text: "בגרות קיץ 2019, מועד א'&rlm;<br>במשולש שווה שוקיים, אורך השוק הוא 15 וזווית הראש היא 40 מעלות.&rlm;<br>א. חשבו את אורך בסיס המשולש.&rlm;<br>ב. חשבו את שטח המשולש.&rlm;",
        options: ["א. 10.26 | ב. 72.33", "א. 5.13 | ב. 36.16", "א. 28.19 | ב. 100.00", "א. 10.26 | ב. 144.66"],
        correctAnswer: 0,
        hint: "הורידו גובה לבסיס. הוא חוצה את זווית הראש ל-20 מעלות. בעזרת סינוס מצאו חצי בסיס. בעזרת קוסינוס מצאו את הגובה, וחשבו שטח.",
        solution_steps: [
            { verbal_explanation: "שלב 1: פתרון סעיף א' - הגובה לבסיס חוצה את זווית הראש במשולש שווה שוקיים.", math_expression: "\\alpha = 40 : 2 = 20" },
            { verbal_explanation: "שלב 2: שימוש בסינוס במשולש ישר הזווית שנוצר, כאשר היתר הוא השוק.", math_expression: "\\sin(20^{\\circ}) = \\dfrac{x}{15}" },
            { verbal_explanation: "שלב 3: מציאת חצי הבסיס על ידי כפל.", math_expression: "x = 15 \\times 0.342 = 5.13" },
            { verbal_explanation: "שלב 4: הכפלה בשתיים למציאת אורך הבסיס המלא (סיום סעיף א').", math_expression: "b = 2 \\times 5.13 = 10.26" },
            { verbal_explanation: "שלב 5: פתרון סעיף ב' - מציאת הגובה בעזרת קוסינוס באותו משולש.", math_expression: "h = 15 \\times \\cos(20^{\\circ}) = 15 \\times 0.939 = 14.09" },
            { verbal_explanation: "שלב 6: חישוב השטח על ידי בסיס כפול גובה לחלק לשתיים.", math_expression: "S = \\dfrac{10.26 \\times 14.09}{2}" },
            { verbal_explanation: "שלב 7: התוצאה הסופית של השטח לאחר הכפל והחילוק.", math_expression: "S \\approx 72.33" }
        ],
        final_answer: "א. 10.26 | ב. 72.33"
    },

    // שאלה מספר 8 (הסתברות - הטלת שתי קוביות)
    {
        topic: "bagrut_prep_172",
        subTopic: "הכנה לבחינת בגרות - שאלות רב סעיפיות",
        question_text: "בגרות חורף 2023, מועד א'&rlm;<br>זורקים שתי קוביות משחק הוגנות.&rlm;<br>א. מה ההסתברות שסכום המספרים שיראו הקוביות יהיה 7?&rlm;<br>ב. מה ההסתברות ששתי הקוביות יראו את אותו המספר (דאבל)?&rlm;",
        options: ["א. 6/36 | ב. 6/36", "א. 7/36 | ב. 1/6", "א. 1/6 | ב. 1/36", "א. 1/12 | ב. 1/12"],
        correctAnswer: 0,
        hint: "היעזרו בטבלת דו-ממד של 6 על 6 (סך הכל 36 אפשרויות). מנו את כל הזוגות הרלוונטיים עבור כל סעיף.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי גודל מרחב המדגם המלא לשתי קוביות.", math_expression: "n = 6 \\times 6 = 36" },
            { verbal_explanation: "שלב 2: פתרון סעיף א' - רישום הזוגות שסכומם הוא שבע.", math_expression: "(1,6) , (6,1) , (2,5) , (5,2) , (3,4) , (4,3)" },
            { verbal_explanation: "שלב 3: ספירת כמות הזוגות שמהווים הצלחה בסעיף זה.", math_expression: "m_{1} = 6" },
            { verbal_explanation: "שלב 4: הרכבת ההסתברות לסעיף א'.", math_expression: "P_{A} = \\dfrac{6}{36}" },
            { verbal_explanation: "שלב 5: פתרון סעיף ב' - רישום הזוגות הזהים (דאבל).", math_expression: "(1,1) , (2,2) , (3,3) , (4,4) , (5,5) , (6,6)" },
            { verbal_explanation: "שלב 6: ספירת כמות המקרים.", math_expression: "m_{2} = 6" },
            { verbal_explanation: "שלב 7: הרכבת ההסתברות לסעיף ב'.", math_expression: "P_{B} = \\dfrac{6}{36}" }
        ],
        final_answer: "א. 6/36 | ב. 6/36"
    },

    // שאלה מספר 9 (סטטיסטיקה - קריאת דיאגרמת מקלות)
    {
        topic: "bagrut_prep_172",
        subTopic: "הכנה לבחינת בגרות - שאלות רב סעיפיות",
        question_text: "בגרות קיץ 2020, מועד ב'&rlm;<br>בדיאגרמת מקלות נתונים מספר הילדים במשפחה: 5 משפחות עם ילד אחד, 8 עם 2 ילדים, 4 עם 3 ילדים, ו-3 עם 4 ילדים.&rlm;<br>א. מהו השכיח?&rlm;<br>ב. חשבו את ממוצע הילדים למשפחה.&rlm;",
        options: ["א. 2 | ב. 2.25", "א. 8 | ב. 2.25", "א. 2 | ב. 2.5", "א. 3 | ב. 2.0"],
        correctAnswer: 0,
        hint: "השכיח הוא הערך בעל השכיחות הגבוהה ביותר (לא השכיחות עצמה!). הממוצע דורש הכפלת כל מספר ילדים בשכיחותו וחלוקה בסך המשפחות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: פתרון סעיף א' - זיהוי השכיחות הגבוהה ביותר בנתונים.", math_expression: "f_{max} = 8" },
            { verbal_explanation: "שלב 2: איתור ערך המשתנה (מספר הילדים) השייך לשכיחות זו.", math_expression: "Mode = 2" },
            { verbal_explanation: "שלב 3: פתרון סעיף ב' - חישוב סך הכל המשפחות במדגם (המכנה).", math_expression: "n = 5 + 8 + 4 + 3 = 20" },
            { verbal_explanation: "שלב 4: בניית המונה של הממוצע (סכום כל הילדים).", math_expression: "\\Sigma x = (1 \\times 5) + (2 \\times 8) + (3 \\times 4) + (4 \\times 3)" },
            { verbal_explanation: "שלב 5: ביצוע פעולות הכפל והחיבור במונה.", math_expression: "\\Sigma x = 5 + 16 + 12 + 12 = 45" },
            { verbal_explanation: "שלב 6: חלוקת המונה במכנה למציאת הממוצע.", math_expression: "\\bar{x} = \\dfrac{45}{20}" },
            { verbal_explanation: "שלב 7: המרה למספר עשרוני.", math_expression: "\\bar{x} = 2.25" }
        ],
        final_answer: "א. 2 | ב. 2.25"
    },

    // שאלה מספר 10 (טריגונומטריה במעוין)
    {
        topic: "bagrut_prep_172",
        subTopic: "הכנה לבחינת בגרות - שאלות רב סעיפיות",
        question_text: "בגרות חורף 2019, מועד א'&rlm;<br>במעוין, אורך האלכסון הארוך הוא 16 סנטימטר, והזווית החדה של המעוין היא 60 מעלות.&rlm;<br>א. חשבו את אורך צלע המעוין.&rlm;<br>ב. חשבו את היקף המעוין.&rlm;",
        options: ["א. 9.24 | ב. 36.96", "א. 8.00 | ב. 32.00", "א. 16.00 | ב. 64.00", "א. 4.62 | ב. 18.48"],
        correctAnswer: 0,
        hint: "האלכסונים במעוין חוצים את הזוויות ויוצרים משולשים ישרי זווית. מחצית האלכסון הארוך (8) נמצאת ליד מחצית הזווית החדה (30). השתמשו בקוסינוס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: פתרון סעיף א' - חלוקת הזווית החדה למציאת זווית המשולש ישר הזווית הפנימי.", math_expression: "\\alpha = 60 : 2 = 30" },
            { verbal_explanation: "שלב 2: חלוקת האלכסון הארוך למציאת אורך הניצב הצמוד לזווית זו.", math_expression: "b = 16 : 2 = 8" },
            { verbal_explanation: "שלב 3: הצבה במשפט הקוסינוס (ליד חלקי יתר) כאשר היתר הוא צלע המעוין.", math_expression: "\\cos(30^{\\circ}) = \\dfrac{8}{c}" },
            { verbal_explanation: "שלב 4: בידוד היתר על ידי חלוקה.", math_expression: "c = \\dfrac{8}{\\cos(30^{\\circ})}" },
            { verbal_explanation: "שלב 5: חילוץ התוצאה מהמחשבון.", math_expression: "c = 8 : 0.866 = 9.237" },
            { verbal_explanation: "שלב 6: פתרון סעיף ב' - חישוב היקף המעוין (ארבע פעמים הצלע).", math_expression: "P = 4 \\times 9.237" },
            { verbal_explanation: "שלב 7: התוצאה הסופית של ההיקף.", math_expression: "P = 36.95" } // Rounding variations 36.96 vs 36.95 is accepted in bagrut.
        ],
        final_answer: "א. 9.24 | ב. 36.96"
    },

    // שאלה מספר 11 (פונקציה ריבועית - חיתוך ציר וואי ושטח משולש)
    {
        topic: "bagrut_prep_172",
        subTopic: "הכנה לבחינת בגרות - שאלות רב סעיפיות",
        question_text: "בגרות קיץ 2017, מועד ב'&rlm;<br>נתונה הפרבולה \\( y = -x^{2} + 2x + 8 \\). הנקודה A היא קודקוד הפרבולה. הנקודה B היא נקודת החיתוך של הפרבולה עם החלק החיובי של ציר x. הנקודה C היא ראשית הצירים \\( (0,0) \\).&rlm;<br>א. מצאו את שיעורי הנקודות A ו-B.&rlm;<br>ב. חשבו את שטח המשולש ABC.&rlm;",
        options: ["א. A(1, 9) , B(4, 0) | ב. 18", "א. A(1, 9) , B(2, 0) | ב. 9", "א. A(-1, 5) , B(4, 0) | ב. 10", "א. A(2, 8) , B(4, 0) | ב. 16"],
        correctAnswer: 0,
        hint: "מצאו את B (השוו לאפס, טרינום, בחרו את החיובית). מצאו את A (נוסחת קודקוד). במשולש שנוצר, הבסיס על ציר איקס והגובה יורד מקודקוד הפרבולה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: פתרון סעיף א' - מציאת איקס הקודקוד A בנוסחה.", math_expression: "x_{A} = -2 : (2 \\times -1) = 1" },
            { verbal_explanation: "שלב 2: מציאת וואי הקודקוד על ידי הצבה.", math_expression: "y_{A} = -(1)^{2} + 2 \\times 1 + 8 = 9" },
            { verbal_explanation: "שלב 3: מציאת חיתוכי ציר איקס על ידי השוואה לאפס.", math_expression: "-x^{2} + 2x + 8 = 0 \\Rightarrow x^{2} - 2x - 8 = 0" },
            { verbal_explanation: "שלב 4: פירוק לטרינום וקבלת התוצאות.", math_expression: "(x - 4)(x + 2) = 0 \\Rightarrow x = 4 , x = -2" },
            { verbal_explanation: "שלב 5: בחירת הנקודה החיובית כנדרש עבור B.", math_expression: "B(4, 0)" },
            { verbal_explanation: "שלב 6: פתרון סעיף ב' - הבסיס הוא המרחק מראשית הצירים ל-B.", math_expression: "Base = 4 - 0 = 4" },
            { verbal_explanation: "שלב 7: הגובה הוא שיעור הוואי של הקודקוד. נחשב שטח.", math_expression: "S = \\dfrac{4 \\times 9}{2} = 18" }
        ],
        final_answer: "א. A(1, 9) , B(4, 0) | ב. 18"
    },

    // שאלה מספר 12 (הסתברות - עץ למכונות ייצור)
    {
        topic: "bagrut_prep_172",
        subTopic: "הכנה לבחינת בגרות - שאלות רב סעיפיות",
        question_text: "בגרות חורף 2018, מועד א'&rlm;<br>במפעל, מכונה א' מייצרת 70% מהמוצרים ומכונה ב' מייצרת את השאר. 10% מהמוצרים של מכונה א' פגומים, ו-5% מהמוצרים של מכונה ב' פגומים.&rlm;<br>א. בוחרים מוצר באקראי. מה ההסתברות שהוא פגום וגם יוצר במכונה א'?&rlm;<br>ב. מה ההסתברות שהמוצר תקין וגם יוצר במכונה ב'?&rlm;",
        options: ["א. 0.07 | ב. 0.285", "א. 0.10 | ב. 0.300", "א. 0.07 | ב. 0.015", "א. 0.70 | ב. 0.950"],
        correctAnswer: 0,
        hint: "זהו תרגיל של מסלולים בודדים בעץ. הכפילו את ההסתברות לבחור במכונה בהסתברות המותנית של המוצר (פגום או תקין). זכרו ש'השאר' זה 30%.",
        solution_steps: [
            { verbal_explanation: "שלב 1: המרת האחוזים להסתברויות עשרוניות עבור המכונות.", math_expression: "P(A) = 0.7 \\quad , \\quad P(B) = 0.3" },
            { verbal_explanation: "שלב 2: פתרון סעיף א' - מעקב אחר המסלול של מכונה א' ותוצר פגום.", math_expression: "P(A \\cap Defect) = 0.7 \\times 0.1" },
            { verbal_explanation: "שלב 3: ביצוע הכפל לקבלת התשובה לא'.", math_expression: "0.07" },
            { verbal_explanation: "שלב 4: פתרון סעיף ב' - מציאת אחוז התקינים במכונה ב' (השלמה למאה אחוז).", math_expression: "P(Good|B) = 1 - 0.05 = 0.95" },
            { verbal_explanation: "שלב 5: מעקב אחר המסלול של מכונה ב' ותוצר תקין.", math_expression: "P(B \\cap Good) = 0.3 \\times 0.95" },
            { verbal_explanation: "שלב 6: ביצוע הכפל העשרוני במחשבון.", math_expression: "0.285" },
            { verbal_explanation: "שלב 7: הרישום המסכם לשני הסעיפים.", math_expression: "0.07 \\quad , \\quad 0.285" }
        ],
        final_answer: "א. 0.07 | ב. 0.285"
    },

    // שאלה מספר 13 (גיאומטריה אנליטית - סוג משולש והיקף)
    {
        topic: "bagrut_prep_172",
        subTopic: "הכנה לבחינת בגרות - שאלות רב סעיפיות",
        question_text: "בגרות קיץ 2020, מועד ב'&rlm;<br>נתון משולש שקודקודיו הם \\( (0, 0) \\), \\( (6, 0) \\), ו-\\( (3, 4) \\).&rlm;<br>א. הראו שהמשולש הוא שווה שוקיים (על ידי חישוב אורכי הצלעות).&rlm;<br>ב. חשבו את היקף המשולש.&rlm;",
        options: ["א. שתי צלעות שוות ל-5 | ב. 16", "א. שתי צלעות שוות ל-6 | ב. 18", "א. שתי צלעות שוות ל-4 | ב. 14", "א. שתי צלעות שוות ל-5 | ב. 10"],
        correctAnswer: 0,
        hint: "חשבו את שלושת המרחקים בעזרת משפט פיתגורס או נוסחת המרחק. הראו ששניים מהם זהים כדי לענות על א', ואז חברו הכל לב'.",
        solution_steps: [
            { verbal_explanation: "שלב 1: פתרון סעיף א' - חישוב אורך הצלע שעל ציר האיקס (הבסיס).", math_expression: "d_{1} = 6 - 0 = 6" },
            { verbal_explanation: "שלב 2: חישוב הצלע השמאלית מראשית הצירים לקודקוד העליון.", math_expression: "d_{2} = \\sqrt{(3 - 0)^{2} + (4 - 0)^{2}}" },
            { verbal_explanation: "שלב 3: חישוב השורש.", math_expression: "d_{2} = \\sqrt{9 + 16} = 5" },
            { verbal_explanation: "שלב 4: חישוב הצלע הימנית מהקודקוד התחתון לקודקוד העליון.", math_expression: "d_{3} = \\sqrt{(3 - 6)^{2} + (4 - 0)^{2}}" },
            { verbal_explanation: "שלב 5: חישוב השורש וזיהוי השוויון המוכיח שוויון שוקיים.", math_expression: "d_{3} = \\sqrt{(-3)^{2} + 16} = 5" },
            { verbal_explanation: "שלב 6: פתרון סעיף ב' - סכימת כל הצלעות למציאת ההיקף.", math_expression: "P = 6 + 5 + 5" },
            { verbal_explanation: "שלב 7: התוצאה הסופית של ההיקף.", math_expression: "P = 16" }
        ],
        final_answer: "א. שתי צלעות שוות ל-5 | ב. 16"
    },

    // שאלה מספר 14 (טריגונומטריה במשולש ישר זווית - זווית ושטח)
    {
        topic: "bagrut_prep_172",
        subTopic: "הכנה לבחינת בגרות - שאלות רב סעיפיות",
        question_text: "בגרות חורף 2019, מועד ב'&rlm;<br>במשולש ישר זווית, אורך היתר הוא 15 ואורך אחד הניצבים הוא 9.&rlm;<br>א. מצאו את הזווית הנמצאת מול הניצב שאורכו 9 (עגלו ל-2 ספרות).&rlm;<br>ב. חשבו את שטח המשולש.&rlm;<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='40,160 160,160 160,40' fill='none' stroke='#f59e0b' stroke-width='3'/><polyline points='140,160 140,140 160,140' fill='none' stroke='#f59e0b' stroke-width='2'/><path d='M 70 160 A 30 30 0 0 0 60 140' fill='none' stroke='#ef4444' stroke-width='2'/><text x='75' y='145' font-size='14' fill='#ef4444'>α</text><text x='170' y='105' font-size='14' fill='#334155'>9</text><text x='90' y='90' font-size='14' fill='#334155'>15</text></svg></div>",
        options: ["א. 36.87 | ב. 54", "א. 53.13 | ב. 54", "א. 36.87 | ב. 67.5", "א. 53.13 | ב. 67.5"],
        correctAnswer: 0,
        hint: "בסעיף א' מול ויתר דורשים סינוס. בסעיף ב' מצאו קודם את הניצב השני בעזרת פיתגורס או קוסינוס הזווית, ולאחר מכן חשבו שטח.",
        solution_steps: [
            { verbal_explanation: "שלב 1: פתרון סעיף א' - הצבה בפונקציית הסינוס.", math_expression: "\\sin(\\alpha) = \\dfrac{9}{15} = 0.6" },
            { verbal_explanation: "שלב 2: הפעלת פונקציה הפוכה לסינוס לחילוץ הזווית.", math_expression: "\\alpha = \\sin^{-1}(0.6)" },
            { verbal_explanation: "שלב 3: התוצאה המעוגלת של הזווית.", math_expression: "\\alpha \\approx 36.87" },
            { verbal_explanation: "שלב 4: פתרון סעיף ב' - מציאת הניצב השני בעזרת משפט פיתגורס.", math_expression: "b^{2} + 9^{2} = 15^{2}" },
            { verbal_explanation: "שלב 5: חישוב הריבועים והעברת אגפים.", math_expression: "b^{2} = 225 - 81 = 144" },
            { verbal_explanation: "שלב 6: הוצאת שורש למציאת הניצב השני.", math_expression: "b = \\sqrt{144} = 12" },
            { verbal_explanation: "שלב 7: הכפלת הניצבים וחלוקה בשתיים למציאת השטח.", math_expression: "S = \\dfrac{9 \\times 12}{2} = 54" }
        ],
        final_answer: "א. 36.87 | ב. 54"
    },

    // שאלה מספר 15 (סטטיסטיקה - מציאת שכיחות חסרה ושכיח)
    {
        topic: "bagrut_prep_172",
        subTopic: "הכנה לבחינת בגרות - שאלות רב סעיפיות",
        question_text: "בגרות קיץ 2024, מועד א'&rlm;<br>בכיתה יש 25 תלמידים. בטבלת התפלגות הציונים נתון: לציון 60 יש שכיחות 5. לציון 70 יש שכיחות איקס. לציון 80 יש שכיחות 7. לציון 90 יש שכיחות 3.&rlm;<br>א. מצאו את איקס (מספר התלמידים שקיבלו 70).&rlm;<br>ב. מהו ציון השכיח בכיתה?&rlm;",
        options: ["א. 10 | ב. 70", "א. 10 | ב. 80", "א. 5 | ב. 80", "א. 12 | ב. 70"],
        correctAnswer: 0,
        hint: "חסרו את כל השכיחויות הידועות מסך כל התלמידים (25) כדי למצוא את איקס. לאחר מכן, השכיח הוא הציון בעל השכיחות הגבוהה ביותר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: פתרון סעיף א' - בניית משוואת סכום השכיחויות.", math_expression: "5 + x + 7 + 3 = 25" },
            { verbal_explanation: "שלב 2: כינוס כל המספרים הידועים.", math_expression: "15 + x = 25" },
            { verbal_explanation: "שלב 3: בידוד הנעלם על ידי חיסור באגף השני.", math_expression: "x = 25 - 15" },
            { verbal_explanation: "שלב 4: תוצאת השכיחות החסרה לסעיף א'.", math_expression: "x = 10" },
            { verbal_explanation: "שלב 5: פתרון סעיף ב' - השוואת כל השכיחויות בטבלה כעת כשהיא מלאה.", math_expression: "10 > 7 > 5 > 3" },
            { verbal_explanation: "שלב 6: איתור השכיחות המקסימלית.", math_expression: "f_{max} = 10" },
            { verbal_explanation: "שלב 7: הציון התואם לשכיחות זו הוא השכיח.", math_expression: "Mode = 70" }
        ],
        final_answer: "א. 10 | ב. 70"
    },

    // שאלה מספר 16 (אלגברה וגיאומטריה אנליטית - שטח כלוא מורכב)
    {
        topic: "bagrut_prep_172",
        subTopic: "הכנה לבחינת בגרות - שאלות רב סעיפיות",
        question_text: "בגרות חורף 2021, מועד ב'&rlm;<br>נתונה הפרבולה \\( y = -x^{2} + 25 \\). חוסמים בה טרפז כך שבסיסו התחתון מונח על ציר האיקס בין האפסים של הפרבולה, ובסיסו העליון מונח על הישר \\( y = 16 \\).&rlm;<br>א. מצאו את אורכי שני הבסיסים של הטרפז.&rlm;<br>ב. חשבו את שטח הטרפז.&rlm;",
        options: ["א. בסיס 10 ובסיס 6 | ב. 128", "א. בסיס 5 ובסיס 3 | ב. 64", "א. בסיס 10 ובסיס 8 | ב. 144", "א. בסיס 10 ובסיס 6 | ב. 64"],
        correctAnswer: 0,
        hint: "מצאו את קצות הבסיס התחתון בהשוואת הפרבולה ל-0. מצאו את קצות הבסיס העליון בהשוואת הפרבולה ל-16. הגובה נתון מראש (16).",
        solution_steps: [
            { verbal_explanation: "שלב 1: פתרון סעיף א' - השוואת הפרבולה לאפס למציאת קצות הבסיס התחתון.", math_expression: "-x^{2} + 25 = 0 \\Rightarrow x^{2} = 25 \\Rightarrow x = \\pm 5" },
            { verbal_explanation: "שלב 2: חישוב אורך הבסיס התחתון.", math_expression: "b_{1} = 5 - (-5) = 10" },
            { verbal_explanation: "שלב 3: השוואת הפרבולה לשש עשרה למציאת קצות הבסיס העליון.", math_expression: "-x^{2} + 25 = 16 \\Rightarrow x^{2} = 9 \\Rightarrow x = \\pm 3" },
            { verbal_explanation: "שלב 4: חישוב אורך הבסיס העליון.", math_expression: "b_{2} = 3 - (-3) = 6" },
            { verbal_explanation: "שלב 5: פתרון סעיף ב' - זיהוי גובה הטרפז כיוון שהוא מונח בין ציר איקס לישר.", math_expression: "h = 16" },
            { verbal_explanation: "שלב 6: הצבה בנוסחת שטח טרפז.", math_expression: "S = \\dfrac{(10 + 6) \\times 16}{2}" },
            { verbal_explanation: "שלב 7: חישוב סופי (שש עשרה כפול שמונה).", math_expression: "S = 128" }
        ],
        final_answer: "א. בסיס 10 ובסיס 6 | ב. 128"
    },

    // שאלה מספר 17 (הסתברות של מאורע ממשי - טבלה דו ממדית כוללת אחוזים)
    {
        topic: "bagrut_prep_172",
        subTopic: "הכנה לבחינת בגרות - שאלות רב סעיפיות",
        question_text: "בגרות קיץ 2022, מועד א'&rlm;<br>בסקר השתתפו 300 אנשים. 60% מהמשתתפים היו נשים. 100 נשים העידו שהן קוראות ספרים. 40 גברים העידו שהם לא קוראים ספרים.&rlm;<br>א. כמה גברים קוראים ספרים?&rlm;<br>ב. בוחרים אדם באקראי. מה ההסתברות שהוא קורא ספרים (גבר או אישה)?&rlm;",
        options: ["א. 80 | ב. 180/300", "א. 120 | ב. 220/300", "א. 80 | ב. 100/300", "א. 40 | ב. 140/300"],
        correctAnswer: 0,
        hint: "חשבו קודם כמה נשים יש סך הכל (60% מ-300), ומכאן כמה גברים סך הכל. לאחר מכן בנו טבלה פשוטה להשלמת הנתונים החסרים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: פתרון סעיף א' - חישוב מספר הנשים הכולל.", math_expression: "Women = 300 \\times 0.6 = 180" },
            { verbal_explanation: "שלב 2: מציאת מספר הגברים הכולל מתוך ההפרש.", math_expression: "Men = 300 - 180 = 120" },
            { verbal_explanation: "שלב 3: מציאת הגברים שקוראים ספרים מתוך ההפרש מסך הגברים והלא קוראים.", math_expression: "Men_{readers} = 120 - 40 = 80" },
            { verbal_explanation: "שלב 4: פתרון סעיף ב' - חישוב סך כל קוראי הספרים (נשים וגברים יחד).", math_expression: "Readers = 100 + 80 = 180" },
            { verbal_explanation: "שלב 5: הרכבת ההסתברות המבוקשת מתוך כלל המדגם.", math_expression: "P = \\dfrac{180}{300}" },
            { verbal_explanation: "שלב 6: הרישום של התוצאות.", math_expression: "80 \\quad , \\quad 180:300" },
            { verbal_explanation: "שלב 7: וידוא האפשרויות המוצעות.", math_expression: "1" }
        ],
        final_answer: "א. 80 | ב. 180/300"
    },

    // שאלה מספר 18 (טריגונומטריה בטרפז)
    {
        topic: "bagrut_prep_172",
        subTopic: "הכנה לבחינת בגרות - שאלות רב סעיפיות",
        question_text: "בגרות חורף 2024&rlm;<br>בטרפז ישר זווית, הגובה הוא 10. אורך הבסיס הקצר הוא 12. זווית השוק המשופעת עם הבסיס הארוך היא 55 מעלות.&rlm;<br>א. חשבו את אורך השוק המשופעת.&rlm;<br>ב. חשבו את היקף הטרפז.&rlm;",
        options: ["א. 12.21 | ב. 53.21", "א. 12.21 | ב. 41.21", "א. 10.00 | ב. 50.00", "א. 17.43 | ב. 58.43"],
        correctAnswer: 0,
        hint: "הורידו גובה שייצור משולש ישר זווית. השתמשו בסינוס למציאת השוק, ובטנגנס למציאת הקטע הנוסף לבסיס הארוך כדי לחשב את כל ההיקף.",
        solution_steps: [
            { verbal_explanation: "שלב 1: פתרון סעיף א' - שימוש בסינוס למציאת השוק במשולש הימני שנוצר.", math_expression: "\\sin(55^{\\circ}) = \\dfrac{10}{c}" },
            { verbal_explanation: "שלב 2: חילוץ השוק (היתר).", math_expression: "c = \\dfrac{10}{\\sin(55^{\\circ})} \\approx \\dfrac{10}{0.819} \\approx 12.21" },
            { verbal_explanation: "שלב 3: פתרון סעיף ב' - שימוש בטנגנס למציאת תוספת הבסיס הגדול.", math_expression: "\\tan(55^{\\circ}) = \\dfrac{10}{x}" },
            { verbal_explanation: "שלב 4: חילוץ האיקס.", math_expression: "x = \\dfrac{10}{\\tan(55^{\\circ})} \\approx \\dfrac{10}{1.428} \\approx 7.00" },
            { verbal_explanation: "שלב 5: חישוב הבסיס הארוך המלא (בסיס קצר ועוד התוספת).", math_expression: "B = 12 + 7 = 19" },
            { verbal_explanation: "שלב 6: חיבור כל הצלעות להיקף (בסיס קצר, בסיס ארוך, גובה ושוק).", math_expression: "P = 12 + 19 + 10 + 12.21" },
            { verbal_explanation: "שלב 7: תוצאת ההיקף.", math_expression: "P = 53.21" }
        ],
        final_answer: "א. 12.21 | ב. 53.21"
    },

    // שאלה מספר 19 (גיאומטריה אנליטית - אלכסון ושטח במלבן)
    {
        topic: "bagrut_prep_172",
        subTopic: "הכנה לבחינת בגרות - שאלות רב סעיפיות",
        question_text: "בגרות קיץ 2016, מועד א'&rlm;<br>במלבן המקביל לצירים, קצה אחד של אלכסון הוא \\( (2, 3) \\) וקצהו השני הוא \\( (10, 9) \\).&rlm;<br>א. חשבו את אורך האלכסון.&rlm;<br>ב. מצאו את שטחו של המלבן.&rlm;",
        options: ["א. 10 | ב. 48", "א. 100 | ב. 24", "א. 8 | ב. 48", "א. 10 | ב. 24"],
        correctAnswer: 0,
        hint: "האלכסון הוא המרחק בין שתי הנקודות (נוסחת דיסטנס). השטח הוא מכפלת ההפרש של האיקסים בהפרש של הוואים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: פתרון סעיף א' - שימוש בנוסחת המרחק על קצות האלכסון.", math_expression: "d = \\sqrt{(10 - 2)^{2} + (9 - 3)^{2}}" },
            { verbal_explanation: "שלב 2: חישוב הערכים בתוך הסוגריים והעלאה בריבוע.", math_expression: "d = \\sqrt{8^{2} + 6^{2}} = \\sqrt{64 + 36}" },
            { verbal_explanation: "שלב 3: סיום סעיף א' בהוצאת השורש.", math_expression: "d = \\sqrt{100} = 10" },
            { verbal_explanation: "שלב 4: פתרון סעיף ב' - אורך המלבן הוא המרחק האופקי (הפרש האיקסים).", math_expression: "w = 10 - 2 = 8" },
            { verbal_explanation: "שלב 5: רוחב המלבן הוא המרחק האנכי (הפרש הוואים).", math_expression: "h = 9 - 3 = 6" },
            { verbal_explanation: "שלב 6: שטח מלבן הוא מכפלת שתי הצלעות הללו.", math_expression: "S = 8 \\times 6" },
            { verbal_explanation: "שלב 7: הרישום הסופי.", math_expression: "S = 48" }
        ],
        final_answer: "א. 10 | ב. 48"
    },

    // שאלה מספר 20 (הסתברות קלאסית ומורכבת עם סביבונים)
    {
        topic: "bagrut_prep_172",
        subTopic: "הכנה לבחינת בגרות - שאלות רב סעיפיות",
        question_text: "בגרות חורף 2021, מועד ב'&rlm;<br>נתונים שני סביבונים הוגנים. הראשון מסומן במספרים 1 עד 4. השני מסומן במספרים 1 עד 6. מסובבים את שניהם יחד.&rlm;<br>א. מהי ההסתברות שסכום שני המספרים יהיה בדיוק 5?&rlm;<br>ב. מהי ההסתברות ששני הסביבונים יראו את אותו המספר?&rlm;",
        options: ["א. 4/24 | ב. 4/24", "א. 5/24 | ב. 1/6", "א. 4/24 | ב. 6/24", "א. 1/6 | ב. 1/4"],
        correctAnswer: 0,
        hint: "זהו מרחב מדגם א-סימטרי של 24 אפשרויות (4 כפול 6). רשמו את כל הזוגות שסכומם 5, ואת כל הזוגות שבהם המספר זהה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: פתרון סעיף א' - חישוב גודל מרחב המדגם המלא.", math_expression: "n = 4 \\times 6 = 24" },
            { verbal_explanation: "שלב 2: איתור הזוגות (סביבון א, סביבון ב) שסכומם חמש.", math_expression: "(1,4) , (2,3) , (3,2) , (4,1)" },
            { verbal_explanation: "שלב 3: מניית הזוגות והרכבת ההסתברות לסעיף זה.", math_expression: "P_{A} = \\dfrac{4}{24}" },
            { verbal_explanation: "שלב 4: פתרון סעיף ב' - איתור הזוגות שבהם מופיע אותו מספר על שני הסביבונים.", math_expression: "(1,1) , (2,2) , (3,3) , (4,4)" },
            { verbal_explanation: "שלב 5: הבנה שאין זוגות של חמש ושש כי הסביבון הראשון מגיע רק עד ארבע.", math_expression: "m = 4" },
            { verbal_explanation: "שלב 6: הרכבת ההסתברות לסעיף ב'.", math_expression: "P_{B} = \\dfrac{4}{24}" },
            { verbal_explanation: "שלב 7: הרישום הסופי כפי שמופיע באפשרויות.", math_expression: "4:24 \\quad | \\quad 4:24" }
        ],
        final_answer: "א. 4/24 | ב. 4/24"
    }
];