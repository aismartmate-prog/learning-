const questionsDB = [
    // ==========================================
    // תת נושא 1: מרחב מדגם והסתברות קלאסית (10 שאלות)
    // ==========================================
    {
        "topic": "statistics_probability_grade_8",
        "subTopic": "מרחב מדגם והסתברות קלאסית",
        "question_text": "מטילים קוביית משחק הוגנת (שעל פאותיה רשומים המספרים מ-1 עד 6). מהי ההסתברות שיתקבל המספר 4?&rlm;",
        "options": ["1/6", "4/6", "1/4", "1/2"],
        "correctAnswer": 0,
        "hint": "ההסתברות מחושבת כחלוקה של מספר התוצאות הרצויות במספר התוצאות האפשריות הכולל.",
        "solution_steps": [
            { "verbal_explanation": "נבדוק מהו מספר התוצאות האפשריות בהטלת קובייה. בקובייה יש שש פאות.", "math_expression": "6" },
            { "verbal_explanation": "נבדוק כמה תוצאות רצויות יש לנו. אנו מעוניינים רק במספר ארבע, שהוא פאה אחת מתוך השש.", "math_expression": "1" },
            { "verbal_explanation": "נבנה את השבר המייצג את ההסתברות: כמות התוצאות הרצויות חלקי סך התוצאות האפשריות.", "math_expression": "\\frac{1}{6}" },
            { "verbal_explanation": "ההסתברות לקבל את המספר ארבע היא שישית.", "math_expression": "\\frac{1}{6}" }
        ],
        "final_answer": "1/6"
    },
    {
        "topic": "statistics_probability_grade_8",
        "subTopic": "מרחב מדגם והסתברות קלאסית",
        "question_text": "מטילים קוביית משחק הוגנת. מהי ההסתברות שיתקבל מספר זוגי?&rlm;",
        "options": ["1/2", "1/3", "1/6", "3/4"],
        "correctAnswer": 0,
        "hint": "רשמו לעצמכם אילו מספרים זוגיים יש בקובייה (2, 4, 6), וספרו כמה הם מתוך סך כל המספרים.",
        "solution_steps": [
            { "verbal_explanation": "מרחב המדגם השלם (כל האפשרויות) מכיל שישה מספרים.", "math_expression": "6" },
            { "verbal_explanation": "המספרים הזוגיים האפשריים בהטלת קובייה הם שתיים, ארבע ושש. בסך הכל שלוש תוצאות רצויות.", "math_expression": "3" },
            { "verbal_explanation": "נרשום את ההסתברות כשבר: שלוש תוצאות רצויות מתוך שש אפשריות.", "math_expression": "\\frac{3}{6}" },
            { "verbal_explanation": "נצמצם את השבר על ידי חלוקת המונה והמכנה בשלוש ונקבל חצי.", "math_expression": "\\frac{1}{2}" }
        ],
        "final_answer": "1/2"
    },
    {
        "topic": "statistics_probability_grade_8",
        "subTopic": "מרחב מדגם והסתברות קלאסית",
        "question_text": "זורקים מטבע הוגן שיש לו שני צדדים: 'עץ' ו'פלי'. מהי ההסתברות שהמטבע ייפול על 'עץ'?&rlm;",
        "options": ["1/2", "1/3", "1/4", "1"],
        "correctAnswer": 0,
        "hint": "למטבע יש רק שתי אפשרויות. 'עץ' הוא אחת מהן.",
        "solution_steps": [
            { "verbal_explanation": "מרחב המדגם למטבע בודד מכיל שתי אפשרויות בלבד.", "math_expression": "2" },
            { "verbal_explanation": "אנו מחפשים את הצד של 'עץ', המהווה רק אפשרות אחת מתוך השתיים.", "math_expression": "1" },
            { "verbal_explanation": "נרכיב את השבר המציג את ההסתברות: הרצוי חלקי המצוי.", "math_expression": "\\frac{1}{2}" },
            { "verbal_explanation": "ההסתברות היא בדיוק חצי.", "math_expression": "\\frac{1}{2}" }
        ],
        "final_answer": "1/2"
    },
    {
        "topic": "statistics_probability_grade_8",
        "subTopic": "מרחב מדגם והסתברות קלאסית",
        "question_text": "בשק אטום יש 3 כדורים אדומים ו-2 כדורים כחולים (סך הכל 5 כדורים). מוציאים כדור אחד באקראי מבלי להסתכל. מהי ההסתברות שהכדור שנוציא יהיה אדום?&rlm;",
        "options": ["3/5", "2/5", "1/3", "3/2"],
        "correctAnswer": 0,
        "hint": "המכנה הוא מספר הכדורים הכולל בשק. המונה הוא מספר הכדורים האדומים.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את סך כל הכדורים בשק, המהווים את כלל האפשרויות להוצאה.", "math_expression": "3 + 2 = 5" },
            { "verbal_explanation": "התוצאה הרצויה לנו היא כדור אדום. ישנם שלושה כדורים אדומים בשק.", "math_expression": "3" },
            { "verbal_explanation": "נרשום את ההסתברות כשבר: מספר הכדורים האדומים חלקי המספר הכולל.", "math_expression": "\\frac{3}{5}" },
            { "verbal_explanation": "ההסתברות להוצאת כדור אדום היא שלוש חמישיות.", "math_expression": "\\frac{3}{5}" }
        ],
        "final_answer": "3/5"
    },
    {
        "topic": "statistics_probability_grade_8",
        "subTopic": "מרחב מדגם והסתברות קלאסית",
        "question_text": "מסובבים רולטה שמחולקת ל-8 גזרות שוות המסומנות במספרים מ-1 עד 8. מהי ההסתברות שהרולטה תעצור על מספר שגדול מ-6?&rlm;",
        "options": ["2/8 (או 1/4)", "3/8", "6/8", "1/8"],
        "correctAnswer": 0,
        "hint": "המספרים שגדולים מ-6 ברולטה הם רק 7 ו-8. ספרו כמה הם, וחלקו בסך הכל.",
        "solution_steps": [
            { "verbal_explanation": "המספר הכולל של הגזרות ברולטה הוא שמונה.", "math_expression": "8" },
            { "verbal_explanation": "המספרים שגדולים משש הם שבע ושמונה בלבד. בסך הכל שתי אפשרויות רצויות.", "math_expression": "2" },
            { "verbal_explanation": "נרשום את ההסתברות: שתיים מתוך שמונה.", "math_expression": "\\frac{2}{8}" },
            { "verbal_explanation": "נצמצם את השבר על ידי חלוקה בשתיים ונקבל רבע.", "math_expression": "\\frac{1}{4}" }
        ],
        "final_answer": "2/8 (או 1/4)"
    },
    {
        "topic": "statistics_probability_grade_8",
        "subTopic": "מרחב מדגם והסתברות קלאסית",
        "question_text": "מטילים קוביית משחק הוגנת. מהי ההסתברות שיתקבל מספר שקטן מ-3?&rlm;",
        "options": ["2/6 (או 1/3)", "3/6 (או 1/2)", "1/6", "4/6"],
        "correctAnswer": 0,
        "hint": "המספרים הקטנים מ-3 בקובייה הם רק 1 ו-2. השתמשו בזה כדי לבנות את השבר.",
        "solution_steps": [
            { "verbal_explanation": "סך כל התוצאות האפשריות בקובייה הוא שש.", "math_expression": "6" },
            { "verbal_explanation": "התוצאות הרצויות (מספרים הקטנים משלוש) הן אחד ושתיים. אלו שתי תוצאות.", "math_expression": "2" },
            { "verbal_explanation": "נציב את הנתונים בשבר של רצוי חלקי מצוי.", "math_expression": "\\frac{2}{6}" },
            { "verbal_explanation": "נצמצם את השבר בשתיים לקבלת התשובה הסופית, שהיא שליש.", "math_expression": "\\frac{1}{3}" }
        ],
        "final_answer": "2/6 (או 1/3)"
    },
    {
        "topic": "statistics_probability_grade_8",
        "subTopic": "מרחב מדגם והסתברות קלאסית",
        "question_text": "בוחרים באקראי מספר אחד מתוך קבוצת המספרים מ-1 עד 10 (כולל). מהי ההסתברות שהמספר שנבחר יהיה מספר ראשוני? (תזכורת: מספרים ראשוניים עד 10 הם 2, 3, 5, 7).&rlm;",
        "options": ["4/10 (או 2/5)", "3/10", "5/10 (או 1/2)", "2/10 (או 1/5)"],
        "correctAnswer": 0,
        "hint": "ספרו כמה מספרים ראשוניים צוינו בתזכורת, וחלקו אותם בעשר.",
        "solution_steps": [
            { "verbal_explanation": "מרחב המדגם מכיל עשרה מספרים שלמים אפשריים לבחירה.", "math_expression": "10" },
            { "verbal_explanation": "קבוצת המספרים הראשוניים בתחום זה כוללת את שתיים, שלוש, חמש ושבע. כלומר, ארבעה מספרים רצויים.", "math_expression": "4" },
            { "verbal_explanation": "נבנה את השבר המייצג את ההסתברות: ארבעה מתוך עשרה.", "math_expression": "\\frac{4}{10}" },
            { "verbal_explanation": "ניתן לצמצם את השבר על ידי חלוקה בשתיים ולקבל שתי חמישיות.", "math_expression": "\\frac{2}{5}" }
        ],
        "final_answer": "4/10 (או 2/5)"
    },
    {
        "topic": "statistics_probability_grade_8",
        "subTopic": "מרחב מדגם והסתברות קלאסית",
        "question_text": "זורקים שני מטבעות הוגנים יחד. התוצאות האפשריות הן: (עץ, עץ), (עץ, פלי), (פלי, עץ), (פלי, פלי). מהי ההסתברות שנקבל בדיוק פעם אחת 'עץ' ופעם אחת 'פלי'?&rlm;",
        "options": ["2/4 (או 1/2)", "1/4", "3/4", "0"],
        "correctAnswer": 0,
        "hint": "בדקו ברשימת האפשרויות בכמה מהן יש בדיוק 'עץ' אחד ו'פלי' אחד.",
        "solution_steps": [
            { "verbal_explanation": "סך כל האפשרויות למרחב המדגם של זריקת שני מטבעות נתון לנו והוא ארבע.", "math_expression": "4" },
            { "verbal_explanation": "אנו מחפשים את המקרים של עץ ופלי. זה מופיע בשתי צורות: או עץ קודם ופלי אחר כך, או להפך. סך הכל שתי אפשרויות רצויות.", "math_expression": "2" },
            { "verbal_explanation": "נרכיב את השבר: שתיים מתוך ארבע אפשרויות כוללות.", "math_expression": "\\frac{2}{4}" },
            { "verbal_explanation": "נצמצם את השבר ונגלה שההסתברות היא חצי.", "math_expression": "\\frac{1}{2}" }
        ],
        "final_answer": "2/4 (או 1/2)"
    },
    {
        "topic": "statistics_probability_grade_8",
        "subTopic": "מרחב מדגם והסתברות קלאסית",
        "question_text": "מטילים קוביית משחק הוגנת. מהי ההסתברות לקבל מספר שהוא כפולה של 3 (המספרים 3, 6)?&rlm;",
        "options": ["2/6 (או 1/3)", "3/6", "1/6", "1/2"],
        "correctAnswer": 0,
        "hint": "ישנם רק שני מספרים על קובייה שהם כפולות של 3. חלקו 2 ב-6.",
        "solution_steps": [
            { "verbal_explanation": "המספר הכולל של התוצאות על קוביית משחק הוא שש.", "math_expression": "6" },
            { "verbal_explanation": "הכפולות של שלוש שנמצאות על הקובייה הן שלוש ושש בלבד. אלו שתי תוצאות אפשריות רצויות.", "math_expression": "2" },
            { "verbal_explanation": "נציב בשבר: שתיים חלקי שש.", "math_expression": "\\frac{2}{6}" },
            { "verbal_explanation": "נצמצם בשתיים לקבלת התשובה הסופית, שהיא שליש.", "math_expression": "\\frac{1}{3}" }
        ],
        "final_answer": "2/6 (או 1/3)"
    },
    {
        "topic": "statistics_probability_grade_8",
        "subTopic": "מרחב מדגם והסתברות קלאסית",
        "question_text": "קערה מכילה 5 כדורים לבנים ו-5 כדורים שחורים. מוציאים כדור אחד באקראי. מהי ההסתברות שהכדור שיוצא יהיה לבן?&rlm;",
        "options": ["1/2", "5/5", "1/5", "1/10"],
        "correctAnswer": 0,
        "hint": "חצי מהכדורים לבנים וחצי שחורים. לכן ההסתברות היא חצי.",
        "solution_steps": [
            { "verbal_explanation": "נמצא את הכמות הכוללת של הכדורים בקערה על ידי חיבור הצבעים.", "math_expression": "5 + 5 = 10" },
            { "verbal_explanation": "התוצאה הרצויה היא כדור לבן. ישנם חמישה כדורים לבנים.", "math_expression": "5" },
            { "verbal_explanation": "נבנה את השבר: חמש תוצאות רצויות מתוך עשר אפשריות.", "math_expression": "\\frac{5}{10}" },
            { "verbal_explanation": "נצמצם את השבר על ידי חלוקה בחמש ונקבל בדיוק חצי.", "math_expression": "\\frac{1}{2}" }
        ],
        "final_answer": "1/2"
    },

    // ==========================================
    // תת נושא 2: מאורע משלים (10 שאלות)
    // ==========================================
    {
        "topic": "statistics_probability_grade_8",
        "subTopic": "מאורע משלים",
        "question_text": "ההסתברות שיירד מחר גשם היא 0.3. מהי ההסתברות שמחר לא יירד גשם?&rlm;",
        "options": ["0.7", "0.3", "1.0", "0.5"],
        "correctAnswer": 0,
        "hint": "סכום ההסתברויות של מאורע והמאורע המשלים שלו (ההפך ממנו) שווה תמיד ל-1.",
        "solution_steps": [
            { "verbal_explanation": "במתמטיקה, הסתברות שלמה ומוחלטת למשהו שיקרה בוודאות שווה לאחד.", "math_expression": "1.0" },
            { "verbal_explanation": "המאורע שלא יירד גשם הוא המאורע המשלים לירידת גשם. נחסר את ההסתברות לגשם מתוך השלם.", "math_expression": "1.0 - 0.3" },
            { "verbal_explanation": "נבצע את תרגיל החיסור לקבלת ההסתברות המשלמת.", "math_expression": "0.7" },
            { "verbal_explanation": "ההסתברות שלא יירד מחר גשם היא אפס נקודה שבע.", "math_expression": "0.7" }
        ],
        "final_answer": "0.7"
    },
    {
        "topic": "statistics_probability_grade_8",
        "subTopic": "מאורע משלים",
        "question_text": "ההסתברות שקבוצת כדורגל תנצח במשחק היא 3/7. מהי ההסתברות שהקבוצה לא תנצח במשחק?&rlm;",
        "options": ["4/7", "3/7", "1/7", "7/7"],
        "correctAnswer": 0,
        "hint": "ההסתברות השלמה היא 1 (או 7/7). חסרו ממנה את ההסתברות לניצחון.",
        "solution_steps": [
            { "verbal_explanation": "סך כל ההסתברויות במשחק מסתכמות לשלם אחד. נכתוב את השלם כשבר עם מכנה שבע.", "math_expression": "\\frac{7}{7}" },
            { "verbal_explanation": "ההסתברות לניצחון היא שלוש שביעיות. נחסר אותה מהשלם כדי למצוא את ההסתברות לאי-ניצחון.", "math_expression": "\\frac{7}{7} - \\frac{3}{7}" },
            { "verbal_explanation": "נחסר את המונים ונקבל ארבע.", "math_expression": "7 - 3 = 4" },
            { "verbal_explanation": "ההסתברות שהקבוצה לא תנצח היא ארבע שביעיות.", "math_expression": "\\frac{4}{7}" }
        ],
        "final_answer": "4/7"
    },
    {
        "topic": "statistics_probability_grade_8",
        "subTopic": "מאורע משלים",
        "question_text": "מפעל מייצר נורות. ההסתברות שנורה שנבחרה באקראי תהיה פגומה היא 5% (שהם 0.05). מהי ההסתברות שהנורה תהיה תקינה (לא פגומה)?&rlm;",
        "options": ["95% (או 0.95)", "50% (או 0.50)", "5% (או 0.05)", "100% (או 1)"],
        "correctAnswer": 0,
        "hint": "המאורע של בחירת נורה תקינה משלים למאורע של בחירת נורה פגומה. הם צריכים להשלים יחד ל-100%.",
        "solution_steps": [
            { "verbal_explanation": "כלל הנורות במפעל מייצגות מאה אחוז מהייצור.", "math_expression": "100\\%" },
            { "verbal_explanation": "חמישה אחוזים מהנורות פגומות. נחסר אותן מכלל האחוזים כדי לגלות את החלק התקין.", "math_expression": "100 - 5" },
            { "verbal_explanation": "נקבל תשעים וחמישה אחוזים.", "math_expression": "95\\%" },
            { "verbal_explanation": "נהפוך את האחוז לשבר עשרוני לקבלת התשובה הנוספת.", "math_expression": "0.95" }
        ],
        "final_answer": "95% (או 0.95)"
    },
    {
        "topic": "statistics_probability_grade_8",
        "subTopic": "מאורע משלים",
        "question_text": "ההסתברות לזכות בפרס בהגרלה היא 0.15. מהי ההסתברות שלא לזכות בפרס?&rlm;",
        "options": ["0.85", "0.15", "0.95", "1.15"],
        "correctAnswer": 0,
        "hint": "חסרו 0.15 מתוך 1 השלם.",
        "solution_steps": [
            { "verbal_explanation": "ההסתברות הכוללת והשלמה היא אחד.", "math_expression": "1.00" },
            { "verbal_explanation": "נחסר מהשלם את ההסתברות לזכייה בהגרלה כדי לקבל את המאורע המשלים של הפסד.", "math_expression": "1.00 - 0.15" },
            { "verbal_explanation": "החיסור מניב תוצאה של שמונים וחמש מאיות.", "math_expression": "0.85" },
            { "verbal_explanation": "ההסתברות לא לזכות היא אפס נקודה שמונים וחמש.", "math_expression": "0.85" }
        ],
        "final_answer": "0.85"
    },
    {
        "topic": "statistics_probability_grade_8",
        "subTopic": "מאורע משלים",
        "question_text": "ההסתברות שעידו יקלע לסל היא 7/10. מהי ההסתברות שעידו יחטיא את הסל?&rlm;",
        "options": ["3/10", "7/10", "1/10", "10/10"],
        "correctAnswer": 0,
        "hint": "ההחטאה היא המאורע המשלים לקליעה. השלימו את 7/10 ל-10/10.",
        "solution_steps": [
            { "verbal_explanation": "השלם, המייצג את כל האפשרויות בזריקה, הוא עשר חלקי עשר.", "math_expression": "\\frac{10}{10}" },
            { "verbal_explanation": "נחסר מהשלם את ההסתברות לקליעה מוצלחת.", "math_expression": "\\frac{10}{10} - \\frac{7}{10}" },
            { "verbal_explanation": "מכיוון שהמכנה משותף, נחסר רק את המונים. עשר פחות שבע שווה שלוש.", "math_expression": "10 - 7 = 3" },
            { "verbal_explanation": "ההסתברות להחטאה היא שלוש עשיריות.", "math_expression": "\\frac{3}{10}" }
        ],
        "final_answer": "3/10"
    },
    {
        "topic": "statistics_probability_grade_8",
        "subTopic": "מאורע משלים",
        "question_text": "בזריקת קובייה הוגנת, ההסתברות לקבל את המספר 6 היא 1/6. מהי ההסתברות לקבל מספר שהוא לא 6 (כלומר 1, 2, 3, 4 או 5)?&rlm;",
        "options": ["5/6", "1/6", "6/6", "4/6"],
        "correctAnswer": 0,
        "hint": "אם תוצאה אחת היא 6, נשארו 5 תוצאות אחרות שאינן 6 מתוך השש.",
        "solution_steps": [
            { "verbal_explanation": "ההסתברות השלמה לכלל התוצאות בקובייה היא שש שישיות.", "math_expression": "\\frac{6}{6}" },
            { "verbal_explanation": "נחסר את ההסתברות של קבלת המספר שש מתוך השלם.", "math_expression": "\\frac{6}{6} - \\frac{1}{6}" },
            { "verbal_explanation": "נחסר את המונים. שש פחות אחד שווה חמש.", "math_expression": "6 - 1 = 5" },
            { "verbal_explanation": "ההסתברות לקבל מספר שאינו שש היא חמש שישיות.", "math_expression": "\\frac{5}{6}" }
        ],
        "final_answer": "5/6"
    },
    {
        "topic": "statistics_probability_grade_8",
        "subTopic": "מאורע משלים",
        "question_text": "בשקית יש 20 סוכריות, ו-4 מתוכן הן בטעם לימון. ההסתברות להוציא סוכריית לימון היא 4/20. מהי ההסתברות להוציא סוכריה שאינה בטעם לימון?&rlm;",
        "options": ["16/20", "4/20", "12/20", "20/20"],
        "correctAnswer": 0,
        "hint": "מצאו כמה סוכריות נשארו בשקית שאינן לימון, וחלקו בסך הכל.",
        "solution_steps": [
            { "verbal_explanation": "ההסתברות המלאה להוציא סוכרייה כלשהי היא עשרים מתוך עשרים.", "math_expression": "\\frac{20}{20}" },
            { "verbal_explanation": "נחסר את ההסתברות של הוצאת סוכריית הלימון כדי למצוא את המאורע המשלים.", "math_expression": "\\frac{20}{20} - \\frac{4}{20}" },
            { "verbal_explanation": "נחסר ארבע מעשרים ונקבל שישה עשר.", "math_expression": "20 - 4 = 16" },
            { "verbal_explanation": "ההסתברות להוציא סוכריה שאינה לימון היא שש עשרה חלקי עשרים.", "math_expression": "\\frac{16}{20}" }
        ],
        "final_answer": "16/20"
    },
    {
        "topic": "statistics_probability_grade_8",
        "subTopic": "מאורע משלים",
        "question_text": "ההסתברות שרכבת תאחר להגיע לתחנה היא 12%. מהי ההסתברות שהרכבת תגיע בזמן ולא תאחר?&rlm;",
        "options": ["88%", "12%", "100%", "98%"],
        "correctAnswer": 0,
        "hint": "השלימו את האחוז הנתון למאה אחוז.",
        "solution_steps": [
            { "verbal_explanation": "סך כל האפשרויות להגעת הרכבת מהוות מאה אחוזים.", "math_expression": "100\\%" },
            { "verbal_explanation": "נחסר ממאה האחוזים את אחוז הסיכוי שהרכבת תאחר.", "math_expression": "100 - 12" },
            { "verbal_explanation": "נחשב את ההפרש לקבלת אחוז הסיכוי שהרכבת תגיע בזמן כראוי.", "math_expression": "88" },
            { "verbal_explanation": "ההסתברות היא שמונים ושמונה אחוזים.", "math_expression": "88\\%" }
        ],
        "final_answer": "88%"
    },
    {
        "topic": "statistics_probability_grade_8",
        "subTopic": "מאורע משלים",
        "question_text": "גלגל מזל מחולק ל-8 גזרות שוות. 3 מהגזרות צבועות באדום, לכן ההסתברות לעצור על אדום היא 3/8. מהי ההסתברות לעצור על גזרה שאינה אדומה?&rlm;",
        "options": ["5/8", "3/8", "8/8", "1/8"],
        "correctAnswer": 0,
        "hint": "שמונה חלקי שמונה פחות שלוש חלקי שמונה.",
        "solution_steps": [
            { "verbal_explanation": "הגלגל כולו מיוצג על ידי השבר שמונה שמיניות.", "math_expression": "\\frac{8}{8}" },
            { "verbal_explanation": "נחסר מהשלם את ההסתברות ליפול על גזרה אדומה כדי למצוא את ההסתברות המשלמת לשאר הצבעים.", "math_expression": "\\frac{8}{8} - \\frac{3}{8}" },
            { "verbal_explanation": "נבצע את פעולת החיסור של המונים.", "math_expression": "8 - 3 = 5" },
            { "verbal_explanation": "ההסתברות לעצור על גזרה לא אדומה היא חמש שמיניות.", "math_expression": "\\frac{5}{8}" }
        ],
        "final_answer": "5/8"
    },
    {
        "topic": "statistics_probability_grade_8",
        "subTopic": "מאורע משלים",
        "question_text": "בכיתה יש 30 תלמידים. 6 מתוכם מרכיבים משקפיים. נבחר תלמיד באקראי. ידוע שההסתברות שייבחר תלמיד עם משקפיים היא 6/30. מהי ההסתברות שייבחר תלמיד שאינו מרכיב משקפיים?&rlm;",
        "options": ["24/30", "6/30", "30/30", "20/30"],
        "correctAnswer": 0,
        "hint": "השלימו את 6 התלמידים ל-30, ואז רשמו זאת כשבר.",
        "solution_steps": [
            { "verbal_explanation": "הכיתה השלמה מיוצגת על ידי השבר שלושים חלקי שלושים.", "math_expression": "\\frac{30}{30}" },
            { "verbal_explanation": "נחסר את השבר המייצג את התלמידים שמרכיבים משקפיים.", "math_expression": "\\frac{30}{30} - \\frac{6}{30}" },
            { "verbal_explanation": "נחשב את החיסור במונה. שלושים פחות שש שווה עשרים וארבע.", "math_expression": "30 - 6 = 24" },
            { "verbal_explanation": "ההסתברות לבחור תלמיד ללא משקפיים היא עשרים וארבעה מתוך שלושים.", "math_expression": "\\frac{24}{30}" }
        ],
        "final_answer": "24/30"
    },

    // ==========================================
    // תת נושא 3: ממוצע, חציון ושכיח (10 שאלות)
    // ==========================================
    {
        "topic": "statistics_probability_grade_8",
        "subTopic": "ממוצע, חציון ושכיח",
        "question_text": "תלמיד קיבל במבחנים את הציונים הבאים: 70, 80, 90. מהו הציון הממוצע שלו?&rlm;",
        "options": ["80", "70", "90", "240"],
        "correctAnswer": 0,
        "hint": "כדי למצוא ממוצע, חברו את כל הציונים יחד וחלקו את הסכום במספר המבחנים.",
        "solution_steps": [
            { "verbal_explanation": "השלב הראשון במציאת ממוצע הוא לחבר יחד את כל הנתונים.", "math_expression": "70 + 80 + 90" },
            { "verbal_explanation": "נחשב את סכום הציונים הכולל.", "math_expression": "240" },
            { "verbal_explanation": "השלב השני הוא לספור כמה נתונים היו לנו. במקרה זה, שלושה ציונים.", "math_expression": "3" },
            { "verbal_explanation": "נחלק את סכום הציונים במספר הנתונים כדי למצוא את הממוצע.", "math_expression": "240 \\div 3" },
            { "verbal_explanation": "התוצאה היא שמונים. הציון הממוצע הוא שמונים.", "math_expression": "80" }
        ],
        "final_answer": "80"
    },
    {
        "topic": "statistics_probability_grade_8",
        "subTopic": "ממוצע, חציון ושכיח",
        "question_text": "נתונה קבוצת המספרים הבאה: 4, 4, 5, 6, 7. מהו השכיח בקבוצה זו?&rlm;",
        "options": ["4", "5", "6", "7"],
        "correctAnswer": 0,
        "hint": "השכיח הוא הנתון שמופיע הכי הרבה פעמים בקבוצה.",
        "solution_steps": [
            { "verbal_explanation": "השכיח בסטטיסטיקה מוגדר כערך בעל התדירות הגבוהה ביותר.", "math_expression": "\\text{Max}" },
            { "verbal_explanation": "נסרוק את קבוצת המספרים הנתונה ונבדוק כמה פעמים מופיע כל מספר.", "math_expression": "4, 4, 5, 6, 7" },
            { "verbal_explanation": "המספרים חמש, שש ושבע מופיעים פעם אחת כל אחד. המספר ארבע מופיע פעמיים.", "math_expression": "2 > 1" },
            { "verbal_explanation": "מכיוון שהמספר ארבע מופיע הכי הרבה פעמים, הוא השכיח של הקבוצה.", "math_expression": "4" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "statistics_probability_grade_8",
        "subTopic": "ממוצע, חציון ושכיח",
        "question_text": "נתונה קבוצת המספרים הבאה: 1, 3, 5, 7, 9. המספרים כבר מסודרים מהקטן לגדול. מהו החציון?&rlm;",
        "options": ["5", "3", "7", "25"],
        "correctAnswer": 0,
        "hint": "החציון הוא המספר שנמצא בדיוק באמצע הרשימה המסודרת.",
        "solution_steps": [
            { "verbal_explanation": "כדי למצוא את החציון, יש לוודא שהנתונים מסודרים מהקטן לגדול. הם אכן מסודרים.", "math_expression": "1, 3, 5, 7, 9" },
            { "verbal_explanation": "נספור כמה מספרים יש ברשימה. ישנם חמישה איברים, שזה מספר אי זוגי.", "math_expression": "5" },
            { "verbal_explanation": "בכמות אי זוגית של איברים, החציון הוא האיבר שממוקם בדיוק במרכז. שניים מימינו ושניים משמאלו.", "math_expression": "5" },
            { "verbal_explanation": "האיבר השלישי הוא המספר חמש. זהו החציון.", "math_expression": "5" }
        ],
        "final_answer": "5"
    },
    {
        "topic": "statistics_probability_grade_8",
        "subTopic": "ממוצע, חציון ושכיח",
        "question_text": "נתונה קבוצת הציונים הבאה המסודרת מהנמוך לגבוה: 60, 70, 80, 90. מהו החציון בקבוצה זו?&rlm;",
        "options": ["75", "70", "80", "150"],
        "correctAnswer": 0,
        "hint": "כשיש מספר זוגי של נתונים, אין מספר אחד באמצע. מחשבים את הממוצע של שני המספרים האמצעיים.",
        "solution_steps": [
            { "verbal_explanation": "הנתונים כבר מסודרים בסדר עולה. נספור כמה איברים יש: ארבעה איברים (כמות זוגית).", "math_expression": "4" },
            { "verbal_explanation": "כאשר כמות האיברים זוגית, לוקחים את שני האיברים האמצעיים.", "math_expression": "70 \\quad , \\quad 80" },
            { "verbal_explanation": "נמצא את הממוצע של שני האיברים הללו. נחבר אותם ונחלק בשתיים.", "math_expression": "(70 + 80) \\div 2" },
            { "verbal_explanation": "הסכום הוא מאה וחמישים. לחלק לשתיים שווה שבעים וחמש.", "math_expression": "150 \\div 2 = 75" },
            { "verbal_explanation": "החציון של הציונים הוא שבעים וחמש.", "math_expression": "75" }
        ],
        "final_answer": "75"
    },
    {
        "topic": "statistics_probability_grade_8",
        "subTopic": "ממוצע, חציון ושכיח",
        "question_text": "במהלך השבוע נמדדו הטמפרטורות הבאות (במעלות צלזיוס): 20, 22, 22, 24. מהי הטמפרטורה הממוצעת?&rlm;",
        "options": ["22", "20", "24", "88"],
        "correctAnswer": 0,
        "hint": "חברו את ארבע הטמפרטורות וחלקו את הסכום ב-4.",
        "solution_steps": [
            { "verbal_explanation": "נחבר את כל המדידות של הטמפרטורה יחד למציאת הסכום הכולל.", "math_expression": "20 + 22 + 22 + 24" },
            { "verbal_explanation": "נחשב את הסכום.", "math_expression": "88" },
            { "verbal_explanation": "נבדוק כמה מדידות בוצעו. ישנן ארבע מדידות בסך הכל.", "math_expression": "4" },
            { "verbal_explanation": "נחלק את סכום הטמפרטורות במספר המדידות.", "math_expression": "88 \\div 4" },
            { "verbal_explanation": "הטמפרטורה הממוצעת היא עשרים ושתיים מעלות.", "math_expression": "22" }
        ],
        "final_answer": "22"
    },
    {
        "topic": "statistics_probability_grade_8",
        "subTopic": "ממוצע, חציון ושכיח",
        "question_text": "לפניכם קבוצת מספרים שאינה מסודרת: 9, 2, 5, 7, 1. מצאו את החציון של קבוצה זו.&rlm;",
        "options": ["5", "7", "2", "9"],
        "correctAnswer": 0,
        "hint": "קודם כל חייבים לסדר את המספרים מהקטן לגדול. רק אז חפשו את האמצע.",
        "solution_steps": [
            { "verbal_explanation": "חובה לסדר את כל הנתונים מהמספר הקטן ביותר ועד לגדול ביותר לפני מציאת החציון.", "math_expression": "1, 2, 5, 7, 9" },
            { "verbal_explanation": "נספור את כמות האיברים בסדרה המעודכנת. ישנם חמישה איברים.", "math_expression": "5" },
            { "verbal_explanation": "נחפש את האיבר הממוקם במרכז הרשימה המסודרת. זהו האיבר השלישי.", "math_expression": "5" },
            { "verbal_explanation": "החציון הוא המספר חמש.", "math_expression": "5" }
        ],
        "final_answer": "5"
    },
    {
        "topic": "statistics_probability_grade_8",
        "subTopic": "ממוצע, חציון ושכיח",
        "question_text": "קבוצת משקלים (בקילוגרמים) נרשמה כך: 40, 50, 40, 60, 40. מהו השכיח של המשקלים?&rlm;",
        "options": ["40", "50", "60", "46"],
        "correctAnswer": 0,
        "hint": "חפשו את המשקל שחוזר על עצמו יותר מכל שאר המשקלים.",
        "solution_steps": [
            { "verbal_explanation": "כדי למצוא את השכיח, עלינו לבדוק את התדירות של כל מספר ברשימה.", "math_expression": "40, 50, 40, 60, 40" },
            { "verbal_explanation": "המספר חמישים מופיע פעם אחת. המספר שישים מופיע פעם אחת. המספר ארבעים מופיע שלוש פעמים.", "math_expression": "3 > 1" },
            { "verbal_explanation": "הערך שמופיע בתדירות הגבוהה ביותר הוא ארבעים.", "math_expression": "40" },
            { "verbal_explanation": "לכן, השכיח של המשקלים הוא ארבעים.", "math_expression": "40" }
        ],
        "final_answer": "40"
    },
    {
        "topic": "statistics_probability_grade_8",
        "subTopic": "ממוצע, חציון ושכיח",
        "question_text": "הממוצע של 3 מספרים הוא 10. ידוע ששניים מהמספרים הם 8 ו-12. מהו המספר השלישי החסר?&rlm;",
        "options": ["10", "30", "5", "8"],
        "correctAnswer": 0,
        "hint": "אם הממוצע של 3 מספרים הוא 10, אז הסכום הכולל שלהם חייב להיות 30. מצאו איזה מספר חסר כדי להגיע ל-30.",
        "solution_steps": [
            { "verbal_explanation": "כדי למצוא את הסכום הכולל של כל המספרים, נכפול את הממוצע במספר האיברים.", "math_expression": "10 \\times 3 = 30" },
            { "verbal_explanation": "סכום כל שלושת המספרים יחד הוא שלושים.", "math_expression": "30" },
            { "verbal_explanation": "נחבר את שני המספרים שכבר ידועים לנו.", "math_expression": "8 + 12 = 20" },
            { "verbal_explanation": "נחסר מסכום היעד את הסכום הקיים כדי לגלות את המספר שחסר.", "math_expression": "30 - 20" },
            { "verbal_explanation": "המספר השלישי הוא עשר.", "math_expression": "10" }
        ],
        "final_answer": "10"
    },
    {
        "topic": "statistics_probability_grade_8",
        "subTopic": "ממוצע, חציון ושכיח",
        "question_text": "גילאי הילדים בקבוצה הם: 12, 13, 14, 15. מצאו את החציון של גילאי הקבוצה.&rlm;",
        "options": ["13.5", "13", "14", "13.25"],
        "correctAnswer": 0,
        "hint": "הגילאים כבר מסודרים. יש מספר זוגי של ילדים, אז חשבו את הממוצע של שני הגילאים האמצעיים.",
        "solution_steps": [
            { "verbal_explanation": "המספרים מסודרים בסדר עולה וישנם ארבעה מספרים בסך הכל.", "math_expression": "12, 13, 14, 15" },
            { "verbal_explanation": "נאתר את שני המספרים הממוקמים במרכז הרשימה.", "math_expression": "13 \\quad , \\quad 14" },
            { "verbal_explanation": "נחשב את הממוצע של שני המספרים הללו.", "math_expression": "(13 + 14) \\div 2" },
            { "verbal_explanation": "סכומם הוא עשרים ושבע. נחלק לשתיים.", "math_expression": "27 \\div 2 = 13.5" },
            { "verbal_explanation": "גיל החציון הוא שלוש עשרה וחצי.", "math_expression": "13.5" }
        ],
        "final_answer": "13.5"
    },
    {
        "topic": "statistics_probability_grade_8",
        "subTopic": "ממוצע, חציון ושכיח",
        "question_text": "נתונים המספרים הבאים, המסודרים בסדר עולה: 2, 3, 3, 4, 4, 4, 5. מצאו את החציון של רשימת המספרים הזו.&rlm;",
        "options": ["4", "3", "3.5", "5"],
        "correctAnswer": 0,
        "hint": "הרשימה כבר מסודרת. ספרו כמה מספרים יש, ומצאו את המספר שנמצא בדיוק במרכז.",
        "solution_steps": [
            { "verbal_explanation": "המספרים מסודרים היטב. נספור כמה מספרים קיימים ברשימה. ישנם שבעה איברים.", "math_expression": "7" },
            { "verbal_explanation": "כיוון ששבע הוא מספר אי זוגי, יש רק איבר אחד מרכזי. המיקום שלו הוא השביעי פלוס אחד, חלקי שתיים.", "math_expression": "(7 + 1) \\div 2 = 4" },
            { "verbal_explanation": "האיבר הרביעי ברשימה הוא החציון. נספור עד האיבר הרביעי.", "math_expression": "4" },
            { "verbal_explanation": "האיבר במקום הרביעי הוא המספר ארבע. לכן החציון הוא ארבע.", "math_expression": "4" }
        ],
        "final_answer": "4"
    },

    // ==========================================
    // תת נושא 4: דיאגרמות שכיחות (10 שאלות)
    // ==========================================
    {
        "topic": "statistics_probability_grade_8",
        "subTopic": "דיאגרמות שכיחות",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 250 150\" width=\"200\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"30\" y1=\"130\" x2=\"230\" y2=\"130\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><line x1=\"30\" y1=\"10\" x2=\"30\" y2=\"130\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><rect x=\"50\" y=\"80\" width=\"30\" height=\"50\" fill=\"#3b82f6\"/><rect x=\"100\" y=\"30\" width=\"30\" height=\"100\" fill=\"#3b82f6\"/><rect x=\"150\" y=\"60\" width=\"30\" height=\"70\" fill=\"#3b82f6\"/><text x=\"65\" y=\"145\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">1</text><text x=\"115\" y=\"145\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">2</text><text x=\"165\" y=\"145\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">3</text><text x=\"10\" y=\"85\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">5</text><text x=\"5\" y=\"35\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">10</text><text x=\"10\" y=\"65\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">7</text></svg></div><br>לפניכם דיאגרמת עמודות (גרף) המציגה את מספר הספרים שקראו תלמידים בחודש האחרון. הציר האופקי מראה את מספר הספרים (1, 2 או 3). הציר האנכי מראה את מספר התלמידים (שכיחות). כמה תלמידים בסך הכל השתתפו בסקר זה?&rlm;",
        "options": ["22", "10", "3", "12"],
        "correctAnswer": 0,
        "hint": "כדי למצוא את המספר הכולל, עליכם לקרוא את הגובה של כל עמודה בגרף ולחבר את כל הגבהים יחד.",
        "solution_steps": [
            { "verbal_explanation": "גובהה של כל עמודה מייצג את כמות התלמידים בקבוצה המסוימת.", "math_expression": "\\text{Height}" },
            { "verbal_explanation": "העמודה הראשונה (ספר אחד) מגיעה לגובה של חמש.", "math_expression": "5" },
            { "verbal_explanation": "העמודה השנייה (שני ספרים) מגיעה לשיא הגובה, שהוא עשר.", "math_expression": "10" },
            { "verbal_explanation": "העמודה השלישית (שלושה ספרים) מגיעה לגובה של שבע.", "math_expression": "7" },
            { "verbal_explanation": "נחבר את כל התלמידים מכל העמודות למציאת סך הכל. חמש ועוד עשר ועוד שבע.", "math_expression": "5 + 10 + 7 = 22" }
        ],
        "final_answer": "22"
    },
    {
        "topic": "statistics_probability_grade_8",
        "subTopic": "דיאגרמות שכיחות",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 250 150\" width=\"200\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"30\" y1=\"130\" x2=\"230\" y2=\"130\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><line x1=\"30\" y1=\"10\" x2=\"30\" y2=\"130\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><rect x=\"50\" y=\"80\" width=\"30\" height=\"50\" fill=\"#3b82f6\"/><rect x=\"100\" y=\"30\" width=\"30\" height=\"100\" fill=\"#3b82f6\"/><rect x=\"150\" y=\"60\" width=\"30\" height=\"70\" fill=\"#3b82f6\"/><text x=\"65\" y=\"145\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">1</text><text x=\"115\" y=\"145\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">2</text><text x=\"165\" y=\"145\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">3</text><text x=\"10\" y=\"85\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">5</text><text x=\"5\" y=\"35\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">10</text><text x=\"10\" y=\"65\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">7</text></svg></div><br>בהתייחס לאותה דיאגרמת עמודות של קריאת ספרים, מהו השכיח (הנתון המופיע מספר הפעמים הרב ביותר)?&rlm;",
        "options": ["2", "10", "3", "1"],
        "correctAnswer": 0,
        "hint": "השכיח הוא הערך שעל הציר האופקי שמעליו מופיעה העמודה הגבוהה ביותר.",
        "solution_steps": [
            { "verbal_explanation": "השכיח מזוהה בגרף העמודות על ידי חיפוש העמודה הגבוהה ביותר.", "math_expression": "\\text{Max Height}" },
            { "verbal_explanation": "נבחן את הגרף ונראה שהעמודה האמצעית היא הגבוהה ביותר (גובה של עשר).", "math_expression": "10 > 7 > 5" },
            { "verbal_explanation": "הערך שרשום מתחת לעמודה זו, על הציר האופקי, הוא השכיח.", "math_expression": "2" },
            { "verbal_explanation": "לכן, קריאת שני ספרים היא המספר השכיח.", "math_expression": "2" }
        ],
        "final_answer": "2"
    },
    {
        "topic": "statistics_probability_grade_8",
        "subTopic": "דיאגרמות שכיחות",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 250 150\" width=\"200\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"30\" y1=\"130\" x2=\"230\" y2=\"130\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><line x1=\"30\" y1=\"10\" x2=\"30\" y2=\"130\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><rect x=\"50\" y=\"80\" width=\"30\" height=\"50\" fill=\"#3b82f6\"/><rect x=\"100\" y=\"30\" width=\"30\" height=\"100\" fill=\"#3b82f6\"/><rect x=\"150\" y=\"60\" width=\"30\" height=\"70\" fill=\"#3b82f6\"/><text x=\"65\" y=\"145\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">1</text><text x=\"115\" y=\"145\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">2</text><text x=\"165\" y=\"145\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">3</text><text x=\"10\" y=\"85\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">5</text><text x=\"5\" y=\"35\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">10</text><text x=\"10\" y=\"65\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">7</text></svg></div><br>שוב באותה דיאגרמת עמודות, כמה תלמידים קראו יותר מספר אחד בחודש האחרון?&rlm;",
        "options": ["17", "10", "7", "22"],
        "correctAnswer": 0,
        "hint": "'יותר מספר אחד' אומר שאתם צריכים לחפש תלמידים שקראו 2 ספרים או 3 ספרים. חברו את הגבהים של שתי העמודות האלה.",
        "solution_steps": [
            { "verbal_explanation": "הביטוי 'יותר מספר אחד' מתייחס לאלו שקראו שני ספרים ולאלו שקראו שלושה.", "math_expression": "> 1 \\Rightarrow 2 , 3" },
            { "verbal_explanation": "נסתכל על העמודה של שני ספרים. מספר התלמידים שם הוא עשר.", "math_expression": "10" },
            { "verbal_explanation": "נסתכל על העמודה של שלושה ספרים. מספר התלמידים שם הוא שבע.", "math_expression": "7" },
            { "verbal_explanation": "נחבר את כמויות התלמידים משתי הקבוצות הללו.", "math_expression": "10 + 7" },
            { "verbal_explanation": "סך הכל שבעה עשר תלמידים קראו יותר מספר אחד.", "math_expression": "17" }
        ],
        "final_answer": "17"
    },
    {
        "topic": "statistics_probability_grade_8",
        "subTopic": "דיאגרמות שכיחות",
        "question_text": "לפניכם טבלת שכיחויות של ציוני כיתה במתמטיקה:<br>ציון 70: 2 תלמידים.<br>ציון 80: 4 תלמידים.<br>ציון 90: 4 תלמידים.<br>כמה תלמידים ניגשו למבחן בסך הכל?&rlm;",
        "options": ["10", "3", "240", "80"],
        "correctAnswer": 0,
        "hint": "מספר התלמידים מיוצג על ידי ה'שכיחות'. חברו את כל השכיחויות שמופיעות בטבלה.",
        "solution_steps": [
            { "verbal_explanation": "סך הכל התלמידים בכיתה הוא סכום השכיחויות מכל הציונים יחד.", "math_expression": "\\text{Total Frequency}" },
            { "verbal_explanation": "ישנם שני תלמידים שקיבלו את הציון הראשון.", "math_expression": "2" },
            { "verbal_explanation": "ישנם ארבעה שקיבלו את הציון השני, ועוד ארבעה שקיבלו את השלישי.", "math_expression": "4 \\quad , \\quad 4" },
            { "verbal_explanation": "נחבר את כל התלמידים: שתיים ועוד ארבע ועוד ארבע.", "math_expression": "2 + 4 + 4" },
            { "verbal_explanation": "בסך הכל ניגשו עשרה תלמידים למבחן.", "math_expression": "10" }
        ],
        "final_answer": "10"
    },
    {
        "topic": "statistics_probability_grade_8",
        "subTopic": "דיאגרמות שכיחות",
        "question_text": "בהמשך לטבלת השכיחויות (70: 2 תלמידים, 80: 4 תלמידים, 90: 4 תלמידים). מהו חציון הציונים של הכיתה?&rlm;",
        "options": ["80", "85", "75", "90"],
        "correctAnswer": 0,
        "hint": "יש 10 תלמידים (מספר זוגי). החציון ייפול בין התלמיד ה-5 לתלמיד ה-6 ברשימה המסודרת מהנמוך לגבוה. חפשו לאיזה ציון הם שייכים.",
        "solution_steps": [
            { "verbal_explanation": "ישנם עשרה תלמידים בכיתה, שזהו מספר זוגי. החציון יהיה הממוצע של האיבר החמישי והשישי ברשימה המסודרת.", "math_expression": "10 \\Rightarrow 5 , 6" },
            { "verbal_explanation": "נתחיל לספור תלמידים מהציון הנמוך ביותר. בציון שבעים יש שני תלמידים. חסרים לנו עוד תלמידים כדי להגיע לאמצע.", "math_expression": "2" },
            { "verbal_explanation": "נעבור לציון שמונים שבו יש ארבעה תלמידים. יחד עם הקודמים הגענו לשישה תלמידים. כלומר, התלמיד החמישי והשישי נמצאים שניהם בקבוצה זו.", "math_expression": "2 + 4 = 6" },
            { "verbal_explanation": "התלמיד החמישי קיבל שמונים. התלמיד השישי קיבל שמונים.", "math_expression": "80 \\quad , \\quad 80" },
            { "verbal_explanation": "הממוצע של שמונים ושמונים הוא שמונים. לכן החציון הוא שמונים.", "math_expression": "80" }
        ],
        "final_answer": "80"
    },
    {
        "topic": "statistics_probability_grade_8",
        "subTopic": "דיאגרמות שכיחות",
        "question_text": "בהמשך לטבלת השכיחויות (70: 2 תלמידים, 80: 4 תלמידים, 90: 4 תלמידים). מהו הציון הממוצע של הכיתה?&rlm;",
        "options": ["82", "80", "85", "240"],
        "correctAnswer": 0,
        "hint": "כדי לחשב ממוצע מטבלת שכיחויות, כפלו כל ציון במספר התלמידים שקיבלו אותו, חברו את כל התוצאות, וחלקו בסך הכל התלמידים (10).",
        "solution_steps": [
            { "verbal_explanation": "נחשב את סך כל הציונים של התלמידים בקבוצה הראשונה. פעמיים שבעים.", "math_expression": "70 \\times 2 = 140" },
            { "verbal_explanation": "נחשב לקבוצה השנייה: ארבע פעמים שמונים.", "math_expression": "80 \\times 4 = 320" },
            { "verbal_explanation": "נחשב לקבוצה השלישית: ארבע פעמים תשעים.", "math_expression": "90 \\times 4 = 360" },
            { "verbal_explanation": "נחבר את כל המכפלות יחד לקבלת סכום הציונים של כל הכיתה.", "math_expression": "140 + 320 + 360 = 820" },
            { "verbal_explanation": "נחלק את הסכום הכולל במספר התלמידים בכיתה, שהוא עשר.", "math_expression": "820 \\div 10" },
            { "verbal_explanation": "הממוצע הכיתתי הוא שמונים ושתיים.", "math_expression": "82" }
        ],
        "final_answer": "82"
    },
    {
        "topic": "statistics_probability_grade_8",
        "subTopic": "דיאגרמות שכיחות",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 250 150\" width=\"200\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"30\" y1=\"130\" x2=\"230\" y2=\"130\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><line x1=\"30\" y1=\"10\" x2=\"30\" y2=\"130\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><rect x=\"40\" y=\"90\" width=\"30\" height=\"40\" fill=\"#f59e0b\"/><rect x=\"90\" y=\"50\" width=\"30\" height=\"80\" fill=\"#f59e0b\"/><rect x=\"140\" y=\"70\" width=\"30\" height=\"60\" fill=\"#f59e0b\"/><rect x=\"190\" y=\"110\" width=\"30\" height=\"20\" fill=\"#f59e0b\"/><text x=\"55\" y=\"145\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">0</text><text x=\"105\" y=\"145\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">1</text><text x=\"155\" y=\"145\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">2</text><text x=\"205\" y=\"145\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">3</text><text x=\"10\" y=\"95\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">2</text><text x=\"10\" y=\"55\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">4</text><text x=\"10\" y=\"75\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">3</text><text x=\"10\" y=\"115\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">1</text></svg></div><br>לפניכם גרף המתאר את כמות השערים שהבקיעה קבוצת כדורגל במספר משחקים. הציר האופקי מראה את מספר השערים במשחק. הציר האנכי מראה בכמה משחקים זה קרה. מהו אחוז המשחקים שבהם הבקיעה הקבוצה בדיוק 2 שערים?&rlm;",
        "options": ["30%", "20%", "40%", "3%"],
        "correctAnswer": 0,
        "hint": "חשבו קודם בכמה משחקים הקבוצה שיחקה בסך הכל (חברו את גובה העמודות). אחר כך בנו שבר שבו המונה הוא מספר המשחקים עם 2 שערים.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את סך כל המשחקים שהקבוצה שיחקה על ידי חיבור הגבהים של כל העמודות.", "math_expression": "2 + 4 + 3 + 1 = 10" },
            { "verbal_explanation": "הקבוצה שיחקה עשרה משחקים בסך הכל.", "math_expression": "10" },
            { "verbal_explanation": "נסתכל בעמודה של שני שערים ונראה מה גובהה. היא מגיעה לגובה שלוש.", "math_expression": "3" },
            { "verbal_explanation": "נבנה את השבר: שלושה משחקים מתוך עשרה.", "math_expression": "\\frac{3}{10}" },
            { "verbal_explanation": "נרחיב את השבר כך שהמכנה יהיה מאה כדי למצוא את האחוז.", "math_expression": "\\frac{30}{100}" },
            { "verbal_explanation": "ההסתברות היא שלושים אחוזים.", "math_expression": "30\\%" }
        ],
        "final_answer": "30%"
    },
    {
        "topic": "statistics_probability_grade_8",
        "subTopic": "דיאגרמות שכיחות",
        "question_text": "טבלת שכיחויות מציגה מידות נעליים של ילדים בקבוצה:<br>מידה 37: ילד 1<br>מידה 38: 3 ילדים<br>מידה 39: 5 ילדים<br>מידה 40: ילד 1<br>מהי מידת הנעליים השכיחה בקבוצה?&rlm;",
        "options": ["39", "5", "38", "40"],
        "correctAnswer": 0,
        "hint": "חפשו את הערך (מידת הנעליים) שלו מתאימה השכיחות הגבוהה ביותר (הכי הרבה ילדים).",
        "solution_steps": [
            { "verbal_explanation": "השכיח הוא הערך שיש לו את תדירות ההופעה הגדולה ביותר בטבלה.", "math_expression": "\\text{Max Frequency}" },
            { "verbal_explanation": "נבדוק את השכיחויות בטבלה: אחד, שלוש, חמש ואחד. המספר הגדול ביותר הוא חמש.", "math_expression": "5 > 3 > 1" },
            { "verbal_explanation": "המספר חמש מייצג את כמות הילדים שנועלים את מידה שלושים ותשע.", "math_expression": "39" },
            { "verbal_explanation": "לכן, המידה השכיחה ביותר בקבוצה היא שלושים ותשע.", "math_expression": "39" }
        ],
        "final_answer": "39"
    },
    {
        "topic": "statistics_probability_grade_8",
        "subTopic": "דיאגרמות שכיחות",
        "question_text": "בהמשך לטבלת מידות הנעליים (37:1, 38:3, 39:5, 40:1), כמה ילדים יש בסך הכל בקבוצה?&rlm;",
        "options": ["10", "4", "39", "154"],
        "correctAnswer": 0,
        "hint": "חברו את כל המספרים המייצגים את כמות הילדים בכל אחת מהמידות.",
        "solution_steps": [
            { "verbal_explanation": "סך כל הילדים בקבוצה מתקבל מחיבור כל השכיחויות המופיעות בטבלה.", "math_expression": "\\text{Sum}" },
            { "verbal_explanation": "נחבר את מספר הילדים בכל קטגוריה: אחד, ועוד שלוש, ועוד חמש, ועוד אחד.", "math_expression": "1 + 3 + 5 + 1" },
            { "verbal_explanation": "נחשב את הסכום הכולל.", "math_expression": "10" },
            { "verbal_explanation": "בקבוצה יש עשרה ילדים.", "math_expression": "10" }
        ],
        "final_answer": "10"
    },
    {
        "topic": "statistics_probability_grade_8",
        "subTopic": "דיאגרמות שכיחות",
        "question_text": "ושאלה אחרונה על טבלת מידות הנעליים (37:1, 38:3, 39:5, 40:1). מהו חציון מידות הנעליים של הילדים בקבוצה?&rlm;",
        "options": ["39", "38.5", "38", "39.5"],
        "correctAnswer": 0,
        "hint": "יש 10 ילדים, לכן החציון ייקבע על פי הילד ה-5 וה-6 ברשימה. מצאו מהן המידות שלהם בטבלה.",
        "solution_steps": [
            { "verbal_explanation": "בקבוצה יש עשרה ילדים. החציון יהיה הממוצע של המידות של הילד החמישי והילד השישי כאשר הם מסודרים לפי המידה.", "math_expression": "10 \\Rightarrow 5 , 6" },
            { "verbal_explanation": "הילד הראשון נועל מידה שלושים ושבע.", "math_expression": "1" },
            { "verbal_explanation": "שלושת הילדים הבאים נועלים שלושים ושמונה. הגענו לסך הכל ארבעה ילדים. עדיין לא הגענו לאמצע.", "math_expression": "1 + 3 = 4" },
            { "verbal_explanation": "חמשת הילדים הבאים נועלים שלושים ותשע. כלומר הילד החמישי, השישי, וכן הלאה, נמצאים כאן.", "math_expression": "4 + 5 = 9" },
            { "verbal_explanation": "לכן, גם הילד החמישי וגם השישי נועלים מידה שלושים ותשע. הממוצע של אותה מידה הוא המידה עצמה.", "math_expression": "39" }
        ],
        "final_answer": "39"
    }
];