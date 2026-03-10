const questionsDB = [
    // ==============================================================
    // --- תת נושא 1: מרחב מדגם והסתברות קלאסית (20 שאלות) ---
    // ==============================================================
    {
        "id": 1,
        "subTopic": "מרחב מדגם והסתברות קלאסית",
        "difficulty": "Low",
        "question_text": "מטילים קוביית משחק הוגנת בעלת 6 פאות. מהי ההסתברות לקבל את המספר <strong>4</strong>?<br><div style='text-align:center; margin:15px 0;'><svg width='100' height='100'><rect x='10' y='10' width='80' height='80' rx='10' fill='white' stroke='black' stroke-width='2'/><circle cx='30' cy='30' r='5' fill='black'/><circle cx='70' cy='30' r='5' fill='black'/><circle cx='30' cy='70' r='5' fill='black'/><circle cx='70' cy='70' r='5' fill='black'/></svg></div>",
        "hint": "הסתברות היא היחס בין מספר האפשרויות שמתאימות לנו לבין סך כל האפשרויות שיכולות לקרות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר מהו 'מרחב המדגם'. אלו הן כל התוצאות האפשריות שיכולות להתקבל בהטלת קובייה רגילה. בקובייה יש את המספרים 1, 2, 3, 4, 5, 6.", "math_expression": "מרחב מדגם = {1, 2, 3, 4, 5, 6}" },
            { "verbal_explanation": "שלב 2: נספור כמה אפשרויות יש בסך הכל במרחב המדגם.", "math_expression": "סך הכל אפשרויות = 6" },
            { "verbal_explanation": "שלב 3: נזהה את 'המאורע הרצוי'. אנו מעוניינים לקבל בדיוק את המספר 4. אפשרות זו מופיעה פעם אחת בלבד על פאות הקובייה.", "math_expression": "מספר אפשרויות רצויות = 1" },
            { "verbal_explanation": "שלב 4: נחשב את ההסתברות על ידי חלוקת מספר האפשרויות הרצויות בסך כל האפשרויות.", "math_expression": "הסתברות = 1 / 6" }
        ],
        "final_answer": "1 / 6",
        "options": ["1 / 2", "1 / 6", "1 / 4", "4 / 6"],
        "correctAnswer": 1
    },
    {
        "id": 2,
        "subTopic": "מרחב מדגם והסתברות קלאסית",
        "difficulty": "Low",
        "question_text": "בכד נמצאים 3 כדורים אדומים ו-7 כדורים כחולים. מוציאים כדור אחד באקראי. מהי ההסתברות שהכדור יהיה <strong>אדום</strong>?",
        "hint": "עליכם לחשב קודם כמה כדורים יש בסך הכל בכד. זה יהיה המספר למטה (המכנה).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את סך כל הכדורים שנמצאים בכד. זהו מרחב המדגם שלנו. נחבר את האדומים והכחולים.", "math_expression": "3 + 7 = 10" },
            { "verbal_explanation": "שלב 2: נזהה כמה אפשרויות רצויות יש לנו. השאלה מבקשת כדור אדום, וישנם 3 כאלה.", "math_expression": "אפשרויות רצויות = 3" },
            { "verbal_explanation": "שלב 3: נבנה את שבר ההסתברות: מספר הרצויים חלקי הסך הכל.", "math_expression": "הסתברות = 3 / 10" },
            { "verbal_explanation": "שלב 4: ניתן להציג את התוצאה גם כשבר עשרוני.", "math_expression": "0.3" }
        ],
        "final_answer": "3 / 10",
        "options": ["3 / 7", "7 / 10", "3 / 10", "0.5"],
        "correctAnswer": 2
    },
    {
        "id": 3,
        "subTopic": "מרחב מדגם והסתברות קלאסית",
        "difficulty": "Medium",
        "question_text": "מטילים קובייה. מהי ההסתברות לקבל <strong>מספר זוגי</strong>?",
        "hint": "רשמו את כל המספרים על הקובייה וסמנו מתוכם את אלו שמתחלקים ב-2 ללא שארית.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את כל התוצאות האפשריות על קובייה (סך הכל 6 אפשרויות).", "math_expression": "1, 2, 3, 4, 5, 6" },
            { "verbal_explanation": "שלב 2: נזהה מתוך הרשימה את המספרים הזוגיים.", "math_expression": "זוגיים = {2, 4, 6}" },
            { "verbal_explanation": "שלב 3: נספור כמה מספרים כאלו מצאנו. ישנם 3 מספרים זוגיים.", "math_expression": "כמות רצויה = 3" },
            { "verbal_explanation": "שלב 4: נחשב את ההסתברות ונצמצם את השבר.", "math_expression": "3 / 6 = 1 / 2" }
        ],
        "final_answer": "1 / 2 (או 0.5)",
        "options": ["1 / 3", "1 / 2", "1 / 6", "2 / 3"],
        "correctAnswer": 1
    },
    {
        "id": 4,
        "subTopic": "מרחב מדגם והסתברות קלאסית",
        "difficulty": "Medium",
        "question_text": "בכיתה יש 12 בנים ו-18 בנות. בוחרים תלמיד אחד באקראי. מהי ההסתברות שתיבחר <strong>בת</strong>?",
        "hint": "חשבו קודם את מספר כל תלמידי הכיתה על ידי חיבור הבנים והבנות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את סך כל התלמידים בכיתה כדי לקבוע את מרחב המדגם.", "math_expression": "12 + 18 = 30" },
            { "verbal_explanation": "שלב 2: נזהה את כמות ה'מקרים הרצויים' - במקרה זה, מספר הבנות.", "math_expression": "בנות = 18" },
            { "verbal_explanation": "שלב 3: נבנה את שבר ההסתברות.", "math_expression": "18 / 30" },
            { "verbal_explanation": "שלב 4: נצמצם את השבר על ידי חלוקת המונה והמכנה ב-6.", "math_expression": "3 / 5" }
        ],
        "final_answer": "3 / 5 (או 0.6)",
        "options": ["12 / 18", "3 / 5", "2 / 5", "1 / 2"],
        "correctAnswer": 1
    },
    {
        "id": 5,
        "subTopic": "מרחב מדגם והסתברות קלאסית",
        "difficulty": "High",
        "question_text": "מסובבים סביבון שעליו האותיות: <strong>נ, ג, ה, פ</strong>. מהי ההסתברות שהסביבון ייעצר על אות שהיא <strong>לא</strong> 'נ'?",
        "hint": "ספרו כמה אותיות יש בסך הכל, ואז ספרו כמה אותיות מתאימות לדרישה 'לא נ'.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את כל האפשרויות בסביבון (מרחב המדגם).", "math_expression": "{נ, ג, ה, פ}" },
            { "verbal_explanation": "שלב 2: נספור כמה אפשרויות יש בסך הכל.", "math_expression": "4" },
            { "verbal_explanation": "שלב 3: נזהה את האותיות שהן 'לא נ'. אלו הן האותיות ג, ה, פ.", "math_expression": "{ג, ה, פ}" },
            { "verbal_explanation": "שלב 4: נספור את הכמות שלהן. מצאנו 3 אותיות מתאימות.", "math_expression": "כמות רצויה = 3" },
            { "verbal_explanation": "שלב 5: נחשב את ההסתברות.", "math_expression": "3 / 4" }
        ],
        "final_answer": "3 / 4 (או 0.75)",
        "options": ["1 / 4", "1 / 2", "3 / 4", "1"],
        "correctAnswer": 2
    },
    {
        "id": 6,
        "subTopic": "מרחב מדגם והסתברות קלאסית",
        "difficulty": "High",
        "question_text": "מטילים שתי מטבעות בבת אחת. מהי ההסתברות ששני המטבעות יראו את אותו הצד (שניהם 'עץ' או שניהם 'פלי')?",
        "hint": "רשמו את כל השילובים האפשריים של הטלת שתי מטבעות (ישנם 4 שילובים).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את מרחב המדגם של כל השילובים האפשריים של שתי המטבעות.", "math_expression": "{(עץ, עץ), (עץ, פלי), (פלי, עץ), (פלי, פלי)}" },
            { "verbal_explanation": "שלב 2: נספור כמה שילובים יש בסך הכל.", "math_expression": "סך הכל = 4" },
            { "verbal_explanation": "שלב 3: נזהה את השילובים שבהם שני הצדדים זהים.", "math_expression": "{(עץ, עץ), (פלי, פלי)}" },
            { "verbal_explanation": "שלב 4: נספור את כמות השילובים הרצויים. ישנם 2 שילובים כאלה.", "math_expression": "כמות רצויה = 2" },
            { "verbal_explanation": "שלב 5: נחשב את ההסתברות ונצמצם את השבר.", "math_expression": "2 / 4 = 1 / 2" }
        ],
        "final_answer": "1 / 2",
        "options": ["1 / 4", "1 / 2", "3 / 4", "1"],
        "correctAnswer": 1
    },
    {
        "id": 7,
        "subTopic": "מרחב מדגם והסתברות קלאסית",
        "difficulty": "Medium",
        "question_text": "במגירה יש 5 גרביים שחורים, 3 לבנים ו-2 אפורים. מוציאים גרב אחד מבלי להסתכל. מהי ההסתברות שהוא <strong>לא לבן</strong>?",
        "hint": "חברו את מספר הגרביים שהם לא לבנים - כלומר השחורים והאפורים יחד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את סך כל הגרביים במגירה.", "math_expression": "5 + 3 + 2 = 10" },
            { "verbal_explanation": "שלב 2: נמצא כמה גרביים אינם לבנים. נחבר את השחורים (5) והאפורים (2).", "math_expression": "5 + 2 = 7" },
            { "verbal_explanation": "שלב 3: נבנה את ההסתברות.", "math_expression": "7 / 10" }
        ],
        "final_answer": "7 / 10 (או 0.7)",
        "options": ["3 / 10", "7 / 10", "1 / 2", "0.5"],
        "correctAnswer": 1
    },
    {
        "id": 8,
        "subTopic": "מרחב מדגם והסתברות קלאסית",
        "difficulty": "Low",
        "question_text": "מהי ההסתברות של <strong>מאורע ודאי</strong> (מאורע שחייב לקרות בוודאות)?",
        "hint": "חשבו על הסיכוי לקבל מספר בין 1 ל-6 בהטלת קובייה רגילה.",
        "solution_steps": [
            { "verbal_explanation": "במתמטיקה, הסתברות נמדדת על סולם שבין 0 ל-1.", "math_expression": "0 ≤ הסתברות ≤ 1" },
            { "verbal_explanation": "מאורע ודאי אומר שכל התוצאות האפשריות במרחב המדגם הן גם רצויות לנו.", "math_expression": "רצוי = סך הכל" },
            { "verbal_explanation": "כאשר מחלקים מספר בעצמו, התוצאה היא תמיד 1. לכן הסתברות של מאורע ודאי היא 1.", "math_expression": "1" }
        ],
        "final_answer": "1",
        "options": ["0", "0.5", "1", "100"],
        "correctAnswer": 2
    },
    {
        "id": 9,
        "subTopic": "מרחב מדגם והסתברות קלאסית",
        "difficulty": "Medium",
        "question_text": "בקופסה יש פתקים עם המספרים מ-1 עד 20. מוציאים פתק אחד. מהי ההסתברות שהמספר עליו <strong>מתחלק ב-5</strong>?",
        "hint": "רשמו את כל הכפולות של 5 שנמצאות בין 1 ל-20.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: סך כל הפתקים בקופסה הוא 20.", "math_expression": "סך הכל = 20" },
            { "verbal_explanation": "שלב 2: נזהה את המספרים שמתחלקים ב-5 בטווח שבין 1 ל-20.", "math_expression": "רצויים = {5, 10, 15, 20}" },
            { "verbal_explanation": "שלב 3: נספור כמה מספרים כאלו ישנם. מצאנו 4 פתקים מתאימים.", "math_expression": "כמות רצויה = 4" },
            { "verbal_explanation": "שלב 4: נחשב את ההסתברות ונצמצם את השבר.", "math_expression": "4 / 20 = 1 / 5" }
        ],
        "final_answer": "1 / 5 (או 0.2)",
        "options": ["1 / 4", "1 / 5", "1 / 10", "4 / 10"],
        "correctAnswer": 1
    },
    {
        "id": 10,
        "subTopic": "מרחב מדגם והסתברות קלאסית",
        "difficulty": "High",
        "question_text": "מטילים קובייה. מהי ההסתברות לקבל מספר שהוא <strong>ראשוני</strong>?",
        "hint": "מספר ראשוני הוא מספר שמתחלק רק ב-1 ובחיוב בעצמו. שימו לב: המספר 1 הוא לא ראשוני!",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את כל התוצאות האפשריות על הקובייה.", "math_expression": "1, 2, 3, 4, 5, 6" },
            { "verbal_explanation": "שלב 2: נזהה את המספרים הראשוניים מתוך הרשימה הזו.", "math_expression": "ראשוניים = {2, 3, 5}" },
            { "verbal_explanation": "שלב 3: נספור כמה מספרים ראשוניים יש. ישנם 3 כאלה.", "math_expression": "כמות רצויה = 3" },
            { "verbal_explanation": "שלב 4: נחשב את ההסתברות (3 מתוך 6) ונצמצם.", "math_expression": "3 / 6 = 1 / 2" }
        ],
        "final_answer": "1 / 2",
        "options": ["1 / 2", "1 / 3", "2 / 3", "1 / 6"],
        "correctAnswer": 0
    },
    {
        "id": 11,
        "subTopic": "מרחב מדגם והסתברות קלאסית",
        "difficulty": "Low",
        "question_text": "מהי ההסתברות של <strong>מאורע בלתי אפשרי</strong> (מאורע שאין סיכוי שיקרה)?",
        "hint": "חשבו על הסיכוי לקבל את המספר 10 בהטלת קובייה רגילה.",
        "solution_steps": [
            { "verbal_explanation": "מאורע בלתי אפשרי הוא מצב שבו אף אחת מהתוצאות במרחב המדגם אינה מתאימה לדרישה שלנו.", "math_expression": "רצוי = 0" },
            { "verbal_explanation": "כאשר מחלקים 0 בכל מספר של אפשרויות, התוצאה היא תמיד 0.", "math_expression": "0" }
        ],
        "final_answer": "0",
        "options": ["0", "1", "0.1", "אין תשובה"],
        "correctAnswer": 0
    },
    {
        "id": 12,
        "subTopic": "מרחב מדגם והסתברות קלאסית",
        "difficulty": "Medium",
        "question_text": "מטילים קובייה. מהי ההסתברות לקבל מספר <strong>גדול מ-4</strong>?",
        "hint": "שימו לב שהמילים 'גדול מ-4' אינן כוללות את המספר 4 עצמו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: סך כל התוצאות האפשריות על קובייה הוא 6.", "math_expression": "6" },
            { "verbal_explanation": "שלב 2: נזהה את המספרים שגדולים מ-4. אלו הם 5 ו-6.", "math_expression": "{5, 6}" },
            { "verbal_explanation": "שלב 3: נספור כמה אפשרויות כאלו יש. מצאנו 2 אפשרויות.", "math_expression": "כמות רצויה = 2" },
            { "verbal_explanation": "שלב 4: נחשב את ההסתברות ונצמצם.", "math_expression": "2 / 6 = 1 / 3" }
        ],
        "final_answer": "1 / 3",
        "options": ["1 / 2", "1 / 3", "2 / 3", "1 / 6"],
        "correctAnswer": 1
    },
    {
        "id": 13,
        "subTopic": "מרחב מדגם והסתברות קלאסית",
        "difficulty": "High",
        "question_text": "בשקית יש 4 סוכריות בטעם לימון, 2 בטעם תות ו-4 בטעם תפוז. מוציאים סוכרייה אחת. מהי ההסתברות שהיא בטעם <strong>לימון או תות</strong>?",
        "hint": "חברו את כמות סוכריות הלימון והתות יחד כדי למצוא את האפשרויות הרצויות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את סך כל הסוכריות בשקית.", "math_expression": "4 + 2 + 4 = 10" },
            { "verbal_explanation": "שלב 2: נזהה כמה סוכריות מתאימות לנו (לימון או תות). נחבר 4 לימון עם 2 תות.", "math_expression": "4 + 2 = 6" },
            { "verbal_explanation": "שלב 3: נבנה את שבר ההסתברות ונצמצם אותו ב-2.", "math_expression": "6 / 10 = 3 / 5" }
        ],
        "final_answer": "3 / 5 (או 0.6)",
        "options": ["6 / 10", "4 / 10", "3 / 5", "2 / 5"],
        "correctAnswer": 2
    },
    {
        "id": 14,
        "subTopic": "מרחב מדגם והסתברות קלאסית",
        "difficulty": "Medium",
        "question_text": "בוחרים באקראי יום בשבוע. מהי ההסתברות שהיום שנבחר מתחיל באות <strong>'ש'</strong>?",
        "hint": "רשמו את כל ימי השבוע וסמנו מתוכם את הימים המתאימים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את כל ימי השבוע כדי לקבוע את מרחב המדגם.", "math_expression": "ראשון, שני, שלישי, רביעי, חמישי, שישי, שבת" },
            { "verbal_explanation": "שלב 2: נספור כמה ימים יש בשבוע בסך הכל.", "math_expression": "סך הכל = 7" },
            { "verbal_explanation": "שלב 3: נזהה את הימים שמתחילים באות 'ש'. אלו הם יום שלישי, יום שישי ויום שבת.", "math_expression": "{שלישי, שישי, שבת}" },
            { "verbal_explanation": "שלב 4: נספור כמה ימים כאלו מצאנו. ישנם 3 ימים.", "math_expression": "כמות רצויה = 3" },
            { "verbal_explanation": "שלב 5: נחשב את ההסתברות.", "math_expression": "3 / 7" }
        ],
        "final_answer": "3 / 7",
        "options": ["1 / 7", "2 / 7", "3 / 7", "0.5"],
        "correctAnswer": 2
    },
    {
        "id": 15,
        "subTopic": "מרחב מדגם והסתברות קלאסית",
        "difficulty": "High",
        "question_text": "מטילים שתי קוביות. מהי ההסתברות שסכום המספרים שיתקבלו יהיה בדיוק <strong>3</strong>?",
        "hint": "חשבו על כל הזוגות של (קובייה 1, קובייה 2) שהסכום שלהם הוא 3.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את סך כל התוצאות האפשריות בהטלת שתי קוביות. לכל קובייה 6 פאות, לכן סך הכל יש 6 כפול 6 שילובים.", "math_expression": "6 * 6 = 36" },
            { "verbal_explanation": "שלב 2: נרשום את כל השילובים שנותנים סכום 3. השילובים הם (1,2) ו-(2,1).", "math_expression": "{(1,2), (2,1)}" },
            { "verbal_explanation": "שלב 3: נספור כמה שילובים כאלו יש. ישנם 2 שילובים רצויים.", "math_expression": "כמות רצויה = 2" },
            { "verbal_explanation": "שלב 4: נחשב את ההסתברות ונצמצם ב-2.", "math_expression": "2 / 36 = 1 / 18" }
        ],
        "final_answer": "1 / 18",
        "options": ["2 / 36", "1 / 18", "1 / 12", "3 / 36"],
        "correctAnswer": 1
    },
    {
        "id": 16,
        "subTopic": "מרחב מדגם והסתברות קלאסית",
        "difficulty": "Medium",
        "question_text": "בוחרים מספר שלם בין 1 ל-10 (כולל 1 ו-10). מהי ההסתברות שהמספר יהיה <strong>קטן מ-4</strong>?",
        "hint": "רשמו את המספרים ובדקו כמה מהם קטנים מ-4.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מרחב המדגם כולל 10 מספרים.", "math_expression": "סך הכל = 10" },
            { "verbal_explanation": "שלב 2: נזהה את המספרים שקטנים מ-4. אלו הם 1, 2 ו-3.", "math_expression": "{1, 2, 3}" },
            { "verbal_explanation": "שלב 3: נספור אותם. מצאנו 3 מספרים רצויים.", "math_expression": "כמות רצויה = 3" },
            { "verbal_explanation": "שלב 4: נחשב את ההסתברות.", "math_expression": "3 / 10" }
        ],
        "final_answer": "3 / 10 (או 0.3)",
        "options": ["4 / 10", "3 / 10", "3 / 7", "1 / 3"],
        "correctAnswer": 1
    },
    {
        "id": 17,
        "subTopic": "מרחב מדגם והסתברות קלאסית",
        "difficulty": "Low",
        "question_text": "מטילים מטבע. מהי ההסתברות לקבל <strong>'עץ'</strong>?<br><div style='text-align:center; margin:15px 0;'><svg width='80' height='80'><circle cx='40' cy='40' r='35' fill='#ffd700' stroke='#b8860b' stroke-width='2'/><text x='25' y='50' font-size='20' fill='#b8860b'>עץ</text></svg></div>",
        "hint": "כמה צדדים יש למטבע?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: למטבע יש 2 צדדים אפשריים בלבד - עץ או פלי.", "math_expression": "סך הכל אפשרויות = 2" },
            { "verbal_explanation": "שלב 2: המאורע הרצוי הוא 'עץ'. צד זה מופיע פעם אחת בלבד.", "math_expression": "כמות רצויה = 1" },
            { "verbal_explanation": "שלב 3: נחשב את ההסתברות.", "math_expression": "1 / 2" }
        ],
        "final_answer": "1 / 2 (או 0.5)",
        "options": ["1", "0", "1 / 2", "1 / 4"],
        "correctAnswer": 2
    },
    {
        "id": 18,
        "subTopic": "מרחב מדגם והסתברות קלאסית",
        "difficulty": "High",
        "question_text": "בחדר יש 4 אנשים. מהי ההסתברות שנבחר באקראי אדם שנולד ביום <strong>שבת</strong>?",
        "hint": "ההסתברות לאדם אחד להיוולד ביום שבת היא 1 מתוך 7.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבין שהסתברות זו אינה תלויה במספר האנשים בחדר אם אנו בוחרים רק אדם אחד באקראי.", "math_explanation": "בחירה בודדת" },
            { "verbal_explanation": "שלב 2: נזהה את מספר ימי השבוע (מרחב המדגם). ישנם 7 ימים.", "math_expression": "סך הכל = 7" },
            { "verbal_explanation": "שלב 3: המאורע הרצוי הוא לידה ביום שבת. זהו יום אחד מתוך ה-7.", "math_expression": "רצוי = 1" },
            { "verbal_explanation": "שלב 4: נחשב את ההסתברות.", "math_expression": "1 / 7" }
        ],
        "final_answer": "1 / 7",
        "options": ["1 / 4", "1 / 7", "4 / 7", "1"],
        "correctAnswer": 1
    },
    {
        "id": 19,
        "subTopic": "מרחב מדגם והסתברות קלאסית",
        "difficulty": "Medium",
        "question_text": "בקופסה יש 50 כדורים ממוספרים מ-1 עד 50. מהי ההסתברות להוציא כדור שעליו רשום המספר <strong>55</strong>?",
        "hint": "האם המספר 55 נמצא בתוך הקופסה?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את מרחב המדגם. ישנם כדורים מ-1 עד 50 בלבד.", "math_expression": "{1, 2, ..., 50}" },
            { "verbal_explanation": "שלב 2: נבדוק אם המספר 55 קיים בקופסה. התשובה היא לא.", "math_explanation": "לא קיים" },
            { "verbal_explanation": "שלב 3: מכיוון שאין אף אפשרות רצויה, זהו מאורע בלתי אפשרי.", "math_expression": "רצוי = 0" },
            { "verbal_explanation": "שלב 4: ההסתברות היא אפס.", "math_expression": "0" }
        ],
        "final_answer": "0",
        "options": ["1 / 50", "0", "1 / 55", "0.5"],
        "correctAnswer": 1
    },
    {
        "id": 20,
        "subTopic": "מרחב מדגם והסתברות קלאסית",
        "difficulty": "High",
        "question_text": "מטילים קובייה. מהי ההסתברות לקבל מספר שאינו מתחלק ב-3?",
        "hint": "רשמו את המספרים ומחקו את אלו שמתחלקים ב-3 (כמו 3 ו-6).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: רשימת כל האפשרויות על הקובייה.", "math_expression": "1, 2, 3, 4, 5, 6" },
            { "verbal_explanation": "שלב 2: נזהה את המספרים שמתחלקים ב-3: אלו הם 3 ו-6.", "math_expression": "{3, 6}" },
            { "verbal_explanation": "שלב 3: נמצא את המספרים שאינם מתחלקים ב-3 מתוך הרשימה.", "math_expression": "{1, 2, 4, 5}" },
            { "verbal_explanation": "שלב 4: נספור אותם. ישנן 4 אפשרויות רצויות.", "math_expression": "כמות רצויה = 4" },
            { "verbal_explanation": "שלב 5: נחשב את ההסתברות ונצמצם ב-2.", "math_expression": "4 / 6 = 2 / 3" }
        ],
        "final_answer": "2 / 3",
        "options": ["1 / 3", "2 / 3", "1 / 2", "4 / 6"],
        "correctAnswer": 1
    },

    // ==============================================================
    // --- תת נושא 2: מאורע משלים (20 שאלות) ---
    // ==============================================================
    {
        "id": 21,
        "subTopic": "מאורע משלים",
        "difficulty": "Low",
        "question_text": "ההסתברות שירד גשם מחר היא <strong>0.3</strong>. מהי ההסתברות ש<strong>לא</strong> ירד גשם מחר?",
        "hint": "סכום ההסתברויות של מאורע והמאורע המשלים שלו הוא תמיד 1.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבין את המושג 'מאורע משלים'. זהו המצב ההפוך למאורע שניתן לנו. סכומם חייב להיות 1 (שלם).", "math_expression": "P(קורה) + P(לא קורה) = 1" },
            { "verbal_explanation": "שלב 2: נחסיר את ההסתברות הנתונה (0.3) מהשלם (1).", "math_expression": "1 - 0.3 = 0.7" },
            { "verbal_explanation": "שלב 3: נרשום את התוצאה הסופית.", "math_expression": "0.7" }
        ],
        "final_answer": "0.7",
        "options": ["0.3", "0.7", "1", "0"],
        "correctAnswer": 1
    },
    {
        "id": 22,
        "subTopic": "מאורע משלים",
        "difficulty": "Low",
        "question_text": "מטילים קובייה. ההסתברות לקבל 6 היא 1/6. מהי ההסתברות <strong>לא</strong> לקבל 6?",
        "hint": "חשבו כמה מספרים על הקובייה הם לא המספר 6.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשתמש בנוסחת המאורע המשלים. נחסיר את ההסתברות לקבלת 6 מהשלם.", "math_expression": "1 - 1/6" },
            { "verbal_explanation": "שלב 2: נהפוך את ה-1 לשבר עם מכנה זהה כדי שנוכל לחסר.", "math_expression": "6/6 - 1/6 = 5/6" },
            { "verbal_explanation": "שלב 3: נרשום את התוצאה.", "math_expression": "5 / 6" }
        ],
        "final_answer": "5 / 6",
        "options": ["1 / 6", "5 / 6", "1", "0"],
        "correctAnswer": 1
    },
    {
        "id": 23,
        "subTopic": "מאורע משלים",
        "difficulty": "Medium",
        "question_text": "בכד יש כדורים בשני צבעים בלבד. ההסתברות להוציא כדור לבן היא <strong>0.85</strong>. מהי ההסתברות להוציא כדור מהצבע השני?",
        "hint": "הצבע השני הוא המשלים של הצבע הלבן.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מכיוון שיש רק שני צבעים, ההסתברות להוציא את הצבע השני היא המשלים ל-1 של הצבע הלבן.", "math_expression": "P(צבע שני) = 1 - P(לבן)" },
            { "verbal_explanation": "שלב 2: נציב את הערך הנתון.", "math_expression": "1 - 0.85 = 0.15" }
        ],
        "final_answer": "0.15",
        "options": ["0.85", "0.15", "0.25", "1"],
        "correctAnswer": 1
    },
    {
        "id": 24,
        "subTopic": "מאורע משלים",
        "difficulty": "Medium",
        "question_text": "ההסתברות שדני ינצח במשחק היא <strong>2 / 5</strong>. מהי ההסתברות שדני <strong>לא</strong> ינצח? (בהנחה שאין תיקו)",
        "hint": "חסרו את השבר 2/5 מהמספר 1.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נוסחת המשלים.", "math_expression": "1 - 2/5" },
            { "verbal_explanation": "שלב 2: נמיר את ה-1 לשבר עם מכנה 5.", "math_expression": "5/5 - 2/5 = 3/5" }
        ],
        "final_answer": "3 / 5",
        "options": ["2 / 5", "3 / 5", "1 / 5", "1 / 2"],
        "correctAnswer": 1
    },
    {
        "id": 25,
        "subTopic": "מאורע משלים",
        "difficulty": "High",
        "question_text": "זורקים חץ למטרה. ההסתברות לפגוע במרכז היא <strong>1/10</strong>, וההסתברות לפגוע בשאר המטרה היא <strong>7/10</strong>. מהי ההסתברות <strong>להחטיא</strong> לגמרי את המטרה?",
        "hint": "חברו את כל אפשרויות הפגיעה (מרכז ושאר המטרה) ואז חסרו מ-1.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את ההסתברות הכוללת לפגוע במטרה (בכל מקום עליה).", "math_expression": "1/10 + 7/10 = 8/10" },
            { "verbal_explanation": "שלב 2: המאורע המשלים ל'פגיעה במטרה' הוא 'החטאה'. נחסר את תוצאת הפגיעה מ-1.", "math_expression": "1 - 8/10 = 2/10" },
            { "verbal_explanation": "שלב 3: נצמצם את השבר הסופי.", "math_expression": "1 / 5" }
        ],
        "final_answer": "1 / 5 (או 0.2)",
        "options": ["2 / 10", "8 / 10", "1 / 5", "1 / 10"],
        "correctAnswer": 2
    },
    {
        "id": 26,
        "subTopic": "מאורע משלים",
        "difficulty": "Medium",
        "question_text": "מטילים קובייה. מהי ההסתברות <strong>לא</strong> לקבל מספר זוגי?",
        "hint": "המאורע המשלים ל'זוגי' הוא 'אי-זוגי'. תוכלו לחסר את הסתברות הזוגיים מ-1.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ההסתברות לקבל מספר זוגי על קובייה היא 3 מתוך 6.", "math_expression": "3 / 6 = 1 / 2" },
            { "verbal_explanation": "שלב 2: נמצא את המשלים על ידי חיסור מ-1.", "math_expression": "1 - 1/2 = 1/2" }
        ],
        "final_answer": "1 / 2",
        "options": ["1 / 6", "1 / 2", "2 / 3", "1 / 3"],
        "correctAnswer": 1
    },
    {
        "id": 27,
        "subTopic": "מאורע משלים",
        "difficulty": "Low",
        "question_text": "ההסתברות שמוצר יהיה תקין היא <strong>0.98</strong>. מהי ההסתברות שהמוצר יהיה <strong>פגום</strong>?",
        "hint": "המאורע 'פגום' הוא המאורע המשלים של 'תקין'.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את המשלים ל-1.", "math_expression": "1 - 0.98 = 0.02" }
        ],
        "final_answer": "0.02",
        "options": ["0.98", "0.2", "0.02", "0.01"],
        "correctAnswer": 2
    },
    {
        "id": 28,
        "subTopic": "מאורע משלים",
        "difficulty": "High",
        "question_text": "בוחרים מספר בין 1 ל-100. ההסתברות שהוא יהיה חד-ספרתי היא <strong>9/100</strong>. מהי ההסתברות שהוא יהיה <strong>לפחות דו-ספרתי</strong> (10 ומעלה)?",
        "hint": "הביטוי 'לפחות דו-ספרתי' הוא המשלים של 'חד-ספרתי'.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשתמש בנוסחת המשלים.", "math_expression": "1 - 9/100" },
            { "verbal_explanation": "שלב 2: נחשב את ההפרש.", "math_expression": "100/100 - 9/100 = 91/100" }
        ],
        "final_answer": "91 / 100",
        "options": ["9 / 100", "91 / 100", "90 / 100", "0.9"],
        "correctAnswer": 1
    },
    {
        "id": 29,
        "subTopic": "מאורע משלים",
        "difficulty": "Medium",
        "question_text": "בסיבוב סביבון, ההסתברות לקבל 'ג' היא 1/4. מהי ההסתברות לקבל אות שהיא <strong>שונה</strong> מ-'ג'?",
        "hint": "שונה מ-'ג' זהו המאורע המשלים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחסיר את 1/4 מהשלם.", "math_expression": "1 - 1/4 = 3/4" }
        ],
        "final_answer": "3 / 4",
        "options": ["1 / 4", "1 / 2", "3 / 4", "0"],
        "correctAnswer": 2
    },
    {
        "id": 30,
        "subTopic": "מאורע משלים",
        "difficulty": "High",
        "question_text": "ההסתברות שביום מסוים לא יהיו פקקי תנועה היא <strong>15%</strong>. מהי ההסתברות ש<strong>כן</strong> יהיו פקקים באותו יום?",
        "hint": "המירו את האחוזים למספר עשרוני (0.15) ואז חסרו מ-1.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבין ש-100% מייצגים את המאורע הודאי (1).", "math_expression": "100% = 1" },
            { "verbal_explanation": "שלב 2: נחסיר את אחוז המאורע הנתון מ-100%.", "math_expression": "100% - 15% = 85%" },
            { "verbal_explanation": "שלב 3: ניתן להציג את התוצאה כשבר עשרוני.", "math_expression": "0.85" }
        ],
        "final_answer": "85% (או 0.85)",
        "options": ["15%", "85%", "50%", "100%"],
        "correctAnswer": 1
    },
    {
        "id": 31,
        "subTopic": "מאורע משלים",
        "difficulty": "Low",
        "question_text": "אם ההסתברות למאורע מסוים היא 1, מהי ההסתברות למאורע המשלים שלו?",
        "hint": "אם משהו חייב לקרות, מה הסיכוי שהוא לא יקרה?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחסיר את ההסתברות 1 מהשלם 1.", "math_expression": "1 - 1 = 0" }
        ],
        "final_answer": "0",
        "options": ["1", "0.5", "0", "אין תשובה"],
        "correctAnswer": 2
    },
    {
        "id": 32,
        "subTopic": "מאורע משלים",
        "difficulty": "Medium",
        "question_text": "במבחן אמריקאי יש 4 תשובות אפשריות ורק אחת נכונה. אם תלמיד מנחש, מהי ההסתברות שהוא <strong>יטעה</strong>?",
        "hint": "חשבו קודם מהי ההסתברות שהוא יצדק.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ההסתברות לצדק בניחוש היא 1 מתוך 4.", "math_expression": "1 / 4" },
            { "verbal_explanation": "שלב 2: ההסתברות לטעות היא המאורע המשלים.", "math_expression": "1 - 1/4 = 3/4" }
        ],
        "final_answer": "3 / 4 (או 0.75)",
        "options": ["1 / 4", "1 / 2", "3 / 4", "1"],
        "correctAnswer": 2
    },
    {
        "id": 33,
        "subTopic": "מאורע משלים",
        "difficulty": "High",
        "question_text": "ההסתברות שקלע יפגע במטרה היא 0.9. הוא יורה <strong>פעמיים</strong>. מהי ההסתברות שהוא <strong>לא יפגע באף אחת</strong> מהפעמים?",
        "hint": "חשבו קודם את ההסתברות להחטאה בירייה בודדת (המשלים של 0.9).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את ההסתברות להחטאה בירייה אחת.", "math_expression": "1 - 0.9 = 0.1" },
            { "verbal_explanation": "שלב 2: כדי לא לפגוע באף אחת מהפעמים, עליו להחטיא בראשונה וגם בשנייה. נכפול את ההסתברויות.", "math_expression": "0.1 * 0.1 = 0.01" }
        ],
        "final_answer": "0.01",
        "options": ["0.1", "0.01", "0.18", "0.81"],
        "correctAnswer": 1
    },
    {
        "id": 34,
        "subTopic": "מאורע משלים",
        "difficulty": "Medium",
        "question_text": "בשקית יש 20 סוכריות. 12 מהן בטעם לימון והשאר בטעם תות. מהי ההסתברות להוציא סוכרייה בטעם <strong>תות</strong>?",
        "hint": "סוכריות התות הן המשלים של סוכריות הלימון.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את ההסתברות להוציא לימון.", "math_expression": "12 / 20" },
            { "verbal_explanation": "שלב 2: ההסתברות לתות היא המשלים ל-1.", "math_expression": "1 - 12/20 = 8/20" },
            { "verbal_explanation": "שלב 3: נצמצם את השבר ב-4.", "math_expression": "2 / 5" }
        ],
        "final_answer": "2 / 5 (או 0.4)",
        "options": ["12 / 20", "8 / 20", "2 / 5", "3 / 5"],
        "correctAnswer": 2
    },
    {
        "id": 35,
        "subTopic": "מאורע משלים",
        "difficulty": "Low",
        "question_text": "אם ההסתברות למאורע A היא P, מהי הנוסחה הכללית להסתברות של המאורע המשלים?",
        "hint": "זכרו שהשלם בהסתברות הוא תמיד 1.",
        "solution_steps": [
            { "verbal_explanation": "המאורע המשלים מוגדר ככל מה שלא נכלל במאורע המקורי. היחס ביניהם משלים תמיד לערך המקסימלי 1.", "math_expression": "1 - P" }
        ],
        "final_answer": "1 - P",
        "options": ["P - 1", "1 + P", "1 - P", "1 / P"],
        "correctAnswer": 2
    },
    {
        "id": 36,
        "subTopic": "מאורע משלים",
        "difficulty": "High",
        "question_text": "ההסתברות שביום מסוים תהיה הפסקת חשמל היא <strong>0.005</strong>. מהי ההסתברות שביום זה <strong>לא</strong> תהיה הפסקת חשמל?",
        "hint": "שימו לב למספר האפסים אחרי הנקודה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחסיר את 0.005 מהמספר 1.000.", "math_expression": "1 - 0.005 = 0.995" }
        ],
        "final_answer": "0.995",
        "options": ["0.95", "0.995", "0.05", "0.99"],
        "correctAnswer": 1
    },
    {
        "id": 37,
        "subTopic": "מאורע משלים",
        "difficulty": "Medium",
        "question_text": "זורקים קובייה. מהי ההסתברות <strong>לא</strong> לקבל מספר המתחלק ב-3?",
        "hint": "המספרים שמתחלקים ב-3 הם 3 ו-6. מצאו את הסתברותם ואז חסרו מ-1.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ההסתברות לקבל 3 או 6 היא 2 מתוך 6.", "math_expression": "2 / 6 = 1 / 3" },
            { "verbal_explanation": "שלב 2: המאורע המשלים הוא אי-קבלת מספרים אלו.", "math_expression": "1 - 1/3 = 2/3" }
        ],
        "final_answer": "2 / 3",
        "options": ["1 / 3", "2 / 3", "1 / 2", "1 / 6"],
        "correctAnswer": 1
    },
    {
        "id": 38,
        "subTopic": "מאורע משלים",
        "difficulty": "High",
        "question_text": "מטילים מטבע 3 פעמים. ההסתברות לקבל לפחות פעם אחת 'עץ' היא 7/8. מהי ההסתברות <strong>לא</strong> לקבל 'עץ' אף פעם?",
        "hint": "המאורע 'אף פעם לא עץ' הוא המשלים של 'לפחות פעם אחת עץ'.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המאורע המשלים של 'לפחות פעם אחת' הוא 'אף פעם לא'. נחסיר מ-1.", "math_expression": "1 - 7/8 = 1/8" }
        ],
        "final_answer": "1 / 8",
        "options": ["1 / 2", "1 / 8", "3 / 8", "0"],
        "correctAnswer": 1
    },
    {
        "id": 39,
        "subTopic": "מאורע משלים",
        "difficulty": "Low",
        "question_text": "ההסתברות שקבוצה תנצח היא 0.6 וההסתברות שתפסיד היא 0.3. מהי ההסתברות ל<strong>תיקו</strong>?",
        "hint": "חברו את הניצחון וההפסד וחסרו מ-1.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את ההסתברות למשחק שאינו תיקו.", "math_expression": "0.6 + 0.3 = 0.9" },
            { "verbal_explanation": "שלב 2: התיקו הוא המאורע המשלים.", "math_expression": "1 - 0.9 = 0.1" }
        ],
        "final_answer": "0.1",
        "options": ["0.1", "0.9", "0.5", "0.4"],
        "correctAnswer": 0
    },
    {
        "id": 40,
        "subTopic": "מאורע משלים",
        "difficulty": "High",
        "question_text": "במפעל 4% מהמוצרים פגומים. אם בוחרים מוצר, מהי ההסתברות שהוא <strong>תקין</strong>?",
        "hint": "4% הם 4 מתוך 100.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את המשלים של 4% מתוך 100%.", "math_expression": "100% - 4% = 96%" },
            { "verbal_explanation": "שלב 2: נמיר למספר עשרוני.", "math_expression": "0.96" }
        ],
        "final_answer": "0.96",
        "options": ["0.04", "0.96", "0.4", "1"],
        "correctAnswer": 1
    },,
    // ==============================================================
    // --- תת נושא 3: ממוצע, חציון ושכיח (20 שאלות) ---
    // ==============================================================
    {
        "id": 41,
        "subTopic": "ממוצע, חציון ושכיח",
        "difficulty": "Low",
        "question_text": "נתונים הציונים הבאים של תלמיד: 80, 90, 70. מהו ה<strong>ממוצע</strong> שלו?",
        "hint": "ממוצע מחשבים על ידי חיבור כל המספרים וחלוקת הסכום במספר האיברים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחבר את כל הציונים שקיבל התלמיד כדי למצוא את סכום הנקודות הכולל.", "math_expression": "80 + 90 + 70 = 240" },
            { "verbal_explanation": "שלב 2: נספור כמה ציונים יש לנו בסך הכל. במקרה זה, ישנם 3 ציונים.", "math_expression": "כמות = 3" },
            { "verbal_explanation": "שלב 3: נחלק את סכום הציונים (240) במספר הציונים (3) כדי לקבל את הממוצע.", "math_expression": "240 / 3 = 80" }
        ],
        "final_answer": "80",
        "options": ["75", "80", "85", "90"],
        "correctAnswer": 1
    },
    {
        "id": 42,
        "subTopic": "ממוצע, חציון ושכיח",
        "difficulty": "Low",
        "question_text": "מהו ה<strong>חציון</strong> של סדרת המספרים הבאה: 4, 10, 2, 8, 6?",
        "hint": "הצעד הראשון והחשוב ביותר במציאת חציון הוא לסדר את המספרים מהקטן אל הגדול.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נסדר את רשימת המספרים בסדר עולה מהקטן ביותר לגדול ביותר.", "math_expression": "2, 4, 6, 8, 10" },
            { "verbal_explanation": "שלב 2: נחפש את המספר שנמצא בדיוק באמצע הרשימה המסודרת. מכיוון שיש 5 מספרים, המספר השלישי הוא האמצעי.", "math_expression": "חציון = 6" }
        ],
        "final_answer": "6",
        "options": ["4", "6", "8", "5"],
        "correctAnswer": 1
    },
    {
        "id": 43,
        "subTopic": "ממוצע, חציון ושכיח",
        "difficulty": "Low",
        "question_text": "נתונה קבוצת מספרים: 5, 8, 5, 2, 5, 9, 2. מהו ה<strong>שכיח</strong>?",
        "hint": "שכיח הוא המספר שמופיע הכי הרבה פעמים בקבוצה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נספור כמה פעמים מופיע כל מספר בקבוצה.", "math_expression": "2 מופיע פעמיים, 8 מופיע פעם אחת, 9 מופיע פעם אחת, 5 מופיע 3 פעמים." },
            { "verbal_explanation": "שלב 2: נזהה את המספר בעל תדירות ההופעה הגבוהה ביותר. המספר 5 מופיע הכי הרבה פעמים.", "math_expression": "שכיח = 5" }
        ],
        "final_answer": "5",
        "options": ["2", "5", "8", "9"],
        "correctAnswer": 1
    },
    {
        "id": 44,
        "subTopic": "ממוצע, חציון ושכיח",
        "difficulty": "Medium",
        "question_text": "ממוצע הגילאים של 4 חברים הוא 15. מהו <strong>סכום</strong> הגילאים של כולם?",
        "hint": "אם נכפול את הממוצע במספר האנשים, נקבל את הסכום הכולל.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבין את הגדרת הממוצע. ממוצע שווה לסכום חלקי כמות.", "math_expression": "ממוצע = סכום / כמות" },
            { "verbal_explanation": "שלב 2: כדי למצוא את הסכום, נבצע את הפעולה ההפוכה - נכפול את הממוצע (15) במספר החברים (4).", "math_expression": "15 * 4 = 60" }
        ],
        "final_answer": "60",
        "options": ["15", "30", "45", "60"],
        "correctAnswer": 3
    },
    {
        "id": 45,
        "subTopic": "ממוצע, חציון ושכיח",
        "difficulty": "Medium",
        "question_text": "מהו ה<strong>חציון</strong> של הציונים: 70, 80, 90, 100?",
        "hint": "כשיש מספר זוגי של איברים (כאן יש 4), החציון הוא הממוצע של שני המספרים האמצעיים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבדוק אם הציונים מסודרים. הם כבר מסודרים בסדר עולה.", "math_expression": "70, 80, 90, 100" },
            { "verbal_explanation": "שלב 2: נזהה את שני המספרים שנמצאים במרכז הרשימה. אלו הם 80 ו-90.", "math_expression": "מרכז = 80, 90" },
            { "verbal_explanation": "שלב 3: נחשב את הממוצע של שני מספרי המרכז: נחבר אותם ונחלק ב-2.", "math_expression": "(80 + 90) / 2 = 170 / 2 = 85" }
        ],
        "final_answer": "85",
        "options": ["80", "90", "85", "100"],
        "correctAnswer": 2
    },
    {
        "id": 46,
        "subTopic": "ממוצע, חציון ושכיח",
        "difficulty": "High",
        "question_text": "תלמיד קיבל בשלושה מבחנים את הציונים 70, 80, 90. איזה ציון עליו לקבל במבחן <strong>הרביעי</strong> כדי שהממוצע שלו יהיה בדיוק <strong>85</strong>?",
        "hint": "חשבו קודם מה צריך להיות סכום הנקודות הכולל של 4 מבחנים כדי להגיע לממוצע 85.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא מהו סכום הציונים הדרוש ל-4 מבחנים עם ממוצע 85. נכפול 85 ב-4.", "math_expression": "85 * 4 = 340" },
            { "verbal_explanation": "שלב 2: נחשב את סכום שלושת הציונים שכבר יש לתלמיד.", "math_expression": "70 + 80 + 90 = 240" },
            { "verbal_explanation": "שלב 3: נמצא את ההפרש בין הסכום הדרוש לסכום הקיים. זה יהיה הציון במבחן הרביעי.", "math_expression": "340 - 240 = 100" }
        ],
        "final_answer": "100",
        "options": ["90", "95", "100", "85"],
        "correctAnswer": 2
    },
    {
        "id": 47,
        "subTopic": "ממוצע, חציון ושכיח",
        "difficulty": "High",
        "question_text": "בקבוצת נתונים הממוצע הוא 10 והשכיח הוא 12. אם נוסיף לכל מספר בקבוצה 5, מה יהיו הממוצע והשכיח החדשים?",
        "hint": "כשמוסיפים מספר קבוע לכל האיברים, כל מדדי המרכז גדלים באותו מספר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבין את השפעת ההוספה על הממוצע. אם כל מספר גדל ב-5, גם הממוצע של כולם יגדל ב-5.", "math_expression": "10 + 5 = 15" },
            { "verbal_explanation": "שלב 2: נבין את השפעת ההוספה על השכיח. המספר שהיה הכי נפוץ (12) גדל גם הוא ב-5 והוא יישאר הכי נפוץ.", "math_expression": "12 + 5 = 17" }
        ],
        "final_answer": "ממוצע 15, שכיח 17",
        "options": ["ממוצע 10, שכיח 12", "ממוצע 15, שכיח 17", "ממוצע 15, שכיח 12", "ממוצע 50, שכיח 12"],
        "correctAnswer": 1
    },
    {
        "id": 48,
        "subTopic": "ממוצע, חציון ושכיח",
        "difficulty": "Medium",
        "question_text": "במשפחה 5 ילדים. הגיל הממוצע הוא 10. אם נולד תינוק חדש (גיל 0), מה יהיה הממוצע החדש של <strong>6</strong> הילדים?",
        "hint": "חשבו את סכום הגילאים הנוכחי והוסיפו לו 0, ואז חלקו ב-6.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את סכום הגילאים של 5 הילדים. נכפול ממוצע (10) בכמות (5).", "math_expression": "10 * 5 = 50" },
            { "verbal_explanation": "שלב 2: נוסיף את גיל התינוק (0) לסכום הקיים. הסכום נשאר 50.", "math_expression": "50 + 0 = 50" },
            { "verbal_explanation": "שלב 3: נחלק את הסכום החדש במספר הילדים החדש (6).", "math_expression": "50 / 6 = 8.33" }
        ],
        "final_answer": "8.33",
        "options": ["10", "8.33", "5", "12"],
        "correctAnswer": 1
    },
    {
        "id": 49,
        "subTopic": "ממוצע, חציון ושכיח",
        "difficulty": "High",
        "question_text": "נתונה סדרה של 7 מספרים עוקבים. ידוע שהחציון הוא 10. מהו הממוצע של הסדרה?",
        "hint": "בסדרה של מספרים עוקבים (או סדרה חשבונית), הממוצע תמיד שווה לחציון.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את הסדרה כך ש-10 הוא המספר האמצעי (החציון) מתוך 7 מספרים.", "math_expression": "7, 8, 9, 10, 11, 12, 13" },
            { "verbal_explanation": "שלב 2: בסדרה עם קפיצות שוות, הממוצע נמצא בדיוק במרכז הפיזי של הסדרה.", "math_expression": "ממוצע = חציון = 10" }
        ],
        "final_answer": "10",
        "options": ["7", "10", "13", "11"],
        "correctAnswer": 1
    },
    {
        "id": 50,
        "subTopic": "ממוצע, חציון ושכיח",
        "difficulty": "Medium",
        "question_text": "האם ייתכן ששכיח של קבוצה יהיה גדול מהממוצע שלה?",
        "hint": "חשבו על קבוצה שבה רוב המספרים גדולים מאוד ויש מספר אחד קטן מאוד 'שמושך' את הממוצע למטה.",
        "solution_steps": [
            { "verbal_explanation": "נדגים עם קבוצה: {1, 10, 10, 10}. כאן השכיח הוא 10.", "math_expression": "שכיח = 10" },
            { "verbal_explanation": "נחשב ממוצע: (1+10+10+10) חלקי 4.", "math_expression": "31 / 4 = 7.75" },
            { "verbal_explanation": "נראה כי 10 (השכיח) אכן גדול מ-7.75 (הממוצע).", "math_expression": "10 > 7.75" }
        ],
        "final_answer": "כן, זה בהחלט ייתכן.",
        "options": ["כן", "לא", "רק אם המספרים שליליים", "רק אם יש 0"],
        "correctAnswer": 0
    },
    {
        "id": 51,
        "subTopic": "ממוצע, חציון ושכיח",
        "difficulty": "Low",
        "question_text": "נתונה סדרה: 2, 2, 3, 3, 4, 4. מהו ה<strong>שכיח</strong>?",
        "hint": "מה קורה כאשר כמה מספרים מופיעים באותה כמות מקסימלית של פעמים?",
        "solution_steps": [
            { "verbal_explanation": "בסדרה זו, כל אחד מהמספרים (2, 3, 4) מופיע בדיוק פעמיים.", "math_expression": "תדירות שווה" },
            { "verbal_explanation": "כאשר לכל המספרים יש את אותה שכיחות, אנו אומרים שאין שכיח בודד או שכל הקבוצה היא שכיחה.", "math_expression": "אין שכיח יחיד" }
        ],
        "final_answer": "אין שכיח יחיד (או כולם שכיחים).",
        "options": ["2", "3", "4", "אין שכיח יחיד"],
        "correctAnswer": 3
    },
    {
        "id": 52,
        "subTopic": "ממוצע, חציון ושכיח",
        "difficulty": "High",
        "question_text": "ממוצע של 5 מספרים הוא 20. אם מוסיפים לקבוצה את המספר 20, מה יקרה לממוצע?",
        "hint": "חשבו האם הוספת מספר שזהה לממוצע 'מושכת' אותו למעלה או למטה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: סכום 5 המספרים המקורי הוא 100.", "math_expression": "5 * 20 = 100" },
            { "verbal_explanation": "שלב 2: נוסיף את המספר 20 לסכום. הסכום החדש הוא 120.", "math_expression": "100 + 20 = 120" },
            { "verbal_explanation": "שלב 3: נחלק את הסכום החדש בכמות החדשה (6 מספרים).", "math_expression": "120 / 6 = 20" },
            { "verbal_explanation": "שלב 4: נסיק שהממוצע לא השתנה.", "math_expression": "20 = 20" }
        ],
        "final_answer": "הממוצע יישאר ללא שינוי.",
        "options": ["יגדל", "יקטן", "יישאר ללא שינוי.", "יהפוך ל-0"],
        "correctAnswer": 2
    },
    {
        "id": 53,
        "subTopic": "ממוצע, חציון ושכיח",
        "difficulty": "Medium",
        "question_text": "מהו ה<strong>חציון</strong> של הציונים: 100, 40, 80, 60, 90?",
        "hint": "אל תשכחו לסדר מהקטן לגדול לפני שבוחרים את האמצע.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: סידור בסדר עולה.", "math_expression": "40, 60, 80, 90, 100" },
            { "verbal_explanation": "שלב 2: בחירת המספר האמצעי ברשימה של 5 איברים (המספר השלישי).", "math_expression": "80" }
        ],
        "final_answer": "80",
        "options": ["80", "60", "90", "40"],
        "correctAnswer": 0
    },
    {
        "id": 54,
        "subTopic": "ממוצע, חציון ושכיח",
        "difficulty": "Low",
        "question_text": "ממוצע הטמפרטורות בשלושה ימים היה 20 מעלות. ביום הרביעי היה 40 מעלות. מהו הממוצע בארבעת הימים?",
        "hint": "מצאו את סכום המעלות הכולל וחלקו ב-4.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: סכום המעלות בשלושת הימים הראשונים.", "math_expression": "3 * 20 = 60" },
            { "verbal_explanation": "שלב 2: נוסיף את היום הרביעי.", "math_expression": "60 + 40 = 100" },
            { "verbal_explanation": "שלב 3: נחלק ב-4 ימים.", "math_expression": "100 / 4 = 25" }
        ],
        "final_answer": "25",
        "options": ["20", "25", "30", "22"],
        "correctAnswer": 1
    },
    {
        "id": 55,
        "subTopic": "ממוצע, חציון ושכיח",
        "difficulty": "High",
        "question_text": "נתונים 3 מספרים שונים שהממוצע שלהם הוא 10 והחציון שלהם הוא 10. מה יכול להיות המספר הקטן ביותר?",
        "hint": "אם החציון הוא 10, המספר האמצעי הוא 10. קראו למספרים x, 10, y.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: סכום שלושת המספרים חייב להיות 30.", "math_expression": "x + 10 + y = 30" },
            { "verbal_explanation": "שלב 2: לכן x + y = 20.", "math_expression": "x + y = 20" },
            { "verbal_explanation": "שלב 3: מכיוון ש-x חייב להיות קטן מ-10 (כי 10 חציון ו-x קטן ממנו), x יכול להיות כל מספר קטן מ-10 (למשל 9 ואז y יהיה 11).", "math_expression": "x < 10" }
        ],
        "final_answer": "כל מספר שקטן מ-10.",
        "options": ["10", "כל מספר קטן מ-10.", "רק 0", "אין פתרון"],
        "correctAnswer": 1
    },
    {
        "id": 56,
        "subTopic": "ממוצע, חציון ושכיח",
        "difficulty": "Medium",
        "question_text": "מהו ה<strong>ממוצע</strong> של המספרים: 0, 0, 0, 20?",
        "hint": "אל תתעלמו מהאפסים! הם נספרים כאיברים לכל דבר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחבר את כל המספרים.", "math_expression": "0 + 0 + 0 + 20 = 20" },
            { "verbal_explanation": "שלב 2: נספור את כמות האיברים. ישנם 4 מספרים.", "math_expression": "כמות = 4" },
            { "verbal_explanation": "שלב 3: נחלק סכום בכמות.", "math_expression": "20 / 4 = 5" }
        ],
        "final_answer": "5",
        "options": ["20", "0", "5", "10"],
        "correctAnswer": 2
    },
    {
        "id": 57,
        "subTopic": "ממוצע, חציון ושכיח",
        "difficulty": "Low",
        "question_text": "איזה מדד מרכז מושפע הכי הרבה ממספר קיצוני (חריג)?",
        "hint": "חשבו על ממוצע המשכורות בחדר אם פתאום נכנס אליו מיליארדר.",
        "solution_steps": [
            { "verbal_explanation": "הממוצע משתמש בערך המדויק של כל מספר, לכן מספר גדול מאוד או קטן מאוד 'גורר' את הממוצע אליו בצורה חזקה.", "math_expression": "ממוצע" },
            { "verbal_explanation": "לעומת זאת, החציון תלוי רק במיקום ולא בערך, ולכן הוא עמיד יותר.", "math_explanation": "חציון עמיד" }
        ],
        "final_answer": "הממוצע.",
        "options": ["הממוצע.", "החציון", "השכיח", "אף אחד"],
        "correctAnswer": 0
    },
    {
        "id": 58,
        "subTopic": "ממוצע, חציון ושכיח",
        "difficulty": "High",
        "question_text": "ממוצע הציונים של 10 תלמידים הוא 80. ממוצע הציונים של 20 תלמידים אחרים הוא 90. מהו הממוצע של כל <strong>30</strong> התלמידים?",
        "hint": "זהו 'ממוצע משוקלל'. מצאו את סך כל הנקודות של כולם יחד וחלקו ב-30.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את סך הנקודות של הקבוצה הראשונה.", "math_expression": "10 * 80 = 800" },
            { "verbal_explanation": "שלב 2: נמצא את סך הנקודות של הקבוצה השנייה.", "math_expression": "20 * 90 = 1800" },
            { "verbal_explanation": "שלב 3: נחבר את כל הנקודות.", "math_expression": "800 + 1800 = 2600" },
            { "verbal_explanation": "שלב 4: נחלק בסך כל התלמידים (30).", "math_expression": "2600 / 30 = 86.66" }
        ],
        "final_answer": "86.66",
        "options": ["85", "86.66", "83.33", "80"],
        "correctAnswer": 1
    },
    {
        "id": 59,
        "subTopic": "ממוצע, חציון ושכיח",
        "difficulty": "Medium",
        "question_text": "האם ממוצע של קבוצת מספרים חייב להיות אחד מהמספרים בקבוצה?",
        "hint": "חשבו על הממוצע של 1 ו-2.",
        "solution_steps": [
            { "verbal_explanation": "ניקח לדוגמה את המספרים 1 ו-2. הממוצע שלהם הוא 1.5.", "math_expression": "1.5" },
            { "verbal_explanation": "המספר 1.5 אינו מופיע בקבוצה המקורית. לכן, הממוצע הוא ערך חישובי ולא חייב להיות חלק מהנתונים.", "math_explanation": "ערך תיאורטי" }
        ],
        "final_answer": "לא, הממוצע לא חייב להיות אחד מהנתונים.",
        "options": ["כן", "לא.", "רק אם המספרים זוגיים", "רק אם יש הרבה מספרים"],
        "correctAnswer": 1
    },
    {
        "id": 60,
        "subTopic": "ממוצע, חציון ושכיח",
        "difficulty": "High",
        "question_text": "בסדרה של 5 מספרים, החציון הוא 15 והממוצע הוא 20. מהו סכום שני המספרים הגדולים ביותר, אם ידוע ששלושת המספרים הקטנים הם 10, 12, 15?",
        "hint": "השתמשו במידע על הממוצע כדי למצוא את הסכום הכולל.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: סכום כל 5 המספרים הוא 100 (ממוצע 20 כפול 5).", "math_expression": "100" },
            { "verbal_explanation": "שלב 2: נחסיר מהסכום הכולל את שלושת המספרים שאנו מכירים.", "math_expression": "100 - (10 + 12 + 15) = 100 - 37 = 63" },
            { "verbal_explanation": "שלב 3: ההפרש שקיבלנו (63) הוא סכום שני המספרים הגדולים שנותרו.", "math_expression": "63" }
        ],
        "final_answer": "63",
        "options": ["63", "40", "50", "75"],
        "correctAnswer": 0
    },

    // ==============================================================
    // --- תת נושא 4: דיאגרמות שכיחות (20 שאלות) ---
    // ==============================================================
    {
        "id": 61,
        "subTopic": "דיאגרמות שכיחות",
        "difficulty": "Low",
        "question_text": "נתונה טבלת שכיחות של ציונים בכיתה: הציון 70 מופיע 5 פעמים, הציון 80 מופיע 10 פעמים. כמה תלמידים נבחנו בסך הכל?",
        "hint": "סכום השכיחויות בטבלה שווה למספר המקרים הכולל.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את השכיחות של כל ציון. שכיחות היא פשוט 'כמה פעמים' הציון מופיע.", "math_expression": "5 תלמידים קיבלו 70, 10 תלמידים קיבלו 80." },
            { "verbal_explanation": "שלב 2: נחבר את כל השכיחויות יחד כדי למצוא את מספר התלמידים הכולל.", "math_expression": "5 + 10 = 15" }
        ],
        "final_answer": "15",
        "options": ["5", "10", "15", "150"],
        "correctAnswer": 2
    },
    {
        "id": 62,
        "subTopic": "דיאגרמות שכיחות",
        "difficulty": "Medium",
        "question_text": "בדיאגרמת עמודות, מה מייצג ה<strong>גובה</strong> של כל עמודה?<br>",
        "hint": "הסתכלו על הציר האנכי (ציר ה-y) של הדיאגרמה.",
        "solution_steps": [
            { "verbal_explanation": "בדיאגרמת שכיחויות, ככל שהעמודה גבוהה יותר, זה אומר שהערך שהיא מייצגת מופיע יותר פעמים בקבוצה.", "math_expression": "גובה = שכיחות" }
        ],
        "final_answer": "את השכיחות (כמות המופעים) של הנתון.",
        "options": ["את הערך עצמו", "את השכיחות.", "את הממוצע", "את אחוז ההצלחה"],
        "correctAnswer": 1
    },
    {
        "id": 63,
        "subTopic": "דיאגרמות שכיחות",
        "difficulty": "Medium",
        "question_text": "בכיתה של 20 תלמידים, 5 קיבלו ציון 100. מהי ה<strong>שכיחות היחסית</strong> של הציון 100?",
        "hint": "שכיחות יחסית היא חלקו של הנתון מתוך הסך הכל (ניתן להציג כשבר או כאחוז).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את השכיחות של הציון 100.", "math_expression": "5" },
            { "verbal_explanation": "שלב 2: נחלק אותה בסך כל התלמידים בכיתה.", "math_expression": "5 / 20" },
            { "verbal_explanation": "שלב 3: נצמצם את השבר או נמיר לאחוזים.", "math_expression": "1 / 4 = 0.25 = 25%" }
        ],
        "final_answer": "1 / 4 (או 25%)",
        "options": ["5 / 100", "1 / 4", "1 / 5", "0.5"],
        "correctAnswer": 1
    },
    {
        "id": 64,
        "subTopic": "דיאגרמות שכיחות",
        "difficulty": "High",
        "question_text": "נתונה טבלת שכיחות: ציון 60 (שכיחות 2), ציון 80 (שכיחות 3). מהו הציון ה<strong>ממוצע</strong>?",
        "hint": "זהו ממוצע משוקלל. הכפילו כל ציון בשכיחות שלו, חברו את התוצאות וחלקו במספר התלמידים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא כמה נקודות צברו התלמידים שקיבלו 60. 2 תלמידים כפול 60.", "math_expression": "2 * 60 = 120" },
            { "verbal_explanation": "שלב 2: נמצא כמה נקודות צברו התלמידים שקיבלו 80. 3 תלמידים כפול 80.", "math_expression": "3 * 80 = 240" },
            { "verbal_explanation": "שלב 3: נחבר את סך הנקודות: 120 ועוד 240.", "math_expression": "360" },
            { "verbal_explanation": "שלב 4: נחלק בסך כל התלמידים (2 ועוד 3 הם 5).", "math_expression": "360 / 5 = 72" }
        ],
        "final_answer": "72",
        "options": ["70", "72", "75", "80"],
        "correctAnswer": 1
    },
    {
        "id": 65,
        "subTopic": "דיאגרמות שכיחות",
        "difficulty": "Medium",
        "question_text": "בדיאגרמת עוגה (דיאגרמה עיגולית), גזרה של 90 מעלות מייצגת איזו שכיחות יחסית?",
        "hint": "עיגול שלם הוא 360 מעלות. איזה חלק מהווה 90 מתוך 360?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחלק את זווית הגזרה (90) בזווית של עיגול שלם (360).", "math_expression": "90 / 360" },
            { "verbal_explanation": "שלב 2: נצמצם את השבר. 90 נכנס ב-360 בדיוק 4 פעמים.", "math_expression": "1 / 4" },
            { "verbal_explanation": "שלב 3: נתרגם לאחוזים. רבע מתוך 100 הוא 25.", "math_expression": "25%" }
        ],
        "final_answer": "25%",
        "options": ["90%", "50%", "25%", "10%"],
        "correctAnswer": 2
    },
    {
        "id": 66,
        "subTopic": "דיאגרמות שכיחות",
        "difficulty": "High",
        "question_text": "נתונה טבלה שבה חסרה שכיחות אחת: ציון 70 (שכיחות 4), ציון 90 (שכיחות x). ידוע שהממוצע הוא 82. מהו x?",
        "hint": "בנו משוואה שבה הממוצע (82) שווה לסכום הציונים חלקי (4+x).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את משוואת הממוצע המשוקלל.", "math_expression": "(4 * 70 + x * 90) / (4 + x) = 82" },
            { "verbal_explanation": "שלב 2: נפשט את המונה ונכפול במכנה.", "math_expression": "280 + 90x = 82(4 + x)" },
            { "verbal_explanation": "שלב 3: נפתח סוגריים.", "math_expression": "280 + 90x = 328 + 82x" },
            { "verbal_explanation": "שלב 4: נעביר אגפים ונפתור עבור x.", "math_expression": "8x = 48 -> x = 6" }
        ],
        "final_answer": "6",
        "options": ["4", "5", "6", "10"],
        "correctAnswer": 2
    },
    {
        "id": 67,
        "subTopic": "דיאגרמות שכיחות",
        "difficulty": "Medium",
        "question_text": "איך מזהים את ה<strong>שכיח</strong> מתוך דיאגרמת עמודות?",
        "hint": "חפשו את העמודה הבולטת ביותר.",
        "solution_steps": [
            { "verbal_explanation": "השכיח הוא הערך שמופיע הכי הרבה פעמים. בדיאגרמת עמודות, זהו הערך שמעליו נמצאת העמודה הגבוהה ביותר.", "math_expression": "העמודה הגבוהה ביותר" }
        ],
        "final_answer": "הערך שמעליו העמודה הגבוהה ביותר.",
        "options": ["העמודה הראשונה", "העמודה האחרונה", "העמודה הגבוהה ביותר.", "העמודה האמצעית"],
        "correctAnswer": 2
    },
    {
        "id": 68,
        "subTopic": "דיאגרמות שכיחות",
        "difficulty": "Low",
        "question_text": "בטבלת שכיחות מופיעים הציונים 50, 60, 70, 80. השכיחויות הן 2, 4, 8, 3 בהתאמה. איזה ציון הוא ה<strong>שכיח</strong>?",
        "hint": "חפשו בטבלה את השכיחות (המספר בשורה השנייה) הכי גדולה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נסתכל על מספרי השכיחויות: 2, 4, 8, 3.", "math_expression": "8 היא השכיחות הגבוהה ביותר" },
            { "verbal_explanation": "שלב 2: נזהה איזה ציון שייך לשכיחות זו. הציון 70 מופיע 8 פעמים.", "math_expression": "70" }
        ],
        "final_answer": "70",
        "options": ["8", "70", "80", "60"],
        "correctAnswer": 1
    },
    {
        "id": 69,
        "subTopic": "דיאגרמות שכיחות",
        "difficulty": "High",
        "question_text": "בדיאגרמת עוגה, חצי מהעיגול צבוע בכחול, רבע בצהוב והשאר באדום. מהי השכיחות היחסית של הצבע ה<strong>אדום</strong>?",
        "hint": "השלם הוא תמיד 1 או 100%. חסרו את הכחול והצהוב מהשלם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחבר את החלקים הידועים. חצי ועוד רבע.", "math_expression": "1 / 2 + 1 / 4 = 3 / 4" },
            { "verbal_explanation": "שלב 2: נחסיר מהשלם (1) את מה שמצאנו כדי למצוא את החלק של האדום.", "math_expression": "1 - 3 / 4 = 1 / 4" },
            { "verbal_explanation": "שלב 3: נמיר לאחוזים במידת הצורך.", "math_expression": "25%" }
        ],
        "final_answer": "1 / 4 (או 25%)",
        "options": ["1 / 2", "1 / 4", "1 / 8", "0.75"],
        "correctAnswer": 1
    },
    {
        "id": 70,
        "subTopic": "דיאגרמות שכיחות",
        "difficulty": "Medium",
        "question_text": "מהו היתרון של שימוש בדיאגרמת עמודות על פני רשימת מספרים?",
        "hint": "חשבו על המהירות שבה ניתן להבין את התמונה הכללית.",
        "solution_steps": [
            { "verbal_explanation": "דיאגרמה מאפשרת לראות בצורה חזותית ומהירה את התפלגות הנתונים, לזהות מיד מה נפוץ ומה נדיר, מבלי לעבור על כל מספר בנפרד.", "math_explanation": "המחשה חזותית" }
        ],
        "final_answer": "היא מאפשרת לראות את התפלגות הנתונים בצורה חזותית ומהירה.",
        "options": ["היא מדויקת יותר", "היא חזותית ומהירה.", "היא קלה יותר לחישוב", "אין לה יתרון"],
        "correctAnswer": 1
    },
    {
        "id": 71,
        "subTopic": "דיאגרמות שכיחות",
        "difficulty": "High",
        "question_text": "בטבלת שכיחות של 40 משפחות, ל-10 משפחות יש ילד אחד, ל-20 משפחות יש 2 ילדים ולשאר יש 3 ילדים. מהו ה<strong>חציון</strong> של מספר הילדים?",
        "hint": "סדרו את הנתונים בדמיון: 10 פעמים '1', אז 20 פעמים '2'. היכן נמצאים המקומות ה-20 וה-21?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: יש 40 משפחות, לכן החציון הוא הממוצע של המקום ה-20 וה-21.", "math_expression": "מרכז = 20, 21" },
            { "verbal_explanation": "שלב 2: משפחות 1 עד 10 הן עם ילד אחד.", "math_expression": "1-10: '1'" },
            { "verbal_explanation": "שלב 3: משפחות 11 עד 30 (10+20) הן עם 2 ילדים. לכן גם המקום ה-20 וגם ה-21 הם '2'.", "math_expression": "20, 21: '2'" }
        ],
        "final_answer": "2",
        "options": ["1", "2", "3", "2.5"],
        "correctAnswer": 1
    },
    {
        "id": 72,
        "subTopic": "דיאגרמות שכיחות",
        "difficulty": "Medium",
        "question_text": "אם שכיחות יחסית של נתון היא 0.2, כמה פעמים הוא מופיע בקבוצה של 50 נתונים?",
        "hint": "הכפילו את השכיחות היחסית במספר הנתונים הכולל.",
        "solution_steps": [
            { "verbal_explanation": "כדי למצוא את הכמות (השכיחות המוחלטת), נכפול את החלק היחסי (0.2) בשלם (50).", "math_expression": "0.2 * 50 = 10" }
        ],
        "final_answer": "10",
        "options": ["2", "10", "20", "5"],
        "correctAnswer": 1
    },
    {
        "id": 73,
        "subTopic": "דיאגרמות שכיחות",
        "difficulty": "Low",
        "question_text": "בדיאגרמת עוגה, איזה אחוז מייצג עיגול שלם?",
        "hint": "חשבו על השלם באחוזים.",
        "solution_steps": [
            { "verbal_explanation": "דיאגרמת עוגה מחלקת את השלם לחלקים. השלם תמיד מייצג 100%.", "math_expression": "100%" }
        ],
        "final_answer": "100%",
        "options": ["360%", "100%", "50%", "1%"],
        "correctAnswer": 1
    },
    {
        "id": 74,
        "subTopic": "דיאגרמות שכיחות",
        "difficulty": "High",
        "question_text": "נתונה טבלת שכיחות של מספר שעות שינה: 6 שעות (2 אנשים), 7 שעות (5 אנשים), 8 שעות (3 אנשים). מהי השכיחות היחסית של אלו שישנים <strong>פחות מ-8 שעות</strong>?",
        "hint": "חברו את האנשים שישנים 6 ו-7 שעות וחלקו בסך הכל.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את סך כל האנשים בטבלה.", "math_expression": "2 + 5 + 3 = 10" },
            { "verbal_explanation": "שלב 2: נמצא כמה אנשים ישנים פחות מ-8 שעות (אלו שישנים 6 או 7).", "math_expression": "2 + 5 = 7" },
            { "verbal_explanation": "שלב 3: נחלק את הכמות (7) בסך הכל (10).", "math_expression": "7 / 10 = 0.7" }
        ],
        "final_answer": "0.7 (או 70%)",
        "options": ["0.2", "0.5", "0.7", "0.3"],
        "correctAnswer": 2
    },
    {
        "id": 75,
        "subTopic": "דיאגרמות שכיחות",
        "difficulty": "Medium",
        "question_text": "מתי נעדיף להשתמש בדיאגרמת עוגה במקום דיאגרמת עמודות?",
        "hint": "חשבו מתי חשוב לנו לראות את הקשר בין החלק לבין השלם.",
        "solution_steps": [
            { "verbal_explanation": "דיאגרמת עוגה היא הטובה ביותר להצגת חלקים מתוך שלם (אחוזים), בעוד שעמודות טובות יותר להשוואה בין כמויות מוחלטות.", "math_explanation": "חלק מתוך שלם" }
        ],
        "final_answer": "כאשר רוצים להדגיש את החלק היחסי מתוך השלם.",
        "options": ["תמיד", "כשיש המון נתונים", "להדגשת חלק מתוך שלם.", "אף פעם"],
        "correctAnswer": 2
    },
    {
        "id": 76,
        "subTopic": "דיאגרמות שכיחות",
        "difficulty": "Low",
        "question_text": "מהו סכום כל השכיחויות היחסיות (בצורת שבר) של קבוצת נתונים?",
        "hint": "חישבו מה קורה כשמחברים את כל החלקים של השלם.",
        "solution_steps": [
            { "verbal_explanation": "מכיוון שכל שכיחות יחסית מייצגת חלק מהקבוצה, חיבור כל החלקים יחד ייתן תמיד את הקבוצה השלמה.", "math_expression": "1" }
        ],
        "final_answer": "1",
        "options": ["0", "0.5", "1", "100"],
        "correctAnswer": 2
    },
    {
        "id": 77,
        "subTopic": "דיאגרמות שכיחות",
        "difficulty": "High",
        "question_text": "בדיאגרמת עמודות מופיע הנתון הבא: 10 תלמידים קיבלו ציון 80. אם נוסיף לכיתה תלמיד שקיבל 80, מה יקרה לעמודה של הציון 80?",
        "hint": "חשבו איך השכיחות משתנה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: השכיחות של הציון 80 תגדל מ-10 ל-11.", "math_expression": "10 + 1 = 11" },
            { "verbal_explanation": "שלב 2: בדיאגרמה, השכיחות מיוצגת על ידי הגובה. לכן, העמודה תהפוך לגבוהה יותר ביחידה אחת.", "math_expression": "גובה גדל" }
        ],
        "final_answer": "גובה העמודה יגדל.",
        "options": ["גובה העמודה יקטן", "גובה העמודה יגדל.", "רוחב העמודה יגדל", "לא יהיה שינוי"],
        "correctAnswer": 1
    },
    {
        "id": 78,
        "subTopic": "דיאגרמות שכיחות",
        "difficulty": "Medium",
        "question_text": "נתון ש-20% מהאנשים במחקר הם מעשנים. אם נציג זאת בדיאגרמת עוגה, מה תהיה זווית הגזרה של המעשנים?",
        "hint": "מצאו 20% מתוך 360 מעלות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמיר 20% לשבר עשרוני.", "math_expression": "20 / 100 = 0.2" },
            { "verbal_explanation": "שלב 2: נכפול את השבר ב-360 מעלות של העיגול.", "math_expression": "0.2 * 360 = 72" }
        ],
        "final_answer": "72 מעלות",
        "options": ["20 מעלות", "72 מעלות", "90 מעלות", "45 מעלות"],
        "correctAnswer": 1
    },
    {
        "id": 79,
        "subTopic": "דיאגרמות שכיחות",
        "difficulty": "High",
        "question_text": "בטבלת שכיחות מצטברת, מה מייצגת השורה האחרונה?",
        "hint": "חשבו על המילה 'מצטברת' - איסוף הנתונים לאורך הדרך.",
        "solution_steps": [
            { "verbal_explanation": "בשכיחות מצטברת אנו מוסיפים כל פעם את השכיחות החדשה לסכום הקודם. לכן, בשורה האחרונה נגיע למספר המקרים הכולל במחקר.", "math_expression": "סך כל המקרים" }
        ],
        "final_answer": "את מספר המקרים הכולל (סך כל השכיחויות).",
        "options": ["את הממוצע", "את המספר הגבוה ביותר", "את מספר המקרים הכולל.", "את השכיח"],
        "correctAnswer": 2
    },
    {
        "id": 80,
        "subTopic": "דיאגרמות שכיחות",
        "difficulty": "Low",
        "question_text": "האם ניתן לבנות דיאגרמת שכיחות עבור נתונים שהם מילים (כמו צבעים) ולא מספרים?",
        "hint": "חשבו על סקר שבו שואלים אנשים מהו הצבע האהוב עליהם.",
        "solution_steps": [
            { "verbal_explanation": "סטטיסטיקה עוסקת גם בנתונים איכותיים (קטגוריות). ניתן לספור כמה פעמים מופיע כל צבע ולבנות עמודה בגובה המתאים לשכיחות שלו.", "math_explanation": "נתונים קטגוריאליים" }
        ],
        "final_answer": "כן, בהחלט.",
        "options": ["כן.", "לא", "רק אם הופכים צבעים למספרים", "רק בדיאגרמת עוגה"],
        "correctAnswer": 0
    }
];