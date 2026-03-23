const questionsDB = [
    // ==========================================
    // תת נושא 1: תכונות המלבן (10 שאלות)
    // ==========================================
    {
        "topic": "quadrilaterals_grade_7",
        "subTopic": "תכונות המלבן",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 100\" width=\"150\" height=\"80\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"20\" width=\"160\" height=\"60\" fill=\"#e2e8f0\" stroke=\"#0f172a\" stroke-width=\"2\"/><polyline points=\"20,35 35,35 35,20\" fill=\"none\" stroke=\"#f87171\" stroke-width=\"1.5\"/><polyline points=\"180,35 165,35 165,20\" fill=\"none\" stroke=\"#f87171\" stroke-width=\"1.5\"/><polyline points=\"180,65 165,65 165,80\" fill=\"none\" stroke=\"#f87171\" stroke-width=\"1.5\"/><polyline points=\"20,65 35,65 35,80\" fill=\"none\" stroke=\"#f87171\" stroke-width=\"1.5\"/></svg></div><br>מהו סכום כל הזוויות הפנימיות במלבן?&rlm;",
        "options": ["360", "180", "90", "720"],
        "correctAnswer": 0,
        "hint": "למלבן יש ארבע פינות, ובכל אחת מהן יש זווית ישרה. כפלו את גודל הזווית הישרה בארבע.",
        "solution_steps": [
            { "verbal_explanation": "התכונה המרכזית של מלבן היא שיש לו ארבע זוויות שכולן ישרות.", "math_expression": "4" },
            { "verbal_explanation": "כל זווית ישרה שווה בדיוק לתשעים מעלות.", "math_expression": "90^{\\circ}" },
            { "verbal_explanation": "כדי למצוא את סכום כל הזוויות, נכפול את גודל הזווית הישרה בארבע.", "math_expression": "90 \\times 4" },
            { "verbal_explanation": "הסכום הכולל הוא שלוש מאות ושישים מעלות.", "math_expression": "360" }
        ],
        "final_answer": "360"
    },
    {
        "topic": "quadrilaterals_grade_7",
        "subTopic": "תכונות המלבן",
        "question_text": "במלבן, אורך אלכסון אחד הוא 14 סנטימטרים. האלכסונים נחתכים בנקודה באמצע המלבן. מהו האורך של חצי מהאלכסון השני?&rlm;",
        "options": ["7", "14", "28", "3.5"],
        "correctAnswer": 0,
        "hint": "במלבן, שני האלכסונים שווים זה לזה באורכם, והם חוצים זה את זה לשני חצאים שווים.",
        "solution_steps": [
            { "verbal_explanation": "לפי תכונות המלבן, שני האלכסונים שווים באורכם. לכן, גם האלכסון השני הוא באורך ארבע עשרה.", "math_expression": "14" },
            { "verbal_explanation": "תכונה נוספת היא שהאלכסונים חוצים זה את זה, כלומר הם מתחלקים לשניים במדויק.", "math_expression": "14 \\div 2" },
            { "verbal_explanation": "נבצע את פעולת החילוק של האורך הכולל לשתיים.", "math_expression": "7" },
            { "verbal_explanation": "מצאנו שאורך מחצית האלכסון הוא שבעה סנטימטרים.", "math_expression": "7" }
        ],
        "final_answer": "7"
    },
    {
        "topic": "quadrilaterals_grade_7",
        "subTopic": "תכונות המלבן",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 120\" width=\"150\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"20\" width=\"160\" height=\"80\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"20\" y1=\"100\" x2=\"180\" y2=\"20\" stroke=\"#3b82f6\" stroke-width=\"1.5\"/><path d=\"M 40 100 A 20 20 0 0 0 35 90\" fill=\"none\" stroke=\"#f87171\" stroke-width=\"2\"/><text x=\"45\" y=\"95\" font-family=\"Arial\" font-size=\"12\" fill=\"#f87171\">30°</text></svg></div><br>במלבן מועבר אלכסון. הזווית שנוצרת בין האלכסון לבין הצלע התחתונה של המלבן היא 30 מעלות. מהי הזווית שנוצרת בין אותו אלכסון לבין הצלע השמאלית הסמוכה?&rlm;",
        "options": ["60", "90", "30", "150"],
        "correctAnswer": 0,
        "hint": "בפינת המלבן יש תמיד 90 מעלות. האלכסון פשוט מחלק את ה-90 מעלות האלו לשתי זוויות קטנות יותר.",
        "solution_steps": [
            { "verbal_explanation": "הפינה של המלבן מורכבת מזווית ישרה אחת שלמה.", "math_expression": "90^{\\circ}" },
            { "verbal_explanation": "האלכסון מחלק את הזווית הזו לשני חלקים שסכומם יחד הוא תשעים.", "math_expression": "90^{\\circ}" },
            { "verbal_explanation": "חלק אחד הוא שלושים מעלות. נחסר אותו מתוך התשעים.", "math_expression": "90 - 30" },
            { "verbal_explanation": "ההפרש, שישים מעלות, הוא גודל החלק השני של הפינה.", "math_expression": "60^{\\circ}" }
        ],
        "final_answer": "60"
    },
    {
        "topic": "quadrilaterals_grade_7",
        "subTopic": "תכונות המלבן",
        "question_text": "כמה צירי סימטריה (קווי קיפול שיוצרים שני חצאים חופפים בדיוק) יש למלבן רגיל שאינו ריבוע?&rlm;",
        "options": ["2", "4", "0", "1"],
        "correctAnswer": 0,
        "hint": "נסו לדמיין קיפול של דף נייר מלבני. אפשר לקפל אותו לחצי לאורך, ואפשר לרוחב.",
        "solution_steps": [
            { "verbal_explanation": "ניתן למתוח קו סימטריה אחד בדיוק באמצע שתי הצלעות הארוכות (קיפול לאורך).", "math_expression": "1" },
            { "verbal_explanation": "ניתן למתוח קו סימטריה שני בדיוק באמצע שתי הצלעות הקצרות (קיפול לרוחב).", "math_expression": "1 + 1 = 2" },
            { "verbal_explanation": "במלבן רגיל, קיפול באלכסון לא יוצר חפיפה מושלמת ולכן אינו ציר סימטריה.", "math_expression": "0" },
            { "verbal_explanation": "בסך הכל קיימים במלבן שני צירי סימטריה.", "math_expression": "2" }
        ],
        "final_answer": "2"
    },
    {
        "topic": "quadrilaterals_grade_7",
        "subTopic": "תכונות המלבן",
        "question_text": "האם כל ריבוע הוא גם מלבן? והאם כל מלבן הוא גם ריבוע?&rlm;",
        "options": ["כל ריבוע הוא מלבן, אבל לא כל מלבן הוא ריבוע", "כל מלבן הוא ריבוע, אבל לא כל ריבוע הוא מלבן", "הם אותה צורה בדיוק ואין הבדל", "אף ריבוע הוא לא מלבן"],
        "correctAnswer": 0,
        "hint": "מלבן דורש רק שכל הזוויות יהיו ישרות (90 מעלות). ריבוע מקיים זאת, אך דורש תנאי נוסף של צלעות שוות.",
        "solution_steps": [
            { "verbal_explanation": "ההגדרה של מלבן היא שכל ארבע זוויותיו שוות לתשעים מעלות.", "math_expression": "90^{\\circ}" },
            { "verbal_explanation": "בריבוע יש ארבע זוויות של תשעים מעלות, לכן הוא עומד בהגדרת המלבן ונחשב למלבן בעצמו.", "math_expression": "90^{\\circ} = 90^{\\circ}" },
            { "verbal_explanation": "הגדרת הריבוע מחייבת גם שוויון מוחלט בין כל צלעותיו.", "math_expression": "1 = 1" },
            { "verbal_explanation": "מלבן רגיל מורכב מצלעות באורכים שונים ולכן אינו עומד בהגדרת הריבוע.", "math_expression": "1 \\neq 2" }
        ],
        "final_answer": "כל ריבוע הוא מלבן, אבל לא כל מלבן הוא ריבוע"
    },
    {
        "topic": "quadrilaterals_grade_7",
        "subTopic": "תכונות המלבן",
        "question_text": "משרטטים את שני האלכסונים בתוך מלבן, והם מחלקים אותו לארבעה משולשים. איזה סוג משולשים נוצרים?&rlm;",
        "options": ["משולשים שווי שוקיים", "משולשים שווי צלעות", "משולשים ישרי זווית", "משולשים שוני צלעות"],
        "correctAnswer": 0,
        "hint": "האלכסונים שווים באורכם וחוצים זה את זה לחצאים שווים. מה זה אומר על הצלעות של המשולשים שנוצרים?",
        "solution_steps": [
            { "verbal_explanation": "האלכסונים במלבן שווים זה לזה באורכם המלא.", "math_expression": "1 = 1" },
            { "verbal_explanation": "נקודת המפגש מחלקת כל אלכסון בדיוק לשניים.", "math_expression": "1 \\div 2 = 0.5" },
            { "verbal_explanation": "לכן, כל ארבעת החצאים המרכיבים את מרכז המלבן שווים זה לזה.", "math_expression": "0.5 = 0.5" },
            { "verbal_explanation": "כל משולש שנוצר מכיל שני חצאים כאלו שהם שווים, מה שהופך אותו למשולש בעל שתי שוקיים שוות.", "math_expression": "2" }
        ],
        "final_answer": "משולשים שווי שוקיים"
    },
    {
        "topic": "quadrilaterals_grade_7",
        "subTopic": "תכונות המלבן",
        "question_text": "היקף של מלבן הוא 40 סנטימטרים. אורך אחת הצלעות הוא 12 סנטימטרים. מהו אורך הצלע הסמוכה לה?&rlm;",
        "options": ["8", "16", "28", "14"],
        "correctAnswer": 0,
        "hint": "ההיקף הוא סכום שתי צלעות ארוכות ושתי צלעות קצרות. חלקו את ההיקף בחצי כדי למצוא את סכום האורך והרוחב יחד.",
        "solution_steps": [
            { "verbal_explanation": "חצי מההיקף מציג את הסכום של צלע אחת ארוכה וצלע אחת קצרה יחד.", "math_expression": "40 \\div 2 = 20" },
            { "verbal_explanation": "סכום הצלעות הסמוכות הוא עשרים. צלע אחת שווה לשנים עשר.", "math_expression": "12" },
            { "verbal_explanation": "נחסר מתוך העשרים את השנים עשר כדי לגלות את האורך של הצלע השנייה.", "math_expression": "20 - 12 = 8" },
            { "verbal_explanation": "אורך הצלע הסמוכה הוא שמונה סנטימטרים.", "math_expression": "8" }
        ],
        "final_answer": "8"
    },
    {
        "topic": "quadrilaterals_grade_7",
        "subTopic": "תכונות המלבן",
        "question_text": "נתון מרובע שבו הצלעות הנגדיות שוות זו לזו (כלומר, העליונה שווה לתחתונה והימנית שווה לשמאלית). האם ניתן לומר בוודאות שהמרובע הזה הוא מלבן?&rlm;",
        "options": ["לא, הוא יכול להיות גם מקבילית רגילה", "כן, זה מספיק כדי להיות מלבן", "לא, הוא חייב להיות מעוין", "כן, אבל רק אם הוא ריבוע"],
        "correctAnswer": 0,
        "hint": "צלעות נגדיות שוות הן תכונה של מקבילית. מלבן הוא סוג של מקבילית, אבל צריך גם תנאי לגבי הזוויות.",
        "solution_steps": [
            { "verbal_explanation": "כאשר צלעות נגדיות שוות, המרובע עונה להגדרה של מקבילית.", "math_expression": "1 = 1" },
            { "verbal_explanation": "במקבילית רגילה הזוויות לא חייבות להיות בנות תשעים מעלות.", "math_expression": "180^{\\circ}" },
            { "verbal_explanation": "מלבן מחייב באופן מוחלט שכל ארבע הזוויות יהיו שוות לתשעים מעלות.", "math_expression": "90^{\\circ}" },
            { "verbal_explanation": "ללא מידע על הזוויות, אי אפשר להיות בטוחים שזהו מלבן.", "math_expression": "0" }
        ],
        "final_answer": "לא, הוא יכול להיות גם מקבילית רגילה"
    },
    {
        "topic": "quadrilaterals_grade_7",
        "subTopic": "תכונות המלבן",
        "question_text": "שני אלכסוני המלבן נחתכים. הזווית הקהה שנוצרת בין שני האלכסונים במרכז המלבן היא בת 120 מעלות. מהי הזווית החדה שנוצרת ביניהם באותו הצומת?&rlm;",
        "options": ["60", "90", "30", "120"],
        "correctAnswer": 0,
        "hint": "שני האלכסונים הם קווים ישרים. זוויות שנמצאות זו ליד זו על אותו קו ישר הן זוויות צמודות המשלימות ל-180.",
        "solution_steps": [
            { "verbal_explanation": "זווית קהה וזווית חדה שנוצרות זו לצד זו על אלכסון מרכיבות קו ישר אחד.", "math_expression": "180^{\\circ}" },
            { "verbal_explanation": "קווים ישרים שווים תמיד למאה ושמונים מעלות יחד.", "math_expression": "180^{\\circ}" },
            { "verbal_explanation": "נחסר מתוך מאה ושמונים את הזווית שאנו מכירים.", "math_expression": "180 - 120 = 60" },
            { "verbal_explanation": "הזווית החדה הצמודה שווה לשישים מעלות.", "math_expression": "60^{\\circ}" }
        ],
        "final_answer": "60"
    },
    {
        "topic": "quadrilaterals_grade_7",
        "subTopic": "תכונות המלבן",
        "question_text": "אלכסון אחד במלבן מחלק אותו לשני משולשים. מה ניתן לומר על השטח של שני המשולשים הללו?&rlm;",
        "options": ["הם שווים בדיוק זה לזה בשטחם", "המשולש התחתון גדול יותר", "המשולש העליון גדול יותר", "השטח שלהם משתנה"],
        "correctAnswer": 0,
        "hint": "נסו לדמיין גזירה של מלבן לאורך האלכסון. האם ניתן להניח את שני החלקים אחד על השני כך שיחפפו?",
        "solution_steps": [
            { "verbal_explanation": "האלכסון חותך את המלבן ויוצר שני משולשים.", "math_expression": "2" },
            { "verbal_explanation": "כל צלע במשולש הראשון זהה לחלוטין לצלע המקבילה לה במשולש השני.", "math_expression": "1 = 1" },
            { "verbal_explanation": "מכיוון שהמשולשים זהים לחלוטין בכל ממדיהם, הם חופפים.", "math_expression": "1 = 1" },
            { "verbal_explanation": "לכן, השטחים של שניהם שווים זה לזה באופן מוחלט.", "math_expression": "1 = 1" }
        ],
        "final_answer": "הם שווים בדיוק זה לזה בשטחם"
    },

    // ==========================================
    // תת נושא 2: תכונות המקבילית (10 שאלות)
    // ==========================================
    {
        "topic": "quadrilaterals_grade_7",
        "subTopic": "תכונות המקבילית",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 120\" width=\"150\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"40,100 180,100 160,20 20,20\" fill=\"#e2e8f0\" stroke=\"#0f172a\" stroke-width=\"2\"/><path d=\"M 40 100 A 20 20 0 0 0 54 86\" fill=\"none\" stroke=\"#f87171\" stroke-width=\"2\"/><text x=\"55\" y=\"95\" font-family=\"Arial\" font-size=\"14\" fill=\"#f87171\">110°</text><path d=\"M 160 20 A 20 20 0 0 0 146 34\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"2\"/><text x=\"130\" y=\"40\" font-family=\"Arial\" font-size=\"14\" fill=\"#3b82f6\">?</text></svg></div><br>במקבילית נתונה זווית קהה בגודל 110 מעלות. מהו הגודל של הזווית הנמצאת בדיוק מולה (הזווית הנגדית)?&rlm;",
        "options": ["110", "70", "180", "55"],
        "correctAnswer": 0,
        "hint": "אחת התכונות החשובות של מקבילית היא שכל שתי זוויות שנמצאות אחת מול השנייה - שוות זו לזו.",
        "solution_steps": [
            { "verbal_explanation": "מבקשים מאיתנו למצוא את גודלה של הזווית שנמצאת מול הזווית הנתונה.", "math_expression": "180^{\\circ}" },
            { "verbal_explanation": "הכלל המרכזי במקבילית קובע שכל זוג זוויות נגדיות הוא שווה.", "math_expression": "110^{\\circ} = 110^{\\circ}" },
            { "verbal_explanation": "הזווית הנתונה היא מאה ועשר, ולכן הזווית מולה שווה גם כן למאה ועשר.", "math_expression": "110^{\\circ}" },
            { "verbal_explanation": "התוצאה זהה לנתון.", "math_expression": "110^{\\circ}" }
        ],
        "final_answer": "110"
    },
    {
        "topic": "quadrilaterals_grade_7",
        "subTopic": "תכונות המקבילית",
        "question_text": "במקבילית, זווית אחת היא בת 65 מעלות. מהו הגודל של הזווית הסמוכה לה (זו שנמצאת לידה, על אותה הצלע)?&rlm;",
        "options": ["115", "65", "90", "180"],
        "correctAnswer": 0,
        "hint": "הצלעות במקבילית הן מקבילות. לכן, זוויות סמוכות משלימות יחד למאה ושמונים מעלות.",
        "solution_steps": [
            { "verbal_explanation": "בכל מקבילית, סכום של שתי זוויות סמוכות (על אותה הצלע) הוא קבוע.", "math_expression": "180^{\\circ}" },
            { "verbal_explanation": "הסכום הקבוע הוא תמיד מאה ושמונים מעלות.", "math_expression": "180^{\\circ}" },
            { "verbal_explanation": "נחסר מתוך מאה ושמונים את הזווית הנתונה כדי למצוא את הזווית הסמוכה.", "math_expression": "180 - 65 = 115" },
            { "verbal_explanation": "גודל הזווית הסמוכה הוא מאה וחמש עשרה מעלות.", "math_expression": "115^{\\circ}" }
        ],
        "final_answer": "115"
    },
    {
        "topic": "quadrilaterals_grade_7",
        "subTopic": "תכונות המקבילית",
        "question_text": "היקף מקבילית הוא 30 סנטימטרים. אורך אחת מהצלעות הוא 9 סנטימטרים. מהו האורך של הצלע הסמוכה אליה?&rlm;",
        "options": ["6", "12", "21", "10.5"],
        "correctAnswer": 0,
        "hint": "במקבילית, הצלעות הנגדיות שוות. לכן יש שתי צלעות באורך 9. חסרו אותן מההיקף, וחלקו את השארית לשתיים.",
        "solution_steps": [
            { "verbal_explanation": "במקבילית יש שתי צלעות נגדיות השוות לתשע כל אחת. נחבר אותן.", "math_expression": "9 + 9 = 18" },
            { "verbal_explanation": "נחסר את הסכום הזה מההיקף הכולל כדי למצוא מה נשאר לשתי הצלעות האחרות.", "math_expression": "30 - 18 = 12" },
            { "verbal_explanation": "שתי הצלעות הנותרות שוות גם הן זו לזו. נחלק את השארית לשתיים.", "math_expression": "12 \\div 2 = 6" },
            { "verbal_explanation": "אורך הצלע הסמוכה הוא שישה סנטימטרים.", "math_expression": "6" }
        ],
        "final_answer": "6"
    },
    {
        "topic": "quadrilaterals_grade_7",
        "subTopic": "תכונות המקבילית",
        "question_text": "שני אלכסוני המקבילית נחתכים. האלכסון הארוך הוא באורך 20 ס''מ, והאלכסון הקצר הוא באורך 14 ס''מ. מהו האורך של חצי מהאלכסון הקצר (מהפינה ועד נקודת המפגש)?&rlm;",
        "options": ["7", "10", "14", "34"],
        "correctAnswer": 0,
        "hint": "האלכסונים במקבילית תמיד חוצים זה את זה בדיוק באמצע.",
        "solution_steps": [
            { "verbal_explanation": "נקודת החיתוך של האלכסונים במקבילית חוצה כל אחד מהם לשני חצאים שווים.", "math_expression": "2" },
            { "verbal_explanation": "אורכו המלא של האלכסון הקצר הוא ארבע עשרה.", "math_expression": "14" },
            { "verbal_explanation": "נחלק את האורך הזה לשתיים כדי למצוא את החצי.", "math_expression": "14 \\div 2 = 7" },
            { "verbal_explanation": "התשובה היא שבעה סנטימטרים.", "math_expression": "7" }
        ],
        "final_answer": "7"
    },
    {
        "topic": "quadrilaterals_grade_7",
        "subTopic": "תכונות המקבילית",
        "question_text": "סכום של שתי זוויות נגדיות במקבילית הוא 200 מעלות. מהו הסכום של שתי הזוויות הנגדיות האחרות במקבילית?&rlm;",
        "options": ["160", "200", "80", "100"],
        "correctAnswer": 0,
        "hint": "סכום כל ארבע הזוויות במרובע הוא 360 מעלות. חסרו את ה-200 מהסכום הכולל.",
        "solution_steps": [
            { "verbal_explanation": "מקבילית היא מרובע, ולכן סכום כל ארבע הזוויות שבה הוא תמיד שלוש מאות ושישים מעלות.", "math_expression": "360^{\\circ}" },
            { "verbal_explanation": "אנו יודעים שהסכום של שתיים מתוך הארבע הוא מאתיים.", "math_expression": "200^{\\circ}" },
            { "verbal_explanation": "נחסר מאתיים משלוש מאות ושישים כדי למצוא את הסכום שנותר לשתיים האחרות.", "math_expression": "360 - 200 = 160" },
            { "verbal_explanation": "הסכום של שתי הזוויות האחרות הוא מאה ושישים.", "math_expression": "160^{\\circ}" }
        ],
        "final_answer": "160"
    },
    {
        "topic": "quadrilaterals_grade_7",
        "subTopic": "תכונות המקבילית",
        "question_text": "אם במקבילית אחת הזוויות היא בדיוק 90 מעלות, איזה משפט נכון בהכרח לגבי מקבילית זו?&rlm;",
        "options": ["כל הזוויות שלה הן 90 מעלות, ולכן היא מלבן", "הזוויות האחרות יכולות להיות חדות או קהות", "רק שתי זוויות נגדיות יהיו 90 מעלות", "מקבילית לא יכולה להיות עם זווית של 90 מעלות"],
        "correctAnswer": 0,
        "hint": "אם זווית אחת היא 90, הזווית הנגדית לה גם היא 90. הזווית הסמוכה משלימה אותה למאה ושמונים.",
        "solution_steps": [
            { "verbal_explanation": "במקבילית, הזווית הנגדית שווה לזווית הנתונה, לכן היא שווה לתשעים.", "math_expression": "90^{\\circ}" },
            { "verbal_explanation": "הזווית הסמוכה משלימה למאה ושמונים, לכן מאה ושמונים פחות תשעים שווה תשעים.", "math_expression": "180 - 90 = 90^{\\circ}" },
            { "verbal_explanation": "מכאן שכל ארבע הזוויות חייבות להיות תשעים מעלות.", "math_expression": "90^{\\circ}, 90^{\\circ}, 90^{\\circ}, 90^{\\circ}" },
            { "verbal_explanation": "מקבילית עם ארבע זוויות ישרות היא מלבן.", "math_expression": "90^{\\circ}" }
        ],
        "final_answer": "כל הזוויות שלה הן 90 מעלות, ולכן היא מלבן"
    },
    {
        "topic": "quadrilaterals_grade_7",
        "subTopic": "תכונות המקבילית",
        "question_text": "האם שני האלכסונים במקבילית רגילה (שאינה מלבן או מעוין) תמיד שווים זה לזה באורכם?&rlm;",
        "options": ["לא, הם לרוב באורכים שונים", "כן, הם שווים תמיד", "כן, אבל רק אם הבסיס גדול מהגובה", "לא, אין אלכסונים במקבילית"],
        "correctAnswer": 0,
        "hint": "במקבילית נטויה, המרחק בין הפינות הקרובות קטן מהמרחק בין הפינות הרחוקות.",
        "solution_steps": [
            { "verbal_explanation": "במלבן האלכסונים שווים באורכם.", "math_expression": "1 = 1" },
            { "verbal_explanation": "אך במקבילית רגילה שאינה ישרה, צורה נטויה גורמת לאלכסון אחד להתארך ולאלכסון השני להתקצר.", "math_expression": "1 \\neq 2" },
            { "verbal_explanation": "לכן, אורך האלכסונים אינו שווה.", "math_expression": "1 \\neq 2" },
            { "verbal_explanation": "התשובה היא שהם לרוב באורכים שונים.", "math_expression": "0" }
        ],
        "final_answer": "לא, הם לרוב באורכים שונים"
    },
    {
        "topic": "quadrilaterals_grade_7",
        "subTopic": "תכונות המקבילית",
        "question_text": "מה משמעות המילה 'מקבילית'? מה מקביל למה?&rlm;",
        "options": ["כל זוג צלעות נגדיות מקבילות זו לזו", "כל הזוויות מקבילות", "כל הצלעות הסמוכות מקבילות זו לזו", "האלכסונים מקבילים זה לזה"],
        "correctAnswer": 0,
        "hint": "מקבילית מאופיינת על ידי קווים שלא נפגשים לעולם בשני הכיוונים.",
        "solution_steps": [
            { "verbal_explanation": "קווים מקבילים הם קווים שלעולם לא חותכים זה את זה.", "math_expression": "\\parallel" },
            { "verbal_explanation": "במקבילית, הצלע העליונה מקבילה תמיד לצלע התחתונה שמולה.", "math_expression": "\\parallel" },
            { "verbal_explanation": "בנוסף, הצלע השמאלית מקבילה תמיד לצלע הימנית שמולה.", "math_expression": "\\parallel" },
            { "verbal_explanation": "מכאן נובע שכל זוג של צלעות נגדיות הוא מקביל.", "math_expression": "\\parallel" }
        ],
        "final_answer": "כל זוג צלעות נגדיות מקבילות זו לזו"
    },
    {
        "topic": "quadrilaterals_grade_7",
        "subTopic": "תכונות המקבילית",
        "question_text": "האם מעוין נחשב גם הוא למקבילית?&rlm;",
        "options": ["כן, כי הצלעות הנגדיות שלו מקבילות", "לא, כי למעוין יש צלעות שוות ולמקבילית לא", "כן, אבל רק אם הוא ריבוע", "לא, אין קשר בין הצורות"],
        "correctAnswer": 0,
        "hint": "כל צורה שמקיימת את הכלל הבסיסי של צלעות נגדיות מקבילות נחשבת למקבילית.",
        "solution_steps": [
            { "verbal_explanation": "ההגדרה הבסיסית של מקבילית דורשת שתי זוגות של צלעות נגדיות מקבילות.", "math_expression": "4" },
            { "verbal_explanation": "במעוין כל ארבע הצלעות שוות, אך גם בו הצלעות הנגדיות מקבילות זו לזו לחלוטין.", "math_expression": "\\parallel" },
            { "verbal_explanation": "מאחר שהוא מקיים את ההגדרה, המעוין הוא סוג פרטי של מקבילית.", "math_expression": "\\parallel" },
            { "verbal_explanation": "לכן התשובה היא חיובית.", "math_expression": "1 = 1" }
        ],
        "final_answer": "כן, כי הצלעות הנגדיות שלו מקבילות"
    },
    {
        "topic": "quadrilaterals_grade_7",
        "subTopic": "תכונות המקבילית",
        "question_text": "במקבילית אחת הזוויות היא 45 מעלות. מה ניתן לומר על שלוש הזוויות האחרות?&rlm;",
        "options": ["אחת תהיה 45 ושתיים יהיו 135", "כולן יהיו 45 מעלות", "אחת תהיה 135 והשאר 90", "שתיים יהיו 45 ואחת תהיה 90"],
        "correctAnswer": 0,
        "hint": "הזווית הנגדית שווה לזווית הנתונה. הזוויות הסמוכות משלימות אותה ל-180 מעלות.",
        "solution_steps": [
            { "verbal_explanation": "הזווית הנגדית לזווית הנתונה שווה לה. לכן יש לנו עוד זווית של ארבעים וחמש.", "math_expression": "45^{\\circ}" },
            { "verbal_explanation": "נחשב את הזווית הסמוכה על ידי חיסור ממאה ושמונים.", "math_expression": "180 - 45 = 135" },
            { "verbal_explanation": "הזווית הנגדית לזווית הסמוכה שווה גם היא למאה שלושים וחמש.", "math_expression": "135^{\\circ}" },
            { "verbal_explanation": "סך הכל קיבלנו זווית אחת נוספת של ארבעים וחמש ושתי זוויות של מאה שלושים וחמש.", "math_expression": "45^{\\circ} , 135^{\\circ} , 135^{\\circ}" }
        ],
        "final_answer": "אחת תהיה 45 ושתיים יהיו 135"
    },

    // ==========================================
    // תת נושא 3: חישובי שטחים (10 שאלות)
    // ==========================================
    {
        "topic": "quadrilaterals_grade_7",
        "subTopic": "חישובי שטחים",
        "question_text": "אורך מלבן הוא 12 סנטימטרים ורוחבו 5 סנטימטרים. מהו שטח המלבן?&rlm;",
        "options": ["60", "34", "17", "48"],
        "correctAnswer": 0,
        "hint": "במלבן, השטח מחושב על ידי כפל של האורך ברוחב.",
        "solution_steps": [
            { "verbal_explanation": "הנוסחה לחישוב השטח היא כפל של האורך ברוחב.", "math_expression": "12 \\times 5" },
            { "verbal_explanation": "נציב את הנתונים לתוך תרגיל כפל.", "math_expression": "12 \\times 5 = 60" },
            { "verbal_explanation": "נבצע את המכפלה ונקבל את השטח.", "math_expression": "60" },
            { "verbal_explanation": "שטח המלבן הוא שישים.", "math_expression": "60" }
        ],
        "final_answer": "60"
    },
    {
        "topic": "quadrilaterals_grade_7",
        "subTopic": "חישובי שטחים",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 120\" width=\"150\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"40,100 180,100 160,20 20,20\" fill=\"#e2e8f0\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"160\" y1=\"20\" x2=\"160\" y2=\"100\" stroke=\"#f87171\" stroke-width=\"1.5\" stroke-dasharray=\"4\"/><text x=\"100\" y=\"115\" font-family=\"Arial\" font-size=\"14\" fill=\"#0f172a\">10</text><text x=\"165\" y=\"65\" font-family=\"Arial\" font-size=\"14\" fill=\"#f87171\">6</text></svg></div><br>במקבילית, אורך הבסיס הוא 10 מטרים, ואורך הגובה אליו הוא 6 מטרים. מהו שטח המקבילית?&rlm;",
        "options": ["60", "30", "32", "16"],
        "correctAnswer": 0,
        "hint": "שטח מקבילית מחושב על ידי כפל הבסיס בגובה. לא מחלקים בשתיים.",
        "solution_steps": [
            { "verbal_explanation": "הנוסחה לשטח של מקבילית היא להכפיל את הבסיס בגובה שיורד אליו.", "math_expression": "10 \\times 6" },
            { "verbal_explanation": "נכתוב את המספרים כתרגיל כפל.", "math_expression": "10 \\times 6 = 60" },
            { "verbal_explanation": "נבצע את פעולת הכפל.", "math_expression": "60" },
            { "verbal_explanation": "שטח המקבילית הוא שישים.", "math_expression": "60" }
        ],
        "final_answer": "60"
    },
    {
        "topic": "quadrilaterals_grade_7",
        "subTopic": "חישובי שטחים",
        "question_text": "שטחה של מקבילית הוא 50 סמ''ר. אורך הבסיס שלה הוא 5 ס''מ. מהו אורך הגובה היורד לאותו בסיס?&rlm;",
        "options": ["10", "250", "25", "45"],
        "correctAnswer": 0,
        "hint": "מכיוון שהבסיס כפול הגובה שווה לשטח, השתמשו בחילוק כדי למצוא את הגובה החסר.",
        "solution_steps": [
            { "verbal_explanation": "אנו יודעים שהבסיס כפול הגובה נותן חמישים. לכן נבצע את הפעולה ההפוכה.", "math_expression": "50 \\div 5" },
            { "verbal_explanation": "נחלק את השטח באורך הבסיס הידוע כדי למצוא את גורם הכפל שחסר.", "math_expression": "50 \\div 5 = 10" },
            { "verbal_explanation": "נחשב את תוצאת החילוק ונקבל עשר.", "math_expression": "10" },
            { "verbal_explanation": "אורך הגובה הוא עשרה סנטימטרים.", "math_expression": "10" }
        ],
        "final_answer": "10"
    },
    {
        "topic": "quadrilaterals_grade_7",
        "subTopic": "חישובי שטחים",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 150\" width=\"150\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"20\" width=\"160\" height=\"100\" fill=\"#e2e8f0\" stroke=\"#0f172a\" stroke-width=\"2\"/><rect x=\"40\" y=\"40\" width=\"60\" height=\"40\" fill=\"white\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><text x=\"100\" y=\"15\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">10</text><text x=\"5\" y=\"70\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">8</text><text x=\"70\" y=\"35\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">4</text><text x=\"25\" y=\"60\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">3</text></svg></div><br>יש לכם חתיכת קרטון מלבנית במידות 10 על 8. גזרתם מתוכה מלבן קטן במידות 4 על 3. מהו השטח של הקרטון שנשאר?&rlm;",
        "options": ["68", "80", "12", "56"],
        "correctAnswer": 0,
        "hint": "חשבו את שטח המלבן הגדול. חשבו את שטח המלבן הקטן. חסרו את הקטן מהגדול.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את השטח של המלבן הגדול והשלם.", "math_expression": "10 \\times 8 = 80" },
            { "verbal_explanation": "נחשב את השטח של המלבן הקטן שנגזר והוצא.", "math_expression": "4 \\times 3 = 12" },
            { "verbal_explanation": "נחסר את השטח הנגזר מתוך השטח השלם כדי לדעת כמה נשאר.", "math_expression": "80 - 12 = 68" },
            { "verbal_explanation": "השטח שנותר הוא שישים ושמונה.", "math_expression": "68" }
        ],
        "final_answer": "68"
    },
    {
        "topic": "quadrilaterals_grade_7",
        "subTopic": "חישובי שטחים",
        "question_text": "למלבן ולמקבילית יש בדיוק את אותו אורך בסיס (5 ס''מ) ובדיוק את אותו גובה (4 ס''מ). למי מהם יש שטח גדול יותר?&rlm;",
        "options": ["השטחים שלהם שווים בדיוק", "למלבן יש שטח גדול יותר", "למקבילית יש שטח גדול יותר", "אי אפשר לדעת ללא הזוויות"],
        "correctAnswer": 0,
        "hint": "בדקו מהי נוסחת השטח של כל אחת מהצורות הללו. האם הן שונות?",
        "solution_steps": [
            { "verbal_explanation": "נחשב את השטח של המלבן על פי הנוסחה של אורך כפול רוחב (ברוחב אנו מתכוונים לגובה).", "math_expression": "5 \\times 4 = 20" },
            { "verbal_explanation": "נחשב את השטח של המקבילית על פי הנוסחה של בסיס כפול גובה.", "math_expression": "5 \\times 4 = 20" },
            { "verbal_explanation": "הנוסחאות זהות וגם המספרים זהים. נשווה את התוצאות.", "math_expression": "20 = 20" },
            { "verbal_explanation": "השטחים שווים בדיוק זה לזה.", "math_expression": "20" }
        ],
        "final_answer": "השטחים שלהם שווים בדיוק"
    },
    {
        "topic": "quadrilaterals_grade_7",
        "subTopic": "חישובי שטחים",
        "question_text": "מציירים אלכסון בתוך מלבן שמידותיו 6 על 4. האלכסון יוצר שני משולשים. מהו השטח של אחד מהמשולשים הללו?&rlm;",
        "options": ["12", "24", "10", "48"],
        "correctAnswer": 0,
        "hint": "האלכסון חוצה את שטח המלבן לשניים. חשבו את השטח של המלבן ואז חלקו בשתיים.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את השטח הכולל של המלבן המקורי.", "math_expression": "6 \\times 4 = 24" },
            { "verbal_explanation": "אלכסון מחלק מלבן לשני משולשים חופפים בעלי שטח זהה.", "math_expression": "24 \\div 2" },
            { "verbal_explanation": "נבצע את פעולת החילוק לשתיים כדי למצוא את השטח של משולש אחד.", "math_expression": "12" },
            { "verbal_explanation": "השטח של כל משולש הוא שנים עשר.", "math_expression": "12" }
        ],
        "final_answer": "12"
    },
    {
        "topic": "quadrilaterals_grade_7",
        "subTopic": "חישובי שטחים",
        "question_text": "הגובה במקבילית יורד מחוצה לה אל המשך הבסיס. אורך הבסיס הוא 7 ואורך הגובה החיצוני הוא 3. מהו שטח המקבילית?&rlm;",
        "options": ["21", "10.5", "10", "24"],
        "correctAnswer": 0,
        "hint": "מיקומו של הגובה (בפנים או בחוץ) אינו משנה את נוסחת השטח.",
        "solution_steps": [
            { "verbal_explanation": "הגובה של מקבילית יכול להיות מסורטט מחוץ לה, אבל הנוסחה לחישוב השטח לא משתנה.", "math_expression": "7 \\times 3" },
            { "verbal_explanation": "אנו עדיין כופלים את הבסיס בגובה הרלוונטי.", "math_expression": "7 \\times 3 = 21" },
            { "verbal_explanation": "נחשב את המכפלה.", "math_expression": "21" },
            { "verbal_explanation": "השטח הוא עשרים ואחת.", "math_expression": "21" }
        ],
        "final_answer": "21"
    },
    {
        "topic": "quadrilaterals_grade_7",
        "subTopic": "חישובי שטחים",
        "question_text": "יש לכם מלבן. אם תגדילו גם את האורך שלו פי 2 וגם את הרוחב שלו פי 2, פי כמה יגדל השטח של המלבן החדש?&rlm;",
        "options": ["פי 4", "פי 2", "פי 6", "פי 8"],
        "correctAnswer": 0,
        "hint": "השטח הוא כפל האורך ברוחב. כל אחד מהם גדל פי שתיים, אז מכפילים את השטח פי שתיים ואז שוב פי שתיים.",
        "solution_steps": [
            { "verbal_explanation": "נניח לשם ההדגמה מלבן שמידותיו אחד על אחד, שטחו הוא אחד.", "math_expression": "1 \\times 1 = 1" },
            { "verbal_explanation": "נגדיל את המידות פי שתיים, למידות של שתיים על שתיים. נחשב את השטח החדש.", "math_expression": "2 \\times 2 = 4" },
            { "verbal_explanation": "נבדוק פי כמה השטח החדש גדול מהשטח הישן.", "math_expression": "4 \\div 1 = 4" },
            { "verbal_explanation": "מכאן שהשטח גדל פי ארבע.", "math_expression": "4" }
        ],
        "final_answer": "פי 4"
    },
    {
        "topic": "quadrilaterals_grade_7",
        "subTopic": "חישובי שטחים",
        "question_text": "שטחו של מלבן הוא 48 סמ''ר. אורך אחת הצלעות שלו הוא 6 ס''מ. מהו ההיקף של המלבן הזה?&rlm;",
        "options": ["28", "14", "54", "48"],
        "correctAnswer": 0,
        "hint": "לפני שתחשבו את ההיקף, גלו את אורך הצלע השנייה של המלבן בעזרת נתון השטח.",
        "solution_steps": [
            { "verbal_explanation": "נחלק את השטח באחת הצלעות כדי למצוא את אורכה של הצלע השנייה (הרוחב).", "math_expression": "48 \\div 6 = 8" },
            { "verbal_explanation": "עכשיו יש לנו את שתי הצלעות: שש ושמונה.", "math_expression": "6 , 8" },
            { "verbal_explanation": "נחשב את ההיקף על ידי חיבור פעמיים אורך ופעמיים רוחב.", "math_expression": "6 + 6 + 8 + 8" },
            { "verbal_explanation": "נחבר את הכל לקבלת סכום ההיקף המלא.", "math_expression": "12 + 16 = 28" }
        ],
        "final_answer": "28"
    },
    {
        "topic": "quadrilaterals_grade_7",
        "subTopic": "חישובי שטחים",
        "question_text": "מקבילית מורכבת משני משולשים חופפים (זהים) המחוברים יחד. אם שטחו של אחד המשולשים הוא 15 סמ''ר, מהו שטחה של המקבילית כולה?&rlm;",
        "options": ["30", "15", "60", "7.5"],
        "correctAnswer": 0,
        "hint": "המקבילית מורכבת משני חלקים בדיוק. חברו את השטח של שני החלקים.",
        "solution_steps": [
            { "verbal_explanation": "הצורה כולה בנויה משני חלקים זהים בגודלם.", "math_expression": "2" },
            { "verbal_explanation": "שטחו של חלק אחד בלבד הוא חמש עשרה.", "math_expression": "15" },
            { "verbal_explanation": "נכפול את השטח של חלק אחד בשתיים כדי לקבל את שטח הצורה השלמה.", "math_expression": "15 \\times 2 = 30" },
            { "verbal_explanation": "שטח המקבילית הוא שלושים.", "math_expression": "30" }
        ],
        "final_answer": "30"
    }
];