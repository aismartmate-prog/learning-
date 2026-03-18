// ========================================================================
// שכבת גיל: כיתה ז' | נושא: גרפים מציאותיים
// 3 תתי נושאים | 36 שאלות סה"כ
// פתרונות מפורטים, איורי גרפים ומערכות צירים ב-SVG מוטמע ונקי.
// ללא LaTeX! כתיבה בטוחה: × לכפל, : לחילוק, 1/4 לשברים.
// ========================================================================

const questionsDB = [

    // ==========================================================
    // תת נושא 1: קריאת גרפים (12 שאלות)
    // ==========================================================
    
    {
        topic: "realistic_graphs",
        subTopic: "קריאת גרפים",
        question_text: "לפניכם גרף המתאר את הטמפרטורה שנמדדה ביום חורף בין השעות 08:00 ל-14:00. באיזו שעה נמדדה הטמפרטורה הגבוהה ביותר?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 240 140' width='100%' height='140' style='max-width:300px;'><line x1='30' y1='110' x2='220' y2='110' stroke='#334155' stroke-width='2'/><line x1='30' y1='10' x2='30' y2='110' stroke='#334155' stroke-width='2'/><polyline points='30,90 70,70 110,30 150,20 190,50' fill='none' stroke='#ef4444' stroke-width='3'/><circle cx='30' cy='90' r='4' fill='#ef4444'/><circle cx='70' cy='70' r='4' fill='#ef4444'/><circle cx='110' cy='30' r='4' fill='#ef4444'/><circle cx='150' cy='20' r='4' fill='#ef4444'/><circle cx='190' cy='50' r='4' fill='#ef4444'/><text x='30' y='125' font-family='Arial' font-size='10' fill='#0f172a' text-anchor='middle'>08:00</text><text x='70' y='125' font-family='Arial' font-size='10' fill='#0f172a' text-anchor='middle'>09:00</text><text x='110' y='125' font-family='Arial' font-size='10' fill='#0f172a' text-anchor='middle'>10:00</text><text x='150' y='125' font-family='Arial' font-size='10' fill='#0f172a' text-anchor='middle'>12:00</text><text x='190' y='125' font-family='Arial' font-size='10' fill='#0f172a' text-anchor='middle'>14:00</text><text x='15' y='25' font-family='Arial' font-size='10' fill='#0f172a'>20°</text><text x='15' y='75' font-family='Arial' font-size='10' fill='#0f172a'>10°</text></svg></div>",
        options: ["12:00", "10:00", "14:00", "09:00"],
        correctAnswer: 0,
        hint: "חפשו את הנקודה הגבוהה ביותר (שיא הגרף) על ציר ה-y, ורדו ממנה למטה אל ציר ה-x כדי לראות את השעה.&rlm;",
        solution_steps: [
            { verbal_explanation: "הציר האנכי (y) מתאר את הטמפרטורה, והציר האופקי (x) מתאר את השעות.&rlm;", math_expression: "" },
            { verbal_explanation: "הנקודה הגבוהה ביותר בגרף נמצאת בדיוק מעל השעה 12:00 (שם הטמפרטורה הייתה מעט מעל 20 מעלות).&rlm;", math_expression: "" }
        ],
        final_answer: "12:00"
    },
    {
        topic: "realistic_graphs",
        subTopic: "קריאת גרפים",
        question_text: "גרף זה מתאר את המרחק שעבר רוכב אופניים מביתו לאורך זמן. כמה קילומטרים עבר הרוכב בין השעה השנייה לשעה הרביעית מתחילת הרכיבה?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 240 140' width='100%' height='140' style='max-width:300px;'><line x1='30' y1='110' x2='220' y2='110' stroke='#334155' stroke-width='2'/><line x1='30' y1='10' x2='30' y2='110' stroke='#334155' stroke-width='2'/><polyline points='30,110 70,80 110,50 150,50 190,20' fill='none' stroke='#3b82f6' stroke-width='3'/><circle cx='110' cy='50' r='4' fill='#3b82f6'/><circle cx='190' cy='20' r='4' fill='#3b82f6'/><text x='110' y='125' font-family='Arial' font-size='10' fill='#0f172a' text-anchor='middle'>שעה 2</text><text x='150' y='125' font-family='Arial' font-size='10' fill='#0f172a' text-anchor='middle'>שעה 3</text><text x='190' y='125' font-family='Arial' font-size='10' fill='#0f172a' text-anchor='middle'>שעה 4</text><text x='10' y='55' font-family='Arial' font-size='10' fill='#0f172a'>10</text><text x='10' y='25' font-family='Arial' font-size='10' fill='#0f172a'>20</text></svg></div>",
        options: ["10 ק\"מ", "20 ק\"מ", "0 ק\"מ", "30 ק\"מ"],
        correctAnswer: 0,
        hint: "בדקו מה היה המרחק בשעה 2 ומה היה המרחק בשעה 4. המרחק שעבר הוא ההפרש ביניהם.&rlm;",
        solution_steps: [
            { verbal_explanation: "לפי הגרף, בשעה 2 הרוכב היה במרחק של 10 ק\"מ.&rlm;", math_expression: "S_1 = 10" },
            { verbal_explanation: "בשעה 4, הרוכב הגיע למרחק של 20 ק\"מ מביתו.&rlm;", math_expression: "S_2 = 20" },
            { verbal_explanation: "נחשב את ההפרש כדי למצוא כמה עבר בפרק זמן זה.&rlm;", math_expression: "20 - 10 = 10" }
        ],
        final_answer: "10 ק\"מ"
    },
    {
        topic: "realistic_graphs",
        subTopic: "קריאת גרפים",
        question_text: "תרשים העמודות שלפניכם מציג את כמות הספרים שנמכרו בחנות במהלך ארבעה ימים. כמה ספרים נמכרו בסך הכל בימים שני ושלישי יחד?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 240 140' width='100%' height='140' style='max-width:300px;'><line x1='30' y1='110' x2='220' y2='110' stroke='#334155' stroke-width='2'/><line x1='30' y1='10' x2='30' y2='110' stroke='#334155' stroke-width='2'/><rect x='50' y='50' width='20' height='60' fill='#10b981'/><rect x='90' y='30' width='20' height='80' fill='#10b981'/><rect x='130' y='70' width='20' height='40' fill='#10b981'/><rect x='170' y='20' width='20' height='90' fill='#10b981'/><text x='60' y='125' font-family='Arial' font-size='10' fill='#0f172a' text-anchor='middle'>א'</text><text x='100' y='125' font-family='Arial' font-size='10' fill='#0f172a' text-anchor='middle'>ב'</text><text x='140' y='125' font-family='Arial' font-size='10' fill='#0f172a' text-anchor='middle'>ג'</text><text x='180' y='125' font-family='Arial' font-size='10' fill='#0f172a' text-anchor='middle'>ד'</text><text x='10' y='35' font-family='Arial' font-size='10' fill='#0f172a'>40</text><text x='10' y='75' font-family='Arial' font-size='10' fill='#0f172a'>20</text></svg></div>",
        options: ["60", "40", "20", "80"],
        correctAnswer: 0,
        hint: "קראו את הערך של יום שני (ב') ושל יום שלישי (ג') מציר ה-y, וחברו אותם.&rlm;",
        solution_steps: [
            { verbal_explanation: "ביום שני (ב') גובה העמודה מגיע ל-40.&rlm;", math_expression: "40" },
            { verbal_explanation: "ביום שלישי (ג') גובה העמודה מגיע ל-20.&rlm;", math_expression: "20" },
            { verbal_explanation: "נחבר את הכמויות של שני הימים יחד.&rlm;", math_expression: "40 + 20 = 60" }
        ],
        final_answer: "60"
    },
    {
        topic: "realistic_graphs",
        subTopic: "קריאת גרפים",
        question_text: "הגרף מציג את כמות המים במיכל (בליטרים) כפונקציה של הזמן (בדקות). באיזה קצב מתרוקן המיכל?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 240 140' width='100%' height='140' style='max-width:300px;'><line x1='40' y1='110' x2='220' y2='110' stroke='#334155' stroke-width='2'/><line x1='40' y1='10' x2='40' y2='110' stroke='#334155' stroke-width='2'/><line x1='40' y1='20' x2='160' y2='110' stroke='#f59e0b' stroke-width='3'/><circle cx='40' cy='20' r='4' fill='#f59e0b'/><circle cx='100' cy='65' r='4' fill='#f59e0b'/><circle cx='160' cy='110' r='4' fill='#f59e0b'/><text x='40' y='125' font-family='Arial' font-size='10' fill='#0f172a' text-anchor='middle'>0</text><text x='100' y='125' font-family='Arial' font-size='10' fill='#0f172a' text-anchor='middle'>2</text><text x='160' y='125' font-family='Arial' font-size='10' fill='#0f172a' text-anchor='middle'>4</text><text x='10' y='25' font-family='Arial' font-size='10' fill='#0f172a'>100</text><text x='15' y='68' font-family='Arial' font-size='10' fill='#0f172a'>50</text></svg></div>",
        options: ["25 ליטר בדקה", "50 ליטר בדקה", "100 ליטר בדקה", "20 ליטר בדקה"],
        correctAnswer: 0,
        hint: "המיכל התחיל מ-100 ליטר והתרוקן לאפס תוך 4 דקות. חלקו את כמות המים הכוללת בזמן.&rlm;",
        solution_steps: [
            { verbal_explanation: "בזמן 0, היו במיכל 100 ליטרים. בזמן 4 דקות, המיכל התרוקן (0 ליטרים).&rlm;", math_expression: "" },
            { verbal_explanation: "המיכל איבד 100 ליטר ב-4 דקות. נחלק כדי למצוא את הקצב לדקה.&rlm;", math_expression: "100 : 4 = 25" }
        ],
        final_answer: "25 ליטר בדקה"
    },
    {
        topic: "realistic_graphs",
        subTopic: "קריאת גרפים",
        question_text: "הגרף מציג את מספר המבקרים באתר אינטרנט בשעות שונות של היום. באיזו שעה חלה הירידה החדה ביותר במספר המבקרים?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 240 140' width='100%' height='140' style='max-width:300px;'><line x1='30' y1='110' x2='220' y2='110' stroke='#334155' stroke-width='2'/><line x1='30' y1='10' x2='30' y2='110' stroke='#334155' stroke-width='2'/><polyline points='30,90 70,50 110,60 150,20 190,80' fill='none' stroke='#8b5cf6' stroke-width='3'/><circle cx='150' cy='20' r='4' fill='#8b5cf6'/><circle cx='190' cy='80' r='4' fill='#8b5cf6'/><text x='110' y='125' font-family='Arial' font-size='10' fill='#0f172a' text-anchor='middle'>10:00</text><text x='150' y='125' font-family='Arial' font-size='10' fill='#0f172a' text-anchor='middle'>12:00</text><text x='190' y='125' font-family='Arial' font-size='10' fill='#0f172a' text-anchor='middle'>14:00</text></svg></div>",
        options: ["בין 12:00 ל-14:00", "בין 10:00 ל-12:00", "לפני 10:00", "אין ירידה בכלל"],
        correctAnswer: 0,
        hint: "חפשו את הקטע בגרף שבו הקו יורד למטה בשיפוע התלול ביותר.&rlm;",
        solution_steps: [
            { verbal_explanation: "ירידה בגרף מתבטאת בקו שיורד משמאל לימין.&rlm;", math_expression: "" },
            { verbal_explanation: "בין 10:00 ל-12:00 יש עלייה. בין 12:00 ל-14:00 יש קו היורד בחדות. לכן זו הירידה החדה ביותר.&rlm;", math_expression: "" }
        ],
        final_answer: "בין 12:00 ל-14:00"
    },
    {
        topic: "realistic_graphs",
        subTopic: "קריאת גרפים",
        question_text: "גרף זה מציג את החיסכון של יעל לאורך 5 חודשים. מה היה סכום החיסכון הכולל שלה בחודש השלישי?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 240 140' width='100%' height='140' style='max-width:300px;'><line x1='30' y1='110' x2='220' y2='110' stroke='#334155' stroke-width='2'/><line x1='30' y1='10' x2='30' y2='110' stroke='#334155' stroke-width='2'/><polyline points='30,110 70,80 110,60 150,40 190,20' fill='none' stroke='#0ea5e9' stroke-width='3'/><circle cx='110' cy='60' r='4' fill='#0ea5e9'/><text x='70' y='125' font-family='Arial' font-size='10' fill='#0f172a' text-anchor='middle'>ח' 1</text><text x='110' y='125' font-family='Arial' font-size='10' fill='#0f172a' text-anchor='middle'>ח' 2</text><text x='150' y='125' font-family='Arial' font-size='10' fill='#0f172a' text-anchor='middle'>ח' 3</text><text x='10' y='45' font-family='Arial' font-size='10' fill='#0f172a'>300</text></svg></div>",
        options: ["300 שקלים", "200 שקלים", "400 שקלים", "100 שקלים"],
        correctAnswer: 0,
        hint: "מצאו את חודש 3 (ח' 3) על הציר האופקי, ועלו לנקודה בגרף כדי לקרוא את הערך בציר האנכי.&rlm;",
        solution_steps: [
            { verbal_explanation: "נאתר את 'ח' 3' (חודש שלישי) על ציר ה-x (האופקי).&rlm;", math_expression: "" },
            { verbal_explanation: "הנקודה בגרף מעל חודש 3 נמצאת בדיוק מול המספר 300 בציר ה-y.&rlm;", math_expression: "" }
        ],
        final_answer: "300 שקלים"
    },
    {
        topic: "realistic_graphs",
        subTopic: "קריאת גרפים",
        question_text: "הגרף מציג את משקלו של כלבלב לאורך השבועות הראשונים לחייו. מה היה המשקל הממוצע שלו בשבוע הראשון והשני יחד (כלומר, כמה הוא שקל בשבוע 1 פלוס שבוע 2, חלקי 2)?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 240 140' width='100%' height='140' style='max-width:300px;'><line x1='30' y1='110' x2='220' y2='110' stroke='#334155' stroke-width='2'/><line x1='30' y1='10' x2='30' y2='110' stroke='#334155' stroke-width='2'/><polyline points='50,90 90,70 130,50' fill='none' stroke='#f97316' stroke-width='3'/><circle cx='50' cy='90' r='4' fill='#f97316'/><circle cx='90' cy='70' r='4' fill='#f97316'/><text x='50' y='125' font-family='Arial' font-size='10' fill='#0f172a' text-anchor='middle'>שב' 1</text><text x='90' y='125' font-family='Arial' font-size='10' fill='#0f172a' text-anchor='middle'>שב' 2</text><text x='15' y='95' font-family='Arial' font-size='10' fill='#0f172a'>2</text><text x='15' y='75' font-family='Arial' font-size='10' fill='#0f172a'>4</text></svg></div>",
        options: ["3 ק\"ג", "6 ק\"ג", "2 ק\"ג", "4 ק\"ג"],
        correctAnswer: 0,
        hint: "קראו את המשקל בשבוע 1 (2 ק\"ג) ובשבוע 2 (4 ק\"ג). חשבו ממוצע: חברו וחלקו ב-2.&rlm;",
        solution_steps: [
            { verbal_explanation: "משקל בשבוע 1 הוא 2 ק\"ג. משקל בשבוע 2 הוא 4 ק\"ג.&rlm;", math_expression: "" },
            { verbal_explanation: "נחשב סכום.&rlm;", math_expression: "2 + 4 = 6" },
            { verbal_explanation: "נחלק ב-2 למציאת הממוצע.&rlm;", math_expression: "6 : 2 = 3" }
        ],
        final_answer: "3 ק\"ג"
    },
    {
        topic: "realistic_graphs",
        subTopic: "קריאת גרפים",
        question_text: "שני רצים, אלון (אדום) וברק (כחול), מתחרים בריצה. הגרף מתאר את המרחק שעברו לאורך זמן. מי רץ מהר יותר?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 240 140' width='100%' height='140' style='max-width:300px;'><line x1='30' y1='110' x2='220' y2='110' stroke='#334155' stroke-width='2'/><line x1='30' y1='10' x2='30' y2='110' stroke='#334155' stroke-width='2'/><line x1='30' y1='110' x2='150' y2='20' stroke='#ef4444' stroke-width='3'/><line x1='30' y1='110' x2='190' y2='40' stroke='#3b82f6' stroke-width='3'/></svg></div>",
        options: ["אלון (האדום)", "ברק (הכחול)", "הם רצים באותה מהירות", "אי אפשר לדעת"],
        correctAnswer: 0,
        hint: "בגרף מרחק-זמן, קו תלול יותר (שעולה מהר יותר כלפי מעלה) מייצג מהירות גבוהה יותר.&rlm;",
        solution_steps: [
            { verbal_explanation: "הקו האדום תלול יותר ועולה למעלה (יותר מרחק) בפחות זמן ביחס לקו הכחול.&rlm;", math_expression: "" },
            { verbal_explanation: "שיפוע תלול בגרף מרחק-זמן משמעותו מהירות גבוהה יותר.&rlm;", math_expression: "" }
        ],
        final_answer: "אלון (האדום)"
    },
    {
        topic: "realistic_graphs",
        subTopic: "קריאת גרפים",
        question_text: "הגרף מציג את מצב הסוללה בטלפון (באחוזים) לאורך היום. מתי הטלפון היה מחובר למטען (נטען)?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 240 140' width='100%' height='140' style='max-width:300px;'><line x1='30' y1='110' x2='220' y2='110' stroke='#334155' stroke-width='2'/><line x1='30' y1='10' x2='30' y2='110' stroke='#334155' stroke-width='2'/><polyline points='30,20 90,80 140,80 180,30' fill='none' stroke='#10b981' stroke-width='3'/><text x='60' y='125' font-family='Arial' font-size='10' fill='#0f172a' text-anchor='middle'>בוקר</text><text x='115' y='125' font-family='Arial' font-size='10' fill='#0f172a' text-anchor='middle'>צהריים</text><text x='160' y='125' font-family='Arial' font-size='10' fill='#0f172a' text-anchor='middle'>ערב</text></svg></div>",
        options: ["בערב (אחרי הצהריים)", "בבוקר", "בצהריים", "הוא לא נטען בכלל"],
        correctAnswer: 0,
        hint: "טעינת סוללה משמעותה שרמת הסוללה (ציר y) עולה כלפי מעלה.&rlm;",
        solution_steps: [
            { verbal_explanation: "בבוקר הקו יורד (הסוללה מתרוקנת). בצהריים הקו אופקי (המכשיר לא בשימוש ולא בטעינה).&rlm;", math_expression: "" },
            { verbal_explanation: "בערב הקו עולה בחזרה כלפי מעלה. זהו השלב שבו הסוללה נטענת.&rlm;", math_expression: "" }
        ],
        final_answer: "בערב (אחרי הצהריים)"
    },
    {
        topic: "realistic_graphs",
        subTopic: "קריאת גרפים",
        question_text: "קראו את תרשים העמודות המציג מכירות של פירות. מהו ההפרש בין הפרי הנמכר ביותר לפרי שנמכר הכי פחות?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 240 140' width='100%' height='140' style='max-width:300px;'><line x1='30' y1='110' x2='220' y2='110' stroke='#334155' stroke-width='2'/><line x1='30' y1='10' x2='30' y2='110' stroke='#334155' stroke-width='2'/><rect x='50' y='30' width='30' height='80' fill='#f43f5e'/><rect x='110' y='70' width='30' height='40' fill='#eab308'/><rect x='170' y='50' width='30' height='60' fill='#22c55e'/><text x='65' y='125' font-family='Arial' font-size='10' fill='#0f172a' text-anchor='middle'>תפוח</text><text x='125' y='125' font-family='Arial' font-size='10' fill='#0f172a' text-anchor='middle'>בננה</text><text x='185' y='125' font-family='Arial' font-size='10' fill='#0f172a' text-anchor='middle'>אגס</text><text x='15' y='35' font-family='Arial' font-size='10' fill='#0f172a'>80</text><text x='15' y='75' font-family='Arial' font-size='10' fill='#0f172a'>40</text></svg></div>",
        options: ["40", "80", "120", "20"],
        correctAnswer: 0,
        hint: "הפרי הנמכר ביותר הוא התפוח (80). הפרי הנמכר פחות הוא הבננה (40). מה ההפרש?&rlm;",
        solution_steps: [
            { verbal_explanation: "לפי העמודות, תפוח הגיע ל-80 (הכי גבוה). בננה הגיעה ל-40 (הכי נמוך).&rlm;", math_expression: "" },
            { verbal_explanation: "נחשב את ההפרש.&rlm;", math_expression: "80 - 40 = 40" }
        ],
        final_answer: "40"
    },
    {
        topic: "realistic_graphs",
        subTopic: "קריאת גרפים",
        question_text: "גרף מציג את הגובה של מטוס מרגע ההמראה. מתי הגיע המטוס לגובה שיוט קבוע (הפסיק לטפס)?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 240 140' width='100%' height='140' style='max-width:300px;'><line x1='30' y1='110' x2='220' y2='110' stroke='#334155' stroke-width='2'/><line x1='30' y1='10' x2='30' y2='110' stroke='#334155' stroke-width='2'/><polyline points='30,110 80,40 180,40' fill='none' stroke='#0284c7' stroke-width='3'/><circle cx='80' cy='40' r='4' fill='#0284c7'/><text x='80' y='125' font-family='Arial' font-size='10' fill='#0f172a' text-anchor='middle'>דקה 15</text></svg></div>",
        options: ["בדקה ה-15", "מיד בהתחלה", "בדקה ה-30", "אי אפשר לדעת"],
        correctAnswer: 0,
        hint: "חפשו את הנקודה שבה הקו מפסיק לעלות והופך לאופקי (שטוח).&rlm;",
        solution_steps: [
            { verbal_explanation: "הקו מתחיל לעלות באלכסון (מטפס).&rlm;", math_expression: "" },
            { verbal_explanation: "בנקודה שמעל 'דקה 15' הקו מתיישר והופך לאופקי, מה שמסמן שהגובה כבר אינו משתנה (שיוט).&rlm;", math_expression: "" }
        ],
        final_answer: "בדקה ה-15"
    },
    {
        topic: "realistic_graphs",
        subTopic: "קריאת גרפים",
        question_text: "לפניכם גרף המתאר את מחיר הנסיעה במונית. כמה עולה הנסיעה ברגע הכניסה למונית (עוד לפני שמתחילים לנסוע)?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 240 140' width='100%' height='140' style='max-width:300px;'><line x1='30' y1='110' x2='220' y2='110' stroke='#334155' stroke-width='2'/><line x1='30' y1='10' x2='30' y2='110' stroke='#334155' stroke-width='2'/><polyline points='30,80 180,20' fill='none' stroke='#d946ef' stroke-width='3'/><circle cx='30' cy='80' r='4' fill='#d946ef'/><text x='10' y='85' font-family='Arial' font-size='10' fill='#0f172a'>12</text><text x='40' y='125' font-family='Arial' font-size='10' fill='#0f172a'>0 ק\"מ</text></svg></div>",
        options: ["12 שקלים", "0 שקלים", "20 שקלים", "אי אפשר לדעת"],
        correctAnswer: 0,
        hint: "הסתכלו על נקודת ההתחלה של הגרף (כאשר המרחק על ציר ה-x הוא 0). מהו הערך בציר ה-y (המחיר)?&rlm;",
        solution_steps: [
            { verbal_explanation: "הגרף אינו מתחיל מנקודת ה-0 בציר ה-y.&rlm;", math_expression: "" },
            { verbal_explanation: "בנקודת ההתחלה (0 ק\"מ), הגרף מתחיל בגובה 12. זהו תעריף ההתחלה ('דמי מונה').&rlm;", math_expression: "" }
        ],
        final_answer: "12 שקלים"
    },

    // ==========================================================
    // תת נושא 2: תיאור גרפי של תהליכים (12 שאלות)
    // ==========================================================
    
    {
        topic: "realistic_graphs",
        subTopic: "תיאור גרפי של תהליכים",
        question_text: "קראו את הסיפור: 'ירון יצא מביתו, הלך לחבר, נשאר שם לשחק במשך שעה, ולאחר מכן חזר הביתה'. איזה גרף מתאר נכון את **המרחק של ירון מביתו**?&rlm;",
        options: ["קו עולה, ואז קו אופקי, ואז קו יורד ל-0", "קו עולה, ואז קו אופקי, ואז קו ממשיך לעלות", "קו יורד, ואז קו אופקי, ואז קו עולה", "רק קו אופקי ארוך"],
        correctAnswer: 0,
        hint: "כשהוא הולך לחבר, המרחק מהבית גדל (קו עולה). כשהוא אצל החבר המרחק לא משתנה (אופקי). כשהוא חוזר, המרחק יורד חזרה לאפס.&rlm;",
        solution_steps: [
            { verbal_explanation: "הליכה לחבר: המרחק מהבית גדל ולכן הגרף חייב לעלות.&rlm;", math_expression: "" },
            { verbal_explanation: "זמן משחק: המרחק קבוע, ולכן הגרף אופקי (שטוח).&rlm;", math_expression: "" },
            { verbal_explanation: "חזרה הביתה: המרחק מהבית קטן עד שהוא חוזר ל-0. לכן הגרף יורד מטה.&rlm;", math_expression: "" }
        ],
        final_answer: "קו עולה, ואז קו אופקי, ואז קו יורד ל-0"
    },
    {
        topic: "realistic_graphs",
        subTopic: "תיאור גרפי של תהליכים",
        question_text: "הסיפור: 'מחממים מים בסיר עד שהם רותחים (מגיעים ל-100 מעלות), והמים ממשיכים לרתוח במשך דקות ארוכות מבלי לשנות טמפרטורה'. מה תהיה צורת הגרף שמתאר את טמפרטורת המים?&rlm;",
        options: ["קו עולה ואז קו אופקי", "קו עולה ואז קו יורד", "רק קו אופקי", "קו עולה ללא הפסקה"],
        correctAnswer: 0,
        hint: "הטמפרטורה עולה בזמן החימום, ונעצרת על 100 מעלות (נשארת קבועה).&rlm;",
        solution_steps: [
            { verbal_explanation: "זמן חימום: הטמפרטורה עולה, ולכן הגרף עולה.&rlm;", math_expression: "" },
            { verbal_explanation: "זמן רתיחה: הטמפרטורה נשארת יציבה על 100 מעלות, ולכן הגרף הופך לקו אופקי.&rlm;", math_expression: "" }
        ],
        final_answer: "קו עולה ואז קו אופקי"
    },
    {
        topic: "realistic_graphs",
        subTopic: "תיאור גרפי של תהליכים",
        question_text: "ילד מקפיץ כדור גומי על הרצפה. בכל קפיצה, הכדור עולה לגובה נמוך יותר מהקפיצה הקודמת. כיצד ייראה גרף ה**גובה של הכדור** לאורך זמן?&rlm;",
        options: ["סדרה של 'גבעות' שהולכות וקטנות בגובהן", "קו ישר היורד משמאל לימין", "סדרה של עמודות באותו גובה", "קו אופקי קבוע"],
        correctAnswer: 0,
        hint: "הכדור עולה, יורד ל-0, עולה שוב למקום קצת נמוך יותר, ויורד שוב ל-0.&rlm;",
        solution_steps: [
            { verbal_explanation: "כל קפיצה של כדור מיוצגת כעלייה (הכדור מתרומם) וירידה (הכדור נופל חזרה לרצפה 0). זוהי צורת 'גבעה' (או פרבולה).&rlm;", math_expression: "" },
            { verbal_explanation: "מכיוון שהאנרגיה דועכת, כל שיא של גבעה יהיה נמוך מקודמו.&rlm;", math_expression: "" }
        ],
        final_answer: "סדרה של 'גבעות' שהולכות וקטנות בגובהן"
    },
    {
        topic: "realistic_graphs",
        subTopic: "תיאור גרפי של תהליכים",
        question_text: "ממלאים בקבוק גלילי (ישר כמו צינור, ללא הצרות או התרחבויות) במים בעזרת ברז שזורם בקצב קבוע. כיצד ייראה גרף ה**גובה של המים בבקבוק**?&rlm;",
        options: ["קו ישר שעולה בשיפוע קבוע", "קו שעולה בהתחלה לאט ואז מהר", "קו יורד", "גבעה"],
        correctAnswer: 0,
        hint: "מכיוון שהבקבוק ישר והמים זורמים בקצב קבוע, המים יעלו באותו הקצב כל הזמן.&rlm;",
        solution_steps: [
            { verbal_explanation: "כאשר הקצב קבוע (כמות מים שווה נכנסת בכל שנייה) וצורת המיכל אחידה (גליל ישר), גובה המים עולה בצורה אחידה ויציבה.&rlm;", math_expression: "" },
            { verbal_explanation: "עלייה קבועה מתבטאת בגרף כקו ישר (ליניארי) עולה.&rlm;", math_expression: "" }
        ],
        final_answer: "קו ישר שעולה בשיפוע קבוע"
    },
    {
        topic: "realistic_graphs",
        subTopic: "תיאור גרפי של תהליכים",
        question_text: "צנחן קופץ ממטוס. בהתחלה הוא נופל מהר מאוד. לאחר מכן הוא פותח את המצנח, והמהירות שלו יורדת בחדות למספר נמוך ונשארת קבועה עד הנחיתה. מה יתאר נכון גרף של ה**מהירות** שלו?&rlm;",
        options: ["קו עולה, ואז יורד בחדות, ואז קו אופקי נמוך", "קו יורד כל הדרך לאפס", "קו אופקי כל הזמן", "קו שעולה כל הדרך למעלה"],
        correctAnswer: 0,
        hint: "המהירות גדלה (קו עולה), המצנח נפתח (מהירות יורדת, כלומר קו צונח למטה), גלישה בטוחה (מהירות קבועה, קו אופקי).&rlm;",
        solution_steps: [
            { verbal_explanation: "נפילה חופשית: המהירות גוברת ולכן הגרף של המהירות מטפס למעלה.&rlm;", math_expression: "" },
            { verbal_explanation: "פתיחת מצנח: המצנח בולם את הקפיצה ולכן המהירות יורדת משמעותית.&rlm;", math_expression: "" },
            { verbal_explanation: "עד הנחיתה: המהירות נשארת איטית וקבועה, ולכן קו אופקי.&rlm;", math_expression: "" }
        ],
        final_answer: "קו עולה, ואז יורד בחדות, ואז קו אופקי נמוך"
    },
    {
        topic: "realistic_graphs",
        subTopic: "תיאור גרפי של תהליכים",
        question_text: "אדם יורד במעלית מהקומה ה-10 לקומת הקרקע (0) ללא עצירות. כיצד ייראה גרף ה**קומה בה נמצא האדם** ביחס לזמן?&rlm;",
        options: ["קו ישר היורד משמאל לימין מ-10 אל 0", "קו אופקי", "קו ישר העולה מאפס ל-10", "קו יורד, עולה, ואז יורד שוב"],
        correctAnswer: 0,
        hint: "מספר הקומה מתחיל מ-10, ופוחת בצורה עקבית לאורך זמן הנסיעה במעלית, עד שמגיע ל-0.&rlm;",
        solution_steps: [
            { verbal_explanation: "בנקודת ההתחלה, האדם נמצא בקומה 10 (הגרף מתחיל גבוה).&rlm;", math_expression: "" },
            { verbal_explanation: "ככל שעובר הזמן, הוא יורד קומות בקצב קבוע עד ל-0. לכן זהו קו ישר יורד.&rlm;", math_expression: "" }
        ],
        final_answer: "קו ישר היורד משמאל לימין מ-10 אל 0"
    },
    {
        topic: "realistic_graphs",
        subTopic: "תיאור גרפי של תהליכים",
        question_text: "כיצד ייראה גרף המתאר את הגובה של השמש בשמיים לאורך היממה (מזריחה ועד שקיעה)?&rlm;",
        options: ["עולה מהבוקר, מגיע לשיא בצהריים, ויורד לקראת ערב (מעין קשת)", "קו עולה ללא הפסקה", "קו אופקי", "קו יורד בבוקר ועולה בערב"],
        correctAnswer: 0,
        hint: "חשבו מתי השמש עולה, מתי היא הכי גבוהה (צהריים), ומתי היא יורדת לשקיעה.&rlm;",
        solution_steps: [
            { verbal_explanation: "בזריחה (בוקר) גובה השמש עולה.&rlm;", math_expression: "" },
            { verbal_explanation: "בצהריים השמש במיקום הגבוה ביותר (נקודת המקסימום בגרף).&rlm;", math_expression: "" },
            { verbal_explanation: "מהצהריים ועד לשקיעה הגובה הולך ויורד עד לאפס. זה יוצר צורת 'קשת' (או פרבולה הפוכה).&rlm;", math_expression: "" }
        ],
        final_answer: "עולה מהבוקר, מגיע לשיא בצהריים, ויורד לקראת ערב (מעין קשת)"
    },
    {
        topic: "realistic_graphs",
        subTopic: "תיאור גרפי של תהליכים",
        question_text: "רונית אוכלת פיצה שיש בה 8 משולשים. היא אוכלת משולש אחד בכל כמה דקות. מה יתאר את הגרף של **מספר המשולשים שנשארו במגש**?&rlm;",
        options: ["גרף היורד במדרגות מ-8 ל-0", "גרף העולה מ-0 ל-8", "קו אופקי על המספר 8", "קו עולה ויורד לסרוגין"],
        correctAnswer: 0,
        hint: "מתחילים מ-8. כשמסיימים משולש זה קופץ ל-7, נשאר שם קצת, ואז קופץ ל-6. זה לא יורד בחלקים אלא בשלמים.&rlm;",
        solution_steps: [
            { verbal_explanation: "כמות המשולשים במגש נמדדת במספרים שלמים (8, 7, 6...).&rlm;", math_expression: "" },
            { verbal_explanation: "בזמן שהיא לועסת, המספר במגש קבוע. כשהיא לוקחת חדש, הוא יורד בבת אחת (מדרגה) וכן הלאה.&rlm;", math_expression: "" }
        ],
        final_answer: "גרף היורד במדרגות מ-8 ל-0"
    },
    {
        topic: "realistic_graphs",
        subTopic: "תיאור גרפי של תהליכים",
        question_text: "משפחה מקבלת משכורת קבועה ב-1 לכל חודש (העובר לזכות בחשבון), ולאורך החודש יש הוצאות יומיות שמקטינות את היתרה בבנק. כיצד נראה גרף העובר ושב בחשבון (יתרה מול זמן)?&rlm;",
        options: ["קפיצה חדה למעלה, ואחריה ירידה איטית, שוב ושוב (צורת 'שיני מסור')", "רק קו עולה", "קו אופקי קבוע", "רק קו יורד כלפי מטה לאורך חודשים"],
        correctAnswer: 0,
        hint: "המשכורת נכנסת ביום אחד (קפיצה למעלה), וההוצאות נמשכות כל החודש (ירידה באלכסון איטי). וחוזר חלילה בחודש הבא.&rlm;",
        solution_steps: [
            { verbal_explanation: "כניסת משכורת ביום אחד מגדילה את היתרה בבת אחת (קפיצה אנכית למעלה).&rlm;", math_expression: "" },
            { verbal_explanation: "קניות לאורך החודש מקטינות את היתרה לאט לאט (קו אלכסוני יורד). בסוף החודש שוב משכורת (קפיצה למעלה). כך נוצרת צורה דמוית מסור.&rlm;", math_expression: "" }
        ],
        final_answer: "קפיצה חדה למעלה, ואחריה ירידה איטית, שוב ושוב (צורת 'שיני מסור')"
    },
    {
        topic: "realistic_graphs",
        subTopic: "תיאור גרפי של תהליכים",
        question_text: "בתהליך של הקפאת מים למצב של קרח, המים מתקררים, מגיעים ל-0 מעלות (אז הם הופכים למוצק), ואז ממשיכים להתקרר בתוך המקפיא אל מתחת לאפס. מהו הגרף שיתאר את **הטמפרטורה**?&rlm;",
        options: ["קו יורד, הופך לקו אופקי זמני (מעבר מצב צבירה ב-0), וממשיך לרדת", "רק קו ישר שיורד ללא הפסקה", "קו עולה ואז יורד", "קו אופקי שנעצר על אפס לתמיד"],
        correctAnswer: 0,
        hint: "בזמן המעבר מנוזל למוצק (קפיאה), הטמפרטורה לא משתנה עד שכל המים קופאים.&rlm;",
        solution_steps: [
            { verbal_explanation: "המים מתקררים בתוך המקפיא (הטמפרטורה צונחת).&rlm;", math_expression: "" },
            { verbal_explanation: "ב-0 מעלות, תהליך הקיפאון דורש אנרגיה ולכן הטמפרטורה נשארת קבועה על 0 לזמן מה (קו אופקי).&rlm;", math_expression: "" },
            { verbal_explanation: "לאחר שנוצר קרח מוצק, הוא ימשיך להתקרר לטמפרטורה השלילית של המקפיא.&rlm;", math_expression: "" }
        ],
        final_answer: "קו יורד, הופך לקו אופקי זמני (מעבר מצב צבירה ב-0), וממשיך לרדת"
    },
    {
        topic: "realistic_graphs",
        subTopic: "תיאור גרפי של תהליכים",
        question_text: "מכונית מתקרבת לרמזור אדום. הנהג בולם בהדרגה עד לעצירה מוחלטת, ממתין לירוק, ואז לוחץ על הגז ומאיץ. כיצד נראה גרף **המהירות** של המכונית?&rlm;",
        options: ["ירידה לאפס, קו אופקי על האפס, ואז עלייה למעלה", "קו אופקי, קפיצה ל-0, קפיצה חזרה", "עלייה, קו אופקי על 100, ירידה", "ירידה ועליה ללא קו אופקי כלל"],
        correctAnswer: 0,
        hint: "בלימה = מהירות יורדת. המתנה ברמזור = מהירות 0 (קו אופקי בתחתית הגרף). האצה = מהירות עולה.&rlm;",
        solution_steps: [
            { verbal_explanation: "בלימה גורמת למהירות לקטון בהדרגה עד ל-0 (הגרף יורד).&rlm;", math_expression: "" },
            { verbal_explanation: "ההמתנה ברמזור האדום משמעותה שמהירות הרכב היא בדיוק אפס לאורך זמן ההמתנה (קו אופקי על ציר ה-x).&rlm;", math_expression: "" },
            { verbal_explanation: "לאחר מכן הנהג מאיץ, והמהירות עולה שוב למעלה.&rlm;", math_expression: "" }
        ],
        final_answer: "ירידה לאפס, קו אופקי על האפס, ואז עלייה למעלה"
    },
    {
        topic: "realistic_graphs",
        subTopic: "תיאור גרפי של תהליכים",
        question_text: "מטוס טס בגובה שיוט קבוע ולפתע נכנס ל'כיס אוויר' ונופל בפתאומיות למספר שניות, ואז ממשיך לעוף ישר בגובה החדש והנמוך יותר. כיצד זה נראה בגרף הגובה?&rlm;",
        options: ["קו אופקי, ירידה אנכית כמעט (תלולה מאוד), ושוב קו אופקי נמוך יותר", "קו עולה יורד כמו גלים", "קו שיורד במתינות עד למטה", "קו אופקי ואז עלייה תלולה"],
        correctAnswer: 0,
        hint: "גובה שיוט משמעו גובה קבוע (אופקי). נפילה פתאומית היא ירידה מהירה מאוד (תלולה כלפי מטה). לאחר מכן הוא שוב מתייצב.&rlm;",
        solution_steps: [
            { verbal_explanation: "טיסה ישרה שווה לקו אופקי.&rlm;", math_expression: "" },
            { verbal_explanation: "נפילה בכיס אוויר מתרחשת בזמן קצר מאוד וגורמת לאובדן גובה רב. זה ייראה כירידה תלולה במיוחד.&rlm;", math_expression: "" },
            { verbal_explanation: "ייצוב בגובה החדש ייצור שוב קו אופקי, אך נמוך יותר מהקו ההתחלתי.&rlm;", math_expression: "" }
        ],
        final_answer: "קו אופקי, ירידה אנכית כמעט (תלולה מאוד), ושוב קו אופקי נמוך יותר"
    },

    // ==========================================================
    // תת נושא 3: מערכת צירים (12 שאלות)
    // ==========================================================
    
    {
        topic: "realistic_graphs",
        subTopic: "מערכת צירים",
        question_text: "באיזה רביע של מערכת הצירים נמצאת הנקודה (3 , 4)?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='-50 -50 100 100' width='120' height='120'><line x1='-50' y1='0' x2='50' y2='0' stroke='#94a3b8' stroke-width='1'/><line x1='0' y1='-50' x2='0' y2='50' stroke='#94a3b8' stroke-width='1'/><circle cx='20' cy='-30' r='3' fill='#ef4444'/><text x='40' y='-5' font-family='Arial' font-size='8' fill='#0f172a'>x</text><text x='5' y='-40' font-family='Arial' font-size='8' fill='#0f172a'>y</text></svg></div>",
        options: ["רביע ראשון", "רביע שני", "רביע שלישי", "רביע רביעי"],
        correctAnswer: 0,
        hint: "נקודה שבה גם ה-x חיובי וגם ה-y חיובי נמצאת למעלה ומימין, שזה הרביע הראשון.&rlm;",
        solution_steps: [
            { verbal_explanation: "נבדוק את סימני הקואורדינטות. ערך ה-x הוא 3 (חיובי) וערך ה-y הוא 4 (חיובי).&rlm;", math_expression: "" },
            { verbal_explanation: "הרביע שבו שני הצירים חיוביים (ימינה ולמעלה) נקרא הרביע הראשון.&rlm;", math_expression: "" }
        ],
        final_answer: "רביע ראשון"
    },
    {
        topic: "realistic_graphs",
        subTopic: "מערכת צירים",
        question_text: "הנקודה (-5, 2) ממוקמת ב...&rlm;",
        options: ["הרביע השני", "הרביע הראשון", "הרביע השלישי", "הרביע הרביעי"],
        correctAnswer: 0,
        hint: "ה-x שלילי (שמאלה), וה-y חיובי (למעלה). איזה רביע זה?&rlm;",
        solution_steps: [
            { verbal_explanation: "ערך ה-x הוא 5- (ננוע שמאלה מציר ה-y).&rlm;", math_expression: "x = -5" },
            { verbal_explanation: "ערך ה-y הוא 2 (ננוע למעלה מציר ה-x).&rlm;", math_expression: "y = 2" },
            { verbal_explanation: "אזור זה (שמאלה ולמעלה) מוגדר כרביע השני במערכת הצירים.&rlm;", math_expression: "" }
        ],
        final_answer: "הרביע השני"
    },
    {
        topic: "realistic_graphs",
        subTopic: "מערכת צירים",
        question_text: "קואורדינטות הנקודה A הן (-3, -4). באיזה רביע היא נמצאת?&rlm;",
        options: ["הרביע השלישי", "הרביע השני", "על ציר ה-x", "הרביע הרביעי"],
        correctAnswer: 0,
        hint: "גם x שלילי (שמאלה) וגם y שלילי (למטה).&rlm;",
        solution_steps: [
            { verbal_explanation: "הנקודה נמצאת שמאלה מציר ה-y (כי x שלילי) ולמטה מציר ה-x (כי y שלילי).&rlm;", math_expression: "" },
            { verbal_explanation: "האזור שבו שני הערכים שליליים הוא הרביע השלישי.&rlm;", math_expression: "" }
        ],
        final_answer: "הרביע השלישי"
    },
    {
        topic: "realistic_graphs",
        subTopic: "מערכת צירים",
        question_text: "נקודה נמצאת בדיוק על ציר ה-y (כמו למשל הנקודה (3 , 0) לא, סליחה, הנקודה (0, 3)). מה משותף לכל הנקודות שמונחות על ציר ה-y?&rlm;",
        options: ["ערך ה-x שלהן הוא 0", "ערך ה-y שלהן הוא 0", "הן נמצאות ברביע הראשון", "ה-x וה-y שלהן שווים"],
        correctAnswer: 0,
        hint: "כדי להיות על העמוד (ציר ה-y), אי אפשר לזוז ימינה או שמאלה (ציר ה-x חייב להיות מאופס).&rlm;",
        solution_steps: [
            { verbal_explanation: "ציר ה-y הוא הציר האנכי. כשאנחנו עולים או יורדים עליו, אנחנו לא זזים ימינה או שמאלה במערכת.&rlm;", math_expression: "" },
            { verbal_explanation: "תזוזה ימינה ושמאלה נקבעת על ידי ערך ה-x. לכן, כדי להישאר על הציר, ה-x חייב להיות תמיד 0.&rlm;", math_expression: "x = 0" }
        ],
        final_answer: "ערך ה-x שלהן הוא 0"
    },
    {
        topic: "realistic_graphs",
        subTopic: "מערכת צירים",
        question_text: "מה המרחק בין הנקודה (2 , 5) לנקודה (8 , 5)?&rlm;",
        options: ["6 יחידות", "10 יחידות", "3 יחידות", "0 יחידות"],
        correctAnswer: 0,
        hint: "הנקודות נמצאות על אותו קו אופקי (כי ה-y שלהן זהה, 5). חשבו את ההפרש בין מספרי ה-x שלהן.&rlm;",
        solution_steps: [
            { verbal_explanation: "אנו רואים שקואורדינטת ה-y בשתי הנקודות שווה (5). כלומר הן נמצאות על קו אופקי ישר.&rlm;", math_expression: "y_1 = y_2 = 5" },
            { verbal_explanation: "כדי למצוא את המרחק ביניהן, פשוט נמצא את ההפרש בין קואורדינטות ה-x שלהן.&rlm;", math_expression: "8 - 2 = 6" }
        ],
        final_answer: "6 יחידות"
    },
    {
        topic: "realistic_graphs",
        subTopic: "מערכת צירים",
        question_text: "מה המרחק (באורך) של הקטע המחבר בין הנקודה (-3 , 1) לנקודה (-3 , 9)?&rlm;",
        options: ["8 יחידות", "10 יחידות", "6 יחידות", "0 יחידות"],
        correctAnswer: 0,
        hint: "הנקודות נמצאות על אותו קו אנכי (ה-x זהה). חשבו את ההפרש בין ערכי ה-y.&rlm;",
        solution_steps: [
            { verbal_explanation: "ה-x של שתי הנקודות הוא 3-. הן מונחות זו מעל זו על אותו ישר אנכי.&rlm;", math_expression: "x_1 = x_2 = -3" },
            { verbal_explanation: "המרחק ביניהן הוא ההפרש בין הגבהים (ערכי ה-y) שלהן.&rlm;", math_expression: "9 - 1 = 8" }
        ],
        final_answer: "8 יחידות"
    },
    {
        topic: "realistic_graphs",
        subTopic: "מערכת צירים",
        question_text: "נתונות שלוש מהקודקודים של מלבן: (1,1), (5,1), (5,4). היכן ממוקם הקודקוד הרביעי?&rlm;",
        options: ["(1,4)", "(4,1)", "(4,5)", "(1,5)"],
        correctAnswer: 0,
        hint: "ציירו בדמיון: הבסיס למטה הולך מ-x=1 ל-x=5 בגובה y=1. הצלע הימנית עולה מ-y=1 ל-y=4. הקודקוד החסר צריך לסגור את המלבן מצד שמאל למעלה.&rlm;",
        solution_steps: [
            { verbal_explanation: "הצלע השמאלית של המלבן צריכה להיות מקבילה לצלע הימנית. הצלע הימנית נמצאת על הישר שבו x=5. לכן הצלע השמאלית תהיה על הישר x=1.&rlm;", math_expression: "" },
            { verbal_explanation: "הצלע העליונה צריכה להיות מקבילה לתחתונה, ולכן היא חייבת להיות בגובה הקודקוד הימני-עליון (שם y=4).&rlm;", math_expression: "" },
            { verbal_explanation: "נקודת המפגש של x=1 ו-y=4 היא הנקודה החסרה.&rlm;", math_expression: "(1, 4)" }
        ],
        final_answer: "(1,4)"
    },
    {
        topic: "realistic_graphs",
        subTopic: "מערכת צירים",
        question_text: "מלבן משורטט במערכת צירים. קודקודיו הם (0,0), (6,0), (6,3), (0,3). מהו שטח המלבן?&rlm;",
        options: ["18", "9", "12", "36"],
        correctAnswer: 0,
        hint: "חשבו את אורך המלבן (המרחק על ציר ה-x מ-0 ל-6) ואת רוחבו (המרחק על ציר ה-y מ-0 ל-3), וכפלו אותם.&rlm;",
        solution_steps: [
            { verbal_explanation: "אורך המלבן (על ציר ה-x) הוא המרחק מ-0 ל-6.&rlm;", math_expression: "6 - 0 = 6" },
            { verbal_explanation: "רוחב המלבן (על ציר ה-y) הוא המרחק מ-0 ל-3.&rlm;", math_expression: "3 - 0 = 3" },
            { verbal_explanation: "שטח המלבן שווה לאורך כפול רוחב.&rlm;", math_expression: "6 × 3 = 18" }
        ],
        final_answer: "18"
    },
    {
        topic: "realistic_graphs",
        subTopic: "מערכת צירים",
        question_text: "נקודה M היא אמצע הקטע המחבר בין הנקודות (0,0) ל-(4,6). מהן הקואורדינטות של הנקודה M?&rlm;",
        options: ["(2,3)", "(4,3)", "(2,6)", "(3,2)"],
        correctAnswer: 0,
        hint: "כדי למצוא את האמצע של קטע, יש לחשב ממוצע לערכי ה-x וממוצע לערכי ה-y בנפרד.&rlm;",
        solution_steps: [
            { verbal_explanation: "נמצא את ה-x האמצעי. ממוצע של 0 ו-4.&rlm;", math_expression: "(0 + 4) : 2 = 2" },
            { verbal_explanation: "נמצא את ה-y האמצעי. ממוצע של 0 ו-6.&rlm;", math_expression: "(0 + 6) : 2 = 3" },
            { verbal_explanation: "קואורדינטות נקודת האמצע הן (2,3).&rlm;", math_expression: "" }
        ],
        final_answer: "(2,3)"
    },
    {
        topic: "realistic_graphs",
        subTopic: "מערכת צירים",
        question_text: "אם ניקח את הנקודה (2, 5) ונשקף אותה ('כמו במראה') מעבר לציר ה-x, מה יהיו הקואורדינטות החדשות שלה?&rlm;",
        options: ["(2, -5)", "(-2, 5)", "(-2, -5)", "(5, 2)"],
        correctAnswer: 0,
        hint: "כשמשקפים מעבר לציר ה-x, מיקום ה-x לא משתנה (לא זזנו ימינה שמאלה), רק ה-y מתהפך כלפי מטה (מחיובי לשלילי).&rlm;",
        solution_steps: [
            { verbal_explanation: "הנקודה נמצאת במרחק 5 יחידות מעל ציר ה-x.&rlm;", math_expression: "" },
            { verbal_explanation: "בשיקוף מעבר לציר ה-x, היא תעבור למרחק זהה מתחת לציר ה-x.&rlm;", math_expression: "" },
            { verbal_explanation: "ערך ה-x יישאר 2, וערך ה-y ישתנה ל-5-.&rlm;", math_expression: "x = 2 , y = -5" }
        ],
        final_answer: "(2, -5)"
    },
    {
        topic: "realistic_graphs",
        subTopic: "מערכת צירים",
        question_text: "משולש ישר זווית משורטט כך שקודקוד הזווית הישרה הוא בראשית הצירים (0,0). שני הקודקודים האחרים הם על הצירים בנקודות (4,0) ו-(0,5). מה שטח המשולש?&rlm;",
        options: ["10", "20", "12", "9"],
        correctAnswer: 0,
        hint: "הניצבים של המשולש מונחים על הצירים. אורך ניצב אחד הוא 4 ואורך הניצב השני הוא 5.&rlm;",
        solution_steps: [
            { verbal_explanation: "ניצב אחד יושב על ציר ה-x ואורכו מ-0 עד 4 הוא 4 יחידות.&rlm;", math_expression: "b = 4" },
            { verbal_explanation: "הניצב השני יושב על ציר ה-y ואורכו מ-0 עד 5 הוא 5 יחידות.&rlm;", math_expression: "h = 5" },
            { verbal_explanation: "במשולש ישר זווית, שטח הוא מכפלת הניצבים חלקי 2.&rlm;", math_expression: "(4 × 5) : 2 = 10" }
        ],
        final_answer: "10"
    },
    {
        topic: "realistic_graphs",
        subTopic: "מערכת צירים",
        question_text: "איזו מבין הנקודות הבאות נמצאת במקום ה'גבוה ביותר' (מבחינה אנכית) במערכת הצירים?&rlm;",
        options: ["(0 , 10)", "(15 , 5)", "(-20 , 8)", "(100 , -2)"],
        correctAnswer: 0,
        hint: "ה'גובה' במערכת צירים נקבע אך ורק על ידי קואורדינטת ה-y (המספר הימני בזוג).&rlm;",
        solution_steps: [
            { verbal_explanation: "נבדוק את ערכי ה-y של כל הנקודות.&rlm;", math_expression: "" },
            { verbal_explanation: "ערכי ה-y הם: 10, 5, 8, ומינוס 2.&rlm;", math_expression: "" },
            { verbal_explanation: "המספר 10 הוא הגדול ביותר, לכן הנקודה (0, 10) היא הגבוהה ביותר מבין כולן.&rlm;", math_expression: "10 > 8 > 5 > -2" }
        ],
        final_answer: "(0 , 10)"
    }

];