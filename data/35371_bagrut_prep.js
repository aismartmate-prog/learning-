const questionsDB = [
    // ==========================================
    // מאגר בחינות בגרות (שאלון 35371) - 20 שאלות רב-שלביות
    // ==========================================

    // שאלה מספר 1 (גדילה ודעיכה)
    {
        topic: "bagrut_prep_371",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "בגרות חורף 2023, מועד א'&rlm;<br>אוכלוסיית עיר מנתה 50,000 תושבים. בכל שנה האוכלוסייה קטנה ב-2%.&rlm;<br>א. מה יהיה מספר התושבים בעיר לאחר 3 שנים?&rlm;<br>ב. אילו האוכלוסייה הייתה קטנה ב-5% בשנה, מה היה ההפרש במספר התושבים לאחר 3 שנים לעומת הנתון המקורי? (עגלו לשלמים).&rlm;",
        options: ["א. 47060 | ב. 4191", "א. 47000 | ב. 4000", "א. 47060 | ב. 42866", "א. 48000 | ב. 4191"],
        correctAnswer: 0,
        hint: "בסעיף א' בנו מודל דעיכה עם מקדם של 0.98. בסעיף ב' בנו מודל חדש עם מקדם של 0.95, וחשבו את ההפרש בין התוצאות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב מקדם הדעיכה לסעיף א'.", math_expression: "q_{1} = 1 - \\dfrac{2}{100} = 0.98" },
            { verbal_explanation: "שלב 2: הצבה במודל המעריכי עבור שלוש שנים.", math_expression: "M_{1} = 50000 \\times 0.98^{3}" },
            { verbal_explanation: "שלב 3: תוצאת האוכלוסייה לאחר דעיכה של שני אחוזים (תשובה לא').", math_expression: "M_{1} \\approx 47060" },
            { verbal_explanation: "שלב 4: חישוב מקדם הדעיכה החדש לסעיף ב'.", math_expression: "q_{2} = 1 - \\dfrac{5}{100} = 0.95" },
            { verbal_explanation: "שלב 5: חישוב גודל האוכלוסייה בתרחיש השני.", math_expression: "M_{2} = 50000 \\times 0.95^{3} \\approx 42869" },
            { verbal_explanation: "שלב 6: חישוב ההפרש בין שני התרחישים.", math_expression: "x = 47060 - 42869 = 4191" }
        ],
        final_answer: "א. 47060 | ב. 4191"
    },

    // שאלה מספר 2 (הסתברות - עץ)
    {
        topic: "bagrut_prep_371",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "בגרות קיץ 2022, מועד א'&rlm;<br>בכד יש 4 כדורים אדומים ו-6 כדורים כחולים. מוציאים באקראי שני כדורים בזה אחר זה, ללא החזרה.&rlm;<br>א. מהי ההסתברות ששני הכדורים שהוצאו הם בעלי אותו צבע?&rlm;<br>ב. מהי ההסתברות שלפחות כדור אחד מבין השניים הוא אדום?&rlm;",
        options: ["א. 42/90 | ב. 60/90", "א. 42/100 | ב. 64/100", "א. 24/90 | ב. 30/90", "א. 12/90 | ב. 60/100"],
        correctAnswer: 0,
        hint: "אותו צבע אומר: אדום-אדום או כחול-כחול (זכרו להפחית כדור בהוצאה השנייה). 'לפחות אחד אדום' הוא המשלים של 'שניהם כחולים'.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב ההסתברות למסלול אדום-אדום (ללא החזרה).", math_expression: "P_{1} = \\dfrac{4}{10} \\times \\dfrac{3}{9} = \\dfrac{12}{90}" },
            { verbal_explanation: "שלב 2: חישוב ההסתברות למסלול כחול-כחול (ללא החזרה).", math_expression: "P_{2} = \\dfrac{6}{10} \\times \\dfrac{5}{9} = \\dfrac{30}{90}" },
            { verbal_explanation: "שלב 3: חיבור ההסתברויות לקבלת מאורע בעל צבע זהה (תשובה לא').", math_expression: "P_{A} = \\dfrac{12}{90} + \\dfrac{30}{90} = \\dfrac{42}{90}" },
            { verbal_explanation: "שלב 4: המאורע 'לפחות אדום אחד' הוא המשלים של המאורע כחול-כחול.", math_expression: "P_{B} = 1 - P_{2}" },
            { verbal_explanation: "שלב 5: ביצוע פעולת החיסור מתוך השלם.", math_expression: "P_{B} = 1 - \\dfrac{30}{90} = \\dfrac{60}{90}" }
        ],
        final_answer: "א. 42/90 | ב. 60/90"
    },

    // שאלה מספר 3 (טריגונומטריה)
    {
        topic: "bagrut_prep_371",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "בגרות חורף 2021, מועד ב'&rlm;<br>במעוין, אורך הצלע הוא 12 סנטימטר, והזווית החדה היא 40 מעלות.&rlm;<br>א. חשבו את אורך האלכסון הקצר של המעוין.&rlm;<br>ב. חשבו את שטח המעוין.&rlm;<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='100,20 160,100 100,180 40,100' fill='none' stroke='#10b981' stroke-width='3'/><line x1='40' y1='100' x2='160' y2='100' stroke='#f59e0b' stroke-dasharray='4,4' stroke-width='2'/><text x='140' y='150' font-size='14' fill='#334155'>12</text><text x='100' y='170' font-size='12' fill='#ef4444'>40°</text></svg></div>",
        options: ["א. 8.21 | ב. 92.56", "א. 4.10 | ב. 46.28", "א. 12 | ב. 144", "א. 8.21 | ב. 100"],
        correctAnswer: 0,
        hint: "האלכסון חוצה את הזווית ל-20 מעלות. השתמשו בסינוס למציאת חצי מהאלכסון. שטח ניתן לחשב בעזרת נוסחת צלע כפול צלע כפול סינוס הזווית שביניהן.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חלוקת הזווית החדה לשתיים מאחר והאלכסון חוצה אותה.", math_expression: "40^{\\circ} : 2 = 20^{\\circ}" },
            { verbal_explanation: "שלב 2: שימוש בסינוס במשולש ישר הזווית שנוצר, כדי למצוא חצי מהאלכסון.", math_expression: "\\sin(20^{\\circ}) = \\dfrac{x}{12}" },
            { verbal_explanation: "שלב 3: חילוץ איקס והכפלתו בשתיים לקבלת האלכסון המלא (תשובה לא').", math_expression: "d = 2 \\times 12 \\times \\sin(20^{\\circ}) \\approx 8.208" },
            { verbal_explanation: "שלב 4: שימוש בנוסחת השטח הטריגונומטרית למעוין (שתי צלעות וסינוס כלוא).", math_expression: "S = 12 \\times 12 \\times \\sin(40^{\\circ})" },
            { verbal_explanation: "שלב 5: חישוב השטח.", math_expression: "S = 144 \\times 0.6427 \\approx 92.56" }
        ],
        final_answer: "א. 8.21 | ב. 92.56"
    },

    // שאלה מספר 4 (תכנון ליניארי)
    {
        topic: "bagrut_prep_371",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "בגרות קיץ 2021, מועד ב'&rlm;<br>נתונה פונקציית רווח למקסימום: \\( f(x,y) = 20x + 30y \\). קודקודי תחום האילוצים הם: (0,0), (10,0), (6,8), (0,5).&rlm;<br>א. מהו הרווח המקסימלי?&rlm;<br>ב. באילו כמויות של x ו-y מתקבל רווח זה?&rlm;",
        options: ["א. 360 | ב. (6, 8)", "א. 200 | ב. (10, 0)", "א. 150 | ב. (0, 5)", "א. 360 | ב. (8, 6)"],
        correctAnswer: 0,
        hint: "הציבו כל אחד מהקודקודים אל תוך פונקציית המטרה, ובחרו את זה שנותן את התוצאה הגדולה ביותר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הקודקוד הראשון (עשר, אפס). קודקוד ראשית הצירים מושמט כי הוא אפס.", math_expression: "f(10,0) = 20 \\times 10 + 30 \\times 0 = 200" },
            { verbal_explanation: "שלב 2: הצבת הקודקוד השני (שש, שמונה).", math_expression: "f(6,8) = 20 \\times 6 + 30 \\times 8" },
            { verbal_explanation: "שלב 3: ביצוע החישוב.", math_expression: "f(6,8) = 120 + 240 = 360" },
            { verbal_explanation: "שלב 4: הצבת הקודקוד השלישי (אפס, חמש).", math_expression: "f(0,5) = 20 \\times 0 + 30 \\times 5 = 150" },
            { verbal_explanation: "שלב 5: השוואת התוצאות מראה שהמקסימום הוא 360 (תשובה לא').", math_expression: "360 > 200 > 150" },
            { verbal_explanation: "שלב 6: הנקודה שסיפקה זאת היא שש פסיק שמונה (תשובה לב').", math_expression: "(6,8)" }
        ],
        final_answer: "א. 360 | ב. (6, 8)"
    },

    // שאלה מספר 5 (דמיון משולשים)
    {
        topic: "bagrut_prep_371",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "בגרות קיץ 2020, מועד א'&rlm;<br>שני משולשים דומים זה לזה. יחס השטחים (הגדול חלקי הקטן) הוא 9. אורך צלע במשולש הקטן הוא 4, והיקפו הוא 15.&rlm;<br>א. מה אורך הצלע המתאימה במשולש הגדול?&rlm;<br>ב. מה היקף המשולש הגדול?&rlm;",
        options: ["א. 12 | ב. 45", "א. 36 | ב. 135", "א. 12 | ב. 135", "א. 7.5 | ב. 45"],
        correctAnswer: 0,
        hint: "יחס השטחים הוא ריבוע של יחס הדמיון הקווי. הוציאו שורש ל-9, והכפילו את הצלע ואת ההיקף ביחס שמצאתם.",
        solution_steps: [
            { verbal_explanation: "שלב 1: רישום הנתון של יחס השטחים.", math_expression: "k^{2} = 9" },
            { verbal_explanation: "שלב 2: הוצאת שורש ריבועי למציאת יחס הדמיון הקווי.", math_expression: "k = \\sqrt{9} = 3" },
            { verbal_explanation: "שלב 3: כפל הצלע הקטנה ביחס הקווי (תשובה לא').", math_expression: "x = 4 \\times 3 = 12" },
            { verbal_explanation: "שלב 4: שימוש בכלל לפיו יחס ההיקפים שווה ליחס הדמיון הקווי.", math_expression: "\\dfrac{P_2}{P_1} = 3" },
            { verbal_explanation: "שלב 5: חישוב ההיקף הגדול (תשובה לב').", math_expression: "P_2 = 15 \\times 3 = 45" }
        ],
        final_answer: "א. 12 | ב. 45"
    },

    // שאלה מספר 6 (סטטיסטיקה - ממוצע וחציון)
    {
        topic: "bagrut_prep_371",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "בגרות חורף 2024&rlm;<br>בטבלה מרוכזים ציונים: הציון 60 הופיע פעמיים, 70 הופיע 4 פעמים, 80 הופיע 3 פעמים, ו-90 פעם אחת.&rlm;<br>א. חשבו את ממוצע הציונים.&rlm;<br>ב. מהו חציון הציונים?&rlm;",
        options: ["א. 73 | ב. 70", "א. 75 | ב. 75", "א. 73 | ב. 80", "א. 70 | ב. 70"],
        correctAnswer: 0,
        hint: "לממוצע, הכפילו ציון בשכיחות וחלקו בסך התלמידים (10). לחציון, מצאו את הממוצע בין התלמיד ה-5 ל-6 ברשימה המסודרת.",
        solution_steps: [
            { verbal_explanation: "שלב 1: ספירת כמות התלמידים הכוללת בטבלה.", math_expression: "n = 2 + 4 + 3 + 1 = 10" },
            { verbal_explanation: "שלב 2: בניית מונה הממוצע.", math_expression: "x = 60 \\times 2 + 70 \\times 4 + 80 \\times 3 + 90 \\times 1" },
            { verbal_explanation: "שלב 3: ביצוע החישוב במונה.", math_expression: "x = 120 + 280 + 240 + 90 = 730" },
            { verbal_explanation: "שלב 4: חלוקת המונה במכנה (תשובה לא').", math_expression: "\\bar{x} = 730 : 10 = 73" },
            { verbal_explanation: "שלב 5: מיקום החציון בכמות זוגית נופל בין חמש לשש.", math_expression: "L = 5.5" },
            { verbal_explanation: "שלב 6: גם התלמיד החמישי וגם השישי נמצאים בקבוצת הציון שבעים. לכן החציון הוא שבעים (תשובה לב').", math_expression: "M_e = 70" }
        ],
        final_answer: "א. 73 | ב. 70"
    },

    // שאלה מספר 7 (גדילה ודעיכה - מציאת כמות התחלתית)
    {
        topic: "bagrut_prep_371",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "בגרות קיץ 2019, מועד א'&rlm;<br>אדם הפקיד סכום כסף בבנק בריבית שנתית קבועה של 4%. לאחר שנתיים, הסכום בחיסכון עמד על 10,816 שקלים.&rlm;<br>א. מהו הסכום ההתחלתי שהופקד?&rlm;<br>ב. מהו הרווח הכולל בשקלים לאחר שנתיים?&rlm;",
        options: ["א. 10000 | ב. 816", "א. 10400 | ב. 416", "א. 10000 | ב. 400", "א. 9000 | ב. 1816"],
        correctAnswer: 0,
        hint: "מקדם הגדילה הוא 1.04. הציבו את הסכום הסופי במשוואה ובודדו את הכמות ההתחלתית. הרווח הוא ההפרש בין הסוף להתחלה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב מקדם הגדילה מאחוז הריבית.", math_expression: "q = 1 + \\dfrac{4}{100} = 1.04" },
            { verbal_explanation: "שלב 2: בניית משוואה שבה הכמות ההתחלתית היא הנעלם.", math_expression: "10816 = M_{0} \\times 1.04^{2}" },
            { verbal_explanation: "שלב 3: העלאת המקדם בריבוע.", math_expression: "1.04^{2} = 1.0816" },
            { verbal_explanation: "שלב 4: חלוקת המשוואה לחילוץ ההפקדה המקורית (תשובה לא').", math_expression: "M_{0} = 10816 : 1.0816 = 10000" },
            { verbal_explanation: "שלב 5: חישוב הרווח כהפרש בין הכמות הסופית להתחלתית (תשובה לב').", math_expression: "P = 10816 - 10000 = 816" }
        ],
        final_answer: "א. 10000 | ב. 816"
    },

    // שאלה מספר 8 (הסתברות מותנית - טבלה)
    {
        topic: "bagrut_prep_371",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "בגרות חורף 2020&rlm;<br>בכיתה יש 40 תלמידים: 25 בנים ו-15 בנות. ידוע ש-10 בנים מרכיבים משקפיים, ו-5 בנות מרכיבות משקפיים.&rlm;<br>א. מה ההסתברות לבחור תלמיד שמרכיב משקפיים?&rlm;<br>ב. נבחר תלמיד והתברר שהוא מרכיב משקפיים. מה ההסתברות שהוא בן?&rlm;",
        options: ["א. 3/8 | ב. 2/3", "א. 1/4 | ב. 1/2", "א. 15/40 | ב. 10/25", "א. 1/2 | ב. 2/3"],
        correctAnswer: 0,
        hint: "בסעיף א', סכמו את כל מרכיבי המשקפיים וחלקו ב-40. בסעיף ב', מרכיבי המשקפיים הם המכנה החדש, והבנים מתוכם הם המונה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב סך כל מרכיבי המשקפיים בכיתה.", math_expression: "m = 10 + 5 = 15" },
            { verbal_explanation: "שלב 2: בניית הסתברות רגילה מול כלל הכיתה (תשובה לא').", math_expression: "P_{A} = \\dfrac{15}{40} = \\dfrac{3}{8}" },
            { verbal_explanation: "שלב 3: בסעיף ב', ההתניה משנה את המכנה לסך כל מרכיבי המשקפיים בלבד.", math_expression: "n_{new} = 15" },
            { verbal_explanation: "שלב 4: המונה מורכב מכמות הבנים המרכיבים משקפיים.", math_expression: "x = 10" },
            { verbal_explanation: "שלב 5: חישוב ההסתברות המותנית וצמצומה בחמש (תשובה לב').", math_expression: "P_{B} = \\dfrac{10}{15} = \\dfrac{2}{3}" }
        ],
        final_answer: "א. 3/8 | ב. 2/3"
    },

    // שאלה מספר 9 (משפט הקוסינוסים ושטח)
    {
        topic: "bagrut_prep_371",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "בגרות קיץ 2023, מועד א'&rlm;<br>במשולש, אורך צלע אחת הוא 10, אורך צלע שנייה הוא 14, והזווית הכלואה ביניהן היא 60 מעלות.&rlm;<br>א. חשבו את אורך הצלע השלישית.&rlm;<br>ב. חשבו את שטח המשולש.&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='20,160 160,160 90,40' fill='none' stroke='#3b82f6' stroke-width='3'/><text x='115' y='180' font-size='14' fill='#334155'>14</text><text x='40' y='95' font-size='14' fill='#334155'>10</text><text x='45' y='145' font-size='12' fill='#ef4444'>60°</text></svg></div>",
        options: ["א. 12.49 | ב. 60.62", "א. 156 | ב. 140", "א. 12.49 | ב. 70.00", "א. 13.00 | ב. 60.62"],
        correctAnswer: 0,
        hint: "בסעיף א' השתמשו בחוק הקוסינוסים. בסעיף ב' השתמשו בנוסחת השטח הטריגונומטרית (מכפלת צלעות כפול סינוס חלקי 2).",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים בחוק הקוסינוסים.", math_expression: "x^{2} = 10^{2} + 14^{2} - 2 \\times 10 \\times 14 \\times \\cos(60^{\\circ})" },
            { verbal_explanation: "שלב 2: העלאה בריבוע והכפלה.", math_expression: "x^{2} = 100 + 196 - 280 \\times 0.5" },
            { verbal_explanation: "שלב 3: ביצוע החיסור.", math_expression: "x^{2} = 296 - 140 = 156" },
            { verbal_explanation: "שלב 4: הוצאת שורש למציאת הצלע השלישית (תשובה לא').", math_expression: "x = \\sqrt{156} \\approx 12.49" },
            { verbal_explanation: "שלב 5: הצבה בנוסחת השטח.", math_expression: "S = \\dfrac{10 \\times 14 \\times \\sin(60^{\\circ})}{2}" },
            { verbal_explanation: "שלב 6: פתרון השטח (תשובה לב').", math_expression: "S = 70 \\times 0.866 \\approx 60.62" }
        ],
        final_answer: "א. 12.49 | ב. 60.62"
    },

    // שאלה מספר 10 (תכנון ליניארי - ניסוח אילוצים)
    {
        topic: "bagrut_prep_371",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "בגרות חורף 2022&rlm;<br>מאפייה מייצרת עוגות (x) ולחמים (y). יש להם במלאי מקסימום 100 ק''ג קמח ו-40 ק''ג סוכר. עוגה דורשת 2 ק''ג קמח ו-1 ק''ג סוכר. לחם דורש 1 ק''ג קמח ו-0.5 ק''ג סוכר.&rlm;<br>א. נסחו את האילוץ למגבלת הקמח.&rlm;<br>ב. נסחו את האילוץ למגבלת הסוכר.&rlm;",
        options: ["א. 2x + y \\leq 100 | ב. x + 0.5y \\leq 40", "א. x + 2y \\leq 100 | ב. 0.5x + y \\leq 40", "א. 2x + y \\geq 100 | ב. x + 0.5y \\geq 40", "א. 2x + y = 100 | ב. x + 0.5y = 40"],
        correctAnswer: 0,
        hint: "עבור כל חומר גלם, הכפילו את הכמות הדרושה למוצר במספר המוצרים, וקבעו שהסכום יהיה קטן או שווה למלאי המקסימלי.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב צריכת הקמח הכוללת.", math_expression: "2 \\times x + 1 \\times y" },
            { verbal_explanation: "שלב 2: הוספת סימן אי השוויון עקב מגבלת המלאי המקסימלי לקמח (תשובה לא').", math_expression: "2x + y \\leq 100" },
            { verbal_explanation: "שלב 3: חישוב צריכת הסוכר הכוללת.", math_expression: "1 \\times x + 0.5 \\times y" },
            { verbal_explanation: "שלב 4: הוספת סימן אי השוויון עקב מגבלת המלאי לסוכר (תשובה לב').", math_expression: "x + 0.5y \\leq 40" },
            { verbal_explanation: "שלב 5: בחירת התשובה המכילה את שתי המשוואות כהלכה.", math_expression: "2x + y \\leq 100 \\quad , \\quad x + 0.5y \\leq 40" }
        ],
        final_answer: "א. 2x + y \\leq 100 | ב. x + 0.5y \\leq 40"
    },

    // שאלה מספר 11 (דמיון משולשים - צורת שעון חול)
    {
        topic: "bagrut_prep_371",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "בגרות קיץ 2018&rlm;<br>בצורת שעון חול (משולשים קודקודיים בין ישרים מקבילים), הבסיס העליון שווה ל-6 והבסיס התחתון שווה ל-18. שטח המשולש העליון הוא 12.&rlm;<br>א. מהו יחס הדמיון (המשולש התחתון לעליון)?&rlm;<br>ב. מהו שטח המשולש התחתון?&rlm;",
        options: ["א. 3 | ב. 108", "א. 3 | ב. 36", "א. 1/3 | ב. 4", "א. 9 | ב. 108"],
        correctAnswer: 0,
        hint: "יחס הדמיון הוא חלוקה של הבסיס התחתון בעליון. שטח המשולש התחתון מתקבל מהכפלת השטח העליון ביחס הדמיון בריבוע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב יחס הדמיון הקווי בעזרת חלוקת הבסיסים (תשובה לא').", math_expression: "k = 18 : 6 = 3" },
            { verbal_explanation: "שלב 2: העלאת יחס הדמיון בריבוע למציאת מקדם השטחים.", math_expression: "k^{2} = 3^{2} = 9" },
            { verbal_explanation: "שלב 3: כתיבת משוואת יחס השטחים.", math_expression: "\\dfrac{S_{2}}{12} = 9" },
            { verbal_explanation: "שלב 4: חילוץ השטח התחתון על ידי כפל.", math_expression: "S_{2} = 12 \\times 9" },
            { verbal_explanation: "שלב 5: התוצאה לשטח המשולש הגדול (תשובה לב').", math_expression: "108" }
        ],
        final_answer: "א. 3 | ב. 108"
    },

    // שאלה מספר 12 (גדילה ודעיכה - השוואה)
    {
        topic: "bagrut_prep_371",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "בגרות חורף 2019&rlm;<br>בעיר א' יש 1000 תושבים והיא גדלה ב-10% בכל שנה. בעיר ב' יש 2000 תושבים והיא קטנה (דועכת) ב-20% בכל שנה.&rlm;<br>א. כמה תושבים יהיו בעיר א' לאחר שנתיים?&rlm;<br>ב. כמה תושבים יהיו בעיר ב' לאחר שנתיים?&rlm;",
        options: ["א. 1210 | ב. 1280", "א. 1200 | ב. 1600", "א. 1210 | ב. 1200", "א. 1100 | ב. 1280"],
        correctAnswer: 0,
        hint: "חשבו את הכמות עבור כל עיר בנפרד לפי הנוסחה המתאימה (מקדם 1.1 לעיר א', ומקדם 0.8 לעיר ב').",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב המקדם לעיר א'.", math_expression: "q_{A} = 1 + \\dfrac{10}{100} = 1.1" },
            { verbal_explanation: "שלב 2: הצבה במודל הגדילה לעיר א'.", math_expression: "M_{A} = 1000 \\times 1.1^{2}" },
            { verbal_explanation: "שלב 3: חישוב התוצאה לעיר א' (תשובה לא').", math_expression: "M_{A} = 1000 \\times 1.21 = 1210" },
            { verbal_explanation: "שלב 4: חישוב המקדם לעיר ב'.", math_expression: "q_{B} = 1 - \\dfrac{20}{100} = 0.8" },
            { verbal_explanation: "שלב 5: הצבה במודל הדעיכה לעיר ב'.", math_expression: "M_{B} = 2000 \\times 0.8^{2}" },
            { verbal_explanation: "שלב 6: חישוב התוצאה לעיר ב' (תשובה לב').", math_expression: "M_{B} = 2000 \\times 0.64 = 1280" }
        ],
        final_answer: "א. 1210 | ב. 1280"
    },

    // שאלה מספר 13 (הסתברות - בלתי תלויים מורכב)
    {
        topic: "bagrut_prep_371",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "בגרות קיץ 2017, מועד ב'&rlm;<br>קלע א' פוגע במטרה בהסתברות 0.8. קלע ב' פוגע בהסתברות 0.7. ההטלות בלתי תלויות.&rlm;<br>א. מה ההסתברות ששניהם יפגעו במטרה?&rlm;<br>ב. מה ההסתברות שבדיוק אחד מהם יפגע במטרה?&rlm;",
        options: ["א. 0.56 | ב. 0.38", "א. 0.56 | ב. 0.44", "א. 1.5 | ב. 0.38", "א. 0.8 | ב. 0.7"],
        correctAnswer: 0,
        hint: "לסעיף א', הכפילו את ההסתברויות. לסעיף ב', חברו שתי אופציות: הראשון פוגע והשני מחטיא + הראשון מחטיא והשני פוגע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב חיתוך הפגיעות עקב אי-תלות (תשובה לא').", math_expression: "P_{both} = 0.8 \\times 0.7 = 0.56" },
            { verbal_explanation: "שלב 2: מציאת ההסתברות שהראשון יפגע והשני יחטיא.", math_expression: "P_{1} = 0.8 \\times (1 - 0.7) = 0.8 \\times 0.3 = 0.24" },
            { verbal_explanation: "שלב 3: מציאת ההסתברות שהראשון יחטיא והשני יפגע.", math_expression: "P_{2} = (1 - 0.8) \\times 0.7 = 0.2 \\times 0.7 = 0.14" },
            { verbal_explanation: "שלב 4: חיבור ההסתברויות לקבלת מאורע של פגיעה אחת בדיוק (תשובה לב').", math_expression: "P_{exactly\\_one} = 0.24 + 0.14 = 0.38" },
            { verbal_explanation: "שלב 5: התשובה השלמה.", math_expression: "0.56 \\quad , \\quad 0.38" }
        ],
        final_answer: "א. 0.56 | ב. 0.38"
    },

    // שאלה מספר 14 (טריגונומטריה בטרפז)
    {
        topic: "bagrut_prep_371",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "בגרות חורף 2018&rlm;<br>בטרפז שווה שוקיים, הבסיס הקצר הוא 10 והבסיס הארוך הוא 20. אורך השוק המשופעת הוא 13.&rlm;<br>א. חשבו את גובה הטרפז.&rlm;<br>ב. חשבו את זווית הבסיס (הזווית שבין השוק לבסיס הארוך).&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='40,160 160,160 120,60 80,60' fill='none' stroke='#8b5cf6' stroke-width='3'/><line x1='80' y1='60' x2='80' y2='160' stroke='#94a3b8' stroke-dasharray='4,4' stroke-width='2'/><text x='50' y='110' font-size='14' fill='#334155'>13</text><text x='100' y='50' font-size='14' fill='#334155'>10</text><text x='100' y='180' font-size='14' fill='#334155'>20</text></svg></div>",
        options: ["א. 12 | ב. 67.38", "א. 10 | ב. 45.00", "א. 12 | ב. 53.13", "א. 8 | ב. 67.38"],
        correctAnswer: 0,
        hint: "הורידו גבהים. חלק הבסיס הארוך שיוצר משולש ישר זווית עם השוק הוא מחצית ההפרש בין הבסיסים. השתמשו בפיתגורס ובקוסינוס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב הניצב האופקי של המשולש בצד הטרפז.", math_expression: "x = \\dfrac{20 - 10}{2} = 5" },
            { verbal_explanation: "שלב 2: שימוש במשפט פיתגורס למציאת הגובה (תשובה לא').", math_expression: "h^{2} + 5^{2} = 13^{2}" },
            { verbal_explanation: "שלב 3: ביצוע חזקות וחיסור.", math_expression: "h^{2} = 169 - 25 = 144 \\Rightarrow h = 12" },
            { verbal_explanation: "שלב 4: שימוש בקוסינוס למציאת זווית הבסיס.", math_expression: "\\cos(y) = \\dfrac{5}{13} \\approx 0.3846" },
            { verbal_explanation: "שלב 5: חילוץ הזווית בעזרת פונקציה הפוכה (תשובה לב').", math_expression: "y = \\cos^{-1}(0.3846) \\approx 67.38^{\\circ}" }
        ],
        final_answer: "א. 12 | ב. 67.38"
    },

    // שאלה מספר 15 (סטטיסטיקה - שכיחות חסרה)
    {
        topic: "bagrut_prep_371",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "בגרות קיץ 2021, מועד א'&rlm;<br>בטבלת ציונים הנתונים הם: הציון 7 הופיע 5 פעמים. הציון 8 הופיע x פעמים. הציון 9 הופיע 4 פעמים. ממוצע הציונים הוא 7.9.&rlm;<br>א. מצאו את x.&rlm;<br>ב. מהו השכיח בטבלה זו?&rlm;",
        options: ["א. 1 | ב. 7", "א. 2 | ב. 8", "א. 1 | ב. 8", "א. 3 | ב. 9"],
        correctAnswer: 0,
        hint: "בנו משוואת ממוצע בה המונה הוא סכום הציונים והמכנה הוא סכום התלמידים (שתיהן תלויות ב-x). פתרו אותה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית מונה הממוצע.", math_expression: "7 \\times 5 + 8 \\times x + 9 \\times 4 = 35 + 8x + 36 = 71 + 8x" },
            { verbal_explanation: "שלב 2: בניית המכנה לממוצע.", math_expression: "5 + x + 4 = 9 + x" },
            { verbal_explanation: "שלב 3: כתיבת המשוואה המלאה לממוצע הנתון.", math_expression: "7.9 = \\dfrac{71 + 8x}{9 + x}" },
            { verbal_explanation: "שלב 4: הכפלה במכנה ופתיחת סוגריים.", math_expression: "7.9 \\times (9 + x) = 71 + 8x \\Rightarrow 71.1 + 7.9x = 71 + 8x" },
            { verbal_explanation: "שלב 5: העברת אגפים ובידוד הנעלם (תשובה לא').", math_expression: "0.1 = 0.1x \\Rightarrow x = 1" },
            { verbal_explanation: "שלב 6: כעת כשהטבלה מלאה (5, 1, 4), השכיחות הגבוהה ביותר היא 5 השייכת לציון 7 (תשובה לב').", math_expression: "Mode = 7" }
        ],
        final_answer: "א. 1 | ב. 7"
    },

    // שאלה מספר 16 (תכנון ליניארי - מציאת מינימום)
    {
        topic: "bagrut_prep_371",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "בגרות חורף 2023&rlm;<br>פונקציית עלות אותה יש למזער היא: \\( f(x,y) = 50x + 80y \\). קודקודי תחום הפתרונות הם: (2,10), (6,4), (12,0).&rlm;<br>א. מהי העלות המינימלית?&rlm;<br>ב. באיזו נקודה (קודקוד) מתקבל ערך זה?&rlm;",
        options: ["א. 600 | ב. (12, 0)", "א. 620 | ב. (6, 4)", "א. 900 | ב. (2, 10)", "א. 600 | ב. (6, 4)"],
        correctAnswer: 0,
        hint: "הציבו את שלושת הקודקודים בפונקציה וחפשו את התוצאה הקטנה ביותר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הקודקוד הראשון (שתיים, עשר).", math_expression: "f(2,10) = 50 \\times 2 + 80 \\times 10 = 100 + 800 = 900" },
            { verbal_explanation: "שלב 2: הצבת הקודקוד השני (שש, ארבע).", math_expression: "f(6,4) = 50 \\times 6 + 80 \\times 4 = 300 + 320 = 620" },
            { verbal_explanation: "שלב 3: הצבת הקודקוד השלישי (שתים עשרה, אפס).", math_expression: "f(12,0) = 50 \\times 12 + 80 \\times 0 = 600" },
            { verbal_explanation: "שלב 4: מציאת המספר הקטן ביותר לשם מיזעור (תשובה לא').", math_expression: "600 < 620 < 900" },
            { verbal_explanation: "שלב 5: שיוך התוצאה לקודקוד הנכון (תשובה לב').", math_expression: "(12,0)" }
        ],
        final_answer: "א. 600 | ב. (12, 0)"
    },

    // שאלה מספר 17 (גדילה ודעיכה - מחצית חיים)
    {
        topic: "bagrut_prep_371",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "בגרות קיץ 2020, מועד ב'&rlm;<br>איזוטופ רדיואקטיבי דועך למחצית ממשקלו (מקדם 0.5) בכל שבוע. המשקל ההתחלתי הוא 400 גרם.&rlm;<br>א. מה תהיה הכמות שתישאר לאחר 3 שבועות?&rlm;<br>ב. כמה חומר בסך הכל אבד במהלך התקופה?&rlm;",
        options: ["א. 50 | ב. 350", "א. 100 | ב. 300", "א. 50 | ב. 50", "א. 12.5 | ב. 387.5"],
        correctAnswer: 0,
        hint: "העלו את המקדם 0.5 בחזקת 3 והכפילו ב-400. כדי למצוא כמה חומר אבד, חסרו את הכמות שנותרה מהכמות ההתחלתית.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים בפונקציית זמן מחצית חיים.", math_expression: "M_{3} = 400 \\times 0.5^{3}" },
            { verbal_explanation: "שלב 2: ביצוע חזקת שלוש על המקדם העשרוני.", math_expression: "0.5^{3} = 0.125" },
            { verbal_explanation: "שלב 3: כפל להשגת המסה הנותרת (תשובה לא').", math_expression: "M_{3} = 400 \\times 0.125 = 50" },
            { verbal_explanation: "שלב 4: כתיבת תרגיל החיסור למציאת החומר שאבד (תשובה לב').", math_expression: "x = 400 - 50" },
            { verbal_explanation: "שלב 5: התוצאה.", math_expression: "350" }
        ],
        final_answer: "א. 50 | ב. 350"
    },

    // שאלה מספר 18 (הסתברות - קוביות מורכב)
    {
        topic: "bagrut_prep_371",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "בגרות קיץ 2016&rlm;<br>זורקים שתי קוביות הוגנות.&rlm;<br>א. מה ההסתברות שסכום המספרים הוא 8?&rlm;<br>ב. מה ההסתברות שסכום המספרים הוא 8, *וגם* שתי הקוביות מראות את אותו המספר (דאבל)?&rlm;",
        options: ["א. 5/36 | ב. 1/36", "א. 6/36 | ב. 1/6", "א. 5/36 | ב. 1/12", "א. 1/6 | ב. 1/36"],
        correctAnswer: 0,
        hint: "רישמו את כל הזוגות שסכומם 8. מתוכם, בידקו כמה הם דאבל.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב גודל מרחב המדגם המלא.", math_expression: "n = 6 \\times 6 = 36" },
            { verbal_explanation: "שלב 2: מניית הזוגות המניבים את הסכום שמונה.", math_expression: "(2,6) , (3,5) , (4,4) , (5,3) , (6,2)" },
            { verbal_explanation: "שלב 3: כתיבת ההסתברות לסעיף א' (5 זוגות מתוך 36).", math_expression: "P_{A} = \\dfrac{5}{36}" },
            { verbal_explanation: "שלב 4: מתוך הרשימה בסעיף 2, הזוג היחיד שעונה גם על תנאי הדאבל הוא ארבע וארבע.", math_expression: "(4,4)" },
            { verbal_explanation: "שלב 5: כתיבת ההסתברות למאורע החיתוך (תשובה לב').", math_expression: "P_{B} = \\dfrac{1}{36}" }
        ],
        final_answer: "א. 5/36 | ב. 1/36"
    },

    // שאלה מספר 19 (דמיון משולשים - קטע אמצעים ושטח)
    {
        topic: "bagrut_prep_371",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "בגרות חורף 2017&rlm;<br>במשולש הועבר קטע אמצעים. אורך בסיס המשולש הגדול הוא 14. שטח המשולש הקטן שנוצר בחלק העליון הוא 15.&rlm;<br>א. מהו אורך קטע האמצעים?&rlm;<br>ב. מהו שטח המשולש הגדול כולו?&rlm;",
        options: ["א. 7 | ב. 60", "א. 7 | ב. 30", "א. 28 | ב. 60", "א. 7 | ב. 45"],
        correctAnswer: 0,
        hint: "קטע אמצעים שווה למחצית הבסיס שאליו הוא מקביל (זה נותן את יחס הדמיון). שטח המשולש הגדול הוא השטח הקטן כפול יחס הדמיון בריבוע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב קטע האמצעים המהווה מחצית מהבסיס הגדול (תשובה לא').", math_expression: "x = 14 : 2 = 7" },
            { verbal_explanation: "שלב 2: הגדרת יחס הדמיון הקווי הנובע מתכונת קטע אמצעים.", math_expression: "k = 2" },
            { verbal_explanation: "שלב 3: חישוב מקדם השטחים על ידי העלאה בריבוע.", math_expression: "k^{2} = 2^{2} = 4" },
            { verbal_explanation: "שלב 4: מציאת שטח המשולש הגדול על ידי הכפלת הקטן במקדם השטחים.", math_expression: "S_{large} = 15 \\times 4" },
            { verbal_explanation: "שלב 5: התוצאה לשטח הכולל (תשובה לב').", math_expression: "60" }
        ],
        final_answer: "א. 7 | ב. 60"
    },

    // שאלה מספר 20 (חוק הסינוסים מורחב)
    {
        topic: "bagrut_prep_371",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "בגרות קיץ 2024&rlm;<br>משולש ABC חסום במעגל שרדיוסו 10. נתון שזווית A שווה 30 מעלות, וזווית B שווה 70 מעלות.&rlm;<br>א. חשבו את אורך הצלע שמונחת מול זווית A.&rlm;<br>ב. חשבו את גודל זווית C.&rlm;",
        options: ["א. 10 | ב. 80", "א. 20 | ב. 80", "א. 5 | ב. 90", "א. 10 | ב. 100"],
        correctAnswer: 0,
        hint: "בסעיף א' השתמשו בחוק הסינוסים המורחב (צלע חלקי סינוס שווה לפעמיים הרדיוס). בסעיף ב' פשוט השלימו ל-180 מעלות במשולש.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית המשוואה המלאה לחוק הסינוסים עם הרדיוס הנתון.", math_expression: "\\dfrac{a}{\\sin(30^{\\circ})} = 2 \\times 10" },
            { verbal_explanation: "שלב 2: בידוד הצלע באגף שמאל.", math_expression: "a = 20 \\times \\sin(30^{\\circ})" },
            { verbal_explanation: "שלב 3: חישוב הערך (סינוס שלושים הוא חצי) לקבלת אורך הצלע (תשובה לא').", math_expression: "a = 20 \\times 0.5 = 10" },
            { verbal_explanation: "שלב 4: כתיבת משוואת סכום זוויות במשולש למציאת הזווית החסרה.", math_expression: "C = 180^{\\circ} - (30^{\\circ} + 70^{\\circ})" },
            { verbal_explanation: "שלב 5: חישוב הזווית (תשובה לב').", math_expression: "C = 180^{\\circ} - 100^{\\circ} = 80^{\\circ}" }
        ],
        final_answer: "א. 10 | ב. 80"
    }
];