const questionsDB = [
    // ==========================================
    // תת נושא 1: מושגי יסוד בהסתברות (ניסוי, תוצאה, אירוע) (10 שאלות)
    // ==========================================

    // שאלה מספר 1
    {
        topic: "probability_stats_35371",
        subTopic: "מושגי יסוד בהסתברות (ניסוי, תוצאה, אירוע)",
        question_text: "מטילים מטבע הוגן 3 פעמים בזו אחר זו. כמה תוצאות אפשריות שונות קיימות במרחב המדגם של ניסוי זה?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 100' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><circle cx='50' cy='50' r='25' fill='#f59e0b' stroke='#d97706' stroke-width='4'/><circle cx='100' cy='50' r='25' fill='#f59e0b' stroke='#d97706' stroke-width='4'/><circle cx='150' cy='50' r='25' fill='#f59e0b' stroke='#d97706' stroke-width='4'/></svg></div>",
        options: ["8", "6", "9", "4"],
        correctAnswer: 0,
        hint: "בכל הטלה של מטבע יש שתי תוצאות אפשריות (עץ או פלי). הפעילו את חוק המכפלה בקומבינטוריקה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: ציון מספר האפשרויות בהטלת מטבע הראשונה.", math_expression: "n_1 = 2" },
            { verbal_explanation: "שלב 2: ציון מספר האפשרויות בהטלה השנייה.", math_expression: "n_2 = 2" },
            { verbal_explanation: "שלב 3: ציון מספר האפשרויות בהטלה השלישית.", math_expression: "n_3 = 2" },
            { verbal_explanation: "שלב 4: שימוש בחוק המכפלה למציאת כל גודל מרחב המדגם האפשרי.", math_expression: "n = 2 \\times 2 \\times 2" },
            { verbal_explanation: "שלב 5: ביצוע פעולות הכפל.", math_expression: "n = 8" },
            { verbal_explanation: "שלב 6: הרישום הסופי.", math_expression: "8" }
        ],
        final_answer: "8"
    },

    // שאלה מספר 2
    {
        topic: "probability_stats_35371",
        subTopic: "מושגי יסוד בהסתברות (ניסוי, תוצאה, אירוע)",
        question_text: "מטילים קוביית משחק הוגנת בעלת שש פאות (1 עד 6). מהי ההסתברות שיתקבל מספר זוגי?&rlm;",
        options: ["1/2", "1/3", "1/6", "2/3"],
        correctAnswer: 0,
        hint: "ספרו כמה תוצאות רצויות (מספרים זוגיים) קיימות, וחלקו בסך כל התוצאות האפשריות בקובייה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי כל מרחב המדגם של הניסוי.", math_expression: "n = 6" },
            { verbal_explanation: "שלב 2: זיהוי מספר המקרים הרצויים העונים להגדרת מספר זוגי.", math_expression: "m = 3" },
            { verbal_explanation: "שלב 3: הצבה בנוסחת ההסתברות הקלאסית.", math_expression: "P = \\dfrac{3}{6}" },
            { verbal_explanation: "שלב 4: צמצום השבר על ידי חלוקת המונה והמכנה בשלוש.", math_expression: "P = \\dfrac{1}{2}" },
            { verbal_explanation: "שלב 5: התשובה הדרושה כשבר פשוט.", math_expression: "1/2" }
        ],
        final_answer: "1/2"
    },

    // שאלה מספר 3
    {
        topic: "probability_stats_35371",
        subTopic: "מושגי יסוד בהסתברות (ניסוי, תוצאה, אירוע)",
        question_text: "בחפיסת קלפים סטנדרטית יש 52 קלפים. מתוכם 4 קלפי מלך (אחד מכל צורה). מושכים קלף אחד באקראי. מה ההסתברות שהקלף הוא מלך?&rlm;",
        options: ["1/13", "1/52", "4/13", "1/4"],
        correctAnswer: 0,
        hint: "הציבו את מספר המלכים כמספר התוצאות הרצויות, ואת מספר הקלפים בחפיסה כמרחב המדגם השלם.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת סך כל המאורעות האפשריים בניסוי זה.", math_expression: "n = 52" },
            { verbal_explanation: "שלב 2: ספירת כמות המקרים הרצויים לשליפת קלף מסוג מלך.", math_expression: "m = 4" },
            { verbal_explanation: "שלב 3: כתיבת תרגיל ההסתברות הבסיסי.", math_expression: "P = \\dfrac{4}{52}" },
            { verbal_explanation: "שלב 4: צמצום השבר על ידי חלוקת שני חלקיו בארבע.", math_expression: "P = \\dfrac{1}{13}" },
            { verbal_explanation: "שלב 5: הרישום לבחירה בתשובות.", math_expression: "1/13" }
        ],
        final_answer: "1/13"
    },

    // שאלה מספר 4
    {
        topic: "probability_stats_35371",
        subTopic: "מושגי יסוד בהסתברות (ניסוי, תוצאה, אירוע)",
        question_text: "בכד יש 5 כדורים אדומים, 3 כדורים כחולים ו-2 כדורים ירוקים. מערבבים ומוציאים כדור אחד. מה ההסתברות שהכדור הוא כחול? (התשובה במספר עשרוני).&rlm;",
        options: ["0.3", "0.5", "0.2", "0.8"],
        correctAnswer: 0,
        hint: "חברו תחילה את כל הכדורים כדי לדעת כמה כדורים יש בסך הכל בכד.",
        solution_steps: [
            { verbal_explanation: "שלב 1: סכימת כמות הכדורים בכד ליצירת מרחב מדגם מלא.", math_expression: "n = 5 + 3 + 2 = 10" },
            { verbal_explanation: "שלב 2: ספירת הכדורים שעונים לצבע המבוקש בשאלה.", math_expression: "m = 3" },
            { verbal_explanation: "שלב 3: הרכבת השבר המייצג את ההסתברות.", math_expression: "P = \\dfrac{3}{10}" },
            { verbal_explanation: "שלב 4: המרה למספר עשרוני על פי הדרישה.", math_expression: "P = 0.3" },
            { verbal_explanation: "שלב 5: התשובה העשרונית המוכנה להזנה.", math_expression: "0.3" }
        ],
        final_answer: "0.3"
    },

    // שאלה מספר 5
    {
        topic: "probability_stats_35371",
        subTopic: "מושגי יסוד בהסתברות (ניסוי, תוצאה, אירוע)",
        question_text: "מסובבים סביבון המחולק ל-8 גזרות שוות המסומנות במספרים 1 עד 8. מהי ההסתברות שהחץ יעצור על מספר אי-זוגי?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:200px; width:100%; border-radius:50%; background:#f8fafc; border:1px solid #e2e8f0;'><circle cx='100' cy='100' r='90' fill='none' stroke='#f59e0b' stroke-width='4'/><line x1='100' y1='10' x2='100' y2='190' stroke='#f59e0b' stroke-width='2'/><line x1='10' y1='100' x2='190' y2='100' stroke='#f59e0b' stroke-width='2'/><polygon points='100,100 120,40 90,40' fill='#ef4444'/></svg></div>",
        options: ["0.5", "0.25", "0.125", "0.75"],
        correctAnswer: 0,
        hint: "מנו את המספרים האי-זוגיים בגזרות הסביבון וחלקו בסך הגזרות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי כל חלקי הסביבון (מרחב הניסוי).", math_expression: "n = 8" },
            { verbal_explanation: "שלב 2: ספירת התוצאות הרצויות, שהן המספרים האי-זוגיים.", math_expression: "m = 4" },
            { verbal_explanation: "שלב 3: כתיבת תבנית ההסתברות הבסיסית.", math_expression: "P = \\dfrac{4}{8}" },
            { verbal_explanation: "שלב 4: צמצום השבר והמרתו למספר עשרוני.", math_expression: "P = 0.5" },
            { verbal_explanation: "שלב 5: התשובה הישירה.", math_expression: "0.5" }
        ],
        final_answer: "0.5"
    },

    // שאלה מספר 6
    {
        topic: "probability_stats_35371",
        subTopic: "מושגי יסוד בהסתברות (ניסוי, תוצאה, אירוע)",
        question_text: "מתוך כל חודשי השנה (12 חודשים), בוחרים חודש אחד באקראי. מהי ההסתברות שייבחר חודש שיש בו בדיוק 31 ימים? (יש 7 חודשים כאלו בשנה).&rlm;",
        options: ["7/12", "5/12", "1/2", "1/12"],
        correctAnswer: 0,
        hint: "המידע הנדרש לספירה כבר נתון בשאלה (7 חודשים). כל שנותר הוא להציב זאת כשבר מתוך השלם.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת גודל המדגם (מספר החודשים).", math_expression: "n = 12" },
            { verbal_explanation: "שלב 2: הגדרת מספר האירועים הרצויים על סמך הנתונים.", math_expression: "m = 7" },
            { verbal_explanation: "שלב 3: הצבה בנוסחת ההסתברות הכללית.", math_expression: "P = \\dfrac{7}{12}" },
            { verbal_explanation: "שלב 4: מכיוון שאי אפשר לצמצם את השבר, זו התשובה הסופית.", math_expression: "7/12" },
            { verbal_explanation: "שלב 5: הפתרון כפי שיוזן.", math_expression: "7/12" }
        ],
        final_answer: "7/12"
    },

    // שאלה מספר 7
    {
        topic: "probability_stats_35371",
        subTopic: "מושגי יסוד בהסתברות (ניסוי, תוצאה, אירוע)",
        question_text: "זורקים שתי קוביות משחק הוגנות. מהי ההסתברות שסכום המספרים שיתקבל על שתי הקוביות יהיה 12?&rlm;",
        options: ["1/36", "2/36", "1/12", "1/6"],
        correctAnswer: 0,
        hint: "בזריקת שתי קוביות ישנן 36 אפשרויות שונות (שש כפול שש). מצאו כמה זוגות נותנים סכום של 12.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב מספר האפשרויות הכולל במרחב הדו-ממדי.", math_expression: "n = 6 \\times 6 = 36" },
            { verbal_explanation: "שלב 2: בדיקת כל האפשרויות שסכומן הוא שתים עשרה (רק הזוג שש ושש עונה על התנאי).", math_expression: "m = 1" },
            { verbal_explanation: "שלב 3: הרכבת השבר למאורע בודד מתוך כלל המרחב.", math_expression: "P = \\dfrac{1}{36}" },
            { verbal_explanation: "שלב 4: התשובה הינה אחת חלקי שלושים ושש.", math_expression: "1/36" },
            { verbal_explanation: "שלב 5: הרישום לבדיקה במערכת.", math_expression: "1/36" }
        ],
        final_answer: "1/36"
    },

    // שאלה מספר 8
    {
        topic: "probability_stats_35371",
        subTopic: "מושגי יסוד בהסתברות (ניסוי, תוצאה, אירוע)",
        question_text: "בכיתה יש 30 תלמידים. 12 מהם מרכיבים משקפיים. בוחרים באקראי תלמיד אחד. מהי ההסתברות שייבחר תלמיד שאינו מרכיב משקפיים? (התשובה בעשרוני).&rlm;",
        options: ["0.6", "0.4", "0.18", "0.8"],
        correctAnswer: 0,
        hint: "חשבו קודם כמה תלמידים אינם מרכיבים משקפיים על ידי חיסור המרכיבים מסך כל התלמידים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי מספר התלמידים הכולל במדגם.", math_expression: "n = 30" },
            { verbal_explanation: "שלב 2: חישוב כמות המקרים הרצויים על ידי פעולת חיסור מהשלם.", math_expression: "m = 30 - 12 = 18" },
            { verbal_explanation: "שלב 3: בניית המשוואה להסתברות של האירוע המבוקש.", math_expression: "P = 18 : 30" },
            { verbal_explanation: "שלב 4: המרת תוצאת החלוקה למספר עשרוני.", math_expression: "P = 0.6" },
            { verbal_explanation: "שלב 5: בחירת התשובה.", math_expression: "0.6" }
        ],
        final_answer: "0.6"
    },

    // שאלה מספר 9
    {
        topic: "probability_stats_35371",
        subTopic: "מושגי יסוד בהסתברות (ניסוי, תוצאה, אירוע)",
        question_text: "המחשב בוחר מספר שלם אקראי בין 1 ל-20 (כולל). מה ההסתברות שהמספר שייבחר מתחלק ב-5 ללא שארית?&rlm;",
        options: ["0.2", "0.25", "0.15", "0.5"],
        correctAnswer: 0,
        hint: "רשמו את המספרים בין 1 ל-20 שמתחלקים ב-5 (5, 10, 15, 20), ספרו אותם וחלקו ב-20.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת כמות המספרים הכללית שנכללת בהגרלה.", math_expression: "n = 20" },
            { verbal_explanation: "שלב 2: ספירת המספרים העונים לתנאי של כפולה של חמש בתחום זה.", math_expression: "m = 4" },
            { verbal_explanation: "שלב 3: הצבה בחילוק ההסתברות המקובל.", math_expression: "P = 4 : 20" },
            { verbal_explanation: "שלב 4: המרה לביטוי עשרוני.", math_expression: "P = 0.2" },
            { verbal_explanation: "שלב 5: הרישום לבדיקה.", math_expression: "0.2" }
        ],
        final_answer: "0.2"
    },

    // שאלה מספר 10
    {
        topic: "probability_stats_35371",
        subTopic: "מושגי יסוד בהסתברות (ניסוי, תוצאה, אירוע)",
        question_text: "מטילים שני מטבעות זהים. מה ההסתברות ששניהם ייפלו על אותו הצד (שניהם עץ או שניהם פלי)?&rlm;",
        options: ["0.5", "0.25", "0.75", "1"],
        correctAnswer: 0,
        hint: "רשמו את כל ארבע האפשרויות, ובידקו כמה מהן עונות על התנאי של תוצאות זהות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב מספר האפשרויות השלם למערכת של שני מטבעות.", math_expression: "n = 2 \\times 2 = 4" },
            { verbal_explanation: "שלב 2: ספירת המצבים שבהם שני הצדדים זהים.", math_expression: "m = 2" },
            { verbal_explanation: "שלב 3: חלוקת הרצוי במצוי להרכבת ההסתברות.", math_expression: "P = 2 : 4" },
            { verbal_explanation: "שלב 4: חישוב הפעולה לקבלת עשרוני.", math_expression: "P = 0.5" },
            { verbal_explanation: "שלב 5: סיום התרגיל.", math_expression: "0.5" }
        ],
        final_answer: "0.5"
    },

    // ==========================================
    // תת נושא 2: חוק ההסתברות הכוללת (10 שאלות)
    // ==========================================

    // שאלה מספר 11
    {
        topic: "probability_stats_35371",
        subTopic: "חוק ההסתברות הכוללת",
        question_text: "ההסתברות שאירוע כלשהו יקרה היא 0.4. מהי ההסתברות שהאירוע לא יקרה (המאורע המשלים)?&rlm;",
        options: ["0.6", "0.4", "0.5", "1"],
        correctAnswer: 0,
        hint: "סכום ההסתברויות של אירוע והאירוע המשלים שלו (כל שאר האפשרויות) שווה תמיד ל-1.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת חוק המאורע המשלים המקשר בין האירוע להיפוכו.", math_expression: "P_1 + P_2 = 1" },
            { verbal_explanation: "שלב 2: הצבת ההסתברות הנתונה בשאלה.", math_expression: "0.4 + P_2 = 1" },
            { verbal_explanation: "שלב 3: בידוד ההסתברות המשלימה על ידי פעולת חיסור.", math_expression: "P_2 = 1 - 0.4" },
            { verbal_explanation: "שלב 4: חישוב הפרש עשרוני.", math_expression: "P_2 = 0.6" },
            { verbal_explanation: "שלב 5: הרישום לבחירה.", math_expression: "0.6" }
        ],
        final_answer: "0.6"
    },

    // שאלה מספר 12
    {
        topic: "probability_stats_35371",
        subTopic: "חוק ההסתברות הכוללת",
        question_text: "לפי תחזית מזג האוויר, ההסתברות שיירד שלג מחר היא 0.15. מה ההסתברות שלא יירד שלג?&rlm;",
        options: ["0.85", "0.15", "0.75", "0.95"],
        correctAnswer: 0,
        hint: "המאורע 'לא יירד שלג' הוא המאורע המשלים ל'יירד שלג'.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת סכום ההסתברויות הכולל לאירוע בודד.", math_expression: "P_1 + P_2 = 1" },
            { verbal_explanation: "שלב 2: החלפת המשתנה בנתון המספרי הרלוונטי.", math_expression: "0.15 + P_2 = 1" },
            { verbal_explanation: "שלב 3: העברת אגף בחיסור למציאת התוצאה של האירוע ההופכי.", math_expression: "P_2 = 1 - 0.15" },
            { verbal_explanation: "שלב 4: פתרון משוואת החיסור.", math_expression: "P_2 = 0.85" },
            { verbal_explanation: "שלב 5: קבלת התשובה.", math_expression: "0.85" }
        ],
        final_answer: "0.85"
    },

    // שאלה מספר 13
    {
        topic: "probability_stats_35371",
        subTopic: "חוק ההסתברות הכוללת",
        question_text: "שני אירועים הם זרים (אינם יכולים לקרות באותו הזמן). ההסתברות לראשון היא 0.3 וההסתברות לשני היא 0.2. מה ההסתברות שיקרה האירוע הראשון או השני (איחוד אירועים זרים)?&rlm;",
        options: ["0.5", "0.1", "0.6", "0.25"],
        correctAnswer: 0,
        hint: "באירועים זרים, ההסתברות של האיחוד שלהם ('או') שווה לסכום ההסתברויות שלהם.",
        solution_steps: [
            { verbal_explanation: "שלב 1: ציון הנתון הקריטי שהאירועים זרים, לכן אין להם חיתוך (אפס).", math_expression: "x = 0" },
            { verbal_explanation: "שלב 2: כתיבת נוסחת האיחוד ללא איבר החיתוך.", math_expression: "P = 0.3 + 0.2" },
            { verbal_explanation: "שלב 3: ביצוע פעולת החיבור העשרונית הפשוטה.", math_expression: "P = 0.5" },
            { verbal_explanation: "שלב 4: המסקנה הנדרשת מחיבור זה.", math_expression: "0.5" }
        ],
        final_answer: "0.5"
    },

    // שאלה מספר 14
    {
        topic: "probability_stats_35371",
        subTopic: "חוק ההסתברות הכוללת",
        question_text: "נתונים שני אירועים. הסתברות אירוע א' היא 0.5. הסתברות אירוע ב' היא 0.4. ההסתברות ששניהם יקרו יחד (החיתוך) היא 0.2. מה ההסתברות שלפחות אחד מהם יקרה (האיחוד)?&rlm;",
        options: ["0.7", "0.9", "0.3", "0.5"],
        correctAnswer: 0,
        hint: "השתמשו בנוסחת ההסתברות הכוללת לאיחוד: הסתברות א' ועוד הסתברות ב', פחות הסתברות החיתוך.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת המשוואה הכללית לאיחוד שני מאורעות לא זרים.", math_expression: "P = P_1 + P_2 - x" },
            { verbal_explanation: "שלב 2: הצבת הנתונים המלאים למשוואה.", math_expression: "P = 0.5 + 0.4 - 0.2" },
            { verbal_explanation: "שלב 3: סכימת שני האיברים הראשונים.", math_expression: "P = 0.9 - 0.2" },
            { verbal_explanation: "שלב 4: ביצוע החיסור למציאת האיחוד הנקי מחפיפות.", math_expression: "P = 0.7" },
            { verbal_explanation: "שלב 5: התשובה הישירה.", math_expression: "0.7" }
        ],
        final_answer: "0.7"
    },

    // שאלה מספר 15
    {
        topic: "probability_stats_35371",
        subTopic: "חוק ההסתברות הכוללת",
        question_text: "בקבוצה של 100 תלמידים, 60 משחקים כדורגל, 50 משחקים כדורסל, ו-20 משחקים גם וגם. בוחרים תלמיד באקראי. מה ההסתברות שהוא משחק לפחות אחד מהמשחקים הללו?&rlm;",
        options: ["0.9", "1.1", "0.7", "0.8"],
        correctAnswer: 0,
        hint: "חברו את הכדורגל והכדורסל, והחסירו את אלו שמשחקים גם וגם (כדי לא לספור אותם פעמיים). חלקו את התוצאה ב-100.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב כמות התלמידים המשחקים לפחות משחק אחד בעזרת עקרון ההכלה וההפרדה.", math_expression: "m = 60 + 50 - 20" },
            { verbal_explanation: "שלב 2: פתרון המשוואה הפשוטה.", math_expression: "m = 110 - 20 = 90" },
            { verbal_explanation: "שלב 3: הצבה בנוסחת ההסתברות מול המדגם הכולל.", math_expression: "P = 90 : 100" },
            { verbal_explanation: "שלב 4: המרה לשבר עשרוני.", math_expression: "P = 0.9" },
            { verbal_explanation: "שלב 5: התשובה היא תשע עשיריות.", math_expression: "0.9" }
        ],
        final_answer: "0.9"
    },

    // שאלה מספר 16
    {
        topic: "probability_stats_35371",
        subTopic: "חוק ההסתברות הכוללת",
        question_text: "במשחק, ההסתברות לניצחון היא 0.4, לתיקו היא 0.3 ולהפסד היא 0.3. מה ההסתברות לא להפסיד במשחק?&rlm;",
        options: ["0.7", "0.6", "0.4", "0.3"],
        correctAnswer: 0,
        hint: "לא להפסיד אומר לנצח או לסיים בתיקו. אפשר גם לחשב כמאורע משלים להפסד (1 פחות 0.3).",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי שהאפשרויות הן זרות (אי אפשר לנצח ולהפסיד בו זמנית). הפעלה של עקרון המאורע המשלים.", math_expression: "P = 1 - 0.3" },
            { verbal_explanation: "שלב 2: ביצוע פעולת החיסור מתוך המרחב השלם.", math_expression: "P = 0.7" },
            { verbal_explanation: "שלב 3: ניתן לאמת זאת על ידי סכימה של אירוע הניצחון ואירוע התיקו, שהם אלו שעונים להגדרה.", math_expression: "P = 0.4 + 0.3 = 0.7" },
            { verbal_explanation: "שלב 4: שתי הדרכים מובילות לאותה המסקנה בדיוק.", math_expression: "0.7" }
        ],
        final_answer: "0.7"
    },

    // שאלה מספר 17
    {
        topic: "probability_stats_35371",
        subTopic: "חוק ההסתברות הכוללת",
        question_text: "בקופסה מלאה בבלונים, ההסתברות להוציא בלון אדום היא 0.4, וההסתברות להוציא בלון כחול היא 0.5. כל שאר הבלונים ירוקים. מה ההסתברות להוציא בלון ירוק?&rlm;",
        options: ["0.1", "0.9", "0.2", "0.5"],
        correctAnswer: 0,
        hint: "סכום ההסתברויות של כל האפשרויות יחד תמיד משלים לאחת.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת משוואת השלם המאגדת את כל האירועים האפשריים הזרים בקופסה.", math_expression: "0.4 + 0.5 + x = 1" },
            { verbal_explanation: "שלב 2: כינוס שני הערכים הידועים באגף שמאל.", math_expression: "0.9 + x = 1" },
            { verbal_explanation: "שלב 3: בידוד ההסתברות הנעלמת על ידי העברת אגף בחיסור.", math_expression: "x = 1 - 0.9" },
            { verbal_explanation: "שלב 4: פעולת החיסור הפשוטה.", math_expression: "x = 0.1" },
            { verbal_explanation: "שלב 5: התשובה הישירה.", math_expression: "0.1" }
        ],
        final_answer: "0.1"
    },

    // שאלה מספר 18
    {
        topic: "probability_stats_35371",
        subTopic: "חוק ההסתברות הכוללת",
        question_text: "נתונים שני אירועים A ו-B. ידוע שההסתברות לאיחוד שלהם היא 0.8. הסתברות A לבדו היא 0.5. הסתברות B לבדו היא 0.6. מה ההסתברות של החיתוך שלהם (האזור המשותף)?&rlm;",
        options: ["0.3", "0.1", "0.4", "0.2"],
        correctAnswer: 0,
        hint: "השתמשו בנוסחת האיחוד, הציבו את כל הנתונים, והעבירו אגפים כדי למצוא את ההסתברות לחיתוך.",
        solution_steps: [
            { verbal_explanation: "שלב 1: העלאת נוסחת ההסתברות הכוללת לאיחוד שני מאורעות.", math_expression: "0.8 = 0.5 + 0.6 - x" },
            { verbal_explanation: "שלב 2: סכימת האיברים הידועים באגף ימין.", math_expression: "0.8 = 1.1 - x" },
            { verbal_explanation: "שלב 3: חילוף אלגברי בין הנעלם השלילי לבין המספר השלם על מנת לבודד אותו כחיובי.", math_expression: "x = 1.1 - 0.8" },
            { verbal_explanation: "שלב 4: ביצוע החיסור העשרוני.", math_expression: "x = 0.3" },
            { verbal_explanation: "שלב 5: תוצאת ההסתברות לחיתוך המאורעות מתקבלת כהפרש הזה.", math_expression: "0.3" }
        ],
        final_answer: "0.3"
    },

    // שאלה מספר 19
    {
        topic: "probability_stats_35371",
        subTopic: "חוק ההסתברות הכוללת",
        question_text: "ההסתברות שאירוע מסוים יקרה היא 0.8. אירוע אחר הוא המאורע המשלים לו (האירוע ההפוך לו לחלוטין). למה שווה סכום ההסתברויות של שני אירועים אלו יחד?&rlm;",
        options: ["1", "0.8", "1.8", "0.2"],
        correctAnswer: 0,
        hint: "מאורע והמאורע המשלים שלו תמיד מכסים את כל האפשרויות הקיימות באותו ניסוי (מרחב המדגם המלא).",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת תכונת היסוד המתמטית של מאורעות משלימים במרחב הסתברות.", math_expression: "P_1 + P_2 = 1" },
            { verbal_explanation: "שלב 2: ההבנה שאין אפשרויות חלופיות מחוץ למאורע ולהיפוכו מסכמת את התרגיל מיד ללא חישוב נוסף.", math_expression: "1" },
            { verbal_explanation: "שלב 3: גם אם נחשב את המשלים (אפס נקודה שתיים) ואז נחבר, נגיע כמובן לאותה התוצאה.", math_expression: "0.8 + 0.2 = 1" },
            { verbal_explanation: "שלב 4: הרישום לבחירה בתשובות.", math_expression: "1" }
        ],
        final_answer: "1"
    },

    // שאלה מספר 20
    {
        topic: "probability_stats_35371",
        subTopic: "חוק ההסתברות הכוללת",
        question_text: "בסקר של 200 אנשים, 120 ציינו שהם אוהבים תפוחים, 100 אוהבים תפוזים, ו-40 לא אוהבים אף אחד מהם. בוחרים אדם באקראי. מה ההסתברות שהוא אוהב את שני הפירות יחד?&rlm;",
        options: ["0.3", "0.2", "0.1", "0.4"],
        correctAnswer: 0,
        hint: "חסרו את 40 כדי למצוא כמה אוהבים לפחות פרי אחד. לאחר מכן השתמשו בנוסחת עקרון ההכלה וההפרדה למציאת החיתוך. חלקו ב-200.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב כמות האנשים שאוהבים לפחות פרי אחד מסך הסקר הכללי.", math_expression: "m_1 = 200 - 40 = 160" },
            { verbal_explanation: "שלב 2: בניית המשוואה המאחדת את אוהבי הפירות השונים בחיסור המשותף (החיתוך).", math_expression: "160 = 120 + 100 - x" },
            { verbal_explanation: "שלב 3: סכימת קבוצות האוהבים.", math_expression: "160 = 220 - x" },
            { verbal_explanation: "שלב 4: חילוץ הנעלם המייצג את קבוצת החיתוך (כמות האנשים שאוהבת את שניהם).", math_expression: "x = 220 - 160 = 60" },
            { verbal_explanation: "שלב 5: הרכבת ההסתברות המבוקשת מול המדגם המלא של כלל הנשאלים.", math_expression: "P = 60 : 200" },
            { verbal_explanation: "שלב 6: ביצוע פעולת חילוק והמרה לשבר עשרוני.", math_expression: "P = 0.3" },
            { verbal_explanation: "שלב 7: הרישום לבדיקה במערכת.", math_expression: "0.3" }
        ],
        final_answer: "0.3"
    },

    // ==========================================
    // תת נושא 3: הסתברות מותנית (10 שאלות)
    // ==========================================

    // שאלה מספר 21
    {
        topic: "probability_stats_35371",
        subTopic: "הסתברות מותנית",
        question_text: "בטבלה דו-ממדית נתון: 60 גברים ו-40 נשים בסך הכל. 20 מהגברים מעשנים. אם בוחרים גבר באקראי (ידוע שהנבחר הוא גבר), מה ההסתברות שהוא מעשן?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><rect x='20' y='20' width='160' height='160' fill='none' stroke='#64748b' stroke-width='2'/><line x1='20' y1='73' x2='180' y2='73' stroke='#64748b' stroke-width='1'/><line x1='20' y1='126' x2='180' y2='126' stroke='#64748b' stroke-width='1'/><line x1='73' y1='20' x2='73' y2='180' stroke='#64748b' stroke-width='1'/><line x1='126' y1='20' x2='126' y2='180' stroke='#64748b' stroke-width='1'/></svg></div>",
        options: ["1/3", "1/5", "1/2", "1/4"],
        correctAnswer: 0,
        hint: "המכנה מצטמצם מסך כל האנשים לסך כל הגברים בלבד, כי הנתון הותנה מראש בכך שנבחר גבר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי ההתניה שנקבעה בשאלה, המצמצמת את המרחב לקבוצת הגברים בלבד.", math_expression: "n = 60" },
            { verbal_explanation: "שלב 2: קביעת המקרים הרצויים מתוך הקבוצה החדשה והמצומצמת.", math_expression: "m = 20" },
            { verbal_explanation: "שלב 3: כתיבת תרגיל ההסתברות.", math_expression: "P = \\dfrac{20}{60}" },
            { verbal_explanation: "שלב 4: צמצום השבר על ידי חלוקת בעשרים במונה ובמכנה.", math_expression: "P = \\dfrac{1}{3}" },
            { verbal_explanation: "שלב 5: התשובה הישירה לסעיף זה.", math_expression: "1/3" }
        ],
        final_answer: "1/3"
    },

    // שאלה מספר 22
    {
        topic: "probability_stats_35371",
        subTopic: "הסתברות מותנית",
        question_text: "באותה קבוצה (60 גברים ו-40 נשים), סך הכל יש 30 מעשנים, ומתוכם 10 נשים שמעשנות. אם נבחר אדם מעשן (ידוע שהוא מעשן), מה ההסתברות שזו אישה?&rlm;",
        options: ["1/3", "1/4", "1/10", "3/10"],
        correctAnswer: 0,
        hint: "התנאי המוקדם הוא 'נבחר מעשן'. לכן המכנה הוא 30. המונה יהיה כמות הנשים המעשנות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: התנאי קובע כי מרחב המדגם הרלוונטי הוא קבוצת המעשנים בלבד.", math_expression: "n = 30" },
            { verbal_explanation: "שלב 2: מקרים רצויים העונים לתנאי הנשים בתוך הקבוצה המצומצמת.", math_expression: "m = 10" },
            { verbal_explanation: "שלב 3: הרכבת השבר להסתברות.", math_expression: "P = \\dfrac{10}{30}" },
            { verbal_explanation: "שלב 4: צמצום אפסים להגעה לשבר הקצר ביותר.", math_expression: "P = \\dfrac{1}{3}" },
            { verbal_explanation: "שלב 5: הרישום הרשמי של התוצאה המוזנת.", math_expression: "1/3" }
        ],
        final_answer: "1/3"
    },

    // שאלה מספר 23
    {
        topic: "probability_stats_35371",
        subTopic: "הסתברות מותנית",
        question_text: "זורקים שתי קוביות משחק הוגנות. ידוע שסכום המספרים בקוביות הוא 8. תחת תנאי זה, מה ההסתברות ששתי הקוביות הראו את המספר 4 (דאבל)?&rlm;",
        options: ["1/5", "1/6", "1/36", "1/4"],
        correctAnswer: 0,
        hint: "מרחב המדגם אינו 36, אלא רק הזוגות שסכומם 8: (2,6), (3,5), (4,4), (5,3), (6,2). ספרו אותם וחפשו את הדאבל ביניהם.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגבלת האפשרויות רק למקרים שמקיימים את התנאי המוקדם.", math_expression: "(2,6) , (3,5) , (4,4) , (5,3) , (6,2)" },
            { verbal_explanation: "שלב 2: ספירת מרחב המדגם המותנה והמצומצם החדש.", math_expression: "n = 5" },
            { verbal_explanation: "שלב 3: זיהוי כמה תוצאות מתוך רשימה זו עונות לדרישה של דאבל.", math_expression: "m = 1" },
            { verbal_explanation: "שלב 4: קביעת ההסתברות המותנית על בסיס זה.", math_expression: "P = \\dfrac{1}{5}" },
            { verbal_explanation: "שלב 5: סוף הפעולה לחלק זה.", math_expression: "1/5" }
        ],
        final_answer: "1/5"
    },

    // שאלה מספר 24
    {
        topic: "probability_stats_35371",
        subTopic: "הסתברות מותנית",
        question_text: "בחניון יש 50 מכוניות. 30 אדומות ו-20 כחולות. 10 מהאדומות ידניות, ו-5 מהכחולות ידניות. נבחרה באקראי מכונית ידנית. מה ההסתברות שהיא אדומה?&rlm;",
        options: ["2/3", "1/5", "1/3", "10/30"],
        correctAnswer: 0,
        hint: "חשבו את סך כל המכוניות הידניות בחניון. זה יהיה המכנה החדש שלכם. המונה הוא המכוניות האדומות הידניות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב כמות המכוניות המייצגת את התנאי המקדים (סך הרכבים הידניים מכל הצבעים).", math_expression: "n = 10 + 5 = 15" },
            { verbal_explanation: "שלב 2: הגדרת מספר הרכבים שעונים לתנאי המבוקש מתוך הקבוצה.", math_expression: "m = 10" },
            { verbal_explanation: "שלב 3: בניית המשוואה.", math_expression: "P = \\dfrac{10}{15}" },
            { verbal_explanation: "שלב 4: פישוט השבר על ידי חלוקה בחמש למונה ולמכנה.", math_expression: "P = \\dfrac{2}{3}" },
            { verbal_explanation: "שלב 5: התשובה.", math_expression: "2/3" }
        ],
        final_answer: "2/3"
    },

    // שאלה מספר 25
    {
        topic: "probability_stats_35371",
        subTopic: "הסתברות מותנית",
        question_text: "נתונים שני אירועים A ו-B. ההסתברות שאירוע A יתרחש היא 0.5. ההסתברות של החיתוך (שני האירועים מתרחשים יחד) היא 0.2. מהי ההסתברות המותנית לאירוע B בהינתן ש-A כבר קרה?&rlm;",
        options: ["0.4", "0.1", "2.5", "0.3"],
        correctAnswer: 0,
        hint: "הנוסחה להסתברות מותנית מחלקת את הסתברות החיתוך בהסתברות של התנאי הנתון.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת הנוסחה הרשמית של הסתברות מותנית באותיות.", math_expression: "P = x : P_{A}" },
            { verbal_explanation: "שלב 2: הצבת הנתונים של החיתוך והתנאי לתוך התבנית.", math_expression: "P = 0.2 : 0.5" },
            { verbal_explanation: "שלב 3: חישוב הפעולה על ידי מעבר של נקודה עשרונית ימינה (שתיים חלקי חמש).", math_expression: "P = 2 : 5" },
            { verbal_explanation: "שלב 4: המרה עשרונית כמקובל בבחינה.", math_expression: "P = 0.4" },
            { verbal_explanation: "שלב 5: בחירת התשובה.", math_expression: "0.4" }
        ],
        final_answer: "0.4"
    },

    // שאלה מספר 26
    {
        topic: "probability_stats_35371",
        subTopic: "הסתברות מותנית",
        question_text: "קבוצה של 100 סטודנטים. 70 עברו מתמטיקה, 80 עברו אנגלית, ו-60 עברו גם מתמטיקה וגם אנגלית. בוחרים סטודנט שעבר מתמטיקה (ידוע). מה ההסתברות שעבר גם אנגלית?&rlm;",
        options: ["6/7", "6/8", "3/5", "6/10"],
        correctAnswer: 0,
        hint: "התנאי מציב את 70 במכנה. החיתוך מציב את 60 במונה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הבנת ההתניה כקביעת גודל חדש למרחב העבודה.", math_expression: "n = 70" },
            { verbal_explanation: "שלב 2: מספר התלמידים המקיימים את הדרישה השנייה במקביל להתניה.", math_expression: "m = 60" },
            { verbal_explanation: "שלב 3: שיבוץ הנתונים בשבר ההסתברות.", math_expression: "P = \\dfrac{60}{70}" },
            { verbal_explanation: "שלב 4: צמצום האפסים לקבלת השבר המצומצם.", math_expression: "P = \\dfrac{6}{7}" },
            { verbal_explanation: "שלב 5: המסקנה לרישום במערכת.", math_expression: "6/7" }
        ],
        final_answer: "6/7"
    },

    // שאלה מספר 27
    {
        topic: "probability_stats_35371",
        subTopic: "הסתברות מותנית",
        question_text: "בקופסה 4 מטבעות זהב ו-6 כסף. שולפים מטבע אחד ולא מחזירים אותו. לאחר מכן שולפים מטבע שני. ידוע שהמטבע הראשון שנשלף היה זהב. מה ההסתברות שהשני גם יהיה זהב?&rlm;",
        options: ["1/3", "4/9", "3/10", "4/10"],
        correctAnswer: 0,
        hint: "עדכנו את הקופסה לאחר התנאי הנתון: עכשיו יש בקופסה רק 9 מטבעות, ומתוכם רק 3 הם מזהב.",
        solution_steps: [
            { verbal_explanation: "שלב 1: תרגום ההתניה לשינוי פיזי בכמות הכוללת. מאחר ולא הייתה החזרה, המכנה קטן באחד.", math_expression: "n = 10 - 1 = 9" },
            { verbal_explanation: "שלב 2: תרגום ההתניה לשינוי בכמות המטבעות הספציפית הרלוונטית. המונה קטן באחד.", math_expression: "m = 4 - 1 = 3" },
            { verbal_explanation: "שלב 3: קביעת ההסתברות לשליפה השנייה מול המצב המעודכן בקופסה.", math_expression: "P = \\dfrac{3}{9}" },
            { verbal_explanation: "שלב 4: צמצום השבר לשליש.", math_expression: "P = \\dfrac{1}{3}" },
            { verbal_explanation: "שלב 5: הרישום לבדיקה.", math_expression: "1/3" }
        ],
        final_answer: "1/3"
    },

    // שאלה מספר 28
    {
        topic: "probability_stats_35371",
        subTopic: "הסתברות מותנית",
        question_text: "בנתונים סטטיסטיים, ההסתברות לאירוע 1 היא 0.6. ההסתברות לאירוע 2, בהינתן ש-1 קרה, היא 0.4. מצאו את ההסתברות של החיתוך (גם 1 וגם 2 יחד).&rlm;",
        options: ["0.24", "0.66", "1.5", "0.1"],
        correctAnswer: 0,
        hint: "הכפילו את ההסתברות המותנית בהסתברות של התנאי כדי לקבל את הסתברות החיתוך.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצגת הנוסחה להסתברות מותנית בסיסית וזיהוי המשתנים.", math_expression: "0.4 = x : 0.6" },
            { verbal_explanation: "שלב 2: פעולת כפל לבידוד הנעלם אשר מייצג את החיתוך במשוואה.", math_expression: "x = 0.4 \\times 0.6" },
            { verbal_explanation: "שלב 3: ביצוע כפל שברים עשרוניים לקבלת הפתרון המדויק.", math_expression: "x = 0.24" },
            { verbal_explanation: "שלב 4: אין צורך בחישוב נוסף.", math_expression: "0.24" }
        ],
        final_answer: "0.24"
    },

    // שאלה מספר 29
    {
        topic: "probability_stats_35371",
        subTopic: "הסתברות מותנית",
        question_text: "קבוצה של 200 תיירים. 120 מהם מאירופה. 50 מהתיירים שמגיעים מאירופה דוברי צרפתית. אם נבחר באקראי תייר מבין האירופאים (ידוע שהוא מאירופה), מה ההסתברות שהוא דובר צרפתית?&rlm;",
        options: ["5/12", "50/200", "1/4", "7/12"],
        correctAnswer: 0,
        hint: "אין צורך ב-200. התנאי אומר שהמרחב שלנו הצטמצם ל-120 התיירים האירופאים בלבד.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי ההתניה. הבחירה נעשית רק מתוך קבוצת התיירים מאירופה.", math_expression: "n = 120" },
            { verbal_explanation: "שלב 2: זיהוי התת קבוצה המבוקשת מתוך מרחב זה.", math_expression: "m = 50" },
            { verbal_explanation: "שלב 3: כתיבת תרגיל החלוקה ליצירת שבר ההסתברות.", math_expression: "P = \\dfrac{50}{120}" },
            { verbal_explanation: "שלב 4: מחיקת אפסים כדי לצמצם את השבר (חלוקה בעשר).", math_expression: "P = \\dfrac{5}{12}" },
            { verbal_explanation: "שלב 5: התשובה הישירה בחלופות.", math_expression: "5/12" }
        ],
        final_answer: "5/12"
    },

    // שאלה מספר 30
    {
        topic: "probability_stats_35371",
        subTopic: "הסתברות מותנית",
        question_text: "ידוע כי הסתברות אירוע 1 היא 0.2. הסתברות החיתוך בין 1 ל-2 היא 0.1. מהי ההסתברות המותנית של אירוע 2 בהינתן אירוע 1?&rlm;",
        options: ["0.5", "2", "0.02", "0.1"],
        correctAnswer: 0,
        hint: "חלקו את החיתוך (0.1) בהסתברות של התנאי (0.2).",
        solution_steps: [
            { verbal_explanation: "שלב 1: הכנסת הנתונים לתוך נוסחת ההסתברות המותנית הכללית.", math_expression: "P = 0.1 : 0.2" },
            { verbal_explanation: "שלב 2: הכפלת המונה והמכנה בעשר להשגת מספרים שלמים וקלים לעבודה.", math_expression: "P = 1 : 2" },
            { verbal_explanation: "שלב 3: הפיכת השבר לייצוג עשרוני.", math_expression: "P = 0.5" },
            { verbal_explanation: "שלב 4: המסקנה לרישום כפלט.", math_expression: "0.5" }
        ],
        final_answer: "0.5"
    },

    // ==========================================
    // תת נושא 4: עצמאות בין אירועים (10 שאלות)
    // ==========================================

    // שאלה מספר 31
    {
        topic: "probability_stats_35371",
        subTopic: "עצמאות בין אירועים",
        question_text: "מטילים מטבע הוגן וזורקים קובייה במקביל. אירועים אלו הם בלתי תלויים. מה ההסתברות שייצא גם 'עץ' במטבע וגם '6' בקובייה באותו הזמן?&rlm;",
        options: ["1/12", "1/6", "1/2", "1/8"],
        correctAnswer: 0,
        hint: "באירועים בלתי תלויים, הסתברות החיתוך (ששניהם יקרו) שווה למכפלת ההסתברויות של כל אירוע בנפרד.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת ההסתברות למאורע המטבע.", math_expression: "P_1 = \\dfrac{1}{2}" },
            { verbal_explanation: "שלב 2: הגדרת ההסתברות למאורע הקובייה.", math_expression: "P_2 = \\dfrac{1}{6}" },
            { verbal_explanation: "שלב 3: הפעלת חוק המכפלה למאורעות שאינם תלויים זה בזה.", math_expression: "P = \\dfrac{1}{2} \\times \\dfrac{1}{6}" },
            { verbal_explanation: "שלב 4: ביצוע הכפל במונים ובמכנים לקבלת התוצאה המושלמת.", math_expression: "P = \\dfrac{1}{12}" },
            { verbal_explanation: "שלב 5: התשובה הרצויה.", math_expression: "1/12" }
        ],
        final_answer: "1/12"
    },

    // שאלה מספר 32
    {
        topic: "probability_stats_35371",
        subTopic: "עצמאות בין אירועים",
        question_text: "ידוע שאירועים 1 ו-2 הם בלתי תלויים. הסתברות 1 היא 0.3, והסתברות 2 היא 0.5. מה ההסתברות שהם יקרו יחד (החיתוך שלהם)?&rlm;",
        options: ["0.15", "0.8", "0.08", "0.2"],
        correctAnswer: 0,
        hint: "פשוט הכפילו את שתי ההסתברויות זו בזו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי תנאי העצמאות בשאלה, המאפשר כפל ישיר.", math_expression: "P = P_1 \\times P_2" },
            { verbal_explanation: "שלב 2: הצבת הערכים הנתונים.", math_expression: "P = 0.3 \\times 0.5" },
            { verbal_explanation: "שלב 3: כפל עשרוני.", math_expression: "P = 0.15" },
            { verbal_explanation: "שלב 4: זוהי ההסתברות לחיתוך המאורעות.", math_expression: "0.15" }
        ],
        final_answer: "0.15"
    },

    // שאלה מספר 33
    {
        topic: "probability_stats_35371",
        subTopic: "עצמאות בין אירועים",
        question_text: "בכד הראשון יש 2 כדורים אדומים ו-3 כחולים. בכד השני יש 4 אדומים וכדור 1 כחול. שולפים כדור אחד מכל כד. מה ההסתברות ששני הכדורים שנשלפו אדומים?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 300 200' style='max-width:350px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><path d='M 40 40 L 40 140 Q 40 180 80 180 Q 120 180 120 140 L 120 40' fill='none' stroke='#64748b' stroke-width='4'/><path d='M 180 40 L 180 140 Q 180 180 220 180 Q 260 180 260 140 L 260 40' fill='none' stroke='#64748b' stroke-width='4'/><circle cx='80' cy='150' r='10' fill='#ef4444'/><circle cx='60' cy='120' r='10' fill='#ef4444'/><circle cx='100' cy='120' r='10' fill='#3b82f6'/><circle cx='80' cy='100' r='10' fill='#3b82f6'/><circle cx='70' cy='140' r='10' fill='#3b82f6'/><circle cx='220' cy='150' r='10' fill='#ef4444'/><circle cx='200' cy='120' r='10' fill='#ef4444'/><circle cx='240' cy='120' r='10' fill='#ef4444'/><circle cx='220' cy='100' r='10' fill='#ef4444'/><circle cx='210' cy='140' r='10' fill='#3b82f6'/></svg></div>",
        options: ["8/25", "6/10", "2/25", "1/5"],
        correctAnswer: 0,
        hint: "השליפות מהכדים אינן משפיעות אחת על השנייה (עצמאיות). חשבו את ההסתברות לאדום מהכד הראשון, ולאדום מהשני, והכפילו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת ההסתברות לשליפת כדור אדום מהכד הראשון.", math_expression: "P_1 = \\dfrac{2}{5}" },
            { verbal_explanation: "שלב 2: מציאת ההסתברות לשליפת כדור אדום מהכד השני.", math_expression: "P_2 = \\dfrac{4}{5}" },
            { verbal_explanation: "שלב 3: הכפלת השברים מתוקף העצמאות של הניסויים.", math_expression: "P = \\dfrac{2}{5} \\times \\dfrac{4}{5}" },
            { verbal_explanation: "שלב 4: ביצוע פעולת הכפל.", math_expression: "P = \\dfrac{8}{25}" },
            { verbal_explanation: "שלב 5: התשובה הישירה לשאלה.", math_expression: "8/25" }
        ],
        final_answer: "8/25"
    },

    // שאלה מספר 34
    {
        topic: "probability_stats_35371",
        subTopic: "עצמאות בין אירועים",
        question_text: "אירועים 1 ו-2 עצמאיים. הסתברות החיתוך שלהם (ששניהם קורים) היא 0.12. הסתברות 1 היא 0.4. מהי ההסתברות של אירוע 2?&rlm;",
        options: ["0.3", "0.52", "0.048", "0.28"],
        correctAnswer: 0,
        hint: "על פי נוסחת העצמאות, המכפלה שלהם שווה ל-0.12. בודדו את אירוע 2.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים במשוואת החיתוך למאורעות עצמאיים.", math_expression: "0.12 = 0.4 \\times x" },
            { verbal_explanation: "שלב 2: חלוקת המשוואה בערך הקבוע לחילוץ הנעלם.", math_expression: "x = 0.12 : 0.4" },
            { verbal_explanation: "שלב 3: ביצוע פעולת החילוק.", math_expression: "x = 0.3" },
            { verbal_explanation: "שלב 4: התוצאה למאורע החסר נמצאה.", math_expression: "0.3" }
        ],
        final_answer: "0.3"
    },

    // שאלה מספר 35
    {
        topic: "probability_stats_35371",
        subTopic: "עצמאות בין אירועים",
        question_text: "שני קלעים יורים למטרה באופן בלתי תלוי זה בזה. הקלע הראשון פוגע בהסתברות 0.7, והקלע השני בהסתברות 0.8. שניהם יורים ירייה אחת. מה ההסתברות ששניהם יחטיאו?&rlm;",
        options: ["0.06", "0.14", "0.24", "0.56"],
        correctAnswer: 0,
        hint: "חשבו תחילה את ההסתברות שכל אחד מהם יחטיא בנפרד (על ידי חיסור מ-1), ואז הכפילו את התוצאות אלו בזו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב המאורע המשלים לקלע הראשון (הסתברות להחטאה).", math_expression: "x = 1 - 0.7 = 0.3" },
            { verbal_explanation: "שלב 2: חישוב המאורע המשלים לקלע השני.", math_expression: "y = 1 - 0.8 = 0.2" },
            { verbal_explanation: "שלב 3: כפל מאורעות ההחטאה מתוקף אי התלות.", math_expression: "P = 0.3 \\times 0.2" },
            { verbal_explanation: "שלב 4: תוצאת הכפל מייצגת החטאה כפולה בו זמנית.", math_expression: "P = 0.06" },
            { verbal_explanation: "שלב 5: הרישום לבדיקה.", math_expression: "0.06" }
        ],
        final_answer: "0.06"
    },

    // שאלה מספר 36
    {
        topic: "probability_stats_35371",
        subTopic: "עצמאות בין אירועים",
        question_text: "באותו מצב קודם (קלע א' פוגע ב-0.7, קלע ב' פוגע ב-0.8), מה ההסתברות שבדיוק אחד מהם יפגע במטרה?&rlm;",
        options: ["0.38", "0.56", "0.94", "0.14"],
        correctAnswer: 0,
        hint: "חברו שתי אופציות נפרדות: קלע א' פוגע וקלע ב' מחטיא, פלוס קלע א' מחטיא וקלע ב' פוגע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב המסלול הראשון (הראשון פוגע והשני מחטיא).", math_expression: "P_1 = 0.7 \\times 0.2 = 0.14" },
            { verbal_explanation: "שלב 2: חישוב המסלול השני (הראשון מחטיא והשני פוגע).", math_expression: "P_2 = 0.3 \\times 0.8 = 0.24" },
            { verbal_explanation: "שלב 3: חיבור ההסתברויות משום ששתי האפשרויות עונות לתנאי.", math_expression: "P = 0.14 + 0.24" },
            { verbal_explanation: "שלב 4: תוצאת פעולת החיבור העשרונית.", math_expression: "P = 0.38" },
            { verbal_explanation: "שלב 5: הבחירה באפשרות התואמת.", math_expression: "0.38" }
        ],
        final_answer: "0.38"
    },

    // שאלה מספר 37
    {
        topic: "probability_stats_35371",
        subTopic: "עצמאות בין אירועים",
        question_text: "הסתברות א' היא 0.5, הסתברות ב' היא 0.4. נתון בנוסף שהסתברות החיתוך (גם וגם) היא 0.2. לאור נתונים אלו, האם האירועים תלויים או עצמאיים (בלתי תלויים)?&rlm;",
        options: ["כן, עצמאיים", "תלויים", "לא ניתן לדעת", "תלויים וזרים"],
        correctAnswer: 0,
        hint: "אירועים הם עצמאיים אך ורק אם מכפלת ההסתברויות שלהם שווה במדויק להסתברות החיתוך שלהם.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים בפונקציית המבחן למאורעות בלתי תלויים.", math_expression: "0.5 \\times 0.4 = 0.2" },
            { verbal_explanation: "שלב 2: ביצוע הכפל בצד אחד לבדיקת הפסוק.", math_expression: "0.2 = 0.2" },
            { verbal_explanation: "שלב 3: הפסוק הוא אמת גמורה, ולכן התנאי מתקיים.", math_expression: "1 = 1" },
            { verbal_explanation: "שלב 4: בחירת התשובה הנכונה לעניין זה.", math_expression: "1" }
        ],
        final_answer: "כן, עצמאיים"
    },

    // שאלה מספר 38
    {
        topic: "probability_stats_35371",
        subTopic: "עצמאות בין אירועים",
        question_text: "במערכת מותקנים שני אזעקות בלתי תלויות הפועלות במקביל. האזעקה הראשונה תפעל בזמן אמת בסיכוי 0.9. השנייה בסיכוי 0.8. מה ההסתברות שלפחות אזעקה אחת תפעל בזמן חירום?&rlm;",
        options: ["0.98", "0.72", "0.1", "0.9"],
        correctAnswer: 0,
        hint: "הדרך הקצרה ביותר היא לחשב את המאורע ההפוך לחלוטין (שאף אזעקה לא תפעל), ולחסר את התוצאה מ-1.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב סיכוי הכישלון (אי הפעלה) של המערכת הראשונה.", math_expression: "x = 1 - 0.9 = 0.1" },
            { verbal_explanation: "שלב 2: חישוב סיכוי הכישלון של המערכת השנייה.", math_expression: "y = 1 - 0.8 = 0.2" },
            { verbal_explanation: "שלב 3: כפל ההסתברויות למציאת הסיכוי למקרה הקטסטרופלי בו שתיהן כושלות.", math_expression: "m = 0.1 \\times 0.2 = 0.02" },
            { verbal_explanation: "שלב 4: שימוש במאורע משלים כדי למצוא את ההסתברות ש'לפחות אחת תפעל'.", math_expression: "P = 1 - 0.02" },
            { verbal_explanation: "שלב 5: חישוב החיסור לקבלת רמת הביטחון.", math_expression: "P = 0.98" },
            { verbal_explanation: "שלב 6: הרישום לבדיקה.", math_expression: "0.98" }
        ],
        final_answer: "0.98"
    },

    // שאלה מספר 39
    {
        topic: "probability_stats_35371",
        subTopic: "עצמאות בין אירועים",
        question_text: "מזג האוויר בעיר א' אינו תלוי במזג האוויר בעיר ב'. ההסתברות לגשם בעיר א' היא 0.2. ההסתברות לגשם בעיר ב' היא 0.3. מה ההסתברות שירד גשם בעיר א', אך לא ירד גשם בעיר ב'?&rlm;",
        options: ["0.14", "0.06", "0.5", "0.2"],
        correctAnswer: 0,
        hint: "הכפילו את ההסתברות לגשם בעיר א', בהסתברות להעדר גשם (המשלים) בעיר ב'.",
        solution_steps: [
            { verbal_explanation: "שלב 1: ציון ההסתברות הרלוונטית לעיר הראשונה.", math_expression: "P_1 = 0.2" },
            { verbal_explanation: "שלב 2: חישוב ההסתברות למאורע המשלים (ללא גשם) בעיר השנייה.", math_expression: "P_2 = 1 - 0.3 = 0.7" },
            { verbal_explanation: "שלב 3: כפל ההסתברויות כדי ליצור את המאורע המשולב המבוקש.", math_expression: "P = 0.2 \\times 0.7" },
            { verbal_explanation: "שלב 4: ביצוע המכפלה העשרונית להשגת התוצאה.", math_expression: "P = 0.14" },
            { verbal_explanation: "שלב 5: התשובה הישירה הנבחרת.", math_expression: "0.14" }
        ],
        final_answer: "0.14"
    },

    // שאלה מספר 40
    {
        topic: "probability_stats_35371",
        subTopic: "עצמאות בין אירועים",
        question_text: "מטילים קוביית משחק פעמיים ברציפות (הטלות בלתי תלויות). מה ההסתברות שבהטלה הראשונה יצא 5, וגם בהטלה השנייה יצא 5?&rlm;",
        options: ["1/36", "2/6", "1/12", "1/6"],
        correctAnswer: 0,
        hint: "מה ההסתברות ל-5 בהטלה אחת? הכפילו את המספר בעצמו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת ההסתברות למספר המסוים בהטלה הראשונה.", math_expression: "P_1 = \\dfrac{1}{6}" },
            { verbal_explanation: "שלב 2: הגדרת ההסתברות לאותו מספר בהטלה השנייה.", math_expression: "P_2 = \\dfrac{1}{6}" },
            { verbal_explanation: "שלב 3: הכפלת שני המאורעות כדי לדייק ברצף הדרוש.", math_expression: "P = \\dfrac{1}{6} \\times \\dfrac{1}{6}" },
            { verbal_explanation: "שלב 4: ביצוע הכפל במכנים כדי למצוא את ההסתברות המשותפת.", math_expression: "P = \\dfrac{1}{36}" },
            { verbal_explanation: "שלב 5: התשובה הדרושה כחלק מאפשרויות השברים.", math_expression: "1/36" }
        ],
        final_answer: "1/36"
    },
    // ==========================================
    // תת נושא 5: עץ הסתברות (10 שאלות)
    // ==========================================

    // שאלה מספר 1
    {
        topic: "probability_stats_35371",
        subTopic: "עץ הסתברות",
        question_text: "בכד יש 3 כדורים לבנים ו-2 כדורים שחורים. מוציאים באקראי כדור אחד, מסתכלים על צבעו ומחזירים אותו לכד. לאחר מכן מוציאים כדור שני. מה ההסתברות ששני הכדורים שהוצאו הם לבנים?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><path d='M 40 40 L 40 140 Q 40 180 100 180 Q 160 180 160 140 L 160 40' fill='none' stroke='#64748b' stroke-width='4'/><circle cx='80' cy='150' r='12' fill='#fff' stroke='#000' stroke-width='1'/><circle cx='120' cy='150' r='12' fill='#fff' stroke='#000' stroke-width='1'/><circle cx='100' cy='120' r='12' fill='#fff' stroke='#000' stroke-width='1'/><circle cx='70' cy='110' r='12' fill='#000'/><circle cx='130' cy='110' r='12' fill='#000'/></svg></div>",
        options: ["9/25", "6/25", "3/5", "6/20"],
        correctAnswer: 0,
        hint: "בנו עץ הסתברויות. מאחר והכדור מוחזר, ההסתברות נשארת זהה בשתי ההוצאות. הכפילו את ההסתברויות לאורך הענף הלבן.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת כמות הכדורים הכללית בכד.", math_expression: "n = 3 + 2 = 5" },
            { verbal_explanation: "שלב 2: קביעת ההסתברות להוצאת כדור לבן בהוצאה הראשונה.", math_expression: "P_1 = \\dfrac{3}{5}" },
            { verbal_explanation: "שלב 3: קביעת ההסתברות להוצאת כדור לבן בהוצאה השנייה (ההסתברות נשמרת כי יש החזרה).", math_expression: "P_2 = \\dfrac{3}{5}" },
            { verbal_explanation: "שלב 4: שימוש בחוק המכפלה למסלול בעץ ההסתברויות.", math_expression: "P = \\dfrac{3}{5} \\times \\dfrac{3}{5}" },
            { verbal_explanation: "שלב 5: ביצוע פעולת הכפל.", math_expression: "P = \\dfrac{9}{25}" },
            { verbal_explanation: "שלב 6: הרישום לבחירה.", math_expression: "9/25" }
        ],
        final_answer: "9/25"
    },

    // שאלה מספר 2
    {
        topic: "probability_stats_35371",
        subTopic: "עץ הסתברות",
        question_text: "באותו כד (3 כדורים לבנים ו-2 שחורים) מוציאים כדור אחד, אך הפעם לא מחזירים אותו. לאחר מכן מוציאים כדור שני. מה ההסתברות ששני הכדורים שהוצאו הם לבנים?&rlm;",
        options: ["3/10", "9/25", "6/25", "1/2"],
        correctAnswer: 0,
        hint: "ללא החזרה, כמות הכדורים הכללית וכמות הכדורים הלבנים קטנה באחד לקראת ההוצאה השנייה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: ההסתברות להוצאת כדור לבן ראשון נשארת זהה.", math_expression: "P_1 = \\dfrac{3}{5}" },
            { verbal_explanation: "שלב 2: עדכון כמות הכדורים בכד לאחר הוצאת כדור לבן.", math_expression: "n = 5 - 1 = 4" },
            { verbal_explanation: "שלב 3: עדכון כמות הכדורים הלבנים שנותרו.", math_expression: "m = 3 - 1 = 2" },
            { verbal_explanation: "שלב 4: ההסתברות להוצאת כדור לבן בהוצאה השנייה.", math_expression: "P_2 = \\dfrac{2}{4} = \\dfrac{1}{2}" },
            { verbal_explanation: "שלב 5: הכפלת ההסתברויות לאורך ענף העץ.", math_expression: "P = \\dfrac{3}{5} \\times \\dfrac{1}{2}" },
            { verbal_explanation: "שלב 6: ביצוע הכפל לקבלת ההסתברות הסופית.", math_expression: "P = \\dfrac{3}{10}" }
        ],
        final_answer: "3/10"
    },

    // שאלה מספר 3
    {
        topic: "probability_stats_35371",
        subTopic: "עץ הסתברות",
        question_text: "מפעל מייצר נורות. ההסתברות שנורה תהיה תקינה היא 0.8. בוחרים באקראי 2 נורות. מה ההסתברות ששתיהן תקינות?&rlm;",
        options: ["0.64", "0.8", "1.6", "0.16"],
        correctAnswer: 0,
        hint: "הנורות בלתי תלויות זו בזו. הכפילו את ההסתברות בעצמה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת ההסתברות לנורה תקינה בודדת.", math_expression: "P_1 = 0.8" },
            { verbal_explanation: "שלב 2: הגדרת ההסתברות לנורה תקינה שנייה.", math_expression: "P_2 = 0.8" },
            { verbal_explanation: "שלב 3: הרכבת המכפלה לאורך הענף.", math_expression: "P = 0.8 \\times 0.8" },
            { verbal_explanation: "שלב 4: ביצוע פעולת הכפל העשרוני.", math_expression: "P = 0.64" },
            { verbal_explanation: "שלב 5: התשובה הישירה בחלופות.", math_expression: "0.64" }
        ],
        final_answer: "0.64"
    },

    // שאלה מספר 4
    {
        topic: "probability_stats_35371",
        subTopic: "עץ הסתברות",
        question_text: "תלמיד ניגש לשני מבחנים. ההסתברות שיעבור את המבחן הראשון היא 0.6. אם עבר את הראשון, ההסתברות שיעבור את השני היא 0.9. אם נכשל בראשון, ההסתברות שיעבור את השני יורדת ל-0.4. מה ההסתברות שיעבור את שני המבחנים בהצלחה?&rlm;",
        options: ["0.54", "0.6", "0.9", "0.24"],
        correctAnswer: 0,
        hint: "יש לעקוב אחר הענף המייצג מעבר בראשון ולאחריו מעבר בשני. ההסתברות השנייה מותנית בראשונה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי ההסתברות למעבר המבחן הראשון.", math_expression: "P_1 = 0.6" },
            { verbal_explanation: "שלב 2: זיהוי ההסתברות המותנית למעבר המבחן השני.", math_expression: "P_2 = 0.9" },
            { verbal_explanation: "שלב 3: כתיבת פעולת הכפל לאורך הענף המבוקש בעץ.", math_expression: "P = 0.6 \\times 0.9" },
            { verbal_explanation: "שלב 4: ביצוע הכפל.", math_expression: "P = 0.54" },
            { verbal_explanation: "שלב 5: התוצאה המסכמת.", math_expression: "0.54" }
        ],
        final_answer: "0.54"
    },

    // שאלה מספר 5
    {
        topic: "probability_stats_35371",
        subTopic: "עץ הסתברות",
        question_text: "בהמשך לשאלה הקודמת. מה ההסתברות שהתלמיד ייכשל בשני המבחנים?&rlm;",
        options: ["0.24", "0.16", "0.4", "0.36"],
        correctAnswer: 0,
        hint: "חשבו את ההסתברות שייכשל בראשון (המשלים של 0.6). לאחר מכן חשבו את ההסתברות שייכשל בשני תחת התנאי הזה (המשלים של 0.4).",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת ההסתברות לכישלון במבחן הראשון.", math_expression: "P_1 = 1 - 0.6 = 0.4" },
            { verbal_explanation: "שלב 2: מציאת ההסתברות לכישלון במבחן השני בהינתן כישלון בראשון.", math_expression: "P_2 = 1 - 0.4 = 0.6" },
            { verbal_explanation: "שלב 3: הכפלת ההסתברויות לאורך ענף הכישלונות בעץ.", math_expression: "P = 0.4 \\times 0.6" },
            { verbal_explanation: "שלב 4: ביצוע פעולת הכפל.", math_expression: "P = 0.24" },
            { verbal_explanation: "שלב 5: התשובה.", math_expression: "0.24" }
        ],
        final_answer: "0.24"
    },

    // שאלה מספר 6
    {
        topic: "probability_stats_35371",
        subTopic: "עץ הסתברות",
        question_text: "שני רמזורים פועלים באופן בלתי תלוי. הרמזור הראשון ירוק בהסתברות של 0.5, והרמזור השני ירוק בהסתברות של 0.6. מה ההסתברות שנהג יפגוש רמזור אדום בשני הרמזורים?&rlm;",
        options: ["0.2", "0.3", "0.5", "0.8"],
        correctAnswer: 0,
        hint: "חשבו את ההסתברות לרמזור אדום בכל אחד מהצמתים, ואז הכפילו את התוצאות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב המאורע המשלים (אדום) ברמזור הראשון.", math_expression: "P_1 = 1 - 0.5 = 0.5" },
            { verbal_explanation: "שלב 2: חישוב המאורע המשלים (אדום) ברמזור השני.", math_expression: "P_2 = 1 - 0.6 = 0.4" },
            { verbal_explanation: "שלב 3: הפעלת חוק המכפלה למאורעות בלתי תלויים.", math_expression: "P = 0.5 \\times 0.4" },
            { verbal_explanation: "שלב 4: תוצאת הכפל.", math_expression: "P = 0.2" },
            { verbal_explanation: "שלב 5: הרישום לבדיקה.", math_expression: "0.2" }
        ],
        final_answer: "0.2"
    },

    // שאלה מספר 7
    {
        topic: "probability_stats_35371",
        subTopic: "עץ הסתברות",
        question_text: "במשחק סביבון יש 4 גזרות שוות. מסובבים את הסביבון פעמיים. מה ההסתברות שהסביבון ייפול על אותה אות בשתי הפעמים?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:200px; width:100%; border-radius:50%; background:#f8fafc; border:1px solid #e2e8f0;'><circle cx='100' cy='100' r='90' fill='none' stroke='#f59e0b' stroke-width='4'/><line x1='100' y1='10' x2='100' y2='190' stroke='#f59e0b' stroke-width='2'/><line x1='10' y1='100' x2='190' y2='100' stroke='#f59e0b' stroke-width='2'/><polygon points='100,100 120,40 90,40' fill='#ef4444'/></svg></div>",
        options: ["1/4", "1/16", "1/8", "1/2"],
        correctAnswer: 0,
        hint: "הסיבוב הראשון לא משנה איזו אות תצא (הסתברות 1). בסיבוב השני צריך לצאת בדיוק מה שיצא בראשון (הסתברות 1/4).",
        solution_steps: [
            { verbal_explanation: "שלב 1: ההסתברות לסיבוב הראשון היא ודאית כי כל תוצאה מקובלת כבסיס להשוואה.", math_expression: "P_1 = 1" },
            { verbal_explanation: "שלב 2: ההסתברות שהסיבוב השני יהיה זהה לראשון היא אחת מתוך ארבע גזרות.", math_expression: "P_2 = \\dfrac{1}{4}" },
            { verbal_explanation: "שלב 3: בניית פעולת הכפל לאורך העץ המופשט.", math_expression: "P = 1 \\times \\dfrac{1}{4}" },
            { verbal_explanation: "שלב 4: ביצוע כפל.", math_expression: "P = \\dfrac{1}{4}" },
            { verbal_explanation: "שלב 5: התשובה.", math_expression: "1/4" }
        ],
        final_answer: "1/4"
    },

    // שאלה מספר 8
    {
        topic: "probability_stats_35371",
        subTopic: "עץ הסתברות",
        question_text: "קבוצת כדורסל מנצחת במשחק בסיכוי של 0.6 ומפסידה בסיכוי 0.4. היא משחקת שלושה משחקים ברצף. מה ההסתברות שתנצח בכל שלושת המשחקים?&rlm;",
        options: ["0.216", "1.8", "0.6", "0.12"],
        correctAnswer: 0,
        hint: "זהו עץ עם שלוש רמות. יש להכפיל את הסתברות הניצחון בעצמה שלוש פעמים ברציפות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתון להסתברות ניצחון בודד.", math_expression: "P_1 = 0.6" },
            { verbal_explanation: "שלב 2: בניית המכפלה לאורך שלושת ענפי העץ.", math_expression: "P = 0.6 \\times 0.6 \\times 0.6" },
            { verbal_explanation: "שלב 3: כפל שני האיברים הראשונים.", math_expression: "P = 0.36 \\times 0.6" },
            { verbal_explanation: "שלב 4: ביצוע הכפל השלישי.", math_expression: "P = 0.216" },
            { verbal_explanation: "שלב 5: קבלת התוצאה למאורע המשולב.", math_expression: "0.216" }
        ],
        final_answer: "0.216"
    },

    // שאלה מספר 9
    {
        topic: "probability_stats_35371",
        subTopic: "עץ הסתברות",
        question_text: "בכד יש 4 כדורים צהובים ו-6 כדורים אדומים. מוציאים כדור אחד ללא החזרה, ואז עוד אחד. מה ההסתברות ששני הכדורים הם בצבעים שונים?&rlm;",
        options: ["48/90", "24/90", "24/100", "48/100"],
        correctAnswer: 0,
        hint: "צבעים שונים משמעותם 'צהוב ואז אדום' או 'אדום ואז צהוב'. חשבו את שני המסלולים הללו בעץ וחברו אותם.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב המסלול הראשון - צהוב ואז אדום ללא החזרה.", math_expression: "P_1 = \\dfrac{4}{10} \\times \\dfrac{6}{9} = \\dfrac{24}{90}" },
            { verbal_explanation: "שלב 2: חישוב המסלול השני - אדום ואז צהוב ללא החזרה.", math_expression: "P_2 = \\dfrac{6}{10} \\times \\dfrac{4}{9} = \\dfrac{24}{90}" },
            { verbal_explanation: "שלב 3: חיבור ההסתברויות של שני המסלולים.", math_expression: "P = \\dfrac{24}{90} + \\dfrac{24}{90}" },
            { verbal_explanation: "שלב 4: סכימת המונים ליצירת השבר הסופי.", math_expression: "P = \\dfrac{48}{90}" },
            { verbal_explanation: "שלב 5: התשובה לפי האפשרויות המוצגות.", math_expression: "48/90" }
        ],
        final_answer: "48/90"
    },

    // שאלה מספר 10
    {
        topic: "probability_stats_35371",
        subTopic: "עץ הסתברות",
        question_text: "תחזית למחר: ההסתברות שיירד גשם היא 0.2. אם יירד גשם, ההסתברות שיווצר פקק תנועה היא 0.9. אם לא יירד גשם, ההסתברות לפקק היא 0.3. מה ההסתברות שיהיה מחר פקק תנועה?&rlm;",
        options: ["0.42", "0.9", "0.24", "0.18"],
        correctAnswer: 0,
        hint: "נוסחת ההסתברות השלמה דרך עץ. חשבו את שני המסלולים שמובילים לפקק (גשם+פקק, ולא-גשם+פקק) וחברו אותם.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב המסלול הראשון - גשם ובעקבותיו פקק.", math_expression: "P_1 = 0.2 \\times 0.9 = 0.18" },
            { verbal_explanation: "שלב 2: חישוב ההסתברות שלא יירד גשם.", math_expression: "x = 1 - 0.2 = 0.8" },
            { verbal_explanation: "שלב 3: חישוב המסלול השני - אין גשם ובכל זאת יש פקק.", math_expression: "P_2 = 0.8 \\times 0.3 = 0.24" },
            { verbal_explanation: "שלב 4: חיבור ההסתברויות של שני המסלולים.", math_expression: "P = 0.18 + 0.24" },
            { verbal_explanation: "שלב 5: סכימה פשוטה.", math_expression: "P = 0.42" },
            { verbal_explanation: "שלב 6: המסקנה לרישום במערכת.", math_expression: "0.42" }
        ],
        final_answer: "0.42"
    },

    // ==========================================
    // תת נושא 6: תרגול חישובי הסתברות (10 שאלות)
    // ==========================================

    // שאלה מספר 11
    {
        topic: "probability_stats_35371",
        subTopic: "תרגול חישובי הסתברות",
        question_text: "בטבלה דו-ממדית מוצגים נתונים על תלמידי כיתה: ישנם 20 בנים ו-30 בנות. 5 מהבנים מרכיבים משקפיים, ו-10 מהבנות מרכיבות משקפיים. בוחרים תלמיד באקראי. מה ההסתברות לבחור בן שמרכיב משקפיים?&rlm;",
        options: ["1/10", "1/4", "5/20", "1/6"],
        correctAnswer: 0,
        hint: "חברו את כל התלמידים בכיתה כדי לקבל את המכנה. המונה הוא כמות הבנים עם המשקפיים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב סך כל התלמידים בכיתה.", math_expression: "n = 20 + 30 = 50" },
            { verbal_explanation: "שלב 2: קריאת הנתון הרלוונטי בטבלה.", math_expression: "m = 5" },
            { verbal_explanation: "שלב 3: הרכבת שבר ההסתברות הבסיסי.", math_expression: "P = \\dfrac{5}{50}" },
            { verbal_explanation: "שלב 4: צמצום השבר על ידי חלוקת המונה והמכנה בחמש.", math_expression: "P = \\dfrac{1}{10}" },
            { verbal_explanation: "שלב 5: התשובה הישירה בחלופות.", math_expression: "1/10" }
        ],
        final_answer: "1/10"
    },

    // שאלה מספר 12
    {
        topic: "probability_stats_35371",
        subTopic: "תרגול חישובי הסתברות",
        question_text: "בהמשך לשאלה הקודמת (20 בנים, 30 בנות. 5 בנים עם משקפיים, 10 בנות עם משקפיים). בחרו תלמיד והתברר שהוא מרכיב משקפיים. מה ההסתברות שהתלמיד הוא בן?&rlm;",
        options: ["1/3", "1/4", "5/50", "1/2"],
        correctAnswer: 0,
        hint: "זוהי הסתברות מותנית. מכיוון שידוע שהתלמיד מרכיב משקפיים, המכנה הצטמצם רק לכלל התלמידים עם משקפיים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב המכנה החדש על סמך התנאי המוקדם.", math_expression: "n = 5 + 10 = 15" },
            { verbal_explanation: "שלב 2: זיהוי מספר הבנים מתוך קבוצה זו.", math_expression: "m = 5" },
            { verbal_explanation: "שלב 3: כתיבת תרגיל ההסתברות המותנית.", math_expression: "P = \\dfrac{5}{15}" },
            { verbal_explanation: "שלב 4: צמצום השבר על ידי חלוקה בחמש.", math_expression: "P = \\dfrac{1}{3}" },
            { verbal_explanation: "שלב 5: הפתרון כפי שיוזן.", math_expression: "1/3" }
        ],
        final_answer: "1/3"
    },

    // שאלה מספר 13
    {
        topic: "probability_stats_35371",
        subTopic: "תרגול חישובי הסתברות",
        question_text: "מטילים קוביית משחק הוגנת פעם אחת. מה ההסתברות שיתקבל מספר הגדול מ-4?&rlm;",
        options: ["1/3", "1/2", "2/5", "1/6"],
        correctAnswer: 0,
        hint: "המספרים שגדולים מ-4 בקובייה הם רק 5 ו-6.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת מספר הפאות בקובייה.", math_expression: "n = 6" },
            { verbal_explanation: "שלב 2: ספירת המספרים העונים לתנאי.", math_expression: "m = 2" },
            { verbal_explanation: "שלב 3: הרכבת השבר למאורע.", math_expression: "P = \\dfrac{2}{6}" },
            { verbal_explanation: "שלב 4: צמצום השבר לשליש.", math_expression: "P = \\dfrac{1}{3}" },
            { verbal_explanation: "שלב 5: הרישום לבדיקה.", math_expression: "1/3" }
        ],
        final_answer: "1/3"
    },

    // שאלה מספר 14
    {
        topic: "probability_stats_35371",
        subTopic: "תרגול חישובי הסתברות",
        question_text: "זורקים שתי קוביות הוגנות. מה ההסתברות שסכום המספרים בשתי הקוביות יהיה בדיוק 7?&rlm;",
        options: ["1/6", "7/36", "1/12", "1/36"],
        correctAnswer: 0,
        hint: "מנו את הזוגות המניבים 7: (1,6), (2,5), (3,4) וגם ההפוכים להם. חלקו ב-36.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב מספר האפשרויות במרחב הדו-ממדי.", math_expression: "n = 6 \\times 6 = 36" },
            { verbal_explanation: "שלב 2: איתור הזוגות שסכומם שבע.", math_expression: "(1,6) , (6,1) , (2,5) , (5,2) , (3,4) , (4,3)" },
            { verbal_explanation: "שלב 3: ספירת הזוגות הללו.", math_expression: "m = 6" },
            { verbal_explanation: "שלב 4: הרכבת השבר וצמצומו.", math_expression: "P = \\dfrac{6}{36} = \\dfrac{1}{6}" },
            { verbal_explanation: "שלב 5: התשובה הישירה בחלופות.", math_expression: "1/6" }
        ],
        final_answer: "1/6"
    },

    // שאלה מספר 15
    {
        topic: "probability_stats_35371",
        subTopic: "תרגול חישובי הסתברות",
        question_text: "זורקים שתי קוביות הוגנות. מה ההסתברות לקבל 'דאבל' (אותו מספר בשתי הקוביות)?&rlm;",
        options: ["1/6", "1/36", "1/12", "1/18"],
        correctAnswer: 0,
        hint: "ישנם 6 זוגות שבהם המספרים זהים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת מרחב המדגם לשתי קוביות.", math_expression: "n = 36" },
            { verbal_explanation: "שלב 2: איתור קבוצת תוצאות הדאבל.", math_expression: "(1,1) , (2,2) , (3,3) , (4,4) , (5,5) , (6,6)" },
            { verbal_explanation: "שלב 3: ספירת התוצאות הללו.", math_expression: "m = 6" },
            { verbal_explanation: "שלב 4: הצבה בשבר ההסתברות וביצוע צמצום.", math_expression: "P = \\dfrac{6}{36} = \\dfrac{1}{6}" },
            { verbal_explanation: "שלב 5: סיום התרגיל.", math_expression: "1/6" }
        ],
        final_answer: "1/6"
    },

    // שאלה מספר 16
    {
        topic: "probability_stats_35371",
        subTopic: "תרגול חישובי הסתברות",
        question_text: "בכד יש 5 כדורים כחולים ו-5 כדורים אדומים. מוציאים כדור, מחזירים אותו, ומוציאים כדור נוסף. מה ההסתברות שלפחות כדור אחד מבין השניים שהוצאו יהיה אדום?&rlm;",
        options: ["3/4", "1/4", "1/2", "1"],
        correctAnswer: 0,
        hint: "הכי קל לחשב את המאורע המשלים: 'שני כחולים ברצף', ואז לחסר אותו מ-1.",
        solution_steps: [
            { verbal_explanation: "שלב 1: קביעת ההסתברות להוצאת כדור כחול בודד.", math_expression: "P_1 = \\dfrac{5}{10} = \\dfrac{1}{2}" },
            { verbal_explanation: "שלב 2: חישוב המסלול של שני כחולים (המאורע המשלים).", math_expression: "x = \\dfrac{1}{2} \\times \\dfrac{1}{2} = \\dfrac{1}{4}" },
            { verbal_explanation: "שלב 3: שימוש בכלל המאורע המשלים.", math_expression: "P = 1 - \\dfrac{1}{4}" },
            { verbal_explanation: "שלב 4: ביצוע החיסור משלם אחד.", math_expression: "P = \\dfrac{3}{4}" },
            { verbal_explanation: "שלב 5: התשובה הדרושה.", math_expression: "3/4" }
        ],
        final_answer: "3/4"
    },

    // שאלה מספר 17
    {
        topic: "probability_stats_35371",
        subTopic: "תרגול חישובי הסתברות",
        question_text: "בחפיסת קלפים סטנדרטית (52 קלפים) יש 4 קלפי מלך ו-4 קלפי מלכה. שולפים קלף אחד באקראי. מה ההסתברות שהקלף שנשלף הוא מלך או מלכה?&rlm;",
        options: ["2/13", "1/13", "4/13", "1/26"],
        correctAnswer: 0,
        hint: "סכמו את מספר הקלפים הרצויים וחלקו בסך החפיסה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: סכימת כמות הקלפים המקיימים את התנאי הרצוי.", math_expression: "m = 4 + 4 = 8" },
            { verbal_explanation: "שלב 2: הגדרת כמות הקלפים הכוללת בחפיסה.", math_expression: "n = 52" },
            { verbal_explanation: "שלב 3: הרכבת שבר ההסתברות.", math_expression: "P = \\dfrac{8}{52}" },
            { verbal_explanation: "שלב 4: צמצום השבר על ידי חלוקה בארבע.", math_expression: "P = \\dfrac{2}{13}" },
            { verbal_explanation: "שלב 5: התוצאה לרישום במערכת.", math_expression: "2/13" }
        ],
        final_answer: "2/13"
    },

    // שאלה מספר 18
    {
        topic: "probability_stats_35371",
        subTopic: "תרגול חישובי הסתברות",
        question_text: "נתונים שני מאורעות בלתי תלויים. ההסתברות לראשון היא 0.4 ולהסתברות לשני היא 0.5. חשבו את ההסתברות ששניהם יקרו יחד.&rlm;",
        options: ["0.2", "0.9", "0.1", "0.45"],
        correctAnswer: 0,
        hint: "הכפילו את ההסתברויות של המאורעות הבלתי תלויים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: רישום הכלל המתמטי לחיתוך מאורעות בלתי תלויים.", math_expression: "P = x \\times y" },
            { verbal_explanation: "שלב 2: הצבת הנתונים מהשאלה.", math_expression: "P = 0.4 \\times 0.5" },
            { verbal_explanation: "שלב 3: ביצוע פעולת הכפל العשרוני.", math_expression: "P = 0.2" },
            { verbal_explanation: "שלב 4: המסקנה הישירה.", math_expression: "0.2" }
        ],
        final_answer: "0.2"
    },

    // שאלה מספר 19
    {
        topic: "probability_stats_35371",
        subTopic: "תרגול חישובי הסתברות",
        question_text: "בהמשך לשאלה הקודמת (0.4 ו-0.5, בלתי תלויים). מהי ההסתברות לאיחוד של שני המאורעות הללו (לפחות אחד יקרה)?&rlm;",
        options: ["0.7", "0.9", "0.5", "0.2"],
        correctAnswer: 0,
        hint: "נוסחת האיחוד היא חיבור ההסתברויות פחות ההסתברות של החיתוך (שחישבתם מקודם כ-0.2).",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצגת הנוסחה הכללית לאיחוד.", math_expression: "P = x + y - z" },
            { verbal_explanation: "שלב 2: הצבת ההסתברויות הבסיסיות ותוצאת החיתוך.", math_expression: "P = 0.4 + 0.5 - 0.2" },
            { verbal_explanation: "שלב 3: סכימת שני האיברים הראשונים.", math_expression: "P = 0.9 - 0.2" },
            { verbal_explanation: "שלב 4: ביצוע החיסור למציאת האיחוד.", math_expression: "P = 0.7" },
            { verbal_explanation: "שלב 5: התשובה הישירה.", math_expression: "0.7" }
        ],
        final_answer: "0.7"
    },

    // שאלה מספר 20
    {
        topic: "probability_stats_35371",
        subTopic: "תרגול חישובי הסתברות",
        question_text: "ההסתברות שקבוצת כדורגל תנצח במשחק היא 0.25. ההסתברות לתיקו היא 0. מהי ההסתברות שהקבוצה תפסיד?&rlm;",
        options: ["0.75", "0.25", "1", "0.5"],
        correctAnswer: 0,
        hint: "הפסד הוא המאורע המשלים לניצחון במקרה זה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הבנת המצב שבו קיימים רק שני מאורעות אפשריים ומשלימים.", math_expression: "x + y = 1" },
            { verbal_explanation: "שלב 2: הצבת נתון הניצחון במשוואה.", math_expression: "0.25 + y = 1" },
            { verbal_explanation: "שלב 3: העברת אגף בחיסור.", math_expression: "y = 1 - 0.25" },
            { verbal_explanation: "שלב 4: פתרון משוואת החיסור.", math_expression: "y = 0.75" },
            { verbal_explanation: "שלב 5: קבלת התשובה.", math_expression: "0.75" }
        ],
        final_answer: "0.75"
    },

    // ==========================================
    // תת נושא 7: מדדי מרכז (ממוצע, חציון, שכיח) (10 שאלות)
    // ==========================================

    // שאלה מספר 21
    {
        topic: "probability_stats_35371",
        subTopic: "מדדי מרכז (ממוצע, חציון, שכיח)",
        question_text: "חשבו את הממוצע של קבוצת הציונים הבאה: 70, 80, 90, 100.&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 250 100' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><rect x='30' y='50' width='30' height='30' fill='#8b5cf6'/><rect x='80' y='40' width='30' height='40' fill='#8b5cf6'/><rect x='130' y='30' width='30' height='50' fill='#8b5cf6'/><rect x='180' y='20' width='30' height='60' fill='#8b5cf6'/><line x1='10' y1='80' x2='240' y2='80' stroke='#64748b' stroke-width='2'/></svg></div>",
        options: ["85", "80", "90", "75"],
        correctAnswer: 0,
        hint: "הממוצע מחושב על ידי חיבור כל הנתונים וחלוקת הסכום במספר הנתונים הכולל (4).",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים בנוסחת הממוצע החשבוני.", math_expression: "\\bar{x} = \\dfrac{70 + 80 + 90 + 100}{4}" },
            { verbal_explanation: "שלב 2: סכימת המספרים במונה.", math_expression: "x = 340" },
            { verbal_explanation: "שלב 3: כתיבת השבר במלואו לפני חילוק.", math_expression: "\\bar{x} = \\dfrac{340}{4}" },
            { verbal_explanation: "שלב 4: ביצוע פעולת החילוק של שלוש מאות וארבעים בארבע.", math_expression: "\\bar{x} = 85" },
            { verbal_explanation: "שלב 5: התוצאה הסופית של הממוצע.", math_expression: "85" }
        ],
        final_answer: "85"
    },

    // שאלה מספר 22
    {
        topic: "probability_stats_35371",
        subTopic: "מדדי מרכז (ממוצע, חציון, שכיח)",
        question_text: "מהו החציון של קבוצת הנתונים האי-זוגית הבאה: 12, 14, 18, 20, 22? (הקבוצה כבר מסודרת בסדר עולה).&rlm;",
        options: ["18", "16", "14", "20"],
        correctAnswer: 0,
        hint: "החציון הוא המספר שנמצא בדיוק באמצע הרשימה המסודרת.",
        solution_steps: [
            { verbal_explanation: "שלב 1: ספירת כמות הנתונים.", math_expression: "n = 5" },
            { verbal_explanation: "שלב 2: שימוש בנוסחה למיקום החציון.", math_expression: "x = \\dfrac{5 + 1}{2}" },
            { verbal_explanation: "שלב 3: חישוב המיקום בתוך הרשימה.", math_expression: "x = 3" },
            { verbal_explanation: "שלב 4: איתור הנתון הנמצא במקום השלישי ברשימה המסודרת.", math_expression: "M_e = 18" },
            { verbal_explanation: "שלב 5: ציון התשובה הנבחרת.", math_expression: "18" }
        ],
        final_answer: "18"
    },

    // שאלה מספר 23
    {
        topic: "probability_stats_35371",
        subTopic: "מדדי מרכז (ממוצע, חציון, שכיח)",
        question_text: "מצאו את החציון של סדרת המספרים הזוגית הבאה: 2, 4, 8, 10.&rlm;",
        options: ["6", "4", "8", "5"],
        correctAnswer: 0,
        hint: "בסדרה זוגית עושים ממוצע חשבוני של שני המספרים האמצעיים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: אימות שהרשימה מסודרת וספירת הנתונים.", math_expression: "n = 4" },
            { verbal_explanation: "שלב 2: מציאת המיקום של שני המספרים האמצעיים.", math_expression: "x = 2 \\quad , \\quad y = 3" },
            { verbal_explanation: "שלב 3: זיהוי המספרים במיקומים אלו מתוך הרשימה.", math_expression: "n_2 = 4 \\quad , \\quad n_3 = 8" },
            { verbal_explanation: "שלב 4: חישוב הממוצע של שני מספרים אלו למציאת החציון.", math_expression: "M_e = \\dfrac{4 + 8}{2}" },
            { verbal_explanation: "שלב 5: סכימה במונה.", math_expression: "M_e = \\dfrac{12}{2}" },
            { verbal_explanation: "שלב 6: חלוקה לקבלת התוצאה.", math_expression: "M_e = 6" }
        ],
        final_answer: "6"
    },

    // שאלה מספר 24
    {
        topic: "probability_stats_35371",
        subTopic: "מדדי מרכז (ממוצע, חציון, שכיח)",
        question_text: "נתונה קבוצת מספרים: 5, 5, 6, 7, 7, 7, 8. מהו השכיח של קבוצה זו?&rlm;",
        options: ["7", "5", "6", "8"],
        correctAnswer: 0,
        hint: "השכיח הוא הערך שמופיע הכי הרבה פעמים בקבוצת הנתונים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: ספירת השכיחות של כל ערך ברשימה.", math_expression: "n_5 = 2 \\quad , \\quad n_7 = 3" },
            { verbal_explanation: "שלב 2: איתור השכיחות הגבוהה ביותר המקושרת לערך המתאים.", math_expression: "x = 3 \\Rightarrow y = 7" },
            { verbal_explanation: "שלב 3: התשובה הישירה.", math_expression: "7" }
        ],
        final_answer: "7"
    },

    // שאלה מספר 25
    {
        topic: "probability_stats_35371",
        subTopic: "מדדי מרכז (ממוצע, חציון, שכיח)",
        question_text: "בטבלת שכיחויות נתון: הציון 6 מופיע פעמיים, והציון 7 מופיע 3 פעמים. חשבו את ממוצע הציונים בקבוצה זו.&rlm;",
        options: ["6.6", "6.5", "7", "6.8"],
        correctAnswer: 0,
        hint: "הכפילו כל ציון בשכיחות שלו, חברו את התוצאות, וחלקו בסך הכל התלמידים (5).",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב סך הכל מספר הנתונים בטבלה.", math_expression: "n = 2 + 3 = 5" },
            { verbal_explanation: "שלב 2: בניית המונה על ידי הכפלת כל ערך בשכיחותו.", math_expression: "x = 6 \\times 2 + 7 \\times 3" },
            { verbal_explanation: "שלב 3: ביצוע כפל ראשון ושני.", math_expression: "x = 12 + 21" },
            { verbal_explanation: "שלב 4: חיבור התוצאות במונה.", math_expression: "x = 33" },
            { verbal_explanation: "שלב 5: חלוקת סכום הערכים במספר הנתונים הכולל.", math_expression: "\\bar{x} = \\dfrac{33}{5}" },
            { verbal_explanation: "שלב 6: קבלת הממוצע העשרוני.", math_expression: "\\bar{x} = 6.6" }
        ],
        final_answer: "6.6"
    },

    // שאלה מספר 26
    {
        topic: "probability_stats_35371",
        subTopic: "מדדי מרכז (ממוצע, חציון, שכיח)",
        question_text: "ממוצע הציונים של תלמיד ב-3 מבחנים הוא 80. במבחן הרביעי הוא קיבל ציון 100. מהו הממוצע החדש שלו בארבעת המבחנים?&rlm;",
        options: ["85", "80", "90", "95"],
        correctAnswer: 0,
        hint: "חשבו את סכום הציונים של 3 המבחנים (3 כפול 80). הוסיפו 100 וחלקו הכל ב-4.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת סכום הציונים המקורי מתוך הממוצע הישן.", math_expression: "x = 3 \\times 80 = 240" },
            { verbal_explanation: "שלב 2: הוספת הציון החדש לסכום הכולל.", math_expression: "y = 240 + 100" },
            { verbal_explanation: "שלב 3: חישוב הסכום החדש.", math_expression: "y = 340" },
            { verbal_explanation: "שלב 4: חלוקת הסכום המעודכן במספר המבחנים החדש למציאת הממוצע.", math_expression: "\\bar{x} = \\dfrac{340}{4}" },
            { verbal_explanation: "שלב 5: ביצוע החלוקה.", math_expression: "\\bar{x} = 85" },
            { verbal_explanation: "שלב 6: התוצאה להקלדה.", math_expression: "85" }
        ],
        final_answer: "85"
    },

    // שאלה מספר 27
    {
        topic: "probability_stats_35371",
        subTopic: "מדדי מרכז (ממוצע, חציון, שכיח)",
        question_text: "ממוצע של קבוצת מספרים הוא 50. אם נוסיף בדיוק את המספר 5 לכל אחד מהנתונים בקבוצה, מה יהיה הממוצע החדש?&rlm;",
        options: ["55", "50", "250", "45"],
        correctAnswer: 0,
        hint: "הזזה של כל הנתונים בקבוע מסוים גוררת את הממוצע לאותו כיוון בדיוק ובאותו הערך.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצגת התכונה המתמטית של הוספת קבוע לכל איברי המדגם.", math_expression: "y = x + c" },
            { verbal_explanation: "שלב 2: הצבת הנתונים מתוך השאלה.", math_expression: "\\bar{x} = 50 + 5" },
            { verbal_explanation: "שלב 3: ביצוע פעולת החיבור הפשוטה.", math_expression: "\\bar{x} = 55" },
            { verbal_explanation: "שלב 4: המסקנה הברורה והישירה.", math_expression: "55" }
        ],
        final_answer: "55"
    },

    // שאלה מספר 28
    {
        topic: "probability_stats_35371",
        subTopic: "מדדי מרכז (ממוצע, חציון, שכיח)",
        question_text: "ממוצע של קבוצת מספרים הוא 10. כופלים כל מספר בקבוצה פי 2. מה יהיה הממוצע החדש של הקבוצה?&rlm;",
        options: ["20", "10", "12", "5"],
        correctAnswer: 0,
        hint: "הכפלה של כל נתון בקבוע תכפיל את הממוצע הכללי באותו קבוע בדיוק.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצגת התכונה המתמטית של הכפלת כל איברי המדגם בקבוע.", math_expression: "y = x \\times c" },
            { verbal_explanation: "שלב 2: הצבת הנתונים מהשאלה לתוך המשוואה.", math_expression: "\\bar{x} = 10 \\times 2" },
            { verbal_explanation: "שלב 3: ביצוע פעולת הכפל.", math_expression: "\\bar{x} = 20" },
            { verbal_explanation: "שלב 4: התשובה הישירה בחלופות.", math_expression: "20" }
        ],
        final_answer: "20"
    },

    // שאלה מספר 29
    {
        topic: "probability_stats_35371",
        subTopic: "מדדי מרכז (ממוצע, חציון, שכיח)",
        question_text: "קבוצת נתונים מונה 100 משכורות רגילות. פתאום מוסיפים לקבוצה משכורת אחת חריגה במיוחד (מיליון שקלים). איזה מדד מרכזי יושפע הכי מעט מכך ויישאר אמין לייצוג הקבוצה?&rlm;",
        options: ["חציון", "ממוצע", "טווח", "אף אחד מהם"],
        correctAnswer: 0,
        hint: "החציון מתחשב רק במיקום המספר האמצעי ולא בגודל הקצוות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בחינת מבנה הנתונים ואיתור ערך קיצוני אחד בולט.", math_expression: "x = 1000000" },
            { verbal_explanation: "שלב 2: ניתוח תכונת הממוצע - מושפע מאוד מחריגים.", math_expression: "\\bar{x}" },
            { verbal_explanation: "שלב 3: ניתוח תכונת החציון - מתעלם מגודל הקצוות ונשאר באזור הטיפוסי.", math_expression: "M_e" },
            { verbal_explanation: "שלב 4: בחירת התשובה העיונית הנכונה.", math_expression: "1" }
        ],
        final_answer: "חציון"
    },

    // שאלה מספר 30
    {
        topic: "probability_stats_35371",
        subTopic: "מדדי מרכז (ממוצע, חציון, שכיח)",
        question_text: "בטבלת ציונים, סכום השכיחויות הוא 20. הממוצע של הכיתה כולה הוא 8. מהו סכום כל הציונים של כל התלמידים יחד?&rlm;",
        options: ["160", "2.5", "28", "12"],
        correctAnswer: 0,
        hint: "הכפילו את הממוצע במספר התלמידים כדי למצוא את סכום הציונים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים בנוסחת הממוצע.", math_expression: "8 = \\dfrac{x}{20}" },
            { verbal_explanation: "שלב 2: הכפלת המשוואה במכנה כדי לבודד את סכום הציונים.", math_expression: "x = 8 \\times 20" },
            { verbal_explanation: "שלב 3: ביצוע פעולת הכפל.", math_expression: "x = 160" },
            { verbal_explanation: "שלב 4: התשובה המבוקשת.", math_expression: "160" }
        ],
        final_answer: "160"
    },

    // ==========================================
    // תת נושא 8: מדדי פיזור (טווח, שונות, סטיית תקן) (10 שאלות)
    // ==========================================

    // שאלה מספר 31
    {
        topic: "probability_stats_35371",
        subTopic: "מדדי פיזור (טווח, שונות, סטיית תקן)",
        question_text: "נתונה קבוצת מספרים פשוטה: 1, 5, 10. מהו הטווח של קבוצת נתונים זו?&rlm;",
        options: ["9", "4", "5", "10"],
        correctAnswer: 0,
        hint: "הטווח מחושב כהפרש בין המספר הגדול ביותר למספר הקטן ביותר בקבוצה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: איתור הערך המינימלי.", math_expression: "x = 1" },
            { verbal_explanation: "שלב 2: איתור הערך המקסימלי.", math_expression: "y = 10" },
            { verbal_explanation: "שלב 3: שימוש בנוסחת הטווח.", math_expression: "R = y - x" },
            { verbal_explanation: "שלב 4: הצבת המספרים אל תוך הנוסחה.", math_expression: "R = 10 - 1" },
            { verbal_explanation: "שלב 5: חישוב החיסור לקבלת המדד.", math_expression: "R = 9" },
            { verbal_explanation: "שלב 6: בחירת התשובה המתאימה.", math_expression: "9" }
        ],
        final_answer: "9"
    },

    // שאלה מספר 32
    {
        topic: "probability_stats_35371",
        subTopic: "מדדי פיזור (טווח, שונות, סטיית תקן)",
        question_text: "באנליזה סטטיסטית, חושבה שונות של 16. מהי סטיית התקן של קבוצה זו?&rlm;",
        options: ["4", "256", "8", "32"],
        correctAnswer: 0,
        hint: "סטיית תקן היא תמיד השורש הריבועי של השונות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצגת הקשר המתמטי בין שונות לסטיית תקן.", math_expression: "S = \\sqrt{x}" },
            { verbal_explanation: "שלב 2: הצבת הערך הנתון של השונות לתוך המשוואה.", math_expression: "S = \\sqrt{16}" },
            { verbal_explanation: "שלב 3: הפעלת שורש ריבועי.", math_expression: "S = 4" },
            { verbal_explanation: "שלב 4: התשובה הישירה הנובעת מהחישוב.", math_expression: "4" }
        ],
        final_answer: "4"
    },

    // שאלה מספר 33
    {
        topic: "probability_stats_35371",
        subTopic: "מדדי פיזור (טווח, שונות, סטיית תקן)",
        question_text: "לקבוצת נתונים יש סטיית תקן של 4. הוספו 10 נקודות לכל אחד מהציונים בקבוצה. מה תהיה סטיית התקן החדשה?&rlm;",
        options: ["4", "14", "140", "40"],
        correctAnswer: 0,
        hint: "הוספת מספר קבוע מכל הנתונים לא משנה את המרחק והפיזור ביניהם כלל. לכן סטיית התקן אינה משתנה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בחינת ההשפעה של הזזה קבועה על מדדי פיזור.", math_expression: "y = x + c" },
            { verbal_explanation: "שלב 2: מכיוון שכל הנתונים זזים יחד באותה מידה, הפיזור היחסי ביניהם נשמר במדויק.", math_expression: "S = S" },
            { verbal_explanation: "שלב 3: המסקנה היא שסטיית התקן נותרת ללא שינוי.", math_expression: "S = 4" },
            { verbal_explanation: "שלב 4: הרישום לבחירה במערכת.", math_expression: "4" }
        ],
        final_answer: "4"
    },

    // שאלה מספר 34
    {
        topic: "probability_stats_35371",
        subTopic: "מדדי פיזור (טווח, שונות, סטיית תקן)",
        question_text: "לקבוצת נתונים יש סטיית תקן של 2. הוחלט לכפול כל נתון בקבוצה פי 3. מה תהיה סטיית התקן החדשה של הקבוצה?&rlm;",
        options: ["6", "2", "9", "18"],
        correctAnswer: 0,
        hint: "בניגוד לחיבור, כשכופלים את הנתונים בקבוע, הפיזור שלהם מורחב באותו קבוע בדיוק. הכפילו את סטיית התקן ב-3.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצגת התכונה המתמטית של כפל בקבוע על סטיית התקן.", math_expression: "y = S \\times c" },
            { verbal_explanation: "שלב 2: הצבת הנתונים מהשאלה לתוך המשוואה.", math_expression: "y = 2 \\times 3" },
            { verbal_explanation: "שלב 3: ביצוע פעולת הכפל.", math_expression: "y = 6" },
            { verbal_explanation: "שלב 4: הפתרון המבוקש.", math_expression: "6" }
        ],
        final_answer: "6"
    },

    // שאלה מספר 35
    {
        topic: "probability_stats_35371",
        subTopic: "מדדי פיזור (טווח, שונות, סטיית תקן)",
        question_text: "בבחינה, כל תלמידי הכיתה קיבלו בדיוק את אותו הציון: 80. מהי סטיית התקן של הציונים בכיתה זו?&rlm;",
        options: ["0", "80", "1", "לא ניתן לדעת"],
        correctAnswer: 0,
        hint: "סטיית תקן מודדת את הפיזור. אם כולם קיבלו אותו ציון, אין שום פיזור.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בחינת הנתונים והסקת הממוצע.", math_expression: "\\bar{x} = 80" },
            { verbal_explanation: "שלב 2: חישוב המרחק של כל נתון מהממוצע.", math_expression: "x - \\bar{x} = 80 - 80 = 0" },
            { verbal_explanation: "שלב 3: מכיוון שכל הסטיות הן אפס, השונות היא אפס וגם השורש שלה הוא אפס.", math_expression: "S = 0" },
            { verbal_explanation: "שלב 4: המסקנה היא שאין פיזור.", math_expression: "0" }
        ],
        final_answer: "0"
    },

    // שאלה מספר 36
    {
        topic: "probability_stats_35371",
        subTopic: "מדדי פיזור (טווח, שונות, סטיית תקן)",
        question_text: "סטיית התקן היא מדד שנועד להעריך את רמת הפיזור והמרחק הממוצע של הנתונים סביב איזה מדד מרכזי?&rlm;",
        options: ["הממוצע", "החציון", "השכיח", "הטווח"],
        correctAnswer: 0,
        hint: "נוסחת סטיית התקן כוללת חיסור של מדד מסוים מכל נתון. מדד זה הוא המוכר ביותר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בחינת נוסחת סטיית התקן המוכרת בסטטיסטיקה.", math_expression: "S = \\sqrt{\\dfrac{\\Sigma(x - \\bar{x})^{2}}{n}}" },
            { verbal_explanation: "שלב 2: זיהוי האיבר שאליו מושווים הנתונים בנוסחה.", math_expression: "\\bar{x}" },
            { verbal_explanation: "שלב 3: איבר זה מייצג את הממוצע החשבוני.", math_expression: "1" },
            { verbal_explanation: "שלב 4: התאמה לאפשרות בתשובות העיוניות.", math_expression: "1" }
        ],
        final_answer: "הממוצע"
    },

    // שאלה מספר 37
    {
        topic: "probability_stats_35371",
        subTopic: "מדדי פיזור (טווח, שונות, סטיית תקן)",
        question_text: "השונות של סדרת נתונים מסוימת נמצאה כשווה ל-25. מהי סטיית התקן של סדרה זו?&rlm;",
        options: ["5", "625", "12.5", "50"],
        correctAnswer: 0,
        hint: "כמו שראינו, יש להוציא שורש ריבועי מהשונות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצגת הקשר בין המשתנים שוב לביסוס ההבנה.", math_expression: "S = \\sqrt{y}" },
            { verbal_explanation: "שלב 2: הצבת הערך הנתון בתוך השורש.", math_expression: "S = \\sqrt{25}" },
            { verbal_explanation: "שלב 3: חישוב התוצאה המוכרת.", math_expression: "S = 5" },
            { verbal_explanation: "שלב 4: הרישום לבדיקה.", math_expression: "5" }
        ],
        final_answer: "5"
    },

    // שאלה מספר 38
    {
        topic: "probability_stats_35371",
        subTopic: "מדדי פיזור (טווח, שונות, סטיית תקן)",
        question_text: "ידוע שטווח הנתונים של קבוצה הוא 20. הערך המינימלי בקבוצה הוא 5. מהו הערך המקסימלי?&rlm;",
        options: ["25", "15", "100", "4"],
        correctAnswer: 0,
        hint: "הטווח הוא המקסימום פחות המינימום. לכן, המקסימום שווה לטווח ועוד המינימום.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת משוואת הטווח הכללית.", math_expression: "R = y - x" },
            { verbal_explanation: "שלב 2: הצבת הנתונים הידועים למשוואה.", math_expression: "20 = y - 5" },
            { verbal_explanation: "שלב 3: בידוד הערך המקסימלי על ידי הוספת חמש לשני האגפים.", math_expression: "y = 20 + 5" },
            { verbal_explanation: "שלב 4: ביצוע החיבור.", math_expression: "y = 25" },
            { verbal_explanation: "שלב 5: התשובה הישירה בחלופות.", math_expression: "25" }
        ],
        final_answer: "25"
    },

    // שאלה מספר 39
    {
        topic: "probability_stats_35371",
        subTopic: "מדדי פיזור (טווח, שונות, סטיית תקן)",
        question_text: "הביטו בשתי קבוצות של מספרים. קבוצה א': (5, 5, 5). קבוצה ב': (0, 5, 10). ללא צורך בחישוב מדויק, לאיזו קבוצה יש סטיית תקן גדולה יותר?&rlm;",
        options: ["קבוצה ב'", "קבוצה א'", "סטיית התקן שווה", "לא ניתן להעריך"],
        correctAnswer: 0,
        hint: "סטיית התקן מודדת את הפיזור. באיזו קבוצה המספרים רחוקים יותר מהממוצע?",
        solution_steps: [
            { verbal_explanation: "שלב 1: ניתוח קבוצה א'. המספרים זהים ולכן הפיזור אפסי.", math_expression: "S_{A} = 0" },
            { verbal_explanation: "שלב 2: ניתוח קבוצה ב'. הממוצע הוא גם חמש, אך המספרים רחוקים ממנו ולכן קיים פיזור.", math_expression: "S_{B} > 0" },
            { verbal_explanation: "שלב 3: השוואת התוצאות.", math_expression: "S_{B} > S_{A}" },
            { verbal_explanation: "שלב 4: מסקנה על קבוצה ב'.", math_expression: "1" },
            { verbal_explanation: "שלב 5: בחירת התשובה העיונית המתאימה.", math_expression: "1" }
        ],
        final_answer: "קבוצה ב'"
    },

    // שאלה מספר 40
    {
        topic: "probability_stats_35371",
        subTopic: "מדדי פיזור (טווח, שונות, סטיית תקן)",
        question_text: "כיצד צפויה להשפיע הוספה של נתון חריג מאוד (קיצוני) לקבוצת נתונים על סטיית התקן של הקבוצה?&rlm;",
        options: ["תגדיל אותה", "תקטין אותה", "לא תשפיע עליה", "תאפס אותה"],
        correctAnswer: 0,
        hint: "נתון חריג נמצא במרחק רב מהממוצע, ולכן תורם מספר גדול לנוסחת החישוב של סטיית התקן.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הבנת המשמעות של נתון חריג. המרחק שלו מהממוצע ענק.", math_expression: "(x - \\bar{x})^{2}" },
            { verbal_explanation: "שלב 2: כאשר מוסיפים מספר גדול למונה, הערך הכולל עולה.", math_expression: "S > 0" },
            { verbal_explanation: "שלב 3: המסקנה היא שנתון קיצוני מנפח את הפיזור ולכן מגדיל את סטיית התקן.", math_expression: "1" },
            { verbal_explanation: "שלב 4: התשובה הישירה בחלופות العיוניות.", math_expression: "1" }
        ],
        final_answer: "תגדיל אותה"
    },
    // ==========================================
    // תת נושא 5: עץ הסתברות (10 שאלות)
    // ==========================================

    // שאלה מספר 1
    {
        topic: "probability_stats_35371",
        subTopic: "עץ הסתברות",
        question_text: "בכד יש 3 כדורים לבנים ו-2 כדורים שחורים. מוציאים באקראי כדור אחד, מסתכלים על צבעו ומחזירים אותו לכד. לאחר מכן מוציאים כדור שני. מה ההסתברות ששני הכדורים שהוצאו הם לבנים?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><path d='M 40 40 L 40 140 Q 40 180 100 180 Q 160 180 160 140 L 160 40' fill='none' stroke='#64748b' stroke-width='4'/><circle cx='80' cy='150' r='12' fill='#fff' stroke='#000' stroke-width='1'/><circle cx='120' cy='150' r='12' fill='#fff' stroke='#000' stroke-width='1'/><circle cx='100' cy='120' r='12' fill='#fff' stroke='#000' stroke-width='1'/><circle cx='70' cy='110' r='12' fill='#000'/><circle cx='130' cy='110' r='12' fill='#000'/></svg></div>",
        options: ["9/25", "6/25", "3/5", "6/20"],
        correctAnswer: 0,
        hint: "בנו עץ הסתברויות. מאחר והכדור מוחזר, ההסתברות נשארת זהה בשתי ההוצאות. הכפילו את ההסתברויות לאורך הענף הלבן.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת כמות הכדורים הכללית בכד.", math_expression: "n = 3 + 2 = 5" },
            { verbal_explanation: "שלב 2: קביעת ההסתברות להוצאת כדור לבן בהוצאה הראשונה.", math_expression: "P_1 = \\dfrac{3}{5}" },
            { verbal_explanation: "שלב 3: קביעת ההסתברות להוצאת כדור לבן בהוצאה השנייה (ההסתברות נשמרת כי יש החזרה).", math_expression: "P_2 = \\dfrac{3}{5}" },
            { verbal_explanation: "שלב 4: שימוש בחוק המכפלה למסלול בעץ ההסתברויות.", math_expression: "P = \\dfrac{3}{5} \\times \\dfrac{3}{5}" },
            { verbal_explanation: "שלב 5: ביצוע פעולת הכפל.", math_expression: "P = \\dfrac{9}{25}" },
            { verbal_explanation: "שלב 6: הרישום לבחירה.", math_expression: "9/25" }
        ],
        final_answer: "9/25"
    },

    // שאלה מספר 2
    {
        topic: "probability_stats_35371",
        subTopic: "עץ הסתברות",
        question_text: "באותו כד (3 כדורים לבנים ו-2 שחורים) מוציאים כדור אחד, אך הפעם לא מחזירים אותו. לאחר מכן מוציאים כדור שני. מה ההסתברות ששני הכדורים שהוצאו הם לבנים?&rlm;",
        options: ["3/10", "9/25", "6/25", "1/2"],
        correctAnswer: 0,
        hint: "ללא החזרה, כמות הכדורים הכללית וכמות הכדורים הלבנים קטנה באחד לקראת ההוצאה השנייה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: ההסתברות להוצאת כדור לבן ראשון נשארת זהה.", math_expression: "P_1 = \\dfrac{3}{5}" },
            { verbal_explanation: "שלב 2: עדכון כמות הכדורים בכד לאחר הוצאת כדור לבן.", math_expression: "n = 5 - 1 = 4" },
            { verbal_explanation: "שלב 3: עדכון כמות הכדורים הלבנים שנותרו.", math_expression: "m = 3 - 1 = 2" },
            { verbal_explanation: "שלב 4: ההסתברות להוצאת כדור לבן בהוצאה השנייה.", math_expression: "P_2 = \\dfrac{2}{4} = \\dfrac{1}{2}" },
            { verbal_explanation: "שלב 5: הכפלת ההסתברויות לאורך ענף העץ.", math_expression: "P = \\dfrac{3}{5} \\times \\dfrac{1}{2}" },
            { verbal_explanation: "שלב 6: ביצוע הכפל לקבלת ההסתברות הסופית.", math_expression: "P = \\dfrac{3}{10}" }
        ],
        final_answer: "3/10"
    },

    // שאלה מספר 3
    {
        topic: "probability_stats_35371",
        subTopic: "עץ הסתברות",
        question_text: "מפעל מייצר נורות. ההסתברות שנורה תהיה תקינה היא 0.8. בוחרים באקראי 2 נורות. מה ההסתברות ששתיהן תקינות?&rlm;",
        options: ["0.64", "0.8", "1.6", "0.16"],
        correctAnswer: 0,
        hint: "הנורות בלתי תלויות זו בזו. הכפילו את ההסתברות בעצמה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת ההסתברות לנורה תקינה בודדת.", math_expression: "P_1 = 0.8" },
            { verbal_explanation: "שלב 2: הגדרת ההסתברות לנורה תקינה שנייה.", math_expression: "P_2 = 0.8" },
            { verbal_explanation: "שלב 3: הרכבת המכפלה לאורך הענף.", math_expression: "P = 0.8 \\times 0.8" },
            { verbal_explanation: "שלב 4: ביצוע פעולת הכפל העשרוני.", math_expression: "P = 0.64" },
            { verbal_explanation: "שלב 5: התשובה הישירה בחלופות.", math_expression: "0.64" }
        ],
        final_answer: "0.64"
    },

    // שאלה מספר 4
    {
        topic: "probability_stats_35371",
        subTopic: "עץ הסתברות",
        question_text: "תלמיד ניגש לשני מבחנים. ההסתברות שיעבור את המבחן הראשון היא 0.6. אם עבר את הראשון, ההסתברות שיעבור את השני היא 0.9. אם נכשל בראשון, ההסתברות שיעבור את השני יורדת ל-0.4. מה ההסתברות שיעבור את שני המבחנים בהצלחה?&rlm;",
        options: ["0.54", "0.6", "0.9", "0.24"],
        correctAnswer: 0,
        hint: "יש לעקוב אחר הענף המייצג מעבר בראשון ולאחריו מעבר בשני. ההסתברות השנייה מותנית בראשונה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי ההסתברות למעבר המבחן הראשון.", math_expression: "P_1 = 0.6" },
            { verbal_explanation: "שלב 2: זיהוי ההסתברות המותנית למעבר המבחן השני.", math_expression: "P_2 = 0.9" },
            { verbal_explanation: "שלב 3: כתיבת פעולת הכפל לאורך הענף המבוקש בעץ.", math_expression: "P = 0.6 \\times 0.9" },
            { verbal_explanation: "שלב 4: ביצוע הכפל.", math_expression: "P = 0.54" },
            { verbal_explanation: "שלב 5: התוצאה המסכמת.", math_expression: "0.54" }
        ],
        final_answer: "0.54"
    },

    // שאלה מספר 5
    {
        topic: "probability_stats_35371",
        subTopic: "עץ הסתברות",
        question_text: "בהמשך לשאלה הקודמת. מה ההסתברות שהתלמיד ייכשל בשני המבחנים?&rlm;",
        options: ["0.24", "0.16", "0.4", "0.36"],
        correctAnswer: 0,
        hint: "חשבו את ההסתברות שייכשל בראשון (המשלים של 0.6). לאחר מכן חשבו את ההסתברות שייכשל בשני תחת התנאי הזה (המשלים של 0.4).",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת ההסתברות לכישלון במבחן הראשון.", math_expression: "P_1 = 1 - 0.6 = 0.4" },
            { verbal_explanation: "שלב 2: מציאת ההסתברות לכישלון במבחן השני בהינתן כישלון בראשון.", math_expression: "P_2 = 1 - 0.4 = 0.6" },
            { verbal_explanation: "שלב 3: הכפלת ההסתברויות לאורך ענף הכישלונות בעץ.", math_expression: "P = 0.4 \\times 0.6" },
            { verbal_explanation: "שלב 4: ביצוע פעולת הכפל.", math_expression: "P = 0.24" },
            { verbal_explanation: "שלב 5: התשובה.", math_expression: "0.24" }
        ],
        final_answer: "0.24"
    },

    // שאלה מספר 6
    {
        topic: "probability_stats_35371",
        subTopic: "עץ הסתברות",
        question_text: "שני רמזורים פועלים באופן בלתי תלוי. הרמזור הראשון ירוק בהסתברות של 0.5, והרמזור השני ירוק בהסתברות של 0.6. מה ההסתברות שנהג יפגוש רמזור אדום בשני הרמזורים?&rlm;",
        options: ["0.2", "0.3", "0.5", "0.8"],
        correctAnswer: 0,
        hint: "חשבו את ההסתברות לרמזור אדום בכל אחד מהצמתים, ואז הכפילו את התוצאות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב המאורע המשלים (אדום) ברמזור הראשון.", math_expression: "P_1 = 1 - 0.5 = 0.5" },
            { verbal_explanation: "שלב 2: חישוב המאורע המשלים (אדום) ברמזור השני.", math_expression: "P_2 = 1 - 0.6 = 0.4" },
            { verbal_explanation: "שלב 3: הפעלת חוק המכפלה למאורעות בלתי תלויים.", math_expression: "P = 0.5 \\times 0.4" },
            { verbal_explanation: "שלב 4: תוצאת הכפל.", math_expression: "P = 0.2" },
            { verbal_explanation: "שלב 5: הרישום לבדיקה.", math_expression: "0.2" }
        ],
        final_answer: "0.2"
    },

    // שאלה מספר 7
    {
        topic: "probability_stats_35371",
        subTopic: "עץ הסתברות",
        question_text: "במשחק סביבון יש 4 גזרות שוות. מסובבים את הסביבון פעמיים. מה ההסתברות שהסביבון ייפול על אותה אות בשתי הפעמים?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:200px; width:100%; border-radius:50%; background:#f8fafc; border:1px solid #e2e8f0;'><circle cx='100' cy='100' r='90' fill='none' stroke='#f59e0b' stroke-width='4'/><line x1='100' y1='10' x2='100' y2='190' stroke='#f59e0b' stroke-width='2'/><line x1='10' y1='100' x2='190' y2='100' stroke='#f59e0b' stroke-width='2'/><polygon points='100,100 120,40 90,40' fill='#ef4444'/></svg></div>",
        options: ["1/4", "1/16", "1/8", "1/2"],
        correctAnswer: 0,
        hint: "הסיבוב הראשון לא משנה איזו אות תצא (הסתברות 1). בסיבוב השני צריך לצאת בדיוק מה שיצא בראשון (הסתברות 1/4).",
        solution_steps: [
            { verbal_explanation: "שלב 1: ההסתברות לסיבוב הראשון היא ודאית כי כל תוצאה מקובלת כבסיס להשוואה.", math_expression: "P_1 = 1" },
            { verbal_explanation: "שלב 2: ההסתברות שהסיבוב השני יהיה זהה לראשון היא אחת מתוך ארבע גזרות.", math_expression: "P_2 = \\dfrac{1}{4}" },
            { verbal_explanation: "שלב 3: בניית פעולת הכפל לאורך העץ המופשט.", math_expression: "P = 1 \\times \\dfrac{1}{4}" },
            { verbal_explanation: "שלב 4: ביצוע כפל.", math_expression: "P = \\dfrac{1}{4}" },
            { verbal_explanation: "שלב 5: התשובה.", math_expression: "1/4" }
        ],
        final_answer: "1/4"
    },

    // שאלה מספר 8
    {
        topic: "probability_stats_35371",
        subTopic: "עץ הסתברות",
        question_text: "קבוצת כדורסל מנצחת במשחק בסיכוי של 0.6 ומפסידה בסיכוי 0.4. היא משחקת שלושה משחקים ברצף. מה ההסתברות שתנצח בכל שלושת המשחקים?&rlm;",
        options: ["0.216", "1.8", "0.6", "0.12"],
        correctAnswer: 0,
        hint: "זהו עץ עם שלוש רמות. יש להכפיל את הסתברות הניצחון בעצמה שלוש פעמים ברציפות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתון להסתברות ניצחון בודד.", math_expression: "P_1 = 0.6" },
            { verbal_explanation: "שלב 2: בניית המכפלה לאורך שלושת ענפי העץ.", math_expression: "P = 0.6 \\times 0.6 \\times 0.6" },
            { verbal_explanation: "שלב 3: כפל שני האיברים הראשונים.", math_expression: "P = 0.36 \\times 0.6" },
            { verbal_explanation: "שלב 4: ביצוע הכפל השלישי.", math_expression: "P = 0.216" },
            { verbal_explanation: "שלב 5: קבלת התוצאה למאורע המשולב.", math_expression: "0.216" }
        ],
        final_answer: "0.216"
    },

    // שאלה מספר 9
    {
        topic: "probability_stats_35371",
        subTopic: "עץ הסתברות",
        question_text: "בכד יש 4 כדורים צהובים ו-6 כדורים אדומים. מוציאים כדור אחד ללא החזרה, ואז עוד אחד. מה ההסתברות ששני הכדורים הם בצבעים שונים?&rlm;",
        options: ["48/90", "24/90", "24/100", "48/100"],
        correctAnswer: 0,
        hint: "צבעים שונים משמעותם 'צהוב ואז אדום' או 'אדום ואז צהוב'. חשבו את שני המסלולים הללו בעץ וחברו אותם.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב המסלול הראשון - צהוב ואז אדום ללא החזרה.", math_expression: "P_1 = \\dfrac{4}{10} \\times \\dfrac{6}{9} = \\dfrac{24}{90}" },
            { verbal_explanation: "שלב 2: חישוב המסלול השני - אדום ואז צהוב ללא החזרה.", math_expression: "P_2 = \\dfrac{6}{10} \\times \\dfrac{4}{9} = \\dfrac{24}{90}" },
            { verbal_explanation: "שלב 3: חיבור ההסתברויות של שני המסלולים.", math_expression: "P = \\dfrac{24}{90} + \\dfrac{24}{90}" },
            { verbal_explanation: "שלב 4: סכימת המונים ליצירת השבר הסופי.", math_expression: "P = \\dfrac{48}{90}" },
            { verbal_explanation: "שלב 5: התשובה לפי האפשרויות המוצגות.", math_expression: "48/90" }
        ],
        final_answer: "48/90"
    },

    // שאלה מספר 10
    {
        topic: "probability_stats_35371",
        subTopic: "עץ הסתברות",
        question_text: "תחזית למחר: ההסתברות שיירד גשם היא 0.2. אם יירד גשם, ההסתברות שיווצר פקק תנועה היא 0.9. אם לא יירד גשם, ההסתברות לפקק היא 0.3. מה ההסתברות שיהיה מחר פקק תנועה?&rlm;",
        options: ["0.42", "0.9", "0.24", "0.18"],
        correctAnswer: 0,
        hint: "נוסחת ההסתברות השלמה דרך עץ. חשבו את שני המסלולים שמובילים לפקק (גשם+פקק, ולא-גשם+פקק) וחברו אותם.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב המסלול הראשון - גשם ובעקבותיו פקק.", math_expression: "P_1 = 0.2 \\times 0.9 = 0.18" },
            { verbal_explanation: "שלב 2: חישוב ההסתברות שלא יירד גשם.", math_expression: "x = 1 - 0.2 = 0.8" },
            { verbal_explanation: "שלב 3: חישוב המסלול השני - אין גשם ובכל זאת יש פקק.", math_expression: "P_2 = 0.8 \\times 0.3 = 0.24" },
            { verbal_explanation: "שלב 4: חיבור ההסתברויות של שני המסלולים.", math_expression: "P = 0.18 + 0.24" },
            { verbal_explanation: "שלב 5: סכימה פשוטה.", math_expression: "P = 0.42" },
            { verbal_explanation: "שלב 6: המסקנה לרישום במערכת.", math_expression: "0.42" }
        ],
        final_answer: "0.42"
    },

    // ==========================================
    // תת נושא 6: תרגול חישובי הסתברות (10 שאלות)
    // ==========================================

    // שאלה מספר 11
    {
        topic: "probability_stats_35371",
        subTopic: "תרגול חישובי הסתברות",
        question_text: "בטבלה דו-ממדית מוצגים נתונים על תלמידי כיתה: ישנם 20 בנים ו-30 בנות. 5 מהבנים מרכיבים משקפיים, ו-10 מהבנות מרכיבות משקפיים. בוחרים תלמיד באקראי. מה ההסתברות לבחור בן שמרכיב משקפיים?&rlm;",
        options: ["1/10", "1/4", "5/20", "1/6"],
        correctAnswer: 0,
        hint: "חברו את כל התלמידים בכיתה כדי לקבל את המכנה. המונה הוא כמות הבנים עם המשקפיים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב סך כל התלמידים בכיתה.", math_expression: "n = 20 + 30 = 50" },
            { verbal_explanation: "שלב 2: קריאת הנתון הרלוונטי בטבלה.", math_expression: "m = 5" },
            { verbal_explanation: "שלב 3: הרכבת שבר ההסתברות הבסיסי.", math_expression: "P = \\dfrac{5}{50}" },
            { verbal_explanation: "שלב 4: צמצום השבר על ידי חלוקת המונה והמכנה בחמש.", math_expression: "P = \\dfrac{1}{10}" },
            { verbal_explanation: "שלב 5: התשובה הישירה בחלופות.", math_expression: "1/10" }
        ],
        final_answer: "1/10"
    },

    // שאלה מספר 12
    {
        topic: "probability_stats_35371",
        subTopic: "תרגול חישובי הסתברות",
        question_text: "בהמשך לשאלה הקודמת (20 בנים, 30 בנות. 5 בנים עם משקפיים, 10 בנות עם משקפיים). בחרו תלמיד והתברר שהוא מרכיב משקפיים. מה ההסתברות שהתלמיד הוא בן?&rlm;",
        options: ["1/3", "1/4", "5/50", "1/2"],
        correctAnswer: 0,
        hint: "זוהי הסתברות מותנית. מכיוון שידוע שהתלמיד מרכיב משקפיים, המכנה הצטמצם רק לכלל התלמידים עם משקפיים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב המכנה החדש על סמך התנאי המוקדם.", math_expression: "n = 5 + 10 = 15" },
            { verbal_explanation: "שלב 2: זיהוי מספר הבנים מתוך קבוצה זו.", math_expression: "m = 5" },
            { verbal_explanation: "שלב 3: כתיבת תרגיל ההסתברות המותנית.", math_expression: "P = \\dfrac{5}{15}" },
            { verbal_explanation: "שלב 4: צמצום השבר על ידי חלוקה בחמש.", math_expression: "P = \\dfrac{1}{3}" },
            { verbal_explanation: "שלב 5: הפתרון כפי שיוזן.", math_expression: "1/3" }
        ],
        final_answer: "1/3"
    },

    // שאלה מספר 13
    {
        topic: "probability_stats_35371",
        subTopic: "תרגול חישובי הסתברות",
        question_text: "מטילים קוביית משחק הוגנת פעם אחת. מה ההסתברות שיתקבל מספר הגדול מ-4?&rlm;",
        options: ["1/3", "1/2", "2/5", "1/6"],
        correctAnswer: 0,
        hint: "המספרים שגדולים מ-4 בקובייה הם רק 5 ו-6.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת מספר הפאות בקובייה.", math_expression: "n = 6" },
            { verbal_explanation: "שלב 2: ספירת המספרים העונים לתנאי.", math_expression: "m = 2" },
            { verbal_explanation: "שלב 3: הרכבת השבר למאורע.", math_expression: "P = \\dfrac{2}{6}" },
            { verbal_explanation: "שלב 4: צמצום השבר לשליש.", math_expression: "P = \\dfrac{1}{3}" },
            { verbal_explanation: "שלב 5: הרישום לבדיקה.", math_expression: "1/3" }
        ],
        final_answer: "1/3"
    },

    // שאלה מספר 14
    {
        topic: "probability_stats_35371",
        subTopic: "תרגול חישובי הסתברות",
        question_text: "זורקים שתי קוביות הוגנות. מה ההסתברות שסכום המספרים בשתי הקוביות יהיה בדיוק 7?&rlm;",
        options: ["1/6", "7/36", "1/12", "1/36"],
        correctAnswer: 0,
        hint: "מנו את הזוגות המניבים 7: (1,6), (2,5), (3,4) וגם ההפוכים להם. חלקו ב-36.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב מספר האפשרויות במרחב הדו-ממדי.", math_expression: "n = 6 \\times 6 = 36" },
            { verbal_explanation: "שלב 2: איתור הזוגות שסכומם שבע.", math_expression: "(1,6) , (6,1) , (2,5) , (5,2) , (3,4) , (4,3)" },
            { verbal_explanation: "שלב 3: ספירת הזוגות הללו.", math_expression: "m = 6" },
            { verbal_explanation: "שלב 4: הרכבת השבר וצמצומו.", math_expression: "P = \\dfrac{6}{36} = \\dfrac{1}{6}" },
            { verbal_explanation: "שלב 5: התשובה הישירה בחלופות.", math_expression: "1/6" }
        ],
        final_answer: "1/6"
    },

    // שאלה מספר 15
    {
        topic: "probability_stats_35371",
        subTopic: "תרגול חישובי הסתברות",
        question_text: "זורקים שתי קוביות הוגנות. מה ההסתברות לקבל 'דאבל' (אותו מספר בשתי הקוביות)?&rlm;",
        options: ["1/6", "1/36", "1/12", "1/18"],
        correctAnswer: 0,
        hint: "ישנם 6 זוגות שבהם המספרים זהים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת מרחב המדגם לשתי קוביות.", math_expression: "n = 36" },
            { verbal_explanation: "שלב 2: איתור קבוצת תוצאות הדאבל.", math_expression: "(1,1) , (2,2) , (3,3) , (4,4) , (5,5) , (6,6)" },
            { verbal_explanation: "שלב 3: ספירת התוצאות הללו.", math_expression: "m = 6" },
            { verbal_explanation: "שלב 4: הצבה בשבר ההסתברות וביצוע צמצום.", math_expression: "P = \\dfrac{6}{36} = \\dfrac{1}{6}" },
            { verbal_explanation: "שלב 5: סיום התרגיל.", math_expression: "1/6" }
        ],
        final_answer: "1/6"
    },

    // שאלה מספר 16
    {
        topic: "probability_stats_35371",
        subTopic: "תרגול חישובי הסתברות",
        question_text: "בכד יש 5 כדורים כחולים ו-5 כדורים אדומים. מוציאים כדור, מחזירים אותו, ומוציאים כדור נוסף. מה ההסתברות שלפחות כדור אחד מבין השניים שהוצאו יהיה אדום?&rlm;",
        options: ["3/4", "1/4", "1/2", "1"],
        correctAnswer: 0,
        hint: "הכי קל לחשב את המאורע המשלים: 'שני כחולים ברצף', ואז לחסר אותו מ-1.",
        solution_steps: [
            { verbal_explanation: "שלב 1: קביעת ההסתברות להוצאת כדור כחול בודד.", math_expression: "P_1 = \\dfrac{5}{10} = \\dfrac{1}{2}" },
            { verbal_explanation: "שלב 2: חישוב המסלול של שני כחולים (המאורע המשלים).", math_expression: "x = \\dfrac{1}{2} \\times \\dfrac{1}{2} = \\dfrac{1}{4}" },
            { verbal_explanation: "שלב 3: שימוש בכלל המאורע המשלים.", math_expression: "P = 1 - \\dfrac{1}{4}" },
            { verbal_explanation: "שלב 4: ביצוע החיסור משלם אחד.", math_expression: "P = \\dfrac{3}{4}" },
            { verbal_explanation: "שלב 5: התשובה הדרושה.", math_expression: "3/4" }
        ],
        final_answer: "3/4"
    },

    // שאלה מספר 17
    {
        topic: "probability_stats_35371",
        subTopic: "תרגול חישובי הסתברות",
        question_text: "בחפיסת קלפים סטנדרטית (52 קלפים) יש 4 קלפי מלך ו-4 קלפי מלכה. שולפים קלף אחד באקראי. מה ההסתברות שהקלף שנשלף הוא מלך או מלכה?&rlm;",
        options: ["2/13", "1/13", "4/13", "1/26"],
        correctAnswer: 0,
        hint: "סכמו את מספר הקלפים הרצויים וחלקו בסך החפיסה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: סכימת כמות הקלפים המקיימים את התנאי הרצוי.", math_expression: "m = 4 + 4 = 8" },
            { verbal_explanation: "שלב 2: הגדרת כמות הקלפים הכוללת בחפיסה.", math_expression: "n = 52" },
            { verbal_explanation: "שלב 3: הרכבת שבר ההסתברות.", math_expression: "P = \\dfrac{8}{52}" },
            { verbal_explanation: "שלב 4: צמצום השבר על ידי חלוקה בארבע.", math_expression: "P = \\dfrac{2}{13}" },
            { verbal_explanation: "שלב 5: התוצאה לרישום במערכת.", math_expression: "2/13" }
        ],
        final_answer: "2/13"
    },

    // שאלה מספר 18
    {
        topic: "probability_stats_35371",
        subTopic: "תרגול חישובי הסתברות",
        question_text: "נתונים שני מאורעות בלתי תלויים. ההסתברות לראשון היא 0.4 ולהסתברות לשני היא 0.5. חשבו את ההסתברות ששניהם יקרו יחד.&rlm;",
        options: ["0.2", "0.9", "0.1", "0.45"],
        correctAnswer: 0,
        hint: "הכפילו את ההסתברויות של המאורעות הבלתי תלויים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: רישום הכלל המתמטי לחיתוך מאורעות בלתי תלויים.", math_expression: "P = x \\times y" },
            { verbal_explanation: "שלב 2: הצבת הנתונים מהשאלה.", math_expression: "P = 0.4 \\times 0.5" },
            { verbal_explanation: "שלב 3: ביצוע פעולת הכפל العשרוני.", math_expression: "P = 0.2" },
            { verbal_explanation: "שלב 4: המסקנה הישירה.", math_expression: "0.2" }
        ],
        final_answer: "0.2"
    },

    // שאלה מספר 19
    {
        topic: "probability_stats_35371",
        subTopic: "תרגול חישובי הסתברות",
        question_text: "בהמשך לשאלה הקודמת (0.4 ו-0.5, בלתי תלויים). מהי ההסתברות לאיחוד של שני המאורעות הללו (לפחות אחד יקרה)?&rlm;",
        options: ["0.7", "0.9", "0.5", "0.2"],
        correctAnswer: 0,
        hint: "נוסחת האיחוד היא חיבור ההסתברויות פחות ההסתברות של החיתוך (שחישבתם מקודם כ-0.2).",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצגת הנוסחה הכללית לאיחוד.", math_expression: "P = x + y - z" },
            { verbal_explanation: "שלב 2: הצבת ההסתברויות הבסיסיות ותוצאת החיתוך.", math_expression: "P = 0.4 + 0.5 - 0.2" },
            { verbal_explanation: "שלב 3: סכימת שני האיברים הראשונים.", math_expression: "P = 0.9 - 0.2" },
            { verbal_explanation: "שלב 4: ביצוע החיסור למציאת האיחוד.", math_expression: "P = 0.7" },
            { verbal_explanation: "שלב 5: התשובה הישירה.", math_expression: "0.7" }
        ],
        final_answer: "0.7"
    },

    // שאלה מספר 20
    {
        topic: "probability_stats_35371",
        subTopic: "תרגול חישובי הסתברות",
        question_text: "ההסתברות שקבוצת כדורגל תנצח במשחק היא 0.25. ההסתברות לתיקו היא 0. מהי ההסתברות שהקבוצה תפסיד?&rlm;",
        options: ["0.75", "0.25", "1", "0.5"],
        correctAnswer: 0,
        hint: "הפסד הוא המאורע המשלים לניצחון במקרה זה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הבנת המצב שבו קיימים רק שני מאורעות אפשריים ומשלימים.", math_expression: "x + y = 1" },
            { verbal_explanation: "שלב 2: הצבת נתון הניצחון במשוואה.", math_expression: "0.25 + y = 1" },
            { verbal_explanation: "שלב 3: העברת אגף בחיסור.", math_expression: "y = 1 - 0.25" },
            { verbal_explanation: "שלב 4: פתרון משוואת החיסור.", math_expression: "y = 0.75" },
            { verbal_explanation: "שלב 5: קבלת התשובה.", math_expression: "0.75" }
        ],
        final_answer: "0.75"
    },

    // ==========================================
    // תת נושא 7: מדדי מרכז (ממוצע, חציון, שכיח) (10 שאלות)
    // ==========================================

    // שאלה מספר 21
    {
        topic: "probability_stats_35371",
        subTopic: "מדדי מרכז (ממוצע, חציון, שכיח)",
        question_text: "חשבו את הממוצע של קבוצת הציונים הבאה: 70, 80, 90, 100.&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 250 100' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><rect x='30' y='50' width='30' height='30' fill='#8b5cf6'/><rect x='80' y='40' width='30' height='40' fill='#8b5cf6'/><rect x='130' y='30' width='30' height='50' fill='#8b5cf6'/><rect x='180' y='20' width='30' height='60' fill='#8b5cf6'/><line x1='10' y1='80' x2='240' y2='80' stroke='#64748b' stroke-width='2'/></svg></div>",
        options: ["85", "80", "90", "75"],
        correctAnswer: 0,
        hint: "הממוצע מחושב על ידי חיבור כל הנתונים וחלוקת הסכום במספר הנתונים הכולל (4).",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים בנוסחת הממוצע החשבוני.", math_expression: "\\bar{x} = \\dfrac{70 + 80 + 90 + 100}{4}" },
            { verbal_explanation: "שלב 2: סכימת המספרים במונה.", math_expression: "x = 340" },
            { verbal_explanation: "שלב 3: כתיבת השבר במלואו לפני חילוק.", math_expression: "\\bar{x} = \\dfrac{340}{4}" },
            { verbal_explanation: "שלב 4: ביצוע פעולת החילוק של שלוש מאות וארבעים בארבע.", math_expression: "\\bar{x} = 85" },
            { verbal_explanation: "שלב 5: התוצאה הסופית של הממוצע.", math_expression: "85" }
        ],
        final_answer: "85"
    },

    // שאלה מספר 22
    {
        topic: "probability_stats_35371",
        subTopic: "מדדי מרכז (ממוצע, חציון, שכיח)",
        question_text: "מהו החציון של קבוצת הנתונים האי-זוגית הבאה: 12, 14, 18, 20, 22? (הקבוצה כבר מסודרת בסדר עולה).&rlm;",
        options: ["18", "16", "14", "20"],
        correctAnswer: 0,
        hint: "החציון הוא המספר שנמצא בדיוק באמצע הרשימה המסודרת.",
        solution_steps: [
            { verbal_explanation: "שלב 1: ספירת כמות הנתונים.", math_expression: "n = 5" },
            { verbal_explanation: "שלב 2: שימוש בנוסחה למיקום החציון.", math_expression: "x = \\dfrac{5 + 1}{2}" },
            { verbal_explanation: "שלב 3: חישוב המיקום בתוך הרשימה.", math_expression: "x = 3" },
            { verbal_explanation: "שלב 4: איתור הנתון הנמצא במקום השלישי ברשימה המסודרת.", math_expression: "M_e = 18" },
            { verbal_explanation: "שלב 5: ציון התשובה הנבחרת.", math_expression: "18" }
        ],
        final_answer: "18"
    },

    // שאלה מספר 23
    {
        topic: "probability_stats_35371",
        subTopic: "מדדי מרכז (ממוצע, חציון, שכיח)",
        question_text: "מצאו את החציון של סדרת המספרים הזוגית הבאה: 2, 4, 8, 10.&rlm;",
        options: ["6", "4", "8", "5"],
        correctAnswer: 0,
        hint: "בסדרה זוגית עושים ממוצע חשבוני של שני המספרים האמצעיים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: אימות שהרשימה מסודרת וספירת הנתונים.", math_expression: "n = 4" },
            { verbal_explanation: "שלב 2: מציאת המיקום של שני המספרים האמצעיים.", math_expression: "x = 2 \\quad , \\quad y = 3" },
            { verbal_explanation: "שלב 3: זיהוי המספרים במיקומים אלו מתוך הרשימה.", math_expression: "n_2 = 4 \\quad , \\quad n_3 = 8" },
            { verbal_explanation: "שלב 4: חישוב הממוצע של שני מספרים אלו למציאת החציון.", math_expression: "M_e = \\dfrac{4 + 8}{2}" },
            { verbal_explanation: "שלב 5: סכימה במונה.", math_expression: "M_e = \\dfrac{12}{2}" },
            { verbal_explanation: "שלב 6: חלוקה לקבלת התוצאה.", math_expression: "M_e = 6" }
        ],
        final_answer: "6"
    },

    // שאלה מספר 24
    {
        topic: "probability_stats_35371",
        subTopic: "מדדי מרכז (ממוצע, חציון, שכיח)",
        question_text: "נתונה קבוצת מספרים: 5, 5, 6, 7, 7, 7, 8. מהו השכיח של קבוצה זו?&rlm;",
        options: ["7", "5", "6", "8"],
        correctAnswer: 0,
        hint: "השכיח הוא הערך שמופיע הכי הרבה פעמים בקבוצת הנתונים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: ספירת השכיחות של כל ערך ברשימה.", math_expression: "n_5 = 2 \\quad , \\quad n_7 = 3" },
            { verbal_explanation: "שלב 2: איתור השכיחות הגבוהה ביותר המקושרת לערך המתאים.", math_expression: "x = 3 \\Rightarrow y = 7" },
            { verbal_explanation: "שלב 3: התשובה הישירה.", math_expression: "7" }
        ],
        final_answer: "7"
    },

    // שאלה מספר 25
    {
        topic: "probability_stats_35371",
        subTopic: "מדדי מרכז (ממוצע, חציון, שכיח)",
        question_text: "בטבלת שכיחויות נתון: הציון 6 מופיע פעמיים, והציון 7 מופיע 3 פעמים. חשבו את ממוצע הציונים בקבוצה זו.&rlm;",
        options: ["6.6", "6.5", "7", "6.8"],
        correctAnswer: 0,
        hint: "הכפילו כל ציון בשכיחות שלו, חברו את התוצאות, וחלקו בסך הכל התלמידים (5).",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב סך הכל מספר הנתונים בטבלה.", math_expression: "n = 2 + 3 = 5" },
            { verbal_explanation: "שלב 2: בניית המונה על ידי הכפלת כל ערך בשכיחותו.", math_expression: "x = 6 \\times 2 + 7 \\times 3" },
            { verbal_explanation: "שלב 3: ביצוע כפל ראשון ושני.", math_expression: "x = 12 + 21" },
            { verbal_explanation: "שלב 4: חיבור התוצאות במונה.", math_expression: "x = 33" },
            { verbal_explanation: "שלב 5: חלוקת סכום הערכים במספר הנתונים הכולל.", math_expression: "\\bar{x} = \\dfrac{33}{5}" },
            { verbal_explanation: "שלב 6: קבלת הממוצע העשרוני.", math_expression: "\\bar{x} = 6.6" }
        ],
        final_answer: "6.6"
    },

    // שאלה מספר 26
    {
        topic: "probability_stats_35371",
        subTopic: "מדדי מרכז (ממוצע, חציון, שכיח)",
        question_text: "ממוצע הציונים של תלמיד ב-3 מבחנים הוא 80. במבחן הרביעי הוא קיבל ציון 100. מהו הממוצע החדש שלו בארבעת המבחנים?&rlm;",
        options: ["85", "80", "90", "95"],
        correctAnswer: 0,
        hint: "חשבו את סכום הציונים של 3 המבחנים (3 כפול 80). הוסיפו 100 וחלקו הכל ב-4.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת סכום הציונים המקורי מתוך הממוצע הישן.", math_expression: "x = 3 \\times 80 = 240" },
            { verbal_explanation: "שלב 2: הוספת הציון החדש לסכום הכולל.", math_expression: "y = 240 + 100" },
            { verbal_explanation: "שלב 3: חישוב הסכום החדש.", math_expression: "y = 340" },
            { verbal_explanation: "שלב 4: חלוקת הסכום המעודכן במספר המבחנים החדש למציאת הממוצע.", math_expression: "\\bar{x} = \\dfrac{340}{4}" },
            { verbal_explanation: "שלב 5: ביצוע החלוקה.", math_expression: "\\bar{x} = 85" },
            { verbal_explanation: "שלב 6: התוצאה להקלדה.", math_expression: "85" }
        ],
        final_answer: "85"
    },

    // שאלה מספר 27
    {
        topic: "probability_stats_35371",
        subTopic: "מדדי מרכז (ממוצע, חציון, שכיח)",
        question_text: "ממוצע של קבוצת מספרים הוא 50. אם נוסיף בדיוק את המספר 5 לכל אחד מהנתונים בקבוצה, מה יהיה הממוצע החדש?&rlm;",
        options: ["55", "50", "250", "45"],
        correctAnswer: 0,
        hint: "הזזה של כל הנתונים בקבוע מסוים גוררת את הממוצע לאותו כיוון בדיוק ובאותו הערך.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצגת התכונה המתמטית של הוספת קבוע לכל איברי המדגם.", math_expression: "y = x + c" },
            { verbal_explanation: "שלב 2: הצבת הנתונים מתוך השאלה.", math_expression: "\\bar{x} = 50 + 5" },
            { verbal_explanation: "שלב 3: ביצוע פעולת החיבור הפשוטה.", math_expression: "\\bar{x} = 55" },
            { verbal_explanation: "שלב 4: המסקנה הברורה והישירה.", math_expression: "55" }
        ],
        final_answer: "55"
    },

    // שאלה מספר 28
    {
        topic: "probability_stats_35371",
        subTopic: "מדדי מרכז (ממוצע, חציון, שכיח)",
        question_text: "ממוצע של קבוצת מספרים הוא 10. כופלים כל מספר בקבוצה פי 2. מה יהיה הממוצע החדש של הקבוצה?&rlm;",
        options: ["20", "10", "12", "5"],
        correctAnswer: 0,
        hint: "הכפלה של כל נתון בקבוע תכפיל את הממוצע הכללי באותו קבוע בדיוק.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצגת התכונה המתמטית של הכפלת כל איברי המדגם בקבוע.", math_expression: "y = x \\times c" },
            { verbal_explanation: "שלב 2: הצבת הנתונים מהשאלה לתוך המשוואה.", math_expression: "\\bar{x} = 10 \\times 2" },
            { verbal_explanation: "שלב 3: ביצוע פעולת הכפל.", math_expression: "\\bar{x} = 20" },
            { verbal_explanation: "שלב 4: התשובה הישירה בחלופות.", math_expression: "20" }
        ],
        final_answer: "20"
    },

    // שאלה מספר 29
    {
        topic: "probability_stats_35371",
        subTopic: "מדדי מרכז (ממוצע, חציון, שכיח)",
        question_text: "קבוצת נתונים מונה 100 משכורות רגילות. פתאום מוסיפים לקבוצה משכורת אחת חריגה במיוחד (מיליון שקלים). איזה מדד מרכזי יושפע הכי מעט מכך ויישאר אמין לייצוג הקבוצה?&rlm;",
        options: ["חציון", "ממוצע", "טווח", "אף אחד מהם"],
        correctAnswer: 0,
        hint: "החציון מתחשב רק במיקום המספר האמצעי ולא בגודל הקצוות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בחינת מבנה הנתונים ואיתור ערך קיצוני אחד בולט.", math_expression: "x = 1000000" },
            { verbal_explanation: "שלב 2: ניתוח תכונת הממוצע - מושפע מאוד מחריגים.", math_expression: "\\bar{x}" },
            { verbal_explanation: "שלב 3: ניתוח תכונת החציון - מתעלם מגודל הקצוות ונשאר באזור הטיפוסי.", math_expression: "M_e" },
            { verbal_explanation: "שלב 4: בחירת התשובה העיונית הנכונה.", math_expression: "1" }
        ],
        final_answer: "חציון"
    },

    // שאלה מספר 30
    {
        topic: "probability_stats_35371",
        subTopic: "מדדי מרכז (ממוצע, חציון, שכיח)",
        question_text: "בטבלת ציונים, סכום השכיחויות הוא 20. הממוצע של הכיתה כולה הוא 8. מהו סכום כל הציונים של כל התלמידים יחד?&rlm;",
        options: ["160", "2.5", "28", "12"],
        correctAnswer: 0,
        hint: "הכפילו את הממוצע במספר התלמידים כדי למצוא את סכום הציונים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים בנוסחת הממוצע.", math_expression: "8 = \\dfrac{x}{20}" },
            { verbal_explanation: "שלב 2: הכפלת המשוואה במכנה כדי לבודד את סכום הציונים.", math_expression: "x = 8 \\times 20" },
            { verbal_explanation: "שלב 3: ביצוע פעולת הכפל.", math_expression: "x = 160" },
            { verbal_explanation: "שלב 4: התשובה המבוקשת.", math_expression: "160" }
        ],
        final_answer: "160"
    },

    // ==========================================
    // תת נושא 8: מדדי פיזור (טווח, שונות, סטיית תקן) (10 שאלות)
    // ==========================================

    // שאלה מספר 31
    {
        topic: "probability_stats_35371",
        subTopic: "מדדי פיזור (טווח, שונות, סטיית תקן)",
        question_text: "נתונה קבוצת מספרים פשוטה: 1, 5, 10. מהו הטווח של קבוצת נתונים זו?&rlm;",
        options: ["9", "4", "5", "10"],
        correctAnswer: 0,
        hint: "הטווח מחושב כהפרש בין המספר הגדול ביותר למספר הקטן ביותר בקבוצה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: איתור הערך המינימלי.", math_expression: "x = 1" },
            { verbal_explanation: "שלב 2: איתור הערך המקסימלי.", math_expression: "y = 10" },
            { verbal_explanation: "שלב 3: שימוש בנוסחת הטווח.", math_expression: "R = y - x" },
            { verbal_explanation: "שלב 4: הצבת המספרים אל תוך הנוסחה.", math_expression: "R = 10 - 1" },
            { verbal_explanation: "שלב 5: חישוב החיסור לקבלת המדד.", math_expression: "R = 9" },
            { verbal_explanation: "שלב 6: בחירת התשובה המתאימה.", math_expression: "9" }
        ],
        final_answer: "9"
    },

    // שאלה מספר 32
    {
        topic: "probability_stats_35371",
        subTopic: "מדדי פיזור (טווח, שונות, סטיית תקן)",
        question_text: "באנליזה סטטיסטית, חושבה שונות של 16. מהי סטיית התקן של קבוצה זו?&rlm;",
        options: ["4", "256", "8", "32"],
        correctAnswer: 0,
        hint: "סטיית תקן היא תמיד השורש הריבועי של השונות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצגת הקשר המתמטי בין שונות לסטיית תקן.", math_expression: "S = \\sqrt{x}" },
            { verbal_explanation: "שלב 2: הצבת הערך הנתון של השונות לתוך המשוואה.", math_expression: "S = \\sqrt{16}" },
            { verbal_explanation: "שלב 3: הפעלת שורש ריבועי.", math_expression: "S = 4" },
            { verbal_explanation: "שלב 4: התשובה הישירה הנובעת מהחישוב.", math_expression: "4" }
        ],
        final_answer: "4"
    },

    // שאלה מספר 33
    {
        topic: "probability_stats_35371",
        subTopic: "מדדי פיזור (טווח, שונות, סטיית תקן)",
        question_text: "לקבוצת נתונים יש סטיית תקן של 4. הוספו 10 נקודות לכל אחד מהציונים בקבוצה. מה תהיה סטיית התקן החדשה?&rlm;",
        options: ["4", "14", "140", "40"],
        correctAnswer: 0,
        hint: "הוספת מספר קבוע מכל הנתונים לא משנה את המרחק והפיזור ביניהם כלל. לכן סטיית התקן אינה משתנה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בחינת ההשפעה של הזזה קבועה על מדדי פיזור.", math_expression: "y = x + c" },
            { verbal_explanation: "שלב 2: מכיוון שכל הנתונים זזים יחד באותה מידה, הפיזור היחסי ביניהם נשמר במדויק.", math_expression: "S = S" },
            { verbal_explanation: "שלב 3: המסקנה היא שסטיית התקן נותרת ללא שינוי.", math_expression: "S = 4" },
            { verbal_explanation: "שלב 4: הרישום לבחירה במערכת.", math_expression: "4" }
        ],
        final_answer: "4"
    },

    // שאלה מספר 34
    {
        topic: "probability_stats_35371",
        subTopic: "מדדי פיזור (טווח, שונות, סטיית תקן)",
        question_text: "לקבוצת נתונים יש סטיית תקן של 2. הוחלט לכפול כל נתון בקבוצה פי 3. מה תהיה סטיית התקן החדשה של הקבוצה?&rlm;",
        options: ["6", "2", "9", "18"],
        correctAnswer: 0,
        hint: "בניגוד לחיבור, כשכופלים את הנתונים בקבוע, הפיזור שלהם מורחב באותו קבוע בדיוק. הכפילו את סטיית התקן ב-3.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצגת התכונה המתמטית של כפל בקבוע על סטיית התקן.", math_expression: "y = S \\times c" },
            { verbal_explanation: "שלב 2: הצבת הנתונים מהשאלה לתוך המשוואה.", math_expression: "y = 2 \\times 3" },
            { verbal_explanation: "שלב 3: ביצוע פעולת הכפל.", math_expression: "y = 6" },
            { verbal_explanation: "שלב 4: הפתרון המבוקש.", math_expression: "6" }
        ],
        final_answer: "6"
    },

    // שאלה מספר 35
    {
        topic: "probability_stats_35371",
        subTopic: "מדדי פיזור (טווח, שונות, סטיית תקן)",
        question_text: "בבחינה, כל תלמידי הכיתה קיבלו בדיוק את אותו הציון: 80. מהי סטיית התקן של הציונים בכיתה זו?&rlm;",
        options: ["0", "80", "1", "לא ניתן לדעת"],
        correctAnswer: 0,
        hint: "סטיית תקן מודדת את הפיזור. אם כולם קיבלו אותו ציון, אין שום פיזור.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בחינת הנתונים והסקת הממוצע.", math_expression: "\\bar{x} = 80" },
            { verbal_explanation: "שלב 2: חישוב המרחק של כל נתון מהממוצע.", math_expression: "x - \\bar{x} = 80 - 80 = 0" },
            { verbal_explanation: "שלב 3: מכיוון שכל הסטיות הן אפס, השונות היא אפס וגם השורש שלה הוא אפס.", math_expression: "S = 0" },
            { verbal_explanation: "שלב 4: המסקנה היא שאין פיזור.", math_expression: "0" }
        ],
        final_answer: "0"
    },

    // שאלה מספר 36
    {
        topic: "probability_stats_35371",
        subTopic: "מדדי פיזור (טווח, שונות, סטיית תקן)",
        question_text: "סטיית התקן היא מדד שנועד להעריך את רמת הפיזור והמרחק הממוצע של הנתונים סביב איזה מדד מרכזי?&rlm;",
        options: ["הממוצע", "החציון", "השכיח", "הטווח"],
        correctAnswer: 0,
        hint: "נוסחת סטיית התקן כוללת חיסור של מדד מסוים מכל נתון. מדד זה הוא המוכר ביותר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בחינת נוסחת סטיית התקן המוכרת בסטטיסטיקה.", math_expression: "S = \\sqrt{\\dfrac{\\Sigma(x - \\bar{x})^{2}}{n}}" },
            { verbal_explanation: "שלב 2: זיהוי האיבר שאליו מושווים הנתונים בנוסחה.", math_expression: "\\bar{x}" },
            { verbal_explanation: "שלב 3: איבר זה מייצג את הממוצע החשבוני.", math_expression: "1" },
            { verbal_explanation: "שלב 4: התאמה לאפשרות בתשובות העיוניות.", math_expression: "1" }
        ],
        final_answer: "הממוצע"
    },

    // שאלה מספר 37
    {
        topic: "probability_stats_35371",
        subTopic: "מדדי פיזור (טווח, שונות, סטיית תקן)",
        question_text: "השונות של סדרת נתונים מסוימת נמצאה כשווה ל-25. מהי סטיית התקן של סדרה זו?&rlm;",
        options: ["5", "625", "12.5", "50"],
        correctAnswer: 0,
        hint: "כמו שראינו, יש להוציא שורש ריבועי מהשונות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצגת הקשר בין המשתנים שוב לביסוס ההבנה.", math_expression: "S = \\sqrt{y}" },
            { verbal_explanation: "שלב 2: הצבת הערך הנתון בתוך השורש.", math_expression: "S = \\sqrt{25}" },
            { verbal_explanation: "שלב 3: חישוב התוצאה המוכרת.", math_expression: "S = 5" },
            { verbal_explanation: "שלב 4: הרישום לבדיקה.", math_expression: "5" }
        ],
        final_answer: "5"
    },

    // שאלה מספר 38
    {
        topic: "probability_stats_35371",
        subTopic: "מדדי פיזור (טווח, שונות, סטיית תקן)",
        question_text: "ידוע שטווח הנתונים של קבוצה הוא 20. הערך המינימלי בקבוצה הוא 5. מהו הערך המקסימלי?&rlm;",
        options: ["25", "15", "100", "4"],
        correctAnswer: 0,
        hint: "הטווח הוא המקסימום פחות המינימום. לכן, המקסימום שווה לטווח ועוד המינימום.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת משוואת הטווח הכללית.", math_expression: "R = y - x" },
            { verbal_explanation: "שלב 2: הצבת הנתונים הידועים למשוואה.", math_expression: "20 = y - 5" },
            { verbal_explanation: "שלב 3: בידוד הערך המקסימלי על ידי הוספת חמש לשני האגפים.", math_expression: "y = 20 + 5" },
            { verbal_explanation: "שלב 4: ביצוע החיבור.", math_expression: "y = 25" },
            { verbal_explanation: "שלב 5: התשובה הישירה בחלופות.", math_expression: "25" }
        ],
        final_answer: "25"
    },

    // שאלה מספר 39
    {
        topic: "probability_stats_35371",
        subTopic: "מדדי פיזור (טווח, שונות, סטיית תקן)",
        question_text: "הביטו בשתי קבוצות של מספרים. קבוצה א': (5, 5, 5). קבוצה ב': (0, 5, 10). ללא צורך בחישוב מדויק, לאיזו קבוצה יש סטיית תקן גדולה יותר?&rlm;",
        options: ["קבוצה ב'", "קבוצה א'", "סטיית התקן שווה", "לא ניתן להעריך"],
        correctAnswer: 0,
        hint: "סטיית התקן מודדת את הפיזור. באיזו קבוצה המספרים רחוקים יותר מהממוצע?",
        solution_steps: [
            { verbal_explanation: "שלב 1: ניתוח קבוצה א'. המספרים זהים ולכן הפיזור אפסי.", math_expression: "S_{A} = 0" },
            { verbal_explanation: "שלב 2: ניתוח קבוצה ב'. הממוצע הוא גם חמש, אך המספרים רחוקים ממנו ולכן קיים פיזור.", math_expression: "S_{B} > 0" },
            { verbal_explanation: "שלב 3: השוואת התוצאות.", math_expression: "S_{B} > S_{A}" },
            { verbal_explanation: "שלב 4: מסקנה על קבוצה ב'.", math_expression: "1" },
            { verbal_explanation: "שלב 5: בחירת התשובה העיונית המתאימה.", math_expression: "1" }
        ],
        final_answer: "קבוצה ב'"
    },

    // שאלה מספר 40
    {
        topic: "probability_stats_35371",
        subTopic: "מדדי פיזור (טווח, שונות, סטיית תקן)",
        question_text: "כיצד צפויה להשפיע הוספה של נתון חריג מאוד (קיצוני) לקבוצת נתונים על סטיית התקן של הקבוצה?&rlm;",
        options: ["תגדיל אותה", "תקטין אותה", "לא תשפיע עליה", "תאפס אותה"],
        correctAnswer: 0,
        hint: "נתון חריג נמצא במרחק רב מהממוצע, ולכן תורם מספר גדול לנוסחת החישוב של סטיית התקן.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הבנת המשמעות של נתון חריג. המרחק שלו מהממוצע ענק.", math_expression: "(x - \\bar{x})^{2}" },
            { verbal_explanation: "שלב 2: כאשר מוסיפים מספר גדול למונה, הערך הכולל עולה.", math_expression: "S > 0" },
            { verbal_explanation: "שלב 3: המסקנה היא שנתון קיצוני מנפח את הפיזור ולכן מגדיל את סטיית התקן.", math_expression: "1" },
            { verbal_explanation: "שלב 4: התשובה הישירה בחלופות العיוניות.", math_expression: "1" }
        ],
        final_answer: "תגדיל אותה"
    },
    // ==========================================
    // תת נושא 9: תיאור נתונים בטבלאות וגרפים (10 שאלות)
    // ==========================================

    // שאלה מספר 1
    {
        topic: "probability_stats_35371",
        subTopic: "תיאור נתונים בטבלאות וגרפים",
        question_text: "בטבלת שכיחויות נתונים הציונים של קבוצת תלמידים: הציון 6 התקבל 2 פעמים, הציון 7 התקבל 5 פעמים, והציון 8 התקבל 3 פעמים. חשבו את ממוצע הציונים בקבוצה זו.&rlm;",
        options: ["7.1", "7", "7.5", "6.8"],
        correctAnswer: 0,
        hint: "הממוצע מחושב על ידי הכפלת כל ציון בשכיחות שלו, חיבור כל התוצאות, וחלוקה בסך הכל של התלמידים (סכום השכיחויות).",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב מספר התלמידים הכולל (סכום השכיחויות).", math_expression: "n = 2 + 5 + 3 = 10" },
            { verbal_explanation: "שלב 2: הכפלת כל ציון במספר התלמידים שקיבלו אותו וסכימה (חישוב המונה).", math_expression: "x = 6 \\times 2 + 7 \\times 5 + 8 \\times 3" },
            { verbal_explanation: "שלב 3: ביצוע פעולות הכפל.", math_expression: "x = 12 + 35 + 24" },
            { verbal_explanation: "שלב 4: חיבור כל התוצאות לקבלת סך כל הציונים.", math_expression: "x = 71" },
            { verbal_explanation: "שלב 5: הצבה בנוסחת הממוצע החשבוני.", math_expression: "\\bar{x} = \\dfrac{71}{10}" },
            { verbal_explanation: "שלב 6: חלוקה בעשר לקבלת מספר עשרוני.", math_expression: "\\bar{x} = 7.1" }
        ],
        final_answer: "7.1"
    },

    // שאלה מספר 2
    {
        topic: "probability_stats_35371",
        subTopic: "תיאור נתונים בטבלאות וגרפים",
        question_text: "באותה טבלת ציונים (ציון 6: 2 תלמידים, ציון 7: 5 תלמידים, ציון 8: 3 תלמידים). מהו חציון הציונים בקבוצה זו?&rlm;",
        options: ["7", "7.5", "6.5", "8"],
        correctAnswer: 0,
        hint: "החציון הוא הערך הנמצא באמצע לאחר סידור הנתונים. ישנם 10 נתונים, לכן החציון הוא הממוצע של הנתון החמישי והשישי.",
        solution_steps: [
            { verbal_explanation: "שלב 1: קביעת מספר הנתונים הכולל בטבלה.", math_expression: "n = 10" },
            { verbal_explanation: "שלב 2: מציאת מיקום החציון עבור קבוצה זוגית של נתונים (בין האיבר החמישי לשישי).", math_expression: "L = \\dfrac{10 + 1}{2} = 5.5" },
            { verbal_explanation: "שלב 3: זיהוי הערך של האיבר החמישי ברשימה המסודרת (הוא נופל בתוך קבוצת הציון שבע).", math_expression: "x_{5} = 7" },
            { verbal_explanation: "שלב 4: זיהוי הערך של האיבר השישי (גם הוא נופל בקבוצת השבע).", math_expression: "x_{6} = 7" },
            { verbal_explanation: "שלב 5: חישוב ממוצע שני האיברים (ממוצע של שני מספרים זהים הוא המספר עצמו).", math_expression: "M_e = \\dfrac{7 + 7}{2} = 7" }
        ],
        final_answer: "7"
    },

    // שאלה מספר 3
    {
        topic: "probability_stats_35371",
        subTopic: "תיאור נתונים בטבלאות וגרפים",
        question_text: "בטבלת נתונים, הציון 70 הופיע פעמיים, הציון 80 הופיע x פעמים, והציון 90 הופיע 4 פעמים. ידוע שממוצע הציונים הוא 82. מצאו את הנעלם x (מספר התלמידים שקיבלו 80).&rlm;",
        options: ["4", "3", "5", "6"],
        correctAnswer: 0,
        hint: "סכום השכיחויות הוא איקס פלוס 6. בנו משוואה שבה סך כל הציונים (המונה) חלקי סכום השכיחויות (המכנה) שווה ל-82.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת סך כל הנתונים בטבלה כביטוי אלגברי.", math_expression: "n = 6 + x" },
            { verbal_explanation: "שלב 2: בניית המשוואה של הממוצע כאשר האיקס הוא הנעלם.", math_expression: "82 = \\dfrac{70 \\times 2 + 80 \\times x + 90 \\times 4}{6 + x}" },
            { verbal_explanation: "שלב 3: פישוט המונה והכפלת שני אגפי המשוואה במכנה.", math_expression: "82 \\times (6 + x) = 140 + 80x + 360" },
            { verbal_explanation: "שלב 4: פתיחת סוגריים וכינוס איברים.", math_expression: "492 + 82x = 500 + 80x" },
            { verbal_explanation: "שלב 5: העברת המשתנים שמאלה והמספרים ימינה.", math_expression: "2x = 8" },
            { verbal_explanation: "שלב 6: חלוקת המשוואה בשתיים לבידוד הנעלם.", math_expression: "x = 4" }
        ],
        final_answer: "4"
    },

    // שאלה מספר 4
    {
        topic: "probability_stats_35371",
        subTopic: "תיאור נתונים בטבלאות וגרפים",
        question_text: "לפניכם דיאגרמת מקלות המציגה את מספר הילדים במשפחה בבניין מגורים. ציר ה-x מייצג את מספר הילדים, וציר ה-y מייצג את השכיחות (מספר המשפחות). מהו השכיח בבניין זה?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 250 150' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='30' y1='120' x2='230' y2='120' stroke='#64748b' stroke-width='2'/><line x1='30' y1='20' x2='30' y2='120' stroke='#64748b' stroke-width='2'/><rect x='50' y='70' width='20' height='50' fill='#3b82f6'/><text x='55' y='135' font-size='12' fill='#334155'>1</text><text x='55' y='65' font-size='10' fill='#3b82f6'>5</text><rect x='100' y='40' width='20' height='80' fill='#3b82f6'/><text x='105' y='135' font-size='12' fill='#334155'>2</text><text x='105' y='35' font-size='10' fill='#3b82f6'>8</text><rect x='150' y='70' width='20' height='50' fill='#3b82f6'/><text x='155' y='135' font-size='12' fill='#334155'>3</text><text x='155' y='65' font-size='10' fill='#3b82f6'>5</text><rect x='200' y='100' width='20' height='20' fill='#3b82f6'/><text x='205' y='135' font-size='12' fill='#334155'>4</text><text x='205' y='95' font-size='10' fill='#3b82f6'>2</text></svg></div>",
        options: ["2", "8", "3", "1"],
        correctAnswer: 0,
        hint: "השכיח הוא הערך שמופיע מספר הפעמים הרב ביותר (המקל הגבוה ביותר בדיאגרמה). זהירות לא לבלבל בין השכיח עצמו (2) לשכיחות שלו (8).",
        solution_steps: [
            { verbal_explanation: "שלב 1: התבוננות בגרף לאיתור המקל הגבוה ביותר המייצג את השכיחות המקסימלית.", math_expression: "f_{max} = 8" },
            { verbal_explanation: "שלב 2: קריאת הערך המקביל על ציר האיקס, שהוא המשתנה שלנו.", math_expression: "x = 2" },
            { verbal_explanation: "שלב 3: המסקנה היא שהערך השכיח בקבוצת נתונים זו הוא שתיים.", math_expression: "2" }
        ],
        final_answer: "2"
    },

    // שאלה מספר 5
    {
        topic: "probability_stats_35371",
        subTopic: "תיאור נתונים בטבלאות וגרפים",
        question_text: "על פי אותה דיאגרמת מקלות מהשאלה הקודמת (1 ילד: 5 משפחות, 2 ילדים: 8 משפחות, 3 ילדים: 5 משפחות, 4 ילדים: 2 משפחות). מהו ממוצע הילדים למשפחה בבניין זה?&rlm;",
        options: ["2.2", "2.5", "2", "2.4"],
        correctAnswer: 0,
        hint: "קראו את הנתונים מהגרף כאילו זו טבלה. הכפילו כל מספר ילדים במספר המשפחות שלו, סכמו, וחלקו בסך הכל המשפחות בבניין.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב מספר המשפחות הכולל במדגם מתוך עמודות הגרף.", math_expression: "n = 5 + 8 + 5 + 2 = 20" },
            { verbal_explanation: "שלב 2: חישוב המונה של הממוצע (סך הכל הילדים בכל הבניין).", math_expression: "x = 1 \\times 5 + 2 \\times 8 + 3 \\times 5 + 4 \\times 2" },
            { verbal_explanation: "שלב 3: ביצוע פעולות הכפל.", math_expression: "x = 5 + 16 + 15 + 8" },
            { verbal_explanation: "שלב 4: חיבור התוצאות למונה.", math_expression: "x = 44" },
            { verbal_explanation: "שלב 5: חלוקת סך הילדים במספר המשפחות.", math_expression: "\\bar{x} = \\dfrac{44}{20}" },
            { verbal_explanation: "שלב 6: התוצאה הסופית והמעוגלת.", math_expression: "\\bar{x} = 2.2" }
        ],
        final_answer: "2.2"
    },

    // שאלה מספר 6
    {
        topic: "probability_stats_35371",
        subTopic: "תיאור נתונים בטבלאות וגרפים",
        question_text: "בסקר על צבע אהוב, נאספו הנתונים הבאים לתוך טבלה: אדום - 15 אנשים, כחול - 25 אנשים, ירוק - 10 אנשים. מהי השכיחות היחסית באחוזים של הצבע הכחול?&rlm;",
        options: ["50", "25", "40", "30"],
        correctAnswer: 0,
        hint: "שכיחות יחסית היא השכיחות של הפריט חלקי סך הכל השכיחויות. להמרה לאחוזים, הכפילו במאה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: סכימת כמות האנשים הכוללת שהשתתפה בסקר.", math_expression: "n = 15 + 25 + 10 = 50" },
            { verbal_explanation: "שלב 2: זיהוי השכיחות הרגילה של הפריט המבוקש (כחול).", math_expression: "f = 25" },
            { verbal_explanation: "שלב 3: חישוב השכיחות היחסית על ידי בניית השבר.", math_expression: "P = \\dfrac{25}{50}" },
            { verbal_explanation: "שלב 4: המרה לשבר עשרוני.", math_expression: "P = 0.5" },
            { verbal_explanation: "שלב 5: הכפלת השבר העשרוני במאה כדי לקבל הצגה של אחוזים.", math_expression: "x = 0.5 \\times 100 = 50" },
            { verbal_explanation: "שלב 6: הרישום לבדיקה.", math_expression: "50" }
        ],
        final_answer: "50"
    },

    // שאלה מספר 7
    {
        topic: "probability_stats_35371",
        subTopic: "תיאור נתונים בטבלאות וגרפים",
        question_text: "בכיתה י'1 יש 20 תלמידים וממוצע הציונים שלהם הוא 70. בכיתה י'2 יש 30 תלמידים וממוצע הציונים שלהם הוא 80. מחברים את שתי הכיתות לטבלה אחת ארוכה. מהו הממוצע הכולל של שכבת י'?&rlm;",
        options: ["76", "75", "74", "78"],
        correctAnswer: 0,
        hint: "זהו ממוצע משוקלל. לא עושים ממוצע רגיל של 70 ו-80. חשבו את סך כל הנקודות של כיתה י'1, הוסיפו לסך כל הנקודות של י'2, וחלקו במספר התלמידים הכולל (50).",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב מספר התלמידים המשותף של שתי הכיתות גם יחד.", math_expression: "n = 20 + 30 = 50" },
            { verbal_explanation: "שלב 2: חישוב המונה - סך כל הנקודות של כל התלמידים משתי הכיתות.", math_expression: "x = 20 \\times 70 + 30 \\times 80" },
            { verbal_explanation: "שלב 3: ביצוע פעולות הכפל.", math_expression: "x = 1400 + 2400" },
            { verbal_explanation: "שלב 4: סיכום המונה לקראת חלוקה.", math_expression: "x = 3800" },
            { verbal_explanation: "שלב 5: חלוקת המונה במכנה (סך התלמידים הכללי) למציאת הממוצע המשוקלל.", math_expression: "\\bar{x} = \\dfrac{3800}{50}" },
            { verbal_explanation: "שלב 6: צמצום וחישוב המנה.", math_expression: "\\bar{x} = 76" }
        ],
        final_answer: "76"
    },

    // שאלה מספר 8
    {
        topic: "probability_stats_35371",
        subTopic: "תיאור נתונים בטבלאות וגרפים",
        question_text: "בטבלה מפורט מספר המכוניות למשפחה בישוב קטן: 0 מכוניות ל-5 משפחות, 1 מכונית ל-15 משפחות, ו-2 מכוניות ל-10 משפחות. אם נבחר משפחה באקראי מתוך הטבלה, מה ההסתברות שיש לה לפחות מכונית אחת? (ענו בשבר פשוט מצומצם).&rlm;",
        options: ["5/6", "1/6", "1/2", "1/3"],
        correctAnswer: 0,
        hint: "לפחות מכונית אחת משמעו מכונית אחת או שתי מכוניות. חברו את מספר המשפחות הללו, וחלקו בסך הכל המשפחות בישוב.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב המדגם הכולל על ידי סכימת כל השכיחויות בטבלה.", math_expression: "n = 5 + 15 + 10 = 30" },
            { verbal_explanation: "שלב 2: מציאת מספר המשפחות העונות לתנאי 'לפחות אחת' (כלומר בעלות רכב אחד או שניים).", math_expression: "m = 15 + 10 = 25" },
            { verbal_explanation: "שלב 3: הרכבת שבר ההסתברות הרגיל.", math_expression: "P = \\dfrac{25}{30}" },
            { verbal_explanation: "שלב 4: צמצום השבר על ידי חלוקה של המונה והמכנה בחמש.", math_expression: "P = \\dfrac{5}{6}" },
            { verbal_explanation: "שלב 5: התשובה הישירה בחלופות.", math_expression: "5/6" }
        ],
        final_answer: "5/6"
    },

    // שאלה מספר 9
    {
        topic: "probability_stats_35371",
        subTopic: "תיאור נתונים בטבלאות וגרפים",
        question_text: "דיאגרמת מקלות מציגה את ציוני המבחן בכיתה: ציון 60 - 4 תלמידים, ציון 70 - 0 תלמידים, ציון 80 - 6 תלמידים. מהו חציון הציונים בכיתה זו?&rlm;",
        options: ["80", "70", "75", "60"],
        correctAnswer: 0,
        hint: "שכיחות של 0 אומרת שהציון לא קיים ברשימה. מצאו את מיקום החציון (בין האיבר ה-5 ל-6 מתוך 10) ובדקו מי מאכלס את המקומות הללו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב מספר התלמידים בכיתה מתוך עמודות הגרף (תוך התחשבות בעמודת האפס).", math_expression: "n = 4 + 0 + 6 = 10" },
            { verbal_explanation: "שלב 2: מציאת מיקום האיבר החציוני עבור קבוצה זוגית.", math_expression: "L = \\dfrac{10 + 1}{2} = 5.5" },
            { verbal_explanation: "שלב 3: ארבעת האיברים הראשונים בסדרה הם שישים. האיבר החמישי מתחיל את קבוצת השמונים.", math_expression: "x_{5} = 80" },
            { verbal_explanation: "שלב 4: גם האיבר השישי בסדרה שייך לקבוצת השמונים.", math_expression: "x_{6} = 80" },
            { verbal_explanation: "שלב 5: ממוצע שני האיברים הללו הוא המספר עצמו.", math_expression: "M_e = \\dfrac{80 + 80}{2} = 80" },
            { verbal_explanation: "שלב 6: המסקנה לרישום הפלט.", math_expression: "80" }
        ],
        final_answer: "80"
    },

    // שאלה מספר 10
    {
        topic: "probability_stats_35371",
        subTopic: "תיאור נתונים בטבלאות וגרפים",
        question_text: "טבלה מציגה את הגילאים של חברי מועדון שחמט: גיל 15 - 2 חברים, גיל 16 - 4 חברים, גיל 17 - 3 חברים. מהו הטווח של הגילאים במועדון זה?&rlm;",
        options: ["2", "17", "1", "3"],
        correctAnswer: 0,
        hint: "טווח מחושב כהפרש בין הערך הגדול ביותר של המשתנה (הגיל) לבין הערך הקטן ביותר שלו. התעלמו מהשכיחויות בחישוב זה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: איתור הערך המקסימלי של המשתנה (הגיל) בטבלה.", math_expression: "x_{max} = 17" },
            { verbal_explanation: "שלב 2: איתור הערך המינימלי של המשתנה בטבלה.", math_expression: "x_{min} = 15" },
            { verbal_explanation: "שלב 3: כתיבת נוסחת הטווח.", math_expression: "R = x_{max} - x_{min}" },
            { verbal_explanation: "שלב 4: הצבת המספרים וביצוע חיסור פשוט.", math_expression: "R = 17 - 15 = 2" },
            { verbal_explanation: "שלב 5: סיום התרגיל והזנת התשובה.", math_expression: "2" }
        ],
        final_answer: "2"
    }
];