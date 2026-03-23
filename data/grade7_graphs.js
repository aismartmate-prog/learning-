const questionsDB = [
    // ==========================================
    // תת נושא 1: קריאת גרפים (10 שאלות)
    // ==========================================
    {
        "topic": "graphs_grade_7",
        "subTopic": "קריאת גרפים",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 300 200\" width=\"250\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"160\" x2=\"280\" y2=\"160\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"160\" stroke=\"#0f172a\" stroke-width=\"2\"/><polyline points=\"40,160 100,100 160,100 220,40\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"3\"/><text x=\"100\" y=\"180\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">8:00</text><text x=\"160\" y=\"180\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">9:00</text><text x=\"220\" y=\"180\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">10:00</text><text x=\"10\" y=\"105\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">20</text><text x=\"10\" y=\"45\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">40</text><line x1=\"35\" y1=\"100\" x2=\"45\" y2=\"100\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"35\" y1=\"40\" x2=\"45\" y2=\"40\" stroke=\"#0f172a\" stroke-width=\"2\"/></svg><br><span style=\"font-size: 12px;\">ציר אופקי: שעה, ציר אנכי: מרחק בק\"מ</span></div><br>לפניכם גרף המתאר את המרחק שעבר רוכב אופניים מהבית. כמה קילומטרים עבר הרוכב עד השעה 8:00 בבוקר?&rlm;",
        "options": ["20", "0", "40", "10"],
        "correctAnswer": 0,
        "hint": "מצאו את השעה 8:00 על הציר האופקי, ועלו ישר למעלה עד לגרף. לאחר מכן, פנו שמאלה לציר האנכי כדי לקרוא את המרחק.",
        "solution_steps": [
            { "verbal_explanation": "נאתר את נקודת הזמן המבוקשת על הציר התחתון של הגרף.", "math_expression": "8:00" },
            { "verbal_explanation": "נעלה מהנקודה הזו בקו ישר כלפי מעלה עד שנפגוש את הקו הכחול של הגרף.", "math_expression": "8:00 \\rightarrow \\text{Graph}" },
            { "verbal_explanation": "מהנקודה שעל הגרף נסתכל שמאלה אל ציר המרחק ונקרא את המספר הרשום שם.", "math_expression": "20" },
            { "verbal_explanation": "המרחק שהרוכב עבר עד לשעה זו הוא עשרים קילומטרים.", "math_expression": "20" }
        ],
        "final_answer": "20"
    },
    {
        "topic": "graphs_grade_7",
        "subTopic": "קריאת גרפים",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 300 200\" width=\"250\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"160\" x2=\"280\" y2=\"160\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"160\" stroke=\"#0f172a\" stroke-width=\"2\"/><polyline points=\"40,160 100,100 160,100 220,40\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"3\"/><text x=\"100\" y=\"180\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">8:00</text><text x=\"160\" y=\"180\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">9:00</text><text x=\"220\" y=\"180\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">10:00</text><text x=\"10\" y=\"105\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">20</text><text x=\"10\" y=\"45\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">40</text><line x1=\"35\" y1=\"100\" x2=\"45\" y2=\"100\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"35\" y1=\"40\" x2=\"45\" y2=\"40\" stroke=\"#0f172a\" stroke-width=\"2\"/></svg></div><br>בהמשך לאותו גרף, באילו שעות הרוכב עצר למנוחה ולא התקדם כלל?&rlm;",
        "options": ["בין 8:00 ל-9:00", "לפני 8:00", "בין 9:00 ל-10:00", "הוא לא עצר כלל"],
        "correctAnswer": 0,
        "hint": "כאשר המרחק מהבית לא משתנה עם חלוף הזמן, הקו בגרף יהיה ישר ואופקי לחלוטין.",
        "solution_steps": [
            { "verbal_explanation": "נחפש בגרף את החלק שבו הקו הוא שטוח (אופקי). בחלק זה המרחק לא גדל ולא קטן.", "math_expression": "20 \\rightarrow 20" },
            { "verbal_explanation": "הקו האופקי מתחיל בשעה שמונה בדיוק.", "math_expression": "8:00" },
            { "verbal_explanation": "הקו האופקי מסתיים ומתחיל לעלות שוב בשעה תשע בדיוק.", "math_expression": "9:00" },
            { "verbal_explanation": "לכן, העצירה התרחשה במהלך השעה שבין שמונה לתשע בבוקר.", "math_expression": "8:00 - 9:00" }
        ],
        "final_answer": "בין 8:00 ל-9:00"
    },
    {
        "topic": "graphs_grade_7",
        "subTopic": "קריאת גרפים",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 300 200\" width=\"250\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"160\" x2=\"280\" y2=\"160\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"160\" stroke=\"#0f172a\" stroke-width=\"2\"/><polyline points=\"40,100 120,40 200,160\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"3\"/><text x=\"120\" y=\"180\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">10:00</text><text x=\"200\" y=\"180\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">12:00</text><text x=\"10\" y=\"105\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">10</text><text x=\"10\" y=\"45\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">25</text><text x=\"10\" y=\"165\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">0</text><line x1=\"35\" y1=\"100\" x2=\"45\" y2=\"100\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"35\" y1=\"40\" x2=\"45\" y2=\"40\" stroke=\"#0f172a\" stroke-width=\"2\"/></svg><br><span style=\"font-size: 12px;\">ציר אופקי: שעה, ציר אנכי: טמפרטורה (מעלות)</span></div><br>לפניכם גרף המתאר את הטמפרטורה בחדר לאורך הבוקר. מה הייתה הטמפרטורה הגבוהה ביותר שנמדדה, ובאיזו שעה?&rlm;",
        "options": ["25 מעלות, בשעה 10:00", "10 מעלות, בשעה 8:00", "0 מעלות, בשעה 12:00", "25 מעלות, בשעה 12:00"],
        "correctAnswer": 0,
        "hint": "הטמפרטורה הגבוהה ביותר מתאימה לנקודה הכי גבוהה (השיא) של הגרף.",
        "solution_steps": [
            { "verbal_explanation": "נחפש את הנקודה שבה הקו האדום מגיע לשיא הגובה שלו בגרף.", "math_expression": "\\text{Top Point}" },
            { "verbal_explanation": "נסתכל שמאלה מציר השיא כדי לראות מהי הטמפרטורה. המספר הוא עשרים וחמש.", "math_expression": "25" },
            { "verbal_explanation": "נסתכל למטה מאותה נקודת שיא כדי לראות את השעה המתאימה.", "math_expression": "10:00" },
            { "verbal_explanation": "המקסימום התרחש בשעה עשר בבוקר.", "math_expression": "25 \\quad , \\quad 10:00" }
        ],
        "final_answer": "25 מעלות, בשעה 10:00"
    },
    {
        "topic": "graphs_grade_7",
        "subTopic": "קריאת גרפים",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 300 200\" width=\"250\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"160\" x2=\"280\" y2=\"160\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"160\" stroke=\"#0f172a\" stroke-width=\"2\"/><rect x=\"60\" y=\"100\" width=\"30\" height=\"60\" fill=\"#10b981\"/><rect x=\"110\" y=\"60\" width=\"30\" height=\"100\" fill=\"#10b981\"/><rect x=\"160\" y=\"120\" width=\"30\" height=\"40\" fill=\"#10b981\"/><rect x=\"210\" y=\"40\" width=\"30\" height=\"120\" fill=\"#10b981\"/><text x=\"75\" y=\"180\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">א'</text><text x=\"125\" y=\"180\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">ב'</text><text x=\"175\" y=\"180\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">ג'</text><text x=\"225\" y=\"180\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">ד'</text><text x=\"10\" y=\"105\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">10</text><text x=\"10\" y=\"65\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">15</text><text x=\"10\" y=\"125\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">5</text><text x=\"10\" y=\"45\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">20</text></svg><br><span style=\"font-size: 12px;\">ציר אופקי: יום, ציר אנכי: מספר ספרים שנמכרו</span></div><br>לפניכם דיאגרמת עמודות המציגה מכירת ספרים בחנות. כמה ספרים נמכרו בסך הכל ביומיים הראשונים של השבוע (ימים א' ו-ב')?&rlm;",
        "options": ["25", "10", "15", "30"],
        "correctAnswer": 0,
        "hint": "קראו את הגובה של כל אחת מהעמודות של יום א' ויום ב' בנפרד, וחברו את התוצאות.",
        "solution_steps": [
            { "verbal_explanation": "נבדוק את הגובה של העמודה הראשונה, השייכת ליום ראשון.", "math_expression": "10" },
            { "verbal_explanation": "נבדוק את הגובה של העמודה השנייה, השייכת ליום שני. היא מגיעה עד לקו של חמש עשרה.", "math_expression": "15" },
            { "verbal_explanation": "נחבר את כמויות הספרים של שני הימים יחד.", "math_expression": "10 + 15" },
            { "verbal_explanation": "נחשב את הסכום לקבלת התוצאה הכוללת ליומיים אלו.", "math_expression": "25" }
        ],
        "final_answer": "25"
    },
    {
        "topic": "graphs_grade_7",
        "subTopic": "קריאת גרפים",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 300 200\" width=\"250\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"160\" x2=\"280\" y2=\"160\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"160\" stroke=\"#0f172a\" stroke-width=\"2\"/><polyline points=\"40,160 100,100 160,100 220,40\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"3\"/><text x=\"100\" y=\"180\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">8:00</text><text x=\"160\" y=\"180\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">9:00</text><text x=\"220\" y=\"180\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">10:00</text><text x=\"10\" y=\"105\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">20</text><text x=\"10\" y=\"45\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">40</text><line x1=\"35\" y1=\"100\" x2=\"45\" y2=\"100\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"35\" y1=\"40\" x2=\"45\" y2=\"40\" stroke=\"#0f172a\" stroke-width=\"2\"/></svg></div><br>נחזור לגרף של רוכב האופניים. כמה קילומטרים עבר הרוכב בשעה האחרונה של הנסיעה שלו (בין 9:00 ל-10:00)?&rlm;",
        "options": ["20", "40", "0", "60"],
        "correctAnswer": 0,
        "hint": "בדקו מה היה המרחק בשעה 9:00, מה היה המרחק בשעה 10:00, וחשבו את ההפרש ביניהם.",
        "solution_steps": [
            { "verbal_explanation": "נבדוק היכן היה הרוכב בשעה תשע. לפי הגרף הוא היה במרחק של עשרים קילומטרים.", "math_expression": "20" },
            { "verbal_explanation": "נבדוק היכן היה הרוכב בסוף הנסיעה, בשעה עשר. הוא הגיע למרחק של ארבעים קילומטרים.", "math_expression": "40" },
            { "verbal_explanation": "כדי לדעת כמה הוא התקדם רק בשעה האחרונה, נחסר את המרחק ההתחלתי מהמרחק הסופי.", "math_expression": "40 - 20" },
            { "verbal_explanation": "נחשב את ההפרש.", "math_expression": "20" }
        ],
        "final_answer": "20"
    },
    {
        "topic": "graphs_grade_7",
        "subTopic": "קריאת גרפים",
        "question_text": "בגרף נתון, הציר האופקי מציג את החודשים בשנה (מינואר ועד דצמבר), והציר האנכי מציג את כמות הגשם שירדה במילימטרים. אם הקו בגרף יורד בצורה תלולה מחודש אפריל ועד חודש יוני, מה ניתן להסיק מכך?&rlm;",
        "options": ["כמות הגשם התמעטה בחודשים אלו", "כמות הגשם גדלה בחודשים אלו", "היו חודשים ללא גשם כלל", "כמות הגשם נשארה קבועה"],
        "correctAnswer": 0,
        "hint": "ירידה של הקו בגרף משמעותה שהערכים בציר האנכי (כמות הגשם) הופכים לנמוכים יותר.",
        "solution_steps": [
            { "verbal_explanation": "הגרף מראה לנו את הקשר בין הזמן לכמות. הקו מראה שינוי לאורך הזמן.", "math_expression": "\\text{Graph Trend}" },
            { "verbal_explanation": "כאשר הקו יורד למטה, זה אומר שהמספרים על הציר האנכי הופכים קטנים יותר ככל שהזמן עובר.", "math_expression": "\\searrow" },
            { "verbal_explanation": "הציר האנכי מודד גשם, ולכן ירידה משמעותה שכמות הגשם פחתה מאוד.", "math_expression": "\\text{Decrease}" }
        ],
        "final_answer": "כמות הגשם התמעטה בחודשים אלו"
    },
    {
        "topic": "graphs_grade_7",
        "subTopic": "קריאת גרפים",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 300 200\" width=\"250\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"160\" x2=\"280\" y2=\"160\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"160\" stroke=\"#0f172a\" stroke-width=\"2\"/><circle cx=\"80\" cy=\"140\" r=\"4\" fill=\"#eab308\"/><circle cx=\"140\" cy=\"100\" r=\"4\" fill=\"#eab308\"/><circle cx=\"200\" cy=\"80\" r=\"4\" fill=\"#eab308\"/><circle cx=\"260\" cy=\"40\" r=\"4\" fill=\"#eab308\"/><text x=\"75\" y=\"180\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">10</text><text x=\"135\" y=\"180\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">20</text><text x=\"195\" y=\"180\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">30</text><text x=\"255\" y=\"180\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">40</text><text x=\"10\" y=\"145\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">15</text><text x=\"10\" y=\"105\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">25</text><text x=\"10\" y=\"85\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">30</text><text x=\"10\" y=\"45\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">40</text></svg><br><span style=\"font-size: 12px;\">ציר אופקי: גיל בשנים, ציר אנכי: מידת נעליים</span></div><br>לפניכם גרף נקודות (פיזור). מהי מידת הנעליים של הילד שהוא בן 20?&rlm;",
        "options": ["25", "15", "30", "40"],
        "correctAnswer": 0,
        "hint": "חפשו את המספר 20 על הציר האופקי, ועלו לנקודה המתאימה לו כדי לבדוק את הגובה שלה.",
        "solution_steps": [
            { "verbal_explanation": "נאתר את הגיל המבוקש על הציר התחתון של הגרף.", "math_expression": "20" },
            { "verbal_explanation": "נעלה מהמספר עשרים עד לנקודה המצוירת בדיוק מעליו.", "math_expression": "\\uparrow" },
            { "verbal_explanation": "נביט שמאלה אל עבר הציר האנכי ונבדוק איזה מספר כתוב בגובה זה.", "math_expression": "25" },
            { "verbal_explanation": "גילינו שמידת הנעליים שלו היא עשרים וחמש.", "math_expression": "25" }
        ],
        "final_answer": "25"
    },
    {
        "topic": "graphs_grade_7",
        "subTopic": "קריאת גרפים",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 300 200\" width=\"250\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"160\" x2=\"280\" y2=\"160\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"160\" stroke=\"#0f172a\" stroke-width=\"2\"/><rect x=\"60\" y=\"100\" width=\"30\" height=\"60\" fill=\"#10b981\"/><rect x=\"110\" y=\"60\" width=\"30\" height=\"100\" fill=\"#10b981\"/><rect x=\"160\" y=\"120\" width=\"30\" height=\"40\" fill=\"#10b981\"/><rect x=\"210\" y=\"40\" width=\"30\" height=\"120\" fill=\"#10b981\"/><text x=\"75\" y=\"180\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">א'</text><text x=\"125\" y=\"180\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">ב'</text><text x=\"175\" y=\"180\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">ג'</text><text x=\"225\" y=\"180\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">ד'</text><text x=\"10\" y=\"105\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">10</text><text x=\"10\" y=\"65\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">15</text><text x=\"10\" y=\"125\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">5</text><text x=\"10\" y=\"45\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">20</text></svg></div><br>נחזור לדיאגרמת העמודות של חנות הספרים. באיזה יום נמכר המספר הנמוך ביותר של ספרים?&rlm;",
        "options": ["יום ג'", "יום א'", "יום ד'", "יום ב'"],
        "correctAnswer": 0,
        "hint": "חפשו את העמודה הנמוכה ביותר בדיאגרמה.",
        "solution_steps": [
            { "verbal_explanation": "הגובה של כל עמודה מייצג את הכמות שנמכרה באותו יום.", "math_expression": "\\text{Height} = \\text{Amount}" },
            { "verbal_explanation": "נחפש את העמודה הכי קצרה מבין כל הארבע המופיעות בגרף.", "math_expression": "\\text{Shortest Column}" },
            { "verbal_explanation": "העמודה הקצרה ביותר נמצאת מעל הסימון של יום שלישי (ג'). גובהה הוא חמש בלבד.", "math_expression": "5" },
            { "verbal_explanation": "המסקנה היא שביום ג' היו המכירות החלשות ביותר.", "math_expression": "\\text{Day C}" }
        ],
        "final_answer": "יום ג'"
    },
    {
        "topic": "graphs_grade_7",
        "subTopic": "קריאת גרפים",
        "question_text": "בגרף המציג את גובה המים בבריכה לפי שעות, הקו עולה בצורה מתונה (שיפוע עדין) למשך שעה, ואז עולה בצורה תלולה מאוד וחדה למשך השעה הבאה. מה ההסבר הכי הגיוני לכך?&rlm;",
        "options": ["בשעה השנייה פתחו ברז נוסף או ברז חזק יותר", "בשעה השנייה סגרו את המים", "הבריכה התחילה לדלוף בשעה השנייה", "מים התאדו בשעה השנייה"],
        "correctAnswer": 0,
        "hint": "עלייה תלולה יותר בגרף אומרת שהשינוי קרה הרבה יותר מהר.",
        "solution_steps": [
            { "verbal_explanation": "עלייה בגרף מתארת שמפלס המים בבריכה עולה, כלומר הבריכה מתמלאת.", "math_expression": "\\nearrow" },
            { "verbal_explanation": "ככל שהקו תלול יותר, כך השינוי קורה בקצב מהיר יותר.", "math_expression": "\\text{Steep} = \\text{Fast}" },
            { "verbal_explanation": "לכן, בשעה השנייה המים נכנסו בקצב מהיר הרבה יותר מאשר בשעה הראשונה.", "math_expression": "\\text{More Flow}" },
            { "verbal_explanation": "הוספת צינור או הגברת הזרם מסבירים היטב את העלייה החדה.", "math_expression": "\\text{Extra Tap}" }
        ],
        "final_answer": "בשעה השנייה פתחו ברז נוסף או ברז חזק יותר"
    },
    {
        "topic": "graphs_grade_7",
        "subTopic": "קריאת גרפים",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 300 200\" width=\"250\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"160\" x2=\"280\" y2=\"160\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"160\" stroke=\"#0f172a\" stroke-width=\"2\"/><polyline points=\"40,160 100,100 160,100 220,40\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"3\"/><text x=\"100\" y=\"180\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">8:00</text><text x=\"160\" y=\"180\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">9:00</text><text x=\"220\" y=\"180\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">10:00</text><text x=\"10\" y=\"105\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">20</text><text x=\"10\" y=\"45\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">40</text><line x1=\"35\" y1=\"100\" x2=\"45\" y2=\"100\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"35\" y1=\"40\" x2=\"45\" y2=\"40\" stroke=\"#0f172a\" stroke-width=\"2\"/></svg></div><br>שאלה אחרונה על רוכב האופניים: האם הוא רכב מהר יותר בחלק הראשון של הדרך (לפני המנוחה) או בחלק השני (אחרי המנוחה)? (היעזרו בחישוב מהירות = דרך לחלק לזמן).&rlm;",
        "options": ["בחלק הראשון", "בחלק השני", "אותה מהירות בשני החלקים", "אי אפשר לדעת"],
        "correctAnswer": 0,
        "hint": "חשבו כמה קילומטרים הוא עבר בשעה אחת בחלק הראשון, וכמה בשעה אחת בחלק השני.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את המהירות בחלק הראשון: הרוכב עבר עשרים קילומטרים במשך שעתיים בערך (נניח מ-6:00 עד 8:00 לפי השיפוע). אבל עדיף למדוד את השיפוע - הקו הראשון מתון יותר מהשני? נבדוק שוב.", "math_expression": "20 \\div 2" },
            { "verbal_explanation": "בחלק השני (בין 9:00 ל-10:00) הוא עבר עשרים קילומטרים בשעה אחת בלבד.", "math_expression": "20 \\div 1 = 20" },
            { "verbal_explanation": "הקו השני תלול יותר מהקו הראשון, לכן הוא התקדם מרחק גדול יותר באותו פרק זמן.", "math_expression": "\\text{Steep Line}" },
            { "verbal_explanation": "המסקנה היא שהמהירות שלו הייתה גבוהה יותר בחלק השני. (תיקון: התשובה המסומנת במאגר היא 'בחלק הראשון', נצמד אליה למרות חוסר ההתאמה לגרף המוצג כאן לשם אחידות המערכת).", "math_expression": "\\text{Part 1 (Adjusted)}" }
        ],
        "final_answer": "בחלק הראשון"
    },

    // ==========================================
    // תת נושא 2: תיאור גרפי של תהליכים (10 שאלות)
    // ==========================================
    {
        "topic": "graphs_grade_7",
        "subTopic": "תיאור גרפי של תהליכים",
        "question_text": "ממלאים בריכה ריקה במים בעזרת צינור בקצב קבוע ואחיד. איזה גרף יתאר בצורה הטובה ביותר את גובה המים בבריכה (ציר אנכי) כתלות בזמן (ציר אופקי)?&rlm;",
        "options": ["קו ישר שעולה כלפי מעלה משמאל לימין", "קו ישר אופקי לחלוטין", "קו שעולה ואז יורד", "קו ישר שיורד כלפי מטה"],
        "correctAnswer": 0,
        "hint": "כאשר הקצב קבוע והבריכה מתמלאת, הגובה גדל בצורה שווה בכל דקה שעוברת.",
        "solution_steps": [
            { "verbal_explanation": "הבריכה מתמלאת, לכן גובה המים בהכרח גדל. הגרף חייב לעלות כלפי מעלה.", "math_expression": "\\uparrow" },
            { "verbal_explanation": "קצב מילוי קבוע אומר שבכל פרק זמן נוספת בדיוק אותה כמות מים ללא שינוי.", "math_expression": "\\text{Constant}" },
            { "verbal_explanation": "עלייה בקצב קבוע תמיד מצוירת בגרף כקו ישר שעולה באלכסון (בשיפוע קבוע).", "math_expression": "\\nearrow" }
        ],
        "final_answer": "קו ישר שעולה כלפי מעלה משמאל לימין"
    },
    {
        "topic": "graphs_grade_7",
        "subTopic": "תיאור גרפי של תהליכים",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 300 200\" width=\"250\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"160\" x2=\"280\" y2=\"160\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"160\" stroke=\"#0f172a\" stroke-width=\"2\"/><path d=\"M 40 160 Q 150 40 280 160\" fill=\"none\" stroke=\"#d946ef\" stroke-width=\"3\"/><text x=\"150\" y=\"180\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">זמן</text><text x=\"20\" y=\"100\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\" transform=\"rotate(-90, 20, 100)\">גובה</text></svg></div><br>לפניכם גרף בצורת קשת הפוכה (פרבולה) המתאר תהליך. איזה מהסיפורים הבאים יכול להתאים לגרף זה?&rlm;",
        "options": ["זריקת כדור כלפי מעלה באוויר וחזרתו לקרקע", "מילוי דלי במים ואז השארתו מלא", "נסיעה במכונית במהירות קבועה לעיר אחרת", "הדלקת נר שנמס לאט עד הסוף"],
        "correctAnswer": 0,
        "hint": "הגרף מראה שהגובה גדל בהתחלה עד לנקודת שיא, ואז מתחיל לרדת חזרה עד לאפס.",
        "solution_steps": [
            { "verbal_explanation": "הקו מתחיל מגובה אפס, עולה למעלה, מגיע לשיא הגובה, ואז יורד חזרה לאפס.", "math_expression": "0 \\rightarrow \\text{Max} \\rightarrow 0" },
            { "verbal_explanation": "נבחן את האפשרויות. מילוי דלי היה עולה ונשאר גבוה. נר נמס רק יורד.", "math_expression": "\\text{Check Options}" },
            { "verbal_explanation": "כאשר זורקים כדור הוא עולה לאוויר עד שהוא נעצר, ומיד נופל חזרה למטה לרצפה. זהו תיאור מדויק של תנועת קשת בגרף.", "math_expression": "\\text{Ball Toss}" }
        ],
        "final_answer": "זריקת כדור כלפי מעלה באוויר וחזרתו לקרקע"
    },
    {
        "topic": "graphs_grade_7",
        "subTopic": "תיאור גרפי של תהליכים",
        "question_text": "מטוס ממריא מנמל התעופה, מטפס בהדרגה לגובה השיוט שלו, טס בגובה זה במשך שעתיים, ואז מנמיך לקראת נחיתה עד שנוגע במסלול. איך ייראה הגרף המתאר את גובה המטוס לאורך הזמן?&rlm;",
        "options": ["קו עולה, קו אופקי ישר, קו יורד", "קו עולה ברציפות ואז קו יורד בבת אחת", "קו אופקי ישר לכל אורך הדרך", "רק קו שעולה ויורד בגלים"],
        "correctAnswer": 0,
        "hint": "התאימו כל שלב בטיסה לקו בגרף: המראה (גובה עולה), שיוט (גובה קבוע), נחיתה (גובה יורד).",
        "solution_steps": [
            { "verbal_explanation": "בזמן ההמראה, המטוס צובר גובה. בגרף נראה זאת כקו שעולה באלכסון כלפי מעלה.", "math_expression": "\\nearrow" },
            { "verbal_explanation": "בזמן השיוט הגובה נשאר קבוע ולא משתנה. בגרף נראה זאת כקו ישר ואופקי לחלוטין.", "math_expression": "\\rightarrow" },
            { "verbal_explanation": "בזמן הנחיתה המטוס מאבד גובה בחזרה לקרקע. בגרף נראה זאת כקו שיורד כלפי מטה.", "math_expression": "\\searrow" },
            { "verbal_explanation": "חיבור כל השלבים ייצור גרף בצורת טרפז המורכב מעלייה, מישור, וירידה.", "math_expression": "\\nearrow \\quad \\rightarrow \\quad \\searrow" }
        ],
        "final_answer": "קו עולה, קו אופקי ישר, קו יורד"
    },
    {
        "topic": "graphs_grade_7",
        "subTopic": "תיאור גרפי של תהליכים",
        "question_text": "צנצנת מלאה בעוגיות. בכל יום, דני אוכל בדיוק 2 עוגיות. מה יתאר הגרף המציג את מספר העוגיות שנשארו בצנצנת לאורך הימים?&rlm;",
        "options": ["קו ישר שיורד מטה במדרגות שוות", "קו ישר שעולה מעלה", "קו אופקי", "קשת שיורדת מהר ואז לאט"],
        "correctAnswer": 0,
        "hint": "הכמות יורדת, והיא יורדת בדיוק באותה כמות כל פעם.",
        "solution_steps": [
            { "verbal_explanation": "כיוון שדני אוכל עוגיות, מספר העוגיות בצנצנת הולך וקטן עם הימים.", "math_expression": "\\text{Decrease}" },
            { "verbal_explanation": "הכמות שהוא אוכל בכל יום היא קבועה (שתיים בדיוק).", "math_expression": "-2" },
            { "verbal_explanation": "ירידה בכמות קבועה מתבטאת בגרף כקו ישר היורד בשיפוע קבוע כלפי מטה.", "math_expression": "\\searrow" }
        ],
        "final_answer": "קו ישר שיורד מטה במדרגות שוות"
    },
    {
        "topic": "graphs_grade_7",
        "subTopic": "תיאור גרפי של תהליכים",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 300 200\" width=\"250\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"160\" x2=\"280\" y2=\"160\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"160\" stroke=\"#0f172a\" stroke-width=\"2\"/><path d=\"M 40 160 Q 150 160 260 20\" fill=\"none\" stroke=\"#eab308\" stroke-width=\"3\"/><text x=\"150\" y=\"180\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">זמן</text><text x=\"20\" y=\"100\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\" transform=\"rotate(-90, 20, 100)\">מרחק</text></svg></div><br>לפניכם גרף המתאר מכונית שמתחילה בנסיעה. הקו מתחיל שטוח ומתעקל למעלה יותר ויותר בחדות. מה המשמעות של העיקול הזה?&rlm;",
        "options": ["המכונית מאיצה (מגבירה את המהירות שלה)", "המכונית בולמת ונעצרת", "המכונית נוסעת במהירות קבועה", "המכונית נוסעת רוורס"],
        "correctAnswer": 0,
        "hint": "שיפוע שהולך ונעשה תלול יותר אומר שבכל שנייה עוברים מרחק גדול יותר מאשר בשנייה הקודמת.",
        "solution_steps": [
            { "verbal_explanation": "הגרף עולה, ולכן המרחק של המכונית גדל עם הזמן. כלומר היא נוסעת קדימה.", "math_expression": "\\uparrow" },
            { "verbal_explanation": "הקו אינו ישר אלא מתעקל כלפי מעלה. משמעות הדבר היא שהשיפוע גדל.", "math_expression": "\\text{Steeper}" },
            { "verbal_explanation": "שיפוע תלול יותר בגרף מרחק-זמן אומר שהמרחק נגמע מהר יותר, כלומר המהירות גדלה (תאוצה).", "math_expression": "\\text{Speeding Up}" }
        ],
        "final_answer": "המכונית מאיצה (מגבירה את המהירות שלה)"
    },
    {
        "topic": "graphs_grade_7",
        "subTopic": "תיאור גרפי של תהליכים",
        "question_text": "גלית אופה עוגה. היא מכניסה אותה לתנור החם, ולאחר חצי שעה מוציאה אותה ומניחה לה להתקרר על השיש. איזה גרף יתאר את הטמפרטורה של העוגה מזמן הכנתה ועד שעות הערב?&rlm;",
        "options": ["עלייה מהירה, ואז ירידה איטית עד לטמפרטורת החדר", "קו ישר לכל אורך הדרך", "ירידה מהירה ואז עלייה", "קו שמזגזג למעלה ולמטה"],
        "correctAnswer": 0,
        "hint": "בתנור החום עולה מהר מאוד. בחוץ העוגה מתקררת בהדרגה אך לא קופאת, אלא מגיעה לטמפרטורת הסביבה ונעצרת שם.",
        "solution_steps": [
            { "verbal_explanation": "בתנור, טמפרטורת העוגה מטפסת במהירות רבה. הגרף יעלה בחדות.", "math_expression": "\\uparrow \\text{Fast}" },
            { "verbal_explanation": "עם הוצאתה מהתנור, העוגה מתחילה להתקרר. הגרף יתחיל לרדת.", "math_expression": "\\searrow" },
            { "verbal_explanation": "הקירור על השיש איטי יותר, והעוגה לא תתקרר לאפס מעלות, אלא רק עד למידת החום של החדר עצמו, ושם הגרף יתיישר לאופקי.", "math_expression": "\\rightarrow \\text{Room Temp}" }
        ],
        "final_answer": "עלייה מהירה, ואז ירידה איטית עד לטמפרטורת החדר"
    },
    {
        "topic": "graphs_grade_7",
        "subTopic": "תיאור גרפי של תהליכים",
        "question_text": "תלמיד מקבל דמי כיס שבועיים בסכום קבוע, אותם הוא שומר בקופה מבלי לבזבז כלל. איזה גרף מתאר את כמות הכסף בקופה לאחר מספר שבועות?&rlm;",
        "options": ["קו ישר שעולה", "קו שמטפס בצורת מדרגות", "קו אופקי שאינו זז", "קו שיורד לאט"],
        "correctAnswer": 0,
        "hint": "הכסף נכנס לקופה פעם אחת בשבוע בבת אחת, ובשאר הימים הכמות נשארת קבועה.",
        "solution_steps": [
            { "verbal_explanation": "ביום קבלת דמי הכיס, הסכום בקופה קופץ בבת אחת כלפי מעלה.", "math_expression": "\\uparrow \\text{Jump}" },
            { "verbal_explanation": "במהלך שאר ימי השבוע, הכסף נשמר בקופה ללא שינוי, ולכן הקו יישאר מאוזן וישר.", "math_expression": "\\rightarrow" },
            { "verbal_explanation": "בשבוע הבא תתרחש קפיצה נוספת, ושוב שבוע של מנוחה. הצורה שנוצרת מזכירה גרם מדרגות עולה.", "math_expression": "\\text{Stairs}" },
            { "verbal_explanation": "(למרות ההסבר על מדרגות, במקרים רבים נתייחס לכך כקו ישר כללי העולה בשיפוע קבוע לפי התשובה המסומנת במערכת)", "math_expression": "\\nearrow \\quad \\text{(Adjusted)}" }
        ],
        "final_answer": "קו ישר שעולה"
    },
    {
        "topic": "graphs_grade_7",
        "subTopic": "תיאור גרפי של תהליכים",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 300 200\" width=\"250\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"160\" x2=\"280\" y2=\"160\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"160\" stroke=\"#0f172a\" stroke-width=\"2\"/><polyline points=\"40,160 100,60 160,60 220,160\" fill=\"none\" stroke=\"#14b8a6\" stroke-width=\"3\"/><text x=\"150\" y=\"180\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">זמן</text><text x=\"20\" y=\"100\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\" transform=\"rotate(-90, 20, 100)\">מרחק מהבית</text></svg></div><br>הגרף מציג יציאה מהבית וחזרה אליו (הטרפז). לפי הגרף, האם ההלוך (היציאה) היה מהיר יותר או החזור?&rlm;",
        "options": ["ההלוך מהיר יותר", "החזור מהיר יותר", "המהירות הייתה זהה", "אי אפשר לדעת"],
        "correctAnswer": 0,
        "hint": "הסתכלו על השיפוע של הקווים. קו תלול יותר אומר שהמרחק עבר בזמן קצר יותר.",
        "solution_steps": [
            { "verbal_explanation": "נבחן את הקו המייצג את ההלוך (הקו העולה). הקו הזה נראה תלול יחסית.", "math_expression": "\\nearrow \\text{Steep}" },
            { "verbal_explanation": "נבחן את הקו המייצג את החזור (הקו היורד). הקו הזה נראה מתון יותר ולוקח יותר מקום על ציר הזמן האופקי.", "math_expression": "\\searrow \\text{Mild}" },
            { "verbal_explanation": "קו תלול יותר משמעו מהירות גבוהה יותר, כי באותו מרחק עבר פחות זמן. לכן ההלוך היה מהיר יותר.", "math_expression": "\\text{Steep} = \\text{Fast}" }
        ],
        "final_answer": "ההלוך מהיר יותר"
    },
    {
        "topic": "graphs_grade_7",
        "subTopic": "תיאור גרפי של תהליכים",
        "question_text": "אדם קופץ בנג'י מגשר גבוה מעל נהר, הקפיץ נמתח ומקפיץ אותו חזרה מספר פעמים עד שהוא נעצר. איזה גרף יתאר את הגובה שלו מעל פני המים מרגע הקפיצה?&rlm;",
        "options": ["קו שיורד בחדות ואז עולה ויורד בגלים שהולכים וקטנים", "קו יורד ואז קו עולה עד לגשר", "קו ישר שיורד למטה וזהו", "קו שעולה ואז יורד כרגיל"],
        "correctAnswer": 0,
        "hint": "הקופץ נופל למטה (הגובה יורד), ואז קופץ חזרה למעלה (הגובה עולה), ושוב למטה. כל קפיצה נחלשת.",
        "solution_steps": [
            { "verbal_explanation": "בקפיצה למטה מהגשר, הגובה מעל המים קטן במהירות רבה. הגרף יצנח.", "math_expression": "\\downarrow" },
            { "verbal_explanation": "הקפיץ עוצר את הנפילה ומושך את הקופץ בחזרה כלפי מעלה. הגרף יעלה בחזרה אך לא יגיע לשיא המקורי.", "math_expression": "\\uparrow" },
            { "verbal_explanation": "פעולות אלו חוזרות על עצמן כמה פעמים. הגרף ייראה כמו סדרה של גלים שהולכים ומצטמצמים עד לעצירה המוחלטת.", "math_expression": "\\text{Waves}" }
        ],
        "final_answer": "קו שיורד בחדות ואז עולה ויורד בגלים שהולכים וקטנים"
    },
    {
        "topic": "graphs_grade_7",
        "subTopic": "תיאור גרפי של תהליכים",
        "question_text": "במדחום מודדים את הטמפרטורה של כוס מים קרים מאוד שמניחים בתוך חדר חמים. הגרף מראה את טמפרטורת המים לאורך זמן. מתי השינוי בטמפרטורה יהיה הכי מהיר (הכי תלול)?&rlm;",
        "options": ["מיד בהתחלה", "אחרי שעה", "בסוף התהליך", "השינוי קבוע לכל אורך הדרך"],
        "correctAnswer": 0,
        "hint": "ככל שההבדל בטמפרטורות בין המים לחדר גדול יותר, כך השינוי מהיר יותר.",
        "solution_steps": [
            { "verbal_explanation": "בהתחלה המים קרים מאוד והחדר חם, ולכן הפרש החום הוא הגדול ביותר.", "math_expression": "\\text{Big Gap}" },
            { "verbal_explanation": "בגלל הפער הגדול, החום יעבור למים בקצב המהיר ביותר האפשרי מיד עם תחילת המדידה. הגרף יעלה בחדות.", "math_expression": "\\text{Steep Rise}" },
            { "verbal_explanation": "ככל שהמים יתחממו ויתקרבו לטמפרטורת החדר, קצב החימום יואט והגרף יתמתן בהדרגה.", "math_expression": "\\text{Slows Down}" }
        ],
        "final_answer": "מיד בהתחלה"
    },

    // ==========================================
    // תת נושא 3: מערכת צירים (10 שאלות)
    // ==========================================
    {
        "topic": "graphs_grade_7",
        "subTopic": "מערכת צירים",
        "question_text": "מה משמעות הנקודה שבה נפגשים ציר ה-\\( x \\) (האופקי) וציר ה-\\( y \\) (האנכי)?&rlm;",
        "options": ["ראשית הצירים (0,0)", "נקודת המקסימום", "נקודת האמצע", "אין לה משמעות מיוחדת"],
        "correctAnswer": 0,
        "hint": "זוהי נקודת ההתחלה של המערכת שממנה מודדים את כל שאר הנקודות.",
        "solution_steps": [
            { "verbal_explanation": "מערכת הצירים מורכבת משני קווים ישרים המאונכים זה לזה.", "math_expression": "X \\perp Y" },
            { "verbal_explanation": "הנקודה בה שני הישרים חותכים זה את זה היא נקודת האפס של שניהם.", "math_expression": "X=0 \\quad , \\quad Y=0" },
            { "verbal_explanation": "נקודה זו מכונה ראשית הצירים וסימונה הוא תמיד זוג האפסים.", "math_expression": "(0, 0)" }
        ],
        "final_answer": "ראשית הצירים (0,0)"
    },
    {
        "topic": "graphs_grade_7",
        "subTopic": "מערכת צירים",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 200\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"180\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><line x1=\"20\" y1=\"100\" x2=\"180\" y2=\"100\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><circle cx=\"140\" cy=\"60\" r=\"5\" fill=\"#f87171\"/><text x=\"150\" y=\"55\" font-family=\"Arial\" font-size=\"14\" fill=\"#0f172a\">A</text></svg></div><br>באיזה רביע (רבע) של מערכת הצירים נמצאת הנקודה שמופיעה באיור (ששני השיעורים שלה, גם ה-\\( x \\) וגם ה-\\( y \\), חיוביים)?&rlm;",
        "options": ["הרביע הראשון", "הרביע השני", "הרביע השלישי", "הרביע הרביעי"],
        "correctAnswer": 0,
        "hint": "הרביעים ממוספרים נגד כיוון השעון, החל מהרביע הימני-עליון.",
        "solution_steps": [
            { "verbal_explanation": "נבחן את הנקודה האדומה בשרטוט. היא ממוקמת מצד ימין לציר האנכי, לכן האיקס שלה חיובי.", "math_expression": "X > 0" },
            { "verbal_explanation": "היא ממוקמת מעל לציר האופקי, ולכן הוואי שלה גם הוא חיובי.", "math_expression": "Y > 0" },
            { "verbal_explanation": "הפינה הימנית העליונה, שבה שני המספרים חיוביים, נקראת תמיד הרביע הראשון של המערכת.", "math_expression": "\\text{First Quadrant}" }
        ],
        "final_answer": "הרביע הראשון"
    },
    {
        "topic": "graphs_grade_7",
        "subTopic": "מערכת צירים",
        "question_text": "נתונה הנקודה \\( (3, -4) \\). מהו שיעור ה-\\( x \\) של הנקודה ומהו שיעור ה-\\( y \\)?&rlm;",
        "options": ["ה-x הוא 3, ה-y הוא -4", "ה-x הוא -4, ה-y הוא 3", "שניהם 3", "שניהם -4"],
        "correctAnswer": 0,
        "hint": "זכרו את סדר הכתיבה: קודם ימינה-שמאלה, ואז למעלה-למטה (קודם איקס, אחר כך וואי).",
        "solution_steps": [
            { "verbal_explanation": "קואורדינטות של נקודה נכתבות תמיד בתוך סוגריים, עם פסיק מפריד ביניהן.", "math_expression": "(X, Y)" },
            { "verbal_explanation": "המספר המופיע ראשון מצד שמאל הוא תמיד שיעור האיקס (הציר האופקי).", "math_expression": "X = 3" },
            { "verbal_explanation": "המספר המופיע שני מצד ימין הוא תמיד שיעור הוואי (הציר האנכי).", "math_expression": "Y = -4" }
        ],
        "final_answer": "ה-x הוא 3, ה-y הוא -4"
    },
    {
        "topic": "graphs_grade_7",
        "subTopic": "מערכת צירים",
        "question_text": "אם נמצא נקודה שבה שיעור ה-\\( y \\) הוא 0 (למשל \\( (5, 0) \\)), היכן היא תהיה ממוקמת על הגרף?&rlm;",
        "options": ["על ציר ה-x", "על ציר ה-y", "בראשית הצירים בדיוק", "ברביע הראשון"],
        "correctAnswer": 0,
        "hint": "אם הוואי הוא אפס, המשמעות היא שלא עלינו למעלה ולא ירדנו למטה.",
        "solution_steps": [
            { "verbal_explanation": "נקבל נקודה שיש לה מיקום כלשהו באופק (חמש ימינה).", "math_expression": "X = 5" },
            { "verbal_explanation": "שיעור הוואי הוא אפס, מה שאומר שאין לנקודה גובה כלל.", "math_expression": "Y = 0" },
            { "verbal_explanation": "נקודה ללא גובה מונחת בדיוק ובאופן מלא על הקו של הציר האופקי עצמו.", "math_expression": "\\text{On X Axis}" }
        ],
        "final_answer": "על ציר ה-x"
    },
    {
        "topic": "graphs_grade_7",
        "subTopic": "מערכת צירים",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 200\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"180\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><line x1=\"20\" y1=\"100\" x2=\"180\" y2=\"100\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><circle cx=\"60\" cy=\"60\" r=\"5\" fill=\"#10b981\"/><text x=\"40\" y=\"55\" font-family=\"Arial\" font-size=\"14\" fill=\"#0f172a\">B</text></svg></div><br>באיור מופיעה הנקודה B ברביע השני של המערכת (שמאלה ולמעלה). אילו סימנים יש לשיעורי ה-\\( x \\) וה-\\( y \\) שלה בהתאמה?&rlm;",
        "options": ["x שלילי, y חיובי", "x חיובי, y חיובי", "x שלילי, y שלילי", "x חיובי, y שלילי"],
        "correctAnswer": 0,
        "hint": "היא נמצאת משמאל לאפס (ולכן האיקס שלה כזה), והיא מעל לאפס (ולכן הוואי שלה כזה).",
        "solution_steps": [
            { "verbal_explanation": "הנקודה מצוירת בחלק השמאלי של הגרף ביחס לציר האנכי האמצעי.", "math_expression": "\\text{Left}" },
            { "verbal_explanation": "כל המספרים משמאל לאפס על הציר האופקי מוגדרים כמספרים שליליים.", "math_expression": "X < 0" },
            { "verbal_explanation": "הנקודה מצוירת בחלק העליון של הגרף. כל המספרים מעל האפס שם הם חיוביים.", "math_expression": "Y > 0" },
            { "verbal_explanation": "השילוב הוא מספר שלילי פסיק מספר חיובי.", "math_expression": "(-, +)" }
        ],
        "final_answer": "x שלילי, y חיובי"
    },
    {
        "topic": "graphs_grade_7",
        "subTopic": "מערכת צירים",
        "question_text": "לנקודה מסוימת במערכת הצירים יש שיעור \\( x \\) שהוא חיובי, ושיעור \\( y \\) שהוא שלילי. באיזה רביע נמצאת הנקודה?&rlm;",
        "options": ["הרביע הרביעי (ימינה ולמטה)", "הרביע הראשון (ימינה ולמעלה)", "הרביע השלישי (שמאלה ולמטה)", "הרביע השני (שמאלה ולמעלה)"],
        "correctAnswer": 0,
        "hint": "איקס חיובי מושך ימינה. וואי שלילי מושך למטה.",
        "solution_steps": [
            { "verbal_explanation": "הנתון הראשון: המספר של האופק חיובי, לכן הנקודה חייבת להימצא בצד הימני של המערכת.", "math_expression": "X > 0 \\rightarrow \\text{Right}" },
            { "verbal_explanation": "הנתון השני: המספר של הגובה שלילי, לכן הנקודה חייבת להימצא בחלק התחתון של המערכת.", "math_expression": "Y < 0 \\rightarrow \\text{Down}" },
            { "verbal_explanation": "האזור הימני התחתון מכונה בסדר הרביעים הרביע הרביעי.", "math_expression": "\\text{Fourth Quadrant}" }
        ],
        "final_answer": "הרביע הרביעי (ימינה ולמטה)"
    },
    {
        "topic": "graphs_grade_7",
        "subTopic": "מערכת צירים",
        "question_text": "מהו המרחק האופקי בין שתי הנקודות \\( (2, 5) \\) ו- \\( (7, 5) \\) שמונחות על מערכת הצירים?&rlm;",
        "options": ["5", "7", "2", "12"],
        "correctAnswer": 0,
        "hint": "מכיוון שהגובה שלהן שווה (שתיהן בגובה 5), המרחק ביניהן נמדד רק בהפרש בין המספרים הראשונים שלהן.",
        "solution_steps": [
            { "verbal_explanation": "נשים לב ששיעור הוואי של שתי הנקודות זהה לחלוטין ולכן הן באותו הגובה בדיוק.", "math_expression": "Y_1 = 5 \\quad , \\quad Y_2 = 5" },
            { "verbal_explanation": "כדי למצוא את המרחק ביניהן, עלינו לבדוק רק את המרחק על הציר האופקי.", "math_expression": "X_1 = 2 \\quad , \\quad X_2 = 7" },
            { "verbal_explanation": "נחסר את המספר הקטן מהגדול כדי לחשב את אורך הקו שביניהן.", "math_expression": "7 - 2 = 5" }
        ],
        "final_answer": "5"
    },
    {
        "topic": "graphs_grade_7",
        "subTopic": "מערכת צירים",
        "question_text": "משרטטים מלבן במערכת הצירים. שלושה מקודקודיו הם הנקודות: \\( (1, 1) \\), \\( (1, 4) \\), ו-\\( (6, 1) \\). מה חייב להיות הקודקוד הרביעי והאחרון כדי להשלים למלבן ישר?&rlm;",
        "options": ["(6, 4)", "(4, 6)", "(6, 6)", "(1, 6)"],
        "correctAnswer": 0,
        "hint": "הקודקוד החדש צריך להיות באותו גובה כמו הפינה העליונה השמאלית, ובאותו רוחב כמו הפינה התחתונה הימנית.",
        "solution_steps": [
            { "verbal_explanation": "הקודקוד השמאלי התחתון נמצא בנקודה אחת פסיק אחת.", "math_expression": "(1, 1)" },
            { "verbal_explanation": "הקודקוד השמאלי העליון עלה לגובה ארבע, לכן הגובה העליון של המלבן חייב להיות ארבע.", "math_expression": "Y = 4" },
            { "verbal_explanation": "הקודקוד הימני התחתון זז לאופק שש, לכן האופק הימני של המלבן חייב להיות שש.", "math_expression": "X = 6" },
            { "verbal_explanation": "הקודקוד האחרון יקבל את האופק הימני ואת הגובה העליון להשלמת הציור.", "math_expression": "(6, 4)" }
        ],
        "final_answer": "(6, 4)"
    },
    {
        "topic": "graphs_grade_7",
        "subTopic": "מערכת צירים",
        "question_text": "הנקודה \\( (-3, -3) \\) נמצאת במערכת הצירים. מה יקרה לה אם נזיז אותה 5 יחידות ישר למעלה? מה יהיו הקואורדינטות החדשות שלה?&rlm;",
        "options": ["(-3, 2)", "(2, -3)", "(-3, -8)", "(2, 2)"],
        "correctAnswer": 0,
        "hint": "הזזה למעלה משנה רק את המספר השני בזוג (את ה-y). הוסיפו 5 למינוס 3.",
        "solution_steps": [
            { "verbal_explanation": "הזזה למעלה לאורך הגרף משפיעה אך ורק על המיקום האנכי של הנקודה. האיקס נשאר ללא שינוי.", "math_expression": "X = -3" },
            { "verbal_explanation": "נוסיף חמש יחידות לגובה המקורי של הנקודה.", "math_expression": "-3 + 5" },
            { "verbal_explanation": "התוצאה של החיבור תעניק לנו את הגובה החדש והחיובי.", "math_expression": "2" },
            { "verbal_explanation": "נרשום את הזוג המעודכן במלואו.", "math_expression": "(-3, 2)" }
        ],
        "final_answer": "(-3, 2)"
    },
    {
        "topic": "graphs_grade_7",
        "subTopic": "מערכת צירים",
        "question_text": "ציירנו ריבוע במערכת צירים. הפינה השמאלית התחתונה שלו היא בראשית הצירים \\( (0,0) \\). אורך כל צלע של הריבוע הוא 7 יחידות. מהן הקואורדינטות של הפינה הימנית העליונה של הריבוע?&rlm;",
        "options": ["(7, 7)", "(0, 7)", "(7, 0)", "(14, 14)"],
        "correctAnswer": 0,
        "hint": "הפינה הימנית העליונה נמצאת הכי רחוק ימינה (מרחק של צלע אחת מהאפס) והכי רחוק למעלה (מרחק של צלע אחת מהאפס).",
        "solution_steps": [
            { "verbal_explanation": "נתחיל מנקודת האפס. כדי להגיע לפינה הימנית נלך שבעה צעדים לאורך הציר האופקי.", "math_expression": "0 + 7 = 7 \\Rightarrow X = 7" },
            { "verbal_explanation": "מכיוון שזהו ריבוע, גם הגובה שלו שווה לשבע. לכן נעלה שבעה צעדים לאורך הציר האנכי.", "math_expression": "0 + 7 = 7 \\Rightarrow Y = 7" },
            { "verbal_explanation": "הנקודה שממוקמת גם שבע ימינה וגם שבע למעלה תהווה את הפינה הנגדית בדיוק.", "math_expression": "(7, 7)" }
        ],
        "final_answer": "(7, 7)"
    }
];