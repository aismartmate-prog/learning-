// ========================================================================
// שכבת גיל: כיתה ח' | נושא: סטטיסטיקה והסתברות
// 4 תתי נושאים | 48 שאלות סה"כ
// פתרונות מפורטים צעד-אחר-צעד: חישובי ממוצע, חציון, והסתברויות.
// כתיבה נוקשה: חילוק ושברים מוצגים אך ורק בעזרת (:) או במילים! ללא לוכסנים.
// כולל איורי SVG (גרף עמודות, רולטה, קוביה). ללא LaTeX.
// ========================================================================

const questionsDB = [

    // ==========================================================
    // תת נושא 1: מרחב מדגם והסתברות קלאסית (12 שאלות)
    // ==========================================================
    
    // שאלה 1
    {
        topic: "statistics_probability",
        subTopic: "מרחב מדגם והסתברות קלאסית",
        question_text: "מהו 'מרחב המדגם' בזריקת קוביית משחק הוגנת ורגילה בעלת 6 פאות?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 100 100' width='80' height='80'><rect x='20' y='20' width='60' height='60' rx='10' fill='#fef08a' stroke='#ca8a04' stroke-width='3'/><circle cx='35' cy='35' r='5' fill='#0f172a'/><circle cx='65' cy='65' r='5' fill='#0f172a'/><circle cx='35' cy='65' r='5' fill='#0f172a'/><circle cx='65' cy='35' r='5' fill='#0f172a'/><circle cx='50' cy='50' r='5' fill='#0f172a'/></svg></div>",
        options: ["{1, 2, 3, 4, 5, 6}", "{1, 6}", "{2, 4, 6}", "{0, 1, 2, 3, 4, 5, 6}"],
        correctAnswer: 0,
        hint: "מרחב המדגם הוא קבוצת כל התוצאות האפשריות שיכולות לקרות. אילו מספרים מופיעים על הפאות של הקובייה?&rlm;",
        solution_steps: [
            { verbal_explanation: "מרחב מדגם הוא רשימה של כל האפשרויות שיכולות להתקבל בניסוי הסתברותי.&rlm;", math_expression: "" },
            { verbal_explanation: "בקוביית משחק סטנדרטית יש 6 פאות, ועליהן המספרים 1 עד 6.&rlm;", math_expression: "" },
            { verbal_explanation: "לכן, הקבוצה המכילה את כל האפשרויות היא המספרים מ-1 ועד 6.&rlm;", math_expression: "{1, 2, 3, 4, 5, 6}" }
        ],
        final_answer: "{1, 2, 3, 4, 5, 6}"
    },
    // שאלה 2
    {
        topic: "statistics_probability",
        subTopic: "מרחב מדגם והסתברות קלאסית",
        question_text: "בזריקת קובייה הוגנת, מהי ההסתברות לקבל את המספר 4?&rlm;",
        options: ["1 : 6 (שישית)", "4 : 6 (ארבע שישיות)", "1 : 4 (רבע)", "0.4"],
        correctAnswer: 0,
        hint: "הסתברות מחושבת כך: (מספר האפשרויות הרצויות) לחלק ב- (סך כל האפשרויות במרחב המדגם). כמה פעמים המספר 4 מופיע על הקובייה?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': סך כל התוצאות האפשריות (מרחב המדגם) הוא 6.&rlm;", math_expression: "Total = 6" },
            { verbal_explanation: "שלב ב': התוצאה הרצויה לנו (המספר 4) מופיעה על הקובייה פעם אחת בלבד.&rlm;", math_expression: "Wanted = 1" },
            { verbal_explanation: "שלב ג': ההסתברות היא יחס הרצוי לסך הכל (1 מתוך 6).&rlm;", math_expression: "1 : 6" }
        ],
        final_answer: "1 : 6 (שישית)"
    },
    // שאלה 3
    {
        topic: "statistics_probability",
        subTopic: "מרחב מדגם והסתברות קלאסית",
        question_text: "מהי ההסתברות לקבל מספר זוגי בזריקת קובייה הוגנת?&rlm;",
        options: ["3 : 6 (שזה בדיוק חצי)", "2 : 6", "4 : 6", "1 : 6"],
        correctAnswer: 0,
        hint: "כמה מספרים זוגיים יש בקובייה? רשמו אותם. (2, 4, 6). ספרו אותם וחלקו ב-6.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרשום את התוצאות הרצויות. המספרים הזוגיים בקובייה הם 2, 4 ו-6.&rlm;", math_expression: "{2, 4, 6}" },
            { verbal_explanation: "שלב ב': יש לנו 3 תוצאות רצויות מתוך סך הכל 6 תוצאות אפשריות.&rlm;", math_expression: "Wanted = 3 , Total = 6" },
            { verbal_explanation: "שלב ג': ההסתברות היא 3 מתוך 6. ניתן לצמצם יחס זה לחצי (1:2).&rlm;", math_expression: "3 : 6 = 1 : 2" }
        ],
        final_answer: "3 : 6 (שזה בדיוק חצי)"
    },
    // שאלה 4
    {
        topic: "statistics_probability",
        subTopic: "מרחב מדגם והסתברות קלאסית",
        question_text: "בשק יש 5 כדורים אדומים, 3 כדורים כחולים ו-2 כדורים צהובים. בוחרים כדור אחד באקראי (בלי להסתכל). מהי ההסתברות שהכדור שייבחר יהיה כחול?&rlm;",
        options: ["3 : 10", "3 : 5", "1 : 3", "2 : 10"],
        correctAnswer: 0,
        hint: "חשבו קודם כמה כדורים יש בסך הכל בשק (זהו המכנה). המונה הוא מספר הכדורים הכחולים.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את סך כל הכדורים בשק.&rlm;", math_expression: "5 + 3 + 2 = 10" },
            { verbal_explanation: "שלב ב': מספר התוצאות הרצויות (כדורים כחולים) הוא 3.&rlm;", math_expression: "Wanted = 3" },
            { verbal_explanation: "שלב ג': ההסתברות היא 3 חלקי סך הכל הכדורים (10).&rlm;", math_expression: "3 : 10" }
        ],
        final_answer: "3 : 10"
    },
    // שאלה 5
    {
        topic: "statistics_probability",
        subTopic: "מרחב מדגם והסתברות קלאסית",
        question_text: "זורקים מטבע הוגן פעמיים. מהו מרחב המדגם של הניסוי הזה? (עץ=ע, פלי=פ)&rlm;",
        options: ["{עע, עפ, פע, פפ}", "{ע, פ}", "{עע, פפ, עפ}", "{פעמיים עץ, פעמיים פלי}"],
        correctAnswer: 0,
        hint: "בזריקה הראשונה יש 2 אפשרויות. בשנייה יש 2 אפשרויות. סך הכל 2 כפול 2 שווה 4 אפשרויות. רשמו את כולן.&rlm;",
        solution_steps: [
            { verbal_explanation: "נרשום את כל התוצאות האפשריות של זריקת שני מטבעות ברצף.&rlm;", math_expression: "" },
            { verbal_explanation: "אפשרות 1: עץ בראשון ועץ בשני (עע).&rlm;", math_expression: "" },
            { verbal_explanation: "אפשרות 2: עץ בראשון ופלי בשני (עפ).&rlm;", math_expression: "" },
            { verbal_explanation: "אפשרות 3: פלי בראשון ועץ בשני (פע).&rlm;", math_expression: "" },
            { verbal_explanation: "אפשרות 4: פלי בראשון ופלי בשני (פפ).&rlm;", math_expression: "" },
            { verbal_explanation: "אלו בדיוק 4 אפשרויות ייחודיות.&rlm;", math_expression: "{עע, עפ, פע, פפ}" }
        ],
        final_answer: "{עע, עפ, פע, פפ}"
    },
    // שאלה 6
    {
        topic: "statistics_probability",
        subTopic: "מרחב מדגם והסתברות קלאסית",
        question_text: "בהמשך לשאלה הקודמת (זריקת מטבע פעמיים). מהי ההסתברות לקבל בדיוק פעם אחת 'עץ'?&rlm;",
        options: ["2 : 4 (שזה חצי)", "1 : 4", "3 : 4", "1 : 2 (אבל רק בגלל שיש מטבע אחד)"],
        correctAnswer: 0,
        hint: "הסתכלו על מרחב המדגם {עע, עפ, פע, פפ}. באילו מהזוגות האלו יש בדיוק 'ע' אחד?&rlm;",
        solution_steps: [
            { verbal_explanation: "מרחב המדגם הוא בן 4 אפשרויות: {עע, עפ, פע, פפ}.&rlm;", math_expression: "Total = 4" },
            { verbal_explanation: "נחפש את האפשרויות בהן יש בדיוק פעם אחת עץ: (עפ) ו-(פע). אלו 2 תוצאות רצויות.&rlm;", math_expression: "Wanted = 2" },
            { verbal_explanation: "ההסתברות היא 2 מתוך 4, שניתן לצמצם לחצי (1:2).&rlm;", math_expression: "2 : 4 = 1 : 2" }
        ],
        final_answer: "2 : 4 (שזה חצי)"
    },
    // שאלה 7
    {
        topic: "statistics_probability",
        subTopic: "מרחב מדגם והסתברות קלאסית",
        question_text: "רולטה (סביבון) מחולקת ל-8 גזרות שוות בגודלן, המסומנות במספרים 1 עד 8. מהי ההסתברות שהחץ יעצור על מספר גדול מ-5?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 100 100' width='80' height='80'><circle cx='50' cy='50' r='45' fill='#e2e8f0' stroke='#334155' stroke-width='2'/><line x1='50' y1='5' x2='50' y2='95' stroke='#334155' stroke-width='2'/><line x1='5' y1='50' x2='95' y2='50' stroke='#334155' stroke-width='2'/><line x1='18' y1='18' x2='82' y2='82' stroke='#334155' stroke-width='2'/><line x1='18' y1='82' x2='82' y2='18' stroke='#334155' stroke-width='2'/><polygon points='50,50 60,15 40,15' fill='#ef4444'/></svg></div>",
        options: ["3 : 8", "4 : 8", "5 : 8", "2 : 8"],
        correctAnswer: 0,
        hint: "אילו מספרים גדולים מ-5 יש ברולטה? (6, 7, 8). כמה מספרים אלו בסך הכל?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': סך כל האפשרויות ברולטה הוא 8.&rlm;", math_expression: "Total = 8" },
            { verbal_explanation: "שלב ב': התוצאות הרצויות (גדול מ-5) הן המספרים 6, 7, 8. אלו 3 תוצאות.&rlm;", math_expression: "Wanted = 3" },
            { verbal_explanation: "שלב ג': ההסתברות היא 3 מתוך 8.&rlm;", math_expression: "3 : 8" }
        ],
        final_answer: "3 : 8"
    },
    // שאלה 8
    {
        topic: "statistics_probability",
        subTopic: "מרחב מדגם והסתברות קלאסית",
        question_text: "זורקים שתי קוביות משחק רגילות (אחת כחולה ואחת אדומה). כמה תוצאות אפשריות שונות יש במרחב המדגם כולו?&rlm;",
        options: ["36", "12", "6", "24"],
        correctAnswer: 0,
        hint: "לקובייה הראשונה יש 6 אפשרויות. לכל אחת מהאפשרויות האלו, לקובייה השנייה יש 6 אפשרויות. נכפול אותן (חוק הכפל).&rlm;",
        solution_steps: [
            { verbal_explanation: "כאשר יש לנו שני ניסויים בלתי תלויים שקורים יחד, סך כל האפשרויות הוא מכפלת האפשרויות של כל ניסוי בנפרד.&rlm;", math_expression: "" },
            { verbal_explanation: "לקובייה הראשונה 6 אפשרויות. לקובייה השנייה 6 אפשרויות.&rlm;", math_expression: "6 × 6 = 36" },
            { verbal_explanation: "ישנם 36 זוגות אפשריים (למשל: 1-1, 1-2, 1-3... 6-6).&rlm;", math_expression: "36" }
        ],
        final_answer: "36"
    },
    // שאלה 9
    {
        topic: "statistics_probability",
        subTopic: "מרחב מדגם והסתברות קלאסית",
        question_text: "מתוך המילה 'מתמטיקה' (מ, ת, מ, ט, י, ק, ה) בוחרים אות אחת באקראי. מהי ההסתברות שהאות שנבחרה היא 'מ'?&rlm;",
        options: ["2 : 7", "1 : 7", "2 : 5", "1 : 6"],
        correctAnswer: 0,
        hint: "ספרו כמה אותיות יש במילה בסך הכל (7). ספרו כמה פעמים מופיעה האות מ' (2).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נספור את סך כל האותיות במילה 'מתמטיקה'. יש 7 אותיות.&rlm;", math_expression: "Total = 7" },
            { verbal_explanation: "שלב ב': נספור כמה פעמים מופיעה האות מ'. היא מופיעה פעמיים.&rlm;", math_expression: "Wanted = 2" },
            { verbal_explanation: "שלב ג': ההסתברות היא מספר האותיות מ' מתוך סך כל האותיות.&rlm;", math_expression: "2 : 7" }
        ],
        final_answer: "2 : 7"
    },
    // שאלה 10
    {
        topic: "statistics_probability",
        subTopic: "מרחב מדגם והסתברות קלאסית",
        question_text: "בחפיסת קלפים רגילה יש 52 קלפים. רבע מהם (13) הם בצורת 'לב אדום'. מהי ההסתברות לשלוף באקראי קלף שאינו 'לב אדום'?&rlm;",
        options: ["39 : 52 (שזה 3 : 4)", "13 : 52 (שזה 1 : 4)", "1 : 2", "26 : 52"],
        correctAnswer: 0,
        hint: "אם 13 הם לב אדום, כמה קלפים נשארו? (52 פחות 13).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב כמה קלפים הם לא לב אדום. 52 פחות 13 שווה 39 קלפים.&rlm;", math_expression: "52 - 13 = 39" },
            { verbal_explanation: "שלב ב': ההסתברות לשלוף אחד מהם היא 39 מתוך 52.&rlm;", math_expression: "39 : 52" },
            { verbal_explanation: "שלב ג': ניתן לצמצם את השבר. אם נחלק את המונה והמכנה ב-13, נקבל 3 מתוך 4 (שלושה רבעים).&rlm;", math_expression: "3 : 4" }
        ],
        final_answer: "39 : 52 (שזה 3 : 4)"
    },
    // שאלה 11
    {
        topic: "statistics_probability",
        subTopic: "מרחב מדגם והסתברות קלאסית",
        question_text: "מהי ההסתברות של 'מאורע ודאי' (משהו שבטוח יקרה 100%) ומהי ההסתברות של 'מאורע בלתי אפשרי'?&rlm;",
        options: ["ודאי = 1, בלתי אפשרי = 0", "ודאי = 100, בלתי אפשרי = 1", "ודאי = אינסוף, בלתי אפשרי = מינוס 1", "ודאי = 1, בלתי אפשרי = מינוס 1"],
        correctAnswer: 0,
        hint: "הסתברות נמדדת תמיד בין 0 ל-1. אפס אומר 'אין סיכוי', ואחד שלם (100 מתוך 100) אומר 'בטוח לחלוטין'.&rlm;",
        solution_steps: [
            { verbal_explanation: "במתמטיקה, הסתברות מבוטאת כשבר (או מספר עשרוני) בין 0 ל-1.&rlm;", math_expression: "" },
            { verbal_explanation: "0 מייצג 0% סיכוי (מאורע בלתי אפשרי, למשל לקבל 7 בקובייה רגילה).&rlm;", math_expression: "P = 0" },
            { verbal_explanation: "1 מייצג 100% סיכוי, כלומר השלם כולו (מאורע ודאי, למשל לקבל מספר קטן מ-10 בקובייה).&rlm;", math_expression: "P = 1" }
        ],
        final_answer: "ודאי = 1, בלתי אפשרי = 0"
    },
    // שאלה 12
    {
        topic: "statistics_probability",
        subTopic: "מרחב מדגם והסתברות קלאסית",
        question_text: "בכיתה יש 30 תלמידים. 12 מהם מרכיבים משקפיים. אם בוחרים תלמיד באקראי, מהי ההסתברות שייבחר תלמיד ש**אינו** מרכיב משקפיים?&rlm;",
        options: ["18 : 30 (שזה 3 : 5)", "12 : 30 (שזה 2 : 5)", "15 : 30", "20 : 30"],
        correctAnswer: 0,
        hint: "מצאו קודם כמה תלמידים אינם מרכיבים משקפיים (30 פחות 12).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את מספר התלמידים ללא משקפיים.&rlm;", math_expression: "30 - 12 = 18" },
            { verbal_explanation: "שלב ב': ההסתברות לבחור אחד מהם היא 18 מתוך 30.&rlm;", math_expression: "18 : 30" },
            { verbal_explanation: "שלב ג': נצמצם את השבר. נחלק מונה ומכנה ב-6.&rlm;", math_expression: "(18 : 6) : (30 : 6) = 3 : 5" }
        ],
        final_answer: "18 : 30 (שזה 3 : 5)"
    },

    // ==========================================================
    // תת נושא 2: מאורע משלים (12 שאלות)
    // ==========================================================
    
    // שאלה 13
    {
        topic: "statistics_probability",
        subTopic: "מאורע משלים",
        question_text: "מהו הכלל הבסיסי ביותר לגבי ההסתברות של 'מאורע' וההסתברות של ה'מאורע המשלים' שלו (ההפך ממנו)?&rlm;",
        options: ["הסכום של שתי ההסתברויות שלהם שווה תמיד ל-1 (או 100%).", "ההסתברות שלהם תמיד שווה לחצי.", "הסכום שלהם שווה ל-0.", "מכפלתם שווה ל-1."],
        correctAnswer: 0,
        hint: "או שיירד גשם, או שלא יירד גשם. אין אפשרות שלישית. הסכום של הסיכויים חייב לכסות הכל.&rlm;",
        solution_steps: [
            { verbal_explanation: "מאורע משלים מכיל את כל האפשרויות שלא נמצאות במאורע המקורי.&rlm;", math_expression: "" },
            { verbal_explanation: "לכן, אם נחבר את הסיכוי שמשהו יקרה עם הסיכוי שהוא לא יקרה, נכסה את כל מרחב המדגם.&rlm;", math_expression: "" },
            { verbal_explanation: "סכום זה תמיד מהווה את השלם, כלומר 1 (או 100%).&rlm;", math_expression: "P(A) + P(Not A) = 1" }
        ],
        final_answer: "הסכום של שתי ההסתברויות שלהם שווה תמיד ל-1 (או 100%)."
    },
    // שאלה 14
    {
        topic: "statistics_probability",
        subTopic: "מאורע משלים",
        question_text: "לפי התחזית, ההסתברות שיירד מחר גשם היא 30% (או 0.3). מהי ההסתברות שמחר **לא** יירד גשם?&rlm;",
        options: ["70% (או 0.7)", "30% (או 0.3)", "0%", "100%"],
        correctAnswer: 0,
        hint: "חיסרו 30% מתוך 100% השלמים.&rlm;",
        solution_steps: [
            { verbal_explanation: "המאורע 'לא יירד גשם' הוא המשלים של 'יירד גשם'.&rlm;", math_expression: "" },
            { verbal_explanation: "סכום ההסתברויות הוא 100%.&rlm;", math_expression: "100% - 30% = 70%" },
            { verbal_explanation: "בכתיב עשרוני: 1 שלם פחות 0.3 שווה 0.7.&rlm;", math_expression: "1 - 0.3 = 0.7" }
        ],
        final_answer: "70% (או 0.7)"
    },
    // שאלה 15
    {
        topic: "statistics_probability",
        subTopic: "מאורע משלים",
        question_text: "ההסתברות שקבוצת הכדורגל תנצח במשחק היא 3 מתוך 8 (3:8). מהי ההסתברות שהקבוצה לא תנצח (תפסיד או תעשה תיקו)?&rlm;",
        options: ["5 : 8", "3 : 8", "8 : 8", "1 : 8"],
        correctAnswer: 0,
        hint: "השלם הוא 8 מתוך 8. חסרו ממנו את ה-3 מתוך 8.&rlm;",
        solution_steps: [
            { verbal_explanation: "השלם (מאורע ודאי) מיוצג על ידי השבר 8 מתוך 8 (8:8).&rlm;", math_expression: "1 = 8 : 8" },
            { verbal_explanation: "נחסר מהשלם את ההסתברות לניצחון.&rlm;", math_expression: "8 : 8 - 3 : 8" },
            { verbal_explanation: "נישאר עם 5 מתוך 8.&rlm;", math_expression: "5 : 8" }
        ],
        final_answer: "5 : 8"
    },
    // שאלה 16
    {
        topic: "statistics_probability",
        subTopic: "מאורע משלים",
        question_text: "בזריקת קובייה הוגנת, המאורע A הוא 'קבלת המספר 2'. מהו המאורע המשלים ומה ההסתברות שלו?&rlm;",
        options: ["קבלת המספרים 1, 3, 4, 5, 6. ההסתברות היא 5 : 6.", "קבלת המספר 2 שוב. ההסתברות היא 1 : 6.", "קבלת מספר זוגי. ההסתברות היא 3 : 6.", "קבלת כל מספר מלבד 6. ההסתברות 5 : 6."],
        correctAnswer: 0,
        hint: "המשלים אומר 'כל דבר שהוא לא 2'. כמה אפשרויות כאלו נשארו על הקובייה?&rlm;",
        solution_steps: [
            { verbal_explanation: "מאורע משלים ל-'קבלת 2' הוא 'לא לקבל 2'.&rlm;", math_expression: "" },
            { verbal_explanation: "האפשרויות הנותרות בקובייה הן: 1, 3, 4, 5, 6. אלו 5 אפשרויות.&rlm;", math_expression: "" },
            { verbal_explanation: "ההסתברות לכך היא 5 מתוך 6 סך הכל אפשרויות.&rlm;", math_expression: "5 : 6" }
        ],
        final_answer: "קבלת המספרים 1, 3, 4, 5, 6. ההסתברות היא 5 : 6."
    },
    // שאלה 17
    {
        topic: "statistics_probability",
        subTopic: "מאורע משלים",
        question_text: "בשק יש כדורים בשלושה צבעים: אדום, שחור ולבן. ההסתברות להוציא כדור אדום היא 0.25. ההסתברות להוציא כדור שחור היא 0.40. מהי ההסתברות להוציא כדור לבן?&rlm;",
        options: ["0.35", "0.65", "0.60", "0.25"],
        correctAnswer: 0,
        hint: "סך כל ההסתברויות של כל הצבעים בשק חייב להיות שווה ל-1 שלם. חברו את הידועים וחסרו מ-1.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': סכום ההסתברויות של אדום ושחור.&rlm;", math_expression: "0.25 + 0.40 = 0.65" },
            { verbal_explanation: "שלב ב': הכדור הלבן הוא המאורע המשלים לשני הצבעים האחרים ביחד, כי אין צבעים נוספים.&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ג': נחסר את הסכום מ-1 שלם.&rlm;", math_expression: "1 - 0.65 = 0.35" }
        ],
        final_answer: "0.35"
    },
    // שאלה 18
    {
        topic: "statistics_probability",
        subTopic: "מאורע משלים",
        question_text: "קבוצת תלמידים משחקת במשחק. ההסתברות של תלמיד לזכות בפרס הראשון היא 2%. מהי ההסתברות שהתלמיד **לא** יזכה בפרס הראשון?&rlm;",
        options: ["98%", "20%", "0.98%", "80%"],
        correctAnswer: 0,
        hint: "השלם הוא 100%. חסרו 2%.&rlm;",
        solution_steps: [
            { verbal_explanation: "המאורע 'לא לזכות' משלים למאורע 'כן לזכות'.&rlm;", math_expression: "" },
            { verbal_explanation: "סכום ההסתברויות הוא 100%.&rlm;", math_expression: "100% - 2% = 98%" }
        ],
        final_answer: "98%"
    },
    // שאלה 19
    {
        topic: "statistics_probability",
        subTopic: "מאורע משלים",
        question_text: "זורקים שני מטבעות. המאורע A הוא 'התקבל עץ לפחות פעם אחת'. המאורע המשלים שלו הוא...&rlm;",
        options: ["התקבל פלי פעמיים (אף עץ לא התקבל).", "התקבל עץ פעמיים.", "התקבל פלי פעם אחת.", "אין מאורע משלים."],
        correctAnswer: 0,
        hint: "ההפך מ-'לפחות פעם אחת' הוא 'אף פעם לא'. מרחב המדגם: {עע, עפ, פע, פפ}.&rlm;",
        solution_steps: [
            { verbal_explanation: "מרחב המדגם: {עץ-עץ, עץ-פלי, פלי-עץ, פלי-פלי}.&rlm;", math_expression: "" },
            { verbal_explanation: "המאורע 'לפחות עץ אחד' כולל את התוצאות: {עע, עפ, פע}.&rlm;", math_expression: "" },
            { verbal_explanation: "מה שנשאר בחוץ (המשלים) הוא התוצאה שבה אין אף עץ.&rlm;", math_expression: "{פפ} (כלומר פלי פעמיים)" }
        ],
        final_answer: "התקבל פלי פעמיים (אף עץ לא התקבל)."
    },
    // שאלה 20
    {
        topic: "statistics_probability",
        subTopic: "מאורע משלים",
        question_text: "חוקר בדק שכיחות של מוצרים פגומים במפעל ומצא שההסתברות שמוצר יהיה פגום היא 1 מתוך 50 (1:50). מהי ההסתברות שהמוצר יהיה תקין?&rlm;",
        options: ["49 : 50", "1 : 50", "50 : 50", "1 : 49"],
        correctAnswer: 0,
        hint: "השלם הוא 50 מתוך 50. חסרו את ה-1 הפגום.&rlm;",
        solution_steps: [
            { verbal_explanation: "ההסתברות למוצר תקין (משלים לפגום) שווה ל-1 שלם פחות ההסתברות לפגום.&rlm;", math_expression: "1 - 1 : 50" },
            { verbal_explanation: "1 שלם שווה ל-50 חלקי 50.&rlm;", math_expression: "50 : 50 - 1 : 50 = 49 : 50" }
        ],
        final_answer: "49 : 50"
    },
    // שאלה 21
    {
        topic: "statistics_probability",
        subTopic: "מאורע משלים",
        question_text: "מתוך האותיות א, ב, ג, ד, ה, בוחרים אות באקראי. ההסתברות לבחור אות אהו\"י (א, ה) היא 2 : 5. מהי ההסתברות שהאות שנבחרה **אינה** אות אהו\"י?&rlm;",
        options: ["3 : 5", "2 : 5", "1 : 5", "5 : 5"],
        correctAnswer: 0,
        hint: "יש 5 אותיות. 2 מהן הן אהו\"י. השאר אינן.&rlm;",
        solution_steps: [
            { verbal_explanation: "נחשב את המשלים מתוך השלם 1 (או 5:5).&rlm;", math_expression: "5 : 5 - 2 : 5" },
            { verbal_explanation: "נחסר את המונים.&rlm;", math_expression: "3 : 5" }
        ],
        final_answer: "3 : 5"
    },
    // שאלה 22
    {
        topic: "statistics_probability",
        subTopic: "מאורע משלים",
        question_text: "אם נתונה הסתברות של P למאורע מסוים. איזה ביטוי מתאר תמיד את ההסתברות של המאורע המשלים לו?&rlm;",
        options: ["1 - P", "P - 1", "P + 1", "0"],
        correctAnswer: 0,
        hint: "השלם תמיד שווה ל-1. המאורע המשלים הוא מה שנשאר אחרי שמורידים את P מ-1.&rlm;",
        solution_steps: [
            { verbal_explanation: "סכום ההסתברויות של מאורע והמשלים שלו שווה ל-1.&rlm;", math_expression: "P + P(complementary) = 1" },
            { verbal_explanation: "כדי למצוא את המשלים, נעביר את P אגף בחיסור.&rlm;", math_expression: "P(complementary) = 1 - P" }
        ],
        final_answer: "1 - P"
    },
    // שאלה 23
    {
        topic: "statistics_probability",
        subTopic: "מאורע משלים",
        question_text: "קולע למטרה קולע למטרה בהסתברות של 0.8. ב-50 זריקות, כמה זריקות צפויות **להחטיא** את המטרה?&rlm;",
        options: ["10", "40", "20", "5"],
        correctAnswer: 0,
        hint: "קודם מצאו את ההסתברות להחטאה (המשלים של 0.8). לאחר מכן כפלו את ההסתברות הזו ב-50 זריקות.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': ההסתברות להחטאה היא המשלים של קליעה.&rlm;", math_expression: "1 - 0.8 = 0.2" },
            { verbal_explanation: "שלב ב': נחשב 0.2 מתוך 50 הזריקות. (0.2 זה בעצם חמישית, או שתי עשיריות).&rlm;", math_expression: "50 × 0.2 = 10" }
        ],
        final_answer: "10"
    },
    // שאלה 24
    {
        topic: "statistics_probability",
        subTopic: "מאורע משלים",
        question_text: "ההסתברות שצבע המכונית הבאה שתעבור ברחוב הוא לבן היא 40%. ההסתברות שהצבע יהיה כסף היא 25%. מהי ההסתברות שהמכונית תהיה בצבע ש**אינו** לבן ו**אינו** כסף?&rlm;",
        options: ["35%", "65%", "15%", "100%"],
        correctAnswer: 0,
        hint: "חברו את ההסתברויות של 'לבן' ו'כסף' יחד (65%). הצבעים האחרים הם המשלים של שניהם יחד.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': ההסתברות שהרכב יהיה לבן או כסף היא הסכום שלהם.&rlm;", math_expression: "40% + 25% = 65%" },
            { verbal_explanation: "שלב ב': ההסתברות לכל צבע אחר היא המשלים ל-100%.&rlm;", math_expression: "100% - 65% = 35%" }
        ],
        final_answer: "35%"
    },

    // ==========================================================
    // תת נושא 3: ממוצע, חציון ושכיח (12 שאלות)
    // ==========================================================
    
    // שאלה 25
    {
        topic: "statistics_probability",
        subTopic: "ממוצע, חציון ושכיח",
        question_text: "מהו ה'שכיח' (Mode) בקבוצת נתונים?&rlm;",
        options: ["הערך שמופיע הכי הרבה פעמים (בתדירות הגבוהה ביותר).", "הערך שנמצא בדיוק באמצע הרשימה המסודרת.", "סכום כל הערכים מחולק במספרם.", "ההפרש בין הערך הגדול לקטן."],
        correctAnswer: 0,
        hint: "המילה 'שכיח' באה מהמילה 'שכיחות' - כלומר כמה נפוץ משהו.&rlm;",
        solution_steps: [
            { verbal_explanation: "ממוצע = סכום חלקי הכמות. חציון = המספר האמצעי ברצף.&rlm;", math_expression: "" },
            { verbal_explanation: "שכיח הוא פשוט הערך הפופולרי ביותר, זה שמופיע מספר רב יותר של פעמים מכל השאר בקבוצה.&rlm;", math_expression: "" }
        ],
        final_answer: "הערך שמופיע הכי הרבה פעמים (בתדירות הגבוהה ביותר)."
    },
    // שאלה 26
    {
        topic: "statistics_probability",
        subTopic: "ממוצע, חציון ושכיח",
        question_text: "חשבו את הממוצע של קבוצת המספרים הבאה: 4, 6, 8, 10.&rlm;",
        options: ["7", "6", "8", "28"],
        correctAnswer: 0,
        hint: "חברו את כל המספרים (4+6+8+10) וחלקו ב-4 (מספר האיברים).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': חישוב סכום האיברים.&rlm;", math_expression: "4 + 6 + 8 + 10 = 28" },
            { verbal_explanation: "שלב ב': ישנם 4 מספרים בקבוצה. נחלק את הסכום ב-4.&rlm;", math_expression: "28 : 4 = 7" }
        ],
        final_answer: "7"
    },
    // שאלה 27
    {
        topic: "statistics_probability",
        subTopic: "ממוצע, חציון ושכיח",
        question_text: "מהו החציון (Median) בקבוצת המספרים הבאה: 3, 1, 4, 2, 5 ?&rlm;",
        options: ["3", "4", "2", "15"],
        correctAnswer: 0,
        hint: "כדי למצוא חציון, חובה קודם כל לסדר את המספרים מהקטן לגדול! (1,2,3,4,5). איזה מספר עומד בדיוק באמצע?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': החוק הראשון של חציון - מסדרים את הרשימה לפי גודל.&rlm;", math_expression: "1, 2, 3, 4, 5" },
            { verbal_explanation: "שלב ב': נחפש את המספר האמצעי (כך שיש מספר זהה של איברים מימינו ומשמאלו).&rlm;", math_expression: "המספר 3" },
            { verbal_explanation: "יש שני מספרים משמאלו (1,2) ושניים מימינו (4,5), לכן 3 הוא החציון.&rlm;", math_expression: "" }
        ],
        final_answer: "3"
    },
    // שאלה 28
    {
        topic: "statistics_probability",
        subTopic: "ממוצע, חציון ושכיח",
        question_text: "מציאת חציון בקבוצה זוגית. מהו החציון בקבוצת המספרים: 2, 8, 4, 6 ?&rlm;",
        options: ["5", "4", "6", "8"],
        correctAnswer: 0,
        hint: "סדרו את המספרים: 2,4,6,8. אין מספר אחד באמצע! לכן, קחו את שני המספרים האמצעיים (4 ו-6) ועשו להם ממוצע (חברו וחלקו ב-2).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נסדר מהקטן לגדול.&rlm;", math_expression: "2, 4, 6, 8" },
            { verbal_explanation: "שלב ב': כיוון שיש 4 מספרים (כמות זוגית), אין מספר אחד באמצע. ניקח את השניים האמצעיים.&rlm;", math_expression: "4, 6" },
            { verbal_explanation: "שלב ג': החציון יהיה הממוצע של שני מספרים אלו.&rlm;", math_expression: "(4 + 6) : 2 = 10 : 2 = 5" }
        ],
        final_answer: "5"
    },
    // שאלה 29
    {
        topic: "statistics_probability",
        subTopic: "ממוצע, חציון ושכיח",
        question_text: "מצאו את השכיח בסדרת הציונים הבאה: 80, 85, 85, 90, 95, 95, 95, 100.&rlm;",
        options: ["95", "85", "90", "100"],
        correctAnswer: 0,
        hint: "איזה מספר מופיע הכי הרבה פעמים?&rlm;",
        solution_steps: [
            { verbal_explanation: "נבדוק את התדירות של כל ציון ברשימה.&rlm;", math_expression: "" },
            { verbal_explanation: "80 (פעם אחת), 85 (פעמיים), 90 (פעם אחת), 100 (פעם אחת).&rlm;", math_expression: "" },
            { verbal_explanation: "הציון 95 מופיע 3 פעמים, שזה הכי הרבה ברשימה, ולכן הוא השכיח.&rlm;", math_expression: "95" }
        ],
        final_answer: "95"
    },
    // שאלה 30
    {
        topic: "statistics_probability",
        subTopic: "ממוצע, חציון ושכיח",
        question_text: "הממוצע של שלושה מספרים הוא 10. מהו סכום שלושת המספרים האלה?&rlm;",
        options: ["30", "10", "3", "13"],
        correctAnswer: 0,
        hint: "ממוצע מחושב כך: סכום לחלק לכמות. סכום לחלק ל-3 שווה 10. הכפילו ב-3.&rlm;",
        solution_steps: [
            { verbal_explanation: "נוסחת הממוצע היא: סכום לחלק למספר האיברים.&rlm;", math_expression: "Sum : 3 = 10" },
            { verbal_explanation: "נפעיל פעולה הפוכה ונכפיל את הממוצע במספר האיברים כדי למצוא את הסכום הכולל.&rlm;", math_expression: "Sum = 10 × 3 = 30" }
        ],
        final_answer: "30"
    },
    // שאלה 31
    {
        topic: "statistics_probability",
        subTopic: "ממוצע, חציון ושכיח",
        question_text: "תלמיד קיבל 80, 90 ו-100 בשלושה מבחנים. הוא ניגש למבחן רביעי, והממוצע שלו נשאר 90. כמה קיבל במבחן הרביעי?&rlm;",
        options: ["90", "100", "80", "85"],
        correctAnswer: 0,
        hint: "אם הממוצע לא השתנה, סימן שהציון החדש שהוספנו זהה בדיוק לממוצע הקודם!&rlm;",
        solution_steps: [
            { verbal_explanation: "דרך א' (הבנה): ממוצע הציונים 80, 90, 100 הוא 90. הוספת ציון שזהה לממוצע לעולם לא תשנה את הממוצע.&rlm;", math_expression: "" },
            { verbal_explanation: "דרך ב' (אלגברית): נחשב סכום עבור ממוצע 90 מ-4 מבחנים.&rlm;", math_expression: "Sum = 90 × 4 = 360" },
            { verbal_explanation: "הסכום של 3 המבחנים הראשונים הוא 270.&rlm;", math_expression: "80 + 90 + 100 = 270" },
            { verbal_explanation: "נחסר כדי למצוא את המבחן הרביעי.&rlm;", math_expression: "360 - 270 = 90" }
        ],
        final_answer: "90"
    },
    // שאלה 32
    {
        topic: "statistics_probability",
        subTopic: "ממוצע, חציון ושכיח",
        question_text: "האם ייתכן שלקבוצת נתונים יהיה יותר מ'שכיח' אחד?&rlm;",
        options: ["כן, אם יש שני ערכים (או יותר) שמופיעים את אותו מספר פעמים מרבי.", "לא, השכיח חייב להיות יחיד.", "כן, אבל רק אם הם מספרים זוגיים.", "לא, במקרה כזה עושים להם ממוצע."],
        correctAnswer: 0,
        hint: "קחו קבוצה: 2, 2, 3, 3, 4. גם 2 וגם 3 מופיעים פעמיים (הכי הרבה). שניהם שכיחים!&rlm;",
        solution_steps: [
            { verbal_explanation: "בניגוד לחציון ולממוצע שהם תמיד תוצאה יחידה, 'שכיח' יכול להיות כמה ערכים במקביל.&rlm;", math_expression: "" },
            { verbal_explanation: "אם שני מספרים שונים מופיעים 5 פעמים ברשימה (ואף מספר אחר לא מופיע יותר), שניהם יוכתרו כשכיחים של הקבוצה.&rlm;", math_expression: "" }
        ],
        final_answer: "כן, אם יש שני ערכים (או יותר) שמופיעים את אותו מספר פעמים מרבי."
    },
    // שאלה 33
    {
        topic: "statistics_probability",
        subTopic: "ממוצע, חציון ושכיח",
        question_text: "האם החציון חייב להיות מספר שמופיע בעצמו בתוך רשימת הנתונים המקורית?&rlm;",
        options: ["לא, במקרה של כמות זוגית של נתונים, החציון יכול להיות הממוצע בין שני מספרים, ולכן מספר חדש.", "כן, החציון תמיד לקוח מתוך הרשימה.", "לא, הוא תמיד מספר עשרוני.", "כן, אחרת זו טעות בחישוב."],
        correctAnswer: 0,
        hint: "חישבו על הרשימה 2, 4. החציון הוא 3. האם 3 נמצא ברשימה? לא.&rlm;",
        solution_steps: [
            { verbal_explanation: "כאשר יש כמות אי-זוגית של נתונים, החציון הוא המספר האמצעי (נמצא ברשימה).&rlm;", math_expression: "" },
            { verbal_explanation: "אך כאשר הכמות זוגית, אנו מחשבים ממוצע של שני האמצעיים. ממוצע זה לרוב ייתן מספר שלא הופיע במקור.&rlm;", math_expression: "" }
        ],
        final_answer: "לא, במקרה של כמות זוגית של נתונים, החציון יכול להיות הממוצע בין שני מספרים, ולכן מספר חדש."
    },
    // שאלה 34
    {
        topic: "statistics_probability",
        subTopic: "ממוצע, חציון ושכיח",
        question_text: "הממוצע של 5 תלמידים הוא 80. הצטרף תלמיד שישי. הממוצע של כל ה-6 עלה ל-82. מה היה הציון של התלמיד השישי?&rlm;",
        options: ["92", "82", "90", "100"],
        correctAnswer: 0,
        hint: "סכום 5 התלמידים הוא 400 (5 כפול 80). סכום ה-6 הוא 492 (6 כפול 82). מה ההפרש?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את סכום הציונים של 5 התלמידים הראשונים.&rlm;", math_expression: "5 × 80 = 400" },
            { verbal_explanation: "שלב ב': נחשב את סכום הציונים החדש (של כל ה-6).&rlm;", math_expression: "6 × 82 = 492" },
            { verbal_explanation: "שלב ג': ההפרש בין הסכומים הוא הציון של התלמיד השישי שהתווסף.&rlm;", math_expression: "492 - 400 = 92" }
        ],
        final_answer: "92"
    },
    // שאלה 35
    {
        topic: "statistics_probability",
        subTopic: "ממוצע, חציון ושכיח",
        question_text: "הממוצע של המספרים 10, 20 ו-x הוא 15. מהו x?&rlm;",
        options: ["15", "10", "20", "5"],
        correctAnswer: 0,
        hint: "ממוצע של 3 איברים שווה 15, לכן הסכום שלהם הוא 45. (10+20+x=45).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרכיב משוואת ממוצע.&rlm;", math_expression: "(10 + 20 + x) : 3 = 15" },
            { verbal_explanation: "שלב ב': נכפול ב-3 את שני האגפים לקבלת הסכום.&rlm;", math_expression: "30 + x = 45" },
            { verbal_explanation: "שלב ג': נחסר 30 כדי למצוא את x.&rlm;", math_expression: "x = 45 - 30 = 15" }
        ],
        final_answer: "15"
    },
    // שאלה 36
    {
        topic: "statistics_probability",
        subTopic: "ממוצע, חציון ושכיח",
        question_text: "הוספת 'ערך חריג קיצוני' (למשל, הוספת הציון 10 לרשימה של עשרות תלמידים שקיבלו 90). איזה מדד יושפע יותר בחוזקה ויימשך כלפי מטה?&rlm;",
        options: ["הממוצע יושפע הרבה יותר מהחציון.", "החציון יושפע הרבה יותר.", "שניהם יושפעו באותה מידה בדיוק.", "השכיח יושפע יותר מכולם."],
        correctAnswer: 0,
        hint: "חציון רק מסתכל מי באמצע הרשימה ולא 'אכפת לו' כמה קטן המספר הראשון. ממוצע מתחשב בכל מספר ומשקלל אותו פנימה!&rlm;",
        solution_steps: [
            { verbal_explanation: "הממוצע מחושב מסכום כל הערכים, ולכן כל ערך קיצוני (נמוך מאוד או גבוה מאוד) מושך את הממוצע לכיוונו.&rlm;", math_expression: "" },
            { verbal_explanation: "החציון תלוי רק במיקום (סדר). הוספת ערך קיצוני בקצה הרשימה תזיז את ה'אמצע' רק צעד אחד הצידה, ולרוב בקושי תשנה את הערך שלו.&rlm;", math_expression: "" }
        ],
        final_answer: "הממוצע יושפע הרבה יותר מהחציון."
    },

    // ==========================================================
    // תת נושא 4: דיאגרמות שכיחות (12 שאלות)
    // ==========================================================
    
    // שאלה 37
    {
        topic: "statistics_probability",
        subTopic: "דיאגרמות שכיחות",
        question_text: "קריאת גרף עמודות. בגרף שלפניכם מוצגות מספר שעות הקריאה של תלמידים בשבוע. הציר האופקי (x) הוא שעות, האנכי (y) הוא מספר תלמידים (שכיחות). כמה תלמידים יש בסך הכל בכיתה זו?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 200 120' width='100%' height='120' style='max-width:200px;'><line x1='30' y1='100' x2='180' y2='100' stroke='#334155' stroke-width='2'/><line x1='30' y1='10' x2='30' y2='100' stroke='#334155' stroke-width='2'/><rect x='40' y='60' width='30' height='40' fill='#3b82f6'/><text x='55' y='55' font-family='Arial' font-size='10' fill='#0f172a' text-anchor='middle'>4</text><text x='55' y='115' font-family='Arial' font-size='10' fill='#0f172a' text-anchor='middle'>1 hr</text><rect x='90' y='20' width='30' height='80' fill='#10b981'/><text x='105' y='15' font-family='Arial' font-size='10' fill='#0f172a' text-anchor='middle'>8</text><text x='105' y='115' font-family='Arial' font-size='10' fill='#0f172a' text-anchor='middle'>2 hr</text><rect x='140' y='70' width='30' height='30' fill='#f59e0b'/><text x='155' y='65' font-family='Arial' font-size='10' fill='#0f172a' text-anchor='middle'>3</text><text x='155' y='115' font-family='Arial' font-size='10' fill='#0f172a' text-anchor='middle'>3 hr</text></svg></div>",
        options: ["15 תלמידים", "12 תלמידים", "3 תלמידים", "24 תלמידים"],
        correctAnswer: 0,
        hint: "חברו את גובה העמודות (המספרים שמופיעים מעל כל עמודה). כל עמודה מייצגת כמות של תלמידים.&rlm;",
        solution_steps: [
            { verbal_explanation: "סך כל האוכלוסייה (סך השכיחויות) מחושב על ידי חיבור הגבהים של כל העמודות בגרף.&rlm;", math_expression: "" },
            { verbal_explanation: "עמודה ראשונה: 4 תלמידים. עמודה שנייה: 8 תלמידים. עמודה שלישית: 3 תלמידים.&rlm;", math_expression: "4 + 8 + 3 = 15" }
        ],
        final_answer: "15 תלמידים"
    },
    // שאלה 38
    {
        topic: "statistics_probability",
        subTopic: "דיאגרמות שכיחות",
        question_text: "בהסתמך על הגרף מהשאלה הקודמת, מהו ה'שכיח' (מספר השעות הנפוץ ביותר)?&rlm;",
        options: ["2 שעות (2 hr)", "8 שעות", "1 שעה (1 hr)", "4 שעות"],
        correctAnswer: 0,
        hint: "השכיח הוא הערך (על ציר x האופקי) שיש לו את העמודה הגבוהה ביותר (על ציר y האנכי).&rlm;",
        solution_steps: [
            { verbal_explanation: "שכיח הוא הערך בעל התדירות הגבוהה ביותר בגרף, כלומר העמודה הכי גבוהה.&rlm;", math_expression: "" },
            { verbal_explanation: "העמודה הגבוהה ביותר מייצגת 8 תלמידים. הערך שלה על הציר האופקי הוא 2 שעות.&rlm;", math_expression: "" }
        ],
        final_answer: "2 שעות (2 hr)"
    },
    // שאלה 39
    {
        topic: "statistics_probability",
        subTopic: "דיאגרמות שכיחות",
        question_text: "חישוב ממוצע מתוך טבלת שכיחויות. ישנם ציונים ותדירויות: ציון 70 (2 תלמידים), ציון 80 (3 תלמידים), ציון 90 (5 תלמידים). מהו ממוצע הציונים הכיתתי?&rlm;",
        options: ["83", "80", "85", "90"],
        correctAnswer: 0,
        hint: "הכפילו כל ציון במספר התלמידים שקיבלו אותו. חברו את כל התוצאות (סך הנקודות הכולל), וחלקו במספר התלמידים הכולל (10).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את סכום הציונים הכולל (ממוצע משוקלל).&rlm;", math_expression: "(70 × 2) + (80 × 3) + (90 × 5)" },
            { verbal_explanation: "נחשב: 140 + 240 + 450 = 830.&rlm;", math_expression: "Sum = 830" },
            { verbal_explanation: "שלב ב': נחשב את מספר התלמידים הכולל.&rlm;", math_expression: "2 + 3 + 5 = 10" },
            { verbal_explanation: "שלב ג': נחלק סכום בכמות למציאת הממוצע.&rlm;", math_expression: "830 : 10 = 83" }
        ],
        final_answer: "83"
    },
    // שאלה 40
    {
        topic: "statistics_probability",
        subTopic: "דיאגרמות שכיחות",
        question_text: "חציון מטבלת שכיחויות: ישנם 10 תלמידים בסך הכל (כמות זוגית). היכן ימוקם החציון?&rlm;",
        options: ["הממוצע שבין התלמיד ה-5 לתלמיד ה-6 (כשהציונים מסודרים).", "הציון של התלמיד ה-5 בלבד.", "הממוצע שבין התלמיד ה-1 לתלמיד ה-10.", "הציון האמצעי בין 70 ל-90."],
        correctAnswer: 0,
        hint: "כשיש 10 איברים, חצי מהם (5) הם 'החצי התחתון', וחצי (5) הם ה'חצי העליון'. החציון נופל בדיוק ברווח שבין ה-5 ל-6.&rlm;",
        solution_steps: [
            { verbal_explanation: "בכמות זוגית של איברים (N=10), אין איבר אחד בודד באמצע.&rlm;", math_expression: "" },
            { verbal_explanation: "לכן לוקחים את שני האיברים האמצעיים. אם נסדר בשורה, אלו יהיו המקומות ה-5 וה-6.&rlm;", math_expression: "N : 2 = 5" },
            { verbal_explanation: "החציון יהיה הממוצע של הציון של התלמיד ה-5 והציון של התלמיד ה-6.&rlm;", math_expression: "" }
        ],
        final_answer: "הממוצע שבין התלמיד ה-5 לתלמיד ה-6 (כשהציונים מסודרים)."
    },
    // שאלה 41
    {
        topic: "statistics_probability",
        subTopic: "דיאגרמות שכיחות",
        question_text: "מהי 'שכיחות יחסית'?&rlm;",
        options: ["היחס בין כמות הפעמים שערך מסוים הופיע לבין סך כל הנתונים במדגם (מוצג לרוב כשבר או אחוז).", "מספר הפעמים המדויק שערך הופיע.", "השכיח הגבוה ביותר פחות השכיח הנמוך ביותר.", "יחס בין הממוצע לחציון."],
        correctAnswer: 0,
        hint: "המילה 'יחסית' אומרת שאנו בודקים את הכמות *ביחס* למשהו אחר (ביחס לסך הכל הכללי).&rlm;",
        solution_steps: [
            { verbal_explanation: "שכיחות רגילה היא מספר שלם (למשל: 4 תלמידים קיבלו ציון 100).&rlm;", math_expression: "" },
            { verbal_explanation: "שכיחות יחסית היא שבר המתאר את החלק מתוך השלם (למשל: 4 תלמידים מתוך 20, שזה 1:5 או 20%).&rlm;", math_expression: "Freq : Total = Rel_Freq" }
        ],
        final_answer: "היחס בין כמות הפעמים שערך מסוים הופיע לבין סך כל הנתונים במדגם (מוצג לרוב כשבר או אחוז)."
    },
    // שאלה 42
    {
        topic: "statistics_probability",
        subTopic: "דיאגרמות שכיחות",
        question_text: "דיאגרמת עוגה (פאי): קבוצה של 40 ילדים נשאלה מהו הצבע האהוב עליהם. רבע מהעוגה צבוע באדום. כמה ילדים בחרו בצבע אדום?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 100 100' width='80' height='80'><circle cx='50' cy='50' r='45' fill='#3b82f6' stroke='#0f172a' stroke-width='2'/><path d='M 50 50 L 50 5 A 45 45 0 0 1 95 50 Z' fill='#ef4444'/><text x='65' y='35' font-family='Arial' font-size='12' fill='#fff'>25%</text></svg></div>",
        options: ["10 ילדים", "25 ילדים", "4 ילדים", "40 ילדים"],
        correctAnswer: 0,
        hint: "דיאגרמת העוגה מייצגת 100% בסך הכל. רבע מהעוגה (25%) שווה לרבע מתוך 40 הילדים.&rlm;",
        solution_steps: [
            { verbal_explanation: "רבע מעוגה (25%) מייצג רבע מהכמות הכוללת של המדגם.&rlm;", math_expression: "1 : 4" },
            { verbal_explanation: "הכמות הכוללת היא 40 ילדים. נחשב רבע מתוך 40.&rlm;", math_expression: "40 : 4 = 10" }
        ],
        final_answer: "10 ילדים"
    },
    // שאלה 43
    {
        topic: "statistics_probability",
        subTopic: "דיאגרמות שכיחות",
        question_text: "בטבלת שכיחויות נתונים הערכים הבאים: 1 הופיע 5 פעמים, 2 הופיע X פעמים, 3 הופיע 10 פעמים. בסך הכל יש 20 משתתפים בסקר. מהי התדירות (X) של המספר 2?&rlm;",
        options: ["5", "10", "15", "2"],
        correctAnswer: 0,
        hint: "סך כל התדירויות בטבלה חייב להיות שווה למספר המשתתפים הכולל (20). 5 ועוד 10 ועוד מה חסר?&rlm;",
        solution_steps: [
            { verbal_explanation: "סכום התדירויות בטבלה הוא סך כל האנשים.&rlm;", math_expression: "5 + x + 10 = 20" },
            { verbal_explanation: "נחבר את הערכים הידועים.&rlm;", math_expression: "15 + x = 20" },
            { verbal_explanation: "נחסר 15 כדי למצוא את המשתתפים החסרים.&rlm;", math_expression: "x = 20 - 15 = 5" }
        ],
        final_answer: "5"
    },
    // שאלה 44
    {
        topic: "statistics_probability",
        subTopic: "דיאגרמות שכיחות",
        question_text: "דיאגרמת עמודות כפולה משמשת לרוב למטרה אחת עיקרית, מהי?&rlm;",
        options: ["להשוות בין שתי קבוצות שונות (למשל בנים לעומת בנות) על פני אותם קריטריונים.", "להראות שני נתונים מתמטיים מנוגדים כמו חיבור וחיסור.", "לבלבל את הקורא בכוונה.", "כאשר אין מספיק מקום בטבלה אחת."],
        correctAnswer: 0,
        hint: "שתי עמודות צמודות בכל קטגוריה (אחת אדומה ואחת כחולה למשל) מאפשרות לראות 'מי עקף את מי' בקלות במבט אחד.&rlm;",
        solution_steps: [
            { verbal_explanation: "דיאגרמת עמודות כפולה מציגה שתי סדרות של נתונים זו לצד זו על אותם ערכי x.&rlm;", math_expression: "" },
            { verbal_explanation: "המטרה שלה היא השוואה חזותית ישירה וקלה בין שתי תת-קבוצות (כמו כיתה א' מול כיתה ב' באותם מקצועות).&rlm;", math_expression: "" }
        ],
        final_answer: "להשוות בין שתי קבוצות שונות (למשל בנים לעומת בנות) על פני אותם קריטריונים."
    },
    // שאלה 45
    {
        topic: "statistics_probability",
        subTopic: "דיאגרמות שכיחות",
        question_text: "מהו ה'טווח' (Range) של קבוצת נתונים סטטיסטית?&rlm;",
        options: ["ההפרש בין הערך הגבוה ביותר לערך הנמוך ביותר במדגם.", "סכום כל הערכים.", "המרחק הממוצע של כל ערך מהממוצע.", "המספר שנמצא באמצע הגרף."],
        correctAnswer: 0,
        hint: "הטווח בודק עד כמה הנתונים 'מפוזרים' מקצה אל קצה.&rlm;",
        solution_steps: [
            { verbal_explanation: "טווח הוא מדד הפיזור הפשוט ביותר בסטטיסטיקה.&rlm;", math_expression: "" },
            { verbal_explanation: "הוא מחושב על ידי חיסור התצפית הקטנה ביותר מהתצפית הגדולה ביותר.&rlm;", math_expression: "Range = Max - Min" }
        ],
        final_answer: "ההפרש בין הערך הגבוה ביותר לערך הנמוך ביותר במדגם."
    },
    // שאלה 46
    {
        topic: "statistics_probability",
        subTopic: "דיאגרמות שכיחות",
        question_text: "ציר y בדיאגרמת עמודות של התפלגות ציונים מייצג בדרך כלל את...&rlm;",
        options: ["השכיחות (מספר התלמידים שקיבלו כל ציון).", "את הציון עצמו.", "את הממוצע הכיתתי.", "את גיל התלמידים."],
        correctAnswer: 0,
        hint: "הציר האופקי (הרצפה) מראה 'על מה אנחנו מדברים' (ציונים 60, 70, 80). הציר האנכי מראה 'כמה כאלה יש'.&rlm;",
        solution_steps: [
            { verbal_explanation: "בדיאגרמת שכיחויות סטנדרטית, ציר x (האופקי) מכיל את קטגוריות המשתנה (הציונים).&rlm;", math_expression: "" },
            { verbal_explanation: "ציר y (האנכי) מכיל תמיד את התדירות / השכיחות (כמה פעמים כל קטגוריה הופיעה).&rlm;", math_expression: "" }
        ],
        final_answer: "השכיחות (מספר התלמידים שקיבלו כל ציון)."
    },
    // שאלה 47
    {
        topic: "statistics_probability",
        subTopic: "דיאגרמות שכיחות",
        question_text: "מתוך 20 ילדים בחוג, 5 מנגנים בגיטרה. אם נציג זאת בדיאגרמת עוגה (פאי), כמה אחוזים משטח העוגה תתפוס גזרת הגיטרה?&rlm;",
        options: ["25%", "5%", "20%", "50%"],
        correctAnswer: 0,
        hint: "שבר של 5 מתוך 20 שווה ערך לרבע. רבע באחוזים הוא...?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרשום את היחס כשבר של החלק מתוך השלם.&rlm;", math_expression: "5 : 20" },
            { verbal_explanation: "שלב ב': נצמצם או נרחיב כדי להגיע לאחוזים (מכנה 100). נכפיל פי 5.&rlm;", math_expression: "(5 × 5) : (20 × 5) = 25 : 100" },
            { verbal_explanation: "שלב ג': 25 מאיות הן בדיוק 25% משטח העוגה השלם.&rlm;", math_expression: "25%" }
        ],
        final_answer: "25%"
    },
    // שאלה 48
    {
        topic: "statistics_probability",
        subTopic: "דיאגרמות שכיחות",
        question_text: "האם אפשר למצוא את הממוצע המדויק מתוך דיאגרמת עוגה שמציגה רק אחוזים של קטגוריות?&rlm;",
        options: ["לא, כי חסר לנו מספר המשתתפים הכולל (הכמות האמיתית).", "כן, מחברים את האחוזים ומחלקים במספרם.", "כן, תמיד יוצא 100.", "רק אם האחוזים מחולקים שווה בשווה."],
        correctAnswer: 0,
        hint: "דיאגרמת עוגה מראה רק יחס (חלקים מסך הכל). היא לא מספרת לנו אם היו 10 אנשים בסקר או מיליון אנשים בסקר.&rlm;",
        solution_steps: [
            { verbal_explanation: "דיאגרמת עוגה עם אחוזים (שכיחות יחסית) לא מספקת מידע על הכמות המוחלטת (n).&rlm;", math_expression: "" },
            { verbal_explanation: "כדי לחשב ממוצע אמיתי, אנו חייבים לדעת את הכמויות המדויקות (כמה בדיוק קיבלו 80, כמה בדיוק קיבלו 90). ללא נתון כמותי נוסף, זה בלתי אפשרי.&rlm;", math_expression: "" }
        ],
        final_answer: "לא, כי חסר לנו מספר המשתתפים הכולל (הכמות האמיתית)."
    }

];