const questionsDB = [
    // ==============================================================
    // --- תת נושא 1: זוויות צמודות וקודקודיות (15 שאלות) ---
    // ==============================================================
    {
        "id": 1,
        "subTopic": "זוויות צמודות וקודקודיות",
        "difficulty": "Low",
        "question_text": "שתי זוויות נקראות <strong>זוויות צמודות</strong> אם יש להן שוק משותפת ושתי השוקיים האחרות נמצאות על קו ישר אחד. מהו סכום של שתי זוויות צמודות?<br><div style='text-align:center; margin:15px 0;'><svg width='200' height='80'><line x1='10' y1='60' x2='190' y2='60' stroke='#1e293b' stroke-width='2'/><line x1='100' y1='60' x2='150' y2='10' stroke='#1e293b' stroke-width='2'/><text x='130' y='55' font-size='12'>1</text><text x='70' y='55' font-size='12'>2</text></svg></div>",
        "hint": "חשבו על זווית שטוחה שנוצרת על קו ישר. כמה מעלות יש בחצי מעגל?",
        "solution_steps": [
            { "verbal_explanation": "זוויות צמודות משלימות יחד קו ישר אחד.", "math_expression": "זווית שטוחה" },
            { "verbal_explanation": "גודלה של זווית שטוחה בגיאומטריה הוא תמיד 180 מעלות.", "math_expression": "סכום = 180°" }
        ],
        "final_answer": "180 מעלות",
        "options": ["90 מעלות", "180 מעלות", "360 מעלות", "זה תלוי באורך הקו"],
        "correctAnswer": 1
    },
    {
        "id": 2,
        "subTopic": "זוויות צמודות וקודקודיות",
        "difficulty": "Low",
        "question_text": "שתי זוויות נקראות <strong>זוויות קודקודיות</strong> אם הן נמצאות אחת מול השנייה בנקודת חיתוך של שני ישרים. מהו הקשר ביניהן?<br><div style='text-align:center; margin:15px 0;'><svg width='150' height='100'><line x1='20' y1='20' x2='130' y2='80' stroke='#1e293b' stroke-width='2'/><line x1='20' y1='80' x2='130' y2='20' stroke='#1e293b' stroke-width='2'/><text x='72' y='35' font-size='12' fill='#b09151'>א</text><text x='72' y='75' font-size='12' fill='#b09151'>ב</text></svg></div>",
        "hint": "זוויות קודקודיות נמצאות 'גב אל גב'. האם הן נראות לכם זהות בגודלן?",
        "solution_steps": [
            { "verbal_explanation": "על פי המשפט הגיאומטרי, זוויות קודקודיות הנוצרות מחיתוך ישרים הן שוות זו לזו.", "math_expression": "זווית א = זווית ב" }
        ],
        "final_answer": "הן שוות זו לזו.",
        "options": ["סכומן הוא 180°", "סכומן הוא 90°", "הן שוות זו לזו.", "הן תמיד חדות"],
        "correctAnswer": 2
    },
    {
        "id": 3,
        "subTopic": "זוויות צמודות וקודקודיות",
        "difficulty": "Medium",
        "question_text": "נתונות שתי זוויות צמודות. ידוע שזווית אחת היא בת <strong>70°</strong>. מהו גודלה של הזווית הצמודה לה?",
        "hint": "השתמשו בכלל שסכום זוויות צמודות הוא 180 מעלות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את סכום שתי הזוויות כ-180 מעלות.", "math_expression": "זווית א + זווית ב = 180°" },
            { "verbal_explanation": "שלב 2: נחסיר את הזווית הידועה (70) מהסכום הכולל.", "math_expression": "180° - 70° = 110°" }
        ],
        "final_answer": "110 מעלות",
        "options": ["70°", "110°", "20°", "180°"],
        "correctAnswer": 1
    },
    {
        "id": 4,
        "subTopic": "זוויות צמודות וקודקודיות",
        "difficulty": "Medium",
        "question_text": "שני ישרים נחתכים ויוצרים זוויות קודקודיות. אם זווית אחת היא בת <strong>125°</strong>, מהו גודלה של הזווית הקודקודים לה?",
        "hint": "זכרו את התכונה של זוויות קודקודיות.",
        "solution_steps": [
            { "verbal_explanation": "זוויות קודקודיות שוות זו לזו בגודלן תמיד.", "math_expression": "125° = 125°" }
        ],
        "final_answer": "125 מעלות",
        "options": ["125°", "55°", "180°", "90°"],
        "correctAnswer": 0
    },
    {
        "id": 5,
        "subTopic": "זוויות צמודות וקודקודיות",
        "difficulty": "High",
        "question_text": "נתונות שתי זוויות צמודות. ידוע שאחת מהן <strong>גדולה פי 4</strong> מהשנייה. מהו גודלה של הזווית הקטנה?",
        "hint": "סמנו את הזווית הקטנה ב-x. לכן הגדולה היא 4x. חברו אותן והשוו ל-180.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר משתנים. זווית קטנה = x, זווית גדולה = 4x.", "math_expression": "x , 4x" },
            { "verbal_explanation": "שלב 2: נבנה משוואה על פי הכלל של זוויות צמודות.", "math_expression": "x + 4x = 180°" },
            { "verbal_explanation": "שלב 3: נכנס איברים (5x = 180) ונחלק ב-5.", "math_expression": "x = 180° / 5 = 36°" }
        ],
        "final_answer": "36 מעלות",
        "options": ["45°", "36°", "144°", "30°"],
        "correctAnswer": 1
    },
    {
        "id": 6,
        "subTopic": "זוויות צמודות וקודקודיות",
        "difficulty": "Medium",
        "question_text": "שני ישרים נחתכים ויוצרים ארבע זוויות. אם זווית אחת היא <strong>50°</strong>, מה יהיה גודלה של הזווית ש<strong>צמודה</strong> לה?",
        "hint": "שימו לב להבדל בין קודקודית (ממול) לצמודה (ליד).",
        "solution_steps": [
            { "verbal_explanation": "זוויות צמודות נמצאות על אותו קו ישר וסכומן 180 מעלות.", "math_expression": "180° - 50° = 130°" }
        ],
        "final_answer": "130 מעלות",
        "options": ["50°", "130°", "40°", "90°"],
        "correctAnswer": 1
    },
    {
        "id": 7,
        "subTopic": "זוויות צמודות וקודקודיות",
        "difficulty": "High",
        "question_text": "שתי זוויות קודקודיות מיוצגות על ידי הביטויים: <strong>2x + 10</strong> ו- <strong>3x - 20</strong>. מהו ערכו של x?",
        "hint": "השוו בין שני הביטויים כי זוויות קודקודיות שוות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבנה משוואת שוויון בין שתי הזוויות הקודקודיות.", "math_expression": "2x + 10 = 3x - 20" },
            { "verbal_explanation": "שלב 2: נעביר אגפים. נחסיר 2x משני הצדדים ונוסיף 20 לשני הצדדים.", "math_expression": "10 + 20 = 3x - 2x" },
            { "verbal_explanation": "שלב 3: נמצא את ערכו של הנעלם.", "math_expression": "x = 30" }
        ],
        "final_answer": "30",
        "options": ["10", "30", "50", "15"],
        "correctAnswer": 1
    },
    {
        "id": 8,
        "subTopic": "זוויות צמודות וקודקודיות",
        "difficulty": "Low",
        "question_text": "שלוש זוויות יושבות על קו ישר אחד בנקודה מסוימת. אם שתיים מהן הן <strong>40°</strong> ו- <strong>60°</strong>, מה גודל הזווית השלישית?",
        "hint": "סכום כל הזוויות על קו ישר בנקודה אחת הוא תמיד 180.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחבר את שתי הזוויות הידועות.", "math_expression": "40° + 60° = 100°" },
            { "verbal_explanation": "שלב 2: נחסיר את הסכום מהזווית השטוחה (180).", "math_expression": "180° - 100° = 80°" }
        ],
        "final_answer": "80 מעלות",
        "options": ["80°", "100°", "90°", "40°"],
        "correctAnswer": 0
    },
    {
        "id": 9,
        "subTopic": "זוויות צמודות וקודקודיות",
        "difficulty": "Medium",
        "question_text": "נתונות שתי זוויות צמודות. אם אחת מהן היא <strong>זווית ישרה (90°)</strong>, מה ניתן לומר על השנייה?",
        "hint": "חשבו כמה חסר ל-90 כדי להגיע ל-180.",
        "solution_steps": [
            { "verbal_explanation": "סכום זוויות צמודות הוא 180 מעלות. אם אחת היא 90, השנייה היא: 180 פחות 90.", "math_expression": "180° - 90° = 90°" }
        ],
        "final_answer": "היא גם זווית ישרה.",
        "options": ["היא זווית חדה.", "היא זווית קהה.", "היא גם זווית ישרה.", "היא זווית שטוחה."],
        "correctAnswer": 2
    },
    {
        "id": 10,
        "subTopic": "זוויות צמודות וקודקודיות",
        "difficulty": "High",
        "question_text": "זווית אחת גדולה מהזווית ה<strong>צמודה</strong> לה ב- <strong>40°</strong>. מה גודל הזווית הגדולה?",
        "hint": "סמנו קטנה ב-x. הגדולה תהיה x + 40. חברו ל-180.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר: קטנה = x, גדולה = x + 40.", "math_expression": "x , x + 40" },
            { "verbal_explanation": "שלב 2: נחבר ונשווה ל-180.", "math_expression": "x + x + 40 = 180°" },
            { "verbal_explanation": "שלב 3: נפתור: 2x = 140, לכן x = 70.", "math_expression": "x = 70°" },
            { "verbal_explanation": "שלב 4: נמצא את הזווית הגדולה המבוקשת.", "math_expression": "70° + 40° = 110°" }
        ],
        "final_answer": "110 מעלות",
        "options": ["70°", "110°", "140°", "100°"],
        "correctAnswer": 1
    },
    {
        "id": 11,
        "subTopic": "זוויות צמודות וקודקודיות",
        "difficulty": "Low",
        "question_text": "האם ייתכן ששתי זוויות קודקודיות יהיו גם זוויות צמודות?",
        "hint": "חשבו האם הן יכולות להיות 'ממול' וגם 'ליד' בו זמנית.",
        "solution_steps": [
            { "verbal_explanation": "זוויות קודקודיות הן תמיד אחת מול השנייה. זוויות צמודות הן אחת ליד השנייה.", "math_expression": "מבנה גיאומטרי" },
            { "verbal_explanation": "המקרה היחיד בו הן יקיימו את אותם תנאים מספריים הוא אם כל הזוויות בנקודה הן 90 מעלות, אך ההגדרות נשארות נפרדות.", "math_expression": "הגדרות שונות" }
        ],
        "final_answer": "לא, אלו הגדרות שונות לחלוטין.",
        "options": ["כן, תמיד.", "לא, אלו הגדרות שונות לחלוטין.", "רק אם הזוויות הן 45°.", "רק בריבוע."],
        "correctAnswer": 1
    },
    {
        "id": 12,
        "subTopic": "זוויות צמודות וקודקודיות",
        "difficulty": "Medium",
        "question_text": "בין שני ישרים נחתכים, סכום של שתי זוויות קודקודיות הוא <strong>160°</strong>. מה גודל של אחת מהן?",
        "hint": "מכיוון שהן קודקודיות, הן שוות זו לזו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: זוויות קודקודיות שוות ביניהן.", "math_expression": "זווית 1 = זווית 2" },
            { "verbal_explanation": "שלב 2: אם סכומן 160, נחלק את הסכום ל-2 חלקים שווים.", "math_expression": "160° / 2 = 80°" }
        ],
        "final_answer": "80 מעלות",
        "options": ["160°", "80°", "100°", "40°"],
        "correctAnswer": 1
    },
    {
        "id": 13,
        "subTopic": "זוויות צמודות וקודקודיות",
        "difficulty": "High",
        "question_text": "ישר חוצה זווית מחלק את אחת מזוויות הקודקוד לשתי זוויות של <strong>25°</strong> כל אחת. מה גודל הזווית הקודקודית כולה?",
        "hint": "מצאו קודם את הזווית השלמה שנחצתה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: אם חצי זווית הוא 25, הזווית השלמה היא 50.", "math_expression": "25° * 2 = 50°" },
            { "verbal_explanation": "שלב 2: הזווית הקודקודית לה שווה לה בדיוק.", "math_expression": "50°" }
        ],
        "final_answer": "50 מעלות",
        "options": ["25°", "50°", "100°", "130°"],
        "correctAnswer": 1
    },
    {
        "id": 14,
        "subTopic": "זוויות צמודות וקודקודיות",
        "difficulty": "Low",
        "question_text": "כיצד נקראת זווית שגודלה הוא בדיוק <strong>180°</strong>?",
        "hint": "זוהי זווית שנראית כמו קו ישר.",
        "solution_steps": [
            { "verbal_explanation": "זווית של 180 מעלות מייצגת חצי סיבוב מלא ונקראת בשפה המקצועית זווית שטוחה.", "math_expression": "180° = שטוחה" }
        ],
        "final_answer": "זווית שטוחה.",
        "options": ["זווית ישרה", "זווית שטוחה", "זווית מלאה", "זווית חדה"],
        "correctAnswer": 1
    },
    {
        "id": 15,
        "subTopic": "זוויות צמודות וקודקודיות",
        "difficulty": "High",
        "question_text": "שלושה ישרים נפגשים בנקודה אחת. זוג זוויות קודקודיות אחד הוא בן <strong>30°</strong> כל אחת. זוג שני הוא בן <strong>40°</strong> כל אחת. מה גודל הזוויות בזוג השלישי?",
        "hint": "סכום כל הזוויות סביב נקודה (סיבוב מלא) הוא 360 מעלות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את סכום ארבע הזוויות הידועות (שני זוגות קודקודיים).", "math_expression": "(30° * 2) + (40° * 2) = 60° + 80° = 140°" },
            { "verbal_explanation": "שלב 2: נחסיר את הסכום מ-360 מעלות (סיבוב מלא).", "math_expression": "360° - 140° = 220°" },
            { "verbal_explanation": "שלב 3: היתרה שייכת לזוג הקודקודי האחרון, נחלק ב-2.", "math_expression": "220° / 2 = 110°" }
        ],
        "final_answer": "110 מעלות",
        "options": ["110°", "70°", "140°", "220°"],
        "correctAnswer": 0
    },

    // ==============================================================
    // --- תת נושא 2: זוויות בין מקבילים - מושגי יסוד (15 שאלות) ---
    // ==============================================================
    {
        "id": 16,
        "subTopic": "זוויות בין מקבילים",
        "difficulty": "Low",
        "question_text": "נתונים שני ישרים מקבילים (a || b) וישר שלישי החותך אותם. כיצד נקראות זוויות שנמצאות באותו מיקום יחסי בכל אחת מהצמתים?<br><div style='text-align:center; margin:15px 0;'><svg width='200' height='100'><line x1='10' y1='30' x2='190' y2='30' stroke='#1e293b' stroke-width='2'/><line x1='10' y1='70' x2='190' y2='70' stroke='#1e293b' stroke-width='2'/><line x1='50' y1='10' x2='150' y2='90' stroke='#b09151' stroke-width='2'/><circle cx='85' cy='30' r='3' fill='red'/><circle cx='135' cy='70' r='3' fill='red'/></svg></div>",
        "hint": "הן 'מתאימות' אחת לשנייה במיקום שלהן (למשל, שתיהן למעלה ומימין).",
        "solution_steps": [
            { "verbal_explanation": "זוויות שנמצאות במיקום זהה ביחס לישרים המקבילים ולישר החותך נקראות זוויות מתאימות.", "math_expression": "מתאימות" }
        ],
        "final_answer": "זוויות מתאימות.",
        "options": ["זוויות מתחלפות", "זוויות מתאימות", "זוויות צמודות", "זוויות קודקודיות"],
        "correctAnswer": 1
    },
    {
        "id": 17,
        "subTopic": "זוויות בין מקבילים",
        "difficulty": "Low",
        "question_text": "כיצד נקראות זוויות שנמצאות משני צידי הישר החותך ובקומות שונות (אחת למעלה ואחת למטה)?<br><div style='text-align:center; margin:15px 0;'><svg width='200' height='100'><line x1='10' y1='30' x2='190' y2='30' stroke='#1e293b' stroke-width='2'/><line x1='10' y1='70' x2='190' y2='70' stroke='#1e293b' stroke-width='2'/><line x1='50' y1='10' x2='150' y2='90' stroke='#b09151' stroke-width='2'/><circle cx='110' cy='30' r='3' fill='blue'/><circle cx='110' cy='70' r='3' fill='blue'/></svg></div>",
        "hint": "הן 'מתחלפות' צדדים וקומות. הן יוצרות צורה שמזכירה את האות Z.",
        "solution_steps": [
            { "verbal_explanation": "זוויות הנמצאות בצדדים מנוגדים של הישר החותך ובמפלסים שונים נקראות זוויות מתחלפות.", "math_expression": "מתחלפות" }
        ],
        "final_answer": "זוויות מתחלפות.",
        "options": ["זוויות מתאימות", "זוויות מתחלפות", "זוויות חד-צדדיות", "זוויות צמודות"],
        "correctAnswer": 1
    },
    {
        "id": 18,
        "subTopic": "זוויות בין מקבילים",
        "difficulty": "Medium",
        "question_text": "מהו הכלל לגבי <strong>זוויות מתחלפות</strong> בין ישרים מקבילים?",
        "hint": "דמיינו את האות Z. האם הפינות שלה נראות לכם שוות?",
        "solution_steps": [
            { "verbal_explanation": "כאשר הישרים מקבילים, הזוויות המתחלפות שנוצרות ביניהן שוות זו לזו בדיוק.", "math_expression": "מתחלפות = שוות" }
        ],
        "final_answer": "הן שוות זו לזו.",
        "options": ["סכומן 180°", "הן שוות זו לזו.", "הן תמיד ישרות", "אין ביניהן קשר"],
        "correctAnswer": 1
    },
    {
        "id": 19,
        "subTopic": "זוויות בין מקבילים",
        "difficulty": "Medium",
        "question_text": "מהו הכלל לגבי <strong>זוויות מתאימות</strong> בין ישרים מקבילים?",
        "hint": "אם נזיז ישר מקביל אחד על גבי השני, הזוויות המתאימות 'יתלבשו' אחת על השנייה.",
        "solution_steps": [
            { "verbal_explanation": "זוויות מתאימות בין ישרים מקבילים הן שוות זו לזו בגודלן.", "math_expression": "מתאימות = שוות" }
        ],
        "final_answer": "הן שוות זו לזו.",
        "options": ["הן שוות זו לזו.", "סכומן 180°", "אחת גדולה מהשנייה", "הן תמיד חדות"],
        "correctAnswer": 0
    },
    {
        "id": 20,
        "subTopic": "זוויות בין מקבילים",
        "difficulty": "Low",
        "question_text": "כיצד נקראות זוויות שנמצאות באותו צד של הישר החותך ובין שני הישרים המקבילים?<br><div style='text-align:center; margin:15px 0;'><svg width='200' height='100'><line x1='10' y1='30' x2='190' y2='30' stroke='#1e293b' stroke-width='2'/><line x1='10' y1='70' x2='190' y2='70' stroke='#1e293b' stroke-width='2'/><line x1='50' y1='10' x2='150' y2='90' stroke='#b09151' stroke-width='2'/><text x='115' y='45' font-size='12'>1</text><text x='130' y='65' font-size='12'>2</text></svg></div>",
        "hint": "הן נמצאות רק בצד אחד. הן יוצרות צורה של האות ח' או האות C.",
        "solution_steps": [
            { "verbal_explanation": "זוויות הנמצאות באותו צד של הישר החותך ושתיהן 'בתוך' התחום שבין הישרים נקראות זוויות חד-צדדיות פנימיות.", "math_expression": "חד-צדדיות" }
        ],
        "final_answer": "זוויות חד-צדדיות.",
        "options": ["זוויות מתחלפות", "זוויות מתאימות", "זוויות חד-צדדיות", "זוויות קודקודיות"],
        "correctAnswer": 2
    },
    {
        "id": 21,
        "subTopic": "זוויות בין מקבילים",
        "difficulty": "Medium",
        "question_text": "מהו הכלל לגבי <strong>זוויות חד-צדדיות</strong> (פנימיות) בין ישרים מקבילים?",
        "hint": "הסתכלו עליהן. בדרך כלל אחת חדה ואחת קהה. מה קורה כשמחברים אותן?",
        "solution_steps": [
            { "verbal_explanation": "בניגוד למתחלפות ומתאימות שהן שוות, זוויות חד-צדדיות בין מקבילים משלימות זו את זו ל-180 מעלות.", "math_expression": "סכום = 180°" }
        ],
        "final_answer": "סכומן הוא 180 מעלות.",
        "options": ["הן שוות זו לזו", "סכומן הוא 90°", "סכומן הוא 180 מעלות.", "אין קשר קבוע"],
        "correctAnswer": 2
    },
    {
        "id": 22,
        "subTopic": "זוויות בין מקבילים",
        "difficulty": "Medium",
        "question_text": "נתונים שני ישרים מקבילים. זווית מתאימה אחת היא בת <strong>60°</strong>. מה גודל הזווית המתאימה לה?",
        "hint": "היעזרו בכלל שזוויות מתאימות בין מקבילים הן שוות.",
        "solution_steps": [
            { "verbal_explanation": "הכלל קובע שוויון מלא בין זוויות מתאימות.", "math_expression": "60° = 60°" }
        ],
        "final_answer": "60 מעלות",
        "options": ["60°", "120°", "180°", "30°"],
        "correctAnswer": 0
    },
    {
        "id": 23,
        "subTopic": "זוויות בין מקבילים",
        "difficulty": "Medium",
        "question_text": "נתונים ישרים מקבילים. זווית אחת היא בת <strong>110°</strong>. מה גודל הזווית ה<strong>חד-צדדית</strong> לה?",
        "hint": "זכרו שזוויות חד-צדדיות משלימות ל-180.",
        "solution_steps": [
            { "verbal_explanation": "נחסיר את הזווית הנתונה מ-180 מעלות.", "math_expression": "180° - 110° = 70°" }
        ],
        "final_answer": "70 מעלות",
        "options": ["110°", "70°", "180°", "90°"],
        "correctAnswer": 1
    },
    {
        "id": 24,
        "subTopic": "זוויות בין מקבילים",
        "difficulty": "High",
        "question_text": "בישרים מקבילים, שתי זוויות מתחלפות מיוצגות על ידי: <strong>4x</strong> ו- <strong>120°</strong>. מהו ערכו של x?",
        "hint": "הקימו משוואת שוויון בין הזוויות המתחלפות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: זוויות מתחלפות בין מקבילים שוות זו לזו.", "math_expression": "4x = 120°" },
            { "verbal_explanation": "שלב 2: נחלק את שני אגפי המשוואה ב-4.", "math_expression": "x = 120° / 4 = 30" }
        ],
        "final_answer": "30",
        "options": ["30", "40", "120", "15"],
        "correctAnswer": 0
    },
    {
        "id": 25,
        "subTopic": "זוויות בין מקבילים",
        "difficulty": "High",
        "question_text": "בישרים מקבילים, שתי זוויות חד-צדדיות הן: <strong>2x</strong> ו- <strong>3x</strong>. מהו ערכו של x?",
        "hint": "חברו את שתי הזוויות והשוו ל-180 מעלות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: סכום זוויות חד-צדדיות בין מקבילים הוא 180.", "math_expression": "2x + 3x = 180°" },
            { "verbal_explanation": "שלב 2: נחבר את האיקסים: 5x = 180.", "math_expression": "5x = 180°" },
            { "verbal_explanation": "שלב 3: נחלק ב-5.", "math_expression": "x = 36" }
        ],
        "final_answer": "36",
        "options": ["30", "36", "45", "60"],
        "correctAnswer": 1
    },
    {
        "id": 26,
        "subTopic": "זוויות בין מקבילים",
        "difficulty": "Low",
        "question_text": "אם נמצא שזוג זוויות מתחלפות הוא <strong>שווה</strong>, מה נוכל להגיד על שני הישרים?",
        "hint": "זהו המשפט ההפוך למשפטי המקבילים.",
        "solution_steps": [
            { "verbal_explanation": "אם מתקיים שוויון בין זוויות מתחלפות, זהו תנאי מספיק להוכחה שהישרים מקבילים זה לזה.", "math_expression": "מתחלפות שוות -> מקבילים" }
        ],
        "final_answer": "הישרים מקבילים.",
        "options": ["הישרים נחתכים", "הישרים מקבילים.", "הישרים מאונכים", "אי אפשר לדעת"],
        "correctAnswer": 1
    },
    {
        "id": 27,
        "subTopic": "זוויות בין מקבילים",
        "difficulty": "Medium",
        "question_text": "נתון שזווית 1 היא בת <strong>50°</strong> וזווית 2 היא ה<strong>קודקודית</strong> לה. זווית 3 היא ה<strong>מתאימה</strong> לזווית 2 בין מקבילים. מה גודל זווית 3?",
        "hint": "בצעו את המעברים צעד אחר צעד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: זווית 2 שווה לזווית 1 כי הן קודקודיות.", "math_expression": "זווית 2 = 50°" },
            { "verbal_explanation": "שלב 2: זווית 3 שווה לזווית 2 כי הן מתאימות בין מקבילים.", "math_expression": "זווית 3 = 50°" }
        ],
        "final_answer": "50 מעלות",
        "options": ["50°", "130°", "180°", "40°"],
        "correctAnswer": 0
    },
    {
        "id": 28,
        "subTopic": "זוויות בין מקבילים",
        "difficulty": "High",
        "question_text": "שתי זוויות מתאימות בין מקבילים מיוצגות על ידי <strong>x + 20</strong> ו- <strong>2x - 10</strong>. מה גודל הזווית?",
        "hint": "השוו בין הביטויים כדי למצוא את x, ואז הציבו אותו חזרה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשווה את הביטויים (זוויות מתאימות שוות).", "math_expression": "x + 20 = 2x - 10" },
            { "verbal_explanation": "שלב 2: נפתור את המשוואה: נעביר x ימינה ו-10 שמאלה.", "math_expression": "20 + 10 = 2x - x -> x = 30" },
            { "verbal_explanation": "שלב 3: נציב x=30 באחד הביטויים כדי למצוא את גודל הזווית.", "math_expression": "30 + 20 = 50°" }
        ],
        "final_answer": "50 מעלות",
        "options": ["30°", "50°", "70°", "20°"],
        "correctAnswer": 1
    },
    {
        "id": 29,
        "subTopic": "זוויות בין מקבילים",
        "difficulty": "Medium",
        "question_text": "איזה זוג זוויות <strong>אינו</strong> בהכרח שווה בין ישרים מקבילים?",
        "hint": "חשבו אילו זוויות משלימות ל-180 במקום להיות שוות.",
        "solution_steps": [
            { "verbal_explanation": "מתאימות ומתחלפות הן תמיד שוות בין מקבילים.", "math_expression": "שוות" },
            { "verbal_explanation": "זוויות חד-צדדיות הן משלימות ל-180 מעלות, ולכן הן שוות רק אם שתיהן 90 מעלות.", "math_expression": "סכום 180°" }
        ],
        "final_answer": "זוויות חד-צדדיות.",
        "options": ["זוויות קודקודיות", "זוויות מתחלפות", "זוויות מתאימות", "זוויות חד-צדדיות."],
        "correctAnswer": 3
    },
    {
        "id": 30,
        "subTopic": "זוויות בין מקבילים",
        "difficulty": "Low",
        "question_text": "אם נתון ששני ישרים הם מקבילים, וזווית אחת היא בת <strong>90°</strong>, מה יהיו כל שאר 7 הזוויות בצמתים?",
        "hint": "השתמשו בכל חוקי הזוויות שלמדנו (צמודות, קודקודיות, מתחלפות).",
        "solution_steps": [
            { "verbal_explanation": "בגלל שכל הזוויות הן צמודות, קודקודיות או מתייחסות למקבילים, אם אחת היא 90, כולן יהיו חייבות להיות 90 מעלות.", "math_expression": "90° לכולן" }
        ],
        "final_answer": "כולן יהיו בנות 90 מעלות.",
        "options": ["חלקן 90 וחלקן 0", "כולן יהיו בנות 90 מעלות.", "אי אפשר לדעת", "זה תלוי בישר החותך"],
        "correctAnswer": 1
    },,
    // ==============================================================
    // --- תת נושא 3: זוויות מתחלפות ומתאימות (15 שאלות) ---
    // ==============================================================
    {
        "id": 31,
        "subTopic": "זוויות מתחלפות ומתאימות",
        "difficulty": "Medium",
        "question_text": "נתונים שני ישרים מקבילים הנחתכים על ידי ישר שלישי. ידוע כי זוג <strong>זוויות מתחלפות</strong> הן בנות <strong>5x</strong> ו- <strong>100°</strong>. מהו ערכו של x?",
        "hint": "היזכרו בכלל הברזל: בין ישרים מקבילים, זוויות מתחלפות שוות זו לזו בדיוק.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מכיוון שהישרים מקבילים, נשווה בין הביטויים של הזוויות המתחלפות.", "math_expression": "5x = 100°" },
            { "verbal_explanation": "שלב 2: נחלק את 100 ב-5 כדי למצוא את x.", "math_expression": "x = 100 / 5 = 20" }
        ],
        "final_answer": "20",
        "options": ["20", "25", "50", "100"],
        "correctAnswer": 0
    },
    {
        "id": 32,
        "subTopic": "זוויות מתחלפות ומתאימות",
        "difficulty": "Medium",
        "question_text": "בסרטוט שלפניכם ישרים מקבילים. מהו הקשר בין זווית 1 לזווית 2?<br><div style='text-align:center; margin:15px 0;'><svg width='200' height='100'><line x1='10' y1='30' x2='190' y2='30' stroke='#1e293b' stroke-width='2'/><line x1='10' y1='70' x2='190' y2='70' stroke='#1e293b' stroke-width='2'/><line x1='60' y1='10' x2='140' y2='90' stroke='#b09151' stroke-width='2'/><text x='110' y='25' font-size='12'>1</text><text x='130' y='65' font-size='12'>2</text></svg></div>",
        "hint": "בדקו האם הן נמצאות באותו צד של הישר החותך ובאותה 'קומה' ביחס לישרים המקבילים.",
        "solution_steps": [
            { "verbal_explanation": "שתי הזוויות נמצאות מעל הישרים המקבילים ובצד ימין של הישר החותך. זהו מיקום זהה.", "math_expression": "מיקום זהה" },
            { "verbal_explanation": "זוויות הנמצאות במיקום זהה נקראות זוויות מתאימות, ובין מקבילים הן תמיד שוות.", "math_expression": "זווית 1 = זווית 2" }
        ],
        "final_answer": "הן זוויות מתאימות ולכן הן שוות.",
        "options": ["הן זוויות מתחלפות ושונות.", "הן זוויות מתאימות ולכן הן שוות.", "הן זוויות צמודות וסכומן 180°", "אין ביניהן קשר."],
        "correctAnswer": 1
    },
    {
        "id": 33,
        "subTopic": "זוויות מתחלפות ומתאימות",
        "difficulty": "High",
        "question_text": "נתונים ישרים מקבילים. זוג <strong>זוויות מתחלפות</strong> מיוצגות על ידי: <strong>3x + 10</strong> ו- <strong>x + 50</strong>. מהו גודל הזווית?",
        "hint": "השוו בין הביטויים כדי למצוא את x, ואז הציבו אותו חזרה כדי לקבל את המעלות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבנה משוואת שוויון (מתחלפות שוות).", "math_expression": "3x + 10 = x + 50" },
            { "verbal_explanation": "שלב 2: נסדר את המשוואה. נעביר x שמאלה ו-10 ימינה.", "math_expression": "2x = 40" },
            { "verbal_explanation": "שלב 3: נמצא ש-x שווה ל-20. כעת נציב: 20 פלוס 50.", "math_expression": "20 + 50 = 70°" }
        ],
        "final_answer": "70 מעלות",
        "options": ["20°", "70°", "60°", "50°"],
        "correctAnswer": 1
    },
    {
        "id": 34,
        "subTopic": "זוויות מתחלפות ומתאימות",
        "difficulty": "Medium",
        "question_text": "בין ישרים מקבילים, זווית אחת היא בת <strong>130°</strong>. מה יהיה גודלה של הזווית ה<strong>מתחלפת החיצונית</strong> לה?",
        "hint": "גם זוויות מתחלפות חיצוניות (מחוץ לתחום שבין המקבילים) שומרות על הכלל של שוויון.",
        "solution_steps": [
            { "verbal_explanation": "הכלל של זוויות מתחלפות תקף גם לפנימיות וגם לחיצוניות - הן תמיד שוות אם הישרים מקבילים.", "math_expression": "130° = 130°" }
        ],
        "final_answer": "130 מעלות",
        "options": ["130°", "50°", "180°", "90°"],
        "correctAnswer": 0
    },
    {
        "id": 35,
        "subTopic": "זוויות מתחלפות ומתאימות",
        "difficulty": "High",
        "question_text": "בתוך מקבילית, אילו זוויות מתפקדות כ<strong>זוויות מתחלפות</strong> בין הישרים המקבילים (צלעות המקבילית)?",
        "hint": "דמיינו את האלכסון של המקבילית כישר החותך.",
        "solution_steps": [
            { "verbal_explanation": "כאשר מעבירים אלכסון במקבילית, הוא חותך שני זוגות של ישרים מקבילים.", "math_expression": "אלכסון = ישר חותך" },
            { "verbal_explanation": "הזוויות שנוצרות משני צידי האלכסון ובפינות הנגדיות הן זוויות מתחלפות שוות.", "math_expression": "זוויות מתחלפות" }
        ],
        "final_answer": "הזוויות שנוצרות משני צידי האלכסון.",
        "options": ["הזוויות הנגדיות במקבילית.", "הזוויות שנוצרות משני צידי האלכסון.", "הזוויות הסמוכות.", "אין זוויות כאלו."],
        "correctAnswer": 1
    },
    {
        "id": 36,
        "subTopic": "זוויות מתחלפות ומתאימות",
        "difficulty": "Low",
        "question_text": "איזו 'צורה' של אות אנגלית עוזרת לנו לזהות <strong>זוויות מתאימות</strong>?",
        "hint": "חישבו על אות שיש לה שני 'מדפים' מקבילים המצביעים לאותו כיוון.",
        "solution_steps": [
            { "verbal_explanation": "האות F מייצגת בצורה הטובה ביותר זוויות מתאימות (בפינות הפנימיות של הקווים האופקיים).", "math_expression": "F" }
        ],
        "final_answer": "האות F",
        "options": ["האות Z", "האות F", "האות C", "האות X"],
        "correctAnswer": 1
    },
    {
        "id": 37,
        "subTopic": "זוויות מתחלפות ומתאימות",
        "difficulty": "Low",
        "question_text": "איזו 'צורה' של אות אנגלית עוזרת לנו לזהות <strong>זוויות מתחלפות</strong>?",
        "hint": "חישבו על אות שיש לה קו אלכסוני המחבר שני קווים מקבילים בכיוונים הפוכים.",
        "solution_steps": [
            { "verbal_explanation": "האות Z (או N) מייצגת זוויות מתחלפות הנמצאות ב'פינות' הפנימיות שלה.", "math_expression": "Z" }
        ],
        "final_answer": "האות Z",
        "options": ["האות Z", "האות F", "האות C", "האות X"],
        "correctAnswer": 0
    },
    {
        "id": 38,
        "subTopic": "זוויות מתחלפות ומתאימות",
        "difficulty": "High",
        "question_text": "נתון שזווית א' היא בת <strong>45°</strong>. זווית ב' היא ה<strong>צמודה</strong> לה. זווית ג' היא ה<strong>מתאימה</strong> לזווית ב' בין ישרים מקבילים. מה גודל זווית ג'?",
        "hint": "בצעו את החישוב בשני שלבים: קודם צמודה, אחר כך מתאימה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את זווית ב' הצמודה ל-45 מעלות.", "math_expression": "180° - 45° = 135°" },
            { "verbal_explanation": "שלב 2: זווית ג' מתאימה לזווית ב', לכן היא שווה לה בדיוק.", "math_expression": "135° = 135°" }
        ],
        "final_answer": "135 מעלות",
        "options": ["45°", "135°", "180°", "90°"],
        "correctAnswer": 1
    },
    {
        "id": 39,
        "subTopic": "זוויות מתחלפות ומתאימות",
        "difficulty": "Medium",
        "question_text": "האם זוויות מתחלפות הן תמיד שוות?",
        "hint": "חישבו על התנאי ההכרחי שחייב להופיע בשאלה כדי שהן יהיו שוות.",
        "solution_steps": [
            { "verbal_explanation": "הזוויות המתחלפות שוות אך ורק אם הישרים הנחתכים הם מקבילים זה לזה.", "math_expression": "תלוי בהקבלה" }
        ],
        "final_answer": "רק אם הישרים מקבילים.",
        "options": ["כן, תמיד.", "רק אם הישרים מקבילים.", "רק אם הן זוויות ישרות.", "לא, הן תמיד משלימות ל-180°"],
        "correctAnswer": 1
    },
    {
        "id": 40,
        "subTopic": "זוויות מתחלפות ומתאימות",
        "difficulty": "Medium",
        "question_text": "בסרטוט שלפניכם ישרים מקבילים. אם זווית 1 היא בת <strong>115°</strong>, מה גודל זווית 2?<br><div style='text-align:center; margin:15px 0;'><svg width='200' height='100'><line x1='10' y1='30' x2='190' y2='30' stroke='#1e293b' stroke-width='2'/><line x1='10' y1='70' x2='190' y2='70' stroke='#1e293b' stroke-width='2'/><line x1='130' y1='10' x2='50' y2='90' stroke='#b09151' stroke-width='2'/><text x='75' y='25' font-size='12'>1</text><text x='115' y='65' font-size='12'>2</text></svg></div>",
        "hint": "שימו לב: הזוויות נמצאות משני צידי הישר החותך (אחת משמאל למעלה, אחת מימין למטה).",
        "solution_steps": [
            { "verbal_explanation": "הזוויות נמצאות במצב של 'החלפת צדדים' ו'החלפת קומות', לכן אלו זוויות מתחלפות.", "math_expression": "מתחלפות" },
            { "verbal_explanation": "בין ישרים מקבילים, זוויות מתחלפות שוות זו לזו.", "math_expression": "115° = 115°" }
        ],
        "final_answer": "115 מעלות",
        "options": ["115°", "65°", "180°", "90°"],
        "correctAnswer": 0
    },
    {
        "id": 41,
        "subTopic": "זוויות מתחלפות ומתאימות",
        "difficulty": "High",
        "question_text": "בישרים מקבילים, זווית 1 היא בת <strong>x</strong> וזווית 2 המתחלפת לה היא בת <strong>2x - 40</strong>. מהו גודל הזווית?",
        "hint": "השוו את x לביטוי השני כדי למצוא את ערכו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבנה משוואה: x = 2x - 40.", "math_expression": "x = 2x - 40" },
            { "verbal_explanation": "שלב 2: נסדר את המשוואה. נעביר x ימינה ו-40 שמאלה.", "math_expression": "40 = x" },
            { "verbal_explanation": "שלב 3: גודל הזווית הוא בדיוק ערכו של x שמצאנו.", "math_expression": "40°" }
        ],
        "final_answer": "40 מעלות",
        "options": ["20°", "40°", "80°", "140°"],
        "correctAnswer": 1
    },
    {
        "id": 42,
        "subTopic": "זוויות מתחלפות ומתאימות",
        "difficulty": "Medium",
        "question_text": "ישר a מקביל לישר b. זווית 1 היא בת <strong>70°</strong>. זווית 2 היא ה<strong>קודקודית</strong> לה. מה גודל הזווית ה<strong>מתאימה</strong> לזווית 2?",
        "hint": "השתמשו בכלל המעבר: קודקודיות שוות וגם מתאימות שוות.",
        "solution_steps": [
            { "verbal_explanation": "זווית קודקודית ל-70 היא 70. הזווית המתאימה לה היא גם 70.", "math_expression": "70° -> 70° -> 70°" }
        ],
        "final_answer": "70 מעלות",
        "options": ["70°", "110°", "180°", "20°"],
        "correctAnswer": 0
    },
    {
        "id": 43,
        "subTopic": "זוויות מתחלפות ומתאימות",
        "difficulty": "Low",
        "question_text": "באיזה מקרה זוויות מתחלפות יהיו גם שוות וגם <strong>ישרות</strong>?",
        "hint": "חשבו על המקרה שבו הישר החותך הוא מאונך.",
        "solution_steps": [
            { "verbal_explanation": "אם הישר החותך מאונך לשני הישרים המקבילים, כל הזוויות בצמתים יהיו בנות 90 מעלות.", "math_expression": "מאונך = 90°" }
        ],
        "final_answer": "כאשר הישר החותך מאונך למקבילים.",
        "options": ["תמיד.", "אף פעם.", "כאשר הישר החותך מאונך למקבילים.", "רק אם הישרים לא מקבילים."],
        "correctAnswer": 2
    },
    {
        "id": 44,
        "subTopic": "זוויות מתחלפות ומתאימות",
        "difficulty": "High",
        "question_text": "נתונים ישרים מקבילים. זווית אחת היא בת <strong>x</strong> והזווית ה<strong>צמודה</strong> לזווית ה<strong>מתאימה</strong> לה היא בת <strong>3x</strong>. מהו ערכו של x?",
        "hint": "הזווית המתאימה היא x. הצמודה לה היא 180 פחות x. לכן 3x שווה ל- (180 פחות x).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הזווית המתאימה ל-x היא גם x. הזווית הנתונה כ-3x צמודה אליה.", "math_expression": "x + 3x = 180°" },
            { "verbal_explanation": "שלב 2: נחבר את האיקסים: 4x = 180.", "math_expression": "4x = 180°" },
            { "verbal_explanation": "שלב 3: נחלק ב-4 למציאת x.", "math_expression": "x = 45" }
        ],
        "final_answer": "45",
        "options": ["30", "45", "60", "90"],
        "correctAnswer": 1
    },
    {
        "id": 45,
        "subTopic": "זוויות מתחלפות ומתאימות",
        "difficulty": "Medium",
        "question_text": "מה ניתן לומר על שתי זוויות שהן גם <strong>מתחלפות</strong> וגם <strong>קודקודיות</strong>?",
        "hint": "זוהי שאלת מלכודת. האם מיקום של זווית יכול להיות שניהם?",
        "solution_steps": [
            { "verbal_explanation": "זוויות קודקודיות נוצרות באותה צומת. זוויות מתחלפות מקשרות בין שתי צמתים שונות.", "math_expression": "לא ייתכן" }
        ],
        "final_answer": "הדבר בלתי אפשרי מתמטית.",
        "options": ["הן תמיד 90°.", "הדבר בלתי אפשרי מתמטית.", "הן תמיד 180°.", "הן שוות רק בריבוע."],
        "correctAnswer": 1
    },

    // ==============================================================
    // --- תת נושא 4: זוויות חד-צדדיות (15 שאלות) ---
    // ==============================================================
    {
        "id": 46,
        "subTopic": "זוויות חד-צדדיות",
        "difficulty": "Low",
        "question_text": "היכן נמצאות <strong>זוויות חד-צדדיות</strong> פנימיות?",
        "hint": "כשמן כן הן - הן נמצאות באותו צד של הישר החותך.",
        "solution_steps": [
            { "verbal_explanation": "זוויות חד-צדדיות פנימיות נמצאות באותו צד של הישר החותך ושתיהן בתחום שבין שני הישרים המקבילים.", "math_expression": "באותו צד ובפנים" }
        ],
        "final_answer": "באותו צד של הישר החותך ובין שני המקבילים.",
        "options": ["בצדדים מנוגדים.", "באותו צד של הישר החותך ובין שני המקבילים.", "אחת מחוץ למקבילים ואחת בפנים.", "באותו קודקוד בדיוק."],
        "correctAnswer": 1
    },
    {
        "id": 47,
        "subTopic": "זוויות חד-צדדיות",
        "difficulty": "Low",
        "question_text": "מהו סכומן של זוויות חד-צדדיות פנימיות בין ישרים מקבילים?",
        "hint": "הן יוצרות יחד צורה של האות ח' או האות C. האם הן נראות שוות?",
        "solution_steps": [
            { "verbal_explanation": "המשפט קובע שבין ישרים מקבילים, סכום הזוויות החד-צדדיות הוא תמיד 180 מעלות.", "math_expression": "סכום = 180°" }
        ],
        "final_answer": "180 מעלות",
        "options": ["90 מעלות", "180 מעלות", "360 מעלות", "זה משתנה לפי אורך הישר"],
        "correctAnswer": 1
    },
    {
        "id": 48,
        "subTopic": "זוויות חד-צדדיות",
        "difficulty": "Medium",
        "question_text": "נתונים ישרים מקבילים. זווית חד-צדדית אחת היא בת <strong>120°</strong>. מה גודל הזווית השנייה?",
        "hint": "השתמשו בכלל שסכומן הוא 180.",
        "solution_steps": [
            { "verbal_explanation": "נחסיר את הזווית הידועה מ-180 מעלות.", "math_expression": "180° - 120° = 60°" }
        ],
        "final_answer": "60 מעלות",
        "options": ["120°", "60°", "180°", "90°"],
        "correctAnswer": 1
    },
    {
        "id": 49,
        "subTopic": "זוויות חד-צדדיות",
        "difficulty": "Medium",
        "question_text": "נתונים ישרים מקבילים. שתי זוויות חד-צדדיות הן: <strong>x</strong> ו- <strong>150°</strong>. מהו ערכו של x?",
        "hint": "חברו אותן והשוו ל-180.",
        "solution_steps": [
            { "verbal_explanation": "נבנה משוואה: x פלוס 150 שווה ל-180.", "math_expression": "x + 150 = 180°" },
            { "verbal_explanation": "נעביר אגף ונמצא את x.", "math_expression": "x = 30°" }
        ],
        "final_answer": "30",
        "options": ["30", "150", "40", "180"],
        "correctAnswer": 0
    },
    {
        "id": 50,
        "subTopic": "זוויות חד-צדדיות",
        "difficulty": "High",
        "question_text": "שתי זוויות חד-צדדיות בין מקבילים מיוצגות על ידי: <strong>2x + 10</strong> ו- <strong>x + 20</strong>. מהו ערכו של x?",
        "hint": "סכום הביטויים חייב להיות 180 מעלות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחבר את שני הביטויים ונשווה ל-180.", "math_expression": "(2x + 10) + (x + 20) = 180°" },
            { "verbal_explanation": "שלב 2: נכנס איברים דומים: 3x פלוס 30 שווה 180.", "math_expression": "3x + 30 = 180°" },
            { "verbal_explanation": "שלב 3: נחסיר 30 ונחלק ב-3.", "math_expression": "3x = 150 -> x = 50" }
        ],
        "final_answer": "50",
        "options": ["40", "50", "60", "30"],
        "correctAnswer": 1
    },
    {
        "id": 51,
        "subTopic": "זוויות חד-צדדיות",
        "difficulty": "Medium",
        "question_text": "באיזה מרובע קיימות <strong>תמיד</strong> זוויות חד-צדדיות שסכומן 180 מעלות בין צלעות נגדיות?",
        "hint": "חפשו מרובע שיש לו לפחות זוג אחד של צלעות מקבילות.",
        "solution_steps": [
            { "verbal_explanation": "בכל מרובע עם צלעות מקבילות (כמו טרפז, מקבילית, מלבן), הזוויות שליד השוקיים הן זוויות חד-צדדיות בין המקבילים.", "math_expression": "טרפז ומעלה" }
        ],
        "final_answer": "טרפז (וכל המרובעים שיש בהם הקבלה).",
        "options": ["דלתון", "מרובע סתמי", "טרפז", "משולש"],
        "correctAnswer": 2
    },
    {
        "id": 52,
        "subTopic": "זוויות חד-צדדיות",
        "difficulty": "Low",
        "question_text": "אם גילינו שסכום של שתי זוויות חד-צדדיות הוא <strong>180°</strong>, מה נוכל להסיק על הישרים?",
        "hint": "זהו המשפט ההפוך המעיד על הקבלה.",
        "solution_steps": [
            { "verbal_explanation": "אם סכום הזוויות החד-צדדיות הוא 180, זהו סימן ודאי שהישרים מקבילים זה לזה.", "math_expression": "סכום 180 -> הקבלה" }
        ],
        "final_answer": "הישרים מקבילים.",
        "options": ["הישרים נחתכים", "הישרים מקבילים.", "הישרים מאונכים", "אין מספיק נתונים"],
        "correctAnswer": 1
    },
    {
        "id": 3,
        "subTopic": "זוויות חד-צדדיות",
        "difficulty": "Medium",
        "question_text": "ישר a מקביל לישר b. זווית 1 היא בת <strong>85°</strong>. מה גודל הזווית ה<strong>חד-צדדית חיצונית</strong> לה?",
        "hint": "גם לזוויות חיצוניות (מחוץ לתחום הישרים) באותו צד יש סכום של 180 מעלות.",
        "solution_steps": [
            { "verbal_explanation": "הכלל של זוויות חד-צדדיות (שהן משלימות ל-180) נשמר גם עבור הזוויות החיצוניות.", "math_expression": "180° - 85° = 95°" }
        ],
        "final_answer": "95 מעלות",
        "options": ["85°", "95°", "180°", "100°"],
        "correctAnswer": 1
    },
    {
        "id": 54,
        "subTopic": "זוויות חד-צדדיות",
        "difficulty": "High",
        "question_text": "שתי זוויות חד-צדדיות בין מקבילים נמצאות ביחס של <strong>1:2</strong>. מהן הזוויות?",
        "hint": "סמנו אותן ב-x ו-2x. חברו אותן והשוו ל-180.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את הזוויות לפי היחס: x ו-2x.", "math_expression": "x + 2x = 180°" },
            { "verbal_explanation": "שלב 2: 3x = 180, לכן x = 60.", "math_expression": "x = 60°" },
            { "verbal_explanation": "שלב 3: הזווית השנייה היא פעמיים 60.", "math_expression": "2 * 60 = 120°" }
        ],
        "final_answer": "60° ו-120°",
        "options": ["60° ו-120°", "90° ו-90°", "30° ו-150°", "45° ו-135°"],
        "correctAnswer": 0
    },
    {
        "id": 55,
        "subTopic": "זוויות חד-צדדיות",
        "difficulty": "Medium",
        "question_text": "בטרפז ישר זווית, אחת הזוויות הקהות היא בת <strong>110°</strong>. מה גודל הזווית החדה שלצידה?",
        "hint": "בטרפז הבסיסים מקבילים, ולכן הזוויות שליד השוק הן חד-צדדיות.",
        "solution_steps": [
            { "verbal_explanation": "הזוויות שליד השוק בטרפז הן זוויות חד-צדדיות פנימיות בין הבסיסים המקבילים, לכן סכומן 180.", "math_expression": "180° - 110° = 70°" }
        ],
        "final_answer": "70 מעלות",
        "options": ["70°", "90°", "110°", "20°"],
        "correctAnswer": 0
    },
    {
        "id": 56,
        "subTopic": "זוויות חד-צדדיות",
        "difficulty": "High",
        "question_text": "נתון שזווית 1 היא בת <strong>x</strong>. זווית 2 היא ה<strong>קודקודית</strong> לה. זווית 3 היא ה<strong>חד-צדדית</strong> לזווית 2 בין מקבילים. מהו הביטוי לזווית 3?",
        "hint": "בצעו את המעברים בזהירות. קודקודיות שוות, חד-צדדיות משלימות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: זווית 2 שווה ל-x כי היא קודקודית לזווית 1.", "math_expression": "זווית 2 = x" },
            { "verbal_explanation": "שלב 2: זווית 3 חד-צדדית לזווית 2, לכן היא משלימה אותה ל-180.", "math_expression": "180° - x" }
        ],
        "final_answer": "180 פחות x",
        "options": ["x", "180 - x", "90 - x", "2x"],
        "correctAnswer": 1
    },
    {
        "id": 57,
        "subTopic": "זוויות חד-צדדיות",
        "difficulty": "Medium",
        "question_text": "האם ייתכן ששתי זוויות חד-צדדיות בין מקבילים יהיו שוות זו לזו?",
        "hint": "אם הסכום הוא 180 והן שוות, כמה שווה כל אחת?",
        "solution_steps": [
            { "verbal_explanation": "הן יכולות להיות שוות רק אם שתיהן בנות 90 מעלות (180 לחלק ל-2).", "math_expression": "90° + 90° = 180°" }
        ],
        "final_answer": "כן, אם שתיהן זוויות ישרות.",
        "options": ["לא, אף פעם.", "כן, תמיד.", "כן, אם שתיהן זוויות ישרות.", "רק אם הישרים לא מקבילים."],
        "correctAnswer": 2
    },
    {
        "id": 58,
        "subTopic": "זוויות חד-צדדיות",
        "difficulty": "High",
        "question_text": "בישרים מקבילים, שתי זוויות חד-צדדיות מיוצגות על ידי <strong>x + 100</strong> ו- <strong>x</strong>. מהו גודל הזווית החדה?",
        "hint": "חברו את הביטויים ל-180.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחבר: x פלוס x פלוס 100 שווה 180.", "math_expression": "2x + 100 = 180°" },
            { "verbal_explanation": "שלב 2: 2x = 80, לכן x = 40.", "math_expression": "x = 40°" }
        ],
        "final_answer": "40 מעלות",
        "options": ["40°", "80°", "100°", "140°"],
        "correctAnswer": 0
    },
    {
        "id": 59,
        "subTopic": "זוויות חד-צדדיות",
        "difficulty": "Low",
        "question_text": "מהי ה'צורה' שעוזרת לנו לזהות זוויות חד-צדדיות?",
        "hint": "חישבו על אות שיש לה 'בטן' סגורה ב-3 צדדים.",
        "solution_steps": [
            { "verbal_explanation": "האות C (או האות ח' בעברית) מייצגת זוויות חד-צדדיות הנמצאות בתוך ה'קופסה'.", "math_expression": "C" }
        ],
        "final_answer": "האות C",
        "options": ["האות Z", "האות F", "האות C", "האות T"],
        "correctAnswer": 2
    },
    {
        "id": 60,
        "subTopic": "זוויות חד-צדדיות",
        "difficulty": "High",
        "question_text": "נתון שזווית 1 היא בת <strong>60°</strong>. זווית 2 היא ה<strong>מתחלפת</strong> לה. זווית 3 היא ה<strong>חד-צדדית</strong> לזווית 2. מה גודל זווית 3?",
        "hint": "בצעו את המעברים: מתחלפות שוות, חד-צדדיות משלימות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: זווית 2 שווה ל-60 כי היא מתחלפת לזווית 1.", "math_expression": "זווית 2 = 60°" },
            { "verbal_explanation": "שלב 2: זווית 3 חד-צדדית לזווית 2, לכן היא משלימה ל-180.", "math_expression": "180° - 60° = 120°" }
        ],
        "final_answer": "120 מעלות",
        "options": ["60°", "120°", "180°", "90°"],
        "correctAnswer": 1
    },,
    // ==============================================================
    // --- תת נושא 5: הוכחת מקבילות (15 שאלות) ---
    // ==============================================================
    {
        "id": 61,
        "subTopic": "הוכחת מקבילות",
        "difficulty": "Low",
        "question_text": "נתונים שני ישרים a ו-b הנחתכים על ידי ישר שלישי. מצאנו כי זוג <strong>זוויות מתאימות</strong> הן שוות זו לזו. מה ניתן להסיק על הישרים a ו-b?",
        "hint": "זהו המשפט ההפוך למשפט הזוויות המתאימות. אם הן שוות, המערכת מאוזנת.",
        "solution_steps": [
            { "verbal_explanation": "על פי המשפט הגיאומטרי, אם בין שני ישרים הנחתכים על ידי ישר שלישי קיימות זוויות מתאימות שוות...", "math_expression": "מתאימות שוות" },
            { "verbal_explanation": "הרי ששני הישרים חייבים להיות מקבילים זה לזה.", "math_expression": "a || b" }
        ],
        "final_answer": "הישרים מקבילים.",
        "options": ["הישרים נחתכים", "הישרים מקבילים.", "הישרים מאונכים", "אי אפשר לדעת"],
        "correctAnswer": 1
    },
    {
        "id": 62,
        "subTopic": "הוכחת מקבילות",
        "difficulty": "Low",
        "question_text": "נתונים שני ישרים. זוג <strong>זוויות מתחלפות</strong> ביניהם הוא בן <strong>75°</strong> כל אחת. האם הישרים מקבילים?<br><div style='text-align:center; margin:15px 0;'><svg width='200' height='100'><line x1='10' y1='30' x2='190' y2='30' stroke='#1e293b' stroke-width='2'/><line x1='10' y1='70' x2='190' y2='70' stroke='#1e293b' stroke-width='2'/><line x1='130' y1='10' x2='50' y2='90' stroke='#b09151' stroke-width='2'/><text x='75' y='25' font-size='12'>75°</text><text x='115' y='65' font-size='12'>75°</text></svg></div>",
        "hint": "בדקו האם מתקיים התנאי של שוויון בין זוויות מתחלפות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את סוג הזוויות. הן נמצאות משני צידי הישר החותך ובקומות שונות, לכן הן מתחלפות.", "math_expression": "מתחלפות" },
            { "verbal_explanation": "שלב 2: נבדוק אם הן שוות. נתון ששתיהן בנות 75 מעלות.", "math_expression": "75° = 75°" },
            { "verbal_explanation": "שלב 3: מכיוון שזוויות מתחלפות שוות, הישרים מקבילים.", "math_expression": "מקבילים" }
        ],
        "final_answer": "כן, הישרים מקבילים.",
        "options": ["כן", "לא", "רק אם הזווית היא 90°", "לא ניתן לדעת"],
        "correctAnswer": 0
    },
    {
        "id": 63,
        "subTopic": "הוכחת מקבילות",
        "difficulty": "Medium",
        "question_text": "נתונים שני ישרים. זוג <strong>זוויות חד-צדדיות</strong> ביניהן הוא בן <strong>100°</strong> ו- <strong>80°</strong>. האם הישרים מקבילים?",
        "hint": "הכלל להוכחת מקבילות דרך זוויות חד-צדדיות דורש שהסכום שלהן יהיה בדיוק 180 מעלות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחבר את שתי הזוויות החד-צדדיות שניתנו לנו.", "math_expression": "100° + 80° = 180°" },
            { "verbal_explanation": "שלב 2: בדקנו ומצאנו שהסכום הוא בדיוק 180 מעלות.", "math_expression": "סכום = 180°" },
            { "verbal_explanation": "שלב 3: על פי המשפט, אם זוויות חד-צדדיות משלימות ל-180, הישרים מקבילים.", "math_expression": "מקבילים" }
        ],
        "final_answer": "כן, הישרים מקבילים.",
        "options": ["כן", "לא", "רק אם הן שוות", "אי אפשר לדעת"],
        "correctAnswer": 0
    },
    {
        "id": 64,
        "subTopic": "הוכחת מקבילות",
        "difficulty": "Medium",
        "question_text": "נתונים שני ישרים. זווית אחת היא בת <strong>60°</strong> והזווית ה<strong>צמודה</strong> לזווית ה<strong>מתחלפת</strong> לה היא בת <strong>120°</strong>. האם הישרים מקבילים?",
        "hint": "מצאו קודם את גודל הזווית המתחלפת בעזרת הכלל של זוויות צמודות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את הזווית המתחלפת. היא צמודה ל-120 מעלות, לכן גודלה הוא 180 פחות 120.", "math_expression": "180° - 120° = 60°" },
            { "verbal_explanation": "שלב 2: כעת נשווה בין הזווית המקורית (60) לזווית המתחלפת שמצאנו (60).", "math_expression": "60° = 60°" },
            { "verbal_explanation": "שלב 3: מכיוון שזוג זוויות מתחלפות הוא שווה, הישרים מקבילים.", "math_expression": "מקבילים" }
        ],
        "final_answer": "כן, הישרים מקבילים.",
        "options": ["כן", "לא", "רק אם הן מתחלפות חיצוניות", "אין מספיק נתונים"],
        "correctAnswer": 0
    },
    {
        "id": 65,
        "subTopic": "הוכחת מקבילות",
        "difficulty": "High",
        "question_text": "במרובע ABCD נתון כי ∠A = 70° ו- ∠B = 110°. האם הצלעות AD ו-BC מקבילות?<br><div style='text-align:center; margin:15px 0;'><svg width='150' height='100'><polygon points='30,20 130,20 110,80 10,80' fill='#f8fafc' stroke='#1e293b' stroke-width='2'/><text x='15' y='75' font-size='12'>A</text><text x='115' y='75' font-size='12'>B</text><text x='135' y='25' font-size='12'>C</text><text x='25' y='25' font-size='12'>D</text></svg></div>",
        "hint": "הסתכלו על הצלעות AD ו-BC כעל ישרים, ועל AB כעל הישר החותך אותם. הזוויות A ו-B הן זוויות חד-צדדיות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את הקשר בין הזוויות. ביחס לישרים AD ו-BC, הזוויות A ו-B הן זוויות חד-צדדיות פנימיות.", "math_expression": "חד-צדדיות" },
            { "verbal_explanation": "שלב 2: נבדוק את סכומן: 70 מעלות ועוד 110 מעלות.", "math_expression": "70° + 110° = 180°" },
            { "verbal_explanation": "שלב 3: מכיוון שסכום הזוויות החד-צדדיות הוא 180, הישרים (הצלעות) מקבילים.", "math_expression": "AD || BC" }
        ],
        "final_answer": "כן, הצלעות מקבילות.",
        "options": ["כן", "לא", "רק אם המרובע הוא מלבן", "אי אפשר לדעת"],
        "correctAnswer": 0
    },
    {
        "id": 66,
        "subTopic": "הוכחת מקבילות",
        "difficulty": "Low",
        "question_text": "האם ניתן להוכיח ששני ישרים מקבילים אם ידוע רק שזוג זוויות קודקודיות שוות ביניהן?",
        "hint": "זוויות קודקודיות נוצרות באותה צומת. האם הן אומרות משהו על הקשר לצומת השנייה?",
        "solution_steps": [
            { "verbal_explanation": "זוויות קודקודיות שוות תמיד, בכל פעם ששני ישרים נחתכים, בלי קשר להקבלה.", "math_expression": "קודקודיות שוות תמיד" },
            { "verbal_explanation": "הן לא מספקות שום מידע על הישר השני, ולכן לא ניתן להוכיח מקבילות בעזרתן בלבד.", "math_expression": "לא ניתן להוכיח" }
        ],
        "final_answer": "לא, זה לא מספיק.",
        "options": ["כן, תמיד", "לא, זה לא מספיק.", "רק אם הזווית היא 45°", "רק בריבוע"],
        "correctAnswer": 1
    },
    {
        "id": 67,
        "subTopic": "הוכחת מקבילות",
        "difficulty": "Medium",
        "question_text": "שני ישרים נחתכים על ידי ישר שלישי. זווית אחת היא בת <strong>x</strong> והזווית ה<strong>מתאימה</strong> לה היא בת <strong>180 - x</strong>. באילו תנאים הישרים יהיו מקבילים?",
        "hint": "כדי שהם יהיו מקבילים, הזוויות המתאימות חייבות להיות שוות. פתרו את המשוואה: x = 180 - x.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשווה בין הזוויות כדי לדרוש מקבילות.", "math_expression": "x = 180 - x" },
            { "verbal_explanation": "שלב 2: נעביר את ה-x אגף: 2x = 180.", "math_expression": "2x = 180°" },
            { "verbal_explanation": "שלב 3: נחלק ב-2: x = 90. לכן הישרים יהיו מקבילים רק אם הזוויות הן ישרות.", "math_expression": "x = 90°" }
        ],
        "final_answer": "רק אם x = 90° (הישר החותך מאונך).",
        "options": ["תמיד", "אף פעם", "רק אם x = 90°", "רק אם x = 45°"],
        "correctAnswer": 2
    },
    {
        "id": 68,
        "subTopic": "הוכחת מקבילות",
        "difficulty": "High",
        "question_text": "נתון שזווית 1 וזווית 2 הן <strong>זוויות מתחלפות</strong>. נתון בנוסף שזווית 1 שווה לזווית ה<strong>צמודה</strong> לזווית 2. האם הישרים מקבילים?",
        "hint": "נסו להבין מה זה אומר שזווית שווה לצמודה לה. כמה מעלות היא חייבת להיות?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: אם זווית שווה לצמודה לה, היא חייבת להיות בת 90 מעלות (כי 90+90=180).", "math_expression": "זווית 2 = 90°" },
            { "verbal_explanation": "שלב 2: נתון שזווית 1 שווה לצמודה של 2, לכן גם זווית 1 היא 90 מעלות.", "math_expression": "זווית 1 = 90°" },
            { "verbal_explanation": "שלב 3: קיבלנו זוויות מתחלפות שוות (שתיהן 90), לכן הישרים מקבילים.", "math_expression": "מקבילים" }
        ],
        "final_answer": "כן, הישרים מקבילים.",
        "options": ["כן", "לא", "רק אם הישרים מאונכים זה לזה", "אין לדעת"],
        "correctAnswer": 0
    },
    {
        "id": 69,
        "subTopic": "הוכחת מקבילות",
        "difficulty": "Medium",
        "question_text": "איזה מהמשפטים הבאים <strong>אינו</strong> נכון?",
        "hint": "חשבו על ההבדל בין הוכחת מקבילות לבין תכונות של מקבילים.",
        "solution_steps": [
            { "verbal_explanation": "מתאימות שוות -> מקבילים (נכון)", "math_expression": "V" },
            { "verbal_explanation": "מתחלפות שוות -> מקבילים (נכון)", "math_expression": "V" },
            { "verbal_explanation": "חד-צדדיות שוות -> מקבילים (לא נכון, הן צריכות להשלים ל-180)", "math_expression": "X" }
        ],
        "final_answer": "אם זוויות חד-צדדיות שוות הישרים מקבילים.",
        "options": ["אם מתאימות שוות הישרים מקבילים", "אם מתחלפות שוות הישרים מקבילים", "אם חד-צדדיות משלימות ל-180° הישרים מקבילים", "אם חד-צדדיות שוות הישרים מקבילים."],
        "correctAnswer": 3
    },
    {
        "id": 70,
        "subTopic": "הוכחת מקבילות",
        "difficulty": "High",
        "question_text": "נתונים שני ישרים מקבילים a ו-b. נתון ישר c המקביל לישר b. מה ניתן לומר על הקשר בין a ל-c?",
        "hint": "זהו כלל המעבר של הקווים המקבילים. אם שני קווים מקבילים לאותו קו שלישי, מה הקשר ביניהם?",
        "solution_steps": [
            { "verbal_explanation": "על פי 'כלל המעבר' בגיאומטריה, ישרים המקבילים לישר שלישי מקבילים זה לזה.", "math_expression": "a||b , b||c -> a||c" }
        ],
        "final_answer": "הישרים a ו-c מקבילים.",
        "options": ["הם נחתכים", "הם מקבילים.", "הם מאונכים", "לא ניתן לדעת"],
        "correctAnswer": 1
    },
    {
        "id": 71,
        "subTopic": "הוכחת מקבילות",
        "difficulty": "Medium",
        "question_text": "נתונים שני ישרים. זוג זוויות מתאימות מיוצגות על ידי <strong>2x + 20</strong> ו- <strong>3x - 10</strong>. מהו ערכו של x המבטיח שהישרים יהיו מקבילים?",
        "hint": "השוו בין שני הביטויים כדי למצוא את ה-x שיוצר שוויון בין הזוויות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבנה משוואת שוויון: 3x - 10 = 2x + 20.", "math_expression": "3x - 10 = 2x + 20" },
            { "verbal_explanation": "שלב 2: נעביר את ה-2x שמאלה ואת ה-10 ימינה.", "math_expression": "3x - 2x = 20 + 10" },
            { "verbal_explanation": "שלב 3: נמצא את ערכו של x.", "math_expression": "x = 30" }
        ],
        "final_answer": "30",
        "options": ["10", "30", "50", "20"],
        "correctAnswer": 1
    },
    {
        "id": 72,
        "subTopic": "הוכחת מקבילות",
        "difficulty": "High",
        "question_text": "במרובע ABCD נתון ש- ∠C = 120° ו- ∠D = 60°. האם הבסיסים AB ו-CD מקבילים?",
        "hint": "בדקו אם הזוויות האלו הן חד-צדדיות ביחס לבסיסים. הזוויות C ו-D נמצאות על אותה צלע CD.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את מיקום הזוויות. הזוויות C ו-D הן זוויות סמוכות על אותה צלע.", "math_expression": "סמוכות" },
            { "verbal_explanation": "שלב 2: נבדוק אם הן חד-צדדיות ביחס לשוקיים AD ו-BC. הסכום שלהן הוא 180.", "math_expression": "120° + 60° = 180°" },
            { "verbal_explanation": "שלב 3: מכיוון שסכום הזוויות ליד השוקיים הוא 180, זה מעיד שהבסיסים AB ו-CD מקבילים.", "math_expression": "AB || CD" }
        ],
        "final_answer": "כן, הבסיסים מקבילים.",
        "options": ["כן", "לא", "רק אם המרובע הוא טרפז", "אי אפשר לדעת"],
        "correctAnswer": 0
    },
    {
        "id": 73,
        "subTopic": "הוכחת מקבילות",
        "difficulty": "Low",
        "question_text": "אם שני ישרים מאונכים לאותו ישר שלישי, מה ניתן לומר על היחס ביניהם?",
        "hint": "דמיינו שני עמודי חשמל שעומדים על אותה אדמה ישרה. שניהם יוצרים 90 מעלות עם האדמה.",
        "solution_steps": [
            { "verbal_explanation": "אם ישר א' מאונך לישר ג' (90 מעלות) וישר ב' מאונך לישר ג' (90 מעלות), הרי שנוצרות זוויות מתאימות שוות.", "math_expression": "90° = 90°" },
            { "verbal_explanation": "מכאן נובע שהם חייבים להיות מקבילים זה לזה.", "math_expression": "א || ב" }
        ],
        "final_answer": "הם מקבילים זה לזה.",
        "options": ["הם נחתכים", "הם מקבילים.", "הם מאונכים זה לזה", "הם מתלכדים"],
        "correctAnswer": 1
    },
    {
        "id": 74,
        "subTopic": "הוכחת מקבילות",
        "difficulty": "High",
        "question_text": "זוג זוויות חד-צדדיות מיוצגות על ידי <strong>x + 40</strong> ו- <strong>x + 60</strong>. מהו ערכו של x המבטיח שהישרים מקבילים?",
        "hint": "חברו את שני הביטויים והשוו ל-180 מעלות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: סכום זוויות חד-צדדיות במצב מקביל חייב להיות 180.", "math_expression": "(x + 40) + (x + 60) = 180°" },
            { "verbal_explanation": "שלב 2: נכנס איברים: 2x + 100 = 180.", "math_expression": "2x + 100 = 180°" },
            { "verbal_explanation": "שלב 3: נחסיר 100 ונחלק ב-2: 2x = 80.", "math_expression": "x = 40" }
        ],
        "final_answer": "40",
        "options": ["40", "80", "140", "20"],
        "correctAnswer": 0
    },
    {
        "id": 75,
        "subTopic": "הוכחת מקבילות",
        "difficulty": "High",
        "question_text": "נתון משולש ABC. מעבירים קטע DE בתוך המשולש כך שזווית ADE שווה לזווית ABC. מה ניתן לומר על הקטע DE?",
        "hint": "הסתכלו על הזוויות האלו. הן נמצאות באותו צד ובאותו גובה. אלו זוויות מתאימות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הזוויות ADE ו-ABC הן זוויות מתאימות ביחס לישרים DE ו-BC.", "math_expression": "מתאימות" },
            { "verbal_explanation": "שלב 2: נתון שהן שוות זו לזו.", "math_expression": "ADE = ABC" },
            { "verbal_explanation": "שלב 3: על פי משפט הוכחת המקבילות, אם מתאימות שוות, הישרים מקבילים.", "math_expression": "DE || BC" }
        ],
        "final_answer": "הוא מקביל לבסיס BC.",
        "options": ["הוא שווה לבסיס", "הוא מקביל לבסיס BC.", "הוא מאונך לבסיס", "הוא חוצה את הזווית"],
        "correctAnswer": 1
    }
];