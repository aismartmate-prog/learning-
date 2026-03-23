const questionsDB = [
    // ==========================================
    // תת נושא 1: שטח והיקף מלבן (10 שאלות)
    // ==========================================
    {
        "topic": "geometry_grade_7",
        "subTopic": "שטח והיקף מלבן",
        "question_text": "אורך מלבן הוא 8 ס''מ ורוחבו 5 ס''מ. מהו שטח המלבן?&rlm;",
        "options": ["40", "26", "13", "45"],
        "correctAnswer": 0,
        "hint": "כדי למצוא שטח של מלבן, כופלים את האורך ברוחב.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את תרגיל הכפל למציאת השטח: אורך כפול רוחב.", "math_expression": "8 \\times 5" },
            { "verbal_explanation": "נחשב את תוצאת הכפל בעזרת לוח הכפל.", "math_expression": "40" },
            { "verbal_explanation": "שטח המלבן הוא ארבעים סנטימטרים רבועים.", "math_expression": "40" }
        ],
        "final_answer": "40"
    },
    {
        "topic": "geometry_grade_7",
        "subTopic": "שטח והיקף מלבן",
        "question_text": "אורך מלבן הוא 9 ס''מ ורוחבו 3 ס''מ. מהו היקף המלבן?&rlm;",
        "options": ["24", "27", "12", "18"],
        "correctAnswer": 0,
        "hint": "היקף הוא הסכום של כל ארבע צלעות המלבן. זכרו שבמלבן הצלעות הנגדיות שוות.",
        "solution_steps": [
            { "verbal_explanation": "במלבן יש פעמיים את הצלע הארוכה ופעמיים את הצלע הקצרה. נחבר את כולם.", "math_expression": "9 + 9 + 3 + 3" },
            { "verbal_explanation": "נחבר את אורכי הצלעות.", "math_expression": "18 + 6" },
            { "verbal_explanation": "נחשב את הסכום הסופי לקבלת ההיקף.", "math_expression": "24" }
        ],
        "final_answer": "24"
    },
    {
        "topic": "geometry_grade_7",
        "subTopic": "שטח והיקף מלבן",
        "question_text": "שטחו של מלבן הוא 50 סמ''ר. אורך המלבן הוא 10 ס''מ. מהו רוחב המלבן?&rlm;",
        "options": ["5", "40", "500", "20"],
        "correctAnswer": 0,
        "hint": "השטח הוא תוצאה של כפל האורך ברוחב. השתמשו בפעולת חילוק כדי למצוא את הרוחב החסר.",
        "solution_steps": [
            { "verbal_explanation": "השטח מתקבל ממכפלת האורך ברוחב. נחלק את השטח באורך כדי למצוא את הרוחב.", "math_expression": "50 \\div 10" },
            { "verbal_explanation": "נבצע את פעולת החילוק.", "math_expression": "5" },
            { "verbal_explanation": "הרוחב הוא חמישה סנטימטרים.", "math_expression": "5" }
        ],
        "final_answer": "5"
    },
    {
        "topic": "geometry_grade_7",
        "subTopic": "שטח והיקף מלבן",
        "question_text": "היקפו של מלבן הוא 30 ס''מ. אורך המלבן הוא 10 ס''מ. מהו רוחב המלבן?&rlm;",
        "options": ["5", "10", "20", "15"],
        "correctAnswer": 0,
        "hint": "חלקו את ההיקף לשניים כדי למצוא את סכום האורך והרוחב בנפרד, וחסרו את האורך.",
        "solution_steps": [
            { "verbal_explanation": "נחלק את ההיקף הכולל בשתיים כדי לקבל את הסכום של צלע אחת ארוכה וצלע אחת קצרה.", "math_expression": "30 \\div 2 = 15" },
            { "verbal_explanation": "הסכום הוא חמש עשרה והאורך לבדו הוא עשר. נחסר את האורך מהסכום.", "math_expression": "15 - 10" },
            { "verbal_explanation": "התוצאה היא הרוחב של המלבן.", "math_expression": "5" }
        ],
        "final_answer": "5"
    },
    {
        "topic": "geometry_grade_7",
        "subTopic": "שטח והיקף מלבן",
        "question_text": "היקפו של ריבוע הוא 36 ס''מ. מהו שטחו של הריבוע?&rlm;",
        "options": ["81", "36", "72", "18"],
        "correctAnswer": 0,
        "hint": "ריבוע הוא מלבן שכל צלעותיו שוות. מצאו תחילה את אורך הצלע על ידי חלוקת ההיקף בארבע.",
        "solution_steps": [
            { "verbal_explanation": "בריבוע יש ארבע צלעות שוות. נחלק את ההיקף בארבע כדי למצוא צלע אחת.", "math_expression": "36 \\div 4 = 9" },
            { "verbal_explanation": "כעת נחשב את השטח על ידי כפל הצלע בעצמה.", "math_expression": "9 \\times 9" },
            { "verbal_explanation": "השטח הוא שמונים ואחד.", "math_expression": "81" }
        ],
        "final_answer": "81"
    },
    {
        "topic": "geometry_grade_7",
        "subTopic": "שטח והיקף מלבן",
        "question_text": "מלבן שמידותיו 10 על 4 עשוי מנייר. גזרו והוציאו מתוכו ריבוע קטן שמידותיו 3 על 3. מהו השטח הנותר?&rlm;",
        "options": ["31", "40", "9", "28"],
        "correctAnswer": 0,
        "hint": "חשבו את השטח של המלבן השלם, חשבו את השטח של הריבוע, וחסרו את הקטן מהגדול.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את השטח המקורי של המלבן המלא.", "math_expression": "10 \\times 4 = 40" },
            { "verbal_explanation": "נחשב את השטח של הריבוע שנגזר והוצא החוצה.", "math_expression": "3 \\times 3 = 9" },
            { "verbal_explanation": "נחסר את השטח הנגזר מהשטח המלא כדי לגלות כמה נשאר.", "math_expression": "40 - 9 = 31" }
        ],
        "final_answer": "31"
    },
    {
        "topic": "geometry_grade_7",
        "subTopic": "שטח והיקף מלבן",
        "question_text": "שני מלבנים זהים שמידותיהם 6 על 2 מודבקים זה לזה לאורך הצלע הארוכה שלהם. מהו ההיקף של המלבן החדש שנוצר?&rlm;",
        "options": ["20", "24", "16", "32"],
        "correctAnswer": 0,
        "hint": "ההדבקה נעשית על הצלע הארוכה, כך שהרוחב מוכפל אבל האורך נשאר זהה.",
        "solution_steps": [
            { "verbal_explanation": "הרוחב החדש נוצר מחיבור של שתי הצלעות הקצרות.", "math_expression": "2 + 2 = 4" },
            { "verbal_explanation": "האורך נשאר שש. נחבר את כל צלעות המלבן החדש למציאת היקף.", "math_expression": "6 + 6 + 4 + 4" },
            { "verbal_explanation": "נחשב את החיבור הסופי.", "math_expression": "12 + 8 = 20" }
        ],
        "final_answer": "20"
    },
    {
        "topic": "geometry_grade_7",
        "subTopic": "שטח והיקף מלבן",
        "question_text": "אורך מלבן הוא 12. רוחבו של המלבן שווה בדיוק לחצי מהאורך שלו. מהו השטח של המלבן?&rlm;",
        "options": ["72", "36", "18", "48"],
        "correctAnswer": 0,
        "hint": "מצאו קודם את הרוחב על ידי חלוקת האורך בשתיים.",
        "solution_steps": [
            { "verbal_explanation": "נמצא את הרוחב על ידי חלוקת האורך הנתון בשתיים.", "math_expression": "12 \\div 2 = 6" },
            { "verbal_explanation": "נחשב את השטח על ידי כפל האורך ברוחב שמצאנו.", "math_expression": "12 \\times 6" },
            { "verbal_explanation": "השטח הוא שבעים ושתיים.", "math_expression": "72" }
        ],
        "final_answer": "72"
    },
    {
        "topic": "geometry_grade_7",
        "subTopic": "שטח והיקף מלבן",
        "question_text": "היקפו של מלבן הוא 24. אורך המלבן הוא 8. מהו שטחו של המלבן?&rlm;",
        "options": ["32", "64", "16", "48"],
        "correctAnswer": 0,
        "hint": "מציאת השטח דורשת קודם למצוא את הרוחב מתוך נתוני ההיקף.",
        "solution_steps": [
            { "verbal_explanation": "נחלק את ההיקף לשניים כדי לקבל אורך אחד ורוחב אחד.", "math_expression": "24 \\div 2 = 12" },
            { "verbal_explanation": "נחסר את האורך הידוע מהסכום כדי לקבל את הרוחב.", "math_expression": "12 - 8 = 4" },
            { "verbal_explanation": "נכפול את האורך והרוחב למציאת השטח.", "math_expression": "8 \\times 4 = 32" }
        ],
        "final_answer": "32"
    },
    {
        "topic": "geometry_grade_7",
        "subTopic": "שטח והיקף מלבן",
        "question_text": "רצפת חדר היא בצורת מלבן במידות 5 על 4. רוצים לרצף את החדר באריחים בצורת ריבוע שצלעו 1. כמה אריחים בדיוק ידרשו?&rlm;",
        "options": ["20", "18", "40", "9"],
        "correctAnswer": 0,
        "hint": "שטח האריח הוא אחד. לכן מספר האריחים זהה לשטח החדר.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את שטח רצפת החדר.", "math_expression": "5 \\times 4 = 20" },
            { "verbal_explanation": "נחשב את שטחו של כל אריח בודד.", "math_expression": "1 \\times 1 = 1" },
            { "verbal_explanation": "נחלק את שטח הרצפה בשטח האריח לקבלת הכמות הדרושה.", "math_expression": "20 \\div 1 = 20" }
        ],
        "final_answer": "20"
    },

    // ==========================================
    // תת נושא 2: שטח והיקף משולש (10 שאלות)
    // ==========================================
    {
        "topic": "geometry_grade_7",
        "subTopic": "שטח והיקף משולש",
        "question_text": "במשולש, אורך הבסיס הוא 10 והגובה היורד אליו הוא 4. מהו שטח המשולש?&rlm;",
        "options": ["20", "40", "14", "30"],
        "correctAnswer": 0,
        "hint": "שטח משולש הוא בסיס כפול גובה חלקי שתיים.",
        "solution_steps": [
            { "verbal_explanation": "נכפול את הבסיס בגובה שלו.", "math_expression": "10 \\times 4 = 40" },
            { "verbal_explanation": "נחלק את התוצאה בשתיים לפי חוקי השטח של משולש.", "math_expression": "40 \\div 2" },
            { "verbal_explanation": "נקבל את השטח.", "math_expression": "20" }
        ],
        "final_answer": "20"
    },
    {
        "topic": "geometry_grade_7",
        "subTopic": "שטח והיקף משולש",
        "question_text": "אורכי צלעותיו של משולש הם 6, 8 ו-10. מהו היקף המשולש?&rlm;",
        "options": ["24", "48", "14", "18"],
        "correctAnswer": 0,
        "hint": "היקף הוא חיבור כל הצלעות החיצוניות יחד.",
        "solution_steps": [
            { "verbal_explanation": "נחבר את שלושת המספרים המייצגים את הצלעות.", "math_expression": "6 + 8 + 10" },
            { "verbal_explanation": "נחבר בשלבים.", "math_expression": "14 + 10" },
            { "verbal_explanation": "סכום ההיקף התקבל.", "math_expression": "24" }
        ],
        "final_answer": "24"
    },
    {
        "topic": "geometry_grade_7",
        "subTopic": "שטח והיקף משולש",
        "question_text": "שטחו של משולש הוא 30. אורך הבסיס שלו הוא 10. מהו הגובה היורד אליו?&rlm;",
        "options": ["6", "3", "60", "15"],
        "correctAnswer": 0,
        "hint": "הכפילו את השטח פי שתיים ואז חלקו בבסיס הידוע.",
        "solution_steps": [
            { "verbal_explanation": "נכפול את השטח בשתיים כדי למצוא את המכפלה השלמה של בסיס וגובה.", "math_expression": "30 \\times 2 = 60" },
            { "verbal_explanation": "נחלק את המכפלה בבסיס כדי לבודד את הגובה.", "math_expression": "60 \\div 10" },
            { "verbal_explanation": "הגובה הוא שש.", "math_expression": "6" }
        ],
        "final_answer": "6"
    },
    {
        "topic": "geometry_grade_7",
        "subTopic": "שטח והיקף משולש",
        "question_text": "במשולש ישר זווית, הניצבים (הצלעות שיוצרות זווית ישרה) הם באורך 6 ו-8. מהו שטח המשולש?&rlm;",
        "options": ["24", "48", "14", "10"],
        "correctAnswer": 0,
        "hint": "הניצבים הם בעצם הבסיס והגובה של המשולש.",
        "solution_steps": [
            { "verbal_explanation": "נכפול את הניצבים זה בזה.", "math_expression": "6 \\times 8 = 48" },
            { "verbal_explanation": "נחלק את התוצאה בשתיים כדי לקבל את שטח המשולש.", "math_expression": "48 \\div 2" },
            { "verbal_explanation": "השטח חושב.", "math_expression": "24" }
        ],
        "final_answer": "24"
    },
    {
        "topic": "geometry_grade_7",
        "subTopic": "שטח והיקף משולש",
        "question_text": "היקפו של משולש שווה צלעות הוא 21. מהו אורכה של כל צלע?&rlm;",
        "options": ["7", "3", "18", "10.5"],
        "correctAnswer": 0,
        "hint": "במשולש שווה צלעות יש שלוש צלעות באותו גודל.",
        "solution_steps": [
            { "verbal_explanation": "נחלק את ההיקף השלם לשלושה חלקים שווים.", "math_expression": "21 \\div 3" },
            { "verbal_explanation": "התוצאה היא אורך צלע אחת.", "math_expression": "7" },
            { "verbal_explanation": "כל צלע שווה לשבע.", "math_expression": "7" }
        ],
        "final_answer": "7"
    },
    {
        "topic": "geometry_grade_7",
        "subTopic": "שטח והיקף משולש",
        "question_text": "במשולש שווה שוקיים אורך הבסיס הוא 8 והיקף המשולש הוא 20. מהו אורכה של כל שוק?&rlm;",
        "options": ["6", "12", "4", "10"],
        "correctAnswer": 0,
        "hint": "חסרו את הבסיס מההיקף, ואת מה שנשאר חלקו בין שתי השוקיים השוות.",
        "solution_steps": [
            { "verbal_explanation": "נוריד מההיקף את הבסיס כדי לדעת כמה נשאר לשוקיים.", "math_expression": "20 - 8 = 12" },
            { "verbal_explanation": "נחלק את השארית לשתיים כדי לקבל שוק אחת.", "math_expression": "12 \\div 2" },
            { "verbal_explanation": "אורך השוק הוא שש.", "math_expression": "6" }
        ],
        "final_answer": "6"
    },
    {
        "topic": "geometry_grade_7",
        "subTopic": "שטח והיקף משולש",
        "question_text": "שטחו של משולש ישר זווית הוא 20. ניצב אחד הוא באורך 4. מהו אורכו של הניצב השני?&rlm;",
        "options": ["10", "5", "8", "40"],
        "correctAnswer": 0,
        "hint": "הכפילו את השטח פי שתיים ואז חלקו בניצב הידוע.",
        "solution_steps": [
            { "verbal_explanation": "נכפול את השטח בשתיים כדי לקבל את מכפלת שני הניצבים יחד.", "math_expression": "20 \\times 2 = 40" },
            { "verbal_explanation": "נחלק בניצב הראשון הידוע לנו.", "math_expression": "40 \\div 4" },
            { "verbal_explanation": "הניצב השני הוא עשר.", "math_expression": "10" }
        ],
        "final_answer": "10"
    },
    {
        "topic": "geometry_grade_7",
        "subTopic": "שטח והיקף משולש",
        "question_text": "במשולש, אורך הבסיס הוא 12. הגובה אליו שווה לחצי מהבסיס. מהו השטח?&rlm;",
        "options": ["36", "72", "18", "48"],
        "correctAnswer": 0,
        "hint": "מצאו קודם את הגובה, ואז חשבו שטח רגיל.",
        "solution_steps": [
            { "verbal_explanation": "נמצא את הגובה על ידי חלוקת הבסיס בשתיים.", "math_expression": "12 \\div 2 = 6" },
            { "verbal_explanation": "נכפול בסיס בגובה.", "math_expression": "12 \\times 6 = 72" },
            { "verbal_explanation": "נחלק בשתיים למציאת השטח הסופי של משולש.", "math_expression": "72 \\div 2 = 36" }
        ],
        "final_answer": "36"
    },
    {
        "topic": "geometry_grade_7",
        "subTopic": "שטח והיקף משולש",
        "question_text": "היקף של משולש הוא 30. אורך צלע אחת הוא 10, וצלע שנייה היא 12. מהי הצלע השלישית?&rlm;",
        "options": ["8", "18", "22", "6"],
        "correctAnswer": 0,
        "hint": "חסרו מההיקף את שתי הצלעות הידועות.",
        "solution_steps": [
            { "verbal_explanation": "נחבר את שתי הצלעות הידועות לנו.", "math_expression": "10 + 12 = 22" },
            { "verbal_explanation": "נחסר את הסכום מתוך ההיקף הכללי.", "math_expression": "30 - 22" },
            { "verbal_explanation": "המספר שנותר שייך לצלע השלישית.", "math_expression": "8" }
        ],
        "final_answer": "8"
    },
    {
        "topic": "geometry_grade_7",
        "subTopic": "שטח והיקף משולש",
        "question_text": "צורה מורכבת ממלבן במידות 8 על 5, ומשולש המונח על הצלע של ה-8. גובה המשולש הוא 4. מהו השטח הכולל?&rlm;",
        "options": ["56", "72", "40", "88"],
        "correctAnswer": 0,
        "hint": "חשבו שטח מלבן, שטח משולש (אל תשכחו לחלק בשתיים), וחברו יחד.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את שטח המלבן.", "math_expression": "8 \\times 5 = 40" },
            { "verbal_explanation": "נחשב את שטח המשולש: בסיס כפול גובה, חלקי שתיים.", "math_expression": "8 \\times 4 \\div 2 = 16" },
            { "verbal_explanation": "נחבר את השטחים יחד.", "math_expression": "40 + 16 = 56" }
        ],
        "final_answer": "56"
    },

    // ==========================================
    // תת נושא 3: היקף ושטח מקבילית (10 שאלות)
    // ==========================================
    {
        "topic": "geometry_grade_7",
        "subTopic": "היקף ושטח מקבילית",
        "question_text": "במקבילית, אורך הבסיס הוא 8 והגובה היורד אליו הוא 5. מהו השטח?&rlm;",
        "options": ["40", "20", "26", "13"],
        "correctAnswer": 0,
        "hint": "שטח מקבילית שווה לאורך הצלע כפול הגובה שיורד אליה.",
        "solution_steps": [
            { "verbal_explanation": "הכלל לשטח מקבילית הוא כפל הבסיס בגובה.", "math_expression": "8 \\times 5" },
            { "verbal_explanation": "נחשב את המכפלה.", "math_expression": "40" },
            { "verbal_explanation": "השטח חושב בהצלחה.", "math_expression": "40" }
        ],
        "final_answer": "40"
    },
    {
        "topic": "geometry_grade_7",
        "subTopic": "היקף ושטח מקבילית",
        "question_text": "אורך צלע במקבילית הוא 7 ואורך הצלע הסמוכה הוא 9. מהו ההיקף?&rlm;",
        "options": ["32", "16", "63", "30"],
        "correctAnswer": 0,
        "hint": "צלעות נגדיות במקבילית הן שוות.",
        "solution_steps": [
            { "verbal_explanation": "נחבר פעמיים את הצלע הראשונה ופעמיים את השנייה.", "math_expression": "7 + 7 + 9 + 9" },
            { "verbal_explanation": "נחבר זוגות.", "math_expression": "14 + 18" },
            { "verbal_explanation": "ההיקף חושב.", "math_expression": "32" }
        ],
        "final_answer": "32"
    },
    {
        "topic": "geometry_grade_7",
        "subTopic": "היקף ושטח מקבילית",
        "question_text": "שטחה של מקבילית הוא 42. בסיס אחד שלה הוא 7. מהו הגובה אליו?&rlm;",
        "options": ["6", "12", "35", "21"],
        "correctAnswer": 0,
        "hint": "חילוק השטח בבסיס נותן את הגובה.",
        "solution_steps": [
            { "verbal_explanation": "נחלק את השטח בבסיס הנתון.", "math_expression": "42 \\div 7" },
            { "verbal_explanation": "התוצאה היא הגובה המבוקש.", "math_expression": "6" },
            { "verbal_explanation": "הגובה הוא שש.", "math_expression": "6" }
        ],
        "final_answer": "6"
    },
    {
        "topic": "geometry_grade_7",
        "subTopic": "היקף ושטח מקבילית",
        "question_text": "היקפה של מקבילית הוא 40. צלע אחת היא 12. מהו אורך הצלע הסמוכה?&rlm;",
        "options": ["8", "16", "28", "14"],
        "correctAnswer": 0,
        "hint": "חצי מההיקף הוא סכום שתי הצלעות השונות.",
        "solution_steps": [
            { "verbal_explanation": "נחלק היקף לשתיים.", "math_expression": "40 \\div 2 = 20" },
            { "verbal_explanation": "נחסר את הצלע הידועה.", "math_expression": "20 - 12" },
            { "verbal_explanation": "הצלע השנייה היא שמונה.", "math_expression": "8" }
        ],
        "final_answer": "8"
    },
    {
        "topic": "geometry_grade_7",
        "subTopic": "היקף ושטח מקבילית",
        "question_text": "במקבילית, אורך הבסיס הוא 10 והגובה הוא 4. הצלע האלכסונית היא באורך 8. מהו ההיקף?&rlm;",
        "options": ["36", "40", "18", "22"],
        "correctAnswer": 0,
        "hint": "הגובה אינו חלק מההיקף. חברו רק את הצלעות.",
        "solution_steps": [
            { "verbal_explanation": "נתעלם מהגובה ונשתמש רק באורכי הצלעות החיצוניות.", "math_expression": "10 + 10 + 8 + 8" },
            { "verbal_explanation": "נחבר את כל הצלעות.", "math_expression": "20 + 16" },
            { "verbal_explanation": "נקבל את ההיקף.", "math_expression": "36" }
        ],
        "final_answer": "36"
    },
    {
        "topic": "geometry_grade_7",
        "subTopic": "היקף ושטח מקבילית",
        "question_text": "מעוין הוא מקבילית שבה כל הצלעות שוות. היקף המעוין הוא 36 והגובה הוא 5. מה השטח?&rlm;",
        "options": ["45", "90", "180", "18"],
        "correctAnswer": 0,
        "hint": "מצאו את הצלע מתוך ההיקף, ואז כפלו בגובה.",
        "solution_steps": [
            { "verbal_explanation": "נחלק את ההיקף בארבע כדי למצוא את אורך הצלע.", "math_expression": "36 \\div 4 = 9" },
            { "verbal_explanation": "נכפול את הצלע בגובה כדי לחשב שטח של מקבילית.", "math_expression": "9 \\times 5" },
            { "verbal_explanation": "השטח חושב בהצלחה.", "math_expression": "45" }
        ],
        "final_answer": "45"
    },
    {
        "topic": "geometry_grade_7",
        "subTopic": "היקף ושטח מקבילית",
        "question_text": "שטחה של מקבילית הוא 60. הגובה הוא 6. מהו אורך הבסיס?&rlm;",
        "options": ["10", "12", "54", "360"],
        "correctAnswer": 0,
        "hint": "חילוק השטח בגובה נותן את הבסיס.",
        "solution_steps": [
            { "verbal_explanation": "נחלק את השטח בגובה.", "math_expression": "60 \\div 6" },
            { "verbal_explanation": "התוצאה תיתן לנו את הבסיס.", "math_expression": "10" },
            { "verbal_explanation": "הבסיס הוא עשר.", "math_expression": "10" }
        ],
        "final_answer": "10"
    },
    {
        "topic": "geometry_grade_7",
        "subTopic": "היקף ושטח מקבילית",
        "question_text": "אורך הבסיס במקבילית הוא 15. הגובה שווה לשליש מאורך הבסיס. מהו השטח?&rlm;",
        "options": ["75", "45", "5", "100"],
        "correctAnswer": 0,
        "hint": "חשבו קודם את הגובה, ואז כפלו בבסיס.",
        "solution_steps": [
            { "verbal_explanation": "נמצא את הגובה על ידי חלוקה בשלוש.", "math_expression": "15 \\div 3 = 5" },
            { "verbal_explanation": "נכפול בסיס בגובה למציאת השטח.", "math_expression": "15 \\times 5" },
            { "verbal_explanation": "השטח חושב.", "math_expression": "75" }
        ],
        "final_answer": "75"
    },
    {
        "topic": "geometry_grade_7",
        "subTopic": "היקף ושטח מקבילית",
        "question_text": "שתי מקביליות זהות מחוברות יחד. לכל אחת בסיס 6 וגובה 5. מהו השטח הכולל?&rlm;",
        "options": ["60", "30", "45", "90"],
        "correctAnswer": 0,
        "hint": "חשבו שטח של אחת והכפילו בשתיים.",
        "solution_steps": [
            { "verbal_explanation": "נחשב שטח של מקבילית אחת.", "math_expression": "6 \\times 5 = 30" },
            { "verbal_explanation": "נכפול בשתיים כי יש שתי צורות כאלו.", "math_expression": "30 \\times 2" },
            { "verbal_explanation": "השטח הסופי חושב.", "math_expression": "60" }
        ],
        "final_answer": "60"
    },
    {
        "topic": "geometry_grade_7",
        "subTopic": "היקף ושטח מקבילית",
        "question_text": "היקף מקבילית הוא 50. אורך צלע אחת הוא 15. הגובה לצלע זו הוא 6. מהו השטח?&rlm;",
        "options": ["90", "75", "150", "45"],
        "correctAnswer": 0,
        "hint": "ההיקף הוא נתון מבלבל. צריך רק בסיס וגובה לשטח.",
        "solution_steps": [
            { "verbal_explanation": "נתעלם מההיקף ונשתמש רק בבסיס ובגובה.", "math_expression": "15 \\times 6" },
            { "verbal_explanation": "נחשב את הכפל.", "math_expression": "90" },
            { "verbal_explanation": "השטח נמצא.", "math_expression": "90" }
        ],
        "final_answer": "90"
    },

    // ==========================================
    // תת נושא 4: נפח תיבה (10 שאלות)
    // ==========================================
    {
        "topic": "geometry_grade_7",
        "subTopic": "נפח תיבה",
        "question_text": "לתיבה יש אורך 5, רוחב 4 וגובה 3. מהו נפח התיבה?&rlm;",
        "options": ["60", "20", "12", "15"],
        "correctAnswer": 0,
        "hint": "נפח תיבה מחושב על ידי הכפלת האורך, הרוחב והגובה.",
        "solution_steps": [
            { "verbal_explanation": "נכפול את האורך ברוחב כדי לקבל את שטח הבסיס.", "math_expression": "5 \\times 4 = 20" },
            { "verbal_explanation": "נכפול את שטח הבסיס בגובה כדי לקבל את הנפח.", "math_expression": "20 \\times 3 = 60" },
            { "verbal_explanation": "הנפח חושב.", "math_expression": "60" }
        ],
        "final_answer": "60"
    },
    {
        "topic": "geometry_grade_7",
        "subTopic": "נפח תיבה",
        "question_text": "קובייה היא תיבה שכל צלעותיה שוות. אם אורך הצלע הוא 4, מהו הנפח?&rlm;",
        "options": ["64", "16", "12", "32"],
        "correctAnswer": 0,
        "hint": "בקובייה האורך, הרוחב והגובה שווים כולם לארבע.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את שטח הבסיס על ידי הכפלת הצלע בעצמה.", "math_expression": "4 \\times 4 = 16" },
            { "verbal_explanation": "נכפול את שטח הבסיס בגובה הקובייה.", "math_expression": "16 \\times 4 = 64" },
            { "verbal_explanation": "הנפח הוא שישים וארבע.", "math_expression": "64" }
        ],
        "final_answer": "64"
    },
    {
        "topic": "geometry_grade_7",
        "subTopic": "נפח תיבה",
        "question_text": "שטח הבסיס של תיבה הוא 25. גובה התיבה הוא 4. מהו הנפח?&rlm;",
        "options": ["100", "29", "125", "50"],
        "correctAnswer": 0,
        "hint": "כאשר שטח הבסיס נתון, צריך רק לכפול אותו בגובה.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בשטח הבסיס הנתון ונכפול אותו בגובה.", "math_expression": "25 \\times 4" },
            { "verbal_explanation": "נחשב את הכפל.", "math_expression": "100" },
            { "verbal_explanation": "הנפח הוא מאה.", "math_expression": "100" }
        ],
        "final_answer": "100"
    },
    {
        "topic": "geometry_grade_7",
        "subTopic": "נפח תיבה",
        "question_text": "נפח של תיבה הוא 120. אורך הבסיס הוא 6 ורוחבו 5. מהו הגובה של התיבה?&rlm;",
        "options": ["4", "30", "11", "6"],
        "correctAnswer": 0,
        "hint": "חשבו את שטח הבסיס, וחלקו את הנפח בשטח הבסיס כדי למצוא את הגובה.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את שטח הבסיס על ידי כפל אורכו ורוחבו.", "math_expression": "6 \\times 5 = 30" },
            { "verbal_explanation": "נחלק את הנפח הכללי בשטח הבסיס כדי למצוא את הגובה שחסר.", "math_expression": "120 \\div 30" },
            { "verbal_explanation": "הגובה הוא ארבע.", "math_expression": "4" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "geometry_grade_7",
        "subTopic": "נפח תיבה",
        "question_text": "נפחה של תיבה הוא 80, והגובה שלה הוא 8. מהו שטח הבסיס של התיבה?&rlm;",
        "options": ["10", "16", "72", "640"],
        "correctAnswer": 0,
        "hint": "הנפח הוא שטח הבסיס כפול הגובה. חלקו את הנפח בגובה.",
        "solution_steps": [
            { "verbal_explanation": "נרשום תרגיל חילוק: נפח לחלק לגובה.", "math_expression": "80 \\div 8" },
            { "verbal_explanation": "נחשב את התוצאה.", "math_expression": "10" },
            { "verbal_explanation": "שטח הבסיס הוא עשר.", "math_expression": "10" }
        ],
        "final_answer": "10"
    },
    {
        "topic": "geometry_grade_7",
        "subTopic": "נפח תיבה",
        "question_text": "מהו אורך הצלע של קובייה שנפחה הכולל הוא 27?&rlm;",
        "options": ["3", "9", "4", "2"],
        "correctAnswer": 0,
        "hint": "חפשו מספר שאם כופלים אותו בעצמו שלוש פעמים, מקבלים עשרים ושבע.",
        "solution_steps": [
            { "verbal_explanation": "נחפש מספר שכאשר נכפול אותו בעצמו שלוש פעמים ייתן את הנפח הנתון.", "math_expression": "3 \\times 3 \\times 3 = 27" },
            { "verbal_explanation": "נבדוק את הכפל: שלוש כפול שלוש זה תשע, ותשע כפול שלוש זה עשרים ושבע.", "math_expression": "9 \\times 3 = 27" },
            { "verbal_explanation": "אורך כל צלע בקובייה זו הוא שלוש.", "math_expression": "3" }
        ],
        "final_answer": "3"
    },
    {
        "topic": "geometry_grade_7",
        "subTopic": "נפח תיבה",
        "question_text": "שתי תיבות זהות לחלוטין מחוברות יחד. המידות של כל תיבה הן 2, 3 ו-5. מהו הנפח הכולל של הצורה המחוברת?&rlm;",
        "options": ["60", "30", "120", "45"],
        "correctAnswer": 0,
        "hint": "חשבו נפח של תיבה אחת, והכפילו את התוצאה בשתיים.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את הנפח של התיבה הבודדת על ידי כפל כל המידות.", "math_expression": "2 \\times 3 = 6" },
            { "verbal_explanation": "נמשיך בכפל כדי לסיים את מציאת הנפח לתיבה אחת.", "math_expression": "6 \\times 5 = 30" },
            { "verbal_explanation": "נכפול את הנפח בשתיים, כי יש לנו שתי תיבות זהות שמחוברות.", "math_expression": "30 \\times 2 = 60" }
        ],
        "final_answer": "60"
    },
    {
        "topic": "geometry_grade_7",
        "subTopic": "נפח תיבה",
        "question_text": "לפניכם קובייה שמידותיה הן 10, 10 ו-10. מהו נפחה?&rlm;",
        "options": ["1000", "100", "30", "300"],
        "correctAnswer": 0,
        "hint": "כפלו עשר כפול עשר כפול עשר.",
        "solution_steps": [
            { "verbal_explanation": "נכפול את האורך ברוחב כדי למצוא את שטח הבסיס.", "math_expression": "10 \\times 10 = 100" },
            { "verbal_explanation": "נכפול את השטח שמצאנו בגובה הקובייה.", "math_expression": "100 \\times 10 = 1000" },
            { "verbal_explanation": "נפח הקובייה הוא אלף.", "math_expression": "1000" }
        ],
        "final_answer": "1000"
    },
    {
        "topic": "geometry_grade_7",
        "subTopic": "נפח תיבה",
        "question_text": "מכל מים בצורת תיבה, שמידותיו הן 2, 3 ו-4, מלא במים בדיוק עד מחצית הגובה שלו. מהו הנפח של המים בלבד?&rlm;",
        "options": ["12", "24", "6", "18"],
        "correctAnswer": 0,
        "hint": "חשבו את הנפח המלא של המכל, ואז חלקו בשתיים.",
        "solution_steps": [
            { "verbal_explanation": "נחשב קודם את הנפח של המכל כולו כשהוא מלא לגמרי.", "math_expression": "2 \\times 3 = 6" },
            { "verbal_explanation": "נכפול את התוצאה בגובה.", "math_expression": "6 \\times 4 = 24" },
            { "verbal_explanation": "כיוון שהמכל מלא רק חצי, נחלק את הנפח הכולל בשתיים.", "math_expression": "24 \\div 2 = 12" }
        ],
        "final_answer": "12"
    },
    {
        "topic": "geometry_grade_7",
        "subTopic": "נפח תיבה",
        "question_text": "לתיבה יש בסיס עם צלעות של 8 ו-2. הנפח הכולל של התיבה הוא 64. מהו הגובה שלה?&rlm;",
        "options": ["4", "16", "8", "32"],
        "correctAnswer": 0,
        "hint": "חשבו את שטח הבסיס. הנפח מחולק בשטח הבסיס נותן את הגובה.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את השטח של בסיס התיבה.", "math_expression": "8 \\times 2 = 16" },
            { "verbal_explanation": "נחלק את נפח התיבה בשטח הבסיס שחישבנו.", "math_expression": "64 \\div 16" },
            { "verbal_explanation": "נקבל שהגובה של התיבה הוא ארבע.", "math_expression": "4" }
        ],
        "final_answer": "4"
    }
];