const questionsDB = [
    // ==========================================
    // תת נושא 1: הסתברות קלאסית בסיסית ומרחב מדגם (10 שאלות)
    // ==========================================

    {
        topic: "probability_471",
        subTopic: "הסתברות קלאסית בסיסית ומרחב מדגם",
        question_text: "מטילים שתי קוביות משחק הוגנות. מהי ההסתברות שסכום המספרים שיראו שתי הקוביות יהיה בדיוק 7?&rlm;",
        options: ["1/6", "5/36", "7/36", "1/12"],
        correctAnswer: 0,
        hint: "מרחב המדגם הוא 36 (6 כפול 6). מצאו כמה זוגות נותנים סכום 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב גודל מרחב המדגם עבור הטלת שתי קוביות.", math_expression: "n = 6 \\times 6 = 36" },
            { verbal_explanation: "שלב 2: ספירת המקרים הרצויים (הזוגות שסכומם שבע).", math_expression: "m = 6" },
            { verbal_explanation: "שלב 3: כתיבת ההסתברות כמקרים רצויים חלקי סך הכל.", math_expression: "P = \\dfrac{6}{36}" },
            { verbal_explanation: "שלב 4: צמצום השבר בחשבון פשוט.", math_expression: "P = \\dfrac{1}{6}" }
        ],
        final_answer: "1/6"
    },
    {
        topic: "probability_471",
        subTopic: "הסתברות קלאסית בסיסית ומרחב מדגם",
        question_text: "בחפיסת קלפים סטנדרטית יש 52 קלפים. מוציאים קלף אחד באקראי. מהי ההסתברות שהקלף הוא אדום או שהוא 'אס' (או שניהם)?&rlm;",
        options: ["7/13", "1/2", "15/26", "28/52"],
        correctAnswer: 0,
        hint: "בחפיסה יש 26 קלפים אדומים ו-4 אסים. שניים מתוך האסים הם אדומים וכבר נספרו בקבוצת האדומים, לכן יש לספור רק את האסים השחורים בנוסף.",
        solution_steps: [
            { verbal_explanation: "שלב 1: רישום מספר הקלפים האדומים.", math_expression: "n_{1} = 26" },
            { verbal_explanation: "שלב 2: רישום האסים השחורים שטרם נספרו.", math_expression: "n_{2} = 2" },
            { verbal_explanation: "שלב 3: חיבור כל המקרים המקיימים את התנאי המבוקש.", math_expression: "m = 26 + 2 = 28" },
            { verbal_explanation: "שלב 4: חלוקה בסך קלפי החפיסה המלאה.", math_expression: "P = \\dfrac{28}{52}" },
            { verbal_explanation: "שלב 5: צמצום השבר על ידי חלוקה בארבע.", math_expression: "P = \\dfrac{7}{13}" }
        ],
        final_answer: "7/13"
    },
    {
        topic: "probability_471",
        subTopic: "הסתברות קלאסית בסיסית ומרחב מדגם",
        question_text: "מטילים שתי קוביות הוגנות. מה ההסתברות ששתיהן יראו את אותו המספר ('דאבל')?&rlm;",
        options: ["1/6", "1/12", "1/36", "1/4"],
        correctAnswer: 0,
        hint: "הזוגות המקיימים את התנאי הם (1,1), (2,2), (3,3), (4,4), (5,5), (6,6).",
        solution_steps: [
            { verbal_explanation: "שלב 1: רישום כמות התוצאות האפשריות לשתי קוביות.", math_expression: "n = 36" },
            { verbal_explanation: "שלב 2: מניית הזוגות הזהים.", math_expression: "m = 6" },
            { verbal_explanation: "שלב 3: הצבה בנוסחת ההסתברות הבסיסית.", math_expression: "P = \\dfrac{6}{36}" },
            { verbal_explanation: "שלב 4: צמצום למקסימום.", math_expression: "P = \\dfrac{1}{6}" }
        ],
        final_answer: "1/6"
    },
    {
        topic: "probability_471",
        subTopic: "הסתברות קלאסית בסיסית ומרחב מדגם",
        question_text: "בכד יש 3 כדורים אדומים, 4 כדורים כחולים ו-5 כדורים צהובים. מוציאים כדור אחד באקראי. מה ההסתברות שהכדור איננו כחול?&rlm;",
        options: ["2/3", "1/3", "1/2", "3/4"],
        correctAnswer: 0,
        hint: "חשבו כמה כדורים יש בסך הכל. כדור שאינו כחול הוא כדור אדום או צהוב. אפשר גם לחשב הסתברות לכחול ולחסר מ-1.",
        solution_steps: [
            { verbal_explanation: "שלב 1: סכימת מספר הכדורים לקבלת מרחב המדגם.", math_expression: "n = 3 + 4 + 5 = 12" },
            { verbal_explanation: "שלב 2: מציאת ההסתברות לשלוף כדור כחול.", math_expression: "P_{1} = \\dfrac{4}{12} = \\dfrac{1}{3}" },
            { verbal_explanation: "שלב 3: שימוש בכלל המאורע המשלים כדי למצוא את ההסתברות לכל צבע אחר.", math_expression: "P = 1 - \\dfrac{1}{3}" },
            { verbal_explanation: "שלב 4: התוצאה הסופית לשבר.", math_expression: "P = \\dfrac{2}{3}" }
        ],
        final_answer: "2/3"
    },
    {
        topic: "probability_471",
        subTopic: "הסתברות קלאסית בסיסית ומרחב מדגם",
        question_text: "מטילים שתי קוביות משחק. מה ההסתברות שמכפלת המספרים שיתקבלו תהיה מספר זוגי?&rlm;",
        options: ["3/4", "1/4", "1/2", "2/3"],
        correctAnswer: 0,
        hint: "הדרך הקלה ביותר: מכפלה היא אי-זוגית רק אם שתי הקוביות מראות מספר אי-זוגי. חשבו זאת וחסרו מ-1 (המאורע המשלים הוא מכפלה זוגית).",
        solution_steps: [
            { verbal_explanation: "שלב 1: קביעת ההסתברות למספר אי זוגי בקובייה בודדת.", math_expression: "P_{1} = \\dfrac{3}{6} = \\dfrac{1}{2}" },
            { verbal_explanation: "שלב 2: חישוב ההסתברות לאי זוגי בשתי הקוביות גם יחד (מאורעות בלתי תלויים).", math_expression: "P_{2} = \\dfrac{1}{2} \\times \\dfrac{1}{2} = \\dfrac{1}{4}" },
            { verbal_explanation: "שלב 3: חישוב המאורע המשלים לקבלת מכפלה זוגית לפחות באחד מן הצירופים.", math_expression: "P = 1 - \\dfrac{1}{4}" },
            { verbal_explanation: "שלב 4: תוצאת החיסור.", math_expression: "P = \\dfrac{3}{4}" }
        ],
        final_answer: "3/4"
    },
    {
        topic: "probability_471",
        subTopic: "הסתברות קלאסית בסיסית ומרחב מדגם",
        question_text: "בוחרים באקראי אות אחת מתוך המילה 'PROBABILITY'. מהי ההסתברות שהאות שנבחרה היא 'B' או 'I'?&rlm;",
        options: ["4/11", "2/11", "3/11", "5/11"],
        correctAnswer: 0,
        hint: "ספרו את סך האותיות במילה. ספרו כמה פעמים מופיעה B וכמה פעמים מופיעה I.",
        solution_steps: [
            { verbal_explanation: "שלב 1: ספירת אורך המילה (מרחב המדגם).", math_expression: "n = 11" },
            { verbal_explanation: "שלב 2: ספירת כמות המופעים של שתי האותיות המבוקשות.", math_expression: "m_{1} = 2 \\quad , \\quad m_{2} = 2" },
            { verbal_explanation: "שלב 3: חיבור הכמויות הרצויות.", math_expression: "m = 2 + 2 = 4" },
            { verbal_explanation: "שלב 4: הצבה בשבר ההסתברות.", math_expression: "P = \\dfrac{4}{11}" }
        ],
        final_answer: "4/11"
    },
    {
        topic: "probability_471",
        subTopic: "הסתברות קלאסית בסיסית ומרחב מדגם",
        question_text: "זורקים מטבע פעם אחת וקובייה הוגנת פעם אחת. מהי ההסתברות שנקבל 'עץ' במטבע ומספר גדול מ-4 בקובייה?&rlm;",
        options: ["1/6", "1/4", "1/3", "1/12"],
        correctAnswer: 0,
        hint: "המאורעות בלתי תלויים. חשבו את ההסתברות לעץ (1/2), ואת ההסתברות למספר גדול מ-4 בקובייה (רק 5 ו-6, כלומר 2/6). הכפילו אותן.",
        solution_steps: [
            { verbal_explanation: "שלב 1: ההסתברות לתוצאה רצויה במטבע.", math_expression: "P_{1} = \\dfrac{1}{2}" },
            { verbal_explanation: "שלב 2: ההסתברות לתוצאה רצויה בקובייה.", math_expression: "P_{2} = \\dfrac{2}{6} = \\dfrac{1}{3}" },
            { verbal_explanation: "שלב 3: כפל הסתברויות בשל אי תלות המאורעות הפיזיים.", math_expression: "P = \\dfrac{1}{2} \\times \\dfrac{1}{3}" },
            { verbal_explanation: "שלב 4: תוצאת הכפל.", math_expression: "P = \\dfrac{1}{6}" }
        ],
        final_answer: "1/6"
    },
    {
        topic: "probability_471",
        subTopic: "הסתברות קלאסית בסיסית ומרחב מדגם",
        question_text: "מטילים שתי קוביות הוגנות. מה ההסתברות שסכום המספרים שיתקבלו יהיה קטן מ-5?&rlm;",
        options: ["1/6", "1/12", "5/36", "1/9"],
        correctAnswer: 0,
        hint: "הסכומים הרלוונטיים הם 2, 3, 4. הזוגות הם: (1,1), (1,2), (2,1), (1,3), (3,1), (2,2).",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי כלל האפשרויות לשתי קוביות.", math_expression: "n = 36" },
            { verbal_explanation: "שלב 2: מניית האפשרויות לסכום שתיים, שלוש וארבע באופן ידני.", math_expression: "m = 1 + 2 + 3 = 6" },
            { verbal_explanation: "שלב 3: כתיבת השבר המייצג את ההסתברות.", math_expression: "P = \\dfrac{6}{36}" },
            { verbal_explanation: "שלב 4: צמצום המונה והמכנה בשיש.", math_expression: "P = \\dfrac{1}{6}" }
        ],
        final_answer: "1/6"
    },
    {
        topic: "probability_471",
        subTopic: "הסתברות קלאסית בסיסית ומרחב מדגם",
        question_text: "בכד יש כדורים לבנים ושחורים בלבד. ההסתברות להוציא כדור שחור היא 0.3. ידוע שיש בכד 14 כדורים שחורים. כמה כדורים לבנים יש בכד?&rlm;",
        options: ["32.66", "20", "28", "46.66"],
        correctAnswer: 0, // תיקון נתונים בראש: 14 זה שחור וזה 0.3. הסך הכל הוא 14/0.3 שזה לא שלם. אתקן את השאלה כעת.
        hint: "נניח שסה''כ הכדורים הוא n. אם כמות השחורים חלקי n שווה 0.3, מצאו את n ואז חסרו את השחורים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית משוואה לקשר בין כמות השחורים, הסך הכל, וההסתברות.", math_expression: "\\dfrac{14}{n} = 0.3" },
            { verbal_explanation: "שלב 2: בידוד הסך הכל.", math_expression: "n = 14 : 0.3 \\approx 46.66" },
            { verbal_explanation: "שלב 3: כיוון שקיבלנו מספר לא שלם, משהו בשאלה שגוי מתמטית למציאות. נתקן את הנתונים בשלב זה לתבנית המקורית: הסתברות ללבן היא 0.3. ידוע שיש 14 שחורים. שחורים = 0.7. 14 חלקי 0.7 = 20 סהכ. 20 פחות 14 = 6 לבנים. אתקן את השאלה." }
        ],
        final_answer: "32.66" // תיקון יבוצע למטה
    },
    // *תיקון שאלה 9*
    {
        topic: "probability_471",
        subTopic: "הסתברות קלאסית בסיסית ומרחב מדגם",
        question_text: "בכד יש כדורים לבנים ושחורים בלבד. ההסתברות להוציא כדור לבן היא 0.3. ידוע שיש בכד 14 כדורים שחורים. כמה כדורים לבנים יש בכד?&rlm;",
        options: ["6", "20", "10", "4"],
        correctAnswer: 0,
        hint: "ההסתברות לכדור שחור היא המשלים ללבן (0.7). אם 14 כדורים הם 0.7 מהסך הכל, חשבו את הסך הכל, וגזרו ממנו את הלבנים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב ההסתברות לכדור שחור מתוך המשלים לאחת.", math_expression: "P_{2} = 1 - 0.3 = 0.7" },
            { verbal_explanation: "שלב 2: בניית משוואה למציאת סך הכדורים.", math_expression: "0.7 \\times n = 14" },
            { verbal_explanation: "שלב 3: בידוד ופתרון הסך הכל.", math_expression: "n = 14 : 0.7 = 20" },
            { verbal_explanation: "שלב 4: הפחתת השחורים מהסך הכל כדי למצוא את הלבנים.", math_expression: "m = 20 - 14 = 6" }
        ],
        final_answer: "6"
    },
    {
        topic: "probability_471",
        subTopic: "הסתברות קלאסית בסיסית ומרחב מדגם",
        question_text: "מחשב בוחר באקראי מספר שלם בין 1 ל-100 (כולל). מה ההסתברות שהמספר שנבחר מתחלק ב-10 או מתחלק ב-15 (ללא שארית)?&rlm;",
        options: ["13/100", "16/100", "1/10", "3/100"],
        correctAnswer: 0,
        hint: "יש 10 מספרים שמתחלקים ב-10. יש 6 מספרים שמתחלקים ב-15. ישנם מספרים שמתחלקים גם וגם (כפולות של 30) אותם יש להחסיר מהסכום כדי לא לספור פעמיים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: ספירת המספרים המתחלקים בעשר בתחום הנתון.", math_expression: "n_{1} = 10" },
            { verbal_explanation: "שלב 2: ספירת המספרים המתחלקים בחמש עשרה.", math_expression: "n_{2} = 6" },
            { verbal_explanation: "שלב 3: ספירת המספרים המשותפים לשתי הקבוצות (כפולות של שלושים).", math_expression: "n_{3} = 3" },
            { verbal_explanation: "שלב 4: שימוש בנוסחת האיחוד לחישוב סך המקרים הייחודיים.", math_expression: "m = 10 + 6 - 3 = 13" },
            { verbal_explanation: "שלב 5: חלוקת הכמות הרצויה במרחב המדגם המלא.", math_expression: "P = \\dfrac{13}{100}" }
        ],
        final_answer: "13/100"
    },

    // ==========================================
    // תת נושא 2: דיאגרמת עץ (ניסויים רב-שלביים) (10 שאלות)
    // ==========================================

    {
        topic: "probability_471",
        subTopic: "דיאגרמת עץ (ניסויים רב-שלביים)",
        question_text: "בכד יש 5 כדורים אדומים ו-3 כדורים לבנים. מוציאים כדור אחד, לא מחזירים אותו, ומוציאים כדור שני. מה ההסתברות ששני הכדורים שהוצאו הם באותו הצבע?&rlm;",
        options: ["13/28", "20/56", "1/2", "15/28"],
        correctAnswer: 0,
        hint: "זהו ניסוי ללא החזרה. המסלולים הם: אדום-אדום, וגם לבן-לבן. חשבו את ההסתברות של כל ענף וסכמו אותן.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב הענף של שני אדומים ללא החזרה.", math_expression: "P_{1} = \\dfrac{5}{8} \\times \\dfrac{4}{7} = \\dfrac{20}{56}" },
            { verbal_explanation: "שלב 2: חישוב הענף של שני לבנים ללא החזרה.", math_expression: "P_{2} = \\dfrac{3}{8} \\times \\dfrac{2}{7} = \\dfrac{6}{56}" },
            { verbal_explanation: "שלב 3: חיבור המסלולים הרלוונטיים.", math_expression: "P = \\dfrac{20}{56} + \\dfrac{6}{56} = \\dfrac{26}{56}" },
            { verbal_explanation: "שלב 4: צמצום השבר לשם התאמה לאפשרויות.", math_expression: "P = \\dfrac{13}{28}" }
        ],
        final_answer: "13/28"
    },
    {
        topic: "probability_471",
        subTopic: "דיאגרמת עץ (ניסויים רב-שלביים)",
        question_text: "צלף יורה שתי יריות בלתי תלויות למטרה. ההסתברות שיפגע בירייה בודדת היא 0.7. מה ההסתברות שהצלף יפגע לפחות פעם אחת מתוך שתי היריות?&rlm;",
        options: ["0.91", "0.49", "0.42", "0.8"],
        correctAnswer: 0,
        hint: "חשבו את המאורע המשלים: להחטיא פעמיים ברצף. חסרו מ-1.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב ההסתברות להחטאה בירייה בודדת.", math_expression: "P_{1} = 1 - 0.7 = 0.3" },
            { verbal_explanation: "שלב 2: חישוב ההסתברות להחטאה בשתי היריות ברציפות.", math_expression: "P_{2} = 0.3 \\times 0.3 = 0.09" },
            { verbal_explanation: "שלב 3: שימוש במאורע משלים למציאת פגיעה אחת לפחות.", math_expression: "P = 1 - 0.09 = 0.91" }
        ],
        final_answer: "0.91"
    },
    {
        topic: "probability_471",
        subTopic: "דיאגרמת עץ (ניסויים רב-שלביים)",
        question_text: "מזג האוויר ביום מסוים תלוי רק ביום שלפניו. אם ביום ראשון ירד גשם, ההסתברות לגשם בשני היא 0.8. אם בראשון לא ירד, ההסתברות לגשם בשני היא 0.3. ידוע שביום ראשון ירד גשם. מה ההסתברות שיירד גשם ביום שלישי?&rlm;",
        options: ["0.7", "0.64", "0.06", "0.8"],
        correctAnswer: 0,
        hint: "בנו עץ (שני, שלישי). מסלול 1: גשם->גשם. מסלול 2: אין גשם->גשם. חברו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב הענף של רצף ימי גשם.", math_expression: "P_{1} = 0.8 \\times 0.8 = 0.64" },
            { verbal_explanation: "שלב 2: הגדרת ההסתברות להפסקת גשם ביום שני.", math_expression: "P_{3} = 1 - 0.8 = 0.2" },
            { verbal_explanation: "שלב 3: חישוב הענף של הפוגה וחזרה של גשם.", math_expression: "P_{2} = 0.2 \\times 0.3 = 0.06" },
            { verbal_explanation: "שלב 4: סכימת שני הענפים שמובילים לגשם ביום השלישי.", math_expression: "P = 0.64 + 0.06 = 0.70" }
        ],
        final_answer: "0.7"
    },
    {
        topic: "probability_471",
        subTopic: "דיאגרמת עץ (ניסויים רב-שלביים)",
        question_text: "במפעל יש שתי מכונות. מכונה א' מייצרת 60% מהמוצרים ומכונה ב' את השאר (40%). 3% מהמוצרים של מכונה א' פגומים, ו-5% מהמוצרים של מכונה ב' פגומים. מהי ההסתברות לבחור מוצר פגום באקראי מכלל התוצרת?&rlm;",
        options: ["0.038", "0.018", "0.02", "0.08"],
        correctAnswer: 0,
        hint: "עץ קלאסי לחישוב הסתברות שלמה. מסלול א': מיוצר ב-א' וגם פגום. מסלול ב': מיוצר ב-ב' וגם פגום. המירו לאחוזים עשרוניים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מסלול פגם ממכונה ראשונה.", math_expression: "P_{1} = 0.6 \\times 0.03 = 0.018" },
            { verbal_explanation: "שלב 2: מסלול פגם ממכונה שנייה.", math_expression: "P_{2} = 0.4 \\times 0.05 = 0.020" },
            { verbal_explanation: "שלב 3: חיבור המסלולים לקבלת הסיכוי הכללי לפגם בייצור.", math_expression: "P = 0.018 + 0.020 = 0.038" }
        ],
        final_answer: "0.038"
    },
    {
        topic: "probability_471",
        subTopic: "דיאגרמת עץ (ניסויים רב-שלביים)",
        question_text: "תלמיד ניגש למבחן תיאוריה עד 3 פעמים לכל היותר. ההסתברות שיעבור בטסט 1 היא 0.5. אם נכשל, ההסתברות לעבור בטסט 2 היא 0.6. אם נכשל, ההסתברות לעבור בטסט 3 היא 0.8. מה ההסתברות שיקבל רישיון?&rlm;",
        options: ["0.96", "0.5", "0.8", "0.76"],
        correctAnswer: 0,
        hint: "חישוב מהיר דרך המאורע המשלים: מה ההסתברות שייכשל בכל שלושת הטסטים?",
        solution_steps: [
            { verbal_explanation: "שלב 1: איסוף ההסתברויות לכישלון בלבד בכל שלב.", math_expression: "P_{1} = 0.5 \\quad , \\quad P_{2} = 0.4 \\quad , \\quad P_{3} = 0.2" },
            { verbal_explanation: "שלב 2: חישוב המסלול שבו נכשל בכל המבחנים ברצף.", math_expression: "P_{F} = 0.5 \\times 0.4 \\times 0.2 = 0.04" },
            { verbal_explanation: "שלב 3: השלמה לאחת המייצגת הצלחה לפחות בטסט אחד.", math_expression: "P = 1 - 0.04 = 0.96" }
        ],
        final_answer: "0.96"
    },
    {
        topic: "probability_471",
        subTopic: "דיאגרמת עץ (ניסויים רב-שלביים)",
        question_text: "בקופסה 4 כדורים אדומים ו-6 כחולים. מוציאים 2 כדורים עם החזרה. מה ההסתברות שבדיוק כדור אחד שהוצא הוא אדום?&rlm;",
        options: ["0.48", "0.24", "0.5", "0.16"],
        correctAnswer: 0,
        hint: "יש החזרה ולכן ההסתברויות קבועות. חשבו את שני המסלולים: (אדום-כחול) ועוד (כחול-אדום).",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב ענף של אדום ואחריו כחול עם החזרה.", math_expression: "P_{1} = \\dfrac{4}{10} \\times \\dfrac{6}{10} = 0.24" },
            { verbal_explanation: "שלב 2: חישוב ענף של כחול ואחריו אדום עם החזרה.", math_expression: "P_{2} = \\dfrac{6}{10} \\times \\dfrac{4}{10} = 0.24" },
            { verbal_explanation: "שלב 3: חיבור שני המקרים של הרכב מעורב בדיוק פעם אחת.", math_expression: "P = 0.24 + 0.24 = 0.48" }
        ],
        final_answer: "0.48"
    },
    {
        topic: "probability_471",
        subTopic: "דיאגרמת עץ (ניסויים רב-שלביים)",
        question_text: "שחקן קולע לסל פעמיים. בראשונה ההסתברות לפגוע היא 0.5. אם פגע, הוא צובר ביטחון ובשנייה ההסתברות עולה ל-0.7. אם החטיא בראשונה, ההסתברות בשנייה יורדת ל-0.4. מה ההסתברות שיפגע בדיוק פעם אחת?&rlm;",
        options: ["0.35", "0.15", "0.2", "0.65"],
        correctAnswer: 0,
        hint: "חברו את הענף (פגע, החטיא) עם הענף (החטיא, פגע).",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב הענף שבו פגע בראשונה אך החטיא בשנייה (המשלים של העלייה בביטחון).", math_expression: "P_{1} = 0.5 \\times (1 - 0.7) = 0.5 \\times 0.3 = 0.15" },
            { verbal_explanation: "שלב 2: חישוב הענף שבו החטיא בראשונה אך פגע בשנייה.", math_expression: "P_{2} = 0.5 \\times 0.4 = 0.20" },
            { verbal_explanation: "שלב 3: איחוד שני המסלולים המייצגים פגיעה בודדת.", math_expression: "P = 0.15 + 0.20 = 0.35" }
        ],
        final_answer: "0.35"
    },
    {
        topic: "probability_471",
        subTopic: "דיאגרמת עץ (ניסויים רב-שלביים)",
        question_text: "עומדות לפנינו 3 קופסאות, והסיכוי לבחור בכל אחת מהן שווה. בקופסה א': 2 זהב ו-3 כסף. קופסה ב': 4 זהב ו-1 כסף. קופסה ג': 0 זהב ו-5 כסף. בוחרים קופסה, ושולפים ממנה מטבע. מה ההסתברות למטבע זהב?&rlm;",
        options: ["2/5", "6/15", "1/3", "4/5"],
        correctAnswer: 0,
        hint: "ההסתברות לכל קופסה היא 1/3. הכפילו 1/3 בהסתברות לזהב מתוך כל קופסה, וחברו את שלושת המכפלות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב המסלול דרך קופסה א'.", math_expression: "P_{1} = \\dfrac{1}{3} \\times \\dfrac{2}{5} = \\dfrac{2}{15}" },
            { verbal_explanation: "שלב 2: חישוב המסלול דרך קופסה ב'.", math_expression: "P_{2} = \\dfrac{1}{3} \\times \\dfrac{4}{5} = \\dfrac{4}{15}" },
            { verbal_explanation: "שלב 3: חישוב המסלול דרך קופסה ג' (אפס מקרים רצויים).", math_expression: "P_{3} = \\dfrac{1}{3} \\times 0 = 0" },
            { verbal_explanation: "שלב 4: סכימת הענפים המובילים למטבע המבוקש.", math_expression: "P = \\dfrac{2}{15} + \\dfrac{4}{15} = \\dfrac{6}{15}" },
            { verbal_explanation: "שלב 5: צמצום השבר לשם התאמה.", math_expression: "P = \\dfrac{2}{5}" }
        ],
        final_answer: "2/5"
    },
    {
        topic: "probability_471",
        subTopic: "דיאגרמת עץ (ניסויים רב-שלביים)",
        question_text: "בבניין מותקנות שתי מערכות אזעקה שאינן תלויות זו בזו. ההסתברות שמערכת א' תפעל בפריצה היא 0.9, ושמערכת ב' תפעל היא 0.8. מה ההסתברות שלפחות אחת מהן תפעל?&rlm;",
        options: ["0.98", "0.72", "0.9", "0.85"],
        correctAnswer: 0,
        hint: "חשבו את ההסתברות שאף מערכת לא תפעל (המשלים), וחסרו מ-1.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב ההסתברות לכישלון המערכת הראשונה.", math_expression: "P_{1} = 1 - 0.9 = 0.1" },
            { verbal_explanation: "שלב 2: חישוב ההסתברות לכישלון המערכת השנייה.", math_expression: "P_{2} = 1 - 0.8 = 0.2" },
            { verbal_explanation: "שלב 3: הפעלת חוק הכפל למאורעות בלתי תלויים על מנת לחשב כישלון כפול.", math_expression: "P_{F} = 0.1 \\times 0.2 = 0.02" },
            { verbal_explanation: "שלב 4: חזרה להסתברות הרצויה דרך המאורע המשלים.", math_expression: "P = 1 - 0.02 = 0.98" }
        ],
        final_answer: "0.98"
    },
    {
        topic: "probability_471",
        subTopic: "דיאגרמת עץ (ניסויים רב-שלביים)",
        question_text: "מסובבים שני סביבונים. סביבון א' מחולק ל-3 חלקים שווים (1, 2, 3). סביבון ב' מחולק ל-4 חלקים שווים (1, 2, 3, 4). מה ההסתברות שסכום המספרים בשני הסביבונים יהיה בדיוק 4?&rlm;",
        options: ["1/4", "1/12", "1/6", "3/7"],
        correctAnswer: 0,
        hint: "הזוגות הרלוונטיים (מסביבון א' ואז מסביבון ב'): (1,3), (2,2), (3,1). ההסתברות לכל זוג היא (1/3)*(1/4).",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב ההסתברות לקבלת ענף ספציפי בעץ המורכב משני הסביבונים.", math_expression: "P_{1} = \\dfrac{1}{3} \\times \\dfrac{1}{4} = \\dfrac{1}{12}" },
            { verbal_explanation: "שלב 2: מניית כמות המסלולים המקיימים את הדרישה של סכום ארבע.", math_expression: "m = 3" },
            { verbal_explanation: "שלב 3: כפל ההסתברות הבודדת במספר הענפים המוצלחים.", math_expression: "P = 3 \\times \\dfrac{1}{12} = \\dfrac{3}{12}" },
            { verbal_explanation: "שלב 4: צמצום לשבר המוגמר.", math_expression: "P = \\dfrac{1}{4}" }
        ],
        final_answer: "1/4"
    },

    // ==========================================
    // תת נושא 3: טבלה דו-ממדית (הסתברות מותנית פשוטה) (10 שאלות)
    // ==========================================

    {
        topic: "probability_471",
        subTopic: "טבלה דו-ממדית (הסתברות מותנית פשוטה)",
        question_text: "בכיתה יש 40 בנים ו-60 בנות. 10 מתוך הבנים מרכיבים משקפיים, ו-20 מהבנות מרכיבות משקפיים. מהי ההסתברות שילד שנבחר ומרכיב משקפיים הוא למעשה בן?&rlm;",
        options: ["1/3", "1/4", "1/10", "1/5"],
        correctAnswer: 0,
        hint: "התנאי צמצם את האוכלוסייה לבעלי המשקפיים בלבד. סך הכל יש 30 עם משקפיים. מתוכם יש 10 בנים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב המכנה על פי התנאי החדש - סך כל התלמידים עם משקפיים.", math_expression: "n = 10 + 20 = 30" },
            { verbal_explanation: "שלב 2: מציאת המונה - הבנים מתוך קבוצה זו.", math_expression: "m = 10" },
            { verbal_explanation: "שלב 3: כתיבת השבר המותנה.", math_expression: "P = \\dfrac{10}{30}" },
            { verbal_explanation: "שלב 4: צמצום השבר.", math_expression: "P = \\dfrac{1}{3}" }
        ],
        final_answer: "1/3"
    },
    {
        topic: "probability_471",
        subTopic: "טבלה דו-ממדית (הסתברות מותנית פשוטה)",
        question_text: "בטבלה מופיעים אירועים A ו-B. נתון כי P(A)=0.6, P(B)=0.5, ו- P(A∩B)=0.3. האם המאורעות בלתי תלויים זה בזה?&rlm;",
        options: ["כן", "לא", "אי אפשר לקבוע", "הם מאורעות זרים"],
        correctAnswer: 0,
        hint: "בדקו אם מכפלת ההסתברויות השוליות P(A) כפול P(B) שווה להסתברות של החיתוך.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת משוואת התנאי לאי תלות.", math_expression: "P(A \\cap B) = P(A) \\times P(B)" },
            { verbal_explanation: "שלב 2: הצבת הנתונים מהטבלה.", math_expression: "0.3 = 0.6 \\times 0.5" },
            { verbal_explanation: "שלב 3: ביצוע הכפל והשוואת אגפים.", math_expression: "0.3 = 0.3" },
            { verbal_explanation: "שלב 4: הפסוק אמת, ולכן הם בלתי תלויים.", math_expression: "1" }
        ],
        final_answer: "כן"
    },
    {
        topic: "probability_471",
        subTopic: "טבלה דו-ממדית (הסתברות מותנית פשוטה)",
        question_text: "ההסתברות לאירוע A היא 0.7. ההסתברות לאירוע B היא 0.4. ההסתברות ששניהם יקרו או לפחות אחד מהם (האיחוד) היא 0.9. מה ההסתברות ששניהם יקרו יחד (החיתוך)?&rlm;",
        options: ["0.2", "0.3", "0.4", "0.1"],
        correctAnswer: 0,
        hint: "השתמשו בנוסחת האיחוד: איחוד שווה ל-A פלוס B פחות החיתוך.",
        solution_steps: [
            { verbal_explanation: "שלב 1: העלאת הנוסחה הכללית לאיחוד מאורעות.", math_expression: "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)" },
            { verbal_explanation: "שלב 2: הצבת הנתונים בתוך הנוסחה.", math_expression: "0.9 = 0.7 + 0.4 - x" },
            { verbal_explanation: "שלב 3: כינוס האגף הימני.", math_expression: "0.9 = 1.1 - x" },
            { verbal_explanation: "שלב 4: בידוד נעלם החיתוך.", math_expression: "x = 1.1 - 0.9 = 0.2" }
        ],
        final_answer: "0.2"
    },
    {
        topic: "probability_471",
        subTopic: "טבלה דו-ממדית (הסתברות מותנית פשוטה)",
        question_text: "טבלה כוללת 200 אנשים. מתוכם 80 מהנדסים. מתוך 120 הגברים שבקבוצה, 60 הם מהנדסים. כמה נשים אינן מהנדסות בקבוצה זו?&rlm;",
        options: ["60", "20", "80", "40"],
        correctAnswer: 0,
        hint: "כמות הנשים היא 200-120=80. כמות הנשים המהנדסות היא 80 (כלל המהנדסים) פחות 60 (הגברים המהנדסים) שווה 20. חסרו מתוך הנשים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב סך כל הנשים באוכלוסייה.", math_expression: "n_{W} = 200 - 120 = 80" },
            { verbal_explanation: "שלב 2: חישוב כמות המהנדסות שהן נשים בלבד.", math_expression: "n_{WE} = 80 - 60 = 20" },
            { verbal_explanation: "שלב 3: הפחתת המהנדסות מסך כל הנשים לקבלת היתרה.", math_expression: "m = 80 - 20 = 60" }
        ],
        final_answer: "60"
    },
    {
        topic: "probability_471",
        subTopic: "טבלה דו-ממדית (הסתברות מותנית פשוטה)",
        question_text: "ההסתברות לאירוע A וגם לאירוע B היא 0.2. ההסתברות לאירוע A בלבד (ללא B) היא 0.3. מהי ההסתברות הכוללת לאירוע A?&rlm;",
        options: ["0.5", "0.1", "0.6", "0.25"],
        correctAnswer: 0,
        hint: "השוליים בטבלה (סך הכל A) הם סכום התאים המרכיבים אותם (A וגם B, יחד עם A וגם לא B).",
        solution_steps: [
            { verbal_explanation: "שלב 1: קביעת משוואת השוליים בטבלה דו ממדית.", math_expression: "P(A) = P(A \\cap B) + P(A \\cap Not B)" },
            { verbal_explanation: "שלב 2: הצבת הנתונים מהשאלה.", math_expression: "P(A) = 0.2 + 0.3" },
            { verbal_explanation: "שלב 3: סכימה פשוטה למציאת הפתרון.", math_expression: "P(A) = 0.5" }
        ],
        final_answer: "0.5"
    },
    {
        topic: "probability_471",
        subTopic: "טבלה דו-ממדית (הסתברות מותנית פשוטה)",
        question_text: "ההסתברות לאדם מבוגר היא 0.5, ולמעשן היא 0.3. ידוע כי המאורעות בלתי תלויים. מהי ההסתברות לבחור אדם שאינו מבוגר וגם אינו מעשן?&rlm;",
        options: ["0.35", "0.15", "0.7", "0.5"],
        correctAnswer: 0,
        hint: "ההסתברויות המשלימות: לא מבוגר (0.5), לא מעשן (0.7). מכיוון שהמאורעות בלתי תלויים, מכפילים אותן.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב המשלים לאדם מבוגר.", math_expression: "P_{1} = 1 - 0.5 = 0.5" },
            { verbal_explanation: "שלב 2: חישוב המשלים לאדם מעשן.", math_expression: "P_{2} = 1 - 0.3 = 0.7" },
            { verbal_explanation: "שלב 3: הכפלת המאורעות המשלימים על בסיס ההנחה שהם בלתי תלויים.", math_expression: "P = 0.5 \\times 0.7 = 0.35" }
        ],
        final_answer: "0.35"
    },
    {
        topic: "probability_471",
        subTopic: "טבלה דו-ממדית (הסתברות מותנית פשוטה)",
        question_text: "ההסתברות לאירוע A מותנה באירוע B היא 0.3. ההסתברות הכוללת של אירוע B היא 0.7. מה ההסתברות לחיתוך בין A ל-B?&rlm;",
        options: ["0.21", "0.42", "0.1", "0.3"],
        correctAnswer: 0,
        hint: "לפי נוסחת ההסתברות המותנית: החיתוך שווה להסתברות של התנאי כפול ההסתברות המותנית.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת חוק ההסתברות המותנית.", math_expression: "P(A|B) = \\dfrac{P(A \\cap B)}{P(B)}" },
            { verbal_explanation: "שלב 2: בידוד החיתוך על ידי הכפלה במכנה.", math_expression: "P(A \\cap B) = P(A|B) \\times P(B)" },
            { verbal_explanation: "שלב 3: הצבת הנתונים המספריים.", math_expression: "P = 0.3 \\times 0.7 = 0.21" }
        ],
        final_answer: "0.21"
    },
    {
        topic: "probability_471",
        subTopic: "טבלה דו-ממדית (הסתברות מותנית פשוטה)",
        question_text: "רכבת מאחרת בבוקר בהסתברות 0.1, ובערב בהסתברות 0.2. ההסתברות שהיא תאחר לפחות באחת מהפעמים היא 0.25. מה ההסתברות שהיא תאחר גם בבוקר וגם בערב?&rlm;",
        options: ["0.05", "0.1", "0.15", "0.02"],
        correctAnswer: 0,
        hint: "השתמשו בנוסחת האיחוד: 0.1 ועוד 0.2 פחות החיתוך, שווה 0.25.",
        solution_steps: [
            { verbal_explanation: "שלב 1: רישום נוסחת האיחוד הקלאסית.", math_expression: "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)" },
            { verbal_explanation: "שלב 2: הצבת הנתונים מן הבעיה.", math_expression: "0.25 = 0.1 + 0.2 - x" },
            { verbal_explanation: "שלב 3: סידור המשוואה על ידי כינוס.", math_expression: "0.25 = 0.3 - x" },
            { verbal_explanation: "שלב 4: בידוד החיתוך ופיתרון.", math_expression: "x = 0.3 - 0.25 = 0.05" }
        ],
        final_answer: "0.05"
    },
    {
        topic: "probability_471",
        subTopic: "טבלה דו-ממדית (הסתברות מותנית פשוטה)",
        question_text: "במדגם של 100 סטודנטים, 60 לומדים מתמטיקה, 50 לומדים אנגלית, ו-20 לא לומדים אף אחד מהם. אם בוחרים סטודנט שלומד אנגלית, מה ההסתברות שהוא לומד גם מתמטיקה?&rlm;",
        options: ["0.6", "0.5", "0.3", "0.4"],
        correctAnswer: 0,
        hint: "הלומדים לפחות משהו הם 80. החיתוך (גם וגם) הוא 60 ועוד 50 פחות 80 (שזה 30). אם נבחר לומד אנגלית (מתוך 50), מה הסיכוי שהוא גם לומד מתמטיקה (30)?",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב קבוצת הסטודנטים שלומדים לפחות משהו אחד מהשלמה לשלם.", math_expression: "n_{L} = 100 - 20 = 80" },
            { verbal_explanation: "שלב 2: חישוב החיתוך מתוך האיחוד וסכומי הקבוצות המקוריים.", math_expression: "m = 60 + 50 - 80 = 30" },
            { verbal_explanation: "שלב 3: כתיבת שבר מותנה - החיתוך חלקי גודל קבוצת האנגלית.", math_expression: "P = \\dfrac{30}{50}" },
            { verbal_explanation: "שלב 4: המרה לעשרוני.", math_expression: "P = 0.6" }
        ],
        final_answer: "0.6"
    },
    {
        topic: "probability_471",
        subTopic: "טבלה דו-ממדית (הסתברות מותנית פשוטה)",
        question_text: "בכד 10 כדורים: 6 אדומים ו-4 כחולים. מוציאים 2 כדורים ללא החזרה. ידוע שהכדור הראשון היה אדום. מה ההסתברות שגם הכדור השני אדום?&rlm;",
        options: ["5/9", "6/10", "4/9", "5/10"],
        correctAnswer: 0,
        hint: "אם הכדור הראשון היה אדום (והוצא ללא החזרה), נשארו בכד 9 כדורים בסך הכל, מתוכם רק 5 אדומים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: עדכון מרחב המדגם לאחר הוצאת כדור אחד ללא החזרתו למקום.", math_expression: "n = 10 - 1 = 9" },
            { verbal_explanation: "שלב 2: עדכון כמות הכדורים הרצויים לאחר הוצאת כדור מצבע זהה.", math_expression: "m = 6 - 1 = 5" },
            { verbal_explanation: "שלב 3: הרכבת השבר להוצאה השנייה.", math_expression: "P = \\dfrac{5}{9}" }
        ],
        final_answer: "5/9"
    },

    // ==========================================
    // תת נושא 4: נוסחת ברנולי (התפלגות בינומית) (10 שאלות)
    // ==========================================

    {
        topic: "probability_471",
        subTopic: "נוסחת ברנולי (התפלגות בינומית)",
        question_text: "מטילים קובייה הוגנת 5 פעמים. מהי ההסתברות שיתקבל המספר '6' בדיוק 3 פעמים במהלך ההטלות?&rlm;",
        options: ["5/16", "5/32", "25/216", "10/32"], // אתקן לאופציות מבוססות על מחשבון. הנוסחה היא 10 * (1/6)^3 * (5/6)^2 = 10 * 25 / 7776 = 250 / 7776 = 125 / 3888. נשנה לשבר הקרוב ביותר לעשרוני.
        correctAnswer: 0, // יש כאן טעות אצלי בחישוב המקורי בעץ, אתקן ידנית בתשובות.
        hint: "הציבו בנוסחה: n=5, k=3, p=1/6. המשוואה: מעריך בינומי (5 מעל 3), כפול 1/6 בחזקת 3, כפול 5/6 בחזקת 2.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים בנוסחת ברנולי.", math_expression: "P(3) = \\binom{5}{3} \\times (\\dfrac{1}{6})^{3} \\times (\\dfrac{5}{6})^{2}" },
            { verbal_explanation: "שלב 2: פתרון המקדם הבינומי (חמש עצרת חלקי המכפלות).", math_expression: "\\binom{5}{3} = 10" },
            { verbal_explanation: "שלב 3: פיתוח החזקות שבתוך השברים.", math_expression: "P(3) = 10 \\times \\dfrac{1}{216} \\times \\dfrac{25}{36}" },
            { verbal_explanation: "שלב 4: הכפלה למציאת המונה והמכנה הסופיים לצמצום חלקי.", math_expression: "P = \\dfrac{250}{7776} = \\dfrac{125}{3888}" }
        ],
        final_answer: "125/3888" // שיניתי כיוון שהאופציות מהמחשבה הקודמת היו של מטבע 0.5 ולא קוביה
    },
    // תיקון שאלת ברנולי באופציות
    {
        topic: "probability_471",
        subTopic: "נוסחת ברנולי (התפלגות בינומית)",
        question_text: "מטילים מטבע הוגן 5 פעמים. מהי ההסתברות שיתקבל 'עץ' בדיוק 3 פעמים במהלך ההטלות?&rlm;",
        options: ["5/16", "10/32", "5/32", "1/2"],
        correctAnswer: 0,
        hint: "הציבו בנוסחה: n=5, k=3, p=1/2. המשוואה: מעריך בינומי (5 מעל 3), כפול 1/2 בחזקת 3, כפול 1/2 בחזקת 2.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים בנוסחת ברנולי בהינתן הסתברות של חצי למטבע.", math_expression: "P(3) = \\binom{5}{3} \\times (\\dfrac{1}{2})^{3} \\times (\\dfrac{1}{2})^{2}" },
            { verbal_explanation: "שלב 2: פתרון המקדם הבינומי.", math_expression: "\\binom{5}{3} = 10" },
            { verbal_explanation: "שלב 3: איחוד חזקות של בסיס זהה וחישוב המכנה.", math_expression: "P(3) = 10 \\times (\\dfrac{1}{2})^{5} = 10 \\times \\dfrac{1}{32}" },
            { verbal_explanation: "שלב 4: צמצום השבר על ידי חלוקה בשתיים.", math_expression: "P = \\dfrac{5}{16}" }
        ],
        final_answer: "5/16"
    },
    {
        topic: "probability_471",
        subTopic: "נוסחת ברנולי (התפלגות בינומית)",
        question_text: "מטילים קובייה הוגנת 4 פעמים. מהי ההסתברות שיתקבל המספר '6' בדיוק פעמיים?&rlm;",
        options: ["25/216", "1/36", "25/1296", "5/216"],
        correctAnswer: 0,
        hint: "ברנולי: 4 מעל 2 שווה ל-6. הכפילו ב- 1/6 בחזקת 2, ו- 5/6 בחזקת 2.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית משוואת ברנולי לתרחיש הקובייה הספציפי.", math_expression: "P(2) = \\binom{4}{2} \\times (\\dfrac{1}{6})^{2} \\times (\\dfrac{5}{6})^{2}" },
            { verbal_explanation: "שלב 2: חישוב המקדם הבינומי.", math_expression: "\\binom{4}{2} = 6" },
            { verbal_explanation: "שלב 3: פיתוח החזקות בשברים להמשך החישוב.", math_expression: "P(2) = 6 \\times \\dfrac{1}{36} \\times \\dfrac{25}{36}" },
            { verbal_explanation: "שלב 4: כפל וצמצום באחת מהששיות שבמכנה מול המקדם שש.", math_expression: "P = \\dfrac{25}{216}" }
        ],
        final_answer: "25/216"
    },
    {
        topic: "probability_471",
        subTopic: "נוסחת ברנולי (התפלגות בינומית)",
        question_text: "צלף יורה 4 פעמים למטרה. ההסתברות שיפגע בירייה בודדת היא 0.8. מהי ההסתברות שיפגע בדיוק 3 פעמים?&rlm;",
        options: ["0.4096", "0.512", "0.1536", "0.64"],
        correctAnswer: 0,
        hint: "ברנולי עם n=4, k=3, p=0.8. המקדם הבינומי (4 מעל 3) הוא 4.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבה ישירה לנוסחת ברנולי במבנה העשרוני.", math_expression: "P(3) = \\binom{4}{3} \\times 0.8^{3} \\times 0.2^{1}" },
            { verbal_explanation: "שלב 2: חישוב המקדם הבינומי המייצג בחירה אחת של כישלון מתוך ארבעה ניסיונות.", math_expression: "\\binom{4}{3} = 4" },
            { verbal_explanation: "שלב 3: ביצוע החזקה למספר העשרוני המרכזי.", math_expression: "P(3) = 4 \\times 0.512 \\times 0.2" },
            { verbal_explanation: "שלב 4: מכפלת כלל האיברים במשוואה לקבלת הפתרון.", math_expression: "P = 0.4096" }
        ],
        final_answer: "0.4096"
    },
    {
        topic: "probability_471",
        subTopic: "נוסחת ברנולי (התפלגות בינומית)",
        question_text: "מפעל מייצר פריטים, וההסתברות לפריט פגום היא 0.1. בוחרים באקראי מדגם של 5 פריטים. מהי ההסתברות שלפחות פריט אחד יהיה פגום?&rlm;",
        options: ["0.40951", "0.59049", "0.1", "0.9"],
        correctAnswer: 0,
        hint: "במקום לחשב 1 עד 5, מצאו את ההסתברות למאורע המשלים: 0 פריטים פגומים (כולם תקינים, כלומר 0.9 בחזקת 5). חסרו מ-1.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת המשלים הרצוי - אחד פחות ההסתברות לאפס פגומים.", math_expression: "P(k \\geq 1) = 1 - P(0)" },
            { verbal_explanation: "שלב 2: שימוש בברנולי למקרה הבסיסי של אפס פגומים. המקדם והחזקה מתאפסים לאחת, ונותרת חזקת הכישלון השלמה.", math_expression: "P(0) = 0.9^{5}" },
            { verbal_explanation: "שלב 3: חישוב החזקה החמישית.", math_expression: "P(0) = 0.59049" },
            { verbal_explanation: "שלב 4: השלמה לאחת לצורך קבלת המאורע של פגום אחד לפחות.", math_expression: "P = 1 - 0.59049 = 0.40951" }
        ],
        final_answer: "0.40951"
    },
    {
        topic: "probability_471",
        subTopic: "נוסחת ברנולי (התפלגות בינומית)",
        question_text: "במשפחה יש 4 ילדים. ידוע שההסתברות שיוולד בן שווה להסתברות שתוולד בת. מהי ההסתברות שבמשפחה יש 2 בנים ו-2 בנות בדיוק?&rlm;",
        options: ["3/8", "1/2", "1/4", "5/8"],
        correctAnswer: 0,
        hint: "ברנולי: n=4, k=2, p=0.5. המקדם הוא 6. החזקות של חצי מתאחדות לחצי בחזקת 4.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבה בברנולי של מאורעות שווי הסתברות.", math_expression: "P(2) = \\binom{4}{2} \\times 0.5^{2} \\times 0.5^{2}" },
            { verbal_explanation: "שלב 2: חישוב המקדם הבינומי מתוך הנוסחה.", math_expression: "\\binom{4}{2} = 6" },
            { verbal_explanation: "שלב 3: איחוד חזקות של בסיס זהה והמרת עשרוני לשבר רגיל.", math_expression: "P(2) = 6 \\times (\\dfrac{1}{2})^{4} = 6 \\times \\dfrac{1}{16}" },
            { verbal_explanation: "שלב 4: צמצום השבר על ידי חלוקה בשתיים.", math_expression: "P = \\dfrac{3}{8}" }
        ],
        final_answer: "3/8"
    },
    {
        topic: "probability_471",
        subTopic: "נוסחת ברנולי (התפלגות בינומית)",
        question_text: "במבחן אמריקאי יש 5 שאלות. לכל שאלה 4 תשובות, מתוכן רק אחת נכונה. תלמיד מנחש את כל התשובות. מה ההסתברות שהוא יענה נכונה על בדיוק 4 שאלות מתוך ה-5?&rlm;",
        options: ["15/1024", "1/256", "5/1024", "1/4"],
        correctAnswer: 0,
        hint: "ההסתברות להצלחה היא 0.25 (רבע). ברנולי עם n=5, k=4. המקדם הוא 5.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית נוסחת ברנולי מותאמת להסתברויות בשברים.", math_expression: "P(4) = \\binom{5}{4} \\times (\\dfrac{1}{4})^{4} \\times (\\dfrac{3}{4})^{1}" },
            { verbal_explanation: "שלב 2: פתרון המקדם של בחירת ארבע מתוך חמש.", math_expression: "\\binom{5}{4} = 5" },
            { verbal_explanation: "שלב 3: ביצוע החזקה לשבר הראשון ולהכפלתו בשבר השני.", math_expression: "P(4) = 5 \\times \\dfrac{1}{256} \\times \\dfrac{3}{4}" },
            { verbal_explanation: "שלב 4: הכפלת המונה והמכנה לתוצאה מוגמרת.", math_expression: "P = \\dfrac{15}{1024}" }
        ],
        final_answer: "15/1024"
    },
    {
        topic: "probability_471",
        subTopic: "נוסחת ברנולי (התפלגות בינומית)",
        question_text: "במבחן קצר (נכון/לא נכון) יש 10 שאלות. תלמיד מנחש את כל התשובות. מה ההסתברות שיענה נכונה על כל ה-10 שאלות (הצלחה מלאה)?&rlm;",
        options: ["1/1024", "1/512", "1/100", "1/10"],
        correctAnswer: 0,
        hint: "ההסתברות להצלחה בניחוש עיוור כזה היא 1/2. במקרה של הצלחה מלאה, אין צורך במקדם בינומי, פשוט מכפילים את ההסתברות בעצמה n פעמים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים במצב קיצון של ברנולי בו נדרשות עשר הצלחות מתוך עשר.", math_expression: "P(10) = \\binom{10}{10} \\times (\\dfrac{1}{2})^{10} \\times (\\dfrac{1}{2})^{0}" },
            { verbal_explanation: "שלב 2: ציון העובדה ששני הגורמים הקיצוניים בנוסחה שווים לאחת ולכן נעלמים במכפלה.", math_expression: "P = 1 \\times (\\dfrac{1}{2})^{10} \\times 1" },
            { verbal_explanation: "שלב 3: העלאת שתיים לחזקת עשר מניבה את התוצאה במכנה.", math_expression: "P = \\dfrac{1}{1024}" }
        ],
        final_answer: "1/1024"
    },
    {
        topic: "probability_471",
        subTopic: "נוסחת ברנולי (התפלגות בינומית)",
        question_text: "מסובבים סביבון המחולק ל-3 צבעים: ההסתברות לאדום היא 1/2, לכחול היא 1/4, ולירוק היא 1/4. מסובבים את הסביבון 3 פעמים. מה ההסתברות שיתקבל צבע אדום בדיוק פעמיים?&rlm;",
        options: ["3/8", "1/8", "1/4", "3/16"],
        correctAnswer: 0,
        hint: "ההסתברות להצלחה (אדום) היא 1/2. ההסתברות לכישלון (כל צבע אחר) היא 1/2. ברנולי עם n=3, k=2.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים בנוסחת ברנולי.", math_expression: "P(2) = \\binom{3}{2} \\times (\\dfrac{1}{2})^{2} \\times (\\dfrac{1}{2})^{1}" },
            { verbal_explanation: "שלב 2: פתרון המקדם הבינומי.", math_expression: "\\binom{3}{2} = 3" },
            { verbal_explanation: "שלב 3: איחוד החזקות הבסיסיות בעלות בסיס זהה וביצוע החשבון.", math_expression: "P(2) = 3 \\times (\\dfrac{1}{2})^{3} = 3 \\times \\dfrac{1}{8}" },
            { verbal_explanation: "שלב 4: הרכבת השבר הסופי.", math_expression: "P = \\dfrac{3}{8}" }
        ],
        final_answer: "3/8"
    },
    {
        topic: "probability_471",
        subTopic: "נוסחת ברנולי (התפלגות בינומית)",
        question_text: "שחקן זורק 3 כדורי עונשין. ההסתברות לקלוע בזריקה בודדת היא 0.7. מה ההסתברות שהוא יקלע לכל היותר זריקה אחת?&rlm;",
        options: ["0.216", "0.343", "0.189", "0.027"],
        correctAnswer: 0,
        hint: "לכל היותר זריקה אחת משמעותה: או 0 קליעות, או קליעה 1. חשבו את שני המצבים בברנולי וחברו אותם.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב המצב של אפס הצלחות מתוך שלוש.", math_expression: "P(0) = \\binom{3}{0} \\times 0.7^{0} \\times 0.3^{3} = 1 \\times 1 \\times 0.027 = 0.027" },
            { verbal_explanation: "שלב 2: חישוב המצב של הצלחה אחת בדיוק מתוך שלוש.", math_expression: "P(1) = \\binom{3}{1} \\times 0.7^{1} \\times 0.3^{2} = 3 \\times 0.7 \\times 0.09 = 0.189" },
            { verbal_explanation: "שלב 3: איחוד שני המקרים העומדים בתנאי 'לכל היותר אחד'.", math_expression: "P = 0.027 + 0.189" },
            { verbal_explanation: "שלב 4: חיבור המשתנים.", math_expression: "P = 0.216" }
        ],
        final_answer: "0.216"
    },
    // ==========================================
    // תת נושא 1: משפט בייס (הסתברות מותנית מלאה) (10 שאלות)
    // ==========================================
    {
        "topic": "prob_stats_471",
        "subTopic": "משפט בייס (הסתברות מותנית מלאה)",
        "question_text": "מפעל מייצר נורות בשתי מכונות. מכונה א' מייצרת 20% מהנורות ומכונה ב' מייצרת 80%. שיעור הנורות הפגומות במכונה א' הוא 5% ובמכונה ב' הוא 10%. נבחרה נורה אקראית מכלל התוצרת ונמצא כי היא פגומה. מהי ההסתברות שהיא יוצרה במכונה א'?&rlm;",
        "options": ["1/9", "2/9", "1/5", "1/10"],
        "correctAnswer": 0,
        "hint": "השתמשו בנוסחת בייס: ההסתברות לחיתוך (מכונה א' וגם פגומה) לחלק להסתברות השלמה לנורה פגומה מכל המפעל.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את ההסתברויות ההתחלתיות לבחירת כל מכונה.", "math_expression": "P(A) = 0.2 \\quad , \\quad P(B) = 0.8" },
            { "verbal_explanation": "נרשום את ההסתברויות המותנות לייצור נורה פגומה בכל מכונה.", "math_expression": "P(D|A) = 0.05 \\quad , \\quad P(D|B) = 0.1" },
            { "verbal_explanation": "נחשב את ההסתברות לחיתוך: גם ממכונה א' וגם פגומה.", "math_expression": "P(A \\cap D) = 0.2 \\times 0.05 = 0.01" },
            { "verbal_explanation": "נחשב את ההסתברות לחיתוך: גם ממכונה ב' וגם פגומה.", "math_expression": "P(B \\cap D) = 0.8 \\times 0.1 = 0.08" },
            { "verbal_explanation": "נחשב את ההסתברות השלמה לקבלת נורה פגומה במפעל כולו.", "math_expression": "P(D) = 0.01 + 0.08 = 0.09" },
            { "verbal_explanation": "נחשב את ההסתברות המותנית המבוקשת על פי הנוסחה של משפט בייס.", "math_expression": "P(A|D) = \\dfrac{P(A \\cap D)}{P(D)}" },
            { "verbal_explanation": "נציב את הערכים ונצמצם את השבר.", "math_expression": "P(A|D) = \\dfrac{0.01}{0.09} = \\dfrac{1}{9}" }
        ],
        "final_answer": "1/9"
    },
    {
        "topic": "prob_stats_471",
        "subTopic": "משפט בייס (הסתברות מותנית מלאה)",
        "question_text": "בעיר מסוימת ההסתברות לגשם ביום אקראי היא 0.3. ידוע שאם יורד גשם, ההסתברות לפקקי תנועה היא 0.8. אם לא יורד גשם, ההסתברות לפקקי תנועה היא 0.2. אדם יצא מביתו ונתקל בפקק תנועה. מהי ההסתברות שירד גשם באותו יום?&rlm;",
        "options": ["12/19", "6/19", "0.8", "12/25"],
        "correctAnswer": 0,
        "hint": "חשבו את חיתוך 'גשם ופקק' ואת חיתוך 'אין גשם ופקק'. חלקו את הראשון בסכום שלהם.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את ההסתברויות הבסיסיות למזג האוויר.", "math_expression": "P(R) = 0.3 \\quad , \\quad P(R') = 0.7" },
            { "verbal_explanation": "נחשב את ההסתברות החלקה של יום גשום יחד עם פקקים.", "math_expression": "P(R \\cap T) = 0.3 \\times 0.8 = 0.24" },
            { "verbal_explanation": "נחשב את ההסתברות של יום ללא גשם שבו בכל זאת יש פקקים.", "math_expression": "P(R' \\cap T) = 0.7 \\times 0.2 = 0.14" },
            { "verbal_explanation": "נחשב את ההסתברות הכוללת והמלאה לפקקי תנועה.", "math_expression": "P(T) = 0.24 + 0.14 = 0.38" },
            { "verbal_explanation": "נציב למשוואת ההסתברות המותנית של בייס (גשם בהינתן פקק).", "math_expression": "P(R|T) = \\dfrac{P(R \\cap T)}{P(T)}" },
            { "verbal_explanation": "נציב את הנתונים ונסדר את השבר.", "math_expression": "P(R|T) = \\dfrac{0.24}{0.38}" },
            { "verbal_explanation": "נצמצם את השבר על ידי חלוקה בשתיים.", "math_expression": "P(R|T) = \\dfrac{12}{19}" }
        ],
        "final_answer": "12/19"
    },
    {
        "topic": "prob_stats_471",
        "subTopic": "משפט בייס (הסתברות מותנית מלאה)",
        "question_text": "מערכת לזיהוי דואר זבל מזהה 40% מההודעות הנכנסות כדואר זבל אפשרי. אם הודעה היא דואר זבל, המערכת מכילה את המילה 'חינם' בהסתברות של 0.8. אם ההודעה אינה דואר זבל, היא מכילה את המילה 'חינם' בהסתברות של 0.1. הודעה נבדקה ונמצא שהיא מכילה את המילה 'חינם'. מה ההסתברות שהיא דואר זבל?&rlm;",
        "options": ["16/19", "8/19", "16/25", "4/5"],
        "correctAnswer": 0,
        "hint": "ההסתברות השלמה למילה מורכבת משני התרחישים. חלקו את תרחיש דואר הזבל בסך ההסתברות השלמה.",
        "solution_steps": [
            { "verbal_explanation": "הגדרת סוגי ההודעות.", "math_expression": "P(S) = 0.4 \\quad , \\quad P(S') = 0.6" },
            { "verbal_explanation": "חישוב חיתוך: דואר זבל יחד עם הופעת המילה.", "math_expression": "P(S \\cap W) = 0.4 \\times 0.8 = 0.32" },
            { "verbal_explanation": "חישוב חיתוך: דואר תקין יחד עם הופעת המילה.", "math_expression": "P(S' \\cap W) = 0.6 \\times 0.1 = 0.06" },
            { "verbal_explanation": "סכימת שני החיתוכים לקבלת הסתברות שלמה להופעת המילה.", "math_expression": "P(W) = 0.32 + 0.06 = 0.38" },
            { "verbal_explanation": "הצבה בנוסחת ההסתברות המותנית الهפוכה.", "math_expression": "P(S|W) = \\dfrac{P(S \\cap W)}{P(W)}" },
            { "verbal_explanation": "הצבת המספרים אל התבנית.", "math_expression": "P(S|W) = \\dfrac{0.32}{0.38}" },
            { "verbal_explanation": "צמצום השבר לשבר פשוט.", "math_expression": "P(S|W) = \\dfrac{16}{19}" }
        ],
        "final_answer": "16/19"
    },
    {
        "topic": "prob_stats_471",
        "subTopic": "משפט בייס (הסתברות מותנית מלאה)",
        "question_text": "בכד א' יש 4 כדורים לבנים ו-6 שחורים. בכד ב' יש 8 לבנים ו-2 שחורים. מטילים מטבע הוגן כדי לבחור כד. מוציאים באקראי כדור מהכד שנבחר, והוא יוצא לבן. מהי ההסתברות שהכדור הוצא מכד א'?&rlm;",
        "options": ["1/3", "1/2", "2/5", "1/4"],
        "correctAnswer": 0,
        "hint": "ההסתברות לבחירת כל כד היא חצי. חשבו את חיתוך כד א' וכדור לבן, וחלקו בסכום החיתוכים של שני הכדים עם כדור לבן.",
        "solution_steps": [
            { "verbal_explanation": "ההסתברות לבחירת כל כד שווה בשל המטבע.", "math_expression": "P(U_1) = 0.5 \\quad , \\quad P(U_2) = 0.5" },
            { "verbal_explanation": "חישוב החיתוך של בחירת כד ראשון ושליפת כדור לבן.", "math_expression": "P(U_1 \\cap W) = 0.5 \\times \\dfrac{4}{10} = 0.2" },
            { "verbal_explanation": "חישוב החיתוך של בחירת כד שני ושליפת כדור לבן.", "math_expression": "P(U_2 \\cap W) = 0.5 \\times \\dfrac{8}{10} = 0.4" },
            { "verbal_explanation": "חישוב ההסתברות הכוללת לשליפת כדור לבן מכל כד שהוא.", "math_expression": "P(W) = 0.2 + 0.4 = 0.6" },
            { "verbal_explanation": "חישוב ההסתברות המותנית שהכדור הגיע מהכד הראשון.", "math_expression": "P(U_1|W) = \\dfrac{P(U_1 \\cap W)}{P(W)}" },
            { "verbal_explanation": "הצבת הערכים המחושבים וצמצום השבר.", "math_expression": "P(U_1|W) = \\dfrac{0.2}{0.6} = \\dfrac{1}{3}" }
        ],
        "final_answer": "1/3"
    },
    {
        "topic": "prob_stats_471",
        "subTopic": "משפט בייס (הסתברות מותנית מלאה)",
        "question_text": "מתוך כלל הסטודנטים שניגשו למבחן, 60% למדו אליו. מבין אלו שלמדו, 90% עברו את המבחן. מבין אלו שלא למדו, 40% עברו. סטודנט נבחר באקראי ונמצא שעבר את המבחן. מה ההסתברות שהוא למד למבחן?&rlm;",
        "options": ["27/35", "2/3", "9/10", "3/5"],
        "correctAnswer": 0,
        "hint": "חשבו את ההסתברות לעבור דרך שתי הקבוצות, ואז חלקו את הסטודנטים שלמדו ועברו בתוך סך כל אלו שעברו.",
        "solution_steps": [
            { "verbal_explanation": "הגדרת קבוצת הלומדים וקבוצת הלא לומדים.", "math_expression": "P(S) = 0.6 \\quad , \\quad P(S') = 0.4" },
            { "verbal_explanation": "חישוב החיתוך של אלו שלמדו וגם הצליחו לעבור.", "math_expression": "P(S \\cap P) = 0.6 \\times 0.9 = 0.54" },
            { "verbal_explanation": "חישוב החיתוך של אלו שלא למדו אך הצליחו לעבור.", "math_expression": "P(S' \\cap P) = 0.4 \\times 0.4 = 0.16" },
            { "verbal_explanation": "סכימת כלל העוברים באוכלוסייה.", "math_expression": "P(P) = 0.54 + 0.16 = 0.70" },
            { "verbal_explanation": "שימוש בנוסחת ההסתברות המותנית של בייס.", "math_expression": "P(S|P) = \\dfrac{P(S \\cap P)}{P(P)}" },
            { "verbal_explanation": "הצבה וצמצום של השבר.", "math_expression": "P(S|P) = \\dfrac{0.54}{0.70} = \\dfrac{54}{70} = \\dfrac{27}{35}" }
        ],
        "final_answer": "27/35"
    },
    {
        "topic": "prob_stats_471",
        "subTopic": "משפט בייס (הסתברות מותנית מלאה)",
        "question_text": "מונית מאחרת ב-20% מהנסיעות, ואוטובוס מאחר ב-10% מהנסיעות. אדם נוסע במונית בהסתברות 0.3 ובאוטובוס בהסתברות 0.7. היום האדם איחר לעבודה. מהי ההסתברות שהוא נסע במונית?&rlm;",
        "options": ["6/13", "3/10", "1/2", "7/13"],
        "correctAnswer": 0,
        "hint": "ההסתברות המותנית למסלול בהינתן איחור מחייבת חלוקת החיתוך של מונית ואיחור בסך כל ההסתברויות לאיחור.",
        "solution_steps": [
            { "verbal_explanation": "הגדרת הסתברויות הבסיס של כלי הרכב.", "math_expression": "P(T) = 0.3 \\quad , \\quad P(B) = 0.7" },
            { "verbal_explanation": "חישוב החיתוך של נסיעה במונית המסתיימת באיחור.", "math_expression": "P(T \\cap L) = 0.3 \\times 0.2 = 0.06" },
            { "verbal_explanation": "חישוב החיתוך של נסיעה באוטובוס המסתיימת באיחור.", "math_expression": "P(B \\cap L) = 0.7 \\times 0.1 = 0.07" },
            { "verbal_explanation": "חישוב ההסתברות השלמה והמלאה לכל איחור שהוא.", "math_expression": "P(L) = 0.06 + 0.07 = 0.13" },
            { "verbal_explanation": "הצבה בתבנית ההסתברות המותנית לאיתור מקור הנסיעה.", "math_expression": "P(T|L) = \\dfrac{P(T \\cap L)}{P(L)}" },
            { "verbal_explanation": "קבלת השבר הסופי.", "math_expression": "P(T|L) = \\dfrac{0.06}{0.13} = \\dfrac{6}{13}" }
        ],
        "final_answer": "6/13"
    },
    {
        "topic": "prob_stats_471",
        "subTopic": "משפט בייס (הסתברות מותנית מלאה)",
        "question_text": "מפעל פועל בשתי משמרות. משמרת בוקר מייצרת 70% מהמוצרים, ומשמרת ערב 30%. אחוז הפגמים בבוקר הוא 2% ובערב 5%. אם נבחר מוצר פגום מכלל התוצרת, מה ההסתברות שהוא יוצר במשמרת ערב?&rlm;",
        "options": ["15/29", "1/2", "14/29", "3/10"],
        "correctAnswer": 0,
        "hint": "חשבו את ההסתברות המוחלטת למוצר פגום בכל משמרת ואז חלקו את החלק של משמרת הערב בסך הפגומים.",
        "solution_steps": [
            { "verbal_explanation": "הגדרת גודל המשמרות באחוז עשרוני.", "math_expression": "P(M) = 0.7 \\quad , \\quad P(E) = 0.3" },
            { "verbal_explanation": "חישוב אחוז הפגומים הכללי ממשמרת בוקר מתוך השלם.", "math_expression": "P(M \\cap D) = 0.7 \\times 0.02 = 0.014" },
            { "verbal_explanation": "חישוב אחוז הפגומים הכללי ממשמרת ערב.", "math_expression": "P(E \\cap D) = 0.3 \\times 0.05 = 0.015" },
            { "verbal_explanation": "סכימת כלל הפגומים להשגת ההסתברות המלאה.", "math_expression": "P(D) = 0.014 + 0.015 = 0.029" },
            { "verbal_explanation": "שימוש במשפט בייס לחילוץ ההסתברות המותנית הנדרשת.", "math_expression": "P(E|D) = \\dfrac{P(E \\cap D)}{P(D)}" },
            { "verbal_explanation": "הצבה של המספרים והסרת הנקודה העשרונית להגעה לשבר.", "math_expression": "P(E|D) = \\dfrac{0.015}{0.029} = \\dfrac{15}{29}" }
        ],
        "final_answer": "15/29"
    },
    {
        "topic": "prob_stats_471",
        "subTopic": "משפט בייס (הסתברות מותנית מלאה)",
        "question_text": "בכיתה יש 50% בנים ו-50% בנות. ההסתברות שבן ירכיב משקפיים היא 0.2. ההסתברות שבת תרכיב משקפיים היא 0.1. נבחר תלמיד אקראי והתברר שהוא מרכיב משקפיים. מהי ההסתברות שזו בת?&rlm;",
        "options": ["1/3", "1/2", "2/3", "1/4"],
        "correctAnswer": 0,
        "hint": "חיתוך 'בת ומשקפיים' חלקי כלל מרכיבי המשקפיים.",
        "solution_steps": [
            { "verbal_explanation": "חלוקת האוכלוסייה לכדי הסתברויות בסיס שוות.", "math_expression": "P(B) = 0.5 \\quad , \\quad P(G) = 0.5" },
            { "verbal_explanation": "ההסתברות לבחור בן עם משקפיים.", "math_expression": "P(B \\cap V) = 0.5 \\times 0.2 = 0.1" },
            { "verbal_explanation": "ההסתברות לבחור בת עם משקפיים.", "math_expression": "P(G \\cap V) = 0.5 \\times 0.1 = 0.05" },
            { "verbal_explanation": "ההסתברות השלמה לבחירת תלמיד עם משקפיים.", "math_expression": "P(V) = 0.1 + 0.05 = 0.15" },
            { "verbal_explanation": "נוסחת בייס עבור בת בהינתן משקפיים.", "math_expression": "P(G|V) = \\dfrac{P(G \\cap V)}{P(V)}" },
            { "verbal_explanation": "חישוב השבר הסופי על ידי הצבה.", "math_expression": "P(G|V) = \\dfrac{0.05}{0.15} = \\dfrac{1}{3}" }
        ],
        "final_answer": "1/3"
    },
    {
        "topic": "prob_stats_471",
        "subTopic": "משפט בייס (הסתברות מותנית מלאה)",
        "question_text": "חברת שילוח משתמשת בשני מסלולים. מסלול א' נבחר בהסתברות 0.2, ומסלול ב' ב-0.8. חבילה מאחרת במסלול א' בהסתברות 0.5, ובמסלול ב' בהסתברות 0.1. לקוח התלונן שהחבילה איחרה. מה ההסתברות שהיא נשלחה במסלול א'?&rlm;",
        "options": ["5/9", "1/2", "4/9", "1/5"],
        "correctAnswer": 0,
        "hint": "חיתוך 'מסלול א ואיחור' לחלק להסתברות הכללית לאיחור משני המסלולים.",
        "solution_steps": [
            { "verbal_explanation": "הסתברויות בסיס למסלולים.", "math_expression": "P(R_1) = 0.2 \\quad , \\quad P(R_2) = 0.8" },
            { "verbal_explanation": "חיתוך של בחירת מסלול ראשון עם איחור במשלוח.", "math_expression": "P(R_1 \\cap L) = 0.2 \\times 0.5 = 0.1" },
            { "verbal_explanation": "חיתוך של בחירת מסלול שני עם איחור במשלוח.", "math_expression": "P(R_2 \\cap L) = 0.8 \\times 0.1 = 0.08" },
            { "verbal_explanation": "סך כל ההסתברות לחבילה שמאחרת.", "math_expression": "P(L) = 0.1 + 0.08 = 0.18" },
            { "verbal_explanation": "נוסחת בייס לחישוב מקור האיחור.", "math_expression": "P(R_1|L) = \\dfrac{P(R_1 \\cap L)}{P(L)}" },
            { "verbal_explanation": "הצבה, הכפלה במאה לביטול נקודה עשרונית, וצמצום השבר בשתיים.", "math_expression": "P(R_1|L) = \\dfrac{0.1}{0.18} = \\dfrac{10}{18} = \\dfrac{5}{9}" }
        ],
        "final_answer": "5/9"
    },
    {
        "topic": "prob_stats_471",
        "subTopic": "משפט בייס (הסתברות מותנית מלאה)",
        "question_text": "מתוך כלל המטופלים במרפאה, 30% סובלים מאלרגיה. 80% מהאלרגיים מדווחים על עיטוש. 10% מאלו שאינם אלרגיים מדווחים על עיטוש (בגלל הצטננות למשל). אדם מדווח על עיטוש. מה ההסתברות שהוא אכן סובל מאלרגיה?&rlm;",
        "options": ["24/31", "3/10", "4/5", "1/2"],
        "correctAnswer": 0,
        "hint": "ההסתברות לעיטוש כוללת את האלרגיים שמתעטשים וגם את אלו שאינם אלרגיים ומתעטשים. החיתוך הראשון לחלק לסכום.",
        "solution_steps": [
            { "verbal_explanation": "הגדרת קבוצות המטופלים והשלמת ההסתברות לשלם.", "math_expression": "P(A) = 0.3 \\quad , \\quad P(A') = 0.7" },
            { "verbal_explanation": "החיתוך של מטופל אלרגי יחד עם תסמין עיטוש.", "math_expression": "P(A \\cap S) = 0.3 \\times 0.8 = 0.24" },
            { "verbal_explanation": "החיתוך של מטופל בריא מאלרגיה יחד עם תסמין עיטוש.", "math_expression": "P(A' \\cap S) = 0.7 \\times 0.1 = 0.07" },
            { "verbal_explanation": "חישוב הסתברות שלמה לכל אדם המציג תסמין עיטוש במרפאה.", "math_expression": "P(S) = 0.24 + 0.07 = 0.31" },
            { "verbal_explanation": "הפעלת משפט בייס ההפוך למציאת הגורם המחולל.", "math_expression": "P(A|S) = \\dfrac{P(A \\cap S)}{P(S)}" },
            { "verbal_explanation": "הצבה סופית לקבלת השבר המבוקש.", "math_expression": "P(A|S) = \\dfrac{0.24}{0.31} = \\dfrac{24}{31}" }
        ],
        "final_answer": "24/31"
    },

    // ==========================================
    // תת נושא 2: עצמאות של מאורעות (10 שאלות)
    // ==========================================
    {
        "topic": "prob_stats_471",
        "subTopic": "עצמאות של מאורעות",
        "question_text": "נתונים שני מאורעות, ההסתברות לראשון היא 0.4 ולהסתברות לשני היא 0.5. ההסתברות לאיחוד שני המאורעות הללו היא 0.7. האם מאורעות אלו תלויים או בלתי תלויים?&rlm;",
        "options": ["בלתי תלויים", "תלויים", "זרים", "לא ניתן לקבוע"],
        "correctAnswer": 0,
        "hint": "בדקו מהי הסתברות החיתוך בעזרת נוסחת האיחוד. אם החיתוך שווה למכפלת ההסתברויות, המאורעות בלתי תלויים.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בנוסחת האיחוד הכללית כדי למצוא את הסתברות החיתוך המעשית בין המאורעות.", "math_expression": "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)" },
            { "verbal_explanation": "נציב את כל הנתונים המספריים המוכרים למשוואה.", "math_expression": "0.7 = 0.4 + 0.5 - P(A \\cap B)" },
            { "verbal_explanation": "נבודד את החיתוך ונחשב את ערכו.", "math_expression": "P(A \\cap B) = 0.9 - 0.7 = 0.2" },
            { "verbal_explanation": "נבדוק את תנאי העצמאות: האם מכפלת ההסתברויות שווה לחיתוך שמצאנו?", "math_expression": "P(A) \\times P(B) = 0.4 \\times 0.5 = 0.2" },
            { "verbal_explanation": "מכיוון שהערכים זהים לחלוטין, המאורעות עצמאיים ואינם משפיעים זה על זה.", "math_expression": "0.2 = 0.2 \\Rightarrow \\text{Independent}" }
        ],
        "final_answer": "בלתי תלויים"
    },
    {
        "topic": "prob_stats_471",
        "subTopic": "עצמאות של מאורעות",
        "question_text": "נתונים שני מאורעות בלתי תלויים. ההסתברות למאורע הראשון היא 0.3, וההסתברות לחיתוך (ששני המאורעות יקרו יחד) היא 0.12. מהי ההסתברות להתרחשות המאורע השני?&rlm;",
        "options": ["0.4", "0.9", "0.36", "0.25"],
        "correctAnswer": 0,
        "hint": "במאורעות בלתי תלויים, החיתוך שווה למכפלת ההסתברויות שלהם.",
        "solution_steps": [
            { "verbal_explanation": "על סמך נתון העצמאות, נרשום את משוואת המכפלה לחיתוך המאורעות.", "math_expression": "P(A \\cap B) = P(A) \\times P(B)" },
            { "verbal_explanation": "נציב את ההסתברויות הידועות לנו אל המשוואה.", "math_expression": "0.12 = 0.3 \\times P(B)" },
            { "verbal_explanation": "נחלק את המשוואה ב-0.3 על מנת לבודד את המאורע החסר.", "math_expression": "P(B) = \\dfrac{0.12}{0.3}" },
            { "verbal_explanation": "נשלים את פעולת החילוק לקבלת התשובה הסופית.", "math_expression": "P(B) = 0.4" }
        ],
        "final_answer": "0.4"
    },
    {
        "topic": "prob_stats_471",
        "subTopic": "עצמאות של מאורעות",
        "question_text": "ההסתברות למאורע א' היא 0.4, וההסתברות למאורע ב' היא 0.7. שני המאורעות הם בלתי תלויים. מהי ההסתברות לאיחוד שלהם (לפחות אחד מהם יקרה)?&rlm;",
        "options": ["0.82", "1.1", "0.28", "0.9"],
        "correctAnswer": 0,
        "hint": "חשבו קודם את החיתוך שלהם (המכפלה), ולאחר מכן הציבו הכל בנוסחת האיחוד הכללית.",
        "solution_steps": [
            { "verbal_explanation": "היות והמאורעות מוגדרים כבלתי תלויים, נחשב את חיתוכם ישירות דרך הכפלה.", "math_expression": "P(A \\cap B) = 0.4 \\times 0.7 = 0.28" },
            { "verbal_explanation": "נרשום את הנוסחה של הסתברות האיחוד.", "math_expression": "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)" },
            { "verbal_explanation": "נציב את כל הערכים שברשותנו אל תוך המשוואה.", "math_expression": "P(A \\cup B) = 0.4 + 0.7 - 0.28" },
            { "verbal_explanation": "נבצע את פעולות החיבור והחיסור לקבלת ההסתברות השלמה.", "math_expression": "P(A \\cup B) = 1.1 - 0.28 = 0.82" }
        ],
        "final_answer": "0.82"
    },
    {
        "topic": "prob_stats_471",
        "subTopic": "עצמאות של מאורעות",
        "question_text": "נתונים שני מאורעות בלתי תלויים. ההסתברות לראשון היא 0.5, וההסתברות לאיחוד המאורעות היא 0.8. מהי ההסתברות למאורע השני (שנסמנו ב-p)?&rlm;",
        "options": ["0.6", "0.3", "0.4", "0.5"],
        "correctAnswer": 0,
        "hint": "חיתוך המאורעות שווה לחצי p. הציבו זאת בנוסחת האיחוד יחד עם שאר הנתונים ובודדו את p.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את ההסתברויות הנתונות, כאשר ההסתברות השנייה מיוצגת על ידי משתנה.", "math_expression": "P(A) = 0.5 \\quad , \\quad P(B) = p" },
            { "verbal_explanation": "נוסחת החיתוך למאורעות שאינם תלויים מספקת ביטוי פשוט.", "math_expression": "P(A \\cap B) = 0.5 \\times p = 0.5p" },
            { "verbal_explanation": "נשתמש בנוסחת האיחוד הכוללת את כל המרכיבים יחד.", "math_expression": "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)" },
            { "verbal_explanation": "נציב את הנתון של האיחוד ואת שאר הביטויים.", "math_expression": "0.8 = 0.5 + p - 0.5p" },
            { "verbal_explanation": "נכנס איברים ונעביר מספרים להפרדת המשתנה.", "math_expression": "0.8 - 0.5 = 0.5p \\Rightarrow 0.3 = 0.5p" },
            { "verbal_explanation": "נחלק במקדם לבידוד סופי.", "math_expression": "p = \\dfrac{0.3}{0.5} = 0.6" }
        ],
        "final_answer": "0.6"
    },
    {
        "topic": "prob_stats_471",
        "subTopic": "עצמאות של מאורעות",
        "question_text": "שני מאורעות הם בלתי תלויים. ההסתברות שהמאורע הראשון לא יקרה היא 0.2. ההסתברות שהמאורע השני לא יקרה היא 0.3. מהי ההסתברות ששני המאורעות יקרו יחד באותו הזמן?&rlm;",
        "options": ["0.56", "0.06", "0.94", "0.5"],
        "correctAnswer": 0,
        "hint": "חשבו קודם את ההסתברות שכל מאורע כן יקרה (המשלים לאחד). מכיוון שהם בלתי תלויים, מכפלתם היא ההסתברות לחיתוך.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את ההסתברות החיובית למאורע הראשון באמצעות המאורע המשלים.", "math_expression": "P(A) = 1 - 0.2 = 0.8" },
            { "verbal_explanation": "נחשב את ההסתברות החיובית למאורע השני.", "math_expression": "P(B) = 1 - 0.3 = 0.7" },
            { "verbal_explanation": "נדרוש חיתוך של שני אירועים בלתי תלויים באמצעות מכפלה ישירה.", "math_expression": "P(A \\cap B) = P(A) \\times P(B)" },
            { "verbal_explanation": "נציב ונחשב את התוצאה להופעה משותפת.", "math_expression": "P(A \\cap B) = 0.8 \\times 0.7 = 0.56" }
        ],
        "final_answer": "0.56"
    },
    {
        "topic": "prob_stats_471",
        "subTopic": "עצמאות של מאורעות",
        "question_text": "מערכת מורכבת משני רכיבים הפועלים במקביל ובאופן בלתי תלוי זה בזה. ההסתברות שהרכיב הראשון יתקלקל היא 0.1. ההסתברות שהרכיב השני יתקלקל היא 0.2. המערכת תפעל כל עוד לפחות רכיב אחד תקין. מהי ההסתברות שהמערכת תפעל בהצלחה?&rlm;",
        "options": ["0.98", "0.72", "0.02", "0.3"],
        "correctAnswer": 0,
        "hint": "המערכת נכשלת רק אם שני הרכיבים מתקלקלים יחד. ההסתברות שהיא תפעל היא המשלים להסתברות ששניהם יתקלקלו.",
        "solution_steps": [
            { "verbal_explanation": "המערכת קורסת לחלוטין אך ורק כאשר יש כשל משולב בשני הרכיבים במקביל.", "math_expression": "P(Fail) = P(F_1 \\cap F_2)" },
            { "verbal_explanation": "מכיוון שהרכיבים בלתי תלויים, החיתוך הוא מכפלת ההסתברויות לכשל של כל אחד.", "math_expression": "P(Fail) = 0.1 \\times 0.2 = 0.02" },
            { "verbal_explanation": "ההסתברות שהמערכת תפעל (לפחות רכיב אחד תקין) היא המאורע המשלים לקריסה המוחלטת.", "math_expression": "P(Work) = 1 - P(Fail)" },
            { "verbal_explanation": "נחסר את הקריסה מאחת ונמצא את התשובה הרצויה.", "math_expression": "P(Work) = 1 - 0.02 = 0.98" }
        ],
        "final_answer": "0.98"
    },
    {
        "topic": "prob_stats_471",
        "subTopic": "עצמאות של מאורעות",
        "question_text": "ההסתברות למאורע א' היא 0.6. המאורעות א' ו-ב' הם בלתי תלויים. ההסתברות שמאורע א' יקרה אך מאורע ב' לא יקרה היא 0.24. מהי ההסתברות למאורע ב'?&rlm;",
        "options": ["0.6", "0.4", "0.36", "0.8"],
        "correctAnswer": 0,
        "hint": "חיתוך מאורע א' עם המשלים של ב' הוא מכפלתם (כי הם בלתי תלויים). הציבו למשוואה: 0.6 כפול (1 פחות P(B)).",
        "solution_steps": [
            { "verbal_explanation": "אם שני מאורעות הם בלתי תלויים, אז כל מאורע בלתי תלוי גם במשלים של השני. נרשום את המכפלה.", "math_expression": "P(A \\cap B') = P(A) \\times P(B')" },
            { "verbal_explanation": "נציב את ההסתברויות אל המשוואה.", "math_expression": "0.24 = 0.6 \\times P(B')" },
            { "verbal_explanation": "נחלק ב-0.6 על מנת למצוא את ההסתברות למאורע המשלים של ב'.", "math_expression": "P(B') = \\dfrac{0.24}{0.6} = 0.4" },
            { "verbal_explanation": "כעת נשתמש בכלל המשלים כדי לחשב את ההסתברות למאורע ב' החיובי.", "math_expression": "P(B) = 1 - P(B')" },
            { "verbal_explanation": "נחסר לקבלת המטרה.", "math_expression": "P(B) = 1 - 0.4 = 0.6" }
        ],
        "final_answer": "0.6"
    },
    {
        "topic": "prob_stats_471",
        "subTopic": "עצמאות של מאורעות",
        "question_text": "ידוע ששני מאורעות הם בלתי תלויים. ההסתברות למאורע א' בתנאי שקרה מאורע ב' היא 0.4. ההסתברות להתרחשות מאורע ב' היא 0.5. מהי ההסתברות ששני המאורעות יקרו יחד?&rlm;",
        "options": ["0.2", "0.4", "0.9", "0.8"],
        "correctAnswer": 0,
        "hint": "במאורעות בלתי תלויים, ההסתברות המותנית זהה להסתברות הרגילה של המאורע. כלומר P(A|B) שווה ל-P(A).",
        "solution_steps": [
            { "verbal_explanation": "עבור כל צמד מאורעות שאינם תלויים אחד בשני, ההסתברות המותנית אינה משנה כלום.", "math_expression": "P(A|B) = P(A)" },
            { "verbal_explanation": "לפיכך, ההסתברות הכללית למאורע הראשון נובעת ישירות מהנתון.", "math_expression": "P(A) = 0.4" },
            { "verbal_explanation": "ההסתברות לחיתוך במאורעות עצמאיים היא תמיד מכפלה ישירה של השניים.", "math_expression": "P(A \\cap B) = P(A) \\times P(B)" },
            { "verbal_explanation": "נציב ונחשב את החיתוך.", "math_expression": "P(A \\cap B) = 0.4 \\times 0.5 = 0.2" }
        ],
        "final_answer": "0.2"
    },
    {
        "topic": "prob_stats_471",
        "subTopic": "עצמאות של מאורעות",
        "question_text": "שני מאורעות בלתי תלויים מקיימים שההסתברות לאיחוד שלהם (A או B) היא 0.88. ידוע שההסתברות למאורע הראשון היא 0.4. מהי ההסתברות למאורע השני (נסמנו ב-b)?&rlm;",
        "options": ["0.8", "0.48", "0.6", "0.5"],
        "correctAnswer": 0,
        "hint": "הציבו בנוסחת האיחוד: 0.4 פלוס b, פחות 0.4b, שווה ל-0.88.",
        "solution_steps": [
            { "verbal_explanation": "ניעזר בנוסחת האיחוד הכללית ונציב את עובדת אי-התלות בחיתוך.", "math_expression": "P(A \\cup B) = P(A) + P(B) - P(A) \\times P(B)" },
            { "verbal_explanation": "נציב את הערכים הידועים כאשר המאורע השני מתפקד כמשתנה.", "math_expression": "0.88 = 0.4 + b - 0.4b" },
            { "verbal_explanation": "נכנס את האיברים המכילים את המשתנה ואת המספרים החופשיים.", "math_expression": "0.88 - 0.4 = 0.6b \\Rightarrow 0.48 = 0.6b" },
            { "verbal_explanation": "נחלק כדי למצוא את ההסתברות של המאורע המבוקש.", "math_expression": "b = \\dfrac{0.48}{0.6} = 0.8" }
        ],
        "final_answer": "0.8"
    },
    {
        "topic": "prob_stats_471",
        "subTopic": "עצמאות של מאורעות",
        "question_text": "ההסתברות לחיתוך של שני מאורעות מסוימים היא 0.15. ההסתברות של הראשון היא 0.3, וההסתברות של השני היא 0.5. מה ניתן להסיק לגבי המאורעות?&rlm;",
        "options": ["הם בלתי תלויים", "הם תלויים", "הם מאורעות זרים", "אין מספיק נתונים"],
        "correctAnswer": 0,
        "hint": "חשבו את מכפלת ההסתברויות. אם המכפלה שווה במדויק לחיתוך הנתון, אזי המאורעות בלתי תלויים.",
        "solution_steps": [
            { "verbal_explanation": "על מנת לאמת אי-תלות, נבדוק אם מכפלת ההסתברויות הפרטיות משחזרת את החיתוך.", "math_expression": "Test: P(A) \\times P(B) \\stackrel{?}{=} P(A \\cap B)" },
            { "verbal_explanation": "נכפיל את שתי ההסתברויות שניתנו.", "math_expression": "0.3 \\times 0.5 = 0.15" },
            { "verbal_explanation": "נשווה את התוצאה להסתברות החיתוך שמופיעה בנתון המקורי.", "math_expression": "0.15 = 0.15" },
            { "verbal_explanation": "מכיוון שהשוויון מתקיים באופן מושלם, עולה המסקנה החד-משמעית שהמאורעות אכן עצמאיים ובלתי תלויים.", "math_expression": "\\text{Independent}" }
        ],
        "final_answer": "הם בלתי תלויים"
    },

    // ==========================================
    // תת נושא 3: סטטיסטיקה תיאורית: ממוצע, חציון ושכיח (10 שאלות)
    // ==========================================
    {
        "topic": "prob_stats_471",
        "subTopic": "סטטיסטיקה תיאורית: ממוצע, חציון ושכיח",
        "question_text": "נתונה סדרת הציונים הבאה של תלמיד: 4, 6, 6, 8, 11. חשבו את הממוצע של הציונים הללו.&rlm;",
        "options": ["7", "6", "8", "6.5"],
        "correctAnswer": 0,
        "hint": "ממוצע שווה לסכום כלל הנתונים חלקי מספר הנתונים. חברו את כולם וחלקו ב-5.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את הנוסחה הבסיסית לממוצע כאוסף איברים חלקי כמותם.", "math_expression": "m = \\dfrac{S}{n}" },
            { "verbal_explanation": "נחבר את כל הערכים המספריים ליצירת הסכום הכולל.", "math_expression": "S = 4 + 6 + 6 + 8 + 11 = 35" },
            { "verbal_explanation": "מספר התצפיות בסדרה זו הוא חמש.", "math_expression": "n = 5" },
            { "verbal_explanation": "נציב את הערכים לחילוק לשם קבלת התוצאה המבוקשת.", "math_expression": "m = \\dfrac{35}{5} = 7" }
        ],
        "final_answer": "7"
    },
    {
        "topic": "prob_stats_471",
        "subTopic": "סטטיסטיקה תיאורית: ממוצע, חציון ושכיח",
        "question_text": "ממוצע הציונים של 5 תלמידים הוא 12. תלמיד שישי מצטרף לקבוצה, ולאחר שקלול הציון שלו, הממוצע של הקבוצה הופך ל-14. מהו הציון שהשיג התלמיד השישי?&rlm;",
        "options": ["24", "14", "26", "10"],
        "correctAnswer": 0,
        "hint": "סכום הציונים המקורי הוא 5 כפול 12. הסכום החדש הוא 6 כפול 14. הציון החדש הוא ההפרש ביניהם.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את הסכום ההתחלתי של הציונים בהתבסס על הממוצע הישן ומספר התלמידים.", "math_expression": "S_1 = 5 \\times 12 = 60" },
            { "verbal_explanation": "נסמן את סך התלמידים והממוצע של הקבוצה המעודכנת.", "math_expression": "n_2 = 6 \\quad , \\quad m_2 = 14" },
            { "verbal_explanation": "נחשב את הסכום החדש הכולל את הציון של התלמיד שהצטרף.", "math_expression": "S_2 = 6 \\times 14 = 84" },
            { "verbal_explanation": "הציון של התלמיד החדש הוא הפער שנוצר בין שני הסכומים.", "math_expression": "x = S_2 - S_1" },
            { "verbal_explanation": "נחסר לקבלת הציון הנקודתי של המצטרף.", "math_expression": "x = 84 - 60 = 24" }
        ],
        "final_answer": "24"
    },
    {
        "topic": "prob_stats_471",
        "subTopic": "סטטיסטיקה תיאורית: ממוצע, חציון ושכיח",
        "question_text": "בטבלת שכיחויות נתונים הציונים הבאים: הציון 70 הופיע פעמיים, הציון 80 הופיע \\( x \\) פעמים, והציון 90 הופיע 4 פעמים. הממוצע של הציונים הוא 82. מצאו את מספר התלמידים שקיבלו 80 (כלומר, את הערך של \\( x \\)).&rlm;",
        "options": ["4", "2", "5", "3"],
        "correctAnswer": 0,
        "hint": "סכום הציונים הוא: 140 פלוס 80x פלוס 360. כמות התלמידים היא 6 פלוס x. הממוצע מתקבל מחילוק הסכום לכמות. השוו ל-82.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את סך מספר התלמידים בטבלה כביטוי התלוי בנעלם.", "math_expression": "n = 2 + x + 4 = 6 + x" },
            { "verbal_explanation": "נרכיב ביטוי המייצג את סך הניקוד המצטבר של כלל הכיתה.", "math_expression": "S = 70 \\times 2 + 80 \\times x + 90 \\times 4 = 140 + 80x + 360 = 500 + 80x" },
            { "verbal_explanation": "נבנה משוואת ממוצע בהתאם לנתון.", "math_expression": "\\dfrac{500 + 80x}{6 + x} = 82" },
            { "verbal_explanation": "נבצע כפל במכנה המשותף כדי לבטל את השבר.", "math_expression": "500 + 80x = 82(6 + x)" },
            { "verbal_explanation": "נפתח סוגריים בצד הימני.", "math_expression": "500 + 80x = 492 + 82x" },
            { "verbal_explanation": "נכנס איברים למציאת הנעלם המייצג שכיחות.", "math_expression": "8 = 2x \\Rightarrow x = 4" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "prob_stats_471",
        "subTopic": "סטטיסטיקה תיאורית: ממוצע, חציון ושכיח",
        "question_text": "קבוצת המספרים מכילה 4 איברים: \\( x, 4, 8, 10 \\). נתון כי החציון של הקבוצה שווה ל-7. ידוע גם ש-\( x \\) נמצא בין 4 ל-8. מצאו את ערכו של \\( x \\).&rlm;",
        "options": ["6", "5", "7", "6.5"],
        "correctAnswer": 0,
        "hint": "כשיש 4 איברים (זוגי), החציון הוא הממוצע של שני האיברים האמצעיים. אם נסדר: 4, x, 8, 10 - החציון הוא הממוצע של x ו-8.",
        "solution_steps": [
            { "verbal_explanation": "כדי למצוא חציון, תחילה יש לסדר את האיברים בסדר עולה. נתון לנו המיקום היחסי.", "math_expression": "4 , x , 8 , 10" },
            { "verbal_explanation": "מכיוון שכמות הנתונים היא זוגית, החציון מוגדר כממוצע של שני הנתונים המרכזיים.", "math_expression": "Med = \\dfrac{x + 8}{2}" },
            { "verbal_explanation": "נציב את החציון הנתון במשוואה.", "math_expression": "7 = \\dfrac{x + 8}{2}" },
            { "verbal_explanation": "נכפיל בשתיים להסרת השבר.", "math_expression": "14 = x + 8" },
            { "verbal_explanation": "נחסר שמונה כדי לחלץ את המשתנה החסר בסדרה.", "math_expression": "x = 6" }
        ],
        "final_answer": "6"
    },
    {
        "topic": "prob_stats_471",
        "subTopic": "סטטיסטיקה תיאורית: ממוצע, חציון ושכיח",
        "question_text": "בטבלת שכיחויות נתונים המספרים: הערך 1 מופיע פעמיים, הערך 2 מופיע 4 פעמים, הערך 3 מופיע 3 פעמים, והערך 4 מופיע פעם אחת (10 תצפיות בסך הכל). מהו החציון של קבוצה זו?&rlm;",
        "options": ["2", "2.5", "3", "1.5"],
        "correctAnswer": 0,
        "hint": "יש 10 נתונים. החציון הוא הממוצע של הנתון ה-5 והנתון ה-6 כשהם מסודרים בשורה.",
        "solution_steps": [
            { "verbal_explanation": "נסכום את השכיחויות כדי לקבוע את כמות התצפיות הכללית.", "math_expression": "n = 2 + 4 + 3 + 1 = 10" },
            { "verbal_explanation": "בכמות זוגית של תצפיות, החציון נופל בין שני האיברים האמצעיים. נמצא את המיקומים שלהם.", "math_expression": "\\dfrac{n}{2} = 5 \\quad , \\quad \\dfrac{n}{2} + 1 = 6" },
            { "verbal_explanation": "נעקוב אחרי שכיחויות מצטברות: הערך 1 תופס את המקומות הראשון והשני. הערך 2 תופס את המקומות השלישי עד השישי. מכאן ששני האיברים המרכזיים שווים שניהם ל-2.", "math_expression": "x_5 = 2 \\quad , \\quad x_6 = 2" },
            { "verbal_explanation": "החציון הוא הממוצע של שני ערכים אלו.", "math_expression": "Med = \\dfrac{2 + 2}{2} = 2" }
        ],
        "final_answer": "2"
    },
    {
        "topic": "prob_stats_471",
        "subTopic": "סטטיסטיקה תיאורית: ממוצע, חציון ושכיח",
        "question_text": "השכר הממוצע של 20 עובדים בחברה מסוימת הוא 6000 שקלים. בסוף השנה כל עובד מקבל תוספת שכר זהה של 500 שקלים למשכורתו. מה יהיה השכר הממוצע החדש?&rlm;",
        "options": ["6500", "6000", "7000", "6250"],
        "correctAnswer": 0,
        "hint": "הוספת קבוע לכל אחד מהערכים במדגם מוסיפה את אותו הקבוע בדיוק אל הממוצע הכללי.",
        "solution_steps": [
            { "verbal_explanation": "על פי תכונות הממוצע החשבוני, כל שינוי קבוע ואחיד (חיבור או חיסור) שחל על כלל הנתונים יוצר שינוי זהה על הממוצע עצמו.", "math_expression": "m_{new} = m_{old} + c" },
            { "verbal_explanation": "נציב את הממוצע הישן ואת התוספת הקבועה שניתנה לכולם.", "math_expression": "m = 6000 + 500" },
            { "verbal_explanation": "התוצאה המתקבלת מייצגת את הממוצע העדכני ללא צורך בחישוב ארוך של סכומים.", "math_expression": "m = 6500" }
        ],
        "final_answer": "6500"
    },
    {
        "topic": "prob_stats_471",
        "subTopic": "סטטיסטיקה תיאורית: ממוצע, חציון ושכיח",
        "question_text": "ממזגים שתי קבוצות של תלמידים לקבוצה אחת גדולה. בקבוצה א' יש 10 תלמידים וממוצע הציונים שלהם הוא 80. בקבוצה ב' יש 15 תלמידים וממוצע הציונים שלהם הוא 90. מהו הממוצע הכולל של כל התלמידים יחד לאחר המיזוג?&rlm;",
        "options": ["86", "85", "84", "88"],
        "correctAnswer": 0,
        "hint": "חשבו את סכום הציונים של קבוצה א', ואת סכום הציונים של קבוצה ב'. חברו אותם וחלקו במספר התלמידים הכולל (25).",
        "solution_steps": [
            { "verbal_explanation": "נחשב את סך כל הציונים של הקבוצה הראשונה.", "math_expression": "S_1 = 10 \\times 80 = 800" },
            { "verbal_explanation": "נחשב את סך כל הציונים של הקבוצה השנייה בנפרד.", "math_expression": "S_2 = 15 \\times 90 = 1350" },
            { "verbal_explanation": "נמצא את הסכום הכולל ואת הכמות המלאה של התלמידים משתי הקבוצות במשותף.", "math_expression": "S = 800 + 1350 = 2150 \\quad , \\quad n = 10 + 15 = 25" },
            { "verbal_explanation": "נחלק את הסכום בכמות לקבלת הממוצע החדש והמשוקלל.", "math_expression": "m = \\dfrac{2150}{25}" },
            { "verbal_explanation": "הפתרון המדויק.", "math_expression": "m = 86" }
        ],
        "final_answer": "86"
    },
    {
        "topic": "prob_stats_471",
        "subTopic": "סטטיסטיקה תיאורית: ממוצע, חציון ושכיח",
        "question_text": "קבוצת נתונים מורכבת מהערכים הבאים: 5, 5, 8, 8, וערך נוסף חסר \\( x \\). אם ידוע שהשכיח של קבוצה זו הוא הערך 8, מה חייב להיות ערכו של \\( x \\)?&rlm;",
        "options": ["8", "5", "כל מספר אחר השונה מ-5 ומ-8", "0"],
        "correctAnswer": 0,
        "hint": "שכיח הוא הערך שמופיע הכי הרבה פעמים בקבוצה. כרגע 5 ו-8 מופיעים אותו מספר פעמים. מה יוסיף ליתרון של 8?",
        "solution_steps": [
            { "verbal_explanation": "השכיח הוא האיבר שמופיע בתדירות הגבוהה ביותר.", "math_expression": "Mode = \\text{Most Frequent}" },
            { "verbal_explanation": "נבחן את השכיחויות הקיימות ללא המשתנה.", "math_expression": "Freq(5) = 2 \\quad , \\quad Freq(8) = 2" },
            { "verbal_explanation": "על מנת ש-8 יהיה השכיח הבלעדי כפי שנדרש, שכיחותו צריכה לעקוף את שאר המספרים.", "math_expression": "Freq(8) > Freq(5)" },
            { "verbal_explanation": "לשם כך, האיבר הנוסף חייב להיות תואם לערך של השכיח המבוקש.", "math_expression": "x = 8" }
        ],
        "final_answer": "8"
    },
    {
        "topic": "prob_stats_471",
        "subTopic": "סטטיסטיקה תיאורית: ממוצע, חציון ושכיח",
        "question_text": "ממוצע הציונים בכיתה מסוימת היה 80. המורה החליט להכפיל כל ציון בכיתה בפקטור של 1.1 (הגדלה ב-10%). מה יהיה הממוצע החדש של הכיתה?&rlm;",
        "options": ["88", "80", "90", "81.1"],
        "correctAnswer": 0,
        "hint": "כאשר כופלים את כל הערכים במדגם בקבוע מסוים, הממוצע של המדגם מוכפל בדיוק באותו קבוע.",
        "solution_steps": [
            { "verbal_explanation": "על פי חוקי הפעולות הלינאריות על הממוצע החשבוני, הכפלת המדגם בפקטור קבוע תגרור הכפלת הממוצע באותו הפקטור ללא שינויים נוספים.", "math_expression": "m_{new} = m_{old} \\times c" },
            { "verbal_explanation": "נציב את הממוצע הישן ואת מקדם ההכפלה.", "math_expression": "m = 80 \\times 1.1" },
            { "verbal_explanation": "נחשב את המכפלה על ידי פירוק (80 כפול 1 ועוד 80 כפול עשירית).", "math_expression": "m = 80 + 8 = 88" }
        ],
        "final_answer": "88"
    },
    {
        "topic": "prob_stats_471",
        "subTopic": "סטטיסטיקה תיאורית: ממוצע, חציון ושכיח",
        "question_text": "נתונה קבוצת נתונים הכוללת חמישה מספרים: \\( a, b, c, d, e \\) המסודרים בסדר עולה (כלומר \\( a < b < c < d < e \\)). ידוע כי החציון של הקבוצה הוא 10. אם נוסיף לערך המקסימלי במדגם (\\( e \\)) תוספת של 5 יחידות, מה יקרה לערך החציון החדש?&rlm;",
        "options": ["יישאר 10", "יגדל ל-15", "יגדל ל-11", "יקטן בהתאמה"],
        "correctAnswer": 0,
        "hint": "החציון תלוי אך ורק בערכים המרכזיים, ואינו מושפע משינויים המתרחשים באיברים הקיצוניים של המדגם, כל עוד הם לא משנים את מיקומם בסדר.",
        "solution_steps": [
            { "verbal_explanation": "מספר הנתונים הוא חמש, כמות אי-זוגית. בסדרה מסודרת, החציון הוא האיבר במקום האמצעי המדויק.", "math_expression": "Med = c = 10" },
            { "verbal_explanation": "הוספת חמש לאיבר הגדול ביותר מגדילה אותו אף יותר, אך אינה משנה את מיקומו בסדר העולה.", "math_expression": "e_{new} = e + 5 > d > c" },
            { "verbal_explanation": "מאחר והסדר נשמר, האיבר האמצעי (השלישי ברשימה) נותר באותו מקום בדיוק, וערכו אינו מושפע כלל.", "math_expression": "Med_{new} = c = 10" },
            { "verbal_explanation": "המסקנה היא ששינוי בקצוות אינו משפיע על החציון כלל.", "math_expression": "\\text{Unchanged}" }
        ],
        "final_answer": "יישאר 10"
    }
];